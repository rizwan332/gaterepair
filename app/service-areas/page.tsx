import type { Metadata } from 'next'
import Link from 'next/link'
import { cities, citiesByCounty, tier1Cities, publishedCities } from '@/content/cities'
import { business } from '@/content/business'
import { PageHero } from '@/components/sections/page-hero'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { media } from '@/content/media-manifest'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Service Areas | Gate Repair Across North Texas | Shield Gate Repair',
  description: `Automatic gate repair across ${cities.length}+ cities in Dallas–Fort Worth and North Texas. Open 24/7. Call ${business.phone.display}.`,
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreasPage() {
  const grouped = citiesByCounty()
  const publishedSlugs = new Set(publishedCities.map((c) => c.slug))

  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title={`Gate Repair Across ${cities.length}+ North Texas Cities`}
        intro="From Dallas and Fort Worth out to Weatherford, Sherman, Stephenville and Gun Barrel City. If your city is on this list, we cover it."
        image={media['gate-installation']?.[5]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-3 font-display text-2xl font-bold text-ink-950">
            Where we get to fastest
          </h2>
          <p className="mb-8 max-w-2xl text-ink-700">
            These are the cities closest to our coverage core, with published typical arrival times. No
            other gate company in Dallas&ndash;Fort Worth publishes response times at all.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {publishedCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/gate-repair-${city.slug}-tx`}
                  className="flex items-center justify-between gap-4 rounded-[var(--radius-card)] border border-ink-100 bg-white px-5 py-4 transition-all hover:border-ink-200 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="font-medium text-ink-950">{city.name}</span>
                  {city.responseBand && (
                    <span className="shrink-0 text-xs font-medium text-ink-500">{city.responseBand}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-3 font-display text-2xl font-bold text-ink-950">Every city we serve</h2>
          <p className="mb-10 max-w-2xl text-ink-700">
            Grouped by county. Travel times to the outer cities are longer &mdash; we will give you an honest
            window when you call rather than a number that sounds good. Cities shown in white have a detailed
            local page; we cover every city on this list either way.
          </p>

          <div className="space-y-10">
            {Object.entries(grouped).map(([county, list]) => (
              <div key={county}>
                <h3 className="mb-4 font-display text-lg font-semibold text-ink-950">
                  {county}
                  <span className="ml-2 text-sm font-normal text-ink-500">({list.length})</span>
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {list.map((city) =>
                    publishedSlugs.has(city.slug) ? (
                      <li key={city.slug}>
                        <Link
                          href={`/gate-repair-${city.slug}-tx`}
                          className="inline-block rounded-lg border border-ink-300 bg-white px-3.5 py-2 text-sm font-medium text-ink-950 transition-colors hover:border-gold-500"
                        >
                          {city.name}
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={city.slug}
                        className="inline-block rounded-lg border border-ink-100 bg-ink-50 px-3.5 py-2 text-sm text-ink-700"
                      >
                        {city.name}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Service Areas', url: '/service-areas' },
            ]),
          ),
        }}
      />
    </>
  )
}
