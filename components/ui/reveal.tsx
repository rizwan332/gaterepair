'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Scroll reveal.
 *
 * A short rise and fade, once, on entry. That is the whole of the motion
 * vocabulary on the site — deliberately restrained, because elaborate scroll
 * choreography reads as untrustworthy on an emergency service page. The visitor
 * has a broken gate, not time to admire a parallax sequence.
 *
 * ── WHY THIS IS NOT FRAMER-MOTION ANY MORE ──────────────────────────────────
 * It was, and it cost 108 KB of JavaScript (~35 KB over the wire) on every page
 * that used it — a third of the homepage's entire First Load JS, for a fade.
 * /faq, the one content page that does not use Reveal, was 109 KB against the
 * homepage's 156 KB, which is the whole of the difference.
 *
 * Worse, framer-motion sets its `initial` state as an inline style during SSR,
 * so 42 elements of the homepage were served as `opacity:0`. Anything that
 * stops the JavaScript arriving — a failed chunk, an aggressive blocker, a
 * crawler that does not execute scripts — left that content invisible. Content
 * that is hidden by default and revealed by script is a bad bet on a page whose
 * job is to rank.
 *
 * The animation now lives entirely in CSS (see globals.css). This component
 * only observes and adds a class, so:
 *
 *  · With no JavaScript the content is simply visible. The `.js` class that
 *    arms the hidden state is set by an inline script in the document head, so
 *    it is present before first paint and there is no flash of visible content.
 *  · `prefers-reduced-motion` is handled in the stylesheet rather than here, so
 *    it applies even before hydration.
 *  · The observer disconnects after firing once. Nothing stays subscribed.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Nothing to arm: the stylesheet already renders these fully visible.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    // No IntersectionObserver (very old browsers): show it and move on rather
    // than leaving the element in its hidden state forever.
    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.reveal = 'shown'
      return
    }

    // Already past the viewport on load — reveal without waiting for a scroll
    // that may never come.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          ;(entry.target as HTMLElement).dataset.reveal = 'shown'
          observer.unobserve(entry.target)
        }
      },
      // Matches the old framer-motion `margin: '-80px'` viewport setting: the
      // element has to be 80px inside the viewport before it counts.
      { rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      // The delay is per-element and set by the caller, so it stays inline.
      // It is a custom property rather than `transition-delay` directly so the
      // stylesheet keeps ownership of the whole transition.
      style={delay ? ({ '--reveal-delay': `${delay}s` } as React.CSSProperties) : undefined}
      ref={ref as React.Ref<never>}
      data-reveal="pending"
      className={className}
    >
      {children}
    </Tag>
  )
}
