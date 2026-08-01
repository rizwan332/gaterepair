import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { VideoReel } from '@/components/sections/video-reel'
import { BrandsGrid } from '@/components/sections/brands-grid'
import { WhyShield } from '@/components/sections/why-shield'
import { ServicesGrid } from '@/components/sections/services-grid'
import { PricingTeaser } from '@/components/sections/pricing-teaser'
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
 * Homepage section order is deliberate: trust before features, and video high
 * rather than buried. Of the 14 DFW competitors audited, none embeds video and
 * none publishes pricing — those two sections are the differentiators, so they
 * appear before the conventional services grid rather than after it.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <VideoReel />
      <BrandsGrid />
      <WhyShield />
      <ServicesGrid />
      <PricingTeaser />
      <Process />
      <ServiceAreas />
      <ClosingCTA />
    </>
  )
}
