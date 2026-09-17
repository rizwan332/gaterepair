/**
 * LiftMaster residential operator model pages.
 *
 * Research notes (never rendered):
 *  - Specs, codes and warranty terms come from the LiftMaster manuals listed in
 *    each page's `sources`. Where a manual revision and a distributor disagree
 *    (e.g. LA412UL cycles/day) the manual wins and the conflict is in toConfirm.
 *  - "LA500XL" is a distributor package name (LA500DC arm(s) + large metal "XL"
 *    control box + 33AH batteries + solar), not a separate operator. It is
 *    served as a section, aliases and FAQ on the LA500 page.
 *  - The case-study claim that the LA500 "shares a control platform" with the
 *    LA400 is only partly right: same UL-era main board family, interface and
 *    code list, but the board identifies the model from a product-ID harness in
 *    the control box's reset switch, and the LA500 box is transformer-run
 *    (toroidal transformer + bridge rectifier) where the LA400 box is
 *    battery-run from a plug-in charger. See toConfirm on the LA400 page.
 */

import type { ModelPage } from './types'

const SRC = {
  la400ulManual: {
    label: 'LiftMaster LA400UL installation manual (01-39384B, PDF)',
    url: 'https://embed.widencdn.net/download/cgi/jt2mmta55k/0139384.pdf?u=mcyivk&attachment=true',
  },
  la400ulSupport: {
    label: 'LiftMaster support: LA400UL installation manual article',
    url: 'https://support.chamberlaingroup.com/s/article/LA400UL-Installation-Manual',
  },
  la400Legacy: {
    label: 'LiftMaster LA400 & LA400-S owner’s manual (original LA400, PDF)',
    url: 'https://ismartgate.com/manuals/LiftMaster_LA400S_manual.pdf',
  },
  la500Manual: {
    label: 'LiftMaster LA500 series installation manual (01-37069B, PDF via LDI)',
    url: 'http://ldi.com/liftmaster-la500-manual.pdf',
  },
  la412Manual: {
    label: 'LiftMaster LA412 (UL-era) installation manual (01-37071B, PDF via LDI)',
    url: 'http://ldi.com/liftmaster-la412-manual.pdf',
  },
  la412Legacy: {
    label: 'LiftMaster LA412 & LA412-S owner’s manual (original LA412, PDF)',
    url: 'https://gatehousesupplies.com/product_images/manuals/la412%20manual.pdf',
  },
  uGuide: {
    label: 'LiftMaster troubleshooting guide for 2016 UL 325 operators (LA400U, LA412U, LA500U, RSW12U, RSL12U…)',
    url: 'https://www.afence.com/mm5/graphics/pdf/LiftMaster/LiftMasterUtroubleshoot.pdf',
  },
  addendum: {
    label: 'LiftMaster addendum for LA500UL, LA412UL and LA400UL (01-39489, 2018)',
    url: 'https://gatedepot.com/amfile/file/download/file/57135/product/29521/',
  },
  k1d8388: {
    label: 'Distributor listing: LiftMaster K1D8388-1CC main board for LA400U/LA412U/LA500U',
    url: 'https://www.southwestautomated.com/all-gate-operators/replacement-parts/gate-operator-circuit-board/liftmaster_k1d8388-1cc',
  },
  k1d8389: {
    label: 'Distributor listing: LiftMaster K1D8389-1CC main board for RSW12U/RSL12U',
    url: 'https://gatehousesupplies.com/01-k1d8389-1cc-control-board/',
  },
  rsw12ulManual: {
    label: 'LiftMaster RSW12UL installation manual (PDF)',
    url: "https://shop.bobsdist.com/documents/RSW12UL_Owner's_Manual.pdf",
  },
  rsw12ulSupport: {
    label: 'LiftMaster support: RSW12UL installation manual article',
    url: 'https://support.chamberlaingroup.com/s/article/RSW12UL-Installation-Manual',
  },
} as const

// ─────────────────────────────────────────────────────────────────────────────
// LA400
// ─────────────────────────────────────────────────────────────────────────────

const la400: ModelPage = {
  slug: 'la400-repair',
  brandSlug: 'liftmaster',
  model: 'LA400',
  aliases: ['LA400UL', 'LA400U', 'LA400PKGUL', 'LA400DC', 'LA400DCS', 'LA400-S'],
  descriptor: 'residential 24 V DC linear-actuator swing gate operator',
  gateType: 'swing',
  duty: 'residential',
  status: 'discontinued',
  statusNote:
    'The original LA400 and the LA400U were superseded by the LA400UL. At least one LiftMaster parts distributor now lists the LA400UL itself as obsolete; UL-era boards, batteries and arms are still sold.',

  title: 'LiftMaster LA400 Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster LA400 beeping three times, stopping short or showing a code? We diagnose LA400 and LA400UL battery, board and arm faults across DFW. Call 24/7.',
  h1: 'LiftMaster LA400 Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair LiftMaster LA400 linear-arm swing operators across Dallas–Fort Worth — the original LA400 and the later LA400U and LA400UL. The fault this model is best known for is a gate that beeps three times on command and then crawls or quits partway, and on an LA400 that points at the 24-volt battery pack before the arm or the board.',
  heroPoints: [
    'We pull the stored code history from UL-era LA400 boards before we change a single part',
    'We test the plug-in charger and each 12 V battery separately, because the LA400 runs from its batteries',
    'We check your leaf against LiftMaster’s weight-for-length table before recommending any arm upgrade',
  ],

  identify: {
    body: [
      'LiftMaster has built the LA400 in three generations, and the generation decides which board, which manual and which fault-reporting system you are dealing with. The original LA400, paired with the LA400-S for a second leaf, reports faults by blinking an LED a set number of times. The LA400U and LA400UL were built for the 2016 UL 325 requirements: they use a board with a two-digit diagnostic display and will not move the gate until a monitored photo-eye or edge is connected.',
      'On either UL-era unit the display settles the question. At power-up it shows “LA” and then “40”, followed by the firmware version. The same board family reads “42” on an LA412 and “50” on an LA500, so a faded or missing label is not a problem.',
      'At the gate, the LA400 is a slim linear actuator bolted between a post bracket and a gate bracket, with a keyed release lever near the motor. The primary arm is sold as the LA400DC and the second-leaf arm as the LA400DCS. A wired dual install runs both arms from one control box; a wireless dual install needs a control box for each arm.',
    ],
    lookFor: [
      'An LA400 model label on the control box housing',
      '“LA 40” on the two-digit display at power-up (LA400U and LA400UL)',
      'A blinking LED instead of a display on older boards (original LA400)',
      'A reset button on the side of the control box',
      'Two 12 V batteries in a plastic box, or 33AH batteries in a large metal box on solar installs',
      'A keyed release lever on the arm near the motor',
    ],
  },

  overview: [
    {
      heading: 'Battery-run, with a plug-in charger',
      body: [
        'LiftMaster describes the LA400UL power system as “24 Vdc Battery Run / Direct Plug-in Transformer Charge.” Two 12-volt batteries wired in series drive the motor on every cycle, and a plug-in transformer (LiftMaster APOW3) keeps them topped up. That is why an LA400 keeps opening through an outage, and also why this operator tends to fade rather than fail outright: a tired battery or a charger that has quit shows up first as slow travel and warning beeps.',
        'LiftMaster’s troubleshooting guide for the LA400U gives the reference numbers: about 34 volts DC from the transformer at the CHARGER terminals, and 12.8 to 13.3 volts from each fully charged battery measured on its own. The board treats less than 23 volts across the pack as critically low. From there the BATT FAIL switch decides what happens: set to OPEN, the gate opens and latches open until power recovers; set to CLOSE, it latches shut.',
      ],
    },
    {
      heading: 'A weight rating that changes with leaf length',
      body: [
        'The LA400UL is not rated to one gate weight. LiftMaster’s table allows 850 lb on a 10-foot leaf, 750 lb at 12 feet, 650 lb at 14 feet and 550 lb at 16 feet, because a longer leaf puts more leverage on the actuator. The original LA400 was listed more simply at 16 feet and 550 lb.',
        'The duty rating is 100 cycles a day with a four-minute maximum run time. A single-family driveway sits comfortably inside that. A solid decorative iron leaf near the top of the table, or a shared drive with heavy traffic, pushes the arm toward its limits — and an LA400 working near its limit tends to announce it with nuisance reversals and slow travel long before anything breaks.',
      ],
    },
    {
      heading: 'How the UL-era board decides to stop',
      body: [
        'An LA400U or LA400UL guards against entrapment two ways. The first is inherent: the board watches motor RPM and current, and if the arm slows or labors twice in a row the alarm sounds for up to five minutes and the operator waits for a reset. The second is external: it will not run without at least one monitored photo-eye or edge, and the main board takes up to two close-direction devices and one open-direction device, with more through the optional expansion board.',
        'Limit positions are learned at the board with the SET OPEN, SET CLOSE and MOVE GATE buttons, and a REVERSAL FORCE dial fine-tunes sensitivity afterward. LiftMaster calls for an obstruction test after every limit or force change. So a UL-era LA400 that stops short often needs its limits re-learned and the cause of the reversal cleared, not a new part.',
      ],
    },
    {
      heading: 'LA400 and LA500: one board family, different power systems',
      body: [
        'The UL-era LA400, LA412 and LA500 share a main board family and the same two-digit code list. The LA400UL manual lists its board as K1D8388-1CC, and parts distributors sell that board for all three. What tells the board which operator it is running is a product ID harness built into the reset switch assembly, which carries a different part number for each model. Move a board to a different operator type and it reports code 36.',
        'The real difference is inside the box. An LA500 control box is transformer-run through a toroidal transformer with battery backup and is rated for 300 cycles a day; an LA400 box is battery-run from a plug-in charger and rated for 100. An LA500 arm on an existing LA400 box can be a sensible fix for a gate that has outgrown its arm, but the product ID and the power supply belong in that decision. We check both before recommending it.',
      ],
    },
  ],

  specs: [
    { label: 'Usage class (LA400UL)', value: 'Class I, II and III vehicular swing gates' },
    { label: 'Power system (LA400UL)', value: '24 Vdc battery run, direct plug-in transformer charge' },
    { label: 'Main AC supply (LA400UL)', value: '120 Vac, 0.5 A (6.5 A including accessory outlets)' },
    {
      label: 'Maximum gate weight / length (LA400UL)',
      value: '850 lb / 10 ft; 750 lb / 12 ft; 650 lb / 14 ft; 550 lb / 16 ft',
    },
    { label: '90° travel time (LA400UL)', value: '15–18 seconds (varies with mounting dimensions)' },
    { label: 'Maximum travel range', value: '115°' },
    { label: 'Maximum daily cycle rate', value: '100 cycles per day' },
    { label: 'Maximum duty cycle', value: '4 minutes on' },
    { label: 'Operating temperature (LA400UL)', value: '−4 °F to 140 °F' },
    { label: 'Solar input (LA400UL)', value: '24 Vdc at 60 W maximum; minimum two 10 W panels in series' },
    { label: 'Batteries', value: 'Two 12 V 7AH (standard box) or two 33AH (large metal solar box)' },
    { label: 'Diagnostic display (UL-era)', value: 'Two-digit; shows “LA 40” at power-up' },
    { label: 'Original LA400 rating', value: '16 ft / 550 lb, 100 cycles per day, 14–18 s to 90°, −4 °F to 122 °F' },
    { label: 'Manufacturer warranty', value: 'Two-year limited (LiftMaster)' },
  ],

  symptoms: [
    {
      symptom: 'It beeps three times when I press the remote, then barely moves',
      causes:
        'That is the LA400’s low-battery warning. The usual causes are batteries at the end of their life, a plug-in charger that is no longer charging, a blown battery fuse, or on a solar install an array too small or too shaded to keep up.',
      whatWeDo:
        'We measure each battery on its own and under load, read charger output at the CHARGER terminals, check the fuses, and on solar confirm the panels are producing in full sun. Batteries are replaced only if they fail those checks.',
    },
    {
      symptom: 'The display flashes 93 or 94 and the alarm sounds for minutes',
      causes:
        'Codes 93 and 94 are RPM/stall reversals on the first and second arm. The arm slowed or stalled twice in a row — a binding hinge, a leaf dragging where a post has moved, something in the path, a release lever not fully engaged, or a gate heavier than the table allows for its length.',
      whatWeDo:
        'We reset the alarm, release the arm and swing the leaf by hand to find any bind, confirm the release lever and key are fully engaged, then weigh the leaf against LiftMaster’s weight-for-length table before touching the electronics.',
    },
    {
      symptom: 'The gate won’t move at all and the display shows 60',
      causes:
        'Code 60 means the board cannot find a single monitored entrapment device. A photo-eye has been unplugged or knocked out of alignment, a sensor wire is cut, an older non-monitored sensor was fitted during a past repair, or the eye itself has failed.',
      whatWeDo:
        'We test each monitored sensor and its wiring, re-learn the devices at the board, and realign or replace the eye. We do not bypass it — the operator is designed not to run without one.',
    },
    {
      symptom: 'One leaf opens and the other just sits there',
      causes:
        'On a dual LA400 that narrows the fault to one arm, its cable and rear connector, or its output on the board. Code 33 means the second arm’s linear drive reads as disengaged; code 54 means a wirelessly paired second operator is not answering.',
      whatWeDo:
        'We check the second arm’s release and connector, then run each arm from the other output to see whether the fault follows the arm or stays with the board. On wireless pairs we confirm the second box has power before re-pairing.',
    },
    {
      symptom: 'It stops a foot short of closed, or reverses right at the end',
      causes:
        'Codes 38 and 39 flag a limit set too close to a hard stop on arm 1 or arm 2, so the arm reaches the stop before its learned position. LiftMaster also notes the arm runs slow after a complete loss of power until it finishes one full open-and-close cycle.',
      whatWeDo:
        'We let the arm complete a full cycle after any power loss, then re-learn the open and close limits clear of the stops and run LiftMaster’s obstruction test before we leave.',
    },
    {
      symptom: 'No display, no beep, nothing',
      causes:
        'No power is reaching the board: batteries run flat with the charger also failed, a blown ATC fuse, an outlet or breaker off at the gate, or a failed control board.',
      whatWeDo:
        'We trace power from the breaker to the transformer, then to the batteries and fuses, and only condemn the board once supply voltage is proven at its input.',
    },
    {
      symptom: 'Code 36 or 37 appeared right after a board was changed',
      causes:
        'A product ID error or failure. The new board has not accepted the model identity from the reset switch harness, the harness is damaged or unplugged, or limits from a previous installation are still stored.',
      whatWeDo:
        'We reseat or replace the product ID harness, power down for the full 15 seconds LiftMaster specifies, erase the old limits and set new ones.',
    },
    {
      symptom: 'On solar it is fine in the afternoon but weak first thing in the morning',
      causes:
        'Overnight standby draw and the first cycles of the day are coming out of batteries the array did not refill. LiftMaster’s minimum for an LA400UL is two 10 W panels in series, and shade or extra accessories raise what is needed.',
      whatWeDo:
        'We compare panel output, battery capacity and accessory standby draw against LiftMaster’s solar guide, then add panel capacity or trim the draw rather than keep replacing batteries.',
    },
  ],

  components: [
    {
      part: 'LA400DC / LA400DCS actuator arm',
      whatItDoes: 'The 24 V motor and drive that push and pull the leaf; the DCS is the second-leaf arm.',
      failureSigns: 'Stall reversals on a free-swinging gate, grinding, an arm that will not run from either board output, a release that will not lock.',
      verdict: 'repair',
    },
    {
      part: 'Main control board (K1D8388-1CC on the LA400UL)',
      whatItDoes: 'Runs limits, force sensing, radio, monitored-sensor inputs, battery charging and the two-digit code display.',
      failureSigns: 'Code 31 that survives a proper reboot, no display with supply voltage proven, batteries that never charge.',
      verdict: 'replace-part',
    },
    {
      part: 'Batteries (two 12 V 7AH as standard)',
      whatItDoes: 'Power every cycle and carry the gate through outages. LiftMaster says not to mix 7AH and 33AH batteries.',
      failureSigns: 'Three beeps on command, BATT LOW LED, slow travel, a charged battery reading under 12.8 V on its own.',
      verdict: 'replace-part',
    },
    {
      part: 'APOW3 plug-in transformer',
      whatItDoes: 'Charges the batteries from the 120 V outlet in the control box.',
      failureSigns: 'Well under 34 V DC at the CHARGER terminals; batteries that go flat on a gate with AC available.',
      verdict: 'replace-part',
    },
    {
      part: 'Reset switch with product ID',
      whatItDoes: 'Stops the gate, silences the alarm, and tells the board it is running an LA400.',
      failureSigns: 'Codes 36 or 37; an alarm that will not clear.',
      verdict: 'replace-part',
    },
    {
      part: 'Monitored photo-eyes and edges (LMRRUL, LMTBUL, edge kits)',
      whatItDoes: 'External entrapment protection the UL-era board requires before it will move.',
      failureSigns: 'Code 60; close-cycle reversals with nothing in the way (codes 70–75); an input LED stuck on.',
      verdict: 'adjust',
    },
    {
      part: 'Release lever and key',
      whatItDoes: 'Disengages the drive so the leaf can be moved by hand.',
      failureSigns: 'Code 32 or 33 (drive disengaged); a stiff release that will not fully re-engage.',
      verdict: 'service',
    },
    {
      part: 'ATC fuses (20 A and 15 A)',
      whatItDoes: 'Protect the battery and board circuits.',
      failureSigns: 'A dead board after a surge; one circuit out while the rest works.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'Most LA400 faults are power, sensor or limit problems, and all three are repairable without touching the arm. The honest exception is a gate that has outgrown the LA400’s weight-for-length rating or its 100-cycle duty: fixing that with another LA400 arm just restarts the same wear.',
    repair: [
      'Low-battery beeps, slow travel or outage failures traced to the batteries, the plug-in charger or a fuse',
      'Code 60 and close-cycle reversals caused by a misaligned, unplugged or failed monitored eye',
      'Hard-stop limit codes 38 and 39 after a power loss or a shifted post',
      'A failed main board or product ID harness on an arm that still runs cleanly',
      'One arm of a dual pair failing while the other arm and the box test good',
    ],
    replace: [
      'The leaf is heavier than LiftMaster’s table allows for its length — for example over 550 lb on a 16-foot leaf. An LA500-class arm, rated to 800 lb at 16 feet, is the usual step up; we check the box’s product ID and power supply before recommending it on the existing control box.',
      'The entrance needs more than 100 cycles a day, such as a shared drive or small community gate. That points to a transformer-run operator like the LA500, or a commercial model such as the CSW24UL for heavy traffic.',
      'An original, pre-UL LA400 with a failed board, where moving to a UL-era board brings the monitored-sensor requirement with it and the conversion cost approaches a current operator.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster lists a two-year limited warranty in the LA400UL installation manual, covering defects in materials and workmanship for the first purchaser at the property where it was first installed, counted from the date of purchase. The original LA400 owner’s manual also states a two-year limited warranty.',
    notes: [
      'The published warranty excludes battery replacement, the gate and its hardware such as hinges and alignment, damage from improper installation or care, and unauthorized repairs or alterations.',
      'LiftMaster asks owners to call its support line before dismantling a unit they believe is defective, and to keep a dated proof of purchase.',
      'The original LA400 owner’s manual has spaces for the arm and control box serial numbers and the installation date — worth checking if your installer filled them in.',
      'Shield is not a LiftMaster authorized dealer. If your LA400 is still inside two years, talk to your installer before any third-party repair.',
    ],
  },

  dfw: [
    {
      heading: 'Summer heat and a battery that works every cycle',
      body: [
        'The LA400UL is rated to 140 °F and the original LA400 to 122 °F. On a west-facing pier in a Dallas–Fort Worth August, a closed control box can run well above the air temperature, and heat shortens lead-acid battery life. Because an LA400 draws on its batteries for every cycle rather than only in outages, it feels that aging sooner than a transformer-run operator would.',
      ],
    },
    {
      heading: 'Clay soil and actuator geometry',
      body: [
        'An LA400’s travel and speed depend on its mounting geometry — LiftMaster notes that travel time and range change with the A and B dimensions between the hinge and the post bracket. When expansive clay heaves or settles a post, those dimensions change, and the result is hard-stop codes, reversals near the end of travel, or a leaf that no longer reaches its limit. Re-learning limits helps; if the post has moved significantly, the bracket or post needs attention first.',
      ],
    },
    {
      heading: 'Storms, outages and the BATT FAIL choice',
      body: [
        'Spring thunderstorms bring both power cuts and surges. An LA400 rides through a short outage on its batteries, but in a long one the BATT FAIL setting decides whether a nearly flat gate latches open or closed — a setting worth choosing deliberately if you have livestock, deliveries or a caregiver arriving. After a lightning surge we check the charger and fuses before assuming the board is gone.',
      ],
    },
    {
      heading: 'Solar LA400s on acreage',
      body: [
        'On long drives north and west of the metro, where running AC to the gate is impractical, the LA400UL can run on solar. LiftMaster’s minimum is two 10 W panels in series; 33AH batteries need the large metal solar control box, and photo-eye heaters are not recommended on solar. Hail is the local risk: a cracked panel can look fine from the driveway while producing a fraction of its rated output.',
      ],
    },
  ],

  process: [
    {
      step: 'Read what the operator is reporting',
      body: 'On a UL-era board we pull the code history — it stores the last 20 codes, newest first — before changing anything. On an original LA400 we count the LED blinks. The code tells us whether we are chasing power, sensors, limits or the arm.',
    },
    {
      step: 'Release the arm and move the gate by hand',
      body: 'With the key turned and the release lever disengaged, the leaf should swing smoothly through its full travel. A bind here is a hinge or post problem, and no electrical repair will fix it.',
    },
    {
      step: 'Measure the 24-volt system',
      body: 'Each battery off the harness, the pack under load, charger output at the CHARGER terminals, and every fuse. On solar, panel output in sun at the board’s power input.',
    },
    {
      step: 'Check the monitored sensors and inputs',
      body: 'The input LEDs show whether an eye, edge or command input is stuck active. We confirm at least one monitored device is learned and aligned.',
    },
    {
      step: 'Repair, re-learn and test',
      body: 'After the repair we re-learn limits, set the reversal force, run LiftMaster’s obstruction test on each arm, and clear the code history so the next fault reads cleanly.',
    },
  ],

  faqs: [
    {
      q: 'What does “LA 40” on my gate’s display mean?',
      a: 'It is the board identifying itself as an LA400 at power-up, followed by the firmware version. If you see “42” or “50” instead, you have an LA412 or an LA500, which have different power systems and ratings.',
    },
    {
      q: 'Why does my LA400 beep three times?',
      a: 'Three beeps with a command is LiftMaster’s low-battery warning on this operator, and the gate may still run slowly. It is worth dealing with before the pack drops below the critical level, when the gate latches open or closed until power recovers.',
    },
    {
      q: 'Can an LA500 arm go on my LA400 control box?',
      a: 'Sometimes, and we have done it on a heavy iron gate where the box and board tested good. It is not a blind swap: the board identifies the operator through a product ID harness in the control box, and the LA400 box is battery-run from a plug-in charger while an LA500 box is transformer-run. We check both before recommending it.',
    },
    {
      q: 'What do the blinks on an original LA400 board mean?',
      a: 'The LA400 & LA400-S owner’s manual lists 1 blink for no stop switch connected, 2 or 3 for the gate 1 or gate 2 arm disengaged, 4 for both arms disengaged, 5 for an RPM reversal, 6 for a force reversal, 7 for a processor reset, 8 for a ROM check failure, 9 for a RAM check failure, and 10 for an EEPROM failure that requires resetting the limits.',
    },
    {
      q: 'Is the LA400 still made?',
      a: 'The original LA400 and the LA400U were replaced by the LA400UL, and some LiftMaster parts distributors now list the LA400UL as obsolete too. Boards, batteries and replacement arms for the UL-era units are still sold, so a working LA400UL is rarely a reason to replace the whole system.',
    },
    {
      q: 'Will my LA400 open during a power outage?',
      a: 'Yes, until the batteries run down — it runs from them on every cycle anyway. How long depends on battery condition and on how many accessories are drawing power. Once the pack is critically low, the BATT FAIL switch on the board decides whether the gate latches open or closed.',
    },
  ],

  relatedModels: ['liftmaster/la500-repair', 'liftmaster/la412-repair', 'liftmaster/rsw12ul-repair', 'liftmaster/csw24ul-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
  imageSlugs: ['liftmaster-22', 'liftmaster-23', 'liftmaster-24'],
  projectSlugs: ['liftmaster-la400-to-la500-arm-upgrade'],
  videoSlugs: ['liftmaster-gate-motor-repair-22'],

  sources: [
    SRC.la400ulManual,
    SRC.la400ulSupport,
    SRC.la400Legacy,
    SRC.uGuide,
    SRC.la500Manual,
    SRC.k1d8388,
    { label: 'DDM Garage Doors listing: LA400UL marked obsolete', url: 'https://ddmgaragedoors.com/parts/part/OGATLM-LA400UL.html' },
  ],
  toConfirm: [
    'Production status: only one distributor (DDM Garage Doors) was found listing the LA400UL as obsolete; liftmaster.com blocked automated access. Confirm with a LiftMaster dealer and name a successor only if LiftMaster names one.',
    'Case study liftmaster-la400-to-la500-arm-upgrade: LiftMaster does not document an LA500 arm on an LA400 control box. The board identifies the model from the product ID in the control box reset switch (LA400 K94-36408-2 vs LA500 K94-36408-1), and the LA500 box is transformer-run (toroidal transformer) where the LA400 box is battery-run from an APOW3 plug-in charger. Technician to confirm whether the product ID harness/transformer were changed on that job and what the display showed afterward.',
    'Original-LA400 blink code list is from the LA400 & LA400-S owner’s manual; confirm which LED blinks on that board before quoting the list to customers.',
    'Code 60 (minimum monitored entrapment device) was read from the LA500 and RSW12UL code tables and the U-series guide; the LA400UL table was only partly legible in extraction.',
    'Assumption that a UL-era board fitted to an original LA400 requires monitored sensors — technician to confirm the retrofit board (e.g. K1D8388-1CCMC) and its requirements.',
    'The existing landing page claim that LA400 batteries last “three to five years” was not verified in any LiftMaster source and was not carried forward.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// LA412
// ─────────────────────────────────────────────────────────────────────────────

const la412: ModelPage = {
  slug: 'la412-repair',
  brandSlug: 'liftmaster',
  model: 'LA412',
  aliases: ['LA412UL', 'LA412U', 'LA412PKGUL', 'LA412DC', 'LA412DCS', 'LA412-S'],
  descriptor: 'residential 12 V DC solar-only linear-actuator swing gate operator',
  gateType: 'swing',
  duty: 'residential',
  status: 'current',
  statusNote:
    'The original LA412 was superseded by the LA412U and then the LA412UL, which LiftMaster lists as its residential solar gate opener.',

  title: 'LiftMaster LA412 Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster LA412 solar gate dying overnight or beeping three times? We test the panel, 12 V battery and board on LA412 operators across DFW. Call 24/7.',
  h1: 'LiftMaster LA412 Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair LiftMaster LA412 solar swing operators across Dallas–Fort Worth. The LA412 is a 12-volt, solar-only arm, so when one quits overnight or after a gray week the diagnosis starts with the energy budget — panel, battery and standby draw — not with the motor.',
  heroPoints: [
    'We read panel voltage at the J15 plug in full sun before we blame the battery',
    'We total the standby draw of every accessory against what a 10–30 W array can put back',
    'We read the “LA 42” board’s code history, or count LED flashes on an original LA412',
  ],

  identify: {
    body: [
      'At the gate an LA412 looks much like its 24-volt siblings — a linear actuator between a post bracket and a gate bracket, and it even uses the same bracket hardware kit — so the confirmation is in the power system. A UL-era LA412 has no AC supply at all: LiftMaster lists its main supply as “N/A – Solar Only,” and the package ships with a 12-volt, 10-watt solar panel. If there is a 120-volt outlet or a plug-in transformer in the box, it is not an LA412.',
      'On the UL-era board the power-up display reads “LA” then “42.” The original LA412, paired with the LA412-S for a second leaf, has a single diagnostic LED that flashes a count instead, and its owner’s manual places the model number label inside the control box. That older model could also take an optional low-voltage battery charger, which the UL-era version does not list.',
      'Arms are sold as the LA412DC for the primary leaf and the LA412DCS for a second leaf, which comes with its own junction box and extension cable. Both carry a 12-volt motor, so an LA412 arm and an LA400 arm are not a like-for-like swap.',
    ],
    lookFor: [
      'A post-mounted 12 V solar panel wired to the box, and no AC outlet inside it',
      '“LA 42” on the two-digit display at power-up (UL-era LA412)',
      'A single flashing diagnostic LED on older boards (original LA412)',
      'The model number label inside the control box',
      'One or two 12 V 7AH batteries, or a single 33AH battery in a large metal box',
      'Primary arm LA412DC; second-leaf arm LA412DCS with a junction box',
    ],
  },

  overview: [
    {
      heading: 'A solar-only, 12-volt design',
      body: [
        'The UL-era LA412 runs “12 Vdc Battery Run / Solar Charge,” with solar input capped at 30 watts. Every cycle comes out of the battery, and the only thing putting energy back is the panel. That puts the LA412 on a much tighter energy budget than the 24-volt LA400 and LA500, which accept up to 60 watts of solar or charge from AC.',
        'LiftMaster’s troubleshooting guide sets the checks: 12 volts DC, plus or minus 10 percent, on the DC POWER wires at the J15 plug with the panel in full sun, and 12.8 to 13.3 volts from a fully charged battery taken off the harness. The board accepts one 7AH battery, two 7AH batteries wired in parallel, or a single 33AH battery, and 10 to 30 watts of 10-watt panels, also wired in parallel.',
      ],
    },
    {
      heading: 'Class I only, and 50 cycles a day',
      body: [
        'LiftMaster lists the UL-era LA412 for Class I — residential — use, where the LA400UL is listed for Class I through III. Its gate table uses the same weight-for-length steps as the LA400UL, from 850 lb on a 10-foot leaf down to 550 lb at 16 feet, but its maximum daily cycle rate is 50, half the LA400’s, and a 90-degree swing takes up to 23 seconds.',
        'Those 50 cycles are a ceiling, not a promise. LiftMaster’s solar charts assume clear panels and typical accessories, it does not support the LA412 where temperatures fall below −4 °F, and it notes that cycle rates can fall short of the chart anywhere that drops below 32 °F.',
      ],
    },
    {
      heading: 'Where the standby current goes',
      body: [
        'Between cycles an LA412 is still drawing power. LiftMaster’s manual lists about 4.2 mA for the main board with no remotes programmed, another 1.5 mA once remotes are learned, 3.9 mA with a myQ device programmed, 18.5 mA for the optional expansion board, and 6.6 mA for each plug-in loop detector. An expansion board and two loops can take a basic board’s overnight draw up six-fold.',
        'That arithmetic is why adding a keypad, a loop detector or myQ to a single-panel LA412 can tip it into a slow nightly deficit that only shows up days later. LiftMaster advises against photo-eye heaters on solar installs for the same reason.',
      ],
    },
    {
      heading: 'Same code list, 12-volt numbers',
      body: [
        'The UL-era LA412 shares its two-digit code list and control layout with the LA400 and LA500 — SET OPEN, SET CLOSE, MOVE GATE, a REVERSAL FORCE dial, and a product ID harness in the reset switch that identifies the model. What changes is the voltage behind the codes. Code 40, battery overvoltage, can mean a 24-volt battery arrangement has been fitted to this 12-volt system; code 42, no battery at boot, calls for replacing a battery that has fallen below 10 volts.',
        'The original LA412 reports differently. Its single LED flashes 2 times when the stop input is not connected, 3 for low battery voltage, 4 for low battery capacity, 5 or 7 for an RPM reversal or arm wiring fault on gate 1 or gate 2, 6 or 8 for a force reversal on either gate, and 9 to 11 for a possible memory chip failure. A steady heartbeat flash is normal.',
      ],
    },
  ],

  specs: [
    { label: 'Usage class (UL-era LA412)', value: 'Class I vehicular swing gates' },
    { label: 'Main AC supply', value: 'None — solar only' },
    { label: 'Power system', value: '12 Vdc battery run, solar charge' },
    { label: 'Solar input', value: '12 Vdc at 30 W maximum; 10 W panels wired in parallel' },
    {
      label: 'Maximum gate weight / length',
      value: '850 lb / 10 ft; 750 lb / 12 ft; 650 lb / 14 ft; 550 lb / 16 ft',
    },
    { label: '90° travel time', value: 'Under 23 seconds (varies with mounting dimensions)' },
    { label: 'Maximum travel range', value: '115°' },
    { label: 'Maximum daily cycle rate', value: '50 cycles per day' },
    { label: 'Maximum duty cycle', value: '4 minutes on' },
    { label: 'Operating temperature', value: '−4 °F to 140 °F' },
    { label: 'Inherent entrapment protection', value: 'Dual — RPM and current sense' },
    { label: 'Batteries', value: 'One 7AH, two 7AH in parallel, or one 33AH (12 V)' },
    { label: 'Diagnostic display (UL-era)', value: 'Two-digit; shows “LA 42” at power-up' },
    { label: 'Original LA412 rating', value: '16 ft at 550 lb; 12 V battery run, 11.5–14.5 Vdc operating range; −4 °F to 122 °F' },
    { label: 'Manufacturer warranty', value: 'Two-year limited (LiftMaster)' },
  ],

  symptoms: [
    {
      symptom: 'It works all afternoon and is dead by morning',
      causes:
        'The battery is not being refilled during the day: a shaded or dirty panel, a panel too small for the accessories connected, a failed connection or diode in the solar harness, or a board that has stopped charging.',
      whatWeDo:
        'We read panel voltage at the J15 DC POWER wires in full sun, check the board’s charging status LED, and total the standby draw against the panel wattage before replacing anything.',
    },
    {
      symptom: 'It beeps three times and the BATT LOW light is on',
      causes:
        'LiftMaster’s guide ties this pattern to a panel that is not charging the battery: the wrong number of panels, the wrong battery, a panel not facing south or in shade, accessories drawing too much, or more cycles than the solar zone supports.',
      whatWeDo:
        'We confirm one to three 10 W panels are wired in parallel, facing south within 150 feet of the operator and out of shade, then check the battery type and how many cycles the gate is really doing.',
    },
    {
      symptom: 'A brand-new battery went flat within weeks',
      causes:
        'When a healthy replacement also fails, the fault is upstream of it: panel output, the harness, or the board’s charging circuit. A battery wired in the wrong arrangement for a 12-volt system will also fail early.',
      whatWeDo:
        'We load-test the old battery before discarding it, and after any repair we confirm charge current is actually reaching the battery with the panel in sun.',
    },
    {
      symptom: 'The display shows 40 and the gate is running unusually fast',
      causes:
        'Code 40 is battery overvoltage. On a 12-volt LA412 the likely cause is batteries wired in series for 24 volts instead of the single or parallel arrangement the board expects, or the wrong harness.',
      whatWeDo:
        'We rewire to one 7AH battery, two 7AH batteries in parallel, or one 33AH battery with the matching harness, then clear the code history and retest.',
    },
    {
      symptom: 'My older LA412’s light flashes three or four times',
      causes:
        'On the original LA412, three flashes means low battery voltage and four means low battery capacity — the battery no longer holds a charge. The owner’s manual also says to check that the battery fuses are intact.',
      whatWeDo:
        'We check the fuses, replace the battery if its open-circuit voltage is below 11.5 V, the owner’s manual threshold, and confirm the panel is charging before we leave.',
    },
    {
      symptom: 'The gate stops partway and backs up, mostly on the longer leaf',
      causes:
        'An RPM or force reversal. On a 12-volt arm a sagging battery reduces available torque, so a leaf near the top of the weight-for-length table can trip reversals before the battery is fully flat. Binding hinges and shifted posts do the same.',
      whatWeDo:
        'We release the arm and swing the leaf by hand, charge-test the battery, and only then adjust limits or the REVERSAL FORCE dial.',
    },
    {
      symptom: 'After a hard freeze it barely runs',
      causes:
        'LiftMaster does not support the LA412 below −4 °F and warns that cycle rates drop below 32 °F. Cold batteries deliver less of their capacity, and a freeze usually arrives with overcast days that cut solar input at the same time.',
      whatWeDo:
        'We recharge or replace the battery, check the hinges and arm for ice binding, and review panel capacity if the gate has to keep working through winter weather.',
    },
  ],

  components: [
    {
      part: 'LA412DC / LA412DCS arm (12 V motor)',
      whatItDoes: 'Drives the leaf; the DCS is the second-leaf arm with its own junction box and extension cable.',
      failureSigns: 'Reversals on a free-moving gate with a healthy battery; an arm that will not run from either output.',
      verdict: 'repair',
    },
    {
      part: '12 V 10 W solar panel (SOLPNL10W12V)',
      whatItDoes: 'The only charge source; up to three panels, 30 W total, wired in parallel.',
      failureSigns: 'Low voltage at J15 in full sun, cracked glass after hail, shade, heavy dust.',
      verdict: 'service',
    },
    {
      part: '12 V battery (7AH 29-NP712, or one 33AH)',
      whatItDoes: 'Stores everything the gate uses overnight and on cloudy days; a 33AH battery needs the large metal solar box.',
      failureSigns: 'Three beeps, BATT LOW LED, code 42, less than 12.8 V when fully charged and rested.',
      verdict: 'replace-part',
    },
    {
      part: 'Main control board',
      whatItDoes: 'Runs the gate, the code display, the radio and the solar charging.',
      failureSigns: 'Code 31 after a proper reboot; panel voltage present at J15 but no charge reaching the battery.',
      verdict: 'replace-part',
    },
    {
      part: 'Solar and battery harness with blocking diode',
      whatItDoes: 'Connects panels and battery to the J15 plug; the diode keeps the battery from discharging back through the panel.',
      failureSigns: 'Correct voltage at the panel but not at the board; corroded connectors.',
      verdict: 'repair',
    },
    {
      part: 'Reset switch with product ID',
      whatItDoes: 'Stops the gate and silences the alarm, and identifies the operator to the board as an LA412.',
      failureSigns: 'Codes 36 or 37, especially after a board swap.',
      verdict: 'replace-part',
    },
    {
      part: 'Optional expansion board',
      whatItDoes: 'Adds loop, auxiliary relay and extra sensor inputs.',
      failureSigns: 'Codes 82 or 83 (communication with the main board); a solar system that stopped keeping up after it was added.',
      verdict: 'adjust',
    },
    {
      part: 'Monitored photo-eye',
      whatItDoes: 'The external entrapment device the board needs before it will run.',
      failureSigns: 'Code 60; reversals on close with nothing in the beam.',
      verdict: 'adjust',
    },
  ],

  repairOrReplace: {
    summary:
      'Most LA412 problems are energy-budget problems, and they are fixed with panel capacity, the right battery arrangement or less standby draw. Replacement makes sense when the gate’s use has outgrown what a 12-volt, 50-cycle, solar-only, Class I operator can deliver.',
    repair: [
      'Overnight or cloudy-week failures traced to panel shade, wattage, harness or battery',
      'A board whose charging circuit has failed while the arm still runs cleanly',
      'Codes 40, 41 or 42 caused by the wrong battery wiring or a damaged harness',
      'Reversals caused by a weak battery, a shifted post or binding hinges',
      'A failed or misaligned monitored eye',
    ],
    replace: [
      'The gate needs more than 50 cycles a day, or must stay reliable through long overcast spells. A 24-volt operator such as the LA400 or LA500 accepts up to 60 W of solar or AC charging and is rated for 100 or 300 cycles.',
      'The gate now serves more than a single household — a shared drive or small community entrance — which is outside the LA412’s Class I listing.',
      'An original LA412 with a failed board, where moving to a UL-era board and monitored sensors costs close to a current operator.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster lists a two-year limited warranty in the UL-era LA412 installation manual, covering defects in materials and workmanship for the first purchaser at the original installation, from the date of purchase.',
    notes: [
      'Battery replacement is excluded, as are the gate and its hardware, damage from improper installation or care, unauthorized repairs, and problems caused by interference.',
      'LiftMaster asks you to call before dismantling a unit you believe is defective and to keep dated proof of purchase.',
      'The original LA412 owner’s manual also states a two-year limited warranty.',
      'Shield is not a LiftMaster authorized dealer; a claim inside the warranty period goes through LiftMaster or your installer.',
    ],
  },

  dfw: [
    {
      heading: 'Long summer days, short winter ones',
      body: [
        'A south-facing LA412 panel does well from late spring through September. The pressure comes in winter, when shorter days and runs of gray weather cut the harvest while the standby draw stays the same. LiftMaster rates solar installs by zones of daily sun hours; if your gate struggles only between November and February, the array was sized for summer.',
      ],
    },
    {
      heading: 'Hail on the only charge source',
      body: [
        'An LA412 has no AC to fall back on, so the panel is a single point of failure. After a North Texas hailstorm it is worth inspecting the glass up close: a cracked panel can still show voltage in a quick morning check and still fall short of refilling the battery across a day.',
      ],
    },
    {
      heading: 'Heat and a small battery bank',
      body: [
        'The UL-era LA412 is rated to 140 °F, but a 12-volt battery in a sealed box on a sunny post ages fastest in exactly the conditions a Texas summer provides. On a system running from a single 7AH battery there is no second battery sharing the load, so capacity loss shows up quickly as short standby time.',
      ],
    },
    {
      heading: 'Panel placement on rural drives',
      body: [
        'The LA412 panel ships with a 10-foot cable, and LiftMaster’s guide wants panels facing south within 150 feet of the operator. On acreage gates north and west of the metro, a panel placed where trees or a barn clear it in summer can sit in shade once the winter sun is lower — LiftMaster warns about exactly that — and a gate that worked when it was installed in June starts failing in December.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the fault',
      body: 'On a UL-era board we pull the stored codes from the two-digit display; on an original LA412 we count the diagnostic LED flashes. Either way we know whether we are dealing with power, sensors or a reversal before opening anything else.',
    },
    {
      step: 'Release the arm and move the gate by hand',
      body: 'A 12-volt arm has little torque to spare. If the leaf binds anywhere in its swing, that is fixed first, because it will drain a solar battery on every cycle.',
    },
    {
      step: 'Test the solar input in sun',
      body: 'We measure the DC POWER wires at J15 — about 12 V in full sun — and check panel orientation, shade, cable length and the harness diode.',
    },
    {
      step: 'Test the battery off the harness',
      body: 'A fully charged 12 V battery should read 12.8 to 13.3 V. We confirm the arrangement is one 7AH, two 7AH in parallel, or one 33AH, and check the fuses.',
    },
    {
      step: 'Add up the draw and verify charging after the repair',
      body: 'We total the standby current of the board, radio, myQ and any expansion board or loops against panel wattage, then confirm charge is reaching the battery in sun before closing the box.',
    },
  ],

  faqs: [
    {
      q: 'Can I add more solar panels to an LA412?',
      a: 'Yes, within a limit. LiftMaster allows 10-watt, 12-volt panels wired in parallel up to 30 watts total — three panels. Beyond that, the operator itself is the constraint, and a 24-volt operator becomes the better answer.',
    },
    {
      q: 'Can an LA412 be plugged into AC power?',
      a: 'The UL-era LA412 is listed as solar only. The original LA412 could take an optional low-voltage battery charger. If you want a gate that charges from the grid, a 24-volt model such as the LA400 or LA500 is designed for it.',
    },
    {
      q: 'How many times a day can my LA412 open and close?',
      a: 'LiftMaster’s maximum is 50 cycles a day, and its solar charts show fewer in zones with less sun and in colder weather. Every accessory drawing standby power lowers the number further.',
    },
    {
      q: 'My display says “LA 42.” Which operator is that?',
      a: 'That is the UL-era LA412 identifying itself at power-up, followed by its firmware version. The same board family shows “40” on an LA400 and “50” on an LA500.',
    },
    {
      q: 'Why did my LA412 start failing after we added a keypad or myQ?',
      a: 'Every accessory adds standby current, and the LA412 has only 10 to 30 watts of panel to replace it. LiftMaster’s manual lists 3.9 mA for a programmed myQ device and 18.5 mA for an expansion board — enough to turn a balanced system into one that loses a little every night.',
    },
    {
      q: 'Is the LA412 still available?',
      a: 'LiftMaster still markets the UL-era LA412 as its residential solar gate opener, and replacement control boxes for it are listed by distributors. The original LA412 and LA412-S have been superseded, but their gates can usually be kept running or converted.',
    },
  ],

  relatedModels: ['liftmaster/la400-repair', 'liftmaster/la500-repair', 'liftmaster/rsw12ul-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],

  sources: [
    SRC.la412Manual,
    SRC.la412Legacy,
    SRC.uGuide,
    SRC.la400ulManual,
    SRC.addendum,
    SRC.k1d8388,
    { label: 'LiftMaster product page: LA412UL residential solar gate opener', url: 'https://www.liftmaster.com/-12vdc-solar-residential-linear-actuator-package/p/LA412UL' },
  ],
  toConfirm: [
    'Cycle rating conflict: the LA412 installation manual (01-37071B) lists 50 cycles/day and under 23 s to 90°; some retailers advertise the LA412UL at 100 cycles/day and 23–24 s. Confirm against the current LA412UL manual revision.',
    'The 01-37071B manual may be the LA412U revision rather than the latest LA412UL; its parts list shows board K1D8052-1CC while distributors sell K1D8388-1CC for LA412UL. Board part number not stated on the page for that reason.',
    'The LA412 manual’s BATT FAIL text says “critically low battery is less than 23 V,” which appears copied from the 24 V manuals; no critical voltage is stated on the page.',
    'Current status taken from the LiftMaster product page title in search results (site blocked automated access) and active distributor listings; confirm the LA412UL is still in production.',
    'Original LA412 flash-code list is from the LA412/LA412-S owner’s manual; confirm it matches the board generation on the customer’s gate.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// LA500 (serves LA500XL)
// ─────────────────────────────────────────────────────────────────────────────

const la500: ModelPage = {
  slug: 'la500-repair',
  brandSlug: 'liftmaster',
  model: 'LA500',
  aliases: ['LA500UL', 'LA500U', 'LA500PKGUL', 'LA500DC', 'LA500DCS', 'LA500XL', 'LA500XL20W', 'LA500-S'],
  descriptor: 'residential and light-commercial 24 V DC linear-actuator swing gate operator',
  gateType: 'swing',
  duty: 'residential-light-commercial',
  status: 'discontinued',
  statusNote:
    'At least one LiftMaster parts distributor lists the LA500UL as obsolete; UL-era boards, arms and batteries are still sold. No successor has been confirmed.',

  title: 'LiftMaster LA500 & LA500XL Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster LA500 or LA500XL stopping short, showing code 53 or dying on solar? We diagnose LA500 transformer, battery and arm faults across DFW. Call 24/7.',
  h1: 'LiftMaster LA500 Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair LiftMaster LA500 swing operators across Dallas–Fort Worth, including LA500XL solar kits built around the large metal control box. The LA500 is the heavy-gate, high-cycle member of LiftMaster’s linear-arm line, so the things to check first are its transformer power supply, the weight of the leaf and how hard the entrance works it.',
  heroPoints: [
    'We check the toroidal transformer, bridge rectifier and 120/240 V wiring before condemning an LA500 board',
    'We read the lifetime cycle count off the expansion board to see whether the gate has outgrown the operator',
    'On LA500XL solar kits we test both 33AH batteries and the panel string separately',
  ],

  identify: {
    body: [
      'An LA500 arm is a linear actuator like the LA400’s, which is why the two get confused. The difference is in the control box. A standard LA500 box holds a toroidal transformer, a bridge rectifier, an AC power switch and a filter board, and it ships with an expansion board already fitted. An LA400 box has a small plug-in transformer instead and no expansion board unless one was added.',
      'On UL-era units the two-digit display reads “LA” then “50” at power-up. The primary arm is the LA500DC and the second-leaf arm is the LA500DCS, which comes with a junction box and extension cable. Earlier generations were sold as the LA500 with the LA500-S, and as the LA500U.',
      '“LA500XL” is not a different arm. It is the name distributors use for LA500 packages built around LiftMaster’s large metal control box — typically LA500DC arms, the XL box, two 33AH batteries and solar panels. LiftMaster’s manual lists two large metal boxes for this operator: the LA500CONTXLMDC for AC installs that need more room, and the XLSOLARCONTDC for solar. If you searched for LA500XL repair, you are in the right place: the arm, board and codes are the LA500’s, and the box, batteries and charging are what differ.',
    ],
    lookFor: [
      '“LA 50” on the two-digit display at power-up',
      'A large transformer and an AC power switch inside the control box',
      'An expansion board mounted alongside the main board as standard',
      'On LA500XL kits: a large metal enclosure holding two 33AH batteries on a tray',
      'Primary arm LA500DC; second-leaf arm LA500DCS with a junction box',
      'Power wiring sockets marked 120 and 240 inside the box',
    ],
  },

  overview: [
    {
      heading: 'Transformer-run, with the batteries in reserve',
      body: [
        'LiftMaster lists the LA500 system as “24 Vdc Transformer Run / Battery Backup.” Mains power feeds a toroidal transformer, a bridge rectifier converts its output to DC, and the board runs the gate from that supply while two 12-volt batteries in series stand by for an outage. The box accepts 120 Vac or 240 Vac depending on which power wiring socket is used, with 120 as the factory default.',
        'That design is why the LA500 carries a continuous duty rating and 300 cycles a day, and why its power faults look different from an LA400’s. LiftMaster’s troubleshooting guide checks for about 24 volts AC going into the bridge rectifier and 24 volts DC coming out. A failed rectifier or transformer can leave an LA500 quietly running on its batteries, behaving normally until they give out.',
      ],
    },
    {
      heading: 'Built for heavy leaves — within a table',
      body: [
        'The LA500 table runs from 1,600 lb on an 8-foot leaf to 800 lb at 16 feet and 600 lb at 18 feet. LiftMaster lists it for Class I through IV gates, from single-family driveways to restricted-access sites, with a 90-degree swing in 15 to 18 seconds and an operating range down to −40 °F.',
        'The table is the part people skip. A “1,600-pound operator” on an 18-foot iron leaf is rated for 600 lb, and an LA500 run past its table behaves like any overloaded linear arm: codes 93 and 94, stall reversals, and a gate that reverses more often as its hinges wear.',
      ],
    },
    {
      heading: 'A cycle counter most owners never see',
      body: [
        'Because the expansion board comes standard, a UL-era LA500 can report its lifetime cycle count. With all three AUX relay switches set to ON for relay 1, the expansion board’s 1, 2 and 3 LEDs blink out thousands, ten-thousands and hundred-thousands, and all three blink together for millions. The count cannot be reset, and the switches have to go back to their original positions afterward.',
        'We use that number. An LA500 on a busy shared entrance with several hundred thousand cycles is a different repair conversation from one on a single driveway, and it tells us whether a tired arm is ordinary wear or a sign the gate now needs a commercial operator.',
      ],
    },
    {
      heading: 'Solar LA500s and the XL box',
      body: [
        'For solar, LiftMaster requires at least two 10-watt panels in series and allows up to six, arranged as three paralleled pairs wired in series, with total input capped at 60 watts. The standard box can run 7AH batteries on solar; 33AH batteries require the XLSOLARCONTDC large metal box, a battery tray and the solar battery harness. That is the configuration LA500XL kits are built on.',
        'The LA500’s own standby draw is low — about 2.7 mA for the main board — but the standard expansion board adds roughly 11.1 mA, more than the main board, a remote receiver and myQ combined. LiftMaster’s advice for solar installs is to disconnect the expansion board if nothing is using it.',
      ],
    },
  ],

  specs: [
    { label: 'Usage class', value: 'Class I, II, III and IV vehicular swing gates' },
    { label: 'Main AC supply', value: '120 Vac, 2 A (8 A including accessory outlets) or 240 Vac, 1 A' },
    { label: 'Power system', value: '24 Vdc transformer run, battery backup' },
    { label: 'Maximum gate weight / length', value: '1,600 lb / 8 ft; 800 lb / 16 ft; 600 lb / 18 ft' },
    { label: '90° travel time', value: '15–18 seconds (varies with mounting dimensions)' },
    { label: 'Maximum travel range', value: '115°' },
    { label: 'Maximum daily cycle rate', value: '300 cycles per day' },
    { label: 'Maximum duty cycle', value: 'Continuous' },
    { label: 'Operating temperature', value: '−40 °F to 140 °F' },
    { label: 'Expansion board', value: 'Provided' },
    { label: 'Inherent entrapment protection', value: 'Dual — RPM and current sense' },
    { label: 'Solar input', value: '24 Vdc at 60 W maximum; two to six 10 W panels' },
    { label: 'Batteries', value: 'Two 12 V 7AH (standard box) or two 33AH (large metal solar box)' },
    { label: 'Diagnostic display', value: 'Two-digit; shows “LA 50” at power-up' },
    { label: 'Manufacturer warranty', value: 'Two-year limited (LiftMaster)' },
  ],

  symptoms: [
    {
      symptom: 'The gate works, but it dies within a day of every power cut',
      causes:
        'The batteries were carrying the gate all along because the transformer supply had already failed: the AC power switch off, a tripped breaker, a failed toroidal transformer or bridge rectifier, or the power wiring in the wrong 120/240 socket.',
      whatWeDo:
        'We confirm mains voltage at the box, about 24 Vac into the bridge rectifier and 24 Vdc out of it, and the socket selection, before we look at batteries or the board.',
    },
    {
      symptom: 'The display shows 53',
      causes:
        'Code 53 is a brownout: the board’s supply dipped below its allowable level. A long or undersized AC run, a failing transformer, loose power connections, or a reboot done without letting the board fully discharge can all cause it.',
      whatWeDo:
        'We measure supply voltage while the gate is running, check wire gauge against the length of the run, tighten connections, and allow a full discharge when we power-cycle.',
    },
    {
      symptom: 'A heavy iron gate keeps reversing with code 93 or 94',
      causes:
        'An RPM/stall reversal on arm 1 or arm 2, recorded after the arm slowed twice in a row. On an LA500 this is often a leaf that is beyond the table for its length, sagging hinges, or a post pulled out of line by the gate’s weight.',
      whatWeDo:
        'We release the arm and move the leaf by hand, check hinge wear and post plumb, and compare the gate’s weight and length with LiftMaster’s table before adjusting force.',
    },
    {
      symptom: 'It reverses right at the end of travel — codes 38 or 39',
      causes:
        'A hard-stop limit on arm 1 or arm 2: the limit is set too tight against a stop that does not give, or the arm has run out of stroke because the mounting has shifted.',
      whatWeDo:
        'We re-learn limits clear of the stop, and if the arm is at the end of its stroke we correct the bracket position rather than forcing the limit.',
    },
    {
      symptom: 'The exit loop stopped opening the gate — codes 43, 44 or 45',
      causes:
        'An exit, shadow or interrupt loop fault from a LiftMaster plug-in loop detector: a cut or shorted loop wire, often where the driveway has cracked, or a failed detector.',
      whatWeDo:
        'We test the loop wire for shorts and breaks, swap the plug-in detector to rule it out, and repair the loop before re-enabling it.',
    },
    {
      symptom: 'Our LA500XL solar kit goes weak after a cloudy week',
      causes:
        'Two 33AH batteries in series need both halves healthy, and one weak battery drags down the pair. Shaded or dirty panels, a harness fault, or an expansion board and loops drawing standby current the panels cannot replace all add up.',
      whatWeDo:
        'We test each 33AH battery on its own, measure panel string voltage in sun, and review standby draw — disconnecting an unused expansion board, as LiftMaster recommends.',
    },
    {
      symptom: 'Code 40 or 41 came up after new batteries went in',
      causes:
        'Battery overvoltage or overcurrent: the wrong batteries, a single 12-volt battery on this 24-volt system, mixed 7AH and 33AH batteries, or a shorted charge harness.',
      whatWeDo:
        'We fit two identical batteries in series with the correct harness for their size, then recheck the code history.',
    },
    {
      symptom: 'Only one leaf follows the command, and the display shows 54',
      causes:
        'The primary operator cannot reach a wirelessly paired second operator: the second box has lost power, the pairing has been lost, or something is interfering with the radio link.',
      whatWeDo:
        'We confirm power at the second box, clear and re-pair the wireless link, and set the bipart delay so the leaves clear each other.',
    },
  ],

  components: [
    {
      part: 'LA500DC / LA500DCS actuator arm',
      whatItDoes: 'Heavy-duty 24 V linear actuator; the DCS is the second-leaf arm with junction box and extension cable.',
      failureSigns: 'Stall reversals on a free-swinging leaf; noise under load; a release that will not hold.',
      verdict: 'repair',
    },
    {
      part: 'Main control board',
      whatItDoes: 'Limits, force sensing, radio and the “LA 50” code display.',
      failureSigns: 'Code 31 that returns after a proper reboot; no display with 24 Vdc proven at the board.',
      verdict: 'replace-part',
    },
    {
      part: 'Expansion board (standard on the LA500)',
      whatItDoes: 'Loop detector sockets, AUX relays, extra sensor inputs and the cycle counter.',
      failureSigns: 'Codes 82 or 83; loops or AUX relays not responding; expansion LEDs dark.',
      verdict: 'repair',
    },
    {
      part: 'Toroidal transformer and bridge rectifier',
      whatItDoes: 'Turn mains power into the 24 V DC the LA500 runs on.',
      failureSigns: 'No 24 Vac into the rectifier or no 24 Vdc out; gate running only on battery.',
      verdict: 'replace-part',
    },
    {
      part: 'Filter / surge protection board',
      whatItDoes: 'Conditions incoming AC ahead of the transformer.',
      failureSigns: 'No power downstream after a storm with the breaker and AC switch on.',
      verdict: 'replace-part',
    },
    {
      part: 'Batteries (two 12 V 7AH, or two 33AH in the XL box)',
      whatItDoes: 'Backup power for outages; primary storage on solar and LA500XL kits.',
      failureSigns: 'Codes 40, 41 or 42; short standby time; one battery reading well below its partner.',
      verdict: 'replace-part',
    },
    {
      part: 'Plug-in loop detectors (LOOPDETLM)',
      whatItDoes: 'Exit, shadow and interrupt vehicle detection, up to three on the expansion board.',
      failureSigns: 'Codes 43, 44 or 45; gate not opening for exiting cars.',
      verdict: 'adjust',
    },
    {
      part: 'Reset switch with product ID',
      whatItDoes: 'Stop and alarm reset, and the harness that identifies the operator as an LA500.',
      failureSigns: 'Codes 36 or 37 after a board replacement.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'An LA500 is usually worth repairing: its power supply, batteries, loops and sensors are all replaceable parts, and the arm is built for heavy use. Replacement becomes the right call when the gate is outside the LA500’s weight-for-length table, or when the cycle count shows the entrance has become a commercial-duty job.',
    repair: [
      'Outage failures traced to a transformer, bridge rectifier, AC switch or 120/240 wiring fault',
      'Brownout code 53 caused by wiring, connections or supply voltage',
      'Loop codes 43 to 45 from damaged loops or a failed plug-in detector',
      'Weak LA500XL solar performance fixed with battery, panel or standby-draw changes',
      'A failed main or expansion board on an arm that still runs cleanly',
    ],
    replace: [
      'The leaf exceeds the table — for example more than 600 lb on an 18-foot leaf. That calls for a different class of operator rather than another LA500 arm.',
      'The cycle counter and the entrance’s use show sustained heavy traffic, such as a busy HOA or apartment gate. A commercial pad-mount operator such as the CSW24UL is built for that duty.',
      'A pre-UL LA500 with a failed board, where a UL-era board and monitored sensors approach the cost of a current operator.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster lists a two-year limited warranty in the LA500 series installation manual, applying to the operator and the LA500DC arm, from the date of purchase for the first purchaser at the original installation.',
    notes: [
      'Battery replacement is excluded, as are gate hardware such as hinges and alignment, improper installation or care, unauthorized repairs or alterations, and interference.',
      'LiftMaster asks owners to call before dismantling a unit believed defective, and to keep dated proof of purchase.',
      'LA500XL packages are assembled by distributors from LiftMaster components; keep the distributor’s invoice with the manual, since the purchase date starts the warranty.',
      'Shield is not a LiftMaster authorized dealer. If the operator is under two years old, check with your installer first.',
    ],
  },

  dfw: [
    {
      heading: 'HOA and shared entrances',
      body: [
        'With a 300-cycle rating and a Class I–IV listing, the LA500 turns up on shared private drives and small community entrances as well as single homes. Those gates run timer-to-close and exit loops, and they accumulate cycles quickly. Reading the cycle counter on a Dallas–Fort Worth HOA gate is often the fastest way to decide between a repair and a move to commercial equipment.',
      ],
    },
    {
      heading: 'Lightning season and a mains-fed box',
      body: [
        'Because the LA500 is fed from mains through a transformer, surges from spring storms reach it through the AC line as well as through loop and sensor wiring. The filter board and transformer take the first hit. Since the batteries keep the gate running, a surge-damaged supply can go unnoticed until the next outage — so after a storm season we test the supply side, not just whether the gate moves.',
      ],
    },
    {
      heading: 'Heavy iron, long leaves and clay',
      body: [
        'The LA500 is the operator people choose for heavy ornamental iron, and heavy leaves are hardest on hinges and posts. In expansive clay a post that leans even slightly under a 16- or 18-foot leaf changes the arm’s geometry and adds load, which shows up as stall reversals and hard-stop codes well before the arm is worn.',
      ],
    },
    {
      heading: 'Solar XL kits on acreage',
      body: [
        'On rural gates north and west of the metro, LA500XL kits run two 33AH batteries in a metal box that sits in full sun. Heat ages those batteries, and hail threatens the panels. On AC the LA500 is rated to −40 °F, but LiftMaster does not support solar installs where temperatures fall below −4 °F — worth remembering after a freeze like February 2021.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the code history and the cycle count',
      body: 'We scroll the stored codes on the display and, where useful, read the lifetime count from the expansion board LEDs, then return the AUX relay switches to their original positions.',
    },
    {
      step: 'Release the arm and move the leaf by hand',
      body: 'Heavy LA500 gates hide hinge and post problems. If the leaf binds or drops as it swings, that is repaired before any electrical work.',
    },
    {
      step: 'Walk the power chain',
      body: 'Mains at the box, the AC switch and 120/240 socket, about 24 Vac into the bridge rectifier and 24 Vdc out, then each battery on its own. On XL solar kits, panel string voltage in sun.',
    },
    {
      step: 'Check loops, sensors and inputs',
      body: 'We test loop detectors and loop wires, confirm monitored eyes and edges are learned, and read the input LEDs on both boards for anything stuck active.',
    },
    {
      step: 'Repair, re-learn and prove it',
      body: 'After the repair we re-learn limits, set reversal force, run the obstruction test on each arm and clear the code history so the next reading starts clean.',
    },
  ],

  faqs: [
    {
      q: 'Is the LA500XL a different operator from the LA500?',
      a: 'No. LA500XL is a package name: LA500DC arms paired with LiftMaster’s large metal (XL) control box, usually with two 33AH batteries and solar panels. The arm, board and codes are the LA500’s. What you maintain differently is the larger battery bank and the solar charging.',
    },
    {
      q: 'How can I tell how many cycles my LA500 has done?',
      a: 'The expansion board keeps a lifetime count that cannot be reset. Setting its three AUX relay switches to a specific combination makes the board LEDs blink out the count in thousands. The switches control real functions, so note their positions first or let us read it during a visit.',
    },
    {
      q: 'Can an LA500 run on 240 volts?',
      a: 'Yes. The standard control box accepts 120 Vac or 240 Vac by moving the power wiring to the matching socket, with 120 as the factory default. LiftMaster notes that the large metal AC control box needs an additional toroidal transformer kit for 240 Vac.',
    },
    {
      q: 'Will an LA500 arm fix a gate that is too heavy for an LA400?',
      a: 'Often it is the right arm for that gate: LiftMaster rates the LA500 to 800 lb at 16 feet against 550 lb for the LA400UL at the same length. Whether it can run from the existing LA400 box is a separate question, because each box identifies its operator to the board and the two boxes are powered differently. Our LA400-to-LA500 arm upgrade case study shows one gate where it made sense.',
    },
    {
      q: 'Is the LA500 a commercial gate operator?',
      a: 'LiftMaster markets it as a residential and light-commercial linear actuator, while listing it for Class I through IV gates. For a busy commercial or apartment entrance, a commercial pad-mount operator is usually the better long-term fit.',
    },
    {
      q: 'Is the LA500 still made?',
      a: 'Some LiftMaster parts distributors now list the LA500UL as obsolete, and we have not confirmed a named successor. Boards, arms, transformers and batteries for UL-era LA500s remain widely sold, so repair stays practical.',
    },
  ],

  relatedModels: ['liftmaster/la400-repair', 'liftmaster/la412-repair', 'liftmaster/csw24ul-repair', 'liftmaster/rsw12ul-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'commercial-gate-repair', 'emergency-gate-repair'],
  imageSlugs: ['liftmaster-24'],
  projectSlugs: ['liftmaster-la400-to-la500-arm-upgrade'],
  videoSlugs: ['liftmaster-gate-motor-repair-22'],

  sources: [
    SRC.la500Manual,
    SRC.uGuide,
    SRC.addendum,
    SRC.k1d8388,
    { label: 'PSS Store: LiftMaster LA500XL20W kit contents', url: 'https://pssstore.net/products/liftmaster-la500xl20w-dual-24vdc-with-xl-control-panel-and-solar-panel' },
    { label: 'Gatecrafters: LiftMaster LA500XL dual swing solar kit', url: 'https://www.gatecrafters.com/product_detail_35605_28852.aspx' },
    { label: 'DDM Garage Doors listing: LA500UL marked obsolete', url: 'https://ddmgaragedoors.com/parts/part/OGATLM-LA500UL.html' },
  ],
  toConfirm: [
    'The LA500 manual used (01-37069B) is an earlier revision that lists board K1D8052-1CC and expansion board K1D8080-1CC; distributors sell K1D8388-1CC for LA500UL. No board part number is stated on the page. Confirm specs against the current LA500UL manual revision.',
    'LA500XL: no LiftMaster document uses the name; kit contents come from distributors (PSS Store, Gatecrafters). Confirm with a LiftMaster dealer that “LA500XL” is a package designation only.',
    'Production status: only one distributor found listing the LA500UL as obsolete; liftmaster.com blocked automated access.',
    'Cycle-count procedure is from the LA500 manual; confirm it works on the customer’s board revision before quoting it.',
    'The client case study and video-meta say “the LA500 shares a control platform with the LA400.” Partly true (same board family, interface, code list) but the control box power supply and product-ID harness differ — see LA400 page toConfirm.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// RSW12UL
// ─────────────────────────────────────────────────────────────────────────────

const rsw12ul: ModelPage = {
  slug: 'rsw12ul-repair',
  brandSlug: 'liftmaster',
  model: 'RSW12UL',
  aliases: ['RSW12U'],
  descriptor: 'residential and light-commercial 12 V DC pad- or post-mount swing gate operator',
  gateType: 'articulated-swing',
  duty: 'residential-light-commercial',
  status: 'discontinued',
  statusNote:
    'At least one LiftMaster parts distributor lists the RSW12UL as obsolete; its K1D8389-1CC main board is still sold. No successor has been confirmed.',

  title: 'LiftMaster RSW12UL Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster RSW12UL showing code 34 or 3A, grinding, or dying in outages? We repair RSW12UL encoders, chains, batteries and boards across DFW. Call 24/7.',
  h1: 'LiftMaster RSW12UL Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair LiftMaster RSW12UL pad- and post-mount swing gate operators across Dallas–Fort Worth. Unlike LiftMaster’s linear arms, the RSW12UL is a gearbox-and-arm operator, so the faults to rule out first are its position encoder, its drive chains and a single 12-volt battery — not an actuator tube.',
  heroPoints: [
    'We read the “SG 12” board’s code history, including 3A, a force-dial change made outside setup',
    'We inspect the #41 drive chain, #35 limit chain and position encoder inside the chassis, not just the board',
    'We set the BACKDRIVE switch deliberately, so you know how the gate behaves when the battery is flat',
  ],

  identify: {
    body: [
      'The RSW12UL is a self-contained operator: motor, gear reducer, battery and board all live in one chassis under a gray front cover, mounted on a concrete pad or a post beside the hinge, with an arm reaching to a bracket on the leaf. There is no separate control box on a pier and no actuator tube, which is the quickest way to tell it apart from an LA400 or LA500.',
      'Power up the board and the display shows “SG” followed by “12,” then the firmware version. The earlier 2016 version was sold as the RSW12U. Do not confuse it with the commercial CSW24UL, a 24-volt pad-mount swing operator that distributors list for the same family of main board.',
      'The arm is adjustable. LiftMaster’s installation steps set it up as a long or short arm depending on the distance from the hinge to the operator, and the manual includes a procedure for shortening it. A gate that has been re-hung, or an operator whose pad has moved, may need the arm geometry reset, not just the limits.',
    ],
    lookFor: [
      'A gray-covered operator on a concrete pad or post, beside the hinge',
      'An arm linking the operator’s output shaft to a bracket on the gate',
      '“SG 12” on the two-digit display at power-up',
      'A reset switch on the front of the operator and a disconnect handle on the arm',
      'A single 12 V battery inside the chassis — 7AH as shipped, 33AH on a tray if upgraded',
      'A BACKDRIVE switch on the control board marked MANUAL and SECURE',
    ],
  },

  overview: [
    {
      heading: 'Gear reducer, chains and an absolute encoder',
      body: [
        'Inside the chassis, a 1/8-horsepower 12-volt motor, a gear reducer and a #41 drive chain turn the output shaft that swings the arm. A #35 limit chain on that shaft drives a sprocket for the position sensor, which LiftMaster calls the absolute position encoder, or APE. The board relies on it to know where the arm is at every moment, which is how it holds its learned limits and recognizes a stall.',
        'That makes code 34 worth understanding on this model. LiftMaster describes an operator that runs for a second or two and then stops with nothing in the way, and points first to dust or debris blocking the encoder, then to a loose wire in its harness, before replacing the encoder assembly.',
      ],
    },
    {
      heading: 'Rated by leaf length, from 1,000 lb down to 400',
      body: [
        'LiftMaster’s table for the RSW12UL falls away faster than the linear arms’: 1,000 lb on a 6-foot leaf, 800 lb at 8 feet, 700 lb at 10 feet, 600 lb at 12 feet and 400 lb at 16 feet. A 90-degree swing takes under 17 seconds, and the operator is listed for Class I and II gates, 250 cycles a day and continuous duty.',
        'Those duty figures sit well above an LA400’s, but the weight allowance drops sharply on long leaves. A heavy 16-foot iron leaf that an LA500 is rated for can be twice what an RSW12UL’s table allows at that length.',
      ],
    },
    {
      heading: 'One 12-volt battery, and a BACKDRIVE choice',
      body: [
        'The RSW12UL runs from a single 12-volt battery that the operator’s transformer keeps charged — one 7AH battery as shipped, or one 33AH battery with LiftMaster’s 33AH harness and battery tray. The board treats anything under 11.5 volts as critically low. On solar it takes one to three 10-watt panels in parallel, and LiftMaster says the optional cold-weather heater cannot be used on a solar install.',
        'The BACKDRIVE switch decides what happens when that battery is flat. Set to MANUAL, the gate can be pushed open or closed by hand with no power; set to SECURE, the gate resists being pushed. It is worth knowing which setting yours is on before an outage rather than during one.',
      ],
    },
    {
      heading: 'Codes and parts that set it apart',
      body: [
        'The RSW12UL uses LiftMaster’s two-digit code system with a few entries worth knowing. Code 3A means the REVERSAL FORCE dial was turned outside Manual Setup Mode; turning it back clears the code, or entering and exiting Manual Setup makes the change take effect. Code 50, a run-distance error, tells a DC operator the gate is out of balance, and LiftMaster points to a gate not hung level or installed on too steep a grade. Normal operation reads 00.',
        'Board replacement differs from the linear arms too. The RSW12UL uses a pad-mount main board with its own heat sink — distributors list K1D8389-1CC for RSW, RSL, CSW24UL and CSL24UL operators — and the product ID lives in a separate wiring harness assembly rather than in a control box reset switch.',
      ],
    },
  ],

  specs: [
    { label: 'Usage class', value: 'Class I and II vehicular swing gates' },
    { label: 'Main AC supply', value: '120 Vac, 0.5 A (6.5 A including accessory outlets)' },
    { label: 'Power system', value: '12 Vdc battery run / battery backup' },
    {
      label: 'Maximum gate weight / length',
      value: '1,000 lb / 6 ft; 800 lb / 8 ft; 700 lb / 10 ft; 600 lb / 12 ft; 400 lb / 16 ft',
    },
    { label: '90° travel time', value: 'Under 17 seconds (varies with mounting dimensions)' },
    { label: 'Maximum travel range', value: '115°' },
    { label: 'Maximum daily cycle rate', value: '250 cycles per day' },
    { label: 'Maximum duty cycle', value: 'Continuous' },
    { label: 'Operating temperature', value: '−4 °F to 140 °F; −40 °F to 140 °F with optional heater' },
    { label: 'Motor', value: '1/8 HP, 12 Vdc' },
    { label: 'Solar input', value: '12 Vdc at 30 W maximum; one to three 10 W panels in parallel' },
    { label: 'Battery', value: 'One 12 V 7AH (provided) or one 33AH' },
    { label: 'Diagnostic display', value: 'Two-digit; shows “SG 12” at power-up' },
    { label: 'Manufacturer warranty', value: 'Three-year limited (LiftMaster)' },
  ],

  symptoms: [
    {
      symptom: 'It runs for a second or two, then stops — and nothing is in the way',
      causes:
        'Code 34: the board is not receiving position information from the absolute position encoder. Dust or debris blocking the sensor, a loose or broken wire in the encoder harness, or a failed encoder assembly.',
      whatWeDo:
        'We open the chassis, clear the encoder with compressed air as LiftMaster suggests, check the harness end to end, and replace the encoder assembly only if the code returns.',
    },
    {
      symptom: 'The display shows 3A and the gate is not behaving normally',
      causes:
        'Someone turned the REVERSAL FORCE dial outside Manual Setup Mode, often while trying to cure reversals. The board flags the change instead of applying it.',
      whatWeDo:
        'We find out why force was being adjusted, fix that cause, then set force properly inside Manual Setup Mode and run the obstruction test.',
    },
    {
      symptom: 'Grinding, clunking or a jerk at the start of each swing',
      causes:
        'A slack or worn #41 drive chain or master link, loose set screws or a sheared key on the gear reducer sprockets, or worn pivots in the arm assembly.',
      whatWeDo:
        'We inspect chain tension and wear, tighten or replace sprockets and keys, and check the output arm and arm pivots for play.',
    },
    {
      symptom: 'It stops before reaching the limit, showing code 50',
      causes:
        'A run-distance error, which on a DC operator means gate imbalance: a leaf that is no longer level, hinges that have worn, or a gate on too steep a grade. A pad or post that has shifted produces the same result.',
      whatWeDo:
        'We check the leaf for level and the hinges for wear, confirm the pad and post have not moved, correct the arm geometry if needed, and re-learn limits.',
    },
    {
      symptom: 'It dies within hours of a power cut',
      causes:
        'The single 7AH battery has aged, the transformer has stopped charging it, or accessories are drawing more than the battery can support. Below 11.5 V the board treats the battery as critically low.',
      whatWeDo:
        'We load-test the battery and check charging, and where outages matter we fit the 33AH battery with LiftMaster’s harness and tray.',
    },
    {
      symptom: 'Anyone can push the gate open when the power is out',
      causes:
        'The BACKDRIVE switch is set to MANUAL, which is designed to let the gate be pushed with no power, or the disconnect handle on the arm has been left released.',
      whatWeDo:
        'We explain both settings, set BACKDRIVE to SECURE if that is what you want, and confirm the disconnect handle is fully tightened.',
    },
    {
      symptom: 'A long leaf keeps reversing, with codes 91 or 93',
      causes:
        'A force or RPM/stall reversal. On an RSW12UL the likeliest culprits are a leaf beyond the table for its length, binding hinges, or a worn drive chain adding drag.',
      whatWeDo:
        'We disconnect and move the gate by hand, compare it with the weight-for-length table, check the chain, and only then reset limits and force.',
    },
    {
      symptom: 'On a pair of gates, one operator no longer responds',
      causes:
        'Each RSW12UL needs its own power, and dual operators are paired as network primary and second. Lost power at one unit or a lost pairing leaves one leaf idle; code 54 flags a wireless communication error.',
      whatWeDo:
        'We confirm power at both operators, re-pair them as network primary and second from the LEARN button, and reset the bipart delay.',
    },
  ],

  components: [
    {
      part: 'Absolute position encoder (APE) and cable',
      whatItDoes: 'Tells the board exactly where the arm is, for limits and stall detection.',
      failureSigns: 'Code 34; runs briefly then stops; limits that will not hold.',
      verdict: 'repair',
    },
    {
      part: 'Gear reducer and gearbox',
      whatItDoes: 'Reduces motor speed to arm torque.',
      failureSigns: 'Grinding, heat, oil weeping, backlash felt at the arm.',
      verdict: 'service',
    },
    {
      part: '#41 drive chain and #35 limit chain',
      whatItDoes: 'Transmit drive to the output shaft and turn the encoder sprocket.',
      failureSigns: 'Clunk at start, slack chain, stretched links, inconsistent limits.',
      verdict: 'adjust',
    },
    {
      part: '1/8 HP 12 Vdc motor',
      whatItDoes: 'Drives the gear reducer.',
      failureSigns: 'Motor does not run when connected straight to a battery, burnt smell.',
      verdict: 'replace-part',
    },
    {
      part: 'Main board with heat sink (K1D8389-1CC)',
      whatItDoes: 'Runs the “SG 12” display, radio, limits, force, charging and sensor inputs.',
      failureSigns: 'Code 31 after a proper reboot; no display with battery and AC confirmed.',
      verdict: 'replace-part',
    },
    {
      part: 'Wiring harness with product ID',
      whatItDoes: 'Identifies the operator as an RSW12UL to the board.',
      failureSigns: 'Codes 36 or 37, especially after a board change.',
      verdict: 'replace-part',
    },
    {
      part: '12 V battery (7AH or 33AH)',
      whatItDoes: 'Runs the operator and carries it through outages.',
      failureSigns: 'Short standby time, low-battery warnings, codes 40–42.',
      verdict: 'replace-part',
    },
    {
      part: 'Arm assembly, output arm and disconnect handle',
      whatItDoes: 'Transfers motion to the leaf and lets it be released by hand.',
      failureSigns: 'Play at pivots, a handle that will not tighten, gate not reaching limits after a re-hang.',
      verdict: 'adjust',
    },
  ],

  repairOrReplace: {
    summary:
      'The RSW12UL is a mechanically serviceable operator: its encoder, chains, sprockets, battery and board are all individual parts. Replacement is right when the gate has outgrown the operator’s steep weight-for-length table, or the entrance has moved past Class II, 250-cycle duty.',
    repair: [
      'Code 34 caused by a dirty or disconnected position encoder',
      'Noise or jerky starts from drive chain, sprocket or arm pivot wear',
      'Outage failures fixed with a new battery or the 33AH upgrade',
      'A failed main board or product ID harness on a mechanically sound operator',
      'Code 50 or limit drift after a gate re-hang or hinge repair',
    ],
    replace: [
      'A long, heavy leaf beyond the table — more than 400 lb at 16 feet. A higher-rated operator such as the LA500 (800 lb at 16 feet) or a commercial pad-mount unit fits better.',
      'Traffic that has outgrown a residential/light-commercial listing, such as an HOA or apartment gate; the commercial CSW24UL is the usual step.',
      'A vehicle strike that has damaged the gearbox and board together, where the parts total approaches a new operator.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster lists a three-year limited warranty in the RSW12UL installation manual — a year longer than the two years its manuals list for the LA400, LA412 and LA500 — covering defects in materials and workmanship for the first purchaser at the original installation, from the date of purchase.',
    notes: [
      'Battery replacement is excluded, along with the gate and its hardware, improper installation or care, unauthorized repairs or alterations, and interference.',
      'LiftMaster asks owners to call before dismantling a unit believed defective, and to keep a dated proof of purchase.',
      'Shield is not a LiftMaster authorized dealer. If your RSW12UL is inside three years, contact your installer before any third-party repair.',
    ],
  },

  dfw: [
    {
      heading: 'A pad on moving clay',
      body: [
        'An RSW12UL sits on its own concrete pad or post, separate from the gate post. In expansive clay the two can move independently through wet springs and dry summers, which changes the arm’s geometry and the gate’s balance. The symptoms are code 50, hard-stop codes and limits that drift, and the fix sometimes starts with the pad rather than the board.',
      ],
    },
    {
      heading: 'Heat inside one chassis',
      body: [
        'Motor, board and battery share one enclosure beside the gate, rated to 140 °F. On a sun-facing pad in a Dallas–Fort Worth summer, the single battery takes the worst of it, which is why we check battery condition on every RSW12UL visit regardless of the complaint.',
      ],
    },
    {
      heading: 'Freezes and the optional heater',
      body: [
        'Without its heater, the RSW12UL is rated down to −4 °F; with the optional heater, to −40 °F. That range covers even the February 2021 freeze, but cold still reduces battery capacity and stiffens hinges and chain. LiftMaster does not allow the heater on solar installs, so a solar RSW12UL has less margin in hard cold.',
      ],
    },
    {
      heading: 'Storm outages on a single battery',
      body: [
        'Spring storms bring outages and surges. One 7AH battery gives limited standby time, and when it runs out the BACKDRIVE setting decides whether the gate can be pushed or stays secure. After a surge we check the board, charging and accessory power before assuming the gearbox side is involved.',
      ],
    },
  ],

  process: [
    {
      step: 'Pull the code history',
      body: 'We scroll the stored codes on the “SG 12” display, noting 3A, 34 and 50 in particular, before touching the force dial or limits.',
    },
    {
      step: 'Disconnect and move the gate by hand',
      body: 'Reset switch to RESET/DISCONNECT, handle released on the arm — on both operators for a pair — then we swing the leaf through its travel to find any bind or imbalance.',
    },
    {
      step: 'Open the chassis',
      body: 'We inspect the drive and limit chains, sprockets and keys, the encoder and its dust guard, and the motor and gear reducer for heat, noise or play.',
    },
    {
      step: 'Test the battery and charging',
      body: 'A fully charged 12 V battery should read 12.8 to 13.3 V off the harness; we confirm the transformer is charging it and check accessory draw.',
    },
    {
      step: 'Set up, test and confirm BACKDRIVE',
      body: 'We re-learn limits in Manual Setup Mode, set reversal force, run the obstruction test, and confirm the BACKDRIVE setting with you before we leave.',
    },
  ],

  faqs: [
    {
      q: 'What does “SG 12” on my gate operator’s display mean?',
      a: 'It is the board identifying the operator as an RSW12UL at power-up, followed by the firmware version. If your display reads “LA” instead, you have one of LiftMaster’s linear-arm operators.',
    },
    {
      q: 'What is code 3A on an RSW12UL?',
      a: 'It means the REVERSAL FORCE dial was moved outside Manual Setup Mode. Turning the dial back to where it was clears the code; to make a change stick, enter and exit Manual Setup Mode. If the dial was moved to stop reversals, the cause of the reversals still needs finding.',
    },
    {
      q: 'Why can my gate be pushed open when the power is out?',
      a: 'Your BACKDRIVE switch is probably set to MANUAL, which lets the gate be pushed when there is no AC or battery power. Set to SECURE, the gate resists being pushed. Neither is wrong; it depends whether easy exit or security matters more at your gate.',
    },
    {
      q: 'How heavy a gate can an RSW12UL handle?',
      a: 'It depends on the leaf length. LiftMaster rates it for 1,000 lb at 6 feet, 800 lb at 8 feet, 700 lb at 10 feet, 600 lb at 12 feet and 400 lb at 16 feet.',
    },
    {
      q: 'Does the RSW12UL have a longer warranty than the LA-series arms?',
      a: 'Yes. LiftMaster’s RSW12UL manual lists a three-year limited warranty, while its LA400, LA412 and LA500 manuals list two years. Batteries and gate hardware are excluded in both.',
    },
    {
      q: 'Is the RSW12UL still made?',
      a: 'Some LiftMaster parts distributors now list the RSW12UL as obsolete, and we have not confirmed a named successor. Its main board and mechanical parts are still sold, so repair remains practical.',
    },
  ],

  relatedModels: ['liftmaster/csw24ul-repair', 'liftmaster/rsl12ul-repair', 'liftmaster/la500-repair', 'liftmaster/la400-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],

  sources: [
    SRC.rsw12ulManual,
    SRC.rsw12ulSupport,
    SRC.uGuide,
    SRC.k1d8389,
    { label: 'DDM Garage Doors listing: RSW12UL marked obsolete', url: 'https://ddmgaragedoors.com/parts/part/OGATLM-RSW12UL.html' },
  ],
  toConfirm: [
    'Production status: only one distributor found listing the RSW12UL as obsolete (“we no longer carry this part”); confirm with a LiftMaster dealer.',
    'Code table columns were misaligned in PDF extraction; 00 = normal, 34 = encoder, 3A = force dial, 50 = run distance were cross-checked against the U-series troubleshooting guide. Technician to confirm on a live board.',
    'The manual lists both an “integrated transformer” and a plug-in transformer (APOW3) part; the page says only that the operator’s transformer charges the battery.',
    'Drive train description (motor → gear reducer → #41 chain → output shaft; #35 limit chain → encoder sprocket) is inferred from the repair parts list; confirm the exact arrangement.',
    'K1D8389-1CC board applicability to RSW12UL is from distributors; the RSW12UL manual parts list agrees.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// RSL12UL
// ─────────────────────────────────────────────────────────────────────────────

const rsl12ul: ModelPage = {
  slug: 'rsl12ul-repair',
  brandSlug: 'liftmaster',
  model: 'RSL12UL',
  aliases: ['RSL12U'],
  descriptor: 'residential and light-commercial 12 V DC pad-mount chain-drive slide gate operator',
  gateType: 'slide',
  duty: 'residential-light-commercial',
  status: 'discontinued',
  statusNote:
    'At least one LiftMaster parts distributor lists the RSL12UL as obsolete; its encoder, chain, battery and K1D8389-1CC board are still sold. No successor has been confirmed.',

  title: 'LiftMaster RSL12UL Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster RSL12UL slide gate stalling, chain sagging or dead in outages? We repair RSL12UL chains, encoders, batteries and boards across DFW. Call 24/7.',
  h1: 'LiftMaster RSL12UL Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair LiftMaster RSL12UL slide gate operators across Dallas–Fort Worth. On a chain-driven slide gate the operator is only half the system, so when an RSL12UL stalls or reverses we start at the track, wheels and chain — the causes LiftMaster itself lists for a stall — before we suspect the board.',
  heroPoints: [
    'We measure chain sag against LiftMaster’s limit of 1 inch per 10 feet, and re-set limits after tensioning',
    'We walk the track and check every wheel and axle before blaming the “SL 12” board for a reversal',
    'We confirm both monitored safety devices — one each direction — that a slide operator needs to run',
  ],

  identify: {
    body: [
      'The RSL12UL is a pad-mounted slide operator placed beside the gate: near the front roller on a standard installation, or near the back of the open gate on a rear installation. A #41 roller chain is fixed to brackets welded at each end of the gate and routed through the operator, past idler pulleys and around the output sprocket. The cover slides down over the chassis and is held with a single screw.',
      'At power-up the two-digit display shows “SL” and then “12,” followed by the firmware version. The 2016 version was sold as the RSL12U. The RSL12UL shares a pad-mount board family and the BACKDRIVE switch with LiftMaster’s RSW12UL swing operator, but its ratings, drive and safety-sensor requirements are specific to slide gates.',
      'A rear installation looks different: the chain runs between top and bottom brackets on the gate, the operator uses two extra idler pulleys, and the back pulley moves to the bottom hole in the chassis. That layout creates more exposed pinch points, which LiftMaster requires to be guarded.',
    ],
    lookFor: [
      'A pad-mounted operator beside a slide gate, with a chain running the length of the gate',
      'Chain eye-bolts on welded brackets at each end of the gate',
      '“SL 12” on the two-digit display at power-up',
      'A BACKDRIVE switch marked MANUAL and SECURE on the control board',
      'A reset switch on the front of the operator',
      'One 12 V battery inside — 7AH as shipped, 33AH if it has been upgraded',
    ],
  },

  overview: [
    {
      heading: 'Chain drive, and LiftMaster’s rule on sag',
      body: [
        'The RSL12UL moves the gate by pulling itself along a fixed #41 chain; the carton includes 30 feet of chain and an eye-bolt kit. LiftMaster’s rule is no more than 1 inch of sag for every 10 feet of chain, adjusted at either of the two chain eye-bolts. Chains stretch in service, and the manual notes that limits may need resetting after any major chain adjustment.',
        'Lubrication has its own instruction: lithium spray only, never grease or silicone spray. An exposed gate chain coated in grease holds driveway grit against the sprockets it runs through, and LiftMaster puts the drive chain and sprockets on its routine maintenance chart for that reason.',
      ],
    },
    {
      heading: 'Rated for 800 lb and a long travel',
      body: [
        'LiftMaster lists the RSL12UL for gates up to 800 lb, a maximum gate travel distance of 50 feet, a travel speed of up to 12 inches per second, 120 cycles a day and continuous duty, under Class I and II usage.',
        'The weight is a single figure rather than a table, but it assumes a gate that rolls freely. LiftMaster’s own list of what trips the RSL12UL’s inherent protection is almost entirely about the gate: mud, rocks or dirt on the track, broken axles or wheels, a wheel off its rail, or the gate hitting a wall or vehicle.',
      ],
    },
    {
      heading: 'Two monitored safety devices, not one',
      body: [
        'Slide operators carry a stricter sensor requirement than LiftMaster’s swing operators. The RSL12UL code table states that slide gate operators need at least two monitored external safety devices — one covering the close direction and one covering the open direction — where the swing models need a minimum of one. Without them in place the board will not run.',
        'The main board accepts up to two close-direction devices and one open-direction device, and the optional expansion board adds three more inputs plus wireless edge sensors. On a slide gate the open-direction device protects the zone where the gate travels back along the fence or wall.',
      ],
    },
    {
      heading: 'A single battery, BACKDRIVE and cold-weather options',
      body: [
        'Power comes from one 12-volt battery charged by the operator: a 7AH battery as shipped, or a 33AH battery with LiftMaster’s K94-37236 harness. Three beeps with a command warn of a low battery, the board considers less than 11.5 volts critically low, and LiftMaster recommends replacing batteries every three years for best performance.',
        'With the battery exhausted, the BACKDRIVE switch sets how the gate behaves: MANUAL lets it be pushed along its track, SECURE makes that difficult. For hard cold, LiftMaster’s optional HTR heater keeps the gearbox and batteries warm below −4 °F with its thermostat set between 45 and 60 °F, but a heater cannot be used on a solar installation.',
      ],
    },
  ],

  specs: [
    { label: 'Usage class', value: 'Class I and II vehicular slide gates' },
    { label: 'Main AC supply', value: '120 Vac, 0.5 A (6.5 A including accessory outlets)' },
    { label: 'Power system', value: '12 Vdc battery run / battery backup' },
    { label: 'Maximum gate weight', value: '800 lb' },
    { label: 'Maximum gate travel distance', value: '50 ft' },
    { label: 'Maximum travel speed', value: '12 inches per second' },
    { label: 'Maximum daily cycle rate', value: '120 cycles per day' },
    { label: 'Maximum duty cycle', value: 'Continuous' },
    { label: 'Operating temperature', value: '−4 °F to 140 °F; −40 °F to 140 °F with optional heater' },
    { label: 'Drive', value: '#41 roller chain (30 ft supplied), eye-bolt tensioned' },
    { label: 'Solar input', value: '12 Vdc at 30 W maximum; one to three 10 W panels in parallel' },
    { label: 'Battery', value: 'One 12 V 7AH (provided) or one 33AH' },
    { label: 'Diagnostic display', value: 'Two-digit; shows “SL 12” at power-up' },
    { label: 'Manufacturer warranty', value: 'Three-year limited (LiftMaster)' },
  ],

  symptoms: [
    {
      symptom: 'It starts with a clunk and the chain slaps or jumps',
      causes:
        'Chain sag beyond 1 inch per 10 feet, a stretched chain, a loose eye-bolt or cracked bracket weld, or a chain that is no longer level with the idler pulley and rides off the sprocket.',
      whatWeDo:
        'We tension the chain at the eye-bolts to LiftMaster’s sag limit, check bracket welds and chain alignment with the idlers, inspect the sprocket teeth, and re-set limits after the adjustment.',
    },
    {
      symptom: 'It stops partway, backs up, and the alarm sounds',
      causes:
        'A force or RPM reversal detected twice in a row. For this operator LiftMaster lists debris on the track, broken axles or wheels, a wheel off its rail, or the gate striking a wall or vehicle.',
      whatWeDo:
        'We release the gate and push it its full length by hand, clean the track, check wheels, axles and guide rollers, and adjust force only once the gate rolls freely.',
    },
    {
      symptom: 'Nothing moves and the display shows 60',
      causes:
        'Code 60: the board does not see the minimum number of monitored safety devices, which on a slide gate is two. An unplugged, misaligned or failed eye or edge in either direction stops the operator.',
      whatWeDo:
        'We test the devices and wiring for both directions, re-learn them at the board, and replace a failed eye or edge rather than leave one direction unprotected.',
    },
    {
      symptom: 'The gate moves a second, stops, and the display shows 34',
      causes:
        'The board has lost position information from the absolute position encoder. On the RSL12UL that assembly includes an RPM board on a plastic tray; dirt, a loose harness connection or a failed assembly are the causes.',
      whatWeDo:
        'We clean the assembly, reseat its connections, and replace the encoder assembly (LiftMaster K1A6408) if the code comes back.',
    },
    {
      symptom: 'Three beeps on command, then it gives up during an outage',
      causes:
        'A low battery — often one past LiftMaster’s three-year replacement interval — a charging fault, or accessories drawing more than one 7AH battery can support. Below 11.5 V the BATT FAIL setting latches the gate at a limit.',
      whatWeDo:
        'We test the battery and the charging circuit, and where outages matter we fit a 33AH battery with the matching harness.',
    },
    {
      symptom: 'It runs into the end stop and backs off, showing code 38',
      causes:
        'A hard-stop limit: the limit is set too tight against a stop that does not give. It often appears after a chain has been re-tensioned or a gate stop has been moved.',
      whatWeDo:
        'We re-learn the limits clear of the stops, confirm the stop and chain brackets are secure, and run the obstruction test in both directions.',
    },
    {
      symptom: 'Code 53 keeps showing up on a gate far from the house',
      causes:
        'A brownout: supply to the board dipped below its allowable level. Long wire runs, undersized wire, loose connections, or a reboot without letting the board discharge fully.',
      whatWeDo:
        'We confirm incoming voltage is within ten percent of the operator’s rating, as LiftMaster’s maintenance notes suggest, and correct wiring or connections. We unplug J15 when power-cycling the board, per the manual.',
    },
    {
      symptom: 'Someone can roll the gate open by hand when the power is off',
      causes:
        'The BACKDRIVE switch is on MANUAL, which is meant to let a powerless gate be pushed along its track, or the manual disconnect has been left released.',
      whatWeDo:
        'We talk through the trade-off, switch BACKDRIVE to SECURE if you prefer, and confirm the disconnect is re-engaged.',
    },
  ],

  components: [
    {
      part: '#41 drive chain, master link and eye-bolts',
      whatItDoes: 'The fixed chain the operator pulls against to move the gate.',
      failureSigns: 'Sag over 1 inch per 10 feet, slapping, stiff links, rust, a chain jumping the sprocket.',
      verdict: 'adjust',
    },
    {
      part: 'Output sprocket and idler pulleys',
      whatItDoes: 'Guide the chain through the operator and transfer drive to it.',
      failureSigns: 'Hooked or worn teeth, noisy idlers, chain riding off center.',
      verdict: 'service',
    },
    {
      part: 'Absolute position encoder assembly with RPM board (K1A6408)',
      whatItDoes: 'Reports gate position and speed to the board for limits and stall detection.',
      failureSigns: 'Code 34; limits that will not hold; runs briefly then stops.',
      verdict: 'repair',
    },
    {
      part: 'Motor and gearbox',
      whatItDoes: 'Drive the output sprocket; the optional heater keeps the gearbox warm in hard cold.',
      failureSigns: 'Grinding, heat, hesitation under a free-rolling gate.',
      verdict: 'service',
    },
    {
      part: 'Main control board (K1D8389-1CC)',
      whatItDoes: 'Runs the “SL 12” display, radio, limits, force sensing, charging and sensor inputs.',
      failureSigns: 'Code 31 after a proper reboot; no display with battery and AC confirmed.',
      verdict: 'replace-part',
    },
    {
      part: 'Wiring harness with product ID (K94-37259)',
      whatItDoes: 'Identifies the operator to the board as an RSL12UL.',
      failureSigns: 'Codes 36 or 37, particularly after a board replacement.',
      verdict: 'replace-part',
    },
    {
      part: '12 V battery (29-NP712 7AH, or 33AH)',
      whatItDoes: 'Runs the operator and carries it through outages.',
      failureSigns: 'Three beeps on command, short standby time, battery over three years old.',
      verdict: 'replace-part',
    },
    {
      part: 'Monitored safety devices, open and close',
      whatItDoes: 'The two external devices a slide operator must have before it will run.',
      failureSigns: 'Code 60; unexplained reversals; an input LED stuck on.',
      verdict: 'adjust',
    },
  ],

  repairOrReplace: {
    summary:
      'An RSL12UL with a stalling or noisy gate usually needs track, wheel or chain work rather than a new operator, and its encoder, battery and board are all replaceable parts. Replacement makes sense when the gate is heavier or longer than the RSL12UL is rated for, or the entrance has become busier than a 120-cycle, Class I and II operator is meant to serve.',
    repair: [
      'Chain sag, stretch or misalignment corrected at the eye-bolts and idlers',
      'Stall reversals cured by clearing the track and repairing wheels or axles',
      'Code 34 fixed by cleaning or replacing the encoder assembly',
      'Outage failures fixed with a new battery or a 33AH upgrade',
      'Code 60 cleared by adding or repairing the open- or close-direction safety device',
    ],
    replace: [
      'The gate weighs more than 800 lb or needs more than 50 feet of travel. A commercial slide operator such as the CSL24UL or SL3000UL is built for that.',
      'Traffic beyond 120 cycles a day on a busy HOA, apartment or business entrance, where a commercial-duty slide operator will last longer.',
      'A gearbox and board both failing on an older unit, where the combined parts approach the cost of a current operator.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster lists a three-year limited warranty in the RSL12UL installation manual, covering defects in materials and workmanship for the first purchaser at the original installation, from the date of purchase.',
    notes: [
      'The warranty excludes battery replacement and problems with the gate or its hardware — LiftMaster names gate rollers and alignment specifically — along with improper installation or care, unauthorized repairs, and interference.',
      'LiftMaster asks owners to call before dismantling a unit they believe is defective, with a dated proof of purchase.',
      'Shield is not a LiftMaster authorized dealer. If your RSL12UL is inside three years, contact your installer before any third-party work.',
    ],
  },

  dfw: [
    {
      heading: 'Clay under the pad and the track',
      body: [
        'A slide gate depends on a level track and an operator pad that stay where they were poured. Expansive clay moves both, and not always together: a heaved track section can lift a wheel off its rail, and a tilted pad pulls the chain out of line with the idler pulley. Either shows up as reversals and chain noise long before the operator itself is worn.',
      ],
    },
    {
      heading: 'Storm debris and standing water',
      body: [
        'Spring thunderstorms wash mud, gravel and limbs onto driveways, and LiftMaster names debris on the track as a cause of RSL12UL stall alarms. After a heavy storm it is worth clearing the track before running the gate. Where runoff pools around a low pad, LiftMaster offers a mounting stand (MSLM) that raises the operator higher above the ground.',
      ],
    },
    {
      heading: 'Heat and battery life',
      body: [
        'LiftMaster already recommends a new battery every three years for best performance, and notes that batteries degrade with temperature and use. A single battery inside a sun-baked chassis on a Dallas–Fort Worth driveway is at the harder end of that range, so we check battery age and condition on every visit.',
      ],
    },
    {
      heading: 'Freezes and a frozen track',
      body: [
        'Rare hard freezes like February 2021 test slide gates in two ways: batteries lose capacity in the cold, and ice in the track or on the wheels adds drag the operator reads as an obstruction. The RSL12UL is rated to −4 °F without its heater. Before re-trying a gate that reversed in freezing weather, clear the track and check that the wheels turn.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the codes',
      body: 'We scroll the 20-code history on the display before adjusting anything, and unplug J15 whenever the board needs power-cycling, as LiftMaster recommends.',
    },
    {
      step: 'Release the gate and push it end to end',
      body: 'With the operator disconnected, the gate should roll its full length without catching. Any hard spot is a track, wheel or roller problem, and it is fixed first.',
    },
    {
      step: 'Inspect chain, sprockets and idlers',
      body: 'We check sag against the 1-inch-per-10-feet rule, chain level with the idlers, bracket welds and sprocket wear, and lubricate with lithium spray only.',
    },
    {
      step: 'Test the battery and the supply',
      body: 'A fully charged 12 V battery should read 12.8 to 13.3 V off the harness; we check its age, the charging circuit, and incoming voltage against the operator’s rating.',
    },
    {
      step: 'Re-set limits and test both directions',
      body: 'We re-learn limits, fine-tune force, confirm both monitored safety devices, and run the obstruction test opening and closing.',
    },
  ],

  faqs: [
    {
      q: 'What does “SL 12” on my slide gate operator mean?',
      a: 'It is the board identifying the operator as an RSL12UL at power-up, followed by its firmware version. LiftMaster’s RSW12UL swing operator shows “SG 12” on the same kind of display.',
    },
    {
      q: 'How tight should the chain on my RSL12UL be?',
      a: 'LiftMaster specifies no more than 1 inch of sag for every 10 feet of chain. Too tight is also a problem, so tension it at the eye-bolts rather than cranking it taut, and expect to re-set limits after a major adjustment.',
    },
    {
      q: 'Why does my RSL12UL need two photo-eyes or edges?',
      a: 'LiftMaster requires slide gate operators to have at least two monitored safety devices, one protecting the close direction and one the open direction. If either is missing or faulty, the operator will not run.',
    },
    {
      q: 'What should I use to lubricate the chain?',
      a: 'LiftMaster says lithium spray only — never grease or silicone spray.',
    },
    {
      q: 'How often should the RSL12UL battery be replaced?',
      a: 'LiftMaster recommends every three years for best performance, and warns that batteries degrade with temperature and heavy use and do not perform well in extreme cold. Three beeps with a command is the low-battery warning.',
    },
    {
      q: 'Is the RSL12UL still made?',
      a: 'Some LiftMaster parts distributors now list the RSL12UL as obsolete, and we have not confirmed a named successor. Encoders, chain, batteries and its main board remain available, so repair is still the practical route.',
    },
  ],

  relatedModels: ['liftmaster/csl24ul-repair', 'liftmaster/sl3000ul-repair', 'liftmaster/rsw12ul-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],

  sources: [
    { label: 'LiftMaster RSL12UL installation manual (01-39379B, PDF)', url: 'https://igate.multisalesinc.com/WOEB/Docs/RSL12UL_Manual.pdf' },
    { label: 'LiftMaster support: RSL12UL installation manual article', url: 'https://support.chamberlaingroup.com/s/article/RSL12UL-Installation-Manual' },
    SRC.uGuide,
    SRC.k1d8389,
    { label: 'DDM Garage Doors listing: RSL12UL marked obsolete', url: 'https://ddmgaragedoors.com/parts/part/OGATLM-RSL12UL.html' },
  ],
  toConfirm: [
    'Travel distance: the RSL12UL manual lists a minimum gate travel distance of 25 ft and a maximum of 50 ft; several retailers advertise “gates up to 25 ft.” Only the 50 ft maximum is stated on the page — confirm the minimum figure with LiftMaster.',
    'Production status: only one distributor found listing the RSL12UL as obsolete; confirm with a LiftMaster dealer.',
    'The manual’s manual-disconnect text refers to a “handle on the operator arm,” apparently copied from the RSW12UL manual; technician to confirm the RSL12UL release method before any page copy describes it.',
    'Maintenance-chart intervals could not be read reliably from the PDF columns; the page says “routine” rather than stating monthly/six-monthly intervals.',
    'K1D8389-1CC board applicability is from distributors; the RSL12UL manual repair-parts page read did not show the board part number.',
    'Code table columns were misaligned in extraction; codes 34, 38, 53 and 60 meanings were cross-checked against the U-series guide and the RSW12UL table.',
  ],
  indexable: true,
}

export const liftmasterResidentialModels: ModelPage[] = [la400, la412, la500, rsw12ul, rsl12ul]
