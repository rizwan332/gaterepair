/**
 * Transcodes the 25 source videos to web-deliverable MP4 + poster frames.
 *
 * The originals run 1.8–9.9 MB, which is fine for a download and unusable for a
 * page that has to hit LCP < 2s. Every video is delivered poster-first and only
 * fetches bytes on user interaction, so the poster is what actually has to be
 * fast — the MP4 just has to be small enough that playback starts instantly
 * once someone opts in.
 *
 * Video is the single largest uncontested advantage here: not one of the 14
 * DFW competitors audited embeds any video at all.
 *
 *   npm run assets:video
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import ffmpegPath from 'ffmpeg-static'
import sharp from 'sharp'
import { VIDEO_META } from '../content/video-meta'

const run = promisify(execFile)

const SOURCE = path.join(process.cwd(), 'wordpress-uploads', '2026')
const OUT_DIR = path.join(process.cwd(), 'public', 'videos')
const POSTER_DIR = path.join(process.cwd(), 'public', 'images', 'video-posters')
const MANIFEST = path.join(process.cwd(), 'content', 'video-manifest.ts')

/** Maps the client's video filenames onto site categories. */
const CATEGORY_MAP: Array<{ match: string; category: string; label: string }> = [
  { match: 'LiftMaster-Gate-Motor-Repair', category: 'liftmaster', label: 'LiftMaster Gate Operator Repair' },
  { match: 'All-O-Matic-Gate-Motor-Repair', category: 'all-o-matic', label: 'All-O-Matic Gate Operator Repair' },
  { match: 'FAAC-Gate-Motor-Repair', category: 'faac', label: 'FAAC Gate Operator Repair' },
  { match: 'Elite-Gate-Motor-Repair', category: 'elite', label: 'Elite Gate Operator Repair' },
  { match: 'Viking-Gate-Motor-Repair', category: 'viking', label: 'Viking Gate Operator Repair' },
  { match: 'Eagle-Gate-Motor-Repair', category: 'eagle', label: 'Eagle Gate Operator Repair' },
  { match: 'Ramset-Gate-Motor-Repair', category: 'ramset', label: 'Ramset Gate Operator Repair' },
  { match: 'Gate-Installation-Services', category: 'gate-installation', label: 'Gate Installation' },
  { match: 'Emergency-Gate-Repair-Services', category: 'emergency-gate-repair', label: 'Emergency Gate Repair' },
  { match: 'Iron-Gate-Repair-Services', category: 'iron-gate-repair', label: 'Iron Gate Repair' },
  { match: 'Electric-Gate-Repair-Services', category: 'electric-gate-repair', label: 'Electric Gate Repair' },
  { match: 'Commercial-Gate-Repair-Services', category: 'commercial-gate-repair', label: 'Commercial Gate Repair' },
  { match: 'Automatic-Gate-Repair-Services', category: 'automatic-gate-repair', label: 'Automatic Gate Repair' },
  { match: 'Gate-Motor-Repair-Services', category: 'gate-motor-repair', label: 'Gate Motor Repair' },
  { match: 'Client-Testimonial', category: 'testimonial', label: 'Customer Testimonial' },
]

function slugify(name: string): string {
  return name
    .replace(/\.mp4$/i, '')
    .replace(/^SGR-/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function findVideos(dir: string): Promise<string[]> {
  const out: string[] = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await findVideos(full)))
    else if (/\.mp4$/i.test(entry.name)) out.push(full)
  }
  return out
}

/** ffmpeg writes stream info to stderr on both success and failure paths. */
async function durationOf(file: string): Promise<number> {
  let stderr = ''
  try {
    const res = await run(ffmpegPath as string, ['-i', file, '-f', 'null', '-'], {
      maxBuffer: 16 * 1024 * 1024,
    })
    stderr = res.stderr
  } catch (err) {
    stderr = String((err as { stderr?: string }).stderr ?? '')
  }
  const m = stderr.match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/)
  if (!m) return 0
  return Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
}

async function main() {
  if (!ffmpegPath) throw new Error('ffmpeg-static did not resolve a binary')

  const videos = await findVideos(SOURCE)
  console.log(`${videos.length} source videos found`)

  await fs.mkdir(OUT_DIR, { recursive: true })
  await fs.mkdir(POSTER_DIR, { recursive: true })

  const manifest: VideoEntry[] = []

  for (const [i, file] of videos.entries()) {
    const base = path.basename(file)
    const slug = slugify(base)
    const mapping = CATEGORY_MAP.find((c) => base.includes(c.match))
    const outMp4 = path.join(OUT_DIR, `${slug}.mp4`)
    const outPosterJpg = path.join(POSTER_DIR, `${slug}.jpg`)

    console.log(`[${i + 1}/${videos.length}] ${base}`)

    const duration = await durationOf(file)

    // 720p, CRF 30 with a hard bitrate ceiling. The sources are already
    // compressed, so a bare CRF encode can come out *larger* than the input —
    // the maxrate cap is what actually bounds the file. faststart puts the moov
    // atom at the front so playback begins before the whole file lands.
    await run(ffmpegPath, [
      '-y', '-i', file,
      '-vf', "scale='min(1280,iw)':-2",
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '30',
      '-maxrate', '1400k', '-bufsize', '2800k',
      '-profile:v', 'high', '-pix_fmt', 'yuv420p',
      '-c:a', 'aac', '-b:a', '80k', '-ac', '2',
      '-movflags', '+faststart',
      outMp4,
    ], { maxBuffer: 16 * 1024 * 1024 })

    // If the source was already smaller and web-safe, keep it rather than
    // shipping a larger re-encode.
    const [srcSize, outSize] = await Promise.all([fs.stat(file), fs.stat(outMp4)])
    if (outSize.size > srcSize.size) {
      await fs.copyFile(file, outMp4)
      console.log('    source was smaller — kept original')
    }

    // Poster from ~1s in — frame zero is often a black or blurred frame.
    await run(ffmpegPath, ['-y', '-ss', '1', '-i', file, '-frames:v', '1', '-vf', "scale='min(1280,iw)':-2", '-q:v', '3', outPosterJpg], { maxBuffer: 16 * 1024 * 1024 })

    const posterAvif = path.join(POSTER_DIR, `${slug}.avif`)
    const posterWebp = path.join(POSTER_DIR, `${slug}.webp`)
    await sharp(outPosterJpg).avif({ quality: 62, effort: 4 }).toFile(posterAvif)
    await sharp(outPosterJpg).webp({ quality: 78 }).toFile(posterWebp)
    const blurBuf = await sharp(outPosterJpg).resize(16).webp({ quality: 40 }).toBuffer()

    const outStat = await fs.stat(outMp4)

    manifest.push({
      slug,
      category: mapping?.category ?? 'general',
      label: mapping?.label ?? 'Gate Repair',
      src: `/videos/${slug}.mp4`,
      poster: `/images/video-posters/${slug}`,
      blurDataURL: `data:image/webp;base64,${blurBuf.toString('base64')}`,
      durationSeconds: Math.round(duration),
      bytes: outStat.size,
      // Hand-written per video in content/video-meta.ts. VideoObject rich
      // results are earned on metadata quality and no competitor is contesting
      // them, so templated titles forfeit the whole opportunity.
      title: VIDEO_META[slug]?.title ?? `${mapping?.label ?? 'Gate Repair'} — Shield Gate Repair`,
      description: VIDEO_META[slug]?.description ?? '',
      descriptionWritten: Boolean(VIDEO_META[slug]?.description),
    })

    console.log(`    ${duration}s · ${(srcSize.size / 1e6).toFixed(1)}MB -> ${(outStat.size / 1e6).toFixed(1)}MB`)
  }

  manifest.sort((a, b) => a.slug.localeCompare(b.slug))

  const body = `// GENERATED by scripts/process-videos.ts — do not edit by hand,
// EXCEPT \`title\` and \`description\`, which feed VideoObject schema and must be
// written per video. Set \`descriptionWritten: true\` once real copy is in.

export type SiteVideo = {
  slug: string
  category: string
  label: string
  src: string
  poster: string
  blurDataURL: string
  durationSeconds: number
  bytes: number
  title: string
  description: string
  descriptionWritten: boolean
}

export const videos: SiteVideo[] = ${JSON.stringify(manifest, null, 2)}

export function videosFor(category: string): SiteVideo[] {
  return videos.filter((v) => v.category === category)
}
`
  await fs.writeFile(MANIFEST, body, 'utf8')

  const totalOut = manifest.reduce((n, v) => n + v.bytes, 0)
  console.log(`\nDone. ${manifest.length} videos, ${(totalOut / 1e6).toFixed(1)}MB total.`)
  console.log('Next: write real title + description per video for VideoObject schema.')
}

type VideoEntry = {
  slug: string
  category: string
  label: string
  src: string
  poster: string
  blurDataURL: string
  durationSeconds: number
  bytes: number
  title: string
  description: string
  descriptionWritten: boolean
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
