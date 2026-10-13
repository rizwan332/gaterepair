import type { Metadata } from 'next'
import { openGraphFor } from '@/lib/seo'
import Link from 'next/link'
import { Phone, AlertTriangle, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { TrustBadges } from '@/components/ui/trust-badges'
import { fact } from '@/lib/business'
import { serviceBySlug } from '@/content/services'
import { SERVICE_DEPTH } from '@/content/service-depth'
import { media } from '@/content/media-manifest'
import { videosFor } from '@/content/video-manifest'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { LazyVideo } from '@/components/ui/lazy-video'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { Reveal } from '@/components/ui/reveal'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { publishedTestimonials } from '@/content/testimonials'
import { VideoTestimonials } from '@/components/sections/video-testimonials'
import { tier1Cities } from '@/content/cities'

export const metadata: Metadata = {
  // Shortened once from 80 characters, when "Call Now" was the half being cut.
  // That left it at 65 with the layout's ' | Shield Gate Repair' appended,
  // still over budget — so the suffix goes rather than the words. 46. The site
  // name is rendered separately in the SERP, from the WebSite schema node.
  // 14 Oct 2026: "24 hour" added. Searchers type "24 hour gate repair", and
  // the site only ever said "24/7", so no page carried the phrase at all. 49.
  title: { absolute: '24 Hour Emergency Gate Repair | Dallas–Fort Worth' },
  // 180 characters previously. The manual-release line is the differentiator —
  // nobody else in the market offers it — so it stays and the generic
  // "same-day emergency gate repair across DFW" tail goes. 157.
  description:
    '24 hour emergency gate repair across DFW. Gate stuck open or closed? We answer day or night and can talk you through the manual release by phone.',
  alternates: { canonical: '/emergency' },
  openGraph: openGraphFor('/emergency'),
}

/**
 * Dedicated emergency landing page.
 *
 * Emergency traffic is the highest-intent, highest-value traffic on the site,
 * and it was previously served by a service page competing for attention with
 * seven others. This page does one job: get a stressed person on the phone.
 *
 * Structural choices that follow from that:
 *  - the call CTA is the first thing below the headline, not the last;
 *  - "what to do right now" comes before anything about the company, because a
 *    person who is blocked in cares about getting out, not about our warranty;
 *  - the page is deliberately short at the top. Emergency traffic does not
 *    read, so everything a searcher needs to act is above the FAQ. The
 *    "24-hour gate repair across DFW" section below it is for the reader who
 *    is comparing companies, and for search engines; it never sits between a
 *    stressed visitor and the phone number.
 */
export default function EmergencyPage() {
  const service = serviceBySlug('emergency-gate-repair')
  const depth = SERVICE_DEPTH['emergency-gate-repair']
  const responseBand = fact(business.responseBand)
  const hero = media['emergency-gate-repair']?.[0]
  const video = videosFor('emergency-gate-repair')[0]
  const faqs = [...(service?.faqs ?? []), ...(depth?.extraFaqs ?? [])]

  return (
    <>
      {/* Hero — call path above everything. */}
      <section className="surface-dark glow-gold relative isolate overflow-hidden">
        {hero && (
          <div className="absolute inset-0 -z-10">
            <ResponsiveImage image={hero} alt="" priority fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_9_11/0.97)_0%,rgb(8_9_11/0.9)_45%,rgb(8_9_11/0.55)_100%)]" />
          </div>
        )}
        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-200 ring-1 ring-inset ring-red-400/30">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-red-400" />
              </span>
              Emergency line open now
            </p>

            {/* The searched phrase is the heading's first, visible line rather
                than hidden text: the H1 has to say what the page is about, and
                the big line underneath does the talking to a stressed person. */}
            <h1 className="font-display text-[2.5rem] font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              <span className="mb-4 block text-base font-semibold uppercase tracking-wider text-gold-300 sm:text-lg">
                24 Hour Emergency Gate Repair · Dallas–Fort Worth
              </span>
              Gate Stuck Right Now?
              <br />
              <span className="text-gradient-gold">Call. We&rsquo;ll Answer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
              A person answers, day or night. If you are blocked in, we can usually talk you through the
              manual release on the phone so you can get out before anyone arrives.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={business.phone.href} size="lg" className="tabular">
                <Phone className="size-5" aria-hidden />
                Call {business.phone.display}
              </Button>
              <Button href={`sms:${business.phone.href.replace('tel:', '')}`} variant="ghostDark" size="lg">
                Text us a photo of the gate
              </Button>
            </div>

            {/* The urgency line stays specific to this page; the shared trust
                badges sit under it so the emergency hero carries the same
                signals as every other page. */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300">
              <li className="inline-flex items-center gap-2">
                <Clock className="size-4 text-gold-400" aria-hidden />
                {responseBand ? `Typical arrival ${responseBand}` : 'Open 24 hours, 7 days'}
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldAlert className="size-4 text-gold-400" aria-hidden />
                Gate stuck open treated as urgent
              </li>
            </ul>

            <TrustBadges className="mt-5" />
          </div>
        </div>
      </section>

      {/* What to do right now — before anything about us. */}
      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <h2 className="mb-3 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              What to do right now
            </h2>
            <p className="prose-measure mb-10 text-lg text-ink-700">
              Before you do anything else, work out which of these you are dealing with.
            </p>
          </Reveal>

          <ul className="grid gap-5 md:grid-cols-2">
            {[
              {
                tone: 'danger' as const,
                title: 'The gate is closing on cars or people',
                body: 'Stop using it. A safety device has failed and the gate can cause serious injury. Leave it in a safe position, disable automatic operation if you can, and call. This is the one fault where waiting is genuinely dangerous.',
              },
              {
                tone: 'danger' as const,
                title: 'Sparking, burning smell, or smoke',
                body: 'Kill power at the breaker first. Do not operate the gate and do not open the housing. Then call — it is almost always repairable once the circuit is safely isolated.',
              },
              {
                tone: 'warn' as const,
                title: 'You are blocked in or out',
                body: 'Almost every operator has a manual release, usually a keyed lever or pull handle on the housing. Call and we will talk you through it for your unit. Do not force the gate against an engaged drive.',
              },
              {
                tone: 'warn' as const,
                title: 'The gate is stuck open',
                body: 'We treat this as urgent regardless of the cause, because an open gate is an open property. If you can close it by hand using the manual release, do — then call.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className={`rounded-[var(--radius-card)] p-6 ring-1 ring-inset ${
                  item.tone === 'danger'
                    ? 'bg-red-50 ring-red-200'
                    : 'bg-gold-500/[0.07] ring-gold-500/30'
                }`}
              >
                <h3 className="mb-2.5 inline-flex items-start gap-2.5 font-display text-lg font-semibold text-ink-950">
                  <AlertTriangle
                    className={`mt-0.5 size-5 shrink-0 ${item.tone === 'danger' ? 'text-red-600' : 'text-gold-600'}`}
                    aria-hidden
                  />
                  {item.title}
                </h3>
                <p className="leading-relaxed text-ink-700">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <Reveal>
              <h2 className="mb-8 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                What we do when you call
              </h2>
            </Reveal>
            <ol className="max-w-3xl space-y-5">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="btn-gold inline-flex size-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 leading-relaxed text-ink-800">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {video && (
        <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
          <div className="container-page relative">
            <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl">An emergency call-out</h2>
            <p className="prose-measure mb-8 text-lg text-ink-300">
              Every video on this site was filmed on one of our own jobs.
            </p>
            <div className="max-w-3xl">
              <LazyVideo video={video} />
            </div>
          </div>
        </section>
      )}

      <VideoTestimonials
        items={publishedTestimonials.slice(0, 3)}
        eyebrow="Customer videos"
        title="Customers we got to fast"
        intro="Filmed on site after the repair, in their own words."
        tone="tint"
      />

      <FaqAccordion faqs={faqs} title="Emergency gate repair questions" />

      {/* For the comparer and for search: what "24-hour" covers, kept below the
          FAQ so it never stands between a blocked-in visitor and the phone. */}
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
          <div className="prose-measure space-y-5 text-lg leading-relaxed text-ink-700">
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              24-hour gate repair across Dallas–Fort Worth
            </h2>
            <p>
              Gates fail at the worst times: a power cut at 2 a.m., a storm on a Sunday, a delivery truck clipping
              the leaf on a holiday weekend. Our emergency line is answered by a person at night, on weekends and
              on holidays, and the first thing we do is make the property safe and passable, whether that is
              talking you through the manual release or sending a technician.
            </p>
            <h3 className="pt-2 font-display text-xl font-semibold text-ink-950">Emergencies we handle most</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-ink-900">Gate stuck open</strong> — an open gate is an open property, so we
                treat it as urgent whatever the cause.
              </li>
              <li>
                <strong className="text-ink-900">Gate won&rsquo;t open and you&rsquo;re blocked in or out</strong> —
                usually a dead operator, a tripped breaker, a failed board or a drained battery.
              </li>
              <li>
                <strong className="text-ink-900">Gate not working after a power outage or storm</strong> — surges
                and lightning damage control boards, transformers and loop detectors; standing water gets into
                underground loops and wiring.
              </li>
              <li>
                <strong className="text-ink-900">Gate hit by a vehicle</strong> — bent leaves and posts, a sliding
                gate off its track, or an operator arm torn from its bracket.
              </li>
              <li>
                <strong className="text-ink-900">Broken chain, snapped arm or seized motor</strong> — the gate moves
                partway, grinds, or the motor runs with nothing moving.
              </li>
              <li>
                <strong className="text-ink-900">Gate reversing or closing on vehicles</strong> — a failed safety
                sensor or photo eye. Stop using the gate until it is checked.
              </li>
            </ul>
            <h3 className="pt-2 font-display text-xl font-semibold text-ink-950">
              Homes, HOAs, apartments and commercial sites
            </h3>
            <p>
              We repair residential driveway gates and the high-cycle entrances on HOA communities, apartment
              complexes and commercial properties, where a failed gate affects every resident or the whole site.
              We work on LiftMaster, US Automatic, DoorKing, FAAC, Viking, Elite, Eagle, Ramset, All-O-Matic and
              Apollo operators, plus the keypads, intercoms, loops and sensors that control them.
            </p>
            <p>
              Not sure it counts as an emergency? Call anyway. If it can safely wait, we&rsquo;ll tell you and book
              a regular same-day visit instead.
            </p>
          </div>

          <aside className="self-start rounded-[var(--radius-card)] bg-ink-50 p-6 ring-1 ring-inset ring-ink-100">
            <h3 className="font-display text-lg font-semibold text-ink-950">Emergency gate repair near you</h3>
            <p className="mt-1.5 text-sm text-ink-600">Across the Dallas–Fort Worth metroplex.</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {tier1Cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/gate-repair-${city.slug}-tx`}
                    className="text-ink-800 underline decoration-ink-200 underline-offset-2 hover:text-ink-950 hover:decoration-gold-400"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-900 underline decoration-gold-400 underline-offset-2"
            >
              All service areas
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-gold-500">
        <div className="container-page py-14 md:py-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                Still stuck? Stop reading and call.
              </h2>
              <p className="mt-2 text-ink-900">Someone answers. Every time.</p>
            </div>
            <Button href={business.phone.href} variant="dark" size="lg" className="tabular">
              <Phone className="size-5" aria-hidden />
              {business.phone.display}
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">Not an emergency?</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/services/gate-motor-repair', label: 'Gate motor & operator repair' },
              { href: '/services/automatic-gate-repair', label: 'Automatic gate repair' },
              // Same-day but not an emergency — and this is the only internal
              // link to that page, which was otherwise orphaned: in the sitemap,
              // reachable from an ad, and linked from nowhere on the site.
              { href: '/samedaygaterepair', label: 'Same-day gate repair' },
              { href: '/contact', label: 'Request a free estimate' },
              { href: '/faq', label: 'Read the FAQs' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
              >
                {link.label}
                <ArrowUpRight className="size-3.5 text-ink-400" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              name: '24/7 Emergency Gate Repair',
              description:
                'Emergency automatic gate repair across Dallas–Fort Worth. Phone answered 24 hours, manual release guidance before dispatch, same-day response.',
              url: '/emergency',
            }),
            faqSchema(faqs),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Emergency Gate Repair', url: '/emergency' },
            ]),
          ]),
        }}
      />
    </>
  )
}
