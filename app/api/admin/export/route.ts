import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/admin-auth'
import { rangeForDays, getRecent } from '@/lib/lead-report'
import { isValidTimeZone } from '@/lib/visitor-context'

/**
 * CSV of the leads in a period.
 *
 * Exists so the numbers can leave this dashboard and be checked, reconciled
 * against a client's own records, or kept. A reporting tool you cannot export
 * from asks to be trusted rather than verified.
 *
 * Authentication is checked here as well as on the page: a route handler is
 * reachable directly and does not inherit the page's guard.
 */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const cell = (value: unknown): string => {
  const s = String(value ?? '')
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

export async function GET(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const url = new URL(request.url)
  const days = Math.min(Math.max(Number(url.searchParams.get('days')) || 30, 1), 365)
  const tzParam = url.searchParams.get('tz') ?? ''
  const tz = isValidTimeZone(tzParam) && tzParam ? tzParam : 'America/Chicago'
  const rows = await getRecent(rangeForDays(days, tz), 5000)

  const local = (d: Date, zone?: string) =>
    zone && isValidTimeZone(zone)
      ? new Intl.DateTimeFormat('sv-SE', { timeZone: zone, dateStyle: 'short', timeStyle: 'medium' }).format(d)
      : ''

  const header = [
    'timestamp_utc',
    `time_${tz.replace(/\//g, '_')}`,
    'visitor_local_time',
    'visitor_timezone',
    'source',
    'source_group',
    'identified_by',
    'campaign',
    'city',
    'region',
    'country',
    'ip',
    'device',
    'os',
    'browser',
    'page',
    'page_type',
    'landing_page',
    'actions',
  ]
  const body = rows.map((r) =>
    [
      new Date(r.at).toISOString(),
      local(r.at, tz),
      local(r.at, r.geo?.timezone),
      r.geo?.timezone,
      r.sourceLabel,
      r.group,
      r.basis,
      r.campaign,
      r.geo?.city,
      r.geo?.region,
      r.geo?.country,
      r.ip,
      r.device,
      r.os,
      r.browser,
      r.pagePath,
      r.pageTypeLabel,
      r.landingPage,
      r.actions.join(' '),
    ]
      .map(cell)
      .join(','),
  )

  const csv = [header.join(','), ...body].join('\n')
  const stamp = new Date().toISOString().slice(0, 10)

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="shield-leads-${days}d-${stamp}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
