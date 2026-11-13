import { media, type MediaImage } from '@/content/media-manifest'

const allImages = Object.values(media).flat()

/** Look up one photograph by slug, for pages that name their hero explicitly. */
export function imageBySlug(slug: string): MediaImage | undefined {
  return allImages.find((i) => i.slug === slug)
}

/**
 * Pick the photograph that survives a full-bleed hero.
 *
 * Every hero on this site renders its image with `object-cover` and no
 * `object-position`, so the browser keeps only the middle band of the source
 * and throws the rest away. Two things break under that treatment:
 *
 *  - A portrait photograph loses its subject. Measured 13 Nov 2026: three
 *    brand pages led with a portrait shot whose branded operator sat in the
 *    lower third, so the visitor saw an anonymous stretch of fence.
 *  - A small source is stretched across the full width. Measured the same day:
 *    every service page and all ~1,000 city pages led with a 576–1,024px
 *    photograph blown up to 1,440px or wider — the LCP element on the most
 *    important pages on the site, visibly soft.
 *
 * Callers used to take `images[0]`, which is simply the lowest-numbered file in
 * a category and has no relationship to either property. This takes the first
 * genuinely landscape, high-resolution image instead, and leaves gallery order
 * alone.
 *
 * Callers that want a specific photograph should put it first in the list they
 * pass (as brands do with `featuredImage`); it wins as long as it is landscape.
 */
export function pickHero(images: MediaImage[]): MediaImage | undefined {
  const landscape = images.filter((i) => i.width / i.height >= 1.3)
  return (
    landscape.find((i) => i.width >= 1200) ??
    // Nothing clears the resolution bar, so take the widest rather than the
    // first: Elite's only landscape photographs are 600px and 1024px, and the
    // 600 was leading purely because it sorts first. The sort is stable, so a
    // caller's preferred image still wins among equal widths.
    [...landscape].sort((a, b) => b.width - a.width)[0] ??
    images[0]
  )
}
