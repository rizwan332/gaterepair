import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AlertTriangle, Wrench, ArrowRight } from 'lucide-react'
import { brands, brandBySlug } from '@/content/brands'
import { BRAND_DEPTH } from '@/content/brand-depth'
import { media } from '@/content/media-manifest'
import { videosFor } from '@/content/video-manifest'
import { business } from '@/content/business'
import { PageHero } from '@/components/sections/page-hero'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { CaseStudies } from '@/components/sections/case-studies'
import { projectsForBrand } from '@/content/projects'
import { landingPagesForBrand } from '@/content/landing-pages'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { LazyVideo } from '@/components/ui/lazy-video'
import { tier1Cities } from '@/content/cities'
import { serviceSchema, faqSchema, breadcrumbSchema, videoSchema } from '@/lib/schema'
import { testimonialsForBrand } from '@/content/testimonials'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const brand = brandBySlug(slug)
  if (!brand) return {}

  return {
    title: `${brand.name} Gate Operator Repair Dallas | Shield Gate Repair`,
    description: `${brand.name} gate operator repair across Dallas–Fort Worth. Real repair photos and video, boards, limits and capacitors serviced. Open 24/7. Call ${business.phone.display}.`,
    alternates: { canonical: `/brands/${brand.slug}` },
  }
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = brandBySlug(slug)
  if (!brand) notFound()

  const depth = BRAND_DEPTH[brand.slug]
  const faqs = [...brand.faqs, ...(depth?.extraFaqs ?? [])]
  const allImages = brand.mediaCategory ? (media[brand.mediaCategory] ?? []) : []
  // Promote the designated lead image to the front so it becomes both the page
  // hero and the first gallery tile, without duplicating it.
  const images = brand.featuredImage
    ? [
        ...allImages.filter((i) => i.slug === brand.featuredImage),
        ...allImages.filter((i) => i.slug !== brand.featuredImage),
      ]
    : allImages
  const brandVideos = brand.mediaCategory ? videosFor(brand.mediaCategory) : []
  const brandProjects = projectsForBrand(brand.name)
  const brandLandingPages = landingPagesForBrand(brand.slug)

  return (
    <>
      <PageHero
        eyebrow={brand.contested ? 'Brands we service' : 'Specialist repair'}
        title={brand.headline}
        intro={brand.intro}
        image={images[0]}
      />

      {/* The proof goes immediately after the claim. On the uncontested brands
          this video is the entire competitive argument — no other DFW company
          has brand-specific repair footage of any kind. */}
      {brandVideos.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-8 max-w-2xl font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              A Shield Technician Repairing a {brand.name} Operator
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {brandVideos.map((video) => (
                <LazyVideo key={video.slug} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-ink-50">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Why {brand.name} operators get replaced when they should be repaired
            </h2>
            <p className="prose-measure mt-5 leading-relaxed text-ink-700">{brand.whyDifferent}</p>
          </div>

          <div>
            <h2 className="mb-5 inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              <AlertTriangle className="size-6 text-gold-500" aria-hidden />
              What usually goes wrong
            </h2>
            <ul className="space-y-3">
              {brand.commonFailures.map((failure) => (
                <li key={failure} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  {failure}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {brand.models.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-6 inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              <Wrench className="size-6 text-gold-500" aria-hidden />
              {brand.name} models we service
            </h2>
            <ul className="flex flex-wrap gap-2.5">
              {brand.models.map((model) => (
                <li
                  key={model}
                  className="rounded-lg border border-ink-100 bg-ink-50 px-4 py-2 text-sm font-medium text-ink-800"
                >
                  {model}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-500">
              Not listed? Call us anyway. This covers the units we see most often in Dallas&ndash;Fort Worth,
              not everything we can work on.
            </p>
          </div>
        </section>
      )}

      {images.length > 0 && (
        <PhotoGallery
          tone="muted"
          title={`Real ${brand.name} repairs we've completed`}
          intro="Every photo below is a Shield technician on an actual job. No stock imagery."
          images={images}
        />
      )}

      {depth?.characteristics && depth.characteristics.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              What makes {brand.name} different to work on
            </h2>
            <p className="prose-measure mb-12 text-lg text-ink-700">
              Knowing how a manufacturer&rsquo;s equipment actually behaves is the difference between a
              targeted repair and a replacement quote.
            </p>
            <div className="space-y-12">
              {depth.characteristics.map((passage) => (
                <article key={passage.heading} className="border-l-2 border-gold-500/40 pl-6 md:pl-8">
                  <h3 className="mb-4 font-display text-xl font-semibold text-ink-950 sm:text-2xl">
                    {passage.heading}
                  </h3>
                  <div className="prose-measure space-y-4">
                    {passage.body.map((para, i) => (
                      <p key={i} className="leading-relaxed text-ink-700">
                        {para}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {depth?.modelNotes && depth.modelNotes.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <h2 className="mb-10 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Notes by model family
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {depth.modelNotes.map((passage) => (
                <article key={passage.heading} className="card-light p-6">
                  <h3 className="mb-3 font-display text-lg font-semibold text-ink-950">
                    {passage.heading}
                  </h3>
                  {passage.body.map((para, i) => (
                    <p key={i} className="text-[0.9375rem] leading-relaxed text-ink-700">
                      {para}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {depth?.partsAvailability && depth.partsAvailability.length > 0 && (
        <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
          <div className="container-page relative">
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
              {brand.name} parts and availability
            </h2>
            <p className="prose-measure mb-10 text-lg text-ink-300">
              &ldquo;We&rsquo;d have to order that&rdquo; discovered on the day is how a same-visit repair
              becomes two visits. Here is what we actually carry.
            </p>
            <ul className="max-w-3xl space-y-4">
              {depth.partsAvailability.map((line) => (
                <li key={line} className="flex gap-4">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span className="leading-relaxed text-ink-200">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Worked repair examples for this brand. The client asked specifically
          for DoorKing repair examples; doing it by brand rather than
          hard-coding one page means every brand picks its own up as case
          studies are written. */}
      <CaseStudies
        items={brandProjects}
        title={`${brand.name} repairs we have documented`}
        intro="The fault, how it was diagnosed, and what it actually took to fix."
        tone="light"
      />

      {/* Every video, ordered so this brand's own jobs come first — brand pages
          are Google Ads destinations, so they carry the full library rather
          than a three-card sample. */}
      <TestimonialCarousel
        items={testimonialsForBrand(brand.name, Number.MAX_SAFE_INTEGER)}
        intro={`Real Shield Gate Repair customers describing the job in their own words, ${brand.name} jobs first.`}
        tone="tint"
      />

      {/* Inbound links to the model-specific pages. Without these they are
          orphans — reachable from an ad and the sitemap but with no internal
          link, which is a weak signal for the organic long-tail traffic those
          model queries also attract. */}
      {brandLandingPages.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">
              Specific {brand.name} repairs
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brandLandingPages.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="group flex h-full flex-col rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 transition-all hover:border-gold-400 hover:shadow-[var(--shadow-card)]"
                  >
                    <span className="font-display font-semibold text-ink-950">{p.h1}</span>
                    <span className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.subhead}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-gold-600">
                      Read more
                      <ArrowRight className="size-3.5" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FaqAccordion faqs={faqs} title={`${brand.name} repair questions`} />

      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">
            {brand.name} repair across Dallas&ndash;Fort Worth
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {tier1Cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/gate-repair-${city.slug}-tx`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
                >
                  {city.name}
                  <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              name: `${brand.name} Gate Operator Repair`,
              description: brand.intro,
              url: `/brands/${brand.slug}`,
            }),
            faqSchema(faqs),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Brands', url: '/brands' },
              { name: brand.name, url: `/brands/${brand.slug}` },
            ]),
            ...brandVideos.map((v) =>
              videoSchema({
                title: v.title,
                description: v.description || `${brand.name} gate operator repair by Shield Gate Repair in Dallas–Fort Worth.`,
                thumbnailUrl: `${v.poster}.jpg`,
                contentUrl: v.src,
                durationSeconds: v.durationSeconds,
                uploadDate: '2026-08-01',
              }),
            ),
          ]),
        }}
      />
    </>
  )
}
