import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { business } from '@/content/business'
import { cdnOrigin } from '@/lib/cdn'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { StickyCallBar } from '@/components/layout/sticky-call-bar'
import { DesktopCallRail } from '@/components/layout/desktop-call-rail'
import { PendingFactsBanner } from '@/components/dev/pending-facts-banner'
import { Analytics, AnalyticsNoScript } from '@/components/analytics'
import { organizationSchema } from '@/lib/schema'
import './globals.css'

// Self-hosted at build time — no runtime request to Google, no render-blocking
// stylesheet, and `display: swap` so text is never invisible while fonts load.
//
// ── WHY preload IS OFF ──────────────────────────────────────────────────────
// next/font preloads by default, which emitted two <link rel=preload> at High
// priority. Measured on the live site, they started at 391ms and 393ms — ahead
// of the LCP image at 452ms — and took 71KB of a throttled mobile connection
// with them.
//
// Fonts cannot improve LCP here: the LCP element is the hero photograph, not
// text. All the preload did was put 71KB in front of the one request the metric
// is measured on. With `display: swap` the text paints immediately in the
// fallback either way, and next/font's `adjustFontFallback` keeps the fallback
// metrically matched, which is why CLS is 0 and stays 0 without the preload.
//
// The typography is unchanged. The webfont simply arrives a little later on a
// cold load, after the image the page is judged on.
const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-display-loaded',
  weight: ['500', '600', '700'],
})

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-sans-loaded',
})

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    // Fallback only — every real route sets its own title, and the homepage
    // (the one segment the template below does not apply to) sets its own too.
    default: 'Gate Repair Dallas–Fort Worth | Shield Gate Repair',
    template: '%s | Shield Gate Repair',
  },
  description:
    'Automatic gate stuck, stalled or dead? Same-day gate repair across Dallas–Fort Worth. ' +
    'We fix LiftMaster, FAAC, Elite, Viking and Ramset operators. Open 24/7.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: business.name,
    url: business.url,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0b0c0e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/*
          Arms the scroll-reveal hidden state, and nothing else.

          It has to be inline and in <head> so the class lands before first
          paint — otherwise revealed content flashes in visible and then hides.
          If this script never runs (blocked, failed, a crawler that does not
          execute JS) the `.js` selector never matches and every Reveal block
          renders plainly visible, which is the fallback we want. See
          globals.css and components/ui/reveal.tsx.
        */}
        <script
          id="js-class"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        {/*
          Preconnects, before the GTM loader so the handshakes start first.

          The CDN carries the hero photograph — the LCP element on every page —
          and it is a third origin, so without this the browser pays DNS + TLS
          before the largest element's first byte. googletagmanager is the one
          third party the site loads, and it loads immediately below.
        */}
        {cdnOrigin && <link rel="preconnect" href={cdnOrigin} crossOrigin="anonymous" />}
        {business.gtmId && <link rel="preconnect" href="https://www.googletagmanager.com" />}
        {/*
          Google Tag Manager, inline and as high in <head> as Google's own
          instructions ask for.

          Deliberately not next/script. An `afterInteractive` inline script in a
          client component is injected only after hydration, so it never reached
          the served HTML at all — and even when it does, deferring the
          container until after hydration risks missing the very early events
          that Ads conversion tags care about.

          The snippet itself is ~500 bytes and its only job is to append an
          async <script>, so it does not block rendering.

          Container GTM-MBBT87D8 fires GA4 (G-BFR37L657V) and Google Ads
          (AW-18000649811) itself. Nothing else here may load GA4.
        */}
        {business.gtmId && (
          <script
            id="gtm-loader"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${business.gtmId}');`,
            }}
          />
        )}
      </head>
      {/* The bottom padding reserves the StickyCallBar's height on mobile.

          Without it the bar — fixed, 3.5rem tall plus the safe-area inset —
          sat on top of the last 56px of every page on the site. The footer's
          copyright row and legal links were underneath it on every phone, and
          on the homepage it clipped the bottom of the closing CTA. `md:pb-0`
          because the bar is `md:hidden`. */}
      <body className="antialiased pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <AnalyticsNoScript />
        {/* Keyboard and screen-reader users get past the nav in one keystroke. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <StickyCallBar />
        <DesktopCallRail />
        <PendingFactsBanner />
        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </body>
    </html>
  )
}
