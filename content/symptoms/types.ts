/**
 * Symptom pages — the contract.
 *
 * One page per distinct fault, served at /gate-problems/<slug>.
 *
 * ── WHY THIS PAGE TYPE EXISTS ────────────────────────────────────────────────
 * Section 4 of the client's master keyword list is 3,135 keywords — 31% of the
 * entire document — and every one of them is a symptom: "Gate Won't Close",
 * "Gate Opens Halfway Then Stops", "Sliding Gate Off Track". Before this file
 * those phrases existed on the site only *inside* service and model pages.
 * Nothing owned them. A page that mentions a query and a page that answers it
 * are not the same thing, and Google ranks the second.
 *
 * They are also the highest-intent terms in the list. Someone searching "gate
 * won't close" is standing next to an open gate they cannot secure. That is a
 * phone call now, not research for next month.
 *
 * ── WHY 20 PAGES AND NOT 3,135 ───────────────────────────────────────────────
 * The 3,135 keywords are 33 patterns × 95 cities. Strip the city and the real
 * count is 33 faults, which collapse to 20 once you merge the ones with the
 * same diagnosis: "Gate Won't Open" and "Gate Closes But Won't Open" are one
 * page, because the causes and the fix are identical and splitting them would
 * produce two pages that differ by a word.
 *
 * The city half of each keyword is carried by the city pages, which link here.
 * Building 33 × 95 = 3,135 URLs would be the scaled-content abuse the brief
 * forbids, and the client's own keyword document says so on page 1: "avoid
 * duplicate/thin city pages".
 *
 * ── THE STANDARD ─────────────────────────────────────────────────────────────
 * These pages are diagnostic, not promotional. The reader is mid-problem, so
 * the page leads with what is wrong and what they can safely check themselves
 * — including the checks that mean they do not need to call us. A page that
 * only says "call us" for every symptom is worthless to the reader and, being
 * indistinguishable from its 19 siblings, worthless to search.
 *
 * `lib/symptom-quality.ts` measures each page against SYMPTOM_QUALITY and
 * against its siblings. A failing page is still served but is noindex and out
 * of the sitemap whatever `indexable` says — the same bargain the model pages
 * make, for the same reason.
 */

import type { Passage } from '../services'
import type { ModelSource } from '../models/types'

/**
 * One candidate cause, ordered most likely first.
 *
 * `howToTell` is what makes this page useful rather than a list: it is the
 * observable difference between this cause and the one above it. Without it a
 * reader with a gate that will not close learns only that it could be six
 * things, which they already knew.
 */
export type SymptomCause = {
  /** The fault itself: 'Photo-eye out of alignment'. */
  cause: string
  /** How likely this is, among the causes of THIS symptom. */
  likelihood: 'most common' | 'common' | 'less common' | 'rare'
  /** The observable test that distinguishes this cause from the others. */
  howToTell: string
  /** What fixing it actually involves. Honest about whether it is minutes or a part. */
  fix: string
  /**
   * Whether a careful owner can resolve this without a technician.
   * Being straight about this is the point: it is what makes the page worth
   * reading and linking to, and someone we honestly tell to reseat a photo-eye
   * calls us for the fault we cannot talk them through.
   */
  ownerCanFix: boolean
}

export type SymptomPage = {
  // ── Identity ──────────────────────────────────────────────────────────────
  /** URL segment under /gate-problems/. Lowercase, hyphenated: 'gate-wont-close'. */
  slug: string
  /** Short label for cross-links and breadcrumbs: 'Gate won’t close'. */
  label: string
  /**
   * The keyword-list phrasings this page is the answer to, verbatim from the
   * client's master list. Rendered once, as the "also searched as" line, and
   * used by scripts/validate-symptoms.ts to prove every Section 4 pattern has
   * exactly one owner. Not a keyword dump: if a phrase needs a different
   * answer, it needs a different page.
   */
  searchedAs: string[]
  /** Which gates this fault applies to — drives the applicability note. */
  applies: 'swing' | 'slide' | 'both'

  // ── Triage ────────────────────────────────────────────────────────────────
  /**
   * What is at stake while the fault is unfixed, which decides how the page
   * opens and whether it pushes the emergency number.
   *
   * 'security'      — the gate is stuck open; the property is not secured.
   * 'safety'        — the gate can injure someone or is structurally unsound.
   * 'access'        — people cannot get in or out.
   * 'inconvenience' — annoying, not urgent. Say so rather than manufacture panic.
   */
  urgency: 'security' | 'safety' | 'access' | 'inconvenience'
  /** One sentence on what the urgency means in practice. */
  urgencyNote: string

  // ── Search ────────────────────────────────────────────────────────────────
  /** <title>, absolute, max 60 characters. */
  title: string
  /** 120–158 characters. The symptom, the likeliest cause, the area. */
  metaDescription: string
  /** Must contain the symptom as an owner would say it. */
  h1: string
  /** One or two sentences under the H1: what this usually turns out to be. */
  heroIntro: string
  /** Three specific, diagnostic reasons to trust this page. Not 'fast friendly service'. */
  heroPoints: [string, string, string]

  // ── Body ─────────────────────────────────────────────────────────────────
  /** What is mechanically or electrically happening. H3 passages. */
  whatIsHappening: Passage[]
  /** Ranked candidate causes. The core of the page. */
  causes: SymptomCause[]
  /** Safe checks in order, before calling anyone. */
  checkFirst: { step: string; body: string }[]
  /**
   * Things not to do. Gate operators move hundreds of pounds under power and
   * the internet is full of advice that will hurt someone.
   */
  doNot: string[]
  /** Honest outlook: is this normally a repair or the end of the operator? */
  outlook: {
    summary: string
    usuallyRepair: string[]
    sometimesReplace: string[]
  }
  /** Why this fault behaves as it does in Dallas–Fort Worth specifically. */
  dfw: Passage[]
  faqs: { q: string; a: string }[]

  // ── Links ────────────────────────────────────────────────────────────────
  /** Slugs in content/services.ts. */
  relatedServices: string[]
  /** Other symptom slugs — the faults this one is confused with or leads to. */
  relatedSymptoms: string[]
  /** Brand slugs where this fault is characteristic of that manufacturer's design. */
  relatedBrands?: string[]
  /** Model pages as '<brandSlug>/<slug>' where this fault is a known trait. */
  relatedModels?: string[]

  // ── Provenance (never rendered) ──────────────────────────────────────────
  sources: ModelSource[]
  toConfirm: string[]
  /** Editorial intent. Necessary, not sufficient — the gate decides. */
  indexable: boolean
}

/**
 * The bar a symptom page must clear to be indexed.
 *
 * Lower word floor than MODEL_QUALITY (1,100) on purpose. A model page has a
 * whole product to describe; a symptom page that pads past its useful content
 * to hit a number is worse for the reader standing at a broken gate, and
 * padding is exactly what the overlap check catches anyway.
 */
export const SYMPTOM_QUALITY = {
  minWords: 900,
  minCauses: 5,
  minHappeningPassages: 2,
  minChecks: 3,
  minFaqs: 4,
  minDfwPassages: 1,
  maxSiblingOverlap: 0.2,
  titleMax: 60,
  descriptionMin: 120,
  descriptionMax: 158,
} as const
