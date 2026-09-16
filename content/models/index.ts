/**
 * Every model page, and the lookups the brand, service and city pages use to
 * link to them.
 *
 * Content lives one file per brand (or brand group) so each can be researched,
 * written and reviewed on its own. Nothing about a page's URL, links or
 * indexing is decided in those files beyond what the ModelPage contract asks
 * for — see ./types.ts and lib/model-quality.ts.
 */

import type { ModelPage } from './types'
import { liftmasterResidentialModels } from './liftmaster-residential'
import { liftmasterCommercialModels } from './liftmaster-commercial'
import { usAutomaticModels } from './us-automatic'
import { vikingModels } from './viking'
import { faacModels } from './faac'
import { doorkingModels } from './doorking'
import { allOMaticModels } from './all-o-matic'
import { ramsetModels } from './ramset'
import { eagleModels } from './eagle'
import { eliteModels } from './elite'
import { secondaryAModels } from './secondary-a'
import { secondaryBModels } from './secondary-b'

export const modelPages: ModelPage[] = [
  ...liftmasterResidentialModels,
  ...liftmasterCommercialModels,
  ...usAutomaticModels,
  ...vikingModels,
  ...faacModels,
  ...doorkingModels,
  ...allOMaticModels,
  ...ramsetModels,
  ...eagleModels,
  ...eliteModels,
  ...secondaryAModels,
  ...secondaryBModels,
]

/** '<brandSlug>/<slug>' — the form `relatedModels` uses. */
export const modelKey = (page: ModelPage) => `${page.brandSlug}/${page.slug}`

export const modelPath = (page: ModelPage) => `/brands/${page.brandSlug}/${page.slug}`

export const modelByParams = (brandSlug: string, slug: string) =>
  modelPages.find((m) => m.brandSlug === brandSlug && m.slug === slug)

export const modelByKey = (key: string) => modelPages.find((m) => modelKey(m) === key)

export const modelsForBrand = (brandSlug: string) => modelPages.filter((m) => m.brandSlug === brandSlug)

export const modelsForService = (serviceSlug: string) =>
  modelPages.filter((m) => m.relatedServices.includes(serviceSlug))

const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

/**
 * The model page for a name as written in a brand's `models` list, if one
 * exists — so "CSW24U" on the brand page links to the CSW24UL page.
 *
 * Matches the model or any alias exactly once punctuation and case are
 * stripped, or where one is the other plus a short LETTER suffix (a UL
 * revision, a kit letter). Four characters minimum on the shorter side, so
 * "400" never matches "LA400"; letters only in the suffix, so "RAM 100" never
 * matches "RAM 1000".
 */
export function modelMatching(brandSlug: string | null, name: string): ModelPage | undefined {
  const target = normalise(name)
  // `null` searches every brand — for lines that changed hands, such as Elite
  // models now sold as LiftMaster Elite Series and written up under LiftMaster.
  return (brandSlug ? modelsForBrand(brandSlug) : modelPages).find((m) =>
    [m.model, ...m.aliases].some((candidate) => {
      const c = normalise(candidate)
      if (c === target) return true
      const [short, long] = c.length < target.length ? [c, target] : [target, c]
      return short.length >= 4 && long.startsWith(short) && /^[a-z]{1,2}$/.test(long.slice(short.length))
    }),
  )
}
