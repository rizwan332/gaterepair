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
  url: 'https://shieldgaterepair.com',

  // ---- Confirmed by client, 1 Aug 2026 ----
  phone: {
    display: '+1 (800) 770-9642',
    href: 'tel:+18007709642',
  },
  email: 'office@shieldgaterepair.com',
  availability: 'Available 24/7 Emergency Gate Repair Service',
  hours: { open: '00:00', close: '23:59', days: 'Mo,Tu,We,Th,Fr,Sa,Su' },

  serviceArea: {
    primary: 'Dallas–Fort Worth Metroplex',
    region: 'TX',
    country: 'US',
  },

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
    note: 'Carrier name / bonded status for the "Licensed & Insured" badge.',
  } as Fact<string>,

  yearsInBusiness: {
    confirmed: false,
    value: 0,
    note: 'Competitors claim 20+, 31, and "since 2005".',
  } as Fact<number>,

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

  /** Typical arrival window shown site-wide. Per-city bands live in content/cities.ts. */
  responseBand: {
    confirmed: false,
    value: '45–90 minutes',
    note: 'Must be honest — publishing 30 min to Stephenville destroys the trust it is meant to build.',
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
