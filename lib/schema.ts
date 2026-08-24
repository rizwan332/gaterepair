import { business } from '@/content/business'
import { fact } from '@/lib/business'

/**
 * JSON-LD builders.
 *
 * Of the 14 DFW competitors audited, not one has detectable schema markup —
 * including both market leaders. VideoObject in particular is uncontested, and
 * the client has 25 real videos to attach it to.
 *
 * Every builder omits unconfirmed facts rather than emitting a placeholder.
 * Structured data that misrepresents a business is worse than no structured
 * data at all.
 */

const BASE = business.url

type Json = Record<string, unknown>

export function organizationSchema(): Json {
  const rating = fact(business.rating)
  const address = fact(business.address)
  const years = fact(business.yearsInBusiness)

  const node: Json = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${BASE}/#business`,
    name: business.name,
    url: BASE,
    telephone: business.phone.display,
    email: business.email,
    description:
      'Automatic gate repair, installation and service across the Dallas–Fort Worth metroplex. Residential, ' +
      'commercial, HOA and industrial.',
    areaServed: { '@type': 'AdministrativeArea', name: business.serviceArea.primary },
    // Google will not consider a LocalBusiness for a rich result without an
    // image, and uses `logo` for the knowledge panel. Both are assets we own,
    // so there was no reason for these to be absent. Absolute URLs — schema
    // consumers do not resolve site-relative paths.
    logo: `${BASE}/brand/logo-dark.png`,
    image: [
      `${BASE}/images/gate-installation/gate-installation-01-800.webp`,
      `${BASE}/images/liftmaster/liftmaster-01-800.webp`,
      `${BASE}/images/automatic-gate-repair/automatic-gate-repair-01-800.webp`,
    ],
    // The client's About copy says "over 16 years", so the founding year is at
    // most 2010. Year only — a full date would claim a precision we do not
    // have. Omitted entirely while the fact is unconfirmed.
    ...(years && years > 0 ? { foundingDate: String(new Date().getFullYear() - years) } : {}),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: business.hours.open,
        closes: business.hours.close,
      },
    ],
  }

  if (address && address.street) {
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: 'US',
    }
  }

  // Only emit ratings backed by real, verifiable reviews.
  if (rating && rating.count > 0) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating.score,
      reviewCount: rating.count,
    }
  }

  return node
}

export function serviceSchema(opts: { name: string; description: string; url: string }): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${BASE}${opts.url}`,
    provider: { '@id': `${BASE}/#business` },
    areaServed: { '@type': 'AdministrativeArea', name: business.serviceArea.primary },
    serviceType: 'Gate repair',
  }
}

export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(trail: { name: string; url: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.url}`,
    })),
  }
}

/**
 * The uncontested one. Competitors have zero embedded video, so these are
 * eligible for video rich results with no local competition.
 */
export function videoSchema(opts: {
  title: string
  description: string
  thumbnailUrl: string
  contentUrl: string
  durationSeconds: number
  uploadDate: string
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: opts.title,
    description: opts.description,
    thumbnailUrl: `${BASE}${opts.thumbnailUrl}`,
    contentUrl: `${BASE}${opts.contentUrl}`,
    uploadDate: opts.uploadDate,
    duration: `PT${Math.floor(opts.durationSeconds / 60)}M${opts.durationSeconds % 60}S`,
    publisher: { '@id': `${BASE}/#business` },
  }
}

/**
 * Review markup.
 *
 * Only ever called when `reviewsConfirmed` is true. Emitting Review or
 * AggregateRating markup over placeholder or unverifiable content is a
 * structured-data violation that can earn a manual action — and in a trade
 * built on trust it is the wrong trade to make even if it worked.
 */
export function reviewSchema(
  reviews: { author: string; date: string; rating: number; body: string }[],
): Json[] {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${BASE}/#business` },
    author: { '@type': 'Person', name: r.author },
    datePublished: r.date,
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    reviewBody: r.body,
  }))
}

/**
 * City page schema — a Service, not a second business.
 *
 * This used to emit a `HomeAndConstructionBusiness` per city with no `@id`,
 * alongside the real one from the layout. Two nodes of the same type on one
 * page, one of them anonymous, is a conflicting duplicate entity: Google has
 * to guess which is authoritative and may pick neither.
 *
 * It was also the wrong claim to make. Declaring a LocalBusiness for a city
 * asserts a presence there, and a service-area business has one location and
 * drives out from it. A `Service` with `areaServed` and a `provider` pointing
 * at the single business node says the true thing — we serve this city — and
 * keeps exactly one business entity on the page.
 */
export function localBusinessForCity(city: { name: string; county: string; slug: string }): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE}/gate-repair-${city.slug}-tx#service`,
    name: `Gate Repair in ${city.name}, TX`,
    serviceType: 'Automatic gate repair',
    url: `${BASE}/gate-repair-${city.slug}-tx`,
    provider: { '@id': `${BASE}/#business` },
    areaServed: [
      { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: city.county } },
    ],
  }
}
