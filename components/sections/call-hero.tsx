import { readFileSync } from 'node:fs'
import path from 'node:path'
import { CalendarDays, CheckCircle2, Phone } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { Button } from '@/components/ui/button'

/**
 * Hero for the Google Ads landing page (/dfw-gate-repair) ONLY.
 *
 * It used to be shared with the homepage; the site owner asked on 26 Oct 2026
 * that landing-page changes never reach the homepage, and the homepage went
 * back to its original hero (components/sections/hero.tsx).
 *
 * Client requests built in (25-26 Oct 2026): one headline, "Expert Automatic
 * Gate Repair", in a heavier face and centred; an illustrated dusk gate behind
 * it with a dark overlay for readability; narrower, centred buttons with a
 * small gap. "We Repair Before We Replace" sits further down the page.
 */
export function CallHero({
  artSrc,
  estimateHref,
  headlineFontClass,
}: {
  /** Illustrated background: a static SVG under /public, inlined at build time. */
  artSrc: string
  estimateHref: string
  /** next/font className for the headline face, loaded only on that page. */
  headlineFontClass: string
}) {
  const noFee = fact(business.noServiceCallFee)
  const trustPoints: [string, string][] = [
    ...(noFee ? ([['No Service', 'Call Fee']] as [string, string][]) : []),
    ['Licensed &', 'Insured'],
    ['All Major', 'Gate Brands'],
  ]

  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <div className="absolute inset-0 -z-10">
        {/* Inlined, not an <img>: it paints with the HTML instead of waiting as
            the page's Largest Contentful Paint (was ~1.6 s render delay on a
            phone, 26 Oct 2026). The SVG's own `slice` makes it cover. */}
        <div
          aria-hidden
          className="absolute inset-0 [&>svg]:size-full"
          dangerouslySetInnerHTML={{ __html: readFileSync(path.join(process.cwd(), 'public', artSrc), 'utf8') }}
        />
        {/* Lighter at the top so the gate reads, dark under the text. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_9_11/0.25)_0%,rgb(8_9_11/0.45)_40%,rgb(8_9_11/0.75)_75%,rgb(8_9_11/0.9)_100%)]" />
      </div>

      <div className="container-page relative pb-[clamp(1.5rem,5vw,4rem)] pt-[clamp(1.25rem,6vw,4rem)]">
        <div className="mx-auto max-w-3xl">
          <h1
            className={`${headlineFontClass} text-center text-[clamp(1.7rem,7.6vw,3.6rem)] leading-[1.08] text-white [text-shadow:0_2px_14px_rgb(0_0_0/0.55)]`}
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

          <div className={`mx-auto mt-[clamp(1rem,4vw,2.25rem)] flex w-[90%] max-w-md flex-col gap-2`}>
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

