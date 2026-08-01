import { Phone, Clock, ShieldCheck } from 'lucide-react'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { Button } from '@/components/ui/button'
import { media } from '@/content/media-manifest'

/**
 * Hero.
 *
 * The LCP element is a real photograph, deliberately not a video. A full-screen
 * background video is incompatible with the performance target — the source
 * clips run 1.5–8 MB and would land squarely on LCP. Video earns its keep below
 * the fold, where it is the one thing no DFW competitor has.
 *
 * The headline opens on the reader's situation rather than the company. The
 * strongest competitor hero in this market — Star Gate's "Dallas Gate Repair &
 * Fence Installation: Same-Day Emergency Service" — is still a service
 * description. Metro's is "Metro Gate Repair Gate Repair Dallas TX".
 */
export function Hero() {
  const hero = media['gate-installation']?.[3] ?? media['gate-installation']?.[0]
  const responseBand = fact(business.responseBand)

  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {hero && (
        <div className="absolute inset-0 -z-10">
          <ResponsiveImage
            image={hero}
            alt=""
            priority
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Two-stop scrim: keeps AA contrast on the headline without washing
              the photograph out into a grey rectangle. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/80 to-ink-950/40"
            aria-hidden
          />
        </div>
      )}

      <div className="container-page relative py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success-500" />
            </span>
            Technicians available now — {business.availability.replace('Available 24/7 ', '')}
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Gate Stuck? We&rsquo;ll Have It Working Today.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-100">
            Same-day automatic gate repair across Dallas&ndash;Fort Worth. Residential, commercial, HOA and
            industrial. Our technicians carry parts for LiftMaster, FAAC, Elite, All-O-Matic, Viking, Eagle
            and Ramset operators &mdash; so most repairs finish on the first visit.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phone.href} size="lg" className="sm:w-auto">
              <Phone className="size-5" aria-hidden />
              Call {business.phone.display}
            </Button>
            <Button href="/contact" variant="ghostDark" size="lg">
              Get a Free Estimate
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-200">
            <li className="inline-flex items-center gap-2">
              <Clock className="size-4 text-gold-400" aria-hidden />
              {responseBand ? `Typical arrival ${responseBand}` : 'Open 24 hours, 7 days'}
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold-400" aria-hidden />
              Written warranty on every repair
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
