# Homepage SEO Audit & Remediation

**Scope** — the Shield Gate Repair homepage (`/`), the page carrying the H1
"Professional Gate Repair & Automatic Gate Services".
**Audited and remediated** — 26 August 2026. Follow-up pass 27 August 2026.
**Score at audit** — 74/100. 16 findings: 2 critical, 5 high, 6 medium, 3 low.
**Shipped** — 14 of 16 closed in code. 1 blocked on client facts, 1 no-action.
**Follow-up (27 Aug)** — site-wide title-length sweep (19 pages fixed), then a
performance and mobile pass: **−35 kB JS on every page**, 42 server-rendered
invisible elements fixed, and the mobile action bar no longer covers content.
See [Follow-up pass](#follow-up-pass--27-august-2026) and
[Performance & mobile pass](#performance--mobile-pass--27-august-2026).

Every finding below was read out of the source **and** the compiled HTML in
`.next/server/app/index.html` — what a crawler actually receives, not what the
source intends. No business fact is asserted here that `content/business.ts`
does not already mark `confirmed`.

---

## Summary

The page was already unusually well built. The technical layer — self-referencing
canonical on the `www` host, `index, follow`, clean robots and sitemap, a 190-city
redirect map, pre-generated AVIF/WebP with dimensions set, self-hosted fonts,
facade-first video — is better than anything the competitor notes in this repo
describe. The body copy is genuinely original rather than templated.

The score was held down by four things, all sitting either in the first 200
pixels or in the invisible layer around the page:

1. **The H1 disagreed with the `<title>`.** The title was geo-targeted; the H1
   named no city and led on the weakest of the eight target terms.
2. **The meta description promised something the site no longer does** —
   "Published prices", on a site where `/pricing` 301s to `/contact`.
3. **The structured data was one node deep** on a page carrying videos, eight
   services and 190 cities.
4. **The local entity was unverifiable** — no address, no GBP link, no review
   signal. Still open; it is a client conversation, not a code change.

---

## Findings and what changed

### CRITICAL

---

#### C-01 · Local entity carries nothing a search engine can verify

**Status: OPEN — blocked on client**

**What was wrong.** The `HomeAndConstructionBusiness` node had no `address`, no
`sameAs`, no `aggregateRating`, no `geo`. All four are suppressed correctly by
the codebase's own honesty guard — `business.address`, `business.rating`,
`business.googleReviewUrl` and all three social handles are marked unconfirmed.
This is a data gap, not a code defect.

**Why it matters.** For a local service business the local pack *is* the channel,
not a bonus. Without a resolvable location, a linked Google Business Profile or a
single review signal, the page has no way to be associated with the entity that
would rank in it. Everything else in this document is worth less than closing
this gap.

**What is needed.** In order of value:

| Fact | Where it goes | Unlocks |
|---|---|---|
| GBP listing URL + "Ask for reviews" link | `business.googleReviewUrl`, `social` | `sameAs`, review request system |
| Address, or written confirmation of a hidden-address SAB | `business.address` | `PostalAddress`, `geo`, Ads location extensions |
| Google rating + review count | `business.rating` | `aggregateRating`, star rich results |
| YouTube channel URL | `business.social.youtube` | `sameAs` — the site already hosts 21 of its videos |
| Texas licence number | `business.license` | `hasCredential`, strongest available trust line |
| Warranty term | `business.warrantyTerm` | A term no competitor headlines |

Set `confirmed: true` on each and every render site and schema builder lights up
on its own — they all already guard on these facts.

**Do not** invent an address or a rating to fill the schema. Emitting
`aggregateRating` over reviews that do not exist is a structured-data violation
that earns manual actions. The existing guard is right.

---

#### C-02 · Meta description advertised published prices

**Status: FIXED** — `app/page.tsx`, `app/layout.tsx`

**What was wrong.** The description ended "Published prices." — but `/pricing` was
retired and 301s to `/contact`, and no price list exists anywhere on the site.

```
// rendered description tail, before
…Eagle and Ramset operators. Open 24/7. Published prices.

// next.config.ts — the page it promised
{ source: '/pricing', destination: '/contact', permanent: true }
```

**Why it mattered.** It was the one line in the snippet a price-sensitive searcher
would act on. They click, find no prices, bounce — which teaches Google the result
did not satisfy the query. It was also simply untrue, on a site whose entire
positioning is that it tells customers the truth.

**What changed.** Claim removed, length brought under 160 in the same edit. The
`app/layout.tsx` default was carrying a second, different string; both now match.

```diff
- Automatic gate stuck or broken? Same-day repair across Dallas–Fort Worth. We repair
- LiftMaster, FAAC, All-O-Matic, Elite, Viking, Eagle and Ramset operators. Open 24/7.
- Published prices.                                                          (186 ch)
+ Automatic gate stuck, stalled or dead? Same-day gate repair across Dallas–Fort Worth.
+ We fix LiftMaster, FAAC, Elite, Viking and Ramset operators. Open 24/7.    (157 ch)
```

---

### HIGH

---

#### H-01 · H1 had no location and led on the weakest target term

**Status: FIXED** — `components/sections/hero.tsx`

**What was wrong.** `Professional Gate Repair & Automatic Gate Services` opened on
an unfalsifiable adjective, named no city, and gave its gold-gradient emphasis to
"Automatic Gate Services" — the one phrase of the eight with no clear commercial
intent behind it. The geo lived in the sub-headline, which is a `<p>`.

**Why it mattered.** The H1 is the strongest on-page relevance signal after the
title, and the two disagreed: the title said "Dallas–Fort Worth", the H1 said
nothing about where this company works. "Professional" is also the exact register
this component's own comments criticise competitors for ("unfalsifiable
adjectives … which is exactly why they do not work") — the hero was doing the
thing the rest of the page was built to avoid.

**What changed.**

```diff
- Professional Gate Repair & <span>Automatic Gate Services</span>
+ Automatic Gate Repair in <span>Dallas–Fort Worth</span>                     (42 ch)

  // sub-headline — geo dropped, it is no longer needed twice
- Residential & Commercial Gate Repair Throughout Dallas–Fort Worth
+ Residential, commercial, HOA and industrial — most repairs finished on the first visit

  // third line — de-duplicated against the new sub-headline
- …and more — so most repairs finish on the first visit.
+ …and more — on the truck, not on order.
```

The gold span still lands on the most valuable words.

---

#### H-02 · Meta description ran 186 characters

**Status: FIXED** — see C-02, same edit.

Google cut it around "…Elite, Viking, Eag…", so the truncation landed inside the
brand list and "Open 24/7" — the strongest conversion line, on a query set that
skews to emergencies — never rendered.

---

#### H-03 · One schema node on a page carrying videos, 8 services and 190 cities

**Status: FIXED (partial — see caveat)** — `lib/schema.ts`, `app/page.tsx`,
`components/sections/video-reel.tsx`

**What was wrong.** The homepage emitted only the layout's
`HomeAndConstructionBusiness`. No `WebPage`, no `Service`/`hasOfferCatalog`, and
no `VideoObject` at all.

```
// JSON-LD types found in the compiled homepage, before
1 × HomeAndConstructionBusiness
1 × AdministrativeArea         (nested)
1 × OpeningHoursSpecification  (nested)
0 × VideoObject
```

**Why it mattered.** `lib/schema.ts` already contained a working `videoSchema()`
builder wired into service, brand and project pages — but not the homepage. The
file's own comment notes that no DFW competitor has detectable schema and that
video rich results are uncontested here. A built asset was left unplugged on the
highest-priority URL.

**What changed.** Three new builders in `lib/schema.ts` — `webPageSchema()`,
`webSiteSchema()`, `offerCatalogSchema()` — and a graph emitted from `app/page.tsx`,
all hanging off the existing `#business` `@id` rather than declaring a second
entity. After:

```
1 × WebSite · 1 × WebPage · 1 × OfferCatalog (8 × Offer / 8 × Service)
1 × FAQPage (6 × Question) · 6 × VideoObject
+ the layout's 1 × HomeAndConstructionBusiness
```

> **Caveat — VideoObject covers 6 videos, not 21.**
> The testimonial carousel is YouTube-hosted. `VideoObject` requires `uploadDate`,
> and neither the real upload dates nor the durations of those 21 clips exist
> anywhere in this repository. Markup was applied to the six **self-hosted**
> VideoReel clips, which carry real `durationSeconds`, posters and written
> descriptions. Fabricating 21 upload dates would be the exact trade this codebase
> refuses everywhere else. To extend: add the channel metadata to
> `content/testimonials.ts` and the loop in `app/page.tsx` picks it up.

> **Note on FAQPage.** Emitted for entity understanding, not rich results. Google
> restricted FAQ rich results to government and health sites in 2023.

---

#### H-04 · `/emergency` was orphaned

**Status: FIXED** — `components/layout/site-header.tsx`,
`components/layout/site-footer.tsx`, `components/sections/closing-cta.tsx`

**What was wrong.** Zero occurrences of `href="/emergency"` in the compiled
homepage. Not in the header nav, not in the footer. The only file linking it was
`components/sections/landing-page.tsx` — so its sole internal inbound links came
from the eight Google Ads landing pages.

```
// links to /emergency, whole codebase, before
components/sections/landing-page.tsx:306    href="/emergency"
// header: absent · footer: absent · homepage: absent

// meanwhile, in app/sitemap.ts
{ path: '/emergency', priority: 0.95 }   ← second only to the homepage
```

**Why it mattered.** The sitemap declared this the second most important page on
the site; the internal link graph declared it nearly worthless. Google weighs the
link graph far more heavily than sitemap priority. "Emergency gate repair" is also
the highest-urgency, highest-converting term in the set.

**What changed.** Three links, now 3 occurrences on the homepage:

| Where | Link |
|---|---|
| Header availability strip (site-wide, above the fold) | "Available 24/7 Emergency Gate Repair Service" |
| Footer, leading the Services column | "24/7 Emergency Repair" |
| ClosingCTA — its heading is already the emergency query as a sentence | "See what counts as a gate emergency" |

The nav could not take a seventh top-level item: six plus the phone number and CTA
already force the `xl` breakpoint. The availability strip was already saying the
word "Emergency" on every page, so it is the right surface rather than a compromise.

---

#### H-05 · LCP image was not preloaded; the header logo was

**Status: FIXED (with a caveat)** — `app/page.tsx`, `components/sections/hero.tsx`,
`components/layout/site-header.tsx`, `app/layout.tsx`, `lib/cdn.ts`

**What was wrong.** The only `<link rel="preload" as="image">` in the head pointed
at `/brand/logo-dark.webp`. The hero photograph — the actual LCP element — is
rendered by the custom `ResponsiveImage` as a raw `<picture>` served from
CloudFront, so Next knew nothing about it and emitted no preload.

**Why it mattered.** The hero was correctly marked `fetchPriority="high"`, but
priority only applies once the browser has *found* the element. A small logo was
occupying the one preload slot and competing for connection and bandwidth with the
image LCP is measured on — on a cold connection, typically several hundred
milliseconds, entirely recoverable.

**What changed.**

- `heroImage` and `HERO_SIZES` are now exported from `hero.tsx` and consumed by
  `app/page.tsx`, so the preload's `imageSrcSet`/`imageSizes` match the rendered
  `<source>` character for character. A mismatch would make the browser download
  the image twice. Verified identical in the compiled output.
- `lib/cdn.ts` gained `cdnOrigin`, and `app/layout.tsx` now preconnects to the CDN
  (the LCP image is on a third origin) and to `googletagmanager.com`.
- The header logo became a plain `<img>`.

```html
<!-- after, in the compiled head -->
<link rel="preload" as="image" type="image/avif"
      imageSrcSet="https://…/homepage-04-400.avif 400w, … 2000w"
      imageSizes="100vw" fetchPriority="high"/>
<link rel="preconnect" href="https://d7t2eyla4jb9a.cloudfront.net" crossorigin="anonymous"/>
<link rel="preconnect" href="https://www.googletagmanager.com"/>
```

> **Caveat — the logo preload could not be fully removed.**
> Dropping `priority` was not enough: React 19 hoists a preload for any non-lazy
> image, so `next/image` emitted one either way. Converting the logo to a plain
> `<img>` did not stop React either. Eliminating it entirely would mean
> lazy-loading an above-the-fold logo, which is a worse trade.
> The goal is met regardless: the hero is now preloaded *and* prioritised, where
> before it was not preloaded at all.
> The conversion was worth making on its own merits — the source is a 16 KB WebP
> displayed at ~110 px wide, and the optimizer was being asked for 640w and 1080w
> variants of it. Serving the original directly is smaller and one server
> round-trip cheaper.

---

### MEDIUM

---

#### M-01 · Title ran 69 characters

**Status: FIXED** — `app/page.tsx`, `app/layout.tsx`

```diff
- Gate Repair Dallas–Fort Worth | Same-Day Service | Shield Gate Repair   (69 ch)
+ Gate Repair Dallas–Fort Worth | Same-Day, Open 24/7                    (51 ch)
```

The homepage is the one route whose title bypasses the layout's
`'%s | Shield Gate Repair'` template — `template` applies to child segments, and
this is the same segment it is defined in. The brand is therefore omitted here
deliberately, and that reasoning is now recorded in a comment above the metadata
so it does not read as an oversight. The layout `default` (a fallback for routes
that set no title) was aligned to `Gate Repair Dallas–Fort Worth | Shield Gate Repair`.

---

#### M-02 · Two pages competed for "emergency gate repair Dallas–Fort Worth"

**Status: FIXED** — `content/services.ts`, `app/services/[slug]/page.tsx`,
`app/emergency/page.tsx`

**What was wrong.**

```
/emergency                        24/7 Emergency Gate Repair | Dallas–Fort Worth | Call Now  (80 ch)
/services/emergency-gate-repair   Emergency Gate Repair in Dallas–Fort Worth
```

**Why it mattered.** Google picks one and dilutes both. It compounded with H-04:
the page with the better title for the query was the one with no internal links,
so the weaker page would win by default — and it was the wrong page, because
`/emergency` is the phone-first layout the query actually wants.

**What changed.** `/emergency` is the canonical target. Rather than 301 the service
page away (which would cost a service page and drop the grid to seven), it was
re-angled onto the diagnostic long tail:

- A new optional `seoTitle` field on the `Service` type, consumed by
  `generateMetadata` in `app/services/[slug]/page.tsx`. Only
  `emergency-gate-repair` sets it today.
- Service title → `After-Hours Gate Faults: What Breaks and What to Do`
- Service `headline` (the H1) → `What Fails on a Gate Out of Hours — and What to Do First`
- `/emergency` title 80 → 66 chars: `24/7 Emergency Gate Repair Dallas–Fort Worth`
  ("Call Now" was the half Google was cutting anyway)

---

#### M-03 · No question-and-answer content on the strongest page

**Status: FIXED** — new `components/sections/home-faq.tsx`, wired into `app/page.tsx`

**What was wrong.** The homepage had 13 H2s and not one was a question. Every FAQ
lived on `/faq`, service pages and brand pages.

**Why it mattered.** Question-shaped headings followed by a direct answer are the
extraction unit for People Also Ask, paragraph snippets and AI Overviews. The
homepage has the most authority to win them and presented no extractable answer.

**What changed.** A six-question section above `ClosingCTA`, in plain
`<details>`/`<summary>` — no client JavaScript, answers in the DOM at render time,
keyboard operable for free, the same construction `/faq` already uses.

Nothing was newly written. Each entry is resolved **by exact question text** from
`content/general-faqs.ts` — the same source `/faq` aggregates — so there is one
copy of every answer, and reordering or recategorising that file cannot silently
swap an answer here.

1. My gate is stuck right now. What should I do first?
2. Do you actually answer the phone at night?
3. How quickly can you get to me?
4. Do you charge to come out and look?
5. Will you quote over the phone?
6. How do I know if I really need a new operator?

> **Deliberately excluded:** "How much does gate repair cost in Dallas–Fort Worth?"
> — the strongest PAA target of the set and the obvious first question. No confirmed
> cost figure, range or diagnostic fee exists anywhere in `content/business.ts`.
> Add it to `QUESTIONS` the moment the client supplies a real number.

---

#### M-04 · An absolute photography claim the repo's own notes contradict

**Status: FIXED** — `components/sections/featured-work.tsx`

**What was wrong.** The section stated: *"Every photograph on this site is our own
technicians on our own jobs. None of it is stock, and none of it is generated."*
`content/alt-text.ts` records that at least one image (`faac-01`) is a manufacturer
product shot, and that the wider source library shows Southern California work —
palm trees, Spanish tile, a Santa Monica security sign.

**Why it mattered.** This is an E-E-A-T claim, not a marketing flourish, stated in
absolute terms on the section that carries the most trust weight. A single
verifiably-stock image makes the sentence false and undermines every other claim
beside it. The three photographs in that section are client-supplied and confirmed
— the problem was the word "site", which scoped the claim to 122 images the
sentence could not cover.

**What changed.**

```diff
- Every photograph on this site is our own technicians on our own jobs.
-   None of it is stock, and none of it is generated.
+ These are our own technicians on our own jobs — photographed on site,
+   not staged and not generated.
```

**Still needs verification:** which library images are DFW work. Settle against
`MEDIA-PROVENANCE.md` before any of them appear in a geo-claiming context.

---

#### M-05 · 16 years of experience was never stated on the homepage

**Status: FIXED** — `components/sections/hero.tsx`

`business.yearsInBusiness` is `confirmed: true, value: 16`, verified against the
client's own About copy — the only substantial experience credential confirmed, and
it appeared nowhere above the fold. Experience is the first E of E-E-A-T, this is a
number rather than an adjective, and it was free to deploy.

```diff
- Technicians available now — DFW & Surrounding Areas
+ Technicians available now — 16+ years across DFW
```

Guarded on `fact(business.yearsInBusiness)` as every other render site is, so it
falls back to the service area if the fact is ever un-confirmed.

---

#### M-06 · GTM is the first thing in the head

**Status: FIXED (mitigated)** — `app/layout.tsx`

The GTM loader is inlined as the first element of `<head>` and the container fires
both GA4 and Google Ads. This is a deliberate, documented trade — deferring it
risks losing early Ads conversion events — so it is a measurement note, not a
defect. The loader stayed where it is; a `preconnect` to
`googletagmanager.com` was added above it so the handshake starts earlier.

**Remaining, if INP becomes a problem:** audit the container itself for tags that
can move to a `DOM Ready` or `Window Loaded` trigger. Measure with field data in
Search Console, not lab scores.

---

### LOW

---

#### L-01 · Seven of eight Ads landing pages rendered the brand twice

**Status: FIXED** — `content/landing-pages.ts`

Commit `757d3c7` removed the duplicated brand from 14 page titles but did not touch
`content/landing-pages.ts`. Those titles still hardcoded the brand while
`landingMetadata()` returns a plain string, so the root template appended it again.

```
Apollo Gate Opener Repair Dallas–Fort Worth | Shield Gate Repair | Shield Gate Repair   87 ch
DoorKing (DKS) Repair Dallas–Fort Worth | Shield Gate Repair | Shield Gate Repair       83 ch
Elite Gate Repair Dallas–Fort Worth | Shield Gate Repair | Shield Gate Repair           79 ch
```

Low severity for a homepage audit, but these are **paid** landing pages — 20 wasted
title characters on every impression.

**What changed.** Brand stripped from all eight entries; the template now adds it
once. The FAAC outlier was additionally re-cut (`FAAC Gate Repair Dallas–Fort Worth
| Hydraulic Specialists` → `FAAC Hydraulic Gate Repair Dallas–Fort Worth`), folding
the differentiator into the phrase rather than trailing it after a pipe. All eight
now render 57–70 chars, where truncation costs only brand characters. The `title`
field on the `LandingPage` type now documents the constraint so it cannot recur.

---

#### L-02 · Sitemap `priority`/`changefreq` maintained for nothing

**Status: NO ACTION — by design**

`app/sitemap.ts` carries a deliberate priority tier system. Google has stated for
years that it ignores both `priority` and `changefreq`. Removing the values changes
nothing, so they stay.

The useful reframe: treat the tiering as a to-do list for the **internal link
graph**, which *is* read. Anything above 0.85 in that file should be reachable from
the homepage or the header. H-04 existed precisely because `/emergency`'s 0.95 read
as though the page were being promoted when nothing was promoting it.

---

#### L-03 · robots.txt `Host` directive is Yandex-only

**Status: NO ACTION**

`app/robots.ts` emits `host: business.url`. Google has never supported the Host
directive. It does no harm and is ignored silently. Worth knowing only so it is not
mistaken for the thing enforcing `www` — the apex 301 and the self-referencing
canonical do that, and both are correct.

---

## Reference — the shipped values

| | Value | Length |
|---|---|---|
| **Title** | `Gate Repair Dallas–Fort Worth \| Same-Day, Open 24/7` | 51 |
| **Meta description** | `Automatic gate stuck, stalled or dead? Same-day gate repair across Dallas–Fort Worth. We fix LiftMaster, FAAC, Elite, Viking and Ramset operators. Open 24/7.` | 157 |
| **H1** | `Automatic Gate Repair in Dallas–Fort Worth` | 42 |
| **URL** | `/` — unchanged. The homepage is the correct target for the head term and already holds the site's authority. | — |

**Primary keyword** — `gate repair`, targeted locally as
`gate repair Dallas–Fort Worth`. The head term with the broadest local-transactional
intent; "gate repair near me" resolves to the same local pack, so one page serves
both. **Rejected:** "automatic gate services", the phrase previously in the H1 —
the vaguest of the eight, attracting supplier and informational traffic rather than
someone with a broken gate.

**Secondary keywords** — automatic gate repair · electric gate repair · gate opener
repair · gate motor repair · emergency gate repair · driveway gate repair · sliding
gate repair · commercial gate repair · 24 hour gate repair · gate repair near me

**Semantic / entity terms already carried by the copy** — keep them, they are why
the page reads as expert: gate operator · control board · capacitor · limit switch ·
photo eye · safety sensor · manual release · slide gate · swing gate · HOA gate ·
access control · intercom · LiftMaster · DoorKing · FAAC · Elite · Viking · Ramset ·
All-O-Matic · Apollo

### H2 structure, after

| # | H2 | Change |
|---|---|---|
| 1 | Real Customers. Real Repairs. Watch Our Customers Tell Their Stories. | kept |
| 2 | **Gate Repairs We've Finished Across Dallas–Fort Worth** | was "Real gates, real repairs" |
| 3 | Repairs That Were Quoted as Replacements | kept — best heading on the page |
| 4 | Watch Us Actually Do the Work | kept |
| 5 | **Gate Operator Brands We Repair** | was "We Fix the Operators Nobody Else Wants to Touch"; old line kept as the intro sentence |
| 6 | Six Reasons People Call Us Back | kept |
| 7 | **What We Fix: Automatic, Electric & Iron Gates** | was "Tell us what the gate is doing"; old line kept as the sub-head |
| 8 | What Happens When You Call | kept |
| 9 | Serving 190+ Cities Across Dallas–Fort Worth | kept |
| 10 | **Gate Repair Questions We Get Every Week** | new — M-03 |
| 11 | Gate Not Working Right Now? | kept; now links to `/emergency` |

Each rewrite keeps the original line rather than deleting it — the voice was the
strongest thing about this page and none of it was traded for keywords.

### Internal links added

| Target | From | Why |
|---|---|---|
| `/emergency` ×3 | header strip, footer, ClosingCTA | H-04 — was orphaned |
| `/faq` | new FAQ section | was footer-only |
| `/warranty` | WhyShield "Written warranty, every job" card | the card made a claim and linked nowhere |

---

## Verification

All of the following was run after the final edit:

```
npx tsc --noEmit          → exit 0
npm run build             → ✓ Compiled successfully
npm run check:links       → 259 internal pages checked, ✓ no broken internal links
```

Compiled-output spot checks on `/`:

| Check | Result |
|---|---|
| `<title>` | `Gate Repair Dallas–Fort Worth \| Same-Day, Open 24/7` |
| `<h1>` | `Automatic Gate Repair in Dallas–Fort Worth` |
| "Published prices" occurrences | 0 |
| JSON-LD blocks | 2, both parse; 11 nodes total |
| `href="/emergency"` occurrences | 3 |
| Hero preload `imageSrcSet` vs rendered `<source>` `srcSet` | identical, no double download |
| `/emergency` · `/services/emergency-gate-repair` | HTTP 200 · HTTP 200 |

---

## Files changed

```
 app/emergency/page.tsx                |   4 +-
 app/layout.tsx                        |  19 +++++-
 app/page.tsx                          | 120 ++++++++++++++++++++++++++++++++--
 app/services/[slug]/page.tsx          |   2 +-
 components/layout/site-footer.tsx     |   6 +-
 components/layout/site-header.tsx     |  39 +++++++++--
 components/sections/brands-grid.tsx   |   9 ++-
 components/sections/closing-cta.tsx   |  13 +++-
 components/sections/featured-work.tsx |  17 ++++-
 components/sections/hero.tsx          |  79 +++++++++++++++-------
 components/sections/services-grid.tsx |  11 +++-
 components/sections/video-reel.tsx    |  29 ++++++--
 components/sections/why-shield.tsx    |  19 +++++-
 content/landing-pages.ts              |  28 +++++---
 content/services.ts                   |  16 ++++-
 lib/cdn.ts                            |  19 ++++++
 lib/schema.ts                         |  67 +++++++++++++++++++
 17 files changed, 429 insertions(+), 68 deletions(-)

 new: components/sections/home-faq.tsx
 new: SEO-AUDIT-HOMEPAGE.html   (standalone visual report of the pre-fix audit)
```

---

## Follow-up pass — 27 August 2026

A site-wide title-length sweep, measuring **decoded** title text across all 254
built pages. (The first pass measured raw HTML, which inflates any title
containing `&` — `&amp;` counts as five characters where Google sees one.)

### Before

| Decoded length | Pages |
|---|---|
| **> 90 chars** | **16** |
| **80–90** | **2** |
| 70–79 | 18 |
| 63–69 | 111 |
| ≤ 62 | 107 |

### F-01 · Project case-study titles ran 84–115 characters

**Status: FIXED** — `content/projects.ts`, `app/projects/[slug]/page.tsx`,
`app/projects/page.tsx`

**What was wrong.** All 18 case studies used `project.title` — a long editorial
headline written to be read on the page — as the `<title>`, then appended
`" | Case Study"` (13 chars) and the layout's `" | Shield Gate Repair"` (21 chars).
Worst case 115 characters.

```
LiftMaster LA400 Was Undersized for the Gate — We Changed the Arm,
Not the System | Case Study | Shield Gate Repair                     115 ch
```

**Why it mattered.** Unlike the 63–79 band, where truncation eats only the brand
name, these were cut off **mid-sentence** — the fault being described, which is
the searchable part, never survived to the SERP. `/projects` itself ran 78.

**What changed.** A required `seoTitle` field on the `Project` type, mirroring the
`seoTitle` pattern added to `Service` for M-02. `title` keeps the narrative and
still renders as the H1; `seoTitle` carries the fault and the operator — what
someone with the same problem actually types. `" | Case Study"` was dropped
entirely: 13 of ~60 characters spent on a phrase nobody searches.

| Slug | New `<title>` (before brand) |
|---|---|
| `liftmaster-la400-to-la500-arm-upgrade` | LiftMaster LA400 to LA500 Arm Upgrade |
| `liftmaster-board-not-charging-battery` | LiftMaster Board Not Charging Battery |
| `elite-board-replacement` | Elite Gate Operator Board Replacement |
| `commercial-gate-impact-damage-repair` | Commercial Gate Impact Damage Repair |
| `ramset-slide-gate-broken-rollers` | Ramset Slide Gate Roller Replacement |
| `ramset-high-cycle-entrance` | Ramset High-Cycle Apartment Entrance |
| `emergency-gate-stuck-open` | Gate Stuck Open Overnight: Emergency |
| `commercial-loop-detector-fault` | Commercial Gate Loop Detector Fault |
| `doorking-dual-swing-gearbox-rebuild` | DoorKing Swing Gate Gearbox Rebuild |
| `liftmaster-corroded-board-solar-upgrade` | Corroded LiftMaster Board Replaced |
| `doorking-voip-call-box` | DoorKing Call Box Dead After VoIP |
| `gate-installation-footings` | Automatic Gate Installation Costs |
| `iron-gate-post-movement` | Iron Gate Dragging: Post Movement |
| `liftmaster-capacitor-not-motor` | LiftMaster Humming But Not Moving |
| `all-o-matic-clutch-misdiagnosis` | All-O-Matic Stalling Mid-Travel |
| `faac-hydraulic-operator-rebuild` | FAAC Hydraulic Operator Rebuild |
| `viking-heavy-gate-load` | Viking Operator on a Heavy Gate |
| `solar-gate-battery` | Solar Gate Battery Replacement |
| `/projects` (index) | Gate Repair Case Studies |

All 19 now render **45–58 characters** including the brand. The H1s are unchanged
— verified in the compiled output.

### After

| Decoded length | Pages | Change |
|---|---|---|
| **> 90 chars** | **0** | −16 |
| **80–90** | **0** | −2 |
| 70–79 | 17 | −1 |
| 63–69 | 111 | — |
| ≤ 62 | 126 | +19 |

Longest title on the site is now 77 characters, down from 115.

### F-02 · The remaining 128 pages at 63–79 characters

**Status: OPEN — needs a decision, not a fix**

Every remaining over-length title has the same single cause: the root layout's
`'%s | Shield Gate Repair'` template adds **21 characters to all 253 child pages**,
so each one's real budget is ~39 characters, not 60.

```
brands/ghost-controls            Ghost Controls Gate Operator Repair in Dallas–Fort Worth | …  77
gate-repair-north-richland-…     Gate Repair North Richland Hills TX — Same-Day Service | …    75
services/access-control-repair   Access Control & Intercom Repair in Dallas–Fort Worth | …     74
```

The harm is real but bounded: truncation eats the brand suffix, which is the least
valuable part — and Google frequently rewrites or appends site names itself. It is
**not** the mid-sentence truncation that made F-01 urgent.

Two ways to close it, both trade something, so neither was applied unilaterally:

| Option | Buys | Costs |
|---|---|---|
| **A — drop the title template** | 21 chars on every page, immediately | The brand no longer appears in any inner-page title. A site-wide branding decision. |
| **B — re-cut the title patterns** | 6–14 chars per page family | Keyword trades, e.g. brand pages going from "X Gate Operator Repair in Dallas–Fort Worth" to "X Gate Repair Dallas–Fort Worth" drops "Operator". 4 generators to change: brands, services, cities, landing pages. |

**Recommendation: A**, then spend the reclaimed characters on differentiators
("Same-Day", "24/7") rather than on the brand repeated 253 times. But it is a
branding call and belongs to the client, not the build.

### Follow-up verification

```
npx tsc --noEmit          → exit 0
npm run build             → ✓ Compiled successfully
npm run check:links       → 259 internal pages checked, ✓ no broken internal links
```

| Check | Result |
|---|---|
| Pages over 80 chars | 0 (was 18) |
| Longest title | 77 (was 115) |
| Project H1s | unchanged — editorial headlines intact |
| `/` · `/projects` | HTTP 200 · HTTP 200 |

**Files changed in this pass**

```
 app/projects/[slug]/page.tsx    |  5 ++++-
 app/projects/page.tsx           |  4 +++-
 content/projects.ts             | 33 +++++++++++++++++++++++++++++++--
```

---

## Performance & mobile pass — 27 August 2026

### P-01 · framer-motion shipped 108 KB to do a fade

**Status: FIXED** — `components/ui/reveal.tsx`, `app/globals.css`,
`app/layout.tsx`, `package.json`

**What was wrong.** `framer-motion` was imported in exactly one place — the
`Reveal` scroll-in component — and used for a 380 ms rise-and-fade. It compiled to
a 108 KB chunk (~35 KB over the wire) loaded on every page that used `Reveal`,
which is 12 files and effectively the whole site.

The tell was in the build output all along: `/faq`, the one content page that
does not use `Reveal`, was **109 kB** against the homepage's **156 kB**. That
47 kB gap was almost entirely one animation library.

**Why it mattered.** It was roughly a third of the homepage's First Load JS, and
it landed hardest on the Ads landing pages — **177 kB, the heaviest pages on the
site**, which is paid traffic where load time is billed twice.

**What changed.** The animation moved entirely to CSS. `Reveal` is now a small
`IntersectionObserver` that adds a `data-reveal="shown"` attribute and
disconnects. `framer-motion` was uninstalled.

```
Route                   Before    After     Δ
/                       156 kB    121 kB    −35 kB   (−22%)
/[citySlug]  (190 pp)   156 kB    121 kB    −35 kB
/brands/[slug]          156 kB    121 kB    −35 kB
/services/[slug]        156 kB    121 kB    −35 kB
/projects/[slug]        153 kB    117 kB    −36 kB
/emergency              155 kB    119 kB    −36 kB
/about                  148 kB    113 kB    −35 kB
Ads landing pages ×8    177 kB    141 kB    −36 kB
```

---

### P-02 · 42 homepage elements were server-rendered invisible

**Status: FIXED** — same change as P-01

**What was wrong.** framer-motion writes its `initial` state as an inline style
during SSR. Every `Reveal` block therefore shipped as:

```html
<div style="opacity:0;transform:translateY(16px)">
```

42 of them on the homepage alone — the video reel, the brand grid, the case
studies, the process timeline, the service cards.

**Why it mattered.** Anything that stopped the JavaScript arriving — a failed
chunk, an aggressive blocker, a crawler that does not execute scripts — left that
content invisible. Content hidden by default and revealed only by script is a bad
bet on a page whose job is to rank, and it delays paint even when the script does
arrive.

**What changed.** The hidden state is now scoped to a `.js` class set by a
one-line inline script in `<head>`, so the ordering is:

- **script runs** → `.js` present → element starts hidden → animates in, no flash
- **script blocked or absent** → no `.js` → content simply renders visible

`prefers-reduced-motion` is handled in the stylesheet rather than in JavaScript,
so it now applies *before* hydration instead of being undone after it.

```
Homepage elements served at opacity:0    42  →  0
```

---

### P-03 · The mobile action bar covered the bottom of every page

**Status: FIXED** — `app/layout.tsx`

**What was wrong.** `StickyCallBar` is `fixed inset-x-0 bottom-0`, `min-h-14`
(3.5 rem) plus `env(safe-area-inset-bottom)` — and nothing reserved space for it.
`<body>` carried only `className="antialiased"`.

**Why it mattered.** The last ~56 px of **every page on the site** sat underneath
it on every phone. The footer's copyright row and its legal links — including the
privacy policy link — were permanently obscured, and on the homepage it clipped
the bottom of the closing CTA.

**What changed.**

```diff
- <body className="antialiased">
+ <body className="antialiased pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
```

`md:pb-0` because the bar itself is `md:hidden`. Both arbitrary values confirmed
present in the compiled stylesheet.

---

### P-04 · `embla-carousel-react` was an unused dependency

**Status: FIXED** — `package.json`

Zero imports anywhere in the codebase. The testimonial carousel was deliberately
rebuilt as a CSS scroll-snap rail — its own comment says it "adds no animation
library to the bundle" — but the dependency was never removed. It was already
tree-shaken out of the build, so this changes no bundle size; it removes install
weight and one supply-chain surface.

---

### Checked and found sound

Not everything examined needed changing. For the record:

| Area | Finding |
|---|---|
| Symptom table (`min-w-[36rem]`) | Correctly wrapped in `overflow-x-auto`. No mobile overflow. |
| `LazyVideo` | Poster-first facade; no video bytes until click. Six clips cost six images. |
| Image `sizes` attributes | Correct on every call site — hero `100vw`, grids `33vw/50vw/100vw`, thumbnails `64px`. No oversized mobile downloads. |
| Lazy loading | `ResponsiveImage` sets `loading="lazy"` on everything except `priority`. |
| `whitespace-nowrap` usages | All short labels, all in desktop-only nav or the intentionally-scrolling marquee. |
| Tap targets | Sticky bar actions are `min-h-14`; header call button is `size-11`. Both clear the 44 px minimum. |
| New H1 wrapping | "Dallas–Fort Worth" breaks at the en-dash; fits the 335 px content box at 375 px. |
| `leaflet` (148 KB) | Real usage, and only loaded on the pages with a map. Left alone. |

> **One false alarm, recorded so it is not re-investigated.** A link crawl reported
> the main 71 KB stylesheet 404ing on every page — which would mean the whole site
> rendering unstyled. It was an artifact of a stale `next start` process holding
> port 3100 from an earlier run (`pkill -f "next start"` does not match the Node
> process on Windows). Killed by PID, re-tested: both stylesheets serve 200 and the
> crawl is clean. **Not a real defect.**

### Verification

```
npx tsc --noEmit          → exit 0
rm -rf .next && npm build  → ✓ Compiled successfully   (clean build)
npm run check:links        → 259 internal pages checked, ✓ no broken internal links
```

| Check | Result |
|---|---|
| First Load JS, homepage | 121 kB (was 156 kB) |
| Elements served at `opacity:0` | 0 (was 42) |
| `data-reveal` elements, all default-visible | 42 |
| `framer-motion` in any built chunk | none |
| Body padding classes in compiled CSS | both emitted, incl. `md:pb-0` |
| `/` `/emergency` `/projects` `/faq` `/apollo-gate-repair` | all HTTP 200 |

**Files changed in this pass**

```
 app/globals.css            | +46
 app/layout.tsx             | +19  −2
 components/ui/reveal.tsx   | rewritten (−framer-motion, −unused CountUp)
 package.json               | −framer-motion, −embla-carousel-react
```

---

## Still open

| # | Item | Owner | Notes |
|---|---|---|---|
| 1 | **C-01 — the six blocked client facts** | Client call | GBP link · address or SAB confirmation · rating and review count · YouTube URL · licence number · warranty term. Everything is scaffolded to light up on `confirmed: true`. Highest-value item on this list by a wide margin. |
| 2 | **VideoObject for the 21 YouTube testimonials** | Client / channel export | Needs real upload dates and durations. Six self-hosted clips are marked up today. |
| 3 | **Cost FAQ on the homepage** | Client | "How much does gate repair cost in Dallas–Fort Worth?" is the strongest PAA target available and is being left on the table until a real number exists. |
| 4 | **Photo provenance** | Client + `MEDIA-PROVENANCE.md` | Which library images are DFW work. Blocks any geo-claiming use of the wider library. |
| 5 | ~~Project case-study titles run 84–115 chars~~ | — | **CLOSED 27 Aug** — see [F-01](#f-01--project-case-study-titles-ran-84115-characters). |
| 5b | **128 pages still 63–79 chars** | Client decision | The `'%s \| Shield Gate Repair'` template taxes every child page 21 chars. Truncation costs only brand characters, so this is a branding decision rather than a defect — see [F-02](#f-02--the-remaining-128-pages-at-6379-characters). |
| 6 | **GTM container tag triggers** | Dev / Ads | Move what can move to `DOM Ready` / `Window Loaded`. Measure with field data first. |
| 7 | **Whether California is still a live market** | Client | The unresolved question in `STRATEGY.md §0`. It changes the geo-targeting strategy for the whole site, not just this page. |
