import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, Navigation } from 'lucide-react'
import { cities, publishedCities, cityBySlug, countyPeers, type City } from '@/content/cities'
import { services } from '@/content/services'
import { brands } from '@/content/brands'
import { media } from '@/content/media-manifest'
import { business } from '@/content/business'
import { PageHero } from '@/components/sections/page-hero'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { ServiceAreaMap } from '@/components/sections/service-area-map'
import { VideoReel } from '@/components/sections/video-reel'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { BrandsGrid } from '@/components/sections/brands-grid'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { publishedTestimonials } from '@/content/testimonials'
import { localBusinessForCity, faqSchema, breadcrumbSchema } from '@/lib/schema'

/**
 * City pages.
 *
 * Next.js cannot express a partial dynamic segment like `gate-repair-[city]-tx`,
 * so the whole segment is dynamic and the prefix/suffix are validated here.
 * Static routes (/services, /pricing …) take precedence over this catch-all.
 *
 * On depth: the benchmark from the competitor audit is Metro's Plano page —
 * ~3,000 words at roughly 5% genuinely local content, with no neighborhoods,
 * zip codes, landmarks or response times. 4 Sure's is ~2,100 words at ~20%.
 * Tier 1 pages here are shorter and roughly half unique. See CITY-PAGES.md.
 */

const PREFIX = 'gate-repair-'
const SUFFIX = '-tx'

function citySlugFrom(param: string): string | null {
  if (!param.startsWith(PREFIX) || !param.endsWith(SUFFIX)) return null
  return param.slice(PREFIX.length, -SUFFIX.length)
}

export const dynamicParams = false

export function generateStaticParams() {
  // Only cities with real localised content get a page — see
  // content/cities.ts -> publishedCities. The rest stay linked from
  // /service-areas until the client's technician interview fills them in.
  return publishedCities.map((c) => ({ citySlug: `${PREFIX}${c.slug}${SUFFIX}` }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>
}): Promise<Metadata> {
  const { citySlug } = await params
  const slug = citySlugFrom(citySlug)
  const city = slug ? cityBySlug(slug) : null
  if (!city || !publishedCities.includes(city)) return {}

  return {
    title: `Gate Repair ${city.name} TX — Same-Day Service`,
    description:
      `Automatic gate repair in ${city.name}, ${city.county}. ` +
      `${city.responseBand ? `Typical arrival ${city.responseBand}. ` : ''}` +
      `Licensed, insured, written warranty. Open 24/7. Call ${business.phone.display}.`,
    alternates: { canonical: `/${PREFIX}${city.slug}${SUFFIX}` },
  }
}

export default async function CityPage({ params }: { params: Promise<{ citySlug: string }> }) {
  const { citySlug } = await params
  const slug = citySlugFrom(citySlug)
  const city = slug ? cityBySlug(slug) : null
  if (!city || !publishedCities.includes(city)) notFound()

  const heroImage = media['automatic-gate-repair']?.[2] ?? media['gate-installation']?.[0]
  // Curated neighbours where we have them; otherwise the city's genuine county
  // peers. Every page ends up with real internal links either way — that was
  // the point of the client's "internal linking" deliverable.
  const curated = (city.nearbyCities ?? []).map(cityBySlug).filter(Boolean) as City[]
  const nearby = curated.length > 0 ? curated : countyPeers(city, 10)
  /**
   * Photographs for the city page.
   *
   * Drawn from the general service libraries rather than a per-city set,
   * because the photographs are genuinely ours but are not all Texas jobs —
   * captioning a specific driveway as a local address would be a false claim.
   * The section heading says "our own jobs" and stops there. See
   * MEDIA-PROVENANCE.md.
   */
  const cityPhotos = [
    ...(media['gate-repair'] ?? []),
    ...(media['gate-motor-repair'] ?? []),
    ...(media['gate-installation'] ?? []),
  ].slice(0, 6)

  return (
    <>
      <PageHero
        eyebrow={city.county}
        title={`Gate Repair in ${city.name}, TX — Same-Day Service`}
        intro={
          city.localAngle
            ? `${city.localAngle.split('. ').slice(0, 2).join('. ')}.`
            : `Automatic gate repair, installation and emergency service across ${city.name} and the surrounding ${city.county} area. Open 24 hours, seven days a week.`
        }
        image={heroImage}
        meta={city.responseBand ? `Typical arrival in ${city.name}: ${city.responseBand}` : undefined}
      />

      {city.localAngle && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-6 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Gate repair in {city.name}
            </h2>
            <div className="prose-measure space-y-4 text-lg leading-relaxed text-ink-800">
              {city.localAngle.split(/(?<=\.)\s+(?=[A-Z])/).reduce<string[][]>((paras, sentence, i) => {
                const idx = Math.floor(i / 2)
                ;(paras[idx] ??= []).push(sentence)
                return paras
              }, []).map((para, i) => (
                <p key={i}>{para.join(' ')}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {city.gateProfile && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <h2 className="mb-8 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              What we see most in {city.name}
            </h2>
            <p className="prose-measure mb-8 text-lg leading-relaxed text-ink-700">
              {city.gateProfile.dominant}.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <ProfileList title="Common gate types" items={city.gateProfile.commonGateTypes} />
              <ProfileList title="Operators we see here" items={city.gateProfile.commonBrands} />
              <ProfileList title="What usually fails" items={city.gateProfile.commonIssues} />
            </div>
          </div>
        </section>
      )}

      {(city.neighborhoods?.length || city.zips?.length) && (
        <section className="section bg-white">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <div>
                <h2 className="mb-5 inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950">
                  <MapPin className="size-6 text-gold-500" aria-hidden />
                  Areas we cover in {city.name}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {city.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="rounded-lg border border-ink-100 bg-ink-50 px-3.5 py-2 text-sm font-medium text-ink-800"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                {/* Zip codes get the same chip treatment as the neighbourhoods
                    above them. As a middot-joined sentence they wrapped
                    mid-list and left a stray "· 75231 · 75248" on its own line,
                    which read as unfinished next to the tidy row of areas.
                    Tabular figures stop the digits from jittering between
                    chips. */}
                {city.zips && city.zips.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-2.5 text-sm font-medium text-ink-800">Zip codes served</p>
                    <ul className="flex flex-wrap gap-2">
                      {city.zips.map((zip) => (
                        <li
                          key={zip}
                          className="tabular rounded-lg border border-ink-100 bg-white px-3 py-1.5 text-sm text-ink-600"
                        >
                          {zip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div>
              <h2 className="mb-5 inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950">
                <Clock className="size-6 text-gold-500" aria-hidden />
                Getting to you
              </h2>
              {city.responseBand && (
                <p className="text-lg leading-relaxed text-ink-800">
                  Typical arrival in {city.name} is{' '}
                  <span className="font-semibold">{city.responseBand}</span>.
                </p>
              )}
              {city.majorRoads && city.majorRoads.length > 0 && (
                <p className="mt-3 inline-flex items-start gap-2.5 leading-relaxed text-ink-700">
                  <Navigation className="mt-1 size-4 shrink-0 text-ink-400" aria-hidden />
                  <span>We usually run in via {city.majorRoads.join(', ')}.</span>
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                We run 24 hours a day, seven days a week. You
                get a real arrival window when you call, and a message when the technician is on the way.
              </p>
              {city.landmarks && city.landmarks.length > 0 && (
                <p className="mt-6 text-sm text-ink-600">
                  <span className="font-medium text-ink-800">Local landmarks near our {city.name} calls:</span>{' '}
                  {city.landmarks.join(' · ')}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">
            Gate services we provide in {city.name}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block rounded-[var(--radius-card)] border border-ink-100 bg-white px-5 py-4 text-sm font-medium text-ink-900 transition-all hover:border-ink-200 hover:shadow-[var(--shadow-card)]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mb-6 mt-12 font-display text-2xl font-bold text-ink-950">
            Operator brands we repair in {city.name}
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/brands/${b.slug}`}
                  className="rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceAreaMap city={city} />

      {/* City pages previously had no social proof, no brand roster and no
          photographs — they were text and a map. These are Google Ads
          destinations for local search, so they now carry the same proof the
          homepage does. */}
      <TestimonialCarousel
        items={publishedTestimonials}
        intro={`Customers across Dallas–Fort Worth, filmed at their own gates. We bring the same team and the same parts stock to ${city.name}.`}
        tone="tint"
      />

      <PhotoGallery
        images={cityPhotos}
        title="Our technicians, on our own jobs"
        intro="Every photograph on this site is our own work. None of it is stock, and none of it is generated."
        tone="muted"
      />

      <BrandsGrid />

      <VideoReel />

      {city.faqs && city.faqs.length > 0 && (
        <FaqAccordion faqs={city.faqs} title={`${city.name} gate repair questions`} />
      )}

      {nearby.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">
              We also serve these nearby cities
            </h2>
            <ul className="flex flex-wrap gap-2.5">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/${PREFIX}${n.slug}${SUFFIX}`}
                    className="rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link href="/service-areas" className="font-medium text-ink-900 underline decoration-gold-400 underline-offset-2">
                See all {cities.length}+ cities we serve →
              </Link>
            </p>
          </div>
        </section>
      )}

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessForCity(city),
            ...(city.faqs?.length ? [faqSchema(city.faqs)] : []),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Service Areas', url: '/service-areas' },
              { name: city.name, url: `/${PREFIX}${city.slug}${SUFFIX}` },
            ]),
          ]),
        }}
      />
    </>
  )
}

function ProfileList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-ink-500">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
