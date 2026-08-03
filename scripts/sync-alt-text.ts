/**
 * Re-applies content/alt-text.ts onto content/media-manifest.ts in place.
 *
 * `npm run assets` already does this, but it also re-encodes ~400 photographs
 * at five widths in two formats, which is a twelve-minute job. Editing a
 * sentence of alt text should not cost that. This rewrites only the `alt` and
 * `altWritten` fields and leaves every other byte of the manifest alone.
 *
 *   npm run assets:alt
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { ALT_TEXT } from '../content/alt-text'

const MANIFEST = path.join(process.cwd(), 'content', 'media-manifest.ts')

async function main() {
  const source = await fs.readFile(MANIFEST, 'utf8')

  let updated = 0
  let missing = 0
  const seen = new Set<string>()

  // Each image object in the generated manifest is a JSON block containing a
  // "slug" line followed some lines later by "alt" and "altWritten". Rewriting
  // per-slug keeps this robust against field reordering.
  const out = source.replace(
    /"slug": "([^"]+)",([\s\S]*?)"alt": ("(?:[^"\\]|\\.)*"),\n(\s*)"altWritten": (true|false)/g,
    (whole, slug: string, middle: string, currentAlt: string, indent: string) => {
      seen.add(slug)
      const written = ALT_TEXT[slug]
      if (!written) {
        missing++
        return whole
      }
      const next = JSON.stringify(written)
      if (next !== currentAlt) updated++
      return `"slug": "${slug}",${middle}"alt": ${next},\n${indent}"altWritten": true`
    },
  )

  await fs.writeFile(MANIFEST, out, 'utf8')

  const orphans = Object.keys(ALT_TEXT).filter((k) => !seen.has(k))

  console.log(`${seen.size} images in manifest`)
  console.log(`${updated} alt strings updated`)
  if (missing > 0) console.log(`${missing} images still have no hand-written alt text`)
  if (orphans.length > 0) {
    console.log(`\n⚠️  ${orphans.length} ALT_TEXT entries match no image — stale keys?`)
    for (const o of orphans) console.log(`   ${o}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
