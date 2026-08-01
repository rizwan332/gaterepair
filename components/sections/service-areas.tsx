import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { tier1Cities, cities } from '@/content/cities'
import { Button } from '@/components/ui/button'

/**
 * Service areas.
 *
 * Every city on the client's list gets its own page — see CITY-PAGES.md for why
 * that is defensible and what each page must contain. The homepage surfaces the
 * fifteen Tier 1 cities with their real response bands; competitors publish no
 * response times at all.
 */
export function ServiceAreas() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">Where we work</p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Serving {cities.length}+ Cities Across North Texas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              From Dallas and Fort Worth out to Weatherford, Denton, Sherman and Stephenville. Here are the
              cities we reach fastest.
            </p>
          </div>
          <Button href="/service-areas" variant="secondary" size="md" className="shrink-0">
            All service areas
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tier1Cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/gate-repair-${city.slug}-tx`}
                className="card-light group flex items-center justify-between gap-4 px-5 py-4"
              >
                <span className="inline-flex items-center gap-2.5">
                  <MapPin className="size-4 shrink-0 text-ink-400" aria-hidden />
                  <span className="font-medium text-ink-950">{city.name}</span>
                </span>
                {city.responseBand && (
                  <span className="shrink-0 text-xs font-medium text-ink-500">{city.responseBand}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-ink-500">
          Arrival times are typical, not guaranteed &mdash; traffic on I-35, US-75 and the tollways moves
          them around. We give you a real window when you call.
        </p>
      </div>
    </section>
  )
}
