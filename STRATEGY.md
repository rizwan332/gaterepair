# Shield Gate Repair — Competitive Foundation & Architecture Brief

**Domain:** shieldgaterepair.com · **Target market:** Dallas–Fort Worth
**Prepared:** 1 Aug 2026
**Basis:** 12 competitor sites fetched and audited live + full local asset inventory + the existing site's sitemap

---

## ⚠️ 0. Read this first — the existing site is targeting California

`shieldgaterepair.com/page-sitemap.xml` returns **45 pages**. Their geography:

| Geo pages | Count |
|---|---|
| **California** — Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, Santa Barbara County, San Luis Obispo County, Kern County, Imperial County, Fresno | **14** |
| **Dallas–Fort Worth** | **1** (`/gate-repair-dallas-fort-worth/`) |

The live site's entire local footprint points at Southern California. There is exactly one DFW page.

**This must be resolved before the migration plan is finalized. Two very different paths:**

- **(A) DFW is the real market, California was aspirational/template filler.** Then the 14 CA pages should be removed, not redirected into DFW pages — redirecting `los-angeles-county` → a Dallas page is a geographic relevance mismatch that hurts more than a clean 410/301-to-home. Rebuild the local footprint from zero around DFW.
- **(B) The business genuinely serves both.** Then California is a second market with its own subtree, and the DFW build is a new section rather than a replacement — and the plan changes materially.

**Ask the client. Do not guess.** Everything below assumes **(A) — DFW-only** — consistent with the meeting notes and the city list provided.

### What to preserve from the old site

**Preserve these 10 brand URLs — 301 to identical slugs.** They're well-structured, they match the photo library, and they represent whatever topical authority the domain has:

```
/liftmaster-gate-motor-repair/    /viking-gate-motor-repair/     /faac-gate-motor-repair/
/all-o-matic-gate-motor-repair/   /elite-gate-motor-repair/      /eagle-gate-motor-repair/
/ramset-gate-motor-repair/        /doorking-gate-repair/         /linear-gate-motor-repair/
/hysecurity-gate-motor-repair/
```

**Preserve the 8 service URLs** (`/gate-installation-services/`, `/iron-gate-repair-services/`, `/electric-gate-repair-services/`, `/commercial-gate-repair-services/`, `/emergency-gate-repair-services/`, `/automatic-gate-repair-services/`, `/gate-motor-repair-services/`, `/gate-repair/`) plus `/about-us/`, `/gallery/`, `/testimonials/`, `/contact-us/`, `/locations/`, `/services/`.

Note: assets exist for 7 of the 10 brands. **DoorKing, Linear and HySecurity have zero photos in the library** — either get real photos or keep those pages thinner and lower priority. Don't fill them with stock.

---

## 1. Full competitor audit — 12 sites fetched

### Tier 1 — the real threats

**everlastgates.com** — 735 GMB reviews · 5.0
H1: *"Automatic Gate & Fence Installation in Dallas-Fort Worth."* Vanity phone `234-GATEPRO`. Above the fold: *"Over 2,600 five-star reviews across 12 locations"*, BBB A+ badge, **license B28539401 displayed**, *"Background Checked & Drug Tested"*, Google/BBB/Yelp/Facebook badges. 8 customer video testimonials.
**Gaps:** no schema markup · only 3 location pages · no brand pages · no gate-operator specificity.

**garagetec.org** — 875 GMB reviews · 4.9 (830 shown on site)
*"Fast response times. Honest pricing & quality work!"* Region-routed phone numbers (Dallas/Fort Worth/Austin/San Antonio). *"Over 100,000 man-hours"*, *"Over 10,000 satisfied customers"*. **150+ city pages across 4 metros**, 25+ service pages, brand pages for LiftMaster/Chamberlain/Genie/Clopay/Wayne-Dalton/Amarr.
**Gaps:** garage-door-first, gates are secondary · no schema · **no video** · SVG placeholders where photos should be, which reads as unfinished · no license shown.

**stargateandfence.com** — 117 GMB reviews · 4.8 — *best copywriting in the market*
H1: *"Dallas Gate Repair & Fence Installation: Same-Day Emergency Service."* Sub: *"Secure Your Property with DFW's Top-Rated Automatic Gate Experts. Fast, Reliable, and Professional."* Above fold: Licensed & Insured, 20+ Years, Family Owned, Same-Day, plus a quote form. Real project photography. Blog with **cost-guide content** — *"Automatic Gate Opener Installation Cost in Dallas"*, *"Sliding Gate Repair in North Richland Hills: Cost Guide"*.
**Gaps:** almost no city pages · has a YouTube channel but **embeds no video** · no review count above fold · no brand pages.

**a1gateguys.com** — 39 GMB reviews · 4.7
**Authorized LiftMaster dealer**, certified technicians, no subcontracting, 24/7. **41+ city pages.** Two LiftMaster brand pages (Slide Gate Operators, Swing Arm Gates).
**Gaps:** names *"LiftMaster®, Eagle, Viking, DoorKing, All-O-Matic"* in body copy but **builds pages for none of them except LiftMaster** · no video · no ratings above fold · no license number.

**4suregates.com** — strongest organic ranker for `gate repair dallas`
H1: *"DALLAS'S TRUSTED GATE REPAIR SPECIALISTS."* In business since 2005. 19 gate-repair city pages, 13 installation city pages. **Brand pages: Viking, Elite, Eagle, Chamberlain/LiftMaster, Nice Apollo.**
**Gaps:** **no FAAC, no All-O-Matic, no Ramset, no DoorKing** · no video · no license number · no pricing.

### Tier 2 — footprint without trust

**metrogatesrepair.com** (81 rev) — 28 service pages, 50+ city pages, `$200 OFF NEW GATE OPERATOR`, phone 5+ times above fold. **100% stock photography**, zero social proof above fold, weak keyword-stuffed H1 *"Metro Gate Repair Gate Repair Dallas TX"*, templated city pages.

**gaterepairpro.com** (Dallas) — 4.9/367 ratings, *"Insured, Experienced And Licensed"*, 17+ services, 12 city pages, names 10 brands (All-O-Matic, LiftMaster, Chamberlain, DoorKing, GTO, Viking, FAAC, Elite, Apollo) **but builds no brand pages**. No video, no pricing.

**gaterepairdallas.com** (Lone Legacy) — family-owned angle, 50+ city pages, real photos, decent positioning copy. No video, no pricing, no schema, no H1.

**jjgates.com** — regional player. 4 location pages, 10+ service pages, ~650 words on the Dallas page. **Stock imagery**, no brand pages, no video, no pricing.

### Tier 3 — weak

**dallasautomaticgate.com** (27 rev) — 31 years, security **license B26253101** in footer, real photos. No city pages, no video, no social proof above fold.
**aautomaticgaterepair.com** (41 rev) — 20+ years buried in footer, zero city pages, zero brand pages, no video, blurry compressed photos.
**gateservicellc.com** (66 rev) — brand-only H1, no city pages, thin service content, no video, no trust signals.
**automaticgaterepairdallas.org** (91 rev) — **site is down, in WordPress maintenance mode.** A 91-review business with no working website.

---

## 2. The three uncontested gaps

Verified across all 12 sites. These are the strategy.

### 🥇 Gap 1 — Video. Nobody has it. Not one competitor.

**Zero of the twelve sites audited embed video.** Everlast lists video testimonials; Star Gate has a YouTube channel it never embeds. That's the closest anyone gets.

Shield has **25 real service videos**, including brand-specific repair footage and a client testimonial. Embedded properly with `VideoObject` schema, these are eligible for video rich results on queries where **no competitor is even in the running**.

This is the single largest uncontested advantage and it should shape the whole build.

### 🥈 Gap 2 — Pricing. Nobody publishes any.

Explicitly confirmed absent on 4 Sure Gates (*"We quote the job before we start it"* — no numbers), Gate Repair Pro, gaterepairdallas (*"Pricing depends on..."*), J&J, A-Automatic, Metro. A direct search for a 2026 Dallas gate-operator repair cost guide **returned nothing**.

Only Star Gate & Fence touches cost, and only via blog posts — and it's working for them.

`gate repair cost`, `gate opener replacement cost`, `liftmaster gate operator price` are high-volume, high-intent queries with **no local page competing seriously**. Publishing honest price *ranges* (not fixed quotes) with a clear "final price after on-site diagnosis" caveat wins these outright and builds enormous trust in a trade where opacity is the norm.

### 🥉 Gap 3 — Schema. Absent or unverifiable on all 12.

No LocalBusiness, Service, FAQPage, Review or VideoObject markup detected anywhere, including on the two market leaders. Comprehensive JSON-LD is cheap to implement and nobody is contesting it.

### And a fourth, narrower one — brand coverage

My earlier read was too generous to Shield here; the accurate picture:

| Brand | Shield assets | Competitor coverage |
|---|---|---|
| **FAAC** | 6 photos + video | ❌ **nobody has a page** |
| **All-O-Matic** | 10 photos + 2 videos | ❌ **nobody has a page** |
| **Ramset** | 5 photos + video | ❌ **nobody has a page** |
| **DoorKing** | ⚠️ no photos | ❌ nobody has a page |
| LiftMaster | 13 photos + 2 videos | ✅ A1 (authorized dealer), 4 Sure, Garage Tec |
| Viking | 5 photos + video | ✅ 4 Sure Gates |
| Elite | 8 photos + video | ✅ 4 Sure Gates |
| Eagle | 5 photos + video | ✅ 4 Sure Gates |

**FAAC, All-O-Matic and Ramset are wide open** — and Shield has real photos *and* video for all three. Prioritize those.

Where competitors do have brand pages (LiftMaster, Viking, Elite, Eagle), **none of them has brand-specific photography or video.** Shield's 13 real LiftMaster repair photos plus 2 videos beat A1's dealer badge on evidence, even though A1 has the dealer relationship. Compete on proof, and don't claim a dealer status Shield doesn't hold.

---

## 3. Trust-signal benchmark — what Shield must match on day one

| Signal | Everlast | Star Gate | Dallas Auto Gate | 4 Sure | **Shield now** |
|---|:-:|:-:|:-:|:-:|:-:|
| Review count + rating above fold | ✅ 2,600+ | ❌ | ❌ | ❌ | ❌ |
| License number displayed | ✅ B28539401 | ❌ | ✅ B26253101 | ❌ | ❌ |
| Years in business | ✅ | ✅ 20+ | ✅ 31 | ✅ 20+ | ❌ |
| Licensed & Insured badge | ✅ | ✅ | ❌ | ✅ | ❌ |
| Physical address | ✅ | ✅ | ✅ | ✅ | ❌ |
| Background-checked staff | ✅ | ❌ | ❌ | ❌ | ❌ |
| Local area code | ✅ 469 | ✅ 469 | ✅ 972 | ✅ | ❌ **800** |

Shield currently shows **none of the seven**. That — not the visual design — is the primary reason the current site doesn't convert.

**The 800 number is a specific liability.** Every credible competitor uses `214 / 469 / 972 / 682`. A toll-free number reads as an out-of-state call centre to both customers and Google's local relevance signals. Acquiring a local DFW number is probably a bigger conversion lever than anything else in this document.

Texas note: both license numbers found start with `B` — these are **Texas DPS Private Security Bureau** licenses, which access-control and gate-operator work requires. Two competitors display theirs. Shield should obtain and display theirs.

---

## 4. Asset inventory — the sitemap follows from this

`wordpress-uploads/` holds 5,283 files that collapse to **122 distinct photographs** after stripping WordPress's 4–6 resize/optimizer variants per file (`-300x200`, `-scaled`, `-updraft-pre-smush-original`, `.jpg.webp`, `.bv.webp`), plus **25 videos**.

| Category | Photos | Videos |
|---|---:|:-:|
| Gate Installation Services | 17 | 2 |
| **LiftMaster** Gate Motor Repair | 13 | 2 |
| Emergency Gate Repair | 11 | 2 |
| Iron Gate Repair | 10 | 2 |
| Access Control Gate Repair | 12 | — |
| **All-O-Matic** Gate Motor Repair | 10 | 2 |
| Automatic Gate Repair | 7 | 2 |
| **Elite** Gate Motor Repair | 8 | 2 |
| **FAAC** Gate Motor Repair | 6 | 1 |
| Electric Gate Repair | 7 | 2 |
| **Viking** Gate Motor Repair | 5 | 1 |
| **Eagle** Gate Motor Repair | 5 | 1 |
| Commercial Gate Repair | 6 | 2 |
| **Ramset** Gate Motor Repair | 5 | 1 |
| Client testimonial | — | 1 |

Build the sitemap from this table. Fourteen categories with real evidence beats sixteen invented service pages.

---

## 5. Corrections to the plan you were given

### ❌ MongoDB as content store → ✅ content in-repo, Mongo for leads only
Content in a DB means a runtime dependency per render, no version control on copy, no PR review, slower builds, lower Lighthouse ceiling. Put content in typed `.ts`/MDX → `generateStaticParams` → fully static. Keep MongoDB for lead capture, where it's genuinely the right tool.

### ❌ 170 programmatic city pages at launch → ✅ tiered rollout
Google's scaled-content-abuse policy targets exactly this, and Metro Gate Repair is already exposed. On a domain that's simultaneously being repointed from California to Texas, mass-generated pages are a serious risk.

- **Tier 1 — 15 full pages:** Dallas, Fort Worth, Plano, Frisco, McKinney, Irving, Garland, Arlington, Richardson, Carrollton, Mesquite, Denton, Rockwall, Allen, Grand Prairie
- **Tier 2 — ~35 differentiated pages**
- **Tier 3 — remaining ~120 cities** as linked entries on `/service-areas`, promoted as real jobs accumulate

~50 quality local pages at launch still beats Everlast's 3, Star Gate's ~2 and J&J's 4, and is more defensible than Metro's 50 or Garage Tec's 150.

### ❌ Full-screen hero video + "100/100/100/100" → ✅ pick one
Mutually exclusive, and the MP4s are 1.8–9.9 MB. Hero = real still photo as LCP element. Video lives below the fold, poster-first, loads on interaction — which is also where it does its competitive work.
Realistic and still market-leading: **Perf 90–95 mobile / 98–100 desktop · A11y 100 · BP 100 · SEO 100.**

### ❌ Fabricated trust numbers → ✅ verify every one
The pasted plan hardcodes *"850+ Google Reviews"*, *"15+ Years"*, *"30–60 min ETA"*. Everlast publishes an actual license number; that's the standard. Ship nothing unverified — see §7.

### ❌ Stack bloat → ✅ trim
Drop **GSAP** (redundant with Framer Motion), **React Query** (static RSC, nothing to cache), **Cloudinary** (images are local and static — `next/image` is faster and free), **Speakable schema** (deprecated).

---

## 6. Asset pipeline — before any component

1. Group files by basename with resize/optimizer suffixes stripped
2. Keep the largest-dimension original per group
3. Emit AVIF + WebP at 400/800/1200/1600 → `public/images/<category>/`
4. Generate blur placeholders into a manifest
5. Rename to SEO slugs — `liftmaster-gate-motor-repair-dallas-03.avif`
6. Transcode the 25 MP4s to 720p H.264 ≤2 MB + extract posters
7. Write `content/media-manifest.ts` — category → images → **hand-written alt text**

122 lines of hand-written alt text is real work and a genuine image-search asset. Never templated, never stock, never AI-generated.

---

## 7. Blocking questions for the client

1. **California or DFW?** (§0 — this changes the migration plan materially)
2. Real Google review count and rating
3. **Texas DPS Private Security Bureau license number** — competitors display theirs
4. Insurance carrier / bonded status
5. Actual years in business
6. Physical address for `LocalBusiness` schema
7. Real average response time
8. **Will they get a local 214/469/972/682 number?**
9. Authorized dealer for any brand? If not, all brand copy reads *"brands we service"*, never *"authorized dealer"*
10. Willing to publish price ranges? (§2 Gap 2 — the biggest content opportunity in the market)

Put every one in `content/business.ts` marked `TODO: CONFIRM`, with a dev-only visible warning when unset.

---

## 8. Delivery sequencing

**Demo:** asset pipeline → design system → homepage → 3 service pages → **FAAC + All-O-Matic + Ramset brand pages** (the uncontested three) → 3 city pages → working call/form CTAs → embedded video. Enough to prove both the design direction and the two moats.

**Then:** remaining service and brand pages → Tier 1 + 2 cities → pricing/cost content hub → gallery → project case studies → full schema → sitemap → **301 map** → GoDaddy cutover.
