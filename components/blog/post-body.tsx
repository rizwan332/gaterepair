import { AlertTriangle, Lightbulb, MessageSquareText, Phone, ShieldAlert } from 'lucide-react'
import { business } from '@/content/business'
import { Button } from '@/components/ui/button'
import type { BlogBlock } from '@/content/blog'
import { RichText } from './rich-text'

/** A heading's anchor id, so the table of contents can link to it. */
export const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const CALLOUT = {
  tip: { icon: Lightbulb, className: 'bg-gold-500/[0.08] ring-gold-500/30', iconClass: 'text-gold-600' },
  warning: { icon: AlertTriangle, className: 'bg-amber-50 ring-amber-200', iconClass: 'text-amber-600' },
  safety: { icon: ShieldAlert, className: 'bg-red-50 ring-red-200', iconClass: 'text-red-600' },
} as const

/**
 * The body of a post. Typography is set here, once, so every post reads the
 * same and no post can carry its own styling.
 */
export function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-measure space-y-5 text-[1.0625rem] leading-[1.75] text-ink-800">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p key={i}>
                <RichText text={b.text} />
              </p>
            )
          case 'h2':
            return (
              <h2
                key={i}
                id={headingId(b.text)}
                className="scroll-mt-28 pt-6 font-display text-2xl font-bold leading-tight text-ink-950 sm:text-[1.75rem]"
              >
                {b.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="pt-2 font-display text-xl font-semibold text-ink-950">
                {b.text}
              </h3>
            )
          case 'ul':
          case 'ol': {
            const List = b.type === 'ul' ? 'ul' : 'ol'
            return (
              <List key={i} className={`space-y-2 pl-6 ${b.type === 'ul' ? 'list-disc' : 'list-decimal'} marker:text-gold-600`}>
                {b.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    <RichText text={item} />
                  </li>
                ))}
              </List>
            )
          }
          case 'callout': {
            const c = CALLOUT[b.tone]
            const Icon = c.icon
            return (
              <aside key={i} className={`flex gap-3 rounded-[var(--radius-card)] p-5 ring-1 ring-inset ${c.className}`}>
                <Icon className={`mt-1 size-5 shrink-0 ${c.iconClass}`} aria-hidden />
                <div>
                  <p className="font-display font-semibold text-ink-950">{b.title}</p>
                  <p className="mt-1.5 text-base leading-relaxed text-ink-800">
                    <RichText text={b.text} />
                  </p>
                </div>
              </aside>
            )
          }
          case 'table':
            return (
              <div key={i} className="overflow-x-auto rounded-[var(--radius-card)] ring-1 ring-ink-100">
                <table className="w-full min-w-[480px] text-left text-[0.9375rem]">
                  <thead className="bg-ink-50">
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} className="px-4 py-3 font-semibold text-ink-900">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r} className="border-t border-ink-100 align-top">
                        {row.map((cell, c) => (
                          <td key={c} className={`px-4 py-3 ${c === 0 ? 'font-medium text-ink-900' : 'text-ink-700'}`}>
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'cta':
            return (
              <aside key={i} className="surface-dark rounded-[var(--radius-card)] p-6 text-white">
                <p className="font-display text-xl font-semibold">
                  {b.variant === 'emergency' ? 'Gate stuck right now?' : 'Rather have a technician look at it?'}
                </p>
                <p className="mt-1.5 text-base text-ink-300">
                  {b.variant === 'emergency'
                    ? 'A person answers 24/7 and can usually talk you through the manual release on the phone.'
                    : 'Call or text a photo of the gate and the operator. We will tell you what it is likely to be before anyone drives out.'}
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button href={business.phone.href} size="md" className="tabular">
                    <Phone className="size-4" aria-hidden />
                    Call {business.phone.display}
                  </Button>
                  <Button href={`sms:${business.phone.href.replace('tel:', '')}`} variant="ghostDark" size="md">
                    <MessageSquareText className="size-4" aria-hidden />
                    Text us a photo
                  </Button>
                </div>
              </aside>
            )
        }
      })}
    </div>
  )
}
