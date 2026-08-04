import fs from 'node:fs'
import path from 'node:path'

/**
 * Resolves an official brand logo file, if one has been supplied.
 *
 * We do not have licensed manufacturer artwork. Naming a manufacturer you
 * genuinely repair is nominative fair use; redistributing their logo files is a
 * different question, and the answer has to come from the client rather than
 * from us pulling images off a manufacturer's site.
 *
 * So every surface that wants a logo degrades to a typographic wordmark and
 * upgrades automatically: drop `public/logos/<slug>.svg` (or .png/.webp) in
 * place and it appears on the next build. The directory IS the manifest — there
 * is no list to keep in sync.
 *
 * Server-only: reads the filesystem at build time. Never import into a client
 * component.
 */

const LOGO_DIR = path.join(process.cwd(), 'public', 'logos')
const EXTENSIONS = ['svg', 'webp', 'png'] as const

export function logoFor(slug: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(LOGO_DIR, `${slug}.${ext}`))) return `/logos/${slug}.${ext}`
  }
  return null
}

/** True when at least one real logo exists, so callers can pick a layout. */
export function anyLogosPresent(slugs: string[]): boolean {
  return slugs.some((slug) => logoFor(slug) !== null)
}
