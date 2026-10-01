import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { AlertTriangle, Download, Phone, FileText, HelpCircle, Mail, MapPin, MessageSquare } from 'lucide-react'
import { isAuthenticated, adminConfigured } from '@/lib/admin-auth'
import {
  rangeForDays,
  getTotals,
  getBySource,
  getByPage,
  getByPageType,
  getDaily,
  getRecent,
  getFormLeads,
  countFormLeads,
  type FormLead,
} from '@/lib/lead-report'

/**
 * The lead dashboard.
 *
 * ── WHY IT IS INSIDE THE SITE ───────────────────────────────────────────────
 * The data it reports is first-party: it lives in this site's own database,
 * written by this site's own endpoint. Sending it out to a third-party
 * analytics product to read it back would add a dependency and a subscription
 * to answer questions the database can answer directly.
 *
 * GA4 remains useful for traffic and behaviour, but it cannot answer the
 * question this page exists for — which individual page produced which lead
 * from which channel — because GA4 is aggregated and applies thresholding that
 * suppresses exactly the small numbers a local contractor cares about.
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

const GROUP_STYLE: Record<string, string> = {
  paid: 'bg-gold-500/15 text-gold-700 ring-gold-500/25',
  'organic-search': 'bg-success-500/10 text-success-700 ring-success-500/20',
  social: 'bg-blue-50 text-blue-700 ring-blue-200',
  ai: 'bg-purple-50 text-purple-700 ring-purple-200',
  referral: 'bg-ink-100 text-ink-700 ring-ink-200',
  direct: 'bg-ink-50 text-ink-500 ring-ink-200',
}

type Props = { searchParams: Promise<{ days?: string; tab?: string }> }

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
  const days = Math.min(Math.max(Number(params.days) || 30, 1), 365)
  const range = rangeForDays(days)

  const tab = params.tab === 'forms' ? 'forms' : 'overview'

  /**
   * Both tabs are fetched whichever is showing.
   *
   * The form count is needed for the tab badge even on the overview, and
   * these are indexed queries over a few hundred rows — one extra round trip
   * costs less than the conditional would, and it means the badge can never
   * disagree with the table it points at.
   */
  const [totals, bySource, byPage, byType, daily, recent, formLeads, formCount] = await Promise.all([
    getTotals(range),
    getBySource(range),
    getByPage(range),
    getByPageType(range),
    getDaily(range),
    getRecent(range, 50),
    getFormLeads(range, 200),
    countFormLeads(range),
  ])

  const peak = Math.max(1, ...daily.map((d) => d.leads))
  const directShare = totals.leads > 0 ? Math.round((totals.direct / totals.leads) * 100) : 0

  return (
    <main className="container-page py-10">
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Lead dashboard</h1>
          <p className="mt-1.5 text-sm text-ink-600">
            First-party data from this site. Last {days} days.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[7, 30, 90, 365].map((d) => (
            <Link
              key={d}
              href={`/admin?days=${d}`}
              className={`rounded-lg border px-3 py-1.5 text-sm ${
                d === days
                  ? 'border-ink-900 bg-ink-900 font-medium text-white'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-ink-400'
              }`}
            >
              {d === 365 ? '1 year' : `${d}d`}
            </Link>
          ))}
          <a
            href={`/api/admin/export?days=${days}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-700 hover:border-ink-400"
          >
            <Download className="size-4" aria-hidden />
            CSV
          </a>
        </div>
      </div>

      {/* Tabs. Form submissions are kept behind their own tab rather than
          mixed into the overview: the overview holds no personal data, this
          holds names, numbers and addresses, and a visible boundary is the
          cheapest way to make that difference obvious to whoever is using it. */}
      <nav className="mt-8 flex gap-1 border-b border-ink-200" aria-label="Dashboard sections">
        <TabLink href={`/admin?days=${days}`} active={tab === 'overview'}>
          Overview
        </TabLink>
        <TabLink href={`/admin?days=${days}&tab=forms`} active={tab === 'forms'} count={formCount}>
          Form submissions
        </TabLink>
      </nav>

      {tab === 'forms' ? (
        <FormLeadsTab leads={formLeads} days={days} />
      ) : (
        <>
      {/* ── Totals ───────────────────────────────────────────────────────── */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Leads" value={totals.leads} hint="Unique visitors who took an action" />
        <Stat label="Call clicks" value={totals.callClicks} hint="Taps on a phone number — intent, not connected calls" icon={Phone} />
        <Stat label="Form submits" value={totals.formSubmits} hint="Completed request forms" icon={FileText} />
        <Stat label="Unattributed" value={`${directShare}%`} hint="No referrer, click id or tag — see note below" icon={HelpCircle} />
      </section>

      {/* ── Honesty note. This is load-bearing, not decoration. ──────────── */}
      <section className="mt-6">
        <div className="flex gap-3 rounded-[var(--radius-card)] border border-ink-200 bg-ink-50/60 p-4 text-sm leading-relaxed text-ink-700">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-ink-500" aria-hidden />
          <p>
            <strong className="text-ink-900">A call click is intent, not a connected call.</strong> It does
            not prove anyone answered or that it was not a wrong number. Confirming calls needs a tracked
            number with dynamic number insertion. And leads shown as unattributed are genuinely unknown —
            largely people who saw a post or an ad and typed the address later, which no tracking recovers.
            Treat social and AI numbers as a floor rather than a count.
          </p>
        </div>
      </section>

      {/* ── Trend ────────────────────────────────────────────────────────── */}
      {daily.length > 0 && (
        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold text-ink-950">Leads per day</h2>
          <div className="mt-4 flex h-32 items-end gap-0.5 rounded-[var(--radius-card)] border border-ink-100 bg-white p-4">
            {daily.map((d) => (
              <div
                key={d.day}
                title={`${d.day}: ${d.leads}`}
                style={{ height: `${Math.round((d.leads / peak) * 100)}%` }}
                className="min-h-[2px] flex-1 rounded-sm bg-gold-500/70 transition-colors hover:bg-gold-500"
              />
            ))}
          </div>
        </section>
      )}

      {/* ── By source ────────────────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-semibold text-ink-950">Where leads came from</h2>
        <Table
          head={['Source', 'Leads', 'Call clicks', 'Forms']}
          empty="No leads recorded in this period."
          rows={bySource.map((s) => [
            <span key="s" className="inline-flex items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${GROUP_STYLE[s.group] ?? GROUP_STYLE.direct}`}>
                {s.group}
              </span>
              {s.label}
            </span>,
            s.leads,
            s.callClicks,
            s.formSubmits,
          ])}
        />
      </section>

      {/* ── By page type ─────────────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-semibold text-ink-950">Which kind of page produced them</h2>
        <p className="mt-1.5 text-sm text-ink-600">
          The test of whether the city, model and gate-problem pages are earning their place.
        </p>
        <Table
          head={['Page type', 'Leads']}
          empty="No leads recorded in this period."
          rows={byType.map((t) => [t.label, t.leads])}
        />
      </section>

      {/* ── By page ──────────────────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-semibold text-ink-950">Top pages</h2>
        <Table
          head={['Page', 'Type', 'Leads']}
          empty="No leads recorded in this period."
          rows={byPage.map((p) => [
            <span key="p" className="font-mono text-xs text-ink-700">{p.path}</span>,
            p.typeLabel,
            p.leads,
          ])}
        />
      </section>

      {/* ── Recent ───────────────────────────────────────────────────────── */}
      <section className="mt-10 mb-4">
        <h2 className="font-display text-lg font-semibold text-ink-950">Most recent leads</h2>
        <Table
          head={['When', 'Source', 'Page', 'Actions']}
          empty="No leads recorded in this period."
          rows={recent.map((r) => [
            new Date(r.at).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
            <span key="s" title={`identified by: ${r.basis}`}>{r.sourceLabel}</span>,
            <span key="p" className="font-mono text-xs text-ink-700">{r.pagePath}</span>,
            r.actions.join(', '),
          ])}
        />
      </section>
        </>
      )}
    </main>
  )
}

function Stat({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string
  value: number | string
  hint: string
  icon?: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 text-sm font-medium text-ink-600">
        {Icon && <Icon className="size-4" />}
        {label}
      </div>
      <p className="mt-2 font-display text-3xl font-semibold tabular text-ink-950">{value}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{hint}</p>
    </div>
  )
}

function Table({
  head,
  rows,
  empty,
}: {
  head: string[]
  rows: React.ReactNode[][]
  empty: string
}) {
  if (rows.length === 0) {
    return (
      <p className="mt-4 rounded-[var(--radius-card)] border border-ink-100 bg-white p-6 text-sm text-ink-500">
        {empty}
      </p>
    )
  }
  return (
    <div className="mt-4 overflow-x-auto rounded-[var(--radius-card)] border border-ink-100 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-ink-100 text-left">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium text-ink-600">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-ink-50 last:border-0">
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-ink-800">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TabLink({
  href,
  active,
  count,
  children,
}: {
  href: string
  active: boolean
  count?: number
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`-mb-px inline-flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
        active
          ? 'border-gold-500 text-ink-950'
          : 'border-transparent text-ink-500 hover:border-ink-300 hover:text-ink-800'
      }`}
    >
      {children}
      {typeof count === 'number' && (
        <span
          className={`rounded-full px-2 py-0.5 text-xs tabular ${
            active ? 'bg-gold-500/15 text-gold-700' : 'bg-ink-100 text-ink-600'
          }`}
        >
          {count}
        </span>
      )}
    </Link>
  )
}

/**
 * Form submissions, straight from the database.
 *
 * ── WHAT THIS TAB IS FOR, AND WHAT THE OVERVIEW IS FOR ──────────────────────
 * The overview answers "which channel and which page produce leads". It is
 * built from the events collection, which deliberately stores no personal data
 * at all — no name, no number, no IP address.
 *
 * This answers a different question: who asked us to call them back. It is the
 * only part of the dashboard with names, phone numbers and addresses in it, and
 * that is the whole reason it sits behind its own tab rather than as extra
 * columns on the overview.
 *
 * Every row is a real person who typed their number in expecting a call. The
 * phone number is a tel: link and the email a mailto:, because the point of
 * looking at this screen is to contact them. `status` is shown so a lead can be
 * tracked rather than lost in a mailbox.
 *
 * ── WHY PHONE LEADS ARE NOT HERE ────────────────────────────────────────────
 * A call click leaves no name or number behind — nothing in a browser can
 * capture who dialled. Those are counted on the overview, and the empty state
 * below says so, because "0 submissions" on a day that produced eight calls
 * would otherwise read as a tracking failure.
 */
function FormLeadsTab({ leads, days }: { leads: FormLead[]; days: number }) {
  if (leads.length === 0) {
    return (
      <div className="mt-8 rounded-[var(--radius-card)] border border-ink-100 bg-white p-8 text-center">
        <FileText className="mx-auto mb-3 size-8 text-ink-300" aria-hidden />
        <p className="font-medium text-ink-900">No form submissions in the last {days} days</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
          Submissions appear here as soon as someone completes the request form. Phone leads never
          appear in this tab &mdash; a call click leaves no name or number behind, so those are
          counted on the Overview instead.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-600">
          {leads.length} submission{leads.length === 1 ? '' : 's'} in the last {days} days, newest
          first.
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-900 ring-1 ring-inset ring-amber-200">
          <AlertTriangle className="size-3.5" aria-hidden />
          Contains customer contact details
        </span>
      </div>

      <ul className="space-y-3">
        {leads.map((lead) => (
          <li
            key={lead.id}
            className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-ink-950">{lead.name}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <a
                    href={`tel:${lead.phone}`}
                    className="inline-flex items-center gap-1.5 font-medium text-ink-900 underline decoration-gold-400 underline-offset-2"
                  >
                    <Phone className="size-3.5 text-ink-400" aria-hidden />
                    {lead.phone}
                  </a>
                  {lead.email && (
                    <a
                      href={`mailto:${lead.email}`}
                      className="inline-flex items-center gap-1.5 text-ink-700 hover:text-ink-950"
                    >
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
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <span className="text-xs tabular text-ink-500">
                  {new Date(lead.at).toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </span>
                <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-ink-600">
                  {lead.status}
                </span>
              </div>
            </div>

            {lead.message && (
              <div className="mt-4 flex gap-2.5 rounded-lg bg-ink-50 p-3">
                <MessageSquare className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                <p className="text-sm leading-relaxed text-ink-800">{lead.message}</p>
              </div>
            )}

            {/* Where this person came from, classified the same way the event
                log is, so the two views cannot disagree about a channel. */}
            <dl className="mt-4 grid gap-x-6 gap-y-2 border-t border-ink-100 pt-3 text-xs sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink-400">Source</dt>
                <dd className="mt-0.5 text-ink-800">{lead.sourceLabel}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink-400">Submitted from</dt>
                <dd className="mt-0.5 break-all font-mono text-[0.6875rem] text-ink-700">
                  {lead.sourcePage ?? '—'}
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink-400">Landed on</dt>
                <dd className="mt-0.5 break-all font-mono text-[0.6875rem] text-ink-700">
                  {lead.landingPage ?? '—'}
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink-400">Campaign</dt>
                <dd className="mt-0.5 text-ink-700">
                  {lead.utmCampaign ?? (lead.gclid ? 'Google Ads click' : '—')}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}
