import type { Metadata } from 'next'
import { Hero, heroImage, HERO_SIZES } from '@/components/sections/hero'
import { VideoReel, videoReelFeatured } from '@/components/sections/video-reel'
import { BrandsGrid } from '@/components/sections/brands-grid'
import { BrandMarquee } from '@/components/sections/brand-marquee'
import { FeaturedWork } from '@/components/sections/featured-work'
import { CaseStudies } from '@/components/sections/case-studies'
import { projects, projectBySlug } from '@/content/projects'
import { WhyShield } from '@/components/sections/why-shield'
import { Reviews } from '@/components/sections/reviews'
import { reviewsConfirmed } from '@/content/reviews'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { publishedTestimonials } from '@/content/testimonials'
import { ServicesGrid } from '@/components/sections/services-grid'
import { Process } from '@/components/sections/process'
import { ServiceAreas } from '@/components/sections/service-areas'
import { HomeFaq, homeFaqs } from '@/components/sections/home-faq'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { services } from '@/content/services'
import { cdn } from '@/lib/cdn'
import {
  webPageSchema,
  webSiteSchema,
  offerCatalogSchema,
  faqSchema,
  videoSchema,
} from '@/lib/schema'

/**
 * The homepage is the one route whose title bypasses the layout's
 * '%s | Shield Gate Repair' template — `template` applies to child segments,
 * and this is the same segment the template is defined in. So the brand is
 * omitted here deliberately rather than by oversight: at 51 characters the tag
 * clears Google's ~60-character display budget with room for the availability
 * hook, which is the differentiator on a query set that skews to emergencies.
 *
 * The description previously ended "Published prices." — a claim the site
 * cannot keep, since /pricing was retired and 301s to /contact. It was also
 * 186 characters, so the 24/7 line was being truncated away.
 */
export const metadata: Metadata = {
  title: 'Gate Repair Dallas–Fort Worth | Same-Day, Open 24/7',
  description:
    'Automatic gate stuck, stalled or dead? Same-day gate repair across Dallas–Fort Worth. ' +
    'We fix LiftMaster, FAAC, Elite, Viking and Ramset operators. Open 24/7.',
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
 *
 * Two of the four are LiftMaster jobs, so they sit at positions 2 and 4 rather
 * than adjacent — side by side they would read as one story told twice.
 *
 * The LA400-to-LA500 arm upgrade leads the pair because it is the most literal
 * version of this section's own title: a full replacement would have been the
 * easy quote to write, and the customer paid for an arm instead.
 *
 * liftmaster-corroded-board-solar-upgrade is deliberately not here. It is a
 * third LiftMaster board story and the homepage already carries two; it still
 * leads /brands/liftmaster, which picks up every LiftMaster case study
 * automatically.
 */
const homepageCaseStudies = [
  'commercial-gate-impact-damage-repair',
  'liftmaster-la400-to-la500-arm-upgrade',
  'ramset-slide-gate-broken-rollers',
  'liftmaster-board-not-charging-battery',
]
  .map((slug) => projectBySlug(slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p))

const PAGE_TITLE = 'Automatic Gate Repair in Dallas–Fort Worth'
const PAGE_DESCRIPTION =
  'Same-day automatic gate repair across the Dallas–Fort Worth metroplex. Residential, commercial, ' +
  'HOA and industrial. Open 24/7.'

export default function HomePage() {
  return (
    <>
      {/*
        Preload the LCP element.

        The hero is a hand-built <picture> served from the CDN, so Next knows
        nothing about it and emits no preload — the only image preload in the
        document used to be the header logo, which competed with the actual LCP
        image for connection and bandwidth. The logo now loads eagerly without
        claiming the slot (see site-header.tsx).

        `imageSrcSet` and `imageSizes` must match the rendered <source>
        character for character or the browser fetches the image twice, which is
        why both the image and its `sizes` are imported from the hero rather
        than restated here. AVIF only: it is the first <source>, so it is what
        any browser that supports preload-as-image will actually select.
      */}
      {heroImage && (
        <link
          rel="preload"
          as="image"
          type="image/avif"
          // eslint-disable-next-line react/no-unknown-property
          imageSrcSet={heroImage.widths
            .map((w) => `${cdn(`${heroImage.src}-${w}.avif`)} ${w}w`)
            .join(', ')}
          imageSizes={HERO_SIZES}
          fetchPriority="high"
        />
      )}
      <Hero />
      {/* Directly under the hero: the brand row is a credibility signal, and it
          is the fastest one on the page to read. */}
      <BrandMarquee />
      {/* Video testimonials ARE the social proof here. The written-review
          section that used to follow rendered placeholder cards behind an
          "awaiting real review data" warning — the client has no Google reviews
          and says the videos are better, and he is right. It comes back
          automatically if reviewsConfirmed is ever flipped.

          Every video on the channel now appears, Shorts included, in one
          carousel rather than the three-card strip that used to be here. */}
      <TestimonialCarousel
        items={publishedTestimonials}
        intro="Every one of these is a Shield Gate Repair customer, filmed at their own gate after the job was finished."
        tone="tint"
      />
      {/* The client's own three homepage photographs. */}
      <FeaturedWork />
      {/* Case studies on the homepage at the client's request (6 Aug 2026),
          led by the commercial impact job he asked to feature. It is the
          strongest argument the site has — two companies quoted $25,000 to
          replace a gate we repaired for $6,880 — and until now it was three
          clicks from the front door. */}
      <CaseStudies
        items={homepageCaseStudies}
        limit={4}
        title="Repairs That Were Quoted as Replacements"
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
      {/* Question-shaped headings with answers in the DOM — the extraction unit
          for People Also Ask and AI Overviews. The homepage previously had
          thirteen H2s and not one was a question. */}
      <HomeFaq />
      <ClosingCTA />

      {/*
        Homepage schema graph.

        This page used to carry exactly one node — the HomeAndConstructionBusiness
        from the layout — while holding eight services, six embedded videos and
        190 cities. Everything below hangs off that same @id rather than
        declaring a second entity.

        VideoObject covers the six self-hosted VideoReel clips only. The 21
        YouTube testimonials in the carousel above are deliberately excluded:
        VideoObject requires uploadDate, and neither the real upload dates nor
        the durations of those videos exist anywhere in this repository. Adding
        them would mean inventing both. If the client supplies the channel
        metadata, extend content/testimonials.ts and add them here.

        FAQPage is emitted for entity understanding, not rich results — Google
        restricted those to government and health sites in 2023.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webSiteSchema(),
            webPageSchema({
              url: '/',
              name: PAGE_TITLE,
              description: PAGE_DESCRIPTION,
              primaryImage: heroImage ? `${heroImage.src}-1200.webp` : undefined,
            }),
            offerCatalogSchema(
              services.map((s) => ({
                name: s.name,
                description: s.intro,
                url: `/services/${s.slug}`,
              })),
            ),
            ...(homeFaqs.length > 0 ? [faqSchema(homeFaqs)] : []),
            ...videoReelFeatured.map((v) =>
              videoSchema({
                title: v.title,
                description: v.description,
                thumbnailUrl: `${v.poster}.jpg`,
                contentUrl: v.src,
                durationSeconds: v.durationSeconds,
                uploadDate: '2026-08-01',
              }),
            ),
          ]),
        }}
      />
    </>
  )
}
