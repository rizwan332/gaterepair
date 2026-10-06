# Shield Gate Repair — Lead-Generation Audit & 90-Day Roadmap

**Date:** 3 Oct 2026 · **Scope:** `SEO-baed-website-gaterepair` (main site), `calltoaction-landing-page` (paid LP), live production crawl of shieldgaterepair.com, DFW competitor/SERP research.
**KPI:** qualified calls, form leads and booked repairs — not traffic.

**How to read this.** Every item is tagged:
- **[CODE]** — verified in the repository (file:line).
- **[LIVE]** — measured on production on 3 Oct 2026 (curl crawl of all 269 sitemap URLs + 142 linked non-sitemap URLs).
- **[EXT]** — external research, with source URL.
- **[REC]** — recommendation.

**What could not be measured:** keyword search volumes (no volume source available — none are quoted), PageSpeed/CrUX (Google PSI API returned HTTP 429 quota errors on all three calls), localized Dallas SERPs/map pack (search tool is not geolocated), GA4/Ads/Search Console data (no access), whether the modernized GTM container is published.

No code has been changed. Section J lists proposed changes for approval.

---

## A. Executive Summary — Top 10 Findings

1. **Google Ads conversion tracking is probably broken on the pages Ads sends traffic to.** [CODE] The GTM export noted as live (`GTM-MBBT87D8_v12.json`) triggers phone conversions on `tel:+18007709642` — the retired 800 number — and form conversions on `gtm.formSubmit`, which nothing on the site emits. The modernized container listens for `call_click` / `generate_lead`, but the Ads destinations emit different names: `public/samedaygaterepair.html:1666` pushes `phone_click`, `:1597` pushes `form_submit`, and the landing-page app does the same (`calltoaction-landing-page/components/analytics.tsx:33`, `components/forms/quote-form.tsx:235`). **No container version listens for those.** If Ads is bidding on conversions, it is bidding blind. Verify in GTM Preview before anything else.

2. **There is no call tracking, and calls are the main conversion.** [CODE][LIVE] One static number, `(214) 735-4314`, everywhere (`content/business.ts:61-64`). No CallRail/DNI script exists (a "CallRail" match in the crawl was the site's own `DesktopCallRail` component). Only *tap intent* is measured; calls dialled by hand, calls from GBP, call duration and answered/missed status are invisible.

3. **The trust layer is still empty where competitors are strongest.** [CODE][LIVE] No review count or rating anywhere; "Licensed" with no license number; no address, no GBP link, no review links (0 links to Google Maps/g.page/writereview across 411 pages). `business.ts:134-185`: rating, license, insurance detail, warranty term, address, background checks, dealer status all `confirmed:false`. The homepage comment in `app/page.tsx` records the client has no Google reviews. Competitors show "4.9 · 770+ Google reviews" (Garage Tec), "2,600+ five-star reviews" + license B28539401 (Everlast), "4.7 · 107 Google reviews" (Texas Select). [EXT]

4. **The 18 verified Texas case studies are the strongest asset on the site and are under-optimised.** [CODE][LIVE] Real cities, real operators, real diagnoses, some real prices (Viking refurbished for $3,100 vs. two $6,000+ replacement quotes; commercial impact repair $6,880 vs. $25,000 quoted). But project titles are 31–33 chars with no city or brand ("Eagle Sliding Gate Wheel Repair" — Mesquite is not in the title), pages are ~650 words, and they have only `Service` schema. These should be the backbone of city and brand pages.

5. **Market research in the repo is out of date — several "uncontested gaps" are now contested.** [EXT] Competitors now have schema (nearly all), video (Everlast 8 service videos; Texas Select 7 YouTube embeds; A1 Security Gate & Intercom 2), and Dallas pricing content (A1 Intercom's dated 2026 cost guide; Top Choice emergency price ranges; Gate Repair Pro "$150 to $500"). Strategy must shift from "we have video/schema/pricing and nobody else does" to "we have *brand-, model- and symptom-specific proof from real DFW jobs*".

6. **Genuinely open gaps remain — and Shield is positioned to take them.** [EXT] No DFW gate company offers photo-upload triage; nobody publishes a *gate* service-call fee credited to the repair; nobody has model/error-code pages at Shield's depth (43 model pages); HOA maintenance plans are mentioned (Pro Gate, Garage Tec, Crafter Fence) but nobody publishes tiers; several incumbents are explicitly *not* 24/7 (Lone Legacy: "We are not 24/7"; Metro Mon–Sat 8–6; A1 Gate Guys closed Sundays).

7. **No segmented funnel for commercial/HOA — the highest-value buyers.** [CODE] Every CTA is either "Call" or "Request Service/Free Estimate → /contact". No property-type field, no "number of gates", no maintenance-contract path, no property-manager CTA. The one form on /contact hard-codes `sourcePage="/contact"` (`app/contact/page.tsx:83`), so you can't even tell which page produced the lead.

8. **Lead data loss in the pipeline.** [CODE]
   - `/samedaygaterepair` (2-step form) posts to the main `/api/leads`, which has no `stage`/`leadId` handling → **two lead records + two emails per submission**.
   - `models/Lead.ts` drops `visitorId`, `fbclid`, `ttclid`, `msclkid`, `utmContent` that the API accepts.
   - Every step-1 lead from the landing app/static page is flagged EMERGENCY (`quote-form.tsx:85` defaults `urgency` to `'emergency'`).
   - The 3-second "bot" check silently advances a fast human (autofill) to step 2 *without sending the lead* (`quote-form.tsx:182-185`).

9. **Local SEO architecture is sound, with specific leaks.** [CODE][LIVE] 200 city pages; 96 indexed with real local modules, 104 `noindex`. Sitemap is clean (269 URLs, all 200, self-canonical, 0 duplicate titles/H1s). City-to-city 5-word Jaccard similarity is 0.38–0.47 (31 paragraphs identical across 6 sampled pages). Leaks: sitemap `lastmod` is the build time on every URL (`lib/sitemap.ts:240-241`); the 104 empty pages are linked from hubs; `sr-only` keyword text is injected into ~96 link anchors per brand/service page; "Seen here" operator badges are driven by drafted, not interview, data (`content/cities.ts:17-20` vs `app/[citySlug]/page.tsx:85-87`).

10. **Several quick technical fixes are still open from earlier audits.** [CODE] No `app/not-found.tsx` (404 is a dead end with no phone CTA); the `/emergency-gate-repair-services/` legacy URL 301s to `/services/emergency-gate-repair` instead of `/emergency` because the generated rule (`next.config.ts:60-66`, from `content/services.ts:105`) shadows the explicit one (`:88`); four below-fold gallery images load with `fetchPriority=high` (`components/sections/photo-gallery.tsx:41`); header says "All 190 cities" while there are 200 (`site-header.tsx:134`); `/about-us` → `/` instead of `/about`.

---

## B. Current Website Architecture [CODE]

### Stack
| Layer | Implementation | Files |
|---|---|---|
| Framework | Next.js 15.1 App Router, React 19, TypeScript, Tailwind v4 | `package.json` |
| Rendering | Fully static (SSG) via `generateStaticParams`; content in typed `.ts` files | `content/*` |
| Hosting | Netlify (Next runtime); cache headers + `/samedaygaterepair` rewrite in `netlify.toml` | `netlify.toml` |
| Media | CloudFront CDN via `NEXT_PUBLIC_CDN_URL`; hand-built `<picture>` AVIF/WebP; self-hosted MP4 with click-to-play facade; YouTube as lazy thumbnails linking out | `lib/cdn.ts`, `components/ui/responsive-image.tsx`, `components/ui/lazy-video.tsx` |
| Database | MongoDB (Mongoose) for leads, events, review requests only | `lib/mongodb.ts`, `models/*` |
| Lead delivery | `/api/leads` → Mongo + Brevo email in parallel | `app/api/leads/route.ts`, `lib/brevo.ts` |
| First-party analytics | `/api/events` beacon for tel/sms clicks; salted IP hash; server-side source classification | `app/api/events/route.ts`, `lib/attribution.ts`, `lib/page-type.ts` |
| Admin | `/admin` lead dashboard, scrypt hash + HMAC cookie, CSV export | `app/admin/*`, `lib/admin-auth.ts`, `lib/lead-report.ts` |
| Review requests | `/api/review-requests` + `/r/[token]` — **not functional** (SMS stub, email never sent, GBP link unconfirmed) | `lib/review-requests.ts:104-110`, `app/r/[token]/route.ts` |
| Tag management | GTM `GTM-MBBT87D8` inline in `<head>`; fires GA4 `G-BFR37L657V` and Ads `AW-18000649811` | `app/layout.tsx:150-160`, `content/business.ts:111` |
| Schema | `lib/schema.ts`; Organization site-wide (upgrades to LocalBusiness only when address confirmed); Service, FAQPage, BreadcrumbList, VideoObject (watch pages only) | `lib/schema.ts` |
| Sitemaps | Index + 8 sections, video sitemap extension | `app/sitemap.xml/route.ts`, `app/sitemaps/[section]/route.ts`, `lib/sitemap.ts` |
| Redirects / 410 | 301 map in `next.config.ts`; 410s for retired California + WordPress crawl traps in `middleware.ts` | |
| Quality gates | Build-time validators for city duplication, model/symptom thinness, linking, 410 safety, meta length | `scripts/validate-*.ts`, `lib/model-quality.ts`, `lib/symptom-quality.ts` |

### Page inventory (built routes)
| Template | Route | Pages | Indexed |
|---|---|---|---|
| City | `/gate-repair-<city>-tx` | 200 (15 T1 / 64 T2 / 121 T3) | 96 |
| Service | `/services/[slug]` | 8 | 8 |
| Brand | `/brands/[slug]` | 17 | 17 |
| Model | `/brands/[slug]/[model]` | 43 | 43 |
| Symptom | `/gate-problems/[slug]` | 20 + hub | 21 |
| Case study | `/projects/[slug]` | 36 (18 client-verified TX jobs) | 36 |
| Video watch page | `/repair-videos/[slug]` | 33 | 33 |
| Ads landing pages | `/faac-gate-repair`, `/viking-gate-repair`, … | 6 | 1 (`/faac-gate-repair`) |
| Static | home, about, contact, emergency, faq, warranty, testimonials, service-areas, hubs, privacy | 13 | all |
| Static HTML Ads page | `/samedaygaterepair` | 1 | yes |

**No brand×city or service×city URLs exist** — by design (`BRAND-CITY-ARCHITECTURE.md`); brand/model links are injected into city pages instead (`lib/city-links.ts`).

### The current funnel [CODE][LIVE]

```
Google organic / Ads / GBP
  → Landing: home | city | service | brand | model | symptom | project | /samedaygaterepair | LP app
  → Proof: video testimonial carousel, case studies, brand logos, "Licensed & Insured · 16+ Years · 24/7"
  → CTA:
      tel:+12147354314  (header, hero, sticky mobile bar, desktop rail, closing, footer)  → call_click (+ /api/events beacon)
      sms:+12147354314  (sticky mobile bar, emergency page, mobile drawer)                  → sms_click (no GTM trigger)
      "Request Service" / "Free Estimate" → /contact form (home, city, service, brand pages)
      inline form       (model, symptom, Ads LPs, /contact)                                → generate_lead
  → Lead: Mongo `leads` + Brevo email to office
  → Office calls back. No CRM, no booking, no job-outcome feedback to Ads.
```

---

## C. Technical SEO Audit

### What is in good shape [LIVE]
All 269 sitemap URLs return 200 with self-referencing canonicals, `index,follow`, exactly one H1, unique titles/descriptions/H1s, valid JSON-LD. Legacy WordPress URLs 301/308 correctly; retired California URLs return 410 with `X-Robots-Tag: noindex`. Watch pages server-render a real `<video>`; YouTube is facaded; fonts are self-hosted with `display:swap`. Hero LCP image is preloaded AVIF (90 KB at 800w).

### Problems

| # | Severity | Issue | Evidence | Fix |
|---|---|---|---|---|
| T1 | High | Sitemap `lastmod` = build time for all 269 URLs; Google learns to ignore it | `lib/sitemap.ts:240-241, 265, 282-292`; [LIVE] all `2026-10-01T19:12:3xZ` | Per-entry `lastModified` from content dates (case study `completedOn`, video `uploadDate`, git mtime) or omit `<lastmod>` |
| T2 | High | No custom 404 — dead end, no phone; also inherits `canonical:'/'` and emits two conflicting robots metas | no `app/not-found.tsx`; `app/layout.tsx:57`; [LIVE] 404 shows `noindex` and `index,follow` | Add `app/not-found.tsx` with call CTA, symptom links, service areas; move canonical out of layout |
| T3 | High | Business entity typed two ways: `Organization` on 268 pages, `HomeAndConstructionBusiness` on `/samedaygaterepair`, different phone formats; no address/geo/GBP `sameAs` | `lib/schema.ts:41-45`; [LIVE] | One `@id` node everywhere; as a service-area business, use `HomeAndConstructionBusiness` with `areaServed` and no street address; add GBP URL to `sameAs` once supplied |
| T4 | Medium | `/emergency-gate-repair-services/` legacy URL lands on the wrong page | `content/services.ts:105` generates a rule at `next.config.ts:60-66` that wins over `:88` | Drop `legacyPath` from the emergency service, so the `/emergency` rule fires |
| T5 | Medium | Hidden `sr-only` keyword spans inside ~96 link anchors per brand/service page | `app/[citySlug]/page.tsx:370,387,531`; `app/brands/[slug]/page.tsx:382`; `app/services/[slug]/page.tsx:362` | Remove hidden keyword text; make the visible anchor descriptive ("Gate repair in Plano") |
| T6 | Medium | 104 zero-content city pages are linked from `/service-areas` and county peers (crawl waste; site-quality signal) | `content/cities.ts:3538`; `app/service-areas/page.tsx:134` | Keep `noindex`, but render T3 cities as plain text (no link) on hubs until enriched; drop out-of-metro T3 counties (Comanche, Eastland, Palo Pinto, Somervell) unless the client actually serves them |
| T7 | Medium | Tier 3 cities can be indexed with no neighbourhoods (19 indexed pages) | `content/cities.ts:3611-3619` | Apply Tier 2 depth checks to Tier 3 |
| T8 | Medium | "Seen here" / operator mix on city pages presented as technician data but is drafted | `content/cities.ts:17-20, 767-772` vs `app/[citySlug]/page.tsx:85-87` | Replace with case-study-derived data (see §D), or soften to "operators we service" |
| T9 | Medium | Below-fold gallery images use `priority` (eager + `fetchPriority=high`), competing with LCP | `components/sections/photo-gallery.tsx:41` | `priority={false}` |
| T10 | Medium | City/service heroes are a 400px-wide source stretched to 100vw, no preload | [LIVE] Plano hero `automatic-gate-repair-03-400.webp` | Use full srcset and preload, as the homepage does |
| T11 | Medium | Visible breadcrumbs only on model/symptom/watch pages; BreadcrumbList schema on ~20 templates | e.g. `app/[citySlug]/page.tsx:489-493` | Render visible breadcrumbs site-wide |
| T12 | Medium | Weak titles on money pages: emergency service page title omits "emergency gate repair"; case-study titles lack city/brand | `content/services.ts:107`; `content/case-studies-client.ts` `seoTitle` | e.g. "Emergency Gate Repair Dallas–Fort Worth \| 24/7"; "Eagle Slide Gate Wheel Repair — Mesquite, TX" |
| T13 | Medium | Middleware runs on nearly every request (adds edge time to TTFB; measured TTFB 0.5–0.96s) | `middleware.ts:166-168` | Narrow matcher to `.html`, nested `sitemap.xml`, California prefixes |
| T14 | Low | "All 190 cities" in header vs 200 actual | `components/layout/site-header.tsx:134` | Derive from `cities.length` |
| T15 | Low | `/about-us` → `/` although `/about` exists | `next.config.ts:69` | Point to `/about` |
| T16 | Low | `http://www` → 2-hop redirect chain | [LIVE] | Netlify domain setting: redirect straight to `https://` apex |
| T17 | Low | `/r/` (review redirects) not disallowed; `gate-problems` missing from middleware `LIVE_SEGMENTS` (not exploitable today) | `app/robots.ts:42-58`; `middleware.ts:71-99` | Add both |
| T18 | Low | One OG image site-wide | `lib/seo.ts:122-128` | Per-template `opengraph-image.tsx` (city/brand/project with real job photo) |
| T19 | Low | City pages repeat first two `localAngle` sentences in hero and body | `app/[citySlug]/page.tsx:190-191, 205` | Separate `heroIntro` field |
| T20 | Low | `/testimonials` (24 videos) has no VideoObject; videos are YouTube-hosted | [LIVE] | Leave VideoObject to YouTube for those; link each to a case study where possible |

### Core Web Vitals
**Not measured** — PSI returned 429. Measured directly [LIVE]: TTFB 0.5–0.96s; homepage HTML 435 KB raw / 36 KB compressed, of which 225 KB is inline RSC payload; 87 `<img>` on the homepage. Prior `PERFORMANCE-AUDIT.md` attributed 83% of TBT to the GTM tag stack (still open; container-side). [REC] Rerun PSI with an API key; keep video poster-first (already done); trim the GTM container (remove dead Elementor-era tags); fix T9/T10/T13.

---

## D. Local SEO Audit

### Geography [CODE]
200 cities across 24 counties. Header nav lists 15 Tier 1 cities: Dallas, Fort Worth, Plano, Frisco, McKinney, Irving, Garland, Arlington, Richardson, Carrollton, Mesquite, Denton, Rockwall, Allen, Grand Prairie. Prosper, Southlake, Lewisville, Grapevine and the other cities in the brief all exist as indexed pages.

### Is the city structure useful or a doorway risk?
- **Indexed pages carry real local modules** [CODE][LIVE]: `localAngle` (103–206 words, median 152), neighbourhoods, zips, landmarks, routes, city FAQs, and city-tagged case studies and videos. Krum's page talks about combines, grain trucks and chaff fouling tracks; Dallas's talks about clay-soil post movement. That is genuine differentiation.
- **Shared boilerplate is about 40–45%** [LIVE]: 5-word Jaccard 0.38–0.47; 31 identical paragraphs across six sampled pages (testimonial carousel, brand roster, "Getting to you", project cards). Competitor comparison using a different metric (overlap coefficient) [EXT]: Shield Dallas vs Plano 0.62; 4 Sure 0.93; Texas Select 0.98; Garage Tec 0.26.
- **The weakest point is first-hand evidence.** Much `localAngle` copy is municipal history and geography rather than "jobs we did here". Only about 12 of 96 indexed cities have a verified case study (Mesquite, Frisco, Dallas, University Park, Richardson, Wills Point, Southlake, Fort Worth, Prosper, Coppell).

**[REC] Make city pages earn their index slot with job evidence, not more words.**
1. **City proof block above the fold** when a verified job exists: "Recent job in Richardson: Viking refurbished, $3,100 vs. two $6,000+ replacement quotes" → case study link. Data already exists in `content/case-studies-client.ts` (`citySlug`).
2. **Index gate v2:** a city is indexable only if it has ≥1 verified job *or* T2-level local depth. Cities with jobs get promoted automatically as the client sends case studies.
3. **Operator mix from jobs, not drafts:** derive "operators we've serviced near {City}" from case studies and video tags by county; remove unverified "Seen here" badges.
4. **Commercial/HOA module** on Tier 1 cities with a real list of property types (apartments, HOA entrances, industrial). Only list named communities if the client confirms actual work.
5. **Response time:** `responseBand` is empty for every city. Publish only if the client gives measured numbers (the client removed the "30–60 min" claim on 6 Aug).

### Combination pages — which deserve URLs
| Combination | Verdict | Reason |
|---|---|---|
| Service × city (e.g. "sliding gate repair Plano") | **No new URLs.** Strengthen city pages with service sections | Intent is served by the city page; 8×96 = 768 near-duplicates would be a scaled-content risk |
| Brand × city | **Only for top 2–3 brands × Tier 1 metros, and only with ≥2 real jobs** (e.g. LiftMaster Dallas — 7 verified LiftMaster jobs, 4 in Dallas) | SOS Gate Openers and others hold "LiftMaster gate repair Dallas" [EXT]; Shield appeared with its homepage, not a dedicated page |
| Emergency × city | **No.** One strong `/emergency` page with a city selector and live-answer messaging | Emergency intent is answered by phone, not by reading |
| Symptom × city | **No.** Symptom pages are geo-neutral; add a "Recent {symptom} jobs in DFW" block from case studies | |
| Commercial/HOA × metro | **Yes — 2 pages:** `/commercial-gate-repair-dallas`, `/commercial-gate-repair-fort-worth` (or one DFW commercial hub) | Distinct buyer, distinct offer (maintenance contracts, response SLA, invoicing) |

---

## E. Keyword & Search-Intent Research

**No search-volume data was available, so none is quoted.** Verify volumes in Google Ads Keyword Planner and Search Console before prioritising content production. The table below classifies intent and records which domains appeared in non-localized search results [EXT].

| Cluster | Example queries | Intent | Who appeared [EXT] | Shield's page today | Gap |
|---|---|---|---|---|---|
| Core repair, metro | gate repair Dallas, automatic gate repair Dallas | Transactional | 4 Sure, Metro, Lone Legacy, Top Choice, Everlast, Star Gate, Yelp, BBB | Homepage, `/gate-repair-dallas-tx` | Reviews + GBP prominence; no review count |
| Core repair, suburbs | gate repair Plano / Frisco / McKinney / Southlake | Transactional | 4 Sure city pages, exact-match-domain networks (gaterepairfrisco.com, gaterepairmckinney.com — sequential 972 numbers), Angi, Mr. Handyman | City pages | Job evidence per city |
| Emergency | emergency gate repair Dallas, gate stuck open, 24 hour gate repair | Urgent transactional | **shieldgaterepair.com**, Top Choice, Pro Gate, 4 Sure | `/emergency` (867 words), `/services/emergency-gate-repair` (title lacks "emergency") | Title fix; after-hours positioning against non-24/7 incumbents |
| Symptoms | gate won't open/close, opens then closes, stops halfway, remote not working, keypad not working | Problem → hire | Service pages; only texasstatefence.com had a troubleshooting article | 20 symptom pages (2,200–2,700 words) with inline form | Already ahead; add job proof and a photo/text CTA |
| Brand | LiftMaster gate repair Dallas, DoorKing repair Dallas, FAAC repair | Brand-transactional | SOS Gate Openers (LiftMaster), DoorKing of Texas (dealer), Gate Repair Pro | 17 brand + 43 model pages | Strong; DoorKing intent is held by the dealer, so compete on model/error pages |
| Model / error code | LiftMaster CSW24V error, LA400 not working, DoorKing 1835 not dialing | Technical → hire | Almost nobody local | 43 model pages | Error-code pages (see §16) |
| Commercial / HOA / apartments | commercial gate repair Dallas, HOA gate repair Dallas, apartment gate repair | B2B transactional | Mr. Handyman, Metro, Pro Gate, A1 Intercom, **Shield's Dallas city page** | `/services/commercial-gate-repair` | No B2B funnel, no maintenance offer |
| Cost | gate repair cost Dallas, gate motor repair cost | Commercial investigation | A1 Intercom 2026 guide, Top Choice, Angi, Yelp | None (`/pricing` retired → `/contact`) | Contested now, but nobody ties prices to real jobs |

---

## F. Competitor Research (summary — full sources in research notes)

| Competitor | Strength | Weakness Shield can exploit | Source |
|---|---|---|---|
| **4 Sure Gates** | Most frequent in results (7/15 queries); 22 city pages; brand pages (LiftMaster, Nice Apollo, Viking, Eagle, Elite); "Since 2005" | City pages 93% templated; no video, reviews, pricing or online booking | 4suregates.com |
| **Everlast Gates & Fence** | "Over 2,600 five-star reviews", license B28539401, BBB A+, 8 service videos, financing | Install-led; no 24/7; no brand/model depth | everlastgates.com |
| **Garage Tec** | "4.9 · 770+ Google reviews"; most unique city pages (0.26 overlap); "Book Online in 60 Seconds"; call or text; maintenance programs | Garage-door-first; gates secondary | garagetec.org/dallas-tx/dallas-gate-services/ |
| **A1 Security Gate & Intercom** | **New threat.** License B31188501; dated 2026 Dallas cost guide; $125 access-control diagnostic; AI chat assistant; Sunbit financing; ranks for HOA | Access-control/camera led, not operator-repair led | a1gateintercom.com, /blog-gate-repair-cost-dallas |
| **Pro Gate Security** | 24/7, Plano, "Free Inspection"; ranks for emergency + HOA; snippets mention monthly HOA/commercial contracts (unverified) | Thin trust signals | myprogate.com |
| **Lone Legacy** (gaterepairdallas.com) | 46 city pages; asks callers for photos/videos | "We are not 24/7" | gaterepairdallas.com |
| **Metro Gate Repair** | 5 local numbers; "$200 OFF NEW GATE OPERATOR"; BBB accredited | Mon–Sat 8–6; stock photos; garage brands | metrogatesrepair.com |
| **Texas Select Fencing** | Written "3-Year Workmanship Warranty"; separate text number; Hearth financing; 7 YouTube embeds | Install-led; 0.98 city-page overlap | texasselectfencing.com |
| **Gate Repair Local Service** | Coupons, "$89 21-Point Gate Tune-Up", online booking discount | Volume of unverifiable claims ("500+ DFW reviews", "authorized FAAC") | gaterepairlocalservice.com |
| Aggregators | Yelp, Angi, Thumbtack, HomeAdvisor, BBB, Mr. Handyman rank on suburb and "best" queries | — | yelp.com, angi.com |

**What competitors do that Shield doesn't:** visible review counts; license number; GBP/review links; online booking; financing (Everlast, Texas Select, A1 Intercom, J&J); offers/coupons; a published diagnostic fee (A1 Intercom); maintenance programs; BBB accreditation; multiple local numbers.

**What nobody exploits (Shield's openings):**
1. A photo/video upload → preliminary assessment → booked visit flow.
2. A *gate* service-call fee published and credited to the repair, plus a headline written warranty term on repairs.
3. Model + error-code troubleshooting at depth (Shield already has 43 model pages).
4. HOA/commercial maintenance plans with published tiers, plus CAI DFW vendor directory membership (CAI forwards requests to all participating providers in a category within 48 hours — dfwcai.org/Professional_Service_Providers; listing not verified).
5. Owning nights and weekends against non-24/7 incumbents.
6. Cost content tied to real jobs ("this Viking refurbishment cost $3,100") rather than generic ranges.

**Manufacturer locators** [EXT]: LiftMaster's locator listed no gate-repair competitors in what surfaced (JS-rendered, incomplete); DoorKing of Texas (dealer, est. 1983) owns DoorKing queries. Do not claim dealer status (`authorizedDealer` unconfirmed).

---

## G. Lead-Generation Opportunities

### G1. Top 20 ideas, specific to Shield

| # | What to build or change | Why it produces a measurable lead |
|---|---|---|
| 1 | **Fix conversion tracking end to end.** Rename `phone_click`→`call_click` and `form_submit`→`generate_lead` on `/samedaygaterepair` and the LP app; publish the modernized GTM container; add `sms_click` as a secondary conversion | Without this, every other optimisation is unmeasurable and Ads Smart Bidding is starved |
| 2 | **Call tracking with DNI** (CallRail or similar): a pool of local 214/469 numbers swapped by JS for paid traffic only; the static number stays in HTML/schema/GBP | Measures real calls, duration, answered/missed, by landing page and source. NAP consistency kept because the swap is client-side |
| 3 | **"Text us a photo" as a primary CTA on symptom, model and emergency pages** (the `sms:` link already exists) plus a web photo-upload form for desktop | Lowers the barrier for "what's wrong with my gate?" visitors; photos let the office qualify and quote faster |
| 4 | **Commercial/HOA funnel:** `/commercial` hub + "Request a Property Assessment" form (property type, number of gates, operators on site, current vendor, contract interest) + `commercial_lead` event | Separates high-value B2B leads; enables a different follow-up |
| 5 | **HOA/property-manager maintenance plan page** with published tiers (quarterly/semi-annual inspections, priority response, parts discount) — client to set prices | Recurring revenue and a reason for property managers to choose Shield over incumbents; competitors mention plans but publish no tiers |
| 6 | **Published gate service-call fee, credited if repaired** (client decision) on `/emergency`, `/contact`, symptom pages | Removes the "will I get overcharged?" objection; no DFW gate competitor does this |
| 7 | **Job-proof cost guide:** `/gate-repair-cost-dallas` built from Shield's own case studies (Viking $3,100 vs $6,000+; commercial $6,880 vs $25,000) plus honestly cited public ranges | Captures cost-research intent with a "repair not replace" angle; CTA "Get your gate assessed" |
| 8 | **"Second opinion before you replace" offer page** — told you need a new operator? Send photos and the quote | The case studies show this is Shield's actual edge; attracts high-intent visitors already holding a $3k–$25k quote |
| 9 | **Get the Google review engine working:** confirm the GBP review link, wire Brevo email (and an SMS provider) into the existing `/api/review-requests`, ask after every job | Reviews are the biggest local-pack and conversion gap; the system is 80% built |
| 10 | **Case-study-first city pages:** a "Recent job near you" block above the fold where a verified job exists | Local proof right where the "is this company real and nearby?" decision happens |
| 11 | **Retitle and expand the 18 verified case studies** (city + brand + fault in title; problem/diagnosis/repair/outcome; before/after; video; CTA "Same problem? Text us a photo") | Ranks for long-tail "Eagle gate wheels Mesquite" type queries and converts with proof |
| 12 | **Error-code pages** for the top operators (LiftMaster CSW/CSL/LA400/LA500, DoorKing 1812/1835/9150, Elite, Viking, FAAC, US Automatic) with "if you see this code, call" CTAs | Technical, high-intent, almost no local competition; visitors are standing at a broken gate |
| 13 | **Emergency page rebuild:** "Gate stuck open right now?" 3-step safe-to-do checklist (manual release by brand) → Call; after-hours banner "We answer at night — {competitor} doesn't" (no names, just "many companies close at 5") | Emergency visitors need reassurance and a phone number, not 2,000 words |
| 14 | **Intent switcher in the hero:** "Gate stuck now / Schedule a repair / Property or HOA" chips route to call, form or commercial form, and set `lead_intent` | One homepage, three funnels; segmented reporting |
| 15 | **Inline 2-step form on city, service and brand pages** (currently these send visitors to `/contact`, losing context) with page context captured | Fewer clicks; correct source attribution |
| 16 | **Online booking request** with a time-window picker (not a full scheduler at first) | Garage Tec and Gate Repair Local Service have it; homeowners who don't want to call now have a path |
| 17 | **Trust facts sprint (client call):** license number, written warranty term, insurance carrier, background checks — publish only what is confirmed | Every confirmed fact unlocks badges already coded behind `confirmed:true` |
| 18 | **CAI North Texas membership + vendor directory; BBB accreditation; complete Yelp/Angi/Thumbtack profiles with real job photos** | Direct HOA lead channel plus citations; aggregators rank on suburb queries |
| 19 | **YouTube channel optimisation:** retitle videos "{Brand} {Model} {Fault} Repair — {City}, TX", description with phone + case-study link, pinned comment, end screens | YouTube is a second search engine; videos rank in Google video results for brand+fault queries |
| 20 | **Offline conversion import:** stored `gclid` + job outcome (booked/completed/value) uploaded to Google Ads weekly | Lets Ads optimise for booked jobs, not form fills |

### G2. Opportunity matrix (qualitative ratings — no traffic or revenue figures available)

| Opportunity | Target customer | Intent | Lead quality | SEO potential | Conversion potential | Dev effort | Priority |
|---|---|---|---|---|---|---|---|
| Fix GTM/event names | All | — | — | — | Unblocks measurement | XS | **P0** |
| Call tracking + DNI | All paid + organic | All | — | — | High (measurement) | S | **P0** |
| Review engine live | All | — | — | High (local pack) | High | S | **P0** |
| Trust facts published | All | — | — | Med | High | XS (client) | **P0** |
| Commercial/HOA funnel + plans | Property managers, HOAs | B2B transactional | Very high | Med | High | M | **P1** |
| Text/upload photo CTA | Residential, symptom | Problem | High | Low | High | S | **P1** |
| Service fee credited to repair | Residential, emergency | Transactional | High | Low | High | XS | **P1** |
| Case-study optimisation + city proof | Residential | Local | High | High | High | S | **P1** |
| Emergency page rebuild | Emergency | Urgent | Very high | Med | Very high | S | **P1** |
| Inline forms + intent switcher | All | — | High | — | Med–High | M | **P1** |
| Job-based cost guide | Researchers | Commercial | Med–High | High | Med | S | **P2** |
| "Second opinion" page | Holders of replacement quotes | Transactional | Very high | Med | High | S | **P2** |
| Error-code pages | DIY-stuck owners | Technical → hire | Med–High | High | Med | M | **P2** |
| Photo AI pre-assessment | Residential | Problem | High | Low | Med–High | L | **P3** |
| Brand×metro (LiftMaster Dallas only) | Brand searchers | Brand | High | Med | Med | S | **P3** |
| Online booking | Residential non-urgent | Transactional | Med | Low | Med | M | **P3** |
| YouTube optimisation | All | Video | Med | Med | Med | S (ops) | **P2** |
| Offline conversion import | Ads | — | — | — | High (bidding) | M | **P2** |

---

## H. Free Tools — which are worth building

| Tool | Target user | Search intent | Lead quality | Complexity | Verdict |
|---|---|---|---|---|---|
| **"Why won't my gate open?" diagnostic** (symptom → brand → 3 questions → likely causes + "safe to try" + call/text) | Homeowner at a dead gate | Problem queries already served by the 20 symptom pages | High — they have a broken gate *now* | S–M (data exists in `content/symptoms/*`) | **Build.** Repackages existing content into an interactive flow; every result ends in call/text/photo |
| **Repair vs. replace estimator** (operator age, brand, fault, quote received) | Someone holding a replacement quote | Cost/comparison | Very high | S | **Build**, tied to the "second opinion" offer and real case-study outcomes |
| **Gate operator identifier** (photo or visual picker) | Owner who doesn't know their brand | Feeds model pages | Med | M (picker), L (photo AI) | Build the **visual picker** first (logos + photos from the 43 model pages) |
| **Cost estimator** | Researchers | Cost | Med | S, but needs client price bands | **Only once `pricingConfirmed`** — a calculator without real numbers is worse than none |
| **Commercial maintenance checklist (PDF, gated by email)** | Property managers | B2B research | High (B2B) | XS | **Build** — cheap; captures email + property; feeds the HOA plan |
| Emergency checklist / manual-release guide by brand | Gate stuck open at night | Urgent | High | XS (static) | **Build** as part of `/emergency` |
| Maintenance calculator, motor compatibility checker | — | Low or unclear | Low | M | **Skip** — little evidence of demand or lead value |

---

## I. Photo-Based AI Pre-Assessment

**Feasibility.** Vision-capable LLM APIs can describe an uploaded photo, read a visible operator brand or label, and spot obvious damage (bent arm, off-track gate, broken hinge or wheel, missing photo-eye). They cannot reliably diagnose electrical faults (boards, capacitors, limits), which make up much of Shield's case-study history. That makes the realistic value **triage + lead qualification**, not diagnosis.

**Market [EXT].** No DFW gate competitor offers photo upload or AI diagnosis; the nearest is Lone Legacy asking for photos by phone and A1 Intercom's AI chat assistant. Contractor-side AI photo estimating exists (QuoteIQ claims photo-to-quote for garage doors — myquoteiq.com), and consumer video-to-quote startups exist (Local Crew, Seattle — geekwire.com, not verified on page). Podium and Hatch automate texting and calls but have no photo diagnosis.

**Recommended design (phase it):**
1. **Phase 1 (no AI, 1–2 days):** "Send us photos" form — photo of the gate, photo of the operator label, symptom picker, name, phone, zip → stored with the lead and emailed to the office. Fires `photo_lead_submit`. Proves demand cheaply.
2. **Phase 2 (AI, after Phase 1 shows usage):**
   - The vision model returns structured JSON (gate type, visible brand/model, visible damage, confidence).
   - Rules map it plus the symptom answers to existing symptom/model content.
   - The page shows "What we can see" + "Likely causes" + "What to do now".
   - The lead is captured **before** the result shows: name + phone are required to see it.
   - Mandatory disclaimer on every result: *"This is a preliminary, automated assessment based on your photos and answers. It is not a professional diagnosis. A technician must inspect the gate to confirm the cause and price."*
   - Never output a price unless `pricingConfirmed`; never claim safety clearance.
3. **Guardrails:** image size limits, a rate limit in shared storage (the current in-memory limits won't do), no faces or plates stored beyond the job, human review of every lead.

**Will it generate leads?** Likely yes for the "I don't know what's wrong" segment, mainly because it gives a reason to hand over a phone number. Measure with `photo_lead_submit` → booked job rate before investing in Phase 2.

---

## J. Conversion Funnel — Target State

```
SEARCH  (emergency | symptom | brand/model | city | cost | commercial/HOA)
   ↓
RELEVANT LANDING PAGE  (/emergency · /gate-problems/* · /brands/*/* · city · cost guide · /commercial)
   ↓
TRUST / PROOF  — above the fold:
   review count + stars (once real) · license # (once confirmed) · written warranty term ·
   "Recent job near {city}" case-study card · 15-sec repair clip poster
   ↓
SERVICE INFORMATION  — what it probably is, what it costs (job-based), what we do
   ↓
SEGMENTED CTA
   Emergency     → CALL NOW (tel, DNI) · Text a photo
   Residential   → Request Service (inline 2-step form) · Text a photo · Book a window
   Commercial    → Request Property Assessment (B2B form) · Maintenance plan
   ↓
LEAD  — Mongo + email + (CRM) with intent, page, city, service, brand, source, gclid, first/last touch
   ↓
BOOKED JOB  — status + value fed back to Ads (offline conversions) and the admin dashboard
```

### CRO audit by page type [CODE][LIVE]

| Page | Above-fold call | Above-fold form | Text/SMS | Emergency CTA | Commercial CTA | Proof above fold | Main gap |
|---|---|---|---|---|---|---|---|
| Home | Yes (hero + header) | No (→ /contact) | Mobile sticky bar | Top bar link to /emergency | No | Trust strip (no numbers) | Intent switcher; review count; case-study proof |
| City | Yes (PageHero) | No | Mobile bar | No | No | Generic hero image | Local job proof; inline form |
| Service | Yes | No | Mobile bar | No | No (even on the commercial page) | — | Commercial page needs a B2B form |
| Brand / model | Yes | Model: in-page form | Mobile bar | No | No | Model: rich | Error-code entry; photo CTA |
| Symptom | Yes | Inline form | Mobile bar | Partial | No | — | "Text us a photo" prominence |
| /emergency | Yes | No | **Yes** ("Text us a photo") | Yes | No | — | Manual-release checklist; call-first layout |
| /contact | Yes | Yes | — | — | — | — | Single generic form; no property type |
| /samedaygaterepair | 15 tel links, 4 forms | Yes | — | — | Service-card prefill | — | Event names; double lead records |

---

## K. Analytics Plan

### Event taxonomy (one vocabulary on all three surfaces: main site, `/samedaygaterepair`, LP app)

| Event | When | Required params | GA4 key event | Ads conversion |
|---|---|---|---|---|
| `call_click` | Any `tel:` tap or click | `cta_location`, `page_type`, `page_subject`, `lead_intent`, `device_type` | Yes | **Primary** (count: one) |
| `sms_click` | Any `sms:` tap | same | Yes | Secondary |
| `form_view` | Form scrolls into view | `form_id`, `page_type` | No | — |
| `form_start` | First field focus | `form_id` | No | — |
| `form_error` | Validation fail | `form_id`, `error_field` | No | — |
| `generate_lead` | **Server-confirmed** step-1 (name + phone) | `form_id`, `lead_intent`, `page_type`, `page_subject`, `user_data` (enhanced conversions) | Yes | **Primary** |
| `form_complete` | Step 2 saved | `form_id`, `urgency` | No | — |
| `commercial_lead` | B2B form success | `property_type`, `gate_count` | Yes | Primary (separate action, higher value) |
| `photo_lead_submit` | Photo form success | `symptom`, `brand_detected` | Yes | Secondary |
| `emergency_cta_click` | Call from `/emergency` or emergency chip | — | No | — (use `call_click` + `lead_intent=emergency`) |
| `video_play` | Facade click | `video_slug`, `page_type` | No | — |
| `case_study_view` | Project page view | `brand`, `city` | No | — |
| `tool_complete` | Diagnostic/estimator finished | `tool`, `result` | No | — |

Register `page_type`, `page_subject`, `lead_intent`, `cta_location`, `form_id` as GA4 custom dimensions, and add event-parameter tables to the GA4 tags in GTM (currently none are forwarded).

### Lead record (Mongo) — add
`visitorId`, `fbclid`, `ttclid`, `msclkid`, `gbraid`, `wbraid`, `utmContent`, `leadIntent`, `propertyType`, `pageType`, `pageSubject`, `device`, `firstTouch{source,landingPage,at}`, `lastTouch{…}`, `stage`, `status` (new/contacted/booked/completed/lost), `jobValue`. Report in Central time, not UTC (`lib/lead-report.ts:80`).

### Phone tracking without hurting SEO or UX
- Keep `(214) 735-4314` in HTML, schema, GBP and citations (NAP consistency).
- DNI swaps the visible number client-side for paid sessions (and optionally organic landing-page pools), keyed on a session cookie.
- Ads call assets use Google forwarding numbers.
- Calls ≥60s count as a conversion; import call outcomes.

---

## L. Content Strategy (every piece maps to a lead path)

| Content | Example | Lead path |
|---|---|---|
| Symptom × brand answers | "LiftMaster CSW24V gate opens then closes — causes" | Model page → "Same fault? Text a photo / Call" |
| Error codes | "DoorKing 1835 not dialing out after a phone switch" | → "We fix this weekly — call" (sourced from technician knowledge already in model content) |
| Repair vs replace | "Our technician refurbished a 26-year-old Eagle 2000 in Coppell" | Case study → "Second opinion" offer |
| Job-based cost | "What a Viking refurbishment cost in Richardson ($3,100)" | Cost guide → request assessment |
| Commercial | "Apartment gate down at 2 a.m.: what property managers should require from a vendor" | → B2B assessment form / maintenance plan |
| HOA | "HOA entry gate maintenance schedule (checklist PDF)" | Gated download → commercial lead |
| Emergency | "Gate stuck open at night: how to manually release LiftMaster, Elite, Viking, US Automatic" | Safety first → Call now |

**Do not publish** generic "10 tips to maintain your gate" posts with no lead path.

---

## M. Case-Study SEO

**Fields to capture on every job** (the `Project` type in `content/projects.ts` already holds most of them): city ✓, gate type ✓, brand ✓, model (`modelKey`, partial), symptom (in `problem`), diagnosis ✓, repair ✓, before/after photos ✓ (client photo sets), cost where the client agrees (partial), customer outcome, video (some), related service ✓, related city (`citySlug`) ✓, CTA.

**Gaps:**
- `seoTitle` has no city;
- no `completedOn` date shown;
- no visible "Same problem?" CTA tied to the symptom;
- the case study isn't linked from the matching symptom page;
- schema is only `Service`.

**Linking graph [REC]**
```
Case study ─→ /brands/{brand}/{model}   ("More {Model} repairs")
          ─→ /gate-problems/{symptom}    ("Gate doing this too?")
          ─→ /services/{service}
          ─→ /gate-repair-{city}-tx      ("Gate repair in {City}")
          ─→ CTA: Call · Text a photo · Request service (form prefilled with brand+symptom)
And back: city page "Recent job" card, brand/model "Real jobs", symptom "We fixed this in {City}".
```
Schema: keep `Service`; add `Article` with `author` (named technician, once supplied) and `datePublished`; add `VideoObject` only where the video is self-hosted on that page.

---

## N. YouTube / Video SEO

- **Current state [LIVE]:** 33 self-hosted clips each have a watch page with VideoObject and a video sitemap (good). The 24 customer testimonials are on YouTube and shown as thumbnails linking out; `/testimonials` has no schema.
- **Should every video be its own landing page?** Self-hosted repair clips already are. They are thin (~420 words) — expand each watch page with the matching case-study narrative or symptom summary and a strong CTA, *or* link it prominently to its case study. Don't create separate pages for YouTube testimonials. Instead embed each testimonial on its matching case study or city page, where it adds proof.
- **YouTube:**
  - Titles: `{Brand} {Model} {Fault} Repair — {City}, TX | Shield Gate Repair`.
  - Description: first line is the phone number and case-study URL.
  - Chapters: problem / diagnosis / fix.
  - Pin a comment with the phone number.
  - End screen linking to the playlist "LiftMaster repairs in DFW".
  - Shorts for 15–30s clips.
- **Lead path:** video → "Same problem? (214) 735-4314 / text a photo" in the first line of the description and as an on-page CTA beside the player.

---

## O. Trust / E-E-A-T

| Signal | Status | Action |
|---|---|---|
| Years in business | Confirmed: 16+ | Already shown |
| Licensed & insured | Claim confirmed; **no number** | Get the TX license number (competitors show TDLR/PSB numbers B28539401, B31188501) |
| Written warranty | "Written warranty, every job" shown; **term unconfirmed** | Get the term in writing; publish on `/warranty` and next to CTAs |
| Reviews | **None** | Review engine (idea #9); show the count once ≥10 real reviews exist |
| Video testimonials | 24, real | Already the homepage proof; tag each to a city/brand |
| Technicians | No named technician | Name + photo + years for 1–3 techs; author attribution on case studies |
| Address / GBP | None shown; service-area business | Confirm GBP; link to it; GBP URL in `sameAs` |
| Background checks | Unconfirmed | Ask; publish only if true |
| Real job photos | 18 TX jobs with the client's photos; older library is California work (`MEDIA-PROVENANCE.md`) | Prefer TX job photos on TX pages |
| BBB / CAI / chamber | None | Apply |

**Never invent credentials, reviews, awards or response times.** The `Fact<T>` / `confirmed` system in `content/business.ts` already enforces this — keep using it.

---

## P. 30 / 60 / 90 Day Roadmap

### Days 1–30 — measurement, fixes, money pages
1. **Tracking:** verify which GTM version is live; publish the modernized container; unify event names on `/samedaygaterepair` and the LP app; add `sms_click` trigger; add GA4 event params + custom dimensions; mark conversions; enhanced conversions check.
2. **Call tracking + DNI** live for paid traffic; Google Ads call reporting on.
3. **Lead pipeline fixes:** stage/leadId on main `/api/leads`; Lead model fields; urgency default; no silent drop on the fast-submit path; `sourcePage` passed into /contact; Central time reporting.
4. **Client call (15 min):** GBP review link, license number, warranty term, insurance detail, service-call fee and whether it's credited, pricing bands, technician name/photo, whether the business serves the out-of-metro counties.
5. **Review engine live** (Brevo email now, SMS when a provider is chosen).
6. **Technical:** custom 404, emergency redirect fix, sitemap lastmod, gallery priority, `sr-only` anchors, 190→200, `/about-us`, schema entity unification, title fixes (emergency service page, case studies).
7. **Emergency page rebuild** (call-first, manual-release checklist, text-a-photo).

### Days 31–60 — local proof, commercial funnel
1. Case-study optimisation (titles, CTA, linking graph, Article schema); "Recent job near you" on city pages.
2. City index gate v2 (jobs or depth); unlink empty Tier 3 cities from hubs; replace drafted "Seen here" data.
3. `/commercial` hub + property-assessment form + `commercial_lead`; maintenance-plan page (client sets tiers).
4. Inline 2-step form on city/service/brand pages; intent switcher on the homepage hero.
5. "Second opinion before you replace" page.
6. Error-code pages for the top 3 brands (LiftMaster, DoorKing, Elite), from technician input.
7. Citations: BBB application, Yelp/Angi/Thumbtack profiles with TX job photos, CAI North Texas membership decision.

### Days 61–90 — tools, video, compounding
1. "Why won't my gate open?" interactive diagnostic (from `content/symptoms/*`).
2. Photo-upload lead form (Phase 1); evaluate AI pre-assessment (Phase 2) on usage data.
3. Job-based cost guide (and a calculator only if pricing is confirmed).
4. YouTube retitle/description pass; testimonials embedded on matching case studies and city pages.
5. Offline conversion import (booked/completed jobs → Ads).
6. Brand×metro page for LiftMaster Dallas only if ≥2 more verified Dallas LiftMaster jobs exist.
7. Link acquisition: manufacturer/distributor relationships, local HOA/property-management associations, supplier "find an installer" listings where genuinely eligible.
8. PSI/CrUX baseline with an API key; trim the GTM tag stack.

---

## Q. Code Changes (proposed — not yet made)

| # | File | Component / function | Current behaviour | Required change | Reason | Expected business impact |
|---|---|---|---|---|---|---|
| 1 | `public/samedaygaterepair.html:1597, 1666` | inline tracking script | Pushes `phone_click`, `form_submit` | Push `call_click` (+`cta_location`) and `generate_lead` on step-1 server success | No GTM trigger listens for these names | Ads conversions recorded from the main paid page |
| 2 | `calltoaction-landing-page/components/analytics.tsx:33`, `components/forms/quote-form.tsx:207,235` | `phone_click`, `form_submit` pushes | Same mismatch | Same rename; `generate_lead` at step 1 with `user_data` | Same | Same, for the LP app |
| 3 | `app/api/leads/route.ts`, `models/Lead.ts` | POST handler, schema | No `stage`/`leadId`; drops visitorId/fbclid/msclkid/ttclid/utmContent | Accept `stage` + `leadId` (update on step 2); add fields + `leadIntent`, `propertyType`, `pageType`, `status` | Duplicate leads/emails; lost attribution | Clean lead counts; source reporting works |
| 4 | `calltoaction-landing-page/components/forms/quote-form.tsx:85, 182-185` (and static page `:1561, 1570`) | urgency state; fast-submit path | Defaults to `'emergency'`; silently skips sending under 3s | Default empty; send with `suspect:true` instead of dropping | False emergencies; lost real leads | Office triages correctly; fewer lost leads |
| 5 | `app/contact/page.tsx:83`, `components/forms/gate-problem-form.tsx` | `sourcePage` | Hard-coded `/contact` | Read `?from=` / referring path; add `form_view`/`form_start`/`form_error`; params on `generate_lead` | Can't tell which page produced the lead | Page-level ROI |
| 6 | `components/analytics.tsx:115-147` | delegated tel/sms listener | `call_click` has no page type/CTA location/device | Add `cta_location` (via `data-cta-location` on CTAs), `page_type`/`page_subject` (`lib/page-type.ts`), `device_type`, `lead_intent` | GA4/Ads can't segment calls | Call ROI by city/service/brand |
| 7 | `app/not-found.tsx` (new) | 404 page | Default Next 404, no CTA | Phone, text, symptom links, service areas; `robots:noindex` | Dead ends from legacy links | Recovers stray visitors |
| 8 | `content/services.ts:105` | emergency `legacyPath` | Generates a shadowing 301 to `/services/emergency-gate-repair` | Remove `legacyPath` so `next.config.ts:88` → `/emergency` fires | Legacy equity on the wrong page | Stronger `/emergency` ranking |
| 9 | `lib/sitemap.ts:240-292` | `renderUrlset` | `lastmod` = build time | Per-entry real dates or omit | Google ignores lastmod | Better recrawl of changed pages |
| 10 | `components/sections/photo-gallery.tsx:41` | `priority={i < 4}` | Eager + high priority below fold | `priority={false}` | Competes with LCP | Faster LCP on city/brand/service pages |
| 11 | `app/[citySlug]/page.tsx:370,387,531`; `app/brands/[slug]/page.tsx:382`; `app/services/[slug]/page.tsx:362` | link anchors | `sr-only` keyword spans | Remove; visible descriptive anchors | Hidden-text risk at scale | Lowers manual-action risk |
| 12 | `lib/schema.ts:41-45`; `public/samedaygaterepair.html` JSON-LD | business node | Two types, two phone formats | Single `HomeAndConstructionBusiness` `@id` sitewide, E.164 phone, `areaServed` | Inconsistent entity | Cleaner local entity |
| 13 | `content/case-studies-client.ts` (`seoTitle`), `app/projects/[slug]/page.tsx` | case-study template | Titles lack city/brand; no symptom CTA | City + brand + fault titles; "Same problem?" CTA block; link to symptom page | Long-tail ranking + conversion | More local organic leads |
| 14 | `app/[citySlug]/page.tsx`; `content/cities.ts:3611-3637` | city hero + index gate | Generic hero; drafted "Seen here"; T3 indexed without depth | "Recent job near you" card; job-derived operator list; gate v2 | Local proof; quality | Higher city-page conversion; lower thin-content risk |
| 15 | `app/emergency/page.tsx` | page body | 867-word page | Call-first layout, brand manual-release checklist, text-a-photo | Urgent intent | More emergency calls |
| 16 | New: `app/commercial/page.tsx`, `components/forms/commercial-form.tsx` | B2B funnel | None | Property-assessment form → `commercial_lead` | No B2B path | Higher-value leads, contracts |
| 17 | `components/sections/hero.tsx` | hero CTAs | Call + Request Service | Intent chips: Stuck now / Schedule / Property-HOA | One-size CTA | Segmented conversion |
| 18 | `components/layout/site-header.tsx:134`; `next.config.ts:69`; `middleware.ts:71-99, 166-168`; `app/robots.ts` | small fixes | "190"; `/about-us`→`/`; missing segment; broad matcher; `/r/` crawlable | Derive count; → `/about`; add `gate-problems`; narrow matcher; disallow `/r/` | Hygiene | Small TTFB gain; consistency |
| 19 | `lib/review-requests.ts:104-110`; `app/r/[token]/route.ts` | review send | SMS stub; email never sent; link falls back to /contact | Send via Brevo; SMS provider; use the confirmed GBP link | Review engine dead | Reviews → local-pack ranking + conversion |
| 20 | `lib/lead-report.ts:80, 296-301` | reporting | UTC days; classifies form leads by gclid only | Central time; full source classification; show SMS clicks | Misleading dashboard | Correct lead reporting |

---

## R. TOP 5 ACTIONS

1. **Fix conversion tracking this week.** In GTM Preview, confirm which container is live. Publish the modernized version. Rename the events on `/samedaygaterepair` and the landing-page app to `call_click` / `generate_lead`. Without this, Ads cannot optimise and none of the following can be measured.
2. **Turn on call tracking with dynamic number insertion** for paid traffic (keeping the static 214 number for NAP), and fix the lead pipeline: duplicate step-1/step-2 records, dropped attribution fields, false EMERGENCY flags, and silently dropped fast submissions.
3. **Run the 15-minute client call and get the review engine live.** Get the GBP review link, license number, warranty term, service-call fee policy and a technician name. Send a review request after every job. Reviews are the largest gap against every serious competitor.
4. **Put the 18 verified Texas jobs to work.** Retitle them with city + brand + fault, add "Same problem? Text a photo / Call" CTAs, show a "Recent job near you" card on matching city pages, and link case study → model → symptom → city → request.
5. **Launch the commercial/HOA funnel and rebuild `/emergency`.** That means a `/commercial` page with a property-assessment form, a maintenance-plan page with client-set tiers, and a call-first emergency page with brand manual-release steps and a text-a-photo option. These are the highest-value and highest-urgency buyers, and today they get the same generic CTA as everyone else.

---

### Research sources (external)
4suregates.com · metrogatesrepair.com · gaterepairdallas.com · everlastgates.com · garagetec.org/dallas-tx/dallas-gate-services/ · stargateandfence.com · a1gateintercom.com · a1gateintercom.com/blog-gate-repair-cost-dallas · myprogate.com · gaterepairpro.com/dallas/automatic-gate-repair-dallas-tx/ · texasselectfencing.com/serving/fort-worth-gate-company · topchoicegaterepairuniversitypark.com · gaterepairlocalservice.com · jjgates.com · allgaterepairdfw.com · sosgateopener.com/dallas_liftmaster_gate.html · doorkingoftexas.com · local.liftmaster.com/tx/dallas/ · bbb.org/us/tx/dallas/category/gates/accredited · dfwcai.org/Professional_Service_Providers · crafterfence.com/hoa-gate-services · angi.com/articles/automatic-gate-repair-cost.htm · yelp.com/costs/automatic_gate_opener_repair · homewyse.com/maintenance_costs/cost_to_repair_gate.html · fixr.com/costs/electric-gate-install · myquoteiq.com/top-10-ai-tools-for-garage-door-businesses-in-2026/ · podium.com/product/ai-employee/home_services · usehatchapp.com · geekwire.com (Local Crew, snippet only).

Items marked "not verified" in the research notes (Pro Gate contract terms, Thumbtack counts, HomeAdvisor figures, competitor ownership networks) are excluded from claims above or labelled as such.
