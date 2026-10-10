/**
 * Who sent a request: IP address, approximate location and device.
 *
 * ── WHERE IT COMES FROM ─────────────────────────────────────────────────────
 * Netlify attaches its own geolocation to every request it forwards to the
 * Next.js runtime, so no third-party lookup service, API key or extra latency
 * is involved:
 *
 *   x-nf-client-connection-ip   the visitor's IP
 *   x-nf-geo                    base64 JSON: city, subdivision, country,
 *                               timezone, latitude, longitude, postal_code
 *
 * Those are read first. Cloudflare and Vercel equivalents are read as fallbacks
 * so the site keeps reporting something if it ever moves host, and
 * x-forwarded-for is the last resort for the IP.
 *
 * ── WHAT IT CAN AND CANNOT TELL YOU ─────────────────────────────────────────
 * IP geolocation is accurate to the country, usually to the metro area, and
 * often wrong at the city level — mobile carriers route through regional
 * gateways, so a phone in Frisco can resolve to Dallas. It is a guide to where
 * traffic comes from, not an address. A VPN moves it anywhere.
 *
 * ── PERSONAL DATA ───────────────────────────────────────────────────────────
 * An IP address is personal data under most privacy law. Stored at the
 * client's request (10 Oct 2026) for lead verification; the privacy policy
 * has to say so, and the IP is shown only inside the authenticated dashboard.
 */

export type VisitorGeo = {
  city?: string
  region?: string
  regionCode?: string
  country?: string
  countryCode?: string
  postalCode?: string
  /** IANA zone, e.g. "America/Chicago". Used to show the visitor's local time. */
  timezone?: string
  latitude?: number
  longitude?: number
}

export type VisitorContext = {
  ip?: string
  geo: VisitorGeo
  device: 'mobile' | 'tablet' | 'desktop' | 'bot' | 'unknown'
  browser?: string
  os?: string
  userAgent?: string
}

const clip = (s: string | undefined | null, n: number) => (s ? s.slice(0, n) : undefined)

function decodeNetlifyGeo(raw: string | null): VisitorGeo {
  if (!raw) return {}
  let json: Record<string, unknown> | undefined
  for (const attempt of [() => Buffer.from(raw, 'base64').toString('utf8'), () => raw]) {
    try {
      const parsed = JSON.parse(attempt())
      if (parsed && typeof parsed === 'object') {
        json = parsed
        break
      }
    } catch {
      // try the next form
    }
  }
  if (!json) return {}

  const country = json.country as { code?: string; name?: string } | undefined
  const subdivision = json.subdivision as { code?: string; name?: string } | undefined
  const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : undefined)

  return {
    city: clip(json.city as string, 120),
    region: clip(subdivision?.name, 120),
    regionCode: clip(subdivision?.code, 12),
    country: clip(country?.name, 120),
    countryCode: clip(country?.code, 4),
    postalCode: clip(json.postal_code as string, 20),
    timezone: clip(json.timezone as string, 64),
    latitude: num(json.latitude),
    longitude: num(json.longitude),
  }
}

/** Header values on some hosts are URI-encoded (Vercel city names, for one). */
const decoded = (v: string | null) => {
  if (!v) return undefined
  try {
    return decodeURIComponent(v)
  } catch {
    return v
  }
}

function countryName(code?: string): string | undefined {
  if (!code || code === 'XX' || code === 'T1') return undefined
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code.toUpperCase())
  } catch {
    return undefined
  }
}

function parseUserAgent(ua: string): Pick<VisitorContext, 'device' | 'browser' | 'os'> {
  if (!ua) return { device: 'unknown' }
  if (/bot|crawler|spider|crawling|headless|lighthouse|pingdom|uptime/i.test(ua)) {
    return { device: 'bot', browser: 'Bot' }
  }

  const device: VisitorContext['device'] = /ipad|tablet|(android(?!.*mobile))/i.test(ua)
    ? 'tablet'
    : /mobi|iphone|ipod|android/i.test(ua)
      ? 'mobile'
      : 'desktop'

  // Order matters: Edge and Opera also say "Chrome", Chrome also says "Safari",
  // and Facebook / Instagram in-app browsers say all of them.
  const browser = /FBAN|FBAV/.test(ua)
    ? 'Facebook app'
    : /Instagram/.test(ua)
      ? 'Instagram app'
      : /Edg\//.test(ua)
        ? 'Edge'
        : /OPR\/|Opera/.test(ua)
          ? 'Opera'
          : /SamsungBrowser/.test(ua)
            ? 'Samsung Internet'
            : /CriOS|Chrome\//.test(ua)
              ? 'Chrome'
              : /FxiOS|Firefox\//.test(ua)
                ? 'Firefox'
                : /Safari\//.test(ua)
                  ? 'Safari'
                  : undefined

  const os = /iPhone|iPad|iPod/.test(ua)
    ? 'iOS'
    : /Android/.test(ua)
      ? 'Android'
      : /Windows/.test(ua)
        ? 'Windows'
        : /Mac OS X|Macintosh/.test(ua)
          ? 'macOS'
          : /Linux/.test(ua)
            ? 'Linux'
            : undefined

  return { device, browser, os }
}

export function visitorContext(request: Request, browserTimezone?: string): VisitorContext {
  const h = request.headers

  const ip =
    h.get('x-nf-client-connection-ip') ??
    h.get('cf-connecting-ip') ??
    h.get('x-real-ip') ??
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    undefined

  const geo = decodeNetlifyGeo(h.get('x-nf-geo'))

  // Fallbacks, field by field, for anything Netlify did not supply.
  geo.countryCode ??= clip(h.get('x-country') ?? h.get('cf-ipcountry') ?? h.get('x-vercel-ip-country'), 4)
  geo.country ??= countryName(geo.countryCode)
  geo.city ??= clip(decoded(h.get('x-vercel-ip-city') ?? h.get('cf-ipcity')), 120)
  geo.regionCode ??= clip(h.get('x-vercel-ip-country-region') ?? h.get('cf-region-code'), 12)
  geo.timezone ??= clip(h.get('x-vercel-ip-timezone') ?? h.get('cf-timezone'), 64)

  // The browser's own zone is more reliable than IP geolocation (a VPN moves
  // the IP but not the phone's clock), so it wins when the client sent one.
  if (browserTimezone && isValidTimeZone(browserTimezone)) geo.timezone = browserTimezone

  const userAgent = h.get('user-agent') ?? ''
  return {
    ip: clip(ip, 64),
    geo,
    ...parseUserAgent(userAgent),
    userAgent: clip(userAgent, 400),
  }
}

export function isValidTimeZone(tz: string): boolean {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz })
    return true
  } catch {
    return false
  }
}

/** The fields as stored on an Event or Lead document. */
export function contextFields(ctx: VisitorContext) {
  return {
    ip: ctx.ip,
    geo: ctx.geo,
    device: ctx.device,
    browser: ctx.browser,
    os: ctx.os,
    userAgent: ctx.userAgent,
  }
}
