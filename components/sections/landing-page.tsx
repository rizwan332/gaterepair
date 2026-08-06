import Link from 'next/link'
import { Phone, BadgeCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { landingBySlug, type LandingPage as LandingPageData } from '@/content/landing-pages'
import { brandBySlug } from '@/content/brands'
import { media } from '@/content/media-manifest'
import { publishedTestimonials, testimonialsForBrand } from '@/content/testimonials'
import { projectsForBrand } from '@/content/projects'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { CaseStudies } from '@/components/sections/case-studies'
import { GateProblemForm } from '@/components/forms/gate-problem-form'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

/**
 * Renderer for every Google Ads landing page.
 *
 * One component, eight thin route files. The routes have to be top-level
 * (/faac-gate-repair, not /landing/faac-gate-repair) because that is what the
 * ads point at, and Next.js will not allow a second dynamic segment alongside
 * the existing root `[citySlug]` catch-all — so each page is a real folder that
 * calls straight into this.
 *
 * Section order is deliberate and follows the brief: the visitor sees a phone
 * number, then their own problem described back to them, then proof, then the
 * form. Every section between the hero and the form exists to make the call
 * more likely, and the form is the fallback for people who will not phone.
 */

export function landingMetadata(slug: string): Metadata {
  const page = landingBySlug(slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `/${page.slug}`,
      type: 'website',
    },
  }
}

export function LandingPage({ slug }: { slug: string }) {
  const page = landingBySlug(slug) as LandingPageData
  const brand = brandBySlug(page.brandSlug)
  const years = fact(business.yearsInBusiness)
  const images = page.mediaCategory ? (media[page.mediaCategory] ?? []) : []
  const hero = images[0]
  const testimonials = brand
    ? testimonialsForBrand(brand.name, Number.MAX_SAFE_INTEGER)
    : publishedTestimonials
  const projects = brand ? projectsForBrand(brand.name) : []

  const badges = [
    'Licensed & Insured',
    years ? `${years}+ Years Experience` : 'Experienced Technicians',
    'Open 24/7',
    'Residential & Commercial',
  ]

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="surface-dark relative isolate overflow-hidden">
        {hero && (
          <div className="absolute inset-0 -z-10">
            <ResponsiveImage image={hero} alt="" priority fill sizes="100vw" className="object-cover" />
            <div
              className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_9_11/0.88)_0%,rgb(8_9_11/0.72)_45%,rgb(8_9_11/0.4)_100%)]"
              aria-hidden
            />
          </div>
        )}

        <div className="container-page relative py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-[2.25rem] font-bold leading-[1.05] text-white sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-100 sm:text-xl">
              {page.subhead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={business.phone.href} size="lg" className="tabular">
                <Phone className="size-5" aria-hidden />
                Call Now &mdash; {business.phone.display}
              </Button>
              <Button href="#request-service" variant="ghostDark" size="lg">
                Request Service
              </Button>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {badges.map((label) => (
                <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-ink-100">
                  <BadgeCheck className="size-[1.125rem] shrink-0 text-success-400" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Problem + model description ─────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              What you are dealing with
            </h2>
            {page.problem.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-ink-700">
                {p}
              </p>
            ))}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              About this operator
            </h2>
            {page.modelDescription.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-ink-700">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common issues ───────────────────────────────────────────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            Common faults we see
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.commonIssues.map((issue) => (
              <li
                key={issue.title}
                className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink-950">{issue.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">{issue.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Mid-page call CTA ───────────────────────────────────────────── */}
      <section className="bg-gold-500 py-8">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-display text-xl font-bold text-ink-950 sm:text-2xl">
            Tell us what it is doing &mdash; we will tell you what it needs.
          </p>
          <a
            href={business.phone.href}
            className="tabular inline-flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-xl bg-ink-950 px-8 text-lg font-semibold text-white transition-colors hover:bg-ink-900"
          >
            <Phone className="size-5" aria-hidden />
            {business.phone.display}
          </a>
        </div>
      </section>

      {/* ── Repair process ──────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            How we repair it
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.process.map((s, i) => (
              <li key={s.step} className="relative pl-12">
                <span
                  className="absolute left-0 top-0 inline-flex size-8 items-center justify-center rounded-full bg-ink-950 text-sm font-bold text-gold-400"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="font-display text-base font-semibold text-ink-950">{s.step}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Why Shield ──────────────────────────────────────────────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            Why choose Shield Gate Repair
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: 'We diagnose before we quote',
                b: 'The gate gets moved by hand before anything electrical is tested. Worn rollers, hinges and posts produce faults that read as a failed operator.',
              },
              {
                t: 'Repair first',
                b: 'Boards, capacitors, limits, batteries and gearboxes are replaceable parts on nearly every operator still supported by its manufacturer.',
              },
              {
                t: 'Our own work, on camera',
                b: 'Every photograph and video on this site is our technicians on our own jobs. None of it is stock and none of it is generated.',
              },
              {
                t: 'Open 24 hours, 7 days',
                b: `${years ? `${years}+ years` : 'Years'} of gate work across ${business.serviceArea.primary}, and someone always answers the phone.`,
              },
            ].map((item) => (
              <li key={item.t} className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
                <CheckCircle2 className="mb-3 size-6 text-success-600" aria-hidden />
                <h3 className="font-display text-base font-semibold text-ink-950">{item.t}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{item.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Proof ───────────────────────────────────────────────────────── */}
      <TestimonialCarousel
        items={testimonials}
        intro="Real Shield Gate Repair customers, filmed at their own gates after the job was finished."
        tone="tint"
      />

      {projects.length > 0 && (
        <CaseStudies
          items={projects}
          title="Repairs we have documented"
          intro="The fault, how it was diagnosed, and what it actually took to fix."
        />
      )}

      {images.length > 0 && (
        <PhotoGallery
          images={images.slice(0, 8)}
          title="Our own photographs of this work"
          intro="Taken on our jobs by our technicians."
          tone="muted"
        />
      )}

      <FaqAccordion faqs={page.faqs} title="Questions we get asked" />

      {/* ── Form ────────────────────────────────────────────────────────── */}
      <section id="request-service" className="section bg-ink-50 scroll-mt-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Request service
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-700">
              Leave your name and number and a technician will call you back. If it is urgent, calling
              is faster &mdash; someone always answers.
            </p>
            <div className="mt-7">
              <GateProblemForm sourcePage={`/${page.slug}`} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-ink-950">
                Faster: just call us
              </h3>
              <a
                href={business.phone.href}
                className="tabular inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gold-500 font-semibold text-ink-950"
              >
                <Phone className="size-5" aria-hidden />
                {business.phone.display}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{business.availability}</p>
            </div>

            {/* Internal links. These matter for crawl depth: a landing page with
                no outbound links is a dead end for both a crawler and a reader
                who wants more detail before calling. */}
            <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-ink-950">Related pages</h3>
              <ul className="space-y-2.5 text-sm">
                {brand && (
                  <li>
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="inline-flex items-center gap-1.5 text-ink-800 underline decoration-gold-400 underline-offset-4 hover:text-ink-950"
                    >
                      All {brand.name} repair services
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/services/gate-motor-repair"
                    className="inline-flex items-center gap-1.5 text-ink-800 underline decoration-gold-400 underline-offset-4 hover:text-ink-950"
                  >
                    Gate motor repair
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/emergency"
                    className="inline-flex items-center gap-1.5 text-ink-800 underline decoration-gold-400 underline-offset-4 hover:text-ink-950"
                  >
                    24/7 emergency gate repair
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas"
                    className="inline-flex items-center gap-1.5 text-ink-800 underline decoration-gold-400 underline-offset-4 hover:text-ink-950"
                  >
                    Areas we cover
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-ink-800 underline decoration-gold-400 underline-offset-4 hover:text-ink-950"
                  >
                    Case studies
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Local relevance ─────────────────────────────────────────────── */}
      <section className="border-t border-ink-100 bg-white py-12">
        <div className="container-page">
          <h2 className="font-display text-lg font-semibold text-ink-950">
            Where we do this work
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-700">
            We cover {business.serviceArea.primary} &mdash; Dallas, Fort Worth, Plano, Irving,
            Arlington, Frisco, McKinney, Denton, Grand Prairie and the surrounding cities. Common
            requests include {page.localKeywords.slice(0, 3).join(', ')} and{' '}
            {page.localKeywords[page.localKeywords.length - 1]}.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: page.h1,
              description: page.metaDescription,
              url: `/${page.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(page.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: page.h1, url: `/${page.slug}` },
            ]),
          ),
        }}
      />
    </>
  )
}
