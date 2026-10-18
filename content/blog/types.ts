/**
 * Blog post data model.
 *
 * ── WHY STRUCTURED BLOCKS, NOT MARKDOWN FILES ───────────────────────────────
 * Every other page on this site is typed content in content/*.ts, checked by a
 * validator before it can ship. Posts follow the same rule: a block that links
 * to a page that does not exist, a title over 60 characters or a post with no
 * route to a service page fails `npm run validate:blog`, not a reader.
 *
 * Inline links use [text](/path) inside any text field. Only site-relative
 * paths are allowed, and every one is checked against the real routes.
 *
 * ── PUBLISHING IS A STATUS, NOT A DEPLOY ────────────────────────────────────
 * `draft`     — being written. Never built in production.
 * `review`    — written, waiting for the client to check the technical facts
 *               and add a real photo or job example. Never built in production.
 * `published` — approved. Built, listed, in the sitemap, linked from the nav.
 *
 * Set BLOG_PREVIEW=1 locally to render draft and review posts (noindex, with a
 * banner) so they can be read in context before approval.
 */

export type BlogCategory = 'costs' | 'troubleshooting' | 'buying-guides' | 'hoa-commercial' | 'seasonal' | 'job-stories'

export type BlogStatus = 'draft' | 'review' | 'published'

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; tone: 'tip' | 'warning' | 'safety'; title: string; text: string }
  | { type: 'table'; head: string[]; rows: string[][] }
  /** A call/text box in the middle of the post. `emergency` uses the urgent wording. */
  | { type: 'cta'; variant: 'call' | 'emergency' }

export type BlogPost = {
  slug: string
  status: BlogStatus
  category: BlogCategory
  /** <title>. 60 characters or fewer, unique across the site. */
  title: string
  h1: string
  /** Meta description, 120–158 characters. */
  description: string
  /** Shown under the H1 and on the card. One or two sentences. */
  intro: string
  /** ISO date. Set on first publish; the validator requires it when published. */
  publishedAt?: string
  updatedAt?: string
  /** The search this post exists to answer. One per post, never shared. */
  primaryQuery: string
  /** Photo category in media-manifest.ts for the card and hero, and which image. */
  image?: { category: string; index?: number }
  body: BlogBlock[]
  faqs?: { q: string; a: string }[]
  /** Pages this post sends readers to. Services first: they are where calls happen. */
  related: {
    services: string[]
    symptoms?: string[]
    brands?: string[]
  }
  /** What the client needs to check or supply before this can be published. */
  reviewNotes?: string[]
}
