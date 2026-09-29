import { connectToDatabase } from './mongodb'
import { EventModel } from '../models/Event'
import { LeadModel } from '../models/Lead'
import { SOURCE_LABEL, SOURCE_GROUP, type LeadSource, type SourceGroup } from './lead-source'
import { PAGE_TYPE_LABEL, type PageType } from './page-type'

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
 * ── WHAT A "LEAD" HONESTLY MEANS ────────────────────────────────────────────
 * A call click is intent, not a conversation. It does not prove the call
 * connected, that anybody answered, or that it was not a wrong number. The
 * dashboard says "call clicks" rather than "calls" throughout, deliberately.
 * Turning these into verified calls needs a tracked number with dynamic number
 * insertion, which is a provider decision rather than a code one.
 */

export type DateRange = { from: Date; to: Date }

export const rangeForDays = (days: number): DateRange => {
  const to = new Date()
  const from = new Date(to.getTime() - days * 24 * 60 * 60 * 1000)
  return { from, to }
}

export type SourceRow = {
  source: LeadSource
  label: string
  group: SourceGroup
  leads: number
  callClicks: number
  formSubmits: number
  /** Share of this source's leads whose classification rests on a guess. */
  unattributable: number
}

export type PageRow = {
  path: string
  pageType: PageType
  typeLabel: string
  subject: string
  leads: number
}

export type Totals = {
  leads: number
  callClicks: number
  smsClicks: number
  formSubmits: number
  /** Leads we could not attribute to any channel — reported, not hidden. */
  direct: number
}

/**
 * One document per (visitor, day), carrying their first action.
 *
 * Done in the aggregation pipeline rather than in JS because the raw log grows
 * without bound and pulling a month of it into memory to group it would stop
 * working at exactly the point the business starts succeeding.
 */
const dedupePipeline = (range: DateRange) => [
  { $match: { createdAt: { $gte: range.from, $lte: range.to } } },
  { $sort: { createdAt: 1 as const } },
  {
    $group: {
      _id: {
        visitor: '$visitorId',
        day: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
      },
      firstAt: { $first: '$createdAt' },
      source: { $first: '$source' },
      sourceGroup: { $first: '$sourceGroup' },
      sourceBasis: { $first: '$sourceBasis' },
      pagePath: { $first: '$pagePath' },
      pageType: { $first: '$pageType' },
      pageSubject: { $first: '$pageSubject' },
      landingPage: { $first: '$landingPage' },
      types: { $push: '$type' },
    },
  },
]

export async function getTotals(range: DateRange): Promise<Totals> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    {
      $group: {
        _id: null,
        leads: { $sum: 1 },
        direct: { $sum: { $cond: [{ $eq: ['$source', 'direct'] }, 1, 0] } },
        callClicks: {
          $sum: { $size: { $filter: { input: '$types', cond: { $eq: ['$$this', 'call_click'] } } } },
        },
        smsClicks: {
          $sum: { $size: { $filter: { input: '$types', cond: { $eq: ['$$this', 'sms_click'] } } } },
        },
        formSubmits: {
          $sum: { $size: { $filter: { input: '$types', cond: { $eq: ['$$this', 'form_submit'] } } } },
        },
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
  }
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
        callClicks: {
          $sum: { $size: { $filter: { input: '$types', cond: { $eq: ['$$this', 'call_click'] } } } },
        },
        formSubmits: {
          $sum: { $size: { $filter: { input: '$types', cond: { $eq: ['$$this', 'form_submit'] } } } },
        },
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
      formSubmits: r.formSubmits,
      unattributable: r.unattributable,
    }
  })
}

/**
 * Which pages produce leads.
 *
 * This is the report that justifies the content work: 96 city pages, 43 model
 * pages and 20 symptom pages were built on an argument about what people
 * search for, and this is the only place that argument gets tested against
 * what people actually do.
 */
export async function getByPage(range: DateRange, limit = 25): Promise<PageRow[]> {
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

/** Leads grouped by the kind of page rather than the individual page. */
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

/** Daily counts, for the trend line. */
export async function getDaily(range: DateRange): Promise<{ day: string; leads: number }[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    { $group: { _id: '$_id.day', leads: { $sum: 1 } } },
    { $sort: { _id: 1 as const } },
  ])
  return rows.map((r) => ({ day: r._id as string, leads: r.leads }))
}

export type RecentLead = {
  at: Date
  source: string
  sourceLabel: string
  basis: string
  pagePath: string
  pageTypeLabel: string
  actions: string[]
}

export async function getRecent(range: DateRange, limit = 100): Promise<RecentLead[]> {
  await connectToDatabase()
  const rows = await EventModel.aggregate([
    ...dedupePipeline(range),
    { $sort: { firstAt: -1 as const } },
    { $limit: limit },
  ])

  return rows.map((r) => {
    const source = (r.source ?? 'direct') as LeadSource
    const pageType = (r.pageType ?? 'other') as PageType
    return {
      at: r.firstAt as Date,
      source,
      sourceLabel: SOURCE_LABEL[source] ?? source,
      basis: r.sourceBasis ?? 'none',
      pagePath: r.pagePath ?? '/',
      pageTypeLabel: PAGE_TYPE_LABEL[pageType] ?? 'Other page',
      actions: Array.from(new Set(r.types as string[])),
    }
  })
}

/** Form leads, which carry a name and number the event log does not. */
export async function getFormLeads(range: DateRange, limit = 100) {
  await connectToDatabase()
  return LeadModel.find({ createdAt: { $gte: range.from, $lte: range.to } })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean()
}
