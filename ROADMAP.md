# Production Roadmap — Shield Gate Repair

**Owner:** Product / Technical SEO / CRO
**Status:** homepage, design system, service pages, brand pages, alt text, video metadata, analytics and core technical SEO are **done**. This document covers only what remains.

**Governing principle:** the site already wins on design, speed and content depth. It loses on **proof** and **coverage**. Every item below is ranked by how much it closes one of those two gaps.

---

# PART 1 — MULTI-LOCATION ARCHITECTURE

## Recommendation: **Option B — California + Dallas on one domain, state-segmented.**

Not A. Not C. And the reasoning matters more than the answer.

### Why not Dallas-only (A)

Abandoning California throws away a decade of real revenue, real reviews, real Google Business Profile history and the only photography the company owns. It also wastes the single strongest asset on the domain: **14 California pages that already exist and already rank.** Deleting ranking pages to chase a market with zero history is the most expensive possible opening move.

### Why not multi-state (C)

Two markets is not a multi-state business. Building a state-abstraction layer for two states is architecture cost with no return, and it dilutes topical focus at exactly the moment the Texas market needs concentrated relevance signals.

### Why B is not just "keep both" — the structural insight

**Service and brand pages must stay geo-neutral at the root.** This is the highest-leverage architectural decision in the whole project.

```
/services/gate-motor-repair        ← geo-neutral, 2,099 words
/brands/faac                       ← geo-neutral, 1,566 words
```

Those pages now carry 1,300–2,100 words each. Under Option B they build **one pool of topical authority that serves both markets simultaneously.** A Californian searching `faac gate operator repair` and a Texan searching the same term land on the same deep page, and every link from either market's city pages strengthens it.

Split them per state and you halve the authority of both, and create genuine cross-market duplicate content — the same repair advice written twice.

### And it resolves the photography problem

This is the elegant part. Under Option B the California photography lives on **California pages, where it is accurate**. Palm trees on a Los Angeles page are correct. The Texas pages then get Texas photography as it is shot, and until then they rely on the geo-neutral service and brand pages for imagery.

Option A forced us to strip every location claim and present the portfolio as placeless. Option B makes the portfolio *truthful in situ*.

### URL structure

```
/                                     national hub, both markets surfaced
/services/[slug]                      geo-neutral — shared authority
/brands/[slug]                        geo-neutral — shared authority
/faq, /warranty, /about, /projects    geo-neutral trust layer

/texas                                state hub  (NEW)
/gate-repair-dallas-tx                city pages — keep the flat pattern
/gate-repair-plano-tx

/california                           state hub  (NEW)
/gate-repair-los-angeles-ca           city pages, same pattern
/service-areas                        national index, grouped by state
```

**Keep the flat `-tx` / `-ca` city URLs.** They already exist, they read cleanly in SERPs, and moving them to `/tx/...` would mean a second migration for no ranking benefit. Add state hubs rather than restructuring.

### Navigation

- Primary nav stays **service-led**, not location-led. People search for their problem, not their state.
- A single **"Service Areas"** entry opens a two-column panel: Texas | California.
- **No state switcher in the header.** It creates a decision the visitor did not ask for. Geography is resolved by the page they landed on.
- Footer carries both states explicitly with their own NAP blocks.

### Canonicals

Self-referencing on every page. **No cross-market canonicals** — a Dallas page and a Los Angeles page are genuinely different pages serving different users, and canonicalising one to the other would delete a market from the index.

### Schema

```
Organization (root)                     @id: /#organization
├── LocalBusiness — Texas               @id: /#business-tx
│     areaServed: DFW cities
│     address + telephone: TX-specific
└── LocalBusiness — California          @id: /#business-ca
      areaServed: CA counties
      address + telephone: CA-specific
```

Each city page references its own state's `LocalBusiness` via `parentOrganization`. Service and brand pages reference the root `Organization` — never a single state's business, or you geo-lock a page that should serve both.

### Google Business Profiles

**Two separate profiles, minimum — one per physical location.** This is where multi-location businesses most often fail:

- Each profile needs a **real address in that state** and a **local phone number for that state**
- NAP on `/texas` must match the TX profile character-for-character; same for California
- The current single `800` number is now **doubly wrong** — it cannot serve as the NAP for either profile, because Google's local ranking uses proximity and number locality as signals

### Content duplication control

The existing guard already handles this within Texas: `scripts/validate-cities.ts` fails the build on any 20-word phrase shared between two city pages. **Extend the same check across states.** The `gateProfile` / `localAngle` model is what makes 190 city pages defensible; California pages must be held to the identical standard or they become the liability.

---

# PART 2 — COMPETITOR GAP ANALYSIS

## What they have that we still do not

| Gap | Who | Reality |
|---|---|---|
| **Project / case study pages** | Star Gate (4 projects) | Their execution is thin — photo, title, one line, "See Project". **No before/after, no city, no date, no problem/solution narrative, no schema.** The gap exists but the bar is low |
| **Financing** | Texas Select Fencing (via Hearth) | Real differentiator on installation jobs, which are the $2,500–$7,500 tickets |
| **Blog / cost content** | Star Gate | Actively ranking on cost-guide posts. We have nothing |
| **Multiple physical addresses** | Metro (5 offices) | Local pack coverage we cannot match without real locations |
| **Review volume** | Everlast (2,600), Garage Tec (830) | Cannot be closed by building. Only by asking customers |
| **An offer** | Metro ($200 off) | We run nothing |

## What we have that they cannot realistically replicate

| Advantage | Why it is durable |
|---|---|
| **25 embedded videos with hand-written VideoObject metadata** | Zero of 14 competitors embed any video. Replicating means sending crews out with cameras for months. **3–5 year moat.** |
| **Service pages at 1,300–2,100 words with H3 passage structure** | Star Gate's best is 1,100 with no H3s. This is expensive to match and requires actual technical knowledge, not a copywriter |
| **FAAC / All-O-Matic / Ramset authority** | Requires technicians who genuinely service hydraulics. A marketing agency cannot fake it |
| **Symptom-first content architecture** | Nobody in the market thinks this way. Copyable in principle, but it requires abandoning their existing IA |
| **Static Next.js on AVIF** | Every competitor is on WordPress + Elementor. Matching means a rebuild they have no incentive to fund |
| **Complete structured data** | Absent on all 14. Cheap for them to add — **this is our least durable advantage** |

## The sustainable-advantage recommendation

**Build the moat where technical knowledge is the barrier, not where budget is.**

Anyone can buy schema markup and a faster host. Nobody can buy fifteen years of knowing that a humming LiftMaster is a capacitor, that an All-O-Matic clutch slipping means the gate is binding, or that a DoorKing goes silent months after a VoIP migration. **That knowledge is already the best content on the site and it should become the entire content strategy.**

Concretely: a **Knowledge Center** organised by symptom, brand and error code. That is a 3–5 year moat because replicating it requires a competitor to have technicians willing to write, which none of them do.

---

# PART 3 — PRODUCTION ROADMAP

## 1. CRITICAL BEFORE DEMO

| # | Item | Why | SEO | CVR | Trust | Effort |
|---|---|---|:-:|:-:|:-:|:-:|
| D1 | **Client call** — rating, reviews, licence, warranty, years, insurer, address, response times | Every trust signal on the site is empty. This is the demo | ●●○ | ●●● | ●●● | 15 min |
| D2 | **Populate reviews + flip `reviewsConfirmed`** | Homepage says "Awaiting real review data" | ●●● | ●●● | ●●● | 1 h |
| D3 | **Finish 5 remaining brand pages** (Elite, Viking, Eagle, Linear, HySecurity — currently 627–814 w) | Half the brand set looks unfinished next to FAAC | ●●○ | ●○○ | ●●○ | 4 h |
| D4 | **`/projects` with 8–12 case studies** | Highest-trust content type. Star Gate's version is beatable in one pass | ●●● | ●●● | ●●● | 1 d |
| D5 | **Decide CA vs TX architecture** and implement state hubs | Blocks the migration | ●●● | ○○○ | ○○○ | 4 h |

**Demo blocker:** without D1 and D2 the demo shows a beautifully designed site with no evidence anyone has ever hired the company. That is the same failure the WordPress site was rejected for.

## 2. CRITICAL BEFORE PRODUCTION

| # | Item | Why | SEO | CVR | Trust | Effort |
|---|---|---|:-:|:-:|:-:|:-:|
| P1 | **Two GBPs + local phone number per market** | The `800` number cannot serve as NAP for either profile. Biggest local-ranking lever available | ●●● | ●●● | ●●● | Client |
| P2 | **`/faq` hub** — 40+ Qs, FAQPage schema, searchable | Featured-snippet surface; every service already has FAQs to aggregate | ●●● | ●●○ | ●●○ | 6 h |
| P3 | **`/warranty`** — the actual terms | No competitor headlines a warranty. Free differentiation | ●○○ | ●●● | ●●● | 3 h |
| P4 | **`/about`** — company story, CA→TX expansion, named technicians with photos | Star Gate names one tech and it is their strongest humanising asset | ●●○ | ●●○ | ●●● | 4 h |
| P5 | **`/emergency`** — dedicated landing page | Highest-intent, highest-value traffic; currently a service page competing with seven others | ●●● | ●●● | ●●○ | 4 h |
| P6 | **Gallery filtering + pagination** (484 KB → <150 KB) | Unfiltered wall of 122 images; specced as searchable | ●●○ | ●●○ | ●○○ | 6 h |
| P7 | **City pages 957 → 1,400 w** + Maps + local projects | 4 Sure's Plano page is 2,100 w. We win on % local, lose on depth | ●●● | ●●○ | ●●○ | 2 d |
| P8 | **Full redirect map incl. California decision** | Migration safety | ●●● | ○○○ | ○○○ | 3 h |
| P9 | **Call tracking + offline conversion import** | Cannot optimise Ads without it; most conversions here are calls | ●○○ | ●●● | ○○○ | 6 h |
| P10 | **Full QA** — real devices, keyboard, screen reader, live form submission | Non-negotiable | ○○○ | ●●○ | ●●○ | 1 d |

## 3. PHASE 2 — FIRST 30 DAYS AFTER LAUNCH

| # | Item | Why | SEO | CVR | Trust | Effort |
|---|---|---|:-:|:-:|:-:|:-:|
| 2.1 | **Before/after sliders** on projects and iron gate pages | Proven engagement device in this trade; assets support it | ●●○ | ●●● | ●●● | 1 d |
| 2.2 | **Review generation system** — post-job SMS/email ask | The only way to close the 2,600-review gap. Compounding | ●●● | ●●● | ●●● | 1 d |
| 2.3 | **`/pricing` published** with real bands | Biggest uncontested content gap in the market | ●●● | ●●● | ●●● | Client + 2 h |
| 2.4 | **Texas photography** — 40+ real DFW job photos | Resolves the provenance constraint permanently | ●●○ | ●●● | ●●● | Client |
| 2.5 | **Interactive service-area map** with response bands | Nobody publishes response times at all | ●●○ | ●●○ | ●●○ | 1 d |
| 2.6 | **Offer** — waived diagnostic with repair | Metro runs $200 off; we run nothing | ○○○ | ●●● | ●○○ | 2 h |
| 2.7 | **Financing** (Hearth or similar) | Texas Select Fencing has it; installation tickets are $2,500–$7,500 | ○○○ | ●●● | ●●○ | Client + 4 h |
| 2.8 | **Site search** | 47 pages heading to 250+ | ●○○ | ●●○ | ●○○ | 6 h |
| 2.9 | **Video library page** with filtering + full VideoObject | 25 videos deserve their own indexable surface | ●●● | ●●○ | ●●● | 6 h |
| 2.10 | **Breadcrumb UI** | Schema exists; users never see the trail | ●○○ | ●●○ | ○○○ | 2 h |
| 2.11 | **Custom 404** with phone + service areas | Recovery path | ○○○ | ●●○ | ○○○ | 1 h |

## 4. PHASE 3 — AUTHORITY BUILDING, 12 MONTHS

| # | Item | Why | SEO | CVR | Trust | Effort |
|---|---|---|:-:|:-:|:-:|:-:|
| 3.1 | **Knowledge Center** — symptom / brand / error-code clusters | **The 3–5 year moat.** Requires technician knowledge no competitor will invest in | ●●● | ●●○ | ●●● | Ongoing |
| 3.2 | **Cost-guide content** | Star Gate ranks on exactly this; highest-volume commercial-intent terms | ●●● | ●●● | ●●○ | Ongoing |
| 3.3 | **City page rollout in waves of 20** | 14 → 190 as `gateProfile` data arrives from technician interviews | ●●● | ●●○ | ●●○ | Ongoing |
| 3.4 | **Brand error-code reference pages** | `liftmaster error code 1-1` type queries. Zero competition, high intent | ●●● | ●●○ | ●●● | Ongoing |
| 3.5 | **Project case studies, 2–4/month** | Compounding local + trust signal, feeds city pages | ●●● | ●●● | ●●● | Ongoing |
| 3.6 | **Video expansion** — one repair filmed per week | Extends the only uncontested moat | ●●● | ●●● | ●●● | Ongoing |
| 3.7 | **Topic cluster interlinking** — symptom → service → brand → city → project | Turns 250 pages into a genuine authority graph | ●●● | ●○○ | ○○○ | 1 w |
| 3.8 | **Technician-authored posts with `author` schema** | E-E-A-T. Nobody in this market has a named expert | ●●● | ●○○ | ●●● | Ongoing |
| 3.9 | **California market build-out** | 14 legacy pages → proper market with the same depth standard | ●●● | ●●○ | ●●○ | 2 w |
| 3.10 | **Quarterly Core Web Vitals + a11y regression audits** | Protects the speed advantage as content grows | ●●○ | ●○○ | ○○○ | Quarterly |

---

# The one question

> **"If this were your company, what would you build next before spending another hour polishing the homepage?"**

## A review generation system. Then `/projects`.

Not another section. Not more design.

**Here is the arithmetic that settles it.** Everlast has 2,600 reviews. We have zero published. Every hour spent on the homepage moves a visitor who has already decided we look credible slightly closer to calling. Zero of those hours change the fact that a homeowner comparing us to Everlast sees 2,600 pieces of evidence on one side and none on the other.

A review system — post-job SMS with a direct Google review link, a follow-up at 48 hours, and a simple dashboard showing which technicians generate them — costs one day to build and **compounds every single day afterwards.** At even 15 reviews a month, that is 180 in a year. It is the only item on this entire roadmap that gets more valuable while we sleep.

**Second: `/projects`.** Star Gate's version is four cards with a photo and one line — no before/after, no city, no date, no problem/solution, no schema. One day of work produces something decisively better, and case studies are the only content type that simultaneously feeds SEO, conversion *and* the city pages that need local proof.

**And the thing I would stop doing:** polishing the homepage. It is now the best-designed gate repair homepage in Dallas–Fort Worth. It is not the reason we would lose. **We would lose because a stranger has no reason to believe us yet** — and that is a content and proof problem, not a design one.

Design got this site to parity with the best in the market. Proof is what takes it past them.
