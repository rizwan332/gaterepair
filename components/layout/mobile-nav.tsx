'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { brands } from '@/content/brands'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  // A drawer that leaves the page scrollable behind it feels broken on iOS.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-xl text-ink-900 hover:bg-ink-50 lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="size-6" aria-hidden />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            className="absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-16 items-center justify-between border-b border-ink-100 px-5">
              <span className="font-display text-lg font-semibold text-ink-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-xl text-ink-900 hover:bg-ink-50"
                aria-label="Close menu"
              >
                <X className="size-6" aria-hidden />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-4" aria-label="Mobile">
              <Section title="Services">
                {services.map((s) => (
                  <Item key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                    {s.navLabel}
                  </Item>
                ))}
              </Section>
              <Section title="Brands We Service">
                {brands.map((b) => (
                  <Item key={b.slug} href={`/brands/${b.slug}`} onClick={() => setOpen(false)}>
                    {b.name}
                  </Item>
                ))}
              </Section>
              <Section title="More">
                <Item href="/pricing" onClick={() => setOpen(false)}>Pricing</Item>
                <Item href="/reviews" onClick={() => setOpen(false)}>Reviews</Item>
                <Item href="/gallery" onClick={() => setOpen(false)}>Our Work</Item>
                <Item href="/service-areas" onClick={() => setOpen(false)}>Service Areas</Item>
                <Item href="/contact" onClick={() => setOpen(false)}>Contact</Item>
              </Section>
            </nav>

            <div className="border-t border-ink-100 p-5">
              <a
                href={business.phone.href}
                className="flex h-14 items-center justify-center gap-2 rounded-xl bg-gold-500 font-semibold text-ink-950"
              >
                <Phone className="size-5" aria-hidden />
                {business.phone.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-ink-400">{title}</p>
      <ul>{children}</ul>
    </div>
  )
}

function Item({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] text-ink-800 hover:bg-ink-50"
      >
        {children}
      </Link>
    </li>
  )
}
