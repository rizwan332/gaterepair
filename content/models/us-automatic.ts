/**
 * US Automatic (USAutomatic, LLC — Lewisville, Texas) model pages.
 *
 * Researched Sept 2026 from USAutomatic's own installation/owner's manuals
 * (2023 rev. A Patriot and Ranger HD manuals, Ranger 500 manual for board
 * 500028, 2020 rev. A Patriot RSL manual, and the older 2008 Ranger and
 * 2017 Ranger I/II manuals) plus USAutomatic's support knowledge base, which
 * maps control-board part numbers to serial-number prefixes. usautomatic.com
 * and content.usautomatic.com refuse automated requests, so several manuals
 * were read from distributor-hosted copies; both URLs are recorded.
 *
 * POWER — the correction that matters for the rest of the site: every
 * operator here is a 12 V DC battery operator. "AC" models are AC-CHARGED —
 * a low-voltage DC adapter (PN 520009) refills the same battery a solar
 * panel would, through the same battery controller. None runs its motor
 * from mains power.
 *
 * Pages: Patriot (I/II swing), Ranger (Ranger 500 + Ranger HD, and the older
 * Ranger / Ranger I / Ranger II), Patriot RSL (slide). Sentry 300 skipped —
 * see the handover report.
 */

import type { ModelPage } from './types'

const KB_PATRIOT = 'https://support.usautomatic.com/portal/en/kb/articles/patriot-gate-opener-manuals'
const KB_RANGER_HD = 'https://support.usautomatic.com/portal/en/kb/articles/ranger-hd-gate-opener-manuals'
const KB_RANGER_500 = 'https://support.usautomatic.com/portal/en/kb/articles/ranger-500-gate-opener-manuals'
const KB_RSL = 'https://support.usautomatic.com/portal/en/kb/articles/patriot-rsl-gate-opener-manuals'

// ─────────────────────────────────────────────────────────────────────────────
// PATRIOT (Patriot I single / Patriot II dual swing)
// ─────────────────────────────────────────────────────────────────────────────

const patriot: ModelPage = {
  slug: 'patriot-repair',
  brandSlug: 'us-automatic',
  model: 'Patriot',
  aliases: [
    'Patriot I',
    'Patriot II',
    'Patriot 1',
    'Patriot 2',
    '020015 (Patriot I AC-charged kit)',
    '020035 (Patriot I solar-charged kit)',
    '020055 (Patriot II AC-charged kit)',
    '020075 (Patriot II solar-charged kit)',
  ],
  descriptor: 'battery-powered 12V DC linear-actuator swing gate operator, AC-charged or solar-charged',
  gateType: 'swing',
  duty: 'residential-light-commercial',
  status: 'current',
  statusNote:
    'Current. USAutomatic lists control board 500018 as the current Patriot release, sold as the Patriot I (single leaf) and Patriot II (dual leaf) in AC-charged and solar-charged kits. Earlier Patriots used boards 500001, 500002, 500003 and 500016.',

  title: 'US Automatic Patriot Repair | Dallas–Fort Worth',
  metaDescription:
    'US Automatic Patriot I or II gate slowing, stopping short or beeping? We test the battery, charger and actuator limits across Dallas–Fort Worth. Call 24/7.',
  h1: 'US Automatic Patriot Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair US Automatic Patriot I and Patriot II swing gate operators across Dallas–Fort Worth, AC-charged and solar-charged. When a Patriot slows down or stops short, USAutomatic’s own service guidance points at the battery first — so that is where we start, before anyone condemns the actuator.',
  heroPoints: [
    'We read the Patriot board’s battery status LED and load test the Group U-1 battery before touching the actuator.',
    'We set extend and retract limits under the Patriot actuator’s dust plug by hand — USAutomatic warns against a power screwdriver there.',
    'We identify your board revision (500018, 500016, 500003, 500002 or 500001) from its serial so settings come from the right manual.',
  ],

  identify: {
    body: [
      'Every Patriot is a 12-volt battery-powered swing operator: a linear actuator on each gate leaf, wired back to a control box holding the battery, a battery controller and the Patriot control board. A Patriot I drives one leaf. A Patriot II drives two from the same board, with the actuator on the farther leaf plugged into Gate 2 through a 40-foot extension cable.',
      'The surest confirmation is inside the box. USAutomatic prints the serial number on the control board, and a current board reads 500018 near the USAutomatic name; serials starting RP belong to it. Older boards are told apart by serial: 9 plus four digits, 1 to 5 plus five digits, or 6 plus six digits means 500001; 7 plus six digits means 500002; 8 or 9 plus six digits means 500016; B plus four digits means 500003.',
      'That detail is not pedantry. USAutomatic publishes a separate manual for each Patriot board revision because the dip switches and features changed between them, and setting an older board from the current manual is an easy way to create a fault that was not there before.',
    ],
    lookFor: [
      'An actuator arm with a stainless steel extension tube sliding out of a black cover tube',
      'A removable dust plug on the underside of the actuator covering two limit adjustment slots',
      'A manual release pin, secured with a clip or small padlock, where the arm meets the gate bracket',
      'Inside the box: two sensitivity dials at the upper left of the board, a timer-to-close dial, and dip switch banks marked DS1, DS2 and DS4',
      'Two 15-amp fuses on the board, one for the Gate 1 plug and one for Gate 2',
      'On recent units, a battery controller with a small LCD voltage display, fed by a DC adapter plug or a solar panel lead',
    ],
  },

  overview: [
    {
      heading: 'A battery operator, however it is charged',
      body: [
        'The Patriot never drives its motors from the mains. Both versions move the gate from a 12-volt battery — USAutomatic specifies a sealed, maintenance-free Group U-1 battery of at least 30 amp hours and warns that a smaller one can damage the charging system. The only difference between an “AC” Patriot and a “solar” Patriot is what refills that battery: a DC adapter plugged into a 120-volt outlet, or a panel on a bracket.',
        'Two consequences follow. An AC-charged Patriot has every battery fault a solar one has; a worn battery slows it just as surely. And switching between the two is a change of charge source at the battery controller, not a new operator, because the adapter and the panel plug into the same controller input.',
        'USAutomatic rates the AC-charged Patriot at 575 cycles a day without drawing the battery down, and says it will keep running for weeks on battery alone in a power cut if it is doing fewer than 20 cycles a day.',
      ],
    },
    {
      heading: 'The limits live inside the actuator',
      body: [
        'On a Patriot the open and closed stop positions are set by a limit assembly inside the linear actuator, not by dials on the board. The extend and retract adjusters sit behind a dust plug on the underside of the arm and turn with a flat-blade screwdriver; clockwise lengthens travel in either direction. The manual specifically warns that a battery-powered screwdriver can damage the limit assembly.',
        'The limit wires follow a color code — white for extend, orange for retract, green common — and holding the board’s LED indicator button shows whether each limit is registering. If both stop positions wander randomly, USAutomatic’s fix is mechanical: remove the rear actuator housing, loosen the limit assembly, close up the gap between the small white gear and the blue gear, and reset both limits.',
        'This is the clearest mechanical difference from the Ranger 500 and Ranger HD, which hold their stop positions in dials on the control board and have nothing to adjust in the arm.',
      ],
    },
    {
      heading: 'How the Patriot board decides to stop',
      body: [
        'Obstruction sensing is current-based. Two sensitivity dials, one per gate, set how much current the board lets each motor draw, and the circuit ignores the first second of travel. USAutomatic calls 4 to 7 a typical setting and says that needing more than 8 without an obvious cause means the gate, hinges or actuator should be checked.',
        'On a first obstruction the gate reverses — for about two seconds if it was opening, all the way open if it was closing — and waits for a new command. A second obstruction before the limit stops the gate and sounds the entrapment siren for five minutes or until reset is pressed. Owners often take that for a dead board; usually it is the board doing its job because the gate has become hard to move.',
        'The board also runs adaptive PWM soft start and stop, set on DS4 switches 1–3 from 0 (fastest) to 7 (slowest), with 4 from the factory. The manual cautions that a very slow setting can stall the motor.',
      ],
    },
    {
      heading: 'The low-battery warnings a Patriot gives',
      body: [
        'The 500018 board has its own battery status LED, read while holding the LED indicator button. Solid red means the battery is holding up; flashing red means it fell below 10.5 volts during a cycle; off means it dropped below 10 volts. Three quick siren beeps, a five-second pause, repeated for a minute, is the audible version of the 10.5-volt warning.',
        'Below 10 volts mid-cycle, the board parks the gate where DS1 switch 5 tells it: closed with the switch on, open with it off. On a ranch entrance that is a decision worth making deliberately — shut closed keeps livestock in, shut open keeps the drive passable. Holding the S4 battery reset button for seven seconds restarts a gate that has shut down, and USAutomatic’s instruction is that if the gate then runs, the battery should go for a load test rather than back into service on trust.',
      ],
    },
  ],

  specs: [
    { label: 'Versions', value: 'Patriot I (single leaf), Patriot II (dual leaf); AC-charged or solar-charged kits' },
    { label: 'Maximum gate — ornamental iron, ranch, chain link', value: '16 ft long, 800 lb (USAutomatic manual)' },
    { label: 'Maximum gate — farm gate', value: '20 ft long, 250 lb (USAutomatic manual)' },
    { label: 'Operating power', value: '12 V DC battery; charged by 120 V DC adapter (PN 520009) or solar panel' },
    { label: 'Battery', value: '12 V, Group U-1, sealed maintenance-free, 30 Ah minimum (not included)' },
    { label: 'Standard solar kit', value: '10 W panel, PN 520026 (20 W panel PN 520030 offered as an accessory)' },
    { label: 'Solar cycles per day, 10 W kit (manual zones 1 / 2 / 3)', value: 'Patriot I: 35 / 55 / 95. Patriot II: 18 / 28 / 48' },
    { label: 'AC-charged capacity', value: 'Up to 575 cycles per day (USAutomatic manual)' },
    { label: 'Open or close time', value: 'Approximately 12 seconds (USAutomatic periodic service guidance)' },
    { label: 'Actuator stroke / thrust', value: '24 in stroke, 500 lb dynamic thrust (distributor listings)' },
    { label: 'Current control board', value: 'Patriot board 500018; 15 A fuse per gate output' },
    { label: 'Timer to close', value: 'Approximately 2 to 150 seconds' },
    { label: 'UL 325', value: 'Manual covers Class I–IV installation; monitored entrapment device required' },
  ],

  symptoms: [
    {
      symptom: 'The gate has got slower over a few weeks and now stops before it is fully open',
      causes:
        'USAutomatic ties a lengthening cycle — normal is about 12 seconds — to the battery. A tired Group U-1 battery sags under actuator load; once it dips under 10.5 volts during travel the battery LED starts flashing and the arm may current-trip before the limit. Stiff hinges or a sagging leaf make it worse.',
      whatWeDo:
        'Read the battery status LED and the controller’s voltage, load test the battery, then find out what drained it: the charge source, an always-on accessory, or a gate that has become hard to push.',
    },
    {
      symptom: 'The control box beeps three times, pauses, and does it again',
      causes:
        'That is the Patriot board’s low-battery notification — the battery fell below 10.5 volts during a gate cycle. The gate may still work for a while, which is why it gets ignored.',
      whatWeDo:
        'Remove and load test the battery, then prove the charging side: DC adapter output on an AC unit, panel angle, shade and cleanliness on a solar one.',
    },
    {
      symptom: 'It hit something, reversed, and now a siren will not stop',
      causes:
        'Two current-sense trips before reaching a limit. Either something was genuinely in the way, the sensitivity dial is too low for this gate, or the leaf is dragging — sag, dry hinges, or a hinge post that has moved.',
      whatWeDo:
        'Pull the release pin and swing the leaf by hand to feel for binding before touching the dial. We correct the gate first, then set sensitivity in the manufacturer’s typical 4–7 range and retest reversal.',
    },
    {
      symptom: 'The gate stops in a slightly different place every time',
      causes:
        'When both stop positions drift at random on a Patriot, the manufacturer points to the limit assembly inside the actuator: the spacing between its small white gear and blue gear has opened up.',
      whatWeDo:
        'Open the rear actuator housing, reset the limit assembly gear spacing per USAutomatic’s procedure, refit it and set the extend and retract limits by hand.',
    },
    {
      symptom: 'One leaf of my Patriot II works and the other does nothing',
      causes:
        'Each leaf has its own board plug, its own 15-amp fuse and its own DS1 enable switch, and the far leaf runs on a 40-foot extension cable with outdoor splices. Any one of those takes out a single gate.',
      whatWeDo:
        'Check that gate’s fuse and enable switch, run the actuator directly, then open the splice box and inspect the extension cable for water, corrosion or damage.',
    },
    {
      symptom: 'The gate shut down part-open (or closed) and ignores the remote',
      causes:
        'The battery fell below 10 volts mid-cycle and the board parked the gate in the position set on DS1 switch 5. With the LED indicator held, the battery status LED will be dark.',
      whatWeDo:
        'Confirm on the LED, hold the battery reset for seven seconds, and if the gate runs, load test the battery and trace the cause so it does not shut down again next week.',
    },
    {
      symptom: 'My dual gates clash when closing, or the gate lock will not release',
      causes:
        'Overlapping Patriot II leaves and electric locks need the gate delay (DS2 switch 1), which opens Gate 2 two seconds after Gate 1 and closes it two seconds before. If the actuator plugs are swapped, the wrong leaf leads.',
      whatWeDo:
        'Confirm which leaf is on Gate 1, enable the delay and lock output, and cycle both leaves to verify the sequence.',
    },
    {
      symptom: 'The gate died right after someone welded on it',
      causes:
        'USAutomatic warns that welding with the actuator cable plugged into the board or the battery connected can seriously damage both.',
      whatWeDo:
        'Test the battery, fuses and board outputs, replace what was damaged, and set the dip switches from the manual that matches the board.',
    },
  ],

  components: [
    {
      part: 'Patriot linear actuator (PN 510001)',
      whatItDoes: 'Pushes or pulls the leaf through its swing; houses the motor, gearbox and limit assembly.',
      failureSigns: 'Motor running with no tube movement, grinding, water inside, or a cracked seal where the stainless tube leaves the cover tube.',
      verdict: 'replace-part',
    },
    {
      part: 'Actuator limit assembly',
      whatItDoes: 'Sets the extend and retract stop positions through the adjusters under the dust plug.',
      failureSigns: 'Gate overruns or stops short, stops drift from cycle to cycle, or the limit LEDs do not light at the stop.',
      verdict: 'adjust',
    },
    {
      part: 'Patriot control board (500018 or earlier revision)',
      whatItDoes: 'Runs both gates, current sensing, soft start and stop, timer to close, monitored safety inputs and lock outputs.',
      failureSigns: 'No response with a proven battery, one dead gate output with a good fuse and actuator, or damage after a surge or welding.',
      verdict: 'replace-part',
    },
    {
      part: '12 V Group U-1 battery',
      whatItDoes: 'Supplies every cycle; the charger only refills it.',
      failureSigns: 'Flashing or dark battery status LED, low-battery beeps, cycle time stretching past about 12 seconds.',
      verdict: 'replace-part',
    },
    {
      part: 'Battery controller',
      whatItDoes: 'Charges the battery from the DC adapter or panel; the current version shows voltage and charge current and cuts off below 10.8 V.',
      failureSigns: 'Blank display, E11, E12 or E13 on screen, or no charging symbol while the panel is in full sun.',
      verdict: 'replace-part',
    },
    {
      part: 'DC adapter (PN 520009) or 10 W solar panel (PN 520026)',
      whatItDoes: 'Refills the battery from a 120 V outlet or from sunlight.',
      failureSigns: 'Adapter exposed to moisture (it is not designed to get wet), panel shaded, dirty, knocked off its south-to-southwest aim, or hail-damaged.',
      verdict: 'service',
    },
    {
      part: 'Actuator mounts and manual release pin',
      whatItDoes: 'Anchor the arm to the hinge post and gate; the pin disconnects the arm for hand operation.',
      failureSigns: 'Loose bolt-on brackets (USAutomatic says they need frequent tightening), cracked welds, elongated holes, a seized pin.',
      verdict: 'repair',
    },
    {
      part: 'Monitored photo eyes and entrapment siren',
      whatItDoes: 'Photo eyes on J2 pins 4 and 8 protect each direction; the siren flags repeated obstructions and low battery.',
      failureSigns: 'Gate refuses to close, reverses for no visible reason, or eyes that seem dead because power management only powers them while the gate moves.',
      verdict: 'adjust',
    },
  ],

  repairOrReplace: {
    summary:
      'A Patriot is built to be repaired. The actuator, its limit assembly, the board, the battery controller and the charge source are separate parts with published part numbers, and most failures are one of them — very often the battery. Replacing the whole operator is the right call less often than people expect: mainly when the gate is beyond what a Patriot is rated for, or when an old installation has several major parts failing at once.',
    repair: [
      'Slow travel, low-battery beeps, or a shutdown with the battery LED dark — a battery and charge-source repair.',
      'Stop positions that wander — a limit assembly adjustment inside the actuator.',
      'One dead leaf on a Patriot II — a fuse, a splice, an enable switch or a single actuator.',
      'Constant reversing — usually hinges, sag or a moved post, then a sensitivity reset.',
      'Board damage from a surge or welding — a replacement board set up from the matching manual.',
    ],
    replace: [
      'The gate is heavier or longer than the Patriot’s rating (16 ft and 800 lb for iron, ranch or chain link; 20 ft and 250 lb for a farm gate). Repairs will not stop an overloaded operator tripping and wearing; the answer is a different operator or a lighter gate.',
      'A solar entrance needs more daily cycles than the manual’s table allows — especially a Patriot II. The upgrade is a larger panel or switching to AC charging, not a new operator.',
      'An older unit with both a water-damaged actuator and a failed early-revision board. We price the repair and the replacement side by side before you decide.',
    ],
  },

  warranty: {
    manufacturer:
      'USAutomatic’s published warranty, from date of manufacture: operators free from defects in materials for 3 years; current-design Patriot and Patriot RSL control boards 5 years; previous-version control boards 1 year; accessories 1 year. Battery replacement is not covered.',
    notes: [
      'Coverage runs from the date of manufacture, not installation — the serial number on the control board is what USAutomatic will ask for.',
      'Field labor and trip charges are excluded. Covered products are repaired or replaced at USAutomatic’s discretion, with parts, shop labor and return shipping inside the contiguous United States.',
      'Exclusions listed in the manual include abuse, alteration, incorrect installation, battery acid damage, weather and acts of God, and lack of maintenance.',
      'Returns need a Return Authorization number from USAutomatic support, along with model, serial, purchase date and seller.',
    ],
  },

  dfw: [
    {
      heading: 'Summer heat in the control box',
      body: [
        'A Patriot’s battery sits in a control box on or beside the gate post, often in full afternoon sun, and heat is what shortens sealed lead-acid life. A Patriot that has run well for years can start flashing its battery LED in August. USAutomatic’s routine checks — terminals for corrosion, controller reading above 12 volts, box clean and free of insects — are worth doing before summer rather than after the gate stops. Fire ants readily move into gate boxes here; the manual specifically says not to spray the control board with bug spray or oil-based products.',
      ],
    },
    {
      heading: 'Clay soil and the hinge post',
      body: [
        'A Patriot arm pushes against its hinge post every cycle, so the post has to stay put. North Texas clay shrinks in drought and swells after rain, and a post that leans even slightly changes the actuator geometry, drags the leaf and raises current draw toward the sensitivity trip. The manual lists checking that the hinge post is not moving or twisting as periodic service; around Dallas–Fort Worth it is a seasonal check.',
      ],
    },
    {
      heading: 'Spring storms, surges and hail',
      body: [
        'USAutomatic notes that solar charging isolates a Patriot from lightning that arrives through the AC supply, and recommends a surge protector on every AC-charged installation. On open acreage in Denton, Parker, Wise or Collin county that advice earns its keep during spring thunderstorms. Hail is the solar-side risk: a cracked panel can look intact from the driveway and still stop charging.',
      ],
    },
    {
      heading: 'Low winter sun on a 10-watt panel',
      body: [
        'The Patriot’s solar cycle figures assume unshaded sun, and the manual says even a fingertip shadow stops the panel charging. In December the sun sits low, so a tree line or barn that never touched the panel in June can shade it for hours. A Patriot II, rated for roughly half the solar cycles of a Patriot I, runs short first.',
      ],
    },
  ],

  process: [
    {
      step: 'Release the arm and move the gate by hand',
      body: 'We switch DS1 switches 3 and 4 off as USAutomatic instructs, pull the manual release pin and swing each leaf through its arc. A leaf that binds, drops or has to be lifted is found before any electrical testing.',
    },
    {
      step: 'Read the board and battery controller',
      body: 'Holding the LED indicator shows battery status, limit lights and active inputs. We note the controller voltage and any E-code, and record the board part number and serial so we work from the right manual.',
    },
    {
      step: 'Load test the battery and prove the charge source',
      body: 'The battery comes out for a load test. The DC adapter output or the panel’s aim, shade and condition are checked against what the controller reports.',
    },
    {
      step: 'Test each actuator and its limits',
      body: 'Gate 1 and Gate 2 run separately. We confirm each limit LED lights at its stop, inspect the cover-tube seal and extension cable splices, and adjust the limits by hand.',
    },
    {
      step: 'Set sensitivity and verify the safety devices',
      body: 'With the gate moving freely, we set current sensitivity, test reversal with the dial no higher than 5 as the manual specifies, and check monitored photo eyes and edges.',
    },
    {
      step: 'Quote before any parts go in',
      body: 'You get the diagnosis and a quote before work starts. Batteries, boards, photo eyes and remotes are carried; anything less common is ordered and you are told upfront.',
    },
  ],

  faqs: [
    {
      q: 'Is my US Automatic Patriot solar or electric?',
      a: 'Both kinds run from a 12-volt battery. Follow the charging lead: to a small panel on a bracket means solar; to a DC adapter plugged into an outlet, often indoors or in a raintight box, means AC-charged. Either way, a slow gate is a battery question first.',
    },
    {
      q: 'What is the difference between a Patriot I and a Patriot II?',
      a: 'One leaf versus two, on the same control board. Because a Patriot II runs two actuators, USAutomatic rates it at roughly half the solar cycles of a Patriot I on the standard 10-watt panel.',
    },
    {
      q: 'Can a solar Patriot be switched to AC charging?',
      a: 'Yes, at the battery controller — the DC adapter and the panel use the same plug. The adapter’s low-voltage cable can be extended so 120 volts does not have to be run to the gate; the Patriot manual calls for 18-gauge wire up to 100 feet and 16-gauge up to 250 feet, and the adapter itself must stay dry.',
    },
    {
      q: 'Why does my Patriot reverse and then set off an alarm?',
      a: 'The board stopped the gate twice on current sense before it reached a limit. That is a safety function, not a fault. The usual cause is a gate that has become hard to move, so we check the hinges, leaf and post before adjusting sensitivity.',
    },
    {
      q: 'Can I just turn the sensitivity dial up?',
      a: 'Not as a fix. USAutomatic treats needing more than 8 as a sign of a gate or actuator problem, and a higher setting means the gate pushes harder before reversing on an obstruction. Free the gate first, then set the dial.',
    },
    {
      q: 'How long is the Patriot warranty?',
      a: 'USAutomatic publishes 3 years on the operator and 5 years on current-design Patriot boards, 1 year on previous-version boards and accessories, all from date of manufacture. Batteries, field labor and trip charges are excluded.',
    },
    {
      q: 'Is US Automatic a Texas company?',
      a: 'Yes — the manuals list USAutomatic, LLC in Lewisville, Texas. We are an independent repair company rather than a USAutomatic dealer, and we can help you gather the serial and model details USAutomatic support asks for on a warranty claim.',
    },
  ],

  relatedModels: ['us-automatic/ranger-repair', 'us-automatic/patriot-rsl-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
  imageSlugs: [],
  projectSlugs: [],

  sources: [
    { label: 'USAutomatic support — Patriot gate opener manuals (board part numbers by serial prefix)', url: KB_PATRIOT },
    {
      label: 'USAutomatic Patriot swing gate operator installation/owner’s manual, board 500018, 2023 rev. A (manufacturer URL)',
      url: 'https://content.usautomatic.com/products/gate_openers/patriot/documents/manuals/500018_patriot_manual_english.pdf',
    },
    {
      label: 'Same Patriot 500018 manual, distributor-hosted copy actually read',
      url: 'https://www.gatecrafters.com/manuals/500018_patriot_manual_english.pdf',
    },
    {
      label: 'USAutomatic Patriot control board 500018 operation sheet (distributor-hosted)',
      url: 'https://usautomaticgateopeners.com/store/pdfs/500018_USAutomatic-Patriot-Control-Board-Red_Operation-Manual_Small.pdf',
    },
    {
      label: 'USAutomatic Gate Openers (DF Supply) — Patriot II AC-charged kit 020055 listing',
      url: 'https://usautomaticgateopeners.com/store/patriot-ii-ac-charged-dual-swing-gate-operator-with-lcr-receiver-2-transmitters-usautomatic-020055.html',
    },
    {
      label: 'All Security Equipment — Patriot II solar kit 020075 listing',
      url: 'https://allsecurityequipment.com/products/usautomatic-patriot-ii-swing-gate-opener-020075-ul',
    },
  ],
  toConfirm: [
    'Maximum gate weight: the 2023 Patriot manual says 800 lb (iron, ranch, chain link); USAutomatic Gate Openers’ comparison page and some listings say 650 lb. Page follows the manual — confirm.',
    '24 in stroke and 500 lb dynamic thrust come from distributor listings, not a manufacturer document we could open.',
    'Which of the manual’s three solar zones covers Dallas–Fort Worth — the region map is an image we could not read. Page deliberately avoids stating it.',
    'Whether the current 500018 board is the listed replacement for failed 500001/500002/500003/500016 boards, and what setting changes that involves.',
    'The Patriot manual labels the battery reset button S4 on the board legend but calls the constant-pressure button S4 in one section and S5 elsewhere. Page uses the board legend (S4 battery reset) — technician to confirm on a 500018 board.',
    'Board color: distributors sell 500018 as a red board; not stated to readers.',
    'Fire ants in gate boxes is stated as general DFW context, not as a record of past jobs — client comfortable with that framing?',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// RANGER (Ranger 500 / Ranger HD, and older Ranger, Ranger I, Ranger II)
// ─────────────────────────────────────────────────────────────────────────────

const ranger: ModelPage = {
  slug: 'ranger-repair',
  brandSlug: 'us-automatic',
  model: 'Ranger',
  aliases: [
    'Ranger 500',
    'Ranger HD',
    'Ranger HD 1',
    'Ranger HD 2',
    'Ranger 500 1',
    'Ranger 500 2',
    'Ranger I',
    'Ranger II',
    'Ranger 500 S',
    'Ranger 500 D',
    '020511 (Ranger 500 2 AC-charged kit)',
    '020512 (Ranger 500 1 solar kit)',
    '020513 (Ranger 500 2 solar kit)',
    '020518 (Ranger HD 1 solar kit)',
    '020519 (Ranger HD 2 solar kit)',
    '020522 / 020523 (Ranger HD solar kits with metal cabinet)',
  ],
  descriptor: 'battery-powered 12V DC linear-actuator swing gate operator series, AC-charged or solar-charged',
  gateType: 'swing',
  duty: 'residential-light-commercial',
  status: 'current',
  statusNote:
    'Current as the Ranger 500 (16 in stroke, board 500028) and the Ranger HD (24 in stroke, board 500027). Earlier Ranger 500 S/D, Ranger I and Ranger II units used boards 500500 and 500510; board 500021 served both the Ranger 500 and Ranger HD before the current boards.',

  title: 'US Automatic Ranger Repair | Dallas–Fort Worth',
  metaDescription:
    'US Automatic Ranger 500 or HD gate stopping short, reversing or dead? We check the battery, charger and board limits across Dallas–Fort Worth. Call 24/7.',
  h1: 'US Automatic Ranger Repair in Dallas–Fort Worth: Ranger 500 and Ranger HD',
  heroIntro:
    'We repair US Automatic Ranger 500 and Ranger HD swing gate operators — plus the older Ranger, Ranger I and Ranger II units still working DFW driveways — whether a panel or an AC adapter keeps the battery charged. A Ranger keeps its stop positions in dials on the control board, so a gate that stops short is often a setting or a battery, not a failed arm.',
  heroPoints: [
    'We tell a 16-inch Ranger 500 from a 24-inch Ranger HD before quoting, because the gates they are rated for are very different.',
    'We set Ranger limits with the board dials and USAutomatic’s nudge procedure, then power-cycle the board so the new stops hold.',
    'We match your board — 500028, 500027, 500021, 500510 or 500500 — to its own manual before changing a dip switch.',
  ],

  identify: {
    body: [
      'The Ranger name has covered several generations of one idea: a 12-volt battery-powered linear actuator on each leaf, run by a control board that holds the stop positions itself. USAutomatic currently sells two: the Ranger 500, with a 16-inch stroke actuator, and the Ranger HD, with a 24-inch stroke. Each comes as a “1” for a single leaf or a “2” for a pair. Earlier versions were sold as the Ranger 500 S and 500 D, then as the Ranger I and Ranger II, and USAutomatic’s manuals for those rate them for 400 pounds and 13 feet of gate.',
      'The control board tells you which one you have. Open the box and read the serial printed on the board: HD plus four digits is a current Ranger HD board (500027); BR plus four digits is a current Ranger 500 board (500028); R6 through R11 is the earlier 500021 board fitted to both; 3 or 4 plus four digits is 500500; 5 plus five digits is 500510.',
      'If the board has been swapped and the serial no longer tells the story, the actuator does. Measure how far the stainless extension tube travels from fully retracted to fully extended: about 16 inches is a Ranger 500, about 24 inches a Ranger HD.',
    ],
    lookFor: [
      'No limit adjusters on the actuator itself — every Ranger stop position is set on the control board',
      'Four limit adjustment dials on the board, grouped for Gate 1 and Gate 2, with two sensitivity dials on the board’s left side',
      'Dip switch banks marked SW1 and SW2 and a Type D constant-pressure push button',
      'A serial on the control board beginning HD, BR, or R6 to R11 — or a bare 3, 4 or 5 on older boards',
      'On some Ranger HD installs, a metal cabinet with an external radio antenna in place of the plastic control box',
      'On older Rangers, a separate charge controller with a row of LEDs for external power, solar panel, charging and charged',
    ],
  },

  overview: [
    {
      heading: 'Ranger 500 or Ranger HD: the gate rating is the difference',
      body: [
        'The two current Rangers share a control board design, a battery controller and identical solar cycle ratings — but not the gate they can move. USAutomatic’s Ranger 500 manual allows ornamental iron up to 13 feet and 400 pounds, ranch gates to 16 feet and 300 pounds, chain link to 14 feet and 350 pounds, and farm gates to 20 feet and 250 pounds. The Ranger HD manual allows ornamental iron, ranch and chain link gates all the way to 16 feet and 800 pounds, with the same 20-foot, 250-pound farm gate limit.',
        'A Ranger 500 on a gate beyond those figures is a mismatch worth ruling out early. It may run acceptably when new, then trip its current sense more and more often as hinges wear and the leaf sags — and no replacement part fixes that.',
        'USAutomatic positions the Ranger HD as its heavier-duty, more corrosion-resistant Ranger; on paper its gate rating matches the Patriot’s. What separates an HD from a Patriot is the board, the limits and the warranty, not the gate it can carry.',
      ],
    },
    {
      heading: 'Stop positions set on the board, not in the arm',
      body: [
        'Rangers have no limit switches to adjust inside the actuator. Current boards carry four limit dials — extend and retract for each gate — and USAutomatic describes a “nudge” method for the extend position: with the actuator fully extended, turn that gate’s extend dial slowly clockwise and the arm creeps outward until the leaf sits where it should. Overshoot, and the dial has to be backed off so the gate stops short, then nudged again.',
        'Two details catch people out. The nudge adjusts the extend limit only. And after adjusting, the board needs a power cycle — the manual has you unplug and reconnect the actuator harness quick-connect — then three full cycles to confirm. A Ranger that seems to forget its limits after someone adjusted it has often simply never been power-cycled.',
        'On a dual Ranger, USAutomatic sets Gate 1 with only that actuator connected, then Gate 2 with only its actuator connected, before plugging both back in.',
      ],
    },
    {
      heading: 'What the Ranger control board does differently',
      body: [
        'Current Ranger boards run one or two gates, set soft start and stop on SW2 switches 1–3 (0 fastest, 7 slowest, factory 4; switch 4 is not a speed switch), and use two sensitivity dials, numbered 0 to 10, that cap how much current each motor may draw after the first second of travel.',
        'Two differences from the Patriot board matter in the field. The Ranger’s J2 accessory output is rated at 750 milliamps against the Patriot’s 1.5 amps, so an accessory package that is comfortable on a Patriot can overload a Ranger. And the Ranger board monitors one contact edge directly; a second edge, or more than one photo eye per direction, needs USAutomatic’s 500015 expansion module.',
        'When the electric lock or magnetic lock switch (SW1 switch 5 or 6) is on, the Ranger opens Gate 2 last and closes it first with a 1.5-second delay. For overlapping leaves without a lock, the manual suggests turning on the electric lock switch simply to get that delay.',
      ],
    },
    {
      heading: 'Older Rangers and their LED charge controller',
      body: [
        'The 2008 Ranger manual describes a charge controller with a row of LEDs — external power, solar panel, detection, charging, charged and system error — rather than the LCD battery controller on current units. A flashing system error light means the charger has entered failure mode, and the pattern of the first four LEDs identifies why: wrong battery voltage or reversed connection, thermal runaway, a charge-time monitor or excessive drain, or a failed battery pre-qualification test. A pre-qualification failure is the charger saying the battery itself is suspect.',
        'Those early units also called for a bigger minimum battery — 33 amp hours, against 30 in current manuals — and the Ranger I and II shipped with a 6-watt panel rather than today’s 10-watt kit. An old Ranger that still has its original panel is working with less charge than a new one.',
      ],
    },
  ],

  specs: [
    { label: 'Current versions', value: 'Ranger 500 1 / 2 and Ranger HD 1 / 2 (single / dual leaf), AC-charged or solar-charged' },
    { label: 'Actuator stroke', value: 'Ranger 500: 16 in. Ranger HD: 24 in (USAutomatic manual 500021 cover)' },
    { label: 'Ranger 500 maximum gate', value: 'Ornamental iron 13 ft / 400 lb; ranch 16 ft / 300 lb; chain link 14 ft / 350 lb; farm 20 ft / 250 lb' },
    { label: 'Ranger HD maximum gate', value: 'Ornamental iron, ranch or chain link 16 ft / 800 lb; farm 20 ft / 250 lb' },
    { label: 'Older Ranger, Ranger I / II rating', value: '13 ft, 400 lb' },
    { label: 'Operating power', value: '12 V DC battery; charged by DC adapter (PN 520009) or 10 W solar kit (PN 520026)' },
    { label: 'Battery', value: '12 V Group U-1 sealed, 30 Ah minimum (older 2008 manual: 33 Ah minimum)' },
    { label: 'Solar cycles per day, 10 W kit (manual zones 1 / 2 / 3)', value: 'Single: 22 / 36 / 65. Dual: 11 / 18 / 32 — same for Ranger 500 and Ranger HD' },
    { label: 'AC-charged capacity', value: 'Up to 575 cycles per day' },
    { label: 'Charge cable extension (Ranger HD manual)', value: 'DC adapter lead up to 1,000 ft on 10 AWG; solar lead up to 500 ft on 14 AWG' },
    { label: 'Current control boards', value: '500028 (Ranger 500), 500027 (Ranger HD)' },
    { label: 'Ranger 500 dynamic thrust', value: '400 lb (distributor listing)' },
    { label: 'UL 325', value: 'Manuals cover Class I–IV installation; monitored entrapment device required' },
  ],

  symptoms: [
    {
      symptom: 'My Ranger stops a foot short of fully open or fully closed',
      causes:
        'On a Ranger the stop position is a board setting. Dials knocked during other work, a replacement board never set up, or limits adjusted without the required power cycle all do it. A weak battery can also stop the arm early when current sense trips over the last stretch.',
      whatWeDo:
        'Rule out the battery, then set limits on the board, nudge the extend position, power-cycle at the harness quick-connect and run three full cycles as USAutomatic directs.',
    },
    {
      symptom: 'It worked for years on this gate and now reverses halfway every time',
      causes:
        'Current sense is tripping. On a Ranger 500 the likely root is a gate near or over its rating — 400 lb ornamental, 300 lb ranch — made worse by worn hinges or a sagging leaf. On either model, a dragging gate or a low battery pushes current draw up.',
      whatWeDo:
        'Check the gate against the model’s rating, free the leaf by hand, then set sensitivity and test reversal before recommending anything bigger.',
    },
    {
      symptom: 'We added a keypad and photo eyes and now the battery keeps going flat',
      causes:
        'Every accessory that stays powered draws from the battery around the clock, and the Ranger board’s accessory output is limited to 750 mA. Accessories that are not solar friendly are a known cause of early battery failure; on a 10-watt panel the charge cannot keep up.',
      whatWeDo:
        'Measure standby draw, turn on photo eye power management (SW1 switch 10) so the eyes are powered only while the gate moves, replace power-hungry accessories and size up the panel where needed.',
    },
    {
      symptom: 'The old charger in my Ranger box is flashing a light and the gate is dead',
      causes:
        'An early-style LED charge controller in failure mode. The LED pattern separates a reversed or wrong-voltage battery, thermal runaway, excessive drain and a battery that failed pre-qualification.',
      whatWeDo:
        'Decode the pattern, load test the battery, check the transformer or panel, and replace the controller only if it is the fault.',
    },
    {
      symptom: 'Only the second gate on my dual Ranger misbehaves',
      causes:
        'Each gate has its own plug, limit dials and sensitivity dial, and SW1 switch 4 enables Gate 2. The far leaf also depends on the dual-gate cable and its splices.',
      whatWeDo:
        'Swap the actuators between ports to see whether the fault follows the arm or the board, open the splice box, and set Gate 2 limits with only that actuator connected.',
    },
    {
      symptom: 'The leaves hit each other when closing',
      causes:
        'Overlapping leaves need the Ranger’s 1.5-second Gate 2 delay, which only runs with a lock switch turned on — or the overlapping leaf is plugged into Gate 1.',
      whatWeDo:
        'Put the leaf that must close first on Gate 2, turn on the lock switch for the delay, and cycle both leaves to confirm the order.',
    },
    {
      symptom: 'The solar panel is clean but the battery never seems to charge',
      causes:
        'USAutomatic says even a small amount of shade stops a panel charging, and the panel must face south to southwest at its bracket angle. A panel moved to find sun on an undersized or spliced cable loses charge in the wire.',
      whatWeDo:
        'Relocate the panel into full sun — the manual allows up to 200 feet — on the right gauge: 18 AWG to 100 feet, 16 AWG to 250, 14 AWG to 500, direct-burial rated or in conduit.',
    },
  ],

  components: [
    {
      part: 'Ranger 500 or Ranger HD actuator (Ranger HD PN 510006)',
      whatItDoes: 'Drives the leaf through a 16 in (500) or 24 in (HD) stroke; contains the motor and gear train but no limit adjusters.',
      failureSigns: 'Motor hums without tube movement, grinding or clicking, water inside the housing, or a bent extension tube.',
      verdict: 'replace-part',
    },
    {
      part: 'Ranger control board (500027 HD, 500028 Ranger 500, or earlier)',
      whatItDoes: 'Holds the stop positions, sensitivity, soft start and stop, timer to close, safety inputs and lock outputs.',
      failureSigns: 'A dead gate port, limits that will not hold after a proper power cycle, or burn marks after a storm.',
      verdict: 'replace-part',
    },
    {
      part: 'Board limit adjustment dials',
      whatItDoes: 'Set extend and retract positions for Gate 1 and Gate 2.',
      failureSigns: 'Gate stops short or overruns after someone has worked in the box, or after a board swap.',
      verdict: 'adjust',
    },
    {
      part: '12 V Group U-1 battery',
      whatItDoes: 'Powers every cycle; the charge source only replenishes it.',
      failureSigns: 'Slowing travel, low-battery alarm from the entrapment siren, a controller E11 code, or a charger failing pre-qualification.',
      verdict: 'replace-part',
    },
    {
      part: 'Battery controller (current PN 520001) or older LED charge controller',
      whatItDoes: 'Charges the battery from the DC adapter or panel and protects against reverse connection.',
      failureSigns: 'Blank LCD, E11 on screen, no charging symbol in full sun, or a flashing system-error LED on older units.',
      verdict: 'replace-part',
    },
    {
      part: 'Charge cable and extension pigtails (PN 630038)',
      whatItDoes: 'Carry low-voltage charge from a distant outlet or a relocated panel to the controller.',
      failureSigns: 'Corroded splices, wire too thin for the run, or a cut transformer or panel cable — modifying those voids the product warranty.',
      verdict: 'repair',
    },
    {
      part: 'Metal cabinet and external antenna kit (Ranger HD option, PN 030230)',
      whatItDoes: 'Houses the board, controller, receiver and siren in steel, with the radio antenna mounted outside.',
      failureSigns: 'Remote range drops off because the coax or antenna bracket is damaged, or the cabinet was welded with components installed.',
      verdict: 'repair',
    },
    {
      part: 'Actuator brackets and release pin',
      whatItDoes: 'Mount the arm between post and gate; the pin frees the arm for hand operation.',
      failureSigns: 'Play at the brackets, cracked welds, a pin that will not pull, or lag bolts working loose from a wood post.',
      verdict: 'repair',
    },
  ],

  repairOrReplace: {
    summary:
      'Most Ranger faults are repairs: a battery, a charge source, a limit setting, a splice or a single actuator. The genuine replace-or-upgrade decision on this family is usually about the gate. A Ranger 500 working a gate beyond its 13-foot, 400-pound ornamental rating will keep tripping however well it is repaired, and the honest fix is a Ranger HD or a Patriot, not another part.',
    repair: [
      'Gate stops short or overruns — a limit setting and power cycle on the board.',
      'Battery that will not hold up — battery, charge source and accessory load, sized to the traffic.',
      'One leaf of a dual Ranger dead — port, splice, enable switch or a single actuator.',
      'Storm-damaged board — replacement board, with limits, speed and dip switches set from scratch.',
      'Weak solar charge — panel siting, cable gauge, or a 20 W panel in place of the original.',
    ],
    replace: [
      'A Ranger 500 on an ornamental gate over 13 feet or 400 pounds: step up to a Ranger HD (16 ft / 800 lb rating) or a Patriot. The battery, DC adapter and 10 W solar kit are the same part numbers across these models.',
      'A pre-2016 Ranger whose board has failed: USAutomatic published a procedure for fitting the 500510 board to operators built before January 12, 2016; we confirm what suits your serial before ordering anything.',
      'A busy dual-leaf entrance on solar — the manual allows 11 cycles a day in its lowest-sun zone — where AC charging, not a new operator, is the real upgrade.',
    ],
  },

  warranty: {
    manufacturer:
      'USAutomatic’s current manuals state, from date of manufacture: operators free from defects in materials for 3 years; current-design Ranger 500 and Ranger HD control boards 3 years; previous-version control boards 1 year; accessories 1 year. Battery replacement, field labor and trip charges are not covered.',
    notes: [
      'The Ranger board term is 3 years, against 5 years for current Patriot boards — worth knowing when choosing between them.',
      'Ranger manuals state that modifying the transformer or solar panel cable voids the product warranty; extensions should use USAutomatic’s 630038 pigtails in a watertight box.',
      'Warranty claims go to USAutomatic support with the model and the serial number printed on the control board.',
      'Exclusions include battery acid damage, weather and acts of God, incorrect installation and lack of maintenance.',
    ],
  },

  dfw: [
    {
      heading: 'Long driveways and the charge cable',
      body: [
        'A Ranger suits long rural drives because the charge source does not have to be at the gate. The Ranger HD manual tables the DC adapter’s low-voltage lead out to 1,000 feet on 10-gauge wire, and a solar lead to 500 feet on 14-gauge — useful on acreage in Wise or Parker county where the nearest outlet is at a barn. The weak point is the splice: it belongs in a watertight box with direct-burial or conduit-run cable, and a corroded splice after a wet spring behaves exactly like a dying battery.',
      ],
    },
    {
      heading: 'Heavy iron gates on a light operator',
      body: [
        'Decorative iron is common on Dallas–Fort Worth estate entrances, and the Ranger 500’s 400-pound ornamental rating is easy to exceed with a double gate. Add the sag that follows when expansive clay moves a post, and a Ranger 500 that was borderline on day one starts tripping its current sense. Checking the gate against the Ranger 500 and Ranger HD ratings is part of an honest Ranger diagnosis here.',
      ],
    },
    {
      heading: 'Summer battery, winter panel',
      body: [
        'The Ranger battery sits in its box through triple-digit afternoons, and heat shortens sealed lead-acid life — older Ranger manuals remind installers never to seal the box completely because the battery needs airflow. Then winter’s low sun and short days cut what the 10-watt panel gathers just as the battery has lost capacity. With 11 solar cycles a day for a dual gate in the manual’s lowest-sun zone, a Ranger HD 2 or Ranger 500 2 has little slack in January.',
      ],
    },
    {
      heading: 'Lightning on open ground',
      body: [
        'USAutomatic notes that solar charging isolates the operator from lightning reaching it through the AC supply, and recommends a surge protector on AC-charged installs. A Ranger board lost to a spring storm is a straightforward swap, but a new board does not arrive knowing where your gate stops: every limit, speed and dip switch has to be set again.',
      ],
    },
  ],

  process: [
    {
      step: 'Hand-test the gate against its rating',
      body: 'We pull the release pin and move each leaf by hand, and compare the gate’s length, weight and type with what your Ranger model is rated for.',
    },
    {
      step: 'Identify the model and board',
      body: 'Actuator stroke separates a Ranger 500 from a Ranger HD; the serial on the board identifies the revision and the manual its settings must come from.',
    },
    {
      step: 'Test the battery and the whole charge path',
      body: 'Load test the battery, read the controller, and follow the charge cable back to the adapter or panel, opening any splice boxes on the way.',
    },
    {
      step: 'Check what the accessories are drawing',
      body: 'Keypads, receivers, photo eyes and locks are checked against the Ranger’s 750 mA accessory output and the battery’s real daily budget.',
    },
    {
      step: 'Set limits, speed and sensitivity, then verify safety',
      body: 'Limits by dial and nudge with the required power cycle, soft start and stop, sensitivity, then reversal and monitored device tests.',
    },
    {
      step: 'Quote before work',
      body: 'You get the diagnosis and a quote first. Common parts are on the truck; anything less common is ordered and you are told upfront.',
    },
  ],

  faqs: [
    {
      q: 'Is my gate opener a Ranger 500 or a Ranger HD?',
      a: 'Read the serial on the control board: HD plus four digits is a Ranger HD board, BR plus four digits a Ranger 500 board. If the board has been replaced, measure the arm’s extension travel — about 16 inches for a Ranger 500, about 24 inches for a Ranger HD.',
    },
    {
      q: 'My box says Ranger I or Ranger II. Is that a different operator?',
      a: 'It is an earlier Ranger — I for a single leaf, II for dual. USAutomatic’s manual for it rates the gate at 13 feet and 400 pounds and ships it with a 6-watt panel. We still work on them, identifying the board revision first.',
    },
    {
      q: 'Can a Ranger 500 be upgraded to a Ranger HD?',
      a: 'It is an operator change rather than a part swap: the actuator stroke and the control board are different. The battery, DC adapter and 10-watt solar kit carry the same part numbers, so the charging side often stays.',
    },
    {
      q: 'Does an AC-charged Ranger keep working in a power cut?',
      a: 'Yes. The motor always runs from the battery; the AC adapter only charges it. USAutomatic says the operator will run for weeks without power at under 20 cycles a day, provided the accessories are solar friendly.',
    },
    {
      q: 'How does the Ranger compare with the US Automatic Patriot?',
      a: 'A Ranger HD carries the same 16-foot, 800-pound gate as a Patriot, but sets its limits on the board rather than in the actuator, supplies less accessory current, and carries a 3-year board warranty against the Patriot’s 5. The Ranger 500 is the lighter operator.',
    },
    {
      q: 'Why did my Ranger lose its limits after a new board went in?',
      a: 'On a Ranger the stop positions live on the board, so a replacement starts with factory settings. The limits, soft-start speed and dip switches all have to be set again, followed by a power cycle.',
    },
  ],

  relatedModels: ['us-automatic/patriot-repair', 'us-automatic/patriot-rsl-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
  imageSlugs: [],
  projectSlugs: [],

  sources: [
    { label: 'USAutomatic support — Ranger HD gate opener manuals (boards 500027, 500021 by serial)', url: KB_RANGER_HD },
    { label: 'USAutomatic support — Ranger 500 gate opener manuals (boards 500028, 500021, 500500, 500510 by serial)', url: KB_RANGER_500 },
    {
      label: 'USAutomatic Ranger HD installation/owner’s manual, board 500027, 2023 rev. A (distributor-hosted copy)',
      url: 'https://www.gatecrafters.com/manuals/500027_ranger_hd_manual_english.pdf',
    },
    {
      label: 'USAutomatic Ranger 500 installation/owner’s manual, board 500028 (distributor-hosted copy)',
      url: 'https://www.gatecrafters.com/manuals/500028_ranger_500_manual_english.pdf',
    },
    {
      label: 'USAutomatic Ranger (16 in) / Ranger HD (24 in) manual, board 500021 (distributor-hosted)',
      url: 'https://usautomaticgateopeners.com/store/pdfs/500021_ranger_hd_manual.pdf',
    },
    {
      label: 'USAutomatic Ranger I / Ranger II installation/owner’s manual, 2017 rev. A (distributor-hosted)',
      url: 'https://www.southwestautomated.com/product/attachment/US-020522/US%20Automatic%20Ranger%20Owners%20Manual.pdf',
    },
    {
      label: 'USAutomatic Ranger installation manual, 2008 rev. N/C (older LED charge controller)',
      url: 'http://www.allgateoperatormanuals.com/Ranger%20Installation%20Manual%20NC%20standard%20size.pdf',
    },
    {
      label: 'USAutomatic Gate Openers — swing gate opener comparison (Ranger 500 thrust)',
      url: 'https://usautomaticgateopeners.com/store/resources/resources-hub/us-swing-gate-openers-product-comparison.html',
    },
  ],
  toConfirm: [
    'Ranger 500 400 lb dynamic thrust is from a distributor comparison page only; no thrust figure for the Ranger HD was found in a manufacturer document.',
    'Distributor comparison lists Ranger HD at 16 ft / 800 lb as “battery backup” — manufacturer manual confirms 800 lb; the “more corrosion-resistant” positioning is distributor/manufacturer marketing language, not a spec.',
    'Which manual solar zone covers DFW (region map not machine-readable).',
    'Whether actuator brackets carry over when upgrading a Ranger 500 to a Ranger HD — not stated on the page.',
    'Existing landing page /us-automatic-ranger-repair says Rangers are “common on ranch and acreage entrances across Dallas–Fort Worth” — not carried forward as a claim; client to confirm if he wants it.',
    'Metal cabinet part numbers: manual lists cabinet w/cover 020570 in the metal option list and 600020 on another page — page avoids the cabinet part number.',
    'Distributor sells 500028 as fitting the Sentry 300 as well as the Ranger 500 — not used on the page.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// PATRIOT RSL (slide)
// ─────────────────────────────────────────────────────────────────────────────

const patriotRsl: ModelPage = {
  slug: 'patriot-rsl-repair',
  brandSlug: 'us-automatic',
  model: 'Patriot RSL',
  aliases: ['RSL', 'Patriot RSL slide', '020410 (AC-charged kit)', '020430 (solar-charged kit)'],
  descriptor: 'battery-powered 12V DC chain-drive slide gate operator, AC-charged or solar-charged',
  gateType: 'slide',
  duty: 'residential-light-commercial',
  status: 'current',
  statusNote:
    'Current. USAutomatic lists control board 500026 as the current Patriot RSL release; earlier units used boards 500001, 500002, 500016 and 500017.',

  title: 'US Automatic Patriot RSL Repair | Dallas–Fort Worth',
  metaDescription:
    'US Automatic Patriot RSL slide gate crawling, blowing fuses or stuck on the release knob? We repair chain, limits, brake and battery across DFW. Call 24/7.',
  h1: 'US Automatic Patriot RSL Slide Gate Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair the US Automatic Patriot RSL — USAutomatic’s battery-powered slide gate operator — on AC-charged and solar-charged gates across Dallas–Fort Worth. On an RSL, a blown 15-amp fuse or a gate that crawls almost always comes back to something keeping the gate from moving freely: the chain, the rollers, the brake or the battery.',
  heroPoints: [
    'We pull the release knob and roll the gate by hand before testing a circuit — the RSL manual’s own first check for a slow or fuse-blowing gate.',
    'We inspect the gear-motor brake, which USAutomatic names as a cause of blown fuses on the RSL.',
    'We set the limit cam nuts in mid-travel on the top-shelf limit plate, as the manufacturer requires, so the limit switches are not damaged.',
  ],

  identify: {
    body: [
      'The Patriot RSL is not a swing opener with a different arm; it is a separate machine. The operator sits beside the gate on a concrete pad or on a post, and a #41 roller chain runs the length of the gate, fastened to brackets at each end and threaded around idler rollers and a drive sprocket inside the unit. A gear motor turns that sprocket through a short drive chain, and the Patriot-family control board and battery share the housing.',
      'It carries the Patriot name because it uses the same family of control board, sensitivity dials and battery charging. The serial on the board identifies the revision: Y2 plus four digits is the current 500026; Y1 plus four digits is 500017; 7 plus six digits is 500002; 8 or 9 plus six digits is 500016; and 9 plus four, 1 to 5 plus five, or 6 plus six digits is 500001.',
      'Note which side of the drive the operator is on. Standing on the operator side of the gate, a unit to the left of the drive is a left-hand installation and one to the right is right-hand, and DS1 switch 9 has to match the handing or the gate runs backwards.',
    ],
    lookFor: [
      'A box-shaped operator standing beside the gate on a pad or post, with nothing mounted on a hinge',
      'A long roller chain along the gate, fastened to chain brackets with adjustment bolts at each end',
      'On top of the operator: a spring-loaded limit plate holding two limit switches and two limit cam nuts',
      'An emergency release knob behind a lockable, rotating access cover',
      'Inside: a Patriot control board with sensitivity dials at the upper left and a 15-amp fuse',
      'A serial number on the board beginning Y2 or Y1 on recent units',
    ],
  },

  overview: [
    {
      heading: 'Chain, sprockets and the release knob',
      body: [
        'The RSL moves the gate by pulling on a fixed #41 chain. Inside, a 13-tooth output sprocket on the gear motor drives a short chain to a 21-tooth sprocket on the drive shaft, which runs in pillow block bearings; the gate chain wraps the drive sprocket between two idler rollers. The emergency release disengages that drive train: pull the knob out and the gate can be pushed by hand; to re-engage, push the knob in and roll the gate until it snaps home, tapping it in if needed.',
        'USAutomatic is specific about tension. The outer nut on each chain adjustment bolt sets it, the inner nut locks it against the bracket, and the chain should not be over-tightened — it is meant to hang with a few inches of drop. An over-tight chain loads the bearings and motor, raises current draw and makes the release knob hard to pull.',
      ],
    },
    {
      heading: 'Limit switches on the top shelf',
      body: [
        'Unlike the Patriot swing operator, whose limits sit inside the actuator, the RSL stops the gate with two cam nuts on a threaded sleeve on top of the operator. A spring-loaded limit plate holds them: press the plate down to free the cams, turn the cam for the direction you want to change, and let the plate snap back into the cam grooves. When a cam presses its limit switch actuator, the gate stops.',
        'The manufacturer’s cautions are worth following exactly: adjust with the gate in mid-travel, never turn a cam past the switch’s actuator arm, and make sure the plate is fully seated before running — an unseated plate lets the cams rotate. With the LED indicator held, pressing the switch nearest the gate (white wire) should light the extend limit LED and the other (orange wire) the retract LED, which separates a bad switch from a bad setting.',
        'An optional soft stop, DS1 switch 6, slows the gate over roughly the last 18 inches. USAutomatic says to set the limits about 24 inches short of each end first; turning soft stop on before that risks board or gate damage.',
      ],
    },
    {
      heading: 'The brake and the 15-amp fuse',
      body: [
        'The RSL troubleshooting guide says the board fuse blows for essentially one reason: the gate cannot move. That may be an obstruction, a gate trying to travel the wrong way because a limit is misset, or a wiring fault, most likely a splice made at installation. It may also be the brake inside the gear motor — if the brake does not release, the motor cannot turn.',
        'USAutomatic’s appendix covers inspecting that brake, the part with two yellow wires under a round cover behind the motor’s back plate, and notes that dark dust inside the housing suggests the brake has been dragging. It goes further than most manufacturers would: the brake can be disconnected and removed, and the manual states it is not necessary for proper operation.',
      ],
    },
    {
      heading: 'Rated by length, budgeted by travel distance',
      body: [
        'The 2020 RSL manual rates the operator for slide gates up to 32 feet long and 600 pounds. An older RSL manual gives 24 feet and 600 pounds for Class I or II gates, so the age of the unit matters when judging whether a long gate is within rating.',
        'Solar capacity is tabled by how far the gate travels. On the standard 10-watt kit the manual lists 22, 35 and 60 cycles a day across its three sun zones for 10 feet of travel, dropping to 10, 17 and 30 at 20 feet, and 7, 11 and 18 at 30 feet. A long ranch slide gate on solar has a far tighter daily budget than a short driveway gate on the same operator.',
        'AC charging removes most of that ceiling — USAutomatic cites 575 cycles a day on the DC adapter — though the older RSL manual set a firm limit of 100 cycles a day however the unit was charged, and pointed high-traffic sites to a heavier operator.',
      ],
    },
  ],

  specs: [
    { label: 'Gate type', value: 'Vehicular slide gate; concrete pad or post mount' },
    { label: 'Maximum gate (2020 rev. A manual)', value: '32 ft long, 600 lb' },
    { label: 'Maximum gate (earlier RSL manual)', value: '24 ft long, 600 lb, UL 325 Class I or II' },
    { label: 'Drive', value: '#41 roller chain; gear motor with brake; 13-tooth output and 21-tooth drive shaft sprockets' },
    { label: 'Limits', value: 'Two limit switches with cam nuts on a spring-loaded limit plate, top of operator' },
    { label: 'Operating power', value: '12 V DC battery; AC-charged by DC adapter or solar-charged' },
    { label: 'Battery', value: '12 V Group U-1 sealed, 30 Ah minimum (not included)' },
    { label: 'Standard solar kit', value: '10 W panel, PN 520026' },
    { label: 'Solar cycles per day, 10 W kit (zones 1 / 2 / 3)', value: '10 ft travel: 22 / 35 / 60. 20 ft: 10 / 17 / 30. 30 ft: 7 / 11 / 18' },
    { label: 'AC-charged capacity', value: 'Up to 575 cycles per day (2020 manual); earlier manual capped use at 100 cycles per day' },
    { label: 'Current control board', value: '500026; 15 A board fuse' },
    { label: 'Soft stop', value: 'Optional, DS1 switch 6; slows roughly the last 18 in of travel' },
    { label: 'Timer to close', value: 'Approximately 2 to 150 seconds' },
  ],

  symptoms: [
    {
      symptom: 'The gate crawls open and closed',
      causes:
        'USAutomatic’s guide puts a slow RSL down to low battery voltage in most cases, and says to consider both the battery’s condition and what discharged it. A failing motor is possible but uncommon. On solar, a long travel distance uses up the daily budget quickly.',
      whatWeDo:
        'Load test the battery, read the battery controller, then look for the drain: a binding gate, a tight chain, accessory draw, or more cycles than the travel-distance table allows.',
    },
    {
      symptom: 'The fuse blows the moment I press open',
      causes:
        'The gate cannot move: an obstruction, a limit set so the gate drives the wrong way, a shorted splice from installation, or a gear-motor brake that is not releasing.',
      whatWeDo:
        'Release and roll the gate, check limit direction and handing, open the splices, then inspect the brake per USAutomatic’s appendix and remove it if it is dragging.',
    },
    {
      symptom: 'I cannot pull the emergency release knob',
      causes:
        'Sometimes it is already out. Otherwise the drive is under load — something is in a bind: gate wheels, guide rollers, a chain off a roller, twisted, or overly tight.',
      whatWeDo:
        'Rock the gate along its direction of travel while pulling, then correct the bind. The manual says not to modify any screws on the drive shaft, and we do not.',
    },
    {
      symptom: 'It opens all the way, then immediately reverses',
      causes:
        'A limit is set too far, so the gate overruns, or a limit switch or its wire is not registering when the cam presses it.',
      whatWeDo:
        'Test each switch against the extend and retract LEDs, adjust the cam in mid-travel so the gate stops earlier, and replace a switch that does not register.',
    },
    {
      symptom: 'The gate starts, then stops and backs up after a couple of seconds',
      causes:
        'Current sense is tripping. The RSL manual says most gates run at a setting of 5, and that needing more than 8 points to track debris, a gate in a bind, or a chain that is too tight.',
      whatWeDo:
        'Pull the release knob and roll the gate by hand. If it does not move easily, we find and fix the cause, then set sensitivity and verify reversal.',
    },
    {
      symptom: 'The open and close stop points keep moving',
      causes:
        'The limit plate is not fully engaging the cam nut grooves, so the cams creep, or the cam nuts themselves are worn.',
      whatWeDo:
        'Reseat or replace the limit plate and cam nuts, reset both stops in mid-travel and confirm over several cycles.',
    },
    {
      symptom: 'The chain slaps, clicks or jumps',
      causes:
        'Too much chain drop, a worn or stretched chain, loose sprocket set screws, or worn idler rollers and bearings — all on USAutomatic’s periodic inspection list.',
      whatWeDo:
        'Set tension at the adjustment bolts, tighten set screws, and replace worn chain, sprockets or rollers together where wear has spread.',
    },
  ],

  components: [
    {
      part: '#41 gate chain and chain brackets',
      whatItDoes: 'The fixed chain the operator pulls along to move the gate; brackets set its tension.',
      failureSigns: 'Excess sag, rust, stiff links, a bracket pulling off the gate frame.',
      verdict: 'adjust',
    },
    {
      part: 'Drive chain and sprockets',
      whatItDoes: 'Transfer motor output to the drive shaft (13-tooth to 21-tooth).',
      failureSigns: 'Clicking, a chain jumping teeth, hooked sprocket teeth, loose set screws.',
      verdict: 'replace-part',
    },
    {
      part: 'Gear motor and brake (motor PN 510201)',
      whatItDoes: 'Drives the gate; the brake holds the drive when stopped.',
      failureSigns: 'Repeated fuse failure, hum without movement, dark dust inside the motor housing from a dragging brake.',
      verdict: 'repair',
    },
    {
      part: 'Limit plate, limit switches and cam nuts (switch PN 590050)',
      whatItDoes: 'Stop the gate at the open and closed positions.',
      failureSigns: 'Overrun and reverse, stops that move over time, a limit LED that never lights.',
      verdict: 'adjust',
    },
    {
      part: 'Emergency release knob and locking bar (PN 680010)',
      whatItDoes: 'Disconnects the drive so the gate can be pushed by hand.',
      failureSigns: 'Knob will not pull, will not re-engage, or the gate freewheels when it should be locked.',
      verdict: 'service',
    },
    {
      part: 'Patriot RSL control board (500026 or earlier)',
      whatItDoes: 'Runs current sensing, soft stop, timer to close, monitored safety inputs and lock outputs.',
      failureSigns: 'No output with a proven battery and good fuse, storm damage, or inputs stuck on the LED test.',
      verdict: 'replace-part',
    },
    {
      part: 'Idler rollers and pillow block bearings (PN 580060, 580040)',
      whatItDoes: 'Guide the gate chain around the drive sprocket and support the drive shaft.',
      failureSigns: 'Squeal, wobble in the shaft, rollers that no longer turn.',
      verdict: 'replace-part',
    },
    {
      part: 'Battery and battery controller',
      whatItDoes: '12 V Group U-1 battery powers every cycle; the controller refills it from adapter or panel.',
      failureSigns: 'Slow travel, blank controller display, no charging symbol in full sun.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'The Patriot RSL is a mechanical slide operator made of serviceable parts — chain, sprockets, bearings, limit switches, a brake the manufacturer says can come out — and most of its faults are repairs. Replacement belongs to two situations: a gate beyond the RSL’s rating, or an entrance whose traffic has outgrown a battery-powered operator.',
    repair: [
      'Blown fuses — freeing the gate, correcting limits or a splice, or dealing with a dragging brake.',
      'Slow travel — battery, charge source, chain tension and gate rollers.',
      'Hard-to-pull release knob — the bind behind it: wheels, guide rollers or chain.',
      'Overrun, reversing or drifting stops — limit switch, plate or cam nut work.',
      'Noisy drive — chain, sprockets, set screws, idlers and bearings.',
    ],
    replace: [
      'A gate longer than 32 feet or heavier than 600 pounds (or over 24 feet on an older unit): the operator is outside its rating, and repeated repairs will not change that.',
      'A site needing more traffic than a battery slide operator was designed for — the earlier RSL manual itself pointed installations beyond 100 cycles a day to a high-traffic operator.',
      'A long solar slide gate that exceeds the travel-distance table: try AC charging or more panel before replacing anything.',
      'A cracked or heaved pad or leaning post that cannot keep the operator aligned with its chain: rebuild the mount first; a new operator only if the housing itself is damaged.',
    ],
  },

  warranty: {
    manufacturer:
      'USAutomatic’s published warranty (2023 manuals), from date of manufacture: operators free from defects in materials for 3 years; current-design Patriot RSL control boards 5 years; previous-version control boards 1 year; accessories 1 year. Battery replacement is not covered.',
    notes: [
      'Check the warranty page in the manual that came with your RSL; the terms above are from USAutomatic’s 2023 Patriot and Ranger HD manuals, which list Patriot RSL boards.',
      'Field labor, trip charges and problems with the gate or gate hardware are excluded — slide gate wheels, track and rollers are the owner’s responsibility.',
      'Exclusions include weather and acts of God, battery acid damage, incorrect installation and lack of maintenance.',
      'USAutomatic support will ask for the model and the serial number printed on the control board.',
    ],
  },

  dfw: [
    {
      heading: 'Concrete pads on moving clay',
      body: [
        'The RSL has to stay lined up with its chain; the manual has the installer align the chain bolts with the rollers before anchoring the operator. Expansive clay around Dallas–Fort Worth can tilt a small pad or lean a post over a few dry and wet seasons, and a few degrees of tilt twists the chain path, loads the idler rollers and bearings, and drives current up toward a sensitivity trip or a blown fuse.',
      ],
    },
    {
      heading: 'Heavy rain, track debris and low ground',
      body: [
        'USAutomatic asks whether the track area is designed to keep dirt and rocks from obstructing the gate, and says not to mount the operator near sprinklers or in flood-prone spots. After a North Texas downpour, gravel and mud washed across a drive or into a slide gate’s path is one of the most ordinary reasons an RSL starts reversing — and an operator set in a low corner where water collects is a board and battery at risk.',
      ],
    },
    {
      heading: 'Long solar slide gates in winter',
      body: [
        'Wide ranch slide gates are exactly where the RSL’s travel-distance table bites. At 30 feet of travel the manual allows 7 solar cycles a day in its lowest-sun zone, and December’s short days and low sun move any site toward that end of the table. A 30-foot solar RSL that coped in summer can fall behind by midwinter without anything being broken.',
      ],
    },
    {
      heading: 'Dust, heat and chain lubrication',
      body: [
        'USAutomatic calls for chain lube as needed and regular checks of wheels, rollers, chain and sprockets. On dry gravel drives through a hot summer, lubricated chain picks up grit that wears sprockets and rollers faster, so cleaning matters as much as oiling. The battery shares the housing, and summer heat shortens its life as it does on any sealed lead-acid system.',
      ],
    },
  ],

  process: [
    {
      step: 'Pull the release and roll the gate',
      body: 'We pull the emergency release knob and push the gate through its full travel. Binding wheels, track debris, a twisted chain or a tight bracket show up here, before any electrical testing.',
    },
    {
      step: 'Read the board and the fuse',
      body: 'Holding the LED indicator shows limit and input states. We check the 15-amp fuse, record the board’s serial and part number, and confirm DS1 switch 9 matches the handing.',
    },
    {
      step: 'Inspect the drive train and brake',
      body: 'Chain tension and wear, sprocket set screws, idler rollers, bearings, and — where fuses have been blowing — the gear-motor brake.',
    },
    {
      step: 'Test the battery and charge source',
      body: 'Load test the battery, read the controller, and check the adapter or panel against the gate’s travel distance and daily cycles.',
    },
    {
      step: 'Set limits, soft stop and sensitivity',
      body: 'Cam nuts adjusted in mid-travel with the plate reseated, soft stop only after the stops are right, sensitivity set, then reversal and monitored device tests.',
    },
    {
      step: 'Quote before work',
      body: 'You see the diagnosis and a quote first. Batteries, boards, photo eyes and remotes are carried; less common RSL parts are ordered and you are told upfront.',
    },
  ],

  faqs: [
    {
      q: 'Is the Patriot RSL the same as a Patriot swing gate opener?',
      a: 'No. It shares the Patriot board family and battery charging, but it is a chain-drive slide operator with its own gear motor, brake, sprockets and top-mounted limit switches. None of the Patriot swing actuator parts apply.',
    },
    {
      q: 'Why does my Patriot RSL keep blowing its 15-amp fuse?',
      a: 'USAutomatic says fuses blow because the gate cannot move — an obstruction or bind, a limit set so the gate drives the wrong way, a bad splice, or a gear-motor brake that is not releasing. Replacing the fuse without finding which one it is just blows another.',
    },
    {
      q: 'Can the brake be removed from a Patriot RSL?',
      a: 'USAutomatic’s manual describes removing it and states the brake is not necessary for proper operation. We inspect it first, and check that the gate and track are level so the gate will not drift once it is out.',
    },
    {
      q: 'How many times a day can a solar Patriot RSL open?',
      a: 'It depends on travel distance and sun. With the 10-watt kit the manual ranges from 60 cycles a day for 10 feet of travel in the sunniest zone down to 7 for 30 feet in the least sunny one. AC charging raises that dramatically.',
    },
    {
      q: 'How do I open my Patriot RSL by hand?',
      a: 'Unlock and rotate the release access cover, pull the knob out, and push the gate. If the knob will not pull, rock the gate slightly while pulling. Only reach into the access hole as far as needed to grip the knob.',
    },
    {
      q: 'What size slide gate can the Patriot RSL handle?',
      a: 'The 2020 manual rates it for gates up to 32 feet and 600 pounds; an older manual says 24 feet and 600 pounds. Some online listings quote higher weights, so we go by the manual for your unit.',
    },
  ],

  relatedModels: ['us-automatic/patriot-repair', 'us-automatic/ranger-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
  imageSlugs: [],
  projectSlugs: [],

  sources: [
    { label: 'USAutomatic support — Patriot RSL gate opener manuals (boards 500026, 500017, 500016, 500002, 500001 by serial)', url: KB_RSL },
    {
      label: 'USAutomatic Patriot RSL installation/owner’s manual, 2020 rev. A, USAutomatic part 720005 (distributor-hosted)',
      url: 'https://usautomaticgateopeners.com/store/pdfs/Patriot-RSL.pdf',
    },
    {
      label: 'USAutomatic Patriot RSL installation/owner’s manual, earlier edition (24 ft / 600 lb, 100 cycles/day)',
      url: 'https://www.fencemartep.com/fence%20jpgs/usautomatic-manual.pdf',
    },
    {
      label: 'USAutomatic Patriot manual 500018, 2023 rev. A — warranty page listing Patriot RSL boards (distributor-hosted copy)',
      url: 'https://www.gatecrafters.com/manuals/500018_patriot_manual_english.pdf',
    },
    {
      label: 'All Security Equipment — Patriot RSL AC-charged kit 020410 listing',
      url: 'https://allsecurityequipment.com/products/usautomatic-patriot-rsl-slide-opener-020410-ul',
    },
  ],
  toConfirm: [
    'Gate weight: the 2020 manual says 600 lb; distributor listings variously claim 800 lb and 1,000 lb, and older board silkscreens read “Gate Weight Max. Load: 650 lbs.” Page follows the manual.',
    'The 2020 RSL manual intro names a 520004 transformer and 520025 panel kit, while its solar section names the 10 W 520026 kit. Page states the 10 W kit only.',
    'Current 500026 board manual could not be opened (manufacturer site blocks automated access); page relies on the 2020 rev. A manual, which may describe the 500017 board. Technician to confirm dip switch numbering (soft stop DS1-6, handing DS1-9) on a 500026 board.',
    'Warranty page of the RSL manual itself did not extract; terms are from the 2023 Patriot/Ranger HD manuals, which name Patriot RSL boards.',
    'Removing the brake: manufacturer says it is not necessary; whether Shield is comfortable recommending removal on any gate should be confirmed by a technician.',
    'Which solar zone covers DFW (region map image).',
  ],
  indexable: true,
}

export const usAutomaticModels: ModelPage[] = [patriot, ranger, patriotRsl]
