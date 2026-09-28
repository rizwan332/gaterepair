import type { SymptomPage } from './types'
import { movementSymptoms } from './movement'
import { safetySymptoms } from './safety'
import { powerSymptoms } from './power'
import { accessSymptoms } from './access'
import { mechanicalSymptoms } from './mechanical'

/**
 * The symptom pages, aggregated.
 *
 * Grouped into files by the system that fails rather than alphabetically, so
 * that the pages most at risk of reading alike sit next to each other while
 * they are being written. Two pages about photo-eyes in the same file are
 * obviously duplicative; two pages sixty slugs apart are not, until Google
 * notices.
 */
export const symptomPages: SymptomPage[] = [
  ...movementSymptoms,
  ...safetySymptoms,
  ...powerSymptoms,
  ...accessSymptoms,
  ...mechanicalSymptoms,
]

export const symptomPath = (page: SymptomPage) => `/gate-problems/${page.slug}`

export const symptomBySlug = (slug: string) => symptomPages.find((p) => p.slug === slug)

/** Symptom pages that name this service slug, for the service pages to link back. */
export const symptomsForService = (serviceSlug: string) =>
  symptomPages.filter((p) => p.relatedServices.includes(serviceSlug))

/** Symptom pages that name this brand slug. */
export const symptomsForBrand = (brandSlug: string) =>
  symptomPages.filter((p) => (p.relatedBrands ?? []).includes(brandSlug))

/** Symptom pages that name this model, keyed '<brandSlug>/<slug>'. */
export const symptomsForModel = (modelKey: string) =>
  symptomPages.filter((p) => (p.relatedModels ?? []).includes(modelKey))

/**
 * The faults a homeowner is most likely to be standing in front of, used for
 * the triage block on city pages and /emergency.
 *
 * Deliberately not "the pages we most want to rank": a gate stuck open is the
 * call we want, and it is also genuinely the most urgent thing on the list.
 */
export const urgentSymptoms = () =>
  symptomPages.filter((p) => p.urgency === 'security' || p.urgency === 'safety')
