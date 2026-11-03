const copy: Record<string, { description: string; intro: string; local: string[]; faqs: { q: string; a: string }[] }> = {
  'keller/viking': {
    description: 'Viking gate repair in Keller, TX: K-2 slide and T-21 swing operators, batteries, limits and heavy-gate binds on clay-set posts. Call Shield.',
    intro: 'Viking gate repair in Keller, TX, for the DC slide and swing operators hung on heavier iron gates at private drives and gated village entrances. We test the battery, the limits and the gate itself first.',
    local: [
      'Keller housing is younger than its neighbours, so a Viking here is more likely to be mid-life than worn out. What we look for instead is the gate putting load on it. Viking operators get specified for heavy iron, and Keller sits on clay that swells and shrinks with the seasons, so a hinge post that leans a little each summer turns a smooth leaf into a binding one. The Viking reads that extra effort as an obstruction and stops or reverses, which owners take for a controller fault.',
      'Most Keller Viking gate opener repair work is batteries, limits and gate alignment rather than gearboxes. Older K-2 slide units without the position sensor can lose their limits after a complete power loss, and relearning them is the fix. Swing units such as the T-21 use mechanical limit switches that drift. Around Hidden Lakes, Marshall Ridge and the drives off Bear Creek Pkwy, we square the gate by hand before resetting anything on the board.',
    ],
    faqs: [
      { q: 'Our Keller gate has a Viking and the post has moved in the clay. How do I know which one is causing the stalls?', a: 'Release the operator and move the gate by hand. If it drags, sticks at one point or swings back on its own, the gate is the problem and the Viking is only reporting it. If it moves freely and the operator still stalls, we look at the battery under load, the charger and the limit settings next.' },
      { q: 'Do Viking batteries need replacing on a schedule?', a: 'They are consumables, and Viking’s own warranty covers them for a shorter term than the operator. North Texas heat shortens their life further. Rather than a fixed calendar, we load test them on each visit, because a battery can read fine at rest and still drop away the moment the motor starts.' },
    ],
  },
  'keller/faac': {
    description: 'FAAC gate repair in Keller, TX: 400 and 402 hydraulic swing arms, 844 slide units, seal kits, fluid and 455 D boards on iron gates. Call Shield.',
    intro: 'FAAC gate repair in Keller for hydraulic swing operators and the electromechanical 844 slide unit. Hydraulic faults are pressure and seal faults, and we diagnose and repair them on site instead of quoting a different brand.',
    local: [
      'A FAAC on a Keller wrought iron swing gate is a different machine from the chain drives most technicians see. The motor runs a pump, and pressure moves the ram. Because much of Keller was built from the late 1990s on, a FAAC 400 or 402 fitted then has had long enough for seals to start weeping and fluid to drop. The gate gets slower, then weaker, then stops short of closed. That is pressure loss, not a dead motor.',
      'Repair is nearly always the right call. We check fluid level and condition, test pressure against FAAC figures, then reseal or adjust. The 455 D board used with the hydraulic swing arms is a known failure point on older installs and swaps cleanly. On a FAAC 844 slide gate we check the clutch and limit switches along with the rack and rollers. In Highland Oaks or Bourland Oaks the hinge post matters too, since clay movement adds load the ram has to fight.',
    ],
    faqs: [
      { q: 'Why is my FAAC gate in Keller slow on cold mornings?', a: 'Hydraulic fluid thickens as it cools, so some slowdown on a cold North Texas morning is normal and should clear once the day warms. If the gate stays slow into the afternoon, or the difference between seasons has become large, the fluid may be past its service life or the seals may be leaking, and we test both.' },
      { q: 'The release key on my FAAC is leaking oil. Is that serious?', a: 'It is a real fault. On FAAC hydraulic operators the manual release is a keyed bypass valve, and the valve itself wears. Once it weeps, the system loses fluid, and pressure follows. We service or replace the valve, top up and bleed the system, and set pressure so the leaf closes firmly again.' },
    ],
  },
  'keller/us-automatic': {
    description: 'US Automatic gate repair in Keller, TX: Patriot and Ranger battery operators, solar panels, chargers and charge controllers. We test power first. Call Shield.',
    intro: 'US Automatic gate repair in Keller, TX, on Patriot and Ranger operators charged by solar panel or a low-voltage charger. These are battery systems first, so the battery and charging side get tested before the motor.',
    local: [
      'Every US Automatic operator runs its motor from a battery, whether a panel or a plug-in charger refills it. In Keller that matters on drives where the gate sits back from the house, or on side gates where trenching power was never worth it. Keller summers are hard on sealed lead-acid batteries, more so in an enclosure facing full sun, and a tired battery mimics a failing operator: slow travel, stalls, opening but refusing to close.',
      'We work in a fixed order. Battery under load, then panel output or charger, then the charge controller, then connections, and only then the Patriot or Ranger board and arm. Panels are worth checking for shade, since trees planted with the newer houses in Harmonson Farms or Saddlebrook Estates have had two decades to grow. A gate dragging on a post that has moved in the clay also drains the battery faster, so we fix that too.',
    ],
    faqs: [
      { q: 'My US Automatic gate in Keller works all summer and quits in January. Why?', a: 'Winter gives the panel shorter days and a lower sun, and cold cuts the usable capacity of the battery at the same moment. A system that only just kept up in July will fall behind. That is a sizing question, answered with a larger battery, a better placed or larger panel, or both, rather than a new operator.' },
      { q: 'Can I switch my US Automatic from solar to a plug-in charger?', a: 'Often. The operator runs from its battery either way, so AC charging means swapping the panel for a low-voltage charger fed from an outlet. The charger lead can run a long way, so mains power does not need to reach the gate itself. If no outlet is practical, resizing the solar side is usually simpler.' },
    ],
  },
  'keller/apollo': {
    description: 'Apollo gate repair in Keller, TX: 1550 and 1650 swing openers, 816 actuators, 12V batteries, solar charging and 835/836 boards. Call Shield.',
    intro: 'Apollo gate repair in Keller for 1550 single and 1650 dual swing openers on 12-volt power, with solar or a plug-in charger. We name the board generation and test the battery while the gate runs.',
    local: [
      'Apollo, now sold under Nice, makes light 12V linear actuators, so in Keller you find them on residential swing gates, side gates and smaller iron leaves rather than heavy entrances. The design draws little power, which suits solar, but it leaves no margin. A battery worn by Keller summers, a panel shaded by a maturing tree, or a corroded terminal in the steel box will produce the classic Apollo complaint: the gate moves a few feet and stops or reverses.',
      'Before changing a setting we open the box and identify the board: 833/834 on early units, 835/836 on the ETL versions, or the 1050 on the 1K models, since each programs differently. We check the 816 actuator limit wiring with a meter, then the hinges and pivot arm. Where an old actuator is past saving, distributors describe the TITAN 12L as a bolt-in replacement. We cover gates from Old Town Keller out to US-377.',
    ],
    faqs: [
      { q: 'Does Keller clay affect a small Apollo swing gate?', a: 'It can. The actuator pushes and pulls the whole leaf from one pivot point, so a hinge post that has leaned with the soil changes the geometry and adds load. The 12V system has little reserve, so it stalls and reverses. We check that the gate swings freely and that the pivot arm still sits level with the gate bracket.' },
      { q: 'How should an Apollo battery be tested?', a: 'Under load, with the gate moving. Apollo wants roughly 12 to 14 volts while the actuator is working, and a worn battery can read healthy at rest and sag as soon as the motor draws current. We measure it during travel, then check the solar panel or charger is actually putting enough back in.' },
    ],
  },
  'keller/ramset': {
    description: 'Ramset gate repair in Keller, TX: RAM 100 and RAM 1000 slide operators on busy gated village and business entrances. Chains, limits, relays. Call Shield.',
    intro: 'Ramset gate repair in Keller for the RAM 100 and RAM 1000 slide operators, on entrances that cycle far more than a single home driveway. We look for why a part failed, not only which part failed.',
    local: [
      'Ramset sells the RAM 100 and RAM 1000 for residential and light commercial gates, and in Keller the punishing installs are the shared ones. Hidden Lakes alone runs five gated villages, each with its own entrance, and a gate serving a whole street wears its chain, sprockets and limit switches on cycle count rather than age. A newer Keller install can therefore show wear that would look alarming on a private drive and is ordinary here.',
      'The warning sign is the same part failing again. That points to an operator running past the duty it was chosen for, or a gate that has started to drag on worn rollers or a post shifted by clay. We check the gate by hand, measure the real traffic, and only then talk about a heavier unit. Entrances off Keller Pkwy or Davis Blvd also get the loop detector and keypad checked, since those often cause the fault.',
    ],
    faqs: [
      { q: 'Our Keller village gate keeps losing its chain. Is the Ramset faulty?', a: 'Rarely. Repeat chain failure on a shared entrance almost always means the gate is pulling harder than it should or the operator is doing more cycles than it was specified for. We check roller and track condition, chain tension and sprocket alignment, then compare the traffic against the unit, so the next chain lasts.' },
      { q: 'Should our HOA keep spare Ramset parts on hand?', a: 'For an entrance where a stuck gate shuts out every resident, it can make sense. Chains, sprockets and limit switches are the items that wear on high-cycle gates, and having them stored nearby shortens a repair. Control boards and relays are usually a short order. We can suggest a sensible short list for your entrance.' },
    ],
  },
  'keller/automatic-gate-repair': {
    description: 'Automatic gate repair in Keller, TX for gated village entrances, wrought iron swing and residential slide gates. Access, loops and limits tested. Call us.',
    intro: 'Automatic gate repair across Keller, TX, from private swing and slide gates to the shared entrances of gated villages. We test the operator, its safety devices and the access system before deciding what failed.',
    local: [
      'Keller is newer than the towns around it. The median home dates to 1999 and close to a third were built in the following decade, so most automatic gates here are younger and the motors usually have life left. Calls lean toward access and setup: a keypad that stopped taking codes, a remote no longer learned, a loop crushed when an entrance was resurfaced, or safety sensors and limits that drifted on a newer operator.',
      'Our Keller automatic gate repair follows a set order. Gate by hand first, because clay movement at posts in places like Marshall Ridge can make a good operator stall. Then the safety inputs and photo-eyes, the limits, the receiver and keypad, the loop detector, and last the board and motor. Replacing an operator is a conclusion, not a starting point, and we say plainly when a repair is the better value.',
    ],
    faqs: [
      { q: 'Why do newer Keller gates still have problems?', a: 'Because most faults on a younger gate are not wear. Limits and photo-eyes shift as a gate settles on its hinges, credentials fall out of a panel after a power cut, and entrance loops get damaged by paving work. None of that means the operator is failing, and most of it is corrected by adjustment or reprogramming.' },
      { q: 'Can I open my automatic gate if it stops?', a: 'Almost every operator has a manual release, a key or lever on the arm or housing that lets you move the gate by hand. Use it with the power off where possible and keep clear of the leaf. We show you where yours is during the visit so a failed gate does not trap a car.' },
    ],
  },
  'keller/electric-gate-repair': {
    description: 'Electric gate repair in Keller, TX: dead gates, wiring breaks, transformers, surge-damaged boards and loop detectors under resurfaced entrances. Call Shield.',
    intro: 'Electric gate repair in Keller for the power side of a gate: supply, transformer, low-voltage wiring, boards and loop detectors. A dead or erratic gate gets traced from the outlet to the operator.',
    local: [
      'Electric faults in Keller fall into two groups. On private drives, buried low-voltage runs laid with the house get nicked by irrigation and landscaping work as yards mature, and splices that were never sealed corrode. At the gated village entrances, the electrical problem is often under the road: loops cut or crushed when an entrance is resurfaced, which makes a gate open on its own or ignore a waiting car.',
      'We start at the supply and work out. Voltage at the outlet or breaker, the transformer output, the low-voltage run with a continuity test, then the board, receiver and loop detector. A North Texas storm can take out several of those at once, so each one is tested on its own and you pay only for what failed. Where surge protection was left out on entrances along Bear Creek Pkwy or in Hidden Lakes, we can add it to the supply and loop leads.',
    ],
    faqs: [
      { q: 'Our Keller entrance was repaved and now the gate opens by itself. Electrical fault?', a: 'Very likely the vehicle loop. It is a wire buried in the road surface, and paving, milling or trenching can break it or damage its lead-in. A broken loop can read as a car constantly present, or never present. We test the loop and detector, and if the loop is damaged, a new one is cut into the surface.' },
      { q: 'What does a surge protector on a gate actually protect?', a: 'It sits on the power supply and, ideally, the loop and keypad leads, and diverts a voltage spike before it reaches the control board. It will not save a gate from a direct strike, but it reduces damage from nearby lightning and grid surges, which is the common storm call. It is a small addition during any electrical repair.' },
    ],
  },
  'keller/driveway-gate-repair': {
    description: 'Driveway gate repair in Keller, TX for private homes: wrought iron swing pairs, slide gates, sagging leaves and posts moved by clay soil. Call Shield.',
    intro: 'Driveway gate repair for private homes across Keller. When the gate across your drive stops, the car is stuck in or out, so we make it safe and usable first, then fix the real cause.',
    local: [
      'Most Keller driveway gates are wrought iron, either a pair of swing leaves meeting in the middle or a single slide gate across the drive, and many went in with homes built from the late 1990s through the 2000s. Two decades on, the clay under the posts has had plenty of wet and dry seasons to move them. A leaf that once met its partner cleanly now lands low or early, and an operator that was fine starts stalling.',
      'On a Keller driveway gate we look at the post, hinges and leaf alignment before the operator. On swing pairs we reset the leaf delay so the gates do not collide, and adjust force and limits after any hinge work. On slide gates we check rollers, track and the drive. Homeowners in Bourland Oaks, Highland Oaks and the streets off Davis Blvd get a clear choice between straightening the gate and fitting a stronger operator.',
    ],
    faqs: [
      { q: 'My Keller driveway gate leaves no longer line up. What happened?', a: 'Usually a post or hinge column has shifted. Keller sits on expansive clay that swells after rain and shrinks in summer, and a heavy iron leaf on a moving post slowly drops out of line. We reset or reinforce the hinge side, re-hang the leaf if needed, then reset limits so both leaves close together.' },
      { q: 'Is it safe to leave my driveway gate on manual for a while?', a: 'Yes, as long as the operator is properly released and the gate is secured when closed, with a chain or drop rod if it will not latch on its own. Do not reconnect the operator halfway through travel. If you are unsure how your release works, we can show you during the visit.' },
    ],
  },
  'keller/sliding-gate-repair': {
    description: 'Sliding gate repair in Keller, TX: tracks, rollers, chains, guide wheels and slide operators on homes and gated village entrances. Call Shield Gate Repair.',
    intro: 'Sliding gate repair in Keller on the track, rollers, chain and slide operator. Most faults on a slide gate start in the hardware it rides on, so we check that before the motor.',
    local: [
      'Residential slide gates are one of the main gate types in Keller, alongside swing gates and village entrances. A slide gate has a lot of moving parts at ground level: V-groove wheels on a track, guide rollers at the top, a chain or rack along the frame. In Keller the ground itself is part of the problem, since a concrete track pad on clay can tilt or crack, and debris in the track makes the gate stick.',
      'For Keller sliding gate repair we push the gate by hand on its release first and feel for drag, then inspect wheels, track, guide rollers and chain tension. Worn wheels and a stretched chain are the common finds. Limits and photo-eyes get reset once the gate rolls clean. If a slide operator in Saddlebrook Estates or near Keller Town Center keeps tripping, the gate is checked for weight and alignment before any talk of replacement.',
    ],
    faqs: [
      { q: 'My slide gate in Keller jumps off its track. Why?', a: 'A worn or wrong-sized wheel, a bent track or a guide roller that no longer holds the top of the gate are the usual causes. Ground movement under the track pad can also lift one end. We replace worn wheels and rollers, straighten or reset the track, and confirm the gate rolls the full length without binding.' },
      { q: 'How tight should a slide gate chain be?', a: 'Firm, with a little sag, not drum tight. Too loose and it jumps sprockets or slaps the frame. Too tight and it loads the operator bearings and wears sprockets. We set tension with the gate in the middle of its travel, check the idlers line up, and replace a chain that has stretched too far to adjust.' },
    ],
  },
  'keller/swing-gate-repair': {
    description: 'Swing gate repair in Keller, TX: wrought iron leaves, hinges, operator arms, limits and posts shifted by clay at homes and village entrances. Call Shield.',
    intro: 'Swing gate repair in Keller for single and double wrought iron leaves and the arms that drive them. A swing gate puts its weight on one hinge post, and that is where we start.',
    local: [
      'Wrought iron swing gates are common in Keller, on private drives and on the gated entrances in subdivisions like Hidden Lakes. Every swing leaf hangs its weight from a single post, and the clay here swells and shrinks enough to move that post over a few seasons. The leaf drops, drags at the end of travel or stops short of the stop, and the arm operator pushes harder each cycle until something gives.',
      'We check hinge wear and post plumb first, then the arm, its brackets and pivot points, then limits, force settings and photo-eyes. On paired leaves we reset the delay so they meet in sequence. Worn hinges and loose brackets are inexpensive; a cracked post footing is a bigger job and we explain why before quoting. Swing gate repair in Keller, from Marshall Ridge to Harmonson Farms, follows that same order.',
    ],
    faqs: [
      { q: 'My swing gate in Keller sticks only in summer. Why?', a: 'Clay shrinks as it dries, and a post set in it can lean slightly through a hot, dry spell, then recover after rain. That seasonal movement changes where the leaf lands. If the sticking follows the weather, we look at the post and hinge side and set the gate up with enough clearance to cope.' },
      { q: 'Can a sagging swing gate be fixed without replacing it?', a: 'Usually. Sag comes from worn hinges, a post that has moved, or a frame that has flexed. We replace hinges, re-plumb or reinforce the post, and add bracing or a wheel where the leaf is long. Once it swings freely, the operator limits and force are reset, and a straight gate is easier on the operator too.' },
    ],
  },
  'keller/gate-opener-repair': {
    description: 'Gate opener repair in Keller, TX: remotes, keypads, receivers, control boards and limit settings at private drives and gated village entrances. Call Shield.',
    intro: 'Gate opener repair in Keller for the parts that tell a gate what to do: remotes, keypads, receivers, control boards and limits. When the gate is fine but will not respond, the fault is here.',
    local: [
      'Gate opener problems are the typical Keller call. Housing here is newer than its neighbours, so motors tend to be healthy, and what breaks is the control side. Hidden Lakes runs five gated villages with their own entrances, where residents get in by remote or keypad code. When half a street can get in and half cannot, the opener is working and the fault sits in the receiver, the keypad or the list of credentials.',
      'Our Keller gate opener repair begins with the inputs: does the board see the remote, the keypad, the push button and the safety devices? A stuck input or blocked photo-eye locks out everything else. Then we check receiver range and antenna, reprogram remotes and codes, and reset limits that have drifted on newer operators. Board replacement comes last, after those are ruled out. Homes off FM 1709 Keller Pkwy get the same sequence.',
    ],
    faqs: [
      { q: 'Some remotes work at our Keller entrance and others do not. Why?', a: 'The gate is fine. The panel or receiver either has lost part of its stored list, has reached its memory limit, or is reading certain remotes on a different frequency or format. We read what is stored, clear dead entries, relearn the working remotes, and check the antenna if range is poor.' },
      { q: 'My gate opener only works when I am right next to it. Is the remote failing?', a: 'Try a new battery first. If range is still short, the receiver antenna may be damaged, disconnected or shielded by a metal enclosure, or a nearby source may be interfering. We test with a known good remote, check the antenna and coax, and relocate the antenna if it sits inside metal.' },
    ],
  },
  'keller/gate-motor-repair': {
    description: 'Gate motor repair in Keller, TX: humming motors, capacitors, gearboxes, thermal cutouts and DC motor wear on slide and swing gates. Call Shield.',
    intro: 'Gate motor repair in Keller for the motor, capacitor, gearbox and thermal cutout inside an operator. When a gate hums, grinds or quits after a few cycles, the drive is where we look.',
    local: [
      'Because Keller gates are younger, a true motor failure here is less common than an access fault. When the motor is at fault, it is often because the gate has been loading it. A swing leaf on a post that clay soil has moved, or a slide gate on worn wheels, forces the motor to work harder every cycle, and on a hot afternoon that can trip the thermal cutout until it cools.',
      'A humming AC motor that will not turn usually means a failed capacitor, which is a quick repair. Grinding, or a motor that runs while the gate does not move, points to the gearbox or a stripped output gear. On DC units we check brushes and the battery before blaming the motor. Gate motor repair in Keller, whether in Bourland Oaks or along US-377, always includes moving the gate by hand to find load that would wear the new part.',
    ],
    faqs: [
      { q: 'My Keller gate stops working on hot afternoons and recovers in the evening. Is the motor dying?', a: 'More likely the thermal cutout is doing its job. Heat plus extra load, from a dragging gate or an operator in full sun on a busy gate, pushes the motor temperature over its limit. We find the drag, check the operator rating against the gate, and only replace a motor that tests weak once the load is corrected.' },
      { q: 'Can you replace just the gearbox, or is it a whole new operator?', a: 'On many operators the gearbox or output gear can be replaced on its own, and that is the economical route when the motor and board test good. Where the housing is cracked, the gearbox is no longer made, or several major parts are worn together, a new operator can make more sense, and we show you the comparison.' },
    ],
  },
  'keller/emergency-gate-repair': {
    description: 'Emergency gate repair in Keller, TX, 24/7: gates stuck open or shut, vehicle strikes, storm damage and failed village entrances. Call Shield now.',
    intro: 'Emergency gate repair in Keller, around the clock, for gates stuck open, stuck shut, struck by a vehicle or damaged in a storm. First the gate is made safe and passable, then the repair is planned.',
    local: [
      'In Keller an emergency is often shared. Hidden Lakes alone runs five gated villages with their own entrances, and when one of those gates sticks shut, every household behind it is affected at once. Stuck open is the other urgent call, because the gate is the security. Vehicle strikes on entrance leaves and spring storms that throw debris or a surge into the operator round out the after-hours work.',
      'On an emergency call we secure the gate first: release it and pin it open for traffic, or close and lock it if security matters more. Then we assess. A struck leaf may need straightening, a hinge or a new arm; a storm-damaged board can sometimes be bypassed safely until parts arrive. For entrances off Bear Creek Pkwy or Davis Blvd, we can work with the board or management company on access while the repair is completed.',
    ],
    faqs: [
      { q: 'A car hit our Keller entrance gate. What should we do before you arrive?', a: 'Keep people and vehicles clear of the damaged leaf, and cut power to the operator at its switch or breaker if you can do so safely. Do not try to force a bent gate closed. Take photos for the insurer. We then free or secure the gate and assess the operator, hinges and posts.' },
      { q: 'Can you leave the gate working temporarily if a part needs ordering?', a: 'Often. Depending on the fault we can run the gate with a bypassed accessory, set it to stay open, or secure it closed with manual access for residents. Safety devices are never disabled on a gate left running. We explain what the temporary set-up is and what the permanent repair needs.' },
    ],
  },
  'keller/commercial-gate-repair': {
    description: 'Commercial gate repair in Keller, TX for HOA village entrances, apartments and business lots: operators, keypads, callboxes, loops. Call Shield Gate Repair.',
    intro: 'Commercial gate repair in Keller for HOA entrances, apartment communities and business properties. We treat the operator, the access control and the vehicle loops as one system and check them together.',
    local: [
      'The commercial gate picture in Keller is shaped by its HOAs. Hidden Lakes contains five separate gated villages, each with its own entrance and an association maintaining the gates and streets behind them. Those entrances run many cycles a day, and their faults are a mix of operator wear, credentials and loops. Where a business property along US-377 or around Keller Town Center has a gate, it brings its own access needs.',
      'For Keller commercial gate repair we report to one contact, a board member or property manager, and diagnose the whole entrance: operator, entry keypad or callbox, receiver, loop detectors and safety devices. Repeat failures get a duty-cycle check, since a shared gate may have outgrown its operator. Where an entrance was resurfaced, loops are tested before anything else. Written findings help the board plan rather than react.',
    ],
    faqs: [
      { q: 'Our Keller village gate opens for some residents and not others. Where is the fault?', a: 'In what reads the credentials, not the gate. The keypad, receiver or access panel may have lost entries, hit its storage limit or have a damaged reader. We pull the stored list, compare it with your resident records, clean it up and test each input. The operator only gets attention if it misbehaves once credentials are sorted.' },
      { q: 'Can you provide a maintenance plan for an HOA entrance?', a: 'Yes. A shared gate benefits from scheduled checks of rollers, hinges, chains, safety sensors, loops and battery backup, because wear builds with traffic. We agree the visit interval with the board based on how busy the entrance is, and each visit gets a short written report so the association can budget for parts before they fail.' },
    ],
  },
  'keller/residential-gate-repair': {
    description: 'Residential gate repair in Keller, TX: driveway, side and pedestrian gates, latches, hinges and safety sensors that protect kids and pets. Call Shield.',
    intro: 'Residential gate repair in Keller for homeowners: automated driveway gates, side yard gates, pedestrian gates and the latches and safety devices that keep children and pets safe around them.',
    local: [
      'Keller homes are mostly younger than those in the towns nearby, many built in the late 1990s and 2000s, and plenty sit in subdivisions with their own entrance as well as a private gate. That leaves homeowners looking after more than one gate: an automated drive, a side gate to the backyard, perhaps a pool or pedestrian gate. Clay movement affects all of them, dropping latches out of line and stiffening hinges.',
      'Safety comes first on any residential call. We test photo-eyes and the reversing function on automated gates, and make sure side and pedestrian gates close and latch on their own where children or dogs need keeping in. Then the repair: hinges, latches, arms, limits or board. Families in Highland Oaks, Saddlebrook Estates and around Old Town Keller get a straight answer on repair versus replacement.',
    ],
    faqs: [
      { q: 'My backyard gate in Keller will not latch anymore. Why?', a: 'The post or the gate has moved, usually from clay swelling and shrinking under the footing. The latch and the strike no longer line up, so the gate bounces or rests just short. We realign the hinge side, adjust or move the latch, and check that the gate swings shut on its own if it should.' },
      { q: 'How do I know my automatic gate is safe around children?', a: 'Place an object in the gate path and close it: it should stop and reverse on the photo-eye, and again on contact. Check there is no gap where a hand or a small child could be caught as the gate moves. If either test fails, stop using the automatic function until we inspect it.' },
    ],
  },
  'keller/automatic-gate-installation': {
    description: 'Automatic gate installation in Keller, TX: HOA approval, deep footings for clay soil, power planning and UL 325 safety on swing and slide gates. Call Shield.',
    intro: 'Automatic gate installation in Keller, TX, from the first site visit through approval, footings, power and the safety set-up. We plan around Keller clay and your association, not just the gate.',
    local: [
      'Many Keller homes sit inside subdivisions with an HOA, and some, as in Hidden Lakes, inside gated villages with their own rules for the street. That makes approval the first step of most installs here. We confirm what the city and your HOA require on height, style and setback before anything is ordered. Then the site: drive width and slope, swing or slide space, and where power can reach.',
      'Footings matter on Keller clay. Posts for a heavy iron leaf need to be set deep and solid enough that seasonal swelling does not walk them out of plumb. We size the operator to the gate weight and length, plan power and any low-voltage run, and fit photo-eyes and edges to UL 325, with the gate built to ASTM F2200. Homes off Bear Creek Pkwy or in Marshall Ridge get a commissioned gate and a walk through the release.',
    ],
    faqs: [
      { q: 'Do I need HOA approval for an automatic gate in Keller?', a: 'If your home is in an association, almost certainly, and the city may have its own requirements on setback and height. Rules differ between subdivisions, so we confirm what the city and your HOA require before ordering. We can supply drawings, gate style and operator details for the application so it goes in complete.' },
      { q: 'Should I choose a swing or a slide gate for my Keller drive?', a: 'It depends on the space. A swing gate needs clear room for the leaves to open, usually inward, and suits a level drive. A slide gate needs a run of fence line beside the opening and suits slopes or short drives. We measure both options on site and explain what each involves to install and maintain.' },
    ],
  },
  'keller/electric-gate-installation': {
    description: 'Electric gate installation in Keller, TX: power supply, trenching, low-voltage runs, surge protection and battery backup planned on site. Call Shield.',
    intro: 'Electric gate installation in Keller with the power side planned first: where the supply comes from, how the wiring reaches the gate, and how it stays working through a storm or outage.',
    local: [
      'In Keller the electrical plan usually decides the shape of the job. Gates often sit back from the house across a lawn, irrigation lines and planted beds, so the cable route needs care. In gated villages such as those in Hidden Lakes, any trenching near shared areas may need sign-off. We confirm what the city and your HOA require and whether a permit applies before any digging is scheduled.',
      'We choose between running mains to the gate, a low-voltage operator fed from a transformer near the house, or a battery operator on solar, based on distance and load. Cable is sized for the run so voltage holds at the gate, and conduit protects it from future landscaping. Surge protection goes on the supply and loop leads, and battery backup keeps the gate usable in an outage. Safety devices follow UL 325, and the gate itself ASTM F2200.',
    ],
    faqs: [
      { q: 'How far from my Keller house can an electric gate be?', a: 'Distance is not a limit if the cable is sized for it. A long low-voltage run loses voltage, so a heavier gauge or a mains supply to the gate keeps power steady. Where trenching across a drive or landscaping is impractical, a solar battery operator is an option. We measure the run and give the trade-offs for each route.' },
      { q: 'Is battery backup worth adding to an electric gate?', a: 'For most homes, yes. In a power cut a gate without backup has to be released and moved by hand, which is awkward with a heavy iron leaf and in the rain. A backup battery keeps the gate working for a number of cycles. It is a consumable, so we test it at each service visit.' },
    ],
  },
  'keller/sliding-gate-installation': {
    description: 'Sliding gate installation in Keller, TX: track pads on clay soil, cantilever or roller design, operator sizing, HOA approval and UL 325 safety. Call Shield.',
    intro: 'Sliding gate installation in Keller, for drives with a slope or no room for leaves to swing. We plan the track or cantilever, the footing, the operator and the safety devices together.',
    local: [
      'A slide gate suits many Keller lots where a swing gate would hit a rising drive, a parked car or a planted bed. It needs a clear run of fence line beside the opening, at least the width of the gate, and on clay soil the ground under it matters. A track laid on a thin pad can crack and tilt as the clay moves, so the base is part of the design, not an afterthought.',
      'We decide between a roller-on-track and a cantilever gate, set a deep footing for the operator pad and posts, and size the slide operator to the gate weight. Photo-eyes and edges are fitted to UL 325, guards cover the rollers to ASTM F2200, and limits are set once the gate runs true. Where homes in Saddlebrook Estates or Bourland Oaks sit under an HOA, we confirm what the city and your HOA require first.',
    ],
    faqs: [
      { q: 'Why does a slide gate in Keller need a deeper base?', a: 'Keller sits on expansive clay that swells when wet and shrinks when dry. A shallow pad under a track or operator moves with it, which tilts the track, misaligns the drive and makes the gate bind. A properly sized footing below the active layer keeps the track level and the operator square to the gate.' },
      { q: 'What is a cantilever slide gate?', a: 'A slide gate that rides on rollers mounted on posts beside the opening, with no track across the drive. It needs extra length behind the opening to balance, but nothing on the ground catches debris or gets driven over. On a Keller drive with a slope or heavy traffic, it is often the cleaner long-term choice.' },
    ],
  },
  'keller/swing-gate-installation': {
    description: 'Swing gate installation in Keller, TX: wrought iron single and double leaves, hinge posts set for clay soil, arm operators and UL 325 safety. Call Shield.',
    intro: 'Swing gate installation in Keller for single and double wrought iron leaves with arm or pad-mounted operators. The hinge post carries the gate for its whole life, so that is where the planning starts.',
    local: [
      'Wrought iron swing gates are a Keller standard, on private drives and on village entrances. They look right on the area’s newer homes and need no fence run beside the opening. What they do need is room to swing, usually inward, and a hinge post strong enough to hold a heavy leaf on soil that moves. Keller clay swells and shrinks with the seasons, and a light post will lean.',
      'We set hinge posts in deep concrete footings, hang leaves with heavy hinges and clearance for seasonal movement, and choose an operator rated for the leaf length and weight. Paired leaves get a delay so they meet in order. Safety follows UL 325 with photo-eyes, and the gate is built to ASTM F2200 so there are no pinch gaps. In Highland Oaks or Harmonson Farms, we confirm what the city and your HOA require before the order goes in.',
    ],
    faqs: [
      { q: 'Will a new swing gate in Keller sag over time?', a: 'Not if it is hung correctly. Sag on Keller gates nearly always comes from undersized posts or shallow footings moving with the clay, or from hinges too light for the leaf. We size posts and footings for the gate weight and set hinges with clearance, so the leaf stays level through wet springs and dry summers.' },
      { q: 'Can my swing gate open outward?', a: 'Sometimes, but it needs care. An outward-opening gate can swing into the street or sidewalk, and many associations and cities have rules about it. Where a drive slopes up from the road, outward opening may be the only practical choice. We check the site and confirm what the city and your HOA require.' },
    ],
  },
  'keller/gate-opener-installation': {
    description: 'Gate opener installation in Keller, TX: swing and slide operators sized to your gate, remotes, keypads, receivers and safety devices set up. Call Shield.',
    intro: 'Gate opener installation in Keller for existing gates that need automating or a new operator to replace a failed one. We size the opener to the gate and set up remotes, keypads and safety devices.',
    local: [
      'Plenty of Keller homes have a sound wrought iron gate that was never automated, or an operator that has reached the end of its life. Fitting an opener to an existing gate starts with the gate: does it swing or roll freely, are the posts plumb after years on clay, and is it heavy or long enough to need a larger unit? An opener fitted to a binding gate will fail early.',
      'We match the operator type and rating to the leaf, mount it on solid brackets or a pad, and run power or plan solar. Then the access side: remotes coded, a keypad if wanted, and receivers set up so they work with any community system at gated village entrances such as those in Hidden Lakes. Photo-eyes and reversing are fitted to UL 325. Gate opener installation in Keller ends with a full test and a walk through the manual release.',
    ],
    faqs: [
      { q: 'Can an opener be added to my old Keller gate?', a: 'Usually, if the gate is sound. We check hinges, posts and frame first, since an old gate that drags or has dropped needs putting right before it is automated. Very heavy or long leaves may need reinforcement at the hinge side. Once it moves freely by hand, almost any swing or slide gate can take an operator.' },
      { q: 'Will my new opener work with our neighborhood entrance remotes?', a: 'It can, if the receivers use a compatible format. Some homeowners want one remote for both the community entrance and their own gate. We check what the entrance uses and pick or program a receiver to suit, or add a multi-channel remote so one device handles both without affecting the HOA system.' },
    ],
  },
  'coppell/viking': {
    description: 'Viking gate repair in Coppell, TX: K-2 slide and swing operators on heavy iron gates, batteries, boards and limit drift on ageing installs. Call Shield.',
    intro: 'Viking gate repair in Coppell for the DC slide and swing operators fitted to heavier iron gates and community entrances. We check the battery, the gate and the limits before blaming the operator.',
    local: [
      'Coppell built most of its homes between 1985 and 2000, so the gates here are of an age where the hardware around an operator is tired. A Viking is chosen for heavy gates, and a heavy slide gate on worn wheels or a swing leaf on a post that clay has moved over thirty years gives the drive train a hard life. The operator reports the extra effort as an obstruction, and the gate stops or reverses.',
      'When a Viking sits on a Coppell gate, the repair is usually batteries, limits or the gate, not the gearbox. Viking batteries are consumables that North Texas heat wears faster. Older K-2 slide units without the position sensor can lose limits after a total outage, and swing units like the R-6 and G-5 use mechanical limit switches that drift. Gates in Riverchase or off Sandy Lake Road get a load test and a hand check first.',
    ],
    faqs: [
      { q: 'Is a Viking on a thirty-year-old Coppell gate worth keeping?', a: 'Often. Viking units are built for heavy gates and frequent use, and most faults are batteries, boards and limits, all replaceable. What usually needs attention on gates of this Coppell era is the gate: wheels, hinges and post alignment. Put those right and the operator has an easier job. Gearbox wear is the main reason to replace.' },
      { q: 'Our Viking gate forgot where to stop after a power cut. What happened?', a: 'Older K-2 slide units without Viking’s position sensor can lose their digital limits after a total loss of power, including a battery run flat. We relearn the open and close positions, test the battery so a storm outage does not repeat the problem, and confirm the safety sensors still reverse the gate.' },
    ],
  },
  'coppell/faac': {
    description: 'FAAC gate repair in Coppell, TX: hydraulic 400 and 402 swing operators, seals, fluid, pressure and 455 D boards on 1990s iron gates. Call Shield.',
    intro: 'FAAC gate repair in Coppell for hydraulic swing operators on wrought iron gates and the 844 slide unit. Most FAAC faults are seals and pressure, and we repair them rather than swapping brands.',
    local: [
      'Coppell’s housing went up largely between 1985 and 2000, so a FAAC hydraulic arm fitted with the house has been through decades of North Texas summers. Hydraulics age in a particular way: seals harden and weep, fluid drops, and the ram loses force. The gate slows, stalls before the latch, or will not hold closed in wind. Many owners are told that means a new operator. It rarely does.',
      'We check fluid level and condition, test pressure against FAAC figures, then reseal and refill. The 455 D board on older hydraulic installs is a known failure point and is replaced once confirmed. The keyed release valve wears too, and a weeping one is a real fault. On wrought iron swing gates in The Lakes of Coppell or Northlake Woodlands, the hinge post gets checked as well, since clay movement adds load the ram has to overcome.',
    ],
    faqs: [
      { q: 'My FAAC has been on our Coppell gate since the nineties. Is it too old to repair?', a: 'Age alone is not a reason to replace one. The 400 and 402 series are long-lived and designed to be serviced: seals, fluid, pressure settings and boards are all replaceable. Replacement makes sense when the housing or ram is physically damaged. Ask what was tested before accepting that a FAAC cannot be fixed.' },
      { q: 'How often should a FAAC hydraulic operator be serviced?', a: 'Fluid and seals are service items. On a home gate, checking fluid condition and pressure every couple of years catches slow seal wear before it becomes a gate that will not finish its travel. It is the cheapest way to keep a FAAC running for decades, and the visit includes the release valve and the board.' },
    ],
  },
  'coppell/us-automatic': {
    description: 'US Automatic gate repair in Coppell, TX: Patriot and Ranger operators, 12V batteries, solar panels under mature trees and chargers. Call Shield.',
    intro: 'US Automatic gate repair in Coppell on Patriot and Ranger battery operators, solar or charger fed. We test the battery and charging side before touching the operator, because that is where most faults start.',
    local: [
      'A US Automatic operator always runs its motor from a battery. In Coppell they appear where running mains to the gate was awkward, on a set-back drive or a side gate. Coppell’s neighborhoods are mostly thirty years old or more, and trees that were saplings when the homes went up now cast real shade. A panel that once had full sun can spend hours in shadow, and the battery falls behind.',
      'Our order: battery under load, panel output or charger, charge controller, then terminals, which corrode in damp boxes. Only after that do we test the Patriot or Ranger board and arm. A gate dragging on worn hinges or a post moved by clay draws more each cycle and shortens battery life, so we fix that too. Around Coppell Greens or Old Town Coppell, moving a shaded panel is often the real repair.',
    ],
    faqs: [
      { q: 'My US Automatic gate in Coppell opens slowly by evening. What is wrong?', a: 'That pattern usually means the charging side is not keeping up. A panel now shaded by mature trees, dirt on the glass, a failing charge controller or a battery past its best all produce it. We measure each, clean or move the panel if needed, and fit the right battery so the gate runs through the day.' },
      { q: 'Why did my new battery fail again within months?', a: 'Most often the charge controller. When it fails, the battery is either not charged or overcharged and damaged, and both look like a flat battery. Reversed polarity after other work can also harm the controller. We test the controller and wiring, not only the battery, so a replacement lasts its normal life.' },
    ],
  },
  'coppell/apollo': {
    description: 'Apollo gate repair in Coppell, TX: 1550 and 1650 swing openers, 816 actuators, batteries, solar and 833/834 boards on older installs. Call Shield.',
    intro: 'Apollo gate repair in Coppell for 1550 and 1650 swing openers and the earlier 1500 and 1600. These are 12-volt actuators, so we test the battery while the gate runs and identify the board first.',
    local: [
      'Apollo operators, now part of Nice, are light 12V linear actuators suited to residential swing leaves and side gates. Coppell’s homes date mostly from 1985 to 2000, so an Apollo here may be an early generation on its original board, with a battery and solar panel that have been swapped more than once. The usual complaint is a gate that travels a few feet, then stops or reverses, which on this system starts with power.',
      'We open the steel box and read the board: 833/834 early, 835/836 on the ETL, 1050 on the 1K. Each programs differently. Then the battery under load, the panel or charger, and the 816 actuator limit wiring with a meter. Where an old actuator is worn out, distributors list the TITAN 12L as a bolt-in on the 1500/1600/1550/1650 geometry. We service gates from Riverchase to the streets near Denton Tap Road.',
    ],
    faqs: [
      { q: 'My Apollo gate in Coppell reopens right after closing. Why?', a: 'Usually the board thinks the gate hit something. A weak battery, a limit that is not being read, or a leaf binding near the closed position from a hinge or a post shifted by clay can trigger it. We test the battery under load, check the actuator limit wiring, and move the gate by hand to feel for binding.' },
      { q: 'Can old Apollo 1500 and 1600 operators still be repaired?', a: 'Often. They share mounting geometry with the 1550 and 1650, and many parts and replacement actuators fit. If the board is beyond repair, a later board can sometimes be fitted to the same actuators. We identify exactly what you have before quoting, and if parts are not available we say so first.' },
    ],
  },
  'coppell/ramset': {
    description: 'Ramset gate repair in Coppell, TX: RAM 100 and RAM 1000 slide operators, chains, sprockets, limit switches and relays on busy entrances. Call Shield.',
    intro: 'Ramset gate repair in Coppell for the RAM 100 and RAM 1000 slide operators on entrances that run far more cycles than a single drive. We find the cause of repeat failures as well as the failed part.',
    local: [
      'Chain and sprocket wear on slide gates is one of the typical Coppell faults, and a Ramset on a shared entrance shows it fastest. These operators are sold for residential and light commercial use, but a community gate serving a whole street wears on cycle count, not calendar age. Add Coppell’s 1985 to 2000 build era and many of these gates have also had decades for wheels and tracks to wear.',
      'If the same Ramset part keeps failing, either the operator is past its intended duty or the gate is dragging. We check rollers, track and chain alignment by hand, measure the real traffic, and only then talk about a heavier operator. Thermal trips on sunny afternoons usually trace to the same drag. At entrances off Sandy Lake Road or near SH 121, the telephone entry and loops are checked in the same visit.',
    ],
    faqs: [
      { q: 'Our Coppell entrance Ramset trips out on summer afternoons. Is it worn out?', a: 'Not necessarily. The thermal cutout protects the motor from overheating, and heat plus a gate that drags pushes it there. Worn wheels, a bent track or added infill on the gate are common causes. Correct the load and the cutout often stops tripping, with no need to replace the operator.' },
      { q: 'Which Ramset parts wear first on a busy gate?', a: 'Chains, sprockets and limit switches, because they are used on every cycle, then relays on the control board. On a high-traffic entrance these are routine replacements rather than signs of a bad unit. We carry the common wear parts and tell you up front when a board or relay needs ordering.' },
    ],
  },
  'coppell/automatic-gate-repair': {
    description: 'Automatic gate repair in Coppell, TX for 1990s slide, swing and HOA entrance gates: boards, chains, limits and keypads. Diagnosed first. Call Shield.',
    intro: 'Automatic gate repair across Coppell, TX, for residential slide gates, wrought iron swing gates and community entrances. Most operators here are of a similar age, which makes the likely faults predictable.',
    local: [
      'Coppell grew from under four thousand residents in 1980 to nearly thirty-six thousand by 2000, and most of its subdivisions were built in that window. Automatic gates went in with them, so a large share are now of one generation. That shows in repeat patterns: control boards from the 1990s giving out, chains and sprockets worn on slide gates, tired limit switches, and keypad faults at entrance gates.',
      'Our Coppell automatic gate repair still runs in order. The gate by hand first, since posts in clay soil move over thirty years. Then photo-eyes and safety inputs, limits, the receiver, keypad and loops, and finally the board and motor. On an operator this age, we also check whether parts are still made before quoting. We cover gates from Old Town Coppell to The Lakes of Coppell, either side of Denton Tap Road.',
    ],
    faqs: [
      { q: 'Should I replace a 1990s automatic gate operator in Coppell or repair it?', a: 'Repair is often still sound, because the mechanical side of a well-installed operator lasts, while the board, chain or limits are what wear. The deciding factors are parts availability, the condition of the gearbox and whether the gate is still square. We check all three and give you both options before any work starts.' },
      { q: 'What should I check before calling about a stopped gate?', a: 'Look at the breaker or switch, the remote battery, and whether anything is blocking the photo-eyes or sitting in the gate path. Note any lights or beeps on the operator. If those are fine, use the manual release only if you know how. Those details help us diagnose faster when we arrive.' },
    ],
  },
  'coppell/electric-gate-repair': {
    description: 'Electric gate repair in Coppell, TX: aged low-voltage wiring, transformers, surge-hit boards, loop detectors and phone entry power faults. Call Shield.',
    intro: 'Electric gate repair in Coppell for supply, transformers, wiring, boards and loop detectors. On gates of this age the power path has had decades to corrode and fray, so we trace it end to end.',
    local: [
      'Most Coppell gates were wired between the mid-1980s and 2000. Thirty years in the ground takes a toll on low-voltage runs: insulation cracks, splices corrode, and irrigation and landscaping repairs have nicked cables more than once. The symptom is a gate that works some days and not others. Community entrances add telephone entry panels and loop detectors to the circuit, each with its own power and wiring to fail.',
      'We test voltage at the supply, then the transformer, then the run to the operator with a continuity check, and finally the board, receiver and loop detector. Storm surges can damage several parts at once, so each is tested on its own. Where conduit is intact we pull new wire through it rather than trench. Homes in Northlake Woodlands or Coppell Greens and entrances off Sandy Lake Road can have surge protection added on the supply and loop leads.',
    ],
    faqs: [
      { q: 'My Coppell gate works in dry weather and fails after rain. Why?', a: 'Water is reaching a weak point in the wiring. A cracked cable, an unsealed splice or a corroded terminal in a flooded box will short or lose connection when wet. On runs buried for decades this is common. We find the fault with insulation and continuity tests, then reseal or replace that section.' },
      { q: 'Our entrance phone entry has no power but the gate works. Is it connected?', a: 'They usually share a supply but have separate circuits. A tripped breaker, failed transformer or blown fuse on the entry panel side can leave the operator running and the panel dead. We test the panel supply, its fuse and wiring, and the line it uses, and keep the gate working for residents in the meantime.' },
    ],
  },
  'coppell/driveway-gate-repair': {
    description: 'Driveway gate repair in Coppell, TX for private homes: slide and swing driveway gates, chains, hinges and posts shifted by decades of clay. Call Shield.',
    intro: 'Driveway gate repair for private homes in Coppell. A driveway gate is often the only way a car gets in or out, so we get it moving safely first and then fix the cause.',
    local: [
      'Private driveway gates in Coppell are mostly residential slide gates and wrought iron swing gates installed with homes built from the late 1980s through the 1990s. After thirty years a slide gate’s chain, sprockets and wheels are well worn, and a swing leaf’s posts have been through decades of clay swelling and shrinking. Either way the gate starts to bind and the operator, often the same age, struggles.',
      'On a Coppell driveway gate we check the hardware before the electronics. Slide gates get wheel, track and chain inspection; swing pairs get hinge, post and leaf delay checks so the leaves stop colliding. If the operator is original, we check board and parts availability before suggesting anything. For homes along Denton Tap Road or in Riverchase, the aim is a repair that fits the age of the gate and how much life it has left.',
    ],
    faqs: [
      { q: 'My Coppell driveway gate drags at one end. What is wrong?', a: 'On a slide gate, a worn wheel, a sagging frame or a track pad tilted by clay movement are the usual causes. On a swing gate, a dropped hinge or leaning post. Both make the operator work harder and wear faster. We find the drag, fix the hardware or post, then reset limits so the gate runs smoothly.' },
      { q: 'How do I open my driveway gate if the power goes out?', a: 'Use the manual release, usually a key or lever on the operator or arm. With it released, the gate should move by hand. Close and secure it if you leave it on manual. If you are unsure where your release is, we show you on the visit, and battery backup can be added so a cut does not stop the gate.' },
    ],
  },
  'coppell/sliding-gate-repair': {
    description: 'Sliding gate repair in Coppell, TX: worn chains, sprockets, V-groove wheels, tracks and slide operators on 1990s homes and entrances. Call Shield.',
    intro: 'Sliding gate repair in Coppell on chains, sprockets, wheels, track and the slide operator. Slide gates here are often decades old, and their drive hardware wears in a predictable order.',
    local: [
      'Residential slide gates are one of the main gate types in Coppell, and chain and sprocket wear is one of the most common faults. Most were installed with homes built between 1985 and 2000, so they have run thousands of cycles. The chain stretches, sprocket teeth hook, V-groove wheels flatten, and the gate starts to jerk, slap or jump. Clay movement can also tilt a track pad, so the gate rolls uphill at one end.',
      'For sliding gate repair in Coppell we release the gate and push it through its travel, then inspect wheels, track, guide rollers, chain and sprockets. A worn chain usually means worn sprockets, so we replace them together. Limits and photo-eyes are reset after. On gates in The Lakes of Coppell or near Andrew Brown Park, we check operator age and parts too, since a 1990s board may be close to the end.',
    ],
    faqs: [
      { q: 'Why does my Coppell slide gate clank as it moves?', a: 'Usually a stretched chain slapping the frame or jumping a worn sprocket, or a flat spot on a wheel. On gates of this age all three often appear together. We check tension, sprocket teeth and wheels, and replace what is worn as a set so the new chain is not chewed by an old sprocket.' },
      { q: 'Can a slide gate be converted to cantilever?', a: 'Sometimes. A cantilever gate rolls on post-mounted rollers with no track on the ground, which ends track problems on soil that moves. It needs extra gate length behind the opening and a frame built to carry it. We check whether your gate and fence line can take the conversion or whether a new gate is the better route.' },
    ],
  },
  'coppell/swing-gate-repair': {
    description: 'Swing gate repair in Coppell, TX: wrought iron leaves, worn hinges, operator arms, limit switches and posts moved by clay over decades. Call Shield.',
    intro: 'Swing gate repair in Coppell for single and double wrought iron leaves and the operators that move them. We start at the hinge post, because that is what gives way first on older gates.',
    local: [
      'Wrought iron swing gates are common in Coppell, on driveways and at community entrances. Built mostly between 1985 and 2000, many have hung on the same posts and hinges for thirty years. Coppell’s clay swells after rain and shrinks in dry heat, and over enough seasons that walks a post out of plumb. The leaf drops, scrapes, or stops short, and the arm operator, often from the same era, labours to finish.',
      'Our Coppell swing gate repair checks hinges, post and leaf level first, then the arm, brackets and pivots, then limits and force. Paired leaves get their delay reset. Worn hinges and loose brackets are straightforward; a post that has broken its footing needs resetting, and we explain why before quoting. On older arm operators we also check the board and limit switches. We cover swing gates from Old Town Coppell to Northlake Woodlands.',
    ],
    faqs: [
      { q: 'My swing gate in Coppell has dropped and drags on the drive. Can it be fixed?', a: 'Usually. A drop comes from worn hinges, a post leaning in the clay, or a frame that has flexed. We replace hinges, re-plumb or reset the post, and add bracing where needed. Once the leaf swings clear by hand, we reset operator limits and force so it closes cleanly again.' },
      { q: 'Our double swing gates close out of order. What causes that?', a: 'Each leaf has its own operator or arm, and the board delays one so they meet in the right sequence. If one leaf slows from a stiff hinge, a weak arm or changed limits, the timing goes wrong and they collide or leave a gap. We fix the slow leaf, then reset the delay and limits.' },
    ],
  },
  'coppell/gate-opener-repair': {
    description: 'Gate opener repair in Coppell, TX: remotes, keypads, telephone entry, receivers, ageing control boards and limit switches. Inputs tested first. Call Shield.',
    intro: 'Gate opener repair in Coppell for remotes, keypads, receivers, control boards and limit switches. When the gate moves by hand but will not respond, these are where the fault lives.',
    local: [
      'In Coppell the opener side is where age shows most. Control board failure on 1990s operators is a typical local fault, along with limit switches that wear and stop reading the end of travel. Community entrances have telephone entry panels and keypads that fail too, sometimes after a phone line change. Because most of the city’s gates are of one generation, the faults tend to repeat from one street to the next.',
      'Coppell gate opener repair starts with the inputs. Does the board see the remote, the keypad, the push button and each safety device? A stuck input or misaligned photo-eye blocks every other command. Then receiver range and antenna, remote and code programming, and limit switches. A failed board is confirmed, not guessed, and on older units we check whether a direct replacement or a retrofit board fits. That applies from Riverchase to Coppell Greens.',
    ],
    faqs: [
      { q: 'Our Coppell entrance phone entry stopped calling residents. Is the opener broken?', a: 'Probably not. Older telephone entry units often expect a traditional phone line, and when an association changes its phone service, they can stop dialling. The gate opener itself may be fine. We test the entry panel, the line and the opener connection, and can fit a cellular module or new panel to the existing operator if it tests healthy.' },
      { q: 'Can a modern board be fitted to an old gate opener?', a: 'Often. Where the original board is no longer made, a universal or retrofit board can be wired to the existing motor, limits and safety devices, provided the mechanical side is sound. We test the motor and gearbox first, because a new board on a worn drive is money poorly spent, and explain the options.' },
    ],
  },
  'coppell/gate-motor-repair': {
    description: 'Gate motor repair in Coppell, TX: humming motors, failed capacitors, worn gearboxes and thermal cutouts on 1990s operators. Load checked first. Call Shield.',
    intro: 'Gate motor repair in Coppell for the motor, capacitor, gearbox and thermal cutout in an operator. On gates of this age the drive has done a lot of work, so we test it carefully before advising.',
    local: [
      'Many Coppell operators date from the late 1980s and 1990s, so their motors and gearboxes have run for decades. Wear shows as a motor that hums but will not turn, a gearbox that grinds or slips, or an operator that runs a few cycles then cuts out on heat. Older gates make it worse: worn slide wheels and hinges, or posts shifted in clay, raise the load every time the gate moves.',
      'A hum with no movement on an AC motor usually means a failed capacitor, a simple replacement. Grinding, or a motor turning while the gate stays still, points to the gearbox or output gear. We check the thermal cutout for nuisance trips caused by load. On an operator this old we confirm parts exist before quoting and compare the repair with a new unit. Gate motor repair in Coppell, near Sandy Lake Road or I-635, includes freeing the gate.',
    ],
    faqs: [
      { q: 'Is it worth rebuilding the motor on a 1990s Coppell gate operator?', a: 'It depends on parts and the rest of the unit. If the gearbox is sound and the motor or capacitor is available, a repair can give years more service. If the gearbox is worn, the board is obsolete and the motor is failing together, a new operator is usually better value. We test each part and show you both options.' },
      { q: 'What does a capacitor do on a gate motor?', a: 'On many AC gate motors it gives the starting kick that gets the motor turning. When it fails, the motor hums but cannot start, or starts slowly and overheats. Capacitors are inexpensive and quick to replace, so on a humming motor it is one of the first things we test before considering the motor itself.' },
    ],
  },
  'coppell/emergency-gate-repair': {
    description: 'Emergency gate repair in Coppell, TX, 24/7: HOA entrances stuck shut, gates stuck open, vehicle strikes and storm-damaged operators. Call Shield.',
    intro: 'Emergency gate repair in Coppell, day or night, for gates stuck shut, stuck open, hit by a vehicle or knocked out by a storm. We make the gate safe and passable, then fix it properly.',
    local: [
      'A community entrance in Coppell serves every home behind it, so when it fails, it fails for all of them together, and that is an emergency rather than a booking. With so many operators in the city of the same 1990s generation, a sudden board or limit switch failure is the usual cause. Vehicle strikes on entrance leaves and spring storms that bring surges or debris are the other after-hours calls.',
      'First we secure the gate: release and hold it open for traffic, or close and lock it if security is the bigger risk. Then we diagnose. A failed board on an older unit can sometimes be covered with a safe temporary set-up until a part arrives; a struck leaf may need hinges, straightening or a new arm. For entrances off Denton Tap Road or in The Lakes of Coppell, we keep one contact updated throughout.',
    ],
    faqs: [
      { q: 'Our Coppell HOA gate is stuck shut and residents cannot get out. What now?', a: 'Call us, and in the meantime check whether the operator has a manual release your board or manager can reach safely. Do not let residents force the leaves. When we arrive we release and secure the gate open so traffic flows, then diagnose the operator, entry panel and loops before ordering any part.' },
      { q: 'Does storm damage to a gate need an emergency call?', a: 'If the gate is stuck shut, stuck open where security matters, or has a leaf hanging loose, yes. A surge-damaged board that leaves the gate releasable and safe can often wait for a scheduled visit. If in doubt, call and describe what you see, and we will tell you plainly which it is.' },
    ],
  },
  'coppell/commercial-gate-repair': {
    description: 'Commercial gate repair in Coppell, TX for HOA entrances, apartments and businesses: telephone entry, keypads, loops and ageing operators. Call Shield.',
    intro: 'Commercial gate repair in Coppell for HOA entrances, apartment communities and business properties. We diagnose operator, access control and loops together, and report to the one contact you nominate.',
    local: [
      'Most of Coppell was built between 1985 and 2000, and many of its community entrances date from then too. Telephone entry and keypad faults are a typical local problem at those gates, along with control boards of the same generation and chain wear on slide operators. Where an apartment community or business lot along Denton Tap Road or Sandy Lake Road runs a gate, the traffic is heavier still.',
      'Coppell commercial gate repair starts with the whole entrance: the operator, the telephone entry or keypad, receivers, loop detectors and safety devices. A board member, property manager or management company gets one diagnosis and one quote. Where a phone entry has stopped working after a line change, we look at cellular or newer entry options that wire to the existing operator. Repeat failures get a duty-cycle review.',
    ],
    faqs: [
      { q: 'Our Coppell community gate is from the 1990s. Should the HOA plan for replacement?', a: 'Plan for it, but do not rush it. Boards, chains and entry panels can usually be replaced and buy years. What makes replacement sensible is a worn gearbox, unavailable parts or an operator undersized for current traffic. We give the board a written condition report so replacement can be budgeted rather than forced by a failure.' },
      { q: 'Can access codes and remotes for our entrance be managed in one place?', a: 'Often, yes. Many entry systems can store resident codes and remote credentials in a single panel, and some can be managed remotely. We review what your entrance has, clear out old entries, and if the panel is outdated, explain the options for one that is easier for the association to administer.' },
    ],
  },
  'coppell/residential-gate-repair': {
    description: 'Residential gate repair in Coppell, TX: driveway, side yard and pedestrian gates, latches, hinges and safety sensors for homes with kids and pets. Call us.',
    intro: 'Residential gate repair in Coppell for homeowners: automated driveway gates, backyard and side gates, pedestrian gates, and the latches and sensors that keep children and pets safe.',
    local: [
      'Coppell homes date mostly from 1985 to 2000, so a typical household here has gates that have done decades of work: an automated slide or swing gate on the drive, a wrought iron side gate, maybe a pool gate. Clay soil has had thirty years to move their posts, so latches no longer catch, hinges bind, and self-closing gates stay ajar, which matters when a dog or toddler is behind it.',
      'Safety comes first. On automated gates we test the photo-eyes and the reversing function and look for pinch points. On side and pedestrian gates we check that they close and latch on their own. Then the repair: hinges, latches, posts, arms or board. Families in Coppell Greens, Riverchase or near Coppell Nature Park get a straight answer on repairing an old gate versus replacing it.',
    ],
    faqs: [
      { q: 'Our Coppell pool gate no longer closes by itself. Is that urgent?', a: 'Yes, treat it as urgent. A pool gate that does not self-close and latch defeats the reason it is there. Usually the hinge spring has weakened or the post has moved in the clay so the latch misses. We adjust or replace the closer, realign the latch, and confirm the gate shuts from any open position.' },
      { q: 'What safety checks should I do on my automatic gate each month?', a: 'Close the gate with a soft object in its path to confirm it stops and reverses, wave a hand through the photo-eye beam while it moves, and look for gaps where fingers could be pinched. Keep the release key somewhere known. If any check fails, switch off the automatic mode and call for an inspection.' },
    ],
  },
  'coppell/automatic-gate-installation': {
    description: 'Automatic gate installation in Coppell, TX: replacing 1990s gates, HOA approval, footings for clay, power and UL 325 safety planned on site. Call Shield.',
    intro: 'Automatic gate installation in Coppell, whether replacing a gate that went in with the house or automating a drive for the first time. Approval, footings, power and safety are planned before anything is ordered.',
    local: [
      'Much of Coppell’s installation work is replacement. Homes built between 1985 and 2000 have gates and operators reaching the end of their life together, and owners are choosing whether to rebuild or start again. Many sit in subdivisions with an HOA and design rules for fencing, so we confirm what the city and your HOA require before choosing style, height and gate type.',
      'Where old posts have leaned in Coppell clay, we set new ones in deeper footings rather than reuse them. The operator is sized to the gate, with power and any low-voltage run planned and existing conduit reused where sound. Photo-eyes, edges and reversing are fitted to UL 325, and the gate built to ASTM F2200. Homes in The Lakes of Coppell or along Sandy Lake Road get limits set and the manual release explained at handover.',
    ],
    faqs: [
      { q: 'Can I reuse the posts from my old Coppell gate?', a: 'Sometimes. If they are plumb, solid at the base and sized for the new gate, they can stay. Posts that have leaned with the clay, cracked their footing or are lighter than the new leaf needs should be replaced, since a new gate on a failing post will sag. We test and measure before deciding.' },
      { q: 'How long does an automatic gate installation take from start to finish?', a: 'Most of the time goes into approval and fabrication rather than the install itself. Once the HOA has approved and the gate is built, setting posts, hanging the gate and fitting the operator is a short job, with concrete given time to cure before the gate is hung. We give you a realistic schedule with the quote.' },
    ],
  },
  'coppell/electric-gate-installation': {
    description: 'Electric gate installation in Coppell, TX: supply, transformers, reused conduit, surge protection and battery backup planned for your gate. Call Shield.',
    intro: 'Electric gate installation in Coppell with the power planned from the panel to the post: supply route, cable size, surge protection and backup, so a new gate keeps working in storms and outages.',
    local: [
      'On mature Coppell lots the cable route is the tricky part. Yards have thirty years of trees, beds and irrigation, and many older gates were fed by low-voltage cable that has since cracked or corroded. A new electric gate is the moment to fix that. Community entrances add telephone entry or keypads that need their own power. We confirm what the city and your HOA require before trenching or electrical work is scheduled.',
      'We choose between mains to the gate, a low-voltage operator fed from a transformer, or solar battery power, depending on distance and gate weight. Cable is sized so voltage holds at the gate, runs go in conduit, and existing conduit is reused where sound. Surge protection covers the supply and loop leads, and battery backup keeps the gate moving in a power cut. Safety meets UL 325 and the gate ASTM F2200, in Northlake Woodlands or Old Town Coppell alike.',
    ],
    faqs: [
      { q: 'Can my new electric gate use the old wiring from my Coppell gate?', a: 'Only if it tests sound and is the right size. Cable buried for decades often has cracked insulation or corroded splices, and a new operator may draw differently from the old one. We test insulation and continuity, and if the conduit is intact we pull new cable through it, which is usually far less disruptive than trenching.' },
      { q: 'Do I need surge protection on a new electric gate?', a: 'It is strongly worth having. North Texas storms send surges along power and loop wiring, and the control board is the part that takes the hit. Protection on the supply and loop leads reduces that risk at modest cost. It does not stop a direct strike, but it handles the common nearby surge.' },
    ],
  },
  'coppell/sliding-gate-installation': {
    description: 'Sliding gate installation in Coppell, TX: cantilever or track gates, footings for clay, slide operators, HOA approval and UL 325 safety. Call Shield.',
    intro: 'Sliding gate installation in Coppell for drives where a swing gate does not fit, or to replace a worn 1990s slide gate. We plan the gate design, footing, operator and safety together.',
    local: [
      'Residential slide gates are a common Coppell type, and many installed with homes between 1985 and 2000 now have worn tracks, wheels and chains. When owners replace them, it is a chance to rethink the design. A track gate is simpler; a cantilever gate removes the ground track that clay movement tilts and debris clogs. Either needs a clear run of fence line beside the opening, at least the gate’s width.',
      'We confirm what the city and your HOA require on style and height, then set footings for the operator pad and posts deep enough to resist clay movement. The slide operator is sized to the gate weight and traffic, with chain or rack drive set up square. Roller guards and gaps follow ASTM F2200, and photo-eyes and edges UL 325. In Riverchase or Coppell Greens, we also plan around existing landscaping and conduit.',
    ],
    faqs: [
      { q: 'Is a cantilever slide gate better in Coppell than a track gate?', a: 'Often, for the ground conditions. Coppell clay can tilt or crack a track pad over time, and a ground track collects leaves and debris. A cantilever gate rides on post-mounted rollers with nothing across the drive. It needs extra length behind the opening and a heavier frame, so we check your fence line before recommending one.' },
      { q: 'How wide can a residential slide gate be?', a: 'Wide enough for most drives, provided the operator is rated for the weight and there is enough fence line beside the opening for it to slide into. Longer gates need heavier frames, more rollers or a cantilever design. We size the gate and operator together, so the install works for years rather than straining from the start.' },
    ],
  },
  'coppell/swing-gate-installation': {
    description: 'Swing gate installation in Coppell, TX: wrought iron single and double leaves, deep hinge footings for clay, arm operators and UL 325 safety. Call Shield.',
    intro: 'Swing gate installation in Coppell for single and double wrought iron leaves, new or replacing a gate that went in with the house. Strong hinge posts and correct clearance come first.',
    local: [
      'Wrought iron swing gates are one of Coppell’s common types, and many of the originals from the 1985 to 2000 build era have dropped on their posts. A replacement is the chance to fix the cause. Coppell clay swells and shrinks enough to lean a post set too shallow, and a long iron leaf adds leverage every time it opens. The gate also needs a clear arc to swing, usually inward.',
      'We confirm what the city and your HOA require, then set hinge posts in deep concrete footings sized to the leaf, hang the gate on heavy hinges with clearance for seasonal movement, and choose an arm or pad operator rated for its weight. Paired leaves are set to meet in order. Photo-eyes and reversing follow UL 325 and the gate is built to ASTM F2200. Homes in Old Town Coppell or The Lakes of Coppell can match existing iron styles.',
    ],
    faqs: [
      { q: 'Why did my old Coppell swing gate sag, and how do you prevent it?', a: 'Most sag comes from posts set too shallow for the clay, hinges too light for the leaf, or a long leaf with no support. We size the post and footing to the gate, use heavy hinges, and add a wheel or bracing on long leaves. The new gate starts level and is set up to stay that way.' },
      { q: 'Single leaf or double leaf for my driveway?', a: 'A single leaf is simpler, with one operator and one hinge post, but needs more room to swing and puts more leverage on its post. A double pair splits the width, swings in less space and suits wide drives, at the cost of two operators. We measure your drive and its slope and explain which fits better.' },
    ],
  },
  'coppell/gate-opener-installation': {
    description: 'Gate opener installation in Coppell, TX: new swing and slide operators for ageing gates, remotes, keypads, receivers and UL 325 safety set up. Call Shield.',
    intro: 'Gate opener installation in Coppell, replacing a worn-out 1990s operator or automating a gate for the first time. We size the opener to the gate, then set up remotes, keypads and safety devices.',
    local: [
      'A lot of Coppell gate opener installation is replacement. Operators fitted with homes built from 1985 to 2000 are reaching the end of their life together, often with obsolete boards and worn gearboxes. Before fitting a new one, we check the gate: a slide gate with worn wheels or a swing leaf on a post moved by clay will wear out a new opener as quickly as it wore out the old one.',
      'Once the gate moves freely, we match operator type and rating to it, mount it solidly, and reuse sound wiring or conduit. Then the access side: remotes, keypad, and a receiver compatible with any community entrance system so one remote can work both. Photo-eyes and reversing are fitted to UL 325. For homes near Denton Tap Road or in Northlake Woodlands, we finish with a full test and show you the manual release.',
    ],
    faqs: [
      { q: 'Will a new opener fit the brackets from my old Coppell operator?', a: 'Sometimes, if it is the same brand and design, but often not. Newer operators have different mounting geometry and pivot points, and reusing a bracket in the wrong place shortens the arm’s life. We set the operator where its geometry wants it and replace brackets as needed, so it pushes and pulls the gate correctly.' },
      { q: 'Do I need a new keypad when the opener is replaced?', a: 'Not always. Many keypads and receivers are compatible with a range of operators, so if yours works and is in good order, it can be reconnected. Older units that use outdated formats or fail intermittently are better replaced at the same time, since the wiring is open anyway. We test what you have and advise.' },
    ],
  },
}
export default copy
