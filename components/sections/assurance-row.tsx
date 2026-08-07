import type { LucideIcon } from 'lucide-react'

/**
 * Assurance row — replaces the number-and-label stat blocks.
 *
 * Those blocks read "21 / customer videos", "17 / operator brands", "24/7 /
 * including holidays". A raw count is a weak signal: it invites the reader to
 * decide whether the number is impressive, and the honest answer to "is 17 a
 * lot of brands" is that nobody knows. Worse, they date badly — every one was
 * derived from an array length, so the site quietly announces a smaller number
 * the day a video is unpublished.
 *
 * This says the thing the number was standing in for instead, which is both
 * more persuasive and true regardless of how the arrays change.
 *
 * One component for all three pages; /testimonials and /service-areas each had
 * their own private copy of the old Stat, which is exactly the duplication the
 * brief asks to avoid.
 */
export type AssurancePoint = {
  icon: LucideIcon
  title: string
  body: string
}

export function AssuranceRow({
  points,
  className = '',
}: {
  points: AssurancePoint[]
  className?: string
}) {
  return (
    <ul className={`grid gap-4 sm:grid-cols-3 ${className}`}>
      {points.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className="group relative overflow-hidden rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 transition-all duration-200 hover:border-gold-300 hover:shadow-[var(--shadow-card)]"
        >
          {/* A hairline of gold that fills in on hover. Cheap, and it gives the
              row a deliberate feel without adding an animation to the page. */}
          <span
            className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full"
            aria-hidden
          />
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gold-500/12 text-gold-600 ring-1 ring-inset ring-gold-500/20">
            <Icon className="size-5" aria-hidden />
          </span>
          <h3 className="mt-3.5 font-display text-base font-semibold leading-snug text-ink-950">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{body}</p>
        </li>
      ))}
    </ul>
  )
}
