import Link from 'next/link'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { ArrowRight } from 'lucide-react'
import { services } from '@/content/services'
import { media } from '@/content/media-manifest'

/** Every card carries a real photograph from the client's own job library. */
export function ServicesGrid() {
  return (
    <section className="section bg-ink-50">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">What we fix</p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Gate Repair Services Across Dallas&ndash;Fort Worth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Residential driveways, commercial entrances, HOA communities and industrial yards. Every photo
            below is a real Shield job.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const image = media[service.mediaCategory]?.[1] ?? media[service.mediaCategory]?.[0]
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-ink-100 bg-white transition-all duration-200 hover:border-ink-200 hover:shadow-[var(--shadow-lift)]"
                >
                  {image && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                      <ResponsiveImage
                        image={image}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-semibold text-ink-950">{service.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                      {service.symptoms[0]?.seeing}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 transition-colors group-hover:text-gold-600">
                      Read more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
