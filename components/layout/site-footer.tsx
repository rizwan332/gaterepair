import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { services } from '@/content/services'
import { brands } from '@/content/brands'
import { tier1Cities } from '@/content/cities'

/** Keeps every link column roughly the same height. */
const PER_COLUMN = 8

export function SiteFooter() {
  const license = fact(business.license)
  const address = fact(business.address)
  /**
   * The footer used to list every brand. That was fine at eleven and became a
   * seventeen-item run when the client's full roster went in — the column ran
   * far past the other three and roughly doubled the height of the footer.
   *
   * Capped by `priority`, so the brands we actually compete on are the ones
   * shown, with a link to the rest. Nothing is lost: every brand page is
   * reachable from /brands, the header dropdown and the sitemap.
   */
  const footerBrands = [...brands].sort((a, b) => a.priority - b.priority).slice(0, PER_COLUMN)

  return (
    <footer className="mt-auto bg-ink-950 text-ink-200">
      <div className="container-page py-12 md:py-14">
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/brand/logo-light.webp"
              alt={business.name}
              width={468}
              height={158}
              className="h-12 w-auto"
            />
            <p className="prose-measure mt-4 text-sm leading-relaxed text-ink-300">
              Automatic gate repair, installation and service across {business.serviceArea.display}.
              Residential, commercial, HOA and industrial.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a href={business.phone.href} className="inline-flex items-center gap-2.5 font-semibold text-white hover:text-gold-400">
                  <Phone className="size-4 shrink-0" aria-hidden />
                  {business.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2.5 hover:text-white">
                  <Mail className="size-4 shrink-0" aria-hidden />
                  {business.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Clock className="size-4 shrink-0" aria-hidden />
                {business.availability}
              </li>
              {address && address.street && (
                <li className="inline-flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>
                    {address.street}, {address.city}, {address.region} {address.postalCode}
                  </span>
                </li>
              )}
            </ul>
          </div>

          <FooterCol title="Services">
            {services.slice(0, PER_COLUMN).map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.navLabel}
              </FooterLink>
            ))}
            <FooterMore href="/services">All services</FooterMore>
          </FooterCol>

          <FooterCol title="Brands We Service">
            {footerBrands.map((b) => (
              <FooterLink key={b.slug} href={`/brands/${b.slug}`}>
                {b.name}
              </FooterLink>
            ))}
            <FooterMore href="/brands">All brands</FooterMore>
          </FooterCol>

          <FooterCol title="Service Areas">
            {tier1Cities.slice(0, PER_COLUMN).map((c) => (
              <FooterLink key={c.slug} href={`/gate-repair-${c.slug}-tx`}>
                {c.name}
              </FooterLink>
            ))}
            <FooterMore href="/service-areas">All service areas</FooterMore>
          </FooterCol>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
            {license && <> · Texas License {license}</>}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/about" className="hover:text-ink-200">
              About
            </Link>
            <Link href="/testimonials" className="hover:text-ink-200">
              Testimonials
            </Link>
            <Link href="/warranty" className="hover:text-ink-200">
              Warranty
            </Link>
            <Link href="/faq" className="hover:text-ink-200">
              FAQs
            </Link>
            <Link href="/privacy-policy" className="hover:text-ink-200">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-ink-200">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3.5 text-sm font-semibold text-white">{title}</h2>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-ink-300 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}

function FooterMore({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="pt-1">
      <Link
        href={href}
        className="inline-flex items-center gap-1 font-medium text-gold-400 transition-colors hover:text-gold-300"
      >
        {children} <span aria-hidden>&rarr;</span>
      </Link>
    </li>
  )
}
