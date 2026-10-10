import { connectToDatabase } from './mongodb'
import { EventModel } from '../models/Event'
import { LeadModel } from '../models/Lead'
import { SOURCE_LABEL, SOURCE_GROUP, classifyLead, type LeadSource, type SourceGroup } from './lead-source'
import { PAGE_TYPE_LABEL, type PageType } from './page-type'
import type { VisitorGeo } from './visitor-context'

/**
 * The reports behind /admin.
 *
 * ── DEDUPLICATION IS THE WHOLE POINT ────────────────────────────────────────
 * The events collection is a raw log: someone with a gate stuck open taps the
 * call button, gets voicemail, taps again, then fills the form. Three rows,
 * one lead. Counting rows would overstate every channel, and it would
 * overstate the busiest channels most, which is exactly the direction that
 * leads to spending money in the wrong place.
 *
 * So a LEAD here is one visitor in one day. Their source is taken from their
 * first action of that day, because that is the thing that actually brought
 * them; the page credited is likewise the page they first acted on. Later
 * actions are counted as actions but never as additional leads.
 *
 * ── WHOSE "DAY" ─────────────────────────────────────────────────────────────
 * Days are cut in the time zone the dashboard is being viewed in (the `tz` on
 * the range), not UTC. Netlify's servers run on UTC, so before 10 Oct 2026 a
 * Dallas call at 8 pm landed on the next day's bar. Mongo's $dateToString
 * takes an IANA zone, so the cut happens in the database.
 *
 * ── WHAT A "LEAD" HONESTLY MEANS ────────────────────────────────────────────
 * A call click is intent, not a conversation. It does not prove the call
 * connected, that anybody answered, or that it was not a wrong number. The
 * dashboard says "call clicks" rather than "calls" throughout, deliberately.
 */

export type DateRange = { from: Date; to: Date; tz: string }

export const rangeForDays = (days: number, tz = 'America/Chicago'): DateRange => {
  const to = new Date()
  const from = new Date(to.getTime() - days * 24 * 60 * 60 * 1000)
  return { from, to, tz }
}

/** The equally long period immediately before `range`, for "vs previous". */
export const previousRange = (range: DateRange): DateRange => {
  const span = range.to.getTime() - range.from.getTime()
  return { from: new Date(range.from.getTime() - span), to: range.from, tz: range.tz }
}

export type ActionType = 'call_click' | 'sms_click' | 'form_submit' | 'directions_click'

export type LeadFilters = {
  group?: SourceGroup
  action?: ActionType
}

const countOf = (type: ActionType) => ({
  $sum: { $size: { $filter: { input: '$types', cond: { $eq: ['$$this', type] } } } },
})

/**
 * One document per (visitor, day), carrying their first action.
 *
 * Done in the aggregation pipeline rather than in JS because the raw log grows
 * without bound and pulling a month of it into memory to group it would stop
 * working at exactly the point the business starts succeeding.
 */
const dedupePipeline = (range: DateRange, filters: LeadFilters = {}) => [
  { $match: { createdAt: { $gte: range.from, $lte: range.to }, device: { $ne: 'bot' } } },
  { $sort: { createdAt: 1 as const } },
  {
    $group: {
      _id: {
        visitor: '$visitorId',
        day: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt', timezone: range.tz } },
      },
      firstAt: { $first: '$createdAt' },
      lastAt: { $last: '$createdAt' },
      source: { $first: '$source' },
      sourceGroup: { $first: '$sourceGroup' },
      sourceBasis: { $first: '$sourceBasis' },
      pagePath: { $first: '$pagePath' },
      pageType: { $first: '$pageType' },
      pageSubject: { $first: '$pageSubject' },
      landingPage: { $first: '$landingPage' },
      utmCampaign: { $first: '$utmCampaign' },
      gclid: { $first: '$gclid' },
      ip: { $first: '$ip' },
      geo: { $first: '$geo' },
      device: { $first: '$device' },
      browser: { $first: '$browser' },
      os: { $first: '$os' },
      types: { $push: '$type' },
    },
  },
  // Filters apply to the deduplicated lead, so "Google Ads leads that called"
  // means people, not rows.
  ...(filters.group ? [{ $match: { sourceGroup: filters.group } }] : []),
  ...(filters.action ? [{ $match: { types: filters.action } }] : []),
]

// ── Totals ───────────────────────────────────────────────────────────────────

export type Totals = {
  leads: number
  callClicks: number
  smsClicks: number
  formSubmits: number
  /** Leads we could not attribute to any channel — reported, not hidden. */
  direct: number
  paid: number
}

export async function getTotals(range: DateRange): Promise<Totals> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    {
      $group: {
        _id: null,
        leads: { $sum: 1 },
        direct: { $sum: { $cond: [{ $eq: ['$source', 'direct'] }, 1, 0] } },
        paid: { $sum: { $cond: [{ $eq: ['$sourceGroup', 'paid'] }, 1, 0] } },
        callClicks: countOf('call_click'),
        smsClicks: countOf('sms_click'),
        formSubmits: countOf('form_submit'),
      },
    },
  ])

  const r = rows[0]
  return {
    leads: r?.leads ?? 0,
    callClicks: r?.callClicks ?? 0,
    smsClicks: r?.smsClicks ?? 0,
    formSubmits: r?.formSubmits ?? 0,
    direct: r?.direct ?? 0,
    paid: r?.paid ?? 0,
  }
}

// ── Breakdowns ───────────────────────────────────────────────────────────────

export type SourceRow = {
  source: LeadSource
  label: string
  group: SourceGroup
  leads: number
  callClicks: number
  smsClicks: number
  formSubmits: number
  /** Leads whose classification rests on no signal at all. */
  unattributable: number
}

export async function getBySource(range: DateRange): Promise<SourceRow[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    {
      $group: {
        _id: '$source',
        leads: { $sum: 1 },
        unattributable: { $sum: { $cond: [{ $eq: ['$sourceBasis', 'none'] }, 1, 0] } },
        callClicks: countOf('call_click'),
        smsClicks: countOf('sms_click'),
        formSubmits: countOf('form_submit'),
      },
    },
    { $sort: { leads: -1 as const } },
  ])

  return rows.map((r) => {
    const source = (r._id ?? 'direct') as LeadSource
    return {
      source,
      label: SOURCE_LABEL[source] ?? source,
      group: SOURCE_GROUP[source] ?? 'direct',
      leads: r.leads,
      callClicks: r.callClicks,
      smsClicks: r.smsClicks,
      formSubmits: r.formSubmits,
      unattributable: r.unattributable,
    }
  })
}

export type PageRow = {
  path: string
  pageType: PageType
  typeLabel: string
  subject: string
  leads: number
}

/**
 * Which pages produce leads — the report that tests the city, model and
 * symptom pages against what people actually do.
 */
export async function getByPage(range: DateRange, limit = 10): Promise<PageRow[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    {
      $group: {
        _id: '$pagePath',
        leads: { $sum: 1 },
        pageType: { $first: '$pageType' },
        pageSubject: { $first: '$pageSubject' },
      },
    },
    { $sort: { leads: -1 as const } },
    { $limit: limit },
  ])

  return rows.map((r) => {
    const pageType = (r.pageType ?? 'other') as PageType
    return {
      path: r._id ?? '/',
      pageType,
      typeLabel: PAGE_TYPE_LABEL[pageType] ?? 'Other page',
      subject: r.pageSubject ?? '',
      leads: r.leads,
    }
  })
}

export async function getByPageType(range: DateRange): Promise<{ type: PageType; label: string; leads: number }[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    { $group: { _id: '$pageType', leads: { $sum: 1 } } },
    { $sort: { leads: -1 as const } },
  ])
  return rows.map((r) => {
    const type = (r._id ?? 'other') as PageType
    return { type, label: PAGE_TYPE_LABEL[type] ?? 'Other page', leads: r.leads }
  })
}

export type LocationRow = { label: string; countryCode?: string; leads: number }

/**
 * Leads by country and by city. Rows recorded before location capture began
 * are grouped as "Unknown" rather than dropped, so the totals still add up.
 */
export async function getByLocation(range: DateRange, limit = 8): Promise<{ countries: LocationRow[]; cities: LocationRow[] }> {
  await connectToDatabase()
  const [result] = await EventModel.aggregate([
    ...dedupePipeline(range),
    {
      $facet: {
        countries: [
          { $group: { _id: { $ifNull: ['$geo.country', 'Unknown'] }, code: { $first: '$geo.countryCode' }, leads: { $sum: 1 } } },
          { $sort: { leads: -1 as const } },
          { $limit: limit },
        ],
        cities: [
          { $match: { 'geo.city': { $exists: true, $ne: null } } },
          {
            $group: {
              _id: { city: '$geo.city', region: '$geo.regionCode', country: '$geo.countryCode' },
              leads: { $sum: 1 },
            },
          },
          { $sort: { leads: -1 as const } },
          { $limit: limit },
        ],
      },
    },
  ])

  return {
    countries: (result?.countries ?? []).map((r: { _id: string; code?: string; leads: number }) => ({
      label: r._id,
      countryCode: r.code,
      leads: r.leads,
    })),
    cities: (result?.cities ?? []).map(
      (r: { _id: { city: string; region?: string; country?: string }; leads: number }) => ({
        label: [r._id.city, r._id.region, r._id.country && r._id.country !== 'US' ? r._id.country : undefined]
          .filter(Boolean)
          .join(', '),
        countryCode: r._id.country,
        leads: r.leads,
      }),
    ),
  }
}

export async function getByDevice(range: DateRange): Promise<{ device: string; leads: number }[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    { $group: { _id: { $ifNull: ['$device', 'unknown'] }, leads: { $sum: 1 } } },
    { $sort: { leads: -1 as const } },
  ])
  return rows.map((r) => ({ device: r._id as string, leads: r.leads }))
}

// ── Trend ────────────────────────────────────────────────────────────────────

export type DayRow = { day: string; leads: number; calls: number; sms: number; forms: number }

/**
 * Daily counts with every day present, including days with nothing — a chart
 * that silently skips empty days makes a quiet week look like a busy one.
 */
export async function getDaily(range: DateRange): Promise<DayRow[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    {
      $group: {
        _id: '$_id.day',
        leads: { $sum: 1 },
        calls: countOf('call_click'),
        sms: countOf('sms_click'),
        forms: countOf('form_submit'),
      },
    },
  ])
  const byDay = new Map(rows.map((r) => [r._id as string, r]))

  const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: range.tz, year: 'numeric', month: '2-digit', day: '2-digit' })
  const days: DayRow[] = []
  const seen = new Set<string>()
  for (let t = range.from.getTime(); t <= range.to.getTime() + 1; t += 60 * 60 * 1000) {
    const day = fmt.format(new Date(t))
    if (seen.has(day)) continue
    seen.add(day)
    const r = byDay.get(day)
    days.push({ day, leads: r?.leads ?? 0, calls: r?.calls ?? 0, sms: r?.sms ?? 0, forms: r?.forms ?? 0 })
  }
  return days
}

// ── Lead list ────────────────────────────────────────────────────────────────

export type RecentLead = {
  at: Date
  lastAt: Date
  source: string
  sourceLabel: string
  group: SourceGroup
  basis: string
  pagePath: string
  pageTypeLabel: string
  landingPage?: string
  campaign?: string
  actions: string[]
  /** How many times each action happened, e.g. { call_click: 3 }. */
  actionCounts: Record<string, number>
  ip?: string
  geo?: VisitorGeo
  device?: string
  browser?: string
  os?: string
}

function toRecent(r: Record<string, unknown>): RecentLead {
  const source = ((r.source as string) ?? 'direct') as LeadSource
  const pageType = ((r.pageType as string) ?? 'other') as PageType
  return {
    at: r.firstAt as Date,
    lastAt: r.lastAt as Date,
    source,
    sourceLabel: SOURCE_LABEL[source] ?? source,
    group: SOURCE_GROUP[source] ?? 'direct',
    basis: (r.sourceBasis as string) ?? 'none',
    pagePath: (r.pagePath as string) ?? '/',
    pageTypeLabel: PAGE_TYPE_LABEL[pageType] ?? 'Other page',
    landingPage: r.landingPage as string | undefined,
    campaign: (r.utmCampaign as string | undefined) ?? (r.gclid ? 'Google Ads click' : undefined),
    actions: Array.from(new Set(r.types as string[])),
    actionCounts: (r.types as string[]).reduce<Record<string, number>>((acc, t) => {
      acc[t] = (acc[t] ?? 0) + 1
      return acc
    }, {}),
    ip: r.ip as string | undefined,
    geo: r.geo as VisitorGeo | undefined,
    device: r.device as string | undefined,
    browser: r.browser as string | undefined,
    os: r.os as string | undefined,
  }
}

/** Every lead, newest first. Used by the CSV export. */
export async function getRecent(range: DateRange, limit = 100, filters: LeadFilters = {}): Promise<RecentLead[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range, filters),
    { $sort: { firstAt: -1 as const } },
    { $limit: limit },
  ])
  return rows.map(toRecent)
}

export type Page<T> = { rows: T[]; total: number; page: number; pageSize: number; pages: number }

const pageMeta = (total: number, page: number, pageSize: number) => ({
  total,
  page,
  pageSize,
  pages: Math.max(1, Math.ceil(total / pageSize)),
})

export async function getLeadsPage(
  range: DateRange,
  page: number,
  pageSize: number,
  filters: LeadFilters = {},
): Promise<Page<RecentLead>> {
  await connectToDatabase()
  const [result] = await EventModel.aggregate([
    ...dedupePipeline(range, filters),
    {
      $facet: {
        rows: [{ $sort: { firstAt: -1 as const } }, { $skip: (page - 1) * pageSize }, { $limit: pageSize }],
        total: [{ $count: 'n' }],
      },
    },
  ])
  const total = result?.total?.[0]?.n ?? 0
  return { rows: (result?.rows ?? []).map(toRecent), ...pageMeta(total, page, pageSize) }
}

// ── Form submissions ─────────────────────────────────────────────────────────

/**
 * Form submissions, with the contact details the event log deliberately lacks.
 * Somebody filled a form and asked to be called back, so their name and number
 * are the point of the record.
 */
export const LEAD_STATUSES = ['new', 'contacted', 'booked', 'closed', 'lost'] as const
export type LeadStatus = (typeof LEAD_STATUSES)[number]

export type FormLead = {
  id: string
  at: Date
  name: string
  phone: string
  email?: string
  city?: string
  address?: string
  message?: string
  status: LeadStatus
  sourcePage?: string
  landingPage?: string
  referrer?: string
  gclid?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  /** Classified the same way the event log is, so both views agree. */
  source: string
  sourceLabel: string
  group: SourceGroup
  ip?: string
  geo?: VisitorGeo
  device?: string
  browser?: string
  os?: string
}

export type FormFilters = { status?: LeadStatus; q?: string }

function formQuery(range: DateRange, filters: FormFilters) {
  const query: Record<string, unknown> = { createdAt: { $gte: range.from, $lte: range.to } }
  if (filters.status) query.status = filters.status
  if (filters.q) {
    const rx = new RegExp(filters.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
    query.$or = [{ name: rx }, { phone: rx }, { email: rx }, { address: rx }, { city: rx }, { message: rx }]
  }
  return query
}

function toFormLead(r: Record<string, unknown>): FormLead {
  const classification = classifyLead({
    params: { gclid: r.gclid as string | undefined },
    referrer: r.referrer as string | undefined,
    utmSource: r.utmSource as string | undefined,
    utmMedium: r.utmMedium as string | undefined,
  })
  return {
    id: String(r._id),
    at: r.createdAt as Date,
    name: (r.name as string) ?? '',
    phone: (r.phone as string) ?? '',
    email: r.email as string | undefined,
    city: r.city as string | undefined,
    address: r.address as string | undefined,
    message: r.message as string | undefined,
    status: ((r.status as string) ?? 'new') as LeadStatus,
    sourcePage: r.sourcePage as string | undefined,
    landingPage: r.landingPage as string | undefined,
    referrer: r.referrer as string | undefined,
    gclid: r.gclid as string | undefined,
    utmSource: r.utmSource as string | undefined,
    utmMedium: r.utmMedium as string | undefined,
    utmCampaign: r.utmCampaign as string | undefined,
    source: classification.source,
    sourceLabel: classification.label,
    group: classification.group,
    ip: r.ip as string | undefined,
    geo: r.geo as VisitorGeo | undefined,
    device: r.device as string | undefined,
    browser: r.browser as string | undefined,
    os: r.os as string | undefined,
  }
}

export async function getFormLeadsPage(
  range: DateRange,
  page: number,
  pageSize: number,
  filters: FormFilters = {},
): Promise<Page<FormLead>> {
  await connectToDatabase()
  const query = formQuery(range, filters)
  const [rows, total] = await Promise.all([
    LeadModel.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .lean(),
    LeadModel.countDocuments(query),
  ])
  return { rows: (rows as Record<string, unknown>[]).map(toFormLead), ...pageMeta(total, page, pageSize) }
}

/** Submissions per status in the period, for the status filter chips. */
export async function countFormLeadsByStatus(range: DateRange): Promise<Record<LeadStatus | 'all', number>> {
  await connectToDatabase()
  const rows = await LeadModel.aggregate([
    { $match: { createdAt: { $gte: range.from, $lte: range.to } } },
    { $group: { _id: '$status', n: { $sum: 1 } } },
  ])
  const out = { all: 0, new: 0, contacted: 0, booked: 0, closed: 0, lost: 0 }
  for (const r of rows) {
    const key = (r._id ?? 'new') as LeadStatus
    if (key in out) out[key] += r.n
    out.all += r.n
  }
  return out
}

export async function setFormLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
  if (!LEAD_STATUSES.includes(status) || !/^[a-f0-9]{24}$/i.test(id)) return false
  await connectToDatabase()
  const res = await LeadModel.updateOne({ _id: id }, { $set: { status } })
  return res.matchedCount === 1
}
