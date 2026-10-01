'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Wrench,
  Settings2,
  MapPin,
  Stethoscope,
} from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { navBrands } from '@/content/brands'
import { symptomPath } from '@/content/symptoms'
import type { SymptomPage } from '@/content/symptoms/types'

/**
 * Mobile navigation.
 *
 * ── WHAT WAS WRONG WITH THE PREVIOUS VERSION ────────────────────────────────
 * It rendered 32 links in one flat, fully-expanded scroll — 8 services, 17
 * brands and 7 company pages, every row looking identical. On a phone that is
 * four or five screens of undifferentiated list, and the 17 brands dominated
 * it despite being the least urgent thing for someone whose gate has just
 * failed. The call button sat at the very bottom, beneath all 32.
 *
 * Two things were also simply missing: /emergency, which is in the desktop
 * header but was absent here — on a site whose emergency traffic is
 * overwhelmingly mobile — and /gate-problems, the twenty symptom pages, which
 * appeared in no navigation at all.
 *
 * ── WHAT THIS DOES INSTEAD ──────────────────────────────────────────────────
 * Opens at about eleven rows rather than thirty-two. The long lists are
 * accordions, closed by default and opened one at a time, so the menu is
 * scannable in a single glance. Above them sits the emergency path, because the
 * person most likely to be opening a menu one-handed at 11pm is the one whose
 * gate is stuck open.
 *
 * The section matching the current page opens automatically, which is also the
 * only way someone deep in the brand pages can see where they are.
 *
 * ── WHY THE CALL BUTTON IS SMALLER THAN IT WAS ──────────────────────────────
 * StickyCallBar already puts Call / Text / Estimate in the thumb zone on every
 * page, and it is still there behind this drawer. Repeating a full-width gold
 * call button here was duplicating the site's primary action in the least
 * reachable part of the screen. It stays, because a menu should not be a dead
 * end, but it no longer pretends to be the main event.
 */

/** The faults worth surfacing in a menu. Ordered by how urgent they are. */
const MENU_SYMPTOMS: { slug: string; label: string }[] = [
  { slug: 'gate-wont-close', label: 'Gate won’t close' },
  { slug: 'gate-wont-open', label: 'Gate won’t open' },
  { slug: 'gate-stops-halfway', label: 'Gate stops halfway' },
  { slug: 'automatic-gate-not-working', label: 'Gate not working at all' },
  { slug: 'gate-opener-has-no-power', label: 'No power to the opener' },
  { slug: 'gate-remote-not-working', label: 'Remote not working' },
]

const COMPANY_LINKS = [
  { href: '/projects', label: 'Case Studies' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About us' },
  { href: '/warranty', label: 'Our warranty' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact us' },
]

type SectionId = 'problems' | 'services' | 'brands' | null

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [section, setSection] = useState<SectionId>(null)
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  /** Close on navigation, so tapping a link does not leave the drawer open. */
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  /**
   * Open the section the current page belongs to.
   *
   * Without this, someone browsing brand pages opens the menu to three closed
   * accordions and no indication of where they are.
   */
  useEffect(() => {
    if (!open) return
    if (pathname.startsWith('/gate-problems')) setSection('problems')
    else if (pathname.startsWith('/services')) setSection('services')
    else if (pathname.startsWith('/brands')) setSection('brands')
    else setSection(null)
  }, [open, pathname])

  /**
   * Scroll lock that works on iOS.
   *
   * `overflow: hidden` on body alone does not stop Safari rubber-banding the
   * page behind a fixed overlay — the drawer scrolls and the page scrolls with
   * it. Pinning the body and restoring the offset afterwards is the approach
   * that actually holds, at the cost of having to remember where we were.
   */
  useEffect(() => {
    if (!open) return
    const y = window.scrollY
    const { body } = document
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = 'fixed'
    body.style.top = `-${y}px`
    body.style.width = '100%'
    body.style.overflow = 'hidden'

    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      window.scrollTo(0, y)
    }
  }, [open])

  /**
   * Escape to close, and keep Tab inside the drawer.
   *
   * The previous version handled Escape but not Tab, so a keyboard or
   * screen-reader user could tab straight out of an open modal into the page
   * behind it — the dialog said aria-modal="true" while not behaving like one.
   */
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
      return
    }
    if (e.key !== 'Tab' || !panelRef.current) return

    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    window.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onKeyDown])

  const close = () => setOpen(false)
  const toggle = (id: Exclude<SectionId, null>) => setSection((s) => (s === id ? null : id))

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-xl text-ink-900 transition-colors hover:bg-ink-50 xl:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="size-6" aria-hidden />
      </button>

      {/* Portalled to <body> on purpose. The header this lives in sets
          `backdrop-blur`, and a backdrop-filter ancestor becomes the containing
          block for position:fixed descendants — so rendering the drawer in
          place clipped it to the header's ~100px box. On a phone that reads as
          "the menu does not open", which is exactly what the client reported. */}
      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[100] xl:hidden">
            <div
              className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />
            <div
              ref={panelRef}
              className="absolute inset-y-0 right-0 flex w-[min(23rem,90vw)] flex-col bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              {/* ── Header ───────────────────────────────────────────────── */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-ink-100 px-4">
                <span className="font-display text-base font-semibold text-ink-900">Menu</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="inline-flex size-11 items-center justify-center rounded-xl text-ink-700 transition-colors hover:bg-ink-50"
                  aria-label="Close menu"
                >
                  <X className="size-6" aria-hidden />
                </button>
              </div>

              <nav
                className="flex-1 overflow-y-auto overscroll-contain px-3 py-3"
                aria-label="Mobile navigation"
              >
                {/* ── Emergency, first, because of who opens this menu ──── */}
                <Link
                  href="/emergency"
                  onClick={close}
                  className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5 transition-colors hover:border-red-300"
                >
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-red-600" aria-hidden />
                  <span className="min-w-0">
                    <span className="block font-semibold text-red-900">Gate stuck open?</span>
                    <span className="mt-0.5 block text-sm leading-snug text-red-800">
                      24/7 emergency repair &mdash; someone always answers
                    </span>
                  </span>
                </Link>

                {/* ── The three long lists, as accordions ────────────────── */}
                <div className="mt-3 space-y-1">
                  <Accordion
                    id="problems"
                    icon={Stethoscope}
                    label="What's your gate doing?"
                    openId={section}
                    onToggle={toggle}
                  >
                    {MENU_SYMPTOMS.map((s) => (
                      <Item
                        key={s.slug}
                        href={`/gate-problems/${s.slug}`}
                        current={pathname}
                        onClick={close}
                      >
                        {s.label}
                      </Item>
                    ))}
                    <Item href="/gate-problems" current={pathname} onClick={close} muted>
                      All gate problems
                    </Item>
                  </Accordion>

                  <Accordion
                    id="services"
                    icon={Wrench}
                    label="Services"
                    openId={section}
                    onToggle={toggle}
                  >
                    {services.map((s) => (
                      <Item
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        current={pathname}
                        onClick={close}
                      >
                        {s.navLabel}
                      </Item>
                    ))}
                  </Accordion>

                  {/* navBrands, not brands — LiftMaster then US Automatic then
                      the rest, matching the desktop menu and the client's order. */}
                  <Accordion
                    id="brands"
                    icon={Settings2}
                    label="Brands we service"
                    openId={section}
                    onToggle={toggle}
                  >
                    {navBrands.map((b) => (
                      <Item key={b.slug} href={`/brands/${b.slug}`} current={pathname} onClick={close}>
                        {b.name}
                      </Item>
                    ))}
                  </Accordion>

                  {/* A direct link rather than an accordion: there are 96 city
                      pages and a menu is not the place to list them. */}
                  <TopLink href="/service-areas" icon={MapPin} current={pathname} onClick={close}>
                    Service areas
                  </TopLink>
                </div>

                {/* ── Everything else, plainly, without competing ────────── */}
                <ul className="mt-4 border-t border-ink-100 pt-3">
                  {COMPANY_LINKS.map((l) => (
                    <Item key={l.href} href={l.href} current={pathname} onClick={close}>
                      {l.label}
                    </Item>
                  ))}
                </ul>
              </nav>

              {/* ── Footer. Deliberately restrained: StickyCallBar is still
                     behind this drawer on every page. ───────────────────── */}
              <div className="shrink-0 border-t border-ink-100 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <div className="flex gap-2">
                  <a
                    href={business.phone.href}
                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gold-500 text-sm font-semibold text-ink-950 transition-colors hover:bg-gold-400"
                  >
                    <Phone className="size-4" aria-hidden />
                    <span className="tabular">{business.phone.display}</span>
                  </a>
                  <a
                    href={`sms:${business.phone.href.replace('tel:', '')}`}
                    className="flex size-12 items-center justify-center rounded-xl border border-ink-200 text-ink-700 transition-colors hover:border-ink-300"
                    aria-label="Text us"
                  >
                    <MessageSquare className="size-5" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

function Accordion({
  id,
  icon: Icon,
  label,
  openId,
  onToggle,
  children,
}: {
  id: Exclude<SectionId, null>
  icon: React.ComponentType<{ className?: string }>
  label: string
  openId: SectionId
  onToggle: (id: Exclude<SectionId, null>) => void
  children: React.ReactNode
}) {
  const isOpen = openId === id
  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
        className={`flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left transition-colors ${
          isOpen ? 'bg-ink-50 text-ink-950' : 'text-ink-900 hover:bg-ink-50'
        }`}
      >
        <Icon className="size-[1.125rem] shrink-0 text-ink-400" aria-hidden />
        <span className="flex-1 font-medium">{label}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-ink-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {isOpen && <ul className="mb-1 ml-[1.75rem] mt-0.5 border-l border-ink-100 pl-2">{children}</ul>}
    </div>
  )
}

function TopLink({
  href,
  icon: Icon,
  current,
  onClick,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  current: string
  onClick: () => void
  children: React.ReactNode
}) {
  const active = current === href
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`flex min-h-12 items-center gap-3 rounded-xl px-3 transition-colors ${
        active ? 'bg-gold-500/10 font-semibold text-ink-950' : 'text-ink-900 hover:bg-ink-50'
      }`}
    >
      <Icon className="size-[1.125rem] shrink-0 text-ink-400" aria-hidden />
      <span className="flex-1 font-medium">{children}</span>
      <ChevronRight className="size-4 shrink-0 text-ink-300" aria-hidden />
    </Link>
  )
}

function Item({
  href,
  current,
  onClick,
  muted,
  children,
}: {
  href: string
  current: string
  onClick: () => void
  muted?: boolean
  children: React.ReactNode
}) {
  const active = current === href
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
        className={`flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] transition-colors ${
          active
            ? 'bg-gold-500/10 font-semibold text-ink-950'
            : muted
              ? 'text-ink-500 hover:bg-ink-50 hover:text-ink-800'
              : 'text-ink-700 hover:bg-ink-50 hover:text-ink-950'
        }`}
      >
        {children}
      </Link>
    </li>
  )
}
