/**
 * Model pages — the contract.
 *
 * One page per important operator model, served at
 * /brands/<brandSlug>/<slug>, e.g. /brands/liftmaster/la500-repair.
 *
 * Each page has two jobs. It has to rank for "<brand> <model> repair" and the
 * near-me variants of it, and it has to turn the person who lands there into a
 * phone call. Those jobs agree more than they conflict: the thing that ranks a
 * model page is evidence that it knows that exact operator, and the thing that
 * makes someone standing in front of a dead LA500 pick up the phone is exactly
 * the same evidence.
 *
 * ── THE FAILURE THIS FILE EXISTS TO PREVENT ──────────────────────────────────
 * Hundreds of pages that are one template with the model name swapped. Google
 * treats that as scaled content and it drags the whole domain, including the
 * brand and city pages that currently rank. So:
 *
 *  - Every field below is model-specific. There is no field for generic
 *    company copy — the template supplies that once, around the model content.
 *  - `lib/model-quality.ts` measures each page against MODEL_QUALITY and against
 *    its sibling pages. A page that fails is still served (it can still be an
 *    Ads destination) but is `noindex` and kept out of the sitemap, whatever
 *    `indexable` says. The gate cannot be argued with by setting a flag.
 *
 * ── ON FACTS ─────────────────────────────────────────────────────────────────
 * The reader is often standing in front of the unit with the manual in the
 * box. An invented spec is a factual error and a credibility failure in the
 * same sentence. Specs, warranty terms and error codes come from manufacturer
 * documentation recorded in `sources`, or they are left out and listed in
 * `toConfirm`. Shield's own warranty term, prices and response times are NOT
 * written here — they are unconfirmed business facts (content/business.ts) and
 * the template renders them only once confirmed.
 */

import type { Passage } from '../services'

export type ModelSource = {
  /** e.g. "LiftMaster LA500 installation manual (PDF)". */
  label: string
  url: string
}

export type ModelPage = {
  // ── Identity ──────────────────────────────────────────────────────────────
  /** URL segment under /brands/<brandSlug>/. Lowercase, ends in "-repair": 'la500-repair'. */
  slug: string
  /** Slug in content/brands.ts. */
  brandSlug: string
  /** The model as printed and searched: 'LA500', 'CSW24UL', 'Patriot'. */
  model: string
  /**
   * Other numbers that refer to this operator and that a visitor may read off
   * a label or a manual: kit numbers, UL revisions, single/dual packages.
   * Verified only. Rendered in the identification block and in the FAQ schema
   * so "LA500PKGUL repair" still lands here.
   */
  aliases: string[]
  /** Plain descriptor, lowercase: 'residential DC linear-actuator swing gate operator'. */
  descriptor: string
  gateType: 'swing' | 'slide' | 'barrier' | 'underground-swing' | 'articulated-swing' | 'telephone-entry' | 'vertical-pivot'
  duty: 'residential' | 'residential-light-commercial' | 'commercial' | 'industrial'
  /** Production status at the time of research. */
  status: 'current' | 'discontinued' | 'superseded'
  /** Verified context for the status: 'Superseded by the LA412 …'. */
  statusNote?: string

  // ── Search ────────────────────────────────────────────────────────────────
  /**
   * <title>, rendered absolute (no site-name suffix). Max 60 characters.
   * Pattern: '<Brand> <Model> Repair | Dallas–Fort Worth', shortened to
   * '| DFW' only when the long form does not fit.
   */
  title: string
  /** 120–158 characters. Model, a real symptom, the area, and a call to act. */
  metaDescription: string
  /** Contains '<Brand> <Model> Repair'. Must differ from the brand page H1. */
  h1: string
  /**
   * One or two sentences directly under the H1. Confirms Shield works on this
   * exact operator and names the fault this model is most often called in for.
   * This is the line that stops the back button.
   */
  heroIntro: string
  /**
   * Three short, model-specific reasons to call, shown in the hero's Shield
   * panel. "We test the LA500 battery under load before condemning the arm" —
   * not "Fast, friendly service".
   */
  heroPoints: [string, string, string]

  // ── Body ─────────────────────────────────────────────────────────────────
  /** How a visitor confirms this is the operator on their gate. */
  identify: {
    body: string[]
    /** Short, concrete things to look for: label location, housing shape, colour, visible parts. */
    lookFor: string[]
  }
  /** Real information about the operator — how it works and what that means for repair. H3 passages. */
  overview: Passage[]
  /** Verified specifications only. Every value traceable to `sources`. */
  specs: { label: string; value: string }[]
  /** Model-specific symptoms. `symptom` is written the way an owner would describe it. */
  symptoms: { symptom: string; causes: string; whatWeDo: string }[]
  /** The parts we repair, adjust or replace on this operator. */
  components: {
    part: string
    whatItDoes: string
    failureSigns: string
    verdict: 'repair' | 'replace-part' | 'adjust' | 'service'
  }[]
  repairOrReplace: {
    /** One paragraph: the honest short answer for this model. */
    summary: string
    /** Situations where repair is the right call on this model. */
    repair: string[]
    /** Situations where replacement or an upgrade genuinely makes sense — with the upgrade path. */
    replace: string[]
  }
  /** Manufacturer warranty as published, and practical notes (what voids it, where it is stated). */
  warranty: {
    manufacturer: string
    notes: string[]
  }
  /** Why this model behaves the way it does in Dallas–Fort Worth conditions. H3 passages. */
  dfw: Passage[]
  /** How we diagnose and repair this model, in order. */
  process: { step: string; body: string }[]
  faqs: { q: string; a: string }[]

  // ── Links and evidence ───────────────────────────────────────────────────
  /** Other model pages, as '<brandSlug>/<slug>'. Neighbours a customer confuses this with, and upgrade paths. */
  relatedModels: string[]
  /** Slugs in content/services.ts. */
  relatedServices: string[]
  /** Media slugs CONFIRMED to show this model. Never a brand photo assumed to be this model. */
  imageSlugs?: string[]
  /** Case study slugs in content/projects.ts that involve this model. */
  projectSlugs?: string[]
  /** Video slugs in content/video-manifest.ts that show this model. */
  videoSlugs?: string[]

  // ── Provenance (never rendered) ──────────────────────────────────────────
  sources: ModelSource[]
  /** Claims a technician or the client should confirm. Non-empty is fine; hiding doubt is not. */
  toConfirm: string[]
  /**
   * Editorial intent to index. Necessary, not sufficient — the quality gate in
   * lib/model-quality.ts has the final say.
   */
  indexable: boolean
}

/**
 * The bar a model page must clear to be indexed.
 *
 * Word counts are of model-specific fields only (identify, overview, symptoms,
 * components, repairOrReplace, dfw, process, faqs). The template's shared
 * sections are deliberately not counted: they are identical on every page, so
 * they cannot be what makes one page worth indexing.
 *
 * `maxSiblingOverlap` is the share of a page's word 5-grams that also appear
 * on any other model page. Above it, the page is a variant of another page
 * rather than a page of its own.
 */
export const MODEL_QUALITY = {
  minModelWords: 1100,
  minOverviewPassages: 3,
  minSymptoms: 6,
  minComponents: 6,
  minFaqs: 5,
  minProcessSteps: 4,
  minSources: 2,
  maxSiblingOverlap: 0.2,
  titleMax: 60,
  descriptionMin: 120,
  descriptionMax: 158,
} as const
