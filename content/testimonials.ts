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
  /**
   * True for a YouTube Short — vertical 9:16 rather than 16:9.
   *
   * Detected on 6 Aug 2026 by requesting youtube.com/shorts/<id>: a Short
   * returns 200, a normal upload 303-redirects to /watch. Not guessed from the
   * title, and it matters — a vertical video letterboxed into a 16:9 frame
   * wastes most of the card.
   */
  isShort?: boolean
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
    isShort: true,
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

  // ── Added 6 Aug 2026 ────────────────────────────────────────────────────
  // The client asked for every video on the channel including Shorts. These
  // nine were read from the channel's own Atom feed, not typed from memory,
  // and each ID was confirmed to resolve. Titles are the client's own,
  // tidied to sentence case exactly as the entries above are.
  {
    id: 'liftmaster-repair-2',
    youtubeId: 'jvKqVTIxOig',
    title: 'LiftMaster gate repair',
    jobType: 'Gate operator',
    brand: 'LiftMaster',
  },
  {
    id: 'double-swing',
    youtubeId: 'mIh62RoIbow',
    title: 'Double swing gate repair',
    jobType: 'Swing gate',
  },
  {
    id: 'swing-repair',
    youtubeId: '_biXtk5wqRk',
    title: 'Swing gate repair',
    jobType: 'Swing gate',
  },
  {
    id: 'liftmaster-install',
    youtubeId: 'iCqBobZ331E',
    title: 'LiftMaster swing gate opener installation',
    jobType: 'Gate operator installation',
    brand: 'LiftMaster',
  },
  {
    id: 'swing-repair-short',
    youtubeId: 'nQUqf0aiIZM',
    title: 'Swing gate repair',
    jobType: 'Swing gate',
    isShort: true,
  },
  {
    id: 'elite-electric',
    youtubeId: 'JAV1Xm5EIVg',
    title: 'Elite electric gate repair',
    jobType: 'Gate operator',
    brand: 'Elite',
  },
  {
    id: 'liftmaster-repair-3',
    youtubeId: 'p1E1qcAAZd4',
    title: 'LiftMaster gate repair',
    jobType: 'Gate operator',
    brand: 'LiftMaster',
  },
  {
    id: 'residential-swing',
    youtubeId: 'rMWJkk2qFAY',
    title: 'Automatic residential swing gate repair',
    jobType: 'Swing gate',
  },
  {
    id: 'apartment-emergency',
    youtubeId: '5LcF684I8pE',
    title: 'Apartment building emergency gate repair',
    jobType: 'Emergency call-out',
    isShort: true,
  },

  // ── From the client's case-study documents, added 1 Oct 2026 ─────────────
  //
  // Those documents contain seventeen video links, and only these THREE are
  // customer testimonials — the documents label them "Customer Video
  // Testimonial". The other fourteen say "Job video", "Project video" or
  // "Final repair video": they are documentation of the work, and they live on
  // their case-study pages. Filing repair footage here as a testimonial would
  // misdescribe who is speaking and why, which is the same error this file's
  // opening note refuses for invented names.
  //
  // Verified the way the rest of this file was: each id resolved through
  // YouTube's oEmbed endpoint on 1 Oct 2026 — titles below are the client's
  // own, as returned — and each was checked against youtube.com/shorts/<id>,
  // where all three 303-redirect and are therefore normal 16:9 uploads.
  //
  // These are the first entries here to carry a `city`, because they are the
  // first whose city we actually know: the client states it in the write-up
  // for each job. The existing twenty-one have none and still should not.
  {
    id: 'eagle-mesquite-testimonial',
    youtubeId: 'ftWhbFTdF98',
    title: 'Eagle gate repair in Mesquite',
    city: 'Mesquite',
    jobType: 'Sliding gate wheels and chain',
    brand: 'Eagle',
  },
  {
    // Gary is named in the client's own write-up of this job, so the name is
    // supplied rather than invented — which is the line this file draws.
    id: 'csl24ul-frisco-testimonial',
    youtubeId: 'CJX4QQ4Mrbk',
    title: 'LiftMaster CSL24UL opener installation in Frisco',
    customerName: 'Gary',
    city: 'Frisco',
    jobType: 'Sliding gate opener installation',
    brand: 'LiftMaster',
  },
  {
    id: 'liftmaster-chain-dallas-testimonial',
    youtubeId: 'oIWbLj7wpBM',
    title: 'LiftMaster sliding gate chain replacement in Dallas',
    city: 'Dallas',
    jobType: 'Rust-free chain replacement',
    brand: 'LiftMaster',
  },
  // Three customer testimonials uploaded to the channel on 27 Sep 2026, each
  // titled "testimony" or "review" by the client. Verified 21 Oct 2026: each
  // id resolves through YouTube's oEmbed endpoint and youtube.com/shorts/<id>
  // 303-redirects, so all three are normal 16:9 uploads. Cities are taken from
  // the client's own titles; the swing gate one names no city, so it has none.
  {
    id: 'swing-gate-testimonial',
    youtubeId: 'L-PZXFZswds',
    title: 'Swing gate repair testimonial',
    jobType: 'Swing gate repair',
  },
  {
    id: 'sliding-carrollton-testimonial',
    youtubeId: 'G2bUoFgtN80',
    title: 'Sliding gate repair in Carrollton',
    city: 'Carrollton',
    jobType: 'Sliding gate repair',
  },
  {
    id: 'elite-university-park-testimonial',
    youtubeId: 'cbs1JJyjCFM',
    title: 'Elite gate repair in University Park',
    city: 'University Park',
    jobType: 'Gate operator',
    brand: 'Elite',
  },
]

/** Shown first, in this order, as the site owner listed them (25 Oct 2026). */
const LEAD_VIDEOS = ['cbs1JJyjCFM', 'G2bUoFgtN80', 'CJX4QQ4Mrbk', 'ftWhbFTdF98', 'fCJMtZzVVvE']
const leadRank = (t: Testimonial) => {
  const i = LEAD_VIDEOS.indexOf(t.youtubeId)
  return i === -1 ? LEAD_VIDEOS.length : i
}

/** Only entries with a real video ID can render. Stable sort keeps the rest in array order. */
export const publishedTestimonials: Testimonial[] = testimonialsConfirmed
  ? testimonials.filter((t) => t.youtubeId).sort((a, b) => leadRank(a) - leadRank(b))
  : []

/** Pick testimonials relevant to a brand, falling back to the first few. */
export function testimonialsForBrand(brandName: string, limit = 3): Testimonial[] {
  const matching = publishedTestimonials.filter(
    (t) => t.brand?.toLowerCase() === brandName.toLowerCase(),
  )
  const rest = publishedTestimonials.filter((t) => t.brand?.toLowerCase() !== brandName.toLowerCase())
  return [...matching, ...rest].slice(0, limit)
}

/**
 * YouTube thumbnail. No API key, and no third-party JS until the user clicks.
 *
 * `hqdefault` is always 4:3 with black bars baked in for a vertical Short, so
 * a Short would show its own letterboxing inside an already-vertical card.
 * `oar2.jpg` is the original-aspect-ratio still, which is the full 9:16 frame.
 */
export function thumbnailFor(youtubeId: string, isShort = false, small = false): string {
  // `mqdefault` is 320x180 and already 16:9, so no baked-in bars; used on the
  // small cards of the Ads landing page, where hqdefault was oversized.
  return isShort
    ? `https://i.ytimg.com/vi/${youtubeId}/oar2.jpg`
    : `https://i.ytimg.com/vi/${youtubeId}/${small ? 'mqdefault' : 'hqdefault'}.jpg`
}
