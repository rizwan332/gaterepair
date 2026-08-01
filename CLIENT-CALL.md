# 15-Minute Client Call — Exact Questions

Everything that does not require the client is done or in progress. **These are the only remaining blockers**, ordered by business impact. Read the questions verbatim; each maps to a specific field that is currently empty in `content/business.ts`, `content/reviews.ts` or `content/pricing.ts`.

Budget: **15 minutes.** Questions 1–4 are worth more than everything else on this site combined.

---

## 🔴 BLOCK 1 — Proof (5 minutes). Nothing matters more.

Everlast, the market leader, shows four verifiable credentials above their fold. We currently show none.

**1. "What's your exact Google rating and review count today?"**
→ `business.rating` · Gets star ratings into search results. Biggest single conversion lever on the site.

**2. "Can you send me 6–8 of your best Google reviews — copy-paste, with the reviewer's first name and the month?"**
→ `content/reviews.ts` · Ask specifically for ones that (a) name a specific fault and outcome, (b) mention how fast you arrived, (c) mention you repaired something another company said needed replacing, (d) come from a property manager or HOA.

**3. "What's your Texas Private Security Bureau licence number?"**
→ `business.license` · Competitors display theirs: Everlast `B28539401`, Dallas Automatic Gate `B26253101`. Gate and access-control work requires one. If they don't have one, that is a much bigger conversation than the website.

**4. "Are your technicians background-checked? Drug tested?"**
→ `business.backgroundChecked` · Everlast's *"Background Checked & Drug Tested"* is the strongest single trust line in this market and only they use it.

---

## 🔴 BLOCK 2 — The photography problem (3 minutes). Read this one carefully.

**5. "Where were the gate photos and videos actually taken?"**

**Why I'm asking:** I checked the image library. It shows palm trees, Spanish tile roofs, coastal live oaks and a Santa Monica security-patrol sign. This is Southern California work, which matches the live site — the existing WordPress sitemap has **14 California county pages and one Dallas page**.

**What this means:** we cannot caption these as Dallas–Fort Worth jobs. A Dallas homeowner will notice palm trees. I have already stripped every location claim from the image filenames and alt text.

**Follow-ups:**
- **"Do you have any photos from actual Texas jobs?"** Even 20 would let us build genuine local proof.
- **"Is `faac-01` a manufacturer product photo rather than one of your jobs?"** At least one image in the library appears to be a stock press shot.
- **"Are you actually operating in California as well, or is DFW the real market now?"** This determines whether the 14 CA pages get retired or kept as a second market — and it blocks the redirect map for the domain migration.

---

## 🟠 BLOCK 3 — Pricing (3 minutes)

Currently `/pricing` renders `—` for all twelve repair types. It promises transparency and delivers none. **No competitor in DFW publishes repair pricing** — this is the biggest uncontested content gap in the market.

**6. "Will you publish honest price ranges? Not fixed quotes — ranges, with 'final price after we see the gate'."**

If yes, get low–high for each:
- Diagnostic / service call — **and is it waived if they book the repair?**
- Remote or keypad reprogramming
- Photo-eye / safety sensor replacement
- Limit switch adjustment or replacement
- Capacitor replacement
- Control board replacement
- Off-track / gate realignment
- Hinge repair or re-weld
- Chain, sprocket or track replacement
- Hydraulic seal and fluid service (FAAC)
- Intercom / access control repair
- Full operator replacement

If no: **we hide `/pricing` from the nav before launch.** A page whose body contradicts its headline is worse than no page.

---

## 🟠 BLOCK 4 — Operational facts (2 minutes)

**7. "How many years have you been doing this?"** → `business.yearsInBusiness` · Competitors claim 20+, 31, "since 2005"

**8. "What warranty do you give, in writing?"** → `business.warrantyTerm` · **No competitor headlines a warranty term.** Free differentiation.

**9. "Who insures you, and are you bonded?"** → `business.insurance`

**10. "What's the physical address for the Google Business Profile?"** → `business.address` · Required for LocalBusiness schema and Ads location extensions

**11. "Realistically, how long to reach Dallas? Plano? Denton? Weatherford?"** → per-city `responseBand` · **No competitor publishes response times at all.** Must be honest — publishing 30 minutes to Stephenville destroys the trust the number exists to build.

---

## 🟡 BLOCK 5 — Quick wins (2 minutes)

**12. "Will you get a local 214/469/972/682 number?"** Every credible competitor has one — Everlast `469`, Metro `972`, Star Gate `469`. The current `800` number reads as an out-of-state call centre to both customers and Google's local ranking signals. **Probably a bigger conversion lever than anything else on this list.**

**13. "Are you an authorized dealer for any brand?"** A1 Gate Guys is a genuine authorized LiftMaster dealer. If we aren't, all brand copy stays "brands we service" — which is what it currently says.

**14. "Can I get a photo and first name of your lead technician?"** Star Gate names theirs ("Eli") and it is the most humanising thing any competitor does. We have 122 photos and not one human presented as a person.

**15. "What's your YouTube channel URL?"** Referenced in the kickoff notes, never supplied. May contain footage we haven't seen.

**16. "Any offer you'd run?"** Metro runs `$200 OFF NEW GATE OPERATOR`. In an emergency trade a **waived diagnostic fee with repair** converts better than a percentage discount, because the objection is being overcharged, not price.

---

## What to say if they push back on pricing or reviews

> "Every gate company in Dallas makes customers call to find out what anything costs, and every one of them says they're the best. The two things that would actually separate you are publishing honest ranges and showing real reviews. If we can't do either, we're competing on design alone — and design loses to a competitor showing 2,600 reviews."

---

## After the call

Paste answers into:
- `content/business.ts` — flip each `confirmed: false` → `true`
- `content/reviews.ts` — replace placeholders, set `reviewsConfirmed = true`
- `content/pricing.ts` — real bands, set `pricingConfirmed = true`
- `content/cities.ts` — real `responseBand` per city

The dev-only banner lists every unset field, and it disappears when they're all in.
