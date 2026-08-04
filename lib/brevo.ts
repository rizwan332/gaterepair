/**
 * Brevo transactional email.
 *
 * Plain fetch against the v3 REST API rather than the SDK — one endpoint, one
 * request shape, and no dependency to keep patched.
 *
 * Every function here resolves rather than throws. A lead notification failing
 * must never be the reason a customer sees an error: they have already typed
 * their details and pressed the button, and the caller decides what to do about
 * a delivery failure. See app/api/leads/route.ts.
 */

const ENDPOINT = 'https://api.brevo.com/v3/smtp/email'

export type LeadEmail = {
  name: string
  phone: string
  email?: string
  city?: string
  gateType?: string
  problem?: string
  brand?: string
  urgency?: string
  message?: string
  sourcePage?: string
  gclid?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
}

export type SendResult =
  | { ok: true; messageId?: string }
  | { ok: false; reason: 'not-configured' | 'api-error' | 'network'; detail?: string }

const URGENCY_LABEL: Record<string, string> = {
  emergency: 'EMERGENCY — gate is down now',
  'this-week': 'This week',
  quoting: 'Getting quotes',
}

const GATE_LABEL: Record<string, string> = {
  swing: 'Swing gate',
  slide: 'Slide gate',
  'barrier-arm': 'Barrier arm',
  unsure: 'Not sure',
}

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function row(label: string, value?: string): string {
  if (!value) return ''
  return `<tr>
    <td style="padding:8px 14px;border-bottom:1px solid #ecedef;color:#626873;font:500 13px system-ui,sans-serif;white-space:nowrap;vertical-align:top">${esc(label)}</td>
    <td style="padding:8px 14px;border-bottom:1px solid #ecedef;color:#131519;font:600 14px system-ui,sans-serif">${esc(value)}</td>
  </tr>`
}

function buildHtml(lead: LeadEmail): string {
  const urgent = lead.urgency === 'emergency'
  const attribution = [
    lead.sourcePage && row('Page', lead.sourcePage),
    lead.gclid && row('Google Ads click', lead.gclid),
    lead.utmSource && row('Source', lead.utmSource),
    lead.utmMedium && row('Medium', lead.utmMedium),
    lead.utmCampaign && row('Campaign', lead.utmCampaign),
    lead.utmTerm && row('Keyword', lead.utmTerm),
  ]
    .filter(Boolean)
    .join('')

  return `<!doctype html><html><body style="margin:0;background:#f7f7f8;padding:24px">
  <table role="presentation" style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #ecedef;border-radius:12px;overflow:hidden">
    <tr><td style="background:${urgent ? '#b91c1c' : '#08090b'};padding:18px 22px">
      <p style="margin:0;color:#fff;font:700 17px system-ui,sans-serif">
        ${urgent ? '🚨 EMERGENCY gate repair lead' : 'New gate repair lead'}
      </p>
      <p style="margin:4px 0 0;color:#b4b8bf;font:400 13px system-ui,sans-serif">
        shieldgaterepair.com
      </p>
    </td></tr>

    <tr><td style="padding:20px 22px">
      <a href="tel:${esc(lead.phone.replace(/[^\d+]/g, ''))}"
         style="display:block;background:#f5b32a;color:#08090b;text-align:center;padding:14px;border-radius:10px;font:700 18px system-ui,sans-serif;text-decoration:none">
        Call ${esc(lead.name)} &middot; ${esc(lead.phone)}
      </a>
    </td></tr>

    <tr><td style="padding:0 8px 8px">
      <table role="presentation" style="width:100%;border-collapse:collapse">
        ${row('Name', lead.name)}
        ${row('Phone', lead.phone)}
        ${row('Email', lead.email)}
        ${row('City', lead.city)}
        ${row('Urgency', lead.urgency ? (URGENCY_LABEL[lead.urgency] ?? lead.urgency) : undefined)}
        ${row('Gate type', lead.gateType ? (GATE_LABEL[lead.gateType] ?? lead.gateType) : undefined)}
        ${row('Problem', lead.problem)}
        ${row('Brand', lead.brand)}
      </table>
    </td></tr>

    ${
      lead.message
        ? `<tr><td style="padding:6px 22px 18px">
             <p style="margin:0 0 6px;color:#626873;font:500 13px system-ui,sans-serif">Their message</p>
             <p style="margin:0;padding:12px 14px;background:#f7f7f8;border-radius:8px;color:#212429;font:400 14px/1.55 system-ui,sans-serif;white-space:pre-wrap">${esc(lead.message)}</p>
           </td></tr>`
        : ''
    }

    ${
      attribution
        ? `<tr><td style="padding:0 8px 14px">
             <p style="margin:10px 14px 4px;color:#868c96;font:600 11px system-ui,sans-serif;text-transform:uppercase;letter-spacing:.06em">Where they came from</p>
             <table role="presentation" style="width:100%;border-collapse:collapse">${attribution}</table>
           </td></tr>`
        : ''
    }
  </table>
  </body></html>`
}

function buildText(lead: LeadEmail): string {
  return [
    lead.urgency === 'emergency' ? 'EMERGENCY GATE REPAIR LEAD' : 'New gate repair lead',
    '',
    `Name:    ${lead.name}`,
    `Phone:   ${lead.phone}`,
    lead.email ? `Email:   ${lead.email}` : '',
    lead.city ? `City:    ${lead.city}` : '',
    lead.urgency ? `Urgency: ${URGENCY_LABEL[lead.urgency] ?? lead.urgency}` : '',
    lead.gateType ? `Gate:    ${GATE_LABEL[lead.gateType] ?? lead.gateType}` : '',
    lead.problem ? `Problem: ${lead.problem}` : '',
    lead.brand ? `Brand:   ${lead.brand}` : '',
    lead.message ? `\nMessage:\n${lead.message}` : '',
    lead.sourcePage ? `\nPage: ${lead.sourcePage}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}

export function brevoConfigured(): boolean {
  return Boolean(process.env.BREVO_API_KEY && process.env.LEAD_NOTIFY_TO)
}

export async function sendLeadNotification(lead: LeadEmail): Promise<SendResult> {
  // Trimmed. Pasting a key into a hosting dashboard very easily carries a
  // trailing newline or space, and an HTTP header with stray whitespace is
  // rejected as an invalid credential — indistinguishable from a wrong key.
  const apiKey = process.env.BREVO_API_KEY?.trim()
  const to = process.env.LEAD_NOTIFY_TO?.trim()
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim() ?? to
  const senderName = process.env.BREVO_SENDER_NAME?.trim() ?? 'Shield Gate Repair Website'

  if (!apiKey || !to || !senderEmail) return { ok: false, reason: 'not-configured' }

  const urgent = lead.urgency === 'emergency'
  const subject = `${urgent ? '🚨 EMERGENCY — ' : ''}Gate repair lead: ${lead.name}${
    lead.city ? ` (${lead.city})` : ''
  } — ${lead.phone}`

  try {
    // Ten seconds. A serverless function that hangs on an unresponsive third
    // party costs the customer a spinner and us an invocation timeout.
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        // Comma-separated list supported, so several people can be notified.
        to: to.split(',').map((address) => ({ email: address.trim() })),
        // Hitting reply goes straight to the customer, not to the website.
        ...(lead.email ? { replyTo: { email: lead.email, name: lead.name } } : {}),
        subject,
        htmlContent: buildHtml(lead),
        textContent: buildText(lead),
        tags: ['website-lead', ...(urgent ? ['emergency'] : [])],
      }),
    }).finally(() => clearTimeout(timeout))

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      return { ok: false, reason: 'api-error', detail: `${res.status} ${detail.slice(0, 300)}` }
    }

    const json = (await res.json().catch(() => ({}))) as { messageId?: string }
    return { ok: true, messageId: json.messageId }
  } catch (err) {
    return { ok: false, reason: 'network', detail: (err as Error).message }
  }
}
