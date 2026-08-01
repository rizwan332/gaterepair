import type { Metadata } from 'next'
import { AlertCircle } from 'lucide-react'
import { priceBands, pricingConfirmed, pricingDisclaimer, repairVsReplace } from '@/content/pricing'
import { business } from '@/content/business'
import { PageHero } from '@/components/sections/page-hero'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { media } from '@/content/media-manifest'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Gate Repair Cost in Dallas–Fort Worth (2026 Price Guide)',
  description:
    'Real price ranges for gate motor, control board, sensor and off-track repair across DFW. ' +
    'No phone call required to find out what it costs.',
  alternates: { canonical: '/pricing' },
  // Unlisted until real bands exist. A page promising transparency and showing
  // twelve em-dashes damages trust more than having no pricing page at all.
  robots: { index: false, follow: true },
}

const faqs = [
  {
    q: 'Why is it a range and not a fixed price?',
    a: 'Because the part that failed, the operator it failed on, and the condition of the gate itself all move the number. A control board on a common LiftMaster unit is not the same job as a board on a hydraulic FAAC. The range tells you the territory; the technician gives you the exact figure before any work starts.',
  },
  {
    q: 'Will you quote over the phone?',
    a: 'Not a final number, no. Anyone who does is either guessing or planning to change it when they arrive. We will tell you what the likely fault is and what that repair typically costs, then confirm on site before touching anything.',
  },
  {
    q: 'Is the diagnostic fee waived if I go ahead with the repair?',
    a: 'Ask when you call — we will tell you plainly before the technician is dispatched, not after the work is done.',
  },
  {
    q: 'When does replacement actually make more sense than repair?',
    a: repairVsReplace.body,
  },
]

export default function PricingPage() {
  const hasNumbers = pricingConfirmed && priceBands.some((b) => b.high > 0)

  return (
    <>
      <PageHero
        eyebrow="Transparent pricing"
        title="What Gate Repair Actually Costs in Dallas–Fort Worth"
        intro="Every other gate company in this market makes you call to find out what anything costs. We think that is backwards, so here are our real ranges."
        image={media['gate-motor-repair']?.[0] ?? media['automatic-gate-repair']?.[0]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div className="mb-10 flex max-w-3xl gap-4 rounded-[var(--radius-card)] border border-ink-200 bg-ink-50 p-6">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-ink-500" aria-hidden />
            <p className="text-[0.9375rem] leading-relaxed text-ink-700">{pricingDisclaimer}</p>
          </div>

          {!hasNumbers && (
            <div className="mb-10 max-w-3xl rounded-[var(--radius-card)] border-2 border-dashed border-gold-500 bg-gold-300/10 p-6">
              <p className="font-display text-lg font-semibold text-ink-950">
                Price ranges are being finalised
              </p>
              <p className="mt-2 leading-relaxed text-ink-700">
                We are publishing real figures per repair type based on completed jobs rather than guesses.
                In the meantime, call {business.phone.display} and we will talk you through what your
                specific fault typically costs before anyone is dispatched.
              </p>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-ink-200">
                  <th className="py-3 pr-6 font-display text-sm font-semibold uppercase tracking-wide text-ink-500">
                    Repair
                  </th>
                  <th className="py-3 pr-6 font-display text-sm font-semibold uppercase tracking-wide text-ink-500">
                    What you&rsquo;re experiencing
                  </th>
                  <th className="py-3 pr-6 font-display text-sm font-semibold uppercase tracking-wide text-ink-500">
                    Typical visit
                  </th>
                  <th className="py-3 text-right font-display text-sm font-semibold uppercase tracking-wide text-ink-500">
                    Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceBands.map((band) => (
                  <tr key={band.slug} className="border-b border-ink-100">
                    <td className="py-4 pr-6 align-top font-medium text-ink-950">{band.label}</td>
                    <td className="py-4 pr-6 align-top text-sm text-ink-700">{band.symptom}</td>
                    <td className="py-4 pr-6 align-top text-sm text-ink-600">{band.typicalVisit}</td>
                    <td className="py-4 text-right align-top font-display font-semibold text-ink-950">
                      {hasNumbers ? `$${band.low}–$${band.high}` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-5 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            {repairVsReplace.heading}
          </h2>
          <p className="prose-measure text-lg leading-relaxed text-ink-800">{repairVsReplace.body}</p>

          <h2 className="mb-5 mt-14 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            What we won&rsquo;t do
          </h2>
          <p className="prose-measure text-lg leading-relaxed text-ink-800">
            We don&rsquo;t quote a final price over the phone without seeing the gate. Anyone who does is
            either guessing or planning to change the number once they are standing in your driveway. We also
            don&rsquo;t sell an operator when a board will fix it &mdash; the margin is better on the operator,
            which is exactly why you should be suspicious when it gets recommended by default.
          </p>
        </div>
      </section>

      <FaqAccordion faqs={faqs} title="Pricing questions" />

      <section className="bg-white pb-14">
        <div className="container-page">
          <div className="flex max-w-3xl gap-4 rounded-[var(--radius-card)] border border-ink-200 bg-ink-50 p-6">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-ink-500" aria-hidden />
            <p className="text-[0.9375rem] leading-relaxed text-ink-700">{pricingDisclaimer}</p>
          </div>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Pricing', url: '/pricing' },
            ]),
          ]),
        }}
      />
    </>
  )
}
