import { Phone } from 'lucide-react'
import { business } from '@/content/business'
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

      <div className="container-page relative pb-10 pt-8 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Layout from the client's 20 Oct 2026 mobile mockup: the promise is
              the big line and the H1 sits above it as a short label.

              The H1 is unchanged and still the page's only H1, so the heading
              that carries "automatic gate repair" and "Dallas–Fort Worth"
              (and matches the <title>) is exactly what search engines saw
              before. Only its size changed. The years-in-business pill went;
              the same fact is in the trust grid below, and "gate technicians"
              moved into the parts line. */}
          <h1 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-gold-300 sm:text-base">
            Automatic Gate Repair in Dallas&ndash;Fort Worth
          </h1>

          <p className="mt-3 font-display text-[1.5rem] font-bold leading-[1.18] text-white sm:mt-4 sm:text-5xl sm:leading-[1.12] lg:text-[3.5rem]">
            Trusted gate repair company for homes, HOAs and businesses.{' '}
            <span className="text-gradient-gold">Fixed right the first time, with parts on the truck.</span>
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-200 sm:mt-5 sm:text-lg">
            Our gate technicians carry parts for LiftMaster, DoorKing, FAAC, Elite, Viking, Ramset and more,
            so most repairs are done in one visit.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Button href={business.phone.href} size="lg" className="tabular">
              <Phone className="size-5" aria-hidden />
              Call Now: {business.phone.display}
            </Button>
            <Button href="/contact" variant="ghostDark" size="lg">
              Request Service
            </Button>
          </div>

          <TrustBadges layout="grid" className="mt-8 border-t border-white/10 pt-6 sm:mt-10 sm:border-0 sm:pt-0" />
        </div>
      </div>
    </section>
  )
}
