import { Phone } from 'lucide-react'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { business } from '@/content/business'
import { Button } from '@/components/ui/button'
import type { MediaImage } from '@/content/media-manifest'

/** Interior page hero. Real photograph as the LCP element, never a video. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  meta,
}: {
  eyebrow?: string
  title: string
  intro: string
  image?: MediaImage
  meta?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {image && (
        <div className="absolute inset-0 -z-10">
          <ResponsiveImage image={image} alt="" priority fill sizes="100vw" className="object-cover" />
          {/* Lightened to match the homepage hero, which was reduced when the
              client said the site was too dark. This component backs every
              brand, service and legal page, so leaving it at 95/85/55 meant
              most of the site kept the heavy treatment the homepage had
              dropped — and it buried photographs like the FAAC enclosure that
              are on the page specifically to be recognised.

              White display type over 0.82 still clears AA comfortably. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink-950/82 via-ink-950/64 to-ink-950/28"
            aria-hidden
          />
          {/* Warm lift on the image side so it reads as daylight. */}
          <div
            className="absolute inset-0 bg-[radial-gradient(65%_60%_at_80%_25%,rgb(245_179_42/0.14)_0%,transparent_70%)]"
            aria-hidden
          />
        </div>
      )}

      <div className="container-page relative py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">{eyebrow}</p>
          )}
          <h1 className="font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-100">{intro}</p>
          {meta && <p className="mt-4 text-sm text-ink-300">{meta}</p>}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phone.href} size="lg">
              <Phone className="size-5" aria-hidden />
              Call {business.phone.display}
            </Button>
            <Button href="/contact" variant="ghostDark" size="lg">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
