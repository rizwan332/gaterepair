/**
 * Gate operator brand pages.
 *
 * These are the highest-ROI pages on the site. Of 14 DFW competitors audited:
 *  - FAAC, All-O-Matic and Ramset have NO brand page anywhere in the market,
 *    and Shield has real repair photography and video for all three.
 *  - Where competitors do have brand pages (LiftMaster, Viking, Elite, Eagle),
 *    not one has brand-specific photography or video.
 *
 * URL slugs match the existing WordPress site so the 301s are 1:1.
 */

export type Brand = {
  slug: string
  /** Legacy WordPress path, 301'd to /brands/<slug>. */
  legacyPath: string
  name: string
  /** Photo category in media-manifest.ts. Null = no photos in the library yet. */
  mediaCategory: string | null
  /**
   * Image slug to lead the page with, when it should not simply be the first in
   * the category. Used where one photograph is materially better evidence than
   * the rest — typically the only one where the manufacturer's name is legible
   * on the housing, which is the thing a visitor is trying to match against
   * their own gate.
   */
  featuredImage?: string
  /** Competitive position — drives build priority, not page copy. */
  contested: boolean
  priority: number
  headline: string
  intro: string
  /** Why this brand is different to work on. The technical credibility signal. */
  whyDifferent: string
  commonFailures: string[]
  models: string[]
  faqs: { q: string; a: string }[]
}

export const brands: Brand[] = [
  {
    slug: 'faac',
    legacyPath: '/faac-gate-motor-repair/',
    name: 'FAAC',
    mediaCategory: 'faac',
    contested: false,
    priority: 1,
    headline: 'FAAC Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'FAAC builds some of the best hydraulic gate operators on the market — and almost nobody in Dallas will work ' +
      'on them. Most companies open the housing, see hydraulics instead of a chain drive, and quote you a full ' +
      'replacement with a different brand. We repair them.',
    whyDifferent:
      'It is not that FAAC operators are unreliable. It is that hydraulic operators need different diagnostics and ' +
      'different parts than the chain-drive units most technicians see every day. Replacing one is easier than ' +
      'learning one. That is a fine business decision for them and an expensive one for you: a seal kit and a ' +
      'pressure adjustment is a fraction of what a new operator costs.',
    commonFailures: [
      'Hydraulic fluid loss and seal failure',
      'Pump pressure drop causing slow or partial travel',
      'Control board faults on 452 MPS and 455D units',
      'Encoder and limit adjustment drift',
      'Release-key valve leaks',
      'Cold-weather viscosity slowdown',
    ],
    models: ['400 Series', '402', '412', '415', '422', '750 Sliding', '844 ER', 'S800H', '452 MPS', '455D', 'E124'],
    faqs: [
      {
        q: 'Can a FAAC operator actually be repaired, or does it need replacing?',
        a: 'In most cases it can be repaired. FAAC hydraulic units are built to be serviced — seals, fluid, pump pressure and control boards are all replaceable parts. We see operators well past fifteen years still running fine after a seal kit and a pressure reset. Replacement only makes sense when the housing or ram is physically damaged.',
      },
      {
        q: 'Why did another company tell me my FAAC has to be replaced?',
        a: 'Usually because they do not service hydraulics. Most gate companies in Dallas work almost exclusively on chain-drive and screw-drive operators, so a hydraulic unit is outside what their technicians carry parts and training for. Replacing it with a brand they know is simpler for them than repairing the one you have.',
      },
      {
        q: 'My FAAC gate opens slowly or stops halfway. What causes that?',
        a: 'Almost always hydraulic pressure. Either the fluid level has dropped through a seal leak, or the pump pressure needs adjusting. Both are on-site repairs. If pressure tests fine, the next suspects are the encoder or the limit settings.',
      },
      {
        q: 'Do you carry FAAC parts?',
        a: 'We carry seal kits, fluid and the common control boards. Less common parts are usually available within a couple of days — we will tell you upfront if a part has to be ordered rather than finding out on the day.',
      },
    ],
  },
  {
    slug: 'all-o-matic',
    legacyPath: '/all-o-matic-gate-motor-repair/',
    name: 'All-O-Matic',
    mediaCategory: 'all-o-matic',
    contested: false,
    priority: 2,
    headline: 'All-O-Matic Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'All-O-Matic operators are workhorses — simple, heavily built, and very repairable. They also turn up on a lot ' +
      'of older Dallas properties where the original installer is long gone. We service them, stock the common ' +
      'parts, and have the repair photos and video to show for it.',
    whyDifferent:
      'All-O-Matic units are mechanically straightforward, which means the failure is almost never the whole ' +
      'operator. It is a limit switch, a clutch adjustment, a chain, or a control board. Anyone quoting you a full ' +
      'replacement on an All-O-Matic has not opened it.',
    commonFailures: [
      'Limit switch cam slip and travel drift',
      'Clutch out of adjustment causing stalls under load',
      'Chain stretch and sprocket wear',
      'Control board relay failure',
      'Motor brush wear on older SL and SW units',
      'Gearbox oil loss',
    ],
    models: ['SL-100', 'SL-125', 'SW-300', 'SW-350', 'SW-400', 'Ranger', 'BL-40', 'RP-100'],
    faqs: [
      {
        q: 'Are All-O-Matic parts still available?',
        a: 'Yes. All-O-Matic is still in production and the common wear parts — limit switches, clutches, chains, boards — are readily available. This is one of the more economical operators to keep running.',
      },
      {
        q: 'My All-O-Matic stalls partway and reverses. What is it?',
        a: 'Usually the clutch or the limit cams. The clutch is a safety feature — it slips when the gate meets resistance, so if the gate is binding on its track the clutch is doing its job and the real fault is alignment. We check the gate by hand before touching the operator.',
      },
      {
        q: 'How old is too old for an All-O-Matic?',
        a: 'These units routinely run twenty years or more with basic servicing. Age alone is not a reason to replace one. We look at gearbox condition and parts availability, not the date on the label.',
      },
    ],
  },
  {
    slug: 'ramset',
    legacyPath: '/ramset-gate-motor-repair/',
    name: 'Ramset',
    mediaCategory: 'ramset',
    contested: false,
    priority: 3,
    headline: 'Ramset Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'Ramset operators show up on a lot of commercial and multi-family entrances around Dallas–Fort Worth, and ' +
      'they are frequently misdiagnosed. We repair them rather than defaulting to replacement.',
    whyDifferent:
      'Ramset units are commonly installed on high-cycle commercial gates, which means they wear differently to ' +
      'residential operators — the same part fails ten times sooner because the gate runs two hundred cycles a day. ' +
      'Diagnosing them correctly means knowing which wear is normal for the duty cycle and which is a real fault.',
    commonFailures: [
      'High-cycle chain and sprocket wear',
      'Limit switch failure under heavy duty cycle',
      'Control board and relay burnout',
      'Loop detector faults on commercial installs',
      'Motor overheating and thermal cutout',
      'Gearbox wear on continuous-duty entrances',
    ],
    models: ['RAM 100', 'RAM 200', 'RAM 400', 'Barrier Arm Series', 'Slide Series'],
    faqs: [
      {
        q: 'Our Ramset gate at an apartment entrance keeps failing. Why?',
        a: 'Duty cycle. A gate running a few hundred cycles a day wears parts on a completely different timeline to a residential driveway. Often the fix is not just replacing the failed part but correcting what is making the operator work harder than it should — alignment, roller condition, or a gate that has gained weight from added infill.',
      },
      {
        q: 'Do you service commercial and HOA Ramset installations?',
        a: 'Yes, and this is where most Ramset units live. We handle single entrances through multi-gate properties, including loop detectors, access control integration and barrier arms.',
      },
      {
        q: 'Can you get Ramset parts quickly?',
        a: 'We carry the common high-cycle wear parts because these are the ones that actually fail. Less common components are typically a short order.',
      },
    ],
  },
  {
    slug: 'liftmaster',
    legacyPath: '/liftmaster-gate-motor-repair/',
    name: 'LiftMaster',
    mediaCategory: 'liftmaster',
    contested: true,
    priority: 4,
    headline: 'LiftMaster Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'LiftMaster is the most common gate operator in Dallas–Fort Worth, which means most companies will happily ' +
      'sell you a new one. We repair them first. Control boards, capacitors, limit switches and logic faults are ' +
      'all serviceable, and a board is a fraction of the cost of a replacement operator.',
    whyDifferent:
      'Because LiftMaster is so common, it is also the brand most often replaced unnecessarily. The failure is ' +
      'usually a single serviceable component. We diagnose to the part, not to the invoice.',
    commonFailures: [
      'Control board failure and error codes',
      'Capacitor failure — motor hums but the gate does not move',
      'Limit switch drift causing partial travel',
      'Photo-eye and safety loop faults preventing close',
      'Battery backup failure on solar and standby units',
      'Receiver and remote programming loss',
    ],
    models: ['LA400', 'LA500', 'CSW24U', 'CSL24U', 'SL585', 'SL595', 'RSW12U', 'RSL12U', 'HDSL24UL', 'Elite Series'],
    faqs: [
      {
        q: 'My LiftMaster hums but the gate does not move. Is the motor dead?',
        a: 'Usually not. That symptom points at the capacitor far more often than the motor, and a capacitor is one of the least expensive repairs on a gate. The other possibility is that the gate itself is binding and the operator cannot overcome it — which is a gate problem, not an operator problem.',
      },
      {
        q: 'Are you a LiftMaster authorized dealer?',
        a: 'No. We service LiftMaster operators and carry common LiftMaster parts, but we are not an authorized dealer for the manufacturer.',
      },
      {
        q: 'Is it worth repairing a ten-year-old LiftMaster?',
        a: 'Generally yes. Parts for that generation are still widely available and the mechanical side of these units lasts a long time. Past about fifteen years, parts get harder to source and repeat visits start to add up — that is when replacement becomes the cheaper decision.',
      },
    ],
  },
  {
    slug: 'elite',
    // Client-supplied 4 Aug 2026: the only Elite photo where the manufacturer
    // name is legible on the housing. Leads the page because matching the badge
    // on your own gate is exactly what a visitor arrives here to do.
    featuredImage: 'elite-09',
    legacyPath: '/elite-gate-motor-repair/',
    name: 'Elite',
    mediaCategory: 'elite',
    contested: true,
    priority: 5,
    headline: 'Elite Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'Elite operators are common on Dallas residential and light commercial gates. Boards, limit switches and ' +
      'capacitors are all serviceable, and we carry the parts that actually fail.',
    whyDifferent:
      'Elite shares a lot of DNA with the LiftMaster line, which means the same repair-first logic applies — and ' +
      'the same tendency in this market to replace rather than diagnose.',
    commonFailures: [
      'Control board failure',
      'Capacitor failure',
      'Limit switch drift',
      'Photo-eye alignment faults',
      'Chain and sprocket wear on slide units',
      'Battery backup failure',
    ],
    models: ['CSW200UL', 'SL3000UL', 'Q401', 'Q404', 'Miracle One'],
    faqs: [
      {
        q: 'Is Elite the same as LiftMaster?',
        a: 'They are related product lines and share some components, which helps with parts availability. Diagnostics are broadly similar, though board layouts and error codes differ between models.',
      },
      {
        q: 'My Elite slide gate grinds when it moves. What is that?',
        a: 'Typically chain, sprocket or roller wear. Worth catching early — a worn chain that is left running will eventually take the sprocket and sometimes the gearbox with it.',
      },
    ],
  },
  {
    slug: 'viking',
    legacyPath: '/viking-gate-motor-repair/',
    name: 'Viking',
    mediaCategory: 'viking',
    contested: true,
    priority: 6,
    headline: 'Viking Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'Viking Access Systems operators are built for heavy gates and high-cycle use. We diagnose and repair them ' +
      'rather than defaulting to replacement.',
    whyDifferent:
      'Viking units are often installed on the heaviest gates on a property, so failures frequently trace back to ' +
      'the gate itself — hinges, rollers, alignment — rather than the operator. Diagnosing in the right order saves ' +
      'customers a lot of money here.',
    commonFailures: [
      'Control board and logic faults',
      'Limit and encoder drift',
      'Battery and solar charging failures',
      'Gearbox wear on heavy gates',
      'Hydraulic issues on applicable models',
      'Loop detector faults',
    ],
    models: ['I-8', 'K-2', 'F-1', 'R-6', 'T-21', 'G-5'],
    faqs: [
      {
        q: 'Viking operators are battery driven — does that change the repair?',
        a: 'It adds a diagnostic step. Many Viking installations run DC with battery and solar or trickle charging, so a gate that has become slow or unreliable is often a charging or battery problem rather than an operator fault. We test the power system before condemning anything mechanical.',
      },
    ],
  },
  {
    slug: 'eagle',
    legacyPath: '/eagle-gate-motor-repair/',
    name: 'Eagle',
    mediaCategory: 'eagle',
    contested: true,
    priority: 7,
    headline: 'Eagle Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'Eagle Access Control operators are widespread on Dallas residential and commercial gates. Most faults are ' +
      'serviceable on site.',
    whyDifferent:
      'Eagle units are reliable enough that when they do fail, it is usually a single component with a long service ' +
      'life ahead of it once replaced.',
    commonFailures: [
      'Control board failure',
      'Limit switch and cam drift',
      'Capacitor failure',
      'Chain and sprocket wear',
      'Safety loop and photo-eye faults',
      'Battery backup failure',
    ],
    models: ['Eagle 1000', 'Eagle 2000', 'Eagle 200', 'Eagle 220', 'Flacon 220'],
    faqs: [
      {
        q: 'Are Eagle parts still available?',
        a: 'Yes for current and recent models. Some older units need a board substitution, which we will explain before doing rather than after.',
      },
    ],
  },
  // ---- No photography in the asset library yet. Kept short and honest rather
  // ---- than padded with stock imagery. Promote once real photos exist.
  {
    slug: 'doorking',
    legacyPath: '/doorking-gate-repair/',
    name: 'DoorKing',
    mediaCategory: null,
    contested: false,
    priority: 8,
    headline: 'DoorKing Gate Operator & Intercom Repair in Dallas–Fort Worth',
    intro:
      'DoorKing operators and telephone entry systems are common on Dallas apartment, HOA and commercial ' +
      'entrances. We service both the gate operators and the access control side.',
    whyDifferent:
      'DoorKing installations usually combine an operator with a telephone entry or card system, so the fault is ' +
      'often in the access control rather than the gate. Diagnosing both together avoids two separate call-outs.',
    commonFailures: [
      'Telephone entry board faults',
      'Card reader and keypad failures',
      'Control board failure',
      'Limit switch drift',
      'Loop detector faults',
      'Programming and directory corruption',
    ],
    models: ['6300', '6400', '6500', '9100', '9150', '1830', '1835', '1837'],
    faqs: [
      {
        q: 'Do you program DoorKing telephone entry systems?',
        a: 'Yes — directory entries, access codes, card credentials and dial-out configuration, as well as the physical repair.',
      },
    ],
  },
  {
    slug: 'linear',
    legacyPath: '/linear-gate-motor-repair/',
    name: 'Linear',
    mediaCategory: null,
    contested: false,
    priority: 9,
    headline: 'Linear Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'Linear operators are common on Dallas residential driveways and smaller commercial entrances. Most faults ' +
      'are board, limit or capacitor related and repairable on site.',
    whyDifferent:
      'Linear units are widely installed and well supported, so repair is nearly always the economical route.',
    commonFailures: [
      'Control board failure',
      'Capacitor failure',
      'Limit switch drift',
      'Receiver and remote programming loss',
      'Battery backup failure',
    ],
    models: ['LDO50', 'LSO50', 'SWG-050', 'GSWG-A', 'AP-5', 'Osco Series'],
    faqs: [
      {
        q: 'My Linear remote stopped working but the keypad is fine. What is wrong?',
        a: 'Almost always the receiver or the remote itself rather than the operator. This is one of the quickest and least expensive repairs we do.',
      },
    ],
  },
  {
    slug: 'hysecurity',
    legacyPath: '/hysecurity-gate-motor-repair/',
    name: 'HySecurity',
    mediaCategory: null,
    contested: false,
    priority: 10,
    headline: 'HySecurity Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'HySecurity operators are heavy-duty commercial and industrial units — the sort installed where a gate ' +
      'failure stops a business. We service them, including the hydraulic models.',
    whyDifferent:
      'HySecurity units are engineered for continuous high-cycle duty on secure sites, so downtime matters more ' +
      'than on a residential gate. Diagnostics need to be right the first visit.',
    commonFailures: [
      'Hydraulic pressure loss and seal failure',
      'Smart Touch controller faults and error codes',
      'Drive belt and chain wear',
      'Limit and encoder drift',
      'Loop detector and safety device faults',
      'Motor and pump wear on continuous-duty installs',
    ],
    models: ['SlideDriver', 'SwingRiser', 'HydraSwing', 'StrongArm', 'SlideSmart HD'],
    faqs: [
      {
        q: 'Do you service commercial and industrial HySecurity installations?',
        a: 'Yes, including hydraulic units, barrier arms and Smart Touch controller diagnostics.',
      },
    ],
  },
  {
    // Added at the client's explicit request, 3 Aug 2026. No legacy WordPress
    // page existed for this brand, so there is no 301 to preserve.
    slug: 'us-automatic',
    legacyPath: '/us-automatic-gate-motor-repair/',
    name: 'US Automatic',
    // Client supplied five photographs on 4 Aug 2026 — ranch and acreage
    // installs, including an opened enclosure showing the battery and charge
    // wiring, which is the single most useful image on the page.
    mediaCategory: 'us-automatic',
    contested: false,
    priority: 11,
    headline: 'US Automatic Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'US Automatic builds solar-powered gate operators for rural and acreage properties — the Ranger and Patriot ' +
      'lines you see on ranch entrances across North Texas. They run off-grid, which means most failures trace ' +
      'back to power, not the motor.',
    whyDifferent:
      'A solar operator is a power system with a gate attached. When one stops working the instinct is to blame ' +
      'the operator, but the usual culprit is a battery at the end of its life, a panel that has drifted out of ' +
      'sun, or a charge controller that has quit. Diagnosing it as a power problem first is the difference ' +
      'between a battery swap and an unnecessary replacement — which matters on rural properties where the ' +
      'nearest mains power may be a long way from the gate.',
    commonFailures: [
      'Battery degradation — the most common cause by a wide margin',
      'Solar panel output loss from shading, dirt or panel angle drift',
      'Charge controller failure',
      'Control board damage from lightning and power surges',
      'Limit switch drift on Ranger and Patriot units',
      'Gate arm and linkage wear on long driveway gates',
    ],
    models: ['Ranger', 'Ranger Solar', 'Patriot I', 'Patriot II', 'Patriot RSL', 'Sentry'],
    faqs: [
      {
        q: 'My solar gate has stopped working. Is the operator dead?',
        a: 'Usually not. On solar units the battery is the part that wears out, typically every three to five years in Texas heat, and a weak battery behaves exactly like a failed operator — the gate opens slowly, stops partway, or does nothing at all. We test the battery, panel output and charge controller before we touch the operator itself.',
      },
      {
        q: 'Why does my gate work in summer but not winter?',
        a: 'Shorter days and a lower sun angle mean the panel generates less, and cold reduces battery capacity at the same time. If the system was marginal in summer it will fail in winter. The fix is usually a larger battery, a repositioned or additional panel, or both.',
      },
      {
        q: 'Do you service gates on rural properties outside the main metro?',
        a: 'Yes. A large share of US Automatic units in our area are on acreage and ranch entrances well outside the city limits, and those are exactly the properties where a failed gate is most disruptive. Call and we will confirm coverage for your address.',
      },
      {
        q: 'Can you convert a solar gate to mains power?',
        a: 'Sometimes, if there is a practical route for a power run. Often it is cheaper and less disruptive to correct the solar sizing instead. We will tell you which makes sense for your gate rather than defaulting to the bigger job.',
      },
    ],
  },
]

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug)

/**
 * Navigation order, set by the client on 4 Aug 2026: LiftMaster first, then
 * US Automatic, then everything else.
 *
 * Kept separate from `brands` because that array is ordered by competitive
 * priority (FAAC, All-O-Matic and Ramset lead because no DFW competitor has a
 * page for them) and the brand pages still build from it. Menu order and page
 * order are different decisions and should not fight each other.
 */
const NAV_FIRST = ['liftmaster', 'us-automatic'] as const

export const navBrands: Brand[] = [
  ...NAV_FIRST.map((slug) => brands.find((b) => b.slug === slug)).filter(Boolean as never as (b: Brand | undefined) => b is Brand),
  ...brands.filter((b) => !NAV_FIRST.includes(b.slug as (typeof NAV_FIRST)[number])),
]
/** FAAC, All-O-Matic and Ramset — nobody in DFW has a page for these. */
export const uncontestedBrands = brands.filter((b) => !b.contested && b.mediaCategory)
