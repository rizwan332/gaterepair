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

export function localBusinessForCity(city: { name: string; county: string; slug: string }): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `${business.name} — ${city.name}`,
    url: `${BASE}/gate-repair-${city.slug}-tx`,
    telephone: business.phone.display,
    parentOrganization: { '@id': `${BASE}/#business` },
    areaServed: [
      { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: city.county } },
    ],
  }
}
