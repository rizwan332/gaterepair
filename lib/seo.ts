import type { Metadata } from 'next'
import { business } from '../content/business'

/**
 * Meta description assembly.
 *
 * Google renders roughly 155–160 characters of a description on desktop and
 * less on mobile. Both ends of that range cost something: over it and the tail
 * is cut mid-word, under it and the snippet gives back space that could have
 * carried the phone number or the availability line.
 *
 * Measured 6 Sep 2026, before this existed: of 241 templated pages, 5 ran over
 * 160 characters and 138 ran under 120. Every one of those was a hand-written
 * template that fitted the input it was written against and not the inputs it
 * actually got — a city name can be "Anna" or "North Richland Hills", and a
 * symptom can be "Nothing at all" or "Works after rain, fails when dry (or vice
 * versa)". A fixed string cannot fit both.
 *
 * So descriptions are assembled instead of written: a core that always ships,
 * then optional clauses appended in priority order for as long as they fit.
 */

/** Longest description we will emit. Under Google's ~160 with margin. */
export const DESCRIPTION_MAX = 158

/**
 * Build a description that fits.
 *
 * `core` is the part that must appear — usually the page's own specific
 * sentence. `extras` are appended in order while there is room, so put the most
 * valuable clause first: on this site that is the phone number and the 24/7
 * line, not the trust badges. A clause that does not fit is skipped rather than
 * ending the loop, so a short later clause can still make it in.
 *
 * A `core` longer than the limit is cut back to its last complete sentence, and
 * only hard-truncated if it has no sentence break to fall back to. That case
 * exists for editorial copy that is shown elsewhere on the site — case study
 * summaries, video descriptions — and is not ours to rewrite for a snippet.
 *
 * Two details, both caught by validate:meta on the build, 14 Sep 2026:
 *
 *  - After a sentence cut the extras are still offered. The first version
 *    returned straight away, so a video description whose first sentence was 87
 *    characters shipped at 87, with room for the line that followed it.
 *
 *  - A hard truncation reserves a character for its ellipsis. The first version
 *    cut at up to `limit` characters and then appended "…", shipping four
 *    descriptions at 159 against a limit of 158. No extras follow an ellipsis:
 *    it already says "there is more", and nothing reads well after one.
 */
export function fitDescription(core: string, extras: string[] = [], limit = DESCRIPTION_MAX): string {
  let out = core.trim().replace(/\s+/g, ' ')

  if (out.length > limit) {
    // One character past the limit, so a sentence ending exactly at the limit
    // ("…fix. " with the full stop at position limit-1) still counts.
    const window = out.slice(0, limit + 1)
    const lastSentence = Math.max(window.lastIndexOf('. '), window.lastIndexOf('? '), window.lastIndexOf('! '))
    if (lastSentence > limit * 0.5) {
      out = out.slice(0, lastSentence + 1)
    } else {
      const room = out.slice(0, limit) // limit-1 characters of text, plus the ellipsis
      const lastSpace = room.lastIndexOf(' ')
      return `${out.slice(0, lastSpace > 0 ? lastSpace : limit - 1).replace(/[,;:—-]$/, '')}…`
    }
  }

  for (const extra of extras) {
    const next = `${out} ${extra.trim()}`.replace(/\s+/g, ' ')
    if (next.length <= limit) out = next
  }
  return out
}

/**
 * Open Graph for one page.
 *
 * Next.js merges metadata shallowly: a route that sets `openGraph` replaces the
 * layout's object wholesale, and a route that does not inherits it untouched.
 * The layout used to set `url: business.url` and no route set its own, so
 * measured 13 Sep 2026 every page on the site declared
 * `og:url = https://shieldgaterepair.com`. Facebook, LinkedIn and WhatsApp
 * treat og:url as the identity of the thing being shared, so a shared city or
 * service page was attributed to — and counted against — the homepage.
 *
 * Every route now passes its own canonical path. The defaults travel with it
 * because the shallow merge would otherwise drop them. `title` and
 * `description` are left for Next to fill from the page's own tags unless a
 * page has a reason to word its share card differently.
 */
export function openGraphFor(
  path: string,
  overrides: { title?: string; description?: string } = {},
): NonNullable<Metadata['openGraph']> {
  return {
    type: 'website',
    locale: 'en_US',
    siteName: business.name,
    ...overrides,
    url: path,
    images: [SHARE_IMAGE],
  }
}

/**
 * The share-card image, attached explicitly to every route.
 *
 * `app/opengraph-image.tsx` generates it, and a file-convention image is
 * inherited by child routes — until a child route sets `openGraph` itself, at
 * which point the same shallow merge that drops `siteName` drops the image too.
 * Measured on the build 13 Sep 2026, right after `openGraphFor` first shipped
 * without this: og:image on 1 of 253 pages, twitter:image on 1, and Twitter
 * cards fallen back from `summary_large_image` to `summary`. The one survivor
 * was the homepage, which shares a segment with the image file.
 *
 * The values mirror that file's `alt`, `size` and `contentType` exports rather
 * than importing them, because it runs on the edge runtime and pulls in
 * `next/og`, and this module is also loaded by scripts/validate-meta.ts under
 * plain Node. The duplication is guarded: validate:meta fails the build if any
 * page's image tags stop matching the homepage's, which come from the file.
 */
export const SHARE_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  type: 'image/png',
  alt: 'Shield Gate Repair — Same-day automatic gate repair across Dallas–Fort Worth',
}
