import { createSign } from 'node:crypto'
import { unstable_cache } from 'next/cache'
import { business } from '@/content/business'
import { PRIORITY_CITIES } from '@/lib/brand-city'

/**
 * Read-only Google Search Console data for the admin dashboard.
 *
 * Needs GSC_SITE_URL, GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY in the environment.
 * Signs its own service-account token, because this is the only Google API the
 * site calls and node:crypto makes a client library unnecessary.
 */

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
const SIX_HOURS = 6 * 60 * 60

export type GscRow = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }
export type GscTotals = Omit<GscRow, 'keys'>
type Window = { start: string; end: string }

export const gscConfigured = () =>
  Boolean(process.env.GSC_SITE_URL && process.env.GSC_CLIENT_EMAIL && process.env.GSC_PRIVATE_KEY)

/** 28 days against the 28 before. Ends 3 days ago because Google's last days are incomplete. */
export function searchWindows(now = new Date()): { current: Window; previous: Window } {
  const day = (back: number) => new Date(now.getTime() - back * 864e5).toISOString().slice(0, 10)
  return { current: { start: day(30), end: day(3) }, previous: { start: day(58), end: day(31) } }
}

/** Query and page pairs already close to the top three, biggest audience first. */
export const positionOpportunities = (rows: GscRow[], limit = 50) =>
  rows
    .filter((r) => r.position >= 4 && r.position <= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, limit)

/** Pages Google shows often that earn fewer clicks than the site's own average. */
export const lowCtrPages = (rows: GscRow[], siteCtr: number, limit = 20) =>
  rows
    .filter((r) => r.impressions >= 100 && r.ctr < siteCtr)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, limit)

async function accessToken(): Promise<string> {
  // A pasted key often keeps the JSON file's quotes and literal \n sequences.
  const key = process.env.GSC_PRIVATE_KEY!.trim().replace(/^"|"$/g, '').replace(/\\n/g, '\n')
  const encode = (o: object) => Buffer.from(JSON.stringify(o)).toString('base64url')
  const iat = Math.floor(Date.now() / 1000)
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({
    iss: process.env.GSC_CLIENT_EMAIL,
    scope: SCOPE,
    aud: 'https://oauth2.googleapis.com/token',
    iat,
    exp: iat + 3600,
  })}`
  const assertion = `${unsigned}.${createSign('RSA-SHA256').update(unsigned).sign(key, 'base64url')}`
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Google token request failed: ${res.status}`)
  return (await res.json()).access_token
}

async function post<T>(url: string, body: object, token: string): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Search Console request failed: ${res.status}`)
  return res.json()
}

const ZERO: GscTotals = { clicks: 0, impressions: 0, ctr: 0, position: 0 }

// Thrown errors are not cached, so a failed call is retried on the next view.
export const getSearchReport = unstable_cache(
  async () => {
    const token = await accessToken()
    const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(process.env.GSC_SITE_URL!)}/searchAnalytics/query`
    const windows = searchWindows()
    const query = async (w: Window, dimensions: string[], rowLimit: number) =>
      (await post<{ rows?: GscRow[] }>(url, { startDate: w.start, endDate: w.end, dimensions, rowLimit }, token)).rows ?? []

    const { current, previous } = windows
    const [now, before, queries, pages, pairs] = await Promise.all([
      query(current, [], 1),
      query(previous, [], 1),
      query(current, ['query'], 20),
      query(current, ['page'], 1000),
      query(current, ['query', 'page'], 5000),
    ])
    const totals: GscTotals = now[0] ?? ZERO
    return {
      windows,
      totals,
      previous: (before[0] ?? ZERO) as GscTotals,
      topQueries: queries,
      topPages: pages.slice(0, 20),
      opportunities: positionOpportunities(pairs),
      lowCtr: lowCtrPages(pages, totals.ctr),
    }
  },
  ['gsc-report'],
  { revalidate: SIX_HOURS },
)

export type CityIndexStatus = {
  path: string
  indexed: boolean
  state: string
  lastCrawl?: string
  /**
   * The URL Google treats as canonical, where it differs from ours.
   *
   * Carried because "Duplicate, Google chose different canonical than user" is
   * useless without knowing which URL it picked — that one fact says whether
   * the fix is a canonical tag or the page's own content. Only set when the two
   * disagree, so the dashboard shows nothing for the pages that are fine.
   */
  googleCanonical?: string
}

type Inspection = {
  inspectionResult?: {
    indexStatusResult?: {
      verdict?: string
      coverageState?: string
      lastCrawlTime?: string
      googleCanonical?: string
      userCanonical?: string
    }
  }
}

/** One inspection per priority city. Cached because Google allows 2,000 a day. */
export const getCityIndexStatus = unstable_cache(
  async (): Promise<CityIndexStatus[]> => {
    const token = await accessToken()
    return Promise.all(
      [...PRIORITY_CITIES].map(async (slug) => {
        const path = `/gate-repair-${slug}-tx`
        const r = await post<Inspection>(
          'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
          { inspectionUrl: `${business.url}${path}`, siteUrl: process.env.GSC_SITE_URL },
          token,
        )
        const s = r.inspectionResult?.indexStatusResult
        return {
          path,
          indexed: s?.verdict === 'PASS',
          state: s?.coverageState ?? 'Unknown',
          lastCrawl: s?.lastCrawlTime,
          googleCanonical:
            s?.googleCanonical && s.googleCanonical !== s.userCanonical ? s.googleCanonical : undefined,
        }
      }),
    )
  },
  ['gsc-city-index'],
  { revalidate: SIX_HOURS },
)
