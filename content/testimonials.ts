/**
 * Video testimonials.
 *
 * The client was explicit on 3 Aug 2026: "I don't have Google reviews we have
 * testimonies. It's much better." So the social-proof model here is video-first
 * rather than a star-rating feed — see content/reviews.ts for the Google-shaped
 * model, which stays gated off until there are real reviews to put in it.
 *
 * He is right that it is better. A competitor's 2,600 five-star ratings are
 * numbers a visitor has no way to check. A customer on camera, standing at
 * their own gate, is checkable in a way a star rating never is — and Everlast,
 * the strongest player in this market, leads with eight of them for exactly
 * that reason.
 *
 * ── HOW TO ADD ONE ──────────────────────────────────────────────────────────
 * Fill in `youtubeId` and the customer's name and city, then flip
 * `testimonialsConfirmed` to true. The section renders the moment there is at
 * least one confirmed entry.
 *
 * ⚠️ Names must be the customer's real name, as they gave it on camera. Do not
 * invent them. A made-up name attached to a real person's face is a
 * misrepresentation of an identifiable individual, and testimonials that
 * misdescribe who is speaking fall under the FTC's rule on fake and misleading
 * reviews and testimonials (16 CFR Part 465). If a customer did not give
 * permission for their full name, use a first name and initial, or "Verified
 * customer" — all three are honest, and none of them carry that risk.
 */

export const testimonialsConfirmed = false as boolean

export type Testimonial = {
  id: string
  /** YouTube video ID only — not the full URL. */
  youtubeId: string
  /** Real name as given on camera. First name + initial is fine. */
  customerName: string
  /** City, for local relevance. Must be a city we actually serve. */
  city: string
  /** One-line pull quote drawn from what they actually say in the video. */
  quote: string
  /** Optional longer summary shown under the player. */
  summary?: string
  /** What the job was — swing gate, LiftMaster operator, etc. */
  jobType?: string
  /** Operator brand, where named. */
  brand?: string
  /** Runtime, e.g. "1:24". Shown on the thumbnail. */
  duration?: string
  /** true once the client has confirmed name, city and permission to publish. */
  verified: boolean
}

/**
 * PLACEHOLDER — structure only. Nothing here renders while
 * `testimonialsConfirmed` is false.
 *
 * The client has a YouTube channel with usable footage (business.social.youtube
 * is still null — we need the channel URL). Once we have it, each video becomes
 * one entry below.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    youtubeId: '',
    customerName: 'PLACEHOLDER — real customer name from the video',
    city: 'PLACEHOLDER — city',
    quote: 'PLACEHOLDER — a sentence the customer actually says on camera.',
    summary: 'PLACEHOLDER — what the job was and how it went, in the customer’s framing.',
    jobType: 'PLACEHOLDER',
    verified: false,
  },
]

/** Only ever the entries safe to show. Empty until the client confirms. */
export const publishedTestimonials: Testimonial[] = testimonialsConfirmed
  ? testimonials.filter((t) => t.verified && t.youtubeId)
  : []

/** YouTube thumbnail. No API key, no third-party JS until the user clicks. */
export function thumbnailFor(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
}
