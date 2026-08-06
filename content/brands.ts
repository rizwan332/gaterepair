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
    // Client-supplied 5 Aug 2026: the only FAAC photo where the manufacturer
    // name is legible on the control enclosure. Leads the page for the same
    // reason elite-09 does — matching the badge on your own gate is exactly
    // what brings someone to a brand page.
    featuredImage: 'faac-07',
    legacyPath: '/faac-gate-motor-repair/',
    name: 'FAAC',
    mediaCategory: 'faac',
    contested: false,
    priority: 1,
    headline: 'FAAC Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'FAAC builds some of the best hydraulic gate operators on the market — and almost nobody in Dallas will work ' +
      'on them, because hydraulics need different diagnostics, different parts and different training to a chain ' +
      'drive. We repair them.',
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
        q: 'I was told my FAAC has to be replaced. Is that right?',
        a: 'Often it means the hydraulics were not serviceable by whoever looked at it. Gate work in Dallas is overwhelmingly chain-drive and screw-drive, so a hydraulic unit sits outside what many technicians carry parts and training for. Ask which specific component was tested and found faulty — on a FAAC, seals, fluid, pressure and boards are all replaceable, and replacement is genuinely necessary only when the housing or ram is physically damaged.',
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
    // Client picked this as the All-O-Matic front image, 6 Aug 2026.
    featuredImage: 'all-o-matic-15',
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
      'LiftMaster is the most common gate operator in Dallas–Fort Worth, and we repair them before we replace them. ' +
      'Control boards, capacitors, limit switches and logic faults are all serviceable, and a board is a fraction ' +
      'of the cost of a replacement operator.',
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
    headline: 'Elite Gate Repair in Dallas–Fort Worth',
    intro:
      'Elite gate repair on Dallas residential and light commercial gates is routine work for us. Boards, ' +
      'limit switches and capacitors are all serviceable, and we carry the parts that actually fail.',
    whyDifferent:
      'Elite shares a lot of DNA with the LiftMaster line, which means the same repair-first logic applies: ' +
      'the board, the capacitor and the limit switches are the parts that fail, and all three are replaceable ' +
      'without touching the operator itself.',
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
    // Client picked this as the Viking front image, 6 Aug 2026.
    featuredImage: 'viking-06',
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
    // Client-supplied 6 Aug 2026; he picked the front image himself.
    mediaCategory: 'doorking',
    featuredImage: 'doorking-01',
    legacyPath: '/doorking-gate-repair/',
    name: 'DoorKing',
    contested: false,
    priority: 8,
    headline: 'DoorKing Gate Operator & Intercom Repair in Dallas–Fort Worth',
    intro:
      'DoorKing — DKS — operators and telephone entry systems run the entrances at a large share of Dallas ' +
      'apartment complexes, HOA communities and commercial sites. We service both sides of the system: the ' +
      'gate operator itself and the access control that tells it when to open.',
    whyDifferent:
      'A DoorKing installation is two systems that have to agree with each other: an operator, and a telephone ' +
      'entry or card system telling it when to run. When a resident says the gate will not open, the operator ' +
      'is frequently fine and the fault is in the entry panel, the directory programming or the loop — which is ' +
      'why we diagnose both together rather than booking two separate call-outs.',
    commonFailures: [
      'Telephone entry board faults',
      'Card reader and keypad failures',
      'Control board failure',
      'Limit switch drift',
      'Loop detector faults',
      'Programming and directory corruption',
      'Gearbox wear on high-cycle apartment and HOA entrances',
      'Dial-out and cellular connection loss after a phone line change',
    ],
    models: ['6300', '6400', '6500', '9100', '9150', '1830', '1835', '1837'],
    faqs: [
      {
        q: 'Do you program DoorKing telephone entry systems?',
        a: 'Yes — directory entries, access codes, card credentials and dial-out configuration, as well as the physical repair.',
      },
      {
        q: 'Residents can call in but the gate will not open. Where is the fault?',
        a: 'That symptom separates the two systems cleanly: the entry panel is working, so the fault is between it and the operator. Usually it is the relay output, the wiring run between panel and operator, or the operator input itself. It is rarely the part people expect.',
      },
      {
        q: 'Our DKS system stopped dialling out after we changed phone providers.',
        a: 'Common, and not a fault in the unit. Older DoorKing entry systems expect an analogue line, and a switch to VoIP or a cellular service changes what the panel is dialling into. The fix is usually a cellular module rather than replacing the system.',
      },
      {
        q: 'Can a DoorKing gearbox be repaired instead of replaced?',
        a: 'Often, yes. A gearbox is a serviceable assembly rather than a sealed unit, and on a DoorKing operator it can usually be rebuilt with the motor and control board left in place. We have documented one of these jobs in full — see the case studies on this page.',
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
      'US Automatic builds both solar and electric gate operators — the Ranger and Patriot lines you see on ' +
      'ranch entrances, acreage driveways and mains-powered residential gates across Dallas–Fort Worth. We repair ' +
      'both, and the first job is working out which kind of fault you actually have.',
    whyDifferent:
      'On a solar install the operator is a power system with a gate attached, and the usual culprit is a battery ' +
      'at the end of its life, a panel that has drifted out of sun, or a charge controller that has quit. On a ' +
      'mains-powered unit the same symptoms point somewhere quite different — a transformer, a surge-damaged ' +
      'board or a limit switch. Establishing which system you have before diagnosing is the difference between ' +
      'a battery swap and an unnecessary replacement.',
    commonFailures: [
      'Battery degradation — the most common cause on solar installs by a wide margin',
      'Solar panel output loss from shading, dirt or panel angle drift',
      'Charge controller failure',
      'Transformer and mains supply faults on electric installs',
      'Control board damage from lightning and power surges',
      'Limit switch drift on Ranger and Patriot units',
      'Gate arm and linkage wear on long driveway gates',
    ],
    models: ['Ranger', 'Ranger Solar', 'Patriot I', 'Patriot II', 'Patriot RSL', 'Sentry'],
    faqs: [
      {
        q: 'My US Automatic gate has stopped working. Is the operator dead?',
        a: 'Usually not. On a solar unit the battery is the part that wears out, typically every three to five years in Texas heat, and a weak battery behaves exactly like a failed operator — the gate opens slowly, stops partway, or does nothing at all. We test the battery, panel output and charge controller first. On a mains-powered unit we start at the transformer and the incoming supply instead, because the same symptoms have a completely different cause.',
      },
      {
        q: 'Why does my solar gate work in summer but not winter?',
        a: 'Shorter days and a lower sun angle mean the panel generates less, and cold reduces battery capacity at the same time. If the system was marginal in summer it will fail in winter. The fix is usually a larger battery, a repositioned or additional panel, or both.',
      },
      {
        q: 'Do you service gates on rural properties outside the main metro?',
        a: 'Yes. A large share of US Automatic units in our area are on acreage and ranch entrances well outside the city limits, and those are exactly the properties where a failed gate is most disruptive. Call and we will confirm coverage for your address.',
      },
      {
        q: 'Do you repair electric US Automatic operators as well as solar?',
        a: 'Yes — both. US Automatic makes solar and electric operators, and we service the full range. We can also convert a solar gate to mains power where there is a practical route for a power run, though it is often cheaper and less disruptive to correct the solar sizing instead. We will tell you which makes sense for your gate rather than defaulting to the bigger job.',
      },
    ],
  },
  // -- Added 6 Aug 2026 from the client's own supplied brand list ----------
  // He asked for the full roster of manufacturers he services rather than the
  // eleven that had pages. None of these six had a legacy WordPress page, so
  // there is no 301 to preserve and `legacyPath` is the new canonical path.
  //
  // No photography for any of them yet: `mediaCategory: null` means the page
  // renders without a gallery rather than borrowing another brand's photos.
  // Ranked below the brands we can evidence with our own work.
  {
    slug: 'apollo',
    legacyPath: '/apollo-gate-motor-repair/',
    name: 'Apollo',
    mediaCategory: null,
    contested: false,
    priority: 11,
    headline: 'Apollo Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'Apollo builds the solar-capable swing and slide operators found on a great many Dallas–Fort Worth acreage ' +
      'properties, usually paired with a battery and a small panel. We repair them rather than replacing them.',
    whyDifferent:
      'Apollo installs are typically off-grid, which means most faults are power faults rather than operator ' +
      'faults. A dying battery, an undersized panel or a shaded array produces exactly the symptoms of a failing ' +
      'control board, so the charging system has to be measured under load before anything is condemned.',
    commonFailures: [
      'Battery failure and undercharging',
      'Solar panel output loss from shading, soiling or panel age',
      'Control board and receiver faults',
      'Limit switch drift on swing arms',
      'Actuator arm wear and mounting bracket fatigue',
      'Corroded low-voltage connections at the enclosure',
    ],
    models: ['1500 Series', '1600 Series', '7000 Series', 'Titan', 'Nova'],
    faqs: [
      {
        q: 'My solar Apollo gate has slowed down or stopped. Is the operator dead?',
        a: 'Usually not. A slow gate that gets worse toward the end of the day is the classic signature of a charging system that is not keeping up, not a failing operator. We measure the battery under load and the panel output before touching the operator itself.',
      },
      {
        q: 'Can you replace an Apollo battery and solar panel?',
        a: 'Yes, and we size the replacement to the gate rather than fitting like for like. An array that was marginal when installed will be marginal again.',
      },
    ],
  },
  {
    slug: 'mighty-mule',
    legacyPath: '/mighty-mule-gate-motor-repair/',
    name: 'Mighty Mule',
    mediaCategory: null,
    contested: false,
    priority: 12,
    headline: 'Mighty Mule Gate Opener Repair in Dallas–Fort Worth',
    intro:
      'Mighty Mule openers are the most common homeowner-installed operators in Dallas–Fort Worth. We service and ' +
      'repair them, including the solar and battery-backed installations.',
    whyDifferent:
      'These are light-duty operators, frequently fitted to gates heavier than they were rated for. That matters ' +
      'because the failure then repeats: replacing the arm without addressing the load or the hinges buys a few ' +
      'months. We check what the operator is actually being asked to move.',
    commonFailures: [
      'Battery and charging faults on solar installs',
      'Control board failures after lightning or surge',
      'Actuator arm wear and internal gear stripping',
      'Limit and stall-force settings drifting out',
      'Receiver and remote pairing loss',
      'Undersized operator on an overweight gate',
    ],
    models: ['MM360', 'MM560', 'FM500', 'FM502', 'Ranger'],
    faqs: [
      {
        q: 'Is a Mighty Mule worth repairing, or should I upgrade?',
        a: 'It depends what failed and what the gate weighs. A board or a battery is worth repairing. If the arm has stripped repeatedly on a heavy gate, the honest answer is that the operator is undersized for the job and we will tell you so.',
      },
      {
        q: 'Do you work on solar Mighty Mule installations?',
        a: 'Yes. Most of the ones we see are solar, and most of the faults turn out to be in the battery or panel rather than the operator.',
      },
    ],
  },
  {
    slug: 'ghost-controls',
    legacyPath: '/ghost-controls-gate-motor-repair/',
    name: 'Ghost Controls',
    mediaCategory: null,
    contested: false,
    priority: 13,
    headline: 'Ghost Controls Gate Opener Repair in Dallas–Fort Worth',
    intro:
      'Ghost Controls automatic gate openers are common on residential and ranch driveways across Dallas–Fort Worth, ' +
      'almost always running on solar and battery. We repair them.',
    whyDifferent:
      'Ghost Controls units are DC operators designed around a battery, so battery health governs everything the ' +
      'gate does. A weak battery reads as a weak operator: slow travel, partial opening, intermittent response. ' +
      'The charging system is the first thing to test, not the last.',
    commonFailures: [
      'Battery capacity loss and charge faults',
      'Solar panel output falling below demand',
      'Control box and receiver failures',
      'Arm gear wear and mounting bracket movement',
      'Auto-close timer and sensor faults',
      'Remote and keypad pairing loss',
    ],
    models: ['TDS Series', 'TSS Series', 'DTP1', 'AXP1', 'Architectural Series'],
    faqs: [
      {
        q: 'My Ghost Controls gate opens part way and stops. Why?',
        a: 'Most often the battery no longer holds enough charge to complete a full cycle under load. It presents as an operator fault and is usually a power fault. We test the battery and the panel output before anything else.',
      },
      {
        q: 'Can you service a Ghost Controls gate that was self-installed?',
        a: 'Yes. We also check the mounting and the gate hardware, since self-installed arms are frequently fitted to gates that are heavier or draggier than the operator is rated for.',
      },
    ],
  },
  {
    slug: 'nice',
    legacyPath: '/nice-gate-motor-repair/',
    name: 'Nice',
    mediaCategory: null,
    contested: false,
    priority: 14,
    headline: 'Nice Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'Nice and Nice/Apollo operators appear on both residential and commercial entrances across the Metroplex, ' +
      'including the underground and articulated-arm swing units. We service and repair them.',
    whyDifferent:
      'Nice is a European system, and its control logic, programming procedure and accessories differ from the ' +
      'American operators most Dallas gate work is built around. Programming a Nice board is not the same job as ' +
      'programming a LiftMaster, and getting it wrong means a gate that runs but never quite behaves.',
    commonFailures: [
      'Control unit and logic board faults',
      'Encoder and limit position loss after power interruption',
      'Photocell alignment and safety-edge faults',
      'Gearbox and drive wear on articulated arm units',
      'Radio receiver and transmitter pairing loss',
      'Seal failure and water ingress on underground operators',
    ],
    models: ['Wingo', 'Toona', 'Robus', 'Road', 'Metro', 'Ten'],
    faqs: [
      {
        q: 'Do you program Nice control units?',
        a: 'Yes, including limit learning and force settings. Nice programming differs from the American operators most gate companies work on daily, which is often why a Nice gate has been left running badly rather than repaired.',
      },
      {
        q: 'Can an underground Nice operator be repaired in place?',
        a: 'Frequently, yes. Water ingress and seal failure are the usual causes, and both are serviceable. Replacement is a much larger job involving the foundation box, so it is worth diagnosing properly first.',
      },
    ],
  },
  {
    slug: 'bft',
    legacyPath: '/bft-gate-motor-repair/',
    name: 'BFT',
    mediaCategory: null,
    contested: false,
    priority: 15,
    headline: 'BFT Gate Operator Repair in Dallas–Fort Worth',
    intro:
      'BFT builds hydraulic and electromechanical operators used on gated communities, commercial entrances and ' +
      'higher-end residential gates. We repair them, hydraulics included.',
    whyDifferent:
      'Like FAAC, BFT is a hydraulic-heavy line, and hydraulic operators need different diagnostics, different ' +
      'parts and different training to a chain drive. Pressure, fluid condition and seal integrity are measurable ' +
      'things, and measuring them is what separates a repair from a replacement quote.',
    commonFailures: [
      'Hydraulic seal failure and fluid loss',
      'Pressure loss causing slow or incomplete travel',
      'Control board and Deimos/Alpha logic faults',
      'Encoder and limit drift',
      'Photocell and safety-edge faults',
      'Ram and piston wear on high-cycle installs',
    ],
    models: ['Deimos', 'Ares', 'Phobos', 'Icaro', 'Elpro', 'Giotto'],
    faqs: [
      {
        q: 'Do you repair hydraulic BFT operators?',
        a: 'Yes. Seals, fluid and pressure are all serviceable, and a hydraulic unit that is leaking or slow is very rarely beyond repair. Replacement is genuinely necessary only when the ram or housing is physically damaged.',
      },
      {
        q: 'Can you get BFT parts in Dallas?',
        a: 'Yes. BFT is less common here than LiftMaster, so parts are ordered rather than carried on every truck, and we confirm availability before quoting a repair.',
      },
    ],
  },
  {
    slug: 'gto',
    legacyPath: '/gto-gate-motor-repair/',
    name: 'GTO',
    mediaCategory: null,
    contested: false,
    priority: 16,
    headline: 'GTO Gate Opener Repair in Dallas–Fort Worth',
    intro:
      'GTO and GTO/PRO openers — the line Mighty Mule grew out of — are still running on a great many North ' +
      'Texas driveways. We repair them and can still source parts for most models.',
    whyDifferent:
      'These are older DC operators, and a lot of the ones we see are fifteen or twenty years old. Age alone is ' +
      'not a reason to replace one: the mechanical side was built to last and the parts that fail are usually the ' +
      'cheap ones. We will tell you honestly when a unit really has reached the end.',
    commonFailures: [
      'Battery and solar charging faults',
      'Control board failure, often after a surge',
      'Actuator arm gear wear',
      'Limit and stall-force drift',
      'Receiver and remote pairing loss',
      'Corroded connections in the control box',
    ],
    models: ['GTO PRO SW-2000XL', 'SW-3000XL', 'SW-4000XL', 'SL-1000', 'Mighty Mule conversion kits'],
    faqs: [
      {
        q: 'My GTO opener is twenty years old. Can it still be repaired?',
        a: 'Usually yes. Boards, batteries and arm gears are the parts that fail and all three are replaceable. We will be straight with you if a unit genuinely has reached the end of its life.',
      },
      {
        q: 'Are GTO parts still available?',
        a: 'For most models, yes — GTO and Mighty Mule share a good deal of hardware. We confirm availability before quoting rather than after.',
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
