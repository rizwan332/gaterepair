import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChevronRight, Clock, MessageSquareText, Phone } from 'lucide-react'
import { business } from '@/content/business'
import {
  CATEGORY_LABEL,
  isPublished,
  postBySlug,
  postPath,
  readingMinutes,
  visiblePosts,
} from '@/content/blog'
import { serviceBySlug } from '@/content/services'
import { brandBySlug } from '@/content/brands'
import { symptomBySlug, symptomPath } from '@/content/symptoms'
import { media } from '@/content/media-manifest'
import { openGraphFor, INDEXABLE_ROBOTS, HELD_BACK_ROBOTS } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { PostBody, headingId } from '@/components/blog/post-body'
import { PostCards } from '@/components/blog/post-cards'

/**
 * A blog post: /blog/<slug>.
 *
 * Built for the reader who is researching rather than standing at a broken
 * gate, so it reads like an article, but the phone number is never more than a
 * glance away: in the sticky sidebar on desktop, in a mid-post box, and in the
 * closing CTA. Every post links into the service, problem and brand pages that
 * actually take the call, which is what lets a post earn leads for the site
 * rather than traffic for itself.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return visiblePosts.map((p) => ({ slug: p.slug }))
}

type Params = { params: Promise<{ slug: string }> }

const BASE = business.url

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = postBySlug(slug)
  if (!post) return {}
  const path = postPath(post)
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: path },
    openGraph: { ...openGraphFor(path, { title: post.title, description: post.description }), type: 'article' },
    // Only a published post is ever indexable. Preview builds render drafts
    // for reading, never for search.
    robots: isPublished(post) ? INDEXABLE_ROBOTS : HELD_BACK_ROBOTS,
  }
}

const formatDate = (iso?: string) =>
  iso
    ? new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    : 'Not yet published'

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = postBySlug(slug)
  if (!post) notFound()

  const path = postPath(post)
  const image = post.image ? media[post.image.category]?.[post.image.index ?? 0] : undefined
  const toc = post.body.filter((b): b is Extract<typeof b, { type: 'h2' }> => b.type === 'h2')

  const services = post.related.services.map(serviceBySlug).filter((s) => s !== undefined)
  const symptoms = (post.related.symptoms ?? []).map(symptomBySlug).filter((s) => s !== undefined)
  const brands = (post.related.brands ?? []).map(brandBySlug).filter((b) => b !== undefined)

  const more = visiblePosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gate Repair Guides', url: '/blog' },
    { name: post.h1, url: path },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE}${path}#article`,
    headline: post.h1,
    description: post.description,
    url: `${BASE}${path}`,
    mainEntityOfPage: `${BASE}${path}`,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(post.updatedAt || post.publishedAt ? { dateModified: post.updatedAt ?? post.publishedAt } : {}),
    ...(image ? { image: `${BASE}${image.src}` } : {}),
    articleSection: CATEGORY_LABEL[post.category],
    author: { '@id': `${BASE}/#business` },
    publisher: { '@id': `${BASE}/#business` },
    about: services.map((s) => ({ '@type': 'Service', name: s.name, url: `${BASE}/services/${s.slug}` })),
  }

  return (
    <>
      {!isPublished(post) && (
        <div className="bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-ink-950">
          Preview: this post is “{post.status}” and is not on the live site.
          {post.reviewNotes?.length ? ` Needs: ${post.reviewNotes.join(' · ')}` : ''}
        </div>
      )}

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <section className="surface-dark relative isolate overflow-hidden">
        <div className="container-page relative py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-300">
              {breadcrumbs.slice(0, 2).map((crumb) => (
                <li key={crumb.url} className="inline-flex items-center gap-1">
                  <Link href={crumb.url} className="hover:text-white">
                    {crumb.name}
                  </Link>
                  <ChevronRight className="size-3.5 text-ink-500" aria-hidden />
                </li>
              ))}
              <li className="text-ink-100">{CATEGORY_LABEL[post.category]}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {post.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">{post.intro}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-400">
              <span>By {business.name}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <>
                  <span aria-hidden>·</span>
                  <span>Updated {formatDate(post.updatedAt)}</span>
                </>
              )}
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden />
                {readingMinutes(post)} min read
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Body + sticky sidebar ───────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <article className="min-w-0">
            {image && (
              <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] bg-ink-100">
                <ResponsiveImage image={image} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
              </div>
            )}

            {toc.length >= 3 && (
              <nav aria-label="In this guide" className="mb-8 rounded-[var(--radius-card)] bg-ink-50 p-5 ring-1 ring-inset ring-ink-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">In this guide</p>
                <ol className="mt-3 space-y-1.5 text-[0.9375rem]">
                  {toc.map((h) => (
                    <li key={h.text}>
                      <a href={`#${headingId(h.text)}`} className="text-ink-800 hover:text-ink-950 hover:underline">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <PostBody blocks={post.body} />
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--radius-card)] bg-ink-950 p-6 text-white">
              <p className="font-display text-lg font-semibold">Need it fixed, not read about?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                Technicians on call 24/7 across Dallas–Fort Worth. Call, or text a photo of the gate and operator.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Button href={business.phone.href} size="md" className="tabular">
                  <Phone className="size-4" aria-hidden />
                  {business.phone.display}
                </Button>
                <Button href={`sms:${business.phone.href.replace('tel:', '')}`} variant="ghostDark" size="md">
                  <MessageSquareText className="size-4" aria-hidden />
                  Text a photo
                </Button>
              </div>
            </div>

            {services.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Related services</p>
                <ul className="mt-3 space-y-1.5">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink-900 hover:text-gold-700">
                        {s.name}
                        <ArrowRight className="size-3.5 text-gold-500 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {symptoms.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Common gate problems</p>
                <ul className="mt-3 space-y-1.5 text-[0.9375rem]">
                  {symptoms.map((s) => (
                    <li key={s.slug}>
                      <Link href={symptomPath(s)} className="text-ink-800 hover:text-ink-950 hover:underline">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {brands.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Brands mentioned</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {brands.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/brands/${b.slug}`}
                        className="inline-block rounded-lg border border-ink-100 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-700 hover:border-gold-400 hover:text-ink-950"
                      >
                        {b.name} gate repair
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {post.faqs && post.faqs.length > 0 && <FaqAccordion faqs={post.faqs} title="Questions we get asked" />}

      {more.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">More gate repair guides</h2>
            <PostCards posts={more} />
          </div>
        </section>
      )}

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema(breadcrumbs), ...(post.faqs?.length ? [faqSchema(post.faqs)] : [])]),
        }}
      />
    </>
  )
}
