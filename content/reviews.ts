/**
 * Customer reviews.
 *
 * ⚠️ NOTHING HERE IS REAL YET. `reviewsConfirmed` is false, so the review
 * sections render a clearly-labelled empty state and NO Review/AggregateRating
 * schema is emitted. Fabricated reviews are a trust problem, an FTC problem,
 * and a structured-data violation that can earn a manual action.
 *
 * The entries below exist so the layout, schema and page are finished and
 * tested. To go live: paste the real Google reviews over them, verify each
 * against the client's Google Business Profile, and flip `reviewsConfirmed`.
 *
 * Competitive context — Everlast leads this market on exactly this axis:
 * "Over 2,600 five-star reviews across 12 locations" sits above their fold,
 * alongside eight customer video testimonials. It is the single biggest gap
 * between this site and theirs.
 */

export const reviewsConfirmed = false as boolean

export type Review = {
  id: string
  author: string
  city: string
  /** ISO date, as shown on the Google Business Profile. */
  date: string
  rating: 1 | 2 | 3 | 4 | 5
  body: string
  /** Which service this relates to — powers filtering and per-page selection. */
  service?: string
  /** Operator brand, where the reviewer named one. */
  brand?: string
  /** true once checked against the live Google Business Profile. */
  verified: boolean
}

/**
 * PLACEHOLDER SHAPES — structure only, not content. Written to match the length
 * and specificity of real Google reviews so the layout is tested honestly
 * rather than against three-word filler.
 */
export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'PLACEHOLDER — replace with real reviewer',
    city: 'Plano',
    date: '2026-07-18',
    rating: 5,
    body: 'PLACEHOLDER. Replace with a verbatim Google review. Aim to lead with reviews that name a specific fault and a specific outcome — those read as real and convert far better than "great service, highly recommend".',
    service: 'gate-motor-repair',
    brand: 'LiftMaster',
    verified: false,
  },
  {
    id: 'r2',
    author: 'PLACEHOLDER — replace with real reviewer',
    city: 'Dallas',
    date: '2026-07-02',
    rating: 5,
    body: 'PLACEHOLDER. Prioritise a review that mentions response time, since no competitor in this market publishes response times at all.',
    service: 'emergency-gate-repair',
    verified: false,
  },
  {
    id: 'r3',
    author: 'PLACEHOLDER — replace with real reviewer',
    city: 'Frisco',
    date: '2026-06-21',
    rating: 5,
    body: 'PLACEHOLDER. A review that mentions being told a repair was possible when another company quoted a replacement is the single most valuable one to feature — it is the whole positioning in a customer\'s own words.',
    service: 'gate-motor-repair',
    brand: 'FAAC',
    verified: false,
  },
  {
    id: 'r4',
    author: 'PLACEHOLDER — replace with real reviewer',
    city: 'McKinney',
    date: '2026-06-09',
    rating: 5,
    body: 'PLACEHOLDER. Include at least one commercial or HOA review — property managers are a distinct buyer and want to see other property managers.',
    service: 'commercial-gate-repair',
    verified: false,
  },
  {
    id: 'r5',
    author: 'PLACEHOLDER — replace with real reviewer',
    city: 'Rockwall',
    date: '2026-05-28',
    rating: 5,
    body: 'PLACEHOLDER. A review naming the technician converts better than an anonymous one. Star Gate names their lead tech and it is the most humanising thing any competitor does.',
    service: 'iron-gate-repair',
    verified: false,
  },
  {
    id: 'r6',
    author: 'PLACEHOLDER — replace with real reviewer',
    city: 'Irving',
    date: '2026-05-14',
    rating: 5,
    body: 'PLACEHOLDER. Keep one review that mentions pricing being explained before work started — it backs the transparency claim on /pricing.',
    service: 'access-control-repair',
    verified: false,
  },
]

export const reviewsFor = (service: string) => reviews.filter((r) => r.service === service)
export const reviewsForBrand = (brand: string) =>
  reviews.filter((r) => r.brand?.toLowerCase() === brand.toLowerCase())
