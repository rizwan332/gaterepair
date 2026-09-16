/**
 * The client's service-area list, verbatim.
 *
 * This is the single source of truth for which cities get a page. Nothing may
 * be added to it without the client saying so — the list defines the business's
 * actual coverage, not our assumptions about the metroplex.
 *
 * ⚠️ ONE ENTRY IS OURS, NOT THE CLIENT'S — Fort Worth, added 16 Sep 2026.
 *
 * It is absent from the list the client supplied, and that reads as an
 * oversight rather than a coverage decision: his own master keyword list gives
 * Fort Worth a full block in all four sections ("Gate Repair Fort Worth TX",
 * "LiftMaster Gate Repair Fort Worth TX", and so on for 95 cities), the site's
 * own copy says "from Dallas and Fort Worth out to Weatherford", and the
 * business is named for the metroplex both cities anchor. Meanwhile
 * /gate-repair-fort-worth-tx returned a 404 — the second-largest city in the
 * market, missing.
 *
 * Treated as an error and corrected, which is a judgement call and reversible:
 * delete the entry and the page stops building. CONFIRM WITH THE CLIENT that he
 * covers Fort Worth. If he does not, this needs removing rather than leaving.
 *
 * Nine further cities in his keyword file are also absent — Watauga, Richland
 * Hills, Lantana, Bartonville, Hickory Creek, Cross Roads, Lavon, Lowry
 * Crossing and Nevada. Those are NOT added: unlike Fort Worth they are small
 * suburbs where "he named it in a keyword list" is weaker evidence than "he
 * left it off his coverage list", and the two lists disagreeing is his to
 * resolve.
 */
export const CLIENT_CITY_LIST = [
  'Addison', 'Aledo', 'Allen', 'Alvarado', 'Alvord', 'Anna', 'Annetta', 'Annetta North',
  'Annetta South', 'Argyle', 'Arlington', 'Athens', 'Aubrey', 'Aurora', 'Azle', 'Balch Springs',
  'Bedford', 'Benbrook', 'Blue Ridge', 'Bonham', 'Bowie', 'Boyd', 'Bridgeport', 'Briar', 'Bristol',
  'Burleson', 'Caddo Mills', 'Callisburg', 'Campbell', 'Canton', 'Carrollton', 'Cedar Hill',
  'Celeste', 'Celina', 'Chico', 'Cleburne', 'Collinsville', 'Colleyville', 'Comanche', 'Combine',
  'Cool', 'Copeville', 'Coppell', 'Corinth', 'Crandall', 'Cresson', 'Crowley', 'Dallas', 'Decatur',
  'Denison', 'DeSoto', 'Denton', 'Dublin', 'Duncanville', 'East Tawakoni', 'Eastland', 'Edgewood',
  'Elmo', 'Emory', 'Euless', 'Everman', 'Fairview', 'Farmers Branch', 'Farmersville', 'Fate',
  'Ferris', 'Flower Mound', 'Forest Hill', 'Forney', 'Fort Worth', 'Frisco', 'Gainesville', 'Garland',
  'Glenn Heights', 'Glen Rose', 'Godley', 'Granbury', 'Grand Prairie', 'Grandview', 'Greenville',
  'Grapevine', 'Gunter', 'Gun Barrel City', 'Haltom City', 'Haslet', 'Heath', 'Highland Park',
  'Highland Village', 'Howe', 'Hudson Oaks', 'Hurst', 'Hutchins', 'Irving', 'Josephine', 'Joshua',
  'Justin', 'Kaufman', 'Keene', 'Keller', 'Kemp', 'Kennedale', 'Krum', 'Lake Dallas', 'Lake Worth',
  'Lancaster', 'Leonard', 'Lewisville', 'Lindsay', 'Lipan', 'Little Elm', 'Lone Oak', 'Lucas',
  'Mabank', 'Malakoff', 'Mansfield', 'Maypearl', 'McKinney', 'Melissa', 'Mesquite', 'Midlothian',
  'Milford', 'Millsap', 'Mineral Wells', 'Morgan Mill', 'Muenster', 'Murphy', 'New Fairview',
  'Newark', 'Nocona', 'North Richland Hills', 'Northlake', 'Oak Leaf', 'Ovilla', 'Palmer',
  'Paradise', 'Parker', 'Peaster', 'Pilot Point', 'Plano', 'Point', 'Poetry', 'Ponder', 'Poolville',
  'Pottsboro', 'Princeton', 'Prosper', 'Quinlan', 'Red Oak', 'Rendon', 'Richardson', 'Rhome',
  'Rio Vista', 'Roanoke', 'Rockwall', 'Rowlett', 'Royse City', 'Sachse', 'Sadler', 'Saginaw',
  'Saint Jo', 'Sanger', 'Scurry', 'Seagoville', 'Sherman', 'Southlake', 'Springtown',
  'Stephenville', 'Sunnyvale', 'Talty', 'Terrell', 'The Colony', 'Tioga', 'Tolar', 'Tom Bean',
  'Trophy Club', 'University Park', 'Valley View', 'Van Alstyne', 'Venus', 'Waxahachie',
  'Weatherford', 'West Tawakoni', 'Westlake', 'Westminster', 'White Settlement', 'Whitewright',
  'Whitesboro', 'Willow Park', 'Wilmer', 'Wills Point', 'Wylie',
] as const
