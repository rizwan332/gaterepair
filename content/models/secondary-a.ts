/**
 * Model pages — secondary brands, group A: HySecurity, Linear, Apollo, Nice.
 *
 * Researched Sept 2026 from manufacturer manuals, spec pages and the published
 * HySecurity warranty. No photos, projects or videos exist for any of these
 * brands, so every evidence array is empty.
 *
 * Deliberately NOT written:
 *  - Nice (Wingo, Toona, Robus, Road, Metro, Ten). None of these appears in
 *    Nice's North American gate operator lineup (niceforyou.com/na), which is
 *    made up of Apollo, HySecurity and Nice-badged US products (Juno, TITAN,
 *    Vanguard 3501, 7251/7351, SwingSmart/SlideSmart 535). A US "Nice" model
 *    page would duplicate the Apollo page or describe equipment we cannot show
 *    is common here.
 *  - HySecurity HydraSwing, StrongArm, SlideSmart DC, SwingRiser: two-page cap
 *    per brand; SlideDriver and SwingSmart DC have the best manual coverage.
 *  - Linear slide (SLR/SLC/SLD): shares the APeX controller and most of its
 *    fault logic with the SW Series, so a second page would overlap heavily.
 */

import type { ModelPage } from './types'

const slidedriver: ModelPage = {
  slug: 'slidedriver-repair',
  brandSlug: 'hysecurity',
  model: 'SlideDriver',
  aliases: [
    'SlideDriver II',
    'SD15',
    'SD40',
    'SD50F',
    'SD80V',
    'SD200V',
    'SlideDriver 10',
    'SlideDriver 30F',
    'SlideDriver 40',
    'SlideDriver 50VF2',
    'SlideDriver 50VF3',
    'SlideDriver 80',
    'SlideDriver 200',
    '222 SS',
    '222 E',
    '222 EX',
    '222 X1',
    '222 X2',
    '222 X3',
    '444 XS',
  ],
  descriptor: 'hydraulic industrial slide gate operator with drive wheels on a rail',
  gateType: 'slide',
  duty: 'industrial',
  status: 'current',
  statusNote:
    'SlideDriver II (SD15, SD40, SD50F, SD80V, SD200V, SmartTouch 725 controller) is the current line. The earlier Smart Touch generation (SlideDriver 10, 30F, 40, 50VF2/3, 80, 200, also known by 222/444 codes) is superseded; distributors list the SD50F as the replacement for the 222 X3.',

  title: 'HySecurity SlideDriver Repair | Dallas–Fort Worth',
  metaDescription:
    'HySecurity SlideDriver showing SAFE, Entr or FAL1, or pump running but gate not moving? We repair SlideDriver and SlideDriver II across DFW. Call 24/7.',
  h1: 'HySecurity SlideDriver Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair HySecurity SlideDriver hydraulic slide operators, both the original Smart Touch units and the current SlideDriver II. The usual call is a heavy gate that stops with SAFE or Entr on the display, or a pump that runs while the drive wheels barely turn.',
  heroPoints: [
    'We read the Smart Touch alert, fault or error code and the pressure gauge before any part is priced',
    'We check the red clamp-spring height and the drive rail alignment, which cause many false entrapment trips',
    'Original 222-series SlideDrivers and SlideDriver II models are both serviced, with parts ordered and lead times stated upfront',
  ],

  identify: {
    body: [
      'A SlideDriver is a pad-mounted steel cabinet that sits beside a slide gate and drives it with two rubber wheels pinching a flat drive rail bolted along the gate. There is no chain and no rack on most models. If you open the cover you will see a hydraulic pump and reservoir, hoses running to the wheel motors, and an electrical enclosure with an LCD controller.',
      'Older units carry a HySecurity model label with names such as SlideDriver 40 or 50VF3, and installers often still call them by the factory codes 222 E, 222 X3 or 444 XS. SlideDriver II units are labeled SD15 through SD200V, have a see-through lid on the electrical enclosure, a two-line OLED display and a digital pressure gauge. The 80V and 200V come with the XtremeDrive polymer rack and wheel instead of a smooth rail.',
    ],
    lookFor: [
      'Flat steel drive rail along the gate, gripped by two drive wheels',
      'Hydraulic reservoir and hoses inside the cabinet',
      'Smart Touch LCD with OPEN, STOP, CLOSE and RESET keys, or a SmartTouch 725 OLED on SlideDriver II',
      'Aluminum toggle handle under the control panel, right of the hydraulic motors (manual release)',
      'Model label reading SlideDriver, SD15–SD200V, or 222/444 codes',
    ],
  },

  overview: [
    {
      heading: 'Hydraulic drive, not a gearbox',
      body: [
        'The electric motor on a SlideDriver never touches the gate. It spins a hydraulic pump, and fluid drives two wheels that clamp the rail. HySecurity states that gate speed is set by pump and actuator size and is not adjustable by valve setting; turning a valve to slow a gate only creates heat. That design is why these operators run continuous duty on gates from 1,500 lb (SD15) up to 20,000 lb (SD200V).',
        'For repair it means most mechanical faults are about grip and pressure. A worn wheel, a weak clamp spring, a rail that has moved out of line or a stiff gate shows up as slipping, high pressure or a tripped inherent sensor long before anything inside the pump is actually worn.',
      ],
    },
    {
      heading: 'The Smart Touch controller tells you where to look',
      body: [
        'The Smart Touch controller logs every alert, fault and error with a date stamp and shows a short code with a distinct buzzer pattern. SAFE and Entr mean the inherent entrapment sensor tripped once and then again. Lo24 and bAdP point to control voltage. ALE5 means both limits read active at once; ALE6 means a limit did not release within 10 seconds of a run command. FAL1 is a maximum run time fault, FAL3 a critical AC sag from undersized supply wire, and Err1 a directional motion error.',
        'Those codes separate a loop detector problem (ALE7 to AL12) from a limit problem from a power problem in minutes, which is why we read the display and the stored log before we open a hose or order a board. SlideDriver II uses the newer SmartTouch 725 and the HySecurity Installer app, so we check its own code list rather than assuming the older table.',
      ],
    },
    {
      heading: 'Pressure is the diagnostic number',
      body: [
        'HySecurity\'s manual gives maximum relief valve settings by model: 1,000 PSI on the SlideDriver 10 and 40, 1,300 PSI on the 30F, 40F and 80, and 2,000 PSI on the 200. If the pump runs and the wheels are slow while the gauge reads 0 to 700 PSI, the manual points at fluid level, pump rotation on three-phase supply, or debris in the relief or quick stop valve. Above 700 PSI, the gate or its hardware is usually fighting the operator.',
        'Winding the relief valve up to push through a binding gate is the classic wrong fix. HySecurity is explicit that the relief valve is of limited value as entrapment protection, and raising it past the rated maximum stresses hoses and seals. We fix the gate first.',
      ],
    },
    {
      heading: 'Two generations on DFW sites',
      body: [
        'Original SlideDrivers built on the 222 and 444 chassis are still running at many industrial and commercial entrances, and most are repairable. SlideDriver II keeps the hydraulic drive but adds contactless solid-state limits, adaptive inherent sensing based on hydraulic pressure, Bluetooth setup, a 100,000-event log, Hy5B detector slots and variable frequency drive motor control on the 80V and 200V.',
      ],
    },
  ],

  specs: [
    { label: 'Current models', value: 'SlideDriver II SD15, SD40, SD50F, SD80V, SD200V' },
    { label: 'Maximum gate weight', value: 'SD15 1,500 lb; SD40 4,000 lb; SD50F 5,000 lb; SD80V 8,000 lb; SD200V 20,000 lb' },
    { label: 'Duty cycle', value: 'Continuous (3,000 ft/hr expected)' },
    { label: 'Horsepower (SlideDriver II)', value: 'SD15 and SD40 1 HP; SD50F 2 HP; SD80V 5 HP; SD200V 4 HP DC option listed' },
    { label: 'Rate of travel', value: 'SD15/SD40 1 ft/s; SD50F 2.2 or 3 ft/s field adjustable; SD200V 0.75 or 1 ft/s' },
    { label: 'Controller', value: 'SmartTouch 725 (SlideDriver II); Smart Touch (earlier SlideDriver)' },
    { label: 'Temperature rating (SlideDriver II)', value: '-40 °F to 158 °F' },
    { label: 'UL 325 (SD40 listing)', value: 'Usage Classes I, II, III and IV' },
    { label: 'Maximum relief setting (earlier models)', value: 'SlideDriver 10/40 1,000 PSI; 30F/40F/80 1,300 PSI; 200 2,000 PSI' },
    { label: 'Hydraulic fluid', value: 'HySecurity Uniflow (part MX000970); never brake fluid' },
  ],

  symptoms: [
    {
      symptom: 'The display says SAFE or Entr and the gate stopped partway',
      causes:
        'The inherent entrapment sensor has tripped once (SAFE) or twice in a row (Entr). Real obstructions do it, but so do a stiff gate, rollers failing, a rail that has shifted out of its 1/4 inch in/out tolerance, a weak clamp spring letting the wheels slip, or a relief valve set too low for the gate.',
      whatWeDo:
        'We release the wheels with the toggle handle and push the gate by hand through full travel. If it drags, the gate is the repair. If it rolls freely, we check spring height, wheel wear and the relief setting against the model maximum.',
    },
    {
      symptom: 'I can hear the pump running but the gate hardly moves',
      causes:
        'With the gauge reading low (0 to 700 PSI), HySecurity lists low fluid, reversed motor rotation on a three-phase supply, or debris in the relief valve or quick stop valve. Worn or glazed drive wheels slipping on the rail give a similar picture.',
      whatWeDo:
        'We read the pressure, check the Uniflow level at the reservoir plug, confirm rotation, and clean or reset the relief valve before looking at pump replacement.',
    },
    {
      symptom: 'The gate only opens, or only closes',
      causes:
        'An external device holding an open or close input on, a stuck directional valve (only opens), or a directional valve coil that is not energizing or has failed (only closes).',
      whatWeDo:
        'We watch the input LEDs to rule out a loop or keypad holding a command, then test the valve coil pull with the Open command before replacing the valve or coil.',
    },
    {
      symptom: 'FAL1 is showing and the gate stops before the end of travel',
      causes:
        'The motor ran longer than the maximum run timer allows. On a SlideDriver that is usually slipping wheels, a lost or misaligned limit trip ramp, or a gate slowed by hardware wear.',
      whatWeDo:
        'We check limit ramps at both ends of the rail, wheel clamp force and gate roll, and only lengthen the run timer if the travel genuinely needs it.',
    },
    {
      symptom: 'Nothing happens when I press open or close, and the screen shows Lo24 or bAdP',
      causes:
        'Low 24V control voltage or critically low power. Causes include a tripped transformer breaker, line voltage outside plus or minus 10% of the operator rating, a missing jumper from Common to Stop, or on DC battery models a dead battery pack.',
      whatWeDo:
        'We measure line voltage at the operator, reset the transformer breaker, test control voltage at the power supply terminals and load-test batteries on DC units.',
    },
    {
      symptom: 'ALE5 or ALE6 on the display',
      causes:
        'ALE5 means both limits are reading tripped at the same time, typically a stuck switch or wiring short. ALE6 means a limit did not release within 10 seconds of a run command, which points at wheels not gripping or a limit switch that is jammed.',
      whatWeDo:
        'We inspect the limit switches, their wiring and the ramps under the rail, then confirm the wheels actually move the gate when commanded.',
    },
    {
      symptom: 'Metal shavings under the operator or a rail that looks chewed',
      causes:
        'HySecurity notes that shavings mean the gate panel or operator is out of alignment. On expansive clay the pad or gate posts can move enough to push the rail out of line.',
      whatWeDo:
        'We square the operator to the gate, shim the drive rail back into tolerance, and replace wheels if they have been damaged.',
    },
  ],

  components: [
    {
      part: 'Drive wheels (AdvanceDrive or XtremeDrive)',
      whatItDoes: 'Two wheels clamp the drive rail and move the gate; XtremeDrive uses a polymer wheel and rack.',
      failureSigns: 'Slipping, glazed or chunked rubber, gate stalling under load, ALE6 or FAL1 codes.',
      verdict: 'replace-part',
    },
    {
      part: 'Manual release toggle and red clamp spring',
      whatItDoes: 'The toggle handle spreads the wheels off the rail for hand operation; the spring sets clamping force.',
      failureSigns: 'Wheels slipping when clamped; HySecurity specifies the red spring at 2 to 2-1/8 inches compressed.',
      verdict: 'adjust',
    },
    {
      part: 'Hydraulic pump, reservoir and Uniflow fluid',
      whatItDoes: 'Converts motor rotation into hydraulic pressure for the wheel motors.',
      failureSigns: 'Low pressure, low fluid, visible leaks at fittings, sluggish travel. HySecurity recommends fluid replacement at five-year intervals, sooner on hot, high-use sites.',
      verdict: 'service',
    },
    {
      part: 'Pressure relief and quick stop valves',
      whatItDoes: 'Limit maximum system pressure and stop gate travel.',
      failureSigns: 'Pressure gauge not responding to adjustment, repeated SAFE or Entr on a free-rolling gate.',
      verdict: 'adjust',
    },
    {
      part: 'Directional valve and coil',
      whatItDoes: 'Switches fluid flow for open and close.',
      failureSigns: 'Gate moves in one direction only, or runs backward.',
      verdict: 'replace-part',
    },
    {
      part: 'Hoses, fittings and O-rings',
      whatItDoes: 'Carry fluid between pump and wheel motors.',
      failureSigns: 'Seeping at fittings, fluid under the cabinet, falling reservoir level.',
      verdict: 'repair',
    },
    {
      part: 'Smart Touch or SmartTouch 725 controller',
      whatItDoes: 'Runs the gate, monitors the inherent sensor, logs alerts, faults and errors.',
      failureSigns: 'Err3, Err7 to Err9 or FAiL on the display, dead screen with power present, surge damage after a storm.',
      verdict: 'replace-part',
    },
    {
      part: 'Limit switches and trip ramps',
      whatItDoes: 'Tell the controller where open and closed are; ramps mount under the rail at each end.',
      failureSigns: 'ALE5, ALE6, overrun or stopping short.',
      verdict: 'adjust',
    },
  ],

  repairOrReplace: {
    summary:
      'A SlideDriver is built to be rebuilt. Wheels, valves, hoses, fluid, limits and controllers are all replaceable, and the chassis and pump usually outlast them by years. Replacement makes sense when the gate has outgrown the model, when an original-generation controller or pump is no longer supported for a specific part, or when the site wants SlideDriver II features such as solid-state limits and remote monitoring.',
    repair: [
      'SAFE, Entr or FAL1 codes caused by wheel grip, rail alignment, limit ramps or gate hardware',
      'Low pressure from fluid level, a dirty relief or quick stop valve, or a leaking fitting',
      'A failed directional valve or coil',
      'A surge-damaged Smart Touch controller where a replacement board is available',
      'Worn drive wheels or a fatigued clamp spring',
    ],
    replace: [
      'The gate has been extended or reclad and now exceeds the model rating, for example a gate beyond 4,000 lb on a SlideDriver 40: move to the SlideDriver II model rated for the weight',
      'A cracked pump housing or chassis on an original-generation unit where the part cannot be sourced',
      'A secure site that needs Bluetooth-free control can specify SlideDriver II with the SmartTouch 720 option',
      'A site running near continuous traffic in all weather may justify XtremeDrive rack on an SD80V or SD200V',
    ],
  },

  warranty: {
    manufacturer:
      'HySecurity\'s published warranty: for operators bought through an authorized HySecurity distributor and registered within 60 days, hydraulic industrial operator hydraulics, controls and mechanical components are covered for five years or 500,000 gate cycles, whichever comes first, from installation. Drive wheels including XtremeDrive wheels and rack are two years; batteries one year from shipment; wear parts such as chains, belts, idler wheels, sprockets and fuses one year. Unregistered or non-authorized purchases get one year or 100,000 cycles from shipment.',
    notes: [
      'Exclusions include damage from severe weather, wind, flood or fire, improper installation or maintenance, and unapproved modifications.',
      'HySecurity places responsibility for keeping controller software at the latest revision on the distributor, installer or end user.',
      'The SlideDriver manual states that using any oil other than Uniflow fluid may void the operator warranty.',
      'Check the model and serial label and your installer\'s registration record to confirm which warranty tier applies.',
    ],
  },

  dfw: [
    {
      heading: 'Heat and hydraulic fluid',
      body: [
        'HySecurity says oil breakdown from heat is the main fluid concern and recommends changing it more often on high-use operators in warm climates. A dark steel cabinet on a south-facing Texas slab in August runs hot, so on busy distribution and logistics gates we check fluid condition rather than waiting for the five-year interval.',
      ],
    },
    {
      heading: 'Clay soil and rail alignment',
      body: [
        'North Texas expansive clay swells after spring rain and shrinks in drought. A slab-mounted SlideDriver needs its drive rail held within a quarter inch in and out over full travel, and a small post or pad shift is enough to push it outside that. Shavings under the wheels, uneven wear and intermittent SAFE trips after a dry spell are the pattern.',
      ],
    },
    {
      heading: 'Storms, lightning and the controller',
      body: [
        'Spring thunderstorms bring surges into long supply runs and loop lead-ins. A Smart Touch that shows Err3, Err7 to Err9, AL16 or a blank screen after a storm has often taken a hit through the power or detector wiring. HySecurity excludes severe weather damage from warranty, so grounding and surge protection are worth checking during the repair.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the display and history',
      body: 'We note the current code, press the LED button to see input status, and pull the logged alerts, faults and errors where the controller allows.',
    },
    {
      step: 'Release the wheels and move the gate by hand',
      body: 'The toggle handle drops the wheels off the rail. A gate that drags, binds or rolls downhill is fixed before any hydraulic work.',
    },
    {
      step: 'Check grip and alignment',
      body: 'Clamp spring height, wheel condition, rail tolerance, and limit ramps at both ends.',
    },
    {
      step: 'Measure pressure and fluid',
      body: 'Gauge reading during a run compared with the model\'s maximum relief setting, Uniflow level, leaks, and pump rotation on three-phase supplies.',
    },
    {
      step: 'Test electrical and controller',
      body: 'Line voltage, 24V control supply, transformer breaker, valve coil, limit and sensor inputs, and loop detectors.',
    },
    {
      step: 'Quote, repair and retest',
      body: 'You get the diagnosis and a quote first. Brand-specific parts are ordered with the lead time stated upfront, and after the repair we confirm the inherent sensor and external sensors reverse the gate.',
    },
  ],

  faqs: [
    {
      q: 'What does SAFE or Entr mean on my HySecurity SlideDriver?',
      a: 'SAFE is the safety mode alert after the inherent entrapment sensor trips once. Entr is entrapment mode after a second trip, and the operator will not respond until it is reset. Frequent false trips usually trace to the gate, wheel grip or relief pressure rather than the controller.',
    },
    {
      q: 'How do I open a SlideDriver by hand in a power outage?',
      a: 'Turn off power, then pull down the aluminum toggle handle under the electric control panel. It snaps down quickly as the spring releases and spreads both drive wheels off the rail, so keep hands clear. Only do this when the gate is stopped. Units with the optional remote release use a hand pump brought to 50 PSI instead.',
    },
    {
      q: 'Can I top up a SlideDriver with regular hydraulic oil or brake fluid?',
      a: 'No. HySecurity specifies its Uniflow fluid, warns that brake fluid will severely damage the system, and states that other oils may void the warranty. Hydraulic systems do not normally consume fluid, so a low level means a leak to find first.',
    },
    {
      q: 'Is my old 222-series SlideDriver still worth repairing?',
      a: 'In most cases, yes. The hydraulic drive, wheels, valves and controller are serviceable, and HySecurity still supports the Smart Touch generation. We tell you if a specific part is unobtainable before recommending a SlideDriver II.',
    },
    {
      q: 'What is the difference between SlideDriver and SlideDriver II?',
      a: 'Both are hydraulic. SlideDriver II adds the SmartTouch 725 controller with Bluetooth and the Installer app, contactless solid-state limits, adaptive inherent sensing based on hydraulic pressure, a digital pressure gauge, a 100,000-event log and a simplified five-model range from SD15 to SD200V.',
    },
    {
      q: 'Are you a HySecurity dealer?',
      a: 'No. We are an independent, licensed and insured gate repair company that services HySecurity operators. HySecurity-specific parts are ordered through distribution, and we tell you the lead time before work starts.',
    },
  ],

  relatedModels: ['hysecurity/swingsmart-dc-repair'],
  relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'emergency-gate-repair', 'access-control-repair'],
  imageSlugs: [],
  projectSlugs: [],
  videoSlugs: [],

  sources: [
    { label: 'HySecurity SlideDriver II product page and technical specifications', url: 'https://hysecurity.com/products/slide-gate/slidedriver-2/' },
    {
      label: 'HySecurity D0119 Rev. F, Hydraulic Slide Gate Operators with Smart Touch Controller, Installation and Reference Manual (PDF, distributor mirror)',
      url: 'https://laornamental.com/pdf-files/Hysecurity/HySecurity-SlideDriver-Gate-Operator-Manual.pdf',
    },
    { label: 'HySecurity Support Center — Warranty, HySecurity Products', url: 'https://support.hysecurity.com/hc/en-us/articles/360043074933-Warranty-HySecurity-Products' },
    { label: 'Gate Depot — SlideDriver II SD40 listing (UL 325 classes, SmartTouch 725, 5-year limited warranty)', url: 'https://gatedepot.com/nice-hysecurity-slidedriver-ii-sd40-slide-gate-operator-4-000-lbs' },
    { label: 'Protec Controls — SlideDriver II SD50F (replaces 222 X3 ST)', url: 'https://www.proteccontrols.com/products/hysecurity-slidedriver-ii-sd50f-replaces-222-x3-st-now-available' },
    { label: 'Nice — acquisition of HySecurity (July 6, 2016)', url: 'https://www.niceforyou.com/en/magazine/nice-group-strengthens-its-position-us-acquisition-hysecurity' },
  ],
  toConfirm: [
    'SlideDriver II SmartTouch 725 alert/fault/error codes were not verified (the SlideDriver II user guide was not retrievable); codes on this page are from the earlier Smart Touch manual D0119 Rev. F. Confirm whether SD II displays the same abbreviations.',
    'SlideDriver 50VF models use a separate manual (D0125) that was not reviewed; relief settings for 50VF2/3 are not stated.',
    'SD200V horsepower row on the HySecurity page reads "5 HP / 4 HP (DC option)" in flattened text; confirm the column mapping for SD80V and SD200V.',
    'Whether the original SlideDriver generation is formally discontinued by HySecurity (hysecurity.com still has a SlideDriver page); status relies on distributor "replaces" wording.',
    'UL 325 classes verified for SD40 via distributor listing only; confirm for the other SD II models.',
    'Technician to confirm Shield can source Uniflow fluid and SlideDriver wheels/valves and typical lead times.',
  ],
  indexable: true,
}

const swingsmartDc: ModelPage = {
  slug: 'swingsmart-dc-repair',
  brandSlug: 'hysecurity',
  model: 'SwingSmart DC',
  aliases: ['SwingSmart DC 20', 'SwingSmart DCS 20', 'SwingSmartDC20', 'Smart DC Controller'],
  descriptor: 'pad-mounted 24V DC electromechanical swing gate operator with battery backup',
  gateType: 'swing',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'SwingSmart DC is still listed in HySecurity\'s swing gate range alongside the newer SwingSmart CNX and SwingSmart 535. The DCS 20 is the factory solar version.',

  title: 'HySecurity SwingSmart DC Repair | Dallas–Fort Worth',
  metaDescription:
    'HySecurity SwingSmart DC showing FAULT 4, ALERT 18 or stuck in SAFE MODE? We repair SwingSmart DC 20 and DCS 20 swing operators across DFW. Call 24/7.',
  h1: 'HySecurity SwingSmart DC Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair HySecurity SwingSmart DC 20 and DCS 20 swing operators on HOA, commercial and estate entrances. Most calls are a gate stuck in SAFE MODE, a GATE NO LOAD fault after the arm slipped, or a CHANGE BATTERY chirp every minute.',
  heroPoints: [
    'We read the Smart DC Controller message and fix the cause, not just press RESET',
    'We check the taper clamp and drive belt first, because both produce FAULT 4 and ALERT 6',
    'We load-test the 24V UPS batteries that keep this gate working through DFW storm outages',
  ],

  identify: {
    body: [
      'The SwingSmart DC is a squat, pad-mounted operator with a rounded black roto-molded cover, sitting on a concrete pad next to the hinge post. A steel arm runs from a hub on top of the unit to a bracket on the gate. HySecurity labels it SwingSmart DC 20, or SwingSmart DCS 20 on the solar version.',
      'Take the cover off and you will find a 32-character LCD labeled Smart DC Controller, separate AC and DC rocker switches, a red emergency stop button on the side, a 115VAC service outlet, a transformer, and two small 12V batteries. The motor drives a gearbox through a belt, and the arm hub is held by a taper clamp with a pull-out handle. That taper clamp is the fastest way to tell it apart from a linear-arm or articulated-arm operator.',
    ],
    lookFor: [
      'Rounded black cover on a concrete pad beside the hinge post',
      'Arm from a hub on top of the operator to a gate bracket',
      'Smart DC Controller LCD with menu buttons inside the cover',
      'Red emergency stop button on the side of the unit',
      'Taper clamp with an extendable handle at the arm hub',
      'Label reading SwingSmart DC 20 or SwingSmart DCS 20',
    ],
  },

  overview: [
    {
      heading: 'A 24V DC drive with a UPS built in',
      body: [
        'HySecurity rates the SwingSmart DC for continuous duty on leaves up to 1,300 lb at 12 feet or 600 lb at 20 feet. A half-horsepower 24V DC motor turns a 600:1 gearbox through a belt, and the controller varies speed so each leaf opens and closes in roughly 10 to 15 seconds, set separately for each direction.',
        'Mains power charges two 12V 8Ah batteries, which HySecurity says will run up to 300 cycles in a day without AC. An optional pair of 50Ah batteries fits in the same chassis for solar installs or longer outages. So a SwingSmart that dies a few hours into a power cut is almost always telling you about its batteries, not its motor.',
      ],
    },
    {
      heading: 'The taper clamp is the clutch',
      body: [
        'The arm hub is locked to the output shaft by a taper clamp rather than a bolt-through. HySecurity designed it to slip under a vehicle hit instead of breaking the gearbox, and it is also the manual release: loosen the clamp and the gate swings free.',
        'The trade-off is that a clamp left loose, or never retightened after someone opened the gate by hand, lets the motor spin without moving the gate. The controller then reports GATE NO LOAD (FAULT 4), LIM NOT RELEASED (ALERT 6) or MOTOR RUN TIME (FAULT 1). Many "dead" SwingSmarts are a clamp adjustment and a reset.',
      ],
    },
    {
      heading: 'Adaptive inherent sensing and why wind trips it',
      body: [
        'The Smart DC Controller learns how much power the gate normally needs and trips the inherent entrapment sensor at an adjustable threshold above that. One trip puts it in SAFE MODE, where the close timer is disabled; a second trip before a limit gives ENTRAPMENT MODE, which needs a reset.',
        'HySecurity\'s manual warns that wind on a solid gate panel acts like an obstruction and can trip the sensor, and it tells installers not to desensitize the sensor to compensate. It also lists worn motor brushes and gate binding as causes of false SAFE MODE alerts. Over time the controller logs ALERT 13 STIFF GATE when the gate needs more power than it used to, an early warning worth acting on.',
      ],
    },
    {
      heading: 'Built-in diagnostics and dual-gate sync',
      body: [
        'Every alert, fault and error is stored with a date and time and can be downloaded over USB with HySecurity\'s S.T.A.R.T. software. On bi-parting gates, two SwingSmarts synchronize automatically, and the manual requires both units to run identical software versions. ALERT 22 INTLOCK FAILURE appears when the RS-485 link between them drops for more than five seconds.',
      ],
    },
  ],

  specs: [
    { label: 'Models', value: 'SwingSmart DC 20 (AC with UPS); SwingSmart DCS 20 (solar)' },
    { label: 'Maximum gate', value: '1,300 lb at 12 ft leaf; 600 lb at 20 ft leaf' },
    { label: 'Open/close time', value: 'Approximately 10 to 15 seconds, variable, set separately' },
    { label: 'Duty cycle', value: 'Continuous' },
    { label: 'Motor', value: '1/2 hp, 24VDC' },
    { label: 'Power (DC 20)', value: '115V 3A or 208/230V 1.5A single phase, switch selectable' },
    { label: 'Solar (DCS 20)', value: '100 cycles/day requires two 10 W panels and 5 sun hours' },
    { label: 'Batteries', value: 'Two 8Ah (50Ah optional); up to 300 cycles in 1 day on 8Ah, 1,500 cycles over 5 days on 50Ah' },
    { label: 'Temperature rating', value: '-13 °F to 158 °F' },
    { label: 'UL 325 listing', value: 'Class I, II, III, IV (ETL listed)' },
    { label: 'Cycle certification', value: '500,000 cycles' },
  ],

  symptoms: [
    {
      symptom: 'The screen says FAULT 4 GATE NO LOAD and the gate will not move',
      causes:
        'The controller sees the motor running with no load. HySecurity lists linkage failure, a taper clamp that is too loose, a broken drive belt, or disconnected motor wires. The same message can appear when DC power has been switched off for manual operation.',
      whatWeDo:
        'We check whether the clamp was left loose after a hand release, inspect the arm linkage and belt, confirm motor wiring, then tighten the clamp to spec and reset.',
    },
    {
      symptom: 'It chirps every minute and shows ALERT 18 CHANGE BATTERY',
      causes:
        'The 24V UPS batteries are no longer taking a charge. HySecurity warrants supplied batteries for one year from shipment, and heat shortens their life further.',
      whatWeDo:
        'We load-test the pair, check charger output from the Smart DC Controller and the transformer, and replace both batteries together with sealed AGM units, as the manual requires.',
    },
    {
      symptom: 'The gate stops and reverses for no reason, then sits in SAFE MODE',
      causes:
        'A tripped inherent sensor or edge sensor. Genuine obstruction is one cause; wind on a solid panel, a sagging or binding gate, a faulty edge, or worn motor brushes are the common false ones.',
      whatWeDo:
        'We swing the gate by hand with the clamp released, check hinges and the arm geometry, test edges and photo eyes, and inspect brush length before we consider any change to sensitivity.',
    },
    {
      symptom: 'LOW 24VDC or DEAD BATTERY and the gate opened itself during an outage',
      causes:
        'With AC gone the batteries have dropped below 22V (LOW 24VDC) or 21V (DEAD BATTERY). At 21V the operator performs its programmed AC-loss action, open or close, and stops automatic operation.',
      whatWeDo:
        'We confirm AC supply, breaker and rocker switch, check connectors, test the batteries, and review the AC loss setting with you so the gate fails the way your site needs.',
    },
    {
      symptom: 'ALERT 4 MOTOR OVERLOAD on a hot afternoon',
      causes:
        'The motor drive heat sink has passed 210 °F. It clears itself when it cools, but it means the gate is taking too much power: heavy or long leaves, stiff hinges, or high traffic in summer heat.',
      whatWeDo:
        'We check gate weight and length against the rating, hinge condition and drive belt tension, and look at the cycle count history.',
    },
    {
      symptom: 'Loop alerts: ALERT 7, 8, 9 or 12, or the gate stays open',
      causes:
        'The plug-in HY-5A detector has found a frequency shift, a loop shorted to ground, an open loop, or a loop active for more than five minutes. Any detector fault makes the operator act as if the loop is occupied.',
      whatWeDo:
        'We test loop resistance and insulation, inspect saw cuts and lead-ins, reseat or replace the HY-5A, and press RESET to retune.',
    },
    {
      symptom: 'Only one leaf of our double gate works, with ALERT 22',
      causes:
        'The RS-485 interlock between the two operators has been lost, or the two controllers are on different software versions.',
      whatWeDo:
        'We check the communication cable and terminations and confirm both units carry the same software before replacing a controller.',
    },
  ],

  components: [
    {
      part: 'Taper clamp',
      whatItDoes: 'Locks the arm hub to the output shaft and doubles as the manual release and vehicle-hit clutch.',
      failureSigns: 'Arm slips on the shaft, FAULT 4, ALERT 6 or FAULT 1.',
      verdict: 'adjust',
    },
    {
      part: 'Drive belt',
      whatItDoes: 'Transfers power from the DC motor pulley to the gearbox pulley.',
      failureSigns: 'Motor runs with no gate movement; HySecurity specifies only 1/16 to 1/8 inch of deflection.',
      verdict: 'replace-part',
    },
    {
      part: '24V UPS batteries',
      whatItDoes: 'Run the gate during outages and on solar installs.',
      failureSigns: 'ALERT 18, LOW 24VDC, DEAD BATTERY, short run time after AC loss.',
      verdict: 'replace-part',
    },
    {
      part: 'Smart DC Controller',
      whatItDoes: 'Speed control, inherent sensing, battery charging, menus, relays, fault log.',
      failureSigns: 'No display with LED blinking, charger not charging, ALERT 16 COM BUS ERROR, surge damage.',
      verdict: 'replace-part',
    },
    {
      part: 'DC motor brushes',
      whatItDoes: 'Carry current to the DC motor armature.',
      failureSigns: 'False SAFE MODE alerts, weak or erratic travel.',
      verdict: 'replace-part',
    },
    {
      part: 'Limit plate, cams and limit switches',
      whatItDoes: 'Set the open and closed positions.',
      failureSigns: 'ALERT 5 BOTH LIM ACTIVE, ERROR 1 DIRECTION ERROR, debris in the limit area.',
      verdict: 'adjust',
    },
    {
      part: 'Transformer',
      whatItDoes: 'Supplies the controller and battery charger from mains.',
      failureSigns: 'Batteries never recharge, LOW 24VDC with AC present.',
      verdict: 'replace-part',
    },
    {
      part: 'HY-5A plug-in loop detectors',
      whatItDoes: 'Vehicle detection for exit, obstruction and center loops.',
      failureSigns: 'ALERT 7 to 12, ERROR 3, gate held open.',
      verdict: 'repair',
    },
  ],

  repairOrReplace: {
    summary:
      'SwingSmart DC operators are rated for 500,000 cycles and nearly every wear part can be swapped in place: batteries, belt, brushes, limits, detectors and the controller. Replacement is the right call when the gate itself exceeds the rating, when the gearbox or chassis is damaged by a hit the clamp did not absorb, or when a site wants to standardize on HySecurity\'s newer SwingSmart CNX or 535.',
    repair: [
      'FAULT 4, ALERT 6 or FAULT 1 caused by the taper clamp, belt or linkage',
      'Battery-related alerts and outage failures',
      'False SAFE MODE from worn brushes, hinges or edge sensors',
      'Loop detector and interlock alerts',
      'A single failed Smart DC Controller or transformer',
    ],
    replace: [
      'A solid 20-foot leaf well beyond 600 lb, or a gate with a heavy wind load the operator trips on: resize the operator or change the gate design',
      'A gearbox or chassis cracked by a vehicle strike',
      'Controller parts no longer available for a specific board revision, in which case HySecurity\'s current SwingSmart models are the upgrade path',
    ],
  },

  warranty: {
    manufacturer:
      'HySecurity lists the SwingSmart DC limited warranty as 5 years commercial use and 7 years for a single-family residence. Its current published policy covers electromechanical pad-mounted swing operators for five years or 500,000 cycles from installation (seven years from shipment on single-family residential use) when bought through an authorized distributor and registered within 60 days. Batteries are one year from shipment; power supplies and chargers two years; belts and fuses one year. Unregistered units get one year or 100,000 cycles.',
    notes: [
      'The SwingSmart DC manual states that registration must be returned within 60 days of purchase to extend coverage beyond one year.',
      'HySecurity excludes damage from severe weather, wind, flood or fire, and the manual says wind damage to solid or semi-solid gates near capacity is not covered.',
      'Setting the voltage switch wrong for the supply, or other wiring errors described in the manual, voids the limited warranty.',
    ],
  },

  dfw: [
    {
      heading: 'Heat, batteries and ALERT 4',
      body: [
        'The electronics are rated to 158 °F, but the batteries inside a black cover on a sunny pad age faster than the rest of the unit. Summer is when we see ALERT 18 and short outage run times, and when high-traffic HOA gates with stiff hinges log ALERT 4 overload as the heat sink passes 210 °F.',
      ],
    },
    {
      heading: 'Outages from spring storms',
      body: [
        'The UPS is the reason many DFW communities choose this operator. When a thunderstorm drops power, a healthy pair of 8Ah batteries keeps residents moving; a tired pair reaches 21V quickly and the gate performs its AC loss action. Checking the AC loss setting and the batteries before storm season is cheap insurance.',
      ],
    },
    {
      heading: 'Wind, clay and swing geometry',
      body: [
        'Strong spring winds on solid or privacy-panel swing gates are a known SAFE MODE trigger on this operator. Add expansive clay moving hinge posts and the pad, and the arm geometry changes enough to make a gate stiff. We check post plumb and pad level as part of any repeat sensor trip.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the Smart DC Controller',
      body: 'Current message, recent log entries, battery voltage reading and software version, especially on paired gates.',
    },
    {
      step: 'Switch off DC, release the clamp, swing the gate',
      body: 'We turn DC power off so the motor disengages, loosen the taper clamp and move each leaf by hand to separate gate problems from operator problems.',
    },
    {
      step: 'Mechanical checks',
      body: 'Belt tension and alignment, brush length, limit plate and cams, arm linkage and bracket, then retighten the clamp so it does not slip under a simulated strike.',
    },
    {
      step: 'Power and batteries',
      body: 'AC supply and breaker, transformer, charger output and a load test of both batteries.',
    },
    {
      step: 'Sensors and loops',
      body: 'Edges, photo eyes, HY-5A detectors and loop wiring, followed by the inherent sensor reversal test.',
    },
    {
      step: 'Quote, repair, clear and retest',
      body: 'We quote before work, order HySecurity parts with the lead time stated, clear faults with STOP or RESET after the fix, and cycle the gate on AC and on battery.',
    },
  ],

  faqs: [
    {
      q: 'How do I open a SwingSmart DC gate by hand?',
      a: 'Make sure the gate is not moving, remove the cover and turn the DC power switch off, then extend the taper handle and turn it counterclockwise to loosen the clamp. The gate will swing freely. To return to automatic, tighten the clamp, switch DC back on and press STOP or RESET to clear any fault.',
    },
    {
      q: 'Why does my SwingSmart show FAULT 4 after I used the manual release?',
      a: 'Because the clamp is still loose, or DC power is still off. GATE NO LOAD means the motor sees nothing to push. Retighten the taper clamp properly, restore DC power and reset. If it returns with the clamp tight, the belt or linkage needs inspection.',
    },
    {
      q: 'How long will a SwingSmart DC run in a power outage?',
      a: 'HySecurity rates the standard 8Ah pair at up to 300 cycles in one day, and the optional 50Ah pair at up to 1,500 cycles over five days, with fully charged batteries. Old batteries give far less, and accessories like keypads and loop detectors draw from the same supply.',
    },
    {
      q: 'Can I turn down the sensitivity so it stops reversing in the wind?',
      a: 'HySecurity warns against it. Desensitizing the inherent sensor to cope with wind can stop it reversing on a real obstruction and adds wear. The fix is gate design, hinge condition or correct operator sizing, which we assess on site.',
    },
    {
      q: 'Is the SwingSmart DC the same as the SwingSmart CNX or 535?',
      a: 'No. They are later HySecurity swing operators with different controllers. Parts, menus and codes on this page apply to the SwingSmart DC 20 and DCS 20 with the Smart DC Controller.',
    },
  ],

  relatedModels: ['hysecurity/slidedriver-repair', 'linear/sw-series-repair'],
  relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'automatic-gate-repair', 'access-control-repair'],
  imageSlugs: [],
  projectSlugs: [],
  videoSlugs: [],

  sources: [
    {
      label: 'HySecurity SwingSmart DC 20 / DCS 20 Installation and Reference Manual, D0149 Rev. E (PDF, dealer mirror)',
      url: 'https://www.shop.nexlar.com/wp-content/uploads/2021/05/SWINGSMART-DC-20-Installation-Manual.pdf',
    },
    { label: 'HySecurity Support Center — Warranty, HySecurity Products', url: 'https://support.hysecurity.com/hc/en-us/articles/360043074933-Warranty-HySecurity-Products' },
    { label: 'HySecurity product range navigation (SwingSmart DC, CNX, 535 listed)', url: 'https://hysecurity.com/products/slide-gate/slidedriver-2/' },
    { label: 'Gate Openers Direct — SwingSmart DC 20 specifications', url: 'https://www.gateoperator.net/swingsmart-dc-20' },
  ],
  toConfirm: [
    'Codes and specs come from manual revision E (2012). Later Smart DC software may add or rename messages; confirm against the current SwingSmart DC Programming and Operations Manual on support.hysecurity.com.',
    'Brush replacement interval for the SwingSmart DC motor was not captured from the manual; do not quote an interval until checked.',
    'Duty set to "commercial" although HySecurity also sells it for single-family residences; editorial choice.',
    'Confirm whether HySecurity still supplies Smart DC Controller boards for early SwingSmart DC revisions.',
  ],
  indexable: true,
}

const apollo1550: ModelPage = {
  slug: '1550-repair',
  brandSlug: 'apollo',
  model: '1550',
  aliases: [
    '1650',
    '1550ETL',
    '1650ETL',
    '1550ETL-1K',
    '1650ETL-1K',
    '1500',
    '1600',
    '816 actuator',
    '816E',
    '816EX',
    '816-1K',
  ],
  descriptor: '12V DC linear actuator swing gate opener, single (1550) or dual (1650), solar or charger powered',
  gateType: 'swing',
  duty: 'residential-light-commercial',
  status: 'superseded',
  statusNote:
    'The 1550/1650 has run through several control boards: 833/834 on early units, 835/836 on the 1550ETL/1650ETL, and the 1050 board on the 1550ETL-1K/1650ETL-1K. Nice\'s current North American lineup lists the Apollo Linear Actuator and TITAN Linear Actuator; distributors describe the TITAN 12L as a bolt-in replacement for the older 416 and 816 actuators on 1500/1600/1550/1650 mounting geometry.',

  title: 'Apollo 1550 & 1650 Gate Opener Repair | Dallas–Fort Worth',
  metaDescription:
    'Apollo 1550 or 1650 gate opener stopping a few feet in, reopening after closing, or dead on solar? We repair Apollo 816 actuators and boards across DFW.',
  h1: 'Apollo 1550 and 1650 Gate Opener Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair Apollo 1550 single and 1650 dual swing gate openers, including the ETL and 1K versions and the earlier 1500 and 1600. The most common complaint is a gate that moves a few feet and stops or reverses, which on this 12-volt system usually starts with the battery.',
  heroPoints: [
    'We test the battery while the gate is running, because Apollo wants 12 to 14 volts under load, not at rest',
    'We identify your board (833/834, 835/836 or 1050) before changing a setting, since each programs differently',
    'We check the 816 actuator limit wiring with a meter before anyone condemns the actuator or the board',
  ],

  identify: {
    body: [
      'An Apollo 1550 is a single black tubular actuator, roughly the length of a forearm to elbow and beyond, bolted to a welded pivot arm on the hinge post at one end and to a bracket on the gate at the other. A cord runs from the actuator to a steel control box, usually mounted on a post within about four feet of the pivot arm, holding a 12V battery and the circuit board. A 1650 is the same with a second actuator on the other leaf, whose longer cord crosses the driveway, typically in conduit.',
      'To tell which generation you have, open the box. A board labeled 833 or 834 is the early 1550/1650. A board labeled 835 or 836 with a row of ten red program switches and three knobs is the 1550ETL/1650ETL. A board with a small display and FUNCTION, LEARN and ENTER style buttons labeled 1050 is the 1K version. The older 1500 and 1600 look almost identical from outside.',
    ],
    lookFor: [
      'Black tubular actuator with a stainless or chrome extension tube',
      'Welded pivot arm on the hinge post, level with the gate bracket',
      'Steel control box with a push button on its side and a top-post 12V battery inside',
      'Board number 833/834, 835/836 or 1050 printed on the circuit board',
      'Small solar panel on a post facing south, or a plug-in battery charger',
      'Removable end caps on the actuator covering two limit screws',
    ],
  },

  overview: [
    {
      heading: 'A battery system that happens to move a gate',
      body: [
        'Every 1550 and 1650 runs on 12V DC. The battery powers the actuator directly, and a solar panel or trickle charger only keeps it topped up. Apollo\'s manuals say battery power gives up to 200 operations in an outage, and the ETL manuals call for a sealed battery of at least 33 amp hours with top-mounted posts; side-terminal batteries are not to be used.',
        'That means voltage under load is the first measurement. Apollo\'s ETL troubleshooting guide wants 12 to 14 volts while the gate is running and says it should never drop below 11 volts. A battery that reads fine with the gate still can collapse the moment the actuator starts, and the board responds by stopping or reversing exactly as it would for an obstruction.',
      ],
    },
    {
      heading: 'Three board generations, three ways to program',
      body: [
        'The 833/834 board uses program switch #9 as learn mode: switch it on, run the gate fully open and closed three to five times and partially three to five times, then switch it off. Apollo notes the board must relearn any time it loses power, and cold weather or a rusted hinge can make relearning necessary.',
        'The 835/836 board learns by holding LED ENABLE for five seconds until the STOP LED blinks, then cycling the gate three full times. It also has a hard shutdown: two current senses in one cycle lock the operator out until the FIREBOX or UL terminal is shorted to ground, or the firebox door is opened and closed. The 1050 board on the 1K version learns from its keypad (FUNCTION, LEARN, SWING, then light, average or heavy gate) and includes a temperature-compensated solar charge controller adjustable from 0.10 to 1.50 amps.',
      ],
    },
    {
      heading: 'The 816 smart actuator and its limits',
      body: [
        'Limits are set mechanically inside the actuator with two screws under the end caps, one for extend and one for retract. The 816E and 816EX are Apollo\'s "intelligent" actuators, with a sensor wire that lets the board soft-start and soft-stop; the older 416 lacks it. On an 835/836 board, program switch #10 must be off with a 416 actuator, and leaving it on is a listed cause of a gate that moves a few feet then stops.',
        'Apollo advises against shortening or lengthening 816E and 816EX cables because of the sensor inside, and offers special lengths up to 50 feet. A spliced cable across a driveway is a common source of intermittent faults we trace on 1650 installs.',
      ],
    },
    {
      heading: 'Rated gate size depends on the version',
      body: [
        'The early 1550/1650 manual rates the operator for swing gates up to 16 feet and 400 pounds per leaf. The 1550ETL and 1550ETL-1K manuals rate it for 16 feet and 600 pounds per leaf. All versions are approved for UL 325 Vehicular Class I and II use, which covers homes and general-access commercial sites, not industrial or restricted-access gates.',
      ],
    },
  ],

  specs: [
    { label: 'Configuration', value: '1550 single swing; 1650 dual swing' },
    { label: 'Power', value: '12V DC battery, recharged by solar panel or trickle charger' },
    { label: 'Maximum gate (1550ETL, 1550ETL-1K)', value: '16 ft length and 600 lb per leaf' },
    { label: 'Maximum gate (early 1550/1650, 833/834 board)', value: '16 ft length and 400 lb per leaf' },
    { label: 'UL 325', value: 'Vehicular Class I and II' },
    { label: 'Battery (ETL manuals)', value: '12V sealed, 33 Ah minimum, top posts' },
    { label: 'Outage capacity', value: 'Up to 200 operations on battery' },
    { label: 'Control boards', value: '833/834 (early); 835/836 (ETL); 1050 (ETL-1K)' },
    { label: 'Actuators', value: '816E primary with 8 ft cable; 816EX secondary with 38 ft cable on 1650; 816-1K on 1K units' },
    { label: 'Swing', value: 'Up to 105 degrees with the standard pull-to-open pivot position' },
  ],

  symptoms: [
    {
      symptom: 'The gate moves a few feet, then stops or reverses',
      causes:
        'Apollo lists low battery voltage under load first, then a binding gate, a bent actuator extension tube, current sensitivity set too sensitive, and on 835/836 boards switch #10 left on with a non-intelligent 416 actuator.',
      whatWeDo:
        'We measure battery voltage during travel, unbolt the actuator and swing the gate by hand, check the extension tube for bends, and confirm the switch settings match the actuator fitted.',
    },
    {
      symptom: 'It closes, then opens right back up',
      causes:
        'Too much closing pressure from the close limit set too far, auto-reverse sensitivity set too fine, a binding gate, or battery voltage sagging at the end of the stroke.',
      whatWeDo:
        'We back off the extend limit screw until the gate stays shut, check hinge drag, and relearn the board so it records current draw on the gate as it now is.',
    },
    {
      symptom: 'The push button on the box works but the remote does not',
      causes:
        'Apollo\'s guide points at mismatched code switches between transmitter and receiver, a dead transmitter battery, a blown fuse on the board, low operator battery, or a failed receiver.',
      whatWeDo:
        'We check the transmitter, receiver coding, board fuses and antenna connection before replacing the receiver.',
    },
    {
      symptom: 'Nothing at all happens and the board seems dead',
      causes:
        'A flat battery, program switches left in a non-standard position, an accessory holding an input, a damaged actuator connector, or on the ETL board a hard shutdown lockout after two obstruction trips.',
      whatWeDo:
        'We disconnect the charger or panel and read battery voltage, disconnect accessories, trigger the board by momentarily shorting GND to INP, and clear hard shutdown via the UL terminal before judging the board.',
    },
    {
      symptom: 'Great in the morning, weak or dead by evening',
      causes:
        'Daily cycles exceed what the panel and battery replace. Apollo sizes solar panel wattage to daily cycle count and says dual gates need double the panel. Shade from grown trees and a dirty panel reduce it further.',
      whatWeDo:
        'We measure panel output and battery capacity, count real daily cycles, and recommend a larger panel, a larger battery or a charger where power is available.',
    },
    {
      symptom: 'On our 1650, one gate lags behind or closes into the other',
      causes:
        'On the early board Apollo notes the slave side normally runs two to three seconds slower. Worn pivot bolts, a limber gate, a spliced slave cable, or dual gate sync settings on later boards change the timing.',
      whatWeDo:
        'We check both actuators\' limits, the slave cable, pivot bolts, and the sync or delay settings, and fit stop tabs where the leaves need to meet firmly.',
    },
    {
      symptom: 'The gate surges or jerks instead of running smoothly',
      causes:
        'Apollo lists a pivot arm that is not rigid, loose bolts, or a gate too flexible for the actuator.',
      whatWeDo:
        'We re-brace or re-weld the pivot arm, snug the pivot bolt without over-tightening, and reinforce the gate where needed.',
    },
  ],

  components: [
    {
      part: '816E / 816EX / 816-1K actuator',
      whatItDoes: 'Extends and retracts to swing the gate; contains limit switches and, on smart versions, a feedback sensor.',
      failureSigns: 'Grinding, bent extension tube, limits not triggering, water in the housing.',
      verdict: 'repair',
    },
    {
      part: 'Actuator limit screws and switches',
      whatItDoes: 'Set fully open and fully closed positions inside the actuator.',
      failureSigns: 'Gate stops short, overruns, or reopens after closing. Meter check: open position shorts orange to green; closed shorts white to green.',
      verdict: 'adjust',
    },
    {
      part: 'Control board (833/834, 835/836 or 1050)',
      whatItDoes: 'Runs the actuator, senses current for auto-reverse, times closing, handles accessories.',
      failureSigns: 'No response after battery and accessories are ruled out, burned traces, damage after lightning.',
      verdict: 'replace-part',
    },
    {
      part: '12V battery',
      whatItDoes: 'Powers every cycle and carries the gate through outages.',
      failureSigns: 'Voltage below 12V at rest or below 11V under load, swollen case, corroded posts.',
      verdict: 'replace-part',
    },
    {
      part: 'Solar panel, charger or 1050 charge controller',
      whatItDoes: 'Recharges the battery.',
      failureSigns: 'Battery never reaches full charge, panel output low, charger output absent.',
      verdict: 'service',
    },
    {
      part: 'Pivot arm, gate bracket and hardware',
      whatItDoes: 'Fix the actuator geometry to post and gate.',
      failureSigns: 'Surging, cracked welds, arm no longer level, gate bracket loose.',
      verdict: 'repair',
    },
    {
      part: 'Board fuses and emergency bypass connector',
      whatItDoes: '3 A fuses protect 12V accessory outputs; the bypass plug runs the actuator open straight from the battery if the board fails, protected by a 15 A fuse.',
      failureSigns: 'Accessories dead, bypass not working, fuse blown after a short.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'Most 1550 and 1650 failures are a battery, a charging shortfall, a limit adjustment or a board, and all of those are repairable. The actuator itself is serviceable too. Replacement is worth discussing when the gate is heavier than the version\'s rating, when an early 833/834 or 835/836 board has failed and the fix means a 1050 board anyway, or when both actuators are worn on a 1650.',
    repair: [
      'Low battery, undersized solar or a failed charger',
      'Limit screws out of adjustment or a limit wire fault',
      'A failed receiver or blown board fuse',
      'A single failed board, replaced with a compatible 1050 where the original is unavailable',
      'Pivot arm or bracket fatigue',
    ],
    replace: [
      'A gate over 600 lb or longer than 16 feet per leaf: a heavier operator is needed, not another actuator',
      'Both actuators on a 1650 worn out at once: a current Apollo or TITAN actuator set may cost less than rebuilding two',
      'A property now running commercial or high-cycle traffic beyond Class I and II use',
    ],
  },

  warranty: {
    manufacturer:
      'The 1550ETL/1650ETL and 1550ETL-1K/1650ETL-1K manuals carry a limited two-year warranty: 24 months from date of purchase against defects, provided recommended installation procedures are followed. The earlier 1550/1650 manual carries a limited one-year warranty. Both exclude damage from improper installation or use, connection to an improper power source, fire, flood and lightning, and neither covers labor.',
    notes: [
      'Defective parts are repaired or replaced at the manufacturer\'s option when returned freight prepaid; replacement parts carry only the remainder of the original term.',
      'The manuals warn never to weld on the gate or posts with the board powered, which can damage it beyond repair.',
      'Check the manual that came with your unit, or ask your installer for the purchase date, to see which term applies.',
    ],
  },

  dfw: [
    {
      heading: 'Lightning is excluded, and North Texas has plenty',
      body: [
        'Apollo\'s warranty specifically excludes lightning damage. A 1650 with a long slave cable under the drive and a solar panel on a pole is a good collector for nearby strikes, and a board that dies after a spring storm is usually outside warranty regardless of age. We check fuses and the emergency bypass first, since a strike sometimes takes a fuse rather than the whole board.',
      ],
    },
    {
      heading: 'Heat on a battery in a steel box',
      body: [
        'The battery and board live in a closed steel box, often in full sun on acreage entrances. Heat shortens lead-acid battery life and a tired battery is the root of the "few feet then stops" complaint. Summer is also when heavy use from visitors and deliveries pushes a small panel past what it can replace.',
      ],
    },
    {
      heading: 'Clay soil and pivot geometry',
      body: [
        'The 1550 depends on precise pivot arm placement, 13 inches and 6 inches from the hinge center on a standard pull-to-open install. When expansive clay tilts a hinge post or the gate sags, that geometry changes, the actuator pushes against its own limits and the board reads the extra current as an obstruction. We check post plumb and pivot level whenever reverses start after a wet spring or a dry summer.',
      ],
    },
  ],

  process: [
    {
      step: 'Identify the version',
      body: 'Board number, actuator type (416, 816E or 816-1K) and whether it is solar or charger fed, so we use the right troubleshooting sequence.',
    },
    {
      step: 'Test the battery under load',
      body: 'Voltage at rest and while the gate runs, then panel or charger output and actual daily cycle count.',
    },
    {
      step: 'Free the gate and check geometry',
      body: 'We unbolt the actuator from the gate bracket and swing the leaf by hand, then check hinges, pivot arm level and extension tube straightness.',
    },
    {
      step: 'Meter the actuator limits and connector',
      body: 'Orange, white and green limit wires checked at open, closed and mid travel, pins inspected, and slave cable splices tested on a 1650.',
    },
    {
      step: 'Board, accessories and learn',
      body: 'Accessories disconnected, board triggered from GND to INP, fuses checked, program switches set to factory defaults for that board, then a fresh learn cycle.',
    },
    {
      step: 'Quote, repair and retest',
      body: 'Diagnosis and quote first. Apollo boards and actuators are ordered with the lead time stated; batteries are replaced on the spot where we carry the size. We finish by testing auto-reverse against a rigid object.',
    },
  ],

  faqs: [
    {
      q: 'How do I know if my Apollo 1550 battery is the problem?',
      a: 'Measure it with the gate moving, not sitting still. Apollo\'s guide wants 12 to 14 volts during travel and says it should never fall below 11 volts. If it drops under load, replace or recharge the battery before touching the board or actuator.',
    },
    {
      q: 'What is hard shutdown on the Apollo 1550ETL?',
      a: 'On the 835/836 board, two current senses in one cycle lock the operator out as a safety measure. Apollo says it clears by shorting the FIREBOX or UL connection to ground, or by opening and closing the firebox door if one is installed. Find out why it tripped twice before resetting.',
    },
    {
      q: 'Can I open my Apollo gate if the board has failed?',
      a: 'The 833/834 and 835/836 boards have an emergency bypass connector that runs the actuator open directly from the battery. You must unplug it before the actuator reaches full travel or the 15 amp fuse will blow. Otherwise, unbolt the actuator from the gate bracket to swing the gate by hand.',
    },
    {
      q: 'Will a 1050 board work on my older 1550 or 1600?',
      a: 'Gate parts distributors list the Nice Apollo 1050 board as compatible with the 1500, 1550, 1600 and 1650, among others. Programming and wiring differ from the 833/834 and 835/836, so it needs setting up and a learn cycle, not a straight swap.',
    },
    {
      q: 'My gate opens itself after closing. Is the actuator bad?',
      a: 'Usually not. Apollo\'s first causes are the close limit set so the gate presses too hard against its stop and auto-reverse set too sensitive. Adjusting the extend limit screw and relearning the board fixes most of these.',
    },
    {
      q: 'Is Apollo part of Nice?',
      a: 'Yes. Apollo Gate Operators, founded in San Antonio, is owned by the Nice Group and its products are now sold as Nice Apollo in North America. We service them independently and are not a Nice or Apollo dealer.',
    },
  ],

  relatedModels: ['hysecurity/swingsmart-dc-repair'],
  relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
  imageSlugs: [],
  projectSlugs: [],
  videoSlugs: [],

  sources: [
    {
      label: 'Apollo 1550ETL/1650ETL Swing Gate Operator Installation Manual, 835/836 board (PDF, dealer mirror)',
      url: 'http://www.gatesnfences.com/files/Apollo_1550_ETL_and_1650_ETL_Swing_Gate_Operator_Manual.pdf',
    },
    {
      label: 'Nice Apollo 1550ETL-1K/1650ETL-1K Installation Manual Rev 1.0, 1050 board (PDF)',
      url: 'https://www.apollogateopeners.com/store/pdf/1650ETL_1K_Gate_Opener_Manual.pdf',
    },
    { label: 'Apollo Model 1550/1650 manual, 833/834 board (PDF, Gatecrafters)', url: 'https://www.gatecrafters.com/manuals/apollo1550man.pdf' },
    { label: 'Gatecrafters — Apollo 1500 and 1600 replacement parts (1050 board compatibility, 816 actuators)', url: 'https://www.gatecrafters.com/replacement_part.aspx?partclass=Apollo+1500+and+1600' },
    { label: 'Nice North America gate operator lineup', url: 'https://www.niceforyou.com/na/solutions/gate-operators' },
    { label: 'Gate Openers Direct — Nice Apollo TITAN 12L (compatibility with 1500/1600/1550/1650 mounting)', url: 'https://www.gateoperator.net/apollo-titan-12l' },
    { label: 'Apollo Gate Openers — company history (founded 1984, San Antonio; acquired by Nice)', url: 'https://apollogateopeners.com/store/resources/resources-hub/apollo-gate-opener-history-san-antonio-to-global-success.html' },
  ],
  toConfirm: [
    'Year Nice acquired Apollo: sources disagree (2008 on PitchBook/search summaries, 2011 on an Apollo dealer history page). Year deliberately omitted.',
    'Board fitted to the 1500/1600 (distributor lists the 636 board); not verified from a 1500/1600 manual, so the page does not state it.',
    'Solar panel wattage versus daily cycle table in the manuals is flattened in extraction; exact pairings are not stated on the page.',
    'TITAN 12L as bolt-in replacement is a distributor claim, not a Nice statement.',
    'Whether "1551/1651" distributor kit names are the current successor packaging of the 1550/1650 (seen on All Security Equipment and Apollo Gate Openers listings); not added as aliases until confirmed.',
    'Status "superseded" is editorial based on board and actuator generations; no Nice discontinuation notice was found.',
    'Technician to confirm which Apollo boards Shield has installed before and whether Shield stocks 12V 33Ah+ batteries.',
  ],
  indexable: true,
}

const linearSwSeries: ModelPage = {
  slug: 'sw-series-repair',
  brandSlug: 'linear',
  model: 'SW Series',
  aliases: ['SWR', 'SWC', 'SWD', 'SWR-211', 'SWR-221', 'SWC-1', 'SWC-2', 'SWD-211', 'APeX controller'],
  descriptor: 'pad-mounted crank-arm swing gate operator with APeX controller, AC (SWR, SWC) or 24V DC battery backup (SWD)',
  gateType: 'swing',
  duty: 'residential-light-commercial',
  status: 'current',
  statusNote:
    'The SWR Series is listed on the Nice/Linear website (Nice acquired Nortek Security & Control, owner of Linear, in 2021). The SW Series with the APeX controller replaced earlier Linear/Osco swing operators that used older control boards.',

  title: 'Linear SWR, SWC & SWD Gate Operator Repair | DFW',
  metaDescription:
    'Linear SWR, SWC or SWD swing gate operator beeping, showing En 00 or En 05, or motor running but gate not moving? We repair Linear APeX units across DFW.',
  h1: 'Linear SW Series (SWR, SWC, SWD) Swing Gate Operator Repair in Dallas–Fort Worth',
  heroIntro:
    'We repair Linear SWR, SWC and SWD pad-mounted swing gate operators with the APeX controller. Typical calls are a gate locked out with a continuous alarm after two reversals, an SWD that quit during an outage with En 05, or a motor that hums while the arm stays put.',
  heroPoints: [
    'We read the APeX two-digit display and indicator LEDs, which name the fault from En 00 to En 14',
    'We mark the torque limiter to see if it is slipping before blaming the motor or gear reducer',
    'On SWD units we test the gel-cell batteries and the DC motor brushes, both scheduled wear items',
  ],

  identify: {
    body: [
      'Linear\'s SW Series operators sit on a concrete pad or post inside the gate, under a black or tan molded plastic cover with a small rain cap, an access door and an exterior reset button. A steel crank arm comes off a vertical output shaft on top and connects through a second arm to a plate on the gate. That crank-and-link arm, rather than a straight actuator tube, is the quickest identifier.',
      'The model is on the label inside: SWR (residential, AC), SWC (commercial, AC) or SWD (DC with battery backup). Lift the hinged controller and you will see the APeX board, with a two-character display, a column of named indicator LEDs such as MAX RUN, COMM LINK and MAINT ALERT, and slots for plug-in loop detectors. SWD models also have batteries in the chassis and solar panel terminals on the board.',
    ],
    lookFor: [
      'Molded black or tan cover with a rain cap and a lockable access door',
      'Exterior reset button on the cover',
      'Crank arm on a vertical output shaft, linked to a plate on the gate',
      'APeX controller with a two-digit display and labeled indicator LEDs',
      'Model label reading SWR, SWC or SWD (for example SWR-211, SWC-1, SWD-211)',
    ],
  },

  overview: [
    {
      heading: 'Three drives under one cover',
      body: [
        'Linear built the SW Series as a family. The SWR is the residential version with a 1/2 HP PSC motor, rated in Linear\'s literature for 15-foot, 500-pound gates and 150 cycles a day. The SWC is the commercial version at 1/2 HP (SWC-2, 17 feet and 600 pounds) or 1 HP (SWC-1, 19 feet and 1,000 pounds), both continuous duty. The SWD swaps the AC motor for a full-time 1/2 HP DC motor running on 24V batteries, rated for 18 feet and 700 pounds, and can be solar charged.',
        'Mechanically they share a right-angle gear reducer, a 1-inch output shaft, pillow block bearings and cam-operated limits reached through the access door. The SWR parts list shows a belt from the motor pulley to a 60:1 reducer. An optional torque limiter can sit in the drive, and Linear notes it ships set light and must be tightened just enough not to slip.',
      ],
    },
    {
      heading: 'The APeX controller reports the fault by number',
      body: [
        'Every SW Series operator uses Linear\'s APeX controller, which Linear describes as UL 325 and UL 991 compliant, with a built-in MegaCode receiver for up to 40 transmitters, plug-in loop detector capability and surge protection. When it locks out it shows an En code and lights the matching LED. En 00 is two safety reversals, which sounds a continuous alarm until STOP is pressed. En 01 and En 02 mean the maximum run timer expired opening or closing. En 03 is a lost comm link between paired dual-gate operators.',
        'The power codes matter most on the SWD. En 05 means the battery fell below 21.6 volts after AC loss and the gate went to its fail-safe or fail-secure position; it will not run until the battery rises above 24 volts. En 07 is low AC voltage at the controller, En 11 a DC motor mismatch, En 12 motor failure, and En 10 an EEPROM problem.',
      ],
    },
    {
      heading: 'Current sensing, run timers and false stops',
      body: [
        'Obstruction detection on the SW Series is current sensing set digitally for each direction. Linear tells installers to set it so a light force of roughly 50 to 75 pounds causes a reversal, and warns against setting it high. If the gate stops partway with no visible obstruction, the manual lists current sensing set too low for a stiff gate, a maximum run timer that expired because a belt or chain broke or a pulley slipped, or a false signal from an accessory on an obstruction input.',
        'The factory maximum run time is 99 seconds, and the controller counts cycles toward a maintenance alert that defaults to 10,000 cycles and lights MAINT ALERT when reached.',
      ],
    },
    {
      heading: 'SWD power failure behavior',
      body: [
        'On the SWD you choose what happens when AC fails: Fail Safe opens the gate once the battery sags to about 22 volts, Fail Secure closes it, and Open Immediate or Close Immediate act as soon as AC drops. A Low Power Mode shuts accessory power after 60 seconds idle to stretch the battery. A gate that sat open all night after a storm may be doing exactly what it was set to do.',
      ],
    },
  ],

  specs: [
    { label: 'SWR-211 / SWR-221', value: '1/2 HP, 115 V / 230 V; 15 ft, 500 lb; 150 cycles/day' },
    { label: 'SWC-2', value: '1/2 HP, 115 or 230 V; 17 ft, 600 lb; continuous duty' },
    { label: 'SWC-1', value: '1 HP, 115 or 230 V; 19 ft, 1,000 lb; continuous duty' },
    { label: 'SWD-211', value: '1/2 HP DC, 24 VDC battery backup (solar optional); 18 ft, 700 lb; continuous duty' },
    { label: 'Opening time', value: '11 to 14 seconds' },
    { label: 'Controller', value: 'APeX, UL 325/UL 991, built-in MegaCode radio (40 transmitters)' },
    { label: 'UL 325', value: 'Class I, II, III and IV; ETL listed' },
    { label: 'Maximum opening angle', value: 'Approximately 95 degrees, depending on gate width' },
    { label: 'Drive', value: 'Right-angle gear reducer, 1 in output shaft, optional torque limiter' },
  ],

  symptoms: [
    {
      symptom: 'Continuous alarm, gate will not move, display shows En 00',
      causes:
        'Two safety reversals in a row put the controller into entrapment lockout. A real obstruction, a binding hinge, current sensing set too fine for the gate, or a photo eye or edge that is triggering falsely.',
      whatWeDo:
        'We press STOP to clear the alarm, disconnect the arm to swing the gate by hand, then check the obstruction LEDs and each safety device before touching the current settings.',
    },
    {
      symptom: 'The motor runs but the arm or gate does not move',
      causes:
        'Linear lists a slipping torque limiter or friction clutch, a broken chain or worn belt, loose setscrews on pulleys or sprockets, or a key fallen out of its keyway.',
      whatWeDo:
        'We mark the sprocket and clutch with a grease pen and watch for the lines to separate, then inspect the belt, setscrews and keys.',
    },
    {
      symptom: 'The gate stops partway and the MAX RUN light is on',
      causes:
        'En 01 or En 02: the maximum run timer expired while opening or closing. Often a belt, chain or pulley slipping, or a timer set too short for the gate.',
      whatWeDo:
        'We find the drive slip first, and only increase the run time once the gate travels its full arc in normal time.',
    },
    {
      symptom: 'The SWD stopped during a power outage and shows En 05',
      causes:
        'Battery voltage dropped below 21.6 volts with AC off, triggering fail-safe or fail-secure. Linear says the gel-cell batteries should be replaced every year for assured performance.',
      whatWeDo:
        'We restore and verify AC, load-test and replace the batteries if needed, check the solar input where fitted, and confirm the power failure mode suits the site.',
    },
    {
      symptom: 'It will not start at all after running a lot',
      causes:
        'The motor thermal overload has tripped after many cycles and resets itself when cool. Otherwise, no power at the distribution panel, or on an SWD reset to factory defaults, a motor type not set back to d2.',
      whatWeDo:
        'We check supply voltage and breakers, let the motor cool and test again, and on an SWD confirm motor type and open and close current settings.',
    },
    {
      symptom: 'The gate stays open with our loops and card reader',
      causes:
        'A loop or loop detector sending a false call, a stuck opening or reversing device, or the close limit switch already made so the controller believes the gate is closed.',
      whatWeDo:
        'We watch the detector indicators, unplug detectors and reconnect devices one at a time, and check the close limit cam.',
    },
    {
      symptom: 'Limits keep drifting and the gate stops in a slightly different place',
      causes: 'Linear\'s troubleshooting points at loose setscrews in the limit cams.',
      whatWeDo: 'We reset and tighten or replace the cam setscrews and re-run fine limit adjustment through the access door.',
    },
  ],

  components: [
    {
      part: 'APeX controller',
      whatItDoes: 'Runs the motor, senses current, stores transmitters, reports En codes, links dual gates.',
      failureSigns: 'En 10 EEPROM problem, dead display with power present, damage after a surge, En 09 compatibility between paired units.',
      verdict: 'replace-part',
    },
    {
      part: 'Motor and run capacitor (SWR, SWC)',
      whatItDoes: 'PSC AC motor; the capacitor starts and runs it.',
      failureSigns: 'Hum without rotation, slow start, thermal overload trips.',
      verdict: 'replace-part',
    },
    {
      part: 'DC motor brushes (SWD)',
      whatItDoes: 'Carry current to the DC motor.',
      failureSigns: 'Linear says inspect every 100,000 cycles or yearly; brushes are about 3/4 inch new and must be replaced at 1/2 inch to avoid motor damage.',
      verdict: 'replace-part',
    },
    {
      part: 'Gel-cell batteries (SWD)',
      whatItDoes: 'Run the operator on DC and through outages.',
      failureSigns: 'En 05, En 14, short run time without AC.',
      verdict: 'replace-part',
    },
    {
      part: 'Belt, pulleys and gear reducer',
      whatItDoes: 'Reduce motor speed to arm torque.',
      failureSigns: 'Motor runs with no arm movement, squeal, loose setscrews or keys.',
      verdict: 'repair',
    },
    {
      part: 'Torque limiter (optional)',
      whatItDoes: 'Lets the drive slip under excessive load.',
      failureSigns: 'Grease-pen marks separate during travel; gate stalls on a normal cycle.',
      verdict: 'adjust',
    },
    {
      part: 'Limit cams and switches',
      whatItDoes: 'Set open and closed positions on the output shaft.',
      failureSigns: 'Drifting stop points, gate held open because the close limit is made.',
      verdict: 'adjust',
    },
    {
      part: 'Crank arm, link arm and gate plate',
      whatItDoes: 'Convert shaft rotation into gate swing.',
      failureSigns: 'Bent arms after a vehicle hit, loose clamp bolt, jerky motion from poor arm harmonics.',
      verdict: 'repair',
    },
  ],

  repairOrReplace: {
    summary:
      'SW Series operators are conventional, parts-listed machines: motors, capacitors, belts, reducers, limits, batteries and the APeX controller are all individually replaceable, and Linear publishes exploded parts diagrams for each model. Repair is usually right. Replacement makes sense when the gate exceeds the model\'s rating, when an SWR is being worked like a commercial gate, or when a vehicle strike has damaged the chassis and reducer together.',
    repair: [
      'En 00 lockouts caused by hinges, sensors or current settings',
      'Belt, setscrew, key or torque limiter slip',
      'Failed capacitor or motor on SWR and SWC units',
      'Batteries and brushes on SWD units',
      'A failed APeX controller or plug-in loop detector',
    ],
    replace: [
      'An SWR on a gate over 15 feet or 500 pounds, or on an HOA entrance far beyond 150 cycles a day: move to an SWC or SWD',
      'A bent output shaft plus damaged reducer and frame after a vehicle hit',
      'A site that needs continuous operation through outages on an AC-only SWR or SWC, where an SWD is the upgrade',
    ],
  },

  warranty: {
    manufacturer:
      'We did not find Linear\'s current published warranty term for the SW Series. Check the warranty card or literature supplied with the operator, or ask the installing dealer; Nice/Linear lists technical and customer service contacts on linear-solutions.com.',
    notes: [
      'Have the model and serial number ready; Linear\'s parts ordering instructions require both.',
      'Linear\'s manual requires all electrical connections to the power supply to be made by a licensed electrician.',
    ],
  },

  dfw: [
    {
      heading: 'Storm outages and the SWD',
      body: [
        'When a spring thunderstorm takes down power to a subdivision, an SWD rides it out on its batteries until voltage falls below about 22 volts, then opens or closes according to its setting and waits for AC or solar charge. With Linear recommending annual gel-cell replacement, batteries a few summers old are the usual reason an SWD gives up early.',
      ],
    },
    {
      heading: 'Lightning and the APeX board',
      body: [
        'The APeX controller has on-board low-voltage surge protection, but long loop lead-ins, dual-gate comm cables and keypad runs across an open entrance still bring strikes in. After a storm we look for En 03 comm link failures between paired operators and dead detector slots as well as a dark display.',
      ],
    },
    {
      heading: 'Clay soil and pad movement',
      body: [
        'Linear\'s manual says anti-rotation legs may be needed where soil can shift or twist the pad. That describes North Texas expansive clay exactly. A pad that has rotated changes the crank arm geometry, the gate works harder, and current sensing starts producing reversals and En 00 lockouts.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the APeX display and LEDs',
      body: 'En code, lit indicators for power, limits, obstruction inputs, MAX RUN and COMM LINK, and cycle count.',
    },
    {
      step: 'Disconnect the arm and move the gate by hand',
      body: 'With power off, we release the arm so the gate swings freely and check hinges, gate sag and the pad for rotation.',
    },
    {
      step: 'Inspect the drive',
      body: 'Belt, pulleys, setscrews and keys, torque limiter slip test with grease-pen marks, limit cams, and brushes on SWD units.',
    },
    {
      step: 'Test power and batteries',
      body: 'Supply voltage and wire run, capacitor on AC models, battery voltage and charge on the SWD.',
    },
    {
      step: 'Check sensors, loops and dual-gate link',
      body: 'Disconnect and reconnect accessories one at a time, test loop detectors, and verify the comm cable between paired operators.',
    },
    {
      step: 'Quote, repair and set up',
      body: 'We quote first, order Linear parts by model and serial with the lead time stated, then reset current sensing so a light push reverses the gate and confirm the reset button and alarms work.',
    },
  ],

  faqs: [
    {
      q: 'How do I clear En 00 on my Linear gate operator?',
      a: 'Press the STOP button or the reset button on the cover. The alarm means the gate reversed twice without reaching a limit, so find the cause first: something in the gate path, a binding hinge, or a safety device triggering falsely.',
    },
    {
      q: 'What does En 05 mean on a Linear SWD?',
      a: 'The battery dropped below 21.6 volts while AC power was off, so the operator went to its fail-safe or fail-secure position and disabled itself. It clears once the battery rises above 24 volts. If AC is back and it persists, the batteries likely need replacing.',
    },
    {
      q: 'Is my Linear SWR strong enough for our gate?',
      a: 'Linear rates the SWR for gates up to 15 feet and 500 pounds and 150 cycles a day. A heavier or longer gate, or a busier entrance, calls for an SWC or SWD. We weigh up the gate and traffic before recommending more than a repair.',
    },
    {
      q: 'My Linear motor runs but the gate does not move. Is the gearbox gone?',
      a: 'Not usually. Linear\'s own troubleshooting starts with a slipping torque limiter, a broken belt or chain, loose setscrews on pulleys and sprockets, and missing shaft keys. Those are far more common than a failed reducer.',
    },
    {
      q: 'Are Linear gate operators still supported now that Nice owns Linear?',
      a: 'Yes. Nice acquired Nortek Security & Control, which owned the Linear brand, and the Nice/Linear website still lists SW Series swing operators, manuals and technical support.',
    },
    {
      q: 'Are you a Linear dealer?',
      a: 'No. We are an independent, licensed and insured repair company. Linear-specific parts such as APeX controllers are ordered in, and we tell you the lead time before starting.',
    },
  ],

  relatedModels: ['hysecurity/swingsmart-dc-repair'],
  relatedServices: ['gate-motor-repair', 'commercial-gate-repair', 'electric-gate-repair', 'access-control-repair'],
  imageSlugs: [],
  projectSlugs: [],
  videoSlugs: [],

  sources: [
    { label: 'Linear SWR/SWC/SWD Swing Gate Operator Installation Guide, P/N 227965 Rev X22 (PDF)', url: 'https://linear-solutions.com/wp-content/uploads/SW_APeX_Series.pdf' },
    { label: 'Linear SW Series Swing Gate Operators literature, P/N 223142 F (PDF)', url: 'https://linear-solutions.com/wp-content/uploads/SW_APeX_Series_Lit.pdf' },
    { label: 'Nice/Linear — SWR Series product page', url: 'http://linear-solutions.com/product/swr-series-swing-gate-opener/' },
    { label: 'Nice — acquisition of Nortek Security & Control (Linear brand), October 2021', url: 'https://www.niceforyou.com/en/magazine/nice-acquires-nortek-control' },
    { label: 'Hoover Fence — Linear APeX controller introduction to Linear/Osco gate operators', url: 'https://www.hooverfence.com/linear-gate-operators-apex' },
  ],
  toConfirm: [
    'Linear SW Series manufacturer warranty term not found; client or Linear tech support to confirm.',
    'Current availability of SWC and SWD specifically (only the SWR product page was checked).',
    'Specs are from 2010 literature and a 2011 manual; confirm no later revision changed gate ratings.',
    'Whether SW Series units are actually common on DFW jobs Shield sees; the page avoids claiming frequency.',
    'The "Osco" and "SWG/GSWG-A" older units are not covered here and use different controllers.',
  ],
  indexable: true,
}

export const secondaryAModels: ModelPage[] = [slidedriver, swingsmartDc, apollo1550, linearSwSeries]
