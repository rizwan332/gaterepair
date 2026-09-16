/**
 * FAAC model pages.
 *
 * Researched September 2026 from FAAC International installation manuals
 * (400, 402/455 D, 770 24V/E024U, 844/780D) and FAAC USA's current product
 * pages. Every spec below traces to one of those documents; anything that
 * could not be read cleanly or that sources disagree on is in `toConfirm`.
 *
 * Two facts shape this file and contradict older site copy:
 *  - Only the 400 and 402 here are hydraulic. The 770 is an electromechanical
 *    underground operator and the 844 is an electromechanical slide operator
 *    with an oil-bath clutch. Neither has a seal kit / pressure story.
 *  - The FAAC 750 is an in-ground hydraulic SWING operator, not a slide unit.
 *
 * No photo, project or video is confirmed to show any of these models, so the
 * evidence fields are empty. `faac-hydraulic-operator-rebuild` does not name a
 * model and is not attached.
 */

import type { ModelPage } from './types'

export const faacModels: ModelPage[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // FAAC 400
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: '400-repair',
    brandSlug: 'faac',
    model: '400',
    aliases: ['400 CBC', '400 CBAC', '400 SB', '400 SBS', '400 CBACR', '400 CBAC EG', '400 SB EG'],
    descriptor: 'hydraulic ram swing gate operator for heavy residential and commercial leaves',
    gateType: 'swing',
    duty: 'commercial',
    status: 'current',
    statusNote: "Listed on FAAC USA's swing gate page as a hydraulic piston operator (checked September 2026).",

    title: 'FAAC 400 Repair | Dallas–Fort Worth',
    metaDescription:
      'FAAC 400 hydraulic ram slow, stopping short or weeping oil? We service the bypass valves, release and 455 D board across Dallas–Fort Worth. Call 24/7.',
    h1: 'FAAC 400 Hydraulic Operator Repair in Dallas–Fort Worth',
    heroIntro:
      "Shield Gate Repair works on the FAAC 400 hydraulic ram — CBC, CBAC, SB and the long-stroke EG versions. The call we get on this operator is a leaf that has turned slow or stops short, and on a 400 that is usually the bypass valves, the release knob or the oil before it is ever the motor.",
    heroPoints: [
      "We check the 400's green OPEN and red CLOSE bypass screws under the release cover before anything is condemned.",
      'We confirm the 455 D force is programmed to 50 — the setting FAAC specifies for hydraulic operators.',
      'We check oil with the ram stood vertical, rear flange up, exactly as FAAC’s 400 manual describes.',
    ],

    identify: {
      body: [
        "The 400 is a long cylindrical hydraulic ram pinned between a bracket on your post and a bracket on the gate leaf, with a slotted protective cover over the piston rod. It is the largest of FAAC's surface-mounted swing rams: FAAC's manual gives an overall length of 40½ inches for the standard body and 50½ inches for the EG long-stroke body.",
        "The letters after the number matter more than the number. FAAC's manual covers the 400 CBC, CBAC, SB, SBS, CBACR, CBAC EG and SB EG. Per its specification table, the CBC locks hydraulically in closing, the CBAC, CBACR and CBAC EG lock in both opening and closing, and the SB, SBS and SB EG have no hydraulic lock at all and depend on an electric lock to hold the leaf. Knowing which one is on your gate tells us whether a leaf you can push by hand is a fault or simply an SB doing what it was built to do.",
        "The common mix-up is with FAAC's compact 402 and 422 rams. Those are roughly three feet long and slimmer. On the 400 the release is inside a keyed cover with a knob beneath it, rather than a triangular key turned on the underside as on the 402.",
      ],
      lookFor: [
        'A long round ram — about 40½ in overall (standard) or 50½ in (EG) — pinned between post and leaf',
        'The version letters after "400" on the operator label: CBC, CBAC, SB, SBS, CBACR or EG',
        'A keyed cap and cover; beneath it a release knob and two force screws with green OPEN and red CLOSE wording',
        'A vent (breather) screw with its own label on the body',
        'A separate control enclosure — FAAC pairs the 400 with the 455 D board, which has a two-digit display and F, + and – buttons',
      ],
    },

    overview: [
      {
        heading: 'An electric pump and a piston — no gears, no clutch plate',
        body: [
          'FAAC describes the 400 as an electric pump and a hydraulic piston that transmits drive to the gate leaf. A 1400 rpm motor turns a pump inside the oil tank, and oil pressure pushes the rod out or draws it back. There is no gearbox to strip and no chain to stretch, which is why a 400 that has lost force so rarely needs a motor.',
          'Force is not set on the board the way it is on a screw-drive operator. The 400 has two bypass screws: the OPEN screw (green wording) limits thrust while opening and the CLOSE screw (red wording) limits thrust while closing. Clockwise raises force, counter-clockwise lowers it. On a gate that opens outward with the ram mounted inside, FAAC swaps the roles — the OPEN screw governs closing and the CLOSE screw governs opening — and that single detail explains a lot of 400s that were "adjusted" in the wrong direction.',
        ],
      },
      {
        heading: 'The 455 D has to be told it is driving hydraulics',
        body: [
          "On FAAC's 455 D board, force is adjustable over 50 levels for each motor. FAAC's instruction for hydraulic operators such as the 400 is to program force at the maximum of 50, so the board delivers full power and the bypass valves do the limiting. If that value has been turned down, a healthy ram will feel weak and no amount of valve adjustment will fix it.",
          "FAAC's manual is also explicit that the 400 cannot use limit switches — only Gatecoders, which read the leaf's angle to set slowdown and stop points. Without a Gatecoder the board runs on learned times. That means a change in oil level or valve setting can change where the leaf stops, because the learned time runs out before the leaf reaches its stop.",
        ],
      },
      {
        heading: 'Hydraulic locking, the release knob and why an SB feels loose',
        body: [
          'Versions with hydraulic locking hold the leaf when the motor stops, so FAAC says they need no electric lock. Versions without it require an electric lock to keep the leaf mechanically locked. On an SB whose lock has failed, the leaf drifts in wind — a lock repair, not a ram repair.',
          'The release is part of the same valve circuit. Turning the release knob counter-clockwise about two full turns lets the leaf move by hand; turning it clockwise until it stops re-locks the hydraulics. FAAC lists a release that has not fully re-engaged as a cause of a motor that runs while the gate does not move.',
        ],
      },
      {
        heading: 'Standard and EG bodies are not interchangeable',
        body: [
          'Effective rod stroke is 10¼ inches on the standard 400 and 15 inches on the EG models, and FAAC publishes separate mounting-dimension tables for each. The geometry is sensitive: FAAC notes that smaller a and b dimensions give a faster leaf, and that letting a and b differ by more than about 1½ inches considerably varies speed through the swing.',
          'FAAC also requires the rod to stop short of its internal end, so the effective stroke is less than the maximum stroke, and it requires mechanical travel stops at the gate. A 400 that is mounted off its dimensions, or on a post that has moved, shows up as uneven speed long before anything inside it fails.',
        ],
      },
    ],

    specs: [
      { label: 'Drive', value: 'Electric pump and hydraulic piston' },
      { label: 'Versions (FAAC manual)', value: '400 CBC, CBAC, SB, SBS, CBACR, CBAC EG, SB EG' },
      {
        label: 'Hydraulic locking',
        value: 'CBC: closing · CBAC, CBACR, CBAC EG: opening and closing · SB, SBS, SB EG: none (electric lock required)',
      },
      { label: 'Effective rod stroke', value: '10¼ in (standard) · 15 in (EG)' },
      { label: 'Overall length', value: '40½ in (standard) · 50½ in (EG)' },
      { label: 'Power supply', value: '115 VAC ±10% or 230 VAC +6% −10%, 50/60 Hz' },
      { label: 'Electric motor', value: '1400 rpm, 4-pole' },
      { label: 'Winding thermal protection', value: '248°F' },
      { label: 'Ambient operating temperature', value: '−4°F to +131°F' },
      { label: 'Protection class', value: 'IP55' },
      { label: 'Oil', value: 'FAAC HP OIL' },
      { label: 'Opening time, 400 CBAC', value: '17 seconds (FAAC troubleshooting table)' },
      { label: 'Control board (FAAC manual)', value: '455 D — force programmed to 50 for hydraulic operators' },
      { label: 'Position sensing', value: 'Gatecoder only; limit switches cannot be used on the 400' },
      { label: 'UL 325 classes (FAAC 2003 class table)', value: 'Class I, II and III' },
    ],

    symptoms: [
      {
        symptom: 'The gate got slower over the months and now stops before it is fully open',
        causes:
          'Oil level down through seal wear or a breather leak; bypass screws backed off or set for the wrong opening direction; learned run time now shorter than the leaf needs; board force below 50.',
        whatWeDo:
          "We check the oil with the ram vertical and rear flange up, confirm force is at 50, then raise bypass pressure in small quarter-turn steps as FAAC's troubleshooting table advises. Once the leaf reaches its stop with force to spare, we re-learn the times.",
      },
      {
        symptom: 'The motor hums or runs but the leaf does not move',
        causes:
          'Release knob not fully turned back clockwise; motor turning the wrong way after rewiring; bypass set far too low; a failed thrust capacitor.',
        whatWeDo:
          'We re-seat the release knob, check motor direction on the 455 D terminals, test the capacitor and only then look at valve settings.',
      },
      {
        symptom: 'It jerks or shudders instead of moving smoothly',
        causes:
          'Vent screw never removed at installation — FAAC warns this causes erratic operation; air trapped in the piston; binding hinges; a gate leaf that flexes under the ram.',
        whatWeDo:
          'We check the vent screw, run complete cycles to purge air as FAAC recommends, and test the hinges with the ram released. If the leaf itself flexes, we tell you — FAAC’s answer is to stiffen the gate or use a slower operator.',
      },
      {
        symptom: 'There is oil on the ram or dripping near the breather screw',
        causes:
          'FAAC says a small initial leak at the breather is normal, and that a larger one can occur if the ram is not mounted perfectly horizontal. A leak that continues or grows points to seals.',
        whatWeDo:
          'We check the ram is level on its brackets, clean it and look for the true source. A persistent leak gets the 400 seal kit and fresh FAAC HP OIL.',
      },
      {
        symptom: 'The leaf slows down near the end and then just stops there',
        causes: "FAAC's table lists anti-crushing (bypass) adjustment as the cause when leaves stop at slowdown.",
        whatWeDo:
          'We raise bypass force carefully in the direction that stalls, confirm the leaf still stops on a firm obstruction, and re-learn slowdown points.',
      },
      {
        symptom: 'The speed changes through the swing — fast at one end, crawling at the other',
        causes:
          'FAAC attributes inconsistent speed to incorrect installation dimensions. A moved post or re-welded bracket changes the a and b dimensions.',
        whatWeDo:
          "We measure the bracket geometry against FAAC's standard or EG table and correct the mount rather than adjusting pressure to mask it.",
      },
      {
        symptom: 'When the gate is closed I can push it open by hand',
        causes:
          'An SB, SBS or SB EG version with a failed electric lock; a CBC that only locks in closing being pushed the other way; release knob partly open.',
        whatWeDo:
          'We identify the version first. On a no-lock version we repair the electric lock; on a locking version we check the release and the lock valve.',
      },
    ],

    components: [
      {
        part: 'Bypass valves (OPEN green / CLOSE red)',
        whatItDoes: 'Set the maximum thrust in each direction and act as the anti-crushing limit.',
        failureSigns: 'Leaf too weak to finish travel, or too forceful to stop on an obstruction.',
        verdict: 'adjust',
      },
      {
        part: 'Release knob and keyed locking cap',
        whatItDoes: 'Opens the oil path so the leaf moves by hand; the keyed cover protects the release and bypass screws.',
        failureSigns: 'Motor runs but leaf will not move; key or knob seized; cover will not lock.',
        verdict: 'replace-part',
      },
      {
        part: 'Oil and tank',
        whatItDoes: 'The tank holds the FAAC HP OIL the pump draws from; level is checked with the ram vertical.',
        failureSigns: 'Weak or slowing travel, air noise, drift in speed between cold and hot runs.',
        verdict: 'service',
      },
      {
        part: 'Piston seals (400 seal kit)',
        whatItDoes: 'Keep pressure inside the cylinder and oil off the rod.',
        failureSigns: 'Oil trail down the rod or cover, falling level, progressive loss of force.',
        verdict: 'repair',
      },
      {
        part: 'Vent (breather) screw',
        whatItDoes: 'Lets the tank breathe; FAAC requires it removed after installation.',
        failureSigns: 'Erratic, jerky movement if left in; oil at the vent if the ram is not level.',
        verdict: 'adjust',
      },
      {
        part: 'Thrust capacitor',
        whatItDoes: 'Starts and runs the single-phase motor — 25 µF on 115 V or 8 µF on 230 V per FAAC.',
        failureSigns: 'Motor hums without turning, or starts only when the leaf is nudged.',
        verdict: 'replace-part',
      },
      {
        part: '455 D control board',
        whatItDoes: 'Logic, run times, Gatecoder inputs, safety inputs and force output (set to 50 for hydraulics).',
        failureSigns: 'Dead display, blown F1 or F2 fuse, STOP or FSW LEDs out with no device tripped.',
        verdict: 'replace-part',
      },
      {
        part: 'Gatecoder (where fitted)',
        whatItDoes: 'Reports leaf angle so the board can slow and stop accurately and sense obstacles.',
        failureSigns: 'FCA/FCC LEDs not flashing while the leaf moves; stops in the wrong place.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'A 400 is built to be serviced. Oil, seals, the release assembly, bypass valves, capacitor and board are all separate parts in FAAC’s parts lists. Replacing the whole ram is justified when the cylinder or rod is physically damaged, or when the version on the gate was never right for the leaf.',
      repair: [
        'Loss of force with an intact rod — oil, seals and bypass adjustment first.',
        'Motor runs but the leaf will not move — release knob, capacitor and valve settings are all serviceable.',
        'Uneven speed — correct the mounting dimensions; the ram itself is usually fine.',
        'Board fault after a storm — the 455 D is replaced separately from the ram.',
      ],
      replace: [
        'Scored or bent piston rod, cracked tank or damaged cylinder.',
        'Wrong version for the gate — for example a no-lock SB on a leaf that needs to hold position without an electric lock, or a standard body where the geometry calls for the 15-inch EG stroke.',
        'A second ram on a double gate fails of age and the pair are mismatched; keeping both leaves on the same version keeps timing predictable.',
      ],
    },

    warranty: {
      manufacturer:
        "FAAC International's 400 installation manual states a limited warranty of 24 months from the date of invoice on FAAC gate operator systems it distributes. The same statement says the warranty extends only to wholesale customers buying through FAAC International's distribution channels and that FAAC International does not warrant its products to end consumers — owners are told to ask their selling dealer about that dealer's own warranty.",
      notes: [
        'Hydraulic oil is named in the warranty as a maintenance part that is not covered.',
        'Damage from lightning, electrical power surge, hail, flood, wind storm and improper installation is excluded.',
        'Warranty terms change over time; the manual that shipped with your unit and your installer’s invoice are what apply to your gate.',
      ],
    },

    dfw: [
      {
        heading: 'Summer heat and a 248°F winding cut-out',
        body: [
          "FAAC rates the 400 for ambient temperatures up to 131°F and protects the motor winding with a thermal cut-out at 248°F. On a busy estate or community entrance, a ram sitting in afternoon sun and cycling back to back can reach its thermal limit and pause — which looks like a dead operator and recovers once it cools.",
          'Heat also thins the oil. A 400 that is borderline on level or bypass setting often runs normally in the morning and falls short of its stop by late afternoon. That pattern points us at oil and valves, not at the board.',
        ],
      },
      {
        heading: 'Clay soil moves posts, and the 400 is geometry-sensitive',
        body: [
          "North Texas clay swells when wet and shrinks in drought, and a post that leans even slightly changes the 400's a and b dimensions. FAAC's own troubleshooting ties inconsistent speed to incorrect installation dimensions, and it requires travel stops at the gate — a moved post also moves where the leaf meets its stop.",
        ],
      },
      {
        heading: 'Lightning and the 455 D',
        body: [
          "FAAC's 400 manual tells installers to ground the operator, use a grounding rod if necessary and add a surge suppressor, because power surges and lightning damage the electronics. FAAC's warranty excludes surge and lightning damage, so after a spring storm the board is often the part at fault and the ram is untouched.",
        ],
      },
    ],

    process: [
      {
        step: 'Identify the exact 400 version',
        body: 'CBC, CBAC, SB, SBS, CBACR or EG decides whether the leaf should lock hydraulically, which mounting table applies and what "normal" looks like.',
      },
      {
        step: 'Release the ram and swing the leaf by hand',
        body: 'Knob counter-clockwise about two turns, then we check hinges, stops and free movement before any electrical testing. A binding gate makes a healthy ram look weak.',
      },
      {
        step: 'Check oil, vent screw and seals',
        body: 'Ram vertical, rear flange up, level checked as FAAC specifies. We look for the source of any oil before topping up.',
      },
      {
        step: 'Read the 455 D',
        body: 'Force at 50, STOP and both FSW LEDs lit at rest, OP_A lighting on command. A short across the open terminals separates a remote or keypad fault from an operator fault.',
      },
      {
        step: 'Set bypass force and re-learn',
        body: 'OPEN and CLOSE screws set for the actual swing direction, leaf tested against an obstruction, then run times or Gatecoder learning repeated. You get the diagnosis and a quote before parts are fitted.',
      },
    ],

    faqs: [
      {
        q: 'How do I release a FAAC 400 to move the gate by hand?',
        a: "Per FAAC's manual: lift the protective plug, insert the key and turn it 90° clockwise to open the cover, then turn the release knob counter-clockwise about two full turns. To restore operation, cut power first, turn the knob clockwise until it stops, close the cover and turn the key back 90°.",
      },
      {
        q: 'Why does the board need to be set to force 50 on a 400?',
        a: "FAAC's instruction for hydraulic operators on the 455 D is to program force at the maximum of 50. The bypass valves on the ram limit thrust; a reduced board setting just starves a healthy ram of power.",
      },
      {
        q: 'What oil goes in a FAAC 400?',
        a: 'The 400 manual specifies FAAC HP OIL and lists it in the 400 parts list. We do not top up with an unknown fluid, because mixed oils make the next diagnosis harder.',
      },
      {
        q: 'Is a little oil around the breather screw a problem?',
        a: 'FAAC says a small initial leak at the breather is normal and that a larger leak can come from a ram that is not perfectly horizontal. If it keeps going or gets worse, it needs looking at — usually seals.',
      },
      {
        q: 'My 400 is an SB. Why can the gate be pushed when it is shut?',
        a: 'SB versions have no hydraulic lock; FAAC requires an electric lock to hold the leaf. If that lock has failed or lost power, the leaf will move. The repair is the lock, not the ram.',
      },
      {
        q: 'Do you carry parts for the FAAC 400?',
        a: 'We carry seal kits, hydraulic fluid and the common control boards. Less common 400 parts, such as a release assembly or a Gatecoder, are ordered — and we tell you that upfront before booking the repair.',
      },
    ],

    relatedModels: ['faac/402-repair', 'faac/770-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'commercial-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      {
        label: 'FAAC International — 400 Hydraulic Swing Gate Operator manual with 455 D board (PDF, distributor-hosted)',
        url: 'http://www.faacgateopeners.com/FAAC-Manuals/FAAC-400-swing-gate-operator.pdf',
      },
      {
        label: 'FAAC International — 400 Hydraulic Swing Gate Operator manual (PDF, Fast Gate Openers copy)',
        url: 'https://fastgateopeners.com/store/media/pdf/400-manual.pdf',
      },
      {
        label: 'FAAC International — 402 Operator and 455 D manual, Nov 2003 (UL class table)',
        url: 'http://www.faacgateopeners.com/FAAC-Manuals/FAAC-402-swing-gate-operator.pdf',
      },
      { label: 'FAAC USA — Swing gate automation lineup', url: 'https://faacusa.com/gates-garage-automations/swing-gates/' },
    ],
    toConfirm: [
      "Maximum leaf length and weight per 400 version: the manual's Table 1 did not extract cleanly. FAAC USA's page says leaves up to 23 ft; distributors quote 16 ft / 1,300 lb for the CBAC. Not stated on the page until confirmed.",
      'Thrust, pump flow and cycles-per-hour figures per version (same garbled table).',
      'Whether current 400 kits still ship with the 455 D or a newer FAAC board.',
      'UL 325 classes: taken from the 2003 FAAC class table printed in the 402 manual; confirm for current 400 production.',
      'Oil capacity of the 400 (not found in the manual text).',
      'Current FAAC International warranty term: a separate FAAC International limited-warranty document (source URL not confirmed) lists 3 years for FAAC gate operators and 2 years for control boards; the manuals say 24 months.',
      'Location of the release cap on the housing — described generically on the page.',
    ],
    indexable: true,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FAAC 402
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: '402-repair',
    brandSlug: 'faac',
    model: '402',
    aliases: ['402 CBC', '402 CBA'],
    descriptor: 'compact hydraulic swing gate operator for light-duty residential leaves',
    gateType: 'swing',
    duty: 'residential',
    status: 'current',
    statusNote: "Listed on FAAC USA's swing gate page as a hydraulic operator for small but heavy leaves (checked September 2026).",

    title: 'FAAC 402 Repair | Dallas–Fort Worth',
    metaDescription:
      'FAAC 402 compact hydraulic operator weak, leaking or not closing fully? Shield Gate Repair checks oil, bypass valves and the release key across DFW. Call now.',
    h1: 'FAAC 402 Compact Hydraulic Operator Repair in Dallas–Fort Worth',
    heroIntro:
      "Yes, we repair the FAAC 402 — the compact three-foot hydraulic ram on so many residential swing gates. Most 402 calls are a leaf that no longer closes all the way or pushes weakly, and on this operator that is usually oil level, the red and green bypass screws or the triangular release key rather than a failed unit.",
    heroPoints: [
      'We check oil level the way FAAC specifies for the 402: ram off the leaf, rod retracted, rear flange removed.',
      "We set the red and green bypass screws so the leaf still stops against FAAC's 33 lb force standard.",
      'We check the rod is not bottoming out — FAAC warns that seriously damages the 402.',
    ],

    identify: {
      body: [
        "The 402 is FAAC's compact hydraulic ram: a square-section aluminum body about 3½ by 3½ inches and 36 inches long, weighing just over 14 pounds, according to FAAC's 402 manual. The motor, pump, valve assembly and cylinder are all housed in one anodized aluminum oil reservoir, so there is no separate pump box.",
        'Two features identify it quickly. The red and green pressure-adjusting screws sit on top of the operator and are covered by a small nameplate after setup, and the manual release is a triangular key turned on the underside. FAAC documents a CBC version that locks with the piston extended and a CBA version that locks with the piston retracted.',
        "It is easy to confuse with the FAAC 422, which is also compact and hydraulic. FAAC's 2003 manual gives the standard 422 a 38⅞-inch length and a taller 3½ by 4½-inch section, with its bypass valves and release beneath a black plastic locking cap. It is also often mistaken for the much longer FAAC 400.",
      ],
      lookFor: [
        'A slim square-section ram roughly 36 in long between post bracket and leaf bracket',
        'A nameplate screwed over two pressure screws, red and green, on the top of the body',
        'A triangular release fitting on the underside',
        'An oil loading cap and a small vent screw at the valve body',
        'A 455 D board in the control enclosure (older installs may have a FAAC 450 MPS panel)',
      ],
    },

    overview: [
      {
        heading: 'Light-duty by design',
        body: [
          "FAAC calls the 402 an automatic, light-duty gate operator for a leaf up to 10 feet long and 900 pounds, with a maximum duty cycle of 50% motor run time. FAAC's 2003 UL class table lists the 402 under Class I, residential — home use or a small building with limited public access — and not under the commercial classes.",
          'FAAC also states the 402 is not recommended for solid gates. A solid leaf catches wind, and a compact ram fighting wind load is a common reason a 402 seems to lose force on gusty days.',
        ],
      },
      {
        heading: 'Two bypass valves decide how hard it pushes',
        body: [
          "The two bypass valves on top of the operator control the force applied to the leaf. FAAC's standard, as printed in the 402 manual, is that the leaf should stop if it meets a force greater than 33 pounds. The valves are not preset at the factory, and FAAC warns an unadjusted 402 may move a leaf with enough force to endanger people and damage the gate.",
          'On the 455 D board, FAAC requires force programmed to the maximum of 50 for all hydraulic operators. The valves, not the board, are where a 402 is tuned.',
        ],
      },
      {
        heading: 'One hydraulic lock, and it is not a security lock',
        body: [
          'All 402 models in the 2003 manual have one hydraulic lock: CBC locks with the piston extended, CBA with it retracted. FAAC describes the hydraulic lock as a service device rather than a security device, and recommends an additional external lock if the leaf is 10 feet or longer, the site needs tight security or suffers vandalism, the gate sees strong or gusty wind, or there is an open-hold-open device.',
          'That matters for diagnosis. A 402 leaf that can be forced a little in the unlocked direction is behaving as designed; a leaf that drifts in its locking direction is not.',
        ],
      },
      {
        heading: 'The failures FAAC warns about at installation',
        body: [
          'Three installation details cause most long-term 402 trouble. The vent screw on the bottom of the valve body must be removed with a 3 mm hex key — FAAC warns that leaving it in can cause erratic operation or blown seals. The piston must never bottom out in either direction, which FAAC says seriously damages the operator. And every leaf needs fixed positive stops in both the open and closed positions, so the gate reaches its stop before the piston does.',
          'The mounting dimensions are tight: FAAC gives A and B of 4½ inches each and C of 35½ inches for an inward-swinging gate, and C of 26½ inches for outward swing. A bracket that has shifted can make a full 90° swing impossible, which FAAC lists as a cause of a gate that does not open completely.',
        ],
      },
    ],

    specs: [
      { label: 'Drive', value: 'Electro-hydraulic: motor, pump, valves and cylinder in one anodized aluminum oil reservoir' },
      { label: 'Maximum leaf', value: '10 ft (3 m) and 900 lb (410 kg) per leaf' },
      { label: 'Dimensions / weight', value: '36 in long, 3½ × 3½ in section, 14⅓ lb' },
      { label: '90° opening time', value: '12 seconds' },
      { label: 'Thrust and traction force', value: '0–1,100 lb' },
      { label: 'Maximum duty cycle', value: '50% motor run time' },
      { label: 'Power', value: '115 VAC +10% or 230 VAC +6/−10%, 50–60 Hz' },
      { label: 'Current draw', value: '2.4 A at 115 VAC · 1.2 A at 220 VAC' },
      { label: 'Motor', value: '1400 rpm, single-phase, bi-directional; thermal cut-out at 212°F' },
      { label: 'Operating temperature', value: '−4°F to 131°F' },
      { label: 'Oil', value: '1½ qt (1.4 L); FAAC XD 220 or Shell Tellus 15' },
      { label: 'Hydraulic lock', value: 'One: CBC locks piston extended, CBA locks piston retracted' },
      { label: 'Control board (2003 manual)', value: '455 D, force set to 50 for hydraulic operators' },
      { label: 'UL 325 class (FAAC 2003 table)', value: 'Class I — residential' },
    ],

    symptoms: [
      {
        symptom: 'The gate stops a few inches short of closing',
        causes:
          'Run time on the board ends before the leaf arrives; bypass pressure too weak so the leaf slips; rear bracket dimensions off so a full swing is impossible; a hinge or obstruction.',
        whatWeDo:
          "We follow FAAC's order: clear mechanical obstacles, check the bracket dimensions, then either lengthen the programmed time or raise bypass pressure — never enough to defeat the 33 lb stopping standard.",
      },
      {
        symptom: 'It opens fine but will not close at all',
        causes:
          'A photo-eye or other reversing device held open, a missing jumper where no device is fitted, operator wired incorrectly to the board, or closing-side bypass set too low.',
        whatWeDo:
          'We read the FSWOP and FSWCL LEDs on the 455 D, test the reversing devices, then check the closing bypass screw.',
      },
      {
        symptom: 'Oil on the ram, the post or the driveway under it',
        causes:
          'Seal wear, an overfilled operator bleeding from the vent hole, or seals damaged by a vent screw left in or a piston that has been bottoming out.',
        whatWeDo:
          'We check level against the ¾-inch mark FAAC specifies and look at why seals failed before fitting the 402 seal kit — otherwise the new seals fail the same way.',
      },
      {
        symptom: 'The gate slams or bangs into the post at the end of travel',
        causes: 'Piston reaching the end of its stroke before the gate reaches a positive stop, or no slowdown learned on the board.',
        whatWeDo:
          'We fit or reset positive stops so the gate stops first, then re-learn times with slowdown. Continued bottoming damages the 402.',
      },
      {
        symptom: 'The remote does nothing, but the wall button works',
        causes: 'Transmitter battery or code mismatch, receiver wiring, antenna or a blown fuse.',
        whatWeDo:
          "As FAAC's troubleshooting suggests, we test with a push button across the activating terminals to split a receiver fault from an operator fault.",
      },
      {
        symptom: 'On windy days the leaf moves or will not hold closed',
        causes:
          "The single hydraulic lock only holds one way, FAAC does not recommend the 402 on solid gates, and FAAC recommends an external lock where wind is strong or gusty.",
        whatWeDo:
          'We confirm CBC or CBA and which way it locks, check the bypass settings, and recommend an external lock where FAAC does.',
      },
    ],

    components: [
      {
        part: 'Red and green bypass valves',
        whatItDoes: 'Limit hydraulic force in each direction; covered by a nameplate once set.',
        failureSigns: 'Leaf slips short of travel, or pushes harder than FAAC’s 33 lb stopping standard allows.',
        verdict: 'adjust',
      },
      {
        part: 'Triangular-key manual release',
        whatItDoes: 'Disengages the hydraulic system so the leaf moves slowly by hand.',
        failureSigns: 'Key will not turn, leaf stays free after re-engaging, oil weeping at the release.',
        verdict: 'replace-part',
      },
      {
        part: 'Oil (FAAC XD 220 or Shell Tellus 15)',
        whatItDoes: 'Transmits force and lubricates the pump; 1½ quarts per operator.',
        failureSigns: 'Slower, weaker travel; FAAC schedules oil changes every 4 years in light use and every 2 years in heavy use.',
        verdict: 'service',
      },
      {
        part: 'Seal kit and piston rod packing',
        whatItDoes: 'Seal the piston and rod so pressure and oil stay inside.',
        failureSigns: 'Oil film on the rod, dropping level, loss of force.',
        verdict: 'repair',
      },
      {
        part: 'Vent screw',
        whatItDoes: 'Must be removed after mounting so the reservoir can breathe.',
        failureSigns: 'Erratic travel or blown seals if left in; oil at the vent if overfilled.',
        verdict: 'adjust',
      },
      {
        part: 'Lobe pump and 1400 rpm motor',
        whatItDoes: 'Generate the oil flow; the motor shuts off at 212°F to protect itself.',
        failureSigns: 'Motor silent with power present, or repeated thermal shutdowns in heavy use.',
        verdict: 'replace-part',
      },
      {
        part: '455 D control panel',
        whatItDoes: 'Logic, learned run times, safety inputs, receiver port and the motor output.',
        failureSigns: 'No LEDs, STOP LED out, fuses F1 or F2 open, display not responding to F, + and –.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'On a 402 that is correctly sized for its leaf, repair is almost always right: oil, seals, bypass setting, release and board are all serviceable. The honest exception is a 402 on a gate it was never rated for — a leaf over 10 ft or 900 lb, a solid panel in open wind, or a high-traffic entrance — where it will keep failing however well it is repaired.',
      repair: [
        'Short or weak travel on a gate within 10 ft and 900 lb — adjust bypass, check oil and re-learn.',
        'Leaking at the rod — seal kit, once the cause (vent screw, bottoming, overfill) is fixed.',
        'Release key not engaging — the release assembly is a listed part.',
        'Board or receiver fault — replaced without touching the ram.',
      ],
      replace: [
        'Leaf heavier or longer than FAAC’s 900 lb / 10 ft rating — the fix is an operator sized for the gate, such as FAAC’s larger 400 ram if the leaf is within its rating.',
        'Busy multi-home or commercial entrance — FAAC classes the 402 as Class I residential only.',
        'Cylinder or rod physically damaged, often after the piston has repeatedly bottomed out.',
      ],
    },

    warranty: {
      manufacturer:
        "FAAC International's 402 manual states a limited warranty of 24 months from the date of invoice. It applies only to wholesale customers buying through FAAC International's normal distribution channels; FAAC International does not warrant its products to end consumers, who are directed to their selling dealer for that dealer's warranty.",
      notes: [
        'Hydraulic oil and filters are listed as maintenance parts that the warranty does not cover.',
        'Lightning, power surge, hail, flood, wind storm and improper installation are excluded.',
        'Your installer’s invoice date starts any warranty period; ask them what they offer beyond FAAC’s statement.',
      ],
    },

    dfw: [
      {
        heading: 'A light-duty ram in long Texas summers',
        body: [
          "The 402's motor shuts itself off at 212°F and FAAC gives it a 50% maximum duty cycle. A 402 on a busy family gate, in full afternoon sun, cycling several times in quick succession can reach that cut-out and stop until it cools. If your gate quits only on hot, busy afternoons, that is the first thing we check.",
          "FAAC's maintenance schedule has two tracks. Lightly used operators get oil and pressure checks every 12 months and an oil change every 4 years; heavily used ones get checks every 6 months and oil every 2 years. Heat is hard on oil, so we lean toward the shorter schedule for a 402 working through DFW summers.",
        ],
      },
      {
        heading: 'Storm winds and a single hydraulic lock',
        body: [
          'FAAC recommends an external lock on a 402 wherever wind is strong or gusty, and advises against solid gates altogether. Spring storm fronts across North Texas put exactly that load on a leaf. A privacy-panel gate on a 402 that "loses pressure" in storms usually needs a lock, not a rebuild.',
        ],
      },
      {
        heading: 'Moving posts and tight mounting dimensions',
        body: [
          "With A and B dimensions of just 4½ inches, the 402 has little tolerance for a post that has shifted in expansive clay. A leaning post can stop the gate short of 90° or let the piston bottom out before the leaf meets its stop — the two installation faults FAAC warns about most.",
        ],
      },
    ],

    process: [
      {
        step: 'Confirm it is a 402, and which lock version',
        body: 'Section, length and the top-mounted red and green screws separate it from a 422 or 400; CBC or CBA tells us which way it should hold.',
      },
      {
        step: 'Disengage with the triangular key and swing the leaf',
        body: 'We free the hydraulics and move the gate through its full travel by hand, checking hinges, positive stops and whether the piston would bottom out.',
      },
      {
        step: 'Take the ram off to check oil properly',
        body: 'FAAC’s method is rod fully retracted and pointing down, rear flange removed, level about ¾ inch below the top of the casing. We check the vent screw and seals at the same time.',
      },
      {
        step: 'Set pressure, then the board',
        body: 'Bypass valves set so the leaf finishes travel yet stops against resistance; 455 D force confirmed at 50; run times re-learned with slowdown.',
      },
      {
        step: 'Quote, repair and test',
        body: 'You approve the price before work. We finish by testing reversing devices and the release, and refit the nameplate over the pressure screws.',
      },
    ],

    faqs: [
      {
        q: 'How do I open a FAAC 402 by hand in a power cut?',
        a: "Fit the triangular key to the release on the underside of the ram and turn it counter-clockwise to disengage the hydraulics — FAAC's manual text says one full turn. Move the leaf slowly, then turn the key clockwise one full turn to re-engage the hydraulics.",
      },
      {
        q: 'What is the weight limit for a FAAC 402?',
        a: "FAAC's 402 manual rates it for a leaf up to 10 feet long and 900 pounds, and says it is not recommended for solid gates.",
      },
      {
        q: 'How often should a 402 have its oil changed?',
        a: 'FAAC recommends changing oil every 4 years for light use and every 2 years for heavy use, with oil and pressure checks every 12 or 6 months respectively.',
      },
      {
        q: 'Is a FAAC 402 the same as a 422?',
        a: 'No. Both are compact hydraulic rams, but FAAC gives the standard 422 a longer 38⅞-inch body, a taller section and its bypass valves under a locking cap. Seal kits and some parts are specific to each, so we identify the model before ordering anything.',
      },
      {
        q: 'Can a 402 be used on a gated community entrance?',
        a: "FAAC's UL class table lists the 402 as Class I residential only, with a 50% duty cycle. For a busy shared entrance it is the wrong operator, and we will say so rather than keep repairing it.",
      },
      {
        q: 'Do you stock 402 parts?',
        a: 'Seal kits, hydraulic fluid and common control boards are carried. A release assembly, pump or motor for a 402 is ordered, and we tell you that when we quote.',
      },
    ],

    relatedModels: ['faac/400-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      {
        label: 'FAAC International — 402 Operator and 455 D Control Panel installation manual, Nov 2003 (PDF, distributor-hosted)',
        url: 'http://www.faacgateopeners.com/FAAC-Manuals/FAAC-402-swing-gate-operator.pdf',
      },
      {
        label: 'FAAC International — 422 Operator and 455 D Control Panel installation manual, Dec 2003 (PDF, for 422 comparison)',
        url: 'http://www.faacgateopeners.com/FAAC-Manuals/FAAC-422-swing-gate-operator.pdf',
      },
      { label: 'FAAC USA — Swing gate automation lineup', url: 'https://faacusa.com/gates-garage-automations/swing-gates/' },
    ],
    toConfirm: [
      'Release turns: the 2003 manual text says one full turn counter-clockwise, but its Figure 3 caption says ½ turn. The page says "one full turn" attributed to the text.',
      'Oil type conflict inside the 2003 manual: technical data says FAAC XD 220 or Shell Tellus 15; the parts list includes "1 Qt. Monolec Oil". Confirm the oil for current 402s.',
      "Current version letters: FAAC's product catalog reportedly offers 402 CBC, SB (no lock) and SBS; the 2003 manual says all 402s have one lock and lists CBC/CBA. Only CBC and CBA are used as aliases.",
      'Whether the specs in the 2003 manual (weight, current draw, 50% duty cycle) still apply to current production.',
      'Which control board current 402 kits ship with in the US (455 D in 2003; older installs may have 450 MPS or 452 MPS).',
      'Current FAAC International warranty term (manual states 24 months; another FAAC International warranty document lists 3 years for gate operators — source not confirmed).',
    ],
    indexable: true,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FAAC 770 (24V underground)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: '770-repair',
    brandSlug: 'faac',
    model: '770',
    aliases: ['770 24V'],
    descriptor: 'underground 24 VDC electromechanical swing gate operator',
    gateType: 'underground-swing',
    duty: 'residential',
    status: 'discontinued',
    statusNote:
      "FAAC USA's current swing lineup lists the 770N 24V underground operator rather than the 770 24V. Whether the 770N fits an existing 770 foundation box is not confirmed from FAAC documentation.",

    title: 'FAAC 770 Underground Operator Repair | DFW',
    metaDescription:
      'FAAC 770 underground gate operator flashing an error or water in the box? We repair the 24V motor, release levers and E024U board across Dallas–Fort Worth.',
    h1: 'FAAC 770 Underground Gate Operator Repair in Dallas–Fort Worth',
    heroIntro:
      "Shield Gate Repair works on the FAAC 770 24V — the operator buried in a foundation box under the hinge of your gate. It is electromechanical, not hydraulic, and the calls we get are usually a flashing error LED on the E024U board, water and silt in the foundation box, or a release lever that will not re-lock.",
    heroPoints: [
      'We count the E024U error-LED flashes first — FAAC assigns a specific fault to each count.',
      'We open the box lid and check the drain, the pivot and the levers before blaming the motor.',
      'We check the release has re-engaged the locking bracket — FAAC’s first suggestion for error 8.',
    ],

    identify: {
      body: [
        "If you cannot see an operator on the gate at all, look down. The 770 sits in a foundation box set in concrete directly beneath the gate's hinge line, with a flat cover plate. The leaf rests in a U-shaped guide bracket on a pivot above the box, and a crank and connecting rod inside turn that pivot. Nothing is mounted on the leaf itself, which is the point of the design.",
        "The 770 is electromechanical. FAAC's manual describes it as irreversible, meaning the gearing holds the leaf when stopped without an electric lock. Anyone who quotes a seal kit or hydraulic fluid for a 770 has not opened it. This is the most common confusion on FAAC underground gates, because FAAC also makes hydraulic underground operators such as the 750 and the S800H.",
        "The 770 24V pairs with the E024U control board, which FAAC's manual shows on a panel in a 16 × 14 inch enclosure with its own power supply and backup-battery connector. FAAC's current lineup lists the 770N, a newer underground electromechanical model, so a 770 that is not a 770N is an older installation.",
      ],
      lookFor: [
        'No operator on the leaf or post — a box cover plate at ground level under the hinge',
        'A key-operated release lock on the support bracket, reachable from inside or outside the gate',
        'Leaf sitting in a U-shaped guide bracket on a greased pivot and ball, rather than on a bottom hinge',
        'A control enclosure with an E024U board: rows of numbered LEDs, trimmers and a SETUP button',
        'Two conduits from the box — one for the cable, one for drainage',
      ],
    },

    overview: [
      {
        heading: 'A 24 V gearmotor, levers and a pivot',
        body: [
          "The operator bolts to studs inside the foundation box. Its pinion drives a crank and connecting rod, which turn the support bracket the gate stands in. FAAC's manual gives 24 VDC, 70 W, about 6° per second, and a maximum opening of 110° — extendable to 140° or 180° with optional kits that change the linkage.",
          "Because it is electromechanical, the 770's weak points are mechanical and electrical rather than hydraulic: the lever pivots and pinion that FAAC says must stay well lubricated, the release lock engaging the locking bracket, the motor, the encoder where fitted, and the board.",
        ],
      },
      {
        heading: 'The leaf-weight table is strict',
        body: [
          "FAAC does not give the 770 a single weight rating. Its manual sets the limit by leaf length: 1,100 lb at 6 ft, 620 lb at 7 ft, 440 lb at 8 ft, 420 lb at 10 ft and 400 lb at 11½ ft. A long, heavy iron leaf on a 770 works the gearing hard, and obstacle alarms on a gate like that are often the board correctly reporting overload.",
          'The gate also has to be sound: FAAC calls for a strong rigid frame, smooth movement with no stiff points, correct ground clearance and mechanical travel stops. Optional adjustable positive stops can be installed inside the load-bearing box.',
        ],
      },
      {
        heading: 'Reading the E024U: error flashes and setup',
        body: [
          "The E024U's ERROR LED flashes a count for one fault at a time, in priority order. FAAC's table: 1 obstacle detected; 2 board in sleep mode, check AC power; 3 motor 1 failure; 4 motor 2 failure; 5 encoder broken or wiring error; 6 fail-safe photocell test failed; 7 board thermal protection; 8 maximum run time of 10 minutes reached without finding the positive stop.",
          'After an obstacle the board reverses the gate. On a second consecutive obstacle it stops, sounds the alarm output and ignores commands until the STOP input is opened or power is cycled. A SETUP LED blinking slowly means the board needs its time-learning run, which FAAC says should start with the leaves at mid position.',
        ],
      },
      {
        heading: 'Board settings that change behavior',
        body: [
          'Trimmers set force for each motor, shared speed, obstacle sensitivity, pause time and a 0–15 second closing delay between leaves. DS2 switches select the operator type; the 770 shares its setting with the FAAC 415 and 390, so a board moved from another gate may be set for the wrong operator.',
          'With a backup battery connected, one DS1 option opens the gate a minute after a power failure and holds it open. If your gate sits open after an outage, that may be a setting rather than a fault.',
        ],
      },
    ],

    specs: [
      { label: 'Drive', value: 'Electromechanical, irreversible (no electric lock required)' },
      { label: 'Power supply / power / current', value: '24 VDC · 70 W · 3 A' },
      { label: 'Maximum torque', value: '245 lbf·ft' },
      { label: 'Angular speed', value: '6° per second' },
      { label: 'Maximum opening', value: '110° standard; 140° and 180° with optional kits' },
      {
        label: 'Leaf limits (length / weight)',
        value: '6 ft / 1,100 lb · 7 ft / 620 lb · 8 ft / 440 lb · 10 ft / 420 lb · 11½ ft / 400 lb',
      },
      { label: 'Cycles per hour at 68°F', value: 'About 100' },
      { label: 'Class of operation', value: 'Residential' },
      { label: 'Protection class', value: 'IP67' },
      { label: 'Operator weight / size', value: '26.5 lb · 14¼ × 6 × 5½ in' },
      { label: 'Operating temperature', value: '−4°F to +131°F' },
      { label: 'Control board', value: 'E024U: 115 V 60 Hz input, 24 V backup battery connector, 6.3 A timed fuse on the power supply' },
      { label: 'Listings on manual cover', value: 'UL325 – UL991' },
    ],

    symptoms: [
      {
        symptom: 'Nothing moves and a red LED keeps flashing on the board',
        causes:
          "The E024U is reporting a fault by flash count — from an obstacle (1) or no AC power (2) through motor failure (3, 4), encoder (5), photocell fail-safe (6), overheating (7) or no positive stop found (8).",
        whatWeDo:
          'We count the flashes, clear the fault FAAC names, and fix the next one if the LED moves down the priority list.',
      },
      {
        symptom: 'The gate reversed, then stopped dead and the remote is ignored',
        causes:
          'Two consecutive obstacle detections, which locks out commands until STOP is opened or power is cycled. The "obstacle" is often a stiff pivot, debris in the box or a heavy leaf.',
        whatWeDo:
          'We reset the board, then find what the gate hit — clearing the box and freeing the pivot rather than turning sensitivity down to hide it.',
      },
      {
        symptom: 'After a storm the cover is full of water or mud',
        causes:
          "FAAC's installation calls for a separate conduit draining rainwater from the box. When that drain clogs or was never connected, the box holds water and silt around the levers.",
        whatWeDo:
          'We pump and clean the box, clear or restore the drain, and check the release lock, pivot and wiring for corrosion.',
      },
      {
        symptom: 'I released it by hand and now it will not lock back in',
        causes:
          'The lever was not pushed fully home, the key not turned away from the post, or the leaf not moved far enough for the lock to engage the locking bracket; worn or unlubricated lock.',
        whatWeDo:
          "We follow FAAC's re-lock sequence, lubricate the lock engagement and replace the release assembly if it no longer catches.",
      },
      {
        symptom: 'The leaf sags, rubs the drive or swings out of line',
        causes:
          'The pivot center is no longer aligned with the swing axis, the box has settled, or the top hinge has moved.',
        whatWeDo:
          'We check pivot alignment and top-hinge position; a settled box can mean resetting it in concrete.',
      },
      {
        symptom: 'It opens by itself after a power cut and stays open',
        causes: 'The E024U option for automatic opening on power failure is switched on with a backup battery fitted.',
        whatWeDo: 'We explain the setting and change it if you prefer the gate to stay closed on battery.',
      },
      {
        symptom: 'The gate runs for ages and never seems to finish',
        causes: 'Error 8 — the board did not find a positive stop within 10 minutes, often because the release is disengaged or the stop is missing.',
        whatWeDo: 'We check the release first, then the mechanical stops, then redo the setup run.',
      },
    ],

    components: [
      {
        part: 'Foundation (load-bearing) box and drain',
        whatItDoes: 'Holds the operator and pivot in concrete; a second conduit drains rainwater.',
        failureSigns: 'Standing water, silt, settling or a box that has tilted.',
        verdict: 'service',
      },
      {
        part: '770 24 V gearmotor',
        whatItDoes: 'Drives the pinion; irreversible gearing holds the leaf closed.',
        failureSigns: 'Error flash 3 or 4, motor silent with 24 V present, grinding in the gearbox.',
        verdict: 'replace-part',
      },
      {
        part: 'Crank, connecting rod and pinion',
        whatItDoes: 'Convert the pinion rotation into leaf rotation.',
        failureSigns: 'Clunking, play at the leaf, stiff movement — FAAC calls for these pivots to be kept lubricated.',
        verdict: 'service',
      },
      {
        part: 'Support bracket, pivot and ball',
        whatItDoes: 'Carries the leaf weight; greased through the lubrication bore.',
        failureSigns: 'Squeal, stiff swing, repeat obstacle detection, leaf out of alignment.',
        verdict: 'service',
      },
      {
        part: 'Key release and locking bracket',
        whatItDoes: 'Frees the leaf from inside or outside; re-engages the drive when the leaf is moved back.',
        failureSigns: 'Key seized, lever will not stay home, leaf free-wheels after re-locking.',
        verdict: 'repair',
      },
      {
        part: 'E024U control board',
        whatItDoes: 'Logic, force, speed and obstacle sensitivity trimmers, battery charging and fault display.',
        failureSigns: 'No +24 LED, ERROR LED lit steady (board malfunction), dead after lightning.',
        verdict: 'replace-part',
      },
      {
        part: 'Switching power supply and 6.3 A fuse',
        whatItDoes: 'Converts 115 V to 36 VDC for the board; the fuse is the only replaceable fuse.',
        failureSigns: 'Board completely dark with AC present; error 2 (sleep) with no outage.',
        verdict: 'replace-part',
      },
      {
        part: 'Backup battery',
        whatItDoes: 'Runs the gate during blackouts; charging can be disabled with jumper J24.',
        failureSigns: 'Gate dead in outages, or battery LED never showing charge.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'Most 770 faults are the box, the levers, the release or the board, and all of those are repairable without disturbing the concrete. Replacement becomes the sensible conversation when the gearmotor itself fails and a new 770 24V motor is not available, or when the foundation box has moved — at which point the choice is between resetting the box and moving to a current FAAC underground model.',
      repair: [
        'Error-code faults traced to photocells, AC supply, encoder wiring or a missing stop.',
        'Water, silt or a clogged drain — clean, dry and restore drainage.',
        'Stiff pivot or levers — lubricate and replace worn pins.',
        'Release lock not catching — service or replace the release assembly.',
        'Board or power-supply failure after a surge.',
      ],
      replace: [
        'Gearmotor failed and a replacement 770 24V motor cannot be sourced — we will confirm availability before quoting.',
        'Foundation box settled or cracked, so the pivot no longer aligns with the swing axis.',
        'A leaf heavier than the 770 table allows for its length; the gate needs a heavier-duty operator or a lighter leaf.',
      ],
    },

    warranty: {
      manufacturer:
        "The FAAC International 770 24V manual (Rev. 02, June 2012) states a limited warranty of 24 months from the date of invoice for operators it distributes. It extends only to wholesale customers buying through FAAC International's distribution channels; FAAC International states it does not warrant its products to end consumers, who should ask their selling dealer about that dealer's warranty.",
      notes: [
        'Flood, lightning, electrical power surge, hail and improper installation are named exclusions — relevant for an operator installed below ground.',
        'A 770 installed around or before 2012 is very likely outside any manufacturer warranty period.',
        'Ask your installer for the invoice; the warranty runs from that date, not from the date of a fault.',
      ],
    },

    dfw: [
      {
        heading: 'Heavy spring rain and a box in the ground',
        body: [
          "The 770 operator itself is rated IP67, but FAAC still requires a drain conduit from the foundation box to the nearest drain. North Texas spring storms dump a lot of water fast, and a box on clay with a blocked or missing drain fills and holds it. The levers, pivot and release lock then sit in wet silt, which is where most 770 corrosion and stiffness starts.",
          'After a big storm, lift the cover and look. If water is standing in the box, the drain is the repair — replacing the motor first only buys a second failure.',
        ],
      },
      {
        heading: 'Expansive clay and pivot alignment',
        body: [
          "FAAC says the pivot center on the foundation box must be perfectly aligned with the leaf's axis of swing, and notes that some ground needs a bed of quick-setting concrete under the box to prevent subsidence. DFW clay heaves and shrinks with the seasons. A box that has moved a fraction puts a side load on the pivot, which the E024U then reads as obstacles.",
        ],
      },
      {
        heading: 'Lightning, heat and the E024U',
        body: [
          "FAAC's E024U instructions call for proper grounding, a ground rod if necessary and a surge suppressor, and list board thermal protection as error 7. A dark enclosure on a south-facing wall in August and a lightning-season surge are the two board faults we expect on a DFW 770. In the rare hard freeze, water left in a poorly drained box can also freeze around the levers and release.",
        ],
      },
    ],

    process: [
      {
        step: 'Read the board before touching the gate',
        body: 'ERROR LED flash count, +24 and battery LEDs, SETUP LED state and the input LEDs for STOP and photocells tell us where to start.',
      },
      {
        step: 'Release the leaf and swing it by hand',
        body: 'Key toward the post, lever out, then a full swing by hand to feel for a stiff pivot, rubbing leaf or missing stop — before any electrical testing.',
      },
      {
        step: 'Open and inspect the foundation box',
        body: 'Water, silt, drain, operator mounting, crank and rod, pinion and the lock engaging its bracket.',
      },
      {
        step: 'Test motor, encoder and supply',
        body: '24 V at the motor output, encoder wiring where fitted, the power supply and its 6.3 A timed fuse, and DS2 set to the 770 operator type.',
      },
      {
        step: 'Quote, repair and re-run setup',
        body: 'Once you approve the quote, we repair, lubricate, re-lock the release and run the E024U time learning from mid position, then test obstacle reversal.',
      },
    ],

    faqs: [
      {
        q: 'How do I release a FAAC 770 underground operator?',
        a: "Per FAAC: open the lid of the release lock on the support bracket, insert the key and turn it toward the post as far as it goes, then pull the lever out. To restore, push the lever home, turn the key away from the post, and move the leaf by hand until the lock engages the locking bracket.",
      },
      {
        q: 'Is the FAAC 770 hydraulic?',
        a: "No. FAAC's manual describes the 770 as an electromechanical, irreversible operator. It has no hydraulic oil or seal kit — FAAC's hydraulic underground models are different operators.",
      },
      {
        q: 'What does 8 flashes on the E024U mean?',
        a: "FAAC's table: maximum run time (10 minutes) reached without finding the positive stop. Check that the manual release is not engaged and that the board recognizes the mechanical stop, then redo setup.",
      },
      {
        q: 'How much can a 770 lift?',
        a: 'FAAC limits it by leaf length — from 1,100 lb on a 6 ft leaf down to 400 lb on an 11½ ft leaf.',
      },
      {
        q: 'Should there be water in the box?',
        a: 'No standing water. FAAC requires a conduit draining rainwater from the box to the nearest drain; if water stays in, the drain needs attention.',
      },
      {
        q: 'Can you get parts for an older 770?',
        a: 'Common boards are carried. 770-specific parts such as the gearmotor, levers or release are ordered, and because the 770 24V is not in FAAC USA’s current lineup we confirm availability before we quote.',
      },
    ],

    relatedModels: ['faac/400-repair'],
    relatedServices: ['gate-motor-repair', 'electric-gate-repair', 'automatic-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      {
        label: 'FAAC International — 770 24V Underground Swing Gate Operator manual with E024U board, Rev. 02 June 2012 (PDF, distributor-hosted)',
        url: 'http://www.faacgateopeners.com/FAAC-Manuals/FAAC-770-24VDC-swing-gate-operator.pdf',
      },
      {
        label: 'FAAC International — 770 24V manual (PDF, Fast Gate Openers copy)',
        url: 'https://fastgateopeners.com/store/media/pdf/770-24V-manual.pdf',
      },
      { label: 'FAAC USA — Swing gate automation lineup (770N listed)', url: 'https://faacusa.com/gates-garage-automations/swing-gates/' },
      {
        label: 'FAAC UK — 770N 24V underground swing gate operator',
        url: 'https://www.faac.co.uk/swing-gates/underground/770n-24v-underground-swing-gate-operator',
      },
    ],
    toConfirm: [
      'Production status: marked discontinued because FAAC USA lists the 770N, not the 770 24V. Confirm with a FAAC distributor.',
      '770N as a drop-in for an existing 770 foundation box: a reseller claims "completely interchangeable"; FAAC UK and FAAC Help pages checked do not say so. Not stated on the page.',
      'Availability of the 770 24V gearmotor and E024U board as spare parts in the US.',
      'Maximum torque 245 lbf·ft read from a PDF table whose columns extracted out of alignment; other values in the column align, but confirm.',
      'Whether a 230 V AC 770 variant exists in US installations (only the 24V manual was reviewed).',
      'UL 325 class wording beyond the manual cover ("UL325 – UL991") and "Class of operation: Residential".',
    ],
    indexable: true,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FAAC 844
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: '844-repair',
    brandSlug: 'faac',
    model: '844',
    aliases: ['844 ER', '844 ER Z16 CR', '844 R', '844 R CAT', '844 R RF', '844 ER CAT', '844 ER RF'],
    descriptor: 'electromechanical oil-bath slide gate operator for heavy residential and commercial gates',
    gateType: 'slide',
    duty: 'commercial',
    status: 'current',
    statusNote: "FAAC USA's sliding gate page lists the 844 E R as a current electromechanical operator (checked September 2026).",

    title: 'FAAC 844 Slide Gate Operator Repair | DFW',
    metaDescription:
      'FAAC 844 slide gate operator running on, slipping or stuck? Shield Gate Repair sets the oil-bath clutch, limit magnets and 780D board across DFW. Call 24/7.',
    h1: 'FAAC 844 Slide Gate Operator Repair in Dallas–Fort Worth',
    heroIntro:
      "Shield Gate Repair services the FAAC 844 slide operator on residential and commercial rack gates. The 844 is electromechanical with an oil-bath clutch — not hydraulic — and the calls we see are a gate that overruns its limit, a clutch slipping on a heavy gate, or an operator that quits on hot afternoons.",
    heroPoints: [
      'We check the FC1 and FC2 limit LEDs on the 780D and the magnet or plate gap before replacing a limit switch.',
      'We set the twin-disk clutch with the motor shaft held, the way FAAC specifies — it ships set to maximum.',
      'We check the oil covers the motor’s copper winding and top up only with FAAC XD 220.',
    ],

    identify: {
      body: [
        "The 844 is a compact gearmotor bolted to a foundation plate on a concrete pad beside the gate, with a plastic cover and a pinion driving a steel rack welded or screwed along the bottom of the gate. The 780D control board is built into the operator under its own cover, with its F, + and – programming keys on that cover, so there is usually no separate control box.",
        "FAAC's manual covers the 844 ER Z16 CR, 844 R, 844 R CAT and 844 R RF, with CAT and RF versions set up for chain drive and idle transmissions. The Z16 or Z20 refers to the pinion, and it changes the gate's rating and speed.",
        "The 844's closest look-alike is FAAC's 746, a lighter slide operator. FAAC's parts list shows the two sharing the upper housing, cover base, release lever unit and MLS limit switch, so the label, not the shape, is how to tell them apart.",
      ],
      lookFor: [
        'A compact gearmotor with a plastic cover on a concrete pad beside the gate opening',
        'A steel rack along the gate meshing with a pinion on the operator (or a chain on CAT/RF versions)',
        'A keyed protection door with the release lever behind it',
        'Two magnets on the side of the rack (magnetic limit) or two steel plates on top of it (inductive limit)',
        'A plastic oil filler cap and a vent screw label on the housing',
      ],
    },

    overview: [
      {
        heading: 'Electromechanical, with the gears and clutch running in oil',
        body: [
          "FAAC describes the 844 as an electro-mechanical operator that moves the gate through a rack or chain pinion. A 650 W motor drives a 1:30 reduction, and the twin-disk clutch runs in an oil bath filled with FAAC XD 220. The oil is lubrication and cooling, not a hydraulic circuit — there is no pump, no pressure setting and no seal-kit rebuild in the hydraulic sense.",
          'The gearing is non-reversing, so FAAC says the gate is mechanically locked when the motor is off and needs no separate lock. A gate that can be pushed along its track with the operator engaged has a released lever, a slipping clutch or a stripped pinion.',
        ],
      },
      {
        heading: 'Two layers of force limiting',
        body: [
          'The 844 limits force twice. The 780D board adjusts motor thrust over 50 levels and, where an encoder is fitted, uses it as anti-crushing: on an obstacle the gate reverses for 2 seconds, and a second hit during that reverse stops it. Behind that sits the mechanical clutch.',
          "FAAC ships the clutch set to maximum, with a spring suited to gates up to 2,200 lb and an alternative spring supplied for heavier gates. To adjust it, power is cut, the motor shaft is held with a wrench and the adjustment screw turned — clockwise for more torque, counter-clockwise for less. An 844 on a heavy gate that still has the lighter spring fitted is a classic cause of slipping.",
        ],
      },
      {
        heading: 'Limit sensing is the most common 844 fault',
        body: [
          'The 844 stops at each end when its limit sensor sees a reference on the rack: two magnets on the side of the rack for the MLS magnetic switch, or two steel plates on top of the rack for the inductive switch. FAAC gives the gap as ¼ to ½ inch for magnets and under 3/16 inch for plates.',
          'On the 780D, the FC1 and FC2 LEDs are on when free and go off when a limit is engaged. If the switch never sees its reference, FAAC says the motor runs for 120 seconds and the board goes into alarm. Magnets knocked loose, a plate that has crept, or a gate that has dropped on its wheels all produce exactly that.',
        ],
      },
      {
        heading: 'Rack and pinion setup',
        body: [
          'FAAC uses a module 4 rack and specifies that once the rack is fitted, the gearmotor is lowered by about 1/16 inch so the rack does not rest its weight on the pinion. It also says not to grease between rack and pinion, and not to weld rack sections to their spacers or to each other.',
          "The pinion choice changes the numbers: FAAC rates the Z16 for gates to 3,950 lb at 32 ft per minute and the Z20 for gates to 2,200 lb at 40 ft per minute. A Z20 swapped onto a gate that was set up for a Z16 is a heavier load than the operator was specified for.",
        ],
      },
    ],

    specs: [
      { label: 'Drive', value: 'Electromechanical, non-reversing; rack or chain pinion' },
      { label: 'Versions (FAAC manual)', value: '844 ER Z16 CR, 844 R, 844 R CAT, 844 R RF' },
      { label: 'Power supply', value: '115 or 230 VAC (+6% −10%), 60 Hz' },
      { label: 'Absorbed power', value: '650 W' },
      { label: 'Motor', value: '1700 rpm · 7 A at 115 V, 3.5 A at 230 V · 70 µF (115 V) / 35 µF (230 V) starting capacitor' },
      { label: 'Reduction ratio', value: '1:30' },
      { label: 'Pinion / rack', value: 'Z16 or Z20 · module 4 rack' },
      { label: 'Maximum thrust', value: '250 lbf (Z16) · 180 lbf (Z20)' },
      { label: 'Maximum gate weight', value: '3,950 lb (Z16) · 2,200 lb (Z20)' },
      { label: 'Gate speed', value: '32 ft/min (Z16) · 40 ft/min (Z20)' },
      { label: 'Use frequency', value: '70% at 75°F; FAAC notes direct sunlight can reduce it to 20%' },
      { label: 'Clutch', value: 'Twin-disk in oil bath' },
      { label: 'Oil', value: '0.5 gal FAAC XD 220' },
      { label: 'Winding thermal protection', value: '248°F' },
      { label: 'Operating temperature', value: '−4°F to +131°F' },
      { label: 'Protection class / weight', value: 'IP44 · 32 lb' },
      { label: 'Control board', value: '780D, built into the operator' },
      { label: 'Limit switch', value: 'Magnetic (MLS) or inductive' },
    ],

    symptoms: [
      {
        symptom: 'The gate reaches the end but the motor keeps running, then everything stops',
        causes:
          'Limit magnet or plate missed — knocked off, moved, or too far from the sensor — so the motor runs its 120-second limit and the 780D goes into alarm. A failed limit switch if the reference is correctly placed.',
        whatWeDo:
          'We watch FC1 and FC2 as the gate travels, reset magnets to ¼–½ inch (or plates under 3/16 inch), and replace the switch only if the LED still does not change.',
      },
      {
        symptom: 'The motor runs but the gate barely moves or slips on heavy days',
        causes:
          'Clutch set too light, the lighter standard clutch spring on a gate over 2,200 lb, board thrust set low, or wheels and track binding.',
        whatWeDo:
          "We release the gate and push it along the track first. If it rolls freely, we set the clutch and board force; if it does not, the gate hardware is the repair.",
      },
      {
        symptom: 'It stops working on hot afternoons and comes back later',
        causes:
          "FAAC's 70% use frequency is measured at 75°F and it warns direct sunlight can cut that to 20%; the winding cut-out is 248°F. Low oil reduces cooling in the oil bath.",
        whatWeDo:
          'We check oil level against the copper winding, check cycle settings such as pause time, and look at the work the operator is being asked to do in full sun.',
      },
      {
        symptom: 'Grinding or clicking as the gate moves',
        causes:
          'Rack sitting on the pinion instead of meshing, rack sections out of step at joints, worn pinion teeth, or a pad that has moved.',
        whatWeDo:
          'We check the 1/16-inch clearance FAAC specifies, re-space rack joints and replace the pinion if teeth are worn.',
      },
      {
        symptom: 'The gate opens but will not close',
        causes: 'A closing photocell or edge device tripped, or a missing jumper between the FSW CL and –TX FSW terminals where none is fitted.',
        whatWeDo: 'We read the FSW CL and SAFE LEDs and bypass each device temporarily to find the one holding the gate.',
      },
      {
        symptom: 'An alarm is sounding and the gate will not respond',
        causes: 'The audio alarm output triggers after two sequential activations of an entrapment device and sounds until a STOP command.',
        whatWeDo: 'We clear the STOP input, find what triggered twice, and test the encoder or edge before returning to service.',
      },
      {
        symptom: 'I released it for a power cut and now it will not pick the gate back up',
        causes: 'Lever not fully closed, key not turned back counter-clockwise, or the gate not moved far enough for the release to engage.',
        whatWeDo: "We follow FAAC's sequence — cut power, close the lever, turn the key back, move the gate until it engages — then check the release lever unit for wear.",
      },
    ],

    components: [
      {
        part: 'Twin-disk oil-bath clutch and adjustment spring',
        whatItDoes: 'Mechanical overload protection behind the electronic force limit.',
        failureSigns: 'Gate slips under load, or will not slip at all on an obstruction.',
        verdict: 'adjust',
      },
      {
        part: 'Gear oil (FAAC XD 220)',
        whatItDoes: 'Lubricates and cools the motor, clutch and gears; must cover the copper winding.',
        failureSigns: 'Level below the winding, overheating in summer, oil at the housing joint.',
        verdict: 'service',
      },
      {
        part: 'Limit switch (MLS magnetic or inductive) and rack references',
        whatItDoes: 'Stops the motor at each end of travel.',
        failureSigns: 'Overrun and 120-second alarm, FC LED not changing, magnets missing.',
        verdict: 'adjust',
      },
      {
        part: '780D control board',
        whatItDoes: 'Logic, thrust, decelerations, braking, encoder, safety inputs; built into the operator.',
        failureSigns: 'Dark display, F1 (5 A / 10 A) or F2 (800 mA) fuse open, no response to keys.',
        verdict: 'replace-part',
      },
      {
        part: 'Starting capacitor',
        whatItDoes: 'Starts the single-phase motor — 70 µF on 115 V, 35 µF on 230 V.',
        failureSigns: 'Motor hums without turning, or starts only in one direction.',
        verdict: 'replace-part',
      },
      {
        part: 'Pinion (Z16/Z20) and rack',
        whatItDoes: 'Transfers drive to the gate; the pinion size sets speed and weight rating.',
        failureSigns: 'Worn or chipped teeth, rack bearing on the pinion, noise at joints.',
        verdict: 'replace-part',
      },
      {
        part: 'Release lever unit, lock and key',
        whatItDoes: 'Disconnects the drive so the gate can be pushed by hand.',
        failureSigns: 'Lever will not close, key seized, drive not re-engaging.',
        verdict: 'repair',
      },
      {
        part: 'Encoder (where fitted)',
        whatItDoes: 'Anti-crushing detection and precise decelerations and partial opening.',
        failureSigns: 'ENC LED not flashing while the motor turns; nuisance reversals.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'The 844 is a long-lived, heavily built slide operator and most faults are adjustments — limits, clutch, oil — or single parts such as the 780D, capacitor or pinion. Replacement makes sense when the gearbox or motor is worn out, or when the gate is heavier or busier than the 844 was set up for.',
      repair: [
        'Overrunning or stopping short — reset magnets or plates and decelerations.',
        'Slipping — clutch adjustment or the heavier-gate spring FAAC supplies.',
        'Board, fuse or capacitor failure after a surge.',
        'Noisy drive — rack mesh, joint spacing or a worn pinion.',
      ],
      replace: [
        'Worn gears or a failed stator where parts cost approaches a new operator — we price both.',
        'A Z20 pinion on a gate heavier than its 2,200 lb rating; the fix may be the Z16 pinion rather than a new operator.',
        'Very high cycle counts in full sun, where FAAC’s own use-frequency curve says the operator is working beyond its range.',
      ],
    },

    warranty: {
      manufacturer:
        "The FAAC International 844 manual (Rev. 01, December 2010) states a limited warranty of 24 months from the date of invoice. It extends only to wholesale customers buying through FAAC International's normal distribution channels; FAAC International does not warrant its products to end consumers, who must ask their selling dealer about that dealer's warranty.",
      notes: [
        'Maintenance parts such as oil are not covered.',
        'Damage from lightning, electrical power surge, hail, flood, vehicles and improper installation is excluded — impact from vehicles is a real risk for a pad-mounted slide operator.',
        'Check the manual that came with your operator; later FAAC International terms may differ from the 2010 statement.',
      ],
    },

    dfw: [
      {
        heading: 'Direct sun cuts the 844’s duty cycle',
        body: [
          "FAAC's use-frequency curve for the 844 is measured at 75°F and it says plainly that exposure to direct sunlight can reduce use frequency to as low as 20%. A dark 844 on a south-facing pad at a busy HOA or commercial slide gate in a DFW July is a long way from 75°F. Heat-related stopping is a duty-cycle problem first, and we look at shading, pause time and cycle count before parts.",
          'Oil level matters more in heat because the oil bath carries heat away from the motor and clutch. FAAC asks for a yearly check in medium use and every 6 months in heavy use.',
        ],
      },
      {
        heading: 'Pads, flooding and clay',
        body: [
          "FAAC recommends the concrete pad sit at least 4 inches above grade to avoid flooding the operator, which is rated only IP44. On low driveways that collect storm runoff, a pad poured flush is a recurring cause of wet boards. Seasonal clay movement shifts the pad and the track independently, changing the pinion-to-rack clearance FAAC sets at about 1/16 inch.",
        ],
      },
      {
        heading: 'Surges and hail',
        body: [
          "FAAC's 844 manual recommends grounding the operator with a ground rod if needed and adding a surge suppressor to protect against surges and lightning. The 780D lives inside the operator under a plastic cover, so a lightning strike nearby or a hail-cracked cover letting water in both end at the same board.",
        ],
      },
    ],

    process: [
      {
        step: 'Read the 780D status LEDs',
        body: 'OP-A, OP-B, FC1, FC2, FSW OP, FSW CL, STOP, SAFE and ENC tell us whether the fault is a limit, a safety device, a command input or the drive.',
      },
      {
        step: 'Release and push the gate the full length',
        body: 'Key clockwise and lever pulled, then the gate rolled end to end by hand to check wheels, track, top guide and stops before any electrical work.',
      },
      {
        step: 'Check drive, oil and clutch',
        body: 'Oil covering the copper winding, rack mesh and clearance, pinion wear, and clutch slip against the gate’s real weight.',
      },
      {
        step: 'Set limits, force and decelerations',
        body: 'Magnets or plates positioned so the gate stops ¾ to 2 inches short of its mechanical stop, then thrust, braking and encoder sensitivity set and a full cycle run.',
      },
      {
        step: 'Quote, repair and test safeties',
        body: 'Price agreed before parts are fitted; photocells, edges and encoder reversal tested at the end.',
      },
    ],

    faqs: [
      {
        q: 'Is the FAAC 844 a hydraulic operator?',
        a: "No. FAAC describes it as electro-mechanical. Its motor, clutch and gears run in FAAC XD 220 oil for lubrication and cooling, but there is no hydraulic pump or pressure circuit.",
      },
      {
        q: 'How do I release a FAAC 844 to move the gate by hand?',
        a: "Per FAAC: open the protection door, insert the key, turn it clockwise and pull the release lever. To restore, cut power, close the lever, turn the key counter-clockwise, remove it and move the gate until the release engages.",
      },
      {
        q: 'How heavy a gate can an 844 move?',
        a: 'FAAC rates it for 3,950 lb with the Z16 pinion and 2,200 lb with the Z20. The standard clutch spring suits gates up to 2,200 lb; FAAC supplies an alternative spring for heavier gates.',
      },
      {
        q: 'Why does my 844 run on past the end of travel?',
        a: 'Usually the limit switch is not seeing its magnet or plate. FAAC notes that if the references are not detected, the motor runs for 120 seconds and the board goes into alarm.',
      },
      {
        q: 'What oil does an 844 use and how often should it be checked?',
        a: 'FAAC XD 220 only, about half a gallon. FAAC recommends checking once a year in low or medium use and every 6 months in heavy use; the level should cover the motor’s copper winding.',
      },
      {
        q: 'Do you carry 844 parts?',
        a: 'We carry common control boards. 844-specific parts such as a limit switch, pinion or release lever unit may need to be ordered, and we tell you before booking the repair.',
      },
    ],

    relatedModels: [],
    relatedServices: ['gate-motor-repair', 'commercial-gate-repair', 'automatic-gate-repair', 'electric-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      {
        label: 'FAAC International — 844 Slide Gate Operator manual with 780D board, Rev. 01 December 2010 (PDF, distributor-hosted)',
        url: 'http://www.faacgateopeners.com/FAAC-Manuals/FAAC-844-Chain-and-Rack-and-Pinion-Gate-Operators.pdf',
      },
      {
        label: 'FAAC — 844 Compact Slide Gate Operator installation manual (PDF, Gates N Fences copy)',
        url: 'http://www.gatesnfences.com/files/FAAC_844_Compact_Slide_Gate_Openers_Installation_Manuals.pdf',
      },
      { label: 'FAAC USA — Sliding gate automation lineup', url: 'https://faacusa.com/gates-garage-automations/sliding-gates/' },
    ],
    toConfirm: [
      'Oil conflict inside the 2010 manual: text says "Use FAAC XD 220 oil only" while the spares list item 88 is "Hydraulic oil FAAC HP OIL Lt. 1". Page follows the text.',
      'Whether current US 844 ER production still uses the 780D board and the same specs (manual is 2010).',
      'UL 325 class(es) for the 844 — not found in the manual text reviewed; not stated on the page.',
      'Aliases 844 ER CAT and 844 ER RF come from section headings in the same manual that lists "844 R CAT" and "844 R RF" — confirm both spellings appear on labels.',
      'Current FAAC International warranty term (manual states 24 months; another FAAC International warranty document lists 3 years for gate operators — source not confirmed).',
    ],
    indexable: true,
  },
]
