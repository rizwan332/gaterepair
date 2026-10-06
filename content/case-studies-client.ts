import type { Project } from './projects'

/**
 * The eighteen real jobs the client documented and sent over on 29 Sep 2026.
 *
 * ── HOW THESE DIFFER FROM THE PROJECTS ABOVE THEM ───────────────────────────
 * The earlier case studies were written around library photography we held,
 * with `verified: false` because we had the pictures but not the job record.
 * These are the opposite: the client wrote each one himself, with the city, the
 * operator, what was wrong, what was replaced, what it cost where he chose to
 * say, and his own photographs of that specific job. So every one of them is
 * `verified: true` and carries a real `city`.
 *
 * ── ON ACCURACY ─────────────────────────────────────────────────────────────
 * Every figure, warranty term and component here is taken from his documents
 * and nothing is rounded, inferred or improved. Where he gave a price ($3,100
 * for the Viking refurbishment, the competing $6,000 estimates) it is his
 * number for that job and is written as such rather than as a rate — there is
 * still no confirmed price list, and content/pricing.ts remains unconfirmed.
 *
 * Two jobs are in towns that are NOT on his service-area list: Lake Kiowa
 * (Cooke County) and Mildred (Navarro County). They are named honestly and
 * carry no `citySlug`, because inventing a service-area page for a town he has
 * not said he covers would be worse than the missing link. Flagged for him.
 *
 * ── THE INSTRUCTIONS IN THE DOCUMENTS ───────────────────────────────────────
 * Each document ends with publishing notes — where to link the case study
 * from, a suggested title and H1, and how the photos are grouped. Those are
 * followed here: `seoTitle` and `title` use his wording where he supplied it,
 * `citySlug`, `brand`, `service` and `modelKey` produce the internal links he
 * asked for, and the photo order is the document order, which is how he
 * grouped before / during / after.
 */
export const clientCaseStudies: Project[] = [
  {
    slug: 'eagle-sliding-gate-repair-mesquite-tx',
    seoTitle: 'Eagle Sliding Gate Wheel Repair, Mesquite TX',
    title: 'The Opener Was Fine. The Wheels Had Completely Failed.',
    summary:
      'A three-year-old Eagle operator was working perfectly. The sliding gate wheels underneath it were broken, which is a different repair entirely.',
    market: 'texas',
    city: 'Mesquite, Texas',
    citySlug: 'mesquite',
    verified: true,
    service: 'automatic-gate-repair',
    brand: 'Eagle',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'eagle',
    imageIndexes: [],
    photoSet: 'eagle-sliding-gate-repair-mesquite-tx',
    videos: [{ label: 'Customer video testimonial', url: 'https://youtu.be/ftWhbFTdF98?is=Qm6Bmo37j3l1Yx_A' }],
    problem: [
      'The customer was having problems with a residential sliding gate in Mesquite.',
      'The Eagle gate opener itself was only about three years old and was operating properly. The gate wheels were completely broken.',
    ],
    diagnosis: [
      'Inspecting the gate and the operator together showed the fault was mechanical rather than electrical.',
      'The damaged wheels were the cause. The drive chain also needed shortening and tightening.',
      'The opener did not need to be replaced.',
    ],
    solution: [
      'Replaced the broken sliding gate wheels.',
      'Shortened and tightened the existing chain.',
      'Adjusted the limit switch.',
      'Tested the complete gate system after the repair.',
    ],
    outcome:
      'The sliding gate was operating properly again. The existing Eagle opener stayed in service, because there was nothing wrong with it.',
    takeaway:
      'A gate that will not move is not evidence that the operator has failed. The wheels carry the entire weight of the gate and they wear out; an opener asked to drag a gate on broken wheels looks exactly like an opener that is dying. Check what the gate is rolling on before condemning what is pushing it.',
  },

  {
    slug: 'liftmaster-csl24ul-installation-frisco-tx',
    seoTitle: 'LiftMaster CSL24UL Install, Frisco',
    title: 'His Eagle 2000 Was 24 Years Old. We Told Him It Did Not Have to Go.',
    summary:
      'Gary’s operator was two decades old but the real faults were the wheels and chain. He upgraded anyway — for the battery backup and the warranty, not because we condemned it.',
    market: 'texas',
    city: 'Frisco, Texas',
    citySlug: 'frisco',
    verified: true,
    service: 'gate-installation',
    brand: 'LiftMaster',
    modelKey: 'liftmaster/csl24ul-repair',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'gary-liftmaster-csl24ul-gate-opener-frisco-tx',
    videos: [{ label: 'Gary’s video testimonial', url: 'https://youtu.be/CJX4QQ4Mrbk?is=Ac2F51WMXPXKTwZF' }],
    problem: [
      'Gary’s sliding gate in Frisco was running on an Eagle 2000 operator that was approximately 24 years old.',
      'The gate had mechanical problems that had never been addressed.',
    ],
    diagnosis: [
      'We did not recommend replacing the operator simply because it was old.',
      'Our diagnosis was that the primary issues were the gate wheels and the chain, neither of which had ever been replaced, and both of which could have been put right while keeping the existing Eagle operator.',
      'Gary chose to upgrade anyway, for the features rather than because the old unit was condemned: battery backup, monitored safety protection, manual release, modern operator technology and the manufacturer warranty.',
    ],
    solution: [
      'Removed the existing Eagle 2000 operator.',
      'Installed a new LiftMaster CSL24UL sliding gate operator.',
      'Installed and replaced the gate chain, and addressed the gate wheels as part of the project.',
      'Installed the safety sensor system and connected the battery backup.',
      'Completed the wiring, programming, limit adjustments, testing and final setup, then verified operation and safety functions.',
    ],
    outcome:
      'A modern LiftMaster sliding-gate system behind the existing custom residential gate, programmed, adjusted and tested. Gary provided a video testimonial.',
    takeaway:
      'Age on its own is not a diagnosis. We told Gary his 24-year-old operator could stay and what it would actually take to fix his gate; he chose the upgrade for the battery backup and the warranty. Those are two different conversations, and a customer is entitled to have the first one before being sold the second.',
  },

  {
    slug: 'liftmaster-csl24ul-installation-dallas-tx',
    seoTitle: 'CSL24UL Sunday Install, Dallas',
    title: 'A Refurbished Opener Fitted as a Cost Saving. It Was Not Right for the Gate.',
    summary:
      'A new homeowner called on a Sunday. The previous owner’s contractor had fitted a refurbished unit that was never suited to the gate it was moving.',
    market: 'texas',
    city: 'Dallas, Texas',
    citySlug: 'dallas',
    verified: true,
    service: 'gate-installation',
    brand: 'LiftMaster',
    modelKey: 'liftmaster/csl24ul-repair',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-csl24ul-sliding-gate-opener-installation-dallas-tx',
    videos: [{ label: 'Watch the Dallas CSL24UL installation', url: 'https://youtu.be/l51kcaEzoMQ' }],
    problem: [
      'A Dallas homeowner called on a Sunday because the sliding gate was not working. They had recently bought the house.',
    ],
    diagnosis: [
      'The existing opener was a refurbished unit that had reportedly been installed by a contractor as a cost-saving measure.',
      'Based on the gate itself and the condition of the installation, it was not an appropriate operator for what it was being asked to move.',
    ],
    solution: [
      'Installed a LiftMaster CSL24UL sliding gate operator.',
      'Battery backup system, so the gate still works in a power cut.',
      'Manual release for moving the gate by hand when needed.',
      'Safety photo eye.',
      'Two wireless keypads.',
      'myQ smartphone access, to open the gate from a phone.',
    ],
    outcome:
      'The CSL24UL carries a seven-year manufacturer limited warranty on residential installations, subject to LiftMaster’s warranty terms.',
    takeaway:
      'A refurbished operator is not automatically a bad buy, but it has to suit the gate. Fitting whatever was cheapest and available is how a new owner inherits a gate that has never worked properly and no record of why.',
  },

  {
    slug: 'liftmaster-la400-double-swing-installation-lake-kiowa-tx',
    seoTitle: 'LA400 Double Swing Install, Lake Kiowa',
    title: 'Two Openings, Two Double Swing Systems, One Underground Exit Loop',
    summary:
      'A Lake Kiowa property needed both its entrance and its exit automated. Each got its own LA400 double swing system, with a buried loop detector for exit.',
    market: 'texas',
    city: 'Lake Kiowa, Texas',
    verified: true,
    service: 'gate-installation',
    brand: 'LiftMaster',
    modelKey: 'liftmaster/la400-repair',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-la400-double-swing-gate-installation-lake-kiowa-tx',
    videos: [{ label: 'Watch the Lake Kiowa installation', url: 'https://youtu.be/OMUKZWsuZRI' }],
    problem: [
      'A property in Lake Kiowa had two separate gate openings — an entrance and an exit — and wanted both automated.',
    ],
    diagnosis: [
      'Each opening needed its own double swing system rather than one system serving both, because they are physically separate gates.',
      'The exit needed to open for a vehicle leaving without anyone reaching for a remote, which is what an underground loop does.',
    ],
    solution: [
      'LiftMaster LA400 double swing opener system for the entrance gate.',
      'LiftMaster LA400 double swing opener system for the exit gate.',
      'Underground exit loop and vehicle loop detector.',
      'Wireless keypads.',
      'Safety photo eyes for both the entrance and the exit.',
    ],
    outcome:
      'Both openings automated with keypad access, a buried exit loop and detector, and photo-eye protection on each gate.',
    takeaway:
      'An exit gate has a different job from an entrance. Nobody wants to stop and find a remote to leave their own property, which is why the loop goes in the ground on the way out and the keypad goes on the way in.',
  },

  {
    slug: 'liftmaster-la400-arm-replacement-university-park-tx',
    seoTitle: 'LiftMaster LA400 Arm Replacement, University Park',
    title: 'A Gate Left Unused for a Year, a Broken Bracket and a Broken Arm',
    summary:
      'The customer had not operated the gate in about twelve months and wanted it working again. The bracket and the operator arm had both failed.',
    market: 'texas',
    city: 'University Park, Texas',
    citySlug: 'university-park',
    verified: true,
    service: 'gate-motor-repair',
    brand: 'LiftMaster',
    modelKey: 'liftmaster/la400-repair',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-la400-swing-gate-repair-university-park-tx',
    videos: [{ label: 'Watch the University Park repair', url: 'https://youtu.be/NhKJMacpdNs' }],
    problem: [
      'A customer in University Park had not used their swing gate for approximately a year and wanted it returned to service.',
    ],
    diagnosis: [
      'Inspection found physical damage to the bracket and to the gate operator arm.',
      'The damage was mechanical rather than a fault in the operator itself.',
    ],
    solution: ['Installed a replacement LiftMaster LA400 arm on the existing swing gate.'],
    outcome: 'The gate returned to normal operation on its existing operator.',
    takeaway:
      'A gate left standing for a year does not simply pick up where it left off. Brackets and arms take load even when nothing is moving, and the damage tends to be found the moment someone asks the gate to work again.',
  },

  {
    slug: 'liftmaster-rust-free-chain-dallas-tx',
    seoTitle: 'LiftMaster Rust-Free Chain Replacement, Dallas',
    title: 'The Chain Was Heavily Rusted. The Operator Was Not the Problem.',
    summary:
      'A new owner inherited a LiftMaster sliding gate the previous owner had never maintained. We replaced the component that had actually failed.',
    market: 'texas',
    city: 'Dallas, Texas',
    citySlug: 'dallas',
    verified: true,
    service: 'automatic-gate-repair',
    brand: 'LiftMaster',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-sliding-gate-chain-repair-dallas-tx',
    videos: [{ label: 'Customer video testimonial', url: 'https://youtu.be/oIWbLj7wpBM?is=HVVGxYER4tB6EWdC' }],
    problem: [
      'The customer had recently moved into the home and the existing LiftMaster sliding gate system had not been properly maintained by the previous owner.',
      'Inspection found the gate chain heavily rusted.',
    ],
    diagnosis: [
      'The chain required replacement. The operator did not.',
      'Rather than replacing the gate operator, the work focused on the component that actually needed attention.',
    ],
    solution: [
      'Removed the old, heavily rusted chain.',
      'Installed a new rust-free gate chain.',
      'Set and adjusted the chain for proper operation.',
      'Checked the sliding gate operation after the repair.',
    ],
    outcome:
      'The existing LiftMaster operator was retained and the gate restored with a new rust-free chain. The customer has a three-year warranty on the new chain.',
    takeaway:
      'This is what repairing rather than replacing looks like in practice. The expensive part was working; the cheap part had corroded through. Quoting a new operator here would have been the easier sale and the wrong answer.',
  },

  {
    slug: 'liftmaster-chain-replacement-dallas-tx',
    seoTitle: 'LiftMaster Sliding Gate Chain Replacement, Dallas',
    title: 'Chain Replacement on a LiftMaster Sliding Gate',
    summary:
      'A straightforward Dallas job: the chain on a LiftMaster sliding gate operator had reached the end of its life and was replaced.',
    market: 'texas',
    city: 'Dallas, Texas',
    citySlug: 'dallas',
    verified: true,
    service: 'automatic-gate-repair',
    brand: 'LiftMaster',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-sliding-gate-chain-replacement-dallas-tx',
    videos: [{ label: 'Watch the Dallas chain repair', url: 'https://youtu.be/CV5T4-427vc' }],
    problem: ['A Dallas customer contacted us about a problem with a LiftMaster sliding gate.'],
    diagnosis: ['Inspection found that the gate chain needed to be replaced.'],
    solution: [
      'Removed the worn chain.',
      'Installed a replacement chain on the LiftMaster sliding gate operator.',
      'Checked the operator after installation.',
    ],
    outcome: 'The sliding gate returned to normal operation on its existing operator.',
    takeaway:
      'A chain is a wear item on a sliding gate, in the way tyres are on a car. Replacing one is routine; running one to destruction takes the sprockets and sometimes the operator with it.',
  },

  {
    slug: 'liftmaster-circuit-board-batteries-richardson-tx',
    seoTitle: 'LiftMaster Slide Gate Board Repair, Richardson',
    title: 'The Board Had Physically Fallen Inside the Operator',
    summary:
      'A Sunday call from a senior customer. The circuit board had come loose and failed, and because it had stopped charging them, both backup batteries had gone too.',
    market: 'texas',
    city: 'Richardson, Texas',
    citySlug: 'richardson',
    verified: true,
    service: 'gate-motor-repair',
    brand: 'LiftMaster',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-sliding-gate-repair-richardson-tx',
    videos: [
      { label: 'Circuit board failure and initial inspection', url: 'https://youtu.be/7xPfMi8-VAg?is=xLA3qfr09SzdrcNF' },
      { label: 'The completed repair', url: 'https://youtu.be/qhsXEciXM0A?is=L27B71OK41ZqO0Ni' },
    ],
    problem: [
      'The customer, a senior citizen, called on a Sunday because his LiftMaster sliding gate opener was not operating correctly.',
      'We confirmed we specialise in LiftMaster operators and attended the property. There was no service-call charge and the inspection was provided at no charge.',
    ],
    diagnosis: [
      'The circuit board had physically fallen and was no longer functioning correctly, which the first video documents.',
      'Because the failed board was no longer charging the operator’s backup batteries properly, both 12-volt batteries also required replacement.',
      'The rest of the operator was sound, so replacing the complete unit was not necessary.',
    ],
    solution: [
      'Replaced the failed circuit board.',
      'Replaced both 12V backup batteries.',
      'Completed system programming after the board replacement.',
      'Performed system adjustments and operational setup.',
      'Provided one wireless keypad.',
      'Tested the gate and confirmed proper operation.',
    ],
    outcome:
      'The existing operator was restored without replacing the complete unit. Manufacturer warranty applies to qualifying replacement parts, and the completed repair carries a two-year company warranty.',
    takeaway:
      'One failure had caused the other. A board that has stopped charging the batteries will take them with it, and replacing the batteries alone would have produced a gate that failed again within months for reasons the owner would never have connected.',
  },

  {
    slug: 'liftmaster-solar-upgrade-wills-point-tx',
    seoTitle: 'LiftMaster Arm & Solar Repair, Wills Point',
    title: 'The Fire Department Forced the Gate. Then the Batteries Kept Dying.',
    summary:
      'An emergency entry broke the operator arm. The batteries needed replacing every two months, and a single solar panel facing one direction was why.',
    market: 'texas',
    city: 'Wills Point, Texas',
    citySlug: 'wills-point',
    verified: true,
    service: 'gate-motor-repair',
    brand: 'LiftMaster',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-swing-gate-repair-and-solar-upgrade-wills-point-tx',
    videos: [{ label: 'Watch the Wills Point repair', url: 'https://youtu.be/iNaVuQM8HvE' }],
    problem: [
      'The gate had been forced open by the fire department during an emergency, damaging the operator arm.',
      'Separately, the customer reported needing replacement batteries approximately every two months.',
    ],
    diagnosis: [
      'The operator arm was broken and needed replacing.',
      'The existing solar setup had a single panel facing one direction, which limited its exposure to sunlight at other times of day.',
      'We identified the panel placement as a likely contributor to the inadequate charging, rather than treating the batteries as simply poor quality.',
    ],
    solution: [
      'Replaced the broken LiftMaster gate operator arm.',
      'Installed an additional solar panel facing the other direction, to improve sunlight coverage across the day.',
      'Replaced the backup batteries.',
    ],
    outcome:
      'Both the physical damage and the charging problem were addressed while keeping the existing gate. The work carries a three-year warranty covering the replacement arm, the added solar panel and the replacement batteries.',
    takeaway:
      'Batteries that need replacing every two months are not bad batteries. They are a charging system that cannot keep up, and on a solar gate the usual reason is a panel that only sees the sun for part of the day.',
  },

  {
    slug: 'liftmaster-community-gate-reset-mildred-tx',
    seoTitle: 'Community Gate Reset, Mildred',
    title: 'Two Community Gates, No Parts Replaced, Service Call Only',
    summary:
      'Both the entrance and exit gates at a gated community kept failing. The operators turned out to be in good condition and needed a reset, not replacement.',
    market: 'texas',
    city: 'Mildred, Texas',
    verified: true,
    service: 'commercial-gate-repair',
    brand: 'LiftMaster',
    gateType: 'swing',
    propertyType: 'hoa',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-swing-gate-repair-mildred-tx',
    problem: [
      'A gated community was having repeated problems with both automatic gates — the community entrance and the exit.',
      'Both gates use heavy-duty LiftMaster swing gate operators.',
    ],
    diagnosis: [
      'Our technician inspected both systems to determine whether major parts or operator replacement would be required.',
      'Both LiftMaster operators were in good condition. Neither needed replacing.',
      'Both required a hard system reset.',
    ],
    solution: [
      'Performed a hard reset on both LiftMaster systems.',
      'Completed operational adjustments.',
      'Lubricated the applicable moving components.',
      'Tested both gates and confirmed proper operation of the entrance and the exit.',
    ],
    outcome:
      'Both gate systems were restored during the service visit without replacing the operators or any parts. The customer paid only the service-call charge.',
    takeaway:
      'Two gates failing repeatedly at one property looks like equipment at the end of its life and is often a system that needs resetting. Diagnosing properly before quoting is the difference between a service call and a five-figure replacement proposal.',
  },

  {
    slug: 'ramset-gearbox-repair-richardson-tx',
    seoTitle: 'Ramset Gearbox Repair, Richardson',
    title: 'The Gearbox Was Repaired, Not Replaced. One Limit Switch Was All It Needed.',
    summary:
      'A Ramset sliding gate opener in Richardson had a gearbox fault. The gearbox was repaired in place and a single limit switch replaced.',
    market: 'texas',
    city: 'Richardson, Texas',
    citySlug: 'richardson',
    verified: true,
    service: 'gate-motor-repair',
    brand: 'Ramset',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'ramset',
    imageIndexes: [],
    photoSet: 'ramset-sliding-gate-gearbox-repair-richardson-tx',
    videos: [{ label: 'Watch the Richardson Ramset repair', url: 'https://youtu.be/EgiPTPcWCww?is=HGJd8HVbWQOsrLgy' }],
    problem: [
      'A customer in Richardson was having a gearbox issue with a Ramset sliding gate opener on a wooden driveway gate.',
    ],
    diagnosis: [
      'The gearbox fault could be repaired rather than requiring a replacement gearbox or a complete operator.',
      'One limit switch had failed.',
    ],
    solution: [
      'Repaired the existing gearbox.',
      'Replaced one limit switch — the only component replaced on this job.',
    ],
    outcome:
      'The existing Ramset operator and its gearbox were both retained, with the work focused on the actual fault.',
    takeaway:
      'A gearbox fault sounds terminal and frequently is not. The operator, the gearbox and the limit switches are separate things, and finding out which one has failed is worth more than a quote for all three.',
  },

  {
    slug: 'swing-gate-circuit-board-southlake-tx',
    seoTitle: 'Swing Gate Circuit Board Repair, Southlake',
    title: 'The Control Box Had Been Left Open. Debris and Corrosion Did the Rest.',
    summary:
      'An open enclosure let debris collect around the electronics and moisture reach the board. The board and the backup batteries were replaced; the opener stayed.',
    market: 'texas',
    city: 'Southlake, Texas',
    citySlug: 'southlake',
    verified: true,
    service: 'gate-motor-repair',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'automatic-gate-repair',
    imageIndexes: [],
    photoSet: 'swing-gate-circuit-board-repair-southlake-tx',
    videos: [{ label: 'Watch the Southlake repair', url: 'https://youtu.be/YO45pxPSDgo' }],
    problem: ['A Southlake homeowner contacted us about a problem with their swing gate.'],
    diagnosis: [
      'The control box was open, with accumulated debris and visible corrosion on the circuit board.',
      'The open enclosure had allowed debris to collect around the electronics. Rain or moisture may also have entered the box and contributed to the corrosion.',
      'The original green circuit board dated from 2016, but its age alone was not the reason for replacement — the damage and contamination found on inspection were.',
    ],
    solution: [
      'Installed a new circuit board.',
      'Replaced the backup batteries.',
      'Kept the existing gate opener in place.',
    ],
    outcome: 'The swing gate returned to proper operation with its original operator retained.',
    takeaway:
      'An enclosure that does not close is not a cosmetic problem. Everything inside it is rated for a sealed box, and once debris and moisture are getting in, the board is on a timer regardless of how old it is.',
  },

  {
    slug: 'us-automatic-solar-refurbishment-fort-worth-tx',
    seoTitle: 'US Automatic Solar Repair, Fort Worth',
    title: 'Another Company Said Replace It. We Refurbished It Instead.',
    summary:
      'A Fort Worth homeowner had been told the solar operator needed replacing. The board was corroded, the arm needed repair and the gate was leaning — all fixable.',
    market: 'texas',
    city: 'Fort Worth, Texas',
    citySlug: 'fort-worth',
    verified: true,
    service: 'gate-motor-repair',
    brand: 'US Automatic',
    modelKey: 'us-automatic/patriot-repair',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'us-automatic',
    imageIndexes: [],
    photoSet: 'us-automatic-solar-swing-gate-repair-fort-worth-tx',
    videos: [{ label: 'Watch the Fort Worth refurbishment', url: 'https://youtu.be/ucNsnOktduA' }],
    problem: [
      'A Fort Worth homeowner had been advised by another company to replace the existing US Automatic solar powered swing gate opener.',
    ],
    diagnosis: [
      'Inspection found the operator could be refurbished rather than replaced.',
      'Its control board had corrosion, the arm needed repair, and the gate was leaning.',
      'None of those required a new operator.',
    ],
    solution: [
      'Replaced the corroded US Automatic control board.',
      'Repaired the existing swing gate arm rather than replacing it.',
      'Adjusted the leaning gate.',
    ],
    outcome:
      'The existing US Automatic single swing gate opener was repaired and kept in service, with neither the operator nor the arm replaced.',
    takeaway:
      'Three separate faults on one gate can look like a system at the end of its life. A corroded board, a damaged arm and a leaning gate are three repairs, and none of them is a reason to buy a new operator.',
  },

  {
    slug: 'us-automatic-arm-battery-prosper-tx',
    seoTitle: 'US Automatic Arm Repair, Prosper',
    title: 'We Tested the Bent Arm Before Replacing It',
    summary:
      'A gate that had not worked in a long time. The battery was flat, and the visibly bent arm was tested on the chance it could be kept.',
    market: 'texas',
    city: 'Prosper, Texas',
    citySlug: 'prosper',
    verified: true,
    service: 'gate-motor-repair',
    brand: 'US Automatic',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'us-automatic',
    imageIndexes: [],
    photoSet: 'us-automatic-swing-gate-arm-and-battery-repair-prosper-tx',
    videos: [{ label: 'Watch the Prosper repair', url: 'https://youtu.be/ZlMCG8-8gnE' }],
    problem: [
      'A homeowner in Prosper contacted us because her US Automatic swing gate had not worked for a long time.',
    ],
    diagnosis: [
      'The first issue was a battery with no charge. We installed a replacement so the operator could be checked at all.',
      'The arm was visibly bent, but we tested it with power restored before deciding to replace it.',
      'It did not work properly and could not be reused.',
    ],
    solution: [
      'Replaced the discharged battery.',
      'Tested the existing bent arm after restoring battery power.',
      'Replaced the damaged US Automatic operator arm.',
    ],
    outcome:
      'Replacing the battery and the damaged arm restored smooth operation while retaining the existing US Automatic gate operator.',
    takeaway:
      'A visibly bent arm is not automatically a replacement. It cost nothing to put power on and try it, and on a different gate that test is the difference between one part and two.',
  },

  {
    slug: 'viking-refurbishment-richardson-tx',
    seoTitle: 'Viking Slide Gate Opener Refurbished, Richardson',
    title: 'Two Companies Quoted Over $6,000 to Replace It. We Refurbished It for $3,100.',
    summary:
      'A Viking sliding gate opener with a failed motor and a failed board. Both replaceable — which made a full refurbishment cheaper than half a new system.',
    market: 'texas',
    city: 'Richardson, Texas',
    citySlug: 'richardson',
    verified: true,
    service: 'gate-motor-repair',
    brand: 'Viking',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'viking',
    imageIndexes: [],
    photoSet: 'viking-gate-opener-refurbishment-richardson-tx',
    videos: [{ label: 'Watch the Richardson Viking refurbishment', url: 'https://youtu.be/0_NzN4AmnPE?is=a0x11FRFzQmPx-bF' }],
    problem: [
      'A Richardson customer contacted us after receiving two estimates from other companies, each recommending a complete opener replacement for more than $6,000.',
    ],
    diagnosis: [
      'Our inspection confirmed the Viking opener had a failed motor and a failed circuit board.',
      'It also identified the gearbox assembly and the limit switches as needing replacement.',
      'All of those are components. The operator itself could be refurbished rather than replaced.',
    ],
    solution: [
      'Replaced the circuit board.',
      'Replaced both limit switches.',
      'Replaced the motor, including the gearbox.',
      'Serviced and tested the refurbished opener to confirm proper operation.',
    ],
    outcome:
      'The complete refurbishment was carried out for $3,100 and includes a three-year warranty on the work described. Those are this job’s figures, not a price list.',
    takeaway:
      'When a motor and a board have both failed, replacement starts to look like the sensible option — and that is exactly the point at which it is worth asking whether every one of those parts is still available separately. Here they were, for roughly half the quoted replacement.',
  },

  {
    slug: 'eagle-2000-restored-coppell-tx',
    seoTitle: 'Eagle 2000 Gate Opener Restored, Coppell',
    title: 'The Operator Was 26 Years Old. It Is Still Working.',
    summary:
      'An Eagle 2000 that is no longer manufactured, on a gate with worn wheels and a stretched chain. Replacing the worn parts cost a fraction of replacing the unit.',
    market: 'texas',
    city: 'Coppell, Texas',
    citySlug: 'coppell',
    verified: true,
    service: 'automatic-gate-repair',
    brand: 'Eagle',
    modelKey: 'eagle/eagle-2000-repair',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'eagle',
    imageIndexes: [],
    photoSet: 'coppell-tx-eagle-2000-sliding-gate-repair-case-study',
    videos: [{ label: 'Final repair video', url: 'https://youtu.be/vMobWPmTGVQ?is=Im7KOuL3SxEKH-cj' }],
    problem: [
      'A homeowner in Coppell had an older residential sliding driveway gate powered by an Eagle 2000 operator, approximately 26 years old.',
      'The customer was considering replacing the entire unit because of its age and the gate’s mechanical problems.',
    ],
    diagnosis: [
      'The Eagle 2000 operator itself was still a solid, serviceable unit.',
      'The problems were in the gate hardware and the limit system rather than a reason to replace the operator.',
      'The gate needed new wheels, a new heavy-duty #40 chain, and one limit switch.',
    ],
    solution: [
      'Replaced the worn sliding gate wheels.',
      'Replaced the existing chain with a heavy-duty #40 chain.',
      'Replaced one limit switch.',
      'Adjusted and tested the gate travel and limit operation.',
    ],
    outcome:
      'The 26-year-old operator stayed in service and the gate returned to proper operation, for substantially less than replacing the complete system.',
    takeaway:
      'These older Eagle operators are well-built and this model is no longer manufactured. As long as the unit is still serviceable, replacing the worn components around it is better value than replacing something that cannot be bought again.',
  },

  {
    slug: 'liftmaster-csl24ul-off-track-dallas-tx',
    seoTitle: 'Sliding Gate Off Track: LiftMaster, Dallas',
    title: 'Off the Track, Unable to Leave, On Site in Twenty Minutes',
    summary:
      'A heavy sliding gate came off its track early in the morning and trapped the customer. Rocks and debris in the track were the cause.',
    market: 'texas',
    city: 'Dallas, Texas',
    citySlug: 'dallas',
    verified: true,
    service: 'emergency-gate-repair',
    brand: 'LiftMaster',
    modelKey: 'liftmaster/csl24ul-repair',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'emergency-gate-repair',
    imageIndexes: [],
    photoSet: 'dallas-tx-liftmaster-csl24ul-sliding-gate-repair-case-study',
    problem: [
      'A Dallas homeowner called early in the morning because the heavy sliding driveway gate had come completely off its track, leaving them unable to get out.',
      'We arrived approximately 20 minutes after the call.',
    ],
    diagnosis: [
      'The LiftMaster CSL24UL operator itself was operational.',
      'Rocks and debris had accumulated around the gate track and interfered with the wheels, which is what brought the heavy gate off.',
      'Inspection also found significant corrosion at one of the 12V backup batteries and its connection.',
    ],
    solution: [
      'Put the heavy sliding gate safely back onto the track.',
      'Cleared and checked the wheel and track area.',
      'Replaced the corroded 12V backup battery.',
      'Adjusted the gate limits once the gate was back on the track.',
      'Tested the gate through its travel to confirm proper operation.',
      'Explained why the track has to stay clear of rocks and debris, and what to check if it happens again.',
    ],
    outcome:
      'The system was restored without replacing the operator and the customer could use the driveway again.',
    takeaway:
      'A gate that comes off its track is almost never a failure of the operator. It is something in the track, and the reason it is worth being told that at the time is so the next one is prevented rather than repaired.',
  },

  {
    slug: 'liftmaster-la400-replaces-gto-dallas-tx',
    seoTitle: 'GTO Replaced with LiftMaster LA400, Dallas',
    title: 'An Ageing GTO Opener Replaced with a LiftMaster LA400',
    summary:
      'The customer wanted a modern operator with battery backup and a safety sensor on an existing wrought-iron swing gate.',
    market: 'texas',
    city: 'Dallas, Texas',
    citySlug: 'dallas',
    verified: true,
    service: 'gate-installation',
    brand: 'LiftMaster',
    modelKey: 'liftmaster/la400-repair',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [],
    photoSet: 'liftmaster-la400-swing-gate-opener-installation-dallas-tx',
    videos: [{ label: 'Watch the completed LA400 installation', url: 'https://youtu.be/TwDg6MdXma4?is=U2Ji-xttO7kUJn_D' }],
    problem: [
      'The customer had an older GTO / PRO swing gate opener that had been in service for many years.',
      'They wanted to upgrade the driveway gate system with a more modern operator, battery backup capability and an added safety sensor.',
    ],
    diagnosis: [
      'The existing wrought-iron swing gate was sound and worth keeping.',
      'After reviewing the options the customer selected a LiftMaster LA400 single swing operator.',
    ],
    solution: [
      'Removed the existing GTO swing gate opener.',
      'Installed the LiftMaster LA400 single swing operator and control box.',
      'Set up battery backup capability.',
      'Installed a safety sensor.',
      'Installed and programmed one wireless keypad, and provided and programmed three remote controls.',
      'Completed the wiring and programming, adjusted gate travel and limits, and tested the complete system.',
    ],
    outcome:
      'A LiftMaster LA400 swing gate system with battery backup, safety protection, keypad access and three programmed remotes, on the property’s existing gate.',
    takeaway:
      'Replacing an operator does not mean replacing the gate. The ironwork here was in good condition and stayed exactly where it was — what changed was the machinery behind it and the safety equipment that older installations often never had.',
  },
]
