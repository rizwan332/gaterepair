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
