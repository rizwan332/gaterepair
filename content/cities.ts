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
 * ⚠️ `gateProfile` is populated for Tier 1 from general Dallas–Fort Worth knowledge as
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
    responseBand: '',
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
        a: 'We run 24/7 across Dallas. Travel across the city varies a lot with traffic on US-75 and I-35E, so we give you a real arrival window when you call rather than a vague "sometime today".',
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
    /**
     * Added 16 Sep 2026. Fort Worth was missing from the client's service-area
     * list and therefore from this file, so /gate-repair-fort-worth-tx returned
     * a 404 — the second-largest city in the market and the one the metroplex
     * is half named after. Treated as an oversight and corrected; see the note
     * in scripts/client-city-list.ts, which records that the client still has
     * to confirm it.
     *
     * Sourced rather than assumed, because none of it was in the client's data:
     *  · zips — Census 2020 ZCTA-to-place relationship file, rows for "Fort
     *    Worth city". West and south-west first, then the northern ZCTAs.
     *  · neighborhoods — City of Fort Worth pages (historic districts, park
     *    pages, capital project titles). Enclave municipalities that look like
     *    Fort Worth neighborhoods but are not — White Settlement, Westworth
     *    Village, River Oaks, Sansom Park — are deliberately absent.
     *  · coordinates — not set here. `npm run geocode` resolved them through
     *    Nominatim like every other city, to 32.75318, -97.33275, which is a
     *    downtown-referenced point. The Census 2023 Gazetteer puts the
     *    city-wide internal point further north-west at 32.78195, -97.34857;
     *    for a pin on the coverage map the difference is immaterial, and
     *    consistency with the other 190 cities is worth more than precision
     *    here.
     *  · the clay figure in the FAQ — a geotechnical report the city itself
     *    hosts for a north Fort Worth site (D&S Engineering G20-2194), which
     *    estimates 3 to 8.5 inches of potential vertical movement.
     *  · the hail reference — NWS Fort Worth on the May 1995 Mayfest storm.
     *
     * `gateProfile` is drafted from the city's own geography and building
     * stock, exactly as the other Tier 1 profiles are, and carries the same
     * caveat at the top of this file: it needs replacing with the technician
     * interview answers.
     */
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant County',
    tier: 1,
    zips: ['76107', '76108', '76109', '76116', '76126', '76132', '76133', '76131', '76137', '76177', '76179'],
    neighborhoods: [
      'Arlington Heights',
      'Ridglea Hills',
      'Wedgwood',
      'Westcliff',
      'Overton Park',
      'Fairmount',
      'Mistletoe Heights',
      'Near Southside',
    ],
    landmarks: [
      'Fort Worth Stockyards',
      'Fort Worth Water Gardens',
      'Fort Worth Botanic Garden',
      'Will Rogers Memorial Center',
      'Dickies Arena',
    ],
    // "Loop 820" rather than I-820, and Camp Bowie named alongside US-377,
    // because that is what people here call them.
    majorRoads: ['I-35W', 'Loop 820', 'Chisholm Trail Parkway', 'US-377 / Camp Bowie'],
    nearbyCities: ['haltom-city', 'lake-worth', 'saginaw', 'white-settlement', 'north-richland-hills', 'forest-hill'],
    responseBand: '',
    gateProfile: {
      dominant:
        'Three separate kinds of gate work inside one city — post-war driveways on the west side, acreage entrances beyond Loop 820, and high-cycle commercial gates on the north side',
      commonGateTypes: ['Wrought iron swing', 'Ranch and acreage swing', 'Commercial slide', 'Apartment entrance slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'All-O-Matic', 'US Automatic', 'Elite'],
      commonIssues: [
        'Clay-soil post movement pulling gates out of alignment',
        'Hail and storm damage to photo-eyes and control boards',
        'Battery and solar charging faults on acreage gates',
        'High-cycle chain and sprocket wear on commercial entrances',
        'Control board failure on ageing west-side operators',
      ],
    },
    localAngle:
      'Fort Worth splits three ways for gate work. West of downtown — Arlington Heights, Ridglea Hills, Westcliff and Wedgwood — the housing is largely post-war, and a good share of the operators on those driveways are twenty years old or more, which makes a control board or a limit adjustment the likely repair rather than a new unit. Push out past Loop 820 into the 76126 and 76179 zip codes and the lots turn into acreage: those gates usually run from a battery kept topped up by a solar panel, so a gate that has slowed down is a charging question before it is an operator question. North toward Alliance the work is commercial — yard entrances, distribution gates and apartment entrances cycling hundreds of times a day, where a chain wears out in a season rather than a decade. Those are three different diagnoses, and we do not approach them the same way.',
    faqs: [
      {
        q: 'My gate lined up fine last year and now it catches. Nothing was touched.',
        a: 'The post moved, not the gate. A geotechnical report the city publishes for a north Fort Worth site estimates the local clay can rise and fall by roughly three to eight and a half inches as its moisture changes, and a gate post set in that ground goes with it. Re-hanging the gate and correcting the post is considerably cheaper than the operator replacement the resulting strain often gets blamed on.',
      },
      {
        q: 'Hail came through and the gate stopped responding. Is the operator finished?',
        a: 'Usually not. Fort Worth gets genuinely severe hail — the 1995 Mayfest storm put softball-sized stones across the city — and what it damages is the exposed hardware: photo-eyes, an antenna, a solar panel, or the board inside an enclosure that has been cracked or let water in. Every one of those is an individual part, and we quote them individually.',
      },
      {
        q: 'Do you cover the acreage properties west of Loop 820?',
        a: 'Yes, and they are a distinct kind of call. Out there the gate is typically a long single leaf on a battery-and-solar operator at the end of a driveway, where a failure locks in a whole property rather than one car. We test the battery under load and the panel output before touching the operator, because that is where the fault usually is.',
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
    responseBand: '',
    gateProfile: {
      dominant: 'Established 1990s–2000s gated communities in West Plano alongside newer HOA-managed entrances around Legacy',
      commonGateTypes: ['Slide gate', 'Wrought iron swing', 'HOA community entrance'],
      // Viking to Ramset added 2 Nov 2026: the client asked for a Plano page on each.
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'DoorKing', 'Viking', 'FAAC', 'US Automatic', 'Apollo', 'Ramset'],
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
    responseBand: '',
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
    responseBand: '',
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
    responseBand: '',
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
    responseBand: '',
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
    responseBand: '',
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
        a: 'More often the hinges have worn or the post has moved. Dallas–Fort Worth clay shifts posts seasonally, and decades-old hinges develop play. Straightening or forcing the gate without fixing the post or hinge means it will be dragging again within a season.',
      },
      {
        q: 'Do you cover all of Arlington?',
        a: 'Yes, across all of Arlington and neighbouring Tarrant County cities. We give you a real arrival window when you call, based on where the nearest truck actually is and the traffic on I-20 and SH-360.',
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
    responseBand: '',
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
      'to replace an operator. A twenty-five-year-old unit is often assumed to be beyond help when in ' +
      'most cases it simply needs a board and a set of limit switches. The mechanical side of these operators was built to last, ' +
      'and the parts that fail are the cheap ones. We will tell you honestly when a unit really has reached the end.',
    faqs: [
      {
        q: 'My remote stopped working but the keypad still opens the gate. What is wrong?',
        a: 'Almost always the receiver or the remote itself rather than the operator. It is one of the quickest and least expensive repairs we do, and it does not require replacing anything mechanical.',
      },
      {
        q: 'Do you work on older Ramset and Viking operators in Richardson?',
        a: 'Yes. Our documented Richardson jobs include a gearbox repair on a Ramset sliding gate operator and a full refurbishment of a Viking opener, both kept in service rather than replaced, plus a LiftMaster circuit board and battery replacement.',
      },
      {
        q: 'Is it worth repairing an older gate opener, or should I replace it?',
        a: 'It depends on the part that failed and whether parts are still available. On a sound operator a board, gearbox or battery repair is usually far cheaper than a new unit. We tell you which side of that line your opener is on before any work starts.',
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
    responseBand: '',
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
      {
        q: 'Our exit gate no longer opens when a car pulls up to it. What has failed?',
        a: 'Most often the vehicle loop: the wire cut into the pavement has been broken by a crack or by roadwork, or the loop detector has lost its setting. We test the loop and detector first, because that is a far smaller repair than the operator.',
      },
      {
        q: 'Do you repair residential driveway gates in Carrollton too?',
        a: 'Yes. As well as commercial and industrial entrances we repair residential swing and sliding driveway gates across Carrollton, including openers, motors, keypads and remotes.',
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
    responseBand: '',
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
    landmarks: ['Denton Square', 'University of Dallas–Fort Worth', 'Ray Roberts Lake', 'Clear Creek Natural Heritage Center'],
    majorRoads: ['I-35E', 'I-35W', 'US-380', 'Loop 288'],
    nearbyCities: ['argyle', 'corinth', 'sanger', 'krum', 'lake-dallas', 'ponder'],
    responseBand: '',
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
        a: 'Yes. Long-driveway, solar and off-grid gate installations around Denton, Argyle, Sanger and Ponder are regular work for us. We confirm an arrival window when you call.',
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
    responseBand: '',
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
    responseBand: '',
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
      {
        q: 'Our community gate stopped accepting keypad codes after a power cut. Does it need new hardware?',
        a: 'Usually not. Lost programming after a power interruption is one of the most common access control faults on Allen community entrances, and the fix is normally re-programming the controller and replacing a tired backup battery so it holds its memory next time.',
      },
      {
        q: 'Do you repair private driveway gates in Allen, or only HOA entrances?',
        a: 'Both. Alongside community entrances we repair residential swing and sliding driveway gates across Allen, including openers, motors, keypads and remotes.',
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
    responseBand: '',
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
        a: 'We run 24/7 and treat commercial entrance failures as urgent — a gate down at a logistics site is a business-stopping problem, not an inconvenience. We confirm an arrival window when you call.',
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

  // ── Added 28 Sep 2026, from the client's master keyword list ──────────────
  // These six appear throughout Shield_Gate_Repair_DFW_SEO_Master_Keywords.pdf
  // and were absent from the service-area list entirely, so there was no page
  // for them at any tier. Same correction as Fort Worth in fa899ce.
  //
  // Tiered on gate density rather than population: Bartonville and Cross Roads
  // are acreage, where the entrance gate is a given, and Lantana is a single
  // large master-planned community. Appended rather than merged alphabetically
  // so the addition stays visible in review; `build()` does not care about
  // order.
  //
  // ⚠️ Richland Hills is NOT North Richland Hills. They are separate Tarrant
  // County cities with separate ZIPs, and conflating them would put wrong
  // content on both.
  ['Bartonville', 'Denton County'], ['Lantana', 'Denton County'], ['Cross Roads', 'Denton County'],
  ['Hickory Creek', 'Denton County'], ['Richland Hills', 'Tarrant County'], ['Watauga', 'Tarrant County'],
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

  // ── Added 28 Sep 2026, from the client's master keyword list ──────────────
  // The three remaining keyword-list towns that had no page at any tier. Small
  // Collin County communities, so Tier 3: a short, honest page is a fine thing
  // to serve someone who followed a link, and Tier 3 is not submitted for
  // indexing until it carries genuinely local content (see hasLocalContent).
  ['Lavon', 'Collin County'], ['Lowry Crossing', 'Collin County'], ['Nevada', 'Collin County'],
]

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

/**
 * Local data for cities that started life as a name and a county.
 *
 * Tier 2 and 3 are rosters — `[name, county]` pairs — because that is all the
 * client gave us for them, and a page with nothing local on it is served
 * `noindex` rather than submitted (see `indexedCities`). Enriching one is
 * therefore not a code change but a data change: fill in an entry here and the
 * city moves into the sitemap on the next build.
 *
 * Merged rather than promoted into `tier1Cities` so the roster below stays the
 * roster — `scripts/validate-cities.ts` checks it against the client's list
 * name for name, and lifting cities out of it would quietly break that check.
 *
 * ── SOURCING ────────────────────────────────────────────────────────────────
 * Same rule as Fort Worth and for the same reason: none of this was in the
 * client's data, so all of it is cited rather than assumed. Zips come from the
 * Census 2020 ZCTA-to-place relationship file, ordered so the city's principal
 * ZIP leads and shared slivers are dropped. Neighborhoods, landmarks and roads
 * come from each city's own site where it publishes them, and the exceptions
 * are noted per city. Adjacency is straight-line distance between Census
 * Gazetteer internal points, nearest first.
 *
 * `gateProfile` is the one field that is NOT sourced. It is drafted from the
 * city's building stock, lot sizes and zoning, exactly as the Tier 1 profiles
 * are, and carries the same caveat as the note at the top of this file: it
 * needs replacing with the client's technician interview answers. Everything a
 * visitor reads as a fact about their city is sourced; what they read as our
 * judgement about equipment is ours, and is marked as such here.
 */
const ENRICHED: Record<string, Partial<City>> = {
  // The Park Cities share 75205/75209/75219/75225 with Dallas, so the zips are
  // listed principal-first and the copy never claims a ZIP as exclusively ours.
  'highland-park': {
    zips: ['75205', '75209', '75219'],
    neighborhoods: ['Old Highland Park', 'Lakeside', 'Highland Park West', 'Turtle Creek Acreage', 'Hackberry Creek Acreage'],
    landmarks: ['Highland Park Village', 'Lakeside Park', 'Flippen Park', 'Exall Lake'],
    majorRoads: ['Preston Road', 'Mockingbird Lane', 'Armstrong Parkway', 'Dallas North Tollway'],
    nearbyCities: ['university-park', 'dallas', 'farmers-branch', 'addison', 'irving', 'carrollton'],
    responseBand: '',
    gateProfile: {
      dominant: 'Ornamental iron gates on estate frontages in a town laid out between 1907 and 1924',
      commonGateTypes: ['Wrought iron swing', 'Estate driveway swing', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Obsolete control boards on operators installed decades ago',
        'Clay-soil post movement pulling heavy iron gates out of square',
        'Hinge and pivot wear under ornamental iron',
        'Photo-eye alignment on narrow drives',
      ],
    },
    localAngle:
      'Highland Park was platted between 1907 and 1924 by Wilbur David Cook, the landscape architect who laid out Beverly Hills, and roughly a fifth of the developed land was set aside as park. That history is what makes gate work here particular: the frontages are short, the ironwork is often decorative and heavy, and a great many of the operators behind it have been in place long enough that the board inside is no longer made. Replacing the whole assembly is rarely what the owner wants, because the gate itself is part of the house. So the question we are usually answering is whether the existing operator can be kept running with a current board and new safety devices, and whether the posts carrying that weight have shifted enough to need resetting before anything electrical is touched.',
    faqs: [
      {
        q: 'Our gate is original to the house. Can it be kept, or does the whole thing have to go?',
        a: 'Almost always kept. The gate, the hinges and the posts are separate from the operator that moves them, and an operator whose board is obsolete can usually be brought up to date without altering the ironwork at all. We would rather fit a current board and modern safety sensors behind a gate somebody chose in 1930 than sell a replacement that changes how the frontage looks.',
      },
      {
        q: 'Do you work on the short driveways and courtyard gates in Highland Park?',
        a: 'Yes, and they need a different approach to a long suburban drive. There is less room for a gate to swing and less room for a vehicle to wait off the street, which changes where safety devices go and how the timers are set. It also means a gate that fails here blocks the street rather than a driveway, so we treat it as urgent.',
      },
    ],
  },

  'university-park': {
    zips: ['75205', '75225'],
    // Neighborhood names are from a Dallas real-estate authority rather than
    // the city, which publishes no list. Kept because they are the names people
    // actually use, but they are the least-sourced field on this entry.
    neighborhoods: ['Volk Estates', 'Caruth Hills', 'Windsor Place', 'Stratford Manor', 'University Heights'],
    landmarks: ['Southern Methodist University', 'Snider Plaza', 'George W. Bush Presidential Center', 'Centennial Park'],
    majorRoads: ['Preston Road', 'Hillcrest Avenue', 'Lovers Lane', 'US-75 Central Expressway'],
    nearbyCities: ['highland-park', 'dallas', 'farmers-branch', 'addison', 'irving', 'carrollton'],
    responseBand: '',
    gateProfile: {
      dominant: 'Seven thousand homes in under four square miles, where rebuilt houses keep adding new gates beside decades-old ones',
      commonGateTypes: ['Wrought iron swing', 'Driveway slide', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'DoorKing'],
      commonIssues: [
        'Limits and safety devices left wrong after a new install',
        'Ageing operators on the acre lots at Volk Estates',
        'Clay-soil post movement',
        'Safety sensor misalignment on tight frontages',
      ],
    },
    localAngle:
      'University Park fits more than seven thousand homes into three and a half square miles, and it has been replacing its own housing stock since the 1970s — smaller houses coming down, larger ones going up on the same lots. For gate work that produces two completely different call types on neighbouring streets. On a rebuilt property the gate is new and the fault is usually commissioning: limits set for a gate that has since settled, a safety sensor aimed at nothing, an operator specified for a lighter leaf than the one it ended up carrying. A few doors down, on the acre-and-over lots around Volk Estates, the operator has been working since long before that rebuild started and needs parts rather than adjustment. The two need diagnosing differently, and they are frequently on the same street.',
    faqs: [
      {
        q: 'Our gate was installed with the house last year and already misbehaves. Is it faulty?',
        a: 'Usually it is set up rather than broken. A new gate settles on its hinges in its first year, and limits and obstruction force that were dialled in on the day stop matching where the gate physically sits. That is an adjustment, not a part. We would check the posts and the hinges first, because a builder-fitted gate on fresh ground moves more than one that has been up for twenty years.',
      },
      {
        q: 'Can you match a new operator to an older gate on a large lot?',
        a: 'Yes, and the sizing is the part that matters. A long iron leaf on an acre lot needs an operator rated for its weight and its length, not just for a residential driveway, and fitting one that is under-specified is what produces the repeat failures people assume are bad luck. We weigh the job by the gate, not by the address.',
      },
    ],
  },

  coppell: {
    zips: ['75019', '75063'],
    // Old Town and Riverchase are confirmed on coppelltx.gov; the remaining
    // three rest on HOA and realty sources because the city's own subdivision
    // database is behind a cookie gate.
    neighborhoods: ['Old Town Coppell', 'Riverchase', 'The Lakes of Coppell', 'Northlake Woodlands', 'Coppell Greens'],
    landmarks: ['Andrew Brown Park', 'Coppell Nature Park', 'The Square at Old Town Coppell', 'Coppell Arts Center'],
    majorRoads: ['Denton Tap Road', 'Sandy Lake Road', 'SH 121 Sam Rayburn Tollway', 'I-635'],
    nearbyCities: ['grapevine', 'carrollton', 'lewisville', 'farmers-branch', 'irving', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'Subdivisions built almost entirely between 1985 and 2000, so the operators behind their gates are ageing on the same clock',
      commonGateTypes: ['Residential slide', 'Wrought iron swing', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'DoorKing', 'Elite'],
      commonIssues: [
        'Control board failure on operators of the same 1990s generation',
        'Chain and sprocket wear on slide gates',
        'Telephone entry and keypad faults at community entrances',
        'Clay-soil post movement',
      ],
    },
    localAngle:
      'Coppell went from under four thousand people in 1980 to nearly thirty-six thousand by 2000, and by then most of its residential land was built out. That compressed history is the useful thing to know about gates here, because it means an unusual share of them went in within the same fifteen-year window and are reaching the end of their service life together. We see the same board, the same chain wear and the same tired limit switches turning up street after street, which also means the parts are predictable and the repair is usually a known quantity rather than an investigation. The community entrances are the other half of the work: an HOA gate on a shared drive fails for everyone at once, so it gets treated as urgent rather than scheduled.',
    faqs: [
      {
        q: 'Our neighbours have all had gate trouble this year. Is that a coincidence?',
        a: 'Probably not. Most of Coppell was built between the mid-1980s and 2000, so a lot of these operators were installed within a few years of each other and are wearing out on the same schedule. Control boards and chains do not fail on a calendar, but they do fail on cycles and age, and a street built in one go tends to reach that point together.',
      },
      {
        q: 'Who do you deal with for an HOA or community entrance gate?',
        a: 'Whoever the association nominates — a board member, a property manager, or the management company. We will diagnose and quote to one contact, and we are used to entrances where the operator, the entry panel and the loop in the road belong to different parts of the same problem. Getting all three checked in one visit is what avoids two call-outs.',
      },
    ],
  },

  prosper: {
    zips: ['75078', '76227'],
    neighborhoods: ['Windsong Ranch', 'Star Trail', 'Whitley Place', 'Gentle Creek Estates', 'Lakes of La Cima'],
    landmarks: ['Frontier Park', 'Downtown Prosper', 'Windsong Ranch Lagoon', 'Whitley Place Park'],
    // US 380 is signed as such and called University Drive locally; both are
    // given because people search and say both.
    majorRoads: ['US-380 University Drive', 'Preston Road', 'Dallas North Tollway', 'Frontier Parkway'],
    nearbyCities: ['celina', 'frisco', 'little-elm', 'mckinney', 'aubrey', 'the-colony'],
    responseBand: '',
    gateProfile: {
      dominant: 'Estate lots of an acre and up under the town’s SF-E zoning, with gates set well back from the road',
      commonGateTypes: ['Long-driveway swing', 'Ranch and acreage swing', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Apollo'],
      commonIssues: [
        'Voltage lost over long low-voltage runs to the gate',
        'Battery and solar charging faults on off-grid installs',
        'Limit drift on long single leaves',
        'Loop detector and keypad faults at community entrances',
      ],
    },
    localAngle:
      'Prosper zones its estate district at a one-acre minimum, with lots at least a hundred and fifty feet wide and a forty-foot front setback, and that single planning decision shapes most of the gate work in town. A gate sitting that far from the house means a long cable run, and a long run means voltage arriving at the operator lower than it left — which produces a gate that works in mild weather and struggles in cold, and gets misdiagnosed as a failing motor more often than anything else we see out here. The newer master-planned sections bring the other kind of call: community entrances with loops, keypads and several gates that have to agree with each other. Both are a different job to a suburban driveway, and we quote them differently.',
    faqs: [
      {
        q: 'Our gate is a long way from the house and has got sluggish. Is the motor going?',
        a: 'Test the supply before you believe that. On the one-acre lots here the run out to the gate is long enough that the voltage arriving can be meaningfully lower than what left the house, and an operator that is starved behaves exactly like one that is worn out — slow, hesitant, worse when it is cold. Cable gauge and connections are far cheaper to put right than a motor, so that is where we start.',
      },
      {
        q: 'Do you service the gated entrances in the master-planned communities?',
        a: 'Yes. Those entrances are usually several things working together — the operator, a loop buried in the road, a keypad or callbox, and sometimes a second gate — and the fault is often not in the part that appears broken. We check the whole entrance in one visit rather than replacing the obvious component and coming back.',
      },
    ],
  },

  celina: {
    zips: ['75009', '75078', '76227'],
    neighborhoods: ['Light Farms', 'Mustang Lakes', 'Cambridge Crossing', 'Creeks of Legacy', 'Sutton Fields', 'Lilyana'],
    landmarks: ['Celina Historic Downtown Square', 'Old Celina Park', 'Founders Station Park'],
    majorRoads: ['Preston Road', 'FM 455', 'FM 428', 'Dallas North Tollway'],
    nearbyCities: ['prosper', 'gunter', 'pilot-point', 'aubrey', 'mckinney', 'little-elm'],
    responseBand: '',
    gateProfile: {
      dominant: 'Brand-new subdivision entrances inside the city alongside ranch gates across a 78-square-mile extraterritorial jurisdiction',
      commonGateTypes: ['Ranch and acreage swing', 'HOA community entrance', 'Residential slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Ghost Controls'],
      commonIssues: [
        'Battery and solar charging faults on acreage gates',
        'Loop detector and keypad faults at new entrances',
        'Limits left wrong on recently installed operators',
        'Clay-soil post movement on long farm gates',
      ],
    },
    localAngle:
      'Celina grew by almost a quarter in a single year to 2025 — the fastest of any city in the country — and it now sits on about forty-eight square miles with an extraterritorial jurisdiction of seventy-eight. Those two numbers describe the two halves of our work here. Inside the developments, at Light Farms and Mustang Lakes and the rest, the equipment is new and the calls are about commissioning and access control: a loop that was paved over, a keypad that never got programmed properly, limits set before the gate settled. Out on the land beyond the subdivisions, the gate is usually a long farm leaf on a battery kept charged by a solar panel, a mile from anything, where a flat battery means nobody gets in or out. We carry parts for both, because on any given day we are likely to see both.',
    faqs: [
      {
        q: 'Our development is new and the entrance gate already plays up. Should the builder fix it?',
        a: 'Ask them first — if it is inside its installation warranty that is the cheaper route, and we will tell you plainly when we think it is. What we do see on new entrances is set-up rather than failure: a loop damaged during paving, a keypad never fully programmed, or limits set before the gate had settled on its hinges. Those are quick to correct and worth diagnosing before anyone argues about who pays.',
      },
      {
        q: 'Do you come out past the city limits to ranch and acreage gates?',
        a: 'Yes. Celina’s extraterritorial jurisdiction is larger than the city itself, and a lot of the gates we see around here are on that land: a long leaf, a solar panel, a battery in a box on the post. When one of those stops, the property is shut, so we treat it as urgent and we test the battery under load before we touch the operator, because that is where the fault usually is.',
      },
    ],
  },
  /**
   * ⚠️ Neighborhood names for Southlake, Colleyville, Keller and Grapevine's
   * subdivisions come from real-estate subdivision directories, not from the
   * cities themselves — every one of those city sites either publishes no list
   * or blocked retrieval. They are the names residents use, which is what
   * matters for a page someone reads, but they are the least-sourced field in
   * this file and worth a second pass if the client's team can confirm them.
   * Grapevine's historic districts and Flower Mound's list are the exceptions:
   * both come from the cities' own pages.
   */
  southlake: {
    zips: ['76092'],
    neighborhoods: ['Timarron', 'Carillon', 'Kirkwood Hollow', 'Shady Oaks', 'Coventry Manor', 'Clariden Ranch'],
    landmarks: ['Southlake Town Square', 'Bob Jones Park', 'Bob Jones Nature Center', 'Bicentennial Park', 'The Marq Southlake'],
    // FM 1938 is Randol Mill Avenue here and Davis Boulevard a few miles north
    // in Keller — the same road, two names, and people search the local one.
    majorRoads: ['SH 114', 'FM 1709 Southlake Blvd', 'FM 1938 Randol Mill Ave', 'N Carroll Ave'],
    nearbyCities: ['trophy-club', 'westlake', 'colleyville', 'grapevine', 'keller', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'Estate subdivisions built overwhelmingly in the 1990s, many behind their own community entrances',
      commonGateTypes: ['Wrought iron swing', 'Estate driveway slide', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Control boards reaching the end of their life across a single build era',
        'Chain and roller wear on wide estate slide gates',
        'Keypad and callbox faults at community entrances',
        'Clay-soil post movement under heavy iron',
      ],
    },
    localAngle:
      'Southlake built most of itself in one decade: the median home here dates to 1997, and forty-five per cent of the housing stock went up between 1990 and 1999. Gates went in with those houses, which is why a single street will often produce several similar calls in the same year — the boards, the chains and the limit switches behind them are all the same age. It makes the work predictable in a way that helps the customer, because we usually know what has failed before the cover comes off. The other thing worth knowing about this town is how much of it sits behind a shared entrance rather than a private drive, and a community gate that stops working is a different kind of urgent: nobody on the street gets in until it moves.',
    faqs: [
      {
        q: 'Is it worth repairing an operator that went in with the house in the nineties?',
        a: 'Usually, yes. The mechanical side of a well-installed operator from that era has plenty of life left, and what has actually failed is normally the board, the chain or a limit switch — all replaceable. What we would check alongside it is whether the gate has stayed square on its posts, because an operator fighting a dropped gate will wear out its replacement just as quickly.',
      },
      {
        q: 'Our subdivision entrance gate has failed. Who should call it in?',
        a: 'Whoever your association nominates, and one call is enough — we do not need every resident to report it. Entrance gates usually involve an operator, a keypad or callbox and a loop in the road, and the fault is often not in the part that looks broken, so we check all three on the first visit rather than returning for the second one.',
      },
    ],
  },

  colleyville: {
    zips: ['76034'],
    neighborhoods: ['Saddlebrook', 'Highland Meadows', 'Covington', 'Whittier Heights', 'Brook Meadows', 'Woodland Hills'],
    landmarks: ['Colleyville Nature Center', 'Cotton Belt Trail', 'Colleyville Heritage High School'],
    majorRoads: ['SH 26 Colleyville Blvd', 'Glade Road', 'Hall-Johnson Road', 'Precinct Line Road'],
    nearbyCities: ['bedford', 'hurst', 'southlake', 'north-richland-hills', 'euless', 'grapevine'],
    responseBand: '',
    gateProfile: {
      dominant: 'Large-lot single-family homes spanning four decades of building, so no single generation of operator dominates',
      commonGateTypes: ['Wrought iron swing', 'Estate driveway swing', 'Residential slide'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'All-O-Matic'],
      commonIssues: [
        'Parts availability on operators from the 1970s and 1980s',
        'Capacitor failure on older AC operators',
        'Limit drift on long single leaves',
        'Clay-soil post movement',
      ],
    },
    localAngle:
      'Colleyville settled an argument in the early 1980s that still shapes the place: one faction wanted expensive single-family homes on large lots, the other wanted smaller lots and apartments, and the large lots won. The result is a town of wide frontages whose houses were built across four decades rather than one, and that spread is the practical difference here. On the same afternoon we can be at a gate whose operator predates the internet and another fitted in the last few years, and the question of whether parts still exist is a real one rather than a formality. We check that before quoting, because telling somebody a board is available and discovering otherwise on the day is how a one-visit repair becomes three.',
    faqs: [
      {
        q: 'My operator is old enough that I cannot find the brand online. Can it still be fixed?',
        a: 'Often, and finding out is quick. Plenty of operators from the seventies and eighties are still serviceable, either with parts that remain available or by fitting a current board to the existing mechanics. Where a unit genuinely cannot be supported any more we will say so and explain what replacing it involves, rather than quietly fitting something that will not last.',
      },
      {
        q: 'Do you handle the wide gates on the larger lots here?',
        a: 'Yes, and width is the thing that decides the job. A long single leaf puts far more leverage on its hinges and its operator than a short one, so we look at the post, the hinge and the gate frame before we look at the electronics. Fitting a stronger operator to a gate that is sagging simply moves the failure somewhere more expensive.',
      },
    ],
  },

  keller: {
    // 76262 is shared seven ways — Northlake, Roanoke, Westlake, Fort Worth,
    // Trophy Club, Flower Mound and Keller — so it follows the core ZIP rather
    // than leading. 76244 is postally "Keller" but is 96% Fort Worth land.
    zips: ['76248', '76262'],
    neighborhoods: ['Hidden Lakes', 'Marshall Ridge', 'Bourland Oaks', 'Harmonson Farms', 'Saddlebrook Estates', 'Highland Oaks'],
    landmarks: ['Bear Creek Park', 'The Keller Pointe', 'Keller Town Center', 'Old Town Keller'],
    majorRoads: ['US-377', 'FM 1709 Keller Pkwy', 'FM 1938 Davis Blvd', 'Bear Creek Pkwy'],
    nearbyCities: ['westlake', 'southlake', 'north-richland-hills', 'colleyville', 'roanoke', 'fort-worth'],
    responseBand: '',
    gateProfile: {
      dominant: 'Newer housing than its neighbours, with several gated villages inside one subdivision running their own entrances',
      commonGateTypes: ['HOA community entrance', 'Wrought iron swing', 'Residential slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'All-O-Matic'],
      commonIssues: [
        'Remote and keypad credentials at gated village entrances',
        'Loop detector faults where entrances have been resurfaced',
        'Limit and safety-sensor drift on newer operators',
        'Clay-soil post movement',
      ],
    },
    localAngle:
      'Keller is the newest-built of the towns we cover along this corridor — the median home dates to 1999 and nearly a third of the housing went up between 2000 and 2009 — so the gates here are younger than most, and the calls skew toward access rather than mechanical failure. Hidden Lakes alone contains five separate gated villages, each with its own entrance and its own association maintaining the gates and the streets behind them, where residents get in with a remote or a keypad code. That arrangement produces a particular kind of problem: the operator is fine, the gate is fine, and what has actually broken is a credential, a loop under fresh asphalt, or the panel that reads them. Diagnosing it as an access fault instead of a gate fault is most of the job.',
    faqs: [
      {
        q: 'Half the residents can get in and half cannot. Is the gate broken?',
        a: 'Almost certainly not. When a gate opens for some credentials and not others, the gate and its operator are working and the fault is in what reads them — the keypad, the receiver, or the list of codes and remotes held in the panel. That is a programming and hardware question at the entrance, and it is usually a same-visit fix once we can get into the panel.',
      },
      {
        q: 'Our entrance was resurfaced and now the gate misbehaves. Related?',
        a: 'Very likely. Most entrances have a wire loop buried in the road that tells the gate a vehicle is there, and resurfacing, trenching or heavy plant can cut or crush it. The symptoms look like a possessed gate — opening on its own, refusing to close, ignoring cars — and the repair is the loop, not the operator.',
      },
    ],
  },

  grapevine: {
    // 75261 is the DFW Airport ZCTA — a quarter of Grapevine's land area, and
    // not a residential ZIP, so it is deliberately absent.
    zips: ['76051'],
    neighborhoods: ['Historic Grapevine Township', 'College Street Historic District', 'Original Town', 'Dove Creek', 'Silver Lake', 'Heritage Oaks'],
    landmarks: ['Grapevine Lake', 'Historic Main Street District', 'Grapevine Vintage Railroad', 'Nash Farm', 'Gaylord Texan'],
    majorRoads: ['SH 114', 'SH 121', 'SH 26 Ira E. Woods Ave', 'William D. Tate Ave'],
    nearbyCities: ['southlake', 'colleyville', 'coppell', 'euless', 'flower-mound', 'irving'],
    responseBand: '',
    gateProfile: {
      dominant: 'The oldest housing stock of the north-east Tarrant cities, with lakeside properties and a heavy commercial and hospitality corridor alongside',
      commonGateTypes: ['Wrought iron swing', 'Residential slide', 'Commercial slide', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'DoorKing', 'All-O-Matic', 'Elite'],
      commonIssues: [
        'Obsolete boards on pre-1970s and 1980s properties',
        'Corrosion and moisture ingress on enclosures near the lake',
        'High-cycle wear on hotel and commercial entrances',
        'Loop and barrier faults on managed parking entrances',
      ],
    },
    localAngle:
      'Grapevine has the oldest housing of any city along this stretch — the median home dates to 1993 but more than thirteen hundred houses here predate 1970 — and it wraps around a lake with nearly sixty miles of shoreline. Between those two facts sits most of what we repair. Older properties bring operators old enough that the board inside is the question, and the ones nearer the water bring corrosion: moisture gets into an enclosure, sits on a terminal strip, and produces intermittent faults that come and go with the weather rather than failing outright. Then there is the commercial side, because a quarter of the city by land area is the airport and the hotel and retail corridor beside it, where entrances and barrier arms run all day and wear on cycles rather than years.',
    faqs: [
      {
        q: 'Our gate works some days and not others. Nothing obvious is wrong.',
        a: 'Intermittent faults are usually connections rather than components, and near the lake they are usually moisture. Water finds its way into an enclosure, sits on the terminals, and the fault follows the weather instead of the gate. That needs tracing rather than parts-swapping, so we test the circuit under conditions rather than replacing the board and hoping.',
      },
      {
        q: 'Do you cover hotel, retail and commercial entrances as well as houses?',
        a: 'Yes, and they are a different service model. An entrance cycling hundreds of times a day consumes chains, bearings and loop hardware on a schedule, and the sensible approach is planned replacement before the failure rather than an emergency call-out when a barrier is stuck and vehicles are queueing. We will set that up if it is useful, or just fix what is broken.',
      },
    ],
  },

  'flower-mound': {
    // 75022 and 75028 are the town's own; 76226 and 76262 are shared with
    // Argyle, Bartonville, Northlake and Roanoke and are left off.
    zips: ['75022', '75028'],
    // The only neighborhood list here taken straight from the town's own
    // homeowner-association page rather than a directory.
    neighborhoods: ['Bridlewood', 'Wellington of Flower Mound', 'Canyon Falls', 'The Estates at Tour 18', 'Chateau du Lac', 'The Preserve at Flower Mound', 'Wichita Creek Estates'],
    landmarks: ['The Flower Mound', 'Twin Coves Park', 'Heritage Park', 'Gibson-Grant Log House', 'Grapevine Lake'],
    majorRoads: ['FM 1171 Cross Timbers Rd', 'FM 2499 Long Prairie Rd', 'FM 3040 Flower Mound Rd', 'US-377'],
    nearbyCities: ['highland-village', 'trophy-club', 'argyle', 'roanoke', 'lewisville', 'coppell'],
    responseBand: '',
    gateProfile: {
      dominant: 'Two-acre minimum lots across the Cross Timbers district, with equestrian trails and no sewer, beside conventional 1990s subdivisions',
      commonGateTypes: ['Long-driveway swing', 'Ranch and acreage swing', 'HOA community entrance', 'Residential slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Apollo'],
      commonIssues: [
        'Battery and solar charging faults on gates far from the house',
        'Voltage lost over long runs out to the road',
        'Limit drift on long single leaves',
        'Clay-soil post movement on paddock and farm gates',
      ],
    },
    localAngle:
      'Flower Mound zones a large part of itself as the Cross Timbers Conservation Development District, where the rule is one home per two acres and the town’s plan deliberately does not extend sewer. That is unusual this close to the metroplex, and it shows up in the gates: long entrance drives, leaves heavy enough to need a properly rated operator, and a good number of properties running the gate on a battery and panel because trenching power to the road was never worth it. The town also keeps more than fourteen miles of equestrian trail between its parks and the corps land along the lake, which tells you what kind of property is behind many of these gates. On the conventional side, the subdivisions built through the 1990s are now reaching the age where boards and chains start to go.',
    faqs: [
      {
        q: 'The gate at the end of our drive has slowed right down. Is it the operator?',
        a: 'On a long drive it is usually power before it is the operator. If the gate runs from a battery and a panel, the battery is the part that wears and Texas heat shortens it; if it runs from the house, the length of the cable can leave it short of voltage. Either way the symptom is the same — slow, hesitant, worse when it is cold — so we measure before we condemn anything.',
      },
      {
        q: 'Do you work on paddock and farm gates as well as the entrance?',
        a: 'Yes. On the two-acre properties out here the entrance gate is often not the only automated one, and a wide farm gate has its own problems — posts set in ground that shifts, long leaves that drop over time, and hinges carrying more weight than they were chosen for. We would rather fix the post and the hinge than fit a stronger operator to pull against them.',
      },
    ],
  },

  // ── BATCH 2, 25 Sep 2026 ───────────────────────────────────────────────────
  // Ten more Tier 2 towns taken off noindex. Selected on gate density first and
  // population second: an acre-lot town of 8,000 with a gate on every drive is
  // worth more to this business than a 90,000-person suburb of ungated tract
  // housing. Each entry is anchored to a fact that is true of that town and of
  // nowhere else — a zoning minimum, a lake shoreline, a 1973 master plan — so
  // the page has something to say that a name swap could not produce.
  //
  // `gateProfile` remains a DRAFT on all ten, same standing as Tier 1: it is
  // written from the town's housing stock and age, not from job records. The
  // technician interview replaces it (CITY-PAGES.md §5).

  lewisville: {
    zips: ['75057', '75067', '75077'],
    // 75028 is Flower Mound, 75056 The Colony and 75029 is PO-box only; all
    // three list Lewisville as an alternate USPS name and none is claimed here.
    neighborhoods: ['Old Town Lewisville', 'Castle Hills', 'Valley Vista', 'Garden Ridge', 'Arbor Valley'],
    landmarks: ['Lake Lewisville', 'LLELA Nature Preserve', 'MCL Grand Theater', 'Old Town Lewisville'],
    majorRoads: ['I-35E', 'SH 121 Business', 'FM 407 Justin Road', 'Main Street'],
    nearbyCities: ['flower-mound', 'highland-village', 'coppell', 'carrollton', 'the-colony', 'denton'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city of 137,000 that grew outward in distinct decades, so operator age changes street by street',
      commonGateTypes: ['Apartment and community slide', 'Residential swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'High cycle counts on multifamily and HOA entrances',
        'Worn slide chains and rollers on community gates',
        'Telephone entry boards on ageing apartment systems',
        'Clay-soil post movement on older residential drives',
      ],
    },
    localAngle:
      'Lewisville is the largest city on this list — around 137,000 people — and it grew in visible layers, which is the thing that matters for gate work. Old Town and the streets either side of Main are pre-war and post-war housing where an automated gate is the exception. The corridor along I-35E is apartments and gated communities, some of them thirty years old, and that is where most of our Lewisville calls come from: entrances running hundreds of cycles a day on slide operators that were specified for a quieter building. Out toward FM 407 and the lake the lots get larger and the gates become private driveway swings again. Those three call types need different parts on the van, so we ask which part of Lewisville a caller is in before we load it.',
    faqs: [
      {
        q: 'We manage an apartment entrance in Lewisville that keeps failing. Is it the operator or the gate?',
        a: 'On a high-traffic entrance it is usually neither in isolation. A slide gate doing several hundred cycles a day wears its chain, its rollers and its track long before the operator gives up, and the operator then strains against that wear until it fails too. Replacing the operator alone on a worn track buys a few months. We measure the track and the chain first and quote the whole entrance honestly, because a part-fix on a gate residents use every day is not a saving.',
      },
      {
        q: 'Do you service gated communities and HOAs as well as individual homes?',
        a: 'Yes, and a good share of our Lewisville work is exactly that. HOA and apartment entrances need scheduling around residents rather than around us, so we work to an agreed window, keep the entrance passable while we are in it, and put the failure and the fix in writing for the board or the management company.',
      },
    ],
  },

  mansfield: {
    zips: ['76063'],
    // Fairways of Walnut Creek and South Pointe are both gated; the remaining
    // three are large-lot subdivisions from realty listings rather than a city
    // register, which Mansfield does not publish.
    neighborhoods: ['Fairways of Walnut Creek', 'South Pointe', 'Walnut Creek Valley', 'Twin Creeks', 'Woodland Estates'],
    landmarks: ['Walnut Creek Country Club', 'Mansfield National Golf Club', 'Historic Downtown Mansfield', 'Hawaiian Falls'],
    majorRoads: ['US-287', 'FM 157 Matlock Road', 'Broad Street', 'SH 360'],
    nearbyCities: ['arlington', 'grand-prairie', 'cedar-hill', 'burleson', 'midlothian', 'kennedale'],
    responseBand: '',
    gateProfile: {
      dominant: 'Golf-course estate frontages and gated subdivisions spread across the Tarrant and Johnson county line',
      commonGateTypes: ['Estate driveway swing', 'Community slide', 'Ornamental iron swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'All-O-Matic'],
      commonIssues: [
        'Community entrance slide gates running constant cycles',
        'Long iron leaves sagging on estate frontages',
        'Loop detector faults on wide subdivision entrances',
        'Clay-soil post movement on golf-course lots',
      ],
    },
    localAngle:
      'Mansfield has more gated frontage per household than most towns its size, because its growth came as subdivisions rather than as infill — Fairways of Walnut Creek and South Pointe are gated at the entrance, and the estate lots around Walnut Creek Country Club are gated individually. That produces two kinds of work in the same postcode. A community entrance is a shared asset: it runs all day, it is a board or a management company that pays for it, and when it fails every resident is affected at once. A private estate gate on a golf-course lot is usually a long ornamental leaf, and the fault is more often the hinge, the post or the sag than the operator. We quote them differently because the urgency and the failure mode are different.',
    faqs: [
      {
        q: 'Our subdivision entrance gate in Mansfield is stuck open. How quickly can you get to it?',
        a: 'A community entrance stuck open is a security issue for every household behind it, so we treat it as urgent and aim to get a technician out the same day. If the fix needs a part we do not carry, we will secure the entrance in a safe state and tell you plainly when the part lands rather than leaving it open indefinitely.',
      },
      {
        q: 'Our long iron gate has started dragging on the driveway. Is the operator failing?',
        a: 'Usually not. A long ornamental leaf is heavy at its far end, and over years the hinge and the post take that load and let the gate drop — the operator is simply being asked to drag it. Fitting a stronger operator to a sagging gate is the common mistake and it fails again. The fix is the hinge, the post, or a re-square of the leaf, and then the existing operator generally has no trouble.',
      },
    ],
  },

  'north-richland-hills': {
    // 76180 and 76182 are the city's own; 76148 covers a northern section it
    // shares with Watauga.
    zips: ['76180', '76182', '76148'],
    neighborhoods: ['HomeTown NRH', 'Iron Horse', 'Iron Horse Commons', 'Kingswood Estates', 'Crestwood Estates'],
    landmarks: ['Iron Horse Golf Course', 'NRH2O Family Water Park', 'HomeTown NRH', 'Northfield Park'],
    majorRoads: ['Loop 820', 'SH 26 Grapevine Highway', 'Davis Boulevard', 'Rufe Snow Drive'],
    nearbyCities: ['hurst', 'bedford', 'euless', 'haltom-city', 'keller', 'colleyville'],
    responseBand: '',
    gateProfile: {
      dominant: 'Mid-century Mid-Cities housing with newer gated infill at HomeTown and Iron Horse',
      commonGateTypes: ['Residential swing', 'Community slide', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'Eagle'],
      commonIssues: [
        'Operators installed in the 1990s with no current parts support',
        'Safety sensors missing or bypassed on older installs',
        'Slide gate track and roller wear at community entrances',
        'Corroded wiring on gates exposed to years of storm runoff',
      ],
    },
    localAngle:
      'North Richland Hills is a Mid-Cities suburb that filled in from the 1960s onward, and the gates reflect that: most of the automated ones went in during the 1990s and 2000s, and a good number have never been touched since. The practical consequence is safety equipment. A gate operator installed before current UL 325 practice often has one photo-eye or none, and we still find sensors that were disconnected years ago because they nuisance-tripped rather than because they were faulty. The newer gated pockets — HomeTown and around Iron Horse — are a different job entirely, with modern boards and intact safety devices, where the failure is usually a detector loop or a worn slide track. Either way we check the safety side before we quote the fault somebody called about.',
    faqs: [
      {
        q: 'Our gate has no safety sensors. Do we have to add them?',
        a: 'We will not re-commission a powered gate without working entrapment protection, and that is not a sales position. An automatic gate is heavy and it moves without warning; the sensors are what stop it closing on a car, a child or a pet. If yours are missing or were disconnected, fitting current ones is a small part of the job and we will tell you the cost before we start.',
      },
      {
        q: 'Our operator is from the 1990s. Can it still be repaired?',
        a: 'Often yes, and when it cannot we will say so rather than guess. Some operators of that era still have current boards and parts available; others were discontinued and nothing fits them any more. The mechanics — the posts, the hinges, the track — usually outlast the electronics, so even when the operator has to be replaced the rest of the installation is generally reusable, which keeps the cost far below a full replacement.',
      },
    ],
  },

  'trophy-club': {
    // 76262 is shared with Roanoke; the town has no exclusive ZIP.
    zips: ['76262'],
    neighborhoods: ['The Highlands at Trophy Club', 'Trophy Wood', 'Lakes of Trophy Club', 'Summit Cove', 'Turnberry'],
    landmarks: ['Trophy Club Country Club', 'Ben Hogan and Kathy Whitworth courses', 'Trophy Club Park', 'Harmony Park'],
    majorRoads: ['SH 114', 'Trophy Club Drive', 'Trophy Wood Drive', 'Bobcat Boulevard'],
    nearbyCities: ['southlake', 'roanoke', 'westlake', 'keller', 'grapevine', 'northlake'],
    responseBand: '',
    gateProfile: {
      dominant: 'A 1973 master-planned golf community, so a large share of operators date from the original build-out',
      commonGateTypes: ['Estate driveway swing', 'Courtyard gate', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Original-era operators with discontinued control boards',
        'Short drives and tight turning space on golf-course frontages',
        'Post movement on the rolling ground the courses are cut through',
        'Newer Highlands installs left badly commissioned',
      ],
    },
    localAngle:
      'Trophy Club was Texas’s first master-planned community, laid out in 1973 around two golf courses that the developer named for Ben Hogan. Almost fifty years of build-out in one town is why gate work here splits so cleanly. On the original streets the operator is frequently as old as the second or third owner of the house, and the question is whether a current board and new safety devices can be fitted behind ironwork nobody wants to change. In the Highlands, the district approved in 2007 that added roughly 1,400 homes, the gates are new and the faults are commissioning faults — limits set before the gate settled, sensors aimed at nothing, an operator sized for a lighter leaf. The town is small enough that we see both in an afternoon.',
    faqs: [
      {
        q: 'Our house backs onto the golf course and the driveway is short. Does that change the gate work?',
        a: 'It changes where the safety devices go and how the timers are set. A short drive means a vehicle waiting for the gate is partly in the street, so a slow open-and-close cycle is not just inconvenient, it is a hazard. We set the timing and the sensor positions for the drive you actually have rather than to a default, and on very tight frontages a slide gate is sometimes the safer answer than a swing.',
      },
      {
        q: 'Our gate is as old as the house. Is a replacement the only option?',
        a: 'Rarely. The gate, the posts and the hinges are separate from the operator, and on most 1970s and 1980s installations the ironwork is in better condition than the electronics driving it. Where the original board is genuinely discontinued we fit a current operator behind the existing gate, which preserves the frontage and costs a fraction of replacing the lot.',
      },
    ],
  },

  argyle: {
    zips: ['76226'],
    // Canyon Falls and Harvest are the two large master-planned developments;
    // most of the town is unplatted acreage with no subdivision register to
    // cite, so the remaining names are the ones in local use.
    neighborhoods: ['Canyon Falls', 'Harvest', 'Country Lakes', 'Waterstone Estates', 'Old Argyle'],
    landmarks: ['Argyle ISD campuses', 'Lantana', 'Denton Creek', 'US-377 corridor'],
    majorRoads: ['US-377', 'FM 407', 'I-35W', 'Crawford Road'],
    nearbyCities: ['flower-mound', 'highland-village', 'denton', 'northlake', 'roanoke', 'justin'],
    responseBand: '',
    gateProfile: {
      dominant: 'Horse and acreage properties where the entrance gate sits well back from the house on a long private drive',
      commonGateTypes: ['Ranch entrance swing', 'Farm and paddock gate', 'Wide estate slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Solar and battery operators on drives with no mains power at the gate',
        'Long buried runs to a gate hundreds of feet from the meter',
        'Wide farm gates dropping on posts set in shifting ground',
        'Livestock and wildlife triggering or obstructing safety devices',
      ],
    },
    localAngle:
      'Argyle is horse country inside the metroplex — low-density zoning, tree preservation rules and a lot of properties measured in acres rather than square feet. The gate work that produces is unlike anything in a suburb. The entrance is often several hundred feet from the house and further still from the meter, so the operator is solar or battery-backed, and when it fails the cause is as likely to be a tired battery or a panel under a grown-out tree as anything in the operator. The gates themselves are wide, because a trailer has to get through, and a wide gate on a post set in ground that moves with the season will drop out of square long before the motor wears out. We come to Argyle expecting a power problem and a post problem, and check the operator third.',
    faqs: [
      {
        q: 'Our gate runs on solar and has got slow and unreliable. Is the panel the problem?',
        a: 'Usually it is the battery, and the panel only by association. Sealed batteries on gate operators have a working life of a few years and they fail gradually — the gate opens fine in the afternoon and struggles at dawn, which is the clearest sign. A panel shaded by a tree that has grown since the install will shorten that life, so we check both, and we size the replacement for the number of cycles you actually run rather than the number the box assumes.',
      },
      {
        q: 'Do you work on farm and paddock gates as well as the main entrance?',
        a: 'Yes. On acreage the entrance is rarely the only automated gate, and a wide farm gate has its own failure pattern — a long leaf, a post in ground that shifts, and hinges carrying more weight than they were chosen for. We would rather reset the post and the hinge than sell a stronger operator to pull against them, because the stronger operator tears the post out eventually.',
      },
    ],
  },

  lucas: {
    // 75002 is Allen's ZIP and 75098 is Wylie's; Lucas has none of its own, and
    // the copy never claims either as exclusively ours.
    zips: ['75002', '75098'],
    neighborhoods: ['Forest Grove Estates', 'Stinson Highlands', 'Brockdale', 'Inwood Estates', 'Winningkoff'],
    landmarks: ['Lake Lavon', 'Brockdale Park', 'Lucas Community Park', 'Country Club Road corridor'],
    majorRoads: ['FM 1378 Country Club Road', 'FM 2551', 'Lucas Road', 'Estates Parkway'],
    nearbyCities: ['allen', 'wylie', 'parker', 'plano', 'murphy', 'mckinney'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town zoned to one- and two-acre minimums, so nearly every automated gate is a private driveway entrance',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Wide slide on long drives'],
      commonBrands: ['LiftMaster', 'US Automatic', 'All-O-Matic', 'Elite'],
      commonIssues: [
        'Long buried cable runs between house and gate',
        'Solar operators on drives without mains power at the entrance',
        'Post movement in Blackland Prairie clay on wide leaves',
        'Intercom and keypad faults over distance from the house',
      ],
    },
    localAngle:
      'Lucas holds its residential zoning at one- and two-acre minimums — R1 at an acre, R2 at two, the estate district averaging four — and it has defended that low density deliberately. For gate work that single ordinance explains almost everything. There are very few shared community entrances here, because there are very few dense subdivisions; nearly every gate is one household’s private entrance, set well back from the road on a drive long enough that power and communication have to travel. So the recurring faults are distance faults: a buried cable degraded after fifteen years in clay, a keypad that will not talk to a house two hundred feet away, a solar operator that was sized before the household added a second car and doubled the cycles. The gates themselves are wide, and wide leaves on Blackland clay posts move.',
    faqs: [
      {
        q: 'Our gate intercom cuts out but the gate still opens. What causes that?',
        a: 'Almost always the run between the gate and the house rather than either box. On an acre lot that cable is long, usually buried, and often fifteen or twenty years old — moisture gets into a joint and the audio degrades while the gate circuit, which is more tolerant, keeps working. We test the run before replacing hardware, because swapping an intercom that was never faulty is a common and expensive way to not fix this.',
      },
      {
        q: 'How much does the clay soil out here really affect a gate?',
        a: 'More than most people expect. Blackland Prairie clay swells when it is wet and shrinks hard in a Texas summer, and a gate post is a lever with a heavy leaf on the end of it. Over a few seasons that movement puts the gate out of square, which shows up as a gate that catches, strains or stops at the same point every time. It reads like an operator fault and it is a groundwork fault, so we check the post and the level before we touch the motor.',
      },
    ],
  },

  parker: {
    zips: ['75002', '75094'],
    neighborhoods: ['Southfork Estates', 'Hidden Creek Estates', 'Chaparral Estates', 'Dublin Meadows', 'Rolling Ridge'],
    landmarks: ['Southfork Ranch', 'Lake Lavon', 'Bowman Branch Park', 'Parker Road corridor'],
    majorRoads: ['Parker Road FM 2514', 'Dublin Road', 'FM 1378', 'SH 78'],
    nearbyCities: ['plano', 'allen', 'murphy', 'wylie', 'lucas', 'richardson'],
    responseBand: '',
    gateProfile: {
      dominant: 'Two-acre estate lots beside the Southfork ranch land, with new luxury build-out adding gates each year',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Ornamental iron slide'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'US Automatic'],
      commonIssues: [
        'Newly installed gates left commissioned to the wrong limits',
        'Under-specified operators on long ornamental leaves',
        'Long power and communication runs on two-acre frontages',
        'Clay post movement on wide entrances',
      ],
    },
    localAngle:
      'Parker is a small city that has held a large-lot identity on purpose, and it is now adding to it — the acreage rezoned beside the Southfork Ranch mansion is being laid out as eighty-nine two-acre estate homesites. That matters to gate work because a new estate gate and a twenty-year-old one fail in completely different ways, and Parker is about to have a great many of both. A new install goes wrong at commissioning: limits dialled in before the gate settled on its hinges, obstruction force set for a lighter leaf than the one that was finally hung, a safety sensor aimed where the drive used to be. An older gate on the established streets has done its settling and needs parts. We diagnose the age of the installation before we diagnose the fault.',
    faqs: [
      {
        q: 'Our gate was installed with our new build and already misbehaves. Is it under warranty?',
        a: 'It may be, and we will tell you if it looks like a warranty claim on the installer rather than a repair you should be paying us for. New-build gates most often need adjustment rather than parts — a gate settles on its hinges through its first year and the settings dialled in on install day stop matching where the gate physically sits. That is a short visit, and if we think the original installer owes you the fix, we will say so.',
      },
      {
        q: 'Is an operator sized for a normal driveway enough for a two-acre frontage?',
        a: 'Often not, and under-sizing is the most common cause of gates that keep failing on estate lots. A long ornamental leaf is heavier and has far more leverage than a suburban gate, and an operator chosen on price rather than on the weight and length it has to move will strain, overheat and fail repeatedly. We size the operator to the gate we can see, and we will tell you when the one you have is the reason it keeps breaking.',
      },
    ],
  },

  'highland-village': {
    // 75077 is shared with part of Lewisville; there is no exclusive ZIP.
    zips: ['75077'],
    neighborhoods: ['Highland Shores', 'Castlewood', 'Montclair Estates', 'Clearwater Estates', 'Highland Hills'],
    landmarks: ['Lake Lewisville', 'Copperas Branch Park', 'Pilot Knoll Park', 'The Shops at Highland Village'],
    majorRoads: ['FM 407 Justin Road', 'FM 2499', 'Briarhill Boulevard', 'I-35E'],
    nearbyCities: ['flower-mound', 'lewisville', 'denton', 'argyle', 'the-colony', 'coppell'],
    responseBand: '',
    gateProfile: {
      dominant: 'Lakeside custom homes on the south shore of Lake Lewisville, many with private dock access',
      commonGateTypes: ['Ornamental iron swing', 'Driveway slide', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Eagle'],
      commonIssues: [
        'Corrosion on hardware and wiring near the shoreline',
        'Moisture ingress into control boxes on lakeside lots',
        'Post movement on sloping ground above the shore',
        'Photo-eye faults from lake fog and condensation',
      ],
    },
    localAngle:
      'Highland Village sits on the south shore of Lake Lewisville, and the water is not a scenic detail in gate work — it is the reason things fail here. Humidity off a lake this size gets into control boxes, corrodes terminal blocks and hinge hardware faster than it does a few miles inland, and lake fog sets off photo-eyes that behave perfectly the rest of the year. The ground adds to it: the lots on Highland Shores and above the shoreline slope, and a gate post on sloping ground that drains toward a lake moves more than one on level clay. So our checklist here starts with the enclosure seal and the earth around the post, which on an inland job would be the last things we looked at.',
    faqs: [
      {
        q: 'Our gate misbehaves on foggy mornings and is fine by lunchtime. Is it broken?',
        a: 'That pattern is nearly always the photo-eyes rather than the operator. Condensation on the lens scatters the beam, the operator reads an obstruction that is not there and refuses to close, and once the sun burns the fog off it works perfectly. It is genuinely fixable — repositioning, hooding, or replacing with a sensor type that tolerates moisture — and it does not mean the gate needs replacing.',
      },
      {
        q: 'Does being close to the lake shorten the life of the equipment?',
        a: 'It shortens the life of the parts exposed to air and water, not the operator itself. Terminal blocks, hinge hardware and anything inside a box whose seal has aged corrode faster here than they would inland. Sealing the enclosure properly and using the right hardware makes a real difference, and it is a much smaller job than replacing an operator that failed because water reached it.',
      },
    ],
  },

  rowlett: {
    zips: ['75088', '75089'],
    neighborhoods: ['Bayside', 'Waterview', 'Lakeside on Lake Ray Hubbard', 'Springfield Estates', 'Liberty Grove'],
    landmarks: ['Lake Ray Hubbard', 'Sapphire Bay peninsula', 'Rowlett Community Centre', 'Herfurth Park'],
    majorRoads: ['I-30', 'President George Bush Turnpike', 'Lakeview Parkway SH 66', 'Dalrock Road'],
    nearbyCities: ['garland', 'rockwall', 'sachse', 'wylie', 'mesquite', 'heath'],
    responseBand: '',
    gateProfile: {
      dominant: 'A peninsula city almost surrounded by Lake Ray Hubbard, with waterfront lots and newer gated communities',
      commonGateTypes: ['Community slide', 'Residential swing', 'Waterfront property gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'Elite'],
      commonIssues: [
        'Corrosion on waterfront hardware and buried wiring',
        'Slide track fouling from windblown grit off the lake',
        'Community entrance gates on constant cycles',
        'Storm damage to exposed operators and control boxes',
      ],
    },
    localAngle:
      'Rowlett is nearly surrounded by Lake Ray Hubbard — the city sits on a peninsula with miles of shoreline, and the Sapphire Bay site alone has two miles of it. Wind comes off that water with nothing to break it, and it carries grit. On slide gates that is the whole story: the track fouls, the rollers grind, and the operator gets blamed for a problem that is mechanical and abrasive. On waterfront lots the humidity does what it does everywhere near water, which is to find any terminal that is not properly sealed. Then there are the newer gated communities inland, which have modern equipment and the ordinary high-cycle problems of any shared entrance. Three environments, one city, so we ask which side of Rowlett a caller is on.',
    faqs: [
      {
        q: 'Our slide gate grinds and sticks. Does it need a new operator?',
        a: 'Usually it needs its track cleared and its rollers replaced, not a new motor. Out here the wind carries grit off the lake into the track, the rollers wear on it, and the operator then labours against that friction until it too gives up. Replace the operator on a fouled track and you will be calling again. We measure the track and the rollers first and tell you honestly what actually needs replacing.',
      },
      {
        q: 'What should we do with a gate after a storm?',
        a: 'The two things that go are the safety sensors, knocked out of alignment, and anything electrical that took water or a surge. If your gate has been through a storm, the safest thing is to leave it in whatever position it settled in and call rather than force it through a cycle — a gate with damaged safety devices that still moves is more dangerous than one that has stopped.',
      },
    ],
  },

  waxahachie: {
    zips: ['75165', '75167'],
    // The first three are National Register historic districts, which is as
    // well-sourced as a neighborhood name gets; the last two are subdivisions.
    neighborhoods: ['West End Historic District', 'North Rogers Street', 'Oldham Avenue', 'Buffalo Creek', 'Emory Lakes'],
    landmarks: ['Ellis County Courthouse', 'Historic downtown square', 'Getzendaner Memorial Park', 'Waxahachie Civic Center'],
    majorRoads: ['I-35E', 'US-287', 'FM 813', 'Ferris Avenue'],
    nearbyCities: ['midlothian', 'red-oak', 'ovilla', 'cedar-hill', 'palmer', 'maypearl'],
    responseBand: '',
    gateProfile: {
      dominant: 'A Victorian-era town centre ringed by working acreage, so heritage ironwork and ranch entrances turn up on the same day',
      commonGateTypes: ['Ornamental iron swing', 'Ranch entrance swing', 'Wide farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Heritage ironwork on properties where appearance cannot be altered',
        'Solar operators on ranch entrances away from mains power',
        'Wide farm gates dropping on posts in Blackland clay',
        'Long drives with degraded buried cable runs',
      ],
    },
    localAngle:
      'Waxahachie calls itself the Gingerbread City and it has the record to back it — five National Register historic districts, and streets off the 1897 Ellis County courthouse where the Victorian and Queen Anne houses are protected. Then a few minutes out, the Ellis County acreage starts. The two halves want opposite things from us. On a historic property the ironwork is part of what is being preserved, and the answer is almost always to keep the gate and modernise what drives it, because changing the frontage is not on the table. On the ranch entrances the gate is a working object — wide enough for a trailer, far from the meter, usually solar — and it is judged on whether it opens in February when the battery is cold. We carry for both, because in Waxahachie they are the same day’s work.',
    faqs: [
      {
        q: 'We are in one of the historic districts. Will modernising the gate change how it looks?',
        a: 'It does not need to. The operator that moves a gate is separate from the gate itself, so a current operator, a modern board and proper safety sensors can go in behind ironwork that is not altered at all. Where equipment has to be visible we will show you the options before fitting anything, because on these properties the frontage is the point.',
      },
      {
        q: 'Our ranch gate is a long way from the house and there is no power at the entrance. What are the options?',
        a: 'Solar with a properly sized battery is the usual answer and it works well out here, provided the battery is sized for the number of cycles you actually run rather than an average. The alternative is a buried mains run, which is worth it on some layouts and not on others. We will price both honestly against your drive length and tell you which we would choose.',
      },
    ],
  },

  // ── BATCH 3, 28 Sep 2026 ───────────────────────────────────────────────────
  // The six Tier 2 towns added in 929988e, which had no page at any tier until
  // then. All six come from the client's keyword list rather than his coverage
  // list — see the warning in scripts/client-city-list.ts.
  //
  // `gateProfile` is a DRAFT on all six, same standing as Tier 1.

  bartonville: {
    zips: ['76226'],
    // Subdivision names from Denton County realty records; the town publishes
    // no register. Most of Bartonville is unplatted acreage, so these are the
    // platted exceptions rather than a map of the town.
    neighborhoods: ['Saddlebrook Estates', 'Barrington Hills', 'Hat Creek Estates', 'Long Meadows Estates', 'Deer Hollow'],
    landmarks: ['Bartonville Town Center', 'Denton Creek', 'Lantana Golf Club', 'Argyle ISD campuses'],
    majorRoads: ['FM 407', 'FM 1830', 'US-377', 'Jeter Road'],
    nearbyCities: ['argyle', 'lantana', 'flower-mound', 'highland-village', 'denton', 'justin'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town of roughly 1,700 people zoned for agricultural and equestrian use, where the entrance gate is further from the house than the house is wide',
      commonGateTypes: ['Ranch entrance swing', 'Farm and paddock gate', 'Wide estate slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Solar operators on entrances with no mains power at the gate',
        'Long buried runs between the house and the road',
        'Wide gates sized for horse trailers dropping on their posts',
        'Livestock and wildlife triggering safety devices',
      ],
    },
    localAngle:
      'Bartonville holds about 1,700 people across land zoned for agricultural and equestrian use, and its ordinances are unusually explicit about it — an equestrian centre needs five acres before the town will even consider the permit. That tells you most of what matters for gate work here. The entrances are wide because a horse trailer has to clear them, they sit hundreds of feet from the house along a private drive, and the power to run them is frequently solar because trenching a supply that distance costs more than the operator. When a Bartonville gate fails in February the first thing we check is the battery, because a sealed battery that coped in October will not turn a heavy trailer gate on a cold morning. The second is the post, because a wide leaf on ground that moves with the season drops out of square long before the motor gives up.',
    faqs: [
      {
        q: 'Our entrance is a long way from the house and there is no power at the gate. What are the options?',
        a: 'Solar is the usual answer on Bartonville frontages, and the whole thing turns on sizing it to your real traffic — a household running twenty cycles a day needs a different panel and battery from one running six. Trenching power out to the gate is the other route, and on some layouts it genuinely is the better investment. We work out both figures against your own drive and cycle count, then tell you which one we would pick and why.',
      },
      {
        q: 'Do you work on gates wide enough for a horse trailer?',
        a: 'Yes, and the specification is where these go wrong. A leaf built wide enough for a trailer carries far more leverage at its outer end than a suburban gate, so an operator picked to a residential rating will overheat, stall and eventually burn out — not because it is faulty but because it was never rated for that leaf. We measure the leaf and weigh it before recommending anything, and we look at what is carrying it, since a post that cannot hold the gate will not hold a stronger motor either.',
      },
    ],
  },

  lantana: {
    zips: ['76226'],
    // Lantana is an unincorporated CDP, not a city. Its "neighborhoods" are the
    // developer's villages, which is how residents actually refer to them.
    neighborhoods: ['Bandera', 'Wisteria', 'Azalea', 'Madison', 'Larkspur'],
    landmarks: ['Lantana Golf Club', 'Lantana Community Center', 'Denton Creek', 'Lantana Trail'],
    majorRoads: ['FM 407', 'Lantana Trail', 'US-377', 'I-35W'],
    nearbyCities: ['bartonville', 'argyle', 'flower-mound', 'highland-village', 'denton', 'justin'],
    responseBand: '',
    gateProfile: {
      dominant: 'A single master-planned community of about 4,000 homes built through the 2000s and 2010s, so the gates are a generation newer than the region average',
      commonGateTypes: ['Community slide', 'Residential swing', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Eagle'],
      commonIssues: [
        'Community entrance gates running constant cycles',
        'Commissioning faults on gates installed with the house',
        'Loop detector faults at village entrances',
        'Clay-soil post movement on newer construction',
      ],
    },
    localAngle:
      'Lantana is not a city — it is a single master-planned community of around 4,000 homes spread over about 1,780 acres of unincorporated Denton County, laid out in villages around an eighteen-hole course designed by Jay Morrish. Almost all of it went up in the 2000s and 2010s, which makes it one of the youngest places we work and changes what goes wrong. There is very little here of the obsolete-control-board problem that dominates the older parts of the metroplex. What we see instead are commissioning faults — gates installed with the house, dialled in before the leaf had settled on its hinges, and slowly drifting out of adjustment through their first years — and shared village entrances doing far more cycles a day than a private drive ever will. Those are different jobs with different parts, and on a single afternoon here we will usually do both.',
    faqs: [
      {
        q: 'Our gate came with the house and has started misbehaving. Is it faulty?',
        a: 'Usually it is set up rather than broken, and in a community this young that is the single most common thing we find. The leaf drops a fraction on its hinges over its first year or two, and the travel limits and obstruction force that were correct on handover day no longer describe where the gate actually sits. Re-learning the travel against the gate as it is now costs a visit and no parts.',
      },
      {
        q: 'Do you work on the village entrance gates as well as private driveways?',
        a: 'Yes, and in Lantana it is often both on the same visit. A village entrance is a shared asset with a shared consequence — when it stops, several hundred households notice before the board does. Those jobs get booked for a window that suits residents, and we leave a written account of what failed and what we changed so the management company has something to file rather than a verbal summary from whoever happened to be on site.',
      },
    ],
  },

  'cross-roads': {
    zips: ['76227'],
    // 76227 covers several communities; Windsong Ranch, Savannah and Paloma
    // Creek are in the ZIP but NOT in Cross Roads town limits, so they are
    // deliberately absent here.
    neighborhoods: ['Cross Oak Ranch', 'Sunset Pointe', 'Forest Hills'],
    landmarks: ['US-380 and US-377 junction', 'Lake Lewisville', 'Cross Roads Town Hall', 'Denton Creek'],
    majorRoads: ['US-380', 'US-377', 'FM 424', 'Naylor Road'],
    nearbyCities: ['aubrey', 'little-elm', 'denton', 'prosper', 'lantana', 'pilot-point'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town that requires lots of an acre or more by ordinance, sitting on the junction of two US highways',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'All-O-Matic', 'DoorKing'],
      commonIssues: [
        'Gates opening directly onto two busy US highways',
        'Road grit and dust fouling slide gate tracks',
        'Timers and safety devices set without allowing for highway speeds',
        'Vibration from heavy through-traffic loosening fixings',
      ],
    },
    localAngle:
      'Cross Roads is named for exactly what it is — the junction of US-380 and US-377 — incorporated in 1973 and still under two thousand people, with an ordinance keeping lots to an acre or more. The defining fact of gate work here is not the lot size but the traffic. A great many of these entrances open directly onto a US highway carrying through-traffic at speed, and that changes the specification rather than just the maintenance. Timing matters more: a gate that takes its time opening leaves a vehicle waiting in a 65mph lane, which is a different order of risk from waiting on a suburban street. So we set cycle speeds and safety device positions for the road the gate actually faces, we check that a vehicle can clear the carriageway before the gate begins closing behind it, and we look at fixings more often than we would elsewhere, because constant heavy through-traffic works bolts loose in a way a quiet cul-de-sac never does.',
    faqs: [
      {
        q: 'Our gate keeps sticking and we are right on the highway. Is that related?',
        a: 'Very likely. Traffic on US-380 and US-377 throws grit that settles in a slide gate’s track, the rollers grind on it, and the operator then labours against that friction until it stops or reverses. It reads as an operator fault and it is an abrasive one. We clear and measure the track and the rollers before condemning anything electrical.',
      },
      {
        q: 'Our gate opens straight onto the highway. Is there anything different we should do?',
        a: 'Yes, and it is mostly about timing and where the safety devices sit. A gate that opens slowly leaves you waiting in a fast lane, and a close timer set to a suburban default can start shutting before a trailer has fully cleared. We set the cycle speed and the sensor positions for the road you are actually pulling onto, and on some frontages we will recommend a slide over a swing purely because of where a waiting vehicle ends up.',
      },
    ],
  },

  'hickory-creek': {
    zips: ['75065'],
    neighborhoods: ['Shore Haven', 'Steeplechase', 'Shadow Creek Estates', 'The Enclave of Hickory Creek', 'Harbor Grove Estates'],
    landmarks: ['Lake Lewisville', 'Point Vista Park', 'Hickory Creek Park', 'Sycamore Bend Park'],
    majorRoads: ['I-35E', 'FM 2181 Swisher Road', 'Turbeville Road', 'Point Vista Road'],
    nearbyCities: ['lake-dallas', 'corinth', 'denton', 'highland-village', 'lewisville', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town that began as weekend lake cabins in 1963 and became permanent housing, so gates were retrofitted to drives that were never laid out for them',
      commonGateTypes: ['Driveway slide', 'Ornamental iron swing', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Gates retrofitted to steep or narrow cabin-era driveways',
        'Operators sited close to Corps of Engineers shoreline boundaries',
        'Gravel and unpaved drives feeding grit into slide tracks',
        'Seasonal lake traffic driving high cycle counts in summer',
      ],
    },
    localAngle:
      'Hickory Creek incorporated in 1963 with 219 residents. Much of what it was then was weekend cabins on the water, and much of what it is now — around five thousand people — is those same lots rebuilt as permanent houses. That history is the thing that shapes gate work here, because a driveway laid out in the 1960s to park a boat trailer beside a cabin is not a driveway anyone would design for an automatic gate. They are short, often steep down toward the water, frequently gravel, and sometimes run right up to the Corps of Engineers boundary where the shoreline land stops being yours. So the questions we answer in this town are geometry questions before they are equipment questions: whether a swing gate has room to open without putting a waiting car half onto Turbeville or Point Vista Road, whether a slide is the safer answer on a narrow drive, and where an operator can legally and sensibly be sited when the lot runs out before the lake does.',
    faqs: [
      {
        q: 'Our driveway is short and slopes down toward the water. Can we even have an automatic gate?',
        a: 'Usually yes, but the type matters more than it would on a flat suburban drive. A swing gate needs room to open without leaving a waiting vehicle in the road, and on a short sloping drive that room often is not there — which is when a slide gate becomes the safer answer rather than simply the more expensive one. We would rather look at the drive first and tell you which will actually work than fit the one you asked for and leave you edging into traffic.',
      },
      {
        q: 'Our drive is gravel and the gate keeps sticking. Is that connected?',
        a: 'Directly. A gravel or unpaved drive feeds grit into a slide gate’s track continuously, the rollers grind on it, and the operator then labours against that friction until it stops or reverses. Clearing it monthly treats the symptom. Edging the drive, or changing where water carries the gravel, treats the cause — and it is the difference between replacing rollers every year and not.',
      },
    ],
  },

  'richland-hills': {
    // ⚠️ Richland Hills, not North Richland Hills. Separate cities, separate
    // ZIPs, separate pages. 76118 is this one; 76180/76182 is the other.
    zips: ['76118'],
    // The city publishes no subdivision register, so these rest on realty
    // sources and are the least-sourced field on this entry.
    neighborhoods: ['Richland Park', 'Richlynn Terrace', 'Mimosa Park', 'Maple Park'],
    landmarks: ['Richland Hills City Hall', 'Link Park', 'Calloway Branch', 'Baker Boulevard corridor'],
    majorRoads: ['Loop 820', 'SH 121 Airport Freeway', 'Baker Boulevard', 'Glenview Drive'],
    nearbyCities: ['haltom-city', 'north-richland-hills', 'fort-worth', 'hurst', 'bedford', 'watauga'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small post-war city whose Loop 820 and Baker Boulevard frontage is working commercial yards rather than housing, so most of its gates secure plant and vehicles',
      commonGateTypes: ['Chain-link rolling yard gate', 'Cantilever slide', 'Commercial swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'All-O-Matic', 'Viking'],
      commonIssues: [
        'Heavy chain-link gates dragged over unsurfaced yard ground',
        'Gates sized for a yard that now takes larger vehicles',
        'Padlocks and manual chains defeating the operator',
        'Theft and forced-entry damage to gates and operators',
      ],
    },
    localAngle:
      'Richland Hills incorporated in 1950 on the back of the Fort Worth defence plants and has stayed much the same size since — around eight and a half thousand people in under four square miles. It is worth saying plainly that it is not North Richland Hills, which is a separate city that formed in 1953 after this one declined to annex it. Different ZIP codes, different councils, and we have been sent to the wrong one before. What makes gate work here unlike its larger neighbour is what sits along Loop 820 and Baker Boulevard: working commercial yards — contractors, trades, vehicle storage — rather than subdivisions. The gate securing a yard has a harder life than any residential gate in the metroplex. It is usually heavy chain-link on a long run, it is dragged across ground that was never surfaced for it, it is opened and shut all day by people in a hurry, and when it fails the business cannot lock up its plant that night. So we carry for chain-link and cantilever hardware when we come here, and we ask what is behind the gate before we quote, because a yard gate that is down is a security problem with a deadline.',
    faqs: [
      {
        q: 'Are you sure you mean Richland Hills and not North Richland Hills?',
        a: 'They are two separate cities and we keep them separate. Richland Hills is the older one, incorporated in 1950 in ZIP 76118; North Richland Hills formed in 1953 and uses 76180 and 76182. We ask which you are in when you call, because sending a van to the wrong one wastes your morning and ours.',
      },
      {
        q: 'Our yard gate is down and we cannot secure the site tonight. Can you help today?',
        a: 'That is the call we prioritise here, because an open yard is plant and vehicles left unattended rather than an inconvenience. We aim to get someone out the same day, and where the full repair needs a part we do not carry, we will get the gate into a secure, manually lockable state first and come back for the permanent fix rather than leaving you open.',
      },
    ],
  },

  watauga: {
    // 76148 is shared with parts of North Richland Hills and Fort Worth.
    zips: ['76148'],
    // Realty-sourced; the city publishes no register. Several directories list
    // Fort Worth neighborhoods alongside Watauga ones, so anything on the
    // Fort Worth side of the line has been left out.
    neighborhoods: ['Parkwood Hills', 'Arcadia Park Estates', 'Highland Oaks', 'Melody Hills'],
    landmarks: ['Capp Smith Park', 'Watauga Community Center', 'Big Bear Creek', 'US-377 corridor'],
    majorRoads: ['US-377 Denton Highway', 'Watauga Road', 'Rufe Snow Drive', 'Chapman Road'],
    nearbyCities: ['north-richland-hills', 'keller', 'haltom-city', 'fort-worth', 'richland-hills', 'saginaw'],
    responseBand: '',
    gateProfile: {
      dominant: 'Four square miles with no room left to build, so almost every gate is retrofitted to a 1970s or 1980s house on a small lot',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Side and yard gate'],
      commonBrands: ['LiftMaster', 'Eagle', 'Viking', 'US Automatic'],
      commonIssues: [
        'Short driveways leaving no room for a gate to swing',
        'Operators retrofitted to fences and posts never built to carry them',
        'Gates fitted between houses with almost no clearance',
        'Vehicles waiting in the street while the gate cycles',
      ],
    },
    localAngle:
      'Watauga is a Cherokee word meaning village of many springs, carried here from Tennessee after the Civil War, and the town was farmland for most of its history — sixty-five people in the mid-1930s. The defence plants changed that, and it now holds over twenty-three thousand people in just over four square miles, hemmed in on every side by Keller, Fort Worth, Haltom City and North Richland Hills. It cannot annex and it cannot spread, which makes it the most built-out place we work. For gate work that means something specific: virtually nothing here was designed with a gate in mind. These are 1970s and 1980s houses on small lots, and the gates are retrofits — bolted to fence posts that were never intended to carry a moving leaf, fitted to driveways with barely a car length between the garage and the pavement. The recurring problem is clearance rather than wear. A swing gate needs somewhere to swing and a waiting car needs somewhere to wait, and on a great many Watauga frontages neither is available without choosing the right gate type in the first place.',
    faqs: [
      {
        q: 'Our driveway is short. Is there room for an automatic gate at all?',
        a: 'Often yes, but not always as a swing. A swing gate needs clear arc to open into and a place for your car to wait off the road while it does, and on a short Watauga driveway that frequently does not exist. A slide gate needs room along the fence line instead, which many of these lots do have. We measure the frontage before recommending either, because fitting the wrong type here means reversing into traffic every time you come home.',
      },
      {
        q: 'We are right on the city line. Do you cover us?',
        a: 'Yes. Watauga is surrounded on every side by Keller, Fort Worth, Haltom City and North Richland Hills, and we work in all of them, so a boundary makes no difference to whether we come out. It only matters for getting the address right, which is why we ask for the street rather than the city when someone is near the line.',
      },
    ],
  },

  // ── BATCH 4, 28 Sep 2026 ───────────────────────────────────────────────────
  // Seven Tarrant County suburbs, and the hardest test the overlap gate has had
  // — they adjoin each other, share a housing era and in three cases share a
  // school district. Writing them from "mid-century Tarrant suburb" would have
  // produced seven copies of one page, so each is anchored to a physical fact
  // about its own ground: tree roots in Bedford, the airport in Euless, Big
  // Fossil Creek in Haltom City, grain dust in Saginaw, limestone rather than
  // clay in Azle, slope in Benbrook.
  //
  // `gateProfile` is a DRAFT on all seven.

  bedford: {
    zips: ['76021', '76022', '76095'],
    neighborhoods: ['Stonegate', 'The Oaks of Bedford', 'Woodhill Estates', 'Oak Creek', 'Bedford Estates'],
    landmarks: ['Old Bedford School', 'Boys Ranch Park', 'Bedford Trails', 'Central Drive corridor'],
    majorRoads: ['SH 121 Airport Freeway', 'Harwood Road', 'Central Drive', 'Bedford Road'],
    nearbyCities: ['hurst', 'euless', 'colleyville', 'north-richland-hills', 'grapevine', 'arlington'],
    responseBand: '',
    gateProfile: {
      dominant: 'Suburban streets built out in the 1960s and 1970s whose trees are now sixty years old and lifting everything they are planted beside',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Eagle'],
      commonIssues: [
        'Tree roots lifting driveway slabs under the gate’s arc',
        'Posts pushed out of plumb by root growth',
        'Gates grounding where the drive has heaved',
        'Photo-eye beams broken by grown shrubs and low branches',
      ],
    },
    localAngle:
      'Bedford is the middle city of the three that share the Hurst-Euless-Bedford school district, and it did most of its building in the 1960s and 1970s. The houses have aged gracefully; the trees planted with them have not stayed still. A post oak or live oak put in beside a new driveway in 1972 now has a root system wide enough to lift the slab it sits next to, and that is the single most common cause of gate trouble we find in this town. It shows up as a swing gate that has started scraping an arc on the concrete, or a post that has gone quietly out of plumb on the side the tree is on. Owners read both as the gate failing. They are the ground moving, and the fix is at the slab and the post rather than anywhere inside the operator. The other Bedford regular is simpler still: forty years of growth means shrubs and low branches now sit exactly where a photo-eye beam crosses the drive.',
    faqs: [
      {
        q: 'Our driveway has lifted where the gate swings. Can the gate be adjusted to clear it?',
        a: 'Sometimes there is enough adjustment to buy time, but it is worth understanding that the concrete is still moving. A root that has lifted a slab an inch will lift it further, so raising the gate is a stay of execution rather than a repair. We would rather show you what the root is doing and let you decide between grinding the high point, replacing that slab section, or accepting a yearly adjustment.',
      },
      {
        q: 'Our gate stopped closing and nothing has changed. What should we look at?',
        a: 'In Bedford, look at what has grown. A shrub or a low branch that has put on a season of growth in exactly the wrong place will break a photo-eye beam, and the operator then refuses to close because it correctly believes something is in the way. It is free to check and it accounts for a good share of the calls we take from these streets.',
      },
    ],
  },

  euless: {
    zips: ['76039', '76040'],
    neighborhoods: ['Villages of Bear Creek', 'Midway Park', 'Oak Park', 'Calloway Trails'],
    landmarks: ['DFW International Airport', 'Texas Star Golf Course', 'Bear Creek Park', 'Euless Family Life Center'],
    majorRoads: ['SH 360', 'SH 183 Airport Freeway', 'Euless Main Street', 'Industrial Boulevard'],
    nearbyCities: ['bedford', 'hurst', 'grapevine', 'irving', 'arlington', 'colleyville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city whose eastern edge is the DFW Airport boundary, so a large share of its gates secure businesses that never close',
      commonGateTypes: ['Commercial slide', 'Cantilever slide', 'Barrier arm'],
      commonBrands: ['DoorKing', 'LiftMaster', 'HySecurity', 'Viking'],
      commonIssues: [
        'Entrances cycling around the clock rather than twice a day',
        'Barrier arms and ticket equipment on parking operations',
        'Chain, track and roller wear far ahead of the operator',
        'Access control tied to shift patterns rather than office hours',
      ],
    },
    localAngle:
      'Euless runs right up against the western boundary of DFW International, and that proximity decides what the gate work here looks like. Airport parking operations, freight and logistics yards, crew hotels and rental fleets all sit along SH 360 and the airport frontage, and none of them keeps office hours. A residential gate cycles perhaps six times a day. An airport parking entrance cycles hundreds of times, every day, including the days nobody wants a technician on site. What fails under that duty is almost never the motor — it is the chain, the track and the rollers, which wear out long before the operator notices, and then the operator strains against that wear until it fails too. So when we quote an entrance in Euless we measure the track and the chain first and price the whole entrance honestly, because replacing an operator on a worn track on a 24-hour site buys a few months at most.',
    faqs: [
      {
        q: 'Our site runs 24 hours and we cannot close the entrance for a repair. How do you handle that?',
        a: 'We plan around it rather than through it. On a continuously operating entrance we agree a window, keep the gate in a controlled manual state while we are working rather than simply open, and bring the parts we expect to need so the entrance is not sitting apart waiting on a delivery. If the site has a second entrance we will sequence the work to keep one of them live throughout.',
      },
      {
        q: 'Our gate has needed three operators in five years. Is that normal?',
        a: 'No, and it usually means the operator is not the problem. On a high-cycle entrance the chain, track and rollers wear first, and an operator asked to drag a gate over worn hardware will keep failing no matter how good it is. Three operators in five years is the signature of that. We would measure the running gear before selling you a fourth.',
      },
    ],
  },

  hurst: {
    zips: ['76053', '76054'],
    neighborhoods: ['Hurst Hills', 'Bellaire Place', 'Billy Creek Estates', 'Walker Oaks', 'Simpson Park'],
    landmarks: ['North East Mall', 'Chisholm Park', 'Hurst Conference Center', 'Precinct Line Road corridor'],
    majorRoads: ['SH 121 Airport Freeway', 'Precinct Line Road', 'Pipeline Road', 'Bedford Euless Road'],
    nearbyCities: ['bedford', 'euless', 'north-richland-hills', 'richland-hills', 'colleyville', 'haltom-city'],
    responseBand: '',
    gateProfile: {
      dominant: 'The retail centre of the Mid-Cities, so a large share of its gates are the service yards and delivery bays behind the shopfronts',
      commonGateTypes: ['Commercial slide', 'Service yard swing', 'Dumpster enclosure gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'All-O-Matic', 'Viking'],
      commonIssues: [
        'Delivery vehicles clipping gates and bending leaves',
        'Gates left propped open and driven into',
        'Enclosure gates taking daily impact from waste collection',
        'Operators sited where trucks manoeuvre in tight yards',
      ],
    },
    localAngle:
      'Hurst is where the Mid-Cities does its shopping — North East Mall and the retail either side of Precinct Line Road — and the gate work reflects the back of those buildings rather than the front. Service yards, delivery bays and waste enclosures are the gates we are called to most here, and they fail in a way residential gates never do: by being hit. A delivery driver reversing a box truck in a yard designed for a smaller one clips the leaf, bends the frame a few degrees, and the gate starts binding at the same point in its travel from that day on. Waste enclosure gates take the same treatment weekly. That produces a specific repair pattern — straightening and re-squaring frames, replacing hinges that have absorbed an impact, moving an operator out of the swept path of a turning vehicle — and it is why we look at where the trucks actually go before we quote the gate.',
    faqs: [
      {
        q: 'Our yard gate keeps getting hit by delivery vehicles. Is there anything that helps?',
        a: 'Yes, and it is usually geometry rather than a stronger gate. Moving the operator out of the swept path, adding protective bollards, and in some cases changing from a swing to a slide so nothing projects into the manoeuvring area will end a cycle of damage that no amount of repair will. We would rather look at where the trucks actually turn than keep straightening the same leaf.',
      },
      {
        q: 'The gate binds at one spot since it was hit. Does the whole thing need replacing?',
        a: 'Usually not. A frame knocked a few degrees out of square binds at a predictable point, and re-squaring it and replacing the hinge that took the impact normally restores it. What we will check is whether the operator was strained while being asked to force the gate through that bind, because that damage is less visible and shows up later.',
      },
    ],
  },

  'haltom-city': {
    zips: ['76117', '76137'],
    neighborhoods: ['Diamond Oaks', 'Browning Heights', 'Fossil Springs', 'Haltom Acres', 'Meadow Oaks'],
    landmarks: ['Big Fossil Creek', 'Diamond Oaks Country Club', 'Haltom City Public Library', 'Belknap Street corridor'],
    majorRoads: ['Belknap Street', 'Loop 820', 'Denton Highway US-377', 'Broadway Avenue'],
    nearbyCities: ['richland-hills', 'north-richland-hills', 'watauga', 'fort-worth', 'hurst', 'saginaw'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city built across the Big Fossil Creek drainage, where a meaningful number of gates and operators sit on ground that floods',
      commonGateTypes: ['Residential swing', 'Commercial slide', 'Side and yard gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'All-O-Matic'],
      commonIssues: [
        'Operators and boards mounted low enough to take flood water',
        'Silt and creek debris packing slide gate tracks',
        'Buried cable runs saturated in the drainage corridor',
        'Corrosion following repeated wetting rather than constant damp',
      ],
    },
    localAngle:
      'Haltom City is laid out across the Big Fossil Creek drainage — the local place names give it away, with Fossil Springs, Fossil Ridge and Fossil Village all within the city — and that creek system is the thing that decides gate work here. Properties in the flood corridor do not get the slow humidity damage a lakeside house gets; they get sudden immersion, then weeks of drying, then immersion again. Equipment tolerates constant damp better than it tolerates that cycle. What we find after a wet spring is operators whose boards sat in water for an afternoon, buried cable runs saturated along their whole length, and slide tracks packed with creek silt that sets like mortar once the sun gets to it. The practical lesson, and the one we give owners here, is mounting height: a control box six inches higher survives a season that takes out one at ankle level, and that is a decision made once at installation rather than a repair.',
    faqs: [
      {
        q: 'Our gate flooded and now works intermittently. Can it be saved?',
        a: 'Often, but it depends what got wet and for how long. A board that was briefly immersed and dried properly sometimes survives; one that sat in water and was then powered up usually does not. We would rather assess it before you switch it back on, because powering up a wet board is frequently what finishes it off. Terminal corrosion and saturated cable runs are separately repairable.',
      },
      {
        q: 'How do we stop this happening every time the creek comes up?',
        a: 'Mounting height is the single most effective change, and it is cheap when done as part of a repair you are already paying for — moving the control box and any low-mounted sensors above the line the water actually reaches. Sealing the enclosure properly and re-routing a cable run out of the lowest ground are the other two. None of it makes the gate flood-proof, but it moves the equipment out of the water rather than trying to waterproof it in place.',
      },
    ],
  },

  saginaw: {
    zips: ['76179', '76131'],
    neighborhoods: ['Highland Station', 'Whisperwood Estates', 'Willow Creek Estates', 'Saginaw Heights'],
    landmarks: ['Burrus grain elevators', 'Willow Creek Park', 'Saginaw Recreation Center', 'Knowles Drive corridor'],
    majorRoads: ['SH 287 Business', 'Old Decatur Road', 'Knowles Drive', 'Bailey Boswell Road'],
    nearbyCities: ['fort-worth', 'haslet', 'lake-worth', 'azle', 'haltom-city', 'watauga'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town built around grain elevators and three rail lines, where airborne dust is a permanent condition rather than a weather event',
      commonGateTypes: ['Commercial slide', 'Cantilever slide', 'Residential swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'HySecurity', 'All-O-Matic'],
      commonIssues: [
        'Fine grain and industrial dust packing tracks and bearings',
        'Dust drawn into operator housings and onto boards',
        'Photo-eye lenses dulled by airborne particulate',
        'Sealed bearings failing early in a permanently dusty environment',
      ],
    },
    localAngle:
      'Saginaw grew up around the Burrus Mill elevators — at one point the largest grain elevator in Texas and the second largest in the country — and around the three rail lines that were built through here in the 1880s. Both are still working, and both put fine particulate into the air continuously. That is a specific and unusual problem for gate equipment. Grit that arrives with a storm can be swept out; dust that settles every day cannot, and it gets everywhere a seal is imperfect. We see rollers and bearings in this town fail at a fraction of the life they would manage ten miles away, photo-eye lenses that go dull rather than dirty, and operator housings with a film of dust across the board inside. The answer is not better sweeping. It is specifying sealed hardware to begin with, and accepting that a service interval which is generous elsewhere is simply too long in Saginaw.',
    faqs: [
      {
        q: 'Our rollers keep wearing out and the gate is only a few years old. Why?',
        a: 'Almost certainly the dust. An unsealed bearing in a permanently dusty environment is a consumable rather than a component — the particulate acts as a grinding compound and takes out a bearing in a fraction of its rated life. Fitting sealed rollers appropriate to these conditions costs a little more once and stops the annual replacement.',
      },
      {
        q: 'How often should equipment here be serviced?',
        a: 'More often than a manufacturer’s schedule assumes, because those intervals are written for ordinary suburban air. In practice that means clearing tracks and wiping sensor lenses on a routine rather than waiting for a fault, and checking enclosure seals annually rather than when something goes wrong. It is a small amount of attention that prevents most of what we get called out for here.',
      },
    ],
  },

  azle: {
    zips: ['76020'],
    // Azle straddles the Tarrant/Parker county line; the city is recorded here
    // under Tarrant, which is where most of it sits.
    neighborhoods: ['Silver Creek', 'Deer Glade', 'Oak Harbor Estates', 'The Orchard', 'Cross Timbers'],
    landmarks: ['Eagle Mountain Lake', 'Azle Memorial Library', 'Shady Grove Park', 'SH 199 corridor'],
    majorRoads: ['SH 199 Jacksboro Highway', 'FM 730', 'Stewart Street', 'Boyd Road'],
    nearbyCities: ['lake-worth', 'saginaw', 'springtown', 'fort-worth', 'weatherford', 'briar'],
    responseBand: '',
    gateProfile: {
      dominant: 'Twenty miles north-west of Fort Worth on Eagle Mountain Lake, where the ground is limestone and rock rather than the clay the rest of the metroplex sits on',
      commonGateTypes: ['Ranch entrance swing', 'Driveway slide', 'Wide farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Post footings in rock rather than soil, which changes how they fail',
        'Long drives on acreage away from mains power',
        'Rocky, uneven ground under a gate’s swing arc',
        'Lake-edge lots with steep or awkward access',
      ],
    },
    localAngle:
      'Azle sits about twenty miles north-west of Fort Worth on Eagle Mountain Lake, which was impounded in 1932, and it straddles the Tarrant and Parker county line. The interesting thing about working here is underfoot. Most of this metroplex sits on Blackland Prairie clay that swells and shrinks by season, and almost everything we tell owners about leaning posts and heaving driveways assumes that. Azle is in the Cross Timbers, where the ground is limestone and rock, and gate posts behave completely differently in it. They do not drift with the seasons the way a post in clay does — but a footing that was poured into a shallow rock pocket has nowhere to go and nothing to grip, and when it lets go it tends to do so suddenly rather than gradually. So the diagnosis reverses: in Fort Worth a leaning post is usually seasonal movement, and in Azle it is usually a footing that was never properly keyed into the rock.',
    faqs: [
      {
        q: 'Our gate post has suddenly gone over and there was no warning. Is that normal here?',
        a: 'It is more common here than east of Fort Worth, and the ground is why. In clay a post leans gradually as the soil moves with the seasons, so you get years of warning. In the rock out here a footing either holds or it does not, and a shallow one poured into a rock pocket can sit solid for a decade and then let go in a single wet spell. The repair is about keying properly into the rock rather than simply pouring more concrete.',
      },
      {
        q: 'Do you come out this far west?',
        a: 'Yes — Azle, Springtown and out toward Weatherford are all within the area we work. It is worth telling us the road you are on when you call, because access on the lake side can be slow and we would rather plan for it than arrive later than we told you.',
      },
    ],
  },

  benbrook: {
    zips: ['76126', '76116', '76132', '76109'],
    neighborhoods: ['Whitestone Ranch', 'Ridglea Country Club Estates', 'Timbercreek Estates', 'Mira Vista', 'Hencken Ranch'],
    landmarks: ['Benbrook Lake', 'Whitestone Golf Course', 'Dutch Branch Park', 'Benbrook Stables'],
    majorRoads: ['US-377 Benbrook Highway', 'I-20', 'Winscott Road', 'Vega Drive'],
    nearbyCities: ['fort-worth', 'crowley', 'aledo', 'white-settlement', 'weatherford', 'forest-hill'],
    responseBand: '',
    gateProfile: {
      dominant: 'The hilly south-western corner of Tarrant County, where a large share of driveways run up or down a genuine slope',
      commonGateTypes: ['Sloped-drive swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'US Automatic'],
      commonIssues: [
        'Swing gates fighting gravity on an inclined driveway',
        'Gates that will not stay where they are put on a slope',
        'Water running down a drive into the operator and track',
        'Ground clearance changing across the arc on uneven terrain',
      ],
    },
    localAngle:
      'Benbrook occupies the south-western corner of Tarrant County around Benbrook Lake, and unlike most of the metroplex it has real topography — the land rolls, and a great many driveways here run up or down a meaningful grade. That is the defining constraint on gate work in this town. A swing gate on a slope is not the same machine as a swing gate on the flat: gravity assists it in one direction and fights it in the other, so an operator sized for a level drive will labour one way and slam the other, ground clearance changes across the arc, and a leaf that sits perfectly at the closed position may foul halfway through. It is also why water matters here more than rain totals suggest — a drive that falls toward the gate delivers everything it collects straight into the track and the operator housing. Getting this right is a specification decision made before anything is fitted, which is why we would rather walk the slope than quote from a photograph.',
    faqs: [
      {
        q: 'Our driveway slopes. Does that change what gate we can have?',
        a: 'It changes the specification quite a lot. A swing gate on a grade has gravity helping it one way and resisting it the other, and ground clearance shifts as the leaf travels — so the hardware, the operator rating and sometimes the hinge type all differ from a level installation. On steeper drives a slide gate running across the slope rather than through it is often the better answer. It is worth us seeing the actual fall before recommending anything.',
      },
      {
        q: 'Water runs down our drive and the gate sits at the bottom. Is that a problem?',
        a: 'It is one of the more common causes of repeat failures here. Everything the driveway collects — water, grit, leaf litter — arrives at the lowest point, which is exactly where the track and often the operator are. Sorting the drainage, or moving the operator up out of the run, usually does more for reliability than any amount of replacing what the water keeps damaging.',
      },
    ],
  },

  // ── BATCH 5, 28 Sep 2026 ───────────────────────────────────────────────────
  // Five Denton County cities. Continuing the approach that made batch 4 work:
  // anchor each on a physical fact about its own ground rather than on town
  // character, because character repeats across suburbs and ground does not.
  //
  // This batch adds a third soil type to the site. Most of the metroplex is
  // Blackland Prairie clay and Azle is Cross Timbers limestone; Pilot Point
  // sits on sandy loam, which is why the horse industry is there and which
  // makes its gate posts fail in a third distinct way.
  //
  // `gateProfile` is a DRAFT on all five.

  'the-colony': {
    zips: ['75056'],
    neighborhoods: ['The Tribute', 'Legends', 'Austin Ranch', 'Ridgepoint', 'Stewart Peninsula'],
    landmarks: ['Grandscape', 'Lewisville Lake', 'The Tribute Golf Links', 'Stewart Creek Park'],
    majorRoads: ['SH 121 Sam Rayburn Tollway', 'Main Street', 'Paige Road', 'Josey Lane'],
    nearbyCities: ['frisco', 'plano', 'carrollton', 'lewisville', 'little-elm', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city incorporated in 1977 that was built as a single developer community, so most original installations are the same age and the same specification',
      commonGateTypes: ['Community slide', 'Residential swing', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Eagle'],
      commonIssues: [
        'Whole streets reaching end of equipment life in the same season',
        'Discontinued parts affecting many properties at once',
        'Newer peninsula builds with commissioning faults',
        'Clay-soil post movement on original-era installations',
      ],
    },
    localAngle:
      'The Colony was incorporated in 1977 and grew as one large developer community rather than accreting over decades, which produces an effect we rarely see elsewhere: things fail in cohorts. When a run of houses was built in the same year to the same specification, the gates added to them tend to be the same age too, and the components inside them reach the end of their lives within a season or two of each other. We will get three calls from one street in a month and find the identical board or the identical capacitor at fault each time. The practical value of knowing that is in the advice rather than the repair — if your neighbour has just replaced an operator that was original to the street, yours is on the same clock, and there is a real saving in planning for that rather than waiting for the failure. The Tribute and the newer peninsula builds are the exception, and they fail the way new installations do, on commissioning rather than on age.',
    faqs: [
      {
        q: 'Two neighbours have replaced their gate operators recently. Should we be worried?',
        a: 'It is worth a look rather than a worry. Streets here were built in cohorts, so equipment of the same age and specification tends to reach the end of its life at about the same time. That does not mean yours will fail tomorrow, but it does mean a service check is better value now than an emergency call later, and if the part is one that has been discontinued it is useful to know before you need it urgently.',
      },
      {
        q: 'Our gate is original to the house. Is it worth repairing at this age?',
        a: 'Usually yes, and we will tell you plainly when it is not. The mechanical side — posts, hinges, track — normally outlasts the electronics by decades, so even where an operator has reached the end, the rest of the installation is generally reusable. That keeps the cost far below a full replacement, and it is the honest answer more often than a replacement quote would suggest.',
      },
    ],
  },

  'little-elm': {
    zips: ['75068'],
    neighborhoods: ['Paloma Creek', 'Union Park', 'Wildridge', 'Sunset Pointe', 'Valencia on the Lake', 'Frisco Ranch'],
    landmarks: ['Lewisville Lake', 'Little Elm Park', 'The Lakefront', 'Union Park amenity centre'],
    majorRoads: ['FM 423', 'US-380', 'Eldorado Parkway', 'Main Street'],
    nearbyCities: ['frisco', 'the-colony', 'cross-roads', 'aubrey', 'prosper', 'lewisville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town that went from a few thousand people to around fifty thousand in two decades, so its shared entrances outnumber its private gates',
      commonGateTypes: ['Community slide', 'Barrier arm', 'Amenity and pool gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'HySecurity'],
      commonIssues: [
        'Entrance queues stacking back onto two-lane roads',
        'Cycle timing set without allowing for traffic volume',
        'Loop detectors handling far more vehicles than planned for',
        'Amenity gates and access credentials across large HOAs',
      ],
    },
    localAngle:
      'Little Elm has roughly quadrupled in twenty years, to around fifty thousand people, and it did it through large master-planned communities — Paloma Creek, Union Park, Wildridge — rather than through infill. The consequence for gate work is that the shared entrance matters here more than the private driveway, and the specific problem is queueing. Several of these communities feed onto roads that were laid out when the population was a fraction of what it is, so an entrance gate that takes a few seconds longer than it should puts a line of cars back onto a two-lane road at school run time. That turns cycle speed from a comfort question into a traffic one. When we are called to a Little Elm entrance the first thing we establish is how many vehicles pass through it in a peak hour, because an operator and a detector specified for a quiet community behave quite differently once several hundred cars a day are using them.',
    faqs: [
      {
        q: 'Our community entrance backs traffic onto the road at peak times. Can anything be done?',
        a: 'Usually yes, and not always by replacing the gate. Cycle speed, how long the gate holds open, and how the detectors are tuned all affect throughput, and those are adjustments rather than parts. Where the gate genuinely cannot keep up, a faster operator or a second lane is the honest answer — but we would tune what is there first and measure the difference before quoting hardware.',
      },
      {
        q: 'Who is responsible for the community gate, us or the HOA?',
        a: 'Almost always the HOA or its management company, since the entrance is common property. We work directly with boards and managers on these, provide written reports they can file, and schedule around residents rather than around us. If you are a resident reporting a fault, tell us who manages the community and we will take it from there.',
      },
    ],
  },

  corinth: {
    zips: ['76210'],
    neighborhoods: ['The Preserve at Pecan Creek', 'Oakmont Estates', 'Cypress Point', 'Lake Sharon Estates', 'Meadow Oaks'],
    landmarks: ['Lake Sharon', 'Corinth Community Park', 'Agora Commons', 'I-35E corridor'],
    majorRoads: ['I-35E', 'FM 2181 Swisher Road', 'Corinth Parkway', 'Lake Sharon Drive'],
    nearbyCities: ['lake-dallas', 'denton', 'highland-village', 'hickory-creek', 'lewisville', 'krum'],
    responseBand: '',
    gateProfile: {
      dominant: 'A narrow city squeezed between Lewisville Lake and Lake Dallas, where the water table sits high and ground stays wetter than the rest of the county',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Eagle'],
      commonIssues: [
        'Buried cable runs in ground that rarely dries out',
        'Footings set in soil that holds water against them',
        'Conduit and junction boxes taking in groundwater',
        'Corrosion at below-grade terminations',
      ],
    },
    localAngle:
      'Corinth was named by the Dallas and Wichita Railway in 1880 and stayed rural until the I-35E corridor pulled development up from Dallas. What it is now is a narrow city sitting between two bodies of water — Lewisville Lake on one side, Lake Dallas on the other — and that position does something specific to gate installations. Ground here holds water. A buried cable run that would dry out between storms in Plano can stay damp for weeks in Corinth, and a conduit joint or a junction box below grade that would tolerate occasional wetting elsewhere is effectively sitting in it. So the faults we are called to here skew heavily below ground: intercoms that fail progressively rather than suddenly, keypads that work erratically in wet spells, and terminations that have corroded where nobody can see them. When a Corinth gate develops an intermittent fault, we test the buried run early rather than late, because on these streets it is the likeliest answer rather than the last resort.',
    faqs: [
      {
        q: 'Our keypad and intercom work sometimes and not others. What causes that?',
        a: 'In Corinth, usually moisture in the buried run rather than the hardware at either end. Ground here stays damp far longer than it does further from the lakes, and water that reaches a joint or a below-grade termination causes exactly this pattern — fine in a dry spell, erratic after rain. We test the run before replacing boxes, because swapping a keypad that was never faulty is a common and avoidable expense.',
      },
      {
        q: 'Is there anything that prevents this rather than just fixing it?',
        a: 'Yes. Properly sealed and correctly oriented terminations, conduit that drains rather than holds, and bringing joints above grade where the layout allows all make a substantial difference. It costs a little more at the time of a repair you are already paying for, and it is the difference between fixing this once and fixing it every wet spring.',
      },
    ],
  },

  aubrey: {
    zips: ['76227'],
    neighborhoods: ['Chaparral Ridge', 'Covey Creek', 'Aubrey Ranch Estates', 'Silverado'],
    landmarks: ['Aubrey Historic Downtown', 'US-377 corridor', 'Ray Roberts Lake', 'Horse Country USA'],
    majorRoads: ['US-377', 'FM 428', 'FM 2931', 'Sherman Drive'],
    nearbyCities: ['pilot-point', 'cross-roads', 'little-elm', 'denton', 'krum', 'sanger'],
    responseBand: '',
    gateProfile: {
      dominant: 'Horse Country USA — commercial breeding and training operations rather than hobby acreage, so the ranch gate is a business entrance',
      commonGateTypes: ['Ranch entrance swing', 'Wide trailer gate', 'Staff and service gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'DoorKing'],
      commonIssues: [
        'Trailer traffic in and out all day rather than twice',
        'Access for staff, farriers, vets and haulers on different schedules',
        'Wide gates taking repeated trailer clearance',
        'Solar systems sized for a house but used by a business',
      ],
    },
    localAngle:
      'Aubrey calls itself Horse Country USA and the figure behind it is real — this stretch of Denton County holds something in the order of 25,000 horses across several hundred ranches. That matters because it makes Aubrey commercial equestrian country rather than hobby acreage, and a commercial barn gate is a business entrance rather than a driveway. It opens for staff arriving early, for farriers and vets on their own schedules, for feed deliveries, and for client and hauler trailers through the day. The cycle count on a working ranch entrance can run ten times what a private acreage gate sees, and the solar systems these gates typically run on were very often sized for the latter. That is the most common thing we correct here: not a broken operator, but a power budget calculated for a household and being asked to serve an operation.',
    faqs: [
      {
        q: 'Our ranch gate keeps running out of power by the afternoon. What is wrong?',
        a: 'Usually nothing is broken — the system is simply sized for fewer cycles than you are running. A working barn entrance opens many times more often than a residential drive, and a solar panel and battery specified for a house cannot replace what an operation draws. The fix is recalculating the power budget against your actual daily traffic, which often means a larger panel as well as a larger battery.',
      },
      {
        q: 'Can we give staff, farriers and haulers different access?',
        a: 'Yes, and on a working yard it is usually worth doing. Separate codes or credentials for staff, regular service providers and visiting haulers let you see who came and when, and let you remove one person’s access without changing everybody else’s. It is a straightforward addition to most access control systems rather than a new gate.',
      },
    ],
  },

  'pilot-point': {
    zips: ['76258'],
    neighborhoods: ['Bryson Ranch', 'Creekview Meadows', 'Mobberly Farms', 'Lantern'],
    landmarks: ['Pilot Point Square', 'Ray Roberts Lake', 'Isle du Bois State Park', 'US-377 corridor'],
    majorRoads: ['US-377', 'FM 455', 'FM 2153', 'Washington Street'],
    nearbyCities: ['aubrey', 'tioga', 'sanger', 'denton', 'celina', 'krum'],
    responseBand: '',
    gateProfile: {
      dominant: 'Sitting on sandy loam rather than clay — the soil that drew the horse industry here, and that makes gate posts settle instead of heave',
      commonGateTypes: ['Ranch entrance swing', 'Wide trailer gate', 'Estate driveway swing'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ramset', 'All-O-Matic'],
      commonIssues: [
        'Footings settling and washing rather than heaving',
        'Post bases undermined by water moving through loose soil',
        'Long solar-powered entrances on ranch frontages',
        'Gate alignment drifting downward over years rather than seasonally',
      ],
    },
    localAngle:
      'Pilot Point sits on an outcrop of rich sandy loam, and that soil is the reason the horse industry settled here — it drains, it is forgiving underfoot, and it is good ground to work a horse on. It is also the reason gates here fail differently from gates anywhere else we work. Most of this metroplex is Blackland Prairie clay, which swells and shrinks with the seasons and walks a gate post back and forth until it leans. Sandy loam does not do that. What it does instead is let water move through it, and over years that water carries fine material away from around a footing. The post does not heave; it settles, and it keeps settling in one direction. The symptom is a gate whose alignment drifts steadily downward rather than shifting with the weather, and the repair is about how the footing is bedded and how water is directed away from it, not about waiting out a seasonal cycle that is never going to come back around.',
    faqs: [
      {
        q: 'Our gate post has slowly sunk rather than leaned. Is that the same problem people have in Dallas?',
        a: 'No, and it is worth knowing the difference. Clay soils east of here swell and shrink seasonally, so posts lean one way and partly recover. The sandy loam under Pilot Point lets water move through it and wash fine material out from around a footing, so the post settles steadily in one direction and does not come back. The repair is about bedding and drainage rather than about riding out a season.',
      },
      {
        q: 'Does the soil here mean footings need to be different?',
        a: 'In practice yes. A footing that is adequate in clay can be undermined in loose, free-draining ground if water is allowed to run past it, so depth, bedding and where the water goes all matter more here. It is worth getting right once — we have re-set posts in this area that were failing for the third time because each previous repair treated the symptom.',
      },
    ],
  },

  // ── BATCH 6, 28 Sep 2026 ───────────────────────────────────────────────────
  // Four of the Best Southwest cities in southern Dallas County. They formed a
  // partnership together in 1986 and are routinely written about as one place,
  // which is exactly the trap: written from "southern Dallas County suburb"
  // they would be four copies of one page.
  //
  // Anchors, in the same ground-first pattern as batches 4 and 5:
  //   cedar-hill    ridge-top wind exposure on the escarpment
  //   desoto        Eagle Ford shale, which moves more than Blackland clay
  //   duncanville   1980s electrical service predating outdoor GFCI practice
  //   lancaster     33 square miles and large-site distribution perimeters
  //
  // Balch Springs and Glenn Heights are NOT here - fewer than three verifiable
  // subdivision names each. They wait for a dedicated research pass.

  'cedar-hill': {
    zips: ['75104', '75106'],
    neighborhoods: ['Lake Ridge', 'High Pointe Village', 'The Bluffs', 'Wooded Creek Estates', 'Cedar Valley Estates'],
    landmarks: ['Cedar Hill State Park', 'Joe Pool Lake', 'Dogwood Canyon Audubon Center', 'Cedar Hill Mountain Nature Preserve'],
    majorRoads: ['US-67', 'FM 1382 Belt Line Road', 'Cedar Hill Road', 'Pleasant Run Road'],
    nearbyCities: ['duncanville', 'desoto', 'grand-prairie', 'midlothian', 'mansfield', 'glenn-heights'],
    responseBand: '',
    gateProfile: {
      dominant: 'Built along the limestone escarpment on some of the highest ground in the metroplex, where gates stand exposed to wind nothing else breaks',
      commonGateTypes: ['Ornamental iron swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'DoorKing'],
      commonIssues: [
        'Solid gate leaves acting as sails on exposed ridge frontages',
        'Gates forced past their stops in high wind',
        'Operator arms and brackets bent by wind loading',
        'Shallow limestone limiting how deep a footing can go',
      ],
    },
    localAngle:
      'Cedar Hill is built along the limestone escarpment that gives it its name, on some of the highest ground in the metroplex — the ridge that carries Cedar Hill State Park, Dogwood Canyon and the nature preserves above Joe Pool Lake. Elevation and exposure are the story for gate work here. A solid gate leaf is a sail, and on a ridge frontage with nothing upwind to break the weather it takes loads that the same gate would never see in a sheltered subdivision. What that produces is a distinctive failure: arms and brackets bent not by anyone driving into them but by the gate itself being forced past its stops in a gust, usually overnight, so the owner finds it out of true in the morning with no explanation. The escarpment adds a second constraint underneath — rock is close to the surface in much of the city, so a footing cannot simply be made deeper to compensate. It has to be keyed into what is there.',
    faqs: [
      {
        q: 'We found the gate bent out of shape one morning and nobody hit it. How?',
        a: 'Almost certainly wind. On the ridge frontages here a solid leaf catches gusts like a sail, and if it is caught while unlatched it can be driven past its stops hard enough to bend the operator arm or crack a bracket. It is the most common damage we see in this city and it is why we ask about wind-hold hardware on exposed frontages rather than only about the operator.',
      },
      {
        q: 'Can anything be done to stop the wind damaging the gate?',
        a: 'Yes, and it is mostly mechanical rather than electronic. Properly rated stops, a positive latch or lock that holds the leaf when closed, and on very exposed sites reducing the solid area of the leaf all make a real difference. Where a gate has to stay solid for privacy, we would rather specify hardware that can take the load than keep straightening arms every spring.',
      },
    ],
  },

  desoto: {
    zips: ['75115'],
    neighborhoods: ['Westmoreland Estates', 'Regents Park', 'Ten Mile Creek Estates', 'Thorntree'],
    landmarks: ['Ten Mile Creek', 'DeSoto Town Center', 'Grimes Park', 'Hampton Road corridor'],
    majorRoads: ['I-35E', 'Hampton Road', 'Pleasant Run Road', 'Beltline Road'],
    nearbyCities: ['duncanville', 'cedar-hill', 'lancaster', 'glenn-heights', 'red-oak', 'ovilla'],
    responseBand: '',
    gateProfile: {
      dominant: 'Sitting on Eagle Ford shale, a soil that moves more aggressively than the Blackland clay most of the metroplex is built on',
      commonGateTypes: ['Estate driveway swing', 'Ornamental iron swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Posts moving further and faster than elsewhere in the metroplex',
        'Driveway slabs cracking and stepping under the gate arc',
        'Gate alignment needing correction more often than the north side',
        'Heavy ornamental leaves amplifying ground movement',
      ],
    },
    localAngle:
      'Southern Dallas County sits largely on Eagle Ford shale, and anyone who has owned a house in DeSoto knows what that means before we say it — this is foundation country, and the ground here moves more than the Blackland clay the northern suburbs are built on. Gate posts are subject to exactly the same forces as a house slab, with the difference that a gate post is a lever with several hundred pounds hanging off the end of it, so it shows the movement far sooner than a building does. In practice that means the interval between alignment corrections here is genuinely shorter than in Plano or Frisco, and it is not a reflection of poor workmanship. It is the ground. What we can control is how the footing is sized and bedded for this soil rather than to a generic specification, and being straight with owners that a gate on Eagle Ford shale needs looking at on a cycle rather than only when it fails.',
    faqs: [
      {
        q: 'Our gate needs realigning more often than our friends in Plano. Why?',
        a: 'The ground, not the gate. Southern Dallas County sits on Eagle Ford shale, which swells and shrinks more aggressively than the clay under the northern suburbs — it is the same reason foundation work is so much more common down here. A gate post is a lever with a heavy leaf on it, so it reports that movement sooner than a house slab does.',
      },
      {
        q: 'Is there a way to stop it moving rather than keep correcting it?',
        a: 'Not stop, but substantially slow. A footing sized and bedded for this soil rather than to a generic depth, and drainage that keeps water from cycling the ground right at the post, together make a real difference to how often you see us. We would rather do that once at a repair you are already paying for than book the same adjustment every eighteen months.',
      },
    ],
  },

  duncanville: {
    zips: ['75116', '75137'],
    neighborhoods: ['Woodland Hills', 'Mountain Creek', 'Woods-Sugarberry', 'Alexander Estates'],
    landmarks: ['Armstrong Park', 'Duncanville Fieldhouse', 'International Museum of Cultures', 'Main Street corridor'],
    majorRoads: ['US-67', 'Camp Wisdom Road', 'Cedar Ridge Drive', 'Main Street'],
    nearbyCities: ['cedar-hill', 'desoto', 'dallas', 'grand-prairie', 'lancaster', 'glenn-heights'],
    responseBand: '',
    gateProfile: {
      dominant: 'Essentially fully built out in the 1980s with almost no new construction since, so every gate is a retrofit onto electrical service of that era',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Side and yard gate'],
      commonBrands: ['LiftMaster', 'Eagle', 'Viking', 'US Automatic'],
      commonIssues: [
        'No GFCI protection at the outdoor circuit feeding the gate',
        'Gate operators sharing a circuit with garage or garden loads',
        'Undersized or ageing outdoor wiring runs',
        'Nuisance tripping traced to the supply rather than the operator',
      ],
    },
    localAngle:
      'Duncanville did most of its building in the 1980s and has added very little since, which makes it one of the most completely built-out cities we work in. Almost every automatic gate here has been retrofitted onto a house that was finished before it, and the part of that retrofit people rarely think about is the electrical supply. Outdoor circuits of that era frequently have no GFCI protection at all, are sometimes shared with a garage or garden load rather than dedicated, and were sized for what was on them in 1985. What we get called to as an intermittent gate fault turns out, often enough to be worth saying, to be the circuit rather than the operator — a shared load tripping the gate, or a supply that sags when something else on the same run starts up. So on a Duncanville call we check what the gate is plugged into before we open the operator, which is the reverse of how we would work in a newer city.',
    faqs: [
      {
        q: 'Our gate trips out when something else in the garage switches on. Is the operator faulty?',
        a: 'Probably not — that symptom points at the circuit. In a house of this era the gate is often on a shared outdoor circuit rather than a dedicated one, and a motor starting elsewhere on that run pulls the voltage down far enough for the gate to fault. The fix is electrical rather than in the gate, and it is worth finding before anyone replaces a working operator.',
      },
      {
        q: 'Do we need a GFCI for the gate?',
        a: 'For an outdoor circuit, yes, and a good number of houses here were built before that was standard. It is a safety matter first, since the equipment is outdoors and gets wet, but it also gives you a clear diagnostic: a GFCI that trips repeatedly is telling you something real about moisture or damaged cable rather than being a nuisance to work around.',
      },
    ],
  },

  lancaster: {
    zips: ['75134', '75146'],
    neighborhoods: ['Rolling Meadows', 'Wintergreen', 'Wellington Park North', 'Pleasant Run Estates'],
    landmarks: ['Lancaster Historic Town Square', 'Lancaster Regional Airport', 'Commemorative Air Force DFW Wing', 'Ten Mile Creek'],
    majorRoads: ['I-35E', 'I-20', 'Pleasant Run Road', 'Dallas Avenue'],
    nearbyCities: ['desoto', 'hutchins', 'wilmer', 'glenn-heights', 'red-oak', 'ferris'],
    responseBand: '',
    gateProfile: {
      dominant: 'Thirty-three square miles at the I-20 and I-35E convergence, where the growth has been very large distribution sites rather than housing',
      commonGateTypes: ['Cantilever slide', 'Commercial slide', 'Barrier arm'],
      commonBrands: ['DoorKing', 'HySecurity', 'LiftMaster', 'All-O-Matic'],
      commonIssues: [
        'Long perimeter fence lines with several gates on one site',
        'Operators expected to integrate with guard and access systems',
        'Heavy cantilever gates on continuous commercial duty',
        'Response distances varying widely within one city',
      ],
    },
    localAngle:
      'Lancaster covers thirty-three square miles, which makes it one of the largest cities by land area in the southern half of the metroplex, and its growth has come as distribution and logistics at the I-20 and I-35E convergence rather than as subdivisions. That gives its gate work a different shape from its Best Southwest neighbours. A distribution site does not have a gate; it has a perimeter, often with a main vehicle entrance, a trailer gate, and a staff entrance on the same fence line, all expected to work with a guard post or an access system rather than a remote in a car. The gates themselves are usually cantilever, long and heavy, running continuously through shift changes. The other consequence of thirty-three square miles is practical: the drive between one end of Lancaster and the other is longer than the drive between some neighbouring cities, so we ask for the road rather than the city when we schedule here.',
    faqs: [
      {
        q: 'We have several gates on one site. Can they be managed together?',
        a: 'Yes, and on a perimeter that is usually the right approach rather than treating each gate separately. Access can be issued once and applied across every entrance, with different permissions for staff, hauliers and visitors, and faults reported centrally rather than discovered when somebody cannot get in. We would look at the whole fence line before quoting any single gate on it.',
      },
      {
        q: 'Our cantilever gate is slowing down and it runs all day. What usually causes that?',
        a: 'On continuous commercial duty it is almost always the running gear rather than the motor. The trucks and rollers inside the gate frame carry the whole weight and wear steadily, and the operator then works harder against that wear until it looks like the problem. We measure the running gear first, because replacing an operator on worn trucks is a repair that does not last on a site cycling this often.',
      },
    ],
  },

  // ── BATCH 7, 28 Sep 2026 ───────────────────────────────────────────────────
  // Four Collin County cities. Anchors:
  //   wylie      Lake Lavon is a flood-control reservoir, so its level swings
  //   murphy     almost no commercial base - a purely residential call sheet
  //   anna       building at a scale that makes the street itself the hazard
  //   princeton  new subdivisions on ploughed farmland, so fill settles
  //
  // Fairview, Melissa, Farmersville and Blue Ridge are NOT here - fewer than
  // three verifiable subdivision names each.

  wylie: {
    zips: ['75098'],
    neighborhoods: ['Woodbridge', 'Birmingham Farms', 'Seis Lagos', 'Creek Hollow', 'Creekside Estates'],
    landmarks: ['Lake Lavon', 'Historic Downtown Wylie', 'Founders Park', 'Woodbridge Golf Club'],
    majorRoads: ['SH 78', 'FM 544', 'Brown Street', 'Country Club Road'],
    nearbyCities: ['sachse', 'murphy', 'lucas', 'parker', 'rowlett', 'princeton'],
    responseBand: '',
    gateProfile: {
      dominant: 'Wrapped around Lake Lavon, a flood-control reservoir whose level swings far more than a constant-level lake',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Shoreline access roads and gates inundated in wet years',
        'Equipment mounted low enough to be reached by a high lake',
        'Ground saturating and drying on a multi-year cycle rather than seasonally',
        'Silt left in tracks and enclosures after water recedes',
      ],
    },
    localAngle:
      'Wylie wraps around the southern end of Lake Lavon, and the important thing about Lavon is that it is a flood-control reservoir rather than a constant-level lake. It is held deliberately low in dry years and allowed to rise a very long way in wet ones, and the difference between those two states is measured in feet of elevation and a great deal of shoreline. Properties and access roads that sit comfortably above the water for three years running can find it much closer in the fourth. For gate equipment that produces a pattern we do not see at Grapevine or Ray Hubbard: not gradual humidity damage, but occasional reach — a control box or a low-mounted sensor that has been fine since installation being touched by water once, and silt left behind in a track after the level drops. Mounting height is therefore worth deciding against the historical high rather than against where the water happens to be on the day of the installation.',
    faqs: [
      {
        q: 'Our gate was fine for years and then flooded once. Is it worth moving the equipment?',
        a: 'On Lavon, usually yes. The lake is managed for flood control, so it is held low for long stretches and then allowed to come up a long way — meaning the level you have grown used to is not the level the equipment should be specified against. Raising a control box and any low sensors above the historical high is inexpensive as part of a repair and takes the question off the table.',
      },
      {
        q: 'There is silt packed in the gate track after the water went down. What is the right fix?',
        a: 'Clearing it properly rather than running the gate through it — reservoir silt sets hard and behaves like grinding paste on rollers, so a few cycles through it does more damage than the water did. We would also check the rollers themselves, because they usually took the worst of it while the track was still full.',
      },
    ],
  },

  murphy: {
    zips: ['75094'],
    neighborhoods: ['Maxwell Creek', 'Maxwell Creek North', 'Woodbridge', 'Rolling Ridge'],
    landmarks: ['Preserve at Maxwell Creek', 'Murphy Central Park', 'Murphy Community Center', 'FM 544 corridor'],
    majorRoads: ['FM 544', 'Murphy Road', 'McCreary Road', 'Betsy Lane'],
    nearbyCities: ['wylie', 'plano', 'sachse', 'parker', 'richardson', 'allen'],
    responseBand: '',
    gateProfile: {
      dominant: 'Under six square miles and almost entirely residential, with essentially no commercial or industrial base',
      commonGateTypes: ['Residential swing', 'Courtyard gate', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'DoorKing'],
      commonIssues: [
        'Gates built out within one narrow window now ageing together',
        'Householders needing appointments outside working hours',
        'Retrofits onto houses completed before the gate was considered',
        'Clay-soil post movement on early-2000s installations',
      ],
    },
    localAngle:
      'Murphy is unusual among the cities we serve in having almost no commercial base at all — under six square miles, overwhelmingly residential, with no industrial estate, no distribution corridor and very few of the shared entrances that dominate our work in places like Lewisville or Little Elm. Practically every gate in this city belongs to a household. That sounds like a small distinction and it changes how we work here more than anything about the equipment does. There is nobody on site during the day to let a technician in, so the useful appointment is early morning, evening or weekend rather than the mid-morning slot that suits a managed property. It also means the person paying is the person who will live with the result, which is why we spend longer on the explanation in Murphy than we do on a commercial call, and why we would rather show a homeowner the worn roller than simply list it on an invoice.',
    faqs: [
      {
        q: 'Can you come outside working hours? Nobody is home during the day.',
        a: 'Yes, and in Murphy that is the norm rather than the exception. Almost all our work here is residential, so early morning, evening and weekend appointments are what we schedule around. Tell us what suits when you call rather than accepting the first slot offered.',
      },
      {
        q: 'Our gate is about twenty years old. Is that the end of its life?',
        a: 'Not necessarily, and the age is worth knowing rather than fearing. Much of Murphy was built within one fairly narrow window, so a lot of equipment here reaches the same milestones at the same time — but the mechanical side, the posts, hinges and track, normally outlasts the electronics by decades. Where an operator has reached the end, the rest of the installation is usually reusable.',
      },
    ],
  },

  anna: {
    zips: ['75409'],
    neighborhoods: ['AnaCapri', 'Churchill', 'Sherley Farms', 'Liberty Hills'],
    landmarks: ['Anna Town Square', 'Slayter Creek Park', 'US-75 corridor', 'Anna Aquatic Center'],
    majorRoads: ['US-75', 'FM 455', 'Ferguson Parkway', 'SH 5'],
    nearbyCities: ['melissa', 'mckinney', 'princeton', 'celina', 'van-alstyne', 'blue-ridge'],
    responseBand: '',
    gateProfile: {
      dominant: 'Building at a scale that makes the street itself the hazard - thousand-home communities going in around houses that are already occupied',
      commonGateTypes: ['Residential swing', 'Community slide', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'Construction traffic clipping gates and bending leaves',
        'Site dust fouling tracks and sensor lenses continuously',
        'Temporary power and unfinished supplies feeding new installs',
        'Gates commissioned before surrounding ground is finished',
      ],
    },
    localAngle:
      'Anna is being built on a scale that is hard to overstate — Sherley Farms alone is around three thousand homes on nine hundred and seventy acres, and Liberty Hills adds another thousand-odd acres along US-75 at the northern edge. If you already live here, that means your gate is very likely operating on a street that is still a construction site. The damage we are called to reflects it. Delivery lorries and plant reversing in roads not yet at final width clip gate leaves; site dust settles into tracks and onto sensor lenses at a rate no domestic setting produces; and gates installed with a new house are sometimes commissioned before the surrounding ground has finished being graded, so their limits describe a driveway that has since changed. None of this is anybody doing anything wrong. It is what a town being built around you looks like, and it is worth knowing so it is not misread as equipment failure.',
    faqs: [
      {
        q: 'Our gate is new and already misbehaving, with building work all around us. Related?',
        a: 'Very likely. A gate commissioned while the surrounding ground is still being graded ends up with limits and force settings describing a driveway that has since moved, and site dust on sensor lenses will stop a gate closing without anything being broken. Both are adjustments rather than parts, and both are worth doing once the ground around you has settled rather than twice.',
      },
      {
        q: 'A contractor hit our gate. What normally needs doing?',
        a: 'Usually re-squaring the leaf and replacing whatever hinge took the impact, and then checking the operator — because if the gate was run while bound it may have strained the gearbox, and that damage shows up later than the visible dent. We will document what we find in writing if you are recovering the cost from the contractor.',
      },
    ],
  },

  princeton: {
    zips: ['75407'],
    neighborhoods: ['Princeton Lake', 'Whitewing Trails', 'Winchester Crossing', 'Ranger Crossing', 'Sicily'],
    landmarks: ['US-380 corridor', 'J.M. Caldwell Sr. Community Park', 'Princeton Municipal Park', 'Lake Lavon'],
    majorRoads: ['US-380', 'FM 982', 'Beauchamp Boulevard', 'Monte Carlo Boulevard'],
    nearbyCities: ['mckinney', 'anna', 'farmersville', 'lowry-crossing', 'wylie', 'melissa'],
    responseBand: '',
    gateProfile: {
      dominant: 'New subdivisions laid directly over ploughed Blackland farmland, where fill settles unevenly for the first few years',
      commonGateTypes: ['Residential swing', 'Community slide', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Eagle'],
      commonIssues: [
        'New driveways and post footings settling unevenly on made ground',
        'Gates needing re-commissioning in their first two or three years',
        'Limits set before the ground finished moving',
        'Drainage across new grading channelling water at the gate',
      ],
    },
    localAngle:
      'Princeton has grown outward along US-380 onto what was, until very recently, ploughed Blackland farmland, and that history is under every new driveway in the city. Ground that has been worked to depth for a century and then graded, cut and filled for a subdivision does not behave like undisturbed soil. It settles, and it settles unevenly, for the first few years after the houses go up. The practical result is that a Princeton gate installed with a new house frequently needs re-commissioning at two or three years old — not because anything has failed, but because the driveway it was set against has moved a little and the limits and force settings no longer describe it. Owners reasonably read that as a defect in a nearly new gate. It is the ground finishing what it started, and the fix is an adjustment rather than a part.',
    faqs: [
      {
        q: 'Our gate is only three years old and has started catching. Is it faulty?',
        a: 'Probably not. On new subdivisions built over worked farmland the made ground settles for several years, so the driveway and the post the gate was set against have both moved slightly since commissioning. Re-learning the travel and re-checking the force against the gate as it now sits usually resolves it, with no parts involved.',
      },
      {
        q: 'Should we wait before having a gate installed on a new build?',
        a: 'There is a real argument for it on ground this new. Waiting through a full wet and dry cycle lets the worst of the settlement happen before anything is set against the driveway, and it means the posts go into ground that has finished moving. If you would rather not wait, it is worth budgeting for a commissioning visit a couple of years in.',
      },
    ],
  },

  // ── BATCH 8, 28 Sep 2026 ───────────────────────────────────────────────────
  // Three cities east of Dallas. Anchors:
  //   heath   east shore of Ray Hubbard, facing the lake's widest fetch, so
  //           weather arrives from one consistent direction
  //   fate    a commuter town on I-30 where the whole population leaves in a
  //           two-hour window, which decides what a stuck gate costs
  //   forney  the Blackland Prairie meets the Post Oak Belt here, so soil can
  //           change across a single frontage
  //
  // Royse City, Terrell, Kaufman and Crandall are NOT here - fewer than three
  // verifiable subdivision names each.

  heath: {
    zips: ['75032'],
    neighborhoods: ['Buffalo Creek', 'Heath Golf & Yacht Club', 'Antigua Bay', 'Yankee Creek'],
    landmarks: ['Lake Ray Hubbard', 'Heath Golf & Yacht Club', 'Terry Park', 'Towne Center'],
    majorRoads: ['FM 740 Horizon Road', 'FM 1140', 'Smirl Drive', 'Hubbard Drive'],
    nearbyCities: ['rockwall', 'rowlett', 'fate', 'sunnyvale', 'forney', 'royse-city'],
    responseBand: '',
    gateProfile: {
      dominant: 'On the east shore of Ray Hubbard, facing the widest stretch of open water, so weather arrives from one consistent direction',
      commonGateTypes: ['Estate driveway swing', 'Ornamental iron swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Enclosure seals failing on the lake-facing side first',
        'Wind-driven rain forced past gaskets that would cope elsewhere',
        'Corrosion concentrated on one face of the hardware',
        'Photo-eyes on the exposed side needing more frequent attention',
      ],
    },
    localAngle:
      'Heath occupies the east shore of Lake Ray Hubbard, which means it looks out across the widest open stretch of that lake with nothing between it and the prevailing weather. That geography produces something we can genuinely predict before arriving: the damage here is directional. Wind-driven rain crossing several miles of open water arrives with force behind it, and a gasket that would shed ordinary rainfall for fifteen years gets water pushed past it from one consistent side. So on a Heath call we expect to find the lake-facing face of everything in worse condition than the sheltered one — the west side of an enclosure corroded while the east is clean, the photo-eye on the exposed post needing attention twice as often as its partner. It is a useful thing to know because the repair is asymmetric too. Renewing the seal on the weather side and leaving the other is often the proportionate answer rather than replacing a housing that is only half worn out.',
    faqs: [
      {
        q: 'One of our two photo-eyes keeps failing and the other never does. Why?',
        a: 'Exposure. On this shore the weather comes consistently off the open water, so the sensor on the lake-facing post takes wind-driven rain and sun that the sheltered one never sees. It is not a faulty unit so much as a harder posting. Hooding it, or fitting a housing rated for that exposure on that side only, usually ends the cycle.',
      },
      {
        q: 'Does living on the water mean replacing equipment more often?',
        a: 'It means maintaining it more often, which is cheaper. What fails here is seals and exposed hardware rather than operators, and those are small parts caught early. The expensive version is leaving a perished gasket until water has reached the board, which is a different order of repair for the sake of a component worth very little.',
      },
    ],
  },

  fate: {
    zips: ['75087', '75189'],
    neighborhoods: ['Woodcreek', 'Williamsburg', 'Chamberlain Crossing', 'Monterra', 'Edgewater'],
    landmarks: ['Historic Fate', 'Woodcreek amenity centre', 'I-30 corridor', 'Fate Village'],
    majorRoads: ['I-30', 'FM 551', 'FM 552', 'Ben Payne Road'],
    nearbyCities: ['rockwall', 'royse-city', 'heath', 'wylie', 'princeton', 'farmersville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A commuter town on I-30 where most of the population leaves inside the same two hours, so a stuck gate has a deadline',
      commonGateTypes: ['Community slide', 'Residential swing', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'Faults discovered at 7am with a household already late',
        'Community entrances carrying their whole day in two peaks',
        'Wear concentrated into narrow windows rather than spread out',
        'Manual release needed by people who have never used it',
      ],
    },
    localAngle:
      'Fate grew from a village of a few hundred into a town of tens of thousands almost entirely on the back of I-30, and it is a commuter town in the strict sense: a very large share of its residents leave for Dallas inside the same two-hour window and come back inside another. That concentrates everything. A community entrance here does not do its cycles evenly through the day, it does most of them twice, which wears running gear faster than the raw daily count suggests. More to the point, it decides what a failure costs. A gate that fails at eleven in the morning is an inconvenience; the same fault at ten past seven strands a household that is already late, and that is when most Fate calls come in. It is why we push the manual release conversation harder here than almost anywhere — knowing where yours is, before the morning you need it, turns an emergency into a phone call you can make from the office.',
    faqs: [
      {
        q: 'Our gate failed at 7am and we could not get out. What should we have done?',
        a: 'Used the manual release, which every operator has — usually a key or lever on the housing that disconnects the motor so the gate can be pushed by hand. It is worth finding yours on a calm Saturday rather than in the dark on a weekday. Call us and we will talk you through it for your model, and we would rather do that free than have you trapped.',
      },
      {
        q: 'Our community gate seems to wear out faster than it should. Is it a bad installation?',
        a: 'Not necessarily. A commuter community concentrates its traffic into two short peaks rather than spreading it across the day, and running gear wears on how hard it is worked rather than on the clock. That is why an entrance here can need its chain and rollers attended to on a schedule that looks aggressive next to a quieter town with a similar number of homes.',
      },
    ],
  },

  forney: {
    zips: ['75126'],
    neighborhoods: ['Devonshire', 'Heartland', 'Windmill Farms', 'Travis Ranch', 'Clements Ranch', 'Gateway Parks'],
    landmarks: ['Historic Downtown Forney', 'Forney Community Park', 'US-80 corridor', 'Spyglass Pond Park'],
    majorRoads: ['US-80', 'FM 548', 'FM 741', 'Pinson Road'],
    nearbyCities: ['terrell', 'crandall', 'mesquite', 'sunnyvale', 'heath', 'kaufman'],
    responseBand: '',
    gateProfile: {
      dominant: 'Where the Blackland Prairie gives way to the Post Oak Belt, so soil can change materially across a single frontage',
      commonGateTypes: ['Community slide', 'Residential swing', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Two posts on one gate behaving differently from each other',
        'A gate racking because one side moves and the other does not',
        'Footings specified to one soil type across a transition',
        'Alignment drifting in one direction rather than evenly',
      ],
    },
    localAngle:
      'Forney sits on the line where the Blackland Prairie runs out and the Post Oak Belt begins, and that transition is not tidy — it can run through a single property. The consequence for gate work is genuinely unusual and it catches out installers who have only worked further west. A gate has two posts, and in Forney those two posts can be standing in materially different ground: one in heavy clay that swells and shrinks with the season, the other in sandier soil that drains and settles instead. They therefore move differently, at different times, in different directions. What the owner sees is a gate that has gone out of square rather than simply out of plumb — a leaf that no longer meets its latch squarely, or a slide gate whose track has developed a twist. Diagnosing that as an operator fault is easy and wrong, and the repair has to treat each post on its own terms rather than assume both need the same thing.',
    faqs: [
      {
        q: 'Our gate has gone out of square rather than just dropping. What causes that?',
        a: 'Very often, in Forney, the two posts standing in different soil. This is the transition between the Blackland Prairie and the Post Oak Belt, and that boundary can cross a single frontage — so one post can be in clay that swells seasonally while the other is in sand that settles. They move differently and the gate racks between them. Each post then needs assessing separately rather than as a pair.',
      },
      {
        q: 'Our installer set both footings the same. Was that wrong?',
        a: 'It is the normal approach and it is right almost everywhere else, which is why it is easy to get caught here. Where the soil genuinely changes across the opening, footings sized and bedded to one type will behave well on one side and poorly on the other. It is worth checking what each post is actually standing in before re-setting either.',
      },
    ],
  },

  // ── BATCH 9, 28 Sep 2026 — TIER 3 ──────────────────────────────────────────
  // Twelve small towns. Tier 3 does not require the three-subdivision profile
  // Tier 2 does (isPublishable returns true for Tier 3; hasLocalContent asks
  // only for a localAngle), so `neighborhoods` is OMITTED on the towns where
  // no register exists rather than filled with plausible guesses. A town of
  // eight hundred people may genuinely have no subdivisions, and saying so by
  // omission is more honest than inventing three.
  //
  // Four of these - Justin, Krum, Ponder and Sanger - were founded in the same
  // year, by the same railroad, for the same reason. Writing them from that
  // shared fact would have produced four identical pages, so the shared origin
  // is stated once and each is anchored on what became of it since.

  justin: {
    zips: ['76247'],
    landmarks: ['Justin Historic Downtown', 'Santa Fe rail line', 'Alliance corridor', 'FM 407 corridor'],
    majorRoads: ['FM 156', 'FM 407', 'I-35W', 'US-377'],
    nearbyCities: ['northlake', 'roanoke', 'haslet', 'argyle', 'krum', 'ponder'],
    responseBand: '',
    gateProfile: {
      dominant: 'An 1886 Santa Fe grain town now sitting directly in the path of the Alliance logistics corridor',
      commonGateTypes: ['Ranch entrance swing', 'Wide farm gate', 'Commercial slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'DoorKing'],
      commonIssues: [
        'Decades-old farm entrances beside brand-new industrial gates',
        'Parts support for operators installed a generation ago',
        'Construction and haulage traffic on formerly quiet FM roads',
        'Solar entrances on acreage without mains power',
      ],
    },
    localAngle:
      'Justin was platted in 1886 when the Gulf, Colorado and Santa Fe pushed through western Denton County to move wheat, and for most of the following century it stayed what it was built to be — a small grain town on a rail line. What has happened since is that the Alliance logistics corridor has arrived at its doorstep, and Justin now sits between working farmland and one of the largest inland freight operations in the country. That gives us an unusually wide spread of work in one small place. On the same day we can be repairing a farm entrance whose operator has been in place since the 1990s and no longer has a supported board, and commissioning a commercial slide gate on a new distribution unit a few miles up FM 156. The two need different parts, different expectations and different conversations, and the thing that connects them is that the roads between them are carrying far more heavy traffic than they were laid out for.',
    faqs: [
      {
        q: 'Our farm gate operator is decades old. Can it still be repaired?',
        a: 'Often yes, and where it cannot we will tell you before you spend anything. The mechanical side of a farm entrance — posts, hinges, the gate itself — routinely outlasts the electronics by decades, so even when an operator has no supported board left, fitting a current unit to the existing gate is usually far cheaper than replacing the whole installation.',
      },
      {
        q: 'Do you cover commercial units as well as farms out here?',
        a: 'Yes, and in Justin we do both. A distribution or industrial gate is a different specification from a ranch entrance — heavier duty, usually cantilever or commercial slide, often tied into an access system — and we quote and stock for it differently. It is worth telling us which you have when you call so the right parts are on the van.',
      },
    ],
  },

  krum: {
    zips: ['76249'],
    landmarks: ['Krum grain elevators', 'Historic Santa Fe depot site', 'Krum Civic Center', 'US-380 corridor'],
    majorRoads: ['US-380', 'FM 1173', 'FM 2450', 'McCart Street'],
    nearbyCities: ['denton', 'sanger', 'ponder', 'justin', 'aubrey', 'pilot-point'],
    responseBand: '',
    gateProfile: {
      dominant: 'Still surrounded by working grain and hay ground, so the vehicles using these gates are agricultural rather than domestic',
      commonGateTypes: ['Wide farm gate', 'Ranch entrance swing', 'Equipment yard gate'],
      commonBrands: ['US Automatic', 'Ramset', 'All-O-Matic', 'LiftMaster'],
      commonIssues: [
        'Openings sized for combines, grain trucks and tractors',
        'Gates struck or clipped by oversized equipment',
        'Seasonal traffic spikes at harvest concentrating wear',
        'Dust and chaff fouling tracks and sensor lenses',
      ],
    },
    localAngle:
      'Krum was named for a Santa Fe official and by 1900 was shipping enough wheat to be described, not entirely modestly, as the largest inland grain market in the world. The elevators are still there and so is the farming, which makes Krum different from the commuter towns that surround it: the vehicles coming through these gates are agricultural. A combine, a grain truck or a tractor with an implement on the back is wider, taller and far less forgiving than a family car, and gates here have to be specified for that or they get hit. Most of the damage we repair in this town was done by a vehicle the gate was never wide enough for, and it clusters seasonally — harvest concentrates months of traffic into weeks, and that is when things get clipped. Sizing the opening honestly for the largest thing that will actually use it is cheaper than repairing a bent leaf every autumn.',
    faqs: [
      {
        q: 'How wide should a farm gate be if we run equipment through it?',
        a: 'Wider than the widest implement you own, plus room for the fact nobody lines up perfectly in a hurry. Undersizing is the single most common reason we are called back to the same gate, because a leaf clipped once is easier to clip again. We would rather measure your equipment than take a standard width off a price list.',
      },
      {
        q: 'Our gate always seems to break around harvest. Why then?',
        a: 'Because harvest compresses months of heavy traffic into a few weeks, and everything that wears does it at once — hinges, rollers and tracks that would age slowly under domestic use get a season of work in a fortnight. Having it looked at before harvest rather than during it is the practical answer, and it is far cheaper than a repair booked at the worst possible moment.',
      },
    ],
  },

  ponder: {
    zips: ['76259'],
    landmarks: ['Ponder Historic Downtown', 'Santa Fe rail line', 'FM 156 corridor', 'Ponder ISD campuses'],
    majorRoads: ['FM 156', 'FM 2449', 'Bailey Street', 'US-380'],
    nearbyCities: ['krum', 'justin', 'denton', 'sanger', 'northlake', 'argyle'],
    responseBand: '',
    gateProfile: {
      dominant: 'The smallest of the western Denton County rail towns, where most properties sit on long county-road frontages rather than streets',
      commonGateTypes: ['Ranch entrance swing', 'Wide farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ramset', 'All-O-Matic'],
      commonIssues: [
        'Unpaved approaches feeding mud and gravel into tracks',
        'Long drives with no mains power at the entrance',
        'Access roads that soften after rain',
        'Distances that make a wasted visit expensive for everyone',
      ],
    },
    localAngle:
      'Ponder was originally called Gerald and got its present name from the same 1886 Santa Fe line that created its neighbours, but it stayed the smallest of them and it still is. Most properties here front a county road rather than a street, and a good number are reached by an unpaved approach. That is the practical fact that shapes gate work in this town. Gravel and mud arrive in the track with every vehicle, so slide gates need clearing far more often than a suburban installation, and the approach itself softens enough after heavy rain that the drive up to the gate is sometimes the harder part of the job. It also means a wasted call-out costs more here than almost anywhere we work, which is why we ask more questions on the phone before setting out to Ponder than we would for a job ten minutes from the yard.',
    faqs: [
      {
        q: 'Our drive is gravel and the gate jams constantly. Is there a fix?',
        a: 'There is, and it is mostly about where the gravel goes rather than the gate. Edging the drive so material is not carried into the track, and correcting any fall that sends water across it, does more than any amount of sweeping. Where that is not practical, a swing gate avoids the ground-level track entirely and is often the more sensible answer out here.',
      },
      {
        q: 'Can you tell us what it will cost before driving out?',
        a: 'We will get as close as we honestly can. Distances matter here, so we would rather spend a few extra minutes on the phone — what the gate is doing, what it sounds like, whether it moves by hand — and arrive with the likely parts than make two trips. If we genuinely cannot tell without seeing it, we will say so rather than guess.',
      },
    ],
  },

  sanger: {
    zips: ['76266'],
    landmarks: ['Historic Downtown Sanger', 'Ray Roberts Lake', 'I-35 corridor', 'Sanger Public Library'],
    majorRoads: ['I-35', 'FM 455', 'Bolivar Street', 'Keaton Road'],
    nearbyCities: ['denton', 'krum', 'pilot-point', 'aubrey', 'valley-view', 'ponder'],
    responseBand: '',
    gateProfile: {
      dominant: 'Split between an I-35 commercial frontage and open farmland east and west of it, with very little in between',
      commonGateTypes: ['Commercial slide', 'Ranch entrance swing', 'Wide farm gate'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Highway-frontage yards secured against interstate traffic',
        'Rural entrances on long drives away from power',
        'Two very different duty cycles a few miles apart',
        'Road grit on the corridor, farm dust away from it',
      ],
    },
    localAngle:
      'Sanger grew up on the same 1886 rail line as Krum, Justin and Ponder, but it ended up with something they did not: a frontage on Interstate 35. That gives the town two quite separate personalities within a few miles. Along the corridor there are yards, storage and commercial premises whose gates exist to secure property against interstate traffic, running many cycles a day and specified accordingly. Move a mile east or west and you are on farmland, where an entrance may open half a dozen times a day at the end of a long private drive with no mains power near it. There is very little in between. That means the most useful thing a caller from Sanger can tell us is which side of the interstate they are on, because it determines the parts we bring, the duty rating we specify and the kind of fault we expect to find.',
    faqs: [
      {
        q: 'We have a yard on the frontage road. Does that need a different gate from a house?',
        a: 'Almost certainly. A commercial yard gate does many more cycles, is usually longer and heavier, and is protecting property rather than privacy, so it wants a commercial-duty operator and hardware rated for that. Fitting a residential unit to a working yard is one of the more common false economies we are called out to correct.',
      },
      {
        q: 'Do you come out to properties well off the highway?',
        a: 'Yes. A good share of our Sanger work is on rural entrances rather than the corridor. Tell us the drive length and whether there is power at the gate when you call — those two answers usually determine what we bring, and they save a second visit.',
      },
    ],
  },

  'lake-dallas': {
    zips: ['75065'],
    landmarks: ['Lewisville Lake', 'Lake Dallas Historic District', 'Willow Grove Park', 'I-35E corridor'],
    majorRoads: ['I-35E', 'FM 2181 Swisher Road', 'Main Street', 'Shady Shores Road'],
    nearbyCities: ['hickory-creek', 'corinth', 'denton', 'highland-village', 'lewisville', 'krum'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town named after a reservoir that no longer carries the name, platted in the 1920s and 1930s on small lakeside lots',
      commonGateTypes: ['Driveway slide', 'Courtyard gate', 'Side and yard gate'],
      commonBrands: ['LiftMaster', 'Eagle', 'Elite', 'Viking'],
      commonIssues: [
        'Original plats with very narrow frontages and no room to swing',
        'Gates fitted between houses with minimal clearance',
        'Older lots where the drive is shorter than a vehicle',
        'Retrofits onto property lines that predate cars of this size',
      ],
    },
    localAngle:
      'The lake this town is named for stopped being called Lake Dallas decades ago — impounded in 1927 under that name, expanded and renamed Garza-Little Elm, and known as Lewisville Lake since the mid-1970s. The town kept the original name, and it also kept the original plats. Much of Lake Dallas was laid out in the 1920s and 1930s for lakeside cottages, on lots and frontages sized for the cars and the expectations of that period. That is the constraint here, and it is a physical one: a great many of these properties simply do not have the frontage for a swing gate to open into, or the driveway depth for a vehicle to wait off the road while it does. So the question we answer most often in this town is not which operator but whether a gate fits at all, and where it does, whether a slide running along the boundary is the only configuration the lot will take.',
    faqs: [
      {
        q: 'Our lot is narrow and the drive is short. Can we have an automatic gate?',
        a: 'Often yes, but usually as a slide rather than a swing. A swing gate needs clear arc to open into and somewhere for your car to wait off the road, and on these older plats that space frequently does not exist. A slide running along the boundary needs length rather than depth, which these lots are more likely to have. We would measure before recommending either.',
      },
      {
        q: 'Is it worth putting a gate on a small property at all?',
        a: 'That is genuinely your call and we will give you an honest view rather than a sales one. On some of these frontages a gate adds real security and works well; on others it would mean reversing into the road every time you leave, which is a poor trade. We would rather tell you that on the visit than fit something you come to regret.',
      },
    ],
  },

  'forest-hill': {
    zips: ['76119', '76140'],
    landmarks: ['Forest Hill Civic and Convention Center', 'I-20 and Loop 820 interchange', 'Forest Hill Park', 'Historic Brambleton Station site'],
    majorRoads: ['I-20', 'Loop 820', 'Forest Hill Drive', 'Wichita Street'],
    nearbyCities: ['fort-worth', 'everman', 'kennedale', 'arlington', 'benbrook', 'crowley'],
    responseBand: '',
    gateProfile: {
      dominant: 'Four square miles wrapped around a major freeway interchange, with commercial frontage on two sides and housing in the middle',
      commonGateTypes: ['Commercial slide', 'Residential swing', 'Yard and storage gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'All-O-Matic'],
      commonIssues: [
        'Constant heavy traffic vibration working fixings loose',
        'Road grit from the interchange carried onto frontage properties',
        'Commercial and residential gates within yards of each other',
        'Security-driven installations rather than convenience ones',
      ],
    },
    localAngle:
      'Forest Hill began as Brambleton Station and was a farming community from around 1860, which is hard to picture now: the city is a little over four square miles and it wraps around the point where Interstate 20 meets Loop 820. Living or trading beside a junction that size has a specific mechanical consequence that owners rarely connect to their gate. Heavy traffic vibration is continuous, and it works fixings loose over time — bracket bolts, hinge fasteners, the mountings holding an operator to its pad. We find slack hardware on Forest Hill gates far more often than the age of the installation would explain, and a gate whose operator has quietly shifted a few millimetres on its mounts will start binding and misreading its limits without anything having failed. Checking and re-torquing fixings is a small part of a visit here and it prevents a disproportionate share of the faults.',
    faqs: [
      {
        q: 'Our gate has started binding and nothing looks broken. What would you check?',
        a: 'Near a junction this size, the fixings. Continuous traffic vibration slackens bracket and mounting bolts over years, and an operator that has shifted slightly on its pad will fight a gate that is otherwise fine. It is quick to check and quick to correct, and it is the first thing we look at on this side of the city rather than the last.',
      },
      {
        q: 'Is a gate here mostly about security?',
        a: 'For most of our customers in Forest Hill, yes — it is about controlling who can reach a yard, a vehicle or a back lot rather than about convenience. That changes what we recommend: solid construction, a positive lock when closed, and sensible siting matter more than a fast cycle time or a phone app.',
      },
    ],
  },

  'white-settlement': {
    zips: ['76108'],
    landmarks: ['Naval Air Station Fort Worth Joint Reserve Base', 'Lockheed Martin Air Force Plant 4', 'White Settlement Historical Museum', 'Veterans Park'],
    majorRoads: ['Loop 820', 'SH 199 Jacksboro Highway', 'White Settlement Road', 'Cherry Lane'],
    nearbyCities: ['fort-worth', 'lake-worth', 'benbrook', 'azle', 'saginaw', 'aledo'],
    responseBand: '',
    gateProfile: {
      dominant: 'Wrapped around a joint reserve air base and the Lockheed plant next to it, with much of the city inside the airfield noise contours',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'Eagle', 'DoorKing', 'Viking'],
      commonIssues: [
        'Households that change hands often, inheriting undocumented systems',
        'Codes and remotes left over from previous occupants',
        'Gates specified for security rather than convenience',
        'Access needing to work for people on shift patterns',
      ],
    },
    localAngle:
      'White Settlement takes its name from an 1850s settlement of colonists among the Native villages west of Fort Worth, and today it wraps around Naval Air Station Fort Worth Joint Reserve Base and the Lockheed plant beside it. A base town has a characteristic we rarely see elsewhere: the houses turn over quickly. Service families post in and out on cycles measured in years, and a gate installed by one occupant is very often inherited by another who has no manual, no idea how many remotes exist, and no way to know which codes are still live. That is a security problem disguised as a paperwork one. The most useful visit we make in this city is frequently not a repair at all — it is clearing a receiver, re-pairing only the remotes the current household actually holds, and resetting the keypad codes, so that what opens the gate is known rather than assumed.',
    faqs: [
      {
        q: 'We have just moved in and do not know how many remotes exist. What should we do?',
        a: 'Clear the receiver and re-pair only the remotes you hold. Until that is done you have no way of knowing who else can open your gate, and on a property that has changed hands more than once the honest answer is usually that nobody knows. It is a short visit, it needs every remote you want to keep in front of us, and it is worth doing before anything else.',
      },
      {
        q: 'Can we give access to someone temporarily without sharing our own code?',
        a: 'Yes, and on a household that comes and goes it is worth setting up properly. Most keypads and access systems support separate codes that can be issued and removed individually, so a neighbour, a contractor or family visiting for a fortnight can be given their own and it can be withdrawn afterwards without changing everybody else’s.',
      },
    ],
  },

  westlake: {
    zips: ['76262'],
    // Added 31 Oct 2026: the only priority city with no neighbourhoods listed.
    neighborhoods: ['Vaquero', 'Glenwyck Farms', 'Terra Bella', 'Granada', 'Paigebrooke', 'Entrada'],
    landmarks: ['Circle T Ranch', 'Charles Schwab campus', 'Fidelity Investments campus', 'Westlake Academy'],
    majorRoads: ['SH 114', 'SH 170', 'Davis Boulevard', 'Solana Boulevard'],
    nearbyCities: ['trophy-club', 'southlake', 'roanoke', 'keller', 'grapevine', 'northlake'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town of very few residents and very large corporate campuses, so the perimeter outweighs the driveway',
      commonGateTypes: ['Cantilever slide', 'Barrier arm', 'Estate driveway swing'],
      commonBrands: ['HySecurity', 'DoorKing', 'LiftMaster', 'All-O-Matic'],
      commonIssues: [
        'Long corporate perimeters with multiple controlled entrances',
        'Integration with staffed security and card systems',
        'Estate gates on ranch land alongside campus infrastructure',
        'Uptime expectations closer to industrial than residential',
      ],
    },
    localAngle:
      'Westlake was settled by the Medlin family in 1847 and incorporated in 1956, and for most of its existence it was ranch land with very few people on it. It is still a town of very few residents, but since Ross Perot Jr bought the Circle T Ranch in 1993 it has also become the address of some of the largest corporate campuses in North Texas — Fidelity from 1998 and Charles Schwab from 2019, between them well over two million square feet. That produces a gate profile that exists nowhere else we work. The typical job here is not a driveway; it is a controlled perimeter with several entrances, staffed security, card and plate recognition, and an uptime expectation closer to an industrial site than a home. Alongside it, on the same roads, sit genuine estate properties on ranch acreage. We quote and staff those two kinds of work quite differently.',
    faqs: [
      {
        q: 'We manage a corporate site. Can you work alongside our existing security system?',
        a: 'Yes — on a controlled perimeter the gate is one component in a larger system, and it has to answer to whatever is managing access rather than run independently. We work to the integration your system expects, coordinate with your security provider, and schedule around operational hours rather than ours.',
      },
      {
        q: 'What sort of response do you offer for a site that cannot be left open?',
        a: 'Where a perimeter cannot be left unsecured we prioritise it, and where the full repair needs a part we do not carry we will get the entrance into a secure, controllable state first rather than leaving it open overnight. Tell us the operational constraint when you call and we will plan to it.',
      },
    ],
  },

  farmersville: {
    zips: ['75442'],
    landmarks: ['Historic Onion Shed', 'Northeast Texas Trail', 'Chaparral Trail trailhead', 'Farmersville Square'],
    majorRoads: ['US-380', 'SH 78', 'FM 547', 'Main Street'],
    nearbyCities: ['princeton', 'blue-ridge', 'nevada', 'josephine', 'lavon', 'mckinney'],
    responseBand: '',
    gateProfile: {
      dominant: 'A cotton town since 1870 whose old railbed is now a rail-trail, so some properties are crossed by a public path rather than a road',
      commonGateTypes: ['Ranch entrance swing', 'Wide farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ramset', 'All-O-Matic'],
      commonIssues: [
        'Boundaries meeting a public trail rather than a street',
        'Pedestrian and cyclist traffic beside vehicle entrances',
        'Long agricultural frontages away from mains power',
        'Older farm entrances with decades-old operators',
      ],
    },
    localAngle:
      'Cotton arrived in this part of Collin County in 1870, when Howard Crawford planted nine acres as an experiment and got ten bales out of it, and Farmersville grew on the back of what followed. The railway that carried it is gone, but its embankment is not — it is now the Northeast Texas Trail, and Farmersville is one of its trailheads. That gives some properties here a boundary condition we rarely deal with: a public path running along or across the land rather than a road. It matters for gate work because a gate beside a shared-use trail has people and cyclists passing at a walking pace right next to a powered vehicle entrance, which changes where safety devices go and how long a gate should stand open. It is not a difficult problem, but it is one that a standard driveway specification does not account for.',
    faqs: [
      {
        q: 'Our gate is next to the trail. Does that change the safety requirements?',
        a: 'It changes where the devices go and how the timings are set. A powered gate beside a shared path has pedestrians and cyclists passing close to it at times a driveway never would, so photo-eye positions and the hold-open time need setting for that rather than for a car. It is a specification question rather than extra equipment.',
      },
      {
        q: 'We have an old farm gate at the end of a long drive. Is solar worth it?',
        a: 'On a long agricultural frontage, usually yes. Trenching a mains supply several hundred feet costs more than a properly sized solar system on most layouts here, and solar keeps working through the outages this area gets in storm season. The sizing has to match your real daily use rather than an average, which is the part most often got wrong.',
      },
    ],
  },

  'blue-ridge': {
    zips: ['75424'],
    landmarks: ['Blue Ridge town square', 'The ridge itself', 'FM 545 corridor', 'Blue Ridge ISD campuses'],
    majorRoads: ['SH 78', 'FM 545', 'FM 981', 'Main Street'],
    nearbyCities: ['farmersville', 'westminster', 'anna', 'melissa', 'josephine', 'princeton'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small town named for a genuine ridge, where properties sit on open high ground with nothing upwind of them',
      commonGateTypes: ['Ranch entrance swing', 'Wide farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'Ramset', 'LiftMaster', 'All-O-Matic'],
      commonIssues: [
        'Exposed frontages taking the full force of prairie wind',
        'Solar panels and batteries on entrances far from power',
        'Long distances between properties and to the nearest town',
        'Gates left standing open because failures are hard to attend quickly',
      ],
    },
    localAngle:
      'Blue Ridge takes its name from a ridge that turns blue for about a month each year when the blue-eyed grass is in flower, and the ridge is the point: this is high, open country with very little between one property and the weather. Wind is the practical consequence. A solid gate leaf on an exposed frontage up here catches gusts that a sheltered suburban gate never sees, and the damage that follows is the kind owners struggle to explain — a leaf found out of true in the morning, an operator arm bent with nobody having touched it. The other consequence is distance. Properties are far apart and far from anywhere, so a gate that fails tends to stay failed longer than it would in town, and people are more likely to prop it open in the meantime. We would rather leave a gate in a secure manual state than have it standing open for a week.',
    faqs: [
      {
        q: 'The wind keeps damaging our gate. What actually helps?',
        a: 'Mechanical hardware rather than a bigger motor. Properly rated stops, a positive latch or lock that holds the leaf when it is closed, and on very exposed frontages reducing the solid area the wind can push against. A stronger operator does not stop a gate being blown past its stops — it just means something else bends first.',
      },
      {
        q: 'If our gate fails, can it be made secure until you can get out?',
        a: 'Yes, and out here we would rather do that than leave a property open. Most operators can be released and the gate secured manually so the entrance is closed and lockable while you wait for the part or the visit. Ask us on the phone and we will talk you through it for your model.',
      },
    ],
  },

  nevada: {
    zips: ['75173'],
    landmarks: ['Nevada town centre', 'Lake Lavon', 'FM 6 corridor', 'Community Park'],
    majorRoads: ['SH 78', 'FM 6', 'FM 1778', 'Main Street'],
    nearbyCities: ['lavon', 'josephine', 'farmersville', 'wylie', 'princeton', 'copeville'],
    responseBand: '',
    gateProfile: {
      dominant: 'Farmland east of Lake Lavon where properties are measured in acres and entrances sit a long way from the house',
      commonGateTypes: ['Ranch entrance swing', 'Wide farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ramset', 'All-O-Matic'],
      commonIssues: [
        'Entrances several hundred feet from the nearest power',
        'Solar batteries sized before a household grew',
        'Intercom and keypad runs failing over distance',
        'Wide gates on posts set in heavy Blackland ground',
      ],
    },
    localAngle:
      'Nevada was named by a settler in honour of the Nevada Territory he had passed through on his way to look for gold in California, and the town has stayed what it was: farmland east of Lake Lavon, with properties measured in acres rather than feet. The distances are what define the work. An entrance here is commonly several hundred feet from the house and further still from the meter, which puts both power and communication under strain. So the faults we attend are disproportionately about distance rather than about the operator — a solar battery specified when the household ran fewer vehicles, an intercom that has degraded over a long buried run, a keypad that will not reliably reach the house it is supposed to call. Diagnosing those means testing the run rather than swapping the box at either end, which is the most common wasted expense we see out here.',
    faqs: [
      {
        q: 'Our intercom has got unreliable but the gate still opens. What is wrong?',
        a: 'Usually the run between them rather than either unit. On an acre property that cable is long, buried and often decades old, and moisture in a joint degrades the audio while the gate circuit, which tolerates more, carries on working. Testing the run first avoids replacing hardware that was never at fault.',
      },
      {
        q: 'How do we know what size solar system our gate needs?',
        a: 'By counting cycles rather than guessing. How many times the gate actually opens on a normal day, and what else is drawing from the same battery — a camera or a keypad runs continuously — determines the panel and battery you need. Systems out here most often fail because the household grew after the system was specified, not because anything broke.',
      },
    ],
  },

  lavon: {
    zips: ['75166'],
    landmarks: ['Lake Lavon', 'Lavon town centre', 'SH 78 corridor', 'Lavon Community Park'],
    majorRoads: ['SH 78', 'FM 6', 'FM 1378', 'Main Street'],
    nearbyCities: ['wylie', 'nevada', 'princeton', 'copeville', 'josephine', 'farmersville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small town beside the reservoir that took its name, where new subdivisions now sit next to long-standing acreage',
      commonGateTypes: ['Residential swing', 'Ranch entrance swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Elite'],
      commonIssues: [
        'Brand-new installs and decades-old entrances on the same road',
        'New community gates alongside private farm gates',
        'Made ground on new plots settling beside undisturbed acreage',
        'Very different parts and expectations within one small town',
      ],
    },
    localAngle:
      'Lavon was Thompson Switch before it was Lavon, named for the postmaster’s son, and the reservoir beside it took the town’s name rather than the other way round. For most of its life it was a handful of people on farmland. What it is now is a town in the middle of changing: new subdivisions with community entrances going in along SH 78, while a few hundred yards away are acreage properties whose gates have been in place for decades. That mixture within a very small area is the practical challenge. The new installations fail the way new things do — commissioning settings describing ground that has since moved — and the old ones fail the way old things do, on parts that are no longer made. Both are routine on their own. What is unusual about Lavon is meeting both on one short road, which is why we ask how old the gate is before we ask what it is doing.',
    faqs: [
      {
        q: 'Our gate came with a new house here and is already playing up. Is that normal?',
        a: 'On new plots, fairly. Made ground settles for the first few years, so the driveway and posts the gate was commissioned against have moved slightly since. Re-learning the travel and rechecking the force against the gate as it now sits usually sorts it, without parts.',
      },
      {
        q: 'Our gate is old and the maker has gone. Is it a write-off?',
        a: 'Not usually. Even where an operator is genuinely unsupported, the posts, hinges and gate almost always have years left, so fitting a current operator to the existing installation is far cheaper than starting again. We will tell you honestly which of the two situations you are in before you commit to anything.',
      },
    ],
  },

  // ── BATCH 10, 28 Sep 2026 — TIER 3 ─────────────────────────────────────────
  // The last seven Tier 3 towns on the client's keyword list. `neighborhoods`
  // omitted where no register exists, as in batch 9.

  'balch-springs': {
    zips: ['75180'],
    landmarks: ['Balch Springs Civic Center', 'Elam Road corridor', 'Balch Springs Historical Museum', 'I-635 and US-175 junction'],
    majorRoads: ['I-635', 'US-175', 'Elam Road', 'Seagoville Road'],
    nearbyCities: ['mesquite', 'seagoville', 'dallas', 'sunnyvale', 'hutchins', 'combine'],
    responseBand: '',
    gateProfile: {
      dominant: 'Founded around springs that never ran dry, so groundwater here emerges at particular points rather than sitting evenly under the whole city',
      commonGateTypes: ['Residential swing', 'Yard and storage gate', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'Viking', 'Eagle', 'DoorKing'],
      commonIssues: [
        'Wet ground appearing on one part of a property and not another',
        'Footings set in soil that stays saturated year-round',
        'Buried runs crossing ground that never dries out',
        'Two posts on one gate in very different moisture conditions',
      ],
    },
    localAngle:
      'Balch Springs is named for exactly what brought the Balch family here around 1870 — three springs, one of which never ran dry, kept cleaned and bricked up as a gathering place. That detail is still relevant to gate work, because a spring is not the same thing as generally damp ground. Water emerging under pressure at particular points produces saturated patches that can sit a few yards from soil that behaves perfectly normally. We have seen gates on this side of Dallas County where one post is set in ground that has stayed wet for decades and the other is entirely dry, and the two have moved in opposite directions as a result. It is easy to misread as poor workmanship. The practical response is to find out what each post is actually standing in before deciding how to re-set it, rather than assuming a single soil condition across an opening.',
    faqs: [
      {
        q: 'One side of our gate has sunk and the other has not. What causes that?',
        a: 'Very often, around here, water. Springs and seeps mean saturated ground can sit a few yards from soil that is behaving normally, so one post can be in permanently wet conditions while its partner is dry. They then settle differently and the gate racks between them. Each post needs assessing on what it is actually standing in rather than as a matched pair.',
      },
      {
        q: 'Can anything be done about permanently wet ground at the gate?',
        a: 'Usually yes, and it is drainage rather than concrete. Directing water away from the footing, and bedding it so it is not sitting in a bowl, makes far more difference than pouring a bigger one. Where the ground genuinely cannot be drained, the footing gets designed for that condition instead of fought against.',
      },
    ],
  },

  'glenn-heights': {
    zips: ['75154'],
    landmarks: ['Glenn Heights City Hall', 'Heritage Park', 'I-35E corridor', 'Hampton Road corridor'],
    majorRoads: ['I-35E', 'Hampton Road', 'Bear Creek Road', 'Ovilla Road'],
    nearbyCities: ['red-oak', 'desoto', 'lancaster', 'ovilla', 'cedar-hill', 'midlothian'],
    responseBand: '',
    gateProfile: {
      dominant: 'Straddling the Dallas and Ellis county line, so neighbouring properties can sit in different counties with different records',
      commonGateTypes: ['Residential swing', 'Community slide', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Eagle'],
      commonIssues: [
        'Permitting and records split between two counties',
        'Utility and service boundaries not matching city limits',
        'Confusion over which authority covers a given street',
        'Eagle Ford ground movement shared with its southern neighbours',
      ],
    },
    localAngle:
      'Glenn Heights incorporated in 1969 and sits west of I-35E about sixteen miles south of Dallas, with an unusual administrative feature: the city straddles the Dallas and Ellis county line. Two houses on the same road can be in different counties, and that has practical consequences that catch people out — permits, property records and sometimes utility providers differ depending which side of an invisible line a driveway sits on. For gate work it matters mostly when something needs consent or when a claim or a record has to be traced, and the honest answer is that we check rather than assume. Underneath, the ground is the same Eagle Ford story as DeSoto and Red Oak to either side, so the gates here move for the same reason and on the same sort of cycle as their neighbours, whichever county they happen to be filed under.',
    faqs: [
      {
        q: 'Which county are we in? It seems to change depending on who we ask.',
        a: 'It genuinely might. Glenn Heights straddles the Dallas and Ellis county line, so neighbouring streets can fall under different counties for records and permits. If anything about a job needs consent or documentation we will confirm which side your property is on rather than assume, because getting it wrong wastes a week.',
      },
      {
        q: 'Our gate has gone out of alignment. Is that the soil here?',
        a: 'Very likely. This is the same Eagle Ford ground as DeSoto and Red Oak either side of you, and it moves more than the clay under the northern suburbs. A gate post is a lever with a heavy leaf on it, so it shows that movement long before a house slab does. The fix is footing and drainage rather than anything inside the operator.',
      },
    ],
  },

  kaufman: {
    zips: ['75142'],
    landmarks: ['Kaufman County Courthouse', 'Historic Courthouse Square', 'King’s Fort site', 'US-175 corridor'],
    majorRoads: ['US-175', 'US-ct 34', 'SH 243', 'Washington Street'],
    nearbyCities: ['crandall', 'terrell', 'forney', 'scurry', 'kemp', 'mabank'],
    responseBand: '',
    gateProfile: {
      dominant: 'The county seat since 1848, so a courthouse-square core of civic and commercial premises with working farmland immediately beyond it',
      commonGateTypes: ['Commercial slide', 'Ranch entrance swing', 'Wide farm gate'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Civic and commercial gates with public accountability for access',
        'Farm entrances a few minutes from the courthouse square',
        'Older downtown premises with constrained frontages',
        'Long rural drives without mains power at the gate',
      ],
    },
    localAngle:
      'Kaufman has been the seat of its county since 1848, built on the site William P. King settled as King’s Fort, and it still works the way a county town does — a courthouse square with civic and commercial premises around it, and farmland starting almost immediately beyond. That produces two quite different kinds of gate within a few minutes of each other. Around the square, access tends to be about accountability: who can get into a yard or a compound, recorded and revocable, on premises with tight frontages where there is little room to manoeuvre. Out on the county roads it is the familiar rural picture of long drives, wide openings and no power near the entrance. What connects them is that neither is the suburban driveway most gate equipment is marketed for, and specifying from a residential catalogue tends to disappoint in both directions.',
    faqs: [
      {
        q: 'We need to control and record who gets into a yard. Is that complicated?',
        a: 'Not especially, and it is worth doing properly rather than issuing everyone the same code. Individual codes or credentials mean access can be given and withdrawn one person at a time and you can see what was used when. On a commercial or civic site that is usually the point of the gate rather than an extra.',
      },
      {
        q: 'Our entrance is a long way out on a county road. Does that change what you can fit?',
        a: 'It changes the power question more than the gate. With no mains at the entrance, solar with a battery sized to your actual daily cycles is normally the answer, and it works well provided the sizing reflects real use rather than an average. Tell us the drive length and whether power is anywhere near when you call.',
      },
    ],
  },

  terrell: {
    zips: ['75160', '75161'],
    landmarks: ['British Flying Training School Museum', 'Terrell Municipal Airport', 'Historic Downtown Terrell', 'Iris Theatre'],
    majorRoads: ['I-20', 'US-80', 'SH 34', 'Moore Avenue'],
    nearbyCities: ['forney', 'kaufman', 'crandall', 'talty', 'poetry', 'scurry'],
    responseBand: '',
    gateProfile: {
      dominant: 'The county’s largest town, with an airfield that trained RAF cadets from 1941 and an industrial corridor along I-20',
      commonGateTypes: ['Commercial slide', 'Cantilever slide', 'Ranch entrance swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'HySecurity', 'All-O-Matic'],
      commonIssues: [
        'Airfield and industrial perimeters rather than driveways',
        'Wide openings for aircraft, plant and freight',
        'Exposed sites with no wind break across open ground',
        'Long fence lines with several controlled entrances',
      ],
    },
    localAngle:
      'Terrell is the largest town in Kaufman County and it has an unusual piece of history attached: in 1941 the British chose the open skies over this county for the first of seven flying schools where RAF cadets trained before going to war, and the museum on the airfield is still there. The airfield is the useful fact for us, because airfield and industrial perimeters behave nothing like driveways. Openings have to be wide enough for aircraft, plant or freight rather than a car; fence lines are long and often carry several controlled entrances; and the sites themselves sit on open ground with nothing upwind, so a gate leaf takes wind loads that a sheltered suburban installation never sees. Combined with the I-20 industrial frontage, that makes Terrell a town where most of what we do is commercial-duty work rather than residential, and we specify for it accordingly.',
    faqs: [
      {
        q: 'We need a gate wide enough for plant and trailers. What is the limit?',
        a: 'Wider than most people expect is achievable, but past a certain span a single swing leaf becomes impractical — it needs somewhere to open into and it catches wind badly. Cantilever slides handle large openings better and do not depend on ground track. We size from the widest thing that will actually pass through rather than from a catalogue.',
      },
      {
        q: 'Our gate is on open ground and the wind gets behind it. Does that matter?',
        a: 'It matters more than most people assume. On exposed sites a solid leaf is a sail, and gusts can force it past its stops and bend an arm without anyone touching it. Properly rated stops, a positive latch when closed, and sometimes reducing the solid area are what prevent it — a stronger operator does not.',
      },
    ],
  },

  crandall: {
    zips: ['75114'],
    landmarks: ['Crandall town centre', 'Texas Trunk Line rail alignment', 'US-175 corridor', 'Crandall ISD campuses'],
    majorRoads: ['US-175', 'FM 148', 'FM 3039', 'Main Street'],
    nearbyCities: ['kaufman', 'forney', 'seagoville', 'combine', 'terrell', 'scurry'],
    responseBand: '',
    gateProfile: {
      dominant: 'An 1880 railway town on US-175, now taking commuter growth onto what was farmland a few years ago',
      commonGateTypes: ['Residential swing', 'Ranch entrance swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Elite', 'DoorKing'],
      commonIssues: [
        'New subdivisions on recently worked farmland',
        'Made ground settling under new drives and footings',
        'Long-standing farm entrances on the same roads',
        'Commuter traffic concentrating gate use into two peaks',
      ],
    },
    localAngle:
      'Crandall exists because the Texas Trunk Line Railway came through in 1880 and Rev. C. F. Crandall gave it a right of way across his land, and for most of the following century it stayed a small farming town on that line. US-175 has changed that, and the town is now taking commuter growth from Dallas onto ground that was being worked very recently. The practical consequence is one we see across this whole eastern edge: subdivisions built on made ground that has not finished settling, sitting alongside farm entrances that have been in place for forty years. A new gate here will often need re-commissioning at two or three years old because the driveway it was set against has moved; the farm gate up the road needs parts nobody makes any more. Knowing which of those two conversations we are having saves a good deal of time, which is why we ask the age of the installation first.',
    faqs: [
      {
        q: 'Our new-build gate has started catching. Is it faulty?',
        a: 'Usually not. On ground that was farmland until recently, the fill under a new drive settles for several years, so the surface and the posts the gate was commissioned against have both shifted slightly. Re-learning the travel against the gate as it now sits normally resolves it and needs no parts.',
      },
      {
        q: 'Can you still get parts for an old farm gate operator?',
        a: 'Sometimes, and where we cannot we will tell you before you spend anything. The posts, hinges and gate itself usually have years left even when the operator is unsupported, so fitting a current unit to the existing installation is far cheaper than replacing everything.',
      },
    ],
  },

  melissa: {
    zips: ['75454'],
    landmarks: ['Historic Melissa', 'Houston and Texas Central rail alignment', 'Texas Electric Railway interurban route', 'US-75 corridor'],
    majorRoads: ['US-75', 'SH 121', 'FM 545', 'Central Street'],
    nearbyCities: ['anna', 'mckinney', 'princeton', 'celina', 'blue-ridge', 'van-alstyne'],
    responseBand: '',
    gateProfile: {
      dominant: 'Laid out along an 1872 railway and later crossed by the Dallas–Denison interurban, so old rail alignments still constrain where drives and gates can sit',
      commonGateTypes: ['Residential swing', 'Community slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Frontages shaped by embankments and old rail rights of way',
        'Drives meeting roads at awkward angles near crossings',
        'Sight lines constrained by raised alignments',
        'New development fitting around century-old land divisions',
      ],
    },
    localAngle:
      'Melissa was laid out in 1872 when the Houston and Texas Central built through, and it was crossed again in 1908 by the Texas Electric Railway interurban running between Dallas and Denison. Two rail alignments through one small town leave a mark that outlives the track. Embankments, cuttings and old rights of way still shape where roads run and how properties meet them, and a surprising number of frontages here approach the road at an angle inherited from a railway rather than from anything about the land. For gate work that shows up as geometry: drives that meet the road obliquely give a gate less room to open into and worse sight lines when pulling out, and it changes where safety devices should sit and how long the gate should hold open. It is worth measuring rather than assuming a square frontage, because in Melissa a good many of them are not.',
    faqs: [
      {
        q: 'Our driveway meets the road at an angle. Does that affect the gate?',
        a: 'It affects the geometry quite a lot. An angled frontage gives a swing gate less clear arc and gives you worse visibility when pulling out, so the position of the photo-eyes and the hold-open time both want setting for that rather than to a default. On tighter angles a slide is often the safer configuration.',
      },
      {
        q: 'Is there anything unusual about older properties here?',
        a: 'Mostly the land divisions rather than the buildings. Boundaries here follow rail rights of way that are a century and a half old, so frontages and access points can be shaped by something that is no longer visible. We would rather measure the site than work from a plan that assumes a rectangle.',
      },
    ],
  },

  'lowry-crossing': {
    zips: ['75069', '75407'],
    landmarks: ['East Fork Trinity bottomland', 'FM 1827 corridor', 'Lowry Crossing City Hall', 'Wilson Creek'],
    majorRoads: ['FM 1827', 'SH 5', 'US-380', 'County Road 383'],
    nearbyCities: ['mckinney', 'princeton', 'lucas', 'lavon', 'nevada', 'parker'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small city with a McKinney postal address, so residents frequently do not know which municipality they are actually in',
      commonGateTypes: ['Ranch entrance swing', 'Driveway slide', 'Wide farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Elite'],
      commonIssues: [
        'Address and jurisdiction confusion delaying the right response',
        'Acreage entrances well back from the road',
        'Bottomland ground that holds water near the creeks',
        'Long drives with no power at the entrance',
      ],
    },
    localAngle:
      'Lowry Crossing is a city of under two thousand people that most of its own residents give a McKinney address for, because that is what the post office uses. It is a small thing that causes a disproportionate amount of confusion: people are genuinely unsure which municipality they live in, which matters when something needs a permit, when a utility is involved, or simply when someone is trying to find the property. We ask for the road and the nearest cross street here rather than the city, because a McKinney postcode covers an enormous area and the difference between the two can be twenty minutes of driving. Beyond that the work is what the land dictates — acreage entrances set well back from the road, bottomland near the creeks that holds water longer than the higher ground, and drives long enough that power at the gate is a question rather than an assumption.',
    faqs: [
      {
        q: 'Our address says McKinney but we are told we live in Lowry Crossing. Which is it?',
        a: 'Both, in a sense — the postal address is McKinney while the municipality is Lowry Crossing, which is normal here and causes endless confusion. For our purposes the road and nearest cross street matter far more than the city name, so that is what we will ask for. For permits and utilities, the municipality is the one that counts.',
      },
      {
        q: 'Our gate sits on low ground near the creek. Does that need anything different?',
        a: 'It changes where equipment should sit more than what equipment you need. Bottomland holds water long after the higher ground has dried, so mounting the control box and any low sensors above the level water actually reaches, and bedding the footings so they are not sitting in a bowl, is what makes the difference over time.',
      },
    ],
  },

  // ── BATCH 11, 28 Sep 2026 — THE LAST TWELVE ────────────────────────────────
  // Completes every city on the client's master keyword list. Subdivision
  // names for these came from city and county subdivision directories fetched
  // directly rather than from search summaries, which is why this batch
  // cleared the three-name requirement where earlier attempts did not.

  addison: {
    zips: ['75001'],
    neighborhoods: ['Addison Place', 'Bellbrook Estates', 'Waterford Park', 'Oaks North', 'Midway Meadows'],
    landmarks: ['Addison Airport', 'Addison Circle', 'Cavanaugh Flight Museum', 'Belt Line restaurant district'],
    majorRoads: ['Dallas North Tollway', 'Belt Line Road', 'Midway Road', 'Addison Road'],
    nearbyCities: ['farmers-branch', 'carrollton', 'dallas', 'richardson', 'plano', 'coppell'],
    responseBand: '',
    gateProfile: {
      dominant: 'Four square miles holding a small resident population and a very large daytime one, so most gates serve businesses rather than households',
      commonGateTypes: ['Service court gate', 'Commercial slide', 'Parking and barrier arm'],
      commonBrands: ['LiftMaster', 'DoorKing', 'HySecurity', 'Viking'],
      commonIssues: [
        'Gates in service courts with almost no room to manoeuvre',
        'Access needed by staff shifts and deliveries rather than residents',
        'Waste and delivery vehicles striking gates in tight yards',
        'Equipment sited where a building leaves barely enough space',
      ],
    },
    localAngle:
      'Addison packs an airport, one of the densest restaurant concentrations in Texas and a very large daytime working population into a little over four square miles, on top of a resident population that is small by comparison. Almost nothing we do here is a driveway. It is service courts behind restaurants, delivery yards between office buildings, and parking controls — gates fitted into whatever space was left once the buildings went up. That constraint is the defining one: there is frequently no room to site an operator clear of where a vehicle has to turn, and the damage that follows is predictable. We spend more time in Addison working out where a gate and its operator can physically live than we do choosing the equipment, because on a tight service court the wrong position guarantees the gate will be hit rather than merely risks it.',
    faqs: [
      {
        q: 'Our service yard is tight and the gate keeps getting hit. What can be done?',
        a: 'Usually geometry rather than a stronger gate. Moving the operator out of the swept path, adding protection at the vulnerable corner, and sometimes changing from a swing to a slide so nothing projects into the manoeuvring space will break the cycle. We would rather watch where your vehicles actually turn than keep repairing the same leaf.',
      },
      {
        q: 'We need access to work for staff on shifts and for deliveries. Is that straightforward?',
        a: 'Yes, and it is worth setting up rather than issuing one code to everyone. Separate credentials for staff, cleaners and regular deliveries mean access can be withdrawn individually and you can see what was used when, which matters far more on a commercial site than the convenience does.',
      },
    ],
  },

  'farmers-branch': {
    zips: ['75234', '75244'],
    neighborhoods: ['Brookhaven Estates', 'Brookhaven Hills', 'Mercer Crossing', 'Valwood Park', 'Town North Estates'],
    landmarks: ['Farmers Branch Historical Park', 'Valwood industrial district', 'Mercer Crossing', 'Elm Fork Trinity River'],
    majorRoads: ['I-35E', 'I-635', 'Valley View Lane', 'Josey Lane'],
    nearbyCities: ['addison', 'carrollton', 'dallas', 'irving', 'coppell', 'university-park'],
    responseBand: '',
    gateProfile: {
      dominant: 'An inner-ring suburb redeveloping former industrial ground, where digging a new footing means finding out what is already buried',
      commonGateTypes: ['Commercial slide', 'Residential swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'All-O-Matic'],
      commonIssues: [
        'Old slabs, footings and services under new installations',
        'Buried utilities in unexpected places on redeveloped land',
        'Made ground of unknown depth and composition',
        'Industrial and residential gates within a few streets',
      ],
    },
    localAngle:
      'Farmers Branch is one of the oldest settlements in Dallas County and one of its most industrially developed, with the Valwood district occupying a large share of the city. What is changing it now is redevelopment — Mercer Crossing and schemes like it are residential and mixed-use built over ground that was industrial for decades. That history is invisible from the surface and it is the thing that complicates gate work here more than anything else. Setting a post on redeveloped land frequently means encountering an old slab, a disused footing, or a service run that appears on no current drawing, and hitting any of those turns a straightforward installation into a different job. We check what is under the ground here before quoting a footing rather than after, because on this land the assumption that a post hole is just soil is the one most likely to be wrong.',
    faqs: [
      {
        q: 'We are told the ground here has old industrial foundations in it. Does that affect a gate?',
        a: 'It can, quite a lot. A post needs a footing at a proper depth, and on redeveloped land that depth may be occupied by an old slab or a disused service. It is better to find out before the quote than during the dig, so on this ground we check rather than assume, and we will tell you if the position needs moving a few feet to get a sound footing.',
      },
      {
        q: 'Our gate is an older commercial one on an industrial unit. Can it be modernised?',
        a: 'Usually yes, and the mechanical parts often have years left. Where the operator is unsupported, fitting a current unit and modern safety devices to the existing gate and posts costs far less than replacing the installation, and it brings the entrapment protection up to present standards, which on a commercial site matters for more than compliance.',
      },
    ],
  },

  sachse: {
    zips: ['75048'],
    neighborhoods: ['Woodbridge', 'Heritage Park', 'Brookview Estates', 'Cedar Creek Estates', 'Jackson Hills'],
    landmarks: ['Woodbridge Golf Club', 'Sachse Community Park', 'Heritage Park', 'SH 78 corridor'],
    majorRoads: ['SH 78', 'Sachse Road', 'Miles Road', 'Ranch Road'],
    nearbyCities: ['wylie', 'murphy', 'garland', 'rowlett', 'plano', 'lavon'],
    responseBand: '',
    gateProfile: {
      dominant: 'Home to part of a master-planned community that spans three separate cities, so the HOA and the municipality frequently are not the same authority',
      commonGateTypes: ['Community slide', 'Residential swing', 'Amenity gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'Uncertainty over whether the HOA or the city owns an entrance',
        'Identical equipment maintained under different arrangements',
        'Residents unsure which authority to report a fault to',
        'Boundaries running through a single community',
      ],
    },
    localAngle:
      'Woodbridge, the master-planned community that dominates this part of Collin and Dallas counties, does not stop at Sachse — it spans Sachse, Wylie and Murphy. That produces a confusion we deal with regularly and which has nothing to do with equipment: a resident reports a broken entrance gate and genuinely does not know whether it belongs to their HOA, to the city they live in, or to a neighbouring city whose boundary runs through the community. Identical gates a few hundred yards apart can sit under different management with different maintenance arrangements and different people authorising the work. So the first thing we establish on a community call in Sachse is not what is wrong with the gate but who owns it, because getting that wrong means doing work nobody has approved and billing somebody who did not ask for it.',
    faqs: [
      {
        q: 'Our community gate is broken. Who is responsible for it?',
        a: 'In this area that is a real question rather than a formality, because Woodbridge spans three cities and entrances can sit under different management. Tell us the entrance and we will help establish whether it is your HOA, your management company or the city — we would rather spend ten minutes on that than carry out work nobody has authorised.',
      },
      {
        q: 'Can you work with our HOA directly?',
        a: 'Yes, and on shared entrances that is normally how it should be done. We deal with boards and managing agents, give written reports they can put in front of a committee, and schedule around residents rather than around us.',
      },
    ],
  },

  burleson: {
    zips: ['76028', '76058'],
    neighborhoods: ['Mistletoe Hill', 'Shannon Creek', 'Overbrook Farm', 'Elk Ridge Estates', 'Hidden Vistas'],
    landmarks: ['Old Town Burleson', 'Chisholm Trail Parkway', 'Bailey Lake', 'Russell Farm Art Center'],
    majorRoads: ['Chisholm Trail Parkway', 'I-35W', 'SH 174', 'Wilshire Boulevard'],
    nearbyCities: ['crowley', 'fort-worth', 'joshua', 'mansfield', 'alvarado', 'cleburne'],
    responseBand: '',
    gateProfile: {
      dominant: 'A Johnson County town whose growth arrived suddenly with a new toll road, so most of its gates are younger than the road that brought them',
      commonGateTypes: ['Residential swing', 'Community slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'A decade of installations reaching first-service age together',
        'New subdivisions beside long-standing county acreage',
        'Commuter use concentrated into morning and evening peaks',
        'Equipment specified during a rapid build-out rather than for the site',
      ],
    },
    localAngle:
      'Burleson sat in Johnson County as a modest town for most of its existence, and then the Chisholm Trail Parkway opened and put it within a straightforward commute of Fort Worth. Most of what has been built here dates from after that, which gives the city an unusually compressed equipment age profile: a great many gates went in within the same handful of years, and they are now arriving at their first real service interval more or less together. That is worth knowing because it changes what good advice looks like. The useful conversation in Burleson is rarely about whether an operator can be repaired — most of them can — and much more often about which components on an installation of that age are worth attending to now rather than waiting for. Beyond the new subdivisions the county acreage is still there, and those entrances are a different job entirely.',
    faqs: [
      {
        q: 'Our gate is about eight years old and has never been serviced. What should we look at?',
        a: 'At that age the things worth checking are the ones that wear silently — rollers and track on a slide, hinges and post plumb on a swing, and the safety devices, which drift out of alignment long before they fail outright. None of it is dramatic and all of it is cheaper attended to now than after it has taken the operator with it.',
      },
      {
        q: 'Do you work out on the county acreage as well as the newer subdivisions?',
        a: 'Yes, and they are genuinely different jobs. An acreage entrance is usually a longer gate further from power, often solar, with different failure modes from a subdivision installation a mile away. Telling us which you have on the phone decides what goes on the van.',
      },
    ],
  },

  crowley: {
    zips: ['76036'],
    neighborhoods: ['Carson Ranch', 'Deer Creek', 'Lasater Ranch', 'Rocky Creek Ranch', 'Stone Gate Village'],
    landmarks: ['Historic Downtown Crowley', 'BNSF rail line', 'Bicentennial Park', 'Crowley Recreation Center'],
    majorRoads: ['FM 1187', 'SH 174 Crowley Road', 'Main Street', 'Sycamore School Road'],
    nearbyCities: ['burleson', 'fort-worth', 'benbrook', 'kennedale', 'joshua', 'everman'],
    responseBand: '',
    gateProfile: {
      dominant: 'Built along a working rail line that still splits the city, so a passing train can decide how long it takes to reach the other side',
      commonGateTypes: ['Residential swing', 'Community slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Level crossings delaying access to half the city',
        'Rail vibration working fixings loose near the line',
        'Emergency calls routed around a blocked crossing',
        'Older properties along the original rail-side streets',
      ],
    },
    localAngle:
      'Crowley began in 1881 as a Santa Fe railroad camp, and the railway is not a historical footnote here — it still runs through the middle of the city and it still splits it. Anyone who lives here knows the feeling of arriving at a crossing behind a train, and it affects us in a way it does not affect most of the towns we cover: a job five minutes away can be twenty if the timing is wrong, and an emergency call on the far side of the line needs routing rather than simply driving to. The second effect is felt rather than seen. Daily freight puts energy into the ground and into anything bolted to it, and over years that steadily undoes the alignment between an operator and the gate it drives — nothing fails, but the geometry drifts until the gate starts catching. It is why a torque check belongs at the start of a visit on the rail-side streets rather than at the end.',
    faqs: [
      {
        q: 'Our gate has started binding and nothing is obviously wrong. What would you check first?',
        a: 'How close you are to the track. Freight passing daily transmits far more energy into nearby ground and structures than most people credit, and over years that loosens what holds an operator in alignment with its gate. The correction is a torque check rather than a part, and on the rail-side streets we do it as standard before looking anywhere else.',
      },
      {
        q: 'How quickly can you get here in an emergency?',
        a: 'We will give you a real answer rather than an optimistic one, and in Crowley that sometimes depends on the crossings. If you are on the far side of the line from us we will say so and route accordingly. Telling us the nearest cross street when you call genuinely helps.',
      },
    ],
  },

  fairview: {
    zips: ['75069'],
    neighborhoods: ['Heritage Ranch', 'Ascot Heath', 'Sloan Creek Estates', 'Fairview Farms', 'Village of Fairview'],
    landmarks: ['Heritage Ranch Golf and Country Club', 'The Village at Fairview', 'Sloan Creek', 'Fairview Town Hall'],
    majorRoads: ['US-75', 'SH 5', 'Stacy Road', 'Country Club Road'],
    nearbyCities: ['allen', 'mckinney', 'lucas', 'parker', 'murphy', 'princeton'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town that has legislated hard to keep a rural look, including keeping street lighting to a minimum, so entrances are genuinely dark at night',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Entrances with no ambient light to see a keypad or a hazard by',
        'Safety devices and lighting needing to work together after dark',
        'Long unlit drives between the gate and the house',
        'Visitors unable to find an entrance at night',
      ],
    },
    localAngle:
      'Fairview has protected its rural character deliberately and in detail, and one of the things that protection covers is lighting — there is far less of it here than in the towns either side, which is exactly the point and is much of why people move here. It does have a practical consequence at a gate. An entrance with no ambient light is a place where a keypad cannot be read, where a visitor cannot see the edge of the drive, and where anything in the gate’s path is invisible until it is very close. That does not argue for floodlighting a frontage people chose for its darkness; it argues for thinking about lighting and safety devices together — low-level marker lighting, an illuminated keypad, sensor positions chosen for conditions where nobody will see the gate coming. It is a design question rather than an equipment one, and it is one most installations here have never had asked about them.',
    faqs: [
      {
        q: 'Our entrance is pitch dark and visitors struggle to find it. What helps without floodlighting it?',
        a: 'Low-level marker lighting at the drive edges, an illuminated keypad and a modest light triggered by the gate cycle rather than left on. Together those make an entrance usable after dark without turning it into the thing the town’s lighting rules exist to prevent. It is usually a small addition to work you are already having done.',
      },
      {
        q: 'Does darkness affect the gate’s safety sensors?',
        a: 'Not the sensors themselves — photo-eyes work on infrared and do not care about visible light. What darkness affects is people: a pedestrian or a pet near a closing gate is much harder for a driver to see. That is an argument for where the sensors sit and how long the gate holds open, which we would set differently here than on a lit suburban street.',
      },
    ],
  },

  haslet: {
    zips: ['76052'],
    neighborhoods: ['Wellington', 'Sendera Ranch', 'Avondale Ranch', 'Elizabeth Creek', 'Lonesome Dove Estates'],
    landmarks: ['BNSF Alliance intermodal facility', 'Alliance corridor', 'Haslet Community Park', 'Intermodal Parkway'],
    majorRoads: ['I-35W', 'SH 170', 'FM 156', 'Avondale Haslet Road'],
    nearbyCities: ['fort-worth', 'saginaw', 'justin', 'northlake', 'roanoke', 'keller'],
    responseBand: '',
    gateProfile: {
      dominant: 'Home to the largest inland rail port in North America, so the commercial gates here run at a scale nothing else in the metroplex matches',
      commonGateTypes: ['Cantilever slide', 'Barrier arm', 'Commercial slide'],
      commonBrands: ['HySecurity', 'DoorKing', 'All-O-Matic', 'LiftMaster'],
      commonIssues: [
        'Entrances cycling continuously for tractor units and trailers',
        'Very large openings under constant heavy use',
        'Running gear wearing far ahead of the operator',
        'Downtime measured against freight schedules rather than convenience',
      ],
    },
    localAngle:
      'The BNSF Alliance intermodal facility sits in Haslet and handles something over a million container lifts a year, which makes this small town the location of the largest inland rail port in North America. The gates that serve that operation and the distribution estates around it are not scaled-up residential equipment; they are cantilever slides and barrier arms cycling for tractor units and trailers more or less continuously, on sites where an entrance being out of service has a cost measured against freight schedules. What fails under that duty is the running gear rather than the motor — trucks, rollers and chains carry the load and wear steadily, and the operator then labours against that wear until it looks like the culprit. Quoting an operator without measuring the running gear on a site like this produces a repair that does not last the quarter.',
    faqs: [
      {
        q: 'Our entrance cannot be out of service. How do you approach that?',
        a: 'By planning around the constraint rather than discovering it. We agree a window, arrive with the parts the site is most likely to need rather than diagnosing then ordering, and where a gate must stay usable we keep it in a controlled manual state instead of simply open. On a freight site we would rather do more preparation and less improvisation.',
      },
      {
        q: 'We keep replacing operators on the same gate. What are we missing?',
        a: 'Almost certainly the running gear. On continuous heavy duty the trucks, rollers and chain wear long before the motor does, and an operator asked to drag a gate over worn hardware will fail however good it is. Measuring those first is what turns a recurring cost into a one-off repair.',
      },
    ],
  },

  kennedale: {
    zips: ['76060'],
    neighborhoods: ['Steeplechase Estates', 'Shady Creek', 'Oakhill Park', 'Village Creek', 'Brookstone Estates'],
    landmarks: ['Village Creek', 'Kennedale Town Center', 'Sonora Park', 'Business 287 corridor'],
    majorRoads: ['US-287', 'Kennedale Parkway', 'Little School Road', 'Dick Price Road'],
    nearbyCities: ['arlington', 'fort-worth', 'forest-hill', 'crowley', 'mansfield', 'everman'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small city carrying an unusually large amount of open outdoor storage for its size, where the fence line is the security rather than a building',
      commonGateTypes: ['Long-run cantilever slide', 'Chain-link rolling gate', 'Commercial swing'],
      commonBrands: ['DoorKing', 'All-O-Matic', 'HySecurity', 'LiftMaster'],
      commonIssues: [
        'Very long perimeters with a single controlled entrance',
        'Gates securing land and plant rather than premises',
        'Unsurfaced yard ground under heavy rolling gates',
        'Damage and forced entry attempts on isolated frontages',
      ],
    },
    localAngle:
      'Kennedale is small, sits between Arlington and Fort Worth on Business 287, and carries a great deal more open outdoor storage than a city its size would suggest — yards holding plant, materials and vehicles rather than buildings. That changes what a gate is for. On a site where the value is spread across the land rather than locked inside a building, the perimeter is the security, and the gate is the single point in a very long fence line that has to be both usable every day and sound every night. It also means the gate is often the only thing anyone would need to defeat, and it sits on ground that was never surfaced for it. We specify heavier here than the size of the business might imply, because a rolling gate dragged across unmade ground on a long run is doing a harder job than the same gate on a paved commercial forecourt.',
    faqs: [
      {
        q: 'Our yard gate is the only security we have. What should we be fitting?',
        a: 'Something specified for the job rather than for the budget. On a perimeter where the gate is the single control point, that usually means a heavier rolling or cantilever gate, a positive lock rather than relying on the operator to hold it, and proper ground preparation under the run. It costs more once and it is the difference between a deterrent and an inconvenience.',
      },
      {
        q: 'The ground under our gate is not surfaced and it keeps binding. Is that fixable?',
        a: 'Yes, and the ground is usually the fix rather than the gate. A rolling gate needs a consistent surface under its run, and on unmade yard ground that surface moves with the weather. Getting the run right — a proper track bed or a cantilever design with no ground contact at all — ends a problem that no amount of adjustment will.',
      },
    ],
  },

  midlothian: {
    zips: ['76065'],
    neighborhoods: ['Lawson Farms', 'Dove Creek', 'Somercrest', 'Hillstone Estates', 'Massey Meadows'],
    landmarks: ['Midlothian Conference Center', 'Historic Downtown Midlothian', 'Cement plants', 'Mockingbird Nature Park'],
    majorRoads: ['US-287', 'US-67', 'FM 663', 'Main Street'],
    nearbyCities: ['waxahachie', 'cedar-hill', 'mansfield', 'red-oak', 'ovilla', 'grand-prairie'],
    responseBand: '',
    gateProfile: {
      dominant: 'The cement capital of Texas, with working plants and limestone quarries whose blasting and haulage are felt across the town',
      commonGateTypes: ['Ranch entrance swing', 'Commercial slide', 'Residential swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'All-O-Matic', 'US Automatic'],
      commonIssues: [
        'Quarry blasting vibration loosening fixings and footings',
        'Fine industrial dust settling in tracks and housings',
        'Heavy haulage traffic on the roads gates open onto',
        'Sensor lenses dulling faster than an ordinary environment',
      ],
    },
    localAngle:
      'Midlothian has been the cement capital of Texas for decades, with working plants and the limestone quarries that feed them inside the city. Two consequences follow for anything mechanical here. The first is vibration: quarry blasting is felt across the town, and while it is nothing like enough to damage a building, it is enough over years to work fixings loose and to settle a footing that was marginal to begin with. The second is dust — fine, pervasive and more abrasive than the road grit most towns deal with — which finds its way into tracks, bearings and operator housings and dulls sensor lenses on a cycle measured in months rather than years. Neither is dramatic on any given day. Together they mean equipment here needs checking on a shorter interval than a manufacturer writing for suburban conditions would suggest.',
    faqs: [
      {
        q: 'Our gate needs adjusting more often than seems reasonable. Is that the quarries?',
        a: 'Quite possibly, in part. Blasting vibration over years works bracket and mounting fixings loose and can settle a footing that was borderline, and both show up as a gate drifting out of adjustment with no obvious cause. Checking and re-torquing fixings is quick, and it is worth doing before assuming the operator is at fault.',
      },
      {
        q: 'How often should equipment be cleaned here?',
        a: 'More often than elsewhere. The dust in this town is fine and abrasive, so tracks and sensor lenses want attention on a routine rather than when something stops working. Sealed bearings rather than open ones make a real difference to how long rollers last, and it is a specification decision worth making at the outset.',
      },
    ],
  },

  northlake: {
    zips: ['76226', '76247'],
    neighborhoods: ['Canyon Falls', 'Harvest', 'Pecan Square', 'Highlands at Northlake', 'Prairie View Farms'],
    landmarks: ['Alliance corridor', 'Texas Motor Speedway area', 'I-35W', 'Cleveland Gibbs Road'],
    majorRoads: ['I-35W', 'FM 407', 'FM 1171', 'Cleveland Gibbs Road'],
    nearbyCities: ['justin', 'argyle', 'haslet', 'roanoke', 'trophy-club', 'lantana'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town whose master-planned communities sit as separate islands with open land between them rather than as a continuous built-up area',
      commonGateTypes: ['Community slide', 'Residential swing', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Communities physically separated by miles of open land',
        'Very different conditions within one town boundary',
        'New community entrances beside long-standing ranch gates',
        'Travel time within the town longer than to neighbouring towns',
      ],
    },
    localAngle:
      'Northlake is not laid out the way most towns are. Its large master-planned communities — Canyon Falls, Harvest, Pecan Square — sit as separate islands with open ranch land between them rather than merging into a continuous built-up area, and the town boundary encloses all of it. The practical effect is that "Northlake" tells us less than a town name usually does. Two jobs inside the same city can be ten minutes apart with nothing but pasture in between, and they can be entirely different sorts of work: a new community entrance with modern equipment and an HOA behind it, and a ranch gate on a long solar-powered drive that has been there for twenty years. So we ask which community, or which farm-to-market road, rather than accepting the town name — it is the single most useful thing a caller here can tell us.',
    faqs: [
      {
        q: 'Why do you ask which community we are in rather than just the city?',
        a: 'Because Northlake’s communities are physically separate, with open land between them, and the work differs as much as the distance does. Knowing whether you are in Harvest, Canyon Falls or out on an FM road tells us what equipment to expect and how long it takes to reach you, which makes the arrival window we give you an honest one.',
      },
      {
        q: 'Do you cover the older ranch properties as well as the new communities?',
        a: 'Yes, and they are a large part of what we do here. An acreage entrance is a different job from a community gate — longer, usually solar, often with a decades-old operator — so telling us which you have decides the parts we bring rather than just the address we drive to.',
      },
    ],
  },

  'red-oak': {
    zips: ['75154'],
    neighborhoods: ['Fox Hollow Estates', 'Shiloh Downs', 'Oak Tree Estates', 'Quail Run Estates', 'Red Oak Club'],
    landmarks: ['Red Oak Creek', 'Historic Downtown Red Oak', 'Pearson Park', 'I-35E corridor'],
    majorRoads: ['I-35E', 'FM 664 Ovilla Road', 'Red Oak Road', 'Methodist Street'],
    nearbyCities: ['glenn-heights', 'ovilla', 'waxahachie', 'midlothian', 'desoto', 'lancaster'],
    responseBand: '',
    gateProfile: {
      dominant: 'Sitting on the haul routes between the Midlothian cement works and I-35E, so the roads these gates open onto carry constant heavy freight',
      commonGateTypes: ['Ranch entrance swing', 'Residential swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Gates opening directly onto roads carrying loaded quarry trucks',
        'Sight lines and cycle timing that must allow for slow heavy vehicles',
        'Road grit and spillage carried onto frontages',
        'Vibration from constant heavy traffic on FM roads',
      ],
    },
    localAngle:
      'Red Oak sits between the Midlothian cement works and the interstate, which means the farm-to-market roads through it are haul routes. That is the fact that matters most at a gate here. A loaded quarry truck takes a long time to stop and needs a long gap to pull out in front of, so an entrance opening onto FM 664 or one of the connecting roads has a timing problem that a suburban driveway does not: a gate that is slow to open leaves you waiting in the path of vehicles that cannot react quickly, and a close timer set to a default may begin shutting before a long vehicle of your own has cleared. We set cycle speeds and sensor positions for the traffic the gate actually faces, and on the busier frontages we will say plainly when a gate is sited somewhere we would not choose.',
    faqs: [
      {
        q: 'Our gate opens onto a road with constant lorry traffic. Is there anything we should do differently?',
        a: 'Yes, mostly about timing and sight lines. A gate that opens slowly leaves you waiting where a loaded truck cannot stop quickly, so cycle speed matters more here than it would on a quiet street. We also set the close timer allowing for the longest vehicle that uses your drive rather than a family car.',
      },
      {
        q: 'Why does our track fill with grit so quickly?',
        a: 'Haul traffic. Loaded trucks carry material onto the road and it ends up on the frontages either side, which is more than an ordinary road delivers. Clearing the track is part of it; where the fall of the drive brings that material into the run, changing the drainage does more than sweeping ever will.',
      },
    ],
  },

  sunnyvale: {
    zips: ['75182'],
    neighborhoods: ['Homestead', 'Stoney Creek', 'Fox Hollow'],
    landmarks: ['Long Creek', 'Sunnyvale Town Center', 'Lake Ray Hubbard', 'Tripp Road corridor'],
    majorRoads: ['I-30', 'US-80', 'Belt Line Road', 'Tripp Road'],
    nearbyCities: ['mesquite', 'garland', 'balch-springs', 'rowlett', 'forney', 'seagoville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A half-acre minimum lot ordinance has kept it low-density while dense suburbs grew up against its boundary on every side',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'All-O-Matic'],
      commonIssues: [
        'Long private drives a few hundred yards from dense suburbia',
        'Power and communication runs longer than neighbouring cities need',
        'Rural-scale gates on land surrounded by city services',
        'Expectations set by neighbouring suburbs that do not apply here',
      ],
    },
    localAngle:
      'Sunnyvale has held a half-acre minimum lot size while Mesquite, Garland and Balch Springs built right up to its boundary, and the result is a genuine island of low density inside dense eastern Dallas County. Crossing the town line, the lots roughly quadruple in size. For gate work that produces a mismatch worth naming: the properties are rural in scale — long drives, gates well back from the road, power and communication runs far longer than a suburban installation needs — while everything around them is suburban, and owners quite reasonably arrive with expectations set by what their neighbours a mile away paid. A gate at the end of a three-hundred-foot drive is a different job from one at the end of a thirty-foot drive, and the honest conversation here usually starts with why, rather than with the equipment itself.',
    faqs: [
      {
        q: 'Why would a gate here cost more than one in Mesquite?',
        a: 'Usually distance rather than the gate. A half-acre-plus lot means a longer drive, longer power and communication runs, and often a heavier gate across a wider opening — all of which cost more than the same equipment thirty feet from a garage. We will show you where the difference actually sits rather than quoting a round number.',
      },
      {
        q: 'Our intercom is unreliable but the gate works fine. Why?',
        a: 'Distance again. On these lot sizes the run between gate and house is long and usually buried, and moisture in a joint degrades audio while the gate circuit, which tolerates more, keeps working. Testing the run first avoids replacing hardware that was never at fault.',
      },
    ],
  },

  'royse-city': {
    zips: ['75189'],
    neighborhoods: ['High Point Ranch', 'Verandah', 'Creekview Estates', 'Waterscape', 'Kingsbrook'],
    landmarks: ['Historic Downtown Royse City', 'I-30 corridor', 'Lake Ray Hubbard headwaters', 'Royse City Municipal Park'],
    majorRoads: ['I-30', 'FM 35', 'FM 2642', 'Main Street'],
    nearbyCities: ['fate', 'rockwall', 'caddo-mills', 'nevada', 'josephine', 'heath'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city spread across three counties at once, so which authority covers a property depends on which side of a line the driveway sits',
      commonGateTypes: ['Residential swing', 'Community slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Permits and records split across Rockwall, Collin and Hunt counties',
        'Utility providers changing between neighbouring streets',
        'New subdivisions beside long-standing county acreage',
        'Growth outpacing the roads the entrances open onto',
      ],
    },
    localAngle:
      'Royse City has the unusual distinction of sitting in three counties at once — Rockwall, Collin and Hunt — and the lines run through the city rather than around it. That is more than trivia when something needs a permit, a record or a utility connection, because the answer genuinely depends on which side of an invisible boundary a particular driveway sits on, and neighbours on the same road can be filed under different counties. We check rather than assume, because getting it wrong costs a week rather than an afternoon. Beyond the administrative side the pattern is the one common to this whole I-30 corridor: large new subdivisions going up alongside acreage that has been farmed for generations, with the newer gates failing on commissioning as their made ground settles and the older ones needing parts that are no longer manufactured.',
    faqs: [
      {
        q: 'Which county are we in? We get different answers from different people.',
        a: 'Very possibly more than one is right for different parts of your street. Royse City spans Rockwall, Collin and Hunt counties, and the boundaries run through the city. If anything on a job needs a permit or a record we will confirm which county your property actually falls in first, because that is where the delays come from.',
      },
      {
        q: 'Our gate came with a new build here and is already misbehaving. Is it faulty?',
        a: 'Usually not. On subdivisions built over recently farmed ground the fill settles for several years, so the driveway and posts the gate was commissioned against have shifted since. Re-learning the travel against the gate as it now sits generally sorts it without any parts.',
      },
    ],
  },

  // ── Outer-ring towns enriched 1 Nov 2026 (researched per town; sources in each comment).
  // Subdivision names are often from listings rather than city records: see the note above.

  // Collinsville: sources: https://en.wikipedia.org/wiki/Collinsville,_Texas, https://www.redfin.com/sitemap/TX/76233/street/Fm+902, https://en.wikipedia.org/wiki/Lake_Ray_Roberts
  collinsville: {
    zips: ['76233'],
    neighborhoods: ['Downtown Collinsville', 'US 377 corridor', 'FM 902 corridor', 'Hog Town Road area'],
    landmarks: ['Downtown Collinsville', 'Collinsville ISD campus', 'Lake Ray Roberts (to the south)'],
    majorRoads: ['US 377', 'FM 902'],
    nearbyCities: ['tioga', 'whitesboro', 'pilot-point', 'sadler', 'gunter', 'gainesville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small town in south-western Grayson County ringed by acreage and small ranches along US 377 and FM 902',
      commonGateTypes: ['Ranch entrance swing', 'Pipe frame swing', 'Driveway slide'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Solar panels and batteries undersized for a long rural drive',
        'Livestock and cattle guards near the opener',
        'Long wire runs to keypads at the road',
        'Gravel drives washing out under the gate',
      ],
    },
    localAngle:
      'Collinsville counted 1,866 people in the 2020 census on well under a square mile of land, which tells you most of the gates around it are not in town at all. They sit at the road end of acreage off US 377 and FM 902, often a long way from the house and from any power pole. That makes the typical driveway gate here a solar job, and the usual complaint is a gate that works all summer and starts stalling in December, when short days and a tired battery cannot keep up with the opener. Cattle and horses add their own wear: animals rub on posts, lean on leaves and chew wiring that was left exposed. Most automatic gate repair in Collinsville starts with a battery load test and a look at the wiring before anything on the operator gets replaced, because the motor is rarely the first part to give up out here.',
    faqs: [
      {
        q: 'Our solar gate slows down every winter. Is the opener failing?',
        a: 'Usually not. A solar opener lives on what the panel puts back into the battery each day, and in winter there is less sun to do it. If the battery is a few years old it may hold a charge on paper and still sag under load. We test the battery under load, check the panel angle and charge controller, and only then look at the motor.',
      },
      {
        q: 'Our place is outside the Collinsville city limits. Do you cover rural roads?',
        a: 'Yes. Most of the gates around Collinsville are on county roads and acreage rather than in town, and that is normal work for us. When you call, give us the road name and a landmark or gate code if there is one, since rural addresses do not always map cleanly and we would rather find you the first time.',
      },
    ],
  },

  // Denison: sources: https://en.wikipedia.org/wiki/Denison,_Texas, https://highlandhomes.com/dfw/denison/gateway-village-the-reserve, https://www.kxii.com/2025/10/17/preston-harbor-development-breaks-ground-lake-texoma-decades-long-dream-nears-reality/, https://candysdirt.com/2025/07/30/centurion-american-bringing-1200-new-homes-to-preston-harbor-development-on-lake-texoma/
  denison: {
    zips: ['75020', '75021'],
    neighborhoods: ['Gateway Village', 'Preston Harbor', 'Waters Edge', 'Downtown Denison', 'Loy Lake area'],
    landmarks: ['Eisenhower Birthplace State Historic Site', 'Denison Dam and Lake Texoma', 'Grayson County Frontier Village', 'Denison Commercial Historic District'],
    majorRoads: ['US 75', 'US 69', 'SH 91 Texoma Parkway', 'Spur 503 Eisenhower Parkway'],
    nearbyCities: ['sherman', 'pottsboro', 'howe', 'tom-bean', 'van-alstyne', 'sadler'],
    responseBand: '',
    gateProfile: {
      dominant: 'An 1872 railroad city now adding large lakefront and master-planned communities between downtown and Lake Texoma',
      commonGateTypes: ['Community entrance slide', 'Residential swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'Wind off the lake loading wide gate leaves',
        'Access control and keypad faults at gated subdivisions',
        'Corrosion on older operators near the water',
        'Construction dust and traffic wearing new entrance gates',
      ],
    },
    localAngle:
      'Denison was founded in 1872 beside the Missouri, Kansas and Texas Railroad depot, and for a century its gates were mostly the commercial kind around rail yards and warehouses. That is changing. Preston Harbor broke ground on the Lake Texoma side in October 2025, gated lots are going in along Waters Edge Drive, and Gateway Village is filling in off US 75 and FM 691. New gated entrances bring a different set of calls: keypads and access systems that a homeowners association has outgrown, and wide leaves catching the wind that comes across the lake with nothing to slow it down. A gate that faces open water takes far more side load than the same gate in a sheltered street in Sherman. When we look at gate opener repair in Denison, wind exposure and the age of the access control are the first two questions, because together they explain most of what goes wrong on lakeside entrances.',
    faqs: [
      {
        q: 'Our gate near the lake struggles on windy days. Can that be fixed?',
        a: 'Often, yes. A solid or close-picketed leaf acts like a sail, and an operator sized for a sheltered drive may stall or reverse when a gust hits it. The fixes range from adjusting force and reverse settings to fitting a heavier operator or a positive stop and lock. We check the operator rating against the actual leaf size before suggesting anything.',
      },
      {
        q: 'Do you work on HOA and community entrance gates in Denison?',
        a: 'Yes. Community entrances are a large part of the work as Denison grows, covering slide and swing operators, keypads, telephone entry, loop detectors and safety sensors. If the board or manager can tell us the operator brand and what the gate is doing, we can usually bring the right parts on the first visit.',
      },
    ],
  },

  // Gunter: sources: https://en.wikipedia.org/wiki/Gunter,_Texas, https://www.dot.state.tx.us/tpp/hwy/FM/FM0121.htm, https://www.txdot.gov/projects/projects-studies/paris/gunter-relief-route.html, https://aaronlayman.com/tx/gunter/bridges-at-preston-xings/1408-bearpath-way/, https://aaronlayman.com/tx/gunter/woodlands-of-preston/152-whispering-winds-drive
  gunter: {
    zips: ['75058'],
    neighborhoods: ['Bridges at Preston Crossings', 'Woodlands of Preston', 'Deer Crossing', 'Downtown Gunter'],
    landmarks: ['Historic downtown Gunter', 'SH 289 Preston Road corridor', 'BNSF rail line through town'],
    majorRoads: ['SH 289 Preston Road', 'FM 121'],
    nearbyCities: ['tioga', 'van-alstyne', 'celina', 'howe', 'collinsville', 'sherman'],
    responseBand: '',
    gateProfile: {
      dominant: 'A 1902 rail town on SH 289 where custom homes on large wooded lots are moving in from the Celina side',
      commonGateTypes: ['Estate swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'Viking'],
      commonIssues: [
        'Gate leaves dropping on posts set in shifting clay',
        'Tree roots and leaf litter around swing arcs',
        'New-build gates installed before final grading',
        'Keypad and remote range on long drives',
      ],
    },
    localAngle:
      'Gunter’s population grew from 1,498 to 2,060 between the 2010 and 2020 censuses, and the growth is coming up SH 289 from the Celina side in the form of larger lots and custom homes. Places like Woodlands of Preston were built among mature trees, ponds and creeks, which is pleasant to live with and hard on gates. Roots lift slabs and pads, leaves and acorns pack into slide tracks, and a creek-side lot can stay wet long enough to soften the ground around a post. New construction adds its own problem: a gate installation finished before the final grading of a lot can end up with too little clearance once the drive is regraded or the landscaping goes in. For a swing gate in Gunter, the first things we check are post plumb, ground clearance through the full arc, and whether anything has grown or been built into the gate’s path.',
    faqs: [
      {
        q: 'Our new gate scrapes the drive since the landscaping went in. Why?',
        a: 'Finished grade often ends up higher than the grade the installer worked to, especially when topsoil, sod or pavers go in after the gate. The leaf then drags partway through its swing and the opener strains or reverses. Depending on the gap needed, we can raise the leaf on its hinges, reset the hinge points or, in some cases, cut back the surface under the arc.',
      },
      {
        q: 'Do you install gates on new custom homes around Gunter?',
        a: 'Yes, we handle gate installation as well as repair. On a new build it pays to talk to us before the drive is poured, because conduit for power and accessories, footing positions and the final grade all affect how the gate runs for years afterward. Adding those things after the concrete is down costs more.',
      },
    ],
  },

  // Howe: sources: https://en.wikipedia.org/wiki/Howe,_Texas
  howe: {
    zips: ['75459'],
    neighborhoods: ['Summit Hill', 'Downtown Howe', 'SH 5 corridor', 'FM 902 west of town'],
    landmarks: ['Historic downtown Howe', 'Howe High School', 'US 75 frontage'],
    majorRoads: ['US 75', 'SH 5', 'FM 902'],
    nearbyCities: ['van-alstyne', 'sherman', 'gunter', 'tom-bean', 'denison', 'anna'],
    responseBand: '',
    gateProfile: {
      dominant: 'A former grain-shipping railroad town on US 75 where newer subdivisions meet farmland on the Blackland Prairie',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Farm entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Mighty Mule', 'Elite'],
      commonIssues: [
        'Storm and wind damage to gate leaves and arms',
        'Lightning and surge damage to control boards',
        'Seasonal clay movement under posts',
        'Open-country wind on wide leaves',
      ],
    },
    localAngle:
      'Howe was first a rail stop called Summit on the Houston and Texas Central in 1873, renamed in 1876, and by the late 1880s it was shipping grain off the surrounding prairie. That open, flat country is still the main thing gates here have to cope with. Tornadoes struck the town in 1896 and again in April 2016, when an EF1 starting in the Summit Hill area damaged homes and the high school, and spring storms bring wind, hail and lightning across the fields with little in the way. After a storm we see bent arms, racked leaves and control boards that were killed by a surge through the power line or a nearby strike. If you need a gate motor checked in Howe after bad weather, the useful first step is a look at surge protection and grounding, since a new board on an unprotected circuit is only waiting for the next storm.',
    faqs: [
      {
        q: 'Our gate stopped working after a thunderstorm. What usually fails?',
        a: 'Most often the control board, the receiver or a fuse, damaged by a surge coming down the power supply or induced by a nearby strike. The motor itself is usually fine. We test the board and accessories, replace what is damaged, and look at whether the opener has surge protection and a proper ground, because without them the same thing tends to happen again.',
      },
      {
        q: 'We live in one of the newer subdivisions in Howe. Do you service HOA gates too?',
        a: 'Yes. We work on single driveway gates and on shared entrance gates, including keypads, telephone entry and safety sensors. For a shared gate it helps if whoever manages it calls, so we can agree access, codes and who signs off the repair before we arrive. A note of the operator brand and the symptoms also helps us bring the right parts.',
      },
    ],
  },

  // Pottsboro: sources: https://en.wikipedia.org/wiki/Pottsboro,_Texas, https://aaronlayman.com/tx/pottsboro/tanglewood-hills-ctry-cl-1-7/102-hacienda-drive/, https://aaronlayman.com/tx/pottsboro/woods-on-glen-ellen-phase-iii/33-crescent-drive, https://www.fws.gov/refuge/hagerman
  pottsboro: {
    zips: ['75076'],
    neighborhoods: ['Tanglewood Hills', 'Texoma Estates', 'Woods on Glen Ellen', 'Texoma Ranch Estates', 'Downtown Pottsboro'],
    landmarks: ['Lake Texoma', 'Tanglewood Resort', 'Hagerman National Wildlife Refuge'],
    majorRoads: ['SH 289', 'FM 120'],
    nearbyCities: ['denison', 'sherman', 'sadler', 'whitesboro', 'howe', 'gunter'],
    responseBand: '',
    gateProfile: {
      dominant: 'A lake town on the Texas side of Lake Texoma with a mix of second homes, wooded lots and acreage',
      commonGateTypes: ['Driveway swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Ghost Controls', 'Elite'],
      commonIssues: [
        'Gates that sit unused for weeks at weekend homes',
        'Rust and corrosion from damp lake air',
        'Sloped and wooded drives near the shoreline',
        'Insects and rodents nesting in idle operators',
      ],
    },
    localAngle:
      'Pottsboro was laid out in 1876 on land James A. Potts donated for a townsite and a Katy railroad right-of-way, and today it sells itself to visitors with the motto "Come Play. Come Stay." because Lake Texoma sits right on its doorstep. A good share of the homes around Tanglewood and the other lake subdivisions are second homes, and that changes how gates fail. A driveway gate that runs a dozen times a day keeps itself loose. One that sits closed for three weeks while the owners are in Dallas collects spider webs in the photo eyes, wasp nests and mice in the operator housing, a flat battery and rusty hinges, then gets asked to work on a Friday night. Automatic gate repair in Pottsboro is often a case of bringing a neglected opener back rather than replacing a broken one, and a routine service before the summer lake season heads off most of it.',
    faqs: [
      {
        q: 'We only use our lake house on weekends. How do we keep the gate reliable?',
        a: 'Keep the battery on a charger or solar panel that can keep up while you are away, and have the opener serviced once a year, ideally before spring. That service clears nests and debris, checks photo eyes, lubricates hinges and rollers and tests the battery. Most weekend-home failures we see come from a gate sitting idle, not from heavy use.',
      },
      {
        q: 'Can you work on a gate when we are not at the property?',
        a: 'Often, yes, if the gate is accessible and you can give us a code or arrange access with a neighbor or property manager. We will call or message you with what we found and what it needs before doing anything beyond the agreed diagnosis, so you are not surprised by the bill.',
      },
    ],
  },

  // Sadler: sources: https://en.wikipedia.org/wiki/Sadler,_Texas, https://usgenwebsites.org/TXGrayson/ANewLand/Towns/Sadler/Sadler.html, https://atlas.thc.texas.gov/Details/5507016566, https://texomaconnect.com/lake-texoma-travel-guide/wpbdp_category/lake-texoma-horseback-riding/
  sadler: {
    zips: ['76264'],
    neighborhoods: ['Downtown Sadler', 'Big Mineral Road', 'FM 901 corridor', 'US 82 corridor'],
    landmarks: ['Big Mineral Equestrian Camp', 'Sadler Cemetery', 'Lake Texoma (Big Mineral arm)'],
    majorRoads: ['US 82', 'FM 901'],
    nearbyCities: ['whitesboro', 'pottsboro', 'sherman', 'collinsville', 'denison', 'gainesville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town of a few hundred people between US 82 and the Big Mineral side of Lake Texoma, surrounded by horse and cattle land',
      commonGateTypes: ['Ranch entrance swing', 'Pipe frame swing', 'Dual swing farm gate'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'Ghost Controls', 'LiftMaster'],
      commonIssues: [
        'Horse trailers needing wide openings and long open times',
        'Solar charging on gates far from the house',
        'Sandy ground letting posts settle',
        'Animals and machinery striking gate leaves',
      ],
    },
    localAngle:
      'Sadler had 336 residents in the 2020 census, and Big Mineral Road runs north from it toward the Big Mineral Equestrian Camp, where about 15 miles of trails follow creeks and the Lake Texoma shoreline. Horses are a real part of life around here, and they shape the gates. An entrance that has to pass a truck and a gooseneck trailer needs a wider opening and a longer hold-open time than a suburban drive, and an opener that closes too quickly can catch the trailer. Double swing farm gates on pipe frames are common, and they take abuse from animals and equipment. Being on the western side of Grayson County, a lot of the ground is lighter and sandier than the black clay further east, so posts tend to settle and lean rather than heave. For a ranch gate opener in Sadler we look first at the opening width, the timers and the posts before blaming the motor.',
    faqs: [
      {
        q: 'Our gate starts closing before the horse trailer is through. Can that be changed?',
        a: 'Yes. Most openers let you lengthen the auto-close timer or switch it off, and a vehicle sensor or exit loop can hold the gate open while anything is in the opening. On a wide double gate we also check that both leaves open far enough and in the right sequence so a long rig clears both.',
      },
      {
        q: 'Is it worth fitting a solar opener on a gate at the end of a long drive?',
        a: 'Usually, yes, if the panel gets full sun and the battery and panel are sized for the number of cycles you actually use. Trenching power down a long drive is expensive. We size solar for the winter worst case, not the summer average, and add a low-battery warning where the opener supports one.',
      },
    ],
  },

  // Sherman: sources: https://en.wikipedia.org/wiki/Sherman,_Texas, https://aaronlayman.com/tx/sherman/brookstone-garden-homes-add/3715-brookstone-drive/, https://homefinder.com/newhomecommunities/75092
  sherman: {
    zips: ['75090', '75092'],
    neighborhoods: ['Pebblebrook', 'Heritage Ranch', 'Sherman Heights', 'Bel Air Village', 'Canyon Creek Estates'],
    landmarks: ['Austin College', 'Grayson County Courthouse', 'Texas Instruments Sherman fab site', 'Downtown Sherman'],
    majorRoads: ['US 75', 'US 82', 'SH 56', 'SH 11'],
    nearbyCities: ['denison', 'howe', 'tom-bean', 'pottsboro', 'sadler', 'van-alstyne'],
    responseBand: '',
    gateProfile: {
      dominant: 'The Grayson County seat, with new semiconductor plants and industrial yards on one side and older neighborhoods and new subdivisions on the other',
      commonGateTypes: ['Industrial cantilever slide', 'Commercial slide', 'Residential swing'],
      commonBrands: ['LiftMaster', 'HySecurity', 'DoorKing', 'Elite'],
      commonIssues: [
        'High-cycle wear on contractor and industrial yard gates',
        'Loop detector faults at truck entrances',
        'Clay movement shifting posts and tracks',
        'Access control systems on multi-family entrances',
      ],
    },
    localAngle:
      'Sherman is the Grayson County seat and home to Austin College, but what has changed its gate work most is the semiconductor build-out on the west side of town, led by Texas Instruments. Large construction projects bring contractor laydown yards, equipment storage and supplier sites, and all of them want a secure commercial gate that opens for trucks many times a day. Those gates wear differently from a home driveway: rollers, chains and limit switches go first, and a loop detector that misses a truck will stop a whole line of deliveries. Away from the industrial side, the subdivisions in north and west Sherman sit on Blackland Prairie clay that swells in wet springs and shrinks in August, so residential swing gates drift out of alignment with the seasons. A commercial gate in Sherman and a home gate across town call for different diagnosis, and we treat them as separate jobs from the start.',
    faqs: [
      {
        q: 'Our yard gate on the west side opens dozens of times a day. What should we be using?',
        a: 'An operator rated for continuous or high-cycle duty, not a residential unit pushed beyond its design. On a busy truck gate a cantilever slide with a commercial operator and properly cut vehicle loops is the usual answer. We can assess what you have, its duty rating and the condition of the track or rollers before recommending repair or replacement.',
      },
      {
        q: 'Our home gate latches fine in spring and misses by summer. Why?',
        a: 'That pattern fits the clay soil under much of Sherman. As the ground dries out in summer it shrinks, posts tip slightly and the leaf drops or moves away from the latch, then much of it comes back when the rains return. We check post movement and hinge wear and adjust or reset as needed, rather than just moving the latch every season.',
      },
    ],
  },

  // Tioga: sources: https://en.wikipedia.org/wiki/Tioga,_Texas, https://www.tshaonline.org/handbook/entries/tioga-tx, https://www.dot.state.tx.us/tpp/hwy/FM/FM0121.htm, https://en.wikipedia.org/wiki/Special_routes_of_U.S._Route_377
  tioga: {
    zips: ['76271'],
    neighborhoods: ['Downtown Tioga', 'Business US 377 loop', 'FM 121 east of town', 'FM 922 area'],
    landmarks: ['Tioga Primitive Baptist Church', 'Gene Autry’s hometown', 'Former mineral water bathhouse sites'],
    majorRoads: ['US 377', 'Business US 377', 'FM 121', 'FM 922'],
    nearbyCities: ['collinsville', 'gunter', 'pilot-point', 'whitesboro', 'celina', 'van-alstyne'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small, fast-growing town in the south-west corner of Grayson County where ranches and new homes on acreage share US 377',
      commonGateTypes: ['Ranch entrance swing', 'Driveway slide', 'Estate swing'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Elite', 'Ghost Controls'],
      commonIssues: [
        'Sandy soil letting posts settle and lean',
        'Gates added to new homes on former ranch land',
        'Solar charging on gates set back from the house',
        'Wiring to the road chewed or cut on rural lots',
      ],
    },
    localAngle:
      'Tioga began in 1881 as a Texas and Pacific Railway water stop, became known for its mineral water in the 1880s, and later produced Gene Autry, who graduated from Tioga High School in 1925. Its population rose about 42 percent between 2010 and 2020, and most of that growth is new homes on acreage carved out of ranch land along US 377 and FM 121. Many of those properties add a driveway gate after the house is finished, and the gate is often set well back from the house at the road, so power and wiring become the first decision. The western side of Grayson County leans toward lighter, sandier ground than the clay further east, and posts set shallow in it tend to settle and lean under the weight of a heavy leaf. A good gate installation in Tioga starts with how deep the footings go and where the power comes from, and those two choices decide how much repair work the gate needs later.',
    faqs: [
      {
        q: 'Our gate post has started leaning toward the drive. Is that the soil?',
        a: 'It is often the footing. Lighter soils drain well but give a post less to hold onto, so a shallow or narrow footing carrying a heavy leaf slowly tips over. The fix is usually resetting the post in a deeper, wider footing, sometimes with a brace, then rehanging the gate and retuning the opener limits.',
      },
      {
        q: 'Should we run power to our gate or go solar?',
        a: 'It depends on distance, sun and use. If power is already nearby, a hard-wired opener with a battery backup is the most reliable. If the gate is hundreds of feet from the nearest supply, a properly sized solar setup usually costs less than trenching. We look at the run, the shade and how often the gate opens before suggesting either.',
      },
    ],
  },

  // Tom Bean: sources: https://en.wikipedia.org/wiki/Tom_Bean,_Texas, https://www.tshaonline.org/handbook/entries/tom-bean-tx
  'tom-bean': {
    zips: ['75489'],
    neighborhoods: ['Downtown Tom Bean', 'White Mound community', 'SH 11 corridor', 'FM 902 corridor'],
    landmarks: ['1906 brick commercial buildings downtown', 'Former Cotton Belt rail line', 'Tom Bean High School'],
    majorRoads: ['SH 11', 'FM 902', 'FM 2729'],
    nearbyCities: ['sherman', 'whitewright', 'howe', 'van-alstyne', 'denison', 'leonard'],
    responseBand: '',
    gateProfile: {
      dominant: 'An 1888 Cotton Belt railroad town on SH 11 surrounded by farmland and rural homes on the Blackland Prairie',
      commonGateTypes: ['Farm entrance swing', 'Residential swing', 'Pipe frame swing'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Black clay cracking and heaving around footings',
        'Mud and standing water at low gate openings',
        'Older openers with obsolete boards',
        'Remote range across open fields',
      ],
    },
    localAngle:
      'Tom Bean was founded on October 27, 1888, on a new branch of the Cotton Belt between Commerce and Sherman, and was named for the surveyor who donated land for the townsite. The cotton that built it grew in Blackland Prairie clay, and that same soil is still the hardest thing on gates around town. In a dry August it opens cracks wide enough to put a hand in; after a wet spring it swells and pushes posts out of line. A gate that closed square in April can bind on its latch by late summer. Rural homes off SH 11 and FM 902 also tend to have gates at low spots where water collects, so the operator base and wiring sit in mud for days after a storm. For swing gate repair in Tom Bean, we check the posts and drainage first, since an opener working against a gate that is out of square will burn out no matter how new it is.',
    faqs: [
      {
        q: 'Our gate binds every summer and frees up after the rain. What is happening?',
        a: 'That is the clay moving. As it dries it shrinks and posts tilt slightly, changing the gap at the latch and the hinge alignment, then it swells back when wet. Small seasonal movement can be handled with adjustable hinges and latch hardware. If the post moves a lot, it may need a deeper footing that reaches more stable ground.',
      },
      {
        q: 'Do you service older gate openers that other companies will not touch?',
        a: 'We will always look at them. Many older operators have sound motors and gearboxes but discontinued control boards. In many cases a universal or current board can be fitted, along with new safety sensors, for much less than a full replacement. If parts truly cannot be found, we explain the options honestly rather than force a swap.',
      },
    ],
  },

  // Van Alstyne: sources: https://en.wikipedia.org/wiki/Van_Alstyne,_Texas, https://aaronlayman.com/tx/van-alstyne/georgetown-village-ii/1704-southridge-drive, https://www.businesswire.com/news/home/20240305406934/en/Texas%E2%80%99-Hidden-Gem-Cambridge-Homes-Introduces-Tinsley-Meadows-and-Rolling-Ridge-in-Van-Alstyne-Tailored-for-First-Time-Buyers
  'van-alstyne': {
    zips: ['75495'],
    neighborhoods: ['Georgetown Village', 'Georgetown Meadows', 'Georgetown Heights', 'Tinsley Meadows', 'Rolling Ridge', 'Downtown Van Alstyne'],
    landmarks: ['Grayson College South Campus', 'Historic downtown Van Alstyne', 'US 75 exits 50 and 51'],
    majorRoads: ['US 75', 'SH 5', 'FM 121'],
    nearbyCities: ['howe', 'anna', 'gunter', 'westminster', 'melissa', 'sherman'],
    responseBand: '',
    gateProfile: {
      dominant: 'An 1873 railroad town on US 75 turning quickly into a commuter city, with new subdivisions next to farms and acreage',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'Linear'],
      commonIssues: [
        'Clay soil moving posts on new builds',
        'Remotes and keypads that need reprogramming after a move',
        'Builder-grade openers on heavy aftermarket gates',
        'Power and wiring added after construction',
      ],
    },
    localAngle:
      'Van Alstyne was founded in 1873 by settlers from nearby Mantua who moved to the Houston and Texas Central line, and it grew from 3,046 people in 2010 to 4,369 in 2020 as US 75 pulled commuters north from Collin County. Many new homes here change hands within a few years, and the gate on a resale is often a mystery to the new owner: no manual, remotes that belong to the previous family and a keypad code nobody remembers. Just as often, a homeowner adds a heavy iron gate to a lot that was never wired for one, and the opener picked to fit the budget is too light for the leaf. Both problems show up as a gate that hesitates or reverses. A good share of gate opener repair in Van Alstyne is matching the operator to the gate it actually moves and getting the access devices properly set up again.',
    faqs: [
      {
        q: 'We bought a house with a gate and have no remotes or codes. Can you help?',
        a: 'Yes. We identify the operator and receiver, clear the old remotes and codes out of memory so previous owners no longer have access, and program new remotes and a keypad code for you. While we are there we check the safety sensors and limits, since a gate that has sat with an empty house often needs adjusting.',
      },
      {
        q: 'Is our opener big enough for the iron gate we added?',
        a: 'That depends on the leaf weight and length, not just the opener brand. Many residential openers are rated for lighter gates than the iron leaves people fit later, and they work at first, then wear fast or start reversing. We can weigh up the gate against the operator rating and tell you whether to keep it, adjust it or upgrade it.',
      },
    ],
  },

  // Whitewright: sources: https://en.wikipedia.org/wiki/Whitewright,_Texas, https://www.dot.state.tx.us/tpp/hwy/FM/FM0121.htm
  whitewright: {
    zips: ['75491'],
    neighborhoods: ['Downtown Whitewright', 'Fannin County side of town', 'US 69 and SH 11 corridor', 'FM 121 south of town'],
    landmarks: ['Historic downtown Whitewright', 'Former First National Bank of Whitewright', 'Katy railroad line'],
    majorRoads: ['US 69', 'SH 11', 'SH 160', 'FM 121'],
    nearbyCities: ['tom-bean', 'leonard', 'sherman', 'van-alstyne', 'bonham', 'westminster'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small 1878 railroad town straddling the Grayson and Fannin county line, surrounded by farms and rural homes',
      commonGateTypes: ['Farm entrance swing', 'Residential swing', 'Commercial slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Mighty Mule', 'DoorKing'],
      commonIssues: [
        'Clay heave tilting posts on rural entrances',
        'Worn hinges on heavy farm gates',
        'Surge damage from storms across open country',
        'Older commercial gates on downtown and shop properties',
      ],
    },
    localAngle:
      'Whitewright was founded in 1878 by New York investor William Whitewright Jr. along the Katy railroad, and it is one of the few towns in the area split between two counties, with a small part reaching east into Fannin. Its business district burned in June 1911 and was rebuilt in brick, and the town later became known for the Quedlinburg treasures that a returning soldier stored in the local bank. Gate work here is mostly rural: farm and home entrances on the clay around US 69, SH 11 and FM 121, plus a few commercial gates on shops and yards. Heavy farm gates hung on old hinges and posts set in shrinking clay are the usual troublemakers. If you are calling about automatic gate repair in Whitewright, tell us which side of the county line you are on; we cover both, but it helps us plan the route and any county road access.',
    faqs: [
      {
        q: 'We are on the Fannin County side of Whitewright. Do you still cover us?',
        a: 'Yes. We cover Whitewright on both sides of the county line, along with the farms and homes around it in Grayson and Fannin counties. When you call, the road name and nearest crossroad are more useful to us than the county, since rural addresses can be hard to pin down on a map.',
      },
      {
        q: 'Our farm gate is heavy and sags. Can an opener still be added?',
        a: 'Usually, once the sag is fixed. An opener should never be used to hold up a gate. We first get the leaf hanging true, which may mean new hinges, a reset post or bracing, then fit an operator rated for its weight and length. Skipping that first step is the quickest way to wear out a new opener.',
      },
    ],
  },

  // Whitesboro: sources: https://en.wikipedia.org/wiki/Whitesboro,_Texas, https://www.kxii.com/2025/10/19/whitesboro-peanut-festival-cracks-another-year-despite-bad-weather, https://www.agapeandassociates.com/property/tx/76273/whitesboro/horsemans-ranch/000-county-road-1258/6877ddbd1d8ef26324041d83/
  whitesboro: {
    zips: ['76273'],
    neighborhoods: ['Horseman’s Ranch', 'Downtown Whitesboro', 'US 377 south horse country', 'SH 56 corridor'],
    landmarks: ['Downtown Whitesboro (home of the Peanut Festival)', 'Trolinger Park', 'Younger Sullivan House', 'Butterfield Overland Mail Diamond Station site'],
    majorRoads: ['US 82', 'US 377', 'SH 56', 'FM 901'],
    nearbyCities: ['sadler', 'collinsville', 'gainesville', 'tioga', 'callisburg', 'sherman'],
    responseBand: '',
    gateProfile: {
      dominant: 'A historic stagecoach-stop town at US 82 and US 377 surrounded by established horse ranches and equestrian acreage',
      commonGateTypes: ['Ranch entrance swing', 'Estate swing', 'Driveway slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Elite', 'Ghost Controls'],
      commonIssues: [
        'Wide entrances for trucks and horse trailers',
        'Heavy decorative ranch entrance gates on tall posts',
        'Long drives needing solar or long wire runs',
        'Posts settling in lighter western Grayson County soils',
      ],
    },
    localAngle:
      'Whitesboro’s history goes back to 1848, and from 1858 to 1861 the Butterfield Overland Mail stopped at Ambrose White’s inn, known as Diamond Station. The ranching that followed never left. South of town along US 377 there are established horse ranches and equestrian communities such as Horseman’s Ranch, and their entrances are often the most demanding gates in the county: wide dual leaves, heavy decorative iron with a ranch name worked into it, tall stone or pipe columns, and a gate that has to pass a truck towing a long trailer. A heavy leaf on a tall post puts real leverage on the footing, and when the post moves even slightly the gate drops and the opener starts to strain. For a ranch or driveway gate in Whitesboro, we look at post plumb, hinge wear and the operator rating against the actual weight of the leaf before we ever replace a motor or board.',
    faqs: [
      {
        q: 'We have a heavy iron ranch entrance with our name on it. Can it be automated?',
        a: 'Usually, yes, but it has to be treated as a heavy gate from the start. We weigh up the leaf size and weight, check that the posts and hinges can carry it without moving, and choose an operator rated well above the load. Decorative entrances often need heavier hinges or reinforced posts before an opener is fitted, or it will not last.',
      },
      {
        q: 'Can our gate stay open long enough for a truck and trailer to get through?',
        a: 'Yes. The close timer can be lengthened or switched off, and a vehicle exit sensor or loop can hold the gate while anything is in the opening. On a wide dual gate we also make sure both leaves open fully and in sequence so the trailer does not clip one on the way through.',
      },
    ],
  },

  // Bonham: sources: https://en.wikipedia.org/wiki/Bonham,_Texas, https://www.fannincountyhistory.org/sam-rayburn-library-and-museum, https://cityofbonham.org/341/Area-Attractions, https://www.twdb.texas.gov/surfacewater/rivers/reservoirs/bois_darc/index.asp, https://www.ketr.org/news/2024-04-18/bois-darc-lake-the-first-new-major-texas-reservoir-in-more-than-30-years-opens-to-public
  bonham: {
    zips: ['75418'],
    neighborhoods: ['Downtown Bonham courthouse square', 'Bonham State Park area', 'Lake Bonham area', 'Bois d’Arc Lake area', 'Fort Inglish Park area'],
    landmarks: ['Sam Rayburn Library and Museum', 'Fannin County Courthouse', 'Fort Inglish Park', 'Bonham State Park'],
    majorRoads: ['US 82', 'SH 78', 'SH 56', 'SH 121'],
    nearbyCities: ['leonard', 'whitewright', 'tom-bean', 'sherman', 'celeste', 'denison'],
    responseBand: '',
    gateProfile: {
      dominant: 'The Fannin County seat, a historic town of about 10,000 surrounded by farmland, with new lake property opening up around Bois d’Arc Lake',
      commonGateTypes: ['Farm entrance swing', 'Residential swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Ghost Controls'],
      commonIssues: [
        'New gates on lake and acreage properties far from power',
        'Clay movement shifting posts',
        'Older commercial gates on county and business properties',
        'Storm surge damage to control boards',
      ],
    },
    localAngle:
      'Bonham was settled in 1837 and named for James Butler Bonham, who died at the Alamo, and it is the Fannin County seat and the home of the Sam Rayburn Library and Museum. For decades the gate work around it was farms, a few commercial yards and homes in town. Bois d’Arc Lake has added something new. The reservoir, about 10 miles northeast of town near US 82, opened to the public in 2024 and is the first major new Texas reservoir in more than 30 years, and land around it is being divided into lake getaways and acreage homes. Those properties usually need a gate installation from scratch, often at the end of a long drive with no power at the road. Getting the opener, the power supply and the footings right on day one costs far less than fixing them later, and that is the conversation we most often have with new owners near the lake.',
    faqs: [
      {
        q: 'We bought acreage near Bois d’Arc Lake. What should we think about before installing a gate?',
        a: 'Three things: power, footings and access. Decide whether you will trench power or go solar, since that affects the opener choice. Set posts deep enough for the clay and the gate weight. And think about who needs in, whether family, deliveries or contractors, so the keypad or remote setup fits how you will use the place.',
      },
      {
        q: 'Do you work on commercial gates in Bonham as well as homes?',
        a: 'Yes. We service commercial slide and swing gates, barrier arms and access control on businesses, yards and other properties in and around Bonham, as well as residential and farm gates. If you can tell us the operator brand and what the gate is doing when you call, it helps us bring the right parts.',
      },
    ],
  },

  // Leonard: sources: https://en.wikipedia.org/wiki/Leonard,_Texas, https://www.hmdb.org/m.asp?m=161909, https://texasescapes.com/CentralTexasTownsNorth/Leonard-Texas.htm, https://leonardchamber.com/history/
  leonard: {
    zips: ['75452'],
    neighborhoods: ['Downtown Leonard town square', 'SH 78 corridor', 'US 69 corridor', 'Farmland south and west of town'],
    landmarks: ['Leonard town square', 'Museum on the town square', 'Former Katy railroad depot site'],
    majorRoads: ['US 69', 'SH 78'],
    nearbyCities: ['westminster', 'whitewright', 'blue-ridge', 'bonham', 'celeste', 'farmersville'],
    responseBand: '',
    gateProfile: {
      dominant: 'An 1880 railroad town of about 2,000 at US 69 and SH 78, surrounded by farms and rural homes on the Blackland Prairie',
      commonGateTypes: ['Farm entrance swing', 'Residential swing', 'Pipe frame swing'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Clay heave and shrink moving gate posts',
        'Solar batteries on rural gates reaching end of life',
        'Wind and storm damage across open farmland',
        'Fire ant colonies in operator housings',
      ],
    },
    localAngle:
      'Leonard was laid out in 1880 when the Missouri, Kansas and Texas Railroad came through and the Leonard heirs platted a 100-acre townsite, donating land for the depot, the streets and the town square that still sits at its center. The town calls itself the "Biggest little town in Northeast Texas," and the land around it is mostly open Blackland Prairie farmland, where gates face two steady enemies. The first is the clay, which shrinks and cracks in summer and swells in a wet spring, pushing posts out of line. The second is fire ants, which pack into warm, dry operator housings and can short out boards and limit switches. A gate that stops halfway or ignores its remote is often an ant problem, not a motor problem. When you call about gate motor trouble in Leonard, we open the housing first and check for nests and moisture before condemning parts.',
    faqs: [
      {
        q: 'We found fire ants inside our gate opener. Did they cause it to fail?',
        a: 'Quite possibly. Ants are drawn to the warmth and electrical fields in an operator, and a large colony can bridge contacts on the board or jam limit switches. We clear the nest, clean and test the board and switches, and replace only what has actually been damaged. Treating around the base and sealing entry points helps keep them out.',
      },
      {
        q: 'Our place is several miles outside Leonard. Is that within your area?',
        a: 'Yes, rural Fannin County around Leonard is within the area we cover. Give us the road name and the nearest crossroad or a landmark when you call. Farm addresses do not always show up correctly on maps, and that small detail saves time getting to you. If the gate is locked or coded, let us know how we can reach the operator.',
      },
    ],
  },

  // Copeville: sources: https://en.wikipedia.org/wiki/Copeville,_Texas
  copeville: {
    zips: ['75121'],
    neighborhoods: ['Downtown Copeville', 'SH 78 corridor', 'Lavon Lake east shore', 'FM 1778 corridor'],
    landmarks: ['Lavon Lake', 'Collin County Outer Loop (FM 1778)', 'Former Santa Fe rail line'],
    majorRoads: ['SH 78', 'FM 1778'],
    nearbyCities: ['farmersville', 'josephine', 'nevada', 'lavon', 'princeton', 'blue-ridge'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small unincorporated community near the east shore of Lavon Lake on SH 78, with acreage homes and farm entrances',
      commonGateTypes: ['Ranch entrance swing', 'Driveway slide', 'Pipe frame swing'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ghost Controls', 'Mighty Mule'],
      commonIssues: [
        'Wind and storm damage on exposed gates',
        'Clay soils shifting posts near the lake',
        'Long drives relying on solar power',
        'Debris and mud in slide tracks after heavy rain',
      ],
    },
    localAngle:
      'Copeville was named for early settler Miles Cope, surveyed in 1877, and moved its homes and stores toward the Gulf, Colorado and Santa Fe tracks after they arrived in 1886. It sits near the eastern shore of Lavon Lake and has been hit by serious storms, including an F3 tornado in 1959 and an EF2 in December 2015 that destroyed a gas station and killed two people. That exposure matters for gates. Acreage around Copeville is open and flat, and a wide driveway gate here takes the full force of storm winds, so we see bent leaves, sprung hinges and openers ripped off their brackets after severe weather. The clay near the lake also stays wet a long time after heavy rain. A sliding gate in Copeville needs a track that drains and is cleared regularly, or mud and debris will stop it long before the motor wears out.',
    faqs: [
      {
        q: 'Our gate was damaged in a storm. Is it worth repairing?',
        a: 'Often it is. Bent leaves can sometimes be straightened or a section replaced, and hinges, brackets and operator arms are replaceable parts. The opener itself may be fine or may only need a new board if it took a surge. We assess the frame, posts and operator separately and tell you plainly whether repair or replacement makes more sense.',
      },
      {
        q: 'Is Copeville too far out for you to service?',
        a: 'No. Copeville and the countryside around Lavon Lake and Farmersville are part of the area we cover. Many properties here are on county roads with addresses that do not map well, so please give us the nearest crossroad or a landmark when you call. A photo of the gate and opener sent ahead of time also helps us plan.',
      },
    ],
  },

  // Josephine: sources: https://en.wikipedia.org/wiki/Josephine,_Texas, https://aaronlayman.com/tx/josephine/riverfield/1412-waveless-run/, https://aaronlayman.com/tx/josephine/magnolia-ph-3/714-windmill-street, https://www.landbrokermls.com/brokers/145429, https://www.redfin.com/sitemap/30864/TX/Collin-County/Josephine/street/Fm+6
  josephine: {
    zips: ['75164', '75189'],
    neighborhoods: ['Magnolia Pointe', 'Riverfield', 'Downtown Josephine', 'FM 6 corridor'],
    landmarks: ['Josephine City Park', 'FM 6 and FM 1777 crossroads', 'Downtown Cook Street'],
    majorRoads: ['FM 6', 'FM 1777'],
    nearbyCities: ['nevada', 'copeville', 'lavon', 'royse-city', 'caddo-mills', 'farmersville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small 1888 town in eastern Collin County growing quickly as large builder subdivisions spread across former farmland',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Farm entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Linear', 'Elite'],
      commonIssues: [
        'Clay soils moving posts on new construction',
        'Gates added to homes built without wiring for them',
        'Low-lying lots near creek floodplain staying wet',
        'Remote and keypad programming for new owners',
      ],
    },
    localAngle:
      'Josephine was established in 1888 and incorporated in 1955, and it grew from 812 people in 2010 to 2,119 in 2020, mostly through large builder subdivisions like Magnolia Pointe and Riverfield on former farmland off FM 6 and FM 1777. That growth shapes the gate work. Builders here rarely install gates, so a homeowner adds one later and discovers there is no conduit or power where the opener needs to go. Some of the land around Riverfield includes creek floodplain, and low lots on Blackland Prairie clay stay soft long after a storm, which can let a newly set post tilt before the concrete has properly cured. A gate installation in Josephine goes better when power is planned before the drive is finished and the footings are set deep in firm ground, and both of those are cheaper to get right first than to fix afterward.',
    faqs: [
      {
        q: 'Our house was not built with power at the driveway. Can we still have an automatic gate?',
        a: 'Yes. The options are trenching a line from the house or garage, which may mean cutting across a finished drive, or a solar opener with a battery. On a typical suburban lot solar often works well if the panel gets good sun. We look at the distance and the layout of your drive and price both options honestly.',
      },
      {
        q: 'We live in one of the new subdivisions. Are gates allowed?',
        a: 'That depends on your HOA rules and any city requirements, so check with the HOA before ordering anything. Many associations set rules on height, style, setback and color. Once you know what is allowed, we can recommend a gate and opener that fits within those rules and your drive. Getting approval in writing first avoids having to change a finished gate later.',
      },
    ],
  },

  // Westminster: sources: https://en.wikipedia.org/wiki/Westminster,_Texas
  westminster: {
    zips: ['75485'],
    neighborhoods: ['Old Westminster townsite', 'FM 3133 corridor', 'FM 2862 corridor', 'Farmland toward Anna'],
    landmarks: ['Former Westminster College site', 'FM 3133 and FM 2862 crossroads'],
    majorRoads: ['FM 3133', 'FM 2862'],
    nearbyCities: ['anna', 'blue-ridge', 'van-alstyne', 'melissa', 'leonard', 'princeton'],
    responseBand: '',
    gateProfile: {
      dominant: 'A former incorporated town in north-east Collin County, now an unincorporated community of farms and rural homes on acreage',
      commonGateTypes: ['Ranch entrance swing', 'Pipe frame swing', 'Driveway slide'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'Ghost Controls', 'LiftMaster'],
      commonIssues: [
        'Solar gates on long rural drives',
        'Black clay moving posts with the seasons',
        'Livestock and equipment damage',
        'Remote and keypad range at long setbacks',
      ],
    },
    localAngle:
      'Westminster began as Seven Points in 1860, took its name from a Methodist college that grew out of an 1888 private school, and was incorporated in 1916 before residents voted to dissolve the town charter in 2005. Today it is an unincorporated community at FM 3133 and FM 2862 with about 1,035 residents, and most homes sit on acreage among farmland. Gates here are mostly ranch and farm entrances set well back from the house, often solar powered and often on posts in black clay that shifts with the seasons. Because Westminster is unincorporated, there is no city permit office, but the property still answers to county rules, deed restrictions and any easements on the drive. For gate installation in Westminster, we confirm the setback and any utility easements before digging, then size solar and set posts for the conditions on that particular property.',
    faqs: [
      {
        q: 'Westminster is unincorporated. Do we need a permit for a gate?',
        a: 'There is no city permit, but county rules, deed restrictions or HOA covenants may still apply, and utility easements along the road need to be respected. We check for buried lines before digging and keep the gate set back far enough that a vehicle can pull off the road while it opens, which is safer on rural roads.',
      },
      {
        q: 'Our remote only works when we are almost at the gate. Can range be improved?',
        a: 'Usually, yes. Range depends on the receiver, the antenna position and anything blocking the signal. Mounting the antenna higher and clear of metal, upgrading the receiver or adding a long-range remote often makes a big difference. A keypad on a post at the road is another option for visitors, and it saves handing out remotes to every regular caller.',
      },
    ],
  },

  // Alvord: sources: https://www.tshaonline.org/handbook/entries/alvord-tx, https://en.wikipedia.org/wiki/Alvord,_Texas, https://atlas.thc.texas.gov/Details/5497012699, https://aaronlayman.com/tx/alvord/original-alvord/711-denver-street (subdivision names), TxDOT FM 1655 designation file
  alvord: {
    zips: ['76225'],
    neighborhoods: ['Original Alvord townsite', 'Whispering Winds Estates', 'Grand Oaks Estates', 'Monroe Hill Estates', 'FM 1655 corridor'],
    landmarks: ['City of Alvord historical marker, West Elm Street', 'Ernest O. Thompson birthplace marker', 'US 287 bypass'],
    majorRoads: ['US 287', 'US 81', 'FM 1655', 'FM 2265'],
    nearbyCities: ['chico', 'decatur', 'bridgeport', 'paradise', 'bowie'],
    responseBand: '',
    gateProfile: {
      dominant: 'Farm and ranch country in north-east Wise County, where most gates sit at the end of a county road or on US 287 frontage rather than on a town lot',
      commonGateTypes: ['Ranch entrance swing', 'Wide pipe farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Solar batteries that no longer hold a charge through winter',
        'Livestock leaning on or rubbing against a closed leaf',
        'Long wire runs to keypads and call boxes damaged by mowing or grazing',
        'Hinge wear on heavy pipe gates that were never built for an operator',
      ],
    },
    localAngle:
      'Alvord was first called Nina and took its present name in 1882, after the president of the Fort Worth and Denver Railway, and for much of the next century it was a trading town for watermelon farms and cattle ranches. The town itself covers barely a square mile and a half, so almost all the gate work here is out on the land: entrances off FM 1655, FM 2265 and the county roads, and frontage along US 287. Those gates have a particular history. A lot of them started life as a plain pipe ranch gate that was hung for a person on foot, and an operator was bolted on years later. That is where most gate opener repair in Alvord begins, because hinges, posts and latches sized for hand use wear quickly once a motor is driving them several times a day. The other regular culprit is power. Entrances this far from the house usually run on solar, and a battery that coped in August can fail on the first run of short, cloudy winter days.',
    faqs: [
      {
        q: 'Our ranch gate was hung by hand years ago and we added an opener later. Why does it keep wearing out?',
        a: 'Because the gate was never built for it. A pipe gate swung by hand a few times a week sees very little load at the hinges. Put an operator on it and every cycle pushes the full weight of the leaf through hinges and a post that were sized for much less. We usually check the post, the hinge pins and whether the leaf has sagged before touching the operator, since a motor fighting a dragging gate fails early no matter what brand it is.',
      },
      {
        q: 'Is solar reliable enough for a gate a long way from the house?',
        a: 'Yes, provided the panel and battery are sized for the real number of daily cycles and for winter light, not summer. Most solar complaints we see are a battery near the end of its life or a panel shaded by brush that has grown up around it. Both are cheap to fix compared with trenching power out to the road. If your gate slows down or stops in the late afternoon, the battery is the first thing to test.',
      },
    ],
  },

  // Aurora: sources: https://www.tshaonline.org/handbook/entries/aurora-tx-wise-county, https://en.wikipedia.org/wiki/Aurora,_Texas, https://aaronlayman.com/tx/aurora/aurora-vista-ph-2/504-w-aurora-vista-trail (Aurora Vista, septic, acreage), https://texasstandard.org/stories/nearly-120-years-after-alleged-ufo-crash-small-texas-town-is-all-about-aliens/
  aurora: {
    zips: ['76078'],
    neighborhoods: ['Aurora Vista', 'Aurora Vista Phase 2', 'Historic Aurora townsite', 'SH 114 corridor'],
    landmarks: ['Aurora Cemetery', 'Aurora Cemetery historical marker'],
    majorRoads: ['SH 114', 'FM 718', 'US 287 (via Rhome)'],
    nearbyCities: ['rhome', 'boyd', 'newark', 'new-fairview', 'haslet', 'decatur'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small, largely owner-occupied residential town of custom homes on one to two acre lots, close enough to Fort Worth to commute',
      commonGateTypes: ['Ornamental iron swing', 'Dual-leaf estate swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'Viking'],
      commonIssues: [
        'Dual leaves drifting out of sync so they no longer meet',
        'Photo-eye and safety edge faults on residential drives',
        'Underground loop or wiring damage near septic and irrigation work',
        'Keypads and remotes that stop working after a power surge',
      ],
    },
    localAngle:
      'Aurora incorporated in 1882, lost most of its people after an 1888 spotted fever outbreak and a railroad that went to Rhome instead, and was probably saved by SH 114 being built through it in 1939. It is better known for an 1897 Dallas Morning News story about an airship crashing near town, but the modern Aurora is a quiet commuter town where close to nine in ten homes are owner-occupied. The housing that matters for gates is the custom-home acreage such as Aurora Vista, where lots run from about one to two acres and the house sits well back from the road. Those properties tend to have ornamental iron dual-leaf gates, and that is where most driveway gate calls here come from: two leaves that have drifted so they no longer meet in the middle, or a safety sensor that trips for no obvious reason. On acreage with septic and irrigation, it is also worth knowing where the gate wiring runs before anyone digs, because a cut loop wire looks exactly like a failed control board until someone traces it.',
    faqs: [
      {
        q: 'Our two gate leaves no longer close evenly. One stops short. What causes that?',
        a: 'On a dual-leaf ornamental gate it is usually one of three things: a hinge or post that has moved slightly on one side, a limit setting that has drifted, or the two operators no longer being matched in force and timing. We check the hardware first, because resetting limits on a leaf that has dropped only hides the problem until it gets worse. Once both leaves hang true, the operator settings can be matched again.',
      },
      {
        q: 'We are having septic work done near the driveway. Should we worry about the gate?',
        a: 'It is worth a quick check. Gate power, loop detectors and keypad wiring are often buried along the edge of the drive, and they are easy to cut with a trencher or a backhoe. If the gate starts behaving oddly after any digging, a damaged wire is the first suspect. Marking the runs before work starts is far cheaper than finding them afterwards.',
      },
    ],
  },

  // Boyd: sources: https://www.tshaonline.org/handbook/entries/boyd-tx-wise-county, https://en.wikipedia.org/wiki/Boyd,_Texas, https://aaronlayman.com/tx/boyd/trinity-mdws/182-briar-patch-road/ and related Boyd listing pages (subdivision names), FM 730 per aaroads.com/guides/us-287-north-decatur-tx
  boyd: {
    zips: ['76023'],
    neighborhoods: ['Original Boyd townsite', 'Trinity Meadows', 'Springhill Addition', 'Prosperity Estates'],
    landmarks: ['Trinity River bend', 'Former Rock Island rail line', 'Boyd ISD campus'],
    majorRoads: ['SH 114', 'FM 730', 'FM 51'],
    nearbyCities: ['aurora', 'rhome', 'newark', 'briar', 'paradise', 'decatur'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad-era farm town in a bend of the Trinity River, now ringed by acreage homes and small subdivisions on the county roads',
      commonGateTypes: ['Residential swing', 'Ranch entrance swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Mighty Mule', 'Elite'],
      commonIssues: [
        'Operators and control boxes mounted low enough to take on water',
        'Posts loosening in ground that stays wet after heavy rain',
        'Lightning and surge damage to boards on exposed rural lines',
        'Slide tracks fouled by mud and debris',
      ],
    },
    localAngle:
      'Boyd sits in a bend of the Trinity River in southern Wise County, and the farmers who settled it in the early 1890s called it Greasy Bend after the hogs that were fattened there. The Rock Island railroad brought the name Boyd in 1893, and by the late 1950s the town was already sending commuters to Fort Worth. What the river bend means for gates is mostly about water. Property on lower ground can stay wet for days after a heavy storm, and that does two things. It softens the ground around a post, so a swing gate that hung true all summer can start to drag after a wet spring. And it finds anything mounted close to the ground. An operator or control box set low beside the drive, which is common on older installations, is the first thing to suffer. A lot of automatic gate repair in Boyd comes down to one question asked after the fact: where does the water go when it rains hard, and what is sitting in its path?',
    faqs: [
      {
        q: 'Our gate stopped working after a big storm. Is the motor ruined?',
        a: 'Not necessarily. After heavy rain the most common faults are water in the control box, a tripped or surged board, or a wet connection at the keypad or loop. Many of those can be dried out, repaired or replaced without changing the operator itself. If your equipment sits low beside the drive, it is worth raising it or adding a proper enclosure while we are there, so the next storm does not repeat the job.',
      },
      {
        q: 'Do you work on gates out on the county roads around Boyd, not just in town?',
        a: 'Yes. Most of the gates around Boyd are outside the town limits on acreage and county roads, and that is normal work for us. When you call, give us the road name and the nearest crossroad, and tell us whether the gate is solar or on mains power. That helps us bring the right parts the first time.',
      },
    ],
  },

  // Bridgeport: sources: https://www.tshaonline.org/handbook/entries/bridgeport-tx, https://en.wikipedia.org/wiki/Bridgeport,_Texas, https://wisehistory.com/site/bridgeport-coal-mines/, https://www.martinmarietta.com/locations/southwest/north-texas-oklahoma-district/bridgeport-stone, https://www.drhorton.com/texas/fort-worth/bridgeport/dry-creek, listing pages for Cimmarron Bay and Hillside Estates
  bridgeport: {
    zips: ['76426'],
    neighborhoods: ['Downtown Bridgeport', 'Dry Creek', 'Cimmarron Bay', 'Hillside Estates', 'Lake Bridgeport Private Estates'],
    landmarks: ['Lake Bridgeport', 'Bridgeport Heritage Museum', 'Martin Marietta Bridgeport Stone quarry', 'West Fork of the Trinity River'],
    majorRoads: ['SH 114', 'US 380', 'SH 101', 'FM 1658'],
    nearbyCities: ['paradise', 'chico', 'decatur', 'alvord', 'boyd'],
    responseBand: '',
    gateProfile: {
      dominant: 'An old coal and stone town with working quarries and truck traffic on one side and lake-lot subdivisions on the other',
      commonGateTypes: ['Commercial slide', 'Cantilever slide', 'Residential swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'HySecurity', 'Elite'],
      commonIssues: [
        'Dust on photo-eyes and slide rollers along haul routes',
        'Heavy-duty commercial gates hit by trucks or trailers',
        'High-cycle wear on yard and site entrances',
        'Lake-lot gates on hilly, uneven drives',
      ],
    },
    localAngle:
      'Bridgeport was chartered in 1860 to bridge the West Fork of the Trinity River, and for about forty years after coal was found here in the 1880s the Wise County Coal Company was one of the leading bituminous producers in Texas. The mines closed in 1929, Lake Bridgeport was completed in 1931, and crushed stone for road building took over. Martin Marietta still runs rail-served limestone quarries here. That industrial side shapes a lot of the commercial gate work in Bridgeport. Yard, quarry and contractor entrances see heavy trucks, long trailers and dust, and the failures follow from that: a slide gate clipped by a trailer swinging wide, photo-eyes that stop seeing through a film of fine grit, and rollers that wear early because the track never stays clean. The residential side is different again. West of town, lake-lot subdivisions sit on hilly, wooded ground above the water, where the problem is usually a drive that is not level under the gate.',
    faqs: [
      {
        q: 'Our yard gate keeps faulting and the photo-eyes look dirty. Is that connected?',
        a: 'Very likely. On sites with truck traffic and stone dust, photo-eye lenses and reflectors get a fine film that weakens the beam until the gate starts reversing or refusing to close. Cleaning helps for a while, but if it keeps happening we look at moving the sensors, shielding them, or switching to a type that copes better with dust. We also check the rollers and track, since the same grit wears them.',
      },
      {
        q: 'A truck hit our commercial slide gate. Can it be repaired or does it need replacing?',
        a: 'It depends on what took the hit. A bent panel can often be straightened or replaced on its own, and rollers, guides and limit switches are usually separate parts. The operator may be fine if the gate stopped rather than being dragged. We check the frame for twist first, because a slide gate that is out of line will damage a new operator quickly.',
      },
    ],
  },

  // Briar: sources: https://en.wikipedia.org/wiki/Briar,_Texas, https://www.apartmentlist.com/city-guide/tx/briar (Eagle Mountain Acres, West Bay Marina area), https://www.redfin.com/city/30857/TX/Briar/waterfront, https://www.trulia.com/home/7401-briar-rd-azle-tx-76020-112175194, FM 730 via https://www.alluvitmedia.com/inventory/76020/52698.php
  briar: {
    zips: ['76020', '76023', '76179'],
    neighborhoods: ['Eagle Mountain Lake west shore', 'Eagle Mountain Acres', 'West Bay Marina area', 'Briar Road corridor', 'Pelican Bay area'],
    landmarks: ['Eagle Mountain Lake', 'West Bay Marina'],
    majorRoads: ['FM 730', 'Briar Road', 'Knob Hill Road', 'SH 199 (to the south)'],
    nearbyCities: ['newark', 'aurora', 'boyd', 'azle', 'springtown', 'rhome'],
    responseBand: '',
    gateProfile: {
      dominant: 'An unincorporated lake community spread across Tarrant, Wise and Parker counties, mixing waterfront lots with multi-acre tracts',
      commonGateTypes: ['Driveway slide', 'Ranch entrance swing', 'Residential swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Viking', 'Ghost Controls'],
      commonIssues: [
        'Corrosion on hardware and boards on lakeside lots',
        'Solar entrances on multi-acre tracts',
        'Insects and moisture inside control boxes',
        'Remotes and keypads failing on gates far from the house',
      ],
    },
    localAngle:
      'Briar is not a city. It was incorporated before the 1970 census, later disincorporated, and is now a census-designated place of about twenty-two square miles on the west side of Eagle Mountain Lake, spread across Tarrant, Wise and Parker counties. Its population has grown roughly tenfold since 1970. Because there is no Briar post office, owners have Azle, Boyd or Fort Worth addresses, which is worth knowing when you call: tell us the road and the nearest crossing rather than the town on your mail. The gates here split into two kinds. Waterfront and near-lake lots have smaller residential gates that live in damp air off the water, so corrosion on hinges, chains and circuit boards comes up more than it does a few miles inland. Further from the shore, on tracts along Briar Road and FM 730 that can run past ten acres, the work looks more like ranch country: long drives, solar power and keypads a long way from the house.',
    faqs: [
      {
        q: 'Our address says Azle but we are in Briar. Do you cover us?',
        a: 'Yes. Briar has no post office of its own, so homes there carry Azle, Boyd or Fort Worth addresses depending on which side of the lake they sit. What helps us is the road name, the nearest crossroad and whether you are on a lakefront lot or acreage. That tells us what kind of gate and access to expect before we arrive.',
      },
      {
        q: 'Does living near the lake really affect a gate opener?',
        a: 'It can. Lakeside air keeps hardware damp for longer, and a sealed control box that has a cracked gasket or an open conduit will gather moisture and insects. The usual result is corrosion on terminals and relays, which shows up as intermittent faults rather than a clean failure. Keeping the enclosure sealed and checking the board connections once a year prevents most of it.',
      },
    ],
  },

  // Chico: sources: https://www.tshaonline.org/handbook/entries/chico-tx, https://en.wikipedia.org/wiki/Chico,_Texas, https://www.martinmarietta.com/locations/southwest/north-texas-oklahoma-district/north-bridgeport-quarry, https://wisehistory.com/site/lake-bridgeport/, listing pages for North Star Pointe, Grand Harbor on Lake Bridgeport, Moonlight Bay and Three Fingers Coves
  chico: {
    zips: ['76431'],
    neighborhoods: ['Downtown Chico', 'North Star Pointe', 'Grand Harbor on Lake Bridgeport', 'Moonlight Bay', 'Three Fingers Coves'],
    landmarks: ['Lake Bridgeport', 'Wise County Park', 'Martin Marietta North Bridgeport Quarry'],
    majorRoads: ['SH 101', 'FM 1810', 'FM 2265', 'FM 1655'],
    nearbyCities: ['bridgeport', 'alvord', 'paradise', 'decatur', 'bowie'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small quarry and oil town whose surrounding land is now dotted with gated lake communities on the north end of Lake Bridgeport',
      commonGateTypes: ['Community entrance swing', 'Community slide', 'Ranch entrance swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'Elite', 'US Automatic'],
      commonIssues: [
        'Call box and access control faults at community entrances',
        'Busy weekend traffic wearing community gate operators',
        'Gate motors on long rural feeds damaged by surges',
        'Solar entrances on lake lots and rural tracts',
      ],
    },
    localAngle:
      'Chico grew up around a general store opened in the 1870s by a man from Chico, California, became a cotton town on the Rock Island line, then billed itself as the leading oil town in Wise County after the 1940s finds. It was also a major source of crushed stone for road building, with four large stone plants at one time, and Martin Marietta still quarries limestone here. What has changed most in recent years is the north end of Lake Bridgeport. Gated lake communities such as North Star Pointe, Grand Harbor and Moonlight Bay now carry Chico addresses, and their shared entrances are a different kind of job from a private drive. A community gate is opened by every resident, every delivery and every guest, often far more on a summer weekend than midweek, and it is tied to a call box or keypad that has to keep working for all of them. When a gate motor at one of those entrances starts to struggle, it affects the whole community, not one household.',
    faqs: [
      {
        q: 'Our lake community entrance gate is slow and sometimes stops halfway. What should the HOA look at?',
        a: 'Start with how often it actually runs. Community gates at lake developments see heavy bursts of traffic, and an operator that was sized for a quiet residential drive will run hot and wear quickly. We check the motor, the gate hardware and the access control together, since a call box or loop fault can look like a slow gate. If the duty rating is too low, a higher-cycle operator is often cheaper than repeated repairs.',
      },
      {
        q: 'Can you set up access codes and remotes for a gated community, not just fix the motor?',
        a: 'Yes. Call boxes, keypads, remote receivers and loop detectors are part of the gate system, and they cause many of the problems residents notice. We can repair or replace them, add or clear codes where the system allows it, and make sure the safety devices still work properly after any change.',
      },
    ],
  },

  // New Fairview: sources: https://en.wikipedia.org/wiki/New_Fairview,_Texas, https://www.tdlr.texas.gov/TABS/Projects/TABS2027000084 (Hwy 287 and FM 407), https://realmo.com/listing-m/2600-judge-ln-unit-new-fairview-tx-76247/2193674324559824711 (FM 407 corridor, acreage), listing pages for Paloma Ranch and Brock Lane Addition, https://www.texas-drilling.com/wise-county/new-fairview
  'new-fairview': {
    zips: ['76078', '76247'],
    neighborhoods: ['Illinois Lane (FM 407) corridor', 'Paloma Ranch', 'Brock Lane Addition', 'US 287 frontage'],
    landmarks: ['Illinois Lane, named for the original Illinois Community', 'US 287 and FM 407 junction'],
    majorRoads: ['FM 407 Illinois Lane', 'US 287', 'SH 114'],
    nearbyCities: ['rhome', 'aurora', 'justin', 'boyd', 'haslet', 'northlake'],
    responseBand: '',
    gateProfile: {
      dominant: 'A low-density country town of acre-plus lots and larger tracts straddling the Wise and Denton county line, with new building along FM 407',
      commonGateTypes: ['Ranch entrance swing', 'Driveway slide', 'Residential swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Mighty Mule', 'Ghost Controls'],
      commonIssues: [
        'Long setbacks between the road gate and the house',
        'Solar power on acreage entrances',
        'Keypads and intercoms out of range of the house',
        'Gates added to older farm frontage without proper posts',
      ],
    },
    localAngle:
      'New Fairview grew out of a settlement called the Illinois Community, and its main road, FM 407, is still named Illinois Lane for it. The town was simply Fairview until 1999, when it changed its name to stop being confused with other Fairviews in Texas, and its motto is Keeping It Country. The numbers back that up: about 1,400 people across more than fifteen square miles, with many homes on an acre or more and a good share of land still in large tracts. That spacing is what defines gate work here. A gate on a New Fairview property is often a long way from the house, which means a long power run or a solar setup, and an intercom or keypad that has to reach across a lot of open ground. The FM 407 corridor is also seeing new homes and road work, so gate installation in New Fairview is as common a call as repair. Getting the posts, power and distance right at the start saves most of the problems we see later.',
    faqs: [
      {
        q: 'Our gate is several hundred feet from the house. What is the best way to power it?',
        a: 'At that distance solar is usually the practical choice, unless power is already run to the road for another reason. A properly sized panel and battery will handle normal residential use, and it avoids trenching. If you want an intercom or camera at the gate as well, we look at the total load and the signal range together, since a wireless link across open ground behaves differently from one across a small yard.',
      },
      {
        q: 'We are building on acreage along FM 407. When should we plan the gate?',
        a: 'Before the driveway is poured, if possible. Posts, conduit for power and wiring, and any loop detectors are far easier to place while the ground is open. It also lets us check that the gate opening suits the vehicles you expect, such as trailers or delivery trucks. Retrofitting a gate after the drive is finished works, but it costs more and limits the options.',
      },
    ],
  },

  // Newark: sources: https://www.tshaonline.org/handbook/entries/newark-tx, https://en.wikipedia.org/wiki/Newark,_Texas, AARoads FM 718 description (https://www.aaroads.com/guides/us-287-north-decatur-tx), listing pages for Chisholm Springs, Newark Beach Estates and Estes Addition
  newark: {
    zips: ['76071'],
    neighborhoods: ['Downtown Newark', 'Chisholm Springs', 'Newark Beach Estates', 'Estes Addition', 'FM 718 corridor'],
    landmarks: ['Eagle Mountain Lake', 'Burrett Creek', 'West Fork of the Trinity River'],
    majorRoads: ['FM 718', 'FM 3433', 'SH 114 (to the north)'],
    nearbyCities: ['aurora', 'rhome', 'briar', 'boyd', 'haslet', 'azle'],
    responseBand: '',
    gateProfile: {
      dominant: 'A very small incorporated town on the Wise and Tarrant county line, surrounded by acreage subdivisions on county roads near Eagle Mountain Lake',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Mighty Mule', 'US Automatic', 'Linear'],
      commonIssues: [
        'Gravel and caliche fouling slide gate tracks and wheels',
        'Swing gates dragging on unpaved approaches',
        'Budget openers failing early on heavy gates',
        'Remote range problems on deep lots',
      ],
    },
    localAngle:
      'Newark started in the 1850s as Caddo Village, named for Caddo remains found along the West Fork of the Trinity, went through the names Odessa, Huff Valley, Sueville and Ragtown, and became Newark when the Rock Island railroad laid out lots in 1893. It incorporated in 1951 and is still under a square mile, sitting on FM 718 a couple of miles east of Eagle Mountain Lake. Most gates with a Newark address are not in town at all but out in subdivisions like Chisholm Springs and Newark Beach Estates, on county road frontage. On those properties the surface under the gate matters more than the brand of operator. Where a drive is gravel or caliche, a sliding gate track fills with stones and fines, the wheel rides up and the operator strains or stops. A swing gate on the same surface can drag as the gravel shifts and builds up. Choosing the right gate type for an unpaved drive, or paving a short apron at the opening, prevents a lot of repeat calls.',
    faqs: [
      {
        q: 'Our driveway is gravel. Is a slide gate or a swing gate better?',
        a: 'On gravel or caliche, a swing gate or a cantilever slide gate usually works better than a slide gate running on a ground track. Ground tracks collect stones and fines, and the wheel then climbs over them and binds. If a slide gate is the right fit for the space, paving a short concrete strip under the track solves most of the trouble. For swing gates, keeping the arc clear and level matters more than anything else.',
      },
      {
        q: 'We bought a cheap opener for a heavy gate and it keeps stopping. Is it worth repairing?',
        a: 'Sometimes, but often it is the wrong match. Entry-level openers are rated for light gates and modest use, and on a heavy iron or wide pipe gate they run near their limit every cycle. Repairs then come back quickly. We weigh the gate, check the hardware and tell you honestly whether a repair will last or whether a properly rated operator will cost less over a few years.',
      },
    ],
  },

  // Paradise: sources: https://www.tshaonline.org/handbook/entries/paradise-tx, https://en.wikipedia.org/wiki/Paradise,_Texas, TxDOT FM 3259 designation (SH 114 at Paradise to FM 51), listing pages for Paradise Country Estates, Oakwood Hills, Spring Valley Crossing, Read Ranch Addition and Paradise Acres
  paradise: {
    zips: ['76073'],
    neighborhoods: ['Downtown Paradise', 'Paradise Country Estates', 'Oakwood Hills', 'Spring Valley Crossing', 'Read Ranch Addition', 'Paradise Acres'],
    landmarks: ['Paradise Main Street', 'Paradise ISD campus', 'Former Rock Island rail line'],
    majorRoads: ['SH 114', 'FM 51', 'FM 3259'],
    nearbyCities: ['bridgeport', 'decatur', 'boyd', 'chico', 'alvord', 'aurora'],
    responseBand: '',
    gateProfile: {
      dominant: 'Open prairie acreage around a tiny town, with most homes on one to twelve acre lots in rural subdivisions',
      commonGateTypes: ['Ranch entrance swing', 'Residential swing', 'Wide pipe farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Mighty Mule', 'Elite'],
      commonIssues: [
        'Wind load on wide or solid gate leaves',
        'Sun and heat on exposed control boxes',
        'Hinge and post wear on long single leaves',
        'Solar entrances on acreage',
      ],
    },
    localAngle:
      'Paradise was founded in the early 1870s as Eldorado, and when that name was already taken settlers chose Paradise Prairie, after the wildflowers around the site. The town moved about a mile north-east in 1893 to meet the Rock Island railroad, incorporated only in 1996, and still has fewer than 600 residents on about two square miles. Most of the people with a Paradise address live outside it, on acreage subdivisions like Paradise Country Estates and Paradise Acres, where lots of two to three acres are common and some run past ten. The prairie in the name is the key to swing gate trouble here. Open ground with few trees means a wide gate, and especially one with solid or privacy panels, catches the full force of the wind. That load goes straight into the hinges, the post and the operator arm, and over time it loosens all three. Control boxes and batteries out in full sun all summer also age faster than the same equipment under shade.',
    faqs: [
      {
        q: 'Our wide gate gets pushed around in strong wind. Can that damage the opener?',
        a: 'Yes. On open ground a wide leaf acts like a sail, and every gust pushes against the operator arm and the hinges. Over time that wears gears, loosens mounting brackets and works the post loose. Options include a stronger operator, a positive lock that takes the load off the arm when the gate is shut, or a more open gate design that lets wind through. We look at which part is actually taking the strain before recommending one.',
      },
      {
        q: 'Our gate control box sits in full sun. Is that a problem?',
        a: 'It shortens the life of batteries and electronics. Summer heat inside a dark box in direct sun can run well above the air temperature, which ages batteries and can cause boards to behave erratically. A shade cover, a lighter vented enclosure or moving the box to the shaded side of the post all help, and none of them is expensive.',
      },
    ],
  },

  // Rhome: sources: https://www.tshaonline.org/handbook/entries/rhome-tx, https://en.wikipedia.org/wiki/Rhome,_Texas, https://www.lennar.com/new-homes/texas/dallas-ft-worth/rhome/shale-creek/cottage-collection, https://www.lennar.com/new-homes/texas/dallas-ft-worth/rhome/reunion/classic-collection, D.R. Horton Bluestem listings, Settler's Glen and Estates at Chisholm Ridge listings via redfin.com/city/15869/TX/Rhome/new-homes
  rhome: {
    zips: ['76078'],
    neighborhoods: ['Bluestem', 'Shale Creek', 'Reunion', 'Settler’s Glen', 'The Estates at Chisholm Ridge'],
    landmarks: ['Veterans Memorial Park', 'Rhome United Methodist Church', 'US 287 and SH 114 interchange'],
    majorRoads: ['US 287', 'US 81', 'SH 114', 'FM 3433'],
    nearbyCities: ['aurora', 'new-fairview', 'newark', 'boyd', 'haslet', 'justin'],
    responseBand: '',
    gateProfile: {
      dominant: 'A fast-growing commuter town where new master-planned subdivisions sit beside gated multi-acre estates and highway frontage',
      commonGateTypes: ['Estate swing', 'Community entrance swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Viking'],
      commonIssues: [
        'Community entrance access control faults',
        'Estate gate operators on long private drives',
        'Commercial gates along the highway corridor',
        'Surge damage to boards and receivers',
      ],
    },
    localAngle:
      'Rhome was named in 1883 for Col. Byron Crandall Rhome, the rancher credited with bringing the first Hereford cattle to Wise County, and one of its early flour mills sold the Gold Medal brand name to General Mills in the 1930s. By the late 1980s it was a commuter town of a few hundred people. It has since grown sharply, and the growth comes in two very different forms that matter for gates. Most new homes are in master-planned subdivisions such as Bluestem, Shale Creek and Reunion, on ordinary suburban lots where private driveway gates are rare and the gate work, if any, is at amenity or community entrances. South of town, gated subdivisions like The Estates at Chisholm Ridge put homes on multi-acre lots behind a shared entrance, and many of those properties have their own estate gates too. Add the commercial and industrial frontage around the US 287 and SH 114 junction, and automatic gate repair in Rhome covers almost every type of gate there is.',
    faqs: [
      {
        q: 'Our gated subdivision entrance keeps letting people in without codes. Can that be fixed?',
        a: 'Usually, yes. A gate that opens for anyone is often a loop detector set too sensitive, an exit loop placed where entering cars can trigger it, or a stuck input on the board. Sometimes it is simply a code that has been shared too widely. We check the detectors, the wiring and the access control settings, and we can help the HOA reset codes or move to a system with individual credentials.',
      },
      {
        q: 'We have a business on the highway and need a gate for the yard. Do you install as well as repair?',
        a: 'Yes. For a commercial yard we look first at how many times a day the gate will run, what vehicles use it and how wide the opening needs to be. That decides the gate type and the duty rating of the operator. A slide gate is common for yards, but the choice depends on the space you have along the fence line.',
      },
    ],
  },

  // Decatur: sources: https://en.wikipedia.org/wiki/Decatur,_Texas, https://www.aaroads.com/guides/us-287-north-decatur-tx (FM 730 College Avenue, US 81-287), https://www.newhomesource.com/basiccommunity/community-205418/vista-park-decatur-tx-76234, https://aaronlayman.com/tx/decatur/heritage-creek-north-ph-2/105-timothy-lane, https://leonardwellsrealty.realgeeks.com/listings/city/Decatur/Homes-with-Lawn-Lot-description/ (Indian Trails), https://www.realty.com/home-listings/1055503500/3024-Treasure-View-Drive-Decatur-TX-76234 (South Martin Branch)
  decatur: {
    zips: ['76234'],
    neighborhoods: ['Downtown courthouse square', 'Indian Trails', 'Heritage Creek North', 'Vista Park', 'South Martin Branch'],
    landmarks: ['Wise County Courthouse', 'Texas Tourist Camp', 'LBJ National Grasslands', 'Decatur Municipal Airport'],
    majorRoads: ['US 287', 'US 380', 'FM 51', 'FM 730 College Avenue'],
    nearbyCities: ['paradise', 'bridgeport', 'boyd', 'alvord', 'chico', 'rhome'],
    responseBand: '',
    gateProfile: {
      dominant: 'The Wise County seat, combining government, commercial and industrial sites in town with wooded subdivisions and ranch land around it',
      commonGateTypes: ['Commercial slide', 'Barrier arm', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'HySecurity', 'US Automatic'],
      commonIssues: [
        'High-cycle wear on commercial and industrial entrances',
        'Access control and card reader faults',
        'Tree and limb damage on wooded residential lots',
        'Solar ranch gates out toward the grasslands',
      ],
    },
    localAngle:
      'Decatur is the Wise County seat, and its centerpiece is the 1896 courthouse designed by James Riely Gordon, on the National Register of Historic Places. The Fort Worth and Denver Railway arrived in 1882, and today US 287 and US 380 cross here, with industrial employers, an airport and an air ambulance base in town. That makes Decatur the busiest place in the county for commercial gate work. Yards, plants, depots and public buildings use slide gates and barrier arms that cycle all day, and the failures there are about duty rating and access control rather than weather. The residential picture is different. Neighborhoods such as Indian Trails sit on large wooded lots, where falling limbs and roots near the posts cause more damage than the gates themselves. North of town toward the LBJ National Grasslands it is ranch country, with long drives and solar entrances. Gate opener repair in Decatur therefore means knowing three different kinds of property, often in the same week.',
    faqs: [
      {
        q: 'Our commercial gate in Decatur runs all day and keeps breaking down. What are we doing wrong?',
        a: 'Most likely nothing, except that the operator may not be rated for the traffic. Commercial and industrial entrances can run hundreds of cycles a day, and an operator built for residential use will overheat and wear out quickly under that load. We count the actual cycles, check the gate hardware and look at the access control, then tell you whether a repair will hold or whether a higher-duty operator makes more sense.',
      },
      {
        q: 'We live on a wooded lot. Do trees really affect our gate?',
        a: 'They do. Falling limbs bend gate frames and damage operator arms, and growing roots can shift a post or crack a footing over a few years. Overhanging branches also shade solar panels and drop debris into slide tracks. Keeping the area around the posts and panel clear, and checking alignment after a storm, prevents most of the trouble.',
      },
    ],
  },

  // Bowie: sources: https://www.tshaonline.org/handbook/entries/bowie-tx, https://en.wikipedia.org/wiki/Bowie,_Texas, https://www.twdb.texas.gov/surfacewater/rivers/reservoirs/amon_g_carter/index.asp, https://bowienewsonline.com/2016/09/fun-in-the-sun-household-water-amon-carter-filling-many-needs/, listing pages for Lakeside Country Club, Carter Heights, Silver Lakes Ranch and Keys Landing
  bowie: {
    zips: ['76230'],
    neighborhoods: ['Downtown Bowie', 'Lakeside Country Club', 'Carter Heights', 'Silver Lakes Ranch', 'Keys Landing'],
    landmarks: ['Lake Amon G. Carter', 'Bowie Municipal Airport', 'North Central Texas College Bowie campus'],
    majorRoads: ['US 287', 'US 81', 'SH 59'],
    nearbyCities: ['alvord', 'chico', 'nocona', 'saint-jo', 'bridgeport', 'decatur'],
    responseBand: '',
    gateProfile: {
      dominant: 'The largest town in Montague County, a ranch market town on US 287 with lake and acreage developments around Lake Amon G. Carter to the south',
      commonGateTypes: ['Ranch entrance swing', 'Estate swing', 'Driveway slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Elite', 'Ghost Controls'],
      commonIssues: [
        'Storm and wind damage to gates and operator arms',
        'Lightning and surge damage on rural power',
        'Solar entrances on lake and ranch acreage',
        'Bent leaves and posts after debris strikes',
      ],
    },
    localAngle:
      'Bowie grew out of Fort Worth and Denver Railway construction camps in 1882, was named for James Bowie, and by the late 1980s was the largest town in Montague County, serving ranchers between Fort Worth and Wichita Falls. Six miles south is Lake Amon G. Carter, which the city built after the 1952 drought, and around town are lake and acreage developments such as Lakeside Country Club, Carter Heights and Silver Lakes Ranch. Weather is a recurring theme here. Bowie took EF1 tornadoes in 2020 and again in March 2022, and even ordinary spring storms bring wind strong enough to slam a gate against its stops or drive debris into it. After a storm the calls are mostly bent leaves, damaged operator arms and boards killed by a power surge or a nearby strike. A gate motor that has been in a lightning event may look fine and then fail days later, so it is worth having the controls tested properly rather than assuming the gate survived.',
    faqs: [
      {
        q: 'Our gate was hit by debris in a storm. Can it be repaired or do we need a new one?',
        a: 'Often it can be repaired. Bent pickets or rails can usually be straightened or replaced, and operator arms and brackets are separate parts. What we check carefully is the post and hinges, because a hard hit can crack a footing or bend a hinge pin, and a new operator on a damaged gate will not last. If the frame itself is badly twisted, replacing the leaf is sometimes cheaper than rebuilding it.',
      },
      {
        q: 'Our gate stopped working after a lightning storm but nothing looks damaged. What happened?',
        a: 'Lightning and power surges usually damage the electronics rather than anything you can see. The control board, receiver, keypad or loop detector can be partly damaged and work erratically before failing completely. We test each part rather than guessing. Fitting surge protection and a proper ground on the gate power is worth doing on rural lines, where strikes are more common.',
      },
    ],
  },

  // Nocona: sources: https://www.tshaonline.org/handbook/entries/nocona-tx, https://en.wikipedia.org/wiki/Nocona,_Texas, https://en.wikipedia.org/wiki/Lake_Nocona, https://www.twdb.texas.gov/surfacewater/rivers/reservoirs/nocona/index.asp, https://tpwd.texas.gov/fishboat/fish/recreational/lakes/nocona/access.phtml (FM 103, FM 2634)
  nocona: {
    zips: ['76255'],
    neighborhoods: ['Downtown Nocona', 'Nocona Hills', 'Lake Nocona shoreline', 'FM 103 corridor'],
    landmarks: ['Lake Nocona', 'Nocona Hills golf course', 'Nokona Athletic Goods'],
    majorRoads: ['US 82', 'SH 175', 'FM 103', 'FM 2634'],
    nearbyCities: ['saint-jo', 'bowie', 'muenster', 'alvord', 'gainesville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A Red River country leather and ranching town, with a gated lake community at Lake Nocona and large ranches across north Montague County',
      commonGateTypes: ['Community entrance swing', 'Ranch entrance swing', 'Wide pipe farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'DoorKing', 'Ghost Controls'],
      commonIssues: [
        'Community gate access control and call box faults',
        'Solar entrances on large ranches',
        'Cattle guard and gate combinations on ranch roads',
        'Parts availability for older operators',
      ],
    },
    localAngle:
      'Nocona was laid out in 1887 on land donated by rancher D. C. Jordan, and the same year Herman J. Justin moved his boot shop here for the railroad. His daughter Enid Justin started the Nocona Boot Company in 1925, and Nokona Athletic Goods has made baseball gloves in town since 1926. Leather and ranching still define the place. About seven miles north-east is Lake Nocona, impounded in 1960 on Farmers Creek, and beside it Nocona Hills, a gated lake community with a golf course and an airstrip. Gate work around Nocona falls into those two worlds. Nocona Hills has a shared entrance used by every resident and visitor, where the call box and access control matter as much as the motor. Out on the ranches north toward the Red River, entrances are large, remote and almost always solar, and some still run older operators. For automatic gate repair in Nocona that means checking early whether parts for an older unit are still available, so a repair does not stall waiting on them.',
    faqs: [
      {
        q: 'Our ranch gate opener is old. Can it still be repaired?',
        a: 'Often it can, but it depends on the model. Some older operators still have parts readily available, while others have been discontinued and boards or motors are hard to find. We identify the unit first and tell you plainly whether a repair is realistic. If parts are scarce, a modern operator can often be mounted on the existing gate and posts, which keeps the cost down.',
      },
      {
        q: 'Do you come out as far as Nocona and Lake Nocona?',
        a: 'Yes, Nocona and the lake are part of the area we work. Because it is a longer trip, it helps a lot if you tell us the operator brand and model, how the gate is powered and what it is doing, or send a photo. That lets us bring the parts most likely to be needed and finish in one visit where possible.',
      },
    ],
  },

  // Saint Jo: sources: https://www.tshaonline.org/handbook/entries/saint-jo-tx, https://en.wikipedia.org/wiki/St._Jo,_Texas, https://en.wikipedia.org/wiki/Stonewall_Saloon_(Texas), https://atlas.thc.state.tx.us/Details/5337005133, listing pages for The Ranches at Elm Fork and Buck Branch Estates (aaronlayman.com/tx/saint-jo/...)
  'saint-jo': {
    zips: ['76265'],
    neighborhoods: ['Saint Jo town square', 'Original Saint Jo townsite', 'The Ranches at Elm Fork', 'Buck Branch Estates', 'FM 677 corridor'],
    landmarks: ['Stonewall Saloon Museum', 'Saint Jo town square', 'Arche Vineyards and Winery', 'Elm Fork of the Trinity River headwaters'],
    majorRoads: ['US 82', 'SH 59', 'FM 677'],
    nearbyCities: ['muenster', 'nocona', 'lindsay', 'gainesville', 'bowie', 'valley-view'],
    responseBand: '',
    gateProfile: {
      dominant: 'A historic Chisholm Trail town on the Montague and Cooke county line, surrounded by ranches, ten-acre ranchettes and vineyards',
      commonGateTypes: ['Ranch entrance swing', 'Ornamental iron swing', 'Wide pipe farm gate'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Solar power on remote ranch and vineyard entrances',
        'Heavy custom iron gates overloading operators',
        'Wildlife and livestock damage to sensors and wiring',
        'Keypads and receivers far from the house',
      ],
    },
    localAngle:
      'Saint Jo began in the 1850s as Head of Elm, near the headwaters of the Elm Fork of the Trinity River, and became a stop on the Chisholm Trail after the Civil War. The Stonewall Saloon, built in 1873, was the first permanent building on the square and is now a museum, and the main street still looks much as it did in the late 1800s. The land around town is ranch country, with newer ranchettes such as The Ranches at Elm Fork on ten-acre lots and a growing number of vineyards and wineries along the back roads. Many owners here want a ranch entrance that suits the setting, often a heavy custom iron gate with a brand or arch, and that is where problems tend to start. A decorative gate can weigh far more than the opener was sized for, and on solar power the extra load drains the battery faster. Most gate opener repair in Saint Jo comes back to matching the operator and power supply to the gate that was actually built.',
    faqs: [
      {
        q: 'We had a heavy custom iron entrance gate made. Why does the opener struggle?',
        a: 'Custom iron gates are often much heavier than a standard gate of the same width, and the opener is frequently chosen by width alone. The result is an operator working at or beyond its rating every cycle, which wears gears and drains solar batteries quickly. We check the gate weight, the hinge condition and the operator rating together. Sometimes a stronger operator is the answer, sometimes better hinges or a counterbalanced setup.',
      },
      {
        q: 'Our ranchette is ten acres outside Saint Jo. Is solar the right choice for the gate?',
        a: 'For most ranchettes, yes. Running mains power out to a road gate across ten acres is expensive, and a properly sized solar kit handles normal use well. The key is sizing the panel and battery for winter, keeping the panel clear of brush and shade, and choosing an operator that suits solar. If you plan heavy daily use, we can add battery capacity to match.',
      },
    ],
  },

  // Callisburg: sources: https://en.wikipedia.org/wiki/Callisburg,_Texas, https://www.hmdb.org/m.asp?m=255165, https://atlas.thc.texas.gov/Details/5097001805, https://www.dot.state.tx.us/tpp/hwy/FM2500/FM2896.htm, https://www.dot.state.tx.us/tpp/hwy/FM0500/FM0678.htm
  callisburg: {
    zips: ['76240'],
    neighborhoods: ['Downtown Callisburg', 'Main Street (FM 2896) and Campbell Street', 'FM 678 corridor', 'Callisburg ISD campus area'],
    landmarks: ['First Oil Well in Cooke County historical marker', 'Callisburg United Methodist Church', 'Callisburg High School'],
    majorRoads: ['FM 2896', 'FM 678'],
    nearbyCities: ['gainesville', 'whitesboro', 'lindsay', 'valley-view', 'tioga'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small, entirely rural town in north-eastern Cooke County where almost every gate guards acreage on a county road rather than a town lot',
      commonGateTypes: ['Ranch entrance swing', 'Pipe-frame farm gate', 'Dual swing on a long drive'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'Ghost Controls', 'LiftMaster'],
      commonIssues: [
        'Solar panels and batteries undersized for winter daylight',
        'Heavy pipe gates overloading light-duty openers',
        'Hinge wear from trucks and trailers clipping the leaf',
        'Remote range falling short on long gravel drives',
      ],
    },
    localAngle:
      'Callisburg is named for Sam Callis, a blacksmith who was the first settler, and a state historical marker at Main Street (FM 2896) and Campbell Street records the first oil well in Cooke County, brought in on 9 October 1924. The town covers about two square miles and the census calls it entirely rural, so the gates here belong to working land. Many of them started life as welded pipe farm gates, heavy and built to take a cow leaning on them, and an opener bolted on years later was often a light-duty kit never rated for that weight. The arm strains, the limits drift, and eventually the motor quits on a cold morning when the battery is already low. Before quoting any gate opener repair in Callisburg we weigh up the leaf, the hinge condition and the solar budget together, because swapping the motor alone on an overloaded gate only resets the clock.',
    faqs: [
      {
        q: 'Our opener was added to an old pipe gate. Is that why it keeps failing?',
        a: 'Quite possibly. Welded pipe gates out here are often far heavier than the residential kits sold for them, and the opener spends its life working near its limit. That shows up as stripped gears, a hot motor and a battery that cannot recover overnight. Sometimes the fix is a heavier-rated operator; sometimes it is lightening or re-hanging the gate so it swings freely by hand first.',
      },
      {
        q: 'Do you cover the county roads around Callisburg, not just the town?',
        a: 'Yes. Most gates near Callisburg sit on county roads between Gainesville and Whitesboro rather than inside the town limits, and those are within our area. Give us the county road number and a nearby crossroad when you call, because rural addresses here do not always map cleanly and we would rather find the right gate first time.',
      },
    ],
  },

  // Gainesville: sources: https://en.wikipedia.org/wiki/Gainesville,_Texas, https://www.mortonmuseum.org/gainesville-s-historic-homes, https://atlas.thc.texas.gov/Details/5097005355, https://homes.com/lake-kiowa-tx, https://en.wikipedia.org/wiki/Gainesville_station_(Texas)
  gainesville: {
    zips: ['76240'],
    neighborhoods: ['Historic South Gainesville', 'Downtown courthouse square', 'Lake Kiowa', 'Moss Lake shoreline', 'Leonard Park area'],
    landmarks: ['Cooke County Courthouse', 'Santa Fe Depot Museum', 'Frank Buck Zoo in Leonard Park', 'Medal of Honor Park'],
    majorRoads: ['I-35', 'US 82', 'FM 678'],
    nearbyCities: ['lindsay', 'valley-view', 'callisburg', 'muenster', 'whitesboro', 'sanger'],
    responseBand: '',
    gateProfile: {
      dominant: 'The Cooke County seat, with Victorian homes in town, a gated lake community to the east and lake and acreage tracts around Moss Lake',
      commonGateTypes: ['Ornamental iron swing', 'Community entry with access control', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'US Automatic'],
      commonIssues: [
        'Old iron gates sagging on original hinges',
        'Keypad and telephone entry faults at community gates',
        'Long acreage drives running on solar power',
        'Lightning and surge damage to control boards',
      ],
    },
    localAngle:
      'Gainesville was founded in 1850 and named for General Edmund Pendleton Gaines, and it was an early barbed wire distribution point where the first spools sold in Texas changed hands. Fencing, in other words, has a long history here, and the gates we see in and around town still reflect three quite separate kinds of property. In Historic South Gainesville, where the Morton Museum counts Victorian and Italianate homes along streets such as South Denton, the job is usually an older iron gate whose hinges have worn oval and whose new opener is fighting a leaf that drags. East of town, Lake Kiowa is a gated community with round-the-clock security, so access control and keypad logic matter more than raw motor strength. Out toward Moss Lake the tracts run to several acres and the gate is a long way from the house. Automatic gate repair in Gainesville means working out which of those three problems you actually have.',
    faqs: [
      {
        q: 'Can you put an opener on an older iron gate at a historic house?',
        a: 'Usually, yes, but the gate has to be sound first. Many older iron gates in town hang on hinges that have worn badly, and an operator will not cure a leaf that drags or binds; it simply works harder until something gives. We check the hinge, post and swing by hand, then choose an operator and mounting that suit the gate without having to alter its look more than necessary.',
      },
      {
        q: 'Do you work on community entry gates around Lake Kiowa as well as private ones?',
        a: 'We work on both. Community entrances tend to fail at the access side, keypads, telephone entry and loop detectors, rather than the motor, and they see far more cycles a day than a private drive. For an HOA or management company we can look at the whole entry, including the exit side and any guard-controlled lane, and explain what is worn versus what is misconfigured.',
      },
    ],
  },

  // Lindsay: sources: https://en.wikipedia.org/wiki/Lindsay,_Cooke_County,_Texas, https://en.wikipedia.org/wiki/St._Peter%27s_Roman_Catholic_Church_(Lindsay,_Texas), https://capitol.texas.gov/tlodocs/85R/billtext/pdf/HR01179F.pdf, https://www.dot.state.tx.us/tpp/hwy/FM1000/FM1199.htm, https://www.dot.state.tx.us/tpp/hwy/FM3000/FM3108.htm
  lindsay: {
    zips: ['76250'],
    neighborhoods: ['Downtown Lindsay', 'St. Peter’s church grounds area', 'US 82 frontage', 'FM 1199 loop', 'FM 3108 corridor'],
    landmarks: ['St. Peter’s Roman Catholic Church', 'Lindsay Post Office', 'US 82 corridor'],
    majorRoads: ['US 82', 'FM 1199', 'FM 3108'],
    nearbyCities: ['gainesville', 'muenster', 'valley-view', 'callisburg', 'saint-jo'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small German Catholic farm town in the centre of Cooke County, with town lots near the church and farmland on the county roads beyond',
      commonGateTypes: ['Farm gate converted to automatic', 'Residential swing', 'Wide equipment gate'],
      commonBrands: ['Mighty Mule', 'US Automatic', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Manual farm gates retrofitted without a proper stop or latch',
        'Opener brackets welded to posts that were never set for them',
        'Wind loading on solid-panel gates across open fields',
        'Batteries failing after a run of short winter days',
      ],
    },
    localAngle:
      'Lindsay began in 1891, when Anton and August Flusche arranged 9,300 acres along the railway as a German Catholic colony, and its St. Peter’s church is a painted church on the National Register that the parish rebuilt after a tornado wrecked most of it in May 1917. The town itself is small, about 1.6 square miles bordering Gainesville, and a lot of the gate work around it is conversion rather than new build: a manual farm gate that has hung on the same post for decades, and an owner who now wants it to open from the truck. That is a perfectly good plan, but a gate that was only ever pushed by hand rarely has a positive stop, a latch an opener can work with, or a post set deep enough to take the extra leverage. A swing gate opener mounted on that post will run fine for a season and then start pulling it over. We check the post and the stop before we talk about a motor.',
    faqs: [
      {
        q: 'Can you automate the farm gate we already have instead of replacing it?',
        a: 'Often, yes. The gate needs to swing level and freely by hand, the hinge post needs to be solid enough for the extra load, and there needs to be a proper stop so the opener is not using its own motor as the brake. If the gate passes those checks, adding an opener and a solar charger is usually far cheaper than a new gate and post.',
      },
      {
        q: 'Our gate is out in the open and the wind catches it. Does that matter?',
        a: 'It matters a great deal for a solid or close-boarded gate. Across open farmland a full panel behaves like a sail, and a gusty day can push the leaf against the opener hard enough to trip its obstruction sensing or strip gears. More open infill, a stronger operator or a positive lock at the closed position all help. We look at which way the prevailing wind hits your gate.',
      },
    ],
  },

  // Muenster: sources: https://en.wikipedia.org/wiki/Muenster,_Texas, https://texastimetravel.com/directory/ben-and-aggie-fette-seyler-muenster-museum/, https://www.lonestartravelguide.com/?p=5470, https://cityofmuenstertx.org/our-community/history/
  muenster: {
    zips: ['76252'],
    neighborhoods: ['Downtown Muenster (Main Street)', 'Muenster Lake area', 'US 82 corridor', 'FM 373 north and south of town'],
    landmarks: ['Muenster Museum', 'Sacred Heart Catholic School', 'Muenster Lake', 'Oil derrick picnic area on US 82'],
    majorRoads: ['US 82', 'FM 373'],
    nearbyCities: ['lindsay', 'saint-jo', 'gainesville', 'valley-view', 'nocona', 'callisburg'],
    responseBand: '',
    gateProfile: {
      dominant: 'A German Catholic farm town on US 82 in western Cooke County, where the gates that matter most have to pass farm machinery and stock trailers',
      commonGateTypes: ['Wide ranch entrance swing', 'Dual-leaf equipment gate', 'Residential slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ghost Controls', 'Elite'],
      commonIssues: [
        'Long leaves on wide openings sagging at the free end',
        'Equipment and trailers clipping a gate that closed too soon',
        'Vehicle sensors missing tall or long rigs',
        'Opener arms bent by impact with farm vehicles',
      ],
    },
    localAngle:
      'Muenster was founded in 1889 by Carl and Emil Flusche, who wanted to call it Westphalia and settled on the name of that region’s capital when the first choice was taken. It sits on US 82 at FM 373, about 1,014 feet up, and even the picnic tables east of town are made from oil derricks. Around a farm town like this the entrance gate is judged by one thing: whether a tractor, a cattle trailer or a feed truck can get through it without anyone climbing out. That pushes openings wide, often sixteen feet or more, and a long leaf on a wide opening sags at the free end, needs more operator than a house gate and closes slowly. The commonest damage we expect here is not wear but impact, a rig still in the opening when the timer runs out. A driveway gate in Muenster usually needs its close timer and vehicle detection set for the longest thing that uses it, not the family car.',
    faqs: [
      {
        q: 'Our gate closes on the trailer before it is fully through. Can that be fixed?',
        a: 'Yes, and it is one of the most useful adjustments on a farm gate. The auto-close timer can be lengthened, but the better answer is detection that holds the gate open while anything is in the opening: a vehicle loop, a probe or a pair of photo eyes set at trailer height. Then the gate waits for the whole rig, not just the cab, before it closes.',
      },
      {
        q: 'How wide can an automatic gate be for farm equipment?',
        a: 'Very wide, but the hardware has to match. A single swing leaf much over sixteen feet gets heavy at the free end and wants a wheel or a heavier operator, so wide farm entrances are often better as two leaves on a dual opener. A slide gate is another option where there is room alongside. We measure your widest machine before suggesting the layout.',
      },
    ],
  },

  // Valley View: sources: https://en.wikipedia.org/wiki/Valley_View,_Texas, https://tpwd.texas.gov/state-parks/ray-roberts-lake/map, https://www.redfin.com/sitemap/TX/76272/street/Fm+922
  'valley-view': {
    zips: ['76272'],
    neighborhoods: ['Downtown Valley View', 'Spring Creek valley', 'I-35 frontage (exits 485 to 487)', 'FM 922 corridor', 'FM 3002 toward Johnson Branch'],
    landmarks: ['Ray Roberts Lake State Park, Johnson Branch Unit', 'Valley View 1938 school building', 'I-35 corridor'],
    majorRoads: ['I-35 / US 77', 'FM 922', 'FM 3002 Lone Oak Road'],
    nearbyCities: ['gainesville', 'lindsay', 'sanger', 'callisburg', 'pilot-point', 'muenster'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small town on I-35 in southern Cooke County, ringed by acreage on the FM roads and still rebuilding after the May 2024 tornado',
      commonGateTypes: ['Ranch entrance swing', 'Driveway slide', 'Commercial slide on I-35 frontage'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Elite', 'Ghost Controls'],
      commonIssues: [
        'Storm-damaged gates and posts put back into service unchecked',
        'Debris and twisted panels jamming a slide track',
        'Power surges and outages killing control boards',
        'Solar panels shifted or broken by high winds',
      ],
    },
    localAngle:
      'Valley View was platted by L.W. Lee in 1872 and probably named for its view over the Spring Creek valley, and on 25 May 2024 an EF3 tornado tore through it and on to Pilot Point. That night shapes a lot of the gate questions here. After a storm like that, gates get pushed shut, chained or propped open, and months later the owner finds the opener never quite worked again. Wind on a gate panel goes straight into the hinges, the post and the operator arm, and the damage is often hidden: a post a few degrees out, a bent arm that still moves, a board that took a surge when the power came back. A gate that looks fine can be binding enough to burn out a motor over the following summer. If you are booking gate repair in Valley View on a gate that rode out the storm, ask for the post, hinges and board to be checked, not just the part that stopped.',
    faqs: [
      {
        q: 'Our gate survived the tornado but has never worked right since. Where do we start?',
        a: 'Start with the structure, not the motor. High wind loads the leaf like a sail and can move a post or bend an operator arm by just enough to make the gate bind. The opener then works harder on every cycle. We check the post for plumb, the hinges and arm for distortion and the board for surge damage, then fix the cause so a new part does not fail the same way.',
      },
      {
        q: 'We are out toward Ray Roberts on FM 3002. Is that in your area?',
        a: 'Yes. The acreage east of I-35 toward the Johnson Branch side of Ray Roberts Lake, and out west along FM 922, is all within the area we work. Long drives out there often run on solar power, so it helps to tell us when you call whether your gate is on mains or solar and roughly how far it is from the house.',
      },
    ],
  },

  // Roanoke: sources: https://en.wikipedia.org/wiki/Roanoke,_Texas, https://apps.dentoncounty.gov/website/HistoricalMarkers/PDFs/Roanoke.pdf, https://roanoketexas.gov/222/History, https://roanoketexas.gov/207/Visitor-Center-Museum, https://communityimpact.com/keller-roanoke-northeast-fort-worth/government/oak-street-in-downtown-roanoke-earns-great-texas-street-designation/, https://spencer.roveridx.com/tx/roanoke/marshall-creek/154-lakeview-road/
  roanoke: {
    zips: ['76262'],
    neighborhoods: ['Central Roanoke Historic District', 'Marshall Creek', 'Meadows of Roanoke', 'Meadow View', 'Country Acres Estates', 'Briarwyck'],
    landmarks: ['Historic Oak Street', 'The Rock Building Visitor Center & Museum', 'Hawaiian Falls Roanoke', 'Northwest Regional Airport'],
    majorRoads: ['SH 114', 'US 377', 'Byron Nelson Boulevard (SH 114 Business)'],
    nearbyCities: ['trophy-club', 'westlake', 'northlake', 'haslet', 'keller', 'southlake'],
    responseBand: '',
    gateProfile: {
      dominant: 'A fast-growing small city at SH 114 and US 377, mixing a historic Oak Street core, creek-side lots and newer subdivisions with a busy restaurant and retail trade',
      commonGateTypes: ['Residential swing', 'Commercial slide', 'Service-yard rolling gate'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Viking'],
      commonIssues: [
        'Water and silt reaching low-mounted operators near the creeks',
        'Loop detectors and wiring damaged by saturated ground',
        'Rear service gates behind restaurants left half open or forced',
        'Photo-eye misalignment on busy commercial lots',
      ],
    },
    localAngle:
      'Roanoke’s settlers arrived near Denton Creek in 1847, and it was the creek’s repeated flooding that pushed the community toward its present site before the Texas and Pacific Railroad founded the town proper in 1881. Water still decides a fair amount about gates here. Marshall Creek, which joined Roanoke in 2007, and the lower lots near the creeks hold water after heavy rain, and a gate operator or loop detector mounted at ground level in that kind of spot is living on borrowed time. Uptown, the story is commercial. The city calls itself the Unique Dining Capital of Texas, and the rear service and dumpster gates behind restaurants on and around Oak Street take a beating from delivery trucks and staff in a hurry. Population went from 5,962 in 2010 to 9,665 in 2020, so plenty of gates are new. For a commercial gate in Roanoke we look first at who uses it and how often, because a residential operator will not survive a kitchen’s back lot.',
    faqs: [
      {
        q: 'Our gate stops working after heavy rain. Is it the motor?',
        a: 'Often it is not the motor at all. On lower lots near Denton Creek and Marshall Creek, rain can soak wiring runs, flood a loop detector or reach a control box mounted near ground level. The gate then behaves erratically until things dry out, and each soaking shortens the board’s life. Raising the controls, sealing the conduit and resetting the loops usually ends the pattern.',
      },
      {
        q: 'Do you repair service gates for restaurants and shops in Roanoke?',
        a: 'Yes. Rear service gates and enclosure gates behind restaurants and retail units are some of the hardest-used gates anywhere, opened by delivery drivers and staff many times a day. We repair the operators, rollers, latches and safety sensors on those, and can advise whether a heavier commercial operator would save money over repeated repairs to a light one.',
      },
    ],
  },

  // Everman: sources: https://en.wikipedia.org/wiki/Everman,_Texas, https://www.evermantx.us/parks-and-recreation/page/johnson-park, https://www.evermantx.us/parks-and-recreation/page/memorial-park, https://spencer.roveridx.com/tx/everman/chambers-creek-add/408-steeple-ridge-road, https://spencer.roveridx.com/tx/everman/everman-park-add/916-kelley-drive, https://spencer.roveridx.com/tx/everman/england-isle-add/744-windsor-drive/
  everman: {
    zips: ['76140'],
    neighborhoods: ['Everman Park', 'Everman Park South', 'Chambers Creek', 'England Isle', 'Races Addition'],
    landmarks: ['Johnson Park', 'Everman Memorial Park', 'Barron Munitions Building historical marker', 'Everman Joe C. Bean High School'],
    majorRoads: ['Everman Parkway', 'I-20 / Loop 820', 'Enon Avenue'],
    nearbyCities: ['forest-hill', 'rendon', 'kennedale', 'crowley', 'fort-worth', 'burleson'],
    responseBand: '',
    gateProfile: {
      dominant: 'A compact residential city on the southern edge of Fort Worth, with standard suburban lots rather than acreage and commercial and church sites around them',
      commonGateTypes: ['Single-leaf driveway swing', 'Residential slide', 'Chain-link rolling gate'],
      commonBrands: ['LiftMaster', 'Mighty Mule', 'Apollo', 'Elite'],
      commonIssues: [
        'Short drives leaving little stacking room off the street',
        'Slide gates with tight tail space on narrow lots',
        'Clay-soil post movement on suburban footings',
        'Light-duty openers on gates heavier than expected',
      ],
    },
    localAngle:
      'Everman is named for John Wesley Everman, the railroad engineer whose survey party platted the townsite after the International and Great Northern line arrived in 1902, and the whole city fits into about 1.8 square miles. That scale is the point. Everman is a residential town of ordinary lots in subdivisions such as Everman Park and Chambers Creek, so the gates are suburban ones: a single swing leaf or a short slide across a driveway that may be only a car length from the street. Short drives create the most common complaint, a car waiting in the road while the gate opens, and on a narrow lot a sliding gate often has barely enough room alongside for its tail. Both are layout problems as much as hardware problems. On a lot that size, a faster operator, a smarter open command or a bi-parting layout can make more difference than a bigger motor.',
    faqs: [
      {
        q: 'Our driveway is short and we end up waiting in the street while the gate opens. What helps?',
        a: 'There are a few options. A faster operator shortens the wait, and a remote or phone app lets you start the gate before you turn in. Where a single leaf is wide and slow, splitting it into two leaves on a dual opener halves the travel. Sometimes the answer is a slide gate instead, if there is enough room along the fence for it to run back.',
      },
      {
        q: 'Is an automatic gate worth it on a normal suburban lot?',
        a: 'For many owners, yes, mainly for security and keeping pets and children in. The key is matching the opener to the gate. Plenty of suburban gates are heavier than they look, and a cheap kit opener on a steel gate will not last. We weigh the gate, check the posts and give you an honest view of what kind of operator suits it.',
      },
    ],
  },

  // Lake Worth: sources: https://en.wikipedia.org/wiki/Lake_Worth,_Texas, https://en.wikipedia.org/wiki/Lake_Worth_(Texas), https://en.wikipedia.org/wiki/Texas_State_Highway_199, https://www.independencetitle.com/wp-content/uploads/LakeWorthTexas.pdf, https://aaronlayman.com/tx/lake-worth/indian-oaks-sub/3017-pueblo-trail/, https://spencer.roveridx.com/tx/lake-worth/lakeview-heights-add/6700-lakeside-drive/
  'lake-worth': {
    zips: ['76135'],
    neighborhoods: ['Indian Oaks', 'Lakeview Heights', 'Crestridge', 'Lakeside Drive near the shoreline', 'Charbonneau Road area'],
    landmarks: ['Lake Worth reservoir', 'Charbonneau Park', 'Mary Lou Reddick Public Library', 'Lake Worth Veterans Memorial Park'],
    majorRoads: ['SH 199 Jacksboro Highway', 'I-820', 'Azle Avenue', 'Charbonneau Road'],
    nearbyCities: ['white-settlement', 'saginaw', 'fort-worth', 'haltom-city', 'azle'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small city on the south-east side of the lake, split between older homes near the water and a commercial strip along Jacksboro Highway and I-820',
      commonGateTypes: ['Commercial slide', 'Residential swing', 'Chain-link cantilever'],
      commonBrands: ['LiftMaster', 'Viking', 'Elite', 'All-O-Matic'],
      commonIssues: [
        'Storage and yard gates on SH 199 running heavy daily cycles',
        'Cantilever rollers worn from high use',
        'Damp lake-side air corroding older hardware',
        'Access keypads and card readers failing on business lots',
      ],
    },
    localAngle:
      'The city of Lake Worth takes its name from the reservoir beside it, which Fort Worth built in 1914 and still owns, so the shoreline itself sits inside Fort Worth’s limits even though the town wraps around this side of it. That leaves Lake Worth with two distinct kinds of gate. Along SH 199, the Jacksboro Highway, and out to its cloverleaf with I-820, the frontage is retail, auto, storage and yard businesses, and their sliding and cantilever gates may open dozens of times a day for customers and staff. Rollers, chains and keypad readers wear out there long before the gate frame does. Back toward the water, in older streets such as Indian Oaks and Lakeview Heights, some homes date back to the late 1940s and the gates are smaller swing and slide types, often with original hardware that the damp air off the lake has not been kind to. A commercial gate in Lake Worth and a house gate a mile away need very different conversations.',
    faqs: [
      {
        q: 'Our business gate on Jacksboro Highway keeps wearing out. Is that normal?',
        a: 'For a gate that cycles all day, wear is normal, but frequent breakdowns usually mean the operator or rollers were sized for a home. A commercial slide or cantilever gate on a busy lot needs a high-duty operator, sealed rollers and regular adjustment. We can tell you whether yours is simply due for parts or is the wrong class of equipment for the traffic it gets.',
      },
      {
        q: 'We live near the lake and our gate hardware is rusting. What can we do?',
        a: 'Damp air near the water speeds up corrosion on older steel hinges, latches and fasteners, and once a hinge pin seizes the opener has to fight it on every cycle. Replacing worn hinges with sealed or galvanised ones, keeping the moving parts lubricated and checking the operator’s mounting bolts usually stops the problem spreading to the motor.',
      },
    ],
  },

  // Rendon: sources: https://en.wikipedia.org/wiki/Rendon,_Texas, https://txgenwebcounties.com/tarrant/cemetery/info-rendon.htm, https://www.redfin.com/sitemap/TX/76028/street/Rendon+New+Hope+Rd, https://www.redfin.com/sitemap/25298/TX/Tarrant-County/Rendon
  rendon: {
    // Rendon is an unincorporated CDP whose addresses carry Burleson, Fort Worth
    // and Mansfield mailing ZIPs; no single principal ZIP.
    zips: ['76028', '76140', '76063'],
    neighborhoods: ['Rendon Road acreage', 'Rendon Bloodworth Road corridor', 'Rendon New Hope Road area', 'FM 1187 corridor'],
    landmarks: ['Rendon Cemetery', 'FM 1187 corridor'],
    majorRoads: ['FM 1187', 'Rendon Road', 'Rendon Bloodworth Road', 'Rendon New Hope Road'],
    nearbyCities: ['everman', 'kennedale', 'forest-hill', 'burleson', 'mansfield', 'crowley'],
    responseBand: '',
    gateProfile: {
      dominant: 'An unincorporated, partly rural stretch of south-east Tarrant County where many homes sit on acre-plus lots well back from the road',
      commonGateTypes: ['Estate swing on a long drive', 'Ranch entrance swing', 'Driveway slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ghost Controls', 'Elite'],
      commonIssues: [
        'Long wiring runs or solar setups far from the house',
        'Intercom and keypad range across long drives',
        'Clay-soil post movement on heavy estate gates',
        'Lightning damage on exposed open lots',
      ],
    },
    localAngle:
      'Rendon is not a city at all. It is a census-designated place of about 13,500 people spread over nearly 25 square miles of south-east Tarrant County, and the census counts close to half of them as rural. Addresses here carry Burleson, Fort Worth or Mansfield mailing ZIPs depending on the parcel, and lots along roads such as Rendon New Hope Road average around two acres. That spacing is what defines gate work. The gate is usually at the road and the house is well back, so power, intercom and remote range all have to cover a real distance. A trench of low-voltage cable that worked when it was new can lose enough voltage over that run to make an opener sluggish, and a wireless keypad that reached the house from a smaller lot may not reach it here. For gate installation in Rendon, deciding between mains and solar, and wired or wireless entry, is the first conversation, not the last.',
    faqs: [
      {
        q: 'Our mailing address says Burleson but we are in Rendon. Are we in your area?',
        a: 'Yes. Rendon is unincorporated and its addresses are split between Burleson, Fort Worth and Mansfield ZIPs, so the city on your mail does not tell us much. All of it is within the area we cover. When you call, the road name and nearest crossroad, such as FM 1187 or Rendon Road, help us find the gate.',
      },
      {
        q: 'Should a gate at the end of a long drive be solar or mains powered?',
        a: 'Both work. Mains is better for heavy gates, frequent use and accessories such as intercoms and lights, but trenching a long run is expensive and the cable has to be sized for the distance. Solar avoids the trench and suits moderate use, provided the panel and battery are sized for winter. We look at the gate, its use and the distance before recommending either.',
      },
    ],
  },

  // Hutchins: sources: https://en.wikipedia.org/wiki/Hutchins,_Texas, https://www.up.com/customers/ind-dev/premier/hutchins, https://rebusinessonline.com/provident-industrial-buys-1-5-msf-industrial-park-in-hutchins-texas/, https://aaronlayman.com/tx/hutchins/skyline-estates/1041-crestview-drive, https://aaronlayman.com/tx/hutchins/southaven/325-southaven-boulevard
  hutchins: {
    zips: ['75141'],
    neighborhoods: ['Southaven', 'Skyline Estates', 'Downtown Hutchins (Main Street)', 'Dowdy Ferry Road area', 'Trinity River bottoms'],
    landmarks: ['Union Pacific Dallas Intermodal Terminal', 'Trinity River', 'Hutchins Memorial Cemetery', 'Commerce 45 industrial park'],
    majorRoads: ['I-45', 'I-20', 'Dowdy Ferry Road', 'Wintergreen Road'],
    nearbyCities: ['wilmer', 'lancaster', 'dallas', 'desoto', 'balch-springs', 'seagoville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small southern Dallas County city bounded by the Trinity River, with new subdivisions on one side and rail and industrial land on the other',
      commonGateTypes: ['Commercial cantilever slide', 'Residential swing', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'HySecurity', 'Elite', 'DoorKing'],
      commonIssues: [
        'Footings shifting in heavy, wet river-bottom clay',
        'Flood-prone low ground reaching operators and loops',
        'Truck strikes on industrial yard gates',
        'Track and roller wear on high-cycle commercial slides',
      ],
    },
    localAngle:
      'Hutchins grew from a trading place on the Trinity River around 1860 and took its name from William J. Hutchins of the Houston and Texas Central Railroad, and the Trinity still forms its eastern boundary. Low ground near a big river means two things for a gate: deep, heavy clay that stays wet and moves, and spots where standing water reaches the bottom of the operator. Footings in that soil can tilt slowly over a few seasons, and a slide gate whose track has dropped at one end will grind until the motor gives out. The other half of Hutchins is rail and industry. Union Pacific’s Dallas Intermodal Terminal sits partly in the city, and industrial parks off I-45 bring constant truck traffic past yard gates. For a sliding gate in Hutchins, the questions are whether the footing is still level and whether a truck has clipped it, and we check both before replacing anything electrical.',
    faqs: [
      {
        q: 'Our slide gate track has gone out of level. Why does that keep happening here?',
        a: 'Much of Hutchins sits on heavy clay near the Trinity River, and that soil swells when wet and shrinks when it dries, moving footings and concrete with it. A track that drops at one end makes the gate drag and the motor overheat. Re-levelling the track and setting the footings deeper, or switching to a cantilever design that does not ride on the ground, usually solves it.',
      },
      {
        q: 'Do you handle industrial yard gates near the intermodal terminal?',
        a: 'Yes. Yard and truck-court gates around the industrial parks off I-45 and I-20 are heavy, high-cycle gates that take regular knocks from trailers. We repair operators, rollers, loops, barrier arms and access controls on those, and can advise on protection such as bollards or better detection where a gate keeps getting struck.',
      },
    ],
  },

  // Wilmer: sources: https://en.wikipedia.org/wiki/Wilmer,_Texas, https://www.fox4news.com/news/industrial-boom-transforms-city-wilmers-landscape, https://rebusinessonline.com/usaa-real-estate-co-acquires-758922-sf-warehouse-in-wilmer, https://wilmeredc.com/news-media/P30, https://aaronlayman.com/tx/wilmer/meadow-ridge-add/405-rodger-street/, https://aaronlayman.com/tx/wilmer/cottonwood-valley/320-pecan-street/
  wilmer: {
    zips: ['75172'],
    neighborhoods: ['Original Town of Wilmer', 'Meadow Ridge', 'Cottonwood Valley', 'Kissell Dale', 'Cottonwood'],
    landmarks: ['Union Pacific Dallas Intermodal Terminal', 'Southport Logistics Park', 'Dalport Trade Center', 'I-45 distribution corridor'],
    majorRoads: ['I-45', 'Belt Line Road'],
    nearbyCities: ['hutchins', 'lancaster', 'ferris', 'desoto', 'glenn-heights', 'red-oak'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small town that has become one of the busiest warehouse and distribution hubs in southern Dallas County, with a modest residential core beside it',
      commonGateTypes: ['Commercial cantilever slide', 'Barrier arm', 'Residential swing'],
      commonBrands: ['HySecurity', 'LiftMaster', 'DoorKing', 'FAAC'],
      commonIssues: [
        'Barrier arms snapped by trucks and trailers',
        'Cantilever gates knocked off alignment by impacts',
        'Loop detectors failing under heavy axle loads',
        'Card readers and guard-house controls out of sync',
      ],
    },
    localAngle:
      'Wilmer started as Prairie Valley and was renamed in 1884 for A.J. Wilmer, a conductor on the Houston and Texas Central line, but its modern identity is freight. Union Pacific chose it for its intermodal terminal, and millions of square feet of warehouses have since gone up along I-45, including the 758,922 square foot Dalport Trade Center near Belt Line Road and the 252-acre Southport Logistics Park. Truck courts like those run their gates around the clock, and the failures are less about wear than about impact: a barrier arm taken off by a trailer, a cantilever gate nudged out of line by a reversing tractor, a loop detector cracked under constant heavy axles. Commercial gate repair in Wilmer is often about getting a dock gate back in service fast and then asking why it got hit. Behind all that, the original town and streets such as Meadow Ridge still have ordinary house gates, which we handle just as readily.',
    faqs: [
      {
        q: 'A truck took out our barrier arm. Can you get the lane working again quickly?',
        a: 'Usually, yes. A broken arm on its own is often a straightforward replacement, but a hard strike can also damage the operator’s gearbox, the breakaway mount or the loop beneath. We check all three so the lane does not fail again an hour later. If the same lane keeps getting hit, it is worth looking at arm length, loop placement and signage as well.',
      },
      {
        q: 'Do you also work on home gates in Wilmer, not just warehouses?',
        a: 'We do. Most of what people see in Wilmer is industrial, but the original town and newer streets have plenty of driveway swing and slide gates. Those get the same diagnosis as anywhere else: hinges, posts, operator, board and safety devices, checked in that order so you only pay for what is actually wrong.',
      },
    ],
  },

  // Seagoville: sources: https://en.wikipedia.org/wiki/Seagoville,_Texas, https://www.texasescapes.com/CentralTexasTownsNorth/Seagoville-Texas.htm, https://www.seagoville.us/DocumentCenter/View/4976, https://seagoville.us/58/Doing-Business, https://prod01.kbhome.com/new-homes-dallas-fort-worth/cottonwood-creek, https://aaronlayman.com/tx/seagoville/seagoville-farms-ph-1/532-aqueduct-drive, https://www.mytexashomeresource.com/idx/1723-paul-drive-seagoville-tx-75159/1803738484_spid/
  seagoville: {
    zips: ['75159'],
    neighborhoods: ['Cottonwood Creek', 'Brook Valley', 'Caldwell Lakes', 'Seagoville Farms', 'Edmonds Ranch', 'Malloy Bridge Road area'],
    landmarks: ['Federal Correctional Institution, Seagoville', 'John Bunker Sands Wetland Center', 'Seagoville Veterans Memorial Park', 'Simonds Lake Park'],
    majorRoads: ['US 175', 'Seagoville Road', 'Simonds Road', 'Malloy Bridge Road'],
    nearbyCities: ['combine', 'balch-springs', 'hutchins', 'crandall', 'mesquite', 'wilmer'],
    responseBand: '',
    gateProfile: {
      dominant: 'A large, once-rural city in south-east Dallas County where older acreage with ranch gates now sits beside thousands of new subdivision homes',
      commonGateTypes: ['Ranch entrance swing', 'Residential swing', 'Community entry slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Elite', 'Linear'],
      commonIssues: [
        'Older acreage gates on worn, decades-old operators',
        'Construction traffic damaging nearby gates and loops',
        'Clay-soil post movement on new and old footings',
        'Remotes and keypads interfering on newly dense streets',
      ],
    },
    localAngle:
      'Seagoville was laid out by T.K. Seago in 1876 and renamed by the Post Office in 1910 to avoid confusion with Sego, and at about 19 square miles it is far larger than most people expect. For much of its history that land was farms and ranches, which is why the John Bunker Sands Wetland Center nearby sits on a former working cattle ranch along the East Fork of the Trinity. What is changing now is density. The city’s own planning figures count roughly 9,935 homes planned, approved or under construction in projects such as Brook Valley, Caldwell Lakes and Cottonwood Creek. That puts long-standing acreage, with a ranch gate and an opener that has run for twenty years, right beside new streets full of construction trucks. We see the old operator wearing out and the new neighbours’ traffic finishing it off. A gate motor in Seagoville that has done two decades on a quiet road may simply not be up to the street it now sits on.',
    faqs: [
      {
        q: 'Our ranch gate opener is twenty years old. Is it worth repairing?',
        a: 'Sometimes. Older operators were often well built, and a new board, capacitor or limit switch can keep one going. The catch is parts: some older models are no longer supported, and a gate that now sees more traffic than it used to may be past what the original operator was rated for. We tell you honestly whether repair or replacement is the better spend.',
      },
      {
        q: 'Construction near us keeps damaging our gate. What can we do?',
        a: 'With so much building going on, gates near new streets see more knocks, mud and heavy vehicles than they were set up for. Bollards or a guard post in front of the operator, raising controls out of the splash zone and making sure the safety sensors are aligned all help. It is also worth checking that loops have not been cut by nearby trenching.',
      },
    ],
  },

  // Annetta: sources: https://www.tshaonline.org/handbook/entries/annetta-tx, https://en.wikipedia.org/wiki/Annetta,_Texas, https://en.wikipedia.org/wiki/Farm_to_Market_Road_5, https://annettasouth.org/about-annetta-south/history-of-annetta-south, real estate listings (Annetta Estates, North Annetta Hills, Maravilla Estates)
  annetta: {
    zips: ['76008'],
    neighborhoods: ['Annetta Estates', 'North Annetta Hills', 'Maravilla Estates', 'Annetta Centerpoint Road', 'Old Annetta Road'],
    landmarks: ['Annetta Methodist Church (1937 rock building)', 'Annetta Cemetery', 'Texas & Pacific rail line'],
    majorRoads: ['FM 5', 'FM 1187', 'Annetta Centerpoint Road'],
    nearbyCities: ['annetta-north', 'annetta-south', 'aledo', 'willow-park', 'hudson-oaks', 'weatherford'],
    responseBand: '',
    gateProfile: {
      dominant: 'Large-lot and acreage homes south of I-20, many of them built in the growth of the last fifteen years, with ornamental entrance gates set well back on long drives',
      commonGateTypes: ['Estate swing', 'Ranch entrance swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Viking', 'Ghost Controls'],
      commonIssues: [
        'Newer installs with undersized operators for heavy iron leaves',
        'Voltage drop on long low-voltage runs to the entrance',
        'Solar panels shaded by maturing trees',
        'Keypad and intercom range problems at distant entrances',
      ],
    },
    localAngle:
      'Annetta more than doubled between the 2010 and 2020 censuses, from 1,288 residents to 3,041, which makes it one of the fastest growing small towns in eastern Parker County. That growth arrived as acreage homes rather than tract housing, and it shows in the gates. A lot of entrances here are under ten years old, built with heavy decorative iron leaves and often fitted with whatever operator came in the builder’s package. The common failure is not age but mismatch: a residential-duty arm pushing a wide, heavy leaf strains its gearbox and burns through limit settings within a few seasons. The other recurring call is distance. When the house sits several hundred feet back off Annetta Centerpoint Road or FM 5, the power and control wiring to the gate is long, and voltage drop or a cut cable can look like a dead motor. Good gate opener repair in Annetta starts with measuring what actually reaches the operator before replacing anything.',
    faqs: [
      {
        q: 'Our gate is only a few years old but the opener already struggles. Why?',
        a: 'On many newer Annetta properties the operator was sized for an average gate, not for the wide, heavy iron leaves that are common here. An undersized arm will work for a while, then start stalling, reversing or tripping its force setting, and the gearbox wears quickly. We check the leaf weight and length against the operator’s rating. Sometimes an adjustment and better hinges are enough; sometimes the honest answer is a heavier-duty operator.',
      },
      {
        q: 'Our house is a long way from the gate. Is solar a sensible option?',
        a: 'It often is, particularly where trenching a new power line down a long drive would be costly. The catch in Annetta is trees: a panel that had full sun when the lot was cleared can be heavily shaded once the oaks fill in, and the battery then runs flat by winter. We look at where the panel can see sun all year and at how many cycles a day the gate makes before recommending it.',
      },
    ],
  },

  // Annetta North: sources: https://en.wikipedia.org/wiki/Annetta_North,_Texas, https://www.texasescapes.com/CentralTexasTownsNorth/Annetta-North-Texas.htm, https://en.wikipedia.org/wiki/Farm_to_Market_Road_5, https://har.com/annettanorth/about, real estate listings (North Annetta Hills)
  'annetta-north': {
    zips: ['76008', '76087'],
    neighborhoods: ['North Annetta Hills', 'FM 5 corridor', 'Annetta Centerpoint Road', 'Mikus Road area'],
    landmarks: ['Annetta Methodist Church', 'FM 5 interchange with I-20', 'Annetta Cemetery'],
    majorRoads: ['FM 5', 'I-20', 'Mikus Road'],
    nearbyCities: ['annetta', 'willow-park', 'hudson-oaks', 'annetta-south', 'aledo', 'weatherford'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small town of residential acreage and working farmland, where pasture gates and driveway gates often sit side by side on the same frontage',
      commonGateTypes: ['Ranch entrance swing', 'Pipe farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Livestock leaning on or rubbing against gate leaves',
        'Pipe gates sagging from long, unsupported spans',
        'Battery and charger failures on solar setups',
        'Gates opening onto FM 5 with little room to pull off',
      ],
    },
    localAngle:
      'Annetta North covers under four square miles and had 554 residents at the 2020 census, and it is mostly homes on acreage and open farmland. The town has no town hall of its own; its council meets in the Annetta Methodist Church building. That rural mix shapes the gate work. Plenty of properties here run two kinds of gate on the same land: a decorative entrance for the house and a long pipe gate into pasture, sometimes both automated from one opener brand and one remote. Pipe gates of sixteen feet or more put a lot of leverage on the hinge post, and horses or cattle pushing against a closed leaf will slowly bend it out of line until the operator trips on obstruction. Entrances that open straight onto FM 5 also matter, because a car waiting half on the road for a slow gate is a real hazard. For a driveway gate in Annetta North, speed and a sound hinge post are worth more than any extra feature.',
    faqs: [
      {
        q: 'Our pasture gate keeps reversing halfway. The opener seems fine. What else could it be?',
        a: 'With long pipe gates out here, the cause is often the gate rather than the opener. Livestock leaning on a leaf, or years of its own weight, can bend the frame or pull the hinge post out of plumb, so the gate binds partway and the operator reads that as an obstruction. We check the post, hinges and travel by hand first. Straightening or re-hanging the leaf usually fixes it without new electronics.',
      },
      {
        q: 'Can we put the house gate and the pasture gate on the same remote?',
        a: 'Usually yes, as long as both operators use compatible receivers, or we add a receiver that can learn both. It is also possible to give the pasture gate a different button so it is not opened by accident with stock in the field. We will tell you what your existing operators support before suggesting any new hardware.',
      },
    ],
  },

  // Annetta South: sources: https://en.wikipedia.org/wiki/Annetta_South,_Texas, https://annettasouth.org/about-annetta-south/history-of-annetta-south, https://www.tshaonline.org/handbook/entries/annetta-tx, https://en.wikipedia.org/wiki/Farm_to_Market_Road_5, real estate listings (McDavid Springs, Turkey Creek Drive)
  'annetta-south': {
    zips: ['76008'],
    neighborhoods: ['McDavid Springs', 'Turkey Creek Drive', 'FM 5 corridor', 'Palo Duro Drive'],
    landmarks: ['FM 5 through town', 'Annetta Methodist Church (nearby in Annetta)', 'Aledo ISD campuses in neighboring Aledo'],
    majorRoads: ['FM 5', 'FM 1187'],
    nearbyCities: ['annetta', 'aledo', 'annetta-north', 'willow-park', 'hudson-oaks', 'benbrook'],
    responseBand: '',
    gateProfile: {
      dominant: 'Wooded acre-plus lots in a town that incorporated largely to keep its rural character, so most gates sit under tree canopy on private drives',
      commonGateTypes: ['Residential swing', 'Estate swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'Viking'],
      commonIssues: [
        'Leaf litter and twigs fouling slide tracks and photo eyes',
        'Shade cutting solar charging in winter',
        'Branches striking leaves or sensors in storms',
        'Moisture held in shaded ground around footings',
      ],
    },
    localAngle:
      'Annetta South was incorporated in 1979, at the same time as Annetta and Annetta North, as people moved into east Parker County and Fort Worth’s extraterritorial jurisdiction crept closer. The town is less than two square miles, and much of it is wooded acre and multi-acre lots. Trees are the theme of gate work here. A gate under a canopy collects leaves, acorns and twigs in its track and along the photo eye path, and a slide gate with debris under its wheels starts to labor long before anything breaks. Shade has a second effect: the ground around footings stays damp longer, and a solar panel mounted on the gate post may see only a few hours of real sun in December. After a storm, we often find a branch has knocked a safety sensor out of alignment, which stops the gate cold and looks to the owner like a failed motor. Clearing and re-aiming comes before any automatic gate repair in Annetta South.',
    faqs: [
      {
        q: 'After every storm our gate stops working, then sometimes starts again. Why?',
        a: 'On wooded lots like many in Annetta South, the usual cause is the safety sensors. A branch or even heavy rain can knock a photo eye out of line, and a wet or leaf-covered edge sensor can read as an obstruction. The gate refuses to close and may beep. Cleaning and re-aiming the sensors and trimming growth near them is often the whole repair.',
      },
      {
        q: 'We want to replace our old swing gate with a slide gate. Is that practical here?',
        a: 'It can be, but it depends on the ground beside the opening. A slide gate needs a clear, fairly level run alongside the drive for the leaf to travel into, and trees, roots or a slope often get in the way on these lots. We would look at that run, and at how much leaf litter it will collect, before recommending a slide over a better-hung swing gate.',
      },
    ],
  },

  // Cool: sources: https://www.tshaonline.org/handbook/entries/cool-tx, https://en.wikipedia.org/wiki/Cool,_Texas, https://www.zip-codes.com/zip-code/76066/zip-code-76066.asp, https://www.dot.state.tx.us/tpp/hwy/FM/FM0113.htm, https://tpwd.texas.gov/state-parks/lake-mineral-wells
  cool: {
    zips: ['76066'],
    neighborhoods: ['US 180 corridor', 'Cool Junction Road', 'FM 113 between Cool and Millsap'],
    landmarks: ['Lake Mineral Wells State Park and Trailway', 'US 180 west toward Mineral Wells'],
    majorRoads: ['US 180', 'FM 113', 'Cool Junction Road'],
    nearbyCities: ['millsap', 'mineral-wells', 'peaster', 'weatherford', 'hudson-oaks'],
    responseBand: '',
    gateProfile: {
      dominant: 'A very small town strung along US 180, where most gated properties are rural acreage with entrances on or near a busy highway',
      commonGateTypes: ['Ranch entrance swing', 'Pipe farm gate', 'Wide double swing'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'Ghost Controls', 'LiftMaster'],
      commonIssues: [
        'Entrances set too close to the road for a truck and trailer',
        'Solar batteries worn out on remote gates',
        'Lightning and surge damage to control boards',
        'Wide gates sagging on undersized posts',
      ],
    },
    localAngle:
      'Cool is one of the smallest incorporated towns in Parker County, with 211 residents at the 2020 census, sitting on US 180 about eleven miles west of Weatherford. FM 113 runs south from the highway to Millsap. Out here a gate is mostly a ranch tool: the entrance to acreage, often wide enough for a stock trailer, and frequently powered by a solar panel because mains power is a long way from the road. Two things come up again and again. First, setback. A gate that sits close to US 180 forces a driver towing a trailer to wait with the rig hanging into traffic while the leaf swings, so where we can, we suggest moving the gate back or speeding up the operator. Second, isolation. Remote gates on open land take lightning and surge damage more often than sheltered ones, and a control board can fail after a storm with nothing visibly wrong. Gate motor and board diagnosis in Cool usually starts with the battery and surge protection.',
    faqs: [
      {
        q: 'Our gate stopped working after a thunderstorm. Is the motor burnt out?',
        a: 'Not necessarily. On open acreage around Cool, a nearby strike or a surge on the line more often damages the control board, the receiver or the charging regulator than the motor itself. We test the battery, the charger and the board in turn. Replacing the damaged part and adding surge protection is usually far cheaper than a new operator.',
      },
      {
        q: 'Do you work this far west, between Weatherford and Mineral Wells?',
        a: 'Yes, Cool and the stretch of US 180 toward Mineral Wells are in our area, as are Millsap and the FM 113 corridor. Rural addresses can be hard to find, so a gate code, a landmark or the nearest county road helps us plan the trip and give you a realistic arrival window when you call.',
      },
    ],
  },

  // Hudson Oaks: sources: https://en.wikipedia.org/wiki/Hudson_Oaks,_Texas, https://zipcodes-us.com/zip/tx/hudson-oaks, real estate listings (Diamond Oaks, Hudson Heights, Eagles Bluff)
  'hudson-oaks': {
    zips: ['76087'],
    neighborhoods: ['Diamond Oaks', 'Red Eagle', 'Parker Oaks', 'Enchanted Oaks', 'Red Oak Hills', 'Hudson Heights'],
    landmarks: ['H-E-B Hudson Oaks', 'I-20 retail corridor', 'Memorial to Highway Patrolman Douglas Thompson'],
    majorRoads: ['I-20', 'US 180', 'Bankhead Highway'],
    nearbyCities: ['annetta-north', 'willow-park', 'annetta', 'weatherford', 'annetta-south', 'aledo'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small city split by I-20, with a busy retail and service strip along the interstate and residential subdivisions on larger lots to either side',
      commonGateTypes: ['Commercial slide', 'Residential swing', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'High-cycle wear on business and storage-yard gates',
        'Vehicle impact damage on commercial entrances',
        'Access control and keypad faults',
        'Aging operators in older residential subdivisions',
      ],
    },
    localAngle:
      'Hudson Oaks is a city of about 2,200 people, by the 2020 census, that I-20, the Bankhead Highway and US 180 all pass through, with the interstate splitting it into north and south halves. It calls itself the Entertainment Capital of Parker County, and its I-20 frontage is lined with restaurants, retail and service businesses, including the H-E-B that opened in 2019. That gives Hudson Oaks a gate mix unusual for a town its size. Along the interstate the work is commercial: slide gates and barrier arms on service yards, storage lots and loading areas that cycle many times a day and get clipped by trucks. Off the highway, subdivisions such as Diamond Oaks and Red Eagle have residential swing gates, some on older operators. A commercial gate in Hudson Oaks needs an operator rated for its duty cycle and a plan for impact damage, while a home gate usually needs only a sound tune-up and new batteries.',
    faqs: [
      {
        q: 'Our business gate on the I-20 frontage gets hit by delivery trucks. What can we do?',
        a: 'First, repair the damage properly, because a bent track or leaf will wear the operator out. Then look at why it happens: entrances that are tight for a turning truck, a gate that closes too soon behind a slow vehicle, or no loop detector to hold it open. Adjusting the close timer, adding vehicle detection and, where needed, bollards to protect the operator usually reduces repeat hits.',
      },
      {
        q: 'Our home gate in Diamond Oaks is old. Repair or replace?',
        a: 'If the gate frame and posts are sound, repair is usually worth trying first. Older operators often need only a new board, capacitor, battery or limit switch. Replacement makes sense when parts are no longer made, the motor or gearbox has failed, or the operator lacks the safety sensors current standards expect. We will tell you which applies after testing it.',
      },
    ],
  },

  // Millsap: sources: https://www.tshaonline.org/handbook/entries/millsap-tx, https://en.wikipedia.org/wiki/Millsap,_Texas, https://www.dot.state.tx.us/tpp/hwy/FM/FM0113.htm, https://www.dot.state.tx.us/tpp/hwy/FM3000/FM3028.htm, real estate listings (Stephens Bluff, Mountain River Estates, Heritage Acres)
  millsap: {
    zips: ['76066'],
    neighborhoods: ['Downtown Millsap', 'Stephens Bluff', 'Mountain River Estates', 'Heritage Acres', 'FM 113 south of I-20'],
    landmarks: ['Brazos River', 'Millsap ISD campus', 'Texas & Pacific rail line'],
    majorRoads: ['I-20', 'FM 113', 'FM 3028'],
    nearbyCities: ['cool', 'mineral-wells', 'weatherford', 'peaster', 'lipan', 'hudson-oaks'],
    responseBand: '',
    gateProfile: {
      dominant: 'Rural acreage around a small railroad town, with river-frontage property and gated communities toward the Brazos south of the interstate',
      commonGateTypes: ['Ranch entrance swing', 'Community entrance swing', 'Pipe farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ghost Controls', 'Elite'],
      commonIssues: [
        'Long unpaved drives carrying dust and grit into operators',
        'Solar systems undersized for winter',
        'Gates on uneven or sloping river-country ground',
        'Wildlife and stock damage to sensors and wiring',
      ],
    },
    localAngle:
      'Millsap began as a relay station on the stagecoach road between Weatherford and Palo Pinto, got its post office in 1877, and grew when the Texas and Pacific Railway arrived in 1880. Today it sits just off I-20 on FM 113, about fifteen miles west of Weatherford, and the land south of town runs down toward the Brazos River. That is broken, uneven country compared with the flat prairie east of Fort Worth, and it changes how a swing gate behaves: on ground that rises across the opening, a leaf can drag at mid-swing even when it closes perfectly. Many properties are reached by long gravel or caliche drives, and the dust they throw up packs into hinges, arm pivots and photo eyes. Gated river communities add a different job, a shared entrance that runs many times a day. Whether it is a ranch swing gate in Millsap or a community entrance, we check grade, clearance and dust before blaming the operator.',
    faqs: [
      {
        q: 'Our gate scrapes the ground partway open but closes fine. What is wrong?',
        a: 'On the uneven ground around Millsap, that usually means the land rises across the swing path. The leaf clears at closed and open but catches in the middle. Options include raising the leaf with adjustable hinges, trimming the high ground, or fitting a rising hinge. In some cases a slide gate or a split pair of shorter leaves suits the site better than one long swing.',
      },
      {
        q: 'We are on a long gravel road. How often should the gate be serviced?',
        a: 'Dust is the main enemy on caliche and gravel drives, so once a year is a sensible minimum, and twice is better for a busy gate. Service means cleaning and lubricating hinges and arm pivots, cleaning the photo eyes, checking the battery and charger, and testing the safety reverse. It is far cheaper than replacing a gearbox that wore out from grit.',
      },
    ],
  },

  // Peaster: sources: https://www.tshaonline.org/handbook/entries/peaster-tx, https://www.texasalmanac.com/places/peaster, https://www.zip-codes.com/zip-code/76485/zip-code-76485.asp, https://atlas.thc.texas.gov/Details/5367003967, real estate listings (Peaster Original Town, Woodland Lakes, Reata Ranch)
  peaster: {
    // 76485 is the Peaster PO-box ZIP; street addresses in and around town mostly carry 76088.
    zips: ['76088', '76485'],
    neighborhoods: ['Peaster Original Town', 'Woodland Lakes', 'Reata Ranch', 'FM 920 corridor'],
    landmarks: ['Peaster Cemetery', 'Peaster ISD campus', 'Birthplace of writer Robert E. Howard'],
    majorRoads: ['FM 920', 'FM 1885'],
    nearbyCities: ['poolville', 'weatherford', 'cool', 'springtown', 'millsap'],
    responseBand: '',
    gateProfile: {
      dominant: 'Farm and ranch country north-west of Weatherford, with homes on several acres and entrances well away from the house',
      commonGateTypes: ['Ranch entrance swing', 'Wide double swing', 'Pipe farm gate'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'Ghost Controls', 'LiftMaster'],
      commonIssues: [
        'Remote and keypad range at distant entrances',
        'Solar panels and batteries undersized for daily use',
        'Hinge posts working loose under wide, heavy leaves',
        'Rodents chewing low-voltage wire in pasture',
      ],
    },
    localAngle:
      'Peaster grew from 160 acres bought in the 1870s by H. H. Peaster, a Georgia settler, and it was the birthplace of Conan author Robert E. Howard. It sits on FM 920 about nine miles north-west of Weatherford, and it is still farm and ranch country, with homes on several acres in places like Woodland Lakes and Reata Ranch. Gates here are mostly ranch entrances, and the house is often far enough back that the owner cannot see or hear the gate. That changes what fails and how people notice. A remote that worked fine when new starts to need pressing twice, then works only halfway down the drive, because a battery is weak or the receiver antenna sits low behind a steel post. In open pasture, rodents chew low-voltage cable laid shallow in the ground. When we look at a driveway gate in Peaster, the antenna, the cable run and the battery are checked first, since those cause more callouts than motors do.',
    faqs: [
      {
        q: 'Our remote only works when we are right at the gate. Can that be fixed?',
        a: 'Usually, yes. On acreage around Peaster the receiver antenna is often mounted low inside the operator box or behind a steel post, which kills range. Moving the antenna up and clear, adding an external antenna, or fixing a weak battery in the gate or the remote often restores range. Upgrading to a long-range receiver is the fallback.',
      },
      {
        q: 'Is a solar gate opener reliable out here?',
        a: 'It is, if it is sized properly. The usual mistakes are too small a panel, an old battery and a gate that runs more often than planned, for example when a family adds deliveries and feed runs. We look at daily cycles, how much sun the panel gets in winter and the battery’s condition, and size the system so it does not fade in December.',
      },
    ],
  },

  // Poolville: sources: https://www.tshaonline.org/handbook/entries/poolville-tx, real estate listings (Templeton Acres; FM 920 farm and ranch tracts; ZIP 76487 split between Parker and Wise counties)
  poolville: {
    zips: ['76487'],
    neighborhoods: ['Templeton Acres', 'FM 920 corridor', 'FM 3107 corridor', 'Poolville town center at FM 920 and FM 3107'],
    landmarks: ['Poolville ISD campus', 'FM 920 and FM 3107 junction'],
    majorRoads: ['FM 920', 'FM 3107'],
    nearbyCities: ['springtown', 'peaster', 'weatherford', 'paradise', 'azle'],
    responseBand: '',
    gateProfile: {
      dominant: 'An unincorporated farm and ranch community with large tracts, where gates are working livestock entrances as much as driveway gates',
      commonGateTypes: ['Pipe farm gate', 'Ranch entrance swing', 'Wide double swing'],
      commonBrands: ['US Automatic', 'Ghost Controls', 'Mighty Mule', 'Ramset'],
      commonIssues: [
        'Livestock pushing on or rubbing against closed gates',
        'Very long spans for trailers and equipment',
        'Solar charging and battery failures',
        'Wiring and controls damaged by stock, mowers or wildlife',
      ],
    },
    localAngle:
      'Poolville is an unincorporated community at the junction of FM 920 and FM 3107, about eighteen miles north-west of Weatherford, named for a large pool of water just east of town. Postal service began in 1883, and the ZIP now reaches into both Parker and Wise counties. The land around it is sold in tracts of tens and sometimes over a hundred acres, and that makes the gate a farm machine first. Entrances are wide enough for a tractor or a stock trailer, often a sixteen to twenty foot pipe leaf or a double pair, almost always on solar power. Wide pipe gates carry big leverage on the hinge post, and cattle or horses that lean on a closed gate slowly lever the post and bend the frame until the opener stalls. A mower or a curious animal can also tear an exposed sensor or cable. Most gate opener repair in Poolville is mechanical before it is electrical.',
    faqs: [
      {
        q: 'Our cattle keep pushing the gate and now it will not close properly. What should we do?',
        a: 'Look at the hinge post and the frame first. Stock leaning on a closed pipe gate gradually pulls the post out of plumb and bends the leaf, so the gate binds and the opener trips. Resetting or bracing the post, straightening or replacing the leaf and adding a positive stop or lock usually solves it. A sturdier operator alone will not.',
      },
      {
        q: 'Can you automate an existing pipe gate, or do we need a new gate?',
        a: 'Most sound pipe gates can be automated. We check that the hinge post is solid, that the hinges turn freely and that the gate swings level without dragging. Then we fit an operator rated for its length and weight, usually solar powered in Poolville, with a receiver and safety sensors. A gate that is badly bent or rusted through is better replaced first.',
      },
    ],
  },

  // Springtown: sources: https://www.tshaonline.org/handbook/entries/springtown-tx, https://en.wikipedia.org/wiki/Springtown,_Texas, real estate listings (The Ranches at Valley View East, Gonzollas Road, SH 199 and FM 51 frontage)
  springtown: {
    zips: ['76082'],
    neighborhoods: ['Historic town square', 'The Ranches at Valley View East', 'Gonzollas Road', 'SH 199 corridor', 'FM 51 corridor'],
    landmarks: ['Springtown Tabernacle', 'Eureka Lodge No. 317', 'Downtown Springtown square'],
    majorRoads: ['SH 199', 'FM 51', 'Main Street'],
    nearbyCities: ['briar', 'azle', 'poolville', 'boyd', 'paradise', 'peaster'],
    responseBand: '',
    gateProfile: {
      dominant: 'A historic town square ringed by acre-plus residential lots and ranch land, where much of the ground stays wet from springs and creeks',
      commonGateTypes: ['Driveway slide', 'Ranch entrance swing', 'Residential swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Elite', 'Mighty Mule'],
      commonIssues: [
        'Standing water and silt in slide tracks and operator pads',
        'Footings in wet ground shifting out of line',
        'Corrosion on hinges, chains and low-mounted electronics',
        'Commercial gates on SH 199 frontage taking hard use',
      ],
    },
    localAngle:
      'Springtown was first called Littleton’s Springs, a town square laid out in 1859 beside a creek fed by many springs, and it took its present name in the mid-1870s. That water is still the useful fact for gate work. In and around town, low-lying lots can hold moisture long after a rain, and the effect on a gate is predictable: a slide track sitting in wet ground collects silt and stays damp, chains and rollers rust, and an operator mounted on a low pad can take water into its housing. Footings in persistently wet soil tend to drift, so a gate that ran true for years slowly loses its alignment. Away from the square, most homes on acreage off SH 199 and FM 51 use swing gates, and the businesses along SH 199 run commercial gates that cycle far more often. For a sliding gate in Springtown, the first thing we look at is where the water goes.',
    faqs: [
      {
        q: 'Our slide gate keeps jamming after rain. Is the motor going?',
        a: 'More often it is the track. In low spots around Springtown, water and silt settle in the track and around the wheels after a storm, so the gate drags and the operator trips. Cleaning the track, improving drainage around it, and checking the rollers for rust usually fixes the problem. If the operator pad is low, raising it protects the electronics too.',
      },
      {
        q: 'Do you cover properties outside Springtown city limits?',
        a: 'Yes. We work in Springtown and across the surrounding area, including acreage along SH 199 and FM 51 and the country toward Azle and Poolville. Rural addresses can be confusing, so tell us the nearest road junction or a landmark when you call and we will give you a realistic arrival window.',
      },
    ],
  },

  // Willow Park: sources: https://www.tshaonline.org/handbook/entries/willow-park-tx, https://en.wikipedia.org/wiki/Willow_Park,_Texas, https://en.wikipedia.org/wiki/Farm_to_Market_Road_5, real estate listings (Squaw Creek West, Willow Crest Estates, Saddle Ridge Estates, Crown Road Estates)
  'willow-park': {
    zips: ['76087', '76008'],
    neighborhoods: ['Squaw Creek West', 'Willow Crest Estates', 'Saddle Ridge Estates', 'Crown Road Estates', 'Willow Wood Addition'],
    landmarks: ['Squaw Creek golf course', 'Former Trinity Meadows Race Track site', 'Lake Weatherford'],
    majorRoads: ['I-20', 'Ranch House Road', 'FM 5', 'East Bankhead Highway'],
    nearbyCities: ['hudson-oaks', 'annetta-north', 'annetta', 'aledo', 'annetta-south', 'weatherford'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city that grew in stages from the late 1950s, so subdivisions of very different ages sit side by side, from older estate lots to newer gated acreage near the golf courses',
      commonGateTypes: ['Estate swing', 'Driveway slide', 'Community entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Obsolete operators on older properties with no parts available',
        'Missing or outdated safety sensors',
        'Community entrance access control faults',
        'Hinge and post wear on heavy decorative gates',
      ],
    },
    localAngle:
      'Willow Park grew in stages. Lake Weatherford, finished in 1957, drew the first wave of residents; the city incorporated in 1963; and the 1980s brought new subdivisions, a golf course and a fire department. Its population reached 4,936 at the 2020 census. That staggered history means Willow Park has gates of almost every generation. On older lots we still find operators thirty or more years old, built before modern entrapment protection and with control boards that are no longer made. Those owners usually face a straight question: keep sourcing used parts or move to a current operator with photo eyes and edge sensors. Newer properties off Ranch House Road and around the Squaw Creek course tend to have heavy iron estate gates, where wear shows first in hinges and posts. For gate installation or replacement in Willow Park, we tell owners honestly whether their existing gate frame is worth keeping, because it often is.',
    faqs: [
      {
        q: 'Our gate opener is very old and nobody seems to stock parts. What are our options?',
        a: 'In Willow Park that is common on the older properties. If the gate leaves and posts are sound, we can usually fit a modern operator to the existing gate rather than replacing everything. A current unit also brings proper safety sensors and better remotes. If a part is still available for your old operator, we will say so, and you can decide.',
      },
      {
        q: 'Can you work on our neighborhood entrance gate as well as private gates?',
        a: 'Yes. We repair community and shared entrance gates as well as private driveway gates, including keypads, telephone entry, loops and the operators themselves. For a shared gate it helps to have one contact from the HOA or the owners, and any access codes or controller details, so the repair can be done without locking residents in or out.',
      },
    ],
  },

  // Aledo: sources: https://www.tshaonline.org/handbook/entries/aledo-tx, https://www.aledotx.gov/discover-aledo-rich-history-dynamic-future/pages/history-aledo-texas, https://nwis.waterdata.usgs.gov/monitoring-location/08046000, https://en.wikipedia.org/wiki/Farm_to_Market_Road_5, real estate listings (Parks of Aledo, Bear Creek, Rolling Hills, Aledo Heights, Villages of Aledo)
  aledo: {
    zips: ['76008'],
    neighborhoods: ['Parks of Aledo', 'Bear Creek', 'Rolling Hills', 'Aledo Heights', 'Villages of Aledo', 'Downtown Aledo'],
    landmarks: ['Clear Fork of the Trinity River', 'Texas & Pacific rail line', 'Downtown Aledo'],
    majorRoads: ['FM 1187', 'FM 5', 'I-20', 'Bailey Ranch Road'],
    nearbyCities: ['annetta-south', 'annetta', 'willow-park', 'annetta-north', 'hudson-oaks', 'benbrook'],
    responseBand: '',
    gateProfile: {
      dominant: 'A fast-growing small city in the Clear Fork valley, surrounded by acreage subdivisions where gated driveways are the norm rather than the exception',
      commonGateTypes: ['Estate swing', 'Driveway slide', 'Community entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'Viking', 'US Automatic'],
      commonIssues: [
        'Footings moving in clay near creeks and low ground',
        'Storm and surge damage to control boards',
        'Heavy decorative leaves wearing hinges',
        'Remote and smartphone access control problems',
      ],
    },
    localAngle:
      'Aledo began in the late 1870s as Parker’s Station, a farming settlement in the Clear Fork valley of the Trinity River, and in 1879 it became the first coal and water stop in Parker County for westbound Texas and Pacific trains. The town took its present name in 1882 and has grown quickly since the 1970s, reaching 4,858 residents by 2020. Around the small downtown, subdivisions such as Bear Creek and the Parks of Aledo put homes on large lots, and a gated driveway is ordinary here. The valley matters for those gates. Lower ground near creeks tends to hold clay and moisture, so a post set there can shift with wet and dry spells, and a gate that ran smoothly in spring may bind by August. Many owners also want phone-based access and camera intercoms, which bring their own Wi-Fi and power issues at the end of a long drive. For automatic gate repair in Aledo, we check posts and alignment as well as electronics.',
    faqs: [
      {
        q: 'Our gate works in spring but binds every summer. Why?',
        a: 'Near the creeks and lower ground around Aledo, the soil holds more clay and moisture, and posts set in it move a little as the ground wets and dries. By late summer a leaf can drop or twist just enough to drag or miss its latch. Adjusting hinges and the latch helps short term. If the post keeps moving, it needs a deeper or wider footing.',
      },
      {
        q: 'Can you add phone control or a camera intercom to our existing gate?',
        a: 'Usually, yes. Most current operators, including LiftMaster and Elite models common in Aledo, accept smart controllers, cellular or Wi-Fi modules and video intercoms. The usual hurdle is signal and power at a gate far from the house. We check whether Wi-Fi reaches, whether cellular is better, and whether the gate’s power supply can carry the added load before recommending anything.',
      },
    ],
  },

  // Weatherford: sources: https://www.tshaonline.org/handbook/entries/weatherford-tx, https://www.weatherfordtx.gov/721/Brief-History, https://www.weatherford-chamber.com/weatherford/visit-weatherford.html, https://capitol.texas.gov/tlodocs/89R/billtext/html/SR00078F.htm, real estate listings (Hidden Creeks, Saddlecrest Estates, Hillcrest Addition, College Park)
  weatherford: {
    zips: ['76086', '76085', '76087', '76088'],
    neighborhoods: ['Downtown courthouse square', 'Hidden Creeks', 'Saddlecrest Estates', 'Hillcrest Addition', 'College Park', 'Lake Weatherford shoreline'],
    landmarks: ['Parker County Courthouse', 'Chandor Gardens', 'First Monday Trade Days grounds', 'Lake Weatherford'],
    majorRoads: ['I-20', 'US 180', 'SH 171', 'FM 51'],
    nearbyCities: ['hudson-oaks', 'annetta-north', 'peaster', 'willow-park', 'annetta', 'cool'],
    responseBand: '',
    gateProfile: {
      dominant: 'A county seat surrounded by horse and cattle property, with historic in-town homes, newer subdivisions and a wide ring of ranch acreage',
      commonGateTypes: ['Ranch entrance swing', 'Estate swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Elite', 'DoorKing'],
      commonIssues: [
        'Gates sized for horse trailers sagging on their posts',
        'Horses and stock leaning on or kicking gate leaves',
        'Solar and battery failures on outlying acreage',
        'High-cycle wear on business and equipment-yard gates',
      ],
    },
    localAngle:
      'Weatherford has been the Parker County seat since 1858 and bills itself as the Cutting Horse Capital of the World, a title owed to the nearby headquarters and major events of the National Cutting Horse Association. Horses shape a great deal of the gate work around town. Ranch and equestrian properties need entrances wide and tall enough for a gooseneck trailer, so leaves of sixteen feet or more on a single post are common, and that weight steadily pulls hinges and posts out of line. Horses are hard on gates in their own way: they lean, rub and occasionally kick, and an unprotected photo eye or keypad post at horse height rarely lasts. Within the city, the picture is different. Historic homes near the courthouse square, newer subdivisions such as Hidden Creeks and busy commercial yards along I-20 and US 180 each bring their own gates. A ranch swing gate in Weatherford needs the post and hinge engineering done right before any operator will last.',
    faqs: [
      {
        q: 'Our wide trailer gate sags more every year. Can it be fixed without replacing it?',
        a: 'Often it can. On wide ranch gates around Weatherford, the sag usually comes from the hinge post leaning or the hinges wearing, not the gate itself. Resetting or bracing the post, fitting heavier hinges and adding a wheel or a center stop can bring the leaf back level. If the frame is bent, straightening it or adding bracing may still save it.',
      },
      {
        q: 'We keep horses. What should we watch for with an automatic gate?',
        a: 'Safety first: the gate should reverse reliably on contact, with photo eyes and edges positioned so an animal cannot be trapped. Keep keypads and sensors out of reach of heads and hooves or protect them. Also set the close timer so a gate does not shut on a horse being led through. We check all of this during service on equestrian property.',
      },
    ],
  },

  // Mineral Wells: sources: https://www.tshaonline.org/handbook/entries/mineral-wells-tx, https://en.wikipedia.org/wiki/Baker_Hotel_(Mineral_Wells,_Texas), https://www.beg.utexas.edu/texas-through-time/palo-pinto.html, https://tpwd.texas.gov/state-parks/lake-mineral-wells/history, https://www.guidestar.org/Profile/75-1547726, real estate listings (Pasadena Heights)
  'mineral-wells': {
    zips: ['76067'],
    neighborhoods: ['Downtown Mineral Wells', 'Holiday Hills', 'Pasadena Heights', 'Wolters Industrial Park (former Fort Wolters)', 'Lake Mineral Wells area'],
    landmarks: ['Baker Hotel', 'Lake Mineral Wells State Park', 'Former Fort Wolters', 'Holiday Hills Country Club'],
    majorRoads: ['US 180', 'US 281', 'FM 1821'],
    nearbyCities: ['cool', 'millsap', 'peaster', 'weatherford', 'lipan'],
    responseBand: '',
    gateProfile: {
      dominant: 'Hilly, rocky country at the junction of US 180 and US 281, mixing an older town core, industrial sites on the former Fort Wolters base and surrounding ranch land',
      commonGateTypes: ['Commercial slide', 'Ranch entrance swing', 'Residential swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'HySecurity'],
      commonIssues: [
        'Posts set in rock or thin soil over sandstone',
        'Gates on sloping or uneven hillside drives',
        'High-cycle wear on industrial and commercial gates',
        'Older operators on historic in-town properties',
      ],
    },
    localAngle:
      'Mineral Wells sits at the junction of US 180 and US 281 in Palo Pinto County, a town built on the late 1800s mineral-water boom that gave the country Crazy Water and, in 1929, the Baker Hotel. The country around it is hilly and rocky, the same sandstone and conglomerate exposed in the cliffs at Lake Mineral Wells State Park east of town. That ground changes gate work in two ways. First, footings: a post may sit on shallow soil over rock, which holds well until it does not, and a hole drilled for a new post can hit stone a foot down. Second, slope. Hillside drives make a swing leaf drag partway through its arc, so slide gates or careful hinge placement often work better. The other side of town is industrial. Former Fort Wolters land is now Wolters Industrial Park, where a commercial gate in Mineral Wells runs many cycles a day and needs an operator rated for that duty.',
    faqs: [
      {
        q: 'Our installer hit rock setting a gate post. Is the post going to hold?',
        a: 'It can hold very well if it was done properly. Around Mineral Wells, rock is often close to the surface, and a post needs to be anchored into it, by drilling and pinning or a properly sized core, rather than set in a shallow pocket of soil on top. If a post is moving, we check how it was set before suggesting a re-set or a different footing.',
      },
      {
        q: 'Do you service commercial and industrial gates in Mineral Wells?',
        a: 'Yes. We work on commercial slide gates, barrier arms and access control, including the high-cycle gates used at industrial sites such as those in Wolters Industrial Park. For a business, the key questions are how many cycles a day the gate makes and whether the operator was rated for it. We also set up maintenance visits so problems are caught before they stop a shift.',
      },
    ],
  },

  // Bristol: sources: https://en.wikipedia.org/wiki/Bristol,_Texas, https://hrcranch.com/property/bristol-609-ranch-ellis-texas/7410/, https://century21judgefite.com/property-detail/21134302/
  bristol: {
    zips: ['75119'],
    neighborhoods: ['River Bottoms', 'Union Hill', 'FM 660 corridor', 'Slate Rock Road', 'Whitehouse Road'],
    landmarks: ['Bristol School community center', 'Bristol Cemetery', 'Union Hill Cemetery', 'Trinity River bottoms'],
    majorRoads: ['FM 660', 'FM 813', 'Union Hill Road'],
    nearbyCities: ['palmer', 'ferris', 'combine', 'wilmer', 'seagoville', 'crandall'],
    responseBand: '',
    gateProfile: {
      dominant: 'Unincorporated farm and beef-ranch country in north-eastern Ellis County, running east toward the Trinity River bottoms',
      commonGateTypes: ['Ranch entrance swing', 'Pipe farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'Ghost Controls', 'Mighty Mule', 'LiftMaster'],
      commonIssues: [
        'Solar panels and batteries on entrances far from the house',
        'Low-lying drives that hold water after heavy rain',
        'Cattle and trailers knocking leaves out of line',
        'Remotes and keypads losing range across open pasture',
      ],
    },
    localAngle:
      'Bristol was first settled in the 1840s as Brockville, beside the Trinity River, and after fire destroyed that first townsite the community moved and spent the next century as a supply point for area farms and beef ranches. That history is still the shape of the place: a census-designated community of a little over 700 people along FM 660, with acreage on every side and the river bottoms to the east. Gates here are mostly ranch entrances rather than estate driveways, set well back from the road and often a long way from a power drop, so a large share of them run on solar. When an owner calls about automatic gate repair in Bristol, the cause is usually agricultural: a battery cooked by a summer in an unvented box, a leaf that a trailer or a cow has pushed out of line, or a low entrance where standing water has reached the operator.',
    faqs: [
      {
        q: 'Our ranch gate runs on solar and dies by late afternoon in winter. Is the panel too small?',
        a: 'Often it is the battery rather than the panel. Batteries sealed in a box on open ground take a beating through a Bristol summer and lose capacity long before they fail outright, so the gate copes in June and gives up on short December days. We test the battery under load, check the panel angle and wattage against how many cycles the gate really does, and look for hidden drains such as an extra receiver or a lit keypad.',
      },
      {
        q: 'Do you cover the unincorporated areas around Bristol off FM 660?',
        a: 'Yes. Bristol and the farm roads around it, out toward the Trinity bottoms, fall inside our Ellis County area. Rural addresses can be hard to find, so when you call, give us the road name, the nearest crossroad and a short description of the entrance. If the gate sits on a private road behind a neighbor’s gate, tell us how we get through that one as well, so the visit is not stopped at the first fence.',
      },
    ],
  },

  // Ferris: sources: https://en.wikipedia.org/wiki/Ferris,_Texas, https://www.ferristexas.gov/node/721, https://www.texasescapes.com/CentralTexasTownsNorth/Ferris-Texas.htm, https://www.centurycommunities.com/find-your-home/texas/dallas-fort-worth-metro/ferris/sperling-place-farms, https://www.newhomesource.com/basiccommunity/community-198035/bluff-springs-ferris-tx-75125, TxDOT FM 664 designation file
  ferris: {
    zips: ['75125'],
    neighborhoods: ['Sperling Farms', 'Bluff Springs', 'Historic Downtown Ferris', 'Ten Mile Road'],
    landmarks: ['Historic Downtown Ferris', 'Ferris Red Oak Municipal Heliport', 'Dallas South Port Airport', 'Trinity River corridor'],
    majorRoads: ['I-45', 'FM 664', 'FM 660', 'FM 983'],
    nearbyCities: ['wilmer', 'lancaster', 'palmer', 'bristol', 'red-oak', 'hutchins'],
    responseBand: '',
    gateProfile: {
      dominant: 'A brick-making railroad town on I-45 where new subdivisions sit beside older in-town lots and rural acreage toward the Trinity corridor',
      commonGateTypes: ['Residential swing', 'Commercial slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'US Automatic'],
      commonIssues: [
        'Brick and masonry gate columns tilting in expansive clay',
        'Hinge anchors working loose in mortar joints',
        'High-cycle wear on commercial and yard gates near I-45',
        'Slide tracks pushed out of level by seasonal soil movement',
      ],
    },
    localAngle:
      'Ferris had six brick plants running by 1914, and the town still calls itself The City that Bricked the World. The same mineral-rich clay that fed those kilns is what every gate post in Ferris stands in, and it is not kind ground for a gate. It swells when wet, shrinks and cracks in an August drought, and it shifts anything set into it a little every season. Around here that often means a gate hung on brick or masonry columns, which look permanent but are heavy and rigid, so when the footing rocks the whole pier tilts and the hinge bolts begin working loose in the mortar. A swing gate that has started dragging or no longer reaches its stop is frequently a column problem rather than an operator fault. Before any gate opener repair in Ferris we check the column for plumb and the anchors for movement, because a new motor on a pier that is still leaning only buys a few months.',
    faqs: [
      {
        q: 'Our brick gate column has a crack running up it. Can the gate still be fixed?',
        a: 'Usually, but the column comes first. A crack climbing through the mortar near the hinge side often means the footing is rocking in clay, and the weight of a swinging leaf keeps prying at it. We check whether the pier is still moving, whether the hinge anchors still sit in solid brick, and whether it makes more sense to rebuild the footing or to carry the gate on a steel post set beside the column so the masonry stops doing the work.',
      },
      {
        q: 'Do you work on commercial gates near I-45 in Ferris?',
        a: 'Yes. Yards, storage lots and business entrances along the I-45 corridor are a big part of gate work in this area, and they wear differently from a home gate because they cycle far more often. We service slide operators, barrier arms and access control, and we look at whether the operator on site was rated for the traffic it now handles, since an undersized unit is behind many repeat breakdowns on busy commercial entrances.',
      },
    ],
  },

  // Maypearl: sources: https://en.wikipedia.org/wiki/Maypearl,_Texas, https://www.tshaonline.org/handbook/entries/maypearl-tx, TxDOT FM 916 designation file, https://aaronlayman.com/tx/maypearl/creekview-hills/116-creekview-circle, https://mod2141.realgeeks.com/property/21332635/
  maypearl: {
    zips: ['76064'],
    neighborhoods: ['Creekview Hills', 'Eyrie Meadows', 'Wilemon Farms', 'Brindley Acres', 'Downtown Maypearl'],
    landmarks: ['Downtown Maypearl', 'Historic downtown bank building', 'Maypearl High School'],
    majorRoads: ['FM 66', 'FM 916', 'FM 157'],
    nearbyCities: ['waxahachie', 'venus', 'grandview', 'midlothian', 'milford', 'alvarado'],
    responseBand: '',
    gateProfile: {
      dominant: 'Small-town lots in the center and two-acre-plus homesites and pasture spreading out along the farm roads of western Ellis County',
      commonGateTypes: ['Acreage driveway swing', 'Ranch entrance swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Mighty Mule', 'Ghost Controls'],
      commonIssues: [
        'Long single leaves on wide openings sagging at the latch end',
        'Solar entrances on long rural drives',
        'Storm and surge damage to control boards',
        'Clay-soil movement on hinge posts in open land',
      ],
    },
    localAngle:
      'Maypearl began as a settlement called Eyrie and took its present name in 1903, after the daughters of two officials of the International-Great Northern Railroad. The city itself covers less than a square mile and holds fewer than a thousand people, so most of the gates in the Maypearl area are not in town at all. They sit on the two-acre and larger homesites along FM 66, FM 157 and FM 916, where buyers fence pasture and want an entrance wide enough for a horse trailer. Wide openings are where the trouble starts. A sixteen-foot leaf hung from one post puts a great deal of leverage on that post and its hinges, and in shrink-swell clay the free end slowly drops until it drags or misses the latch. Owners tend to blame the gate motor first, but a motor straining against a sagging leaf is a symptom. Re-hanging, adding a wheel or splitting the opening into a pair often cures what a new operator would not.',
    faqs: [
      {
        q: 'We are fencing acreage outside Maypearl. Should the entrance be one wide gate or a double swing?',
        a: 'For openings past about fourteen feet, a pair of leaves meeting in the middle usually lasts better than one long leaf, because each post carries half the weight and half the leverage. A double swing does need two operators or a dual kit and a solid center stop. If the drive is level and there is room along the fence line, a slide gate avoids hinge sag altogether. We can look at the site and the ground before you commit to posts.',
      },
      {
        q: 'Can a solar opener handle a gate at the end of a long country drive?',
        a: 'Yes, if it is sized honestly. The panel and battery have to cover the number of opens per day plus every powered accessory, such as a keypad, a remote receiver and any lighting, through a run of cloudy winter days. Most failures we find on rural solar gates come from an undersized battery or a panel shaded by a tree that has grown since installation, not from the operator itself.',
      },
    ],
  },

  // Milford: sources: https://en.wikipedia.org/wiki/Milford,_Texas, https://en.wikipedia.org/wiki/Texas_Presbyterian_College, https://atlas.thc.texas.gov/Details/5139007129, https://www.hmdb.org/m.asp?m=117283
  milford: {
    zips: ['76670'],
    neighborhoods: ['Downtown Milford', 'Mill Creek valley', 'Main Street (US 77) corridor', 'FM 308 corridor'],
    landmarks: ['Milford Presbyterian Church', 'St. James A.M.E. Church', 'Milford water tower', 'Milford Cemetery'],
    majorRoads: ['I-35E', 'US 77', 'FM 308'],
    nearbyCities: ['maypearl', 'grandview', 'waxahachie', 'venus', 'alvarado', 'midlothian'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small farm town in the south-western corner of Ellis County, set in the Mill Creek valley, with in-town lots giving way to cropland and pasture',
      commonGateTypes: ['Ranch entrance swing', 'Residential swing', 'Pipe farm gate'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Manual farm gates being converted to automatic on weak posts',
        'Solar operators on entrances away from mains power',
        'Clay soil heaving gate posts out of plumb',
        'Buried utility and pipeline lines near new post holes',
      ],
    },
    localAngle:
      'Milford grew up in the Mill Creek valley in the 1850s and became a cotton shipping point once the railroad arrived in 1890. In November 2013 a drilling crew punctured a liquefied petroleum gas pipeline near US 77 and FM 308, and the whole town was evacuated to Italy while the fire burned for about two days. That event is worth remembering for anyone planning gate installation in Milford, because a new entrance means digging: post holes, a footing for the operator pad and often a trench for low-voltage wire or conduit back to the house. Farmland here is crossed by buried lines that are not always where an old fence line suggests. We have Texas 811 locate the utilities before any hole is dug, and on rural tracts we also ask the owner about known pipeline easements. The rest of the work is typical for a small Ellis County farm town: turning a manual pipe gate into an automatic one, and making sure the existing hinge post can carry an operator.',
    faqs: [
      {
        q: 'Can you automate the manual pipe gate we already have at our farm entrance?',
        a: 'Often, yes, but the post decides it. An operator adds push and pull loads that a hand-swung gate never sees, and older wood or thin-wall pipe hinge posts tend to flex or lean once a motor is driving the leaf. We check the post, the hinges and whether the gate swings freely and level by hand. If those are sound, a solar swing operator can usually be added without replacing the gate itself.',
      },
      {
        q: 'Do you call 811 before digging for a new gate?',
        a: 'Every time. Texas law requires a locate request before excavation, and around Milford there is good local reason to take it seriously. Post holes and operator footings go deep enough to reach shallow lines, and conduit trenches can run a long way across a property. We wait for the marks, plan post and trench positions around them, and ask about private lines, such as water to a barn, that 811 does not mark.',
      },
    ],
  },

  // Oak Leaf: sources: https://www.tshaonline.org/handbook/entries/oak-leaf-tx, https://en.wikipedia.org/wiki/Oak_Leaf,_Texas, https://www.oakleaftexas.org/164/Community, TxDOT FM 664 project notices (corridor through Oak Leaf)
  'oak-leaf': {
    zips: ['75154'],
    // Subdivision names are the ones the Handbook of Texas records joining or
    // founding the city (Red Oak Creek HOA 1983, Little Creek and Lark Lane
    // 1987, Willow Creek Farms 1998, Chapman Ranch Estates 2000).
    neighborhoods: ['Red Oak Creek', 'Little Creek', 'Lark Lane', 'Willow Creek Farms', 'Chapman Ranch Estates'],
    landmarks: ['Oak Leaf City Hall', 'Red Oak Creek'],
    majorRoads: ['FM 664 Ovilla Road', 'I-35E', 'US 77'],
    nearbyCities: ['ovilla', 'glenn-heights', 'red-oak', 'desoto', 'midlothian', 'cedar-hill'],
    responseBand: '',
    gateProfile: {
      dominant: 'A wooded residential city in northern Ellis County, incorporated by homeowners in 1983 and built around large lots under mature oaks',
      commonGateTypes: ['Residential swing', 'Wrought iron driveway swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'Viking'],
      commonIssues: [
        'Tree roots lifting operator pads and pushing posts off line',
        'Falling limbs bending leaves and operator arms',
        'Acorns and leaf litter fouling slide tracks',
        'Heavy shade starving solar panels',
      ],
    },
    localAngle:
      'Oak Leaf was incorporated in August 1983 by about a hundred members of the Red Oak Creek Homeowners Association, and they named the new town for the big oak trees that still cover much of it. Those trees are the main thing we think about when working here. Under a heavy canopy, a solar operator that would be fine in open country can go weeks without enough sun, so batteries run down through autumn and winter and the gate stalls halfway. Roots spread under driveway aprons and can lift an operator pad or nudge a post off line a little more each year. Acorns and leaf litter collect in slide tracks, and a low branch swaying in front of a photo-eye will reverse a closing gate for no visible reason. When someone asks us about a driveway gate in Oak Leaf that misbehaves only on some days, we look up at the canopy before we open the control box.',
    faqs: [
      {
        q: 'Our gate reverses on its own when closing, but only on windy days. Why?',
        a: 'Under the oaks here, the usual answer is something moving through the photo-eye beam: a branch, a vine or leaves blowing across it. The safety system cannot tell a limb from a car, so it reopens the gate. We check the beam path, trim or relocate as needed and make sure the eyes are aligned and shielded. If the fault continues with a clear beam, we move on to the edge sensors and the control board.',
      },
      {
        q: 'Is solar a good idea for a gate in Oak Leaf?',
        a: 'It depends entirely on where the panel can sit. Many lots here are shaded most of the day, and a panel under a canopy produces a fraction of its rating. If there is a sunny spot within reach, the panel can go there on a pole with a longer cable. If not, running low-voltage power from the house is usually the more dependable choice for a busy family driveway.',
      },
    ],
  },

  // Ovilla: sources: https://en.wikipedia.org/wiki/Ovilla,_Texas, https://aaronlayman.com/tx/ovilla/ovilla-parc-rev/123-claremont-drive, https://aaronlayman.com/tx/ovilla/broadmoor-estates/330-penrose-drive/, https://www.tdlr.texas.gov/TABS/Search/Print/TABS2025003645 (Ovilla City Park, 105 S Cockrell Hill Rd), TxDOT FM 664 / Westmoreland Rd hearing notice
  ovilla: {
    zips: ['75154'],
    neighborhoods: ['Ovilla Parc', 'Broadmoor Estates', 'Ashburne Glen', 'Bryson Manor', 'Ovilla Oaks', 'Shadow Wood'],
    landmarks: ['Shiloh Cumberland Presbyterian Church', 'Downtown Ovilla', 'Red Oak Creek', 'Ovilla City Park'],
    majorRoads: ['FM 664 Ovilla Road', 'Westmoreland Road', 'Cockrell Hill Road'],
    nearbyCities: ['glenn-heights', 'oak-leaf', 'desoto', 'red-oak', 'cedar-hill', 'midlothian'],
    responseBand: '',
    gateProfile: {
      dominant: 'Larger-lot subdivisions and custom homes along upper Red Oak Creek, straddling the Dallas and Ellis county line',
      commonGateTypes: ['Wrought iron double swing', 'Estate swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'Viking', 'DoorKing'],
      commonIssues: [
        'Clay-soil movement throwing double gates out of alignment',
        'Creek-side lots holding water around operator footings',
        'Ornamental iron rusting along the bottom rail',
        'Center locks no longer engaging on paired leaves',
      ],
    },
    localAngle:
      'Ovilla incorporated in 1963 largely to keep from being annexed by DeSoto, and because the railroads and major highways passed it by, the town grew slowly and stayed low-density. What filled in later were subdivisions such as Ovilla Parc and Broadmoor Estates and custom homes on generous lots along upper Red Oak Creek. That housing brings a lot of ornamental iron double swing gates, often hung between masonry columns at the front of the property. A pair of leaves is less forgiving than a single gate: if one column shifts even slightly in the clay, the two leaves stop meeting cleanly in the middle, the lock no longer engages and one operator ends up shoving against the other. Lots that slope toward the creek add standing water around footings after storms. Most swing gate calls in Ovilla come down to alignment, so we check both columns and the center stop before touching either operator.',
    faqs: [
      {
        q: 'Our double gates no longer line up in the middle. Is that the operators?',
        a: 'Rarely. On a pair of iron leaves, a mismatch at the center nearly always starts with a column or hinge post that has moved, which in Ovilla clay is common after a wet spring or a long drought. The operators then fight to close a gap they were never set for. We measure each column for plumb, adjust or reset the hinges and center stop, and only then reset the operator limits.',
      },
      {
        q: 'Do you service gates on the Dallas County side of Ovilla too?',
        a: 'Yes. Ovilla spans the Dallas and Ellis county line, and we work on both sides, along with Glenn Heights, Oak Leaf, Red Oak and Cedar Hill nearby. When you call, the street and the type of gate are enough for us to plan the visit. If the gate is an HOA entrance rather than a private driveway, let us know who manages it so the right person can approve the work.',
      },
    ],
  },

  // Palmer: sources: https://en.wikipedia.org/wiki/Palmer,_Texas, https://www.txgenwebcounties.org/ellis/_towns/Palmer_Texas_History.html, TxDOT FM 813 designation file, https://aaronlayman.com/tx/palmer/estates-of-palmer/2340-oak-knoll-drive, https://aaronlayman.com/tx/palmer/the-meadows-of-palmer-ph-2/105-cherry-point-drive
  palmer: {
    zips: ['75152'],
    neighborhoods: ['The Meadows of Palmer', 'Estates of Palmer', 'Copper Penny Estates', 'Green Acres South', 'Downtown Palmer'],
    landmarks: ['Downtown Palmer', 'Dallas South Port Airport', 'First Christian Church'],
    majorRoads: ['I-45', 'FM 813', 'FM 660'],
    nearbyCities: ['bristol', 'ferris', 'red-oak', 'waxahachie', 'wilmer', 'lancaster'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad town on I-45 where in-town subdivisions give way to one-acre homesites and open farmland',
      commonGateTypes: ['Acreage driveway swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Elite', 'Mighty Mule'],
      commonIssues: [
        'Wind load on solid privacy gates across open lots',
        'Clay heaving posts and slide tracks',
        'Solar on one-acre lots with long drives',
        'Remote range across wide frontages',
      ],
    },
    localAngle:
      'Palmer owes its existence to the railroad: when the Houston and Texas Central line came through in 1869, landowner Alfred Anthony granted the right of way for a dollar, and the town that followed took the name of Judge Palmer of Houston, an investor in the line. Today I-45 runs past the east side of town, and newer housing has spread onto open ground, with one-acre homesites in places like the Estates of Palmer. Out on flat, treeless lots the wind becomes part of the gate design. A solid privacy gate, or one with close-set pickets, acts like a sail, and a strong gust from the south can stall an operator, trip its obstruction sensing or bend a leaf at the hinge. Owners weighing a sliding gate in Palmer against a swing gate should factor that in. Slide gates generally cope with wind better, as long as the track sits on a footing the clay cannot tilt.',
    faqs: [
      {
        q: 'Our new privacy gate stalls on windy days. Is the opener too weak?',
        a: 'It may be undersized for the panel area, but the real load is the wind. A solid gate on an open lot around Palmer can take far more force from a gust than from its own weight. Options include a higher-rated operator, adding gaps or louvers to the infill, adjusting force and obstruction settings within the manufacturer’s safe limits, or moving to a slide layout where the gate is supported along its length.',
      },
      {
        q: 'We are on an acre lot. Do you install new gates as well as repair them?',
        a: 'Yes. We handle gate installation from layout through wiring, including posts, the operator, safety devices and access control such as keypads or phone apps. On larger Palmer lots the main decisions are swing versus slide, mains power versus solar depending on how far the gate sits from the house, and how the drive drains. We would rather settle those on site than guess from a photo.',
      },
    ],
  },

  // Godley: sources: https://en.wikipedia.org/wiki/Godley,_Texas, https://www.bloomfieldhomes.com/new-homes/tx/godley/, https://aaronlayman.com/tx/godley/star-ranch-ph-3/1128-goldenrod-drive/
  godley: {
    zips: ['76044'],
    neighborhoods: ['Star Ranch', 'Coyote Crossing', 'Godley Ranch Estates', 'Wildcat Ridge', 'Downtown Godley'],
    landmarks: ['Downtown Godley', 'Godley ISD campuses', 'Santa Fe rail line through town'],
    majorRoads: ['SH 171', 'FM 2331', 'FM 917'],
    nearbyCities: ['cresson', 'joshua', 'cleburne', 'keene', 'crowley', 'burleson'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad town in north-western Johnson County where new master-planned subdivisions are spreading among older acreage and ranch land',
      commonGateTypes: ['Ranch entrance swing', 'Community entrance swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Ghost Controls', 'DoorKing'],
      commonIssues: [
        'Builder-installed gates drifting as new fill settles',
        'Construction dust on photo-eyes and in operator gearing',
        'Acreage gates on solar far from mains power',
        'Phone and keypad access on rural entrances with patchy signal',
      ],
    },
    localAngle:
      'Godley was laid out in 1886 on land donated by R. B. Godley, a Cleburne lumber merchant who also gave the railroad its right of way, and for most of the twentieth century it stayed a small farm town. That is changing quickly. Bloomfield and other builders are filling communities such as Star Ranch, Coyote Crossing and Wildcat Ridge, so Godley now has two very different kinds of gate side by side. On one side are the ranch and acreage entrances on SH 171 and the farm roads, often solar, at the end of long drives and maintained by the owner. On the other are subdivision entrances and driveway gates fitted during construction, when dust, mud and heavy trucks are hard on photo-eyes, loops and tracks. A gate installed mid-build and never adjusted once the dirt settled is a common source of early faults, and a check-up soon after move-in tends to pay for itself.',
    faqs: [
      {
        q: 'Our builder installed the gate and it has been unreliable since we moved in. What usually causes that?',
        a: 'On new-build lots around Godley, fresh fill under the drive and around the posts keeps settling for a year or two, so a gate that was level at handover can drift. Construction dust also coats photo-eyes and works into operator gearing. We re-level and reset limits, clean and realign the safety devices, check wiring that may have been nicked during landscaping, and confirm the operator suits the size of the leaf.',
      },
      {
        q: 'We are on acreage outside Godley. Can you add keypad or phone access to our ranch gate?',
        a: 'Yes. Most current operators accept a wireless keypad, a long-range receiver or a cellular access module so the gate can be opened from a phone. On a solar gate every accessory draws power, so we confirm the panel and battery can carry it. Cellular coverage varies across rural Johnson County, and we test the signal at the gate itself before recommending a phone-based system.',
      },
    ],
  },

  // Grandview: sources: https://en.wikipedia.org/wiki/Grandview,_Texas, https://www.tshaonline.org/handbook/entries/grandview-tx, TxDOT FM 916 designation file, https://aaronlayman.com/tx/grandview/stowe-vista/1433-weston-ridge/, https://aaronlayman.com/tx/grandview/grand-view-ranch/194-pr-453, https://aaronlayman.com/tx/grandview/grandview-heights-add/6120-county-road-401/
  grandview: {
    zips: ['76050'],
    neighborhoods: ['Stowe Vista', 'Grandview Heights', 'Grand View Ranch', 'Downtown Grandview'],
    landmarks: ['Downtown Grandview business district', 'Grandview High School'],
    majorRoads: ['I-35W', 'SH 81', 'FM 916', 'FM 4'],
    nearbyCities: ['alvarado', 'maypearl', 'rio-vista', 'venus', 'keene', 'cleburne'],
    responseBand: '',
    gateProfile: {
      dominant: 'A farm and mill town in south-eastern Johnson County ringed by large-acreage homesites and gated rural communities',
      commonGateTypes: ['Community entrance swing', 'Acreage driveway swing', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Viking', 'Ghost Controls'],
      commonIssues: [
        'Shared community gates cycling for many owners and visitors',
        'Backup batteries failing quietly on rural entrances',
        'Solar entrances on ten-acre tracts',
        'Shared access codes multiplying over the years',
      ],
    },
    localAngle:
      'Grandview incorporated in 1891, after the First National Bank of Grandview opened, and by then John W. Westbrook’s mill, the first in Johnson County, had made it a farming center. A fire in 1920 destroyed close to thirty businesses and a hundred homes, and the town rebuilt. Much of the newer growth is out in the country rather than downtown, in acreage communities such as Stowe Vista, a gated subdivision of multi-acre lots on Weston Ridge, and Grand View Ranch with tracts of around ten acres. A shared community gate on rural land works harder than it looks: every owner, guest, delivery driver and contractor uses it, codes get passed around, and a single failure locks out the whole street. For a community entrance or commercial gate near Grandview, we look at the operator’s duty rating, the backup power and how access is managed, since a keypad with dozens of shared codes is a security problem as well as a maintenance one.',
    faqs: [
      {
        q: 'Our rural subdivision shares one entrance gate. What happens when the power goes out?',
        a: 'That depends on how it was built. A community gate should have battery backup that can run a number of cycles on its own, plus a manual release or a fail-safe arrangement agreed with the fire department so emergency vehicles are never stuck outside. Out near Grandview, where outages can drag on after storms, we test the backup batteries regularly, because they lose capacity without warning and tend to fail on the night they are needed.',
      },
      {
        q: 'Can you set up separate codes for each owner at our community gate?',
        a: 'Yes. Most modern keypads and access controllers support individual codes, and many log which code was used and when. Moving from one shared code to individual ones makes it easy to remove a former owner or contractor without changing everyone else’s access. Cloud-managed systems let the HOA or a board member manage codes from a phone, though they need a reliable cellular or internet connection at the gate.',
      },
    ],
  },

  // Joshua: sources: https://en.wikipedia.org/wiki/Joshua,_Texas, https://en.wikipedia.org/wiki/Chisholm_Trail_Parkway, https://aaronlayman.com/tx/joshua/caddo-peak-estate/1313-apache-court, https://aaronlayman.com/tx/joshua/mountain-valley-ph-01/703-ridgeway-road/, https://aaronlayman.com/tx/joshua/cherry-ridge-ph-02/4116-black-forest-trail/
  joshua: {
    zips: ['76058'],
    neighborhoods: ['Mountain Valley Lake', 'Caddo Peak Estates', 'Cherry Ridge', 'Oak Trail Estates', 'Windy Oaks'],
    landmarks: ['Brushy Knob', 'Village Creek', 'Mountain Valley Lake'],
    majorRoads: ['SH 174 Broadway Street', 'FM 917', 'Chisholm Trail Parkway'],
    nearbyCities: ['keene', 'burleson', 'cleburne', 'godley', 'crowley', 'alvarado'],
    responseBand: '',
    gateProfile: {
      dominant: 'A growing Cross Timbers town between Burleson and Cleburne, mixing in-town subdivisions with lake lots and acreage under the same address',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'Mighty Mule'],
      commonIssues: [
        'Heavy daily use on commuter household driveway gates',
        'Solar ranch gates on long rural drives',
        'Wildlife and livestock pressing on acreage gates',
        'Wear on commercial gates along SH 174',
      ],
    },
    localAngle:
      'Joshua’s railroad station was first called Caddo Peak, but the post office rejected that name, and the community organized as Joshua in 1881. It counted 7,891 residents in 2020, yet a Joshua address reaches well beyond the city limits: the school district alone covers more than 76 square miles, and the 76058 ZIP takes in places such as Mountain Valley Lake and acreage out toward Brushy Knob. So the gates we see under one town name are really three different jobs. In the subdivisions off SH 174 and FM 917 they are mostly residential swing and slide gates on mains power, opened many times a day by households that commute north toward Fort Worth. Out on the acreage it is solar ranch gates, long drives, deer and cattle. Along Broadway there are business entrances with their own duty demands. When you call about gate opener repair in Joshua, telling us which of those you have saves a second trip, because the parts we carry for each differ.',
    faqs: [
      {
        q: 'We live outside Joshua city limits but have a Joshua address. Do you cover us?',
        a: 'Yes. The 76058 area runs well past the city itself, out toward Mountain Valley Lake, Brushy Knob and the county roads between Joshua, Godley and Cleburne, and all of it is within the area we work. Rural driveways can be hard to spot from the road, so a gate description, the county road number and the nearest crossroad help us find you first time.',
      },
      {
        q: 'Our driveway gate gets used a dozen times a day. How often should it be serviced?',
        a: 'For a busy family gate, a yearly service is a sensible minimum, and twice a year if it is a slide gate on a chain drive. Frequent use wears hinges, rollers, chain and the operator’s gearing faster than most owners expect. A service covers lubrication, chain tension, limit and force settings, safety device tests and a battery check, and it usually catches the worn part before it strands you at the end of the drive.',
      },
    ],
  },

  // Keene: sources: https://en.wikipedia.org/wiki/Keene,_Texas, https://www.tshaonline.org/handbook/entries/keene-tx, https://aaronlayman.com/tx/keene/bristol-oaks/120-cheryl-drive, https://www.zillow.com/community/canyons/463547937_zpid/, https://aaronlayman.com/tx/keene/hillcrest-keene/100-rosedale-avenue/
  keene: {
    zips: ['76059'],
    neighborhoods: ['The Canyons', 'Bristol Oaks', 'Hillcrest', 'Wallen', 'Chisholm Trail'],
    landmarks: ['Southwestern Adventist University', 'Mizpah Gate', 'Elisa Carver Park', 'Chan Shun Centennial Library'],
    majorRoads: ['US 67', 'FM 2280'],
    nearbyCities: ['cleburne', 'joshua', 'alvarado', 'burleson', 'rio-vista', 'godley'],
    responseBand: '',
    gateProfile: {
      dominant: 'A college town built around an Adventist university, with campus, church and school grounds alongside residential streets east of Cleburne',
      commonGateTypes: ['Commercial slide', 'Barrier arm', 'Residential swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'HySecurity'],
      commonIssues: [
        'High-cycle wear on campus and institutional gates',
        'Barrier arms broken by vehicle strikes',
        'Access control and card or keypad faults',
        'Clay-soil movement on residential gate posts',
      ],
    },
    localAngle:
      'Keene grew around a school: in 1894 the Seventh-day Adventist General Conference opened a training school on 836 acres here, and it is now Southwestern Adventist University, the only four-year institution in Johnson County. The town’s gates reflect that. Alongside ordinary residential swing gates in neighborhoods such as The Canyons, Bristol Oaks and Hillcrest, there is a sizable share of institutional and commercial access: campus lots, church and school grounds, and small businesses along US 67 and FM 2280. Those gates are judged on uptime rather than looks, and a barrier arm or slide gate that cycles hundreds of times a week needs routine attention to its chain, rollers and safety edges before something fails.',
    faqs: [
      {
        q: 'Do you repair barrier arms and commercial slide gates as well as home gates?',
        a: 'Yes. Commercial gate repair is a large part of the work: barrier arms, heavy slide gates, card readers and the loop detectors that open exit lanes. On a lot that cycles hundreds of times a week we look at the wear parts, chain, rollers and arm, not just the fault that stopped it, so the same gate does not stop again a month later. Tell us when the site is quietest and we will plan the visit around it.',
      },
      {
        q: 'Our parking lot barrier arm keeps getting snapped. Is there a sturdier option?',
        a: 'There are a few. Breakaway arms are designed to release on impact so the operator is not damaged, and they are cheap to reset or replace. Better loop detection and clear signage reduce the tailgating that causes many strikes. For a lot that needs real security rather than traffic control, a slide gate paired with a barrier arm may be the better setup. We can look at how vehicles actually use the entrance first.',
      },
    ],
  },

  // Rio Vista: sources: https://en.wikipedia.org/wiki/Rio_Vista,_Texas, https://www.tshaonline.org/handbook/entries/rio-vista-tx, TxDOT FM 916 designation file, https://www.landsearch.com/properties/7811-county-road-1208-rio-vista-tx-76093/5392203
  'rio-vista': {
    zips: ['76093'],
    neighborhoods: ['Downtown Rio Vista', 'Nolan Ranch', 'Mustang Creek', 'Nolan River bottoms', 'SH 174 corridor'],
    landmarks: ['Nolan River', 'Phillip Nolan monument', 'Chisholm Trail historical marker'],
    majorRoads: ['SH 174', 'FM 916', 'County Road 1208'],
    nearbyCities: ['cleburne', 'keene', 'grandview', 'alvarado', 'joshua', 'godley'],
    responseBand: '',
    gateProfile: {
      dominant: 'A farm and ranch town on the Nolan River, split by its railroad tracks into flat black farmland to the east and rolling ranch country to the west',
      commonGateTypes: ['Ranch entrance swing', 'Pipe farm gate', 'Driveway slide'],
      commonBrands: ['US Automatic', 'Ghost Controls', 'Mighty Mule', 'LiftMaster'],
      commonIssues: [
        'Black clay heaving posts and slide tracks on the east side',
        'Uneven ground and long drives on west-side acreage',
        'Creek-side entrances taking water after hard rain',
        'Deer and cattle pressing on pasture gates',
      ],
    },
    localAngle:
      'Rio Vista is split by its railroad tracks in a way that matters for gates. The Handbook of Texas describes the land east of the tracks as flat black farmland and the land west of them as rolling country suited to ranching, running down to the Nolan River and Mustang Creek, which the townsite overlooks. East-side properties sit on heavy clay that swells and shrinks, so posts drift and slide gate tracks rise and fall with the seasons. West-side places, including newer acreage tracts such as Nolan Ranch off FM 916, tend to have long drives, uneven ground and solar entrances, plus deer and cattle that test every fence. The river bottoms add one more factor: low crossings and creek-side entrances that see water after hard rain. Automatic gate repair in Rio Vista therefore starts with which side of the tracks you are on, because the likely fault, and the parts worth bringing, differ from one side to the other.',
    faqs: [
      {
        q: 'Our gate is near the creek and the operator got wet in a storm. Is it ruined?',
        a: 'Not necessarily. Many operators survive a brief soaking if they are dried out before power is restored, but a control board that sat in water while powered is often finished, and silt left in gearing or a slide track causes wear later. We inspect the board, motor and wiring, clean out the mud and, where floods repeat, raise the operator or its pad above the level the water reaches.',
      },
      {
        q: 'Do you come out to acreage west of the Nolan River?',
        a: 'Yes. Rio Vista and the county roads either side of the Nolan River, including the tracts off FM 916 and County Road 1208, are within the area we cover from Cleburne southward. Many places out here sit behind a pasture gate or down an unmarked drive, so a gate code, a landmark and a phone number we can reach you on make the visit go smoothly.',
      },
    ],
  },

  // Venus: sources: https://en.wikipedia.org/wiki/Venus,_Texas, https://www.homes.com/venus-tx/76084/newest/p2/, https://aaronlayman.com/tx/venus/prairie-rdg-ph-1/6725-aster-drive/
  venus: {
    zips: ['76084'],
    neighborhoods: ['Goodland', 'Prairie Ridge', 'Patriot Estates', 'Somerset', 'Downtown Venus'],
    landmarks: ['Venus Square', 'Downtown Venus'],
    majorRoads: ['US 67', 'FM 157'],
    nearbyCities: ['alvarado', 'midlothian', 'mansfield', 'maypearl', 'grandview', 'cedar-hill'],
    responseBand: '',
    gateProfile: {
      dominant: 'A fast-growing town on US 67 straddling the Johnson and Ellis county line, where most of the housing and most of the gates are recent',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Community entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'US Automatic'],
      commonIssues: [
        'Setup faults on newly installed operators',
        'Warranty questions on young boards and motors',
        'Misaimed photo-eyes and loop sensitivity issues',
        'Clay-soil settling under new drives and posts',
      ],
    },
    localAngle:
      'Venus was platted in the late 1880s under the unlikely name of Gossip before J. C. Smythe renamed it, and its downtown later served as a filming location for the opening of Bonnie and Clyde. The modern story is growth: the 2020 census counted 4,361 people, and Census estimates now put the figure at roughly twice that, much of it in master-planned communities such as Goodland and Prairie Ridge. That makes the gate stock in Venus unusually young. Many operators here are still inside the manufacturer’s warranty, which changes how a repair should be approached. Before replacing a board or a gate motor, it is worth finding the installation date and checking whether the part is covered, and owners should keep the paperwork their builder or installer handed over. Early faults on young gates also tend to be setup issues, such as force and limit settings, loop sensitivity or a misaimed photo-eye, rather than worn-out parts.',
    faqs: [
      {
        q: 'Our gate is only two years old and has stopped working. Is it still under warranty?',
        a: 'Quite possibly. Many operator brands warrant the main components for several years, though terms vary and some depend on the installer registering the unit. Find the brand and model on the operator label and any paperwork from your builder. We diagnose the fault first, tell you which part has failed, and if it looks like a warranty item we will say so before you pay for a replacement part.',
      },
      {
        q: 'Do you work in Goodland and the other new communities around Venus?',
        a: 'Yes. Venus straddles the Johnson and Ellis county line and we work on both sides, including the newer master-planned neighborhoods off US 67. For a private driveway gate, just call. For an amenity or community entrance gate managed by an HOA, let us know who the management company is so the work can be approved and invoiced to the right place.',
      },
    ],
  },

  // Alvarado: sources: https://en.wikipedia.org/wiki/Alvarado,_Texas, https://www.lennar.com/new-homes/texas/dallas-ft-worth/alvarado/valor/watermill-collection, https://jome.com/new-home/tx/2540717-1045-nighthawk-trl-alvarado-tx-76009, https://aaronlayman.com/tx/alvarado/sunset-ridge/213-navajo-trail, https://aaronlayman.com/tx/alvarado/blue-water-oaks/105-red-oak-street
  alvarado: {
    zips: ['76009'],
    neighborhoods: ['Eagle Glen', 'Valor', 'Sunset Ridge', 'Blue Water Oaks', 'Downtown Alvarado'],
    landmarks: ['Alvarado Park Lake', 'Alvarado Parkway Park', 'US 67 and I-35W interchange'],
    majorRoads: ['I-35W', 'US 67'],
    nearbyCities: ['venus', 'keene', 'grandview', 'cleburne', 'joshua', 'burleson'],
    responseBand: '',
    gateProfile: {
      dominant: 'An interstate crossroads town where business yards near I-35W and US 67 sit beside new subdivisions and rural lots around Alvarado Park Lake',
      commonGateTypes: ['Cantilever slide', 'Barrier arm', 'Residential swing'],
      commonBrands: ['LiftMaster', 'HySecurity', 'DoorKing', 'Elite'],
      commonIssues: [
        'Vehicle and trailer strikes on yard gates',
        'Vehicle loops wearing out under heavy axles',
        'Light-duty operators asked to run commercial cycle counts',
        'Solar entrances on rural lots outside town',
      ],
    },
    localAngle:
      'Alvarado incorporated in 1885 and is the oldest city in Johnson County, and it sits where US 67 crosses I-35W, about 26 miles south of Fort Worth. That crossroads shapes the gate work here. Close to the interchange, the gates belong to yards, storage lots and businesses that need trucks in and out all day, so a commercial gate in Alvarado is more likely to be a heavy cantilever slide or a barrier arm than an ornamental swing. Those fail in predictable ways: a trailer clips the gate on a tight turn, a vehicle loop wears out under repeated heavy axles, or an operator rated for light commercial duty is asked to run hundreds of cycles a day. Away from the interchange the picture changes to subdivisions such as Eagle Glen and Valor and rural lots out near Alvarado Park Lake, where residential swing gates and solar entrances are the norm. On busy sites we size the operator to the duty cycle first, because that one decision largely sets how often the gate breaks.',
    faqs: [
      {
        q: 'A truck hit our slide gate and now it will not run. Can it be repaired or does it need replacing?',
        a: 'It depends on what took the hit. If the frame is bent but the rollers, track or cantilever carriages are sound, the panel can often be straightened or re-made and re-hung. If the impact pushed the operator off its pad or sheared the drive, those parts are replaced and the limits reset. We also look at why it happened, since a gate that keeps getting struck may need relocating, a wider opening or better loop placement.',
      },
      {
        q: 'Do you work in the newer Alvarado subdivisions like Eagle Glen and Valor?',
        a: 'Yes. We cover the whole of Alvarado, from the business sites by the interstate to the new subdivisions and the rural lots around Alvarado Park Lake, along with Venus, Keene and Grandview nearby. For a home driveway gate, a quick description of the gate and what it is doing wrong lets us bring the likely parts on the first visit.',
      },
    ],
  },

  // Cleburne: sources: https://en.wikipedia.org/wiki/Cleburne,_Texas, https://www.redfin.com/neighborhood/343545/TX/Cleburne/Westhill-Terrace, https://www.redfin.com/neighborhood/339456/TX/Cleburne/The-Retreat, https://aaronlayman.com/tx/cleburne/sunset-terrace/1309-manor-drive, https://aaronlayman.com/tx/cleburne/remington-ridge-ph-iii/714-wolf-creek-drive, https://www.rhodesteamtexas.com/homes/7501-Retreat-Boulevard/Cleburne/TX/76033/173135481/
  cleburne: {
    zips: ['76031', '76033'],
    neighborhoods: ['Westhill Terrace', 'Sunset Terrace', 'Remington Ridge', 'The Retreat', 'Cleburne Downtown Historic District'],
    landmarks: ['Johnson County Courthouse', 'Lake Pat Cleburne', 'Cleburne State Park', 'Layland Museum of History'],
    majorRoads: ['US 67', 'SH 174', 'SH 171', 'Chisholm Trail Parkway'],
    nearbyCities: ['keene', 'rio-vista', 'joshua', 'godley', 'alvarado', 'grandview'],
    responseBand: '',
    gateProfile: {
      dominant: 'The Johnson County seat, crossed by East and West Buffalo creeks, with older in-town neighborhoods, a large gated golf community and acreage toward the lake and state park',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Community entrance swing', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'US Automatic'],
      commonIssues: [
        'Operators and tracks on low lots taking water and silt after storms',
        'Community entrance gates running heavy daily traffic',
        'Older residential operators in established neighborhoods',
        'Clay-soil movement on posts across the east side of the city',
      ],
    },
    localAngle:
      'Cleburne is the Johnson County seat and was a Santa Fe railroad town for most of a century, with the railroad shops as its largest employer until they closed in 1989. The city now covers more than 36 square miles, and East and West Buffalo creeks run south through it toward the Nolan River and Lake Pat Cleburne. That drainage pattern matters for gates more than the size of the town does. Lots near the creeks and in the lower, southern part of the city take runoff after heavy storms, and an operator bolted to a low pad or a slide track set at grade can end up sitting in water and silt. In established neighborhoods such as Westhill Terrace and Sunset Terrace, a gate is usually a single residential swing or slide on mains power, while the gated golf community of The Retreat has its own staffed security entrance. Automatic gate repair in Cleburne is therefore several different problems, and we ask where your gate sits relative to the creeks before deciding what to bring.',
    faqs: [
      {
        q: 'Our slide gate track fills with mud every time it rains hard. What can be done?',
        a: 'On low Cleburne lots that is usually a drainage problem first and a gate problem second. Options include regrading so water runs past rather than along the track, adding a drain or gravel bed under it, raising the operator pad, or switching to a cantilever slide gate that has no ground track at all. Clearing the track repeatedly treats the symptom; changing where the water goes fixes it.',
      },
      {
        q: 'Do you work on gates on acreage near Lake Pat Cleburne and the state park?',
        a: 'Yes. We cover the whole Cleburne area, from in-town neighborhoods to rural property out toward Lake Pat Cleburne, Cleburne State Park and down to Rio Vista. Out there entrances are more often solar and further from the house, so let us know whether the gate runs on mains or solar power and roughly how long the drive is when you call.',
      },
    ],
  },

  // Cresson: sources: https://en.wikipedia.org/wiki/Cresson,_Texas, https://www.tshaonline.org/handbook/entries/cresson-tx, https://en.wikipedia.org/wiki/MotorSport_Ranch, listing subdivision tags (spencer.roveridx.com/tx/cresson/*)
  cresson: {
    zips: ['76035'],
    neighborhoods: ['Ponderosa Hills', 'Highland Lakes', 'Hills of Bear Creek', 'Cresson Estates', 'Old Granbury Road corridor'],
    landmarks: ['Cresson School', 'Western Heritage Church', 'MotorSport Ranch'],
    majorRoads: ['US 377', 'SH 171', 'Old Granbury Road'],
    nearbyCities: ['godley', 'granbury', 'aledo', 'benbrook', 'joshua', 'weatherford'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad crossroads at the corner of Hood, Johnson and Parker counties, now a mix of acreage tracts and new subdivisions along US 377 and SH 171',
      commonGateTypes: ['Wide acreage swing', 'Driveway slide', 'Dual swing entrance'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Mighty Mule', 'Ghost Controls'],
      commonIssues: [
        'Gates sized too narrow for the trucks and trailers that now use them',
        'Solar panels and batteries undersized for a busy household',
        'Openers fitted to farm gates that were never hung for automation',
        'Loop and safety sensor faults on new gravel drives',
      ],
    },
    localAngle:
      'Cresson grew up where the Fort Worth and Rio Grande and the Santa Fe lines crossed in 1887, and today its city limits touch three counties at once. The town more than doubled between 2010 and 2020, from 741 people to 1,349, and that growth shows up at the end of the driveway. A lot of the gates we look at here started life as plain ranch gates hung for a person to open by hand, then had an opener bolted on years later when the land was split into five and ten acre homesites. A swing gate that was fine for a pickup now has to clear a horse trailer or a contractor rig several times a day, and the hinges and the opener arm take the strain. When we do automatic gate repair in Cresson, the first question is often whether the gate itself was ever built to be motorised, because no new gate motor will last on a post that was set for a chain and padlock.',
    faqs: [
      {
        q: 'We put an opener on our old pipe ranch gate and it keeps stalling. Is the motor bad?',
        a: 'Often the motor is fine and the gate is the problem. A gate hung for hand use can sag a little and drag at the far end, and a person never notices because they just lift it. An opener notices every time and reads the drag as an obstruction. Before replacing anything we check that the gate swings freely by hand, that the hinge post is plumb and that the arm is mounted at the right geometry for that gate width.',
      },
      {
        q: 'Our property is on the Parker County side of Cresson. Do you cover that?',
        a: 'Yes. Cresson spreads across Hood, Johnson and Parker counties, and we treat it as one area rather than splitting it at the county line. When you call, give us the road name and whether you are off US 377 or SH 171, since a few of the newer acreage roads are not well marked yet and it helps us find the right gate the first time.',
      },
    ],
  },

  // Granbury: sources: https://en.wikipedia.org/wiki/Granbury,_Texas, https://en.wikipedia.org/wiki/Pecan_Plantation,_Texas, listing subdivision tags (spencer.roveridx.com/tx/granbury/*)
  granbury: {
    zips: ['76048', '76049'],
    neighborhoods: ['Pecan Plantation', 'DeCordova Bend Estates', 'Bentwater on Lake Granbury', 'Lake Granbury Harbor', 'Canyon Creek', 'Oak Trail Shores'],
    landmarks: ['Hood County Courthouse Historic District', 'Granbury Opera House', 'Lake Granbury', 'Granbury Railroad Depot'],
    majorRoads: ['US 377', 'SH 144', 'FM 51', 'FM 167'],
    nearbyCities: ['tolar', 'cresson', 'glen-rose', 'lipan', 'godley', 'weatherford'],
    responseBand: '',
    gateProfile: {
      dominant: 'Hood County seat on Lake Granbury, with large gated lake communities, narrow waterfront lots and a historic courthouse square',
      commonGateTypes: ['Community entrance slide', 'Driveway swing', 'Pedestrian gate with keypad'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'Elite'],
      commonIssues: [
        'Corrosion on hardware and boards close to the lake',
        'Short swing space on narrow waterfront lots',
        'Access control and keypad faults at community entrances',
        'Lightning and surge damage to control boards',
      ],
    },
    localAngle:
      'Granbury has sat on the Brazos since the 1860s, but the town most people know took shape after a dam completed in 1969 backed the river up into Lake Granbury, the long narrow lake that runs right through the city. That lake set the pattern for housing. Large gated communities such as Pecan Plantation and DeCordova Bend Estates sit on the water, and many lots inside them are deep and narrow, with the house close to the road and the lake behind. On a lot like that a swing gate often has nowhere to open, so a sliding gate is the better fit, but it needs a level run and a track kept clear of leaves and gravel. Near the water the air stays damp, and we see more rust on rollers, hinges and opener housings than on gates a few miles inland. Gate opener repair in Granbury is as often about corrosion and drainage as it is about electronics.',
    faqs: [
      {
        q: 'Our lake house gate rusts much faster than the one at our old place in town. Why?',
        a: 'Moisture off the lake is the usual reason. Lots on Lake Granbury see damp mornings and wind-driven spray, and steel hardware, roller bearings and opener housings left untreated will corrode quicker there. We look at the drain holes in the opener cover, the condition of the rollers and any bare welds. Galvanised or powder-coated parts and a yearly service keep the gate moving much longer on a waterfront lot.',
      },
      {
        q: 'Can you work on a gate inside Pecan Plantation or DeCordova Bend?',
        a: 'Yes. Inside a gated community we work on private driveway gates for homeowners, and the community will usually need your name on the visitor list or a guest code for us at the main entrance. If the problem is the community entrance gate itself, that is normally handled through the property owners association, so it is worth checking with them first.',
      },
    ],
  },

  // Lipan: sources: https://www.tshaonline.org/handbook/entries/lipan-tx, https://en.wikipedia.org/wiki/Lipan,_Texas, https://texasescapes.com/CentralTexasTownsNorth/Lipan-Texas.htm, listing subdivision tags (spencer.roveridx.com/tx/lipan/*)
  lipan: {
    zips: ['76462'],
    neighborhoods: ['Downtown Lipan', 'Wilson Bend', 'Old WD Ranch', 'Roping Oaks', 'FM 4 corridor'],
    landmarks: ['Lipan High School', 'Lipan Cemetery', 'FM 4 and FM 1189 crossroads'],
    majorRoads: ['FM 4', 'FM 1189', 'US 281'],
    nearbyCities: ['morgan-mill', 'tolar', 'granbury', 'millsap', 'mineral-wells', 'stephenville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small farm town in north-western Hood County surrounded by ranch land, where most gates are a long way from the house and from mains power',
      commonGateTypes: ['Solar ranch swing', 'Wide stock gate', 'Cattle guard bypass gate'],
      commonBrands: ['Ghost Controls', 'Mighty Mule', 'US Automatic', 'Viking'],
      commonIssues: [
        'Batteries that fail early in summer heat',
        'Livestock leaning on or rubbing against gates',
        'Remote range lost over long drives',
        'Dust and insects packing into control boxes',
      ],
    },
    localAngle:
      'T. A. Burns laid out Lipan in 1873 where the roads from Weatherford and Stephenville crossed the roads to Granbury and Palo Pinto, and he named it for the Lipan Apaches who had hunted the area. It is still a crossroads town of about 500 people, at FM 4 and FM 1189, and most of the gates out here belong to ranches and acreage rather than houses on town lots. That changes the job. A typical driveway gate in Lipan is a quarter mile or more from the house, runs on a solar panel and a battery, and shares its fence line with cattle. Heat is hard on the batteries, and a gate that sits idle all day then gets used in a burst at feeding time can drain a small battery quickly. Cattle also rub on gates and loosen latches. Good gate opener repair here starts with the power budget: panel size, battery age and what else is drawing on it.',
    faqs: [
      {
        q: 'Our solar gate works all spring and then quits in July. What is going on?',
        a: 'Summer heat shortens battery life, and a battery that is already a few years old may hold enough charge in mild weather but give out once the box sits in full sun at a hundred degrees. Dust on the panel makes it worse. We test the battery under load, check the panel output and look at the charge controller. Often a fresh battery and a cleaned, correctly angled panel are all it takes.',
      },
      {
        q: 'Do you come out to ranch gates around Lipan, not just in Granbury?',
        a: 'Yes, we work rural Hood County, including Lipan and the county roads off FM 4 and FM 1189. Ranch gates can be hard to find from an address alone, so a pin or simple directions from the nearest crossroads saves time. Let us know too if there is a cattle guard, a second gate or livestock in the pasture.',
      },
    ],
  },

  // Tolar: sources: https://www.tshaonline.org/handbook/entries/tolar-tx, https://en.wikipedia.org/wiki/Tolar,_Texas, https://cityoftolar.com/about-contact-us.html, listing subdivision tags (spencer.roveridx.com/tx/tolar/*)
  tolar: {
    zips: ['76476'],
    neighborhoods: ['Downtown Tolar', 'The Parks of Tolar', 'Tolar Oaks', 'Tolar Gardens', 'Parkview Place', 'Rattler Ranch'],
    landmarks: ['Petrified wood buildings downtown', 'Tolar Tabernacle', 'Tolar ISD campus'],
    majorRoads: ['US 377', 'FM 56'],
    nearbyCities: ['granbury', 'lipan', 'glen-rose', 'morgan-mill', 'stephenville', 'cresson'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad town on US 377 south-west of Granbury, with a petrified-wood downtown and a fast-growing ring of new homes on acre-plus lots',
      commonGateTypes: ['Residential swing', 'Single slide on short drive', 'Ranch entrance swing'],
      commonBrands: ['Mighty Mule', 'LiftMaster', 'US Automatic', 'Apollo'],
      commonIssues: [
        'Light-duty openers on gates heavier than they were rated for',
        'Rocky ground making footings shallow',
        'Wiring run in shallow trenches on new builds',
        'Remote and keypad pairing after a board change',
      ],
    },
    localAngle:
      'Tolar began around 1890 when the Fort Worth and Rio Grande Railway came through, and several of its older buildings are built from petrified wood that was once common enough in the area to be collected and shipped. The town went from 681 residents in 2010 to 941 in 2020, and much of the new housing is on acre-plus lots in subdivisions just outside the old town. Plenty of those homes got a driveway gate at the same time as the house, and the opener chosen was often a light residential kit. That is fine on a short aluminium gate, but put the same opener on a long steel or wood-clad gate and it works at the top of its rating every cycle. Over a few summers the gears wear and the limits drift. When someone in Tolar calls about a swing gate that hesitates or reverses for no reason, we weigh the gate and check the opener’s rating before anything else.',
    faqs: [
      {
        q: 'Our gate was put in when the house was built three years ago and is already acting up. Is that normal?',
        a: 'It is common when the opener is undersized for the gate. Builders sometimes fit a light-duty kit to keep costs down, and on a heavy or long gate it strains on every open and close. You may notice it slowing, stopping halfway or reversing. We check the gate weight and length against the opener rating, the arm geometry and the battery. Sometimes an adjustment is enough, sometimes the right fix is a heavier operator.',
      },
      {
        q: 'Can you replace just the opener and keep our existing gate?',
        a: 'Usually, yes. If the gate swings freely by hand, the posts are solid and the hinges are in good shape, a new operator can go on the existing gate. We match the replacement to the real weight and width of the gate, and to whether you want solar or mains power. If the gate itself is damaged or sagging, we will tell you so before fitting anything new to it.',
      },
    ],
  },

  // Glen Rose: sources: https://www.tshaonline.org/handbook/entries/glen-rose-tx, https://en.wikipedia.org/wiki/Paluxy_River, https://researchonline.ljmu.ac.uk/id/eprint/2165/, listing subdivision tags (aaronlayman.com/tx/glen-rose/*)
  'glen-rose': {
    zips: ['76043'],
    neighborhoods: ['Valley Ranch Addition', 'Hidden Valley Ranch', 'Fossil Trails', 'The Oaks of Glen Rose', 'Chalk Mountain area'],
    landmarks: ['Dinosaur Valley State Park', 'Fossil Rim Wildlife Center', 'Big Rocks Park', 'Comanche Peak Nuclear Power Plant'],
    majorRoads: ['US 67', 'SH 144', 'FM 56', 'FM 205'],
    nearbyCities: ['tolar', 'granbury', 'godley', 'cresson', 'cleburne', 'stephenville'],
    responseBand: '',
    gateProfile: {
      dominant: 'Somervell County seat on the Paluxy River, set in limestone hills with cedar, river bottoms that flood, and acreage homes on rocky ground',
      commonGateTypes: ['Ranch entrance swing', 'Solar driveway swing', 'Slide gate on graded drive'],
      commonBrands: ['US Automatic', 'Ghost Controls', 'LiftMaster', 'Viking'],
      commonIssues: [
        'Post holes cut into limestone ledge',
        'Silt and debris after high water near the river',
        'Uneven grades on hillside drives',
        'Lightning damage on exposed hilltops',
      ],
    },
    localAngle:
      'Glen Rose sits on the Paluxy River, and the riverbed upstream at Dinosaur Valley State Park exposes limestone of the Glen Rose Formation with dinosaur tracks about 113 million years old. That same limestone is what a gate post has to go into here. Dig a few inches on most hillside lots around town and you hit ledge rock, so footings are either cored into it or end up shallower than they should be. Down on the river bottoms the problem flips: the Paluxy rises fast after heavy rain, and a gate set low near a crossing can be left with silt in the track, mud in the opener box and wiring that has sat in water. Up on the ridges the exposure brings lightning. A driveway gate in Glen Rose is often fighting rock, water or storms, and sometimes all three on the same property.',
    faqs: [
      {
        q: 'Our gate is near the river and it stopped working after a flood. Can it be saved?',
        a: 'Often it can. After high water we open the opener housing, check for water and silt on the control board, dry and test the connections, and clean out any track or wheel. Batteries and boards that sat underwater may need replacing, but the gate itself and the arm frequently come through fine. If floods are a regular thing at your gate, we can talk about raising the control box above the usual high-water line.',
      },
      {
        q: 'We hit rock digging the post hole. Will the gate still be solid?',
        a: 'It can be, if the footing is done properly. Limestone holds a post well when the hole is cored or drilled to depth and the post is grouted in, rather than set into a shallow pocket on top of the ledge. A shallow footing in rock tends to feel solid for years and then fail suddenly. We check how the existing posts were set before hanging a heavier automated gate on them.',
      },
    ],
  },

  // Dublin: sources: https://www.tshaonline.org/handbook/entries/dublin-tx, listing subdivision tags (aaronlayman.com/tx/dublin/*)
  dublin: {
    zips: ['76446'],
    neighborhoods: ['Downtown Dublin', 'Higginbothom Addition', 'North Side Addition', 'Belfast Addition', 'Tree House Estates'],
    landmarks: ['Ben Hogan birthplace', 'Dublin Bottling Works', 'Proctor Lake'],
    majorRoads: ['US 67', 'US 377', 'SH 6'],
    nearbyCities: ['stephenville', 'comanche', 'morgan-mill', 'tolar', 'lipan', 'eastland'],
    responseBand: '',
    gateProfile: {
      dominant: 'A south-west Erath County farm and rodeo town with older in-town lots, horse properties and working acreage on its edges',
      commonGateTypes: ['Horse property swing', 'Ranch entrance swing', 'Commercial yard slide'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Elite'],
      commonIssues: [
        'Safety sensors needed where horses and stock move through',
        'Opener arms knocked out of line by animals or equipment',
        'Older gates retrofitted without proper stops',
        'Dust from farm work clogging limit switches',
      ],
    },
    localAngle:
      'Dublin was founded in 1854 and incorporated in 1889, and it is known as the birthplace of golfer Ben Hogan and as the home of a world-championship rodeo. Around the town that rodeo culture is real: there are a lot of horse properties and working pastures, and the gates on them see animals as often as cars. That puts safety at the top of the list. A gate opener that closes with too much force, or has no photo eye, is a hazard to a horse being led through, and an arm left exposed at shoulder height is something a curious animal will lean on. Many local gates were hung for hand use and later automated, often without stops or sensors. When we look at a horse gate in Dublin, the work is usually as much about safe closing force, entrapment zones and sensor placement as it is about getting the motor to run.',
    faqs: [
      {
        q: 'We lead horses through our automatic gate. What should we have on it?',
        a: 'At minimum, a photo eye across the opening so the gate stops if anything is in its path, and closing force set as low as the gate allows. A slower close and a longer hold-open time help when leading animals. We also look at pinch points near the hinges and where the arm sits, and can add a pedestrian push button so the gate does not start moving while you are halfway through.',
      },
      {
        q: 'Is it worth fixing our old opener or should we replace it?',
        a: 'It depends on age and parts. Many older openers from major brands can still be repaired with a new board, battery or gearbox, and that is usually cheaper. If parts are no longer made, or the opener lacks modern safety inputs for sensors, replacing it is often the better long-term choice. We give you both options with the reasons, and you decide.',
      },
    ],
  },

  // Morgan Mill: sources: https://www.tshaonline.org/handbook/entries/morgan-mill-tx, https://en.wikipedia.org/wiki/Morgan_Mill_Independent_School_District
  'morgan-mill': {
    // 76465 is a PO Box ZIP; street addresses around Morgan Mill are mailed as Stephenville 76401.
    zips: ['76465', '76401'],
    neighborhoods: ['US 281 corridor', 'FM 1189 corridor', 'FM 1715 corridor', 'North Paluxy River valley'],
    landmarks: ['Morgan Mill School', 'North Paluxy River', 'US 281 and FM 1189 junction'],
    majorRoads: ['US 281', 'FM 1189', 'FM 1715', 'FM 1188'],
    nearbyCities: ['lipan', 'stephenville', 'tolar', 'granbury', 'dublin', 'millsap'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small unincorporated community in north-eastern Erath County on the North Paluxy River, made up of rural homesites, retirees and long-distance commuters',
      commonGateTypes: ['Solar driveway swing', 'Ranch entrance swing', 'Dual swing entrance'],
      commonBrands: ['Ghost Controls', 'US Automatic', 'Mighty Mule', 'LiftMaster'],
      commonIssues: [
        'Remotes that lose range at the end of long drives',
        'Gates left without power backup during rural outages',
        'Keypads and receivers exposed to weather',
        'Wear from early morning and late evening commuter cycles',
      ],
    },
    localAngle:
      'Morgan Mill takes its name from a corn and wheat mill moved to the North Paluxy River in 1874, and from George Morgan, who bought into it in 1877. It never grew large, about 200 people for decades, and in recent years it has drawn retirees and people who drive to jobs in the Dallas Fort Worth area. That commuter pattern shapes the gates. A household leaving before dawn and getting home after dark wants the driveway gate to open from the car without anyone getting out, every single time. Out here that means a long drive, a receiver that has to pick up a remote from a distance, and often solar power with no mains backup. When the gate fails it tends to fail at the worst hour. For a Morgan Mill driveway gate we look hard at receiver placement, antenna height and battery reserve, because reliability matters more than features.',
    faqs: [
      {
        q: 'Our remote only works when we are right up at the gate. Can that be improved?',
        a: 'Usually, yes. Range depends a lot on where the receiver and antenna sit. One mounted low inside a metal box, or behind the gate post, will struggle. Raising the antenna, moving it clear of metal and checking the remote battery often adds a lot of distance. Some older receivers are also simply weak, and a newer receiver compatible with your opener can fix it.',
      },
      {
        q: 'What happens to our gate if the power goes out?',
        a: 'Most openers have a battery that carries the gate through an outage for a number of cycles, and solar units run on a battery anyway. If the battery is old it may not last. Every opener also has a manual release so the gate can be opened by hand. We can show you where yours is and test the battery so you know how many cycles you have in reserve.',
      },
    ],
  },

  // Stephenville: sources: https://www.tshaonline.org/handbook/entries/stephenville-tx, https://stephenvilleeda.com, https://baileygonzales.kellyrealtors.com/stephenville-texas-subdivisions.html
  stephenville: {
    zips: ['76401'],
    neighborhoods: ['Bosque Heights', 'Timber Hills', 'River Hills Ranch', 'Timber Creek Estates', 'Tarleton Heights', 'Heritage Hills'],
    landmarks: ['Tarleton State University', 'Erath County Courthouse', 'Stephenville Historical House Museum', 'North Bosque River'],
    majorRoads: ['US 377', 'US 281', 'US 67', 'SH 108'],
    nearbyCities: ['dublin', 'morgan-mill', 'tolar', 'lipan', 'granbury', 'glen-rose'],
    responseBand: '',
    gateProfile: {
      dominant: 'Erath County seat and home of Tarleton State University, ringed by dairies, feed yards and agricultural businesses',
      commonGateTypes: ['Commercial yard slide', 'Ranch entrance swing', 'Residential driveway swing'],
      commonBrands: ['LiftMaster', 'Viking', 'HySecurity', 'US Automatic'],
      commonIssues: [
        'Heavy truck traffic wearing out commercial operators',
        'Vehicle damage to gates at farm and yard entrances',
        'Loop detectors failing under heavy loads',
        'Manure, feed and dust fouling tracks and rollers',
      ],
    },
    localAngle:
      'Stephenville was laid out in 1856 on the North Bosque River, and Erath County has held the top spot in Texas for milk production for years, with the dairies spread around the town. That agricultural base means a lot of the gates here are not decorative. Feed trucks, milk tankers and stock trailers come and go from farms, feed mills and yards, and a commercial gate at one of those entrances may cycle dozens of times a day with heavy vehicles crossing the loops. Operators rated for a home driveway do not last in that duty, and a slide gate track that collects feed, gravel and manure will wear rollers fast. In town, around Tarleton State University and the newer subdivisions, the work is more conventional residential gate opener repair. For an ag business, though, we start by counting cycles and matching the operator to the real traffic.',
    faqs: [
      {
        q: 'Our yard gate gets hit by trucks every few months. What can we do?',
        a: 'Start with how the gate is triggered and how long it stays open. A gate that starts closing before a long trailer has cleared will get hit. Adjusting the hold-open time, adding or moving a vehicle loop and fitting a photo eye at trailer height all help. Bollards in front of the operator and a sturdier gate frame reduce the damage when it does happen. We look at the traffic pattern first.',
      },
      {
        q: 'Do you work on residential gates in Stephenville as well as commercial ones?',
        a: 'Yes, both. In town and in the subdivisions around Stephenville we repair driveway swing and slide gates, openers, keypads and remotes. On farms and commercial sites we handle heavier operators and access control. Tell us what kind of property it is and roughly how often the gate runs, and we can come prepared with the right parts.',
      },
    ],
  },

  // Comanche: sources: https://atlas.thc.state.tx.us/Details/5093001722, https://atlas.thc.texas.gov/Details/4200000078, https://en.wikipedia.org/wiki/Comanche_County,_Texas, listing subdivision tags (aaronlayman.com/tx/comanche/*, kellyrealtors.com Comanche Lake Road)
  comanche: {
    zips: ['76442'],
    neighborhoods: ['Downtown Comanche square', 'Mercers Preserve', 'Wolfe Pecanlands', 'Lake Proctor shoreline'],
    landmarks: ['Old Cora Courthouse', 'Fleming Oak', 'Comanche County Historical Museum', 'Lake Proctor'],
    majorRoads: ['US 67', 'US 377', 'SH 16', 'SH 36'],
    nearbyCities: ['dublin', 'stephenville', 'eastland', 'morgan-mill'],
    responseBand: '',
    gateProfile: {
      dominant: 'Comanche County seat since 1859, a ranching and pecan town with lake lots on Lake Proctor and acreage on every side',
      commonGateTypes: ['Ranch entrance swing', 'Lake lot driveway slide', 'Wide farm swing'],
      commonBrands: ['US Automatic', 'Ghost Controls', 'Mighty Mule', 'LiftMaster'],
      commonIssues: [
        'Limbs and leaf litter from big shade and pecan trees',
        'Shaded solar panels under tree canopy',
        'Long runs between house and gate on acreage',
        'Lake lot access on sloped drives',
      ],
    },
    localAngle:
      'Comanche has been the county seat since 1859, and the log courthouse from the first seat at Cora now stands on the square beside the Fleming Oak, a tree saved from city workers in 1911. Big trees are a theme around this town, from the oaks on the square to the pecan land along the creeks and around Lake Proctor. They are welcome shade but hard on gates. Limbs come down in storms and land across gate leaves, leaf litter and nut hulls fill slide gate tracks, and a solar panel that got full sun when it was installed can be half shaded a few years later as the canopy grows. A battery that never fully charges slowly loses capacity. When we look at a gate in Comanche, we check what is overhead as carefully as what is on the ground, and moving a panel a few feet is often the cheapest repair there is.',
    faqs: [
      {
        q: 'Our solar gate is slower every year. Could the trees be the cause?',
        a: 'Quite possibly. Trees grow and panels do not move, so a panel that sat in sun when installed may now spend half the day in shade. The battery then never fully charges and wears out early. We check the panel output at different times of day, the battery condition and the charge controller. Moving the panel to a clear spot, or mounting it on a taller pole, often fixes it.',
      },
      {
        q: 'Do you cover lake properties on Lake Proctor near Comanche?',
        a: 'Yes. Properties around Lake Proctor are part of the rural area we work, along with acreage around Comanche itself. Lake roads and subdivisions can be tricky to find, so send us the road name and any gate code or lockbox details for shared entrances. If the gate is on a steep drive down to the water, mention that too.',
      },
    ],
  },

  // Eastland: sources: https://www.tshaonline.org/handbook/entries/eastland-tx, https://www.eastlandcounty.gov/1252/Attractions, https://www.hmdb.org/m.asp?m=113561, listing subdivision tags (aaronlayman.com/tx/eastland/*)
  eastland: {
    zips: ['76448'],
    neighborhoods: ['Downtown Eastland', 'Lake Leon shoreline', 'Weir Park', 'Willow Beach', 'Lamancha Ranch'],
    landmarks: ['Eastland County Courthouse', 'Old Rip Park', 'Majestic Theatre', 'Lake Leon'],
    majorRoads: ['I-20', 'SH 6', 'SH 112'],
    nearbyCities: ['dublin', 'comanche', 'stephenville', 'morgan-mill', 'lipan'],
    responseBand: '',
    gateProfile: {
      dominant: 'Eastland County seat on I-20, an old oil boom town with ranch land, lake properties at Lake Leon and heavy welded pipe fencing',
      commonGateTypes: ['Welded pipe ranch swing', 'Lake property driveway swing', 'Commercial yard slide'],
      commonBrands: ['US Automatic', 'Viking', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Heavy pipe gates overloading standard openers',
        'Hinges and posts worn by gate weight',
        'Openers bolted to pipe without proper brackets',
        'Highway-side commercial gates taking vehicle strikes',
      ],
    },
    localAngle:
      'Eastland grew roughly fourfold during the 1917 to 1922 oil boom, and it is still best known for Old Rip, the horned lizard said to have come out of the 1897 courthouse cornerstone alive in 1928. The oil years left more than a legend. Ranch fencing across this part of Texas is often welded pipe, and pipe gates are heavy, stiff and built to last for decades. Automating one is a different job from automating a light tube gate. The weight sits on the hinges, so an opener with too little torque or a mount clamped loosely to round pipe will slip, wear or stall. A good result usually needs proper brackets welded or bolted to the frame and an operator sized for the actual weight. When we take on gate opener repair in Eastland, we often find the opener was fine and the mounting was the weak link.',
    faqs: [
      {
        q: 'Can an automatic opener go on our heavy pipe ranch gate?',
        a: 'Yes, but it needs the right operator and mounting. Pipe gates can weigh far more than a tube gate of the same length, so the opener has to be rated for the real weight, not just the width. We fit brackets made for round pipe and check that the hinges and post can take repeated cycling. Done properly, a pipe gate automates very well and lasts a long time.',
      },
      {
        q: 'We have a weekend place at Lake Leon. Can you look at the gate when we are not there?',
        a: 'Often we can, as long as we can get to the gate and know where the opener and power are. Many lake properties around Eastland sit unused for weeks, and batteries and remotes tend to show problems after long idle periods. Give us the address, any gate code and a phone number to call from the site, and we will report back what we find before doing any work.',
      },
    ],
  },

  // Caddo Mills: sources: https://en.wikipedia.org/wiki/Caddo_Mills,_Texas, https://en.wikipedia.org/wiki/Caddo_Mills_Municipal_Airport,
  // https://www.drhorton.com/texas/dallas/caddo-mills/stonehaven, https://www.smithdouglas.com/communities/dallas-ft-worth-tx/caddo-mills,
  // https://www.centurycommunities.com/find-your-new-home/texas/dallas-fort-worth-metro/caddo-mills/preserve-at-brushy-creek/
  'caddo-mills': {
    zips: ['75135'],
    neighborhoods: ['Trailstone', 'Stonehaven', 'Fox Landing', 'Preserve at Brushy Creek', 'Downtown Caddo Mills'],
    landmarks: ['Caddo Mills Municipal Airport', 'West Caddo Creek', 'Main Street'],
    majorRoads: ['I-30', 'SH 66', 'FM 1565', 'FM 36'],
    nearbyCities: ['royse-city', 'greenville', 'nevada', 'josephine', 'quinlan', 'fate'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small railroad town on SH 66 that is filling with new production-built subdivisions while the farmland around it stays in acreage',
      commonGateTypes: ['Residential driveway swing', 'Farm and acreage entrance swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Mighty Mule', 'Elite'],
      commonIssues: [
        'Gates added after closing to lots that were never planned for one',
        'No power run to the gate position on new-build lots',
        'Blackland clay moving fresh post footings in their first seasons',
        'Long gravel drives on surrounding acreage wearing out swing hardware',
      ],
    },
    localAngle:
      'Caddo Mills took its name from a gristmill built about twenty years after pioneers settled the old Caddo campground, and it counted 1,495 people at the 2020 census. That number is already out of date: Trailstone, Stonehaven and Fox Landing have brought production-built homes to a town that was mostly older lots on Main Street and farmland along FM 1565 and FM 36. That mix shapes the gate work. Builders here do not fit driveway gates, so most new gates go in after the owners move in, onto a lot whose electrical, drainage and HOA rules were settled without one. A gate installation in Caddo Mills therefore starts with where power can come from and what the deed restrictions allow at the frontage. Out on the acreage the questions are older ones: a swing gate on a long gravel drive, a post set in black clay that has not finished settling, and an operator that has to cope with dust from the field next door.',
    faqs: [
      {
        q: 'We just bought in a new Caddo Mills subdivision. Can we add an automatic gate?',
        a: 'Usually, but check two things first. Read the HOA covenants for anything on front fencing, gate height or setback from the street, because many new subdivisions restrict what can face the road. Then look at where power would come from. Builders rarely leave a circuit near the drive, so the choice is often between trenching a line from the house or running a solar operator. We can walk the lot and tell you which makes more sense.',
      },
      {
        q: 'Do you cover the farms and acreage around Caddo Mills, not just the town?',
        a: 'Yes. We work the rural roads off SH 66, FM 1565 and FM 36 as well as the newer neighborhoods near I-30. On a county road property it helps if you tell us the gate type and roughly how far it sits from the house when you call, because that tells us whether to bring parts for a long-drive solar setup or a standard hard-wired operator.',
      },
    ],
  },

  // Campbell: sources: https://en.wikipedia.org/wiki/Campbell,_Texas, https://redfin.com/city/3134/TX/Campbell
  campbell: {
    zips: ['75422'],
    neighborhoods: ['Downtown Campbell (FM 499 Main Street)', 'Sundance Circle', 'SH 24 corridor', 'County Road 3207 acreage'],
    landmarks: ['Campbell ISD campus', 'I-30 exits 101 and 104'],
    majorRoads: ['I-30', 'SH 24', 'FM 499'],
    nearbyCities: ['greenville', 'lone-oak', 'celeste', 'caddo-mills', 'emory'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town of a few hundred people in eastern Hunt County, surrounded by pasture and county-road homesteads',
      commonGateTypes: ['Pasture and farm swing', 'Ranch entrance swing', 'Residential driveway swing'],
      commonBrands: ['Mighty Mule', 'US Automatic', 'Ghost Controls', 'LiftMaster'],
      commonIssues: [
        'Solar panels and batteries undersized for a long drive',
        'Livestock leaning on or rubbing against gate leaves',
        'Remote range too short for the distance from house to road',
        'Hinge wear on wide, heavy pipe gates',
      ],
    },
    localAngle:
      'Campbell was established in 1880 and named for Thomas Mitchell Campbell, who later became governor of Texas, and its 2020 census count was 542. Its Main Street is FM 499, SH 24 runs along the northwest side toward Commerce, and I-30 crosses the south end of town at exits 101 and 104. Beyond the few streets in town it is pasture and county-road homesteads, and that is where most gate openers here live. The typical setup is a wide pipe or ranch gate a long way from the house, with no power at the road, running on a solar panel and a single battery. That arrangement works until the battery ages or the panel sits under a tree that has grown, and then the gate starts stalling halfway on cloudy weeks. Gate opener repair in Campbell is often less about the motor and more about sizing the charging system for how many trips the household actually makes.',
    faqs: [
      {
        q: 'Our solar gate on a county road outside Campbell keeps dying after a few cloudy days. Why?',
        a: 'Usually the battery has lost capacity or the panel is too small for the number of cycles. A battery that is three or four years old can test fine and still fail after two overcast days. Shade matters too, since a tree that has grown over the panel can halve its output. We load test the battery, check the panel output, and size both to the gate weight and your daily trips.',
      },
      {
        q: 'Cattle keep pushing on our gate. Can an automatic opener handle that?',
        a: 'It can, but the setup has to allow for it. Livestock rubbing on a closed leaf strains the arm, the mounting brackets and the hinges, and it can trip the obstruction sensing so the gate reverses or stops. A positive gate stop, a lock that takes load off the operator, and sometimes a short run of fence to keep animals off the leaf will make the opener last much longer.',
      },
    ],
  },

  // Celeste: sources: https://en.wikipedia.org/wiki/Celeste,_Texas, https://www.movoto.com/celeste-tx/5304-county-rd-1094-celeste-tx-75423-402_13952668/,
  // https://www.rhodesteamtexas.com/homes/Lot-7-County-Road-1093/Celeste/TX/75423/175833710/, https://aaronlayman.com/tx/celeste/college-add-of-celeste/105-s-6th-street/
  celeste: {
    zips: ['75423'],
    neighborhoods: ['Original Town of Celeste', 'College Addition', 'Celeste Ranch Estates', 'High Point Ranch', 'Soto Ranchettes'],
    landmarks: ['US-69 through downtown Celeste', 'Celeste ISD campus', 'Kingston, birthplace area of Audie Murphy'],
    majorRoads: ['US-69', 'FM 2194'],
    nearbyCities: ['leonard', 'greenville', 'farmersville', 'blue-ridge', 'campbell', 'caddo-mills'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad townsite on US-69 ringed by restricted ranchette subdivisions with multi-acre lots',
      commonGateTypes: ['Ranch entrance swing', 'Acreage driveway swing', 'Dual-leaf swing'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Long drives from a county road to the house',
        'Solar charging that cannot keep up in winter',
        'Dual-leaf gates drifting out of sync',
        'Clay soil heaving entrance columns',
      ],
    },
    localAngle:
      'Celeste was platted by the Gulf, Colorado and Santa Fe Railway in 1886 and named for the wife of a Santa Fe official, and Audie Murphy, the most decorated American soldier of World War II, lived here for a time after being born a few miles south. The old town is a grid of lots along US-69, but out on the county roads much of the building is in restricted ranchette subdivisions, places like High Point Ranch and Celeste Ranch Estates, where three acres or more is normal. That is where a driveway gate earns its keep, and where it gives the most trouble. The entrance sits a long way from the house, often with a pair of leaves on masonry or pipe columns, and it is frequently solar because nobody wanted to trench two hundred yards of cable. When those two leaves stop meeting in the middle, the cause is as likely to be one column moving in the clay as anything in the operator.',
    faqs: [
      {
        q: 'Our two gate leaves no longer close evenly. Is that the opener?',
        a: 'Sometimes, but on the acreage around Celeste it is often a column. The black clay here swells when wet and shrinks in drought, and a masonry or pipe column can tip enough over a season to throw one leaf off. We check plumb on both columns and the hinge alignment before we touch the operator settings, because re-syncing the arms will not hold if a post is still moving.',
      },
      {
        q: 'Is solar a good idea for a gate at the end of a long drive in Celeste?',
        a: 'It is often the most practical choice when the house is far from the road. The trade-off is that it needs a properly sized panel and battery, a clear view of the southern sky, and a battery replaced every few years. For a heavy gate or a busy household we may suggest a larger panel or a second battery so the gate keeps running through a grey week in January.',
      },
    ],
  },

  // Greenville: sources: https://en.wikipedia.org/wiki/Greenville,_Texas, https://mod2141.realgeeks.com/property/21367149/,
  // https://www.newhomesource.com/basichome/cypress-iii-greenville-tx/p3856339 (Mallard Point)
  greenville: {
    zips: ['75401', '75402'],
    neighborhoods: ['Historic Downtown Greenville', 'Peniel', 'Oak Creek Estates', 'Mallard Point'],
    landmarks: ['Audie Murphy American Cotton Museum', 'Texan Theatre', 'Hunt County Courthouse', 'Majors Field'],
    majorRoads: ['I-30', 'US-69', 'US-380', 'SH 34'],
    nearbyCities: ['caddo-mills', 'celeste', 'campbell', 'lone-oak', 'quinlan', 'farmersville'],
    responseBand: '',
    gateProfile: {
      dominant: 'The Hunt County seat on Blackland Prairie clay, with older in-town homes, new subdivisions and an industrial base around Majors Field',
      commonGateTypes: ['Commercial slide', 'Residential driveway swing', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'HySecurity'],
      commonIssues: [
        'High-cycle wear on industrial and commercial entrances',
        'Clay-soil post and track movement',
        'Access control and keypad faults on business gates',
        'Older residential operators with discontinued boards',
      ],
    },
    localAngle:
      'Greenville was founded in 1846 and named for Thomas J. Green, and it sits on the Blackland Prairie about fifty miles northeast of Dallas. Its biggest employer is L3Harris, which operates at Majors Field, the airfield built in 1942 to train P-47 pilots. That industrial base along I-30 and the airport means a share of the gate work here is commercial: slide gates and barrier arms on plants, yards and contractor lots that cycle all day and have to be secured at night. Commercial gate repair in Greenville is mostly about wheels, track, chain and access control on those openings. The residential side is different again. Older homes near downtown and in Peniel, annexed in 1957, tend to have swing gates on operators old enough that parts are getting scarce, while newer subdivisions add their gates later. Across all of it, the black prairie clay shifts posts and slide tracks by season, so alignment drifts long before anything burns out.',
    faqs: [
      {
        q: 'Do you handle commercial gates at plants and yards in Greenville?',
        a: 'Yes. Industrial and commercial entrances near I-30 and Majors Field are a large part of the work in Greenville. These gates run far more cycles than a home gate, so wheels, track, chain and the access control tend to wear first. We service slide gates, barrier arms and keypad or card entry systems, and can recommend a heavier duty operator where the existing one is undersized for the traffic.',
      },
      {
        q: 'Our slide gate has started catching partway open. What usually causes that here?',
        a: 'On Greenville clay the track itself often moves. The soil swells and shrinks with rain and drought, and a concrete pad or track section can lift or tilt just enough to bind the wheels. Worn V-groove wheels make it worse. We check the track level and the wheels before blaming the operator, since a motor straining against a bad track will fail sooner if the track is left alone.',
      },
    ],
  },

  // Lone Oak: sources: https://en.wikipedia.org/wiki/Lone_Oak,_Texas, https://aaronlayman.com/tx/lone-oak/rocky-ford/2085-s-oaks-lane/,
  // https://aaronlayman.com/tx/lone-oak/the-villages-of-lone-oak-phase-iii/0000-fox-hollow-road/, https://www.tshaonline.org/handbook/entries/lake-tawakoni
  'lone-oak': {
    zips: ['75453'],
    neighborhoods: ['Rocky Ford', 'The Villages of Lone Oak', 'Holiday Hills', 'Buffalo Mesa', 'Downtown Lone Oak'],
    landmarks: ['Lake Tawakoni', 'Lone Oak ISD campus', 'US-69 through town'],
    majorRoads: ['US-69', 'FM 513'],
    nearbyCities: ['east-tawakoni', 'point', 'emory', 'west-tawakoni', 'greenville', 'campbell'],
    responseBand: '',
    gateProfile: {
      dominant: 'A prairie town on US-69 near the north end of Lake Tawakoni, with a gated lakefront community and rural acreage around it',
      commonGateTypes: ['Community entrance swing', 'Acreage driveway swing', 'Ranch entrance swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'US Automatic', 'Mighty Mule'],
      commonIssues: [
        'Keypad and telephone entry faults at community gates',
        'Lake humidity corroding control boards and terminals',
        'Solar operators on wooded lots with poor sun',
        'Hinge and arm wear on heavy entrance leaves',
      ],
    },
    localAngle:
      'Lone Oak was named for a single oak tree standing on the prairie, got its post office in 1869 and was incorporated in 1890 when the Missouri, Kansas and Texas Railroad arrived. Today it is a town of about 640 on US-69 between Greenville and Emory, with the north end of Lake Tawakoni a few miles off. Two kinds of gate dominate around here. Rocky Ford, just outside town, is a gated lakefront community, and its entrance runs on a keypad or telephone entry system that every resident and delivery driver depends on, so a fault there is a whole-neighborhood problem rather than one household’s. The other kind is the private gate on acreage along FM 513 and the county roads toward the lake, often solar, often under oak and cedar that shade the panel. Near the water, damp air works on control boards and wiring connections, and green corrosion on a terminal block is a common find when a gate opener starts acting up.',
    faqs: [
      {
        q: 'Our community entrance keypad near Lone Oak stopped accepting codes. Can you fix that?',
        a: 'Yes. Keypad and telephone entry systems fail in a handful of predictable ways: a dead keypad from moisture or a lightning surge, a lost code memory, a phone line or cellular module problem, or a fault in the operator it controls. We test each part of the chain, and we can work with the HOA or property manager on codes and access lists once the hardware is sorted.',
      },
      {
        q: 'Does living near Lake Tawakoni affect our gate opener?',
        a: 'It can. Damp air from the lake gets into control boxes that are not well sealed, and over time it corrodes terminals and circuit boards. Ants and wasps like the same boxes. Keeping the enclosure sealed, the weep holes clear and the wiring connections clean goes a long way, and we check for all of it on a service visit.',
      },
    ],
  },

  // Quinlan: sources: https://en.wikipedia.org/wiki/Quinlan,_Texas, https://www.homes.com/quinlan-tx/under-1m/,
  // https://mod2141.realgeeks.com/property/21358912/, https://tpwd.texas.gov/fishboat/fish/recreational/lakes/tawakoni/access2.phtml
  quinlan: {
    zips: ['75474'],
    neighborhoods: ['Downtown Quinlan', 'Mountain View Club', 'Kitsee Knoll Estates', 'Panorama Estates', 'Waters Edge'],
    landmarks: ['Lake Tawakoni', 'Boles Home', 'Rockin\' M Airport'],
    majorRoads: ['SH 34', 'SH 276 Quinlan Parkway', 'Loop 264', 'FM 751'],
    nearbyCities: ['west-tawakoni', 'east-tawakoni', 'poetry', 'caddo-mills', 'royse-city', 'greenville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A former cotton and oil town five miles west of Lake Tawakoni, with gated lake communities and larger estates toward the shore',
      commonGateTypes: ['Estate driveway swing', 'Community entrance slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Long, exposed drives on lakefront estates',
        'Community gate access systems with many users',
        'Lightning and power surges damaging boards',
        'Sandy or rocky ground under swing arcs near the shore',
      ],
    },
    localAngle:
      'Quinlan began around 1892 as a stop on the Texas Midland Railroad and was named for George A. Quinlan of the Houston and Texas Central. Cotton built it, oil carried it through the 1930s and 1940s, and Lake Tawakoni, five miles east, has driven its growth since the reservoir filled. Most gate calls here come from the lake side of town, along SH 276 and FM 751. Gated communities such as Mountain View Club put one entrance in front of many households, while lakefront estates sit at the end of long drives across open ground with nothing taller than the gate posts nearby. That open exposure is the local issue. Storms come across the water with little in their way, and surge damage to control boards and keypads is a recurring cause of a dead gate. Automatic gate repair in Quinlan often ends with fitting surge protection and a proper ground rod, not just a new board, so the same storm does not cause the same failure next spring.',
    faqs: [
      {
        q: 'Our gate near the lake died after a storm. Is it worth repairing?',
        a: 'Usually yes. Storm damage tends to take out the control board, the keypad or the receiver rather than the motor and gearbox, and those parts can be replaced on most current operators. What we also look at is why the surge got in: a missing ground rod, no surge suppressor on the power or loop wiring, or a long unprotected cable run. Fixing that is what stops a repeat.',
      },
      {
        q: 'Do you service gated community entrances around Quinlan?',
        a: 'Yes, including slide and swing entrances with keypads, telephone entry and vehicle detection loops. Community gates cycle far more than a private drive, so we look at wear parts as well as the reported fault. We can work directly with the HOA board or the management company and give them a written note of what was found and what should be budgeted next.',
      },
    ],
  },

  // West Tawakoni: sources: https://en.wikipedia.org/wiki/West_Tawakoni,_Texas, https://www.tshaonline.org/handbook/entries/lake-tawakoni,
  // https://tpwd.texas.gov/fishboat/fish/recreational/lakes/tawakoni/access2.phtml, https://aaronlayman.com/tx/west-tawakoni/indian-oaks-add/1016-shoreline-drive/,
  // https://aaronlayman.com/tx/west-tawakoni/wichita-bay/253-caro-drive/, https://aaronlayman.com/tx/west-tawakoni/arrowhead-add-1st-instl/332-comanche-trail
  'west-tawakoni': {
    zips: ['75474'],
    neighborhoods: ['Indian Oaks', 'Wichita Bay Estates', 'Arrowhead', 'Hales Lake Tawakoni', 'Caddo Inlet shoreline'],
    landmarks: ['Lake Tawakoni', 'West Tawakoni City Park', 'Caddo Inlet', 'Kitsee Inlet'],
    majorRoads: ['SH 276', 'Shoreline Drive'],
    nearbyCities: ['east-tawakoni', 'quinlan', 'lone-oak', 'point', 'wills-point', 'emory'],
    responseBand: '',
    gateProfile: {
      dominant: 'A lake town bordered on three sides by Lake Tawakoni and its inlets, made up largely of shoreline lots and gated waterfront subdivisions',
      commonGateTypes: ['Driveway slide', 'Residential driveway swing', 'Community entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Ghost Controls', 'Elite'],
      commonIssues: [
        'Corrosion on hardware and boards from lake humidity',
        'Narrow, sloping shoreline lots limiting gate layout',
        'Boat trailers and long vehicles tripping safety sensors',
        'Insects nesting in control boxes on seasonal homes',
      ],
    },
    localAngle:
      'West Tawakoni calls itself the Catfish Capital of Texas, and the description fits: Lake Tawakoni and its inlets border the town on three sides, with Caddo Inlet to the north and Waco Bay and Kitsee Inlet to the south. The lake itself was impounded behind Iron Bridge Dam on the Sabine River around 1960 and has roughly 200 miles of shoreline. Most homes here are on or near that water, in subdivisions like Indian Oaks and Wichita Bay Estates, and lots are often narrow, wooded and falling toward the shore. That shapes the gate. A swing gate frequently has no room to open on a sloping lot, so a sliding gate across the frontage is common. The bigger local factor is the boat. A gate that has to pass a truck and trailer needs a wide opening, a long enough hold-open time and safety sensors placed so a trailer tongue does not read as a clear path halfway through.',
    faqs: [
      {
        q: 'Our gate keeps closing on the boat trailer. Can that be fixed?',
        a: 'Yes, and it is a common setup issue at the lake. The usual causes are a hold-open timer set for a car rather than a truck and trailer, and photo eyes mounted where the gap between the truck and the boat looks like an empty drive. Adding a vehicle loop or a second set of sensors, and lengthening the timer, normally solves it. On a slide gate we also check the opening width against the trailer.',
      },
      {
        q: 'Our lake house sits empty for weeks. Will that hurt the gate opener?',
        a: 'It can. A battery backup or solar battery that is never cycled can drain or sulfate, and an unused control box is a favorite spot for wasps and ants, which can short a board. Humidity off the lake adds corrosion. A quick check before the busy season, a sealed enclosure and a battery test will usually head off the call you would otherwise make on the first weekend back.',
      },
    ],
  },

  // Combine: sources: https://en.wikipedia.org/wiki/Combine,_Texas, https://www.tshaonline.org/handbook/entries/combine-tx,
  // https://www.dot.state.tx.us/tpp/hwy/FM1000/FM1389.htm, https://tophap.com/sitemap/usa/tx/kaufman/combine/pole-bridge-rd,
  // https://aaronlayman.com/tx/combine/green-b-sanders/495-loren-boyd-road
  combine: {
    zips: ['75159'],
    // Combine has no named master-planned subdivisions; these are the named
    // acreage plats and roads that appear in appraisal-based listings.
    neighborhoods: ['Elizabeth Crane Acres', 'Green B Sanders', 'Pole Bridge Road', 'Snowden Road', 'FM 1389 corridor'],
    landmarks: ['FM 1389 and FM 3039 crossroads', 'Combine City Hall'],
    majorRoads: ['FM 1389', 'FM 3039'],
    nearbyCities: ['seagoville', 'crandall', 'wilmer', 'hutchins', 'balch-springs', 'forney'],
    responseBand: '',
    gateProfile: {
      dominant: 'A low-density city of acreage homesteads on the Dallas and Kaufman county line, incorporated to stay rural as Seagoville grew around it',
      commonGateTypes: ['Ranch entrance swing', 'Acreage driveway swing', 'Driveway slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Mighty Mule'],
      commonIssues: [
        'Wide, heavy entrance gates sagging on their hinges',
        'Clay-soil post movement on unpaved drives',
        'Long wire runs and voltage drop to the road',
        'Livestock and equipment traffic through the same opening',
      ],
    },
    localAngle:
      'Combine sits at the crossing of FM 1389 and FM 3039 about twenty miles southeast of Dallas, and it straddles the Dallas and Kaufman county line. By the 1970s the city of Seagoville had grown around it, and residents incorporated rather than be absorbed. The result is unusual so close to Dallas: about 2,200 people at the 2020 census spread over seven and a half square miles, most of them on one- to five-acre homesteads along roads like Pole Bridge and Snowden. Those properties have the gates you would expect on a farm, not in a suburb. Entrances are wide enough for a trailer or a tractor, the leaves are heavy pipe or welded steel, and the drive behind them is often gravel over clay. A wide gate puts a lot of leverage on its top hinge, and on clay ground the post holding it slowly gives way. When a swing gate in Combine starts dragging, we look at that post and hinge before the operator.',
    faqs: [
      {
        q: 'Our wide ranch gate in Combine drags at the far end. What is wrong?',
        a: 'Usually the hinge post has leaned or the top hinge has worn. A 16 or 20 foot leaf acts like a long lever, and in clay soil the post slowly gives under that load. Adjusting the operator will not cure it. The fix is to re-set or brace the post, replace worn hinges, and then re-tune the opener so it is not fighting a gate that drags.',
      },
      {
        q: 'Our house is a long way back from the road. Can we still run a hard-wired opener?',
        a: 'Often yes, but the wire has to be sized for the distance. Low-voltage operators lose power over long runs, which shows up as a gate that moves slowly or will not finish its stroke. Heavier cable, a transformer near the gate, or a solar operator with a hard-wired charger are all options. We measure the run and the gate weight before recommending one.',
      },
    ],
  },

  // Elmo: sources: https://en.wikipedia.org/wiki/Elmo,_Texas, https://www.zip-codes.com/zip-code/75118/zip-code-75118.asp,
  // https://www.dot.state.tx.us/tpp/hwy/FM2500/FM2728.htm, https://www.weichert.com/133137456/
  elmo: {
    // 75118 is Elmo's own PO Box ZIP; most rural street addresses around it
    // are delivered as Terrell 75160 or Wills Point 75169.
    zips: ['75118', '75160', '75169'],
    neighborhoods: ['US-80 frontage', 'FM 2728 corridor', 'FM 429 area', 'County Road 352 acreage'],
    landmarks: ['Union Pacific (former Texas and Pacific) rail line', 'US-80 corridor'],
    majorRoads: ['US-80', 'FM 2728', 'FM 429'],
    nearbyCities: ['terrell', 'wills-point', 'poetry', 'kaufman', 'edgewood', 'forney'],
    responseBand: '',
    gateProfile: {
      dominant: 'An unincorporated railroad community on US-80 between Terrell and Wills Point, mostly rural acreage with some highway-frontage businesses',
      commonGateTypes: ['Ranch entrance swing', 'Commercial yard slide', 'Farm pipe gate swing'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Solar operators on remote county-road entrances',
        'Dust and debris from gravel drives in track and hinges',
        'Security on yard gates fronting US-80',
        'Aging DIY-kit openers on farm gates',
      ],
    },
    localAngle:
      'Elmo was laid out at a railhead after the Texas and Pacific Railway built through in 1870, and it took its name from Elmo Scott, a railroad surveyor. It had a post office by 1873 and around 900 people within a decade, then faded. Today it is an unincorporated community of about 800 on US-80, six miles east of Terrell, in the Wills Point school district. With no city government of its own, the gates here are mostly a matter between the owner and any deed restrictions, and they reflect the land: farm and ranch entrances on county roads, plus some yards and businesses that face the highway. Many of the farm gates were automated years ago with a DIY kit opener, which does fine on a light gate and struggles once someone hangs a heavier one. Gate opener repair in Elmo often means deciding whether the old kit is worth another battery and arm, or whether the gate has outgrown it.',
    faqs: [
      {
        q: 'Our old kit opener on a farm gate near Elmo has quit. Repair or replace?',
        a: 'It depends on the gate and the opener. Many light-duty kits are rated for a single lightweight leaf, and they wear out quickly if the gate is heavier or longer than that. If the gate is within its rating, a new battery, arm or board is often enough. If it is not, a heavier duty solar operator will cost more up front but stop the repeat calls.',
      },
      {
        q: 'Do you work on business and yard gates along US-80 near Elmo?',
        a: 'Yes. Highway frontage yards usually want a slide or swing gate that locks reliably at night and opens quickly for trucks during the day. We service the operator, the track or hinges, and the access control, whether that is a keypad, remotes or a timer. On a yard gate we also check the manual release, so staff can still open it during a power outage.',
      },
    ],
  },

  // Kemp: sources: https://en.wikipedia.org/wiki/Kemp,_Texas, https://www.tshaonline.org/handbook/entries/cedar-creek-reservoir,
  // https://texasescapes.com/CentralTexasTownsNorth/Kemp-Texas.htm, https://www.roadsideamerica.com/tip/41146,
  // https://www.lakehomes.com/texas/cedar-creek-lake/tbd-patricia-kemp-tx-75143-lhrmls-03862738
  kemp: {
    zips: ['75143'],
    neighborhoods: ['Downtown Kemp', 'Edgewater at Cedar Creek Lake', 'Tanglewood Beach', 'Lakeside Acres', 'Pleasant Oak Beach'],
    landmarks: ['Cedar Creek Lake', 'Kemp Calaboose', 'Historic downtown Kemp'],
    majorRoads: ['US-175', 'SH 274'],
    nearbyCities: ['mabank', 'gun-barrel-city', 'kaufman', 'scurry', 'malakoff', 'athens'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small historic town at the north end of Cedar Creek Lake, with gated lake communities and weekend homes to the south',
      commonGateTypes: ['Community entrance swing', 'Residential driveway swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Ghost Controls', 'Elite'],
      commonIssues: [
        'Batteries draining on gates at weekend homes',
        'Insects nesting in unused control boxes',
        'Remote and keypad codes lost or forgotten between visits',
        'Humidity and corrosion near the shoreline',
      ],
    },
    localAngle:
      'Kemp grew up around a post office opened in 1851 and named for Sara Kemp, was incorporated in 1922, and has a tiny brick calaboose behind City Hall where Bonnie Parker spent a night in April 1932. Cedar Creek Reservoir, finished in 1965, lies just south of town, and much of what has been built around Kemp since then faces that water. Places like Edgewater at Cedar Creek Lake and Tanglewood Beach mix full-time residents with weekend owners from Dallas. The weekend house is the defining case for gate work here. A gate that cycles four times on a Saturday and then sits for three weeks behaves very differently from one used daily. Backup and solar batteries sulfate, wasps build in the control box, and a remote that has not been used since spring turns out to have a dead cell. A lot of automatic gate repair in Kemp comes down to the gate being idle, not worn out.',
    faqs: [
      {
        q: 'We only use our Cedar Creek Lake place on weekends. Why does the gate fail when we arrive?',
        a: 'Idle time is hard on gate openers. Batteries that are not cycled lose capacity, insects move into a quiet control box, and moisture collects on boards and terminals. Often the first sign is a gate that will not open on a Friday night. A service visit before the season, a battery test, a sealed enclosure and possibly a larger solar panel or charger usually stop it.',
      },
      {
        q: 'Can you work on the community gate at our lake subdivision near Kemp?',
        a: 'Yes. Community entrances around the lake usually run a keypad or telephone entry system with a swing or slide operator, and they see heavy use on holiday weekends. We can repair the operator and the entry hardware, and we will work with the HOA or the property manager on codes, access lists and a maintenance schedule for the busy months.',
      },
    ],
  },

  // Mabank: sources: https://en.wikipedia.org/wiki/Mabank,_Texas, https://atlas.thc.texas.gov/Details/5257008533,
  // https://aaronlayman.com/tx/mabank/pinnacle-club/114-pinnacle-club-drive, https://aaronlayman.com/tx/mabank/cedar-creek-landing/1518-shoreline-drive/,
  // https://www.tshaonline.org/handbook/entries/cedar-creek-reservoir
  mabank: {
    zips: ['75147', '75156'],
    neighborhoods: ['Pinnacle Club', 'Cedar Creek Landing', 'Cherokee Shores', 'Enchanted Isles', 'Cedar Creek Country Club', 'Downtown Mabank'],
    landmarks: ['Cedar Creek Lake', 'Mabank train depot', 'Pinnacle Golf Club', 'Mabank historical marker at Business US-175 and W. Market St.'],
    majorRoads: ['US-175', 'Business US-175', 'FM 90'],
    nearbyCities: ['gun-barrel-city', 'kemp', 'malakoff', 'athens', 'kaufman', 'scurry'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad town that straddles the Kaufman and Henderson county line on the north and east shores of Cedar Creek Lake, with gated golf and lake communities',
      commonGateTypes: ['Community entrance slide', 'Estate driveway swing', 'Barrier arm'],
      commonBrands: ['DoorKing', 'LiftMaster', 'Elite', 'HySecurity'],
      commonIssues: [
        'Telephone and keypad entry faults at gated communities',
        'Vehicle loop detector failures',
        'High holiday-weekend traffic through entrance gates',
        'Moisture and corrosion near the lake',
      ],
    },
    localAngle:
      'Mabank’s name joins two rancher surnames, Mason and Eubank, who set aside a square mile for a town when the railroad missed nearby Lawndale, and the town still straddles the Kaufman and Henderson county line. Its population climbed after Cedar Creek Reservoir was finished in 1965, and today it wraps the north and east sides of the lake with about 4,000 people at the 2020 census. A good share of local gate work happens at subdivision entrances rather than private drives. Pinnacle Club is a gated golf community, and lake neighborhoods such as Cedar Creek Landing and Cherokee Shores also sit behind entrances that serve many homes at once. Those gates combine a slide or swing operator with telephone entry, keypads and vehicle loops, and when any part fails, residents queue at the entrance. Commercial gate service in Mabank is therefore largely access control work: finding whether the fault is in the entry system, the loops or the operator itself.',
    faqs: [
      {
        q: 'Our subdivision gate in Mabank opens for some residents but not others. What is going on?',
        a: 'That pattern usually points to the access control rather than the operator. A telephone entry unit may have lost part of its directory, a group of remotes may be on an old code that was deleted, or one keypad entry may have been corrupted. We check the entry system’s memory and logs, test each input, and help the HOA tidy up its code list once the hardware is working.',
      },
      {
        q: 'Our property is on the Henderson County side. Do you still cover it?',
        a: 'Yes. Mabank sits across the Kaufman and Henderson county line, and we work both sides of it, along with Gun Barrel City and the rest of the lake. When you call, give us the subdivision name and whether there is a guarded or coded entrance we need to pass through, so we can arrange access before we arrive.',
      },
    ],
  },

  // Poetry: sources: https://en.wikipedia.org/wiki/Poetry,_Texas, https://www.poetrytexas.org/, https://www.dot.state.tx.us/tpp/hwy/FM1500/FM1565.htm,
  // https://www.landsearch.com/properties/19335-fm-986-poetry-tx-75160/5553163, https://www.bhgre.com/home/detail/tx/poetry/17948-fm-986/lid-P00800000HCrNSVAmPp9IZ5BQLLxi2Lyn5uICWTu
  poetry: {
    zips: ['75160'],
    neighborhoods: ['Four Post Ranch', 'Hilborn Addition', 'FM 986 corridor', 'FM 1565 corridor', 'FM 3486 acreage'],
    landmarks: ['Poetry Town Hall', 'Poetry Community Christian School', 'FM 986 and FM 1565 crossroads'],
    majorRoads: ['FM 986', 'FM 1565', 'FM 3486'],
    nearbyCities: ['terrell', 'quinlan', 'elmo', 'royse-city', 'forney', 'fate'],
    responseBand: '',
    gateProfile: {
      dominant: 'A widely spread agricultural town north of Terrell, made up of horse properties, small ranches and large rural lots',
      commonGateTypes: ['Ranch entrance swing', 'Pasture pipe gate swing', 'Dual-leaf entrance swing'],
      commonBrands: ['US Automatic', 'Mighty Mule', 'Ghost Controls', 'LiftMaster'],
      commonIssues: [
        'Livestock and horses near the gate path',
        'Solar operators far from any power source',
        'Clay soil moving entrance posts',
        'Trailer-width openings putting strain on hinges',
      ],
    },
    localAngle:
      'Poetry began as Turner’s Point in the 1850s and was renamed in 1876 at the suggestion of merchant Maston Ussery, who said the countryside in spring reminded him of a poem. Residents voted to incorporate in 1984, only for the Kaufman County Commissioners Court to throw the result out on technicalities, and they voted again in 2020. The town still describes itself as an agricultural community, and it is spread thinly around the crossing of FM 986 and FM 1565, reaching into Hunt County. Horse properties and small ranches set the gate pattern. Entrances are wide enough for a trailer, gates are often pipe or welded panels, and the operator is usually solar because the barn and house are well back from the road. Horses and cattle add their own demands: a swing gate in Poetry should never open into a pasture where animals stand, and safety sensors and closing force matter more here than on a suburban drive.',
    faqs: [
      {
        q: 'We keep horses. What should we know about an automatic gate in Poetry?',
        a: 'Plan the swing direction and the safety devices around the animals. A gate should swing away from where horses gather, and the closing force and obstruction sensing need to be set so it stops and reverses quickly if anything is in the way. Photo eyes or edge sensors are worth fitting even on a rural drive. We also make sure the manual release is easy to reach in an emergency.',
      },
      {
        q: 'Is Poetry within your service area?',
        a: 'Yes. We cover Poetry and the farm roads around it, including FM 986, FM 1565 and FM 3486, along with Terrell and Quinlan. Many properties here carry a Terrell mailing address, so when you call it helps to give us the road and a nearby crossroads, and tell us if there is a locked outer gate we will need to get through.',
      },
    ],
  },

  // Scurry: sources: https://en.wikipedia.org/wiki/Scurry,_Texas, https://www.tshaonline.org/handbook/entries/scurry-tx,
  // https://aaronlayman.com/tx/scurry/beautiful-acres/14260-n-3rd/, https://aaronlayman.com/tx/scurry/cottonwood-creek-estates/9613-county-road-4091,
  // https://aaronlayman.com/tx/scurry/shady-meadows-ph-1/1000-winding-wood-trail/, https://aaronlayman.com/tx/scurry/garnet-hills/14841-county-road-4060
  scurry: {
    zips: ['75158'],
    neighborhoods: ['Beautiful Acres', 'Cottonwood Creek Estates', 'Timarron Estates', 'Shady Meadows', 'Garnet Hills'],
    landmarks: ['Scurry-Rosser ISD campus', 'SH 34 through town'],
    majorRoads: ['SH 34', 'FM 148'],
    nearbyCities: ['kaufman', 'kemp', 'crandall', 'combine', 'talty', 'mabank'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small farm town on SH 34 southwest of Kaufman, surrounded by one- to three-acre rural subdivisions and survey tracts',
      commonGateTypes: ['Acreage driveway swing', 'Ranch entrance swing', 'Driveway slide'],
      commonBrands: ['Mighty Mule', 'US Automatic', 'LiftMaster', 'Ghost Controls'],
      commonIssues: [
        'Light-duty openers on gates heavier than their rating',
        'Clay soil shifting posts on unpaved drives',
        'Solar batteries past their service life',
        'Remote range from house to road on acre lots',
      ],
    },
    localAngle:
      'Scurry was settled in the mid-1840s, became a shipping point when the Texas and Pacific Railway arrived in the 1870s, and was not incorporated until 2003. Its name honors Scurry Dean, a Confederate soldier killed in the Civil War. The town itself is small, under 700 at the 2020 census, but the Scurry mailing area takes in rural subdivisions such as Beautiful Acres, Cottonwood Creek Estates and Shady Meadows, where lots typically run one to three acres. On land like that the gate is often a project the owner did in stages: a fence first, then a gate, then an opener added later, frequently a light-duty kit bought for a gate that turned out heavier than the kit was rated for. That mismatch is the most common call here. A driveway gate in Scurry that stalls, reverses for no reason or chews through batteries is usually an operator working past its limit, and the honest answer is sometimes a heavier opener rather than another repair.',
    faqs: [
      {
        q: 'Our opener keeps reversing halfway. It is a kit we installed ourselves. What is wrong?',
        a: 'Very often the gate is heavier or longer than the opener’s rating, so it trips its own obstruction sensing. Sagging hinges and a post that has moved in the clay add to the load. We weigh up the gate, check the hinges and post, and test the battery. If the opener is undersized, we will say so rather than keep replacing parts on it.',
      },
      {
        q: 'Do you install new gate openers in the Scurry area?',
        a: 'Yes. On acreage around Scurry we usually recommend a solar or hard-wired swing operator sized to the gate, with a lock, a manual release and safety sensors. If the gate itself is sagging or the post has leaned, we fix that first so the new opener is not fighting it. We can also add a keypad or extra remotes for family and deliveries.',
      },
    ],
  },

  // Talty: sources: https://en.wikipedia.org/wiki/Talty,_Texas, https://www.tshaonline.org/handbook/entries/talty-tx,
  // https://historicforney.org/spellmanmuseum/?p=634, https://www.taltytexas.com/page/church_school_business,
  // https://aaronlayman.com/tx/talty/winners-circle-1--2--3--4/1107-ruidoso-downs-drive, https://aaronlayman.com/tx/talty/shamrock-ridge-ph-3,-4,-5,-6,/18209-langford-lane
  talty: {
    // Talty has no post office of its own; addresses use Forney 75126 or Terrell 75160.
    zips: ['75126', '75160'],
    neighborhoods: ['Winners Circle', 'Shamrock Ridge', 'Founders Addition', 'Maplewood Meadows'],
    landmarks: ['St. Martin’s Catholic Church', 'I-20 and FM 1641 interchange'],
    majorRoads: ['I-20', 'FM 1641'],
    nearbyCities: ['forney', 'crandall', 'mesquite', 'sunnyvale', 'terrell', 'kaufman'],
    responseBand: '',
    gateProfile: {
      dominant: 'A fast-growing city of one-acre estate lots on Blackland clay along I-20, just south of Forney',
      commonGateTypes: ['Estate driveway swing', 'Dual-leaf wrought iron swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'US Automatic', 'All-O-Matic'],
      commonIssues: [
        'Masonry columns shifting in expansive clay',
        'Dual-leaf gates out of alignment at the latch',
        'Underground wiring damaged by soil movement',
        'Operators undersized for heavy iron leaves',
      ],
    },
    localAngle:
      'Talty was settled by Irish Catholic families, legally established by deed in 1874, and long known as Irish Ridge. St. Martin’s Church, founded in 1891, still stands where FM 1641 meets I-20. The city incorporated in 1999 and grew from 1,535 people in 2010 to 2,500 in 2020, mostly through subdivisions such as Winners Circle, whose streets are named for racetracks, and Shamrock Ridge, laid out on lots of around an acre. That lot size puts a gate at the head of a long drive, usually a pair of iron leaves hung on brick or stone columns. Those columns are the weak point. Talty sits on Blackland clay that swells after rain and cracks open in August, and a heavy masonry column on a shallow footing tilts a little each season until the two leaves no longer meet. Swing gate repair in Talty usually starts with a level on the columns and a look at the latch, then moves to the operator.',
    faqs: [
      {
        q: 'The two leaves of our iron gate in Talty no longer line up. Can that be adjusted?',
        a: 'Usually, once we find the cause. On Talty clay it is often one masonry column leaning slightly, which drops the leaf it carries. Hinge adjustment and resetting the operator limits can bring them back into line if the movement is small. If a column is still moving, we will tell you so, because adjusting the gate around it only lasts until the next dry spell.',
      },
      {
        q: 'We are building on an acre lot in Talty. What should we plan for a gate?',
        a: 'Run conduit and power to the gate position before the drive is poured, and give the columns proper footings for the clay. Decide early between swing and slide: a swing gate needs clear space behind it, while a slide gate needs room along the fence line. Planning these now costs far less than cutting a new driveway later, and we are happy to look at the plan with you.',
      },
    ],
  },

  // Athens: sources: https://en.wikipedia.org/wiki/Athens,_Texas, https://atlas.thc.texas.gov/Details/5507013831,
  // https://tpwd.texas.gov/wildlife/wildlife-diversity/wildscapes/wildscapes-plant-guidance-by-ecoregion/post-oak-savannah/,
  // subdivision names from aaronlayman.com/tx/athens listing pages (peninsula-point, hillcrest-south, valle-vista, highland-hills-3), landsearch.com (Windward Cove)
  athens: {
    zips: ['75751', '75752'],
    neighborhoods: ['Lake Athens shoreline', 'Peninsula Point', 'Windward Cove', 'Hillcrest South', 'Valle Vista', 'Highland Hills'],
    landmarks: ['Henderson County Courthouse (1913)', 'Lake Athens', 'Texas Freshwater Fisheries Center', 'East Texas Arboretum'],
    majorRoads: ['US-175', 'SH 31', 'SH 19'],
    nearbyCities: ['malakoff', 'gun-barrel-city', 'mabank', 'kemp', 'canton', 'kaufman'],
    responseBand: '',
    gateProfile: {
      dominant: 'A county seat on Post Oak Savannah ground, with lake lots on Lake Athens and acreage on the roads out of town',
      commonGateTypes: ['Driveway swing', 'Lake lot slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Mighty Mule', 'Elite'],
      commonIssues: [
        'Footings sitting in water perched on the clay pan after rain',
        'Sandy topsoil washing out from around posts on sloped lake lots',
        'Damp, shaded drives corroding wiring and photo-eyes',
        'Gates drifting off the latch as a soft post moves',
      ],
    },
    localAngle:
      'Athens has been the Henderson County seat since 1850, and Lake Athens, an 1,800-acre reservoir, fills much of the eastern half of the city. The ground belongs to the Post Oak Savannah, which Texas Parks and Wildlife describes as sands and sandy loams on the uplands with a dense clay pan underneath. For a gate, that layering matters more than the sand itself. Rain soaks quickly through the top few feet and then stops at the clay, so a post footing that ends in that band can sit in standing water for days after a storm, and loose sand around it washes and shifts more readily than solid clay would. On lake lots the fall toward the water makes it worse. When we do automatic gate repair in Athens, a gate that sags or creeps off its latch gets its footing checked first, because resetting operator limits on a post that is still moving only buys a few weeks. Lakeside drives also tend to stay shaded and damp, which is hard on exposed low-voltage wiring and photo-eyes.',
    faqs: [
      {
        q: 'We are near Lake Athens and our gate post leans a little further every spring. Why?',
        a: 'Around Athens the usual cause is water rather than the gate. Sandy topsoil here sits over a dense clay layer, so after heavy rain the water collects at the clay instead of draining away, and a footing that stops in that zone stays soaked. On a lot that slopes toward the lake the sand around the post can also wash out. The fix is a deeper or wider footing that reaches firmer ground, plus some thought about where the runoff goes.',
      },
      {
        q: 'Do you cover Athens and the lake and county roads around it?',
        a: 'Yes. Athens, the Lake Athens shoreline and the roads out toward Malakoff and Cedar Creek Lake are all in the area we work. Many addresses outside the city limits are on county roads that do not map well, so it helps to give us the road name and a nearby landmark when you call. We will give you an honest arrival window at that point rather than a guess.',
      },
    ],
  },

  // Gun Barrel City: sources: https://en.wikipedia.org/wiki/Gun_Barrel_City,_Texas,
  // https://www.nbcdfw.com/news/local/texas-wants-to-know-how-gun-barrel-city-and-muleshoe-got-their-names/3279570/,
  // subdivision names from aaronlayman.com/tx/gun-barrel-city listing pages (harbor-point, loon-bay, tamarack, timber-trails-estate, the-meadows, mantle-manors)
  'gun-barrel-city': {
    zips: ['75156'],
    neighborhoods: ['Harbor Point', 'Loon Bay', 'Tamarack', 'Timber Trails Estates', 'The Meadows', 'Cedar Creek Lake east shore'],
    landmarks: ['Cedar Creek Lake', 'Gun Barrel City Park', 'Tom Finley Park'],
    majorRoads: ['SH 334', 'SH 198', 'US-175'],
    nearbyCities: ['mabank', 'malakoff', 'kemp', 'athens', 'kaufman', 'scurry'],
    responseBand: '',
    gateProfile: {
      dominant: 'A lake town on the east shore of Cedar Creek Lake, built largely on narrow waterfront lots with short drives',
      commonGateTypes: ['Residential slide', 'Single-leaf swing', 'Lake lot privacy gate'],
      commonBrands: ['LiftMaster', 'Mighty Mule', 'US Automatic', 'Elite'],
      commonIssues: [
        'Sand and leaf litter fouling slide gate tracks',
        'Rusted rollers and hardware near the water',
        'Leading edges bent by boat trailers backing in',
        'Moisture getting into poorly sealed control boxes',
      ],
    },
    localAngle:
      'Gun Barrel City was incorporated on May 26, 1969, a few years after Cedar Creek Reservoir filled, and it is named for Gun Barrel Lane, the straight dirt road that State Highway 198 later replaced. Nearly everything about gates here follows from the lake, which has more than 220 miles of shoreline. Many homes sit on narrow waterfront lots in subdivisions like Harbor Point and Loon Bay, where the drive is short and a swing leaf has barely enough room to open without crossing the street or the property line. That pushes owners toward a sliding gate, and a slide gate near the water has its own habits: the track collects sand and leaves, the rollers rust, and a boat trailer backing in is often what bends the leading edge. Humidity off a lake that size also works on any control box that was never properly sealed. For gate opener repair in Gun Barrel City we start with the track, the rollers and the enclosure before blaming the motor, since the motor is usually the last part to give out.',
    faqs: [
      {
        q: 'Is a slide gate or a swing gate better on a narrow lake lot?',
        a: 'On most of the narrow lots around Cedar Creek Lake a slide gate is the practical choice, because a swing leaf needs clear ground the full width of the opening and a short drive rarely has it. The trade-off is maintenance. A slide gate this close to the water needs its track kept clear of sand and its rollers checked for rust, and a quick clean every few months does more for it than any repair.',
      },
      {
        q: 'Our gate was clipped by a boat trailer. Can it be straightened, or does it need replacing?',
        a: 'Often it can be repaired. A bent leading edge or a twisted frame can usually be straightened or the damaged section replaced, but the operator, the rollers and the track should be checked at the same time, because the impact tends to travel into them. If the gate keeps getting hit, it is worth looking at where it stops and whether the opening is wide enough for the trailer you tow.',
      },
    ],
  },

  // Malakoff: sources: https://en.wikipedia.org/wiki/Malakoff,_Texas, https://atlas.thc.texas.gov/Details/5213012663,
  // https://capitol.texas.gov/tlodocs/79R/billtext/html/HR00573I.htm, https://texasescapes.com/TOWNS/Malakoff/Malakoff.htm,
  // subdivision names from aaronlayman.com/tx/malakoff listing pages (long-cove, briarwood-harbor-sub, point-la-vista) and listing data for Cedar Creek Ranch
  malakoff: {
    zips: ['75148'],
    neighborhoods: ['Downtown Malakoff', 'Long Cove', 'Cedar Creek Ranch', 'Briarwood Harbor', 'Point La Vista', 'FM 3054 corridor'],
    landmarks: ['Cedar Creek Lake', 'Downtown Malakoff', 'Malakoff Man discovery area'],
    majorRoads: ['SH 31', 'SH 198', 'FM 3054'],
    nearbyCities: ['athens', 'gun-barrel-city', 'mabank', 'kemp', 'kaufman', 'scurry'],
    responseBand: '',
    gateProfile: {
      dominant: 'An old mining and brickmaking town on red clay, with gated lake communities a few miles north on Cedar Creek Lake',
      commonGateTypes: ['Wrought iron swing', 'Community entrance slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Posts pushed and released by seasonal clay movement',
        'Gates dragging and overloading the operator by late summer',
        'High-cycle wear on community entrance operators',
        'Keypad, card reader and loop detector faults at shared gates',
      ],
    },
    localAngle:
      'Malakoff was a mining town before it was a lake town. Lignite was discovered nearby in 1912, and for about three decades miners worked the seams beneath the red clay, while the Malakoff Pressed Brick Company was already making brick here in 1904. That clay is why gate work in Malakoff looks different from the sandier ground toward Athens. Clay good enough to fire into brick holds water, swells when it is wet and pulls back hard in a dry August, so a post set in it is pushed and then released every year. Heavy iron leaves exaggerate the effect: the latch stops lining up, the bottom rail starts to drag, and the operator overloads trying to move it. A few miles north, toward Cedar Creek Lake, the gated developments such as Cedar Creek Ranch rely on shared entrance gates that open and close all day, which is a different job altogether. There the work is a commercial gate operator under heavy duty, plus the keypads, card readers and vehicle loops that decide who gets in.',
    faqs: [
      {
        q: 'Our gate runs fine in spring but drags and stalls by late summer. Is the motor going?',
        a: 'Probably not. In the red clay around Malakoff that pattern usually means the posts are moving. Wet clay swells and dry clay shrinks, and as the ground pulls back in summer the post leans enough that the gate sags and rubs. The operator then works harder and may trip its overload. Correcting the post, and sometimes the hinge adjustment, normally cures it without touching the motor.',
      },
      {
        q: 'Do you repair HOA and community entrance gates near Cedar Creek Lake?',
        a: 'Yes. We work on shared entrance gates, including the operators, the access keypads and card readers, the loop detectors under the drive and the safety devices. Those gates cycle far more often than a single home gate, so parts wear on a different schedule. If your community has a management company or a board contact, having them call keeps the access codes and approvals in one place.',
      },
    ],
  },

  // Canton: sources: https://en.wikipedia.org/wiki/Canton,_Texas,
  // subdivision names from aaronlayman.com/tx/canton listing pages (lake-meadow, deer-meadows, woodland-acres) and listing data for Whispering Oaks and Mallard Estates
  canton: {
    zips: ['75103'],
    neighborhoods: ['Downtown Canton square', 'Lake Meadow', 'Deer Meadows', 'Woodland Acres', 'Whispering Oaks', 'Mallard Estates'],
    landmarks: ['First Monday Trade Days grounds', 'Van Zandt County Courthouse', 'Blackwell House Museum', 'Mill Creek Ranch Resort'],
    majorRoads: ['I-20', 'SH 19', 'SH 64', 'SH 243'],
    nearbyCities: ['edgewood', 'wills-point', 'emory', 'mabank', 'athens', 'terrell'],
    responseBand: '',
    gateProfile: {
      dominant: 'The Van Zandt County seat, with acreage homes around town and a recent history of severe storms',
      commonGateTypes: ['Ranch entrance swing', 'Solid privacy swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'Ghost Controls', 'Mighty Mule'],
      commonIssues: [
        'Wind load on solid or wide leaves stripping operator gears',
        'Bent operator arms and brackets after storms',
        'Gates trapped shut during power outages with no battery backup',
        'Storm debris and surges damaging control boards',
      ],
    },
    localAngle:
      'Canton is known for First Monday Trade Days, held on a 30-acre grounds that draws several times the town’s population each month, but for gate owners the more useful piece of local history is the weather. An EF4 tornado tore through the Canton area on April 29, 2017, and another struck downtown along State Highways 19 and 64 on May 29, 2019. Wind is the heaviest load a gate ever carries. A solid privacy panel or a wide ranch gate acts like a sail, and even ordinary spring storms shove the closed leaf against the operator arm, which strips gears and fatigues brackets long before anything visibly breaks. Outages after storms are the second issue, since a gate with no battery backup turns into a locked barrier until the power comes back. When we look at gate motor trouble in Canton, we ask about the last big blow, check the arm and its mounts for stress, and usually suggest a battery backup and a manual release that everyone in the house knows how to work.',
    faqs: [
      {
        q: 'A storm pushed against our gate and now the opener grinds. Can it be repaired?',
        a: 'Usually, yes. When wind forces a closed gate, the strain goes into the operator’s gearbox and the arm or bracket, and grinding afterward most often means stripped gears or a bent arm rather than a dead motor. Those parts can normally be replaced on their own. We would also check the hinges and the post, since a gust strong enough to damage the opener can shift those too.',
      },
      {
        q: 'Should we add a battery backup to our gate opener?',
        a: 'Around Canton we would recommend it for almost any gate that is the only way in or out of a property. Storm outages here can last a while, and without a backup the gate stays wherever it was when the power dropped. A backup will run a typical residential opener through a number of cycles. Whatever you choose, make sure everyone knows where the manual release is.',
      },
    ],
  },

  // Edgewood: sources: https://en.wikipedia.org/wiki/Edgewood,_Texas, https://atlas.thc.texas.gov/Details/4200000125,
  // https://edgewoodtexas.org/about-us/, https://atlas.thc.texas.gov/Details/5467011404,
  // subdivision names from aaronlayman.com/tx/edgewood listing pages (orig-edgewood, royal-oaks, southridge, hunter-estate-ph-i, edgewood-acres)
  edgewood: {
    zips: ['75117'],
    neighborhoods: ['Original Edgewood townsite', 'Royal Oaks', 'Southridge', 'Hunter Estates', 'Edgewood Acres', 'FM 859 corridor'],
    landmarks: ['Heritage Park Museum of East Texas', 'First Baptist Church of Edgewood'],
    majorRoads: ['US-80', 'FM 859', 'FM 1395'],
    nearbyCities: ['wills-point', 'canton', 'east-tawakoni', 'point', 'emory', 'terrell'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small town on the western edge of the East Texas timberline, where open pasture meets tree lines on many properties',
      commonGateTypes: ['Ranch entrance swing', 'Pipe farm gate', 'Driveway swing'],
      commonBrands: ['Ghost Controls', 'Mighty Mule', 'US Automatic', 'LiftMaster'],
      commonIssues: [
        'Solar panels shaded by trees through the winter',
        'Falling limbs damaging leaves and operators',
        'Tree roots working against post footings',
        'Batteries running flat after cloudy spells',
      ],
    },
    localAngle:
      'Edgewood takes its name from where it sits, on the far western edge of the East Texas timberline, about 60 miles east of Dallas on U.S. Highway 80. West of here the land opens into prairie, and from Edgewood eastward the trees close in. That boundary turns up in gate problems. Properties along FM 859 and FM 1395 often mix open pasture with tree lines, and a driveway gate set where the two meet gets the worst of both: limbs that come down on the leaf or the operator in a storm, roots that press against post footings as the trees grow, and shade that can starve a solar panel through the short days of winter. A solar gate that slows in December and recovers by April is usually a charging problem rather than a failing motor, and moving the panel into open sun or adding a second one costs far less than a new opener. For gate installation in Edgewood we look up at the canopy as well as down at the soil before choosing where the posts and panel go.',
    faqs: [
      {
        q: 'Our solar gate gets sluggish every winter and then recovers. Is the opener wearing out?',
        a: 'That seasonal pattern almost always points at charging, not the opener. In winter the sun sits lower and nearby trees throw longer shadows, so a panel that did fine in June may get only a couple of hours of real light in December. The battery never fully recharges and the gate slows. Relocating the panel, raising it on a pole or adding capacity usually solves it, and an old battery should be tested too.',
      },
      {
        q: 'There is a large oak right beside our gate post. Should we worry?',
        a: 'It is worth keeping an eye on. A big tree near a post can cause trouble two ways: roots slowly pushing the footing out of line, and limbs falling on the gate or operator in high wind. Neither means the tree has to go. Trimming overhanging limbs and setting a new post a little further from the trunk, if one is ever needed, keeps most of the risk down.',
      },
    ],
  },

  // Wills Point: sources: https://en.wikipedia.org/wiki/Wills_Point,_Texas, https://www.willspointtx.gov/history,
  // https://capitol.texas.gov/tlodocs/74R/billtext/html/HC00006F.htm, https://www.twdb.texas.gov/surfacewater/rivers/reservoirs/tawakoni/index.asp,
  // subdivision names from aaronlayman.com/tx/wills-point listing pages (willow-lake-unit-2, blue-haven-estate, holiday-estates, brinwood-shores-add-sec-b)
  'wills-point': {
    zips: ['75169'],
    neighborhoods: ['Downtown Wills Point', 'Willow Lake Estates', 'Waco Bay', 'Blue Haven Estates', 'Holiday Estates', 'Brinwood Shores'],
    landmarks: ['Downtown brick streets and railroad depot museum', 'Wills log cabin', 'Van Zandt County Regional Airport', 'Lake Tawakoni'],
    majorRoads: ['US-80', 'SH 64', 'FM 47', 'I-20'],
    nearbyCities: ['edgewood', 'west-tawakoni', 'east-tawakoni', 'point', 'canton', 'terrell'],
    responseBand: '',
    gateProfile: {
      dominant: 'A railroad town with a historic downtown, gated lake communities to the north toward Lake Tawakoni and acreage elsewhere',
      commonGateTypes: ['Community entrance swing', 'Ranch entrance swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'US Automatic', 'Ghost Controls'],
      commonIssues: [
        'High-cycle wear on shared community entrance operators',
        'Out-of-date keypad codes and remote lists at HOA gates',
        'Solar batteries failing on long rural drives',
        'Lake moisture corroding control boxes',
      ],
    },
    localAngle:
      'Wills Point grew up along the railroad in 1873, still has Union Pacific trains running through the middle of town, and was named the Bluebird Capital of Texas in 1995. The downtown keeps its brick streets, a depot museum and the original Wills log cabin. Most gate work, though, happens outside the old town. North of Wills Point the country runs up toward Lake Tawakoni, whose Iron Bridge Dam sits about nine miles to the northeast, and the lake side has gated communities such as Willow Lake Estates as well as areas like Waco Bay where homes sit close to the water. An entrance gate shared by a whole community is not the same job as a single driveway gate: there are dozens of users, a code or remote list that has to be kept current, and a commercial gate operator expected to survive many times the cycles of a house gate. Away from the lake it is mostly acreage, where a long drive, a solar panel and a wide pipe gate are the usual combination. If you need automatic gate repair in Wills Point, tell us which side of town you are on.',
    faqs: [
      {
        q: 'Our community gate near the lake is slow and some residents’ remotes have stopped working. Is that one problem or two?',
        a: 'Often two. A slow gate on a shared entrance usually points at wear in the operator, a weak battery or a gate that has started to bind, while remotes failing for some people and not others is more often a receiver memory or programming issue. Both are common on entrances that cycle all day. We check them separately so you do not pay to replace an operator when the fault is in the access side.',
      },
      {
        q: 'Do you work on gates out in the country around Wills Point, not just near town?',
        a: 'Yes. Rural properties toward Edgewood, Canton and the Lake Tawakoni shore are all in our area, and many of them run solar openers on long drives, a setup we work on all the time. County road addresses can be hard to find, so a gate code, a description of the entrance or a pin on a map saves time on the first visit.',
      },
    ],
  },

  // East Tawakoni: sources: https://en.wikipedia.org/wiki/East_Tawakoni,_Texas, https://www.sratx.org/?p=58,
  // https://atlas.thc.texas.gov/Details/5231007811,
  // subdivision names from aaronlayman.com/tx/east-tawakoni listing pages (whispering-oaks, blue-heron-cove, little-oaks, tawakoni-marina-estates, sandy-shores);
  // FM 2737 and FM 513 from listing and map references near Briggs Boulevard
  'east-tawakoni': {
    zips: ['75472'],
    neighborhoods: ['Blue Heron Cove', 'Whispering Oaks', 'Little Oaks', 'Tawakoni Marina Estates', 'Sandy Shores'],
    landmarks: ['Lake Tawakoni', 'East Tawakoni City Hall and Civic Center'],
    majorRoads: ['SH 276', 'FM 2737', 'FM 513'],
    nearbyCities: ['west-tawakoni', 'point', 'emory', 'quinlan', 'lone-oak', 'wills-point'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small lake town on the east shore of Lake Tawakoni, exposed to wind and moisture off open water',
      commonGateTypes: ['Residential slide', 'Driveway swing', 'Lake lot privacy gate'],
      commonBrands: ['LiftMaster', 'Mighty Mule', 'US Automatic', 'Viking'],
      commonIssues: [
        'Corroded terminals and control boards',
        'Photo-eyes fogging or drifting out of alignment',
        'Wind buffeting gates and straining operator arms',
        'Rust on hinges, rollers and fasteners',
      ],
    },
    localAngle:
      'East Tawakoni was incorporated in 1967 on the east shore of Lake Tawakoni along State Highway 276, and it doubled in size in 1986 when it annexed Blue Heron Cove. At under two square miles, it is almost entirely a lake town, and that is the whole story for gates here. Homes in Blue Heron Cove, Whispering Oaks and Sandy Shores sit a short walk from a reservoir of roughly 36,700 acres, so wind arrives across a long reach of open water with nothing to slow it, and the air is rarely dry. Together those are hard on electronics. Corroded terminals, a control board with green crust on its connections, and photo-eyes that fog or creep out of alignment are far more common here than a few miles inland. Wind adds strain of its own: a leaf held only by its operator gets buffeted, and the arm and bracket absorb every gust. For gate opener repair in East Tawakoni the first look is usually inside the control box, and the lasting fix is often a better sealed enclosure and protected connections rather than yet another new board.',
    faqs: [
      {
        q: 'We have replaced our gate’s control board twice in a few years. Why does it keep failing?',
        a: 'Near the lake, repeat board failures are very often moisture rather than bad luck. Damp air gets into an enclosure that is not properly sealed, condensation forms, and the connections corrode until the board misbehaves. Swapping the board without dealing with that just restarts the clock. Sealing the enclosure, raising it if it sits low, and protecting the terminals usually stops the cycle.',
      },
      {
        q: 'Does wind off Lake Tawakoni damage gates?',
        a: 'It can, especially on solid or tall gates. A strong gust against a closed leaf puts load on the operator arm, the bracket and the hinges, and over time that shows as play in the arm, a gate that no longer closes square, or a gearbox that starts to grind. Positive stops and a good latch take that load off the operator, which is the part least suited to carrying it.',
      },
    ],
  },

  // Emory: sources: https://en.wikipedia.org/wiki/Emory,_Texas,
  // subdivision names from aaronlayman.com/tx/emory listing pages (glade-creek, lake-fork-estates, yarber-green, bear-creek, tull-add)
  emory: {
    zips: ['75440'],
    neighborhoods: ['Downtown Emory', 'Glade Creek', 'Lake Fork Estates', 'Yarber Green', 'Bear Creek', 'Tull Addition'],
    landmarks: ['Rains County Courthouse', 'Lake Fork Reservoir', 'Lake Tawakoni'],
    majorRoads: ['US-69', 'SH 19', 'SH 276'],
    nearbyCities: ['point', 'east-tawakoni', 'west-tawakoni', 'lone-oak', 'quinlan', 'canton'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small county seat between two large lakes, surrounded by rural acreage on county roads',
      commonGateTypes: ['Ranch entrance swing', 'Pipe farm gate', 'Dual swing'],
      commonBrands: ['Ghost Controls', 'Mighty Mule', 'US Automatic', 'Viking'],
      commonIssues: [
        'Aging solar batteries failing at night or after cloudy weeks',
        'Gates not fully closing where livestock are kept',
        'Long runs to entrances far from the house and power',
        'Wireless keypads and remotes losing range on long drives',
      ],
    },
    localAngle:
      'Emory is the seat of Rains County and is named, like the county, for Emory Rains, the legislator who wrote the Texas homestead law. The town sits between two large reservoirs, Lake Tawakoni to the west and Lake Fork to the east, and most of the land around it is rural acreage reached by county roads and farm-to-market routes rather than city streets. That shapes the gates. On a place out along a county road the entrance can be a long way from the house, with no power line anywhere near it, so solar openers are the norm and their batteries are the part that most often lets owners down. A battery four or five years old may open the gate happily on a sunny afternoon and then quit at night or after a cloudy week. Livestock is the other consideration, because a gate that stops short of closed, or reopens by itself, can let cattle or horses onto the road. If you need gate repair in Emory, tell us whether the gate is keeping animals in, since that changes how we set the close timer and safety settings.',
    faqs: [
      {
        q: 'Our solar gate opens during the day but sometimes will not open at night. What is wrong?',
        a: 'That is the classic sign of a tired battery. During the day the panel is supplying current and masks the problem, but after dark the gate runs on the battery alone and an aging one cannot deliver enough. Most solar gate batteries need replacing every few years. Testing the battery and the charge controller first is cheaper than assuming the opener has failed.',
      },
      {
        q: 'Our gate keeps cattle in. Can it be set so it never stays open?',
        a: 'It can be set to close reliably, with care. An auto-close timer returns the gate after a set time, and the safety sensors still need to stop it if an animal or vehicle is in the way, so a closing gate never pins anything. We also look at whether the gate actually reaches its closed stop every time, because a gate that stalls a foot short looks shut but is not.',
      },
    ],
  },

  // Point: sources: https://en.wikipedia.org/wiki/Point,_Texas, https://www.sratx.org/?p=58,
  // subdivision names from aaronlayman.com/tx/point listing pages (iron-bridge-sub, cotton-estates, cedar-creek-properties, benjamin-gage) and its Point subdivision list (Lakeshore Estates, Sun Point)
  point: {
    zips: ['75472'],
    neighborhoods: ['Downtown Point', 'Iron Bridge', 'Cotton Estates', 'Cedar Creek Properties', 'Lakeshore Estates', 'Sun Point'],
    landmarks: ['Lake Tawakoni', 'Iron Bridge Dam'],
    majorRoads: ['US-69', 'FM 47', 'FM 514', 'SH 276'],
    nearbyCities: ['emory', 'east-tawakoni', 'lone-oak', 'west-tawakoni', 'quinlan', 'wills-point'],
    responseBand: '',
    gateProfile: {
      dominant: 'A former railroad flag stop surrounded by multi-acre tracts and farm and ranch land near Lake Tawakoni',
      commonGateTypes: ['Pipe ranch gate', 'Ranch entrance swing', 'Dual swing'],
      commonBrands: ['Ghost Controls', 'US Automatic', 'Mighty Mule', 'LiftMaster'],
      commonIssues: [
        'Posts set for manual gates leaning once a motor is added',
        'Wide tube gates sagging at the latch end',
        'Solar charging and battery faults on remote entrances',
        'Operators undersized for long, heavy leaves',
      ],
    },
    localAngle:
      'Point began around 1880 as a flag stop on the Missouri, Kansas and Texas railroad, and the post office settled on the short name after "Rice’s Point" was turned down. It still sits where U.S. 69 meets FM 47 and FM 514, with Lake Tawakoni a few miles away. The town is small and much of what surrounds it is land sold in multi-acre pieces: Cotton Estates lots run around six acres, and farm and ranch parcels along State Highway 276 reach twenty or more. On property like that the entrance is usually a wide tube or pipe gate on a swing operator, often hung on posts that were set for a hand-opened gate years before anyone motorized it. That combination produces a predictable failure. A post that held a manual gate for a decade is often too shallow or too light for an operator driving the same leaf several times a day, and it gradually leans toward the hinge side until the gate drags. Before paying for a new swing gate opener in Point, have the post checked, because a fresh motor on a moving post will wear out the same way the old one did.',
    faqs: [
      {
        q: 'We added an opener to our old ranch gate and now the post is leaning. Why?',
        a: 'An operator puts a different kind of load on a post than a person does. It pushes and pulls the leaf with force at a fixed point, every cycle, and a long pipe gate multiplies that at the hinge. Posts set years ago for a manual gate were rarely sized for it. The usual answer is a deeper, heavier hinge post, sometimes with a brace, before the opener is readjusted.',
      },
      {
        q: 'Can a solar opener handle a 16 or 20 foot ranch gate?',
        a: 'Yes, if the opener and the solar setup are matched to the gate. A long leaf needs an operator rated for its length and weight, and the panel and battery need to cover how often it actually runs, including dark winter weeks. An undersized kit will work at first and then struggle. Telling us the gate length, the material and roughly how many trips a day it makes lets us size it properly.',
      },
    ],
  },

}

const build = (raw: [string, string][], tier: 2 | 3): City[] =>
  raw.map(([name, county]) => ({ slug: toSlug(name), name, county, tier, ...ENRICHED[toSlug(name)] }))

export const tier2Cities = build(tier2Raw, 2)
export const tier3Cities = build(tier3Raw, 3)

export const cities: City[] = [...tier1Cities, ...tier2Cities, ...tier3Cities]

/**
 * Cities that have their own page and will answer a request.
 *
 * Every city on the client's list gets a page — the client asked for this
 * directly on 3 Aug 2026, overriding the earlier decision to publish only the
 * 14 enriched pages. That still holds, and these pages still render: they are
 * live Google Ads destinations for local search, and withdrawing the URLs would
 * break running campaigns as well as overruling the client.
 *
 * What changed on 6 Sep 2026 is that RENDERING a page and SUBMITTING it for
 * indexing are now two separate decisions — see `indexedCities` below. The
 * client asked for a page at every city URL. He did not ask for 176 near-
 * identical pages to be entered into Google's index, and that is the half that
 * carries the risk.
 */
export const publishedCities: City[] = cities

/**
 * Cities submitted for indexing — in the sitemap, and without `noindex`.
 *
 * Google's scaled-content-abuse policy targets sets of near-identical pages
 * generated from a template with only the place name swapped. A Tier 2/3 page
 * here is honest about being short — it states its county, links its genuine
 * county neighbours, shows the map and stops, rather than padding to 1,500
 * words with invented neighborhoods and response times. Honest is necessary but
 * it is not sufficient: measured, two Tier 3 pages differ in 5 of 29 text
 * blocks, and only by county name. Submitting 176 of those is the risk, not
 * serving them.
 *
 * So the 14 enriched cities are indexed and the remaining 176 are `noindex,
 * follow` — crawlable, link-passing, reachable from /service-areas and from
 * every city page's "nearby cities" block, and available to any Ads click, but
 * not asking Google to treat them as 176 distinct answers.
 *
 * Promotion is a data change and nothing else. Fill in `localAngle` (plus
 * `neighborhoods` and `faqs` for Tier 1 and 2, which `isPublishable` checks)
 * and the city moves into this list, into the sitemap, and out of `noindex`
 * on the next build.
 */
export const indexedCities: City[] = cities.filter((c) => hasLocalContent(c) && isPublishable(c))

/** Cities with the full enriched profile — used to flag depth in reporting. */
export const enrichedCities: City[] = indexedCities

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
 *
 * `responseBand` used to be part of this conjunction. It was removed on
 * 6 Sep 2026 because the fact it guarded no longer exists: the client had the
 * arrival-window claim withdrawn on 6 Aug and every `responseBand` was emptied
 * to match, which silently made every Tier 1 city unpublishable. The symptom
 * was `enrichedCities` evaluating to 0 and `npm run validate:cities` exiting
 * with 14 errors — one per Tier 1 city — so the guard that exists to stop thin
 * location pages shipping was itself failing, and would have rejected the
 * correct value of `publishedCities` below.
 *
 * If a real, measured arrival window is ever supplied, it belongs in the page
 * copy and the meta description. It does not belong back in this gate.
 */
export function isPublishable(city: City): boolean {
  if (city.tier === 3) return true
  return Boolean(
    city.localAngle &&
      city.localAngle.split(/\s+/).length >= 100 &&
      (city.neighborhoods?.length ?? 0) >= 3 &&
      (city.faqs?.length ?? 0) >= 1,
  )
}

/**
 * Does this city carry content that is true of this city and nowhere else?
 *
 * This is the test that decides whether a page is submitted for indexing, and
 * it is deliberately stricter than `isPublishable` — a Tier 3 city passes that
 * one by design, because a short honest page is a fine thing to serve someone
 * who followed a link. It is not a fine thing to submit to Google 176 times.
 *
 * Measured 6 Sep 2026: rendering `/gate-repair-azle-tx` and
 * `/gate-repair-anna-tx` and normalising the city and county names away leaves
 * 29 text blocks of which 5 differ, and all five differ only by county name and
 * the list of neighbouring-city chips. That is one page served 176 times, which
 * is the shape Google's scaled-content-abuse policy describes.
 */
export function hasLocalContent(city: City): boolean {
  return Boolean(city.localAngle)
}
