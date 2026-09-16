/**
 * Model page guard. Runs against the source, before a build, because every
 * thing it checks is a content decision rather than a rendering one.
 *
 * Two kinds of finding:
 *
 *  - ERRORS fail the run. Broken references (a related model, service, image,
 *    case study or video that does not exist), malformed slugs, duplicate
 *    URLs, and titles or H1s that collide with another page. These are bugs.
 *
 *  - HELD BACK is not a failure. A page below the quality gate is still built
 *    and served, just `noindex` and out of the sitemap. It is listed with its
 *    reasons so someone can decide whether to deepen it or leave it paid-only.
 *
 *   npm run validate:models
 */

import { brands, brandBySlug } from '../content/brands'
import { services } from '../content/services'
import { media } from '../content/media-manifest'
import { projects } from '../content/projects'
import { videos } from '../content/video-manifest'
import { modelPages, modelKey } from '../content/models'
import { assessModel } from '../lib/model-quality'

const errors: string[] = []

const imageSlugs = new Set(Object.values(media).flat().map((i) => i.slug))
const projectSlugs = new Set(projects.map((p) => p.slug))
const videoSlugs = new Set(videos.map((v) => v.slug))
const serviceSlugs = new Set(services.map((s) => s.slug))
const keys = new Set<string>()

// Titles and H1s already used by the brand pages. A model page repeating one
// would compete with its own parent.
const brandTitles = new Set(brands.map((b) => `${b.name} Gate Opener Repair | Dallas–Fort Worth`))
const brandHeadlines = new Set(brands.map((b) => b.headline))
const titles = new Map<string, string>()

for (const page of modelPages) {
  const key = modelKey(page)
  const at = `${key}:`

  if (keys.has(key)) errors.push(`${at} duplicate URL`)
  keys.add(key)

  if (!brandBySlug(page.brandSlug)) errors.push(`${at} unknown brandSlug "${page.brandSlug}"`)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*-repair$/.test(page.slug))
    errors.push(`${at} slug must be lowercase words joined by hyphens, ending in "-repair"`)

  for (const related of page.relatedModels) {
    if (related === key) errors.push(`${at} lists itself in relatedModels`)
    else if (!modelPages.some((m) => modelKey(m) === related))
      errors.push(`${at} relatedModels "${related}" has no page`)
  }
  for (const s of page.relatedServices) if (!serviceSlugs.has(s)) errors.push(`${at} unknown service "${s}"`)
  for (const s of page.imageSlugs ?? []) if (!imageSlugs.has(s)) errors.push(`${at} unknown image "${s}"`)
  for (const s of page.projectSlugs ?? []) if (!projectSlugs.has(s)) errors.push(`${at} unknown project "${s}"`)
  for (const s of page.videoSlugs ?? []) if (!videoSlugs.has(s)) errors.push(`${at} unknown video "${s}"`)
  for (const source of page.sources)
    if (!/^https?:\/\//.test(source.url)) errors.push(`${at} source "${source.label}" has no http(s) URL`)

  if (brandTitles.has(page.title)) errors.push(`${at} title duplicates its brand page`)
  if (brandHeadlines.has(page.h1)) errors.push(`${at} H1 duplicates a brand page headline`)
  const clash = titles.get(page.title)
  if (clash) errors.push(`${at} title duplicates ${clash}: "${page.title}"`)
  titles.set(page.title, key)
}

// --- report -----------------------------------------------------------------

const assessments = modelPages.map(assessModel)
const indexed = assessments.filter((a) => a.indexable)
const held = assessments.filter((a) => !a.indexable)

console.log(`${modelPages.length} model pages — ${indexed.length} indexed, ${held.length} held back\n`)
console.log('  words  overlap  closest                                   page')
for (const a of [...assessments].sort((x, y) => x.key.localeCompare(y.key))) {
  const flag = a.indexable ? '✓' : '·'
  console.log(
    `${flag} ${String(a.words).padStart(5)}  ${`${Math.round(a.overlap * 100)}%`.padStart(7)}  ${(a.closest ?? '—').padEnd(40)}  ${a.key}`,
  )
}

if (held.length) {
  console.log(`\nHeld back (served, noindex, not in sitemap):`)
  for (const a of held) console.log(`  · ${a.key}\n      ${a.problems.join('\n      ')}`)
}

const unconfirmed = modelPages.reduce((n, p) => n + p.toConfirm.length, 0)
if (unconfirmed) console.log(`\n${unconfirmed} claim(s) across all model pages are listed in toConfirm.`)

if (errors.length) {
  console.error(`\n${errors.length} error(s):`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}

console.log('\n✓ Model page references, slugs and titles valid.')
