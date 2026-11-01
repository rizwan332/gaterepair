/**
 * Recent job photographs, supplied by the client 31 Oct 2026 over WhatsApp
 * (second batch processed 1 Nov 2026).
 *
 * They are newer than the WordPress-era library, which is mostly California
 * work (see content/alt-text.ts), so galleries show them first. WhatsApp
 * stripped every photo's metadata, so none is tied to a city: pages may call
 * them "our work" and nothing more specific.
 *
 * Source files: client-assets/recent-tx/ZTX-*. Slugs are the media-manifest
 * slugs those files were processed into.
 */

import type { MediaImage } from './media-manifest'

export const RECENT_JOB_PHOTOS = new Set([
  ...range('liftmaster', 25, 35),
  ...range('all-o-matic', 19, 21),
  ...range('viking', 7, 8),
  ...range('eagle', 6, 7),
  ...range('gate-installation', 18, 32),
  ...range('iron-gate-repair', 11, 24),
  ...range('automatic-gate-repair', 8, 20),
  ...range('electric-gate-repair', 8, 19),
  ...range('emergency-gate-repair', 12, 14),
])

function range(category: string, from: number, to: number): string[] {
  return Array.from({ length: to - from + 1 }, (_, i) => `${category}-${String(from + i).padStart(2, '0')}`)
}

export const isRecentJobPhoto = (image: MediaImage) => RECENT_JOB_PHOTOS.has(image.slug)

/** Same images, recent jobs first, otherwise in their original order. */
export const recentFirst = (images: MediaImage[]) => [
  ...images.filter(isRecentJobPhoto),
  ...images.filter((i) => !isRecentJobPhoto(i)),
]
