import { NextResponse, type NextRequest } from 'next/server'

/**
 * 410 Gone for the retired WordPress estate.
 *
 * ── WHY THIS IS NOT IN netlify.toml ─────────────────────────────────────────
 * It was, and it never worked. netlify.toml carried eleven `status = 410,
 * force = true` rules for the California pages from 6 Sep 2026; measured
 * against production on 17 Sep they all served 404. Three independent reasons,
 * from Netlify's own docs:
 *
 *  1. Request order (docs updated 18 Mar 2026) is serverless functions →
 *     redirects → static files. The Next.js runtime IS a serverless function,
 *     so it claims every path and answers before the redirect engine is
 *     consulted.
 *  2. `force = true` only overrides *static files in the publish directory*.
 *     It does not override a framework runtime. The docs are explicit that a
 *     matching function "is always invoked" unless it opts into preferStatic.
 *  3. Netlify documents 200, 301, 302 and 404 as redirect statuses. 410 is not
 *     among them.
 *
 * Middleware runs ahead of routing inside the runtime that was winning, which
 * is why the status can be set here and nowhere else. The header rules in
 * netlify.toml are unaffected and stay there — those are verified live.
 *
 * ── WHY 410 RATHER THAN 404 ─────────────────────────────────────────────────
 * Google re-crawls a 404 for months in case it comes back. A 410 states the
 * removal was deliberate and drops the URL materially faster. Search Console
 * on 17 Sep 2026 listed 111 pages under "Alternate page with proper canonical
 * tag", and roughly 60 of them were WordPress crawl-trap URLs last seen in
 * early July — paths like
 *   /liftmaster-gate-motor-repair/cities/cities/mesquite-gate-repair.html
 * produced by relative links resolving against the wrong base, multiplying
 * without limit. They are all dead. Saying so plainly is what clears them.
 *
 * ── WHAT THIS MUST NEVER CATCH ──────────────────────────────────────────────
 * Everything the live site owns. The guards below are ordered so that any
 * current route, any legacy path that already 301s from next.config.ts, and
 * /samedaygaterepair.html — a live Google Ads destination that returns 200 —
 * pass straight through untouched. scripts/validate-gone.ts asserts exactly
 * that against the built route list, so a new page can never silently fall
 * into one of these patterns.
 */

/** Retired California pages. Both slash forms; the list is closed. */
const RETIRED_CALIFORNIA = new Set([
  '/los-angeles-county',
  '/gate-repair-los-angeles',
  '/orange-county',
  '/gate-repair-orange-county',
  '/ventura-county',
  '/gate-repair-ventura-county',
  '/electric-automatic-gate-repair-ventura-county',
  '/san-bernardino-county',
  '/gate-repair-san-bernardino-county',
  '/riverside-county',
  '/santa-barbara-county',
  '/san-luis-obispo-county',
  '/gate-repair-san-luis-obispo-county',
  '/electric-gate-repair-santa-barbara-san-luis-obispo',
  '/kern-county',
  '/imperial-county',
  '/gate-repair-fresno',
])

/**
 * Top-level segments the current site owns. A path whose first segment is one
 * of these is never 410'd, whatever else it looks like — this is the guard that
 * stops a future route being killed by a pattern written today.
 */
const LIVE_SEGMENTS = new Set([
  'about',
  'api',
  'apollo-gate-repair',
  'brands',
  'contact',
  'doorking-repair',
  'elite-gate-repair',
  'emergency',
  'faac-gate-repair',
  'faq',
  'liftmaster-gate-opener-repair',
  'privacy-policy',
  'projects',
  'r',
  'repair-videos',
  'service-areas',
  'services',
  'testimonials',
  'viking-gate-repair',
  'warranty',
])

/** Served as a real page: a static HTML Ads destination, not a WordPress leftover. */
const KEEP_EXACT = new Set(['/samedaygaterepair', '/samedaygaterepair.html'])

/** City pages are /gate-repair-<city>-tx and are all live. */
const isCityPath = (path: string) => /^\/gate-repair-[a-z0-9-]+-tx$/.test(path)

export function isGone(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (KEEP_EXACT.has(path)) return false
  if (isCityPath(path)) return false

  const [, first] = path.split('/')
  if (RETIRED_CALIFORNIA.has(path)) return true

  // Anything under a retired California parent, e.g.
  // /los-angeles-county/services/about.html
  if (RETIRED_CALIFORNIA.has(`/${first}`)) return true

  if (LIVE_SEGMENTS.has(first)) return false

  // The WordPress crawl traps. Every one of these ends in .html or is a nested
  // sitemap, and none of them is a shape this site produces: it serves no .html
  // routes at all besides the one kept above, and exactly one sitemap, at the
  // root.
  if (path.endsWith('.html')) return true
  if (/\/.+\/sitemap\.xml$/.test(path)) return true

  return false
}

export function middleware(request: NextRequest) {
  if (!isGone(request.nextUrl.pathname)) {
    /**
     * Proof of life, and it earns its keep.
     *
     * When the 410s first shipped, production kept answering 404 and there was
     * no way to tell whether the deploy had not landed yet or middleware was
     * running and its status was being dropped — nothing else in that commit
     * changed a byte of visible HTML. Two very different fixes, no evidence to
     * choose between them.
     *
     * This header makes middleware observable on any request: present means it
     * executed, absent means it did not. `curl -sSI <any live page> | grep
     * x-mw` settles in one call what otherwise takes a guess.
     */
    const response = NextResponse.next()
    response.headers.set('x-mw', '1')
    return response
  }

  return new NextResponse(null, {
    status: 410,
    headers: {
      // Nothing to index, and nothing to re-check later.
      'X-Robots-Tag': 'noindex',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

/**
 * Skip the runtime cost on everything that obviously is not a retired page:
 * Next's own assets, the image pipeline, and files with an extension other than
 * .html (the traps end in .html, real assets do not).
 */
export const config = {
  matcher: ['/((?!_next/static|_next/image|images/|videos/|brand/|logos/|favicon|icon|apple-icon|opengraph-image).*)'],
}
