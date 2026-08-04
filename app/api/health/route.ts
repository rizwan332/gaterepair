import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Configuration check for the lead pipeline.
 *
 * The contact form failing on the demo host cost an afternoon to diagnose,
 * because a 503 from /api/leads looks identical whether MONGODB_URI is absent,
 * the Atlas allowlist is blocking the host, or the Brevo key is wrong. This
 * says which.
 *
 * Deliberately leaks nothing: presence booleans and a connection result, never
 * a key, a URI, or any part of one.
 */
export async function GET() {
  const checks: Record<string, unknown> = {
    mongodb: { configured: Boolean(process.env.MONGODB_URI), reachable: false as boolean | string },
    brevo: {
      apiKey: Boolean(process.env.BREVO_API_KEY),
      notifyTo: Boolean(process.env.LEAD_NOTIFY_TO),
      senderEmail: Boolean(process.env.BREVO_SENDER_EMAIL),
    },
  }

  if (process.env.MONGODB_URI) {
    try {
      await connectToDatabase()
      ;(checks.mongodb as Record<string, unknown>).reachable = true
    } catch (err) {
      // The message is useful ("IP not whitelisted", "bad auth") and contains
      // no credentials, but truncate in case a driver ever echoes the URI.
      ;(checks.mongodb as Record<string, unknown>).reachable = (err as Error).message.slice(0, 200)
    }
  }

  const mongoOk = (checks.mongodb as Record<string, unknown>).reachable === true
  const brevoOk =
    Boolean(process.env.BREVO_API_KEY) &&
    Boolean(process.env.LEAD_NOTIFY_TO) &&
    Boolean(process.env.BREVO_SENDER_EMAIL)

  return NextResponse.json(
    {
      // The form survives either path being down, so a lead is only actually
      // lost when both are.
      leadCaptureWorking: mongoOk || brevoOk,
      ...checks,
    },
    { status: mongoOk || brevoOk ? 200 : 503 },
  )
}
