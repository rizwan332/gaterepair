/**
 * Guards the 410 rules in middleware.ts against the live route list.
 *
 * The danger with a pattern that kills URLs is not the URLs it was written for
 * — those are dead and checked. It is the page added six months from now whose
 * path happens to match. This asserts, against the actual built routes, that
 * every URL the site serves passes through middleware untouched, and that the
 * URLs the patterns exist for are still caught.
 *
 *   npm run validate:gone
 */

import fs from 'fs'
import path from 'path'
import { isGone } from '../middleware'
import { cities } from '../content/cities'
import { brands } from '../content/brands'
import { services } from '../content/services'
import { modelPages, modelPath } from '../content/models'
import { projects } from '../content/projects'
import { videos } from '../content/video-manifest'
import { landingPages } from '../content/landing-pages'
import { watchPath } from '../lib/video-paths'

const errors: string[] = []

// --- 1. nothing the site serves may be 410'd --------------------------------

const live: string[] = [
  '/',
  '/about',
  '/brands',
  '/contact',
  '/emergency',
  '/faq',
  '/privacy-policy',
  '/projects',
  '/repair-videos',
  '/service-areas',
  '/services',
  '/testimonials',
  '/warranty',
  '/samedaygaterepair',
  '/samedaygaterepair.html',
  ...cities.map((c) => `/gate-repair-${c.slug}-tx`),
  ...brands.map((b) => `/brands/${b.slug}`),
  ...services.map((s) => `/services/${s.slug}`),
  ...modelPages.map(modelPath),
  ...projects.map((p) => `/projects/${p.slug}`),
  ...videos.map((v) => watchPath(v.slug)),
  ...landingPages.map((p) => `/${p.slug}`),
]

for (const url of live) {
  if (isGone(url)) errors.push(`${url} is a live page but middleware returns 410 for it.`)
  // Trailing-slash form resolves to the same page and must behave the same.
  if (url !== '/' && isGone(`${url}/`)) errors.push(`${url}/ (trailing slash) would be 410'd.`)
}

// --- 2. the routes the app declares, read from the build if present ---------

const ROOT = '.next/server/app'
if (fs.existsSync(ROOT)) {
  const built: string[] = []
  ;(function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.html')) {
        const url = '/' + path.relative(ROOT, full).split(path.sep).join('/').replace(/\.html$/, '')
        built.push(url === '/index' ? '/' : url)
      }
    }
  })(ROOT)

  for (const url of built) {
    if (url === '/_not-found') continue
    if (isGone(url)) errors.push(`${url} is in the build output but middleware returns 410 for it.`)
  }
  console.log(`${built.length} built routes checked against the 410 patterns`)
} else {
  console.log('No build output — checked the content-derived route list only. Run "npm run build" for the full check.')
}

// --- 3. the URLs the patterns exist for must still be caught ----------------

const mustBeGone = [
  '/los-angeles-county',
  '/los-angeles-county/',
  '/gate-repair-fresno',
  '/orange-county',
  '/los-angeles-county/services/about.html',
  '/liftmaster-gate-motor-repair/cities/irving-gate-repair.html',
  '/liftmaster-gate-motor-repair/cities/cities/mesquite-gate-repair.html',
  '/faac-gate-motor-repair/cities/cities/brands/services/emergency-gate-repair.html',
  '/santa-barbara-county/cities/brands/services/cities/denton-gate-repair.html',
  '/elite-gate-motor-repair/gallery.html',
  '/doorking-gate-motor-repair/brands/sitemap.xml',
  '/gate-repair-dallas-fort-worth/services/sitemap.xml',
]

for (const url of mustBeGone) {
  if (!isGone(url)) errors.push(`${url} is a retired URL but middleware does not return 410 for it.`)
}

// --- report -----------------------------------------------------------------

console.log(`${live.length} content routes and ${mustBeGone.length} retired URLs checked`)

if (errors.length) {
  console.error(`\n${errors.length} error(s):`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}

console.log('\n✓ Every live URL passes through; every retired URL returns 410.')
