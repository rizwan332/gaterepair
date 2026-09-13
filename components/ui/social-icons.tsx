import type { ComponentType } from 'react'
import type { SocialNetwork } from '@/content/business'

/**
 * Social network marks.
 *
 * Not from lucide-react, although the rest of the site's icons are. Lucide's
 * `Instagram` and `Youtube` exist in the installed version but are marked
 * deprecated — "Brand icons have been deprecated and are due to be removed …
 * This icon will be removed in v1.0" — so importing them would put a footer
 * break on the other side of a routine dependency upgrade.
 *
 * Drawn to lucide's own grid instead: 24×24, 2px round stroke, `currentColor`,
 * so they sit beside the Phone and Mail icons without looking borrowed. Built
 * from rects, circles and one short path each — no traced logo data.
 *
 * Always rendered icon-only inside a link that carries its own `aria-label`,
 * hence `aria-hidden` here.
 */

type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false as const,
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H6v4h2v7h4v-7h2.5l.5-4H12V8a1 1 0 0 1 1-1h2Z" />
    </svg>
  )
}

/**
 * Network → mark. Every `SocialNetwork` has one, so setting a profile URL in
 * content/business.ts is the whole job: the footer picks it up with no change
 * here.
 */
export const SOCIAL_ICONS: Record<SocialNetwork, ComponentType<IconProps>> = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
}
