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
/**
 * Actually exercises the Brevo credentials rather than checking the env var is
 * non-empty. A key that is present but invalid, or a sender address that has
 * not been verified in Brevo, both look identical to "configured" and both
 * cause every send to fail silently.
 */
async function checkBrevo() {
  const apiKey = process.env.BREVO_API_KEY?.trim()
  const sender = process.env.BREVO_SENDER_EMAIL?.trim() ?? process.env.LEAD_NOTIFY_TO?.trim()

  const raw = process.env.BREVO_API_KEY ?? ''
  const result: Record<string, unknown> = {
    apiKey: Boolean(apiKey),
    notifyTo: Boolean(process.env.LEAD_NOTIFY_TO),
    senderEmail: Boolean(process.env.BREVO_SENDER_EMAIL),
    // Shape checks, so a wrong *kind* of credential is obvious. Brevo v3 API
    // keys start "xkeysib-"; an SMTP password does not, and pasting one here
    // is the usual cause of "Key not found".
    keyLooksLikeV3: apiKey ? apiKey.startsWith('xkeysib-') : false,
    keyHadWhitespace: raw !== raw.trim(),
    keyLength: apiKey?.length ?? 0,
    keyValid: false as boolean | string,
    senderVerified: 'not checked' as boolean | string,
  }
  if (!apiKey) return result

  const headers = { 'api-key': apiKey, accept: 'application/json' }

  try {
    const res = await fetch('https://api.brevo.com/v3/account', { headers })
    if (res.ok) {
      result.keyValid = true
    } else {
      // 401 here is the single most common cause: key revoked, key copied with
      // whitespace, or an SMTP password pasted where a v3 API key belongs.
      result.keyValid = `${res.status} ${(await res.text().catch(() => '')).slice(0, 200)}`
      return result
    }
  } catch (err) {
    result.keyValid = `network: ${(err as Error).message}`
    return result
  }

  if (!sender) return result

  try {
    const res = await fetch('https://api.brevo.com/v3/senders', { headers })
    if (!res.ok) {
      result.senderVerified = `${res.status} ${(await res.text().catch(() => '')).slice(0, 200)}`
      return result
    }
    const json = (await res.json()) as { senders?: { email: string; active?: boolean }[] }
    const match = json.senders?.find((s) => s.email.toLowerCase() === sender.toLowerCase())
    result.senderVerified = match
      ? (match.active ?? true)
      : `"${sender}" is not a sender in this Brevo account — add and verify it under Senders, Domains & Dedicated IPs`
  } catch (err) {
    result.senderVerified = `network: ${(err as Error).message}`
  }

  return result
}

export async function GET() {
  const checks: Record<string, unknown> = {
    mongodb: { configured: Boolean(process.env.MONGODB_URI), reachable: false as boolean | string },
    brevo: await checkBrevo(),
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
  const brevo = checks.brevo as Record<string, unknown>
  // "Working" means the credentials actually authenticate, not that the
  // variables are set. The previous version reported leadCaptureWorking: true
  // while every single send was being rejected.
  const brevoOk = brevo.keyValid === true && brevo.senderVerified === true && Boolean(brevo.notifyTo)

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
