/**
 * Collapses the WordPress media dump into a clean, deduplicated image library.
 *
 * The export contains ~5,283 files that are really ~408 distinct photographs.
 * WordPress and its optimizer plugins left 4–6 derivatives of every original:
 *
 *   SGR-Iron-Gate-Repair-Services-3.jpeg                     <- original
 *   SGR-Iron-Gate-Repair-Services-3-300x200.jpeg             <- resize
 *   SGR-Iron-Gate-Repair-Services-3-scaled.jpeg              <- WP "scaled" copy
 *   SGR-Iron-Gate-Repair-Services-3-updraft-pre-smush-original.jpeg
 *   SGR-Iron-Gate-Repair-Services-3.jpeg.webp                <- optimizer output
 *   SGR-Iron-Gate-Repair-Services-3.jpg.bv.webp              <- different optimizer
 *
 * We group by normalized basename, keep the highest-resolution member of each
 * group, and re-encode to AVIF + WebP at the widths next/image actually
 * requests. Output filenames are SEO slugs, not WordPress artifacts.
 *
 *   npm run assets
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import { ALT_TEXT } from '../content/alt-text'

const SOURCE = path.join(process.cwd(), 'wordpress-uploads', '2026')
const OUT_DIR = path.join(process.cwd(), 'public', 'images')
const MANIFEST = path.join(process.cwd(), 'content', 'media-manifest.ts')

// Sources are up to 5120px wide. 2000 covers the 1920 device size for
// full-bleed hero imagery without paying for a 4K encode nobody downloads.
const WIDTHS = [400, 800, 1200, 1600, 2000] as const
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i

/**
 * Photo categories, derived from the client's own filename convention.
 * These map 1:1 onto the site's service and brand pages — the asset library
 * dictates the sitemap, not the other way round.
 */
const CATEGORIES = [
  { match: 'Gate-Installation-Services', slug: 'gate-installation', label: 'Gate Installation', kind: 'service' },
  { match: 'LiftMaster-Gate-Motor-Repair', slug: 'liftmaster', label: 'LiftMaster Gate Operator Repair', kind: 'brand' },
  { match: 'Emergency-Gate-Repair-Services', slug: 'emergency-gate-repair', label: 'Emergency Gate Repair', kind: 'service' },
  { match: 'Iron-Gate-Repair-Services', slug: 'iron-gate-repair', label: 'Iron Gate Repair', kind: 'service' },
  { match: 'Access-Control-Gate-Repair-Services', slug: 'access-control', label: 'Access Control Repair', kind: 'service' },
  { match: 'All-O-Matic-Gate-Motor-Repair', slug: 'all-o-matic', label: 'All-O-Matic Gate Operator Repair', kind: 'brand' },
  { match: 'Automatic-Gate-Repair-Services', slug: 'automatic-gate-repair', label: 'Automatic Gate Repair', kind: 'service' },
  { match: 'Elite-Gate-Motor-Repair', slug: 'elite', label: 'Elite Gate Operator Repair', kind: 'brand' },
  { match: 'FAAC-Gate-Motor-Repair', slug: 'faac', label: 'FAAC Gate Operator Repair', kind: 'brand' },
  { match: 'Electric-Gate-Repair-Services', slug: 'electric-gate-repair', label: 'Electric Gate Repair', kind: 'service' },
  { match: 'Viking-Gate-Motor-Repair', slug: 'viking', label: 'Viking Gate Operator Repair', kind: 'brand' },
  { match: 'Eagle-Gate-Motor-Repair', slug: 'eagle', label: 'Eagle Gate Operator Repair', kind: 'brand' },
  { match: 'Commercial-Gate-Repair-Services', slug: 'commercial-gate-repair', label: 'Commercial Gate Repair', kind: 'service' },
  { match: 'Ramset-Gate-Motor-Repair', slug: 'ramset', label: 'Ramset Gate Operator Repair', kind: 'brand' },
] as const

type Category = (typeof CATEGORIES)[number]

/**
 * Reduces every WordPress derivative filename back to the identity of the
 * photograph it was generated from. Order matters: the optimizer suffixes wrap
 * the WordPress ones, so they have to come off first.
 */
function normalizeKey(filename: string): string {
  let key = filename
  key = key.replace(/\.bv(_resized_(desktop|ipad|mobile))?\.(webp|png|jpe?g)$/i, '')
  key = key.replace(/\.(jpe?g|png)\.webp$/i, '')
  key = key.replace(/\.webp\.lossy$/i, '')
  key = key.replace(IMAGE_EXT, '')
  key = key.replace(/-updraft-pre-smush-original$/i, '')
  key = key.replace(/-scaled$/i, '')
  key = key.replace(/-\d+x\d+$/i, '')
  // WordPress appends -e<timestamp> when an image is edited in the admin UI.
  key = key.replace(/-e\d{10,}$/i, '')
  return key
}

function categoryFor(key: string): Category | null {
  return CATEGORIES.find((c) => key.includes(c.match)) ?? null
}

/**
 * Sequential index per category.
 *
 * The client's own trailing numbers cannot be used directly: several distinct
 * photographs normalize to the same base with no trailing digit (the original
 * plus its edited variants), so parsing the suffix collides and silently
 * overwrites files. Assigning by sorted position guarantees uniqueness.
 */
function assignIndices(keys: string[]): Map<string, number> {
  const sorted = [...keys].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  return new Map(sorted.map((key, i) => [key, i + 1]))
}

async function walk(dir: string): Promise<string[]> {
  const out: string[] = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else if (IMAGE_EXT.test(entry.name)) out.push(full)
  }
  return out
}

type Candidate = { file: string; width: number; height: number; bytes: number }

async function main() {
  console.log('Scanning', SOURCE)
  const files = await walk(SOURCE)
  console.log(`  ${files.length} image files found`)

  // Group every derivative under the identity of its source photograph.
  const groups = new Map<string, string[]>()
  for (const file of files) {
    const key = normalizeKey(path.basename(file))
    if (!categoryFor(key)) continue // skip logos, screenshots, theme assets
    const list = groups.get(key)
    if (list) list.push(file)
    else groups.set(key, [file])
  }
  console.log(`  ${groups.size} distinct photographs across ${CATEGORIES.length} categories`)

  await fs.mkdir(OUT_DIR, { recursive: true })

  // Index within each category, so slugs are unique and stable across runs.
  const indexByKey = new Map<string, number>()
  for (const category of CATEGORIES) {
    const keys = [...groups.keys()].filter((k) => categoryFor(k)?.slug === category.slug)
    for (const [key, i] of assignIndices(keys)) indexByKey.set(key, i)
  }

  const manifest: Record<string, ManifestEntry[]> = {}
  let processed = 0
  let skipped = 0

  for (const [key, members] of [...groups].sort(([a], [b]) => a.localeCompare(b))) {
    const category = categoryFor(key)!

    // Pick the highest-resolution member. File size is a poor proxy — a
    // low-quality large JPEG can outweigh a well-compressed original — so read
    // actual dimensions from the headers.
    const candidates: Candidate[] = []
    for (const file of members) {
      try {
        const [meta, stat] = await Promise.all([sharp(file).metadata(), fs.stat(file)])
        if (meta.width && meta.height) {
          candidates.push({ file, width: meta.width, height: meta.height, bytes: stat.size })
        }
      } catch {
        // Optimizer plugins left some truncated files behind; ignore them.
      }
    }
    if (candidates.length === 0) {
      skipped++
      continue
    }
    candidates.sort((a, b) => b.width * b.height - a.width * a.height || b.bytes - a.bytes)
    const best = candidates[0]

    const idx = indexByKey.get(key)!
    const slug = `${category.slug}-${String(idx).padStart(2, '0')}`
    const dir = path.join(OUT_DIR, category.slug)
    await fs.mkdir(dir, { recursive: true })

    const pipeline = sharp(best.file).rotate() // honour EXIF orientation
    const emitted: number[] = []

    for (const width of WIDTHS) {
      if (width > best.width) continue // never upscale
      const resized = pipeline.clone().resize({ width, withoutEnlargement: true })
      await Promise.all([
        resized.clone().avif({ quality: 62, effort: 4 }).toFile(path.join(dir, `${slug}-${width}.avif`)),
        resized.clone().webp({ quality: 78 }).toFile(path.join(dir, `${slug}-${width}.webp`)),
      ])
      emitted.push(width)
    }
    // Very small sources still need one usable output.
    if (emitted.length === 0) {
      await Promise.all([
        pipeline.clone().avif({ quality: 62, effort: 4 }).toFile(path.join(dir, `${slug}-${best.width}.avif`)),
        pipeline.clone().webp({ quality: 78 }).toFile(path.join(dir, `${slug}-${best.width}.webp`)),
      ])
      emitted.push(best.width)
    }

    // 16px blurred base64 preview, used as next/image blurDataURL so the layout
    // never shifts and the perceived load is instant.
    const blurBuf = await sharp(best.file).rotate().resize(16).webp({ quality: 40 }).toBuffer()
    const blurDataURL = `data:image/webp;base64,${blurBuf.toString('base64')}`

    ;(manifest[category.slug] ??= []).push({
      slug,
      src: `/images/${category.slug}/${slug}`,
      widths: emitted,
      width: best.width,
      height: best.height,
      blurDataURL,
      // Placeholder. Alt text is written per image by a human before launch —
      // it is a real image-search asset and must never be templated.
      // Placeholder only. Real alt text lives in content/alt-text.ts and is
      // merged in below — it describes what is actually in each frame and makes
      // no geographic claim, because the source photography is not DFW work.
      alt: ALT_TEXT[`${category.slug}-${String(idx).padStart(2, '0')}`] ?? `${category.label} — Shield Gate Repair`,
      altWritten: Boolean(ALT_TEXT[`${category.slug}-${String(idx).padStart(2, '0')}`]),
    })

    processed++
    if (processed % 25 === 0) console.log(`  …${processed}/${groups.size}`)
  }

  await writeManifest(manifest)

  const total = Object.values(manifest).reduce((n, list) => n + list.length, 0)
  console.log(`\nDone. ${total} images emitted, ${skipped} unreadable sources skipped.`)
  for (const c of CATEGORIES) {
    console.log(`  ${String(manifest[c.slug]?.length ?? 0).padStart(4)}  ${c.slug}`)
  }
  console.log('\nNext: write real alt text in content/media-manifest.ts (altWritten -> true).')
}

type ManifestEntry = {
  slug: string
  src: string
  widths: number[]
  width: number
  height: number
  blurDataURL: string
  alt: string
  altWritten: boolean
}

async function writeManifest(manifest: Record<string, ManifestEntry[]>) {
  for (const list of Object.values(manifest)) {
    list.sort((a, b) => a.slug.localeCompare(b.slug, undefined, { numeric: true }))
  }
  const meta = Object.fromEntries(CATEGORIES.map((c) => [c.slug, { label: c.label, kind: c.kind }]))

  const body = `// GENERATED by scripts/process-assets.ts — do not edit by hand,
// EXCEPT the \`alt\` fields. Alt text is written per image by a human and must
// never be templated; set \`altWritten: true\` once a real description is in.

export type MediaImage = {
  slug: string
  src: string
  widths: number[]
  width: number
  height: number
  blurDataURL: string
  alt: string
  altWritten: boolean
}

export const mediaCategories = ${JSON.stringify(meta, null, 2)} as const

export const media: Record<string, MediaImage[]> = ${JSON.stringify(manifest, null, 2)}

export function imagesFor(category: string, limit?: number): MediaImage[] {
  const list = media[category] ?? []
  return limit ? list.slice(0, limit) : list
}

/** Hero-quality pick for a category — first image, which is the un-suffixed original. */
export function heroFor(category: string): MediaImage | undefined {
  return media[category]?.[0]
}
`
  await fs.writeFile(MANIFEST, body, 'utf8')
  console.log(`\nManifest -> ${path.relative(process.cwd(), MANIFEST)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
