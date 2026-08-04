/**
 * Video testimonials — real videos from the client's own YouTube channel.
 *
 * Channel: https://www.youtube.com/@shieldgaterepair  (UCWxHMxbLZEyXY4Qu8p52InA)
 * IDs and titles were read from the channel on 4 Aug 2026 and each ID was
 * confirmed resolvable via YouTube's oEmbed endpoint. None of this is typed
 * from memory.
 *
 * Order is the channel's own upload order, which is the closest thing we have
 * to "the order the client provided". If he wants a different one, reorder this
 * array — nothing else depends on the sequence.
 *
 * ── ON NAMES AND QUOTES ─────────────────────────────────────────────────────
 * `customerName` and `quote` are absent throughout, deliberately. The client
 * asked for invented names. Attaching a fabricated name to a real,
 * identifiable person's face misrepresents who is speaking, and testimonials
 * that misdescribe the endorser fall under the FTC's rule on fake and
 * misleading reviews (16 CFR Part 465). Quoting people whose videos nobody here
 * has watched is the same error in a different form.
 *
 * Nothing is lost by omitting them: the customer is visibly on camera saying
 * what they say, which is stronger than a caption. Both fields are optional and
 * render the moment real values are supplied.
 */

export const testimonialsConfirmed = true as boolean

export const YOUTUBE_CHANNEL = 'https://www.youtube.com/@shieldgaterepair'

export type Testimonial = {
  id: string
  /** YouTube video ID only — not the full URL. */
  youtubeId: string
  /** The client's own video title, tidied for sentence case. */
  title: string
  /** Real name, as given on camera. Omit rather than invent. */
  customerName?: string
  /** City. Omit unless confirmed — never infer it. */
  city?: string
  /** A sentence the customer actually says. Only add after transcription. */
  quote?: string
  /** Job type, drawn from the client's own title. */
  jobType?: string
  /** Operator brand, where the title names one. */
  brand?: string
}

/** Customer testimonials, in the channel's order. */
export const testimonials: Testimonial[] = [
  {
    id: 'elite-opener',
    youtubeId: 'fCJMtZzVVvE',
    title: 'Elite gate opener repair',
    jobType: 'Gate operator',
    brand: 'Elite',
  },
  {
    id: 'commercial-sliding',
    youtubeId: 'tINQFXGKuqg',
    title: 'Commercial sliding gate repair',
    jobType: 'Commercial slide gate',
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
  {
    id: 'eagle-electric',
    youtubeId: 'MqT7ZnK_L7Y',
    title: 'Eagle electric gate repair',
    jobType: 'Electric gate',
    brand: 'Eagle',
  },
  {
    id: 'sliding-automatic',
    youtubeId: '0xKofKIxstI',
    title: 'Sliding automatic gate repair',
    jobType: 'Slide gate',
  },
  {
    id: 'sliding-residential',
    youtubeId: 'q_i4Ds_5xy0',
    title: 'Sliding residential gate repair',
    jobType: 'Residential slide gate',
  },
  {
    id: 'automatic-fast',
    youtubeId: 'EwgqMKRaOZs',
    title: 'Automatic gate repair — fast gate service',
    jobType: 'Automatic gate',
  },
  {
    id: 'electric-fast',
    youtubeId: 'hMuR7vIRUgM',
    title: 'Electric gate repair — gate fixed fast',
    jobType: 'Electric gate',
  },
  {
    id: 'liftmaster-swing',
    youtubeId: 'rTj3-1f-Emk',
    title: 'After a LiftMaster swing gate motor installation',
    jobType: 'Swing gate operator',
    brand: 'LiftMaster',
  },
  {
    id: 'automatic-swing',
    youtubeId: '0LorxypdgBw',
    title: 'After an automatic swing gate service',
    jobType: 'Swing gate',
  },
]

/** Only entries with a real video ID can render. */
export const publishedTestimonials: Testimonial[] = testimonialsConfirmed
  ? testimonials.filter((t) => t.youtubeId)
  : []

/** Pick testimonials relevant to a brand, falling back to the first few. */
export function testimonialsForBrand(brandName: string, limit = 3): Testimonial[] {
  const matching = publishedTestimonials.filter(
    (t) => t.brand?.toLowerCase() === brandName.toLowerCase(),
  )
  const rest = publishedTestimonials.filter((t) => t.brand?.toLowerCase() !== brandName.toLowerCase())
  return [...matching, ...rest].slice(0, limit)
}

/** YouTube thumbnail. No API key, and no third-party JS until the user clicks. */
export function thumbnailFor(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
}
