import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services, serviceBySlug } from '@/content/services'
import { SERVICE_DEPTH } from '@/content/service-depth'
import { brandBySlug } from '@/content/brands'
import { media } from '@/content/media-manifest'
import { videosFor } from '@/content/video-manifest'
import { business } from '@/content/business'
import { PageHero } from '@/components/sections/page-hero'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { LazyVideo } from '@/components/ui/lazy-video'
import { tier1Cities } from '@/content/cities'
import { serviceSchema, faqSchema, breadcrumbSchema, videoSchema } from '@/lib/schema'
import { publishedTestimonials } from '@/content/testimonials'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { CaseStudies } from '@/components/sections/case-studies'
import { projectsForService } from '@/content/projects'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = serviceBySlug(slug)
  if (!service) return {}

  return {
    title: service.seoTitle ?? `${service.name} in Dallas–Fort Worth`,
    description: `${service.symptoms[0]?.seeing}. Same-day ${service.name.toLowerCase()} across DFW. Licensed, insured, written warranty. Call ${business.phone.display}.`,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceBySlug(slug)
  if (!service) notFound()

  const depth = SERVICE_DEPTH[service.slug]
  const faqs = [...service.faqs, ...(depth?.extraFaqs ?? [])]
  const images = media[service.mediaCategory] ?? []
  const serviceProjects = projectsForService(service.slug)
  const serviceVideos = videosFor(service.mediaCategory)
  const relatedBrands = service.relatedBrands.map(brandBySlug).filter(Boolean)

  return (
    <>
      <PageHero eyebrow="Service" title={service.headline} intro={service.intro} image={images[0]} />

      {/* Symptom table. No competitor in DFW publishes one, and it maps directly
          onto how people actually search — "gate hums but won't move" rather
          than "automatic gate repair". */}
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-3 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            What your gate is doing, and what it usually means
          </h2>
          <p className="prose-measure mb-8 text-lg text-ink-700">
            Most gate faults announce themselves in a fairly specific way. Find yours below &mdash; it will
            tell you roughly what you are dealing with before anyone arrives.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-ink-200">
                  <th className="py-3 pr-6 font-display text-sm font-semibold uppercase tracking-wide text-ink-500">
                    What you&rsquo;re seeing
                  </th>
                  <th className="py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink-500">
                    Usually means
                  </th>
                </tr>
              </thead>
              <tbody>
                {service.symptoms.map((symptom) => (
                  <tr key={symptom.seeing} className="border-b border-ink-100">
                    <td className="py-4 pr-6 align-top font-medium text-ink-950">{symptom.seeing}</td>
                    <td className="py-4 align-top text-ink-700">{symptom.means}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {depth?.causes && depth.causes.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              What actually causes it
            </h2>
            <p className="prose-measure mb-12 text-lg text-ink-700">
              The symptom tells you something is wrong. This is what is usually behind it &mdash; and which
              of these are cheap fixes rather than the replacement you may have been quoted.
            </p>

            <div className="space-y-12">
              {depth.causes.map((passage) => (
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

      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-8 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            How we diagnose it
          </h2>
          <ol className="max-w-3xl space-y-5">
            {service.process.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-semibold text-gold-400"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-ink-800">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {serviceVideos.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-8 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Watch the actual repair
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {serviceVideos.map((video) => (
                <LazyVideo key={video.slug} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      {images.length > 0 && (
        <PhotoGallery
          tone="muted"
          title={`Real ${service.name.toLowerCase()} jobs`}
          intro="Photographs from our own job archive — real equipment, real repairs."
          images={images}
        />
      )}

      {depth?.maintenance && depth.maintenance.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Keeping it working
            </h2>
            <p className="prose-measure mb-12 text-lg text-ink-700">
              Most of what shortens a gate&rsquo;s life is preventable, and a good deal of it costs nothing
              but attention. Here is what you can do yourself and what genuinely needs a technician.
            </p>
            <div className="grid gap-10 md:grid-cols-2">
              {depth.maintenance.map((passage) => (
                <article key={passage.heading}>
                  <h3 className="mb-4 font-display text-xl font-semibold text-ink-950">
                    {passage.heading}
                  </h3>
                  <div className="space-y-3">
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

      {depth?.repairVsReplace && depth.repairVsReplace.length > 0 && (
        <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
          <div className="container-page relative">
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
              Repair or replace &mdash; the honest answer
            </h2>
            <p className="prose-measure mb-10 text-lg text-ink-300">
              The margin is better on a replacement, which is exactly why you should be sceptical when one
              gets recommended by default. Here is where the line actually falls.
            </p>
            <ul className="max-w-3xl space-y-4">
              {depth.repairVsReplace.map((line) => (
                <li key={line} className="flex gap-4">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span className="leading-relaxed text-ink-200">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Service pages had no route into the case studies at all. A visitor
          reading about commercial gate repair is exactly the person the $25,000
          quote story is written for, and it was three clicks away. */}
      <CaseStudies
        items={serviceProjects}
        title={`${service.name} we have documented`}
        intro="The same job written up properly — what was wrong, how it was diagnosed, and what it actually took to fix."
      />

      <TestimonialCarousel
        items={publishedTestimonials}
        intro="Real customers describing the repair in their own words, filmed on site."
        tone="tint"
      />

      <FaqAccordion faqs={faqs} title={`${service.name} questions`} />

      {relatedBrands.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">Brands we service</h2>
            <ul className="flex flex-wrap gap-2.5">
              {relatedBrands.map((brand) => (
                <li key={brand!.slug}>
                  <Link
                    href={`/brands/${brand!.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
                  >
                    {brand!.name}
                    <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mb-6 mt-12 font-display text-2xl font-bold text-ink-950">
              Where we do this work
            </h2>
            <ul className="flex flex-wrap gap-2.5">
              {tier1Cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/gate-repair-${city.slug}-tx`}
                    className="rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({ name: service.name, description: service.intro, url: `/services/${service.slug}` }),
            faqSchema(faqs),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: service.name, url: `/services/${service.slug}` },
            ]),
            ...serviceVideos.map((v) =>
              videoSchema({
                title: v.title,
                description: v.description || `${service.name} by Shield Gate Repair in Dallas–Fort Worth.`,
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
