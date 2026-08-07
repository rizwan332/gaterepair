'use client'

import { useEffect, useRef, useState } from 'react'
import type { Map as LeafletMap, CircleMarker } from 'leaflet'
// Leaflet's stylesheet is a static import on purpose. Bundlers cannot
// code-split a dynamically imported CSS file, and at ~15KB it is not worth the
// trouble — it is the 150KB of JS and the tile requests that actually matter,
// and both of those stay behind the observer below.
import 'leaflet/dist/leaflet.css'
import { OTHER_COLOR } from '@/lib/county-colors'

/**
 * Interactive coverage map.
 *
 * A controlled component: it owns the Leaflet instance and nothing else. Which
 * cities are highlighted, which one is focused and what the user typed all live
 * in CoverageExplorer, so the map and the city list beside it cannot disagree
 * about what is currently selected.
 *
 * Leaflet is ~150KB of JS. Nothing loads until the map is about to enter the
 * viewport — library and tiles both sit behind an IntersectionObserver, and a
 * sized placeholder holds the space so there is no layout shift.
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

type Props = {
  cities: MapCity[]
  colors: Record<string, string>
  /** Slugs currently matching the search/filter. Others are dimmed, not removed. */
  visibleSlugs: Set<string>
  /** City to centre on and open. Cleared by the parent once handled. */
  focusSlug: string | null
  /** Hovered in the list — enlarged on the map so the two views stay linked. */
  hoverSlug: string | null
  onSelect: (slug: string) => void
  className?: string
}

export function CoverageMap({
  cities,
  colors,
  visibleSlugs,
  focusSlug,
  hoverSlug,
  onSelect,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef<Record<string, CircleMarker>>({})
  const initialisingRef = useRef(false)
  const leafletRef = useRef<typeof import('leaflet') | null>(null)
  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  /**
   * Bumped by the "Try again" button to re-run the loader.
   *
   * The realistic failure here is not a broken map — it is a stale chunk. The
   * Leaflet import is dynamic, so its filename carries a build hash; a page
   * left open across a deploy asks for a chunk that no longer exists and the
   * import rejects. That is a transient, recoverable condition, and it used to
   * present as a permanent dead end.
   */
  const [attempt, setAttempt] = useState(0)

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
    if (!visible || cities.length === 0) return
    // Set synchronously, before the first await. StrictMode runs this effect
    // twice in development, and both passes would otherwise reach L.map() with
    // mapRef still null — Leaflet throws "Map container is already initialized"
    // on the second, and the spinner never clears.
    if (initialisingRef.current) return
    initialisingRef.current = true
    setFailed(false)

    let cancelled = false

    ;(async () => {
      try {
        // Leaflet touches `window` at import time, so it cannot be a static
        // import in a component Next.js also renders on the server.
        const L = (await import('leaflet')).default
        if (cancelled || !containerRef.current) return
        leafletRef.current = L

        const map = L.map(containerRef.current, {
          scrollWheelZoom: false, // never hijack the page scroll on the way past
          zoomControl: false,
          attributionControl: true,
        })
        mapRef.current = map

        L.control.zoom({ position: 'topright' }).addTo(map)

        const carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        })

        // If CARTO is blocked — corporate proxy, ad blocker, regional outage —
        // fall back to OSM's own tiles rather than showing an empty grey box.
        let swapped = false
        let tileErrors = 0
        carto.on('tileerror', () => {
          if (swapped || ++tileErrors < 4) return
          swapped = true
          map.removeLayer(carto)
          map.getContainer().classList.add('map-tiles-muted')
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          }).addTo(map)
        })
        carto.addTo(map)

        for (const city of cities) {
          const marker = L.circleMarker([city.lat, city.lng], {
            radius: 7,
            color: '#ffffff',
            weight: 2,
            fillColor: colors[city.county] ?? OTHER_COLOR,
            fillOpacity: 0.95,
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

          marker.on('mouseover', () => marker.openPopup())
          marker.on('click', () => onSelect(city.slug))

          marker.addTo(map)
          markersRef.current[city.slug] = marker
        }

        map.fitBounds(
          L.latLngBounds(cities.map((c) => [c.lat, c.lng] as [number, number])),
          { padding: [40, 40] },
        )

        // The container is sized by CSS that may settle a frame after Leaflet
        // measures it. Without this the tile grid is computed against the wrong
        // dimensions and renders as a partial strip of map with grey around it.
        requestAnimationFrame(() => {
          if (!cancelled) map.invalidateSize()
        })

        if (!cancelled) setReady(true)
      } catch (err) {
        // Surfaced, not silently swallowed. A blank map with no console output
        // is the hardest kind of bug to report and the hardest to act on.
        console.error('[coverage-map] failed to initialise', err)
        if (!cancelled) setFailed(true)
      }
    })()

    return () => {
      cancelled = true
      // Leaflet stamps the DOM node with _leaflet_id and refuses to initialise
      // it again. Without remove(), any unmount/remount — a route change, a
      // Fast Refresh — permanently breaks the map until a hard reload.
      mapRef.current?.remove()
      mapRef.current = null
      markersRef.current = {}
      initialisingRef.current = false
    }
    // Deliberately not reacting to visibleSlugs/focus/hover — those are applied
    // by the effects below rather than by tearing the whole map down.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, cities, colors, attempt])

  // Dim non-matching pins rather than removing them — "there is nothing there"
  // and "you filtered it out" must not look the same.
  useEffect(() => {
    if (!ready) return
    for (const city of cities) {
      const marker = markersRef.current[city.slug]
      if (!marker) continue
      const shown = visibleSlugs.has(city.slug)
      marker.setStyle({ fillOpacity: shown ? 0.95 : 0.12, opacity: shown ? 1 : 0.25 })
    }
  }, [visibleSlugs, ready, cities])

  // Enlarge the pin for the row under the cursor, so glancing between the list
  // and the map does not require re-finding your place.
  useEffect(() => {
    if (!ready) return
    for (const [slug, marker] of Object.entries(markersRef.current)) {
      marker.setRadius(slug === hoverSlug ? 11 : 7)
      marker.setStyle({ weight: slug === hoverSlug ? 3 : 2 })
    }
  }, [hoverSlug, ready])

  // Selecting a city from the list flies the map to it and opens its popup.
  useEffect(() => {
    if (!ready || !focusSlug) return
    const map = mapRef.current
    const marker = markersRef.current[focusSlug]
    if (!map || !marker) return
    map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 10), { duration: 0.6 })
    marker.openPopup()
  }, [focusSlug, ready])

  // Refit when the matching set changes substantially, so searching for a town
  // actually takes you there instead of leaving it as a dot near the edge.
  useEffect(() => {
    const L = leafletRef.current
    const map = mapRef.current
    if (!ready || !L || !map || focusSlug) return
    const shown = cities.filter((c) => visibleSlugs.has(c.slug))
    if (shown.length === 0 || shown.length === cities.length) return
    map.flyToBounds(L.latLngBounds(shown.map((c) => [c.lat, c.lng] as [number, number])), {
      padding: [50, 50],
      maxZoom: 11,
      duration: 0.6,
    })
  }, [visibleSlugs, ready, cities, focusSlug])

  return (
    <div
      className={`relative overflow-hidden rounded-[var(--radius-card)] border border-ink-200 bg-ink-50 shadow-[var(--shadow-lift)] ${className ?? ''}`}
    >
      {/* `region`, not `img`. role="img" would make every descendant
          presentational, which hides Leaflet's real zoom buttons from
          assistive tech. The pins themselves are canvas/SVG and unreachable
          either way — the city list beside it is the accessible route. */}
      <div
        ref={containerRef}
        className="size-full"
        role="region"
        aria-label={`Interactive coverage map of ${cities.length} cities we service across Dallas–Fort Worth. Every city is also listed as a link beside this map.`}
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
          <div className="max-w-sm text-center">
            <p className="text-sm text-ink-600">
              The map could not load. Every city we serve is listed beside this &mdash; nothing is
              missing from this page.
            </p>
            {/* Retry in place first — it costs nothing and keeps the page
                state. If that fails too the cause is almost certainly a stale
                chunk, which only a fresh document fixes, so the second press
                reloads rather than repeating something we know will fail. */}
            <button
              type="button"
              onClick={() =>
                attempt === 0 ? setAttempt(1) : window.location.reload()
              }
              className="mt-4 inline-flex h-10 items-center rounded-lg border border-ink-200 bg-white px-4 text-sm font-semibold text-ink-900 transition-colors hover:border-gold-400"
            >
              {attempt === 0 ? 'Try again' : 'Reload the page'}
            </button>
          </div>
        </div>
      )}
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
