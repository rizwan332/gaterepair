import { NextResponse } from 'next/server'
import { z } from 'zod'
import { connectToDatabase } from '@/lib/mongodb'
import { LeadModel } from '@/models/Lead'
import { sendLeadNotification } from '@/lib/brevo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const leadSchema = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().min(7).max(40),
  email: z.string().email().max(200).optional().or(z.literal('')),
  city: z.string().max(120).optional(),
  gateType: z.enum(['swing', 'slide', 'barrier-arm', 'unsure']).optional(),
  problem: z.string().max(80).optional(),
  brand: z.string().max(60).optional(),
  urgency: z.enum(['emergency', 'this-week', 'quoting']).optional(),
  message: z.string().max(4000).optional(),
  sourcePage: z.string().max(300).optional(),
  gclid: z.string().max(200).optional(),
  utmSource: z.string().max(120).optional(),
  utmMedium: z.string().max(120).optional(),
  utmCampaign: z.string().max(200).optional(),
  utmTerm: z.string().max(200).optional(),
  // Honeypot — real users never see this field, so anything in it is a bot.
  company: z.string().max(200).optional(),
})

// Crude in-memory limiter. Enough to stop a script hammering the endpoint;
// swap for a shared store if the site ever runs multi-instance.
const recent = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  hits.push(now)
  recent.set(ip, hits)
  return hits.length > MAX_PER_WINDOW
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 })
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Please check the form and try again.', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    )
  }

  const { company, ...lead } = parsed.data

  // Bot filled the honeypot. Return success so it does not learn anything.
  if (company) return NextResponse.json({ ok: true })

  // Storing and notifying are INDEPENDENT, and both are attempted.
  //
  // This used to be a database write alone, which meant a Mongo outage —
  // unreachable cluster, missing MONGODB_URI, an IP not on the Atlas allowlist —
  // returned 503 and the lead was simply gone. For a business whose leads are
  // emergency call-outs, silently dropping one because a database was
  // unreachable is the worst failure this codebase can have.
  //
  // Now the email is the durable path and the database is the record. Either
  // one succeeding is enough to tell the customer we have them.
  const [stored, notified] = await Promise.allSettled([
    (async () => {
      await connectToDatabase()
      await LeadModel.create(lead)
    })(),
    sendLeadNotification(lead),
  ])

  const savedOk = stored.status === 'fulfilled'
  const emailOk = notified.status === 'fulfilled' && notified.value.ok

  if (!savedOk) {
    console.error('[leads] database write failed', {
      error: stored.reason instanceof Error ? stored.reason.message : stored.reason,
      lead,
    })
  }
  if (!emailOk) {
    const reason =
      notified.status === 'fulfilled' ? notified.value : { reason: 'threw', detail: String(notified.reason) }
    console.error('[leads] email notification failed', { reason, lead })
  }

  if (!savedOk && !emailOk) {
    // Both paths are down. The lead is only in this log line now, so it is
    // logged in full above — and the customer is told to call, which always
    // works because the number is on every screen.
    return NextResponse.json(
      { ok: false, error: 'We could not send that. Please call us — someone always answers.' },
      { status: 503 },
    )
  }

  return NextResponse.json({ ok: true })
}
