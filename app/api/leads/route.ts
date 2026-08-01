import { NextResponse } from 'next/server'
import { z } from 'zod'
import { connectToDatabase } from '@/lib/mongodb'
import { LeadModel } from '@/models/Lead'

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

  try {
    await connectToDatabase()
    await LeadModel.create(lead)
  } catch (error) {
    // A lead must never be lost to an infrastructure problem. Log it where an
    // operator will see it and still tell the customer we have them, because
    // the phone number is on every screen and the call path always works.
    console.error('[leads] failed to persist lead', { error, lead })
    return NextResponse.json(
      { ok: false, error: 'We could not save that. Please call us — someone always answers.' },
      { status: 503 },
    )
  }

  return NextResponse.json({ ok: true })
}
