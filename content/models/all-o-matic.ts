/**
 * All-O-Matic model pages.
 *
 * Researched Sept 2026 from allomatic.net product pages and All-O-Matic's own
 * manuals (AC slide manual 09.2022, BLDC PRO slider manual, SW-300/SW-350
 * swinger manual). Every spec below is traceable to `sources`; anything that
 * could not be verified is in `toConfirm` rather than in the copy.
 *
 * Models NOT written (not found in All-O-Matic's lineup or documentation):
 * SL-125, SW-400, "SW-DC series", BL-40, Ranger, RP-100. All-O-Matic's
 * barrier arm is the MAGNA Q; its DC operators carry a "DC PRO" suffix.
 */

import type { ModelPage } from './types'

const AOM_SL100AC = 'https://allomatic.net/product/sl-100-ac/'
const AOM_SL100FPAC = 'https://allomatic.net/product/sl-100fp-ac/'
const AOM_SL100DC = 'https://allomatic.net/product/sl-100fp-dc-pro/'
const AOM_SL150AC = 'https://allomatic.net/product/sl-150-ac/'
const AOM_SL150DC = 'https://allomatic.net/product/sl-150-dc-pro/'
const AOM_SW300AC = 'https://allomatic.net/product/sw-300-ac/'
const AOM_SW300DC = 'https://allomatic.net/product/sw-300-dc-pro/'
const AOM_SW350AC = 'https://allomatic.net/product/sw-350-ac/'
const AOM_SW350DC = 'https://allomatic.net/product/sw-350-dc-pro/'
const AOM_AC_SLIDE_MANUAL = 'https://allomatic.net/wp-content/uploads/2022/10/AC-SLIDE-MANUAL-09.2022.pdf'
const AOM_AC_SLIDE_MANUAL_OLD = 'https://allomatic.net/gate-operator-manuals/sliders/sliders-sl100-ac-sl150-ac-manual.pdf'
const AOM_DC_SLIDE_MANUAL = 'https://igate.multisalesinc.com/WOEB/Docs/DC-PRO-SLIDE_MANUAL.pdf'
const AOM_SWING_MANUAL = 'https://www.aegates.com/wp-content/uploads/2021/07/all-o-matic-gate-operator-sw300ac-sw350ac-gate-manual.pdf'

export const allOMaticModels: ModelPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // SL-100
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'sl-100-repair',
    brandSlug: 'all-o-matic',
    model: 'SL-100',
    aliases: ['SL-100AC', 'SL-100FP AC', 'SL-100 ACFP', 'SL-100FPAC', 'SL-100DC PRO', 'SL-100DCFP'],
    descriptor: 'half-horsepower pad-mounted chain-drive slide gate operator (AC and 24 VDC versions)',
    gateType: 'slide',
    duty: 'residential-light-commercial',
    status: 'current',
    statusNote:
      'All-O-Matic lists the original SL-100AC (push-open release) as discontinued and names the SL-100DC PRO as its successor. The SL-100FP AC and SL-100DC PRO are current.',

    title: 'All-O-Matic SL-100 Repair | Dallas–Fort Worth',
    metaDescription:
      'All-O-Matic SL-100 stopping and reversing, or losing its limits? We repair SL-100AC, FP AC and DC PRO slide operators across Dallas–Fort Worth. Call 24/7.',
    h1: 'All-O-Matic SL-100 Repair in Dallas–Fort Worth',
    heroIntro:
      'We repair All-O-Matic SL-100 slide operators — the original SL-100AC, the foot-pedal SL-100FP AC and the SL-100DC PRO. The call we get most is a gate that travels a few feet, stops and reverses, which on this model is the reversing sensor reacting to load, not a clutch.',
    heroPoints: [
      'We push the gate by hand before touching the SL-100’s reversing sensitivity',
      'We check the ERD jumper matches the SL-100’s single-capacitor motor',
      'We re-seat the limit-nut lock plate so your limits actually hold',
    ],

    identify: {
      body: [
        'The SL-100 name covers three operators. The original SL-100AC is released by switching the power off and pushing the gate (a crank is also supplied), and All-O-Matic now lists it as discontinued. The SL-100FP AC adds a mechanical foot-pedal release. The SL-100DC PRO keeps the pedal but swaps the AC motor for a 24-volt brushless one with two batteries built in. They share a footprint and a chain, but the boards, gearboxes and faults differ, so knowing which one is on your gate saves a wasted trip.',
        'Start with the label on the chassis. If it is faded, look at the release: no pedal means the regular SL-100AC, a pedal means FP AC or DC PRO, and a pair of 12-volt batteries plus a board with a small LCD menu means the DC PRO. If the unit has a separate limit box and a large clutch nut on the gearbox, it is not an SL-100 at all — that is the heavier SL-150.',
      ],
      lookFor: [
        'Chassis label reading SL-100AC, SL-100 ACFP, SL-100FP AC or SL-100DC PRO',
        'A #41 roller chain along the gate, bolted to a bracket at each end',
        'Two limit nuts on a threaded shaft beside the gearbox, held by a notched lock plate',
        'A foot pedal on the chassis (FP AC and DC PRO) — or no pedal on the regular SL-100AC',
        'Two 7Ah 12-volt batteries inside the housing (DC PRO only)',
        'No clutch nut on the gearbox and no separate limit box',
      ],
    },

    overview: [
      {
        heading: 'Belt to gearbox to chain',
        body: [
          'The motor drives the gearbox through a V-belt, and the gearbox sprocket pulls a #41 chain fixed to the gate. On the regular SL-100AC the gearbox ratio is 10:1 with a 4L-300 (AX28) belt. The FP AC and DC PRO use a 20:1 gearbox with an internal disconnect — the part the foot pedal works — and a shorter 4L-260 (AX24) belt. All versions are rated at 12 inches per second.',
          'That belt matters for diagnosis. A glazed or loose belt lets the motor spin while the gate hesitates, and it is a small part next to a gearbox. On the FP and DC PRO versions a disconnect that has not fully re-engaged after someone used the pedal produces a similar "motor runs, gate barely moves" complaint.',
        ],
      },
      {
        heading: 'No slip clutch — the board does the reversing',
        body: [
          'All-O-Matic’s specifications list an internal clutch for the SL-150, not for any SL-100 version. On the SL-100, obstruction protection comes from the control board’s Electronic Reversing Device (ERD), which reverses the gate when motor effort rises past its sensitivity setting.',
          'So when an SL-100 stops and reverses mid-travel, nothing is slipping. The ERD is reacting to load: a genuine obstruction, a gate that has become hard to roll, or a sensitivity setting that does not match the motor. All-O-Matic’s own tip for an ERD that keeps tripping with the pot fully clockwise is to check that the gate opens and closes easily by hand first, then confirm the ERD jumper position. On the 2022 AC board the chart puts the SL-100 (1/2 HP, one capacitor) on pins 5–6.',
        ],
      },
      {
        heading: 'Limit nuts and the lock plate',
        body: [
          'Travel is set by two limit nuts on a threaded shaft. You push the lock plate down, turn a nut toward its switch to shorten travel or away to lengthen it, and each notch moves the stop point roughly half an inch. The plate then has to go back into its locked position — the manual is blunt that the gate will not hold its limits otherwise.',
          'An unseated plate is behind a lot of SL-100 calls where the gate slowly starts stopping short or running long over a few weeks. It is an adjustment, not a part.',
        ],
      },
      {
        heading: 'Which safety firmware your AC board is running',
        body: [
          'Current AC boards support monitored entrapment devices, and the firmware mode has to match how the photo-eyes or edges are wired. Press and release RESET and count the MON-FAULT blinks: one means pre-UL (no monitored device required), two means UL-2016 (one monitored device for closing), three means UL-2018 (one each for opening and closing).',
          'If a required device is missing, unplugged or faulty, the board will only run the gate with a constant-pressure control. That is why an SL-100 that "only moves while I hold the button" often traces back to a photo-eye that was swapped or knocked out of alignment.',
        ],
      },
    ],

    specs: [
      { label: 'Motor (AC versions)', value: '1/2 HP, 120 VAC single phase' },
      { label: 'Motor (DC PRO)', value: '24 VDC brushless, 1/2 HP' },
      { label: 'Max gate weight', value: '1,000 lbs (SL-100AC, SL-100FP AC); 2,000 lbs (SL-100DC PRO)' },
      { label: 'Max gate length', value: '37 ft (SL-100AC); 50 ft (SL-100DC PRO)' },
      { label: 'Gate speed', value: '12 in per second' },
      { label: 'Duty cycle', value: 'Continuous' },
      { label: 'Gearbox', value: '10:1 (SL-100AC); 20:1 with internal disconnect (FP AC and DC PRO)' },
      { label: 'Belt', value: '4L-300 (AX28) on SL-100AC; 4L-260 (AX24) on FP AC and DC PRO' },
      { label: 'Chain', value: '41NP, 20 ft included' },
      { label: 'Emergency release', value: 'Push open with power off (SL-100AC); mechanical foot pedal (FP AC, DC PRO)' },
      { label: 'Battery backup (DC PRO)', value: 'Integrated, two 7Ah 12 VDC batteries; about 80 cycles on a 1,000 lb gate' },
      { label: 'Control board', value: 'AC control board ACPCB-UL (AC versions); BLDC-ULPCB1 (DC PRO)' },
      { label: 'UL 325', value: 'Listed by All-O-Matic as UL 325 2018 compliant' },
      { label: 'Temperature range', value: '−40° to 160°' },
    ],

    symptoms: [
      {
        symptom: 'The gate moves a few feet, stops and goes back',
        causes:
          'The ERD sensing extra load — flat-spotted wheels, a dirty or bent track, a post that has moved — or a sensitivity pot and jumper that do not match the SL-100’s single-capacitor motor.',
        whatWeDo:
          'Release the operator and roll the gate its full length by hand. If it binds, we fix the gate first. Only then do we check the jumper position, set the pots and confirm the gate still reverses on an obstruction.',
      },
      {
        symptom: 'It stops a little short of closed, or overshoots where it used to stop',
        causes:
          'A limit nut that has moved a notch or two, a lock plate left out of its locked position, or a gate that now sits differently on worn wheels so the old stop points are in the wrong place.',
        whatWeDo:
          'We check the gate’s position on its track, reset the nuts a notch at a time (about half an inch each), lock the plate and run several full cycles.',
      },
      {
        symptom: 'The motor hums but the gate doesn’t move',
        causes:
          'All-O-Matic’s AC troubleshooting points to both open and close triacs on the board when the motor hums without moving. A failed motor capacitor, a slipping belt or a seized gate can sound similar.',
        whatWeDo:
          'We rule out the gate and belt by hand, test the capacitor, then check the board’s outputs before condemning anything.',
      },
      {
        symptom: 'After a power cut the gate started moving on its own and ignored the limits',
        causes: 'All-O-Matic identifies this as a failed open or close triac on the AC board.',
        whatWeDo:
          'We confirm the fault, then give you the choice of sending the board to All-O-Matic’s repair service or fitting a replacement, with the cost and wait for each.',
      },
      {
        symptom: 'It only moves while someone holds the button',
        causes:
          'The board is in constant-pressure mode because a monitored photo-eye or edge is missing, misaligned or faulty, or the firmware mode does not match the wiring.',
        whatWeDo:
          'We read the MON-FAULT blink count, test each monitored device and correct the wiring or alignment — we do not jumper out safety inputs.',
      },
      {
        symptom: 'Nothing runs after someone used the foot pedal',
        causes:
          'On the FP AC and DC PRO the pedal has a kill switch. If the pedal is not fully up, the operator will not run; the STOP CMD LED (AC) or FP_DISABLE LED (DC PRO) shows it.',
        whatWeDo: 'We reset the pedal, check that the gearbox disconnect has re-engaged and adjust the pedal switch if it is not releasing.',
      },
      {
        symptom: 'The DC PRO stopped and the ALARM light is on',
        causes:
          'Shutdown after the ERD tripped twice before the gate fully closed. The MODE LED may also be blinking: once for a motor sensor feedback fault, twice for motor overload, three times for a jammed gate.',
        whatWeDo: 'We find what the gate hit or dragged on, clear it, reset the board and test the reversing force in both directions.',
      },
    ],

    components: [
      {
        part: 'AC control board (ACPCB-UL)',
        whatItDoes: 'Runs the motor through triacs, sets ERD sensitivity and handles the monitored safety inputs.',
        failureSigns: 'Humming without movement, running without a command, a 24VDC overload light, or no response at all.',
        verdict: 'repair',
      },
      {
        part: 'Limit nuts, limit shaft and lock plate',
        whatItDoes: 'Set where the gate stops at each end of travel.',
        failureSigns: 'Stop points drifting over weeks; a gate that will not hold a fresh adjustment.',
        verdict: 'adjust',
      },
      {
        part: 'Limit switches',
        whatItDoes: 'Tell the board the gate has reached a stop point when a nut presses them.',
        failureSigns: 'Gate runs into the end post, or stops dead short even with the nuts set correctly.',
        verdict: 'replace-part',
      },
      {
        part: 'V-belt (4L-300 or 4L-260)',
        whatItDoes: 'Carries power from the motor pulley to the gearbox.',
        failureSigns: 'Squeal on start, motor spinning while the gate hesitates, glazed or cracked sides.',
        verdict: 'replace-part',
      },
      {
        part: 'Gearbox and internal disconnect (FP AC, DC PRO)',
        whatItDoes: 'Reduces motor speed to drive the chain sprocket; the disconnect frees the gate for manual use.',
        failureSigns: 'Grinding, play in the output sprocket, or the gate staying free after the pedal is lifted.',
        verdict: 'service',
      },
      {
        part: 'Motor capacitor (AC versions)',
        whatItDoes: 'Gives the single-phase motor its starting and running torque.',
        failureSigns: 'Slow or failed starts, humming, a motor that runs hot.',
        verdict: 'replace-part',
      },
      {
        part: '#41 chain and gate brackets',
        whatItDoes: 'Transfers drive to the gate.',
        failureSigns: 'Slack slapping the housing, rust, a chain riding up on the sprocket.',
        verdict: 'adjust',
      },
      {
        part: 'Batteries (DC PRO)',
        whatItDoes: 'Keep the gate cycling through a power outage.',
        failureSigns: 'LOW-BATTERY LED on, or the gate stranded open or closed during an outage.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'Most SL-100 faults are adjustments or single parts: limit nuts, a belt, a capacitor, a photo-eye or a board. Replacement makes sense when the gate has outgrown the operator or the gearbox itself is worn out, and on a regular SL-100AC it is worth weighing that against the fact All-O-Matic no longer builds that version.',
      repair: [
        'Stall-and-reverse that goes away once the gate rolls freely by hand',
        'Limits drifting because the lock plate or a nut has moved',
        'A board with a failed triac — All-O-Matic repairs defective boards, including out-of-warranty ones, provided parts are still available and there is no surge or water damage',
        'Belt, capacitor, limit switch or battery failures',
      ],
      replace: [
        'The gate weighs more than 1,000 lbs on an AC version — the SL-100DC PRO is rated to 2,000 lbs and the SL-150 class goes higher',
        'The gearbox on a regular SL-100AC is worn and a replacement is not practical; All-O-Matic names the SL-100DC PRO as the successor',
        'You need battery backup on an AC unit that has no provision for it',
      ],
    },

    warranty: {
      manufacturer:
        'All-O-Matic warrants the SL-100 for seven years in residential installations and five years in commercial installations against defects in circuitry, motor, gearbox and workmanship, from the date of purchase to the original owner — provided the registration card is mailed within 30 days. Unregistered units receive one year on parts.',
      notes: [
        'Labor for dealer service is the owner’s responsibility under All-O-Matic’s written warranty, and warranty items are returned to the manufacturer at the owner’s expense.',
        'All-O-Matic advance-replaces items within the first two years after troubleshooting with its tech support from the job site; after two years warranty items are repair-and-return.',
        'Board repairs are excluded where there is power-surge or water damage.',
        'The terms are printed in the warranty section of the SL-100 manual and on each allomatic.net product page.',
      ],
    },

    dfw: [
      {
        heading: 'Storm surges and the board-repair exclusion',
        body: [
          'North Texas spring storms bring lightning, and a surge is the one kind of board failure All-O-Matic’s free board-repair policy does not cover. If your SL-100 died during a storm, expect the board to need replacing rather than repairing, and ask whether the operator has a proper ground — it is the cheapest protection the next board will get.',
        ],
      },
      {
        heading: 'Clay soil makes the ERD look faulty',
        body: [
          'Expansive clay moves slide-gate posts and pads as it dries in summer and swells after rain. A track that drops or a receiving post that leans makes the gate harder to roll, and the SL-100’s reversing sensor reads that extra effort as an obstruction. Turning the sensitivity down hides it until the next dry spell; re-levelling the track fixes it.',
        ],
      },
      {
        heading: 'Heat and DC PRO batteries',
        body: [
          'All-O-Matic rates the DC PRO to 160°, but the batteries inside a sun-baked housing age faster in a Dallas summer than anywhere cooler. If the LOW-BATTERY light comes on or outage cycles fall well short of what the gate used to manage, test the batteries before suspecting the board.',
        ],
      },
    ],

    process: [
      {
        step: 'Identify the version',
        body: 'SL-100AC, FP AC or DC PRO — the label, the release and the batteries tell us which board, gearbox and belt we are dealing with.',
      },
      {
        step: 'Release and roll the gate',
        body: 'We free the gate and push it the full length of the track. Any tight spot here explains most reversing complaints before we open the housing.',
      },
      {
        step: 'Read the board',
        body: 'We note which LEDs are lit, count the MON-FAULT blinks on AC boards or the MODE blinks on DC PRO boards, and check the ERD jumper position.',
      },
      {
        step: 'Check the drive and limits',
        body: 'Belt tension and condition, chain slack, the pedal disconnect, and the limit nuts and lock plate.',
      },
      {
        step: 'Test electrically',
        body: 'Capacitor, limit switches, board outputs and every monitored safety device, one at a time.',
      },
      {
        step: 'Quote, repair and prove it',
        body: 'You get the price before work starts. After the repair we run full cycles and confirm the gate reverses on an obstruction in both directions.',
      },
    ],

    faqs: [
      {
        q: 'Does the All-O-Matic SL-100 have a clutch I can tighten?',
        a: 'No. All-O-Matic lists an internal clutch on the SL-150, not the SL-100. The SL-100 reverses through the board’s ERD, so a stall-and-reverse means it is sensing load. The fix is finding what makes the gate hard to move, not turning sensitivity down until it stops reacting.',
      },
      {
        q: 'How do I tell an SL-100AC from an SL-100FP AC or DC PRO?',
        a: 'Check the chassis label. Without one, look at the release: no foot pedal is the regular SL-100AC, a pedal is FP AC or DC PRO, and two 12-volt batteries in the housing mean DC PRO.',
      },
      {
        q: 'Is the SL-100 still made?',
        a: 'The original SL-100AC is listed as discontinued, with the SL-100DC PRO named as its successor. The SL-100FP AC and SL-100DC PRO are current on All-O-Matic’s site.',
      },
      {
        q: 'I adjusted my SL-100 limits and they won’t hold. Why?',
        a: 'Almost always the lock plate. After turning the limit nuts the plate has to drop back into its locked position, or the nuts turn with the shaft and the stop point wanders.',
      },
      {
        q: 'Can a failed SL-100 board be repaired instead of replaced?',
        a: 'Often. All-O-Matic repairs defective boards, including out-of-warranty ones, when components are still available and the board has no surge or water damage. We will tell you whether yours qualifies and how long the turnaround is compared with a replacement.',
      },
      {
        q: 'Can my SL-100 move a heavier gate if I adjust it?',
        a: 'Not safely. The AC versions are rated to 1,000 lbs and the DC PRO to 2,000 lbs. Beyond that the answer is a larger operator, not a less sensitive reversing setting.',
      },
    ],

    relatedModels: ['all-o-matic/sl-150-repair', 'all-o-matic/sw-300-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'All-O-Matic SL-100AC product page (discontinued)', url: AOM_SL100AC },
      { label: 'All-O-Matic SL-100FP AC product page', url: AOM_SL100FPAC },
      { label: 'All-O-Matic SL-100DC PRO product page', url: AOM_SL100DC },
      { label: 'All-O-Matic AC slide manual SL-100 AC[FP] / SL-150 AC (09.2022, PDF)', url: AOM_AC_SLIDE_MANUAL },
      { label: 'All-O-Matic SL-100 AC / SL-150 AC manual, earlier edition (PDF)', url: AOM_AC_SLIDE_MANUAL_OLD },
      { label: 'All-O-Matic BLDC PRO slider manual, distributor-hosted copy (PDF)', url: AOM_DC_SLIDE_MANUAL },
    ],
    toConfirm: [
      'SL-100FP AC max gate length: product page says 37 ft, the 09.2022 manual says 40 ft for the SL-100 ACFP.',
      'When the regular SL-100AC left production, and whether its 10:1 gearbox is still available as a part.',
      'ERD jumper pins differ between board generations (2007 manual chart lists SL-100 on pins 1–3; 2022 chart lists 5–6). Technician to confirm on older boards.',
      'Board naming: manual calls the AC board model ALL-ACUL; product pages list part ACPCB-UL. Confirm these are the same board.',
      'Confirm on a real unit that no SL-100 version has a slip clutch (manufacturer docs list none).',
      'Temperature range is published as "−40 to 160°" without a unit; presumed Fahrenheit.',
      'No photo, video or project is confirmed to show an SL-100.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SL-150
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'sl-150-repair',
    brandSlug: 'all-o-matic',
    model: 'SL-150',
    aliases: ['SL-150AC', 'SL-150 AC', 'SL-150DC PRO', 'SL-150 DC'],
    descriptor: 'heavy-duty pad-mounted slide gate operator with an internal gearbox clutch (1/2 HP and 1 HP, AC and 24 VDC)',
    gateType: 'slide',
    duty: 'commercial',
    status: 'current',
    statusNote:
      'All-O-Matic lists the SL-150AC as discontinued and names the SL-150DC PRO as its successor; the SL-150DC PRO is current.',

    title: 'All-O-Matic SL-150 Repair | Dallas–Fort Worth',
    metaDescription:
      'All-O-Matic SL-150 clutch slipping or heavy gate stalling mid-run? We service SL-150AC and SL-150DC PRO slide operators across Dallas–Fort Worth. Call 24/7.',
    h1: 'All-O-Matic SL-150 Repair in Dallas–Fort Worth',
    heroIntro:
      'We service All-O-Matic SL-150 slide operators, both the SL-150AC and the SL-150DC PRO. The usual complaint is a heavy gate that slows or stops part-way while the motor keeps turning — the SL-150’s gearbox clutch slipping, which is usually a clue about the gate rather than a failed clutch.',
    heroPoints: [
      'We test how hard your gate is to move before we ever put a wrench on the SL-150 clutch nut',
      'We set the clutch the way All-O-Matic specifies: just past slipping, never cranked down',
      'We match the ERD jumper to your SL-150’s horsepower and capacitor count',
    ],

    identify: {
      body: [
        'The SL-150 is the bigger of All-O-Matic’s two long-running slide operators. It was sold in 1/2 HP and 1 HP AC versions (the SL-150AC, now discontinued) and continues as the SL-150DC PRO, a 24-volt brushless unit in 1/2 HP and 1 HP ratings with built-in batteries. Both are made for heavier and longer gates than the SL-100, and both carry features the SL-100 does not have.',
        'The quickest tells are inside the housing. The SL-150 has its limit switches in an enclosed limit box driven by a small sprocket, and a large clutch nut on the gearbox. Its main chain is #40 rather than the SL-100’s #41, and every SL-150 is released with a foot pedal. If you see batteries and a board with a small display, it is the DC PRO.',
      ],
      lookFor: [
        'Chassis label reading SL-150AC or SL-150DC PRO, with the horsepower (1/2 or 1)',
        'An enclosed limit box beside the gearbox rather than exposed limit nuts',
        'A large hex clutch nut on the gearbox output',
        'A #40 chain (40NP) along the gate',
        'A foot-pedal release on the chassis',
        'A larger housing than the SL-100 — All-O-Matic lists it at 15" W × 19.5" L × 25" H',
      ],
    },

    overview: [
      {
        heading: 'What the SL-150 clutch is actually for',
        body: [
          'All-O-Matic describes the SL-150’s internal clutch as protection for the operator when the gate is reversed mid-cycle. It leaves the factory set at 60 lbs of torque. On a gate that is heavier than normal the manual allows it to be tightened: half a turn at a time clockwise with a pipe wrench until the gate moves without slipping, then one further full turn — so it drives the load but still slips if the gate is reversed or jammed.',
          'That procedure tells you what a slipping SL-150 means. If the clutch was set correctly for the gate when it was installed and now slips, the gate has become harder to move. Tightening past the manufacturer’s method buries the symptom and loads the gearbox, chain and gate hardware with force they were not meant to carry.',
        ],
      },
      {
        heading: 'The clutch and the ERD do different jobs',
        body: [
          'Obstruction reversing on the SL-150 comes from the board’s Electronic Reversing Device, not the clutch. The ERD reads motor effort and reverses the gate; the clutch protects the drivetrain from shock. An SL-150 can therefore show two different failures: the gate reversing on its own (ERD too sensitive, or the gate dragging), or the gate stalling with the motor still turning (clutch slipping).',
          'On the 2022 AC board the ERD jumper has to match the motor: pins 4–5 for a 1/2 HP motor with two capacitors, 2–3 for a 1 HP motor with two capacitors, 1–2 for a 1 HP motor with three. A 1 HP unit left on a 1/2 HP pin setting will reverse at nuisance loads.',
        ],
      },
      {
        heading: 'Limit box, limit chain and the brake setting',
        body: [
          'The SL-150 limit nuts sit in a limit box turned by their own sprocket off the drive. To adjust, you push the limit lock plate outwards (on the SL-100 it goes down), move each nut toward its switch to shorten travel or away to lengthen it — about half an inch per notch — and put the plate back.',
          'Heavy gates coast. The AC board’s BRAKE dip switch helps the gate stop at the moment a limit nut contacts its switch, and All-O-Matic says to use it only on uphill or downhill installations, with the 15 A fuse swapped for a 20 A fuse. A gate on a slope that overruns its stops may need that setting rather than new limits.',
        ],
      },
      {
        heading: 'Built for traffic, with a way to count it',
        body: [
          'The SL-150 is rated for continuous duty and UL 325 Classes I through IV, and the AC version has a built-in loop rack. The AC board’s programmable relay can give a one-second pulse at every open start — All-O-Matic suggests using it for a cycle counter — and the DC PRO board has a service-cycle countdown that beeps when servicing is due.',
          'On an HOA or apartment gate that is useful. Knowing the real cycle count lets you plan chain, belt and battery replacement instead of waiting for the entrance to fail.',
        ],
      },
    ],

    specs: [
      { label: 'Motor (SL-150AC)', value: '1/2 HP or 1 HP, 120 VAC single phase' },
      { label: 'Motor (SL-150DC PRO)', value: '24 VDC brushless, 1/2 HP or 1 HP' },
      { label: 'Max gate weight (SL-150AC)', value: '1/2 HP: 1,500 lbs; 1 HP: 2,500 lbs' },
      { label: 'Max gate weight (SL-150DC PRO)', value: '1/2 HP: 3,000 lbs; 1 HP: 4,000 lbs' },
      { label: 'Max gate length', value: '60 ft' },
      { label: 'Gate speed', value: '12 in per second' },
      { label: 'Duty cycle', value: 'Continuous' },
      { label: 'Gearbox', value: '30:1 with internal clutch (factory set at 60 lbs of torque)' },
      { label: 'Chain', value: '40NP, 20 ft included' },
      { label: 'Emergency release', value: 'Mechanical foot pedal release' },
      { label: 'Current draw (SL-150AC)', value: '1/2 HP: 6.2 A; 1 HP: 8.4 A (per AC slide manual)' },
      { label: 'Breaker', value: '20 A dedicated' },
      { label: 'Battery backup (DC PRO)', value: 'Integrated, two 7Ah 12 VDC batteries; about 100 cycles on a 1,000 lb gate' },
      { label: 'Control board', value: 'ACPCB-UL (AC); BLDC-ULPCB1 (DC PRO)' },
      { label: 'UL', value: 'UL 325 2018 compliant; Classes I, II, III & IV' },
    ],

    symptoms: [
      {
        symptom: 'The motor keeps running but the gate slows down and stops part-way',
        causes:
          'The clutch slipping because the gate needs more force than it used to: worn or flat-spotted wheels, a sagging track, debris in the channel, a gate that has had panels added, or a clutch that was set loose from new.',
        whatWeDo:
          'We disengage the drive with the pedal and feel the gate through its full travel. If it drags, the gate gets fixed first; the clutch is then set to All-O-Matic’s half-turn method.',
      },
      {
        symptom: 'A heavy gate reverses by itself before it reaches the end',
        causes:
          'ERD sensitivity too high for the motor, the jumper on the wrong pins for your horsepower and capacitor count, or real drag the ERD is picking up.',
        whatWeDo: 'We confirm the motor rating on the label, set the jumper to match, adjust the pots and test reversal against an obstruction.',
      },
      {
        symptom: 'On a sloped driveway the gate overruns its stops',
        causes: 'Momentum carrying a heavy gate past the point where the limit nut trips the switch.',
        whatWeDo:
          'We re-set the limits in the limit box and, where the slope justifies it, enable the BRAKE setting with the fuse change All-O-Matic calls for.',
      },
      {
        symptom: 'The gate clunks or jerks when it starts, and the clutch nut looks moved',
        causes: 'A clutch that has been over-tightened, taking the shock of every start and reversal into the gearbox, chain and brackets.',
        whatWeDo: 'We back the clutch off, reset it from the slip point and inspect the gearbox output, chain and brackets for the damage over-tightening causes.',
      },
      {
        symptom: 'It won’t run and the pedal area has been disturbed',
        causes: 'The SL-150 pedal carries a kill switch; if the pedal is down or not fully returned the operator will not run, and the STOP CMD LED lights on AC boards.',
        whatWeDo: 'We return the pedal, check the kill switch and confirm the drive has re-engaged.',
      },
      {
        symptom: 'The loop won’t hold the gate open for a car',
        causes:
          'A failed plug-in detector in the loop rack, a broken loop wire in the pavement, or detectors on the same frequency interfering with each other.',
        whatWeDo: 'We test the loop circuit, swap the detector if it is the fault and set different frequencies on neighboring detectors.',
      },
      {
        symptom: 'The DC PRO is beeping but the gate works',
        causes: 'If a service interval has been programmed, the board counts down cycles and beeps when servicing is due.',
        whatWeDo: 'We service the operator and gate, then reset or reprogram the service-cycle count.',
      },
    ],

    components: [
      {
        part: 'Gearbox internal clutch and clutch nut',
        whatItDoes: 'Lets the drive slip if the gate is reversed mid-cycle or jammed, protecting the operator.',
        failureSigns: 'Slipping on a free-moving gate, or no slip at all when the gate is held.',
        verdict: 'adjust',
      },
      {
        part: 'Limit box, limit nuts and lock plate',
        whatItDoes: 'Set the open and closed stop points from a sprocket-driven limit shaft.',
        failureSigns: 'Stop points moving, a lock plate not seated, a broken limit drive.',
        verdict: 'adjust',
      },
      {
        part: 'ERD jumper and sensitivity pots (AC board)',
        whatItDoes: 'Match reversing force to the motor’s horsepower and capacitor count.',
        failureSigns: 'Nuisance reversals, or no reversal when the gate meets an obstruction.',
        verdict: 'adjust',
      },
      {
        part: 'Motor run capacitors (AC)',
        whatItDoes: 'Two or three capacitors, depending on the motor, give the single-phase motor its torque.',
        failureSigns: 'Weak starts on a heavy gate, humming, a hot motor.',
        verdict: 'replace-part',
      },
      {
        part: '#40 drive chain and sprockets',
        whatItDoes: 'Carry the pull from the 30:1 gearbox to the gate.',
        failureSigns: 'Stretch, slap against the housing, hooked sprocket teeth.',
        verdict: 'replace-part',
      },
      {
        part: 'Loop rack and plug-in detectors',
        whatItDoes: 'Hold safety, phantom and exit loop detectors wired to the board.',
        failureSigns: 'Gate closing on a car over the loop, or not opening on exit.',
        verdict: 'replace-part',
      },
      {
        part: 'Foot pedal release and kill switch',
        whatItDoes: 'Frees the gate for manual use and disables the motor while the pedal is down.',
        failureSigns: 'Operator dead after an outage; gate still free with the pedal up.',
        verdict: 'adjust',
      },
      {
        part: 'Control board (ACPCB-UL or BLDC-ULPCB1)',
        whatItDoes: 'Controls travel, reversing, timers, loops and monitored safety devices.',
        failureSigns: 'No response with power present, outputs failing, fault LEDs that do not clear.',
        verdict: 'repair',
      },
    ],

    repairOrReplace: {
      summary:
        'An SL-150 is a heavy, serviceable machine, and most faults are the gate, the clutch setting, a capacitor, a detector or a board. The case for replacement is a worn gearbox or a gate that is now beyond the rating of the motor it has, and on an AC unit All-O-Matic’s named successor is the SL-150DC PRO.',
      repair: [
        'Clutch slip that stops once the gate rolls freely and the clutch is reset',
        'Nuisance reversing from a mismatched ERD jumper or sensitivity',
        'Capacitor, limit switch, loop detector or chain failures',
        'A defective board that qualifies for All-O-Matic’s board-repair service (no surge or water damage)',
      ],
      replace: [
        'A 1/2 HP SL-150AC now moving more than 1,500 lbs, or a 1 HP unit over 2,500 lbs — the SL-150DC PRO is rated to 3,000 and 4,000 lbs',
        'A gearbox with worn internals where the clutch no longer holds at any correct setting',
        'A site that needs battery backup, which the AC version does not have built in',
      ],
    },

    warranty: {
      manufacturer:
        'All-O-Matic warrants the SL-150AC and SL-150DC PRO for seven years in residential and five years in commercial installations against defects in circuitry, motor, gearbox and workmanship, provided the registration card is mailed within 30 days of purchase. Without registration, coverage is one year on parts.',
      notes: [
        'The warranty covers the part, not labor, and the unit is returned to All-O-Matic at the owner’s expense.',
        'Most SL-150s are commercial installations, so the five-year term is the one that usually applies.',
        'Advance replacement is offered within the first two years after job-site troubleshooting with All-O-Matic tech support.',
        'Terms are printed in the SL-150 manuals and on allomatic.net.',
      ],
    },

    dfw: [
      {
        heading: 'Long gates on moving ground',
        body: [
          'SL-150s run the long, heavy gates on commercial yards and larger properties, and a 40- or 60-foot track is exactly where North Texas clay does its damage. A few inches of settlement along the run is enough to make the clutch slip on the uphill stretch, so a clutch that behaves in spring and slips in August usually points to the track.',
        ],
      },
      {
        heading: 'Afternoon heat on a 1 HP motor',
        body: [
          'A 1 HP SL-150 pulling a heavy gate on a July afternoon is working its capacitors and motor as hard as they get. Weak capacitors show up first in the heat as sluggish starts. Checking them is a normal part of servicing an SL-150 before summer.',
        ],
      },
      {
        heading: 'Entrances that cycle all day',
        body: [
          'On apartment and HOA entrances the SL-150’s continuous-duty rating is what earns it the job. Using the cycle-counter relay or the DC PRO service countdown turns chain and battery replacement into planned work instead of a Friday-night lockout.',
        ],
      },
    ],

    process: [
      {
        step: 'Confirm AC or DC PRO, and the horsepower',
        body: 'The label sets the ERD jumper position, the weight limit and which board we test.',
      },
      {
        step: 'Pedal down, gate by hand',
        body: 'With the drive disengaged we move the gate end to end and note where it drags. On an SL-150 this finds the clutch-slip cause more often than anything inside the housing.',
      },
      {
        step: 'Fix the gate, then the clutch',
        body: 'Wheels, track and alignment first. Then we set the clutch from its slip point using All-O-Matic’s half-turn method and check it still slips when the gate is held.',
      },
      {
        step: 'Limits, jumper and loops',
        body: 'We adjust the limit box, verify the ERD jumper against the motor and test every loop and monitored safety device.',
      },
      {
        step: 'Price it, repair it, cycle it',
        body: 'You approve the quote first. We finish with repeated full cycles and a reversal test in each direction.',
      },
    ],

    faqs: [
      {
        q: 'My SL-150 clutch is slipping. Should it just be tightened?',
        a: 'Not until the gate has been checked. All-O-Matic sets the clutch at 60 lbs from the factory and says to tighten it only enough to move the gate plus one full turn, so it still slips if the gate is reversed or jammed. A clutch that slips on a gate it used to move means the gate got harder to move.',
      },
      {
        q: 'Is the clutch what stops the gate hitting a car?',
        a: 'No. The clutch protects the operator. Reversing on an obstruction is done by the board’s ERD and by the photo-eyes or edges connected to it.',
      },
      {
        q: 'What is the difference between the SL-150 and the SL-100?',
        a: 'The SL-150 is the heavy-duty model: 30:1 gearbox with an internal clutch, enclosed limit box, #40 chain, foot pedal release, 60 ft rating and up to 2,500 lbs (AC) or 4,000 lbs (DC PRO). The SL-100 has no clutch and is rated for lighter gates.',
      },
      {
        q: 'Is the SL-150AC discontinued?',
        a: 'Yes. All-O-Matic lists the SL-150AC as discontinued and names the SL-150DC PRO as its successor.',
      },
      {
        q: 'Why does my SL-150 roll past its stop on our sloped drive?',
        a: 'Heavy gates carry momentum. The AC board has a BRAKE setting intended for uphill or downhill installations, used with a 20 A fuse. We check the limits first, then whether the brake setting is appropriate.',
      },
      {
        q: 'How many outage cycles will an SL-150DC PRO give?',
        a: 'All-O-Matic quotes about 100 cycles on a 1,000 lb gate with the two built-in 7Ah batteries. A heavier gate, older batteries or summer heat will reduce that.',
      },
    ],

    relatedModels: ['all-o-matic/sl-100-repair', 'all-o-matic/sw-350-repair'],
    relatedServices: ['gate-motor-repair', 'commercial-gate-repair', 'automatic-gate-repair', 'access-control-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'All-O-Matic SL-150AC product page (discontinued)', url: AOM_SL150AC },
      { label: 'All-O-Matic SL-150DC PRO product page', url: AOM_SL150DC },
      { label: 'All-O-Matic AC slide manual SL-100 AC[FP] / SL-150 AC (09.2022, PDF)', url: AOM_AC_SLIDE_MANUAL },
      { label: 'All-O-Matic BLDC PRO slider manual, distributor-hosted copy (PDF)', url: AOM_DC_SLIDE_MANUAL },
    ],
    toConfirm: [
      'Current draw figures come from a manual table whose columns did not extract cleanly (6.2 A for 1/2 HP and 8.4 A for 1 HP appear in the spec table; the current-draw chart reads differently). Technician to confirm from the motor label.',
      'Whether the service-cycle countdown is available on all SL-150DC PRO board revisions.',
      'Built-in loop rack is stated on the SL-150AC page; confirm whether the DC PRO uses the same rack.',
      'Parts availability for the discontinued SL-150AC gearbox and AC board.',
      'The existing all-o-matic-clutch-misdiagnosis project does not name a model, so it is not attached; if the unit was an SL-150 it could be.',
      'No photo, video or project is confirmed to show an SL-150.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SW-300
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'sw-300-repair',
    brandSlug: 'all-o-matic',
    model: 'SW-300',
    aliases: ['SW-300 AC', 'SW-300AC', 'SW-300DC PRO', 'SW-300DC'],
    descriptor: 'pad-mounted swing gate operator with a torque limiter and quick-release arm (AC and 24 VDC)',
    gateType: 'swing',
    duty: 'residential-light-commercial',
    status: 'current',
    statusNote: 'Both the SW-300 AC and the SW-300DC PRO are listed as current on allomatic.net (checked September 2026).',

    title: 'All-O-Matic SW-300 Repair | Dallas–Fort Worth',
    metaDescription:
      'All-O-Matic SW-300 arm slipping, gate stopping short or not swinging? We repair SW-300 AC and DC PRO swing operators across Dallas–Fort Worth. Call 24/7.',
    h1: 'All-O-Matic SW-300 Swing Operator Repair in Dallas–Fort Worth',
    heroIntro:
      'We repair All-O-Matic SW-300 swing operators, AC and DC PRO. Most calls are an arm that slips, a leaf that no longer opens as far as it did, or a gate that will not move after someone used the quick release — usually the torque limiter, the arm lever or the arm geometry, not the motor.',
    heroPoints: [
      'We check the SW-300 torque limiter slips when the gate is held — not just that it drives',
      'We re-lock and tighten the quick-release arm lever before blaming the operator',
      'We measure the arm geometry against All-O-Matic’s layout, because a wrong primary arm causes most SW-300 strain',
    ],

    identify: {
      body: [
        'The SW-300 is All-O-Matic’s standard pad-mounted swing operator: a box on a concrete pad inside the gate with a two-piece arm running to a bracket on the leaf. All-O-Matic’s own manual calls it the company’s most popular operator and describes it as continuous duty for residential and light commercial use. It is sold as the SW-300 AC (1/2 HP, 120 VAC) and the SW-300DC PRO (24-volt brushless with built-in batteries).',
        'What sets it apart from its bigger sibling, the SW-350, is how it releases and how it protects itself. The SW-300 has a quick-release arm — a lever on the arm hub held closed with a bolt or padlock — and an external torque limiter adjusted with a large nut. The SW-350 uses a foot pedal and a clutch inside the gearbox. If there is a pedal on your unit, you have an SW-350.',
      ],
      lookFor: [
        'Chassis label reading SW-300 AC or SW-300DC PRO',
        'A quick-release lever on the arm hub, locked with a bolt or padlock',
        'A large torque limiter nut at the output shaft',
        'A flat primary arm joined to a round pipe arm by knuckles with set screws',
        'No foot pedal on the operator',
        'On the DC PRO, two 12-volt batteries inside the housing',
      ],
    },

    overview: [
      {
        heading: 'The torque limiter: set to slip, on purpose',
        body: [
          'The SW-300 transmits drive to the arm through a torque limiter on its output (All-O-Matic part 40A54TX2), fed by a #40 chain from a 60:1 gearbox. The limiter is shipped loose. The installer tightens its large nut with a 20-inch pipe wrench until the arm does not slip while the operator runs, then grabs the gate mid-cycle to confirm it still slips. All-O-Matic calls it an important adjustment to take time over.',
          'So a limiter that slips during normal operation is telling you the gate needs more torque than when it was set — stiff hinges, a sagging leaf dragging, or wind on a solid gate — or that the nut has backed off. A limiter that will not slip when the gate is held has been overtightened, and every hard stop is going into the gearbox.',
        ],
      },
      {
        heading: 'The quick-release arm and why it gets left open',
        body: [
          'For a power failure, the SW-300 is released by removing the bolt or padlock from the arm lever and opening it, which frees the gate to be pushed by hand. To put it back in service, the lever is closed, re-pinned, and the arm adjusting screw tightened with an Allen wrench as tight as it will go.',
          'If the lever is closed but not re-pinned, or the adjusting screw is not snugged, the operator runs and the gate barely moves or drifts out of position. It is one of the most common SW-300 no-fault calls after an outage.',
        ],
      },
      {
        heading: 'Arm geometry decides how hard the SW-300 works',
        body: [
          'All-O-Matic’s layout is precise. You mark the ground under the gate bracket with the gate closed and again with it open, draw a line through both marks, and put the operator’s center shaft on that line. The primary arm section is exactly half the distance between the two marks — the manual prints “PLEASE BE EXACT” — and a chart sets the pad position by gate length up to 22 ft.',
          'An arm that is too long or too short makes the operator push at a poor angle near the ends of travel, which shows up as a limiter that slips at the same point every cycle. For gates 12 ft or less with only 20 to 34 inches behind the open leaf, All-O-Matic publishes a separate compact installation layout.',
        ],
      },
      {
        heading: 'Limits and pairs of gates',
        body: [
          'In All-O-Matic’s swinger manual the gate travel is set with limit cams: power off, loosen a cam with an Allen wrench, rotate it, retighten and test. On dual gates, two SW-300s run as master and slave over a shielded two-wire cable, and the manual says to set limits and reversing on each operator as a standalone unit before linking them, with all accessories wired to the master.',
          'The DC PRO adds a slow start and stop algorithm, adjustable speed of 17 to 25 seconds per 90° and a leaf delay — useful where overlapping leaves have to open in order.',
        ],
      },
    ],

    specs: [
      { label: 'Motor (SW-300 AC)', value: '1/2 HP, 120 VAC' },
      { label: 'Motor (SW-300DC PRO)', value: '24 VDC brushless, 1/2 HP' },
      { label: 'Max gate weight', value: '800 lbs (AC); 1,200 lbs (DC PRO)' },
      { label: 'Max gate length', value: '20 ft' },
      { label: 'Opening time', value: '17 seconds per 90° (AC); adjustable 17–25 seconds per 90° (DC PRO)' },
      { label: 'Gearbox', value: '60:1' },
      { label: 'Torque limiter', value: '40A54TX2 with torque limiter' },
      { label: 'Chain', value: '40NP' },
      { label: 'Arm', value: 'Quick-release arm, rectangular or round' },
      { label: 'Emergency release', value: 'Quick-release arm' },
      { label: 'Battery backup (DC PRO)', value: 'Integrated, two 7Ah 12 VDC batteries; up to 250 cycles' },
      { label: 'Control board', value: 'ACPCB-UL (AC); BLDC-ULPCB (DC PRO)' },
      { label: 'Duty cycle', value: 'Continuous' },
      { label: 'Dimensions / weight (AC)', value: '12" × 17" × 25.5"; 110 lbs plus 35 lb arm' },
      { label: 'UL 325', value: 'Listed by All-O-Matic as UL 325 2018 compliant' },
    ],

    symptoms: [
      {
        symptom: 'The motor runs but the arm slips and the gate hardly moves',
        causes:
          'A torque limiter nut that has backed off, a quick-release lever not fully closed and pinned, a loose arm adjusting screw, or a leaf so stiff on its hinges that it now exceeds the limiter setting.',
        whatWeDo:
          'We open the lever and swing the leaf by hand to feel the hinges, then re-lock the arm, set the limiter from the slip point and confirm it still slips when we hold the gate.',
      },
      {
        symptom: 'The gate doesn’t open as far as it used to',
        causes:
          'Loose set screws letting the pipe arm move in its knuckles, a limit cam that has shifted, or a limiter slipping a little every cycle near full open.',
        whatWeDo: 'We mark the arm, check each knuckle’s set screws, reset the limit cam and look for where in the swing the slip happens.',
      },
      {
        symptom: 'It struggles or slips at the same spot every time',
        causes: 'Arm geometry off the manufacturer’s layout, so the operator loses leverage near the end of travel, or a hinge binding at that angle.',
        whatWeDo: 'We measure the primary arm against the closed and open bracket positions and correct the arm length or bracket position.',
      },
      {
        symptom: 'On windy days the gate stops or reverses',
        causes: 'Wind load on a solid or privacy-panel leaf exceeding the limiter or tripping reversal.',
        whatWeDo:
          'We confirm the limiter and reversing are set correctly for the gate, and tell you honestly if the leaf area is more than a 20 ft, 800 lb-class operator should be handling.',
      },
      {
        symptom: 'On our double gate one leaf lags or the pair gets out of sync',
        causes:
          'Master/slave cable damage, different limit settings on the two operators, a slave unit with a slipping limiter, or accessories wired to the slave instead of the master.',
        whatWeDo: 'We set each operator up on its own, verify the shielded link cable, and then re-link and test the pair.',
      },
      {
        symptom: 'After a board was replaced, the gate runs the wrong way',
        causes:
          'Opening direction not set for the install. In All-O-Matic’s swinger manual the limit and motor wire colors for left- and right-hand opening are reversed between the SW-300 and the SW-350, so a wiring chart for the wrong model gets it backwards.',
        whatWeDo: 'We confirm the handing and set the wiring or direction setting to the SW-300 chart.',
      },
      {
        symptom: 'The DC PRO gives up during a power cut',
        causes: 'Batteries that no longer deliver the up-to-250 cycles All-O-Matic quotes, often after a few hot summers.',
        whatWeDo: 'We load-test the batteries and the charging circuit and replace what has failed.',
      },
    ],

    components: [
      {
        part: 'Torque limiter (40A54TX2) and adjusting nut',
        whatItDoes: 'Drives the arm while allowing it to slip if the gate is held or jammed.',
        failureSigns: 'Slipping in normal use, or no slip at all when the leaf is held mid-cycle.',
        verdict: 'adjust',
      },
      {
        part: 'Quick-release arm hub, lever and adjusting screw',
        whatItDoes: 'Locks the arm to the operator and lets it be freed in an outage.',
        failureSigns: 'Arm moving independently of the hub, lever not staying pinned.',
        verdict: 'adjust',
      },
      {
        part: 'Primary arm, pipe arm and knuckles',
        whatItDoes: 'Convert the output rotation into the swing of the leaf.',
        failureSigns: 'Bent flat bar, pipe slipping in the knuckle, worn pivot bolts, loose gate bracket.',
        verdict: 'replace-part',
      },
      {
        part: 'Limit cams and limit switches',
        whatItDoes: 'Set the open and closed positions.',
        failureSigns: 'Stop positions changing, gate running into its stop, switch not clicking.',
        verdict: 'adjust',
      },
      {
        part: '60:1 gearbox and #40 chain',
        whatItDoes: 'Reduce motor speed and carry drive to the torque limiter.',
        failureSigns: 'Knocking at start and stop, chain slack, oil at the shaft seal.',
        verdict: 'service',
      },
      {
        part: 'Control board (ACPCB-UL or BLDC-ULPCB)',
        whatItDoes: 'Runs travel, reversing sensitivity, timer, master/slave and safety inputs.',
        failureSigns: 'No response with power present, timer or master/slave functions failing.',
        verdict: 'repair',
      },
      {
        part: 'Batteries (DC PRO)',
        whatItDoes: 'Run the gate through outages.',
        failureSigns: 'Few or no cycles on battery, low-battery indication.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'An SW-300 rarely needs replacing for a slipping arm or a gate that stops short — those are torque limiter, arm and hinge problems. Replacement is the honest answer when the leaf is bigger or heavier than the SW-300 is rated for, or the gearbox is worn out.',
      repair: [
        'Torque limiter slipping or overtightened',
        'Quick-release lever or arm adjusting screw loose after an outage',
        'Arm geometry or hinge problems making the operator strain',
        'Board, limit switch or battery failures',
      ],
      replace: [
        'An AC unit on a leaf over 800 lbs or 20 ft — the SW-300DC PRO is rated to 1,200 lbs at the same length, and the SW-350 class goes heavier and to 22 ft',
        'A gearbox with worn internals knocking on every start',
        'A solid leaf in an exposed spot that keeps overpowering the limiter, where a heavier-rated operator is the fix',
      ],
    },

    warranty: {
      manufacturer:
        'All-O-Matic publishes a seven-year residential and five-year commercial warranty for the SW-300 AC and SW-300DC PRO, conditional on returning the warranty registration card within 30 days of purchase.',
      notes: [
        'All-O-Matic’s written warranty covers defects in circuitry, motor, gearbox and workmanship; labor and shipping to the manufacturer are the owner’s cost.',
        'Unregistered operators receive one year of parts coverage.',
        'Warranty terms and the registration card are on each SW-300 product page at allomatic.net.',
      ],
    },

    dfw: [
      {
        heading: 'Thunderstorm wind on swing leaves',
        body: [
          'North Texas storms throw strong gusts at driveway gates, and a solid or privacy-panel leaf acts like a sail. On an SW-300 the torque limiter is set to slip, so a gust can move the leaf against the arm. A limiter that has slipped repeatedly through a storm season may need resetting even though nothing is broken.',
        ],
      },
      {
        heading: 'Hinge posts in clay',
        body: [
          'A swing operator lives or dies by its hinge post. When clay soil shrinks and swells, hinge posts lean, leaves sag and hinges bind at one point in the swing. An SW-300 then slips or stalls at that same angle every cycle. Resetting the post or re-hanging the leaf fixes what adjusting the operator cannot.',
        ],
      },
      {
        heading: 'Grounding and lightning',
        body: [
          'All-O-Matic’s swinger manual requires a proper ground for every operator — a single, unspliced ground wire to a ground rod — and explains that it minimizes damage from a nearby lightning strike or static discharge. On an SW-300 that has lost a board in a storm, we check the ground before fitting another one.',
        ],
      },
    ],

    process: [
      {
        step: 'Free the leaf and feel the hinges',
        body: 'We open the quick-release lever and swing the gate through its full arc. Binding hinges or a dragging leaf explain most SW-300 complaints.',
      },
      {
        step: 'Check the arm',
        body: 'Lever, adjusting screw, knuckle set screws and the primary arm length against the closed and open bracket marks.',
      },
      {
        step: 'Set the torque limiter',
        body: 'From the slip point, tightened until the arm drives without slipping, then tested by holding the gate mid-cycle.',
      },
      {
        step: 'Limits, board and pair',
        body: 'Limit cams, reversing, safety devices, and — on double gates — each operator alone before re-linking master and slave.',
      },
      {
        step: 'Quote before work, test after',
        body: 'You approve the price first; we finish with repeated full cycles in calm conditions and a hold test on the limiter.',
      },
    ],

    faqs: [
      {
        q: 'Why does my All-O-Matic SW-300 arm slip?',
        a: 'Because it is designed to. The torque limiter slips if the gate is held. When it slips in normal use, the nut has backed off, the quick-release lever is not locked, or the gate has become stiffer than when the limiter was set.',
      },
      {
        q: 'How do I open my SW-300 by hand in a power cut?',
        a: 'Remove the bolt or padlock from the arm lever and open the lever; the gate can then be pushed. When power returns, close and re-pin the lever and tighten the arm adjusting screw, or the gate will slip.',
      },
      {
        q: 'SW-300 or SW-350 — which do I have?',
        a: 'Look for a foot pedal. The SW-300 has a quick-release arm and an external torque limiter; the SW-350 has a foot pedal and a clutch inside the gearbox.',
      },
      {
        q: 'How heavy a gate can the SW-300 run?',
        a: 'All-O-Matic rates the SW-300 AC at 800 lbs and the SW-300DC PRO at 1,200 lbs, both up to 20 ft.',
      },
      {
        q: 'Can two SW-300s run a double gate?',
        a: 'Yes, as master and slave linked with a shielded two-wire cable. All-O-Matic says to set up each operator alone first and to wire all accessories to the master.',
      },
      {
        q: 'Is the SW-300 still made?',
        a: 'Yes. Both the SW-300 AC and the SW-300DC PRO are current on All-O-Matic’s site.',
      },
    ],

    relatedModels: ['all-o-matic/sw-350-repair', 'all-o-matic/sl-100-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'iron-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'All-O-Matic SW-300 AC product page', url: AOM_SW300AC },
      { label: 'All-O-Matic SW-300DC PRO product page', url: AOM_SW300DC },
      { label: 'All-O-Matic SW-350 / SW-300 swinger instruction manual (2007), dealer-hosted copy (PDF)', url: AOM_SWING_MANUAL },
    ],
    toConfirm: [
      'Limit cams, handing wire colors and the arm layout are from the 2007 AC swinger manual. Confirm they still apply to current SW-300 AC and to the SW-300DC PRO (DC PRO swing manual could not be read).',
      'Whether current AC swing boards set handing with a dip switch (as current AC slide boards do) rather than by swapping wires.',
      'The 2007 manual says battery backup was available for the SW-300; the current SW-300 AC page lists none. Confirm.',
      'Whether All-O-Matic’s board-repair and advance-replacement policy (published in the slide manuals) applies equally to swing operators.',
      'No photo is confirmed to show an SW-300 (all-o-matic-07 shows an All-O-Matic swing arm, model unknown).',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SW-350
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'sw-350-repair',
    brandSlug: 'all-o-matic',
    model: 'SW-350',
    aliases: ['SW-350 AC', 'SW-350AC', 'SW-350DC PRO', 'SW-350DC'],
    descriptor: 'heavy-duty pad-mounted swing gate operator with an internal gearbox clutch and foot pedal release (AC and 24 VDC)',
    gateType: 'swing',
    duty: 'commercial',
    status: 'current',
    statusNote:
      'All-O-Matic lists the SW-350 AC as discontinued and names the SW-350DC PRO as its successor; the SW-350DC PRO is current.',

    title: 'All-O-Matic SW-350 Repair | Dallas–Fort Worth',
    metaDescription:
      'All-O-Matic SW-350 gate stalling, loops failing or stuck on the foot pedal? We repair SW-350 AC and DC PRO operators across Dallas–Fort Worth. Call 24/7.',
    h1: 'All-O-Matic SW-350 Repair for Heavy Swing Gates in Dallas–Fort Worth',
    heroIntro:
      'We repair All-O-Matic SW-350 swing operators — the discontinued SW-350 AC and the current SW-350DC PRO. These run the heavier leaves, often with loop detectors plugged straight into the operator, so the calls we see are heavy gates stalling, pedal releases left engaged and loop harness faults.',
    heroPoints: [
      'We test the SW-350’s plug-in loop harnesses and detector frequencies, not just the motor',
      'We check the foot pedal release is fully disengaged before diagnosing a dead SW-350',
      'We confirm your leaf is inside the SW-350 rating for its horsepower before recommending anything',
    ],

    identify: {
      body: [
        'The SW-350 is the heavy-duty member of All-O-Matic’s swing range. The company’s 2007 swinger manual described it as its highest duty rated swing operator. It was built as the SW-350 AC in 1/2 HP and 1 HP versions and continues as the SW-350DC PRO, a 24-volt brushless operator in the same two ratings with batteries on board.',
        'Two things identify it on sight. The SW-350 has a foot pedal on the operator for manual release, where the SW-300 has a quick-release lever on the arm. And on the AC version, three pre-wired loop harnesses labelled SAFETY, PHANTOM and EXIT sit in the operator, ready for plug-in detectors. The label will also tell you the horsepower, which sets the weight the operator can legitimately move.',
      ],
      lookFor: [
        'Chassis label reading SW-350 AC or SW-350DC PRO, with 1/2 HP or 1 HP',
        'A foot pedal release on the operator',
        'Plug-in loop detector sockets and wire pairs labelled SAFETY, PHANTOM and EXIT (AC)',
        'A larger housing and pad than the SW-300',
        'No external torque limiter nut at the arm — the clutch is inside the gearbox',
      ],
    },

    overview: [
      {
        heading: 'A clutch inside the gearbox, not a limiter at the arm',
        body: [
          'All-O-Matic specifies the SW-350 with a 60:1 gearbox “with internal clutch”, on both the AC and DC PRO versions. That differs from the SW-300, whose torque limiter sits outside at the output with an adjusting nut you can see. On an SW-350 the slip happens inside the gearbox.',
          'The practical effect is that you cannot eyeball a slipping SW-350. A leaf that stalls while the motor keeps running, or stops at a slightly different point each time, is tested by holding and measuring the gate rather than watching a nut. Because the clutch is internal, gearbox condition matters more here than on the SW-300.',
        ],
      },
      {
        heading: 'The foot pedal release',
        body: [
          'In a power failure the AC SW-350 is released by turning the power off, pushing the pedal down and moving it slightly to the right so it stays down, then pushing the gate open. The SW-350DC PRO also uses a mechanical foot pedal release.',
          'Because the pedal is designed to latch in the down position, a pedal left latched after an outage leaves the gate free and the operator unable to drive it. It is worth checking before anything else when an SW-350 suddenly does nothing after a storm.',
        ],
      },
      {
        heading: 'Pre-wired loop harnesses',
        body: [
          'The AC SW-350 was built for traffic. It provides three pre-wired loop harnesses — safety, phantom and exit — so 120 VAC plug-in detectors install without separate wiring. The loop leads connect to grey and brown wire pairs labelled EXIT, PHANTOM and SAFETY in the electrical box behind the gearbox.',
          'All-O-Matic’s instructions carry three details that matter for repair: every detector must be on a different frequency, the SAFETY jumper on the terminal strip must be removed when a safety loop is used, and lead-in wires must be twisted at least six turns per foot. A loop that works one day and not the next is often one of those three.',
        ],
      },
      {
        heading: 'Horsepower sets the weight',
        body: [
          'All-O-Matic rates the SW-350 AC at 800 lbs with a 1/2 HP motor and 1,500 lbs with 1 HP, up to 22 ft. The SW-350DC PRO is rated at 2,000 lbs (1/2 HP) and 2,500 lbs (1 HP), also to 22 ft, with an adjustable 17 to 25 seconds per 90° opening.',
          'A 1/2 HP SW-350 on a leaf that has had wood or steel panels added can be over its rating without anyone noticing. The motor label, not the look of the gate, decides whether a stalling SW-350 needs repair or is simply undersized for what it now carries.',
        ],
      },
    ],

    specs: [
      { label: 'Motor (SW-350 AC)', value: '1/2 HP or 1 HP, 120 VAC' },
      { label: 'Motor (SW-350DC PRO)', value: '24 VDC brushless, 1/2 HP or 1 HP' },
      { label: 'Max gate weight (AC)', value: '1/2 HP: 800 lbs; 1 HP: 1,500 lbs' },
      { label: 'Max gate weight (DC PRO)', value: '1/2 HP: 2,000 lbs; 1 HP: 2,500 lbs' },
      { label: 'Max gate length', value: '22 ft' },
      { label: 'Opening time', value: '19 seconds per 90° (AC); adjustable 17–25 seconds per 90° (DC PRO)' },
      { label: 'Gearbox', value: '60:1 with internal clutch' },
      { label: 'Emergency release', value: 'Mechanical foot pedal release' },
      { label: 'Arm', value: 'Rectangular or round swinger arm' },
      { label: 'Loop detectors (AC)', value: 'Three pre-wired harnesses (safety, phantom, exit) for 120 VAC plug-in detectors' },
      { label: 'Battery backup (DC PRO)', value: 'Integrated, two 7Ah 12 VDC batteries; up to 250 cycles' },
      { label: 'Control board', value: 'ACPCB-UL (AC); ALL-BLDC PRO, BLDC-ULPCB / BLDC-ULPCB1 (DC PRO)' },
      { label: 'Duty cycle', value: 'Continuous' },
      { label: 'UL 325', value: 'Listed by All-O-Matic as UL 325 2018 compliant' },
    ],

    symptoms: [
      {
        symptom: 'The operator hums or runs but the heavy leaf barely moves',
        causes:
          'The internal clutch slipping under a leaf that has become heavier or stiffer, a pedal release not fully disengaged, or on AC units a weak motor capacitor struggling with the load.',
        whatWeDo:
          'We confirm the pedal is up and the drive engaged, check the hinges with the gate released, weigh up the leaf against the motor rating and test the capacitor before looking inside the gearbox.',
      },
      {
        symptom: 'After a power cut the gate swings freely and the operator does nothing',
        causes: 'The foot pedal latched in its down position from the manual release.',
        whatWeDo: 'We release the pedal latch, re-engage the drive and run the gate to confirm travel and reversing.',
      },
      {
        symptom: 'Cars sit on the exit loop and the gate doesn’t open',
        causes:
          'A failed or unplugged detector in the exit harness, a broken loop in the pavement, or a detector sharing a frequency with the phantom or safety detector.',
        whatWeDo: 'We test the loop wire, swap-test the detector and set each of the three detectors to a different frequency.',
      },
      {
        symptom: 'The gate starts closing while a car is still in the way',
        causes:
          'A safety loop not seeing the vehicle — broken lead-in, loose lead-in twist, a failed detector, or the SAFETY jumper still fitted so the board ignores the safety loop.',
        whatWeDo: 'We treat this as urgent: take the gate out of automatic use, then test the loop, detector and jumper, and check photo-eyes.',
      },
      {
        symptom: 'Stops at a different point every cycle',
        causes: 'Internal clutch slip under load, wind on the leaf, or loose arm hardware letting the leaf move relative to the operator.',
        whatWeDo: 'We mark the arm and leaf, cycle the gate, and check the arm fixings before assessing the gearbox.',
      },
      {
        symptom: 'After a board swap the gate runs backwards',
        causes:
          'Handing set from the SW-300 chart. All-O-Matic’s swinger manual shows the SW-350 limit and motor wire colors reversed relative to the SW-300.',
        whatWeDo: 'We confirm handing and wire or set the board to the SW-350 chart.',
      },
    ],

    components: [
      {
        part: '60:1 gearbox with internal clutch',
        whatItDoes: 'Reduces motor speed and slips internally if the leaf is reversed or jammed.',
        failureSigns: 'Leaf stalling with the motor running, knocking, oil at the output seal.',
        verdict: 'service',
      },
      {
        part: 'Foot pedal release and latch',
        whatItDoes: 'Disengages the drive so the leaf can be pushed by hand.',
        failureSigns: 'Pedal staying down, drive not re-engaging, gate free with power on.',
        verdict: 'adjust',
      },
      {
        part: 'Pre-wired loop harnesses and plug-in detectors',
        whatItDoes: 'Connect safety, phantom and exit loops to the board.',
        failureSigns: 'Gate ignoring vehicles, opening on its own, or closing onto a car.',
        verdict: 'replace-part',
      },
      {
        part: 'Limit switches and cams',
        whatItDoes: 'Set the open and closed leaf positions.',
        failureSigns: 'Leaf over-travelling into its stop or stopping short.',
        verdict: 'adjust',
      },
      {
        part: 'Motor capacitor(s) (AC)',
        whatItDoes: 'Provide starting and running torque for the single-phase motor.',
        failureSigns: 'Weak starts on a heavy leaf, humming, overheating.',
        verdict: 'replace-part',
      },
      {
        part: 'Swinger arm, knuckles and gate bracket',
        whatItDoes: 'Carry the operator’s torque to a heavy leaf.',
        failureSigns: 'Bent sections, worn pivots, a bracket pulling off the frame.',
        verdict: 'replace-part',
      },
      {
        part: 'Control board',
        whatItDoes: 'Runs travel, reversing, loop inputs, timers and master/slave.',
        failureSigns: 'No response with power present, inputs not registering.',
        verdict: 'repair',
      },
    ],

    repairOrReplace: {
      summary:
        'An SW-350 is built for heavy leaves and a lot of traffic, and loops, pedals, capacitors and boards are all serviceable. The real replacement question on an AC unit is gearbox condition — its clutch is internal and the SW-350 AC is no longer made — and whether the leaf has outgrown a 1/2 HP rating.',
      repair: [
        'Loop harness, detector or frequency faults',
        'A foot pedal release latched or not re-engaging',
        'Capacitor, limit switch or board failures',
        'Arm hardware worn by a heavy leaf',
      ],
      replace: [
        'A 1/2 HP SW-350 AC on a leaf now over 800 lbs, or a 1 HP unit over 1,500 lbs — the SW-350DC PRO is rated to 2,000 and 2,500 lbs',
        'An AC gearbox whose internal clutch will no longer hold the leaf, where the discontinued model makes a gearbox hard to justify',
        'A site that needs battery operation during outages',
      ],
    },

    warranty: {
      manufacturer:
        'All-O-Matic lists a seven-year residential and five-year commercial warranty on the SW-350 AC and SW-350DC PRO, with registration required within 30 days of purchase.',
      notes: [
        'Coverage is for defects in circuitry, motor, gearbox and workmanship; labor and freight to the manufacturer are the owner’s responsibility.',
        'Without registration All-O-Matic provides one year on parts.',
        'SW-350 AC units still in warranty will be few, given the model is discontinued; check the purchase date on your installer’s paperwork.',
      ],
    },

    dfw: [
      {
        heading: 'Heavy leaves on shifting hinge posts',
        body: [
          'An SW-350 is usually hanging a big leaf, and a big leaf puts real leverage on its hinge post. When North Texas clay dries out and the post leans, the leaf drops and drags, and the internal clutch starts slipping. The repair is at the post and hinges first.',
        ],
      },
      {
        heading: 'Loops in cracking pavement',
        body: [
          'SW-350s often run loop-controlled entrances. Driveways and entry slabs crack as the soil moves, and a crack across a saw-cut breaks the loop wire inside it. A loop that fails after a dry summer or a hard freeze is often a pavement problem rather than a detector.',
        ],
      },
      {
        heading: 'Commercial and HOA traffic in summer',
        body: [
          'On a busy HOA or commercial swing gate the SW-350 cycles through the hottest part of the day. A 1 HP AC unit near its rating works its motor and capacitors hardest then, so afternoon-only stalls point to load and heat before a failed board.',
        ],
      },
    ],

    process: [
      {
        step: 'Pedal, power and label',
        body: 'We check the pedal is up, the drive engaged and the power present, and read the horsepower off the label.',
      },
      {
        step: 'Swing the leaf released',
        body: 'With the drive disengaged we move the leaf through its arc and check hinges, post and arm for binding.',
      },
      {
        step: 'Loops and safety inputs',
        body: 'Each harness, detector and frequency, the SAFETY jumper, loop resistance and any photo-eyes or edges.',
      },
      {
        step: 'Drive and electrics',
        body: 'Clutch behavior under a held leaf, gearbox noise and seals, capacitors, limit switches and board outputs.',
      },
      {
        step: 'Quote, repair, verify',
        body: 'A price before any work; afterwards, full cycles with a vehicle-loop test and a reversal test.',
      },
    ],

    faqs: [
      {
        q: 'How do I open an All-O-Matic SW-350 in a power cut?',
        a: 'Per All-O-Matic: turn the power off, push the foot pedal down and move it slightly to the right so it stays down, then push the gate open. Release the pedal again before power is restored.',
      },
      {
        q: 'Where is the clutch on an SW-350?',
        a: 'Inside the gearbox. All-O-Matic specifies a 60:1 gearbox with internal clutch, unlike the SW-300’s external torque limiter.',
      },
      {
        q: 'Is the SW-350 AC discontinued?',
        a: 'Yes. All-O-Matic lists it as discontinued and names the SW-350DC PRO as its successor.',
      },
      {
        q: 'My SW-350 exit loop stopped working. Is it the operator?',
        a: 'Usually not. On the AC SW-350 the detectors plug into pre-wired harnesses, so the fault is more often the detector, a frequency clash between detectors, or a break in the loop wire in the pavement.',
      },
      {
        q: 'How heavy a leaf can an SW-350 swing?',
        a: 'The AC version is rated at 800 lbs with 1/2 HP and 1,500 lbs with 1 HP; the DC PRO at 2,000 and 2,500 lbs. All versions are rated to 22 ft.',
      },
    ],

    relatedModels: ['all-o-matic/sw-300-repair', 'all-o-matic/sl-150-repair'],
    relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'access-control-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'All-O-Matic SW-350 AC product page (discontinued)', url: AOM_SW350AC },
      { label: 'All-O-Matic SW-350DC PRO product page', url: AOM_SW350DC },
      { label: 'All-O-Matic SW-350 / SW-300 swinger instruction manual (2007), dealer-hosted copy (PDF)', url: AOM_SWING_MANUAL },
    ],
    toConfirm: [
      'Internal clutch adjustment procedure for the SW-350 is not published in the manual read; technician to confirm whether it is field-adjustable.',
      'The 2007 motor rating chart lists SW-350 versions at 3/4 HP as well as 1/2 and 1 HP; current pages list 1/2 and 1 HP only. Older units may be 3/4 HP.',
      'Whether the SW-350DC PRO keeps the pre-wired loop harnesses of the AC version.',
      'Whether the SW-350 pedal has a kill switch like the SL-series pedals (not stated in the swinger manual).',
      '"Highest duty rated" is All-O-Matic’s 2007 description; current lineup includes the SW-375DC PRO, not researched here.',
      'No photo, video or project is confirmed to show an SW-350.',
    ],
    indexable: true,
  },
]
