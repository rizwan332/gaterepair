'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Scroll reveal.
 *
 * Framer Motion was already in the bundle and completely unused, which is the
 * worst of both worlds — paying the bytes, getting none of the polish. This is
 * the whole of the motion vocabulary on the site: a short rise and fade, once,
 * on entry.
 *
 * Deliberately restrained. Elaborate scroll choreography reads as untrustworthy
 * on an emergency service page — the visitor has a broken gate, not time to
 * admire a parallax sequence. Under 400ms, no bounce, no stagger beyond one
 * level, and fully disabled under `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.38, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Count-up for stat numbers. Only animates once, only when in view, and renders
 * the final value immediately when motion is reduced — so the number is never
 * missing for anyone.
 */
export function CountUp({
  to,
  suffix = '',
  className,
}: {
  to: number
  suffix?: string
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <span className={className}>
        {to.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {to.toLocaleString()}
      {suffix}
    </motion.span>
  )
}
