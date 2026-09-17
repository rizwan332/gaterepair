/**
 * Model pages — secondary brands, batch B (Mighty Mule, GTO, Ghost Controls, BFT).
 *
 * Written: Mighty Mule MM560 (legacy, with MM562), Mighty Mule MM571W (current,
 * with MM572W), Ghost Controls TDS2 (with TSS1).
 *
 * Deliberately not written:
 *  - GTO / Linear PRO SW-3000XLS: its manual shows the same GTO control-board
 *    family, 318 MHz receiver, potentiometers and alarm table as the MM560. A
 *    page would be a near-duplicate of mighty-mule/mm560-repair.
 *  - BFT Deimos: two generations with different boards (QSC-D UL vs MERAK);
 *    the US UL manual for the current Deimos Ultra BT A was not found, and BFT's
 *    own US documents disagree on duty cycle (30 vs 100 cycles/day).
 *
 * No media, projects or videos exist for these brands.
 */

import type { ModelPage } from './types'

export const secondaryBModels: ModelPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // Mighty Mule MM560 / MM562 (legacy)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'mm560-repair',
    brandSlug: 'mighty-mule',
    model: 'MM560',
    aliases: ['MM562', 'MM500 Series'],
    descriptor: 'legacy residential 12-volt DC linear-actuator swing gate opener',
    gateType: 'swing',
    duty: 'residential',
    status: 'discontinued',
    statusNote:
      "Mighty Mule lists the MM560 and the MM562 dual under Legacy/Discontinued on its manuals page, where the installation manuals are still posted. No official successor is named; Mighty Mule's current single swing kit carrying the same 850 lb / 18 ft label is the MM571W.",

    title: 'Mighty Mule MM560 Repair | Dallas–Fort Worth',
    metaDescription:
      'Mighty Mule MM560 or MM562 beeping once and not moving? We test the battery, 15 A fuse and arm before quoting. 24/7 gate repair across Dallas–Fort Worth.',
    h1: 'Mighty Mule MM560 Repair in Dallas–Fort Worth',
    heroIntro:
      'Shield repairs the Mighty Mule MM560 and its dual-gate twin, the MM562 — the GTO-built 500 Series arms that are out of production but still swinging gates. One short beep and no movement is the fault this board reports most plainly, and GTO’s own table points it at the fuse, the battery or the battery connection before the arm.',
    heroPoints: [
      'We read the MM560’s beep pattern and status-light blinks first — the board names a blown fuse, a shorted accessory terminal or a rev counter error.',
      'We load-test the 12 V 7 Ah battery and compare the charging voltage with the ranges GTO printed in the manual.',
      'We check your gate against the MM560 capacity chart, where 850 lb is only rated up to an 8 ft leaf, before replacing an overloaded arm.',
    ],

    identify: {
      body: [
        'The MM560 is the single-arm kit; the MM562 is the same operator sold as a pair for double gates, with one board running both arms. From the driveway you see a long tubular screw-drive arm between the post and the gate and a separate control box holding the battery and circuit board.',
        'The surest check is the product label on the right-hand side of the control box. It reads “MM500 SERIES DC Swing Gate Operator, P/N MM560”, gives a maximum gate of 850 lb and 18 ft at 12 Vdc and 25 W, and names GTO Access Systems, LLC of Tallahassee, Florida. The serial number begins MM560. GTO built both the Mighty Mule do-it-yourself line and the GTO/PRO professional line; Linear bought GTO in 2005, and the brand passed to Nice when Nice acquired Nortek Security & Control in 2021. That is why older paperwork and support numbers say GTO rather than Mighty Mule or Nice.',
        'If your box has three mini blade fuses, a 19-volt supply and push buttons with small numbered LEDs for setting the limits, you are looking at the newer MM571W. The MM560 board has one 15-amp blade fuse, an 18 Vac transformer input and two screwdriver dials for auto-close time and stall force.',
      ],
      lookFor: [
        'Label on the right side of the control box: “MM500 SERIES”, “P/N MM560”, serial number starting MM560',
        'Two dials on the circuit board marked AUTO CLOSE TIME (OFF to 120) and STALL FORCE (MIN to MAX)',
        'Four board lights: clear STATUS, yellow RF, green POWER IN and red CHARGING',
        'One blade fuse marked 15 near the BATT+ and BATT– terminals',
        'A plug-in 18 Vac transformer (RB570) or a small GTO solar panel feeding the box — never both',
        'MM562 only: a second arm whose 32-foot power cable crosses under the driveway to the box',
      ],
    },

    overview: [
      {
        heading: 'How the MM560 moves your gate',
        body: [
          'The MM560 is a 12-volt screw-drive actuator. A motor with a case-hardened steel gear reducer turns the screw, and the push-pull tube extends or retracts through up to 20 inches of stroke, swinging the leaf through as much as 110 degrees. GTO quotes roughly 20 seconds for a 90-degree swing, longer on a heavy leaf.',
          'The board knows where the gate is from a rev counter and a limit switch in the arm, and two of its repeating beep codes name those parts directly. When position feedback stops arriving, the operator stops short, reverses or refuses to run. A loose conductor in the seven-wire arm cable produces the same code as a failed counter, so the cable and the master input terminals are checked before the arm is condemned.',
        ],
      },
      {
        heading: 'Everything runs off one 7 Ah battery',
        body: [
          'The motor never runs straight off the mains. The 18 Vac transformer, or a GTO solar panel, charges a 12 V 7.0 Ah sealed battery through a regulating circuit on the board. The arm pulls 2 to 5 amps while moving and the board idles at about 25 milliamps between cycles.',
          'That is why an MM560 keeps working through a power cut, and also why a tired battery shows up as a hesitant gate, a gate that quits partway, or a single beep and nothing else. The manual names the FM150 as the only battery approved for the FM500 and MM560, gives it a two-to-three-year life expectancy, and recommends a second battery on solar or high-traffic gates.',
          'GTO warns never to connect a transformer and a solar panel to this board at the same time; it damages the charging circuit. It is worth checking on any box where solar was added to a gate that was originally plugged in.',
        ],
      },
      {
        heading: 'The capacity label is 850 lb and 18 ft, but not together',
        body: [
          'Read quickly, the label suggests an 18-foot gate weighing 850 lb. The gate capacity chart in the MM560 manual says otherwise. An 850 lb leaf is rated only up to 8 feet; the limit is 650 lb at 12 feet, 450 lb at 16 feet and 350 lb for a full 18-foot leaf. Combinations outside those steps are marked NR, not recommended.',
          'The same chart shows the daily cycle budget on a transformer shrinking as leaves get longer and heavier, from about 225 full cycles on a light 5 to 6 ft gate to 125 at each rated limit. The MM562 dual chart runs at roughly half of those numbers, because one battery drives two arms. GTO also calls for ball-bearing hinges on any gate over 250 lb.',
          'A gate outside the chart has been overworking the arm since the day it went up. Stripped gears, repeat obstruction alarms and fuses that keep blowing are the result, and swapping parts without dealing with the load or the hinges only buys time.',
        ],
      },
      {
        heading: 'Parts for an operator that is out of production',
        body: [
          'Discontinued does not mean unsupported. Mighty Mule’s 500 Series parts page still lists the FM150 battery, the RB570 18 Vac transformer and the R4211 replacement control board, which parts sellers list for the FM500, FM502, MM560 and MM562. The MM560 manual also shares its FM121 solar panel, FM148 push-to-open bracket and FM143 automatic lock with the older FM500.',
          'Stock on legacy parts comes and goes. We carry common generic items such as batteries and photo eyes; MM560-specific boards and arm parts are ordered, and we confirm they can actually be had before quoting a repair that depends on them.',
        ],
      },
    ],

    specs: [
      { label: 'Operator type', value: '12 Vdc screw-drive (linear actuator) swing gate operator; MM562 is the dual-arm kit' },
      { label: 'Label rating', value: 'Maximum gate 850 lb (385.5 kg); 18 ft (5.5 m); 12 Vdc, 25 W' },
      { label: 'Capacity chart limits', value: '850 lb up to 8 ft; 650 lb up to 12 ft; 450 lb up to 16 ft; 350 lb at 18 ft' },
      { label: 'Safety classification', value: 'Class I residential vehicular swing gate operator; conforms to UL 325 (manual cites 6th Edition, 2016); certified to CSA C22.2 No. 247' },
      { label: 'Battery', value: '12 V, 7.0 Ah sealed rechargeable (FM150); life expectancy 2–3 years' },
      { label: 'Charging', value: '18 Vac transformer (RB570, 2200 mA) or GTO solar panel — 5 W minimum single gate, 10 W minimum dual' },
      { label: 'Current draw', value: 'Sleep 25 mA; active 2–5 A' },
      { label: 'Board fuse', value: 'One blade-style fuse, 15 A' },
      { label: 'Stroke and length', value: '20 in maximum stroke; 40-1/4 in mounting point to mounting point, fully retracted' },
      { label: 'Opening', value: 'About 20 seconds to 90°; 110° maximum arc' },
      { label: 'Auto-close', value: 'Adjustable 3–120 seconds by potentiometer' },
      { label: 'Receiver', value: 'GTO remote-mounted RF receiver, 318 MHz' },
      { label: 'Operating temperature', value: '−5 °F to +160 °F (actuator)' },
      { label: 'Entrapment alarm', value: 'Sounds after two obstructions in one cycle, for 5 minutes or until cleared' },
    ],

    symptoms: [
      {
        symptom: 'I press the remote, hear one short beep, and the gate doesn’t move.',
        causes:
          'GTO’s troubleshooting table lists one short beep on activation as a blown fuse, a low or bad battery, or a loose battery connection. The single 15-amp fuse tends to go when the arm stalls against a gate that binds or is heavier than the chart allows.',
        whatWeDo:
          'We check the fuse, then load-test the battery and inspect the harness. If the fuse blew we find out why before fitting another, because a bigger fuse is not an option: GTO says it voids the warranty and can damage the board.',
      },
      {
        symptom: 'There’s a single beep every ten seconds, even when nobody is using the gate.',
        causes:
          'That is the MM560 low-battery warning. Behind it is usually a battery past its two-to-three-year life, a solar panel that cannot keep up, or a transformer that has been unplugged or has lost power at a tripped GFCI outlet.',
        whatWeDo:
          'We measure transformer output (GTO’s range is 18 to 22 Vac), battery voltage off the board (12.5 to 13.5 V), and charging voltage at the terminals with the green POWER IN light on (13.3 to 14.8 V). The three readings show whether the fix is a battery, a transformer or the charging circuit.',
      },
      {
        symptom: 'The gate stops, backs up, and then a loud alarm won’t quit.',
        causes:
          'The board sensed an obstruction twice in one cycle and set off the entrapment alarm. A real obstruction will do it, and so will a leaf that has dropped out of level, dry hinges, or a stall force dial set too low for the gate as it is now.',
        whatWeDo:
          'We clear the alarm the way the manual describes — a hard-wired button or keypad, or the power switch, since remotes will not stop it — then unpin the arm and swing the gate by hand. Stall force is only reset once the gate moves freely.',
      },
      {
        symptom: 'It beeps once, then twice, pauses, and repeats over and over.',
        causes:
          'That pattern is the board reporting shorted master motor terminals. On an MM562, one beep then three beeps points at the second motor. Chafed arm cable, water in a terminal or a failing motor can each cause it.',
        whatWeDo:
          'We disconnect the arm cable at the board, meter the conductors for a short and look along the cable run, including the buried 32-foot run on a dual, before testing the motor itself.',
      },
      {
        symptom: 'The gate stops short or runs past where it should, and there’s a repeating three-beep code.',
        causes:
          'Three beeps with a pause is GTO’s master arm rev counter error; a repeating single beep is its master arm limit switch error. Either way the board has lost track of arm position.',
        whatWeDo:
          'Loose master input connections and a damaged arm power cable produce both codes, so wiring is checked first. If it is sound, the counter or limit inside the arm is the fault, and we tell you whether that is a part or an arm on a discontinued unit.',
      },
      {
        symptom: 'The gate ignores the remote and the little clear light on the board keeps blinking.',
        causes:
          'The STATUS LED counts out a shorted accessory input: one blink CYCLE, two SAFETY, three EXIT, four SHADOW, five CLOSE EDGE, six OPEN EDGE. A flooded keypad, a failed photo beam or a nicked exit-wand cable holds that input on and locks out normal operation.',
        whatWeDo:
          'We disconnect whatever is wired to the named terminal and try the remote. If the gate runs, the accessory or its cable is the fault and that is what gets repaired or replaced.',
      },
      {
        symptom: 'The remote stopped working, but the keypad or push button still opens it.',
        causes:
          'The yellow RF light should flicker whenever a remote is pressed. If it stays dark, the suspects are the remote battery, a lost code, or the separately mounted 318 MHz receiver and its antenna connection.',
        whatWeDo:
          'We watch the RF light while the remote is pressed, check the receiver wiring, and re-learn your remotes on the board if the code has been lost.',
      },
      {
        symptom: 'Our solar gate works by afternoon but is dead first thing in the morning, worst in winter.',
        causes:
          'A 5-watt panel was the minimum for a single MM560, and GTO’s accessory notes say some regions need several panels. Short winter days, shade from a tree that has grown, or a dirty panel cannot replace what the gate used overnight.',
        whatWeDo:
          'We check panel output in full sun (a single 5 W panel should read 18 to 22 Vdc), watch the red CHARGING light, and size the charging to the gate’s real traffic rather than refitting the same panel.',
      },
    ],

    components: [
      {
        part: 'Actuator arm: motor, gear reducer and push-pull tube',
        whatItDoes: 'Turns 12 V motor rotation into up to 20 inches of tube travel to swing the leaf.',
        failureSigns: 'Grinding or clicking with no travel, a scored or dry tube, fuses blowing on a gate that swings freely by hand.',
        verdict: 'replace-part',
      },
      {
        part: 'Rev counter and limit switch inside the arm',
        whatItDoes: 'Report arm position so the board knows where open and closed are.',
        failureSigns: 'Repeating rev counter or limit switch beep codes; the gate stopping short or overrunning.',
        verdict: 'repair',
      },
      {
        part: 'MM560 control board',
        whatItDoes: 'Runs the logic, charge regulation, stall force and auto-close, and carries the accessory terminals.',
        failureSigns: 'No response with a good battery and fuse, CHARGING light off with correct input voltage, damage after a storm.',
        verdict: 'replace-part',
      },
      {
        part: '15 A blade fuse',
        whatItDoes: 'Protects the board and motor circuit from overload.',
        failureSigns: 'One short beep and no movement; a new fuse failing again quickly on a binding or overweight gate.',
        verdict: 'replace-part',
      },
      {
        part: 'FM150 battery (12 V, 7 Ah sealed)',
        whatItDoes: 'Supplies every cycle; kept charged by the transformer or panel.',
        failureSigns: 'Low-battery beep every ten seconds, slow travel, failure after a few cycles or at dawn.',
        verdict: 'replace-part',
      },
      {
        part: 'RB570 transformer or GTO solar panel',
        whatItDoes: 'Charges the battery — 18 Vac from the transformer, or a 5 W or larger panel.',
        failureSigns: 'Green POWER IN light off, transformer below 18 Vac, low panel output in full sun.',
        verdict: 'replace-part',
      },
      {
        part: 'Stall force and auto-close dials',
        whatItDoes: 'Set obstruction sensitivity and the 3–120 second close delay.',
        failureSigns: 'Reversing on a clear path, or auto-close that never happens or happens too soon.',
        verdict: 'adjust',
      },
      {
        part: 'Post bracket, gate bracket and clevis pins',
        whatItDoes: 'Fix the arm geometry, which decides the open position on a pull-to-open gate and the leverage on the leaf.',
        failureSigns: 'Arm binding at the end of travel, gate not reaching full open, worn pin holes, loose brackets.',
        verdict: 'adjust',
      },
      {
        part: '318 MHz receiver and antenna',
        whatItDoes: 'Picks up remotes and wireless keypads.',
        failureSigns: 'Yellow RF light does not flicker when a working remote is pressed.',
        verdict: 'service',
      },
    ],

    repairOrReplace: {
      summary:
        'An MM560 that has a flat battery, blown fuse, shorted accessory or failed transformer is a straightforward repair, and those parts are still sold. The harder decision comes when the arm or board fails on this discontinued unit: it turns on whether the part can be sourced, and on whether your gate sits inside the capacity chart. A worn-out arm on an overloaded gate is a reason to change the operator, not the arm.',
      repair: [
        'Battery, fuse, transformer or battery harness faults, where the board and arm test good.',
        'Shorted accessory inputs where the photo beam, keypad or exit wand is the part that failed.',
        'Lost remotes, receiver faults and limit settings disturbed by gate or bracket work.',
        'Solar shortfalls, fixed with more panel wattage or a second battery rather than a new operator.',
        'Hinge, level and bracket problems causing obstruction alarms on a gate that is within the chart.',
      ],
      replace: [
        'The gate is outside the MM560 chart, such as a 12 ft leaf over 650 lb. The current MM571W is charted the same way (650 lb at 12 ft, 350 lb at 18 ft), so it is not the answer for an overloaded gate; a heavier-duty operator is.',
        'The arm or board has failed and a genuine part cannot be obtained in a reasonable time.',
        'A storm has damaged the board, receiver and arm electronics together and the parts approach the cost of a new kit.',
        'For a gate inside the chart that needs a new operator, the MM571W (single) or MM572W (dual) is Mighty Mule’s current kit in the same size class. It uses its own board and a 19 VDC supply, so the MM560 transformer and board are not carried over.',
      ],
    },

    warranty: {
      manufacturer:
        'Mighty Mule’s published warranty page lists the MM560 and MM562 at 18 months. Replacement parts are covered for 6 months or the remaining original warranty, whichever is longer.',
      notes: [
        'Coverage requires purchase from an authorized retailer and proof of purchase; Mighty Mule states that purchases from unauthorized sellers are not covered.',
        'As a discontinued model, most MM560s in service are past the 18-month term. Check your purchase date before assuming coverage.',
        'The MM560 manual states that fitting a fuse rated above the original 15 A voids the warranty.',
        'Warranty returns go through Mighty Mule technical support for a return authorization number; packages without one are refused.',
      ],
    },

    dfw: [
      {
        heading: 'Summer heat and a small sealed battery',
        body: [
          'The MM560 keeps its battery in a control box on the gate or post, often in full afternoon sun. Heat shortens sealed lead-acid battery life, and a North Texas summer can bring the FM150 in under the two to three years GTO expects. The first sign is usually the ten-second low-battery beep, or a gate that works in the morning and gives up after a few evening cycles.',
          'The arm is rated to +160 °F, so a heat-related MM560 failure is more often a battery problem than an actuator problem — and a weak battery makes a good arm look bad.',
        ],
      },
      {
        heading: 'Clay soil, leaning posts and the stall force dial',
        body: [
          'Much of the Metroplex sits on expansive clay that swells when wet and shrinks in drought. A post that leans a few degrees changes the MM560 bracket geometry and pulls the leaf out of level, and the board reads the extra effort as an obstruction. Turning the stall force dial up hides that for a while; GTO’s table lists checking the gate for level and plumb ahead of stall force for good reason.',
        ],
      },
      {
        heading: 'Spring storms, winter sun and the MM562 cable',
        body: [
          'Lightning surges come in on transformer wiring and on buried arm and accessory cables. On an MM562 the second arm’s 32-foot cable under the driveway gives a surge more wire to find, so after a storm we test the board, receiver and both arm circuits rather than stopping at the first dead part.',
          'On acreage north and west of the metro where the MM560 runs on solar, winter is the hard season: a low sun angle and short days give a 5-watt panel little to work with, and hail can crack a panel that still looks fine from the ground.',
        ],
      },
    ],

    process: [
      {
        step: 'Read the board before unbolting anything',
        body: 'We note the beep pattern and which of the four lights — STATUS, RF, POWER IN, CHARGING — are on or blinking. On this board those two signals narrow most faults to power, an accessory input, the arm cable or position sensing.',
      },
      {
        step: 'Unpin the arm and swing the gate by hand',
        body: 'With the power switch off, we pull the clevis pin and move the leaf through its full travel, checking hinges, level and where it meets the stop. A gate that fights you by hand will blow the 15 A fuse again whatever we replace.',
      },
      {
        step: 'Measure power against GTO’s published ranges',
        body: 'Transformer or panel output, battery voltage off the board and under load, and charging voltage at the terminals — each compared with the figures in the MM560 manual.',
      },
      {
        step: 'Test the arm and its cable',
        body: 'We meter the arm conductors for shorts and breaks and run the arm to confirm the motor, rev counter and limit, which separates a wiring repair from an arm part.',
      },
      {
        step: 'Quote, repair and prove it',
        body: 'You get a quote that says whether the part is on hand or has to be ordered. After the repair we re-learn the limit, set stall force for the freely swinging gate, set auto-close if you use it, and confirm the gate reverses when it meets an obstruction.',
      },
    ],

    faqs: [
      {
        q: 'Is the Mighty Mule MM560 discontinued?',
        a: 'Yes. Mighty Mule lists the MM560 and the MM562 dual among its legacy and discontinued models, though the installation manuals are still available. Batteries, transformers and a replacement control board are still listed, so a discontinued MM560 is not automatically a replacement job.',
      },
      {
        q: 'Can I put a bigger fuse in my MM560 so it stops blowing?',
        a: 'No. The board takes one 15-amp blade fuse, and GTO’s manual says a higher-rated fuse voids the warranty and may damage the control board. A fuse that keeps blowing is telling you the gate binds or is too heavy for the arm, and that is the thing to fix.',
      },
      {
        q: 'What battery does the MM560 use?',
        a: 'A 12 V, 7.0 Ah sealed rechargeable battery. The manual names the Mighty Mule FM150 as the only approved battery for the FM500 and MM560, with a two-to-three-year life expectancy, and recommends adding a second battery for solar or high-traffic gates.',
      },
      {
        q: 'How do I stop the alarm on my MM560?',
        a: 'The entrapment alarm runs for five minutes after two obstructions in one cycle. A hard-wired push button or keypad that sends the gate fully open or closed will clear it, and so will switching the control box off and on. Remotes and wireless keypads will not. If it keeps returning, the cause is still there.',
      },
      {
        q: 'Is the MM571W a drop-in replacement for the MM560?',
        a: 'Not as a board or arm swap. The MM571W has its own logic board, three 25-amp fuses and a 19 VDC supply, and it sets limits and stall force with buttons. Its retracted length and stroke match the MM560 on paper, but it should be installed and set up to its own manual as a new operator.',
      },
      {
        q: 'Do you repair the MM562 dual version?',
        a: 'Yes. The MM562 is two MM560-type arms on one board, with the second arm on a 32-foot cable. On duals we also check that buried cable, the second-motor beep code (one beep then three), and whether a single battery is keeping up with two arms.',
      },
    ],

    relatedModels: ['mighty-mule/mm571w-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Mighty Mule — Gate Opener Manuals (current and Legacy/Discontinued lists)', url: 'https://mightymule.com/pages/manuals' },
      {
        label: 'Mighty Mule MM560 Heavy Duty Single Gate Operator installation manual (PDF)',
        url: 'https://cdn.shopify.com/s/files/1/0850/9535/0590/files/Mighty-Mule-MM560-Heavy-Duty-Single-Gate-Operator.pdf?v=1709688544',
      },
      {
        label: 'Mighty Mule MM562 Dual Gate Opener manual (PDF)',
        url: 'https://cdn.shopify.com/s/files/1/0850/9535/0590/files/Mighty-Mule-MM562-Dual-Gate-Opener-Manual.pdf?v=1709688543',
      },
      { label: 'Mighty Mule — Warranty Services (durations by model)', url: 'https://mightymule.com/pages/warranty' },
      { label: 'Mighty Mule — 500 Series Operator Replacement Parts', url: 'https://mightymule.com/collections/500-series' },
      { label: 'Mighty Mule — About (founded 1987, part of Nice)', url: 'https://mightymule.com/pages/about' },
      {
        label: 'Nice press release — Nortek Security & Control acquisition (Linear, Mighty Mule), Oct 2021',
        url: 'https://www.niceforyou.com/na/pressroom/building-automation-leadership-position-nortek-security-control-llc-acquisition',
      },
      {
        label: 'Security Sales & Integration — Linear expands gate opener operation with GTO acquisition',
        url: 'https://www.securitysales.com/news/linear-expands-gate-opener-operation-with-gto-acquisition/42842/',
      },
      {
        label: 'Reliaston (parts distributor) — Mighty Mule arm motor & gear for FM500/FM502/MM560',
        url: 'https://www.reliaston.com/gate-opener-supplies/p/mighty-mule-gate-opener-arm-motor-gear-fm500-fm502-mm560',
      },
    ],
    toConfirm: [
      'R4211 control board compatibility with MM560/MM562 comes from reseller listings; Mighty Mule’s own R4211 listing does not name models.',
      'Linear’s 2005 GTO acquisition date is from trade press search results (SDM, Security Sales, SecurityInfoWatch); the articles returned 403 to direct fetch.',
      'MM562 dual cycle chart read as roughly half of the MM560 single chart — extracted from a poorly formatted PDF; confirm against the printed manual.',
      'The MM560 “1 beep with 2 seconds, then pause and repeats” limit-switch code layout — confirm on a unit.',
      'Current availability and lead time of MM560 arms and motor/gear assemblies.',
      'Whether Mighty Mule officially designates the MM571W as the MM560 successor (not found; page only says it is the current kit with the same label rating).',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Mighty Mule MM571W / MM572W (current)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'mm571w-repair',
    brandSlug: 'mighty-mule',
    model: 'MM571W',
    aliases: ['MM572W', 'RP571ARM', 'RP572ARM'],
    descriptor: 'residential 12-volt DC linear-actuator swing gate opener with a push-button logic board',
    gateType: 'swing',
    duty: 'residential',
    status: 'current',
    statusNote:
      'Listed among current swing gate openers on Mighty Mule’s manuals page; the installation manual covers both the MM571W single and MM572W dual and is published under Nice North America.',

    title: 'Mighty Mule MM571W Repair | Dallas–Fort Worth',
    metaDescription:
      'Mighty Mule MM571W or MM572W reversing on its own or beeping a code? We decode it and test battery, fuses and arm before quoting. 24/7 across DFW.',
    h1: 'Mighty Mule MM571W Repair in Dallas–Fort Worth',
    heroIntro:
      'Shield repairs the Mighty Mule MM571W single and MM572W dual gate openers, the current 500-series kits with the push-button logic board. A gate that stops and reverses on a clear path is the classic MM571W fault: the board leaves the factory with stall force on Low, and a leaf that has started to drag trips it.',
    heroPoints: [
      'We decode the MM571W’s repeating beep counts and red LED blinks — open arm circuit, motor short, stuck limit, shorted input — before touching the arm.',
      'We check which of the three stall force levels the S2/S4 buttons are set to, and fix gate drag instead of just raising force.',
      'We confirm the battery stays above 12.5 V under load and that the 19 VDC supply or solar input is really charging it.',
    ],

    identify: {
      body: [
        'The MM571W is the single-gate kit; the MM572W adds a secondary arm for double gates, and both share one manual and one board. The model is printed on the label on the front of the control box, which is the first place to look.',
        'Open the box and the board confirms it. The MM571W uses a logic board with buttons S2, S3 and S4, three small LEDs marked LED1 to LED3 beside them, a RESET button, a DIP switch block for PUSH/PULL, STAGGER and WARNING, an AUTO CLOSE dial and three mini blade fuses. The power switch sits on the bottom left of the box, and when switched on the system takes about 20 seconds to wake, with a tone and a flashing LED.',
        'From the driveway the MM571W is easy to confuse with the older MM560, since both arms measure 40-1/4 inches retracted with a 20-inch stroke. The difference is inside: the MM560 has one 15 A fuse, an 18 Vac transformer and screwdriver dials for stall force, while the MM571W runs from a 19 VDC supply and sets stall force with buttons. The MM371W and MM372W share this logic board and control box part numbers but are separate kits with their own ratings, so go by the label.',
      ],
      lookFor: [
        'Label on the front of the control box reading MM571W or MM572W',
        'Buttons S2, S3 and S4 with LED1, LED2 and LED3, plus a RESET button',
        'DIP switches marked PUSH/PULL, STAGGER and WARNING',
        'Three mini blade fuses rated 25 A',
        'An AUTO CLOSE dial, set to OFF from the factory',
        'A 19 VDC plug-in power supply, or 10 to 30 watts of solar panel',
        'Replacement arms stamped RP571ARM (primary, 6 ft cable) or RP572ARM (secondary)',
      ],
    },

    overview: [
      {
        heading: 'What changed from the older Mighty Mule 500 Series',
        body: [
          'The MM571W keeps the familiar layout — a screw-drive arm on the post, a battery box on the gate — but the electronics are new. The microprocessor board is temperature-compensated, is configured for single or dual and pull- or push-to-open by DIP switch, and learns limits and stall force through buttons and LEDs rather than potentiometers. The motor spins faster than the MM560’s (348 rpm against 260), and Mighty Mule quotes about 14 seconds to swing 90 degrees.',
          'For repair this means settings are stored, not dialed. An MM571W that misbehaves right after a battery change or power interruption has usually lost a limit, been set up from the wrong arm position, or had a DIP switch changed that has not taken effect yet. The manual notes that a push/pull DIP change only applies after a reset or power cycle.',
        ],
      },
      {
        heading: 'Stall force has three steps, and it ships on Low',
        body: [
          'Dual Sense stall force on this board is a three-level setting. Hold S2 and S4 until the buzzer sounds, step through the levels with S2 and S4, and press S3 until the buzzer sounds to save. LED3 alone means Low, LED3 with LED2 means Medium, and all three LEDs mean High.',
          'Mighty Mule is explicit that stall force must not be raised to push a gate that sticks or binds, because the extra force can damage the operator or the gate. When an MM571W reverses on a clear path, the drag gets fixed first. A level, freely swinging gate that still trips on Low is the case for moving up a step.',
        ],
      },
      {
        heading: 'Limits start from a fully retracted arm',
        body: [
          'On a pull-to-open install, the open position is decided by where the brackets put the fully retracted arm; only the closed limit is programmed. On the MM571W that means holding S2 and S3 until LED1 lights, then holding S2 while the arm extends to close the gate. Three short beeps in a row mean programming mode timed out and needs to be started again. Push-to-open gates use the mirror-image procedure.',
          'The manual carries a warning that matters on do-it-yourself installs: do not spin the tube out by hand to reach the gate bracket. An arm wound out manually no longer matches its programmed position. The symptoms are auto-close that seems to work in reverse, a gate that stops before the end, or accessories that behave oddly, and the cure is to reset the extended limit beginning with the arm fully retracted.',
        ],
      },
      {
        heading: 'Battery, power supply and the smart add-ons',
        body: [
          'The installation manual calls for a 12 V automotive, lawn tractor or marine battery, while Mighty Mule’s current product page lists the FM150 battery and battery box in the kit, so what sits in your box depends on when and where the kit was bought. The charger lives on the board and is fed by a 120 Vac to 19 VDC supply, or by solar panels producing at least 10 W and no more than 30 W. Never connect both; Mighty Mule warns it damages the battery and board. A control box left switched off does not charge its battery.',
          'Phone control comes from the optional MMS100 connectivity kit and the Nice G.O. app, and the MM571W also works with HomeLink. Anything added to the system draws from the same battery, so a solar gate that has gained smart control or a keypad may need more panel than it started with.',
        ],
      },
    ],

    specs: [
      { label: 'Operator type', value: '12 Vdc screw-drive (linear actuator) swing gate operator; MM571W single, MM572W dual' },
      { label: 'Maximum gate (per leaf)', value: 'Up to 18 ft and up to 850 lb, within the capacity chart; minimum 5 ft' },
      { label: 'Capacity chart', value: '850 lb / 8 ft; 750 lb / 10 ft; 650 lb / 12 ft; 550 lb / 14 ft; 450 lb / 16 ft; 350 lb / 18 ft' },
      { label: 'Safety classification', value: 'Class I residential vehicular gate operator; meets UL 325' },
      { label: 'Battery', value: '12 Vdc automotive, lawn tractor or marine battery per manual; second FM150 recommended for solar or high traffic' },
      { label: 'Charging', value: '120 Vac to 19 VDC supply, or solar panels 10 W minimum / 30 W maximum — never both' },
      { label: 'Fuses', value: 'Three mini blade-style fuses, 25 A' },
      { label: 'Motor', value: '12 V with integral gear reducer; 348 rpm at 12 V' },
      { label: 'Opening', value: 'About 14 seconds to 90°; 110° maximum arc' },
      { label: 'Stroke and length', value: '20 in maximum stroke; 40-1/4 in mounting point to mounting point, fully retracted' },
      { label: 'Stall force', value: 'Dual Sense, three levels (Low, Medium, High); factory Low' },
      { label: 'Auto-close', value: 'OFF from factory; approx. 3–120 seconds by potentiometer' },
      { label: 'Receiver', value: '318 MHz, learn-based digital transmitters' },
      { label: 'Operating temperature', value: '−5 °F to +160 °F (actuator)' },
      { label: 'Smart control', value: 'Optional MMS100 kit with the Nice G.O. app; HomeLink compatible' },
      { label: 'Low-voltage wire', value: '16-gauge stranded direct-burial; no more than 1,000 ft' },
    ],

    symptoms: [
      {
        symptom: 'The gate stops partway and heads back the way it came, with nothing in the way.',
        causes:
          'The arm met more resistance than the stall force level allows. Factory Low is easily exceeded by a sagging leaf rubbing its stop, dry hinges, wind against a gate with added slats, or an arm fouling its post. Mighty Mule’s table also lists the required 2-inch arm clearance not being met.',
        whatWeDo:
          'We unpin the arm, swing the gate, check that clearance and the bracket positions, and correct the hardware. Only then do we try Medium stall force, and only if the gate still needs it.',
      },
      {
        symptom: 'It clicks when we press the remote, but the arm never moves.',
        causes:
          'The manual lists an internal motor problem or a low battery. A blown fuse or a loose battery harness wire gives the same click with no travel.',
        whatWeDo:
          'We check all three 25 A fuses and the harness, then confirm the battery holds above 12.5 V under load. If power is good and the arm still only clicks, the arm is the fault, and the RP571ARM or RP572ARM is ordered and the lead time given before any work is booked.',
      },
      {
        symptom: 'Six beeps, a pause, six beeps — and on our double gate only one side moves.',
        causes:
          'Six repeating beeps is the board reporting a stuck limit switch on the secondary arm, or reading an open motor circuit on that arm. Loose, disconnected or shorted power wires on the secondary arm cable are the first suspects.',
        whatWeDo:
          'We check the secondary arm’s white and green wires and power wires at the board and along the cable run, then test the arm itself if the wiring is sound.',
      },
      {
        symptom: 'A repeating pattern of one beep then two — or one beep then three.',
        causes:
          'One then two means the board is reading a short on the primary motor; one then three means the secondary motor. Mighty Mule’s steps are to power the system off and on and check for shorted motor leads, and if it persists, an internal arm or board problem.',
        whatWeDo:
          'We power-cycle, disconnect and meter the motor leads, and swap test between arm and board so you are not sold the wrong one.',
      },
      {
        symptom: 'Auto-close seems backwards, or the gate stops before it is fully shut.',
        causes:
          'The manual ties this to limits not programmed or not set correctly, a stop command from a stuck transmitter or accessory, bracket hardware in the wrong place, or DIP switch 1 set for the wrong swing direction.',
        whatWeDo:
          'We confirm DIP 1 and power-cycle, pull batteries from wireless accessories to find a stuck one, correct the retracted-arm hardware, and reset the extended limit from a fully retracted arm.',
      },
      {
        symptom: 'A red light on the board keeps blinking and the gate won’t respond.',
        causes:
          'LED 2 blinks a count that identifies a shorted wired input — cycle, safety, exit, shadow, close edge or open edge. The error stays until power is cycled, and a failed keypad, loop or photo eye is usually on the other end of that terminal.',
        whatWeDo:
          'We detach the wires on the affected terminal, power the board off and on, and test each removed accessory and its cable on its own.',
      },
      {
        symptom: 'The alarm sounds for a few minutes after the gate bumps the car.',
        causes:
          'Two obstructions in one cycle set off the entrapment alarm required by UL 325; it runs for five minutes. A misaligned or failing photo eye wired to the board can trigger it with nothing actually touching the gate.',
        whatWeDo:
          'We clear it with a wired control or the power switch — remotes and wireless keypads will not — disconnect any obstruction-detection devices to see if one is false-tripping, and fix whichever is at fault.',
      },
      {
        symptom: 'Our solar-powered MM571W goes dead after a few cloudy winter days.',
        causes:
          'Mighty Mule’s winter chart for a single gate ranges from 8 to 26 cycles a day on 10 W of solar, depending on the sun zone, and 20 to 54 on 30 W. A busy gate on the minimum panel, a battery that has aged, or an added accessory can run the battery down.',
        whatWeDo:
          'We measure panel output in sun (Mighty Mule gives 18 to 21 VDC depending on weather), check polarity at the board, and decide between more wattage, within the 30 W maximum, and a second battery.',
      },
    ],

    components: [
      {
        part: 'Primary arm (RP571ARM) and secondary arm (RP572ARM)',
        whatItDoes: 'Screw-drive actuators that swing each leaf; the primary arm comes with a 6 ft cable.',
        failureSigns: 'Clicking with no travel, motor-short or stuck-limit beep codes that return after wiring checks.',
        verdict: 'replace-part',
      },
      {
        part: 'RP1007 logic board',
        whatItDoes: 'Stores limits and stall force, charges the battery and hosts the accessory inputs; shared with the MM371W/372W.',
        failureSigns: 'Faults that persist with good arms, fuses and battery; no charging with correct input; storm damage.',
        verdict: 'replace-part',
      },
      {
        part: 'Three 25 A mini blade fuses',
        whatItDoes: 'Protect the board and motor circuits.',
        failureSigns: 'Unit does not seem to turn on; F1 (top left) found blown after the gate met an obstruction.',
        verdict: 'replace-part',
      },
      {
        part: 'Rev counter board (RVCTBD50)',
        whatItDoes: 'Counts arm travel so the logic board knows position.',
        failureSigns: 'Gate stopping short or overrunning after limits have been reset correctly.',
        verdict: 'replace-part',
      },
      {
        part: 'Battery and RP1014 internal battery harness',
        whatItDoes: 'Supply every cycle and connect the battery to the board.',
        failureSigns: 'Voltage below 12.5 V under load, clicks with no movement, loose or corroded harness terminals.',
        verdict: 'replace-part',
      },
      {
        part: 'RP1010 19 VDC power supply or solar panels',
        whatItDoes: 'Feed the on-board charger.',
        failureSigns: 'Supply output below 19 VDC, panel output low in sun, charge LED off or flashing.',
        verdict: 'replace-part',
      },
      {
        part: 'RP1008 318 MHz antenna and RP1009 audible alarm',
        whatItDoes: 'Receive remotes and sound the warning, programming and fault tones.',
        failureSigns: 'Short remote range with a good transmitter; no power-up tone or no beeps at all.',
        verdict: 'service',
      },
      {
        part: 'Stall force setting and DIP switches',
        whatItDoes: 'Set obstruction sensitivity, swing direction, dual stagger and the movement warning.',
        failureSigns: 'Reversing on a clear path, both leaves opening together into a lock, direction wrong after a board swap.',
        verdict: 'adjust',
      },
      {
        part: 'Brackets, closed position stop plate and ground stop',
        whatItDoes: 'Fix arm geometry and hold the leaf at the closed position.',
        failureSigns: 'Arm hanging on the post, 2-inch clearance lost, gate drifting past closed.',
        verdict: 'adjust',
      },
    ],

    repairOrReplace: {
      summary:
        'The MM571W is in production, Mighty Mule publishes its parts by number, and most failures come down to settings, power or wiring, so repair is normally the right call. Replacement enters the conversation when the gate is outside the capacity chart — 650 lb at 12 ft, 450 lb at 16 ft — or when arms keep failing on a gate that is simply too much for them.',
      repair: [
        'Reversing caused by drag, clearance or a Low stall force setting on a gate within the chart.',
        'Fuse, battery, harness, power supply or solar faults.',
        'Limits lost after a battery change or an arm wound out by hand.',
        'Shorted accessory inputs, stuck transmitters and remote or HomeLink programming.',
        'A single failed arm or logic board, ordered by part number.',
      ],
      replace: [
        'The leaf is heavier or longer than the chart allows. Another MM571W arm will not change that; a heavier-duty operator will.',
        'The gate has been clad or slatted into a solid or near-solid panel. The manual says the MM571W is not rated for solid surface gates, and Mighty Mule’s product page excludes gates over 30 percent solid.',
        'Lightning has taken out the board and both arms on an out-of-warranty MM572W and parts approach the price of a new kit.',
      ],
    },

    warranty: {
      manufacturer:
        'Mighty Mule lists the MM571W and MM572W at 18 months on its warranty page, and the MM571W product page states an 18-month warranty. Replacement parts are covered for 6 months or the remaining original term, whichever is longer.',
      notes: [
        'Purchases from unauthorized retailers are not covered; Mighty Mule names third-party marketplace sellers specifically and accepts Amazon purchases only when shipped and sold by Amazon.',
        'Keep the receipt: proof of purchase from an authorized retailer is required to establish the warranty period.',
        'The manual states that replacing a fuse with a higher-rated one voids the warranty.',
        'Claims start with Mighty Mule technical support for a return authorization number.',
      ],
    },

    dfw: [
      {
        heading: 'A hot control box and a battery chosen by the installer',
        body: [
          'Because the manual allows an automotive, lawn tractor or marine battery, MM571W installs vary more than most. Whatever is in the box sits on a gate in North Texas sun, and summer heat shortens lead-acid battery life. A battery that tested fine in spring can drop below Mighty Mule’s 12.5 V threshold under load by August, and the MM571W shows it as clicks, slow travel or reversals that look like an arm fault.',
        ],
      },
      {
        heading: 'Wind, slats and privacy panels',
        body: [
          'Spring storms bring strong gusts, and many ranch and ornamental gates in the area have had wood slats or privacy panels added after the opener went in. The MM571W is not rated for solid surface gates. A leaf that catches the wind pushes back against the arm, the board reads it as an obstruction on a Low stall force setting, and the gate stops and reverses in the middle of a storm.',
        ],
      },
      {
        heading: 'Moving posts and the 2-inch clearance',
        body: [
          'Expansive clay soil shifts posts as it wets and dries. On an MM571W that changes more than level: the open position on a pull-to-open gate comes from bracket geometry, and a post that moves can close up the 2-inch arm clearance the manual requires. Re-setting the limit without restoring the geometry just moves the problem.',
        ],
      },
      {
        heading: 'Winter solar, hail and lightning',
        body: [
          'Mighty Mule rates solar charging on winter sun for a reason. On acreage north and west of the metro, a low winter sun angle cuts output, and hail can crack a panel without any obvious damage. Lightning surges on buried supply and accessory wire are the other seasonal risk, and the MM572W’s longer secondary cable gives them more to travel on.',
        ],
      },
    ],

    process: [
      {
        step: 'Listen and count before opening the box',
        body: 'We note the repeating beep count and the LED 2 blink count, confirm the switch on the bottom left is on, and listen for the power-up tone about 20 seconds after switching on.',
      },
      {
        step: 'Take the arm off the gate',
        body: 'With power off, we release the arm and swing the leaf by hand, checking hinges, level, the 2-inch clearance and the stop plate. Mighty Mule calls for ball-bearing hinges on any gate over 250 lb.',
      },
      {
        step: 'Check fuses, battery and charge input',
        body: 'All three 25 A fuses, battery voltage under load, the 19 VDC supply or 18–21 VDC solar input, and polarity from the charge source to the board.',
      },
      {
        step: 'Isolate accessories and arms',
        body: 'We detach wires from any shorted input, power-cycle, and test each arm’s white and green wires and power leads so the fault is pinned to one part.',
      },
      {
        step: 'Repair, re-program and prove it',
        body: 'We fit the part — generic items like batteries and photo eyes from the truck, Mighty Mule arms and boards on order with the timing stated upfront — then reset the extended limit from a retracted arm, set the lowest stall force that works, and confirm the gate reverses on an obstruction.',
      },
    ],

    faqs: [
      {
        q: 'Why does my Mighty Mule MM571W reverse by itself?',
        a: 'The board senses more resistance than its stall force setting, which is Low from the factory. Drag, a lost 2-inch arm clearance, wind on a slatted gate, or an arm set up from the wrong position are the usual reasons. Fix those first; raising stall force to push a binding gate is something Mighty Mule warns against.',
      },
      {
        q: 'How do I change the stall force on an MM571W?',
        a: 'Hold S2 and S4 until the buzzer sounds, use S2 and S4 to change the level, and hold S3 until the buzzer sounds to save. LED3 alone is Low, LED3 and LED2 are Medium, and all three LEDs are High. Test that the gate still reverses on an obstruction afterward.',
      },
      {
        q: 'Does the MM571W come with a battery?',
        a: 'It depends on the kit. The installation manual says a 12 V automotive, lawn tractor or marine battery is required and not included, while Mighty Mule’s current product page lists the FM150 battery and box. Check what is in your control box, and consider a second battery if the gate is solar or busy.',
      },
      {
        q: 'My MM572W opens both gates together but closes them one at a time. Is that a fault?',
        a: 'No, that is the STAGGER DIP switch in its OFF position: gates open simultaneously and close staggered. Switching it ON staggers both opening and closing, which Mighty Mule recommends when a gate lock is fitted.',
      },
      {
        q: 'Can I control my MM571W from my phone?',
        a: 'Yes. Add Mighty Mule’s separate MMS100 wireless connectivity kit and use the Nice G.O. app. The kit draws from the gate battery like any accessory, so on a solar install check that the panel and battery still have headroom.',
      },
      {
        q: 'Will an MM571W work on my solid wood gate?',
        a: 'Mighty Mule says it is not rated for solid surface gates, and its product page excludes gates more than 30 percent solid. Wind load on a solid leaf causes reversals and strain on the arm, so a solid gate generally needs a different operator.',
      },
    ],

    relatedModels: ['mighty-mule/mm560-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'access-control-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      {
        label: 'Mighty Mule MM571W / MM572W installation manual (PDF)',
        url: 'https://cdn.shopify.com/s/files/1/0850/9535/0590/files/MM571W-MM572W-Installation-Manual.pdf?v=1717107356',
      },
      { label: 'Mighty Mule MM571W product page', url: 'https://mightymule.com/products/mm571w' },
      { label: 'Mighty Mule — Gate Opener Manuals (current models list)', url: 'https://mightymule.com/pages/manuals' },
      { label: 'Mighty Mule — Warranty Services (durations by model)', url: 'https://mightymule.com/pages/warranty' },
      { label: 'Mighty Mule — 500 Series Operator Replacement Parts (RP1007, RP1004, RP1010, RP1014 etc.)', url: 'https://mightymule.com/collections/500-series' },
      { label: 'Mighty Mule RP571ARM replacement arm', url: 'https://mightymule.com/products/rp571arm' },
      { label: 'Mighty Mule — Nice G.O. app page', url: 'https://mightymule.com/pages/nice-go' },
    ],
    toConfirm: [
      'Battery included or not: the manual says required but not included; the current product page lists the FM150 and battery box. Confirm by kit/retailer.',
      'Exact mapping of the “1 beep every 10 seconds”, “2 beeps every 10 seconds” and 1–5 repeating beep codes — the manual table layout is ambiguous in extraction, so only the unambiguous codes (6 beeps, 1-2, 1-3, clicks) are stated.',
      'Which solar zone the Mighty Mule map assigns to Dallas–Fort Worth (not stated on the page).',
      'RVCTBD50 rev counter board compatibility with the MM571W — the parts page does not list models for it.',
      'What the SMT571WACP / SMT572WACP and TS571W listed on the warranty page are relative to the MM571W (not researched; not used as aliases).',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Ghost Controls TDS2 / TSS1 (Heavy Duty series)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'tds2-repair',
    brandSlug: 'ghost-controls',
    model: 'TDS2',
    aliases: ['TSS1', 'TDS2XP', 'TXX1'],
    descriptor: 'heavy-duty 12-volt DC linear-actuator swing gate opener kit, dual (TSS1 is the single)',
    gateType: 'swing',
    duty: 'residential',
    status: 'current',
    statusNote:
      'Sold on ghostcontrols.com as the Heavy Duty dual kit, with the TDS2XP as the solar package; the TSS1 single kit uses the same TXX1 arm as the TDS2 primary.',

    title: 'Ghost Controls TDS2 Repair | Dallas–Fort Worth',
    metaDescription:
      'Ghost Controls TDS2 or TSS1 giving 5, 7 or 8 beeps, or nothing at all? We check battery, fuses, DIP switches and arms before quoting. 24/7 across DFW.',
    h1: 'Ghost Controls TDS2 Repair and TSS1 Service in Dallas–Fort Worth',
    heroIntro:
      'Shield repairs Ghost Controls Heavy Duty openers — the TDS2 dual kit, the TSS1 single and solar TDS2XP installs. Their board talks in beeps: five or six mean an arm is disconnected, seven or eight mean an arm did not move and a 10-amp fuse needs checking, and complete silence on the remote is something Ghost traces to one DIP switch.',
    heroPoints: [
      'We count the TDS2 alarm codes and read the yellow battery-condition light before opening an arm.',
      'We check DIP 3 — SafeForce versus monitored photo-eye mode — which Ghost names as the cause of a no-beep, no-movement gate.',
      'We re-set the extended limit with the JOG and SET buttons and correct bracket placement, because the retracted limit is fixed inside the arm.',
    ],

    identify: {
      body: [
        'Ghost Controls sells its Heavy Duty series as kits: the TSS1 for a single gate and the TDS2 for a pair, with the TDS2XP as the solar dual package. Each arm is a 12-volt linear actuator. On a TDS2 the primary arm has a 6-foot cable and the secondary arm a 32-foot cable that reaches across to the control box. Ghost’s TXX1 replacement arm is listed for both the TSS1 and the TDS2 primary.',
        'The Ghost board is distinctive once the box is open: a blue block of four DIP switches, buttons marked LEARN XMTR, SET AUTOCLOSE TIME, 1st SET and 2nd SET, JOG OPEN and JOG CLOSE, red 10-amp fuses marked F1 and F2, and separate lights for power, battery condition, status, autoclose and transmitter. The on/off switch is on the bottom of the box.',
        'None of these kits includes a battery. You will find either a 12 V deep-cycle marine battery or Ghost’s ABBT2 battery box with two 12 V batteries. That matters for diagnosis: on a Ghost gate the battery was picked by whoever installed it, not by the factory.',
      ],
      lookFor: [
        'Blue four-position DIP switch block on the control board',
        'Buttons: LEARN XMTR, SET AUTOCLOSE TIME, 1st SET / 2nd SET, JOG OPEN / JOG CLOSE',
        'Green POWER light (steady on transformer, blinking on solar) and yellow BATTERY CONDITION light',
        'Red 10 A fuses labeled F1, plus F2 on dual systems',
        'A separate marine deep-cycle battery or an ABBT2 battery box',
        'TDS2: two arms, one on a 6 ft cable and one on a 32 ft cable',
        'AXS1 three-button or AXP1 five-button Ghost remotes',
      ],
    },

    overview: [
      {
        heading: 'A battery system first, an opener second',
        body: [
          'Ghost describes these as 12 VDC systems that need a charged battery in place at all times; the kit will not operate without one connected. The arms typically draw 1 to 2 amps when moving and the system idles at about 20 milliamps. Charging comes from Ghost’s re-settable AC transformer or from up to 30 watts of solar, and Ghost recommends a deep-cycle marine battery for solar. The box keeps charging the battery even with its switch turned off.',
          'Because everything runs from that battery, an undersized battery, a worn marine battery or a borrowed car battery can make a healthy TDS2 look broken. A five-button AXP1 remote can ask the board for a battery test: one beep means good, four beeps means low.',
        ],
      },
      {
        heading: 'SafeForce, DIP 3 and the gate that does nothing',
        body: [
          'Ghost meets UL 325 entrapment requirements in one of two ways, chosen with DIP 3. Left, the factory position, is SafeForce mode: inherent force limiting, which UL 325 calls Type C. Right is monitored safety mode, which requires Ghost’s monitored safety devices, such as its AXPE photo beams, operating as Type B1 or B2 protection.',
          'Flip DIP 3 to the right without those devices connected and the board will not move the gate. Ghost’s troubleshooting guide lists that exact setting as the reason a remote press gives no beeps and no movement. It is a two-second check that belongs before any talk of boards or arms.',
          'SafeForce also depends on the gate itself. Ghost requires the gate to be installed level and plumb and kept maintained, and describes the board’s Force Setting as a minor adjustment. A heavy leaf on worn hinges reads as an obstruction to SafeForce, and Ghost calls for ball-bearing hinges on leaves over 200 lb.',
        ],
      },
      {
        heading: 'One fixed limit, one programmable limit',
        body: [
          'Each Heavy Duty arm has an internal limit switch at full retraction that is fixed and cannot be adjusted. Only the extended limit is programmed. On a pull-to-open gate, bracket placement sets the open position and the board learns the closed position; on push-to-open it is reversed.',
          'Ghost is specific about the symptom when this goes wrong: a gate that partly reopens after closing, or partly re-closes after opening, is a limit or bracket-placement issue, not a failing arm. The limit is set by moving the leaf into position with the remote or the JOG buttons, holding 1st SET or 2nd SET until the alarm sounds, and running the gate to the opposite end, where a single beep confirms it is stored.',
        ],
      },
      {
        heading: 'Dual gates: DIP 4, stagger and the ZombieLock',
        body: [
          'DIP 4 sets the opening sequence on a TDS2. From the factory it is on stagger, which Ghost says is necessary if a ZombieLock gate lock is fitted; moved right, both leaves open together. Closing always staggers regardless, with the second arm closing before the first.',
          'Leaves that clash in the middle, or a lock that is being dragged open, can come back to this switch or to which leaf was wired as the second arm. We check the sequence against the hardware on the gate before adjusting anything else.',
        ],
      },
      {
        heading: 'Autoclose, PartyMode and the one-remote rule',
        body: [
          'Autoclose is set by counting. Hold SET AUTOCLOSE TIME until the alarm sounds, count the green light’s blinks at one per second, and press again at the time you want, anywhere from 6 seconds to 60 minutes. PartyMode holds the gate open and VacationMode holds it closed from a five-button remote, and cycling the control box power switch cancels both.',
          'Remotes catch people out. Only one transmitter is learned to the board, and every other remote is cloned from that one. Learning a new remote directly to the board stops the old ones working, which Ghost lists as expected behavior rather than a fault.',
        ],
      },
    ],

    specs: [
      { label: 'Compliance', value: 'System certified to UL 325, 7th Edition (per manual)' },
      { label: 'System voltage', value: '12 VDC' },
      { label: 'Battery', value: '12 VDC deep-cycle marine battery or ABBT2 battery box kit — not included' },
      { label: 'Current', value: '1–2 A typical when active; 20 mA standby' },
      { label: 'Maximum gate opening', value: 'TDS2: 24 ft total span; TSS1: 20 ft' },
      { label: 'Weight vs. length', value: 'Manual chart steps down from 900 lb on the shortest leaves to 300 lb at 20 ft' },
      { label: 'Arm stroke', value: '20 in maximum; 5.5 in minimum' },
      { label: 'Speed and range', value: '90° in approximately 15 seconds; 110° maximum opening range' },
      { label: 'Operating temperature', value: '−5 °F to 160 °F (linear actuator)' },
      { label: 'Arm cables (TDS2)', value: 'Primary 6 ft; secondary 32 ft' },
      { label: 'Fuses', value: 'F1 10 A (first arm); F2 10 A (second arm, duals only)' },
      { label: 'Solar', value: 'Up to 30 W of solar charging' },
      { label: 'Autoclose', value: '6 seconds to 60 minutes' },
      { label: 'Wire runs', value: 'Up to 1,000 ft of 16 AWG stranded wire from transformer; up to 100 ft from solar panel' },
      { label: 'Remotes', value: 'AXS1 3-button included; AXP1 5-button optional' },
    ],

    symptoms: [
      {
        symptom: 'I press the remote and get nothing — no beep, no movement.',
        causes:
          'Ghost’s first answer is DIP 3 in the right-hand position without Ghost monitored photo beams connected. After that: a battery flat enough that the board is dead, the switch off, or a remote that is not learned or cloned.',
        whatWeDo:
          'We check DIP 3, watch the yellow transmitter light while the remote is pressed, and read the battery condition light before going further.',
      },
      {
        symptom: 'Five beeps (or six) and the gate won’t run.',
        causes:
          'Five beeps is Ghost’s code for the first arm disconnected; six is the second arm. A loose or corroded terminal, a cut cable, or on a TDS2 damage along the 32-foot secondary cable are the usual culprits.',
        whatWeDo:
          'With power off we remove the arm wires from the terminal, inspect and re-terminate to the color code, power up and retest, then trace the cable if the code returns.',
      },
      {
        symptom: 'Seven beeps (or eight) and nothing moves.',
        causes:
          'Seven beeps means no movement was detected from the first arm, eight from the second. Ghost’s fix list starts with the red F1 or F2 10-amp fuse, then the arm wiring. A fuse that blows again points to a stalled arm or a binding gate.',
        whatWeDo:
          'We replace the fuse, re-terminate the arm, and if it blows again find the reason — hinge, level, obstruction or arm motor. A dead motor means a TXX1 or secondary arm ordered in.',
      },
      {
        symptom: 'The gate closes and then bounces partway back open.',
        causes:
          'Ghost classifies partial reopening after closing, or partial re-closing after opening, as a limit or bracket-placement issue. On pull-to-open gates the open position comes from where the brackets put a fully retracted arm.',
        whatWeDo:
          'We check bracket positions against the retracted arm, correct them if posts or gate have moved, then re-set the extended limit with JOG and 1st SET or 2nd SET.',
      },
      {
        symptom: 'The yellow light blinks slowly and the gate crawls or stops partway.',
        causes:
          'A slow-blinking battery condition light is Ghost’s low-battery indication. An aging marine battery, a car battery never meant for deep cycling, a solar panel shaded or short on wattage, or a tripped re-settable transformer can all cause it.',
        whatWeDo:
          'We test the battery under load, check the green power light for charging (steady for transformer, blinking for solar), reset or replace the transformer, and size battery and panel to the gate’s traffic.',
      },
      {
        symptom: 'It reverses halfway through on a calm day with nothing in the way.',
        causes:
          'SafeForce is sensing more effort than it allows. A leaf out of level or plumb, dry hinges, a heavy leaf without ball-bearing hinges, or a Force Setting that was never adjusted for the gate are typical.',
        whatWeDo:
          'We unhook the arm and move the gate by hand, correct hinges and level, and only then make the small Force Setting adjustment Ghost intends.',
      },
      {
        symptom: 'I programmed a new remote and now my old ones don’t work.',
        causes:
          'The board holds one learned transmitter. Learning a new one directly replaces the old code; every other remote has to be cloned from the learned one.',
        whatWeDo:
          'We re-learn a single master remote and clone the rest from it, so every family remote and any keypad work together.',
      },
      {
        symptom: 'Both leaves swing open together and yank against the lock.',
        causes:
          'DIP 4 has been moved to simultaneous open. Ghost ships it on stagger because a ZombieLock needs the leaves to open in sequence.',
        whatWeDo:
          'We return DIP 4 to stagger, confirm which leaf is wired as the second arm, and check the lock releases before the leaves move.',
      },
    ],

    components: [
      {
        part: 'TXX1 arm (TSS1, or TDS2 primary)',
        whatItDoes: 'Linear actuator with integrated motor, 6 ft cable pre-installed; swings the leaf.',
        failureSigns: 'Seven-beep code that returns after fuse and wiring checks, grinding, no travel on a free gate.',
        verdict: 'replace-part',
      },
      {
        part: 'TDS2 secondary arm and 32 ft cable',
        whatItDoes: 'Drives the second leaf and carries power and signals back to the control box.',
        failureSigns: 'Six- or eight-beep codes, cable cut or crushed where it crosses the driveway.',
        verdict: 'repair',
      },
      {
        part: 'Control board and box',
        whatItDoes: 'Runs SafeForce, limits, autoclose, charging and the receiver.',
        failureSigns: 'No response with a good battery and correct DIP settings; failure after a storm.',
        verdict: 'replace-part',
      },
      {
        part: 'F1 and F2 10 A fuses',
        whatItDoes: 'Protect each arm circuit on the board.',
        failureSigns: 'Seven or eight beeps with no arm movement.',
        verdict: 'replace-part',
      },
      {
        part: 'Battery (12 V deep-cycle marine or ABBT2 box)',
        whatItDoes: 'Powers every cycle; the system cannot run without it.',
        failureSigns: 'Slow-blinking battery light, four-beep battery test, slow or partial travel.',
        verdict: 'replace-part',
      },
      {
        part: 'Re-settable AC transformer or solar panel',
        whatItDoes: 'Keeps the battery charged; up to 30 W of solar.',
        failureSigns: 'Green power light off, battery never showing fully charged, winter shortfall on solar.',
        verdict: 'service',
      },
      {
        part: 'DIP switches 1–4',
        whatItDoes: 'Set pull/push, movement warning, SafeForce or monitored safety, and dual opening sequence.',
        failureSigns: 'No response at all, wrong swing direction, leaves opening together into a lock.',
        verdict: 'adjust',
      },
      {
        part: 'Post bracket, gate bracket and tube gate brackets',
        whatItDoes: 'Set arm geometry and the fixed retracted-limit position.',
        failureSigns: 'Gate partly reopening after closing, arm binding, brackets loose on 6x6 wood posts.',
        verdict: 'adjust',
      },
      {
        part: 'AXS1 / AXP1 remotes and receiver',
        whatItDoes: 'Operate the gate; the AXP1 adds PartyMode, VacationMode and battery test.',
        failureSigns: 'Yellow transmitter light not reacting, old remotes lost after a new one was learned.',
        verdict: 'service',
      },
    ],

    repairOrReplace: {
      summary:
        'A TDS2 or TSS1 is built to be repaired. Ghost sells the arm on its own and puts a limited lifetime warranty on each arm’s motor and gear assembly, so a failed arm is a part, not a new kit. Most Heavy Duty gates that seem dead turn out to be battery, fuse, DIP switch, wiring or limit problems. Replacement makes sense when the gate is outside what the kit was designed for.',
      repair: [
        'Battery, transformer or solar charging faults.',
        'Blown F1 or F2 fuses and loose or damaged arm wiring, including the 32 ft secondary cable.',
        'DIP switch settings, limits and bracket placement.',
        'One failed arm — the TXX1 covers a TSS1 or a TDS2 primary.',
        'Remote learning and cloning, PartyMode or VacationMode left on.',
      ],
      replace: [
        'Panel or privacy-style gates: Ghost states the Heavy Duty kits are not for them.',
        'Leaves beyond the manual chart, which allows only 300 lb on a 20 ft leaf.',
        'A busy shared or commercial entrance, where a battery-based do-it-yourself kit is the wrong tool and a commercial operator is the right one.',
        'Board and both arms destroyed by a surge on an out-of-warranty system where parts approach kit cost — though lifetime motor and gear coverage should be checked first.',
      ],
    },

    warranty: {
      manufacturer:
        'Ghost Controls publishes a Lifetime Limited Warranty on the motor and gear assembly of each arm, and an 18-month warranty on the control box, hardware and remote transmitter (TSS1 and TDS2 product pages).',
      notes: [
        'Ghost asks owners to register the warranty online; the manual includes a mail-in registration form for owners without internet access.',
        'Lifetime coverage is on the motor and gear assembly. The control box, hardware and remote carry 18 months, so a board failure on an older system is usually not covered.',
        'Ghost’s manual warns that an incorrect charging setup can damage the main control board and void the warranty.',
        'Full terms are on ghostcontrols.com; confirm them before assuming an arm fault is covered.',
      ],
    },

    dfw: [
      {
        heading: 'Marine batteries in Texas heat',
        body: [
          'Ghost systems usually run on a marine deep-cycle battery sitting in a box in the sun. North Texas summers shorten lead-acid battery life, and on a TDS2 the battery is doing the work for two arms. The warning sign is the yellow battery light moving from steady to a slow blink, or gates that open fine in the morning and slow down by evening.',
        ],
      },
      {
        heading: 'Wide tube gates on acreage',
        body: [
          'The Heavy Duty kits ship with tube gate brackets and hardware for 6x6 wood posts, which suits the farm and ranch entrances found on acreage north and west of the metro. A 24 ft opening means a 32-foot secondary cable crossing the drive, where mowers, livestock, tires and ground movement all work on it. The second-arm codes — six beeps and eight beeps — can lead back to that cable.',
        ],
      },
      {
        heading: 'Wood posts in expansive clay',
        body: [
          'Wood posts set in clay lean as the soil swells and shrinks. Because the retracted limit on these arms is fixed, a post that moves changes where the gate stops at the open end on a pull-to-open install, and can pull the leaf out of level so SafeForce starts reversing. Correcting the post and brackets comes before re-programming.',
        ],
      },
      {
        heading: 'Winter sun, hail and spring lightning',
        body: [
          'Up to 30 W of solar is plenty in July and marginal in December, when the sun sits low and days are short. Hail can crack a panel that still looks intact. Spring lightning brings surges in on long buried cable runs. Surge damage to the control box falls under its 18-month term, not the lifetime motor and gear coverage, so on an older system it is worth diagnosing carefully before buying parts.',
        ],
      },
    ],

    process: [
      {
        step: 'Codes and lights first',
        body: 'We count the alarm beeps, note the power, battery condition and status lights, and run a battery test from a five-button remote if one is on site.',
      },
      {
        step: 'Check the DIP switches against the installation',
        body: 'DIP 1 for pull or push, DIP 3 for SafeForce unless monitored photo beams are installed, and on a TDS2 DIP 4 for stagger if a ZombieLock is fitted.',
      },
      {
        step: 'Free the gate',
        body: 'We release each arm and swing the leaves by hand, checking hinges, level, plumb and post movement. Leaves over 200 lb should be on ball-bearing hinges.',
      },
      {
        step: 'Power: battery under load and charge source',
        body: 'Battery voltage under load, transformer output and reset, or solar panel output and wiring length, so a power fault is not mistaken for an arm fault.',
      },
      {
        step: 'Arms, cables, limits and a final safety test',
        body: 'We check fuses and re-terminate arm wiring, trace the secondary cable, replace any failed part — batteries and photo eyes from stock, Ghost arms and boards ordered with the wait stated upfront — re-set the extended limits, and confirm the gate reverses on an obstruction.',
      },
    ],

    faqs: [
      {
        q: 'What do 5, 6, 7 and 8 beeps mean on a Ghost Controls TDS2?',
        a: 'Five beeps means the first arm is disconnected and six the second arm. Seven beeps means no movement was detected from the first arm and eight from the second; Ghost’s fix starts with the red F1 or F2 10-amp fuse, then the arm wiring. On a single TSS1 you will only see the first-arm codes.',
      },
      {
        q: 'Why does my Ghost gate do nothing when I press the remote?',
        a: 'Check DIP switch 3 first. Unless Ghost monitored photo beams are installed it must be to the left, in SafeForce mode; to the right, the board will not move the gate. After that, check the battery and whether the remote is learned or cloned.',
      },
      {
        q: 'Is the Ghost Controls arm covered for life?',
        a: 'The motor and gear assembly in each arm carries a Lifetime Limited Warranty. The control box, hardware and remote have 18 months. Register the warranty with Ghost and check its current terms before assuming a fault is covered.',
      },
      {
        q: 'Can you replace just one arm on a TDS2?',
        a: 'Yes. Ghost sells the TXX1 as a replacement for a TSS1 arm or the TDS2 primary arm, with its 6 ft cable fitted. The secondary arm has the longer 32 ft cable. The arm is ordered, and we tell you the timing before booking the repair.',
      },
      {
        q: 'What battery should a TDS2 use?',
        a: 'Ghost specifies a 12 V deep-cycle marine battery or its ABBT2 battery box kit with two batteries, and recommends deep-cycle marine for solar. A car battery is not built for repeated deep discharge. We size the battery to how many times a day your gates run.',
      },
      {
        q: 'Do you service the TSS1 single-gate kit too?',
        a: 'Yes. The TSS1 uses the same arm, board layout, DIP switches and codes as the TDS2 without the second arm, and handles a swing gate up to 20 ft. Everything on this page applies except the secondary arm, F2 fuse and DIP 4.',
      },
    ],

    relatedModels: ['mighty-mule/mm571w-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'access-control-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Ghost Controls TDS2 product page (warranty, included parts, 24 ft span)', url: 'https://ghostcontrols.com/product/tds2-heavy-duty-automatic-gate-opener-kit-for-dual-tube-gates/' },
      { label: 'Ghost Controls TSS1 product page (warranty, 20 ft, not for panel/privacy gates)', url: 'https://ghostcontrols.com/products/tss1-kit' },
      { label: 'Ghost Controls TDS2 installation and owner’s manual (PDF, hosted copy)', url: 'https://ismartgate.com/manuals/Ghost_Controls_TDS2_manual.pdf' },
      { label: 'Ghost Controls TSS1 installation and owner’s manual (PDF)', url: 'https://cdn.shopify.com/s/files/1/0255/2332/2989/files/TSS1_manual.pdf?v=1662741525' },
      { label: 'Ghost Controls TXX1 replacement arm', url: 'https://ghostcontrols.com/products/txx1-arm' },
      { label: 'Ghost Controls — Understanding Your Unit (DIP switches, SafeForce, autoclose)', url: 'https://ghostcontrols.com/pages/understanding-your-unit' },
      { label: 'Ghost Controls TDS2XP solar kit page', url: 'https://ghostcontrols.com/products/tds2xp-kit' },
    ],
    toConfirm: [
      'Weight/length chart: intermediate values were not transcribed because PDF extraction alignment was unreliable; only the 900 lb (shortest) and 300 lb (20 ft) endpoints are stated.',
      'Secondary arm replacement part number for the TDS2 (not found).',
      'TDS2 secondary cable length: Ghost product page says 32 ft; one retailer listing says 30 ft. Page uses 32 ft.',
      'UL 325 class (I, II) for the Heavy Duty kits — the manual states UL 325 7th Edition system certification; class not extracted, so duty is set to residential.',
      'Exact wording of the manual’s warning that an incorrect charging setup voids the warranty (line extracted without full context).',
      'TDS2XL (50 ft cable) existence and rating — not used as an alias.',
    ],
    indexable: true,
  },
]
