import { Phone, BadgeCheck } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { TrustBadges } from '@/components/ui/trust-badges'
import { media } from '@/content/media-manifest'

/**
 * Hero — the five-second moment.
 *
 * Three deliberate choices:
 *
 * 1. The LCP element is a photograph, never a video. A full-bleed background
 *    video is incompatible with the performance target; the source clips run
 *    1.5–8 MB and would land directly on LCP. Video earns its keep below the
 *    fold, where it is the one thing no DFW competitor has.
 *
 * 2. The headline opens on the reader's situation, not the company. The best
 *    competitor hero in this market — Star Gate's "Dallas Gate Repair & Fence
 *    Installation: Same-Day Emergency Service" — is still a service
 *    description. Metro's is "Metro Gate Repair Gate Repair Dallas TX".
 *
 * 3. Proof sits *inside* the hero rather than in a strip below it. The previous
 *    version pushed every trust signal below the fold, which reproduced the
 *    exact failure the old WordPress site was rejected for.
 */
/**
 * The hero photograph, resolved at module scope so the homepage can preload
 * exactly the image this component renders.
 *
 * It has to be exported rather than duplicated: the LCP element is a hand-built
 * <picture> served from the CDN, so Next emits no preload for it, and a preload
 * whose srcset does not match the rendered <source> character for character
 * makes the browser download the image twice. One source of truth avoids that.
 *
 * The client picked the homepage imagery himself (3 Aug 2026). `homepage-03`
 * is the technician mid-repair on an All-O-Matic controller — the right hero
 * for a company whose whole argument is that it repairs rather than replaces,
 * and the only one of the three with no identifying background detail.
 *
 * `homepage-04` is the shot he originally sent as a 160px screenshot
 * (client-assets/reference/Home-Page.webp) and re-supplied on 4 Aug 2026 at
 * 5712px: a Texas brick house, a US flag, and a real driveway gate. It is the
 * only hero candidate that is unambiguously Dallas–Fort Worth, and at full
 * resolution it is the only one that holds up on a wide desktop.
 *
 * Falls back through the earlier picks so the hero never renders empty if the
 * media library is regenerated before this image is processed.
 */
export const heroImage =
  media['homepage']?.[3] ??
  media['homepage']?.[2] ??
  media['gate-installation']?.[3] ??
  media['gate-installation']?.[0]

/** Must match the `sizes` passed to the hero's ResponsiveImage exactly. */
export const HERO_SIZES = '100vw'

export function Hero() {
  // Confirmed 3 Aug 2026 from the client's own About copy. The only substantial
  // experience credential the business has confirmed, and it was previously
  // rendered nowhere above the fold — the pill carried the service area, which
  // the sub-headline and the header strip both already state.
  const years = fact(business.yearsInBusiness)

  const hero = heroImage
  return (
    <section className="surface-dark glow-gold grid-lines relative isolate overflow-hidden">
      {hero && (
        <div className="absolute inset-0 -z-10">
          <ResponsiveImage image={hero} alt="" priority fill sizes={HERO_SIZES} className="object-cover" />
          {/* Four-stop scrim. A single flat overlay flattens the photograph into
              grey; this keeps depth on the right while holding contrast across
              the headline column on the left.

              Lightened on 3 Aug 2026 — the client's note was "the front page
              it's too dark put more light". The left stop dropped 0.97 → 0.84
              and the right 0.35 → 0.12, which lets the actual photograph show
              through instead of reading as a black panel. White display type
              over 0.84 still clears AA comfortably, so nothing was traded for
              the brightness. */}
          <div
            className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_9_11/0.84)_0%,rgb(8_9_11/0.68)_42%,rgb(8_9_11/0.34)_72%,rgb(8_9_11/0.12)_100%)]"
            aria-hidden
          />
          {/* Warm lift in the top-right so the image reads as daylight rather
              than a night job. */}
          <div
            className="absolute inset-0 bg-[radial-gradient(70%_60%_at_78%_18%,rgb(245_179_42/0.16)_0%,transparent_70%)]"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950/85 to-transparent"
            aria-hidden
          />
        </div>
      )}

      <div className="container-page relative py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Was a pulsing dot; the client asked for a green verified check.
              It also drops an infinite CSS animation from above the fold. */}
          {/* max-w-full is defensive only: the pill is a non-shrinking
              inline-flex holding a long string, and the hero clips overflow.
              Measured at a 375px viewport it fits (scrollWidth == clientWidth),
              so nothing here wraps today — this just guarantees it degrades by
              wrapping rather than by losing text if the metro name grows. */}
          <p className="mb-6 inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full bg-white/[0.07] px-4 py-2 text-[0.8125rem] font-medium text-white ring-1 ring-inset ring-white/15 backdrop-blur-sm">
            <BadgeCheck className="size-4 shrink-0 text-success-400" aria-hidden />
            Technicians available now
            {years ? ` — ${years}+ years across DFW` : ` — ${business.serviceArea.display}`}
          </p>

          {/* The H1 carries the location, because the <title> does and the two
              should not disagree — that was the single biggest relevance loss
              on the page. It previously read "Professional Gate Repair &
              Automatic Gate Services": an unfalsifiable adjective, no city, and
              the gold emphasis spent on "automatic gate services", the vaguest
              phrase in the target set and the one with the least commercial
              intent behind it. */}
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.02] text-white sm:text-5xl lg:text-[4rem]">
            Automatic Gate Repair in{' '}
            <span className="text-gradient-gold">Dallas&ndash;Fort Worth</span>
          </h1>

          {/* No longer repeats the metro name now that the H1 states it. */}
          <p className="mt-6 max-w-2xl font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
            Residential, commercial, HOA and industrial &mdash; most repairs finished on the first visit
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
            Our technicians carry parts for LiftMaster, DoorKing, FAAC, Elite, Viking, Ramset and more
            &mdash; on the truck, not on order.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phone.href} size="lg" className="tabular">
              <Phone className="size-5" aria-hidden />
              Call Now &mdash; {business.phone.display}
            </Button>
            <Button href="/contact" variant="ghostDark" size="lg">
              Request Service
            </Button>
          </div>

          <TrustBadges className="mt-10" />
        </div>
      </div>
    </section>
  )
}
