'use client'

import { useEffect } from 'react'
import { business } from '@/content/business'

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
  }
}

export function Analytics() {
  const gtmId = business.gtmId

  useEffect(() => {
    if (!gtmId) return

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') ?? ''

      if (href.startsWith('tel:')) {
        pushEvent('call_click', { link_url: href, page_path: window.location.pathname })
      } else if (href.startsWith('sms:')) {
        pushEvent('sms_click', { link_url: href, page_path: window.location.pathname })
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
