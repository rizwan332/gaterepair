import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'
import { cities, citiesByCounty, enrichedCities } from '@/content/cities'
import { CITY_COORDINATES } from '@/content/city-coordinates'
import { business } from '@/content/business'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { CoverageExplorer, type ExplorerCity } from '@/components/sections/coverage-explorer'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Service Areas | Gate Repair Across ${cities.length} North Texas Cities | Shield Gate Repair`,
  description: `Automatic gate repair across ${cities.length} cities in Dallas–Fort Worth and North Texas. Interactive coverage map. Open 24/7. Call ${business.phone.display}.`,
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreasPage() {
  const grouped = citiesByCounty()
  const countyCount = Object.keys(grouped).length

  // Cities we could not geocode are omitted from the map rather than pinned at
  // a guessed location. They are still listed in full below, so nothing is
  // hidden from the visitor — only from the map.
  const mapCities: ExplorerCity[] = cities
    .filter((c) => CITY_COORDINATES[c.slug])
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      county: c.county,
      lat: CITY_COORDINATES[c.slug].lat,
      lng: CITY_COORDINATES[c.slug].lng,
      href: `/gate-repair-${c.slug}-tx`,
      responseBand: c.responseBand,
    }))

  return (
    <>
      {/* Compact hero. The map is the reason anyone opens this page, so it gets
          the space a full photographic PageHero would otherwise take. */}
      <section className="border-b border-ink-100 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="container-page py-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Service areas
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl">
            Gate repair across {cities.length} North Texas cities
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            From Dallas and Fort Worth out to Weatherford, Sherman, Stephenville and Gun Barrel City.
            Find your city on the map, or search the full list below.
          </p>

          <dl className="mt-9 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8">
            <Stat icon={MapPin} value={String(cities.length)} label="cities covered" />
            <Stat icon={MapPin} value={String(countyCount)} label="counties" />
            <Stat icon={Clock} value="24/7" label="including holidays" />
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.phone.href}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold-500 px-6 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" aria-hidden />
              {business.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-xl border border-ink-200 bg-white px-6 font-semibold text-ink-900 transition-colors hover:border-ink-300"
            >
              Free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Map and list side by side, sharing one piece of state. Separately
          each is weaker: the map is a picture you cannot query, and the list is
          190 names with no sense of where any of them are. */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Find your city
            </h2>
            <p className="mt-3 leading-relaxed text-ink-700">
              {cities.length} cities across {countyCount} counties, every one with its own page.
              Search the list, filter by county, or tap a pin.
            </p>
          </div>

          <CoverageExplorer cities={mapCities} />
        </div>
      </section>

      {enrichedCities.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Where we get to fastest
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
              These cities have published typical arrival times. No other gate company in
              Dallas&ndash;Fort Worth publishes response times at all.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {enrichedCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/gate-repair-${city.slug}-tx`}
                    className="flex items-center justify-between gap-4 rounded-[var(--radius-card)] border border-ink-100 bg-white px-5 py-4 transition-all hover:border-gold-400 hover:shadow-[var(--shadow-card)]"
                  >
                    <span className="font-medium text-ink-950">{city.name}</span>
                    {city.responseBand && (
                      <span className="shrink-0 text-xs font-medium text-ink-500">
                        {city.responseBand}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-500">
              Times are typical rather than guaranteed &mdash; North Texas traffic moves them around.
              You get a real arrival window when you call.
            </p>
          </div>
        </section>
      )}

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

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof MapPin
  value: string
  label: string
}) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="flex items-baseline gap-1.5 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
          <Icon className="size-5 self-center text-gold-500" aria-hidden />
          <span className="tabular">{value}</span>
        </span>
        <span className="mt-1 block text-sm text-ink-600">{label}</span>
      </dd>
    </div>
  )
}
