/**
 * Symptom page validator.
 *
 * Fails the build on anything that would quietly rot: a broken cross-link, a
 * duplicate slug, a keyword pattern from the client's master list that no page
 * owns, or two pages claiming the same one.
 *
 * That last pair is the point of this file. The whole justification for 20
 * pages instead of 3,135 is that each of the 33 patterns in Section 4 has
 * exactly one page answering it. If a pattern loses its owner the coverage
 * claim is false; if two pages claim one, they are competing with each other
 * for the same query, which is the cannibalisation the architecture exists to
 * prevent. Neither is visible by reading the content files.
 *
 * Run under plain tsx, so every import here is relative.
 */

import { symptomPages, symptomPath } from '../content/symptoms'
import { services } from '../content/services'
import { brands } from '../content/brands'
import { modelPages, modelKey } from '../content/models'
import { assessSymptom, symptomWordCount } from '../lib/symptom-quality'

/**
 * The 33 Section 4 patterns from Shield_Gate_Repair_DFW_SEO_Master_Keywords.pdf,
 * with the city suffix stripped.
 *
 * Transcribed here rather than parsed from the PDF at build time: the PDF is
 * not in the repo, and a validator that silently passes when its input file is
 * missing is worse than no validator. If the client issues a new keyword list,
 * this array is what gets updated.
 */
const SECTION_4_PATTERNS = [
  'Automatic Gate Not Working',
  'Electric Gate Not Working',
  'Gate Battery Keeps Dying',
  'Gate Chain Broken',
  'Gate Circuit Board Not Working',
  "Gate Closes But Won't Open",
  'Gate Dragging On Ground',
  'Gate Hinge Broken',
  'Gate Keypad Not Working',
  'Gate Loop Detector Not Working',
  'Gate Motor Not Working',
  'Gate Not Working After Power Outage',
  'Gate Not Working After Storm',
  'Gate Opener Has No Power',
  'Gate Opener Not Working',
  "Gate Opens But Won't Close",
  'Gate Opens By Itself',
  'Gate Opens Halfway Then Stops',
  'Gate Photo Eye Not Working',
  'Gate Post Leaning',
  'Gate Remote Not Working',
  'Gate Reverses When Closing',
  'Gate Roller Broken',
  'Gate Sagging',
  'Gate Sensor Not Working',
  'Gate Stops Halfway',
  'Gate Track Damaged',
  'Gate Wheel Broken',
  "Gate Won't Close",
  "Gate Won't Open",
  'Sliding Gate Off Track',
  'Sliding Gate Stuck',
  'Swing Gate Stuck',
]

/** Apostrophe-insensitive: content files use ’ and the keyword list uses '. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const problems: string[] = []
const fail = (msg: string) => problems.push(msg)

// ── Slugs and identity ──────────────────────────────────────────────────────
const slugs = new Set<string>()
for (const page of symptomPages) {
  if (slugs.has(page.slug)) fail(`duplicate slug: ${page.slug}`)
  slugs.add(page.slug)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(page.slug)) fail(`slug is not clean kebab-case: ${page.slug}`)
  if (page.searchedAs.length === 0) fail(`${page.slug}: searchedAs is empty`)
}

// Titles must not collide, or two pages compete for one result.
const titles = new Map<string, string>()
for (const page of symptomPages) {
  const key = page.title.toLowerCase()
  const other = titles.get(key)
  if (other) fail(`${page.slug} and ${other} share the title "${page.title}"`)
  titles.set(key, page.slug)
}

// ── Cross-references ────────────────────────────────────────────────────────
const serviceSlugs = new Set(services.map((s) => s.slug))
const brandSlugs = new Set(brands.map((b) => b.slug))
const modelKeys = new Set(modelPages.map(modelKey))

for (const page of symptomPages) {
  for (const ref of page.relatedServices)
    if (!serviceSlugs.has(ref)) fail(`${page.slug}: relatedServices "${ref}" is not a service`)
  for (const ref of page.relatedSymptoms) {
    if (!slugs.has(ref)) fail(`${page.slug}: relatedSymptoms "${ref}" is not a symptom page`)
    if (ref === page.slug) fail(`${page.slug}: links to itself in relatedSymptoms`)
  }
  for (const ref of page.relatedBrands ?? [])
    if (!brandSlugs.has(ref)) fail(`${page.slug}: relatedBrands "${ref}" is not a brand`)
  for (const ref of page.relatedModels ?? [])
    if (!modelKeys.has(ref)) fail(`${page.slug}: relatedModels "${ref}" is not a model page`)
  if (page.relatedServices.length === 0) fail(`${page.slug}: no related service — the page is a dead end`)
}

// ── Keyword ownership ───────────────────────────────────────────────────────
const owners = new Map<string, string[]>()
for (const page of symptomPages)
  for (const phrase of page.searchedAs) {
    const key = norm(phrase)
    owners.set(key, [...(owners.get(key) ?? []), page.slug])
  }

for (const pattern of SECTION_4_PATTERNS) {
  const claimants = owners.get(norm(pattern))
  if (!claimants) fail(`no page owns the keyword pattern "${pattern}"`)
  else if (new Set(claimants).size > 1)
    fail(`"${pattern}" is claimed by ${[...new Set(claimants)].join(' and ')} — they will cannibalise each other`)
}

// ── Quality gate ────────────────────────────────────────────────────────────
const assessments = symptomPages.map(assessSymptom)
const held = assessments.filter((a) => !a.indexable)

// ── Report ──────────────────────────────────────────────────────────────────
console.log('Symptom pages')
console.log('─'.repeat(78))
for (const page of symptomPages) {
  const a = assessSymptom(page)
  console.log(
    `  ${page.slug.padEnd(32)} ${String(symptomWordCount(page)).padStart(5)}w  ` +
      `${String(Math.round(a.overlap * 100)).padStart(2)}% overlap  ` +
      `${a.indexable ? 'indexed' : 'HELD'}`,
  )
}
console.log('─'.repeat(78))
console.log(`  ${symptomPages.length} pages, ${symptomPages.length - held.length} indexed`)
console.log(`  ${SECTION_4_PATTERNS.length} keyword patterns owned, one page each`)
console.log(`  first page: ${symptomPath(symptomPages[0])}`)

if (held.length > 0) {
  console.log('\nHeld back by the quality gate (served, noindex, out of the sitemap):')
  for (const a of held) console.log(`  ${a.slug}\n    - ${a.problems.join('\n    - ')}`)
}

if (problems.length > 0) {
  console.error(`\n✗ ${problems.length} problem(s):`)
  for (const p of problems) console.error(`  - ${p}`)
  process.exit(1)
}

console.log('\n✓ Symptom page references, slugs and keyword ownership valid.')
