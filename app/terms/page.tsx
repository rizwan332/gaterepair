import type { Metadata } from 'next'
import Link from 'next/link'
import { openGraphFor, INDEXABLE_ROBOTS } from '@/lib/seo'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { PageHero } from '@/components/sections/page-hero'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Terms of Service',
  // 154 chars — scripts/validate-meta.ts caps descriptions at 158.
  description:
    'The terms you agree to when you book gate repair work with Shield Gate Repair or use this site: ' +
    'estimates, access, workmanship, payment and governing law.',
  alternates: { canonical: '/terms' },
  openGraph: openGraphFor('/terms'),
  // The same directives the layout sets. Stating index/follow alone would
  // override the layout and drop the snippet directives with it.
  robots: INDEXABLE_ROBOTS,
}

/**
 * Terms of service.
 *
 * Both /terms and /terms-of-service returned 404 (audit, 21 Nov 2026) while the
 * footer linked a privacy policy beside nothing else. For a trade that takes
 * bookings, enters private property and schedules paid work, missing terms is
 * the one trust page whose absence is actually load-bearing: Google's quality
 * guidance looks for it, and AI answer engines weight it when deciding whether
 * a local provider is a real business.
 *
 * ⚠️ This states only what the site and the business demonstrably already do,
 * written from the code and from content/business.ts. It is NOT legal advice
 * and NOT a substitute for a lawyer reviewing it before it is relied on.
 *
 * Deliberately absent, because content/business.ts holds them as unconfirmed
 * `Fact`s and inventing them here would be worse than omitting them:
 *   - warrantyTerm   — no parts/labour period is stated; /warranty is linked instead
 *   - license        — no Texas DPS Private Security Bureau number
 *   - insurance      — no carrier or bonded status
 *   - address        — no registered address, so no notice address
 *   - payment terms  — deposit, methods and due date are not known
 * Each becomes a paragraph here the moment the client confirms it. Until then
 * the page says an estimate is agreed before work starts, which is true.
 */
export default function TermsPage() {
  const updated = 'November 2026'
  const warranty = fact(business.warrantyTerm)

  return (
    <>
      <PageHero
        showBadges={false}
        eyebrow="Legal"
        title="Terms of Service"
        intro={`The terms that apply when you book work with us or use this website. Last updated ${updated}.`}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div className="prose-measure space-y-8 text-ink-800">
            <Block title="Who these terms are with">
              <p>
                This website and the repair service behind it are operated by {business.legalName}, an
                automatic gate repair company serving the Dallas&ndash;Fort Worth metroplex. You can reach
                us on{' '}
                <a href={business.phone.href} className={linkClass}>
                  {business.phone.display}
                </a>{' '}
                or at{' '}
                <a href={`mailto:${business.email}`} className={linkClass}>
                  {business.email}
                </a>
                .
              </p>
              <p>
                &ldquo;We&rdquo; and &ldquo;us&rdquo; mean {business.legalName}. &ldquo;You&rdquo; means
                the person or organisation booking work or using this site.
              </p>
            </Block>

            <Block title="What these terms cover">
              <p>
                They cover two things: your use of this website, and work you book with us. Booking work
                by phone, by text, or through the{' '}
                <Link href="/contact" className={linkClass}>
                  contact form
                </Link>{' '}
                means you accept these terms as they stand on the day you book.
              </p>
            </Block>

            <Block title="Estimates and quotes">
              <p>
                We do not publish prices, because the cost of a gate repair depends on the operator, the
                fault and the parts involved, and a figure quoted without seeing either would be a guess.
                We give you a price before any chargeable work begins, and we agree it with you first.
              </p>
              <p>
                An estimate given over the phone is based on what you have described. If the fault on site
                turns out to be different, we tell you before we proceed rather than after.
              </p>
            </Block>

            <Block title="Access to the site and safety">
              <p>
                To carry out work we need safe access to the gate, its operator and its power supply. You
                confirm that you own the gate or are authorised to have work done on it.
              </p>
              <p>
                An automatic gate is a powered machine. Where we find a condition that makes a gate unsafe
                to operate, we will say so and we may decline to return it to automatic operation until it
                is corrected. That is a safety decision, not a commercial one.
              </p>
            </Block>

            <Block title="Scheduling, arrival and cancellation">
              <p>
                We operate {business.availability.toLowerCase()}. Arrival times are given in good faith as
                windows rather than appointments: emergency calls, traffic across the metroplex and the
                length of the job before yours all move them. We keep you informed when a window changes.
              </p>
              <p>
                If you need to cancel or move a visit, tell us as early as you can and there is no charge
                for doing so.
              </p>
            </Block>

            <Block title="Parts, workmanship and warranty">
              <p>
                We fit new parts unless you have agreed otherwise with us in writing. Where a part is
                obsolete and the only option is a used or refurbished unit, we tell you that before fitting
                it.
              </p>
              {warranty ? (
                <p>Our work is covered by {warranty}.</p>
              ) : (
                <p>
                  What our work covers, and for how long, is set out on our{' '}
                  <Link href="/warranty" className={linkClass}>
                    warranty page
                  </Link>
                  . Manufacturer warranties on parts are the manufacturer&rsquo;s own and we pass them
                  through to you unchanged.
                </p>
              )}
              <p>
                A warranty covers the part we supplied and the work we did. It does not cover a separate
                later fault, damage from an impact, a power surge, or work done on the gate by someone
                else after us.
              </p>
            </Block>

            <Block title="Payment">
              <p>
                Payment is due once the work we agreed has been completed, on the terms we confirm with you
                when we give you the price.
              </p>
            </Block>

            <Block title="This website&rsquo;s content">
              <p>
                The photographs, job write-ups, videos and written content on this site are our own work
                and record jobs we carried out. Please do not republish them without asking us first.
              </p>
              <p>
                We name manufacturers &mdash; LiftMaster, FAAC, All-O-Matic, Ramset, Elite, Viking,
                DoorKing, US Automatic and others &mdash; because we repair their equipment. We are an
                independent repair company and not an authorised dealer for, or endorsed by, any of them.
                Their names and trademarks remain theirs.
              </p>
              <p>
                We keep the site accurate and up to date, but a page describing a repair is a description
                of one job, not a promise about yours.
              </p>
            </Block>

            <Block title="Limits on what we are responsible for">
              <p>
                We are responsible for the work we do and for damage we cause. We are not responsible for
                a pre-existing fault we were not asked to repair, for the condition of the gate structure
                or its wiring before we arrived, or for losses that do not follow from our work &mdash; for
                example loss of business while a part is on order from a manufacturer.
              </p>
              <p>
                Nothing in these terms limits anything that cannot lawfully be limited.
              </p>
            </Block>

            <Block title="Complaints">
              <p>
                If something is not right, call us on{' '}
                <a href={business.phone.href} className={linkClass}>
                  {business.phone.display}
                </a>{' '}
                and tell us. We would rather come back out and put it right than have you live with it.
              </p>
            </Block>

            <Block title="Governing law">
              <p>
                These terms are governed by the laws of the State of Texas, and work is performed in
                Texas.
              </p>
            </Block>

            <Block title="Changes to these terms">
              <p>
                We may update this page. The version that applies to your job is the one published on the
                day you booked it. This page was last updated {updated}.
              </p>
            </Block>

            <Block title="Privacy">
              <p>
                How we handle the information you give us is set out separately in our{' '}
                <Link href="/privacy-policy" className={linkClass}>
                  privacy policy
                </Link>
                .
              </p>
            </Block>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Terms of Service', url: '/terms' },
            ]),
          ),
        }}
      />
    </>
  )
}

const linkClass = 'font-medium text-ink-950 underline decoration-gold-400 underline-offset-2'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl font-bold text-ink-950 sm:text-2xl">{title}</h2>
      {children}
    </div>
  )
}
