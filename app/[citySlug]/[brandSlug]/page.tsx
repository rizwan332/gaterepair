import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { openGraphFor, fitDescription, INDEXABLE_ROBOTS } from '@/lib/seo'
import { business } from '@/content/business'
import { caseStudyPhotos } from '@/content/case-study-media'
import { jobVideosForCity } from '@/content/job-videos'
import { modelByKey, modelPath } from '@/content/models'
import { projectsForBrand } from '@/content/projects'
import { indexedCities } from '@/content/cities'
import { PageHero } from '@/components/sections/page-hero'
import { CaseStudies } from '@/components/sections/case-studies'
import { JobVideos } from '@/components/sections/job-videos'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import { brandCityPages, brandCityPageFor, brandCityPath } from '@/lib/brand-city'

/**
 * Brand × city pages, e.g. /gate-repair-dallas-tx/liftmaster.
 *
 * Nested under the city page because that is the relationship being stated
 * (BRAND-CITY-ARCHITECTURE.md §4). Which pairs exist is decided by the proof
 * gate in lib/brand-city.ts, never by this route.
 */

const BASE = business.url.replace(/\/$/, '')

export const dynamicParams = false

export function generateStaticParams() {
  return brandCityPages.map((p) => ({ citySlug: `gate-repair-${p.city.slug}-tx`, brandSlug: p.brand.slug }))
}

async function pageFor(params: Promise<{ citySlug: string; brandSlug: string }>) {
  const { citySlug, brandSlug } = await params
  const m = /^gate-repair-(.+)-tx$/.exec(citySlug)
  return m ? brandCityPageFor(m[1], brandSlug) : undefined
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string; brandSlug: string }>
}): Promise<Metadata> {
  const page = await pageFor(params)
  if (!page) return {}
  const { city, brand, jobs } = page
  const path = brandCityPath(page)
  return {
    title: { absolute: `${brand.name} Gate Repair ${city.name}, TX | ${jobs.length} Local Jobs` },
    description: fitDescription(
      `${brand.name} gate opener repair in ${city.name}, TX. ${jobs.length} documented local jobs with photos: what failed, what we found and what it took to fix.`,
      ['Open 24/7.', `Call ${business.phone.display}.`],
    ),
    alternates: { canonical: path },
    openGraph: openGraphFor(path),
    robots: INDEXABLE_ROBOTS,
  }
}

export default async function BrandCityPage({
  params,
}: {
  params: Promise<{ citySlug: string; brandSlug: string }>
}) {
  const page = await pageFor(params)
  if (!page) notFound()
  const { city, brand, jobs, copy } = page
  const path = brandCityPath(page)
  const cityPath = `/gate-repair-${city.slug}-tx`

  const lead = jobs[0].photoSet ? caseStudyPhotos[jobs[0].photoSet]?.[0] : undefined
  const videos = jobVideosForCity(city.slug).filter((v) => v.brand?.toLowerCase() === brand.name.toLowerCase())
  const models = [...new Set(jobs.map((j) => j.modelKey).filter(Boolean) as string[])]
    .map(modelByKey)
    .filter((m) => m !== undefined)
  // Other indexed cities where we have documented jobs on this brand.
  const otherCities = indexedCities.filter(
    (c) => c.slug !== city.slug && projectsForBrand(brand.name).some((p) => p.verified && p.citySlug === c.slug),
  )

  return (
    <>
      <PageHero
        eyebrow={`${city.name} · ${city.county}`}
        title={`${brand.name} Gate Repair in ${city.name}, TX`}
        intro={copy.intro}
        image={lead ? { ...lead, alt: lead.caption, altWritten: Boolean(lead.caption) } : undefined}
      />

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            What we see on {brand.name} gates in {city.name}
          </h2>
          <div className="prose-measure space-y-4 text-lg leading-relaxed text-ink-800">
            {copy.local.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies
        items={jobs}
        limit={jobs.length}
        eyebrow="Real jobs"
        title={`${brand.name} repairs we have completed in ${city.name}`}
        intro={`Every job here is a documented ${city.name} call-out on a ${brand.name} operator, with the photographs taken on the day.`}
        tone="tint"
      />

      {videos.length > 0 && (
        <JobVideos
          items={videos}
          title={`${brand.name} jobs in ${city.name} on video`}
          intro={`Filmed on site in ${city.name}, each linked to its full write-up.`}
        />
      )}

      <section className="section bg-ink-50">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-ink-950">
              What usually fails on {brand.name} operators
            </h2>
            <ul className="space-y-2.5">
              {brand.commonFailures.map((f) => (
                <li key={f} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <Link
                href={`/brands/${brand.slug}`}
                className="font-medium text-ink-900 underline decoration-gold-400 underline-offset-2"
              >
                {brand.name} gate repair across Dallas–Fort Worth →
              </Link>
            </p>
          </div>
          <div>
            {models.length > 0 && (
              <>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink-950">
                  {brand.name} models from these {city.name} jobs
                </h2>
                <ul className="mb-8 flex flex-wrap gap-2">
                  {models.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={modelPath(m)}
                        className="inline-block rounded-lg border border-ink-200 bg-white px-3.5 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-gold-400 hover:text-ink-950"
                      >
                        {brand.name} {m.model} repair
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <>
                <h2 className="mb-4 inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950">
                  <MapPin className="size-6 text-gold-500" aria-hidden />
                  Areas we cover in {city.name}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {city.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="rounded-lg border border-ink-100 bg-white px-3.5 py-2 text-sm font-medium text-ink-800"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      <FaqAccordion faqs={copy.faqs} title={`${brand.name} gate repair in ${city.name}: questions`} />

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">
            Every gate service in {city.name}
          </h2>
          <p className="prose-measure mb-6 leading-relaxed text-ink-700">
            Not a {brand.name}? We repair every major operator brand in {city.name}, plus sliding, swing,
            commercial and access control work.
          </p>
          <ul className="flex flex-wrap gap-2.5">
            <li>
              <Link
                href={cityPath}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-900 hover:border-ink-300"
              >
                Gate repair in {city.name}
                <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
              </Link>
            </li>
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={brandCityPageFor(c.slug, brand.slug) ? brandCityPath({ city: c, brand }) : `/gate-repair-${c.slug}-tx`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
                >
                  {c.name}
                  <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          {otherCities.length > 0 && (
            <p className="mt-4 text-sm text-ink-600">
              Other cities where we have documented {brand.name} jobs.
            </p>
          )}
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              '@id': `${BASE}${path}#service`,
              name: `${brand.name} Gate Repair in ${city.name}, TX`,
              description: copy.intro,
              // Not `brand:` — that would claim we are the manufacturer or a
              // dealer. `about` says what the service is for. See §5.
              serviceType: `${brand.name} gate operator repair`,
              about: { '@type': 'Brand', name: brand.name },
              url: `${BASE}${path}`,
              provider: { '@id': `${BASE}/#business` },
              areaServed: [
                { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: city.county } },
              ],
            },
            faqSchema(copy.faqs),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Service Areas', url: '/service-areas' },
              { name: city.name, url: cityPath },
              { name: brand.name, url: path },
            ]),
          ]),
        }}
      />
    </>
  )
}
