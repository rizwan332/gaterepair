import type { Metadata } from 'next'

/**
 * Keeps the whole /admin segment out of the index.
 *
 * Set on the layout rather than each page because /admin/login is a client
 * component and cannot export metadata of its own — and because a rule that
 * has to be remembered on every new admin page is a rule that will eventually
 * be forgotten on one.
 *
 * This is the third of three independent guards, none of which relies on the
 * others: robots.txt disallows /admin, every page here is noindex, and the
 * segment is absent from lib/sitemap.ts. The dashboard also requires a
 * password, so indexing would expose a login form rather than data — but a
 * lead dashboard should not be findable at all.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children
}
