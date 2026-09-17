/**
 * Elite model pages.
 *
 * Research notes (Sept 2026):
 *  - The Chamberlain Group, Inc. acquired Elite Access Systems, Inc. and Elite
 *    Entry Phone (Lake Forest, California) on September 15, 2003. Chamberlain's
 *    CEO said at the time it intended "to preserve and strengthen the Elite
 *    brand name". LiftMaster (Chamberlain) now publishes its commercial and
 *    industrial gate operator manuals under the "Elite Series" name — e.g.
 *    "Elite Series Heavy Duty Industrial AC Slide Gate Operator Model SL595" and
 *    "Elite Series Commercial High-Traffic AC Swing Gate Operator Model
 *    CSW200UL". Source: AAARemotes news post; LiftMaster manuals.
 *  - So "Elite" on a DFW gate means one of two things: a legacy Elite Access
 *    Systems product (Miracle One, SL-3000, CSW-200 …) or a LiftMaster
 *    "Elite Series" operator. SL3000UL and CSW200UL are written up under
 *    LiftMaster; this file covers the SL595/SL585 and the Miracle One.
 *  - Q401 and Q404 are NOT models. Elite's own parts lists give Q401 as the
 *    Omni 1 HP control board (SL-3000/CSW-200) and Q404 as an alarm (Omni alarm
 *    in the SL-3000/CSW-200 lists, UL audio alarm in the Miracle 1 list).
 *    No Q400-series model page is written.
 *  - SW470/SW490 are LiftMaster swing operators with no Elite branding in
 *    their manual (Doc 01-G0665), so they are not written here.
 *  - No image, project or video is confirmed to show either model. The
 *    'elite-board-replacement' case study does not name a model.
 */

import type { ModelPage } from './types'

const SL595_MANUAL = {
  label: 'LiftMaster Elite Series SL595 heavy duty industrial AC slide gate operator installation manual (PDF)',
  url: 'https://www.aegates.com/wp-content/uploads/2021/07/liftmaster-gate-operator-sl595-gate-manual.pdf',
}
const ACQUISITION = {
  label: 'AAARemotes — “Chamberlain acquires Elite Access Systems” (Sept 15, 2003 announcement)',
  url: 'https://www.aaaremotes.com/chamberlain-acquires-elite-access-systems/',
}

export const eliteModels: ModelPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // SL595 / SL585
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'sl595-repair',
    brandSlug: 'elite',
    model: 'SL595',
    aliases: [
      'SL585',
      'SL595101U',
      'SL595103U',
      'SL595105U',
      'SL595151U',
      'SL595203U',
      'SL595205U',
      'SL595UL',
      'SL595101UL',
      'SL595105UL',
      'SL585101U',
      'SL585103U',
      'SL585105U',
      'SL585151U',
      'SL585501U',
      'SL585503U',
      'SL585505U',
      'LiftMaster SL595',
      'Elite Series SL595',
    ],
    descriptor: 'heavy-duty industrial AC chain-drive slide gate operator',
    gateType: 'slide',
    duty: 'industrial',
    status: 'discontinued',
    statusNote:
      'LiftMaster’s partner support library lists the SL585 & SL595 owner’s manual as discontinued, and distributors list SL595UL units as obsolete. No official successor was named in the sources reviewed.',

    title: 'Elite SL595 & SL585 Slide Gate Repair | Dallas–Fort Worth',
    metaDescription:
      'Elite SL595 or SL585 slide gate showing an error code or refusing to run? We read the code history and test sensors and boards across DFW. Call 24/7.',
    h1: 'Elite SL595 and SL585 Industrial Slide Gate Operator Repair',
    heroIntro:
      'We repair LiftMaster Elite Series SL595 and SL585 industrial slide operators across Dallas–Fort Worth. These units log their own faults on a two-digit display, so the first job is reading the code history. That history often points to power, a sensor or the gate rather than the motor.',
    heroPoints: [
      'We pull the last 20 stored codes from the diagnostic display before replacing anything',
      'We check the friction clutch, brake and #50 chain as well as the boards',
      'We tell you honestly whether a discontinued SL595 is still worth fixing',
    ],

    identify: {
      body: [
        'The SL595 and SL585 are industrial slide operators sold by LiftMaster under its Elite Series name. The installation manuals are titled “Elite Series Heavy Duty Industrial AC Slide Gate Operator, Model SL595” and “Elite Series Industrial AC Slide Gate Operator, Model SL585”. Older manuals for the SL595 were published under LiftMaster Professional. If your gate says Elite and has a large industrial slide operator with a chain across the gate, it is often one of these two.',
        'On the later U-suffix units, the fastest check is the diagnostic display on the control board. At power-up it shows the operator type as “SL” followed by “59” for an SL595 or “58” for an SL585, then the firmware version. The full model number encodes horsepower and supply. SL595101U is 1 HP on 120/208–240 V single phase, 103U is 1 HP three phase 208–240/480 V, 151U is 1½ HP single phase, and 203U and 205U are 2 HP three phase. The SL585 adds ½ HP versions (501U, 503U, 505U).',
        'Do not confuse these with the Elite SL3000UL. That is a different, commercial-duty slide operator with its own board and manual, and we cover it on its own page.',
      ],
      lookFor: [
        'A two-digit diagnostic display on the control board reading “SL 59” or “SL 58” at power-up',
        'An AC power switch with a lockout cover, and on 120 V models a 120 V accessory outlet',
        'A manual release handle you pull to free the gate',
        'Heavy #50 chain running the length of the gate over drive and idler sprockets',
        'A model number starting SL595 or SL585 on the label or manual',
      ],
    },

    overview: [
      {
        heading: 'Built for heavy gates: the ratings by horsepower',
        body: [
          'The SL595 is rated continuous duty for Class I through IV slide gates at about one foot per second. At 1 HP it handles 1,700 lbs, at 1½ HP 2,100 lbs, and at 2 HP 2,500 lbs. Maximum length depends on how the gate is carried. The 1 HP SL595 is listed for 35 ft cantilever, 70 ft overhead roller or 50 ft V-track. The 2 HP unit is listed for 45 ft, 90 ft and 60 ft.',
          'The SL585 is the lighter sibling. It is rated for 1,000 lbs at ½ HP, 1,600 lbs at 1 HP and 1,900 lbs at 1½ HP, with the ½ HP unit listed for 25 ft cantilever, 45 ft overhead roller or 35 ft V-track. When an SL585 is struggling, compare the gate’s actual weight with the unit’s horsepower before assuming a fault.',
        ],
      },
      {
        heading: 'Drive train: 20:1 reducer, friction clutch and brake',
        body: [
          'The motor drives a 20:1 gear reducer. Its output passes through a friction clutch, a torque-limiter sprocket assembly, to #50 nickel-plated chain (24 ft supplied in the box). A solenoid brake holds the gate when the motor stops. LiftMaster states plainly that the friction clutch is not an obstruction sensor. It exists to limit damage to the operator, the gate and vehicles, and it must be tight enough to move the gate yet loose enough to slip against an obstruction.',
          'The maintenance table calls for checking the clutch and brake on a schedule, and it gives chain limits of no more than 1 inch of sag per 10 feet, lubricated only with lithium spray, never grease or silicone. Limits may need resetting after any major chain adjustment.',
        ],
      },
      {
        heading: 'How it senses a problem: RPM, current and monitored devices',
        body: [
          'The inherent (Type A) entrapment protection uses an RPM sensor: an encoder cup and sensor on the limit shaft, plus a current sensor. Limits are set with the handing buttons and test buttons on the board. The limit nuts in the limit box are then moved until they contact the open and close limit switches. Force is learned automatically as the limits are set and then fine-tuned on a FORCE dial.',
          'These units also require at least one monitored external entrapment device, such as a pulsed photoelectric sensor or a resistive or pulsed edge, for each entrapment zone. The main board accepts three, and an expansion board is included. If no monitored device is detected, the display logs code 60. That catches out anyone who swaps in an older, unmonitored photo-eye.',
        ],
      },
      {
        heading: 'Reading the code history',
        body: [
          'The display stores the last 20 codes. To view them, press and hold STOP, then CLOSE, then OPEN until “Er” appears. OPEN steps to the most recent code and CLOSE to the oldest. Codes run from 31 to 99, and several of the most useful ones point away from the motor. For example, 53 is a brownout, 55 and 56 are AC over- and undervoltage, 57 is a stuck limit switch, 91 is a force reversal, 93 is an RPM or stall reversal, and 96 is a current sensor fault.',
          'Code 95, “AC motor no start”, is a good example of why the history matters. LiftMaster’s instruction is to check for an obstructed gate, binding, and the relay board and start capacitor connections if the motor is not turning. If the motor is turning, the fault is loss of the encoder signal. Two very different repairs share one symptom, and the code separates them.',
        ],
      },
    ],

    specs: [
      { label: 'Usage class', value: 'UL 325 Class I, II, III and IV vehicular slide' },
      { label: 'SL595 horsepower / supply', value: '1 HP (120/208–240 V 1-ph; 208–240/480 V 3-ph; 575 V 3-ph), 1½ HP (1-ph), 2 HP (3-ph)' },
      { label: 'SL585 horsepower', value: '½ HP, 1 HP and 1½ HP (single- and three-phase versions)' },
      { label: 'SL595 maximum gate weight', value: '1,700 lbs (1 HP); 2,100 lbs (1½ HP); 2,500 lbs (2 HP)' },
      { label: 'SL585 maximum gate weight', value: '1,000 lbs (½ HP); 1,600 lbs (1 HP); 1,900 lbs (1½ HP)' },
      { label: 'SL595 1 HP maximum length', value: 'Cantilever 35 ft; overhead roller 70 ft; V-track 50 ft' },
      { label: 'SL595 2 HP maximum length', value: 'Cantilever 45 ft; overhead roller 90 ft; V-track 60 ft' },
      { label: 'Gate speed', value: '1 ft per second' },
      { label: 'Duty cycle / daily cycles', value: 'Continuous / continuous' },
      { label: 'Minimum gate travel', value: '4 ft' },
      { label: 'Gear reducer', value: '20:1' },
      { label: 'Chain', value: '#50, nickel-plated (24 ft supplied)' },
      { label: 'Inherent entrapment protection', value: 'RPM sensor (Type A)' },
      { label: 'External entrapment inputs', value: '3 per board, monitored devices; expansion board provided' },
      { label: 'Operating temperature', value: '−4 °F to 140 °F; −40 °F to 140 °F with optional heater' },
      { label: 'Warranty (manufacturer)', value: 'LiftMaster two-year limited warranty' },
    ],

    symptoms: [
      {
        symptom: 'The gate will not move and the board shows a code',
        causes:
          'Anything from a missing monitored photo-eye (60) or a stuck limit switch (57) to a power board relay fault (47) or a main board internal failure (31).',
        whatWeDo:
          'We pull the full stored history, not just the last code, and work from the most frequent and most recent. For 31, LiftMaster’s first step is a 15-second power-down reboot before any board is replaced.',
      },
      {
        symptom: 'The motor tries to start, hums or stalls, and the gate does not move',
        causes:
          'Code 95 (AC motor no start). The possible causes are a binding gate or mechanism, relay board or start capacitor connections, or, if the motor does turn, a lost encoder signal.',
        whatWeDo:
          'We release the gate and push it by hand, then check the capacitor and relay connections, then the encoder cup and sensor on the limit shaft.',
      },
      {
        symptom: 'It reverses for no reason, sometimes with the alarm going off',
        causes:
          'Force reversal (91) or RPM/stall reversal (93). LiftMaster lists debris on the track, broken axles or wheels, a wheel off the rail, or a gate that does not meet specifications. Two in a row sound the alarm for up to five minutes and need a reset.',
        whatWeDo:
          'We walk the track, check the wheels or rollers and the gate’s weight against the unit’s horsepower, and only then touch the FORCE dial.',
      },
      {
        symptom: 'It works most of the time but faults on hot afternoons or during storms',
        causes:
          'Brownouts (53) or AC undervoltage (56) from long or undersized supply wiring, or overvoltage (55) from the utility.',
        whatWeDo:
          'We measure voltage at the operator under load. LiftMaster wants it within 10% of the rating. We check the wire gauge against the run length before blaming a board.',
      },
      {
        symptom: 'The gate stops short or overruns after chain work',
        causes:
          'Run-distance error (50), or limit nuts that no longer match the gate after the chain was tightened.',
        whatWeDo:
          'We re-seat the limit nuts to the switches, re-learn run distance by setting the handing, and re-check force.',
      },
      {
        symptom: 'The gate drifts or coasts past its stop, or you can push it when it should be locked',
        causes:
          'A worn or badly adjusted solenoid brake, or a friction clutch that is slipping in normal travel.',
        whatWeDo:
          'We inspect and adjust the brake and clutch as the maintenance table specifies, and replace worn clutch discs or brake parts.',
      },
      {
        symptom: 'After a new control board went in, it will not run at all',
        causes:
          'Product ID error (36) or failure (37). A replaced board has to have its limits erased and re-set.',
        whatWeDo:
          'We follow LiftMaster’s sequence: erase the limits, enter limit setup and set the limits, and check the product ID harness.',
      },
    ],

    components: [
      {
        part: 'Main control board with diagnostic display',
        whatItDoes: 'Logic, handing, limits and force, code history, and monitored entrapment inputs.',
        failureSigns: 'Code 31 that returns after a reboot, a blank display with good 24 VAC supply.',
        verdict: 'replace-part',
      },
      {
        part: 'Power board (single-phase or three-phase)',
        whatItDoes: 'Motor relays, behind the control board. Separate part numbers for single- and three-phase units.',
        failureSigns: 'Code 47 (relay fault), code 59 (missing power board), code 96 persisting after checking the current sensor harness.',
        verdict: 'replace-part',
      },
      {
        part: 'RPM encoder cup and sensor',
        whatItDoes: 'Inherent entrapment protection and travel feedback, on the limit shaft.',
        failureSigns: 'Code 93 with no obstruction, or code 95 while the motor is turning.',
        verdict: 'replace-part',
      },
      {
        part: 'Limit box, limit nuts and switches',
        whatItDoes: 'Mechanical open and close limits that the board learns during setup.',
        failureSigns: 'Code 57 (stuck switch), 58 (wrong switch), or 50 (run-distance).',
        verdict: 'adjust',
      },
      {
        part: 'Friction clutch assembly',
        whatItDoes: 'A torque limiter between the 20:1 reducer and the chain sprocket.',
        failureSigns: 'The gate stalls while the sprocket turns, or slips on starting a heavy gate.',
        verdict: 'adjust',
      },
      {
        part: 'Solenoid brake',
        whatItDoes: 'Holds the gate when the motor stops.',
        failureSigns: 'Coasting past the limit, a brake that drags and heats the motor, or a failed solenoid.',
        verdict: 'service',
      },
      {
        part: '20:1 gear reducer',
        whatItDoes: 'Speed reduction from motor to drive shaft.',
        failureSigns: 'Grinding, oil loss, output shaft play.',
        verdict: 'replace-part',
      },
      {
        part: '#50 chain, sprockets and idlers',
        whatItDoes: 'Moves the gate.',
        failureSigns: 'More than 1 in of sag per 10 ft, stiff links, worn teeth.',
        verdict: 'adjust',
      },
      {
        part: 'Optional heater kit',
        whatItDoes: 'Keeps the gearbox (and batteries, where fitted) warm for the extended low-temperature rating.',
        failureSigns: 'Not heating, or tripping on the 480 V configuration without the step-down transformer it needs.',
        verdict: 'repair',
      },
    ],

    repairOrReplace: {
      summary:
        'The SL595 and SL585 are discontinued, but they are heavy industrial machines and most faults are boards, sensors, clutch, brake or chain. Service parts are listed by part number in LiftMaster’s manual and still appear at distributors. Repair is usually right while the reducer and motor are sound. When those are worn on an old unit, or the right board is no longer obtainable, we will say so and help you size a replacement.',
      repair: [
        'Faults the code history traces to power quality, monitored sensors, loops or limits',
        'An RPM sensor, power board or control board failure on a mechanically sound operator',
        'Clutch, brake or chain wear on a high-cycle industrial gate',
        'Code 36/37 after a board swap that was never set up correctly',
      ],
      replace: [
        'The gear reducer or motor has failed on an older unit that also needs boards. Price the total against a current industrial slide operator sized to the gate’s weight and length.',
        'A board for your specific revision is no longer obtainable. Older, non-U SL595s may use different electronics from the U-series covered in the current manual.',
        'The gate has been made heavier or longer than your unit’s horsepower is rated for. An SL585 at ½ HP, for example, is listed only to 1,000 lbs.',
        'When you replace it, LiftMaster’s current Elite Series includes the SL3000UL slide operator. Whether it suits a gate this heavy depends on its rating, so confirm the sizing rather than assuming a like-for-like swap.',
      ],
    },

    warranty: {
      manufacturer:
        'Both the SL595 and SL585 installation manuals carry the “LiftMaster Two Year Limited Warranty”. It covers defects in materials and workmanship for two years from the date of purchase, for the first purchaser at the original structure.',
      notes: [
        'LiftMaster’s warranty says that failing to comply strictly with the installation, operation, maintenance and testing instructions voids it entirely.',
        'It excludes problems with the gate or gate hardware, including gate springs, rollers, alignment and hinges, and labor for reinstalling a repaired or replaced unit.',
        'LiftMaster asks you to call 1-800-528-2806 before dismantling a unit you believe is under warranty. Given the model’s discontinued status, most units in service will be outside the two-year term.',
      ],
    },

    dfw: [
      {
        heading: 'The 140 °F ceiling in a Texas summer',
        body: [
          'LiftMaster lists the SL595’s operating range as −4 °F to 140 °F without the heater. Air temperature in DFW does not reach 140 °F, but the inside of a dark steel enclosure on an unshaded industrial pad in August can get far hotter than the air. Boards, the current sensor and the start components all work harder there. If faults cluster in the afternoon, we look at enclosure heat and ventilation along with the parts.',
        ],
      },
      {
        heading: 'Long supply runs, storms and brownouts',
        body: [
          'Industrial and commercial SL595 sites often sit a long way from the panel, and the manual’s wire-length chart is built around a 5% voltage drop. Summer peak load and spring thunderstorms both pull supply voltage around. The operator records that as brownout (53) or AC undervoltage (56), which looks like random failure until someone reads the history. Lightning near a site can also take out the power board’s relays (47).',
        ],
      },
      {
        heading: 'Clay soil, tracks and cantilever rollers',
        body: [
          'Shrink-swell clay moves the footings under V-track rails and cantilever roller posts. LiftMaster’s list of things that trip the inherent force alarm, such as debris on the track, a broken wheel or axle, or a wheel off the rail, reads like a description of a heavy gate on shifting ground. Fixing the track or roller alignment is usually what cures repeated 91 or 93 reversals.',
        ],
      },
    ],

    process: [
      {
        step: 'Read the stored codes',
        body: 'Operator type and firmware at power-up, then the 20-code history. That tells us which branch of LiftMaster’s troubleshooting table to follow.',
      },
      {
        step: 'Release and push the gate',
        body: 'Power locked out, manual release handle pulled, gate moved its full travel by hand to find track, roller or wheel problems before any electrical testing.',
      },
      {
        step: 'Measure power and test sensors',
        body: 'Voltage at the operator within 10% of rating, monitored photo-eyes and edges, loop detectors, the current sensor and the RPM encoder.',
      },
      {
        step: 'Check clutch, brake, reducer and chain',
        body: 'Against the manual’s maintenance table, including chain sag and lubrication.',
      },
      {
        step: 'Quote, repair, re-learn and test',
        body: 'Price agreed first. After any board or chain work we reset the limits, re-learn the run distance and force, and test the entrapment reversal.',
      },
    ],

    faqs: [
      {
        q: 'Is the SL595 an Elite or a LiftMaster?',
        a: 'Both names apply. LiftMaster builds it and publishes its manual under the Elite Series name. Chamberlain, LiftMaster’s parent, acquired Elite Access Systems of Lake Forest, California, in September 2003 and has kept the Elite name on its commercial and industrial gate operators.',
      },
      {
        q: 'Is the SL595 still made?',
        a: 'No. LiftMaster’s support library files its manual as discontinued, and distributors list SL595UL units as obsolete. Many are still in service, and service parts are listed by part number in the manual.',
      },
      {
        q: 'How do I see the error codes on an SL595?',
        a: 'Press and hold STOP, then CLOSE, then OPEN until “Er” appears. The display shows a sequence number followed by the code. OPEN steps to the most recent and CLOSE to the oldest, and up to 20 are stored. Press STOP to exit.',
      },
      {
        q: 'What is the difference between the SL585 and SL595?',
        a: 'The SL595 is the heavier-duty unit: 1, 1½ or 2 HP, rated up to 2,500 lbs. The SL585 comes in ½, 1 and 1½ HP, rated up to 1,900 lbs. They share the Elite Series board layout and display, which shows “58” or “59”.',
      },
      {
        q: 'Why will my SL595 not run with a new photo-eye?',
        a: 'It needs a monitored entrapment device, such as a pulsed photoelectric sensor or a resistive or pulsed edge. An older, unmonitored eye is not recognised, and the display logs code 60.',
      },
      {
        q: 'Is code 95 a dead motor?',
        a: 'Not necessarily. LiftMaster’s guidance for 95 is to check for an obstructed or binding gate and the relay board and start capacitor connections first. If the motor is actually turning, the fault is a lost encoder signal.',
      },
    ],

    relatedModels: ['liftmaster/sl3000ul-repair', 'elite/miracle-one-repair'],
    relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'electric-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      SL595_MANUAL,
      { label: 'LiftMaster Elite Series SL585 industrial AC slide gate operator installation manual (PDF)', url: 'https://www.devancocanada.com/files/manuals/SL585_Installation-manual.pdf' },
      { label: 'LiftMaster partner support — SL585 & SL595 Slide Gate Owner’s Manual (Discontinued)', url: 'https://support.partner.liftmaster.com/s/article/LiftMaster-SL585-SL595-Slide-Gate-Owner-s-Manual-1484145513655' },
      { label: 'DDM Garage Doors — LiftMaster SL595UL 1 HP 1-ph (listed obsolete)', url: 'https://ddmgaragedoors.com/parts/part/OGATLM-SL595101UL.html' },
      { label: 'ManualsLib — Chamberlain LiftMaster Professional SL595 owner’s manual listing', url: 'https://www.manualslib.com/manual/609825/Chamberlain-Liftmaster-Professional-Sl595.html' },
      ACQUISITION,
    ],
    toConfirm: [
      'Older (pre-U, “SL595UL”) units: whether their board, display and codes match the U-series manual used here. Distributor pages list SL595UL variants, and an earlier manual summary gave different ratings (e.g. ½ HP, 12 in/sec, 40 ft cantilever). The page states U-series figures only.',
      'Model label location on the SL595/SL585 housing (not found in the manual text).',
      'Housing dimensions and orientation (the manual drawing gives 30 in, 35.4 in and 16.4 in for the SL595 without clear labels, so they are omitted).',
      'Whether LiftMaster names an official successor to the SL595. None was found, and the SL3000UL is mentioned only as a current Elite Series slide operator, not as a successor.',
      'Whether SL585/SL595 should live under the LiftMaster brand instead. content/brands.ts lists SL585 and SL595 under LiftMaster, and content/models/index.ts notes that Elite Series models are written up under LiftMaster. Avoid a duplicate page if the LiftMaster file also covers them.',
      'Current availability of control, power and expansion boards for U-series units (K1D6761-1CC, K1D8284-1CC, K1D8424-1CC, K1D8387-1CC).',
      'Whether the partner-support page title (“Discontinued”) is still current. The page could not be rendered for direct quotation.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // MIRACLE ONE
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'miracle-one-repair',
    brandSlug: 'elite',
    model: 'Miracle One',
    aliases: ['Miracle 1', 'Miracle-1', 'Miracle-One', 'Miracle 1 Master/Second'],
    descriptor: 'residential 24 V DC linear-arm swing gate operator',
    gateType: 'swing',
    duty: 'residential',
    status: 'discontinued',
    statusNote:
      'Chamberlain’s support library lists the Elite Miracle One instruction manual as discontinued. A parts distributor reports both Miracle control boards (Q222 single, Q223 master/second) discontinued with no direct substitute, and names the LiftMaster LA500 as the closest modern equivalent.',

    title: 'Elite Miracle One Gate Opener Repair | Dallas–Fort Worth',
    metaDescription:
      'Elite Miracle One gate arm dead, blowing fuses or showing an alarm light? We test fuses, batteries, limits and the key release across DFW. Call 24/7.',
    h1: 'Elite Miracle One Swing Gate Opener Repair in Dallas–Fort Worth',
    heroIntro:
      'We repair the Elite Miracle One, the aluminum 24-volt linear arm found on older residential swing gates across Dallas–Fort Worth. On this model, a dead gate is often a blown fuse, a low battery or a key release left unlocked. We check all three before we talk about the discontinued control board.',
    heroPoints: [
      'We check the board’s fuse LEDs and all three fuses before condemning anything',
      'We relock the key release and test the traveler carriage and limit armatures',
      'We tell you straight if the Q222/Q223 board has failed, because it has no direct substitute',
    ],

    identify: {
      body: [
        'The Miracle One, also printed as Miracle 1 and Miracle-1, is a residential swing gate operator from Elite Access Systems of Lake Forest, California. The manual still in circulation is copyrighted 1998–2004 by Chamberlain Professional Products. It is a linear arm: a finished-aluminum tube about 39½ inches long that bolts to a bracket on the post and pushes the gate through a traveler carriage. A separate plastic control box holds the board, the surge suppressor board and a battery rack.',
        'There are two setups. A single-gate system has one arm and the single control board (Q222). A double-gate system has two arms, master and second, on the master/second board (Q223). You unlock the arm with a key. Elite’s support number printed in the manual is 1-888-ELITE-10.',
        'The LiftMaster LA500 is the arm most often confused with it, and it is also what a parts distributor names as its closest modern equivalent. The two share the same Q230 post mounting brackets, so an LA500 can go onto the same brackets.',
      ],
      lookFor: [
        'A slim aluminum arm about 39½ in long, pushing the gate from a post bracket',
        'A key lock on the arm for emergency release',
        'A separate plastic control box with a battery rack and a plug-in 24 VAC transformer',
        'A board with LEDs labelled Charge OK, Batteries Low, Replace Board Fuse and Reverse Sensor',
        'The words Miracle 1 or Miracle One, and Elite, on the board, box or arm',
      ],
    },

    overview: [
      {
        heading: 'A 24-volt DC arm on batteries',
        body: [
          'The Miracle One runs a 24 V DC motor (12 A) and develops 600 lbs of torque. Elite rated it for gates up to 15 feet wide and 600 lbs, opening to 90 degrees in 14 to 18 seconds, and up to 100 cycles per day. Power comes from a 24 VAC plug-in transformer into the surge suppressor board, and a pair of batteries in a plastic rack (Elite accessory A BT MIR) keeps it running when the power is out.',
          'Because the arm always runs from the battery circuit, a weak battery or a failed charging circuit shows up as a slow or stalling gate long before it looks like a power failure. The board has dedicated Charge OK and Batteries Low LEDs, and the manual says Charge OK must be on once the batteries are connected.',
        ],
      },
      {
        heading: 'Fuses: the first place to look',
        body: [
          'Elite’s troubleshooting starts with the fuses, not the motor. On the master/second board they are 15 A, 3 A and 1.5 A, and on the single board 8 A, 2 A and 1.5 A. If the board-power or charging-power LEDs indicate a problem, you replace the matching fuse on the right side of the board. If the motor will not run but all the LEDs look normal, you check the motor fuse on the left side.',
          'A left-side fuse that keeps blowing is a warning, not a nuisance. Elite’s instruction is to make sure the operator runs smoothly, check the washer placement at the traveler carriage, and check the motor wire connections. A tight hinge or a bent arm makes the motor draw enough current to take the fuse.',
        ],
      },
      {
        heading: 'Reverse sensing, positive stops and limit armatures',
        body: [
          'When the arm meets an object while opening or closing, the Miracle One reverses for one second and then goes into neutral so the gate can be pushed by hand. Elite says to adjust the sensor with the gate moving. It should stop on an object while opening and reverse on one while closing. If the gate stops in the middle of the driveway on its own, it is set too sensitive.',
          'Travel is set by limit switches on sliding armatures inside the arm. The outside switches set the full-open and full-closed positions. There is also a “Stop by Positive Stop” option for gates that close against a physical stop. Even then, the close limit must still be set, because the controller looks for the limit first and then the stop.',
        ],
      },
      {
        heading: 'The key release and the traveler carriage',
        body: [
          'To move the gate in an outage, you insert the key and turn it counterclockwise to unlock the arm, then swing the gate to fully open. To relock, you turn the key clockwise while pushing or pulling the gate until the release clicks into place. A gate left unlocked after an outage will not move under power, which is why this is on our first-visit checklist.',
          'The traveler carriage is the part that rides inside the arm and carries the gate connection. It appears in Elite’s own fuse troubleshooting (washer placement), and a distributor reports the replacement Q300 carriage is now in limited supply. When a carriage is worn, we check availability before we quote.',
        ],
      },
    ],

    specs: [
      { label: 'Motor', value: '24 V DC, 12 A' },
      { label: 'Torque', value: '600 lbs' },
      { label: 'Maximum gate', value: '15 ft wide, 600 lbs' },
      { label: 'Opening time', value: '14–18 seconds to 90°' },
      { label: 'Duty', value: '100 cycles per day' },
      { label: 'Arm length', value: '39½ in' },
      { label: 'Finish', value: 'Aluminum' },
      { label: 'Control boards', value: 'Q222 single operator; Q223 master/second' },
      { label: 'Power', value: '24 VAC plug-in transformer (A POW3) into 115 VAC; battery rack with 2 batteries (A BT MIR)' },
      { label: 'Fuses — master/second', value: '15 A, 3 A, 1.5 A' },
      { label: 'Fuses — single', value: '8 A, 2 A, 1.5 A' },
      { label: 'Emergency release', value: 'Keyed release on the arm' },
      { label: 'Obstruction response', value: 'Reverses 1 second, then neutral (can be pushed by hand)' },
      { label: 'Shipping weight', value: '58 lbs single; 89 lbs master/second' },
      { label: 'Solar option', value: 'Elite SOLAR 3 panel with DC solar power adapter' },
    ],

    symptoms: [
      {
        symptom: 'Nothing happens, and some LEDs on the board are on that normally are not',
        causes:
          'A blown fuse. The board has Replace Board Fuse and Replace Charging Power Fuse LEDs that point to which one.',
        whatWeDo:
          'We replace the indicated right-side fuse with the exact rating Elite specifies, then find out why it blew.',
      },
      {
        symptom: 'The board looks normal but the arm will not move',
        causes:
          'The left-side motor fuse, the key release left unlocked, or a motor harness fault.',
        whatWeDo:
          'We check that the release is locked (key turned clockwise until it clicks), test the motor fuse and harness, and push the gate by hand to feel for bind.',
      },
      {
        symptom: 'The same fuse keeps blowing',
        causes:
          'The motor is working too hard. Elite points to rough operation, washer placement at the traveler carriage, and motor wire connections.',
        whatWeDo:
          'We check hinges and gate swing, the traveler carriage and its washers, and the motor connections before fitting another fuse.',
      },
      {
        symptom: 'The gate is slow, weak, or dies when the power goes out',
        causes:
          'Batteries at the end of their life, a failed charging fuse, or a transformer not delivering 24 VAC. The Batteries Low LED will often be on and Charge OK off.',
        whatWeDo:
          'We test the transformer output, the charging fuse and the batteries under load, and replace the batteries as a set.',
      },
      {
        symptom: 'The gate stops in the middle of the swing on its own',
        causes:
          'The reverse sensor is set too sensitive (Elite’s own description of this symptom), or the gate is binding.',
        whatWeDo:
          'We free the gate first, then reduce sensitivity with the gate moving, as Elite specifies.',
      },
      {
        symptom: 'The alarm LED is on',
        causes:
          'Elite lists four causes: a gate that is too heavy or installed incorrectly, a foreign object on the gate frame, hinges that are too tight or broken, or a gate that hits the driveway or curb and sticks.',
        whatWeDo:
          'We check gate weight and arm geometry against the 15 ft and 600 lb rating, the hinges, and ground clearance through the swing.',
      },
      {
        symptom: 'The remote does nothing, or the gate will not close',
        causes:
          'A dead remote battery, code switches that do not match the receiver, or a radio receiver stuck on or off (watch its LED).',
        whatWeDo:
          'We read the receiver LED while pressing the remote and re-code or replace the receiver or remote.',
      },
    ],

    components: [
      {
        part: 'Control board (Q222 single / Q223 master/second)',
        whatItDoes: 'Microcontroller with a built-in watchdog, LEDs for every input and output, timer, reverse sensor and alarm.',
        failureSigns: 'No System On or Power LED with good fuses and supply, or erratic behaviour that follows the board.',
        verdict: 'replace-part',
      },
      {
        part: 'Surge suppressor board and plug-in transformer',
        whatItDoes: 'Takes 24 VAC from the transformer, protects the board, and connects the battery.',
        failureSigns: 'No Timer LED flash on battery connection, Charge OK LED off, damage after a storm.',
        verdict: 'replace-part',
      },
      {
        part: 'Board fuses',
        whatItDoes: 'Protect the board, the charging circuit and the motor.',
        failureSigns: 'Replace-fuse LEDs lit, or a motor that will not run with normal LEDs.',
        verdict: 'replace-part',
      },
      {
        part: 'Batteries and rack',
        whatItDoes: 'Run the arm and provide operation during outages.',
        failureSigns: 'Batteries Low LED, slow or weak travel, no operation in an outage.',
        verdict: 'replace-part',
      },
      {
        part: 'Limit switches and armatures',
        whatItDoes: 'Set the open and closed positions from inside the arm.',
        failureSigns: 'Gate overtravels, stops short, or ignores a limit.',
        verdict: 'adjust',
      },
      {
        part: 'Traveler carriage',
        whatItDoes: 'Rides inside the arm and carries the gate connection.',
        failureSigns: 'Clunking, a loose gate connection, a blown motor fuse traced to washer placement.',
        verdict: 'repair',
      },
      {
        part: 'Key release',
        whatItDoes: 'Unlocks the arm for manual operation.',
        failureSigns: 'Key will not turn, release will not relock, a lost key.',
        verdict: 'service',
      },
      {
        part: 'Q230 post mounting brackets',
        whatItDoes: 'Attach the arm to the post. They are shared with the LiftMaster LA500.',
        failureSigns: 'Loose or bent brackets, post movement changing the arm angle.',
        verdict: 'adjust',
      },
    ],

    repairOrReplace: {
      summary:
        'A Miracle One is worth repairing when the fault is a fuse, batteries, limits, the release, or the gate itself, and many are. It is not worth sinking money into when the control board has failed. A parts distributor reports both Miracle boards discontinued with no direct substitute, which in practice means replacing the operator. Because the LA500 uses the same Q230 post brackets, that replacement is simpler than it sounds.',
      repair: [
        'Blown fuses traced to a binding gate or a traveler carriage problem',
        'Tired batteries, a failed transformer or a charging fuse',
        'Limit armatures out of adjustment, or a reverse sensor set too sensitive',
        'A key release left unlocked or stiff',
      ],
      replace: [
        'The Q222 or Q223 control board has failed. With no direct substitute reported, the operator has to be replaced. The LiftMaster LA500 is the closest modern equivalent named by the distributor and fits the same Q230 brackets.',
        'The traveler carriage, limit harness or motor harness is worn and the part is not available. The distributor lists several of these as no longer available or in limited supply.',
        'The gate is larger than 15 ft or heavier than 600 lbs. The arm was never rated for it, and repeated fuse and alarm faults will continue.',
      ],
    },

    warranty: {
      manufacturer:
        'No manufacturer warranty term for the Miracle One was found in the documentation reviewed. The model is discontinued, so any unit still in service is very likely outside its original coverage.',
      notes: [
        'If you have the original paperwork, the warranty terms will be on the card or in the installer’s documents.',
        'Any replacement operator carries its own manufacturer warranty. Check its current terms at the time of purchase.',
      ],
    },

    dfw: [
      {
        heading: 'Heat, batteries and a sun-baked control box',
        body: [
          'The Miracle One depends on its batteries every cycle, and the plastic control box is often mounted in full Texas sun. Summer heat shortens battery life, and the first sign is a gate that slows in the afternoon or quits during a summer outage. Watching the Batteries Low and Charge OK LEDs tells you whether the problem is the batteries, the charging fuse or the transformer.',
        ],
      },
      {
        heading: 'Lightning and the ground rod',
        body: [
          'Elite’s manual is specific about grounding, because lightning can be drawn toward the operator. It calls for an earth ground rod within 3 feet of the control box, 12-gauge ground wire, and no splices. Spring thunderstorms in DFW are when an ungrounded or badly grounded Miracle One loses its surge suppressor board, fuses or control board. Given that the control board has no direct substitute, the ground connection is worth checking on any service visit.',
        ],
      },
      {
        heading: 'Posts, hinges and clay soil',
        body: [
          'A linear arm depends on a fixed geometry between the post bracket and the gate. When expansive clay leans a post or drops a hinge, the gate starts to drag on the driveway or bind. Elite lists both of those as reasons the alarm LED comes on, and the extra load blows the motor fuse. Fixing the post or hinge is often the whole repair.',
        ],
      },
    ],

    process: [
      {
        step: 'Read the LEDs',
        body: 'System On, Power, Charge OK, Batteries Low, the replace-fuse LEDs, Alarm Sensor and the receiver LED narrow the fault before any tools come out.',
      },
      {
        step: 'Unlock the arm and swing the gate',
        body: 'Key release unlocked, gate moved through its full swing by hand to find hinge bind, driveway contact or post movement, then relocked until it clicks.',
      },
      {
        step: 'Fuses, batteries and transformer',
        body: 'Each fuse checked against Elite’s ratings, batteries tested under load, and 24 VAC confirmed at the surge board.',
      },
      {
        step: 'Arm, carriage and limits',
        body: 'Traveler carriage and washers, limit armatures and switches, and Q230 brackets and post.',
      },
      {
        step: 'Honest verdict and quote',
        body: 'If the board has failed, we explain the replacement path before quoting. Otherwise we repair, reset the reverse sensor with the gate moving, and test both directions.',
      },
    ],

    faqs: [
      {
        q: 'Can you still get parts for an Elite Miracle One?',
        a: 'Some. Fuses, batteries, transformers, remotes and many mechanical parts are still sold. A distributor reports that the Q222 and Q223 control boards, the limit switch harness, the motor harness and some brackets are no longer available, and the traveler carriage is in limited supply.',
      },
      {
        q: 'What replaced the Miracle One?',
        a: 'Chamberlain lists the Miracle One as discontinued. A parts distributor names the LiftMaster LA500 as the closest modern equivalent and notes it uses the same Q230 mounting brackets.',
      },
      {
        q: 'How do I open my gate if the power is out?',
        a: 'Insert the key and turn it counterclockwise to unlock the arm, then swing the gate open. Afterward, turn the key clockwise while pushing or pulling the gate until it clicks, or it will not run when the power returns.',
      },
      {
        q: 'Why does my Miracle One keep blowing fuses?',
        a: 'Elite’s guidance is that a repeatedly blowing motor-side fuse means the operator is not running smoothly. Check the hinges and gate swing, the washer placement at the traveler carriage, and the motor wiring before replacing the fuse again.',
      },
      {
        q: 'My gate stops halfway by itself. Is the board failing?',
        a: 'Usually not. Elite says a gate that stops in the middle of the driveway has its reverse sensor set too sensitive. Adjust it with the gate moving, after making sure the gate is not binding.',
      },
      {
        q: 'Is the Miracle One related to LiftMaster?',
        a: 'Yes. It was made by Elite Access Systems, which Chamberlain, LiftMaster’s parent company, acquired in September 2003. The manual in circulation was published by Chamberlain Professional Products.',
      },
    ],

    relatedModels: ['elite/sl595-repair', 'liftmaster/la500-repair'],
    relatedServices: ['gate-motor-repair', 'electric-gate-repair', 'automatic-gate-repair', 'gate-installation'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Elite Miracle-1 instruction manual (Chamberlain Professional Products, © 1998–2004), distributor-hosted PDF', url: 'https://gatesnfences.com/files/Elite_Miracle_One_Swing_Gate_Opener_Operators_Manual.pdf' },
      { label: 'Chamberlain Group support — Elite Miracle One Instruction Manual (Discontinued)', url: 'https://support.chamberlaingroup.com/s/article/GATE-Elite-Miracle-One-Instruction-Manual-1484145514277' },
      { label: 'Gatehouse Supplies — Elite Miracle One parts breakdown (board discontinuation, Q230/LA500 brackets)', url: 'https://www.gatehousesupplies.com/elite-miracle-parts-breakdown-s/53.htm' },
      ACQUISITION,
    ],
    toConfirm: [
      'Discontinued Q222/Q223 boards with “no direct substitute”, and the LA500 as closest equivalent, come from a parts distributor, not LiftMaster. Confirm with LiftMaster or a second distributor before telling a customer the operator must be replaced.',
      'The Q230 bracket compatibility with the LA500 (distributor claim).',
      'Manufacturer warranty term for the Miracle One (not found).',
      'Battery type and backup cycle count. The manual reviewed does not state them clearly; a retailer summary claims 100–200 cycles, which is omitted.',
      'Close-timer range. The manual gives 3–60 s on the specifications page and 1–60 s on the timer page, so no figure is stated.',
      'Whether the Miracle One carried any UL 325 listing. The manual includes UL 325 installation instructions, but no listing statement was captured.',
      'Add "liftmaster/la500-repair" to relatedModels once that page exists (the validator rejects links to missing pages).',
    ],
    indexable: true,
  },
]
