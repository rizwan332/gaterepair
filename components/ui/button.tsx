import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Gold is reserved for primary actions only. If something is gold and is not
 * the thing we most want clicked on that screen, it is a bug.
 */
const variants = {
  primary:
    'bg-gold-500 text-ink-950 hover:bg-gold-400 active:bg-gold-600 shadow-[0_1px_2px_rgb(8_23_38/0.12)]',
  secondary:
    'bg-white text-ink-900 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 active:bg-ink-100',
  ghostDark:
    'bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/20 backdrop-blur-sm',
  dark: 'bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-950',
} as const

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-5 text-[0.95rem]',
  // Emergency traffic is mobile and often one-handed. Primary CTAs stay large.
  lg: 'h-14 px-7 text-base',
} as const

type Props = {
  href: string
  children: React.ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  /** Set for tel: and mailto: links so Next renders a plain anchor. */
  external?: boolean
  'aria-label'?: string
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external,
  ...rest
}: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight',
    'transition-colors duration-150 select-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (external || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}
