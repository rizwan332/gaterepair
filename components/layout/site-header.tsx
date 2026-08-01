import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { brands } from '@/content/brands'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/layout/mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-md">
      {/* Availability strip. The single most reassuring thing we can say to
          someone whose gate failed at 11pm is that we are open. */}
      <div className="bg-ink-900 text-white">
        <div className="container-page flex h-9 items-center justify-between text-xs sm:text-[0.8125rem]">
          <p className="font-medium">{business.availability}</p>
          <p className="hidden sm:block text-ink-200">{business.serviceArea.primary}</p>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
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

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <NavDropdown
            label="Services"
            href="/services"
            items={services.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` }))}
          />
          <NavDropdown
            label="Brands"
            href="/brands"
            items={brands.map((b) => ({ label: b.name, href: `/brands/${b.slug}` }))}
          />
          <NavLink href="/projects">Case Studies</NavLink>
          <NavLink href="/service-areas">Service Areas</NavLink>
          <NavDropdown
            label="Company"
            href="/about"
            items={[
              { label: 'About us', href: '/about' },
              { label: 'Customer reviews', href: '/reviews' },
              { label: 'Our work', href: '/gallery' },
              { label: 'Our warranty', href: '/warranty' },
              { label: 'FAQs', href: '/faq' },
            ]}
          />
        </nav>

        <div className="flex items-center gap-2">
          {/* Full number on desktop. On phones the header collapsed to just a
              logo and a hamburger, which removed the call path from the exact
              moment intent is highest — so the icon button below is always
              present, at every breakpoint. */}
          <a
            href={business.phone.href}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-900 hover:text-ink-700 md:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {business.phone.display}
          </a>
          <a
            href={business.phone.href}
            className="inline-flex size-11 items-center justify-center rounded-xl bg-gold-500 text-ink-950 md:hidden"
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
      className="rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-ink-800 transition-colors hover:bg-ink-50 hover:text-ink-950"
    >
      {children}
    </Link>
  )
}

/** CSS-only dropdown — no client JS, and it stays keyboard operable. */
function NavDropdown({
  label,
  href,
  items,
}: {
  label: string
  href: string
  items: { label: string; href: string }[]
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-ink-800 transition-colors hover:bg-ink-50 hover:text-ink-950"
      >
        {label}
      </Link>
      <div className="invisible absolute left-0 top-full w-64 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="rounded-xl border border-ink-100 bg-white p-2 shadow-[var(--shadow-lift)]">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-ink-800 transition-colors hover:bg-ink-50 hover:text-ink-950"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
