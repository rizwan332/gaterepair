# Adversarial Audit — Shield Gate Repair

**Audited:** the running production build at `localhost:3100`, 218 pages, 1 Aug 2026.
**Method:** rendered HTML inspected directly. Every finding below was verified against output, not inferred from source.
**Verdict up front:** this is a strong skeleton with two genuine competitive weapons and **six defects that would sink it in front of the client tomorrow.** It is not demo-ready.

---

## The one-line summary

**The previous WordPress site was rejected for "lacked trust". The homepage I built displays fewer trust signals than that site did.** The trust bar renders exactly two items — "Open 24/7" and "Dallas–Fort Worth Metroplex" — and the word "review" appears **zero times** on the entire homepage. Everlast shows 2,600 reviews, a BBB badge, a licence number and "Background Checked & Drug Tested" above the fold. We show a headline and two buttons.

Everything else in this document is secondary to that.

---

---

## Status after the first remediation pass

Verified against a fresh build, same method as the audit.

| # | Finding | Status |
|---|---|---|
| C1 | Trust bar empty, no reviews | 🟠 **Structurally fixed, content blocked** — homepage reviews section + `/reviews` page built, proof chips moved into the hero, `Review` schema wired behind `reviewsConfirmed`. "review" mentions went 0 → 44. Still needs the client's real rating, count, licence and years |
| — | Design read as "competent but forgettable" (my own score: 7.5 visual / 6.5 brand) | ✅ **Reworked** — layered surfaces replacing flat fills, a signature gold-bloom + engineering-grid motif, dramatic display scale with size-tuned tracking, gold treated as a material (gradient + inner highlight + glow) rather than a swatch, lit-hairline cards, and the Framer Motion dependency finally earning its bytes via `Reveal` |
| C2 | 176 hollow city pages | ✅ **Fixed** — `publishedCities` gate; build is now 46 pages, sitemap lists 14 cities. Unpublished cities still listed (unlinked) on `/service-areas`, so coverage is stated without publishing a shell page |
| C3 | Legacy URLs 404 | ✅ **Fixed** — all brand + service + utility paths 308 to their new homes, generated from `legacyPath`. California pages deliberately still unmapped pending §0 |
| C4 | 9/10 form labels broken | ✅ **Fixed** — 10 labels, 0 broken; `aria-describedby`, `aria-invalid`, `aria-required` now wired |
| C5 | Pricing page shows `—` | 🔴 **Blocked on client** — recommend hiding the page until numbers exist |
| C6 | No sitemap/robots/OG/favicon | ✅ **Fixed** — `/sitemap.xml` 39 URLs, `/robots.txt`, `/opengraph-image` 52 KB branded card, favicon + apple-icon |
| H5 | No phone in mobile header | ✅ **Fixed** — gold call button at every breakpoint |
| H6 | No desktop persistent CTA | ✅ **Fixed** — dismissible call rail appears after 75% viewport scroll |
| M5 | Broken `/gate-repair` redirect | ✅ **Fixed** |

**Still open and not blocked on the client:** H1 (city page depth), H2 (122 templated alts), H3 (VideoObject metadata), H4 (no social proof section — the markup can be built now and populated later), H7 (gallery filtering), H8 (missing content types), and the whole 🟡 list.

---

# 🔴 CRITICAL — must fix before the demo

## C1. The trust bar is empty. The site repeats the exact failure it was built to fix.

**Verified output:**
```
Trust bar items rendered:
  - Open 24/7
  - Dallas–Fort Worth Metroplex

"review" mentions on homepage: 0
```

**Problem.** I gated every trust signal behind `confirmed: true` in `content/business.ts` so nothing false could ship. Correct instinct, wrong execution: the result is a homepage with no rating, no review count, no licence, no years, no insurance, no warranty term, no named technician, no face. The section that exists specifically to answer *"can I trust these people on my property"* answers it with a shrug.

**Why it kills conversions.** The Dallas homeowner decides in 5–10 seconds. In that window they scan for: how many people have used these guys, are they licensed, will they show up. We give them none of it. Everlast gives them all four. On a like-for-like comparison a visitor picks Everlast every time, and no amount of typography fixes that.

**Fix.**
1. Get the real numbers from the client tonight — rating, review count, licence number, years, insurer, warranty term. This is a 10-minute phone call and it is the highest-value 10 minutes in the project.
2. Ship a **real review section on the homepage** — currently there is none at all. Minimum: 6 verbatim Google reviews with reviewer name, city and date, plus the aggregate rating repeated in the hero.
3. Put the rating **in the hero**, not below it. `★ 4.9 · 187 Google reviews` under the H1.
4. Add `AggregateRating` + `Review` JSON-LD once the data is real.

**Impact:** the single largest conversion lever on the site. **Effort:** 3–4h once the client supplies numbers.

---

## C2. 176 of 190 city pages are 422-word shells with no unique content

**Verified:** Wills Point (Tier 3) = **422 visible words**. Plano (Tier 1) = **950 words**.

**Problem.** The Tier 3 and unenriched Tier 2 pages render: a generic hero, the services grid, the brands grid, the video reel and a CTA. Change the city name and every one of them is byte-identical. That is **exactly** the pattern I documented as fatal in `CITY-PAGES.md` — and then shipped 176 of.

This is the *Metro Gate Repair* failure mode. I criticised their Plano page for being 5% local and then published 176 pages that are approximately 2% local.

**Why it hurts.** Google's scaled-content-abuse policy targets precisely this. On a domain that is *simultaneously* being repointed from California to Texas, publishing 176 templated location pages is the fastest available route to having the whole site suppressed — taking the 14 good pages down with it.

**Fix — do not publish them yet.**
```ts
// content/cities.ts — gate generateStaticParams on real content
export const publishedCities = cities.filter(c => Boolean(c.localAngle))
```
- Ship **14 enriched city pages** at launch. Fourteen genuinely excellent local pages beat 190 thin ones, and it is still ~4× Everlast's three.
- Every other city appears as a **linked entry on `/service-areas`** — which already exists and already lists all 190. Nothing is lost.
- Promote to a real page as the client's technician interview fills in `gateProfile` and `localAngle`.

**Impact:** removes existential SEO risk. **Effort:** 30 minutes to gate; the content is the long pole.

---

## C3. Every legacy WordPress URL 404s. Migration would destroy the domain.

**Verified:**
```
/liftmaster-gate-motor-repair   404
/faac-gate-motor-repair         404
/gate-installation-services     404
/about-us                       404
/testimonials                   404
```

**Problem.** `STRATEGY.md` says in bold *"Do not skip the 301 map."* I then wrote three redirects in `next.config.ts` and skipped the other 42. The brand URLs — the best-structured, highest-authority assets on the existing domain — all 404.

**Why it hurts.** Every indexed URL loses its ranking and any link equity on cutover day. For a domain being repointed geographically at the same time, this compounds into months of lost visibility.

**Fix.** Full map in `next.config.ts`, generated from `content/brands.ts` `legacyPath` and `content/services.ts` `legacyPath` (both fields already exist and are populated — they are simply unused).

```ts
async redirects() {
  return [
    ...brands.map(b => ({ source: b.legacyPath.replace(/\/$/, ''), destination: `/brands/${b.slug}`, permanent: true })),
    ...services.filter(s => s.legacyPath).map(s => ({ source: s.legacyPath!.replace(/\/$/, ''), destination: `/services/${s.slug}`, permanent: true })),
    { source: '/about-us', destination: '/', permanent: true },
    { source: '/testimonials', destination: '/reviews', permanent: true },
    { source: '/locations', destination: '/service-areas', permanent: true },
    // …plus a decision on the 14 California pages (STRATEGY.md §0)
  ]
}
```

**Impact:** protects the entire migration. **Effort:** 45 minutes.

---

## C4. WCAG failure on the primary conversion form — 9 of 10 labels are broken

**Verified:**
```
for='what-kind-of-gate-'      -> <div>
for='what-s-it-doing-'        -> <div>
for='your-name'               -> <div>
for='phone'                   -> <div>
…9 of 10 labels point at a <div>, not the input
```

**Problem.** In `components/forms/gate-problem-form.tsx` the `Field` wrapper puts the `id` on a wrapping `<div>` while the `<label htmlFor>` points at it. Labels are therefore associated with nothing.

**Why it hurts.** Screen readers announce the fields unlabelled. Tapping the label does not focus the input — a real, felt friction on mobile, which is where most emergency traffic is. It is a WCAG 2.2 AA failure on 1.3.1 and 3.3.2, on the one form the entire site exists to fill.

**Fix.** Pass the id down to the actual control via `cloneElement`, or (cleaner) have each field own its own `id`/`register` pairing and drop the auto-generated slug entirely. Also wire `aria-describedby` to the error and help text, which is currently absent.

**Impact:** legal exposure + measurable mobile form friction. **Effort:** 1h.

---

## C5. The pricing page — the site's biggest differentiator — publishes no prices

**Verified:** every row in the pricing table renders `—`.

**Problem.** The entire strategic premise is *"every other gate company makes you call to find out; we don't."* The page then shows twelve repair types with no numbers. It is currently a page that promises transparency and delivers none — which is worse than not having the page, because it sets an expectation and breaks it in the same viewport.

**Why it hurts.** This page is also specced as the highest-Quality-Score landing page in the Google Ads account. Pointing paid traffic at it in this state would waste budget.

**Fix.** Either get real bands from the client tonight, or **remove `/pricing` from the nav and the homepage teaser until they exist.** Do not demo a page whose headline claim its own body contradicts.

**Impact:** protects credibility. **Effort:** 15 min to hide, or 1h once numbers arrive.

---

## C6. No sitemap, no robots.txt, no OG image, no favicon

**Verified:** `/sitemap.xml` MISSING · `/robots.txt` MISSING · `/opengraph-image` MISSING · `/favicon.ico` MISSING · `manifest.json` MISSING · `og:image` **False**

**Problem.** A 218-page site with no sitemap and no robots directives. And every link shared to WhatsApp, Facebook or SMS — which is exactly how a homeowner forwards a contractor to their spouse — renders with **no preview image**.

**Why it hurts.** Discovery is slower and social sharing looks broken. For a local service business, "let me send this to my husband" is a real conversion step and it currently looks like a dead link.

**Fix.** `app/sitemap.ts` and `app/robots.ts` (native Next 15, no dependency needed), `app/opengraph-image.tsx` generating a branded card per route group, and the favicon set — the source PNG is already sitting in `public/brand/icon-192.png`.

**Impact:** indexing speed + social CTR. **Effort:** 2h.

---

# 🟠 HIGH PRIORITY

## H1. Tier 1 city pages are shorter than the competitor pages I criticised

Plano renders **950 words**. Metro's Plano page is ~3,000; 4 Sure's is ~2,100. My own spec in `CITY-PAGES.md` says 1,500–1,800.

The argument that "shorter but more unique wins" is correct in principle, but 950 words is thin in absolute terms and leaves ranking headroom on the table. The gap is real content the pages should have and don't: **no local projects, no Google Map embed, no local reviews, no driving directions, no neighborhood-level detail beyond a chip list.**

**Fix:** add per-city project cards (3 real jobs with photos), an embedded map (facade-loaded on click), and 2 more city FAQs. Target 1,400–1,600.

## H2. Alt text is templated across all 122 images — the exact thing I said never to do

`content/media-manifest.ts` has `altWritten: false` on every entry, and every alt reads *"{Category} in Dallas–Fort Worth by Shield Gate Repair"*. `BUILD-PROMPT.md` says in bold: *"Alt text is written per image, never templated."*

122 templated alts is keyword-stuffed boilerplate that helps image search not at all, and reads as spam to an accessibility auditor. **Fix:** write them. 122 lines, ~2h, genuinely valuable for image search where competitors use stock.

## H3. VideoObject schema carries fabricated metadata

Every video ships `uploadDate: '2026-08-01'` hardcoded and `description: ''` falling back to a templated string. `descriptionWritten: false` on all 25.

Video rich results are the single uncontested SEO opportunity here — and thin, templated VideoObject data is how you fail to earn them. **Fix:** real title + 2-sentence description per video, and real upload dates. 25 items, ~1.5h.

## H4. No social proof anywhere on the site

There is no reviews page, no testimonial section, no review carousel, no named technician, no customer photo. The client testimonial video exists in `/public/videos/client-testimonial.mp4` and **is not surfaced on the homepage at all** — the video reel filters to brand and service categories and drops it.

Star Gate names their lead technician "Eli" with credentials; it is the most humanising thing any competitor does. We have 122 real photos and not one human face is presented as a person.

**Fix:** homepage review section + `/reviews` page + surface the testimonial video prominently + a "meet the technician" block.

## H5. Mobile header has no phone number on small screens

`components/layout/site-header.tsx`: the phone link is `hidden md:inline-flex` and the Free Estimate button is `hidden sm:inline-flex`. On a phone under 640px the header is **logo + hamburger only**.

The bottom sticky bar catches this, but the header is where users look first, and the top-of-page moment is the highest-intent moment. **Fix:** show a phone icon button in the mobile header at all breakpoints.

## H6. Desktop has no persistent CTA

`StickyCallBar` is `md:hidden`. On desktop, once past the hero, the only CTA is the sticky header — a small outline button. Competitors with worse design still keep a phone number screaming at you.

**Fix:** a compact desktop call rail or a scroll-triggered floating call card after 40% scroll depth.

## H7. Gallery page ships 122 images and 25 videos in one document

Verified 686 KB of HTML earlier. Every blur data-URI, every poster, all inline. Zero pagination, zero filtering.

The spec called for a **searchable gallery with filters by gate type, city and repair**. What shipped is an unfiltered wall. **Fix:** filter chips + pagination or virtualised loading.

## H8. Missing entire content types that were specced

Not built: before/after slider · project case studies · `/reviews` · `/faq` hub · blog · knowledge centre · financing · live status banner · appointment scheduler · "recent repairs near you".

Several of these are listed in `BUILD-PROMPT.md` as deliverables. The before/after slider in particular is a proven high-engagement element for this trade and the asset library supports it.

---

# 🟡 MEDIUM

- **M1.** `--font-display` is set to the literal `"Space Grotesk"` rather than `var(--font-display-loaded)`. It resolves correctly (verified — next/font declares that exact family), but it bypasses the metric-matched `Space Grotesk Fallback`, so there is avoidable CLS during swap. One-line fix.
- **M2.** Logo uses `next/image` while everything else uses `ResponsiveImage` — two image pipelines, and the logo pays for runtime optimisation of a 16 KB asset. Serve it directly.
- **M3.** City page paragraph splitting uses a regex that groups sentences in pairs (`app/[citySlug]/page.tsx`). It produces arbitrary paragraph breaks. Author paragraphs as an array in the data instead.
- **M4.** Brand pages for DoorKing, Linear and HySecurity have no photography and no video, so they render as text-only pages that look unfinished next to FAAC. Either get photos or de-emphasise them in the nav.
- **M5.** `next.config.ts` redirects `/gate-repair` → `/services/gate-repair`, which does not exist. The slug is `gate-motor-repair`. Broken redirect shipped.
- **M6.** No `loading.tsx`, no custom `not-found.tsx`. A 404 on a local service site should offer the phone number and the service-area list, not a bare Next default.
- **M7.** No breadcrumb UI — breadcrumb *schema* is emitted but users never see the trail. Free navigation and orientation win.
- **M8.** Hero `<h1>` is the only above-fold text with weight. No subhead differentiation, no eyebrow, no proof. Compare with Star Gate, which puts four trust chips directly beneath.
- **M9.** No analytics, no GA4, no call tracking, no conversion events. `GOOGLE-ADS.md` specifies all of it; none is wired.
- **M10.** `PhotoGallery` sets `priority` on the first 4 images of *every* gallery instance — on the gallery page that is 4 × 14 categories = 56 eager images competing with LCP.

---

# 🟢 NICE TO HAVE

- Scroll-reveal animation is entirely absent despite Framer Motion being installed and shipped in the bundle. Either use it or drop the dependency.
- No dark mode. Defensible for this audience; worth noting.
- No print stylesheet (quotes get printed in this trade).
- Counters/stat animations, magnetic buttons, noise texture, gradient borders — all specced in the original brief, none present. The design is clean but **quiet**; it does not yet feel *handcrafted*, it feels *well-organised*.

---

# Competitor benchmark — honest positions

| Dimension | Shield today | Best competitor | Verdict |
|---|---|---|---|
| **Embedded video** | 25 clips, poster-first, VideoObject | **none of 14** | 🟢 **Better** — the one true moat |
| **Brand pages** | 10, with real photos on 7 | 4 Sure: 5, stock imagery | 🟢 **Better** |
| **Schema** | LocalBusiness, Service, FAQ, Breadcrumb, VideoObject | none detected on any | 🟢 **Better** |
| **Symptom tables** | on every service page | none | 🟢 **Better** |
| **Page speed** | static, 105 KB shared JS | WordPress + Elementor | 🟢 **Better** |
| **Typography & spacing** | Space Grotesk/Inter, 8px system | Metro/J&J templated | 🟢 **Better** |
| **Real photography** | 122 originals | Metro & J&J 100% stock | 🟢 **Better** |
| **Service page depth** | 1,200–1,500 w | Star Gate 1,100 w, better written | 🟡 **Equal** |
| **City page count** | 190 (176 hollow) | Garage Tec 150, Metro 50 | 🟡 **Equal at best** |
| **City page quality** | 950 w Tier 1 | 4 Sure 2,100 w / 20% local | 🔴 **Worse in absolute depth** |
| **Trust signals** | **2 items, no reviews** | Everlast: reviews, BBB, licence, background checks | 🔴 **Much worse** |
| **Social proof** | **none** | Everlast 8 video testimonials | 🔴 **Much worse** |
| **Pricing transparency** | table of `—` | automaticgaterepairdallas: "$45" | 🔴 **Worse** |
| **Offer** | none | Metro: `$200 OFF NEW GATE OPERATOR` | 🔴 **Worse** |
| **Sitemap/robots/OG** | **none** | all competitors have them | 🔴 **Worse** |
| **Legacy redirects** | **all 404** | n/a | 🔴 **Critical** |

---

# Scores — brutally

| Category | Score | Why |
|---|:-:|---|
| Visual Design | **7.5** | Clean, disciplined, restrained. But quiet — no signature moment, no memorable element. Not yet "handcrafted". |
| Premium Feel | **7** | Near-black + gold is right. Undermined by empty sections and placeholder dashes. |
| Trust | **2** | Two trust chips. Zero reviews. Zero faces. The core brief failure, repeated. |
| Professionalism | **6** | Undercut by `—` prices and unfinished brand pages. |
| Mobile UX | **6.5** | Sticky bar is good. No header phone under 640px. Long scroll, no anchors. |
| Desktop UX | **6.5** | No persistent CTA. Long unbroken scroll. |
| SEO (technical) | **4** | No sitemap, no robots, no OG image, all legacy URLs 404. Schema is excellent — everything around it is missing. |
| Local SEO | **3.5** | 14 genuinely good pages; 176 hollow ones that are a liability. No maps, no local projects, no local reviews. |
| Copywriting | **8** | Genuinely strong. Symptom tables and the repair-vs-replace honesty are the best content in this market. |
| Accessibility | **4** | Broken labels on the conversion form. Good semantics elsewhere. |
| Performance | **8.5** | Static, small JS, poster-first video, no runtime image optimisation. Gallery page is the outlier. |
| Lead Generation | **5** | Excellent form. No reviews, no offer, no urgency, weak desktop CTA. |
| Conversion Rate | **4.5** | The 5-second test fails on trust. |
| Brand Identity | **6.5** | Palette and logo work. No brand voice artefacts, no signature visual device. |
| **OVERALL** | **5.5 / 10** | A strong technical foundation with two real weapons, carrying six defects that a client would spot in the first minute. |

---

# The answer to your question

> *"If this website competed against the top Dallas Gate Repair companies today, would I confidently rank it as the #1 website?"*

**No. Not today. Not close.**

Three reasons, in order of severity:

**1. It fails the exact test the WordPress site failed.** The brief said the old site "lacked trust" and "failed to impress within the first 5 seconds". A Dallas homeowner landing on this homepage sees a good headline, two buttons, and *no evidence anyone has ever hired this company*. No rating. No review count. No licence number. No face. Everlast — a demonstrably uglier site — answers all four above the fold. On the only metric that matters in the first five seconds, **we currently lose to the competitor we were built to beat.**

**2. 176 of the 190 city pages are a liability, not an asset.** I wrote the document explaining why templated location pages get sites suppressed, and then shipped 176 of them. Right now the city-page strategy is a net negative on a domain that is also being repointed from California to Texas.

**3. It is unfinished in ways a client will see immediately.** A pricing page of em-dashes. Every social share with no preview image. Three brand pages with no photos. A gallery with no filters. These are not subtle.

**What is genuinely excellent, and worth protecting:** the video strategy is a real, verified, uncontested moat — *zero* of fourteen competitors embed any video and we have 25 clips wired to VideoObject schema. The FAAC / All-O-Matic / Ramset brand pages target demand nobody in DFW is serving. The symptom tables are the best service-page content in this market. The copy is better than Star Gate's, and Star Gate has the best copy of any competitor. The technical foundation — static rendering, 105 KB JS, AVIF at five widths — beats every WordPress competitor outright.

**The gap between 5.5 and 9 is not a redesign.** It is: one phone call to the client for real numbers, a review section, 176 pages unpublished, a redirect map, a sitemap, and a form label fix. That is roughly **two focused days**, and most of it is blocked on facts only the client has.

Ship the 14 great city pages, not the 190 hollow ones. Get the review count. Then this competes.
