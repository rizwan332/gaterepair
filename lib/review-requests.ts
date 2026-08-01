import { randomBytes } from 'node:crypto'
import { business } from '@/content/business'

/**
 * Message copy and token generation for review requests.
 *
 * The copy matters more than the plumbing. Three rules drawn from what actually
 * gets responses in home services:
 *
 *  1. **Name the technician and the job.** "Thanks for having Marcus out for the
 *     LiftMaster board today" is a message from a person about a real event.
 *     "Thank you for choosing us!" is a broadcast, and people delete broadcasts.
 *  2. **Ask once, plainly, with the link.** No paragraph of preamble, no
 *     incentive — incentivised reviews violate Google's policy and can get a
 *     profile penalised.
 *  3. **Give an exit.** "If anything wasn't right, reply here first" routes an
 *     unhappy customer to the business instead of to a one-star review. This
 *     single line is why the follow-up is safe to send.
 */

export function generateToken(): string {
  // 16 bytes base64url — unguessable, short enough to sit in an SMS.
  return randomBytes(16).toString('base64url')
}

export function reviewLink(token: string): string {
  return `${business.url}/r/${token}`
}

type RequestContext = {
  customerName?: string
  technician?: string
  service?: string
  city?: string
  token: string
}

/** First ask — sent the same day the job completes, while it is still fresh. */
export function smsBody({ customerName, technician, service, token }: RequestContext): string {
  const name = customerName ? customerName.split(' ')[0] : 'Hi'
  const who = technician ? `${technician} ` : ''
  const job = service ? ` with your ${service.toLowerCase()}` : ''

  return (
    `${name} — thanks for having ${who}out${job} today. ` +
    `If we did right by you, a quick Google review genuinely helps a small team like ours: ${reviewLink(token)} ` +
    `\n\nIf anything wasn't right, reply to this message first and we'll put it straight. — ${business.name}`
  )
}

/**
 * Second ask, ~48 hours later, only if the first was not clicked.
 *
 * Most reviews that get written are written after the second ask. One
 * follow-up is worth roughly as much as the original message; a third starts
 * costing goodwill, so the system stops at two.
 */
export function followUpSmsBody({ customerName, token }: RequestContext): string {
  const name = customerName ? customerName.split(' ')[0] : 'Hi'
  return (
    `${name} — sorry to nudge. If your gate is still working the way it should, ` +
    `a one-line Google review would mean a lot: ${reviewLink(token)} ` +
    `\n\nAnd if it isn't, tell us and we'll come back out. — ${business.name}`
  )
}

export function emailSubject({ technician }: RequestContext): string {
  return technician
    ? `How did ${technician} do today?`
    : `How did we do today?`
}

export function emailBody(ctx: RequestContext): string {
  const name = ctx.customerName ? ctx.customerName.split(' ')[0] : 'Hi'
  const who = ctx.technician ?? 'our technician'
  const job = ctx.service ? ` on your ${ctx.service.toLowerCase()}` : ''

  return [
    `${name},`,
    ``,
    `Thanks for having ${who} out${job} today.`,
    ``,
    `We're a small team and Google reviews are genuinely how people find us. If we did right by you, would you leave one? It takes about thirty seconds:`,
    ``,
    reviewLink(ctx.token),
    ``,
    `And if anything wasn't right, reply to this email before you do anything else — we'd much rather fix it than read about it.`,
    ``,
    `— ${business.name}`,
    business.phone.display,
  ].join('\n')
}

/**
 * Sending is deliberately pluggable and unimplemented.
 *
 * The client has no SMS provider yet and no confirmed Google review URL, so
 * wiring a specific vendor now would be guesswork. Everything up to the point
 * of transmission is built: tokens, links, copy, tracking and attribution.
 * Dropping in Twilio (or the client's existing CRM) is a single function.
 */
export type SendResult = { ok: true } | { ok: false; error: string }

export async function sendSms(_to: string, _body: string): Promise<SendResult> {
  if (!process.env.SMS_PROVIDER_KEY) {
    return { ok: false, error: 'No SMS provider configured — set SMS_PROVIDER_KEY' }
  }
  // TODO: implement against the client's chosen provider.
  return { ok: false, error: 'SMS provider not implemented' }
}
