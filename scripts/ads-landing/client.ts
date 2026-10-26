/**
 * Browser script for the static Ads landing page (public/dfw-gate-repair.html).
 *
 * Bundled and inlined by scripts/build-ads-landing.ts. It does what the React
 * pieces did on the old Next.js version of the page, without React:
 *  - call/text tracking: dataLayer event + beacon to /api/events, same payload
 *    as components/analytics.tsx, and the "hold the tap until GTM is in" rule;
 *  - the estimate form: same fields and /api/leads payload as
 *    components/forms/gate-problem-form.tsx, same generate_lead event;
 *  - click-to-play videos and the desktop carousel arrows.
 *
 * Attribution comes from lib/attribution.ts itself (bundled in), so the
 * storage keys and rules are the site's own and a visitor who moves on to the
 * main site keeps the same gclid and visitor id.
 */
import { captureAttribution, attributionParams, getAttribution, visitorId } from '../../lib/attribution'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    __gtmDeferred?: number
    __loadGtm?: () => void
    google_tag_manager?: unknown
  }
}

const PAGE = '/dfw-gate-repair'

function push(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...params })
}

function timeZone(): string | undefined {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return undefined
  }
}

function recordEvent(type: 'call_click' | 'sms_click') {
  try {
    const a = getAttribution()
    const body = JSON.stringify({
      type,
      visitorId: visitorId(),
      pagePath: window.location.pathname,
      landingPage: a.landingPage,
      referrer: a.referrer,
      gclid: a.gclid,
      gbraid: a.gbraid,
      wbraid: a.wbraid,
      msclkid: a.msclkid,
      fbclid: a.fbclid,
      ttclid: a.ttclid,
      li_fat_id: a.li_fat_id,
      twclid: a.twclid,
      epik: a.epik,
      igshid: a.igshid,
      utmSource: a.utmSource,
      utmMedium: a.utmMedium,
      utmCampaign: a.utmCampaign,
      utmTerm: a.utmTerm,
      utmContent: a.utmContent,
      timezone: timeZone(),
    })
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/events', new Blob([body], { type: 'application/json' }))
    } else {
      void fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
    }
  } catch {
    // Never let reporting break a call.
  }
}

/** Same rule as components/analytics.tsx: an early tap waits for GTM, capped. */
function holdUntilGtm(event: MouseEvent, href: string): Record<string, unknown> {
  if (!window.__gtmDeferred || window.google_tag_manager || !window.__loadGtm) return {}
  event.preventDefault()
  window.__loadGtm()
  let gone = false
  const go = () => {
    if (gone) return
    gone = true
    window.location.href = href
  }
  window.setTimeout(go, 2000)
  return { eventCallback: go, eventTimeout: 1500 }
}

captureAttribution()

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null

  // Click-to-play: swap the thumbnail button for the YouTube player.
  const play = target?.closest<HTMLButtonElement>('button[data-yt]')
  if (play) {
    const frame = document.createElement('iframe')
    frame.src = `https://www.youtube-nocookie.com/embed/${play.dataset.yt}?autoplay=1&rel=0&modestbranding=1`
    frame.title = play.getAttribute('aria-label') ?? 'Customer video'
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    frame.allowFullscreen = true
    frame.className = 'yt-frame'
    play.replaceWith(frame)
    return
  }

  // Desktop carousel arrows.
  const arrow = target?.closest<HTMLButtonElement>('button[data-rail]')
  if (arrow) {
    const rail = document.getElementById('rail')
    if (rail) rail.scrollBy({ left: Number(arrow.dataset.rail) * Math.min(rail.clientWidth * 0.8, 640), behavior: 'smooth' })
    return
  }

  const link = target?.closest('a')
  const href = link?.getAttribute('href') ?? ''
  if (href.startsWith('tel:') || href.startsWith('sms:')) {
    const type = href.startsWith('tel:') ? 'call_click' : 'sms_click'
    recordEvent(type)
    push(type, { link_url: href, page_path: window.location.pathname, ...attributionParams(), ...holdUntilGtm(event, href) })
  }
})

// Estimate form.
const form = document.getElementById('estimate-form') as HTMLFormElement | null
if (form) {
  const status = form.querySelector<HTMLElement>('[data-status]')!
  const submit = form.querySelector<HTMLButtonElement>('button[type=submit]')!

  const setError = (name: string, message: string | null) => {
    const input = form.elements.namedItem(name) as HTMLInputElement | null
    const slot = form.querySelector<HTMLElement>(`[data-error="${name}"]`)
    if (!input || !slot) return
    slot.textContent = message ?? ''
    slot.hidden = !message
    if (message) input.setAttribute('aria-invalid', 'true')
    else input.removeAttribute('aria-invalid')
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    const values = {
      name: (data.name ?? '').trim(),
      phone: (data.phone ?? '').trim(),
      email: (data.email ?? '').trim(),
      address: (data.address ?? '').trim(),
      message: (data.message ?? '').trim(),
      company: data.company ?? '',
    }

    // The same rules as the zod schema in gate-problem-form.tsx.
    const errors: Record<string, string | null> = {
      name: values.name.length >= 1 ? null : 'Please add your name',
      phone: values.phone.length >= 7 ? null : 'We need a number to call you back on',
      email: !values.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? null : 'Check the email address',
    }
    for (const [k, v] of Object.entries(errors)) setError(k, v)
    const firstBad = Object.keys(errors).find((k) => errors[k])
    if (firstBad) {
      ;(form.elements.namedItem(firstBad) as HTMLInputElement).focus()
      return
    }

    const a = getAttribution()
    const payload = {
      ...values,
      gclid: a.gclid ?? '',
      utmSource: a.utmSource ?? '',
      utmMedium: a.utmMedium ?? '',
      utmCampaign: a.utmCampaign ?? '',
      utmTerm: a.utmTerm ?? '',
      landingPage: a.landingPage ?? '',
      referrer: a.referrer ?? '',
      sourcePage: PAGE,
      visitorId: visitorId(),
      fbclid: a.fbclid ?? '',
      ttclid: a.ttclid ?? '',
      msclkid: a.msclkid ?? '',
      utmContent: a.utmContent ?? '',
      timezone: timeZone() ?? '',
    }

    status.hidden = true
    submit.disabled = true
    submit.textContent = 'Sending…'
    const fail = (message: string) => {
      status.textContent = message
      status.hidden = false
      submit.disabled = false
      submit.textContent = 'Request Service'
    }
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const body = await res.json().catch(() => ({}))
      if (!res.ok || !body.ok) return fail(body.error ?? 'Something went wrong. Please call us.')
      // The form is real intent, so it loads GTM if it has not loaded yet.
      window.__loadGtm?.()
      push('generate_lead', { event_category: 'conversion', user_data: { email: values.email, phone_number: values.phone } })
      form.hidden = true
      document.getElementById('estimate-done')!.hidden = false
    } catch {
      fail('We could not send that. Please call us. Someone always answers.')
    }
  })
}
