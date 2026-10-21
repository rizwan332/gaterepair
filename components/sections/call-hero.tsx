import { CalendarDays, CheckCircle2, Phone } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import type { MediaImage } from '@/content/media-manifest'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'

/**
 * The call-first hero from the client's mockup (22 Oct 2026), shared by the
 * homepage and the Google Ads landing page so the two can never drift apart.
 *
 * Sizes use clamp() against the viewport width rather than breakpoints, so the
 * headline fills the width the way the mockup does at every phone and tablet
 * size instead of jumping between three fixed sizes. The top of the photo is
 * left clear (the padding above the text scales with width) so the gate shows,
 * as in the mockup.
 *
 * `headingMode`:
 *  - 'headline' (landing page, noindex): the big "Gate Problems?" line is the H1.
 *  - 'top-line' (homepage): the small gold top line is the H1, and reads
 *    "Automatic Gate Repair · DFW & Surrounding Areas" so the heading Google
 *    ranks the homepage on still names the service and the area. The big line
 *    is then a paragraph. Chosen by the client 22 Oct 2026.
 */
export function CallHero({
  image,
  sizes = '100vw',
  headingMode,
  estimateHref,
}: {
  image?: MediaImage
  sizes?: string
  headingMode: 'headline' | 'top-line'
  estimateHref: string
}) {
  const noFee = fact(business.noServiceCallFee)
  const trustPoints: [string, string][] = [
    ...(noFee ? ([['No Service', 'Call Fee']] as [string, string][]) : []),
    ['Licensed &', 'Insured'],
    ['All Major', 'Gate Brands'],
  ]

  const TopLine = headingMode === 'top-line' ? 'h1' : 'p'
  const Headline = headingMode === 'headline' ? 'h1' : 'p'

  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {image && (
        <div className="absolute inset-0 -z-10">
          <ResponsiveImage image={image} alt="" priority fill sizes={sizes} className="object-cover object-top" />
          {/* Clear at the top so the gate reads, dark under the text. */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_9_11/0.12)_0%,rgb(8_9_11/0.35)_22%,rgb(8_9_11/0.72)_45%,rgb(8_9_11/0.9)_70%,rgb(8_9_11/0.95)_100%)]" />
        </div>
      )}

      <div className="container-page relative pb-[clamp(1.5rem,5vw,4rem)] pt-[clamp(2.5rem,16vw,9rem)]">
        <div className="max-w-3xl">
          <TopLine className="font-display text-[clamp(0.8rem,3.1vw,1.15rem)] font-semibold uppercase leading-[1.55] tracking-[0.12em] [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
            <span className="block text-gold-400">
              {headingMode === 'top-line' ? 'Automatic Gate Repair · DFW & Surrounding Areas' : 'DFW & Surrounding Areas'}
            </span>
            <span className="block text-white">Residential &amp; Commercial</span>
          </TopLine>

          <Headline className="mt-[clamp(0.5rem,2vw,1rem)] font-display text-[clamp(1.85rem,7.5vw,5rem)] font-bold leading-[1.04] tracking-tight text-white [text-shadow:0_2px_16px_rgb(0_0_0/0.5)]">
            Gate Problems?
            <span className="block text-gold-400">We Have the Solution.</span>
          </Headline>

          <p className="mt-[clamp(0.6rem,2.4vw,1.25rem)] font-display text-[clamp(1.05rem,4.6vw,2.1rem)] font-semibold leading-[1.25] text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.5)]">
            Expert Automatic Gate Repair.
            <span className="block">Fast, Reliable Service.</span>
            <span className="block text-gold-400">We Repair Before We Replace.</span>
          </p>

          <ul className="mt-[clamp(0.9rem,3.6vw,2rem)] grid grid-cols-3 gap-[clamp(0.4rem,2vw,1.5rem)]">
            {trustPoints.map(([a, b]) => (
              <li key={a} className="flex items-center gap-[clamp(0.35rem,1.6vw,0.9rem)] text-[clamp(0.74rem,3.05vw,1.3rem)] font-medium leading-tight text-white">
                <CheckCircle2 className="size-[clamp(1.6rem,7vw,3.25rem)] shrink-0 text-success-400" strokeWidth={2.25} aria-hidden />
                <span>
                  <span className="block">{a}</span>
                  <span className="block">{b}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-[clamp(1rem,4vw,2.25rem)] flex flex-col gap-[clamp(0.6rem,2vw,1rem)]">
            <Button
              href={business.phone.href}
              size="lg"
              className="h-[clamp(3.4rem,11vw,5.5rem)] w-full whitespace-nowrap px-3 text-[clamp(1rem,4.5vw,2rem)] font-bold uppercase tracking-wide tabular shadow-[0_10px_30px_-10px_rgb(245_179_42/0.7)]"
            >
              <Phone className="size-[clamp(1.4rem,5.5vw,2.4rem)]" aria-hidden />
              Call Now — {business.phone.display}
            </Button>
            <Button
              href={estimateHref}
              variant="ghostDark"
              size="lg"
              className="h-[clamp(3rem,10vw,5rem)] w-full text-[clamp(0.95rem,4.2vw,1.8rem)] font-bold uppercase tracking-wide"
            >
              <CalendarDays className="size-[clamp(1.25rem,5vw,2.2rem)]" aria-hidden />
              Get a Free Estimate
            </Button>
          </div>

          <p className="mt-[clamp(0.75rem,3vw,1.5rem)] text-center text-[clamp(0.8rem,3vw,1.2rem)] text-ink-200">
            Professional Gate Repair &bull; Residential &amp; Commercial
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * Gold advantages strip under the hero. Carries 16+ years (the client's
 * earlier brief) so the hero copy can stay exactly as he wrote it, and
 * "gate technicians", a phrase from the keyword list the homepage owns.
 */
export function AdvantagesStrip() {
  const years = fact(business.yearsInBusiness)
  const items = [
    ...(years ? [`${years}+ Years Experience`] : []),
    'Written Warranty',
    'Gate Technicians 24/7',
    'Repair Before Replace',
  ]
  return (
    <section className="bg-gold-500">
      <ul className="container-page grid grid-cols-2 gap-x-4 gap-y-2 py-4 text-sm font-semibold text-ink-950 sm:flex sm:justify-center sm:gap-x-8">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 shrink-0" aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    </section>
  )
}
