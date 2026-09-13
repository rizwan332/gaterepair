import type { Metadata } from 'next'
import { openGraphFor } from '@/lib/seo'
import { PageHero } from '@/components/sections/page-hero'
import { BrandsGrid } from '@/components/sections/brands-grid'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { media } from '@/content/media-manifest'
import { brands } from '@/content/brands'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  // `absolute` — the layout's ' | Shield Gate Repair' template pushed this
  // past Google's ~60-character display budget. The site name is rendered
  // separately in the SERP and derived from the WebSite schema node.
  title: { absolute: 'Gate Operator Brands We Repair | Dallas–Fort Worth' },
  // 173 characters previously — the tail was being truncated away, and it was
  // spent listing a tenth brand rather than saying anything. 152.
  description:
    'We repair LiftMaster, FAAC, All-O-Matic, Elite, Viking, DoorKing and Ramset gate operators across ' +
    'Dallas–Fort Worth. Real repair photos and video.',
  alternates: { canonical: '/brands' },
  openGraph: openGraphFor('/brands'),
}

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Gate Operator Brands We Repair"
        intro="The operator brands we service, with real repair photography and video for most of them. If you have been told your operator can only be replaced, it is worth a second opinion."
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
