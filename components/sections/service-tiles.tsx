import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { services } from '@/content/services'
import { media } from '@/content/media-manifest'
import { ResponsiveImage } from '@/components/ui/responsive-image'

/**
 * Two-column photo tiles for every service, phones only.
 *
 * From the client's 20 Oct 2026 mobile mockup: on a phone the full services
 * section sits far down the page, so this puts a one-tap route to each service
 * straight under the brand row. Hidden from `md` up, where the hero and the
 * full ServicesGrid already sit close together. ServicesGrid stays where it is
 * on every screen size, so no heading or copy is removed from the page.
 */
export function ServiceTiles() {
  return (
    <section className="bg-white py-10 md:hidden">
      <div className="container-page">
        <h2 className="mb-5 font-display text-2xl font-bold text-ink-950">Our Gate Repair Services</h2>
        <ul className="grid grid-cols-2 gap-3">
          {services.map((s) => {
            const image = media[s.mediaCategory]?.[0]
            return (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white shadow-[var(--shadow-card)]"
                >
                  <span className="relative block aspect-[4/3] bg-ink-100">
                    {image && <ResponsiveImage image={image} fill sizes="50vw" className="object-cover" />}
                  </span>
                  <span className="flex flex-1 items-center justify-between gap-1.5 px-3 py-2.5">
                    <span className="text-[0.8125rem] font-semibold leading-snug text-ink-950">{s.name}</span>
                    <ChevronRight className="size-4 shrink-0 text-ink-400" aria-hidden />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
