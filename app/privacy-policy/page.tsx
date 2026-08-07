import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/content/business'
import { PageHero } from '@/components/sections/page-hero'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shield Gate Repair',
  description:
    'How Shield Gate Repair collects, uses and stores the information you submit through this website.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

/**
 * Privacy policy.
 *
 * The footer has linked here since launch and the page did not exist — a 404
 * showing up in the browser console on every page load. It also cannot stay
 * missing: the contact form collects a name, phone number and email, and the
 * site runs Google Analytics and Google Ads conversion tracking. Google Ads
 * policy requires a privacy policy disclosing that, and a broken link to one
 * is a plausible cause of a disapproved ad account.
 *
 * ⚠️ This is a factual description of what the site actually does, written from
 * the code — not legal advice, and not a substitute for a lawyer reviewing it.
 * Two things must be confirmed before launch: the business's registered address
 * (content/business.ts -> address is still unconfirmed) and whether the client
 * uses any call-tracking or recording service, which would need disclosing here
 * and, in Texas, is one-party consent but still worth stating.
 */
export default function PrivacyPolicyPage() {
  const updated = 'August 2026'

  return (
    <>
      <PageHero
        showBadges={false}
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`How we handle the information you give us through this website. Last updated ${updated}.`}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div className="prose-measure space-y-8 text-ink-800">
            <Block title="Who we are">
              <p>
                This website is operated by {business.name}, an automatic gate repair company serving
                the Dallas&ndash;Fort Worth metroplex. You can reach us on{' '}
                <a href={business.phone.href} className="font-medium text-ink-950 underline decoration-gold-400 underline-offset-2">
                  {business.phone.display}
                </a>{' '}
                or at{' '}
                <a href={`mailto:${business.email}`} className="font-medium text-ink-950 underline decoration-gold-400 underline-offset-2">
                  {business.email}
                </a>
                .
              </p>
            </Block>

            <Block title="What we collect">
              <p>When you submit a form on this site, we receive what you type into it:</p>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>Your name and phone number, which are required so we can call you back.</li>
                <li>Your email address, city, gate type, and description of the problem, if you provide them.</li>
                <li>
                  Which page you submitted from, and any advertising click identifier or campaign
                  parameters in the web address &mdash; so we know which advert or search brought you
                  here.
                </li>
              </ul>
              <p>
                We also receive standard technical information any web server receives, such as your IP
                address and browser type. We use your IP address only to rate-limit the contact form
                against automated abuse.
              </p>
            </Block>

            <Block title="What we do with it">
              <p>
                We use it to respond to your enquiry, quote the work, and carry out the repair. Your
                enquiry is emailed to our office and stored in our customer database.
              </p>
              <p className="font-medium text-ink-950">
                We do not sell your information, and we do not share it with third parties for their
                own marketing.
              </p>
            </Block>

            <Block title="Analytics and advertising">
              <p>
                We use Google Analytics to understand how the site is used, and Google Ads conversion
                tracking to measure which adverts lead to enquiries. These set cookies in your browser
                and share usage data with Google. You can opt out of Google Analytics using{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink-950 underline decoration-gold-400 underline-offset-2"
                >
                  Google&rsquo;s browser add-on
                </a>
                , and control ad personalisation in your{' '}
                <a
                  href="https://myadcenter.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink-950 underline decoration-gold-400 underline-offset-2"
                >
                  Google account settings
                </a>
                .
              </p>
              <p>
                Pages on this site embed videos from YouTube. We load these only after you click play,
                and we use YouTube&rsquo;s no-cookie domain, so YouTube does not set cookies on your
                browser unless you choose to watch a video.
              </p>
              <p>
                Our coverage map loads map tiles from OpenStreetMap and CARTO, which receive your IP
                address in order to serve those images.
              </p>
            </Block>

            <Block title="How long we keep it">
              <p>
                We keep enquiry and job records for as long as we need them to service the work,
                honour any warranty on it, and meet our tax and accounting obligations. If you would
                like your details removed sooner, ask us and we will do it.
              </p>
            </Block>

            <Block title="Your choices">
              <p>
                You can ask us what information we hold about you, ask us to correct it, or ask us to
                delete it. Email{' '}
                <a href={`mailto:${business.email}`} className="font-medium text-ink-950 underline decoration-gold-400 underline-offset-2">
                  {business.email}
                </a>{' '}
                and we will respond.
              </p>
              <p>
                Texas residents have specific rights under the Texas Data Privacy and Security Act,
                including the right to confirm whether we process your personal data, to obtain a copy
                of it, to correct it, to delete it, and to opt out of its sale &mdash; though as above,
                we do not sell it. Use the same email address to exercise any of these.
              </p>
            </Block>

            <Block title="Security">
              <p>
                This site is served over an encrypted connection, and enquiries are transmitted to our
                office over encrypted channels. No system is perfectly secure, so please do not send
                payment card details or other sensitive information through the contact form.
              </p>
            </Block>

            <Block title="Changes">
              <p>
                If we change this policy we will update the date at the top of this page. Material
                changes will be described here rather than made quietly.
              </p>
            </Block>

            <p className="border-t border-ink-100 pt-6 text-sm text-ink-500">
              Questions about this policy? Email{' '}
              <a href={`mailto:${business.email}`} className="font-medium text-ink-700 underline decoration-gold-400 underline-offset-2">
                {business.email}
              </a>{' '}
              or call{' '}
              <a href={business.phone.href} className="font-medium text-ink-700 underline decoration-gold-400 underline-offset-2">
                {business.phone.display}
              </a>
              . You can also read our{' '}
              <Link href="/warranty" className="font-medium text-ink-700 underline decoration-gold-400 underline-offset-2">
                warranty terms
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Privacy Policy', url: '/privacy-policy' },
            ]),
          ),
        }}
      />
    </>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl font-bold text-ink-950 sm:text-2xl">{title}</h2>
      {children}
    </div>
  )
}
