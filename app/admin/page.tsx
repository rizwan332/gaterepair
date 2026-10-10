import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AlertTriangle, Download, FileText, Globe2, Mail, MapPin, MessageSquare, MessageSquareText, Phone, Search, Users } from 'lucide-react'
import { isAuthenticated, adminConfigured } from '@/lib/admin-auth'
import {
  rangeForDays,
  previousRange,
  getTotals,
  getBySource,
  getByPage,
  getByPageType,
  getByLocation,
  getByDevice,
  getDaily,
  getLeadsPage,
  getFormLeadsPage,
  countFormLeadsByStatus,
  LEAD_STATUSES,
  type ActionType,
  type LeadFilters,
  type LeadStatus,
} from '@/lib/lead-report'
import type { SourceGroup } from '@/lib/lead-source'
import { isValidTimeZone } from '@/lib/visitor-context'
import { TimezoneSync, ADMIN_TZ_COOKIE } from '@/components/admin/timezone-sync'
import { StatusSelect } from '@/components/admin/status-select'
import {
  ActionChips,
  BarList,
  Chip,
  Device,
  GROUP_LABEL,
  GroupPill,
  Kpi,
  Location,
  Pagination,
  Panel,
  TrendChart,
  WhenWhere,
  flag,
  zoneName,
} from '@/components/admin/ui'

/**
 * The lead dashboard.
 *
 * ── WHY IT IS INSIDE THE SITE ───────────────────────────────────────────────
 * The data it reports is first-party: it lives in this site's own database,
 * written by this site's own endpoint. GA4 remains useful for traffic, but it
 * cannot answer the question this page exists for — which individual page
 * produced which lead from which channel — because GA4 is aggregated and
 * thresholds away exactly the small numbers a local contractor cares about.
 *
 * ── TIME ZONES ──────────────────────────────────────────────────────────────
 * Every time is shown in the viewer's own zone (detected by TimezoneSync and
 * kept in a cookie), with a one-click switch to Dallas time, which is the
 * business's own clock. Each lead also shows the visitor's local time when it
 * differs. Days on the chart are cut in the same zone the times are shown in.
 *
 * ── INDEXING ────────────────────────────────────────────────────────────────
 * noindex/nofollow, no link to it from anywhere on the site, and absent from
 * lib/sitemap.ts. It is reachable only by typing the address and signing in.
 */

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: { absolute: 'Lead dashboard' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

const BUSINESS_TZ = 'America/Chicago'
const PAGE_SIZE = 25
const GROUPS: SourceGroup[] = ['paid', 'organic-search', 'social', 'ai', 'referral', 'direct']
const ACTIONS: { key: ActionType; label: string }[] = [
  { key: 'call_click', label: 'Calls' },
  { key: 'sms_click', label: 'Texts' },
  { key: 'form_submit', label: 'Forms' },
]
const STATUS_LABEL: Record<LeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  booked: 'Booked',
  closed: 'Closed',
  lost: 'Lost',
}

type Params = {
  days?: string
  tab?: string
  zone?: string
  p?: string
  group?: string
  action?: string
  status?: string
  q?: string
}
type Props = { searchParams: Promise<Params> }

export default async function AdminDashboard({ searchParams }: Props) {
  if (!adminConfigured()) {
    return (
      <main className="container-page py-16">
        <div className="mx-auto max-w-xl rounded-[var(--radius-card)] border border-amber-300 bg-amber-50 p-6">
          <h1 className="font-display text-lg font-semibold text-amber-900">Dashboard not configured</h1>
          <p className="mt-3 text-sm leading-relaxed text-amber-900">
            <code>ADMIN_PASSWORD_HASH</code> and <code>ADMIN_SESSION_SECRET</code> are not set in this
            environment, so there is no password to check against and the dashboard is locked. Generate
            them with <code>npx tsx scripts/hash-admin-password.ts</code> and add them to the Netlify
            environment.
          </p>
        </div>
      </main>
    )
  }

  if (!(await isAuthenticated())) redirect('/admin/login')

  const params = await searchParams
  const store = await cookies()
  const cookieTz = decodeURIComponent(store.get(ADMIN_TZ_COOKIE)?.value ?? '')
  const viewerTz = cookieTz && isValidTimeZone(cookieTz) ? cookieTz : BUSINESS_TZ
  const zone = params.zone === 'dallas' ? 'dallas' : 'mine'
  const tz = zone === 'dallas' ? BUSINESS_TZ : viewerTz

  const days = Math.min(Math.max(Number(params.days) || 30, 1), 365)
  const range = rangeForDays(days, tz)
  const tab = params.tab === 'forms' ? 'forms' : params.tab === 'leads' ? 'leads' : 'overview'
  const page = Math.max(1, Math.floor(Number(params.p) || 1))

  /** Builds a dashboard URL from the current state with some keys changed. */
  const href = (changes: Partial<Params>) => {
    const next: Record<string, string> = {}
    const merged = { days: String(days), tab, zone, group: params.group, action: params.action, status: params.status, q: params.q, ...changes }
    for (const [k, v] of Object.entries(merged)) {
      if (v === undefined || v === '') continue
      if (k === 'days' && v === '30') continue
      if (k === 'tab' && v === 'overview') continue
      if (k === 'zone' && v === 'mine') continue
      if (k === 'p' && v === '1') continue
      next[k] = v
    }
    const qs = new URLSearchParams(next).toString()
    return qs ? `/admin?${qs}` : '/admin'
  }

  const statusCounts = await countFormLeadsByStatus(range)

  return (
    <main className="min-h-screen bg-ink-50/60">
      <TimezoneSync current={cookieTz || undefined} />
      <div className="container-page py-8">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">Shield Gate Repair</p>
            <h1 className="mt-1 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Lead dashboard</h1>
            <p className="mt-1 text-sm text-ink-600">
              Last {days === 1 ? '24 hours' : `${days} days`} · times in{' '}
              <span className="font-medium text-ink-800">
                {zone === 'dallas' ? 'Dallas time' : 'your time'} ({zoneName(tz)})
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-lg border border-ink-200 bg-white p-0.5" role="group" aria-label="Period">
              {[1, 7, 30, 90, 365].map((d) => (
                <Link
                  key={d}
                  href={href({ days: String(d), p: '1' })}
                  aria-current={d === days ? 'true' : undefined}
                  className={`rounded-md px-2.5 py-1 text-sm ${d === days ? 'bg-ink-900 font-medium text-white' : 'text-ink-600 hover:text-ink-900'}`}
                >
                  {d === 1 ? '24h' : d === 365 ? '1y' : `${d}d`}
                </Link>
              ))}
            </div>
            <div className="inline-flex rounded-lg border border-ink-200 bg-white p-0.5" role="group" aria-label="Time zone">
              <Link
                href={href({ zone: 'mine' })}
                aria-current={zone === 'mine' ? 'true' : undefined}
                className={`rounded-md px-2.5 py-1 text-sm ${zone === 'mine' ? 'bg-ink-900 font-medium text-white' : 'text-ink-600 hover:text-ink-900'}`}
                title={viewerTz}
              >
                My time
              </Link>
              <Link
                href={href({ zone: 'dallas' })}
                aria-current={zone === 'dallas' ? 'true' : undefined}
                className={`rounded-md px-2.5 py-1 text-sm ${zone === 'dallas' ? 'bg-ink-900 font-medium text-white' : 'text-ink-600 hover:text-ink-900'}`}
              >
                Dallas
              </Link>
            </div>
            <a
              href={`/api/admin/export?days=${days}&tz=${encodeURIComponent(tz)}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-700 hover:border-ink-400"
            >
              <Download className="size-4" aria-hidden />
              Export CSV
            </a>
          </div>
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────────── */}
        <nav className="mt-6 flex gap-1 overflow-x-auto border-b border-ink-200" aria-label="Dashboard sections">
          <TabLink href={href({ tab: 'overview', p: '1' })} active={tab === 'overview'}>
            Overview
          </TabLink>
          <TabLink href={href({ tab: 'leads', p: '1' })} active={tab === 'leads'}>
            All leads
          </TabLink>
          <TabLink href={href({ tab: 'forms', p: '1' })} active={tab === 'forms'} count={statusCounts.all} badge={statusCounts.new}>
            Form submissions
          </TabLink>
        </nav>

        {tab === 'overview' && <Overview range={range} tz={tz} leadsHref={href({ tab: 'leads', p: '1' })} />}
        {tab === 'leads' && <LeadsTab range={range} tz={tz} page={page} params={params} href={href} />}
        {tab === 'forms' && <FormsTab range={range} tz={tz} page={page} params={params} href={href} counts={statusCounts} />}
      </div>
    </main>
  )
}

// ═══ Overview ═══════════════════════════════════════════════════════════════

async function Overview({ range, tz, leadsHref }: { range: ReturnType<typeof rangeForDays>; tz: string; leadsHref: string }) {
  const prev = previousRange(range)
  const [totals, before, bySource, byPage, byType, location, devices, daily, latest] = await Promise.all([
    getTotals(range),
    getTotals(prev),
    getBySource(range),
    getByPage(range, 8),
    getByPageType(range),
    getByLocation(range, 8),
    getByDevice(range),
    getDaily(range),
    getLeadsPage(range, 1, 6),
  ])

  const directShare = totals.leads > 0 ? Math.round((totals.direct / totals.leads) * 100) : 0

  return (
    <div className="mt-6 flex flex-col gap-5">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi label="Leads" value={totals.leads} previous={before.leads} hint="Unique people per day; repeat taps count once" icon={Users} />
        <Kpi label="Call clicks" value={totals.callClicks} previous={before.callClicks} hint="Taps on the phone number" icon={Phone} />
        <Kpi label="Text clicks" value={totals.smsClicks} previous={before.smsClicks} hint="Taps on the text button" icon={MessageSquareText} />
        <Kpi label="Form requests" value={totals.formSubmits} previous={before.formSubmits} hint="Completed request forms" icon={FileText} />
        <Kpi label="From Google Ads" value={totals.paid} previous={before.paid} hint="Leads from paid clicks" icon={Globe2} />
      </section>

      <Panel title="Lead actions per day" subtitle="Hover a bar for that day's numbers. Days follow the time zone above.">
        <TrendChart days={daily} />
      </Panel>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Where leads came from" subtitle={`${directShare}% could not be attributed to any channel`}>
          <BarList
            rows={bySource.map((s) => ({
              key: s.source,
              label: (
                <span className="inline-flex items-center gap-2">
                  <GroupPill group={s.group} />
                  {s.label}
                </span>
              ),
              value: s.leads,
              detail: `${s.callClicks}c · ${s.smsClicks}t · ${s.formSubmits}f`,
            }))}
            empty="No leads recorded in this period."
          />
          <p className="mt-3 text-xs text-ink-500">c = call clicks, t = text clicks, f = forms</p>
        </Panel>

        <Panel title="Where visitors are" subtitle="From IP location, accurate to the metro area. Recorded from 10 Oct 2026.">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">Countries</h3>
              <BarList
                rows={location.countries.map((c) => ({ key: c.label, label: `${flag(c.countryCode)} ${c.label}`.trim(), value: c.leads }))}
                barClass="bg-blue-500/15"
              />
            </div>
            <div className="min-w-0">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">Cities</h3>
              <BarList
                rows={location.cities.map((c) => ({ key: c.label, label: c.label, value: c.leads }))}
                barClass="bg-blue-500/15"
                empty="No city data yet."
              />
            </div>
          </div>
        </Panel>

        <Panel title="Top pages" subtitle="The page each lead first acted on">
          <BarList
            rows={byPage.map((p) => ({
              key: p.path,
              label: <span className="font-mono text-xs">{p.path}</span>,
              value: p.leads,
              detail: p.typeLabel,
            }))}
            empty="No leads recorded in this period."
          />
        </Panel>

        <Panel title="Page types and devices">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">Page type</h3>
              <BarList rows={byType.map((t) => ({ key: t.type, label: t.label, value: t.leads }))} barClass="bg-success-500/15" />
            </div>
            <div className="min-w-0">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">Device</h3>
              <BarList
                rows={devices.map((d) => ({ key: d.device, label: d.device.charAt(0).toUpperCase() + d.device.slice(1), value: d.leads }))}
                barClass="bg-success-500/15"
              />
            </div>
          </div>
        </Panel>
      </div>

      <Panel
        title="Latest leads"
        action={
          <Link href={leadsHref} className="text-sm font-medium text-ink-700 underline decoration-gold-400 underline-offset-2 hover:text-ink-950">
            View all {latest.total}
          </Link>
        }
      >
        <LeadTable rows={latest.rows} tz={tz} />
      </Panel>

      <div className="flex gap-3 rounded-[var(--radius-card)] border border-ink-200 bg-white p-4 text-sm leading-relaxed text-ink-700">
        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-ink-400" aria-hidden />
        <p>
          <strong className="text-ink-900">A call or text click shows intent, not a connected conversation.</strong> It
          doesn&rsquo;t prove anyone answered. Leads marked &ldquo;Direct / unknown&rdquo; are genuinely unknown, mostly
          people who saw a post or an ad and typed the address later. Locations come from the IP address and can be
          off at the city level, especially on mobile networks and VPNs.
        </p>
      </div>
    </div>
  )
}

// ═══ All leads ══════════════════════════════════════════════════════════════

async function LeadsTab({
  range,
  tz,
  page,
  params,
  href,
}: {
  range: ReturnType<typeof rangeForDays>
  tz: string
  page: number
  params: Params
  href: (c: Partial<Params>) => string
}) {
  const group = GROUPS.includes(params.group as SourceGroup) ? (params.group as SourceGroup) : undefined
  const action = ACTIONS.some((a) => a.key === params.action) ? (params.action as ActionType) : undefined
  const filters: LeadFilters = { group, action }
  const result = await getLeadsPage(range, page, PAGE_SIZE, filters)

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2.5 rounded-[var(--radius-card)] border border-ink-100 bg-white p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 w-14 text-xs font-semibold uppercase tracking-wide text-ink-500">Source</span>
          <Chip href={href({ group: '', p: '1' })} active={!group}>
            All
          </Chip>
          {GROUPS.map((g) => (
            <Chip key={g} href={href({ group: g, p: '1' })} active={group === g}>
              {GROUP_LABEL[g]}
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 w-14 text-xs font-semibold uppercase tracking-wide text-ink-500">Action</span>
          <Chip href={href({ action: '', p: '1' })} active={!action}>
            All
          </Chip>
          {ACTIONS.map((a) => (
            <Chip key={a.key} href={href({ action: a.key, p: '1' })} active={action === a.key}>
              {a.label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white">
        <LeadTable rows={result.rows} tz={tz} />
      </div>
      <Pagination page={result.page} pages={result.pages} total={result.total} pageSize={PAGE_SIZE} href={(n) => href({ p: String(n) })} />
    </div>
  )
}

function LeadTable({ rows, tz }: { rows: Awaited<ReturnType<typeof getLeadsPage>>['rows']; tz: string }) {
  if (rows.length === 0) {
    return <p className="p-8 text-center text-sm text-ink-500">No leads match this period and filter.</p>
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] text-sm">
        <thead>
          <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wide text-ink-500">
            <th className="px-4 py-3 font-semibold">When</th>
            <th className="px-4 py-3 font-semibold">Source</th>
            <th className="px-4 py-3 font-semibold">Location · IP</th>
            <th className="px-4 py-3 font-semibold">Device</th>
            <th className="px-4 py-3 font-semibold">Page</th>
            <th className="px-4 py-3 font-semibold">Actions (taps)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={`${r.at.toString()}-${i}`} className="border-b border-ink-50 align-top last:border-0 hover:bg-ink-50/60">
              <td className="px-4 py-3">
                <WhenWhere at={r.at} viewerTz={tz} geo={r.geo} />
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col items-start gap-1">
                  <GroupPill group={r.group} />
                  <span className="text-ink-800" title={`Identified by: ${r.basis}`}>
                    {r.sourceLabel}
                  </span>
                  {r.campaign && <span className="text-xs text-ink-500">{r.campaign}</span>}
                </div>
              </td>
              <td className="max-w-[220px] px-4 py-3">
                <Location geo={r.geo} ip={r.ip} />
              </td>
              <td className="px-4 py-3">
                <Device device={r.device} os={r.os} browser={r.browser} />
              </td>
              <td className="max-w-[220px] px-4 py-3">
                <span className="break-all font-mono text-xs text-ink-700">{r.pagePath}</span>
                <span className="mt-0.5 block text-xs text-ink-500">{r.pageTypeLabel}</span>
              </td>
              <td className="px-4 py-3">
                <ActionChips actions={r.actions} counts={r.actionCounts} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ═══ Form submissions ═══════════════════════════════════════════════════════

/**
 * Who asked to be called back. The only part of the dashboard with names,
 * phone numbers and addresses in it, which is why it sits behind its own tab.
 * Phone leads never appear here: a call click leaves no name or number behind.
 */
async function FormsTab({
  range,
  tz,
  page,
  params,
  href,
  counts,
}: {
  range: ReturnType<typeof rangeForDays>
  tz: string
  page: number
  params: Params
  href: (c: Partial<Params>) => string
  counts: Record<LeadStatus | 'all', number>
}) {
  const status = LEAD_STATUSES.includes(params.status as LeadStatus) ? (params.status as LeadStatus) : undefined
  const q = (params.q ?? '').trim().slice(0, 80)
  const result = await getFormLeadsPage(range, page, PAGE_SIZE, { status, q: q || undefined })

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-card)] border border-ink-100 bg-white p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <Chip href={href({ status: '', p: '1' })} active={!status} count={counts.all}>
            All
          </Chip>
          {LEAD_STATUSES.map((s) => (
            <Chip key={s} href={href({ status: s, p: '1' })} active={status === s} count={counts[s]}>
              {STATUS_LABEL[s]}
            </Chip>
          ))}
        </div>
        <form action="/admin" method="get" className="flex items-center gap-2">
          <input type="hidden" name="tab" value="forms" />
          {params.days && <input type="hidden" name="days" value={params.days} />}
          {params.zone && <input type="hidden" name="zone" value={params.zone} />}
          {status && <input type="hidden" name="status" value={status} />}
          <label className="relative">
            <span className="sr-only">Search submissions</span>
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-ink-400" aria-hidden />
            <input
              id="forms-search"
              name="q"
              defaultValue={q}
              placeholder="Name, phone, email, address"
              className="w-64 max-w-full rounded-lg border border-ink-200 bg-white py-1.5 pl-8 pr-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-ink-500 focus:outline-none"
            />
          </label>
        </form>
      </div>

      {result.rows.length === 0 ? (
        <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-8 text-center">
          <FileText className="mx-auto mb-3 size-8 text-ink-300" aria-hidden />
          <p className="font-medium text-ink-900">{q || status ? 'No submissions match this search' : 'No form submissions in this period'}</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
            Phone leads never appear in this tab. A call click leaves no name or number behind, so those are on the All
            leads tab instead.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {result.rows.map((lead) => (
            <li key={lead.id} className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-base font-semibold text-ink-950">{lead.name}</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-1.5 font-medium text-ink-900 underline decoration-gold-400 underline-offset-2">
                      <Phone className="size-3.5 text-ink-400" aria-hidden />
                      {lead.phone}
                    </a>
                    {lead.email && (
                      <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-1.5 text-ink-700 hover:text-ink-950">
                        <Mail className="size-3.5 text-ink-400" aria-hidden />
                        {lead.email}
                      </a>
                    )}
                    {(lead.address || lead.city) && (
                      <span className="inline-flex items-center gap-1.5 text-ink-700">
                        <MapPin className="size-3.5 text-ink-400" aria-hidden />
                        {[lead.address, lead.city].filter(Boolean).join(', ')}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2 text-right text-sm">
                  <WhenWhere at={lead.at} viewerTz={tz} geo={lead.geo} />
                  <StatusSelect id={lead.id} status={lead.status} />
                </div>
              </div>

              {lead.message && (
                <div className="mt-4 flex gap-2.5 rounded-lg bg-ink-50 p-3">
                  <MessageSquare className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                  <p className="text-sm leading-relaxed text-ink-800">{lead.message}</p>
                </div>
              )}

              <dl className="mt-4 grid gap-x-6 gap-y-3 border-t border-ink-100 pt-3 text-xs sm:grid-cols-2 lg:grid-cols-5">
                <Field label="Source">
                  <span className="flex flex-col items-start gap-1">
                    <GroupPill group={lead.group} />
                    <span className="text-ink-800">{lead.sourceLabel}</span>
                  </span>
                </Field>
                <Field label="Campaign">
                  <span className="text-ink-700">{lead.utmCampaign ?? (lead.gclid ? 'Google Ads click' : '—')}</span>
                </Field>
                <Field label="Location · IP">
                  <Location geo={lead.geo} ip={lead.ip} />
                </Field>
                <Field label="Device">
                  <Device device={lead.device} os={lead.os} browser={lead.browser} />
                </Field>
                <Field label="Landed on → submitted from">
                  <span className="break-all font-mono text-[0.6875rem] text-ink-700">
                    {lead.landingPage ?? '—'}
                    <br />→ {lead.sourcePage ?? '—'}
                  </span>
                </Field>
              </dl>
            </li>
          ))}
        </ul>
      )}

      <Pagination page={result.page} pages={result.pages} total={result.total} pageSize={PAGE_SIZE} href={(n) => href({ p: String(n) })} />
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <dt className="font-semibold uppercase tracking-wide text-ink-400">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  )
}

function TabLink({
  href,
  active,
  count,
  badge,
  children,
}: {
  href: string
  active: boolean
  count?: number
  badge?: number
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`-mb-px inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
        active ? 'border-gold-500 text-ink-950' : 'border-transparent text-ink-500 hover:border-ink-300 hover:text-ink-800'
      }`}
    >
      {children}
      {typeof count === 'number' && (
        <span className={`rounded-full px-2 py-0.5 text-xs tabular ${active ? 'bg-gold-500/15 text-gold-700' : 'bg-ink-100 text-ink-600'}`}>{count}</span>
      )}
      {!!badge && <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-[0.625rem] font-bold tabular text-white" title="New, not yet contacted">{badge} new</span>}
    </Link>
  )
}
