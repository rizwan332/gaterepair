import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/content/services'
import { media } from '@/content/media-manifest'
import { videosFor } from '@/content/video-manifest'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { Reveal } from '@/components/ui/reveal'

/**
 * Services.
 *
 * The previous version was four identical photo-title-arrow cards — the single
 * most template-like block on the site, and precisely what every WordPress
 * theme ships. Three changes fix it:
 *
 *  - the two services carrying the positioning (gate motor repair, emergency)
 *    are promoted to a large editorial treatment, so the grid has a deliberate
 *    focal point instead of eight equal weights;
 *  - each card leads with the *symptom* rather than the service name, because
 *    that is how people actually describe the problem to us;
 *  - cards backed by video say so — a differentiator no competitor can match
 *    and one that was previously invisible at this level.
 */
export function ServicesGrid() {
  const [primary, secondary, ...rest] = services

  return (
    <section className="section bg-ink-50">
      <div className="container-page">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">What we fix</p>
              <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
                Tell us what the gate is doing.
                <br />
                We&rsquo;ll tell you what&rsquo;s wrong.
              </h2>
            </div>
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
              Most gate faults announce themselves in a fairly specific way. Every service page opens with a
              symptom table, so you can match what your gate is doing before you call.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {[primary, secondary].filter(Boolean).map((service, i) => {
            const image = media[service.mediaCategory]?.[1] ?? media[service.mediaCategory]?.[0]
            const hasVideo = videosFor(service.mediaCategory).length > 0
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-ink-950 p-7 sm:min-h-[26rem]"
                >
                  {image && (
                    <div className="absolute inset-0">
                      <ResponsiveImage
                        image={image}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(8_9_11/0.95)_0%,rgb(8_9_11/0.6)_45%,rgb(8_9_11/0.15)_100%)]" />
                    </div>
                  )}
                  <div className="relative">
                    {hasVideo && (
                      <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-300 ring-1 ring-inset ring-gold-500/30">
                        Watch the repair
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {service.name}
                    </h3>
                    <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-200">
                      &ldquo;{service.symptoms[0]?.seeing}&rdquo; &mdash;{' '}
                      {service.symptoms[0]?.means.charAt(0).toLowerCase()}
                      {service.symptoms[0]?.means.slice(1)}.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                      See the full symptom table
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service, i) => {
            const image = media[service.mediaCategory]?.[0]
            const hasVideo = videosFor(service.mediaCategory).length > 0
            return (
              <Reveal as="li" key={service.slug} delay={Math.min(i, 4) * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="card-light group flex h-full items-center gap-4 p-4"
                >
                  {image && (
                    <span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-ink-100">
                      <ResponsiveImage image={image} fill sizes="64px" className="object-cover" />
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[0.9375rem] font-semibold text-ink-950">
                      {service.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-ink-500">
                      {hasVideo ? 'Photos + video' : 'Real job photos'}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
