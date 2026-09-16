/**
 * LiftMaster commercial and Elite Series model pages.
 *
 * CSW24UL and CSL24UL (24 Vdc platform) and the AC Elite Series SL3000UL and
 * CSW200UL. Every spec, code and procedure below comes from the LiftMaster
 * installation manuals recorded in `sources`. Distributor listings were used
 * only where attributed in the copy, and conflicts are listed in `toConfirm`.
 *
 * Skipped on purpose: HDSL24UL and the MA/MEGA ARM barrier operator — see the
 * research report. Residential LiftMaster and the SL585/SL595/SW470/SW490 are
 * owned by other model files.
 */

import type { ModelPage } from './types'

const csw24ul: ModelPage = {
  slug: 'csw24ul-repair',
  brandSlug: 'liftmaster',
  model: 'CSW24UL',
  aliases: ['CSW24ULMC', 'CSW24UL-MC'],
  descriptor: 'commercial 24 Vdc swing gate operator with battery backup',
  gateType: 'swing',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'Current LiftMaster commercial swing operator, documented in the 2022 installation manual (114-5646-000) and listed on LiftMaster.com. An earlier model was sold as the CSW24U.',

  title: 'LiftMaster CSW24UL Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster CSW24UL stopping, reversing or dead in an outage? We read the codes, test the batteries and repair swing operators across DFW. Call 24/7.',
  h1: 'LiftMaster CSW24UL Repair in Dallas–Fort Worth',
  heroIntro:
    'Yes, we repair the LiftMaster CSW24UL, the 24-volt commercial swing gate operator with built-in battery backup. When one starts reversing, sounding its alarm or failing during outages, the board has usually logged why, and we read that history before we replace anything.',
  heroPoints: [
    'We scroll the CSW24UL’s saved code history (up to 20 entries) before quoting a part.',
    'We load-test both 12 V batteries and the charge circuit before blaming the board.',
    'We check hinges, hard stops and arm geometry, the swing-side causes of lockouts and code 38.',
  ],

  identify: {
    body: [
      "The CSW24UL is a box-shaped operator on a concrete pad or post beside the gate leaf. A two-section arm (a long arm and a short arm) runs from an output shaft on top of the operator to a bracket welded to the gate. Inside the enclosure are two 12-volt batteries and a separate expansion board next to the main control board.",
      "The fastest confirmation is the diagnostic display on the control board. At power-up it shows the operator type, 'SG' followed by '24' on a CSW24UL, and then the firmware version. If your display reads 'SL' and '24' you have the slide-gate CSL24UL, and 'SG' with '20' is the AC Elite Series CSW200UL, which has no batteries.",
      'The model number is also printed on the operator label and the warranty card. LiftMaster documented an earlier CSW24U under its own manual, so match boards, harnesses and codes to the exact number on your label rather than assuming the two generations interchange.',
    ],
    lookFor: [
      "Diagnostic display reading 'SG' then '24' when the board powers up",
      'Long and short arm sections joined at a pivot, driven from the top of the operator',
      'A release handle on the operator arm',
      'A reset switch behind a small lockable access door on the front cover',
      'Two 12 V 7 Ah batteries in the enclosure',
      'A LiftMaster retro-reflective photo eye (LMRRUL), which ships in the box',
    ],
  },

  overview: [
    {
      heading: 'A 24-volt drive with the batteries in the circuit',
      body: [
        'The CSW24UL runs a 1/2 HP 24 Vdc motor from a transformer while mains power is present and from two 12-volt 7 Ah batteries when it is not, so a power cut does not trap cars inside or outside the property. The control board charges those batteries itself, and a BATT CHARGING LED shows its three-stage charger working. Below 23 volts the board treats the batteries as critically low and parks the gate at a limit, open or closed depending on the BATT FAIL switch.',
        'That design changes the diagnosis. A CSW24UL that beeps three times when given a command is reporting a low battery. LiftMaster recommends replacing the batteries every three years for best performance, and it warns that the AC power switch on the operator does not disconnect them. They stay live while you work.',
      ],
    },
    {
      heading: 'Electronic limits and an absolute position encoder',
      body: [
        'There are no limit nuts to wind on this operator. Open and close positions are taught on the board with the SET OPEN, SET CLOSE and MOVE GATE buttons, and an absolute position encoder (APE) reports where the arm is at all times. Once both limits are saved, the operator runs a full automatic force-learning cycle with an audible warning and the display reads 00 when it has finished.',
        'The reversal force dial fine-tunes what was learned. On the CSW24UL every setting from 1 to 10 lets the operator raise force automatically as the gate wears or the temperature changes. Turn the dial outside setup mode and the board logs code 3A until you return the dial or enter and exit setup. The encoder has its own fault code, 34.',
      ],
    },
    {
      heading: 'Swing geometry is part of the operator',
      body: [
        'LiftMaster rates the CSW24UL by leaf weight and length together: 1,200 lb on a 12-foot leaf, 800 lb at 16 feet and 600 lb at 18 feet. It opens 90 degrees in about 20 seconds with up to 115 degrees of travel. The manual notes that both figures depend on the A and B mounting dimensions between the hinge and the pad, and that more than 4 inches from hinge center to the edge of the post creates an area that needs entrapment protection.',
        'Inside, the parts breakdown shows a lower gear reducer driving an upper gearbox through a #50 chain, with the output shaft on top. A BACKDRIVE switch decides what happens when both mains and battery power are gone. Set to MANUAL, the leaf can be pushed by hand. Set to SECURE, it resists being pushed.',
      ],
    },
    {
      heading: 'Monitored safety inputs it will not run without',
      body: [
        'The operator’s built-in inherent sensing counts as one entrapment protection device. The CSW24UL will not run until at least one monitored external photo eye or edge is installed in the open or close direction. Without one it logs code 60. The main board takes two close devices and one open device, and the expansion board adds three more inputs that can be set for either direction, plus LiftMaster wireless edges.',
        'Non-monitored contact-closure devices are not supported. That catches out sites where a failed sensor was swapped for a cheaper generic one. The expansion board also carries the loop, quick-close, anti-tailgate and auxiliary relay functions that apartment and HOA entrances depend on, so a fault there can look like a gate problem when it is really a board problem.',
      ],
    },
  ],

  specs: [
    { label: 'Operator type', value: 'Commercial 24 Vdc vehicular swing gate operator, UL 325 Class I, II, III and IV' },
    { label: 'Motor', value: '1/2 HP, 24 Vdc' },
    { label: 'Main AC supply', value: '120 Vac, 4 A (10 A including accessory outlets) or 240 Vac, 2 A' },
    { label: 'Maximum gate weight / length', value: '1,200 lb at 12 ft; 800 lb at 16 ft; 600 lb at 18 ft' },
    { label: '90-degree travel time', value: '20 seconds (varies with mounting dimensions)' },
    { label: 'Maximum travel range', value: '115 degrees' },
    { label: 'Duty cycle', value: 'Continuous' },
    { label: 'Batteries', value: 'Two 12 Vdc 7 Ah (LiftMaster 29-NP712); two 33 Ah (A12330SGLPK) optional' },
    { label: 'Accessory power', value: '24 Vdc, 500 mA max' },
    { label: 'Solar input', value: '24 Vdc, 60 W max' },
    { label: 'Operating temperature', value: '-4°F to 140°F without heater; -40°F to 140°F with optional heater' },
    { label: 'External entrapment inputs', value: 'Main board: 2 close, 1 open. Expansion board: 3, configurable' },
    { label: 'Display ID at power-up', value: 'SG 24' },
  ],

  symptoms: [
    {
      symptom: 'The gate works fine on power but dies in an outage, or beeps three times when I press the remote.',
      causes:
        'Worn-out batteries, a charging fault or a battery harness problem. Three beeps on a command is the CSW24UL’s low-battery warning. Code 40 means battery overvoltage, 41 is overcurrent (often a shorted charge harness), and 42 means no battery was found at boot.',
      whatWeDo:
        'We load-test both batteries, check the BATT CHARGING LED and the voltage at the harness, and confirm the pair match. If charge current is not reaching the batteries, we trace the fault back to the board rather than selling you another set.',
    },
    {
      symptom: 'The leaf swings partway, stops, and goes back open.',
      causes:
        'Usually a force reversal (code 91) or an RPM/stall reversal (code 93) because the leaf has become harder to move: dropped or tight hinges, a post that has leaned, or a leaf catching on the drive. A photo eye or edge tripping mid-swing logs a code in the 70–75 range instead.',
      whatWeDo:
        'We check which code fired, release the arm and swing the leaf by hand. If it binds, we fix the gate. We do not turn up the force dial to push through a binding leaf.',
    },
    {
      symptom: 'The alarm sounded for several minutes and now the gate will not respond.',
      causes:
        'Two obstruction detections in a row latch the operator: the alarm runs for up to five minutes and the unit waits for a reset. LiftMaster’s list of causes includes an arm installed out of geometry, tight or broken hinges, a car pushing the leaf, something on the gate frame, and the gate catching the driveway or curb.',
      whatWeDo:
        'We find the cause before resetting, because a reset alone brings the lockout back. We inspect the arm pivots, hinges and the ground along the swing, then reset at the switch on the front of the operator.',
    },
    {
      symptom: 'The display shows 38 and the gate stops hard at the end of travel.',
      causes:
        'Code 38 is a hard stop limit on arm 1. The learned limit is set too tightly against a solid stop with no give, or the operator has reached the end of its mechanical travel because the mounting position is off.',
      whatWeDo:
        'We re-teach the limit slightly short of the stop and, where the arm runs out of travel, correct the pad or bracket position against LiftMaster’s A–E dimension chart.',
    },
    {
      symptom: 'The gate will not close on its own any more. It just stays open.',
      causes:
        'A close input is being held on: a misaligned or dirty photo eye, a stuck loop detector, or a Timer-to-Close that was turned off. An input held for more than three minutes is logged as a code from 61 to 66, and a shorted or open loop logs 43, 44 or 45.',
      whatWeDo:
        'We read the input LEDs to see which device is holding the gate, then clean, realign or replace that device. We also check the Timer-to-Close dial (0–180 seconds) before assuming anything has failed.',
    },
    {
      symptom: 'Nothing happens and the display is blank.',
      causes:
        'No AC with flat batteries, an open fuse, or a failed board. Code 31 is the main board reporting an internal failure. Code 53 records a brownout, when supply voltage dropped below what the board accepts.',
      whatWeDo:
        'We measure incoming voltage (LiftMaster’s guideline is within 10 percent of rating), check fuses and battery voltage, and reboot the board as the manual describes, with the J15 plug disconnected and a pause before reconnecting. A board is only condemned if the fault returns after that.',
    },
    {
      symptom: 'On our double gate one leaf opens and the other does not, or they close out of order.',
      causes:
        'Lost communication between the two operators (code 54 on a wireless pair), or both BIPART DELAY switches set the same way.',
      whatWeDo:
        'We confirm the second operator has power, check whether the pair are linked by radio or shielded twisted-pair cable, re-learn the link if needed, and set one bipart switch ON (the leaf that opens second) and the other OFF.',
    },
  ],

  components: [
    {
      part: 'Main control board (K1D8389-1CC)',
      whatItDoes: 'Drives the motor, charges the batteries, stores limits, hosts the radio receiver and logs the last 20 diagnostic codes.',
      failureSigns: 'Code 31 that survives a reboot, a blank display with good supply voltage, or batteries that never charge.',
      verdict: 'replace-part',
    },
    {
      part: 'Expansion board (K1D8387-1CC)',
      whatItDoes: 'Adds three configurable monitored safety inputs, loop functions, quick close, anti-tailgate and auxiliary relay outputs.',
      failureSigns: 'Loops, maglock or relay outputs stop working while basic open and close still run.',
      verdict: 'replace-part',
    },
    {
      part: 'Batteries (two 12 V 7 Ah, LiftMaster 29-NP712)',
      whatItDoes: 'Run the gate through outages and on solar sites. LiftMaster’s manual specifies this part for replacements.',
      failureSigns: 'Three beeps on a command, the BATT LOW LED, codes 40–42, or a gate that fails a few cycles into a power cut.',
      verdict: 'replace-part',
    },
    {
      part: 'Absolute position encoder (APE) assembly',
      whatItDoes: 'Reports arm position to the board so the electronic limits stay accurate from cycle to cycle.',
      failureSigns: 'Code 34, limits that drift, or stall reversals (code 93) with no obstruction and a free-moving leaf.',
      verdict: 'replace-part',
    },
    {
      part: 'Arm assembly and release handle',
      whatItDoes: 'Transfers output-shaft torque to the leaf. The handle frees the arm so the gate can be moved by hand.',
      failureSigns: 'Play at the pivots, a handle that will not lock back down, or arm sections bent by a vehicle.',
      verdict: 'adjust',
    },
    {
      part: 'Gear reducer, #50 drive chain and upper gearbox',
      whatItDoes: 'Turn the motor’s speed into arm torque in two stages before it reaches the output shaft.',
      failureSigns: 'Grinding or knocking under load, oil around the gearbox vent plugs, or free play at the arm with the handle locked.',
      verdict: 'service',
    },
    {
      part: 'Monitored photo eyes and edges (LMRRUL, LMTBUL, LiftMaster edges)',
      whatItDoes: 'Provide the external entrapment protection the operator requires before it will run.',
      failureSigns: 'Code 60, a gate that stays open, or reversals with nothing in the way.',
      verdict: 'adjust',
    },
    {
      part: 'EMI board with receptacles and AC power switch',
      whatItDoes: 'Takes incoming mains power into the operator and feeds the accessory outlets and the power switch.',
      failureSigns: 'No AC reaching the board or dead accessory outlets, especially after a storm.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'A CSW24UL that has stopped is usually repairable. Its common faults are batteries, safety inputs, limits and boards, and all are separate replaceable parts on an operator LiftMaster still sells. Replacement is worth discussing when the leaf has outgrown the rating or the gear train is worn out after years of high-cycle use.',
    repair: [
      'Batteries that no longer hold charge, or a charging circuit that has failed on the board',
      'Codes 60–75 from misaligned, damaged or non-monitored photo eyes and edges',
      'Hard stop, run-distance or encoder errors (38, 50, 34) fixed by re-teaching limits, correcting the mounting or replacing the APE',
      'A failed main or expansion board, including after a lightning-related surge',
      'Arm pivots, brackets or the release handle damaged by a vehicle',
    ],
    replace: [
      'The leaf is heavier or longer than the rating, for example an 18-foot leaf over 600 lb. LiftMaster’s AC Elite Series CSW200UL 1 HP is rated to 1,000 lb on a 22-foot leaf, but it gives up the CSW24UL’s onboard battery backup.',
      'The gear reducer and gearbox are both worn on a unit long out of warranty, and parts and labor approach the price of a new operator.',
      'Water has corroded the board, encoder and harnesses together.',
      'An earlier CSW24U or other legacy unit needs parts that can no longer be sourced, making the current CSW24UL the practical like-for-like step.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster 7-year residential / 5-year commercial limited warranty to the first purchaser, from the date of purchase, as printed in the CSW24UL installation manual (114-5646-000, 2022).',
    notes: [
      'An HOA, apartment or business entrance is a commercial installation, so the 5-year term normally applies.',
      'The manual says failure to follow its installation, operation, maintenance and testing instructions voids the limited warranty entirely.',
      'Battery replacement, labor to reinstall a repaired unit, gate hardware such as hinges and alignment, and problems caused by interference are excluded.',
      'LiftMaster asks owners to call before the product is dismantled. Check your purchase date and installer paperwork before any warranty claim.',
    ],
  },

  dfw: [
    {
      heading: 'Summer heat and a battery-backed operator',
      body: [
        'The CSW24UL is rated to 140°F without a heater, and a closed enclosure on a sunny pad gets far hotter than the air in a Texas summer. The two sealed batteries feel that first, and LiftMaster notes that batteries degrade with temperature and use. On a DFW entrance we treat the three-year replacement interval as a maximum, and we test the batteries on every visit instead of waiting for an outage to find out.',
      ],
    },
    {
      heading: 'Clay soil and hinge posts',
      body: [
        'North Texas clay shrinks in drought and swells after rain, and a hinge post that leans even slightly changes the leaf’s arc and the geometry the arm was installed for. On this operator that shows up as stall reversals, alarm lockouts, a hard stop code at the end of travel, or 90-degree opening times that creep up. The operator is protecting itself. The post and hinges need attention before the limits do.',
      ],
    },
    {
      heading: 'Storms, surges and the occasional hard freeze',
      body: [
        'Spring thunderstorms put lightning-induced surges onto the incoming supply and onto loop and photo-eye wiring run across the drive, which is where EMI board, main board and brownout faults come from. We check the supply and grounding before fitting a new board, so the replacement does not fail the same way.',
        'The February 2021 freeze pushed DFW toward the bottom of this operator’s -4°F rating without a heater, and cold also cuts battery output. LiftMaster’s HTR heater keeps the gearbox and batteries warm, but it is rarely needed here, and the manual warns that the larger 33 Ah batteries will not fit in the enclosure alongside it.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the code history',
      body: 'Before touching anything we hold STOP, then CLOSE, then OPEN until the display shows Er, and scroll the saved codes. The CSW24UL keeps 20, which usually shows whether the fault is power, a safety input or the mechanism.',
    },
    {
      step: 'Release the arm and swing the leaf by hand',
      body: 'With the reset switch set to RESET/DISCONNECT and the arm handle released, we move the gate through its whole arc. Tight hinges, a leaning post or a dragging leaf are fixed first, because no force setting should hide a binding gate.',
    },
    {
      step: 'Test mains, batteries and charging',
      body: 'We test incoming voltage, both batteries under load, the charge circuit, fuses and accessory draw against the 500 mA limit. On solar sites we compare panel output with the operator’s 60 W input and check battery size.',
    },
    {
      step: 'Check every monitored input',
      body: 'We check the input LEDs, photo-eye alignment, edge end caps and wireless edge batteries, and confirm that only monitored devices are connected.',
    },
    {
      step: 'Quote, repair, re-learn and test',
      body: 'You get the diagnosis and price before work starts. After any repair that touches limits or force, we re-teach the limits, let the automatic force cycle finish at 00, and run LiftMaster’s obstruction test in both directions.',
    },
  ],

  faqs: [
    {
      q: 'Is the CSW24UL the same as the CSL24UL?',
      a: 'They share a 24 Vdc platform. Both manuals list the same main board, expansion board and 1/2 HP motor part numbers. But the CSW24UL drives a swing arm through two gear stages, while the CSL24UL pulls a chain along a slide gate. Code 38, a hard stop on the arm, is a swing issue. Chain sag and wheels off the rail are slide issues.',
    },
    {
      q: 'How long should CSW24UL batteries last?',
      a: 'LiftMaster recommends replacing them every three years for best performance, using its 29-NP712 battery. In DFW heat it is worth testing them on every visit rather than finding out during an outage.',
    },
    {
      q: 'How do I open the gate by hand when the power is out?',
      a: 'LiftMaster’s procedure is to press the reset switch to RESET/DISCONNECT, then release the handle on the operator arm (on a double gate, both arms). Push the handle down to re-engage. Only release the arm when the gate is not moving. The BACKDRIVE switch set to MANUAL also lets the leaf be pushed once both AC and battery power are lost.',
    },
    {
      q: 'What does code 60 mean on a CSW24UL?',
      a: 'The operator has not detected the minimum monitored entrapment protection. This swing operator runs only when at least one monitored external photo eye or edge is installed in the open or close direction. If a device worked yesterday, check its wiring, and make sure it is a monitored device rather than a plain contact closure.',
    },
    {
      q: 'Can a CSW24UL run on solar power?',
      a: 'Yes. LiftMaster supports up to 60 W of 24 Vdc solar panels and pairs solar with two 33 Ah batteries and its solar harness kit. The manual lists low panel wattage, heavy accessory draw, old batteries and shaded panels as the reasons a solar CSW24UL runs short of cycles.',
    },
    {
      q: 'Will the LiftMaster warranty cover my repair?',
      a: 'It might, if you are the first purchaser and within 5 years of purchase on a commercial installation or 7 on a residential one. It excludes batteries, labor and gate hardware, and LiftMaster asks to be contacted before the unit is dismantled. If what we find looks like a manufacturing defect, we tell you before doing paid work.',
    },
  ],

  relatedModels: ['liftmaster/csl24ul-repair', 'liftmaster/csw200ul-repair', 'liftmaster/la500-repair'],
  relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'access-control-repair', 'emergency-gate-repair'],

  sources: [
    {
      label: 'LiftMaster CSW24UL Commercial DC Vehicular Swing Gate Operator installation manual, 114-5646-000, 2022 (PDF, distributor-hosted)',
      url: "https://shop.bobsdist.com/documents/CSW24UL_Owner's_Manual.pdf",
    },
    { label: 'LiftMaster CSW24UL product page', url: 'https://www.liftmaster.com/csw24ul-24vdc-swing-gate-operator/p/CSW24UL' },
    { label: 'Chamberlain Group support: CSW24UL installation manual', url: 'https://support.chamberlaingroup.com/s/article/CSW24UL-Installation-Manual' },
    {
      label: 'Chamberlain Group support: earlier CSW24U installation manual (confirms prior model)',
      url: 'https://support.chamberlaingroup.com/s/article/GATE-LiftMaster-CSW24U-Swing-Gate-Operator-Installation-Manual-1484145708731',
    },
  ],
  toConfirm: [
    'Battery-backup runtime is not given in the manual. Distributors quote figures such as "146 cycles / 24 days", so it was omitted from the page.',
    'Whether current CSW24UL boards have myQ built in or need the 828LM Internet Gateway listed in the manual. The page does not make the claim either way.',
    'Whether Shield carries the CSW24UL main board (K1D8389-1CC), expansion board and APE assembly on the truck, or orders them.',
    'Parts cross-compatibility between the older CSW24U and the CSW24UL has not been verified.',
    'LiftMaster.com blocked automated retrieval (HTTP 403). Current status is based on the 2022 manual and the live product URL in search results.',
    'The CSL24UL manual’s manual-disconnect text matches the CSW24UL’s wording ("handle on the operator arm"). The CSW24UL procedure is as written, but a technician should confirm the physical release on current units.',
  ],
  indexable: true,
}

const csl24ul: ModelPage = {
  slug: 'csl24ul-repair',
  brandSlug: 'liftmaster',
  model: 'CSL24UL',
  aliases: ['CSL24ULMC', 'CSL24UL-MC', 'CSL24ULWK'],
  descriptor: 'commercial 24 Vdc chain-drive slide gate operator with battery backup',
  gateType: 'slide',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'Current LiftMaster commercial slide operator, listed on LiftMaster.com and documented in LiftMaster’s current installation manual. An earlier model was sold as the CSL24U.',

  title: 'LiftMaster CSL24UL Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster CSL24UL slide gate reversing, grinding or dead on battery? We fix chains, batteries, boards and safety sensors across Dallas–Fort Worth. Call now.',
  h1: 'LiftMaster CSL24UL Slide Gate Operator Repair',
  heroIntro:
    'Yes, we repair the LiftMaster CSL24UL, the 24-volt commercial slide gate operator with built-in battery backup. When one starts reversing, sounding its alarm or losing its limits, the cause is as often in the chain, wheels and track as on the board, so we check both.',
  heroPoints: [
    'We measure chain sag against LiftMaster’s 1-inch-per-10-feet limit and inspect idlers and the sprocket.',
    'We pull the stored codes from the SL 24 display before quoting any part.',
    'We test the two 12 V batteries and the charger that keep a CSL24UL moving in a power cut.',
  ],

  identify: {
    body: [
      'The CSL24UL stands beside the gate opening on a pad or post. A #41 roller chain runs from a bracket welded at one end of the gate, through idler pulleys and around a drive sprocket inside the operator, to a bracket at the other end. The gate rolls on its own wheels and track. The operator only pulls the chain.',
      "At power-up the control board display shows 'SL' followed by '24', which is how the board identifies a CSL24UL. 'SL 30' is LiftMaster’s AC Elite Series SL3000UL, and 'SG 24' is the CSW24UL swing operator from the same board family. Open the cover and you will see two 12-volt batteries in a tray, which the SL3000UL does not have.",
      'Check the label for the exact model before ordering anything. LiftMaster also documented an earlier CSL24U, and boards and harnesses should be matched to the number actually printed on your unit.',
    ],
    lookFor: [
      '#41 chain fastened with eye bolts to welded brackets at both ends of the gate',
      'Chain running level over idler pulleys at the operator (rear-mounted installs add two more idlers)',
      "Display reading 'SL' then '24' at power-up",
      'Two 12 V 7 Ah batteries in a tray inside the enclosure',
      'Two-piece cover with a front access door over the reset switch',
      'A 5-foot edge sensor and a retro-reflective photo eye, both supplied with the operator',
    ],
  },

  overview: [
    {
      heading: 'Timing belt, gear reducer and chain',
      body: [
        'LiftMaster’s parts breakdown shows how the CSL24UL moves a gate. The 1/2 HP 24 Vdc motor turns a toothed timing belt onto the gear reducer pulley, the reducer turns an output sprocket, and that sprocket engages the #41 chain fixed to the gate, with an idler pulley holding the chain in line. At full speed the gate travels about one foot per second.',
        'Each stage wears in its own way. Belts stretch and glaze, idler bearings dry out, sprocket teeth hook and chains elongate. LiftMaster allows no more than 1 inch of sag per 10 feet of chain, taken up at either eye bolt, and warns that limits may need resetting after a major chain adjustment. The manual specifies lithium spray only, never grease or silicone.',
      ],
    },
    {
      heading: 'Built for long, heavy gates, if they roll freely',
      body: [
        'The CSL24UL is rated for gates up to 1,500 lb, with a minimum travel of 4 feet and a maximum of 50 feet. It is continuous duty and approved for UL 325 Class I through IV, which is why it turns up on apartment, HOA and industrial slide gates as well as long residential driveways.',
        'The rating assumes a gate that rolls easily. A gate on a heaved track or on wheels with flat spots loads the drivetrain like a much heavier one. The inherent force sensing will catch that and reverse, and after two detections in a row the operator sounds its alarm for up to five minutes and waits for someone to reset it.',
      ],
    },
    {
      heading: 'Electronic limits on a chain drive',
      body: [
        'Limits are set on the board with SET OPEN, SET CLOSE and the MOVE GATE buttons, and an absolute position encoder tracks where the gate is. The open and close limits must be at least 4 feet apart, and LiftMaster lists limits set too close as a slide-only reason the setup fails. If the gate later travels farther or shorter than the board learned, it logs a run-distance error, code 50.',
        'Because the board learns position through the drivetrain, anything that lets the gate move relative to the chain becomes a limit complaint: a slipping eye bolt, a stretched chain, a cracked bracket weld. That is why we inspect the hardware before re-teaching limits that will only drift again.',
      ],
    },
    {
      heading: 'Two external safety devices, one in each direction',
      body: [
        'A slide gate has pinch points at both ends of travel, and the CSL24UL enforces protection at both. Its manual states that it runs only once at least two external monitored devices are fitted, one for the closing direction and one for the opening direction. If either is missing or unmonitored it logs code 60. That is why a photo eye and a 5-foot edge kit ship in the box.',
        'The expansion board adds three configurable monitored inputs and supports LiftMaster wireless edges. On a long gate that saves running a coiled cable to the leading edge, but it adds an edge battery to maintain: code 46 means a wireless edge battery is low.',
      ],
    },
  ],

  specs: [
    { label: 'Operator type', value: 'Commercial 24 Vdc vehicular slide gate operator, UL 325 Class I, II, III and IV' },
    { label: 'Motor', value: '1/2 HP, 24 Vdc' },
    { label: 'Main AC supply', value: '120 Vac, 4 A (10 A including accessory outlets) or 240 Vac, 2 A' },
    { label: 'Maximum gate weight', value: '1,500 lb' },
    { label: 'Gate travel distance', value: '4 ft minimum; 50 ft maximum' },
    { label: 'Maximum travel speed', value: '1 ft per second' },
    { label: 'Duty cycle', value: 'Continuous' },
    { label: 'Drive', value: 'Timing belt to gear reducer, output sprocket on #41 chain (30 ft supplied)' },
    { label: 'Batteries', value: 'Two 12 Vdc 7 Ah (LiftMaster 29-NP712); two 33 Ah (A12330SGLPK) optional' },
    { label: 'Accessory power', value: '24 Vdc, 500 mA max' },
    { label: 'Solar input', value: '24 Vdc, 60 W max' },
    { label: 'Operating temperature', value: '-4°F to 140°F without heater; -40°F to 140°F with optional heater' },
    { label: 'Display ID at power-up', value: 'SL 24' },
  ],

  symptoms: [
    {
      symptom: 'The gate jerks when it starts and the chain slaps against the fence.',
      causes:
        'Chain sag beyond LiftMaster’s 1 inch per 10 feet, a loosened eye bolt, a dry or worn idler pulley, or a drive sprocket with hooked teeth.',
      whatWeDo:
        'We measure the sag, inspect the sprocket teeth and idlers, and tension the chain at the eye bolts. Chain and sprocket are replaced together when both are worn. We then check the limits, because a big chain adjustment can move them.',
    },
    {
      symptom: 'It starts closing, stops, and rolls back open.',
      causes:
        'An inherent reversal from rising load (code 91 for force, 93 for RPM or stall): mud or gravel in the track, a broken axle or flat-spotted wheel, a wheel off the rail, or the gate dragging in its receiver guide. A photo eye or edge tripping on the way logs a code from 70 to 75.',
      whatWeDo:
        'We read which code fired, disconnect the operator and roll the gate end to end by hand. Track, wheels and guides are corrected first. Turning the force dial up to shove a dragging gate is not a repair.',
    },
    {
      symptom: 'The alarm sounds for minutes at a time and the gate stays locked until someone resets it.',
      causes:
        'Two obstruction detections in a row. LiftMaster lists the causes for this operator as the gate hitting something, a gate that does not meet specifications, mud, rocks or dirt in the track, broken axles or wheels, and a wheel off the rail.',
      whatWeDo:
        'We clear and correct the cause, then reset. If the alarm comes back with nothing in the way, we test the edges and check the position encoder and its wiring.',
    },
    {
      symptom: 'The operator will not learn its limits, or stops short of fully open.',
      causes:
        'Limits closer than 4 feet apart, a gate too stiff to reach a limit during setup, a run-distance mismatch (code 50), or the encoder not reporting position (code 34).',
      whatWeDo:
        'We confirm the gate rolls freely by hand, check the chain and brackets for slip, then re-teach both limits and let the automatic force cycle finish with 00 on the display.',
    },
    {
      symptom: 'It runs fine until the power goes out, or beeps three times when I use the remote.',
      causes:
        'Low batteries (the board treats anything under 23 V as critically low), a shorted charge harness (code 41), no battery found at boot (code 42), or the BATT FAIL switch doing exactly what it was set to do on low battery.',
      whatWeDo:
        'We load-test both batteries, check the charge at the harness, and confirm the BATT FAIL setting matches how your site should behave. LiftMaster’s setup guide sets it to OPEN for residential and general-access communities, and to CLOSE where security comes first.',
    },
    {
      symptom: 'The gate stays open and never closes on its timer.',
      causes:
        'Something is holding a close input: a misaligned photo eye, a pressed or damaged edge, a loop detector stuck on, or a Timer-to-Close set to zero. Inputs held longer than three minutes log codes 61 to 66.',
      whatWeDo:
        'We read the input LEDs to find the device holding the gate, repair or realign it, and set the Timer-to-Close to suit the site.',
    },
    {
      symptom: 'After a storm the display is dark and the gate is dead.',
      causes:
        'Surge damage to the EMI filter and surge protection board or the main board, a blown fuse, batteries drained by a long outage, or a recorded brownout (code 53).',
      whatWeDo:
        'We check supply voltage, fuses, board power and battery voltage, and reboot with the J15 plug disconnected. We replace the board only if code 31, an internal board failure, persists.',
    },
  ],

  components: [
    {
      part: '#41 drive chain and master link',
      whatItDoes: 'Connects the operator’s sprocket to brackets at each end of the gate. It is the part that actually moves the gate.',
      failureSigns: 'Sag beyond 1 inch per 10 feet, rust, stiff links, or chain riding up on the sprocket.',
      verdict: 'adjust',
    },
    {
      part: 'Drive sprocket and idler pulleys',
      whatItDoes: 'Keep the chain engaged and running level through the operator.',
      failureSigns: 'Hooked teeth, squealing or rough idler bearings, or chain climbing the sprocket under load.',
      verdict: 'replace-part',
    },
    {
      part: 'Timing belt and gear reducer',
      whatItDoes: 'Carry motor torque to the output sprocket at a lower speed.',
      failureSigns: 'Belt slip or whine, knocking from the reducer, or oil around the gearbox vent plug.',
      verdict: 'service',
    },
    {
      part: 'Main control board (K1D8389-1CC)',
      whatItDoes: 'Runs the motor and charger, stores electronic limits, receives remotes and records diagnostic codes.',
      failureSigns: 'A persistent code 31, no display with good power, or a charger that no longer charges.',
      verdict: 'replace-part',
    },
    {
      part: 'Batteries (two 12 V 7 Ah, LiftMaster 29-NP712)',
      whatItDoes: 'Keep the gate running during outages and store energy on solar installations.',
      failureSigns: 'Triple beep on command, BATT LOW LED, codes 41–42, or few cycles before the gate parks during a power cut.',
      verdict: 'replace-part',
    },
    {
      part: 'Position encoder (APE assembly and APS encoder)',
      whatItDoes: 'Tells the board where the gate is along its travel.',
      failureSigns: 'Code 34, drifting limits, or stall reversals on a gate that rolls freely by hand.',
      verdict: 'replace-part',
    },
    {
      part: 'Monitored photo eyes and edges',
      whatItDoes: 'Cover both directions of travel. The CSL24UL requires at least one external device each way.',
      failureSigns: 'Code 60, a gate that will not close, codes 70–75 with nothing in the way, or code 46 on wireless edges.',
      verdict: 'adjust',
    },
    {
      part: 'EMI filter and surge protection board',
      whatItDoes: 'Conditions the incoming AC supply before it reaches the transformer and board.',
      failureSigns: 'No power at the board after a lightning storm while the breaker is still on.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'Most CSL24UL problems come from wear parts and accessories: chain, sprockets, batteries and safety devices, plus the occasional board or encoder. Those are routine repairs on a current operator. Replacement is worth discussing when the gate is heavier than 1,500 lb, or when the gear reducer is failing on a unit that has already had most of its other parts replaced.',
    repair: [
      'Chain, sprocket and idler wear from a high-cycle entrance',
      'Batteries, battery harness or a failed charging circuit',
      'Photo eyes, edges or loop detectors behind codes 60–75 or 43–45',
      'Encoder and board faults, including run-distance and position errors',
      'Track, wheel and guide problems that make the operator reverse',
    ],
    replace: [
      'The gate weighs more than 1,500 lb. LiftMaster’s AC Elite Series SL3000UL 1 HP is rated to 2,000 lb over up to 52 feet of travel but has no onboard batteries. LiftMaster’s heavy-duty HDSL24UL is the other operator worth pricing.',
      'The gear reducer has failed on an older unit and the total repair approaches the cost of a new operator.',
      'The enclosure has flooded and corroded the board, encoder and harnesses together.',
      'An older CSL24U needs parts that are no longer available.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster 7-year residential / 5-year commercial limited warranty to the first purchaser, from the date of purchase, as printed in the CSL24UL installation manual.',
    notes: [
      'Gated communities with more than four homes, apartments and businesses are commercial installations under LiftMaster’s usage classes, so the 5-year term normally applies.',
      'Batteries, reinstallation labor, gate hardware (rollers, alignment, hinges) and damage from improper installation or missed maintenance are excluded.',
      'Not following the manual’s installation, maintenance and testing instructions voids the warranty in its entirety.',
      'LiftMaster’s process begins with a call to LiftMaster before the operator is dismantled. Keep your dated proof of purchase.',
    ],
  },

  dfw: [
    {
      heading: 'Clay soil, slabs and slide gate tracks',
      body: [
        'A slide gate only runs well on a straight, level track, and North Texas clay does not stay still. Slabs and track sections heave after wet spells and settle in drought, receiver posts lean, and brackets take the strain. The CSL24UL reads each of those as extra load and responds with reversals, alarm lockouts or run-distance errors. The lasting repair is usually at the track, not in the enclosure.',
      ],
    },
    {
      heading: 'Heat on the batteries and electronics',
      body: [
        'The operator is rated to 140°F without a heater, but the batteries inside degrade with heat and use. LiftMaster recommends replacing them every three years for best performance. In a DFW summer we test them on every visit, because a weak pair shows up as a gate that parks itself at a limit during the first outage of storm season.',
      ],
    },
    {
      heading: 'Storms, runoff and the occasional freeze',
      body: [
        'Heavy spring rain washes mud and gravel into tracks, which is on LiftMaster’s own list of alarm causes for this operator. Lightning in the same storms induces surges on long loop, edge and photo-eye cable runs across wide commercial openings.',
        'A hard freeze like February 2021 is rare here, but it brought DFW close to the -4°F limit for running without a heater, and cold batteries deliver less. Ice in the track or a frozen wheel will stop a slide gate before the operator’s limits come into it.',
      ],
    },
  ],

  process: [
    {
      step: 'Pull the stored codes',
      body: 'We read the code history from the display: hold STOP, then CLOSE, then OPEN until Er appears. The board keeps the last 20, which tells us whether we are chasing power, safety inputs or the drivetrain.',
    },
    {
      step: 'Disconnect and roll the gate by hand',
      body: 'With the operator disconnected, we move the gate its full length. Wheels, track, guides and positive stops are checked before anything electrical, because a dragging gate produces the same codes as a failing operator.',
    },
    {
      step: 'Inspect the drivetrain',
      body: 'We check chain sag, eye bolts, bracket welds, sprocket teeth, idler bearings, the timing belt and the gearbox vent plug.',
    },
    {
      step: 'Test supply, batteries and charging',
      body: 'We test mains voltage against LiftMaster’s 10 percent guideline, both batteries under load, the charge harness, and accessory draw against the 500 mA limit.',
    },
    {
      step: 'Quote, repair and re-verify',
      body: 'You approve the price before work starts. Afterwards we re-teach limits if the drivetrain changed, let the automatic force cycle complete, and test the reversal in both directions with the external devices connected.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between the CSL24UL and the SL3000UL?',
      a: 'The CSL24UL is a 24 Vdc operator with onboard batteries and electronic limits, rated to 1,500 lb and 50 feet of travel. The SL3000UL is an AC Elite Series operator in 1/2 or 1 HP with mechanical limit switches, rated to 2,000 lb (1 HP) and 52 feet, and its manual shows no onboard battery system. The display tells them apart: SL 24 versus SL 30.',
    },
    {
      q: 'How tight should the chain be?',
      a: 'LiftMaster allows no more than 1 inch of sag for every 10 feet of chain. A chain that is too tight loads the sprocket, idlers and gearbox, and one that is too loose slaps and wears teeth. Use lithium spray if you lubricate it, never grease or silicone.',
    },
    {
      q: 'Why does my CSL24UL need two safety devices?',
      a: 'A slide gate can trap someone at either end of its travel. This operator counts its inherent sensing as one layer and requires at least one monitored external device for the close direction and one for the open direction. Without both it logs code 60 and will not run.',
    },
    {
      q: 'What should the gate do when the batteries run down?',
      a: 'That is set with the BATT FAIL switch. Set to OPEN, a gate running on low battery opens and stays open until power returns. Set to CLOSE, it stays shut. LiftMaster suggests OPEN for residential and general-access communities and CLOSE for commercial and industrial sites where security matters more.',
    },
    {
      q: 'Can the CSL24UL run on solar?',
      a: 'Yes. It accepts up to 60 W of 24 Vdc solar and is paired with two 33 Ah batteries and LiftMaster’s solar harness kit. If a solar CSL24UL runs out of cycles, the manual points to panel wattage, shading, accessory draw and battery age, in that order of checks.',
    },
    {
      q: 'How often should the batteries be replaced?',
      a: 'LiftMaster recommends every three years for best performance and specifies its 29-NP712 battery. Replace both together, and do not mix 7 Ah and 33 Ah batteries in the same operator.',
    },
  ],

  relatedModels: ['liftmaster/csw24ul-repair', 'liftmaster/sl3000ul-repair', 'liftmaster/rsl12ul-repair', 'elite/sl595-repair'],
  relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'access-control-repair', 'emergency-gate-repair'],

  sources: [
    {
      label: 'LiftMaster CSL24UL Commercial DC Vehicular Slide Gate Operator installation manual (PDF, distributor-hosted)',
      url: "https://shop.bobsdist.com/documents/CSL24UL_Owner's_Manual.pdf",
    },
    { label: 'LiftMaster CSL24UL product page', url: 'https://www.liftmaster.com/24vdc-high-traffic-commercial-slide-gate-operator/p/CSL24UL' },
    { label: 'LiftMaster CSL24UL installation manual (Devanco Canada copy)', url: 'https://www.devancocanada.com/files/manuals/CSL24UL:Installation-manual.pdf' },
    {
      label: 'Chamberlain Group support: earlier CSL24U installation manual (confirms prior model)',
      url: 'https://support.chamberlaingroup.com/s/article/GATE-LiftMaster-CSL24U-Slide-Gate-Operator-Installation-Manual-1484145708732',
    },
    { label: 'LiftMaster CSL24ULWK product listing (kit variant)', url: 'https://www.liftmaster.com/24vdc-high-traffic-commercial-slide-gate-operator/p/CSL24ULWKMC' },
  ],
  toConfirm: [
    'Battery-backup runtime: a distributor (All Security Equipment) quotes "208 cycles / up to 24 days", but it is not in the manual, so it was omitted.',
    'Distributor copy cites a "10:1 worm gear reduction" and "about 12 inches per second". The manual gives 1 ft/s max and does not state the ratio, so the ratio was omitted.',
    'The manual’s manual-disconnect paragraph refers to a "handle on the operator arm", apparently copied from the swing manual. A technician should confirm the physical release method on a CSL24UL before this is added to the page.',
    'HDSL24UL is named as an upgrade option without specs. Confirm with LiftMaster’s current literature before quoting ratings.',
    'Whether Shield carries CSL24UL chain, sprockets and the K1D8389-1CC board as truck stock.',
    'The CSL24ULWK variant was verified only from its LiftMaster product-page URL and title. Confirm what the kit includes before relying on it.',
  ],
  indexable: true,
}

const sl3000ul: ModelPage = {
  slug: 'sl3000ul-repair',
  brandSlug: 'liftmaster',
  model: 'SL3000UL',
  aliases: ['SL3000501UL', 'SL3000101UL', 'SL3000UL-MC', 'Elite SL3000', 'SL3000U', 'SL3000UL8'],
  descriptor: 'Elite Series commercial AC slide gate operator',
  gateType: 'slide',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'Current LiftMaster Elite Series operator (installation manual 114-5652-000, 2022; product page on LiftMaster.com). Earlier versions were documented as the SL3000U (2015 manual) and the SL3000UL8. The Elite line came to Chamberlain with its 2003 acquisition of Elite Access Systems.',

  title: 'LiftMaster Elite SL3000UL Repair | Dallas–Fort Worth',
  metaDescription:
    'Elite SL3000 or LiftMaster SL3000UL humming, reversing or stuck? We repair capacitors, belts, limits and boards on SL3000 slide operators across DFW.',
  h1: 'LiftMaster SL3000UL Repair: Elite Series Slide Operators',
  heroIntro:
    'Yes, we repair the LiftMaster SL3000UL, the Elite Series AC slide gate operator many owners still call the Elite SL3000. When one hums without moving, stops in the wrong place or trips its alarm, the cause is usually the start circuit, the belt, the limit switches or the gate itself, and the code on its display tells us where to look first.',
  heroPoints: [
    'We check the start capacitor, the power board relay and the drive belt when an SL3000UL hums or shows code 95.',
    'We set the mechanical limit nuts and re-run LiftMaster’s automatic force setup after any chain work.',
    'We roll the gate by hand first: track, wheels and chain are on LiftMaster’s own list of alarm causes.',
  ],

  identify: {
    body: [
      'The SL3000UL is a heavy slide operator on a pad or post beside the opening. Under the cover is an AC motor driving a belt and pulley into a gear reducer with a brake, a drive sprocket turning #41 chain, and a limit switch assembly whose limit nuts are driven by their own small chain and sprocket. There are no batteries inside, and that alone separates it from the DC CSL24UL.',
      "At power-up the display on the control board shows 'SL' followed by '30'. The label reads SL3000501UL for the 1/2 HP version or SL3000101UL for the 1 HP, and distributor kits add '-MC'. Older units may be an SL3000U, covered by LiftMaster’s 2015 manual, or an SL3000UL8, which has its own owner’s manual in Chamberlain’s support library.",
      "The Elite name comes from Elite Access Systems, the California gate operator maker that Chamberlain, LiftMaster’s parent company, acquired in 2003. LiftMaster now sells the SL3000UL in its Elite Series, so 'Elite SL3000' and 'LiftMaster SL3000UL' refer to the same operator family, though codes and boards differ between generations.",
    ],
    lookFor: [
      "Display reading 'SL' then '30' at power-up",
      'AC motor with a belt and pulleys to the gear reducer, and no batteries in the enclosure',
      'Limit switch assembly with two adjustable limit nuts',
      'OPEN LEFT and OPEN RIGHT handing buttons on the control board',
      'A manual release handle that is pulled to free the gate',
      "Label reading SL3000501UL (1/2 HP) or SL3000101UL (1 HP), or Elite branding on older units",
    ],
  },

  overview: [
    {
      heading: 'An AC drivetrain with a brake and a start capacitor',
      body: [
        'The SL3000UL runs a 120-volt AC motor, drawing 6 amps on the 1/2 HP model and 12 amps on the 1 HP. The motor turns a belt and pulley into a gear reducer with a brake, and the reducer drives the sprocket on the chain. Distributor specifications describe the reducer as a 30:1 worm gear in an oil bath. Top travel speed is one foot per second.',
        'Being AC, the motor needs a start capacitor and a relay-switched power board to get going. When a start fails, the board logs code 95, and LiftMaster’s instructions point to three places. If neither the gate nor the motor moves, look for binding in the gate or mechanism, then at the relay board and start capacitor connections. If they do move, the signal from the encoder cup and sensor on the limit shaft has been lost.',
      ],
    },
    {
      heading: 'Mechanical limit switches with electronic supervision',
      body: [
        'Unlike the DC CSL24UL, this operator stops at physical switches. Handing is set with OPEN LEFT or OPEN RIGHT, judged looking out from the property. The gate is then jogged to each end and the limit nut is moved until it contacts its switch at the right point. Leaving setup starts an automatic force cycle with a warning tone, and 00 on the display means it succeeded.',
        'The board still watches those switches. Code 57 is a stuck limit switch, 58 is a wrong limit switch (LiftMaster’s first check is motor wiring), and 50 is a run distance that no longer matches what was learned. The reversal force dial works in two bands: settings 1–3 are fixed, and 4–10 raise force automatically as the gate wears or the weather changes.',
      ],
    },
    {
      heading: 'Two horsepower ratings and several supply voltages',
      body: [
        'The 1/2 HP SL3000501UL is rated to 1,000 lb and the 1 HP SL3000101UL to 2,000 lb. Both handle gate travel from 4 to 52 feet and are rated for continuous duty in UL 325 Class I through IV. For sites without 120-volt service, LiftMaster’s 3PHCONV transformer kit lets the operator run from 208, 240, 480 or 575 volts single-phase.',
        'The trade-off is power backup. The SL3000UL moves heavier gates than the 1,500-lb CSL24UL, but its installation manual includes no onboard battery system, so a mains failure stops the gate unless the site has planned for it. On an entrance that must open for residents or emergency vehicles during a storm, that matters.',
      ],
    },
    {
      heading: 'Two boards and a current sensor',
      body: [
        'Electrical faults on this operator split between the main control board, which handles the display, radio and inputs, and a power board that switches the motor. Code 47 is a relay fault on the power board, 59 means the main board cannot see the power board, and 96 is a current sensor fault that needs a power cycle once corrected. Replacing the main board when the relay is at fault fixes nothing.',
        'Codes 55 and 56 report AC overvoltage and undervoltage. LiftMaster’s advice for overvoltage is to call the utility, and for undervoltage to check the wiring and wire gauge to the operator. A 1 HP unit at the end of a long, undersized run can drop voltage every time it starts.',
      ],
    },
  ],

  specs: [
    { label: 'Operator type', value: 'Elite Series commercial AC vehicular slide gate operator, UL 325 Class I, II, III and IV' },
    { label: 'Models', value: 'SL3000501UL (1/2 HP); SL3000101UL (1 HP)' },
    { label: 'Main AC supply', value: '120 Vac: 6 A (12 A with accessory outlets) on 1/2 HP; 12 A (18 A) on 1 HP' },
    { label: 'Optional supply', value: '208/240/480/575 Vac single-phase with LiftMaster 3PHCONV transformer kit' },
    { label: 'Maximum gate weight', value: '1,000 lb (1/2 HP); 2,000 lb (1 HP)' },
    { label: 'Gate travel distance', value: '4 ft minimum; 52 ft maximum' },
    { label: 'Maximum travel speed', value: '1 ft per second' },
    { label: 'Duty cycle', value: 'Continuous' },
    { label: 'Limits', value: 'Mechanical limit switches with adjustable limit nuts' },
    { label: 'Accessory power', value: '24 Vdc, 500 mA max' },
    { label: 'Operating temperature', value: '-4°F to 140°F without heater; -40°F to 140°F with optional heater' },
    { label: 'Display ID at power-up', value: 'SL 30' },
  ],

  symptoms: [
    {
      symptom: 'The motor hums or clicks but the gate does not move.',
      causes:
        'A failed start (code 95): a weak or poorly connected start capacitor, a relay fault on the power board (code 47), a slipping or broken drive belt, or a gate jammed in its track.',
      whatWeDo:
        'We pull the manual release and roll the gate to rule out binding, then test the capacitor and its connections, inspect the belt and pulleys, and check the power board relay. The motor is the last thing we condemn, not the first.',
    },
    {
      symptom: 'The gate overshoots, or stops a foot short of where it used to.',
      causes:
        'Limit nuts that have crept, a worn limit chain or sprocket, a stuck limit switch (code 57), or a drive chain that has stretched enough to change where the gate is when the switch trips.',
      whatWeDo:
        'We tension the drive chain first, since LiftMaster notes limits may need resetting after chain adjustments. Then we inspect the limit assembly, reset the nuts, and let the automatic force setup run again.',
    },
    {
      symptom: 'After a board replacement or rewiring, the gate runs the wrong way or will not run.',
      causes:
        'Handing set for the wrong side, or motor wiring that disagrees with the handing (code 58). A new main board also raises a product ID error (code 36) until the limits are erased and set again.',
      whatWeDo:
        'We set handing looking out from the property, check the motor and limit harness wiring, then erase and re-learn limits on the new board.',
    },
    {
      symptom: 'The gate stalls partway and the alarm sounds until someone resets it.',
      causes:
        'Two inherent detections in a row. LiftMaster lists the causes for this operator as the gate hitting a wall or vehicle, a gate that does not meet specifications, debris such as mud or rocks in the track, broken axles or wheels, and a wheel off the rail.',
      whatWeDo:
        'We clear the track, repair wheels or guides, press the reset button to silence the alarm, and confirm the gate still reverses on contact in both directions.',
    },
    {
      symptom: 'It throws codes or trips when the power on site is weak.',
      causes:
        'Supply voltage outside the range the board accepts (codes 55 and 56), brownouts (code 53), or wire too small for a long run. The 1 HP model draws 12 A before accessories.',
      whatWeDo:
        'We measure voltage at the operator while the motor starts (LiftMaster wants it within 10 percent of rating), compare wire gauge with the run length, and involve the utility where the supply itself is the problem.',
    },
    {
      symptom: 'Squealing, slapping or a burnt-rubber smell from the enclosure.',
      causes:
        'A slack, glazed or cracked drive belt or a misaligned pulley, or a drive chain with excessive sag. Both belt and pulley and chain and sprockets are on LiftMaster’s maintenance chart for this operator.',
      whatWeDo:
        'We replace or re-tension the belt, align the pulleys, and bring chain sag within 1 inch per 10 feet, lubricating only with lithium spray as the manual requires.',
    },
    {
      symptom: 'The gate opens but will not close automatically.',
      causes:
        'An active open or close input, a stuck loop detector, the Timer-to-Close set to zero, or the gate hold open feature, which is switched on and off at the reset button.',
      whatWeDo:
        'We read the input and status LEDs, check whether hold open has been activated, correct the device responsible and set the timer for the site.',
    },
  ],

  components: [
    {
      part: 'Start capacitor',
      whatItDoes: 'Gives the AC motor the starting kick it needs to break the gate away from a standstill.',
      failureSigns: 'A hum with no movement, slow or hesitant starts, or code 95 with the gate free to roll.',
      verdict: 'replace-part',
    },
    {
      part: 'Power board (single phase)',
      whatItDoes: 'Switches the motor through relays under instruction from the main board, and hosts current sensing.',
      failureSigns: 'Code 47 relay fault, 59 missing power board, or 96 current sensor fault.',
      verdict: 'replace-part',
    },
    {
      part: 'Main control board (K1D6761-1CC)',
      whatItDoes: 'Runs the display, radio receiver, safety and loop inputs, timer and diagnostic history.',
      failureSigns: 'Code 31 that returns after a 15-second power-down, or no display with good supply voltage.',
      verdict: 'replace-part',
    },
    {
      part: 'Drive belt and pulleys',
      whatItDoes: 'Carry power from the motor to the gear reducer.',
      failureSigns: 'Squeal, slip under load, glazing, cracking, or visible slack.',
      verdict: 'service',
    },
    {
      part: 'Gear reducer and brake',
      whatItDoes: 'Reduces motor speed to chain torque and holds the gate when the motor stops.',
      failureSigns: 'Grinding, oil leaks, coasting past the limit, or play at the drive sprocket.',
      verdict: 'service',
    },
    {
      part: 'Limit switch assembly, limit nuts and limit chain',
      whatItDoes: 'Stop the gate at its open and close positions.',
      failureSigns: 'Overtravel, stopping short, or codes 57 and 58.',
      verdict: 'adjust',
    },
    {
      part: '#41 drive chain and drive sprocket',
      whatItDoes: 'Transfer reducer output to the gate through eye bolts at each end.',
      failureSigns: 'More than 1 inch of sag per 10 feet, hooked sprocket teeth, or chain slap at start.',
      verdict: 'adjust',
    },
    {
      part: 'RPM encoder board and cup',
      whatItDoes: 'Reports motor and gate speed so the board can detect stalls and obstructions.',
      failureSigns: 'Code 93 stall reversals, or code 95 while the motor visibly turns.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'The SL3000UL is built to be serviced. The capacitor, belt, limit assembly, boards and chain are all separate parts, and the gear reducer usually outlasts several of them. Replacement makes sense when the reducer and brake are failing on an old unit, when the site needs the gate to work in outages, or when the gate is heavier than the 1 HP model’s 2,000-lb rating.',
    repair: [
      'Start failures traced to the capacitor, its connections or the power board relay',
      'Worn belts, pulleys, chains and sprockets',
      'Limit switch assemblies and limit nuts that have drifted or stuck',
      'Main or power board failures after a surge',
      'Track, wheel and guide problems that trigger reversals and alarms',
    ],
    replace: [
      'The entrance must work in a power cut. The DC CSL24UL has onboard batteries and is rated to 1,500 lb and 50 feet, so it is an option when the gate fits those limits.',
      'The gate exceeds 2,000 lb, or has grown heavier with added panels or cladding.',
      'The gear reducer and brake have failed on an older unit, and the total approaches a new operator.',
      'An older Elite-branded or SL3000U-generation unit needs boards that can no longer be sourced.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster 7-year residential / 5-year commercial limited warranty to the first purchaser, from the date of purchase, as printed in the SL3000UL installation manual (114-5652-000, 2022).',
    notes: [
      'Multi-family, HOA, retail and industrial gates fall under LiftMaster’s commercial usage classes, where the 5-year term applies.',
      'Gate hardware (rollers, alignment, hinges), interference, improper installation and missed maintenance are excluded.',
      'The earlier SL3000U manual (2015) printed the same 7-year residential / 5-year commercial structure, but the clock runs from the original purchase date, so an older unit is likely out of coverage.',
      'Contact LiftMaster before the unit is dismantled for a warranty claim, with dated proof of purchase.',
    ],
  },

  dfw: [
    {
      heading: 'An AC operator in storm season',
      body: [
        'The SL3000UL has no batteries, so every DFW power cut, whether from spring thunderstorms or the February 2021 ice storm, leaves the gate where it stopped unless someone releases it by hand. For a commercial or apartment entrance, that should be decided before the storm. Many sites have a fire department access input or an agreed manual-release procedure, and some move to battery-backed operators.',
        'The same storms bring lightning. Distributor specifications for this operator cite surge suppression for strikes up to 50 feet away, but a closer strike, or a surge coming in on long loop and edge cables, still reaches the boards. We check grounding and supply wiring whenever a board has failed after a storm.',
      ],
    },
    {
      heading: 'Heat, belts and heavy gates',
      body: [
        'The operator is rated to 140°F without a heater, but a belt drive and a 1 HP motor pulling a heavy industrial gate make heat of their own inside a sun-soaked enclosure. Belts glaze faster, capacitors age and relays work harder. Checking the belt and capacitor at each service costs far less than a no-start on a hot afternoon with trucks waiting.',
      ],
    },
    {
      heading: 'Clay soil under long tracks',
      body: [
        'SL3000UL gates are often long and heavy, and North Texas clay moves the slabs they run on. A heaved track section or a settled receiver post raises the load at one point in the travel, which the RPM sensor reads as a stall. The operator reverses or locks out, exactly as LiftMaster designed it to. Levelling the track fixes the cause. Raising the force dial only hides it.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the display and code history',
      body: 'We hold STOP, then CLOSE, then OPEN until Er appears, and scroll back through up to 20 saved codes. An AC-side code (47, 55–59, 95, 96) sends us somewhere very different from a safety input code.',
    },
    {
      step: 'Pull the manual release and roll the gate',
      body: 'We move the gate its full length by hand, only when it is stopped, and fix wheels, track and guides before touching settings.',
    },
    {
      step: 'Measure the supply under load',
      body: 'We check voltage at the operator while the motor starts, confirm wire gauge suits the run, and check fuses and grounding.',
    },
    {
      step: 'Inspect the drivetrain and start circuit',
      body: 'We check the capacitor and its connections, the belt and pulleys, the reducer and brake, the drive chain and sprocket, and the limit switch assembly.',
    },
    {
      step: 'Quote, repair, reset limits and test',
      body: 'After you approve the quote and the repair is done, we reset the limit nuts if the drive changed, let the automatic force setup finish at 00, and run the obstruction test in both directions.',
    },
  ],

  faqs: [
    {
      q: 'Is the Elite SL3000 the same as the LiftMaster SL3000UL?',
      a: 'They are the same operator family. Elite Access Systems was acquired by Chamberlain, LiftMaster’s parent company, in 2003, and LiftMaster sells the SL3000UL as part of its Elite Series. Generations differ, though. The SL3000U, SL3000UL8 and current SL3000UL each have their own manual, so we confirm yours from the label before ordering a board.',
    },
    {
      q: 'Does the SL3000UL have battery backup?',
      a: 'Not on board. It is an AC operator and its installation manual includes no internal battery system, so it stops when mains power is lost. If your entrance must keep working during outages, ask us about the options, including LiftMaster’s DC CSL24UL where the gate is within its 1,500-lb rating.',
    },
    {
      q: 'Do I have the 1/2 HP or the 1 HP model, and does it matter?',
      a: 'The label tells you: SL3000501UL is 1/2 HP and rated to 1,000 lb, and SL3000101UL is 1 HP and rated to 2,000 lb. It matters for parts, since the manual lists some drive parts by horsepower, and for the supply, since the 1 HP draws 12 A at 120 V against 6 A for the 1/2 HP.',
    },
    {
      q: 'What does code 95 mean?',
      a: 'The AC motor did not start. If neither the gate nor the motor moves, LiftMaster says to check for an obstructed gate, binding in the mechanism, and the relay board and start capacitor connections. If they are moving, the fault is a lost encoder signal from the cup and sensor on the limit shaft.',
    },
    {
      q: 'How do I move the gate by hand?',
      a: 'Pull the manual release handle to free the gate so it can be pushed open or closed. Only do it when the gate has stopped. Before returning to normal operation, make sure the release has re-engaged and nobody is in the gate’s path.',
    },
    {
      q: 'Can you repair an older Elite or SL3000U operator?',
      a: 'Often, yes. The drivetrain parts are the same kind of hardware. Boards, codes and harnesses changed between generations, so we identify the exact model first, tell you whether the parts are available, and order them before quoting if they are not on hand.',
    },
  ],

  relatedModels: ['liftmaster/csl24ul-repair', 'liftmaster/csw200ul-repair', 'elite/sl595-repair'],
  relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'electric-gate-repair', 'emergency-gate-repair'],
  imageSlugs: ['liftmaster-03'],

  sources: [
    {
      label: 'LiftMaster Elite Series SL3000UL Commercial High-Traffic AC Slide Gate Operator installation manual, 114-5652-000, 2022 (PDF, distributor-hosted)',
      url: "https://shop.bobsdist.com/documents/SL3000UL_Owner's_Manual.pdf",
    },
    { label: 'LiftMaster SL3000UL product page', url: 'https://www.liftmaster.com/sl3000ul-slide-gate-operator/p/SL3000UL' },
    {
      label: 'LiftMaster Elite Series SL3000 (SL3000501U / SL3000101U) installation manual, 2015 (PDF)',
      url: 'https://www.aegates.com/wp-content/uploads/2021/07/liftmaster-gate-operator-sl3000-gate-manual.pdf',
    },
    {
      label: 'Chamberlain Group support: Elite Series SL3000UL8 owner’s manual',
      url: 'https://support.chamberlaingroup.com/s/article/Gates-LiftMaster-Elite-Series-SL3000UL8-Vehicular-Slide-Gate-Operator-Owner-s-Manual-1484145672364',
    },
    {
      label: 'Gate Depot: LiftMaster SL3000UL-MC listing (reducer ratio, surge suppression, warranty — distributor claims)',
      url: 'https://gatedepot.com/liftmaster-sl3000ul-mc-high-traffic-slide-gate-operator',
    },
    { label: 'AAA Remotes: Chamberlain acquires Elite Access Systems (2003)', url: 'https://www.aaaremotes.com/chamberlain-acquires-elite-access-systems/' },
  ],
  toConfirm: [
    'Maximum gate length differs by source: the 2022 manual says 52 ft of travel, while distributor listings say 50 ft. The page uses the manual figure.',
    'The 30:1 worm-gear reduction and the "surge suppression up to 50 ft" figure come from distributor listings only and are attributed as such.',
    'The manual shows no onboard battery backup. Confirm whether LiftMaster offers a UPS or battery accessory for the SL3000UL before promising outage operation.',
    'The manual lists some drive parts (belt, gear pulley) by horsepower, and the part-to-HP mapping in the PDF text was ambiguous, so no belt part numbers are given.',
    'brand-depth.ts and landing-pages.ts present the SL3000UL under the Elite brand. The current product is LiftMaster-branded (Elite Series), so the brand pages should say so.',
    'Image liftmaster-03 is captioned as an SL3000. Confirm that the photographed unit is the current SL3000UL rather than an SL3000U.',
  ],
  indexable: true,
}

const csw200ul: ModelPage = {
  slug: 'csw200ul-repair',
  brandSlug: 'liftmaster',
  model: 'CSW200UL',
  aliases: ['CSW200501UL', 'CSW200101UL', 'CSW200501UL-MC', 'Elite CSW200'],
  descriptor: 'Elite Series commercial AC swing gate operator',
  gateType: 'swing',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'LiftMaster Elite Series swing operator, still sold through LiftMaster distributors at the time of research and documented in LiftMaster’s CSW200UL installation manual (2018 edition hosted on LiftMaster’s partner site). The Elite line came to Chamberlain in 2003.',

  title: 'LiftMaster Elite CSW200UL Repair | Dallas–Fort Worth',
  metaDescription:
    'LiftMaster Elite CSW200UL swing gate humming, stopping short or locking out? We repair limits, arms, capacitors and boards across Dallas–Fort Worth. Call us.',
  h1: 'LiftMaster CSW200UL Repair: Elite Series Swing Operators',
  heroIntro:
    'Yes, we repair the LiftMaster CSW200UL, the Elite Series AC swing gate operator built for long leaves and high-traffic entrances. When one stops short, fights its own arm or will not start, we check the limit switches, the arm geometry and the start circuit before anything else.',
  heroPoints: [
    'We check the arm against LiftMaster’s C + D = E measurement before we touch force settings.',
    'We reset the limit switches and re-learn force and run distance together, as the manual requires.',
    'We test the start capacitor connections and power board when the display shows code 95 or 47.',
  ],

  identify: {
    body: [
      'The CSW200UL is a pad- or post-mounted swing operator with a two-section arm running from its output shaft to a bracket welded on the gate. The arm fits over a pin on the output shaft and is locked down with a handle. It is an AC operator, so there are no batteries in the enclosure.',
      "The control board display shows 'SG' followed by '20' at power-up. That distinguishes it from LiftMaster’s DC CSW24UL, which shows 'SG 24', carries two batteries and sets its limits electronically. The label will read CSW200501UL for the 1/2 HP version or CSW200101UL for the 1 HP.",
      'Older installations may carry Elite branding. Chamberlain acquired Elite Access Systems in 2003, and LiftMaster sells this operator in its Elite Series, so an Elite CSW200 on an older gate is the same family. The installation manual we worked from is LiftMaster’s 2018 CSW200UL edition, and newer revisions may differ in detail.',
    ],
    lookFor: [
      "Display reading 'SG' then '20' at power-up",
      'A two-section arm locked onto the output shaft with a handle',
      'No batteries inside the enclosure',
      'OPEN LEFT and OPEN RIGHT handing buttons on the control board',
      'Open and close limit switches set by an adjustable nut or cam',
      'Label reading CSW200501UL (1/2 HP) or CSW200101UL (1 HP)',
    ],
  },

  overview: [
    {
      heading: 'Rated for longer leaves than the DC swing operator',
      body: [
        'LiftMaster rates the 1/2 HP CSW200501UL for 600 lb on a 20-foot leaf and the 1 HP CSW200101UL for 1,000 lb on a 22-foot leaf. Both open 90 degrees in about 20 seconds, travel up to 115 degrees, and are rated for continuous duty in UL 325 Class I through IV. The DC CSW24UL tops out at 18 feet, so the 1 HP CSW200UL is the LiftMaster swing operator to look at for long leaves.',
        'At 120 volts the 1/2 HP draws 6 amps and the 1 HP draws 12, before anything is plugged into the accessory outlets. LiftMaster’s 3PHCONV transformer kit adapts either model to 208, 240, 480 or 575 volts single-phase, which is common at industrial sites.',
      ],
    },
    {
      heading: 'Limits at the switch, then force and run distance',
      body: [
        'Setting up a CSW200UL takes two steps that must not be separated. First, handing is chosen with OPEN LEFT or OPEN RIGHT, looking out from the property, and the gate is run to each position with the test buttons while the limit nut or cam is moved to contact its switch. Then both handing buttons are pressed, the button under the lit LED is pressed, and one full cycle lets the board learn force and run distance.',
        'The manual is explicit that force and run distance must be learned again after every limit readjustment. If they are not, the board keeps comparing each cycle with old values, which shows up as run-distance errors (code 50) or reversals on a gate that is otherwise fine. The force dial has two bands: settings 1–3 are fixed, and 4–10 raise force automatically with wear and temperature.',
      ],
    },
    {
      heading: 'Arm geometry decides how hard the motor works',
      body: [
        'The arm has two sections, which are lengthened or shortened in proportion. With the gate closed, the manual has you measure one distance (E). With the gate open 90 degrees, you measure each arm section (C and D). The arm is correct when C + D = E, with the arm perpendicular to the gate and the two sections not scissoring at full open. Only then are the sections welded and the set screws removed.',
        'An arm outside that geometry makes the motor fight leverage at one end of the swing. LiftMaster’s list of alarm causes for this operator starts with an incorrectly installed arm or gate, followed by gates out of specification and tight or broken hinges. For drives that climb as the gate opens, LiftMaster offers an uphill swivel arm (K75-50292).',
      ],
    },
    {
      heading: 'Start circuit, power board and current sensing',
      body: [
        'When the AC motor fails its start sequence, the CSW200UL logs code 95. If neither gate nor motor moves, LiftMaster points to binding, the relay board and the start capacitor connections. If they do move, the encoder cup and sensor on the limit shaft have lost signal. Code 47 is a relay fault on the power board, 59 a missing power board, and 96 a current sensor fault that needs a power cycle once repaired.',
        'The supply codes matter at the long cable runs typical of estate and industrial swing gates. Code 55 is AC overvoltage, where the manual says to call the utility, and 56 is undervoltage, where it says to check the wiring and wire gauge.',
      ],
    },
  ],

  specs: [
    { label: 'Operator type', value: 'Elite Series commercial AC vehicular swing gate operator, UL 325 Class I, II, III and IV' },
    { label: 'Models', value: 'CSW200501UL (1/2 HP); CSW200101UL (1 HP)' },
    { label: 'Main AC supply', value: '120 Vac: 6 A (12 A with accessory outlets) on 1/2 HP; 12 A (18 A) on 1 HP' },
    { label: 'Optional supply', value: '208/240/480/575 Vac single-phase with LiftMaster 3PHCONV transformer kit' },
    { label: 'Maximum gate weight / length', value: '600 lb / 20 ft (1/2 HP); 1,000 lb / 22 ft (1 HP)' },
    { label: '90-degree travel time', value: '20 seconds (varies with mounting dimensions)' },
    { label: 'Maximum travel range', value: '115 degrees' },
    { label: 'Duty cycle', value: 'Continuous' },
    { label: 'Limits', value: 'Limit switches set by nut or cam; force and run distance learned in a setup cycle' },
    { label: 'Accessory power', value: '24 Vdc, 500 mA max' },
    { label: 'Operating temperature', value: '-4°F to 140°F without heater; -40°F to 140°F with optional heater' },
    { label: 'Display ID at power-up', value: 'SG 20' },
  ],

  symptoms: [
    {
      symptom: 'I hear the motor try, but the leaf does not swing.',
      causes:
        'A failed start (code 95) from a weak or loose start capacitor connection, a relay fault on the power board (code 47), a slipping belt, or a leaf jammed against a hinge, post or rising ground.',
      whatWeDo:
        'We release the arm handle and swing the leaf by hand. If it moves freely, we test the capacitor and its connections, check the belt and pulley, and read the power board status before discussing any motor.',
    },
    {
      symptom: 'The gate stops short of fully open or closed after someone adjusted it.',
      causes:
        'Limits changed without force and run distance being re-learned, a limit nut or cam that has slipped, a stuck limit switch (code 57), or a run-distance error (code 50).',
      whatWeDo:
        'We reset each limit at its switch and then run the force and run-distance learning cycle, which LiftMaster requires after every limit change.',
    },
    {
      symptom: 'The alarm sounds and the operator locks out until it is reset.',
      causes:
        'Two inherent detections in a row. LiftMaster’s list for this operator: an incorrectly installed arm or gate, a gate out of specification, hinges too tight or broken, a car pushing the gate, a foreign object on the gate frame, or the gate hitting the driveway or curb and jamming.',
      whatWeDo:
        'We check the C + D = E arm geometry, hinges and ground clearance through the swing, correct what is wrong, and only then reset the operator.',
    },
    {
      symptom: 'It runs the wrong way, or shows codes after the board was changed.',
      causes:
        'Handing set for the wrong side of the drive, motor wiring that does not match the limit switches (code 58), or a new board raising product ID errors (codes 36 and 37).',
      whatWeDo:
        'We set handing as viewed from inside the property (reversed for gates mounted outside), check the harnesses, then set limits, force and run distance on the new board.',
    },
    {
      symptom: 'The gate will not run at all and the display shows 60.',
      causes:
        'No monitored external entrapment device detected. This swing operator needs at least one monitored photo eye or edge in the open or close direction. On a wide opening, photo eyes mounted too far apart also fail.',
      whatWeDo:
        'We check the device wiring and monitoring, and where the opening is wider than the photo eyes’ rated separation we fit edge sensors instead, as LiftMaster directs.',
    },
    {
      symptom: 'Our double gate opens out of sequence or the leaves clash.',
      causes:
        'Bipart delay set the same on both operators, or lost communication with the second operator (code 54).',
      whatWeDo:
        'We set bipart delay ON only on the leaf that should open second and close first, and restore the wired or wireless link between the two operators.',
    },
    {
      symptom: 'It works most of the time but faults when the power on site dips.',
      causes:
        'Undervoltage (code 56) from a long or undersized supply run, overvoltage (code 55) from the utility, or brownouts (code 53). The 1 HP model draws 12 A before accessories.',
      whatWeDo:
        'We measure voltage at the operator while the motor starts, compare it with LiftMaster’s 10 percent tolerance, and check wire gauge over the run.',
    },
  ],

  components: [
    {
      part: 'Start capacitor and connections',
      whatItDoes: 'Help the AC motor start the leaf moving from rest.',
      failureSigns: 'The motor tries without the leaf moving, or code 95 on a free-swinging gate.',
      verdict: 'replace-part',
    },
    {
      part: 'Power board',
      whatItDoes: 'Switches the motor through relays and carries current sensing for obstruction detection.',
      failureSigns: 'Codes 47, 59 or 96.',
      verdict: 'replace-part',
    },
    {
      part: 'Main control board',
      whatItDoes: 'Handles handing, limits, radio, safety and loop inputs, dual-gate communication and the code history.',
      failureSigns: 'Code 31 that returns after a 15-second power-down, or a dark display with good supply.',
      verdict: 'replace-part',
    },
    {
      part: 'Limit switches and limit nut or cam',
      whatItDoes: 'Stop the leaf at its open and close positions.',
      failureSigns: 'Stopping short, overtravel, or codes 57 and 58.',
      verdict: 'adjust',
    },
    {
      part: 'Operator arm, handle and output shaft pin',
      whatItDoes: 'Transfers torque from the output shaft to the gate, and releases from the shaft for manual operation.',
      failureSigns: 'Slop at the shaft, a handle that will not seat, bent sections, or arms that scissor at full open.',
      verdict: 'adjust',
    },
    {
      part: 'Belt and pulley',
      whatItDoes: 'Transmit motor power into the gear train.',
      failureSigns: 'Squeal, slip under load, or visible wear and slack.',
      verdict: 'service',
    },
    {
      part: 'Hall effect sensor board and encoder cup',
      whatItDoes: 'Report shaft rotation so the board can sense stalls and measure run distance.',
      failureSigns: 'Code 93 stall reversals, or code 95 while the motor visibly turns.',
      verdict: 'replace-part',
    },
    {
      part: 'Monitored photo eyes and edges',
      whatItDoes: 'Provide external entrapment protection; the operator will not run without at least one.',
      failureSigns: 'Code 60, reversals with nothing in the swing, or a gate that stays open.',
      verdict: 'adjust',
    },
  ],

  repairOrReplace: {
    summary:
      'A CSW200UL is worth repairing in most cases. The start capacitor, power board, limit switches, arm and belt are all serviceable, and the problem is often geometry or gate hardware rather than the operator itself. Replacement is worth discussing when the entrance needs battery operation, when the leaf exceeds 1,000 lb or 22 feet, or when the gear train is worn on an old unit.',
    repair: [
      'Start failures traced to the capacitor, its connections or the power board',
      'Limits, force and run distance that are out of step after adjustments',
      'Arm geometry, handle or pivot wear causing lockouts',
      'Main or power board failures after lightning or supply problems',
      'Photo-eye, edge and loop faults, including code 60',
    ],
    replace: [
      'The site needs the gate to work through outages. The DC CSW24UL has onboard batteries and is rated to 1,200 lb at 12 feet, 800 lb at 16 feet and 600 lb at 18 feet, so it fits only if the leaf is within those limits.',
      'The leaf is heavier than 1,000 lb or longer than 22 feet, which is beyond both CSW200UL ratings.',
      'The gear train is worn on an older unit and parts plus labor approach the price of a new operator.',
      'An older Elite-branded operator needs boards that are no longer available.',
    ],
  },

  warranty: {
    manufacturer:
      'LiftMaster 7-year residential / 5-year commercial limited warranty to the first purchaser, from the date of purchase, as printed in the 2018 CSW200UL installation manual.',
    notes: [
      'Distributor listings for the CSW200UL describe the same 5-year commercial and 7-year residential terms.',
      'Non-defect damage, improper installation or care, gate hardware such as hinges and alignment, and interference are excluded.',
      'Failure to follow the manual’s installation, maintenance and testing instructions voids the limited warranty in its entirety.',
      'LiftMaster asks to be contacted before the operator is dismantled. Check the purchase date on your installer’s paperwork first.',
    ],
  },

  dfw: [
    {
      heading: 'Long leaves on moving ground',
      body: [
        'The CSW200UL often hangs 20- and 22-foot leaves, and the longer the leaf, the more a small lean at the hinge post shows up at the far end. North Texas clay swells and shrinks with the seasons, so posts move, leaves drop and the tip starts dragging or catching the drive, which is on LiftMaster’s own list of lockout causes. We check post plumb and hinge condition before touching limits or force.',
      ],
    },
    {
      heading: 'Wind, storms and supply problems',
      body: [
        'A long solid leaf acts like a sail in a spring storm. LiftMaster notes the force dial exists to fine-tune for wind and similar conditions, which is exactly why it must not be cranked up to hide a mechanical problem. The same storms bring lightning and voltage dips that show up as board failures and codes 53, 55 or 56 on an AC operator.',
      ],
    },
    {
      heading: 'No batteries when the grid fails',
      body: [
        'Being AC-only, the CSW200UL stops when power does. A long outage, like the February 2021 freeze, means releasing the arm handle and swinging the leaf by hand, which matters on HOA and apartment gates with many residents behind them. If that is not acceptable, we can price battery-backed options that fit your leaf length and weight.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the code history',
      body: 'We view the saved codes on the SG 20 display, up to 20 of them, and note whether they are start or power-board codes, limit codes or safety input codes.',
    },
    {
      step: 'Release the arm and check the swing',
      body: 'With the gate stopped, we release the arm handle and swing the leaf by hand, checking hinges, post plumb and ground clearance along the arc.',
    },
    {
      step: 'Verify arm geometry and mounting',
      body: 'We measure C, D and E against LiftMaster’s setup and confirm the arm is perpendicular to the gate at 90 degrees without scissoring.',
    },
    {
      step: 'Test the supply and start circuit',
      body: 'We check voltage at the operator during a start, the capacitor and its connections, the belt and pulley, and the power board.',
    },
    {
      step: 'Quote, repair, reset limits, re-learn force',
      body: 'Once you approve the price, we repair, set the limits at the switches, run the force and run-distance learning cycle, and test obstruction reversal in both directions.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between the CSW200UL and the CSW24UL?',
      a: 'The CSW200UL is an AC Elite Series operator with mechanical limit switches, in 1/2 or 1 HP, rated up to 1,000 lb on a 22-foot leaf. The CSW24UL is 24 Vdc with onboard batteries and electronic limits, rated to 1,200 lb at 12 feet and 600 lb at 18 feet. The displays differ too: SG 20 versus SG 24.',
    },
    {
      q: 'Does the CSW200UL keep working in a power outage?',
      a: 'No. It is an AC operator and its manual shows no onboard battery system. In an outage the arm has to be released so the gate can be moved by hand. If your entrance needs outage operation, a battery-backed operator is the answer, provided it is rated for your leaf.',
    },
    {
      q: 'How is the arm released from the operator?',
      a: 'The arm sits over a pin on the output shaft and is held by a handle. Releasing the handle lets the arm come free, and pushing it back down with the pin in its slot secures it again. Only do this when the gate is not moving, and check the gate is not on a slope that will make it swing on its own.',
    },
    {
      q: 'Why did my gate start stopping short after the limits were adjusted?',
      a: 'On the CSW200UL, limits and learned force and run distance go together. After any limit change, both handing buttons are pressed and a full cycle is run so the board learns the new values. Skip that and the board judges each run against the old values.',
    },
    {
      q: 'My driveway rises as the gate opens. Is the CSW200UL still suitable?',
      a: 'It can be. LiftMaster lists an uphill swivel arm (K75-50292) for the CSW200UL. The gate itself must still clear the ground through its whole swing, because a leaf that hits the driveway is one of LiftMaster’s listed causes of alarm lockouts.',
    },
    {
      q: 'Is an Elite CSW200 the same as a LiftMaster CSW200UL?',
      a: 'It is the same family: LiftMaster sells the CSW200UL in its Elite Series, following Chamberlain’s 2003 acquisition of Elite Access Systems. Older Elite-branded units can differ in boards and codes, so we identify yours from the label before ordering parts.',
    },
  ],

  relatedModels: ['liftmaster/csw24ul-repair', 'liftmaster/sl3000ul-repair', 'liftmaster/rsw12ul-repair'],
  relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'electric-gate-repair', 'access-control-repair'],

  sources: [
    {
      label: 'LiftMaster Elite Series CSW200UL Commercial High-Traffic AC Swing Gate Operator installation manual, 2018 (PDF, LiftMaster partner site)',
      url: 'https://partner.liftmaster.com/medias/Model-CSW200UL-0139374.pdf?context=bWFzdGVyfGxpdGVyYXR1cmV8ODU2NjQ2NnxhcHBsaWNhdGlvbi9wZGZ8bGl0ZXJhdHVyZS9oY2QvaDY5LzkwMzg4MjIyMTE2MTQucGRmfGE1ZGU2NjUwYjZkMGJhMWMwMjgwNDg3MGU2ODlhNzQxYzQ5ZmQ3ZDE2ZGY1Y2QxZWNmZmVjMDIwNmZhNTg5NzU&attachment=true',
    },
    { label: 'LiftMaster CSW200UL installation manual (Republic Fence copy of the same PDF)', url: 'https://www.republicfenceco.com/wp-content/uploads/2021/09/CSW200UL.pdf' },
    {
      label: 'Gate Depot: LiftMaster Elite CSW200501UL-MC listing (current distributor availability)',
      url: 'https://gatedepot.com/liftmaster-elite-csw200501ul-mc-1-2-hp-swing-gate-operator-bundle',
    },
    { label: 'AAA Remotes: Chamberlain acquires Elite Access Systems (2003)', url: 'https://www.aaaremotes.com/chamberlain-acquires-elite-access-systems/' },
  ],
  toConfirm: [
    'Rating conflict: distributor listings claim "18 ft / 1,200 lb per leaf" and "22 ft / 2,000 lb", but the 2018 manual gives 600 lb / 20 ft (1/2 HP) and 1,000 lb / 22 ft (1 HP). The page uses the manual. Confirm against LiftMaster’s current spec sheet.',
    'Current production status: no LiftMaster.com product page could be retrieved (HTTP 403 on liftmaster.com). Status is based on distributor listings and the manual hosted on LiftMaster’s partner site.',
    'The manual used is the 2018 edition. A later revision may change codes or parts.',
    'Manual release: the manual describes releasing the arm handle to remove the arm from the output shaft during cover installation. A technician should confirm this is also the field manual-release method.',
    'Distributor claims of a "900:1 worm gear reduction" and "surge protection up to 50 ft" were not verified and are not on the page.',
    'CSW200UL repair part numbers in the manual text were not reliably matched to part names, so none are given apart from the uphill swivel arm (K75-50292), which is listed by name.',
  ],
  indexable: true,
}

export const liftmasterCommercialModels: ModelPage[] = [csw24ul, csl24ul, sl3000ul, csw200ul]
