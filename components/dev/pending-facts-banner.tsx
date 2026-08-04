import { pendingFacts } from '@/lib/business'
import { pricingConfirmed } from '@/content/pricing'

/**
 * Development-only reminder of every business fact still waiting on the client.
 *
 * The point is that unverified claims cannot quietly reach production. In prod
 * this renders nothing and the facts themselves are omitted from the page; in
 * dev it is deliberately hard to ignore.
 *
 * Collapsed by default via <details>. It previously sat open over the hero,
 * which made every visual review of the homepage — the page it most obscured —
 * harder than it needed to be. The count stays visible in the summary, so it is
 * still impossible to miss; it just no longer covers the thing being reviewed.
 * No client JS: <details> is native.
 */
export function PendingFactsBanner() {
  if (process.env.NODE_ENV === 'production') return null

  const pending = pendingFacts()
  if (pending.length === 0 && pricingConfirmed) return null

  return (
    <details className="fixed bottom-20 left-4 z-[90] max-w-sm rounded-xl border border-amber-300 bg-amber-50 text-xs shadow-lg md:bottom-4">
      <summary className="cursor-pointer list-none p-3 font-semibold text-amber-900 marker:content-none">
        ⚠ {pending.length + (pricingConfirmed ? 0 : 1)} unconfirmed fact
        {pending.length === 0 ? '' : 's'} — omitted in production
      </summary>
      <ul className="space-y-1 px-4 pb-4 text-amber-800">
        {pending.map((p) => (
          <li key={p.key}>
            <span className="font-mono font-medium">{p.key}</span> — {p.note}
          </li>
        ))}
        {!pricingConfirmed && (
          <li>
            <span className="font-mono font-medium">pricing</span> — all price bands are placeholders
          </li>
        )}
      </ul>
    </details>
  )
}
