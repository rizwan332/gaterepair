# City Pages — Architecture for 170+ Genuinely Unique Pages

**Decision: every city on the client's list gets its own page.** You asked for this explicitly after I raised the scaled-content risk, so this document is about doing it *properly* rather than not doing it.

The risk is real but it is entirely about **execution, not page count**. Google penalises pages that add no value, not pages that exist. Metro Gate Repair runs 50+ city pages at ~5% unique content and still ranks. A page at 40–50% genuinely local content is not what the scaled-content-abuse policy targets — and it will beat every competitor page in this market.

---

## 1. The bar you have to clear

From the teardowns in `COMPETITOR-INTELLIGENCE.md`:

| Competitor page | Words | % local | Neighborhoods | Zips | Landmarks | Response time |
|---|---:|---:|:-:|:-:|:-:|:-:|
| Metro — Plano | 3,000 | ~5% | ❌ | ❌ | ❌ | ❌ |
| 4 Sure — Plano | 2,100 | ~20% | ❌ | ❌ | ❌ | ❌ |
| A1 — Dallas | 850 | ~5% | ❌ | ❌ | ❌ | ❌ |
| **Shield target** | **1,200–1,800** | **40–50%** | ✅ | ✅ | ✅ | ✅ |

**Shorter pages, more unique content.** Metro's 3,000 words are mostly duplicated boilerplate — that's a liability, not an asset. Do not pad to match their word count.

---

## 2. The data model

Uniqueness comes from **structured local data**, not from an LLM paraphrasing the same paragraph 170 times. Fill the data, and unique prose falls out of it.

```ts
// content/cities.ts
export type City = {
  slug: string                 // "flower-mound"
  name: string                 // "Flower Mound"
  county: string               // "Denton County"
  zips: string[]               // ["75022", "75028", "75027"]
  population: number
  neighborhoods: string[]      // 4-8 REAL named subdivisions/areas
  landmarks: string[]          // 3-5 REAL local landmarks
  majorRoads: string[]         // ["FM 1171", "Cross Timbers Rd", "I-35W"]
  nearbyCities: string[]       // 4-6 slugs — powers internal linking
  responseBand: '30-45' | '45-60' | '60-90' | '90-120'   // realistic drive time from base
  tier: 1 | 2 | 3
  gateProfile: {               // what gates are ACTUALLY common here — this is the differentiator
    dominant: string           // "gated custom-home communities on large lots"
    commonGateTypes: string[]  // ["wrought iron swing", "estate slide"]
    commonBrands: string[]     // ["LiftMaster", "Elite", "All-O-Matic"]
    commonIssues: string[]     // ["clay-soil post shift", "storm surge board failure"]
    propertyMix: string        // "residential estate, some HOA-managed entrances"
  }
  localAngle: string           // 2-4 sentences. The ONE thing true here and nowhere else.
  faqs: { q: string; a: string }[]    // 3-5, at least 2 city-specific
  projectIds: string[]         // real jobs done in/near this city
  mapEmbed: { lat: number; lng: number; zoom: number }
}
```

### The three fields that do the real work

**`gateProfile`** — this is the whole game. A gate technician genuinely knows that Highland Park has ornate wrought-iron estate gates on narrow historic lots, that Frisco is dominated by newer HOA-managed slide gates on master-planned entrances, and that Weatherford has long rural driveways running solar-powered swing operators. Nobody in this market writes that, because they're marketers, not technicians. **Get this from the client — one 45-minute call covering the 40 cities they work in most produces content no competitor can replicate.**

**`localAngle`** — 2–4 sentences that are true *only* of this city. Not "Plano is a premier community." Something like: *"Most gate calls we take in Plano's West Plano and Willow Bend neighborhoods are 1990s–2000s slide operators that have outlived their control boards. Parts for that generation of LiftMaster and Elite units are still available, so a board swap usually beats a full operator replacement."*

**`responseBand`** — a real drive-time band from the client's base. **No competitor publishes response times at all.** It's honest, it's operationally useful, and it's a conversion lever in an emergency trade.

---

## 3. Page structure

Blocks marked 🟢 are city-specific and must never repeat across pages. Blocks marked ⚪ are shared components (fine — these are UI, not content).

| # | Block | Type |
|---|---|---|
| 1 | H1 `Gate Repair in {City}, TX — Same-Day Service` | 🟢 |
| 2 | Hero: local photo if one exists, else category photo. Sub-line names county + response band | 🟢 |
| 3 | Trust bar (rating, license, insured, years) | ⚪ |
| 4 | **Local intro** — `localAngle`, 120–180 words | 🟢 |
| 5 | **Gates we service in {City}** — from `gateProfile`, 150–250 words | 🟢 |
| 6 | **Neighborhoods & areas we cover** — named list + zips | 🟢 |
| 7 | **Response time** — band + major roads used | 🟢 |
| 8 | Services grid (14 categories) | ⚪ |
| 9 | Brands grid | ⚪ |
| 10 | **Recent projects in / near {City}** — real jobs from `projectIds` | 🟢 |
| 11 | Video reel | ⚪ |
| 12 | **{City} FAQs** — 3–5, ≥2 city-specific | 🟢 |
| 13 | Pricing teaser → `/pricing` | ⚪ |
| 14 | **Nearby cities we also serve** — from `nearbyCities` | 🟢 |
| 15 | Map centred on the city | 🟢 |
| 16 | CTA + footer | ⚪ |

Eight of sixteen blocks are unique. That's the 40–50%.

### Hard rules

1. **No `{City}`-substituted boilerplate sentences.** If a sentence works for any city by swapping one word, it belongs in a shared component, not in the city's prose.
2. **Every page names at least 3 real neighborhoods and 2 real landmarks.** If you can't source them, the city is Tier 3 (see below) — don't invent them.
3. **`localAngle` and city FAQs are written per city, reviewed by a human.** Draft with AI, but every one gets read and edited. This is the difference between the policy applying to you and not.
4. **Never claim a physical address in a city where there isn't one.** Metro lists 5 offices; if Shield has one location, say so. Fake location pages are a Google Business Profile violation with real consequences.
5. **Response bands must be honest.** Publishing "30 minutes" to Stephenville (90+ min from Dallas) destroys the trust the number is supposed to build.

---

## 4. Tiering — all cities ship, but not all at once

Every city gets a page. Tiers govern **depth and launch order**, not existence.

### Tier 1 — 15 cities · 1,500–1,800 words · launch week 1
Dallas · Fort Worth · Plano · Frisco · McKinney · Irving · Garland · Arlington · Richardson · Carrollton · Mesquite · Denton · Rockwall · Allen · Grand Prairie

Full treatment: 6–8 neighborhoods, 4–5 landmarks, 5 FAQs, 3+ real local projects, dedicated hero photo, full `gateProfile`.

### Tier 2 — ~40 cities · 1,200–1,500 words · launch weeks 2–3
Addison · Aledo · Alvarado · Anna · Argyle · Azle · Bedford · Benbrook · Burleson · Cedar Hill · Celina · Cleburne · Colleyville · Coppell · Corinth · Crowley · Decatur · DeSoto · Duncanville · Euless · Fairview · Farmers Branch · Flower Mound · Forney · Grapevine · Haltom City · Haslet · Highland Park · Highland Village · Hurst · Keller · Kennedale · Lancaster · Lewisville · Little Elm · Lucas · Mansfield · Midlothian · Murphy · North Richland Hills · Northlake · Parker · Prosper · Red Oak · Roanoke · Rowlett · Royse City · Sachse · Saginaw · Seagoville · Southlake · Sunnyvale · The Colony · Trophy Club · University Park · Waxahachie · Weatherford · Wylie

4–6 neighborhoods, 3 landmarks, 3–4 FAQs, ≥1 real project, `gateProfile` filled.

### Tier 3 — remaining ~110 cities · 700–900 words · launch weeks 4–6
All remaining cities on the client's list — Alvord, Annetta, Athens, Aubrey, Aurora, Balch Springs, Blue Ridge, Bonham, Bowie, Boyd, Bridgeport, Briar, Bristol, Caddo Mills, Callisburg, Campbell, Canton, Celeste, Chico, Collinsville, Comanche, Combine, Cool, Copeville, Crandall, Cresson, Denison, Dublin, East Tawakoni, Eastland, Edgewood, Elmo, Emory, Everman, Farmersville, Fate, Ferris, Forest Hill, Gainesville, Glenn Heights, Glen Rose, Godley, Granbury, Grandview, Greenville, Gunter, Gun Barrel City, Heath, Howe, Hudson Oaks, Hutchins, Josephine, Joshua, Justin, Kaufman, Keene, Kemp, Krum, Lake Dallas, Lake Worth, Leonard, Lindsay, Lipan, Lone Oak, Mabank, Malakoff, Maypearl, Melissa, Milford, Millsap, Mineral Wells, Morgan Mill, Muenster, New Fairview, Newark, Nocona, Oak Leaf, Ovilla, Palmer, Paradise, Peaster, Pilot Point, Point, Poetry, Ponder, Poolville, Pottsboro, Princeton, Quinlan, Rendon, Rhome, Rio Vista, Saint Jo, Sadler, Sanger, Scurry, Sherman, Springtown, Stephenville, Talty, Terrell, Tioga, Tolar, Tom Bean, Valley View, Van Alstyne, Venus, West Tawakoni, Westlake, Westminster, White Settlement, Whitewright, Whitesboro, Willow Park, Wilmer, Wills Point

Shorter but still honest: `localAngle`, county, zips, 2–3 neighborhoods where sourceable, real response band, 3 FAQs, nearby-city links. **A short honest page is safe. A long templated page is not.**

**Ship tiers in waves, not all at once.** 170 pages appearing overnight on a domain that is simultaneously being repointed from California to Texas is a pattern worth avoiding. Three waves over six weeks looks like a business building out its service area, because that's what it is.

---

## 5. Sourcing the local data

Do not invent any of it.

| Field | Source |
|---|---|
| zips, population, county | US Census / USPS lookup |
| neighborhoods | City planning sites, HOA directories, real-estate area guides |
| landmarks | Google Maps POIs — parks, schools, shopping centres, civic buildings |
| majorRoads | TxDOT / Google Maps |
| responseBand | Real drive time from the client's base, rounded conservatively **up** |
| **gateProfile** | **The client.** One 45-minute technician interview covering their top 40 cities |
| projectIds | The client's actual job history + the 122-photo library |

The technician interview is the highest-value hour in this project. It produces the one content category no competitor and no AI can fabricate: what actually breaks, where, and why.

---

## 6. URL & internal linking

```
/gate-repair-dallas-tx
/gate-repair-flower-mound-tx
```

Flat, keyword-matched, matches how people search. Keep the existing `/gate-repair-dallas-fort-worth/` URL and 301 it to the DFW hub.

**Linking:**
- `/service-areas` hub → all 170, grouped by county
- Each city → 4–6 `nearbyCities` (reciprocal, forms a real geographic graph, not a link farm)
- Each city → the 14 services and the brands common in that city
- Each project → its city
- Every city page must be reachable from the hub in one click, and from at least 3 other city pages

**Schema per city page:** `LocalBusiness` with `areaServed`, `Service`, `FAQPage`, `BreadcrumbList`, `ImageObject`. No competitor has any of this.

---

## 7. Quality gate — enforce in CI

Fail the build if any city page:
- shares a >20-word sentence with another city page (shingle-hash check across all `localAngle` and FAQ text)
- has fewer than 3 named neighborhoods (Tiers 1–2) or 2 (Tier 3)
- has no `responseBand`
- has fewer than 3 FAQs
- has `localAngle` under 100 words
- reuses an FAQ answer verbatim from another city

```
scripts/validate-cities.ts  → run in CI, blocks merge
```

This single script is what keeps 170 pages on the right side of the line. Write it before you write the tenth city.

---

## 8. Honest risk statement

170 city pages is a real bet. Executed as specified — real local data, human-reviewed prose, staged rollout, CI-enforced uniqueness — it is defensible content marketing and it will outperform every competitor page I audited.

Executed as find-and-replace, it is exactly what Metro Gate Repair has, and it carries deindexing risk that would take the good pages down with it.

**The data model above is the difference.** If the client can't supply the `gateProfile` and project history, drop those cities to Tier 3 short pages rather than padding them. A 700-word honest page ranks; a 2,000-word templated one is a liability.
