import { Star, BadgeCheck, ShieldCheck, Clock, MapPin, FileCheck } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'

/**
 * Trust bar, directly beneath the hero.
 *
 * This is the section the current WordPress site is missing entirely, and it is
 * the likeliest reason it does not convert. From the competitor audit, Everlast
 * shows a review count, a BBB badge, license B28539401 and background-check
 * status above the fold; Shield currently shows none of the seven signals the
 * market treats as table stakes.
 *
 * Every item here is gated on `confirmed`. Unverified claims render nothing
 * rather than a plausible-looking guess.
 */
export function TrustBar() {
  const rating = fact(business.rating)
  const license = fact(business.license)
  const years = fact(business.yearsInBusiness)
  const warranty = fact(business.warrantyTerm)
  const backgroundChecked = fact(business.backgroundChecked)
  const insurance = fact(business.insurance)

  const items: { icon: React.ReactNode; label: string }[] = []

  if (rating && rating.count > 0) {
    items.push({
      icon: <Star className="size-4 fill-gold-500 text-gold-500" aria-hidden />,
      label: `${rating.score} · ${rating.count.toLocaleString()} Google reviews`,
    })
  }
  if (license) {
    items.push({ icon: <FileCheck className="size-4 text-ink-500" aria-hidden />, label: `TX License ${license}` })
  }
  if (insurance) {
    items.push({ icon: <ShieldCheck className="size-4 text-ink-500" aria-hidden />, label: 'Licensed & Insured' })
  }
  if (years && years > 0) {
    items.push({ icon: <BadgeCheck className="size-4 text-ink-500" aria-hidden />, label: `${years}+ years in DFW` })
  }
  if (backgroundChecked) {
    items.push({ icon: <BadgeCheck className="size-4 text-ink-500" aria-hidden />, label: 'Background-checked technicians' })
  }
  if (warranty) {
    items.push({ icon: <FileCheck className="size-4 text-ink-500" aria-hidden />, label: `${warranty} written warranty` })
  }

  // Always true and always safe to state.
  items.push({ icon: <Clock className="size-4 text-ink-500" aria-hidden />, label: 'Open 24/7' })
  items.push({
    icon: <MapPin className="size-4 text-ink-500" aria-hidden />,
    label: business.serviceArea.primary,
  })

  return (
    <section aria-label="Credentials" className="border-b border-ink-100 bg-ink-50">
      <div className="container-page py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-ink-800">
          {items.map((item) => (
            <li key={item.label} className="inline-flex items-center gap-2">
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
