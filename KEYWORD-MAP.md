# Keyword → Page Map (DFW)

**Updated:** 7 Oct 2026 · **Goal:** qualified calls and estimate requests, not traffic.

**Rule:** one strong page owns each keyword group. City and "near me" variations are carried by city pages plus the owning service or brand page, never by a separate page per variation. 30 keywords × 26 cities would be 780 near-duplicate pages, which is exactly what Google's scaled-content policy targets.

**No search volumes are quoted.** None were available. Pull them from Google Ads Keyword Planner and Search Console before reprioritising.

---

## 1. Ownership map

✅ = done 7 Oct 2026 · 🟡 = page exists and is adequate · 🔴 = gap

| # | Keyword group | Owner page | Also supports | Status |
|---|---|---|---|---|
| 1 | Automatic gate repair | Home (DFW head term) + `/services/automatic-gate-repair` | City pages: title "Automatic Gate Repair {City}, TX" | ✅ retitled "Automatic & Driveway Gate Repair" |
| 2 | Electric gate repair | `/services/electric-gate-repair` | — | ✅ retitled "Electric Gate Repair — Driveway & Solar" |
| 3 | Gate repair | Home + **city pages** | All | ✅ city titles contain "Gate Repair {City}" verbatim |
| 4 | Gate opener repair | `/services/gate-motor-repair` | Brand pages ("{Brand} Gate Opener Repair") | ✅ renamed "Gate Opener & Motor Repair" (URL kept) |
| 5 | Driveway gate repair | `/services/automatic-gate-repair` | — | ✅ in title + H1 |
| 6 | Sliding gate repair | **new** `/services/sliding-gate-repair` | 3 symptom pages, 12 slide model pages | ✅ built from 10 verified jobs |
| 7 | Swing gate repair | **new** `/services/swing-gate-repair` | 3 symptom pages, 12 swing model pages | ✅ built from 8 verified jobs |
| 8 | Gate motor repair | `/services/gate-motor-repair` | — | ✅ (same page as #4) |
| 9 | Emergency gate repair | `/emergency` | `/services/emergency-gate-repair` (diagnostic long tail) | ✅ legacy WordPress URL now 301s to `/emergency` |
| 10 | Commercial gate repair | `/services/commercial-gate-repair` | — | 🟡 no B2B form yet (see LEAD-GEN-AUDIT.md) |
| 11 | Residential gate repair | `/services/automatic-gate-repair` | City pages | 🟡 |
| 12 | Automatic gate opener repair | `/services/gate-motor-repair` | — | ✅ |
| 13 | Electric driveway gate repair | `/services/electric-gate-repair` | — | ✅ |
| 14 | Solar gate opener repair | `/services/electric-gate-repair` | `/gate-problems/gate-battery-keeps-dying` | 🟡 consider a solar passage |
| 15 | Gate keypad repair | `/services/access-control-repair` | `/gate-problems/gate-keypad-not-working` | 🟡 |
| 16 | Gate access control repair | `/services/access-control-repair` | DoorKing model pages | 🟡 |
| 17–18 | Gate opener / automatic gate installation | `/services/gate-installation` | — | 🔴 title is generic "Gate Installation"; retitle next |
| 19–20 | LiftMaster gate / opener repair | `/brands/liftmaster` | City pages (LiftMaster first in the roster) | ✅ now shows 6 of 8 verified jobs, each with its city |
| 21 | LiftMaster LA400 repair | `/brands/liftmaster/la400-repair` | Swing service page | 🟡 3 verified LA400 jobs (University Park, Dallas, Lake Kiowa) |
| 22 | LiftMaster LA500 repair | `/brands/liftmaster/la500-repair` | Swing service page | 🟡 no verified LA500 job yet |
| 23–30 | US Automatic, Viking, DoorKing, Eagle, Elite, FAAC, Ramset, Nice Apollo | `/brands/{slug}` + model pages | Gate-type service pages | 🟡 next phase |

---

## 2. City coverage (initial 26 cities)

All 26 have an indexed page with genuine local content. **The difference between a city page that converts and one that doesn't is a real job in that city.** Each verified job now appears directly under the hero, with the brand and city on the card.

| City | Verified jobs on page | Next action |
|---|---|---|
| Dallas | 5 (LiftMaster ×5) | ✅ |
| Richardson | 3 (LiftMaster, Ramset, Viking) | ✅ |
| Fort Worth, Frisco, Mesquite, Southlake, Coppell, Prosper, University Park | 1 each | Get 1–2 more |
| **Arlington, Plano, McKinney, Allen, Irving, Carrollton, Garland, Grand Prairie, Colleyville, Grapevine, Keller, Flower Mound, Lewisville, Denton, Mansfield, Rockwall, Highland Park** | **0** | **Ask the client for one written-up job per city** (same Word-doc format as the 18 he sent on 29 Sep). Highest value: Plano, Frisco, McKinney, Southlake, Highland Park. |

**What the client needs to send for each job:** city, gate type, operator brand and model, symptom, what was found, what was replaced, the outcome, 3–6 photos (before / during / after), the price if he is willing, and a customer video if there is one. The page templates pick each job up automatically on the city, brand, model, service and gate-type pages.

---

## 3. "Near me" searches

"Near me" ranking comes from **Google Business Profile proximity and prominence**, plus the page's location relevance. It does not come from writing "near me" on the page, and stuffing it into copy is a known low-quality signal. What actually moves it:

1. **A verified GBP** with the 214 number, service areas set to the 26 cities, categories (Gate repair service; Fence contractor if applicable), and real job photos uploaded weekly.
2. **Google reviews.** The site has **none**, while competitors show 107 to 2,600+. This is the largest single gap for both "near me" and the map pack. The review-request system in the codebase is built but cannot send until the client supplies the GBP review link (see LEAD-GEN-AUDIT.md §O).
3. **City pages with local proof** (done above) and consistent NAP.

---

## 4. What changed in code (7 Oct 2026)

| File | Change |
|---|---|
| `content/services.ts` | New `sliding-gate-repair` and `swing-gate-repair` services. "Gate Opener & Motor Repair" rename. Automatic and electric retitles. `cardLine` per service. Emergency `legacyPath` removed (it shadowed the `/emergency` 301). |
| `content/service-depth.ts` | Long-form causes, maintenance and repair-vs-replace for sliding and swing, citing only the client's documented jobs |
| `app/services/[slug]/page.tsx` | Gate-type pages draw verified jobs and matching operator models by `gateType` (6 shown). Hidden `sr-only` keyword text removed. |
| `app/[citySlug]/page.tsx` | Title "Automatic Gate Repair {City}, TX \| Same-Day 24/7" with length-safe fallbacks. Matching H1. Description names openers and automatic gates. **Verified jobs moved directly under the hero** (6 shown). Descriptive service cards. "Seen here" (drafted data) replaced by "Our job here" (verified jobs only). Hidden keyword text removed. |
| `app/brands/[slug]/page.tsx`, `components/sections/model-page.tsx` | Hidden keyword text removed. Brand pages show 6 case studies. |
| `components/sections/case-studies.tsx` | Verified jobs show a city badge ("Richardson, TX") on every card site-wide |
| `content/case-studies-client.ts` | 11 job titles now carry brand + fault + city (e.g. "Eagle Sliding Gate Wheel Repair, Mesquite TX") |
| `content/symptoms/mechanical.ts` | Off-track, wheels and chain link to sliding; sagging, post and swing-stuck link to swing |

Validated: `tsc`, `npm run validate` (cities, models, symptoms, linking, 410s, meta), and `npm run build`. Sitemap is 271 URLs; all titles are 60 characters or fewer.

---

## 5. Next batch (in order)

1. Retitle `/services/gate-installation` → "Automatic Gate & Opener Installation | DFW" (keywords 17–18).
2. Brand pages for keywords 23–30: verify each has jobs and models surfaced; add a "Nice Apollo" alias, since searchers use both names.
3. A solar passage on the electric page (keyword 14) and a keypad passage on access control (keyword 15).
4. Client: one written-up job for each 0-job city above, plus the GBP review link.
5. After deploy: request indexing in Search Console for the 2 new service pages and the 26 city pages, then watch impressions for "{service} {city}" queries over 4–6 weeks.
