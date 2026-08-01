# Copy Deck — Shield Gate Repair

Written copy, ready to drop into components. Values in `{{BRACES}}` are unverified — pull from `content/business.ts` and confirm with the client before launch (`STRATEGY.md §7`).

---

## 0. Voice

**Who is reading this:** someone whose gate is stuck. Their car is half in the driveway, or their tenants can't get in, or their business entrance is wide open overnight. They are annoyed, slightly worried about being overcharged, and they are on a phone.

**Rules:**
1. **Their problem before your company.** Never open a page with "Shield Gate Repair is a leading provider of…"
2. **Short sentences. Plain words.** "Your gate won't close." Not "gate closure functionality has been compromised."
3. **Specific beats superlative.** "We stock LiftMaster and Elite control boards on the truck" beats "the best gate repair in Dallas."
4. **Name the fear, then remove it.** The fear is being overcharged by a stranger. Answer it with published prices, a named technician, a license number, a written warranty.
5. **Every claim carries proof.** A number, a photo, a video, or a license. No adjective stands alone.
6. **Never manufacture urgency.** The urgency is already real. Fake countdown timers read as scam in this trade.

**Banned phrases:** *state-of-the-art · unparalleled · we pride ourselves · your one-stop shop · look no further · in today's fast-paced world · cutting-edge · seamless.* Every competitor uses these. That's the point.

---

## 1. Homepage

### Hero

> # Gate Stuck? We'll Have It Working Today.
> **Same-day automatic gate repair across Dallas–Fort Worth.** Residential, commercial, HOA and industrial. Our techs carry the parts for LiftMaster, FAAC, Elite, All-O-Matic, Viking, Eagle and Ramset operators — so most repairs finish on the first visit.

**Buttons:** `Call {{PHONE}} — Answered Now` · `Get a Free Estimate`
**Under buttons:** `Typical arrival in {{RESPONSE_BAND}} across the metroplex · Open 24/7`

*Alternatives to A/B test:*
- `Your Gate Broke. We Fix It Today.`
- `Dallas–Fort Worth Gate Repair — Same-Day, Seven Days a Week`
- `The Gate Repair Crew Dallas Calls When It Has to Work Today`

> **Why this beats the market.** Star Gate's hero — the best in DFW — is `Dallas Gate Repair & Fence Installation: Same-Day Emergency Service`. That's a service description. Ours opens on the reader's actual situation and answers it in six words. Metro's is `Metro Gate Repair Gate Repair Dallas TX`.

### Trust bar

`★ {{RATING}} · {{REVIEW_COUNT}} Google reviews` · `TX License {{LICENSE_NO}}` · `Licensed & Insured` · `{{YEARS}} Years in DFW` · `Background-Checked Technicians` · `Written Warranty on Every Repair` · `Open 24/7`

*Everlast is the only competitor using "Background Checked" — it's the strongest trust line in the market. Match it if true.*

### Video reel — position 4, high on the page

> ## Watch Us Actually Do the Work
> Not stock footage. Not a slideshow. Real Shield technicians repairing real gates across Dallas–Fort Worth — LiftMaster board swaps, FAAC hydraulic rebuilds, Ramset operator replacements, emergency call-outs. Twenty-five of them.
>
> *Every competitor in this market shows you a stock photo of a gate. We'll show you the repair.*

**CTA:** `See More Repairs` → `/gallery`

### Brands

> ## We Fix the Operators Nobody Else Wants to Touch
> Most gate companies replace the whole operator because diagnosing it is harder than selling you a new one. We repair control boards, limit switches, hydraulic pumps and gearboxes on all of these — and we have the photos and video to prove it.

`LiftMaster · FAAC · All-O-Matic · Elite · Viking · Eagle · Ramset · DoorKing · Linear · HySecurity · Apollo · US Automatic`

Small print: `Brands we service. We are not an authorized dealer for these manufacturers.` *(remove only if the client confirms dealer status)*

### Why Shield — six cards

| Card | Copy |
|---|---|
| **We show up when we say** | You get an arrival window, not a "sometime today." If we're running late, you get a call — not silence. |
| **Most repairs done in one visit** | Our trucks carry control boards, limit switches, hinges, sensors and remotes for the operators common in DFW. No "we'll order the part and come back Thursday." |
| **Price before we start** | We diagnose, we quote, you decide. The number we say is the number you pay. See our [published price ranges]({{/pricing}}) — nobody else in Dallas publishes theirs. |
| **Repair first, replace only if it's honest** | A control board is a few hundred dollars. A new operator is a few thousand. We tell you which one you actually need. |
| **Licensed, insured, background-checked** | Texas license {{LICENSE_NO}}. Insured through {{INSURER}}. Every technician background-checked before they set foot on your property. |
| **Written warranty, every job** | {{WARRANTY_TERM}} on parts and workmanship, in writing. If it fails, we come back. |

### Pricing teaser

> ## Here's What Gate Repair Actually Costs
> Every other gate company in Dallas makes you call to find out. We don't think that's a great way to start.
>
> Most gate repairs in DFW land between **{{REPAIR_LOW}} and {{REPAIR_HIGH}}**, depending on what failed. Control boards, limit switches and sensors sit at the lower end. Full operator replacement sits at the top.
>
> *These are honest ranges based on jobs we've actually completed — not a binding quote. The real number comes after a technician sees the gate.*

**CTA:** `See Full Price Ranges` → `/pricing`

### Process

1. **You call.** A person answers, day or night. We ask what the gate is doing and what brand the operator is.
2. **We give you a window.** A real one. You get a text when the tech is on the way.
3. **We diagnose on site.** {{DIAGNOSTIC_FEE_POLICY}}
4. **You get a price before we start.** Itemised. Repair vs. replace, explained in plain English.
5. **We fix it.** Most repairs finish the same visit.
6. **You get it in writing.** Warranty, parts used, what we did.

### Closing CTA

> ## Gate Not Working Right Now?
> We answer the phone 24/7, and most of Dallas–Fort Worth is within {{RESPONSE_BAND}} of a Shield truck.
>
> `Call {{PHONE}}` · `Request a Callback`

### Sticky mobile bar
`📞 Call` · `💬 Text` · `📋 Free Estimate`

---

## 2. Service page template

Worked example: **Gate Motor / Operator Repair**. Same skeleton for all 14.

> # Gate Motor & Operator Repair in Dallas–Fort Worth
> **Your gate hums but doesn't move. Or it clicks and stops. Or it opens halfway and gives up.** Nine times out of ten that's the control board, a limit switch, or a failed capacitor — not the whole operator. We diagnose which, tell you what it costs, and usually fix it the same day.

**H2: What your gate is doing, and what it usually means**

| What you're seeing | Usually means |
|---|---|
| Motor hums, gate doesn't move | Seized gearbox, failed capacitor, or the gate is binding on the track |
| Clicks once, nothing happens | Dead capacitor or a control board relay |
| Opens partway then stops or reverses | Limit switch out of adjustment, or a safety sensor seeing an obstruction |
| Works on the keypad, not the remote | Receiver or remote programming — often the cheapest fix on this list |
| Beeps and won't respond | Battery backup fault or a board error code |
| Works fine, then dies in the heat | Thermal cutout — usually a failing motor under load, worth catching early |
| Nothing at all | Power, breaker, transformer, or a board that's finally gone |

*No competitor in DFW publishes a symptom table. This is how people actually search.*

**H2: How we diagnose it** — walk through the real sequence: power at the board, capacitor test, limit switch travel, safety loop and photo-eye check, gate physically pushed by hand to isolate mechanical bind from electrical fault. Specific enough that a technician reading it nods.

**H2: Repair or replace — the honest answer**
> An operator that's under about ten years old is almost always worth repairing. Boards, capacitors, limit switches and gearboxes are all serviceable parts. Past fifteen years, parts get scarce and you start paying for the same visit twice a year — that's when replacement is the cheaper decision, not before.
>
> We'll tell you which side of that line your gate is on. If it's a repair, we don't sell you an operator.

**H2: What it costs** — real bands + the qualifier (see §5)
**H2: Brands we repair** — links to all 10 brand pages
**H2: Real repairs, on video** — embedded video + `VideoObject`
**H2: Photo gallery** — real photos from the image library
**H2: FAQs** — 6–8, `FAQPage` schema
**H2: Where we do this** — Tier 1 city links
**CTA**

---

## 3. Brand page template

Worked example: **FAAC** — nobody in DFW has this page, and Shield has 6 real photos and a video.

> # FAAC Gate Operator Repair in Dallas–Fort Worth
> **FAAC builds some of the best hydraulic gate operators on the market — and almost nobody in Dallas will work on them.** Most companies open the housing, see hydraulics instead of a chain drive, and quote you a full replacement with a different brand. We repair them. Here's a Shield technician doing exactly that.

*(video embed immediately after the intro — this is the proof, put it above everything else)*

**H2: What goes wrong with FAAC operators**
Hydraulic fluid loss and seal failure · pump pressure drop causing slow or partial travel · control board faults on 452 MPS / 455D units · encoder and limit adjustment drift · release-key valve leaks · winter viscosity slowdown.

**H2: Why most Dallas gate companies won't repair FAAC**
> It's not that FAAC operators are unreliable — it's that hydraulic operators need different diagnostics and different parts than the chain-drive units most techs see every day. Replacing one is easier than learning one. That's a fine business decision for them and an expensive one for you: a seal kit and a pressure adjustment is a fraction of what a new operator costs.

**H2: FAAC models we service** · **H2: Parts and availability** · **H2: Real FAAC repairs we've done** (photo gallery, all 32) · **H2: What FAAC repair costs** · **H2: FAQs** · **H2: Cities**

**Repeat this structure for All-O-Matic and Ramset** — also uncontested. Then LiftMaster (13 photos, 2 videos), Elite, Viking, Eagle. DoorKing, Linear and HySecurity have no photos: keep those short and honest until real photos exist.

---

## 4. City page template

Worked example: **Flower Mound**. Blocks marked 🟢 must be genuinely unique per city — see `CITY-PAGES.md`.

> # Gate Repair in Flower Mound, TX — Same-Day Service
> Serving all of Flower Mound and Denton County · Typical arrival {{45–60 minutes}}

**🟢 Local intro (120–180 words)**
> Flower Mound is mostly large-lot residential with a heavy concentration of gated custom-home properties along the Cross Timbers corridor and around Bridlewood and Wellington. That means two things for gate repair: long driveways running solar-assisted swing operators, and a lot of wrought-iron gates hung on posts set in North Texas clay.
>
> Clay is the reason we get called out here. It expands and contracts hard between wet spring and dry August, and posts move with it. A gate that closed perfectly in April starts dragging in July, the operator strains against the bind, and the limit switch or the gearbox gives out. The fix usually isn't the operator at all — it's realigning the gate so the operator stops fighting it.
>
> We cover Flower Mound out of {{BASE}}, typically arriving within {{45–60 minutes}} via FM 1171 and Cross Timbers Road.

**🟢 Neighborhoods and areas we cover** — named list + zips 75022, 75027, 75028
**🟢 Gates we see most in Flower Mound** — from `gateProfile`
**🟢 Response time** — band + the roads actually used
**⚪ Services · Brands · Video reel · Pricing teaser**
**🟢 Recent projects in and near Flower Mound** — real jobs, real photos
**🟢 Flower Mound FAQs** — ≥2 genuinely city-specific
**🟢 Nearby cities** — Highland Village, Lewisville, Argyle, Copper Canyon, Double Oak, Coppell
**🟢 Map**

> **The bar:** Metro's Plano page is 3,000 words and ~5% local. 4 Sure's is 2,100 words and ~20%. The page above is ~1,400 words and about half genuinely local. It wins on relevance, not volume.

---

## 5. Pricing page — the biggest content gap in the market

> # What Gate Repair Actually Costs in Dallas–Fort Worth
> Every gate company in this market makes you call to find out what anything costs. We think that's backwards, so here are our real ranges.

**The qualifier — repeat at top and bottom** *(pattern borrowed from the only competitor doing this well)*:
> These are preliminary ranges for planning purposes, based on jobs we've completed across DFW. They are not a binding quote. Gate repair pricing depends on the operator, the parts needed and the condition of the gate itself — the real number comes after a technician sees it.

**Table:** Diagnostic / service call · Remote or keypad reprogramming · Photo-eye or safety sensor replacement · Limit switch adjustment or replacement · Capacitor replacement · Control board replacement · Hinge repair or re-weld · Gate realignment / off-track · Chain, sprocket or track replacement · Hydraulic seal and fluid service (FAAC) · Intercom or access control repair · Full operator replacement

**H2: Why the range is a range** · **H2: When repair beats replacement** · **H2: How we keep the number honest** · **H2: What we won't do** — *"We don't quote over the phone without seeing the gate. Anyone who does is either guessing or planning to change the number when they arrive."*

**Reference points:** Angi puts national automatic gate repair at **$550–$1,500**. The one Dallas competitor publishing installation cost quotes **$2,500–$7,500** for a residential opener install. Set Shield's bands against real job history, not these — but they're the market's frame of reference.

---

## 6. CTA library

| Context | Primary | Secondary |
|---|---|---|
| Hero | `Call {{PHONE}} — Answered Now` | `Get a Free Estimate` |
| Emergency | `Call Now — We're Open` | `Text Us a Photo of the Gate` |
| Service page | `Get This Fixed Today` | `See What It Costs` |
| Brand page | `Talk to a {{Brand}} Tech` | `See Our {{Brand}} Repairs` |
| City page | `Call — We're {{BAND}} From {{City}}` | `Book a Free Estimate` |
| Pricing | `Get an Exact Quote` | `Call and Ask` |
| Gallery | `Get Work Like This on Your Gate` | `Request an Estimate` |
| Mobile sticky | `📞 Call` | `💬 Text` · `📋 Estimate` |

**Never use:** "Submit" · "Learn More" · "Click Here" · "Contact Us."

---

## 7. Forms

**Describe Your Gate Problem** — guided, converts far better than a blank box, and no competitor has anything like it.

1. `What kind of gate?` — Swing · Slide · Barrier arm · Not sure
2. `What's it doing?` — Won't open · Won't close · Makes noise but doesn't move · Opens partway · Remote/keypad not working · Off track or damaged · Something else
3. `Know the brand?` — LiftMaster · FAAC · All-O-Matic · Elite · Viking · Eagle · Ramset · DoorKing · Linear · HySecurity · Other · Not sure *(each answer surfaces the matching brand page)*
4. `How urgent?` — Today, it's an emergency · This week · Getting quotes
5. `Where is it?` — city autocomplete from the 170-city list
6. Name · Phone · Optional photo upload

**After step 2, show a likely cause immediately:**
> *Sounds like a limit switch or a safety sensor. That's usually a same-visit fix and one of the less expensive repairs.*

**Microcopy:** phone field → `We'll call you back on this number — we don't sell your details to anyone.`
**Confirmation:** `Got it. {{NAME}} will call you within {{TIME}}. If it's an emergency and you'd rather not wait, call {{PHONE}} — someone always answers.`

---

## 8. Meta title & description patterns

| Page | Title (≤60) | Description (≤155) |
|---|---|---|
| Home | `Gate Repair Dallas–Fort Worth \| Same-Day \| Shield Gate Repair` | `Automatic gate stuck or broken? Same-day repair across DFW. LiftMaster, FAAC, Elite, All-O-Matic and more. Published prices. Call {{PHONE}}.` |
| Service | `{{Service}} in Dallas–Fort Worth \| Shield Gate Repair` | `{{Symptom sentence}} Same-day {{service}} across DFW. Licensed, insured, written warranty. See real repair photos and prices.` |
| Brand | `{{Brand}} Gate Operator Repair Dallas \| Shield Gate Repair` | `We repair {{Brand}} gate operators most Dallas companies won't touch. Real repair photos and video. Same-day service. Call {{PHONE}}.` |
| City | `Gate Repair {{City}} TX \| Same-Day \| Shield Gate Repair` | `Automatic gate repair in {{City}}, {{County}}. Typical arrival {{band}}. Licensed, insured, written warranty. Published prices. Call {{PHONE}}.` |
| Pricing | `Gate Repair Cost in Dallas–Fort Worth (2026 Price Guide)` | `Real price ranges for gate motor, board, sensor and off-track repair in DFW. No phone call required to find out what it costs.` |

---

## 9. Copy that must not ship unverified

`{{RATING}}` · `{{REVIEW_COUNT}}` · `{{LICENSE_NO}}` · `{{INSURER}}` · `{{YEARS}}` · `{{WARRANTY_TERM}}` · `{{RESPONSE_BAND}}` · `{{PHONE}}` · `{{BASE}}` · all price bands · background-check claim · every `responseBand` on all 170 city pages.

Render a dev-only visible warning for any unset value. **Nothing above ships with a guessed number in it.**
