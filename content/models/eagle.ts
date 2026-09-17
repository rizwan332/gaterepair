/**
 * Eagle model pages.
 *
 * Research notes (Sept 2026):
 *  - The manufacturer's site (eagleoperators.com) is run under the name
 *    Eagle Operators, LLC, 12953 Foothill Blvd, Sylmar, CA. Manuals are printed
 *    under Eagle Access Control Systems, Inc. The 2002 slide manual gives a
 *    North Hollywood address.
 *  - Current catalog: slide — Eagle I, 1000 FSC/FR, 2000 FSC/FR/DM/APT;
 *    swing — X9 AC/DC, Eagle II, Eagle 100, Eagle 200 (1/2 HP, 1 HP, DM);
 *    overhead — Eagle OH.
 *  - No product called "Swing Eagle", "Big Swing Eagle", "Eagle 220" or
 *    "Falcon 220" could be found on the manufacturer's site or at distributors.
 *    "4L-220" is the size of Eagle's E282 drive belt, which may be where the
 *    "220" in content/brands.ts came from.
 *  - Eagle 1000/2000 manual on eagleoperators.com is image-only; the text
 *    version used here is the 2002 edition hosted by a distributor. Current
 *    product pages were used for every spec where the two differ.
 *  - No image, project or video is confirmed to show a specific Eagle model.
 */

import type { ModelPage } from './types'

const EAGLE_SLIDE_MANUAL = {
  label: 'Eagle-2000 / Eagle-1000 Series slide operator installation manual, 2002 edition (PDF, distributor-hosted)',
  url: 'https://www.gatesnfences.com/files/Eagle_Gate_Opener_PDF_File/Eagle_Slide_Sliding_Gate_Opener_1000_2000_Series_Gate_Operator_Manual.pdf',
}
const EAGLE_BOARDS = {
  label: 'Eagle Operators — control boards (Diamond E555, Diamond DC E600, AC Mini EG002)',
  url: 'https://eagleoperators.com/portfolio/control-board/',
}
const EAGLE_HOME = {
  label: 'Eagle Operators, LLC — homepage (product list and warranty statement)',
  url: 'https://eagleoperators.com/',
}

export const eagleModels: ModelPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // EAGLE 1000
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'eagle-1000-repair',
    brandSlug: 'eagle',
    model: '1000',
    aliases: ['Eagle-1000', 'Eagle 1000 FSC', 'Eagle-1000-FSC', 'Eagle 1000 FR', 'Eagle-1000-FR'],
    descriptor: 'residential AC chain-drive slide gate operator',
    gateType: 'slide',
    duty: 'residential',
    status: 'current',
    statusNote:
      'Listed on eagleoperators.com in September 2026 in two versions: 1000 FSC (fail-secure, crank release) and 1000 FR (foot release).',

    title: 'Eagle 1000 Slide Gate Opener Repair | Dallas–Fort Worth',
    metaDescription:
      'Eagle 1000 slide gate stopping and reversing with the OVERLOAD light on? We check the wheels, belt, limit cams and Diamond board across DFW. Call 24/7.',
    h1: 'Eagle 1000 Slide Gate Operator Repair in Dallas–Fort Worth',
    heroIntro:
      'We repair the Eagle 1000 residential slide operator across Dallas–Fort Worth. The fault it is best known for is a gate that stops and reverses partway with the Diamond board’s OVERLOAD light on. Eagle’s own chart blames mounting, sensitivity, obstructions and worn V-groove wheels before it blames the operator.',
    heroPoints: [
      'We read the Diamond board’s status LEDs before we unbolt anything',
      'We release the gate with the crank or foot pedal and push it by hand to find wheel and track drag',
      'We check the V-belt, the limit cams and the motor’s red reset button, not just the board',
    ],

    identify: {
      body: [
        'The Eagle 1000 is Eagle’s residential slide operator. It is a compact box, about 22 inches tall, 15 inches wide and 13½ inches deep, that sits on a pad beside the gate and pulls it with a nickel-plated chain fixed at both ends of the gate. Eagle sells two release versions today. The 1000 FSC is opened with a hand crank in a power failure, and the 1000 FR has a foot pedal you step on before pushing the gate.',
        'It is most often confused with the Eagle I, Eagle’s other residential slide unit. The control board tells them apart. The Eagle 1000 uses the Diamond Control Board (Eagle part E555), which has an eight-position feature selector and a long row of status LEDs. The Eagle I uses the simpler AC Mini board (EG002), which has a four-position selector. The commercial Eagle 2000 has a similar layout but a noticeably bigger cover, about 26 × 18 × 17 inches.',
        'If you cannot find a model name, measure the housing, note how it releases (crank or pedal) and look at the board. Those three facts separate the 1000 from its siblings.',
      ],
      lookFor: [
        'A slide operator box about 22 in tall × 15 in wide × 13½ in deep',
        'A crank opening for manual release (FSC) or a foot-release pedal (FR)',
        'A Diamond Control Board with an eight-switch feature selector and status LEDs',
        'A #41 nickel-plated chain running to no-weld brackets at each end of the gate',
        'A red reset button on the motor and an on/off switch plate on the chassis',
      ],
    },

    overview: [
      {
        heading: 'A belt, a size 50 reducer and a #41 chain',
        body: [
          'Power in the Eagle 1000 goes from a ½ HP continuous-duty AC motor (115 VAC, 5.7 A) through a V-belt into a size 50 gear reducer. From there a drive sprocket turns the #41 chain, which moves the gate at about 12 inches per second. Eagle rates the 1000 for gates up to 27 feet or 600 pounds.',
          'That belt stage matters when you diagnose one. Eagle’s parts list gives the fail-secure and fail-safe versions of the 1000 different belts (E285 and E286). On the fail-secure version the belt runs over a pulley with the crank outlet built into it. A glazed or stretched belt lets the motor spin while the gate hesitates. It looks like a weak motor, but it is a much cheaper fix.',
        ],
      },
      {
        heading: 'The limits are cams on a threaded shaft',
        body: [
          'Open and closed positions are set mechanically. A small limit chain off the gear reducer turns a threaded shaft in the limit box, and adjustment cams on that shaft trip two limit switches. Eagle sells the whole limit switch assembly as part E106, and the cams (E108) and switches (E097) separately.',
          'Eagle’s instructions say to lock the locking plate back in place after every adjustment. If the plate is left loose, a cam can creep, and a few weeks later the gate starts stopping short or driving into its stop. A drive chain that has been re-tensioned or has jumped a tooth also changes where the gate is when the cams trip, so we re-check the limits after any chain work.',
        ],
      },
      {
        heading: 'How the Diamond board decides something is in the way',
        body: [
          'Obstruction sensing on the 1000 is the Diamond board’s ERD, or emergency reversing device, which Eagle’s troubleshooting chart describes as a current sense. It has two separate sensitivity pots, one for opening and one for closing. If it is set too sensitive, the gate stops or reverses on its own. If it is not sensitive enough, the gate hits an object and keeps pushing. When the gate is heavier than normal for the operator, the OVERLOAD LED lights and the operator will not run properly.',
          'If the gate hits an obstruction twice, the board shuts the system down for five minutes. Feature switch 7 decides what happens next. With it off, someone has to reset the board by hand. With it on, the board resets itself. An owner who has not read the manual can easily mistake that lockout for a dead operator.',
        ],
      },
      {
        heading: 'Coasting distance and the catch post',
        body: [
          'Eagle’s manual warns against putting a stop or catch post in the gate’s path. The distance the gate coasts after the motor stops changes with temperature, so a post in front of the gate eventually gets hit. Eagle recommends catch rollers on the side of the post, set at least 4 inches apart, and at least 3 inches of clearance between the fully open gate and any wall.',
          'On a 1000 that reverses or trips OVERLOAD in the last foot of travel, the catch post is one of the first things we inspect. The Diamond board also has a motor brake setting on its feature selector, which shortens the coast on a drive with a slope.',
        ],
      },
    ],

    specs: [
      { label: 'Use', value: 'Residential slide gates (warranted as residential)' },
      { label: 'Motor', value: '½ HP continuous-duty AC, 115 VAC, 60 Hz, 5.7 A' },
      { label: 'Maximum gate', value: '27 ft or 600 lbs' },
      { label: 'Gate speed', value: '12 in per second' },
      { label: 'Drive chain', value: '#41 nickel-plated, 20 ft supplied' },
      { label: 'Gear reducer', value: 'Size 50' },
      { label: 'Control board', value: 'Diamond Control Board (E555)' },
      { label: 'Manual release', value: 'FSC: crank. FR: foot pedal, then push the gate' },
      { label: 'Auto-close timer', value: '1–60 seconds' },
      { label: 'Listings', value: 'UL 325 and UL 991; ETL listed' },
      { label: 'Housing', value: '22 in H × 15 in W × 13½ in D' },
      { label: 'Shipping weight', value: '80 lbs (FSC); 104 lbs (FR)' },
    ],

    symptoms: [
      {
        symptom: 'The gate starts, stops partway, reverses, and a light on the board stays on',
        causes:
          'This is the OVERLOAD LED. Eagle’s chart lists four causes: the operator is not plumb and level, the ERD is set too sensitive, the gate hit something, or the gate’s V-groove wheels are worn.',
        whatWeDo:
          'We release the operator and push the gate the whole way by hand, then look at the wheels, the track and the pad before we touch the pot. The ERD only gets turned slightly clockwise, as Eagle directs, once the gate itself moves freely.',
      },
      {
        symptom: 'Nothing happens, and the motor is hot to the touch',
        causes:
          'The motor’s thermal protection has tripped. Eagle’s chart lists motor overload as the first reason a slide gate will not open, and every Eagle motor has a red reset button for it.',
        whatWeDo:
          'Power off, let the motor cool, press the reset. Then we look for the reason it tripped, such as a dragging wheel, a tight chain or a slipping belt, because a motor that keeps tripping is protecting itself from something.',
      },
      {
        symptom: 'It opens fine, but then just sits open',
        causes:
          'The receiver LED is stuck on, a global input is shorted and holding the gate, the loop detector LED is lit, or switch 8 (close timer) is off. A gate that reopened after hitting something while closing will also wait for the key, keypad or remote.',
        whatWeDo:
          'We read which input LED is active, then trace that one device instead of replacing the board.',
      },
      {
        symptom: 'The gate stops a foot short, or runs into the stop',
        causes:
          'A limit cam has crept because the locking plate was not re-seated, or the chain has been adjusted since the limits were set.',
        whatWeDo:
          'With the board powered, we reset the cams to the gate’s real open and closed positions, lock the plate, and run several full cycles.',
      },
      {
        symptom: 'The motor runs, but the gate moves slowly or jerks',
        causes:
          'Slip between the motor and the gear reducer (a worn or loose V-belt), excess chain slack, or a worn drive or idler sprocket.',
        whatWeDo:
          'We check belt tension and wear against the correct FSC or fail-safe belt, then check chain slack and the idler.',
      },
      {
        symptom: 'After a thunderstorm the gate is completely dead',
        causes:
          'A blown fuse, the operator’s power switch or breaker, or surge damage. The Diamond board has built-in lightning and surge suppression, but that protection is not unlimited.',
        whatWeDo:
          'We confirm the green power LED, the fuse and the supply to the board before calling the board failed.',
      },
      {
        symptom: 'An alarm sounds and the gate will not respond for a few minutes',
        causes:
          'Two obstructions in a row. The board has shut down for five minutes, and with switch 7 off it needs a manual reset.',
        whatWeDo:
          'We find what the gate is hitting or dragging on. Silencing the alarm without finding the cause just brings it back.',
      },
    ],

    components: [
      {
        part: 'Diamond Control Board (E555)',
        whatItDoes:
          'Runs the operator. It holds the eight-switch feature selector, the ERD sensitivity pots, the close timer, the master/slave link, the global inputs and the status LEDs.',
        failureSigns: 'No power LED with good supply and fuse, inputs that light but do nothing, or erratic behavior after a surge.',
        verdict: 'replace-part',
      },
      {
        part: 'ERD sensitivity pots',
        whatItDoes: 'Set how much extra motor load counts as an obstruction, separately for opening and closing.',
        failureSigns: 'Phantom reversals with no obstruction, or a gate that hits an object and keeps pushing.',
        verdict: 'adjust',
      },
      {
        part: 'Limit switch assembly (E106): cams, threaded shaft, switches',
        whatItDoes: 'Stops the gate at the open and closed positions, driven by a limit chain from the reducer.',
        failureSigns: 'Short stops, overruns, or limit LEDs that never change state.',
        verdict: 'adjust',
      },
      {
        part: 'V-belt and pulleys',
        whatItDoes: 'Carry the motor’s power to the gear reducer. On the FSC version, the reducer pulley also takes the release crank.',
        failureSigns: 'The motor runs while the gate hesitates, a squeal on start, or a glazed or cracked belt.',
        verdict: 'replace-part',
      },
      {
        part: 'Size 50 gear reducer',
        whatItDoes: 'Reduces motor speed to gate speed and drives both the gate sprocket and the limit chain.',
        failureSigns: 'Grinding, play in the output shaft, or oil weeping from the housing.',
        verdict: 'replace-part',
      },
      {
        part: '½ HP AC motor with thermal reset',
        whatItDoes: 'The drive motor, with a red reset button that trips on overheating.',
        failureSigns: 'Repeated trips, humming without turning, or a burnt smell.',
        verdict: 'service',
      },
      {
        part: '#41 chain, idler pulley and no-weld brackets',
        whatItDoes: 'Moves the gate. The idler guides the chain onto the drive sprocket.',
        failureSigns: 'Sag, clatter, a chain riding up on the sprocket, or brackets slipping on the gate frame.',
        verdict: 'adjust',
      },
      {
        part: 'Manual release: crank (FSC) or foot release (FR)',
        whatItDoes: 'Lets you move the gate by hand with the power off.',
        failureSigns: 'The crank will not seat in its outlet, or the pedal will not free the gate.',
        verdict: 'service',
      },
    ],

    repairOrReplace: {
      summary:
        'Almost every Eagle 1000 fault is a part, an adjustment or the gate itself. The drive train is simple, and the model is still in Eagle’s current catalog. Replacement is worth discussing when the gate has outgrown the 27-foot or 600-pound rating, or when an old unit needs a gear reducer and has other wear too.',
      repair: [
        'OVERLOAD reversals caused by worn V-groove wheels, a shifted pad or track, or an ERD set too sensitive',
        'A stretched or glazed V-belt, loose chain or worn idler',
        'Limit cams that have crept, or a limit switch that no longer clicks',
        'A Diamond board lost to a surge on an otherwise sound operator',
      ],
      replace: [
        'The gate is heavier than 600 lbs or longer than 27 ft. The in-brand step up is the Eagle 2000, rated to 45 ft: 1,000 lbs on the ½ HP versions and 2,000 lbs on the 1 HP and dual-motor versions.',
        'The gear reducer has failed on a unit that also needs a board, belt and chain. Price all of it together before deciding.',
        'You need the gate to run on battery in an outage. Eagle’s DC board family (Diamond DC, E600) is listed for an Eagle-1000-DC, which is a different operator from the AC 1000, so check with us before assuming a conversion.',
      ],
    },

    warranty: {
      manufacturer:
        'Eagle lists both the Eagle 1000 FSC and FR with a “5-Year Limited (Residential)” warranty on its product pages. Its homepage says its gate operators carry a 5- or 7-year warranty, with an option to extend coverage up to 10 years.',
      notes: [
        'These are Eagle’s terms as currently published. An older unit may have shipped under different terms, so check the warranty card or ask Eagle.',
        'On a newer unit, contact the installing dealer or Eagle before paying for a repair that might be covered.',
        'Eagle’s manual requires positive stops on the track and installation to its instructions, so read the card’s installation conditions.',
      ],
    },

    dfw: [
      {
        heading: 'Summer heat and the red reset button',
        body: [
          'The 1000’s motor is continuous duty, but on a July afternoon in DFW the box is sitting in full sun and the motor has less headroom. A gate with a stiff wheel or a tight chain adds just enough load to trip the thermal protection. The owner presses the red button, the gate runs, and it trips again the next hot day. The reset is not the repair. The drag is the problem.',
        ],
      },
      {
        heading: 'Clay soil, the track and the catch rollers',
        body: [
          'Expansive clay swells when wet and shrinks in drought, which tilts pads and lifts sections of the track. Eagle lists “operator not plumb and level” as the first cause of a mid-travel reversal. A pad that has rotated a few degrees also misaligns the chain with the drive sprocket. The same movement pushes a catch post or its rollers toward the gate path, and Eagle already warns that coasting distance changes with temperature.',
        ],
      },
      {
        heading: 'Spring thunderstorms',
        body: [
          'North Texas spring storms are the usual reason a healthy Eagle 1000 goes dark overnight. The Diamond board’s built-in surge suppression helps, but receivers and loop detectors powered from its 24 VAC output share the same wiring. We check the fuse, the power LED and each accessory before condemning the board.',
        ],
      },
    ],

    process: [
      {
        step: 'Read the Diamond board',
        body: 'Power, OVERLOAD, open and close limit, and each input LED tell us which of Eagle’s troubleshooting branches we are on before any part comes off.',
      },
      {
        step: 'Release and push the gate',
        body: 'Power off, crank or pedal release, then push the gate through its full travel to feel for wheel, track or catch-roller drag.',
      },
      {
        step: 'Check the drive train',
        body: 'V-belt, gear reducer, drive and idler sprockets, chain slack, and no-weld brackets, in that order from motor to gate.',
      },
      {
        step: 'Set limits and ERD to Eagle’s procedure',
        body: 'Cams set with the board powered, the locking plate re-seated, and each sensitivity pot adjusted only after the gate moves freely.',
      },
      {
        step: 'Quote, repair, and test reversal both ways',
        body: 'You approve the price first. After the repair we confirm the gate stops or reverses on an obstruction in both directions.',
      },
    ],

    faqs: [
      {
        q: 'Is the Eagle 1000 still made?',
        a: 'Yes. In September 2026 Eagle’s site listed it in two versions, the 1000 FSC and the 1000 FR. The Diamond board it uses is also still listed.',
      },
      {
        q: 'What is the difference between the 1000 FSC and the 1000 FR?',
        a: 'Only the manual release. FSC is fail-secure, so you open it with a crank. FR is foot release, so you step on the pedal and push the gate. The motor, gate rating and board are the same.',
      },
      {
        q: 'Can I just turn the sensitivity down so it stops reversing?',
        a: 'Not safely. Eagle says to turn the ERD pot only slightly, and only after checking the mounting, obstructions and V-groove wheels. Turning it up to hide drag means the gate keeps pushing when it meets a person or a car.',
      },
      {
        q: 'The alarm went off and the gate stopped responding. Is the operator broken?',
        a: 'Probably not. After two obstructions in a row, the Diamond board shuts down for five minutes and sounds the alarm. With switch 7 off, it waits for a manual reset. The real question is what it hit twice.',
      },
      {
        q: 'Is mine an Eagle 1000 or an Eagle I?',
        a: 'Open the cover. A Diamond board with an eight-switch selector and a row of LEDs means an Eagle 1000. A smaller AC Mini board with a four-switch selector means an Eagle I.',
      },
      {
        q: 'Where is the motor reset?',
        a: 'It is the red button on the motor. Eagle says to turn off the power, let the motor cool, press the button, and restore power. If it trips again, have the gate checked for drag.',
      },
    ],

    relatedModels: ['eagle/eagle-2000-repair', 'eagle/eagle-200-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Eagle Operators — Eagle 1000 FSC product page (specs, warranty, manuals)', url: 'https://eagleoperators.com/portfolio/eagle-1000-fsc/' },
      { label: 'Eagle Operators — Eagle 1000 FR product page (foot release, weight, chassis)', url: 'https://eagleoperators.com/portfolio/eagle-1000-fr/' },
      { label: 'Eagle Operators — slide gate operators listing', url: 'https://eagleoperators.com/slide-gate-operators/' },
      EAGLE_SLIDE_MANUAL,
      EAGLE_BOARDS,
      EAGLE_HOME,
    ],
    toConfirm: [
      'Where the model label sits on an Eagle 1000 (not found in the documentation reviewed).',
      'Whether current-production 1000s still use the V-belt, limit box and part numbers shown in the 2002 manual (E285/E286 belts, E106 limit assembly). The manufacturer’s current manual PDF is image-only.',
      'Whether the 1000’s ½ HP motor uses a start or run capacitor (not stated). No capacitor claim is made on the page.',
      'UL 325 usage class for the Eagle 1000. The product pages list UL 325 and UL 991 but no class (the Eagle 2000 page lists Class I–IV).',
      'Whether a fail-safe (FSF) Eagle 1000 is still sold. The 2002 parts list shows a fail-safe belt, but current pages list only FSC and FR.',
      'Eagle-1000-DC availability. It is named only in the E600 board’s compatibility list.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // EAGLE 2000
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'eagle-2000-repair',
    brandSlug: 'eagle',
    model: '2000',
    aliases: [
      'Eagle-2000',
      'Eagle 2000 FSC',
      'Eagle-2000-FSC',
      'Eagle-2000-FSF',
      'Eagle 2000 FR',
      'Eagle 2000 DM',
      'Eagle-2000-DM',
      'Eagle 2000 APT',
      'Eagle-2000-APT',
    ],
    descriptor: 'commercial AC chain-drive slide gate operator',
    gateType: 'slide',
    duty: 'commercial',
    status: 'current',
    statusNote:
      'Listed on eagleoperators.com in September 2026 as 2000 FSC, 2000 FR (½ HP and 1 HP), 2000 DM (½ HP and 1 HP) and 2000 APT 1 HP. Eagle’s own manual calls the Eagle-2000 its first operator.',

    title: 'Eagle 2000 Slide Gate Operator Repair | Dallas–Fort Worth',
    metaDescription:
      'Eagle 2000 commercial slide gate stuck open, reversing or dead after a storm? We diagnose loops, belts, limits and Diamond boards across DFW. Call 24/7.',
    h1: 'Eagle 2000 Commercial Slide Gate Operator Repair in DFW',
    heroIntro:
      'We repair Eagle 2000 slide operators on HOA, apartment and commercial entrances across Dallas–Fort Worth. On a busy entrance the usual complaint is a gate stuck open, and on this model that is more often a loop detector or input holding it than a failed operator.',
    heroPoints: [
      'We work out which variant you have (½ HP, 1 HP, DM or APT) before we order a belt or sprocket',
      'We trace a stuck-open gate to the reverse, phantom or exit loop from the board’s LEDs',
      'We test the fail-secure crank, foot release or fire-box chain release, not just the motor',
    ],

    identify: {
      body: [
        'The Eagle 2000 is Eagle’s commercial slide operator and, according to Eagle’s manual, its first operator. Its cover is about 26 inches tall, 18 wide and 17 deep, larger than the residential Eagle 1000, and it sits on a ¼-inch zinc-plated steel chassis under an HDPE cover. It has a 120 VAC auxiliary outlet and a power disconnect.',
        'The variant name tells you the motor and the manual release. FSC is fail-secure with a crank. FSF is fail-safe, meaning you turn off the power and push the gate. FR has a foot pedal. DM and APT listings carry two ½ HP motors (11.4 A combined), and the FR 1 HP carries a single 1 HP motor. The ½ HP versions are rated to 1,000 lbs, and the 1 HP and dual-motor listings to 2,000 lbs, all on gates up to 45 feet.',
        'Getting the variant right matters. Eagle’s parts list uses a different V-belt on the 1 HP and DM units (E284) than on the ½ HP fail-secure (E282) and fail-safe (E283) units, and a different gate sprocket as well.',
      ],
      lookFor: [
        'A slide operator about 26 in tall × 18 in wide × 17 in deep',
        'A 120 VAC outlet and on/off switch plate on the chassis',
        'One motor, or two ½ HP motors side by side on DM and APT units',
        'A crank outlet (FSC), a foot pedal (FR), or no release tool at all (FSF)',
        'A Diamond Control Board with LEDs for reverse loop, phantom loop and exit/open',
      ],
    },

    overview: [
      {
        heading: 'Four ratings in one cover',
        body: [
          'Every current Eagle 2000 moves the gate at 12 inches per second through a size 50 gear reducer and is rated continuous duty, UL 325 and UL 991, ETL listed, for Class I through IV. What changes is the motor. The ½ HP FSC and FR units draw 5.7 A at 115 VAC and are rated for a 45-foot, 1,000-lb gate. The FR 1 HP uses one 1 HP motor, and the DM and APT listings use two ½ HP motors. All three draw 11.4 A and are rated to 2,000 lbs.',
          'The APT is Eagle’s version for apartment buildings, gated communities and industrial sites, and it can be had in fail-safe, fail-secure or foot-release form. If a 1,000-lb ½ HP unit is on a gate that has since had panels or privacy screening added, it can end up running above its rating without anyone noticing.',
        ],
      },
      {
        heading: 'Chain and sprocket: check what is actually fitted',
        body: [
          'Eagle’s current product pages list #40 nickel-plated chain (20 feet supplied) for the 2000. The 2002 parts list shows a #41 gate drive sprocket (E166) on the standard 2000 and a separate #40 sprocket (E366) on the 2000-DM and 1 HP. An older 2000 may therefore have a different chain from a new one, which is why we read the chain before ordering rather than going by the model number alone.',
          'Chain from the gate runs over UHMW idler wheels onto the drive sprocket. On a high-traffic entrance those idlers and the sprocket teeth wear first, and a chain climbing a worn sprocket gives the same jerky start as a slipping belt.',
        ],
      },
      {
        heading: 'Built around loops and traffic',
        body: [
          'The Diamond board on the 2000 has separate inputs and LEDs for a reverse loop, a phantom (shadow) loop and an exit loop. It also has a one-pass setting, which uses the reverse loop so only one vehicle passes per open, and a stop-reverse radio mode that turns one remote button into open, stop and close. Two operators on a bi-parting gate talk over a two-wire master/slave link.',
          'The gate controls access to a whole community, and each of those loops can hold it open, so the board’s input LEDs are the first thing we read. Eagle’s chart for a gate that will not close includes a loop detector LED stuck on, and its remedy is to reset the detector, check the loop wiring, and change the detector’s frequency or sensitivity.',
        ],
      },
      {
        heading: 'Releases: crank, push, pedal or fire box',
        body: [
          'With the FSC, you turn the power off and use the crank. Eagle notes a cordless drill speeds this up. The FSF needs no tool: power off, push the gate. Eagle also describes an optional fire box release (EFB-2070). It is unlocked and a T-handle is pulled to free the chain, which is held by a spring-loaded pin.',
          'Fire boxes get overlooked until someone needs to open the gate in an emergency. Because they sit outside the operator, we check that the pin frees the chain and resets cleanly.',
        ],
      },
    ],

    specs: [
      { label: 'Use', value: 'Commercial slide gates; UL 325 Class I, II, III and IV' },
      { label: 'Motor — ½ HP (FSC, FR)', value: '½ HP continuous-duty AC, 115 VAC, 60 Hz, 5.7 A' },
      { label: 'Motor — FR 1 HP', value: '1 HP continuous-duty AC, 115 VAC, 60 Hz, 11.4 A' },
      { label: 'Motor — DM 1 HP, APT 1 HP', value: 'Dual ½ HP continuous-duty AC, 115 VAC, 60 Hz, 11.4 A' },
      { label: 'Maximum gate — ½ HP', value: '45 ft, 1,000 lbs' },
      { label: 'Maximum gate — 1 HP / dual motor', value: '45 ft, 2,000 lbs' },
      { label: 'Gate speed', value: '12 in per second' },
      { label: 'Drive chain (current)', value: '#40 nickel-plated, 20 ft supplied' },
      { label: 'Gear reducer', value: 'Size 50' },
      { label: 'Chassis and cover', value: '¼ in zinc-plated steel chassis; all-weather UV-resistant HDPE cover' },
      { label: 'Control board', value: 'Diamond Control Board (E555)' },
      { label: 'Auto-close timer', value: '1–60 seconds' },
      { label: 'Listings', value: 'UL 325 and UL 991; ETL listed' },
      { label: 'Housing', value: '26 in H × 18 in W × 17 in D' },
      { label: 'Shipping weight', value: '125 lbs (FSC); 151 lbs (FR 1 HP)' },
    ],

    symptoms: [
      {
        symptom: 'The community gate is stuck open and will not close',
        causes:
          'A loop detector is holding the gate (loop LED on), a global input is shorted, the receiver is stuck on, or the close timer (switch 8) is off. A gate that reopened after an obstruction while closing waits for a key, keypad or receiver command.',
        whatWeDo:
          'We read the board’s reverse, phantom and exit loop LEDs, isolate the input that is active, and test that loop and its detector. Saw-cut loops damaged by pavement movement are a common find.',
      },
      {
        symptom: 'The gate reverses on its own in the middle of travel',
        causes:
          'Eagle lists the operator or chain brackets out of plumb and level, an ERD set too sensitive, a real obstruction, and worn V-groove wheels. On heavier gates, a ½ HP unit working near its 1,000-lb limit also shows the OVERLOAD LED.',
        whatWeDo:
          'We push the released gate by hand, check the wheels and track, confirm the variant against the gate’s weight, and only then fine-tune the opening or closing pot.',
      },
      {
        symptom: 'Tailgaters get through, or the gate closes on the second car',
        causes:
          'One-pass (switch 5) is on with the reverse loop wired as the tailgate sensor, or the loop is wired NO/NC opposite to switch 4.',
        whatWeDo:
          'We confirm what the entrance should do, set switches 4 and 5 to match, and test with a vehicle on each loop.',
      },
      {
        symptom: 'One side of a bi-parting gate moves and the other does not',
        causes:
          'A break or short in the two-wire master/slave link, or the slave operator’s switch 1 set to master.',
        whatWeDo:
          'We check the 20-gauge master/slave pair and the switch settings on both boards before looking at either motor.',
      },
      {
        symptom: 'The motors hum and the gate creeps or stalls, especially on a 1 HP or DM unit',
        causes:
          'A worn E284 V-belt, a worn #40 gate sprocket, or a chain riding the teeth. On a dual-motor unit, one motor may have tripped its reset while the other keeps running.',
        whatWeDo:
          'We check each motor’s red reset button, then the belt and the sprocket, and replace the belt with the one matched to the variant.',
      },
      {
        symptom: 'The gate will not open at all and the green power LED is out',
        causes:
          'The operator’s power disconnect or the breaker is off, a fuse has blown, or a motor has tripped on overload.',
        whatWeDo:
          'We work through Eagle’s “will not open” branch: power switch and breaker, fuse, motor reset, then the board.',
      },
      {
        symptom: 'Emergency services could not open the gate',
        causes:
          'The fire box release pin is seized or not re-engaged, or a fail-secure crank is missing.',
        whatWeDo:
          'We test the fire box T-handle release and the crank, and leave both working and accessible.',
      },
    ],

    components: [
      {
        part: 'Diamond Control Board (E555)',
        whatItDoes:
          'Handles the three loop inputs, one-pass, stop-reverse, master/slave, MAG lock output, alarm, close timer and ERD sensitivity.',
        failureSigns: 'Inputs that stay lit with the device disconnected, no power LED with good supply, or erratic loop behavior after a storm.',
        verdict: 'replace-part',
      },
      {
        part: 'Loop detectors and in-ground loops',
        whatItDoes: 'Detect vehicles at the reverse, phantom (shadow) and exit positions.',
        failureSigns: 'The loop LED stays on, the gate opens for nothing, or it closes with a car in the gate path.',
        verdict: 'repair',
      },
      {
        part: 'V-belts (E282 fail-secure, E283 fail-safe, E284 1 HP/DM)',
        whatItDoes: 'Transfer power from the motor to the gear reducer.',
        failureSigns: 'Squeal, glazing, the motor spinning while the gate lags.',
        verdict: 'replace-part',
      },
      {
        part: 'Size 50 gear reducer',
        whatItDoes: 'Drives the gate sprocket and the limit chain.',
        failureSigns: 'Grinding, heat, or shaft play.',
        verdict: 'replace-part',
      },
      {
        part: 'Gate drive sprocket, UHMW idler wheels and chain',
        whatItDoes: 'Put the reducer’s torque into the gate. Current units ship with #40 chain.',
        failureSigns: 'Hooked sprocket teeth, grooved idlers, chain slap on start and stop.',
        verdict: 'replace-part',
      },
      {
        part: 'Limit switch assembly (E106)',
        whatItDoes: 'Cams on a threaded shaft trip the open and close limit switches.',
        failureSigns: 'The gate overshoots after chain work, or stops short after the cams have crept.',
        verdict: 'adjust',
      },
      {
        part: 'AC motor or motors with thermal reset',
        whatItDoes: 'One ½ HP, one 1 HP, or two ½ HP motors depending on the variant.',
        failureSigns: 'Repeated reset trips, one motor of a pair not turning, a burnt smell.',
        verdict: 'service',
      },
      {
        part: 'Release hardware: crank, foot release or fire box',
        whatItDoes: 'Manual and emergency opening.',
        failureSigns: 'The crank will not engage, the pedal will not free the gate, or the fire box pin is seized.',
        verdict: 'service',
      },
    ],

    repairOrReplace: {
      summary:
        'An Eagle 2000 on a community entrance is worth repairing in most cases. It is still in production, its drive parts are listed by distributors, and most “broken gate” calls on this model come down to loops, belts, sprockets or settings. The honest exception is a gate that has grown beyond what the installed variant is rated for.',
      repair: [
        'A stuck-open gate traced to a loop, detector or shorted input',
        'A slipping belt, worn sprocket or grooved idler on a high-cycle entrance',
        'A Diamond board damaged by a surge on an operator with a healthy drive train',
        'A seized fire box or crank release',
      ],
      replace: [
        'A ½ HP FSC or FR on a gate that is now heavier than 1,000 lbs. A 1 HP or dual-motor 2000 (rated to 2,000 lbs) is the in-brand answer.',
        'A gate heavier than 2,000 lbs or longer than 45 ft is beyond every Eagle 2000 listing, so the operator has to be chosen for the gate rather than the brand.',
        'A worn-out reducer and motor on a very old unit where the frame and chassis are corroded. Compare the repair total with a new 2000 of the right variant.',
      ],
    },

    warranty: {
      manufacturer:
        'Eagle’s product pages list the Eagle 2000 with a “5-Year Limited (Commercial)” warranty, and a “7-Year Limited” warranty when used in a residential application. Eagle’s homepage mentions an option to extend coverage up to 10 years.',
      notes: [
        'The terms above are Eagle’s currently published terms. Older units may have been sold under different terms.',
        'For a unit still inside its term, contact the installing dealer or Eagle before paying for a repair.',
        'HOA and property managers: keep the installation date and invoice with the gate records. Warranty length depends on how the unit is used.',
      ],
    },

    dfw: [
      {
        heading: 'Pavement movement and saw-cut loops',
        body: [
          'DFW’s expansive clay heaves and shrinks driveway slabs between wet springs and dry summers. Saw-cut loop wires break or short where slabs crack or separate at joints. On an Eagle 2000, that shows up as a loop LED that stays on and a gate that will not close, and it is often blamed on the operator. Checking the loop LEDs is quicker than a board swap and more likely to find the real fault.',
        ],
      },
      {
        heading: 'Heat on a high-cycle entrance',
        body: [
          'A community gate may cycle hundreds of times a day, and in August the operator is working in triple-digit heat. The motor’s thermal protection is doing its job when it trips. On a dual-motor DM or APT, one motor tripping while the other keeps working makes the gate slow and weak without stopping it. Checking both reset buttons is part of every heat-season call.',
        ],
      },
      {
        heading: 'Storms, surges and long accessory runs',
        body: [
          'Commercial entrances run long cable to keypads, telephone entry and loop detectors, and every run is an antenna for a nearby lightning strike. The Diamond board has built-in lightning and surge suppression, but spring storms still take out detectors and receivers powered from its 24 VAC output. We test those accessories one at a time before calling the board failed.',
        ],
      },
    ],

    process: [
      {
        step: 'Identify the variant',
        body: 'Motor count and horsepower, release type and chain size, so the belt, sprocket and rating are right before we order parts.',
      },
      {
        step: 'Read inputs and loops',
        body: 'Reverse, phantom and exit loop LEDs, receiver, key/keypad, stop and edge inputs. A stuck-open gate usually tells us where to look here.',
      },
      {
        step: 'Release and move the gate',
        body: 'Crank, pedal, push or fire box, then the gate by hand along its full length: wheels, track, catch rollers, positive stops.',
      },
      {
        step: 'Work the drive from motor to gate',
        body: 'Motor reset(s), V-belt, reducer, sprocket, idlers, chain slack, then limits and ERD.',
      },
      {
        step: 'Quote and repair',
        body: 'Written price before work. Before we leave, we test one-pass, loop reversal and obstruction reversal with the entrance in normal use.',
      },
    ],

    faqs: [
      {
        q: 'What do FSC, FSF, FR, DM and APT mean on an Eagle 2000?',
        a: 'FSC is fail-secure (crank to open), FSF is fail-safe (power off and push), and FR is foot release. DM and APT listings carry two ½ HP motors and are rated to 2,000 lbs. APT is aimed at apartments, gated communities and industrial sites.',
      },
      {
        q: 'Our HOA gate stays open. Is the Eagle 2000 failing?',
        a: 'Usually not. Eagle’s own chart for a gate that will not close starts with a stuck receiver, an active global input, a loop detector LED that stays on, and the close timer switch. The operator is often healthy.',
      },
      {
        q: 'Is the Eagle 2000 still available?',
        a: 'Yes. In September 2026 Eagle listed the 2000 FSC, FR ½ HP and 1 HP, DM ½ HP and 1 HP, and APT 1 HP.',
      },
      {
        q: 'How heavy a gate can an Eagle 2000 move?',
        a: 'Eagle rates the ½ HP versions for 45 ft and 1,000 lbs, and the 1 HP and dual-motor versions for 45 ft and 2,000 lbs.',
      },
      {
        q: 'Can we open the gate if the power is out?',
        a: 'Yes, depending on the release. On an FSC you turn off the power and use the crank. On an FSF you turn off the power and push. On an FR you step on the pedal and push. Sites with an Eagle fire box can pull the T-handle to free the chain.',
      },
      {
        q: 'Does an Eagle 2000 use the same board as the Eagle 1000?',
        a: 'Yes. Eagle lists the Diamond Control Board (E555) for the 100, 1000, 200, 2000, 2000-APT and OH operators. The drive parts differ between the 1000 and 2000.',
      },
    ],

    relatedModels: ['eagle/eagle-1000-repair', 'eagle/eagle-200-repair'],
    relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'access-control-repair', 'emergency-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Eagle Operators — Eagle 2000 FSC product page (½ HP specs, ratings, warranty)', url: 'https://eagleoperators.com/portfolio/eagle-2000-fsc/' },
      { label: 'Eagle Operators — Eagle 2000 DM 1 HP product page (dual ½ HP, 2,000 lbs)', url: 'https://eagleoperators.com/portfolio/eagle-2000-dm-1-hp/' },
      { label: 'Eagle Operators — Eagle 2000 FR 1 HP product page', url: 'https://eagleoperators.com/portfolio/eagle-2000-fr-1-hp/' },
      { label: 'Eagle Operators — Eagle 2000 APT 1 HP product page', url: 'https://eagleoperators.com/portfolio/eagle-2000-apt-1-hp/' },
      { label: 'Eagle Operators — slide gate operators listing', url: 'https://eagleoperators.com/slide-gate-operators/' },
      EAGLE_SLIDE_MANUAL,
      EAGLE_BOARDS,
      EAGLE_HOME,
    ],
    toConfirm: [
      'Chain size on older Eagle 2000s. The 2002 parts list shows a #41 sprocket (E166) on the standard 2000 and a #40 sprocket (E366) on DM/1 HP, while current pages list #40 for all.',
      'The APT 1 HP page lists a 45 ft / 2,000 lb maximum but also says it suits “50’ feet or 2500lbs Gates”. The page states only 45 ft / 2,000 lbs until Eagle clarifies.',
      'What “DM” and “APT” stand for. Eagle does not define them; the page describes the dual ½ HP motors and the stated applications only.',
      'Whether the 2002 V-belt part numbers (E282/E283/E284) and limit assembly (E106) are unchanged on current production.',
      'Model label location on the Eagle 2000.',
      'Whether the FSF (fail-safe) 2000 is still sold. It appears in the FSC page’s capacity line but not as its own listing.',
      'Capacitor presence on Eagle 2000 motors (not stated). The page makes no capacitor claim.',
    ],
    indexable: true,
  },

  // ───────────────────────────────────────────────────────────────────────────
  // EAGLE 200
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'eagle-200-repair',
    brandSlug: 'eagle',
    model: '200',
    aliases: ['Eagle-200', 'Eagle 200 1/2 HP', 'Eagle-200-1HP', 'Eagle 200 1 HP', 'Eagle-200-DM', 'Eagle 200 DM', 'Eagle-200-DC', 'Eagle-200-DC-HD'],
    descriptor: 'commercial AC swing gate operator with swing arm and clutch',
    gateType: 'swing',
    duty: 'commercial',
    status: 'current',
    statusNote:
      'Listed on eagleoperators.com in September 2026 as Eagle 200 ½ HP, 200 1 HP and 200 DM. DC versions (200-DC, 200-DC-HD) appear in Eagle’s 2013 manual.',

    title: 'Eagle 200 Swing Gate Opener Repair | Dallas–Fort Worth',
    metaDescription:
      'Eagle 200 swing gate reversing, slipping or stuck after a power outage? We check the clutch, release lever, limits and Diamond board across DFW. Call 24/7.',
    h1: 'Eagle 200 Swing Gate Operator Repair in Dallas–Fort Worth',
    heroIntro:
      'We repair Eagle 200 commercial swing operators on estate, HOA and commercial gates across Dallas–Fort Worth. Most calls on this model are a gate that reverses mid-swing or pushes weakly. On a 200, that usually means an out-of-level pad, a clutch that needs setting, or reverse sensing set too sensitive, not a failed motor.',
    heroPoints: [
      'We check that the operator is plumb and level before we adjust anything. Eagle lists it first.',
      'We set the clutch to Eagle’s roughly ¼-turn slip, not tighter',
      'We check the easy-release lever and both limit switch activators on every call',
    ],

    identify: {
      body: [
        'The Eagle 200 is a pad-mounted commercial swing operator. It is a box about 29½ inches tall, 22½ wide and 17 deep, with a no-pinch swing arm reaching out to the gate. Inside, a #50 nickel-plated drive chain connects two stages of gear reduction (size 60 and size 40). The cover is UV-resistant HDPE over a 3/16-inch zinc-plated steel chassis.',
        'Two Eagle swing operators look like it. The Eagle 100 uses the same Diamond board and the same manual but is a residential/light-commercial unit rated to 18 feet and 600 lbs. The Eagle II is a smaller residential swing unit (14 ft, 400 lbs) that uses the AC Mini board with a four-switch selector and a quick-release lever.',
        'An Eagle 200 also comes as a 1 HP version, a DM version and battery-powered DC versions (200-DC and 200-DC-HD). The DC units use a different board, the Diamond DC (E600), and have built-in battery backup. If your 200 keeps running when the power is out and was not sold with an add-on battery pack, it is probably a DC version.',
      ],
      lookFor: [
        'A pad-mounted box about 29½ in tall × 22½ in wide × 17 in deep',
        'A swing arm from the operator to a bracket on the gate',
        'A top cap held by a bolt, with the easy-release lever underneath',
        'A Diamond Control Board (AC) or Diamond DC board with LEDs and an eight-switch selector',
        'A red reset button on top of the 115 VAC motor (AC versions)',
      ],
    },

    overview: [
      {
        heading: 'Two reducers, a chain and a clutch',
        body: [
          'The AC Eagle 200 drives its arm through size 60 and size 40 gear reducers joined by a #50 chain, with a clutch in the drive. It opens a gate from 0 to 90 degrees in about 18 seconds. The standard unit is a ½ HP continuous-duty AC motor (115 VAC, 5.7 A) rated for 20 ft and 750 lbs. The 1 HP version (10.5 A) is rated for 20 ft and 1,000 lbs.',
          'The clutch is where a 200 differs most from a slide operator. Eagle’s instruction is that, depending on gate weight, the clutch may slip, with typical slippage of about ¼ turn, and that it should be re-adjusted if it does not slip. A clutch wound tight to stop a heavy gate from slipping takes away the mechanical give that protects the arm, the reducers and the gate hinges.',
        ],
      },
      {
        heading: 'Reverse sensing works differently each way',
        body: [
          'The Diamond board’s ERD (emergency reversing device) is a two-way adjustable reverse sensor. If the gate meets an obstruction while closing, it stops, reverses and returns to fully open. If it meets one while opening, it stops, reverses, and stops again after 4 to 6 inches. Either way, the operator stays in OVERLOAD for five minutes or until someone resets it by hand. If it goes into overload twice in a row, the alarm sounds until it is reset.',
          'That difference is a useful clue. A 200 that jumps back a few inches and then sits still is reporting something on the opening side, such as a hinge binding at the end of the swing, wind load on a solid gate, or a post that has leaned. A gate that swings all the way back open reported trouble while closing.',
        ],
      },
      {
        heading: 'Limits: top and bottom activators',
        body: [
          'Travel is set with two limit switches, top and bottom, each tripped by an activator held with a set screw. Eagle’s order is specific. The board must have power so the limit LEDs work, and the close limit is set first, with the gate in its closed position. Setting open first, or setting limits with the board off, is a common reason a 200 closes short of the latch or slams the stop.',
          'Feature switch 2 sets open left or open right. If that switch is flipped after the limits are set, the operator reads its limit switches backwards.',
        ],
      },
      {
        heading: 'Loops and photo-eyes on a swing gate',
        body: [
          'Eagle’s manual lays out three in-ground loops for the 200: a reverse loop, a phantom (shadow) loop under the swing arc, and an exit loop that opens the gate for a departing vehicle. For secondary entrapment protection it specifies EMX IRB-325 photocells wired to the board’s edge sensor global input.',
          'On a swing gate, the phantom loop keeps the gate from starting its swing onto a car parked in the arc. Without it, a closing gate can swing into a car before any reverse sensing reacts.',
        ],
      },
    ],

    specs: [
      { label: 'Use', value: 'Commercial swing gates; UL 325 Class I, II, III and IV' },
      { label: 'Motor — 200 (½ HP)', value: '½ HP continuous-duty AC, 115 VAC, 60 Hz, 5.7 A' },
      { label: 'Motor — 200-1HP', value: '1 HP, 115 VAC, 10.5 A' },
      { label: 'Maximum gate — 200 and 200-DM', value: '20 ft, 750 lbs' },
      { label: 'Maximum gate — 200-1HP', value: '20 ft, 1,000 lbs' },
      { label: 'Maximum gate — 200-DC / 200-DC-HD', value: '20 ft, 800 lbs / 20 ft, 1,000 lbs (manual, 2013)' },
      { label: 'Opening time', value: 'About 18 seconds, 0–90°' },
      { label: 'Drive chain', value: '#50 nickel-plated' },
      { label: 'Gear reducers', value: 'Size 60 and size 40' },
      { label: 'Control board', value: 'Diamond (AC models); Diamond DC (DC models)' },
      { label: 'Battery backup', value: 'AC: optional Power I (½ HP) or Power II (1 HP), about 40–80 cycles. DC: built in, about 100 cycles (manual; varies with gate)' },
      { label: 'Listings', value: 'UL 325 and UL 991; ETL listed' },
      { label: 'Housing', value: '29½ in H × 22½ in W × 17 in D' },
      { label: 'Shipping weight', value: '150 lbs' },
    ],

    symptoms: [
      {
        symptom: 'The gate swings partway, reverses, and the OVERLOAD light stays on',
        causes:
          'Eagle’s chart lists the operator not being plumb and level, the ERD current sensor set too sensitive, or a real obstruction.',
        whatWeDo:
          'We check the pad and operator with a level, release the arm and swing the gate by hand to feel for hinge bind, and only then turn the ERD slightly clockwise.',
      },
      {
        symptom: 'The gate jerks back a few inches while opening, then just stops',
        causes:
          'That is the ERD opening response. It reverses 4–6 inches and stops. Common triggers are a hinge binding near full open, a leaning post, or wind against a solid gate.',
        whatWeDo:
          'We look at hinge wear and post plumb through the last part of the swing, and at the open limit and positive stop.',
      },
      {
        symptom: 'The motor runs but the gate barely moves or the arm slips',
        causes:
          'The clutch is set too loose for the gate’s weight, or the #50 chain between the reducers is slack.',
        whatWeDo:
          'We reset the clutch to about ¼ turn of slip under load, as Eagle specifies, and check chain tension and reducer output.',
      },
      {
        symptom: 'After a power outage the gate will not run, even with power back',
        causes:
          'The easy-release lever was left in the released position after someone moved the gate by hand, or the motor tripped its reset.',
        whatWeDo:
          'We re-engage the release under the top cap, check the arm alignment gaps are even, and press the motor reset if needed.',
      },
      {
        symptom: 'The gate stops short of closing, or slams past the latch',
        causes:
          'The limit activators have moved, the limits were set in the wrong order, or switch 2 (open left/right) was changed.',
        whatWeDo:
          'With the board powered, we set the close limit first, then open, confirm switch 2, and cycle the gate several times.',
      },
      {
        symptom: 'Nothing works and the green power LED is off',
        causes:
          'The operator’s power switch or breaker, a blown fuse, or a surge.',
        whatWeDo:
          'We check supply, the power switch, the fuse (replaced like for like, as Eagle directs), and then the board.',
      },
      {
        symptom: 'The alarm keeps sounding',
        causes:
          'Two overloads in a row. The board sounds the alarm until it is reset.',
        whatWeDo:
          'We find the cause first, whether a bind, an obstruction or a loose pad, then reset.',
      },
    ],

    components: [
      {
        part: 'Clutch',
        whatItDoes: 'Lets the drive slip under excess load, protecting the arm, reducers and gate.',
        failureSigns: 'The arm slips during normal travel (too loose), or the gate is forced against obstructions (too tight).',
        verdict: 'adjust',
      },
      {
        part: 'Easy-release lever and top cap',
        whatItDoes: 'Disengages the drive so the gate can be swung by hand.',
        failureSigns: 'The gate will not move by hand, or the operator runs without moving the arm after a manual release.',
        verdict: 'service',
      },
      {
        part: 'Size 60 and size 40 gear reducers',
        whatItDoes: 'Two reduction stages between the motor and the arm.',
        failureSigns: 'Grinding, backlash felt at the arm, or oil at the seals.',
        verdict: 'replace-part',
      },
      {
        part: '#50 drive chain',
        whatItDoes: 'Links the reduction stages inside the operator.',
        failureSigns: 'Clicking or a delay before the arm moves, or visible slack.',
        verdict: 'adjust',
      },
      {
        part: 'Top and bottom limit switches with activators',
        whatItDoes: 'Stop the arm at the closed and open positions.',
        failureSigns: 'Short or long travel, or limit LEDs that do not change.',
        verdict: 'adjust',
      },
      {
        part: 'Diamond Control Board (E555) / Diamond DC (E600)',
        whatItDoes: 'Logic, ERD reverse sensing, loops, master/slave, timer and alarm.',
        failureSigns: 'No LEDs with good supply and fuse, or inputs stuck on with the device disconnected.',
        verdict: 'replace-part',
      },
      {
        part: 'No-pinch swing arm and gate bracket',
        whatItDoes: 'Converts the reducer’s rotation into the gate’s swing.',
        failureSigns: 'Worn pivot bushings, a bent arm after a vehicle strike, or a loose gate bracket.',
        verdict: 'repair',
      },
      {
        part: '115 VAC motor with red reset button',
        whatItDoes: 'Drives the AC versions and trips on overheating.',
        failureSigns: 'Trips repeatedly, especially on hot afternoons or with a binding gate.',
        verdict: 'service',
      },
    ],

    repairOrReplace: {
      summary:
        'The Eagle 200 is a mechanical swing operator with adjustable parts, and most of its faults are settings, the release, or the gate’s hinges and post. It is still in Eagle’s catalog. Replacement is worth discussing when the gate is outside the model’s rating, or when a reducer and board both fail on an old unit.',
      repair: [
        'Mid-swing reversals caused by an out-of-level pad, a binding hinge or ERD sensitivity',
        'Arm slip fixed by setting the clutch, or chain slack between reducers',
        'Limits set in the wrong order, or an activator that has moved',
        'A board lost to a storm on an operator whose reducers are sound',
      ],
      replace: [
        'A ½ HP 200 on a gate heavier than 750 lbs. The 200-1HP is rated to 1,000 lbs at the same 20-ft length.',
        'A leaf longer than 20 ft, which no Eagle 200 version is rated for.',
        'A property that needs the gate to keep working through outages. Compare an AC 200 with an add-on Power I or II pack (about 40–80 cycles) against a DC 200 with built-in backup (about 100 cycles).',
      ],
    },

    warranty: {
      manufacturer:
        'Eagle’s Eagle 200 product page lists a “5-Year Limited (Commercial)” warranty and a “7-Year Limited” warranty when used in a residential application. Eagle’s homepage mentions an option to extend coverage up to 10 years.',
      notes: [
        'These are Eagle’s currently published terms. Older units may have been sold under different terms, so check the card or ask Eagle.',
        'If the unit may still be covered, contact the installing dealer or Eagle before paying for a repair.',
        'Battery packs (Power I and Power II) are separate accessories. Check their own terms.',
      ],
    },

    dfw: [
      {
        heading: 'Clay soil and a pad that is no longer level',
        body: [
          'Swing operators suffer more from ground movement than slides, because the arm geometry depends on where the pad sits relative to the hinge. When expansive clay shifts a pad or leans a gate post, the 200 starts reversing mid-swing, and Eagle lists an operator that is not plumb and level as the first cause. Re-leveling and re-setting the limits often solves what looked like a bad sensor.',
        ],
      },
      {
        heading: 'Heat, heavy iron and the reset button',
        body: [
          'Estate and HOA swing gates in DFW are often heavy ornamental iron, and a 750-lb-rated ½ HP unit on a leaf near that weight runs hot in summer. Eagle’s instruction when the motor stops is to turn off the power, let it cool, and press the reset on top of the motor. If it keeps happening in summer, the gate may be at or above the rating, or the hinges may be adding drag.',
        ],
      },
      {
        heading: 'Wind, storms and solid gates',
        body: [
          'Spring storm fronts bring strong gusts, and a solid or screened swing leaf acts like a sail. The 200 senses the added load, reverses and goes into OVERLOAD, sometimes twice, which sets off the alarm. Lightning and surges add dead boards and loop detectors to the same storm-season list, so we check the ERD history and the power and loop LEDs together.',
        ],
      },
    ],

    process: [
      {
        step: 'Level and look',
        body: 'Pad, operator and gate post checked for plumb and level, and hinges inspected. This is Eagle’s first troubleshooting cause for a reason.',
      },
      {
        step: 'Release under the top cap and swing the gate by hand',
        body: 'Feel for hinge bind and the swing arc against the driveway, then re-engage the release and check the alignment gaps are even.',
      },
      {
        step: 'Clutch, chain and reducers',
        body: 'Clutch set to about ¼ turn of slip, #50 chain tension, reducer play.',
      },
      {
        step: 'Board, limits and ERD',
        body: 'Read the OVERLOAD and input LEDs, set the close limit then the open limit with the board powered, and adjust the ERD last.',
      },
      {
        step: 'Quote, repair, test both directions',
        body: 'Approved price first. Afterward we confirm the full-open reversal when closing and the 4–6 inch reversal when opening.',
      },
    ],

    faqs: [
      {
        q: 'Why does my Eagle 200 jump back a few inches and stop?',
        a: 'That is how the ERD reacts to an obstruction while opening. It reverses 4–6 inches and stops. While closing, it reverses all the way open. Look for a binding hinge, a leaning post or wind load near the end of the swing.',
      },
      {
        q: 'How do I open an Eagle 200 by hand?',
        a: 'Eagle’s procedure is to unscrew the bolt, remove the top cap and rotate the easy-release lever. Re-engage it afterward, or the operator will run without moving the gate.',
      },
      {
        q: 'Is my operator an Eagle 200, an Eagle 100 or an Eagle II?',
        a: 'The 200 is the largest, about 29½ in tall. The 100 shares its Diamond board and manual but is rated only to 18 ft and 600 lbs. The Eagle II is residential (14 ft, 400 lbs) with a smaller AC Mini board.',
      },
      {
        q: 'Should I tighten the clutch so the gate stops slipping?',
        a: 'Only to Eagle’s spec. Eagle describes typical slippage of about ¼ turn. Tightening beyond that to overcome a heavy or binding gate removes protection for the arm, reducers and hinges.',
      },
      {
        q: 'Is the Eagle 200 still sold?',
        a: 'Yes. Eagle listed the 200 ½ HP, 200 1 HP and 200 DM on its site in September 2026.',
      },
      {
        q: 'Can an Eagle 200 run during a power outage?',
        a: 'AC models can with an optional Power I (½ HP) or Power II (1 HP) battery pack. Eagle’s manual estimates about 40–80 cycles. The 200-DC and 200-DC-HD have built-in backup rated at about 100 cycles. Real numbers vary with gate size and weight.',
      },
    ],

    relatedModels: ['eagle/eagle-1000-repair', 'eagle/eagle-2000-repair'],
    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'iron-gate-repair', 'commercial-gate-repair'],
    imageSlugs: [],
    projectSlugs: [],
    videoSlugs: [],

    sources: [
      { label: 'Eagle Operators — Eagle 200 ½ HP product page (specs, reducers, warranty)', url: 'https://eagleoperators.com/portfolio/eagle-200-1-2-hp/' },
      { label: 'Eagle-100 / Eagle-200 Series swing gate operators installation & owners manual, 2013 (PDF)', url: 'https://eagleoperators.com/wp-content/uploads/2022/02/Eagle-100-Installation-manual.pdf' },
      { label: 'Eagle Operators — Eagle II product page (for identification)', url: 'https://eagleoperators.com/portfolio/eagle-ii/' },
      { label: 'Eagle Operators — swing gate operators listing', url: 'https://eagleoperators.com/swing-gate-operators/' },
      EAGLE_BOARDS,
      EAGLE_HOME,
    ],
    toConfirm: [
      'Meaning of “DM” on the Eagle 200. The 2013 manual lists the 200-DM as “(2) 1/2 HP” with the same 750-lb rating as the ½ HP unit, which could mean a dual-gate pair rather than a dual-motor single operator. The page avoids defining it.',
      'Whether the 200-DC and 200-DC-HD are still sold. They appear in the 2013 manual but not on the current swing listing.',
      'Eagle 100 rating. The 2013 manual says 18 ft / 600 lbs, while some retailers list 800 lbs. The page uses the manual figure.',
      'Model label location on the Eagle 200.',
      'Capacitor presence on the 200’s AC motor (not stated). No capacitor claim is made.',
      'Whether current Eagle 200 production matches the 2013 manual’s clutch, release and limit layout.',
    ],
    indexable: true,
  },
]
