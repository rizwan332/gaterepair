import { Phone, ShieldCheck, Clock, Star, Wrench } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { media } from '@/content/media-manifest'
import { videos } from '@/content/video-manifest'

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
export function Hero() {
  // The client picked the homepage imagery himself (3 Aug 2026). `homepage-03`
  // is the technician mid-repair on an All-O-Matic controller — the right hero
  // for a company whose whole argument is that it repairs rather than replaces,
  // and the only one of the three with no identifying background detail.
  //
  // `homepage-04` is the shot he originally sent as a 160px screenshot
  // (client-assets/reference/Home-Page.webp) and re-supplied on 4 Aug 2026 at
  // 5712px: a Texas brick house, a US flag, and a real driveway gate. It is the
  // only hero candidate that is unambiguously North Texas, and at full
  // resolution it is the only one that holds up on a wide desktop.
  //
  // Falls back through the earlier picks so the hero never renders empty if the
  // media library is regenerated before this image is processed.
  const hero =
    media['homepage']?.[3] ??
    media['homepage']?.[2] ??
    media['gate-installation']?.[3] ??
    media['gate-installation']?.[0]
  const rating = fact(business.rating)
  const license = fact(business.license)
  const years = fact(business.yearsInBusiness)
  const responseBand = fact(business.responseBand)

  // Proof chips degrade to what is actually verified. Never invent these.
  const proof: { icon: typeof Star; label: string }[] = []
  if (rating && rating.count > 0) {
    proof.push({ icon: Star, label: `${rating.score} · ${rating.count.toLocaleString()} Google reviews` })
  }
  if (license) proof.push({ icon: ShieldCheck, label: `TX Licensed ${license}` })
  if (years && years > 0) proof.push({ icon: Wrench, label: `${years}+ years in DFW` })
  if (responseBand) proof.push({ icon: Clock, label: `Typical arrival ${responseBand}` })
  // Always true, and enough to keep the row from collapsing to nothing.
  proof.push({ icon: Wrench, label: `${videos.length} repairs on video` })
  proof.push({ icon: Clock, label: 'Open 24 hours, 7 days' })

  return (
    <section className="surface-dark glow-gold grid-lines relative isolate overflow-hidden">
      {hero && (
        <div className="absolute inset-0 -z-10">
          <ResponsiveImage image={hero} alt="" priority fill sizes="100vw" className="object-cover" />
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
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] px-4 py-2 text-[0.8125rem] font-medium text-white ring-1 ring-inset ring-white/15 backdrop-blur-sm">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success-400" />
            </span>
            Technicians available now &mdash; {business.serviceArea.primary}
          </p>

          <h1 className="font-display text-[2.75rem] font-bold leading-[0.98] text-white sm:text-6xl lg:text-[4.75rem]">
            Gate Stuck?
            <br />
            <span className="text-gradient-gold">We&rsquo;ll Have It Working Today.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200 sm:text-xl">
            Same-day automatic gate repair across Dallas&ndash;Fort Worth. Our technicians carry parts for
            LiftMaster, FAAC, Elite, All-O-Matic, Viking, Eagle and Ramset operators &mdash; so most repairs
            finish on the first visit.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phone.href} size="lg" className="tabular">
              <Phone className="size-5" aria-hidden />
              Call {business.phone.display}
            </Button>
            <Button href="/contact" variant="ghostDark" size="lg">
              Get a Free Estimate
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {proof.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm text-ink-300">
                <Icon className="size-4 shrink-0 text-gold-400" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
