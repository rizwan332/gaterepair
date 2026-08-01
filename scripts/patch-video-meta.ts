/**
 * Merges hand-written video titles and descriptions from content/video-meta.ts
 * into the generated manifest, without re-transcoding all 25 files.
 *
 *   npx tsx scripts/patch-video-meta.ts
 */

import { promises as fs } from 'node:fs'
import { VIDEO_META } from '../content/video-meta'

async function main() {
  const path = 'content/video-manifest.ts'
  const raw = await fs.readFile(path, 'utf8')
  const match = raw.match(/export const videos: SiteVideo\[\] = (\[[\s\S]*?\n\])/)
  if (!match) throw new Error('video-manifest.ts shape changed — cannot patch safely')

  const list = JSON.parse(match[1]) as {
    slug: string
    title: string
    description: string
    descriptionWritten: boolean
  }[]

  let patched = 0
  for (const video of list) {
    const meta = VIDEO_META[video.slug]
    if (!meta) {
      console.log('  no metadata for:', video.slug)
      continue
    }
    video.title = meta.title
    video.description = meta.description
    video.descriptionWritten = true
    patched++
  }

  await fs.writeFile(path, raw.replace(match[1], JSON.stringify(list, null, 2)), 'utf8')
  console.log(`patched ${patched}/${list.length} · distinct titles: ${new Set(list.map((v) => v.title)).size}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
