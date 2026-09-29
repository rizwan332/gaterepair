/**
 * Where the visitor came from, remembered across the whole visit.
 *
 * ── THE PROBLEM THIS SOLVES ─────────────────────────────────────────────────
 * Google Ads reported 3 conversions in a week the business took more calls
 * than that, and there was no way to tell which calls came from ads. Two
 * separate causes, and this file fixes the half that is ours:
 *
 *  1. The `call_click` event carried only the link and the page path. A call
 *     from an ad click and a call from an organic search looked identical in
 *     GA4, so no report could separate them.
 *  2. The lead form read gclid and utm_* from the CURRENT page's query string.
 *     Someone landing on an ad and then clicking through to a model page
 *     before filling the form arrived with a clean URL, and their gclid — the
 *     one thing that ties a lead back to a keyword — was already gone.
 *
 * So attribution is captured once, on the first page of the visit, and kept.
 * Every call click, text click and form submission afterwards carries it.
 *
 * ── WHAT THIS CANNOT DO ─────────────────────────────────────────────────────
 * It only sees people who CLICK the number. Someone who reads the number off
 * the screen and dials it on a desk phone leaves no trace here, and no amount
 * of front-end code changes that — that gap needs Google Ads call reporting
 * (forwarding numbers), Google Business Profile call history, or a call
 * tracking provider doing dynamic number insertion. See GOOGLE-ADS.md.
 */

export type Attribution = {
  /** Google Ads click id. gbraid/wbraid are its iOS and web-to-app variants. */
  gclid?: string
  gbraid?: string
  wbraid?: string
  /** Microsoft Ads, in case the account is ever run. */
  msclkid?: string
  /**
   * Social click ids, added 29 Sep 2026.
   *
   * These matter more here than the Google ones, because social is the channel
   * a referrer cannot see. A link tapped inside the Instagram or Facebook app
   * opens in that app's own browser, which frequently sends no referrer at all
   * — but Meta appends `fbclid` to the outbound link itself, so it survives.
   *
   * Until these were captured, every Instagram and Facebook lead that was not
   * on a hand-tagged link was recorded as untracked, which is exactly the
   * channel the business most wanted counted.
   *
   * `fbclid` covers Facebook and Instagram together; lib/lead-source.ts uses a
   * utm_source alongside it to tell them apart where one was set.
   */
  fbclid?: string
  ttclid?: string
  li_fat_id?: string
  twclid?: string
  epik?: string
  igshid?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  /** The first page of the visit, which is the ad's landing page on paid traffic. */
  landingPage?: string
  /** Document referrer at first touch — how organic visits are identified. */
  referrer?: string
  /** ISO timestamp of capture, used to expire the record. */
  capturedAt?: string
}

const STORAGE_KEY = 'sgr_attribution'

/**
 * Ninety days, matching the longest conversion window Google Ads offers. A
 * lead that converts later than that cannot be credited to the click anyway,
 * so holding the record longer would only keep stale data around.
 */
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000

const CLICK_IDS = ['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid', 'ttclid', 'li_fat_id', 'twclid', 'epik', 'igshid'] as const

/**
 * Storage that never throws.
 *
 * localStorage is unavailable in private windows, when cookies are blocked,
 * and inside some in-app browsers — all of which are common on the mobile
 * emergency traffic this site runs on. Attribution is worth having and is
 * never worth an exception on page load, so every access is guarded and the
 * failure mode is simply "no attribution".
 */
function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key) ?? window.sessionStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    try {
      window.sessionStorage.setItem(key, value)
    } catch {
      // Nothing to do: the visit is simply unattributed.
    }
  }
}

function readStored(): Attribution | null {
  const raw = safeGet(STORAGE_KEY)
  if (!raw) return null
  try {
    const stored = JSON.parse(raw) as Attribution
    if (!stored.capturedAt) return stored
    if (Date.now() - new Date(stored.capturedAt).getTime() > MAX_AGE_MS) return null
    return stored
  } catch {
    return null
  }
}

const clean = (value: string | null) => (value && value.trim() ? value.trim().slice(0, 200) : undefined)

/**
 * Capture attribution for this visit, if it is worth capturing.
 *
 * A URL carrying a click id or a utm_source is a NEW touch and overwrites what
 * was stored: the most recent paid click is the one that should get credit,
 * which is also how Ads attributes it. A URL with neither only writes a record
 * if there is nothing stored yet, so an organic visit does not erase the ad
 * click that brought the same person here yesterday.
 */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  const get = (key: string) => clean(params.get(key))

  const touch: Attribution = {
    gclid: get('gclid'),
    gbraid: get('gbraid'),
    wbraid: get('wbraid'),
    msclkid: get('msclkid'),
    fbclid: get('fbclid'),
    ttclid: get('ttclid'),
    li_fat_id: get('li_fat_id'),
    twclid: get('twclid'),
    epik: get('epik'),
    igshid: get('igshid'),
    utmSource: get('utm_source'),
    utmMedium: get('utm_medium'),
    utmCampaign: get('utm_campaign'),
    utmTerm: get('utm_term'),
    utmContent: get('utm_content'),
  }

  const isPaidTouch = CLICK_IDS.some((id) => touch[id]) || Boolean(touch.utmSource)
  const stored = readStored()

  if (!isPaidTouch && stored) return stored

  const record: Attribution = {
    ...(isPaidTouch ? touch : {}),
    landingPage: window.location.pathname,
    referrer: clean(document.referrer) ?? undefined,
    capturedAt: new Date().toISOString(),
  }

  safeSet(STORAGE_KEY, JSON.stringify(record))
  return record
}

/** What was captured for this visit, capturing it now if nothing is stored. */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {}
  return readStored() ?? captureAttribution()
}

/**
 * Attribution flattened for the dataLayer, with empty values dropped so a
 * GA4 report does not fill with blank dimensions on organic traffic.
 */
export function attributionParams(): Record<string, string> {
  const attribution = getAttribution()
  return Object.fromEntries(
    Object.entries(attribution).filter(([, value]) => Boolean(value)),
  ) as Record<string, string>
}

/**
 * A stable id for this browser, so repeat actions collapse into one lead.
 *
 * Someone whose gate is stuck open taps the call button, gets voicemail, taps
 * it again, then fills the form. That is one lead and three events. Without an
 * id tying them together the dashboard reports three, which overstates every
 * channel and makes the per-source numbers useless for deciding where to spend.
 *
 * Deliberately not a fingerprint and deliberately not tied to anything about
 * the person: a random value, generated once, stored alongside the attribution
 * record and expiring with it. It identifies a browser for deduplication, not
 * a human for tracking, and it never leaves this site.
 */
const VISITOR_KEY = 'sgr_visitor'

export function visitorId(): string {
  if (typeof window === 'undefined') return ''
  const existing = safeGet(VISITOR_KEY)
  if (existing) return existing

  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `v${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`

  safeSet(VISITOR_KEY, id)
  return id
}
