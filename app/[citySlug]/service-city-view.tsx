import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { openGraphFor, INDEXABLE_ROBOTS } from '@/lib/seo'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { projects } from '@/content/projects'
import { nearestSpread } from '@/content/city-coordinates'
import { PageHero } from '@/components/sections/page-hero'
import { CaseStudies } from '@/components/sections/case-studies'
import { JobVideos } from '@/components/sections/job-videos'
import { jobVideos } from '@/content/job-videos'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { publishedTestimonials } from '@/content/testimonials'
import { media } from '@/content/media-manifest'
import { isRecentOperatorPhoto } from '@/content/recent-job-photos'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import { brandCityPagesForCity, brandCityPath } from '@/lib/brand-city'
import { serviceCityPagesForCity, serviceCityPath, type ServiceCityPage } from '@/lib/service-city'

/**
 * Service × city pages, e.g. /sliding-gate-repair-plano-tx. Served by the
 * [citySlug] route; which ones exist is decided in lib/service-city.ts.
 */

const BASE = business.url.replace(/\/$/, '')

export function serviceCityMetadata(page: ServiceCityPage): Metadata {
  const { city, service, copy } = page
  const path = serviceCityPath(page)
  const t = [`${service.name} ${city.name}, TX | Shield Gate Repair`, `${service.name} ${city.name}, TX`]
  return {
    title: { absolute: t.find((x) => x.length <= 60) ?? t[1] },
    description: copy.description,
    alternates: { canonical: path },
    openGraph: openGraphFor(path),
    robots: INDEXABLE_ROBOTS,
  }
}

const chip =
  'inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950'

export function ServiceCityView({ page }: { page: ServiceCityPage }) {
  const { city, service, copy } = page
  const path = serviceCityPath(page)
  const cityPath = `/gate-repair-${city.slug}-tx`
  const dfw = services.find((s) => s.slug === service.service)
  // Nearest documented jobs of this kind, each under its real city; any verified job if none match.
  const withPhotos = projects.filter((p) => p.verified && p.photoSet)
  const sameKind = withPhotos.filter((p) => p.service === service.project)
  const near = (list: typeof projects) => nearestSpread(city.slug, list, (p) => p.citySlug, 3, 80).map((x) => x.item)
  const sameKindNear = near(sameKind)
  const jobs = sameKindNear.length > 0 ? sameKindNear : near(withPhotos)
  // Nearest job clips of this kind, else the nearest of any, each under its real city.
  const nearVideos = (list: typeof jobVideos) => nearestSpread(city.slug, list, (v) => v.citySlug, 3, 80)
  const sameKindVideos = nearVideos(jobVideos.filter((v) => v.service === service.project))
  const videos = sameKindVideos.length > 0 ? sameKindVideos : nearVideos(jobVideos)
  // Automatic gates only, and on sliding/swing pages only that gate type (read from the alt text).
  const kind = /sliding|swing/i.exec(service.name)?.[0].toLowerCase()
  const fits = (i: (typeof media)[string][number]) => isRecentOperatorPhoto(i) && (!kind || i.alt.toLowerCase().includes(kind))
  const servicePhotos = (dfw ? (media[dfw.mediaCategory] ?? []) : []).filter(fits).slice(0, 6)
  const photos = servicePhotos.length >= 3 ? servicePhotos : (media['automatic-gate-repair'] ?? []).filter(fits).slice(0, 6)
  const testimonials = [
    ...publishedTestimonials.filter((t) => t.city?.toLowerCase() === city.name.toLowerCase()),
    ...publishedTestimonials.filter((t) => t.city?.toLowerCase() !== city.name.toLowerCase()),
  ]
  const otherServices = serviceCityPagesForCity(city.slug).filter((p) => p.service.slug !== service.slug)
  const brandPages = brandCityPagesForCity(city.slug)

  return (
    <>
      <PageHero eyebrow={`${city.name} · ${city.county}`} title={`${service.name} in ${city.name}, TX`} intro={copy.intro} />

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            {service.name} in {city.name}: what we see
          </h2>
          <div className="prose-measure space-y-4 text-lg leading-relaxed text-ink-800">
            {copy.local.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {jobs.length > 0 && (
        <CaseStudies
          items={jobs}
          limit={jobs.length}
          eyebrow="Real jobs nearby"
          title={`Our nearest documented jobs to ${city.name}`}
          intro="Work our technicians have documented, each shown under the city it was in."
          tone="tint"
        />
      )}

      <JobVideos
        items={videos.map((v) => v.item)}
        title={`Gate jobs near ${city.name} on video`}
        intro={`Filmed on our own jobs, each marked with its city: ${[...new Set(videos.map((v) => `${v.item.city?.replace(/, Texas$/, '')}${v.miles > 0 ? ` (${v.miles} mi)` : ''}`))].join(', ')}.`}
      />

      {dfw && dfw.symptoms.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">
              {service.slug.endsWith('-installation') ? `When it is time for ${service.name.toLowerCase()}` : `Signs you need ${service.name.toLowerCase()}`}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {dfw.symptoms.slice(0, 6).map((s) => (
                <li key={s.seeing} className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-5">
                  <span className="block font-semibold text-ink-900">{s.seeing}</span>
                  <span className="mt-1 block text-[0.9375rem] leading-relaxed text-ink-700">{s.means}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link href={`/services/${dfw.slug}`} className="font-medium text-ink-900 underline decoration-gold-400 underline-offset-2">
                {dfw.name} across Dallas–Fort Worth →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* No city on these: the photos carry no location data. */}
      {photos.length > 0 && (
        <PhotoGallery
          tone="muted"
          title={servicePhotos.length >= 3 ? `Our recent ${service.name.toLowerCase()} work` : `Our recent ${kind ? `${kind} ` : ''}gate repair work`}
          intro="Photos from our technicians' recent jobs across Dallas–Fort Worth."
          images={photos}
        />
      )}

      {testimonials.length > 0 && (
        <TestimonialCarousel
          items={testimonials}
          title="What our customers say"
          intro={`Customers across Dallas–Fort Worth, filmed at their own gates. We bring the same team to ${city.name}.`}
          tone="tint"
        />
      )}

      {city.neighborhoods && city.neighborhoods.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-4 inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950">
              <MapPin className="size-6 text-gold-500" aria-hidden />
              Areas we cover in {city.name}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <li key={n} className="rounded-lg border border-ink-100 bg-ink-50 px-3.5 py-2 text-sm font-medium text-ink-800">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FaqAccordion faqs={copy.faqs} title={`${service.name} in ${city.name}: questions`} />

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">More gate services in {city.name}</h2>
          <ul className="flex flex-wrap gap-2.5">
            <li>
              <Link href={cityPath} className={chip}>
                Gate repair in {city.name}
                <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
              </Link>
            </li>
            {otherServices.map((p) => (
              <li key={p.service.slug}>
                <Link href={serviceCityPath(p)} className={chip}>
                  {p.service.name} in {city.name}
                  <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          {brandPages.length > 0 && (
            <>
              <h3 className="mb-4 mt-8 font-display text-lg font-bold text-ink-950">Gate opener brands we repair in {city.name}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {brandPages.map((p) => (
                  <li key={p.brand.slug}>
                    <Link href={brandCityPath(p)} className={chip}>
                      {p.brand.name} gate repair in {city.name}
                      <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
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
              name: `${service.name} in ${city.name}, TX`,
              description: copy.intro,
              serviceType: service.name,
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
              { name: service.name, url: path },
            ]),
          ]),
        }}
      />
    </>
  )
}
