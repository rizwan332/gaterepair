import type { BlogBlock, BlogCategory, BlogPost } from './types'
import { repairOrReplaceGateOpener } from './posts/repair-or-replace-gate-opener'
import { hoaGateMaintenanceChecklist } from './posts/hoa-gate-maintenance-checklist'
import { swingVsSlidingGateOpener } from './posts/swing-vs-sliding-gate-opener'

export type { BlogPost, BlogBlock, BlogCategory } from './types'

/** Every post, in any status. Add new posts here. */
export const allPosts: BlogPost[] = [repairOrReplaceGateOpener, hoaGateMaintenanceChecklist, swingVsSlidingGateOpener]

export const CATEGORY_LABEL: Record<BlogCategory, string> = {
  costs: 'Costs & pricing',
  troubleshooting: 'Troubleshooting',
  'buying-guides': 'Buying guides',
  'hoa-commercial': 'HOA & commercial',
  seasonal: 'Storms & seasons',
  'job-stories': 'From our jobs',
}

/**
 * Whether unpublished posts are rendered. Only ever true locally: Netlify
 * never sets BLOG_PREVIEW, so a draft cannot reach production by accident.
 */
export const blogPreview = process.env.BLOG_PREVIEW === '1'

export const isPublished = (p: BlogPost) => p.status === 'published'

/** Published posts, newest first. What the live site lists and indexes. */
export const publishedPosts: BlogPost[] = allPosts
  .filter(isPublished)
  .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))

/** What this build renders: published only, plus drafts when previewing. */
export const visiblePosts: BlogPost[] = blogPreview
  ? [...publishedPosts, ...allPosts.filter((p) => !isPublished(p))]
  : publishedPosts

export const postBySlug = (slug: string) => visiblePosts.find((p) => p.slug === slug)

export const postPath = (p: Pick<BlogPost, 'slug'>) => `/blog/${p.slug}`

/** The nav and footer link appear only once there is something to read. */
export const blogIsLive = publishedPosts.length > 0

/** Plain text of a post, for word counts and reading time. */
export function postText(p: BlogPost): string {
  const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  const blockText = (b: BlogBlock): string[] => {
    switch (b.type) {
      case 'p':
      case 'h2':
      case 'h3':
        return [b.text]
      case 'ul':
      case 'ol':
        return b.items
      case 'callout':
        return [b.title, b.text]
      case 'table':
        return [...b.head, ...b.rows.flat()]
      case 'cta':
        return []
    }
  }
  return [p.intro, ...p.body.flatMap(blockText), ...(p.faqs ?? []).flatMap((f) => [f.q, f.a])].map(strip).join(' ')
}

export const wordCount = (p: BlogPost) => postText(p).split(/\s+/).filter(Boolean).length

/** At 220 words a minute, rounded up. Shown on the card and under the H1. */
export const readingMinutes = (p: BlogPost) => Math.max(1, Math.ceil(wordCount(p) / 220))
