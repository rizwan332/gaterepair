# Brand × City Architecture — the map before the build

**Prepared 16 Sep 2026.** Written because the brief is to compete for every important brand in every city we serve, without building thousands of near-identical pages. Both halves of that are achievable, but not by the obvious route.

The research behind this is in §8. The short version: **the pages that rank for "LiftMaster gate repair Plano TX" are city pages that mention the brand, not brand×city URLs** — and the only two networks found building brand×city at scale are 86–94% duplicate.

---

## 1. What exists today

| Layer | URLs | Indexed | Notes |
|---|---:|---:|---|
| Home + hubs | 4 | 4 | `/`, `/service-areas`, `/brands`, `/services` |
| Service pages | 8 | 8 | metro-level, symptom tables |
| City pages | 190 | **14** | 176 are `noindex, follow` by deliberate decision |
| Brand pages | 17 | 17 | |
| Model pages | 43 | 43 | built 15 Sep 2026 |
| Ads landing pages | 6 | 1 | `noindex` except `/faac-gate-repair` |
| Case studies | 18 | 18 | none carries a city or a model |
| Video watch pages | 25 | 25 | |

**The client's keyword file** (`Shield_Gate_Repair_DFW_SEO_Master_Keywords.pdf`, 10,000 phrases) is a clean matrix over **95 cities**:

| Section | Shape | Lines |
|---|---|---:|
| 1 — city + service | 30 phrases × 95 cities | 2,850 |
| 2 — city + brand | 11 brands × 3 phrasings × 95 cities | 3,135 |
| 3 — city + model | 9 models × 95 cities | 855 |
| 4 — symptom + city | 33 phrases × 95 cities | 3,135 |
| 5 — head terms | near-me / DFW | 23 |

Brands in section 2, identical for all 95 cities: LiftMaster, US Automatic, DoorKing, DKS, Viking, FAAC, All-O-Matic, Elite, Eagle, Ramset, Apollo.

### Two contradictions in the client's own inputs

1. **Fort Worth is not on the service-area list** (`scripts/client-city-list.ts`, 190 entries) and has no page — but it has a full block in every section of the keyword file. The second-largest city in the metro currently 404s. Nine more keyword-file cities are also absent: Watauga, Richland Hills, Lantana, Bartonville, Hickory Creek, Cross Roads, Lavon, Lowry Crossing, Nevada. **Adding a city needs the client to say so** — the list is the source of truth by design.
2. **81 of the 95 keyword cities are `noindex`.** The keyword file targets cities whose pages we are deliberately not submitting. That mismatch, not the absence of brand×city pages, is the largest addressable gap in the current setup.

---

## 2. The architecture

```
                         ┌──────────────────────────┐
                         │  ONE LocalBusiness node  │  ← every page's provider
                         └────────────┬─────────────┘
   /                                  │
   ├─ /service-areas ──── 190 city pages ─────────────┐
   │                        /gate-repair-<city>-tx    │
   │                          ├─ brands seen here ────┼──► /brands/<brand>
   │                          ├─ models seen here ────┼──► /brands/<brand>/<model>-repair
   │                          ├─ symptoms + local causes ──► /services/<slug>
   │                          ├─ jobs done here ──────┼──► /projects/<slug>
   │                          └─ nearby cities ───────┘
   │
   ├─ /brands ──────────── 17 brand pages
   │                          ├─ models ──────────────► /brands/<brand>/<model>-repair
   │                          └─ cities we do this in ─► /gate-repair-<city>-tx
   │
   └─ /services ────────── 8 service pages
                              ├─ brands ──────────────► /brands/<brand>
                              └─ models ──────────────► /brands/<brand>/<model>-repair
```

**Brand × city pages are a fifth layer that hangs off the city, not the brand** — see §4. They are an exception granted per combination, not a grid.

### Why the city page carries brand+city intent

"LiftMaster gate repair Plano TX" and "gate repair Plano TX" are the **same job-to-be-done**: hire someone today. Google's canonicalization works against splitting them — with near-duplicates it picks the version it judges best, which will be the established city page, leaving the new URL unselected. So the default is to make the city page answer the brand question, rather than to mint a second URL that competes with it.

---

## 3. Keyword → page map (the anti-cannibalization contract)

Every keyword family has exactly one owner. Anchor text pointing at a page uses that page's own head term.

| Keyword family | Example | Canonical owner | New URLs |
|---|---|---|---|
| `gate repair <city>`, `automatic/electric gate repair <city>` | gate repair Plano TX | city page | none |
| `<service> <city>` | sliding gate repair Plano TX | city page (service section, linking the service page) | none |
| `<symptom> <city>` | gate opens halfway then stops Plano TX | city page (symptom block with local causes) | none |
| `<brand> gate repair <city>` | LiftMaster gate repair Plano TX | **city page brand block** — until that combination earns its own page (§4) | none, then ≤100 |
| `<brand> gate repair`, `<brand> gate opener repair`, `<brand> + DFW` | FAAC gate repair Dallas–Fort Worth | brand page | none |
| `<model> repair`, `<model> repair near me` | LiftMaster LA500 repair | model page | none |
| `<model> repair <city>` | LiftMaster LA500 repair Plano TX | model page (its DFW section + city links) | none |
| `<service>` metro | emergency gate repair | service page | none |
| near-me / DFW head terms | gate repair near me | home + city pages | none |

**Rules that keep it honest**

- One H1 pattern per family. City page: `Gate Repair in <City>, TX`. Brand: `<Brand> Gate Operator Repair in Dallas–Fort Worth`. Model: `<Brand> <Model> Repair in Dallas–Fort Worth`. Brand×city: `<Brand> Gate Repair in <City>, TX`.
- No two indexed pages may target the same head term. `validate:meta` already fails the build on duplicate titles; §7 extends that.
- A brand×city page may not restate the brand page. It answers what is different **here**.

---

## 4. When a brand × city page is allowed to exist

All four must hold. This is the same shape as the model-page quality gate: a flag in a content file cannot authorise a page.

1. **Measured demand.** Search Console impressions for that brand+city (or Google Ads conversions). Suggested floor: **≥30 impressions in 90 days, or ≥1 Ads conversion.** No estimate, no proxy — the keyword file carries no volumes.
2. **The city page is already indexed.** Never build a brand×city page under a city we are not submitting. Today that means the combination's city is one of the 14 (§6 grows this).
3. **≥2 first-party proof assets tied to that city AND brand** — a dated job record with model and fault, a photo from that job, a review naming the brand, or a named technician's account.
4. **A question the city page and the brand page cannot answer between them.** If the page's value is "we do LiftMaster, and we do Plano", the two existing pages already say that.

Ceiling: **top 10–20 cities × top 4–6 brands ≈ 40–100 URLs**, never the 3,230 grid. Released in batches of 10–20, each batch measured for two quarters before the next. Any page with zero impressions after two quarters, or whose proof assets are removed, is **301'd into its city page**.

### URL form

```
/gate-repair-plano-tx/liftmaster
```

Nested under the city, because that is the relationship being asserted and because Google's doorway policy contrasts doorways with "a clearly defined, browseable hierarchy". Every token of the query is present. The flat alternative (`/liftmaster-gate-repair-plano-tx`) matches the query string more literally; it is the fallback if measurement ever shows the nested form underperforming, and the two must never both exist.

### Page contract

| Block | Source | Unique? |
|---|---|---|
| H1 `<Brand> Gate Repair in <City>, TX` | — | yes |
| Shield panel: yes we work on this brand, here | business facts | shared |
| What is different about this brand **in this city** | technician interview | **yes** |
| Jobs we have done: dated, model named, photo | job records | **yes** |
| Models of this brand we see here → model pages | evidence + links | **yes** |
| Brand faults + parts we carry | brand data | shared with brand page, summarised |
| Neighborhoods / zips / roads | city data | **yes** |
| FAQs written for this combination | interview + GSC queries | **yes** |
| Nearby cities we also cover for this brand | city graph | **yes** |
| Call + free estimate, form | shared | shared |

---

## 5. Schema

Per research (§8), `Service` earns no rich result and is descriptive only; `LocalBusiness` is the supported type and must stay **one node for the business**, never one per page.

| Page | Nodes |
|---|---|
| City | `Service` (provider → `#business`, `areaServed` = City) + `FAQPage` + `BreadcrumbList` |
| Brand | `Service` + `FAQPage` + `BreadcrumbList` |
| Model | `Service` + `FAQPage` + `BreadcrumbList` |
| Brand × city | `WebPage` + `Service` (`serviceType: "<Brand> gate operator repair"`, `areaServed` = City, provider → `#business`, `about` → `{"@type":"Brand","name":"<Brand>"}`) + `FAQPage` + `BreadcrumbList` (Home → Service Areas → City → Brand) |

**Never:** `brand:` on our own Service (schema.org defines it as a brand the organization maintains — it implies manufacturer or authorized dealer, and we are neither); `aggregateRating`/`itemReviewed` against a manufacturer product; `LocalBusiness` on a page that is not a location; markup for content not visible on the page.

---

## 6. What actually moves the needle, in order

Ranked by expected return, not by page count. Items 1–3 are worth more than every brand×city page combined.

1. **Fort Worth.** The #2 city in the metro 404s. Needs the client to add it to the list; then a Tier 1 build (neighborhoods, zips, roads, gate profile, FAQs, coordinates).
2. **Local pack inputs, which no URL can substitute for.** A visible address is the single strongest signal in the Sterling Sky study, and ours is unconfirmed; reviews are all placeholders with `reviewsConfirmed = false`. Brand+city SERPs are part local pack, and the pack is won by Google Business Profile, reviews and address — not by pages.
3. **Promote city pages out of `noindex`.** 81 of the 95 keyword-file cities are currently not submitted. Each promoted city page competes for that city's `<brand> gate repair <city>` phrases immediately, via its brand block. Promotion is a data change: fill `localAngle` (100+ words), 3+ neighborhoods, 1+ FAQ. **This is the highest-leverage work in the whole brief.**
4. **Brand blocks + full internal linking on city pages** (§2) — no new URLs.
5. **Deepen the 17 brand pages with DFW-specific proof** — the competitor field has brand pages everywhere and brand-specific evidence nowhere.
6. **Model-level depth** — currently owned by parts retailers and PDF manuals. 43 pages exist; symptom and error-code depth extends them.
7. **Pilot 10–20 brand×city pages** under §4, and only then.

---

## 7. Enforcement

New script `scripts/validate-linking.ts`, added to `npm run validate`:

- every indexed city page links to ≥5 brand pages and ≥3 model pages
- every model page is reachable from ≥1 brand page and ≥1 city page
- every brand page links to its models and to ≥10 city pages
- no orphan: every indexed URL has ≥1 internal inbound link, ≤3 clicks from home
- anchor-text check: a link to a page uses that page's head term, and no single anchor string is used on more than N pages
- brand×city pages: gate from §4 enforced in code (`lib/brand-city-quality.ts`, mirroring `lib/model-quality.ts`), failing pages served `noindex` and kept out of the sitemap
- shingle check across brand×city pages, as `validate-cities.ts` does for cities

---

## 8. The research this rests on

**Google policy.** Spam policies (updated 28 Aug 2026) define doorway abuse as "multiple domain names or pages targeted at specific regions or cities that funnel users to one page" and "substantially similar pages that are closer to search results than a clearly defined, browseable hierarchy". The 2015 doorway test still bites hardest: *"Do the pages duplicate useful aggregations of items (locations, products, etc.) that already exist on the site for the purpose of capturing more search traffic?"* Since March 2024 the policy is method-neutral — hand-writing the pages is not a defence. Scaled-content assessment is **site-level**, so a bad grid risks the 14 city pages that already work.

**What ranks.** Probes for "liftmaster gate repair plano tx" and "doorking repair dallas" returned the manufacturer dealer locator, directories, and ordinary city pages — including our own `/gate-repair-plano-tx`. No independent company's brand×city page appeared. (Inferred from search-tool snippets, not a logged-out SERP — treat as indicative, not measured.)

**The competitive field**, fetched 16 Sep 2026:

| Site | URLs | Brand pages | City pages | Brand×city |
|---|---:|---|---|---|
| everlastgates.com | 1,341 | 11 | yes | **0** |
| garagetec.org | 498 | 15 | yes | **0** |
| 4suregates.com | 290 | 8 | yes | **0** |
| metrogatesrepair.com | 271 | 3 | yes | **0** |
| jjgates.com | 198 | 2 | yes | **0** |
| stargateandfence.com | 141 | 1 | yes | **0** |
| a1gateguys.com | 114 | 4 | yes | **0** |
| gaterepairdallas.com | 61 | 0 | yes | **0** |
| gaterepairpro.com | 21,381 | 1,856 | yes | **yes, at scale** |

The one exception is a national lead-gen network, not a DFW operator: two of its city pages for the same brand measured **86.3% identical**. An appliance-repair network measured **94.2% identical**. That is the pattern to avoid, and it is what the grid would produce.

**Manufacturer locators.** `local.liftmaster.com/tx/plano/` exists only where an authorized dealer exists (Frisco, McKinney and Southlake return 404). DoorKing runs an authorized-dealer finder. Viking and FAAC publish none. Entering those is a dealer-authorization decision, not an SEO one — and we do not claim dealer status.

**AI search.** Organic strength still correlates with citation (Ahrefs, Jul 2025: 76.1% of AI Overview citations ranked top 10; their Mar 2026 re-analysis says 38% on changed methodology — the two are not comparable). No controlled study links schema to local AI citations. Google does not support `llms.txt` and has compared it to meta keywords — do not build one. What AI systems appear to reward is the same thing this architecture builds: one consistent entity, stated relationships, and first-party evidence.

---

## 9. What the client must supply

Nothing in §4 can be satisfied from the desk. In priority order:

1. **Confirm Fort Worth** (and the other nine) for the service-area list.
2. **Business address**, and real reviews to replace the placeholders.
3. **Search Console query export** (16 months, page + query) and **Google Ads search-terms + conversions by city** — this is what decides which combinations pass gate 1. Without it, nobody can say which brand+city combinations have "enough search value".
4. **Job records with city, date, brand, model, fault, fix** — gate 3, and it also fixes the 18 case studies that currently name no city or model.
5. **Technician interview, ~45 minutes**, covering the top 20 cities: which brands turn up where, and what is different about working on them there. This is the content no competitor can copy and the only thing that makes a brand×city page non-generic.
