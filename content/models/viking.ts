/**
 * Viking Access Systems model pages.
 *
 * Research notes (Sept 2026):
 *  - Every current Viking operator in these pages is a 24 VDC electromechanical
 *    unit (gearhead motor + chain + worm gear, or motor + lead screw). No
 *    hydraulic Viking operator was found in the current lineup.
 *  - Limit sensing differs by family: the pad-mounted swing operators (T-21,
 *    F-1, R-6) and the G-5 linear arm use mechanical limit switches; the K-2
 *    slide uses digital limits with a Smart Position Sensor (SPS) backed by an
 *    Electronic Positioning Sensor (EPS2).
 *  - F-1 was researched but not written: its manual is nearly identical to the
 *    T-21's (same chassis, board, arm), so a separate page would be a variant.
 *  - Warranty terms come from Viking's published policy PDF (FAAC International).
 */

import type { ModelPage } from './types'

const WARRANTY_POLICY_URL = 'https://www.vikingaccess.com/_files/ugd/997df4_2669620b5ae04f26bf4e1357f88252b4.pdf'

export const vikingModels: ModelPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // T-21
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 't-21-repair',
    brandSlug: 'viking',
    model: 'T-21',
    aliases: ['T21', 'T-21NX', 'VA-T21NX'],
    descriptor: 'heavy-duty residential and commercial pad-mounted DC swing gate operator',
    gateType: 'swing',
    duty: 'commercial',
    status: 'current',
    statusNote:
      'Listed on vikingaccess.com as a current swing operator; installation manual revision J1 is dated April 2026.',

    title: 'Viking T-21 Repair | Dallas–Fort Worth',
    metaDescription:
      'Viking T-21 swing gate stopping short, showing ERR codes or dead after a storm? Shield Gate Repair diagnoses T-21 operators across DFW. Open 24/7. Call now.',
    h1: 'Viking T-21 Repair in Dallas–Fort Worth',
    heroIntro:
      'Shield Gate Repair diagnoses and repairs the Viking T-21, the pad-mounted swing operator Viking rates for leaves up to 2,000 lb. When a T-21 stops short with its ODS light on, the operator is usually reacting to a leaf that has become harder to swing — so that is where we start, not with a new board.',
    heroPoints: [
      'We read the V-Flex LCD error list first — ERR FUSE 15 AMP and ERR EMI PROTECT lead to very different repairs.',
      'We pull the clutch key and swing the leaf by hand to separate a binding 2,000 lb gate from a worn chain or gearbox.',
      'We check the T-21’s cam-driven limit switches before anyone blames the board for wrong stopping points.',
    ],

    identify: {
      body: [
        'The T-21 is a pad- or post-mounted swing operator: a squared steel chassis beside the hinge post with one output shaft on top, driving a multi-part arm that is welded to a frame member of the gate. From the driveway it is easy to mistake for Viking’s F-1 or the residential R-6. All three share the same cover style, the same output arm and the same VA-F1ARM20 arm assembly.',
        'The quickest way to be certain is the control board display. Take the cover off, press the Diagnose button and scroll: a T-21 reports MODEL T-21. Inside, the T-21 drives a heavier #50 roller chain into a #80 worm gearbox, where the F-1 runs #40 chain into a #70 box. Distributors list the operator as VA-T21NX.',
      ],
      lookFor: [
        'LCD shows MODEL T-21 when you scroll with the Diagnose button',
        'An output shaft cover (the “hat”) on top, hiding a manual release handle and a removable clutch key',
        'A removable power box with a 120 V outlet, a voltage selector and status LEDs for AC input, protection and output',
        '#50 roller chain between the motor and a large worm gearbox',
        'Invoice, box or distributor paperwork reading VA-T21NX',
      ],
    },

    overview: [
      {
        heading: 'How the T-21 moves a 2,000 lb leaf',
        body: [
          'A 24 V DC gearhead motor turns a small sprocket; a #50 chain carries that to a #80 worm gearbox with a 30:1 reduction, and the gearbox output shaft carries the clutch, the release handle and the output arm. The clutch key locks the clutch to the shaft. With the key out, a correctly tightened clutch should still hold against moderate force on the gate.',
          'That reduction is what lets Viking rate the T-21 at 2,000 lb on a 12 ft leaf or 1,200 lb at 20 ft. It also explains how a T-21 tends to wear: brushes, chain and clutch deteriorate gradually, and a leaf that has started to bind shows up as rising motor current on the LCD long before anything breaks.',
        ],
      },
      {
        heading: 'Limits are mechanical switches, not a relearn',
        body: [
          'Unlike Viking’s SPS slide operators, the T-21 stops on two mechanical limit switches tripped by adjustable cams on a cam holder, indexed to the clutch by a guide pin. Viking disables the limit buttons on the V-Flex board for this model, so there is no electronic relearn to perform.',
          'If a T-21 stops early or overruns, the answer is in that cam assembly: loosened cam screws, the guide pin in a different hole of the four on the holder, a failed switch or a damaged harness. Both limit circuits are normally closed, which is why a cut or corroded wire reads as a limit, and why ERRLIMIT OPN+CLS on the display means the board sees both limits at once.',
        ],
      },
      {
        heading: 'Power box, true battery backup and surge protection',
        body: [
          'Mains power (115 or 230 V, set on a selector) enters a removable modular power box holding a 15 A toroidal transformer and the EMI board, which Viking rates for lightning protection up to 20,000 V / 10,000 A. The power box can be relocated to a mains source and feed the operator 24 VAC over as much as 500 ft of 10 AWG wire.',
          'Two 12 V 7 Ah batteries sit in series. Viking calls this “true” battery backup: the batteries are not used during normal operation, only during an outage, and are rated for 400 continuous cycles with a 2,000 lb gate. With the battery switch off, the CHARGE reading on the LCD should sit between 26.0 and 28.0 VDC.',
        ],
      },
      {
        heading: 'Obstruction sensing and UL 325 on the T-21',
        body: [
          'The T-21 senses obstructions through motor load, set on the ODS dial from 0 (most sensitive) to 100. A solid ODS light means a sudden spike in resistance; a flashing ODS light means overload — a slower, sustained rise that usually points at the gate. Two consecutive trips disable the operator and sound the UL alarm for five minutes or until a Stop command.',
          'Viking lists the T-21 for UL 325 Classes I through IV. It expects monitored, 10K-resistor entrapment sensors on its UL or Re-Open inputs and may refuse to run without them. A failed sensor lights the Stop LED and shows ERR SENS with the terminal it is wired to.',
        ],
      },
    ],

    specs: [
      { label: 'Application', value: 'Residential and commercial vehicular swing gates' },
      { label: 'UL 325 classification', value: 'Class I, II, III and IV' },
      { label: 'Maximum gate', value: '2,000 lb at 12 ft, or 1,200 lb at 20 ft' },
      { label: 'Motor', value: '24 VDC gearhead motor, listed as 1 HP' },
      { label: 'Drive', value: '#50 chain to a #80 worm gearbox, 30:1' },
      { label: 'Speed / opening', value: '13–16 seconds per 90°; opening up to 120°' },
      { label: 'Duty cycle', value: '100% continuous' },
      { label: 'Main power', value: '120/240 VAC single phase; 3.0 A / 1.5 A; 4.0 A timed main fuse' },
      { label: 'Batteries', value: 'Two 12 VDC 7 Ah (Yuasa NP7-12 or Viking DUBA12)' },
      { label: 'Battery backup', value: '400 continuous cycles with a 2,000 lb gate' },
      { label: 'Controller', value: 'V-Flex control board (VFLEXPCBU18) with LCD diagnostics' },
      { label: 'Limits', value: 'Two mechanical limit switches with adjustable cams' },
      { label: 'Board fuses', value: '15 A motor circuit; 4 A charging circuit' },
      { label: 'Surge protection', value: 'Up to 20,000 V / 10,000 A' },
      { label: 'Operating temperature', value: '−20°F to 160°F, with thermostatic heater' },
    ],

    symptoms: [
      {
        symptom: 'The gate stops partway and the ODS light is flashing.',
        causes:
          'Flashing ODS is Viking’s overload indication: resistance that climbed steadily rather than spiked. On a T-21 that is typically a leaf that has dropped on worn hinges, a hinge post that has leaned, an arm that binds near full open, or an ODS dial set too sensitive for a heavy gate.',
        whatWeDo:
          'We remove the clutch key and swing the leaf through its whole arc by hand, watching the arm pivots and hinges. We correct the gate first, then set ODS back to the lowest setting that runs reliably rather than turning it up to mask a bind.',
      },
      {
        symptom: 'The display says ERR FUSE 15 AMP and the gate is dead.',
        causes:
          'The 15 A motor-circuit fuse on the V-Flex board has blown. Viking’s troubleshooting points to three checks for this code: the fuse itself, the ODS setting, and whether the gate moves freely by hand — a stalled motor against a binding leaf is the usual culprit.',
        whatWeDo:
          'We find the reason before fitting a new fuse: a hand-swing test, the ODS dial, and a powered cycle while reading MOT AMP on the LCD. A replacement fuse on an unfixed bind simply blows again.',
      },
      {
        symptom: 'Nothing moves and the Check Motor LED is lit.',
        causes:
          'The board is sending power but the motor circuit is open. Common reasons on a T-21: the clutch key left out after a manual release, the motor switch (which doubles as a self-tripping breaker) turned off, the motor harness unplugged from the Open Left or Open Right socket (the LCD shows RED CONN UNPLUGED), or worn motor brushes.',
        whatWeDo:
          'We check release status, the motor switch and harness first, then measure across the motor. If the brushes are worn we replace them — Viking sells a brush kit — rather than the motor.',
      },
      {
        symptom: 'It opens and closes, but not to the right positions.',
        causes:
          'Loose limit cam screws, a guide pin moved to a different hole on the cam holder, or a leaf that has shifted on its hinges so the same shaft angle no longer puts the gate where it used to close. Limit LEDs that flash together can also mean both switches are closed at once or a wiring fault.',
        whatWeDo:
          'With the clutch released we move the gate to each position, set each cam to click its switch, snug the screws and run three full cycles as Viking’s procedure specifies. We mark the guide-pin hole so the next adjustment starts from a known reference.',
      },
      {
        symptom: 'The power went out and the gate would not run on battery.',
        causes:
          'Because true battery backup keeps the batteries idle day to day, a worn-out pair often goes unnoticed until an outage. ERR BAT LOW, a Battery Low LED, or ERR CHRG CHECK 4A (a blown 4 A charging fuse or a battery/board fault) all point here.',
        whatWeDo:
          'We read CHARGE and BAT VOLT on the LCD, test the batteries under load, check the 4 A charging fuse and replace the batteries as a matched pair — Viking warns against mixing sizes or makes.',
      },
      {
        symptom: 'After a thunderstorm the display shows an ERR EMI message.',
        causes:
          'ERR EMI PROTECT means the lightning protection on the EMI board needs replacing; ERR EMI NO FUSE is the 4 A main fuse on the power panel; ERR EMI NO AC means no mains reaching the panel; ERR EMI NO EMI means the board cannot see the EMI board at all.',
        whatWeDo:
          'We check the power box LEDs, the voltage selector, the main fuse and the EMI cable, then replace the EMI board if its protection is spent. We also look at the ground rod and bonding, because Viking ties lightning resilience to grounding.',
      },
      {
        symptom: 'An alarm is sounding and the gate will not take commands.',
        causes:
          'Either the ODS tripped twice in a row, which triggers the UL alarm for up to five minutes, or a monitored photo-eye or edge has failed — the Stop LED lights and the display shows ERR SENS UL, ERR SENS RO or both.',
        whatWeDo:
          'We clear the alarm with a Stop command, count the Diagnose LED flashes to see how many errors are stored, then align or repair the sensor and re-run the UL LEARN routine so the board recognizes it again.',
      },
    ],

    components: [
      {
        part: 'V-Flex control board',
        whatItDoes: 'Runs logic, obstruction sensing, battery charging and the LCD diagnostics.',
        failureSigns: 'Blank or scrambled display, ERR REFV WRONG, inputs ignored after a surge.',
        verdict: 'replace-part',
      },
      {
        part: 'EMI board and modular power box',
        whatItDoes: 'Absorbs surges, supplies 24 VAC to the board and carries the main fuse and power switches.',
        failureSigns: 'PROTECTION WORKING LED off, ERR EMI messages, no AC output LED.',
        verdict: 'replace-part',
      },
      {
        part: 'Limit switches and cam holder',
        whatItDoes: 'Stops the leaf at open and closed via cams on the output shaft.',
        failureSigns: 'ERRLIMIT OPN+CLS, overrun or early stops, limit LEDs flashing together.',
        verdict: 'adjust',
      },
      {
        part: 'Clutch, clutch key and release handle',
        whatItDoes: 'Couples the output arm to the gearbox shaft and releases it for manual operation.',
        failureSigns: 'Arm slips under load, missing key after an outage, handle not seating at 0°.',
        verdict: 'adjust',
      },
      {
        part: '#50 chain and sprockets',
        whatItDoes: 'Transfers motor torque to the worm gearbox.',
        failureSigns: 'Slack or rusted chain, jerky starts, a knock at the start of travel.',
        verdict: 'service',
      },
      {
        part: '24 V DC gearhead motor and brushes',
        whatItDoes: 'Provides the drive; brushes are the wearing contact inside.',
        failureSigns: 'Check Motor LED, high MOT AMP reading, weak or intermittent travel.',
        verdict: 'repair',
      },
      {
        part: 'Backup batteries',
        whatItDoes: 'Two 12 V 7 Ah batteries that run the gate only during outages.',
        failureSigns: 'ERR BAT LOW, Battery Low LED, gate dies mid-outage.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'A T-21 is built from individually orderable parts — board, EMI board, fuses, limit switches, chain, sprockets, brushes, clutch — and most faults trace to one of them or to the gate itself. Repair is normally the right call. Replacement makes sense when corrosion has gone through the chassis or gearbox, when the gate has been built beyond what the T-21 is rated for, or when a strike has taken out several assemblies at once and the parts total approaches a new operator.',
      repair: [
        'Overload or ODS trips caused by hinges, posts or arm geometry — fix the gate and reset ODS.',
        'Blown 15 A or 4 A fuses, a spent EMI board or a single failed V-Flex board.',
        'Limit drift: cams, switches or the limit harness.',
        'Worn brushes, a stretched #50 chain or a slipping clutch.',
      ],
      replace: [
        'The leaf now exceeds 2,000 lb at 12 ft or 1,200 lb at 20 ft. The T-21 is the highest-rated swing operator in Viking’s current lineup, so a heavier leaf usually means reworking the gate or moving to a slide design rather than a bigger arm.',
        'The gearbox or chassis is corroded through from standing water around a low pad.',
        'Lightning has damaged the board, EMI board and motor together — we quote both the repair and a replacement so you can compare.',
      ],
    },

    warranty: {
      manufacturer:
        'Viking’s published limited warranty (issued by FAAC International, Inc.) lists 3 years for gate operators and 5 years for Viking pad-mount gate operators, counted from the date of invoice. Factory-installed boards and parts share the operator’s term; batteries are capped at 2 years.',
      notes: [
        'The policy excludes damage from lightning, electrical power surge, hail, flood, wind storm, vehicles and improper installation.',
        'Motor brushes are named as maintenance parts, which are not covered.',
        'Viking warrants only its wholesale customers. Homeowners claim through the dealer or installer who sold the operator — check your invoice for which term applies.',
        'Parts used in a factory repair outside warranty carry 90 days; returns need an RMA number from Viking.',
      ],
    },

    dfw: [
      {
        heading: 'Clay soil under a 2,000 lb leaf',
        body: [
          'North Texas expansive clay swells when wet and shrinks in drought, and hinge posts lean with it. On a light gate a small lean is a nuisance; on the heavy estate leaves the T-21 is chosen for, it adds real load through the last third of travel. The operator reports that as a flashing ODS light or a higher MOT AMP reading well before it fails — a useful early warning if someone reads the display.',
        ],
      },
      {
        heading: 'Spring thunderstorms and the EMI board',
        body: [
          'Lightning and grid surges in storm season are the main threat to T-21 electronics. The EMI board is designed to take the hit, and ERR EMI PROTECT tells you it has. Viking’s manual asks for a ground rod, a single bonding point and short, heavy ground wires, and offers an AC Surge Pro module wired in parallel with the EMI board for a second layer. Viking’s warranty does not cover surge damage, so grounding is worth checking after any strike nearby.',
        ],
      },
      {
        heading: 'Summer heat, idle batteries and the rare hard freeze',
        body: [
          'The batteries live inside a steel chassis in full Texas sun, and heat shortens sealed lead-acid life. Because the T-21 keeps them idle until an outage, test them in spring rather than finding out during a storm. For the occasional hard freeze the built-in heater can be enabled at either limit — but Viking requires an external positive stop on the gate at any limit where the heater is switched on.',
        ],
      },
    ],

    process: [
      {
        step: 'Read the T-21 display before touching anything',
        body: 'We scroll the LCD with the Diagnose button. Stored errors appear first, and the Diagnose LED flashes once per error, so we know how many faults we are chasing.',
      },
      {
        step: 'Release the clutch and swing the leaf',
        body: 'Hat off, handle up, clutch key out. We swing the gate through full travel and check hinges, posts, the arm pivots and the gate bracket weld for binding or flex.',
      },
      {
        step: 'Measure power, charging and batteries',
        body: 'Power box LEDs, voltage selector, main fuse, AC VOLT and CHARGE readings with the battery switch off, then a load test on the battery pair.',
      },
      {
        step: 'Check limits, fuses and motor current',
        body: 'We confirm each limit LED against the cam positions, test both board fuses and run a powered cycle while watching MOT AMP for signs of a bind or a tired motor.',
      },
      {
        step: 'Quote, repair and re-test the safety system',
        body: 'You get the diagnosis and price before work starts. Afterward we reset ODS, run the three confirmation cycles and check that each monitored sensor is learned and reverses the gate.',
      },
    ],

    faqs: [
      {
        q: 'How do I open a Viking T-21 by hand during a power outage?',
        a: 'Only with the gate stopped: remove the output shaft cover, lift the manual release handle and pull out the clutch key. To restore operation, line the shaft notches up with the clutch, reinsert the key and push the handle back down. If the batteries are healthy, the gate should run on backup before you need to do this.',
      },
      {
        q: 'Is the T-21 the same as the Viking F-1?',
        a: 'They share a chassis style, the V-Flex board and the arm assembly, but the T-21 is rated for 2,000 lb at 12 ft against the F-1’s 1,500 lb, and it uses a #80 30:1 gearbox with #50 chain where the F-1 uses a #70 10:1 box with #40 chain. The LCD model line settles it.',
      },
      {
        q: 'Can I reset my T-21 limits with the buttons on the board?',
        a: 'No. Viking disables those buttons on the T-21 because the limits are mechanical switches. Wrong stopping points are corrected at the cam holder with the clutch released.',
      },
      {
        q: 'Does the T-21 have hydraulic parts that need servicing?',
        a: 'No. It is a 24 V DC electromechanical operator — motor, chain, worm gearbox and clutch. There is no fluid, pump or seal to service, so any quote for hydraulic work on a T-21 deserves a question.',
      },
      {
        q: 'What does ERR EMI PROTECT mean on a T-21?',
        a: 'The lightning protection on the EMI board behind the power supply panel is spent and needs replacing. With the PROTECTION WORKING LED off, Viking states the circuit is no longer protected, so the next surge goes straight to the electronics.',
      },
      {
        q: 'Can a T-21 run on solar?',
        a: 'Viking’s manual includes a solar supply option using its 24 V solar kit — two 40 W panels, two 35 Ah batteries and a charger. How many cycles a day it supports depends on sunlight and the accessories drawing power, so a heavy, busy gate needs that worked out first.',
      },
    ],

    relatedModels: ['viking/r-6-repair', 'viking/g-5-repair'],
    relatedServices: ['gate-motor-repair', 'commercial-gate-repair', 'electric-gate-repair', 'automatic-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Viking Access Systems — T-21 Swing Gate Operator product page', url: 'https://www.vikingaccess.com/t21-swing-gate-operator' },
      { label: 'Viking T-21 installation instructions, Rev J1, April 2026 (PDF)', url: 'https://www.vikingaccess.com/_files/ugd/fd6890_6c962e59cfae4e5f91e8e446eaafd89f.pdf' },
      { label: 'Viking T-21 spec sheet (PDF)', url: 'https://www.vikingaccess.com/_files/ugd/997df4_b549d2911330487b80deefc2ca39bdfa.pdf' },
      { label: 'Viking F-1 installation instructions, Rev J1, April 2026 (PDF) — comparison', url: 'https://www.vikingaccess.com/_files/ugd/fd6890_eebe78bd0fa6435cb2049de49c58174b.pdf' },
      { label: 'Viking swing gate operator lineup and ratings', url: 'https://www.vikingaccess.com/all-swing-gate-operators' },
      { label: 'Viking / FAAC International limited warranty policy (PDF)', url: WARRANTY_POLICY_URL },
      { label: 'All Security Equipment — Viking T21 VA-T21NX listing (alias)', url: 'https://allsecurityequipment.com/products/viking-va-t21nx' },
    ],
    toConfirm: [
      'Which warranty tier Viking applies to the T-21 — the policy lists 3 years for “Gate Operators” and 5 years for “Pad Mount Gate Operators”.',
      'Viking’s spec sheet says “24 VDC 1 HP”; its lineup page says “DC motor equivalent to 1 HP AC”. Confirm preferred wording.',
      'Whether Shield stocks V-Flex boards, EMI boards and DUBA12 batteries or orders them per job.',
      'That the ERR message-to-meaning mapping read from the manual’s two-column table is correct on a live unit.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // K-2
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'k-2-repair',
    brandSlug: 'viking',
    model: 'K-2',
    aliases: ['K2', 'K-2 SPS', 'K2SPS', 'VA-K2SPS', 'VA-K2NX', 'VA-K2SPSSLR'],
    descriptor: 'residential DC chain-drive slide gate operator with digital limits',
    gateType: 'slide',
    duty: 'residential',
    status: 'current',
    statusNote:
      'Current as the K-2 SPS (VA-K2SPS), which distributors describe as the new version of VA-K2NX with a Smart Positioning System added. Manual revision L1 is dated April 2026.',

    title: 'Viking K-2 Slide Gate Repair | Dallas–Fort Worth',
    metaDescription:
      'Viking K-2 slide gate lost its limits or showing ERR SPS? Shield Gate Repair fixes K-2 and K-2 SPS operators across Dallas–Fort Worth, 24/7. Call today.',
    h1: 'Viking K-2 Repair in Dallas–Fort Worth',
    heroIntro:
      'Shield Gate Repair works on the Viking K-2, the residential slide operator Viking rates for gates up to 700 lb and 30 ft long. If yours has forgotten its limits after an outage or is showing an SPS or EPS2 error, the fix is usually a position sensor, a connection or a limit reset — rarely a whole new operator.',
    heroPoints: [
      'We identify which K-2 you have — SPS or the earlier EPS2-only unit — because they behave differently after power loss.',
      'We work through ERR SPS and ERR EPS2 codes and measure the sensor’s 5 V supply before condemning a board.',
      'We check chain sag and the track itself, because a K-2 feels a dragging gate as motor current.',
    ],

    identify: {
      body: [
        'The K-2 is a low, pad- or post-mounted slide operator that sits beside the gate with a keyed cover. A sprocket and two idler pulleys route a #40 chain out to brackets welded along the gate. It is the smallest of Viking’s three current slide operators; the L-3 and H-10 are the heavier-rated models in the same range.',
        'Two generations are in the field. Current units are sold as VA-K2SPS and carry a Smart Position Sensor; the earlier VA-K2NX relied on an Electronic Positioning Sensor (EPS2) alone. With the cover off, an SPS unit has a sensor board mounted on its own small gearbox, coupled to the motor gearbox and cabled to the V.Exp connector on the V-Flex board. Scrolling the LCD on an SPS unit shows MODEL K-2 SPS and separate SPS and EPS2 status lines.',
      ],
      lookFor: [
        'A low slide operator on a concrete pad beside the gate, with a key lock on the cover',
        '#40 chain leaving the operator over idler pulleys to brackets at each end of the gate',
        'LCD showing MODEL K-2 SPS, plus SPS and EPS2 status lines',
        'A Manual Release Switch inside the cover marked RELEASE and ENGAGE',
        'Paperwork reading VA-K2SPS (current), VA-K2NX (earlier) or VA-K2SPSSLR (solar)',
      ],
    },

    overview: [
      {
        heading: 'Digital limits and the Smart Position Sensor',
        body: [
          'The K-2 does not use limit switches. Limits are set electronically: move the gate to a position and hold the matching limit button on the board until its LED stops flashing and goes solid. Viking treats the first three cycles after setup as learn cycles, and the operator runs at half speed while limits are being set.',
          'On current units the SPS is the main position sensor and EPS2 is a redundant one. Viking states the SPS tracks the exact gate position through power outages and when the gate is pushed by hand, without a relearn. The LCD tells you how the two are behaving: SPS OK means the SPS is in control; EPS2 STANDBY means EPS2 is backing it up; EPS2 OK means EPS2 is the only sensor controlling the limits.',
        ],
      },
      {
        heading: 'Why earlier K-2 units lose their limits',
        body: [
          'Viking’s 2014 K-2 manual carried a warning the SPS version was built to remove: after a complete power failure, including the battery backup, the limit positions may have been cleared and must be set again. The limit LEDs flash when a position is not set.',
          'Two K-2 details catch people out. On early operators not equipped with SPS, ERR SPS MISSING is normal and expected, not a fault. And if an EPS2 cable is disconnected and reconnected, the display reads EPS2 NOT SET until both limits are cleared and set again.',
        ],
      },
      {
        heading: 'Chain drive and the release switch',
        body: [
          'A DC motor and gearbox turn a drive sprocket that pulls a nickel-coated #40 chain, supplied as a 25 ft kit. Viking specifies 6 to 8 inches of sag measured down from a taut line, and notes that chain tension directly changes motor current draw. The chain should run level with, and at the same height as, where it leaves the operator’s rollers.',
          'Manual release on a K-2 is a switch, not a clutch. Pressing the Manual Release Switch to RELEASE cuts motor power so the gate can be pushed. How hard it pushes in an outage depends on the Fail Safe/Secure jumper: with the jumper plug inserted the gate resists manual movement; with it removed it moves with relatively low force.',
        ],
      },
      {
        heading: 'A Class I operator with two required sensors',
        body: [
          'Viking lists the K-2 as UL 325 Class I — residential only, for homes of one to four families. For a slide gate, Viking requires at least two monitored entrapment sensors: one on the UL input and one on Re-Open, or two on UL covering each direction of travel. Without them the operator may be inoperable.',
          'Battery backup on the K-2 is listed at 100 cycles of operation, well short of the 400 cycles Viking quotes for its pad-mounted swing operators, so a long outage drains it sooner.',
        ],
      },
    ],

    specs: [
      { label: 'Application', value: 'Residential vehicular slide gates' },
      { label: 'UL 325 classification', value: 'Class I (residential only)' },
      { label: 'Maximum gate', value: '700 lb, 30 ft' },
      { label: 'Speed', value: '12 in per second' },
      { label: 'Duty cycle', value: '100%' },
      { label: 'Motor', value: '24 VDC; listed as DC motor equivalent to 1/3 HP AC' },
      { label: 'Main power', value: '120/240 VAC single phase; 1.5 A / 1.0 A; 4.0 A timed main fuse' },
      { label: 'Limits', value: 'Digital, set with board buttons; Smart Position Sensor with EPS2 redundancy' },
      { label: 'Drive', value: '#40 nickel-coated chain (25 ft kit), sprocket and idler pulleys' },
      { label: 'Battery backup', value: '100 cycles of operation' },
      { label: 'Controller', value: 'V-Flex control board (VFLEXPCBU18) with LCD diagnostics' },
      { label: 'Surge protection', value: 'Up to 20,000 V / 10,000 A' },
      { label: 'Operating temperature', value: '−20°F to 160°F, with heater' },
    ],

    symptoms: [
      {
        symptom: 'After a power cut the gate won’t move and the limit lights are flashing.',
        causes:
          'The limit positions have been cleared. On an earlier K-2 this is what Viking warns happens after a full outage that also drains the batteries. The display shows ERR OPN LIMIT, ERR CLS LIMIT or ERR NO LIMIT depending on which positions are gone.',
        whatWeDo:
          'We confirm the generation, load-test the batteries that let it happen, set both limits with the board buttons and let the three learn cycles complete. On an SPS unit that cleared its limits we look at the SPS status line before assuming the sensor is fine.',
      },
      {
        symptom: 'The display reads ERR SPS DRIVE.',
        causes:
          'The Smart Position Sensor is not seeing movement while the motor should be running. Viking’s checks: the motor is actually responding, the SPS gearbox and coupler are properly connected to the motor gearbox, the motor is secured to its gearbox and the coupling key is in place.',
        whatWeDo:
          'We run the motor on command, then inspect the coupler and key. A missing key or loose coupler is a small mechanical repair; the sensor is only replaced if it still sees nothing once the drive is sound.',
      },
      {
        symptom: 'ERR SPS SENSING or ERR SPS 5V keeps coming back.',
        causes:
          'SENSING means the SPS board is not detecting its gearbox — Viking points to the board’s seating and contaminated pickup contacts. 5V means the sensor supply is outside 4.7–5.3 VDC, usually a damaged or poorly seated SPS cable.',
        whatWeDo:
          'We clean the V.Exp connector pins, measure 5 V across pins 1 and 4 at the board and across the red and black wires at the SPS board, and replace the cable or SPS PCB only where the readings point.',
      },
      {
        symptom: 'The Stop light stays on and the gate ignores every command.',
        causes:
          'On a K-2 a solid Stop LED can mean a failed monitored sensor (ERR SENS), a fault with both the SPS and EPS2 sensors or their wiring, or an SPS connected to a control board that is not configured for SPS.',
        whatWeDo:
          'We read the error list, check the monitored sensor count with UL LEARN, and test both position sensor cables. If a board swap put the wrong configuration in, we sort out the board rather than the sensors.',
      },
      {
        symptom: 'The gate jerks, slaps its chain or stops with the ODS light on.',
        causes:
          'Chain sag outside Viking’s 6–8 inch range, a cracked or separated track, dragging wheels or tight guide rollers. A solid ODS light is a sudden obstruction; a flashing one is overload from resistance that builds.',
        whatWeDo:
          'We switch to RELEASE and push the gate its full length, inspect the track and wheels, re-set the chain sag and confirm the chain brackets are level with the operator before setting ODS again.',
      },
      {
        symptom: 'With the power off, the gate is almost impossible to push.',
        causes:
          'Often this is by design: the Fail Safe/Secure jumper is inserted, which Viking uses to make the gate resist manual movement during a power failure. Otherwise the release switch is still on ENGAGE, or the wheels and track are binding.',
        whatWeDo:
          'We check the release switch and the jumper, explain the security trade-off of each setting, and change it only if you want the other behavior. Then we check the track so the push is honest.',
      },
      {
        symptom: 'The gate stops working partway through an outage.',
        causes:
          'The K-2’s backup is listed at 100 cycles, so a busy driveway can exhaust it. Aged batteries, a blown 4 A charging fuse (ERR CHRG CHECK 4A) or ERR BAT LOW shorten that further.',
        whatWeDo:
          'We read CHARGE and BAT VOLT, test the batteries under load and check the charging fuse. Where outages are frequent we discuss the Auto Open and Last Open options so the gate fails into the state you prefer.',
      },
    ],

    components: [
      {
        part: 'Smart Position Sensor (SPS) and SPS board',
        whatItDoes: 'Primary sensor that tracks gate position for the digital limits.',
        failureSigns: 'ERR SPS MISSING on an SPS unit, ERR SPS SENSING, ERR SPS 5V.',
        verdict: 'replace-part',
      },
      {
        part: 'EPS2 sensor and cable',
        whatItDoes: 'Redundant position sensor; also required for Lock Mode.',
        failureSigns: 'ERR EPS2 WRONG, ERR EPS2 MISSING, EPS2 NOT SET after reconnection.',
        verdict: 'repair',
      },
      {
        part: 'V-Flex control board',
        whatItDoes: 'Stores limits, runs obstruction sensing and charging, drives the LCD.',
        failureSigns: 'No display, erratic inputs, SPS not recognized after a board change.',
        verdict: 'replace-part',
      },
      {
        part: '#40 chain, drive sprocket and idler pulleys',
        whatItDoes: 'Pulls the gate along the track.',
        failureSigns: 'Chain slap, sag outside 6–8 inches, worn idler bushings, rust.',
        verdict: 'adjust',
      },
      {
        part: 'DC motor, gearbox and brushes',
        whatItDoes: 'Drives the sprocket and, on SPS units, the sensor gearbox coupler.',
        failureSigns: 'Check Motor LED, ERR SPS DRIVE, high motor current.',
        verdict: 'repair',
      },
      {
        part: 'Manual release switch and Fail Safe/Secure jumper',
        whatItDoes: 'Cuts motor power for manual operation; sets resistance to pushing in outages.',
        failureSigns: 'Gate won’t run (left on RELEASE) or can’t be pushed (fail secure).',
        verdict: 'adjust',
      },
      {
        part: 'Batteries and power supply panel',
        whatItDoes: 'Backup power, 10 A toroidal transformer, EMI fuse and main switches.',
        failureSigns: 'ERR BAT LOW, ERR AC NO AC, power panel LEDs out.',
        verdict: 'replace-part',
      },
    ],

    repairOrReplace: {
      summary:
        'The K-2 is modular. The SPS, SPS board, EPS2 sensor, board, motor, gearbox and chain are each listed as separate parts, and most K-2 faults are a sensor connection, a cleared limit or the gate track. An earlier VA-K2NX with healthy batteries and correctly set limits can keep working for years. Replacement is the honest answer when the gate or the site has outgrown what a Class I, 700 lb operator is for.',
      repair: [
        'Cleared limits, EPS2 NOT SET or ERR LIMIT messages — reset and learn.',
        'SPS or EPS2 errors caused by a coupler, key, dirty contacts or a damaged cable.',
        'Chain sag, worn idler bushings, wheels or a damaged track section.',
        'Batteries, the 4 A charging fuse, or a single failed V-Flex board.',
      ],
      replace: [
        'The gate is heavier than 700 lb or longer than 30 ft. Viking’s L-3 (1,600 lb / 60 ft) and H-10 (2,200 lb / 75 ft) are the step-ups in the same slide range.',
        'The gate now serves a shared or commercial entrance. The K-2 is Class I residential only, and Viking lists the L-3 and H-10 for residential and commercial use.',
        'The chassis or gearbox has been flooded or corroded from a pad sitting too low.',
      ],
    },

    warranty: {
      manufacturer:
        'Viking’s published warranty policy (FAAC International, Inc.) lists 3 years for gate operators and 5 years for Viking pad-mount gate operators from the invoice date; distributors list the K-2 SPS with a 3-year warranty. Batteries are covered for a maximum of 2 years.',
      notes: [
        'Surge, lightning, flood, hail and installation errors are excluded.',
        'Motor brushes are treated as maintenance parts.',
        'The warranty runs to Viking’s wholesale customers; homeowners go through the installing dealer.',
        'Spare parts bought separately carry 1 year under the manual’s warranty text.',
      ],
    },

    dfw: [
      {
        heading: 'Clay soil, concrete track and chain alignment',
        body: [
          'A slide gate depends on its track and the operator pad staying where they were poured. DFW’s expansive clay heaves and settles both, and Viking’s maintenance list for the K-2 specifically asks you to inspect the track for cracking or separation and keep gate and operator level and parallel. When the pad tilts, the chain no longer runs level with the operator’s rollers, current climbs, and the K-2 starts tripping on overload.',
        ],
      },
      {
        heading: 'Storm outages and limit memory',
        body: [
          'Spring storms bring outages, and summer heat quietly ages the backup batteries before they arrive. That is exactly the combination that clears limits on an earlier K-2: mains goes down, weak batteries run flat, and the gate comes back with flashing limit LEDs. SPS units ride through it. If you have the earlier model, a battery test before storm season is the cheapest protection.',
        ],
      },
      {
        heading: 'Heavy rain and a low operator pad',
        body: [
          'Viking recommends the K-2 pad sit at least 4 inches above grade to keep water out of the machinery. On flat lots where cloudbursts pool around a slide gate, a pad poured flush with the drive puts the motor, gearbox and sensor connections in standing water — and water ingress is not a warranty repair.',
        ],
      },
    ],

    process: [
      {
        step: 'Identify the K-2 generation',
        body: 'We read the model line and the SPS and EPS2 status on the LCD, which tells us whether an SPS error is a fault or simply normal for an older unit.',
      },
      {
        step: 'Release and push the gate its full length',
        body: 'Release switch to RELEASE, then a full push open and closed while we watch wheels, guide rollers, track joints and chain sag against the 6–8 inch figure.',
      },
      {
        step: 'Work each stored error to its check',
        body: 'SPS DRIVE to the coupler and key, SENSING to the pickup contacts, 5V to the supply measurement, EPS2 codes to the cable and connector — one code, one test.',
      },
      {
        step: 'Test power and backup',
        body: 'Power panel LEDs, voltage selector, CHARGE and BAT VOLT readings, the 4 A fuses and a battery load test.',
      },
      {
        step: 'Quote, reset limits, confirm sensors',
        body: 'Price agreed before parts go in. Afterward we set both limits, allow the three learn cycles, and confirm both required monitored sensors stop and reverse the gate.',
      },
    ],

    faqs: [
      {
        q: 'Why did my Viking K-2 forget its open and close positions?',
        a: 'On earlier K-2 operators, Viking warns that a complete power failure — mains and battery backup both gone — may clear the limits. Setting them again takes a few minutes with the board buttons. If it keeps happening, the batteries are the real problem.',
      },
      {
        q: 'What is the difference between the K-2 SPS and the older K-2?',
        a: 'The SPS model adds a Smart Position Sensor that Viking says keeps the exact gate position through outages and manual pushing without a relearn. Distributors describe VA-K2SPS as the new version of VA-K2NX. Ratings — 700 lb, 30 ft — are the same.',
      },
      {
        q: 'My K-2 shows ERR SPS MISSING. Is the sensor dead?',
        a: 'Not necessarily. Viking notes this message is normal on early K-2 operators that were never fitted with SPS. On an SPS unit it means the board sees no data, and the first checks are the V.Exp connection and its pins.',
      },
      {
        q: 'Can a K-2 be used on our HOA or apartment gate?',
        a: 'Viking lists the K-2 as UL 325 Class I, residential only. A gate serving five or more units falls under Class II, so a shared entrance needs an operator listed for that use.',
      },
      {
        q: 'How do I move a K-2 gate by hand?',
        a: 'Remove the operator cover and press the Manual Release Switch to RELEASE; press it back to ENGAGE afterward. If the gate is still very stiff with the power off, the Fail Safe/Secure jumper may be set to fail secure.',
      },
      {
        q: 'How tight should the chain on a K-2 be?',
        a: 'Viking specifies 6 to 8 inches of sag, measured from an imaginary taut line straight down to the lowest point of the chain. Tighter than that raises motor current; looser lets the chain slap.',
      },
    ],

    relatedModels: ['viking/r-6-repair'],
    relatedServices: ['automatic-gate-repair', 'gate-motor-repair', 'electric-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Viking Access Systems — K-2 Slide Gate Operator product page', url: 'https://www.vikingaccess.com/k2-slide-gate-operator' },
      { label: 'Viking K-2 SPS installation instructions, Rev L1, April 2026 (PDF)', url: 'https://www.vikingaccess.com/_files/ugd/fd6890_e5eff236e41044e485cd2e236a02f114.pdf' },
      { label: 'Viking K-2 installation manual, Rev K2NXMN10.F, February 2014 (PDF, via TSD)', url: 'https://www.tsdistributors.com/pdfs/Viking%20K-2%20Slide%20Gate%20Operator%20Installation%20manual.pdf' },
      { label: 'Viking slide gate operator lineup and ratings', url: 'https://www.vikingaccess.com/all-slide-gate-operators' },
      { label: 'Viking / FAAC International limited warranty policy (PDF)', url: WARRANTY_POLICY_URL },
      { label: 'All Security Equipment — Viking K2 VA-K2SPS listing (VA-K2NX successor note)', url: 'https://allsecurityequipment.com/products/viking-va-k2nx' },
      { label: 'Performance Gate Openers — K-2 solar VA-K2SPSSLR and SPS part listings', url: 'https://performancegateopeners.com/store/smart-position-sensor.html' },
    ],
    toConfirm: [
      'Whether the SPS kit (distributor part VASPSKN2NX; manual part VASPSK2NX) can be retrofitted to an earlier VA-K2NX, and which board revision it needs.',
      'K-2 battery specification: the parts list gives DUBB12 while the safety page names Yuasa NP7-12 / DUBA12, and a distributor lists two 4 Ah batteries.',
      'The manual states 100 backup cycles “(1000 lb gate and 20’ length)”, which exceeds the 700 lb rating — confirm the test condition with Viking.',
      'The year the SPS version replaced VA-K2NX in production.',
      'ERR ___ LIMIT is printed with a blank for OPN / CLS / NO — confirm exact on-screen wording on a live unit.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // R-6
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'r-6-repair',
    brandSlug: 'viking',
    model: 'R-6',
    aliases: ['R6', 'VA-R6NX', 'VA-R6NXSLR', 'VA-R6SLK'],
    descriptor: 'residential pad-mounted DC swing gate operator',
    gateType: 'swing',
    duty: 'residential',
    status: 'current',
    statusNote: 'Listed on vikingaccess.com as a current residential swing operator; manual revision J1 is dated April 2026.',

    title: 'Viking R-6 Gate Opener Repair | Dallas–Fort Worth',
    metaDescription:
      'Viking R-6 swing gate slowing, stopping short or opening itself in outages? Shield Gate Repair diagnoses R-6 operators across Dallas–Fort Worth. Call 24/7.',
    h1: 'Viking R-6 Repair in Dallas–Fort Worth',
    heroIntro:
      'Shield Gate Repair repairs the Viking R-6, Viking’s residential pad-mounted swing operator for leaves up to 700 lb and 14 ft. When an R-6 slows, stops short or throws limit errors, the cause is usually the leaf itself or the cam limits — both fixable without replacing the operator.',
    heroPoints: [
      'We check the leaf against the R-6’s 700 lb / 14 ft rating first — privacy cladding added later changes everything.',
      'We inspect the #40 chain, #60 worm gear and clutch key that make up the R-6 drive.',
      'We test backup separately; Viking rates the R-6 for 400 battery cycles with a 600 lb gate.',
    ],

    identify: {
      body: [
        'The R-6 is the residential member of Viking’s pad-mounted swing family. It sits on a concrete pad or a post stand next to the hinge post, with an output shaft knob and cover on top and an articulated arm running to the gate. It uses the same VA-F1ARM20 arm assembly and output-shaft layout as the heavier F-1 and T-21, so the silhouette alone will not tell you which one you have.',
        'The LCD will. Scroll it with the Diagnose button and an R-6 reports MODEL R-6. Inside the chassis, the R-6 drives a #40 chain into a #60 worm gearbox, smaller than the T-21’s #50 chain and #80 box. Distributors sell it as VA-R6NX (operator), VA-R6SLK (kit) and VA-R6NXSLR (solar).',
      ],
      lookFor: [
        'LCD reads MODEL R-6 when scrolled with the Diagnose button',
        'An output shaft knob securing a cover (hat) on top of the chassis',
        'Articulated multi-part arm welded or bracketed to a frame member of the gate',
        '#40 chain to a #60 worm gearbox under the cover',
        'Paperwork reading VA-R6NX, VA-R6SLK or VA-R6NXSLR',
      ],
    },

    overview: [
      {
        heading: 'A residential drive train sized for 700 lb',
        body: [
          'The R-6 pairs a 24 V DC gearhead motor — Viking describes it as equivalent to a 1/3 HP AC motor — with a #40 chain of 38 pitches and a #60 worm gear at 30:1. The output shaft carries a clutch and handle, and the output arm connects to the multi-part arm on the gate.',
          'Viking rates it at 700 lb on a leaf up to 14 ft, and figures its 400-cycle battery backup on a 600 lb gate. Treat 700 lb as a ceiling. A leaf sitting close to it has little margin left for a sagging hinge or wind pressure on solid panels, and the R-6 will say so through its obstruction sensor.',
        ],
      },
      {
        heading: 'Cam-set limit switches',
        body: [
          'Like Viking’s heavier swing units, the R-6 stops on mechanical limit switches, and the board’s limit buttons are inactive. The switches sit in an R-6-specific holder and are tripped by a cam assembly keyed to the clutch through a guide pin. Limits are set with the gate released: move it to each end, turn the matching cam until its switch clicks, snug the screws and run three full cycles to confirm.',
          'The limit LEDs are the R-6’s diagnostic here. One lit solid means the gate is at that limit. Several flashing at once means both switches are actuated or there is a wiring fault. Both limit LEDs flashing can also be the board asking you to check the model number, which Viking resets by actuating both limit switches momentarily.',
        ],
      },
      {
        heading: 'Class I only, and what that means',
        body: [
          'Viking lists the R-6 as UL 325 Class I: an operator for a residence of one to four single families. A gate serving five or more units, a business or the general public calls for a Class II listing, which the R-6 does not carry. For swing gates Viking requires a monitored entrapment sensor in each direction of travel that has an entrapment zone — for example where the gap under the gate is between 4 and 16 inches.',
        ],
      },
      {
        heading: 'Power options and outage behavior',
        body: [
          'The R-6 runs from 115 or 230 VAC through a power supply panel with its own EMI fuse and switches. Where mains is far away, Viking recommends its Modular Power Box installed at the mains source, feeding 24 VAC over up to 500 ft of 10 AWG wire, and a solar version is sold separately.',
          'Two jumpers decide what the gate does when the lights go out. Auto Open opens the gate during a power failure and resumes normal operation when power returns. Last Open opens it only once the batteries are critically low. With neither fitted, the gate runs on battery until it can’t.',
        ],
      },
    ],

    specs: [
      { label: 'Application', value: 'Residential vehicular swing gates' },
      { label: 'UL 325 classification', value: 'Class I' },
      { label: 'Maximum gate', value: '700 lb, 14 ft' },
      { label: 'Motor', value: '24 VDC gearhead; listed as DC motor equivalent to 1/3 HP AC' },
      { label: 'Drive', value: '#40 chain to a #60 worm gear, 30:1' },
      { label: 'Speed / opening', value: '13–16 seconds per 90°; opening up to 120°' },
      { label: 'Duty cycle', value: '100%' },
      { label: 'Main power', value: '120/240 VAC single phase; 2.5 A / 1.5 A; 4.0 A timed main fuse' },
      { label: 'Battery backup', value: 'Two 12 VDC batteries; 400 continuous cycles with a 600 lb gate' },
      { label: 'Controller', value: 'V-Flex control board (VFLEXPCBU18) with LCD diagnostics' },
      { label: 'Limits', value: 'Two mechanical limit switches with cam and holder' },
      { label: 'Surge protection', value: 'Up to 20,000 V / 10,000 A' },
      { label: 'Operating temperature', value: '−20°F to 160°F, with heater and temperature management' },
    ],

    symptoms: [
      {
        symptom: 'The gate slows near the end of its swing and then stops.',
        causes:
          'Overload building through travel: a leaf near or over 700 lb, hinges that have dropped, a post leaning at the hinge, or arm geometry that puts the gate at a poor angle near full open. A gate bracket fixed to a few pickets instead of a full-length frame member flexes and adds to it.',
        whatWeDo:
          'We release the clutch and swing the leaf by hand, estimate its weight against the rating, and check the arm dimensions and bracket. The gate gets corrected before the ODS dial is touched.',
      },
      {
        symptom: 'The gate opened on its own when the power went out.',
        causes:
          'Usually the R-6 doing what it was set to do. The Auto Open jumper opens the gate during an outage; the Last Open jumper opens it when the batteries reach critically low. Worn batteries make Last Open arrive much sooner.',
        whatWeDo:
          'We check which jumper is fitted, test the batteries, and set the behavior you actually want — open for access and emergency vehicles, or closed for security — so the next outage holds no surprises.',
      },
      {
        symptom: 'The motor runs but the arm doesn’t move, or it slips under load.',
        causes:
          'The clutch key was not reinstalled after a manual release, the clutch is not tightened evenly on both sides, or the chain has come off a sprocket. Viking specifies the clutch should not slip under moderate force even with the key removed.',
        whatWeDo:
          'We refit the key with the shaft notches aligned, tighten and test the clutch, and inspect the chain and sprockets. The release handle is checked for locking horizontally at 0°.',
      },
      {
        symptom: 'Both limit lights are flashing and the gate won’t run.',
        causes:
          'Both limit switches actuated at the same time, a damaged limit harness, or the board flagging a model-number check. On the display this can show as ERRLIMIT OPN+CLS.',
        whatWeDo:
          'We test both switches and their normally closed circuits, repair or replace the harness or switch, and perform Viking’s soft reset by actuating both switches together when the board calls for it.',
      },
      {
        symptom: 'The gate reverses for no obvious reason.',
        causes:
          'An ODS setting too sensitive for the leaf, a photo-eye that is misaligned or dirty, or an input that is stuck on. On the R-6 each input has its own LED, so a lit UL, Re-Open or Radio light shows the board is receiving a signal.',
        whatWeDo:
          'We read the input LEDs, disconnect external devices one at a time as Viking’s troubleshooting suggests, then align or replace the faulty device and set ODS to suit the gate.',
      },
      {
        symptom: 'ERR FUSE 15 AMP appeared after the gate hit something.',
        causes:
          'The 15 A motor fuse blew because the motor stalled — against a vehicle, a trash can, or a leaf that jammed. Repeated blowing without an impact points back to a binding gate or an ODS setting that allows too much force.',
        whatWeDo:
          'We check the arm, bracket and hinges for damage from the impact, replace the fuse, and verify force and reversal before handing the gate back.',
      },
      {
        symptom: 'The gate is dead during outages and Battery Low is lit.',
        causes:
          'The two 12 V batteries are at the end of their life, the 4 A charging fuse has blown, or the charging voltage is wrong. ERR BAT LOW and ERR CHRG CHECK 4A are the R-6’s messages for these.',
        whatWeDo:
          'We read the charging and battery voltages on the LCD, test the batteries under load, check the fuse and replace the batteries as a pair.',
      },
    ],

    components: [
      {
        part: 'Clutch, clutch key and release handle',
        whatItDoes: 'Links the output arm to the gearbox shaft; frees it for hand operation.',
        failureSigns: 'Arm slips, key missing, handle won’t lock flat.',
        verdict: 'adjust',
      },
      {
        part: 'Limit switches and cam assembly',
        whatItDoes: 'Stop the leaf at its open and closed positions.',
        failureSigns: 'Overtravel, early stops, ERRLIMIT OPN+CLS, flashing limit LEDs.',
        verdict: 'adjust',
      },
      {
        part: '#40 chain and sprockets',
        whatItDoes: 'Carry drive from the motor sprocket to the gearbox sprocket.',
        failureSigns: 'Chain off, rust, clunk at start, uneven travel.',
        verdict: 'service',
      },
      {
        part: '#60 worm gearbox',
        whatItDoes: 'Reduces motor speed 30:1 and holds the leaf.',
        failureSigns: 'Play in the output shaft, grinding under load, oil or grease loss.',
        verdict: 'repair',
      },
      {
        part: '24 V DC gearhead motor and brushes',
        whatItDoes: 'Provides the drive.',
        failureSigns: 'Check Motor LED, high current reading, weak travel.',
        verdict: 'repair',
      },
      {
        part: 'V-Flex control board',
        whatItDoes: 'Logic, obstruction sensing, charging and LCD diagnostics.',
        failureSigns: 'Dead display, ignored inputs, charging errors after a surge.',
        verdict: 'replace-part',
      },
      {
        part: 'Articulated arm assembly and gate bracket',
        whatItDoes: 'Converts shaft rotation into leaf movement.',
        failureSigns: 'Binding near full open, cracked welds, bracket flexing on pickets.',
        verdict: 'adjust',
      },
    ],

    repairOrReplace: {
      summary:
        'An R-6 in good mechanical order is worth repairing. Its parts — clutch, switches, chain, sprockets, gearbox, motor, brushes and board — are listed individually, and most failures are adjustment or a single part. Replacement is right when the gate has outgrown the R-6 or the entrance has changed use.',
      repair: [
        'Clutch slip, a missing clutch key or cam limits out of adjustment.',
        'Batteries, fuses or a charging fault.',
        'Worn chain or sprockets, or worn motor brushes.',
        'A single board failure after a surge.',
      ],
      replace: [
        'The leaf is over 700 lb or longer than 14 ft, often after cladding was added. The F-1 (1,500 lb at 12 ft, 1,000 lb at 16 ft) and T-21 (2,000 lb at 12 ft, 1,200 lb at 20 ft) use the same arm assembly, and Viking’s manuals recommend the same 24 × 22 × 30 inch pad for the R-6 and T-21, which can simplify a step up.',
        'The gate now serves a shared driveway, community or business, which needs a Class II operator.',
        'The gearbox is worn and the chassis corroded, so repairs would approach the cost of a new unit.',
      ],
    },

    warranty: {
      manufacturer:
        'Viking’s current limited warranty policy (FAAC International, Inc.) sets 3 years for gate operators and 5 years for Viking pad-mount gate operators, starting from the invoice date. Batteries have a maximum 2-year warranty.',
      notes: [
        'Lightning, power surge, hail, flood, vehicle impact and improper installation are excluded.',
        'Maintenance parts such as motor brushes are not covered.',
        'Coverage is extended to Viking’s wholesale customers; ask the dealer who installed your R-6.',
        'Accessories or spare parts sold separately carry 1 year under the manual’s warranty text.',
      ],
    },

    dfw: [
      {
        heading: 'Privacy cladding and a 700 lb ceiling',
        body: [
          'Wood or steel sheet added to an iron gate for privacy adds weight and turns an open leaf into a sail. In a North Texas thunderstorm gust, that sail pushes back against the arm. An R-6 that was comfortably inside its rating on bare iron can trip its obstruction sensor or blow its motor fuse once the leaf is clad, and the fix may be the gate rather than the operator.',
        ],
      },
      {
        heading: 'Clay soil and a 14 ft leaf',
        body: [
          'A long leaf magnifies post movement. When expansive clay lets the hinge post lean even slightly, the latch end of a 14 ft gate drops noticeably, and the R-6 starts pushing uphill through part of its swing. Seasonal swings between wet spring and dry August are when this shows up.',
        ],
      },
      {
        heading: 'Hot batteries and the outage setting',
        body: [
          'The R-6’s batteries sit inside the chassis through DFW summers, and heat shortens their life. Worn batteries reach the Last Open threshold quickly, so a gate set that way may be standing open soon after a storm outage starts. Decide deliberately between Auto Open, Last Open or neither, and test the batteries each spring.',
        ],
      },
    ],

    process: [
      {
        step: 'Check the leaf against the R-6 rating',
        body: 'We look at gate size, cladding and construction and compare against 700 lb and 14 ft before diagnosing the operator itself.',
      },
      {
        step: 'Pull the hat and clutch key, then swing it by hand',
        body: 'With the output shaft knob and cover off and the key removed, we move the leaf end to end, checking hinges, post and arm geometry.',
      },
      {
        step: 'Read the LEDs and the LCD',
        body: 'Limit, input and ODS LEDs first, then stored error messages, charging voltage and motor current.',
      },
      {
        step: 'Test drive, limits and power',
        body: 'Chain and sprockets, clutch hold, cam and switch operation, fuses and a battery load test, plus a check of the Auto Open and Last Open jumpers.',
      },
      {
        step: 'Quote, repair and confirm',
        body: 'We give you the price before work begins. After repair we run three full cycles and confirm the monitored sensors reverse the gate.',
      },
    ],

    faqs: [
      {
        q: 'Is my gate too heavy for a Viking R-6?',
        a: 'Viking rates the R-6 for leaves up to 700 lb and 14 ft. Iron gates that have had wood or steel cladding added often end up close to or past that. A slow, labored swing and repeated obstruction trips are the usual signs.',
      },
      {
        q: 'Why did my R-6 gate open by itself when the power went out?',
        a: 'Check the Auto Open and Last Open jumpers. Auto Open opens the gate during any outage; Last Open opens it when the batteries run critically low. Both are intentional features, not faults.',
      },
      {
        q: 'How do I release an R-6 to open the gate by hand?',
        a: 'With the gate stopped, remove the output shaft knob and cover, lift the manual release handle and remove the clutch key. Reverse the steps to re-engage, lining the notches up before refitting the key.',
      },
      {
        q: 'Can an R-6 be upgraded to a T-21 without starting over?',
        a: 'Often partly. Both use the VA-F1ARM20 arm assembly, and Viking recommends the same concrete pad dimensions for both. The arm geometry and gate bracket still have to be checked against the heavier machine on site.',
      },
      {
        q: 'Can the R-6 go on a shared driveway or HOA entrance?',
        a: 'Viking lists the R-6 as UL 325 Class I, intended for homes of one to four families. A gate serving more units or the public requires a Class II operator.',
      },
      {
        q: 'Does the R-6 have a heater for cold weather?',
        a: 'Yes. It has a built-in, thermostatically controlled heater that can be enabled at the open or close limit from the LCD menu. Viking requires an external positive stop at whichever limit the heater is set for.',
      },
    ],

    relatedModels: ['viking/t-21-repair', 'viking/k-2-repair'],
    relatedServices: ['automatic-gate-repair', 'gate-motor-repair', 'electric-gate-repair', 'iron-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Viking Access Systems — R-6 Swing Gate Operator product page', url: 'https://www.vikingaccess.com/r6-swing-gate-operator' },
      { label: 'Viking R-6 installation instructions, Rev J1, April 2026 (PDF)', url: 'https://www.vikingaccess.com/_files/ugd/fd6890_9fbea7946b0e488d84fc01686347cb7c.pdf' },
      { label: 'Viking R-6 spec sheet (PDF)', url: 'https://www.vikingaccess.com/_files/ugd/fd6890_b298dac8f80445d8af304a22a940c6df.pdf' },
      { label: 'Viking swing gate operator lineup and ratings', url: 'https://www.vikingaccess.com/all-swing-gate-operators' },
      { label: 'Viking T-21 installation instructions (pad and arm comparison)', url: 'https://www.vikingaccess.com/_files/ugd/fd6890_6c962e59cfae4e5f91e8e446eaafd89f.pdf' },
      { label: 'Viking / FAAC International limited warranty policy (PDF)', url: WARRANTY_POLICY_URL },
      { label: 'All Security Equipment — Viking R6 VA-R6NX listing (alias)', url: 'https://allsecurityequipment.com/products/viking-va-r6nx' },
    ],
    toConfirm: [
      'Which warranty tier (3-year “Gate Operators” or 5-year “Pad Mount Gate Operators”) Viking applies to the R-6.',
      'R-6 battery amp-hour rating: spec sheet gives “12 VDC x 2” without Ah; parts list shows DUBB12.',
      'Whether the R-6 power supply is removable (spec sheet says so; the manual shows a power supply panel assembly and recommends a separate Modular Power Box for low voltage).',
      'Whether an F-1 uses the same recommended pad size as the R-6 and T-21 (not checked).',
      'Gearbox lubrication type and whether it is serviceable in the field.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // G-5
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'g-5-repair',
    brandSlug: 'viking',
    model: 'G-5',
    aliases: ['G5', 'G-5NX', 'VA-G5NX', 'VA-G5SLK', 'VA-G5DLK'],
    descriptor: 'residential and commercial linear lead-screw swing gate operator with separate control unit',
    gateType: 'swing',
    duty: 'commercial',
    status: 'current',
    statusNote: 'Listed on vikingaccess.com as a current swing operator; the G-5NX manual revision H1 is dated April 2026.',

    title: 'Viking G-5 Gate Operator Repair | Dallas–Fort Worth',
    metaDescription:
      'Viking G-5 linear swing arm stalling, overshooting or one leaf dead? Shield Gate Repair fixes G-5 arms and ECUs across Dallas–Fort Worth. Open 24/7.',
    h1: 'Viking G-5 Repair in Dallas–Fort Worth',
    heroIntro:
      'Shield Gate Repair repairs the Viking G-5, the screw-drive linear swing operator with a separate control box, rated up to 2,000 lb on a 10 ft leaf or 800 lb at 18 ft. When a G-5 leaf stops short or one side of a pair won’t move, we trace it through the lead screw, its limit switches, the motor cable and the ECU before replacing anything.',
    heroPoints: [
      'We decode dual-gate G-5 errors like ERR FUSE 15A S, which points to the secondary side’s motor fuse, not the primary.',
      'We check the lead screw, carrier and positive stop collar under the cover, where the G-5 keeps its limits.',
      'We test the arm-to-ECU motor cable against Viking’s gauge chart; runs beyond 120 ft are not recommended.',
    ],

    identify: {
      body: [
        'The G-5 is a linear actuator. Instead of a pad-mounted box turning an arm, it is a long operator bolted between a bracket on the column or post and a bracket on the gate, and it pushes or pulls the leaf with a motor-driven lead screw. There are no control electronics in the arm itself.',
        'Everything electronic lives in a separate Electronic Control Unit (ECU) mounted on a wall or post nearby — about 40 lb, in a standard or an optional larger “Big Box” enclosure, or a solar ECU. Dual-gate systems add a Secondary Module board inside the same ECU. The arm alone is sold as VA-G5NX; single and dual kits are VA-G5SLK and VA-G5DLK.',
      ],
      lookFor: [
        'A long arm-style operator between the post and the gate, with a lead screw cover and end cap',
        'A top cover opened with a key or thumb screw, over a Manual Release Switch',
        'A separate ECU box nearby holding the LCD, batteries and boards',
        'On pairs, a Secondary Module board beside the primary V-Flex board in the ECU',
        'Labels or paperwork reading VA-G5NX, VA-G5SLK or VA-G5DLK',
      ],
    },

    overview: [
      {
        heading: 'Lead screw drive with mechanical limits',
        body: [
          'A 24 V DC motor turns a lead screw; a carrier rides along the screw and connects to the front mounting bracket on the gate. Two dust brushes seal the slot in the lead screw cover. Viking lists the G-5 for up to 135° of opening, 15–18 seconds per 90° with speed adjustment, and 100% duty.',
          'Limits are two switches on a limit mounting bar under that cover. They are set by loosening the switch holders and sliding them until each clicks at the right gate position, with the gate released. A positive stop collar then goes just past the close limit switch, 1/8 inch from its holder, so the carrier lands firmly against it. The limit buttons on the board are inactive for this operator.',
        ],
      },
      {
        heading: 'The ECU and the secondary module',
        body: [
          'The standard ECU holds the primary V-Flex board, the EMI surge board, a 10 A toroidal transformer, the batteries, an alarm reset switch and an antenna kit. In a dual system, a Secondary Module drives the second arm through its own motor connector, its own 15 A motor fuse, its own status LEDs and its own Fail Safe/Secure jumper, linked to the primary by a comm cable.',
          'That split matters for diagnosis. A pair where only one leaf fails is very often a secondary-side fuse, harness or comm cable rather than a failed arm. An overlap delay on the primary staggers the two leaves so overlapping gates close in the right order.',
        ],
      },
      {
        heading: 'Motor cable length and gauge',
        body: [
          'Because the ECU can sit away from the gate, the motor cable is part of the machine. Viking’s chart calls for 16 AWG up to 40 ft, 14 AWG to 60 ft, 12 AWG to 80 ft and 10 AWG to 120 ft, and does not recommend runs beyond 120 ft. The cable must be shielded, with its drain wire grounded at the chassis of both the operator and the ECU.',
          'An undersized, spliced or damaged cable drops voltage on the way to the motor. The arm then moves slowly and the board sees overload that has nothing to do with the gate.',
        ],
      },
      {
        heading: 'Ratings and where the G-5 fits',
        body: [
          'Viking rates the G-5 for 2,000 lb on a 10 ft leaf, falling to 800 lb at 18 ft, and lists it for UL 325 Classes I through IV — short, heavy leaves rather than long light ones. Backup is listed at up to 400 continuous cycles.',
          'Viking also describes a break-away joint, an adjustable positive stop and a field-service-repairable design. A post mount kit (VA-G5PSKT) fits 3-1/2 inch round and 4 or 6 inch square posts when welding brackets to a column is not an option.',
        ],
      },
    ],

    specs: [
      { label: 'Application', value: 'Residential and commercial vehicular swing gates' },
      { label: 'UL 325 classification', value: 'Class I, II, III and IV' },
      { label: 'Maximum gate', value: '2,000 lb at 10 ft, or 800 lb at 18 ft' },
      { label: 'Drive', value: '24 VDC motor and lead screw; listed as DC motor equivalent to 1/2 HP AC' },
      { label: 'Speed / opening', value: '15–18 seconds per 90° (adjustable); opening up to 135°' },
      { label: 'Duty cycle', value: '100% continuous' },
      { label: 'Main power', value: '120/240 VAC single phase; 1.5 A / 1.0 A per motor; 4.0 A timed main fuse' },
      { label: 'Idle consumption', value: '70 mA single / 125 mA dual' },
      { label: 'Battery backup', value: 'Up to 400 continuous cycles' },
      { label: 'Controller', value: 'V-Flex board (VFLEXPCBU18) in a separate ECU; VFLEXSMU18 secondary module on dual systems' },
      { label: 'Limits', value: 'Two mechanical limit switches with a close-limit positive stop collar' },
      { label: 'Motor cable', value: '16 AWG to 40 ft, 14 AWG to 60 ft, 12 AWG to 80 ft, 10 AWG to 120 ft; shielded' },
      { label: 'Surge protection', value: 'Up to 20,000 V / 10,000 A' },
      { label: 'Operating temperature', value: '−20°F to 160°F' },
    ],

    symptoms: [
      {
        symptom: 'One gate of the pair works; the other doesn’t move.',
        causes:
          'On a dual G-5 the second leaf runs from the Secondary Module. ERR FUSE 15A S means the secondary module’s own motor fuse has blown. A disconnected secondary motor harness or primary/secondary comm cable, or the second arm left in RELEASE, gives the same picture.',
        whatWeDo:
          'We read the secondary module’s status LEDs and the error list, check its fuse, harness and comm cable, and confirm the release switch on that arm before touching the actuator.',
      },
      {
        symptom: 'The gate overshoots or bangs at the closed position.',
        causes:
          'The close limit switch holder has slid on the mounting bar, the positive stop collar has moved or loosened, or the carrier is no longer reaching the collar because a post or bracket has shifted.',
        whatWeDo:
          'With the cover off and the gate released, we reposition the switches, reset the collar to Viking’s 1/8 inch gap and tighten it evenly, then run two cycles to confirm the carrier lands firmly against it.',
      },
      {
        symptom: 'Check Motor comes up right as the gate starts or stops.',
        causes:
          'An open motor circuit, the Manual Release Switch left on RELEASE, or a damaged motor cable. Viking notes this error can also come from gate inertia, which a heavy leaf at the short end of the G-5’s range has plenty of.',
        whatWeDo:
          'We check the release switch and measure the motor circuit through the cable, then look at speed and leaf weight if the wiring is sound.',
      },
      {
        symptom: 'The arm moves slowly and the gate stalls on a long wire run.',
        causes:
          'Motor cable too light for its length under Viking’s chart, a buried splice, a cable nicked by later digging, or weak batteries and charging. A reading of motor voltage well below normal while running points to the cable.',
        whatWeDo:
          'We compare the installed gauge and length against the chart, measure motor voltage at the ECU and at the arm, and replace the run with shielded cable of the right gauge where it falls short.',
      },
      {
        symptom: 'ERRLIMIT OPN+CLS on the ECU display.',
        causes:
          'Viking’s meaning is a problem with the limit switches or their wires: both circuits reading at once, a switch that has failed, or a limit conductor in the motor cable damaged.',
        whatWeDo:
          'We test each switch at the arm and each conductor back to the ECU, repair or replace the faulty piece, and re-check the positive stop collar setting afterward.',
      },
      {
        symptom: 'The arm sounds gritty or the gate shudders mid-stroke.',
        causes:
          'Dirt past worn dust brushes on the lead screw cover, a misplaced end cap, a dry front bracket pivot, or brackets working loose from their backing plates or tack welds.',
        whatWeDo:
          'We remove the lead screw cover, inspect the screw and carrier, lubricate the front bracket pivot, replace brushes or the end cap as needed, and re-secure the brackets.',
      },
      {
        symptom: 'An ERR EMI message after a storm, and nothing works.',
        causes:
          'On the G-5 the EMI board sits in the ECU. ERR EMI NO FUSE is its 4 A main fuse; ERR EMI PROTECT means its lightning protection has been damaged; ERR EMI NO AC means no mains reaching it.',
        whatWeDo:
          'We check incoming voltage, the voltage selector and the EMI fuse, replace the EMI board if its protection is spent, and check the grounding of the motor cable drain wire at both ends.',
      },
    ],

    components: [
      {
        part: 'Lead screw, coupler and carrier',
        whatItDoes: 'Converts motor rotation into the push or pull that swings the leaf.',
        failureSigns: 'Grinding, uneven speed, carrier play, visible wear on the screw.',
        verdict: 'replace-part',
      },
      {
        part: 'Limit switches, mounting bar and positive stop collar',
        whatItDoes: 'Set the open and close positions and give the close a hard stop.',
        failureSigns: 'Overshoot, slam at close, ERRLIMIT OPN+CLS.',
        verdict: 'adjust',
      },
      {
        part: '24 V DC motor and casing',
        whatItDoes: 'Drives the lead screw.',
        failureSigns: 'Check Motor error, no movement with voltage present, water in the casing.',
        verdict: 'replace-part',
      },
      {
        part: 'Manual Release Switch and cover lock',
        whatItDoes: 'Disengages the drive for hand operation; the key or thumb screw secures access.',
        failureSigns: 'Gate won’t run (left on RELEASE), lost key, seized cylinder.',
        verdict: 'adjust',
      },
      {
        part: 'ECU primary board and EMI board',
        whatItDoes: 'Control logic, charging, LCD diagnostics and surge protection.',
        failureSigns: 'ERR EMI messages, dead display, charging errors.',
        verdict: 'replace-part',
      },
      {
        part: 'Secondary module (dual systems)',
        whatItDoes: 'Drives and monitors the second arm.',
        failureSigns: 'One leaf dead, ERR FUSE 15A S, secondary status LEDs out.',
        verdict: 'replace-part',
      },
      {
        part: 'Motor cable, strain reliefs and mounting brackets',
        whatItDoes: 'Carry power and limit signals to the arm and hold it in geometry.',
        failureSigns: 'Slow travel on long runs, intermittent limits, loose brackets.',
        verdict: 'repair',
      },
    ],

    repairOrReplace: {
      summary:
        'The G-5 is built for field service. Viking lists the arm’s lead screw, carrier, positive stop, limit switches, motor casing and motor as separate parts, and the ECU’s boards, EMI board, transformer and batteries separately again. Most G-5 faults are adjustment, a fuse, a cable or one component, and because the actuator is sold on its own, even a worn-out arm on a pair does not mean replacing the ECU or the other arm.',
      repair: [
        'Limit and positive stop adjustment, or a failed limit switch.',
        'Blown primary or secondary motor fuses and damaged motor cable.',
        'A spent EMI board, batteries or a single V-Flex board.',
        'Bracket, pivot and dust brush wear.',
      ],
      replace: [
        'The leaf falls outside Viking’s weight-and-length chart — 18 ft at 800 lb, 10 ft at 2,000 lb — and a pad-mounted swing operator or a slide design suits the gate better.',
        'The lead screw and motor are both worn and the arm is corroded, where a new VA-G5NX actuator is more sensible than rebuilding it.',
        'The ECU has been flooded, damaging several boards at once.',
      ],
    },

    warranty: {
      manufacturer:
        'Under Viking’s published policy (FAAC International, Inc.), gate operators carry 3 years and Viking pad-mount gate operators carry 5 years from the invoice date. Boards and parts installed at the factory share the product’s term; batteries top out at 2 years.',
      notes: [
        'Excluded causes include lightning, power surge, flood, hail, wind storm and improper installation — undersized motor cable would fall under installation.',
        'Motor brushes and similar maintenance parts are not covered.',
        'Viking warrants its wholesale customers only; homeowners and property managers claim through the selling dealer.',
        'A factory repair outside warranty carries 90 days on the parts used.',
      ],
    },

    dfw: [
      {
        heading: 'Long cable runs through moving ground',
        body: [
          'A G-5’s motor cable often runs underground from the gate to an ECU on a wall or post. Expansive clay moves that conduit, landscaping and fence work dig near it, and a long conductor picks up more energy from a nearby lightning strike. Viking’s requirement that the shield drain wire be grounded at both the arm and the ECU is worth checking on any G-5 that has seen a storm.',
        ],
      },
      {
        heading: 'Sun, dust and the lead screw',
        body: [
          'Dry, windy stretches of a Texas summer carry dust toward the lead screw cover, and the dust brushes along its slot wear with sun and age. Heat also works on the batteries inside the ECU. Where there is a choice, an ECU mounted out of afternoon sun and a lead screw inspection in spring pay off.',
        ],
      },
      {
        heading: 'Heavy short leaves and shifting posts',
        body: [
          'The G-5’s strength is short, heavy leaves — 2,000 lb at 10 ft. That weight hangs on hinge posts set in soil that swells and shrinks. When a post leans, the distance between the rear and front brackets changes, the carrier stops meeting its positive stop where it should, and the limits need resetting — sometimes more than once a year on unstable ground.',
        ],
      },
    ],

    process: [
      {
        step: 'Start at the ECU display',
        body: 'Primary and secondary status LEDs, then the error list on the LCD, so we know whether the fault is on one side of a pair or both.',
      },
      {
        step: 'Release each arm and move the leaves',
        body: 'Top cover off, Manual Release Switch to RELEASE, and each leaf moved through its full arc to check hinges, brackets, pivots and the carrier.',
      },
      {
        step: 'Check the cable run',
        body: 'Gauge and length against Viking’s chart, voltage at both ends, drain wire grounding and the strain reliefs at the arm and ECU.',
      },
      {
        step: 'Inspect limits and the lead screw',
        body: 'Lead screw cover off, switch positions, the 1/8 inch positive stop gap, dust brushes and end cap.',
      },
      {
        step: 'Quote, repair and prove it',
        body: 'You approve the price first. After repair we run two full cycles to confirm the positive stop, check overlap timing on pairs and verify every monitored sensor reverses the gate.',
      },
    ],

    faqs: [
      {
        q: 'How do I release a Viking G-5 to open the gate by hand?',
        a: 'Unlock and remove the top cover with its key or the optional thumb screw, then press the Manual Release Switch to RELEASE. Press it back to ENGAGE when you are done, or the arm will not run.',
      },
      {
        q: 'Where is the control board on a G-5?',
        a: 'Not in the arm. The V-Flex board, EMI board and batteries are in the separate ECU box mounted on a nearby wall or post. On a dual system the second leaf’s Secondary Module is in the same box.',
      },
      {
        q: 'What does ERR FUSE 15A S mean?',
        a: 'The 15 A motor fuse on the Secondary Module has blown, so the second leaf of a pair has lost motor power. ERR FUSE 15 AMP without the S is the primary side.',
      },
      {
        q: 'Can one G-5 arm be replaced on a dual gate?',
        a: 'The actuator is sold on its own as VA-G5NX, so a single worn arm can normally be replaced without the ECU or the other arm. We confirm compatibility with your ECU before ordering.',
      },
      {
        q: 'How far can the G-5 control box be from the gate?',
        a: 'Viking’s chart allows up to 120 ft with 10 AWG shielded cable, less with lighter wire, and does not recommend longer runs.',
      },
      {
        q: 'Is the G-5 a hydraulic ram?',
        a: 'No. It looks like a ram, but it is an electromechanical actuator — a 24 V DC motor turning a lead screw. There is no fluid, and no pump or seals to service.',
      },
    ],

    relatedModels: ['viking/t-21-repair', 'viking/r-6-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'commercial-gate-repair', 'electric-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Viking Access Systems — G-5 Swing Gate Operator product page', url: 'https://www.vikingaccess.com/g5-swing-gate-operator' },
      { label: 'Viking G-5NX installation instructions, Rev H1, April 2026 (PDF)', url: 'https://www.vikingaccess.com/_files/ugd/fd6890_3eddd0926d4e4332899020360a6ad4df.pdf' },
      { label: 'Viking swing gate operator lineup and ratings', url: 'https://www.vikingaccess.com/all-swing-gate-operators' },
      { label: 'Viking / FAAC International limited warranty policy (PDF)', url: WARRANTY_POLICY_URL },
      { label: 'Performance Gate Openers — Viking G-5 actuator VA-G5NX listing', url: 'https://performancegateopeners.com/store/viking-access-g-5-residential-and-commercial-swing-gate-opener-actuator-only-va-g5nx.html' },
      { label: 'All Security Equipment — Viking G5 dual kit VA-G5DLK listing', url: 'https://allsecurityequipment.com/products/viking-va-g5dlk' },
    ],
    toConfirm: [
      'Which warranty tier Viking applies to the G-5 (not a pad-mount unit, so presumably the 3-year “Gate Operators” line).',
      'Whether a current VA-G5NX actuator is compatible with older G-5 ECUs (earlier-generation kits were sold as “2nd Gen”).',
      'Intermediate points on the G-5 weight/length chart (manual chart did not extract cleanly; only 2,000 lb/10 ft and 800 lb/18 ft are stated).',
      'G-5 battery amp-hour rating (ECU parts list gives DUBB12 only).',
      'Viking’s push-to-open installation option and its limit differences (only pull-to-open was reviewed).',
    ],
    indexable: true,
  },
]
