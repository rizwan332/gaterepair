import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pricingConfirmed, priceBands } from '@/content/pricing'

/**
 * Pricing teaser.
 *
 * The largest content gap in the DFW market. Of 14 competitors audited, exactly
 * one publishes any number — a "$45 service call" hook — and one has a single
 * article covering installation cost. Nobody publishes repair ranges.
 *
 * While `pricingConfirmed` is false we make the transparency promise without
 * inventing figures. Publishing fabricated prices in a trade defined by
 * mistrust would undo the exact advantage this section exists to create.
 */
export function PricingTeaser() {
  const hasNumbers = pricingConfirmed && priceBands.some((b) => b.high > 0)

  return (
    <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Transparent pricing
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Here&rsquo;s What Gate Repair Actually Costs
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">
              Every other gate company in Dallas makes you call to find out. We don&rsquo;t think that&rsquo;s
              a great way to start a relationship with someone whose gate is already broken.
            </p>
            <p className="mt-4 leading-relaxed text-ink-300">
              {hasNumbers
                ? 'Our published ranges cover control boards, capacitors, limit switches, sensors, off-track repairs, welding and full operator replacement — based on jobs we have actually completed.'
                : 'We publish honest ranges for every repair type we do — control boards, capacitors, limit switches, sensors, off-track repairs, welding and full operator replacement. Not a binding quote; the real number comes after a technician sees the gate.'}
            </p>

            <div className="mt-8">
              <Button href="/pricing" size="lg">
                See our price ranges
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {priceBands.slice(0, 4).map((band) => (
              <li
                key={band.slug}
                className="card-dark flex items-center justify-between gap-6 p-5"
              >
                <div>
                  <p className="font-medium text-white">{band.label}</p>
                  <p className="mt-1 text-sm text-ink-300">{band.typicalVisit}</p>
                </div>
                <p className="shrink-0 font-display text-lg font-semibold text-gold-400">
                  {hasNumbers ? `$${band.low}–$${band.high}` : 'See page'}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
