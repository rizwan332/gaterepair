import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { business } from '@/content/business'
import { CATEGORY_LABEL, blogPreview, publishedPosts, visiblePosts, type BlogCategory } from '@/content/blog'
import { openGraphFor, INDEXABLE_ROBOTS, HELD_BACK_ROBOTS } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { Button } from '@/components/ui/button'
import { PostCards } from '@/components/blog/post-cards'
import { ClosingCTA } from '@/components/sections/closing-cta'

/**
 * /blog — gate repair guides.
 *
 * Until a post is published this renders a short holding page that points to
 * the gate-problem and service pages, marked noindex, absent from the sitemap
 * and linked from nowhere (the nav and footer links appear with the first post;
 * see `blogIsLive`). A real page rather than notFound(): a statically built
 * 404 inherits the root layout's metadata, which canonicalises to the homepage.
 */

const TITLE = 'Gate Repair Guides & Advice | Dallas–Fort Worth'
const DESCRIPTION =
  'Practical gate repair guides from DFW technicians: repair or replace, choosing an opener, HOA gate maintenance and what to do when a gate fails.'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: '/blog' },
    openGraph: openGraphFor('/blog', { title: TITLE, description: DESCRIPTION }),
    // Indexable only once something is published.
    robots: publishedPosts.length > 0 ? INDEXABLE_ROBOTS : HELD_BACK_ROBOTS,
  }
}

export default function BlogIndex() {
  const categories = (Object.keys(CATEGORY_LABEL) as BlogCategory[]).filter((c) => visiblePosts.some((p) => p.category === c))

  return (
    <>
      {blogPreview && publishedPosts.length < visiblePosts.length && (
        <div className="bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-ink-950">
          Preview: unpublished posts are shown. They are not on the live site.
        </div>
      )}

      <section className="surface-dark relative isolate overflow-hidden">
        <div className="container-page relative py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">Gate repair guides</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Gate repair advice from the technicians who do the work
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">
            What fails, what it costs to put right, and how to choose and look after a gate in Dallas–Fort Worth
            conditions. If you would rather someone just fixed it, we answer 24/7.
          </p>
          <div className="mt-8">
            <Button href={business.phone.href} size="lg" className="tabular">
              <Phone className="size-5" aria-hidden />
              Call {business.phone.display}
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page space-y-14">
          {visiblePosts.length === 0 && (
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-ink-950">Our first guides are on the way</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-700">
                In the meantime, the <Link href="/gate-problems" className="font-medium underline decoration-gold-400 underline-offset-2">gate problems</Link>{' '}
                section explains what each fault usually is and what you can safely check yourself, and our{' '}
                <Link href="/services" className="font-medium underline decoration-gold-400 underline-offset-2">services</Link> pages cover
                every repair we do.
              </p>
            </div>
          )}
          {categories.map((c) => (
            <div key={c} id={c} className="scroll-mt-28">
              <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">{CATEGORY_LABEL[c]}</h2>
              <PostCards posts={visiblePosts.filter((p) => p.category === c)} />
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Gate Repair Guides', url: '/blog' },
            ]),
          ),
        }}
      />
    </>
  )
}
