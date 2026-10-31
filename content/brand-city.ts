/**
 * Copy for brand × city pages, served at /gate-repair-<city>-tx/<brand>.
 *
 * An entry here does not create a page. lib/brand-city.ts also requires the
 * city to be indexed and at least two verified jobs on that brand in that city
 * (BRAND-CITY-ARCHITECTURE.md §4), so this file can only describe work the job
 * records already prove. Everything below is drawn from those records.
 *
 * Requested by the client 31 Oct 2026 for the 20 priority cities. Of the 340
 * brand × city pairs, one clears the proof gate today: LiftMaster in Dallas,
 * with five documented jobs. Add a pair here when its jobs exist, not before.
 */

export type BrandCityCopy = {
  /** Hero line under the H1. */
  intro: string
  /** What is different about this brand in this city, from the jobs. */
  local: string[]
  faqs: { q: string; a: string }[]
}

export const brandCityCopy: Record<string, BrandCityCopy> = {
  'dallas/liftmaster': {
    intro:
      'Five documented LiftMaster jobs in Dallas, from worn chains and a gate off its track to two new operator installs. What failed on each one, and what it took to fix.',
    local: [
      'Most of our LiftMaster work in Dallas is on sliding gates. Four of the five jobs below were slide operators, and on three of them the operator itself was fine: the chain had worn or rusted through, or rocks in the track had pushed a heavy gate off its wheels. We check the inexpensive parts first because that is usually where the fault is.',
      'Two of the five were new homeowners who inherited a gate nobody had maintained. One had a rusted chain on a LiftMaster that still worked. The other had a refurbished opener that never suited the gate, which we replaced with a LiftMaster CSL24UL. If you have just moved into a Dallas home with an automatic gate, a service visit now is usually a smaller job than the call after it fails.',
      'Backup batteries matter more than most owners expect. On the off-track job the 12V backup battery and its connection were badly corroded, so the gate would not have run through a power cut either way. It is worth having the batteries checked whenever the gate is serviced.',
    ],
    faqs: [
      {
        q: 'Do you repair LiftMaster gate openers in Dallas, or only install them?',
        a: 'Both. Three of the five Dallas jobs on this page were repairs on the existing LiftMaster operator: two chain replacements and a sliding gate put back on its track. We only fit a new operator when the old one is wrong for the gate or worn out, as on the two installs here.',
      },
      {
        q: 'My LiftMaster sliding gate came off its track. Do I need a new operator?',
        a: 'Usually not. On our Dallas off-track job the CSL24UL was working; rocks and debris in the track had forced the wheels off. We lifted the gate back onto the track, cleared it, replaced a corroded backup battery, reset the limits and tested the full travel. Do not try to run the gate while it is off the track.',
      },
      {
        q: 'Which LiftMaster models have you worked on in Dallas?',
        a: 'The jobs on this page include a CSL24UL sliding gate operator and an LA400 swing gate operator, plus chain work on other LiftMaster slide operators. We also repair the rest of the LiftMaster residential and commercial range; the LiftMaster page lists them.',
      },
      {
        q: 'Can you replace an old GTO or other brand opener with a LiftMaster?',
        a: 'Yes. On one Dallas job we removed an ageing GTO / PRO swing opener and fitted a LiftMaster LA400 with battery backup, a safety sensor, a wireless keypad and three remotes. The existing wrought-iron gate was sound, so it stayed.',
      },
      {
        q: 'How fast can you get to me in Dallas?',
        a: 'On the off-track call on this page we were on site about 20 minutes after the phone call. That depends on where the nearest technician is when you call, so we give you a real arrival window on the phone rather than a promise.',
      },
    ],
  },
}
