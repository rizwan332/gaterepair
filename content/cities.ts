/**
 * Service-area cities.
 *
 * Every city on the client's list gets its own page. What keeps that defensible
 * is the depth of the data below, not the page count — see CITY-PAGES.md.
 *
 * Benchmark from the competitor audit: Metro's Plano page is ~3,000 words and
 * ~5% genuinely local. 4 Sure's is ~2,100 words and ~20%. Neither names a single
 * neighborhood, zip code or response time. Tier 1 pages here are shorter and
 * roughly half unique.
 *
 * ⚠️ `responseBand` values are provisional. They are derived from rough drive
 * times and MUST be re-checked against the client's actual base location before
 * launch — publishing an arrival time you cannot hit destroys the trust the
 * number exists to build. `content/business.ts -> address` is still unconfirmed.
 *
 * ⚠️ `gateProfile` is populated for Tier 1 from general North Texas knowledge as
 * a starting draft. These must be replaced with the client's technician
 * interview answers (see CITY-PAGES.md §5) — that is the content no competitor
 * can replicate.
 */

export type GateProfile = {
  dominant: string
  commonGateTypes: string[]
  commonBrands: string[]
  commonIssues: string[]
}

export type City = {
  slug: string
  name: string
  county: string
  tier: 1 | 2 | 3
  zips?: string[]
  neighborhoods?: string[]
  landmarks?: string[]
  majorRoads?: string[]
  nearbyCities?: string[]
  responseBand?: string
  gateProfile?: GateProfile
  localAngle?: string
  faqs?: { q: string; a: string }[]
}

// ---------------------------------------------------------------------------
// TIER 1 — full pages, 1,500–1,800 words, launch wave 1
// ---------------------------------------------------------------------------

export const tier1Cities: City[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    tier: 1,
    zips: ['75201', '75204', '75205', '75209', '75214', '75218', '75219', '75225', '75230', '75231', '75248'],
    neighborhoods: ['Preston Hollow', 'Lakewood', 'Bluffview', 'Kessler Park', 'Lake Highlands', 'Oak Cliff', 'Turtle Creek', 'Devonshire'],
    landmarks: ['White Rock Lake', 'NorthPark Center', 'Klyde Warren Park', 'Dallas Arboretum'],
    majorRoads: ['I-35E', 'US-75 Central Expressway', 'Loop 12', 'Dallas North Tollway'],
    nearbyCities: ['university-park', 'highland-park', 'irving', 'mesquite', 'garland', 'richardson'],
    responseBand: '30–60 minutes',
    gateProfile: {
      dominant: 'A wide split between estate driveway gates in the northern neighborhoods and high-cycle commercial and multi-family entrances closer to the core',
      commonGateTypes: ['Wrought iron swing', 'Estate slide', 'Commercial slide', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic', 'FAAC'],
      commonIssues: ['Control board failure', 'Clay-soil post movement causing bind', 'Photo-eye faults', 'High-cycle chain wear on apartment entrances'],
    },
    localAngle:
      'Dallas gate work splits cleanly in two. North of Northwest Highway — Preston Hollow, Bluffview, Devonshire — it is mostly ' +
      'wrought iron estate gates on long private drives, many of them installed twenty or more years ago and still running the ' +
      'original operator. Those calls are usually a control board or a capacitor, and replacing the whole unit is rarely necessary. ' +
      'Closer to the core and out toward the eastern side of the county it is apartment, office and warehouse entrances running ' +
      'hundreds of cycles a day, where the same part wears out ten times faster and the real question is whether the operator was ' +
      'ever specified for that duty cycle. We diagnose the two very differently.',
    faqs: [
      {
        q: 'How quickly can you reach my part of Dallas?',
        a: 'Most of Dallas proper is within 30–60 minutes of a Shield truck, and we run 24/7. Travel across the city varies a lot with traffic on US-75 and I-35E, so we give you a real arrival window when you call rather than a vague "sometime today".',
      },
      {
        q: 'My gate closed fine in spring and now it drags. Nothing has changed.',
        a: 'The ground has changed. Dallas sits on expansive clay that swells when wet and shrinks hard through a dry August, and gate posts move with it. The gate is usually straight — the post is not. Realigning it is a far cheaper fix than the operator replacement you may have been quoted for the resulting strain.',
      },
      {
        q: 'Do you work on apartment and commercial gates in Dallas?',
        a: 'Yes, and they are a large part of what we do here — including loop detectors, barrier arms, telephone entry systems and multi-gate properties. High-cycle entrances need a different service approach to a residential driveway.',
      },
    ],
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    tier: 1,
    zips: ['75023', '75024', '75025', '75074', '75075', '75093', '75094'],
    neighborhoods: ['West Plano', 'Willow Bend', 'Legacy West', 'Deerfield', 'Kings Ridge', 'Prestonwood', 'Whiffletree'],
    landmarks: ['Legacy West', 'Arbor Hills Nature Preserve', 'Oak Point Park', 'Shops at Legacy'],
    majorRoads: ['Dallas North Tollway', 'US-75', 'President George Bush Turnpike', 'Preston Road'],
    nearbyCities: ['frisco', 'allen', 'richardson', 'carrollton', 'the-colony', 'murphy'],
    responseBand: '30–60 minutes',
    gateProfile: {
      dominant: 'Established 1990s–2000s gated communities in West Plano alongside newer HOA-managed entrances around Legacy',
      commonGateTypes: ['Slide gate', 'Wrought iron swing', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'DoorKing'],
      commonIssues: ['Control board failure on ageing operators', 'Telephone entry system faults', 'Limit switch drift', 'Photo-eye misalignment'],
    },
    localAngle:
      'Most of the gate calls we take in Plano are in the West Plano and Willow Bend neighborhoods, and they follow a clear pattern: ' +
      'slide operators installed when those communities were built in the 1990s and early 2000s that have finally outlived their ' +
      'control boards. Parts for that generation of LiftMaster and Elite equipment are still readily available, so a board swap ' +
      'almost always beats a full operator replacement — which is not always what people are told. The other recurring Plano job ' +
      'is HOA telephone entry systems that stopped working after a community changed phone providers; those older call boxes need ' +
      'an analogue line, and moving to VoIP breaks them. The fix is usually a cellular module rather than a whole new system.',
    faqs: [
      {
        q: 'Our HOA gate call box stopped working after we switched phone service. Why?',
        a: 'Older telephone entry systems rely on an analogue phone line. When a community moves to VoIP or fibre, the signalling those units expect is no longer there and they stop dialling out. The usual fix is a cellular module rather than replacing the entire system — considerably cheaper, and we see this constantly in Plano communities.',
      },
      {
        q: 'Is a twenty-year-old gate operator in West Plano worth repairing?',
        a: 'Usually yes. Parts for the LiftMaster and Elite units common in those neighborhoods are still available, and the mechanical side of these operators lasts a long time. We look at gearbox condition and parts availability rather than the date on the label.',
      },
      {
        q: 'Do you work with Plano HOAs and property managers?',
        a: 'Yes — including documented quotes for board approval, multi-gate properties and scheduled maintenance for community entrances that run high cycle counts.',
      },
    ],
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin County',
    tier: 1,
    zips: ['75033', '75034', '75035', '75036', '75068'],
    neighborhoods: ['Starwood', 'Newman Village', 'Phillips Creek Ranch', 'Stonebriar', 'Frisco Lakes', 'Panther Creek'],
    landmarks: ['The Star', 'Stonebriar Centre', 'Toyota Stadium', 'Frisco Commons'],
    majorRoads: ['Dallas North Tollway', 'Preston Road', 'Sam Rayburn Tollway', 'Legacy Drive'],
    nearbyCities: ['plano', 'prosper', 'little-elm', 'the-colony', 'mckinney', 'celina'],
    responseBand: '45–75 minutes',
    gateProfile: {
      dominant: 'Newer master-planned communities with HOA-managed entrances, plus custom estate gates in Starwood and Newman Village',
      commonGateTypes: ['HOA community slide', 'Estate swing', 'Ornamental iron'],
      commonBrands: ['LiftMaster', 'Viking', 'DoorKing', 'Elite'],
      commonIssues: ['High-cycle wear on community entrances', 'Access control faults', 'Safety loop failures', 'Battery and solar charging issues'],
    },
    localAngle:
      'Frisco is newer than most of the metroplex, and that changes the work. Rather than twenty-year-old operators dying of old age, ' +
      'the recurring problem here is community entrances built for a subdivision that has since filled up — an operator specified ' +
      'for a hundred cycles a day now running four hundred. The parts fail on a completely different timeline, and replacing the ' +
      'same component every few months is a symptom, not a solution. In the custom estate communities like Starwood and Newman ' +
      'Village it is a different story again: large ornamental gates where the operator is fine and the actual fault is roller, ' +
      'hinge or alignment wear making it work far harder than it should.',
    faqs: [
      {
        q: 'Our community gate in Frisco keeps breaking. Is it a bad operator?',
        a: 'More often it is an operator that was correctly specified when the neighborhood was half built and is now well past its intended duty cycle. Replacing the same part repeatedly is the tell. We assess actual cycle count against the installed unit and tell you whether the fix is a repair, a service schedule, or a properly specified operator.',
      },
      {
        q: 'Do you service HOA entrances in Frisco?',
        a: 'Yes, including access control, loop detectors and multi-gate communities, with written quotes suitable for board approval.',
      },
    ],
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin County',
    tier: 1,
    zips: ['75069', '75070', '75071', '75072'],
    neighborhoods: ['Stonebridge Ranch', 'Craig Ranch', 'Adriatica', 'Trinity Falls', 'Eldorado', 'Historic Downtown'],
    landmarks: ['Historic Downtown Square', 'Towne Lake Park', 'Heard Natural Science Museum', 'TUPPS Brewery'],
    majorRoads: ['US-75', 'SH-121', 'Custer Road', 'Virginia Parkway'],
    nearbyCities: ['allen', 'frisco', 'prosper', 'princeton', 'melissa', 'fairview'],
    responseBand: '45–75 minutes',
    gateProfile: {
      dominant: 'Large gated communities in Stonebridge Ranch and Craig Ranch alongside older rural-edge properties with long driveways',
      commonGateTypes: ['Community slide', 'Estate swing', 'Solar-powered rural swing'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'Eagle', 'Viking'],
      commonIssues: ['Solar battery failure', 'Control board faults', 'Post movement on rural installs', 'Access control programming loss'],
    },
    localAngle:
      'McKinney covers two very different kinds of gate work within the same city limits. Inside the master-planned communities — ' +
      'Stonebridge Ranch, Craig Ranch — it is community entrances and access control, much like Frisco. Get toward the eastern and ' +
      'northern edges and it becomes acreage properties with long driveways, frequently running solar-powered swing operators ' +
      'because trenching power out to the road was never practical. Those calls are almost always the battery rather than the ' +
      'operator: a tired battery will run a handful of cycles then sag below the threshold, which reads to the owner like a dying ' +
      'motor. We load-test before condemning anything.',
    faqs: [
      {
        q: 'My solar gate opens a few times then stops. Is the motor failing?',
        a: 'Usually the battery, not the motor. Solar gate batteries have a finite life, and a tired one runs a few cycles then drops below the voltage the operator needs. It looks exactly like a failing motor and costs a fraction as much to fix. We load-test rather than guess.',
      },
      {
        q: 'Do you cover the rural parts of McKinney and out toward Princeton?',
        a: 'Yes. Long-driveway and acreage properties are a regular part of our work in this area, including solar installs and gates a long way from mains power.',
      },
    ],
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas County',
    tier: 1,
    zips: ['75038', '75039', '75060', '75061', '75062', '75063'],
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'Hackberry Creek', 'University Hills', 'Song'],
    landmarks: ['Toyota Music Factory', 'Mustangs of Las Colinas', 'Lake Carolyn', 'Irving Convention Center'],
    majorRoads: ['SH-114', 'I-635', 'MacArthur Boulevard', 'President George Bush Turnpike'],
    nearbyCities: ['coppell', 'grand-prairie', 'euless', 'farmers-branch', 'dallas', 'grapevine'],
    responseBand: '30–60 minutes',
    gateProfile: {
      dominant: 'Heavy concentration of gated communities and corporate campuses in Las Colinas and Valley Ranch',
      commonGateTypes: ['Community slide', 'Barrier arm', 'Commercial slide', 'Estate swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'HySecurity', 'Ramset'],
      commonIssues: ['Barrier arm faults', 'Access control and card reader failures', 'High-cycle chain wear', 'Loop detector faults'],
    },
    localAngle:
      'Irving has an unusually high concentration of controlled-access properties for its size, largely because of Las Colinas. ' +
      'That means a lot of barrier arms, card readers and telephone entry systems rather than simple residential driveway gates — ' +
      'and the fault is frequently in the access control rather than the gate operator at all. It is a distinction that matters: ' +
      'a card reader or controller fault gets misdiagnosed as a broken gate constantly, and people end up paying to have a ' +
      'perfectly healthy operator looked at. We test both sides of the system on the same visit. ' +
      'The other pattern specific to Irving is the sheer cycle count on the Las Colinas and Valley Ranch community entrances. ' +
      'Those gates run all day for residents, deliveries and visitors, and parts that would last a decade on a private driveway ' +
      'wear out in a couple of years. When the same component fails twice in eighteen months, the operator is usually being asked ' +
      'to do more than it was specified for, and we would rather tell you that than keep replacing it.',
    faqs: [
      {
        q: 'Our card readers stopped releasing the gate. Is the gate broken?',
        a: 'Usually not. When credentials stop working but the gate still operates on a manual open, the fault is in the reader, the wiring or the controller — not the operator. We diagnose the access control and the gate together so you are not paying for two separate call-outs.',
      },
      {
        q: 'Do you repair barrier arms in Las Colinas?',
        a: 'Yes — barrier arm motors, boards, counterbalance and loop detection are all regular work for us in this area.',
      },
    ],
  },
  {
    slug: 'garland',
    name: 'Garland',
    county: 'Dallas County',
    tier: 1,
    zips: ['75040', '75041', '75042', '75043', '75044'],
    neighborhoods: ['Firewheel', 'Camelot', 'Duck Creek', 'Oakridge', 'Club Hill'],
    landmarks: ['Firewheel Town Center', 'Lake Ray Hubbard', 'Granville Arts Center', 'Spring Creek Forest Preserve'],
    majorRoads: ['I-635', 'President George Bush Turnpike', 'SH-78', 'Northwest Highway'],
    nearbyCities: ['richardson', 'rowlett', 'sachse', 'mesquite', 'wylie', 'dallas'],
    responseBand: '30–60 minutes',
    gateProfile: {
      dominant: 'Mixed residential and a substantial industrial and warehouse base with commercial entrance gates',
      commonGateTypes: ['Commercial slide', 'Cantilever', 'Chain link industrial', 'Residential swing'],
      commonBrands: ['All-O-Matic', 'Ramset', 'LiftMaster', 'HySecurity'],
      commonIssues: ['High-cycle chain and sprocket wear', 'Motor thermal cutout', 'Loop detector faults', 'Track and roller wear'],
    },
    localAngle:
      'Garland has one of the larger industrial footprints in Dallas County, and a lot of our work here is warehouse and yard ' +
      'gates rather than driveways. Those are high-cycle chain-driven slide and cantilever gates where the failure mode is almost ' +
      'always mechanical wear rather than electronics — chains stretch, sprockets round off, rollers flat-spot, and the operator ' +
      'ends up straining against a gate that has become progressively harder to move. Catching that early is the difference ' +
      'between a chain and sprocket replacement and a new gearbox. ' +
      'On the residential side, the neighborhoods out toward Firewheel and Lake Ray Hubbard bring a different problem entirely. ' +
      'Proximity to the water keeps humidity up, and gate hardware near the lake corrodes noticeably faster than equivalent ' +
      'equipment further inland — hinges seize, fasteners rust, and moisture works its way into outdoor control enclosures. ' +
      'It is one of the few parts of Dallas County where we genuinely recommend a service interval rather than waiting for a failure.',
    faqs: [
      {
        q: 'Our warehouse gate is getting noisy and slow. Can it wait?',
        a: 'It is worth looking at sooner rather than later. Noise and sluggish travel on a high-cycle gate usually means chain, sprocket or roller wear, and left running it will eventually take the gearbox with it — turning a modest mechanical repair into a much larger one.',
      },
      {
        q: 'Do you service industrial and yard gates in Garland?',
        a: 'Yes, including cantilever gates, chain link industrial gates, loop detection and high-cycle commercial operators.',
      },
    ],
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant County',
    tier: 1,
    zips: ['76001', '76006', '76010', '76012', '76013', '76016', '76017', '76018'],
    neighborhoods: ['Viridian', 'Interlochen', 'North Arlington', 'Southwest Arlington', 'Country Club Estates'],
    landmarks: ['AT&T Stadium', 'Globe Life Field', 'Six Flags Over Texas', 'River Legacy Park'],
    majorRoads: ['I-20', 'I-30', 'SH-360', 'Cooper Street'],
    nearbyCities: ['grand-prairie', 'mansfield', 'kennedale', 'euless', 'crowley'],
    responseBand: '45–90 minutes',
    gateProfile: {
      dominant: 'Established residential neighborhoods with older iron gates plus commercial and event-adjacent controlled access',
      commonGateTypes: ['Wrought iron swing', 'Slide gate', 'Commercial barrier arm'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'All-O-Matic'],
      commonIssues: ['Hinge sag on older iron gates', 'Post movement', 'Control board failure', 'Photo-eye faults'],
    },
    localAngle:
      'A lot of Arlington gate work involves ironwork that has been in place for decades — particularly around Interlochen and the ' +
      'older North Arlington neighborhoods. The recurring failure there is not electrical at all: hinges wear, the gate starts to ' +
      'sag, and the operator spends every cycle fighting a gate that no longer swings freely. By the time someone calls, the ' +
      'operator has usually been blamed for months. Re-hanging the gate and addressing the post is the actual repair, and it is ' +
      'considerably cheaper than the new operator that gets quoted for the symptom. ' +
      'Arlington also has a large events and hospitality footprint around the stadium district, and the commercial gates and ' +
      'barrier arms serving those lots take an enormous number of cycles in short bursts. A parking barrier that sits idle most ' +
      'of the week and then runs continuously for two days behaves nothing like a residential gate, and it needs servicing on ' +
      'that rhythm rather than on a calendar.',
    faqs: [
      {
        q: 'My iron gate is dragging on the driveway. Is the gate bent?',
        a: 'More often the hinges have worn or the post has moved. North Texas clay shifts posts seasonally, and decades-old hinges develop play. Straightening or forcing the gate without fixing the post or hinge means it will be dragging again within a season.',
      },
      {
        q: 'Do you cover all of Arlington?',
        a: 'Yes, across all of Arlington and neighbouring Tarrant County cities. Typical arrival is 45–90 minutes depending on traffic on I-20 and SH-360.',
      },
    ],
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    county: 'Dallas County',
    tier: 1,
    zips: ['75080', '75081', '75082'],
    neighborhoods: ['Canyon Creek', 'Prairie Creek', 'Breckinridge', 'Heights Park', 'Cottonwood Heights'],
    landmarks: ['CityLine', 'UT Dallas', 'Galatyn Park', 'Cottonwood Park'],
    majorRoads: ['US-75', 'President George Bush Turnpike', 'Campbell Road', 'Coit Road'],
    nearbyCities: ['plano', 'garland', 'dallas', 'murphy', 'sachse', 'addison'],
    responseBand: '30–60 minutes',
    gateProfile: {
      dominant: 'Established residential with mature gated pockets, plus corporate campus controlled access along the US-75 corridor',
      commonGateTypes: ['Residential swing', 'Community slide', 'Commercial barrier arm'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Linear'],
      commonIssues: ['Ageing control boards', 'Telephone entry faults', 'Limit switch drift', 'Receiver and remote failures'],
    },
    localAngle:
      'Richardson is a mature city and the gates reflect that — most of the residential equipment we see here was installed in the ' +
      '1990s or early 2000s and is still perfectly serviceable. The common calls are control boards, receivers and limit switches, ' +
      'all of which are still readily available for this generation of equipment. Along the US-75 and CityLine corridor it shifts ' +
      'to corporate controlled access, where the fault is usually in the reader or controller rather than the gate itself. ' +
      'The thing worth knowing if you own a gate in Canyon Creek, Prairie Creek or Breckinridge is that age alone is not a reason ' +
      'to replace an operator. We are regularly told by other companies that a twenty-five-year-old unit is beyond help, and in ' +
      'most cases it simply needs a board and a set of limit switches. The mechanical side of these operators was built to last, ' +
      'and the parts that fail are the cheap ones. We will tell you honestly when a unit really has reached the end.',
    faqs: [
      {
        q: 'My remote stopped working but the keypad still opens the gate. What is wrong?',
        a: 'Almost always the receiver or the remote itself rather than the operator. It is one of the quickest and least expensive repairs we do, and it does not require replacing anything mechanical.',
      },
    ],
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas County',
    tier: 1,
    zips: ['75006', '75007', '75010'],
    neighborhoods: ['Josey Ranch', 'Rosemeade', 'Austin Waters', 'Country Place', 'Historic Downtown'],
    landmarks: ['Josey Ranch Lake', 'Historic Downtown Carrollton', 'Coyote Ridge', 'Elm Fork Nature Preserve'],
    majorRoads: ['I-35E', 'President George Bush Turnpike', 'Josey Lane', 'Hebron Parkway'],
    nearbyCities: ['farmers-branch', 'lewisville', 'coppell', 'addison', 'plano', 'the-colony'],
    responseBand: '30–60 minutes',
    gateProfile: {
      dominant: 'Suburban residential with gated pockets plus a significant light-industrial and distribution base',
      commonGateTypes: ['Residential swing', 'Commercial slide', 'Chain link industrial'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'Linear', 'Ramset'],
      commonIssues: ['Chain and sprocket wear', 'Control board failure', 'Loop detector faults', 'Track debris and roller wear'],
    },
    localAngle:
      'Carrollton splits between suburban residential and a large light-industrial and distribution corridor along I-35E, which ' +
      'means we are regularly on both sides of the same day — a driveway swing gate in Rosemeade in the morning and a high-cycle ' +
      'yard gate off Hebron in the afternoon. The industrial gates here suffer badly from track debris; slide gates running across ' +
      'a yard collect gravel and grit that grinds rollers flat and makes the operator work far harder than it should. ' +
      'That is worth knowing because it is one of the few gate problems an owner can genuinely head off. Keeping the track clear ' +
      'costs nothing and removes the single most common cause of premature roller and gearbox wear on this side of the city. ' +
      'When we are called out to a Carrollton yard gate that has stalled partway, the track is the first thing we look at, and ' +
      'often the whole answer.',
    faqs: [
      {
        q: 'Our yard gate keeps jamming partway. Is the operator failing?',
        a: 'Check the track first. Slide gates in yard and industrial settings collect gravel and debris that binds the rollers, and the operator stalls trying to push through it. What looks like an operator fault is frequently a track that needs clearing and rollers that need replacing.',
      },
    ],
  },
  {
    slug: 'mesquite',
    name: 'Mesquite',
    county: 'Dallas County',
    tier: 1,
    zips: ['75149', '75150', '75180', '75181', '75182'],
    neighborhoods: ['Creek Crossing', 'Camelot', 'Town East', 'Northridge', 'Falcons Lair'],
    landmarks: ['Town East Mall', 'Mesquite Championship Rodeo', 'Mesquite Arts Center', 'Opal Lawrence Historical Park'],
    majorRoads: ['I-635', 'I-30', 'US-80', 'Galloway Avenue'],
    nearbyCities: ['garland', 'sunnyvale', 'balch-springs', 'forney', 'rowlett', 'dallas'],
    responseBand: '30–60 minutes',
    gateProfile: {
      dominant: 'Residential neighborhoods with a growing multi-family and commercial base along the US-80 corridor',
      commonGateTypes: ['Apartment community slide', 'Residential swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'DoorKing', 'Eagle'],
      commonIssues: ['High-cycle wear on apartment entrances', 'Telephone entry faults', 'Damaged gates from vehicle impact', 'Loop detector faults'],
    },
    localAngle:
      'A large share of our Mesquite work is multi-family — apartment and townhome entrances along and around the US-80 corridor. ' +
      'Those gates take a genuinely punishing duty cycle, and they also take a lot of vehicle impact, which is its own category of ' +
      'repair: bent leaves, damaged posts and operators knocked out of alignment. Getting an impacted gate back to safe operation ' +
      'usually means addressing the structure before anything electrical, because an operator forced to move a distorted gate will ' +
      'simply fail again. ' +
      'The safety devices matter more here than almost anywhere else we work. A community entrance with a damaged photo-eye or a ' +
      'dead safety loop is a gate that can close on a vehicle or a child, and on a property with hundreds of residents that is not ' +
      'a theoretical risk. We test every safety device on a multi-family gate before we leave, whether or not it was part of the ' +
      'original call.',
    faqs: [
      {
        q: 'A resident hit our apartment gate. What is involved in fixing it?',
        a: 'Typically straightening or re-welding the gate leaf, checking the post and footing, then realigning the operator and re-testing the safety devices. Skipping straight to the operator is a common mistake — a gate that no longer travels true will destroy a new operator as quickly as it did the last one.',
      },
      {
        q: 'Do you handle apartment and multi-family gates in Mesquite?',
        a: 'Yes, including telephone entry, loop detectors and scheduled maintenance for high-cycle entrances.',
      },
    ],
  },
  {
    slug: 'denton',
    name: 'Denton',
    county: 'Denton County',
    tier: 1,
    zips: ['76201', '76205', '76207', '76208', '76209', '76210'],
    neighborhoods: ['Rayzor Ranch', 'Robson Ranch', 'Country Club', 'Oakmont', 'Southridge'],
    landmarks: ['Denton Square', 'University of North Texas', 'Ray Roberts Lake', 'Clear Creek Natural Heritage Center'],
    majorRoads: ['I-35E', 'I-35W', 'US-380', 'Loop 288'],
    nearbyCities: ['argyle', 'corinth', 'sanger', 'krum', 'lake-dallas', 'ponder'],
    responseBand: '60–90 minutes',
    gateProfile: {
      dominant: 'Acreage and ranch properties with long driveways alongside established residential and student housing',
      commonGateTypes: ['Solar-powered ranch swing', 'Estate swing', 'Farm and pasture gate', 'Community slide'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'Eagle', 'Viking'],
      commonIssues: ['Solar battery failure', 'Long-run wiring faults', 'Post movement on rural installs', 'Rodent damage to buried cable'],
    },
    localAngle:
      'Denton is where the metroplex starts turning rural, and the gate work changes with it. A large proportion of what we do here ' +
      'is acreage properties where the gate sits a long way from the house and mains power was never run to it — so it is solar and ' +
      'battery, and the fault is usually the power system rather than the operator. The other recurring Denton problem is buried ' +
      'cable on long runs: rodents, ground movement and fence-post work all take their toll, and an intermittent gate on a rural ' +
      'property is very often a damaged run rather than anything wrong at either end of it.',
    faqs: [
      {
        q: 'Our ranch gate works sometimes and not others. What causes that?',
        a: 'On long rural runs, intermittent operation usually points at the wiring rather than the operator — damaged buried cable, a corroded junction, or rodent damage. We trace the fault rather than replacing the whole run by default, which is normally the far cheaper outcome.',
      },
      {
        q: 'Do you travel out to acreage properties around Denton?',
        a: 'Yes. Long-driveway, solar and off-grid gate installations around Denton, Argyle, Sanger and Ponder are regular work for us. Typical arrival is 60–90 minutes.',
      },
    ],
  },
  {
    slug: 'rockwall',
    name: 'Rockwall',
    county: 'Rockwall County',
    tier: 1,
    zips: ['75032', '75087'],
    neighborhoods: ['Chandlers Landing', 'The Shores', 'Stone Creek', 'Breezy Hill', 'Lakeside Village'],
    landmarks: ['Lake Ray Hubbard', 'The Harbor Rockwall', 'Harry Myers Park', 'Downtown Rockwall Square'],
    majorRoads: ['I-30', 'SH-66', 'SH-205', 'John King Boulevard'],
    nearbyCities: ['rowlett', 'heath', 'royse-city', 'fate', 'wylie', 'garland'],
    responseBand: '45–75 minutes',
    gateProfile: {
      dominant: 'Lakefront and gated waterfront communities around Lake Ray Hubbard with a high proportion of custom estate gates',
      commonGateTypes: ['Estate swing', 'Ornamental iron', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'Viking', 'All-O-Matic'],
      commonIssues: ['Corrosion from lakeside humidity', 'Control board failure', 'Hinge wear on heavy ornamental gates', 'Photo-eye faults'],
    },
    localAngle:
      'Rockwall gate work is shaped by the lake. The waterfront and near-water communities — Chandlers Landing, The Shores — run a ' +
      'lot of heavy ornamental ironwork, and the sustained humidity accelerates everything: hinges seize, fasteners corrode, and ' +
      'electrical connections in outdoor enclosures degrade noticeably faster than they do inland. It is one of the few parts of ' +
      'the metroplex where we genuinely recommend a maintenance interval rather than waiting for a failure, because the corrosion ' +
      'is predictable and catching it early is significantly cheaper. ' +
      'The gates themselves also tend to be heavier here than the operators originally fitted to them. Custom ironwork on a ' +
      'waterfront property is frequently re-clad or reinforced over the years, and the operator quietly ends up moving far more ' +
      'weight than it was specified for. That shows up as gearbox and hinge wear rather than an electrical fault, and it is why we ' +
      'always move a Rockwall gate by hand before we look at anything electrical.',
    faqs: [
      {
        q: 'Does being near the lake actually affect a gate?',
        a: 'Noticeably, yes. Sustained humidity accelerates corrosion on hinges, fasteners and electrical connections inside outdoor enclosures. Gates near Lake Ray Hubbard reliably need attention sooner than equivalent equipment further inland, which is why we suggest a service interval here rather than waiting for something to fail.',
      },
    ],
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin County',
    tier: 1,
    zips: ['75002', '75013'],
    neighborhoods: ['Twin Creeks', 'Bethany Lakes', 'Watters Crossing', 'Star Creek', 'Cottonwood Bend'],
    landmarks: ['Allen Event Center', 'Watters Creek', 'Celebration Park', 'Allen Station Park'],
    majorRoads: ['US-75', 'SH-121', 'Bethany Drive', 'Stacy Road'],
    nearbyCities: ['plano', 'mckinney', 'fairview', 'lucas', 'parker', 'frisco'],
    responseBand: '45–75 minutes',
    gateProfile: {
      dominant: 'Master-planned residential with HOA-managed community entrances and a growing custom estate segment toward Lucas',
      commonGateTypes: ['Community slide', 'Estate swing', 'Ornamental iron'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Viking'],
      commonIssues: ['Access control programming loss', 'High-cycle wear', 'Control board failure', 'Safety loop faults'],
    },
    localAngle:
      'Allen is predominantly master-planned, so the residential gate work is concentrated in community entrances rather than ' +
      'individual driveways — which means access control is as often the fault as the operator. Toward the eastern edge, heading ' +
      'out to Lucas and Parker, lot sizes grow and it shifts to custom estate gates on longer drives. The common thread is that ' +
      'most of this equipment is now fifteen to twenty years old and reaching the age where boards start to fail, which is ' +
      'ordinary and entirely repairable. ' +
      'Because so many Allen gates are HOA-managed, the practical problem is often administrative rather than technical. Access ' +
      'codes and resident directories get lost when a management company changes, and we are regularly called to a gate that works ' +
      'perfectly but will no longer let anyone through. We can rebuild the directory and credentials on most systems, and we ' +
      'provide itemised written quotes suitable for a board to approve.',
    faqs: [
      {
        q: 'Who is responsible for repairing an HOA community gate?',
        a: 'Typically the HOA or its management company rather than individual residents. We provide written, itemised quotes suitable for board approval, and we are happy to speak directly with a property manager.',
      },
    ],
  },
  {
    slug: 'grand-prairie',
    name: 'Grand Prairie',
    county: 'Dallas County',
    tier: 1,
    zips: ['75050', '75051', '75052', '75054'],
    neighborhoods: ['Mira Lagos', 'Westchester', 'Lake Parks', 'The Peninsula', 'Grand Peninsula'],
    landmarks: ['Epic Waters', 'Lone Star Park', 'Joe Pool Lake', 'Traders Village'],
    majorRoads: ['I-20', 'I-30', 'SH-161', 'Carrier Parkway'],
    nearbyCities: ['arlington', 'irving', 'mansfield', 'cedar-hill', 'duncanville', 'midlothian'],
    responseBand: '45–75 minutes',
    gateProfile: {
      dominant: 'Newer gated communities to the south around Joe Pool Lake plus substantial industrial and logistics gate work along I-20 and SH-161',
      commonGateTypes: ['Community slide', 'Industrial cantilever', 'Commercial slide', 'Residential swing'],
      commonBrands: ['LiftMaster', 'HySecurity', 'Ramset', 'All-O-Matic'],
      commonIssues: ['High-cycle industrial wear', 'Loop detector faults', 'Gearbox wear', 'Access control failures'],
    },
    localAngle:
      'Grand Prairie stretches a long way, and the gate work at either end is barely the same trade. The southern communities ' +
      'around Joe Pool Lake are newer residential with HOA entrances. Along the I-20 and SH-161 corridors it is logistics and ' +
      'distribution — heavy cantilever and industrial slide gates running continuously, often on HySecurity or Ramset equipment, ' +
      'where a failed gate means trucks queuing and the priority is a correct diagnosis on the first visit rather than the ' +
      'cheapest possible part. ' +
      'On the industrial sites the fault is frequently the loop detector rather than the gate. A buried loop that has cracked with ' +
      'ground movement, or a detector knocked out by a nearby electrical fault, presents as a gate that ignores approaching ' +
      'vehicles — which looks like an operator failure and is not one. We test the detection side before condemning anything ' +
      'mechanical, because on a site where trucks are backing up it is usually the fastest thing to put right.',
    faqs: [
      {
        q: 'Our distribution yard gate is down. How fast can you get there?',
        a: 'We run 24/7 and treat commercial entrance failures as urgent — a gate down at a logistics site is a business-stopping problem, not an inconvenience. Typical arrival in Grand Prairie is 45–75 minutes.',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// TIER 2 & 3 — full client list. Enrich with real local data before publishing
// each page (see CITY-PAGES.md §5). validate-cities.ts blocks publishing any
// city that has not been enriched to its tier's minimum.
// ---------------------------------------------------------------------------

const tier2Raw: [string, string][] = [
  ['Addison', 'Dallas County'], ['Aledo', 'Parker County'], ['Alvarado', 'Johnson County'],
  ['Anna', 'Collin County'], ['Argyle', 'Denton County'], ['Azle', 'Tarrant County'],
  ['Bedford', 'Tarrant County'], ['Benbrook', 'Tarrant County'], ['Burleson', 'Johnson County'],
  ['Cedar Hill', 'Dallas County'], ['Celina', 'Collin County'], ['Cleburne', 'Johnson County'],
  ['Colleyville', 'Tarrant County'], ['Coppell', 'Dallas County'], ['Corinth', 'Denton County'],
  ['Crowley', 'Tarrant County'], ['Decatur', 'Wise County'], ['DeSoto', 'Dallas County'],
  ['Duncanville', 'Dallas County'], ['Euless', 'Tarrant County'], ['Fairview', 'Collin County'],
  ['Farmers Branch', 'Dallas County'], ['Flower Mound', 'Denton County'], ['Forney', 'Kaufman County'],
  ['Grapevine', 'Tarrant County'], ['Haltom City', 'Tarrant County'], ['Haslet', 'Tarrant County'],
  ['Highland Park', 'Dallas County'], ['Highland Village', 'Denton County'], ['Hurst', 'Tarrant County'],
  ['Keller', 'Tarrant County'], ['Kennedale', 'Tarrant County'], ['Lancaster', 'Dallas County'],
  ['Lewisville', 'Denton County'], ['Little Elm', 'Denton County'], ['Lucas', 'Collin County'],
  ['Mansfield', 'Tarrant County'], ['Midlothian', 'Ellis County'], ['Murphy', 'Collin County'],
  ['North Richland Hills', 'Tarrant County'], ['Northlake', 'Denton County'], ['Parker', 'Collin County'],
  ['Prosper', 'Collin County'], ['Red Oak', 'Ellis County'], ['Roanoke', 'Denton County'],
  ['Rowlett', 'Dallas County'], ['Royse City', 'Rockwall County'], ['Sachse', 'Dallas County'],
  ['Saginaw', 'Tarrant County'], ['Seagoville', 'Dallas County'], ['Southlake', 'Tarrant County'],
  ['Sunnyvale', 'Dallas County'], ['The Colony', 'Denton County'], ['Trophy Club', 'Denton County'],
  ['University Park', 'Dallas County'], ['Waxahachie', 'Ellis County'], ['Weatherford', 'Parker County'],
  ['Wylie', 'Collin County'],
]

const tier3Raw: [string, string][] = [
  ['Alvord', 'Wise County'], ['Annetta', 'Parker County'], ['Annetta North', 'Parker County'],
  ['Annetta South', 'Parker County'], ['Athens', 'Henderson County'], ['Aubrey', 'Denton County'],
  ['Aurora', 'Wise County'], ['Balch Springs', 'Dallas County'], ['Blue Ridge', 'Collin County'],
  ['Bonham', 'Fannin County'], ['Bowie', 'Montague County'], ['Boyd', 'Wise County'],
  ['Bridgeport', 'Wise County'], ['Briar', 'Wise County'], ['Bristol', 'Ellis County'],
  ['Caddo Mills', 'Hunt County'], ['Callisburg', 'Cooke County'], ['Campbell', 'Hunt County'],
  ['Canton', 'Van Zandt County'], ['Celeste', 'Hunt County'], ['Chico', 'Wise County'],
  ['Collinsville', 'Grayson County'], ['Comanche', 'Comanche County'], ['Combine', 'Kaufman County'],
  ['Cool', 'Parker County'], ['Copeville', 'Collin County'], ['Crandall', 'Kaufman County'],
  ['Cresson', 'Hood County'], ['Denison', 'Grayson County'], ['Dublin', 'Erath County'],
  ['East Tawakoni', 'Rains County'], ['Eastland', 'Eastland County'], ['Edgewood', 'Van Zandt County'],
  ['Elmo', 'Kaufman County'], ['Emory', 'Rains County'], ['Everman', 'Tarrant County'],
  ['Farmersville', 'Collin County'], ['Fate', 'Rockwall County'], ['Ferris', 'Ellis County'],
  ['Forest Hill', 'Tarrant County'], ['Gainesville', 'Cooke County'], ['Glenn Heights', 'Dallas County'],
  ['Glen Rose', 'Somervell County'], ['Godley', 'Johnson County'], ['Granbury', 'Hood County'],
  ['Grandview', 'Johnson County'], ['Greenville', 'Hunt County'], ['Gunter', 'Grayson County'],
  ['Gun Barrel City', 'Henderson County'], ['Heath', 'Rockwall County'], ['Howe', 'Grayson County'],
  ['Hudson Oaks', 'Parker County'], ['Hutchins', 'Dallas County'], ['Josephine', 'Collin County'],
  ['Joshua', 'Johnson County'], ['Justin', 'Denton County'], ['Kaufman', 'Kaufman County'],
  ['Keene', 'Johnson County'], ['Kemp', 'Kaufman County'], ['Krum', 'Denton County'],
  ['Lake Dallas', 'Denton County'], ['Lake Worth', 'Tarrant County'], ['Leonard', 'Fannin County'],
  ['Lindsay', 'Cooke County'], ['Lipan', 'Hood County'], ['Lone Oak', 'Hunt County'],
  ['Mabank', 'Kaufman County'], ['Malakoff', 'Henderson County'], ['Maypearl', 'Ellis County'],
  ['Melissa', 'Collin County'], ['Milford', 'Ellis County'], ['Millsap', 'Parker County'],
  ['Mineral Wells', 'Palo Pinto County'], ['Morgan Mill', 'Erath County'], ['Muenster', 'Cooke County'],
  ['New Fairview', 'Wise County'], ['Newark', 'Wise County'], ['Nocona', 'Montague County'],
  ['Oak Leaf', 'Ellis County'], ['Ovilla', 'Ellis County'], ['Palmer', 'Ellis County'],
  ['Paradise', 'Wise County'], ['Peaster', 'Parker County'], ['Pilot Point', 'Denton County'],
  ['Point', 'Rains County'], ['Poetry', 'Kaufman County'], ['Ponder', 'Denton County'],
  ['Poolville', 'Parker County'], ['Pottsboro', 'Grayson County'], ['Princeton', 'Collin County'],
  ['Quinlan', 'Hunt County'], ['Rendon', 'Tarrant County'], ['Rhome', 'Wise County'],
  ['Rio Vista', 'Johnson County'], ['Saint Jo', 'Montague County'], ['Sadler', 'Grayson County'],
  ['Sanger', 'Denton County'], ['Scurry', 'Kaufman County'], ['Sherman', 'Grayson County'],
  ['Springtown', 'Parker County'], ['Stephenville', 'Erath County'], ['Talty', 'Kaufman County'],
  ['Terrell', 'Kaufman County'], ['Tioga', 'Grayson County'], ['Tolar', 'Hood County'],
  ['Tom Bean', 'Grayson County'], ['Valley View', 'Cooke County'], ['Van Alstyne', 'Grayson County'],
  ['Venus', 'Johnson County'], ['West Tawakoni', 'Hunt County'], ['Westlake', 'Tarrant County'],
  ['Westminster', 'Collin County'], ['White Settlement', 'Tarrant County'], ['Whitewright', 'Grayson County'],
  ['Whitesboro', 'Grayson County'], ['Willow Park', 'Parker County'], ['Wilmer', 'Dallas County'],
  ['Wills Point', 'Van Zandt County'],
]

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const build = (raw: [string, string][], tier: 2 | 3): City[] =>
  raw.map(([name, county]) => ({ slug: toSlug(name), name, county, tier }))

export const tier2Cities = build(tier2Raw, 2)
export const tier3Cities = build(tier3Raw, 3)

export const cities: City[] = [...tier1Cities, ...tier2Cities, ...tier3Cities]

/**
 * Cities that have their own page.
 *
 * Every city on the client's list gets a page — the client asked for this
 * directly on 3 Aug 2026, overriding the earlier decision to publish only the
 * 14 enriched pages.
 *
 * The risk that decision was managing is real and has not gone away: Google's
 * scaled-content-abuse policy targets sets of near-identical pages generated
 * from a template with only the place name swapped. What keeps these pages on
 * the right side of it is that the thin ones are not pretending to be thick.
 * A Tier 2/3 page states its county, links its genuine county neighbours,
 * shows the service-area map, and stops. It does not pad to 1,500 words with
 * invented neighborhoods, zip codes, landmarks or response times — fabricating
 * verifiable facts about a real place is both worse for the user and a larger
 * ranking risk than a short page.
 *
 * Depth is still the goal. Promotion is a data change: fill in `localAngle`,
 * `neighborhoods`, `responseBand` and `faqs` and the page thickens on its own.
 */
export const publishedCities: City[] = cities

/** Cities with the full enriched profile — used to flag depth in reporting. */
export const enrichedCities: City[] = cities.filter((c) => isPublishable(c) && Boolean(c.localAngle))

/**
 * Other cities in the same county, for internal linking.
 *
 * County membership is a real, checkable relationship, which is what makes
 * these links worth having — they are not "related cities" invented to spread
 * link equity. Falls back to nothing rather than reaching for a neighbouring
 * county when a city is the only one we serve in its own.
 */
export function countyPeers(city: City, limit = 8): City[] {
  return cities
    .filter((c) => c.county === city.county && c.slug !== city.slug)
    .sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name))
    .slice(0, limit)
}

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug)

/** Cities grouped by county, for the /service-areas hub. */
export function citiesByCounty(): Record<string, City[]> {
  const grouped: Record<string, City[]> = {}
  for (const city of cities) {
    ;(grouped[city.county] ??= []).push(city)
  }
  for (const list of Object.values(grouped)) list.sort((a, b) => a.name.localeCompare(b.name))
  return Object.fromEntries(Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)))
}

/**
 * A city is publishable when it carries enough genuinely local content to
 * justify its own page. Tier 1 and 2 need the full profile; Tier 3 ships as a
 * short honest page. Enforced by scripts/validate-cities.ts.
 */
export function isPublishable(city: City): boolean {
  if (city.tier === 3) return true
  return Boolean(
    city.localAngle &&
      city.localAngle.split(/\s+/).length >= 100 &&
      (city.neighborhoods?.length ?? 0) >= 3 &&
      city.responseBand &&
      (city.faqs?.length ?? 0) >= 1,
  )
}
