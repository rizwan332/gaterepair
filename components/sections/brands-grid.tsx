import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import { brands } from '@/content/brands'
import { media } from '@/content/media-manifest'
import { videosFor } from '@/content/video-manifest'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { Reveal } from '@/components/ui/reveal'

/**
 * Brands we service.
 *
 * Previously ten identical text tiles — a section called "brands" showing no
 * brand evidence at all. We cannot use manufacturer logos without a licence and
 * would not want to imply a dealer relationship the client does not hold, so
 * the tiles now carry a photograph of *that manufacturer's operator* from the
 * job library instead. That turns a generic grid into proof, which is the whole
 * competitive argument here.
 *
 * FAAC, All-O-Matic and Ramset lead deliberately: no DFW competitor has a page
 * for any of the three, and the client has both photography and video for all
 * of them. The three brands with no photography are grouped separately and
 * styled compactly, so their thinness reads as deliberate rather than broken.
 */
export function BrandsGrid() {
  const withMedia = brands.filter((b) => b.mediaCategory && media[b.mediaCategory]?.length)
  const withoutMedia = brands.filter((b) => !b.mediaCategory || !media[b.mediaCategory]?.length)

  return (
    <section className="section bg-white">
      <div className="container-page">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
              Operators we repair
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
              We Fix the Operators Nobody Else Wants to Touch
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Most gate companies replace the whole operator because diagnosing it is harder than selling
              you a new one. We repair control boards, limit switches, hydraulic pumps and gearboxes on all
              of these &mdash; and every tile below is a photograph of that manufacturer&rsquo;s equipment,
              not a logo.
            </p>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {withMedia.map((brand, i) => {
            const image = media[brand.mediaCategory!]?.[0]
            const hasVideo = videosFor(brand.mediaCategory!).length > 0
            return (
              <Reveal as="li" key={brand.slug} delay={Math.min(i, 4) * 0.05}>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-ink-950 p-5"
                >
                  {image && (
                    <div className="absolute inset-0">
                      <ResponsiveImage
                        image={image}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-85"
                      />
                      {/* Was 0.94 at the base, which buried the photograph under near-solid
                          black — in the one section whose whole argument is that these
                          are real photos of real equipment. Enough scrim to hold the
                          label legible, and no more. */}
                      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(8_9_11/0.82)_0%,rgb(8_9_11/0.34)_52%,rgb(8_9_11/0.04)_100%)]" />
                    </div>
                  )}
                  <div className="relative">
                    {!brand.contested && (
                      <span className="mb-2.5 inline-block rounded-full bg-gold-500 px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wide text-ink-950">
                        Nobody else covers this
                      </span>
                    )}
                    <p className="font-display text-xl font-bold text-white">{brand.name}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink-300">
                      {hasVideo && <Play className="size-3 fill-gold-400 text-gold-400" aria-hidden />}
                      {media[brand.mediaCategory!]!.length} photos
                      {hasVideo && ' + video'}
                      <ArrowUpRight
                        className="size-3.5 text-gold-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </p>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </ul>

        {withoutMedia.length > 0 && (
          <Reveal>
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-ink-600">We also service:</p>
              <ul className="flex flex-wrap gap-2.5">
                {withoutMedia.map((brand) => (
                  <li key={brand.slug}>
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
                    >
                      {brand.name}
                      <ArrowUpRight className="size-3.5 text-ink-400" aria-hidden />
                    </Link>
                  </li>
                ))}
                <li className="inline-flex items-center rounded-lg border border-dashed border-ink-200 px-4 py-2 text-sm text-ink-500">
                  Apollo · Chamberlain · and others
                </li>
              </ul>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  )
}
