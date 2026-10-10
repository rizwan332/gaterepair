import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Minus } from 'lucide-react'
import type { DayRow } from '@/lib/lead-report'
import type { VisitorGeo } from '@/lib/visitor-context'

/**
 * Presentational pieces for /admin. Server components throughout: nothing here
 * needs the browser, so none of it ships JavaScript.
 */

// ── Formatting ───────────────────────────────────────────────────────────────

export function formatDateTime(date: Date, tz: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

export function formatTime(date: Date, tz: string) {
  return new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }).format(date)
}

/** "PKT"-style short name where the locale has one, otherwise "GMT+5". */
export function zoneName(tz: string, date = new Date()) {
  const part = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'short' })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName')
  return part?.value ?? tz
}

/** "Plano, TX, United States" from whatever parts are known. */
export function locationLabel(geo?: VisitorGeo) {
  if (!geo) return undefined
  const region = geo.countryCode === 'US' ? geo.regionCode?.replace(/^US-/, '') : geo.region
  const parts = [geo.city, region, geo.country].filter(Boolean)
  return parts.length ? parts.join(', ') : undefined
}

export function flag(code?: string) {
  if (!code || !/^[A-Za-z]{2}$/.test(code)) return ''
  return String.fromCodePoint(...[...code.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65))
}

const ACTION_LABEL: Record<string, string> = {
  call_click: 'Call',
  sms_click: 'Text',
  form_submit: 'Form',
  directions_click: 'Directions',
}
const ACTION_STYLE: Record<string, string> = {
  call_click: 'bg-gold-500/15 text-gold-700 ring-gold-500/30',
  sms_click: 'bg-blue-50 text-blue-800 ring-blue-200',
  form_submit: 'bg-success-500/10 text-success-600 ring-success-500/25',
  directions_click: 'bg-ink-100 text-ink-700 ring-ink-200',
}

/** One chip per action type, with "×3" when the person did it more than once. */
export function ActionChips({ actions, counts = {} }: { actions: string[]; counts?: Record<string, number> }) {
  return (
    <span className="flex flex-wrap gap-1">
      {actions.map((a) => (
        <span key={a} className={`rounded-md px-1.5 py-0.5 text-[0.6875rem] font-semibold tabular ring-1 ring-inset ${ACTION_STYLE[a] ?? ACTION_STYLE.directions_click}`}>
          {ACTION_LABEL[a] ?? a}
          {(counts[a] ?? 1) > 1 && <span className="ml-0.5 opacity-75">×{counts[a]}</span>}
        </span>
      ))}
    </span>
  )
}

export const GROUP_LABEL: Record<string, string> = {
  paid: 'Paid ads',
  'organic-search': 'Organic search',
  social: 'Social',
  ai: 'AI assistant',
  referral: 'Referral',
  direct: 'Direct / unknown',
}

export const GROUP_STYLE: Record<string, string> = {
  paid: 'bg-gold-500/15 text-gold-700 ring-gold-500/30',
  'organic-search': 'bg-success-500/10 text-success-600 ring-success-500/25',
  social: 'bg-blue-50 text-blue-800 ring-blue-200',
  ai: 'bg-purple-50 text-purple-800 ring-purple-200',
  referral: 'bg-ink-100 text-ink-700 ring-ink-200',
  direct: 'bg-ink-50 text-ink-500 ring-ink-200',
}

export function GroupPill({ group }: { group: string }) {
  return (
    <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold ring-1 ring-inset ${GROUP_STYLE[group] ?? GROUP_STYLE.direct}`}>
      {GROUP_LABEL[group] ?? group}
    </span>
  )
}

// ── KPI card ─────────────────────────────────────────────────────────────────

export function Kpi({
  label,
  value,
  previous,
  hint,
  icon: Icon,
}: {
  label: string
  value: number
  previous: number
  hint: string
  icon?: React.ComponentType<{ className?: string }>
}) {
  const delta = previous === 0 ? (value === 0 ? 0 : null) : Math.round(((value - previous) / previous) * 100)
  const tone =
    delta === null || delta > 0 ? 'text-success-600 bg-success-500/10' : delta < 0 ? 'text-red-700 bg-red-50' : 'text-ink-500 bg-ink-100'
  const DeltaIcon = delta === null || delta > 0 ? ArrowUpRight : delta < 0 ? ArrowDownRight : Minus

  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-600">
          {Icon && <Icon className="size-4 text-ink-400" />}
          {label}
        </span>
        <span className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold tabular ${tone}`} title={`Previous period: ${previous}`}>
          <DeltaIcon className="size-3.5" aria-hidden />
          {delta === null ? 'New' : `${Math.abs(delta)}%`}
        </span>
      </div>
      <p className="font-display text-3xl font-semibold tabular text-ink-950">{value.toLocaleString('en-US')}</p>
      <p className="text-xs leading-relaxed text-ink-500">
        {hint} · <span className="tabular">{previous}</span> previous period
      </p>
    </div>
  )
}

// ── Card shell ───────────────────────────────────────────────────────────────

export function Panel({
  title,
  subtitle,
  action,
  children,
  className = '',
}: {
  title: string
  subtitle?: string
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`min-w-0 rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)] ${className}`}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="font-display text-base font-semibold text-ink-950">{title}</h2>
          {subtitle && <p className="mt-0.5 text-xs text-ink-500">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}

// ── Horizontal bar list ──────────────────────────────────────────────────────

export function BarList({
  rows,
  empty = 'Nothing in this period.',
  barClass = 'bg-gold-500/25',
}: {
  rows: { key: string; label: React.ReactNode; value: number; detail?: React.ReactNode }[]
  empty?: string
  barClass?: string
}) {
  if (rows.length === 0) return <p className="py-6 text-center text-sm text-ink-500">{empty}</p>
  const max = Math.max(1, ...rows.map((r) => r.value))
  const total = rows.reduce((s, r) => s + r.value, 0)
  return (
    <ul className="flex flex-col gap-1.5">
      {rows.map((r) => (
        <li key={r.key} className="relative overflow-hidden rounded-md">
          <span className={`absolute inset-y-0 left-0 rounded-md ${barClass}`} style={{ width: `${(r.value / max) * 100}%` }} aria-hidden />
          <span className="relative flex items-center justify-between gap-3 px-2.5 py-1.5 text-sm">
            <span className="min-w-0 truncate text-ink-800">{r.label}</span>
            <span className="flex shrink-0 items-center gap-2 tabular">
              {r.detail && <span className="text-xs text-ink-500">{r.detail}</span>}
              <span className="font-semibold text-ink-950">{r.value}</span>
              <span className="w-9 text-right text-xs text-ink-500">{total ? Math.round((r.value / total) * 100) : 0}%</span>
            </span>
          </span>
        </li>
      ))}
    </ul>
  )
}

// ── Trend chart ──────────────────────────────────────────────────────────────

const SERIES = [
  { key: 'calls', label: 'Calls', fill: 'var(--color-gold-500)' },
  { key: 'sms', label: 'Texts', fill: '#3b82f6' },
  { key: 'forms', label: 'Forms', fill: 'var(--color-success-500)' },
] as const

/**
 * Stacked daily bars of actions, with the deduplicated lead count in each
 * day's tooltip. Plain SVG drawn on the server: one scale for bars, grid and
 * labels, so the axis can never disagree with the marks.
 */
export function TrendChart({ days }: { days: DayRow[] }) {
  const W = 760
  const H = 220
  const pad = { top: 12, right: 8, bottom: 26, left: 30 }
  const innerW = W - pad.left - pad.right
  const innerH = H - pad.top - pad.bottom

  const stackMax = Math.max(1, ...days.map((d) => d.calls + d.sms + d.forms))
  const step = stackMax <= 4 ? 1 : stackMax <= 10 ? 2 : stackMax <= 25 ? 5 : Math.ceil(stackMax / 5 / 5) * 5
  const top = Math.ceil(stackMax / step) * step
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step)

  const slot = innerW / Math.max(1, days.length)
  const barW = Math.max(2, Math.min(28, slot * 0.7))
  const y = (v: number) => pad.top + innerH - (v / top) * innerH
  const labelEvery = Math.max(1, Math.ceil(days.length / 8))

  const short = (day: string) => {
    const [, m, d] = day.split('-').map(Number)
    return new Date(Date.UTC(2000, m - 1, d)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-4 text-xs text-ink-600">
        {SERIES.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm" style={{ background: s.fill }} aria-hidden />
            {s.label}
          </span>
        ))}
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full min-w-[480px]" role="img" aria-label="Lead actions per day">
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pad.left} x2={W - pad.right} y1={y(t)} y2={y(t)} stroke="var(--color-ink-100)" strokeWidth={1} />
              <text x={pad.left - 6} y={y(t) + 3.5} textAnchor="end" fontSize={10} fill="var(--color-ink-500)">
                {t}
              </text>
            </g>
          ))}
          {days.map((d, i) => {
            const x = pad.left + i * slot + (slot - barW) / 2
            let acc = 0
            return (
              <g key={d.day}>
                <title>{`${short(d.day)}: ${d.leads} lead${d.leads === 1 ? '' : 's'} · ${d.calls} calls · ${d.sms} texts · ${d.forms} forms`}</title>
                <rect x={pad.left + i * slot} y={pad.top} width={slot} height={innerH} fill="transparent" />
                {SERIES.map((s) => {
                  const v = d[s.key]
                  if (!v) return null
                  const y0 = y(acc)
                  acc += v
                  const y1 = y(acc)
                  return <rect key={s.key} x={x} y={y1} width={barW} height={Math.max(1, y0 - y1)} fill={s.fill} rx={1.5} />
                })}
                {i % labelEvery === 0 && (
                  <text x={pad.left + i * slot + slot / 2} y={H - 8} textAnchor="middle" fontSize={10} fill="var(--color-ink-500)">
                    {short(d.day)}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

// ── Pagination ───────────────────────────────────────────────────────────────

export function Pagination({
  page,
  pages,
  total,
  pageSize,
  href,
}: {
  page: number
  pages: number
  total: number
  pageSize: number
  href: (page: number) => string
}) {
  if (total === 0) return null
  const from = (page - 1) * pageSize + 1
  const to = Math.min(total, page * pageSize)

  // 1 … 4 5 [6] 7 8 … 20
  const nums = new Set([1, pages, page - 1, page, page + 1].filter((n) => n >= 1 && n <= pages))
  const list = [...nums].sort((a, b) => a - b)

  const base = 'inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm tabular'
  return (
    <nav className="mt-4 flex flex-wrap items-center justify-between gap-3" aria-label="Pagination">
      <p className="text-sm text-ink-600">
        Showing <span className="font-semibold tabular text-ink-900">{from}–{to}</span> of{' '}
        <span className="font-semibold tabular text-ink-900">{total.toLocaleString('en-US')}</span>
      </p>
      <div className="flex items-center gap-1">
        {page > 1 ? (
          <Link href={href(page - 1)} className={`${base} border border-ink-200 bg-white text-ink-700 hover:border-ink-400`} aria-label="Previous page">
            <ChevronLeft className="size-4" />
          </Link>
        ) : (
          <span className={`${base} border border-ink-100 text-ink-300`} aria-hidden>
            <ChevronLeft className="size-4" />
          </span>
        )}
        {list.map((n, i) => (
          <span key={n} className="flex items-center gap-1">
            {i > 0 && n - list[i - 1] > 1 && <span className="px-1 text-ink-400">…</span>}
            <Link
              href={href(n)}
              aria-current={n === page ? 'page' : undefined}
              className={`${base} ${n === page ? 'bg-ink-900 font-semibold text-white' : 'border border-ink-200 bg-white text-ink-700 hover:border-ink-400'}`}
            >
              {n}
            </Link>
          </span>
        ))}
        {page < pages ? (
          <Link href={href(page + 1)} className={`${base} border border-ink-200 bg-white text-ink-700 hover:border-ink-400`} aria-label="Next page">
            <ChevronRight className="size-4" />
          </Link>
        ) : (
          <span className={`${base} border border-ink-100 text-ink-300`} aria-hidden>
            <ChevronRight className="size-4" />
          </span>
        )}
      </div>
    </nav>
  )
}

// ── Filter chip ──────────────────────────────────────────────────────────────

export function Chip({ href, active, children, count }: { href: string; active: boolean; children: React.ReactNode; count?: number }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'true' : undefined}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors ${
        active ? 'bg-ink-900 text-white ring-ink-900' : 'bg-white text-ink-700 ring-ink-200 hover:ring-ink-400'
      }`}
    >
      {children}
      {typeof count === 'number' && <span className={`tabular ${active ? 'text-white/70' : 'text-ink-400'}`}>{count}</span>}
    </Link>
  )
}

// ── When + where cell, shared by both lists ──────────────────────────────────

export function WhenWhere({ at, viewerTz, geo }: { at: Date; viewerTz: string; geo?: VisitorGeo }) {
  const theirs = geo?.timezone && geo.timezone !== viewerTz ? geo.timezone : undefined
  return (
    <div className="flex flex-col gap-0.5">
      <span className="whitespace-nowrap font-medium tabular text-ink-900">{formatDateTime(at, viewerTz)}</span>
      {theirs && (
        <span className="whitespace-nowrap text-xs tabular text-ink-500" title={theirs}>
          Their time: {formatTime(at, theirs)}
        </span>
      )}
    </div>
  )
}

export function Location({ geo, ip }: { geo?: VisitorGeo; ip?: string }) {
  const label = locationLabel(geo)
  return (
    <div className="flex min-w-0 flex-col gap-0.5">
      <span className="text-ink-800">
        {label ? (
          <>
            {flag(geo?.countryCode)} {label}
          </>
        ) : (
          <span className="text-ink-400">Unknown</span>
        )}
      </span>
      {ip && (
        <a
          href={`https://ipinfo.io/${encodeURIComponent(ip)}`}
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit break-all font-mono text-[0.6875rem] text-ink-500 underline decoration-ink-200 underline-offset-2 hover:text-ink-800"
          title="Look up this IP"
        >
          {ip}
        </a>
      )}
    </div>
  )
}

export function Device({ device, os, browser }: { device?: string; os?: string; browser?: string }) {
  if (!device) return <span className="text-ink-400">—</span>
  const name = device.charAt(0).toUpperCase() + device.slice(1)
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-ink-800">{name}</span>
      {(os || browser) && <span className="text-xs text-ink-500">{[os, browser].filter(Boolean).join(' · ')}</span>}
    </div>
  )
}
