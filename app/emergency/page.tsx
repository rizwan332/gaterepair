import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, AlertTriangle, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
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

export const metadata: Metadata = {
  title: '24/7 Emergency Gate Repair | Dallas–Fort Worth | Call Now',
  description:
    'Gate stuck open or closed right now? We answer 24/7 and can talk you through the manual release on the phone before a technician arrives. Same-day emergency gate repair across DFW.',
  alternates: { canonical: '/emergency' },
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
 *  - the page is deliberately short. Emergency traffic does not read.
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

            <h1 className="font-display text-[2.5rem] font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
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
              No other gate company in Dallas&ndash;Fort Worth publishes video of their work.
            </p>
            <div className="max-w-3xl">
              <LazyVideo video={video} />
            </div>
          </div>
        </section>
      )}

      <FaqAccordion faqs={faqs} title="Emergency gate repair questions" />

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
