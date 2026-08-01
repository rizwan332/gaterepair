'use client'

import Script from 'next/script'
import { useEffect } from 'react'

/**
 * GA4 + conversion instrumentation.
 *
 * There was no analytics of any kind, which meant the site would have launched
 * with no way to tell whether it converts better than the WordPress build it
 * replaces — and no way to optimise the Google Ads account described in
 * GOOGLE-ADS.md, where two of the three Quality Score inputs are page-side.
 *
 * Loaded `afterInteractive` so it never competes with LCP. Renders nothing when
 * `NEXT_PUBLIC_GA_ID` is unset, so local and preview builds stay clean.
 *
 * Call clicks are the primary conversion on this site — most emergency traffic
 * dials rather than fills in a form — so `tel:` clicks are tracked globally
 * here rather than being wired into each individual button.
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!gaId) return

    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('a')
      if (!target) return
      const href = target.getAttribute('href') ?? ''

      if (href.startsWith('tel:')) {
        window.gtag?.('event', 'call_click', {
          event_category: 'conversion',
          link_url: href,
          page_path: window.location.pathname,
        })
      } else if (href.startsWith('sms:')) {
        window.gtag?.('event', 'sms_click', { event_category: 'conversion', page_path: window.location.pathname })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [gaId])

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: true });
        `}
      </Script>
    </>
  )
}

/** Fire a conversion event from anywhere. No-ops when analytics is disabled. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', name, params)
}
