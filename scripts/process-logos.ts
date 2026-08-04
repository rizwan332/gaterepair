/**
 * Normalises manufacturer brand logos into public/logos/.
 *
 * Source files are the client's own — taken from Shield Gate Repair's existing
 * California site, which is their asset library, not a third party's. They
 * arrive as 400x229 JPEG/PNG with white backgrounds and wildly different
 * amounts of padding baked in, which is why a raw drop-in looks wrong: a
 * wordmark that fills its canvas renders visually twice the size of one that
 * sits in the middle of a lot of white.
 *
 * So each logo is trimmed to its actual ink, then re-padded to a common box.
 * That is the difference between a logo row that looks designed and one that
 * looks pasted.
 *
 * Output is WebP at 2x the largest display size. `lib/brand-logos.ts` prefers
 * svg > webp > png, so dropping a real vector in later supersedes these with no
 * code change.
 *
 *   npm run logos
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE = path.join(process.cwd(), 'client-assets', 'logos')
const OUT_DIR = path.join(process.cwd(), 'public', 'logos')

/**
 * Normalise by HEIGHT, not into a fixed box.
 *
 * Padding every logo into one canvas seems tidier and renders worse: displayed
 * at a fixed height, a wide wordmark like LiftMaster (368x64 of ink) gets
 * contained inside the box and ends up roughly half the optical size of a
 * squarer mark like HySecurity (170x192). Equal box, unequal logos.
 *
 * Exporting at a common ink height and letting width vary is how logo rows are
 * actually built. The CSS then caps width so a very wide mark cannot dominate.
 */
const TARGET_HEIGHT = 120
const MAX_WIDTH = 420

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })

  let files: string[]
  try {
    files = (await fs.readdir(SOURCE)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
  } catch {
    console.log('No client-assets/logos directory — nothing to do.')
    return
  }

  for (const file of files.sort()) {
    const slug = file.replace(/\.[^.]+$/, '')

    // Trim the flat border the source canvas carries. Threshold is generous
    // because these are JPEG-compressed whites, not pure #fff.
    const trimmed = await sharp(path.join(SOURCE, file))
      .flatten({ background: '#ffffff' })
      .trim({ background: '#ffffff', threshold: 12 })
      .toBuffer()

    const meta = await sharp(trimmed).metadata()

    await sharp(trimmed)
      .resize({
        height: TARGET_HEIGHT,
        width: MAX_WIDTH,
        fit: 'inside',
        withoutEnlargement: false,
      })
      .flatten({ background: '#ffffff' })
      .webp({ quality: 92 })
      .toFile(path.join(OUT_DIR, `${slug}.webp`))

    const out = await fs.stat(path.join(OUT_DIR, `${slug}.webp`))
    console.log(
      `  ${slug.padEnd(14)} trimmed to ${meta.width}x${meta.height} -> ${(out.size / 1024).toFixed(1)}KB webp`,
    )
  }

  console.log(`\n${files.length} logos -> ${path.relative(process.cwd(), OUT_DIR)}`)
  console.log('Brands with no logo file fall back to a wordmark automatically.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
