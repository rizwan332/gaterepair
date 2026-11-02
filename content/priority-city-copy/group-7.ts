const copy: Record<string, { description: string; intro: string; local: string[]; faqs: { q: string; a: string }[] }> = {
  'westlake/viking': {
    description: 'Viking gate repair in Westlake, TX: DC batteries, limits and drive wear on heavy estate swing gates and slide gates off SH 114. Call Shield.',
    intro: 'Viking gate repair in Westlake for the DC swing and slide operators on heavy estate gates and private entrances. We test batteries, charging and the gate itself before we decide anything is wrong with the operator.',
    local: [
      'Westlake is a town of very large lots and very few homes, and the estate gates in places like Vaquero and Glenwyck Farms tend to be tall, heavy iron leaves set well back from the street. That is exactly the work Viking designs its DC operators for, but weight has a cost. A heavy leaf on ranch-land soil puts steady load on hinges and the drive train, and when the battery bank ages in the Texas heat, the operator has less in reserve to push through it. Slow travel, stopping short and false obstruction reversals are the usual signs.',
      'Most Viking faults here are repairable. On a T-21 or R-6 swing operator we check the mechanical limit switches, the gearbox and the battery under load, and on an older K-2 slide unit we confirm whether it has lost its limits after a total power failure, which needs a relearn rather than a new board. We look at the gate by hand first. If hinges have worn or a post has shifted, fixing that is what stops the next failure. Replacement only comes up when a gearbox has worn through on a very busy gate.',
    ],
    faqs: [
      { q: 'Our Westlake estate gate is far from any building. Does a Viking need mains power out there?', a: 'Not necessarily. Many Viking installations run on DC with a battery, topped up by a solar panel or a trickle charger, which suits a gate a long way from the house on a Westlake ranch lot. The tradeoff is that charging becomes the first thing to check when the gate slows, so we measure the panel or charger output along with the batteries.' },
      { q: 'Which Viking parts are worth keeping on hand?', a: 'For a private gate, very little beyond a spare remote. Batteries are the part that wears on a predictable schedule, so replacing them before they fail is the useful habit. For a heavy-use entrance we can talk about a spare control board or limit hardware for your specific Viking model, so a fault does not leave the gate standing open while a part ships.' },
    ],
  },
  'westlake/faac': {
    description: 'FAAC hydraulic gate repair in Westlake, TX: seal kits, fluid, pump pressure and 455 D boards on estate swing gates near Terra Bella and Vaquero. Call Shield.',
    intro: 'FAAC gate repair in Westlake for hydraulic swing operators, in-ground 770 units and 844 slide operators. Hydraulics are serviceable, and we repair seals, fluid, pressure and boards on site rather than defaulting to a new operator.',
    local: [
      'Formal estate entrances on Westlake acreage often call for paired iron swing leaves with a clean look at the hinge, and that is where FAAC hydraulic and in-ground operators tend to appear. A hydraulic unit handles a heavy leaf smoothly, but it has its own wear points. Seals harden in years of summer heat, fluid weeps past them, and pump pressure drops until the gate travels slowly or stops short of closed. A release-key valve that leaks gives a gate that drifts open under wind load.',
      'We start with fluid level and pressure, because that is where most FAAC faults sit, then check the encoder and limits, then the 455 D board on hydraulic swing units. A 400 or 402 arm with a leak normally needs a seal kit, a refill and a bleed. On an in-ground 770, we also open the foundation box and clear its drain, since standing water damages the operator over time. On estate streets such as Granada and Paigebrooke, replacement only makes sense when the ram or housing is physically damaged.',
    ],
    faqs: [
      { q: 'Does Westlake weather affect a FAAC hydraulic gate?', a: 'It does in two ways. Long hot summers age seals and can thin fluid, so a weeping arm usually shows up after a hot spell. On the few cold mornings, thicker fluid can make the gate run slower than usual. If it stays slow in mild weather, low fluid or pressure is the likely cause and we test both.' },
      { q: 'Can you repair a FAAC 844 slide operator as well as the hydraulic swing units?', a: 'Yes. The 844 is a slide operator, so the checks are different: drive gear, rack alignment, limits and the board. The diagnosis order still holds, though. We confirm the gate rolls freely by hand first, because a dragging slide gate makes any operator look faulty, then work through the electrical side.' },
    ],
  },
  'westlake/elite': {
    description: 'Elite gate repair in Westlake, TX: boards, start capacitors and limit switches on SL3000UL slide and CSW200UL swing units on campuses and estates. Call us.',
    intro: 'Elite gate repair in Westlake for AC slide and swing operators, now sold as LiftMaster Elite Series. On these units the board, start capacitor and limit switches are the usual failures, and all three are replaceable.',
    local: [
      'Westlake splits its gate work between controlled campus perimeters and estate driveways on ranch acreage, and Elite operators can turn up at both. On a cantilever slide at a perimeter entrance, an SL3000UL or an industrial SL595 works through a heavy cycle count, so chain, sprocket and limit wear arrive sooner. On an estate swing gate, a CSW200UL or Miracle One sees fewer cycles but long idle spells, and the start capacitor or a photo-eye knocked out of line by landscaping is the common call.',
      'Elite has been part of Chamberlain since 2003, but board layouts and error codes still vary by model, so we read the label before quoting. A grinding slide gate usually means chain or roller wear, and catching it early saves the sprocket and gearbox. A swing operator that hums without moving often has a failed capacitor. For sites along Solana Boulevard and SH 114 we can plan wear-part replacement around operating hours and confirm the operator answers your access control before we leave.',
    ],
    faqs: [
      { q: 'Our Westlake perimeter gate cycles all day. What fails first on an Elite slide operator?', a: 'On a busy cantilever slide, the drive chain and sprocket wear first, followed by limit switches. Batteries on the backup system are the other item that quietly ages until a power cut exposes them. We inspect all three on a service visit and tell you which are near the end so you can schedule the work instead of reacting to it.' },
      { q: 'Is it worth repairing an older Elite operator rather than replacing it?', a: 'In most cases, yes. The parts that fail on these AC units, the board, the start capacitor and the limit switches, can be replaced without touching the motor or gearbox. Replacement becomes the better answer when the gearbox itself is worn or the operator is undersized for a gate that has been made heavier since installation.' },
    ],
  },
  'westlake/us-automatic': {
    description: 'US Automatic gate repair in Westlake, TX: Patriot and Ranger 12V batteries, solar panels and chargers on ranch estate gates off SH 170 and Davis. Call Shield.',
    intro: 'US Automatic gate repair in Westlake for Patriot, Ranger and Patriot RSL operators on estate and ranch gates. Every one runs from a 12-volt battery, so we test the battery and charging before the operator.',
    local: [
      'Alongside its corporate campuses, Westlake still has real ranch acreage, and an estate gate at the end of a long drive is where a battery operator makes sense. US Automatic units suit that: the Patriot and Ranger swing operators and the Patriot RSL slide run from a 12-volt battery, recharged by a solar panel or a low-voltage AC charger. The weak point on both is the battery, which ages faster in North Texas heat, and on solar installs a panel that has lost sun to growing trees or drifted off its angle.',
      'Diagnosis goes battery under load, then panel output or charger and charge wire, then the board and limits. A gate that slows by evening points at charging. A gate that went dead after a storm may have a surge-damaged board, fed along the charge or keypad wire. On estate properties near Entrada or the drives off Davis Boulevard, the fix is often a fresh battery and a panel moved into clear sun. If a solar setup is simply undersized for the gate, we will say so and size it properly.',
    ],
    faqs: [
      { q: 'Why does our solar US Automatic gate struggle in winter on a Westlake acreage lot?', a: 'Shorter days and a lower sun angle cut panel output, and cold reduces battery capacity at the same time. A setup that was only just keeping up in summer falls behind by December. We measure what the panel delivers and what the battery holds, then recommend a larger battery, a repositioned panel, or both.' },
      { q: 'Can a US Automatic gate be switched from solar to plug-in charging?', a: 'Yes, if there is an outlet within reasonable reach. The operator is the same battery-run unit either way, and switching means fitting a low-voltage charger, not running mains power to the motor. On a long ranch drive, correcting an undersized solar setup is sometimes the simpler job, and we will tell you which suits your gate.' },
    ],
  },
  'westlake/apollo': {
    description: 'Apollo gate repair in Westlake, TX: Nice Apollo 1550 and 1650 swing openers, batteries, solar panels and boards on ranch and estate gates. Call Shield.',
    intro: 'Apollo gate repair in Westlake for solar-capable swing operators, including the 1550 single and 1650 dual. These are 12-volt systems, so we check the battery and charging before we condemn a board or actuator.',
    local: [
      'Apollo operators, now sold under Nice, are built around a battery and a small solar panel, and that fits Westlake estate land where the gate may sit a long way from any power. The engineering is simple and serviceable, but off-grid means the charging system carries everything. A shaded or dirty panel, a battery at the end of its life, or corroded low-voltage connections in the enclosure all produce a gate that moves a few feet and stops, or reverses after closing, which looks like a board fault but rarely is.',
      'We measure the battery under load and the panel output first. Then we look at the actuator arm and its mounting brackets, which fatigue on a long heavy leaf, and the limit settings on the swing arms. A board replacement comes last, once power is ruled out. On older 1550 and 1650 openers, the TITAN actuator is described by distributors as a bolt-in replacement on the same mounting geometry, which can save the rest of the system. That suits the larger lots around Glenwyck Farms and Vaquero.',
    ],
    faqs: [
      { q: 'Our Apollo gate in Westlake opens fine in the morning and fails by evening. Why?', a: 'That pattern almost always means the charging system is not keeping up. By late afternoon the day of opening and closing has used more than the panel put back in. Common causes are a battery near the end of its life, a panel shaded by trees, or dust on the panel. We test each under load.' },
      { q: 'Should an Apollo battery and solar panel be replaced like for like?', a: 'Not automatically. We size the replacement to the gate, its weight and how many times a day it runs. If the original array was marginal when it was installed, a matching panel will be marginal again. Sometimes a larger battery, a second panel or a better panel position is the more reliable fix.' },
    ],
  },
  'westlake/ramset': {
    description: 'Ramset gate repair in Westlake, TX: RAM 100 and RAM 1000 slide operators, chains, limit switches and thermal cutouts on busy perimeter gates. Call Shield.',
    intro: 'Ramset gate repair in Westlake for RAM series slide and swing operators on private estates and light commercial entrances. We match the diagnosis to the gate’s duty cycle, because a busy entrance wears the same part far faster.',
    local: [
      'A Ramset on a quiet estate driveway and a Ramset on a busy entrance are effectively two different machines. Westlake has both: estate gates on ranch acreage and controlled perimeters where gates open for shifts of staff and deliveries along SH 114 and Solana Boulevard. On a high-cycle gate, the RAM 1000 commercial slide wears chain and sprockets, burns out relays on the control board, and can overheat until the motor trips its thermal cutout. Limit switches also fail sooner under heavy duty.',
      'We check whether the operator is working harder than it should before replacing anything. A slide gate with worn rollers or a misaligned track loads the motor on every cycle, and fixing that is part of the repair. Then we test the limit switches, the relays and any loop detectors wired into access control. On a RAM 100 at a private gate in Terra Bella or Granada, a worn chain or a tired board is usually a straightforward repair. Gearbox wear on a continuous-duty entrance is where replacement deserves discussion.',
    ],
    faqs: [
      { q: 'Our Ramset gate at a Westlake entrance keeps tripping and stopping. What is happening?', a: 'Usually the motor is overheating and the thermal cutout is shutting it down to protect itself. On a busy entrance that points to an operator working against something: worn rollers, a dragging gate, a tight chain or a gate that has gained weight. We find the cause of the extra load rather than just resetting the cutout.' },
      { q: 'Can you service the loop detectors and access control tied to a Ramset?', a: 'Yes. On commercial and multi-gate properties the Ramset is wired into loop detectors, card readers and sometimes a staffed security system, and a fault in any of those can stop the gate. We test the operator and each input it depends on, so the visit fixes the actual failure rather than the most visible part.' },
    ],
  },
  'westlake/automatic-gate-repair': {
    description: 'Automatic gate repair in Westlake, TX for campus cantilever slides, barrier arms and estate swing gates along SH 114 and Solana Boulevard. Call Shield.',
    intro: 'Automatic gate repair in Westlake covers two very different jobs: secured corporate perimeters and private estate gates on ranch acreage. We diagnose the operator, safety devices and access inputs together on both.',
    local: [
      'Westlake has very few homes and a small number of very large campuses, so an automatic gate here is as likely to be a cantilever slide or barrier arm at a staffed entrance as a swing gate at the end of an estate drive. The campus gates cycle constantly and answer to card readers and plate recognition. The estate gates cycle rarely, sit on ranch soil, and often run on battery power. The faults follow that split: wear and integration problems on one side, power and alignment on the other.',
      'Our order of work is the same either way. We move the gate by hand to confirm it is free, test the safety devices, then the inputs, then the operator and board. On a perimeter entrance off SH 114 we also confirm which side failed, the gate or the access system, before anything is replaced. On estate gates in Vaquero or Glenwyck Farms, a slow or stalling gate is often a battery or limit issue. We repair where the parts make sense and say plainly when they do not.',
    ],
    faqs: [
      { q: 'Why do automatic gates on Westlake corporate sites need a different approach from home gates?', a: 'Because the gate is part of a security system rather than a standalone device. On a staffed perimeter it answers to card readers, plate recognition and guard controls, and uptime matters more than on any driveway. We coordinate with your security provider, schedule around operating hours, and leave the entrance secure if a part has to be ordered.' },
      { q: 'What should I check before calling about a stopped automatic gate?', a: 'Look for anything blocking the photo-eyes or the gate path, confirm power is on at the breaker, and try more than one remote or the keypad. If the gate still will not move, use the manual release to free it if you need access, and note any lights or sounds from the operator. That detail speeds up diagnosis.' },
    ],
  },
  'westlake/electric-gate-repair': {
    description: 'Electric gate repair in Westlake, TX: buried wiring, surge-damaged boards, transformers and loop detectors on campus and estate gates. Call Shield.',
    intro: 'Electric gate repair in Westlake for the power path behind a gate: supply, transformer, wiring, board and loops. When a Westlake gate is dead or erratic, we trace the electrical side end to end.',
    local: [
      'Electrical faults in Westlake come in two forms. On the estate properties, gates set far back on ranch land are fed by long buried runs, and those runs get damaged by trenching, landscaping and the clay shifting around them. A splice that was never sealed can corrode until the gate works one day and not the next. On the campuses, the gate shares its power and signal wiring with card readers, intercoms and loop detectors, so one failed transformer or loop can take down an entire entrance.',
      'We start at the supply and work outward: breaker, transformer output, wiring continuity, then the board, then the loops and their detectors. Storm season brings surge damage, and a single strike can reach the board through a loop lead or keypad cable, so we test each component separately and replace only what failed. Where the original install had no surge protection, we can add it. On entrances along Davis Boulevard or SH 170, we label the circuits we touch so your facilities team can follow the work.',
    ],
    faqs: [
      { q: 'Our Westlake gate is far from the house and acts up after rain. Is that electrical?', a: 'Very likely. A long buried low-voltage run with a poorly sealed splice will let moisture in after heavy rain, and the gate behaves erratically until it dries out. We test continuity and insulation along the run, find the weak point, and repair or replace that section rather than the operator.' },
      { q: 'Can a power surge damage more than one part of an electric gate?', a: 'Yes. A nearby strike can take out the control board, a receiver and a loop detector together, and on a campus entrance it can affect the access hardware wired to the gate. We test every part on its own, so you pay for the components that actually failed and not for a blanket replacement.' },
    ],
  },
  'westlake/driveway-gate-repair': {
    description: 'Driveway gate repair in Westlake, TX for estate swing and slide gates on long private drives in Vaquero, Glenwyck Farms and Terra Bella. Call Shield.',
    intro: 'Driveway gate repair for Westlake homes, where the gate usually sits at the end of a long private drive on a large lot. We get it opening safely first, then fix the cause properly.',
    local: [
      'Private driveways in Westlake are few but substantial. Homes in Vaquero, Glenwyck Farms and Terra Bella tend to sit on large lots, and the driveway gate is often a heavy estate swing pair or a long single leaf, sometimes on ranch acreage with no other way in. Distance shapes the faults. A long run from the house means voltage drop, battery or solar power on some gates, and a keypad or callbox that has to talk to the house over a long cable or radio link.',
      'On a driveway gate we check the leaves by hand first: hinges, posts and whether the pair still meets in the middle. Paired leaves that start colliding or closing out of step usually need the leaf delay and limits reset or a sagging leaf corrected. Then we test the power and the operator. If you have added screening or cladding to an iron gate, we check that the operator is still rated for the weight. Westlake driveway gate repair is mostly about finding the real cause on a long, quiet system.',
    ],
    faqs: [
      { q: 'Our Westlake driveway gate is a long way from the house. Does that cause problems?', a: 'It can. Long cable runs lose voltage, so an operator can work in mild weather and struggle in the cold, and long keypad or intercom runs pick up faults at splices. Some gates that far out run on battery and solar instead. We test what actually arrives at the gate before judging the operator.' },
      { q: 'How do I get my car out if the driveway gate fails shut?', a: 'Use the manual release on the operator, usually a key or lever on the arm or housing, then swing or slide the gate open by hand. If you do not know where yours is, we will show you on the first visit. Leave the gate released until the repair is done so it cannot move unexpectedly.' },
    ],
  },
  'westlake/sliding-gate-repair': {
    description: 'Sliding gate repair in Westlake, TX: cantilever rollers, tracks, chains and slide operators on campus perimeters and estate drives off SH 114. Call Shield.',
    intro: 'Sliding gate repair in Westlake for cantilever and track slide gates, from staffed campus perimeters to private estate entrances. Most slide gate faults start in the rollers, track or chain, so we check those first.',
    local: [
      'Cantilever slide gates are a large share of the Westlake perimeter work, because a cantilever gate runs without a ground track across a busy entrance. That moves the wear to the roller trucks and guide rollers, which carry the full weight of the leaf on every cycle. A worn truck lets the gate drop and drag, the operator feels the extra load, and the gate slows, reverses or trips. On the estate side, track slide gates collect leaves and grit and wear their wheels flat.',
      'We start mechanical. On a cantilever we check roller trucks, guide rollers and the gate frame for sag. On a track gate we clean and straighten the track and check the V-groove wheels. Then the drive chain: tension, sprockets and the brackets on the gate. Only then do we test limits and the board. For a campus gate near Solana Boulevard, we can plan roller and chain replacement before failure. Westlake sliding gate repair is rarely a new operator, and we will tell you when it is.',
    ],
    faqs: [
      { q: 'Our cantilever gate at a Westlake campus has started to sag at the end. What causes that?', a: 'Usually worn roller trucks or loose mounting on the support posts. A cantilever leaf hangs from its rollers rather than resting on a track, so any wear shows up as droop at the free end. Left alone, it starts dragging on the catch post and loading the operator. Replacing the trucks and re-levelling the leaf normally fixes it.' },
      { q: 'How often should a busy sliding gate be serviced?', a: 'It depends on cycle count. A private estate slide gate may only need a check once a year. A perimeter gate opening for shift changes and deliveries all day benefits from a regular schedule covering chain tension, roller wear and limit settings, so worn parts are replaced at a planned time instead of when the entrance stops working.' },
    ],
  },
  'westlake/swing-gate-repair': {
    description: 'Swing gate repair in Westlake, TX: hinges, posts, arms and swing operators on heavy estate gates in Granada, Paigebrooke and Entrada. Call Shield.',
    intro: 'Swing gate repair in Westlake for single and paired estate leaves on large lots and ranch land. We look at hinges, posts and the leaf before the operator, because a heavy swing gate fails mechanically first.',
    local: [
      'Most swing gates in Westlake hang across private estate drives, and many are tall ornamental iron leaves that weigh far more than a typical suburban gate. On ranch soil the posts move slowly as the ground wets and dries, and a heavy leaf hung from a shifting post starts to drop at the latch end, bind on its hinges and drag. The operator arm then fights the gate on every cycle until it reverses, stops short or wears its gearbox. Wind load on a solid or screened leaf adds to that.',
      'We free the gate and swing it by hand to feel for binding, then check the hinges, the post plumb and the leaf for sag. Fixing a dropped leaf or a worn hinge is often the whole repair. After that we set the limits and force on the operator, and on paired gates the leaf delay so they close in order. On estates in Granada, Paigebrooke or Entrada, swing gate repair in Westlake is usually cheaper than owners expect once the mechanical side is right.',
    ],
    faqs: [
      { q: 'Why has our Westlake swing gate started dragging when nothing changed?', a: 'The ground changed. Clay and ranch soil swell and shrink with rain and drought, and a gate post set in it moves gradually. A heavy leaf on a post that has leaned even slightly will drop at the far end and drag. Correcting the post or re-hanging the leaf stops the strain on the operator.' },
      { q: 'Can a swing gate operator be repaired or does it need replacing?', a: 'Usually repaired. Boards, capacitors, limit switches and arm hardware are all replaceable, and many operator complaints are really hinge or post problems. Replacement makes sense when the gearbox is worn, parts are no longer available, or the operator is undersized for a leaf that has become heavier since it was fitted.' },
    ],
  },
  'westlake/gate-opener-repair': {
    description: 'Gate opener repair in Westlake, TX: remotes, keypads, receivers, control boards and limit settings on estate gates and campus entrances. Call Shield.',
    intro: 'Gate opener repair in Westlake for the parts that tell a gate what to do: remotes, keypads, receivers, control boards and limit settings. We test each input separately to find the one that failed.',
    local: [
      'On a Westlake estate, the gate opener may be fed by a keypad at the street, a callbox wired back to a house set well behind it, and a handful of remotes. On a campus entrance the inputs multiply: card readers, plate recognition, guard buttons and loop detectors all signal the same board. When one of them sticks or fails, the opener can ignore every other command. That makes opener faults here more about tracing signals than replacing hardware.',
      'We check the inputs first, one at a time, then the receiver and antenna, then the board and limit settings. A gate that opens but will not close is often a stuck input or a safety device holding it. A gate that stops short has usually drifted off its limits. Remotes and receivers may simply need reprogramming. Where a board has failed we replace it with the matching part. On entrances off SH 170 or Davis Boulevard, we confirm every input works before we leave.',
    ],
    faqs: [
      { q: 'Our Westlake gate ignores the remotes but the keypad still works. What is wrong?', a: 'That points at the receiver or the remotes, not the opener. Range can drop if the antenna is damaged, loose or shielded, which matters on a long Westlake drive where the house sits far back. We test the receiver, check the antenna, and reprogram or replace remotes as needed.' },
      { q: 'Can you add new remotes or codes to an existing gate opener?', a: 'Yes. We can program additional remotes to the existing receiver, change or add keypad codes, and clear old codes for former staff or contractors. If the receiver is too old to accept current remotes, we will explain the options, which may be a new receiver rather than a new opener.' },
    ],
  },
  'westlake/gate-motor-repair': {
    description: 'Gate motor repair in Westlake, TX: capacitors, gearboxes, thermal cutouts and worn motors on heavy estate gates and busy campus slides. Call Shield.',
    intro: 'Gate motor repair in Westlake for operators that hum, overheat, run slowly or stop. We test the capacitor, gearbox and thermal cutout and check the gate load before we call the motor finished.',
    local: [
      'Motors in Westlake work under two very different loads. Perimeter slide gates on the corporate campuses can cycle all day, so heat builds in the motor and the thermal cutout trips, especially through a hot summer afternoon. Estate gates cycle rarely, but they are often heavy iron leaves on long drives, and a motor that sits idle then has to start a heavy gate relies on a healthy start capacitor. Both lead to the same complaint: a gate that hums, hesitates or quits halfway.',
      'We test in a set order. First the gate load by hand, because a dragging leaf will cook any motor. Then the capacitor on AC units, the battery on DC units, and the thermal cutout. Then the gearbox for wear and backlash. A failed capacitor or a reset cutout is a small repair. A stripped gearbox can sometimes be rebuilt. On a high-use gate near SH 114, a worn motor and gearbox together is when we discuss replacing the operator.',
    ],
    faqs: [
      { q: 'Our Westlake campus gate stops on hot afternoons and works again later. Why?', a: 'That is the classic pattern of a thermal cutout tripping. The motor overheats from heavy cycling in high heat and shuts down to protect itself, then resets once it cools. We check what is making it work so hard, such as worn rollers or a tight chain, and whether the operator is rated for the duty.' },
      { q: 'My gate motor hums but the gate does not move. Is the motor dead?', a: 'Often not. On AC operators, a humming motor that will not turn is very commonly a failed start capacitor, a small part to replace. It can also be a seized gearbox or a gate jammed against something. We check the gate by hand and test the capacitor before judging the motor itself.' },
    ],
  },
  'westlake/emergency-gate-repair': {
    description: 'Emergency gate repair in Westlake, TX, 24/7: gates stuck open or shut, vehicle strikes and storm damage at campus perimeters and estates. Call Shield.',
    intro: 'Emergency gate repair in Westlake for gates stuck open, stuck shut, struck by a vehicle or damaged in a storm. We answer around the clock and make the entrance safe and secure first.',
    local: [
      'An emergency in Westlake usually means one of two things. On a corporate perimeter, a gate stuck open leaves a secured site exposed, and a gate stuck shut can block shift traffic or deliveries along Solana Boulevard. On an estate on ranch land, a failed gate may be the only way in or out of the property. Vehicle strikes on busy entrances, storm damage to sensors and boards, and power loss to battery gates are the usual causes.',
      'We start by making the entrance safe: release a trapped gate, secure a damaged leaf, or put a perimeter gate into a controllable, closed state. Then we diagnose properly. A struck slide gate may need a bent track or roller truck straightened before the operator will run. Storm damage often stops at a board, a photo-eye or a loop. If the full repair needs a part we do not carry, we leave the entrance locked down and under your control rather than standing open.',
    ],
    faqs: [
      { q: 'Our Westlake site cannot be left open overnight. What happens if the part is not available?', a: 'We secure the entrance first. That can mean locking the gate closed with a manual override for guard-controlled access, or running it in a limited mode until the part arrives. Tell us your security requirements when you call, and we will plan the visit around keeping the perimeter controlled.' },
      { q: 'A vehicle hit our gate. Should we try to move it?', a: 'Only if it is safe and it is blocking an emergency route. Turn off power to the operator first, then use the manual release. A bent leaf can be under tension, so do not force it. Take photos for insurance, keep people clear of the damaged section, and call us to assess the gate, operator and track.' },
    ],
  },
  'westlake/commercial-gate-repair': {
    description: 'Commercial gate repair in Westlake, TX for corporate campus perimeters, cantilever slides, barrier arms and card access along SH 114 and SH 170. Call Shield.',
    intro: 'Commercial gate repair in Westlake for corporate perimeters with several controlled entrances, cantilever slides, barrier arms and integrated access control. We work to your security system and operating hours.',
    local: [
      'Commercial gate work in Westlake is shaped by the campuses. Since the Circle T Ranch was bought in 1993, the town has become home to very large corporate sites, including the Fidelity and Charles Schwab campuses, and their perimeters run long fence lines with several gated entrances. Those gates sit inside staffed security, card readers and plate recognition, and they are expected to run with uptime closer to an industrial site than an office park. A failure is a security event, not an inconvenience.',
      'We diagnose the gate and the access system as one. We read the operator’s fault history, test drive parts and safety devices, then check the interface with the card system so we know which side failed. Barrier arms and cantilever slides get a cycle-based look at rollers, chains and limit wear. Where a part has a lead time, we tell you upfront and can recommend spares to hold on site. We coordinate access with your security team and schedule around shifts.',
    ],
    faqs: [
      { q: 'How do you handle gate repairs on a Westlake site with staffed security?', a: 'We check in with your security team, confirm which entrances can be taken out of service and when, and keep a guard-controlled override in place during the work. Before leaving we test the gate with your card and plate systems so it is confirmed working end to end, not just moving.' },
      { q: 'Do you offer planned maintenance for commercial gates?', a: 'Yes. For high-cycle perimeter gates, a maintenance schedule based on cycle count catches chain, roller and limit wear before it causes a failure. We record what we find on each entrance so your facilities team can budget for parts, and we flag anything near the end of its life.' },
    ],
  },
  'westlake/residential-gate-repair': {
    description: 'Residential gate repair in Westlake, TX for estate driveway, side and pedestrian gates, with safety checks for children and pets. Call Shield.',
    intro: 'Residential gate repair for Westlake homeowners, covering estate driveway gates, side gates and pedestrian gates. Safety devices get checked on every visit, because a gate near children or pets has to reverse reliably.',
    local: [
      'Residential gates in Westlake are fewer than in most towns, but they tend to be larger. A home in Vaquero or Entrada may have an automated estate driveway gate, a pedestrian gate with an electric lock beside it, and side gates into a pool or yard. On ranch acreage, the driveway gate can be long, heavy and battery powered. Each has its own failure pattern, but the common thread is ground movement and weather on big lots, which pull posts and latches out of line.',
      'Safety comes first on any home gate. We test the photo-eyes, edge sensors and the operator’s reversing force, and check that the gate stops and reverses on contact, in line with UL 325. Self-closing side and pool gates get their hinges and latches adjusted so they close fully. Then we deal with the actual fault, from a stuck pedestrian lock to a driveway operator that stalls. We repair rather than replace wherever the parts support it.',
    ],
    faqs: [
      { q: 'Our Westlake home has a pool. What should we know about the side gates?', a: 'Pool and yard gates should close and latch on their own every time. Ground movement on large lots can pull a latch out of line so the gate rests just short of closed. We adjust hinges, closers and latches so they work reliably, and we confirm what the city and your HOA require for pool barriers.' },
      { q: 'How do I know my gate’s safety sensors are working?', a: 'Place a soft object, such as a cardboard box, in the gate path while it closes. A healthy gate reverses as soon as it meets the box. If yours pushes on, switch it to manual and ring us. We test photo-eyes, edge sensors and force settings on every residential visit, because these are the parts that protect children and pets.' },
    ],
  },
  'westlake/automatic-gate-installation': {
    description: 'Automatic gate installation in Westlake, TX for estate drives and campus perimeters: planning, footings, power, access control and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Westlake, planned around the site: a ranch-land estate drive or a controlled corporate perimeter. We size the operator, plan power and footings, and build in the safety devices from the start.',
    local: [
      'No two Westlake installations look alike. An estate on ranch acreage near Vaquero might need a long single swing leaf set back from the road on battery and solar power. A campus entrance off Solana Boulevard might need a cantilever slide or barrier arm tied into card readers, plate recognition and a guard station. Both sit on clay soil that moves with the seasons, and both need an operator sized for the gate and the number of times it will actually run.',
      'We start with a site visit: gate type, weight, cycle count, power source and where the controls will sit. We confirm what the town and any HOA or property owner require before work begins. Footings are set deep enough for the soil and the gate weight. We plan the power and low-voltage runs to avoid voltage drop over distance. Every install includes the entrapment protection UL 325 requires, and we build gates to ASTM F2200 so the gate and operator work as one safe system.',
    ],
    faqs: [
      { q: 'Does Westlake soil affect how an automatic gate is installed?', a: 'Yes. The clay and ranch soil here swell and shrink, so posts and footings have to be set deep and wide enough to stay plumb as the ground moves. On a slide gate the track or cantilever footings get the same attention. Getting this right at installation prevents most of the alignment problems we see later.' },
      { q: 'What do we need to decide before an automatic gate is installed?', a: 'Gate style and swing or slide, which depends on space and slope; the power source, mains or solar; how people will enter, by remote, keypad, callbox or card; and how many cycles a day the gate will run. We help you decide each one on the site visit and put it in a written plan.' },
    ],
  },
  'westlake/electric-gate-installation': {
    description: 'Electric gate installation in Westlake, TX: power supply, cable runs, transformers, surge protection and loop detection for estates and campuses. Call Shield.',
    intro: 'Electric gate installation in Westlake with the electrical side planned properly: supply, cable sizing, transformers, surge protection and vehicle loops. Long distances on Westlake lots make that planning essential.',
    local: [
      'The electrical design is where Westlake installs most often go wrong. Estate gates on large lots can sit hundreds of feet from the house, and a cable that is too thin delivers too little voltage to the operator, which shows up as a gate that struggles on cold mornings. Campus gates draw on shared power and share their trenches with card reader and intercom wiring, so separation and labelling matter. Storms across the area make surge protection worth fitting from the start.',
      'We calculate cable size for the actual run length, so the operator gets the voltage it needs. Where mains power is impractical, we consider battery and solar instead. We fit surge protection on the supply and on loop and keypad leads, set exit and safety loops in the drive, and put connections in sealed enclosures. We confirm permit and electrical requirements with the town before trenching. On entrances off SH 170 or Davis Boulevard, we hand over a drawing of what runs where.',
    ],
    faqs: [
      { q: 'Our Westlake gate will be far from the house. Is mains power or solar better?', a: 'It depends on distance, cycle count and shade. Mains power suits a gate that runs often, provided the cable is sized for the run so voltage does not drop. Solar suits a remote ranch gate with light use and open sky. We measure the run and the sun exposure and recommend the one that will work in winter.' },
      { q: 'What are vehicle loops and does our new gate need them?', a: 'Loops are wire circuits cut into the drive that detect a vehicle. An exit loop opens the gate as a car approaches from inside, and safety loops stop the gate closing on a car in its path. Most automated vehicle gates benefit from both, and busy entrances need them to run safely.' },
    ],
  },
  'westlake/sliding-gate-installation': {
    description: 'Sliding gate installation in Westlake, TX: cantilever and track slide gates for estates and campus perimeters, sized footings, UL 325 safety. Call Shield.',
    intro: 'Sliding gate installation in Westlake, from cantilever perimeter gates to estate track slides. We plan the run-back space, footings and operator rating around the site and how often the gate will open.',
    local: [
      'A slide gate needs room to travel, and the large lots and campus frontages in Westlake usually have it. Cantilever slides suit perimeter entrances because nothing crosses the opening on the ground, which keeps debris and vehicle damage away from a track. Track slides can suit a level estate drive. The soil is the challenge: clay that swells and shrinks will tilt cantilever posts or crack a track footing if they are not built for it.',
      'We measure the opening, the run-back space and the slope, then choose cantilever or track. Footings for roller trucks and posts are sized for the gate weight and the soil. The operator is rated for the gate and its cycle count, so a busy entrance does not get a residential unit. We fit photo-eyes and edge sensors to meet UL 325, guard the rollers and gaps under ASTM F2200, and confirm what the town and any HOA require. Near Glenwyck Farms and Terra Bella, planning also covers sightlines.',
    ],
    faqs: [
      { q: 'Is a cantilever or a track slide gate better for a Westlake property?', a: 'Cantilever gates suit busy entrances, uneven ground and places where a track would collect debris or get hit, because the leaf rides on rollers off to the side. Track gates cost less in steel and suit a level, quiet drive. We look at the opening, slope and use before recommending either.' },
      { q: 'How much space does a sliding gate need?', a: 'A track slide gate needs clear space beside the opening at least as long as the opening itself. A cantilever gate needs more, because the leaf extends past the opening to balance on its rollers. We measure the run-back on the site visit, checking for trees, walls and slopes in the path.' },
    ],
  },
  'westlake/swing-gate-installation': {
    description: 'Swing gate installation in Westlake, TX: single and paired estate leaves, deep post footings, operator sizing and UL 325 safety for large lots. Call Shield.',
    intro: 'Swing gate installation in Westlake for estate driveways and ranch entrances. We plan swing direction, post footings and operator size around a heavy leaf and ground that moves with the seasons.',
    local: [
      'Westlake estates often want the formal look of a swing gate: a pair of ornamental iron leaves or one long leaf across a ranch entrance. The large lots usually give enough room for the swing, but they bring their own issues. Heavy leaves need heavy posts. Clay and ranch soil shift, so a post set too shallow will lean and drop the leaf within a few seasons. And a driveway that slopes toward the gate can stop an inward-swinging leaf short.',
      'We set the swing direction after checking the slope and the room behind the gate. Posts go into footings sized for the leaf weight and the soil. We match the operator to the leaf length, weight and wind load, especially on screened or solid gates. Every install gets photo-eyes and the entrapment protection UL 325 requires, built to ASTM F2200. We confirm what the town and your HOA require before work starts, which matters in places like Granada and Paigebrooke.',
    ],
    faqs: [
      { q: 'Should our Westlake swing gate open in or out?', a: 'Inward is usual, so the gate does not swing into the road. A driveway that rises toward the house can block an inward swing, though, and then the answer is an outward swing with enough setback, a modified hinge layout, or a slide gate instead. We check the slope and space before choosing.' },
      { q: 'Can a heavy iron swing gate be automated?', a: 'Yes, with an operator rated for the leaf weight and length, and with hinges and posts that can carry the load. Undersized operators are the main reason heavy swing gates fail early. We weigh up the leaf, the wind load from any screening, and how often it will open before picking the operator.' },
    ],
  },
  'westlake/gate-opener-installation': {
    description: 'Gate opener installation in Westlake, TX: operators, keypads, callboxes, receivers and card access added to estate and campus gates. Call Shield.',
    intro: 'Gate opener installation in Westlake for existing gates that need automating or a new operator and controls. We match the opener to the gate and add the access method you need, from remotes to card readers.',
    local: [
      'Many Westlake gates already exist and simply need automating, or have an opener that has reached the end of its life. On estates, that often means a heavy manual swing leaf on a long drive, where the opener has to suit the weight, the distance from power and how visitors will be let in. On commercial sites, an opener has to accept signals from card readers, guard controls and loops. The gate itself has to swing or slide freely before any opener goes on.',
      'We inspect the gate first and fix any binding or sag, because a new opener on a bad gate fails early. Then we choose the operator by gate type, weight and duty, plan its power, and add the controls: remotes, a keypad or callbox at the road, and an exit loop. We fit photo-eyes and set force and reversing to UL 325. Near Entrada and the drives off SH 114, we place keypads and callboxes where drivers can reach them without leaving the car.',
    ],
    faqs: [
      { q: 'Can an opener be added to the existing gate on our Westlake property?', a: 'Usually, if the gate is sound and moves freely. We check the hinges or rollers, the posts and the frame, and confirm the gate is light enough for a suitable operator. If the gate is too heavy, sagging or badly hung, we will tell you what needs fixing first or whether a new gate makes more sense.' },
      { q: 'What access options can a new gate opener support?', a: 'Remotes, keypads, telephone or cellular callboxes, card readers, and vehicle detection loops for automatic exit. Many openers can handle several at once. We help you choose based on who needs access, how often, and whether you want to let visitors in from your phone.' },
    ],
  },
  'prosper/viking': {
    description: 'Viking gate repair in Prosper, TX: DC batteries, limits, boards and gearboxes on heavy long-driveway swing gates and community entrances. Call Shield.',
    intro: 'Viking gate repair in Prosper for DC operators on long single leaves, estate pairs and community entrances. Long cable runs and battery systems change the diagnosis, so we test power before parts.',
    local: [
      'Prosper’s estate district sets homes on lots of an acre or more with a deep front setback, so a gated drive in Gentle Creek Estates often has a long, heavy leaf a good distance from the house. Viking builds DC operators for that kind of gate, and the battery bank gives them reserve. But a long low-voltage feed loses voltage before it reaches the operator, and the batteries take the strain. On a long single leaf, the T-21 or R-6 mechanical limit switches can also drift until the gate stops short.',
      'We test the supply at the gate, then the batteries under load, then the charger, before looking at the board. On swing units we reset the limits and check the arm hardware. On an older K-2 slide, we check for lost limits after a total power failure. Viking gate opener repair on community entrances near Windsong Ranch adds loop detectors to the list. Gearbox and chain wear on a heavy, busy gate is the case where we would discuss replacing the operator.',
    ],
    faqs: [
      { q: 'Our Prosper Viking gate is slow on cold mornings but fine later. Why?', a: 'Cold weather reduces battery capacity, and on a long run from the house the charger may already be delivering less than it should. Together that leaves the operator short on power first thing. We check the voltage arriving at the gate, test the batteries, and fix the weaker link, whether that is cable, connections or batteries.' },
      { q: 'How long do the batteries in a Viking operator last?', a: 'It varies with heat, cycle count and charging. Texas summers shorten battery life, and a charger starved of voltage keeps batteries partly flat, which ages them faster. We test capacity under load rather than going by age, and replace them as a set so a weak battery does not drag down a new one.' },
    ],
  },
  'prosper/faac': {
    description: 'FAAC gate repair in Prosper, TX: hydraulic seals, fluid, pump pressure and 455 D boards on estate swing gates in Gentle Creek Estates. Call Shield.',
    intro: 'FAAC gate repair in Prosper for hydraulic swing arms, in-ground 770 operators and 844 slides. We service the hydraulics on site, from seal kits to pressure adjustment, rather than replacing a working unit.',
    local: [
      'Hydraulic operators suit the long, heavy swing leaves found on Prosper’s larger estate lots, because they move a big gate smoothly and hold it firmly closed. FAAC builds them to be serviced, but each wear point shows up differently. Summer heat ages seals until fluid weeps out. Pressure falls and the gate travels slowly or stops short. A long leaf exposes small limit or encoder drift. On a long cable run, low voltage at the pump can mimic a hydraulic fault, so we test the supply first.',
      'After the supply, we check fluid and pump pressure, then the encoder and limit settings, then the 455 D board on hydraulic swing units. A leaking 400 or 412 arm normally needs a seal kit, refill and bleed. An in-ground 770 sits in a foundation box under the hinge, and on clay ground slow drainage after heavy rain is the risk, so we clear the drain. On estates around Star Trail and Lakes of La Cima, we replace FAAC operators only when the ram or housing is damaged.',
    ],
    faqs: [
      { q: 'Our Prosper FAAC gate drifts open on windy days. What causes that?', a: 'Usually a leaking release-key valve or low pressure, so the hydraulics cannot hold the leaf against wind load. Long estate leaves catch a lot of wind, which makes it more noticeable. We test pressure, check the release valve and seals, and adjust the system so the gate holds firmly closed.' },
      { q: 'Is it hard to find someone who will repair a FAAC hydraulic operator?', a: 'It can be, because hydraulics need different diagnostics and parts to the chain drives most technicians work on, and replacing is easier than learning. We carry seal kits, fluid and common boards. If a less common part has to be ordered, we tell you before the visit rather than on the day.' },
    ],
  },
  'prosper/elite': {
    description: 'Elite gate repair in Prosper, TX: control boards, capacitors, limit switches and chains on Elite swing and slide operators at estates and HOAs. Call Shield.',
    intro: 'Elite gate repair in Prosper for AC swing and slide operators on estate drives and HOA entrances. Boards, start capacitors and limit switches are the usual failures here, and all are serviceable.',
    local: [
      'Elite AC operators need mains power at the gate, and in Prosper that power often travels a long way. Under the town’s estate zoning a house sits well back from the road, so the supply to a CSW200UL or Miracle One swing operator can run a long distance underground. Low voltage at the motor makes the start capacitor work harder, and a weak capacitor fails sooner. On community entrances off Frontier Parkway, an SL3000UL slide adds chain and sprocket wear and keypad and loop faults.',
      'We test the voltage at the operator under load first, then the capacitor, then the limit switches and board. A swing operator that hums without moving is usually a capacitor. A slide operator that grinds needs chain, sprocket or roller work before the gearbox suffers. Board layouts and error codes vary between Elite models, so we read the label before quoting. On estates in Whitley Place or Star Trail, an undersized feed cable is sometimes the real fix.',
    ],
    faqs: [
      { q: 'Our Prosper Elite swing gate hums but will not open. What failed?', a: 'Most often the start capacitor. On a long supply run the motor sees lower voltage, which makes the capacitor work harder and wear sooner. We test the capacitor and the voltage arriving at the operator. If the voltage is low, we look at the cable and connections so the new capacitor does not fail the same way.' },
      { q: 'Can I still get parts for an older Elite operator?', a: 'For most models, yes. Elite has been part of Chamberlain, LiftMaster’s parent company, since 2003, and boards, capacitors and limit switches remain available for the common units. Where a specific part is scarce, we tell you upfront and explain whether repair or replacement makes more sense.' },
    ],
  },
  'prosper/ramset': {
    description: 'Ramset gate repair in Prosper, TX: RAM series slide operators, chains, limit switches, relays and loop detectors at HOA and estate gates. Call Shield.',
    intro: 'Ramset gate repair in Prosper for RAM series slide and swing operators on estate drives and community entrances. A busy HOA gate and a quiet driveway wear differently, and we diagnose with that in mind.',
    local: [
      'Prosper’s newer master-planned sections bring community entrances with loops, keypads and gates that cycle all day, and that duty cycle is what a Ramset feels most. A RAM 1000 commercial slide at an HOA entrance wears its chain and sprockets, cooks relays on the control board and can trip its thermal cutout on hot afternoons. On a quiet estate drive, a RAM 100 slide sees far fewer cycles, and its faults are more often limit switches or a board after a storm.',
      'We start with the gate. Worn rollers, a dragging track or a gate made heavier by added panels makes the operator work harder on every cycle. Then we check chain tension and sprockets, limit switches, relays and the loop detectors and keypad wired into the entrance. On community gates near Windsong Ranch or off Preston Road, we test every input, because a faulty loop can look like a dead operator. Gearbox wear on a continuous-duty gate is where replacement comes up.',
    ],
    faqs: [
      { q: 'Our Prosper HOA Ramset gate keeps failing. Why does it wear so quickly?', a: 'Because of cycle count. A community entrance can run hundreds of cycles a day, which wears chains, sprockets and limit switches far faster than on a driveway. Often the lasting fix includes correcting whatever is adding load, such as worn rollers or added infill, as well as replacing the worn part.' },
      { q: 'Do you carry Ramset parts for repairs?', a: 'We carry the common high-cycle wear parts, such as chains and sprockets, because those are what actually fail on busy gates. Less common components are typically a short order. We confirm which parts your model needs before the visit where we can, so the gate is not left out of action longer than necessary.' },
    ],
  },
  'prosper/automatic-gate-repair': {
    description: 'Automatic gate repair in Prosper, TX for long-driveway swing gates on acre lots and HOA entrances in Windsong Ranch and Star Trail. Call Shield.',
    intro: 'Automatic gate repair in Prosper for estate gates set far back from the house and the community entrances of the master-planned neighborhoods. We test the power, safety devices and operator together.',
    local: [
      'Prosper’s estate zoning puts homes on acre lots with deep front setbacks, so an automatic gate here is often a long swing leaf at the end of a long drive. Distance shapes the faults: voltage lost on the way to the gate, battery and solar systems that fall behind, and limits that drift on a long leaf. The master-planned sections add another kind of gate, the HOA entrance, where an operator, a loop, a keypad and sometimes a second gate all have to agree.',
      'We start by measuring the voltage that actually arrives at the operator, because a starved operator behaves like a worn one. Then we check the gate moves freely, test the photo-eyes and loops, and only then look at the board and motor. On HOA entrances near Windsong Ranch or Star Trail, we test the whole entrance in one visit. Automatic gate repair in Prosper often ends with a cable or battery fix rather than a new operator.',
    ],
    faqs: [
      { q: 'Why do so many Prosper gates seem to fail in cold weather?', a: 'Cold exposes a power supply that was marginal. Batteries lose capacity in the cold, and on a long cable run the voltage at the gate is already lower than at the house. A gate that copes in mild weather then struggles on a cold morning. We measure the supply and the battery before blaming the motor.' },
      { q: 'Our HOA entrance gate opens for some residents but not others. Where is the fault?', a: 'That usually points to the access system rather than the gate: a keypad code list, a receiver that has lost some remotes, or a card or app system with out-of-date records. We test the operator and each input separately so the HOA knows exactly which part failed and what it takes to fix.' },
    ],
  },
  'prosper/electric-gate-repair': {
    description: 'Electric gate repair in Prosper, TX: voltage drop on long cable runs, splices, surge damage and loop detectors on estate and HOA gates. Call Shield.',
    intro: 'Electric gate repair in Prosper for the long power and signal runs behind estate and community gates. We trace the supply, transformer, wiring, board and loops to find where the power is being lost.',
    local: [
      'On a Prosper estate lot, the gate is often a long way from the house, and every foot of low-voltage cable between them costs some voltage. If the cable is undersized, the operator gets too little power and runs slowly, hesitates or stops, worst in cold weather. Buried runs along the drive are also exposed to irrigation repairs, landscaping and ground movement, and an unsealed splice will corrode. At community entrances, a failed transformer or loop can take down the whole entrance.',
      'We measure voltage at the house and at the gate under load, then test continuity along the run and check every splice. If the cable is the wrong gauge for the distance, we say so and plan a replacement run. Surge damage after storms is the other common call, and we test the board, receiver and loop detectors separately so you pay only for what failed. On properties off US-380 University Drive and in Gentle Creek Estates, surge protection is worth adding where it is missing.',
    ],
    faqs: [
      { q: 'How can I tell if my Prosper gate has a voltage drop problem?', a: 'The usual signs are a gate that runs slower than it used to, struggles more in cold weather, or works after resting but fails after several cycles. Lights on the board may dim when the motor starts. We measure voltage at the operator while it runs, which shows the problem clearly.' },
      { q: 'Does replacing a long buried gate cable mean digging up the drive?', a: 'Not always. Where the original conduit is intact, we can often pull new cable through it. Where it is not, we look for a route along the edge of the drive or through landscaping. We locate the fault and the conduit first, then explain the options before any digging.' },
    ],
  },
  'prosper/driveway-gate-repair': {
    description: 'Driveway gate repair in Prosper, TX for long single leaves and estate swing pairs on acre lots in Gentle Creek Estates and Whitley Place. Call Shield.',
    intro: 'Driveway gate repair for Prosper homes, where a gate often stands well back from the street at the end of a long drive. We get it working safely and then fix the cause.',
    local: [
      'Prosper’s estate lots are wide and deep, so a private driveway gate is usually a single long leaf or a wide pair of swing leaves, set back from the road with plenty of room. Long leaves have their own habits. Small limit drift becomes a gate that stops short or overshoots, a leaf that sags a little at the hinge drops noticeably at the far end, and wind load on a wide gate pushes the operator harder. Power has to travel a long way too.',
      'We check the leaf by hand first, looking at the hinges, the post and any sag at the latch end. Then the limits and force settings, and the leaf delay on a pair so they close in order without colliding. We test the voltage at the gate, the battery if there is one, and the keypad or callbox at the road. On drives in Gentle Creek Estates or Whitley Place, Prosper driveway gate repair often comes down to a power or limit fix.',
    ],
    faqs: [
      { q: 'Our long driveway gate in Prosper stops a few feet short of closing. Why?', a: 'On a long leaf, a small change in the limit setting or a little sag at the hinge makes a noticeable difference at the far end. Low voltage can also make the operator stall before the close position. We check the leaf, reset the limits and test the supply so the gate closes fully.' },
      { q: 'Can I leave my driveway gate open while waiting for a repair?', a: 'Yes. Use the manual release to free the gate and swing it fully open, then secure it so wind cannot move it. If the gate is damaged or leaning, leave it where it is and keep cars and children clear. We will show you how the release works on your operator.' },
    ],
  },
  'prosper/sliding-gate-repair': {
    description: 'Sliding gate repair in Prosper, TX: tracks, rollers, chains and slide operators on estate drives and community entrances off Preston Road. Call Shield.',
    intro: 'Sliding gate repair in Prosper for track and cantilever slide gates at homes and HOA entrances. We start with the rollers, track and chain, since that is where most slide gate faults begin.',
    local: [
      'Slide gates are less common than swing gates on Prosper’s estate drives, where wide lots give plenty of room to swing, but they do appear on drives that slope or where a swing would block the turnaround. They are more common at community entrances in the master-planned sections, where a slide gate keeps the entry lane clear. Prosper’s clay can heave a track footing, and grit and leaves collect in the track, so wheels wear and the gate drags.',
      'We clean and check the track for dents and heave, then the wheels and guide rollers, then the drive chain tension and sprockets. On a busy HOA slide we also check the loops and safety devices that hold the gate. Only when the gate rolls freely do we look at the operator, its limits and its board. Prosper sliding gate repair near Lakes of La Cima or off Preston Road is usually a hardware job. If the footing under the track has moved, we will point it out.',
    ],
    faqs: [
      { q: 'The track under our Prosper sliding gate has cracked. Can it be fixed?', a: 'Yes, but the cause matters. Clay soil swells and shrinks, and a track footing that was not built for it will crack or lift. Replacing the track alone on a moving base will not last. We assess the footing and recommend repairing or rebuilding the base where needed before fitting new track.' },
      { q: 'Why does our sliding gate jerk or bang at the end of its travel?', a: 'Usually the limits have drifted, the chain is slack, or the gate is meeting a worn stop. A slack chain can also jump the sprocket. We set the limits and chain tension and check the stops and guide rollers, which reduces the strain on the operator every time the gate closes.' },
    ],
  },
  'prosper/swing-gate-repair': {
    description: 'Swing gate repair in Prosper, TX: hinges, posts, arms, limits and operators on long estate leaves and ranch-style gates on acre lots. Call Shield.',
    intro: 'Swing gate repair in Prosper for the long single leaves, estate pairs and ranch-style gates common on the town’s acre lots. We check the hinge, post and leaf before blaming the operator.',
    local: [
      'Most automated gates on Prosper’s estate lots are swing gates, because the wide frontages and deep setbacks leave room for a leaf to open fully. Many are long single leaves or ranch-style gates, and length magnifies small problems. A hinge that wears slightly or a post that leans in the clay drops the far end of the leaf, the gate drags or binds, and the operator arm strains on every cycle. Limit drift on a long leaf shows up as a gate that stops short.',
      'We release the operator and swing the gate by hand to feel where it binds. Then we check hinges, post plumb and leaf sag, and correct what has moved. After that we reset limits and force, and on pairs the leaf delay. We test the voltage at the operator, since a long run can starve it. On estates in Gentle Creek Estates or along Frontier Parkway, swing gate repair in Prosper is often a hinge or post job rather than a new operator.',
    ],
    faqs: [
      { q: 'Our Prosper ranch-style swing gate has dropped at the end. Can it be lifted?', a: 'Usually, yes. A long leaf that has dropped is typically down to worn hinges, a post that has leaned in the clay, or a frame that has sagged. We correct the hinges or re-plumb the post and adjust the leaf so it swings level, then reset the operator limits.' },
      { q: 'How often should swing gate hinges be serviced?', a: 'Check and lubricate them at least once a year, and more often on a heavy or busy gate. Listen for squeaks or grinding and watch for the leaf dropping at the latch end. Catching hinge wear early prevents the extra load that wears out operator gearboxes.' },
    ],
  },
  'prosper/gate-opener-repair': {
    description: 'Gate opener repair in Prosper, TX: remotes, keypads, receivers, boards and limit settings on estate gates and HOA entrances in Windsong Ranch. Call Shield.',
    intro: 'Gate opener repair in Prosper for remotes, keypads, receivers, control boards and limit settings. On long drives and busy HOA entrances, we test each input separately to find which one failed.',
    local: [
      'A Prosper estate gate set far from the house often relies on a keypad at the road and remotes that have to reach a receiver some distance away. Range problems, a damaged antenna or a keypad wire cut during landscaping are common faults. At community entrances in the master-planned sections, the opener takes signals from keypads, callboxes, loops and sometimes resident apps, and one stuck input can block every other command. Limit drift on long leaves adds gates that stop short.',
      'We test each input on its own, then the receiver and antenna, then the board and limit settings. A gate that opens but will not close often has a stuck input or a safety device holding it open. Remotes and keypad codes can usually be reprogrammed on site. On entrances near Windsong Ranch or Lakes of La Cima, we work with the HOA on code lists. Board replacement comes only after the inputs are cleared.',
    ],
    faqs: [
      { q: 'Our Prosper gate remote only works close to the gate. How do we improve range?', a: 'On a long estate drive, the receiver antenna position matters. A loose, damaged or poorly placed antenna cuts range sharply. We check the antenna and its cable, move it higher or clear of metal where possible, and test the remotes. Weak remote batteries are the simplest cause, so we check those too.' },
      { q: 'Can you reset the keypad codes on our HOA entrance?', a: 'Yes. We can change, add and remove codes, set up access for services and deliveries, and clear old codes. If the keypad has failed or is too old to manage the number of codes the community needs, we will explain the replacement options, including callboxes with phone-based access.' },
    ],
  },
  'prosper/gate-motor-repair': {
    description: 'Gate motor repair in Prosper, TX: capacitors, gearboxes, thermal cutouts and low-voltage strain on long-driveway gates and HOA entrances. Call Shield.',
    intro: 'Gate motor repair in Prosper for motors that run slowly, hum, overheat or stop. We test the supply voltage first, because a motor starved by a long cable run is often misdiagnosed as worn.',
    local: [
      'A failing motor is a frequent wrong diagnosis on Prosper’s estate gates. With homes set well back on acre lots, the supply to the operator often runs a long way, and a motor that receives too little voltage runs slowly, heats up and trips its thermal cutout. On AC units the start capacitor works harder and fails sooner. At busy HOA entrances the problem is different: constant cycling wears the gearbox and heats the motor on summer afternoons.',
      'We measure voltage at the motor while it runs, then test the capacitor or battery, the thermal cutout and the gearbox. We also check the gate load, since a dragging leaf overloads any motor. A capacitor, a cable upgrade or a gearbox repair often saves the operator. On entrances off US-380 University Drive or in Star Trail, gate motor repair is about fixing what overloads the motor, not just replacing it.',
    ],
    faqs: [
      { q: 'Is my Prosper gate motor worn out or just not getting enough power?', a: 'The only way to know is to measure. We check voltage at the motor while it is running. If it drops well below what the operator needs, the cable or connections are the problem and a new motor would struggle the same way. If voltage is fine, we test the capacitor, gearbox and windings.' },
      { q: 'Can a gate gearbox be repaired or does the whole operator need replacing?', a: 'Sometimes the gearbox can be rebuilt or replaced on its own, depending on the operator and parts availability. A noisy or slipping gearbox is worth checking early, because worn gears can damage the motor and shaft. If the operator is old and parts are scarce, replacement may be the better value.' },
    ],
  },
  'prosper/emergency-gate-repair': {
    description: 'Emergency gate repair in Prosper, TX, 24/7: gates stuck open or shut, storm damage and vehicle strikes at estate drives and HOA entrances. Call Shield.',
    intro: 'Emergency gate repair in Prosper, around the clock, for gates stuck shut, stuck open, hit by a vehicle or damaged by storms. Getting people in and out safely comes first, then the repair.',
    local: [
      'On a Prosper acre lot, a driveway gate that fails shut can leave a family with no other way out, and a gate stuck open leaves a property set far back from the road exposed. At HOA entrances, a stuck gate backs up traffic onto busy roads such as Preston Road or Frontier Parkway. Spring storms bring surge damage to boards and loops, battery gates lose power after outages, and community gates get struck by vehicles.',
      'We start by making the gate safe and usable: release a trapped gate, secure a damaged leaf, or set an entrance to stay open or closed as the property needs. Then we find the fault. Storm damage often stops at a board, a receiver or a loop detector. A struck gate may need hinges, a post or a track straightened before the operator can run. If a part must be ordered, we leave the gate secure and working manually.',
    ],
    faqs: [
      { q: 'A storm knocked out our Prosper gate. What usually fails?', a: 'Lightning and surges commonly damage the control board, receivers and loop detectors, especially where long cable runs act as antennas for the surge. Battery gates can also go flat after a long power cut. We test each part separately, replace what failed, and recommend surge protection if none is fitted.' },
      { q: 'What should our HOA do if the entrance gate is stuck closed?', a: 'Put the gate into manual or open mode if the operator allows it, and post someone or a sign to manage traffic if needed. Make sure emergency services can still get in, using their override if one is fitted. Then call us with the operator model if you know it, and we will plan around the entrance.' },
    ],
  },
  'prosper/commercial-gate-repair': {
    description: 'Commercial gate repair in Prosper, TX for HOA community entrances, keypads, callboxes, loops and access control in Windsong Ranch. Call Shield.',
    intro: 'Commercial gate repair in Prosper for HOA entrances, multi-gate communities and business sites. We diagnose the operators, loops, keypads and access control as one system and report clearly to managers.',
    local: [
      'Most commercial gate work in Prosper is community entrances. The master-planned neighborhoods use gated entries where operators, loops buried in the road, keypads or callboxes and sometimes a second gate all have to work together. A fault in one part can look like a failure in another: a bad loop holds a gate open, a stuck keypad blocks remotes. Those gates cycle far more than a driveway, so wear parts also need watching. Businesses along US-380 University Drive bring their own access needs.',
      'We test the whole entrance in one visit: operator, safety devices, loops, keypads, callbox and any second gate. We read fault codes where the controller logs them and track down which input is misbehaving. Wear parts such as chains, rollers and hinges are checked and listed with their condition. For HOAs we report clearly to the board or management company, and we work around peak traffic. Planned maintenance on high-cycle entrances catches problems before residents are locked out.',
    ],
    faqs: [
      { q: 'Our Prosper HOA has two gates at one entrance that do not open together. Why?', a: 'Paired entrance gates rely on the operators being set to match and on shared inputs such as loops and keypads. If one operator has drifted, or a loop or interlock wire has failed, they fall out of step. We check both operators, the wiring between them and the shared inputs, and set them to run together.' },
      { q: 'Can you provide reports for our HOA board or property manager?', a: 'Yes. After each visit we can supply a written summary of what we found, what we repaired, which parts are wearing and what we recommend next. That helps the board plan maintenance budgets and gives the management company a clear record for residents.' },
    ],
  },
  'prosper/residential-gate-repair': {
    description: 'Residential gate repair in Prosper, TX for driveway, side and pedestrian gates on estate lots, with safety checks for children and pets. Call Shield.',
    intro: 'Residential gate repair for Prosper homeowners, covering driveway gates, side gates, pool gates and pedestrian gates. We test every safety device, because home gates operate around children, pets and visitors.',
    local: [
      'Prosper homes on acre lots often have several gates: an automated driveway gate at the road, side gates into the yard, and sometimes a pool gate or a pedestrian gate with an electric lock beside the drive. Each fails differently. Driveway gates suffer from long power runs and limit drift. Side and pool gates sag on their hinges or stop latching as posts move in the clay. Pedestrian locks fail when wiring is damaged during landscaping.',
      'We begin with safety. We test photo-eyes, edge sensors and the operator’s reversing force on any automated gate, in line with UL 325, and check self-closing hinges and latches on side and pool gates. Then we repair the actual fault, whether that is a sagging side gate, a lock that will not release or a driveway gate that stops short. On homes in Whitley Place or Star Trail, we repair rather than replace wherever it makes sense.',
    ],
    faqs: [
      { q: 'Our Prosper side gate no longer latches on its own. Is that a big repair?', a: 'Usually not. Clay soil moves posts slightly over time, so the latch no longer lines up, or the self-closing hinge has lost tension. We adjust or replace the hinge, realign the latch and check the post. If it is a pool gate, we confirm what the town and your HOA require for barriers.' },
      { q: 'Is it safe for children to play near our automatic driveway gate?', a: 'Children should be kept away from any moving gate, but the gate must still be able to sense and reverse on an obstruction. We test photo-eyes, edge sensors and reversing force, and make sure the controls are out of a child’s reach. If your gate lacks the safety devices UL 325 calls for, we can add them.' },
    ],
  },
  'prosper/automatic-gate-installation': {
    description: 'Automatic gate installation in Prosper, TX for estate lots and HOA entrances: setbacks, HOA approval, footings, power runs and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Prosper planned around the town’s large estate lots and community entrances. We handle layout, approvals, footings, power and safety devices as one plan.',
    local: [
      'Prosper’s estate district sets homes on lots of at least an acre, with wide frontages and a deep front setback, so an automatic gate here usually stands well away from the house. That decides most of the design: how far power and controls must travel, whether the gate runs from mains or battery and solar, and how visitors reach a keypad or callbox at the road. Neighborhoods such as Windsong Ranch and Lakes of La Cima add HOA design review.',
      'We start with the site: gate type, size, slope, the distance to power and where cars will stop. We confirm what the town and your HOA require, including setbacks and design approval, before ordering anything. Footings are sized for the gate and Prosper clay. Cable is sized for the run so voltage holds at the operator. We fit photo-eyes and entrapment protection to UL 325 and build gates to ASTM F2200, then train you on the manual release.',
    ],
    faqs: [
      { q: 'Do we need HOA approval to install an automatic gate in Prosper?', a: 'In most master-planned neighborhoods, yes. HOAs often have rules on gate style, height, color and placement. We help prepare drawings and specifications for the application, and we confirm what the town requires as well. Starting this early avoids delays once materials are ready.' },
      { q: 'Should our new Prosper gate run on mains power or solar?', a: 'It depends on how far the gate is from the house, how often it runs and how much sun it gets. A long run needs a heavier cable to avoid voltage drop, which adds cost. Solar avoids the trench but needs a properly sized panel and battery for winter. We measure and compare both.' },
    ],
  },
  'prosper/electric-gate-installation': {
    description: 'Electric gate installation in Prosper, TX: cable sized for long runs, transformers, surge protection and vehicle loops on estate and HOA gates. Call Shield.',
    intro: 'Electric gate installation in Prosper with the electrical design done properly for long distances. Cable size, transformers, surge protection and vehicle loops are planned before the trench is dug.',
    local: [
      'A frequent problem on Prosper electric gates starts at installation: a cable too thin for the distance between the house and the gate. On acre lots with deep setbacks, that run can be long, and an undersized cable delivers too little voltage to the operator, so the gate works in mild weather and struggles in cold. Community entrances need power for operators, keypads, callboxes and lighting, plus loops cut into the road.',
      'We measure the run and size the cable so voltage at the operator stays within its rating. Where the distance makes mains impractical, we compare battery and solar. We fit surge protection on the supply and on loop and keypad leads, cut exit and safety loops, and seal every connection. We confirm electrical and permit requirements with the town before trenching. On estates along Frontier Parkway or in Gentle Creek Estates, we provide a drawing of all buried runs.',
    ],
    faqs: [
      { q: 'How far can a Prosper gate be from the house before power is a problem?', a: 'There is no single distance; it depends on the operator’s power draw and the cable size. Longer runs need heavier cable to keep voltage up. We calculate it for your operator and run length. Past a certain point, solar or a dedicated supply closer to the gate becomes the better choice.' },
      { q: 'Why fit surge protection on a new electric gate?', a: 'North Texas storms bring lightning and power surges, and long buried cables to a gate can carry a surge straight to the control board. Surge protection on the supply and on low-voltage leads such as loops and keypads protects the board and receivers. Fitting it at installation costs much less than replacing a damaged board.' },
    ],
  },
  'prosper/sliding-gate-installation': {
    description: 'Sliding gate installation in Prosper, TX: track and cantilever slide gates for sloped estate drives and HOA entrances, with UL 325 safety. Call Shield.',
    intro: 'Sliding gate installation in Prosper for drives where a swing gate will not suit, such as sloping drives and tight turnarounds, and for community entrances. We plan footings, run-back and safety from the start.',
    local: [
      'Most Prosper estate lots have room for a swing gate, so a slide gate is usually chosen for a reason: a drive that rises toward the house, a turnaround a swing would block, or wind exposure on a wide opening. At community entrances, slide gates keep lanes clear and handle high cycle counts. Prosper clay is the main construction challenge, since a track or cantilever footing that moves will throw the gate out of line.',
      'We measure the opening, the run-back space and the grade, then choose a track or cantilever design. Footings are sized for the gate weight and the clay. The operator is matched to the gate and the cycle count, so an HOA entrance gets a duty-rated unit. We fit photo-eyes, edge sensors and roller guards to UL 325 and ASTM F2200, and confirm what the town and HOA require. For sites near Lakes of La Cima, we also plan where the keypad sits.',
    ],
    faqs: [
      { q: 'Our Prosper driveway slopes up from the street. Is a sliding gate the answer?', a: 'Often, yes. An inward swing gate can hit a drive that rises toward the house, while a slide gate travels across the opening on level footings. We check the grade and the space beside the opening, because a slide gate needs clear room to run back along the fence line.' },
      { q: 'What safety features does a new sliding gate need?', a: 'Photo-eyes across the opening, edge sensors on the leading and trailing edges, and guards on the rollers so fingers cannot be caught. UL 325 sets requirements for operators, and ASTM F2200 covers the gate construction itself. We build to both and test the reversing function before handing over.' },
    ],
  },
  'prosper/swing-gate-installation': {
    description: 'Swing gate installation in Prosper, TX: long single leaves and estate pairs on acre lots, post footings, operator sizing and HOA approval. Call Shield.',
    intro: 'Swing gate installation in Prosper for the long leaves and estate pairs that suit the town’s wide lots. We plan swing direction, post footings, operator size and approvals before work starts.',
    local: [
      'Prosper’s estate lots, at least a hundred and fifty feet wide, give room for a generous swing gate, and that is a popular choice here: a wide pair of ornamental leaves or a single long ranch-style leaf set back on the drive. A long leaf puts heavy leverage on its hinges and post, and Prosper clay moves with wet and dry seasons, so post footings have to be built for both. Operator size has to suit leaf length and wind load.',
      'We check the slope and the space behind the gate to set swing direction. Posts go into footings sized for the leaf and the soil, so they stay plumb. We match the operator to leaf length, weight and any screening, and allow for the long cable run to the gate. Every install gets photo-eyes and the entrapment protection UL 325 requires. We confirm the town’s setback rules and your HOA requirements, which matter in Windsong Ranch and Whitley Place.',
    ],
    faqs: [
      { q: 'Our Prosper gate will be a single long leaf. Is that a problem?', a: 'Not if it is built and powered for its length. A long leaf needs strong hinges, a deep post footing and an operator rated for the length and weight. Limits need careful setting, since small drift shows up at the far end. A pair of shorter leaves is an alternative where space or wind is an issue.' },
      { q: 'How long does it take to install a swing gate?', a: 'It depends on the gate being fabricated or ordered, footings curing, and any HOA approval. Once the gate and approvals are ready, the installation itself is usually a short job. We give you a realistic timeline on the site visit and explain each step, so you know what to expect before we start.' },
    ],
  },
  'prosper/gate-opener-installation': {
    description: 'Gate opener installation in Prosper, TX: operators, keypads, callboxes and remotes added to estate swing gates and HOA entrances. Call Shield.',
    intro: 'Gate opener installation in Prosper for existing estate gates and community entrances that need automating or upgrading. We match the opener to the gate, the power supply and the way people need to get in.',
    local: [
      'Many Prosper estate gates were hung manually, and owners later want them automated. On acre lots, the opener has to suit a long or heavy leaf, run on power that may travel a long way from the house or come from a panel and battery, and accept signals from a keypad at the road and remotes from the drive. At HOA entrances, openers often need upgrading to handle more traffic and newer access systems.',
      'We check the gate first and correct sag, binding or weak hinges, because an opener fitted to a poor gate fails early. Then we pick the operator by leaf length, weight and expected cycles, size the power for the distance, and add the controls: remotes, keypad or callbox, and an exit loop. Photo-eyes and reversing force are set to UL 325. On drives in Gentle Creek Estates or Star Trail, we place the keypad where a driver can reach it easily.',
    ],
    faqs: [
      { q: 'Can a gate opener run on solar on a Prosper estate lot?', a: 'Yes, if the gate gets good sun and does not cycle heavily. Solar avoids a long trench to the house. The panel and battery must be sized for winter, when days are short and cold cuts battery capacity. We check sun exposure and expected use before recommending solar over mains.' },
      { q: 'Which access controls are worth adding with a new opener?', a: 'Most homeowners want remotes for family cars, a keypad for visitors and services, and an exit loop so the gate opens automatically when leaving. A callbox that rings your phone is useful when the house is far from the gate. We help you choose based on how the gate will be used.' },
    ],
  },
  'fort-worth/viking': {
    description: 'Viking gate repair in Fort Worth, TX: DC batteries, solar charging, limits and gearboxes on acreage gates past Loop 820 and commercial slides. Call Shield.',
    intro: 'Viking gate repair in Fort Worth for the DC operators on acreage entrances beyond Loop 820 and heavy commercial gates on the north side. We test battery and charging before anything mechanical.',
    local: [
      'Viking builds for heavy gates and high cycle counts, and Fort Worth gives them both. Out past Loop 820 in the 76126 and 76179 zip codes, a Viking on an acreage entrance usually runs from batteries kept topped up by a solar panel, so a slowing gate is a charging question first. On the north side, commercial and apartment slide gates cycle all day, and a Viking there wears its drive chain and gearbox. Hail adds a third problem: cracked panels and damaged photo-eyes.',
      'We load test the batteries and measure panel output, then check the gate itself, since clay soil moves posts and a heavy leaf out of line makes the operator struggle. On T-21 and R-6 swing units we reset the mechanical limit switches. On an older K-2 slide that lost its limits in a power failure, a relearn fixes it. Viking gate opener repair on west-side homes near Ridglea Hills is usually a board or limit job. Heavy gearbox wear on a busy north-side gate is when replacement comes up.',
    ],
    faqs: [
      { q: 'Hail hit our Fort Worth acreage gate and now the Viking barely moves. What broke?', a: 'Most often the solar panel. Hail can crack the glass or cells, and the panel then delivers too little charge, so the batteries run down over a few days. Photo-eyes and the antenna are also exposed. We test the panel output, the batteries and each sensor, and replace only the damaged parts.' },
      { q: 'Can a Viking operator be moved to a new gate after the old one is replaced?', a: 'Often, if the operator is in good condition and suits the new gate’s weight, length and type. We check the gearbox, board and limits, and confirm the operator is rated for the new gate. Reusing a sound operator can save a good deal, but not if it would be undersized for the job.' },
    ],
  },
  'fort-worth/faac': {
    description: 'FAAC gate repair in Fort Worth, TX: hydraulic seals, fluid, pump pressure and 455 D boards on iron swing gates in Westcliff and Ridglea Hills. Call us.',
    intro: 'FAAC gate repair in Fort Worth for hydraulic swing arms, in-ground 770 units and 844 slide operators. We repair the hydraulics on site, from seals to pump pressure, instead of replacing an operator that can be saved.',
    local: [
      'Fort Worth’s west side has a strong stock of wrought iron swing gates on older homes, and some of those gates run on FAAC hydraulic operators. Hydraulic arms handle heavy iron well, but age shows. Seals harden after many Texas summers, fluid weeps out, and the pump loses pressure until the gate travels slowly or stops short. Clay soil adds strain, because a post that has moved puts the leaf out of line and the arm has to force it.',
      'We check the leaf and post by hand, then fluid level and pump pressure, then the encoder, limits and the 455 D board on hydraulic swing units. A 400 or 402 with a leak usually needs a seal kit, refill and bleed. In-ground 770 units sit in a foundation box that can hold water on clay, so we clear the drain. Hail can damage photo-eyes but rarely the sealed hydraulics. On homes in Westcliff or Mistletoe Heights, replacement comes up only when the ram or housing is damaged.',
    ],
    faqs: [
      { q: 'Our west Fort Worth FAAC gate leaks oil and moves slowly. Is it finished?', a: 'Probably not. Oil on a FAAC arm almost always means worn seals, and the slow travel follows from the fluid loss. We replace the seals, refill and bleed the system and set the pressure. On older operators we also check the board and limits, since those age alongside the hydraulics.' },
      { q: 'Do FAAC hydraulic operators need regular servicing?', a: 'Yes, and it pays. A check of fluid level, seals, pressure and the release valve every year or two catches leaks before the gate starts to fail. On an in-ground unit we also clear the foundation box drain. Servicing a hydraulic operator this way costs much less than replacing it.' },
    ],
  },
  'fort-worth/apollo': {
    description: 'Apollo gate repair in Fort Worth, TX: batteries, solar panels, boards and actuator arms on Nice Apollo acreage gates in 76126 and 76179. Call Shield.',
    intro: 'Apollo gate repair in Fort Worth for solar-charged swing and slide operators on acreage properties beyond Loop 820. These are battery systems, so we test charging and battery before the board or actuator.',
    local: [
      'Past Loop 820, in the 76126 and 76179 zip codes, Fort Worth lots open up into acreage, and the gate at the end of a long drive often runs from a battery and small solar panel. Apollo, now sold under Nice, builds operators for exactly that, including the 1550 single and 1650 dual swing openers. Off-grid means the charging system carries the gate. Hail can crack a panel, trees and dust cut output, and corroded low-voltage connections in the enclosure starve the board.',
      'We test the battery under load and measure panel output, then look at the connections, the actuator arms and their mounting brackets, which fatigue on long, heavy leaves. Limit drift on the swing arms comes next, and the board last. Where an older actuator is worn, distributors describe the TITAN 12L as a bolt-in replacement on 1550 and 1650 mounting geometry. On acreage drives off Chisholm Trail Parkway or Loop 820, a fresh battery and a clean, unshaded panel are often the whole repair.',
    ],
    faqs: [
      { q: 'Our Fort Worth Apollo gate moves a few feet and stops. What is the usual cause?', a: 'On a 12-volt Apollo system, the battery is the first suspect. A weak battery can start the motor but sag under load, so the gate stops or reverses. Corroded connections give the same symptom. We load test the battery, check the panel and clean or replace connections before looking at the board.' },
      { q: 'Does hail damage solar gate panels in Fort Worth?', a: 'It can. Fort Worth gets severe hail, and a cracked panel may still look fine from a distance while producing far less charge. If your gate began slowing down after a hailstorm, we test the panel output first. A replacement panel sized for the gate is usually a simple fix.' },
    ],
  },
  'fort-worth/ramset': {
    description: 'Ramset gate repair in Fort Worth, TX: RAM 1000 chains, sprockets, relays, limit switches and thermal cutouts on busy north-side commercial gates. Call Shield.',
    intro: 'Ramset gate repair in Fort Worth for RAM series operators on commercial yards, apartment entrances and homes. We match the repair to the duty cycle, since a north-side gate wears far faster than a driveway.',
    local: [
      'North Fort Worth toward Alliance is full of yard entrances, distribution gates and apartment gates that cycle hundreds of times a day, and that is where a Ramset meets its hardest work. A RAM 1000 commercial slide on a gate like that wears chain and sprockets in a season, cooks control board relays, and trips its thermal cutout on hot afternoons. Limit switches fail sooner under heavy duty. On a west-side driveway, a RAM 100 lives a much quieter life.',
      'We check the load first: rollers, track and any added weight on the gate. Then chain tension, sprockets, limit switches, relays and the loop detectors that feed the entrance. Hail and storms can take out loops and photo-eyes, so we test them separately. For high-cycle gates near I-35W we recommend a parts schedule that replaces chains and sprockets before they fail. On a quiet RAM 100 in Arlington Heights, a board or limit repair is usually enough.',
    ],
    faqs: [
      { q: 'How often should a busy Fort Worth Ramset gate have its chain replaced?', a: 'It depends on cycles, gate weight and alignment. On a high-traffic commercial entrance, a chain can wear out in a season, while a driveway chain may last many years. We measure stretch and sprocket wear on each visit and set a replacement interval for your gate, so it is done before the gate stops.' },
      { q: 'Our apartment gate Ramset trips off in summer. Is it overheating?', a: 'Probably. The thermal cutout shuts the motor down when it gets too hot, which happens with heavy cycling in high heat, especially if the gate drags or the chain is tight. We find what is adding load, fix it, and check that the operator is rated for the entrance’s duty.' },
    ],
  },
  'fort-worth/automatic-gate-repair': {
    description: 'Automatic gate repair in Fort Worth, TX for west-side driveways, acreage gates past Loop 820 and high-cycle commercial gates near Alliance. Call Shield.',
    intro: 'Automatic gate repair across Fort Worth, from post-war west-side driveways to acreage entrances and north-side commercial gates. Each zone fails differently, so we diagnose each one on its own terms.',
    local: [
      'Fort Worth is really three kinds of gate work. West of downtown, in Arlington Heights, Ridglea Hills and Wedgwood, many automatic gates guard driveways at older homes, and their operators are often old enough that a board or limit adjustment is the likely fix. Beyond Loop 820, acreage gates run on battery and solar. North toward Alliance, commercial and apartment gates cycle constantly. Across all three, clay soil moves posts and hail damages exposed sensors.',
      'We start with the gate moving by hand, because a post shifted in the clay causes many apparent operator faults. Then we test photo-eyes and loops, then power: battery and panel on acreage gates, supply and board on mains units. On the west side we check board age and parts availability before recommending anything. On commercial gates we look at wear parts. Automatic gate repair in Fort Worth is about knowing which of the three you are dealing with.',
    ],
    faqs: [
      { q: 'Our west Fort Worth gate operator is over twenty years old. Is it worth repairing?', a: 'Often, yes. On older west-side operators the failure is usually the control board or a limit setting, and many boards are still available or have direct replacements. If parts have become scarce or the gearbox is worn too, we will tell you honestly and set out the replacement option alongside the repair.' },
      { q: 'What information helps when calling about a broken automatic gate?', a: 'The operator make and model if you can see a label, whether it is a swing or slide gate, what it does or does not do, and anything that happened recently, such as a storm, a power cut or a vehicle bump. Photos of the operator and any lights on the board are very helpful.' },
    ],
  },
  'fort-worth/electric-gate-repair': {
    description: 'Electric gate repair in Fort Worth, TX: hail and surge damage, control boards, transformers, wiring and loop detectors on home and business gates. Call us.',
    intro: 'Electric gate repair in Fort Worth for the boards, wiring, transformers and loops that run a gate. Storms, hail and age are the usual causes here, and we test each part to find the actual failure.',
    local: [
      'Fort Worth gets severe storms, and the electrical side of a gate takes the hit: surges through supply and loop wiring burn out control boards and detectors, and hail cracks photo-eyes and enclosures, letting water reach the board. On west-side homes in Westcliff and Overton Park, ageing wiring and unsealed splices along the drive add intermittent faults. North-side commercial gates share power with access control, so one failed transformer can stop an entire entrance.',
      'We trace the power path in order: breaker, transformer output, wiring continuity and splices, then the board, receiver and loop detectors. Each part is tested separately, so a surge that took out a board but not the receiver gets a board, not a full set. Where enclosures are cracked, we seal or replace them to keep water out. Surge protection on the supply and loop leads is worth adding on gates near I-35W and Loop 820 that never had it.',
    ],
    faqs: [
      { q: 'After a Fort Worth storm our gate is dead but the power is on. What failed?', a: 'Usually the control board, from a surge through the supply or a loop lead, or a blown fuse protecting it. Water through a hail-cracked enclosure is another common cause. We check fuses, the transformer output and the board, then the receiver and loops, and replace only what the storm damaged.' },
      { q: 'Can electric gate wiring be upgraded without replacing the operator?', a: 'Yes. Old wiring, unsealed splices and missing surge protection can all be corrected while keeping a sound operator. We test the existing runs, replace damaged sections or pull new cable through conduit, and add surge protection and sealed connections. That often ends the intermittent faults on older gates.' },
    ],
  },
  'fort-worth/driveway-gate-repair': {
    description: 'Driveway gate repair in Fort Worth, TX for wrought iron swing gates at older homes in Arlington Heights, Ridglea Hills and Mistletoe Heights. Call Shield.',
    intro: 'Driveway gate repair for Fort Worth homes, from wrought iron swing gates on the west side to long acreage drives beyond Loop 820. We make the gate usable, then fix the real cause.',
    local: [
      'Private driveway gates in Fort Worth are often wrought iron swing gates at older homes in Arlington Heights, Ridglea Hills and Mistletoe Heights, where the driveway may be narrow and the operator old. Clay soil is the steady problem: posts move as the ground wets and dries, a gate that lined up last year starts catching, and the operator strains. On acreage drives past Loop 820, the driveway gate is often a long single leaf on battery and solar.',
      'We swing the gate by hand to check hinges, posts and sag, and correct the post or re-hang the leaf if it has moved. Then we test the operator, its board and limits, and on paired gates the leaf delay. On older west-side operators we check whether the board is still available before quoting. On acreage gates we test the battery and panel. Fort Worth driveway gate repair is very often a mechanical fix that saves the operator.',
    ],
    faqs: [
      { q: 'Our Fort Worth driveway gate now catches on the latch. Nothing hit it. Why?', a: 'Ground movement. Fort Worth clay swells and shrinks with moisture, and a gate post set in it moves gradually. The leaf then meets the latch or the other leaf at the wrong point. Correcting the post or re-hanging the gate fixes it and takes the strain off the operator.' },
      { q: 'Can an old wrought iron driveway gate be automated or repaired?', a: 'Usually, as long as the frame and hinges are sound. We check for rust at joints and hinge points, repair or replace worn hinges, and make sure the gate swings freely before fitting or repairing an operator. Heavy iron needs an operator rated for its weight, so we check that too.' },
    ],
  },
  'fort-worth/sliding-gate-repair': {
    description: 'Sliding gate repair in Fort Worth, TX: tracks, rollers, chains and operators on commercial yard, apartment and home slide gates near I-35W. Call Shield.',
    intro: 'Sliding gate repair in Fort Worth for commercial yards, apartment entrances and homes. Most slide gate faults start with rollers, track or chain, so we fix the hardware before judging the operator.',
    local: [
      'Slide gates in Fort Worth work hardest on the north side, where commercial yards, distribution sites and apartment entrances near I-35W cycle hundreds of times a day. At that duty, a drive chain wears out in a season, rollers flatten and guide wheels seize. Clay soil heaves track footings, so a gate that ran straight starts to bind. On residential slides, grit and leaves in the track and a dented section from a car are the usual faults.',
      'We start with the track: clean it, check for dents and heave, and straighten or replace damaged sections. Then the wheels, guide rollers and the chain tension and sprockets. On commercial gates we also check loops and safety devices. Only then do we look at the operator, its limits and board. For north-side gates we can plan chain and roller replacement on a schedule. Sliding gate repair in Fort Worth is rarely a new operator.',
    ],
    faqs: [
      { q: 'Our commercial slide gate in north Fort Worth chews through chains. Is that normal?', a: 'At hundreds of cycles a day, chains do wear quickly, but excess wear usually means something else is wrong: a misaligned sprocket, worn rollers making the gate drag, or a chain set too tight. We check alignment and load as well as replacing the chain, so the next one lasts longer.' },
      { q: 'Can you repair a slide gate track that has lifted?', a: 'Yes. A lifted or cracked track usually means the footing under it has moved in the clay. We repair or rebuild that section of the base, then fit new track. Simply replacing the track on a moving base leads to the same problem again within a season or two.' },
    ],
  },
  'fort-worth/swing-gate-repair': {
    description: 'Swing gate repair in Fort Worth, TX: hinges, posts, arms and operators on wrought iron and ranch swing gates from Westcliff to past Loop 820. Call Shield.',
    intro: 'Swing gate repair in Fort Worth for wrought iron swing gates on the west side and ranch and acreage swing gates beyond Loop 820. We fix hinges and posts first, then the operator.',
    local: [
      'Fort Worth swing gates come in two main kinds. In Westcliff, Wedgwood and Arlington Heights, they are often wrought iron leaves on older homes, with operators that have been running for many years. Past Loop 820, ranch and acreage swing gates are long and heavy, usually on battery and solar. Both suffer from Fort Worth clay, which moves posts and drops a leaf out of line, and both take hail damage to photo-eyes and enclosures.',
      'We release the operator and move the leaf by hand to find binding, then check hinges, post plumb and sag. Correcting a moved post or worn hinge is often the whole repair. Next come the limits, force and leaf delay, then the operator: board, arm and gearbox on mains units, battery and panel on solar gates. Swing gate repair in Fort Worth usually saves the operator once the gate itself is right.',
    ],
    faqs: [
      { q: 'Our ranch swing gate past Loop 820 opens slowly by the evening. Why?', a: 'That is a charging pattern. Every cycle through the day takes a little more from the battery than the panel manages to return. A worn battery, a dirty or hail-damaged panel, or a long leaf that has started to drag can all cause it. We test the battery and panel and check the gate by hand.' },
      { q: 'Do swing gate operator arms wear out?', a: 'Yes. The arm, its brackets and pivot points wear with use, especially on long or heavy leaves and in wind. Loose brackets also let the arm flex, which changes the limits. We check and tighten mounting, replace worn pivots and arms, and reset limits so the gate stops where it should.' },
    ],
  },
  'fort-worth/gate-opener-repair': {
    description: 'Gate opener repair in Fort Worth, TX: remotes, keypads, receivers, boards and limits on ageing west-side openers and north-side apartment gates. Call Shield.',
    intro: 'Gate opener repair in Fort Worth for remotes, keypads, receivers, control boards and limit settings. On older west-side openers and busy apartment gates, we find which input or setting has failed.',
    local: [
      'Gate openers on Fort Worth’s west side are often twenty years old or more, and age shows up in the control board and limit settings first: a gate that stops short, a receiver that no longer learns remotes, a keypad that has lost its codes. On north-side apartment entrances, keypads, callboxes and loops wear quickly and get abused. Hail can crack a keypad face or break an antenna, and lightning can damage a receiver.',
      'We test each input separately: remotes, keypad, callbox, loops and push buttons. Then the receiver and antenna, then the board and limits. A stuck input can block all other commands, so we clear those first. Remotes and codes are reprogrammed on site. On older openers in Ridglea Hills or Overton Park, we check whether a replacement board or a compatible receiver is available before suggesting a new opener.',
    ],
    faqs: [
      { q: 'Our old Fort Worth gate opener will not accept new remotes. Do we need a new opener?', a: 'Not necessarily. Older receivers often use a code format current remotes do not support. Fitting a compatible external receiver lets new remotes work with the existing opener. We check the board and receiver and explain whether a receiver upgrade or a replacement makes sense.' },
      { q: 'Our apartment entrance keypad is unreliable. Can it be repaired?', a: 'Often. Keypads at busy entrances suffer from worn buttons, water ingress and damaged wiring. We test the keypad, its wiring and the board input. If the unit is worn out, we can replace it with one that manages codes for many residents and suits a high-use entrance.' },
    ],
  },
  'fort-worth/gate-motor-repair': {
    description: 'Gate motor repair in Fort Worth, TX: capacitors, gearboxes, thermal cutouts and worn motors on west-side swing gates and north-side slides. Call Shield.',
    intro: 'Gate motor repair in Fort Worth for motors that hum, overheat, run slow or stop. We test the capacitor, thermal cutout and gearbox, and check the gate load, before deciding the motor is finished.',
    local: [
      'Motor problems in Fort Worth follow the city’s three kinds of gate. On the west side, ageing AC motors on swing gates lose start capacitors and wear gearboxes after many years. On north-side commercial and apartment slides, motors run hot all day and trip their thermal cutouts on summer afternoons. On acreage gates past Loop 820, DC motors depend on the battery, and a weak battery looks like a weak motor. Clay-shifted posts add load to all three.',
      'We check the gate moves freely first, since a dragging leaf overheats any motor. Then the capacitor or battery, the thermal cutout, and the gearbox for wear and noise. A failed capacitor or a reset cutout with the load fixed is a small repair. A worn gearbox can sometimes be rebuilt. On busy gates near Chisholm Trail Parkway or I-35W, a motor and gearbox both worn out is when operator replacement makes sense.',
    ],
    faqs: [
      { q: 'Our Fort Worth gate motor hums and the gate does not move. What is wrong?', a: 'On an AC operator, a humming motor that will not turn usually means a failed start capacitor, a common part on older west-side units. It can also be a seized gearbox or a gate jammed by a moved post. We test the capacitor and check the gate by hand before judging the motor.' },
      { q: 'How do I know if a gate gearbox is worn?', a: 'Grinding or clunking noises, a gate that jerks when starting, or play in the output shaft are the usual signs. A slipping gearbox may also let the gate drift. We check backlash and listen to it under load. Catching gearbox wear early can prevent damage to the motor.' },
    ],
  },
  'fort-worth/emergency-gate-repair': {
    description: 'Emergency gate repair in Fort Worth, TX, 24/7: gates stuck open or shut, hail and storm damage, and vehicle strikes on homes and yards. Call Shield.',
    intro: 'Emergency gate repair in Fort Worth, day or night, for gates stuck open or shut, hit by vehicles or damaged by hail and storms. We make the gate safe and secure first.',
    local: [
      'Emergencies in Fort Worth come from storms and traffic. Severe hail and lightning can disable a gate in one evening, through cracked photo-eyes, burned boards and damaged loops. On north-side commercial yards and apartment entrances, vehicles strike gates and bend tracks or leaves. On acreage past Loop 820, a battery gate that fails may lock in a whole property. A west-side driveway gate stuck shut can trap a car in the drive.',
      'We start by making the gate safe: release a trapped gate, secure a struck leaf, or set a commercial entrance to the state the site needs. Then we find the fault. Storm damage usually stops at specific parts, which we test and replace separately. Vehicle damage may need a leaf, post or track straightened before the operator can run. If a part must be ordered, we leave the gate secure and operable by hand.',
    ],
    faqs: [
      { q: 'Hail broke our Fort Worth gate sensors. Will the gate still work?', a: 'Usually not automatically. With damaged photo-eyes, most operators refuse to close for safety. The gate can be opened with the manual release in the meantime. We replace the damaged sensors, check the board and enclosure for water, and test the reversing function before putting it back into service.' },
      { q: 'A truck hit our commercial slide gate. What should we do?', a: 'Switch off power to the operator, keep people away from the damaged gate, and photograph it for insurance. Do not try to force a bent leaf or track. Call us with the operator details if you have them, and we will secure the entrance first, then assess the gate, track and operator.' },
    ],
  },
  'fort-worth/commercial-gate-repair': {
    description: 'Commercial gate repair in Fort Worth, TX for yard entrances, distribution gates and apartment slides near Alliance and I-35W. Call Shield.',
    intro: 'Commercial gate repair in Fort Worth for yards, distribution sites, apartment communities and businesses. High-cycle wear and access control faults are the usual calls, and we handle both.',
    local: [
      'North Fort Worth toward Alliance is industrial and commercial: yard entrances, distribution gates and apartment entrances that cycle hundreds of times a day. At that rate, chains and sprockets wear out in a season rather than a decade, rollers flatten, and limit switches drift. Those gates also sit inside access systems, with card readers, keypads, callboxes and loops, so a fault may be in the access control rather than the gate. Hail and storms add damage to exposed sensors.',
      'We read the operator’s fault history where available, test drive parts and safety devices, and check each access input so we know which side failed. Wear parts are inspected and listed by condition. For high-cycle entrances we recommend a maintenance schedule based on cycles, replacing chains and rollers before they fail. We schedule work around shift changes and deliveries. For sites near I-35W and Loop 820, we keep the entrance secure during repairs.',
    ],
    faqs: [
      { q: 'Why does our north Fort Worth distribution gate need so much maintenance?', a: 'Because it runs at industrial cycle counts. A gate opening for trucks all day wears chains, sprockets, rollers and limit switches far faster than a business gate opening a few times. Regular inspection and planned parts replacement costs less than an entrance failing during a busy shift.' },
      { q: 'Can you work on the access control as well as the gate?', a: 'Yes. We test card readers, keypads, callboxes and loops alongside the operator, because a fault in any of them can stop the gate. Where your access system is managed by another provider, we coordinate with them so the fault is resolved on whichever side it lies.' },
    ],
  },
  'fort-worth/residential-gate-repair': {
    description: 'Residential gate repair in Fort Worth, TX for driveway, side and pedestrian gates in Fairmount, Wedgwood and Arlington Heights. Call Shield.',
    intro: 'Residential gate repair for Fort Worth homeowners, covering driveway gates, side gates, pedestrian gates and pool gates. We test the safety devices on every visit, because home gates run near children and pets.',
    local: [
      'Fort Worth homes have a wide range of gates. In Fairmount and Near Southside, older homes may have a pedestrian gate onto the street and side gates into narrow yards. In Wedgwood and Arlington Heights, automated driveway gates are common, often with older operators. Acreage homes past Loop 820 have long battery gates. Across all of them, clay soil moves posts so side gates stop latching, and hail damages sensors on automated gates.',
      'Safety comes first. We test photo-eyes, edge sensors and reversing force on automated gates, as UL 325 expects, and check that self-closing side and pool gates latch every time. Then we fix the fault: a side gate that drags, a pedestrian lock that will not release, or a driveway operator that stops short. We repair rather than replace when parts allow, and explain the choice when they do not.',
    ],
    faqs: [
      { q: 'Our Fort Worth side gate has started dragging on the ground. Can it be fixed?', a: 'Yes. Usually the post has leaned in the clay or the hinges have worn, so the gate drops at the latch end. We re-plumb the post or adjust and replace the hinges, then realign the latch. For a pool gate we also make sure it self-closes and latches reliably.' },
      { q: 'Does our older automatic gate have the safety features it should?', a: 'Older gates often have fewer safety devices than current standards expect. We check for photo-eyes, edge sensors and correct reversing force, and recommend additions where they are missing. Children and pets are most at risk around a gate that does not reverse, so this is worth checking.' },
    ],
  },
  'fort-worth/automatic-gate-installation': {
    description: 'Automatic gate installation in Fort Worth, TX for west-side homes, acreage past Loop 820 and commercial yards, with UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Fort Worth for homes, acreage properties and commercial sites. We plan the gate, operator, power, footings and safety devices around the property and how the gate will be used.',
    local: [
      'An automatic gate in Fort Worth has to suit one of three settings. On the west side, near Ridglea Hills and Westcliff, driveways at older homes can be narrow, with limited space for swing or run-back. Past Loop 820, acreage entrances are long and often far from power, so battery and solar is common. On the north side, commercial gates need operators rated for heavy, constant use and integration with access control. Clay soil and hail apply to all three.',
      'We start with a site visit to measure the opening, slope and space, and to check power and how the gate will be used. We confirm what the city and any HOA require before work begins. Footings are built for the clay, deep enough to keep posts and tracks stable. We plan power runs or a solar system sized for winter. Every install includes photo-eyes and entrapment protection to UL 325, with gates built to ASTM F2200.',
    ],
    faqs: [
      { q: 'How do you stop clay soil moving a new Fort Worth gate out of line?', a: 'By building footings for it. Posts and track footings are set deeper and wider than in stable ground, so seasonal swelling and shrinking does not tilt them. We also keep drainage away from footings where possible. Getting this right at installation prevents most of the alignment problems older gates in the city have.' },
      { q: 'Can an automatic gate be installed where there is no power?', a: 'Yes. A battery operator charged by a solar panel suits many acreage entrances past Loop 820. The panel and battery must be sized for winter sun and the number of daily cycles. Where the gate will run heavily, a mains supply may still be the better choice, and we compare both.' },
    ],
  },
  'fort-worth/electric-gate-installation': {
    description: 'Electric gate installation in Fort Worth, TX: supply, cable sizing, surge protection, sealed enclosures and loops built for storms and hail. Call Shield.',
    intro: 'Electric gate installation in Fort Worth with the electrical side built for the city’s storms: sized cable, surge protection, sealed enclosures and properly cut vehicle loops.',
    local: [
      'Fort Worth storms are hard on gate electrics. Lightning sends surges along supply, loop and keypad wiring, and hail cracks enclosures and sensors, letting water reach boards. An electric gate installed without allowing for that will see repeated failures. Distance matters too: acreage gates past Loop 820 can be a long way from power, and commercial entrances on the north side need power for operators, access control and lighting.',
      'We size cable for the actual run, so voltage holds at the operator. We fit surge protection on the supply and on loop and keypad leads, use sealed, impact-resistant enclosures, and position sensors where they are less exposed. Loops are cut for exit and safety detection. We confirm electrical and permit requirements with the city before trenching. On sites near Loop 820 or Chisholm Trail Parkway, we provide a drawing of all buried runs.',
    ],
    faqs: [
      { q: 'What can be done at installation to protect a Fort Worth gate from hail?', a: 'Use sturdy, sealed enclosures for the operator and board, place photo-eyes and keypads where they are sheltered or protected by guards, and choose a panel mount that can be inspected easily on solar gates. Hail can still damage exposed parts, but these steps limit how much a single storm takes out.' },
      { q: 'Does a new electric gate need its own circuit?', a: 'Often it is best on a dedicated circuit, especially on commercial gates or where the operator has a heavy motor. That avoids sharing with other loads and makes faults easier to trace. We assess the supply on the site visit and confirm what the city requires for the electrical work.' },
    ],
  },
  'fort-worth/sliding-gate-installation': {
    description: 'Sliding gate installation in Fort Worth, TX: cantilever and track slide gates for commercial yards, apartments and homes, with footings for clay. Call Shield.',
    intro: 'Sliding gate installation in Fort Worth for commercial yards, apartment entrances and homes. We choose track or cantilever, size footings for the clay and rate the operator for the gate’s real duty.',
    local: [
      'Slide gates suit much of Fort Worth’s commercial work. North-side yards and distribution sites near I-35W need wide openings and operators that cycle all day, and apartment entrances need gates that keep lanes clear. Cantilever slides avoid a ground track that trucks can damage. On the west side, a slide gate can suit a narrow driveway where there is no room to swing. In every case, the clay soil has to be allowed for in the footings.',
      'We measure the opening, run-back space and grade, then choose cantilever or track. Footings for posts, roller trucks or track are sized for the gate weight and the soil movement. The operator is matched to the cycle count, so a commercial gate gets an industrial-duty unit. We fit photo-eyes, edge sensors and roller guards to UL 325 and ASTM F2200, add loops and access control, and confirm what the city requires.',
    ],
    faqs: [
      { q: 'Which slide gate type suits a north Fort Worth commercial yard?', a: 'Usually a cantilever gate. With no ground track across the opening, trucks cannot damage the track and debris cannot jam it. It needs extra run-back space, but it stands up better to heavy use. We size the gate, rollers and operator for the yard’s traffic.' },
      { q: 'Can a sliding gate fit a narrow west-side Fort Worth driveway?', a: 'Often, if there is enough space beside the opening for the gate to run back. A slide gate avoids the swing space a narrow drive may not have. We measure along the fence line, checking for trees, walls and slopes, and confirm whether a track or cantilever design fits.' },
    ],
  },
  'fort-worth/swing-gate-installation': {
    description: 'Swing gate installation in Fort Worth, TX: wrought iron pairs and ranch swing gates, deep post footings for clay and operator sizing. Call Shield.',
    intro: 'Swing gate installation in Fort Worth for wrought iron driveway gates on the west side and ranch and acreage swing gates beyond Loop 820. Post footings and operator size get careful planning.',
    local: [
      'Swing gates are a natural fit for much of Fort Worth: wrought iron pairs on west-side homes in Arlington Heights and Westcliff, and long ranch swing gates on acreage past Loop 820. Their weakness here is the ground. Fort Worth clay rises and falls with moisture, and a post that is not set deep enough will lean and pull the gate out of line within a few seasons. Long ranch leaves add leverage and wind load to the hinges and operator.',
      'We check the slope and space to set the swing direction, then set posts in footings sized for the leaf and the clay. The operator is matched to leaf length, weight and wind load, with battery and solar sized for winter on acreage gates. Every install gets photo-eyes and entrapment protection under UL 325, with the gate built to ASTM F2200. We confirm what the city and any HOA require before work starts.',
    ],
    faqs: [
      { q: 'How deep should gate posts be set in Fort Worth clay?', a: 'Deeper and wider than in stable soil, and sized for the leaf weight and length. The exact footing depends on the gate, but the aim is to reach ground that moves less and to give the post enough mass to resist tilting. We specify the footing for each gate rather than using one standard size.' },
      { q: 'Can a swing gate be fitted with a solar operator on our acreage?', a: 'Yes. Many acreage swing gates past Loop 820 run on battery and solar. We size the panel and battery for the gate weight, the number of cycles and winter sun, and place the panel clear of shade. A sturdy panel mount also makes hail damage easier to check and repair.' },
    ],
  },
  'fort-worth/gate-opener-installation': {
    description: 'Gate opener installation in Fort Worth, TX: swing and slide operators, keypads, callboxes and remotes for west-side homes, acreage and apartments. Call us.',
    intro: 'Gate opener installation in Fort Worth for gates that need automating or a worn-out opener replaced. We match the opener to the gate and add the access controls the property needs.',
    local: [
      'Many Fort Worth gates already exist and need an opener: wrought iron gates on older west-side homes, ranch gates on acreage past Loop 820, and apartment or commercial gates on the north side that need a stronger operator. On the west side, a replacement opener often follows years of service from an old unit. On acreage, the opener usually runs on battery and solar. On commercial gates, it has to accept card readers, keypads and loops.',
      'We inspect the gate first and correct sag, binding or posts moved by the clay, since an opener on a bad gate fails early. Then we choose the operator by gate type, weight and cycle count, plan the power, and add controls: remotes, keypad or callbox, and loops. Photo-eyes and reversing force are set to UL 325. On homes near Wedgwood or Overton Park, we place keypads where drivers can reach them easily.',
    ],
    faqs: [
      { q: 'Our west Fort Worth gate opener is very old. Should we replace it or repair it?', a: 'If the board, motor and gearbox are still serviceable, a repair may give years more. If parts are scarce, the gearbox is worn and repairs keep recurring, a new opener is usually better value. We assess the existing unit honestly and set out both options, so you can choose.' },
      { q: 'Can a new gate opener work with our existing keypad or callbox?', a: 'Often, yes. Most keypads and callboxes connect to an opener through standard inputs, so they can be wired to a new operator. We test the existing devices first. If they are worn or incompatible, we recommend replacements that suit the gate and how often it is used.' },
    ],
  },
}
export default copy
