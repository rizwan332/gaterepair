# Production Readiness Report — Shield Gate Repair

**Reviewed from scratch**, ignoring prior audits. Every number below was measured against the running production build, not estimated.

**Verdict: NOT launch-ready.** Nine Critical items remain. Four are blocked on the client; five are ours.

---

## Measured baseline

| Page type | Words | H1 | H2 | H3 | Internal links | Images |
|---|---:|:-:|:-:|:-:|---:|---:|
| Homepage | 1,523 | 1 | 12 | 21 | 101 | 18 |
| City (Plano, best) | 957 | 1 | 13 | 3 | 90 | 9 |
| Service (gate motor) | 794 | 1 | 11 | **0** | 85 | 12 |
| Brand (FAAC, best) | 728 | 1 | 11 | **0** | 78 | 10 |
| Brand (HySecurity, worst) | **421** | 1 | 9 | **0** | 78 | **2** |
| Pricing | 1,052 | 1 | 7 | **0** | 64 | 3 |
| Reviews | 576 | 1 | 5 | **0** | 64 | 4 |

| Asset | State |
|---|---|
| Images | 122 files · **14 distinct alt strings** · **0 hand-written** |
| Videos | 25 files · **0 real descriptions** · **15 distinct titles** (10 duplicated) |
| Gallery page | **484 KB of HTML** |
| Trust bar | **2 items** — "Open 24/7", "Dallas–Fort Worth Metroplex" |
| Missing routes | `/faq` `/projects` `/blog` `/about` `/warranty` `/emergency` |
| Contrast (verified) | ink-300/ink-950 **10.0:1** · ink-400/ink-950 **5.9:1** · gold-400/ink-950 **12.5:1** · ink-500/white **5.6:1** — all pass AA |

---

# 1. Top 20 blockers to being #1 in Dallas, in priority order

**1. No verifiable trust data anywhere.** Rating, review count, licence number, insurer, years, warranty term are all unset. The trust bar renders two items. Everlast puts four verifiable credentials above their fold. *This single item outweighs the next five combined.*

**2. Reviews are placeholders.** The section and `/reviews` page are built and labelled honestly, but there is no social proof on the site. Everlast has 2,600 reviews and eight video testimonials on the homepage.

**3. Pricing publishes nothing.** The page's premise is "everyone makes you call; we don't" and every row shows `—`. It currently proves the opposite of its claim.

**4. Service pages are 794 words.** Star Gate's best service page — the strongest writing in this market — is 1,100. We are *below* the competitor we claim to beat, on the page type that converts.

**5. Brand pages are thin, and three are near-empty.** FAAC (our flagship, uncontested in DFW) is 728 words. HySecurity is 421 words with 2 images and looks abandoned.

**6. 122 images share 14 alt strings.** Every photo in a category carries an identical alt. That is keyword-stuffed boilerplate, worthless for image search, and reads as spam to an auditor. `BUILD-PROMPT.md` explicitly forbids it.

**7. 25 videos have no real descriptions and 10 duplicate titles.** Video rich results are the *one uncontested SEO opportunity in this market* and the metadata is templated — which is how you fail to earn them.

**8. City pages are 957 words.** 4 Sure Gates' Plano page is 2,100. We win on % local; we lose on absolute depth, and Google reads both.

**9. No H3 hierarchy on any interior page.** Service, brand, pricing and reviews pages jump H1 → H2 with zero H3s. Flat structure hurts scannability and passage-level ranking.

**10. No projects or case studies.** The highest-trust content type for this trade, and the asset library fully supports it. Zero built.

**11. No before/after slider.** Specced, proven in this vertical, not built.

**12. No offer of any kind.** Metro runs `$200 OFF NEW GATE OPERATOR`. We run nothing. In an emergency trade a *waived diagnostic with repair* converts better than a discount.

**13. No FAQ hub, no blog, no topical authority layer.** Competitors have blogs; Star Gate's cost-guide posts are actively ranking. We have FAQs scattered across pages and no hub.

**14. No Google Maps on city pages.** Every serious local competitor embeds one. It is a ranking and a trust signal.

**15. No analytics, no conversion tracking, no call tracking.** `GOOGLE-ADS.md` specifies GA4 events, server-side lead events, call conversions and offline import. None wired. We cannot measure a single thing at launch.

**16. Gallery is 484 KB of unfiltered HTML.** 122 images and 25 videos in one document with no filtering or pagination. Specced as "searchable with filters by gate type, city and repair".

**17. The California question is still unresolved.** 14 CA pages on the live site, deliberately unmapped. Cutover cannot proceed safely without an answer.

**18. No named or photographed technician.** Star Gate names "Eli" — the most humanising thing any competitor does. We have 122 photos and present zero humans as people.

**19. No custom 404, no loading states, no breadcrumb UI.** Breadcrumb *schema* is emitted; users never see a trail.

**20. Trust bar is now redundant dead weight.** Proof chips moved into the hero (correct), so the strip below repeats the same two facts. It reads as an unfinished component.

---

# 2. UI/UX — where it still looks generic

Judged as a design lead would. Contrast, spacing tokens and type scale are now genuinely good; these are the remaining tells.

| Section | Problem | Fix |
|---|---|---|
| **Trust bar** | Two chips floating in a grey band. Reads as a component someone forgot to finish. | Delete it. Fold the credentials into the hero (already partly done) and give the space to reviews. |
| **Services grid** | Four identical cards: photo on top, title, one line, arrow. This is the single most template-like block on the site — it is what every WordPress theme ships. | Break the symmetry: make the first card span 2 columns with a larger image and a symptom line. Vary card heights deliberately. Add the operator brands serviced as small text per card. |
| **Brands grid** | Ten identical text-only tiles. No logos, despite the section being called "brands". | Either license/recreate the brand marks, or replace tiles with a photo of *that brand's operator* from the library — we have real photos for 7 of 10. That turns a generic grid into proof. |
| **Process** | Six numbered steps in a plain 3-column grid. Every competitor has this exact section. | Make it a horizontal connected timeline on desktop with a hairline rule threading the numbers. Or cut to 4 steps — six is more than anyone reads. |
| **Why Shield** | Six equal cards, six equal icons. Visually monotonous. | Elevate two cards to "featured" size (Price before we start, Repair first) since they carry the positioning. Drop the other four to compact list rows. |
| **Service pages** | Wall of H2s with no H3s, no pull quotes, no callouts. Reads as a document, not a designed page. | Introduce H3 sub-structure, a highlighted "most common cause" callout, and inline photo breaks every ~300 words. |
| **Brand pages (no-photo)** | DoorKing, Linear, HySecurity render as text-only pages next to FAAC's rich page. Looks broken. | Either shoot photos, or restyle these as deliberately compact "we service this — call us" pages so the thinness reads as intentional. |
| **Footer** | Standard four-column link farm. | Add the availability strip, a call CTA, and the licence number. The footer is the last thing a hesitant visitor sees. |
| **Section rhythm** | Alternating white / ink-50 / dark is now predictable. | Two consecutive dark sections mid-page (Reviews → Video) would create a deliberate "proof block" and break the metronome. |

**What is now good and should not be touched:** the hero, the gold material treatment, the type scale and tracking, the card hairlines, the glow/grid motif, the restraint of the motion system.

---

# 3. The 5-second walkthrough — where a Dallas homeowner hesitates

Simulating a homeowner on a phone at 9pm with a gate stuck open.

| Moment | What happens | Why they hesitate | Fix |
|---|---|---|---|
| **0–1s** | Hero loads, headline lands | Nothing wrong. "Gate Stuck? We'll Have It Working Today" is the strongest hero in this market. | — |
| **1–3s** | Eyes drop for proof | **"6 proof chips" — but two are `25 repairs on video` and `Open 24 hours`.** No rating. No review count. No licence. They are looking for *how many people trust you* and find nothing. | The client's real numbers. Nothing else fixes this. |
| **3–5s** | Scrolls once | Hits the two-item trust bar, then the video reel | Video is a strong recovery — but it comes *before* any social proof. Move Reviews above Video. |
| **~8s** | Wants a price | Reaches pricing teaser → clicks → **every row is `—`** | Actively destroys the trust the rest of the page built. **Hide `/pricing` until real numbers exist.** |
| **~12s** | Wants reassurance | Reviews section says "Awaiting real review data" | Honest, and correct not to fake — but a visitor reads it as "no customers". Until real reviews land, replace with the *testimonial video* as the hero of that section. |
| **~15s** | Ready to call | Sticky bar on mobile / call rail on desktop | ✅ This works well now. |
| **Friction throughout** | No urgency device, no offer, no "technicians available now" count, no ETA to *their* city | Nothing creates a reason to call *now* rather than compare | Add a waived-diagnostic offer, and surface the city-specific response band via IP or a city selector. |

**Biggest single CRO win available:** move `Reviews` above `VideoReel`, and put the testimonial video *inside* the reviews section as its centrepiece. That converts the honest "no written reviews yet" state into a strength — a real customer on camera, which no competitor has.

---

# 4. Competitor comparison

| Category | Us | Best competitor | Verdict |
|---|---|---|---|
| Homepage hero | "Gate Stuck? We'll Have It Working Today" | Star Gate: service description | 🟢 **Better** — only hero addressing the reader's situation |
| Trust signals | **2 chips, no credentials** | Everlast: 2,600 reviews, BBB A+, licence, background checks | 🔴 **Much worse** |
| Reviews | **placeholders** | Everlast: 2,600 + 8 videos | 🔴 **Much worse** |
| Video | **25 embedded, VideoObject schema** | **0 of 14 competitors embed any** | 🟢 **Better — uncontested** |
| Brand logos/section | 10 text tiles, no logos | Metro & Garage Tec show logos | 🟡 **Equal at best** |
| Gallery | 122 real photos, unfiltered, 484 KB | Metro/J&J: stock | 🟢 **Better content, worse UX** |
| City pages | 14 × 957w, ~50% local | 4 Sure: 2,100w @ 20%; Metro 3,000w @ 5% | 🟡 **Equal** — better quality, less depth, far fewer |
| Service pages | 794w, symptom tables | Star Gate 1,100w, better prose | 🔴 **Worse on depth**, 🟢 better on symptom tables |
| Brand pages | 10, real photos on 7 | 4 Sure: 5, stock | 🟢 **Better** |
| Copywriting | Symptom tables, repair-vs-replace honesty | Star Gate (market best) | 🟢 **Better** |
| Technical SEO | Sitemap, robots, OG, full schema | **none has schema** | 🟢 **Better** |
| Topical authority | **no blog, no FAQ hub** | Star Gate blog actively ranking | 🔴 **Worse** |
| Page speed | Static, ~105 KB gzipped JS, AVIF | WordPress + Elementor | 🟢 **Much better** |
| Mobile UX | Sticky call bar, header call button | Mixed | 🟢 **Better** |
| Lead gen | Guided problem form, no competitor equivalent | Everlast: plain form | 🟢 **Better form**, 🔴 worse proof |
| Offers | **none** | Metro: $200 OFF | 🔴 **Worse** |
| Local SEO depth | No maps, no local projects, no local reviews | Metro: 5 office addresses | 🔴 **Worse** |

**Net:** we win design, speed, video, schema, brand coverage and copy quality. We lose trust, proof, offers, content depth and topical authority. **In this market trust beats craft**, which is why we are not #1 today.

---

# 5. SEO — prioritized by expected ranking impact

**Highest impact**
1. Real reviews + `AggregateRating` → review stars in SERPs, the biggest local CTR lever available
2. Real `VideoObject` metadata across 25 videos → video rich results, zero local competition
3. Service pages 794 → 1,600 words with H3 structure → these target the highest-volume commercial terms
4. Brand pages 728 → 1,400 words → uncontested terms, currently under-served
5. City pages 957 → 1,500 words + Maps + local projects

**High**
6. 122 hand-written alt texts → image search where every competitor uses stock
7. `/faq` hub with `FAQPage` schema → featured-snippet surface
8. Blog / cost-guide content → Star Gate is ranking on exactly this and we have nothing
9. Internal linking: add contextual in-body links, not just footer/related blocks
10. `Speakable`-free but add `HowTo` schema on the diagnostic sections
11. Breadcrumb UI to match the emitted schema

**Medium**
12. Per-page OG images (only the root has one)
13. `ImageObject` schema on gallery items
14. Resolve the California pages (§17 above) before cutover
15. Add `sameAs` links to GBP/Facebook/YouTube in Organization schema once URLs exist

---

# 6. City pages — making 170+ genuinely unique

Currently only 14 are published; 176 are correctly withheld. To publish the rest safely each needs, in descending order of value:

1. **`gateProfile`** — the technician interview. What breaks in *that* city and why. Nothing else on this list is as defensible.
2. **`localAngle`** — 120–180 words true only of that city
3. **Real local projects** — 3 per city with photo, problem, solution, date
4. **Response band** — no competitor publishes any
5. **Neighborhoods (4–8) + ZIPs + landmarks (3–5)** — sourced, never invented
6. **Google Map**, facade-loaded on click
7. **2–3 city-specific FAQs**
8. **Nearby-city links** (4–6, reciprocal) forming a real geographic graph
9. **Local reviews** filtered to that city once review data exists
10. **Driving-directions paragraph** naming the actual roads used

Enforcement already exists: `scripts/validate-cities.ts` blocks any city sharing a 20-word phrase with another, and `publishedCities` keeps unenriched cities out of the build and sitemap. **Publish in waves of ~20 as the data arrives.**

---

# 7. Content audit — copy that still needs work

**Strong, leave alone:** hero, symptom tables, repair-vs-replace, FAAC "why nobody will touch it", the Plano/Denton/Rockwall local angles.

**Weak, rewrite:**
- **Services grid card descriptions** — currently just the first symptom string. Should be one benefit-led line each.
- **Process step bodies** — accurate but flat. Steps 2 and 5 are filler.
- **Brand pages for DoorKing/Linear/HySecurity** — generic because there is nothing specific to say yet. Needs real technician input.
- **Meta descriptions on service pages** — auto-built from `symptoms[0].seeing`, which produces awkward fragments like *"Motor hums, gate does not move. Same-day gate motor & operator repair…"*. Write them individually.
- **Closing CTA** — same text on every page. Should vary by context (brand page → "Talk to a FAAC tech").

---

# 8. Visual polish — specific inconsistencies

- Logo still uses `next/image` while everything else uses `ResponsiveImage` — two pipelines, runtime optimisation of a 16 KB asset
- `PhotoGallery` sets `priority` on the first 4 images of *every* instance → 56 eager images on `/gallery`
- Reviews page uses an arbitrary-variant CSS override (`[&>figure]:!bg-white …`) to flip card colours — fragile; add a `tone` prop to `ReviewCard`
- Icon sizes drift between `size-4`, `size-5`, `size-6` without a rule tied to text size
- `--radius-card` is 1rem but buttons use `rounded-xl` (0.75rem) and chips `rounded-lg` — three radii with no documented scale
- Section padding is uniform `4.5/7rem`; hero-adjacent sections should be tighter, closing sections looser
- No `loading.tsx`, no custom `not-found.tsx`

---

# 9. Trust audit — how to maximise credibility above the fold

Ranked by impact per unit of effort:

1. **Real rating + review count in the hero** — blocked on client
2. **Licence number visible** — Everlast and Dallas Automatic Gate both display theirs
3. **Named, photographed technician** — cheapest high-impact item on this list
4. **Testimonial video promoted into the reviews section** — buildable today
5. **"Background-checked technicians"** — Everlast's strongest single line; confirm and use
6. **Written warranty term stated as a number**
7. **Real project cards with dates and cities**
8. **Response band per city**
9. **Brand logos rather than text tiles**
10. **BBB / insurance badges** once verified

---

# 10. Production-readiness checklist

### 🔴 CRITICAL — blocks launch

| # | Task | Owner | Impact |
|---|---|---|---|
| 1 | Real rating, review count, licence, insurer, years, warranty term | **Client** | Conversion — highest single lever |
| 2 | 6+ verified Google reviews → `content/reviews.ts`, flip `reviewsConfirmed` | **Client** | Conversion + SERP stars |
| 3 | Real price bands, or hide `/pricing` from nav | **Client** | Credibility |
| 4 | Resolve California vs DFW; finish redirect map | **Client** | Migration safety |
| 5 | 122 hand-written alt texts | Us | SEO + a11y |
| 6 | 25 real video titles + descriptions, real upload dates | Us | Video rich results |
| 7 | Analytics, GA4 events, call tracking, server-side lead event | Us | Measurement — cannot launch blind |
| 8 | Remove or repopulate the 2-item trust bar | Us | Perceived finish |
| 9 | Full QA pass: mobile devices, keyboard, screen reader, form submission end-to-end | Us | Everything |

### 🟠 HIGH — before serious traffic

| Task | Impact |
|---|---|
| Service pages → 1,600 words + H3 structure | Ranking on primary commercial terms |
| Brand pages → 1,400 words; fix the 3 empty ones | Uncontested terms |
| Move `Reviews` above `VideoReel`; testimonial video as its centrepiece | Conversion |
| Project/case-study system + 12 real projects | Trust |
| Before/after slider | Engagement |
| `/faq` hub with schema | Snippets |
| Google Maps on city pages | Local ranking |
| Gallery filtering + pagination (484 KB → <150 KB) | UX + speed |
| An offer (waived diagnostic with repair) | Conversion |
| Named + photographed technician | Trust |
| Per-page OG images | Social CTR |
| Custom 404 with phone + service areas | Recovery |

### 🟡 MEDIUM

Blog with cost-guide content · breadcrumb UI · brand logos · services-grid asymmetry · process timeline · `HowTo` schema · footer CTA · icon/radius scale · `ReviewCard` tone prop · `PhotoGallery` priority fix · logo pipeline unification · varied closing CTAs · individual meta descriptions

### 🟢 LOW

Dark mode · print stylesheet · financing · live status banner · appointment scheduler · exit intent · `sameAs` links

---

## The honest answer

**If Shield launched today it would not be the #1 gate repair website in Dallas.** It would be the best-*designed* and by far the fastest, with the only video library and the only complete schema implementation in the market — and it would still lose to Everlast, because a homeowner comparing the two sees 2,600 reviews on one and no evidence of a single customer on the other.

**Design is not the gap. Proof is.** The gap between where this sits and #1 is roughly:

- **one 15-minute client call** (items 1–4 above)
- **two days of our work** (alt text, video metadata, content depth, analytics, projects, reviews placement)

Nothing on the critical list requires a redesign, and nothing requires rethinking the architecture. That is the good news, and it is the only reason a two-day path to #1 is credible at all.
