# Media Provenance — read before writing any copy about the photos

## The finding

The image and video library is **not Dallas–Fort Worth work.** It is Southern California work.

Spot-checking the source library found:

| File | Evidence |
|---|---|
| `emergency-gate-repair-03` | Palm trees, Spanish tile roof, coastal light |
| `faac-04` | Stone pillars, coastal live oaks, and an **"SMPA" security-patrol sign** (Santa Monica area) |
| `ramset-02` | California stucco townhomes |
| `gate-installation-04` | Urban street frontage, building number 4115 — reads as Los Angeles |
| `faac-01` | **A manufacturer product shot**, not a job photo — pristine European sliding gate on block pavers with a branded FAAC operator |

This corroborates the sitemap finding in `STRATEGY.md §0`: the live WordPress site has **14 California county pages** (Los Angeles, Orange, Ventura, San Bernardino, Riverside, Santa Barbara, San Luis Obispo, Kern, Imperial, Fresno) and **one** Dallas–Fort Worth page. The client's operating history is California.

## Why it matters

1. **The entire differentiation strategy rests on "real local photos" vs competitors' stock.** Metro Gate Repair and J&J lost on exactly this. If our photos are from another state, the claim is weaker than assumed — and if any are manufacturer stock, it is no better than theirs.
2. **A Dallas homeowner will notice.** Palm trees and Spanish tile are not North Texas. This is not a subtle tell.
3. **It would have been asserted 122 times.** The alt text pass was about to caption every image "in Dallas–Fort Worth". That would have been false on every one, and the same claim was live in gallery intro copy.

## What was changed

- **Image slugs no longer claim a location.** `faac-dallas-01` → `faac-01`. Regenerated across all 122 images and their derivatives.
- **Alt text describes the frame, not the place.** `content/alt-text.ts` — 122 hand-written entries covering equipment, condition and work in progress, with zero geographic assertions.
- **Gallery intro copy corrected.** *"Photographs from actual Shield call-outs across Dallas–Fort Worth"* → *"Photographs from our own job archive — real equipment, real repairs."*
- **`faac-01` is described honestly** as a product shot of an operator rather than a job photo.

## What is still true and still a genuine advantage

These are real photographs of real gate equipment and real repairs in progress — a multimeter on an opened control board, a motor removed and laid on the driveway, tools out mid-job. That is far better evidence than the stock catalogue imagery Metro and J&J run, and **zero of the fourteen competitors audited embed any video at all**.

The claim we can defend is *"real repair work, photographed on the job"* — not *"real Dallas jobs"*.

## Open questions for the client

Listed in `CLIENT-CALL.md`, Block 2:

1. Where were these actually taken?
2. Are there **any** photos from Texas jobs? Even 20 would allow genuine local proof.
3. Is `faac-01` a manufacturer image?
4. Is California still a live market, or is DFW the real one now? *(This also blocks the redirect map for the domain migration.)*

## Rule going forward

**No page may claim a photograph was taken in a location we cannot verify.** Locational claims belong in copy the client can substantiate — service areas, response times, licence jurisdiction — not in captions attached to images from another state.
