import type { Metadata } from 'next'
import { openGraphFor } from '@/lib/seo'
import { services } from '@/content/services'
import { PageHero } from '@/components/sections/page-hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { media } from '@/content/media-manifest'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  // `absolute` — the layout's ' | Shield Gate Repair' template pushed this
  // past Google's ~60-character display budget. The site name is rendered
  // separately in the SERP and derived from the WebSite schema node.
  title: { absolute: 'Gate Repair Services | Dallas–Fort Worth' },
  // 171 characters previously. 152.
  description:
    'Gate motor and operator repair, emergency call-outs, electric and iron gates, commercial and HOA ' +
    'entrances, and access control across Dallas–Fort Worth.',
  alternates: { canonical: '/services' },
  openGraph: openGraphFor('/services'),
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything We Fix"
        intro={`${services.length} services across residential driveways, commercial entrances, HOA communities and industrial yards — all backed by photographs of real jobs rather than stock imagery.`}
        image={media['iron-gate-repair']?.[0]}
      />
      <ServicesGrid />
      <ClosingCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
            ]),
          ),
        }}
      />
    </>
  )
}
