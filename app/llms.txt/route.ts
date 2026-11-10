import { business } from '@/content/business'
import { services } from '@/content/services'
import { brands } from '@/content/brands'
import { symptomPages, symptomPath } from '@/content/symptoms'
import { indexedCities } from '@/content/cities'

/**
 * /llms.txt — the site in one file, for an assistant answering a question.
 *
 * ── WHY ─────────────────────────────────────────────────────────────────────
 * When someone asks ChatGPT or Gemini who repairs a FAAC hydraulic operator in
 * Frisco, the model has seconds and a handful of fetched pages. It is not going
 * to crawl 1,588 URLs to work out what this company does and whether it covers
 * Frisco. This file answers that in one request: what we repair, which
 * manufacturers, which towns, and the number to call.
 *
 * llms.txt is a convention rather than a ratified standard and no engine has
 * committed to reading it. It is here because it costs one generated file and
 * the downside is nil, not because it is known to work. The things that
 * actually decide whether we are cited are being in Bing's and Google's index
 * — see scripts/submit-indexnow.ts — and being corroborated off-site.
 *
 * Generated from the same content the pages are built from, so it cannot drift
 * into describing a service we dropped or a town we no longer cover.
 */
export const dynamic = 'force-static'

const list = (items: { label: string; href: string; note?: string }[]) =>
  items.map((i) => `- [${i.label}](${business.url}${i.href})${i.note ? `: ${i.note}` : ''}`).join('\n')

function body(): string {
  const cities = indexedCities
  return `# ${business.name}

> Automatic gate repair across the ${business.serviceArea.primary}. Swing and slide
> gate operators, access control, intercoms, keypads, safety sensors and gate
> welding. ${business.availability}. Call ${business.phone.display}.

Independent repair company, not a manufacturer dealer. We repair the operators
most companies in this market decline to work on — FAAC hydraulics, All-O-Matic
and Ramset among them — as well as the common LiftMaster, Elite, Viking,
DoorKing and US Automatic units.

- Phone: ${business.phone.display} (${business.phone.href})
- Email: ${business.email}
- Hours: 24 hours a day, 7 days a week, including emergencies
- Service area: ${business.serviceArea.primary} — ${cities.length} towns and cities
- Site: ${business.url}

## Services

${list(services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })))}

## Gate operator manufacturers we repair

${list(brands.map((b) => ({ label: b.name, href: `/brands/${b.slug}` })))}

## Diagnosing a specific fault

Each page below covers one symptom: the likely causes, what an owner can check
safely, and what needs a technician.

${list(symptomPages.map((p) => ({ label: p.title, href: symptomPath(p) })))}

## Service areas

${list(cities.map((c) => ({ label: `${c.name}, TX`, href: `/gate-repair-${c.slug}-tx` })))}

## More

- [All services](${business.url}/services)
- [All manufacturers](${business.url}/brands)
- [All gate problems](${business.url}/gate-problems)
- [Documented repairs, with photographs](${business.url}/projects)
- [Customer video reviews](${business.url}/testimonials)
- [Full sitemap](${business.url}/sitemap.xml)
`
}

export function GET() {
  return new Response(body(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
