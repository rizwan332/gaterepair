import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { VideoReel } from '@/components/sections/video-reel'
import { BrandsGrid } from '@/components/sections/brands-grid'
import { BrandMarquee } from '@/components/sections/brand-marquee'
import { FeaturedWork } from '@/components/sections/featured-work'
import { CaseStudies } from '@/components/sections/case-studies'
import { projects, projectBySlug } from '@/content/projects'
import { WhyShield } from '@/components/sections/why-shield'
import { Reviews } from '@/components/sections/reviews'
import { reviewsConfirmed } from '@/content/reviews'
import { VideoTestimonials } from '@/components/sections/video-testimonials'
import { publishedTestimonials } from '@/content/testimonials'
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
/**
 * Led by the commercial impact repair the client asked to feature, then filled
 * out with the other jobs that turn on a diagnosis rather than a part swap.
 * Named explicitly rather than sliced off the top of `projects`, so adding a
 * case study cannot silently reorder the homepage.
 */
const homepageCaseStudies = [
  'commercial-gate-impact-damage-repair',
  'ramset-slide-gate-broken-rollers',
  'liftmaster-corroded-board-solar-upgrade',
]
  .map((slug) => projectBySlug(slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p))

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Directly under the hero: the brand row is a credibility signal, and it
          is the fastest one on the page to read. */}
      <BrandMarquee />
      {/* Video testimonials ARE the social proof here. The written-review
          section that used to follow rendered placeholder cards behind an
          "awaiting real review data" warning — the client has no Google reviews
          and says the videos are better, and he is right. It comes back
          automatically if reviewsConfirmed is ever flipped. */}
      <VideoTestimonials items={publishedTestimonials.slice(0, 3)} tone="tint" />
      {/* The client's own three homepage photographs. */}
      <FeaturedWork />
      {/* Case studies on the homepage at the client's request (6 Aug 2026),
          led by the commercial impact job he asked to feature. It is the
          strongest argument the site has — two companies quoted $25,000 to
          replace a gate we repaired for $6,880 — and until now it was three
          clicks from the front door. */}
      <CaseStudies
        items={homepageCaseStudies}
        title="Repairs Other Companies Quoted to Replace"
        intro="Each of these was diagnosed before anything was replaced. Several had already been quoted for a full replacement by someone else."
        tone="tint"
      />
      {reviewsConfirmed && <Reviews />}
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
