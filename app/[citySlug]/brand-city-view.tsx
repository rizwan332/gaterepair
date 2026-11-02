import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { openGraphFor, fitDescription, INDEXABLE_ROBOTS } from '@/lib/seo'
import { business } from '@/content/business'
import { caseStudyPhotos } from '@/content/case-study-media'
import { jobVideosForCity } from '@/content/job-videos'
import { modelByKey, modelPath, modelsForBrand } from '@/content/models'
import { isModelIndexable } from '@/lib/model-quality'
import { nearestSpread } from '@/content/city-coordinates'
import { projects, projectsForBrand } from '@/content/projects'
import { indexedCities } from '@/content/cities'
import { PageHero } from '@/components/sections/page-hero'
import { CaseStudies } from '@/components/sections/case-studies'
import { JobVideos } from '@/components/sections/job-videos'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { publishedTestimonials } from '@/content/testimonials'
import { media } from '@/content/media-manifest'
import { isRecentJobPhoto } from '@/content/recent-job-photos'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import { brandCityPageFor, brandCityPath, brandCityPagesForCity, type BrandCityPage } from '@/lib/brand-city'
import { serviceCityPagesForCity, serviceCityPath } from '@/lib/service-city'

/**
 * Brand × city pages, e.g. /liftmaster-gate-repair-plano-tx.
 *
 * Served by the [citySlug] route, since Next allows one dynamic segment per
 * level. Which pairs exist is decided by the gate in lib/brand-city.ts.
 */

const BASE = business.url.replace(/\/$/, '')

export function brandCityMetadata(page: BrandCityPage): Metadata {
  const { city, brand, jobs, copy } = page
  const path = brandCityPath(page)
  if (jobs.length === 0) {
    const t = [`${brand.name} Gate Repair ${city.name}, TX | Opener Repair`, `${brand.name} Gate Repair ${city.name}, TX`]
    return {
      title: { absolute: t.find((x) => x.length <= 60) ?? t[1] },
      description:
        copy.description ??
        fitDescription(`${brand.name} gate opener repair in ${city.name}, TX.`, ['Open 24/7.', `Call ${business.phone.display}.`]),
      alternates: { canonical: path },
      openGraph: openGraphFor(path),
      robots: INDEXABLE_ROBOTS,
    }
  }
  const jobsLabel = jobs.length === 1 ? 'a documented local job' : `${jobs.length} documented local jobs`
  const titleTail = jobs.length === 1 ? 'Real Local Job' : `${jobs.length} Local Jobs`
  const titles = [
    `${brand.name} Gate Repair ${city.name}, TX | ${titleTail}`,
    `${brand.name} Gate Repair ${city.name}, TX`,
  ]
  return {
    title: { absolute: titles.find((t) => t.length <= 60) ?? titles[1] },
    description: copy.description ?? fitDescription(
      `${brand.name} gate opener repair in ${city.name}, TX. See ${jobsLabel} with photos: what failed, what we found and what it took to fix.`,
      ['Open 24/7.', `Call ${business.phone.display}.`],
    ),
    alternates: { canonical: path },
    openGraph: openGraphFor(path),
    robots: INDEXABLE_ROBOTS,
  }
}

export function BrandCityView({ page }: { page: BrandCityPage }) {
  const { city, brand, jobs, copy } = page
  const path = brandCityPath(page)
  const cityPath = `/gate-repair-${city.slug}-tx`

  const morePhotos = (brand.mediaCategory ? (media[brand.mediaCategory] ?? []) : []).filter(isRecentJobPhoto).slice(0, 6)
  const lead = jobs[0]?.photoSet ? caseStudyPhotos[jobs[0].photoSet]?.[0] : undefined
  // Area pages have no local job: show the nearest documented ones on this brand, each under its real city.
  const near = (list: typeof jobs) => nearestSpread(city.slug, list, (p) => p.citySlug, 3, 80).map((x) => x.item)
  const nearBrandJobs = jobs.length > 0 ? [] : near(projectsForBrand(brand.name).filter((p) => p.verified && p.photoSet))
  // No documented job on this brand nearby: show the nearest jobs of any brand, titled as such.
  const nearAnyJobs = jobs.length > 0 || nearBrandJobs.length > 0 ? [] : near(projects.filter((p) => p.verified && p.photoSet))
  const nearJobs = nearBrandJobs.length > 0 ? nearBrandJobs : nearAnyJobs
  // Same city first, then this brand, then everyone else.
  const rank = (t: (typeof publishedTestimonials)[number]) =>
    t.city?.toLowerCase() === city.name.toLowerCase() ? 0 : t.brand?.toLowerCase() === brand.name.toLowerCase() ? 1 : 2
  const testimonials = [...publishedTestimonials].sort((a, b) => rank(a) - rank(b))
  const videos = jobVideosForCity(city.slug).filter((v) => v.brand?.toLowerCase() === brand.name.toLowerCase())
  const jobModels = [...new Set(jobs.map((j) => j.modelKey).filter(Boolean) as string[])]
    .map(modelByKey)
    .filter((m) => m !== undefined)
  const models = jobModels.length > 0 ? jobModels : modelsForBrand(brand.slug).filter(isModelIndexable).slice(0, 8)
  const otherBrandsHere = brandCityPagesForCity(city.slug).filter((p) => p.brand.slug !== brand.slug)
  const nearbySameBrand = (city.nearbyCities ?? []).map((s) => brandCityPageFor(s, brand.slug)).filter((p) => p !== undefined)
  // Other indexed cities where we have documented jobs on this brand.
  const otherCities = indexedCities.filter(
    (c) =>
      c.slug !== city.slug &&
      !nearbySameBrand.some((p) => p.city.slug === c.slug) &&
      projectsForBrand(brand.name).some((p) => p.verified && p.citySlug === c.slug),
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

      {jobs.length > 0 ? (
        <CaseStudies
          items={jobs}
          limit={jobs.length}
          eyebrow="Real jobs"
          title={`${brand.name} ${jobs.length === 1 ? 'repair' : 'repairs'} we have completed in ${city.name}`}
          intro={`${jobs.length === 1 ? 'A' : 'Every job here is a'} documented ${city.name} call-out on a ${brand.name} operator, with the photographs taken on the day.`}
          tone="tint"
        />
      ) : (
        nearJobs.length > 0 && (
          <CaseStudies
            items={nearJobs}
            limit={nearJobs.length}
            eyebrow="Real jobs nearby"
            title={nearBrandJobs.length > 0 ? `Our nearest documented ${brand.name} jobs to ${city.name}` : `Our nearest documented jobs to ${city.name}`}
            intro={
              nearBrandJobs.length > 0
                ? `${brand.name} work our technicians have documented in nearby cities, each shown under the city it was in.`
                : `Gate operator work our technicians have documented in nearby cities, each shown under the city it was in.`
            }
            tone="tint"
          />
        )
      )}

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
                  {jobModels.length > 0 ? (
                    <>
                      {brand.name} {models.length === 1 ? 'model' : 'models'} from {jobs.length === 1 ? 'this' : 'these'}{' '}
                      {city.name} {jobs.length === 1 ? 'job' : 'jobs'}
                    </>
                  ) : (
                    <>
                      {brand.name} models we repair in {city.name}
                    </>
                  )}
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

      {/* No city on these: the photos carry no location data. */}
      {morePhotos.length > 0 && (
        <PhotoGallery
          tone="muted"
          title={`More of our ${brand.name} work`}
          intro={
            jobs.length > 0
              ? `Recent ${brand.name} jobs by our technicians, beyond the ${city.name} ${jobs.length === 1 ? 'job' : 'jobs'} above.`
              : `Recent ${brand.name} work by our technicians across Dallas–Fort Worth.`
          }
          images={morePhotos}
        />
      )}

      {testimonials.length > 0 && (
        <TestimonialCarousel
          items={testimonials}
          title={`What our customers say about their gate repairs`}
          intro={`Customers across Dallas–Fort Worth, filmed at their own gates, ${brand.name} owners first where we have them. We bring the same team to ${city.name}.`}
          tone="tint"
        />
      )}

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
            {otherBrandsHere.map((p) => (
              <li key={p.brand.slug}>
                <Link
                  href={brandCityPath(p)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
                >
                  {p.brand.name} gate repair in {city.name}
                  <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                </Link>
              </li>
            ))}
            {serviceCityPagesForCity(city.slug).map((p) => (
              <li key={p.service.slug}>
                <Link
                  href={serviceCityPath(p)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
                >
                  {p.service.name} in {city.name}
                  <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          {nearbySameBrand.length > 0 && (
            <>
              <h3 className="mb-4 mt-8 font-display text-lg font-bold text-ink-950">
                {brand.name} gate repair near {city.name}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {nearbySameBrand.map((p) => (
                  <li key={p.city.slug}>
                    <Link
                      href={brandCityPath(p)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
                    >
                      {brand.name} in {p.city.name}
                      <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <ul className="mt-6 flex flex-wrap gap-2.5">
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
