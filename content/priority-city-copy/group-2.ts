const copy: Record<string, { description: string; intro: string; local: string[]; faqs: { q: string; a: string }[] }> = {
  'carrollton/viking': {
    description: 'Viking gate repair in Carrollton, TX for heavy slide and swing gates: battery tests, K-2 limit relearns and drive wear near Hebron Parkway. Call Shield.',
    intro: 'Viking gate repair in Carrollton for the DC operators fitted to heavier gates, from yard slides off Hebron Parkway to residential swing pairs. We check the power and the gate before we blame the operator.',
    local: [
      'Viking builds its operators for heavy gates, and in Carrollton that often means a long slide gate across a yard or a distribution entrance near I-35E. Those yards are where grit and gravel collect in the track. A Viking K-2 pushing a gate across worn or packed rollers draws more current, warms up, and reports the drag as an obstruction, so the gate stops partway and reverses. Because the operator runs on DC with battery storage, that extra load also drains the batteries faster and shortens their life.',
      'Most Carrollton Viking repairs come down to batteries, a board, limits or wear in the drive. We load test the batteries, clear and inspect the track, and roll the gate by hand before we touch settings. On an older K-2 without the position sensor, a total power loss can wipe the limits, which we relearn on site. Swing models such as the T-21 and G-5 in the gated pockets around Josey Ranch and Country Place use mechanical limit switches that drift and simply need resetting.',
    ],
    faqs: [
      { q: 'Our Viking slide gate off Hebron Parkway keeps reversing halfway. Is it the controller?', a: 'Usually the controller is doing its job. Viking units sense rising load, and a track full of gravel or a flat-spotted roller makes the gate feel blocked. We clean the track, check the rollers and guide wheels, and move the gate by hand. If it rolls freely and still reverses, then we look at the force settings and the board.' },
      { q: 'How long do the batteries in a Viking operator last?', a: 'There is no fixed figure, because heat, cycle count and charging all play a part, and Viking’s own warranty covers batteries for less time than the operator. In a Carrollton summer a battery in a hot enclosure fades sooner. We load test rather than read resting voltage, since a weak battery can look healthy at rest and collapse under the motor.' },
    ],
  },
  'carrollton/doorking': {
    description: 'DoorKing gate repair in Carrollton, TX: telephone entry, keypads, cellular upgrades and 9150 slide operators for gated communities and yards. Call Shield.',
    intro: 'DoorKing repair in Carrollton for telephone entry panels, keypads, card readers and the 9150 and 6300 operators behind them. We separate access control faults from gate faults first, since they are fixed in different ways.',
    local: [
      'In Carrollton DoorKing equipment shows up in two places: the entry panels at gated residential pockets, and the keypads and slide operators on business and distribution gates along the I-35E corridor. In both, the gate itself is often fine. When residents can no longer be called from the panel, or a code stops working, the problem is usually in the entry system. Older DoorKing units expect an analogue phone line, and when a property moves to VoIP the panel can lose dial-out or remote programming months later, with nobody linking the two.',
      'We start with a manual command. If the gate opens on a button press, the operator is healthy and we move to the panel, the line and the programming. The usual fix for a lost phone line is DoorKing’s cellular kit, not a new system. On a yard gate near Hebron Parkway a 9150 slide operator also has to cope with track debris and loop detector faults, so we test the loop and detector alongside it. We can rebuild and document a directory when records were never handed over.',
    ],
    faqs: [
      { q: 'We changed phone providers and now our Carrollton gate panel will not call anyone. Why?', a: 'Older DoorKing telephone entry units were built around copper analogue lines, and a switch to VoIP or fibre removes the signal they rely on. DoorKing no longer recommends a copper line even on current 1830 Series panels. A cellular module usually restores dial-out. Some early cellular boards stopped working when the 3G networks shut down, so we check which board you have.' },
      { q: 'Can you change or remove access codes on our DoorKing system?', a: 'Yes. We can add and delete directory entries, access codes and card credentials, and set up dial-out. If the previous management left no records, we access the system and rebuild the programming, then write it down for you. Old codes that still open the gate are a security problem, so we treat that as a priority on any visit.' },
    ],
  },
  'carrollton/faac': {
    description: 'FAAC gate repair in Carrollton, TX: hydraulic 400 and 402 swing arms, 844 slide operators, seals, fluid and pressure checks. Repair first. Call Shield.',
    intro: 'FAAC gate repair in Carrollton for hydraulic swing operators on residential gates and the electromechanical 844 on slide gates. FAAC needs different diagnosis from a chain drive, and we carry the seal kits and fluid to do it.',
    local: [
      'Most FAAC swing operators work hydraulically: a motor drives a pump and fluid pressure moves the ram. That suits the heavier residential swing gates in Carrollton’s gated pockets, because travel is smooth and the start and stop are soft. The weak point is the seals. As they wear, fluid escapes, pressure falls, and the gate slows down or stops short of closing. A slower run on a cold morning that clears by afternoon is normal behavior for the fluid. A gate that stays slow all day is telling you about pressure.',
      'On a 400 or 402 we check fluid level and condition, test pressure against FAAC’s figures, and reseal where needed, which costs far less than a new operator. The 844 is a different machine: an electromechanical slide operator with a clutch in an oil bath, and on a Carrollton yard gate its faults are often the rack, pinion and rollers fighting debris in the track. We check gate and operator together. Around Rosemeade and Austin Waters we also look at the keyed release valve, which can weep fluid as it wears.',
    ],
    faqs: [
      { q: 'Can a FAAC 844 cope with a dusty industrial yard in Carrollton?', a: 'It can, but the gate side needs attention. Grit packs into the rack and the track, the rollers wear flat, and the clutch inside the 844 starts slipping to protect the gearbox. Clearing the track and replacing worn rollers usually restores normal travel. We then set the clutch correctly rather than tightening it to force a binding gate through.' },
      { q: 'Someone told us our FAAC hydraulic gate cannot be repaired. Is that right?', a: 'Very rarely. Seals, fluid, pressure settings, release valves and the 455 D control board are all serviceable or replaceable. Replacement only makes sense when the ram or housing is physically damaged, so ask which part was tested and found faulty. FAAC still supports its equipment, which is why repair is usually the cheaper path for a Carrollton owner.' },
    ],
  },
  'carrollton/elite': {
    description: 'Elite gate repair in Carrollton, TX: SL595 and SL585 slide operators, Miracle One swing units, boards, capacitors and chain wear on yard gates. Call Shield.',
    intro: 'Elite gate repair in Carrollton for the industrial SL595 and SL585 slide operators and the Miracle One swing opener. We repair boards, capacitors, limits, chains and sprockets, and tell you plainly when a part is worth fixing.',
    local: [
      'Elite built its name on commercial slide operators, and Carrollton’s light-industrial and distribution base along I-35E is the kind of place they end up: chain link and steel yard gates running many cycles a day. On those units chain and sprocket wear dominates with age. A stretched chain rides up the sprocket and grinds, and a gate dragging over gravel in the track makes it worse. Elite has been part of Chamberlain, LiftMaster’s parent, since 2003, but older Elite boards and error codes still differ from model to model.',
      'We read the board first, then check the capacitor and limit switches, which together account for most Elite faults. On slide gates we tension or replace the chain early, because a chain left running becomes a chain, a sprocket and sometimes a gearbox. Near Hebron Parkway and the President George Bush Turnpike we also test the exit loop, since a loop fault can look like a dead operator. For a residential Miracle One in Josey Ranch, a motor that hums without moving the gate usually means the capacitor.',
    ],
    faqs: [
      { q: 'Our Elite SL595 on a Carrollton yard gate has started grinding. What is it?', a: 'Grinding on an Elite slide operator points to the chain, the sprocket or the rollers. In a gravel yard it is often all three wearing together, because debris in the track adds load. We inspect each, replace what is worn, and clean the track. Caught early this is a modest job. Left running, it can take the gearbox with it.' },
      { q: 'Are parts still available for an older Elite operator?', a: 'For most units, yes. Boards, capacitors and limit switches are rarely hard to find, and slide unit chains, sprockets and rollers are stock items. Some older Elite models share components with related product lines, which helps. Where a board has to be substituted rather than swapped like for like, we explain that before doing the work.' },
    ],
  },
  'carrollton/us-automatic': {
    description: 'US Automatic gate repair in Carrollton, TX: Patriot and Ranger battery operators, solar panels, AC chargers and charge controllers. Call Shield Gate Repair.',
    intro: 'US Automatic repair in Carrollton for Patriot, Ranger and Patriot RSL operators. Every one of them runs its motor from a 12V battery, so we test the power side before we condemn anything.',
    local: [
      'In Carrollton US Automatic operators tend to sit on gates where wiring mains power was awkward: a swing gate set well back from the house, a side entrance on a larger lot, or a secondary gate on a commercial property where trenching across a paved yard made little sense. Whether the battery is topped up by a solar panel or by a low-voltage charger, the operator is the same battery-run unit. That is why heat matters here. Texas summers wear sealed lead-acid batteries down sooner, and one in an unshaded enclosure fades faster still.',
      'We test the battery under load, measure panel or charger output, and check the charge controller, because a failed controller makes a new battery die again within months. In Josey Ranch and Country Place, mature trees can shade a panel that once had full sun. We also check terminals for corrosion and confirm polarity if anyone has worked on the system recently. A Patriot or Ranger with a healthy battery and a sagging gate still struggles, so we check the hinges and posts too.',
    ],
    faqs: [
      { q: 'Why does our solar gate in Carrollton slow down in winter after a fine summer?', a: 'Winter days are shorter and the sun sits lower, so the panel produces less, and cold reduces battery capacity at the same time. A system that was only just adequate in July runs short in January. That is a sizing issue rather than a fault, and the answer is a larger battery, a better placed panel, or both, not a new operator.' },
      { q: 'Can our US Automatic gate be switched from solar to a plug-in charger?', a: 'Often, yes. The operator runs from its battery either way. AC charging replaces the panel with a low-voltage charger fed from an outlet, and the charger lead can run a long way, so mains voltage does not have to reach the gate itself. If no outlet is practical, resizing the solar side is the simpler fix.' },
    ],
  },
  'carrollton/apollo': {
    description: 'Apollo gate repair in Carrollton, TX: 1550 and 1650 swing openers, 12V batteries, solar charging, 816 actuators and control boards. Call Shield Gate Repair.',
    intro: 'Apollo gate repair in Carrollton for 1550 single and 1650 dual swing openers, now sold under the Nice name. These are 12V systems, so we test the battery while the gate runs before we look anywhere else.',
    local: [
      'Apollo openers are built around a 12V battery that drives the actuator directly, with a solar panel or trickle charger keeping it topped up. In Carrollton that design meets residential swing gates in gated pockets and on side lots, often long iron leaves that catch the wind. A heavy or sagging leaf makes the actuator draw more current, and the board reads the voltage dip as an obstruction. The result is the classic Apollo complaint: the gate moves a few feet, then stops or reverses. Summer heat in the enclosure also shortens battery life.',
      'Apollo’s own guidance is 12 to 14 volts while the gate is running, never below 11, so a battery that reads fine at rest proves little. We load test it, check the panel or charger, then look at the 816 actuator, its limit screws and the board. On a 1650 the second actuator’s cord crosses the driveway, and a spliced cable there is a common source of intermittent faults. Around Rosemeade and Austin Waters we also check that the hinges move freely, since a stiff hinge costs battery on every cycle.',
    ],
    faqs: [
      { q: 'Our Apollo gate in Carrollton opens a few feet and stops. Is the actuator dead?', a: 'Usually not. Apollo lists low battery voltage under load as the first cause, followed by a binding gate, a bent extension tube and current sensitivity set too sensitive. On an 835/836 board, program switch 10 left on with an older 416 actuator also causes it. We work down that list in order, because the cheapest causes come first.' },
      { q: 'Does an Apollo board need relearning after a power loss?', a: 'The 833/834 board does. Apollo notes it must relearn whenever it loses power, and cold weather or a rusted hinge can make it necessary too. Learn mode uses program switch 9: the gate is run fully open and closed several times, then partially, and the switch is turned off again. We do that, then check the battery that caused the outage.' },
    ],
  },
  'carrollton/automatic-gate-repair': {
    description: 'Automatic gate repair in Carrollton, TX for residential swing gates and commercial slide gates near I-35E, Josey Lane and Hebron Parkway. Call Shield.',
    intro: 'Automatic gate repair in Carrollton for driveway swing gates in the residential neighborhoods and slide gates on the industrial and distribution yards. We test the operator, safety devices and gate hardware as one system.',
    local: [
      'Carrollton is two kinds of gate city at once. The residential neighborhoods, Josey Ranch, Rosemeade and Country Place among them, have swing gates on homes and a few gated pockets, while the I-35E corridor carries a significant light-industrial and distribution base with commercial slide gates and chain link yard gates. The faults differ. Homes see control boards that stop answering and limits that drift. Yards see chain and sprocket wear, loop detector faults, and rollers ground down by debris in the track.',
      'We start with the gate itself, moving it by hand to feel for binding, then the safety devices, then the operator and its board. On a yard gate that stalls partway, we inspect the track before anything electrical. On a residential gate that opens but will not close, photo-eyes and their alignment come before the board. Where repair costs approach a new operator, or the unit is undersized for its traffic, we say so and explain the choice. Automatic gate repair in Carrollton is mostly about finding the right part, not replacing the most parts.',
    ],
    faqs: [
      { q: 'Why do Carrollton warehouse gates seem to wear out faster than home gates?', a: 'Cycle count. A distribution yard gate can run many times an hour through a shift, while a driveway gate runs a handful of times a day. Chains stretch, sprockets wear and rollers flatten in proportion to use, and track grit speeds that up. Regular servicing on high-cycle gates costs much less than the unplanned failures it prevents.' },
      { q: 'What should I check before calling about my automatic gate?', a: 'Look for anything blocking the photo-eyes, check the remote battery, and see whether the keypad or push button works when the remote does not. Make sure the operator has power and the breaker has not tripped. If the gate is stuck, use the manual release only if you know how. Then call us and tell us what you found.' },
    ],
  },
  'carrollton/electric-gate-repair': {
    description: 'Electric gate repair in Carrollton, TX: power supplies, low-voltage wiring, surge damage, transformers and vehicle loops on homes and yards. Call Shield.',
    intro: 'Electric gate repair in Carrollton for the power side of a gate: supply wiring, transformers, control boards, surge protection and vehicle loops. When a gate is dead or acting erratically, we trace the circuit before swapping parts.',
    local: [
      'Carrollton’s electric gate faults split along the same line as its property mix. On residential driveways the supply often runs underground from the house, and splices that were never sealed corrode, while irrigation work can nick a cable. On the commercial and industrial side along I-35E and Hebron Parkway, gates rely on vehicle loops cut into the pavement, and those loops break when concrete cracks or roadwork crosses them. Loop detector faults are a regular problem on Carrollton yard gates, and they look like a gate that ignores traffic.',
      'Our diagnosis order is supply first, then transformer output, then board inputs, then the loop and detector. We test continuity on buried runs before digging, and check detector frequency and sensitivity before condemning a loop. After a spring storm we test each component on its own, because a surge can take out a board, a receiver and a detector together, or only one of them. Where surge protection was never fitted, we recommend adding it to the supply and loop leads during the repair.',
    ],
    faqs: [
      { q: 'Trucks leaving our Carrollton yard now have to buzz out. What failed?', a: 'Most likely the exit loop or its detector. The loop is a wire laid in a saw cut in the pavement, and cracking slab, heavy trucks and pavement repairs break it. We measure the loop’s resistance and insulation, then check the detector’s setting and output. A detector fault is a module swap. A broken loop means cutting and sealing a new one.' },
      { q: 'Can a power surge damage my gate even if the lights in the house were fine?', a: 'Yes. Gate equipment sits at the end of long cable runs and keypad or loop leads, which pick up surge energy that household circuits shrug off. A control board, receiver or detector can fail while everything indoors keeps working. We test each part separately so you replace only what failed, and we can fit surge protection afterward.' },
    ],
  },
  'carrollton/driveway-gate-repair': {
    description: 'Driveway gate repair in Carrollton, TX for private homes in Josey Ranch, Rosemeade and Austin Waters: swing leaves, hinges, posts and openers. Call Shield.',
    intro: 'Driveway gate repair for Carrollton homeowners. When the gate across your drive stops, your car is often stuck on one side of it, so we make the gate safe and usable first, then fix the cause.',
    local: [
      'Most Carrollton driveway gates are residential swing gates, a single leaf or a pair, on homes in neighborhoods such as Josey Ranch, Rosemeade and Austin Waters. A swing leaf is a long lever on its hinges, and any sag or post movement shows up at the latch end first: the leaf drags, misses its stop, or no longer meets its partner. The opener then works harder on every cycle, and eventually the control board trips on overload or the arm brackets start to fatigue.',
      'We check the hinges, posts and leaf alignment by hand before we open the operator. A sagging leaf can often be re-hung or its hinges replaced, which is cheaper than a new opener and fixes the real fault. On a double gate we reset the leaf delay so the pair closes in order. If the opener itself has failed, we look at the board, limits and arm first. With any driveway gate repair in Carrollton, we also show you how to use the manual release so a dead opener never traps your car.',
    ],
    faqs: [
      { q: 'My Carrollton driveway gate swings shut but will not latch anymore. Why?', a: 'Usually the leaf has dropped slightly at the latch end, either from worn hinges or a post that has shifted in the soil. The opener reaches its close limit, but the latch no longer lines up. We check post and hinge movement, re-hang or adjust the leaf, then reset the close limit so the opener and latch agree again.' },
      { q: 'Should I add privacy panels to my iron driveway gate?', a: 'Ask before you do. Panels add weight and turn the gate into a sail in strong wind, which can push the opener past its rating and strain the hinges. Many openers handle modest additions without trouble. We can check the gate weight against the operator’s capacity and tell you whether the current opener will cope or needs upgrading.' },
    ],
  },
  'carrollton/sliding-gate-repair': {
    description: 'Sliding gate repair in Carrollton, TX: tracks, rollers, guide wheels, chains and slide operators on industrial yards off Hebron Parkway. Call Shield.',
    intro: 'Sliding gate repair in Carrollton for the track, rollers, guide wheels, chain and slide operator. Carrollton’s industrial yards run a lot of slide gates, and most of their trouble starts at ground level.',
    local: [
      'Slide gates are the standard choice on Carrollton’s commercial and distribution properties near I-35E and Hebron Parkway, often chain link or steel panels rolling across a yard entrance. Those tracks sit at the level of the yard surface, so gravel, grit and debris from truck traffic settle straight into them. A V-groove roller running over packed grit wears flat, the gate starts to bounce and drag, and the slide operator strains to push it. Chain and sprocket wear follows, because every extra pound of drag passes through the drive.',
      'For sliding gate repair in Carrollton we begin with the track: clean it, check it for dents and low spots, and roll the gate by hand. Then we inspect rollers, guide wheels and the chain’s tension and wear. Only after the gate runs freely do we test the operator, limits and board. Track sections, rollers and chains are routine parts. If a gearbox has already failed after years of drag, we compare repair against a new operator honestly, and suggest a track clearing routine so it does not happen again.',
    ],
    faqs: [
      { q: 'How often should a Carrollton yard slide gate track be cleared?', a: 'It depends on traffic and surface, but on a gravel or dusty yard it is worth a look every week or two, and after any heavy delivery period. Sweeping the track costs nothing and is the cheapest maintenance on the property. Worn rollers and stretched chains still need replacing from time to time, but far less often.' },
      { q: 'My slide gate jumps off its track. Can that be fixed?', a: 'Yes. A gate that leaves its track usually has worn rollers, a bent track, or guide wheels that have loosened or worn so they no longer hold the top of the gate. We set the gate back, replace the worn hardware, and check the track for damage. Running it off track bends the frame and harms the operator, so stop using it.' },
    ],
  },
  'carrollton/swing-gate-repair': {
    description: 'Swing gate repair in Carrollton, TX: hinges, sagging leaves, swing arms, posts and operators on home gates in Josey Ranch and Country Place. Call Shield.',
    intro: 'Swing gate repair in Carrollton for single and double leaves, hinges, posts, swing arms and operators. A swing gate fault is often mechanical first, so we check how the gate hangs before testing the electronics.',
    local: [
      'Residential swing gates make up a large share of Carrollton’s home gates, from single leaves across a driveway to double gates at the gated pockets in neighborhoods like Country Place and Josey Ranch. Swing gates tend to fail at the hinge post. As hinges wear or a post leans, the leaf drops at the free end, scrapes the drive, and arrives late at its stop. The operator arm then pushes against the bind on every cycle, which wears the arm’s pivot points and pushes the motor toward overload.',
      'We start by lifting and swinging the leaf by hand to find where it binds, then check the hinge pins, post plumb and the arm mounting. Re-hanging a leaf, replacing hinges or adding a wheel support often solves what looked like an operator failure. Next we check the operator: limits, force setting, board and, on double gates, the leaf delay. Swing gate repair in Carrollton also means making sure the gate cannot trap anyone in its path, so we test the photo-eyes and obstruction reversal before we leave.',
    ],
    faqs: [
      { q: 'Why does my swing gate in Carrollton stick worse after heavy rain?', a: 'Wet soil can let a post lean or settle, and North Texas clay swells and shrinks with moisture, moving posts slightly over the seasons. A leaf that clears in dry weather can drag after a storm. We check the post and footing, then adjust or re-hang the leaf. If the post keeps moving, a deeper footing is the lasting fix.' },
      { q: 'Can an operator be added to the second leaf of my double gate?', a: 'Yes, in most cases. We check that the second leaf hangs straight and that the existing control board supports a dual setup, then fit a matching arm and set the leaf delay so the gates close in order. If the current operator cannot run a second arm, we explain the options and what each would involve.' },
    ],
  },
  'carrollton/gate-opener-repair': {
    description: 'Gate opener repair in Carrollton, TX: remotes, keypads, receivers, control boards and limit settings for home and business gates. Call Shield Gate Repair.',
    intro: 'Gate opener repair in Carrollton for the controls that tell a gate what to do: remotes, keypads, receivers, control boards and limit settings. Many opener faults are small, inexpensive parts, and we find them before anything bigger is quoted.',
    local: [
      'In Carrollton the opener problems we see depend on who uses the gate. A homeowner in Rosemeade or Austin Waters usually reports a remote that works only close up, a keypad that ignores codes, or a gate that stops short of fully open. Businesses along Josey Lane and the I-35E corridor deal with many users, so shared keypads wear out, codes go unmanaged, and remotes multiply. On both, a control board that stops responding is a frequent fault, often after a storm.',
      'We work from the outside in. First the transmitter battery and the remote’s programming, then the receiver and its antenna, then the keypad and its wiring, and finally the board and its limit settings. A gate that will not travel fully, or reverses at the end of its run, is often limit drift rather than a failing motor, and resetting it is an adjustment. We can add or clear remotes and codes, and replace a worn keypad without touching the operator.',
    ],
    faqs: [
      { q: 'Our Carrollton office gate remote only works when you are right at the gate. Why?', a: 'Start with the remote battery, which is the usual culprit. If a fresh battery does not help, the receiver antenna may be damaged, loose or blocked by a metal enclosure, or there may be radio interference nearby. We test the remote, the receiver and the antenna position, and an external antenna often restores the range you had.' },
      { q: 'Can you delete remotes and codes from former employees or tenants?', a: 'Yes. Most receivers and keypads let us clear stored remotes and codes and re-add only the ones you want. On older receivers that cannot delete a single remote, we clear the memory and re-program the active ones. That matters on a business gate, where lost or unreturned remotes are an ongoing security risk.' },
    ],
  },
  'carrollton/gate-motor-repair': {
    description: 'Gate motor repair in Carrollton, TX: capacitors, gearboxes, thermal cutouts and worn motors on slide and swing operators at homes and yards. Call Shield.',
    intro: 'Gate motor repair in Carrollton for the motor, capacitor, gearbox and thermal protection inside your operator. A gate that hums, stalls when warm or grinds is telling us about the drive, and we test each part of it.',
    local: [
      'Carrollton puts gate motors under two very different loads. On a residential swing gate in Country Place or Josey Ranch, the motor runs a few cycles a day, and failures tend to come from age: a capacitor that has lost its value, or worn brushes on a DC unit. On the high-cycle slide gates serving distribution yards near Hebron Parkway, the motor runs hard all shift, and drag from track debris and worn rollers adds heat and load. That is where thermal cutouts trip in the afternoon and gearboxes wear out early.',
      'Our first test on a humming AC motor is the capacitor, one of the cheapest parts on the operator. A motor that runs and then stops when hot gets a load check on the gate before anything else, because a bind is often the real cause. We then inspect the gearbox for worn gears and output shaft play. Rewinding is rarely economical, but motors and gearboxes are replaceable on most major brands, and we compare that cost with a new operator before you decide.',
    ],
    faqs: [
      { q: 'Our yard gate motor in Carrollton keeps shutting off on hot afternoons. Is it failing?', a: 'Not necessarily. Most operators have a thermal cutout that stops the motor before it overheats. Summer heat plus a gate dragging on grit or worn rollers can push it there, especially on a busy entrance. We check the gate’s rolling resistance and the duty cycle first. If the gate runs freely and the motor still trips, the motor itself is suspect.' },
      { q: 'My gate motor hums but the gate does not move. What is wrong?', a: 'On AC operators that is the classic sign of a failed capacitor, which is a quick and inexpensive repair. It can also be a seized gearbox, a jammed gate, or a manual release left half engaged. We check the release and move the gate by hand first, then test the capacitor and the motor windings.' },
    ],
  },
  'carrollton/emergency-gate-repair': {
    description: 'Emergency gate repair in Carrollton, TX, 24/7: gates stuck open or shut, vehicle strikes and storm damage at homes and industrial yards. Call Shield.',
    intro: 'Emergency gate repair in Carrollton, around the clock, for gates stuck open, stuck shut, struck by a vehicle or damaged in a storm. We secure the property or free the gate first, then plan the full repair.',
    local: [
      'A gate emergency in Carrollton looks different depending on the property. At a home in Rosemeade or a gated pocket off Josey Lane, it is usually a car trapped inside or a gate that will not close at night. On the commercial and distribution side near I-35E, a yard gate stuck open leaves stock and vehicles unsecured, and one stuck shut stops deliveries. Truck strikes are a real risk at yard entrances, where a trailer clips a post or knocks a slide gate off its track. Spring storms add surge and wind damage.',
      'When you call, we ask what you can see so we can advise on safety, including how to use the manual release if it is safe to do so. On site, our first job is to make the gate secure or usable, which may mean releasing it and chaining it, or temporarily disconnecting a damaged operator. Then we assess the gate, operator and controls, and quote the permanent repair separately. After a vehicle strike we document the damage for insurance.',
    ],
    faqs: [
      { q: 'A truck hit our Carrollton yard gate and it is off its track. What should we do?', a: 'Stop using it and keep people clear, because a slide gate off its track can fall. Turn off power to the operator if you can do so safely. Call us and we will secure the opening or rehang the gate where possible, then assess the track, rollers, gate frame and operator. We note the damage for your insurer.' },
      { q: 'Can you come out at night or on a weekend for a gate stuck shut?', a: 'Yes, we take emergency calls 24/7, including nights, weekends and holidays. We give you an honest arrival window when you call rather than a promise we cannot keep. Meanwhile, if the operator has a manual release and you know how to use it, that may let you open the gate yourself.' },
    ],
  },
  'carrollton/commercial-gate-repair': {
    description: 'Commercial gate repair in Carrollton, TX for industrial yards, distribution sites, HOAs and businesses: slide operators, loops, access control. Call Shield.',
    intro: 'Commercial gate repair in Carrollton for distribution yards, light-industrial sites, office properties and HOA entrances. We repair the operator, the vehicle detection and the access control, and work to keep busy gates out of service as briefly as possible.',
    local: [
      'Carrollton has a significant light-industrial and distribution base, concentrated along I-35E and around Hebron Parkway and the President George Bush Turnpike. The gates there are mostly commercial slide gates and chain link industrial gates, cycling far more often than any home gate, with trucks crossing the track all day. Typical faults are chain and sprocket wear, rollers ground down by debris, loop detector failures and control boards worn by heat and heavy use. HOA entrances in the gated residential pockets add keypads, telephone entry and resident traffic.',
      'On a commercial call we look at the whole entrance: gate, operator, safety devices, loops and access control, because a fault in one often presents in another. We check whether the operator is rated for the site’s actual cycle count, since repeated failures of the same part usually mean the unit is undersized. For sites where a gate failure stops business, we can plan a maintenance schedule and discuss keeping critical spares. We also check UL 325 entrapment protection, which matters on busy entrances.',
    ],
    faqs: [
      { q: 'Our Carrollton warehouse gate fails every few months. Why does it keep happening?', a: 'Repeat failures of the same part usually mean the operator is running past its duty rating or the gate is making it work too hard. We look at cycle count, gate weight, track condition and roller wear. Sometimes the answer is cleaning the track and fixing the gate. Sometimes the operator was never specified for this traffic, and we tell you so.' },
      { q: 'Can you work on our access control as well as the gate?', a: 'Yes. We repair and program keypads, card readers, telephone entry panels and vehicle loops alongside the operator. Diagnosing the whole entrance in one visit avoids paying for two separate trades. We can also clear old codes and credentials, which matters on business and HOA gates where the list of users keeps changing.' },
    ],
  },
  'carrollton/residential-gate-repair': {
    description: 'Residential gate repair in Carrollton, TX for driveway, side and pedestrian gates in Josey Ranch and Country Place, with child safety checks. Call Shield.',
    intro: 'Residential gate repair for Carrollton homeowners, covering driveway gates, side yard gates and pedestrian gates. We repair what is broken and check the safety features that protect children and pets around an automatic gate.',
    local: [
      'Carrollton homes have a broad mix of gates beyond the main driveway gate: side yard gates to the back, pedestrian gates beside the drive, and in some gated pockets, shared entrances the neighbors all rely on. Most are residential swing gates. Over time hinges wear, latches stop catching, and posts shift, so a side gate swings open on its own or a pedestrian gate no longer self-closes. For families with children or dogs, a gate that will not latch is a real problem, not a cosmetic one.',
      'On an automatic gate we test the photo-eyes, the obstruction reversal and the force settings, and look for pinch points at the hinges and gaps where a child could be caught. Those checks follow UL 325 practice. On manual gates we fix hinges, latches, closers and sag, and make sure self-closing gates actually close. Residential gate repair in Carrollton covers neighborhoods from Josey Ranch to Austin Waters, and we explain what we found and what it will take before work starts.',
    ],
    faqs: [
      { q: 'My side gate in Carrollton keeps swinging open and the dog gets out. Can that be fixed?', a: 'Usually easily. The latch may have moved out of line because the gate has dropped or the post has shifted. We realign or re-hang the gate, replace a worn latch, and can fit a self-closing hinge or closer so the gate shuts and latches on its own. A latch set high is useful where young children use the gate.' },
      { q: 'How do I know my automatic gate is safe around children?', a: 'Place an object in the gate’s path while it closes: it should stop and reverse. Check that the photo-eyes are clean, aligned and stop the gate when the beam is broken. Keep remotes out of children’s reach and never let anyone ride or play on the gate. We test reversal and sensors on every service visit.' },
    ],
  },
  'carrollton/automatic-gate-installation': {
    description: 'Automatic gate installation in Carrollton, TX: planning, HOA approval, footings, power and UL 325 safety for homes and industrial yards. Call Shield.',
    intro: 'Automatic gate installation in Carrollton for homes, gated communities and commercial yards. We plan the gate, operator, power and safety devices as one system, so the finished entrance works well and meets current safety standards.',
    local: [
      'Installing an automatic gate in Carrollton means matching the gate to a very mixed property stock. A home in Josey Ranch or Rosemeade usually suits a residential swing gate or a compact slide gate, sized to the drive and the street setback. A distribution yard near I-35E needs a commercial slide gate and an operator rated for heavy daily cycles, with loops for vehicle exit. Gated residential pockets need access control and planning for resident traffic. The gate type, weight and duty cycle decide the operator, not the other way around.',
      'We start with a site visit to measure the opening, check slope and drainage, and locate power. For homes we confirm what the city and your HOA require before ordering anything. Posts and track footings are set to suit the local soil, and we plan the power run and any conduit for loops and keypads. Every install follows UL 325 for the operator and ASTM F2200 for gate construction, with photo-eyes, edges or both. The job finishes with a walkthrough of the manual release and safety features.',
    ],
    faqs: [
      { q: 'Do I need approval to install an automatic gate at my Carrollton home?', a: 'It depends on your property and neighborhood. Some HOAs have rules on gate style, height and colour, and the city may have requirements for setbacks or electrical work. We confirm what the city and your HOA require before work starts, and can help you prepare drawings or specifications for an HOA application.' },
      { q: 'Should I choose a swing gate or a slide gate?', a: 'A swing gate needs clear space for the leaves to open and a fairly level drive. A slide gate needs room beside the opening for the gate to roll into, and works well on slopes or short drives. Commercial yards in Carrollton usually suit slide gates. We look at your space, slope and use, and recommend the type that fits.' },
    ],
  },
  'carrollton/electric-gate-installation': {
    description: 'Electric gate installation in Carrollton, TX: power runs, conduit, transformers, surge protection and loops for homes and businesses. Call Shield.',
    intro: 'Electric gate installation in Carrollton with the wiring done properly from the start. We plan the power supply, low-voltage runs, loops and surge protection along with the gate and operator, because most later faults begin in rushed wiring.',
    local: [
      'In Carrollton an electric gate can draw power from a house supply on a residential lot, or from a building panel on a commercial or distribution site along Hebron Parkway or I-35E. Distances vary a lot, from a short run beside a Country Place driveway to a long trench across a paved yard. On commercial properties, loops cut into the pavement handle exit and safety detection, and those slabs carry heavy truck traffic. Planning where cable, conduit and loops go is the difference between a gate that lasts and one that keeps failing.',
      'We size the supply and cable for the operator and distance, use conduit for buried runs, and seal every splice. Where mains power is impractical, a battery operator with solar or low-voltage charging is an option. Surge protection goes on the supply and loop leads. Electrical work is done to code, and we confirm what the city and your HOA require before work begins. The operator is installed to UL 325 with photo-eyes and entrapment protection, and the gate itself is built to ASTM F2200.',
    ],
    faqs: [
      { q: 'Can an electric gate be installed where there is no power near the driveway in Carrollton?', a: 'Yes. We can trench a power run in conduit from the house or building, or use a battery operator charged by a solar panel or a low-voltage charger. Solar suits gates with modest daily use and a clear view of the sun. We compare the cost of trenching against a battery system and recommend the more reliable choice for your gate.' },
      { q: 'What protects an electric gate from lightning and surges?', a: 'Surge protection devices on the main power supply and on the low-voltage leads to loops, keypads and phone lines. These divert surge energy before it reaches the control board. Good grounding helps too. They cannot stop a direct strike, but they greatly reduce damage from nearby ones, and they cost much less than a control board.' },
    ],
  },
  'carrollton/sliding-gate-installation': {
    description: 'Sliding gate installation in Carrollton, TX: track and cantilever slide gates, footings, slide operators and ASTM F2200 safety for homes and yards. Call us.',
    intro: 'Sliding gate installation in Carrollton for driveways and commercial yards. We plan the run-back space, footing, track or cantilever design and operator together, so the gate rolls freely for years after we leave.',
    local: [
      'Slide gates are common on Carrollton’s industrial and distribution properties because they handle wide openings and do not swing into truck traffic. On homes they suit short drives and sloped lots where a swing gate would hit the ground. The deciding factors are the space beside the opening for the gate to roll back into, and the ground it runs over. A track gate across a gravel yard collects debris in the track. A cantilever gate rides on rollers set beside the opening and leaves the ground clear.',
      'For yards near I-35E and Hebron Parkway, a cantilever design is often the better choice for exactly that reason. We set footings for the track or roller posts, choose an operator rated for the gate weight and cycle count, and install the rack or chain level and true. ASTM F2200 sets guarding for rollers and the gap at the gate end, and UL 325 covers the operator, photo-eyes and edges. For homes, we confirm what the city and your HOA require before work begins.',
    ],
    faqs: [
      { q: 'Is a cantilever gate better than a track gate for a Carrollton warehouse yard?', a: 'Often, yes. A cantilever gate rides on rollers mounted beside the opening, so there is no ground track to fill with gravel and grit. That removes a major cause of roller and operator wear on yard gates. It needs more run-back space and a strong footing, so we measure the site before recommending it.' },
      { q: 'How much space do I need beside the opening for a sliding gate?', a: 'For a track gate, at least the width of the opening plus some clearance for the operator. A cantilever gate needs extra length on top of that for its counterbalance tail. We measure your site and check for obstructions such as trees, walls or utility boxes before choosing the design, so there are no surprises later.' },
    ],
  },
  'carrollton/swing-gate-installation': {
    description: 'Swing gate installation in Carrollton, TX: single and double leaves, posts and footings, swing operators and UL 325 safety for homes and HOAs. Call Shield.',
    intro: 'Swing gate installation in Carrollton for single and double gates on homes and gated communities. We plan the swing path, posts, footings and operator so the leaves hang true and stay that way.',
    local: [
      'Residential swing gates are a natural fit for Carrollton homes in neighborhoods such as Josey Ranch, Rosemeade and Country Place, where drives are generally level and there is room for the leaves to open inward. The posts carry the whole weight of each leaf as a lever, and in local soil that moves with moisture, a post set shallow will lean over time. That lean shows up as a dropped leaf, a latch that no longer meets, and an operator that strains. Double gates also need both leaves to meet cleanly at the center.',
      'We size posts and footings to the leaf weight and set them deep enough to resist movement, using steel posts or masonry columns as the design requires. We choose the operator for the leaf length and weight, then plan where the arms mount so the gate clears the drive and nearby landscaping. Photo-eyes and an entrapment check follow UL 325, with the gate itself built to ASTM F2200, and before work begins we confirm the style and height rules the city and your HOA set.',
    ],
    faqs: [
      { q: 'Will a swing gate on my Carrollton driveway work if the drive slopes?', a: 'A gentle slope across the swing path can be handled with rising hinges or by setting the leaves to swing outward. A steep upward slope inside the gate often means the leaf would hit the ground, and a slide gate may suit better. We measure the slope across the full swing arc before recommending a design.' },
      { q: 'Should my swing gate open in or out?', a: 'Most homes open inward, toward the property, so the gate never swings into the street or a sidewalk. Outward swinging gates can work when the drive rises steeply behind the gate, but they need enough room and must not open into public areas. We check your setback and space, and confirm what the city and your HOA require.' },
    ],
  },
  'carrollton/gate-opener-installation': {
    description: 'Gate opener installation in Carrollton, TX: swing and slide openers, remotes, keypads, receivers and safety sensors fitted to existing gates. Call Shield.',
    intro: 'Gate opener installation in Carrollton for existing manual gates and for replacing worn openers. We match the opener to the gate, then set up remotes, keypads, limits and safety sensors so it runs correctly from day one.',
    local: [
      'Many Carrollton homes already have a sound iron or wood gate that someone opens by hand, and automating it is often simpler than replacing it. On a residential swing gate in Austin Waters or Country Place, that means a swing arm or linear actuator per leaf. On a slide gate it means a slide operator with chain or rack. Commercial gates on Carrollton’s industrial sites need heavy-duty openers rated for continuous traffic, plus loops and access control. The first question is always whether the gate itself moves freely and is strong enough to automate.',
      'We check that the gate hangs straight and rolls or swings without binding, and repair it first if needed. Then we select an opener for the gate weight, length and expected cycles, choose AC or DC with battery backup, and plan power. We install and program remotes, keypads and receivers, set the limits and force, and fit photo-eyes to UL 325. Before we finish we show you the manual release and how to add or remove remotes. We confirm what the city and your HOA require where relevant.',
    ],
    faqs: [
      { q: 'Can you put an opener on my existing Carrollton gate?', a: 'In most cases, yes. We check the gate’s weight, length, hinges and condition. A gate that sags or binds must be fixed first, because an opener will not cure it and will wear out early trying. Very heavy or damaged gates may need reinforcement. We tell you before installation whether your gate is suitable.' },
      { q: 'Should I choose an opener with battery backup?', a: 'For most homes it is worth it. A DC opener with battery backup keeps working through a power outage for a limited number of cycles, so you are not trapped in or out during a storm. The battery is a consumable that wears faster in Texas heat and needs periodic replacement. We help you weigh it against an AC opener.' },
    ],
  },
  'dallas/viking': {
    description: 'Viking gate repair in Dallas, TX for heavy estate slide and swing gates in Preston Hollow and Bluffview: batteries, limits, boards, drives. Call Shield.',
    intro: 'Viking gate repair in Dallas for the DC operators that drive heavy estate gates and busy commercial entrances. We load test the batteries and check the gate itself before we pass judgment on the operator.',
    local: [
      'Viking operators are designed for heavy gates, and Dallas has plenty of them: tall wrought iron swing leaves and estate slide gates on the long private drives north of Northwest Highway. Those gates sit on expansive clay that swells in wet spells and shrinks through a dry August, so posts move and leaves start to bind. A Viking senses the extra load and reports it as an obstruction, stopping or reversing. On DC with battery storage, that load also drains the batteries faster, so a binding gate and a tired battery often arrive together.',
      'We realign the gate first, then load test the batteries and check charge input. Swing operators such as the R-6 and F-1 use mechanical limit switches that drift over thousands of cycles. The K-2 slide uses digital limits, and older K-2 units without Viking’s position sensor can lose them after a full power failure, which we relearn on site. Boards and batteries are generally available, gearbox parts a short order. On estates in Preston Hollow, Devonshire and Bluffview, repair is usually the economical route.',
    ],
    faqs: [
      { q: 'Our Viking estate gate in Dallas binds in late summer. Is the operator wearing out?', a: 'More likely the post has moved. Dallas clay shrinks in dry heat and swells after rain, and a heavy gate on a shifting post starts to bind, which a Viking reads as an obstruction. We check post and hinge alignment, correct the gate, then reset limits and force. Fixing the gate usually stops the faults without any new parts.' },
      { q: 'What Viking parts can be replaced rather than the whole unit?', a: 'Batteries, control boards, limit hardware, charge controllers and solar components are generally available, and gearbox, chain and screw drive parts are usually a short order. That covers most failures. Replacing the whole operator makes sense mainly when the gearbox is badly worn on a very high-cycle gate, or the housing is damaged.' },
    ],
  },
  'dallas/us-automatic': {
    description: 'US Automatic gate repair in Dallas, TX: Patriot and Ranger battery operators, solar panels, chargers and long DC cable runs on estate drives. Call Shield.',
    intro: 'US Automatic gate repair in Dallas for Patriot, Ranger and Patriot RSL operators, whether solar or AC charged. These are 12V battery systems, so we test the power side first.',
    local: [
      'In Dallas US Automatic operators fit gates where running mains power was difficult: a gate at the far end of a long private drive in Preston Hollow or Devonshire, or a secondary entrance set well back from the house. Long drives mean long DC cable runs, and DC loses voltage over distance, so an operator several hundred feet from its supply may get noticeably less than the battery provides. Dallas heat is the other factor. High temperatures wear sealed lead-acid batteries down faster, especially in an unshaded enclosure.',
      'We load test the battery rather than reading it at rest, check panel or charger output, and test the charge controller. Under the mature tree canopy in Lakewood and Lake Highlands, a panel that had full sun when installed can be shaded now. We inspect terminals for corrosion and check cable gauge on long runs. A Patriot or Ranger on a heavy iron leaf also suffers if the gate drags, since mechanical drag drains the battery. Most repairs are a battery, a controller or a connection.',
    ],
    faqs: [
      { q: 'Our gate at the end of a long Dallas drive behaves oddly. Could it be the wiring?', a: 'Yes. On a long DC run the voltage at the operator can fall well below what leaves the battery or charger, and the board can stall or reverse as if obstructed. We measure voltage at the operator while it runs. The fix is often heavier cable or moving the battery closer, not a new board.' },
      { q: 'How do I keep my solar gate battery healthy in Dallas heat?', a: 'Shade the enclosure if you can without shading the panel, keep the panel clean of dust and pollen, and keep the gate swinging freely so each cycle draws less. Even so, the battery is a consumable and will need replacing. We load test it on service visits so it is replaced before it strands you.' },
    ],
  },
  'dallas/apollo': {
    description: 'Apollo gate repair in Dallas, TX: Nice Apollo 1550 and 1650 openers, 12V batteries, 816 actuators, boards and solar charging on iron gates. Call Shield.',
    intro: 'Apollo gate repair in Dallas for 1550 single and 1650 dual swing openers on residential and estate gates. We check battery voltage under load first, because most Apollo faults start there.',
    local: [
      'Apollo openers run their actuators straight from a 12V battery, kept charged by solar or a trickle charger. In Dallas they turn up on wrought iron swing gates, from driveway pairs in Kessler Park and Oak Cliff to larger leaves on estate drives. Heavy iron and clay soil are a poor mix for a low-voltage actuator. As posts move and leaves bind, current rises, voltage dips, and the board stops or reverses as though it hit something. Summer heat in the control box shortens battery life at the same time.',
      'Apollo calls for 12 to 14 volts while the gate is running, and never below 11, so we measure under load. Then we check the gate swings freely, inspect the 816 actuator and its limit screws, and test the board. The 833/834 board must relearn after any power loss. On a 1650 the cord to the second actuator crosses the drive, and Apollo advises against cutting 816E cables because of the sensor wire inside, so a splice there is suspect. Distributors list the TITAN 12L as a bolt-in replacement for older 416 and 816 actuators.',
    ],
    faqs: [
      { q: 'Why does my Apollo gate in Dallas get weaker as summer goes on?', a: 'Heat is hard on the battery, and many Dallas gates also bind more as the clay dries and posts shift. Both lower the voltage the actuator sees under load, and the board responds by stopping short or reversing. We test the battery under load, then check post and hinge alignment. Often one battery and a gate adjustment solve it.' },
      { q: 'Can you replace an Apollo solar panel and battery?', a: 'Yes. Apollo’s ETL manuals call for a sealed battery of at least 33 amp hours with top-mounted posts, not side terminals. Apollo sizes panel wattage to daily cycle count, and dual gates need double the panel. We size the replacement to your gate and use rather than fitting like for like, because a marginal system stays marginal.' },
    ],
  },
  'dallas/ramset': {
    description: 'Ramset gate repair in Dallas, TX: RAM 100 and RAM 1000 slide operators on apartment, office and warehouse entrances, chains, boards, loops. Call Shield.',
    intro: 'Ramset gate repair in Dallas for RAM 100 and RAM 1000 slide operators on apartment, office and commercial entrances. On busy Dallas gates, we look at cycle count and gate load before we replace the same part again.',
    local: [
      'Ramset markets the RAM 100 and RAM 1000 for residential and light commercial gates, but in Dallas many end up on apartment and office entrances near the core and toward the east side of the county, running hundreds of cycles a day. Wear parts are consumed by cycle count, so a chain or sprocket that would last years on a driveway wears out much sooner here. Heat adds to it. A Ramset tripping its thermal cutout on a summer afternoon is often reporting load from worn rollers or poor alignment rather than a dying motor.',
      'When the same part keeps failing, we establish actual cycle count and move the gate by hand to find drag before replacing anything. Chains, sprockets and limit switches are the parts that fail, and we carry them. Boards and relays are generally a short order. At multi-family sites along US-75 Central Expressway and I-35E the Ramset works with loop detectors and access control, and faults often start there, so we test them together. If a site has outgrown the operator, we say so.',
    ],
    faqs: [
      { q: 'The Ramset at our Dallas apartment entrance keeps needing new chains. Is it defective?', a: 'Rarely. A RAM 1000 on a busy apartment entrance can run far beyond the traffic it was specified for, and chains wear on cycles, not calendar months. Worn rollers or a misaligned gate add load. We measure traffic and check the gate under manual operation, then tell you whether the fix is servicing, the gate, or a heavier operator.' },
      { q: 'Can you keep spare parts for our Ramset on site?', a: 'For sites where a gate failure stops business, yes, we will discuss holding critical spares such as a chain, sprocket and limit switches on site. That way a failure can be fixed with parts already there. We also recommend a service interval matched to your actual traffic so wear parts are replaced before they fail.' },
    ],
  },
  'dallas/automatic-gate-repair': {
    description: 'Automatic gate repair in Dallas, TX for estate swing and slide gates in Preston Hollow and Lakewood and busy apartment and office entrances. Call Shield.',
    intro: 'Automatic gate repair across Dallas, from wrought iron estate gates on private drives to high-cycle apartment and office entrances. We diagnose residential and commercial gates differently, because they fail differently.',
    local: [
      'Dallas automatic gates fall broadly into two groups. North of Northwest Highway, in Preston Hollow, Bluffview and Devonshire, they are mostly wrought iron swing and estate slide gates on long drives, many with operators that have been running for decades. Closer to the core and east, they are commercial slide gates and barrier arms at apartment, office and warehouse properties. Across both, the city’s expansive clay moves posts, which causes binding, while control boards, photo-eyes and chains account for most component failures.',
      'On an estate gate we look first at alignment and the gate’s free movement, then photo-eyes, then the board and capacitor. An older operator with a single failed part usually deserves repair. On a high-cycle entrance we check chains, rollers and loops, and whether the operator suits the duty cycle, because repeated failures mean the unit is undersized. Automatic gate repair in Dallas means telling those situations apart, and we explain what we found before work starts.',
    ],
    faqs: [
      { q: 'My Dallas automatic gate opens but will not close. What is wrong?', a: 'Usually the safety system is holding it open. A blocked or misaligned photo-eye, a dirty lens, or a faulty loop will keep the gate open to protect people and cars. Sprinklers, landscaping and low sun can all affect photo-eyes. We check the sensors and their alignment first, then the board and limits.' },
      { q: 'Is it worth repairing a twenty-year-old gate operator?', a: 'Often, yes. Many older operators on Dallas estate gates are mechanically sound and need only a board, capacitor or limit adjustment. The real questions are parts availability and whether you are paying for repeat repairs. We give you a straight answer on that before you spend money.' },
    ],
  },
  'dallas/electric-gate-repair': {
    description: 'Electric gate repair in Dallas, TX: wiring, transformers, surge damage, control boards and vehicle loops on estate drives and apartment gates. Call Shield.',
    intro: 'Electric gate repair in Dallas for power supplies, transformers, buried wiring, control boards, loops and surge damage. When a gate is dead or intermittent, we trace the circuit from supply to operator.',
    local: [
      'Dallas electric gate faults depend on the property. On estate drives in Preston Hollow and Devonshire, the supply often runs a long way underground to the gate, through clay that moves with the seasons and can stress conduit and splices. Older installations may have unsealed connections that corrode. At apartment and commercial entrances near US-75 and I-35E, vehicle loops cut into pavement take heavy traffic and break as the slab cracks. Spring thunderstorms bring surge damage to boards, receivers and loop detectors across the city.',
      'We test the supply and breaker, then transformer output, then board power and inputs, then loops and detectors. On long buried runs we find the fault before any digging, and pull new wire through intact conduit where possible. After a storm we test each component separately, so you pay only for what failed, and we fit surge protection to the supply and low-voltage leads if it is missing. Electric gate repair in Dallas often comes down to one connection, and we look for it methodically.',
    ],
    faqs: [
      { q: 'My Dallas gate works some days and not others. Is it electrical?', a: 'Intermittent faults are usually a connection: a corroded splice, a loose terminal or a cracked cable that opens when the ground shifts or gets wet. Dallas clay moves with moisture, which can pull on buried runs. We test continuity and voltage drop under load, find the weak point, and repair it rather than replacing parts at random.' },
      { q: 'Our apartment gate in Dallas ignores cars at the exit. What failed?', a: 'Most often the exit loop or its detector. The loop wire sits in a saw cut, and cracked pavement or patch repairs break it. We test the loop and the detector settings. A failed detector is a straightforward swap, while a broken loop means cutting a new one and sealing it. We also check the safety loop under the gate.' },
    ],
  },
  'dallas/driveway-gate-repair': {
    description: 'Driveway gate repair in Dallas, TX for estate drives in Preston Hollow, Bluffview and Devonshire: wrought iron leaves, posts, hinges, openers. Call Shield.',
    intro: 'Driveway gate repair for Dallas homes, from double wrought iron gates on estate drives to single leaves in Kessler Park and Lakewood. We get your car moving first, then fix what caused the failure.',
    local: [
      'Private driveway gates in Dallas are often large: wrought iron swing pairs or estate slide gates on long drives north of Northwest Highway, and more modest iron gates in older neighborhoods like Kessler Park and Lakewood. Many were installed twenty or more years ago and still run the original operator. The ground causes most mechanical trouble. Dallas clay swells when wet and shrinks hard in a dry summer, so posts lean and leaves drop, scrape or miss their latch, and the operator works harder on every cycle.',
      'We check the gate by hand before anything else, because a gate that binds will keep killing operators. A leaning post or worn hinge can usually be corrected, and on double gates we reset the leaf delay so the pair closes in order. Then we test the operator: board, capacitor, limits and photo-eyes. On older estate operators a single failed board or capacitor is the usual cause, and repairing it is far cheaper than replacing the unit. We show you the manual release before we leave.',
    ],
    faqs: [
      { q: 'My Dallas driveway gate drags on the concrete in summer. Why?', a: 'Most likely the post has shifted. In dry months the clay under a Dallas driveway shrinks and posts lean, and the leaf drops at the far end. We check the post and hinges, then re-hang or adjust the leaf. If the post keeps moving, a deeper footing or a support wheel can stop it happening every summer.' },
      { q: 'Can you repair the original operator on my old estate gate?', a: 'Usually. Older operators commonly fail on a control board or capacitor, and both are replaceable. Where an original board is no longer made, a substitute board can often be fitted, which we explain first. We only recommend a new operator when parts are unavailable or the drive train itself is worn out.' },
    ],
  },
  'dallas/sliding-gate-repair': {
    description: 'Sliding gate repair in Dallas, TX: estate slide gates, commercial slide operators, rollers, tracks and chains at homes, offices and warehouses. Call Shield.',
    intro: 'Sliding gate repair in Dallas for estate slide gates on private drives and commercial slide gates at apartments, offices and warehouses. We fix the track, rollers, chain and operator in the right order.',
    local: [
      'Dallas has slide gates at both ends of the market. Estate slide gates cross long drives in Preston Hollow and Bluffview, often heavy and ornate, running a few times a day. Commercial slide gates guard apartment, office and warehouse entrances closer to the core, cycling hundreds of times daily, where chain wear is constant. Both share the same weak points: rollers that flatten, tracks that settle or crack as the clay moves, and chains that stretch and jump. A slide gate that drags makes the operator strain until it stalls.',
      'We start by rolling the gate by hand to find drag, then inspect the track, rollers, guide wheels and the alignment at the gate end. Next we check chain tension and sprocket wear, then the operator’s limits, board and safety devices. On high-cycle commercial gates, chain and roller replacement is routine maintenance, and we suggest an interval based on use. For sliding gate repair in Dallas, a cracked or sunken track section can usually be replaced without redoing the whole run.',
    ],
    faqs: [
      { q: 'The track under my Dallas slide gate has cracked. Does the whole gate need replacing?', a: 'No. Clay movement can crack or settle a concrete track bed, which makes the gate bump or bind. We can usually cut out and replace the damaged section and reset the track level. We also check the rollers, since a rough track wears them quickly and they may need replacing at the same time.' },
      { q: 'How often should a busy apartment slide gate be serviced?', a: 'That depends on cycle count, but high-traffic entrances benefit from regular servicing several times a year. Chains, sprockets, rollers and limit switches wear on cycles, not age. Scheduled inspection and lubrication catch wear before it becomes a breakdown that leaves the gate stuck open overnight.' },
    ],
  },
  'dallas/swing-gate-repair': {
    description: 'Swing gate repair in Dallas, TX: wrought iron leaves, hinges, posts, swing arms and operators in Preston Hollow, Kessler Park and Lakewood. Call Shield.',
    intro: 'Swing gate repair in Dallas for wrought iron single and double gates, hinges, posts, operator arms and controls. Most swing gate faults begin at the hinge post, so that is where we start.',
    local: [
      'Wrought iron swing gates are a Dallas signature, from estate entrances in Preston Hollow and Devonshire to the older driveways of Kessler Park and Lakewood. Iron is heavy, and every leaf is a long lever on its hinge post. Dallas clay swells and shrinks with the seasons, and a post set in it tilts a little at a time. The leaf then sags, scrapes the drive or misses its stop, and the operator arm pushes against the bind until the board trips or a bracket cracks.',
      'We swing each leaf by hand, check the hinge pins, post plumb and the latch line, and correct the gate before touching the operator. Fixes include new hinges, re-hanging the leaf, a support wheel or post work. Then we test the operator: arm pivots, limits, force, capacitor and board. On double gates we set the leaf delay so the leaves close in sequence. Swing gate repair in Dallas ends with a safety check of the photo-eyes and reversal, so the gate stops for people and cars.',
    ],
    faqs: [
      { q: 'Why do my Dallas swing gates no longer meet in the middle?', a: 'One or both leaves have moved, usually because a post has tilted in the clay or the hinges have worn. The leaves then arrive at different heights or angles. We find which post or hinge has moved, correct it, and reset the operator limits and leaf delay so both gates close cleanly together again.' },
      { q: 'Can a heavy wrought iron gate damage its operator?', a: 'Yes, if it is too heavy for the operator’s rating or hangs badly. The operator strains on every cycle, which wears the gears and arm pivots and overheats the motor. We check weight, hinge condition and leaf length against the operator, and tell you if the gate needs lighter infill or a stronger operator.' },
    ],
  },
  'dallas/gate-opener-repair': {
    description: 'Gate opener repair in Dallas, TX: remotes, keypads, receivers, control boards and limits for estate drives and apartment entrances. Call Shield Gate Repair.',
    intro: 'Gate opener repair in Dallas for remotes, keypads, receivers, control boards and limit settings. We check the small, cheap parts first, because they cause many of the faults that look serious.',
    local: [
      'Dallas gate openers face very different users. An estate gate in Bluffview or Turtle Creek has a few remotes and a keypad, and complaints are usually a short remote range, a keypad that ignores codes, or a gate that stops short. Apartment and office entrances across the city have hundreds of users, so keypads wear, remotes get lost, and stored codes pile up. Control boards are a common failure on both, often after a storm or after many years of service on an older opener.',
      'We start at the transmitter battery and programming, then the receiver and antenna, then the keypad and wiring, then the board and limits. A gate that does not travel fully is often limit drift, an adjustment rather than a replacement. On commercial sites we clear old codes and remotes, which matters for security, and can replace a worn keypad without touching the operator. Gate opener repair in Dallas often ends with a smaller bill than the owner expected.',
    ],
    faqs: [
      { q: 'Our Dallas apartment keypad stopped accepting codes. Is the opener broken?', a: 'Probably not. Test whether the gate opens from the push button or a remote. If it does, the operator is fine and the fault is in the keypad, its wiring or its programming. Keypads on busy entrances wear and take weather. We test the keypad, rebuild codes if memory was lost, and replace it if needed.' },
      { q: 'How many remotes and codes can a gate opener hold?', a: 'It depends on the receiver and keypad. Residential receivers hold a limited number of remotes, while commercial access systems can store many more codes and credentials. If a busy Dallas entrance has outgrown its receiver, we can fit one with more memory or move users onto a keypad or card system.' },
    ],
  },
  'dallas/gate-motor-repair': {
    description: 'Gate motor repair in Dallas, TX: capacitors, gearboxes, thermal cutouts and worn motors on estate operators and high-cycle commercial gates. Call Shield.',
    intro: 'Gate motor repair in Dallas for capacitors, motors, gearboxes and thermal protection on swing and slide operators. A hum, a grind or a summer stall each point to a different part, and we test for each.',
    local: [
      'Dallas gate motors run under two very different loads. On estate operators in Preston Hollow and Devonshire, motors run a few times a day for many years, and the typical failure is an aged capacitor on an AC unit: the motor hums but the gate does not move. On apartment, office and warehouse entrances, motors run hundreds of cycles a day in Texas heat. There gearboxes wear, thermal cutouts trip on summer afternoons, and a gate binding from clay movement or worn rollers adds load to every cycle.',
      'We check the capacitor first on a humming motor, since it is inexpensive and quick to replace. A motor that trips when hot gets a check of the gate’s drag before anything else. We inspect the gearbox for worn teeth, oil leaks and shaft play, and test the windings. Gearboxes and motors can be replaced on most major brands, and we compare that with a new operator. Gate motor repair in Dallas on a high-cycle entrance also means asking whether the motor suits the duty cycle.',
    ],
    faqs: [
      { q: 'Why does our Dallas commercial gate motor stop on summer afternoons?', a: 'Its thermal cutout is protecting it. High ambient heat, heavy traffic and any drag on the gate push the motor to its limit. We check rollers, track and alignment, measure the load, and look at whether the operator is rated for your traffic. Fixing the gate often solves it. Sometimes a heavier-duty operator is the answer.' },
      { q: 'My gate motor grinds when it runs. Is it the motor or the gearbox?', a: 'Grinding usually comes from the gearbox or the drive, not the motor. Worn gears, a dry or leaking gearbox, a stretched chain on a worn sprocket, or a damaged arm joint all make noise. We isolate each by running the motor with the drive released. Caught early, a chain or gearbox repair avoids a full operator replacement.' },
    ],
  },
  'dallas/emergency-gate-repair': {
    description: 'Emergency gate repair in Dallas, TX, 24/7: gates stuck open or shut, vehicle damage and storm damage at estates, apartments and businesses. Call Shield.',
    intro: 'Emergency gate repair in Dallas around the clock, for gates stuck open, stuck shut, hit by a vehicle or damaged by a storm. We make the entrance safe and secure first, then plan the full repair.',
    local: [
      'In Dallas a gate emergency can mean a car trapped behind an estate gate in Preston Hollow, a resident locked out late at night, or an apartment or office entrance stuck open with no security. Vehicle strikes are a known hazard at busy multi-family and commercial gates, where a car or truck catches a leaf or a barrier arm. Spring thunderstorms bring surge damage that leaves a gate dead, and high winds can bend leaves or push slide gates off their tracks.',
      'Traffic on US-75 and I-35E makes travel across Dallas unpredictable, so we give you an honest arrival window on the phone and advise on the manual release if it is safe to use. On arrival we secure the opening or free the gate, which may mean releasing and chaining it or disconnecting a damaged operator. Then we assess the gate, operator, safety devices and access control, and quote the permanent repair. After a vehicle strike we photograph and document the damage for insurance.',
    ],
    faqs: [
      { q: 'A car hit our Dallas apartment entrance gate. What should we do first?', a: 'Keep people clear, because a damaged gate can fall or move unexpectedly, and turn off operator power if it is safe. Photograph the damage and note the vehicle details. Call us and we will secure the entrance, then assess the gate frame, hinges or track, operator and safety devices, and document everything for insurance.' },
      { q: 'My gate is stuck closed with my car inside. How can I get out?', a: 'Most operators have a manual release, a key or lever on the operator or arm, that disengages the drive so the gate can be pushed by hand. Check the owner’s manual or the label on the operator. If you cannot find it or the gate is damaged, do not force it. Call us any time, day or night.' },
    ],
  },
  'dallas/commercial-gate-repair': {
    description: 'Commercial gate repair in Dallas, TX for apartments, offices, warehouses and HOAs: slide operators, barrier arms, loops and access control. Call Shield.',
    intro: 'Commercial gate repair in Dallas for apartment complexes, office properties, warehouses and HOA entrances. We repair the operator, barrier arms, vehicle loops and access control as one system, with the duty cycle in mind.',
    local: [
      'Commercial gates in Dallas concentrate closer to the core and toward the eastern side of the county: apartment, office and warehouse entrances running hundreds of cycles a day, including properties along I-35E and Loop 12. Commercial slide gates and barrier arms are the usual equipment, with loops for vehicle detection and keypads, card readers or telephone entry for access. At that traffic level, parts that last years on a home gate wear out much faster, and chain wear, photo-eye faults and board failures are routine.',
      'We look at the whole entrance on each visit, because a fault in access control or a loop often presents as a gate problem. The key question on repeat failures is whether the operator was ever specified for the site’s cycle count. We can set up preventive maintenance matched to traffic, discuss keeping spares on site, and check UL 325 entrapment protection, which matters where pedestrians share the entrance. For HOA entrances, we work with the management company on resident access during repairs.',
    ],
    faqs: [
      { q: 'Our Dallas apartment gate keeps breaking down. Is the operator wrong for the site?', a: 'Possibly. Repeated failures of the same part usually mean the operator runs well past its duty rating, or the gate adds load through worn rollers or misalignment. We estimate the daily cycle count, check the gate and loops, and tell you whether servicing or a heavier operator is the real fix for your entrance.' },
      { q: 'Do you repair barrier arm gates at Dallas parking entrances?', a: 'Yes. We repair barrier arm operators, broken arms, loops, detectors and the access devices that control them, including DoorKing 1601 barrier units. Struck arms are a frequent problem at busy entrances, so after any hit we check the operator’s drive and mounting as well as replacing the arm itself.' },
    ],
  },
  'dallas/residential-gate-repair': {
    description: 'Residential gate repair in Dallas, TX for driveway, side and pedestrian gates in Lakewood, Kessler Park and Oak Cliff, with child and pet safety. Call Shield.',
    intro: 'Residential gate repair for Dallas homeowners: driveway gates, side yard gates, pedestrian gates and the safety features around them. We fix what has failed and make sure the gate is safe for children and pets.',
    local: [
      'Dallas homes carry a wide range of gates. Beyond the wrought iron driveway gates found in Preston Hollow and Bluffview, there are side yard gates and pedestrian gates on older homes in Lakewood, Kessler Park and Oak Cliff, many in iron or wood. On all of them, the clay underfoot shifts posts with the seasons, so latches stop catching, self-closing gates hang open and leaves drag. For families, a side gate that will not latch lets dogs and small children out, which makes it more than a cosmetic fault.',
      'On automatic gates we test photo-eyes, obstruction reversal and force, and look for pinch points at hinges and gaps where a child could be caught, following UL 325 practice. On manual gates we repair hinges, latches and closers, correct sag, and set self-closing gates to latch every time. Residential gate repair in Dallas also covers the keypads and remotes the family uses every day. We explain what we found and the cost of fixing it before any work starts.',
    ],
    faqs: [
      { q: 'My pedestrian gate in Lakewood no longer closes on its own. Can it be fixed?', a: 'Yes. A self-closing gate stops closing when the post shifts, the hinges wear, or the closer loses tension. We realign the gate, adjust or replace the closer or spring hinges, and fit a latch that catches reliably. Where small children play nearby, we can set the latch high enough to stay out of their reach.' },
      { q: 'What safety features should a residential automatic gate have?', a: 'At least one monitored entrapment protection device, such as photo-eyes or a contact edge, so the gate stops and reverses when something is in its path, as UL 325 requires on current operators. Hinges and rollers should be guarded where fingers could be caught. We test these on every visit and can add sensors to older gates.' },
    ],
  },
  'dallas/automatic-gate-installation': {
    description: 'Automatic gate installation in Dallas, TX: estate swing and slide gates, footings for clay soil, power, access control and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Dallas for estate drives, older neighborhoods and commercial entrances. We plan the gate, operator, footings, power and safety devices together so the entrance works reliably for years.',
    local: [
      'An automatic gate in Dallas has to suit both the property and the ground. Estate drives in Preston Hollow and Devonshire often call for wrought iron swing pairs or estate slide gates with long runs of buried power, while older lots in Kessler Park or Lakewood need a gate scaled to a shorter drive and a street-facing setback. Commercial and multi-family entrances need operators rated for high cycles, plus loops and access control. Underneath all of them is expansive clay, which moves posts and footings unless they are designed for it.',
      'We start with a site survey covering the opening, slope, drainage and power, and confirm what the city and your HOA require before any order is placed. Footings are sized and set deep for the clay, and we plan conduit for power, loops and keypads. The operator is chosen for the gate weight and cycles and installed to UL 325, with photo-eyes and edges. The gate is built to ASTM F2200 with guarded rollers and safe gaps. We finish with a handover of remotes and the manual release.',
    ],
    faqs: [
      { q: 'How do you stop a new gate post from moving in Dallas clay?', a: 'By going deeper and wider. Clay near the surface swells and shrinks the most, so posts and track footings need to reach more stable ground and resist the lift. We size footings to the gate and soil and keep water draining away from them. That is what keeps a new gate aligned through dry summers and wet springs.' },
      { q: 'What does an automatic gate installation include?', a: 'The gate itself or work on your existing one, posts and footings, the operator, power wiring, safety devices, and controls such as remotes, a keypad or an intercom. We set limits and force, test entrapment protection, and show you the manual release. We also confirm what the city and your HOA require and prepare any drawings an HOA asks for.' },
    ],
  },
  'dallas/electric-gate-installation': {
    description: 'Electric gate installation in Dallas, TX: buried power runs, conduit, transformers, surge protection and loops for estate drives and businesses. Call Shield.',
    intro: 'Electric gate installation in Dallas with careful wiring: supply runs, conduit, transformers, loops and surge protection, planned alongside the gate and operator. Good wiring now prevents most of the faults that come later.',
    local: [
      'Dallas properties often put real distance between the power supply and the gate. On the long drives north of Northwest Highway, an estate gate may sit far from the house, and the cable crosses lawn, paving and clay that moves with the seasons. At apartment and commercial entrances near the Dallas North Tollway or Central Expressway, gates draw from building panels and need loops cut into busy pavement. Spring thunderstorms make surge protection a genuine requirement in this city rather than an optional extra.',
      'We size cable for the run so voltage at the operator stays where it should, lay buried runs in conduit with room for future wiring, and seal every splice. Where trenching is impractical, a battery operator with solar or low-voltage charging can be the better choice. Surge protection goes on the supply, loops, keypad and phone leads. We confirm what the city and your HOA require for the electrical work and the installation. The operator meets UL 325 and the gate meets ASTM F2200.',
    ],
    faqs: [
      { q: 'My Dallas gate is far from the house. Do I need to trench power to it?', a: 'Not always. A trench with conduit gives full mains power and suits busy or heavy gates. A battery operator charged by a solar panel avoids the trench and suits lighter use, provided the panel gets full sun. On a long run, cable size matters, so we calculate the voltage drop before choosing either option.' },
      { q: 'Why do you put spare conduit in when installing a gate?', a: 'Because a gate rarely stays as installed. Owners later add a keypad, an intercom, a camera or a second operator, and spare conduit means new wiring can be pulled through without cutting a driveway or lawn. It costs little during installation and saves digging and disruption later on.' },
    ],
  },
  'dallas/sliding-gate-installation': {
    description: 'Sliding gate installation in Dallas, TX: estate and commercial slide gates, cantilever and track designs, clay-soil footings and UL 325 safety. Call Shield.',
    intro: 'Sliding gate installation in Dallas for estate drives, apartment entrances and commercial yards. We plan the run-back space, footings, track or cantilever design and operator together so the gate rolls true.',
    local: [
      'Slide gates suit many Dallas properties: estate drives in Bluffview and Preston Hollow where a swing gate would need too much space, sloped lots where a swing leaf would hit the ground, and commercial and multi-family entrances where a gate cannot swing into traffic. The two key choices are track or cantilever, and the footing. Track gates need a stable, level beam to run on, and Dallas clay can heave or crack a slab. Cantilever gates ride on rollers beside the opening and need run-back space and a strong footing.',
      'We measure the opening, run-back space and slope, then design footings for the clay so the track or roller posts stay level. We choose an operator rated for the gate weight and expected cycles, and on commercial sites, add loops and access control. ASTM F2200 guarding goes on rollers and at the gate end, and the operator is installed to UL 325 with photo-eyes and edges. Sliding gate installation in Dallas starts with confirming what the city and your HOA require.',
    ],
    faqs: [
      { q: 'Will a sliding gate track crack in Dallas clay?', a: 'It can, if it is laid on a thin slab over moving soil. We set the track on a reinforced beam sized for the gate and soil, or recommend a cantilever gate that needs no ground track. Keeping water away from the footing helps too. The goal is a track that stays level across dry and wet seasons.' },
      { q: 'What does a cantilever gate need that a track gate does not?', a: 'Extra length behind the opening for the counterbalance tail, a strong footing for the roller posts, and a stiffer gate frame to carry its own weight. In return it needs no ground track to keep clear, which suits drives with leaf litter or yards with debris. We measure your space to see whether one fits.' },
    ],
  },
  'dallas/swing-gate-installation': {
    description: 'Swing gate installation in Dallas, TX: wrought iron single and double gates, deep footings for clay soil, swing operators and UL 325 safety. Call Shield.',
    intro: 'Swing gate installation in Dallas for wrought iron and steel single and double gates. We plan the swing path, posts, footings and operator so the leaves hang true through every Dallas season.',
    local: [
      'Wrought iron swing gates suit the character of many Dallas neighborhoods, from estate entrances in Preston Hollow and Devonshire to the older streets of Kessler Park and Lakewood. They need room for the leaves to open and a reasonably level drive. Their weakness is the post. A heavy iron leaf hangs off its hinge post like a lever, and Dallas clay swells and shrinks enough to tilt a post set too shallow. That tilt drops the leaf, throws off the latch and loads the operator on every cycle.',
      'We size posts or masonry columns and their footings to the leaf weight and the soil, setting them deep enough to resist movement. We choose an operator for leaf length and weight, then position the arms so the gate clears the drive, walls and landscaping. Photo-eyes and entrapment protection follow UL 325, and the gate is built to ASTM F2200. We confirm what the city and your HOA require on height, style and setback. Swing gate installation in Dallas finishes with a manual release walkthrough.',
    ],
    faqs: [
      { q: 'Can a new swing gate be hung on my existing brick columns in Dallas?', a: 'Sometimes. We check that the columns are plumb, solid and reinforced enough to carry the leaf, and that their footings have not moved in the clay. Older columns may need steel posts set alongside or inside them. We inspect before recommending anything, because a heavy gate on a weak column fails quickly.' },
      { q: 'Double swing gate or single leaf: which is better?', a: 'A double gate needs less swing space per leaf and looks balanced on wide entrances, but needs two operator arms and careful leaf timing. A single leaf is simpler to automate, but needs more clear space to swing. We measure the opening and swing area, and recommend what fits your drive and how you use it.' },
    ],
  },
  'dallas/gate-opener-installation': {
    description: 'Gate opener installation in Dallas, TX: swing and slide openers, battery backup, remotes, keypads and safety sensors on existing iron gates. Call Shield.',
    intro: 'Gate opener installation in Dallas for existing manual gates and worn-out openers. We match the opener to the gate’s weight and use, then set up remotes, keypads, limits and safety sensors.',
    local: [
      'Many Dallas homes have handsome wrought iron gates that are still opened by hand, or openers that have run for twenty years and are ready for replacement. On an estate swing pair in Devonshire or Bluffview, the opener needs to handle long, heavy leaves. On a slide gate it needs enough power for the gate’s weight. Commercial entrances near the core need openers rated for hundreds of cycles a day. The first job is always checking whether the gate itself moves freely, because an opener will not cure a gate that binds.',
      'We check the hinges or rollers and alignment, and fix the gate first where needed. Then we select the opener for weight, leaf length and expected cycles, choose AC or DC with battery backup, and plan the power run. We install and program remotes, keypad and receiver, set limits and force, and fit photo-eyes to UL 325. Gate opener installation in Dallas ends with showing you the manual release and how to add remotes, and we confirm what the city and your HOA require.',
    ],
    faqs: [
      { q: 'Can you add an opener to my wrought iron gate in Dallas?', a: 'Usually. We check the gate’s weight, length, hinges and frame. Wrought iron gates can be heavy, so we size the opener with margin and check that the hinge posts have not shifted in the clay. If the gate drags or the frame is weak, we fix that first so the new opener lasts.' },
      { q: 'What size opener does my gate need?', a: 'That depends on the gate’s weight and length, how often it runs, and wind load from any solid panels. A long leaf needs more torque than its weight alone suggests. We weigh up those factors, and for busy commercial gates the duty cycle rating matters as much as the power. We recommend an opener with comfortable margin.' },
    ],
  },
}
export default copy
