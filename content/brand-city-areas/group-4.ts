import type { BrandCityCopy } from '../brand-city'

const copy: Record<string, BrandCityCopy> = {
  'frisco/viking': {
    description: 'Viking gate operator repair in Frisco, TX for heavy estate swing gates and HOA slides. Battery, limits and hinges checked before any part is sold. Call us.',
    intro: 'Viking operators in Frisco usually sit behind the heaviest gate on the lot: ornamental estate leaves in Starwood and Newman Village, or a community slide at an HOA entrance. Here is what wears on them.',
    local: [
      'A Viking is the operator people specify when the gate is heavy, and Frisco has a lot of heavy iron. Most installs here are recent, so the operator is rarely worn out by age. The trouble comes from the gate side: a roller or hinge on a large ornamental leaf starts to drag, and a DC Viking pulling against it drains its battery faster and drifts off its limits. On HOA slides the issue is cycle count climbing as a subdivision fills up, with battery and solar charging faults appearing well before the motor tires.',
      'Viking gate repair in Frisco is almost always a repair, not a replacement. Swing units like the T-21 and R-6 use mechanical limit switches that can be reset or swapped. An older K-2 slide without Viking’s position sensor may lose its limits after a total outage, and a re-learn fixes it. Batteries, boards and limit hardware are generally available. On a gate off Legacy Drive or in Phillips Creek Ranch, we move the leaf by hand first, because a bind there is cheaper to fix than a gearbox.',
    ],
    faqs: [
      { q: 'Why does the Viking on our Frisco estate gate slow down by late afternoon?', a: 'On a DC Viking that pattern usually points at the power side. A battery near the end of its life, a solar panel that now sits in shade, or a failing charge controller all produce a gate that starts strong and weakens through the day. A heavy ornamental leaf with a dragging hinge makes it worse. We load test the battery and check charge input before suspecting the motor.' },
      { q: 'Our HOA slide runs a Viking K-2 and forgot where to stop after a power cut. Is it broken?', a: 'Probably not. Older K-2 slide operators without Viking’s position sensor can lose their digital limits after a total power failure. The hardware is fine; the limits need to be learned again, and we confirm the travel and safety devices afterwards. Current K-2 units with the sensor keep their place through an outage, so it is also worth knowing which version your entrance has.' },
    ],
  },
  'frisco/doorking': {
    description: 'DoorKing gate repair in Frisco, TX for HOA entrances: telephone entry, keypads, loops and the operator, diagnosed together in one visit. Call today.',
    intro: 'DoorKing in Frisco mostly means a master-planned community entrance: a telephone entry panel, a set of loops and a slide or swing operator that all have to agree before the gate moves.',
    local: [
      'The entrances in Frisco’s newer subdivisions were often sized for the first phase of homes, then kept running as every later phase moved in. On a DoorKing site that load shows up in two places. The operator side wears faster, with gearbox wear on high-cycle entrances and limit switches drifting. The access side gets busier too, and a resident locked out at the call box is just as often looking at a directory, keypad or loop detector fault as at a failed motor. That is why we test the entry panel and the gate together.',
      'Most DoorKing problems end in a part rather than a new system. Telephone entry boards, keypads and readers are generally available, and on a panel like the 1835 we can rebuild and document the directory when records went missing during a management change. On the gate itself, a commercial 6300 swing or 9150 slide can usually be put right with a board, limits or gearbox work. We cover community entrances across Frisco, from Phillips Creek Ranch to Frisco Lakes and the streets off Preston Road.',
    ],
    faqs: [
      { q: 'Our Frisco HOA gate keeps failing at the same entrance every few months. Why?', a: 'Repeat failures on a busy community entrance usually mean the equipment is now doing far more cycles than when the subdivision opened. The same gearbox, loop or limit part keeps wearing because the duty has changed, not because the parts are bad. We look at how hard the operator is working and whether the gate itself is binding before swapping that part one more time.' },
      { q: 'Our DoorKing call box stopped dialling out after the HOA changed phone providers. Can it be saved?', a: 'Usually, yes. Older DoorKing panels expect an analogue line, and a move to VoIP or fibre can stop dial-out or remote programming, sometimes months later. DoorKing’s cellular kit is listed as backward compatible with older DKS systems and is normally the fix. If yours is already on cellular, we check it still works, since some early 3G boards went dead.' },
    ],
  },
  'frisco/elite': {
    description: 'Elite gate opener repair in Frisco, TX: boards, start capacitors and limit switches on estate and community gates, fixed without replacing the operator.',
    intro: 'Elite operators in Frisco run on custom estate gates and some community slides. They are AC units, and the parts that fail on them are the board, the capacitor and the limits.',
    local: [
      'Frisco’s gate stock is young compared with the rest of the metroplex, so an Elite here is less likely to be dying of old age and more likely to be overworked. On a community slide whose traffic has grown with the subdivision, chain and sprocket wear arrives early and the board takes the strain of constant starts. On the big ornamental swings in Starwood and Newman Village, a hinge or roller fault makes the operator labour, which eats limit switches and capacitors. Safety loop faults and photo-eye alignment round out the usual Elite calls here.',
      'Because Elite has been part of Chamberlain since 2003, people assume any Elite behaves like a LiftMaster. They do not: board layouts and error codes differ between an older SL585 or Miracle One and a current CSW200UL or SL3000UL, so we identify the exact model first. Boards, capacitors and limit switches are commonly carried. A grinding slide near Stonebriar or Panther Creek is usually a chain and sprocket caught early, which is far cheaper than the gearbox it becomes if left running.',
    ],
    faqs: [
      { q: 'Our Elite swing gate in Frisco hums but will not move. What failed?', a: 'On an AC Elite unit a hum with no movement often points at the start capacitor, one of the three parts that fail most on these operators along with the board and limit switches. It can also be a gate that has started binding on its hinges, which is common on heavy ornamental leaves. We check the leaf by hand and test the capacitor before anything else is quoted.' },
      { q: 'Can an older Elite SL585 be kept running, or should it be replaced?', a: 'Many can be kept running. Boards, capacitors, limit switches, chains and sprockets for Elite slide units are readily available, and shared components with related lines help on older models. We will tell you plainly if the gearbox or frame is beyond saving. If it is, a current LiftMaster Elite Series SL3000UL is a natural replacement for a heavy slide.' },
    ],
  },
  'richardson/elite': {
    description: 'Elite gate repair in Richardson, TX for 1990s and early 2000s operators in Canyon Creek and Prairie Creek. Boards and limits replaced, not whole units. Call.',
    intro: 'A lot of the Elite equipment in Richardson went in during the 1990s and early 2000s, and most of it is still worth repairing. Here is what fails on it and what we replace.',
    local: [
      'Richardson’s gated pockets are mature, and an Elite that has been opening a Breckinridge driveway for twenty years has usually earned a new control board and a set of limit switches rather than retirement. Ageing boards and limit switch drift are exactly the faults this city reports most, and they line up with how Elite AC operators wear: board first, start capacitor second, limits third. Receiver and remote failures are common on equipment this age too, and they are among the cheapest things to rule out.',
      'Our first job on an older Elite is identifying the model, because an SL585, SL595 and Miracle One each have their own board layout and error behaviour. Once that is clear, the repair is normally a board, capacitor or limit switch, all commonly carried. Slide units in Canyon Creek or along Campbell Road may also need a chain and sprocket. Replacement only makes sense when the gearbox or mounting is genuinely worn out, and when it is, we say so plainly and quote a current Elite Series operator.',
    ],
    faqs: [
      { q: 'Is a twenty-five-year-old Elite in Richardson too old to fix?', a: 'Age by itself is not the test. On Richardson gates from that era the mechanical side is usually sound and the faults are a control board, capacitor or limit switch, all still available. We look at the gearbox, the chain on slide units and the mounting, and tell you honestly whether the repair will last or whether the money is better spent on a new operator.' },
      { q: 'Our Elite gate opens with the keypad but not with the remotes. Is the board failing?', a: 'Probably not. If the keypad still opens it, the operator and board are responding to commands, so the fault is most likely in the receiver or the remotes themselves. Receiver and remote failures are common on Richardson’s older equipment. We test the receiver, check remote batteries and coding, and replace or reprogram whichever has failed, without touching the operator.' },
    ],
  },
  'richardson/doorking': {
    description: 'DoorKing gate repair in Richardson, TX: telephone entry faults, card readers and loops on gated communities and corporate sites along US-75. Call us today.',
    intro: 'DoorKing systems in Richardson split between gated residential pockets and controlled access on corporate sites near the US-75 corridor. In both, the entry panel is usually where the fault starts.',
    local: [
      'Telephone entry faults are one of the problems Richardson gates report most, and that is DoorKing territory. On an older community gate the panel may have been wired for an analogue line years ago, and when the phone service changed it quietly lost dial-out or remote programming. Along the US-75 and CityLine corridor the work is corporate access, where the reader or controller fails long before the gate. Either way, the operator behind the panel is often healthy, and a manual open command proves it inside the first few checks.',
      'The usual repair is to the access side: a telephone entry board, a keypad, a card reader, a corrupted directory or a loop detector. Those parts are generally available, and DoorKing’s cellular kit replaces a dead analogue line without replacing the panel. When the operator is at fault, older DoorKing gearboxes and boards are normally repairable too. We service gates in Canyon Creek, Prairie Creek and Cottonwood Heights, and corporate entrances off Campbell Road and the President George Bush Turnpike.',
    ],
    faqs: [
      { q: 'Residents in our Richardson community can call in from the box but the gate will not open. Where is the fault?', a: 'If the panel connects calls, the telephone side is working, so the fault sits between the panel’s relay and the operator, or in the operator itself. It may be a relay output, wiring, a loop holding the gate, or an operator board. We trigger the gate manually first. If it opens, the operator is fine and the fault is upstream.' },
      { q: 'Can you take over programming on a DoorKing system when the previous management left no records?', a: 'Yes. On most DoorKing systems we can access the programming, rebuild the directory and access codes, and document everything so the next person is not starting blind. If codes that should have been revoked still open the gate, treat that as a security problem and fix it soon. Replacing working hardware to solve a records problem is rarely necessary.' },
    ],
  },
  'richardson/linear': {
    description: 'Linear gate opener repair in Richardson, TX: receivers, remotes, boards and limit switches on mature residential gates. Repair first, replacement last. Call.',
    intro: 'Linear operators show up on Richardson driveways and smaller commercial gates, often on equipment that has been working since the 1990s. Repair is nearly always the economical route.',
    local: [
      'Richardson is a city where gates were installed a generation ago and still work, and Linear units fit that pattern. They are conventional and well supported, so when one stops it is usually a single part. Receiver and remote failures are near the top of the city’s common issues, and on a Linear that is often the whole problem: the keypad still works, the remotes do not. Ageing control boards and limit switch drift account for most of the rest, with torque limiter slip and belt wear appearing on high-use units.',
      'Before suggesting anything bigger, we rule out the cheap faults. A receiver swap or reprogramming is one of the least expensive repairs in the trade. Boards, capacitors, limit switches and receivers are readily available for SWR, SWC, SLR and related Linear models, and remotes and keypads are commonly carried. On a battery-backed unit that quits after a few cycles in an outage, the battery is tired. We work across Heights Park, Canyon Creek and Breckinridge, and on business gates off Coit Road.',
    ],
    faqs: [
      { q: 'My Linear gate in Richardson stops partway since last summer. Is it the motor?', a: 'More often it is limit switch drift or torque limiter slip. Limits on older units creep over thousands of cycles, so the gate stops short of where it used to. A slipping torque limiter or a worn drive belt stalls the gate when it meets resistance. We check the gate moves freely by hand, then adjust or replace the limits and inspect the belt.' },
      { q: 'Is it worth replacing a working Linear with a newer brand just because it is old?', a: 'Usually not. Linear parts remain readily available, and age alone is not a reason to replace a Richardson operator that still runs well. If the gearbox is worn or the unit is wrong for the gate, a replacement makes sense, and we would size it to the gate. Otherwise a board, limits or receiver keeps it going at a fraction of the cost.' },
    ],
  },
  'aledo/liftmaster': {
    description: 'LiftMaster gate repair in Aledo, TX for acreage driveways in Bear Creek and the Parks of Aledo. Posts, boards and DC batteries checked to the part. Call.',
    intro: 'LiftMaster is fitted to a lot of the gated driveways around Aledo, from estate swings on large lots to slides on graded drives. Most faults here come down to one part, or to the post.',
    local: [
      'Aledo sits in the Clear Fork valley, and lower ground near the creeks holds clay and moisture. A gate post set there shifts between wet and dry spells, so a LiftMaster swing that ran cleanly in April can be fighting a dropped leaf by August. On a DC unit such as the LA400 or CSW24UL that extra load shows up as battery and charging faults or limit drift, and the owner reads it as a dying opener. Storms add a second pattern: surge damage to control boards, which this valley sees often enough to plan around.',
      'Our order of work on an Aledo LiftMaster is post and alignment, then power, then electronics. If the leaf moves freely by hand, a board, battery, receiver or set of limits usually puts it right, and those parts are commonly stocked. If it binds, the fix is at the hinge or footing, and no new operator would cure it. Owners in Villages of Aledo and Aledo Heights often add smartphone access too, which means checking Wi-Fi reach and power at the end of a long drive off FM 1187.',
    ],
    faqs: [
      { q: 'Our LiftMaster gate near a creek in Aledo started sticking in late summer. Why?', a: 'Clay near creeks and low ground swells when wet and shrinks when dry, and a gate post moves with it. Once the post leans, the leaf drags and the operator works harder, so you get stalls, reversals or a gate that stops short. Adjusting the opener alone does not last. We check the post and hinges, correct the alignment, then reset limits and force.' },
      { q: 'Can you add phone app control to an existing LiftMaster in Aledo?', a: 'Often, yes, depending on the model and what it supports. The practical issue on Aledo acreage is usually not the operator but the connection: Wi-Fi rarely reaches a gate at the end of a long drive, and camera intercoms need steady power. We look at signal and power at the gate first, so the smart access works reliably rather than dropping out.' },
    ],
  },
  'aledo/elite': {
    description: 'Elite gate opener repair in Aledo, TX: capacitors, boards and limits on heavy estate and community gates, plus surge damage after storms. Call us.',
    intro: 'Elite operators in Aledo tend to be on the heavier jobs: decorative estate swings and community entrance gates. On these AC units the board, capacitor and limit switches are what wear.',
    local: [
      'Heavy decorative leaves are a theme in Aledo, and they wear hinges long before they wear an Elite operator. When the hinge goes, the gate gets harder to move and the operator’s start capacitor and board carry the extra effort. That is why a humming, struggling Elite on an estate swing so often has a mechanical cause behind an electrical symptom. The valley’s storms add surge-damaged boards to the list, and community entrance swings serving several homes pick up limit drift from sheer cycle count.',
      'Repair is the normal outcome. Boards, capacitors and limit switches for Elite units are commonly carried, and a current CSW200UL swing has the same repair-first logic as the older Miracle One. What matters is model identification, because Elite boards and error codes vary between generations. On a heavy leaf in Bear Creek or Rolling Hills we replace worn hinges along with the electrical part, so the new capacitor is not working against the same drag. Surge protection is worth adding while the cover is off.',
    ],
    faqs: [
      { q: 'The Elite on our Aledo estate gate stopped after a thunderstorm. Is the operator ruined?', a: 'Rarely. Storm damage on an Elite is usually confined to the control board, sometimes the capacitor, and both are replaceable without touching the motor or gearbox. We test the board and incoming power, confirm what was damaged, and replace it. Adding surge protection at the same time is worth it in Aledo, since the next storm will find the same path.' },
      { q: 'Should a heavy decorative gate in Aledo be on an Elite or something bigger?', a: 'That depends on the leaf weight and length against the operator’s rating, not on the brand. A CSW200UL is a commercial swing operator and handles a lot, but an under-rated unit on a heavy leaf will keep wearing hinges and boards. We weigh up the gate, check the hinges and tell you whether the current operator is a fair match.' },
    ],
  },
  'aledo/viking': {
    description: 'Viking gate repair in Aledo, TX for DC estate gates on long acreage drives. Battery, solar charging and limits tested before the motor. Call today.',
    intro: 'Viking operators in Aledo are usually on long acreage driveways and heavy estate gates, many running DC with battery storage. When they slow down, the power side is the first suspect.',
    local: [
      'The acreage subdivisions around Aledo put the gate a long way from the house, and that suits a DC Viking with battery storage and solar or trickle charging. It also means the most common Viking fault here is a power fault. A battery near the end of its life, a panel shaded by growing trees, or a charge controller that has failed all make a Viking look tired. Add a heavy leaf on a post that has shifted in creek-side clay, and the drive train takes load it was never meant to carry.',
      'Our Viking checks in Aledo start with a load test on the battery and a look at charge input, then the gate by hand, then the operator. Swing models such as the R-6, F-1 and G-5 use mechanical limits that drift and are simple to reset. Batteries, boards, limit hardware and solar components are generally available, while gearbox and chain parts are a short order. We cover estate gates in the Parks of Aledo and Villages of Aledo and out along FM 5 and Bailey Ranch Road.',
    ],
    faqs: [
      { q: 'Our Viking gate in Aledo opens fine in the morning and fails at night. What is wrong?', a: 'That is a classic battery or charging pattern on a DC operator. A worn battery can show a near-normal voltage at rest and still collapse once the motor pulls current, especially after a day of cycles. A shaded panel or failed charge controller gives the same symptom. We test the battery under load and check the charging before anything mechanical is touched.' },
      { q: 'Is a Viking worth repairing, or should we switch brands?', a: 'Viking operators are built for heavy gates and parts are generally available, so repair is usually the better choice. The usual faults are battery, limits, board or a gate that has started to bind. Switching brands would not fix a dragging hinge or a moving post. If the gearbox is genuinely worn, we will say so and price the repair against a replacement.' },
    ],
  },
  'aledo/us-automatic': {
    description: 'US Automatic gate repair in Aledo, TX for solar and AC-charged Patriot and Ranger operators on acreage drives. Battery tested under load first. Call.',
    intro: 'US Automatic runs on a lot of Aledo’s acreage gates, solar or AC charged. Every one moves the gate from its battery, so that is where diagnosis starts.',
    local: [
      'A US Automatic operator never runs its motor from mains power. Solar or AC charged, the battery does the work, and in Aledo’s summer heat that battery is a consumable. A tired one mimics a failed operator exactly: slow travel, a stall halfway, a gate that opens but will not close. On a long drive in the Clear Fork valley there are two more culprits. Long DC runs lose voltage, and a post leaning in wet clay makes every cycle cost more battery. Storm surge can also take out a board or charge controller.',
      'Most US Automatic repairs in Aledo are a battery, a charge controller, a panel cleaned or re-aimed, or a board after lightning. Patriot units have limit switches that drift; Ranger boards hold limit settings that can be reset. We test the battery under load rather than trusting a resting voltage, and check the charge path before replacing anything. Where a solar system is undersized for the traffic, the answer is a bigger battery or better-sited panel. We cover properties around Bear Creek, Rolling Hills and the I-20 side of town.',
    ],
    faqs: [
      { q: 'Why does our solar US Automatic in Aledo struggle every winter?', a: 'Shorter days and a lower sun cut panel output, and cold reduces how much a lead-acid battery can deliver. Both move against you at once. A system that was only just adequate in July will fail in January. That is a sizing problem, not a broken operator, and the fix is a larger battery, a better-placed or larger panel, or both.' },
      { q: 'Can our Aledo gate be switched from solar to AC charging?', a: 'Often, yes. US Automatic operators run from the battery either way, and AC charging simply replaces the panel with a low-voltage charger fed from an outlet. The charger lead can run a good distance, so mains voltage does not need to reach the gate. If there is no practical outlet, resizing the solar is usually simpler, and we will say which suits your property.' },
    ],
  },
  'cedar-hill/liftmaster': {
    description: 'LiftMaster gate opener repair in Cedar Hill, TX for ridge-top gates bent by wind. Arms, brackets, boards and limits repaired to the part. Call us.',
    intro: 'LiftMaster gates on the Cedar Hill escarpment take wind loads a sheltered gate never sees. The damage is usually to arms, brackets and limits, not the operator itself.',
    local: [
      'High ground is what makes Cedar Hill different. Along the ridge near Joe Pool Lake and the state park, a solid leaf works like a sail, and a gust can force it past its stops overnight. A LiftMaster arm or bracket bent that way leaves the gate out of true by morning, and the operator then fights it, drifting limits or tripping its safety reversal. Shallow limestone limits how deep a footing can go, so a post that loosens under wind cannot always be fixed by digging deeper.',
      'Once the gate is square again, the LiftMaster usually needs only modest work: a new arm or bracket, reset limits, and a check of the board and photo-eyes. On DC models like the LA412 or RSW12UL we also test the battery, since a struggling gate drains it. We reset obstruction force for the actual leaf rather than turning it up to mask the wind. Owners in Lake Ridge and The Bluffs on exposed frontages may want an operator rated for more load than the original.',
    ],
    faqs: [
      { q: 'Our LiftMaster gate in Cedar Hill was out of line one morning with no sign of a hit. What happened?', a: 'On an exposed Cedar Hill frontage, the usual answer is wind. A gust can push a closed leaf past its stops, bending the operator arm or bracket without anyone touching it. The gate then sits out of true and the operator struggles. We straighten or replace the arm and bracket, check the post and stops, and reset limits and force.' },
      { q: 'Can a LiftMaster be set up to cope better with Cedar Hill wind?', a: 'Partly. Good positive stops, sound brackets and a correctly rated operator help a great deal, and on a solid leaf an operator with more capacity is worth considering. The gate design matters too, since an open iron pattern catches far less wind than a solid panel. What does not help is raising force settings to overpower gusts, which removes the safety margin.' },
    ],
  },
  'cedar-hill/elite': {
    description: 'Elite gate repair in Cedar Hill, TX: capacitors, boards and limits on ornamental iron swings and slides exposed to ridge wind. Repair-first service. Call.',
    intro: 'Elite operators in Cedar Hill drive ornamental swings and driveway slides on some of the most exposed ground in the metroplex. Wind stress shows up in the arms, the limits and the board.',
    local: [
      'Cedar Hill sits on a limestone escarpment, and gates along it face weather with nothing upwind. An Elite on an ornamental iron swing is better off than one on a solid panel, but a gate forced past its stops still bends brackets and knocks limit switches out of position. Each time the leaf is pushed back against the motor, the start capacitor and control board absorb the shock. On slide gates the wind loads the track and rollers instead, which shows as chain and sprocket wear on the Elite drive.',
      'The Elite parts that fail most, the board, capacitor and limit switches, are commonly carried, so repair is quick to scope. Before fitting them we check the stops, brackets and posts, because footings in Cedar Hill’s shallow rock have to be keyed in rather than simply deepened. We also confirm the model, since an SL595 slide and a Miracle One swing carry different boards. We see this work on gates in High Pointe Village and Wooded Creek Estates and along Cedar Hill Road.',
    ],
    faqs: [
      { q: 'Why does the capacitor on our Cedar Hill Elite keep failing?', a: 'A capacitor that fails repeatedly is usually reporting extra load. On an exposed gate that can come from wind pushing the leaf against the operator, a bent bracket, or hinges and rollers that have worn and make the motor strain on every start. We check the gate mechanically before fitting another capacitor, so the replacement is not facing the same conditions that killed the last one.' },
      { q: 'Our Elite slide gate grinds since a storm. What should we check?', a: 'Grinding on an Elite slide usually means chain, sprocket or roller wear, and a storm that loaded the gate can bring it on suddenly. Catching it early keeps the repair to a chain and sprocket. Left running it can damage the gearbox. We inspect the track and rollers too, since debris or a bent track after high wind causes the same noise.' },
    ],
  },
  'cedar-hill/all-o-matic': {
    description: 'All-O-Matic gate repair in Cedar Hill, TX: clutch, limits, chains and boards on swing and slide gates on the escarpment. No needless replacements. Call.',
    intro: 'All-O-Matic operators in Cedar Hill are heavily built, which helps on exposed ridge frontages. When one stalls or drifts, the fault is almost always a single replaceable part.',
    local: [
      'Wind is the defining load on Cedar Hill gates, and it is hard on any operator’s protective systems. An All-O-Matic SW-300 or SW-350 swing uses a torque limiter or internal clutch, and when gusts drive the leaf back against the arm, that protection slips, exactly as designed. Owners see a gate that stalls or reverses and assume the clutch has failed. More often the gate has been pushed out of square, a bracket has bent, or a ranch entrance swing has started to bind on its hinges.',
      'All-O-Matic repairs are usually small: limit cams reset, a chain replaced, a clutch adjusted after the gate is moving freely, or a control board relay. These parts are readily available. We never tighten a clutch or turn down reversing sensitivity to force a binding gate, because that hides the fault and removes the safety margin. On an SL-150 slide off FM 1382 Belt Line Road, or a ranch swing near Cedar Valley Estates, the first step is moving the gate by hand.',
    ],
    faqs: [
      { q: 'Our All-O-Matic swing in Cedar Hill stalls when it is windy. Is the clutch worn?', a: 'Usually the clutch is doing its job. The torque limiter on SW-300 and SW-350 swing operators slips when the leaf meets resistance, and a strong headwind on a solid gate is resistance. If it also stalls on calm days, the gate is probably binding at a hinge or bracket. We check the gate by hand before adjusting the clutch, never the other way round.' },
      { q: 'Are parts still available for an older All-O-Matic?', a: 'Yes. All-O-Matic is still in production and supports its equipment well. Limit switches, clutches, chains and sprockets are readily available and commonly carried, and control boards are usually a short order at most. These operators often run twenty years or more, so in Cedar Hill we judge them on gearbox condition rather than age.' },
    ],
  },
  'cedar-hill/doorking': {
    description: 'DoorKing gate repair in Cedar Hill, TX: entry panels, keypads, loops and operators on gated entrances along the escarpment. One visit for both. Call us.',
    intro: 'DoorKing systems in Cedar Hill pair an entry panel or keypad with a gate operator, often on exposed frontages near Joe Pool Lake. Storms test both halves.',
    local: [
      'On high, open ground the long cable runs behind a DoorKing system are exposed to storm surge, and a damaged controller or keypad after a stormy spring is a familiar Cedar Hill fault. At the same time, the gate itself is taking wind loads that bend arms and knock it out of square. So when a DoorKing entrance stops working here, either half could be at fault. A manual open command tells us quickly whether the operator responds, which separates an access problem from a mechanical one.',
      'On the access side the usual repairs are a keypad, telephone entry board, loop detector or reprogramming, all generally available. On the operator, a 6300 swing or 9150 slide is normally repairable with limits, a board or gearbox work. Fitting surge protection during the repair is worth doing here rather than after the next storm. We service DoorKing entrances near Lake Ridge and The Bluffs, along Pleasant Run Road, and on ranch entrances on the south side of the city.',
    ],
    faqs: [
      { q: 'Our DoorKing keypad in Cedar Hill went dead after a storm. Does the system need replacing?', a: 'Rarely. Storm surge travels along the cable runs to the keypad and controller, and the damage is usually limited to one board or device. We test the keypad, controller and operator separately, replace what was damaged, and recommend surge protection so the same path is not open next time. DoorKing supports its equipment well, so a full replacement is seldom needed.' },
      { q: 'Can a DoorKing barrier arm or gate on our Cedar Hill property use cellular instead of a phone line?', a: 'For telephone entry, yes. DoorKing’s cellular kit is listed as backward compatible with older DKS systems and replaces an analogue line, which suits sites where the copper line has gone or service changed to VoIP. If the panel is already cellular, we confirm it is working, because some early 3G boards stopped when those networks shut down.' },
    ],
  },
  'desoto/liftmaster': {
    description: 'LiftMaster gate repair in DeSoto, TX on Eagle Ford shale: post movement, alignment, limits and DC batteries checked to the faulty part. Call us today.',
    intro: 'DeSoto ground moves more than most of the metroplex, and a LiftMaster gate shows it early. Many calls here start as an opener fault and end as an alignment job.',
    local: [
      'Southern Dallas County sits on Eagle Ford shale, and in DeSoto that soil pushes gate posts around faster than the Blackland clay to the north. A post carrying a heavy swing leaf is a lever, so even small movement drops the gate and drags it across a driveway slab that may itself be cracking and stepping. A LiftMaster operator pulling against that drag drifts off its limits, trips its photo-eyes or safety reversal, and on DC models such as the LA400 drains its battery faster than it should.',
      'The repair has two halves. Alignment comes first: rehanging the leaf, correcting the post, and sometimes rebedding a footing for this soil rather than a generic spec. Then the LiftMaster itself, which usually needs no more than reset limits, a board, a battery or photo-eye work. We are straight with owners in Westmoreland Estates and Ten Mile Creek Estates that a gate here needs checking on a cycle. A LiftMaster gate opener replacement is rarely what fixes it.',
    ],
    faqs: [
      { q: 'Why does our LiftMaster gate in DeSoto need realigning so often?', a: 'Because the ground under it moves. Eagle Ford shale shifts more aggressively than the clay in the northern suburbs, and a gate post carrying a heavy leaf shows that movement sooner than a house does. It is not a sign of poor work. Sizing and bedding the footing for this soil helps, and so does an alignment check before the gate starts to fail.' },
      { q: 'Our LiftMaster LA400 stopped running in a power cut. Is the battery backup broken?', a: 'Possibly, but check the load too. The LA400 is a DC operator with battery backup, and a battery near the end of its life runs out after a few cycles. In DeSoto, a gate that drags because its post has moved uses more battery per cycle, so the backup fails sooner. We load test the battery and check the gate moves freely.' },
    ],
  },
  'desoto/elite': {
    description: 'Elite gate opener repair in DeSoto, TX: boards, capacitors and limits on heavy ornamental swings and community slides on moving shale ground. Call us.',
    intro: 'Elite operators in DeSoto are often on heavy ornamental iron and community slides. On ground this active, wear on the gate tends to show up as electrical faults in the operator.',
    local: [
      'Heavy ornamental leaves amplify ground movement, and DeSoto’s Eagle Ford shale gives them plenty to amplify. As a post shifts, the leaf drops and binds, and an Elite AC operator answers that load with the classic symptoms: a hum at start that points at the capacitor, a board that fails sooner than it should, or limits that no longer match where the gate actually stops. Community slides have the same problem in a different form, with a track or slab moving under the gate and wearing the chain and sprockets.',
      'We repair Elite operators in DeSoto rather than replace them, because the board, capacitor and limit switches are inexpensive next to a new unit and commonly carried. The fix only lasts if the gate is aligned, so on a heavy swing in Regents Park or Thorntree we correct the hang first. On older models such as the SL585 or Miracle One we confirm the board layout before ordering, since Elite generations differ. Chains and sprockets for Elite slides are readily available.',
    ],
    faqs: [
      { q: 'Our Elite gate in DeSoto grinds and stops halfway. Is it the motor?', a: 'Usually not. On a slide, grinding points at chain, sprocket or roller wear, often made worse by a track that has shifted with the ground. On a swing, a mid-travel stall is often the leaf binding after post movement. Either way we check the gate mechanically, then the capacitor, board and limits. The motor is rarely the failed part.' },
      { q: 'Is a newer LiftMaster Elite Series operator better for DeSoto ground?', a: 'A new operator does not stop the ground moving, so it will not fix alignment on its own. Where an older Elite is genuinely worn out, a current CSW200UL swing or SL3000UL slide is a sound choice for heavy gates. Pair it with a footing sized for Eagle Ford shale and an alignment check on a regular cycle.' },
    ],
  },
  'desoto/doorking': {
    description: 'DoorKing gate repair in DeSoto, TX for community slides and estate entrances: telephone entry, keypads, loops and the operator in a single visit. Call.',
    intro: 'DoorKing in DeSoto usually means a community slide with telephone entry, or an estate entrance with a keypad. The entry panel and the gate both need checking when it stops.',
    local: [
      'A DoorKing entrance has two ways to fail, and DeSoto adds a third. The entry panel can lose its directory or dial-out, the operator can wear, and the shale under the drive can crack the slab and disturb the vehicle loops cut into it. A loop detector fault caused by a cracked or stepping driveway is a real possibility here, and it presents as a gate that will not close or will not open for exit traffic. Gate alignment needing correction more often than on the north side adds limit drift to the list.',
      'The approach is to prove which half is at fault before replacing anything. A manual open command tells us whether the operator responds; a loop test shows whether the slab has damaged the loop wire. Telephone entry boards, keypads and readers are generally available, and a 9150 slide or 6300 swing can usually be repaired at the board, limits or gearbox. We work on DoorKing entrances in Westmoreland Estates, near Hampton Road and along Beltline Road.',
    ],
    faqs: [
      { q: 'Our DoorKing gate in DeSoto will not close and the operator seems fine. What is holding it?', a: 'A gate that stays open is often seeing a vehicle that is not there. On a moving shale slab the loop wire cut into the driveway can crack or short, and a damaged loop or failing detector holds the gate open. A photo-eye knocked out of line does the same. We test the loops and safety devices before suspecting the operator.' },
      { q: 'Can you program a DoorKing telephone entry system for our DeSoto community?', a: 'Yes: directory entries, access codes, card credentials and dial-out settings, along with physical repairs to the panel. We also document the programming so the board or management company has a record. If the system has moved to VoIP and stopped calling out, DoorKing’s cellular kit is usually the fix rather than a new panel.' },
    ],
  },
  'desoto/all-o-matic': {
    description: 'All-O-Matic gate repair in DeSoto, TX: limits, clutch, chains and relays on estate swings and community slides on Eagle Ford shale. Repair first. Call us.',
    intro: 'All-O-Matic operators in DeSoto are simple and heavily built. When one starts stalling or stopping short here, the cause is usually the gate and the ground, not the operator.',
    local: [
      'Ground movement in DeSoto produces a very specific All-O-Matic complaint: the gate stalls and reverses partway. On an SL-150 slide the gearbox clutch slips when the gate meets resistance, and on an SL-100 the board’s reversing device does the same job. Both are working correctly when they stop a gate that has started binding because its post has moved or its slab has stepped. Limit nuts that have crept over thousands of cycles add the other common call, a gate that no longer closes properly.',
      'Most All-O-Matic repairs here are adjustments and small parts: limits reset, a chain and sprocket replaced, a clutch set correctly once the gate moves freely, a relay on the control board. Those parts are readily available. What we will not do is tighten the clutch to push a binding gate, because that hides the alignment fault and removes the safety margin. On an SW-300 estate swing in Ten Mile Creek Estates or a community slide off Pleasant Run Road, we start with the gate by hand.',
    ],
    faqs: [
      { q: 'Our All-O-Matic in DeSoto stalls and reverses partway. Has the clutch gone?', a: 'Usually the clutch or reversing device is protecting the operator from a gate that has become hard to move. In DeSoto that is often a post shifting on the shale, a sagging leaf, or a slab that has stepped under a slide. We check the gate by hand first. Adjusting the clutch before fixing the bind just moves the failure somewhere more expensive.' },
      { q: 'How long should an All-O-Matic last on a DeSoto gate?', a: 'These operators often run twenty years or more with basic servicing, and age alone is not a reason to replace one. What shortens their life here is a gate left running out of alignment, which loads the chain, sprockets and gearbox. Regular alignment checks on this soil do more for an All-O-Matic than anything else.' },
    ],
  },
  'haltom-city/liftmaster': {
    description: 'LiftMaster gate repair in Haltom City, TX for gates in the Big Fossil Creek drainage: flood-damaged boards, wet cable runs and silted tracks. Call today.',
    intro: 'In parts of Haltom City a LiftMaster has to survive flood water, not just wear. Boards, cable runs and slide tracks are where the creek leaves its mark.',
    local: [
      'Big Fossil Creek runs through Haltom City, and properties in its drainage see sudden immersion followed by weeks of drying. That cycle is harder on a LiftMaster than constant damp. A control board mounted low can sit in water for an afternoon and fail days later. Buried cable runs saturate along their length, so photo-eyes and safety loops start throwing faults. Slide gates on operators like the RSL12UL or CSL24UL get tracks packed with creek silt that sets hard once it dries, and the operator strains and stops.',
      'After a wet spell we test the board, the cable runs and the safety devices, clean the track and check the rollers. The LiftMaster itself is often fine once the water damage is dealt with; a board, a battery or photo-eye wiring is typical. Mounting height is the lasting fix, and raising a control box above the likely water line is worth discussing during the repair. We see this along the creek near Fossil Springs and Diamond Oaks, and on commercial slides off Belknap Street.',
    ],
    faqs: [
      { q: 'Our LiftMaster in Haltom City worked after the flood, then died a few days later. Why?', a: 'Water and silt often do their damage slowly. A board that sat in flood water can keep working until corrosion finishes it, and saturated cable runs can fail once they start drying. We test the board, wiring and safety devices rather than assuming the gate survived, and replace only what was damaged. Raising the control box helps prevent a repeat.' },
      { q: 'Can a LiftMaster slide gate in Haltom City cope with silt in the track?', a: 'It can if the track is kept clear. Creek silt sets hard and forces the operator to drag the gate, which wears rollers and trips the safety reversal. We clean the track, check the rollers and gate for damage, and reset the limits. On a gate that floods regularly, checking the track after every high water saves the operator.' },
    ],
  },
  'haltom-city/doorking': {
    description: 'DoorKing gate repair in Haltom City, TX: entry panels, loops and operators on commercial slides and homes near Big Fossil Creek. Water damage checked. Call.',
    intro: 'DoorKing systems in Haltom City run on commercial slides and some residential entrances. Where flood water reaches the loops or cable runs, the access side fails first.',
    local: [
      'A DoorKing installation depends on wiring: loops cut into the drive, cable to the entry panel or keypad, and a link to the operator. In Haltom City’s flood corridor those runs get saturated after heavy rain, and a soaked loop or corroded connection makes the whole system misbehave. A gate that will not close, an entry panel that rings but does not open, or a keypad that works one day and not the next can all trace back to water rather than to a failed board.',
      'Diagnosis starts by splitting the system. If the operator answers a manual command, the fault is in the access side, so we test loops, panel outputs and wiring. Telephone entry boards, keypads and loop detectors are generally available, and on commercial 9150 slides a board or gearbox repair is usually enough. We also look for corrosion from repeated wetting, which is more damaging than steady damp. We work along Belknap Street, Denton Highway US-377 and near Haltom Acres.',
    ],
    faqs: [
      { q: 'After heavy rain our DoorKing gate in Haltom City stays open. What is wrong?', a: 'A loop detector seeing a vehicle that is not there is the usual cause after rain. Water in a damaged loop or a saturated lead-in cable changes the loop’s reading, and the detector holds the gate open. We test the loops and wiring, repair or replace the damaged loop, and check the detector. The operator itself is often fine.' },
      { q: 'Is the DoorKing at our Haltom City business worth repairing after a flood?', a: 'Usually, yes. Flood damage tends to be limited to specific boards, connections and cable runs, and DoorKing parts are generally available. We test each part of the system, replace what water ruined, and suggest mounting changes where the operator or panel sits low. Full system replacement is rarely necessary unless the operator gearbox itself was submerged and corroded.' },
    ],
  },
  'haltom-city/viking': {
    description: 'Viking gate operator repair in Haltom City, TX: batteries, boards, limits and loops on heavy gates in the Big Fossil Creek flood corridor. Call us today.',
    intro: 'Viking operators in Haltom City are usually on heavy residential or commercial gates. Near the creek, their DC electronics and batteries need checking after every wet spell.',
    local: [
      'Viking specifies its operators for heavy gates, and many of them run DC with battery storage. In Haltom City’s drainage corridor that combination has a weak point: batteries, boards and connections mounted low enough to take flood water. Repeated wetting corrodes terminals, and a green or powdery terminal adds resistance exactly where a DC system can least afford it. The gate gets slower, then stops, and it looks like a motor fault. Loop detector faults from saturated cable runs are the other Viking call here.',
      'We check power first on a Viking: battery under load, terminals, and charge input. Then the gate by hand, because creek silt in a slide track or a heavy leaf binding loads the drive train. Swing units such as the T-21 and G-5 use mechanical limits that can drift; K-2 slides use digital limits. Batteries, boards and limit hardware are generally available. We work near Big Fossil Creek, around Meadow Oaks and Browning Heights, and on commercial gates by Loop 820.',
    ],
    faqs: [
      { q: 'Our Viking gate in Haltom City got slower after the creek flooded. Is the motor going?', a: 'Check the power system first. On a DC Viking, flood water often corrodes battery terminals and connections, and the battery itself may have been damaged. Either one reduces the current reaching the motor and makes the gate slow. We clean or replace terminals, load test the battery, and inspect the board before considering the drive train.' },
      { q: 'Should a Viking operator in Haltom City be mounted higher?', a: 'Where the property is in the flood corridor, yes, it is worth considering. A control box set a few inches higher can survive a season that ruins one at ankle level. The work depends on the gate layout and operator type, and it is best done during a repair rather than after another flood.' },
    ],
  },
  'haltom-city/all-o-matic': {
    description: 'All-O-Matic gate repair in Haltom City, TX: chains, sprockets, limits and relays on commercial slides and home gates near Big Fossil Creek. Call us now.',
    intro: 'All-O-Matic operators in Haltom City drive commercial slides and residential gates, including some in the creek drainage. Silt, water and chain wear are what bring them to a stop.',
    local: [
      'An All-O-Matic is mechanically simple, and in Haltom City the faults are usually mechanical too. Creek silt packed into a slide track makes the gate hard to move, and the SL-150’s gearbox clutch slips or the SL-100’s reversing device stops the travel. Owners think the operator has failed. In fact it is protecting itself. Repeated wetting also rusts chains and sprockets, so stretch and tooth wear come early, and a control board relay mounted too low can fail after taking water.',
      'The repairs are small: clean the track, replace a chain and sprocket, reset limit nuts, or replace a board relay. These parts are readily available and All-O-Matic supports its equipment well. We do not tighten a clutch to force a silted gate, because that hides the cause. On commercial slides along Broadway Avenue or Belknap Street, and on yard gates near Diamond Oaks, a full replacement is rarely the right recommendation.',
    ],
    faqs: [
      { q: 'Our All-O-Matic slide in Haltom City stops and reverses since the last flood. What failed?', a: 'Probably nothing in the operator. Silt from the creek sets hard in a slide track, the gate drags, and the clutch or reversing device stops it, as designed. We clean the track, check the rollers and chain for damage, and reset the limits. If the board took water, the relay or board may need replacing too.' },
      { q: 'Is a rusty chain on our All-O-Matic worth replacing on its own?', a: 'Yes, and sooner is cheaper. A rusted or stretched chain rides high on the sprocket, wears the teeth and eventually jumps. Replacing the chain alone is inexpensive. Leaving it running until it damages the sprocket and gearbox is not. Haltom City gates that see repeated wetting benefit from a chain check whenever the gate is serviced.' },
    ],
  },
  'lewisville/liftmaster': {
    description: 'LiftMaster gate repair in Lewisville, TX for apartment slides on I-35E, community gates and lake-side driveway swings. Chains, rollers and boards. Call.',
    intro: 'LiftMaster gates in Lewisville range from busy apartment slides near I-35E to private swings out toward the lake. Each type wears a different set of parts.',
    local: [
      'Lewisville grew in layers, and the LiftMaster work follows them. Along I-35E, apartment and community slides run hundreds of cycles a day, and chains, rollers and limit switches wear on that count rather than on age. Out toward FM 407 and Lake Lewisville, lots get larger and the gates become private driveway swings, where clay-soil post movement on older drives is the more common cause of trouble. A commercial slide in an older apartment complex and a residential LA400 swing on a lake lot need different parts on the van.',
      'On a high-cycle LiftMaster slide such as the CSL24UL or SL3000UL, the repair is normally a chain, rollers, limits or a board, with a check that the operator suits the traffic it now carries. On a residential swing near Castle Hills or Valley Vista, it is usually alignment plus a battery, receiver or limit reset. We ask which part of Lewisville you are in when you call, because it tells us what is most likely to have failed and which parts to bring.',
    ],
    faqs: [
      { q: 'Our Lewisville apartment gate runs a LiftMaster and keeps wearing out chains. Is it the wrong operator?', a: 'Possibly. A slide that was specified for a quieter building and now runs hundreds of cycles a day wears chains and rollers far faster. Before replacing it, we check rollers, track and gate alignment, since a dragging gate wears parts on its own. If the traffic has outgrown the operator, a heavier duty LiftMaster slide is the lasting fix.' },
      { q: 'The battery backup on our Lewisville LiftMaster swing does not last long. Why?', a: 'Backup batteries are consumables, and a tired one gives only a few cycles in a power cut. A gate that drags because its post has moved in clay also draws more power on each run. We test the battery under load, check the leaf swings freely, and replace the battery if it is worn.' },
    ],
  },
  'lewisville/doorking': {
    description: 'DoorKing gate repair in Lewisville, TX for apartment and HOA entrances: telephone entry boards, keypads, loops and high-cycle operators. Call us today.',
    intro: 'Lewisville’s apartment and community entrances often pair DoorKing telephone entry with a busy slide operator. When residents cannot get in, both are on the list.',
    local: [
      'Telephone entry boards on ageing apartment systems are one of Lewisville’s most common gate problems, and many of those boards are DoorKing. A thirty-year-old complex along I-35E may still have a panel built for analogue lines, and a change of phone provider can stop it dialling out months later. Meanwhile the slide operator behind it is running more cycles than it was specified for, with gearbox, chain and roller wear building up. A gate that will not open could be either.',
      'The repair usually lands on one side. On access, it is a telephone entry board, a keypad, a corrupted directory, or a cellular kit to replace a dead line, all generally available. On the operator, it is a board, limits, chain and rollers, or gearbox work on a 9150 slide. Where a management change left no records, we rebuild and document the programming. We work on entrances near Old Town Lewisville, Arbor Valley and Garden Ridge, and off SH 121 Business.',
    ],
    faqs: [
      { q: 'Our Lewisville apartment DoorKing panel rings residents but the gate does not move. What is wrong?', a: 'If calls connect, the telephone side is working, so the fault is in the relay output, the wiring to the operator, or the operator itself. On a busy entrance, the operator board or gearbox is a common failure. We trigger the gate manually. If it opens, the issue is in the panel output or wiring; if not, it is the operator.' },
      { q: 'Can an old DoorKing gearbox in Lewisville be repaired rather than replaced?', a: 'Often, yes. Gearbox wear on high-cycle apartment and HOA entrances is a known DoorKing failure, and DoorKing supports its equipment well. Whether repair makes sense depends on how far the wear has gone and what else is worn. We open it, assess it and give you the repair and replacement options side by side.' },
    ],
  },
  'lewisville/elite': {
    description: 'Elite gate opener repair in Lewisville, TX: chains, rollers, boards and capacitors on high-cycle community slides and residential swings. Call us now.',
    intro: 'Elite operators in Lewisville work on community slides with heavy traffic and on residential swing gates. Chains and rollers wear fast on the first, alignment on the second.',
    local: [
      'Worn slide chains and rollers are a standard Lewisville community gate fault, and on an Elite slide they announce themselves with grinding. An Elite SL595 or SL3000UL running hundreds of cycles a day at an apartment entrance consumes chains and sprockets on cycle count, and the board takes the strain of constant starts. On residential swings in the older parts of town, it is clay-soil post movement that does the damage, and the Elite answers with a failing capacitor or drifting limit switches.',
      'Repair is the normal route. Boards, capacitors and limit switches are commonly carried, and chains, sprockets and rollers for Elite slides are readily available. We identify the model first, since older Elite units and current LiftMaster Elite Series models have different boards and codes. On a community slide off I-35E we check rollers and track along with the drive. On a swing near Valley Vista or Castle Hills, we correct the hang before replacing electrical parts.',
    ],
    faqs: [
      { q: 'Our Elite community slide in Lewisville grinds loudly. How urgent is it?', a: 'Fairly urgent. Grinding on an Elite slide means chain, sprocket or roller wear. Caught early it is a chain and sprocket. Left running on a busy entrance it can take out the gearbox, which costs much more. We inspect the chain, sprockets, rollers and track and replace the worn parts.' },
      { q: 'Is Elite the same as LiftMaster for parts?', a: 'Elite has been owned by Chamberlain, LiftMaster’s parent, since 2003, and current Elite commercial models are sold as LiftMaster Elite Series. Board layouts and error codes still vary between models, so parts are not interchangeable. We identify the exact unit on your Lewisville gate before ordering anything.' },
    ],
  },
  'lewisville/viking': {
    description: 'Viking gate repair in Lewisville, TX on heavy community slides and driveway swings: batteries, limits, boards and loops checked to the fault. Call us.',
    intro: 'Viking operators in Lewisville run some of the heavier community slides and private swing gates. Their DC power system is the first thing we test when one slows down.',
    local: [
      'Lewisville’s multifamily and HOA entrances put high cycle counts on any operator, and on a Viking that shows up in the power system and the drive train. A DC Viking runs from battery storage, and an entrance that cycles constantly works that battery hard. Gearbox and drive chain wear follow on heavy gates. Loop detector faults are common too. On the private lots near the lake, a heavy swing on a post that has moved in clay makes a Viking R-6 or T-21 fight its own gate.',
      'Diagnosis on a Viking goes power, gate, operator. We load test the battery, check charge input, then move the gate by hand. Swing limits are mechanical and can be reset or replaced. K-2 slides use digital limits; older ones without the position sensor can lose them in a total outage, and a re-learn fixes it. Batteries, boards and limit parts are generally available; gearbox and chain parts are a short order. We work near FM 407, Old Town and the I-35E corridor.',
    ],
    faqs: [
      { q: 'Our Viking community gate in Lewisville stopped after a power outage. What do we check?', a: 'First, whether it is an older K-2 slide without Viking’s position sensor, which can lose its limits after a total power failure. That needs a re-learn, not a part. Second, the battery, which may have drained during the outage. We confirm both, then test the safety devices and loops before putting the gate back in service.' },
      { q: 'Can a Viking keep up with a busy Lewisville entrance?', a: 'Viking builds operators for heavy gates, but traffic still has to match the unit and its power system. If the battery or drive train keeps wearing out early, the entrance may be cycling more than the original setup allowed. We look at traffic, the gate’s condition and the power supply, and suggest a fix that matches how the entrance is now used.' },
    ],
  },
  'parker/liftmaster': {
    description: 'LiftMaster gate repair in Parker, TX for two-acre estate gates near Southfork Ranch: new installs re-commissioned, older units repaired to the part. Call.',
    intro: 'Parker has new estate gates going in each year next to gates that have stood for twenty. A LiftMaster on each fails differently, so we start by asking how old the install is.',
    local: [
      'New luxury build-out in Parker means plenty of freshly installed LiftMaster gates, and the commonest fault on them is commissioning. Limits set before the leaf settled on its hinges, obstruction force tuned for a lighter gate than the one finally hung, a photo-eye aimed where the drive used to run. The result is a gate that stops short, reverses for no reason, or will not close. Older LiftMaster gates on the established streets have finished settling and fail on parts instead: boards, batteries, limit switches and receivers.',
      'For a new install, the fix is re-commissioning: setting limits and force for the gate as it now hangs, re-aiming safety devices, and confirming the operator is rated for the leaf. On a long ornamental leaf, an under-specified operator is a real risk, and a heavier swing like the CSW24UL may be needed. Older units in Southfork Estates or Hidden Creek Estates usually need a single part. Long runs on two-acre frontages along Dublin Road also mean we check voltage at the gate.',
    ],
    faqs: [
      { q: 'Our new LiftMaster gate in Parker keeps reversing. Is it faulty?', a: 'Usually not. On a new Parker install, reversals are often a commissioning issue: obstruction force set before the final leaf was hung, limits set before the hinges settled, or a safety sensor aimed at the wrong spot. We reset limits and force for the gate as it now hangs and re-align the sensors. If the operator is under-rated for the leaf, we will tell you.' },
      { q: 'Does a long run on a Parker estate frontage affect a LiftMaster?', a: 'It can. Long power and communication runs lose voltage, and a LiftMaster at the end of a long cable may receive less than it needs, causing slow travel or odd behaviour. We measure voltage at the gate under load and check cable gauge. Where the run is the problem, the fix is in the wiring, not the operator.' },
    ],
  },
  'parker/elite': {
    description: 'Elite gate opener repair in Parker, TX for long ornamental estate leaves: boards, capacitors and limit switches, plus setup on new installs. Call us now.',
    intro: 'Elite operators in Parker are mostly on long, heavy ornamental leaves at estate entrances. Whether the gate is new or twenty years old changes what goes wrong.',
    local: [
      'Parker’s two-acre lots carry wide entrances, and a long ornamental leaf is exactly the gate that shows when an operator is under-specified. An Elite asked to swing more than it was chosen for strains its start capacitor, cooks its board and wears its limit switches. Clay movement on wide entrances makes it worse as the leaf drops. On a new install near Southfork Ranch, the trouble is more often settings: limits and force tuned before the gate settled. On older estate gates the electrical parts have simply reached their time.',
      'We repair Elite operators here unless the unit is wrong for the gate. Boards, capacitors and limit switches are commonly carried, and a current CSW200UL swing is a capable commercial-grade unit for heavy leaves. We identify the exact Elite model first, since boards differ by generation. In Chaparral Estates or Rolling Ridge, we check the hinges and alignment on a long leaf before replacing a capacitor that would otherwise fail again.',
    ],
    faqs: [
      { q: 'Our Elite opener in Parker hums and the long gate barely moves. What failed?', a: 'Usually the start capacitor, which is one of the parts that fail most on AC Elite units. On a long ornamental leaf, a worn hinge or post movement adds load and shortens capacitor life. We test the capacitor and the board, check the gate swings freely by hand, and replace what has failed. If the operator is undersized for the leaf, we say so.' },
      { q: 'Can a newly built Parker home keep the Elite that came with the gate?', a: 'Usually. A new Elite operator rarely needs replacing; what it often needs is proper commissioning after the gate has settled. We reset limits and force, align the photo-eyes, and confirm the operator suits the weight and length of the leaf. That is a small job compared with a new operator.' },
    ],
  },
  'parker/all-o-matic': {
    description: 'All-O-Matic gate repair in Parker, TX for estate swings and ornamental slides: limits, clutch, chains and relays on wide entrances. No needless swaps. Call.',
    intro: 'All-O-Matic operators in Parker drive estate swings and ornamental iron slides on wide frontages. They are built simply, so a fault is usually one part, not the whole unit.',
    local: [
      'Wide entrances on Parker’s estate lots ask a lot of the gate itself, and clay movement under them is a recurring problem. When the leaf drops or a slide starts to bind, an All-O-Matic does what it was designed to do. The SW-300 and SW-350 swings use a torque limiter or internal clutch that slips; the SL-150 slide has a gearbox clutch. Owners report a gate that stops and reverses. On new installs the same symptom can come from limits and reversing sensitivity set for a lighter gate.',
      'Most All-O-Matic jobs in Parker are adjustments and small parts. Limits reset on the slide’s limit nuts or the swing’s cams, a chain and sprocket replaced, the electronic reversing device set correctly for the gate, a board relay. Parts are readily available. We do not turn up the clutch to push a binding gate. On ornamental slides in Dublin Meadows or estate swings off FM 1378, the gate gets checked by hand before anything is adjusted.',
    ],
    faqs: [
      { q: 'Our new All-O-Matic in Parker reverses for no reason. What is wrong?', a: 'On a new gate, the electronic reversing device may be set too sensitive for the actual leaf, or the limits may have been set before the gate settled. It can also be a gate that binds slightly at one point. We check the gate by hand, then set limits and sensitivity correctly, without turning the safety down to mask a mechanical fault.' },
      { q: 'Is it worth keeping an older All-O-Matic on a Parker estate gate?', a: 'Usually, yes. All-O-Matic operators are heavily built and often run twenty years or more. Limits, clutches, chains and boards account for most faults, and the parts are readily available. We judge the unit on gearbox condition and how well it suits the gate, not on its age.' },
    ],
  },
  'parker/us-automatic': {
    description: 'US Automatic gate repair in Parker, TX for solar and AC-charged estate and ranch gates on long frontages. Battery and charging tested first. Call us.',
    intro: 'US Automatic operators in Parker run ranch entrances and estate gates where mains power is a long way off. Every one moves the gate on battery, so that is where we start.',
    local: [
      'Two-acre frontages in Parker mean long power runs, and US Automatic suits them because the operator always runs from its battery. Solar or AC charged, the battery is the part that wears out, and Texas heat shortens its life. A worn battery looks like a failed operator: slow travel, stalls, a gate that opens and then refuses to close. Long DC runs drop voltage too. On a long ornamental leaf or ranch swing, a sagging gate or a post moving in clay draws extra current on every cycle and drains the battery faster.',
      'A typical US Automatic repair in Parker is a battery, a charge controller, an AC charger or its lead, or a panel cleaned and re-aimed. Patriot units have limit switches that drift; Ranger boards hold limit settings. We test the battery under load and check the whole charge path before suggesting more. If the system cannot keep up with traffic, we resize the battery or panel. We work on ranch entrances near Southfork Ranch, in Hidden Creek Estates, and along Parker Road.',
    ],
    faqs: [
      { q: 'Our US Automatic Ranger in Parker will open but not close. Is the board bad?', a: 'Maybe, but the battery comes first. A tired battery often has enough for one direction and not the next, especially on a heavy leaf. Limit settings on the Ranger board can also cause it. We load test the battery, check charging and the gate’s swing, then look at the board and limits.' },
      { q: 'Should a new Parker estate gate use solar or AC charging on a US Automatic?', a: 'Both use the same battery-run operator. AC charging replaces the panel with a low-voltage charger from an outlet, and the charger lead can run a long way, which suits many Parker frontages. Solar suits gates with no practical outlet and enough sun. We look at traffic, shade and outlet location before recommending one.' },
    ],
  },
  'southlake/liftmaster': {
    description: 'LiftMaster gate repair in Southlake, TX for 1990s estate gates and HOA entrances in Timarron and Carillon. Boards, chains and limits fixed to the part. Call.',
    intro: 'Much of Southlake was built in the 1990s, and so were its gates. LiftMaster operators from that era tend to fail on the same few parts, often within a year of their neighbours.',
    local: [
      'Southlake’s estate subdivisions went up in one decade, so gates on the same street are often the same age. That makes LiftMaster work here unusually predictable. Control boards reaching the end of their life, worn chains and rollers on wide estate slides, and keypads or callboxes at the community entrance are the usual calls. Underneath it, clay soil moves posts under heavy iron, and a wrought iron swing that drops out of line makes the operator work harder and wear its limit switches faster.',
      'For a LiftMaster of this age, a new board, limits and a chain are often all it takes. Parts remain available, and we diagnose to the component rather than to a new operator. Where a unit is genuinely worn out, a current model such as the RSL12UL or CSL24UL slide, or a CSW24UL swing for a heavy leaf, is the usual replacement. We work in Timarron, Carillon, Kirkwood Hollow and Shady Oaks, and on entrances off Southlake Blvd and N Carroll Ave.',
    ],
    faqs: [
      { q: 'Several gates on our Southlake street failed the same year. Is that a coincidence?', a: 'Not really. Gates went in with the houses, and much of Southlake was built in the 1990s, so the boards, chains and limit switches on a street are often the same age and wear out together. It means the fault is usually predictable. A board or chain replacement is typical, and a full LiftMaster gate opener replacement is not always needed.' },
      { q: 'Our Southlake HOA entrance keypad failed. Does the whole gate need work?', a: 'Usually not. Keypad and callbox faults at community entrances are common here, and the operator behind them is often fine. We test the gate with a manual command. If it opens, the fault is in the keypad, callbox or wiring. If not, we look at the operator board and power. Either way we fix the failed part.' },
    ],
  },
  'southlake/elite': {
    description: 'Elite gate opener repair in Southlake, TX: boards, capacitors, chains and limits on 1990s wrought iron swings and estate slides. Repair first. Call us.',
    intro: 'Elite operators on Southlake’s estate gates are often from the same build era as the houses. Boards, capacitors and slide chains are the parts that wear out together.',
    local: [
      'An Elite installed with a Southlake house in the late 1990s has done a lot of cycles, and its age shows in predictable places. Control boards reach the end of their life, start capacitors weaken, and on wide estate slides the chain and sprockets wear until the gate grinds. Heavy wrought iron on clay soil adds post movement, which drops the leaf and loads the operator. Because so many gates here share a build era, we often know what has failed on an Elite before the cover is off.',
      'We usually repair these Elite operators rather than replace them. Boards, capacitors and limit switches are commonly carried, and chains, sprockets and rollers for slides are readily available. Older units like the SL585 and Miracle One predate the LiftMaster Elite Series branding and have their own boards, so we confirm the model first. We work in Coventry Manor, Clariden Ranch and Timarron, and on estate slides near FM 1938 Randol Mill Ave.',
    ],
    faqs: [
      { q: 'Our 1990s Elite slide in Southlake grinds. Can it still be fixed?', a: 'Usually, yes. Grinding on an Elite slide is chain, sprocket or roller wear, and those parts are readily available. Caught early, the repair is a chain and sprocket. Left running, it can damage the gearbox. We also check the rollers and track, which wear alongside the drive on wide estate slides.' },
      { q: 'If the Elite on our Southlake gate needs replacing, what would you fit?', a: 'It depends on the gate. For a heavy estate slide, a current LiftMaster Elite Series SL3000UL is a natural replacement. For a heavy wrought iron swing, a CSW200UL is the Elite Series commercial swing. We size the operator to the leaf weight and length rather than matching the old unit for its own sake.' },
    ],
  },
  'southlake/doorking': {
    description: 'DoorKing gate repair in Southlake, TX for HOA community entrances: keypads, callboxes, directories and operators diagnosed in one visit. Call us today.',
    intro: 'A lot of Southlake sits behind a shared community entrance, and many of those use DoorKing entry systems. When the gate stops, nobody on the street gets in.',
    local: [
      'Keypad and callbox faults at community entrances are one of Southlake’s most common gate calls, and DoorKing makes many of those systems. Built in the 1990s with the subdivisions, many panels were designed around analogue phone lines. When the HOA moved its service, the panel may have lost dial-out or remote programming. Control boards across a single build era also reach the end of their life together. An entrance that stops working is urgent, because it is the only way in for every home behind it.',
      'We diagnose the entry panel and operator together. Telephone entry boards, keypads and card readers are generally available, and DoorKing’s cellular kit replaces a dead analogue line without a full system replacement. On the operator, limits, boards and gearbox work on a 6300 swing or 9150 slide usually fix it. When a management change left no programming records, we rebuild and document the directory. We work at entrances in Carillon, Kirkwood Hollow and Clariden Ranch.',
    ],
    faqs: [
      { q: 'Our Southlake HOA DoorKing still admits old codes that should be removed. Can you fix that?', a: 'Yes, and it is worth doing soon, since revoked codes that still work are a security problem. On most DoorKing systems we can access the programming, remove old codes, rebuild the directory and document it. That is a programming job, not a hardware replacement, and the HOA gets a record of the setup.' },
      { q: 'Is a 1990s DoorKing entry panel in Southlake worth keeping?', a: 'Often, yes. DoorKing supports its equipment well, and boards, keypads and readers are generally available. The common weak point on older panels is the analogue phone line, which a cellular kit usually solves. If the panel is physically worn out, we will price a replacement, but we start with what can be repaired.' },
    ],
  },
  'southlake/all-o-matic': {
    description: 'All-O-Matic gate repair in Southlake, TX: chains, limits, clutch and relays on estate slides and wrought iron swings from the 1990s. Repair first. Call us.',
    intro: 'All-O-Matic operators on Southlake estate gates are often decades old and still worth keeping. Chains, limits and board relays account for most of what goes wrong.',
    local: [
      'Wide estate slides are common in Southlake, and chain and roller wear on them is one of the city’s standard gate faults. On an All-O-Matic SL-100 or SL-150 that wear is progressive: a stretched chain rides high on the sprocket, wears the teeth, and eventually jumps. On wrought iron swings driven by an SW-300 or SW-350, limit cams creep and the gate stops short. Clay movement under heavy iron loads both, so a stall that looks like a clutch fault is often the gate binding.',
      'These are some of the more economical operators to keep running long term. Limit switches, clutches, chains and sprockets are readily available, and control boards are usually a short order. A 1990s All-O-Matic in Shady Oaks or Coventry Manor typically needs a chain, a limit adjustment or a relay, not a new operator. We check the gate by hand before adjusting a clutch, every time, so we fix the cause rather than mask it.',
    ],
    faqs: [
      { q: 'Our All-O-Matic in Southlake has stopped closing all the way. What is it?', a: 'Usually limit drift. On All-O-Matic slides, limit nuts on a lock plate set the stop points, and on older swings they are cams on an Allen screw. Either can creep over thousands of cycles. It is normally an adjustment, not a repair. We also check the gate is not binding, since a heavy leaf on moving clay can cause the same symptom.' },
      { q: 'How do we know if our Southlake All-O-Matic is too old to repair?', a: 'Age alone does not decide it. All-O-Matic operators routinely run twenty years or more with basic servicing. We look at gearbox condition, how well the operator suits the gate, and parts availability, which is good for this brand. Most units here need a part, and we tell you plainly if one does not.' },
    ],
  },
  'bartonville/us-automatic': {
    description: 'US Automatic gate repair in Bartonville, TX for solar ranch and equestrian entrances: batteries, panels, charge controllers and long runs. Call us.',
    intro: 'US Automatic is used on many of Bartonville’s ranch and equestrian entrances, often on solar because mains power is hundreds of feet away. The battery runs everything.',
    local: [
      'Bartonville is zoned for agricultural and equestrian use, so entrances are wide, far from the house and often solar. That is the setting US Automatic was designed for, and the faults follow the power. The battery is a consumable, and a sealed battery that coped in October may not turn a heavy trailer gate on a cold February morning. Solar panels drift out of sun or sit in growing shade. Wide leaves sized for horse trailers drop on their posts, which makes every cycle cost more battery.',
      'Most repairs on a Bartonville US Automatic are on the charging side: a battery tested under load and replaced, a charge controller, or a panel cleaned, re-aimed or upsized. Patriot units have limit switches that drift; Ranger boards hold limit settings. Livestock and wildlife triggering safety devices is another local call, fixed by re-aiming or re-setting sensors. We work on ranch entrances along FM 407, FM 1830 and Jeter Road, and in Saddlebrook Estates and Hat Creek Estates.',
    ],
    faqs: [
      { q: 'Our solar US Automatic in Bartonville will not open on cold mornings. Why?', a: 'Cold reduces a lead-acid battery’s usable capacity, and winter days give the panel less sun to refill it. On a wide trailer gate, the operator needs a lot of current, and a tired battery cannot deliver it on a cold morning. We load test the battery and check panel output, then size the battery and panel for winter, not summer.' },
      { q: 'Horses near our Bartonville gate keep triggering it. Can that be fixed?', a: 'Usually, yes. Livestock and wildlife can set off safety sensors or exit detection on a ranch entrance. The fix depends on what is being triggered and where: re-aiming a photo-eye, changing a sensor’s position or adjusting its settings. We set safety devices so they still protect people and vehicles without reacting to animals.' },
    ],
  },
  'bartonville/liftmaster': {
    description: 'LiftMaster gate repair in Bartonville, TX for wide ranch and estate gates on long private drives: batteries, boards, posts and solar setups. Call us today.',
    intro: 'LiftMaster gates in Bartonville sit at the end of long private drives, often on wide ranch or estate entrances. Distance, power and the post decide most of the repairs.',
    local: [
      'A Bartonville entrance gate is usually further from the house than the house is wide, and that shapes LiftMaster work here. Long buried runs between the house and road carry power and control, and voltage drop or a damaged cable can make a LiftMaster behave as if it is failing. Solar or battery-backed DC models such as the LA412 or CSW24UL depend on a healthy battery, and cold weather exposes a weak one. Wide gates sized for trailers drop on their posts, and the operator struggles against the drag.',
      'Most fixes are modest. We check voltage at the gate, test the battery, and confirm the leaf swings freely before replacing a board or receiver. Where a LiftMaster swing is undersized for a wide ranch leaf, a heavier unit is the lasting answer. Long Meadows Estates, Barrington Hills and Deer Hollow have long drives where remote range is also a common complaint, often solved by repositioning the receiver antenna. We cover entrances along FM 407 and US-377.',
    ],
    faqs: [
      { q: 'Our LiftMaster gate in Bartonville acts up only some days. Where should we look?', a: 'On a long drive, intermittent faults are often in the buried run or the power supply. A damaged cable, a corroded connection, or voltage drop over hundreds of feet can make a LiftMaster stall or ignore commands. On a battery or solar unit, a weak battery does the same. We test the run, the voltage at the gate and the battery.' },
      { q: 'Can a LiftMaster on our Bartonville property run on solar?', a: 'Some LiftMaster DC operators can be set up with solar charging, and it is common where trenching power to the gate costs more than the operator. The panel and battery have to be sized for the gate weight and daily traffic, including winter. We look at the gate, the traffic and the sun before recommending a setup.' },
    ],
  },
  'bartonville/all-o-matic': {
    description: 'All-O-Matic gate repair in Bartonville, TX for wide ranch and estate slides and swings: chains, limits, clutch and boards on long frontages. Call us now.',
    intro: 'All-O-Matic operators in Bartonville handle wide estate slides and ranch swings. They are simple and durable, so most faults trace to the gate, the chain or the limits.',
    local: [
      'Wide gates sized for horse trailers are standard in Bartonville, and they put a lot of load on whatever moves them. An All-O-Matic slide handling a wide estate gate wears its chain and sprockets with every cycle, and when the gate drops on its posts or a track settles, the SL-150 clutch slips and the gate stalls. On ranch swings driven by an SW-350, the torque limiter does the same. Owners often blame the operator; the gate is usually the cause.',
      'The repair is usually small: adjust the limits, replace a chain and sprocket, set the clutch correctly once the gate runs freely, or replace a control board relay. Parts are readily available. Where an All-O-Matic was fitted to a mains supply on a long drive, voltage drop in a long buried run also needs ruling out. We work on wide gates in Saddlebrook Estates and Hat Creek Estates, and on ranch frontages along FM 1830.',
    ],
    faqs: [
      { q: 'Our wide All-O-Matic slide in Bartonville stalls halfway. Is the clutch slipping?', a: 'Probably, but that is the clutch doing its job. On an SL-150 the gearbox clutch slips when the gate meets resistance, and a wide trailer gate that has dropped on its posts or has a settled track creates that resistance. We check the gate and track by hand, fix the bind, then set the clutch correctly.' },
      { q: 'Are All-O-Matic parts easy to get for a Bartonville ranch gate?', a: 'Yes. All-O-Matic is still in production and supports its equipment well. Chains, sprockets, limit switches and clutches are commonly carried, and boards are a short order at most. That makes these operators economical to keep running on wide gates, provided the gate itself is kept in good order.' },
    ],
  },
  'bartonville/ramset': {
    description: 'Ramset gate repair in Bartonville, TX for wide estate and equestrian slides: chains, limits, boards and thermal cutouts traced to the cause. Call us.',
    intro: 'Ramset operators in Bartonville drive wide estate and equestrian slides. Most of the wear we expect comes from the gate’s size and duty, not from a bad unit.',
    local: [
      'Ramset markets the RAM 100 and RAM 1000 for residential and commercial slides, and in Bartonville they tend to be on wide gates where a trailer has to clear the opening. A gate that has gained weight, dropped on its rollers or settled on moving ground makes a Ramset work hard. That shows up as chain and sprocket wear, limit switch failures, and a motor tripping its thermal cutout on a hot afternoon. A repeat failure of the same part is the classic Ramset complaint, and it almost always points at load.',
      'Before replacing a part again, we check the gate under manual operation: rollers, track, alignment and any added infill. Chains, sprockets and limit switches are the parts that actually fail, and we carry them; boards and relays are generally a short order. On an equestrian property where the gate is also used for livestock or deliveries, we set loops and sensors for the vehicles that really use it. We cover wide slides in Barrington Hills and Long Meadows Estates and along US-377.',
    ],
    faqs: [
      { q: 'Our Ramset gate in Bartonville trips out on hot afternoons. Is the motor dying?', a: 'Often not. A Ramset tripping its thermal cutout is usually overheating from load: rollers dragging, alignment off, or a gate that has gained weight. Heat builds faster in a Texas afternoon. We check the gate by hand, fix what is making it hard to move, then look at the motor only if it still overheats.' },
      { q: 'The same part keeps failing on our Bartonville Ramset. Is it a bad batch?', a: 'Rarely. Repeat failure of the same part on a Ramset almost always means the operator is working harder than it should. On a wide estate slide that is usually the gate itself or a duty it was not specified for. We measure the load and check the gate before replacing the part again.' },
    ],
  },
  'annetta-north/us-automatic': {
    description: 'US Automatic gate repair in Annetta North, TX for ranch swings and pipe farm gates: solar batteries, chargers and hinge posts checked first. Call today.',
    intro: 'US Automatic operators in Annetta North often run a house entrance and a long pipe pasture gate on the same land. Battery health and the hinge post decide how well they work.',
    local: [
      'Annetta North is acreage and working farmland, and plenty of properties pair a decorative entrance with a sixteen-foot pipe gate into pasture. A US Automatic Ranger or Patriot on a long pipe gate has a lot of leverage working against it, and when cattle or horses push on the closed leaf, it slowly bends out of line. The operator then meets more resistance on every cycle, which drains the battery and eventually trips the obstruction setting. Battery and charger failures on solar setups are the other everyday fault here.',
      'We start with the battery under load and the charge path, panel or AC charger, because on a US Automatic that is where most failures sit. Then the gate: the hinge post, any bend in the leaf, and how far it sags. Patriot units have limit switches; Ranger boards hold limit settings. Where a gate opens onto FM 5, we also set it to open briskly so cars are not left waiting half on the road. We work along FM 5, Mikus Road and Annetta Centerpoint Road.',
    ],
    faqs: [
      { q: 'Cattle keep pushing on our pipe gate in Annetta North and now the US Automatic trips. Why?', a: 'Livestock leaning on a closed leaf bends a long pipe gate out of line and loosens the hinge post. The operator then works against the bend, and the obstruction setting stops it. We straighten or brace the gate, check the hinge post, then reset limits and force. Adjusting the operator alone does not last if the gate keeps getting pushed.' },
      { q: 'Can one US Automatic setup run both our house gate and pasture gate in Annetta North?', a: 'Each gate needs its own operator, but they can usually share one remote and keypad setup. The two gates will have different needs: a long pipe gate is harder on the arm and battery than a decorative entrance. We size each operator and battery to its own gate and traffic so neither one is short of power.' },
    ],
  },
  'annetta-north/mighty-mule': {
    description: 'Mighty Mule gate opener repair in Annetta North, TX: solar batteries, arms and stripped gears on farm and driveway gates. We check the gate load first. Call.',
    intro: 'Mighty Mule openers are common on Annetta North pipe gates and smaller driveway swings. They are light-duty units, and the gate they are asked to move matters more than anything.',
    local: [
      'A Mighty Mule is a light-duty opener, and on Annetta North farmland it is often fitted to a gate heavier or longer than it was rated for. A long pipe gate sagging on an unsupported span puts extra load on the actuator arm, and internal gears strip or the stall-force setting drifts until the gate stops short. Livestock rubbing on a closed leaf bends it out of line and makes things worse. On solar setups, the battery and charger are the other frequent failure, especially after a cloudy spell.',
      'Our first check on a Mighty Mule is what it is being asked to move. If the gate is within the opener’s rating and hangs well, a battery, a replacement arm or a reset of limits and stall force usually fixes it. If it is overweight or sagging, replacing the arm buys only a few months, so we fix the hinges or recommend a heavier operator. Models like the MM571W and MM560 are common on single swings. We cover farm gates off Mikus Road and FM 5.',
    ],
    faqs: [
      { q: 'Is a Mighty Mule strong enough for our sixteen-foot pipe gate in Annetta North?', a: 'It depends on the gate weight and the model. Mighty Mule openers are light-duty, and a long pipe gate on an unsupported span can exceed what the opener was rated for. That causes repeated arm and gear failures. We weigh up the gate and the opener’s rating and tell you honestly whether to keep it or move to a heavier operator.' },
      { q: 'Our solar Mighty Mule in Annetta North stops working after a few cloudy days. Is the opener failing?', a: 'More likely the battery or charging. A tired battery or a small panel cannot keep up when the sun is weak, and the gate stops once the battery runs down. We test the battery under load, check the panel’s position and output, and replace or upsize what is falling short.' },
    ],
  },
  'annetta-north/liftmaster': {
    description: 'LiftMaster gate opener repair in Annetta North, TX for acreage driveway gates and slides: boards, batteries and receivers, plus the hinge post. Call.',
    intro: 'LiftMaster runs a share of the driveway swings and slides on Annetta North acreage. On these rural lots, the power supply and the gate itself are as important as the operator.',
    local: [
      'Annetta North homes on acreage tend to have one gate for the house drive and, often, another into pasture. A LiftMaster on the house entrance usually deals with a gentler load than a pipe farm gate, but rural conditions still catch up with it. DC models such as the LA400 and RSW12UL rely on a battery, and on solar setups battery and charger failures are a common call. Entrances on FM 5 need to open quickly, so a LiftMaster that has slowed through a weak battery or drifted limits is a safety issue as well as a nuisance.',
      'Repair is normally to a single part. We test the battery and charging, check the board and receiver, and reset limits if the travel has drifted. If the gate hangs off a post that has moved, we fix that first, since the operator will only struggle again. A slide on a graded drive may need rollers or a chain. We work on LiftMaster gates in North Annetta Hills and along Annetta Centerpoint Road and Mikus Road.',
    ],
    faqs: [
      { q: 'Our LiftMaster gate onto FM 5 in Annetta North has become slow. Is that a concern?', a: 'Yes. A slow gate on FM 5 leaves cars waiting partly on the road. On a DC LiftMaster, slowing usually means a weak battery, a charging fault or a gate dragging on its hinges. We test the battery and charging, check the gate swings freely, and restore normal speed.' },
      { q: 'Can a LiftMaster replace a worn-out opener on our Annetta North farm gate?', a: 'Often, yes, as long as the operator is matched to the gate. A long pipe gate needs more capacity than a short driveway leaf. We check the gate’s weight, length and hinge post, then recommend a LiftMaster model that suits it, or tell you if a different operator type would serve that gate better.' },
    ],
  },
  'annetta-north/ghost-controls': {
    description: 'Ghost Controls gate repair in Annetta North, TX: batteries, solar panels, arms and pairing on DIY and pro-installed farm and driveway gates. Call us today.',
    intro: 'Ghost Controls openers on Annetta North gates are battery-based DC units, often self-installed. When one slows or stops partway, battery and charging come first.',
    local: [
      'Everything a Ghost Controls opener does depends on its battery. On an Annetta North farm gate, that battery is refilled by a solar panel, and when panel output falls below what the gate demands, the opener gets slow, stops partway or responds only sometimes. Pipe gates with long, unsupported spans make it worse, because a sagging leaf costs more energy per cycle. Livestock rubbing on the gate can also shift the arm mounting bracket, and arm gear wear follows.',
      'The repair order is battery, panel, gate, then control box. A battery that has lost capacity is replaced; a panel that is too small, shaded or dirty is upsized, moved or cleaned. On a TSS1 single or a TDS2 dual swing, arm brackets that have moved are re-secured and the auto-close timer and sensors checked. We service self-installed Ghost Controls gates too. We cover gates along FM 5 and Mikus Road and in North Annetta Hills.',
    ],
    faqs: [
      { q: 'Our Ghost Controls gate in Annetta North opens partway and stops. Why?', a: 'That is the classic sign of a weak battery or a solar panel that cannot keep up. A Ghost Controls opener reads as weak when the battery is low. A sagging pipe gate or a loose arm bracket increases the load. We test the battery and panel output first, then check the gate and the arm mounting.' },
      { q: 'We installed our own Ghost Controls opener. Will you still work on it in Annetta North?', a: 'Yes. Self-installed Ghost Controls gates are common, and we service them like any other. Often the fix is mounting geometry, panel placement or battery size rather than a faulty part. We check the installation, correct what needs correcting, and explain what we changed.' },
    ],
  },
  'bowie/us-automatic': {
    description: 'US Automatic gate repair in Bowie, TX after storms and lightning: boards, charge controllers and batteries on ranch and lake acreage gates. Call us today.',
    intro: 'US Automatic is fitted to many ranch and lake acreage gates around Bowie. Storms and lightning are the main threat here, alongside the usual battery wear.',
    local: [
      'Bowie sits in open ranch country on US 287, and storms are a regular part of life. Tornadoes struck in 2020 and again in March 2022, and ordinary spring storms bring wind strong enough to slam a gate into its stops. For a US Automatic that means two risks. A gate arm and linkage take a beating, and a strike or surge on rural power can kill a control board or charge controller without leaving a mark. A board can also fail days after the storm, once the damage catches up.',
      'After bad weather we test the board, the charge controller, the battery and the panel, and inspect the arm and linkage for bending. The battery is still the most common part to replace, since heat wears it out. Patriot units have limit switches that can drift, and Ranger boards hold limits that may need resetting after a board change. Surge protection is worth adding during a repair. We cover gates at Lakeside Country Club, Carter Heights and Silver Lakes Ranch.',
    ],
    faqs: [
      { q: 'Our US Automatic in Bowie seemed fine after a storm, then quit a week later. Why?', a: 'Lightning or a power surge can damage a control board or charge controller without obvious signs, and it may keep working for a while before failing. We test the board, charge controller and battery properly after a storm rather than assuming the gate survived. Adding surge protection helps prevent a repeat.' },
      { q: 'Should our Bowie ranch gate stay on solar, or move to AC charging?', a: 'Either works with a US Automatic, because the operator runs from its battery both ways. Solar suits an entrance far from power. AC charging uses a low-voltage charger fed from an outlet, and its lead can run a long way. In storm country, any connection to the grid should also have surge protection.' },
    ],
  },
  'bowie/liftmaster': {
    description: 'LiftMaster gate repair in Bowie, TX: surge-damaged boards, bent arms and batteries on ranch, estate and lake gates after storms. Diagnosed to the part. Call.',
    intro: 'LiftMaster operators around Bowie run estate swings, driveway slides and ranch gates near Lake Amon G. Carter. Storm damage is the call we expect most.',
    local: [
      'Weather is the recurring problem for gates in Bowie. Spring storms push leaves into their stops, and debris can strike gates and posts. On a LiftMaster swing, that bends the arm or bracket and throws the limits off. Lightning and surges on rural power are the other risk: a control board can be killed outright, or fail days later. Solar entrances on lake and ranch acreage add battery and charging faults to the mix, particularly on DC units like the LA412 or CSW24UL.',
      'Once the gate is checked for physical damage, a LiftMaster repair here is usually a board, an arm or bracket, a battery or reset limits. We test the controls properly after any lightning event, because a gate that looks fine can still have a damaged board. Bent leaves and posts are straightened or replaced before the operator is reset. We work on gates in Lakeside Country Club, Keys Landing and Downtown Bowie, and along US 81 and SH 59.',
    ],
    faqs: [
      { q: 'A storm bent the arm on our LiftMaster gate in Bowie. Does the opener need replacing?', a: 'Usually not. A bent arm or bracket is replaceable, and the operator is often undamaged. We check the gate, post and arm, replace what is bent, test the board and motor, and reset the limits. If the gate leaf itself was bent, that needs fixing too, or the opener will struggle.' },
      { q: 'Is battery backup worth adding to a LiftMaster in Bowie?', a: 'For many Bowie properties, yes. Storms cause outages, and a gate with no battery backup becomes a locked barrier until power returns. Many LiftMaster DC models support battery backup. We check the battery’s condition as part of any service, since a tired backup battery may not last through an outage.' },
    ],
  },
  'bowie/elite': {
    description: 'Elite gate opener repair in Bowie, TX: boards, capacitors and limits on estate swings and slides after wind and lightning. Repair-first service. Call us.',
    intro: 'Elite operators in Bowie are mostly on estate swings and driveway slides. Lightning and storm wind cause most of their faults, and the repair is usually a single part.',
    local: [
      'An Elite is an AC operator, and in Bowie that connection to the grid is a weak point during storms. A surge through the power line or a nearby strike can destroy a control board, and boards killed this way are a common call after spring weather. Wind adds mechanical damage: a gate slammed against its stops knocks limit switches out of place and loads the start capacitor. On slide gates near Lake Amon G. Carter, debris in the track can cause grinding.',
      'Elite repair in Bowie normally means replacing the board, capacitor or limit switches, all commonly carried. We confirm the exact model first, since an older SL585 and a current CSW200UL have different boards. Where lightning killed the first board, surge protection and proper grounding are worth adding so the next storm does not do the same. We work on gates in Carter Heights, Silver Lakes Ranch and Lakeside Country Club, and along US 287.',
    ],
    faqs: [
      { q: 'Lightning took out our Elite board in Bowie. Will it happen again?', a: 'It can, unless the circuit is protected. A new board on an unprotected line is exposed to the same surge path. We replace the board and recommend surge protection and proper grounding for the operator and its wiring. On rural power around Bowie, that is a small cost against repeated board failures.' },
      { q: 'Our Elite slide gate in Bowie grinds after a storm. What is wrong?', a: 'Grinding on an Elite slide usually means chain, sprocket or roller wear, but after a storm it can also be debris in the track or a bent track. We clear and check the track, inspect the rollers, chain and sprockets, and replace what is worn. Catching it early prevents gearbox damage.' },
    ],
  },
  'bowie/ghost-controls': {
    description: 'Ghost Controls gate repair in Bowie, TX for solar ranch and lake gates: batteries, panels, control boxes and arms after storms. We test power first. Call.',
    intro: 'Ghost Controls openers in Bowie run solar entrances on ranch and lake acreage. Battery health and storm damage are the two things that bring them down.',
    local: [
      'Solar entrances on lake and ranch acreage are common around Bowie, and Ghost Controls makes battery-driven openers for exactly those gates. Battery capacity governs everything, so a tired battery shows up as slow travel, partial opening or intermittent response. Bowie’s storms add their own damage. Wind slams leaves into stops and moves arm mounting brackets, debris can bend arms, and lightning can knock out a control box or receiver even on a solar system with no grid connection.',
      'We test the battery and panel output first, then inspect the arms, brackets and control box. Batteries that have lost capacity are replaced, and panels that are dirty, shaded or knocked out of angle are cleaned or re-aimed. On TDS2 and TDS2XP dual swings, both arms and their mounts get checked, since storm damage is often uneven. Auto-close timers and sensors are re-tested after any repair. We cover gates near Silver Lakes Ranch, Keys Landing and SH 59.',
    ],
    faqs: [
      { q: 'Our Ghost Controls gate in Bowie is slow after a stormy week. Is it damaged?', a: 'Maybe not. Several cloudy days reduce solar charging, and a battery already losing capacity runs down. The gate then moves slowly or stops partway. We test the battery and panel, then check the arms and control box for storm damage. If the battery is the problem, it is a straightforward replacement.' },
      { q: 'Can lightning damage a solar Ghost Controls opener in Bowie?', a: 'Yes. Even without a grid connection, a nearby strike can induce a surge in the wiring and damage the control box or receiver. On open ranch land, the gate may be the tallest metal object around. We test the control box and receiver, replace what is damaged, and check grounding.' },
    ],
  },
  'canton/liftmaster': {
    description: 'LiftMaster gate repair in Canton, TX: stripped gears, bent arms and storm-killed boards on ranch and privacy gates, plus battery backup checks. Call us.',
    intro: 'LiftMaster operators around Canton drive ranch entrances, solid privacy swings and driveway slides. After the storms this area has seen, wind damage is the first thing we look for.',
    local: [
      'Canton has had two serious tornadoes in recent years, in April 2017 and May 2019, and even routine spring storms load gates hard. A solid privacy panel or a wide ranch leaf catches wind like a sail. When the closed leaf is shoved against a LiftMaster arm, gears strip and brackets fatigue long before anything visibly breaks. Storm debris and surges add damaged control boards. The other Canton problem is outages: a gate without battery backup becomes a locked barrier until power returns.',
      'A typical LiftMaster repair here is an arm, a bracket, a board or the gears, with a check of the post and stops. We ask about the last big blow, because damage often builds up over several storms. Many LiftMaster DC models, such as the LA400 and CSW24UL, support battery backup, and we usually recommend it along with a manual release everyone in the house can use. We work around Lake Meadow, Deer Meadows and Whispering Oaks, and along SH 19 and SH 64.',
    ],
    faqs: [
      { q: 'Our solid privacy gate in Canton keeps stripping LiftMaster gears. Why?', a: 'Wind on a solid panel pushes the closed leaf against the operator arm, and that force goes into the gears. Over several storms they strip. Replacing the gears alone does not stop it. Better stops, a correctly rated operator, and sometimes a more open gate design reduce the load. We look at all of it before fitting new parts.' },
      { q: 'How do we open our LiftMaster gate in Canton during a power cut?', a: 'If the gate has battery backup and the battery is healthy, it keeps running for a number of cycles. Without it, you use the manual release, which disengages the operator so the gate can be moved by hand. We show you where it is and how it works, and test the backup battery as part of any service.' },
    ],
  },
  'canton/us-automatic': {
    description: 'US Automatic gate repair in Canton, TX: batteries, chargers, boards and arms on ranch entrances after storms and outages. Battery tested first. Call us today.',
    intro: 'US Automatic is used on many Canton acreage and ranch entrances. Because the operator always runs from its battery, it keeps working through outages, if the battery is healthy.',
    local: [
      'Outages after storms are a real issue around Canton, and that plays to US Automatic’s design: the motor never runs from mains, so the gate keeps moving on battery whether it is solar or AC charged. That only holds while the battery is good, and Texas heat wears it out. Wind is the other local factor. Wide ranch leaves catch storm gusts, and the arm and linkage on a Patriot or Ranger take the load, wearing over time or bending outright. Lightning and surges can also damage the board and charge controller.',
      'After a storm we check the arm and linkage, test the board and charge controller, and load test the battery. If the gate is slow or stalls, the battery is still the most likely cause. On AC-charged units we test the charger and its lead too. Ranger boards hold limit settings that may need resetting; Patriot units have limit switches. We work on gates near Mallard Estates, Woodland Acres and the Downtown Canton square, and along I-20 and SH 243.',
    ],
    faqs: [
      { q: 'Does our US Automatic in Canton keep working when the power goes out?', a: 'Yes, as long as the battery is healthy. US Automatic operators run from the battery whether they are solar or AC charged, so an outage only stops the charging, not the gate. A tired battery may give only a few cycles. We load test it during any service and replace it when it is worn.' },
      { q: 'Wind bent the arm on our US Automatic Ranger in Canton. Can it be repaired?', a: 'Usually, yes. Arms, linkages and mounting hardware are available, and the operator itself is often unharmed. We replace the bent parts, check the gate, post and hinges, and test the board in case the storm also caused a surge. Then we reset the limits and test full travel.' },
    ],
  },
  'canton/ghost-controls': {
    description: 'Ghost Controls gate repair in Canton, TX: arm gear wear, bracket movement, batteries and solar panels on storm-exposed farm and ranch gates. Call us now.',
    intro: 'Ghost Controls openers in Canton are battery-driven DC units on rural and ranch gates. Storm wind, bracket movement and tired batteries account for most of the calls.',
    local: [
      'Canton’s storm history matters to a Ghost Controls gate in two ways. Wind loading a wide or solid leaf pushes against the arm, wearing its gears and moving the mounting bracket a little each time. And storms bring cloudy spells and debris that can dirty or shift a solar panel. Because battery health governs everything a Ghost Controls opener does, a panel that is producing less than the gate needs shows up as slow travel, a gate that stops partway, or one that responds only sometimes.',
      'We test the battery and the panel first, then inspect the arm gears and brackets. A battery that has lost capacity is replaced; a panel that has been knocked or dirtied is cleaned and re-aimed. Arm brackets that have shifted are re-secured, and worn gears addressed. Auto-close timers and sensors are re-checked afterwards. We service gates off SH 19 and SH 64 and around Lake Meadow and Deer Meadows.',
    ],
    faqs: [
      { q: 'Why does our Ghost Controls gate in Canton open slower after storms?', a: 'Storms can leave a panel dirty or knocked out of position, and cloudy days reduce charging. A battery that was already losing capacity then runs low. Wind can also shift the arm bracket, adding load. We test the battery and panel, check the bracket and arm, and fix whichever is causing the slowdown.' },
      { q: 'Is a Ghost Controls dual gate opener right for a wide Canton ranch entrance?', a: 'A TDS2 or TDS2XP dual swing can suit many ranch entrances, but the gate weight, length and wind exposure matter. Wide solid leaves in storm country put a lot of force on the arms. We look at the gate and its exposure and tell you whether the opener is a fair match.' },
    ],
  },
  'canton/mighty-mule': {
    description: 'Mighty Mule gate opener repair in Canton, TX: stripped gears, arms, solar batteries and boards after storms. We check the gate weight and hinges first. Call.',
    intro: 'Mighty Mule openers in Canton are on smaller driveway and farm gates. They are light-duty, so storm wind and an overweight gate are what usually wear them out.',
    local: [
      'Light-duty openers have the least margin when the wind gets up, and Canton gets serious wind. A Mighty Mule on a solid or wide leaf takes storm gusts through its actuator arm, and internal gears strip sooner than on a sheltered gate. Many are also fitted to gates heavier than their rating, which shortens arm and gear life on its own. Control boards fail after lightning or surge, and on solar installs the battery and charger are frequent faults, especially after outages and cloudy stretches.',
      'Our first question is whether the opener suits the gate. If it does, the repair is a battery, an arm, a board or a reset of limits and stall force. If the gate is overweight or catches too much wind, replacing the arm again buys only months, so we recommend a heavier operator or changes to the gate. Models like the MM571W and MM572W are common here. We work in Woodland Acres, Whispering Oaks and Mallard Estates.',
    ],
    faqs: [
      { q: 'Our Mighty Mule in Canton keeps stripping gears. Should we upgrade?', a: 'If gears strip repeatedly, the opener is probably working beyond its rating, from gate weight, wind or both. A replacement arm on the same gate will fail again. We check the gate weight, hinges and exposure. If the load is too much for a Mighty Mule, we recommend a heavier operator.' },
      { q: 'Our solar Mighty Mule in Canton died after a storm. Is it the battery or the board?', a: 'It could be either. Surges from lightning can kill the control board, and a battery that was already weak may fail during a cloudy spell. We test both, along with the panel and receiver, and replace what has failed. If the board was hit, we check the wiring and grounding as well.' },
    ],
  },
  'crandall/liftmaster': {
    description: 'LiftMaster gate repair in Crandall, TX for new subdivision gates on settling ground and older farm entrances: limits, boards and batteries. Call us today.',
    intro: 'Crandall’s LiftMaster gates fall into two groups: new installs on recently worked farmland, and older entrances that have stood for decades. We ask which one we are dealing with.',
    local: [
      'Commuter growth along US-175 has put new subdivisions on ground that was farmed very recently, and made ground under new drives and footings keeps settling for a few years. A LiftMaster installed on that ground can need re-commissioning at two or three years old because the driveway it was set against has moved. Limits stop matching where the gate stops, photo-eyes go out of line, and the operator reverses or stalls. On the older farm entrances along the same roads, wear and age are the issues instead.',
      'For a newer LiftMaster, the fix is often alignment and settings: rehang the gate, re-aim the safety devices, reset limits and force. On a DC model like the LA400 or LA412 we also test the battery, which drains faster when the gate drags. Older units need parts, a board or receiver typically. Commuter traffic concentrates use into two peaks, which wears community slides faster. We cover gates along FM 148, FM 3039 and Main Street.',
    ],
    faqs: [
      { q: 'Our two-year-old LiftMaster gate in Crandall has started reversing. Is it faulty?', a: 'Probably not. New Crandall subdivisions sit on made ground that keeps settling, and a gate set against a drive that has since moved will drift out of its limits and safety settings. We re-align the gate, re-aim the photo-eyes and reset limits and force. The operator itself is usually fine.' },
      { q: 'Can a LiftMaster replace the old opener on our Crandall farm entrance?', a: 'Usually, yes. Older farm entrances sometimes have openers nobody makes parts for any more. We check the gate, posts and power supply, then size a LiftMaster to the leaf weight and length. If the gate itself needs work first, we will say so before fitting anything.' },
    ],
  },
  'crandall/us-automatic': {
    description: 'US Automatic gate repair in Crandall, TX for ranch and farm entrances: batteries, solar panels, chargers and long DC runs tested before the operator. Call us.',
    intro: 'US Automatic operators in Crandall are mostly on farm and ranch entrances, some of them long established. Power and the gate’s condition decide how well they work.',
    local: [
      'Long-standing farm entrances on Crandall’s roads are where US Automatic fits best: gates far from mains power, on solar or AC charging. Both run the operator from a battery, so most faults are power faults. A worn battery looks just like a failed operator, and Texas heat shortens its life. Long DC runs lose voltage, and corrosion at terminals adds resistance. A heavy farm gate that sags or drags on a moving post makes every cycle cost more, which drains the battery and wears the arm and linkage.',
      'We load test the battery, then check the panel or AC charger and the charge controller. A charge controller that has failed produces a flat battery that comes back flat, so we test it before replacing the battery. Patriot units have limit switches; Ranger boards hold limit settings. Arms and linkages on long farm gates are inspected for wear. We work on entrances along US-175, FM 148 and FM 3039.',
    ],
    faqs: [
      { q: 'We replaced the battery in our US Automatic in Crandall and it went flat again. Why?', a: 'The charge controller or charging source is the likely cause. If the controller fails, the battery stops charging or gets overcharged, and either way it presents as flat. On AC-charged units the charger or lead can fail too. We test the controller and charging path before fitting another battery.' },
      { q: 'Our Crandall farm gate is long and heavy. Is a US Automatic up to it?', a: 'The Ranger family is built for heavier swing gates and suits many farm entrances. What matters is the gate’s weight, length and hinge condition. A sagging gate shortens battery life and wears the arm. We check the gate, the operator’s rating and the power setup and tell you if anything needs changing.' },
    ],
  },
  'crandall/elite': {
    description: 'Elite gate opener repair in Crandall, TX for community slides and residential swings: boards, capacitors and limits, re-set for settling ground. Call us.',
    intro: 'Elite operators in Crandall work on community slides and residential swings, many on new ground. Settling, then wear, is the order we usually find.',
    local: [
      'A community slide in Crandall gets its traffic in two bursts, morning and evening, as commuters head to and from Dallas on US-175. An Elite slide handling that pattern sees many starts in a short window, and its board and start capacitor feel the strain, while chains and sprockets wear on the cycle count. On the new subdivisions, made ground that has not finished settling moves posts and tracks, so limits drift and photo-eyes lose alignment. A residential Elite swing on the same ground shows the same drift.',
      'Repair is the normal answer. Boards, capacitors and limit switches are commonly carried, and chains and sprockets for Elite slides are readily available. We identify the model first, since a current SL3000UL and an older Elite have different boards and codes. Where the ground has moved, we correct the gate and track before replacing electrical parts. We work on gates along Main Street, FM 3039 and FM 148.',
    ],
    faqs: [
      { q: 'Our Crandall community slide on an Elite started grinding. What should we do?', a: 'Get it checked soon. Grinding on an Elite slide means chain, sprocket or roller wear, and on an entrance with two daily peaks the wear builds quickly. A worn chain replaced now is a small job; one left to jump its sprocket can take the gearbox with it. Settling ground can twist the track, so that gets checked as well.' },
      { q: 'Is a newer LiftMaster Elite Series slide better for a busy Crandall entrance?', a: 'If the current operator is worn out or undersized for the traffic, a current Elite Series SL3000UL is a strong choice for a heavy commercial slide. If the existing Elite is sound, a board, capacitor or chain repair is usually the better value. We check the duty and the gate before advising.' },
    ],
  },
  'crandall/doorking': {
    description: 'DoorKing gate repair in Crandall, TX for new community entrances: telephone entry, keypads, loops and operators on settling driveways. Call us today.',
    intro: 'DoorKing systems in Crandall run at newer community entrances, where commuter traffic and settling ground both test the entry panel, the loops and the operator.',
    local: [
      'Community entrances in Crandall’s newer subdivisions combine a DoorKing entry panel or keypad, vehicle loops and an operator. Made ground under new drives keeps settling, and a loop cut into a slab that cracks or moves can fail, leaving the gate stuck open or refusing to open for exit traffic. Commuter peaks in the morning and evening put many cycles through in a short window, which wears the operator and fills the entry system with calls. When residents cannot get in, any of the three could be the cause.',
      'We split the system first. A manual command shows whether the operator works; a loop test shows whether the slab has damaged the loops. Telephone entry boards, keypads and loop detectors are generally available, and DoorKing’s cellular kit replaces an analogue line where needed. Operator faults on a 9150 slide or 6300 swing are usually limits, a board or gearbox wear. We cover entrances along US-175, FM 148 and Main Street.',
    ],
    faqs: [
      { q: 'The DoorKing gate at our Crandall subdivision stays open. What causes that?', a: 'Often a loop detector seeing a vehicle that is not there. On settling ground, the loop wire in the driveway can crack or short as the slab moves. A misaligned photo-eye causes the same symptom. We test the loops, detectors and safety devices before suspecting the operator.' },
      { q: 'Can a new Crandall community use DoorKing on cellular instead of a phone line?', a: 'Yes. DoorKing no longer recommends a copper line even on current panels, and its cellular kit suits new entrances with no landline. We set up dial-out and the directory, document the programming, and test the system with residents’ numbers before handing it back to the HOA.' },
    ],
  },
  'emory/ghost-controls': {
    description: 'Ghost Controls gate repair in Emory, TX for solar ranch gates on county roads: aging batteries, panels, close timers and keypad range. Call us today.',
    intro: 'Ghost Controls openers are used on a lot of Emory’s solar ranch gates, out on county roads between Lake Tawakoni and Lake Fork. Batteries and close settings are the usual issues.',
    local: [
      'Around Emory the entrance is often a long way from the house, with no power line nearby, so solar Ghost Controls openers make sense. Their weak point is the battery. One that is four or five years old may open happily on a sunny afternoon and quit at night or after a cloudy week, because the opener depends entirely on stored charge. Livestock is the other local factor: a gate that stops short of closed, or reopens on its own, can let cattle or horses onto the road.',
      'We test the battery under load and check panel output and angle before anything else. On a TSS1 or TDS2, we then check the arms and brackets and the auto-close timer and sensors, setting them for a gate that keeps animals in. Wireless keypads and remotes losing range on long drives are another common call, often fixed by repositioning the receiver or replacing a weak remote battery. We work near Lake Fork Estates, Glade Creek and Bear Creek, and along SH 19 and US-69.',
    ],
    faqs: [
      { q: 'Our Ghost Controls gate in Emory works in the day but fails at night. Why?', a: 'That is the typical sign of a battery losing capacity. During the day the panel supplies some of the energy; at night the opener relies on the battery alone. An older battery cannot hold enough charge. We load test it, check the panel, and replace the battery if it has worn out.' },
      { q: 'How should a Ghost Controls gate be set where livestock are kept in Emory?', a: 'The close timer and safety settings need to keep the gate closed reliably. A gate that stops short or reopens can let animals out. We set the auto-close timer and sensors so the gate closes fully after each use, check the arms and brackets for movement, and make sure the battery can support it.' },
    ],
  },
  'emory/mighty-mule': {
    description: 'Mighty Mule gate opener repair in Emory, TX for pipe farm gates and dual swings: solar batteries, arms, stall force and remote range. Call us today.',
    intro: 'Mighty Mule openers in Emory are common on pipe farm gates and dual swings on rural acreage. They are light-duty, so gate weight and battery health matter most.',
    local: [
      'Rains County acreage reached by county roads is natural Mighty Mule country: a pipe farm gate or a dual swing, far from power, running on solar. These are light-duty openers, and a farm gate heavier than the rating wears the actuator arm and strips internal gears. On solar installs, aging batteries are the most frequent failure, and the gate quits at night or after a few cloudy days. Where livestock are kept, a gate that does not fully close because its stall force or limits have drifted is a real problem.',
      'If the gate is within the opener’s rating, a new battery, a reset of limits and stall force, or a replacement arm usually solves it. If the gate is too heavy, we recommend a heavier operator rather than another arm. Remote and keypad range on long drives is another common complaint; often the receiver needs repositioning or re-pairing. Models such as the MM572W and FM502 are common on dual gates. We cover gates near Yarber Green and the Tull Addition and along SH 276.',
    ],
    faqs: [
      { q: 'Our Mighty Mule in Emory does not close fully any more. Is the opener failing?', a: 'Often the limit and stall-force settings have drifted, or the battery is too weak to finish the cycle. A gate that has started to sag adds load too. We test the battery, check the gate for sag or binding, then reset limits and stall force so the gate closes fully, which matters where livestock are kept.' },
      { q: 'Our Mighty Mule remote only works close to the gate in Emory. What is wrong?', a: 'Weak remote batteries, a poorly placed receiver antenna, or pairing loss can all reduce range. On a long rural drive, the antenna position matters a great deal. We test the remote, re-pair it if needed, and reposition the receiver for better range.' },
    ],
  },
  'emory/us-automatic': {
    description: 'US Automatic gate repair in Emory, TX for solar ranch entrances far from power: batteries, panels, charge controllers and close timers. Call us now.',
    intro: 'US Automatic operators run on solar ranch entrances throughout Emory and Rains County. Every one moves the gate from its battery, so power is the first thing we test.',
    local: [
      'Rural acreage on Emory’s county roads often puts the gate hundreds of feet from the house and from any power line. A US Automatic suits that, because the motor runs from its battery whether it is solar or AC charged. The catch is that the battery wears out, and a four or five year old one fails at night or after a cloudy week. A dirty or shaded panel, a failing charge controller or a long wire run with voltage drop makes the problem worse. Gates around livestock also need reliable closing.',
      'We load test the battery, then check the panel output and charge controller. Patriot units have limit switches that can drift; Ranger boards hold limit settings. If the gate does not close fully, we check the limits, the close timer and the gate itself, since a sagging leaf can stop short. Where the system is undersized for winter, the fix is a bigger battery or panel. We work on entrances near Lake Fork Estates, Glade Creek and along SH 19.',
    ],
    faqs: [
      { q: 'Our US Automatic gate in Emory stops working after a week of cloudy weather. Is it broken?', a: 'Not usually. A solar gate depends on its panel refilling the battery, and a long cloudy spell drains it, especially if the battery is older. We test the battery under load and check the panel. If the system is too small for the gate’s traffic in poor weather, we resize the battery or panel.' },
      { q: 'Can our US Automatic in Emory be set to close automatically for livestock?', a: 'Yes. Close timers and safety settings can be set so the gate closes reliably after each use. We check the limits and the gate’s hang so it fully closes, and confirm safety devices work. A battery in good condition is needed too, since a weak one can stop the gate short.' },
    ],
  },
  'emory/viking': {
    description: 'Viking gate operator repair in Emory, TX for heavy dual swing and ranch gates on long drives: batteries, solar charging, limits and boards. Call us.',
    intro: 'Viking operators in Emory are usually on the heaviest ranch entrances and dual swings. Many run DC with solar charging, so the battery comes first when one slows.',
    local: [
      'A Viking is often specified for a heavy gate, and the big dual swings on Emory ranch land are exactly that. Out on county roads, many Vikings run DC with battery storage and solar charging, because running power to a remote entrance is impractical. That makes the battery and charging the main local issue: an aging battery fails at night or after cloudy weeks, and a shaded panel or failed charge controller looks just like a dying motor. A heavy leaf binding on its hinges drains the battery faster still.',
      'We test the battery under load and check charge input, then move the gate by hand to rule out a bind. Swing models such as the T-21, G-5 and R-6 use mechanical limits that drift and can be reset or replaced. Wireless keypads losing range on a long drive are also common. Batteries, boards, limit hardware and solar components are generally available. We work on gates near Bear Creek, Lake Fork Estates and Downtown Emory, and along SH 276.',
    ],
    faqs: [
      { q: 'Our Viking dual gate in Emory opens one leaf but not the other. What is wrong?', a: 'It could be a limit switch on one operator, a wiring or board fault, or one leaf binding on its hinges. A weak battery can also leave enough power for one leaf but not both. We test the battery, check each leaf by hand, and test each operator’s limits and wiring.' },
      { q: 'How long does a Viking battery last on an Emory solar gate?', a: 'It varies with heat, traffic, the gate’s weight and how well the panel is sited. Batteries are consumables, and Viking’s own warranty covers them for less time than the operator. When a gate starts to slow, load testing the battery is the first step.' },
    ],
  },
  'glen-rose/us-automatic': {
    description: 'US Automatic gate repair in Glen Rose, TX for hillside and river-bottom ranch gates: batteries, lightning-damaged boards and silted openers. Call us today.',
    intro: 'US Automatic runs many solar ranch and driveway gates around Glen Rose. Limestone, the Paluxy River and hilltop lightning each leave their own mark on them.',
    local: [
      'Glen Rose gates face rock, water and storms, sometimes on the same property. On hillside lots, post holes cut into limestone ledge are often shallower than ideal, and a US Automatic arm working a leaf on a weak post takes more load. Near the Paluxy River, high water can leave silt in an opener box and wiring that sat in water. On exposed hilltops, lightning damages boards and charge controllers. And as everywhere, the battery wears out in the heat, giving slow or stalled travel.',
      'After high water we open the control box, check for silt and corrosion, and test the board, charge controller and battery. After a storm we test the electronics properly. On hillside drives with uneven grades, we check the arm geometry and the post. Patriot units have limit switches; Ranger boards hold limit settings. Surge protection and grounding are worth adding on hilltop installs. We cover gates in Valley Ranch Addition, Hidden Valley Ranch and Fossil Trails, and along US 67 and FM 56.',
    ],
    faqs: [
      { q: 'Our US Automatic near the Paluxy River in Glen Rose stopped after high water. Can it be saved?', a: 'Often, yes. Silt and water usually damage the board, terminals or charge controller rather than the whole operator. We open the box, clean out silt, check for corrosion and test each component. Batteries that sat in water are replaced. We may suggest mounting the box higher if the site floods regularly.' },
      { q: 'Does a US Automatic work on a steep hillside drive in Glen Rose?', a: 'It can, but uneven grades need careful setup. The arm geometry and gate hang have to suit the slope, and a post set in limestone ledge must be solid. We check the post, the arm angle and the gate’s travel, and set limits to match.' },
    ],
  },
  'glen-rose/ghost-controls': {
    description: 'Ghost Controls gate repair in Glen Rose, TX for solar driveway swings on rocky hillside lots: batteries, panels, brackets and storm damage. Call us.',
    intro: 'Ghost Controls openers run solar driveway swings on Glen Rose acreage. Battery health, panel placement and the rocky ground under the post decide how well they work.',
    local: [
      'Solar driveway swings are common on Glen Rose acreage, and a Ghost Controls opener depends on its battery and panel. In cedar-covered hills, a panel can lose sun to trees and terrain, and a battery that is not refilled gives slow travel, partial opening or intermittent response. Rocky ground adds a mechanical issue: posts in limestone ledge can be shallower than ideal, and arm mounting brackets loosen when the post moves. On exposed ridges, lightning can knock out a control box or receiver.',
      'We test the battery and panel, then inspect the arms, brackets and post. Batteries that have lost capacity are replaced, and panels that are shaded are moved or re-aimed for better sun. On a TDS2 dual swing on a sloped drive, both arms are checked for geometry and wear. We also test the auto-close timer and sensors. We work on gates near The Oaks of Glen Rose and the Chalk Mountain area, and along SH 144 and FM 205.',
    ],
    faqs: [
      { q: 'Our Ghost Controls gate in Glen Rose is slow in winter. Why?', a: 'Lower sun and shorter days reduce solar charging, and in the hills a panel can lose more sun to trees and terrain in winter. A battery losing capacity makes it worse. We test the battery, check the panel’s sun exposure, and replace or re-site parts as needed.' },
      { q: 'The arm bracket on our Ghost Controls opener in Glen Rose keeps coming loose. What is wrong?', a: 'On rocky Glen Rose lots, posts are sometimes set shallow in limestone, and a post that moves loosens the bracket. Wind and gate weight add to it. We check the post, re-secure the bracket, and recommend post work if the footing is the cause.' },
    ],
  },
  'glen-rose/liftmaster': {
    description: 'LiftMaster gate repair in Glen Rose, TX for slides on graded drives and hillside swings: lightning-damaged boards, silt and limits. Call us today.',
    intro: 'LiftMaster operators around Glen Rose drive slides on graded drives and swing gates on hillside lots. Lightning on the ridges and water on the river bottoms cause most faults.',
    local: [
      'Slide gates on graded drives are common around Glen Rose, and a LiftMaster slide like the RSL12UL or CSL24UL depends on a level, clean track. Near the river bottoms, the Paluxy can rise fast after heavy rain and leave silt in the track and mud in the opener box. Up on the ridges, lightning is the threat, and a surge can kill a control board outright. Uneven grades on hillside drives also make swing gate setup harder, and limits can drift if the gate shifts on a shallow post in limestone.',
      'After high water we clean the track, check rollers and the board, and test wiring that may have sat in water. After lightning we test the board and safety devices properly. On hillside swings, we check post and hinge condition before resetting limits. Surge protection and grounding are worth adding on exposed sites. We work on LiftMaster gates in Valley Ranch Addition and Hidden Valley Ranch, and along US 67 and SH 144.',
    ],
    faqs: [
      { q: 'Our LiftMaster slide in Glen Rose is jammed with silt after a flood. Can it be fixed?', a: 'Usually, yes. We clean the track, check the rollers and gate for damage, and inspect the operator for water in the box. If the board or wiring sat in water, we test them and replace what is damaged. Then we reset limits and test the safety devices.' },
      { q: 'Should our hilltop LiftMaster in Glen Rose have surge protection?', a: 'Yes, it is worth it. Exposed hilltops draw lightning, and a surge through the power line or a nearby strike can kill a board. Surge protection and a proper ground reduce that risk. We fit both during a repair if they are missing.' },
    ],
  },
  'glen-rose/viking': {
    description: 'Viking gate repair in Glen Rose, TX for heavy ranch entrance swings: battery and solar faults, limit drift and posts in limestone ledge. Call us today.',
    intro: 'Viking operators in Glen Rose drive heavy ranch entrance gates on rocky ground. Battery power, limit drift and the post set in limestone are the usual issues.',
    local: [
      'Heavy ranch entrance swings are where a Viking belongs, and Glen Rose has plenty of them. Many run DC with battery storage and solar charging, which suits remote entrances in the hills. The rock is the challenge. A post cut into limestone ledge can end up shallower than it should be, and a heavy leaf on that post can shift and bind, putting load on the Viking drive train and draining the battery. On exposed hilltops, lightning damages boards, and near the river, water can reach low-mounted equipment.',
      'We test power first, then move the gate by hand, then look at the operator. Swing units like the T-21 and G-5 use mechanical limit switches that drift and can be reset. Batteries, boards and solar parts are generally available; gearbox and chain parts are a short order. Where a post has moved, we fix the footing before the operator. We work on ranch gates in Hidden Valley Ranch and the Chalk Mountain area, and along FM 56.',
    ],
    faqs: [
      { q: 'Our Viking ranch gate in Glen Rose binds at one point in its swing. Is the operator failing?', a: 'Probably not. A heavy leaf binding at one point usually means the post has moved or a hinge has worn. In Glen Rose, posts set shallow in limestone are a common cause. We check the gate by hand, correct the post or hinge, then reset the Viking’s limits.' },
      { q: 'Can a Viking survive lightning on a Glen Rose hilltop?', a: 'The operator often does, but the board may not. Lightning and surges on exposed hilltops damage electronics. Viking boards are generally available, and we test the operator fully after a strike. Surge protection and proper grounding reduce the risk next time.' },
    ],
  },
  'howe/liftmaster': {
    description: 'LiftMaster gate repair in Howe, TX for prairie gates after storms: surge-killed boards, bent arms and racked leaves, plus surge protection. Call us today.',
    intro: 'LiftMaster gates in Howe face open prairie wind, hail and lightning with little in the way. After a storm, the board and the arm are the first things we check.',
    local: [
      'Howe sits on flat Blackland Prairie country along US 75, and storms come across the fields with nothing to slow them. Tornadoes hit the town in 1896 and again in April 2016. For a LiftMaster gate that means bent arms, racked leaves and control boards killed by a surge through the power line or a nearby strike. Seasonal clay movement under posts adds a slower problem: a residential swing or driveway slide drifts out of line, and the operator’s limits and photo-eyes stop matching the gate.',
      'A replacement board on an unprotected circuit is only waiting for the next storm, so after a surge we check surge protection and grounding as well as fitting the part. Bent arms and brackets on swing operators such as the LA400 or RSW12UL are replaced and the gate re-squared. On slides, we check rollers and track. Then limits and safety devices are reset. We work on gates near Summit Hill and Downtown Howe, and along SH 5 and FM 902.',
    ],
    faqs: [
      { q: 'Our LiftMaster in Howe died in a storm. Is the whole opener gone?', a: 'Usually only the control board. Surges through the power line or a nearby strike typically damage the board and sometimes the receiver. We test the motor, board and accessories, replace what is damaged, and check surge protection and grounding so the next storm does not do the same.' },
      { q: 'Why does our Howe LiftMaster gate need adjusting each summer?', a: 'Blackland Prairie clay swells when wet and shrinks when dry, and gate posts move with it. The gate shifts, and limits and photo-eyes no longer line up. We correct the alignment and reset the settings. A footing sized for the soil reduces how often it is needed.' },
    ],
  },
  'howe/us-automatic': {
    description: 'US Automatic gate repair in Howe, TX for farm entrances and driveway gates: batteries, surge-damaged boards and charge controllers after storms. Call us.',
    intro: 'US Automatic operators in Howe run farm entrances and driveway gates on open prairie. Batteries wear in the heat, and storms take out boards and controllers.',
    local: [
      'Farm entrance swings around Howe are often solar or AC-charged US Automatic units, and on open prairie two things wear them down. The battery is a consumable, and heat shortens its life until the gate is slow or stops partway. And storms bring lightning that can kill a control board or charge controller through the power line, an AC charger lead or simply a nearby strike. Open-country wind on wide leaves loads the arm and linkage, and posts in clay move with the seasons.',
      'We load test the battery and check the charge path, panel or charger, then the board and charge controller. After a storm we test the electronics carefully, since damage can show up days later. Patriot units have limit switches that drift with clay movement; Ranger boards hold limit settings. Surge protection is worth fitting on AC-charged installs. We cover farm entrances west of town on FM 902, and gates along SH 5 and the US 75 frontage.',
    ],
    faqs: [
      { q: 'Our AC-charged US Automatic in Howe stopped after a storm. What should we check?', a: 'Check the charger and board first. A surge through the outlet can damage the charger, the charge controller or the board, and the battery may then run flat. We test each, replace what was damaged, and recommend surge protection on the charger circuit.' },
      { q: 'Is a US Automatic Patriot right for a wide farm gate in Howe?', a: 'It depends on the gate’s weight and length. The Patriot suits many residential and light farm gates; the Ranger is built for heavier swings. On a wide leaf in open-country wind, extra capacity helps. We check the gate and recommend the model that fits.' },
    ],
  },
  'howe/mighty-mule': {
    description: 'Mighty Mule gate opener repair in Howe, TX: arms, gears, boards and solar batteries on residential and farm gates in open prairie wind. Call us today.',
    intro: 'Mighty Mule openers in Howe are on residential and farm gates in open country. They are light-duty, so wind, gate weight and storms decide how long they last.',
    local: [
      'Mighty Mule builds light-duty openers, and on the open prairie around Howe they meet heavy wind. A wide leaf caught by storm gusts loads the actuator arm and strips internal gears, and a farm gate heavier than the rating wears them out faster still. Lightning and surge damage to control boards is common after storms. On solar installs, battery and charging faults follow cloudy spells. Seasonal clay movement under posts also drifts the limit and stall-force settings.',
      'We check what the opener is moving first. If the gate is within rating and hangs well, a battery, arm, board or settings reset fixes it. If the gate is too heavy or catches too much wind, we recommend a heavier operator rather than another arm. Models like the MM371W and MM571W are common on single swings. We work on gates near Summit Hill and along FM 902 and SH 5.',
    ],
    faqs: [
      { q: 'Is our Mighty Mule worth repairing after storm damage in Howe?', a: 'Often, yes, if the gate suits the opener. A board, arm or battery is a modest repair. If the gate is heavy or exposed and the opener keeps failing, a heavier operator is better value. We look at the gate and the damage before recommending either.' },
      { q: 'Our Mighty Mule in Howe stops partway since spring. What changed?', a: 'Clay movement may have shifted the post, so the gate binds and the stall-force setting stops it. A weak battery can do the same. We check the gate by hand, test the battery, and reset limits and stall force once the gate swings freely.' },
    ],
  },
  'howe/elite': {
    description: 'Elite gate opener repair in Howe, TX: boards, capacitors and limits on residential swings and driveway slides after storms and clay movement. Call us now.',
    intro: 'Elite operators in Howe drive residential swings and driveway slides. Storm surges and seasonal clay movement are what usually knock them out.',
    local: [
      'An Elite is an AC operator wired into the grid, and in Howe that makes it vulnerable to the surges that storms bring across the prairie. A board killed by a surge through the power line or a nearby strike is one of the most common Elite calls after bad weather. Clay movement under posts is the slower problem: as the leaf drifts out of line, limit switches stop matching the gate, and the start capacitor works harder on every cycle.',
      'Boards, capacitors and limit switches for Elite units are commonly carried, so repair is usually straightforward. We confirm the model first, because an older Elite and a current LiftMaster Elite Series unit have different boards. After a surge we look at protection and grounding. Where the gate has moved, we correct the alignment before the electrical parts. We work on Elite gates in Downtown Howe and along the SH 5 corridor.',
    ],
    faqs: [
      { q: 'Our Elite in Howe hums but the gate does not move. What is the fault?', a: 'On an Elite, a hum with no movement often means the start capacitor has failed. A gate binding because its post moved in clay can also stall it. We test the capacitor, check the gate by hand, and replace what has failed.' },
      { q: 'How can we protect our Elite in Howe from lightning?', a: 'Surge protection on the power supply and proper grounding of the operator and its wiring reduce the risk. They do not make a gate immune, but they protect the board from most surges. We fit them during a repair and check existing protection on any service.' },
    ],
  },
  'kemp/liftmaster': {
    description: 'LiftMaster gate repair in Kemp, TX for lake homes near Cedar Creek Lake: drained batteries, lost remotes, insect-filled boxes and corrosion. Call us today.',
    intro: 'LiftMaster gates on Kemp’s lake properties often sit idle for weeks. Many of the faults here come from that idleness, not from wear.',
    local: [
      'Kemp sits at the north end of Cedar Creek Lake, and places like Edgewater at Cedar Creek Lake and Tanglewood Beach mix full-time homes with weekend houses. A LiftMaster at a weekend home cycles a few times on Saturday, then sits for weeks. Backup and solar batteries sulfate when unused, wasps build in the control box, and a remote that has not been touched since spring has a dead cell. Near the shoreline, humidity corrodes terminals and boards. None of this is wear, but it stops the gate all the same.',
      'Most repairs are small: a new battery, cleaning out insects and corrosion, reprogramming remotes or a keypad, or a board if moisture has done its damage. On DC models like the LA400 or LA412 with battery backup, we test the battery under load. We can also recommend simple steps for owners who are away, such as checking the backup battery at each visit. We work in Lakeside Acres, Pleasant Oak Beach and Downtown Kemp, and along SH 274.',
    ],
    faqs: [
      { q: 'Our LiftMaster at our Kemp lake house will not open when we arrive. Why?', a: 'Idle gates often fail on batteries. A backup or solar battery that sits unused for weeks can sulfate and lose capacity. Remotes left unused can have dead batteries too, and insects may have built in the control box. We test the battery, clean the box, and check the remotes.' },
      { q: 'We forgot our LiftMaster keypad code at our Kemp weekend home. Can you reset it?', a: 'Yes. We can reprogram the keypad with a new code and re-pair your remotes. It is a quick job and common at weekend homes where codes are used rarely. We can also check the battery and control box while we are there.' },
    ],
  },
  'kemp/doorking': {
    description: 'DoorKing gate repair in Kemp, TX for gated lake communities on Cedar Creek Lake: entry panels, keypads, codes and humid-air corrosion. Call us today.',
    intro: 'DoorKing systems at Kemp’s lake community entrances serve full-time residents and weekend owners alike. Lost codes and lake humidity cause much of the trouble.',
    local: [
      'Community entrance swings on the Cedar Creek Lake side of Kemp often run DoorKing telephone entry or keypads. Weekend owners are a big part of these communities, and they tend to forget codes or lose remotes between visits, which leaves the access side carrying more resets and reprogramming than in a full-time neighbourhood. Humidity and corrosion near the shoreline attack keypad boards, telephone entry boards and loop connections. A panel built for an analogue line may also have stopped calling out after a phone service change.',
      'We test the entry side and the operator separately. Keypads, telephone entry boards and readers are generally available, and DoorKing’s cellular kit replaces a lost analogue line. We can rebuild and document the directory and codes for the community. Operator faults on a 6300 swing are typically limits, a board or gearbox wear. We work on entrances near Edgewater at Cedar Creek Lake and Tanglewood Beach, and along US-175.',
    ],
    faqs: [
      { q: 'Our Kemp lake community DoorKing panel stopped calling residents. What happened?', a: 'If the phone service changed, an older DoorKing panel built for analogue lines may have lost dial-out. Lake humidity can also corrode the telephone entry board. We test the panel and line, and if the line is the problem, DoorKing’s cellular kit usually restores dial-out without replacing the panel.' },
      { q: 'Can weekend owners in Kemp get new DoorKing codes without a new system?', a: 'Yes. On most DoorKing systems we can access the programming, add or remove codes, and rebuild the directory. We document the setup so the community has a record. Removing old codes that still open the gate also closes a security gap, which matters when homes change hands.' },
    ],
  },
  'kemp/ghost-controls': {
    description: 'Ghost Controls gate repair in Kemp, TX for weekend lake homes: drained solar batteries, insect-filled control boxes, remotes and corrosion. Call us now.',
    intro: 'Ghost Controls openers at Kemp’s weekend lake homes spend most of their time idle. Batteries, insects and humidity are the usual problems when owners return.',
    local: [
      'A Ghost Controls opener runs entirely on its battery, and at a Kemp weekend house that battery may sit for weeks between uses. Lead-acid batteries that are not cycled can sulfate, and a solar panel shaded by lake trees or covered in pollen may not keep them topped up. When the owner arrives, the gate is slow, stops partway or ignores the remote. Insects nesting in the control box and humidity near the shoreline add corrosion to the list, and remotes with dead cells are common.',
      'We test the battery under load and check the panel, then open the control box to clear insects and check for corrosion. Remotes and keypads are re-paired or replaced if needed. On TSS1 single and TDS2 dual swing openers, we also check arm gears and brackets. We can suggest small steps for weekend owners to keep the gate reliable. We work in Lakeside Acres, Pleasant Oak Beach and Tanglewood Beach.',
    ],
    faqs: [
      { q: 'Our Ghost Controls gate at our Kemp weekend house is dead every time we arrive. Why?', a: 'The battery is the likely cause. Left idle and undercharged, it loses capacity, especially if the panel is shaded or dirty. We test the battery and panel, replace a worn battery and re-site the panel if needed, so the gate is ready when you arrive.' },
      { q: 'Wasps built a nest in our Ghost Controls box in Kemp. Is the opener damaged?', a: 'Possibly. Insects can cause shorts and corrosion on the control board. We clear the nest, inspect and clean the board and terminals, and test the opener. If the board is damaged, we replace it. Sealing gaps in the box helps prevent a repeat.' },
    ],
  },
  'kemp/elite': {
    description: 'Elite gate opener repair in Kemp, TX for lake community and driveway gates: boards, capacitors and limits, plus corrosion from lake humidity. Call us today.',
    intro: 'Elite operators in Kemp drive community entrance swings and driveway slides near Cedar Creek Lake. Humidity and long idle spells are behind many of the faults.',
    local: [
      'Humidity and corrosion near the shoreline are a steady problem for any AC operator around Kemp, and an Elite is no exception. Boards and capacitors suffer when moisture gets into the cover, and insects nesting in a box that rarely opens make it worse. Elite units on community entrance swings serve weekend owners and full-timers, so traffic can swing from quiet weeks to busy holiday weekends. On driveway slides, chain and sprocket wear follows rust from the damp air.',
      'Boards, capacitors and limit switches for Elite units are commonly carried, so repairs are usually quick to scope. We identify the model before ordering, since board layouts vary. We clean corrosion from terminals, clear any nests and check seals. On slides, we inspect chains, sprockets and rollers. We work on Elite gates in Edgewater at Cedar Creek Lake, Lakeside Acres and Downtown Kemp.',
    ],
    faqs: [
      { q: 'The Elite gate at our Kemp lake home corrodes quickly. Is there anything to do?', a: 'Lake humidity speeds up corrosion. Keeping the cover sealed, clearing insects, and having terminals and boards checked on a regular service all help. We clean what is there, replace parts that are damaged, and check that the enclosure keeps moisture out.' },
      { q: 'Our Elite community slide in Kemp grinds after a quiet winter. What is wrong?', a: 'Rust on the chain and sprockets after months of damp air, or worn rollers, is the usual cause. We inspect the chain, sprockets, rollers and track, replace what is worn, and check the board and limits. Catching it before a busy weekend avoids a bigger failure.' },
    ],
  },
  'mabank/doorking': {
    description: 'DoorKing gate repair in Mabank, TX for gated golf and lake communities: telephone entry, keypads, vehicle loops and operators in one visit. Call us today.',
    intro: 'DoorKing access control runs at many of Mabank’s gated golf and lake community entrances. When residents queue at the gate, the fault is usually in the entry system or the loops.',
    local: [
      'Mabank’s gated communities on the north and east shores of Cedar Creek Lake put one entrance in front of many homes. Those gates combine a slide or swing operator with telephone entry, keypads and vehicle loops, and DoorKing makes a lot of that equipment. Telephone and keypad entry faults are the most common call, followed by loop detector failures. Holiday weekends bring high traffic, which exposes any weakness, and lake moisture corrodes boards and connections over time.',
      'We work out which part has failed before replacing anything. A manual open command tests the operator; a loop test checks the detectors; the panel is checked for dial-out, directory and relay output. Telephone entry boards like the 1835, keypads and loop detectors are generally available. DoorKing’s cellular kit replaces an analogue line. We service entrances at Pinnacle Club, Cedar Creek Landing, Cherokee Shores and Enchanted Isles.',
    ],
    faqs: [
      { q: 'Our Mabank community DoorKing gate failed on a holiday weekend. Why then?', a: 'High traffic puts the most strain on the system, and a weak part fails under load. A loop detector, a keypad or an operator board that was marginal will give out when the gate cycles constantly. We find the failed part and check the others, so the entrance is ready for the next busy weekend.' },
      { q: 'Can a DoorKing barrier arm work alongside our Mabank community gate?', a: 'Yes. DoorKing makes barrier arms such as the 1601, and they are often paired with telephone entry and loops on community and commercial entrances. We look at the traffic flow and the existing access control, and set up the barrier arm and gate so they work from the same system.' },
    ],
  },
  'mabank/liftmaster': {
    description: 'LiftMaster gate repair in Mabank, TX for lake community slides and estate driveway swings: loops, boards, batteries and lake-air corrosion. Call us today.',
    intro: 'LiftMaster operators in Mabank drive community entrance slides and estate driveway swings near Cedar Creek Lake. Loops, moisture and holiday traffic shape the repairs.',
    local: [
      'At Mabank’s gated community entrances, a LiftMaster slide such as the CSL24UL or SL3000UL often works alongside telephone entry and vehicle loops. A failed loop detector holds the gate open or keeps it shut, and that is one of the most common calls here. Holiday weekends push traffic through the entrance, wearing chains, rollers and limit switches faster. Near the lake, moisture and corrosion attack boards and terminals. On private estate swings, the issues are battery backup, receivers and limits.',
      'We split loop and access faults from operator faults before replacing anything. LiftMaster boards, limit switches and chains are commonly stocked, and DC models with battery backup have their batteries tested under load. Corroded terminals are cleaned or replaced. We cover community gates at Cedar Creek Country Club and Cedar Creek Landing, estate drives near Downtown Mabank, and properties along FM 90.',
    ],
    faqs: [
      { q: 'Our LiftMaster gate in Mabank stays open all the time. What causes it?', a: 'A loop detector seeing a vehicle that is not there is the usual cause, often a damaged loop wire or a failing detector. A photo-eye knocked out of line does the same. We test loops, detectors and safety devices before looking at the operator, since at a community entrance those are far more likely culprits.' },
      { q: 'Does lake air affect a LiftMaster opener in Mabank?', a: 'Yes. Moisture near Cedar Creek Lake corrodes terminals, boards and chains faster. Regular servicing helps catch corrosion early. We clean terminals, check seals on the control box, and replace damaged parts before they cause a failure, ideally before the busy holiday weekends.' },
    ],
  },
  'mabank/elite': {
    description: 'Elite gate opener repair in Mabank, TX for community slides and estate swings near Cedar Creek Lake: boards, capacitors, limits and chains. Call us today.',
    intro: 'Elite operators in Mabank handle community entrance slides and estate swings. High holiday traffic and lake moisture are the two things that wear them out.',
    local: [
      'An Elite slide at a Mabank community entrance does most of its work in bursts: quiet weekdays, then a holiday weekend that cycles it constantly. That pattern wears chains and sprockets and loads the board and capacitor, which can fail just when the entrance is busiest. Lake moisture adds corrosion. Vehicle loop detector failures and telephone entry faults are common at these entrances, and they can make an Elite look faulty when it is not.',
      'We test the access side and loops first, then the Elite itself. Boards, capacitors and limit switches are commonly carried, and chains and sprockets for slide units are readily available. We confirm the model, since an SL595 slide and a current SL3000UL have different boards. On estate swings, we check hinges and alignment. We work on gates at Pinnacle Club, Cherokee Shores and Enchanted Isles.',
    ],
    faqs: [
      { q: 'Our Elite gate at Pinnacle Club in Mabank grinds. How serious is it?', a: 'Grinding on an Elite slide usually means chain, sprocket or roller wear. On an entrance that sees heavy holiday traffic, it can get worse quickly. Catching it early keeps the repair small. We inspect the drive and track and replace what is worn.' },
      { q: 'Our Elite will not open for residents in Mabank but works with the remote. Where is the fault?', a: 'If the remote works, the Elite operator is responding. The fault is probably in the telephone entry, keypad or the wiring between them and the operator. We test each part of the access system to find where the signal stops.' },
    ],
  },
  'mabank/hysecurity': {
    description: 'HySecurity gate repair in Mabank, TX for barrier arms and community slides: Smart Touch codes, loops, belts and hydraulics diagnosed first visit. Call us.',
    intro: 'HySecurity operators in Mabank run some of the busier community and commercial entrances, including barrier arms. Downtime here means a queue at the gate.',
    local: [
      'HySecurity equipment is built for continuous duty, and in Mabank it tends to be on the entrances that cannot afford to stop: gated community slides and barrier arms carrying holiday-weekend traffic near Cedar Creek Lake. Vehicle loop detector failures and telephone or keypad entry faults are the common local issues, and on a HySecurity they can show as safety device faults. Lake moisture is hard on electronics and connections. On hydraulic models, seals and pressure need routine attention.',
      'We read the Smart Touch controller’s diagnostic codes before replacing anything, because they distinguish a safety device fault from a drive fault or a controller failure. Drive belts and chains on a SlideDriver or SlideSmart DC are consumables with predictable service intervals. Some specialised parts need ordering, and for busy entrances we can discuss holding spares. We work on entrances at Pinnacle Club and Cedar Creek Landing and on commercial gates along US-175.',
    ],
    faqs: [
      { q: 'Our HySecurity gate in Mabank shows an error code. What should we do?', a: 'Note the code and call us. Smart Touch codes are genuinely informative and often point at a safety device or loop fault rather than the operator. We read the code, test the device it points to, and fix the cause. Clearing the code without fixing the fault usually brings it back.' },
      { q: 'Should our Mabank community keep spare parts for its HySecurity gate?', a: 'For an entrance where downtime causes queues, it can be worth it. Belts, chains and some sensors are consumables. Specialised parts may need ordering. We can recommend a small set of spares based on your model and traffic, so a busy weekend is not lost to a parts wait.' },
    ],
  },
  'muenster/us-automatic': {
    description: 'US Automatic gate repair in Muenster, TX for wide ranch and equipment gates: batteries, arms, close timers and vehicle detection for farm rigs. Call us.',
    intro: 'US Automatic operators in Muenster often drive wide ranch and equipment gates that must pass tractors and stock trailers. Battery power and close timing matter most.',
    local: [
      'Muenster is farm country, and an entrance here is judged by whether a tractor, cattle trailer or feed truck can get through without anyone getting out. That pushes openings to sixteen feet or more, and a US Automatic Ranger or Patriot on a long leaf works hard. The free end sags, the arm and linkage carry more load, and every cycle costs more battery. The commonest damage is impact: a rig still in the opening when the close timer runs out, bending the arm or leaf.',
      'We load test the battery and check charging, then the gate’s sag and the arm for bending. Close timers and vehicle detection are set for the longest vehicle that uses the gate, not the family car. Ranger boards hold limit settings; Patriot units use limit switches. Arms, linkages and mounting hardware are available. We work on ranch entrances along FM 373 north and south of town, near Muenster Lake, and along US 82.',
    ],
    faqs: [
      { q: 'Our US Automatic gate in Muenster closed on a cattle trailer. How do we stop that?', a: 'The close timer and vehicle detection need setting for the longest rig. A short timer or a sensor that misses a tall or long trailer will close the gate too soon. We set the timer, position detection to see the trailer, and check the arm and leaf for impact damage.' },
      { q: 'Can a US Automatic handle a sixteen-foot equipment gate in Muenster?', a: 'The Ranger family is built for heavier swing gates, and a correctly sized setup can handle many wide farm gates. Sag at the free end must be controlled, since it adds load and drains the battery. We check the gate, hinges and battery capacity before advising.' },
    ],
  },
  'muenster/liftmaster': {
    description: 'LiftMaster gate repair in Muenster, TX for wide farm entrances and residential slides: bent arms, vehicle sensors and close timers set for rigs. Call us.',
    intro: 'LiftMaster gates in Muenster range from residential slides in town to wide dual-leaf equipment gates on farms. Impact from farm vehicles is a common call.',
    local: [
      'Wide openings for farm machinery are the defining gate in Muenster, and a LiftMaster on a dual-leaf equipment gate faces long, heavy leaves that sag at the free end. Vehicle sensors can miss tall or long rigs, so the gate closes on a trailer still in the opening. Opener arms bent by that impact are one of the most common repairs. In town, a residential slide off Main Street faces gentler conditions, with boards, receivers and limit drift the usual faults.',
      'After an impact we replace bent arms or brackets, check the leaf and hinges, and test the operator. Then we set the close timer and position vehicle detection for the longest vehicle using the gate. On heavy dual-leaf gates, a LiftMaster CSW24UL or similar heavy-duty swing may be needed. We work on gates near Muenster Lake, along the US 82 corridor and FM 373, and in Downtown Muenster.',
    ],
    faqs: [
      { q: 'A feed truck bent our LiftMaster arm in Muenster. Is the operator damaged?', a: 'Often only the arm and bracket are bent. We replace them, check the leaf and hinges, and test the operator for damage. Then we adjust the close timer and vehicle detection so the gate waits for long vehicles to clear.' },
      { q: 'Which LiftMaster suits a wide farm gate in Muenster?', a: 'It depends on the leaf weight and length. A wide dual-leaf gate usually needs a heavy-duty swing operator rather than a residential one. We weigh up the gate, check the hinges and sag, and recommend a model that fits the gate and the traffic it carries.' },
    ],
  },
  'muenster/ghost-controls': {
    description: 'Ghost Controls gate repair in Muenster, TX for farm and ranch swings: batteries, solar panels, bent arms and sensors that miss long trailers. Call us today.',
    intro: 'Ghost Controls openers in Muenster run solar ranch and farm gates that pass trailers and machinery. Battery health and setting the gate for long rigs are key.',
    local: [
      'Battery-driven Ghost Controls openers suit Muenster’s farm gates, where power is far off. Everything depends on that battery, and a wide ranch leaf that sags at the free end draws more energy on each cycle, so a tired battery shows up as slow travel or a gate that stops partway. Farm traffic adds impact risk: a trailer still in the opening when the timer closes the gate can bend the arm and move the mounting bracket. Sensors that miss tall or long rigs are a related issue.',
      'We test the battery and panel, then check the arm gears and brackets for impact damage. The auto-close timer and sensors are set for the longest vehicle that uses the gate. On wide dual openings, a TDS2XP may suit better than a lighter model, depending on the gate. We work on farm entrances along FM 373 and US 82 and near Muenster Lake.',
    ],
    faqs: [
      { q: 'Our Ghost Controls gate in Muenster closes too soon for our stock trailer. Can it be changed?', a: 'Yes. The auto-close timer can be lengthened and sensors repositioned to detect the trailer. We set both for the longest rig using the gate, and check the arm and bracket for any damage from earlier impacts, since a bent arm changes how the gate travels.' },
      { q: 'Is a Ghost Controls opener strong enough for a wide farm gate in Muenster?', a: 'It depends on the gate. Ghost Controls makes dual swing openers for wider openings, but sag, weight and length decide whether one is enough. We check the gate and battery capacity and tell you honestly whether it is a good match.' },
    ],
  },
  'muenster/elite': {
    description: 'Elite gate opener repair in Muenster, TX for wide equipment gates and residential slides: boards, capacitors, limits and impact-bent arms. Call us today.',
    intro: 'Elite operators in Muenster drive wide equipment gates and residential slides. Farm vehicle impact and long leaves sagging at the free end cause most of the work.',
    local: [
      'An Elite on a wide Muenster equipment gate works a long leaf that tends to sag at the free end, which loads the start capacitor and board on every cycle. Farm rigs add impact: an opener arm struck by a trailer still in the opening is bent and the limits knocked out of position. Vehicle sensors that miss tall or long machinery make that more likely. On residential slides in town, chain and sprocket wear and limit drift are the usual faults.',
      'We replace bent arms, check the leaf and hinges, and then repair the Elite at the board, capacitor or limits, all commonly carried. We identify the model first, since a CSW200UL and an older Miracle One are quite different. The close timer and vehicle detection are set for the longest vehicle. We work on gates in Downtown Muenster and along FM 373 and US 82.',
    ],
    faqs: [
      { q: 'Our Elite equipment gate in Muenster struggles to open. What is wrong?', a: 'A long leaf sagging at the free end makes the operator work harder, and the start capacitor or board can begin to fail. We check the gate and hinges, test the capacitor and board, and replace what has failed. Correcting the sag helps the repair last.' },
      { q: 'Can an Elite be set so it does not close on farm machinery in Muenster?', a: 'Yes. We set the close timer for the longest vehicle and position vehicle detection to see tall or long rigs. We also check the photo-eyes. That reduces the chance of the gate closing on a trailer still in the opening.' },
    ],
  },
  'peaster/us-automatic': {
    description: 'US Automatic gate repair in Peaster, TX for ranch entrances far from the house: remote range, chewed wiring, batteries and solar sizing. Call us today.',
    intro: 'US Automatic is used on many Peaster ranch entrances, where the house sits far enough back that nobody sees the gate. Range, wiring and the battery cause most callouts.',
    local: [
      'Ranch country north-west of Weatherford puts Peaster gates well away from the house, often out of sight and earshot. A US Automatic there runs from its battery, solar or AC charged, and a failing battery is the commonest cause of trouble. Peaster adds two more. Remote and keypad range drops at distant entrances, often because the receiver antenna sits low behind a steel post. And rodents in open pasture chew low-voltage wire laid shallow in the ground, cutting charge or control signals.',
      'We check the antenna, the cable run and the battery before the operator, because those three cause more callouts here than motors do. Solar panels and batteries that are undersized for daily use are resized. Wide, heavy leaves work hinge posts loose, so we check the posts on Ranger and Patriot installs too. Chewed wire is replaced and, where possible, run in conduit. We work in Woodland Lakes, Reata Ranch and Peaster Original Town, and along FM 920 and FM 1885.',
    ],
    faqs: [
      { q: 'Our US Automatic remote in Peaster now only works halfway down the drive. Why?', a: 'A weak remote battery, a receiver antenna mounted low behind a steel post, or both. On a long Peaster drive the antenna position makes a big difference. We test the remote, reposition or extend the antenna, and check the receiver. The operator itself is rarely the cause of lost range.' },
      { q: 'Rodents chewed the wiring on our US Automatic in Peaster. Can it be protected?', a: 'Yes. Low-voltage wire laid shallow in pasture is easy prey. We replace the damaged run and, where practical, put it in conduit or bury it deeper. Then we test the charge and control signals to make sure the operator is getting a clean supply.' },
    ],
  },
  'peaster/mighty-mule': {
    description: 'Mighty Mule gate opener repair in Peaster, TX for pipe farm gates and wide swings: solar batteries, arms, remote range and chewed wire. Call us today.',
    intro: 'Mighty Mule openers in Peaster run pipe farm gates and double swings on several acres. They are light-duty, so gate weight, battery size and range matter.',
    local: [
      'A Mighty Mule on a Peaster farm gate faces a long, unsupported pipe leaf or a wide double swing, often heavier than a light-duty opener is rated for. Hinge posts work loose under wide leaves, and the actuator arm strains, stripping internal gears. Solar panels and batteries undersized for daily use leave the gate slow or stopped by the evening. Remote range is a frequent complaint at distant entrances, and rodents chewing shallow low-voltage wire in pasture cut power or signals.',
      'We start by checking the gate’s weight and the hinge post against the opener’s rating. If it fits, a battery, arm, board or settings reset usually solves it. If not, a heavier operator is the honest recommendation. Range problems often need the receiver repositioned. Dual models such as the MM572W and FM502 are common on wide swings here. We work near Woodland Lakes and Reata Ranch and along the FM 920 corridor.',
    ],
    faqs: [
      { q: 'Our Mighty Mule on a wide double gate in Peaster keeps failing. Is it undersized?', a: 'Possibly. Light-duty openers on wide, heavy leaves wear arms and gears quickly, and loose hinge posts make it worse. We check the gate weight, hinges and post, and compare them to the opener’s rating. If it is undersized, we recommend a heavier operator rather than another round of parts.' },
      { q: 'Can the solar panel on our Peaster Mighty Mule be upgraded?', a: 'Often, yes. A panel and battery undersized for daily use leave the gate short of power, especially in winter. We look at how many times a day the gate runs, its weight and the panel’s sun exposure, and recommend a larger panel, a larger battery or both.' },
    ],
  },
  'peaster/ghost-controls': {
    description: 'Ghost Controls gate repair in Peaster, TX for ranch and pipe farm gates: batteries, solar sizing, antenna range and rodent-chewed wire. Call us today.',
    intro: 'Ghost Controls openers are common on Peaster ranch gates, often far from the house. Battery power, solar sizing and remote range are the usual problems.',
    local: [
      'Distant ranch entrances around Peaster are a natural fit for Ghost Controls, a DC opener built around its battery. Because battery health governs everything, a solar panel or battery undersized for daily use is one of the most common faults here. The gate slows, opens partway or responds only sometimes. Remote and keypad range at distant entrances is another, and rodents in pasture chewing shallow low-voltage wire can cut the link between panel, battery and control box.',
      'We test the battery and panel output first, then check the antenna, the wire run and the arm brackets. Hinge posts working loose under wide, heavy leaves are checked too, since they add load. On TDS2 dual swings we inspect both arms and their mountings. We also service gates owners installed themselves. We work in Woodland Lakes and Reata Ranch, and along FM 920 and FM 1885.',
    ],
    faqs: [
      { q: 'Our Ghost Controls keypad at our Peaster gate works only sometimes. What is wrong?', a: 'It could be keypad batteries, pairing loss or range. At a distant Peaster entrance, a receiver antenna mounted low or behind metal reduces signal. We test the keypad, re-pair it if needed, and reposition the antenna. If the opener’s own battery is weak, it may also respond intermittently.' },
      { q: 'How big should the solar panel be on a Ghost Controls gate in Peaster?', a: 'It depends on how often the gate runs, how heavy the leaves are, and how much winter sun the panel gets. A panel sized for a few cycles a day will fall short on a busy ranch entrance. We look at your traffic and the site and size the panel and battery to match.' },
    ],
  },
  'peaster/liftmaster': {
    description: 'LiftMaster gate opener repair in Peaster, TX for ranch entrances and wide swings: receivers, antennas, batteries, hinge posts and wiring. Call us today.',
    intro: 'LiftMaster runs ranch entrances and wide double swings on Peaster acreage. Range, wiring and hinge posts are where most of the faults start.',
    local: [
      'A LiftMaster at the end of a long Peaster drive often goes unseen, so faults creep up. A remote that needs pressing twice, then works only halfway down the drive, is usually a weak battery or a receiver antenna sitting low behind a steel post. Rodents chewing shallow low-voltage wire in pasture cause intermittent faults. On wide double swings, hinge posts work loose under heavy leaves and the operator struggles, which drains the battery on DC units like the LA412 or CSW24UL.',
      'We check the antenna, the cable run and the battery first, then the board and limits. Loose posts are re-set before the operator is adjusted, and chewed wire replaced and protected. Where solar charging is used, we check the panel is sized for daily use. We work on LiftMaster gates in Woodland Lakes, Reata Ranch and Peaster Original Town, and along FM 920.',
    ],
    faqs: [
      { q: 'Our LiftMaster gate in Peaster opens on its own sometimes. What causes that?', a: 'Damaged wiring is a common cause on rural lots, including wire chewed by rodents. A faulty receiver, a stuck remote button or a loop fault can also trigger it. We test the wiring, receiver, remotes and any detection devices to find the source and fix it.' },
      { q: 'Can a LiftMaster in Peaster run on solar?', a: 'Some LiftMaster DC operators can, and it is common at distant ranch entrances. The panel and battery need sizing for the gate’s weight and daily use, including in winter. We check traffic and sun before recommending a setup, so the gate does not run short of power.' },
    ],
  },
  'quinlan/liftmaster': {
    description: 'LiftMaster gate repair in Quinlan, TX for lakefront estates and gated communities near Lake Tawakoni: surge-damaged boards, grounding and limits. Call us.',
    intro: 'LiftMaster gates around Quinlan sit on lakefront estates and gated community entrances near Lake Tawakoni. Lightning and surges are a recurring cause of dead gates.',
    local: [
      'The lake side of Quinlan, along SH 276 and FM 751, is where most gate calls start. Lakefront estates sit at the end of long, exposed drives with nothing taller than the gate posts nearby, and storms come across the water with little in the way. On a LiftMaster, that means surge damage to control boards and keypads, sometimes days after the storm. Sandy or rocky ground near the shore makes swing arcs uneven and posts less stable.',
      'Fitting a new board without surge protection and a proper ground rod invites the same failure next spring, so we do all three. Long, exposed drives also mean long cable runs, and we check voltage at the gate on DC models like the LA400 and LA412. Community entrances with many users wear chains and limits faster. We work at Mountain View Club, Kitsee Knoll Estates, Panorama Estates and Waters Edge.',
    ],
    faqs: [
      { q: 'Our LiftMaster board in Quinlan failed again after a storm. Why does this keep happening?', a: 'Without surge protection and a proper ground, the board is exposed to the same surge path every storm. On open lakefront ground near Lake Tawakoni, that path gets used often. We replace the board and fit surge protection and a ground rod, so the next storm is far less likely to repeat the failure.' },
      { q: 'Does sandy ground near Lake Tawakoni affect a LiftMaster swing gate in Quinlan?', a: 'It can. Sandy or rocky ground under the swing arc can be uneven, and posts in loose soil may move. That throws off the gate’s travel and the operator’s limits. We check the post, the ground under the arc and the hinges, then reset the operator.' },
    ],
  },
  'quinlan/doorking': {
    description: 'DoorKing gate repair in Quinlan, TX for gated lake communities like Mountain View Club: entry panels, codes, surge damage and loops. Call us today.',
    intro: 'DoorKing access control runs at Quinlan’s gated lake communities, where one entrance serves many users. Storm surges and programming problems are the usual faults.',
    local: [
      'Community gate access systems with many users are one of Quinlan’s common gate issues, and DoorKing panels are a big part of them. A community like Mountain View Club runs one entrance for many households, so codes, directories and credentials change often. When records are not kept, the programming becomes hard to manage. Storms coming across Lake Tawakoni bring surges along the cable runs to the panel and controller, and damaged boards are a familiar result.',
      'We diagnose the access side and operator together. Telephone entry boards, keypads and readers are generally available, and we rebuild and document the directory when needed. After storms, we test the panel and controller and fit surge protection and grounding. DoorKing’s cellular kit replaces a dead analogue line. We work on entrances at Mountain View Club and Waters Edge, and along SH 34 and Loop 264.',
    ],
    faqs: [
      { q: 'Our DoorKing entry panel in Quinlan went dead after a storm. Is it ruined?', a: 'Usually only a board or device is damaged. Surges travel along the cable runs to the panel and controller. We test each component, replace what was damaged, and fit surge protection and grounding so the next storm across the lake does not repeat it.' },
      { q: 'How do we manage hundreds of DoorKing codes at our Quinlan community?', a: 'We can access the programming, clean up old codes, rebuild the directory and document the setup. That gives the community a clear record. Removing codes that should no longer work also closes a security gap, which matters at a busy shared entrance.' },
    ],
  },
  'quinlan/elite': {
    description: 'Elite gate opener repair in Quinlan, TX for lakefront estate swings and community slides: boards, capacitors and limits, with surge protection added. Call us.',
    intro: 'Elite operators in Quinlan drive lakefront estate swings and community slides. Lightning, surges and many daily users shape what fails.',
    local: [
      'An Elite is an AC operator, and on Quinlan’s exposed lakefront estates its connection to the grid is a weak spot in storms. Surges and lightning damage boards, and a dead gate after a storm is a familiar local call. On community entrance slides with many users, the board and capacitor see constant starts, and chains and sprockets wear on the cycle count. Sandy or rocky ground near the shore can also move posts and throw limits off.',
      'We repair Elite units at the board, capacitor or limits, all commonly carried, and fit surge protection and a proper ground where missing. We confirm the model before ordering, since an SL595 slide and a CSW200UL swing differ. On slides, we check chains, sprockets and rollers. We work on gates in Kitsee Knoll Estates, Panorama Estates and Downtown Quinlan, and along FM 751.',
    ],
    faqs: [
      { q: 'Our Elite lakefront gate in Quinlan was hit by a power surge. Can it be repaired?', a: 'Usually, yes. Surges typically damage the board and sometimes the capacitor, both replaceable. We test the operator, replace the damaged parts, and add surge protection and grounding, which matter on exposed lakefront ground where storms come straight across the water.' },
      { q: 'Our Quinlan community Elite slide grinds. What should we do?', a: 'Have it checked soon. Grinding means chain, sprocket or roller wear, and on a community gate with many users it gets worse quickly. Replacing a chain and sprocket now is far cheaper than a gearbox later. We inspect the drive and track and replace what is worn.' },
    ],
  },
  'quinlan/us-automatic': {
    description: 'US Automatic gate repair in Quinlan, TX for ranch and lakefront estate gates: batteries, lightning-hit boards, charge controllers and grounding. Call us.',
    intro: 'US Automatic operators in Quinlan run ranch entrances and lakefront estate gates on long, open drives. Storms and battery wear cause most of the trouble.',
    local: [
      'Long, exposed drives on Quinlan’s lakefront estates and the ranch land around town suit US Automatic, which runs its motor from a battery charged by solar or a low-voltage AC charger. On open ground near Lake Tawakoni, the gate is often the tallest metal object nearby, and lightning can take out a board or charge controller without leaving a mark. The battery remains the most frequent part to fail, and heat shortens its life. Sandy or rocky ground can move posts and add load.',
      'We test the battery under load, the charge path and the board. After storms we test the charge controller in particular, since a failed one makes a new battery go flat again. Patriot units have limit switches; Ranger boards hold limits that may need resetting. Grounding and surge protection are worth adding. We work on gates near Waters Edge and Panorama Estates, and along SH 276 Quinlan Parkway.',
    ],
    faqs: [
      { q: 'Our US Automatic gate in Quinlan stopped after lightning nearby. What was damaged?', a: 'Most often the control board or the charge controller. A nearby strike can induce a surge through the wiring even on a solar system. We test the board, charge controller, battery and panel, replace what failed, and recommend grounding to reduce the risk next time.' },
      { q: 'How often should the battery be replaced on a US Automatic in Quinlan?', a: 'There is no fixed interval; heat, traffic, the gate’s weight and panel siting all matter. Texas heat shortens battery life. When the gate starts to slow or stall, a load test tells us whether the battery is the cause. We test it on every service.' },
    ],
  },
  'sherman/liftmaster': {
    description: 'LiftMaster gate repair in Sherman, TX for contractor yards, commercial slides and home swing gates: rollers, chains, loops and alignment. Call us today.',
    intro: 'LiftMaster gates in Sherman split between busy contractor and industrial yards on the west side and residential swings in the subdivisions. Each needs a different diagnosis.',
    local: [
      'The semiconductor build-out on Sherman’s west side has brought contractor laydown yards, equipment storage and supplier sites, and many of them want a secure gate that opens for trucks all day. A LiftMaster commercial slide such as the SL3000UL or HDSL24UL in that role wears rollers, chains and limit switches first, and a loop detector that misses a truck stops a line of deliveries. Across town, residential swings on Blackland Prairie clay drift out of alignment as the soil swells and shrinks with the seasons.',
      'For a yard gate, the repair is usually rollers, chain, limits or the loop detector, with a check that the operator suits the traffic. For a home swing, it is alignment first, then limits, battery or board on units like the LA400 or CSW24UL. We treat commercial and residential calls as separate jobs from the start. We work in Pebblebrook, Heritage Ranch and Canyon Creek Estates, and on commercial gates along US 75 and SH 56.',
    ],
    faqs: [
      { q: 'Our LiftMaster yard gate in Sherman will not open for some trucks. What is wrong?', a: 'Usually the loop detector or the loop itself. A loop that misses high-clearance trucks, or a detector set at the wrong sensitivity, will not trigger the gate. We test the loop and detector, adjust or replace them, and confirm the gate opens for every vehicle type that uses the entrance.' },
      { q: 'Why does our Sherman LiftMaster swing gate need adjusting after summer?', a: 'Blackland Prairie clay swells in wet springs and shrinks in August, and gate posts move with it. The leaf drifts out of alignment, and limits and photo-eyes stop matching. We realign the gate and reset the settings. A properly sized footing reduces how often this is needed.' },
    ],
  },
  'sherman/hysecurity': {
    description: 'HySecurity gate repair in Sherman, TX for industrial and contractor yard slides: Smart Touch codes, loops, belts, chains and hydraulics. Call us today.',
    intro: 'HySecurity operators in Sherman run industrial cantilever slides and secure yard gates on the busy west side. When one stops, deliveries stop with it.',
    local: [
      'Industrial cantilever slides at Sherman’s contractor yards and supplier sites are the kind of job HySecurity builds for: continuous high-cycle duty on secure sites. That duty wears drive belts, chains and bearings on predictable intervals, and a loop detector fault at a truck entrance can halt traffic. Clay movement shifting posts and tracks adds another load. Because these gates protect working sites, getting the diagnosis right on the first visit matters more than finding the cheapest part.',
      'We read the Smart Touch controller’s codes before replacing anything, because they separate safety device faults from drive faults and controller failures. SlideDriver and SlideSmart DC units have belts and chains that are best replaced on schedule. Hydraulic models need pressure and seals checked. Some parts need ordering, and for critical sites we can discuss holding spares. We work on industrial gates along US 82 and SH 11 and on the west side near the semiconductor sites.',
    ],
    faqs: [
      { q: 'Our HySecurity SlideDriver in Sherman stopped with an error. How quickly can it be diagnosed?', a: 'The Smart Touch controller’s codes usually point us straight at the fault area, whether a safety device, the drive or the controller. We read the code, test the part it points to and repair it. For a site where downtime stops deliveries, we also look at whether spares should be held on site.' },
      { q: 'Should belts and chains on our Sherman HySecurity be replaced before they fail?', a: 'On a high-cycle industrial gate, yes. Belts and chains are consumables with predictable service intervals, and planned replacement costs far less than the unplanned stoppage it prevents. We can set up a service schedule based on your traffic and model.' },
    ],
  },
  'sherman/doorking': {
    description: 'DoorKing gate repair in Sherman, TX for multi-family entrances and commercial yards: telephone entry, card readers, loops and operators. Call us today.',
    intro: 'DoorKing systems in Sherman run multi-family entrances and some commercial yards. Most faults are in access control, loops or programming, not the gate.',
    local: [
      'Access control systems on multi-family entrances are a common Sherman gate issue, and DoorKing makes a lot of them. A telephone entry panel, card readers and loops have to work together with the operator, and when tenants turn over, codes and directories change constantly. Truck entrances at contractor yards bring loop detector faults. Clay movement shifting posts and tracks can also damage loops cut into the slab and throw the operator’s limits off.',
      'We test the access side and operator together. Telephone entry boards, keypads and readers are generally available, and we can rebuild and document a directory after a management change. DoorKing’s cellular kit fixes panels that lost dial-out after a phone change. On the operator, a 9150 slide or 6300 swing usually needs limits, a board or gearbox work. We cover entrances in Sherman Heights and Bel Air Village, and commercial gates along US 75.',
    ],
    faqs: [
      { q: 'Tenants at our Sherman complex say the DoorKing card reader does not work. Where is the fault?', a: 'It could be the reader, the credentials, the controller programming or the wiring. If other credentials work, the issue may be the cards or their programming. If none do, it is likely the reader or wiring. We test each and fix the failed part, then document any programming changes.' },
      { q: 'Can a DoorKing barrier arm help at our Sherman yard entrance?', a: 'It can. A barrier arm such as the DoorKing 1601 controls vehicle traffic quickly, and it pairs with loops and access control. On a truck entrance, it is often used alongside a slide gate. We look at the traffic and security needs and recommend what suits the site.' },
    ],
  },
  'sherman/elite': {
    description: 'Elite gate opener repair in Sherman, TX for commercial slides and residential swings: boards, capacitors, limits and chain wear. Repair first. Call us.',
    intro: 'Elite operators in Sherman run commercial slides near the industrial side and residential swings across town. High cycles and seasonal clay movement drive most repairs.',
    local: [
      'A commercial slide at a Sherman contractor yard puts an Elite SL3000UL or older SL595 through many truck cycles a day. Rollers, chains and limit switches go first, and the board and capacitor feel the constant starts. Across town, residential Elite swings on Blackland Prairie clay drift with the seasons, and as the leaf moves out of line, limit switches stop matching and the capacitor works harder. Two different jobs, and we treat them that way.',
      'On a commercial slide we replace chains, sprockets, rollers or limits and check the loops and the operator’s duty rating. On a residential swing we correct alignment first, then the board, capacitor or limits, all commonly carried. We identify the Elite model before ordering, since boards differ by generation. We work on gates in Pebblebrook and Heritage Ranch and on commercial sites along US 82.',
    ],
    faqs: [
      { q: 'Our Elite commercial slide in Sherman keeps wearing chains. Is it the wrong unit?', a: 'Possibly, but check the gate first. A dragging roller or a shifted track wears chains quickly on a high-cycle gate. We inspect rollers, track and alignment. If the gate is sound and traffic has outgrown the operator, a heavier duty slide is the lasting fix.' },
      { q: 'Our residential Elite in Sherman stops short every August. Why?', a: 'Clay shrinks in the summer heat, and the post moves, so the gate no longer reaches its limit positions. We realign the gate and reset the limits. If it happens every year, a footing sized for the soil reduces the drift.' },
    ],
  },
  'valley-view/liftmaster': {
    description: 'LiftMaster gate repair in Valley View, TX for gates that rode out the May 2024 tornado: posts, hinges, boards and twisted panels checked. Call us today.',
    intro: 'Many Valley View gates were pushed, chained or propped after the May 2024 tornado. A LiftMaster that never quite worked again often has hidden damage.',
    local: [
      'An EF3 tornado tore through Valley View on 25 May 2024, and many gates in town and on the FM roads were put back into service unchecked. Wind on a gate panel goes straight into hinges, post and operator arm. On a LiftMaster swing, that can leave a post a few degrees out, a bent arm that still moves, or a board that took a surge when power came back. Slide gates may have twisted panels or debris jamming the track. A gate that looks fine can bind enough to burn out a motor the following summer.',
      'We check the post, hinges and board, not just the part that stopped. On slides like the RSL12UL or CSL24UL, we clear the track and check the rollers. Commercial slides on the I-35 frontage get the same treatment, plus a look at loops and safety devices. We work on gates in Downtown Valley View, the Spring Creek valley and along FM 922 and FM 3002.',
    ],
    faqs: [
      { q: 'Our LiftMaster in Valley View has not worked right since the tornado. What should be checked?', a: 'The post, hinges, arm and board. Storm wind can leave a post slightly out of plumb, a bent arm that still moves, or a board damaged by a surge when power returned. We check each one, not just the part that stopped, so the gate does not fail again later.' },
      { q: 'Can the storm-damaged board on our Valley View LiftMaster be replaced on its own?', a: 'Usually, yes. A surge from the storm or the power coming back often kills the board without harming the motor. We test the motor and accessories, replace the board, and check whether the gate itself is binding, since that would stress the new board too.' },
    ],
  },
  'valley-view/us-automatic': {
    description: 'US Automatic gate repair in Valley View, TX for solar ranch gates after storm damage: shifted panels, batteries, boards and posts. Call us today.',
    intro: 'US Automatic operators run solar ranch gates on the FM roads around Valley View. After the 2024 tornado, panels, posts and boards all need a second look.',
    local: [
      'Acreage on the FM roads around Valley View often relies on solar US Automatic gates, and the May 2024 tornado was hard on them. High winds shifted or broke solar panels, and a panel that is now a few degrees off collects less every day, leaving the battery short. Posts pushed out of plumb make each cycle cost more. Power surges during the storm and outages afterward may have damaged boards or charge controllers on AC-charged units. The battery itself wears out in the heat regardless.',
      'We check the panel’s mounting and angle, test the battery under load, and test the charge controller and board. The gate, post and hinges get checked too, since a binding gate drains the battery. Patriot units have limit switches; Ranger boards hold limit settings. We work on ranch entrances along FM 922 and FM 3002 toward Johnson Branch, and in the Spring Creek valley.',
    ],
    faqs: [
      { q: 'The solar panel on our US Automatic in Valley View moved in the storm. Does that matter?', a: 'Yes. A panel knocked out of angle collects less sun all day, every day, and the battery slowly runs short. We re-mount and re-aim the panel, test the battery under load and check the charge controller. If the panel cracked, we replace it.' },
      { q: 'Our US Automatic in Valley View stalls in the summer heat. Why?', a: 'Heat wears out the battery, and a gate binding on a storm-shifted post makes it worse by drawing more current. We test the battery and check the gate, post and hinges. Replacing a worn battery and freeing the gate usually solves it.' },
    ],
  },
  'valley-view/elite': {
    description: 'Elite gate opener repair in Valley View, TX: surge-damaged boards, capacitors and limits on driveway and I-35 frontage commercial slides. Call us now.',
    intro: 'Elite operators in Valley View run driveway gates and commercial slides on the I-35 frontage. Storm surges and hidden wind damage are the common causes of failure.',
    local: [
      'Power surges and outages killing control boards are one of Valley View’s common gate faults, and an Elite AC operator connected to the grid is exposed to both. After the 2024 tornado, boards that took a surge when the power came back may still be failing now. Commercial slides on the I-35 frontage also deal with debris and twisted panels jamming the track. Wind damage elsewhere is often hidden: a bracket slightly bent, a post a few degrees out, limit switches knocked out of place.',
      'We test the board, capacitor and limits, all commonly carried, and check the gate mechanically before fitting parts. On slides, we clear the track and inspect rollers, chains and sprockets. We confirm the model first, since an older Elite and a current SL3000UL have different boards. We cover commercial gates near exits 485 to 487 on the I-35 frontage and driveway gates in Downtown Valley View.',
    ],
    faqs: [
      { q: 'Our Elite commercial slide on the Valley View I-35 frontage jams. What is wrong?', a: 'Debris in the track or a twisted panel is a common cause after storms. Worn rollers or a stretched chain can also cause it. We clear and check the track, inspect the rollers and drive, and repair or replace what is damaged.' },
      { q: 'Is surge protection worth adding to an Elite in Valley View?', a: 'Yes. Surges and outages are a known cause of board failures here, and surge protection reduces the risk. We fit it during a repair and check grounding. It is a small addition compared with a replacement board after the next storm.' },
    ],
  },
  'valley-view/ghost-controls': {
    description: 'Ghost Controls gate repair in Valley View, TX for solar ranch gates: wind-shifted panels, batteries, arm brackets and control boxes. Call us today.',
    intro: 'Ghost Controls openers on Valley View ranch gates depend on battery and solar. Storm wind that shifted panels or loosened brackets is a frequent hidden cause.',
    local: [
      'Solar panels shifted or broken by high winds are a common Valley View problem, and a Ghost Controls opener depends on that panel to keep its battery charged. When the battery falls behind, the gate slows, stops partway or responds only sometimes. The 2024 tornado also stressed posts and arm brackets, and a bracket that moved slightly changes the arm’s geometry and adds load. Debris can damage control boxes and receivers.',
      'We test the battery and panel output, re-mount or replace damaged panels, and check the arm brackets and gears. On TSS1 and TDS2 openers we also test the auto-close timer and sensors. Control boxes and receivers are inspected for storm damage, since debris and water can reach them. We work on ranch gates along FM 922 and FM 3002 and in the Spring Creek valley.',
    ],
    faqs: [
      { q: 'Our Ghost Controls gate in Valley View opens partway since the storm. Why?', a: 'A shifted or damaged solar panel may be undercharging the battery, or a moved arm bracket is adding load. We test the battery and panel, check the bracket and arm, and fix whichever is causing it. Often both need attention after a big storm.' },
      { q: 'Can a storm-damaged Ghost Controls opener in Valley View be repaired?', a: 'Usually, yes. Panels, batteries, arms, brackets and control boxes can be replaced individually. We check each part, replace what was damaged, and test the full cycle. Full replacement is only needed if the opener itself is badly damaged, which is less common than owners expect after a storm.' },
    ],
  },
  'whitesboro/us-automatic': {
    description: 'US Automatic gate repair in Whitesboro, TX for horse ranch entrances on US 377: batteries, wide-leaf arms, long wire runs and posts. Call us today.',
    intro: 'US Automatic runs many horse ranch entrances around Whitesboro. Wide leaves for trailers, long drives and settling posts all put load on the battery.',
    local: [
      'Established horse ranches south of Whitesboro along US 377 need entrances wide enough for a truck towing a long trailer. A US Automatic Ranger on those wide dual leaves works hard, and heavy decorative iron on tall posts puts real leverage on the footing. Posts settling in lighter western Grayson County soils let the gate drop, and the operator strains, drawing more current and draining the battery faster. Long drives need solar or long wire runs, and long DC runs lose voltage.',
      'We test the battery under load and check the charge path, then post plumb, hinge wear and the operator rating against the leaf weight. Ranger boards hold limit settings; Patriot units use limit switches. Long runs are checked for voltage drop and corroded terminals. We work on entrances at Horseman’s Ranch, along the SH 56 corridor and in the US 377 south horse country.',
    ],
    faqs: [
      { q: 'Our heavy decorative ranch gate in Whitesboro strains on a US Automatic. What should we check?', a: 'Post plumb, hinge wear and the operator rating. A heavy leaf on a tall post that has moved slightly drops and binds, and the operator strains. We check each, correct the post or hinges, and confirm the operator is rated for the actual weight of the leaf.' },
      { q: 'Can our Whitesboro ranch gate use AC charging on a long drive?', a: 'Often, yes. US Automatic operators run from the battery either way, and a low-voltage charger lead can run a good distance. Where there is no practical outlet, solar is simpler. We look at the drive length, traffic and outlet location before recommending.' },
    ],
  },
  'whitesboro/liftmaster': {
    description: 'LiftMaster gate repair in Whitesboro, TX for wide ranch and estate entrances: post plumb, hinges, boards and batteries checked before parts. Call us today.',
    intro: 'LiftMaster gates in Whitesboro range from estate swings to wide ranch entrances built for horse trailers. The post and hinges matter as much as the operator.',
    local: [
      'Wide ranch entrances near Whitesboro carry heavy dual leaves on tall stone or pipe columns, and they have to pass a truck towing a long trailer. A LiftMaster on that kind of gate feels every bit of post movement. When the post settles even slightly in the lighter western Grayson County soils, the gate drops and the operator strains, drifting off its limits and wearing its board. Long drives also mean long wire runs or solar, which bring voltage and battery issues on DC models like the CSW24UL.',
      'We check post plumb, hinge wear and the operator rating against the leaf weight before replacing a motor or board. Where the operator is undersized, a heavier LiftMaster is the honest fix. Batteries and wire runs are tested. We work on gates at Horseman’s Ranch, in Downtown Whitesboro, and along US 82 and FM 901.',
    ],
    faqs: [
      { q: 'Our LiftMaster ranch gate in Whitesboro has started dragging. Is the opener failing?', a: 'More likely the post or hinges. A heavy leaf on a tall post that has settled drops and drags, and the opener strains. We check post plumb and hinge wear, correct them, then reset the limits. Fixing the gate first stops the opener from failing early.' },
      { q: 'Is a LiftMaster strong enough for a wide horse trailer gate in Whitesboro?', a: 'It depends on the model and the leaf. A heavy-duty LiftMaster swing can handle many wide ranch gates, but a residential unit on heavy iron will struggle. We weigh up the gate, check the columns and hinges, and recommend a model rated for it.' },
    ],
  },
  'whitesboro/elite': {
    description: 'Elite gate opener repair in Whitesboro, TX for heavy estate and ranch swings: capacitors, boards, limits and the posts behind them. Call us today.',
    intro: 'Elite operators in Whitesboro drive heavy estate swings and ranch entrances. Heavy iron on settling posts is the usual cause of capacitor and limit faults.',
    local: [
      'Heavy decorative ranch entrance gates on tall posts are typical around Whitesboro, and an Elite AC operator on one feels the load. A leaf with a ranch name worked into the iron is heavy, and when its post settles in the lighter soils west of town, the gate drops and binds. The start capacitor and board strain on every cycle, and limit switches stop matching where the gate actually stops. Long drives can also mean long wire runs that lose voltage.',
      'We check the post, hinges and the operator’s rating before replacing electrical parts. Boards, capacitors and limit switches are commonly carried. We confirm the model, since a CSW200UL and an older Miracle One differ. Where the leaf is too heavy for the existing Elite, we recommend a properly rated operator. We work on gates near Trolinger Park, along SH 56 and in the US 377 south horse country.',
    ],
    faqs: [
      { q: 'The capacitor on our Elite in Whitesboro keeps failing. Why?', a: 'Repeated capacitor failures usually point to extra load. A heavy decorative leaf on a settling post binds, and the motor strains on every start. We check the post, hinges and gate weight against the operator’s rating, and fix the cause before fitting another capacitor.' },
      { q: 'Is a LiftMaster Elite Series CSW200UL suitable for a Whitesboro ranch gate?', a: 'It is a commercial swing operator and suits many heavy gates. Whether it is right depends on the leaf weight, length and post. We check those, along with hinge wear and post plumb, and recommend it or a different setup accordingly, so the operator is not working beyond its rating.' },
    ],
  },
  'whitesboro/ghost-controls': {
    description: 'Ghost Controls gate repair in Whitesboro, TX for solar ranch entrances: batteries, panels, arms and settling posts on long drives. Call us today.',
    intro: 'Ghost Controls openers run solar ranch gates on long Whitesboro drives. Battery health, wide leaves and settling posts decide how well they work.',
    local: [
      'Long drives around Whitesboro often need solar, and Ghost Controls builds its openers around a battery charged by a panel. Wide entrances for trucks and horse trailers mean long, heavy leaves that use more energy per cycle, and a battery that has lost capacity shows up as slow travel or a gate that stops partway. Posts settling in lighter western Grayson County soils let the leaf drop, which loads the arm gears and can move the mounting bracket.',
      'We test the battery and panel output first, then check post plumb, hinges, arm gears and brackets. On wide dual entrances, a TDS2XP may suit better than a lighter model. Auto-close timers and sensors are set for the longest trailer that uses the gate. We work on ranch gates at Horseman’s Ranch, along US 377 and FM 901.',
    ],
    faqs: [
      { q: 'Our Ghost Controls ranch gate in Whitesboro is slow on cloudy days. What is wrong?', a: 'A battery losing capacity, a panel too small for the gate’s demand, or both. Wide, heavy leaves draw more energy per cycle. We test the battery and panel, replace what is worn, and resize the panel or battery if needed.' },
      { q: 'Can a Ghost Controls opener handle a wide horse trailer gate in Whitesboro?', a: 'It depends on the gate weight, length and post condition. Ghost Controls makes dual openers for wider gates. We check the gate and battery capacity and tell you honestly whether it is a good match or a heavier operator is needed.' },
    ],
  },
}
export default copy
