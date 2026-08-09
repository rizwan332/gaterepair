import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { business } from '@/content/business'
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
const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-loaded',
  weight: ['500', '600', '700'],
})

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-loaded',
})

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: 'Gate Repair Dallas–Fort Worth | Same-Day Service | Shield Gate Repair',
    template: '%s | Shield Gate Repair',
  },
  description:
    'Automatic gate stuck or broken? Same-day gate repair across Dallas–Fort Worth. We repair LiftMaster, FAAC, ' +
    'All-O-Matic, Elite, Viking, Eagle and Ramset operators. Open 24/7.',
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
      <body className="antialiased">
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
