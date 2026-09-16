/**
 * SEO regression guard.
 *
 * Every change from here on adds pages and promotes existing ones out of
 * `noindex`. Both are safe in principle and neither is safe by assumption: the
 * things that quietly break a site that is already ranking are a canonical that
 * moves, a title that changes under a URL Google has already indexed, a page
 * that drops out of the sitemap, or an indexed URL that stops existing. None of
 * those announce themselves — they show up in Search Console weeks later as
 * lost impressions.
 *
 * So the build's whole SEO surface gets recorded before a change and compared
 * after it:
 *
 *   npm run build && npm run seo:snapshot -- --save baseline
 *   …make the change…
 *   npm run build && npm run seo:snapshot -- --diff baseline
 *
 * The diff classifies every difference. Additions and deliberate promotions are
 * reported and pass; anything that could cost an existing ranking fails the run.
 *
 * Snapshots live in .seo-snapshots/ and are gitignored — they are a local
 * before/after, not a artefact to review in a PR.
 */

import fs from 'fs'
import path from 'path'

const ROOT = '.next/server/app'
const STORE = '.seo-snapshots'

type Page = {
  url: string
  title: string
  description: string
  canonical: string
  noindex: boolean
  inSitemap: boolean
}
type Snapshot = { takenAt: string; pages: Record<string, Page> }

function readBuild(): Snapshot {
  if (!fs.existsSync(ROOT)) {
    console.error(`✗ No build output at ${ROOT}. Run "npm run build" first.`)
    process.exit(1)
  }

  const files: string[] = []
  ;(function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.html')) files.push(full)
    }
  })(ROOT)

  const sitemapFile = path.join(ROOT, 'sitemap.xml.body')
  const sitemap = new Set<string>()
  if (fs.existsSync(sitemapFile)) {
    for (const m of fs.readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
      sitemap.add(new URL(m[1]).pathname.replace(/\/$/, '') || '/')
    }
  }

  const decode = (s: string) =>
    s
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')

  const pages: Record<string, Page> = {}
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8')
    const grab = (re: RegExp) => decode((html.match(re) ?? [, ''])[1] ?? '')
    const raw = '/' + path.relative(ROOT, file).split(path.sep).join('/').replace(/\.html$/, '')
    const url = raw === '/index' ? '/' : raw
    if (url === '/_not-found') continue
    pages[url] = {
      url,
      title: grab(/<title[^>]*>([\s\S]*?)<\/title>/i),
      description: grab(/<meta name="description" content="([^"]*)"/),
      canonical: grab(/rel="canonical" href="([^"]+)"/),
      noindex: /<meta name="robots" content="[^"]*noindex/.test(html),
      inSitemap: sitemap.has(url),
    }
  }
  return { takenAt: new Date().toISOString(), pages }
}

const arg = (flag: string) => {
  const i = process.argv.indexOf(flag)
  return i >= 0 ? (process.argv[i + 1] ?? '') : null
}

const saveName = arg('--save')
const diffName = arg('--diff')
const snapshotPath = (name: string) => path.join(STORE, `${name}.json`)

const current = readBuild()
const counts = Object.values(current.pages)
console.log(
  `${counts.length} pages · ${counts.filter((p) => !p.noindex).length} indexable · ${counts.filter((p) => p.inSitemap).length} in sitemap`,
)

if (saveName) {
  fs.mkdirSync(STORE, { recursive: true })
  fs.writeFileSync(snapshotPath(saveName), JSON.stringify(current, null, 2))
  console.log(`\n✓ Saved as ${snapshotPath(saveName)}`)
  process.exit(0)
}

if (!diffName) {
  console.log('\nNothing to do. Pass --save <name> or --diff <name>.')
  process.exit(0)
}

if (!fs.existsSync(snapshotPath(diffName))) {
  console.error(`\n✗ No snapshot at ${snapshotPath(diffName)}. Take one before the change.`)
  process.exit(1)
}

const before: Snapshot = JSON.parse(fs.readFileSync(snapshotPath(diffName), 'utf8'))

const regressions: string[] = []
const promotions: string[] = []
const additions: string[] = []
const notes: string[] = []

for (const [url, was] of Object.entries(before.pages)) {
  const now = current.pages[url]

  // A URL that existed and no longer does. If it was indexable, that is a lost
  // page unless something redirects it — which this cannot see, so it is always
  // reported and always fails.
  if (!now) {
    regressions.push(`${url} no longer builds (was ${was.noindex ? 'noindex' : 'INDEXABLE'}). Confirm a 301 covers it.`)
    continue
  }

  if (was.canonical !== now.canonical)
    regressions.push(`${url} canonical changed:\n      was ${was.canonical}\n      now ${now.canonical}`)

  if (!was.noindex && now.noindex)
    regressions.push(`${url} was indexable and is now noindex — it will drop out of the index.`)

  if (was.inSitemap && !now.inSitemap && !now.noindex)
    regressions.push(`${url} left the sitemap but is still indexable.`)

  if (was.noindex && !now.noindex) promotions.push(`${url} promoted to indexable${now.inSitemap ? ' and added to the sitemap' : ''}.`)

  // Title and description changes on a page Google has already indexed are not
  // failures — they are often the point — but they are the other thing that
  // moves impressions, so they are always surfaced.
  if (!was.noindex && was.title !== now.title)
    notes.push(`${url} title changed:\n      was "${was.title}"\n      now "${now.title}"`)
  if (!was.noindex && was.description !== now.description)
    notes.push(`${url} description changed on an indexed page.`)
}

for (const url of Object.keys(current.pages)) {
  if (!before.pages[url]) additions.push(`${url}${current.pages[url].noindex ? ' (noindex)' : ''}`)
}

console.log(`\nAgainst ${diffName} (taken ${before.takenAt}):`)
console.log(`  ${additions.length} new page(s) · ${promotions.length} promoted · ${notes.length} metadata change(s) on indexed pages`)

const show = (label: string, items: string[], mark: string, limit = 12) => {
  if (items.length === 0) return
  console.log(`\n${label}:`)
  for (const item of items.slice(0, limit)) console.log(`  ${mark} ${item}`)
  if (items.length > limit) console.log(`  ${mark} …and ${items.length - limit} more`)
}

show('New pages', additions, '+')
show('Promoted out of noindex', promotions, '↑')
show('Metadata changed on already-indexed pages', notes, '·')

if (regressions.length) {
  console.error(`\n${regressions.length} regression(s) — these can cost existing rankings:`)
  for (const r of regressions) console.error(`  ✗ ${r}`)
  process.exit(1)
}

console.log('\n✓ No SEO regressions: every existing URL still builds, with its canonical and indexability intact.')
