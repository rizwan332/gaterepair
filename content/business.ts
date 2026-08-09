/**
 * Single source of truth for every business fact rendered on the site.
 *
 * Anything typed `Unconfirmed<T>` has NOT been verified with the client. Those
 * values render a visible warning in development and are omitted entirely in
 * production rather than shipping a guessed number — see `lib/business.ts`.
 *
 * Competitors publish real credentials (Everlast shows TX license B28539401,
 * Dallas Automatic Gate shows B26253101). Guessing here is worse than omitting.
 */

/** A value the client has not yet confirmed. `value` is a placeholder only. */
export type Unconfirmed<T> = { confirmed: false; value: T; note: string }
/** A value verified with the client and safe to render. */
export type Confirmed<T> = { confirmed: true; value: T }
export type Fact<T> = Confirmed<T> | Unconfirmed<T>

export const business = {
  name: 'Shield Gate Repair',
  legalName: 'Shield Gate Repair',
  domain: 'shieldgaterepair.com',
  /**
   * Must be the hostname that actually serves a 200.
   *
   * This was the apex, `https://shieldgaterepair.com`, but the apex 301s to
   * `www` — so every canonical tag, all 252 sitemap URLs, the robots Host and
   * Sitemap directives, every OG url and every schema @id pointed at a
   * redirect rather than at the live page.
   *
   * Google resolves that eventually, but it is a conflicting signal on a domain
   * that is also being migrated, it doubles the crawl cost of the whole
   * sitemap, and a canonical pointing somewhere other than the indexed URL is
   * exactly the sort of thing that stalls indexing.
   *
   * If the apex is ever made the primary instead, change it here — canonicals,
   * sitemap, robots, OG and schema all derive from this one value.
   */
  url: 'https://www.shieldgaterepair.com',

  // ---- Confirmed by client, 1 Aug 2026 ----
  // Client replaced the 800 number with a local DFW number on 3 Aug 2026. A
  // local area code outperforms a toll-free one for local service intent —
  // it reads as "someone nearby" rather than a call centre.
  phone: {
    display: '(214) 735-4314',
    href: 'tel:+12147354314',
  },
  email: 'office@shieldgaterepair.com',
  availability: 'Available 24/7 Emergency Gate Repair Service',
  hours: { open: '00:00', close: '23:59', days: 'Mo,Tu,We,Th,Fr,Sa,Su' },

  serviceArea: {
    /**
     * The precise named region. Used for schema.org areaServed, where a real
     * administrative area name is worth more than a marketing phrase — a search
     * engine can resolve "Dallas–Fort Worth Metroplex" to a place, and cannot
     * resolve "DFW & Surrounding Areas" to anything.
     */
    primary: 'Dallas–Fort Worth Metroplex',
    /**
     * How the client describes his coverage, confirmed 6 Aug 2026. Used in
     * visible copy wherever the site states what area we serve.
     *
     * Deliberately NOT used in page titles or H1s: "Dallas–Fort Worth gate
     * repair" is the phrase people actually search, and "DFW" a small fraction
     * of it, so the headings keep the searchable form.
     */
    display: 'DFW & Surrounding Areas',
    region: 'TX',
    country: 'US',
  },

  /**
   * Direct "write a review" link from the Google Business Profile.
   *
   * Get it from the GBP dashboard → Ask for reviews → copy link. It deep-links
   * straight into the review dialog, which roughly doubles completion versus
   * sending someone to the profile and asking them to find the button.
   */
  googleReviewUrl: {
    confirmed: false,
    value: '',
    note: 'GBP → Ask for reviews → copy link. Required before the review request system can send anything.',
  } as Fact<string>,

  /**
   * Google Tag Manager container.
   *
   * This container already fires GA4 (G-BFR37L657V) and Google Ads
   * (AW-18000649811) as Google tags, so nothing else on the site may load
   * GA4 directly — it would double-count every pageview and every conversion.
   * Add new tags in the Tag Manager UI, not in this codebase.
   */
  gtmId: 'GTM-MBBT87D8',

  social: {
    // TODO: confirm — meeting notes reference a YouTube channel with usable footage
    youtube: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
  },

  // ---- NOT confirmed. Do not render without `confirmed: true`. ----
  rating: {
    confirmed: false,
    value: { score: 4.9, count: 0 },
    note: 'Need real Google rating + review count. Everlast shows 2,600+; Garage Tec 830.',
  } as Fact<{ score: number; count: number }>,

  license: {
    confirmed: false,
    value: '',
    note: 'Texas DPS Private Security Bureau number. Required for access-control work. Two competitors display theirs.',
  } as Fact<string>,

  insurance: {
    confirmed: false,
    value: '',
    note: 'Carrier name / bonded status. Still needed to publish a specific policy.',
  } as Fact<string>,

  /**
   * The "Licensed & Insured" trust badge.
   *
   * Confirmed 6 Aug 2026: the client's written brief specifies this badge in
   * the homepage hero. That is the business owner asserting a fact about his
   * own company, which is his to assert — distinct from `license` and
   * `insurance` above, which hold the *number* and *carrier* and stay
   * unconfirmed. The badge therefore renders as a plain claim and never as a
   * specific licence number until one is supplied.
   */
  licensedInsured: { confirmed: true, value: true } as Fact<boolean>,

  // Confirmed by client 3 Aug 2026 in the supplied About Us copy: "For over 16
  // years, Shield Gate Repair has proudly served the DFW Metroplex". Rendered
  // as "16+" — never round it up.
  yearsInBusiness: { confirmed: true, value: 16 } as Fact<number>,

  warrantyTerm: {
    confirmed: false,
    value: '',
    note: 'e.g. "1 year on parts and workmanship". No competitor headlines a warranty term — this is an opening.',
  } as Fact<string>,

  backgroundChecked: {
    confirmed: false,
    value: false,
    note: 'Everlast\'s "Background Checked & Drug Tested" is the strongest trust line in the market.',
  } as Fact<boolean>,

  address: {
    confirmed: false,
    value: { street: '', city: '', region: 'TX', postalCode: '' },
    note: 'Required for LocalBusiness schema and Google Ads location extensions.',
  } as Fact<{ street: string; city: string; region: string; postalCode: string }>,

  /**
   * Typical arrival window.
   *
   * Emptied 6 Aug 2026: the client's brief removes the "30–60 minute arrival"
   * claim outright. It was never `confirmed`, so nothing was rendering it, and
   * the per-city bands in content/cities.ts are cleared to match.
   *
   * If a real, measured window is ever supplied, setting it here and flipping
   * `confirmed` brings it back everywhere — every render site already guards
   * on this fact.
   */
  responseBand: {
    confirmed: false,
    value: '',
    note: 'Removed at client request 6 Aug 2026. Only republish a window the team actually hits.',
  } as Fact<string>,

  /** Set true only if the client holds an actual dealer agreement. */
  authorizedDealer: {
    confirmed: false,
    value: false,
    note: 'If false, all brand copy reads "brands we service", never "authorized dealer".',
  } as Fact<boolean>,
} as const

/**
 * Brand palette.
 *
 * Gold is taken from the logo ring. The base is a near-black neutral rather
 * than the logo's navy: navy is the default colour of every home-services site
 * in this market (Metro, Garage Tec and J&J are all blue), and near-black both
 * differentiates and makes the gold logo considerably stronger.
 */
export const brand = {
  ink: '#0B0C0E',
  inkRaised: '#16181C',
  gold: '#F5B32A',
  goldDeep: '#D99A15',
} as const
