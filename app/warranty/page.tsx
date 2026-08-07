import type { Metadata } from 'next'
import { FileCheck, XCircle, CheckCircle2 } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { PageHero } from '@/components/sections/page-hero'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { Reveal } from '@/components/ui/reveal'
import { media } from '@/content/media-manifest'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Our Warranty | Shield Gate Repair Dallas–Fort Worth',
  description:
    'What our warranty actually covers, what it does not, and how to claim. Written plainly, because a warranty you have to interpret is not much of a warranty.',
  alternates: { canonical: '/warranty' },
}

/**
 * Warranty page.
 *
 * No competitor in this market headlines a warranty term — several mention
 * "warranty" in passing, none states what it covers or for how long. That makes
 * this free differentiation, and it directly answers the fear that drives this
 * category: not price, but being taken advantage of by a stranger.
 *
 * The exclusions section is deliberate. A warranty page that lists only what is
 * covered reads as marketing; one that states plainly what is not covered reads
 * as a document, and documents are what people trust.
 */

const faqs = [
  {
    q: 'Do I need to register the warranty?',
    a: 'No. It applies automatically to the work on your invoice. Keep the invoice — it is the only thing you need to make a claim.',
  },
  {
    q: 'What if the same part fails again?',
    a: 'If it is the part we replaced and it is within the warranty period, we come back and there is no charge for that part or the labour to fit it. If a different part has failed, that is a separate repair — but we will tell you clearly which situation you are in rather than being vague about it.',
  },
  {
    q: 'Does the warranty transfer if I sell the property?',
    a: 'Ask us when you book. For most residential repairs we are happy for it to transfer within the original period — the work does not stop being ours because the address changed hands.',
  },
  {
    q: 'What voids the warranty?',
    a: 'Someone else working on the same equipment afterwards, physical damage such as a vehicle impact, and continuing to run a gate we have told you is unsafe. None of those are hidden clauses — they are the things that genuinely make it impossible for us to stand behind the work.',
  },
  {
    q: 'Do you warranty parts you did not supply?',
    a: 'We warranty our labour on them, but not the part itself — we have no control over its quality or its age. If you would rather we supplied the part so the whole repair is covered, say so when you book.',
  },
]

export default function WarrantyPage() {
  const term = fact(business.warrantyTerm)

  return (
    <>
      <PageHero
        eyebrow="Our warranty"
        title="What We Stand Behind, In Plain English"
        intro="A warranty you have to interpret is not much of a warranty. Here is exactly what is covered, exactly what is not, and how to claim — with no clause that only becomes relevant once something goes wrong."
        image={media['gate-installation']?.[8]}
        meta={term ? `${term} on parts and workmanship` : undefined}
      />

      {/*
        Client-supplied copy, 7 Aug 2026, replacing the "term pending
        confirmation" notice that sat here.

        It is no longer conditional on `warrantyTerm`. The old text existed only
        to explain a missing number, so it had to disappear once one arrived;
        this says something true either way, and reads as a promise rather than
        as an apology. The specific term still renders in the page meta above
        the moment business.warrantyTerm is confirmed.

        Restyled to match: the warning triangle and amber band were right for a
        caveat and wrong for a commitment.
      */}
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="container-page flex max-w-3xl gap-3.5 py-6">
          <FileCheck className="mt-0.5 size-5 shrink-0 text-success-600" aria-hidden />
          <p className="text-base leading-relaxed text-ink-800">
            Every repair is backed by a clear written warranty. No hidden terms. No confusing fine
            print. We stand behind our work and every covered repair is explained before we begin.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <h2 className="mb-6 inline-flex items-center gap-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                  <CheckCircle2 className="size-6 text-success-600" aria-hidden />
                  What is covered
                </h2>
                <ul className="space-y-4">
                  {[
                    'Parts we supplied and fitted — if the part fails within the warranty period we replace it, and there is no charge for the part or the labour.',
                    'Our workmanship on every repair. If a fault traces back to how we did the work rather than to the component, we put it right at no cost.',
                    'Programming and adjustment. If limits, safety devices or access credentials we configured drift or fail within the period, we return and reset them.',
                    'Diagnosis of a recurrence. If the same symptom comes back within the period we do not charge to look at it, even if the cause turns out to be something different.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success-500" aria-hidden />
                      <span className="leading-relaxed text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <h2 className="mb-6 inline-flex items-center gap-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                  <XCircle className="size-6 text-ink-400" aria-hidden />
                  What is not
                </h2>
                <ul className="space-y-4">
                  {[
                    'Parts supplied by someone else. We warranty our labour on them, but we cannot warranty a component whose age and quality we had no control over.',
                    'Physical damage after the repair — vehicle impact, storm damage, vandalism or ground movement that shifts a gate post.',
                    'Wear on parts we did not replace. Fixing a control board does not put a warranty on a twenty-year-old chain.',
                    'Work carried out by another company on the same equipment afterwards. Once someone else has been inside the unit we cannot say what changed.',
                    'Continuing to operate a gate we have advised in writing is unsafe.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-300" aria-hidden />
                      <span className="leading-relaxed text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
        <div className="container-page relative">
          <Reveal>
            <h2 className="mb-4 inline-flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
              <FileCheck className="size-7 text-gold-400" aria-hidden />
              How to make a claim
            </h2>
            <p className="prose-measure mb-10 text-lg text-ink-300">
              There is no form and no claims department. There is a phone number.
            </p>
          </Reveal>
          <ol className="max-w-3xl space-y-6">
            {[
              {
                title: 'Call us',
                body: `Ring ${business.phone.display} and say the gate we worked on has a problem. Have the invoice to hand if you can — it tells us what was done and when — but we can usually find the job from your address.`,
              },
              {
                title: 'We tell you where you stand, on the phone',
                body: 'Before anyone is dispatched we tell you whether we think this is a warranty return or a separate repair, and why. You are not finding that out from a technician standing in your driveway.',
              },
              {
                title: 'We come back',
                body: 'Warranty returns are scheduled at the same priority as any other call. A gate we repaired that has failed again is not a lower priority than new work.',
              },
              {
                title: 'You get it in writing again',
                body: 'The return visit is documented the same way the original was, and the warranty period on any replaced part starts again from that date.',
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span
                  className="btn-gold inline-flex size-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="mb-1.5 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="leading-relaxed text-ink-300">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="prose-measure">
            <h2 className="mb-5 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Why we publish this
            </h2>
            <p className="text-lg leading-relaxed text-ink-800">
              Every gate company says it stands behind its work. Almost none of them will tell you for how
              long, on what, or what would void it &mdash; which means &ldquo;we stand behind our work&rdquo;
              is doing no work at all as a statement.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-800">
              The fear in this trade is not price. It is being taken advantage of by a stranger you had to
              call in a hurry. A warranty that is written down and specific is one of the few things that
              actually answers that, which is why it is a page rather than a line in a footer.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} title="Warranty questions" />
      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Warranty', url: '/warranty' },
            ]),
          ]),
        }}
      />
    </>
  )
}
