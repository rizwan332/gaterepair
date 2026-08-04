/**
 * Crawls the running site and reports broken internal links.
 *
 * Written because "verify all navigation links" is not something anyone can do
 * reliably by hand on a site with 190 city pages, 11 brand pages and a footer
 * on every one of them. A single mistyped href is invisible in review and
 * obvious to a customer.
 *
 * Checks internal links only. External hosts are listed but not fetched — we do
 * not control them, and failing a build because someone else's server is slow
 * is a worse outcome than the thing it protects against.
 *
 *   npm run check:links               # against http://localhost:3100
 *   npm run check:links -- <baseUrl>
 */

const BASE = process.argv[2] ?? 'http://localhost:3100'
const CONCURRENCY = 8

type Finding = { url: string; status: number | string; foundOn: string[] }

const seen = new Set<string>()
const queue: string[] = ['/']
const foundOn = new Map<string, Set<string>>()
const broken: Finding[] = []
const redirects: { from: string; to: string; status: number }[] = []
const externalLinks = new Set<string>()
let checked = 0

function normalise(href: string, from: string): string | null {
  if (!href) return null
  // Non-HTTP schemes are handed to the device, not fetched. sms: belongs here
  // as much as tel: — omitting it reported four phantom 404s.
  if (href.startsWith('#') || /^(mailto:|tel:|sms:|geo:|whatsapp:)/.test(href)) return null
  if (/^https?:\/\//i.test(href)) {
    if (!href.startsWith(BASE)) {
      externalLinks.add(href.split('?')[0])
      return null
    }
    href = href.slice(BASE.length) || '/'
  }
  if (!href.startsWith('/')) {
    // Relative link — resolve against the directory of the current page.
    const dir = from.slice(0, from.lastIndexOf('/') + 1)
    href = dir + href
  }
  return href.split('#')[0].replace(/\/$/, '') || '/'
}

async function crawl(path: string) {
  const url = `${BASE}${path}`
  let res: Response
  try {
    res = await fetch(url, { redirect: 'manual' })
  } catch (err) {
    broken.push({ url: path, status: `fetch failed: ${(err as Error).message}`, foundOn: [...(foundOn.get(path) ?? [])] })
    return
  }
  checked++

  if (res.status >= 400) {
    broken.push({ url: path, status: res.status, foundOn: [...(foundOn.get(path) ?? [])] })
    return
  }
  // Redirects are reported, not silently accepted. A page that redirects away
  // is indistinguishable from a working page to a crawler that follows them —
  // which is how a legacy /testimonials -> /reviews rule silently swallowed a
  // brand new /testimonials page, and nobody noticed until it was opened.
  if (res.status >= 300 && res.status < 400) {
    redirects.push({ from: path, to: res.headers.get('location') ?? '?', status: res.status })
    return
  }

  const contentType = res.headers.get('content-type') ?? ''
  if (!contentType.includes('text/html')) return

  const html = await res.text()
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const target = normalise(match[1], path)
    if (!target) continue
    if (!foundOn.has(target)) foundOn.set(target, new Set())
    foundOn.get(target)!.add(path)
    if (!seen.has(target)) {
      seen.add(target)
      queue.push(target)
    }
  }
}

async function main() {
  seen.add('/')
  console.log(`Crawling ${BASE}\n`)

  while (queue.length > 0) {
    const batch = queue.splice(0, CONCURRENCY)
    await Promise.all(batch.map(crawl))
    if (checked % 40 === 0) process.stdout.write(`  ${checked} pages checked\r`)
  }

  console.log(`\n${checked} internal pages checked`)
  console.log(`${externalLinks.size} distinct external links (not fetched)`)

  if (redirects.length > 0) {
    console.log(`
${redirects.length} internal link${redirects.length === 1 ? '' : 's'} redirect:`)
    for (const r of redirects) console.log(`  ${r.status}  ${r.from} -> ${r.to}`)
  }

  if (broken.length === 0) {
    console.log('\n✓ No broken internal links.')
    return
  }

  console.log(`\n✗ ${broken.length} broken internal link${broken.length === 1 ? '' : 's'}:\n`)
  for (const b of broken) {
    console.log(`  ${b.status}  ${b.url}`)
    for (const src of b.foundOn.slice(0, 4)) console.log(`         linked from ${src}`)
    if (b.foundOn.length > 4) console.log(`         …and ${b.foundOn.length - 4} more pages`)
  }
  process.exitCode = 1
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
