/**
 * Copy for service × city pages, keyed `<city>/<service>` (see lib/service-city.ts).
 *
 * Plano written 2 Nov 2026. Rules, as for the brand × city copy: no arrival
 * times, prices or jobs we cannot show, and no 20-word run shared with any
 * other page (scripts/validate-linking.ts checks it).
 */

export type ServiceCityCopy = {
  description: string
  intro: string
  local: string[]
  faqs: { q: string; a: string }[]
}

export const serviceCityCopy: Record<string, ServiceCityCopy> = {
  'plano/automatic-gate-repair': {
    description: 'Automatic gate repair in Plano, TX for slide, swing and HOA entrance gates in West Plano, Willow Bend and Legacy. Open 24/7. Call Shield Gate Repair.',
    intro:
      'Automatic gate repair across Plano, from single driveway gates in Kings Ridge to the community entrances off Preston Road. We diagnose the operator, the safety devices and the access system together, because in Plano the fault is often not where it looks.',
    local: [
      'Plano has a large stock of automated gates installed in the 1990s and 2000s, and most of the repairs we see follow from that age: control boards that stop answering remotes, limit settings that have drifted, and batteries on DC operators that no longer carry the gate through a power cut. A gate that opens but will not close is very often a photo-eye problem rather than a motor problem, especially where sprinklers and landscaping crews work close to the sensors.',
      'North Texas clay also plays a part. The soil around Plano swells after heavy rain and shrinks in the summer heat, which moves gate posts and hinge columns over time. A swing gate that has started to bind or a slide gate that drags on its track can strain an operator until it trips on overload. We check the gate moves freely by hand before we touch the electronics, so a mechanical fault does not get billed as an electrical one.',
    ],
    faqs: [
      {
        q: 'My automatic gate in Plano stopped working after a storm. What usually fails?',
        a: 'Spring storms in Collin County bring power surges and lightning, and the control board is the part that takes the hit. We test the board, the fuses and the power supply, then check the loop detectors and receiver, since those are also exposed. Often one surge-damaged component is the whole repair.',
      },
      {
        q: 'Do you repair automatic gates for Plano HOAs as well as homes?',
        a: 'Yes. Community gates run far more cycles per day than a driveway gate, so we look at wear parts such as rollers, hinges and chains as well as the operator itself, and we can work with the management company on access and timing so residents are not locked in or out.',
      },
    ],
  },

  'plano/electric-gate-repair': {
    description: 'Electric gate repair in Plano, TX: control boards, wiring, power supplies, loop detectors and surge damage on residential and HOA gates. Call Shield.',
    intro:
      'Electric gate repair in Plano for the wiring, control boards, transformers and sensors that make a gate move. When a Plano gate is completely dead, the cause is usually somewhere in the power path, and we trace it end to end.',
    local: [
      'Many electric gates in Plano neighborhoods were wired when the homes were built, with low-voltage runs buried along driveways and under pavers. Twenty years on, those runs get cut by irrigation repairs, chewed, or corroded at splices that were never sealed. A gate that works some days and not others often has a failing splice or a loose terminal rather than a bad motor, and we test continuity before replacing anything.',
      'Surge damage is the other common Plano call. The city sees regular thunderstorms from March through June, and a nearby strike can take out a control board, a receiver and a loop detector at once. We check each part separately so you only pay for what failed, and we can add surge protection on the supply and the loop leads where the original installer left it out.',
    ],
    faqs: [
      {
        q: 'My electric gate has power but does nothing. Where do you start?',
        a: 'With the inputs. If the board has power but ignores the remote, keypad and push button, we look at the receiver, the safety inputs and any stuck command, because a shorted wire or a blocked photo-eye can lock out every other signal. Board failure is the conclusion once those are ruled out, not the starting guess.',
      },
      {
        q: 'Can you repair the buried wiring to my gate without tearing up my driveway?',
        a: 'Often, yes. We locate the break first, and where the old conduit is still intact we can pull new wire through it. Where it is not, we look for the shortest route along the edge of the drive or landscaping before suggesting any cutting.',
      },
    ],
  },

  'plano/driveway-gate-repair': {
    description: 'Driveway gate repair in Plano, TX for single and double swing gates and slide gates at private homes in Kings Ridge, Deerfield and Whiffletree. Call us.',
    intro:
      'Driveway gate repair for private homes across Plano. A driveway gate is usually the only way in and out, so we focus on getting it working safely first and then on the cause, whether that is the operator, the gate itself or the posts it hangs on.',
    local: [
      'Plano driveway gates are mostly ornamental iron or steel, either a single slide gate across the drive or a pair of swing leaves meeting in the middle. On double swing gates the two leaves have to open and close in sequence, and when one operator weakens or one hinge stiffens the leaves start to collide or stop out of step. We set the leaf delay and the force adjustment again after any repair, so the pair runs together.',
      'Weight is the other thing we check on Plano homes. Owners often add decorative panels, privacy screening or wood cladding to an iron gate after it was installed, and the extra weight and wind load can take an operator past its rating. If that is why the gate keeps stalling, we will tell you, and set out the choice between lightening the gate and fitting a stronger operator.',
    ],
    faqs: [
      {
        q: 'Can I open my driveway gate by hand if it fails?',
        a: 'Most operators have a manual release, usually a key or lever on the arm or the operator housing. We show every Plano customer where theirs is and how it works, so a dead gate does not trap a car in the drive while you wait for a repair.',
      },
      {
        q: 'My two driveway gate leaves hit each other when they close. Is that a repair?',
        a: 'Yes, and it is worth doing early because the impact bends hinges and stresses both operators. The usual fixes are resetting the leaf delay, adjusting the limits, or correcting a sagging leaf that now arrives at the wrong point.',
      },
    ],
  },

  'plano/sliding-gate-repair': {
    description: 'Sliding gate repair in Plano, TX: tracks, rollers, chains, guide wheels and slide operators at West Plano homes and HOA entrances. Call Shield.',
    intro:
      'Sliding gate repair in Plano, on the track, the rollers, the drive chain and the slide operator. Slide gates are the most common automated gate type in West Plano and Willow Bend, and most of their faults start in the hardware rather than the motor.',
    local: [
      'A slide gate in Plano rolls on a ground track that collects grit, leaves and mulch from the beds beside it. Over time the V-groove wheels wear flat, the track gets dented by cars clipping it, and the gate starts to drag. The operator feels that as extra load and either slows down, reverses or trips its overload. Cleaning and straightening the track, and replacing worn wheels, often fixes a gate that the owner assumed needed a new motor.',
      'The drive chain is the next thing we check. Chains stretch, the idler wheels wear, and a slack chain can jump the sprocket and leave the gate stuck halfway. We set the tension, check the chain brackets on the gate are still tight, and look at the guide rollers at the top of the post, since a gate that leans away from them will fight the operator on every cycle.',
    ],
    faqs: [
      {
        q: 'My sliding gate makes a grinding noise and moves slowly. What does that mean?',
        a: 'Usually worn track wheels or debris in the track, sometimes a bearing on a guide roller. It is worth fixing before it becomes an operator repair, because the extra effort runs the motor hot and wears the gearbox.',
      },
      {
        q: 'Can a sliding gate be repaired if the track is damaged?',
        a: 'Yes. A dented section of track can usually be straightened or replaced on its own. If the concrete under the track has cracked or heaved, which happens with Plano clay, we will point it out, because a new track on a moving base will not stay straight.',
      },
    ],
  },

  'plano/swing-gate-repair': {
    description: 'Swing gate repair in Plano, TX: hinges, sagging leaves, operator arms and dual-gate timing on wrought iron swing gates at homes and HOAs. Call Shield.',
    intro:
      'Swing gate repair in Plano for wrought iron and steel gates on arm, articulated and in-ground operators. A swing gate puts its whole weight on two hinges and one post, so we check that structure as carefully as the operator.',
    local: [
      'Wrought iron swing gates are common on Plano estate homes and on smaller community entrances. The usual fault we see is sag: the leaf drops at the latch end, drags on the drive, and the operator strains to push it the last few feet. On Plano clay, a hinge post that has leaned a few degrees is often the cause. We adjust or replace the hinges, and where the post itself has moved we say so plainly instead of repeatedly re-adjusting the operator.',
      'The operator arm and its brackets take a lot of force on a heavy leaf, and the welds or bolts at the gate bracket loosen over time. A swing gate that clunks at the start of travel or bounces at the end usually has play in that joint. We also check the stop positions, since a gate with no physical stop relies on the operator limits alone and will drift.',
    ],
    faqs: [
      {
        q: 'Why does my swing gate open fine but stop short when closing?',
        a: 'Most often the leaf has dropped and now drags near the closed position, or a closing limit has drifted. On gates that close uphill toward the street, which is common on sloped Plano lots, the operator may also be set too gently to finish the stroke.',
      },
      {
        q: 'Can you fix a swing gate that the wind keeps pushing open?',
        a: 'Yes. Electric locks or a drop bolt can hold the leaves closed, and some operators can be set to hold position under load. We look at which suits your gate before adding hardware.',
      },
    ],
  },

  'plano/gate-opener-repair': {
    description: 'Gate opener repair in Plano, TX: remotes, keypads, receivers, control boards and limits on LiftMaster, Elite, DoorKing and other openers. Call Shield.',
    intro:
      'Gate opener repair in Plano covers everything that tells a gate to move: the remotes, keypad, receiver, control board and the limit settings. If your gate motor still runs but the gate will not respond properly, this is usually where the problem is.',
    local: [
      'A lot of Plano gate openers still run on older remote systems, and when a household replaces a lost remote with a newer model it often will not pair with the original receiver. We can usually add a compatible receiver to the existing opener so old and new remotes both work, which is far cheaper than replacing the opener.',
      'Keypads on Plano driveways and community entrances face full Texas sun all summer, and the membranes crack, the backlighting fails and moisture gets in. We repair or replace the keypad on its own and re-enter your codes. Where the control board itself is failing, we check whether a replacement board is still made for your opener, because that decides whether repair is the sensible path.',
    ],
    faqs: [
      {
        q: 'My remote stopped opening the gate but the keypad still works. What is wrong?',
        a: 'Usually the remote battery, the remote itself or its pairing with the receiver. If several remotes failed at once, the receiver or its antenna is the more likely culprit, and that is a quick part to test.',
      },
      {
        q: 'Can you program new remotes for my existing gate opener?',
        a: 'Yes, as long as they are compatible with the receiver on your opener. If they are not, we can fit a receiver that works with current remotes without changing the rest of the opener.',
      },
    ],
  },

  'plano/gate-motor-repair': {
    description: 'Gate motor repair in Plano, TX: capacitors, gearboxes, brakes, encoders and overheating on slide and swing gate operators. Repair before replace. Call Shield.',
    intro:
      'Gate motor repair in Plano for the motor, gearbox and drive inside the operator. When a gate hums but does not move, runs slowly, or cuts out in the afternoon heat, the motor and its supporting parts are where we look.',
    local: [
      'On the AC operators found on many older Plano gates, a hum with no movement usually points to the start capacitor, which is an inexpensive part. A motor that runs and then stops after a few cycles on a hot day may be tripping its thermal protection, which can mean it is undersized for the gate, the gate is dragging, or the vents are blocked by grass and debris. We look for the cause before calling it a failed motor.',
      'DC operators, common on newer Plano installations and anywhere with battery backup, fail differently. Worn brushes, a failed encoder or a weak battery bank all show up as slow or erratic travel. The gearbox is the expensive part on either type, so we check it for wear and play first: if it is sound, a motor repair is worth doing, and if it is worn, we will say so before you spend money on the motor.',
    ],
    faqs: [
      {
        q: 'My gate motor hums but the gate does not move. Is the motor dead?',
        a: 'Not necessarily. On AC motors a failed capacitor causes exactly that symptom, and on any operator a seized gate or a manual release left half engaged can do the same. We test those first.',
      },
      {
        q: 'Is it worth repairing an old gate motor or should I replace the operator?',
        a: 'It depends on the gearbox and parts availability more than age. A sound gearbox with a failed capacitor or brake is a good repair. A worn gearbox, or a model whose parts are no longer made, usually makes replacement the better use of money.',
      },
    ],
  },

  'plano/emergency-gate-repair': {
    description: 'Emergency gate repair in Plano, TX, 24/7: gates stuck open or shut, cars trapped, HOA entrances down after storms or accidents. Call Shield Gate Repair now.',
    intro:
      'Emergency gate repair in Plano, day or night. If your gate is stuck shut with a car inside, stuck open on a property that needs to be secure, or a community entrance is down, call and we will tell you straight away what we can do and when.',
    local: [
      'The most common emergency calls in Plano are a gate that will not open with someone needing to leave, and a gate that has been hit. Vehicle damage at HOA entrances and apartment gates bends leaves, knocks operators off their pads and snaps arms. Our first job is to make the gate safe and either secure it closed or release it open, depending on what the property needs, and then to plan the permanent repair.',
      'Before we arrive, there is often something you can do. Most operators have a manual release that lets the gate be moved by hand, and a tripped breaker or GFCI outlet is behind more dead gates than people expect. If you call, we will talk you through checking those safely, and if that gets the gate moving you can decide whether you still need the visit.',
    ],
    faqs: [
      {
        q: 'Do you charge more for emergency gate repair at night in Plano?',
        a: 'Call us and we will tell you the cost before anyone is sent, so there is no surprise on the invoice. Some problems can be talked through on the phone, and we will tell you if yours is one of them.',
      },
      {
        q: 'Our community gate was hit by a car. Can you secure it tonight?',
        a: 'Yes. We can release and secure the damaged leaf, protect the operator from further damage, and leave the entrance in a safe state for residents. We also document the damage with photos, which helps with insurance claims against the driver.',
      },
    ],
  },

  'plano/commercial-gate-repair': {
    description: 'Commercial gate repair in Plano, TX for HOA entrances, apartments, offices and business parks near Legacy and US-75. Operators and access control. Call us.',
    intro:
      'Commercial gate repair in Plano for HOA communities, apartment complexes, office campuses and industrial sites. These gates run many times an hour, often with card readers, call boxes and vehicle loops attached, and a failure affects everyone who uses the site.',
    local: [
      'Plano has a large commercial base along the Legacy business district, US-75 and the Dallas North Tollway, and many of those sites run heavy slide gates on high-cycle industrial operators. On these, wear parts set the service life: rollers, chains, drive belts and the loop detectors that sense vehicles. We repair the failed part and check the others in the same visit, because they tend to wear out together.',
      'Access control is part of most commercial calls. A gate that will not open for some cards but does for others is usually a controller or database issue, not a gate fault, and a call box that stopped dialing out often lost its phone line when the property changed providers. We work with property managers to keep at least one lane or a manual process open while repairs are done.',
    ],
    faqs: [
      {
        q: 'Can you keep our Plano property gate working until a replacement is approved?',
        a: 'Usually yes. We can repair the failed part to get the gate running, or set it to stay open with a temporary arrangement if the site allows it, while you get approval for larger work. We will put both options in writing.',
      },
      {
        q: 'Do you work on commercial access systems like card readers and call boxes?',
        a: 'Yes. We diagnose the reader, controller, call box and the wiring between them and the operator, so you do not need a separate access control company and a gate company each pointing at the other.',
      },
    ],
  },

  'plano/residential-gate-repair': {
    description: 'Residential gate repair in Plano, TX for homeowners: driveway, estate and side gates, openers, keypads and safety sensors. Clear advice. Call Shield.',
    intro:
      'Residential gate repair for Plano homeowners. We explain what failed, what it will take to fix and whether repair is worth it, in plain terms, because most homeowners only deal with a gate problem once every few years.',
    local: [
      'Most residential gate calls in Plano come from the established neighborhoods with larger lots, such as Kings Ridge, Deerfield and Whiffletree, where gates were added during the original build or a later renovation. Common faults are worn hinges, failing batteries, sun-damaged keypads and photo-eyes knocked out of alignment. Many of these are small repairs, and we would rather do the small repair than sell a new system.',
      'Safety matters on a family property. Every automatic gate should reverse or stop when it meets an obstruction, and older Plano gates were sometimes installed before current entrapment protection was standard. When we repair a residential gate we test the reversal and the sensors, and if the gate lacks protection a child or pet could need, we point it out and explain the options.',
    ],
    faqs: [
      {
        q: 'How do I know if my home gate is safe for children and pets?',
        a: 'Put an object in the gate path and run it: it should stop and reverse on contact or before it reaches the object. If it does not, stop using it automatically until it is checked. We test this on every residential visit.',
      },
      {
        q: 'Do you repair pedestrian and side gates at Plano homes?',
        a: 'Yes, including self-closing hinges, latches and electric locks on pedestrian gates, and the keypads or intercoms that control them.',
      },
    ],
  },

  'plano/automatic-gate-installation': {
    description: 'Automatic gate installation in Plano, TX: new slide and swing gates with operators, safety sensors and access control, sized for your property. Call Shield.',
    intro:
      'Automatic gate installation in Plano, from a new gate and operator on an empty driveway to a complete community entrance. We size the operator to the gate, fit the safety devices it needs and set up the access method that suits the people using it.',
    local: [
      'Planning comes first on a Plano installation. Many neighborhoods have HOA architectural rules on gate style, height and color, and some streets have setback or sight-line requirements near the curb. We confirm what your HOA and the city need before ordering anything, so the gate is not built twice.',
      'The ground matters as much as the gate. Plano sits on expansive clay that moves with the seasons, so posts and operator pads need proper footings, and slide gate tracks need a stable concrete base. We also plan where the gate will be powered from and how the wiring will be run, because a gate fed from a long, undersized cable will struggle from its first day.',
    ],
    faqs: [
      {
        q: 'Should I choose a slide gate or a swing gate for my Plano driveway?',
        a: 'A slide gate needs clear space along the fence line beside the opening, and a swing gate needs clear space for the leaves to swing into. Slope matters too: swing gates on a drive that rises from the street need careful setup. We look at your site and recommend the one that fits it.',
      },
      {
        q: 'What safety features does a new automatic gate need?',
        a: 'Entrapment protection that meets UL 325, typically photo-eyes and contact edges positioned for your gate, plus a gate built to ASTM F2200 so there are no gaps that can trap a hand or a child. We include these as standard rather than as extras.',
      },
    ],
  },

  'plano/electric-gate-installation': {
    description: 'Electric gate installation in Plano, TX: power supply, wiring, battery backup, solar options and surge protection planned for a reliable gate. Call Shield.',
    intro:
      'Electric gate installation in Plano with the electrical side planned properly: where the power comes from, how it is protected, and what happens when the power goes out. Those decisions affect reliability more than the operator brand does.',
    local: [
      'Most Plano electric gates are powered from the house or from a dedicated circuit near the drive. We check the distance and the cable size so the operator gets the voltage it needs at the far end, and we put the low-voltage control wiring in conduit, away from irrigation lines, so a sprinkler repair years from now does not cut it.',
      'Power outages during Plano storms are the reason we recommend battery backup on almost every new electric gate. DC operators with a battery can keep running for many cycles without mains power, and some can be set to open and stay open when the battery runs low. We also add surge protection on the supply and on the loop and keypad leads, which are often what lets a lightning surge reach the control board.',
    ],
    faqs: [
      {
        q: 'Can an electric gate in Plano run on solar power?',
        a: 'Yes, for a low-traffic driveway gate with good sun exposure. A busy gate or one under heavy tree cover is better on mains power with battery backup. We work out the daily cycle count before recommending solar.',
      },
      {
        q: 'Will my electric gate work during a power cut?',
        a: 'With battery backup, yes, for a number of cycles that depends on the operator and the gate weight. Without it, you will need to use the manual release, which we show you at handover.',
      },
    ],
  },

  'plano/sliding-gate-installation': {
    description: 'Sliding gate installation in Plano, TX: track or cantilever slide gates and operators for homes, HOAs and businesses, built on proper footings. Call Shield.',
    intro:
      'Sliding gate installation in Plano, either on a ground track or as a cantilever gate that rides on rollers beside the opening. Slide gates suit wide openings and drives where a swing gate would hit the slope or the parked cars.',
    local: [
      'A track slide gate is the common choice on Plano homes, and its reliability depends on the concrete under the track. On Plano clay that slab needs to be thick enough and reinforced so it does not crack or tilt as the ground moves. Where a property has a lot of leaves, mulch or runoff across the opening, a cantilever gate avoids the ground track altogether, at the cost of needing more space along the fence.',
      'For the operator, we size by gate weight and how often it runs. A residential slide gate in West Plano might cycle a dozen times a day, while a community or commercial gate can run hundreds of times, which calls for a heavier, high-cycle operator. We also mount the operator pad so the chain runs level and the gate cannot be lifted off its track.',
    ],
    faqs: [
      {
        q: 'How much space do I need beside the opening for a sliding gate?',
        a: 'Roughly the width of the opening for a track gate, and around one and a half times the width for a cantilever gate, since the counterbalance tail extends past the opening. We measure your site before recommending either.',
      },
      {
        q: 'Can you add an operator to my existing sliding gate?',
        a: 'Often yes, if the gate rolls freely and the track and posts are sound. We check those first and tell you if anything needs fixing before an operator goes on.',
      },
    ],
  },

  'plano/swing-gate-installation': {
    description: 'Swing gate installation in Plano, TX: single and double wrought iron swing gates with arm or in-ground operators, set up for sloped drives. Call Shield.',
    intro:
      'Swing gate installation in Plano, for single and double leaf gates on arm or in-ground operators. Swing gates suit narrower openings and the formal entrances common on Plano estate homes, and they need careful setup for wind, weight and slope.',
    local: [
      'Hinge posts are the foundation of a swing gate, and in Plano they need deep footings to stay plumb through the clay soil moving between wet and dry seasons. We size the posts and hinges to the gate leaf, because an undersized post will lean within a few years and the gate will start to sag and drag.',
      'Choosing the operator depends on the leaf length, weight and how much the gate is exposed to wind. Arm operators are the usual choice and are easier to service. In-ground operators keep the entrance looking clean, which some Plano HOAs prefer, but they need good drainage in the box so they do not sit in water after heavy rain. We set the leaf sequence on double gates so they open and close cleanly in the right order.',
    ],
    faqs: [
      {
        q: 'Can a swing gate be installed on a sloped Plano driveway?',
        a: 'Yes, but the gate has to be built and hung for the slope. Usually that means swinging the leaves away from the rising side, raking the bottom of the gate, or fitting rising hinges. We plan this before the gate is fabricated.',
      },
      {
        q: 'Which way should my swing gate open, in or out?',
        a: 'Usually inward, toward the property, so it does not swing into the street or sidewalk. Outward swing may be needed when the drive rises steeply inside the gate, and then we check that it clears the public right of way.',
      },
    ],
  },

  'plano/gate-opener-installation': {
    description: 'Gate opener installation in Plano, TX on existing gates: LiftMaster, Elite, DoorKing and other operators, remotes, keypads and safety sensors. Call Shield.',
    intro:
      'Gate opener installation in Plano, adding an automatic opener to a gate you already have or replacing an opener that has reached the end of its life. We check the gate is ready to be automated before we fit anything to it.',
    local: [
      'Automating an existing gate is a common Plano project, and the gate itself decides how well it will go. A gate that swings or rolls freely by hand will automate well. One that sags, binds or needs a shove will wear out a new opener quickly. We assess the hinges, posts, track and weight first, and quote any work the gate needs alongside the opener.',
      'When replacing an old opener, we look at what can be kept. Existing wiring, loop detectors, keypads and safety sensors can often be reused if they are in good condition and compatible, which keeps the cost down. We also set up the access the household or community needs, whether that is remotes, a keypad, a phone app or a call box, and show you how the manual release works before we leave.',
    ],
    faqs: [
      {
        q: 'Can you install an opener on my existing wrought iron gate?',
        a: 'In most cases, yes. We check that the gate is strong enough at the mounting point, that it moves freely, and that its weight and length are within the opener rating. Lightweight decorative gates sometimes need a reinforced bracket area.',
      },
      {
        q: 'Which gate opener brand do you recommend for a Plano home?',
        a: 'We install and repair the main brands, including LiftMaster, Elite, DoorKing, Viking and US Automatic. The right choice depends on your gate type, weight, how often it runs and whether you want battery backup or solar, so we recommend one after seeing the gate.',
      },
    ],
  },
}
