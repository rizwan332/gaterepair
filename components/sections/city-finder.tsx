'use client'

import { useMemo, useState, useDeferredValue, useId } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'

/**
 * Searchable city list.
 *
 * This is not a nicety bolted next to the map — for a large share of visitors
 * it IS the map. Someone on a phone looking for "Waxahachie" among 190 pins is
 * far better served by typing six letters than by pinch-zooming, and anyone
 * using a screen reader or keyboard has no route into a canvas-rendered
 * Leaflet layer at all.
 *
 * Filtering is plain substring matching over ~190 items, which is instant. No
 * fuzzy library, no debounce — `useDeferredValue` keeps typing responsive if a
 * slow device ever struggles.
 */

type FinderCity = {
  slug: string
  name: string
  county: string
  responseBand?: string
}

export function CityFinder({ cities }: { cities: FinderCity[] }) {
  const [query, setQuery] = useState('')
  const deferred = useDeferredValue(query)
  const inputId = useId()

  const grouped = useMemo(() => {
    const q = deferred.trim().toLowerCase()
    const matched = q
      ? cities.filter((c) => c.name.toLowerCase().includes(q) || c.county.toLowerCase().includes(q))
      : cities

    const byCounty: Record<string, FinderCity[]> = {}
    for (const city of matched) (byCounty[city.county] ??= []).push(city)
    for (const list of Object.values(byCounty)) list.sort((a, b) => a.name.localeCompare(b.name))

    return {
      count: matched.length,
      entries: Object.entries(byCounty).sort(([a], [b]) => a.localeCompare(b)),
    }
  }, [cities, deferred])

  return (
    <div>
      <div className="relative max-w-md">
        <label htmlFor={inputId} className="sr-only">
          Search for your city or county
        </label>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-400"
          aria-hidden
        />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your city or county…"
          autoComplete="off"
          className="h-14 w-full rounded-xl border border-ink-200 bg-white pl-12 pr-12 text-base text-ink-950 shadow-[var(--shadow-card)] outline-none transition-colors placeholder:text-ink-400 focus:border-gold-400"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-50 hover:text-ink-900"
          >
            <X className="size-5" aria-hidden />
          </button>
        )}
      </div>

      {/* Announced politely so a screen-reader user hears the result count
          change as they type, without the list itself being re-read. */}
      <p className="mt-3 text-sm text-ink-600" role="status" aria-live="polite">
        {grouped.count === cities.length
          ? `Showing all ${cities.length} cities`
          : `${grouped.count} ${grouped.count === 1 ? 'city' : 'cities'} matching “${deferred.trim()}”`}
      </p>

      {grouped.count === 0 ? (
        <div className="mt-8 rounded-[var(--radius-card)] border border-dashed border-ink-200 bg-white p-8 text-center">
          <p className="font-medium text-ink-950">No city by that name on our list.</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
            That does not always mean we cannot help &mdash; coverage runs past the towns we list by
            name, particularly on rural acreage. Call and we will tell you straight away.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-9">
          {grouped.entries.map(([county, list]) => (
            <div key={county}>
              <h3 className="mb-4 flex items-baseline gap-2 font-display text-lg font-semibold text-ink-950">
                {county}
                <span className="text-sm font-normal text-ink-500">
                  {list.length} {list.length === 1 ? 'city' : 'cities'}
                </span>
              </h3>
              <ul className="flex flex-wrap gap-2">
                {list.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/gate-repair-${city.slug}-tx`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-ink-200 bg-white px-3.5 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-gold-400 hover:text-ink-950"
                    >
                      {city.name}
                      {city.responseBand && (
                        <span className="text-xs font-normal text-ink-400">{city.responseBand}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
