const copy: Record<string, { description: string; intro: string; local: string[]; faqs: { q: string; a: string }[] }> = {
  'colleyville/viking': {
    description: 'Viking gate repair in Colleyville, TX for heavy iron swing and slide gates on wide lots: batteries, limits, boards and hinge load. Call Shield.',
    intro: 'Viking gate repair in Colleyville for the DC operators hung on long iron leaves and estate slide gates across the 76034 lots. We check the gate and the batteries before we judge the operator.',
    local: [
      'Colleyville frontages are wide, and a Viking is often the operator someone chose because the leaf was too long or too heavy for anything lighter. That suits the T-21 and R-6 swing units well, but a long single leaf also magnifies every bit of hinge wear and every shift of a post in the clay. The Viking feels that extra effort, flags it as an obstruction or an overload, and the owner reads it as a failing operator.',
      'In practice we start with the gate by hand, then load test the batteries and the charger, then look at limits and the board. Viking gate opener repair on these properties is usually batteries, a limit reset or a board, not a new unit. Older K-2 slide operators can lose their limits after a full power loss, which we relearn on site. Gearbox wear on a very heavy leaf is where replacement comes up. That pattern fits the long frontages off Glade Road and around Saddlebrook.',
    ],
    faqs: [
      { q: 'Does Colleyville clay affect a Viking swing gate?', a: 'It can. Clay soil swells after rain and shrinks in summer, and a post that moves even slightly changes how a long leaf hangs. The Viking then works harder at the same point in every cycle and may stop or reverse. We check the post and hinges, correct the hang, and then reset the force and limits so the operator is not compensating for a mechanical fault.' },
      { q: 'My Viking gate runs slowly at the end of the day. Is it the motor?', a: 'Usually it is the batteries or the charging circuit. A Viking moves the gate on DC power from its batteries, and tired batteries hold up for a few cycles then sag under load. We test them under load and check the charger output first. If both are healthy, we move on to the board and the drive.' },
    ],
  },
  'colleyville/doorking': {
    description: 'DoorKing gate repair in Colleyville, TX: swing and slide operators, telephone entry panels, keypads and loops on large-lot estate drives. Call Shield.',
    intro: 'DoorKing gate repair in Colleyville for the operators and entry panels on private estate drives and small gated streets. We test the gate operator and the access side together, since either can stop the gate.',
    local: [
      'Colleyville homes were built over four decades, so a DoorKing system here might be a current 6050 swing operator or a much older unit paired with an entry keypad that several owners have reprogrammed. The wide frontages also mean longer wire runs from the house or the entry panel to the operator, and long runs through clay soil are where moisture, nicks and rodent damage tend to show up first.',
      'When a DoorKing gate will not open, we start by checking whether the operator runs on a manual command. If it does, the fault sits in the keypad, the telephone entry board, the directory programming or the loop. If it does not, we move to the operator board, limits and the gearbox. For entry systems such as the 1812 and 1835 we confirm part availability before quoting, whether the gate is on a drive off Hall-Johnson Road or in Highland Meadows.',
    ],
    faqs: [
      { q: 'Can an older DoorKing operator on a Colleyville estate still be repaired?', a: 'Often it can. Colleyville has gates from several generations, and some older DoorKing units still take available boards and parts. We check part availability before quoting so there are no surprises on the day. If the operator truly cannot be supported, we explain the replacement options and whether the existing entry panel can stay.' },
      { q: 'Our DoorKing keypad beeps but the gate does not move. What is wrong?', a: 'A keypad that accepts a code but does not open the gate points to the link between the keypad and the operator: the wiring, the relay output, or the operator input. We test each in turn, starting at the keypad output, so the repair goes to the part that actually failed rather than the most expensive one.' },
    ],
  },
  'colleyville/faac': {
    description: 'FAAC gate repair in Colleyville, TX: hydraulic swing arms, seal kits, pump pressure and in-ground 770 units on wide estate iron gates. Call Shield.',
    intro: 'FAAC gate repair in Colleyville for hydraulic swing operators on formal iron gates and long estate leaves. Hydraulics are serviceable, and we repair seals, pressure and boards rather than defaulting to replacement.',
    local: [
      'A long wrought iron leaf on a Colleyville estate puts real demand on any operator, and a FAAC hydraulic arm such as the 400 or 422 handles it with pressure rather than gears. When the gate begins to creep, stop short or drift open, the cause is usually fluid lost through a worn seal or pump pressure that needs resetting. A post that has moved in the clay adds load, and the hydraulics show it as slow travel.',
      'We check the hang of the gate first, then the fluid level, seals, release valve and pressure, then the 455 D board and limit settings. Seal kits and pressure work are on-site repairs, and replacement only makes sense when the ram or housing is physically damaged. In-ground 770 units are the other concern here: clay drains slowly, so we clear the foundation box drain and look for water ingress on properties around Woodland Hills and along Precinct Line Road.',
    ],
    faqs: [
      { q: 'Does the clay soil in Colleyville cause problems for an in-ground FAAC operator?', a: 'It can. An in-ground FAAC sits in a box beneath the hinge, and clay soil holds water after heavy rain. If the box drain clogs, water collects around the operator and shortens its life. During service we clear the drain, check the seals and the cover, and look for signs that water has already reached the unit.' },
      { q: 'Someone told me my FAAC is not repairable. Should I get a second opinion?', a: 'It is worth one. Many technicians do not carry hydraulic parts or training, so a FAAC gets written off when it needs seals, fluid or a pressure adjustment. Ask which component was tested and found faulty. We test the hydraulics properly and replace the operator only when the ram or housing itself is damaged.' },
    ],
  },
  'colleyville/us-automatic': {
    description: 'US Automatic gate repair in Colleyville, TX: Patriot and Ranger battery operators, solar panels, AC chargers and limits on wide lots. Call Shield.',
    intro: 'US Automatic gate repair in Colleyville for Patriot and Ranger operators on long driveway gates. Every one of these runs from its battery, so we test the battery and charging side before anything else.',
    local: [
      'On a wide Colleyville lot the gate can sit a long way from the house, and a US Automatic operator suits that because it moves the gate from a 12-volt battery recharged by either a solar panel or a low-voltage AC charger. The catch is that a tree canopy that has grown up since the install can shade a panel that once had full sun, and a battery that is never fully topped up gives slow, stalling travel that looks like a motor fault.',
      'Our order is battery under load, then panel output or charger and charge wiring, then the board and limits. A battery swap or a cleaned and re-aimed panel is the usual fix. Patriot units can show limit drift, and Ranger boards hold their own limit settings, both adjustable on site. Arm and linkage wear on a long leaf is the mechanical item we check, especially on properties off Hall-Johnson Road and in Brook Meadows.',
    ],
    faqs: [
      { q: 'Do Colleyville trees affect a solar US Automatic gate?', a: 'They can, and gradually enough that nobody notices. As trees grow, a panel that charged well when it was installed may spend more of the day in shade. The battery then starts each day short, and the gate slows or stops later in the day. We measure panel output on site and, where needed, move or re-aim the panel.' },
      { q: 'Is a US Automatic Ranger worth repairing?', a: 'In most cases, yes. The usual faults on these units are batteries, charging and board settings, all of which are repairable. We check the arm and the linkage for wear as well. Replacement comes up when the drive itself is worn out or the control board has been badly damaged by a surge.' },
    ],
  },
  'colleyville/apollo': {
    description: 'Apollo gate repair in Colleyville, TX: 1550 and 1650 swing openers, batteries, solar panels and boards on large-lot driveway gates. Call Shield.',
    intro: 'Apollo gate repair in Colleyville for the 12-volt swing and slide openers on driveway gates across these large lots. Most Apollo faults start on the power side, so we measure that first.',
    local: [
      'An Apollo 1550 single or 1650 dual swing opener is a 12-volt system, typically run from a battery with a small solar panel or a charger. On Colleyville lots, where the gate may be well down the drive, that keeps power simple, but it also means the battery decides how the gate behaves. A gate that moves a few feet and stops, or reverses after closing, is very often a battery that cannot hold voltage under load. Long single leaves add to the strain.',
      'We load test the battery, check panel output or the charger, then look at the control board and limits. These openers have used several boards over the years, including the 833/834, 835/836 and 1050, so we identify the exact one before ordering. Where the actuator is worn, the Nice Apollo TITAN is described by distributors as a bolt-in replacement on the same mounting geometry. Whether the gate is off Glade Road or in Covington, the order is the same.',
    ],
    faqs: [
      { q: 'My Apollo gate in Colleyville stops a few feet into its travel. Why?', a: 'On this 12-volt system that usually starts with the battery. When voltage sags under load the board reads it as an obstruction and stops or reverses. A hinge that binds on a long leaf, or a post moved by clay, adds load and makes it worse. We test the battery under load and check the gate swings freely before touching the board.' },
      { q: 'Can you replace the solar panel on an Apollo opener?', a: 'Yes. We size the panel and battery to the gate and to the sun the site actually gets, rather than copying what was there. A panel that was marginal at install will be marginal again, and on a long leaf the operator draws more current per cycle, so the charging side needs to keep up.' },
    ],
  },
  'colleyville/ramset': {
    description: 'Ramset gate repair in Colleyville, TX: RAM 100 slide operators, limit switches, boards, chains and thermal cutout on residential slide gates. Call Shield.',
    intro: 'Ramset gate repair in Colleyville for RAM series slide and swing operators on residential gates. These units are often misdiagnosed, and we work out the real fault before suggesting any replacement.',
    local: [
      'Residential slide gates are one of the gate types found on Colleyville lots, and a Ramset RAM 100 is the sort of chain-driven slide operator fitted to them. Because the town was built over four decades, the Ramset on one property may be fairly new while the one next door has been running far longer. Older AC operators in general bring capacitor and thermal cutout faults that newer DC equipment does not.',
      'We start with the gate itself: track, rollers and chain tension, since a slide gate that drags on a worn wheel makes the operator overheat and cut out. Then we test limit switches, the board and its relays, and the capacitor where fitted. Chain, sprocket and limit repairs are routine. On a much older unit we check parts availability before quoting, and if parts are gone we say so. That applies whether the gate is in Whittier Heights or off SH 26 Colleyville Blvd.',
    ],
    faqs: [
      { q: 'My Ramset slide gate in Colleyville stops halfway on hot afternoons. What causes that?', a: 'Heat plus effort usually trips the thermal cutout. A slide gate on worn rollers or a dirty track makes the motor work harder, and on a hot Texas afternoon it overheats and rests until it cools. We fix the drag at the track and rollers first, then check the motor and capacitor, so the cutout stops tripping.' },
      { q: 'Do you repair older Ramset operators or only new ones?', a: 'Both. Older Ramset units often need only a limit switch, relay or chain, and we check whether parts for your exact model are still available before quoting. If a particular unit can no longer be supported, we explain the options, including fitting a current operator to the existing gate and track.' },
    ],
  },
  'colleyville/automatic-gate-repair': {
    description: 'Automatic gate repair in Colleyville, TX for estate swing, iron and slide gates on wide lots, from 1980s AC operators to current DC units. Call Shield.',
    intro: 'Automatic gate repair in Colleyville covering every generation of operator on these large lots. We check the gate, the safety devices and the electronics in that order, and confirm parts exist before quoting.',
    local: [
      'Colleyville chose large lots in the early 1980s and kept building on them for forty years, so automatic gates here range from AC operators fitted decades ago to recent DC units with battery backup. Most are wrought iron or estate swing gates, with some residential slide gates in the mix. The long single leaves that suit a wide frontage are hard on hinges and limits, and clay soil keeps moving the posts they hang from.',
      'Our diagnosis order stays the same: move the gate by hand, check posts and hinges, test photo eyes and edges, then the board, limits and drive. On an older AC operator the capacitor is a frequent culprit and an inexpensive part. Where a unit is old enough that parts may be gone, we check before quoting. Colleyville automatic gate repair along Hall-Johnson Road or in Saddlebrook follows the same steps.',
    ],
    faqs: [
      { q: 'Why does my automatic gate in Colleyville stop at a different spot each season?', a: 'That is usually limit drift combined with post movement. Clay soil swells in wet months and shrinks in dry ones, so the post shifts slightly and the leaf no longer reaches its set positions the same way. On a long single leaf the effect is magnified. We stabilize the hang where possible and then reset the limits.' },
      { q: 'Can you tell me whether my old operator is worth fixing before you start?', a: 'Yes. We identify the operator, confirm whether the failed part is still available, and give you a repair or replace recommendation before any work begins. On older operators the deciding question is parts, not age alone, and a sound mechanism with a new board can keep running for years.' },
    ],
  },
  'colleyville/electric-gate-repair': {
    description: 'Electric gate repair in Colleyville, TX: dead gates, long wire runs, transformers, surge damaged boards and loop detectors on large-lot drives. Call Shield.',
    intro: 'Electric gate repair in Colleyville for gates that are dead, intermittent or tripping. On wide lots the power path is long, and we trace it from the breaker to the operator before replacing anything.',
    local: [
      'Large Colleyville lots often put the gate well away from the house, which means a long low-voltage or mains run buried in clay. Clay that swells and shrinks works on conduit joints and splices, and moisture finds the weak point. Add older AC operators with tired capacitors, and spring storms that send surges through boards and loop detectors, and electrical faults here have several likely sources.',
      'We begin at the breaker and the incoming supply, then the transformer or power supply, fuses, and the voltage reaching the operator under load. After that come the board, the loop detector and the loop itself, which can crack where a driveway has moved. Splices are remade in sealed connectors. Whether the run comes off Precinct Line Road or through a back lot in Woodland Hills, we test each section rather than guessing.',
    ],
    faqs: [
      { q: 'Our Colleyville gate died after a thunderstorm. What usually needs replacing?', a: 'Often a single component took the surge: the control board, a fuse, the transformer or the loop detector. We test each one before ordering anything, because replacing the whole operator for one damaged board is a common and expensive mistake. Where storms are a recurring problem, we can talk about surge protection on the supply and the loop.' },
      { q: 'The gate works some days and not others. Is that electrical?', a: 'Intermittent operation is very often a loose or corroded connection, a failing transformer, or a splice that lets in water after rain. On a long buried run the fault can sit anywhere along it. We check voltage at each point under load and note the conditions when it fails, which usually narrows it down quickly.' },
    ],
  },
  'colleyville/driveway-gate-repair': {
    description: 'Driveway gate repair in Colleyville, TX for long iron and estate swing leaves on wide frontages: sagging hinges, posts, limits and old operators. Call Shield.',
    intro: 'Driveway gate repair in Colleyville for private homes with wide frontages and long leaves. We look at the gate, hinges and posts as carefully as the operator, because on these drives the iron usually fails first.',
    local: [
      'A Colleyville driveway gate is often a single long leaf or a pair of estate swing gates across a wide frontage, hung on posts set in clay. That length works against the hardware: every bit of hinge wear shows at the latch end as sag, and a post that leans a fraction changes where the leaf stops. Homes built across four decades also mean the operator on one drive may be twice the age of the one next door.',
      'We start by releasing the operator and swinging the gate by hand. If it drags, binds or drops, we fix the hinge, the post or the frame before we touch the electronics. Then we check the photo eyes, limits, board and drive. Repair versus replace on an older operator comes down to parts, which we confirm first. Driveway gate repair in Colleyville looks much the same in Highland Meadows as it does off Glade Road.',
    ],
    faqs: [
      { q: 'My driveway gate in Colleyville scrapes the concrete at the end of its swing. Can that be fixed?', a: 'Usually, without replacing the gate. Scraping at the far end means the leaf has dropped, either from worn hinges or a post that has leaned in the clay. We re-hang the leaf, adjust or replace the hinges, and where the post has moved we discuss resetting it. Then we reset the limits so the operator matches.' },
      { q: 'Should I replace the operator when I replace an old driveway gate?', a: 'Not automatically. If the existing operator is sound, suited to the weight and length of the new gate, and parts are still available, it can often stay. If the new gate is heavier or longer, the operator may be undersized. We check the specifications against the new gate before recommending either way.' },
    ],
  },
  'colleyville/sliding-gate-repair': {
    description: 'Sliding gate repair in Colleyville, TX: tracks, rollers, chains, limits and slide operators on residential slide gates across large lots. Call Shield.',
    intro: 'Sliding gate repair in Colleyville for the residential slide gates found among the town’s swing and iron gates. Most slide faults begin at the track and rollers, so that is where we start.',
    local: [
      'Alongside its iron swing gates, Colleyville has residential slide gates, usually chosen where a drive is too short or sloped for a leaf to swing. They bring their own wear points: V-groove wheels, guide rollers at the top, a track that has to stay level, and on chain-driven operators a chain and sprockets. Clay movement can tilt a track section or shift the receiver post so the gate no longer meets its stop cleanly.',
      'Our order: disengage the operator and push the gate by hand, inspect the track, wheels and guide rollers, check chain tension and sprockets, then test limits, photo eyes and the board. Flat-spotted wheels and loose chains are cheap fixes that save a gearbox. On an older slide operator we confirm parts before quoting. Colleyville sliding gate repair off SH 26 Colleyville Blvd or in Brook Meadows follows that sequence.',
    ],
    faqs: [
      { q: 'Does clay soil affect a sliding gate in Colleyville?', a: 'Yes, in a specific way. A slide gate needs its track level and its receiver and guide posts in line. When the clay heaves or shrinks, a track section can tilt or a post can move, and the gate starts to bind at the same point each time. We check levels and alignment and correct the track or post before adjusting the operator.' },
      { q: 'My slide gate makes a grinding noise. Is the operator failing?', a: 'Not necessarily. Grinding usually comes from worn wheels, a dry or stretched chain, a worn sprocket or debris in the track. Those are mechanical items we can replace on site. Left alone, the extra load can eventually wear the gearbox, which is a far bigger repair, so it is worth looking at early.' },
    ],
  },
  'colleyville/swing-gate-repair': {
    description: 'Swing gate repair in Colleyville, TX: hinge sag, post movement, limit drift and arm faults on long wrought iron and estate swing leaves. Call Shield.',
    intro: 'Swing gate repair in Colleyville for wrought iron and estate swing gates, single and paired. Long leaves on clay-set posts bring their own faults, and we deal with the hang before the operator.',
    local: [
      'Wrought iron and estate swing gates make up much of the gate stock on Colleyville’s large lots. The wide frontages encourage long single leaves, and a long leaf acts as a lever on its top hinge. Over time the hinge wears, the leaf drops at the latch end, and the operator arm has to lift and push it through every cycle. Clay soil that moves the hinge post adds a seasonal twist, so limits that were right in spring are off by late summer.',
      'We check the gate by hand, then the hinges, the post and the frame, then the operator arm, brackets and pivot points, then limits, force settings, photo eyes and the board. Hinge replacement and re-hanging are often the real repair. On older AC swing operators the capacitor is worth testing early. Swing gate repair in Colleyville around Covington or along Hall-Johnson Road begins with that inspection.',
    ],
    faqs: [
      { q: 'Why do my paired swing gates in Colleyville no longer meet in the middle?', a: 'Usually one leaf has dropped or one post has moved. Clay soil shifts posts slightly through the seasons, and worn hinges let a leaf sag. Either way the leaves arrive at different heights or positions. We correct the hang on each leaf, check the posts, then reset the limits and the leaf delay so they close together.' },
      { q: 'Is a swing gate operator arm repairable if it is bent?', a: 'Often, yes. A bent arm usually comes from the gate being forced, a vehicle contact or a gate that binds. We replace the arm or bracket where needed, then find out why it bent so it does not happen again. If the operator inside is undamaged, there is no reason to replace the whole unit.' },
    ],
  },
  'colleyville/gate-opener-repair': {
    description: 'Gate opener repair in Colleyville, TX: remotes, keypads, receivers, control boards and limit settings on swing and slide openers of every age. Call Shield.',
    intro: 'Gate opener repair in Colleyville for the electronics that decide when and how far a gate moves: remotes, keypads, receivers, control boards and limits. We find the failed part rather than replacing the opener.',
    local: [
      'Because Colleyville houses span four decades, the openers behind their gates do too, and that shows most in the electronics. An older opener may use a receiver and remote format that is no longer sold, while a newer one may have lost its programming after a surge. Long single leaves on wide lots also make limit drift a familiar complaint, as the leaf stops short or overshoots after the post moves.',
      'We test from the input side inward: the remote and its battery, the receiver, the keypad and its wiring, then the board, limits and safety inputs. Where an old receiver is obsolete, a current universal receiver can often be wired to the existing board so the opener stays. Boards are replaced only after testing. Colleyville gate opener repair in Whittier Heights or near the Colleyville Nature Center follows the same order.',
    ],
    faqs: [
      { q: 'Our remotes stopped working after we moved into an older Colleyville home. Can they be replaced?', a: 'Yes. Older receivers sometimes use remote formats that are hard to find, so we check what the receiver accepts. If matching remotes are not available, we can fit a current receiver to the existing opener and program new remotes to it, which keeps the opener itself in service and avoids replacing anything mechanical.' },
      { q: 'The keypad lights up but the gate does not respond. What should I check?', a: 'First confirm the gate opens from a remote or the manual button. If it does, the problem is the keypad, its code memory or the wiring back to the opener. If nothing opens it, the fault is in the opener board or power. We test both paths so you know which part has actually failed.' },
    ],
  },
  'colleyville/gate-motor-repair': {
    description: 'Gate motor repair in Colleyville, TX: capacitors on older AC operators, gearboxes, thermal cutout and motor wear on long swing and slide gates. Call Shield.',
    intro: 'Gate motor repair in Colleyville for the motor, capacitor, gearbox and thermal protection inside the operator. Many motors here are fine; the load from a hard-to-move gate is what wears them out.',
    local: [
      'Colleyville has its share of older AC gate operators, and on those a failed start or run capacitor is a frequent fault, leaving a motor that hums but will not turn. Newer DC units fail differently, usually at the gearbox or the motor brushes. Both suffer when a long leaf is hanging badly or a slide gate is dragging, because the motor runs hot and the thermal cutout trips partway through the cycle.',
      'We check the gate moves freely first, since a motor fighting a dropped leaf will fail again after any repair. Then we test the capacitor, the motor windings and current draw, the thermal cutout and the gearbox for wear or stripped teeth. A capacitor is a small repair, and a worn gearbox may be replaceable on its own. For a motor from the 1970s or 1980s we confirm parts before quoting, whether the gate is off Precinct Line Road or in Saddlebrook.',
    ],
    faqs: [
      { q: 'My Colleyville gate motor hums but the gate does not move. What is wrong?', a: 'On an older AC operator that is the classic sign of a failed capacitor. The motor gets power but cannot start turning. It can also mean a stripped gear or a gate that is jammed. We test the capacitor first, then check the gearbox and the gate itself. A capacitor is a quick part to replace.' },
      { q: 'Why does my gate motor stop after a few cycles in summer?', a: 'That is usually the thermal cutout protecting the motor from overheating. Heat, a gate that is hard to move, or a worn gearbox all make the motor draw more current. We check the gate, the gearbox and the motor draw, fix the cause, and confirm the cutout no longer trips during normal use.' },
    ],
  },
  'colleyville/emergency-gate-repair': {
    description: 'Emergency gate repair in Colleyville, TX: gates stuck open or shut, vehicle damage and storm faults on estate and iron gates. Call Shield 24/7.',
    intro: 'Emergency gate repair in Colleyville for gates stuck open, stuck shut, hit by a vehicle or knocked out by a storm. Call us 24/7 and we will make the gate secure or usable, then plan the full repair.',
    local: [
      'On a wide Colleyville lot a gate stuck shut can mean a car trapped at the end of a long drive, and a gate stuck open leaves a large property unsecured. The usual emergencies here are storm surges that kill a board, a vehicle striking a long leaf or its post, and older operators that fail outright. Clay soil can also shift a post enough after heavy rain that a gate binds and stops partway.',
      'Our first goal is to make the gate safe and workable, which can mean releasing the operator for manual use or securing a damaged leaf so it cannot swing or fall. Then we diagnose properly and quote the full repair, including part availability on older units. Emergency gate repair in Colleyville follows that order whether the gate is on a drive off Glade Road or inside Highland Meadows.',
    ],
    faqs: [
      { q: 'A storm knocked out our gate in Colleyville and it is stuck closed. What can we do now?', a: 'Most operators have a manual release, usually a key or lever on the operator, which lets you open the gate by hand. If you cannot find it or it will not release, call us. We will free the gate, check for surge damage to the board, fuses and loop detector, and get it working again or secured until parts arrive.' },
      { q: 'A car hit our gate. Should we keep using it?', a: 'No, not until it has been checked. Impact can bend the leaf, crack welds, damage the hinges or post, and knock the operator out of alignment, and a damaged gate can fall or move unpredictably. Disconnect the operator if you can and keep people clear. We assess the gate, post and operator and tell you what can be repaired.' },
    ],
  },
  'colleyville/commercial-gate-repair': {
    description: 'Commercial gate repair in Colleyville, TX for HOA entrances, shared private drives and business gates: access control, loops and operators. Call Shield.',
    intro: 'Commercial gate repair in Colleyville for HOA entrances, shared drives and business properties. We service the operator and the access control together and provide written quotes for boards and managers.',
    local: [
      'Colleyville is largely a town of single-family homes on large lots, so commercial gate work here is a smaller and more varied mix: a shared entrance serving several houses, an HOA street gate, or a business gate on a main road. Those gates run more cycles than a single driveway and usually depend on keypads, telephone entry or card readers, so a fault can sit in the access system as easily as in the operator.',
      'We test the operator on a manual command first. If it runs, we move to the entry panel, reader, keypad programming and the loop detectors that sense vehicles. If not, we work through power, board, limits and drive. For older equipment we check part availability before quoting. Written quotes suit HOA boards and property managers, whether the gate serves a neighborhood street or a property on SH 26 Colleyville Blvd.',
    ],
    faqs: [
      { q: 'Our shared entrance gate in Colleyville serves several homes. Who should arrange repairs?', a: 'Whoever manages the shared agreement or HOA, but we are happy to work with whoever calls. We give a written quote that explains the fault, the part and the options, which makes it easier for several owners or a board to agree. Shared gates run more cycles, so we also note wear parts likely to need attention soon.' },
      { q: 'Can you repair the access control as well as the gate operator?', a: 'Yes. Keypads, telephone entry panels, card readers, receivers and loop detectors are all part of the same call. Diagnosing both together matters, because a gate that will not open is frequently an access fault rather than an operator fault, and one visit can cover both sides of the system.' },
    ],
  },
  'colleyville/residential-gate-repair': {
    description: 'Residential gate repair in Colleyville, TX: driveway, side and pedestrian gates, safety sensors, latches and openers for families on large lots. Call Shield.',
    intro: 'Residential gate repair in Colleyville for homeowners: driveway gates, side yard and pedestrian gates, openers and the safety devices that protect children and pets. We fix the gate and check it is safe.',
    local: [
      'Large Colleyville lots usually mean more than one gate: an automated driveway gate, plus side yard and pedestrian gates in the same wrought iron. Pedestrian and side gates sag on worn hinges just as driveway leaves do, and a self-closing latch that no longer catches can let a dog or a small child out. Clay soil moves the posts of all of them, not only the large ones.',
      'On automated gates we test photo eyes, edges and reversing behavior, because the safety system matters most where children and pets are around. Then we check hinges, latches and closers on every gate we are asked to look at, re-hang leaves that have dropped, and repair the opener if needed. Residential gate repair in Colleyville is the same careful job in Brook Meadows as on a lot off Hall-Johnson Road.',
    ],
    faqs: [
      { q: 'Our side gate in Colleyville no longer latches on its own. Can it be fixed?', a: 'Usually. A gate that will not latch has typically dropped on its hinges or moved with its post in the clay, so the latch no longer lines up. We re-hang the gate, adjust or replace the hinges and closer, and realign the latch. For homes with pools or pets, a reliable self-closing latch is worth getting right.' },
      { q: 'How do I know my automatic gate is safe for my kids?', a: 'Test that it reverses when something is in its path, using an object rather than a person, and that the photo eyes stop it closing when the beam is broken. If it does not reverse or stop, stop using it automatically and call us. We check every safety device and the force setting, and replace any that fail.' },
    ],
  },
  'colleyville/automatic-gate-installation': {
    description: 'Automatic gate installation in Colleyville, TX for wide frontages: gate and operator sizing, footings in clay, power runs and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Colleyville, planned around the long frontages and clay soil of the town’s large lots. We size the gate and operator together and build in the safety devices from the start.',
    local: [
      'A new automatic gate in Colleyville usually crosses a wide frontage, and that drives the design. A long single leaf is simple to look at but heavy on its hinges and operator, while a pair of leaves or a slide gate can be the better answer depending on slope and space. The gate may also sit far from the house, which shapes whether power comes by trench or by a solar panel and battery.',
      'We plan the layout, confirm what the city and your HOA require, and set footings deep enough for clay that swells and shrinks. Then we size the operator to the gate weight and length, run power, and fit photo eyes and edges to UL 325, with the gate itself built to ASTM F2200. Whether the lot is off Glade Road or in Woodland Hills, the plan is written down before any digging.',
    ],
    faqs: [
      { q: 'Do gate posts need special footings in Colleyville clay?', a: 'They need footings designed for movement. Clay soil swells when wet and shrinks when dry, and a shallow post can lean over a few seasons, especially under a long leaf. We set posts in concrete to a depth and width suited to the gate, so the hinge line stays true and the operator limits stay where we set them.' },
      { q: 'What does an automatic gate installation include?', a: 'The gate, posts and footings, the operator sized to the gate, power or a solar charging system, safety devices such as photo eyes and edges to UL 325, and access controls such as remotes or a keypad. We set limits and force, test reversing, and show you how to use the manual release before we leave.' },
    ],
  },
  'colleyville/electric-gate-installation': {
    description: 'Electric gate installation in Colleyville, TX: power planning for long drives, trenching, transformers, surge protection and safety wiring. Call Shield.',
    intro: 'Electric gate installation in Colleyville with the power side planned properly: supply, cable runs, transformers, surge protection and the safety wiring an electric gate needs to run reliably.',
    local: [
      'Colleyville lots are wide and some are deep, so the electrical question on a new gate is often distance. A long run from the house to the gate needs cable sized for voltage drop, conduit that will tolerate clay movement, and sealed junctions. Spring storms argue for surge protection on the supply and on any loop detectors. On a very long drive, solar charging can be worth comparing with a trench.',
      'We confirm what the city and your HOA require, then plan the route, the supply point and the operator location together. Cable is run in conduit, splices are sealed, and the transformer or power supply is mounted where it can be serviced. We wire photo eyes and edges to meet UL 325 and test every safety input. A gate off Precinct Line Road or in Saddlebrook gets the same written plan.',
    ],
    faqs: [
      { q: 'Is solar a good alternative to running power to a gate in Colleyville?', a: 'It can be, on a long drive with good sun. A solar panel charging a battery avoids trenching, but it depends on the panel getting enough light year round, and mature trees can shade it. We look at the site, the gate size and expected use, and compare solar with a buried supply before recommending either.' },
      { q: 'Do I need an electrician as well as a gate company?', a: 'That depends on whether a new circuit is needed at the house and on what the city requires. We plan the supply with you, handle the gate side wiring, transformers and safety devices, and where a licensed electrician is needed for the house connection we say so at the planning stage, not on installation day.' },
    ],
  },
  'colleyville/sliding-gate-installation': {
    description: 'Sliding gate installation in Colleyville, TX: track or cantilever layout, clay-proof footings, operator sizing and UL 325 safety for large lots. Call Shield.',
    intro: 'Sliding gate installation in Colleyville for drives where a swing gate does not fit, such as short or sloped approaches. We plan the track, footings and operator together so the gate runs level for years.',
    local: [
      'Swing gates suit many Colleyville drives, but a slide gate earns its place where the drive slopes up from the road, where a leaf would swing into parked cars, or where the opening is very wide. It needs clear space alongside the opening to travel into, and on a large lot that space usually exists. The challenge is clay: a track or cantilever support has to stay level while the ground moves.',
      'We confirm what the city and your HOA require, then choose between a ground track and a cantilever design based on the drive surface and slope. Footings for posts and supports are sized for clay movement. The operator is matched to gate weight, and we fit photo eyes, edges and guards to UL 325, with the gate built to ASTM F2200. That applies equally off SH 26 Colleyville Blvd or in Whittier Heights.',
    ],
    faqs: [
      { q: 'Should I choose a cantilever or a track slide gate in Colleyville?', a: 'A cantilever gate rides on rollers mounted on posts and never touches the ground across the opening, so it is less affected by a track lifting or settling in clay. It needs extra length behind the opening. A track gate is simpler but needs a level, stable rail. We look at your drive and space and recommend one.' },
      { q: 'How much room does a sliding gate need beside the drive?', a: 'At least the width of the opening, plus extra for the counterbalance section of a cantilever gate. That space has to be clear of trees, walls and slopes. We measure on site and show you where the gate will travel and where the operator will sit before anything is ordered.' },
    ],
  },
  'colleyville/swing-gate-installation': {
    description: 'Swing gate installation in Colleyville, TX: single or paired iron leaves, hinge posts set for clay, operator choice and UL 325 safety on wide lots. Call us.',
    intro: 'Swing gate installation in Colleyville for wrought iron and estate gates across wide frontages. We decide between one long leaf and a pair, set the posts for clay, and fit the safety devices.',
    local: [
      'Wrought iron and estate swing gates suit the character of Colleyville’s large lots, and the first decision is whether to cover the opening with one leaf or two. A single long leaf looks clean but puts heavy leverage on the hinge post and operator, which is why limit drift and sag are familiar complaints on older installs here. A pair of shorter leaves spreads that load. The slope of the drive also matters, since leaves need clearance across their full swing.',
      'We confirm what the city and your HOA require, then set hinge posts in deep concrete suited to clay, choose heavy duty hinges, and size an arm or articulated operator to the leaf. Photo eyes and edges are placed to cover the swing area to UL 325, and the gate meets ASTM F2200. Lots off Hall-Johnson Road or in Covington get the same plan.',
    ],
    faqs: [
      { q: 'Will a long single swing gate sag in Colleyville?', a: 'Any long leaf will sag eventually if the post or hinges are not up to it, and clay soil speeds that up when posts are shallow. We reduce that by sizing the posts and footings for the leaf, using heavy duty hinges, and sometimes recommending a pair of leaves instead. A well-set gate holds its line far longer.' },
      { q: 'Which way should my swing gate open?', a: 'Usually inward, toward the property, so it does not swing into the street or over the sidewalk. The slope of the drive can limit that, since a leaf swinging uphill can hit the ground. We check slope, clearance and where vehicles stop, and design the swing so the gate clears everything with room to spare.' },
    ],
  },
  'colleyville/gate-opener-installation': {
    description: 'Gate opener installation in Colleyville, TX: operators sized to long leaves, remotes, keypads, receivers, solar or mains power and UL 325 safety. Call Shield.',
    intro: 'Gate opener installation in Colleyville for existing gates that need automating or an opener that needs replacing. We size the opener to the gate, check the gate first, and set up remotes, keypads and safety.',
    local: [
      'Many Colleyville gates are already in place, and the job is adding an opener or replacing an old one that has no parts left. Before choosing anything we check the gate itself: on a long leaf, worn hinges or a leaning post will shorten the life of any opener. The leaf length and weight then decide between an arm, an articulated or a slide operator, and whether DC with battery backup makes sense.',
      'We confirm what the city and your HOA require, then mount the opener, run power or fit a solar panel and battery, and install the photo eyes and edges UL 325 calls for. Remotes, a keypad or a receiver for existing remotes are programmed, and limits and force are set. A gate in Highland Meadows or off Glade Road gets the same checks before we hand over.',
    ],
    faqs: [
      { q: 'Can an opener be added to my existing iron gate in Colleyville?', a: 'Usually, if the gate is sound. We check the hinges, posts and frame first, because an opener on a gate that binds or sags will strain and fail early. Some gates need hinge work or a post reset first. Then we choose an opener suited to the leaf length and weight and mount it so it does not stress the frame.' },
      { q: 'Should my new gate opener have battery backup?', a: 'We recommend it for most homes. A DC opener with batteries keeps working through a power cut, which matters on a long drive where opening a heavy gate by hand is awkward. The batteries need replacing every few years. We size them to the gate and explain how to check them.' },
    ],
  },
  'frisco/faac': {
    description: 'FAAC gate repair in Frisco, TX: hydraulic swing operators, 844 slide units, seals, pressure and boards on estate and ornamental iron gates. Call Shield.',
    intro: 'FAAC gate repair in Frisco for hydraulic swing arms on estate and ornamental iron gates, and for 844 slide operators. Hydraulics need their own diagnostics, and we repair them on site.',
    local: [
      'FAAC hydraulic arms such as the 402 and 422 are suited to large ornamental gates like those on the custom homes in Starwood and Newman Village, where a smooth, controlled swing matters. Frisco equipment is newer than most of the metroplex, so the hydraulics themselves are often healthy. What tends to wear is the gate: rollers, hinges and alignment on big leaves, which push a hydraulic operator toward its pressure limit and show up as slow or partial travel.',
      'We check the gate swings freely by hand, then test fluid level, seals, release valve and pump pressure, then the board and the encoder or limit settings. A FAAC that drifts open usually needs seals or a valve service, not a new operator. On a FAAC 844 slide unit at a community entrance, cycle count matters, so we look at wear parts and the gate rollers too. Replacement is only for a damaged ram or housing.',
    ],
    faqs: [
      { q: 'Why does my FAAC gate in Frisco open slowly even though it is fairly new?', a: 'On a newer install the hydraulics are often fine and the gate is the problem. A large ornamental leaf with a tight hinge or slight misalignment needs more pressure to move, and the operator slows to match. We check the gate by hand first, then test pressure and fluid. Fixing the hinge can restore normal speed without touching the hydraulics.' },
      { q: 'Do you carry FAAC seal kits and boards?', a: 'We carry seal kits, hydraulic fluid and the common control boards, including the 455 D used on hydraulic swing units. Less common parts may need ordering, and if so we tell you upfront rather than discovering it on the day. Most FAAC hydraulic repairs, meaning seals, fluid and pressure, are done on site.' },
    ],
  },
  'frisco/us-automatic': {
    description: 'US Automatic gate repair in Frisco, TX: Patriot and Ranger operators, solar and AC charging, batteries and limits on estate and HOA gates. Call Shield.',
    intro: 'US Automatic gate repair in Frisco for Patriot and Ranger battery operators, whether charged by a solar panel or a low-voltage AC charger. The battery and its charging come first in our diagnosis.',
    local: [
      'Battery and solar charging problems are among the recurring gate issues in Frisco, and a US Automatic operator depends entirely on that side, since every model moves the gate from its 12-volt battery. In a newer neighborhood, landscaping that has matured since the gate went in can shade a panel, and a battery reaching the end of its life gives a gate that slows through the day or stops partway, which looks like a failing operator.',
      'We test the battery under load, then the panel output or the AC charger and charge wiring, then the control board and limits. A new battery, a panel cleaned and re-aimed, or a charge wire repair covers most of it. Patriot units can drift on their limits, and Ranger 500 and Ranger HD boards hold their own limit settings, both adjustable on site. That applies on estate drives in Starwood or gates near Preston Road.',
    ],
    faqs: [
      { q: 'Does Frisco landscaping really affect a solar gate?', a: 'It can. Trees and shrubs planted when a neighborhood is new grow quickly, and a panel that sat in full sun may be partly shaded a few years later. Less charge each day means a battery that runs low by evening. We measure panel output at the site and, where needed, relocate or re-aim the panel.' },
      { q: 'Should I replace the battery and charger together?', a: 'Not necessarily. We test each one. A battery that will not hold voltage under load needs replacing, while a charger is replaced only if its output is wrong. On AC-charged installs we also check the charge wire. Replacing parts that test fine adds cost and does not make the gate any more reliable.' },
    ],
  },
  'frisco/apollo': {
    description: 'Apollo gate repair in Frisco, TX: 1550 and 1650 swing openers, batteries, solar panels, control boards and actuators on residential gates. Call Shield.',
    intro: 'Apollo gate repair in Frisco for 12-volt swing and slide openers, often solar charged. We check the battery and panel before anything else, because power faults mimic board and motor faults.',
    local: [
      'Battery and solar charging issues are part of the Frisco gate picture, and on an Apollo 1550 or 1650 they are the first thing to rule out. These 12-volt openers run from a battery topped up by a panel or charger, and a weak battery produces the classic Apollo complaint: the gate moves a few feet and stops, or reopens after closing. On a heavier ornamental leaf the extra current draw makes a marginal battery fail sooner.',
      'Our order is battery under load, panel or charger output, connections at the enclosure, then the board and limits. Boards on these openers have changed over the years, from the 833/834 to the 835/836 and the 1050, so we identify yours first. A worn actuator can be replaced with a Nice Apollo TITAN, which distributors describe as bolting onto the older mounting. That applies in Phillips Creek Ranch or on a lot off Legacy Drive.',
    ],
    faqs: [
      { q: 'My Apollo gate in Frisco reopens after it closes. Why?', a: 'That is often the battery or a safety input. A sagging battery can make the board read an obstruction near the end of travel and reverse. A photo eye knocked out of line by landscaping crews, or a loop fault, can do the same. We test the battery first, then each safety input, before looking at the board.' },
      { q: 'Can an old Apollo opener take a new board?', a: 'Often, yes, but the right board depends on the opener version. The 1550 and 1650 have used several boards over the years, and they are not all interchangeable. We identify the version and the board on site, then order the matching part or the supported replacement so the opener keeps its existing actuators.' },
    ],
  },
  'frisco/ramset': {
    description: 'Ramset gate repair in Frisco, TX: RAM 1000 and RAM 100 slide operators, chains, limits, boards and loop detectors on HOA entrances. Call Shield.',
    intro: 'Ramset gate repair in Frisco for slide and swing operators on community entrances and private gates. A Ramset on a busy entrance wears differently from one on a driveway, and we diagnose with that in mind.',
    local: [
      'Frisco HOA entrances were often specified when a subdivision was half built, and many now run far more cycles a day than they were sized for. A Ramset RAM 1000 commercial slide operator or a RAM 100 on one of those gates shows it in the wear parts: chain and sprockets, limit switches under heavy duty, relays on the board, and the thermal cutout tripping at busy times. Replacing the same part every few months is the warning sign.',
      'We look at cycle count against the installed unit, then the gate rollers and track, chain tension and sprockets, limits, board relays and the loop detectors that handle vehicle sensing and safety. Many repairs are straightforward. Where the duty cycle has outgrown the operator, we say so and put a properly specified option in a written quote for the board. That holds whether the community sits near Preston Road or the Sam Rayburn Tollway.',
    ],
    faqs: [
      { q: 'The same part keeps failing on the Ramset at our Frisco HOA gate. Why?', a: 'Usually because the operator is now running well past the duty cycle it was chosen for. As a neighborhood fills, the entrance cycles many more times a day, and wear parts such as chains, limits and relays fail on a much shorter timeline. We compare actual use with the operator rating and tell you whether repair, a service schedule or a replacement makes sense.' },
      { q: 'Can you repair loop detectors on a Ramset slide gate?', a: 'Yes. Loops sense vehicles for opening and for safety, and a failed loop or detector can hold the gate open or stop it closing. We test the detector and the loop wire, check for cracks in the pavement where the loop is cut in, and replace the detector or recut the loop as needed.' },
    ],
  },
  'frisco/automatic-gate-repair': {
    description: 'Automatic gate repair in Frisco, TX for HOA slide entrances, estate swing gates and ornamental iron: high-cycle wear, loops and access faults. Call Shield.',
    intro: 'Automatic gate repair in Frisco for community entrances and estate gates. Frisco equipment is newer than most, so the fault is usually wear from heavy use or a problem with the gate itself.',
    local: [
      'Frisco grew quickly, and much of its gate equipment is recent. That changes what breaks. On HOA community slide entrances the issue is often duty cycle: an operator chosen for a neighborhood that was half built now runs for a full one. On custom estate gates in Starwood and Newman Village the operator is often healthy, while rollers, hinges or alignment on a large ornamental gate make it work much harder than it should.',
      'We start with the gate by hand, then safety loops and photo eyes, then access control, then the operator board, limits and drive. Safety loop failures and access faults are common reasons a Frisco gate stops, and neither means the operator is bad. When a part keeps failing, we compare cycle count with the operator rating before replacing it again. Frisco automatic gate repair near Legacy Drive works the same way.',
    ],
    faqs: [
      { q: 'Why does our Frisco community gate need repairs so often?', a: 'Most often because use has grown past what the operator was specified for. Entrances get busier as a subdivision fills, and wear parts fail on a shorter timeline. Repeated repairs to the same component are the clue. We count cycles against the operator rating and recommend a repair, a service schedule or a properly sized operator.' },
      { q: 'Can you repair an estate gate without replacing a newer operator?', a: 'Usually. On a newer estate gate the fault is more often mechanical: a roller, a hinge or alignment making the gate heavy to move, which the operator reports as an obstruction. We fix the gate, reset the force and limits, and check the safety devices. The operator stays if it tests healthy.' },
    ],
  },
  'frisco/electric-gate-repair': {
    description: 'Electric gate repair in Frisco, TX: power supplies, wiring, surge damage, transformers, solar charging and safety loops on HOA and estate gates. Call Shield.',
    intro: 'Electric gate repair in Frisco for gates that are dead, tripping or running erratically. We trace the power path and the loops from supply to board, so the right part is replaced the first time.',
    local: [
      'Frisco gates are mostly modern DC operators with battery backup, many with access control on the same supply, and some running on solar. That shifts electrical faults toward charging, loop detectors and low-voltage wiring rather than old motors. Collin County spring storms add surge damage to boards and detectors, and new construction nearby can nick a buried cable or a loop wire long after the gate went in.',
      'We test the incoming supply and transformer, battery voltage under load, charger or solar output and fuses, then the board and each loop detector and loop. Damaged splices are remade in sealed connectors and cut loops are recut. On access controlled gates we check the reader and controller supply as well. Electric gate repair in Frisco follows the same order in Frisco Lakes or at an entrance off the Sam Rayburn Tollway.',
    ],
    faqs: [
      { q: 'Construction work near our Frisco gate started causing faults. Could that be connected?', a: 'Quite possibly. Trenching, landscaping and paving close to a gate can cut or nick buried power cables and loop wires, and the symptoms can be intermittent at first. We test each circuit and loop for continuity and insulation, locate the damage, and repair or replace the affected section.' },
      { q: 'Is surge protection worth adding to a gate?', a: 'On gates that have already taken a surge, usually yes. A surge suppressor on the power supply and on loop and access wiring costs little next to a control board, and Collin County storms are a regular source of damage. We can fit it during the repair so the new board is protected.' },
    ],
  },
  'frisco/driveway-gate-repair': {
    description: 'Driveway gate repair in Frisco, TX for private estate and ornamental iron gates: rollers, hinges, alignment, batteries and safety sensors. Call Shield.',
    intro: 'Driveway gate repair in Frisco for private homes, from large ornamental gates on custom estates to simpler swing and slide gates. On newer gates, the fix is often the hardware rather than the operator.',
    local: [
      'Private driveway gates in Frisco are newer than in much of the metroplex, and the large ornamental gates on custom homes in Starwood and Newman Village are heavy pieces of iron. When one starts to struggle, the cause is usually roller, hinge or alignment wear making the operator push harder, not an operator at the end of its life. Battery backup is another frequent factor, as batteries age well before the operator does.',
      'We release the operator and move the gate by hand, then inspect hinges, rollers and alignment, then test batteries, photo eyes and the board. A hinge adjustment or new rollers often restores smooth running, and limits and force are reset afterwards. Where the gate itself is fine and the operator is failing, we look at repair first. Frisco driveway gate repair in Stonebriar follows the same order.',
    ],
    faqs: [
      { q: 'My driveway gate in Frisco is only a few years old. Why is it struggling?', a: 'On a gate that young it is usually mechanical. A heavy ornamental leaf that has drifted out of alignment, a hinge that has tightened or a roller that is wearing makes the operator work harder, and it may stop or reverse. Batteries can also age early in Texas heat. We test both before touching the operator.' },
      { q: 'Do driveway gate batteries need regular replacement?', a: 'Yes, they are a wear item. Batteries in DC operators lose capacity over a few years, faster in hot weather, and a weak battery shows up as slow travel or failure during a power cut. We test them under load at any service visit and replace them before they leave you with a gate that will not move.' },
    ],
  },
  'frisco/sliding-gate-repair': {
    description: 'Sliding gate repair in Frisco, TX for HOA community slide entrances and private slide gates: rollers, chains, loops and duty-cycle wear. Call Shield.',
    intro: 'Sliding gate repair in Frisco, with a focus on community slide entrances that work far harder than a driveway gate. We look at wear parts, loops and the duty cycle, not only the part that broke.',
    local: [
      'HOA community slide gates are among the main gate types in Frisco’s master-planned neighborhoods, and they take a beating. A gate that opens for every resident, delivery and visitor wears its rollers, chain and sprockets quickly, and the loop detectors that control opening and safety become a frequent cause of stoppages. When a neighborhood fills beyond what the entrance was planned for, those parts fail on a timeline the original installer never expected.',
      'We check the gate by hand, then rollers, track and guide rollers, chain and sprockets, then loops and photo eyes, then the operator and board. We also note the cycle count so the HOA can see whether it is looking at a one-off repair or a service schedule. Sliding gate repair in Frisco runs the same way at an entrance near Preston Road or off the Dallas North Tollway.',
    ],
    faqs: [
      { q: 'Our Frisco community slide gate keeps stopping partway. What usually causes that?', a: 'Most often a safety loop or photo eye detecting something, or a mechanical drag that trips the obstruction sensing in the operator. Worn rollers, a stretched chain or debris on the track all add load. We check the loops and sensors, then the mechanical side, and repair whichever is responsible rather than turning the force up to hide it.' },
      { q: 'How often should a high-use slide gate be serviced?', a: 'That depends on how many cycles it runs, so we base it on the gate rather than a fixed calendar. A busy community entrance benefits from regular checks of rollers, chain, loops and safety devices. We can set out a written schedule for your HOA based on the count and the condition we find.' },
    ],
  },
  'frisco/swing-gate-repair': {
    description: 'Swing gate repair in Frisco, TX for estate swing and ornamental iron gates in Starwood and Newman Village: hinges, alignment, arms and limits. Call Shield.',
    intro: 'Swing gate repair in Frisco for estate and ornamental iron swing gates. On these large newer leaves, the operator is often fine and the hinges or alignment are making it work too hard.',
    local: [
      'Estate swing gates in Frisco tend to be big, decorative and fairly new, especially in custom communities like Starwood and Newman Village. That combination produces a recognizable fault pattern: the operator is healthy, but a hinge has tightened, a leaf has dropped a fraction, or the pair is slightly out of alignment, so the gate needs more force than it should and the operator stops, reverses or runs slowly.',
      'We start with each leaf by hand, checking hinges, the hang and how the leaves meet. Then we inspect the operator arms, brackets and pivots, then photo eyes, edges, limits and the board. Adjusting or replacing hinges and realigning leaves is often the full repair, after which limits and force are reset. Swing gate repair in Frisco is the same process off Legacy Drive as in Newman Village.',
    ],
    faqs: [
      { q: 'Our pair of iron swing gates in Frisco hits each other when closing. What is wrong?', a: 'Usually the leaf delay or the limits are out, or one leaf has dropped so it arrives at a different point. On large ornamental gates a small change at the hinge makes a large difference at the meeting point. We check the hang of each leaf, correct it, then reset the delay and limits so they close in sequence.' },
      { q: 'My swing gate opens fully but will not close. What should I check?', a: 'A gate that opens but refuses to close usually has a safety device reporting an obstruction. Check that nothing is blocking the photo eyes and that they are aligned, since landscaping and sprinklers often knock them. If they look fine, we test the eyes, edges, loops and board to find which input is holding the gate open.' },
    ],
  },
  'frisco/gate-opener-repair': {
    description: 'Gate opener repair in Frisco, TX: remotes, keypads, receivers, access control, boards and limits on HOA entrances and estate gate openers. Call Shield.',
    intro: 'Gate opener repair in Frisco for remotes, keypads, receivers, control boards and limits, plus the access control that tells community gates when to open. We test each input before replacing anything.',
    local: [
      'Access control faults are one of the recurring problems on Frisco gates, and from the outside they look exactly like a broken opener. A community entrance may rely on a keypad, a telephone entry panel, card readers and remotes all feeding the same opener board, and a fault in any one of them stops the gate for some residents but not others. On private gates, receivers and remote programming are a frequent source of complaints.',
      'We test the opener on a manual command, then each input in turn: remotes, receiver, keypad, entry panel, reader and controller. If those work and the gate still misbehaves, we move to the board, limits and safety inputs. Lost programming is restored and failed receivers replaced. Gate opener repair in Frisco runs this way at a community gate near the Sam Rayburn Tollway or an estate in Starwood.',
    ],
    faqs: [
      { q: 'Some Frisco residents can open the community gate and others cannot. Why?', a: 'That pattern points to the access system rather than the opener. Particular remote codes, credentials or directory entries may have been lost or never added, or one reader or keypad may have failed. We check the programming and each device, restore what is missing, and confirm the gate opens from every input residents use.' },
      { q: 'Can you program new remotes for my gate opener?', a: 'Yes. We identify the receiver type, program new remotes to it, and remove lost ones if the receiver supports it. If the receiver is old or the remote type is no longer available, we can fit a current receiver to the existing opener so you have remotes that are easy to replace.' },
    ],
  },
  'frisco/gate-motor-repair': {
    description: 'Gate motor repair in Frisco, TX: gearbox wear, thermal cutout and motor faults on high-cycle HOA slide operators and estate gate motors. Call Shield.',
    intro: 'Gate motor repair in Frisco for the motor, gearbox and thermal protection inside the operator. On busy community entrances these parts wear early, and we check whether the operator is sized for the job.',
    local: [
      'Frisco gate motors rarely die of old age. The pattern here is high-cycle wear: community entrance operators that were sized for a smaller neighborhood now run many times more cycles, so motors run hot, thermal cutouts trip at peak times, and gearboxes wear their teeth. On estate gates, motors suffer when a heavy ornamental leaf has drifted out of alignment and needs more force on every cycle.',
      'We check the gate moves freely, then measure motor current, test the thermal cutout, inspect the gearbox and output shaft, and check the capacitor on AC units. A worn gearbox can often be replaced on its own. If cycle count shows the operator is undersized, repairing the motor again only buys time, and we explain the options in writing. Gate motor repair in Frisco is the same at an entrance near Preston Road or a gate in Phillips Creek Ranch.',
    ],
    faqs: [
      { q: 'Our Frisco entrance gate stops working in the evening rush. Is the motor failing?', a: 'It may be the thermal cutout doing its job. When a gate cycles constantly, the motor heats up and the cutout stops it until it cools. That points to an operator working past its duty cycle or a gate that drags. We check both and tell you whether the fix is mechanical or a better sized operator.' },
      { q: 'Can a stripped gearbox be replaced without a new operator?', a: 'Often, yes. On many operators the gearbox is a replaceable assembly, and if the motor and board test fine, replacing it restores the gate. We check why it wore, because a gearbox that failed from a dragging gate or excessive cycles will wear again unless that cause is dealt with too.' },
    ],
  },
  'frisco/emergency-gate-repair': {
    description: 'Emergency gate repair in Frisco, TX: HOA entrances stuck open or shut, vehicle strikes, storm damage and access failures. Call Shield 24/7.',
    intro: 'Emergency gate repair in Frisco for community entrances and private gates that are stuck open, stuck shut, struck by a vehicle or knocked out by a storm. We answer 24/7 and make the gate safe first.',
    local: [
      'In Frisco an emergency often means a community entrance: residents unable to get in or out, or a gate stuck open that leaves the neighborhood unsecured. Busy entrances also see more vehicle strikes, and spring storms in Collin County bring surges that kill boards, loop detectors and access controllers. On estate gates, a dead battery during a power cut can leave a heavy ornamental gate stuck shut.',
      'We start by getting traffic moving safely, which may mean releasing the operator to hold the gate open, securing a damaged leaf or restoring power to the controller. Then we diagnose properly and give a written repair quote the HOA can approve. Emergency gate repair in Frisco follows those steps at an entrance off the Dallas North Tollway or a private gate in Starwood.',
    ],
    faqs: [
      { q: 'Our Frisco HOA entrance is stuck shut and residents cannot get out. What should we do?', a: 'Call us, and if someone on site knows where the manual release is, it can be used to open the gate by hand and hold it open. Do not force the gate against the operator, which can strip the gearbox. Once we are on site we secure the gate open or get it running, then find out what failed.' },
      { q: 'What should we record after a vehicle hits our gate?', a: 'Photograph the damage, the vehicle details if known and the position of the gate, and keep people clear of a bent leaf or damaged post. Disconnect the operator if it is safe to do so. We assess the gate, posts, operator and safety devices, and give you a written breakdown of the damage and the repair.' },
    ],
  },
  'frisco/commercial-gate-repair': {
    description: 'Commercial gate repair in Frisco, TX for HOA entrances, apartments and business sites: access control, loops and high-cycle operators. Call Shield.',
    intro: 'Commercial gate repair in Frisco for HOA communities, multifamily properties and businesses. We service operators, loops and access control together and provide written quotes suitable for board approval.',
    local: [
      'Commercial gate work in Frisco centers on the HOA-managed entrances of its master-planned communities, plus apartment and business properties with controlled access. The recurring issues are high-cycle wear, access control faults and safety loop failures. Each tends to get blamed on the operator, and each needs testing on its own, because an entrance that runs all day can fail in several places at once.',
      'We test the operator, then the loops, then the access system: keypads, telephone entry, readers and the controller. We record cycle counts and wear on rollers, chains and gearboxes, since an undersized operator on a busy entrance will keep failing however well it is repaired. Quotes are written for boards and property managers. That holds for an entrance off the Sam Rayburn Tollway or near Legacy Drive.',
    ],
    faqs: [
      { q: 'How do you help an HOA board budget for its Frisco entrance gates?', a: 'We give a written assessment of each gate: what failed, what is wearing, how many cycles it runs and how that compares with the operator rating. That lets the board choose between repairs, a maintenance schedule or planned replacement, and avoid emergency spending on parts that were predictable.' },
      { q: 'Do you service access control systems on commercial gates?', a: 'Yes. Keypads, telephone entry panels, card readers, controllers and loop detectors are part of our work, and we test them with the gate rather than separately. Many commercial gate stoppages turn out to be access or loop faults, so diagnosing both together saves a second call-out.' },
    ],
  },
  'frisco/residential-gate-repair': {
    description: 'Residential gate repair in Frisco, TX for homeowners: driveway, side and pedestrian gates, openers, batteries and child and pet safety checks. Call Shield.',
    intro: 'Residential gate repair in Frisco for homeowners with driveway gates, side yard and pedestrian gates, openers and safety devices. We fix the fault and check the gate is safe around children and pets.',
    local: [
      'Frisco homes are newer than much of the area, and residential gates here range from ornamental iron driveway gates on custom estates to side and pedestrian gates in the same style around backyards. Newer does not mean trouble free: batteries in DC openers age in Texas heat, photo eyes get knocked out of line by landscaping crews, and self-closing hinges on pedestrian gates lose tension, which can leave a backyard open without anyone noticing.',
      'On automatic gates we test reversing, photo eyes and edges first, since safety matters most where children and pets play near the drive. Then we check batteries, the opener and limits, and on pedestrian and side gates the hinges, closers and latches. Residential gate repair in Frisco gets the same safety check in Frisco Lakes as on a custom home in Newman Village.',
    ],
    faqs: [
      { q: 'Our backyard gate in Frisco no longer closes by itself. Is that fixable?', a: 'Yes. Self-closing hinges lose tension and latches move out of line as a gate settles. We adjust or replace the hinges, realign the latch and check the gate closes and latches from any open position. For homes with pools or young children, that reliable close matters more than anything else on the gate.' },
      { q: 'How often should I test my automatic gate safety features?', a: 'A quick monthly check is sensible: place an object in the gate path and confirm it reverses, and break the photo eye beam to confirm it stops closing. If either test fails, stop using the gate automatically and call us. We inspect all safety devices on every residential visit.' },
    ],
  },
  'frisco/automatic-gate-installation': {
    description: 'Automatic gate installation in Frisco, TX: HOA approval, ornamental iron design, operator sizing for real cycle counts and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Frisco for private homes and community entrances. We plan for HOA approval, size the operator for real use rather than today’s count, and build in safety from the start.',
    local: [
      'Much of Frisco is master-planned, with HOA design rules, so a new automatic gate starts with approval: style, height, materials and placement. Ornamental iron is the usual look, and large decorative leaves need operators and hinges sized for their weight. For community entrances the bigger lesson from Frisco is to plan for the full neighborhood, since entrances sized for early occupancy run out of capacity.',
      'We prepare drawings for your HOA, confirm what the city requires, set footings for the gate weight, and plan power and any battery backup or solar. The operator is sized to the gate and expected cycles, and photo eyes, edges and loops are fitted to UL 325, with the gate built to ASTM F2200. That approach holds in Phillips Creek Ranch or on an estate in Starwood.',
    ],
    faqs: [
      { q: 'Do I need HOA approval for a new gate in Frisco?', a: 'If your home is in an HOA, almost certainly, and the HOA may specify style, height and materials. We confirm what the city and your HOA require before the design is final, and can prepare drawings and specifications for the submission. Building first and asking later is the expensive way to do it.' },
      { q: 'How do you size an operator for a community entrance?', a: 'We estimate cycles per day for the neighborhood when it is fully built, not as it is today, and add margin for visitors and deliveries. Then we choose an operator rated for that duty cycle and the gate weight. That avoids the familiar Frisco problem of an entrance outgrowing its operator within a few years.' },
    ],
  },
  'frisco/electric-gate-installation': {
    description: 'Electric gate installation in Frisco, TX: power supply planning, battery backup, solar options, loops, access control wiring and UL 325 safety. Call Shield.',
    intro: 'Electric gate installation in Frisco with the power, backup and control wiring designed together. A new gate here often needs access control and loops, and those are planned at the same time as the supply.',
    local: [
      'New electric gates in Frisco usually include more than a motor and a remote. Community entrances need access control, vehicle detection loops and battery backup so residents are not stranded in a power cut, and some sites rely on solar where running power was impractical. Battery and solar charging problems are a known Frisco issue, so the charging system needs sizing with margin from the outset.',
      'We confirm what the city and your HOA require, then plan the supply, cable routes, transformer, battery capacity and any solar array. Loops are cut and sealed before final paving where possible, and access control wiring runs in its own conduit. Surge protection goes on the supply, loops and access lines. Every safety input is wired and tested to UL 325, whether the site is near the Dallas North Tollway or in Frisco Lakes.',
    ],
    faqs: [
      { q: 'Should a new Frisco gate run on solar or mains power?', a: 'Mains power is the dependable choice where it is reasonably close. Solar suits gates far from a supply, but it must be sized for the gate weight, cycles per day and winter sun, with shading from future landscape growth in mind. We assess the site and recommend one, with reasons.' },
      { q: 'When should loops be installed on a new gate?', a: 'Ideally before the final driveway or entrance surface goes down, or cut into fresh concrete or asphalt soon after, and sealed properly. Loops placed in a planned layout work better and last longer than ones added later around obstacles. We coordinate with whoever is laying the surface so the loops are in the right place.' },
    ],
  },
  'frisco/sliding-gate-installation': {
    description: 'Sliding gate installation in Frisco, TX for HOA entrances and estate drives: track or cantilever, footings, high-cycle operators and UL 325. Call Shield.',
    intro: 'Sliding gate installation in Frisco for community entrances and private drives. We choose track or cantilever, size the operator for real cycle counts and plan HOA approval and safety from the outset.',
    local: [
      'The HOA community slide is a common gate type in Frisco, and slide gates suit wide openings where swing space is limited. The lesson from existing Frisco entrances is capacity: a slide operator sized for the first phase of a neighborhood wears out quickly once the subdivision fills. For estates, a slide gate in ornamental iron can match HOA design rules while avoiding the long swing arc of a large leaf.',
      'We confirm what the city and your HOA require, prepare drawings, and choose a track or cantilever design based on the drive surface and space. Footings for posts, supports and the operator pad are sized for the gate weight. The operator is rated for the expected duty cycle, and we fit photo eyes, edges, loops and guards to UL 325, with the gate to ASTM F2200. That applies near Preston Road or on a lot in Stonebriar.',
    ],
    faqs: [
      { q: 'Is a cantilever slide gate better for a Frisco community entrance?', a: 'Often, because a cantilever gate rides on rollers mounted at the side and never sits in a ground track that collects debris and needs keeping level. It does need extra length beside the opening. For a busy entrance that saves maintenance. We look at the space and the traffic before recommending a design.' },
      { q: 'What safety devices does a new slide gate need?', a: 'UL 325 calls for entrapment protection, typically photo eyes and contact edges positioned to cover the gate travel, and the gate itself should meet ASTM F2200, including guarding of rollers and gaps that could trap a hand. We install and test each device and show you how to check them.' },
    ],
  },
  'frisco/swing-gate-installation': {
    description: 'Swing gate installation in Frisco, TX: ornamental iron leaves, HOA design approval, heavy duty hinges, operator choice and UL 325 safety. Call Shield.',
    intro: 'Swing gate installation in Frisco for ornamental iron and estate gates. We plan HOA approval, set posts and hinges for the leaf weight, and choose an operator that will not be overworked.',
    local: [
      'Estate swing gates and ornamental iron are the look in many Frisco neighborhoods, and the custom homes in Starwood and Newman Village carry some large examples. The experience from existing gates is clear: when a big leaf has light hinges or a post that is not quite true, the operator ends up working much harder than it should. Getting the hinges, posts and alignment right at installation prevents most of that.',
      'We confirm what the city and your HOA require and prepare drawings for approval. Hinge posts go in concrete footings sized to the leaf, with heavy duty hinges and alignment checked on each leaf. We choose an arm or articulated operator rated for the gate weight, fit photo eyes and edges to cover the swing area under UL 325, and build to ASTM F2200. That goes for a drive off Legacy Drive or in Newman Village.',
    ],
    faqs: [
      { q: 'Will my HOA in Frisco restrict the gate design?', a: 'Very likely, in some way. HOAs commonly set rules on gate style, height, color and materials, and some also cover where the operator can sit. We confirm what the city and your HOA require, then design to those rules and provide drawings for the submission, so approval goes smoothly and the gate is built once.' },
      { q: 'Should a large swing gate be one leaf or two?', a: 'On wide openings two leaves are usually better: each is lighter, the hinges carry less leverage and the operators work less hard. A single leaf can suit a narrower opening or a particular design. We look at the width, slope and swing space and recommend what will hold its alignment longest.' },
    ],
  },
  'frisco/gate-opener-installation': {
    description: 'Gate opener installation in Frisco, TX: operators sized for heavy iron leaves, battery backup, remotes, keypads, access control and UL 325. Call Shield.',
    intro: 'Gate opener installation in Frisco for existing gates and openers due for replacement. We check the gate first, size the opener to its weight and use, and set up remotes, keypads and safety.',
    local: [
      'Many Frisco gates were automated when they were built, so opener installation here often means replacing a unit that was undersized for its gate or its traffic, rather than automating a manual gate. A heavy ornamental leaf needs an opener with real margin, and a community gate needs one rated for the cycles it now runs. Battery backup is worth fitting to most, given how often charging problems show up here.',
      'We check hinges, rollers and alignment, because a new opener on a binding gate will fail early. Then we confirm what the city and your HOA require, mount the opener, wire power and batteries, fit photo eyes and edges to UL 325, and program remotes, a keypad or the access system. A gate in Stonebriar or in Panther Creek gets the same checks.',
    ],
    faqs: [
      { q: 'Why replace a gate opener on a gate that is only a few years old in Frisco?', a: 'Usually because the original opener was undersized, either for the weight of the gate or for the traffic it now handles. When the same part keeps failing, repair stops being economical. We compare the gate weight and cycle count against the existing opener and recommend a replacement only when the numbers show it is outmatched.' },
      { q: 'Can a new opener work with our existing keypad and remotes?', a: 'Often. Many keypads and access systems can be wired to a new opener, and a compatible receiver can keep existing remotes working. Where they are not compatible we tell you before installation and suggest the simplest change, so residents or family members are not left with remotes that suddenly stop working.' },
    ],
  },
  'richardson/faac': {
    description: 'FAAC gate repair in Richardson, TX: hydraulic swing operators from the 1990s and 2000s, seal kits, fluid, pressure and 455 D boards. Call Shield.',
    intro: 'FAAC gate repair in Richardson for hydraulic swing operators and slide units that have been in service for many years. Age alone does not condemn a FAAC: seals, fluid and boards are all serviceable.',
    local: [
      'Much of the residential gate equipment in Richardson dates from the 1990s and early 2000s, and a FAAC hydraulic arm of that age is a good example of a unit that is often written off too soon. The mechanical side of these operators was built for a long life. What ages are the seals, the fluid and the board, and the symptoms are slow travel, stopping short, or a gate that will not stay closed against wind.',
      'We test fluid level and seals, the release valve and pump pressure, then the encoder or limits and the 455 D board on hydraulic swing units. A seal kit and a pressure reset return many older FAAC 400 and 402 arms to normal service. Replacement is for a damaged ram or housing, or a board that truly cannot be sourced. That is how we approach FAAC gate repair in Canyon Creek or Prairie Creek.',
    ],
    faqs: [
      { q: 'My FAAC in Richardson is over twenty years old. Is it still worth fixing?', a: 'Often it is. The hydraulic ram and pump on a FAAC are built to be serviced, and many older units run well after new seals, fluid and a pressure adjustment. The question is the condition of the ram and housing and whether the board is available. We check both and give you a straight answer.' },
      { q: 'Why does my FAAC gate drift open after closing?', a: 'A hydraulic gate that will not hold its closed position usually has an internal seal or release valve that is letting fluid bypass, so pressure bleeds off. It is a repairable fault. We test pressure, inspect the valve and seals, rebuild as needed, and confirm the gate holds closed afterwards.' },
    ],
  },
  'richardson/us-automatic': {
    description: 'US Automatic gate repair in Richardson, TX: Patriot and Ranger 12-volt operators, AC chargers, solar panels, batteries and limit settings. Call Shield.',
    intro: 'US Automatic gate repair in Richardson for Patriot and Ranger operators. These run from a 12-volt battery charged by a panel or an AC charger, and that charging side is where we start.',
    local: [
      'Richardson is a mature city with established trees, and a residential gate here with a US Automatic operator may be charged by a low-voltage AC charger rather than solar, where power is close to hand. Either way the operator moves the gate from its battery. A failing battery, a charger with weak output or a damaged charge wire all give slow, stalling travel that is easy to mistake for a worn operator.',
      'We load test the battery, then check charger output and charge wiring or panel output, then the control board and limits. Receivers and remotes are a common Richardson complaint, so we test those too. Patriot limit drift and Ranger board limit settings are adjusted on site, and the board is checked for lightning or surge damage. We follow that order whether the gate is in Breckinridge or off Campbell Road.',
    ],
    faqs: [
      { q: 'Would mature trees in Richardson stop a solar US Automatic gate charging?', a: 'They can. Established trees shade a panel for more of the day as they grow, and the battery begins each day short of a full charge. The gate then slows or stops later in the day. We measure panel output, and where shade cannot be avoided, moving the panel or switching to an AC charger can solve it.' },
      { q: 'My US Automatic gate works but the remote range is very short. Why?', a: 'Short range usually comes from a weak remote battery, a receiver antenna that has been damaged or moved, or interference. It can also follow a low operator battery. We test the remote, check the receiver and its antenna placement, and test the operator battery before replacing the receiver.' },
    ],
  },
  'richardson/apollo': {
    description: 'Apollo gate repair in Richardson, TX: 1550 and 1650 swing openers, 12-volt batteries, receivers, control boards and limits on residential gates. Call Shield.',
    intro: 'Apollo gate repair in Richardson for 1550 and 1650 swing openers and related 12-volt units. We check the battery and charging first, then the receiver and board, which suits the faults Richardson gates show.',
    local: [
      'Richardson gates tend to be long-serving equipment, and an older Apollo 1550 or 1650 fits that profile. The common local faults, ageing boards, limit switch drift and receiver or remote failures, all apply to these 12-volt openers. On top of that, any Apollo depends on its battery, so a weak battery can make a healthy opener stop a few feet into travel or reverse after closing.',
      'We load test the battery and check the charger or panel, then the receiver and remotes, then the board and limits. Apollo boards have changed over time, including the 833/834, 835/836 and 1050, so we confirm the version before ordering. A worn actuator can be swapped for a Nice Apollo TITAN, which distributors list as fitting the older mounting geometry. That applies in Heights Park or on a drive near Coit Road.',
    ],
    faqs: [
      { q: 'Is a twenty-year-old Apollo opener in Richardson worth repairing?', a: 'Frequently, yes. Batteries, receivers, boards and limits are the usual failures, and replacement parts or supported substitutes exist for many versions. If the actuator itself is worn, it can often be replaced while keeping the rest. We confirm parts first and tell you honestly if the whole unit has reached its end.' },
      { q: 'My Apollo keypad works but the remotes do not. What is wrong?', a: 'When the keypad still operates the gate, the opener and board are working. The fault is in the remotes or the receiver. We test the remote batteries and codes, then the receiver. Reprogramming remotes or fitting a new receiver is usually all it takes, with nothing mechanical touched.' },
    ],
  },
  'richardson/automatic-gate-repair': {
    description: 'Automatic gate repair in Richardson, TX: boards, receivers, limits and telephone entry faults on long-serving residential and community gates. Call Shield.',
    intro: 'Automatic gate repair in Richardson for residential swing gates, community slide gates and corporate barrier arms. Most equipment here is long-serving and repairable, and we test before recommending any replacement.',
    local: [
      'Richardson gates are mostly a generation older than those in the newer northern suburbs, installed in the 1990s or early 2000s and still mechanically sound. What fails are the inexpensive parts: control boards, receivers and limit switches. Along US-75 and around CityLine the picture shifts to corporate controlled access and barrier arms, where the reader or controller is usually at fault rather than the gate itself.',
      'We test the gate by hand, then the safety devices, then the receiver, keypad or telephone entry, then the board, limits and drive. A board and a set of limit switches will put many older operators back in reliable service. If an operator truly has reached the end, we say so. Richardson automatic gate repair works the same way in Cottonwood Heights or at a corporate gate along US-75.',
    ],
    faqs: [
      { q: 'Is a 1990s gate operator in Richardson too old to repair?', a: 'Usually not. Operators from that era were built with durable mechanics, and the parts that fail, boards, receivers and limit switches, are generally still available. We identify the operator, check the failed part, and give you a repair or replace recommendation. Age is a reason to inspect carefully, not a reason to replace.' },
      { q: 'Our corporate gate in Richardson stops accepting badges. Is it the gate?', a: 'Usually not. If the gate opens on a manual command but not from badges, the fault is in the reader, the controller or the wiring between them. We test the access system and the operator on the same visit, so you are not paying for a technician to look at a healthy gate.' },
    ],
  },
  'richardson/electric-gate-repair': {
    description: 'Electric gate repair in Richardson, TX: ageing control boards, transformers, wiring, surge damage and loop detectors on home and campus gates. Call Shield.',
    intro: 'Electric gate repair in Richardson for dead, intermittent or erratic gates. On older equipment the electrical path has had decades to develop faults, so we test it section by section.',
    local: [
      'Electrical gate faults in Richardson often come from age. Wiring and transformers installed in the 1990s have been through many summers and storms, splices corrode, and control boards of that generation are a frequent failure. Corporate gates along the US-75 corridor add access controllers and loop detectors on shared supplies, so a single power fault can take down several devices at once, and the gate gets the blame for all of them.',
      'We test the incoming supply, breaker and transformer, then the voltage at the operator under load, fuses, the board and its relays, and each loop detector and loop. Corroded splices are remade and sealed. Where a board has failed from age, a current replacement is usually available for these operators. That method applies to a home in Canyon Creek or a gate off Campbell Road.',
    ],
    faqs: [
      { q: 'Our Richardson gate trips the breaker. What causes that?', a: 'Usually a short in the wiring, a failing transformer or a motor drawing too much current. On older installs, water in a junction box or damaged insulation on a buried run is a common cause. We isolate each circuit, measure insulation and current draw, and find the faulty section rather than resetting the breaker and hoping.' },
      { q: 'Can lightning damage just one part of the gate system?', a: 'Yes, and that is the usual result. A surge often takes out the board, a fuse, the receiver or a loop detector while the motor survives. We test each component and replace only what failed. Adding surge protection afterward is worth considering on a gate that has been hit before.' },
    ],
  },
  'richardson/driveway-gate-repair': {
    description: 'Driveway gate repair in Richardson, TX for private homes: residential swing gates, limit drift, receivers, remotes and older boards. Call Shield.',
    intro: 'Driveway gate repair in Richardson for private homes with established swing gates and openers. These gates are often decades old and still sound, and we aim to keep them running with the right parts.',
    local: [
      'Private driveway gates in Richardson are typically residential swing gates installed a generation ago, in neighborhoods such as Canyon Creek, Prairie Creek and Breckinridge. The iron and mechanics usually hold up, and the trouble comes from electronics: a receiver that stops hearing remotes, limits that have drifted so the gate stops short or bumps its stop, or a board that has finally aged out.',
      'We check the gate swings freely, then test remotes, receiver and keypad, then limits and the board, and finally the drive. Hinges and posts get a look too, since clay soil moves posts over the years. Replacing the receiver, a set of limit switches or a board is common and keeps the operator in service. Richardson driveway gate repair does not start from the assumption that an old gate needs replacing.',
    ],
    faqs: [
      { q: 'My Richardson driveway gate stops a little short of closed. What is happening?', a: 'That is a typical sign of limit drift. Over time limit switches or settings move, and the gate stops before it reaches its stop, or a post shift changes where the leaf finishes. We check the hang first, then adjust or replace the limits so the gate closes fully and latches properly.' },
      { q: 'Should I upgrade my driveway gate opener just because it is old?', a: 'Only if there is a reason beyond age. If parts are available and the mechanics are sound, a repair is usually the better value. Upgrading makes sense if you want features such as battery backup or smartphone control, or if the failed part cannot be sourced. We explain the trade-offs plainly.' },
    ],
  },
  'richardson/sliding-gate-repair': {
    description: 'Sliding gate repair in Richardson, TX: community slide gates, rollers, chains, limits, boards and telephone entry on long-serving equipment. Call Shield.',
    intro: 'Sliding gate repair in Richardson for community slide gates and private slide gates. Most of these have years of service behind them, so we check wear parts and the electronics together.',
    local: [
      'Community slide gates are one of the common gate types in Richardson, often serving mature gated pockets where the operator and the telephone entry panel have both been in place for many years. Their wear shows in rollers, chain and sprockets, and in limit switches that drift with use. Telephone entry faults are a separate and frequent cause of residents being stuck outside a gate that is mechanically fine.',
      'We check the gate by hand along the track, then rollers, chain and sprockets, then limits and safety devices, and then the telephone entry panel and board. Rollers and chains are routine replacements, and limit switches for these generations of operator are widely available. Sliding gate repair in Richardson follows this order whether the gate is in Heights Park or near Coit Road.',
    ],
    faqs: [
      { q: 'Residents in our Richardson community cannot use the call box but the gate works. What is wrong?', a: 'That points to the telephone entry system: a failed board, a lost phone line or directory programming, or wiring between the panel and the operator. The gate itself is fine if it opens from a remote or manual command. We test the entry system, restore programming, and replace what has failed.' },
      { q: 'How do I know if slide gate rollers need replacing?', a: 'Rollers that are flat-spotted, cracked, noisy or wobbling need replacing, and a gate that has become harder to push by hand is a sign too. Worn rollers make the operator work harder and can trip it on obstruction. We inspect and replace them, and check the track for wear at the same time.' },
    ],
  },
  'richardson/swing-gate-repair': {
    description: 'Swing gate repair in Richardson, TX for residential swing gates: limit switch drift, older control boards, arms, hinges and receivers. Call Shield.',
    intro: 'Swing gate repair in Richardson for residential swing gates of every age. Most here run on durable operators from the 1990s and 2000s, and the repair is usually limits, boards or receivers.',
    local: [
      'Residential swing gates are a large part of the Richardson gate stock, often iron leaves on older streets such as those in Cottonwood Heights. Their operators tend to be long-serving units, and the faults follow a pattern: limit switches that drift so the leaf stops short or overshoots, boards that age out, and receivers that stop recognizing remotes. The arms, hinges and posts have their own wear after decades of use.',
      'We swing each leaf by hand, check hinges and posts, then the operator arm, brackets and pivots, then limits, safety devices, receiver and board. Replacing limit switches or a board brings many older swing operators back to reliable service, and worn arm pivots can be rebuilt. Swing gate repair in Richardson follows that sequence in Breckinridge or along Coit Road.',
    ],
    faqs: [
      { q: 'Why do my Richardson swing gate leaves no longer close in sync?', a: 'Usually the limits on one leaf have drifted or the leaf delay setting has changed, and occasionally a hinge or post has moved. We check how each leaf hangs, then reset limits and delay so they close in order and meet properly. On older operators we may replace limit switches that no longer hold their setting.' },
      { q: 'Can the arm on an older swing gate operator be repaired?', a: 'Usually. Arm pivots, bushings and brackets wear and develop play, which makes the gate rattle or stop inconsistently. We replace the worn parts, or the arm if needed, and check the operator itself. If the motor and gearbox are sound, there is no need to replace the whole operator for a worn arm.' },
    ],
  },
  'richardson/gate-opener-repair': {
    description: 'Gate opener repair in Richardson, TX: receivers, remotes, keypads, telephone entry, ageing boards and limit switches on long-serving openers. Call Shield.',
    intro: 'Gate opener repair in Richardson for remotes, receivers, keypads, telephone entry and control boards. Receiver and remote faults are among the most frequent calls here, and among the quickest to fix.',
    local: [
      'Richardson gate openers were largely installed in the 1990s and early 2000s, and their electronics are where they show their age. Receiver and remote failures are a regular complaint, often after a remote is lost and replacements prove hard to match. Telephone entry panels at community gates develop faults, and control boards and limit switches of that generation fail eventually, while the mechanical side of the opener keeps going.',
      'We start at the input: remote batteries and codes, the receiver, the keypad, the telephone entry panel. Then we test the board, limits and safety inputs. Where an old receiver cannot be matched, a current one can usually be wired to the existing board. Boards for this generation are readily available. Gate opener repair in Richardson follows that order in Prairie Creek or near Campbell Road.',
    ],
    faqs: [
      { q: 'We lost our only remote for an older Richardson gate. Can we get a new one?', a: 'Usually. We identify the receiver and find a compatible remote. If that remote type is no longer available, we fit a current receiver to the existing opener and program new remotes to it. Either way the opener stays, and nothing mechanical needs replacing, so it is a modest repair.' },
      { q: 'Our telephone entry panel has stopped calling residents. Can it be repaired?', a: 'Often. The cause may be the phone line or service, the panel board, the directory programming or the wiring. We test each one, restore the programming, and repair or replace the board as needed. If the panel model is no longer supported, we explain the replacement options and how they connect to the existing gate.' },
    ],
  },
  'richardson/gate-motor-repair': {
    description: 'Gate motor repair in Richardson, TX: capacitors, gearboxes, thermal cutouts and motor wear on 1990s and 2000s operators and community slides. Call Shield.',
    intro: 'Gate motor repair in Richardson for the motors, capacitors and gearboxes inside long-serving operators. These mechanics were built to last, so a repair often keeps an older operator going.',
    local: [
      'The mechanical side of the operators found in Richardson was built to last, and a motor or gearbox failure here is less frequent than a board or receiver fault. When it does happen, the cause is often load: a community slide gate on worn rollers, or a residential swing leaf with tired hinges, makes the motor run hot and the thermal cutout trip. On older AC units the capacitor is a frequent culprit.',
      'We check the gate moves freely, then test the capacitor, motor current and windings, the thermal cutout and the gearbox. Capacitors and many gearboxes are replaceable on their own, and we check whether a replacement motor can be sourced for your operator. If the motor really is finished and parts are gone, we explain replacement plainly. Gate motor repair in Richardson follows that process in Canyon Creek or along US-75.',
    ],
    faqs: [
      { q: 'My Richardson gate motor runs but the gate does not move. Why?', a: 'That usually means the drive is not reaching the gate: a stripped gear in the gearbox, a broken chain or sprocket on a slide, or a sheared pin or loose arm on a swing. The motor itself may be fine. We inspect the drive train, replace the failed part and check why it failed.' },
      { q: 'Is it worth replacing just the motor on an old operator?', a: 'It can be, if the gearbox, board and frame are sound and the motor is available. That keeps a durable older operator going at a fraction of the cost of replacement. If several major parts are worn at once, a new operator becomes the better choice. We give you both options and the reasoning.' },
    ],
  },
  'richardson/emergency-gate-repair': {
    description: 'Emergency gate repair in Richardson, TX: gates stuck open or shut, vehicle strikes, storm surges and barrier arm failures. Call Shield 24/7.',
    intro: 'Emergency gate repair in Richardson for gates stuck open, stuck shut, struck by a vehicle or knocked out by a storm. Call any hour and we will get the gate safe, then plan the full repair.',
    local: [
      'Emergencies in Richardson range from a residential swing gate that will not open on a weekday morning to a corporate barrier arm along US-75 that has been hit by a car. Older control boards are vulnerable to storm surges, and a failed board can leave a gate stuck in either position. Telephone entry failures at community gates can also lock residents or visitors out late at night.',
      'Our first step is making the site safe and passable: releasing the operator for manual use, raising and securing a barrier arm, or holding a community gate open. Then we diagnose and quote the proper repair. On older equipment, boards and parts are generally available, which helps with a permanent fix. Emergency gate repair in Richardson follows that order whether the gate is in Cottonwood Heights or off the President George Bush Turnpike.',
    ],
    faqs: [
      { q: 'A barrier arm at our Richardson office was snapped by a vehicle. What happens next?', a: 'We secure the site first, either by raising the arm or holding the lane open so traffic can move. Then we check the operator, its mounting, the loop detectors and the access system for impact or electrical damage. The arm is replaced, the operator realigned, and the loops and safety tested.' },
      { q: 'Our gate is stuck open overnight. Is that an emergency?', a: 'If security matters for your property, yes. A gate stuck open is often a safety device or loop holding it, a failed board or a power fault. Call us any hour. We check the loops and sensors first, since those often hold a gate open, then the board and the power supply.' },
    ],
  },
  'richardson/commercial-gate-repair': {
    description: 'Commercial gate repair in Richardson, TX for corporate campuses on US-75, barrier arms, card readers, telephone entry and HOA slide gates. Call Shield.',
    intro: 'Commercial gate repair in Richardson for corporate campuses, barrier arms, HOA communities and apartments. We test the access control and the gate together, since the fault is often in the reader or controller.',
    local: [
      'Commercial gate work in Richardson centers on corporate controlled access along US-75 and around CityLine, plus community slide gates in the gated residential pockets of the city. Barrier arms, card readers, telephone entry and loop detectors are the components that run those sites, and when a gate stops working the cause is usually the reader or controller rather than the gate itself.',
      'We test the gate on a manual command, then the readers, controller, telephone entry and loops, then the operator board, limits and drive. Barrier arm motors, boards and loops are routine repairs. Because much of the equipment dates from the 1990s and 2000s, boards and parts remain available, and we give written quotes that facilities managers and HOA boards can approve. That applies along Campbell Road or on the US-75 corridor.',
    ],
    faqs: [
      { q: 'Our Richardson office gate opens for some badges and not others. What is wrong?', a: 'That is almost always the access control, not the gate. Particular credentials may have been deleted, expired or never added to the controller, or one reader in a multi-reader site may have failed. We check the controller database and each reader, correct what is wrong, and confirm every entry point releases the gate.' },
      { q: 'Do you provide maintenance for commercial gates in Richardson?', a: 'Yes. We set maintenance around how the gate is used, rather than a fixed calendar, covering operator wear parts, barrier arms, loops, safety devices and access control. A written report after each visit helps facilities teams and HOA boards plan repairs before they turn into failures.' },
    ],
  },
  'richardson/residential-gate-repair': {
    description: 'Residential gate repair in Richardson, TX for homeowners: driveway, side and pedestrian gates, remotes, receivers, latches and child safety. Call Shield.',
    intro: 'Residential gate repair in Richardson for homeowners with driveway, side yard and pedestrian gates. We fix openers, receivers, hinges and latches, and check every gate is safe for children and pets.',
    local: [
      'Richardson homes in established neighborhoods such as Breckinridge and Canyon Creek often have gates that have been in place for decades: driveway swing gates with long-serving openers, and side or pedestrian gates of the same age. The openers mostly need receivers, remotes, boards or limit switches. The manual gates need hinges, closers and latches that have worn or moved with the posts as the clay shifted over the years.',
      'On automatic gates we test reversing, photo eyes and edges first, since older installs may predate current safety devices and children and pets are the reason they matter. Where sensors are missing, we explain adding them. Then we repair the opener and check hinges, latches and closers on every gate we look at. Residential gate repair in Richardson includes that safety check on every visit.',
    ],
    faqs: [
      { q: 'Our older Richardson gate has no photo eyes. Should we add them?', a: 'Yes, we recommend it. Many older gates were installed before current safety requirements, and photo eyes or edges are what stop a closing gate striking a person, pet or car. Most older operators can accept them, sometimes with a board update. We assess your gate and explain what it would take.' },
      { q: 'Our side gate latch no longer catches. Can that be fixed without a new gate?', a: 'Almost always. The gate has usually dropped on worn hinges or the post has moved, so the latch no longer lines up. We re-hang the gate, replace or adjust the hinges and realign or replace the latch. Fitting a self-closing hinge is worth considering if children or pets use the yard.' },
    ],
  },
  'richardson/automatic-gate-installation': {
    description: 'Automatic gate installation in Richardson, TX: replacing older gates, HOA approval, footings, power, access control and UL 325 safety. Call Shield.',
    intro: 'Automatic gate installation in Richardson for homes, community entrances and corporate sites. Many projects here replace older equipment, and we plan the gate, power, access and safety together.',
    local: [
      'In a mature city like Richardson, new automatic gate projects often replace an older manual or automated gate rather than start from scratch. That brings practical questions: whether existing posts, power and conduit can be reused, whether the HOA has rules for the street, and how the telephone entry at a community gate or the access system on a campus will tie in. Residential swing, community slide and commercial barrier arms each need different planning.',
      'We survey what is there, confirm what the city and your HOA require, and decide which posts and wiring can stay. New footings are sized to the gate, power is checked for the operator load, and the operator is matched to the gate and its use. Safety devices go in to UL 325, with the gate to ASTM F2200. That applies in Prairie Creek or at a site near the President George Bush Turnpike.',
    ],
    faqs: [
      { q: 'Can we reuse our existing posts and wiring for a new automatic gate in Richardson?', a: 'Sometimes. We test the wiring and check the posts for lean, rust and footing depth. Sound posts and wiring that suit the new operator can save work. Posts that have moved or wiring that is undersized or damaged should be replaced, since a new gate on old weak points will not last.' },
      { q: 'What safety features will my new automatic gate have?', a: 'Every new automatic gate we install includes entrapment protection to UL 325, typically photo eyes and edges covering the gate travel, and the gate is built to ASTM F2200 to reduce pinch and entrapment points. We also set the force and reversing, and show you how to use the manual release.' },
    ],
  },
  'richardson/electric-gate-installation': {
    description: 'Electric gate installation in Richardson, TX: upgrading older power runs, transformers, surge protection, loops and access control wiring. Call Shield.',
    intro: 'Electric gate installation in Richardson, planned with the power, loops and access wiring the site needs. On older properties we check what existing electrical work can safely be kept.',
    local: [
      'Electric gate installations in Richardson often follow an older system out, and the existing wiring is the first question. Cable and transformers put in during the 1990s may be undersized for a new operator with battery backup and accessories, or may have corroded splices. Corporate sites along US-75 need loops and access control wired cleanly alongside, and community gates need power and connections for telephone entry planned in.',
      'We confirm what the city and your HOA require, test any existing wiring, then plan the supply, cable routes, transformer, battery backup and surge protection. Loops are cut and sealed, access control runs in its own conduit, and each safety input is wired and tested to UL 325. A home in Heights Park or a property off Coit Road gets the same plan.',
    ],
    faqs: [
      { q: 'Will our old gate wiring in Richardson work with a new electric gate?', a: 'It might. We test the cable insulation, check the size against the load of the new operator and the length of the run, and inspect splices and junctions. If it passes, we reuse it. If it is undersized or damaged, replacing it at installation is far easier than chasing faults afterward.' },
      { q: 'Should a new electric gate have battery backup?', a: 'For most homes and community gates, yes. Battery backup keeps the gate working in a power cut, which matters for residents getting in and out and for emergency access. We size the batteries to the gate and its use, and explain how often they need testing and replacing.' },
    ],
  },
  'richardson/sliding-gate-installation': {
    description: 'Sliding gate installation in Richardson, TX for community entrances and homes: track or cantilever, footings, operator sizing, entry and UL 325. Call Shield.',
    intro: 'Sliding gate installation in Richardson for community entrances, homes and commercial sites. We select track or cantilever, size the operator to the gate and its traffic, and plan safety and entry systems.',
    local: [
      'Community slide gates are part of the established gated pockets in Richardson, and some have been running for many years. A new slide gate in an older setting has to work with what is around it: existing driveways, curbs, walls and telephone entry panels. On homes, a slide gate suits a drive that is too short or too close to the street for a swing leaf to clear.',
      'We confirm what the city and your HOA require, then choose a ground track or cantilever design to suit the surface and the room available. Each footing, for posts, supports and the operator pad, is sized to the gate weight. The operator is matched to the expected cycles, and photo eyes, edges and roller guards are fitted to UL 325, with the gate to ASTM F2200. That applies in Breckinridge or near Campbell Road.',
    ],
    faqs: [
      { q: 'Can a new slide gate in Richardson connect to our existing telephone entry panel?', a: 'Often, yes. Many telephone entry panels can be wired to a new operator, provided the panel itself is sound and supported. We test the panel and its programming during planning. If it is due for replacement too, it is easier to do both at once and wire them cleanly together.' },
      { q: 'Does a slide gate need a concrete track?', a: 'A ground track slide gate needs a level, stable surface for its track, often set in or bolted to concrete. A cantilever gate does not use a ground track and rides on rollers on posts beside the opening. We look at your drive and recommend the type that suits the surface and space.' },
    ],
  },
  'richardson/swing-gate-installation': {
    description: 'Swing gate installation in Richardson, TX: replacing older residential swing gates, post footings, hinges, operators and UL 325 safety. Call Shield.',
    intro: 'Swing gate installation in Richardson for homes replacing older gates or adding new ones. We set posts and hinges for the leaf, choose a suitable operator and fit the safety devices older gates often lacked.',
    local: [
      'Residential swing gates are a familiar sight in Richardson, and many in established neighborhoods are decades old. Replacing one is a chance to fix what has been wearing for years: posts that have leaned in the clay, hinges that were light for the leaf, and operators installed before modern entrapment protection. It is also the time to decide whether existing remotes and keypads should carry over.',
      'We confirm what the city and your HOA require, set hinge posts in footings suited to the leaf, use heavy duty hinges, and choose an arm or articulated operator rated for the gate. Photo eyes and edges are placed to cover the swing area to UL 325, and the gate is built to ASTM F2200. That applies on a home in Cottonwood Heights or along Coit Road.',
    ],
    faqs: [
      { q: 'Our Richardson swing gate posts have leaned. Do they need replacing with the gate?', a: 'Usually. A leaning post will pull a new gate out of alignment just as it did the old one. We check how far the post has moved and the condition of the footing. Where it has shifted, we reset it or set a new post in a proper footing before hanging the new gate.' },
      { q: 'Can my new swing gate open outward?', a: 'It can, but inward is usually safer, so the leaf does not swing over the sidewalk or into the street. If the drive slopes up or space is tight, outward may be the only option. We confirm what the city requires and design the swing so it clears people, vehicles and the ground.' },
    ],
  },
  'richardson/gate-opener-installation': {
    description: 'Gate opener installation in Richardson, TX: replacing older openers, adding automation, battery backup, receivers, keypads and UL 325 safety. Call Shield.',
    intro: 'Gate opener installation in Richardson for existing gates. Some need a first opener, others a replacement for one that has run for decades. We check the gate first and size the opener to it.',
    local: [
      'Many opener installations in Richardson replace an operator from the 1990s or early 2000s, either because a key part can no longer be sourced or because the owner wants battery backup and modern safety. Before choosing anything we look at the gate, since a mature swing leaf may have hinge wear or a moved post that a new opener would struggle against. Existing remotes and keypads are checked for compatibility.',
      'We confirm what the city and your HOA require, mount the opener, wire power and battery backup, fit photo eyes and edges to UL 325, and program remotes, a keypad or a link to telephone entry. Limits and force are set and reversing is tested. A gate in Canyon Creek or near US-75 gets the same handover, including the manual release.',
    ],
    faqs: [
      { q: 'Can a new opener be fitted to an older iron swing gate in Richardson?', a: 'Usually, if the gate is sound. We check hinges, posts and frame first, and fix sag or binding before mounting the opener. Then we choose one sized to the leaf length and weight and mount it on a solid point so it does not stress the frame. Older gates often need some hinge work.' },
      { q: 'When is it time to replace a gate opener instead of repairing it?', a: 'When a key part such as the board or motor can no longer be sourced, when several major parts are worn at once, or when you want features the old unit cannot offer, such as battery backup. If none of those apply, a repair is usually the better value, and we will tell you so.' },
    ],
  },
}
export default copy
