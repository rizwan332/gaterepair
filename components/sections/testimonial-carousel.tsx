'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'
import { TestimonialCard } from '@/components/sections/video-testimonials'
import type { Testimonial } from '@/content/testimonials'

/**
 * The premium testimonial section — one component, used on the homepage,
 * service pages, city pages and the Google Ads landing pages.
 *
 * Built as a scroll-snap rail rather than a JS slider. The browser does the
 * scrolling, which means it is keyboard-navigable, swipeable on touch, works
 * with reduced-motion, and adds no animation library to the bundle. The arrow
 * buttons drive `scrollBy` and hide themselves when there is nothing further
 * in that direction, so they never sit there dead.
 *
 * Cards stay facade-first (see TestimonialCard): a thumbnail until clicked, so
 * twenty-one videos cost twenty-one images rather than twenty-one YouTube
 * players. That is the difference between a fast page and a failed one.
 */
export function TestimonialCarousel({
  items,
  title = 'Real Customers. Real Repairs. Watch Our Customers Tell Their Stories.',
  eyebrow = 'Customer testimonials',
  intro,
  tone = 'tint',
  showCta = true,
}: {
  items: Testimonial[]
  title?: string
  eyebrow?: string
  intro?: string
  tone?: 'light' | 'tint' | 'dark'
  showCta?: boolean
}) {
  const railRef = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const el = railRef.current
    if (!el) return
    // 2px of slack: sub-pixel scroll widths otherwise leave the end arrow
    // enabled on a rail that cannot actually move.
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }, [])

  useEffect(() => {
    sync()
    const el = railRef.current
    if (!el) return
    const observer = new ResizeObserver(sync)
    observer.observe(el)
    return () => observer.disconnect()
  }, [sync])

  const scroll = (direction: -1 | 1) => {
    const el = railRef.current
    if (!el) return
    // Page by roughly one card so the rail lands on a snap point.
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.8, 640), behavior: 'smooth' })
  }

  /**
   * All 23 videos, Shorts included.
   *
   * They were briefly excluded because a 9:16 card was ~541px tall against
   * ~171px for a 16:9 one at mobile's w-[78vw], and the rail sizes to its
   * tallest item — roughly 370px of dead space under every landscape card.
   * TestimonialCard now renders every video at 16:9 and centre-crops the
   * thumbnail, so heights match and there is nothing to exclude.
   */
  const rail = items
  if (rail.length === 0) return null

  const dark = tone === 'dark'

  return (
    <section
      className={`section ${
        dark
          ? 'surface-dark'
          : tone === 'tint'
            ? 'bg-gradient-to-b from-white via-sky-50 to-white'
            : 'bg-white'
      }`}
    >
      <div className="container-page">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-3xl">
            <p
              className={`mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${
                dark ? 'text-gold-400' : 'text-gold-600'
              }`}
            >
              <ShieldCheck className="size-4" aria-hidden />
              {eyebrow}
            </p>
            <h2
              className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${
                dark ? 'text-white' : 'text-ink-950'
              }`}
            >
              {title}
            </h2>
            {intro && (
              <p
                className={`mt-4 text-lg leading-relaxed ${dark ? 'text-ink-200' : 'text-ink-700'}`}
              >
                {intro}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={atStart}
              aria-label="Previous testimonials"
              className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-35 ${
                dark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-ink-200 text-ink-900 hover:bg-ink-50'
              }`}
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={atEnd}
              aria-label="More testimonials"
              className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-35 ${
                dark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-ink-200 text-ink-900 hover:bg-ink-50'
              }`}
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>
        </div>

        {/*
          `tabIndex={0}` and a label make the rail itself a focusable scroll
          region, which is what lets a keyboard user page through it with the
          arrow keys. Without it the rail is reachable only by tabbing card to
          card, which is twenty-one stops.
        */}
        <ul
          ref={railRef}
          onScroll={sync}
          tabIndex={0}
          aria-label="Customer video testimonials"
          className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 sm:mx-0 sm:px-0"
        >
          {rail.map((t) => (
            <li key={t.id} className="w-[78vw] shrink-0 snap-start sm:w-[20rem] lg:w-[24rem]">
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>

        {showCta && (
          <div className="mt-8">
            <Link
              href="/testimonials"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600 ${
                dark ? 'text-white' : 'text-ink-900'
              }`}
            >
              Watch every customer video
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
