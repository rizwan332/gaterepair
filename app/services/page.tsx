import type { Metadata } from 'next'
import { services } from '@/content/services'
import { PageHero } from '@/components/sections/page-hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { media } from '@/content/media-manifest'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Gate Repair Services in Dallas–Fort Worth',
  description:
    'Gate motor and operator repair, emergency call-outs, electric and iron gate repair, commercial and HOA ' +
    'entrances, access control and installation across Dallas–Fort Worth.',
  alternates: { canonical: '/services' },
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
