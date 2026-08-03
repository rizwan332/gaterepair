/**
 * Video testimonials — real videos from the client's own YouTube channel.
 *
 * Channel: https://www.youtube.com/@shieldgaterepair  (UCWxHMxbLZEyXY4Qu8p52InA)
 * Video IDs and titles were read from the channel's public RSS feed on
 * 3 Aug 2026, not typed from memory. Titles below are the client's own,
 * verbatim, minus a stray character in the source.
 *
 * The client was right that these beat star ratings. A competitor's 2,600
 * five-star reviews are numbers a visitor cannot check. A customer on camera
 * at their own gate is checkable in a way a rating never is.
 *
 * ── ON NAMES ────────────────────────────────────────────────────────────────
 * `customerName` is deliberately absent on every entry. The client asked us to
 * invent names ("just make up something... if it's a man the name will be a man
 * name"), and that is the one thing we will not do here: attaching a fabricated
 * name to a real, identifiable person's face misrepresents who is speaking, and
 * testimonials that misdescribe the endorser fall under the FTC's rule on fake
 * and misleading reviews (16 CFR Part 465), which carries civil penalties per
 * violation.
 *
 * Nothing is lost by omitting it. The customer is visibly on camera saying what
 * they say — that IS the proof, and it is stronger than a caption. When the
 * client supplies genuine first names, add them here and they render
 * automatically.
 *
 * `quote` is likewise absent: nobody here has watched these videos, and putting
 * words in a real customer's mouth is the same error as putting a name on their
 * face. Add pull quotes once someone has transcribed what is actually said.
 */

export const testimonialsConfirmed = true as boolean

export const YOUTUBE_CHANNEL = 'https://www.youtube.com/@shieldgaterepair'

export type Testimonial = {
  id: string
  /** YouTube video ID only — not the full URL. */
  youtubeId: string
  /** The client's own video title. Shown as the card heading. */
  title: string
  /** Real name, as given on camera. Omit rather than invent. */
  customerName?: string
  /** City. Omit unless confirmed — do not infer it from anything. */
  city?: string
  /** A sentence the customer actually says. Only add after transcription. */
  quote?: string
  /** Job type, drawn from the client's own title. */
  jobType?: string
  /** Operator brand, where the title names one. */
  brand?: string
}

/**
 * The five videos the client titled "testimony" — customers on camera.
 * Ordered most-recent-first, matching the channel feed.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'commercial-sliding',
    youtubeId: 'tINQFXGKuqg',
    title: 'Commercial sliding gate repair',
    jobType: 'Commercial slide gate',
  },
  {
    id: 'eagle-electric',
    youtubeId: 'MqT7ZnK_L7Y',
    title: 'Eagle electric gate repair',
    jobType: 'Electric gate',
    brand: 'Eagle',
  },
  {
    id: 'automatic-gate',
    youtubeId: 'xmzoxeHfnAE',
    title: 'Automatic gate repair',
    jobType: 'Automatic gate',
  },
  {
    id: 'all-o-matic',
    youtubeId: '1W5bSQz6xmM',
    title: 'All-O-Matic gate repair',
    jobType: 'Slide gate operator',
    brand: 'All-O-Matic',
  },
  {
    id: 'elite',
    youtubeId: 'CG6e6Lm41aQ',
    title: 'Elite gate repair',
    jobType: 'Gate operator',
    brand: 'Elite',
  },
]

/** Only entries with a real video ID can render. */
export const publishedTestimonials: Testimonial[] = testimonialsConfirmed
  ? testimonials.filter((t) => t.youtubeId)
  : []

/** YouTube thumbnail. No API key, and no third-party JS until the user clicks. */
export function thumbnailFor(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
}
