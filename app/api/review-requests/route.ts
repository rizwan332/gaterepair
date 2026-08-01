import { NextResponse } from 'next/server'
import { z } from 'zod'
import { connectToDatabase } from '@/lib/mongodb'
import { ReviewRequestModel } from '@/models/ReviewRequest'
import { generateToken, reviewLink, smsBody, emailSubject, emailBody, sendSms } from '@/lib/review-requests'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Create a review request for a completed job.
 *
 * Protected by a shared secret rather than a login: this is called by whoever
 * closes the job out — a dispatcher, a phone shortcut, or eventually the CRM —
 * and a full auth system would be scope nobody needs yet. The secret must be
 * set; there is no development bypass, because a bypass is how an open endpoint
 * reaches production.
 */

const schema = z.object({
  customerName: z.string().max(120).optional(),
  phone: z.string().max(40).optional(),
  email: z.string().email().max(200).optional().or(z.literal('')),
  city: z.string().max(120).optional(),
  service: z.string().max(120).optional(),
  technician: z.string().max(120).optional(),
  channel: z.enum(['sms', 'email', 'manual']).default('sms'),
})

export async function POST(request: Request) {
  const secret = process.env.REVIEW_REQUEST_SECRET
  if (!secret) {
    return NextResponse.json({ ok: false, error: 'REVIEW_REQUEST_SECRET is not set' }, { status: 503 })
  }
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }

  const parsed = schema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    )
  }

  const data = parsed.data
  if (!data.phone && !data.email) {
    return NextResponse.json({ ok: false, error: 'A phone number or email is required' }, { status: 422 })
  }

  const token = generateToken()

  try {
    await connectToDatabase()
    await ReviewRequestModel.create({ ...data, token, status: 'queued' })
  } catch (error) {
    console.error('[review-requests] failed to persist', error)
    return NextResponse.json({ ok: false, error: 'Could not create request' }, { status: 503 })
  }

  const context = { ...data, token }
  const message = data.channel === 'email' ? emailBody(context) : smsBody(context)

  // Attempt delivery, but never fail the request because of it — the link and
  // the copy are returned either way so a dispatcher can send it by hand today.
  let delivery: { ok: boolean; error?: string } = { ok: false, error: 'Not attempted' }
  if (data.channel === 'sms' && data.phone) {
    delivery = await sendSms(data.phone, message)
    if (delivery.ok) {
      await ReviewRequestModel.updateOne({ token }, { status: 'sent', sentAt: new Date() })
    }
  }

  return NextResponse.json({
    ok: true,
    token,
    link: reviewLink(token),
    // Returned so the message can be copied straight into a phone while no
    // provider is configured. This is what makes the system usable on day one.
    message,
    subject: data.channel === 'email' ? emailSubject(context) : undefined,
    delivered: delivery.ok,
    deliveryError: delivery.ok ? undefined : delivery.error,
  })
}
