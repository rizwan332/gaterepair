# Blog Content Calendar: Gate Repair Guides (/blog)

**Created:** 17 Oct 2026 · **Cadence:** 2–3 posts a week, not daily (see "Why not daily" below).

**How a post goes live:** draft → `review` (the client checks the technical facts and adds a real photo or job) → `published` with a `publishedAt` date. Only published posts are built, listed, linked from the nav and footer, and added to the sitemap. `npm run validate:blog` must pass first. Preview locally with `BLOG_PREVIEW=1 npm run dev`.

**Ownership rule:** every post answers a different search from every other page on the site. The 25 `/gate-problems/*` pages own "my gate is doing X right now". Posts own research, cost, choice, planning and how-to searches. If a topic is really a symptom, it belongs on the symptom page, not in a post.

---

## Order of work (by lead potential)

| # | Post | Primary search | Category | Links into | Needs from client | Status |
|---|---|---|---|---|---|---|
| 1 | Repair or Replace Your Gate Opener? How to Decide | repair or replace gate opener | Buying guides | gate-motor-repair, gate-installation | Technician check, 1 real "repaired instead of replaced" job with photo | **review** (written) |
| 2 | HOA Gate Maintenance Checklist for DFW Communities | hoa gate maintenance checklist | HOA & commercial | commercial-gate-repair, access-control-repair | Do we offer service agreements? Terms. 1 HOA job photo | **review** (written) |
| 3 | Swing vs Sliding Gate Openers: Which Fits Your Driveway? | swing vs sliding gate opener | Buying guides | gate-installation, swing/sliding repair | Technician check, 1 swing + 1 slide photo | **review** (written) |
| 4 | Gate Opener Repair Cost in Dallas–Fort Worth | gate opener repair cost dallas | Costs | gate-motor-repair, emergency | **Real price ranges** for capacitor, board, limit switch, receiver, photo-eye, battery, gearbox, service call | needs prices |
| 5 | Automatic Gate Installation Cost in DFW | automatic gate installation cost | Costs | gate-installation | **Real installed price ranges** by gate type and power (AC vs solar) | needs prices |
| 6 | LiftMaster Gate Opener Error Codes Explained | liftmaster gate opener error codes | Troubleshooting | /brands/liftmaster + model pages | Technician to verify every code against the manual for LA400, CSW24UL, CSL24UL | needs technician |
| 7 | How to Open an Automatic Gate by Hand (Manual Release) | how to manually open electric gate | Troubleshooting | emergency, gate-not-working-after-power-outage | Technician check by brand; photos of release points | to write |
| 8 | Questions to Ask Before Hiring a Gate Repair Company | how to choose gate repair company | Buying guides | contact, warranty, about | Licence number, insurance carrier, warranty length (all needed on the site anyway) | needs facts |
| 9 | Getting Your Gate Ready for Texas Storm Season | protect gate from lightning surge | Storms & seasons | electric-gate-repair, gate-not-working-after-storm | Surge protection we fit, if any | to write (publish Feb–Mar) |
| 10 | Keeping a Gate Working Through a Texas Freeze | gate frozen texas winter | Storms & seasons | gate-battery-keeps-dying, emergency | Technician check | to write (publish Nov–Dec) |
| 11 | Solar Gate Openers in Texas Heat: What Works | solar gate opener texas | Buying guides | electric-gate-repair, gate-installation | Panel/battery sizes we recommend | to write |
| 12 | What UL 325 Means for Your Automatic Gate | ul 325 gate safety | HOA & commercial | commercial-gate-repair, gate-photo-eye-not-working | Technician check | to write |
| 13 | Gate Access Control for HOAs: Keypad, Call Box, Cellular or App? | hoa gate access control options | HOA & commercial | access-control-repair, /brands/doorking | Systems we install/support | to write |
| 14 | Call Box Stopped Working After Switching Phone Providers | gate call box not working after voip | Troubleshooting | access-control-repair, /brands/doorking | Technician check; cellular modules we use | to write |
| 15 | Choosing an Opener for a Heavy Gate: Duty Cycle Explained | gate opener for heavy gate | Buying guides | gate-installation, commercial-gate-repair | Technician check | to write |
| 16 | Homeowner Gate Maintenance: A 10-Minute Monthly Routine | driveway gate maintenance | Buying guides | automatic-gate-repair | Technician check | to write |
| 17 | Rusted Wrought Iron Gate: Repair or Replace? | wrought iron gate rust repair | Buying guides | iron-gate-repair | 1–2 real welding job photos | to write |
| 18 | Gate Safety Around Children and Pets | automatic gate safety kids | Buying guides | gate-reverses-when-closing, gate-photo-eye-not-working | Technician check | to write |
| 19 | US Automatic Patriot and Ranger: Common Problems | us automatic gate opener problems | Troubleshooting | /brands/us-automatic + model pages | Technician check | to write |
| 20 | From Our Jobs: monthly roundup | (brand + city long tail) | From our jobs | city, brand and model pages | **New** jobs only (existing ones already have /projects pages) | needs jobs |

Posts 4, 5 and 8 are the biggest lead opportunities and the ones blocked on the client: only one DFW competitor publishes any repair prices, and none publishes a warranty length.

---

## Why not daily

Google's spam policies target "scaled content": many similar, thin posts produced to rank rather than to help. A gate repair business has a finite set of genuinely useful topics, and padding the schedule produces exactly the pattern the policy describes. Two or three posts a week, each built on real technician knowledge, a real photo and a clear next step, earns rankings and calls. A post a day without that does not.

## Publishing checklist (per post)

1. Client has checked the facts and the `reviewNotes` are resolved (then delete them).
2. A real photo from our own work is attached, where the post calls for one.
3. `status: 'published'` and `publishedAt: 'YYYY-MM-DD'`.
4. `npm run validate` and `npm run build` pass.
5. After deploy: request indexing for the post in Search Console.
6. Two weeks later: check the post in Search Console (impressions, position) and in the lead dashboard (page type "Blog post").
