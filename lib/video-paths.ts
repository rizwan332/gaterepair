/**
 * Where video watch pages live.
 *
 * Kept in its own dependency-free module because `LazyVideo` is a client
 * component: importing content/video-pages.ts there would ship the whole
 * service, brand and video manifest to the browser just to build one href.
 *
 * ── WHY NOT /videos ─────────────────────────────────────────────────────────
 * `/videos/*` is where the MP4 files themselves are served, and netlify.toml
 * gives that path `Cache-Control: public, max-age=31536000, immutable`. A watch
 * page at /videos/<slug> would inherit it — its HTML frozen in every visitor's
 * browser for a year, with no way to purge it. A separate prefix keeps page
 * HTML and media files on different cache policies.
 */
export const VIDEO_HUB_PATH = '/repair-videos'

export const watchPath = (slug: string) => `${VIDEO_HUB_PATH}/${slug}`
