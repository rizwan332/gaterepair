import { NextResponse } from 'next/server'
import { createHash } from 'node:crypto'
import { z } from 'zod'
import { connectToDatabase } from '@/lib/mongodb'
import { EventModel } from '@/models/Event'
import { classifyLead } from '@/lib/lead-source'
import { identifyPage } from '@/lib/page-type'

/**
 * Records a lead-producing action.
 *
 * Called by components/analytics.tsx on every call and text click, so that the
 * majority of this business's leads stop existing only inside GA4. The form
 * route posts here too, so one collection holds every action rather than two
 * half-pictures that have to be reconciled later.
 *
 * ── THIS ENDPOINT IS PUBLIC AND THEREFORE UNTRUSTED ─────────────────────────
 * Anything a browser can call, a script can call. Three things follow:
 *
 *  - The SOURCE is never taken from the client. The client sends the raw
 *    signals it observed — referrer, click ids, utm values — and this route
 *    classifies them. A payload claiming `source: 'google-ads'` is ignored,
 *    because inflating a channel would otherwise be a matter of one fetch.
 *  - The payload is capped and validated field by field.
 *  - Rate limiting is per hashed IP.
 *
 * It still cannot prove a human was behind the click. Nothing served from a
 * browser can. What it gives is an auditable first-party record, which is
 * strictly more than the dataLayer gave.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const payload = z.object({
  type: z.enum(['call_click', 'sms_click', 'form_submit', 'directions_click']),
  visitorId: z.string().min(1).max(64),
  pagePath: z.string().max(300).optional(),
  landingPage: z.string().max(300).optional(),
  referrer: z.string().max(300).optional(),
  gclid: z.string().max(200).optional(),
  gbraid: z.string().max(200).optional(),
  wbraid: z.string().max(200).optional(),
  msclkid: z.string().max(200).optional(),
  fbclid: z.string().max(200).optional(),
  ttclid: z.string().max(200).optional(),
  li_fat_id: z.string().max(200).optional(),
  twclid: z.string().max(200).optional(),
  epik: z.string().max(200).optional(),
  igshid: z.string().max(200).optional(),
  utmSource: z.string().max(120).optional(),
  utmMedium: z.string().max(120).optional(),
  utmCampaign: z.string().max(200).optional(),
  utmTerm: z.string().max(200).optional(),
  utmContent: z.string().max(200).optional(),
})

/**
 * Salted so the hash cannot be reversed with a rainbow table of the IPv4
 * space, which is small enough to enumerate. Falls back to a constant only so
 * a missing env var degrades rather than crashes; set EVENT_SALT in Netlify.
 */
const SALT = process.env.EVENT_SALT ?? 'shield-gate-repair-events'
const hashIp = (ip: string) => createHash('sha256').update(`${SALT}:${ip}`).digest('hex').slice(0, 32)

const recent = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 30

function rateLimited(key: string): boolean {
  const now = Date.now()
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS)
  hits.push(now)
  recent.set(key, hits)
  return hits.length > MAX_PER_WINDOW
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const ipHash = hashIp(ip)

  if (rateLimited(ipHash)) {
    return NextResponse.json({ ok: false }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const parsed = payload.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  const data = parsed.data

  // Classified here, never trusted from the client.
  const classification = classifyLead({
    params: {
      gclid: data.gclid,
      gbraid: data.gbraid,
      wbraid: data.wbraid,
      msclkid: data.msclkid,
      fbclid: data.fbclid,
      ttclid: data.ttclid,
      li_fat_id: data.li_fat_id,
      twclid: data.twclid,
      epik: data.epik,
      igshid: data.igshid,
    },
    referrer: data.referrer,
    utmSource: data.utmSource,
    utmMedium: data.utmMedium,
  })

  const page = identifyPage(data.pagePath ?? '/')

  try {
    await connectToDatabase()
    await EventModel.create({
      type: data.type,
      visitorId: data.visitorId,
      source: classification.source,
      sourceGroup: classification.group,
      sourceBasis: classification.basis,
      pagePath: data.pagePath,
      pageType: page.type,
      pageSubject: page.subject,
      landingPage: data.landingPage,
      referrer: data.referrer,
      gclid: data.gclid,
      fbclid: data.fbclid,
      ttclid: data.ttclid,
      msclkid: data.msclkid,
      utmSource: data.utmSource,
      utmMedium: data.utmMedium,
      utmCampaign: data.utmCampaign,
      utmTerm: data.utmTerm,
      utmContent: data.utmContent,
      ipHash,
    })
  } catch {
    // A failed write must never interfere with the visitor calling. The click
    // has already navigated to the dialler by the time this resolves; losing a
    // record is a reporting gap, and blocking on it would be a lost job.
    return NextResponse.json({ ok: false }, { status: 200 })
  }

  return NextResponse.json({ ok: true })
}
