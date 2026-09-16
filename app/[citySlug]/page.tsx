import type { Metadata } from 'next'
import { openGraphFor } from '@/lib/seo'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, Navigation } from 'lucide-react'
import {
  cities,
  publishedCities,
  indexedCities,
  cityBySlug,
  countyPeers,
  type City,
} from '@/content/cities'
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
import { modelPath, modelKey } from '@/content/models'
import { brandsForCity, localFaults } from '@/lib/city-links'

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

  /**
   * Description, assembled to fit rather than written and hoped over.
   *
   * The snippet budget is ~160 characters and the inputs vary by 20 — "Boyd,
   * Wise County" against "North Richland Hills, Tarrant County" — so a single
   * fixed template either overflows on the long cities or wastes the budget on
   * the short ones. Writing one and eyeballing it is what produced the previous
   * range of 114 to 126.
   *
   * So: build the sentence that always fits, then spend whatever is left on the
   * operator brands we actually see in that city, dropping one at a time until
   * it fits. The brands come from `gateProfile`, which is real technician-
   * interview data — a city we have not enriched has none, and names none.
   */
  const LIMIT = 158
  const head = `Gate stuck, stalled or dead in ${city.name}? Same-day gate repair across ${city.county}`
  const tail = `. Open 24/7. Call ${business.phone.display}.`
  let description = `${head}. Residential and commercial${tail.slice(1)}`
  for (let n = (city.gateProfile?.commonBrands.length ?? 0); n > 0; n--) {
    const candidate = `${head} — we fix ${city.gateProfile!.commonBrands.slice(0, n).join(', ')}${tail}`
    if (candidate.length <= LIMIT) {
      description = candidate
      break
    }
  }

  return {
    /**
     * `absolute`, so the layout's ' | Shield Gate Repair' template does not
     * apply. That template was adding 20 characters to a tag that already ran
     * to 59 — measured 6 Sep 2026, 192 of 241 titles on this site exceeded
     * Google's ~60-character display budget, and every one of them did so
     * because of the suffix rather than because the title itself was long.
     *
     * Dropping the brand is safe: Google renders the site name separately from
     * the title on mobile and derives it from the WebSite schema node, which
     * the homepage already emits.
     *
     * "Gate Repair in Plano, TX — Same-Day, Open 24/7" is 45 characters, which
     * leaves the availability hook intact instead of truncating it away.
     */
    title: { absolute: `Gate Repair in ${city.name}, TX — Same-Day, Open 24/7` },
    // Opens on the problem, not the service. Someone searching this is standing
    // at a gate that will not move, and the snippet that names their situation
    // back to them is the one they click. The previous version opened
    // "Automatic gate repair in {city}, {county}." and ran 114–126 characters,
    // spending none of the remaining budget.
    description,
    alternates: { canonical: `/${PREFIX}${city.slug}${SUFFIX}` },
    openGraph: openGraphFor(`/${PREFIX}${city.slug}${SUFFIX}`),
    /**
     * Cities without genuinely local content are served but not submitted.
     *
     * `follow` matters as much as `noindex` here: these pages carry the county
     * peer links and the full service and brand rosters, so their links still
     * pass. What stops is asking Google to treat 176 near-identical pages as
     * 176 distinct answers. Filling in `localAngle` moves a city into
     * `indexedCities` and removes this on the next build — see content/cities.ts.
     */
    robots: indexedCities.includes(city)
      ? undefined
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
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
  // City → brand → model. Computed in lib/city-links.ts so the linking
  // validator asserts on exactly what this page renders.
  const cityBrands = brandsForCity(city)
  const faults = localFaults(city)
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
              {/* The operators and the faults both become links: this is the
                  city → brand and city → service half of the internal linking
                  system, and the anchor carries the brand rather than the
                  generic name so the relationship is stated, not implied. */}
              <ProfileList
                title="Operators we see here"
                items={city.gateProfile.commonBrands}
                hrefFor={(name) => {
                  const brand = brands.find((b) => b.name === name)
                  return brand ? `/brands/${brand.slug}` : undefined
                }}
                suffix={` gate repair in ${city.name}`}
              />
              <ProfileList
                title="What usually fails"
                items={faults.map((f) => f.issue)}
                hrefFor={(issue) => `/services/${faults.find((f) => f.issue === issue)!.service.slug}`}
                suffix={` — ${city.name} gate repair`}
              />
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

          {/* City → brand → model, the spine of the internal linking system.
              One block rather than two lists: a visitor who knows their brand
              gets straight to the model page for the operator on their gate,
              and a crawler sees city, brand and model stated together on every
              city page rather than inferred from three separate rosters. */}
          <h2 className="mb-3 mt-12 font-display text-2xl font-bold text-ink-950">
            Operator brands and models we repair in {city.name}
          </h2>
          <p className="prose-measure mb-7 leading-relaxed text-ink-700">
            {city.gateProfile
              ? `The operators marked “seen here” are the ones that turn up most often in ${city.name}. Every brand links to what we repair on it, and to the individual models we are called out to most.`
              : `Every brand links to what we repair on it, and to the individual models we are called out to most across ${city.county}.`}
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityBrands.map(({ brand: b, seenHere, models }) => (
              <li
                key={b.slug}
                className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 transition-all hover:border-ink-200 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <Link
                    href={`/brands/${b.slug}`}
                    className="font-display font-semibold text-ink-950 underline decoration-gold-400 decoration-1 underline-offset-4 hover:text-gold-600"
                  >
                    {b.name} gate repair
                    <span className="sr-only"> in {city.name}</span>
                  </Link>
                  {seenHere && (
                    <span className="rounded bg-gold-100 px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-gold-700">
                      Seen here
                    </span>
                  )}
                </div>
                {models.length > 0 && (
                  <ul className="mt-3.5 flex flex-wrap gap-1.5">
                    {models.map((m) => (
                      <li key={modelKey(m)}>
                        <Link
                          href={modelPath(m)}
                          className="inline-block rounded-lg border border-ink-100 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-700 transition-colors hover:border-gold-400 hover:text-ink-950"
                        >
                          {m.model}
                          <span className="sr-only"> repair in {city.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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

function ProfileList({
  title,
  items,
  hrefFor,
  suffix,
}: {
  title: string
  items: string[]
  /** Where an item links, if anywhere. Items with no destination render as plain text. */
  hrefFor?: (item: string) => string | undefined
  /** Appended to the anchor for screen readers and crawlers, so the link text names the relationship. */
  suffix?: string
}) {
  return (
    <div>
      <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-ink-500">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => {
          const href = hrefFor?.(item)
          return (
            <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              {href ? (
                <Link
                  href={href}
                  className="underline decoration-gold-400 decoration-1 underline-offset-4 hover:text-ink-950"
                >
                  {item}
                  {suffix && <span className="sr-only">{suffix}</span>}
                </Link>
              ) : (
                item
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
