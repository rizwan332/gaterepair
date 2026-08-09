import type { MediaImage } from '@/content/media-manifest'
import { ResponsiveImage } from '@/components/ui/responsive-image'

/**
 * Real job photography.
 *
 * Metro Gate Repair and J&J both run entirely on stock imagery, and it is the
 * clearest quality gap in the market. Nothing here is stock, and nothing here
 * is AI-generated.
 */
export function PhotoGallery({
  images,
  title,
  intro,
  tone = 'light',
}: {
  images: MediaImage[]
  title: string
  intro?: string
  tone?: 'light' | 'muted'
}) {
  if (images.length === 0) return null

  return (
    <section className={`section ${tone === 'muted' ? 'bg-ink-50' : 'bg-white'}`}>
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-ink-700">{intro}</p>}
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, i) => (
            <li
              key={image.slug}
              className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-ink-100"
            >
              <ResponsiveImage
                image={image}
                fill
                priority={i < 4}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
