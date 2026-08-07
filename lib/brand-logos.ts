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

/**
 * Initials to stand in for a missing logo.
 *
 * The nav dropdown previously rendered nothing at all when `logoFor` returned
 * null, so seven of seventeen brands had no icon and their labels sat 24px to
 * the left of everyone else's — it read as broken artwork rather than as a
 * deliberate absence.
 *
 * A monogram keeps every row on the same grid and is honest: it is our own
 * lettering, not an approximation of someone's trademark.
 *
 * Multi-word names take one letter per word ("US Automatic" -> "UA"). A short
 * all-caps name is already an acronym, so it is shown whole ("BFT", "GTO") —
 * abbreviating it further to "B" tells the reader nothing. Everything else
 * takes its first letter ("Apollo" -> "A"), since truncating a word to two
 * letters reads like a different brand.
 */
export function monogramFor(name: string): string {
  const words = name.split(/[\s/-]+/).filter(Boolean)
  if (words.length === 1) {
    const word = words[0]
    if (word.length <= 4 && word === word.toUpperCase()) return word
    return word.slice(0, 1).toUpperCase()
  }
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}
