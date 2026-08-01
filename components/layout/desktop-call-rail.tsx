'use client'

import { useEffect, useState } from 'react'
import { Phone, X } from 'lucide-react'
import { business } from '@/content/business'

/**
 * Persistent desktop call card.
 *
 * The sticky bottom bar is mobile-only, which left desktop with nothing but a
 * small outline button in the header once the hero scrolled away. Competitors
 * with far worse design keep a phone number in front of you the entire time,
 * and in an emergency trade that is the correct instinct.
 *
 * Appears after the hero rather than immediately, so it never competes with the
 * hero's own CTAs, and is dismissible so it cannot become an irritant.
 */
export function DesktopCallRail() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('call-rail-dismissed') === '1') {
      setDismissed(true)
      return
    }
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 hidden transition-all duration-300 md:block ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="relative flex items-center gap-4 rounded-2xl bg-ink-950 py-4 pl-5 pr-14 shadow-[0_20px_50px_-12px_rgb(11_12_14/0.5)] ring-1 ring-inset ring-white/10">
        <span className="relative flex size-2.5 shrink-0" aria-hidden>
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-500 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-success-500" />
        </span>
        <div>
          <p className="text-xs font-medium text-ink-300">Technicians available now</p>
          <a
            href={business.phone.href}
            className="font-display text-lg font-semibold text-gold-400 hover:text-gold-300"
          >
            {business.phone.display}
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem('call-rail-dismissed', '1')
            setDismissed(true)
          }}
          className="absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-lg text-ink-400 hover:bg-white/10 hover:text-white"
          aria-label="Dismiss call prompt"
        >
          <X className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  )
}
