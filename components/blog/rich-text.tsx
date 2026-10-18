import Link from 'next/link'
import { Fragment } from 'react'

/**
 * Text with [label](/path) links, rendered as Next links.
 *
 * Deliberately tiny: posts need internal links and nothing else inline. Only
 * site-relative paths are accepted (scripts/validate-blog.ts checks each one
 * resolves), so there is no external-link or escaping logic to get wrong.
 */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push(
      <Link
        key={m.index}
        href={m[2]}
        className="font-medium text-ink-950 underline decoration-gold-400 decoration-2 underline-offset-[3px] hover:decoration-gold-600"
      >
        {m[1]}
      </Link>,
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>
}
