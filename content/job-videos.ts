import { clientCaseStudies } from './case-studies-client'

/**
 * Video from real jobs — all seventeen clips in the client's case-study
 * documents, with the job each one belongs to.
 *
 * ── WHY THIS IS NOT content/testimonials.ts ─────────────────────────────────
 * Three of the seventeen are customer testimonials and live in that file. The
 * other fourteen are the client filming his own work: a corroded board coming
 * out, a chain being fitted, a gate running again at the end. Nobody is
 * speaking and nobody is endorsing anything.
 *
 * Both are worth showing and they are worth showing under honest headings.
 * Presenting repair footage as "what our customers say" would claim an
 * endorsement that does not exist — the same objection content/testimonials.ts
 * raises about inventing customer names, and the reason it refuses to. So this
 * file exists to give the other fourteen somewhere to live with a label that
 * describes them: video from the job.
 *
 * ── DERIVED, NOT TYPED ──────────────────────────────────────────────────────
 * Every entry comes from the case study it belongs to, so a video cannot drift
 * from its job, be duplicated, or survive the case study being removed. Adding
 * a case study with a video puts it here automatically.
 */

export type JobVideo = {
  /** YouTube id, extracted from the client's link. */
  youtubeId: string
  /** The full URL as the client supplied it, params and all. */
  url: string
  /** The client's own label for the clip. */
  label: string
  /** The case study this belongs to. */
  caseStudySlug: string
  caseStudyTitle: string
  /** Where the job was. Display text, so it includes the two towns off the list. */
  city?: string
  /** Service-area slug, where the town is on the client's list. */
  citySlug?: string
  brand?: string
  /** '<brandSlug>/<slug>' where the job names a specific operator. */
  modelKey?: string
  service: string
}

const idOf = (url: string): string | null => {
  const short = url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/)
  if (short) return short[1]
  const watch = url.match(/[?&]v=([A-Za-z0-9_-]{6,})/)
  return watch ? watch[1] : null
}

export const jobVideos: JobVideo[] = clientCaseStudies.flatMap((study) =>
  (study.videos ?? []).flatMap((video) => {
    const youtubeId = idOf(video.url)
    if (!youtubeId) return []
    return [
      {
        youtubeId,
        url: video.url,
        label: video.label,
        caseStudySlug: study.slug,
        caseStudyTitle: study.title,
        city: study.city,
        citySlug: study.citySlug,
        brand: study.brand,
        modelKey: study.modelKey,
        service: study.service,
      },
    ]
  }),
)

/** Clips from jobs in one city. */
export const jobVideosForCity = (citySlug: string) => jobVideos.filter((v) => v.citySlug === citySlug)

/** Clips from jobs on one manufacturer's equipment. */
export const jobVideosForBrand = (brandName: string) =>
  jobVideos.filter((v) => v.brand?.toLowerCase() === brandName.toLowerCase())

/** Clips from jobs on one operator, keyed '<brandSlug>/<slug>'. */
export const jobVideosForModel = (modelKey: string) => jobVideos.filter((v) => v.modelKey === modelKey)

/**
 * Thumbnail without an API key and without loading YouTube's player.
 *
 * Mirrors the approach in content/testimonials.ts: hqdefault exists for every
 * video, and nothing third-party is requested until someone clicks.
 */
export const jobVideoThumb = (youtubeId: string) =>
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
