'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const ADMIN_TZ_COOKIE = 'sgr_admin_tz'

/**
 * Tells the server which time zone the dashboard is being looked at in.
 *
 * The page is rendered on Netlify, whose servers run on UTC, so without this
 * every time on the dashboard was UTC: five hours off in Pakistan, five or six
 * in Dallas. The browser knows its own zone; this stores it in a cookie and
 * re-renders once, the first time, or whenever the viewer travels.
 */
export function TimezoneSync({ current }: { current?: string }) {
  const router = useRouter()

  useEffect(() => {
    let tz: string | undefined
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    } catch {
      return
    }
    if (!tz || tz === current) return
    document.cookie = `${ADMIN_TZ_COOKIE}=${encodeURIComponent(tz)}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }, [current, router])

  return null
}
