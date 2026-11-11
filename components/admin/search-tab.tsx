import { Eye, FileText, MousePointerClick, Phone, Users } from 'lucide-react'
import { getBySource, type DateRange } from '@/lib/lead-report'
import { getCityIndexStatus, getSearchReport, gscConfigured, type GscRow } from '@/lib/search-console'
import { Kpi, Panel } from '@/components/admin/ui'

const percent = (n: number) => `${(n * 100).toFixed(2)}%`
const pathOf = (url: string) => url.replace(/^https?:\/\/[^/]+/, '') || '/'

function Notice({ children }: { children: React.ReactNode }) {
  return <p className="mt-6 rounded-[var(--radius-card)] border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">{children}</p>
}

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  if (rows.length === 0) return <p className="text-sm text-ink-500">Nothing in this period.</p>
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead>
          <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-500">
            {head.map((h) => (
              <th key={h} scope="col" className="py-2 pr-4 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr key={i} className="border-b border-ink-50 align-top">
              {cells.map((c, j) => (
                <td key={j} className={`py-2 pr-4 text-ink-800 ${j === 0 ? 'break-words' : 'tabular'}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const metrics = (r: GscRow) => [r.clicks, r.impressions, percent(r.ctr), r.position.toFixed(1)]
const METRIC_HEAD = ['Clicks', 'Impressions', 'CTR', 'Position']

async function organicLeads(from: string, to: string, tz: string) {
  // Search Console days run on Pacific time, so lead counts use the same days.
  const range: DateRange = { from: new Date(`${from}T00:00:00-08:00`), to: new Date(`${to}T23:59:59-08:00`), tz }
  const rows = (await getBySource(range)).filter((r) => r.group === 'organic-search')
  const sum = (key: 'leads' | 'callClicks' | 'formSubmits') => rows.reduce((n, r) => n + r[key], 0)
  return { leads: sum('leads'), calls: sum('callClicks'), forms: sum('formSubmits') }
}

export async function SearchTab({ tz }: { tz: string }) {
  if (!gscConfigured()) {
    return <Notice>Search Console is not connected. Add GSC_SITE_URL, GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY to the Netlify environment.</Notice>
  }

  const [reportResult, citiesResult] = await Promise.allSettled([getSearchReport(), getCityIndexStatus()])
  if (reportResult.status === 'rejected') {
    console.error('Search Console report failed', reportResult.reason)
    return <Notice>Google did not return the Search Console report. Reload in a few minutes. If it keeps failing, check the service account still has access to the property.</Notice>
  }

  const r = reportResult.value
  const { current, previous } = r.windows
  // The Search Console figures are still useful if the lead database is down.
  const [leads, leadsBefore] = await Promise.all([
    organicLeads(current.start, current.end, tz).catch(() => null),
    organicLeads(previous.start, previous.end, tz).catch(() => null),
  ])
  const cities = citiesResult.status === 'fulfilled' ? citiesResult.value : null
  if (citiesResult.status === 'rejected') console.error('URL inspection failed', citiesResult.reason)

  return (
    <div className="mt-6 flex flex-col gap-5">
      <p className="text-sm text-ink-600">
        Measured by Google: {current.start} to {current.end}, compared with {previous.start} to {previous.end}. This tab always uses these 28 days. Updates every 6 hours.
      </p>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi label="Organic clicks" value={r.totals.clicks} previous={r.previous.clicks} hint="Clicks from Google Search" icon={MousePointerClick} />
        <Kpi label="Impressions" value={r.totals.impressions} previous={r.previous.impressions} hint="Times shown in Google Search" icon={Eye} />
        {leads && leadsBefore ? (
          <>
            <Kpi label="Organic leads" value={leads.leads} previous={leadsBefore.leads} hint="Unique people per day" icon={Users} />
            <Kpi label="Organic call taps" value={leads.calls} previous={leadsBefore.calls} hint="Taps, not connected calls" icon={Phone} />
            <Kpi label="Organic forms" value={leads.forms} previous={leadsBefore.forms} hint="Completed request forms" icon={FileText} />
          </>
        ) : (
          <p className="text-sm text-ink-500 sm:col-span-2 lg:col-span-3">Lead counts are unavailable right now.</p>
        )}
      </section>

      <Panel title="Click-through and position">
        <p className="text-sm text-ink-800">
          CTR <strong className="tabular">{percent(r.totals.ctr)}</strong> (was <span className="tabular">{percent(r.previous.ctr)}</span>) · Average position{' '}
          <strong className="tabular">{r.totals.position.toFixed(1)}</strong> (was <span className="tabular">{r.previous.position.toFixed(1)}</span>; lower is better)
        </p>
      </Panel>

      <Panel title="Keywords in positions 4 to 20" subtitle="The closest wins, most impressions first">
        <Table head={['Search', 'Page', ...METRIC_HEAD]} rows={r.opportunities.map((o) => [o.keys[0], pathOf(o.keys[1]), ...metrics(o)])} />
      </Panel>

      <Panel title="Priority city pages in Google" subtitle={cities ? `${cities.filter((c) => c.indexed).length} of ${cities.length} indexed` : undefined}>
        {cities ? (
          <Table
            head={['Page', 'Status', 'Last crawled', 'Google picked instead']}
            rows={cities.map((c) => [
              c.path,
              c.state,
              c.lastCrawl?.slice(0, 10) ?? 'Never',
              // Only filled when Google disagrees with our canonical. Without it,
              // a "Duplicate, Google chose different canonical" row says nothing
              // actionable — see CityIndexStatus in lib/search-console.ts.
              c.googleCanonical?.replace(/^https?:\/\/[^/]+/, '') || '—',
            ])}
          />
        ) : (
          <p className="text-sm text-ink-500">Google did not return the index check. Reload in a few minutes.</p>
        )}
      </Panel>

      <Panel title="Shown often, clicked rarely" subtitle="100+ impressions and CTR below the site average. Title and description rewrites start here.">
        <Table head={['Page', ...METRIC_HEAD]} rows={r.lowCtr.map((p) => [pathOf(p.keys[0]), ...metrics(p)])} />
      </Panel>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Top searches">
          <Table head={['Search', ...METRIC_HEAD]} rows={r.topQueries.map((q) => [q.keys[0], ...metrics(q)])} />
        </Panel>
        <Panel title="Top pages">
          <Table head={['Page', ...METRIC_HEAD]} rows={r.topPages.map((p) => [pathOf(p.keys[0]), ...metrics(p)])} />
        </Panel>
      </div>
    </div>
  )
}
