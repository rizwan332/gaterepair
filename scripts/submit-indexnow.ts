/**
 * Submits every indexable URL to IndexNow.
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
 * Measured 10 Nov 2026: Bing had roughly twenty of the site's 1,588 pages — the
 * homepage, /brands, two brand pages and about fifteen city pages. Everything
 * else was absent. That matters far more than it looks, because ChatGPT's
 * search leans on Bing: a page Bing has never seen cannot be the answer when
 * someone asks ChatGPT who repairs a LiftMaster LA500 in Plano, no matter how
 * good the page is.
 *
 * A sitemap is a request to come and look, acted on whenever the crawler feels
 * like it. IndexNow is a push — Bing, Yandex, Seznam and Naver accept the URL
 * list directly and the protocol is built for exactly this. Google does not
 * participate; Google indexation stays a Search Console job.
 *
 * Safe to re-run. IndexNow is idempotent and meant to be called on publish, so
 * the right habit is running it after a deploy that adds or changes pages.
 *
 *   npm run submit:indexnow          # submit everything
 *   npm run submit:indexnow -- --dry # print what would be sent
 */

import { allSitemapUrls } from '../lib/sitemap'
import { business } from '../content/business'

/**
 * The key is public by design — the protocol verifies ownership by having the
 * engine fetch https://<host>/<key>.txt and check it contains this same value.
 * It is not a secret and must not be treated as one: it belongs in the repo
 * next to the key file it has to match, not in the environment.
 */
const KEY = 'edd6e5ffd29ba094ec90c0529133f320'
const ENDPOINT = 'https://api.indexnow.org/indexnow'
/** The protocol's cap is 10,000 URLs per request. */
const BATCH = 10_000

async function main() {
  const dry = process.argv.includes('--dry')
  const host = new URL(business.url).host
  const urls = [...new Set(allSitemapUrls())]

  if (urls.length === 0) throw new Error('No URLs to submit — lib/sitemap.ts returned nothing.')

  console.log(`${urls.length} URLs for ${host}`)
  if (dry) {
    urls.slice(0, 5).forEach((u) => console.log('  ' + u))
    console.log(`  ... and ${urls.length - 5} more`)
    console.log(`\nKey file must serve "${KEY}" at ${business.url}/${KEY}.txt`)
    return
  }

  // Verify the key file is live first. Submitting without it is rejected, and
  // the rejection is a bare 403 that says nothing about the cause.
  const keyUrl = `${business.url}/${KEY}.txt`
  const keyRes = await fetch(keyUrl)
  const keyBody = (await keyRes.text()).trim()
  if (!keyRes.ok || keyBody !== KEY) {
    throw new Error(
      `Key file check failed: ${keyUrl} returned ${keyRes.status} with "${keyBody.slice(0, 40)}". ` +
        `It must return exactly "${KEY}". Deploy before submitting.`,
    )
  }
  console.log(`Key file verified at ${keyUrl}`)

  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH)
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key: KEY, keyLocation: keyUrl, urlList }),
    })
    // 200 accepted, 202 accepted pending key validation. Both are successes.
    const ok = res.status === 200 || res.status === 202
    console.log(`  batch ${i / BATCH + 1}: ${urlList.length} URLs -> ${res.status} ${ok ? 'accepted' : await res.text()}`)
    if (!ok) process.exitCode = 1
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
