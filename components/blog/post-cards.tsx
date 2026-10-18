import Link from 'next/link'
import { CATEGORY_LABEL, isPublished, postPath, readingMinutes, type BlogPost } from '@/content/blog'
import { media } from '@/content/media-manifest'
import { ResponsiveImage } from '@/components/ui/responsive-image'

/** Post cards, shared by the blog index and the "more guides" row on each post. */
export function PostCards({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => {
        const img = p.image ? media[p.image.category]?.[p.image.index ?? 0] : undefined
        return (
          <li key={p.slug}>
            <Link
              href={postPath(p)}
              className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-ink-100 bg-white transition-all hover:border-ink-200 hover:shadow-[var(--shadow-card)]"
            >
              {img && (
                <div className="relative aspect-[16/9] bg-ink-100">
                  <ResponsiveImage image={img} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">{CATEGORY_LABEL[p.category]}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink-950 group-hover:text-gold-700">{p.h1}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-600">{p.intro}</p>
                <p className="mt-auto pt-4 text-xs text-ink-500">
                  {readingMinutes(p)} min read{!isPublished(p) && ` · ${p.status}`}
                </p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
