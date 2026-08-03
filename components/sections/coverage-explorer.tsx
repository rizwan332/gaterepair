'use client'

import { useMemo, useState, useDeferredValue, useId, useCallback } from 'react'
import Link from 'next/link'
import { Search, X, MapPin, ArrowUpRight } from 'lucide-react'
import { CoverageMap, type MapCity } from '@/components/sections/coverage-map'
import { buildCountyColors, OTHER_COLOR } from '@/lib/county-colors'

/**
 * Coverage explorer — map and city list, side by side and genuinely linked.
 *
 * Stacking them made each one worse: the map was a picture you could not query,
 * and the list was 190 names with no sense of where any of them were. Beside
 * each other, and sharing one piece of state, they answer different halves of
 * the same question — "do you cover me?" and "where is that?".
 *
 * What is shared:
 *   · typing filters the list AND dims the non-matching pins, then eases the
 *     map to the matches, so searching "Rockwall" takes you there
 *   · hovering a row enlarges its pin
 *   · clicking a row flies the map to that city and opens its popup
 *   · the county legend is a filter for both
 *
 * Layout: side by side from `lg` up, with the map sticky and the list scrolling
 * beside it. Below `lg` they stack and the list scrolls with the page — a
 * nested scroll region on a phone is a trap, not a feature.
 */

export type ExplorerCity = MapCity

export function CoverageExplorer({ cities }: { cities: ExplorerCity[] }) {
  const [query, setQuery] = useState('')
  const [activeCounty, setActiveCounty] = useState<string | null>(null)
  const [focusSlug, setFocusSlug] = useState<string | null>(null)
  const [hoverSlug, setHoverSlug] = useState<string | null>(null)
  const deferredQuery = useDeferredValue(query)
  const inputId = useId()

  const { colors, named, otherCount, counts } = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const c of cities) counts[c.county] = (counts[c.county] ?? 0) + 1
    return { ...buildCountyColors(counts), counts }
  }, [cities])

  const matched = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    return cities.filter(
      (c) =>
        (!activeCounty || c.county === activeCounty) &&
        (!q || c.name.toLowerCase().includes(q) || c.county.toLowerCase().includes(q)),
    )
  }, [cities, deferredQuery, activeCounty])

  const visibleSlugs = useMemo(() => new Set(matched.map((c) => c.slug)), [matched])

  const grouped = useMemo(() => {
    const byCounty: Record<string, ExplorerCity[]> = {}
    for (const city of matched) (byCounty[city.county] ??= []).push(city)
    for (const list of Object.values(byCounty)) list.sort((a, b) => a.name.localeCompare(b.name))
    return Object.entries(byCounty).sort(([a], [b]) => a.localeCompare(b))
  }, [matched])

  // Cleared immediately so selecting the same city twice re-triggers the fly-to.
  const handleSelect = useCallback((slug: string) => {
    setFocusSlug(slug)
    requestAnimationFrame(() => setFocusSlug(null))
  }, [])

  return (
    <div>
      {/* County legend / filter. Above both panes because it governs both. */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCounty(null)}
          aria-pressed={activeCounty === null}
          className={chip(activeCounty === null)}
        >
          All {cities.length} cities
        </button>

        {named.map((county) => (
          <button
            key={county}
            type="button"
            onClick={() => setActiveCounty(activeCounty === county ? null : county)}
            aria-pressed={activeCounty === county}
            className={chip(activeCounty === county)}
          >
            <span
              className="size-2.5 shrink-0 rounded-full ring-1 ring-inset ring-black/10"
              style={{ background: colors[county] }}
              aria-hidden
            />
            {county.replace(/ County$/, '')}
            <span className={activeCounty === county ? 'text-white/60' : 'text-ink-400'}>
              {counts[county]}
            </span>
          </button>
        ))}

        {otherCount > 0 && (
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-600">
            <span
              className="size-2.5 shrink-0 rounded-full ring-1 ring-inset ring-black/10"
              style={{ background: OTHER_COLOR }}
              aria-hidden
            />
            Other counties
            <span className="text-ink-400">{otherCount}</span>
          </span>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-start">
        {/* Map. Sticky on desktop so it stays put while the list scrolls. */}
        <div className="lg:sticky lg:top-24">
          <CoverageMap
            cities={cities}
            colors={colors}
            visibleSlugs={visibleSlugs}
            focusSlug={focusSlug}
            hoverSlug={hoverSlug}
            onSelect={handleSelect}
            className="h-[20rem] sm:h-[26rem] lg:h-[36rem]"
          />
          <p className="mt-3 text-xs text-ink-500">
            Tap a pin for details. Scroll-zoom is off so the page keeps scrolling &mdash; use the +
            and &minus; buttons, or pinch on a touchscreen.
          </p>
        </div>

        {/* List. Own scroll region only from lg up — nested scrolling on a
            phone fights the page and is a well-earned usability complaint. */}
        <div className="flex flex-col lg:h-[36rem]">
          <div className="relative">
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
              placeholder="Search your city…"
              autoComplete="off"
              className="h-13 w-full rounded-xl border border-ink-200 bg-white py-3.5 pl-12 pr-12 text-base text-ink-950 shadow-[var(--shadow-card)] outline-none transition-colors placeholder:text-ink-400 focus:border-gold-400"
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

          <p className="mt-3 shrink-0 text-sm text-ink-600" role="status" aria-live="polite">
            {matched.length === cities.length
              ? `Showing all ${cities.length} cities`
              : `${matched.length} ${matched.length === 1 ? 'city' : 'cities'}${
                  activeCounty ? ` in ${activeCounty}` : ''
                }${deferredQuery.trim() ? ` matching “${deferredQuery.trim()}”` : ''}`}
          </p>

          <div className="mt-4 min-h-0 flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-2">
            {matched.length === 0 ? (
              <div className="rounded-[var(--radius-card)] border border-dashed border-ink-200 bg-white p-8 text-center">
                <p className="font-medium text-ink-950">No city by that name on our list.</p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
                  That does not always mean we cannot help &mdash; coverage runs past the towns we
                  list by name, particularly on rural acreage. Call and we will tell you straight
                  away.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {grouped.map(([county, list]) => (
                  <div key={county}>
                    <h3 className="sticky top-0 z-10 -mx-1 flex items-center gap-2 bg-ink-50/95 px-1 py-1.5 font-display text-sm font-semibold text-ink-900 backdrop-blur-sm">
                      <span
                        className="size-2.5 shrink-0 rounded-full ring-1 ring-inset ring-black/10"
                        style={{ background: colors[county] ?? OTHER_COLOR }}
                        aria-hidden
                      />
                      {county}
                      <span className="font-normal text-ink-500">{list.length}</span>
                    </h3>
                    <ul className="mt-1.5 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {list.map((city) => (
                        <li key={city.slug}>
                          <CityRow
                            city={city}
                            onHover={setHoverSlug}
                            onSelect={handleSelect}
                            active={hoverSlug === city.slug}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * A row is two controls, not one.
 *
 * The pin button moves the map; the name is a plain link to the city page. An
 * earlier pass made the whole row a link that also flew the map, which meant
 * every attempt to look at a city on the map navigated away from the page
 * instead. Two targets, two outcomes, both keyboard reachable.
 */
function CityRow({
  city,
  onHover,
  onSelect,
  active,
}: {
  city: ExplorerCity
  onHover: (slug: string | null) => void
  onSelect: (slug: string) => void
  active: boolean
}) {
  return (
    <div
      onMouseEnter={() => onHover(city.slug)}
      onMouseLeave={() => onHover(null)}
      className={`group flex items-center gap-1 rounded-lg border transition-colors ${
        active ? 'border-gold-400 bg-gold-50/60' : 'border-ink-200 bg-white hover:border-ink-300'
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect(city.slug)}
        onFocus={() => onHover(city.slug)}
        onBlur={() => onHover(null)}
        aria-label={`Show ${city.name} on the map`}
        className="inline-flex size-9 shrink-0 items-center justify-center rounded-l-lg text-ink-400 transition-colors hover:bg-ink-50 hover:text-ink-900"
      >
        <MapPin className="size-4" aria-hidden />
      </button>
      <Link
        href={city.href}
        onFocus={() => onHover(city.slug)}
        onBlur={() => onHover(null)}
        className="flex min-h-9 flex-1 items-center justify-between gap-2 rounded-r-lg py-1.5 pr-2.5 text-sm font-medium text-ink-800 group-hover:text-ink-950"
      >
        <span className="truncate">{city.name}</span>
        <span className="flex shrink-0 items-center gap-1.5">
          {city.responseBand && (
            <span className="hidden text-[0.6875rem] font-normal text-ink-400 xl:inline">
              {city.responseBand}
            </span>
          )}
          <ArrowUpRight
            className="size-3.5 text-ink-300 transition-colors group-hover:text-gold-600"
            aria-hidden
          />
        </span>
      </Link>
    </div>
  )
}

function chip(active: boolean): string {
  return `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
    active
      ? 'border-ink-900 bg-ink-900 text-white'
      : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
  }`
}
