/**
 * CDN asset prefixing.
 *
 * Images and videos are mirrored to S3 and served through CloudFront. Set
 * NEXT_PUBLIC_CDN_URL to route them there; leave it unset and everything falls
 * back to the local /public paths, so a missing or misconfigured CDN degrades
 * to a working site rather than a broken one.
 *
 * NEXT_PUBLIC_* is inlined at build time, which is what we want here: the value
 * has to be identical in the server-rendered HTML and the client bundle, or
 * React logs a hydration mismatch on every image on the page.
 *
 * Only /images and /videos are mirrored. Everything else under /public — the
 * logo, favicons, the OG image — stays local, because those are small, needed
 * before first paint, and not worth a second DNS lookup and TLS handshake.
 */
const CDN_BASE = (process.env.NEXT_PUBLIC_CDN_URL ?? '').replace(/\/+$/, '')

/** Paths mirrored to the CDN. Anything else is returned untouched. */
const MIRRORED = ['/images/', '/videos/']

export function cdn(path: string): string {
  if (!CDN_BASE || !path.startsWith('/')) return path
  if (!MIRRORED.some((prefix) => path.startsWith(prefix))) return path
  return `${CDN_BASE}${path}`
}

/** True when assets are being served from the CDN rather than from /public. */
export const cdnEnabled = Boolean(CDN_BASE)
