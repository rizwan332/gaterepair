'use client'

import { useEffect } from 'react'
import { business } from '@/content/business'
import { captureAttribution, attributionParams, getAttribution, visitorId } from '@/lib/attribution'

/**
 * Google Tag Manager — the single tag container for the site.
 *
 * ── WHY GTM AND NOT gtag.js ─────────────────────────────────────────────────
 * This file previously loaded GA4 directly. It must not: the client's
 * container (GTM-MBBT87D8) already fires both GA4 (G-BFR37L657V) and Google
 * Ads (AW-18000649811) as Google tags. Loading GA4 here as well would have
 * counted every pageview twice and inflated every conversion.
 *
 * Routing everything through GTM also means the Ads conversion tags described
 * in GOOGLE-ADS.md — call conversions, form conversions, remarketing — can be
 * added and changed from the Tag Manager UI without a code change and a
 * deploy.
 *
 * ── EVENTS ──────────────────────────────────────────────────────────────────
 * Calls are the primary conversion here: most emergency traffic dials rather
 * than fills in a form. Rather than wiring a handler onto every phone button
 * scattered across the header, hero, sticky bars and footer, one delegated
 * listener catches `tel:` and `sms:` clicks anywhere on the page and pushes
 * them to `dataLayer`.
 *
 * To turn these into Ads conversions, create a Custom Event trigger in GTM on
 * `call_click` / `generate_lead` and attach an Ads conversion tag. No deploy.
 *
 * ── WHERE THE LOADER LIVES ──────────────────────────────────────────────────
 * In <head>, inline, in app/layout.tsx. It was briefly a next/script here with
 * `afterInteractive`, which never reached the served HTML at all — an inline
 * afterInteractive script in a client component is injected only on hydration.
 * This component keeps the click listeners and renders nothing.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    /** Set by the loader in app/layout.tsx on pages that defer GTM. */
    __gtmDeferred?: number
    __loadGtm?: () => void
    /** Defined by gtm.js once the container is running. */
    google_tag_manager?: unknown
  }
}

/**
 * On a page that defers GTM, a Call or Text tap can come before the container
 * has loaded, and the dialler can freeze the page before gtm.js arrives, losing
 * the Ads conversion. So hold that one tap: load GTM, let it process the event
 * (eventCallback), then dial. eventTimeout and the backup timer cap the wait.
 */
function holdUntilGtm(event: MouseEvent, href: string): Record<string, unknown> | null {
  if (!window.__gtmDeferred || window.google_tag_manager || !window.__loadGtm) return null
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

/**
 * Persist a lead action to our own database as well as the dataLayer.
 *
 * ── WHY sendBeacon ──────────────────────────────────────────────────────────
 * A tel: click hands the browser straight to the dialler, and on mobile the
 * page is frozen or torn down within milliseconds. A normal fetch is cancelled
 * when that happens, which is precisely why call tracking built on fetch loses
 * the events that matter most. `sendBeacon` queues the request with the
 * browser and it is delivered regardless of what the page does next.
 *
 * It is fire-and-forget by design: there is no response to read and no error
 * to handle, because nothing here is allowed to stand between someone with a
 * broken gate and the phone.
 */
function browserTimeZone(): string | undefined {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return undefined
  }
}

function recordEvent(type: 'call_click' | 'sms_click' | 'form_submit' | 'directions_click') {
  try {
    const attribution = getAttribution()
    const body = JSON.stringify({
      type,
      visitorId: visitorId(),
      pagePath: window.location.pathname,
      landingPage: attribution.landingPage,
      referrer: attribution.referrer,
      gclid: attribution.gclid,
      gbraid: attribution.gbraid,
      wbraid: attribution.wbraid,
      msclkid: attribution.msclkid,
      fbclid: attribution.fbclid,
      ttclid: attribution.ttclid,
      li_fat_id: attribution.li_fat_id,
      twclid: attribution.twclid,
      epik: attribution.epik,
      igshid: attribution.igshid,
      utmSource: attribution.utmSource,
      utmMedium: attribution.utmMedium,
      utmCampaign: attribution.utmCampaign,
      utmTerm: attribution.utmTerm,
      utmContent: attribution.utmContent,
      // The phone's own clock zone. More reliable than IP location for showing
      // the visitor's local time, since a VPN moves the IP but not the clock.
      timezone: browserTimeZone(),
    })

    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/events', new Blob([body], { type: 'application/json' }))
    } else {
      // Older Safari. keepalive does the same job for the fetch path.
      void fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {})
    }
  } catch {
    // Never let reporting break a call.
  }
}

export function Analytics() {
  const gtmId = business.gtmId

  useEffect(() => {
    if (!gtmId) return

    /**
     * Record where this visit came from before anything else happens.
     *
     * On a paid click the gclid is only in the URL of the landing page, and
     * the call usually happens somewhere else on the site — so it has to be
     * captured here, on arrival, or it is gone. See lib/attribution.ts.
     */
    captureAttribution()

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') ?? ''

      /**
       * Attribution travels with the click.
       *
       * Without it a call from an ad and a call from organic search were
       * indistinguishable in GA4, which is why Google Ads could report three
       * conversions in a week that produced more calls than that, with no way
       * to tell which was which. Now every call_click carries its gclid and
       * campaign, so the two can be told apart and the Ads conversion can be
       * matched back to a keyword.
       */
      if (href.startsWith('tel:')) {
        recordEvent('call_click')
        pushEvent('call_click', {
          link_url: href,
          page_path: window.location.pathname,
          ...attributionParams(),
          ...holdUntilGtm(event, href),
        })
      } else if (href.startsWith('sms:')) {
        recordEvent('sms_click')
        pushEvent('sms_click', {
          link_url: href,
          page_path: window.location.pathname,
          ...attributionParams(),
          ...holdUntilGtm(event, href),
        })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [gtmId])

  // The container loader itself lives inline in <head> (app/layout.tsx), where
  // Google asks for it and where it is guaranteed to be in the served HTML.
  // This component exists for the event listeners above and renders nothing.
  return null
}

/**
 * The `<noscript>` half of the GTM snippet.
 *
 * Google's instructions put this immediately after the opening `<body>` tag,
 * which is why it is a separate export rather than part of `Analytics` — that
 * one renders near the end of the body.
 */
export function AnalyticsNoScript() {
  if (!business.gtmId) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${business.gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}

/**
 * Push an event to the dataLayer for GTM to pick up.
 *
 * Safe before the container has loaded — the array is created by the loader
 * snippet ahead of the script, and queued events are replayed on init.
 */
export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...params })
}

/** @deprecated Use `pushEvent`. Kept so existing call sites keep working. */
export const trackEvent = pushEvent
