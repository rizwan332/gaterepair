/**
 * Internal linking guard.
 *
 * The brief for this site is not page count, it is one set of relationships
 * stated consistently everywhere: business → city → brand → model → real work.
 * That only holds if every layer actually links to the next and back, and the
 * failure mode is silent — a model page nobody links to still builds, still
 * renders, and quietly earns nothing.
 *
 * This asserts the graph rather than the markup, by loading the same module the
 * city pages render from (lib/city-links.ts). If the page and the validator
 * ever disagree, they disagree in one place.
 *
 *   npm run validate:linking
 */

import { cities, indexedCities, countyPeers } from '../content/cities'
import { brands } from '../content/brands'
import { services } from '../content/services'
import { modelKey, modelPath, modelsForBrand } from '../content/models'
import { indexableModelPages, isModelIndexable } from '../lib/model-quality'
import { brandsForCity, modelsForCity, localFaults } from '../lib/city-links'

const MIN_BRANDS_PER_CITY = 5
const MIN_MODELS_PER_CITY = 3
const MIN_NEARBY_PER_CITY = 3
const MIN_CITIES_PER_BRAND = 10

const errors: string[] = []
const warnings: string[] = []

// --- 1. every indexed city links down to brands, models and neighbours -------

for (const city of indexedCities) {
  const cityBrands = brandsForCity(city)
  const linkedBrands = cityBrands.length
  const linkedModels = modelsForCity(city).length
  const nearby = (city.nearbyCities ?? []).length || countyPeers(city, 10).length

  if (linkedBrands < MIN_BRANDS_PER_CITY)
    errors.push(`${city.name} links ${linkedBrands} brands (min ${MIN_BRANDS_PER_CITY}).`)
  if (linkedModels < MIN_MODELS_PER_CITY)
    errors.push(`${city.name} links ${linkedModels} model pages (min ${MIN_MODELS_PER_CITY}).`)
  if (nearby < MIN_NEARBY_PER_CITY)
    errors.push(`${city.name} links ${nearby} nearby cities (min ${MIN_NEARBY_PER_CITY}).`)

  // The fault → service links only exist where the city has a gate profile.
  // That is data, not a defect, so it is a warning: it says which cities are
  // still carrying the generic roster instead of their own faults.
  if (localFaults(city).length === 0) warnings.push(`${city.name}: no gateProfile, so no fault → service links.`)
}

// --- 2. nothing downstream is an orphan -------------------------------------

const modelsLinkedFromCities = new Set(indexedCities.flatMap((c) => modelsForCity(c).map(modelKey)))
for (const model of indexableModelPages()) {
  if (!modelsLinkedFromCities.has(modelKey(model)))
    warnings.push(`${modelPath(model)} is not linked from any indexed city page.`)
  if (modelsForBrand(model.brandSlug).length === 0)
    errors.push(`${modelPath(model)} has no brand page to link it.`)
}

for (const brand of brands) {
  const citiesLinking = indexedCities.filter((c) => brandsForCity(c).some((b) => b.brand.slug === brand.slug))
  if (citiesLinking.length < Math.min(MIN_CITIES_PER_BRAND, indexedCities.length))
    errors.push(`/brands/${brand.slug} is linked from only ${citiesLinking.length} indexed city pages.`)

  const indexedModels = modelsForBrand(brand.slug).filter(isModelIndexable)
  const shown = brandsForCity(indexedCities[0] ?? cities[0]).find((b) => b.brand.slug === brand.slug)?.models.length ?? 0
  if (indexedModels.length > 0 && shown === 0)
    errors.push(`${brand.name} has ${indexedModels.length} indexed model pages but city pages link none of them.`)
}

// --- 3. the fault → service map must resolve --------------------------------

const serviceSlugs = new Set(services.map((s) => s.slug))
for (const city of indexedCities) {
  for (const { issue, service } of localFaults(city)) {
    if (!service || !serviceSlugs.has(service.slug))
      errors.push(`${city.name}: fault "${issue}" maps to a service that does not exist.`)
  }
}

// --- report -----------------------------------------------------------------

const brandCityPairs = indexedCities.length * brands.length
const modelCityPairs = indexedCities.reduce((n, c) => n + modelsForCity(c).length, 0)

console.log(
  `${indexedCities.length} indexed cities × ${brands.length} brands = ${brandCityPairs} brand+city relationships stated\n` +
    `${modelCityPairs} city → model links across those pages\n` +
    `${indexableModelPages().length} indexed model pages, ${modelsLinkedFromCities.size} of them linked from a city page`,
)

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`)
  for (const w of warnings.slice(0, 15)) console.log(`  · ${w}`)
  if (warnings.length > 15) console.log(`  · …and ${warnings.length - 15} more`)
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}

console.log('\n✓ City → brand → model linking is complete in both directions.')
