/**
 * Validates every blog post, in any status.
 *
 *   npm run validate:blog
 *
 * A post can only reach production by having status 'published', and nothing
 * with an error here should ever get that far. Checks:
 *  - unique slugs, titles and primary queries (no two posts chasing one search)
 *  - title ≤ 60, description 110–158 characters
 *  - every [text](/path) link and every related slug resolves to a real page
 *  - at least one link into a service page, where the calls happen
 *  - no "near me" in the copy (Google answers that from location, not text)
 *  - published posts: an ISO publish date and at least 900 words
 */

import { allPosts, postText, wordCount, isPublished, postPath } from '../content/blog'
import { services } from '../content/services'
import { brands } from '../content/brands'
import { symptomPages, symptomPath } from '../content/symptoms'
import { indexedCities } from '../content/cities'
import { projects } from '../content/projects'
import { modelPages, modelPath } from '../content/models'
import { media } from '../content/media-manifest'

const STATIC = [
  '/', '/about', '/contact', '/emergency', '/faq', '/warranty', '/testimonials', '/projects', '/services',
  '/brands', '/gate-problems', '/service-areas', '/repair-videos', '/privacy-policy', '/samedaygaterepair', '/dfw-gate-repair', '/blog',
]

const routes = new Set<string>([
  ...STATIC,
  ...services.map((s) => `/services/${s.slug}`),
  ...brands.map((b) => `/brands/${b.slug}`),
  ...modelPages.map(modelPath),
  ...symptomPages.map(symptomPath),
  ...indexedCities.map((c) => `/gate-repair-${c.slug}-tx`),
  ...projects.map((p) => `/projects/${p.slug}`),
  ...allPosts.filter(isPublished).map(postPath),
])

const errors: string[] = []
const warnings: string[] = []
const err = (slug: string, msg: string) => errors.push(`${slug}: ${msg}`)

const seen = { slug: new Set<string>(), title: new Set<string>(), query: new Set<string>() }

for (const p of allPosts) {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) err(p.slug, 'slug must be lowercase words joined by hyphens')
  for (const [key, value] of [['slug', p.slug], ['title', p.title], ['query', p.primaryQuery.toLowerCase()]] as const) {
    if (seen[key].has(value)) err(p.slug, `duplicate ${key} "${value}"`)
    seen[key].add(value)
  }

  if (p.title.length > 60) err(p.slug, `title is ${p.title.length} chars (max 60)`)
  if (p.description.length < 110 || p.description.length > 158)
    err(p.slug, `description is ${p.description.length} chars (110–158)`)
  if (!p.h1.trim()) err(p.slug, 'missing h1')

  const text = postText(p)
  if (/\bnear me\b/i.test(text)) err(p.slug, 'contains "near me" — write for the reader, not the query')

  // Every inline link must resolve.
  const allText = [
    p.intro,
    ...p.body.flatMap((b) =>
      b.type === 'p' || b.type === 'h2' || b.type === 'h3'
        ? [b.text]
        : b.type === 'ul' || b.type === 'ol'
          ? b.items
          : b.type === 'callout'
            ? [b.text]
            : b.type === 'table'
              ? b.rows.flat()
              : [],
    ),
    ...(p.faqs ?? []).map((f) => f.a),
  ].join('\n')
  const links = [...allText.matchAll(/\[([^\]]+)\]\(([^)\s]*)\)/g)].map((m) => m[2])
  for (const href of links) {
    if (!href.startsWith('/')) err(p.slug, `link "${href}" must be site-relative`)
    else if (!routes.has(href.split('#')[0])) err(p.slug, `link "${href}" does not resolve to a page`)
  }
  if (!links.some((l) => l.startsWith('/services/')) && p.related.services.length === 0)
    err(p.slug, 'never links to a service page')

  for (const s of p.related.services) if (!services.some((x) => x.slug === s)) err(p.slug, `unknown service "${s}"`)
  for (const s of p.related.symptoms ?? []) if (!symptomPages.some((x) => x.slug === s)) err(p.slug, `unknown symptom "${s}"`)
  for (const s of p.related.brands ?? []) if (!brands.some((x) => x.slug === s)) err(p.slug, `unknown brand "${s}"`)
  if (p.image && !media[p.image.category]?.[p.image.index ?? 0]) err(p.slug, `no image ${p.image.category}[${p.image.index ?? 0}]`)

  const words = wordCount(p)
  if (isPublished(p)) {
    if (!p.publishedAt || !/^\d{4}-\d{2}-\d{2}$/.test(p.publishedAt)) err(p.slug, 'published posts need publishedAt (YYYY-MM-DD)')
    if (words < 900) err(p.slug, `only ${words} words (published posts need 900+)`)
    if (p.reviewNotes?.length) warnings.push(`${p.slug}: published with open review notes — remove them once addressed`)
  }

  console.log(`  ${p.status.padEnd(9)} ${String(words).padStart(5)}w  ${links.length} links  ${p.slug}`)
}

for (const w of warnings) console.warn(`⚠ ${w}`)
if (errors.length) {
  console.error(`\n✗ ${errors.length} blog problem(s):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
console.log(`\n✓ ${allPosts.length} posts valid (${allPosts.filter(isPublished).length} published).`)
