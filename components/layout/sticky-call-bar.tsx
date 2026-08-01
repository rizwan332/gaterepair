import { Phone, MessageSquare, ClipboardList } from 'lucide-react'
import { business } from '@/content/business'

/**
 * Persistent mobile action bar.
 *
 * Emergency gate traffic is overwhelmingly mobile and often one-handed. No page
 * on this site is allowed to dead-end — there is always a call path in the
 * thumb zone. Several competitors bury their phone number in a header that
 * scrolls away.
 */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-800 bg-ink-900 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={business.phone.href}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-gold-500 font-semibold text-ink-950"
        >
          <Phone className="size-5" aria-hidden />
          <span className="text-xs">Call Now</span>
        </a>
        <a
          href={`sms:${business.phone.href.replace('tel:', '')}`}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-white"
        >
          <MessageSquare className="size-5" aria-hidden />
          <span className="text-xs">Text Us</span>
        </a>
        <a
          href="/contact"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-white"
        >
          <ClipboardList className="size-5" aria-hidden />
          <span className="text-xs">Estimate</span>
        </a>
      </div>
    </div>
  )
}
