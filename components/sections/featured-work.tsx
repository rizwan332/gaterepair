import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { media } from '@/content/media-manifest'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { Reveal } from '@/components/ui/reveal'

/**
 * Featured work — the three photographs the client picked for the homepage
 * himself (supplied 3 Aug 2026, sources in client-assets/homepage/).
 *
 * Kept in its own `homepage` media category rather than pulled from the shared
 * service categories, so re-indexing the library can never quietly swap out an
 * image the client chose personally.
 */
export function FeaturedWork() {
  const images = media['homepage'] ?? []
  if (images.length === 0) return null

  return (
    <section className="section bg-gradient-to-b from-white to-sky-50">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
                Recent work
              </p>
              <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                Real gates, real repairs
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                Every photograph on this site is our own technicians on our own jobs. None of it is stock,
                and none of it is generated.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600"
            >
              See the full case studies
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 3).map((image, i) => (
            <Reveal as="li" key={image.slug} delay={i * 0.06}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-ink-100 shadow-[var(--shadow-card)]">
                <ResponsiveImage
                  image={image}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
