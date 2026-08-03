'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import type { Map as LeafletMap, CircleMarker } from 'leaflet'
// Leaflet's stylesheet is a static import on purpose. Bundlers cannot
// code-split a dynamically imported CSS file, and at ~15KB it is not worth the
// trouble — it is the 150KB of JS and the tile requests that actually matter,
// and both of those stay behind the observer below.
import 'leaflet/dist/leaflet.css'
import { buildCountyColors, OTHER_COLOR } from '@/lib/county-colors'

/**
 * Interactive coverage map.
 *
 * Leaflet is ~150KB of JS plus its stylesheet, which is a lot to spend on a
 * component most visitors never scroll to. So nothing loads until the map is
 * about to enter the viewport: the library, the CSS and the tiles are all
 * pulled behind an IntersectionObserver, and the section renders a styled
 * placeholder of the same height until then. No layout shift, no cost for
 * people who bounce from the hero.
 *
 * Markers are CircleMarkers rather than image pins — one canvas-drawn shape per
 * city instead of 190 <img> requests, and they scale with zoom without going
 * blurry.
 *
 * The basemap is CARTO Positron: OpenStreetMap data, no API key, and rendered
 * in a muted grey so the coloured pins are the only saturated thing on screen.
 * Raw openstreetmap.org tiles would also work, but their tile servers are
 * donated infrastructure and the usage policy asks commercial sites not to lean
 * on them.
 */

export type MapCity = {
  slug: string
  name: string
  county: string
  lat: number
  lng: number
  href: string
  responseBand?: string
}

export function CoverageMap({ cities }: { cities: MapCity[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef<Record<string, CircleMarker>>({})
  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [activeCounty, setActiveCounty] = useState<string | null>(null)

  const { colors, named, otherCount, counts } = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const c of cities) counts[c.county] = (counts[c.county] ?? 0) + 1
    return { ...buildCountyColors(counts), counts }
  }, [cities])

  // Arm the loader slightly before the section is on screen, so tiles have a
  // head start and the map is drawn by the time it is actually looked at.
  useEffect(() => {
    const el = containerRef.current
    if (!el || visible) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && setVisible(true),
      { rootMargin: '300px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [visible])

  useEffect(() => {
    if (!visible || mapRef.current || cities.length === 0) return
    let cancelled = false

    ;(async () => {
      try {
        // Leaflet touches `window` at import time, so it cannot be a static
        // import in a component that Next.js also renders on the server.
        const L = (await import('leaflet')).default
        if (cancelled || !containerRef.current) return

        const map = L.map(containerRef.current, {
          scrollWheelZoom: false, // never hijack the page scroll on the way past
          zoomControl: false,
          attributionControl: true,
        })
        mapRef.current = map

        L.control.zoom({ position: 'topright' }).addTo(map)

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }).addTo(map)

        for (const city of cities) {
          const color = colors[city.county] ?? OTHER_COLOR
          const marker = L.circleMarker([city.lat, city.lng], {
            radius: 7,
            color: '#ffffff',
            weight: 2,
            fillColor: color,
            fillOpacity: 0.95,
            // Leaflet renders these to <canvas>, which has no accessibility
            // tree. The city list underneath the map is the accessible path to
            // the same information, and it is not a fallback — it is the
            // primary navigation for anyone not using a pointer.
          })

          marker.bindPopup(
            `<div class="map-pop">
               <p class="map-pop-city">${escapeHtml(city.name)}</p>
               <p class="map-pop-meta">${escapeHtml(city.county)}${
                 city.responseBand ? ` &middot; typical arrival ${escapeHtml(city.responseBand)}` : ''
               }</p>
               <a class="map-pop-link" href="${city.href}">Gate repair in ${escapeHtml(city.name)} &rarr;</a>
             </div>`,
            { closeButton: true, maxWidth: 260 },
          )

          // Closure over `marker` rather than `this` — Leaflet's handler `this`
          // is untyped under noImplicitThis.
          marker.on('mouseover', () => {
            marker.setRadius(10)
            marker.setStyle({ weight: 3 })
            marker.openPopup()
          })
          marker.on('mouseout', () => {
            marker.setRadius(7)
            marker.setStyle({ weight: 2 })
          })

          marker.addTo(map)
          markersRef.current[city.slug] = marker
        }

        map.fitBounds(
          L.latLngBounds(cities.map((c) => [c.lat, c.lng] as [number, number])),
          { padding: [40, 40] },
        )

        if (!cancelled) setReady(true)
      } catch {
        if (!cancelled) setFailed(true)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [visible, cities, colors])

  // Dim the counties that are not selected rather than removing their pins —
  // "there is nothing there" and "you filtered it out" must not look the same.
  useEffect(() => {
    if (!ready) return
    for (const city of cities) {
      const marker = markersRef.current[city.slug]
      if (!marker) continue
      const dimmed = activeCounty !== null && city.county !== activeCounty
      marker.setStyle({ fillOpacity: dimmed ? 0.15 : 0.95, opacity: dimmed ? 0.3 : 1 })
    }
  }, [activeCounty, ready, cities])

  return (
    <div>
      <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-ink-200 bg-ink-50 shadow-[var(--shadow-lift)]">
        {/* `region`, not `img`. role="img" would make every descendant
            presentational, which hides Leaflet's real zoom buttons from
            assistive tech. The pins themselves are canvas and unreachable
            either way — the city list below is the accessible route to them,
            and the label says so. */}
        <div
          ref={containerRef}
          className="h-[22rem] w-full sm:h-[28rem] lg:h-[34rem]"
          role="region"
          aria-label={`Interactive coverage map of ${cities.length} cities we service across North Texas. Every city is also listed as a link in the Find your city section below.`}
        />

        {!ready && !failed && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink-50">
            <div className="text-center">
              <div className="mx-auto size-8 animate-spin rounded-full border-2 border-ink-200 border-t-gold-500" />
              <p className="mt-3 text-sm text-ink-500">Loading coverage map…</p>
            </div>
          </div>
        )}

        {failed && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink-50 p-6">
            <p className="max-w-sm text-center text-sm text-ink-600">
              The map could not load. Every city we serve is listed below &mdash; nothing is missing
              from this page.
            </p>
          </div>
        )}
      </div>

      {/* Legend doubles as a filter. Buttons, not swatches, because it is
          interactive and needs to be reachable from the keyboard. */}
      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCounty(null)}
            aria-pressed={activeCounty === null}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              activeCounty === null
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
            }`}
          >
            All {cities.length} cities
          </button>

          {named.map((county) => (
            <button
              key={county}
              type="button"
              onClick={() => setActiveCounty(activeCounty === county ? null : county)}
              aria-pressed={activeCounty === county}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeCounty === county
                  ? 'border-ink-900 bg-ink-900 text-white'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
              }`}
            >
              <span
                className="size-2.5 shrink-0 rounded-full ring-1 ring-inset ring-black/10"
                style={{ background: colors[county] }}
                aria-hidden
              />
              {county.replace(/ County$/, '')}
              <span className="text-ink-400">{counts[county]}</span>
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

        <p className="mt-3 text-xs text-ink-500">
          Tap a pin for details. Scroll-zoom is off so the page keeps scrolling &mdash; use the + and
          &minus; buttons, or pinch on a touchscreen.
        </p>
      </div>
    </div>
  )
}

/** City and county names come from our own content, but this is user-visible
    HTML injected as a string — escape it anyway rather than rely on that. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
