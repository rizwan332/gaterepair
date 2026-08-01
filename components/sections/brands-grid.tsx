import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { brands } from '@/content/brands'
import { business } from '@/content/business'
import { fact } from '@/lib/business'

/**
 * Brands we service.
 *
 * The competitive point of this section: FAAC, All-O-Matic and Ramset have no
 * dedicated page anywhere in the DFW market, and the client has real repair
 * photography and video for all three. Where competitors do have brand pages
 * (LiftMaster, Viking, Elite, Eagle), none of them has brand-specific imagery.
 *
 * The trademark disclaimer is not boilerplate — one competitor is a genuine
 * authorized LiftMaster dealer, and implying a dealer relationship the client
 * does not hold would be a real problem.
 */
export function BrandsGrid() {
  const isDealer = fact(business.authorizedDealer)

  return (
    <section className="section bg-ink-50">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Brands we service
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            We Fix the Operators Nobody Else Wants to Touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Most gate companies replace the whole operator because diagnosing it is harder than selling you a
            new one. We repair control boards, limit switches, hydraulic pumps and gearboxes on all of these
            &mdash; and we have the photos and video to prove it.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <li key={brand.slug}>
              <Link
                href={`/brands/${brand.slug}`}
                className="group flex h-full flex-col justify-between gap-3 rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 transition-all duration-200 hover:border-ink-200 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="font-display text-lg font-semibold text-ink-950">{brand.name}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-500 transition-colors group-hover:text-gold-600">
                  {brand.contested ? 'Repair & service' : 'Specialist repair'}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs leading-relaxed text-ink-500">
          {isDealer
            ? 'Brand names are the property of their respective owners.'
            : 'Brands we service. Brand names are the property of their respective owners — Shield Gate Repair is an independent repair company and is not an authorized dealer for these manufacturers.'}
        </p>
      </div>
    </section>
  )
}
