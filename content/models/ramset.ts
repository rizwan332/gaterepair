/**
 * Ramset model pages.
 *
 * "Ramset" is a real US gate operator manufacturer: Ramset Automatic Gate
 * Systems, Inc., Sun Valley, California (ramsetinc.com). Not to be confused
 * with Ramset powder-actuated fastening tools, which is an unrelated brand.
 *
 * Researched Sept 2026 from ramsetinc.com product, warranty and manual pages,
 * the Ramset RAM 100/1000/5500 "Intelligate" manual (dealer-hosted) and the
 * Ramset DC RAM 100/1000/5500 manual bill of materials.
 *
 * Existing site models 'RAM 200', 'RAM 400', 'Barrier Arm Series' and
 * 'Slide Series' were not found in Ramset's lineup and are not written.
 *
 * ⚠ index.ts `modelMatching` treats 'RAM 100' and 'RAM 1000' as a match for
 * each other (prefix + ≤2 chars). Brand-page links for these two names need an
 * exact-match fix there.
 */

import type { ModelPage } from './types'

const RAMSET_RAM100 = 'https://www.ramsetinc.com/ram100'
const RAMSET_RAM1000AC = 'https://www.ramsetinc.com/ram1000ac'
const RAMSET_RAM1000DC = 'https://www.ramsetinc.com/ram1000dc'
const RAMSET_LINEUP = 'https://www.ramsetinc.com/gateoperators'
const RAMSET_WARRANTY = 'https://www.ramsetinc.com/warranty'
const RAMSET_MANUALS = 'https://www.ramsetinc.com/ramset-manuals'
const RAMSET_INTELLIGATE_MANUAL = 'https://ramsetstore.com/store/pdfs/ramset-ram-100-manual.pdf'
const RAMSET_DC_MANUAL = 'https://www.ramsetinc.com/s/DC-100-101-1000-5500_5-31-24-small.pdf'

export const ramsetModels: ModelPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // RAM 100
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'ram-100-repair',
    brandSlug: 'ramset',
    model: 'RAM 100',
    aliases: ['RAM 100 AC', 'RAM100', 'Ramset 100', 'R100'],
    descriptor: 'half-horsepower pad-mounted chain-drive slide gate operator with foot pedal release',
    gateType: 'slide',
    duty: 'residential-light-commercial',
    status: 'current',
    statusNote:
      'The RAM 100 AC is current on ramsetinc.com, with a RAM 100 DC alongside it. Older units run the Intelligate control board; current units list separate logic and driver boards.',

    title: 'Ramset RAM 100 Repair | Dallas–Fort Worth',
    metaDescription:
      'Ramset RAM 100 slide gate alarm sounding, reversing after a few feet or not closing? We repair RAM 100 operators across Dallas–Fort Worth. Call us 24/7.',
    h1: 'Ramset RAM 100 Slide Operator Repair in Dallas–Fort Worth',
    heroIntro:
      'We repair Ramset RAM 100 slide gate operators, both older Intelligate-board units and current models. The calls we get most are a gate that locks out with its alarm sounding, or one that moves a couple of feet and reverses — both tied to how the RAM 100’s reversing device reacts to load.',
    heroPoints: [
      'We find why the RAM 100’s ERD tripped twice before clearing the six-minute alarm lockout',
      'We check the thermal overload button on the motor before condemning a RAM 100 that won’t close',
      'We reset the limit adjustment nuts under the spring-loaded bracket and confirm the limit LEDs',
    ],

    identify: {
      body: [
        'The RAM 100 is Ramset’s smallest pad-mounted AC slide operator: a 1/2 HP motor bolted straight to a gear reducer, driving a roller chain along the gate, with a foot pedal to release it. Ramset currently lists it as a residential and commercial operator, and makes a RAM 100 DC version on the same chassis.',
        'Two generations are in the field. Older units use Ramset’s Intelligate control board, with dip switches in banks labelled A, B and C and three pushbuttons underneath. Current units list a logic board and a separate AC driver board. Knowing which you have matters because the ratings changed: the Intelligate-era manual rates the RAM 100 at 700 lbs and 20 ft, while Ramset’s current page lists 1,000 lbs and 35 ft.',
      ],
      lookFor: [
        'A Ramset label reading RAM 100 or Ram 100 AC on the chassis',
        'A polyethylene cover over a steel chassis, smaller than the RAM 1000',
        'A foot pedal release on the operator',
        'The motor mounted directly to the gear reducer — no belt',
        'Two limit adjustment nuts on a threaded shaft under a spring-loaded bracket',
        'An Intelligate board with A/B/C dip switch banks (older) or separate logic and driver boards (current)',
      ],
    },

    overview: [
      {
        heading: 'Direct drive into a size 43 reducer',
        body: [
          'Ramset’s parts list for the RAM 100 shows a C-face 120 VAC 1/2 HP motor coupled directly to a size 43 gear reducer at a 30:1 ratio, turning a 41B12 sprocket on a #41 drive chain. There is no belt to slip or replace, which removes one common failure point but means motor and reducer faults show up directly as a gate that will not move.',
          'The limit system is driven off the reducer by its own short #41 limit chain (18 links) to a limit shaft. That shaft and its nuts are what set the gate’s stopping points, and they are separate parts from the larger RAM 1000’s.',
        ],
      },
      {
        heading: 'How the reversing device behaves',
        body: [
          'On Intelligate-board RAM 100s the Electronic Reversing Device watches the motor. When it detects an obstruction while closing it reverses — for two seconds and stops, or all the way to the open limit if the FULL REV ERD dip switch (C2) is on. If the ERD is triggered twice before the gate reaches a limit, the board sounds its alarm for six minutes and ignores every command until the time is up.',
          'Ramset’s homeowner instructions say the alarm is reset by switching the operator off for about ten seconds and back on. That clears the lockout but not the cause. Something made the gate hard to move twice in one cycle, and the next cycle will do the same.',
        ],
      },
      {
        heading: 'Sensitivity is set by switches, not a dial',
        body: [
          'The Intelligate board sets ERD sensitivity with dip switches rather than a potentiometer. For a 1/2 HP motor, switch A4 is the relevant setting, working together with B8: both off is most sensitive, A4 on gives medium sensitivity for a 1/2 HP motor, and both on is least sensitive. Ramset’s troubleshooting table lists “gate moves a couple of feet and then reverses” as ERD too sensitive, fixed by turning A4 on for 1/2 HP motors.',
          'That setting should only be changed once the gate rolls freely. On a gate that drags, reducing sensitivity takes away the reversing force the operator relies on.',
        ],
      },
      {
        heading: 'Settings that surprise people',
        body: [
          'Dip switch C1, SECURE CLOSE, makes the board check the gate after power returns and close it automatically if safety devices are clear. Ramset warns that with C1 on, the gate will move when power is applied — it must be off while anyone works on the operator. Switch C7 changes the unit from left-hand to right-hand by reversing the motor and limit switches without moving any wires.',
          'Current RAM 100 AC units add an EP Learn mode for photo-eye installation, an adjustable close delay timer and a relay connection for smart-home control, according to Ramset’s product page.',
        ],
      },
    ],

    specs: [
      { label: 'Class (current)', value: 'Residential / Commercial' },
      { label: 'Motor', value: '1/2 HP, 115 VAC single phase, 4.5 A' },
      { label: 'Max gate weight', value: '1,000 lbs (current listing); 700 lbs (Intelligate-era manual)' },
      { label: 'Max gate length', value: '35 ft (current listing); 20 ft (Intelligate-era manual)' },
      { label: 'Gate speed', value: '12 in per second' },
      { label: 'Duty cycle', value: 'Continuous' },
      { label: 'Gear reducer', value: 'Size 43, 30:1 ratio, C-face' },
      { label: 'Drive sprocket', value: '41B12, 1/2"' },
      { label: 'Limit chain', value: '#41, 18 links' },
      { label: 'Emergency release', value: 'Foot pedal release' },
      { label: 'Control boards', value: 'Logic board (AC/DC) and AC driver board (current); Intelligate board (older units)' },
      { label: 'Alarm', value: 'Horn alarm buzzer, 120 dB (current parts list)' },
      { label: 'Listing', value: 'ETL listed, UL 325 compliant (per Ramset)' },
    ],

    symptoms: [
      {
        symptom: 'The alarm went off for several minutes and the gate ignored the remote',
        causes:
          'The ERD tripped twice before the gate reached a limit, putting the board into its six-minute lockout — usually a gate dragging on worn wheels or a bent track, or a real obstruction.',
        whatWeDo:
          'We release the pedal and move the gate its full length by hand to find the tight spot, repair it, then reset the board and test reversal.',
      },
      {
        symptom: 'It moves a couple of feet and then goes back',
        causes: 'ERD sensitivity set too high for the 1/2 HP motor, or drag at the start of travel the ERD is correctly reacting to.',
        whatWeDo: 'We check the gate by hand first, then the A4/B8 sensitivity setting, and confirm the gate still reverses on an obstruction.',
      },
      {
        symptom: 'It opens but won’t close',
        causes:
          'Per Ramset: a popped thermal overload button on the motor, a blown 10 A fuse, or an EXIT, REV LOOP or RADIO LED held on by a faulty accessory, a stuck transmitter button or a failed receiver.',
        whatWeDo: 'We read the board LEDs, disconnect accessories one at a time, check the fuse and reset the motor overload — and find out why it tripped.',
      },
      {
        symptom: 'No lights on the board at all',
        causes: 'A tripped breaker, the board’s 1/2 A fuse, or a damaged power supply on the control board.',
        whatWeDo: 'We confirm incoming power, check the fuse and test the board supply before recommending board repair or replacement.',
      },
      {
        symptom: 'The gate stops short or overshoots',
        causes: 'Limit adjustment nuts moved, the spring-loaded bracket not holding them, or worn wheels changing where the gate sits on the track.',
        whatWeDo: 'We check the wheels and track, reset the nuts with the power off, and confirm the limit LED lights at each end.',
      },
      {
        symptom: 'The gate started moving by itself when the power came back',
        causes: 'SECURE CLOSE (dip switch C1) is on, so the board closes an open gate automatically when power is restored.',
        whatWeDo: 'We explain what the setting does, confirm the safety devices that must be clear for it to close, and set it to how you want the gate to behave.',
      },
      {
        symptom: 'The remote only works right next to the gate',
        causes: 'Receiver antenna blocked or shorted to the chassis, or a receiver not suited to the site.',
        whatWeDo: 'We reposition the antenna and, where needed, fit a longer-range receiver.',
      },
    ],

    components: [
      {
        part: 'Motor thermal overload button',
        whatItDoes: 'Cuts the motor when it overheats.',
        failureSigns: 'Gate stops mid-cycle and won’t close until the button on the back of the motor is reset.',
        verdict: 'adjust',
      },
      {
        part: 'Limit adjustment nuts, limit shaft and spring-loaded bracket',
        whatItDoes: 'Set the open and closed positions via the 18-link limit chain.',
        failureSigns: 'Stop points moving; limit LED not lighting at the ends of travel.',
        verdict: 'adjust',
      },
      {
        part: 'Limit switches',
        whatItDoes: 'Stop the motor when a nut reaches them.',
        failureSigns: 'Gate runs into its stop with the nuts correctly set.',
        verdict: 'replace-part',
      },
      {
        part: 'Control board (Intelligate, or logic + driver board)',
        whatItDoes: 'ERD reversing, timers, loops, alarm and motor control.',
        failureSigns: 'No lights with power present, outputs dead, ERD behavior that no setting corrects.',
        verdict: 'repair',
      },
      {
        part: 'Foot pedal release, clutch release assembly and pedal switch',
        whatItDoes: 'Disengage the drive sprocket so the gate can be moved by hand.',
        failureSigns: 'Gate stays free after the pedal is lifted, or the operator will not run.',
        verdict: 'adjust',
      },
      {
        part: 'Size 43 30:1 gear reducer',
        whatItDoes: 'Reduces motor speed to drive the chain sprocket.',
        failureSigns: 'Grinding, oil loss, play at the output shaft.',
        verdict: 'service',
      },
      {
        part: 'Idler wheel and #41 drive chain',
        whatItDoes: 'Guide and carry drive to the gate.',
        failureSigns: 'Chain jumping the sprocket, worn idler, slack slapping the cover.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'A RAM 100 that alarms, reverses or refuses to close usually needs a gate repair, a setting change or a single part — not a new operator. Replacement is the honest recommendation when the gate is beyond the RAM 100’s rating or the reducer is worn out.',
      repair: [
        'ERD lockouts caused by gate drag or a sensitivity setting',
        'Thermal overload trips caused by a gate that has become hard to move',
        'Fuses, limit switches, receivers and accessories',
        'Board faults, which Ramset’s own troubleshooting table directs back to Ramset for repair',
      ],
      replace: [
        'An older RAM 100 on a gate over its 700 lb / 20 ft Intelligate-era rating — the RAM 1000 is the next size up',
        'A worn reducer where the cost approaches a new operator',
        'A site that needs battery operation, where the RAM 100 DC is Ramset’s DC option',
      ],
    },

    warranty: {
      manufacturer:
        'Ramset gives every operator a one-year limited warranty from purchase. Registered AC models in single-family residential use are extended to ten years on the motor and gearbox and five years on the logic and driver boards; in commercial or multi-family use, seven years on motor and gearbox and five years on the boards.',
      notes: [
        'Registration is by warranty card with proof of purchase, sent to Ramset within 60 days, according to ramsetinc.com (the older Intelligate manual said 90 days).',
        'Ramset excludes normal wear and tear, gate hardware and non-Ramset accessories, and voids coverage for installation or maintenance by an unqualified technician.',
        'Ramset’s manual states the warranty is void if the installation exceeds the recommended specifications — relevant on older units rated at 700 lbs.',
      ],
    },

    dfw: [
      {
        heading: 'Summer heat and the thermal overload',
        body: [
          'Ramset’s troubleshooting table lists a popped thermal overload button on the motor as a reason a RAM 100 won’t close. In a Dallas–Fort Worth August, a motor already working hard against dragging wheels trips its overload far sooner. If yours trips on hot afternoons, the gate’s rolling resistance is the first thing to check.',
        ],
      },
      {
        heading: 'Clay soil, tracks and ERD lockouts',
        body: [
          'Expansive clay lifts and drops slide-gate tracks through the year. A section that has risen makes the RAM 100 work harder at the same spot every cycle, and two ERD trips in one run sends the board into its six-minute alarm. Re-levelling the track stops the lockouts; reducing sensitivity only hides them.',
        ],
      },
      {
        heading: 'Power outages and SECURE CLOSE',
        body: [
          'Storms knock out power, and on a RAM 100 with SECURE CLOSE enabled the gate will close itself when power returns if its safety devices are clear. That is useful for security, but everyone at the property should know the gate can move without a command after an outage.',
        ],
      },
    ],

    process: [
      {
        step: 'Which RAM 100 is it?',
        body: 'Intelligate or current logic and driver boards — it decides the ratings, the settings and the fault indications.',
      },
      {
        step: 'Pedal release and a hand push',
        body: 'We disengage the drive with the pedal and roll the gate end to end, looking for the drag that triggers the ERD and the thermal overload.',
      },
      {
        step: 'Read the board',
        body: 'Which LEDs are lit, how the dip switches are set (including C1 SECURE CLOSE, which we switch off while working), fuses and the motor overload.',
      },
      {
        step: 'Limits and drive',
        body: 'Limit nuts and spring-loaded bracket, limit chain, drive chain, idler and reducer.',
      },
      {
        step: 'Quote, fix and test reversal',
        body: 'You approve the price before work. We finish by confirming the ERD reverses the gate and the limit LEDs light at both ends.',
      },
    ],

    faqs: [
      {
        q: 'Why does my Ramset RAM 100 alarm sound and then ignore the remote?',
        a: 'On Intelligate boards, if the reversing device trips twice before the gate reaches a limit, the alarm sounds for six minutes and the board accepts no commands. Switching the operator off for about ten seconds resets it, but the gate is dragging or hitting something and needs checking.',
      },
      {
        q: 'How heavy a gate can a RAM 100 handle?',
        a: 'Ramset currently lists the RAM 100 AC at 1,000 lbs and 35 ft. The older Intelligate-era manual rated it at 700 lbs and 20 ft, so the answer depends on which generation you have.',
      },
      {
        q: 'My RAM 100 opens but won’t close. What should I check?',
        a: 'Ramset’s own list: an EXIT, REV LOOP or RADIO light stuck on, a blown 10 A fuse, or the thermal overload button on the motor. A stuck transmitter button is a common one.',
      },
      {
        q: 'Is Ramset a real gate operator brand?',
        a: 'Yes. Ramset Automatic Gate Systems is a California manufacturer of slide, swing and overhead gate operators. It is unrelated to the Ramset brand of fastening tools.',
      },
      {
        q: 'Does the RAM 100 have a belt?',
        a: 'No. The motor is mounted directly to a 30:1 size 43 gear reducer, which drives a #41 chain.',
      },
      {
        q: 'What warranty does Ramset give on a RAM 100?',
        a: 'One year as standard. Registered AC operators get ten years on motor and gearbox in single-family homes, or seven years commercially, plus five years on the boards. Check ramsetinc.com for the current terms.',
      },
    ],

    relatedModels: ['ramset/ram-1000-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Ramset RAM 100 AC product page', url: RAMSET_RAM100 },
      { label: 'Ramset gate operator lineup', url: RAMSET_LINEUP },
      { label: 'Ramset warranty terms', url: RAMSET_WARRANTY },
      { label: 'Ramset manuals index', url: RAMSET_MANUALS },
      { label: 'Ramset RAM 100/1000/5500 Intelligate manual, dealer-hosted copy (PDF)', url: RAMSET_INTELLIGATE_MANUAL },
      { label: 'Ramset DC RAM 100/1000/5500 manual with bill of materials (PDF)', url: RAMSET_DC_MANUAL },
    ],
    toConfirm: [
      'Fault indications, sensitivity adjustment and alarm behavior on the current logic/driver boards — the current AC manual PDF is image-only and could not be read. ERD and dip-switch details above are from the Intelligate-era manual.',
      'When the RAM 100 rating changed from 700 lbs / 20 ft to 1,000 lbs / 35 ft, and whether the change came with the new boards.',
      'The Intelligate-era manual says the RAM 100 is for front installations only; confirm for current units.',
      'Whether the "Clutch Release Assembly" in the parts list is only the pedal disengagement or also a torque-limiting slip clutch. Manufacturer docs describe no clutch adjustment.',
      'Warranty registration window: ramsetinc.com says 60 days; the older manual says 90 days by certified mail.',
      'Motor capacitor rating appears in the Intelligate spec table but did not extract legibly.',
      'Neither Ramset project (ramset-slide-gate-broken-rollers, ramset-high-cycle-entrance) names a model; ramset-07 shows a Ramset slide operator of unknown model. None attached.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // RAM 1000
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'ram-1000-repair',
    brandSlug: 'ramset',
    model: 'RAM 1000',
    aliases: ['RAM 1000 AC', 'RAM1000', 'Ramset 1000', 'R1000'],
    descriptor: 'commercial pad-mounted slide gate operator for front, center or rear installation',
    gateType: 'slide',
    duty: 'commercial',
    status: 'current',
    statusNote:
      'The RAM 1000 AC is current on ramsetinc.com alongside a brushless RAM 1000 DC. It shares its chassis with the 1 HP RAM 5500.',

    title: 'Ramset RAM 1000 Repair | Dallas–Fort Worth',
    metaDescription:
      'Ramset RAM 1000 gate locking out, bi-parting pair out of sync or loops not working? We repair RAM 1000 slide operators across Dallas–Fort Worth. Call 24/7.',
    h1: 'Ramset RAM 1000 Commercial Slide Operator Repair in Dallas–Fort Worth',
    heroIntro:
      'We repair Ramset RAM 1000 slide operators on apartment, HOA and commercial entrances. Typical calls are a heavy gate locking out with its alarm, a bi-parting pair that has fallen out of step, or loop and one-pass behavior that looks like a fault but is a setting.',
    heroPoints: [
      'We check the RAM 1000’s dip switch settings — radio cycle, one pass, left/right — before replacing anything',
      'We set up both RAM 1000s of a bi-parting pair as individual operators before re-linking them',
      'We test each plug-in loop detector and the reversing loop input on the board',
    ],

    identify: {
      body: [
        'The RAM 1000 is the middle of Ramset’s AC slide range, above the RAM 100 and sharing a chassis with the 1 HP RAM 5500. Where the RAM 100 is limited to front mounting in Ramset’s older manual, the RAM 1000 and RAM 5500 can be installed at the front, center or rear of the gate run, with center and rear installations limited to gates of 25 ft.',
        'It looks like a taller RAM 100: a steel chassis under a polyethylene cover, a foot pedal release and a motor bolted directly to its gear reducer. The label is the reliable tell, because the RAM 1000 and RAM 5500 are the same size outside. The RAM 5500 carries a 1 HP motor; the RAM 1000 a 1/2 HP one.',
      ],
      lookFor: [
        'A Ramset label reading RAM 1000 (not RAM 100 or RAM 5500)',
        'A 1/2 HP motor on the label — a 1 HP motor in the same housing is a RAM 5500',
        'A taller cover than the RAM 100 (the older manual lists 26" high versus 22")',
        'Operator mounted mid-run or behind the gate rather than at the front',
        'A dual foot pedal release sprocket and two idler wheel assemblies',
        'Plug-in loop detectors on the board for reversing, exit and phantom loops',
      ],
    },

    overview: [
      {
        heading: 'A bigger reducer and a heavier limit assembly',
        body: [
          'Ramset’s current RAM 1000 AC specification lists a size 60 C-face gear reducer at 40:1, where the RAM 100 uses a size 43 unit at 30:1. The older Intelligate-era parts list shows a size 60 reducer at 30:1, so the ratio on your unit depends on its age. Either way, the drive is direct — no belt.',
          'Ramset’s parts lists for the RAM 1000 and RAM 5500 show a 3/4-inch limit shaft with its own limit nuts and bearings, a 22-link #41 limit chain, and a chain kit for the gate. None of those interchange with the RAM 100’s smaller parts, which matters when a technician arrives with the wrong kit.',
        ],
      },
      {
        heading: 'Ratings changed between generations',
        body: [
          'Ramset’s current page rates the RAM 1000 AC at 1,500 lbs and 45 ft, 12 inches per second, continuous duty, 1/2 HP at 4.5 A. The Intelligate-era manual rates the same model at 1,000 lbs and 45 ft and classes it as commercial/industrial. The RAM 1000 DC is rated at 3,000 lbs.',
          'On an older RAM 1000 on a gate that has gained weight — added infill, a replaced panel, a solid privacy screen — the operator may be past the rating it was built to, and Ramset states the warranty is void if an installation exceeds the specification.',
        ],
      },
      {
        heading: 'Settings built for traffic',
        body: [
          'The Intelligate board behind most RAM 1000s in the field has functions aimed at busy entrances. ONE PASS (C4) opens the gate until the reversing loop is activated and cleared, then closes; a second car on the loop stops the gate until it backs off. RADIO CYCLE (C3) changes the remote from always-open to stop-then-reverse. SECURE CLOSE (C1) closes an open gate automatically after a power outage once safety devices are clear.',
          'Each of these produces behavior that an owner can reasonably mistake for a fault. Reading the dip switches is the first step on any RAM 1000 that “acts strange”.',
        ],
      },
      {
        heading: 'Bi-parting gates, fire access and locks',
        body: [
          'Two RAM 1000s can run a bi-parting gate as master and slave; the board’s left/right switch (C7) reverses the motor and limit switches for the right-hand unit without rewiring. The Firebox input opens the gate on a fire department key switch and closes it as soon as the key is released. A magnetic lock output supplies 24 VDC only while the gate is closing or closed.',
          'On commercial sites, the RAM 1000 is also often tied to plug-in loop detectors for reversing, exit and phantom loops, and to a relay output that reports fully open, fully closed and the ERD alarm.',
        ],
      },
    ],

    specs: [
      { label: 'Class', value: 'Industrial/Commercial (current spec table)' },
      { label: 'Motor', value: '1/2 HP, 115 V single phase, 4.5 A' },
      { label: 'Max gate weight', value: '1,500 lbs (current listing); 1,000 lbs (Intelligate-era manual)' },
      { label: 'Max gate length', value: '45 ft' },
      { label: 'Center / rear installation', value: 'Gates up to 25 ft (Intelligate-era manual)' },
      { label: 'Gate speed', value: '12 in per second' },
      { label: 'Duty cycle', value: 'Continuous' },
      { label: 'Gear reducer', value: 'Size 60, 40:1, C-face (current); size 60, 30:1 (Intelligate-era parts list)' },
      { label: 'Limit shaft', value: '3/4" limit shaft assembly with #41 limit chain, 22 links' },
      { label: 'Emergency release', value: 'Foot pedal release' },
      { label: 'Control boards', value: 'Logic board and AC driver board (current); Intelligate board (older units)' },
      { label: 'Listing', value: 'Certified to UL 325 (per Ramset)' },
      { label: 'DC version', value: 'RAM 1000 DC: 24 VDC brushless, 3,000 lbs, 45 ft, 40:1, two 7Ah batteries' },
    ],

    symptoms: [
      {
        symptom: 'One side of our bi-parting gate doesn’t move, or the two leaves are out of step',
        causes:
          'A damaged master/slave link, different limit settings on the two operators, the left/right switch set wrong on one unit, or one operator in thermal overload.',
        whatWeDo: 'We run each RAM 1000 on its own, match limits and direction settings, check both motor overloads and then restore the link.',
      },
      {
        symptom: 'The gate stops half-closed when a second car pulls up',
        causes: 'ONE PASS (C4) is on. It is designed to stop the gate until the vehicle on the reversing loop backs off, to prevent tailgating.',
        whatWeDo: 'We confirm the setting, test the reversing loop and set the gate to the behavior the property actually wants.',
      },
      {
        symptom: 'The remote stops the gate instead of opening it',
        causes: 'RADIO CYCLE (C3) is on, so the first command stops a moving gate and the second reverses it.',
        whatWeDo: 'We explain both modes and set the one that suits your users.',
      },
      {
        symptom: 'The alarm sounded and the gate ignored everything for a few minutes',
        causes:
          'The reversing device tripped twice before a limit, starting the six-minute lockout — on a long, heavy gate usually drag from wheels, track or a gate that has become heavier.',
        whatWeDo: 'We release the drive, roll the gate by hand to find the drag, repair it and re-test reversal.',
      },
      {
        symptom: 'The gate won’t close and the REV LOOP light stays on',
        causes: 'A faulty reversing loop detector, a damaged loop in the pavement, or another accessory holding the input.',
        whatWeDo: 'We disconnect accessories on that input one at a time, test the loop and replace the detector if it is at fault.',
      },
      {
        symptom: 'The magnetic lock doesn’t hold the gate open',
        causes: 'Expected behavior: the RAM 1000’s mag lock output is powered only while the gate is closing or closed.',
        whatWeDo: 'We confirm the lock is wired to the correct output and working when the gate is closed.',
      },
      {
        symptom: 'Stops short on a rear-mounted operator',
        causes: 'Limit nuts moved on the 3/4-inch limit shaft, or a gate longer than the 25 ft limit for center and rear installations.',
        whatWeDo: 'We reset the limits and check the installation against Ramset’s layout limits.',
      },
    ],

    components: [
      {
        part: 'Size 60 gear reducer',
        whatItDoes: 'Reduces the direct-coupled motor’s speed for the drive sprocket.',
        failureSigns: 'Noise, oil loss, play at the output shaft.',
        verdict: 'service',
      },
      {
        part: '3/4" limit shaft assembly and 22-link limit chain',
        whatItDoes: 'Carries the limit nuts that set the stop positions.',
        failureSigns: 'Limit positions wandering, a slack or broken limit chain.',
        verdict: 'adjust',
      },
      {
        part: 'Plug-in loop detectors',
        whatItDoes: 'Provide reversing, exit and phantom loop inputs.',
        failureSigns: 'LED stuck on, gate not opening for exiting cars, gate closing on a vehicle.',
        verdict: 'replace-part',
      },
      {
        part: 'Logic and driver boards (or Intelligate board)',
        whatItDoes: 'Motor control, ERD reversing, dip switch functions, relay outputs.',
        failureSigns: 'No lights with power, relay outputs dead, settings not taking effect.',
        verdict: 'repair',
      },
      {
        part: 'Dual foot pedal release sprocket and pedal assembly',
        whatItDoes: 'Disengages the drive for manual operation.',
        failureSigns: 'Drive not re-engaging, gate free with power on.',
        verdict: 'adjust',
      },
      {
        part: 'Idler wheel assemblies and gate chain',
        whatItDoes: 'Guide the chain onto the drive sprocket.',
        failureSigns: 'Worn idlers, chain jumping teeth on a long gate.',
        verdict: 'replace-part',
      },
      {
        part: 'Motor thermal overload',
        whatItDoes: 'Protects the motor from overheating.',
        failureSigns: 'Gate dies mid-cycle on hot, busy afternoons.',
        verdict: 'adjust',
      },
    ],

    repairOrReplace: {
      summary:
        'Most RAM 1000 calls are settings, loops, limits or a gate that has become hard to move. Replacement or an upgrade is right when the traffic or gate weight has outgrown a 1/2 HP operator — Ramset’s RAM 5500 (1 HP, same chassis) and the RAM 1000 DC are the obvious next steps.',
      repair: [
        'One-pass, radio-cycle or secure-close behavior that is a setting',
        'Loop detector and loop faults',
        'ERD lockouts from gate drag',
        'Limit, idler, chain and board faults',
      ],
      replace: [
        'An older RAM 1000 rated at 1,000 lbs on a gate that is now heavier',
        'A high-cycle entrance repeatedly tripping the thermal overload after the gate itself has been corrected',
        'A site that needs outage operation, where the RAM 1000 DC includes batteries',
      ],
    },

    warranty: {
      manufacturer:
        'Ramset’s published terms give a one-year limited warranty, extended on registration for AC models to seven years on motor and gearbox and five years on the logic and driver boards in commercial or multi-family use (ten and five years in single-family homes).',
      notes: [
        'Registration is a warranty card and proof of purchase sent to Ramset within 60 days.',
        'Normal wear and tear, gate hardware and non-Ramset accessories are excluded.',
        'Coverage is voided by installation or maintenance by an unqualified technician, and by an installation that exceeds the operator’s specification.',
      ],
    },

    dfw: [
      {
        heading: 'Apartment and HOA entrances',
        body: [
          'Multi-family entrances around Dallas–Fort Worth run a RAM 1000 far harder than a single home does, and the one-pass and loop functions are what make those entrances work. Most of our diagnosis on these sites is settings and loops before it is the operator.',
        ],
      },
      {
        heading: 'Long tracks on clay soil',
        body: [
          'A 45-foot slide gate crosses a lot of ground, and expansive clay does not move evenly. Settled or heaved sections make the gate harder to push at the same point every day, which is what triggers the RAM 1000’s double-trip alarm. The track needs to be fixed before the operator is judged.',
        ],
      },
      {
        heading: 'Loops through a Texas summer and freeze',
        body: [
          'Loop wires are sealed in saw-cuts in the pavement. Slabs that crack as the soil dries in summer, or during a hard freeze, can break those wires, and the result is a gate that stops seeing cars. A REV LOOP or EXIT light that behaves oddly after the weather turns points to the loop.',
        ],
      },
    ],

    process: [
      {
        step: 'Label, generation and settings',
        body: 'RAM 1000 or RAM 5500, Intelligate or current boards, and a note of every dip switch before we change anything.',
      },
      {
        step: 'Drive off, gate by hand',
        body: 'With the pedal released we move the full length of the gate to find wheel, track or alignment drag.',
      },
      {
        step: 'Loops, safety devices and outputs',
        body: 'Each loop and detector, photo-eyes and edges, fire access input, mag lock output and relay outputs.',
      },
      {
        step: 'Pairs separately, then together',
        body: 'On bi-parting gates each operator is set and tested alone before the master/slave link is restored.',
      },
      {
        step: 'Written quote, repair, full test',
        body: 'You approve the price; we finish with repeated cycles, loop tests and a reversal check.',
      },
    ],

    faqs: [
      {
        q: 'What is the difference between the Ramset RAM 1000 and RAM 100?',
        a: 'The RAM 1000 has a larger size 60 gear reducer, a heavier limit assembly, a higher weight and length rating, and can be mounted at the center or rear of the gate run. The RAM 100 is the smaller front-mount unit.',
      },
      {
        q: 'RAM 1000 or RAM 5500 — how do I tell?',
        a: 'Read the motor rating on the label. They share a chassis; the RAM 1000 has a 1/2 HP motor and the RAM 5500 a 1 HP motor.',
      },
      {
        q: 'Why does our RAM 1000 stop closing when a second car arrives?',
        a: 'That is ONE PASS, an anti-tailgating setting. The gate waits until the second vehicle backs off the reversing loop. It can be turned off if the property does not want it.',
      },
      {
        q: 'How much gate can a RAM 1000 move?',
        a: 'Ramset currently lists 1,500 lbs and 45 ft for the RAM 1000 AC. Older units were rated at 1,000 lbs in the Intelligate-era manual, and the RAM 1000 DC is rated at 3,000 lbs.',
      },
      {
        q: 'Can you service a bi-parting pair of RAM 1000s?',
        a: 'Yes. We set up each operator separately, including the left/right setting on the right-hand unit, then re-link them as master and slave and test the pair together.',
      },
    ],

    relatedModels: ['ramset/ram-100-repair'],
    relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'access-control-repair', 'automatic-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Ramset RAM 1000 AC product page', url: RAMSET_RAM1000AC },
      { label: 'Ramset RAM 1000 DC product page', url: RAMSET_RAM1000DC },
      { label: 'Ramset warranty terms', url: RAMSET_WARRANTY },
      { label: 'Ramset RAM 100/1000/5500 Intelligate manual, dealer-hosted copy (PDF)', url: RAMSET_INTELLIGATE_MANUAL },
      { label: 'Ramset DC RAM 100/1000/5500 manual with bill of materials (PDF)', url: RAMSET_DC_MANUAL },
    ],
    toConfirm: [
      'Ramset’s RAM 1000 AC page calls it "residential and light commercial" in its description but "Industrial/Commercial" in its spec table.',
      'Max weight: current page 1,500 lbs; Intelligate manual 1,000 lbs; one dealer (ramsetstore.com) lists 1,500 lbs / 50 ft and another 1,000 lbs / 40 ft. Confirm per unit label.',
      'Gear ratio 40:1 (current) vs 30:1 (older parts list) — confirm which units changed.',
      'Limit shaft, limit chain and chain kit details are from the DC-manual bill of materials shared by RAM 1000/5500; confirm they match the AC units.',
      'Master/slave, one pass, radio cycle, secure close, fire box and mag lock behavior are from the Intelligate manual; confirm on current logic boards (current AC manual is image-only).',
      'Center/rear installation limit of 25 ft is from the Intelligate-era manual.',
      'Optional battery back-up for AC units is mentioned in the Intelligate manual; not confirmed on current AC units.',
      'No photo, video or project is confirmed to show a RAM 1000.',
    ],
    indexable: true,
  },
]
