import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import { brands } from '@/content/brands'

/**
 * Animated brand row.
 *
 * The client pointed at a competitor's scrolling logo strip and asked for the
 * same thing with real manufacturer logos. Two constraints shape this:
 *
 *  1. We do not have licensed logo files. Naming a manufacturer you genuinely
 *     repair is nominative fair use; shipping their artwork is a different
 *     question, and the answer has to come from the client, not from us
 *     grabbing files off a manufacturer site.
 *  2. A row of mismatched logos scraped at different resolutions looks worse
 *     than clean typography, and this section exists to build credibility.
 *
 * So the row renders a typographic wordmark per brand and automatically
 * upgrades to the real thing: drop `public/logos/<slug>.svg` (or .png/.webp)
 * in place and that brand switches to the image on the next build. No code
 * change, no manifest to update — the directory IS the manifest.
 */

const LOGO_DIR = path.join(process.cwd(), 'public', 'logos')
const EXTENSIONS = ['svg', 'webp', 'png']

/** Resolved at build time. Returns the public path, or null to use a wordmark. */
function logoFor(slug: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(LOGO_DIR, `${slug}.${ext}`))) return `/logos/${slug}.${ext}`
  }
  return null
}

export function BrandMarquee() {
  const items = brands.map((b) => ({ ...b, logo: logoFor(b.slug) }))
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
              className="group flex h-12 shrink-0 items-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0"
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="h-9 w-auto object-contain md:h-11"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-ink-700 transition-colors group-hover:text-ink-950 md:text-3xl">
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
