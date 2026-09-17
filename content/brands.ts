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
      'Control board faults, including the 455 D board on hydraulic swing units',
      'Encoder and limit adjustment drift',
      'Release-key valve leaks',
      'Cold-weather viscosity slowdown',
    ],
    // Corrected 15 Sep 2026 against FAAC manuals: the 750 is an in-ground
    // hydraulic swing operator, not a slide; 452 MPS, 455 D and E124 are
    // control boards, not operators, and now live under commonFailures.
    models: ['400', '402', '412', '415', '422', '750', '770', '844', 'S800H'],
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
      'Limit nut or cam slip and travel drift',
      'Clutch or torque-limiter slip causing stalls (SL-150, SW-300, SW-350)',
      'Electronic reversing device sensitivity set wrong for the gate',
      'Chain stretch and sprocket wear',
      'Control board relay failure',
    ],
    // Corrected 15 Sep 2026 against All-O-Matic's lineup and manuals. SL-125,
    // SW-400, Ranger, BL-40 and RP-100 do not appear in either.
    models: ['SL-100', 'SL-150', 'SW-300', 'SW-350', 'SL-45DC PRO', 'SL-90DC PRO', 'SL-175DC PRO', 'SW-375DC PRO', 'OH-200', 'MAGNA Q'],
    faqs: [
      {
        q: 'Are All-O-Matic parts still available?',
        a: 'Yes. All-O-Matic is still in production and the common wear parts — limit switches, clutches, chains, boards — are readily available. This is one of the more economical operators to keep running.',
      },
      {
        q: 'My All-O-Matic stalls partway and reverses. What is it?',
        a: 'Usually the gate, not the operator. On an SL-150 the gearbox clutch slips when the gate meets resistance; on an SL-100 the board’s electronic reversing device stops and reverses it. Either way, a gate binding on its track or hinges produces exactly this symptom, so we check the gate by hand before touching the operator — and only then look at the clutch, reversing sensitivity or limits.',
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
      'Ramset Automatic Gate Systems builds slide, swing and overhead gate operators — the RAM 100 and RAM 1000 ' +
      'among them — for residential and light commercial gates. They are frequently misdiagnosed, and we repair ' +
      'them rather than defaulting to replacement.',
    whyDifferent:
      'When a Ramset is fitted to a busy commercial or multi-family entrance it wears differently to the same unit ' +
      'on a driveway — the same part fails far sooner because the gate runs many more cycles a day. ' +
      'Diagnosing them correctly means knowing which wear is normal for the duty cycle and which is a real fault.',
    commonFailures: [
      'High-cycle chain and sprocket wear',
      'Limit switch failure under heavy duty cycle',
      'Control board and relay burnout',
      'Loop detector faults on commercial installs',
      'Motor overheating and thermal cutout',
      'Gearbox wear on continuous-duty entrances',
    ],
    // Corrected 15 Sep 2026 against ramsetinc.com (Ramset Automatic Gate
    // Systems, Sun Valley CA — unrelated to the fastener brand). RAM 200,
    // RAM 400 and a barrier arm series do not exist.
    models: ['RAM 100', 'RAM 1000', 'RAM 5500', 'RAM 101 DC', 'RAM 300', 'RAM 302', 'RAM 3000', 'RAM 30-30', 'RAM 2000'],
    faqs: [
      {
        q: 'Our Ramset gate at an apartment entrance keeps failing. Why?',
        a: 'Duty cycle. A gate running a few hundred cycles a day wears parts on a completely different timeline to a residential driveway. Often the fix is not just replacing the failed part but correcting what is making the operator work harder than it should — alignment, roller condition, or a gate that has gained weight from added infill.',
      },
      {
        q: 'Do you service commercial and HOA Ramset installations?',
        a: 'Yes. We handle single entrances through multi-gate properties, including the loop detectors and access control the operator is wired into.',
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
      'Control boards, batteries, limit settings, sensors and — on AC units — capacitors are all serviceable, and a board is a fraction ' +
      'of the cost of a replacement operator.',
    whyDifferent:
      'Because LiftMaster is so common, it is also the brand most often replaced unnecessarily. The failure is ' +
      'usually a single serviceable component. We diagnose to the part, not to the invoice.',
    commonFailures: [
      'Control board failure and error codes',
      'Battery and charging faults on DC operators such as the LA400, LA412 and CSW24UL',
      'Capacitor failure on AC Elite Series units — motor hums but the gate does not move',
      'Limit switch drift causing partial travel',
      'Photo-eye and safety loop faults preventing close',
      'Battery backup failure on solar and standby units',
      'Receiver and remote programming loss',
    ],
    // Corrected 15 Sep 2026: current UL model names from LiftMaster manuals;
    // LA412 added; "Elite Series" is a product line rather than a model.
    // SL595 links across to its page under Elite.
    models: ['LA400UL', 'LA412UL', 'LA500UL', 'RSW12UL', 'RSL12UL', 'CSW24UL', 'CSL24UL', 'SL3000UL', 'CSW200UL', 'SL595', 'HDSL24UL'],
    faqs: [
      {
        q: 'My LiftMaster hums but the gate does not move. Is the motor dead?',
        a: 'Usually not. On an AC LiftMaster Elite Series operator such as the SL3000UL or CSW200UL, that symptom points at the start capacitor far more often than the motor, and a capacitor is one of the least expensive repairs on a gate. DC models such as the LA400 and CSW24UL have no motor capacitor, so there we look at the battery, the board output and the arm. On any model the other possibility is that the gate itself is binding and the operator cannot overcome it — a gate problem, not an operator problem.',
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
      'Elite has belonged to Chamberlain, LiftMaster’s parent company, since 2003, and its current commercial ' +
      'operators — the SL3000UL and CSW200UL — are sold as LiftMaster Elite Series. The repair-first logic carries ' +
      'over: on these AC units the board, the start capacitor and the limit switches are the parts that fail, and ' +
      'all three are replaceable without touching the operator itself.',
    commonFailures: [
      'Control board failure',
      'Capacitor failure',
      'Limit switch drift',
      'Photo-eye alignment faults',
      'Chain and sprocket wear on slide units',
      'Battery backup failure',
    ],
    // Corrected 15 Sep 2026: Q401 and Q404 are Elite parts (a control board and
    // an alarm), not operators. CSW200UL and SL3000UL link to their pages under
    // LiftMaster, where the line is now sold.
    models: ['CSW200UL', 'SL3000UL', 'SL595', 'SL585', 'Miracle One'],
    faqs: [
      {
        q: 'Is Elite the same as LiftMaster?',
        a: 'Elite has been part of Chamberlain, LiftMaster’s parent company, since 2003, and current Elite models are sold as LiftMaster Elite Series. Board layouts and error codes still differ between models, so the model on the label matters when we diagnose and quote.',
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
      'Limit switch drift on swing operators such as the T-21 and R-6',
      'Lost limits on older K-2 slide operators after a total power failure',
      'Battery and solar charging failures',
      'Gearbox and drive chain wear on heavy gates',
      'Loop detector faults',
    ],
    // Corrected 15 Sep 2026 against Viking's current manuals: no current Viking
    // operator is hydraulic, and the swing units use mechanical limit switches.
    models: ['T-21', 'F-1', 'G-5', 'R-6', 'E-4', 'X-390', 'K-2', 'L-3', 'H-10', 'I-8'],
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
      'Eagle Access Control Systems builds slide and swing gate operators — the Eagle 1000, 2000 and 200 among ' +
      'them — for residential and commercial gates. Most faults are serviceable on site.',
    whyDifferent:
      'Eagle units are reliable enough that when they do fail, it is usually a single component with a long service ' +
      'life ahead of it once replaced.',
    commonFailures: [
      'Control board failure',
      'Limit switch and cam drift',
      'Chain and sprocket wear',
      'Safety loop and photo-eye faults',
      'Battery backup failure',
    ],
    // Corrected 15 Sep 2026: "Eagle 220" and "Falcon 220" do not appear in
    // Eagle's lineup or at distributors.
    models: ['Eagle 1000', 'Eagle 2000', 'Eagle 200', 'Eagle 100', 'Eagle II'],
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
    // Corrected 15 Sep 2026: "1830" is DoorKing's name for the 1833–1838 board
    // series, not a model. 6000-series units are swing operators, 9000-series
    // slide operators, and the barrier gates are the 1601–1603.
    models: ['6050', '6300', '6500', '9100', '9150', '1601', '1834', '1835', '1837', '1812'],
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
      'Linear gate operators — the SW and SL series, now part of Nice — are found on residential driveways and ' +
      'smaller commercial entrances. Most faults are board, limit or drive related and repairable on site.',
    whyDifferent:
      'Linear units are widely installed and well supported, so repair is nearly always the economical route.',
    commonFailures: [
      'Control board failure',
      'Torque limiter slip and drive belt wear',
      'Limit switch drift',
      'Receiver and remote programming loss',
      'Battery backup failure',
    ],
    // Corrected 15 Sep 2026: LDO50 and LSO50 are Linear garage door openers, not
    // gate operators; SWG-050 and AP-5 could not be verified.
    models: ['SWR', 'SWC', 'SWD', 'SLR', 'SLC', 'SLD'],
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
    models: ['SlideDriver', 'SlideDriver II', 'SwingSmart DC', 'HydraSwing', 'StrongArm', 'SlideSmart DC'],
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
      'US Automatic builds 12-volt battery-powered gate operators — the Patriot and Ranger lines — charged either ' +
      'by a solar panel or by a plug-in AC charger. We repair both setups, and the first job is working out whether ' +
      'the fault is in the battery and charging side or in the operator itself.',
    // Corrected 15 Sep 2026 against US Automatic's manuals. No US Automatic
    // operator runs its motor from mains power: the "AC" versions are the same
    // battery-run operator, recharged by a low-voltage charger. The earlier copy
    // sent "mains-powered" units to the transformer and incoming supply, which
    // is very likely the solar/electrical correction the client asked for.
    whyDifferent:
      'Every US Automatic operator moves the gate from its battery. The solar and AC versions differ only in how ' +
      'that battery is refilled — a panel, or a low-voltage charger fed from an outlet — so a slow or stalling gate ' +
      'points at the battery and its charging on both. On a solar install the usual culprits are a battery at the ' +
      'end of its life or a panel that has drifted out of sun; on an AC-charged install it is the battery, the ' +
      'charger or the charge wiring. Testing that side under load before condemning the operator is the difference ' +
      'between a battery swap and an unnecessary replacement.',
    commonFailures: [
      'Battery degradation — the most common cause on solar installs by a wide margin',
      'Solar panel output loss from shading, dirt or panel angle drift',
      'Battery controller and charge-path failure',
      'AC charger or charge-wire faults on AC-charged installs',
      'Control board damage from lightning and power surges',
      'Limit switch drift on Patriot units, and limit settings on Ranger control boards',
      'Gate arm and linkage wear on long driveway gates',
    ],
    models: ['Patriot I', 'Patriot II', 'Patriot RSL', 'Ranger 500', 'Ranger HD', 'Ranger I', 'Ranger II', 'Sentry 300'],
    faqs: [
      {
        q: 'My US Automatic gate has stopped working. Is the operator dead?',
        a: 'Usually not. Every US Automatic operator runs the gate from its battery, and the battery is the part that wears out — sooner in Texas heat. A weak battery behaves exactly like a failed operator: the gate opens slowly, stops partway, or does nothing at all. We test the battery under load first, then the charging side — panel output on a solar install, the AC charger and its wiring on a plug-in one — before looking at the operator.',
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
        q: 'Do you repair AC-charged US Automatic operators as well as solar?',
        a: 'Yes — both. The operator is the same battery-run unit either way; only the charging differs. Switching a solar gate to AC charging means fitting a low-voltage charger rather than running mains power to the gate, and correcting an undersized solar setup is sometimes the simpler fix. We will tell you which makes sense for your gate rather than defaulting to the bigger job.',
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
    // Corrected 15 Sep 2026: "7000 Series" and "Nova" could not be verified.
    // Plain model numbers so the brand page links them to their model page.
    models: ['1550', '1650', 'TITAN', '7251/7351'],
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
      'Mighty Mule openers are among the most widely sold homeowner-installed gate openers, and plenty end up on ' +
      'gates heavier than they were built for. We service and repair them, including solar and battery-backed installations.',
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
    models: ['MM571W', 'MM572W', 'MM371W', 'MM372W', 'MM271', 'MM272', 'TS571W', 'MM-SL2000B', 'MM560', 'MM562', 'FM500', 'FM502'],
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
    // Corrected 15 Sep 2026: AXP1 is a remote, not an opener; DTP1 and
    // "Architectural Series" could not be verified.
    models: ['TSS1', 'TDS2', 'TDS2XP'],
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
      'In North America, Nice sells gate operators under its own name and through the brands it acquired — ' +
      'Apollo, HySecurity and Linear among them. We service and repair them.',
    whyDifferent:
      'Because Nice’s North American range is built partly from acquired lines, two operators both badged Nice ' +
      'can have entirely different controllers, programming procedures and accessories. Identifying which family ' +
      'a unit came from is the first step — programming it as if it were another line means a gate that runs but ' +
      'never quite behaves.',
    commonFailures: [
      'Control unit and logic board faults',
      'Encoder and limit position loss after power interruption',
      'Photocell alignment and safety-edge faults',
      'Gearbox and drive wear',
      'Radio receiver and transmitter pairing loss',
    ],
    // Corrected 15 Sep 2026: Wingo, Toona, Robus, Road, Metro and Ten are
    // European Nice products, not in its North American gate operator lineup.
    models: ['TITAN', 'Juno', 'Vanguard 3501', '7251/7351'],
    faqs: [
      {
        q: 'Do you program Nice control units?',
        a: 'Yes, including limit learning and force settings. Nice controllers vary by product family, and programming one as if it were another is often why a Nice gate has been left running badly rather than repaired.',
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
      'BFT is an Italian manufacturer whose US range is mostly electromechanical — Deimos, Ares, Icaro, Phobos — ' +
      'with hydraulic models such as the Lux alongside. Its control boards and programming differ from the ' +
      'American operators most gate work is built around, and on the hydraulic units pressure, fluid condition ' +
      'and seal integrity are measurable things that separate a repair from a replacement quote.',
    commonFailures: [
      'Hydraulic seal failure and fluid loss on hydraulic models',
      'Pressure loss causing slow or incomplete travel',
      'Control board faults on QSC-D and MERAK boards',
      'Encoder and limit drift',
      'Photocell and safety-edge faults',
      'Ram and piston wear on high-cycle installs',
    ],
    models: ['Deimos BT', 'Deimos Ultra BT', 'Ares', 'Icaro', 'Phobos', 'Lux', 'Giotto', 'Moovi'],
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
      'GTO/PRO openers come from GTO Access Systems, the company that also built Mighty Mule, and the line is ' +
      'still sold today under Linear and Nice. We repair current and older units and can still source parts for most models.',
    whyDifferent:
      'Many of these are DC operators well into their second decade. Age alone is ' +
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
    models: ['PRO-SW2000XLS', 'PRO-SW3000XLS', 'PRO-SW4000XLS', 'SW-2000XL', 'SW-3000XL'],
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
