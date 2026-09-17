/**
 * The indexing gate for model pages.
 *
 * The brief for model pages was explicit that the site must not become
 * hundreds of thin pages made by changing a model name. A flag in a content
 * file cannot enforce that — the person setting the flag is the person who
 * wants the page indexed — so the decision is measured here instead, and the
 * route, the sitemap and the cross-links all ask this module rather than
 * reading `indexable` directly.
 *
 * A page that fails is still built and still served. It can be an Ads
 * destination and it is still linked from its brand page. It is `noindex,
 * follow` and absent from the sitemap until it earns its place, which is the
 * same bargain the Ads landing pages and the 176 thinner city pages already
 * make.
 *
 * Relative imports, not `@/`: scripts/validate-models.ts loads this under
 * plain tsx.
 */

import { brandBySlug } from '../content/brands'
import { modelPages, modelKey } from '../content/models'
import { MODEL_QUALITY, type ModelPage } from '../content/models/types'

const SHINGLE = 5

/**
 * The prose that has to justify a page existing — the model-specific fields.
 * Specs, warranty and the template's shared sections are excluded on purpose:
 * a spec table is not prose, and shared copy is identical on every page.
 */
export function modelText(page: ModelPage): string {
  return [
    ...page.identify.body,
    ...page.identify.lookFor,
    ...page.overview.flatMap((p) => [p.heading, ...p.body]),
    ...page.symptoms.flatMap((s) => [s.symptom, s.causes, s.whatWeDo]),
    ...page.components.flatMap((c) => [c.part, c.whatItDoes, c.failureSigns]),
    page.repairOrReplace.summary,
    ...page.repairOrReplace.repair,
    ...page.repairOrReplace.replace,
    ...page.dfw.flatMap((p) => [p.heading, ...p.body]),
    ...page.process.flatMap((s) => [s.step, s.body]),
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ')
}

const tokens = (text: string) =>
  text
    .toLowerCase()
    .replace(/[’']/g, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean)

export const modelWordCount = (page: ModelPage) => tokens(modelText(page)).length

function shingles(page: ModelPage): Set<string> {
  const words = tokens(modelText(page))
  const out = new Set<string>()
  for (let i = 0; i + SHINGLE <= words.length; i++) out.add(words.slice(i, i + SHINGLE).join(' '))
  return out
}

type Overlap = {
  /** Share of this page's 5-grams found on at least one other model page. */
  overlap: number
  /** The single page it shares most with, and how much. */
  closest: string | null
  closestShare: number
}

/**
 * Computed once per process across every model page. Pairwise is quadratic,
 * but at tens of pages and ~1,500 words each it is a few million set lookups —
 * well under a second, once, at build.
 */
let overlapCache: Map<string, Overlap> | null = null

function overlaps(): Map<string, Overlap> {
  if (overlapCache) return overlapCache

  const sets = modelPages.map((p) => [modelKey(p), shingles(p)] as const)
  const pagesPerGram = new Map<string, number>()
  for (const [, set] of sets) for (const gram of set) pagesPerGram.set(gram, (pagesPerGram.get(gram) ?? 0) + 1)

  overlapCache = new Map()
  for (const [key, set] of sets) {
    let shared = 0
    for (const gram of set) if ((pagesPerGram.get(gram) ?? 0) > 1) shared++

    let closest: string | null = null
    let closestShare = 0
    for (const [otherKey, other] of sets) {
      if (otherKey === key || set.size === 0) continue
      let n = 0
      for (const gram of set) if (other.has(gram)) n++
      if (n / set.size > closestShare) {
        closest = otherKey
        closestShare = n / set.size
      }
    }

    overlapCache.set(key, { overlap: set.size ? shared / set.size : 0, closest, closestShare })
  }
  return overlapCache
}

export type ModelAssessment = Overlap & {
  key: string
  indexable: boolean
  words: number
  /** Every reason the page is held back. Empty means indexed. */
  problems: string[]
}

const pct = (n: number) => `${Math.round(n * 100)}%`

export function assessModel(page: ModelPage): ModelAssessment {
  const q = MODEL_QUALITY
  const key = modelKey(page)
  const words = modelWordCount(page)
  const brand = brandBySlug(page.brandSlug)
  const o = overlaps().get(key) ?? { overlap: 0, closest: null, closestShare: 0 }
  const problems: string[] = []

  if (!page.indexable) problems.push('marked indexable: false in its content file')
  if (words < q.minModelWords) problems.push(`${words} model-specific words (min ${q.minModelWords})`)
  if (page.overview.length < q.minOverviewPassages)
    problems.push(`${page.overview.length} overview passages (min ${q.minOverviewPassages})`)
  if (page.symptoms.length < q.minSymptoms) problems.push(`${page.symptoms.length} symptoms (min ${q.minSymptoms})`)
  if (page.components.length < q.minComponents)
    problems.push(`${page.components.length} components (min ${q.minComponents})`)
  if (page.faqs.length < q.minFaqs) problems.push(`${page.faqs.length} FAQs (min ${q.minFaqs})`)
  if (page.process.length < q.minProcessSteps)
    problems.push(`${page.process.length} process steps (min ${q.minProcessSteps})`)
  if (page.sources.length < q.minSources) problems.push(`${page.sources.length} sources (min ${q.minSources})`)
  if (page.title.length > q.titleMax) problems.push(`title is ${page.title.length} chars (max ${q.titleMax})`)
  if (page.metaDescription.length < q.descriptionMin || page.metaDescription.length > q.descriptionMax)
    problems.push(
      `meta description is ${page.metaDescription.length} chars (${q.descriptionMin}–${q.descriptionMax})`,
    )
  if (brand && !page.h1.includes(`${brand.name} ${page.model}`))
    problems.push(`H1 does not contain "${brand.name} ${page.model}"`)
  if (o.overlap > q.maxSiblingOverlap)
    problems.push(
      `${pct(o.overlap)} of its 5-word phrases appear on other model pages (max ${pct(q.maxSiblingOverlap)}; closest ${o.closest} at ${pct(o.closestShare)})`,
    )

  return { key, words, ...o, problems, indexable: problems.length === 0 }
}

export const isModelIndexable = (page: ModelPage) => assessModel(page).indexable

export const indexableModelPages = () => modelPages.filter(isModelIndexable)
