/**
 * Verifies every asset the site references actually exists on the CDN.
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
 * On 7 Aug 2026 two new case studies went live with every image broken. The
 * code was correct and the files were in git — they had simply never been
 * uploaded to S3, because `sync-cdn.sh` is a separate manual step from the
 * deploy. CloudFront answers 403 (not 404) for a key that does not exist, so it
 * looked like a permissions fault rather than a missing file.
 *
 * The comment in lib/cdn.ts says an unset CDN "degrades to a working site
 * rather than a broken one". That is true all-or-nothing and false in between:
 * NEXT_PUBLIC_CDN_URL is inlined at build time, so once it is set every asset
 * points at CloudFront and a partially-synced bucket produces broken images
 * with no fallback — on the newest pages, which are the ones nobody has looked
 * at yet.
 *
 * This turns that class of failure into a build error.
 *
 *   npm run verify:cdn
 *
 * Exits non-zero on the first missing asset, so it can gate a deploy.
 */

import { media } from '../content/media-manifest'
import { videos } from '../content/video-manifest'

const CDN = (process.env.NEXT_PUBLIC_CDN_URL ?? '').replace(/\/+$/, '')
const CONCURRENCY = 12

type Missing = { url: string; status: number | string }

async function head(url: string): Promise<number | 'ERR'> {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    return res.status
  } catch {
    return 'ERR'
  }
}

/** Every URL the site can request for a given image, across widths and formats. */
function imageUrls(): string[] {
  const out: string[] = []
  for (const list of Object.values(media)) {
    for (const image of list) {
      for (const width of image.widths) {
        out.push(`${CDN}${image.src}-${width}.avif`)
        out.push(`${CDN}${image.src}-${width}.webp`)
      }
    }
  }
  return out
}

function videoUrls(): string[] {
  const out: string[] = []
  for (const video of videos) {
    out.push(`${CDN}${video.src}`)
    // Posters are emitted in three formats by the video pipeline.
    for (const ext of ['avif', 'webp', 'jpg']) out.push(`${CDN}${video.poster}.${ext}`)
  }
  return out
}

async function main() {
  if (!CDN) {
    console.log('NEXT_PUBLIC_CDN_URL is not set — assets serve from /public, nothing to verify.')
    return
  }

  const urls = [...imageUrls(), ...videoUrls()]
  console.log(`Checking ${urls.length} asset URLs against ${CDN}`)

  const missing: Missing[] = []
  let checked = 0

  // Simple worker pool. A serial pass over ~2,000 URLs takes minutes; this
  // keeps it to seconds without hammering CloudFront hard enough to matter.
  const queue = [...urls]
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (;;) {
        const url = queue.pop()
        if (!url) return
        const status = await head(url)
        checked++
        if (status !== 200) missing.push({ url, status })
        if (checked % 250 === 0) process.stdout.write(`  ${checked}/${urls.length}\r`)
      }
    }),
  )

  console.log(`  ${checked}/${urls.length} checked`)

  if (missing.length === 0) {
    console.log(`\n✓ All ${urls.length} assets present on the CDN.`)
    return
  }

  // Group by the asset stem rather than listing every width and format, or a
  // single un-synced photograph reports as ten separate failures.
  const byStem = new Map<string, number>()
  for (const m of missing) {
    const stem = m.url.replace(CDN, '').replace(/-\d+\.(avif|webp)$/, '').replace(/\.(mp4|avif|webp|jpg)$/, '')
    byStem.set(stem, (byStem.get(stem) ?? 0) + 1)
  }

  console.error(`\n✗ ${missing.length} asset URLs missing, across ${byStem.size} assets:\n`)
  for (const [stem, count] of [...byStem].sort()) {
    console.error(`   ${stem}  (${count} URLs)`)
  }
  console.error(`\nRun ./scripts/sync-cdn.sh to upload them, then re-run this check.`)
  process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
