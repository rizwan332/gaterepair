import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronDown } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { navBrands } from '@/content/brands'
import { tier1Cities } from '@/content/cities'
import { logoFor } from '@/lib/brand-logos'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/layout/mobile-nav'

/**
 * Site header.
 *
 * Structure set with the client on 4 Aug 2026:
 *  · Testimonials and Contact are top-level — both are conversion surfaces and
 *    were previously buried or absent.
 *  · Case Studies moved into Company. It is credibility material people read
 *    once, not a destination they navigate to repeatedly, and it was crowding
 *    out the two items above.
 *  · Services, Brands and Service Areas carry a caret so it is visible they
 *    open rather than navigate.
 *  · Brands follow `navBrands` — LiftMaster, then US Automatic, then the rest.
 */
export function SiteHeader() {
  const brandItems = navBrands.map((b) => ({
    label: b.name,
    href: `/brands/${b.slug}`,
    logo: logoFor(b.slug),
  }))

  const cityItems = tier1Cities.slice(0, 8).map((c) => ({
    label: c.name,
    href: `/gate-repair-${c.slug}-tx`,
  }))

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-md">
      {/* Availability strip. The single most reassuring thing we can say to
          someone whose gate failed at 11pm is that we are open. */}
      <div className="bg-ink-900 text-white">
        <div className="container-page flex h-9 items-center justify-between text-xs sm:text-[0.8125rem]">
          <p className="font-medium">{business.availability}</p>
          <p className="hidden text-ink-200 sm:block">{business.serviceArea.primary}</p>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-3 md:h-20">
        <Link href="/" className="shrink-0" aria-label={`${business.name} — home`}>
          <Image
            src="/brand/logo-dark.webp"
            alt={business.name}
            width={468}
            height={158}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        {/* xl, not lg. Six top-level items plus the phone number and CTA do not
            fit at 1024px — "Service Areas" and "Contact Us" wrapped to two lines
            with the caret orphaned. Below xl the mobile drawer takes over. */}
        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          <NavDropdown
            label="Services"
            href="/services"
            items={services.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` }))}
          />
          <NavDropdown label="Brands" href="/brands" items={brandItems} wide />
          <NavDropdown
            label="Service Areas"
            href="/service-areas"
            items={[...cityItems, { label: 'All 190 cities →', href: '/service-areas' }]}
          />
          <NavLink href="/testimonials">Testimonials</NavLink>
          <NavDropdown
            label="Company"
            href="/about"
            items={[
              { label: 'About us', href: '/about' },
              { label: 'Case studies', href: '/projects' },
              { label: 'Our warranty', href: '/warranty' },
              { label: 'FAQs', href: '/faq' },
            ]}
          />
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          {/* Full number on desktop. On phones the header collapsed to just a
              logo and a hamburger, which removed the call path from the exact
              moment intent is highest — so the icon button below is always
              present, at every breakpoint. */}
          <a
            href={business.phone.href}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-900 hover:text-ink-700 xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {business.phone.display}
          </a>
          <a
            href={business.phone.href}
            className="inline-flex size-11 items-center justify-center rounded-xl bg-gold-500 text-ink-950 xl:hidden"
            aria-label={`Call ${business.phone.display}`}
          >
            <Phone className="size-5" aria-hidden />
          </a>
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Free Estimate
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.9375rem] font-medium text-ink-800 transition-colors hover:bg-ink-50 hover:text-ink-950"
    >
      {children}
    </Link>
  )
}

/**
 * CSS-only dropdown — no client JS, and it stays keyboard operable.
 *
 * The caret is `aria-hidden` and the trigger is a real link: the menu is a
 * convenience, and the label always navigates somewhere useful on its own. That
 * matters on touch, where hover does not exist and the first tap follows the
 * link rather than opening anything.
 */
function NavDropdown({
  label,
  href,
  items,
  wide = false,
}: {
  label: string
  href: string
  items: { label: string; href: string; logo?: string | null }[]
  wide?: boolean
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.9375rem] font-medium text-ink-800 transition-colors hover:bg-ink-50 hover:text-ink-950"
      >
        {label}
        <ChevronDown
          className="size-3.5 text-ink-400 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden
        />
      </Link>
      <div
        className={`invisible absolute left-0 top-full pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
          wide ? 'w-[22rem]' : 'w-64'
        }`}
      >
        <ul
          className={`rounded-xl border border-ink-100 bg-white p-2 shadow-[var(--shadow-lift)] ${
            wide ? 'grid grid-cols-2 gap-0.5' : ''
          }`}
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink-800 transition-colors hover:bg-ink-50 hover:text-ink-950"
              >
                {item.logo ? (
                  // Official artwork when the client supplies it; the wordmark
                  // below until then. Never a placeholder box.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt=""
                    width={24}
                    height={24}
                    loading="lazy"
                    className="size-6 shrink-0 object-contain"
                  />
                ) : null}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
