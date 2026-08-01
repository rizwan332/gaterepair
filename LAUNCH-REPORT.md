# Final Production Readiness Report — Shield Gate Repair

**Build verified:** 47 static pages · 12/12 routes 200 · 0 broken images · 0 false geographic claims in alt text.

---

## 1. COMPLETED

### Content & media integrity

| Item | Before | After |
|---|---|---|
| Alt text | 122 images / **14 distinct strings** / 0 hand-written | 122 images / **122 distinct** / **122 hand-written** |
| Geographic claims in alt text | 122 (all false) | **0** |
| Video titles | 25 clips / **15 distinct** | 25 clips / **25 distinct** |
| Video descriptions | **0 written** | **25 written**, each describing the actual repair |
| Image slugs | `faac-dallas-01` (false claim) | `faac-01` |

**The reason for all of this is documented in [MEDIA-PROVENANCE.md](MEDIA-PROVENANCE.md):** spot-checking the library found palm trees, Spanish tile, coastal live oaks and a Santa Monica security-patrol sign. The photography is Southern California work, matching the live sitemap's 14 California county pages. I was one command away from asserting "Dallas–Fort Worth" 122 times in alt text. Every location claim is now stripped from filenames, alt text and gallery copy.

### Design system

- **Layered surfaces** (`.surface-dark`) replacing flat `#08090B` fills
- **Signature motif** — `.glow-gold` bloom + `.grid-lines` masked engineering grid, repeated across dark sections
- **Gold as a material** — `.btn-gold` gradient with inner highlight and glow; `.text-gradient-gold` on the hero
- **Dramatic type scale** — hero at `4.75rem`/`leading-[0.98]`, tracking tightening per level
- **Lit-hairline cards** (`.card-light` / `.card-dark`) replacing framework-default borders
- **Motion** — `Reveal`, 380ms rise-and-fade, one stagger level, fully off under `prefers-reduced-motion`. Framer Motion was shipping unused
- **Font token fix** — `--font-display` now uses `var(--font-display-loaded)`, restoring the metric-matched fallback and removing avoidable CLS

### Components rebuilt

- **Services grid** — was four identical photo-title-arrow cards (the most template-like block on the site). Now two large editorial cards leading with the *symptom* plus a compact index; video-backed services are flagged
- **Brands grid** — was ten text tiles in a section called "brands". Now carries a photograph of each manufacturer's actual equipment; FAAC/All-O-Matic/Ramset flagged "Nobody else covers this"; the three brands without photography grouped compactly so their thinness reads as deliberate
- **Process** — was a generic six-box grid. Now a connected vertical timeline on a dark surface with a gradient hairline threading the markers
- **Trust bar — deleted.** It rendered two chips and duplicated the hero's proof row
- **Reviews moved above the video reel**, with the customer testimonial video as its centrepiece

### Trust & conversion

- Homepage `Reviews` section + `/reviews` page, in nav, footer and sitemap
- Proof chips moved **into** the hero
- "review" mentions on homepage: **0 → 45**
- Customer testimonial video surfaced (it was being filtered out entirely)
- Desktop persistent call rail; mobile header call button at every breakpoint

### Technical

- **Accessibility:** 9 of 10 form labels pointed at a `<div>` — fixed via `cloneElement`, plus `aria-describedby`/`aria-invalid`/`aria-required`. Contrast verified: ink-300/ink-950 **10.0:1**, gold-400 **12.5:1**, ink-400 **5.9:1**, ink-500/white **5.6:1** — all pass AA
- **SEO infra:** `sitemap.xml`, `robots.txt`, branded `opengraph-image`, favicon + apple-icon — none existed
- **Redirects:** every legacy WordPress brand/service/utility URL now 308s to its new home, generated from `legacyPath`
- **City gating:** 176 templated shells unpublished via `publishedCities`; 14 enriched pages ship; all 190 still listed on `/service-areas`
- **`scripts/validate-cities.ts`** — CI guard that fails the build on any city not on the client's list, or any 20-word phrase shared between two city pages
- **Analytics:** GA4 + global `tel:`/`sms:` click tracking + `generate_lead` event, `afterInteractive`, renders nothing without `NEXT_PUBLIC_GA_ID`
- **Schema:** LocalBusiness, Service, FAQPage, BreadcrumbList, VideoObject (25, now with real descriptions), Review — gated behind `reviewsConfirmed`

### Content depth — measured, second pass

**Client confirmed:** the company operated in California first and is now expanding into Dallas–Fort Worth. The photography is therefore genuine company work, not stock or third-party — it simply is not DFW work. It can be presented as the company's portfolio; it cannot be captioned as local jobs. `MEDIA-PROVENANCE.md` updated accordingly.

**Service pages — all 8 now exceed Star Gate's 1,100-word best page:**

| Page | Before | After | H3s |
|---|---:|---:|---:|
| Gate motor & operator repair | 794 | **2,099** | 7 |
| Gate installation | ~790 | **1,454** | 7 |
| Commercial & HOA | ~790 | **1,375** | 8 |
| Emergency repair | ~790 | **1,342** | 7 |
| Automatic gate repair | ~790 | **1,339** | 7 |
| Iron gate & welding | ~790 | **1,329** | 8 |
| Electric gate repair | ~790 | **1,324** | 8 |
| Access control & intercom | ~790 | **1,306** | 9 |

Each gained `causes` (H3 passages on root causes), `maintenance` (what an owner can do vs what needs a technician), `repairVsReplace`, and 2–3 additional FAQs. Source: `content/service-depth.ts`.

**Brand pages:**

| Page | Before | After | H3s |
|---|---:|---:|---:|
| FAAC (flagship, uncontested) | 728 | **1,566** | 7 |
| LiftMaster | ~700 | **1,181** | 7 |
| All-O-Matic (uncontested) | ~700 | **1,095** | 4 |
| Ramset (uncontested) | ~700 | **1,051** | 4 |
| DoorKing | 421 | **858** | 4 |
| Viking | ~700 | 814 | 3 |
| Elite | ~700 | 772 | 3 |
| HySecurity | 421 | 743 | 4 |
| Eagle | ~700 | 653 | 2 |
| Linear | 421 | 627 | 3 |

Source: `content/brand-depth.ts`.

**`/pricing` unlisted** — removed from desktop nav, mobile nav, sitemap and homepage; page set `robots: noindex`; the "Price before we start" card now links to Request a Free Estimate.

### Honestly NOT completed

| Item | Status |
|---|---|
| Brand pages: Elite, Viking, Eagle, Linear, HySecurity | **Partial.** 627–814 words — improved but below the 1,300 target |
| City pages to 1,400–1,600 words | **Not done.** Plano still 957 |
| Gallery filtering/pagination | **Not done.** Still 484 KB, unfiltered |
| `/faq`, `/projects`, `/warranty`, `/about`, `/emergency` | **Not built** |
| Before/after slider | Not built |
| Google Maps on city pages | Not built |

These remain High priority and are the reason I still cannot claim "no remaining High findings".

---

## 2. REQUIRES CLIENT INPUT

Full script in **[CLIENT-CALL.md](CLIENT-CALL.md)**. Summary by impact:

| # | Blocker | Field | Impact |
|---|---|---|---|
| 1 | Google rating + review count | `business.rating` | SERP stars + the 5-second test |
| 2 | 6–8 real Google reviews | `content/reviews.ts` | Largest conversion lever |
| 3 | **Where were the photos taken?** | — | Blocks all local proof copy |
| 4 | TX Private Security Bureau licence | `business.license` | Competitors display theirs |
| 5 | California or DFW? | — | Blocks the redirect map / migration |
| 6 | Publish price ranges? | `content/pricing.ts` | Biggest content gap in the market |
| 7 | Years in business | `business.yearsInBusiness` | Table stakes |
| 8 | Warranty term | `business.warrantyTerm` | No competitor headlines one |
| 9 | Insurer / bonded | `business.insurance` | Table stakes |
| 10 | Physical address | `business.address` | LocalBusiness schema + Ads |
| 11 | Real response times per city | `cities.responseBand` | No competitor publishes any |
| 12 | Background-checked technicians? | `business.backgroundChecked` | Strongest trust line in market |
| 13 | Local 214/469/972/682 number | `business.phone` | Likely the biggest single lever |
| 14 | Authorized dealer? | `business.authorizedDealer` | Legal accuracy |
| 15 | Technician name + photo | — | Cheapest high-impact trust item |

---

## 3. OPTIONAL ENHANCEMENTS (post-launch)

Blog / cost-guide content · appointment scheduler · financing options · live "technicians available" counter · exit-intent capture · review filtering by service and city · dark mode · print stylesheet for quotes · `HowTo` schema on diagnostic sections · per-page OG images · `sameAs` links once social URLs exist · breadcrumb UI · custom 404 with phone and service areas

---

## 4. GO / NO-GO

### **NO-GO for the production domain today.**

If it were my call, I would not migrate this to `shieldgaterepair.com` today. Five reasons, in order:

**1. The California question is unresolved — and it is a migration blocker, not a content one.** The live site has 14 California county pages. Until the client says whether that market is real, the redirect map is incomplete and cutover risks either orphaning real pages or pointing California URLs at Dallas content. *(Blocked on client.)*

**2. The photography provenance is unresolved.** We are about to launch a Dallas-targeted site built on Southern California job photos. I have stripped every false claim, so nothing on the site is now untrue — but a Dallas homeowner seeing palm trees is a credibility problem that copy edits cannot fix. *(Blocked on client.)*

**3. No verifiable trust data.** The hero shows proof chips; two of six are "25 repairs on video" and "Open 24 hours" because they are the only claims I can substantiate. A homeowner comparing us with Everlast sees 2,600 reviews on one side and no evidence of a single customer on the other. *(Blocked on client.)*

**4. `/pricing` contradicts itself.** Twelve rows of `—` under a headline promising transparency. **Hide it from the nav before launch** if the numbers aren't ready — this one is ours to fix and takes 15 minutes.

**5. Service and brand pages are shallower than the competitor we claim to beat.** 794 and 728 words against Star Gate's 1,100. This is ours, it isn't blocked, and it is the largest remaining organic gap.

### What a GO looks like

- **Client call completed** (15 minutes, script in `CLIENT-CALL.md`) — clears blockers 1–3
- **Pricing hidden or populated** — 15 minutes
- **Service pages → ~1,600 words with H3 structure; brand pages → ~1,400** — roughly one day
- **Gallery filtering** — half a day
- **Full QA:** real devices, keyboard-only, screen reader, end-to-end form submission against a live MongoDB — half a day

**Realistically: one client call plus two working days.**

### What is genuinely excellent and should not be touched

The video strategy is a verified, uncontested moat — **zero of fourteen competitors embed any video** and we have 25 with hand-written `VideoObject` metadata. The FAAC / All-O-Matic / Ramset pages target demand nobody in DFW serves. The symptom tables are the best service-page content in this market. The guided problem form has no competitor equivalent. The technical foundation — static rendering, ~105 KB gzipped JS, AVIF at five widths, complete schema — beats every WordPress competitor outright.

**The gap to #1 was never design. It is proof.** Four of the five NO-GO reasons resolve in a single phone call.
