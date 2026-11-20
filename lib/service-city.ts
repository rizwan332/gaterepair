/**
 * Service × city pages, e.g. /sliding-gate-repair-plano-tx.
 *
 * Added 2 Nov 2026 at the client's request, Plano first. A page exists only
 * where content/service-city.ts has copy written for that city and the city is
 * indexed, so no page is a template with the city name swapped in.
 *
 * Relative imports: the validators load this under plain tsx.
 */

import { indexedCities, type City } from '../content/cities'
import { serviceCityCopy, type ServiceCityCopy } from '../content/service-city'

/** `service` is the DFW-wide /services page each one deepens; `project` matches Project.service for the job cards. */
export const cityServices = [
  { slug: 'automatic-gate-repair', name: 'Automatic Gate Repair', service: 'automatic-gate-repair', project: 'automatic-gate-repair' },
  { slug: 'electric-gate-repair', name: 'Electric Gate Repair', service: 'electric-gate-repair', project: 'electric-gate-repair' },
  { slug: 'driveway-gate-repair', name: 'Driveway Gate Repair', service: 'automatic-gate-repair', project: 'automatic-gate-repair' },
  { slug: 'sliding-gate-repair', name: 'Sliding Gate Repair', service: 'sliding-gate-repair', project: 'gate-motor-repair' },
  { slug: 'swing-gate-repair', name: 'Swing Gate Repair', service: 'swing-gate-repair', project: 'gate-motor-repair' },
  { slug: 'gate-opener-repair', name: 'Gate Opener Repair', service: 'gate-motor-repair', project: 'gate-motor-repair' },
  { slug: 'gate-motor-repair', name: 'Gate Motor Repair', service: 'gate-motor-repair', project: 'gate-motor-repair' },
  { slug: 'emergency-gate-repair', name: 'Emergency Gate Repair', service: 'emergency-gate-repair', project: 'emergency-gate-repair' },
  { slug: 'commercial-gate-repair', name: 'Commercial Gate Repair', service: 'commercial-gate-repair', project: 'commercial-gate-repair' },
  { slug: 'residential-gate-repair', name: 'Residential Gate Repair', service: 'automatic-gate-repair', project: 'automatic-gate-repair' },
  { slug: 'automatic-gate-installation', name: 'Automatic Gate Installation', service: 'gate-installation', project: 'gate-installation' },
  { slug: 'electric-gate-installation', name: 'Electric Gate Installation', service: 'gate-installation', project: 'gate-installation' },
  { slug: 'sliding-gate-installation', name: 'Sliding Gate Installation', service: 'gate-installation', project: 'gate-installation' },
  { slug: 'swing-gate-installation', name: 'Swing Gate Installation', service: 'gate-installation', project: 'gate-installation' },
  { slug: 'gate-opener-installation', name: 'Gate Opener Installation', service: 'gate-installation', project: 'gate-installation' },
] as const

export type CityService = (typeof cityServices)[number]
export type ServiceCityPage = { city: City; service: CityService; copy: ServiceCityCopy }

export const serviceCityPages: ServiceCityPage[] = Object.entries(serviceCityCopy).flatMap(([key, copy]) => {
  const [citySlug, serviceSlug] = key.split('/')
  const city = indexedCities.find((c) => c.slug === citySlug)
  const service = cityServices.find((s) => s.slug === serviceSlug)
  return city && service ? [{ city, service, copy }] : []
})

export const serviceCityPath = (p: { city: { slug: string }; service: { slug: string } }) =>
  `/${p.service.slug}-${p.city.slug}-tx`

const bySegment = new Map(serviceCityPages.map((p) => [serviceCityPath(p).slice(1), p]))

export const serviceCityPageForSegment = (segment: string) => bySegment.get(segment)

export const serviceCityPagesForCity = (citySlug: string) => serviceCityPages.filter((p) => p.city.slug === citySlug)

/**
 * Two families are the same search as a page we already have, so they point
 * their signals at it instead of bidding against it. Both the `<title>` and
 * the sitemap read this, so a page that defers is also left out of the sitemap.
 *
 * - "automatic gate repair <city>" is not narrower than "gate repair <city>";
 *   in this trade it is the same search, and the city page answers it. Through
 *   November these 20 pages ranked on 148 queries, beat their own city page on
 *   11, and earned 99 impressions and no clicks on the 40 queries no city page
 *   reached.
 * - "gate motor repair" and "gate opener repair" are the same job, and
 *   cityServices above gives both the same `service` and the same `project`.
 *   Gate opener has 2.3x the reach (616 impressions against 263), so it keeps
 *   the page.
 *
 * The other 13 name a gate type, an audience or installation, and answer for
 * themselves. A target that does not exist for this city is left alone.
 */
const DEFERS_TO: Record<string, (citySlug: string) => string> = {
  'automatic-gate-repair': (citySlug) => `/gate-repair-${citySlug}-tx`,
  'gate-motor-repair': (citySlug) =>
    serviceCityPagesForCity(citySlug).some((p) => p.service.slug === 'gate-opener-repair')
      ? `/gate-opener-repair-${citySlug}-tx`
      : '',
}

/** The page this one wants credited, which is itself unless it defers. */
export const serviceCityCanonical = (p: ServiceCityPage) =>
  DEFERS_TO[p.service.slug]?.(p.city.slug) || serviceCityPath(p)
