/**
 * The indexing gate for symptom pages.
 *
 * Same contract as lib/model-quality.ts, for the same reason: the person who
 * sets `indexable: true` is the person who wants the page indexed, so the
 * decision is measured here instead and the route, the sitemap and the
 * cross-links all ask this module.
 *
 * Symptom pages carry a specific duplication risk that model pages do not.
 * Twenty pages about a gate misbehaving share a vocabulary — photo-eye,
 * limit switch, obstruction, capacitor — and they genuinely share causes. The
 * overlap check is what keeps "gate won't open" and "gate won't close" as two
 * pages that answer two questions rather than one page served twice.
 *
 * Relative imports, not `@/`: scripts/validate-symptoms.ts loads this under
 * plain tsx.
 */

import { symptomPages } from '../content/symptoms'
import { SYMPTOM_QUALITY, type SymptomPage } from '../content/symptoms/types'

const SHINGLE = 5

/**
 * The prose that justifies the page existing.
 *
 * `searchedAs` is excluded deliberately — it is the keyword list, and letting
 * keywords count toward the word floor would reward exactly the padding this
 * gate exists to catch. `doNot` is excluded for a subtler reason: safety
 * warnings are similar across these pages *and should be*, so counting them
 * would both inflate word counts and inflate measured overlap.
 */
export function symptomText(page: SymptomPage): string {
  return [
    page.heroIntro,
    ...page.heroPoints,
    page.urgencyNote,
    ...page.whatIsHappening.flatMap((p) => [p.heading, ...p.body]),
    ...page.causes.flatMap((c) => [c.cause, c.howToTell, c.fix]),
    ...page.checkFirst.flatMap((c) => [c.step, c.body]),
    page.outlook.summary,
    ...page.outlook.usuallyRepair,
    ...page.outlook.sometimesReplace,
    ...page.dfw.flatMap((p) => [p.heading, ...p.body]),
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ')
}

const tokens = (text: string) =>
  text
    .toLowerCase()
    .replace(/[’']/g, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean)

export const symptomWordCount = (page: SymptomPage) => tokens(symptomText(page)).length

function shingles(page: SymptomPage): Set<string> {
  const words = tokens(symptomText(page))
  const out = new Set<string>()
  for (let i = 0; i + SHINGLE <= words.length; i++) out.add(words.slice(i, i + SHINGLE).join(' '))
  return out
}

type Overlap = {
  /** Share of this page's 5-grams found on at least one other symptom page. */
  overlap: number
  closest: string | null
  closestShare: number
}

let overlapCache: Map<string, Overlap> | null = null

function overlaps(): Map<string, Overlap> {
  if (overlapCache) return overlapCache

  const sets = symptomPages.map((p) => [p.slug, shingles(p)] as const)
  const pagesPerGram = new Map<string, number>()
  for (const [, set] of sets) for (const gram of set) pagesPerGram.set(gram, (pagesPerGram.get(gram) ?? 0) + 1)

  overlapCache = new Map()
  for (const [slug, set] of sets) {
    let shared = 0
    for (const gram of set) if ((pagesPerGram.get(gram) ?? 0) > 1) shared++

    let closest: string | null = null
    let closestShare = 0
    for (const [otherSlug, other] of sets) {
      if (otherSlug === slug || set.size === 0) continue
      let n = 0
      for (const gram of set) if (other.has(gram)) n++
      if (n / set.size > closestShare) {
        closest = otherSlug
        closestShare = n / set.size
      }
    }

    overlapCache.set(slug, { overlap: set.size ? shared / set.size : 0, closest, closestShare })
  }
  return overlapCache
}

export type SymptomAssessment = Overlap & {
  slug: string
  indexable: boolean
  words: number
  problems: string[]
}

const pct = (n: number) => `${Math.round(n * 100)}%`

export function assessSymptom(page: SymptomPage): SymptomAssessment {
  const q = SYMPTOM_QUALITY
  const words = symptomWordCount(page)
  const o = overlaps().get(page.slug) ?? { overlap: 0, closest: null, closestShare: 0 }
  const problems: string[] = []

  if (!page.indexable) problems.push('marked indexable: false in its content file')
  if (words < q.minWords) problems.push(`${words} words of diagnostic content (min ${q.minWords})`)
  if (page.causes.length < q.minCauses) problems.push(`${page.causes.length} causes (min ${q.minCauses})`)
  if (page.whatIsHappening.length < q.minHappeningPassages)
    problems.push(`${page.whatIsHappening.length} explanation passages (min ${q.minHappeningPassages})`)
  if (page.checkFirst.length < q.minChecks) problems.push(`${page.checkFirst.length} checks (min ${q.minChecks})`)
  if (page.faqs.length < q.minFaqs) problems.push(`${page.faqs.length} FAQs (min ${q.minFaqs})`)
  if (page.dfw.length < q.minDfwPassages) problems.push(`${page.dfw.length} DFW passages (min ${q.minDfwPassages})`)
  if (page.title.length > q.titleMax) problems.push(`title is ${page.title.length} chars (max ${q.titleMax})`)
  if (page.metaDescription.length < q.descriptionMin || page.metaDescription.length > q.descriptionMax)
    problems.push(
      `meta description is ${page.metaDescription.length} chars (${q.descriptionMin}–${q.descriptionMax})`,
    )

  /**
   * At least one cause an owner can resolve themselves.
   *
   * This is a content-quality rule expressed as a gate. A symptom page whose
   * every answer is "call us" is not diagnostic writing, it is an advert with
   * headings, and it will read like its nineteen siblings because the only
   * thing it contains is our phone number.
   */
  if (!page.causes.some((c) => c.ownerCanFix))
    problems.push('no cause the owner can resolve themselves — the page is an advert, not a diagnosis')

  if (o.overlap > q.maxSiblingOverlap)
    problems.push(
      `${pct(o.overlap)} of its 5-word phrases appear on other symptom pages (max ${pct(q.maxSiblingOverlap)}; closest ${o.closest} at ${pct(o.closestShare)})`,
    )

  return { slug: page.slug, words, ...o, problems, indexable: problems.length === 0 }
}

export const isSymptomIndexable = (page: SymptomPage) => assessSymptom(page).indexable

export const indexableSymptomPages = () => symptomPages.filter(isSymptomIndexable)
