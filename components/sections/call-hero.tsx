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
 * The gold top lines, the "Gate Problems?" headline and the gold advantages
 * strip were removed at the site owner's request (25 Oct 2026), and on
 * 26 Oct the client cut the H1 to "Expert Automatic Gate Repair" alone and
 * asked for narrower, centred buttons. "We Repair Before We Replace" moved
 * further down the Ads landing page.
 */
export function CallHero({
  image,
  sizes = '100vw',
  estimateHref,
  ads = false,
  headlineFontClass = '',
}: {
  image?: MediaImage
  sizes?: string
  estimateHref: string
  /** Ads landing page (client, 26 Oct 2026): centred heavier headline, darker photo, tighter buttons. */
  ads?: boolean
  /** next/font className for the ads headline face, loaded only on that page. */
  headlineFontClass?: string
}) {
  const noFee = fact(business.noServiceCallFee)
  const trustPoints: [string, string][] = [
    ...(noFee ? ([['No Service', 'Call Fee']] as [string, string][]) : []),
    ['Licensed &', 'Insured'],
    ['All Major', 'Gate Brands'],
  ]

  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {image && (
        <div className="absolute inset-0 -z-10">
          <ResponsiveImage image={image} alt="" priority fill sizes={sizes} className="object-cover object-top" />
          {/* Lighter at the top so the gate reads, dark under the text. Darkened slightly 26 Oct 2026. */}
          <div
            className={`absolute inset-0 ${
              ads
                ? 'bg-[linear-gradient(180deg,rgb(8_9_11/0.5)_0%,rgb(8_9_11/0.66)_25%,rgb(8_9_11/0.84)_50%,rgb(8_9_11/0.94)_75%,rgb(8_9_11/0.97)_100%)]'
                : 'bg-[linear-gradient(180deg,rgb(8_9_11/0.3)_0%,rgb(8_9_11/0.5)_22%,rgb(8_9_11/0.78)_45%,rgb(8_9_11/0.92)_70%,rgb(8_9_11/0.96)_100%)]'
            }`}
          />
        </div>
      )}

      <div className="container-page relative pb-[clamp(1.5rem,5vw,4rem)] pt-[clamp(1.25rem,6vw,4rem)]">
        <div className="max-w-3xl">
          <h1
            className={`text-white [text-shadow:0_2px_14px_rgb(0_0_0/0.55)] ${
              ads
                ? `${headlineFontClass} text-center text-[clamp(1.7rem,7.6vw,3.6rem)] leading-[1.08]`
                : 'font-display text-[clamp(1.75rem,8vw,3.5rem)] font-bold leading-[1.1] tracking-tight'
            }`}
          >
            Expert Automatic Gate Repair
          </h1>

          <ul className="mt-[clamp(0.9rem,3.6vw,2rem)] grid grid-cols-3 gap-[clamp(0.4rem,2vw,1.5rem)]">
            {trustPoints.map(([a, b]) => (
              <li key={a} className="flex items-center gap-[clamp(0.35rem,1.6vw,0.9rem)] text-[clamp(0.8rem,3.3vw,1.4rem)] font-semibold leading-tight text-white">
                <CheckCircle2 className="size-[clamp(1.3rem,5.4vw,3rem)] shrink-0 text-success-400" strokeWidth={2.25} aria-hidden />
                <span>
                  <span className="block">{a}</span>
                  <span className="block">{b}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className={`mx-auto mt-[clamp(1rem,4vw,2.25rem)] flex w-[90%] max-w-md flex-col ${ads ? 'gap-2' : 'gap-[clamp(0.6rem,2vw,1rem)]'}`}>
            <Button
              href={business.phone.href}
              size="lg"
              className="h-[clamp(3.25rem,10.5vw,4rem)] w-full whitespace-nowrap px-3 text-[clamp(0.95rem,4.1vw,1.35rem)] font-bold uppercase tracking-wide tabular shadow-[0_10px_30px_-10px_rgb(245_179_42/0.7)]"
            >
              <Phone className="size-[clamp(1.3rem,5vw,1.75rem)]" aria-hidden />
              Call Now — {business.phone.display}
            </Button>
            <Button
              href={estimateHref}
              variant="ghostDark"
              size="lg"
              className="h-[clamp(2.9rem,9.5vw,3.6rem)] w-full text-[clamp(0.9rem,3.9vw,1.25rem)] font-bold uppercase tracking-wide"
            >
              <CalendarDays className="size-[clamp(1.2rem,4.6vw,1.6rem)]" aria-hidden />
              Get a Free Estimate
            </Button>
          </div>

          <p className="mt-[clamp(0.75rem,3vw,1.5rem)] text-center text-[clamp(0.85rem,3.3vw,1.3rem)] text-ink-100">
            Professional Gate Repair &bull; Residential &amp; Commercial
          </p>
        </div>
      </div>
    </section>
  )
}

