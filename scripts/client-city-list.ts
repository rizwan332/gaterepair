/**
 * The client's service-area list, verbatim.
 *
 * This is the single source of truth for which cities get a page. Nothing may
 * be added to it without the client saying so — the list defines the business's
 * actual coverage, not our assumptions about the metroplex.
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
  'Ferris', 'Flower Mound', 'Forest Hill', 'Forney', 'Frisco', 'Gainesville', 'Garland',
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
