const copy: Record<string, { description: string; intro: string; local: string[]; faqs: { q: string; a: string }[] }> = {
  'university-park/viking': {
    description: 'Viking gate repair in University Park, TX: DC batteries, T-21 and R-6 limits and K-2 resets on heavy iron gates in Volk Estates. Call Shield.',
    intro: 'Viking gate repair in University Park for the DC swing and slide operators carrying heavy iron on rebuilt lots and older estates. We check the battery, the gate and the limits before judging the operator.',
    local: [
      'University Park keeps putting new houses on old lots, and a Viking often arrives with the rebuild because it was specified for a tall, heavy iron leaf. That suits the operator, but a new gate settles on its hinges through its first year in this clay, and the mechanical limit switches on a T-21 or R-6 were set for where the leaf hung on commissioning day. The result is a gate that stops short, overruns, or reverses for no visible reason. Battery fatigue is the other pattern, since these units run on DC and a few hot summers take capacity out of the pack.',
      'Most Viking faults here are repairable. We load test the batteries and charger, move the gate by hand to find a dropped hinge or a shifted post, and only then reset limits and force. An older K-2 slide that forgot its positions after a total power loss needs a relearn, not a replacement. Gearbox or chain wear on a very heavy, busy gate is where a new operator enters the conversation. We work on Viking gates along Preston Road, Hillcrest Avenue and the larger lots in Volk Estates.',
    ],
    faqs: [
      { q: 'Our new house came with a Viking gate that now stops halfway. Is the operator defective?', a: 'Rarely. On a rebuilt University Park lot the gate and posts are still settling in the clay, so the leaf no longer sits where the limits were set, and the operator reads the extra drag as an obstruction. We correct the hang, reset the limit switches and force, and confirm the photo eyes and edges still reverse the gate properly.' },
      { q: 'Should the batteries in a Viking operator be replaced on a schedule?', a: 'It is worth having them tested every year or so rather than waiting for a failure. A Viking runs the gate from DC, so weak batteries show up as slow travel, a gate that stalls partway, or no movement at all after a storm takes the power out. We test them under load, check the charger, and replace them as a matched set when they no longer hold up.' },
    ],
  },
  'university-park/faac': {
    description: 'FAAC hydraulic gate repair in University Park, TX: 400 and 402 seal kits, fluid, pressure and 455 D boards on iron swing gates near Snider Plaza. Call Shield.',
    intro: 'FAAC gate repair in University Park for hydraulic swing operators and in-ground units on formal iron entrances. Hydraulics fail differently from chain drives, and we diagnose and repair them on site rather than condemning them.',
    local: [
      'FAAC built its name on hydraulics: a motor drives a pump, and fluid pressure moves the ram that swings the leaf. That gives a smooth, strong stroke that suits the heavy wrought iron swing gates and courtyard gates on University Park frontages. It also means the failures are pressure failures. When seals wear, fluid escapes, the level drops, and the gate slows, stops short or cannot hold itself closed. On tight frontages a misaligned safety sensor adds stops of its own, so the symptoms can look like a board fault when two small faults are overlapping.',
      'We check fluid level and condition first, test pressure against FAAC’s figures, then reseal or adjust. The 400 and 402 arms are long lived and age alone is no reason to replace one, and the 455 D board used with the hydraulic swing units is a straightforward swap once it is confirmed faulty. A weeping release valve is a real fault and gets fixed. Replacement makes sense only when the housing or ram is physically damaged. We service FAAC swing gates in Caruth Hills, Windsor Place and along Lovers Lane.',
    ],
    faqs: [
      { q: 'Does clay soil in University Park affect a FAAC hydraulic gate?', a: 'Indirectly. When a post moves in the clay the leaf drops or binds, and the hydraulic arm has to push harder through the same stroke. Pressure settings that were right become wrong, and the seals see extra load. We check the post and hinges before resetting pressure, because adjusting the operator around a leaning post only hides the problem until the next wet spell.' },
      { q: 'Do you carry parts for FAAC hydraulic operators?', a: 'We carry seal kits, hydraulic fluid and the common control boards, which covers most FAAC repairs. Less common parts can usually be ordered, and we tell you before the visit ends whether anything needs ordering so you are not left guessing. The aim is to return the existing operator to service rather than swap it for a brand someone else happens to stock.' },
    ],
  },
  'university-park/us-automatic': {
    description: 'US Automatic gate repair in University Park, TX: Patriot and Ranger 12V batteries, AC chargers, solar panels and storm-hit boards. Call Shield.',
    intro: 'US Automatic gate repair in University Park for Patriot and Ranger operators running on 12 volt batteries. We sort out whether the battery and charging side or the operator itself has failed before recommending anything.',
    local: [
      'Every US Automatic operator moves the gate from its battery, whether a solar panel or a plug-in AC charger refills it. On University Park lots, where the gate sits close to the street and the house and landscaping crowd the frontage, AC charging from a nearby outlet is a practical choice, and any panel that is fitted needs a clear view of the sky. Either way the battery is the wear item. A Patriot or Ranger that opens slowly, quits partway or does nothing at all is far more often a tired battery than a dead operator.',
      'Our order is battery under load, then charging, then operator. On an AC-charged install we test the charger and its low-voltage lead, and on a solar one the panel output. Patriot arms carry limit switches that drift, and Ranger units take their limit settings on the control board, so a gate stopping in the wrong place is often an adjustment. A board hit by a lightning surge is replaced, not the whole unit. We repair US Automatic gates in Stratford Manor, University Heights and off Hillcrest Avenue.',
    ],
    faqs: [
      { q: 'Can a US Automatic gate work on a narrow University Park frontage?', a: 'Yes, but the layout matters. A swing leaf that opens toward a tight driveway or sidewalk needs its arm geometry and safety sensors set carefully, because there is little room between the gate and a car or a pedestrian. We check that the arm mounting suits the opening angle and that the photo eyes are aimed across the actual path, not at a wall.' },
      { q: 'Is it worth upgrading the battery on a US Automatic operator?', a: 'Sometimes. If the gate runs often or the charging is marginal, a battery that was just adequate when new falls behind as it ages, especially through a Texas summer. We test capacity under load and look at how many cycles the gate actually makes each day, then tell you whether a like for like replacement or a larger battery makes more sense.' },
    ],
  },
  'university-park/apollo': {
    description: 'Apollo gate repair in University Park, TX: 1550 and 1650 swing actuators, 12V batteries, solar charging and corroded low-voltage connections. Call Shield.',
    intro: 'Apollo gate repair in University Park for the 1550 single and 1650 dual swing openers, now sold under Nice. These are 12 volt systems, so we test the battery and charging before we touch the actuator or board.',
    local: [
      'Apollo openers are battery machines. The 1550 drives one leaf and the 1650 drives a pair, each through a tubular actuator bolted between a pivot arm on the hinge post and a bracket on the gate, with the battery and board in a steel box nearby. On a University Park courtyard gate or iron swing pair that geometry is sensitive to movement. When a post shifts in the clay, the actuator stroke no longer matches the leaf, and the gate stops a few feet in or reverses after closing, which owners often read as a failing board.',
      'We measure the battery while the gate is running, since an Apollo wants twelve to fourteen volts under load, then check the panel or trickle charger. Next come the low-voltage connections in the enclosure, which corrode, and the actuator arm and brackets, which wear and fatigue. Limit drift on the swing arms is an adjustment. Distributors list the TITAN 12L as a bolt-in replacement for older actuators on the same mounting geometry. We repair Apollo gates in Volk Estates, Caruth Hills and near Centennial Park.',
    ],
    faqs: [
      { q: 'My Apollo gate in University Park reopens right after it closes. Why?', a: 'On a 12 volt Apollo that usually starts with power. A battery that sags under load can make the board misread the closing stroke as an obstruction and reverse. A shifted post or worn bracket that adds drag at the end of travel does the same thing. We test the battery running, check that the leaf moves freely by hand, then set the limits and obstruction sensitivity.' },
      { q: 'Can an old Apollo board still be replaced?', a: 'Generally yes. The 1550 and 1650 have used several boards over the years, from the early 833 and 834 to the 835 and 836 on ETL units and the 1050 on the 1K versions. Identifying which one you have is the first step, and then we can tell you whether a direct replacement or an updated board is the better route for your gate.' },
    ],
  },
  'university-park/ramset': {
    description: 'Ramset gate repair in University Park, TX: RAM 100 and RAM 1000 slide operators, chain and sprocket wear, limits, boards and thermal cutouts. Call Shield.',
    intro: 'Ramset gate repair in University Park for RAM 100 and RAM 1000 slide operators on driveway slides and small shared entrances. We look at why a part failed, not only at the part, so it does not fail again.',
    local: [
      'Ramset markets the RAM 100 and RAM 1000 for residential and light commercial slide gates, which suits the driveway slides on University Park lots where there is no room for a leaf to swing. The usual stress here is the gate rather than the traffic. A slide gate on a track laid over clay dips or rises as the ground moves, wheels wear, and the chain and sprocket take the extra load. The motor runs hotter, the thermal cutout trips in the afternoon heat, and the gate quits until it cools.',
      'When the same Ramset part keeps failing, we stop replacing it and find the load behind it. That means running the gate by hand to check the track, wheels and guide rollers, then chain tension and sprocket wear, then the limit switches and the control board relays. A slide set up wrong after a rebuild, with limits or safety devices never tuned, also shows up here. Gearbox wear is the main reason to talk about a new operator. We repair Ramset slides off Preston Road, Lovers Lane and in Windsor Place.',
    ],
    faqs: [
      { q: 'Why does my Ramset slide gate stop working on hot University Park afternoons?', a: 'Heat plus load. A slide gate dragging on a worn wheel or a track that has moved with the clay makes the motor work harder, and on a hot day it reaches its thermal limit and shuts down to protect itself. Replacing the motor does not fix that. We find the drag, correct the track or wheels, and the cutout stops tripping.' },
      { q: 'Are Ramset parts still available?', a: 'For the current operators, yes. Ramset Automatic Gate Systems still builds the RAM 100 and RAM 1000 lines, so chains, sprockets, limit switches and boards can be obtained. We confirm the exact model and board on your gate first, because ordering the right part the first time keeps the gate out of service for less time.' },
    ],
  },
  'university-park/automatic-gate-repair': {
    description: 'Automatic gate repair in University Park, TX for new gates on rebuilt lots and ageing operators near Volk Estates: limits, sensors and boards. Call Shield.',
    intro: 'Automatic gate repair across University Park, where a brand new gate on a rebuilt lot and a decades old operator on an acre property can sit on the same street and fail for opposite reasons.',
    local: [
      'University Park packs more than seven thousand homes into about three and a half square miles, and it has been rebuilding them since the 1970s. That leaves two kinds of automatic gate. On a rebuilt property the gate is new, often a wrought iron swing or a driveway slide, and the trouble is commissioning: limits set before the gate settled, a safety sensor aimed at nothing, or an operator sized for a lighter leaf than the one it carries. On the larger lots around Volk Estates the operator has been running far longer and simply needs parts.',
      'So we diagnose by age first. On a newer gate we check the hang, the posts and the settings before anything else, because adjustment usually fixes it. On an older one we test the board, the inputs and the drive, and we are honest when an operator has reached the point where parts are not worth fitting. Either way the photo eyes and edges get checked, since tight frontages along Hillcrest Avenue and Lovers Lane leave little room for error.',
    ],
    faqs: [
      { q: 'Why does a University Park gate installed with a new house misbehave so soon?', a: 'Because the gate and posts are still moving. Fresh ground under new posts settles, especially in clay, and the leaf drops slightly on its hinges during the first year. Settings made on installation day no longer match where the gate actually sits, so it stops short or reverses. That is usually an adjustment rather than a faulty part, and it is quick to confirm.' },
      { q: 'What should I check before calling about an automatic gate that will not move?', a: 'Look at whether anything is blocking the photo eyes, whether the manual release has been left engaged, and whether the operator has power at all. Note any lights or beeps on the control box. Those details shorten the diagnosis. If none of that explains it, leave the gate in a safe position and call us rather than forcing it by hand.' },
    ],
  },
  'university-park/electric-gate-repair': {
    description: 'Electric gate repair in University Park, TX: power supplies, transformers, buried wiring, surge-damaged boards and vehicle loops on rebuilt lots. Call Shield.',
    intro: 'Electric gate repair in University Park for the power side of a gate: the supply, transformer, low-voltage wiring, loops and surge protection. When a gate is dead or erratic, we trace the circuit before replacing any part.',
    local: [
      'Rebuilding is constant in University Park, and every rebuild disturbs the ground around a gate. Trenching for new utilities, irrigation and hardscape is how buried gate wiring gets nicked or cut, and on a tight lot the cable often runs right under the work. On new installs the wiring is fresh but sometimes rushed: splices left unsealed, a transformer sharing a circuit it should not, a vehicle loop cut too close to a slide gate track. On older properties the cable has simply aged in clay that wets and dries every season.',
      'We start at the supply and work outward: incoming power and breaker, transformer output, board input, then each low-voltage run, loop and sensor lead in turn, with continuity and insulation tested rather than assumed. Thunderstorm surges can take out a board, a receiver and a loop detector together, so we test each one separately and add surge protection where it was left out. We work on electric gates across the 75205 and 75225 zip codes, including Caruth Hills and University Heights.',
    ],
    faqs: [
      { q: 'Our neighbor’s rebuild started and now our electric gate is acting up. Could that be connected?', a: 'It can be. Excavation, trenching and heavy equipment near a property line are a common way for buried gate wiring or a vehicle loop to be damaged, even when nothing looks disturbed on your side. We test the circuit run by run to locate any break, then repair or replace that section rather than rewiring the whole gate.' },
      { q: 'Do electric gates need surge protection?', a: 'It is worth having. North Texas storms put surges into supply lines and long low-voltage runs, and a gate board is an exposed, sensitive target. Protection on the incoming supply and on the loop and keypad leads is a small addition compared with the board it saves. If your gate has none, we can fit it while we are already working on the system.' },
    ],
  },
  'university-park/driveway-gate-repair': {
    description: 'Driveway gate repair in University Park, TX for private homes: iron swing pairs, driveway slides, sagging leaves, clay-shifted posts and sensors. Call Shield.',
    intro: 'Driveway gate repair for private homes in University Park, where the gate sits a short distance from the street and the house. We get it opening and closing safely first, then fix whatever caused the failure.',
    local: [
      'A University Park driveway gate usually works in a tight space. Lots are compact by Dallas standards, so the gate is close to the sidewalk, close to parked cars and close to the front door, and there is little slack if a leaf drops or a slide drifts off its line. Wrought iron swing pairs and driveway slides are the common types. Clay soil moves the posts over time, and on frontages this narrow even a small shift puts a safety sensor out of alignment or lets a leaf scrape the driveway.',
      'We start with the gate, not the motor: hinges, post plumb, wheels and track, then the operator. A sagging leaf can often be rehung and the post corrected, while a cracked weld or a rotted bottom rail may mean repairing the gate itself. Once it moves freely by hand we reset limits and force and test the photo eyes across the real path of the car. This is driveway gate repair in University Park for homes in Windsor Place, Stratford Manor and the streets around them.',
    ],
    faqs: [
      { q: 'My driveway gate scrapes the ground at the end of its swing. What is wrong?', a: 'Usually the hinge post has moved or the leaf has dropped on its hinges. In University Park clay, posts lean slightly as the ground swells and shrinks, and a heavy iron leaf amplifies that at its far end. Driving the gate harder only damages the operator. We correct the post or hinges so the leaf clears, then reset the operator settings.' },
      { q: 'Can I use my driveway gate manually while it is waiting for repair?', a: 'Most operators have a manual release so the gate can be moved by hand. Use it, but only after the power is off or the operator is released, and keep the gate secured in the open or closed position so it cannot swing into a car or a person. If the gate is heavy or binding, leave it and let us release it safely.' },
    ],
  },
  'university-park/sliding-gate-repair': {
    description: 'Sliding gate repair in University Park, TX: tracks on clay, worn wheels, guide rollers, chains and limits on driveway slides by rebuilt homes. Call Shield.',
    intro: 'Sliding gate repair in University Park for driveway slides on lots too narrow for a swing leaf. Most slide failures start at the track, wheels or rollers, so that is where we begin.',
    local: [
      'A slide gate is often the only option on a University Park frontage where a swinging leaf would hit a parked car or the sidewalk. That makes driveway slides common here, and it means the gate runs parallel to a fence line with little clearance at either end. The track sits on a slab or footing in clay, and when the ground moves the track rises or dips, the gate stops rolling true, and the operator works against it. Sliding gate repair in University Park often comes back to that ground movement, plus wheels and guide rollers worn flat.',
      'Our order is mechanical first. We run the gate by hand along its full travel, check the track for level and debris, inspect wheels, guide rollers and stops, then move to chain tension, sprockets and the operator limits. On a gate installed with a rebuild we also check that the limits and safety devices were set for how the gate runs now. Track sections and wheels are replaceable, so a new gate is rarely needed. We repair slides near Snider Plaza, off Preston Road and in University Heights.',
    ],
    faqs: [
      { q: 'Why has my slide gate started to jerk and stall in one spot?', a: 'A single sticking point usually means the track has a dip, a bump or debris there, or one wheel has a flat. In University Park clay a track can lift slightly where the slab below has moved. The operator feels that spot as resistance and stalls. We find it by running the gate by hand, then repair the track section or replace the wheel.' },
      { q: 'How often should a sliding gate’s chain be adjusted?', a: 'There is no fixed interval. Check it when the gate starts to clunk at the start of travel or the chain visibly sags. A slack chain jumps the sprockets and a tight one strains the operator bearings. When we service a slide we set tension, look at the sprocket teeth and lubricate where the manufacturer allows, so it runs quietly between visits.' },
    ],
  },
  'university-park/swing-gate-repair': {
    description: 'Swing gate repair in University Park, TX: sagging wrought iron leaves, hinge posts moved by clay, operator arms and limits on courtyard gates. Call Shield.',
    intro: 'Swing gate repair in University Park for wrought iron driveway pairs and courtyard gates. A swing leaf is only as good as its hinge post, so we check the post and hinges before the operator.',
    local: [
      'Wrought iron swing gates are the classic University Park entrance, from paired driveway leaves to smaller courtyard gates set close to the house. A heavy iron leaf hung on a post in clay is a long lever, and as the soil swells after rain and shrinks in summer the post tilts, the leaf drops and the gap at the far end closes. The operator then drags the leaf through its arc, trips on overload or stops short. On tight frontages the arc may also pass very near a sidewalk or wall, which makes safety sensor position important.',
      'We check post plumb, hinge wear and the level of the leaf, correct the hang, then look at the operator arm, its mounting brackets and the limits. Worn hinges and bushings are a simple repair, while a post that has moved badly may need resetting in a new footing. If a new gate was hung during a rebuild and never had its limits revisited, that adjustment is often all it needs. We repair swing gates in Volk Estates, Caruth Hills and along Hillcrest Avenue.',
    ],
    faqs: [
      { q: 'Is it normal for a new University Park swing gate to sag within a year?', a: 'Some settling is normal, a lot is not. Posts on freshly disturbed ground move more than old ones, and a heavy iron leaf shows it at the latch end. A small drop can be taken up at the hinges and the limits reset. A post that keeps leaning needs its footing looked at, otherwise the adjustment will not hold for long.' },
      { q: 'Can one leaf of a double swing gate be repaired without the other?', a: 'Yes. Each leaf has its own hinges, arm and often its own operator, so a fault on one side can be repaired alone. We do check that both leaves still meet properly afterwards, because a pair that closes out of step puts strain on the latch, the stops and the operators, and can leave the gate looking shut when it is not.' },
    ],
  },
  'university-park/gate-opener-repair': {
    description: 'Gate opener repair in University Park, TX: remotes, keypads, receivers, control boards and limit settings on new and older driveway gates. Call Shield.',
    intro: 'Gate opener repair in University Park for the controls that tell a gate what to do: remotes, keypads, receivers, control boards and limits. We find which link in that chain failed before replacing anything.',
    local: [
      'On University Park properties the opener side splits along the same line as the gates. Openers fitted during a rebuild are recent, and their faults are usually in setup: limits never revisited after the gate settled, a keypad wired to the wrong input, remotes programmed to one receiver while another sits unused. Openers on the older acre lots near Volk Estates have different problems, with control boards and receivers old enough that finding parts is the question. Gate opener repair in University Park means knowing which of those two you are looking at.',
      'We test from the input inward. A remote that fails gets checked against the receiver, a keypad gets checked at its terminals, then come the board inputs, safety circuits and limit settings. A stuck command or a blocked photo eye can lock out every other signal, which is why board failure is the last conclusion, not the first. Limits and force are set to the gate as it hangs now. We repair openers across Windsor Place, Stratford Manor and near Southern Methodist University.',
    ],
    faqs: [
      { q: 'Only one of our remotes stopped working. Is the receiver failing?', a: 'Probably not. If other remotes still operate the gate, the receiver is fine and the problem is the remote itself: a weak battery, a damaged button or lost programming. We test it, replace the battery, reprogram it or supply a compatible replacement. If every remote has become unreliable at once, then we look at the receiver, its antenna and the board.' },
      { q: 'Can a newer keypad or receiver work with an older opener?', a: 'Often it can. Many receivers and keypads are designed to wire into the standard inputs found on most control boards, so an older opener does not need replacing just to get modern remotes or a better keypad. We check the board inputs and voltage first, then recommend a compatible part that suits how the gate is used.' },
    ],
  },
  'university-park/gate-motor-repair': {
    description: 'Gate motor repair in University Park, TX: capacitors, gearboxes, thermal cutouts and worn motors on heavy iron gates and older operators. Call Shield.',
    intro: 'Gate motor repair in University Park for operators that hum, overheat, stall or will not start. We test the motor, capacitor, gearbox and thermal cutout separately, so you only replace the part that failed.',
    local: [
      'Motors on University Park gates fail in two ways. On older operators around Volk Estates the motor and gearbox have simply run for a long time, and bearings, gears and capacitors wear. On newer installs the motor is often fine but overworked: an operator chosen for a lighter leaf than the heavy iron it ended up carrying, or a gate that has settled and binds, makes the motor draw more current, run hotter and trip its thermal cutout. That second case is a gate or sizing problem showing up as a motor problem.',
      'Our sequence is to move the gate by hand to rule out mechanical drag, then check the capacitor on AC motors, the motor current and windings, the thermal cutout and the gearbox for wear or stripped teeth. A failed capacitor is a quick fix, a worn gearbox can sometimes be rebuilt, and a burnt motor on an old operator is where replacing the operator may make more sense. We repair gate motors off Preston Road, Lovers Lane and in Caruth Hills.',
    ],
    faqs: [
      { q: 'My gate motor hums but the gate does not move. What failed?', a: 'A humming motor that will not turn is very often a failed start capacitor on an AC operator, or a gearbox whose teeth have stripped so the motor spins without driving the gate. It can also be a gate jammed so hard the motor cannot start it. We release the gate, check it by hand, then test the capacitor and gearbox in turn.' },
      { q: 'Why does my gate motor quit after a few cycles in a row?', a: 'That is the thermal cutout doing its job. When a motor runs hot, from a binding gate, an undersized operator or heavy use, it shuts down until it cools. Replacing the cutout or the motor does not solve it. We find out what is loading the motor, correct that, and then confirm the motor current is back where it should be.' },
    ],
  },
  'university-park/emergency-gate-repair': {
    description: 'Emergency gate repair in University Park, TX, 24/7: gates stuck open or shut, vehicle damage, storm surges and failed operators on tight lots. Call Shield.',
    intro: 'Emergency gate repair in University Park when a gate is stuck open, stuck shut, hit by a vehicle or knocked out by a storm. We answer around the clock and focus first on making the gate safe.',
    local: [
      'On a compact University Park lot a stuck gate is more than an inconvenience. When the drive is the only way to park off the street, a gate jammed shut leaves a car outside, and one stuck open leaves the property unsecured beside a busy sidewalk. Vehicle damage is a real risk on tight frontages, where a car turning in off a narrow street catches a leaf or a post. Spring thunderstorms are the other trigger, since a surge can kill a board, receiver or loop detector without warning.',
      'On an emergency call we make the gate safe first: release the operator, secure the leaf, and get you in or out. Then we diagnose. A storm-hit board or receiver can often be replaced on the visit, and a bent leaf or damaged post may need a temporary fix until fabrication or parts are arranged. We explain what is temporary and what is permanent. Emergency gate repair in University Park covers homes in both zip codes, from University Heights to Volk Estates.',
    ],
    faqs: [
      { q: 'Our gate was hit by a car. Is it safe to keep using it?', a: 'Not until it has been checked. An impact can bend a leaf, crack a weld, twist a hinge or loosen a post footing, and the operator may keep trying to move a gate that is no longer straight. Release it, keep people clear, and call. We assess the gate and post, make it secure, and separate what needs fabrication from what can be fixed on site.' },
      { q: 'The power went out and our gate will not open. What can I do?', a: 'Use the manual release, which on most operators is a key or lever on the operator itself. On battery-backed DC units the gate may keep running until the batteries are flat. If you cannot find the release or the gate is too heavy to move safely, call us and we will talk you through it or come out to release it.' },
    ],
  },
  'university-park/commercial-gate-repair': {
    description: 'Commercial gate repair in University Park, TX for shared drives, business lots and managed entrances: access control, loops and safety devices. Call Shield.',
    intro: 'Commercial gate repair in University Park for gates that serve more than one household: shared drives, managed residential entrances and business properties. We look at the operator, the access control and the loops as one system.',
    local: [
      'University Park is overwhelmingly residential, so commercial gate work here looks different from a business park. It is the shared entrance serving several homes, the managed property with an access system, and the business frontages near Snider Plaza and along Preston Road where a gate secures a lot or a service area. Those gates cycle more than a single driveway, often with several users holding different credentials, and space is tight, so a slide gate or a swing pair has to work close to traffic and pedestrians.',
      'We diagnose the whole entrance. Access control comes first, whether keypad, card reader or telephone entry, then the vehicle loops and detectors, the safety devices, and finally the operator and drive. Many repeat failures on shared gates are loop or sensor faults rather than operator faults. For managed sites we can work with the manager on timing so users are not locked out, and keep a record of what was done for the next visit. We confirm what the city and any association require before changing an entrance.',
    ],
    faqs: [
      { q: 'Our shared gate serves several homes and keeps getting left open. Can that be fixed?', a: 'Usually. A gate that stays open is often holding on a loop detector that sees a vehicle when none is there, a photo eye that is blocked or misaligned, or a hold-open setting someone changed. On a shared entrance with several users, each reason needs checking. We test the loops and sensors, review the timer and access settings, and set them back to suit the site.' },
      { q: 'Can you add or update access control on an existing commercial gate?', a: 'In most cases yes. Keypads, card readers and telephone entry systems can usually be wired into the existing operator inputs. We check the board, the power available and how users need to come and go, then recommend a system that suits the site rather than the biggest option. Programming and user codes can be set up for the manager.' },
    ],
  },
  'university-park/residential-gate-repair': {
    description: 'Residential gate repair in University Park, TX: driveway, courtyard, side and pedestrian gates, latches and safety sensors for kids and pets. Call Shield.',
    intro: 'Residential gate repair in University Park for every gate around a home: the driveway gate, courtyard entry, side yard and pedestrian gates. Safety around children and pets is part of every repair we do.',
    local: [
      'A University Park home often has more gates than its owner thinks about. Besides the automated driveway gate there is a courtyard gate near the front door, a side gate to the yard and sometimes a pedestrian gate beside the main leaf. On rebuilt properties these may all be new and still settling, and on older ones some were added decades apart. Clay moves the posts on all of them, and on tight frontages a misaligned safety sensor on the driveway gate sits only steps from where children play or a dog waits.',
      'We check each gate for how it closes and latches as well as how it opens. Self-closing hinges and latches on side and pool gates should actually close and catch, and automated gates need working photo eyes, edges and correct force so they reverse on contact. Hinges, latches, posts and operator settings are the usual repairs. Residential gate repair in University Park extends to Windsor Place, University Heights and homes near Centennial Park.',
    ],
    faqs: [
      { q: 'Our side gate no longer latches on its own. Is that worth fixing?', a: 'Yes, especially with children or pets at home. A side gate that drifts open usually has a post that has moved in the clay, a sagging leaf or a worn self-closing hinge, and any of those stops the latch catching. We realign the gate, adjust or replace the closer and latch, and check that it closes and catches from any open position.' },
      { q: 'How can I tell if my automatic gate’s safety devices still work?', a: 'With care. Watch whether the gate stops and reverses when the photo eye beam is broken, using an object rather than a person or pet, and whether any contact edge triggers a reverse. If the gate keeps moving, stop using it and call. We test sensors, edges and force against the operator specification and correct whatever is not working.' },
    ],
  },
  'university-park/automatic-gate-installation': {
    description: 'Automatic gate installation in University Park, TX: operator sizing for heavy iron, footings in clay, power runs, UL 325 safety and HOA checks. Call Shield.',
    intro: 'Automatic gate installation in University Park, planned around compact lots, heavy iron gates and clay soil. We size the operator for the actual gate and set it up so it still works once the gate settles.',
    local: [
      'Many University Park gates go in with a rebuild, and many of the problems that show up later started at installation: limits set before the posts settled, safety sensors aimed across nothing, and operators chosen for a lighter leaf than the heavy iron that was hung. Lots are tight, so the choice between a swing pair and a driveway slide often comes down to how much room there is between the gate, the street and the house. Clay soil means posts and footings matter as much as the operator does.',
      'We plan from the site: gate type, weight and length, opening clearances, where power can be brought in and how cables will be routed. Footings are sized for the clay. The operator is matched to the gate, not to a typical driveway, and the install is set up to UL 325 and ASTM F2200, with photo eyes and edges positioned for the real vehicle path. We confirm what the city and your HOA require before work starts, and we return to the limits after the gate has had time to settle.',
    ],
    faqs: [
      { q: 'Swing or slide for a narrow University Park lot?', a: 'It depends on the space behind the gate. A swing pair needs clear room for each leaf to open inward without hitting cars, steps or landscaping, and on many compact lots that room is limited. A slide needs run-back space along the fence line instead. We measure both options on site and show you which one actually fits your frontage.' },
      { q: 'Why revisit an automatic gate after installation?', a: 'Because new gates settle. Posts on fresh footings move a little, hinges bed in and the leaf drops slightly in the first months. Limits and force set on day one drift out of step with where the gate hangs. Checking and resetting them after settling prevents the false reverses and short stops that make a new gate seem faulty.' },
    ],
  },
  'university-park/electric-gate-installation': {
    description: 'Electric gate installation in University Park, TX: dedicated power, transformer placement, conduit, loops and surge protection on compact lots. Call Shield.',
    intro: 'Electric gate installation in University Park with the power side planned properly: supply, transformer, conduit, loops and surge protection. Good wiring at installation prevents most of the electrical faults gates develop later.',
    local: [
      'Electrical work for a gate on a University Park lot usually means getting power across a short but crowded strip of ground. Between the house and the gate there may be new irrigation, hardscape, utility lines and a driveway, and on rebuilt properties all of it may have been dug recently. That is exactly where buried gate cable gets damaged later if it was not run in conduit at a sensible depth. Clay that wets and dries every season is also hard on unsealed splices, and a splice that fails underground is slow and disruptive to find.',
      'We plan the route before trenching: a dedicated circuit where needed, a transformer sized and placed for the operator, conduit for every low-voltage run, sealed splices and a clear record of where cables sit. Vehicle loops are cut and sealed where future work will not cross them, and surge protection is fitted on the supply and on the loop and keypad leads. Safety devices are wired and tested to UL 325. We confirm what the city and your HOA require for electrical work near the street.',
    ],
    faqs: [
      { q: 'Does an electric gate need its own circuit?', a: 'It depends on the operator and what else shares the circuit. Many AC operators are best on a dedicated circuit so other loads cannot trip the gate, while DC and battery systems may only need a small supply for their charger. We check the operator requirements and your panel and recommend accordingly, with any mains work done to code.' },
      { q: 'Can the gate wiring go in before landscaping or hardscape is finished?', a: 'Yes, and on a rebuild that is often the best time. Laying conduit for the power, loops and keypad leads before pavers or beds go down saves cutting them up later. We mark the routes and leave pull strings in the conduit so the gate itself can be fitted once the frontage is complete.' },
    ],
  },
  'university-park/sliding-gate-installation': {
    description: 'Sliding gate installation in University Park, TX: run-back space, tracks and footings in clay, operator sizing and UL 325 entrapment protection. Call Shield.',
    intro: 'Sliding gate installation in University Park for lots where a swing leaf will not fit. A slide gate depends on a level track and a good footing, so planning the ground comes before choosing the operator.',
    local: [
      'Slides make sense on many University Park frontages, where a swinging leaf would hit a parked car, steps or the sidewalk. What a slide needs instead is run-back room along the fence line, roughly the width of the opening plus overlap, and on a compact lot that space is not always clear of trees, utilities or a neighbor’s fence. The track sits on clay that moves with the seasons, so a thin slab under it will eventually let the gate dip and drag.',
      'We measure the opening and the run-back, design the track footing for the soil, and choose between a ground track and a cantilever design depending on the site. The operator is sized for the weight and length of the gate, and the install follows UL 325 and ASTM F2200: guarded rollers, covered gaps where hands could be caught, and photo eyes and edges at the right points. We confirm what the city and your HOA require before work starts, then set the limits once the gate has run in.',
    ],
    faqs: [
      { q: 'Is a cantilever slide gate a good choice in University Park clay?', a: 'It can be. A cantilever gate rides on rollers mounted at the posts rather than on a ground track, so ground movement across the opening matters less and there is no track to keep clear. It needs extra counterbalance length behind the opening and very solid post footings. We look at the space and the soil before recommending one.' },
      { q: 'What safety features does a sliding gate need?', a: 'At minimum the protections UL 325 and ASTM F2200 call for: guarded rollers, screened or covered openings where a hand could be pulled in, positive stops, and entrapment protection such as photo eyes and contact edges. These are set during installation and tested before handover, and we show you how the manual release works.' },
    ],
  },
  'university-park/swing-gate-installation': {
    description: 'Swing gate installation in University Park, TX: wrought iron leaves, deep footings in clay, operator arms and UL 325 sensors on tight frontages. Call Shield.',
    intro: 'Swing gate installation in University Park for wrought iron driveway pairs and courtyard gates. Hinge posts and footings decide whether a swing gate stays level, so we plan those before the leaves are hung.',
    local: [
      'Iron swing gates suit University Park architecture, and they are a frequent choice on rebuilt homes. They also expose every weakness in the ground. A long iron leaf hung on a post is a lever, and clay that swells and shrinks with the weather will tilt a shallow footing within a season or two. Tight frontages add a second constraint: leaves need room to open inward without striking cars, steps or landscaping, and the safety sensors need a clean line across the drive.',
      'We set the hinge posts on footings sized for the leaf weight and the soil, choose the operator for the actual leaf length and weight, and position the arms so the gate opens fully within the space available. Photo eyes and edges are placed to UL 325 and ASTM F2200 for the real vehicle and pedestrian path. We confirm what the city and your HOA require, and we come back to the limits after the gate has settled. That approach holds from Caruth Hills to Stratford Manor.',
    ],
    faqs: [
      { q: 'Should swing gates open inward or outward on a University Park lot?', a: 'Inward is the usual choice, because a leaf swinging toward the street can strike a passing car or pedestrian. On a lot with little room behind the gate that can be difficult, and the answer may be a slide or a different leaf arrangement. We measure the clearances, talk through the options, and confirm what the city and your HOA allow.' },
      { q: 'Can an operator be added to an existing manual swing gate?', a: 'Often yes, if the gate and posts are sound. We check the leaf for weight, sag and rigidity and the posts for movement, because an operator will strain a gate that already drags. Where the gate is solid we fit an operator sized to it and add the safety devices UL 325 requires, then set the limits.' },
    ],
  },
  'university-park/gate-opener-installation': {
    description: 'Gate opener installation in University Park, TX: operator sizing for heavy iron, remotes, keypads, receivers, limits and safety sensors. Call Shield.',
    intro: 'Gate opener installation in University Park on new or existing gates, with the operator sized to the gate and the controls set up for how your household actually comes and goes.',
    local: [
      'Opener choice on a University Park gate starts with the gate itself. A heavy iron leaf or a long driveway slide needs an operator rated for its weight and length, and under-specifying it is one of the most common causes of repeat failures on rebuilt properties. Space matters too: on compact frontages the operator, its arm and the control box have to fit without blocking a walkway or sitting where a car will clip them. Power availability decides between an AC operator and a battery-run DC unit.',
      'We fit the operator, then the controls: remotes, a keypad at a sensible height and position, the receiver placed for reliable range, and any telephone entry or exit loop the property needs. Limits and force are set to the gate, safety devices are installed and tested to UL 325, and we show you the manual release. We confirm what the city and your HOA require. Gate opener installation in University Park covers homes near Snider Plaza and along Hillcrest Avenue.',
    ],
    faqs: [
      { q: 'Can an opener be fitted to an older gate on a large University Park lot?', a: 'Usually, provided the gate is sound and the operator is matched to it. A long, heavy leaf on a bigger property calls for a unit rated well above a standard light residential opener. We look over the gate, check the posts and hinges, then recommend an operator that will not be working at its limit every cycle.' },
      { q: 'AC or battery-powered opener?', a: 'AC operators suit gates with reliable power nearby and heavier, busier use. Battery-run DC operators keep working through a power cut and can run on solar where trenching power is difficult, and many offer soft start and stop. We look at the gate, the power available and how often it runs, then recommend one.' },
    ],
  },
  'grapevine/viking': {
    description: 'Viking gate repair in Grapevine, TX: DC batteries, solar charging, damp enclosures near the lake and limit drift on T-21, R-6 and K-2 operators. Call Shield.',
    intro: 'Viking gate repair in Grapevine for DC slide and swing operators on heavy residential and commercial gates. Near the lake we look hard at moisture and connections, and everywhere we test the batteries first.',
    local: [
      'Viking operators run on DC with batteries, often with solar or trickle charging, and they are typically put on the heaviest gate a property has. Grapevine tests them in two ways. On properties near Grapevine Lake, moisture gets into enclosures and settles on terminals and battery posts, and the result is an intermittent fault that comes and goes with the weather. On commercial slides along the SH 114 and SH 121 corridor, a Viking on a busy entrance wears its drive chain and gearbox on cycle count rather than age.',
      'Repair usually beats replacement. We load test the batteries and charger, clean and seal corroded connections, and find where water is getting into the enclosure. A T-21 or R-6 swing operator with drifting mechanical limits needs resetting, and an older K-2 slide that lost its positions after a total power failure needs a relearn. Worn chain, sprockets or gearbox on a heavy commercial gate are the parts that may tip the decision toward a new unit. We repair Viking operators around Silver Lake, Dove Creek and William D. Tate Ave.',
    ],
    faqs: [
      { q: 'Our Viking gate near the lake fails after rain and then recovers. What is going on?', a: 'Almost certainly moisture. When water finds a way into the enclosure it sits on terminals, battery posts and board connections, and the gate misbehaves until it dries out. Replacing the board does not cure it. We trace the corroded connection, clean or replace it, test the batteries, and seal the entry point so the fault does not return with the next wet spell.' },
      { q: 'Can a Viking operator be put on solar in Grapevine?', a: 'Many Viking installs already run on battery with solar or trickle charging, so it is a supported setup. Whether it suits your gate depends on how often it cycles and how much sun the panel position gets through the year. We look at both and size the panel and batteries so the gate does not run itself down through a stretch of cloudy days.' },
    ],
  },
  'grapevine/faac': {
    description: 'FAAC gate repair in Grapevine, TX: hydraulic swing operators, seals, fluid, pressure, 455 D boards and damp in-ground boxes near the lake. Call Shield.',
    intro: 'FAAC gate repair in Grapevine for hydraulic swing arms and in-ground operators on older homes and lakeside properties. We service the hydraulics on site rather than writing them off as unrepairable.',
    local: [
      'A FAAC moves the gate with hydraulic pressure: a motor runs a pump, and fluid pushes the ram. Grapevine’s older housing stock means some of these units have been in service a long time, and that age shows up as worn seals, lost fluid and pressure that no longer finishes the stroke. Near Grapevine Lake moisture is the other factor. An in-ground unit such as the 750 or 770 sits in a box under the hinge, and if that box does not drain, water reaches the operator and its connections.',
      'The sequence is fluid level and condition, then pressure against FAAC’s figures, then seals and the release valve, which on the hydraulic units is a keyed bypass and a genuine wear item. The 455 D board used with the hydraulic swing operators is a known failure point on older installs and is replaceable once confirmed. A 400 or 402 arm is rarely too old to service. Replacement is for physical damage to the housing or ram. We repair FAAC gates in Heritage Oaks, Original Town and off SH 26 Ira E. Woods Ave.',
    ],
    faqs: [
      { q: 'Our in-ground FAAC near Grapevine Lake keeps having problems. Is the location the cause?', a: 'It may well be. An in-ground operator sits in a foundation box below the hinge, and where the ground holds water the box can flood if its drain is blocked or was never connected. Water damages the operator and corrodes the connections over time. We clear and test the drain, check for water ingress, and service the operator itself while we are there.' },
      { q: 'Why is my FAAC gate slow some mornings?', a: 'Hydraulic fluid thickens when it is cold, so a FAAC can run noticeably slower on a cold morning and normally by afternoon. That is expected behavior. If it is slow in mild weather too, low fluid from a seal leak or a pressure fault is the likelier cause, and both of those are repairs we carry out on site.' },
    ],
  },
  'grapevine/us-automatic': {
    description: 'US Automatic gate repair in Grapevine, TX: Patriot and Ranger batteries, solar and AC charging, lakeside corrosion and lightning-hit boards. Call Shield.',
    intro: 'US Automatic gate repair in Grapevine for Patriot and Ranger 12 volt operators. We test the battery and its charging first, then check the enclosure and wiring for the damp that lakeside properties suffer.',
    local: [
      'Every US Automatic operator runs the gate from a 12 volt battery, refilled either by a solar panel or by a low-voltage AC charger. That makes them a natural fit for Grapevine properties where running mains power to the gate is awkward, including some lakeside lots and longer drives. The battery is the wear item, and Texas heat shortens its life. Near the water a second problem appears: moisture in the control box corrodes the battery terminals and charge connections, and a gate that worked yesterday stalls today.',
      'We test the battery under load, then the charging side: panel output on solar, the charger and its lead on AC. Corroded terminals get cleaned or replaced and the box checked for leaks. Patriot units use limit switches that drift, while Ranger units set limits on the board. Lightning and surge damage to the board is a common storm fault and is repairable. Long driveway leaves can also wear the gate arm and linkage. We repair US Automatic gates in Silver Lake, Heritage Oaks and Dove Creek.',
    ],
    faqs: [
      { q: 'Does lake humidity shorten the life of a US Automatic system?', a: 'It mostly affects connections rather than the operator. Moisture that gets into the enclosure corrodes battery posts, charge wiring and board terminals, and corroded connections act like a weak battery: slow travel, partial cycles or no response at all. We clean and protect the connections, check the enclosure seals and test the battery so you know which part actually needed attention.' },
      { q: 'Can a solar US Automatic gate be switched to AC charging?', a: 'Yes. The operator stays the same battery-run unit, and what changes is the charger: a low-voltage unit fed from an outlet takes over from the panel, with no mains wiring at the gate. Sometimes fixing an undersized or shaded solar setup is the simpler job. We look at where power is available and how the gate is used, then recommend the easier route.' },
    ],
  },
  'grapevine/apollo': {
    description: 'Apollo gate repair in Grapevine, TX: 1550 and 1650 swing openers, 12V batteries, solar panels and corroded box connections near the lake. Call Shield.',
    intro: 'Apollo gate repair in Grapevine for 1550 and 1650 swing openers and their actuators. These are 12 volt systems, and most faults start with power or connections rather than with the actuator itself.',
    local: [
      'An Apollo opener is a tubular actuator on each leaf, a 1550 for a single gate or a 1650 for a pair, with a 12 volt battery and board in a steel box near the hinge post. On a Grapevine property near the lake that box is the weak point. Damp air and wind-driven rain find their way in, low-voltage connections corrode, and the gate starts stopping a few feet into its travel or reversing after it closes. On older homes the issue is age: boards from earlier generations and actuators that have done a lot of work.',
      'We measure battery voltage while the gate runs, then the panel or trickle charger, then every connection in the box. Corroded terminals are cleaned or replaced and the box sealed. After that we look at the actuator, its arm and the mounting brackets, which wear and fatigue, and at limit drift on the swing arms. A worn-out older actuator can often be swapped for a TITAN unit on the same mounting geometry. We work on Apollo gates near Nash Farm, in Silver Lake and along William D. Tate Ave.',
    ],
    faqs: [
      { q: 'Our Apollo gate in Grapevine works in the afternoon but not first thing. Why?', a: 'A 12 volt Apollo depends on its battery, and a weak or poorly charged battery shows up worst after a night without solar charging, especially when a cold morning cuts its capacity. Corroded connections in a damp enclosure make it worse. We test the battery under load and the charging, clean the connections, and tell you whether the battery or the charging needs replacing.' },
      { q: 'Can an Apollo gate run without solar?', a: 'Yes. The battery powers the actuator directly and the solar panel only keeps it charged, so a trickle charger from an outlet can do the same job where power is nearby. Apollo’s manuals say battery power gives up to 200 operations in an outage. On a heavily shaded lot, plug-in charging is often more dependable than a panel.' },
    ],
  },
  'grapevine/ramset': {
    description: 'Ramset gate repair in Grapevine, TX: RAM 100 and RAM 1000 slides on busy commercial and home gates, chains, limits, loops and thermal trips. Call Shield.',
    intro: 'Ramset gate repair in Grapevine for RAM 100 and RAM 1000 slide operators, including those on busier commercial and multi-family entrances. When one part keeps failing we look for the load behind it.',
    local: [
      'Ramset sells the RAM 100 and RAM 1000 for residential and light commercial slide gates, and in Grapevine some of them end up on entrances that work harder than that. Along the hotel and retail corridor by SH 114 and SH 121, a gate can run hundreds of cycles a day, and every wear item, from chain and sprockets to limit switches and relays, is used up by cycle count rather than calendar age. Wear that would be alarming on a home gate can be normal on a busy one within eighteen months.',
      'So we establish how hard the gate really works before replacing anything. We run the gate by hand for drag, check chain and sprockets, test the limit switches and board relays, and look at the loop detector and access controller, which on commercial sites cause many of the faults blamed on the operator. A Ramset tripping its thermal cutout in the afternoon usually has a load problem. If the traffic has outgrown the operator, we say so. Residential Ramset slides in Dove Creek and Heritage Oaks get the same checks.',
    ],
    faqs: [
      { q: 'Our Ramset at a Grapevine commercial entrance keeps breaking the same part. Why?', a: 'Repeat failures nearly always mean the operator is working harder than it should, not that the parts are defective. Either the entrance now carries more traffic than the operator was chosen for, or the gate has developed drag from worn rollers, misalignment or added weight. We count actual cycles and test the gate by hand to find which, and fix the cause.' },
      { q: 'Should a busy Ramset gate be on a service schedule?', a: 'For a commercial entrance, yes. Because parts wear by cycles, replacing chains, sprockets and other wear items on a planned interval avoids the failure that leaves a gate stuck at the busiest hour. We can set an interval based on the actual use of the gate and keep a record of what was replaced, or simply repair faults as they come up.' },
    ],
  },
  'grapevine/automatic-gate-repair': {
    description: 'Automatic gate repair in Grapevine, TX: obsolete boards on older homes, lakeside corrosion and high-cycle wear on hotel and commercial gates. Call Shield.',
    intro: 'Automatic gate repair across Grapevine, from older homes in the historic township to lakeside lots and the busy commercial entrances near the highways. Each brings a different kind of fault.',
    local: [
      'Grapevine has the oldest housing of the north-east Tarrant cities, with more than thirteen hundred homes built before 1970, and it wraps around a lake with close to sixty miles of shoreline. Both shape automatic gate repair in Grapevine. Older properties carry operators whose control boards are now obsolete, so the question is whether parts still exist. Lakeside properties suffer moisture in enclosures and corroded terminals. And a quarter of the city is the airport, with a hotel and retail corridor beside it where gates and barrier arms cycle all day.',
      'We diagnose to suit the property. On older operators we identify the board and check parts availability before recommending a repair. On lakeside gates we look for moisture and corrosion and test circuits under changing conditions rather than swapping parts. On commercial entrances we check loops, barrier arms and wear items alongside the operator. In every case the gate gets moved by hand first, because a binding gate damages any operator. We cover the whole 76051 zip, including the College Street Historic District and Dove Creek.',
    ],
    faqs: [
      { q: 'Is it worth repairing an automatic gate operator that is thirty years old?', a: 'Sometimes. If the motor and drive are sound and the board can still be repaired or replaced with a compatible one, repair is reasonable. If the board is obsolete with no replacement and the drive is worn, putting money into it is hard to justify. We identify the parts first and give you a straight answer either way.' },
      { q: 'What details help when booking an automatic gate repair?', a: 'The make of the operator if you can see it, whether the gate is swing or slide, what it does or does not do, and any lights or beeps on the control box. Photos of the operator and its label help a great deal. That lets us bring the parts most likely to be needed on the first visit.' },
    ],
  },
  'grapevine/electric-gate-repair': {
    description: 'Electric gate repair in Grapevine, TX: moisture on terminals, corroded wiring, surge damage, transformers and loop faults near Grapevine Lake. Call Shield.',
    intro: 'Electric gate repair in Grapevine for the supply, transformer, wiring, loops and boards behind a gate. Near the lake, intermittent faults usually trace to moisture, so we test circuits instead of guessing.',
    local: [
      'Grapevine’s electric gate faults have a distinct pattern. Near Grapevine Lake, damp gets into enclosures and junction points, settles on terminal strips and corrodes splices, and the gate fails some days and works on others. On older properties, wiring and transformers have aged alongside boards that are no longer made. On managed parking and commercial entrances, vehicle loops and their detectors take the heaviest use, and a cracked loop or water in its lead-in gives phantom vehicles or misses real ones.',
      'We trace the power path in order: supply and breaker, transformer output, board power, then each low-voltage run, loop and sensor lead, testing continuity and insulation. Corroded terminals and splices are cleaned or replaced and sealed, and enclosures checked for the entry point. Storm surges can take out a board, receiver and loop detector at once, so each is tested on its own, and surge protection is added where it is missing. We repair electric gates in Original Town, Silver Lake and off SH 26 Ira E. Woods Ave.',
    ],
    faqs: [
      { q: 'Why does our Grapevine gate fail only in wet weather?', a: 'Because water is getting into the electrical side. Moisture on a terminal strip, inside a splice or in a loop lead-in creates a fault that appears when it is damp and fades as things dry. Swapping the board will not help. We test the circuit while the fault is present, find the wet connection, and repair and seal it so the gate stops following the weather.' },
      { q: 'What does a loop detector do on an electric gate?', a: 'It senses a vehicle over a wire loop cut into the drive and tells the gate to open, stay open, or not close on the car. When a loop cracks or its connection corrodes, the gate may open by itself, stay open, or fail to protect a vehicle under it. We test the loop and detector and repair or recut the loop when needed.' },
    ],
  },
  'grapevine/driveway-gate-repair': {
    description: 'Driveway gate repair in Grapevine, TX for private homes: older swing gates, home slides, rusted hardware near the lake and dated operators. Call Shield.',
    intro: 'Driveway gate repair for private homes in Grapevine, from historic township properties to lakeside lots. We get the driveway gate working safely first, then repair the cause properly.',
    local: [
      'Driveway gates in Grapevine come in two broad ages. Around the Historic Grapevine Township and the College Street Historic District, homes are among the oldest in the area, and a driveway gate there may have been added long after the house, with an operator that has since become hard to find parts for. On newer streets such as Dove Creek and Heritage Oaks, iron swing gates and residential slides are more recent. Near the lake, hinges, latches, rollers and fasteners rust, and the extra friction shows up at the operator.',
      'We start at the gate: hinges, posts, rollers, track and hardware, cleaning or replacing corroded parts so it moves freely by hand. Then the operator: board, limits, force and safety sensors. Where an older operator is obsolete we tell you plainly and explain the options, from a compatible board to a replacement operator. Driveway gate repair in Grapevine is about matching the fix to the age of the system rather than defaulting to new equipment.',
    ],
    faqs: [
      { q: 'Rust keeps coming back on our driveway gate near the lake. What helps?', a: 'Moisture is constant near the water, so treating rust once is not enough. Hinges, rollers and fasteners benefit from regular cleaning and lubrication, and replacing badly corroded hardware with corrosion-resistant parts slows the problem. We also check the operator enclosure seals so the same damp is not reaching the electronics inside.' },
      { q: 'Our driveway gate opens fine but will not close. Where should we look?', a: 'Start with the photo eyes. If they are blocked, dirty or knocked out of line, most operators will refuse to close for safety. Check for anything in the beam, wipe the lenses and see whether the gate responds. If it still will not close, the limits, the board or a hold-open command may be the cause, and we test those next.' },
    ],
  },
  'grapevine/sliding-gate-repair': {
    description: 'Sliding gate repair in Grapevine, TX: residential and commercial slides, rusted rollers, tracks, chains, limits and high-cycle wear by SH 114. Call Shield.',
    intro: 'Sliding gate repair in Grapevine for residential slides at homes and commercial slides on the busy entrances along the highway corridor. Rollers, track and chain come first, then the operator.',
    local: [
      'Grapevine has both kinds of slide gate. Residential slides sit at homes across the city, and near the lake their rollers, wheels and track hardware rust and stiffen. Commercial slides guard hotel, retail and service entrances along SH 114 and SH 121, where a gate may open and close all day, wearing wheels, guide rollers, chains and sprockets on cycle count. Sliding gate repair in Grapevine means knowing which pattern you are looking at, because a part that should last years on a home gate may be due within months on a busy entrance.',
      'We run the gate by hand along its full travel, check the track and wheels, the guide rollers and stops, then chain tension, sprockets and the operator limits and board. Corroded bearings and rollers are replaced and lubricated, and worn track sections replaced. On commercial slides we also check loops and access control, and can set a replacement interval for wear parts. We repair slides from Original Town to the commercial frontages on William D. Tate Ave.',
    ],
    faqs: [
      { q: 'Our slide gate near Grapevine Lake has become noisy and slow. Why?', a: 'Usually rust in the moving parts. Wheel bearings, guide rollers and chain all corrode in damp air, and each adds friction until the operator struggles. Lubricating a badly corroded bearing does not restore it. We inspect each moving part, replace what has seized or pitted, and lubricate the rest so the gate rolls freely again.' },
      { q: 'Can a slide gate keep running while waiting for a part?', a: 'Sometimes. If the fault is in a sensor or wear part that does not affect safety, the gate can often run with care until the part arrives. If it affects entrapment protection or the gate is dragging badly, it should be left secured or operated manually. We tell you which applies before we leave the site.' },
    ],
  },
  'grapevine/swing-gate-repair': {
    description: 'Swing gate repair in Grapevine, TX: wrought iron leaves on older homes, rusted hinges near the lake, operator arms, boards and limit settings. Call Shield.',
    intro: 'Swing gate repair in Grapevine for wrought iron swing gates on older homes, newer streets and lakeside lots. We check hinges, posts and hardware first, then the operator.',
    local: [
      'Wrought iron swing gates lead the residential mix in Grapevine, and the older housing stock means many of them have been hanging for a long time. Hinges wear, bushings flatten and leaves drop at the latch end. Near the lake, rust gets into hinge pins and operator brackets and adds friction through the swing. Older operators on these gates may have boards that are no longer made, so a swing gate repair in Grapevine often involves both the ironwork and a decision about the electronics.',
      'We check the leaf level, post plumb, hinges and brackets, freeing or replacing corroded hardware so the leaf swings easily by hand. Then come the operator arm, its mounting, the limits, force and safety sensors. A worn hinge or bushing is a simple fix, a rusted bracket can be replaced, and an obsolete board may lead to a compatible replacement or a new operator. We repair swing gates in Historic Grapevine Township, Heritage Oaks and around Silver Lake.',
    ],
    faqs: [
      { q: 'Our old swing gate in Grapevine has dropped and drags. Can it be saved?', a: 'Usually. Most drops come from worn hinges or bushings, or a post that has moved, and both can be corrected without replacing the gate. If the iron itself has rusted through at the bottom rail or a weld has cracked, that needs repair before the hang can be fixed. We assess the leaf and post together and explain what is needed.' },
      { q: 'How do I know if a swing gate operator is getting too old?', a: 'Signs include a discontinued board, parts that are hard to source, repeated failures and heavy wear on the arm or gearbox. Age alone does not settle it, since many operators run for a long time with sensible maintenance. We check parts availability and the condition of the drive and give you a straight comparison of repair and replacement.' },
    ],
  },
  'grapevine/gate-opener-repair': {
    description: 'Gate opener repair in Grapevine, TX: obsolete boards, remotes, keypads, receivers, limits and moisture-damaged controls near the lake. Call Shield.',
    intro: 'Gate opener repair in Grapevine for the controls side of a gate: remotes, keypads, receivers, boards and limit settings. We test each input before deciding the board has failed.',
    local: [
      'Grapevine’s older properties mean many gate openers here carry boards from earlier generations, some now discontinued, and receivers that predate modern remotes. Lakeside openers have a further problem: damp gets into keypads and control boxes, corrodes terminals and creates commands that come and go. On commercial and managed entrances, keypads and card readers see heavy use and weathering. Gate opener repair in Grapevine usually means working out whether a control is worn out, wet or simply out of adjustment, and each of those has a different fix.',
      'We start at the input that failed. Remotes are checked against the receiver, keypads at their terminals, then the board inputs, safety circuits and limits. A stuck input or blocked photo eye can freeze every command, so we rule those out before blaming the board. Where an old board is obsolete, a compatible replacement board or an updated receiver can keep the operator going. We repair openers in Original Town, Dove Creek and along SH 26 Ira E. Woods Ave.',
    ],
    faqs: [
      { q: 'Our keypad near the lake works one day and not the next. Why?', a: 'Moisture inside the keypad or at its wiring is the usual culprit. Damp corrodes the contacts and terminals, and the keypad sends nothing or a garbled code until it dries. We open it, check the contacts and the wiring at both ends, clean or replace what has corroded and seal it. If the keypad itself is past repair we fit a weather-rated replacement.' },
      { q: 'Can we get new remotes for an old gate opener?', a: 'Often, yes. If the existing receiver is still supported, compatible remotes are available. If it is obsolete, an aftermarket receiver can be wired into the board inputs and paired with current remotes, which keeps the operator in service. We check what your opener has and recommend the simplest option that works.' },
    ],
  },
  'grapevine/gate-motor-repair': {
    description: 'Gate motor repair in Grapevine, TX: capacitors, gearboxes, thermal cutouts and worn motors on older operators and busy commercial gates. Call Shield.',
    intro: 'Gate motor repair in Grapevine for operators that stall, hum, overheat or quit after a few cycles. We test the motor, capacitor, gearbox and thermal cutout separately before recommending a part.',
    local: [
      'Two things wear out gate motors in Grapevine. On older homes the operators have often run for many years, and capacitors, bearings and gearboxes reach the end of their life together. On commercial entrances by the hotel and retail corridor, motors work through far more cycles per day than a driveway gate ever sees, generating heat that ages windings and trips thermal cutouts on warm afternoons. Moisture near the lake adds corroded motor terminals and rust on output shafts, which raise the load further.',
      'We move the gate by hand to rule out drag, then test the capacitor on AC motors, current draw, windings, thermal cutout, gearbox and output shaft. A failed capacitor or corroded terminal is a quick repair, a worn gearbox can sometimes be rebuilt, and a burnt-out motor on a discontinued operator may make replacement the better route. On commercial gates we look at whether the operator is right for the traffic. We repair gate motors in Heritage Oaks, Silver Lake and along SH 121.',
    ],
    faqs: [
      { q: 'Our commercial gate motor in Grapevine shuts off every afternoon. Why?', a: 'High cycle counts and heat. A busy entrance runs the motor repeatedly, and when the ambient temperature is high the thermal cutout trips to protect the windings. A binding gate makes it worse. We check the gate for drag, measure motor current and compare the duty rating of the operator with the traffic. Sometimes the answer is maintenance, sometimes a heavier-duty operator.' },
      { q: 'Can a gate motor be repaired, or does it always need replacing?', a: 'It depends on what failed. Capacitors, terminals, thermal cutouts and some gearbox parts are replaceable on their own. A motor with burnt windings is usually replaced, and if the operator is old and parts are scarce, replacing the whole operator may be more sensible. We test each part and tell you which applies.' },
    ],
  },
  'grapevine/emergency-gate-repair': {
    description: 'Emergency gate repair in Grapevine, TX, 24/7: gates stuck open or shut, vehicle strikes, storm damage and failed barrier arms at busy entrances. Call Shield.',
    intro: 'Emergency gate repair in Grapevine when a gate or barrier arm is stuck open, stuck shut, struck by a vehicle or knocked out by a storm. We answer around the clock and make the entrance safe first.',
    local: [
      'Emergencies in Grapevine look different depending on where the gate is. On a commercial or hotel entrance by SH 114 or SH 121, a barrier arm stuck down or a slide stuck shut means vehicles queueing and staff or guests unable to get in or out. Vehicle strikes on busy entrances bend arms, leaves and posts. At homes, a storm can kill a board, a receiver or a loop detector without warning, and lakeside properties also see intermittent faults turn into total failures in heavy rain.',
      'We make the gate safe and usable first: release the operator, secure or open the gate, or raise and lock a barrier arm so traffic flows. Then we diagnose and repair what we can on the visit, from storm-hit boards and receivers to damaged loops. Bent arms, leaves and posts may need a temporary fix until fabrication or parts are arranged, and we tell you clearly which parts of the fix are temporary. Emergency gate repair in Grapevine covers homes and commercial sites across 76051.',
    ],
    faqs: [
      { q: 'A vehicle hit our barrier arm at the parking entrance. What should we do?', a: 'Keep people clear of the damaged arm and the operator, and if possible switch the operator off, because a bent arm or damaged mount can swing or drop unexpectedly. Call and describe the damage. We secure the arm or remove it so traffic can move, check the operator and loop for damage, and arrange a replacement arm if one is needed.' },
      { q: 'Our gate stopped after a thunderstorm. Is it worth resetting the power first?', a: 'Yes, safely. Switch the operator off at its breaker or switch, wait a little, and turn it back on, since some boards recover from a surge that way. If the gate still does nothing, or you smell burning or see scorch marks, leave it off and call. A surge can damage the board, receiver and loop detector together, and each needs testing.' },
    ],
  },
  'grapevine/commercial-gate-repair': {
    description: 'Commercial gate repair in Grapevine, TX for hotels, retail, apartments and HOAs: barrier arms, loops, access control and high-cycle slides. Call Shield.',
    intro: 'Commercial gate repair in Grapevine for hotel, retail, multi-family, HOA and industrial entrances. We look at operators, barrier arms, loops and access control together, because on a busy site they fail together.',
    local: [
      'A quarter of Grapevine’s land area is the airport, and beside it runs a hotel, hospitality and retail corridor along SH 114 and SH 121. Entrances there run all day, so commercial slides and barrier arms wear on cycles rather than years. Managed parking entrances add loop and barrier faults: cracked loops, detectors that drift, arms that will not raise or drop. Elsewhere in the city, apartment communities and HOA entrances bring their own access control systems and steady resident traffic.',
      'We diagnose the entrance as a system: access control first, then loops and detectors, then safety devices, then the operator or barrier and its drive. Many repeated faults on commercial gates are loops and detectors rather than operators. For busy sites we can set a planned replacement schedule for wear parts so failures happen on your timetable, not at peak traffic. We work with property managers on timing and access. Commercial gate repair in Grapevine covers sites from William D. Tate Ave to the highway corridor.',
    ],
    faqs: [
      { q: 'Our hotel’s barrier arm keeps raising on its own. What causes it?', a: 'Usually a loop or detector problem. A cracked loop, moisture in the lead-in or a detector that has drifted in sensitivity can register a vehicle when none is there, and the arm raises. Less often it is a stuck input from the access system. We test the loop and detector, check the access control inputs and repair whichever is causing it.' },
      { q: 'Can you work on our entrance without shutting the site down?', a: 'In most cases. We plan the repair so the entrance can stay usable, for example by holding a barrier up or a gate open under supervision while we work, or by scheduling heavier work at quieter times. We coordinate with your manager on timing so tenants, guests and deliveries are disrupted as little as possible.' },
    ],
  },
  'grapevine/residential-gate-repair': {
    description: 'Residential gate repair in Grapevine, TX: driveway, side, pedestrian and pool gates, rusted latches near the lake and sensors for kids and pets. Call Shield.',
    intro: 'Residential gate repair in Grapevine for every gate at your home: driveway, side yard, pedestrian and pool gates. We repair how each gate closes and latches, with safety for children and pets in mind.',
    local: [
      'Grapevine homeowners have a wide range of gates to deal with. Older homes in Original Town and the College Street Historic District often have side and pedestrian gates of different ages from the driveway gate. Lakeside homes near Grapevine Lake have hardware that rusts quickly in damp air, and a self-closing hinge or latch that has corroded stops doing its job. Newer streets such as Heritage Oaks have automated driveway gates whose safety sensors and settings need to stay right as the gate wears.',
      'We check every gate for how it closes and latches as well as how it opens. Side and pool gates should swing shut and catch from any position. Automated gates need working photo eyes, contact edges and correct force so they reverse on contact with a child, a pet or a car. Hinges, latches, closers, posts and operator settings are the usual repairs. Residential gate repair in Grapevine is mostly about making sure every gate behaves predictably for the family.',
    ],
    faqs: [
      { q: 'Our pool gate near the lake no longer closes by itself. Is that urgent?', a: 'Yes. A pool gate that does not self-close and latch is a safety problem for children and pets. Near the lake, corroded self-closing hinges and latches are a common cause, along with a post or leaf that has moved. We repair or replace the closer and latch with corrosion-resistant parts, check it closes and catches every time, and confirm what the city requires for pool barriers.' },
      { q: 'Can a pedestrian gate be added beside our automated driveway gate?', a: 'Usually, yes. A pedestrian gate saves running the driveway gate for people on foot, which reduces wear and keeps people out of the vehicle path. We look at post positions, latch and lock options, and whether it should tie into the keypad or intercom, and we confirm what your HOA requires.' },
    ],
  },
  'grapevine/automatic-gate-installation': {
    description: 'Automatic gate installation in Grapevine, TX: sealed enclosures near the lake, older lot layouts, commercial duty ratings and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Grapevine, planned around lakeside moisture, older property layouts and the heavier duty that commercial entrances demand from an operator.',
    local: [
      'Installing a gate in Grapevine means planning for the conditions behind most of the city’s later repairs. Near the lake, enclosures need to keep moisture out, or the terminal corrosion and intermittent faults common around the water will follow. On older properties in the historic township, lot layouts, mature landscaping and existing walls shape where a gate and operator can go. On commercial entrances along the SH 114 and SH 121 corridor, the operator has to be rated for constant cycling.',
      'We plan from the site: gate type and weight, clearances, power route and conduit, footing sizes for the soil, and the duty rating of the operator against expected traffic. Enclosures are sealed and mounted above standing water, and connections protected. Safety follows UL 325 and ASTM F2200, with photo eyes and edges at the right points. We confirm what the city and your HOA require, including any historic district considerations, before work begins. That covers installations from Dove Creek to Heritage Oaks.',
    ],
    faqs: [
      { q: 'Are there extra rules for gates in Grapevine’s historic districts?', a: 'There may be. Properties in historic districts can have design review requirements that newer neighborhoods do not, and HOAs elsewhere have their own rules. We do not assume. We confirm what the city and your HOA require for your address before finalizing the design, so the gate is approved before installation rather than questioned afterwards.' },
      { q: 'How do you choose an operator for a commercial entrance?', a: 'By the traffic and the gate. We estimate cycles per day at peak, weigh the gate and check its length, then choose an operator rated for that duty with margin to spare. A residential operator on a busy entrance fails early. We also plan loops, access control and safety devices as part of the same installation.' },
    ],
  },
  'grapevine/electric-gate-installation': {
    description: 'Electric gate installation in Grapevine, TX: sealed wiring and enclosures near the lake, conduit, transformers, loops and surge protection. Call Shield.',
    intro: 'Electric gate installation in Grapevine with the power side built for lakeside damp and storm surges: sealed connections, conduit, properly sized transformers and surge protection from the start.',
    local: [
      'Many of the electrical faults traced on Grapevine gates start with installation details. Near Grapevine Lake, damp reaches unsealed splices, terminal strips and junction boxes, and intermittent faults follow. On older properties, new gate power often has to share ageing household circuits or route around established landscaping and walls. On commercial and managed parking entrances, loops cut into heavily used pavement and long lead-ins are exposed to water, traffic and wear, so they need more protection than a home driveway loop.',
      'We plan the electrical route first: supply and circuit, transformer size and location, conduit for every low-voltage and loop run, sealed splices, and enclosures mounted where water will not sit. Loops are cut and sealed to suit the pavement, with lead-ins protected. Surge protection goes on the supply and on the loop and keypad leads. Every safety device is wired in and proven to UL 325, and the city and HOA requirements for the electrical work are confirmed first, from Original Town to the SH 121 frontages.',
    ],
    faqs: [
      { q: 'What makes an electric gate installation hold up near the lake?', a: 'Keeping water out of every connection. That means conduit rather than direct-buried cable where practical, sealed splices, enclosures with good gaskets mounted above ground level, and drip loops on cables entering boxes. Those details add little to an installation and prevent the corrosion that causes most intermittent faults on lakeside gates.' },
      { q: 'Do electric gates in Grapevine need surge protection?', a: 'We fit it as standard practice. Thunderstorms in North Texas put surges into supply lines and into the long low-voltage runs to loops and keypads, and a gate board is vulnerable. Protection on the supply and the leads is modest insurance compared with replacing a board, receiver and loop detector after a storm.' },
    ],
  },
  'grapevine/sliding-gate-installation': {
    description: 'Sliding gate installation in Grapevine, TX: residential and commercial slides, track footings, corrosion-resistant rollers and UL 325 safety. Call Shield.',
    intro: 'Sliding gate installation in Grapevine for homes and commercial entrances. We plan the track, footings, hardware and operator for the site, from damp lakeside lots to busy highway-corridor entrances.',
    local: [
      'Slides in Grapevine fall into two groups. Residential slides suit homes where a swing leaf lacks room, and near the lake their wheels, rollers and track hardware need to resist rust. Commercial slides protect hotel, retail and industrial sites along SH 114 and SH 121, where the gate may cycle constantly and the operator, chain and rollers must be chosen for that duty. Both need enough run-back room along the fence line and a solid footing for the track or cantilever posts.',
      'We measure the opening and run-back, choose a ground track or cantilever design, size the footings and specify corrosion-resistant hardware where moisture is a factor. The operator is matched to the weight of the gate and the traffic. Installation follows UL 325 and ASTM F2200: guarded rollers, screened gaps, positive stops, photo eyes and edges. On commercial entrances we plan loops and access control together with the gate. We confirm what the city and your HOA require before work begins.',
    ],
    faqs: [
      { q: 'Is a cantilever slide better for a Grapevine commercial entrance?', a: 'Often. A cantilever gate has no ground track to collect debris or be damaged by traffic, and it rides on rollers mounted at the posts, which suits a busy entrance. It needs a longer gate frame and strong post footings. For some sites a heavy-duty track gate is still the better fit. We assess the opening, traffic and space before recommending one.' },
      { q: 'What do you need from us before a slide gate installation?', a: 'Access to the site, an idea of who uses the gate and how often, and any HOA or property management requirements. Where power is available matters, as do any underground utilities. We measure and mark everything, then go through the design, safety features and controls with you before any work starts.' },
    ],
  },
  'grapevine/swing-gate-installation': {
    description: 'Swing gate installation in Grapevine, TX: wrought iron leaves, footings, rust-resistant hinges near the lake, operator sizing and UL 325 sensors. Call Shield.',
    intro: 'Swing gate installation in Grapevine for wrought iron driveway gates and pedestrian gates. Posts, footings and hardware are planned for the site so the gate stays level and rust stays out of the hinges.',
    local: [
      'Wrought iron swing gates are the leading residential type in Grapevine, and they suit both the historic township streets and newer neighborhoods. Two local factors shape the installation. Near Grapevine Lake, hinges, brackets and fasteners face constant damp, so hardware choice and finish matter. On older properties, existing walls, trees and drive layouts limit where hinge posts and operators can go, and the swing path has to clear steps, cars and landscaping.',
      'We set hinge posts on footings sized for the leaf and the soil, specify sealed or corrosion-resistant hinges where moisture is a factor, and choose an operator rated for the leaf length and weight. Arms are positioned for a full swing within the space available. Photo eyes and edges follow UL 325 and ASTM F2200. We confirm what the city and your HOA require, including any historic district design questions, before work starts. We install swing gates from Original Town to Silver Lake.',
    ],
    faqs: [
      { q: 'What hardware lasts best on a swing gate near the lake?', a: 'Hardware made to resist corrosion: galvanized or stainless fasteners, sealed bearing hinges and a well-prepared, properly coated finish on the iron. Cheaper hinges and plain steel fasteners rust quickly in damp air and add friction that the operator then has to fight. We specify hardware for the conditions and show you what basic maintenance keeps it in good shape.' },
      { q: 'Can a swing gate be automated later if we install it manually now?', a: 'Yes, if it is planned for. We can set posts and footings strong enough for an operator, lay conduit for power and controls, and leave mounting points so automation can be added without rework. That saves digging up the drive or replacing posts when you decide to automate the gate.' },
    ],
  },
  'grapevine/gate-opener-installation': {
    description: 'Gate opener installation in Grapevine, TX: AC and DC operators, sealed controls near the lake, keypads, remotes, loops and UL 325 setup. Call Shield.',
    intro: 'Gate opener installation in Grapevine for homes and commercial entrances, with the operator matched to the gate and the controls sealed and positioned for local conditions.',
    local: [
      'Choosing an opener in Grapevine starts with three questions: how heavy and long the gate is, how often it will run, and how close it sits to the lake. Older homes may be replacing an operator whose board is no longer made, and the new one has to fit the existing gate and mounting. Lakeside gates need control boxes and keypads that keep out moisture. Commercial entrances near SH 114 and SH 121 need operators built for high cycle counts, often with loops and barrier integration.',
      'We fit an operator rated for the gate and traffic, then the controls: remotes, a weather-resistant keypad, the receiver positioned for range, and any telephone entry, card reader or exit loop needed. Limits and force are set to the gate, safety devices installed and tested to UL 325, and the manual release explained. We confirm what the city and your HOA require. Gate opener installation in Grapevine covers homes in Dove Creek and Heritage Oaks and commercial sites across 76051.',
    ],
    faqs: [
      { q: 'Our old opener’s board is obsolete. Should we replace the whole opener?', a: 'Sometimes a compatible replacement board keeps the existing operator going, and that is worth checking first. If the drive is also worn, or no compatible board exists, a new opener is the better use of money. We test the motor and drive, check the board options and give you a straight comparison before you decide.' },
      { q: 'Which controls make sense for a gate used by family and visitors?', a: 'Remotes for the household, a keypad with separate codes for visitors or services, and an exit loop or push button so the gate opens on the way out without a remote. A telephone entry or intercom suits gates set back from the house. We set it up around how people actually arrive and leave.' },
    ],
  },
}
export default copy
