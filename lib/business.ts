import { business, type Fact } from '@/content/business'

/**
 * Guards every unverified business fact.
 *
 * Competitors publish real credentials — Everlast shows TX license B28539401,
 * Dallas Automatic Gate shows B26253101. Shipping an invented review count or
 * license number would be worse than showing nothing, so unconfirmed facts
 * render nothing in production and a loud warning in development.
 */
export function fact<T>(f: Fact<T>): T | null {
  return f.confirmed ? f.value : null
}

export function isConfirmed<T>(f: Fact<T>): boolean {
  return f.confirmed
}

/** Everything still waiting on the client, for the dev-only banner. */
export function pendingFacts(): { key: string; note: string }[] {
  const entries: [string, Fact<unknown>][] = [
    ['rating', business.rating],
    ['license', business.license],
    ['insurance', business.insurance],
    ['yearsInBusiness', business.yearsInBusiness],
    ['warrantyTerm', business.warrantyTerm],
    ['backgroundChecked', business.backgroundChecked],
    ['address', business.address],
    ['responseBand', business.responseBand],
    ['authorizedDealer', business.authorizedDealer],
  ]
  return entries.filter(([, f]) => !f.confirmed).map(([key, f]) => ({ key, note: (f as { note: string }).note }))
}

export { business }
