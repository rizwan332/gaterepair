'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { business } from '@/content/business'

/**
 * The thin bar above the header.
 *
 * On the Google Ads landing page it carries the client's own line from his
 * mockup (22 Oct 2026) and is plain text, so a paid visitor is not sent off to
 * /emergency. Everywhere else it is the usual 24/7 link. usePathname resolves
 * during static rendering, so each page's HTML already has the right text.
 */
export function TopStrip() {
  const pathname = usePathname()

  // Ads landing page only. The homepage went back to the original strip and
  // hero at the site owner's request (26 Oct 2026).
  if (pathname === '/dfw-gate-repair') {
    return (
      <div className="bg-ink-900 text-white">
        <p className="container-page flex h-9 items-center justify-center whitespace-nowrap text-center text-[0.625rem] font-semibold uppercase tracking-[0.03em] min-[400px]:text-[0.6875rem] sm:text-[0.8125rem] sm:tracking-[0.08em]">
          DFW &amp; Surrounding Areas&nbsp;&nbsp;|&nbsp;&nbsp;Residential &amp; Commercial
        </p>
      </div>
    )
  }

  return (
    <div className="bg-ink-900 text-white">
      <div className="container-page flex h-9 items-center justify-between text-xs sm:text-[0.8125rem]">
        <Link href="/emergency" className="font-medium underline-offset-4 hover:text-gold-400 hover:underline">
          {business.availability}
        </Link>
        <p className="hidden text-ink-200 sm:block">{business.serviceArea.display}</p>
      </div>
    </div>
  )
}
