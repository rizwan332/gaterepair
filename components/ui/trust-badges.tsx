import { BadgeCheck, CalendarCheck, Clock, Building2 } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'

/**
 * The four trust badges from the client's brief (6 Aug 2026).
 *
 * One component because they appear on every page. They were previously
 * duplicated in three places — the homepage hero, the contact page and the
 * landing page renderer — which meant three copies of the same list to keep in
 * step, and the brief explicitly asks for no duplicate code.
 *
 * "16+" reads from the confirmed `yearsInBusiness` fact rather than being
 * typed, so it can never drift, and degrades to a wording that needs no number
 * if that fact is ever cleared.
 *
 * On "Licensed & Insured": see business.licensedInsured. It is the owner's own
 * assertion about his company, recorded as such, and distinct from `license`
 * and `insurance`, which hold the number and carrier and stay unconfirmed. No
 * specific licence number is claimed anywhere.
 */
export function TrustBadges({
  tone = 'dark',
  className = '',
}: {
  /** `dark` for photo/ink backgrounds, `light` for white sections. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  const years = fact(business.yearsInBusiness)

  const badges = [
    { icon: BadgeCheck, label: 'Licensed & Insured' },
    { icon: CalendarCheck, label: years ? `${years}+ Years Experience` : 'Experienced Technicians' },
    { icon: Clock, label: 'Open 24/7' },
    { icon: Building2, label: 'Residential & Commercial' },
  ]

  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {badges.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className={`inline-flex items-center gap-2 text-sm font-medium ${
            tone === 'dark' ? 'text-ink-100' : 'text-ink-700'
          }`}
        >
          <Icon
            className={`size-[1.125rem] shrink-0 ${
              tone === 'dark' ? 'text-success-400' : 'text-success-600'
            }`}
            aria-hidden
          />
          {label}
        </li>
      ))}
    </ul>
  )
}
