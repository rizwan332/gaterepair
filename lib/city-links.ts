/**
 * City → brand → model linking.
 *
 * The brief is that every city page should establish that we service the major
 * brands in that city and link to the right brand and model pages. This module
 * is where that relationship is computed, for one reason: the page renders it
 * and scripts/validate-linking.ts asserts on it, and if those two disagreed the
 * validator would be checking something nobody ships.
 *
 * ── WHY THE LINKS AND NOT A PAGE PER COMBINATION ────────────────────────────
 * See BRAND-CITY-ARCHITECTURE.md. In short: the pages that rank for
 * "<brand> gate repair <city>" are city pages that mention the brand, eight of
 * the nine DFW competitors have no brand×city URL at all, and Google resolves
 * near-duplicates by picking one — which would be the established city page.
 * So the city page carries brand+city intent, and a separate URL has to earn
 * itself against a measured demand + first-party proof gate.
 *
 * Relative imports, not `@/`: the validator loads this under plain tsx.
 */

import { brands, type Brand } from '../content/brands'
import { serviceBySlug, type Service } from '../content/services'
import type { City } from '../content/cities'
import { modelsForBrand } from '../content/models'
import type { ModelPage } from '../content/models/types'
import { isModelIndexable } from './model-quality'

export type CityBrandLink = {
  brand: Brand
  /**
   * True when this city's gate profile names the brand. The claim is only ever
   * as good as that data — it is technician-interview material, drafted for the
   * enriched cities and absent everywhere else, which is why a city without a
   * profile shows the roster without asserting anything about prevalence.
   */
  seenHere: boolean
  /** Indexed model pages for the brand. Capped so the block stays a route, not a farm. */
  models: ModelPage[]
}

const MODELS_PER_BRAND = 2

/**
 * A stable number per city, used to rotate which models each city shows.
 *
 * Two models per brand across seventeen brands would otherwise mean every city
 * page carrying the identical block of model links — the same near-duplication
 * the architecture exists to avoid, and it would leave the models that never
 * make the cut with no inbound link from any city at all. Rotating by city
 * spreads the coverage so the union across the indexed cities reaches every
 * model page, and no two city pages read the same.
 *
 * Deterministic, so a page does not change its links between builds.
 */
const cityOffset = (city: City) =>
  [...city.slug].reduce((n, ch) => (n * 31 + ch.charCodeAt(0)) >>> 0, 7)

const rotate = <T,>(list: T[], by: number): T[] =>
  list.length === 0 ? list : [...list.slice(by % list.length), ...list.slice(0, by % list.length)]

/**
 * Brands for a city page: the ones that city's profile names first, then the
 * rest by competitive priority. Every brand is always present — we do service
 * all of them everywhere we work, and hiding some would make the page less
 * useful to the person reading it.
 */
export function brandsForCity(city: City, modelsPerBrand = MODELS_PER_BRAND): CityBrandLink[] {
  const named = new Set(city.gateProfile?.commonBrands ?? [])
  const offset = cityOffset(city)
  return [...brands]
    .sort((a, b) => Number(named.has(b.name)) - Number(named.has(a.name)) || a.priority - b.priority)
    .map((brand) => ({
      brand,
      seenHere: named.has(brand.name),
      models: rotate(modelsForBrand(brand.slug).filter(isModelIndexable), offset).slice(0, modelsPerBrand),
    }))
}

/**
 * Every model page a city links to, in the order the page shows them.
 *
 * No cap: this has to be exactly what the city page renders, because
 * scripts/validate-linking.ts uses it to decide whether a model page is an
 * orphan. An earlier version capped the flat list at 15 while the page rendered
 * all of them, so the guard reported eighteen orphans that were in fact linked.
 */
export function modelsForCity(city: City): ModelPage[] {
  return brandsForCity(city).flatMap((b) => b.models)
}

/**
 * Which service fixes each fault a city's profile names.
 *
 * This is what carries the symptom+city half of the keyword list — 3,135
 * phrases like "gate opens halfway then stops Plano TX" — without a page per
 * symptom per city. The fault text is the city's own data; the link is the
 * service page that owns the metro-level answer.
 *
 * Order matters: the first pattern that matches wins, so the specific causes
 * (a moved post, an apartment entrance) are tested before the generic ones.
 */
const FAULT_SERVICE: [RegExp, string][] = [
  [/loop|keypad|intercom|card reader|telephone|access control/i, 'access-control-repair'],
  [/post|hinge|weld|iron|sag|drag/i, 'iron-gate-repair'],
  [/apartment|commercial|hoa|high-cycle|duty cycle/i, 'commercial-gate-repair'],
  [/storm|surge|lightning|outage/i, 'emergency-gate-repair'],
  [/solar|batter|charg|transformer/i, 'electric-gate-repair'],
  [/photo.?eye|sensor|safety/i, 'automatic-gate-repair'],
  [/board|capacitor|motor|limit|gearbox|chain|operator/i, 'gate-motor-repair'],
]

export function localFaults(city: City): { issue: string; service: Service }[] {
  return (city.gateProfile?.commonIssues ?? []).map((issue) => {
    const match = FAULT_SERVICE.find(([pattern]) => pattern.test(issue))
    return { issue, service: serviceBySlug(match?.[1] ?? 'gate-motor-repair')! }
  })
}
