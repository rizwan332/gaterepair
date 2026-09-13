/**
 * Title, description and share-tag guard. Runs against the BUILD OUTPUT, not
 * the source, because that is the only place the layout's title template, the
 * `absolute` overrides, Next's shallow metadata merge and every interpolated
 * city name have actually been resolved.
 *
 * Why it exists: on 6 Sep 2026 an audit measured 192 of 241 templated pages
 * with titles over 60 characters and 138 with descriptions under 120. Not one
 * of those was a typo — every template was written to fit the input it was
 * drafted against, and the site then generated 190 city pages whose names range
 * from "Anna" to "North Richland Hills". The failure is invisible in the source
 * and obvious in the output, so it gets checked in the output.
 *
 * The share-tag checks were added 13 Sep 2026 for the same reason. Every page
 * had been declaring the homepage as its og:url, and the fix for that briefly
 * stripped og:image from 252 of 253 pages — both invisible in the source, both
 * one grep away in the build.
 *
 *   npm run build && npm run validate:meta
 */

import fs from 'fs'
import path from 'path'
import { business } from '../content/business'
import { DESCRIPTION_MAX } from '../lib/seo'

const TITLE_MAX = 62 // 60 plus two characters of slack for a long city name
const DESCRIPTION_MIN = 110

const ROOT = '.next/server/app'

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

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')

type Page = {
  url: string
  title: string
  description: string
  canonical: string
  noindex: boolean
  ogUrl: string
  ogImage: string
  ogImageAlt: string
  ogImageWidth: string
  ogImageHeight: string
  twitterCard: string
  twitterImage: string
}

const pages: Page[] = files
  .map((file) => {
    const html = fs.readFileSync(file, 'utf8')
    const grab = (re: RegExp) => decode((html.match(re) ?? [, ''])[1] ?? '')
    const url = '/' + path.relative(ROOT, file).split(path.sep).join('/').replace(/\.html$/, '')
    return {
      url: url === '/index' ? '/' : url,
      title: grab(/<title[^>]*>([\s\S]*?)<\/title>/i),
      description: grab(/<meta name="description" content="([^"]*)"/),
      canonical: grab(/rel="canonical" href="([^"]+)"/),
      noindex: /<meta name="robots" content="[^"]*noindex/.test(html),
      ogUrl: grab(/<meta property="og:url" content="([^"]+)"/),
      ogImage: grab(/<meta property="og:image" content="([^"]+)"/),
      ogImageAlt: grab(/<meta property="og:image:alt" content="([^"]+)"/),
      ogImageWidth: grab(/<meta property="og:image:width" content="([^"]+)"/),
      ogImageHeight: grab(/<meta property="og:image:height" content="([^"]+)"/),
      twitterCard: grab(/<meta name="twitter:card" content="([^"]+)"/),
      twitterImage: grab(/<meta name="twitter:image" content="([^"]+)"/),
    }
  })
  .filter((p) => p.url !== '/_not-found')

const errors: string[] = []
const warnings: string[] = []

// --- 1. titles and descriptions --------------------------------------------
//
// Only pages we actually submit are held to the budget. A `noindex` page never
// renders a snippet, so a long title on one is noise rather than a defect.

for (const page of pages.filter((p) => !p.noindex)) {
  if (!page.title) errors.push(`${page.url} has no <title>.`)
  else if (page.title.length > TITLE_MAX)
    errors.push(`${page.url} title is ${page.title.length} chars (max ${TITLE_MAX}): "${page.title}"`)

  if (!page.description) errors.push(`${page.url} has no meta description.`)
  else if (page.description.length > DESCRIPTION_MAX)
    errors.push(
      `${page.url} description is ${page.description.length} chars (max ${DESCRIPTION_MAX}).`,
    )
  else if (page.description.length < DESCRIPTION_MIN)
    warnings.push(
      `${page.url} description is only ${page.description.length} chars — the snippet has room to spare.`,
    )
}

// --- 2. duplicate titles ----------------------------------------------------

const byTitle = new Map<string, string[]>()
for (const page of pages.filter((p) => !p.noindex)) {
  if (!page.title) continue
  byTitle.set(page.title, [...(byTitle.get(page.title) ?? []), page.url])
}
for (const [title, urls] of byTitle) {
  if (urls.length > 1) errors.push(`Duplicate title on ${urls.join(' and ')}: "${title}"`)
}

// --- 3. canonicals ----------------------------------------------------------

for (const page of pages) {
  if (!page.canonical) {
    errors.push(`${page.url} has no canonical.`)
    continue
  }
  if (!page.canonical.startsWith(business.url)) {
    errors.push(
      `${page.url} canonical points at a different host: ${page.canonical} (expected ${business.url}).`,
    )
  }
}

// --- 4. share tags ----------------------------------------------------------
//
// Checked on every page, noindex included: a paid landing page is shared as
// readily as an indexed one, and a share card has nothing to do with indexing.
//
// The homepage is the reference for the image, because it is the one page that
// takes its image tags straight from app/opengraph-image.tsx. Every other page
// gets them from SHARE_IMAGE in lib/seo.ts, which copies that file's exports —
// so if the two drift apart, this is where it shows.

const reference = pages.find((p) => p.url === '/')

for (const page of pages) {
  if (!page.ogUrl) errors.push(`${page.url} has no og:url.`)
  else if (page.canonical && page.ogUrl !== page.canonical)
    errors.push(
      `${page.url} og:url is ${page.ogUrl} but its canonical is ${page.canonical} — shares would be attributed to the wrong page.`,
    )

  if (!page.ogImage) errors.push(`${page.url} has no og:image — shared links would show no picture.`)
  if (page.twitterCard !== 'summary_large_image')
    errors.push(`${page.url} twitter:card is "${page.twitterCard || 'missing'}", expected summary_large_image.`)
  if (!page.twitterImage) errors.push(`${page.url} has no twitter:image.`)

  if (reference && page !== reference && page.ogImage) {
    for (const [field, label] of [
      ['ogImageAlt', 'og:image:alt'],
      ['ogImageWidth', 'og:image:width'],
      ['ogImageHeight', 'og:image:height'],
    ] as const) {
      if (page[field] !== reference[field])
        errors.push(
          `${page.url} ${label} is "${page[field]}" but the homepage's is "${reference[field]}" — SHARE_IMAGE in lib/seo.ts has drifted from app/opengraph-image.tsx.`,
        )
    }
  }
}

// --- 5. the sitemap must agree with the pages -------------------------------

const sitemapFile = path.join(ROOT, 'sitemap.xml.body')
if (fs.existsSync(sitemapFile)) {
  const xml = fs.readFileSync(sitemapFile, 'utf8')
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const noindexed = new Set(pages.filter((p) => p.noindex).map((p) => p.url))
  for (const loc of locs) {
    const route = loc.replace(business.url, '') || '/'
    if (noindexed.has(route)) errors.push(`Sitemap lists ${route}, which is noindex.`)
  }
  console.log(`Sitemap: ${locs.length} URLs`)
} else {
  warnings.push('No sitemap.xml.body in the build output — sitemap checks skipped.')
}

// --- report -----------------------------------------------------------------

const submitted = pages.filter((p) => !p.noindex)
console.log(
  `${pages.length} pages built — ${submitted.length} submitted, ${pages.length - submitted.length} noindex`,
)

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`)
  for (const w of warnings) console.log(`  · ${w}`)
}

if (errors.length) {
  // Collapse identical messages that differ only by route, so one broken
  // template reads as one problem with a count rather than 190 lines.
  const grouped = new Map<string, string[]>()
  for (const e of errors) {
    const key = e.replace(/^\/\S*/, '<page>')
    grouped.set(key, [...(grouped.get(key) ?? []), e.split(' ')[0]])
  }
  console.error(`\n${errors.length} error(s):`)
  for (const [message, routes] of grouped) {
    const where = routes.length > 3 ? `${routes.slice(0, 3).join(', ')} +${routes.length - 3} more` : routes.join(', ')
    console.error(`  ✗ ${message}\n      on: ${where}`)
  }
  process.exit(1)
}

console.log('\n✓ Titles, descriptions, canonicals, share tags and sitemap all valid.')
