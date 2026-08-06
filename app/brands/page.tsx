import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { BrandsGrid } from '@/components/sections/brands-grid'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { media } from '@/content/media-manifest'
import { brands } from '@/content/brands'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Gate Operator Brands We Repair | Shield Gate Repair Dallas',
  description:
    'We repair LiftMaster, FAAC, All-O-Matic, Elite, Viking, Eagle, Ramset, DoorKing, Linear and HySecurity ' +
    'gate operators across Dallas–Fort Worth. Real repair photos and video.',
  alternates: { canonical: '/brands' },
}

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Gate Operator Brands We Repair"
        intro={`${brands.length} operator brands, with real repair photography and video for most of them. If you have been told your operator can only be replaced, it is worth a second opinion.`}
        image={media['liftmaster']?.[0]}
      />
      <BrandsGrid />
      <ClosingCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Brands', url: '/brands' },
            ]),
          ),
        }}
      />
    </>
  )
}
