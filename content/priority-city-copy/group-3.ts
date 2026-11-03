const copy: Record<string, { description: string; intro: string; local: string[]; faqs: { q: string; a: string }[] }> = {
  'southlake/viking': {
    description: 'Viking gate repair in Southlake, TX for heavy wrought iron swing and estate slide gates in Timarron and Carillon: batteries, boards, limits. Call Shield.',
    intro: 'Viking gate repair in Southlake for the DC operators that carry the heavy iron leaves and wide estate slide gates found across the 76092 zip. We look at the battery, the gate and the controller, in that order.',
    local: [
      'Southlake estate gates are heavy. Wrought iron swing leaves and wide driveway slide gates put a Viking where it was designed to work, but they also expose the weak points of a DC operator with battery backup. After many Texas summers in a closed housing, batteries lose capacity, and a Viking pushing a tall iron leaf will slow, stop partway or report an obstruction long before the motor itself is worn. Clay that heaves under heavy posts adds to it: a leaf that has dropped on its hinge raises the current the controller sees on every cycle.',
      'Most Viking gate operator repairs here are batteries, a control board, limit adjustment or a worn drive component, and the operator rarely needs replacing. On swing gates we meet the T-21 and G-5, and on slide gates the K-2. We rehang or adjust the gate first, then relearn limits and set obstruction sensitivity so it runs cleanly. Homes in Timarron, Carillon and along N Carroll Ave mostly had their gates fitted with the house, so we also check wiring and loop leads that have been in the ground since the late 1990s.',
    ],
    faqs: [
      { q: 'Our Southlake gate is heavy iron. Is a Viking strong enough for it?', a: 'In most cases, yes: Viking operators are built for heavy gates and high-cycle use. What we check is whether the gate still hangs true. Clay movement under a heavy post can drop a leaf enough to drag, and then even a well-matched operator struggles. We correct the hinge or post problem first, then judge the operator on a gate that moves freely by hand.' },
      { q: 'How long do the batteries in a Viking operator last?', a: 'It depends on heat, cycle count and charger health, so we test rather than guess. A battery can read normal voltage at rest and still collapse under the load of a heavy Southlake leaf. We load test it, check the charger output, and replace batteries as a set so one weak cell does not drag down the new one.' },
    ],
  },
  'southlake/faac': {
    description: 'FAAC gate repair in Southlake, TX: hydraulic swing arms, 770 in-ground units, seal kits and pressure settings on estate gates near Shady Oaks. Call Shield.',
    intro: 'FAAC gate repair in Southlake for hydraulic swing operators and underground units on formal iron entrances. Hydraulics are diagnosed by pressure, fluid and seals, and we repair them on site instead of writing them off.',
    local: [
      'A paired wrought iron swing gate on a Southlake estate drive is the kind of installation FAAC hydraulics were designed for, and the failures we see follow the hydraulic design. Seals harden after years of summer heat and the arm starts to weep oil. Fluid level drops, the leaf slows, and it may no longer hold closed against wind. Heavy iron on clay adds another factor: as a post shifts, the leaf binds near the end of travel, and the pump works against the bind until the pressure relief lets go.',
      'Seal kits, fluid, bleeding, pressure adjustment and release valve service are the usual FAAC repairs, and all of them are done at the gate. On arm units such as the 400 and 402, that covers most calls. An underground 770 sits in a foundation box below the hinge, where we also clear the drain, since a flooded box shortens its life. On the older drives around Shady Oaks and Kirkwood Hollow the board may be due as well, so we test it while we are there and tell you what we find.',
    ],
    faqs: [
      { q: 'Does Southlake heat affect a FAAC hydraulic operator?', a: 'It does, mostly through the seals. Long summers bake the rubber, and once a seal hardens the arm starts to lose fluid and the gate slows or drifts open. A seal kit and a refill put that right. We also check that the pressure is set for the weight of the leaf, because heavy iron needs more than a light gate and too little lets it stall.' },
      { q: 'Someone told us our FAAC cannot be repaired. Is that true?', a: 'Rarely. Many companies avoid hydraulic operators because they need different tools and knowledge, not because the units are finished. Leaks, slow travel and weak closing are standard repairs. Replacement makes sense when the cylinder is scored or the pump has failed, and we will show you which applies before you decide anything.' },
    ],
  },
  'southlake/us-automatic': {
    description: 'US Automatic gate repair in Southlake, TX: Patriot and Ranger 12V operators, batteries, solar panels and chargers on estate driveway gates. Call Shield.',
    intro: 'US Automatic gate repair in Southlake for Patriot swing operators, Ranger units and the Patriot RSL slide, all running a 12-volt battery charged by solar panel or plug-in charger. We start with the power side.',
    local: [
      'Every US Automatic operator moves the gate from its battery, so in Southlake the question is whether the charging side keeps up with a heavier gate than the kit was sized for. Estate lots here often have long, tree-lined drives, and an oak canopy that has grown since the late 1990s can shade a panel that once had full sun. The battery then sits a little lower each day until a wrought iron leaf stops halfway. On AC-charged installs, the charger and its low-voltage run are the parts we test first.',
      'Repairs are usually a battery, a charger, a panel relocation or a control board, rather than a new operator. On a Patriot we also check the actuator mounting, because a heavy leaf on a post that has moved in the clay puts side load on the arm. Ranger units on wider leaves get the same check. On properties off FM 1938 Randol Mill Ave or in Clariden Ranch with a long drive, we look at whether a second panel or a better position would solve the problem for good.',
    ],
    faqs: [
      { q: 'The trees on our Southlake lot have grown. Could that be why the gate dies in the evening?', a: 'Very possibly. A solar panel that is partly shaded through the afternoon cannot put back what the gate uses, and the battery runs flat toward evening. We measure panel output and battery voltage under load. If shade is the cause, moving the panel or adding capacity usually fixes it without touching the US Automatic operator.' },
      { q: 'Can a US Automatic gate run through a power cut?', a: 'Yes, because the gate always runs from the battery; the charger or panel only refills it. On an AC-charged unit the gate keeps working on stored charge until the outage ends or the battery drains. If yours stopped during an outage, the battery was likely already weak, and we test it under load to confirm.' },
    ],
  },
  'southlake/apollo': {
    description: 'Apollo gate repair in Southlake, TX: 1550 and 1650 actuators, 12V batteries, solar panels and boards on side and driveway swing gates. Call Shield.',
    intro: 'Apollo gate repair in Southlake for 12-volt swing operators, including the 1550 single and 1650 dual actuator kits. Apollo faults are mostly power faults, so we measure the battery while the gate is running.',
    local: [
      'Apollo operators, now sold under Nice, are low-power 12V units, and in Southlake they turn up on lighter swing gates, side gates and rear access gates rather than the heaviest estate iron. That is where they work well. Trouble starts when an Apollo is asked to move more than it was chosen for, such as a leaf that gained decorative panels, or one whose hinge post has leaned in the clay. The board reads the extra current as an obstruction, and the gate moves a few feet, stops and reverses.',
      'The usual repair is a battery, a solar panel cleaned or repositioned, a board, or an actuator with a bent extension tube. On a 1650 the second actuator’s cable crosses the drive, and a spliced cable there is a common source of intermittent faults. Apollo boards also need to relearn after losing power. Around Coventry Manor and the streets off FM 1709 Southlake Blvd, we check the hinges too, because an Apollo gate opener repair is wasted if the gate still binds.',
    ],
    faqs: [
      { q: 'Our Apollo gate in Southlake struggles after a cloudy week. Why?', a: 'Solar charging only replaces what the sun gives it, and a run of cloudy days, together with any shade from mature trees, lets the battery fall behind. Apollo wants 12 to 14 volts while the gate runs. We test under load, check the panel output and connections, and tell you whether a larger panel or a new battery is the real fix.' },
      { q: 'Do you still repair older Apollo-branded openers now that it is Nice?', a: 'Yes. We work on the older Apollo 1500 and 1600 as well as the 1550 and 1650, including their 833/834 and 835/836 boards. Where an original 416 or 816 actuator has failed, a current replacement on the same mounting geometry can usually go in without new brackets, and we confirm the fit before we order.' },
    ],
  },
  'southlake/ramset': {
    description: 'Ramset gate repair in Southlake, TX: RAM 100 and RAM 1000 slide operators, chains, rollers, limits and boards on busy community entrances. Call Shield.',
    intro: 'Ramset gate repair in Southlake for the RAM 100 and RAM 1000 slide operators and Ramset swing units on community entrances and wide estate slide gates. We fix the wear parts and keep a working operator in place.',
    local: [
      'Southlake has a lot of streets behind a shared entrance, and a gate there cycles every time a resident, guest or delivery van comes through. That is the use a Ramset slide operator is built for, and it is also what wears one. Drive chains stretch, sprockets wear, and the rollers under a wide gate flatten until the operator is dragging it. Add a summer afternoon in full sun and a dragging gate can trip the thermal cutout, so the entrance stops until the motor cools.',
      'We start with the gate: rollers, track and guide wheels, then chain tension and sprocket wear, then the limit switches and board relays. A RAM 1000 on a busy subdivision entrance in Timarron or Carillon will often need the chain and rollers at the same visit, because they wear together. Replacement is worth discussing only when the gearbox or motor has failed, or when the gate has outgrown the operator. Otherwise this is repair work, and we arrange it with the HOA manager so residents keep access.',
    ],
    faqs: [
      { q: 'Our Southlake entrance gate stops on hot afternoons. Is the Ramset failing?', a: 'Probably not. A Ramset that stops in the heat and recovers later is usually tripping its thermal protection because something is making it work too hard: flat rollers, a dirty track or a tight chain. We find the drag and fix it. If the operator still overheats on a free-running gate, we check whether it is correctly rated for the traffic.' },
      { q: 'Can you get parts for a Ramset that has been in since the nineties?', a: 'For most Ramset models, yes. Chains, sprockets, limit switches and many board parts are standard or still supplied. If a particular part for an older unit has been discontinued, we tell you before any work starts, so the choice between a substitute part and a new operator is made with the facts in front of you.' },
    ],
  },
  'southlake/automatic-gate-repair': {
    description: 'Automatic gate repair in Southlake, TX for 1990s-era swing, slide and HOA entrance gates in Timarron and Shady Oaks: boards, chains, posts. Call Shield.',
    intro: 'Automatic gate repair across Southlake for driveway swing gates, estate slide gates and subdivision entrances. Many of the operators here are the same age, so we usually know where to look before the cover comes off.',
    local: [
      'Southlake’s housing went up in one decade, and the gates went in with it. That means a lot of operators, control boards, chains and limit switches reached the end of their life at roughly the same time. The property mix is mostly estate lots with wrought iron swing gates or wide driveway slides, plus many subdivisions behind their own community entrance with a keypad or callbox. Heavy iron on clay soil is the other constant: posts shift a little each season, and a gate that binds strains whatever operator drives it.',
      'Our diagnosis order is the same on every call: release the operator and move the gate by hand, then check the power supply, the safety devices, the board inputs and finally the motor. Most Southlake automatic gate repairs end with a board, a limit switch, a chain, rollers or a hinge adjustment. We talk about replacement when a motor or gearbox has failed on an operator with no parts support. In Kirkwood Hollow, Shady Oaks or off N Carroll Ave, we leave the gate tested through full travel with its reversing sensors working.',
    ],
    faqs: [
      { q: 'Several gates on our Southlake street have failed this year. Is that a coincidence?', a: 'Usually not. When a whole street was built in the same few years, the gate equipment is the same age too, and boards, chains and limit switches tend to wear out in waves. It also helps the repair: if a neighbour’s gate failed on a board, we know to test that first. We still check the full system, because yours may differ.' },
      { q: 'What should I check before calling about an automatic gate?', a: 'See whether the operator has power, whether the photo-eyes are clear of plants or debris, and whether the remote and keypad both fail or only one does. Note any error lights or beeps. Use the manual release only if you need the drive clear. Those details help us bring the right parts and narrow the fault faster.' },
    ],
  },
  'southlake/electric-gate-repair': {
    description: 'Electric gate repair in Southlake, TX: buried wiring, transformers, surge-damaged boards and loop detectors on estate and entrance gates. Call Shield.',
    intro: 'Electric gate repair in Southlake for the power path behind a gate: supply, transformer, buried low-voltage runs, control board and vehicle loops. When a gate is dead or intermittent, we trace the circuit end to end.',
    local: [
      'A Southlake gate wired in the late 1990s has had a long time underground. Low-voltage runs along estate drives get nicked by landscape and irrigation work, splices that were taped rather than sealed corrode in wet clay, and conduit cracks as the soil moves. The result is a gate that works one week and not the next. Community entrances add vehicle loops cut into the pavement and keypad or callbox wiring to a pedestal, and a cracked loop after resurfacing will stop exit traffic on its own.',
      'We check the supply and the transformer output first, then continuity on each run, then the board, receiver and loop detector one by one. Spring storms bring surges, and one strike can damage several components, so we test each separately rather than replacing a whole kit. Where the original installer left out surge protection, we can add it on the supply and loop leads. In Coventry Manor, Clariden Ranch or along FM 1709 Southlake Blvd, we look for the shortest wire route before anyone suggests cutting pavers.',
    ],
    faqs: [
      { q: 'Why does my Southlake gate lose power after heavy rain?', a: 'Water finds the weakest splice. In clay soil, a buried connection that was never sealed can short or lose continuity when the ground stays wet, then recover as it dries. That pattern points us to the wiring, not the operator. We locate the fault with a meter, repair or replace the run, and seal the joints properly so it does not return.' },
      { q: 'Is a gate transformer something you replace on site?', a: 'Yes. A failed transformer, a blown fuse or a tripped GFCI outlet feeding the operator are common electric gate faults and quick to confirm. We measure input and output voltage, find out why it failed, whether a surge or a short downstream, and fix that cause as well, so the new transformer does not fail the same way.' },
    ],
  },
  'southlake/driveway-gate-repair': {
    description: 'Driveway gate repair in Southlake, TX for private estate homes: wrought iron swing leaves, wide slide gates, sagging posts and tired operators. Call Shield.',
    intro: 'Driveway gate repair for private homes in Southlake, from a pair of wrought iron swing leaves to a wide estate slide gate. When the gate is the only way off the property, we get it moving safely and then fix the cause.',
    local: [
      'Most Southlake driveway gates belong to estate homes built in the 1990s, and the gate was usually specified to match the house: tall, ornamental and heavy. That weight is the theme of the repairs. Iron leaves on clay soil pull their posts over time, so a double swing gate that once met cleanly in the middle starts to overlap or leave a gap. Wide driveway slide gates wear rollers and stretch chains. Both make an older operator labour, and both can be repaired without replacing the gate.',
      'We work from the gate inward: posts, hinges, leaf level, rollers and track, then the operator, its limits and its safety sensors. On dual swing gates we reset the leaf delay so the pair closes in order without clashing. If a gate has had privacy panels added and now stalls, we tell you whether the operator is undersized. For homes in Shady Oaks, Kirkwood Hollow or along FM 1938 Randol Mill Ave, we also show you the manual release, so a stuck gate never traps a car.',
    ],
    faqs: [
      { q: 'Our driveway gate leaves no longer meet in the middle. What happened?', a: 'Most likely a post has moved. Southlake’s clay swells and shrinks with the seasons, and a heavy iron leaf slowly levers its hinge post out of plumb. The leaf then drops or swings past its mark. We adjust the hinges, and where the post itself has shifted, we discuss resetting it, because operator adjustments alone will not hold.' },
      { q: 'Can you repair the gate without replacing the operator?', a: 'Often. Many driveway gate calls are mechanical: a worn hinge, a flat roller, a stretched chain or a bent arm. Once the gate moves freely by hand, a tired but sound operator may run well again with new limits and force settings. We replace the operator only when the motor, gearbox or board support has truly run out.' },
    ],
  },
  'southlake/sliding-gate-repair': {
    description: 'Sliding gate repair in Southlake, TX: chains, rollers, tracks, guide wheels and slide operators on wide estate driveway gates and entrances. Call Shield.',
    intro: 'Sliding gate repair in Southlake for wide estate driveway slides and subdivision entrance gates. Chain and roller wear is the usual fault here, and fixing it often brings a struggling operator back to normal.',
    local: [
      'A Southlake estate slide gate is often long and heavy, ornamental iron spanning a wide drive, and it rides on rollers in a track or on a cantilever frame. After twenty-plus years the rollers wear flat, bearings get noisy, the track collects debris, and clay that shifts under the slab can tilt it slightly out of level. The operator feels every one of those as extra load. That is why so many sliding gate calls here start with a gate that jerks, hesitates at one point, or reverses near the end of travel.',
      'Our order is rollers and track, guide wheels and gate stops, then chain tension, sprockets and idlers, and only then the operator, its limits and the board. Most Southlake sliding gate repair work ends with new rollers, a chain or a limit adjustment. If the track itself has been damaged by a vehicle, we repair or replace that section. Around Carillon, Clariden Ranch and N Carroll Ave, we also check the photo-eyes and edge sensors across the opening, since a slide gate needs working entrapment protection.',
    ],
    faqs: [
      { q: 'Why does our slide gate in Southlake drag at one spot?', a: 'A single tight spot usually means the track has lifted or dropped there, often where the slab or ground has moved in the clay, or a roller has a flat. We run the gate by hand to find it, then level or repair the track and replace worn rollers. Ignoring it overworks the operator and stretches the chain quickly.' },
      { q: 'How tight should the chain on a sliding gate be?', a: 'Snug, with a little sag along its length, never guitar-string tight. Too loose and it jumps the sprocket; too tight and it loads the motor bearings and wears the sprocket teeth. We set it to the operator maker’s guidance, check the brackets at both ends of the gate, and replace the chain if it has stretched past adjustment.' },
    ],
  },
  'southlake/swing-gate-repair': {
    description: 'Swing gate repair in Southlake, TX: heavy wrought iron leaves, hinges, posts, arms and swing operators on estate drives in Timarron and Carillon. Call Shield.',
    intro: 'Swing gate repair in Southlake for single and double wrought iron leaves on estate drives and community entrances. The hinges and posts take the weight of that iron, so we check them before the operator.',
    local: [
      'Wrought iron swing gates are a staple of Southlake estate drives, and they are heavy. Over two decades the hinge pins wear, the hinge post leans as the clay around its footing swells and shrinks, and the leaf drops at the latch end. A dropped leaf scrapes the drive, closes late or bounces off its stop, and a swing operator pushing it reads the extra effort as an obstruction. On pairs of gates, one weak leaf throws the closing sequence out, so the two leaves arrive together or clash.',
      'We release the operator and swing each leaf by hand. Stiff hinges get greased or replaced, a sagging leaf gets adjusted, and a leaning post gets an honest assessment, since resetting it may be the real fix. Then we check arm brackets, limits, force settings and leaf delay. In Timarron, Carillon and the streets off FM 1709 Southlake Blvd, much swing gate repair comes down to this mechanical work, and the operator is often fine once the gate moves freely.',
    ],
    faqs: [
      { q: 'Why has our Southlake swing gate started to drag on the drive?', a: 'The leaf has dropped, usually from hinge wear or a post that has leaned as the clay moved. Heavy iron makes it worse. We check the hinge pins and the post for plumb, then lift and adjust the leaf. If the post has moved more than the hinges can take up, we explain the options for resetting it before anything else is changed.' },
      { q: 'Can one swing gate operator be replaced and not the other?', a: 'Sometimes, if the remaining operator is sound and the replacement is compatible with the same control board. On dual gates both operators often share one board, so mismatching them causes timing problems. We check the model, the board and the condition of the other arm, then tell you whether a single replacement will run properly.' },
    ],
  },
  'southlake/gate-opener-repair': {
    description: 'Gate opener repair in Southlake, TX: remotes, keypads, callboxes, receivers, control boards and limit switches on homes and community entrances. Call Shield.',
    intro: 'Gate opener repair in Southlake for the parts that tell a gate what to do: remotes, keypads, callboxes, receivers, control boards and limits. When the motor is sound but the gate will not respond, the fault is usually here.',
    local: [
      'Southlake’s community entrances lean heavily on access control: a keypad at the pedestal, a callbox that rings a resident, remotes for every household and a vehicle loop for exit traffic. When one of those fails, the gate either ignores people or never closes. On private estate drives, the opener electronics are often the original 1990s generation, and control boards from that era are reaching the end of their working life. Remotes on older frequencies stop pairing with replacement receivers, and limit switches drift until the gate overshoots or stops short.',
      'We test each input to the board in turn: remote and receiver, keypad, callbox, loop detector, push button and safety devices. A stuck command or a shorted keypad wire can lock out everything else, so we rule those out before blaming the board. Typical gate opener repair here is a receiver, a keypad, a board or limit switches. For entrances near Coventry Manor or Shady Oaks, we work with the HOA on codes and remote programming so every household is covered.',
    ],
    faqs: [
      { q: 'Our Southlake entrance keypad lights up but the gate does not open. Why?', a: 'The keypad may be fine and the problem further along: a broken wire between keypad and board, a relay on the board, or a board that has stopped reading that input. We test the keypad output at the board first. If the keypad has had years of sun and rain, the buttons or the circuit may also have failed and need replacing.' },
      { q: 'Can you add new remotes to an older gate opener?', a: 'If the receiver supports them, yes. Many older openers use a frequency or code format current remotes do not match, and in that case a new universal receiver connected to the existing board solves it. We confirm which remotes your receiver accepts, program them, and leave a list of what is paired so it can be managed later.' },
    ],
  },
  'southlake/gate-motor-repair': {
    description: 'Gate motor repair in Southlake, TX: capacitors, gearboxes, thermal cutouts and worn motors on heavy iron swing and wide slide gates. Call Shield Gate Repair.',
    intro: 'Gate motor repair in Southlake for the drive side of an operator: motor, start capacitor, gearbox, brake and thermal cutout. Heavy iron gates load a motor hard, so we also find out why it failed.',
    local: [
      'Motors in Southlake gate operators carry heavy work. A tall wrought iron swing leaf or a wide estate slide gate needs a lot of torque, and the operators fitted during the 1990s build-out have been delivering it for decades. The usual motor-side failures follow from that. A weak start capacitor leaves an AC motor humming without turning. Gearbox wear shows up as grinding or a gate that coasts past its stop. A thermal cutout that trips on summer afternoons usually means the gate is binding, not that the motor is finished.',
      'We release the operator and check the gate runs freely, because a binding hinge or flat roller will kill a new motor as fast as the old one. Then we test the capacitor, measure motor current, inspect the gearbox and brake, and check the cutout. Capacitors and brakes are routine replacements; motor or gearbox replacement depends on parts support for that model. For homes in Carillon or Clariden Ranch, we set out the repair and replacement options side by side before work starts.',
    ],
    faqs: [
      { q: 'Our gate motor hums but the gate does not move. Is the motor dead?', a: 'Not necessarily. On an AC operator, a hum without movement is very often a failed start capacitor, which is a small part to replace. It can also be a seized gearbox or a gate that is jammed. We check the gate by hand, test the capacitor, and measure the motor before deciding anything needs replacing.' },
      { q: 'Why does the gate motor cut out in the Southlake summer heat?', a: 'Most operators have a thermal cutout that stops the motor before it overheats. On a hot day, a motor that is also fighting a heavy, dragging gate reaches that limit sooner. Once it cools it runs again. The fix is usually the gate, its hinges, rollers or post, rather than the motor itself, and we check both.' },
    ],
  },
  'southlake/emergency-gate-repair': {
    description: 'Emergency gate repair in Southlake, TX for gates stuck open or shut, vehicle damage and storm faults at estate drives and HOA entrances. 24/7. Call Shield.',
    intro: 'Emergency gate repair in Southlake when a gate is stuck shut with cars inside, stuck open and unsecured, or damaged by a vehicle or storm. We answer around the clock and make the gate safe first.',
    local: [
      'In Southlake an emergency gate call usually means one of two situations. On a private estate drive, a heavy iron gate has stopped and the family cannot get a car out, or it is stuck open overnight. At a community entrance the stakes are wider: when a subdivision gate fails, nobody on the street gets in or out until it moves, and an open entrance leaves every house unsecured. Spring storms, surges and the occasional vehicle striking a gate or pedestal are the usual triggers.',
      'Our first job is safety and access. We secure the gate, release or support it so it cannot fall, and get traffic moving, either by a temporary fix or by setting the gate to stay open under control. Then we diagnose properly: surge damage to the board, a bent leaf or track, a damaged loop or a failed operator. For entrances off N Carroll Ave or FM 1709 Southlake Blvd, we coordinate with the HOA manager and document vehicle damage for insurance.',
    ],
    faqs: [
      { q: 'A storm knocked out our Southlake gate. What should we do first?', a: 'Keep clear of the gate and any downed wiring, and do not keep pressing the remote. If you need a car out, use the manual release only if the gate is undamaged and hanging normally. Then call us. Storm faults are usually surge damage to the board, receiver or loop detector, and we test each part separately to find what failed.' },
      { q: 'A car hit our entrance gate. Can you repair it?', a: 'Usually. We make it safe first, then assess the leaf or slide panel, the hinges or track, the posts and the operator. Bent iron can often be straightened or a section remade, while the operator may only need realignment. We photograph and document the damage so the HOA or the driver’s insurer has a clear record for the claim.' },
    ],
  },
  'southlake/commercial-gate-repair': {
    description: 'Commercial gate repair in Southlake, TX for HOA entrances and business lots along SH 114: operators, callboxes, keypads and loops. Call Shield.',
    intro: 'Commercial gate repair in Southlake for subdivision entrances, managed communities and business properties. We repair the operator, callbox, keypad and vehicle loops together, because a commercial gate is only as reliable as its weakest input.',
    local: [
      'Much of Southlake’s commercial gate work is residential in character: subdivisions that sit behind their own entrance, managed by an HOA, with a gate that cycles all day. Those entrances typically combine a heavy operator, a keypad or callbox, remotes for residents and vehicle loops in the road. After decades of use, keypads and callboxes are a frequent failure point, loops crack after resurfacing, and boards installed in the same era as the houses wear out. Business and office properties along SH 114 and FM 1709 Southlake Blvd can have service yard or parking gates with the same parts.',
      'On the first visit we check the operator, the access control and the loop system together, because the fault on a commercial gate is often not in the part that looks broken. We look at duty cycle too: a gate rated for a private drive will not last on a busy entrance. Repairs are usually boards, keypads, callboxes, loop detectors, chains and rollers. We schedule work with the property or HOA manager, keep residents informed, and leave the gate in a safe open or closed state while parts arrive.',
    ],
    faqs: [
      { q: 'Our Southlake HOA entrance callbox keeps failing. Repair or replace?', a: 'It depends on age and parts. An older callbox with weathered buttons, a failing display or no remaining parts support is often better replaced with a current unit that can take your existing directory and codes. A newer unit with one failed part is a repair. We check which applies, and whether the problem is really in the callbox or the gate board behind it.' },
      { q: 'Can you work on a managed community gate without shutting residents out?', a: 'Yes. We plan the repair with your management company, set the gate to stay open under supervision or work in stages, and keep the loop and safety devices working as we go. Where a part has to be ordered, we leave the gate in the safest practical state and confirm what residents should expect until the work is finished.' },
    ],
  },
  'southlake/residential-gate-repair': {
    description: 'Residential gate repair in Southlake, TX for homeowners: driveway, side and pedestrian gates, latches, hinges and sensors for kids and pets. Call Shield.',
    intro: 'Residential gate repair in Southlake for every gate around the home, from the main driveway gate to side, backyard and pedestrian gates. We fix the hardware and make sure safety features protect children and pets.',
    local: [
      'A Southlake home often has more than one gate. Besides a wrought iron driveway gate, there may be side gates, a pedestrian gate beside the main leaves and a rear access gate, many of them installed with the house in the late 1990s. Iron on clay soil means sagging leaves, latches that no longer line up, and self-closing hinges that have weakened. For families, those small faults matter: a side gate that does not latch lets a dog out, and an automated gate without working sensors is a hazard for children.',
      'We cover the whole property on one visit if needed: rehang or adjust sagging gates, replace hinges and latches, and repair the operator on the automated gate. On every automated gate we test the photo-eyes, edge sensors and auto-reverse, because UL 325 entrapment protection is what keeps a closing gate from injuring anyone. In Coventry Manor, Kirkwood Hollow or Timarron, a residential gate repair often includes resetting a pedestrian gate latch so it closes and catches on its own.',
    ],
    faqs: [
      { q: 'Our side gate in Southlake will not latch any more. Why?', a: 'The post or the leaf has usually moved. Clay soil shifts posts slightly through wet and dry seasons, and a small move is enough to misalign a latch. We adjust the hinges, realign or replace the latch and, where the post itself has leaned, explain whether resetting it is worth doing. A properly closing side gate matters if you have pets or small children.' },
      { q: 'How do I know the safety sensors on my gate still work?', a: 'Place a soft object such as a cardboard box in the gate’s path while it closes; it should stop and reverse on contact or when the photo-eye beam is broken. Never use a person or pet to test. If it does not reverse, stop using the automation and call us. We test and adjust every safety device as part of a residential repair.' },
    ],
  },
  'southlake/automatic-gate-installation': {
    description: 'Automatic gate installation in Southlake, TX: estate swing and slide gates planned for heavy iron, clay soil, HOA approval and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Southlake, planned around the weight of estate iron, the clay under the posts and the approvals your subdivision may require. We size the operator to the gate and its use.',
    local: [
      'New automatic gates in Southlake are often replacing equipment that went in during the 1990s build-out, or automating an existing wrought iron gate on an estate drive. The choices are a swing gate, single or double, or a slide gate where the drive is wide or slopes. Heavy iron is the planning constraint: it decides the operator class, the hinge type and how deep the posts must go into expansive clay. Many homes sit inside an HOA, so appearance and placement may need approval before work begins.',
      'We survey the drive, measure the gate and its weight, and check power availability before recommending an operator. Footings are sized for clay movement, and slide gates get a level track or cantilever frame. Every installation includes the entrapment protection required by UL 325, gate construction that meets ASTM F2200, photo-eyes and edge sensors, and a manual release. For homes in Shady Oaks, Clariden Ranch or along N Carroll Ave, we confirm what the city and your HOA require and prepare the paperwork with you.',
    ],
    faqs: [
      { q: 'Does Southlake clay soil change how a gate is installed?', a: 'Yes. Expansive clay swells when wet and shrinks in summer, and heavy iron gates magnify any post movement. We set deeper, wider footings for gate posts and use hinges that allow adjustment later. On slide gates we level the track carefully and allow for movement. The aim is a gate that still lines up years from now, not just on installation day.' },
      { q: 'Can you automate our existing iron gate?', a: 'Often. We inspect the gate for straightness, weight and condition, check the hinges and posts, and confirm it can meet ASTM F2200 for automated use, which may mean adding mesh or guards. If the gate is sound, we fit an operator sized to it. If it is sagging or weak, we tell you whether repairing or replacing it first makes more sense.' },
    ],
  },
  'southlake/electric-gate-installation': {
    description: 'Electric gate installation in Southlake, TX: power runs, transformers, surge protection, loops and access control for estate and HOA gates. Call Shield.',
    intro: 'Electric gate installation in Southlake with the power and control side planned properly: the supply, buried conduit, surge protection, vehicle loops and access control. Good wiring decides how long a gate stays reliable.',
    local: [
      'Many Southlake gates now failing were wired in the late 1990s with direct-buried cable and unsealed splices, and those runs are the root of a lot of intermittent faults. A new electric gate here is the chance to do it differently. Estate drives can be long, which affects voltage drop and the choice between a mains-powered operator and a DC unit with battery backup. Clay soil moves, so conduit and junction boxes need to allow for it, and spring storms make surge protection worthwhile from day one.',
      'We plan the power source with you and your electrician, run conduit to the operator and to any keypad or callbox, and fit surge protection on the supply and loop leads. Vehicle loops are cut and sealed before final paving where possible. The installation meets UL 325 safety requirements, with photo-eyes and edge sensors, and the gate meets ASTM F2200. For homes in Carillon, Timarron or near FM 1938 Randol Mill Ave, we confirm what the city and your HOA require before trenching begins.',
    ],
    faqs: [
      { q: 'Should a Southlake gate have battery backup?', a: 'On a gate that is the only way in and out, we think so. Spring storms cause outages, and an AC operator without backup stops when the power does. A DC operator with batteries keeps working through most outages, and some AC operators can take a backup module. We size the batteries to the gate’s weight and how often it runs.' },
      { q: 'Do I need an electrician for a new electric gate?', a: 'Usually, yes, for the mains supply to the operator location, depending on your property and what the city requires. We specify the circuit, coordinate with the electrician, then handle the low-voltage side: operator wiring, loops, keypads, callboxes and safety devices. That division keeps the high-voltage work properly permitted and the gate wiring in the hands of gate specialists.' },
    ],
  },
  'southlake/sliding-gate-installation': {
    description: 'Sliding gate installation in Southlake, TX: wide estate drives, cantilever or track gates, level footings on clay, HOA approval and UL 325. Call Shield.',
    intro: 'Sliding gate installation in Southlake for wide estate drives and sloped approaches where a swing gate would not fit. We plan the track or cantilever, the footings and the operator together.',
    local: [
      'Estate driveway slides are one of the standard gate types in Southlake, chosen where a drive is too wide for swing leaves, slopes toward the house, or leaves no room for leaves to open inward. The gates themselves are often heavy ornamental iron, and the ground under them is clay that moves with the seasons. That makes the base of a slide gate the critical part. A track laid on a slab that later lifts or cracks becomes the source of most of the roller and chain wear on older slide gates.',
      'We decide between a V-track gate and a cantilever design based on the drive surface and the space beside the opening. Footings and the operator pad are sized for clay, and the track or rollers are set level along the full run. The operator is sized for gate weight and cycles. Safety is built in: UL 325 entrapment protection with photo-eyes and edge sensors, and guards and mesh so the gate meets ASTM F2200. In Kirkwood Hollow or Clariden Ranch, we confirm what the city and your HOA require.',
    ],
    faqs: [
      { q: 'Cantilever or track for a Southlake sliding gate?', a: 'A cantilever gate rides on rollers beside the opening, so nothing sits across the drive, which suits clay where a slab may move. It needs room beside the opening for the full gate plus a counterbalance tail, more than a track gate needs. A V-track gate is simpler but depends on a level, stable drive. We assess both on site.' },
      { q: 'How long does a sliding gate installation take to plan?', a: 'Design, HOA approval and fabrication take most of the time, and the timeline depends on your association and the gate design. On site, the work is footings, the operator pad, the track or rollers, the gate, the operator, wiring and safety devices, followed by testing. We give you a realistic schedule once the gate is designed and approval is in hand.' },
    ],
  },
  'southlake/swing-gate-installation': {
    description: 'Swing gate installation in Southlake, TX: single and double wrought iron leaves, deep clay footings, operator sizing, HOA review, UL 325. Call Shield.',
    intro: 'Swing gate installation in Southlake for single and double wrought iron gates on estate drives. Posts, hinges and footings get as much attention as the operator, because heavy iron leaves are only as good as what holds them.',
    local: [
      'Wrought iron swing gates suit the look of Southlake’s 1990s estate homes, and they remain a natural choice for new and replacement gates. The challenges are weight and soil. A pair of tall iron leaves puts constant leverage on the hinge posts, and expansive clay works those posts loose if the footings are shallow. The drive matters too: a leaf that swings uphill needs a different hinge or operator approach, and leaves that open toward the house need clear room for a parked car.',
      'We set deep, wide footings sized for the leaf weight, use adjustable heavy-duty hinges, and choose between articulated arm, linear actuator or in-ground operators depending on the post and the look you want. Each installation includes UL 325 safety devices, photo-eyes and, where needed, edge sensors, and the gate meets ASTM F2200 for automated use. On drives in Timarron, Shady Oaks or off N Carroll Ave, we confirm what the city and your HOA require before the posts go in.',
    ],
    faqs: [
      { q: 'How deep should swing gate posts be in Southlake clay?', a: 'Deeper than a fence post, because the gate levers against the post every time it opens. The exact depth depends on leaf weight, width and post size, and we size it per job rather than using a fixed number. We also use concrete footings wide enough to resist the soil pushing and pulling as it swells and shrinks through the year.' },
      { q: 'Should our swing gates open in or out?', a: 'Usually inward, toward the property, so the leaves do not swing into the street or sidewalk, and many communities prefer that. On a drive that slopes up toward the house, inward-opening leaves may hit the ground, and an outward swing or a slide gate becomes the option. We check the slope and clearances and confirm what your HOA allows.' },
    ],
  },
  'southlake/gate-opener-installation': {
    description: 'Gate opener installation in Southlake, TX: operators sized for heavy iron, keypads, callboxes, remotes, loops and UL 325 safety devices. Call Shield.',
    intro: 'Gate opener installation in Southlake for existing gates that need automation or an operator upgrade. We size the opener to the gate, then set up remotes, keypads, callboxes and safety devices so it works the way your household does.',
    local: [
      'Many Southlake gate opener installations replace an original 1990s operator whose board, limits and drive have reached the end of the line, often on a perfectly good wrought iron gate. Others add automation to a manual estate gate. Either way, the starting point is the gate: its weight, width, swing direction or slide length, and the condition of the posts in clay soil. Community entrances add keypads, callboxes and exit loops, and the opener has to be rated for the daily cycles a shared gate sees.',
      'We confirm the gate moves freely by hand and repair any sag or drag before mounting the opener. Then we choose a swing or slide operator with headroom for the gate’s weight, consider battery backup, and install remotes, a keypad or callbox, and loops as needed. UL 325 entrapment protection, photo-eyes and edge sensors are part of every job, and the gate must meet ASTM F2200. For homes in Carillon or Coventry Manor, we confirm what the city and your HOA require first.',
    ],
    faqs: [
      { q: 'Can a new opener go on our 1990s Southlake gate?', a: 'Usually, yes. The iron from that era is often in good shape, while the operator is what wore out. We check the hinges, posts and leaf level, add any guards or mesh needed for ASTM F2200, and choose an opener sized for the weight. If the posts have moved in the clay, we fix that first so the new opener is not fighting the gate.' },
      { q: 'What access options can a new gate opener have?', a: 'Remotes, a keypad with codes for family and service visitors, a callbox for guests, a vehicle loop for free exit, and in some systems phone or app control. We set up what you will actually use, program it, and show you the manual release. For community gates we coordinate codes and remote lists with the HOA.' },
    ],
  },
  'celina/viking': {
    description: 'Viking gate repair in Celina, TX for heavy acreage swing gates and new HOA entrances off Preston Road and FM 455: batteries, limits, boards. Call Shield.',
    intro: 'Viking gate repair in Celina, from DC operators on new community entrances to heavy gates on acreage beyond the city limits. We check batteries, limit settings and the gate itself before blaming the operator.',
    local: [
      'Celina has two very different places for a Viking. Inside the new developments, a Viking may be driving a recently installed entrance or a residential slide gate, and the faults there are often set-up faults: limits programmed before the gate settled, obstruction sensitivity left at a default, or a loop that was damaged during paving. Out on the acreage across the extraterritorial land, Viking operators sit on long, heavy gates where clay heaves the posts, and a leaf that drops on its hinge makes the controller report overloads.',
      'Most Viking gate operator repairs in Celina are battery replacement, limit and force relearning, a control board or drive wear, and the operator itself is rarely what has failed. Viking’s swing models include the T-21, R-6 and G-5, and the K-2 is its slide unit. Near Light Farms, Mustang Lakes and along FM 428, we adjust the gate first, then set the Viking up properly so it is not working against a misaligned leaf.',
    ],
    faqs: [
      { q: 'Our Viking gate in Celina is new but keeps stopping halfway. Is it faulty?', a: 'Probably not. On recently installed gates, the common cause is limits or force settings made before the gate and posts had settled. As the clay moves and the leaf finds its level, the original settings no longer match. We check the gate hangs and moves freely, then relearn the limits and set obstruction sensitivity to suit the actual gate.' },
      { q: 'Does a Viking on an acreage gate need special batteries?', a: 'It needs batteries matched to the operator and sized for the gate’s use, and on remote gates good charging matters as much as the battery. Heat in a sealed control box shortens battery life. We load test the batteries, check the charger or charge source, and replace them as a set so the system keeps the gate running through outages.' },
    ],
  },
  'celina/faac': {
    description: 'FAAC gate repair in Celina, TX: hydraulic swing arms, 770 underground operators and 844 slide units at new homes and estates near Light Farms. Call Shield.',
    intro: 'FAAC gate repair in Celina for hydraulic swing operators, underground units and the 844 slide operator. Hydraulics have their own diagnosis, pressure, fluid and seals, and we repair them rather than replace by default.',
    local: [
      'FAAC hydraulics in Celina tend to appear on the more formal gates: an iron swing pair at a new estate home, an entrance in one of the newer developments, or an underground operator where the owner wanted the hinge area clean. Newer installs bring commissioning issues, such as pressure set too low for a heavy leaf or limits set before the gate settled. On acreage, the long leaf and clay soil create binding as posts move, and the hydraulic pump works against it until the relief valve opens and the gate stalls.',
      'Typical FAAC repairs are seal kits, fluid and bleeding, pressure and relief adjustment, and board faults. The 400 and 402 arms are serviced at the gate. A 770 underground unit sits in a foundation box below the hinge, and in Celina clay a box that drains poorly will hold water and damage the operator, so we clear and test the drain. On slide gates, the 844 is an electromechanical unit we also repair. Around Mustang Lakes, Cambridge Crossing or Preston Road, we tell you plainly what the operator needs.',
    ],
    faqs: [
      { q: 'Our FAAC underground gate in Celina stopped after heavy rain. Why?', a: 'Water in the foundation box is the first suspect. Clay drains slowly, and if the box drain is blocked or was never connected, rain can sit around the operator. We pump out and clear the box, check the operator and wiring for water damage, and test the drain so the next storm does not repeat it. Early action often saves the operator.' },
      { q: 'How often should a FAAC hydraulic operator be serviced?', a: 'It depends on how hard the gate works, but an annual check of fluid level, seals, pressure setting and mounting is sensible for most homes. Busy entrance gates need more frequent attention. Catching a weeping seal early is a simple repair, while running a FAAC low on fluid for months can damage the pump and turn it into a larger job.' },
    ],
  },
  'celina/elite': {
    description: 'Elite gate repair in Celina, TX: SL3000UL and CSW200UL slide and swing operators, capacitors, boards and limits at homes and HOA entrances. Call Shield.',
    intro: 'Elite gate repair in Celina for AC slide and swing operators on residential and community gates. Capacitors, boards and limit switches are the usual parts, and they are still supplied through the LiftMaster Elite Series.',
    local: [
      'Elite operators are AC units, and in Celina they suit gates inside the developments, where mains power is available at the entrance or the drive. On newer residential slide gates and HOA entrances, the problems we expect come from installation and set-up: limits that overshoot or stop short once the gate has settled, photo-eyes knocked out of line by landscaping, and loop detectors confused by a loop cut too close to the gate. Elite units that have been in longer show the age faults instead: weak capacitors and sticking relays.',
      'Most Elite gate operator repairs come down to a start capacitor, a control board or a limit switch assembly, all replaceable without changing the operator. Because Elite has belonged to Chamberlain since 2003 and the SL3000UL and CSW200UL continue as LiftMaster Elite Series, parts are well supported. The SL595 and Miracle One are discontinued, so on those we confirm parts first. On gates near Sutton Fields, Creeks of Legacy or FM 455, we also check for battery backup, since an AC Elite stops when the power does.',
    ],
    faqs: [
      { q: 'Our Elite gate in Celina hums but does not move. What is the fault?', a: 'On an AC Elite operator, a hum with no movement usually means a weak start capacitor, one of the most routine Elite repairs. It can also be a jammed gate or a binding hinge on a post that has moved in the clay. We release the operator, check the gate by hand, test the capacitor and then measure the motor before replacing anything.' },
      { q: 'Can an older Elite operator be connected to a new keypad or callbox?', a: 'Generally, yes. Most Elite boards take standard dry contact inputs, so a new keypad, callbox or receiver can trigger them. We check the board model and input terminals, wire the new device, and confirm it does not interfere with the safety inputs. If the board itself is near the end of its life, we tell you before adding new equipment.' },
    ],
  },
  'celina/apollo': {
    description: 'Apollo gate repair in Celina, TX: solar-charged 1550 and 1650 swing operators, 12V batteries and boards on ranch and acreage gates. Call Shield Gate Repair.',
    intro: 'Apollo gate repair in Celina for the solar-charged 12-volt swing and slide operators found on acreage and ranch gates. A flat battery shuts a remote property, so we test the power side under load first.',
    local: [
      'Apollo operators are built around low power draw, which is why they suit the acreage and ranch gates across Celina’s extraterritorial land, often far from a mains supply. A small solar panel keeps a 12V battery topped up, and the system depends on that balance. Long farm leaves, heavier than the kit expected, draw more power per cycle; posts in clay lean and make the leaf bind; and a panel facing the wrong way or dusty from a gravel road falls behind. The gate then moves a few feet and stops.',
      'Apollo wants 12 to 14 volts while the gate is running, so we measure under load, not at rest. Repairs are usually a battery, panel cleaning or relocation, a board, or a failed 816 actuator. On a 1650 dual kit, the cable to the second actuator crosses the drive, and splices there cause intermittent faults. For properties off FM 428, FM 455 or Preston Road outside the developments, we also check post plumb, since a Nice Apollo gate opener cannot overcome a leaf that drags.',
    ],
    faqs: [
      { q: 'Our Celina ranch gate is on solar and dies after a few cloudy days. Why?', a: 'The panel and battery are sized for a certain number of daily cycles in normal sun. Cloudy weather, a dusty panel or a heavier gate than planned all tip that balance, and the battery runs down. Apollo sizes panel wattage to cycle count, and dual gates need double. We test both, then recommend a bigger panel, a new battery or both.' },
      { q: 'What battery does an Apollo operator need?', a: 'A sealed 12V battery of the type the manual specifies. Apollo’s ETL manuals call for at least 33 amp hours with top-mounted posts, and side-terminal batteries are not to be used. We fit the correct battery, clean and tighten the connections, check the charge rate from the panel or charger, and test the gate through full travel.' },
    ],
  },
  'celina/ramset': {
    description: 'Ramset gate repair in Celina, TX: RAM 100 and RAM 1000 slide operators, chains, limits and boards on new community and commercial entrances. Call Shield.',
    intro: 'Ramset gate repair in Celina for the RAM 100 and RAM 1000 slide operators and Ramset swing units at community entrances and light commercial sites. We set them up correctly and replace worn parts.',
    local: [
      'Celina’s growth means a lot of new entrance gates and new commercial lots, and a Ramset slide operator is built for that busier duty. On a recently installed entrance, the faults are often commissioning issues: limits set before the gate settled, a loop detector reacting to a loop laid too close to the gate, or a keypad never fully programmed. As those gates age, the duty cycle takes over: chains and sprockets stretch, limit switches fail, and board relays wear. A dragging gate in summer sun can also trip the thermal cutout.',
      'We start with the gate and the access devices, then the drive components, then the operator. A RAM 1000 on a busy development entrance near Lilyana or Cambridge Crossing, or a RAM 100 at a commercial site along Preston Road, gets the same checks: track and rollers, chain and sprockets, limits, relays and loop detector settings. We replace the failed parts and look at the others, since they usually wear together. Replacement is worth discussing only when the motor or gearbox has failed.',
    ],
    faqs: [
      { q: 'Our new Celina entrance gate keeps opening by itself. Is the Ramset faulty?', a: 'More often it is the loop or its detector. A loop cut too close to the gate, a loop damaged when paving was finished, or a detector set too sensitive can read the gate or a passing car as a vehicle and open it. We test the loop, adjust or replace the detector, and confirm the operator itself is responding correctly.' },
      { q: 'Is a RAM 100 enough for a community gate?', a: 'It depends on the gate weight and how many cycles it sees each day. The RAM 1000 is the commercial slide operator in the range, built for heavier and busier gates. If a lighter operator is struggling on a busy entrance, we check its rating against the gate and traffic and tell you honestly whether repair or an upgrade makes sense.' },
    ],
  },
  'celina/automatic-gate-repair': {
    description: 'Automatic gate repair in Celina, TX for new HOA entrances, residential slide gates and solar ranch gates off FM 455 and Preston Road. Call Shield Gate Repair.',
    intro: 'Automatic gate repair across Celina, from brand-new subdivision entrances to solar-powered ranch gates out in the extraterritorial land. We diagnose the gate, the power and the access system as one.',
    local: [
      'Automatic gates in Celina fall into two groups. Inside the fast-growing developments, gates are new, and the faults are often about how they were set up: limits programmed before the gate settled, keypads not fully configured, or loops damaged during paving. Beyond the city limits, the acreage has long ranch swing gates on battery and solar, a long way from help, where a flat battery leaves the property shut. Clay soil runs through both and moves the posts on long leaves.',
      'We start with the gate by hand, then power and batteries, then safety devices and board inputs, then the operator. In the developments, many repairs are a limit relearn, a loop detector adjustment or keypad programming. On acreage, they are batteries, panels, charge controllers and post or hinge work. We tell you plainly when a new installation should go back to the builder under warranty. In Light Farms, Mustang Lakes or along FM 428, we leave every automatic gate tested with working reversing sensors.',
    ],
    faqs: [
      { q: 'The gate at our new Celina home will not close fully. Is that a warranty issue?', a: 'It may be, so check with your builder or installer first. On recent installations, a gate that stops short is often a set-up issue: limits made before the posts and leaf settled in the clay, or a photo-eye knocked out of line during landscaping. We can diagnose it and tell you what we found, so you know whether it is a warranty matter.' },
      { q: 'What details help when we call about a broken automatic gate?', a: 'The type of gate, whether it is on mains power or solar, what it does or fails to do, any lights or beeps on the control box, and whether remotes and keypad both fail. For acreage gates, tell us how to find the gate and whether there is another way onto the property. Those details let us bring the right parts.' },
    ],
  },
  'celina/electric-gate-repair': {
    description: 'Electric gate repair in Celina, TX: charge controllers, batteries, buried wiring, loops and surge faults at new entrances and acreage. Call Shield.',
    intro: 'Electric gate repair in Celina for the power and control circuits behind a gate: mains supply or solar charging, transformers, buried wiring, boards and vehicle loops. We trace the fault from source to operator.',
    local: [
      'The electrical side of a Celina gate depends on where it is. In the newer developments, a gate is usually on mains power with a transformer, a keypad and loops cut into fresh paving, and the electrical faults we expect are early ones: a loop cut during later concrete work, a splice made in a hurry, or a detector wired but never tuned. On acreage beyond the city limits, the system is a solar panel, a charge controller and a battery, often with long cable runs across open ground that storms and mowing both damage.',
      'We test the supply first: mains voltage and transformer output, or panel output and charge rate. Then continuity on each buried run, then the board, receiver and loop detector one by one. Spring storms bring surges and lightning, and one strike can take out several components, so each is tested separately. We add surge protection where it was left out. For entrances near the Dallas North Tollway or properties along FM 455, we suggest conduit and sealed junctions that will outlast the next storm season.',
    ],
    faqs: [
      { q: 'Lightning struck near our Celina ranch gate and it is dead. What failed?', a: 'Usually the control board, and sometimes the charge controller, receiver or keypad as well, because the surge travels along every connected wire. On open acreage, long cable runs act like antennas. We test each component separately so you only replace what failed, and we recommend surge protection on the panel, battery and accessory leads to reduce damage next time.' },
      { q: 'How do you find a break in buried gate wiring?', a: 'We measure continuity and voltage at each end of the run to confirm it is the cable, then use a locator to trace the route and find the fault. Where the original conduit is intact, we can pull new wire through it. Where it is not, we pick the shortest route that avoids drives and landscaping before suggesting any digging.' },
    ],
  },
  'celina/driveway-gate-repair': {
    description: 'Driveway gate repair in Celina, TX for private homes: residential slide gates, long acreage swing leaves, limits, posts and solar power. Call Shield.',
    intro: 'Driveway gate repair for private homes across Celina, from a residential slide gate in a new development to a long swing gate across an acreage drive. We get the gate moving safely, then fix the cause.',
    local: [
      'Private driveway gates in Celina are of two kinds. Newer homes in the developments may have a residential slide or a swing gate installed within the last few years, and the repairs are often adjustments the original installer should have revisited: limits, force settings and photo-eye alignment after the gate settled. Acreage homes have long driveway leaves, often a single wide swing gate on battery and solar, where clay movement leans the hinge post, the leaf drops, and the operator struggles until it stops.',
      'We start at the gate: hinges, post plumb, leaf level and rollers or track, then the power supply or battery, then the operator and its settings. On acreage driveway gates we check the panel, battery and charge controller under load. For homes in Creeks of Legacy, Lilyana or out along FM 428, we show you the manual release, because when the driveway gate is the only way out, you need to know how to open it yourself while waiting for repairs.',
    ],
    faqs: [
      { q: 'Our long driveway gate in Celina sags at the far end. Can that be fixed?', a: 'Usually. A long leaf puts heavy leverage on its hinge post, and clay soil lets the post lean over time. We adjust or replace the hinges and, where needed, add a support wheel. If the post itself has moved, we explain the options for resetting it, because the operator will keep straining until the leaf is level again.' },
      { q: 'Can I leave my driveway gate open while it is broken?', a: 'Yes, most operators have a manual release that lets you open the gate by hand and leave it open. We show you how to use yours. If the gate is damaged or hanging badly, do not force it; leave it as it is and call us, since a heavy leaf that comes off its hinges is dangerous to anyone nearby.' },
    ],
  },
  'celina/sliding-gate-repair': {
    description: 'Sliding gate repair in Celina, TX: residential slide gates and entrance slides, rollers, tracks, chains, limits and loop detectors. Call Shield Gate Repair.',
    intro: 'Sliding gate repair in Celina for residential slide gates and community entrance slides in the newer developments. Most faults begin in the track, rollers, chain or limits, so we fix those before touching the operator.',
    local: [
      'Residential slide gates are one of the main gate types in Celina, along with community entrances that slide across a road. Because so many are recent, the sliding gate faults we expect are early ones: track laid on a slab that has since moved in the clay, a cantilever frame slightly out of level, limits set before the gate bedded in, or loops placed where the gate itself triggers them. Construction traffic in a growing area adds dust, gravel and the odd vehicle strike on track and gate.',
      'We work through rollers and track, guide wheels and stops, chain tension and sprockets, then limits, board and loop detector. Most sliding gate repair in Celina ends with a track repair, new rollers, a chain adjustment or reprogrammed limits. If a vehicle has bent the track or the gate frame, we repair that section. In Mustang Lakes, Sutton Fields or near the Dallas North Tollway, we also confirm photo-eyes and edge sensors work across the full opening, since slide gates need entrapment protection.',
    ],
    faqs: [
      { q: 'Our new Celina slide gate stops a foot short of closing. Why?', a: 'Often the limits were set before the gate settled, or the track has shifted slightly in the clay so the gate now meets more resistance near the end. The operator reads that as an obstruction and stops. We check the gate runs freely by hand, correct the track or rollers if needed, then reset the limits and force so it closes fully.' },
      { q: 'What maintenance does a sliding gate need?', a: 'Keep the track clear of gravel, mud and debris, especially near construction. Check that the rollers turn smoothly and the chain has not loosened. Test the safety sensors with a soft object regularly. We recommend a professional inspection about once a year to adjust chain tension, check limits and replace worn rollers before they damage the track or the operator.' },
    ],
  },
  'celina/swing-gate-repair': {
    description: 'Swing gate repair in Celina, TX: long ranch and acreage leaves, sagging hinges, leaning posts, actuators and solar operators. Call Shield Gate Repair.',
    intro: 'Swing gate repair in Celina for long ranch and acreage swing gates and the swing gates on homes in the new developments. We start with hinges and posts, because a swing leaf is only as good as what holds it.',
    local: [
      'Ranch and acreage swing gates are typical of Celina’s extraterritorial land, and they are long. A wide farm leaf is a lever, and the clay under its hinge post shrinks in summer and swells after rain, so the post leans, the leaf drops at the latch end and the operator has to lift as well as push. Many of these gates run on solar and battery, so the extra current also drains the battery faster. In the developments, swing gate faults are more often limits and settings on new installations.',
      'We release the operator, swing the leaf by hand and check the hinges, the post, the latch end and any support wheel. Then the actuator, mounting brackets, limits and force settings. Most swing gate repair in Celina is mechanical first: hinges, leveling and post work, then actuator or battery. On properties along FM 455, FM 428 or Preston Road outside the developments, we also check how the gate stops and latches, since wind loads a long leaf hard.',
    ],
    faqs: [
      { q: 'Why does our long ranch gate in Celina keep stopping before it closes?', a: 'A dropped leaf is the usual reason. As the hinge post leans in the clay, the far end drags or meets the latch late, and the operator stops on overload. On solar gates the extra effort also pulls the battery down. We level the leaf, adjust or replace hinges, check the post, and then test the battery and operator under load.' },
      { q: 'Can a swing gate actuator be repaired or must it be replaced?', a: 'It depends on the fault. A bent extension tube, a worn mounting bracket or a limit that has drifted can often be fixed. A motor or gear failure inside a sealed actuator usually means replacing the actuator, not the whole operator. We confirm which part has failed and whether a compatible actuator is available for your control board before ordering.' },
    ],
  },
  'celina/gate-opener-repair': {
    description: 'Gate opener repair in Celina, TX: keypads, remotes, receivers, loop detectors, boards and limits on new HOA entrances and acreage gates. Call Shield.',
    intro: 'Gate opener repair in Celina for keypads, remotes, receivers, control boards, loop detectors and limit settings. On new entrances and acreage gates alike, the operator is often fine and the control side is at fault.',
    local: [
      'At Celina’s new community entrances, gate opener problems are often about set-up. Keypads were installed but never fully programmed, remote lists may be incomplete, loop detectors are set too sensitive or too dull, and limits were programmed before the gate settled. On acreage gates, receivers and keypads sit far from the house in open weather, and dust, heat and surges take a toll. A remote that only works from a few feet away often points to the receiver or its antenna rather than the remote.',
      'We test each input to the board in turn: receiver and remotes, keypad, callbox, loop detector, push button and safety devices. A stuck input or a shorted keypad wire can block every other command, so we rule that out before blaming the board. Most gate opener repair here is programming, a receiver, a keypad, a detector or limits. For entrances in Lilyana, Cambridge Crossing or along FM 455, we set codes and remotes up with the HOA so every resident has working access.',
    ],
    faqs: [
      { q: 'Our remote only opens the Celina acreage gate when we are right next to it. Why?', a: 'Weak range usually points to the receiver end: a failing receiver, a damaged or poorly placed antenna, or interference from metal around the control box. A low remote battery is also possible. We test the remote, check the antenna and its cable, and if needed move it higher and clear of the gate, which on open acreage often restores good range.' },
      { q: 'Can you reprogram all the codes on our community keypad?', a: 'Yes. We can reset installer and master codes, set resident and service codes, and clear old ones. If the keypad stores codes for the whole community, we work from a list provided by the HOA or management company, test each code type, and leave the master code with the board or manager so future changes are straightforward.' },
    ],
  },
  'celina/gate-motor-repair': {
    description: 'Gate motor repair in Celina, TX: DC motors, gearboxes, capacitors and thermal cutouts on acreage swing gates and new entrance operators. Call Shield.',
    intro: 'Gate motor repair in Celina for the motor, gearbox, capacitor and thermal cutout inside an operator. Long acreage leaves and busy entrances load a motor hard, so we find the cause before replacing anything.',
    local: [
      'Celina gate motors work in two very different settings. On acreage, a DC motor drives a long ranch leaf from a battery, and when clay tilts the post and the leaf drags, the motor pulls more current, heats up and wears its gears faster. In the newer developments, AC motors at community entrances and on residential slides cycle often, and their failures are capacitors, thermal cutouts tripping on summer afternoons, and gearbox wear on gates that bind. New installs sometimes overwork a motor because force and limits were never adjusted.',
      'We release the operator and move the gate by hand first; a binding gate will ruin a new motor quickly. Then we test the capacitor on AC units, measure motor current, check the gearbox and brake, and look at the thermal cutout and what is tripping it. Capacitors and cutouts are routine fixes. A motor or gearbox replacement depends on parts for that model. For homes in Sutton Fields or properties off FM 428, we set out repair and replacement side by side.',
    ],
    faqs: [
      { q: 'Our acreage gate motor in Celina runs slowly and gets hot. What is wrong?', a: 'A slow, hot DC motor is usually working against too much load or too little voltage. A dropped leaf on a leaning post, stiff hinges or a weak battery all cause it. We check the gate by hand, test the battery under load and measure motor current. Fixing the cause often restores normal speed without replacing the motor.' },
      { q: 'What does a gate motor thermal cutout do?', a: 'It switches the motor off when it gets too hot, to protect the windings. Once the motor cools, it works again. Frequent trips mean the motor is overworked, often by a dragging gate, high cycle counts or summer heat in direct sun. We find the reason rather than bypassing the cutout, since bypassing it can burn out the motor.' },
    ],
  },
  'celina/emergency-gate-repair': {
    description: 'Emergency gate repair in Celina, TX for gates stuck shut or open, dead solar ranch gates, storm surges and vehicle damage. 24/7 service. Call Shield.',
    intro: 'Emergency gate repair in Celina, day or night, for gates stuck shut or open, a flat battery on a remote acreage gate, storm damage or a vehicle strike. We make it safe and get people moving first.',
    local: [
      'An emergency in Celina looks different depending on location. On acreage beyond the city limits, a ranch gate on solar may be the only way on or off the land, and a dead battery or failed board after a storm leaves the property shut. In the new developments, a community entrance that stops traps residents inside or out, and a gate stuck open is a security problem. Construction traffic around new building sites also adds the risk of vehicle strikes on entrance gates, pedestals and keypads.',
      'Our first priority is safety and access: securing a damaged gate so it cannot fall, then opening it manually or setting it to stay open under control so traffic can move. Then we diagnose properly, whether it is a battery, board, surge damage, a bent leaf or a damaged loop. For entrances off Preston Road or FM 455, we coordinate with the HOA or management company and document vehicle damage for insurance. On acreage gates we bring batteries and common boards.',
    ],
    faqs: [
      { q: 'Our Celina ranch gate is stuck shut and we cannot get out. What can we do?', a: 'First try the manual release on the operator, which lets you open the gate by hand on most models. If the gate is damaged or the release will not work, do not force it. Call us and tell us how to reach the gate. On solar acreage gates a flat battery is the most likely cause, and we carry replacements for that reason.' },
      { q: 'Is a gate stuck open an emergency?', a: 'For a community entrance or a property with livestock, pets or children, often yes, because an open gate is a security and safety problem. We can secure it, set it to close safely or lock it temporarily, and then repair the fault. For a home driveway with no urgent risk, we will talk through whether it can wait for a scheduled visit.' },
    ],
  },
  'celina/commercial-gate-repair': {
    description: 'Commercial gate repair in Celina, TX for new HOA entrances, apartments and business lots: operators, keypads, callboxes and loop detectors. Call Shield.',
    intro: 'Commercial gate repair in Celina for HOA community entrances, multi-family sites and business properties. We repair the operator, access control and loops together, and we plan the work around residents and tenants.',
    local: [
      'A large share of commercial gate work in a city growing as fast as Celina comes from new community entrances. Each development has its own gate, keypad or callbox and loop system, often handed from builder to HOA within a few years. The faults appear early: loops damaged when final paving was laid, keypads not fully programmed, limits set before the gate settled, and duty cycles higher than the operator was rated for once the neighborhood fills up. Business and multi-family sites along Preston Road and the Dallas North Tollway add parking and service gates.',
      'We check the operator, the access system and the loops on the first visit, since the fault on a commercial gate is often not in the obvious part. Then we look at whether the operator suits the traffic now, not the traffic when it was installed. Repairs are typically boards, keypads, callboxes, loop detectors, chains and rollers. For entrances at Light Farms or Mustang Lakes, we coordinate with the management company, keep the gate safely open or closed while parts arrive, and document what we did.',
    ],
    faqs: [
      { q: 'Our Celina HOA took over the entrance from the builder. What should we check?', a: 'Ask for the operator manuals, master codes for the keypad or callbox, the remote list and any warranty details. Then have the gate inspected: limits, loop condition, safety sensors, and whether the operator is rated for the traffic once the community is full. Catching set-up problems early is easier while any warranty still applies.' },
      { q: 'Can you set up a maintenance schedule for a commercial gate?', a: 'Yes. Busy entrances benefit from regular inspections of the operator, chain or arm, rollers and hinges, loops, keypads and safety devices. The interval depends on cycle count and gate type. Planned visits catch wear before it becomes an outage, and they give the HOA or property manager a record of the gate’s condition for budgeting.' },
    ],
  },
  'celina/residential-gate-repair': {
    description: 'Residential gate repair in Celina, TX for homeowners: driveway, side, pedestrian and acreage gates, latches, hinges and safety for kids and pets. Call Shield.',
    intro: 'Residential gate repair in Celina for every gate at your home, from the driveway gate to side, backyard and pedestrian gates, and the long swing gate on an acreage property. Safety for children and pets comes first.',
    local: [
      'Celina homeowners range from new houses in the developments to families on acreage beyond the city limits, and their gates differ accordingly. In a new subdivision, side and backyard gates were often set in fresh soil that has since settled, so latches no longer line up and self-closing hinges stop pulling the gate shut. On acreage, a long swing gate on solar keeps animals in and visitors controlled, and when the post leans in the clay, the latch misses and the operator struggles.',
      'We repair or replace hinges and latches, rehang sagging gates, and repair the operator on automated gates, all in one visit where possible. Every automated gate gets a safety check of photo-eyes, edge sensors and auto-reverse, so UL 325 entrapment protection works around children and pets. For homes in Creeks of Legacy, Cambridge Crossing or on acreage off FM 428, a residential gate repair often means making sure a side or pedestrian gate closes and latches on its own again.',
    ],
    faqs: [
      { q: 'The side gate on our new Celina home no longer latches. Why so soon?', a: 'New construction soil settles, and clay moves further with wet and dry seasons, so a gate post set during building can shift within a year or two. A small move is enough to misalign a latch. We adjust the hinges, realign or replace the latch, and tell you whether the post needs resetting, so the gate closes properly for pets and children.' },
      { q: 'Is it safe to have an automatic gate with young children at home?', a: 'It can be, if the safety devices work and are tested. A properly installed gate has photo-eyes, edge sensors and an auto-reverse that stops it on contact. Teach children not to play near the gate, keep remotes out of reach, and test the reverse with a soft object regularly. We check and adjust every device during a residential repair.' },
    ],
  },
  'celina/automatic-gate-installation': {
    description: 'Automatic gate installation in Celina, TX for new homes and acreage: swing and slide gates, solar or mains power, clay footings, HOA review. Call Shield.',
    intro: 'Automatic gate installation in Celina for new homes in the developments and acreage properties beyond the city limits. We plan power, footings, approvals and safety before any gate goes up.',
    local: [
      'Installation in Celina means planning for two very different sites. In the new developments, a homeowner adding a driveway gate needs HOA approval, a design that fits the community, and mains power planned with the house. On acreage across the extraterritorial land, gates are often long ranch swings or slides far from power, so solar charging and battery sizing become part of the design. In both, clay soil decides the footings, and ground around new construction is still settling, which makes deep, wide footings essential.',
      'We survey the site, measure the opening and slope, and choose a swing or slide gate and operator sized for weight and use. Footings are set for clay, and for solar gates we size the panel and battery to the daily cycles. Every installation has UL 325 entrapment protection, photo-eyes and edge sensors, a manual release, and a gate built to ASTM F2200. For homes in Light Farms, Sutton Fields or on land off FM 455, we confirm what the city and your HOA require before work begins.',
    ],
    faqs: [
      { q: 'Can we install a solar-powered automatic gate on our Celina acreage?', a: 'Yes, and on land far from a mains supply it is often the practical choice. We size the panel and battery for the gate’s weight and daily cycles, mount the panel where it gets full sun year round, and allow for cloudy spells. Long, heavy gates need more capacity, and a dual gate roughly doubles what the system must supply.' },
      { q: 'Do we need HOA approval for a driveway gate in a Celina development?', a: 'In most planned communities, gates, fencing and visible equipment need approval, and some restrict style, height or placement. We confirm what the city and your HOA require, provide drawings and specifications for the application, and design the gate to fit those rules. Starting with approval avoids having to change a gate after it is built.' },
    ],
  },
  'celina/electric-gate-installation': {
    description: 'Electric gate installation in Celina, TX: mains power or solar, conduit, surge protection, loops and keypads for new homes and acreage gates. Call Shield.',
    intro: 'Electric gate installation in Celina, with the power and control side planned from the start: mains or solar supply, conduit, surge protection, loops, keypads and callboxes. Wiring done right keeps a gate reliable.',
    local: [
      'Celina’s new construction is a good time to get gate power right. In a development, conduit for the operator, keypad and loops can go in before driveways and landscaping, avoiding later trenching, and loops can be cut and sealed before final paving so they are not damaged. On acreage, an electric gate may be a long run from the house or on solar entirely, and the choice affects operator type, battery capacity and cable size. Spring storms and lightning across open land make surge protection necessary.',
      'We plan the power with you and your electrician: a dedicated circuit to the operator or a solar system sized for the gate. Conduit runs to every device, junctions are sealed for clay and wet ground, and surge protection goes on the supply, panel and loop leads. The gate meets UL 325 with photo-eyes and edge sensors, and ASTM F2200 for construction. For homes in Mustang Lakes, Lilyana or off Preston Road, we confirm what the city and your HOA require before trenching.',
    ],
    faqs: [
      { q: 'Should our Celina acreage gate be solar or mains powered?', a: 'It depends on the distance to power, the gate weight and how often it runs. A long trench for mains can cost more than a solar system, but a heavy, busy gate may need more solar capacity than is practical. We compare both for your site, including battery backup, and recommend the system that will keep the gate running reliably.' },
      { q: 'When should gate conduit go in on a new build?', a: 'Before the driveway is poured and before landscaping, if possible. That lets conduit run under the drive to the operator, keypad and any second leaf, and lets loops be placed properly. We can work with your builder to mark the route and depth, then complete the gate wiring once the drive and gate are in place.' },
    ],
  },
  'celina/sliding-gate-installation': {
    description: 'Sliding gate installation in Celina, TX: residential slide gates, cantilever or track, level footings on settling clay, HOA review and UL 325. Call Shield.',
    intro: 'Sliding gate installation in Celina for residential drives in the new developments and wide openings on acreage. We plan the track or cantilever, footings and operator for soil that is still settling.',
    local: [
      'Residential slide gates are a common choice in Celina’s newer neighborhoods, where drives are close to the street and a swing gate would not have room to open. On acreage, a slide gate suits wide openings or sloped ground. The challenge across Celina is the base: new construction soil keeps settling for years, and clay swells and shrinks with the seasons, so a track on a slab that moves will develop roller and limit faults soon after installation. Planning for that up front matters.',
      'We choose between a V-track and a cantilever design based on the drive surface and side space. Cantilever gates keep the drive clear, which suits ground that may move. Footings and the operator pad are set deep and level, and the operator is sized for gate weight and cycles. Every installation has UL 325 entrapment protection, photo-eyes, edge sensors and ASTM F2200 guarding. For homes in Cambridge Crossing, Creeks of Legacy or along FM 428, we confirm what the city and your HOA require.',
    ],
    faqs: [
      { q: 'Will a sliding gate work on a new Celina driveway that may still settle?', a: 'Yes, with the right design. A cantilever slide gate rides on rollers mounted on posts beside the opening, so settlement of the drive under the opening does not affect it. If a track gate is preferred, we pour or reinforce a level track base and allow for adjustment. Either way, we set footings below the most active soil.' },
      { q: 'How much space does a slide gate need beside the drive?', a: 'Enough for the gate to slide fully open, which is at least the opening width, plus extra for a cantilever tail. A cantilever needs more side space than a track gate. We measure the side yard, check obstacles like trees, fences and utilities, and confirm the layout before designing the gate.' },
    ],
  },
  'celina/swing-gate-installation': {
    description: 'Swing gate installation in Celina, TX: long ranch leaves and residential pairs, deep clay footings, solar operators, HOA review and UL 325. Call Shield.',
    intro: 'Swing gate installation in Celina for long ranch and acreage leaves and residential swing pairs in the developments. Posts, hinges and footings come first, then an operator sized for the leaf.',
    local: [
      'Ranch and acreage swing gates are a fixture of the land around Celina, usually long single leaves or wide pairs on open ground. Length is leverage, so a long leaf needs a heavy post set deep in clay that swells and shrinks with the seasons, or it will lean and drop within a few years. Many of these gates run on solar, so the operator and battery have to suit the leaf. In the developments, swing gates are shorter, but the drive slope, the HOA look and parking clearance shape the design.',
      'We set deep, wide footings sized for the leaf, use adjustable heavy-duty hinges, and add a support wheel where a very long leaf benefits from one. The operator is chosen for leaf length and weight, with solar and battery sized to daily cycles on acreage. Every job has UL 325 safety devices and an ASTM F2200 compliant gate. For acreage off FM 455 or Preston Road, or a home in Light Farms, we confirm what the city and your HOA require before setting posts.',
    ],
    faqs: [
      { q: 'How long can a ranch swing gate in Celina be with an automatic opener?', a: 'It depends on the operator rating, gate weight and wind load. Most operators list a maximum leaf length and weight, and a long ranch gate may need a heavier operator or a pair of shorter leaves. We weigh and measure the gate, check the rating, and recommend the setup that will not overwork the operator or the posts.' },
      { q: 'Can a swing gate open uphill on a sloped Celina drive?', a: 'Only if the leaf clears the ground through its whole swing. Options include rising hinges, a leaf cut to the slope, opening the gate the other way, or choosing a slide gate instead. We check the slope across the full arc, show you the options, and confirm what your HOA allows before anything is built.' },
    ],
  },
  'celina/gate-opener-installation': {
    description: 'Gate opener installation in Celina, TX: swing and slide openers, solar kits, keypads, remotes, loops and UL 325 sensors for homes and acreage. Call Shield.',
    intro: 'Gate opener installation in Celina for gates that need automation or an operator upgrade, in the new developments and on acreage. We size the opener to the gate, set the limits after it settles, and install the access devices you need.',
    local: [
      'Many Celina homeowners automate a gate that was installed as a manual gate, and acreage owners often add an opener to an existing ranch gate. Either way, the opener has to suit the gate’s length and weight, and on acreage that usually means a solar-charged DC unit with the panel and battery sized to the cycles. Limits set before a new gate has settled are a frequent cause of early faults, so we plan a follow-up check. Clay soil and fresh construction mean we inspect posts and hinges first.',
      'We confirm the gate moves freely by hand, fix any sag or drag, and then mount a swing or slide opener with headroom for the gate’s weight. We install remotes, a keypad or callbox, and loops as needed, plus battery backup. Every job includes UL 325 entrapment protection with photo-eyes and edge sensors, and the gate must meet ASTM F2200. For homes in Sutton Fields or Lilyana, or land along FM 455, we confirm what the city and your HOA require before installation.',
    ],
    faqs: [
      { q: 'Can you put an opener on our existing Celina ranch gate?', a: 'Usually, if the gate is straight, the hinges are sound and the post is firm. We check the leaf weight and length, the post in the clay and the latch, then choose an opener rated for it, usually solar with a battery on acreage. If the gate needs mesh or guards to meet ASTM F2200, we add those during installation.' },
      { q: 'Why do you come back to check a new gate opener?', a: 'New gates and posts settle, especially in fresh soil and clay, and a gate that changes position slightly will no longer match its original limits and force settings. A follow-up visit lets us adjust them so the opener runs smoothly and the safety reverse stays reliable. It is a simple step that prevents many early faults.' },
    ],
  },
}
export default copy
