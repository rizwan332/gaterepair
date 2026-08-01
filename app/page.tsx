import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { VideoReel } from '@/components/sections/video-reel'
import { BrandsGrid } from '@/components/sections/brands-grid'
import { WhyShield } from '@/components/sections/why-shield'
import { Reviews } from '@/components/sections/reviews'
import { ServicesGrid } from '@/components/sections/services-grid'
import { Process } from '@/components/sections/process'
import { ServiceAreas } from '@/components/sections/service-areas'
import { ClosingCTA } from '@/components/sections/closing-cta'

export const metadata: Metadata = {
  title: 'Gate Repair Dallas–Fort Worth | Same-Day Service | Shield Gate Repair',
  description:
    'Automatic gate stuck or broken? Same-day repair across Dallas–Fort Worth. We repair LiftMaster, FAAC, ' +
    'All-O-Matic, Elite, Viking, Eagle and Ramset operators. Open 24/7. Published prices.',
  alternates: { canonical: '/' },
}

/**
 * Section order is deliberate.
 *
 * Proof comes first: Reviews sits directly under the hero, with the customer
 * testimonial video as its centrepiece, then the video reel. The previous order
 * pushed every trust signal below three feature sections — which reproduced the
 * exact failure the old WordPress site was rejected for.
 *
 * The standalone trust bar is gone. It rendered two chips and duplicated the
 * hero's proof row, so it read as an unfinished component rather than a
 * credential strip.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <VideoReel />
      <BrandsGrid />
      <WhyShield />
      <ServicesGrid />
      <Process />
      <ServiceAreas />
      <ClosingCTA />
    </>
  )
}
