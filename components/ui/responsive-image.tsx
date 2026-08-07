import type { MediaImage } from '@/content/media-manifest'
import { cdn } from '@/lib/cdn'

/**
 * Serves the pre-generated AVIF/WebP derivatives directly.
 *
 * The asset pipeline already emits 400/800/1200/1600/2000 in both formats, so
 * running Next's runtime optimizer over them again would re-encode work that is
 * already done and add per-request cost for no gain. This emits a plain
 * <picture> with the widths that actually exist for each image — which also
 * fixes the class of bug where a hardcoded `-1600.avif` 404s on a source that
 * was never that wide.
 *
 * `width`/`height` are always set so the browser reserves the right box and CLS
 * stays at zero.
 */
export function ResponsiveImage({
  image,
  sizes,
  priority = false,
  className,
  fill = false,
  alt,
}: {
  image: MediaImage
  sizes: string
  priority?: boolean
  className?: string
  /** Absolutely position and cover the nearest positioned ancestor. */
  fill?: boolean
  /** Overrides the manifest alt text. Pass "" for decorative images. */
  alt?: string
}) {
  const srcSet = (ext: 'avif' | 'webp') =>
    image.widths.map((w) => `${cdn(`${image.src}-${w}.${ext}`)} ${w}w`).join(', ')

  // Largest generated width is the most compatible fallback for <img src>.
  const fallbackWidth = image.widths[image.widths.length - 1]

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        src={cdn(`${image.src}-${fallbackWidth}.webp`)}
        alt={alt ?? image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        style={
          fill
            ? { position: 'absolute', inset: 0, width: '100%', height: '100%' }
            : undefined
        }
        className={className}
      />
    </picture>
  )
}
