/**
 * City data guard. Runs in CI — a failure blocks the build.
 *
 * Two jobs:
 *
 * 1. The service-area list must match the client's list exactly. Nothing gets
 *    added because it seems like it belongs in the metroplex. (This check
 *    exists because Fort Worth was once added on that reasoning and was not on
 *    the client's list.)
 *
 * 2. Every city page must carry genuinely local content. 190 pages is only
 *    defensible if each one says something true of that city and nowhere else —
 *    see CITY-PAGES.md. Templated location pages are exactly what Google's
 *    scaled-content-abuse policy targets, and the competitor pages we audited
 *    (Metro's Plano page is ~5% local) are the failure mode to avoid.
 *
 *   npm run validate:cities
 */

import { cities, isPublishable, type City } from '../content/cities'
import { CLIENT_CITY_LIST } from './client-city-list'

const errors: string[] = []
const warnings: string[] = []

// --- 1. exact match against the client's list -------------------------------

const want = new Set<string>(CLIENT_CITY_LIST as readonly string[])
const have = new Set(cities.map((c) => c.name))

for (const name of have) {
  if (!want.has(name)) errors.push(`"${name}" is not on the client's service-area list — remove it or get it confirmed.`)
}
for (const name of want) {
  if (!have.has(name)) errors.push(`"${name}" is on the client's list but has no city entry.`)
}

// --- 2. no duplicate slugs --------------------------------------------------

const slugSeen = new Map<string, number>()
for (const c of cities) slugSeen.set(c.slug, (slugSeen.get(c.slug) ?? 0) + 1)
for (const [slug, n] of slugSeen) {
  if (n > 1) errors.push(`Duplicate slug "${slug}" (${n} cities).`)
}

// --- 3. tier depth requirements ---------------------------------------------
//
// A city that has not been enriched yet is not an error — it renders as a short
// honest page, which is safe. What IS an error is a city claiming Tier 1 depth
// without the data to back it, because that is where a padded template page
// would come from.

let unenriched = 0

for (const city of cities) {
  const enriched = Boolean(city.localAngle)

  if (city.tier === 1 && !isPublishable(city)) {
    errors.push(`${city.name} is Tier 1 but does not meet the minimum: needs a 100+ word localAngle, 3+ neighborhoods, a responseBand and at least one FAQ.`)
    continue
  }

  if (!enriched) {
    unenriched++
    continue // ships as a short page until the client interview fills it in
  }

  // Enriched, so hold it to the standard for its tier.
  if (!isPublishable(city)) {
    errors.push(`${city.name} has local content but is below the Tier ${city.tier} minimum — finish it or leave it unenriched.`)
  }
  if ((city.landmarks?.length ?? 0) < 2) warnings.push(`${city.name}: fewer than 2 landmarks.`)
  if (!city.gateProfile) warnings.push(`${city.name}: no gateProfile.`)
  if ((city.nearbyCities?.length ?? 0) < 3) warnings.push(`${city.name}: fewer than 3 nearbyCities, which weakens internal linking.`)
}

// --- 4. cross-city duplicate prose ------------------------------------------
// Any long sentence appearing on two city pages means the page is templated.

const SHINGLE = 20
const shingles = new Map<string, string[]>()

function addShingles(city: City, text: string | undefined) {
  if (!text) return
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
  for (let i = 0; i + SHINGLE <= words.length; i++) {
    const key = words.slice(i, i + SHINGLE).join(' ')
    const owners = shingles.get(key) ?? []
    if (!owners.includes(city.name)) owners.push(city.name)
    shingles.set(key, owners)
  }
}

for (const city of cities) {
  addShingles(city, city.localAngle)
  for (const faq of city.faqs ?? []) addShingles(city, faq.a)
}

const dupes = [...shingles.entries()].filter(([, owners]) => owners.length > 1)
for (const [phrase, owners] of dupes.slice(0, 10)) {
  errors.push(`Duplicated ${SHINGLE}-word phrase across ${owners.join(', ')}: "${phrase.slice(0, 70)}…"`)
}
if (dupes.length > 10) errors.push(`…and ${dupes.length - 10} more duplicated phrases.`)

// --- report -----------------------------------------------------------------

const byTier = { 1: 0, 2: 0, 3: 0 }
for (const c of cities) byTier[c.tier]++

console.log(`${cities.length} cities — Tier 1: ${byTier[1]}, Tier 2: ${byTier[2]}, Tier 3: ${byTier[3]}`)
console.log(`Client list: ${want.size} cities — exact match`)
console.log(`Enriched with local content: ${cities.length - unenriched} / ${cities.length}`)
console.log(`Awaiting the client's technician interview: ${unenriched}\n`)

if (warnings.length) {
  console.log(`${warnings.length} warning(s):`)
  for (const w of warnings.slice(0, 25)) console.log(`  ! ${w}`)
  if (warnings.length > 25) console.log(`  … and ${warnings.length - 25} more`)
  console.log('')
}

if (errors.length) {
  console.error(`${errors.length} error(s):`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}

console.log('✓ City data valid.')
