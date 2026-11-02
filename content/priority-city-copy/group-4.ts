const copy: Record<string, { description: string; intro: string; local: string[]; faqs: { q: string; a: string }[] }> = {
  'highland-park/viking': {
    description: 'Viking gate repair in Highland Park, TX: limit drift, DC batteries and boards on heavy ornamental iron swing gates along short estate frontages. Call Shield.',
    intro: 'Viking gate repair in Highland Park for the DC swing and slide operators carrying heavy decorative iron. We check the battery, the hinges and the posts before we decide anything about the operator itself.',
    local: [
      'A Viking is usually chosen because the gate is heavy, and Highland Park ironwork often is: tall wrought iron leaves, sometimes original to a house built when the town was laid out between 1907 and 1924. Viking swing units such as the T-21 and R-6 set travel with mechanical limit switches, and when a post in Highland Park clay leans a little, the leaf no longer stops where the limit expects. The result is a gate that bumps its stop, reverses, or leaves a gap at the latch.',
      'Most of what we find on a Viking here is repairable: a tired battery, a limit that needs resetting once the post is plumb again, worn pivots under the iron, or a board hit by a storm. We would replace a Viking only for real gearbox wear or a board that is no longer supported. On narrow drives off Armstrong Parkway or in Old Highland Park, we also realign the photo eyes, since a short drive leaves little margin.',
    ],
    faqs: [
      { q: 'Why does my Viking swing gate in Highland Park stop short of closing in late summer?', a: 'Dry months shrink the clay around the hinge post, and a heavy iron leaf pulls the post slightly out of plumb. The leaf then meets its latch at a different point than the mechanical limit was set for. We reset the post or hinge first, then adjust the Viking limits, so the fix holds once the ground moves back.' },
      { q: 'Does a Viking need a battery even with mains power at the gate?', a: 'Most Viking installs run DC with a battery so the gate still works in a power cut. That battery is a consumable and wears out in Texas heat even when mains charging is fine. A Viking that has turned sluggish or stops partway is often asking for a new battery, which we load test before touching anything else.' },
    ],
  },
  'highland-park/faac': {
    description: 'FAAC gate repair in Highland Park, TX: hydraulic 400 and 402 arms, 770 in-ground units, seals, pressure and 455 D boards on estate iron gates. Call Shield.',
    intro: 'FAAC hydraulic gate repair in Highland Park, where smooth, quiet swing operators and hidden in-ground units suit gates that are part of the look of the house. We reseal and repressurize rather than replace.',
    local: [
      'FAAC operators move a gate with hydraulic pressure, not a chain or a gear train, and that softness is why they appeal behind ornamental iron in Highland Park. The in-ground FAAC 770 sits in a box beneath the hinge so the frontage stays clean, but Highland Park clay drains slowly after heavy rain and a box that holds water will shorten the life of the operator. On the surface-mounted 400 and 402 arms, the usual faults are weeping seals, low fluid and lost pressure.',
      'We start by checking fluid level and condition, then test operating pressure, and only then look at the 455 D board, which is a known weak point on older installs. A seal kit and a pressure reset return most FAAC hydraulic arms to service. On paired swing gates in Lakeside or Turtle Creek Acreage, we also clear the in-ground box drains and inspect the keyed release valve, which can start to leak on its own.',
    ],
    faqs: [
      { q: 'Water sits in the box under my FAAC 770 after storms. Is that a problem?', a: 'Yes, over time. The 770 is built to live underground, but it relies on the foundation box draining, and slow-draining clay in Highland Park can leave it standing in water. We clear the drain, check the motor and wiring for water ingress, and confirm the box is not filling from a downspout or a sprinkler line nearby.' },
      { q: 'Another company said my FAAC hydraulic gate cannot be repaired. Is that true?', a: 'Rarely. Some technicians only work on chain and screw drives and quote a replacement when they find hydraulics. A FAAC that is slow, weak or will not hold closed usually needs fluid, seals or a pressure adjustment. We carry out that work on site and test the closing force afterwards.' },
    ],
  },
  'highland-park/us-automatic': {
    description: 'US Automatic gate repair in Highland Park, TX: Patriot swing operators, 12V batteries, chargers and shaded solar panels on estate iron gates. Call Shield.',
    intro: 'US Automatic repair in Highland Park for Patriot and Ranger DC operators on driveway and courtyard gates. On these battery systems the power side fails far more often than the operator, so we test it first.',
    local: [
      'US Automatic builds DC operators meant to run from a battery, topped up by a solar panel or a plug-in charger. On Highland Park frontages a panel can end up in shade from the house, a wall or a canopy that has grown since the install, and the battery slowly loses ground until the gate stalls at dawn. Heavy iron leaves make that worse, because a Patriot pushing a decorative gate draws more current each cycle than one moving a light picket.',
      'Our first step on any US Automatic in Highland Park is a battery test under load, then the panel or charger output, then the board. A sealed battery reading near normal at rest can still collapse the moment the motor starts. Where the power side checks out, we look at the arm, the hinges and the post, since clay movement binds a leaf. Courtyard gates off Mockingbird Lane and in Highland Park West often need the photo eyes moved too.',
    ],
    faqs: [
      { q: 'My US Automatic gate works in the afternoon and struggles in the morning. Why?', a: 'That pattern almost always points to the battery. Overnight the gate runs on stored charge alone, and a worn battery has nothing left by morning; the panel or charger refills it during the day. We load test the battery, check whether shade has crept over the panel, and size the replacement to the cycles you actually run.' },
      { q: 'Should I replace my older US Automatic Patriot or repair it?', a: 'Repair, in most cases. The Patriot is a simple DC arm, and the parts that wear, the battery, the charge controller, the board and the arm itself, can each be replaced on their own. We would talk about a new operator only if the arm is badly worn or the gate has grown heavier than the Patriot was sized for.' },
    ],
  },
  'highland-park/apollo': {
    description: 'Apollo gate opener repair in Highland Park, TX: 1550 and 1650 actuators, 12V batteries, 835 and 836 boards and spliced cables on iron gates. Call Shield.',
    intro: 'Apollo gate repair in Highland Park for 1550 single and 1650 dual swing openers on driveway and courtyard gates. These are 12 volt systems, so most of our diagnosis begins at the battery under load.',
    local: [
      'Apollo, now sold under Nice, made the 1550 and 1650 as 12 volt DC swing openers, and the dual 1650 suits the paired iron leaves found across Highland Park. The trouble is age. Many of these openers were fitted long enough ago that the original 833 or 834 board is obsolete, and the board relearns its travel whenever it loses power. A heavy decorative leaf on a hinge that has worn, or a post moved by clay, makes the actuator work harder and trips the current sensing.',
      'We test battery voltage while the gate runs, because Apollo wants 12 to 14 volts under load and never below 11. Then we check the actuator limits, the program switches and the cable, since a spliced 816 cable across a short drive is a frequent source of intermittent faults. Where an actuator is finished, the TITAN 12L is listed as a bolt-in replacement on the same mounting. We see these questions in Old Highland Park and Lakeside.',
    ],
    faqs: [
      { q: 'My Apollo gate opens a few feet and stops. Is the actuator failing?', a: 'Usually not. Apollo lists low battery voltage under load as the first cause, then a binding gate, a bent extension tube or current sensitivity set too fine. On 835 or 836 boards, program switch 10 left on with an older 416 actuator causes the same symptom. We work through those in order before replacing anything.' },
      { q: 'Can a newer actuator fit my old Apollo mounting brackets in Highland Park?', a: 'Often, yes. Distributors describe the TITAN 12L as a bolt-in replacement for the older 416 and 816 actuators on the 1550 and 1650 mounting geometry, so the pivot arm and gate bracket can usually stay. That matters on ornamental iron, where welding new brackets would mark a finish the owner wants left alone.' },
    ],
  },
  'highland-park/ramset': {
    description: 'Ramset gate repair in Highland Park, TX: RAM 100 slide operators, thermal cutouts, repeat part failures and heavy iron slide gates on tight lots. Call Shield.',
    intro: 'Ramset gate repair in Highland Park for RAM 100 and RAM 1000 slide operators. Where a Ramset keeps failing the same way, we look for the reason in the gate and the traffic before fitting the part again.',
    local: [
      'Swing gates dominate Highland Park, but some lots use a slide gate where there is no room for a leaf to swing, and a Ramset RAM 100 is one of the operators we find on them. Highland Park ironwork is heavy, and a slide gate that has gained weight from added infill or panels, or that runs on worn rollers, makes a Ramset run hot. A unit that trips its thermal cutout on a July afternoon is often reporting load, not a motor at the end of its life.',
      'On a Ramset that keeps losing the same part, we establish how many cycles it really runs and move the gate by hand to feel for drag. Roller wear, a track that has lifted with the clay, or a chain set too tight will each wear the drive train early. On shared drives or multi-unit properties near Preston Road and Highland Park West, a RAM 1000 may be the better match for the traffic, and we say so when it is.',
    ],
    faqs: [
      { q: 'My Ramset slide gate stops working on hot afternoons, then recovers. What is happening?', a: 'That is very often the thermal cutout doing its job. Heat builds in the motor when the gate is heavy or drags, and Texas afternoons add to it. We check the rollers, the track and the gate alignment, because reducing the load usually ends the shutdowns, and replacing the motor without fixing the drag would only repeat them.' },
      { q: 'Is it worth repairing a Ramset RAM 100 in Highland Park?', a: 'Usually, if the gate is a residential one with modest traffic. The parts that wear on a RAM 100 are serviceable. If the same gate serves several households or a busy service drive, we compare its real cycle count with what the operator is meant for, and a RAM 1000 may be the more honest long term answer.' },
    ],
  },
  'highland-park/automatic-gate-repair': {
    description: 'Automatic gate repair in Highland Park, TX for ornamental iron swing and courtyard gates: old boards, sensors, hinges and shifted posts. Call Shield.',
    intro: 'Automatic gate repair in Highland Park for estate driveway and courtyard gates, many of them decorative iron that the owner wants kept. We repair the operator, sensors and hardware without changing the look of the frontage.',
    local: [
      'Highland Park was laid out between 1907 and 1924, and its gate work reflects that: ornamental iron on short frontages, estate driveway swing gates, and courtyard gates tucked close to the house. The automation behind those gates has often been in place for decades, so the faults we meet are obsolete control boards, hinge and pivot wear under heavy iron, and posts pulled out of square by the clay. A gate that fails here can block the street, not just a driveway.',
      'Our order of work in Highland Park is mechanical first. We release the operator and swing the gate by hand, looking for a dropped leaf, a dry pivot or a post that has leaned. Then we check the photo eyes, which are easy to knock out of line on a narrow drive, and finally the board and receiver. Where a board is no longer made, we fit a current one behind the existing ironwork. Homes in Lakeside and along Armstrong Parkway see each of these.',
    ],
    faqs: [
      { q: 'My Highland Park gate is original to the house. Will automatic gate repair mean changing it?', a: 'No. The gate, hinges and posts are separate from the operator, so we can replace a board, an operator or the safety devices without altering the ironwork. Where the hinge or post is the real problem, we repair it in a way that keeps the original leaf, and we tell you plainly if any part of the gate itself needs work.' },
      { q: 'What should I check before calling about a gate that will not open?', a: 'Look at whether the operator has power, whether anything is in front of the photo eyes, and whether the gate moves freely when released by hand. Note any lights or beeps on the control box. That information helps us bring the right parts, though we test everything ourselves once we are there.' },
    ],
  },
  'highland-park/electric-gate-repair': {
    description: 'Electric gate repair in Highland Park, TX: dead control boards, transformers, buried wiring, surge damage and loop faults on estate gates. Call Shield.',
    intro: 'Electric gate repair in Highland Park for the power and control side of driveway and courtyard gates: supply, transformers, wiring, boards and vehicle loops, traced end to end before any part is condemned.',
    local: [
      'Electric faults in Highland Park often come from age rather than abuse. Operators installed decades ago may sit on low-voltage runs buried under old brick drives and garden beds, with splices that were never sealed and transformers well past their design life. When a board fails here, it may be a model nobody makes any more, which is one of the patterns we expect in this town. Storm surge adds to it, reaching the board through the supply or a keypad lead.',
      'We trace power from the breaker to the operator first, measuring the transformer output and checking every splice we can reach, then test the board inputs, the receiver and the loop detector. A gate that works some days and not others usually has a failing connection, not a failed motor. Where old wire runs through intact conduit, we pull new wire rather than dig. Along Preston Road and in Old Highland Park, we also add surge protection where none was fitted.',
    ],
    faqs: [
      { q: 'Can you replace an electric gate board that is no longer manufactured?', a: 'Yes. Where the original board is obsolete, we fit a current board compatible with the motor and wire it to modern safety devices. The ironwork and often the operator housing stay as they are. We test every input afterward, including the photo eyes and any loop detector, so the new board sees the gate exactly as the old one should have.' },
      { q: 'Why did my Highland Park gate stop working after a thunderstorm?', a: 'A nearby strike or surge can travel along the supply, a keypad cable or a loop lead and damage the board, the receiver or the loop detector, sometimes all at once. We check each part individually so only what actually failed is replaced, and we recommend surge protection on the exposed runs so the next storm does less harm.' },
    ],
  },
  'highland-park/driveway-gate-repair': {
    description: 'Driveway gate repair in Highland Park, TX for wrought iron estate swing gates on short frontages: hinges, posts, operators and safety eyes. Call Shield.',
    intro: 'Driveway gate repair for Highland Park homes, where the drive is often short and the gate is often heavy iron. We get the gate moving safely first, then deal with what actually caused the fault.',
    local: [
      'A private driveway in Highland Park is usually short, with the gate close to the street and the house close behind it. That puts pressure on every repair: there is little room for a car to wait, the swing arc is tight, and the gate is often the most visible piece of ironwork on the frontage. Estate driveway swing gates here are heavy, and over the years the hinge, the pivot and the post take the strain before the operator does.',
      'For Highland Park driveway gate repair we start with the leaf itself. If it has dropped, we look at the hinge and post before the operator, because a heavy gate dragging on its post will burn out any motor in time. Then we check that the photo eyes cover the short drive properly and that timers suit the space. We work on driveway gates throughout Highland Park West and Old Highland Park, and around Flippen Park.',
    ],
    faqs: [
      { q: 'My driveway gate scrapes the drive as it opens. What causes that?', a: 'Usually a worn hinge or a post that has leaned, letting the leaf drop at the latch end. Highland Park clay moves with the seasons and a heavy iron leaf amplifies it. We measure the drop, then reset or brace the post or replace the hinge, and readjust the operator once the gate swings level again.' },
      { q: 'Can my driveway gate be opened by hand if the operator fails?', a: 'Almost every operator has a manual release, often a key or a lever on the arm or box. We will show you where yours is and how to use it, so you are never trapped in or out. If the release itself has seized, we free it or replace it during the repair.' },
    ],
  },
  'highland-park/sliding-gate-repair': {
    description: 'Sliding gate repair in Highland Park, TX: rollers, tracks, chains and operators on iron slide gates where tight lots leave no room to swing. Call Shield.',
    intro: 'Sliding gate repair in Highland Park for the slide gates used where a short frontage leaves no space for a swing leaf. We repair the track, rollers, chain and operator as one moving system.',
    local: [
      'Most gates in Highland Park swing, so a slide gate here is usually a deliberate choice: a lot where a leaf would hit the house, a wall or a parked car. Those gates carry the same heavy ornamental iron as the swing gates nearby, and that weight rests on a pair of rollers and a track set in clay that heaves and shrinks. When the track lifts or settles unevenly, the gate rides up, binds, and the operator reports an obstruction.',
      'Highland Park sliding gate repair starts with the gate off the operator. We roll it by hand, check the rollers and the guide wheels at the top, and look at the track for low spots or lifted sections. Chain tension and sprocket wear come next, then the operator and its limits. A short slide run also leaves little margin for safety devices, so we check the edges and eyes. We see this on properties off Mockingbird Lane and in Highland Park West.',
    ],
    faqs: [
      { q: 'My slide gate shudders and stops halfway. Is the motor going?', a: 'Not usually. A shudder partway along the track points to a worn roller, a lifted section of track or a guide wheel that has seized. The operator senses the extra resistance and stops to protect itself. We find the high spot or worn part, fix it, and then check that the operator force settings are back where they belong.' },
      { q: 'How often should a sliding gate in Highland Park be serviced?', a: 'A residential slide gate with light use benefits from a yearly check of rollers, track, chain tension and safety devices. A gate serving several households or a service drive needs it more often. Keeping the track clear of leaves and gravel in between does more for the rollers than any lubricant.' },
    ],
  },
  'highland-park/swing-gate-repair': {
    description: 'Swing gate repair in Highland Park, TX: dropped iron leaves, worn pivots, shifted posts and operator arms on estate and courtyard gates. Call Shield.',
    intro: 'Swing gate repair in Highland Park for single and paired iron leaves on driveways and courtyards. Heavy decorative gates wear their hinges and posts first, so that is where our inspection begins.',
    local: [
      'Wrought iron swing gates are the defining gate type in Highland Park, many hung on frontages first built in the town’s early decades. A leaf of that weight hangs entirely from its hinges and post, and clay soil that swells and shrinks with the seasons moves the post a little every year. The common result is a leaf that sags at the latch, rubs the drive, or no longer meets its partner in the middle on a paired gate.',
      'For Highland Park swing gate repair we look at the hinge pins, pivots and post before the operator arm. Worn pivots get replaced, a leaning post gets reset or braced, and only then do we adjust the operator, since tuning an arm to a crooked leaf just hides the problem. Courtyard gates close to the house often need the arm geometry checked too. We repair swing gates in Lakeside, Turtle Creek Acreage and along Armstrong Parkway.',
    ],
    faqs: [
      { q: 'Our paired iron gates no longer meet in the middle. Can that be corrected?', a: 'Yes. On a paired swing gate, one leaf dropping or one post leaning is enough to throw off the meeting point. We find which side has moved, correct the hinge or post, and then reset both operator limits so the leaves close together and latch cleanly, without the arms fighting each other.' },
      { q: 'Is it safe to keep using a swing gate that has started to sag?', a: 'For a short time, but it gets worse. A sagging leaf puts extra load on the operator and the hinges, and it can catch on the drive and stop unpredictably. If the gate is heavy, stop running it automatically and use the manual release until the hinge or post is repaired.' },
    ],
  },
  'highland-park/gate-opener-repair': {
    description: 'Gate opener repair in Highland Park, TX: remotes, keypads, receivers, control boards and limit settings on older estate gate openers. Call Shield.',
    intro: 'Gate opener repair in Highland Park for the controls that tell a gate what to do: remotes, keypads, receivers, boards and limits. We often update an older opener without touching the iron.',
    local: [
      'Many gate openers in Highland Park have been working for a very long time, and their weak points are the electronics rather than the iron. Remotes from an older system may no longer be sold, receivers fade, and control boards that were current when the house was last renovated are now obsolete. On short drives, keypads and receivers sit close to the street, which also exposes them to weather and the occasional knock from a delivery vehicle.',
      'When a Highland Park gate opener stops responding, we test the inputs one at a time: remote, keypad, push button and any phone entry. If the board ignores all of them, we check for a stuck command or a blocked safety input before calling it failed. Limits are often the issue when a gate stops short or reverses. Where a board is unavailable, we fit a current one. This work comes up across Old Highland Park and near Highland Park Village.',
    ],
    faqs: [
      { q: 'Our old gate remotes stopped working and replacements are not sold any more. What now?', a: 'We can usually fit a new receiver to the existing opener and match modern remotes to it, or replace the control board if the receiver is built in. The ironwork and the opener itself can often stay. We program every remote and the keypad on site and check that old codes no longer open the gate.' },
      { q: 'Why does my gate opener reverse just before it closes?', a: 'Usually because something tells it there is an obstruction: a photo eye out of line, a force setting too sensitive, or a leaf dragging near the end of travel. On a short Highland Park drive the eyes are close to the gate and easy to bump. We check each in turn and reset the limits once the cause is fixed.' },
    ],
  },
  'highland-park/gate-motor-repair': {
    description: 'Gate motor repair in Highland Park, TX: capacitors, gearboxes, thermal cutouts and worn motors on operators moving heavy ornamental iron. Call Shield.',
    intro: 'Gate motor repair in Highland Park for operators that hum, overheat or run without moving the gate. Heavy iron leaves are hard on motors, so we check the load before we condemn the motor.',
    local: [
      'A gate motor in Highland Park often has a heavy job: moving a solid ornamental iron leaf that may weigh far more than the gates the operator was first sold for. When that leaf also drags on a worn hinge or a post that clay has pushed out of line, the motor runs hot every cycle. Over time that shows up as a tripping thermal cutout, a failed start capacitor or a gearbox that has begun to grind.',
      'Our first check is the gate on its own, moved by hand with the operator released, because a motor repair that leaves the bind in place will fail again. Then we test the capacitor, the thermal cutout and the motor windings, and listen to the gearbox under load. A failed capacitor is a small repair; a worn gearbox may justify a rebuild or a new operator. We do gate motor repair on estate gates near Exall Lake and along Preston Road.',
    ],
    faqs: [
      { q: 'My gate motor hums but the gate does not move. What has failed?', a: 'A humming motor that will not turn usually has a failed start capacitor, a seized gearbox or a gate that is jammed. We check the gate by hand first, then test the capacitor, which is the most frequent and least costly cause. If the capacitor is good, we look at the gearbox and the motor windings next.' },
      { q: 'Is it better to rebuild a gate motor or replace the whole operator?', a: 'It depends on what failed and how old the operator is. Capacitors, thermal cutouts and limit parts are routine replacements. A worn gearbox on an older operator with an obsolete board is where replacement starts to make sense. We give you both options with the reasoning, and keep the gate and its brackets either way.' },
    ],
  },
  'highland-park/emergency-gate-repair': {
    description: 'Emergency gate repair in Highland Park, TX: gates stuck open or shut, vehicle strikes and storm damage on iron frontages. 24/7 answering. Call Shield.',
    intro: 'Emergency gate repair in Highland Park for gates stuck open, stuck shut or damaged by a car or a storm. On a short frontage a failed gate can block the street, so we treat it as urgent.',
    local: [
      'An emergency on a Highland Park gate looks different from one on a long suburban drive. With little room between the gate and the street, a gate stuck shut leaves a car waiting in traffic, and a gate stuck open leaves the property exposed on a busy road such as Preston Road or Mockingbird Lane. Vehicle strikes are a real risk on tight drives, and spring storms bring surges that kill boards and fallen limbs that bend heavy iron.',
      'Our first job in an emergency is to make the gate safe and usable, which may mean releasing the operator so the leaf moves by hand, securing a damaged leaf, or isolating power to a burned board. Once it is safe, we work out the real repair: a bent leaf or broken hinge, a damaged post, or electronics that need replacing. We answer around the clock for Highland Park, including homes in Lakeside and Highland Park West.',
    ],
    faqs: [
      { q: 'A car hit our iron gate. Can it be repaired or does it need replacing?', a: 'Often it can be repaired. Bent pickets and frames can usually be straightened or sections remade, and a damaged hinge or post replaced. We secure the gate first, then assess the iron, the post and the operator separately. If the gate is original to the house, we look for a repair that keeps it rather than a new leaf.' },
      { q: 'What should I do if my gate is stuck open overnight?', a: 'If the gate is safe, use the manual release to close it by hand and lock it if it has a latch. If it will not move or the leaf is damaged, keep people and pets clear and call us. Do not keep pressing the remote, as repeated attempts can overheat the motor or damage the board further.' },
    ],
  },
  'highland-park/commercial-gate-repair': {
    description: 'Commercial gate repair in Highland Park, TX for shared drives, multi-unit entrances and service gates: operators, access control and loops. Call Shield.',
    intro: 'Commercial gate repair in Highland Park for the gates that serve more than one household or a business: shared drives, condominium entrances and service gates, with their access control and vehicle loops.',
    local: [
      'Highland Park is mostly private homes, so commercial gate work is a smaller part of what the town needs, but the gates that do serve several users run far more cycles than an estate drive. Shared driveways, multi-unit entrances and service gates for businesses near Highland Park Village have to cope with heavier traffic, deliveries and residents who all expect the access system to work. Wear parts go faster, and the access control matters as much as the gate.',
      'On a commercial gate in Highland Park we look at the whole system together: operator, gate hardware, loop detectors, keypad or phone entry, and the safety devices required on a gate used by the public. Many faults that look like operator failures turn out to be a loop detector or an access controller. We can work with a property manager on timing and access while the repair is done, so nobody is shut out. We service sites near Preston Road and Mockingbird Lane.',
    ],
    faqs: [
      { q: 'Our shared gate opens for residents but not for visitors. Where is the fault?', a: 'If residents get through and visitors do not, the operator is healthy and the fault is in the visitor path: the phone entry, its line or cellular module, or the directory programming. We test the call box and its connection, update the directory if needed, and confirm visitor access works from the street before we leave.' },
      { q: 'How often should a commercial gate in Highland Park be inspected?', a: 'Gates with heavy daily use benefit from a check every few months: rollers or hinges, chain or drive, loop detectors, photo eyes and edges. The busier the gate, the shorter the interval. Regular inspection also keeps the safety devices working, which matters on any gate used by visitors and the public.' },
    ],
  },
  'highland-park/residential-gate-repair': {
    description: 'Residential gate repair in Highland Park, TX for driveway, courtyard and pedestrian gates: hinges, latches, operators and child and pet safety. Call Shield.',
    intro: 'Residential gate repair in Highland Park for every gate around the home: the main drive, courtyard and side gates, pedestrian gates and the safety devices that protect children and pets.',
    local: [
      'Homes in Highland Park often have more than one gate: a main estate swing gate, a courtyard gate near the front door, and a pedestrian or side gate into the garden. Many are ornamental iron and some are original to the house, set on posts in clay that moves with the seasons. Hinges wear, latches stop catching, and automated leaves drift out of square. On narrow lots, the photo eyes that protect children and pets are easy to knock out of line.',
      'For residential gate repair in Highland Park we treat safety as part of every job. On automated gates we test the reversing function, photo eyes and any edges, and on pedestrian gates we make sure latches close fully and self-closing hinges still pull the gate shut, which matters near a pool or a busy street. Then we fix the hinge, post or operator fault itself. We repair homes around Lakeside Park and in Old Highland Park.',
    ],
    faqs: [
      { q: 'Our side gate no longer latches by itself. Can that be fixed?', a: 'Yes. A side gate that will not latch usually has a sagging hinge, a post that has moved or a self-closing hinge that has lost tension. We realign the gate and adjust or replace the closer and latch so it shuts firmly every time. That matters most where the gate keeps children or a dog in, or guards a pool.' },
      { q: 'How do I know the safety sensors on my home gate still work?', a: 'With the gate closing, pass an object such as a box through the beam at the photo eyes; the gate should stop and reverse. Never test with a person or pet. If it does not reverse, stop using the gate automatically and call us, since a failed safety device is a serious risk on any residential gate.' },
    ],
  },
  'highland-park/automatic-gate-installation': {
    description: 'Automatic gate installation in Highland Park, TX: estate swing and courtyard gates, deep footings in clay, UL 325 safety and design approval. Call Shield.',
    intro: 'Automatic gate installation in Highland Park for estate driveways and courtyards, planned around short frontages, heavy ironwork and the approvals the town and any association require before work begins.',
    local: [
      'Installing an automatic gate in Highland Park means working with frontages laid out over a century ago. Drives are short, the house is close behind, and the street is close in front, so there is little room for a leaf to swing or for a car to wait. Most owners want ornamental iron that suits the house, and that iron is heavy. The clay here moves, so posts and footings have to be sized to keep a heavy gate square for years.',
      'We plan each Highland Park installation from the ground up: gate size and swing direction, footing depth and post size for the soil, power from the house and conduit routes that avoid old brick drives. Safety is designed in to UL 325 and ASTM F2200, with photo eyes placed for a short drive. Design and approval come before work; we confirm what the town and your HOA require. We install on frontages in Old Highland Park and along Armstrong Parkway.',
    ],
    faqs: [
      { q: 'Does an automatic gate in Highland Park need approval before installation?', a: 'Often some form of review applies, particularly for work visible from the street. Rules can change and vary by property, so we confirm what the town and your HOA require before ordering anything, and we can provide drawings and specifications for the application. Work starts only once approvals are in hand.' },
      { q: 'Can an automatic gate fit a short Highland Park driveway?', a: 'Usually, with careful planning. A swing gate may need to open inward or be split into two leaves to clear the house, and a slide gate is an option where a leaf will not fit. We also set the safety devices and timers for the short space between the gate and the street.' },
    ],
  },
  'highland-park/electric-gate-installation': {
    description: 'Electric gate installation in Highland Park, TX: power from the house, conduit under old drives, transformers, surge protection, UL 325. Call Shield.',
    intro: 'Electric gate installation in Highland Park, with the power, wiring and controls planned as carefully as the ironwork. Short frontages make the electrical runs short, but old drives and gardens make them tricky.',
    local: [
      'On a Highland Park property the gate is usually close to the house, so mains power is rarely far away. The difficulty is the route. Older brick and stone drives, mature gardens and narrow side yards all lie between the panel and the gate, and nobody wants a historic drive cut open. Storm surge is a further concern, since a new electric gate puts a board, a receiver and sometimes a loop detector at the end of a buried run.',
      'We plan electric gate installation in Highland Park around the power path: a dedicated circuit, conduit routed under or beside the drive with the least disturbance, the right transformer for the operator, and surge protection on the supply and control leads. A battery backup keeps the gate usable in a power cut. Safety devices are fitted to UL 325 and ASTM F2200. We confirm what the town and your HOA require. We install near Lakeside Park and in Highland Park West.',
    ],
    faqs: [
      { q: 'Do we need an electrician to run power for an electric gate?', a: 'The supply circuit from your panel to the gate is electrical work, and we arrange it to code as part of the install. We plan the conduit route, the circuit size and the location of the disconnect with you before anything is dug, and we coordinate the electrical and gate work so it happens in one sequence.' },
      { q: 'Should a new electric gate in Highland Park have battery backup?', a: 'We recommend it. A battery backup lets the gate open and close through a power cut, which matters on a short frontage where a dead gate blocks the drive at the street. It adds a battery to maintain, typically every few years in Texas heat, which is a small cost for the reliability.' },
    ],
  },
  'highland-park/sliding-gate-installation': {
    description: 'Sliding gate installation in Highland Park, TX for lots with no room to swing: track footings in clay, iron design, power and UL 325 edges. Call Shield.',
    intro: 'Sliding gate installation in Highland Park for frontages where a swing leaf would hit the house, a wall or the street. We plan the track, the run-back space and the safety edges carefully on a tight lot.',
    local: [
      'A slide gate suits Highland Park lots where a swinging leaf would have nowhere to go, but it needs space of its own: room along the fence line for the gate to slide back, and a straight, level path across the drive. Many owners want the slide gate to match ornamental iron elsewhere on the property, which makes it heavy, and the track footing has to sit in clay that swells and shrinks. A poorly set track lifts and binds within a few seasons.',
      'Our Highland Park sliding gate installation starts with measuring the run-back space and checking for trees, walls or utilities in the way. We set a reinforced track footing or a cantilever design where a ground track is a problem, then size the operator to the finished gate weight. Safety edges, photo eyes and guards are fitted to UL 325 and ASTM F2200. We confirm what the town and your HOA require. We install off Mockingbird Lane and in Highland Park West.',
    ],
    faqs: [
      { q: 'Is a cantilever slide gate better than one on a ground track?', a: 'On some Highland Park lots, yes. A cantilever gate rides on rollers mounted beside the opening, so nothing crosses the drive and nothing sits in the clay across it. It needs more run-back space than a track gate. We measure your site and explain which design suits it before choosing.' },
      { q: 'How much space does a sliding gate need beside the drive?', a: 'A track gate needs roughly the width of the opening alongside it to slide into, and a cantilever gate needs more. We measure the fence line, check for trees, walls and utilities, and confirm the gate can open fully without hitting anything before we plan the installation.' },
    ],
  },
  'highland-park/swing-gate-installation': {
    description: 'Swing gate installation in Highland Park, TX: ornamental iron leaves, deep post footings in clay, operator arms and UL 325 safety. Call Shield.',
    intro: 'Swing gate installation in Highland Park for estate driveways and courtyards, with posts and hinges sized for heavy ironwork and operators chosen to suit a short frontage.',
    local: [
      'Swing gates are the classic Highland Park entrance, and a new one has to sit well beside houses whose ironwork dates back decades. Leaves are often heavy, frontages are short, and the arc of each leaf must clear the drive, the house and the sidewalk. The clay that moves older posts out of square will do the same to a new one if the footing is shallow, so the foundation work matters as much as the gate itself.',
      'For each Highland Park swing gate installation we size the posts and footings to the leaf weight and the soil, choose hinges rated for the load, and decide whether the leaves open inward or split into a pair. Operators are matched to leaf size and weight, mounted where the arm geometry works on a short drive. Safety eyes are placed to UL 325 and ASTM F2200. We confirm what the town and your HOA require. We install in Old Highland Park and Turtle Creek Acreage.',
    ],
    faqs: [
      { q: 'Should our new swing gate be a single leaf or a pair?', a: 'On a short Highland Park drive, a pair of leaves often works better because each one needs less room to swing and is lighter on its hinges. A single leaf may suit a narrower opening or a particular design. We measure the opening and the swing space, then show you both options before ordering the iron.' },
      { q: 'How deep do swing gate posts need to go in Highland Park clay?', a: 'Deeper than many expect, and the footing must be wide enough to resist the leverage of a heavy leaf. The right depth depends on the gate weight, the leaf length and the site, so we design each footing rather than using a standard depth, and we confirm any local requirements before digging.' },
    ],
  },
  'highland-park/gate-opener-installation': {
    description: 'Gate opener installation in Highland Park, TX: adding operators to existing iron gates, remotes, keypads, battery backup and UL 325 safety. Call Shield.',
    intro: 'Gate opener installation in Highland Park for owners who want to automate a gate they already have, or replace an obsolete opener. We fit operators that suit the iron without changing how it looks.',
    local: [
      'Many Highland Park homes already have fine ornamental iron gates that open by hand, or openers so old that parts are gone. Adding or replacing a gate opener lets owners keep that ironwork. The work depends on the gate: how heavy the leaf is, whether the hinges and posts are sound enough to take an operator, and where an arm or in-ground unit can mount without spoiling the frontage. Clay movement may mean resetting a post before automation.',
      'We start each Highland Park gate opener installation by checking the gate swings freely by hand and that its hinges and posts will carry the extra force. Then we choose an operator sized to the leaf, decide on surface or in-ground mounting, and plan the remotes, keypad and any phone entry. Battery backup is recommended. Safety eyes and edges are fitted to UL 325 and ASTM F2200, and we confirm what the town and your HOA require. We install near Flippen Park and Lakeside.',
    ],
    faqs: [
      { q: 'Can an opener be added to our existing iron gate without changing it?', a: 'Usually, yes. Most gate openers mount to the post and attach to the leaf with brackets, and in-ground units sit below the hinge out of sight. We check the hinges and posts first, since automating a gate on worn hardware will cause problems, and we plan the brackets so they disturb the ironwork as little as possible.' },
      { q: 'What controls can be included with a new gate opener?', a: 'Remotes, a keypad at the drive, a push button or receiver for the house, and a phone or app entry system are all options. We help you choose what suits how the gate is used, program every device on site, and show you how to add or remove codes later without calling us.' },
    ],
  },
  'argyle/viking': {
    description: 'Viking gate repair in Argyle, TX: solar batteries, charge controllers, K-2 limits and drive wear on wide ranch entrance and acreage gates. Call Shield.',
    intro: 'Viking gate repair in Argyle for DC swing and slide operators on wide entrance gates far from the house. We test the solar and battery side first, because on acreage that is where Vikings usually falter.',
    local: [
      'Vikings are built for heavy gates, and Argyle produces plenty: ranch entrance swing gates and wide estate slides sized so a horse trailer can pass. Those gates often sit hundreds of feet from the meter, so the Viking runs on DC with a battery charged by solar. When a panel ends up under a tree that has grown, or a battery wears out in the heat, the gate slows and stalls in a way that looks just like a failing motor.',
      'On an Argyle Viking we load test the battery, measure the panel and charge controller, then check the gate. A wide leaf on a post set in moving ground puts huge load on a T-21 or G-5 drive train. Older K-2 slide units without the position sensor can also forget their limits after the battery goes flat overnight, which is fixed by relearning them. We see these faults on properties off FM 407 and Crawford Road, and in Old Argyle.',
    ],
    faqs: [
      { q: 'Our Viking slide gate in Argyle lost its open and close positions. Why?', a: 'Older K-2 units without Viking’s position sensor can lose their limits after a total loss of power, and on a solar gate a flat battery counts. We relearn the limits on site, then find out why the battery ran down, whether shade on the panel, a failed charge controller or simply more cycles than the system was sized for.' },
      { q: 'Is a Viking worth repairing on a wide farm entrance?', a: 'Usually. Batteries, boards, limit hardware and charge controllers are all replaceable, and the Viking itself is built for this kind of gate. The bigger question is often the gate: a sagging leaf or a leaning post makes any operator labor, so we fix the hinge or post first, then tune the Viking.' },
    ],
  },
  'argyle/doorking': {
    description: 'DoorKing gate repair in Argyle, TX: telephone entry, cellular kits, keypads, programming and surge damage at long-drive and community entrances. Call Shield.',
    intro: 'DoorKing repair in Argyle for the telephone entry, keypads and operators at acreage drives and community entrances. We separate access control faults from gate faults early, since they are repaired very differently.',
    local: [
      'On Argyle acreage the entrance gate often sits hundreds of feet from the house, and a DoorKing entry panel there is the only way a visitor gets in. That distance matters. There may be no phone line at the gate, so older analogue DoorKing units struggle once a property moves to VoIP or fibre, and long cable runs across open ground make the panel and its board exposed to storm surge. Master-planned communities such as Canyon Falls and Harvest bring entry systems with large directories.',
      'Our first test on an Argyle DoorKing is simple: does the gate open on a manual command? If yes, the operator is fine and the fault is the entry system, its line or its programming. A cellular kit, listed by DoorKing as backward compatible with older DKS systems, often restores dial-out without replacing the 1835 or 1812 panel. Where the operator is at fault, a 6300 swing or 9150 slide gets diagnosed on its own terms. We add surge protection along exposed runs.',
    ],
    faqs: [
      { q: 'Our DoorKing at the end of the drive stopped calling the house. What changed?', a: 'Often the phone service. Older DoorKing panels expect an analogue line, and a move to VoIP or fibre can stop dial-out months later, so the two events are rarely linked. On long Argyle drives a cellular module is usually the answer, and we check it was not one of the early 3G boards that went dead when those networks closed.' },
      { q: 'Can you reprogram a DoorKing directory if we have no records?', a: 'Yes, on most DoorKing systems. We access the programming, rebuild the directory and codes, and document them so the next change is easy. If old codes are still opening the gate, we treat that as a security issue and remove them during the same visit.' },
    ],
  },
  'argyle/faac': {
    description: 'FAAC gate repair in Argyle, TX: hydraulic swing operators on wide ranch gates, seal kits, fluid, pressure and 455 D boards on long drives. Call Shield.',
    intro: 'FAAC hydraulic gate repair in Argyle for swing operators on wide entrance and estate gates. Hydraulics fail through pressure and seals rather than worn gears, and we repair them on site.',
    local: [
      'A FAAC hydraulic operator moves a gate with fluid pressure, which gives the smooth, strong drive that a wide Argyle entrance leaf needs. The leaves here are long so trailers can pass, and every extra foot adds leverage on the ram and on the post. When a post set in shifting ground drops the gate out of square, the FAAC has to push harder, and worn seals let pressure escape. The gate turns slow, weak, or stops short of closing.',
      'For FAAC repair in Argyle we check fluid level and condition, test operating pressure against FAAC’s figures, and look at the keyed release valve, which can weep on its own. A seal kit and pressure reset return most 400 and 402 arms to service. The 455 D board is the usual electrical failure on older installs. Because the gate is often far from the meter, we also check supply voltage at the operator. We see this on properties in Country Lakes and off US-377.',
    ],
    faqs: [
      { q: 'My FAAC gate in Argyle is much slower on cold mornings. Is it failing?', a: 'Not necessarily. Hydraulic fluid thickens in the cold, so a FAAC can run slower at dawn in winter and normally by afternoon. If the difference is large, or the gate stays slow in mild weather, the fluid may be past its service life or the pressure may be low. We test both and service the fluid if needed.' },
      { q: 'Our FAAC operator is leaking oil. Does the whole unit need replacing?', a: 'Usually not. An oil leak on a FAAC hydraulic arm generally means worn seals, a standard repair. We fit a seal kit, refill and bleed the system and reset the pressure. Age alone is not a reason to replace a 400 or 402, and most return to long service after resealing.' },
    ],
  },
  'argyle/elite': {
    description: 'Elite gate repair in Argyle, TX: SL585 and SL595 slide operators, Miracle One swing units, boards, capacitors and chain wear on wide gates. Call Shield.',
    intro: 'Elite gate repair in Argyle for slide and swing operators on wide estate and entrance gates. Elite units are serviceable, and boards, capacitors and limits cover most of the faults we find.',
    local: [
      'Elite operators, part of LiftMaster since 2003, are industrial-grade machines, and on Argyle acreage they turn up behind wide estate slides and heavy entrance swing gates. Those gates stretch far across a drive so a trailer can pass, which means long chains, long travel and plenty of strain on the sprocket. Livestock and wildlife add another Argyle problem: an animal standing in the beam, or one that knocks a photo eye askew, leaves the gate refusing to close.',
      'Control boards, capacitors and limit switches account for most Elite faults, roughly in that order, and on slide units chain and sprocket wear grows with age. On an Argyle SL585 or SL595 we check the chain, sprocket and rollers before the board, because a grinding slide gate is reporting mechanical wear. Older Elite boards differ by model, so we never assume one behaves like another. We work on gates along FM 407 and in Waterstone Estates.',
    ],
    faqs: [
      { q: 'Our Elite slide gate in Argyle has started grinding. What does that mean?', a: 'It usually means chain, sprocket or roller wear. Caught early it is a new chain; left running it becomes a chain, a sprocket and sometimes a gearbox. On a wide Argyle slide gate the chain is long and wears steadily, so we check its tension and the rollers and track at the same visit.' },
      { q: 'Are parts still available for an older Elite operator like the Miracle One?', a: 'For most faults, yes. Boards, capacitors and limit switches are commonly available, and chains, sprockets and rollers for slide units are easy to get. Some components are shared with related product lines, which helps older units. We confirm availability before we commit to a repair plan.' },
    ],
  },
  'argyle/apollo': {
    description: 'Apollo gate opener repair in Argyle, TX: solar 1550 and 1650 actuators, 12V batteries, undersized panels and long cable runs on acreage gates. Call Shield.',
    intro: 'Apollo gate repair in Argyle for solar 1550 and 1650 swing openers on ranch entrances and paddock gates. On these 12 volt systems, power is the first thing we measure, not the last.',
    local: [
      'Apollo, now part of Nice, built the 1550 and 1650 as 12 volt DC openers, and on Argyle acreage they are typically solar powered because the gate is too far from the meter for mains. Apollo sizes solar panel wattage to the daily cycle count and says dual gates need double the panel. When a property adds a second leaf, more trips, or a tree grows over the panel, the battery falls behind and the gate stops a few feet into travel.',
      'We test battery voltage while the gate runs, since Apollo wants 12 to 14 volts under load, then check the panel, the board and the actuators. Long 816 cables matter here: Apollo advises against splicing them and offers longer lengths, and a spliced cable on a wide double gate causes intermittent faults. Worn actuators can be replaced with a TITAN 12L on the same mounting. We see this on properties in Harvest and off Crawford Road.',
    ],
    faqs: [
      { q: 'Our solar Apollo gate in Argyle works in summer and fails in winter. Why?', a: 'Shorter winter days and a low sun give the panel less to collect, so a system that just kept up in summer falls behind. A battery that has aged in the heat makes it worse. We test the battery under load, check panel wattage against your cycle count, and look for shade from trees that has grown since installation.' },
      { q: 'Can a horse or deer set off the safety sensors on my Apollo gate?', a: 'Yes, an animal in the beam reads as an obstruction, and one that rubs a post can knock a photo eye out of line. That is a safety device doing its job. We reposition or protect the sensors so they still guard people and vehicles but are less likely to be disturbed.' },
    ],
  },
  'argyle/automatic-gate-repair': {
    description: 'Automatic gate repair in Argyle, TX for ranch entrances, paddock gates and wide estate slides: solar power, posts, sensors and operators. Call Shield.',
    intro: 'Automatic gate repair across Argyle, from solar ranch entrances on long drives to the wide slide gates in Canyon Falls and Harvest. On acreage we expect a power or post fault before a motor fault.',
    local: [
      'Argyle is horse country inside the metroplex, and its automatic gates reflect that: ranch entrance swing gates, farm and paddock gates, and wide estate slides set well back from the house on a long private drive. Many have no mains power at the gate, so they run on solar and a battery. Wide leaves on posts set in shifting ground drop out of square, and livestock and wildlife regularly trip or block the safety devices.',
      'Automatic gate repair in Argyle follows a set order. We test the battery under load and the solar panel or long buried supply run, then check the gate moves freely by hand and that its posts and hinges are sound. Only after that do we look at the operator, the board and the receiver. That order saves owners from buying an operator when a battery was the fault. We repair gates in Country Lakes, Old Argyle and along US-377.',
    ],
    faqs: [
      { q: 'Our Argyle entrance gate stopped working after a storm. Where do you look first?', a: 'At the power and the electronics. Long cable runs across open acreage pick up surges easily, so we test the board, the receiver, any loop detector and the charge controller on a solar gate. Fallen branches can also damage panels or bend leaves. We check each part separately so only what failed gets replaced.' },
      { q: 'Do you repair automatic gates on farm and paddock gates, not just the entrance?', a: 'Yes. On Argyle acreage several gates are often automated, and paddock gates take a beating from weather, livestock and long leaves on posts in moving ground. We repair the hinges, posts and operators on all of them, and we check that safety devices still work where animals and people pass.' },
    ],
  },
  'argyle/electric-gate-repair': {
    description: 'Electric gate repair in Argyle, TX: long buried supply runs, voltage drop, surge-damaged boards, transformers and loops on acreage gates. Call Shield.',
    intro: 'Electric gate repair in Argyle for the power path to gates that sit far from the house: long buried runs, transformers, boards, surge damage and vehicle loops.',
    local: [
      'Electric gates in Argyle face a problem suburban gates rarely do: distance. The entrance can be hundreds of feet from the meter, so the supply runs a long way underground across acreage, through ground that moves, near fence posts, irrigation and the odd burrowing animal. Long runs lose voltage, splices corrode, and a single nick in the cable can make a gate work on dry days and fail after rain. Those same runs carry storm surge straight to the board.',
      'For Argyle electric gate repair we trace the supply from the panel to the operator, measuring voltage at both ends under load, and check every splice and junction we can reach. Then we test the transformer, the board inputs, the receiver and any loop detector. Where a run is beyond saving, we look at whether new cable, a larger conductor or a switch to solar suits the site. We add surge protection on exposed leads. We work in Waterstone Estates and off FM 407.',
    ],
    faqs: [
      { q: 'Our gate works on dry days and fails after rain. Why?', a: 'That usually points to water getting into a damaged cable or an unsealed splice somewhere along the buried run. On a long Argyle drive that run can be hundreds of feet. We test the cable in sections to find the fault, then repair or replace that length with sealed splices instead of digging up the whole route.' },
      { q: 'Is solar better than running mains power to a distant gate?', a: 'It depends on how often the gate runs and how much sun the site gets. Solar avoids trenching and long supply runs, while mains handles heavy use and power-hungry accessories more easily. We look at your cycle count, shade and accessories, then explain which makes more sense for your property.' },
    ],
  },
  'argyle/driveway-gate-repair': {
    description: 'Driveway gate repair in Argyle, TX for long private drives: solar operators, wide swing leaves, dropped posts and sensors far from the house. Call Shield.',
    intro: 'Driveway gate repair for Argyle homes where the gate sits at the far end of a long private drive. When it fails it is out of sight and a long walk away, so we diagnose it thoroughly in one visit.',
    local: [
      'A private driveway in Argyle can run hundreds of feet from the road to the house, with the gate at the road end, out of view and often out of range of mains power. That shapes every failure. The operator usually runs on a battery charged by solar, the leaf is wide enough for a trailer, and the post carrying it sits in ground that shifts with the season. Owners often notice a fault only when the gate refuses to open for them.',
      'For Argyle driveway gate repair we look at power first: battery under load, panel output and shade from trees that have grown since the install. Next is the gate itself. A wide leaf that has dropped on its post will drag and stall any operator, so we reset the post or hinge before adjusting limits. Then come the photo eyes and receiver. We repair driveway gates in Old Argyle and along Crawford Road.',
    ],
    faqs: [
      { q: 'Why does our driveway gate open slowly on cloudy weeks?', a: 'A solar gate depends on the battery being refilled each day. On cloudy stretches the panel collects less, and a battery that has aged in the Texas heat cannot cover the gap. We test the battery under load and the panel output, and we size replacements for the trips your household actually makes.' },
      { q: 'Our remote only works when we are close to the driveway gate. Can range be improved?', a: 'Often, yes. Weak transmitter batteries, a poorly placed receiver antenna or a failing receiver all reduce range, and a long Argyle drive makes it obvious. We test each, relocate or upgrade the antenna where it helps, and can add a receiver suited to longer distances.' },
    ],
  },
  'argyle/sliding-gate-repair': {
    description: 'Sliding gate repair in Argyle, TX: wide estate slide gates, rollers, tracks, long chains and operators on solar and mains-powered acreage drives. Call Shield.',
    intro: 'Sliding gate repair in Argyle for wide estate slides that open far enough for trailers and equipment. Long slide gates wear rollers and chains steadily, and we repair the whole system.',
    local: [
      'Wide estate slide gates are part of the Argyle gate profile, and they are long because trucks and trailers have to get through. A long slide gate is a heavy load carried on a few rollers, driven by a long chain, along a track or cantilever frame set in ground that moves with the seasons. When the track settles unevenly or a roller wears, the gate drags, and on a solar operator that drag drains the battery faster than the panel can refill it.',
      'Argyle sliding gate repair begins with the gate free of the operator. We roll it by hand, check each roller and guide, and look for low or lifted track sections. Then we check chain tension, sprocket wear and the operator limits. On a solar system we test the battery too, since a dragging gate and a weak battery make each other worse. We work on slide gates in Canyon Falls, Waterstone Estates and along FM 407.',
    ],
    faqs: [
      { q: 'Our wide slide gate in Argyle stops partway on its way open. Why?', a: 'Usually because something adds resistance at that point: a worn roller, a low spot in the track, or debris on it. On a solar gate, a weak battery can also stall the gate under load. We roll the gate by hand to find the spot, fix the mechanical cause, and load test the battery.' },
      { q: 'How should we look after a long slide gate on acreage?', a: 'Keep the track clear of gravel, mud and leaves, and look at the rollers and chain every few months for wear or slack. Check the photo eyes are clean and aligned, especially where livestock pass. A yearly service that includes rollers, chain, limits and battery helps the gate last.' },
    ],
  },
  'argyle/swing-gate-repair': {
    description: 'Swing gate repair in Argyle, TX: wide ranch entrance and paddock leaves dropping on posts, worn hinges and operator arms on acreage. Call Shield.',
    intro: 'Swing gate repair in Argyle for ranch entrance gates and farm and paddock gates. Wide leaves on posts in moving ground drop out of square first, so we start with the post and the hinge.',
    local: [
      'Ranch entrance swing gates and farm and paddock gates are everyday features of Argyle, and they are wide by design so trailers and equipment can pass. A long leaf works like a lever on its hinge post, and the posts here sit in ground that shifts with the seasons. Over time the leaf drops at the latch end, the hinges carry more weight than they were chosen for, and the operator arm strains to drag the gate shut.',
      'Our approach to Argyle swing gate repair is to fix the gate before the operator. We measure how far the leaf has dropped, reset or brace the post, and replace hinges where they have worn, because a stronger operator pulling against a failing post only tears it out sooner. Then we adjust the arm, the limits and the safety eyes, keeping in mind livestock moving nearby. We repair swing gates off US-377 and in Country Lakes and Old Argyle.',
    ],
    faqs: [
      { q: 'Our wide ranch gate drags on the ground at the end. Can the post be saved?', a: 'Often, yes. If the post has leaned in shifting ground, it can usually be reset and braced, or its footing rebuilt, without replacing the gate. We also look at the hinges, which wear on long leaves. Once the leaf hangs level again, we readjust the operator so it no longer fights the gate.' },
      { q: 'Can livestock damage a swing gate operator?', a: 'They can. Horses and cattle rub on posts and arms, knock photo eyes out of line and sometimes push on a leaf. We guard or relocate exposed parts where possible and check the arm brackets for bending, since a bent bracket can stall the gate or cause it to close unevenly.' },
    ],
  },
  'argyle/gate-opener-repair': {
    description: 'Gate opener repair in Argyle, TX: remote range on long drives, keypads, receivers, control boards and limits on solar and battery openers. Call Shield.',
    intro: 'Gate opener repair in Argyle for the remotes, keypads, receivers, boards and limits on gates far from the house. On long drives, range and power both matter, and we test them together.',
    local: [
      'Gate openers in Argyle often control a gate at the end of a long private drive, so the receiver has to pick up a remote from a distance, and the keypad stands in the open by the road. Many openers run on solar and a battery, which means a weak battery can make the board behave strangely before the gate stops entirely. Animals add a local twist: a horse or deer in the photo eye beam can hold the gate open.',
      'When an Argyle gate opener stops responding, we test each input: remotes, keypad, push button and any phone entry. If the board ignores all of them, we check battery voltage under load and look for a stuck command or a blocked safety input. Short travel or reversing usually means limits that need resetting. Where range is the issue, we look at the receiver and its antenna. We repair openers in Harvest, Canyon Falls and along Crawford Road.',
    ],
    faqs: [
      { q: 'Our Argyle gate opener keeps forgetting its limit settings. What causes that?', a: 'On many solar and battery openers, limits or learned travel can be lost after a total loss of power, including a battery going flat overnight. We relearn the limits and then find out why the battery ran down, so the gate does not lose its settings again at the next cloudy spell.' },
      { q: 'Can a keypad at the end of a long drive be made more reliable?', a: 'Usually. Keypads by the road take weather, dust and the occasional knock. We check the keypad, its wiring and the connection to the board, and replace worn or water-damaged units. A wireless keypad can also avoid a long buried cable that is prone to damage.' },
    ],
  },
  'argyle/gate-motor-repair': {
    description: 'Gate motor repair in Argyle, TX: DC motors, gearboxes, capacitors and thermal cutouts on operators moving wide ranch and estate gates. Call Shield.',
    intro: 'Gate motor repair in Argyle for operators that grind, stall or overheat behind wide ranch and estate gates. We confirm the motor is really at fault before rebuilding or replacing it.',
    local: [
      'Motors on Argyle gates carry heavy, wide leaves and long slide gates, often from a solar battery rather than mains. A DC motor fed by a tired battery struggles in a way that looks like wear, and an AC motor at the end of a long supply run can be starved of voltage. Add a leaf that has dropped on a post in shifting ground, and the motor runs hot every cycle until the thermal cutout trips or the gearbox wears.',
      'Before any Argyle gate motor repair we release the operator and move the gate by hand, since a motor fixed while the bind remains will fail again. Then we test supply voltage under load, the capacitor on AC units, the thermal cutout and the windings, and listen to the gearbox. A capacitor or cutout is a modest repair; a worn gearbox on an old operator may tip the balance toward replacement. We work on gate motors in Old Argyle and off US-377.',
    ],
    faqs: [
      { q: 'Our gate motor cuts out on hot afternoons and works again later. Why?', a: 'That is the thermal cutout protecting the motor from overheating. Heat builds when a wide gate drags or binds, and Texas afternoons add to it. We check the hinges, rollers and posts for the extra load, because easing the gate usually stops the cutouts. A motor that trips even with a free gate may be wearing out.' },
      { q: 'Can a weak battery damage a DC gate motor?', a: 'It can shorten its life. A battery that sags under load makes the motor draw more current and run longer to finish each cycle, which adds heat and strain. We load test the battery whenever we look at a DC motor, and replace it if needed, so the motor is not blamed for a power fault.' },
    ],
  },
  'argyle/emergency-gate-repair': {
    description: 'Emergency gate repair in Argyle, TX: entrance gates stuck open with livestock inside, gates stuck shut, storm and vehicle damage. Answered 24/7. Call Shield.',
    intro: 'Emergency gate repair in Argyle for gates stuck open or shut, hit by a vehicle or damaged in a storm. On acreage a gate stuck open can mean horses on the road, so we treat it as urgent.',
    local: [
      'An emergency on an Argyle property often has animals in it. A ranch entrance or paddock gate stuck open can let horses or livestock reach the road, and a gate stuck shut at the end of a long drive can leave a trailer, a delivery or the family car waiting outside. Storms are a frequent cause, since long runs across open ground carry surge to the board, and wind can drop limbs on panels and leaves. Trailers and equipment also strike wide gates.',
      'Our first priority in an Argyle gate emergency is to make the gate safe and controllable. That might mean releasing the operator to swing the gate by hand and chaining it shut, securing a damaged leaf, or isolating power to a burned board. Then we find the real cause and plan the repair: a bent leaf, a broken hinge or post, or failed electronics. We answer around the clock for Argyle, including properties off FM 407 and along Crawford Road.',
    ],
    faqs: [
      { q: 'Our entrance gate is stuck open and our horses are in the field nearby. What should we do?', a: 'First, keep the animals away from the opening, using a temporary barrier or by closing them into another paddock. If the gate is undamaged, use the manual release and swing it shut by hand, then chain or latch it. Then call us, and we will find out why it failed and repair it.' },
      { q: 'A trailer hit our gate. Can it be fixed?', a: 'Often. We secure the gate first, then check the leaf, the hinges, the post and the operator separately. Bent frames can often be straightened or sections replaced, and a damaged post can be reset. If the operator was hit, we test it before deciding whether it needs repair or replacement.' },
    ],
  },
  'argyle/commercial-gate-repair': {
    description: 'Commercial gate repair in Argyle, TX for community entrances, HOA gates and businesses along US-377: operators, access control, loops and safety. Call Shield.',
    intro: 'Commercial gate repair in Argyle for HOA and community entrances, equestrian and business sites, with the access control, loop detection and safety devices that busy gates need.',
    local: [
      'Commercial gate work in Argyle covers community entrances in master-planned developments such as Canyon Falls and Harvest, and the business and equestrian properties along the US-377 corridor. These gates run far more cycles than a private drive, and they carry access control: keypads, telephone entry, card readers and vehicle loops. Long cable runs across open ground expose them to storm surge, and wide gates that let trucks and trailers in wear their rollers, hinges and drive parts steadily.',
      'For commercial gate repair in Argyle we diagnose the whole system at once: operator, gate hardware, loop detectors, access controller and the safety devices required on a gate used by the public. Many apparent operator faults turn out to be a loop or an access system problem. We can coordinate with an HOA board or property manager on timing and temporary access, so residents and staff are not locked in or out while we work.',
    ],
    faqs: [
      { q: 'Our community entrance gate in Argyle stays open after cars pass. Why?', a: 'Often a loop detector is holding the open signal: a damaged loop in the pavement, a detector that has drifted, or wiring broken where the road surface has moved. A blocked photo eye can do the same. We test the loops and detector settings, check the safety inputs, and confirm the gate closes on time.' },
      { q: 'Can you help our HOA plan maintenance for its gates?', a: 'Yes. We can inspect each gate, list its condition and wear parts, and suggest a service interval matched to how busy it is. Regular checks of rollers, hinges, drives, loops and safety devices catch faults early and help the board budget, rather than meeting failures as emergencies.' },
    ],
  },
  'argyle/residential-gate-repair': {
    description: 'Residential gate repair in Argyle, TX for entrance, side and pedestrian gates on acreage: hinges, latches, operators and child and pet safety. Call Shield.',
    intro: 'Residential gate repair in Argyle for every gate on the property: the main entrance, side and pedestrian gates near the house, and the safety devices that protect children, pets and horses.',
    local: [
      'Argyle homes on acreage usually have more gates than the one at the road. Besides the automated entrance, there are side gates, pedestrian gates into a yard or pool area, and farm and paddock gates. Each takes its own wear: posts in ground that shifts, hinges that sag, latches that stop catching. Children, dogs and livestock all move around these gates, so a latch that fails or a safety device that stops working is more than a nuisance here.',
      'For Argyle residential gate repair we check safety on every gate we touch. On automated gates we test the reversing function, photo eyes and edges; on a pool or yard gate we confirm the latch catches and the closer still swings the leaf home, which is critical where children swim. Then we fix the hinge, post or operator fault itself. We repair residential gates in Canyon Falls, Country Lakes and Old Argyle.',
    ],
    faqs: [
      { q: 'The pedestrian gate by our pool will not close on its own. Is that fixable?', a: 'Yes. A pool gate that will not self-close usually has a sagging hinge, a post that has moved or a closer that has lost tension. We realign the gate and adjust or replace the hinge, closer and latch so it shuts and latches every time. We confirm what the town and your HOA require for pool gates.' },
      { q: 'How do I test the safety sensors on our entrance gate?', a: 'With the gate closing, pass an object such as a box through the photo eye beam; the gate should stop and reverse. Never test with a person or animal. If it does not reverse, stop using the gate automatically and call us. Clean the sensor lenses regularly, as dust and spider webs block them on rural drives.' },
    ],
  },
  'argyle/automatic-gate-installation': {
    description: 'Automatic gate installation in Argyle, TX for ranch entrances and estate drives: solar sizing, wide gate footings, tree rules and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Argyle for ranch entrances, long private drives and wide estate gates, planned around solar power, soil, wide openings and the town’s tree preservation rules.',
    local: [
      'Installing an automatic gate in Argyle starts with the setting: low-density zoning, tree preservation rules and properties measured in acres. The entrance is often far from the house and the meter, so most new gates are planned around solar and a battery rather than a long trench. The gates themselves are wide so trailers can pass, and the posts that carry them must sit in ground that moves with the season without pulling the gate out of square.',
      'For each Argyle installation we choose the gate type and opening width, size the footings and posts for the leaf and the soil, and size the solar panel and battery to your real daily cycles, with room for winter days. Tree placement shapes both the gate line and the panel location; we confirm what the town and your HOA require before any clearing. Safety devices are fitted to UL 325 and ASTM F2200. We install along FM 407 and in Old Argyle.',
    ],
    faqs: [
      { q: 'Do Argyle tree preservation rules affect where we can put a gate?', a: 'They can. Argyle has tree preservation rules, and a gate line, a trench or a solar panel location may involve trees that are protected. We confirm what the town and your HOA require before planning the route, and we design around significant trees where we can, which also keeps shade off the panel.' },
      { q: 'How wide should an entrance gate be for horse trailers?', a: 'It depends on your trailers, the turning room off the road and how the drive approaches the gate. We measure the approach and the vehicles you use, then size the opening and choose a swing or slide design that gives enough clearance without making the leaves needlessly heavy.' },
    ],
  },
  'argyle/electric-gate-installation': {
    description: 'Electric gate installation in Argyle, TX: long trenched supply runs or solar, cable sizing, surge protection, battery backup and UL 325 safety. Call Shield.',
    intro: 'Electric gate installation in Argyle, where the biggest decision is how to power a gate that may sit hundreds of feet from the meter. We plan the supply, wiring and controls before the gate.',
    local: [
      'An electric gate on Argyle acreage poses a power question before anything else. The entrance may be hundreds of feet from the meter, and running mains that far means a long trench, a cable sized for the voltage drop, and a route that avoids fence lines, utilities and protected trees. Solar and battery is the usual alternative, but it limits the cycles and accessories the gate can support. Long runs across open ground also bring storm surge to the board.',
      'We plan every Argyle electric gate installation around the power path. For mains, that means the trench route, cable size, a disconnect at the gate and surge protection on supply and control leads. For solar, it means panel and battery sizing for real daily use, with margin for winter. Either way, battery backup keeps the gate working through outages, and safety devices meet UL 325 and ASTM F2200. We confirm what the town and your HOA require. We install off Crawford Road and in Waterstone Estates.',
    ],
    faqs: [
      { q: 'Should our new Argyle gate run on solar or mains power?', a: 'Solar suits a distant gate with moderate use and a sunny location, and it avoids a long trench. Mains suits heavy use, wide or heavy gates, and power-hungry accessories such as cameras or heaters. We look at your expected cycles, the distance and the shade, then recommend the option that will stay reliable.' },
      { q: 'How do you protect a long electric gate supply from storm damage?', a: 'We fit surge protection on the supply and on control leads such as keypad and loop wiring, bond the system to a proper ground, and use sealed splices in buried runs. Nothing makes a gate immune to a direct strike, but this reduces the damage a nearby storm does.' },
    ],
  },
  'argyle/sliding-gate-installation': {
    description: 'Sliding gate installation in Argyle, TX for wide estate drives: track or cantilever design, footings in shifting ground, solar and UL 325. Call Shield.',
    intro: 'Sliding gate installation in Argyle for wide estate drives where trucks and trailers need a clear opening. We plan the track, footings, power and safety edges around your property.',
    local: [
      'Wide estate slides are one of the gate types Argyle properties use, and they suit acreage where a long swing leaf would be too heavy or would open toward rising ground. A slide gate needs a straight run-back alongside the opening, clear of trees and fence posts, and a track or cantilever frame set on footings that will not shift with the season. Because many entrances are far from mains power, the operator is often solar, so the gate must run freely to spare the battery.',
      'For Argyle sliding gate installation we survey the run-back space and the trees along it, then decide between a ground track and a cantilever design. Footings are sized for the gate weight and the soil, and the operator and solar system are sized for the finished gate and your daily cycles. Safety edges, photo eyes and roller guards meet UL 325 and ASTM F2200. We confirm what the town and your HOA require. We install in Canyon Falls, Harvest and along US-377.',
    ],
    faqs: [
      { q: 'Is a cantilever slide gate a good choice on an Argyle drive?', a: 'Often. A cantilever gate rides on rollers beside the opening, so nothing crosses the drive where mud, gravel or ground movement could foul a track. It needs a longer run-back. We measure the site, check for protected trees along the run-back, and explain which design suits it.' },
      { q: 'Can a wide slide gate run reliably on solar?', a: 'Yes, if the system is sized properly and the gate rolls freely. We match the panel and battery to the gate weight and your daily cycles, with margin for short winter days, and site the panel away from shade. A well-built gate that rolls easily asks far less of the battery.' },
    ],
  },
  'argyle/swing-gate-installation': {
    description: 'Swing gate installation in Argyle, TX for ranch entrances and paddock gates: deep post footings, heavy hinges, solar operators and UL 325 safety. Call Shield.',
    intro: 'Swing gate installation in Argyle for ranch entrances and farm and paddock gates, with posts, hinges and operators sized for wide leaves on ground that moves with the season.',
    local: [
      'The ranch entrance swing gate is a signature of Argyle, and building one well comes down to the post. A wide leaf, long enough to clear a horse trailer, acts as a lever on its hinge post, and the ground here shifts with the season. A post set too shallow or too narrow will lean within a few years and drop the gate out of square. Swing gates also need room to open, ideally away from a sloping drive or the road.',
      'For each Argyle swing gate installation we size the post, the footing and the hinges for the leaf length and weight, and choose whether one wide leaf or a pair suits the opening. The operator is matched to the gate, often solar powered, with a panel and battery sized for your daily cycles. Safety eyes are placed to UL 325 and ASTM F2200, protected from livestock where needed. We confirm what the town and your HOA require. We install in Country Lakes and off FM 407.',
    ],
    faqs: [
      { q: 'Should our Argyle entrance be one wide leaf or a pair of gates?', a: 'A pair of leaves is lighter on each post and needs less room to swing, which helps on a sloping or narrow approach. A single leaf can be simpler and stronger where the room exists. We measure the opening, the swing area and the slope, and explain the trade-off before ordering.' },
      { q: 'Can a swing gate be automated later if we install it manual now?', a: 'Yes, if it is planned for. We can set the posts, footings and hinges to carry an operator, and lay conduit or plan a panel site at the same time. Adding automation later is then a straightforward fit rather than a rebuild.' },
    ],
  },
  'argyle/gate-opener-installation': {
    description: 'Gate opener installation in Argyle, TX: solar openers for existing ranch and paddock gates, long-range remotes, keypads and UL 325 safety. Call Shield.',
    intro: 'Gate opener installation in Argyle for owners who want to automate an existing entrance or paddock gate, or replace an opener that no longer copes with a wide leaf.',
    local: [
      'Many Argyle properties already have sturdy entrance and paddock gates that open by hand, and an opener turns them into gates that can be used without leaving the truck. The work depends on the gate and the site. Wide leaves need an opener with enough strength and arm reach, posts in shifting ground may need resetting first, and the entrance is often far enough from the meter that the opener runs on solar and a battery.',
      'We start each Argyle gate opener installation by swinging the gate by hand and checking the hinges and post will carry an operator. Then we size the opener to the leaf, size the solar panel and battery to your daily cycles, and choose remotes with enough range for a long drive, plus a keypad or entry system at the road. Safety eyes meet UL 325 and ASTM F2200, placed so livestock do not keep tripping them. We install in Harvest and along Crawford Road.',
    ],
    faqs: [
      { q: 'Can an opener be fitted to the wide farm gate we already have?', a: 'Usually, as long as the gate swings freely and its hinges and post are sound. We check the gate by hand, reset the post or replace hinges if needed, then choose an opener rated for the leaf length and weight. Fitting an opener to a dragging gate only shortens its life.' },
      { q: 'What remote range do we need for a long Argyle driveway?', a: 'Enough to open the gate before you reach it, so you are not waiting on the road. We test the range from where you want to press the button, and choose a receiver and antenna placement that reaches it. A keypad at the road and a phone entry option can be added for visitors.' },
    ],
  },
}
export default copy
