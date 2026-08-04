import Image from 'next/image'
import Link from 'next/link'
import { navBrands } from '@/content/brands'
import { logoFor } from '@/lib/brand-logos'

/**
 * Animated brand row.
 *
 * Logos are the client's own, taken from Shield Gate Repair's existing
 * California site and normalised by scripts/process-logos.ts. Any brand
 * without a file falls back to a typographic wordmark rather than a gap or a
 * placeholder box — US Automatic is currently the only one, since the CA site
 * does not carry it.
 *
 * Shown in full colour. An earlier pass desaturated them at rest, which is a
 * common treatment and was wrong here: these are the proof that we service
 * equipment other companies decline, and a washed-out row undersells exactly
 * the thing the section exists to say.
 *
 * Sizing is by height with a width cap, because the source logos range from
 * wide wordmarks to near-square marks. The text fallback is deliberately
 * smaller than a heading — at 2xl it dwarfed the real logos beside it.
 */


export function BrandMarquee() {
  const items = navBrands.map((b) => ({ ...b, logo: logoFor(b.slug) }))
  // Duplicated once so the track can translate a full 50% and loop seamlessly.
  const track = [...items, ...items]

  return (
    <section className="border-y border-ink-100 bg-white py-12 md:py-14">
      <div className="container-page">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-400">
          Operators we repair every day
        </p>
      </div>

      {/* Edges fade so logos enter and leave rather than being cut off. */}
      <div
        className="marquee-mask relative mt-8 flex overflow-hidden"
        role="list"
        aria-label="Gate operator brands we repair"
      >
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16">
          {track.map((brand, i) => (
            <Link
              key={`${brand.slug}-${i}`}
              href={`/brands/${brand.slug}`}
              role="listitem"
              // The duplicate half is decorative — hide it from assistive tech
              // so brand names are not announced twice.
              aria-hidden={i >= items.length}
              tabIndex={i >= items.length ? -1 : undefined}
              className="group flex h-12 shrink-0 items-center opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100 focus-visible:opacity-100"
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={420}
                  height={120}
                  // Height-normalised source, so a common CSS height gives a
                  // consistent optical size. max-w caps the widest wordmarks.
                  className="h-9 w-auto max-w-[125px] object-contain md:h-11 md:max-w-[150px]"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink-600 transition-colors group-hover:text-ink-900 md:text-xl">
                  {brand.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="container-page">
        <p className="mt-8 text-center text-sm text-ink-500">
          <Link
            href="/brands"
            className="font-medium text-ink-900 underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600"
          >
            See every operator brand we service &rarr;
          </Link>
        </p>
      </div>
    </section>
  )
}
