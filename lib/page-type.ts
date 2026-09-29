/**
 * What kind of page is this, and which thing is it about?
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
 * The site is 251 indexed URLs across six distinct page types. "A lead came
 * from the website" is therefore close to useless as a statement — the useful
 * question is whether it came from the Plano city page, the LA500 model page
 * or "gate won't close", because those answer completely different questions
 * about what to build more of.
 *
 * Knowing the page type turns the lead table into the only report that can
 * actually justify the content work: which of the 96 city pages, 43 model
 * pages and 20 symptom pages produce calls, and which produce nothing.
 *
 * Derived from the path rather than stored per page, so a new page is
 * classified correctly the moment it exists with no extra bookkeeping.
 *
 * Relative imports, not `@/`: API routes and scripts both load this.
 */

export type PageType =
  | 'home'
  | 'city'
  | 'model'
  | 'symptom'
  | 'service'
  | 'brand'
  | 'project'
  | 'video'
  | 'landing'
  | 'other'

export const PAGE_TYPE_LABEL: Record<PageType, string> = {
  home: 'Homepage',
  city: 'City page',
  model: 'Model page',
  symptom: 'Gate problem page',
  service: 'Service page',
  brand: 'Brand page',
  project: 'Case study',
  video: 'Video page',
  landing: 'Ads landing page',
  other: 'Other page',
}

export type PageIdentity = {
  type: PageType
  /**
   * The subject of the page, in a form that groups sensibly in a report:
   * the city slug, the model key, the symptom slug. Empty for pages that are
   * not about one thing.
   */
  subject: string
  label: string
}

/** Known Ads landing pages live at the site root, so they need naming. */
const LANDING_PATHS = new Set([
  '/liftmaster-gate-opener-repair',
  '/doorking-repair',
  '/elite-gate-repair',
  '/faac-gate-repair',
  '/viking-gate-repair',
  '/apollo-gate-repair',
  '/samedaygaterepair',
])

const clean = (pathname: string): string => {
  try {
    // Accept a full URL or a bare path.
    const p = pathname.startsWith('http') ? new URL(pathname).pathname : pathname
    const trimmed = p.split('?')[0].split('#')[0].replace(/\/+$/, '')
    return trimmed === '' ? '/' : trimmed.toLowerCase()
  } catch {
    return '/'
  }
}

export function identifyPage(pathname: string): PageIdentity {
  const path = clean(pathname)

  if (path === '/') return { type: 'home', subject: '', label: 'Homepage' }

  // /gate-repair-<city>-tx
  const city = path.match(/^\/gate-repair-([a-z0-9-]+)-tx$/)
  if (city) return { type: 'city', subject: city[1], label: `City: ${city[1]}` }

  // /brands/<brand>/<model>-repair
  const model = path.match(/^\/brands\/([a-z0-9-]+)\/([a-z0-9-]+)$/)
  if (model) return { type: 'model', subject: `${model[1]}/${model[2]}`, label: `Model: ${model[2]}` }

  // /brands/<brand>
  const brand = path.match(/^\/brands\/([a-z0-9-]+)$/)
  if (brand) return { type: 'brand', subject: brand[1], label: `Brand: ${brand[1]}` }

  // /gate-problems/<symptom>
  const symptom = path.match(/^\/gate-problems\/([a-z0-9-]+)$/)
  if (symptom) return { type: 'symptom', subject: symptom[1], label: `Problem: ${symptom[1]}` }
  if (path === '/gate-problems') return { type: 'symptom', subject: '', label: 'Gate problems hub' }

  // /services/<service>
  const service = path.match(/^\/services\/([a-z0-9-]+)$/)
  if (service) return { type: 'service', subject: service[1], label: `Service: ${service[1]}` }

  // /projects/<slug>
  const project = path.match(/^\/projects\/([a-z0-9-]+)$/)
  if (project) return { type: 'project', subject: project[1], label: `Case study: ${project[1]}` }

  // /repair-videos/<slug>
  const video = path.match(/^\/repair-videos\/([a-z0-9-]+)$/)
  if (video) return { type: 'video', subject: video[1], label: `Video: ${video[1]}` }

  if (LANDING_PATHS.has(path)) return { type: 'landing', subject: path.slice(1), label: `Ads: ${path.slice(1)}` }

  // /emergency and the rest of the fixed pages.
  return { type: 'other', subject: path.slice(1), label: path }
}
