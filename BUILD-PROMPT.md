# MASTER BUILD PROMPT — Shield Gate Repair

Paste everything below the line into Claude Code / Cursor in the project root.
Every claim was verified against 14 live competitor sites, including page-level teardowns of their city pages, service pages and pricing content.

**Companion documents — read them, they are the spec:**
| File | What's in it |
|---|---|
| `STRATEGY.md` | Market position, the California/DFW geo conflict, asset inventory, blocking questions |
| `COMPETITOR-INTELLIGENCE.md` | Page-level teardowns, copy patterns, pricing intel, trust scoreboard |
| `CITY-PAGES.md` | Data model and rules for 170+ genuinely unique city pages |
| `COPY.md` | Written copy — homepage, service, brand, city, pricing, forms, meta patterns |
| `GOOGLE-ADS.md` | Campaign structure, keywords, RSA assets, negatives, tracking |

**All page copy comes from `COPY.md`.** Do not write new marketing prose — the voice, the banned-phrase list and the worked examples are already there.

---

You are a team of specialists building a production website: a Staff Next.js engineer, a senior UI/UX designer, a technical SEO lead, a local-SEO consultant, a CRO specialist, an accessibility engineer, and a performance engineer.

## The business

**Shield Gate Repair** — automatic gate repair, installation and service across the Dallas–Fort Worth metroplex.
Domain: `shieldgaterepair.com`, currently WordPress, being replaced.

Single goal: **generate phone calls and quote requests.** Every decision serves that. The visitor has a broken gate, is stressed, is usually on mobile, and decides in 5–10 seconds whether to trust these people on their property. Design for that person, not for a portfolio.

## Competitive reality — this determines the build

Twelve DFW competitors were audited live. The market leaders:

- **everlastgates.com** (735 rev) — best trust stack: 2,600+ reviews, BBB A+, license **B28539401** displayed, background-checked staff. But **no schema, only 3 location pages, no brand pages.**
- **garagetec.org** (875 rev) — 150+ city pages, 25+ service pages. But garage-door-first, **no schema, no video**, SVG placeholders where photos should be.
- **stargateandfence.com** (117 rev) — best copy in the market: *"Dallas Gate Repair & Fence Installation: Same-Day Emergency Service."* Real photos, cost-guide blog. But **almost no city pages and embeds no video** despite having a YouTube channel.
- **4suregates.com** — strongest organic ranker. Brand pages for Viking, Elite, Eagle, LiftMaster, Nice Apollo. But **no FAAC, All-O-Matic, Ramset or DoorKing**, no video, no pricing.
- **a1gateguys.com** — authorized LiftMaster dealer, 41+ city pages. Names Eagle/Viking/DoorKing/All-O-Matic in copy but **builds pages for none of them.** No video.
- **metrogatesrepair.com** (81 rev) — 50+ city pages but **100% stock photography** and zero social proof above the fold.

### The three uncontested gaps — build around these

**1. VIDEO — zero of twelve competitors embed any.** Not one. Shield has **25 real service videos** including brand-specific repair footage and a client testimonial. Embed them properly with `VideoObject` schema and Shield is eligible for video rich results on queries where nobody else is competing. This is the single biggest advantage — treat it as a first-class feature, not a gallery afterthought.

**2. PRICING — nobody publishes repair price ranges.** Two partial exceptions: `automaticgaterepairdallas.com` runs a `Gate Repair – Starts at $45` service-call teaser, and Star Gate has one article giving `$2,500–$7,500` for **installation**. **Repair pricing is completely uncovered.** Publish honest ranges per repair type with a non-binding qualifier. Wins `gate repair cost dallas` and similar outright, and becomes the highest-Quality-Score landing page in the Ads account.

**3. SCHEMA — absent or unverifiable on all twelve, including both leaders.** Comprehensive JSON-LD is cheap and uncontested.

### And the brand-page opening

| Brand | Shield assets | Competitor coverage |
|---|---|---|
| **FAAC** | 6 photos + 1 video | **nobody has a page** |
| **All-O-Matic** | 10 photos + 2 videos | **nobody has a page** |
| **Ramset** | 5 photos + 1 video | **nobody has a page** |
| LiftMaster | 13 photos + 2 videos | A1 / 4 Sure / Garage Tec have pages |
| Viking / Elite / Eagle | 5 / 8 / 5 + video each | 4 Sure Gates has pages |

**FAAC, All-O-Matic and Ramset are wide open and Shield has real photos and video for all three — build these first.** Where competitors do have brand pages, none has brand-specific photography or video, so Shield still wins on evidence.

Do **not** claim authorized-dealer status for any brand. Brand sections read *"brands we service"* unless the client confirms otherwise.

## Architecture

```
Content  → typed .ts/MDX in-repo → generateStaticParams → fully static
MongoDB  → lead capture ONLY (quote requests, callbacks, problem-describer, admin view)
```

Do not put page content in MongoDB — it costs version control, PR review of copy, build speed, and Lighthouse headroom for nothing.

### Stack
Next.js 15 App Router · TypeScript (strict) · Tailwind · shadcn/ui · Framer Motion (light) · React Hook Form + Zod · Mongoose · Embla · next-sitemap · JSON-LD · `next/image` + `next/font`

**Do not add:** GSAP (redundant with Framer Motion), React Query (static RSC — nothing to cache), Cloudinary (images are local and static), Speakable schema (deprecated).

Server Components by default. `"use client"` only for carousels, forms, accordions, before/after sliders, video players, and the sticky CTA bar.

### Structure
```
app/
  (marketing)/page.tsx
  services/[slug]/page.tsx
  brands/[slug]/page.tsx
  [city]/page.tsx
  pricing/, gallery/, projects/[slug]/, reviews/, faq/, contact/, service-areas/
  api/leads/route.ts
components/{ui,sections,shared}/
content/{business.ts,services.ts,brands.ts,cities.ts,faqs.ts,projects.ts,reviews.ts,pricing.ts,media-manifest.ts}
lib/{schema.ts,seo.ts,mongodb.ts,utils.ts}
models/Lead.ts
scripts/process-assets.ts
```

## Step 1 — asset pipeline (first, before any component)

`wordpress-uploads/` holds 5,283 files that collapse to **122 distinct photographs** and **25 videos**. WordPress left 4–6 variants of each (`-300x200`, `-scaled`, `-updraft-pre-smush-original`, `.jpg.webp`, `.bv.webp`).

Write `scripts/process-assets.ts` that:
1. Groups files by basename with all resize/optimizer suffixes stripped
2. Keeps the largest-dimension original per group
3. Emits AVIF + WebP at 400/800/1200/1600 → `public/images/<category>/`
4. Generates blur placeholders into a manifest
5. Renames to SEO slugs — `liftmaster-gate-motor-repair-dallas-03.avif`
6. Transcodes the 25 MP4s (currently 1.8–9.9 MB) to 720p H.264 ≤2 MB + extracts poster frames
7. Writes `content/media-manifest.ts` — category → images → **hand-written alt text**

Distinct photographs / videos per category: Gate Installation 17/2 · LiftMaster 13/2 · Access Control 12/0 · Emergency 11/2 · Iron Gate 10/2 · All-O-Matic 10/2 · Elite 8/2 · Automatic Gate 7/2 · Electric Gate 7/2 · FAAC 6/1 · Commercial 6/2 · Viking 5/1 · Eagle 5/1 · Ramset 5/1 · client testimonial 0/1.

Alt text is written per image, never templated — it's a real image-search asset. **Never use stock or AI-generated imagery.** Real photography is the differentiator; Metro and J&J lost on exactly this.

## Step 2 — homepage

Trust before features. Order matters.

1. **Sticky header** — logo, nav, phone as `tel:`, "Free Estimate"
2. **Hero** — real photo as LCP element (AVIF, `priority`, ~1600px, blur placeholder). H1 pattern proven by the market leaders: geo + service + urgency, e.g. `Dallas–Fort Worth Automatic Gate Repair — Same-Day Emergency Service`. Two CTAs: **Call Now** (primary), **Get Free Estimate**.
   **No full-screen background video** — it destroys LCP. Video's competitive value is below the fold where it can load properly.
3. **Trust bar directly under hero** — real rating + review count, license number, insured, years, service radius, 24/7. All from `content/business.ts`. Everlast and Dallas Automatic Gate both display license numbers; match that. **Never invent these** — see Placeholders.
4. **Video reel — put this high.** No competitor has any video at all. Poster-first, loads on interaction, `VideoObject` schema on each. This is the differentiator; don't bury it at position 12.
5. **Brands we service** — logo grid → brand pages, FAAC / All-O-Matic / Ramset given prominence
6. **Why Shield** — 6 cards: licensed · emergency response · same-day · genuine parts · warranty · experience
7. **Services grid** — the 14 real categories, each with a real photo
8. **Before / after slider** — real projects
9. **Transparent pricing teaser** → `/pricing`. Nobody else in this market does this.
10. **Process** — call → dispatch → diagnose → quote → repair → warranty
11. **Service areas** — map, Tier 1 cities prominent, full list linked
12. **Testimonials** — the real video testimonial + Google reviews
13. **Recent projects** — city, date, problem, solution, photos
14. **FAQ accordion** → **Closing CTA** → **Footer** (services, brands, cities, NAP, hours, social)

**Sticky mobile CTA bar sitewide:** Call · Text · Estimate. No page dead-ends.

## Step 3 — service & brand pages

**14 service pages**, one per real photo category. 1,500–2,500 words of genuinely useful content — symptoms, diagnosis, repair process, parts, timeline, **honest price bands**, real gallery, embedded video where one exists, service-specific FAQs, related services, city links, CTA.

**10 brand pages**, preserving the existing URL slugs (below). Same depth plus: common failure modes for that brand's operators, model families serviced, parts availability, real repair photos of that brand, that brand's video, brand-specific FAQs.

**Build order:** FAAC → All-O-Matic → Ramset (uncontested) → LiftMaster → Elite → Viking → Eagle. DoorKing, Linear and HySecurity have **no photos in the library** — keep them thinner and lower priority, or get real photos. Do not pad them with stock.

## Step 4 — city pages: all 170+ cities get their own page

**Full spec in `CITY-PAGES.md` — follow it exactly.** Every city on the client's list gets a real page. Tiers govern depth and launch order, not existence.

The competitor bar is far lower than their page counts suggest: Metro's Plano page is 3,000 words and **~5% genuinely local**; 4 Sure's is 2,100 words and ~20%; A1's Dallas page is 850 words. **Target 1,200–1,800 words at 40–50% local.** Shorter pages with more unique content — do not pad to match their word count.

Uniqueness comes from the `City` data model in `CITY-PAGES.md`, not from paraphrasing. The three fields that carry it:
- **`gateProfile`** — what gates are actually common in that city, which brands, which failure modes. Sourced from a technician interview with the client. No competitor has this and no AI can invent it.
- **`localAngle`** — 2–4 sentences true only of that city.
- **`responseBand`** — honest drive-time band. Zero competitors publish response times.

- **Tier 1 — 15 cities**, 1,500–1,800 words, launch week 1
- **Tier 2 — ~40 cities**, 1,200–1,500 words, weeks 2–3
- **Tier 3 — ~110 cities**, 700–900 words, weeks 4–6

Ship in three waves, not all at once. **A short honest page is safe; a long templated one is a liability.**

**Write `scripts/validate-cities.ts` and run it in CI before writing the tenth city page.** It must fail the build on: any >20-word sentence shared between two city pages, fewer than 3 named neighborhoods (Tiers 1–2), missing `responseBand`, fewer than 3 FAQs, `localAngle` under 100 words, or a reused FAQ answer. This script is what keeps 170 pages defensible.

## Step 4b — pricing hub (`/pricing`)

The largest content gap in the market. One competitor publishes a `$45` service-call teaser; one has a single article giving `$2,500–$7,500` for installation. **Nobody publishes repair price ranges.**

Build honest bands per repair type with this qualifier at top and bottom, repeated verbatim in pattern:
> *These are preliminary ranges for planning purposes, based on jobs we've completed across DFW. They are not a binding quote.*

Copy is written in `COPY.md §5`. This page also becomes the highest-Quality-Score landing page in the Ads account.

## Step 5 — SEO & migration

Per page: unique title + meta description, canonical, OG + Twitter cards, breadcrumbs.

JSON-LD via `lib/schema.ts`:
- `LocalBusiness` / `HomeAndConstructionBusiness` — real NAP, hours, geo, service area — sitewide
- `Service` on service and brand pages
- `FAQPage` wherever FAQs appear
- `BreadcrumbList` sitewide
- **`VideoObject` on all 25 videos** — uncontested, highest-leverage schema here
- `AggregateRating` / `Review` **only with real verifiable data**
- `ImageObject` on gallery items
- `Offer` / price ranges on pricing content

### Migration — read carefully

The existing sitemap has **45 pages**, and **14 of them target California** (Los Angeles, Orange, Ventura, San Bernardino, Riverside, Santa Barbara, San Luis Obispo, Kern, Imperial counties, Fresno). Only **one** targets DFW.

**Confirm with the client whether California is a live market before mapping redirects.** If DFW is the real market, do not redirect California geo pages into Dallas pages — a geographic relevance mismatch does more harm than retiring them cleanly.

**301 these to identical new slugs** — they're well-formed and carry whatever topical authority exists:
```
/liftmaster-gate-motor-repair/   /viking-gate-motor-repair/    /faac-gate-motor-repair/
/all-o-matic-gate-motor-repair/  /elite-gate-motor-repair/     /eagle-gate-motor-repair/
/ramset-gate-motor-repair/       /doorking-gate-repair/        /linear-gate-motor-repair/
/hysecurity-gate-motor-repair/
/gate-installation-services/     /iron-gate-repair-services/   /electric-gate-repair-services/
/commercial-gate-repair-services/ /emergency-gate-repair-services/
/automatic-gate-repair-services/ /gate-motor-repair-services/  /gate-repair/
/about-us/  /gallery/  /testimonials/  /contact-us/  /locations/  /services/  /privacy-policy/
```

`next-sitemap` for sitemap + robots. Strong internal linking: services ↔ brands ↔ cities ↔ projects ↔ pricing. No orphans.

## Step 6 — performance

Target: **Perf 90–95 mobile / 98–100 desktop · A11y 100 · Best Practices 100 · SEO 100.** That beats every site audited. Don't chase mobile 100 by stripping media — the media *is* the strategy.

- LCP < 2.0 s · CLS < 0.05 · INP < 200 ms
- Hero image `priority`; everything else lazy with explicit dimensions
- `next/font`, self-hosted, subset, `display: swap`
- Video: poster-first, `preload="none"`, load on interaction
- Maps and embeds: facade pattern, load on click
- Route-level code splitting, minimal client JS

## Step 7 — design

Stripe/Linear/Vercel restraint applied to a trade business. Premium and calm — flashy reads as untrustworthy to someone with a broken gate at 9 pm.

- **Palette:** deep navy base, white, one gold/amber accent reserved exclusively for CTAs, success green for trust markers. The accent colour appears only on things you want clicked.
- **Type:** one display face (Space Grotesk or Plus Jakarta Sans) + Inter for body. Generous scale, tight headline leading, ~65ch measure.
- **Space:** 8px system, large section padding, honest whitespace.
- **Motion:** subtle scroll reveals, hover lifts, counters — all under 300 ms, all respecting `prefers-reduced-motion`.
- **Mobile-first.** Emergency traffic is mobile. Thumb-reachable CTAs, no horizontal scroll, tap targets ≥44px.

## Accessibility — non-negotiable

Semantic landmarks · one H1 per page · logical heading order · WCAG AA contrast (verify gold-on-navy specifically) · visible focus rings · full keyboard operation · ARIA on accordions, carousels and sliders · labelled fields with errors tied via `aria-describedby` · `alt` on every image · captions on all 25 videos.

## Lead capture

`POST /api/leads` → Zod validation → Mongoose `Lead` model. Fields: name, phone, email, city, service, gate brand, urgency, message, source page, UTM, timestamp. Honeypot + rate limiting. Graceful failure — never lose a lead to a JS error. Confirmation state reinforces the call CTA.

Include the **"Describe Your Gate Problem"** guided form — a few questions that suggest likely causes before submission. Converts better than a blank textarea and no competitor has anything like it.

## Placeholders — flag, never invent

Not present in the assets. Put in `content/business.ts`, each marked `TODO: CONFIRM`, with a dev-only visible warning when unset. Do not ship guessed values:

- Real Google review count and rating
- **Texas DPS Private Security Bureau license number** — Everlast shows `B28539401`, Dallas Automatic Gate shows `B26253101`; gate/access-control work requires one
- Insurance carrier / bonded status
- Actual years in business
- Physical address for `LocalBusiness` schema
- Real average response time
- Authorized-dealer status for any brand
- Whether the client will publish price ranges

**Phone number:** the live site uses **+1 (800) 770-9642**. Every credible competitor uses a local area code — Everlast `469`, Metro `972`, Star Gate `469`, Dallas Automatic Gate `972`, A1 `469`. A toll-free number reads as an out-of-state call centre and weakens local relevance and trust. Make the primary display number swappable in `content/business.ts`, and flag to the client that a local DFW number is likely a bigger conversion lever than anything else here.

## Delivery order

**Demo:** asset pipeline → design system → homepage (with video reel high on the page) → 3 service pages → **FAAC, All-O-Matic and Ramset brand pages** → 3 city pages → working call/form CTAs. Proves the design direction and both moats.

**Then:** remaining service and brand pages → Tier 1 + 2 cities → pricing hub → gallery → project case studies → full schema → sitemap → 301 map → GoDaddy cutover.

## Built for Google Ads as well as organic

Every page is a paid landing page. Two of Quality Score's three inputs are page-side (ad relevance, landing page experience), and every competitor points ads at slow templated WordPress pages.

- **Ad group → matching page, always.** Never send paid traffic to the homepage.
- **The page H1 must match the ad headline.** `GOOGLE-ADS.md` maps every ad group to its landing page — build those URLs to match.
- Phone above the fold and a sticky mobile call bar on every landing page.
- The `Lead` model must capture `gclid`, all UTMs, and landing page — keyword-level ROI, not campaign-level.
- Server-side conversion event from `/api/leads` so ad blockers don't hide form conversions.
- **The brand pages are the highest-ROI ad campaign in the account** — `faac gate operator repair` and similar have real intent, high close rates, and zero competing landing pages in DFW.

## Standing rules

- All marketing prose comes from `COPY.md`. Respect the banned-phrase list.
- Real photography only. No stock, no AI images, ever.
- No fabricated trust claims, review counts, credentials, or dealer status.
- Every screen has a call path.
- Written for a stressed homeowner, not for a crawler — the SEO follows from that.
- Type-safe, accessible, production-ready. No `any`, no TODOs in shipped paths.
