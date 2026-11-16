export interface NearbyAttraction {
  slug: string;
  name: string;
  subtitle: string;
  address: string;
  mapQuery: string;
  photo: string;
  photoSource: string;
  introduction: string;
  management: string;
  history: string;
  architecture: string;
  culture: string;
  highlights: string[];
  route: string[];
  tips: string[];
  photoTips: string;
  faq: { q: string; a: string }[];
}

// Place-specific destination guides. Search-based map URLs are intentionally
// distinct; a Google place ID has not been independently confirmed for each.
export const ATTRACTIONS: NearbyAttraction[] = [
  {
    slug: 'old-market-phsar-chas', name: 'Old Market (Phsar Chas)',
    subtitle: 'Traditional market and everyday commerce beside Pub Street',
    address: 'Phsar Chas, 2 Thnou Street, Krong Siem Reap, Cambodia',
    mapQuery: 'Old Market Phsar Chas 2 Thnou Street Siem Reap Cambodia',
    photo: '/gallery/old-market-phsar-chas.jpg',
    photoSource: 'https://www.mappytravel.com/things-to-do-in-siem-reap/',
    introduction: 'Phsar Chas is the traditional market at the edge of Siem Reap’s central visitor district. Its food, produce and household-goods aisles reveal a different rhythm from the music and restaurants of neighbouring Pub Street. Visit respectfully and allow local shoppers room to pass.',
    management: 'Old Market is a working local marketplace occupied by independent vendors. Market operations and public-street services are handled through local market and municipal arrangements; it is not operated by this independent travel guide. Individual stall hours and access arrangements can change, so check locally.',
    history: 'The name Phsar Chas means “Old Market”. The central trading area long served local residents before the surrounding streets developed into a major visitor quarter. Today traditional produce stalls coexist with souvenir and tourist-facing businesses.',
    architecture: 'Look at the market’s covered aisles, tightly packed stalls and practical roof structure designed to shade goods and shoppers. Unlike a ceremonial monument, its spatial character comes from everyday trade and small businesses.',
    culture: 'The market offers a glimpse of local food shopping: spices, fresh produce and ingredients used in Khmer cooking. Ask before photographing vendors or customers, and avoid blocking bargaining or deliveries.',
    highlights: ['Everyday produce and spice stalls', 'Covered market passages and vendor displays', 'Immediate access to Pub Street and the river quarter'],
    route: ['Start at the Old Market entrance on 2 Thnou Street.', 'Walk the central covered passages without obstructing traders.', 'Exit toward the riverfront for a calmer view.', 'Continue west to Street 08 and Pub Street.'],
    tips: ['The market is not a single ticketed attraction; purchases are separate.', 'Go earlier for active produce trading; check stall hours in person.', 'Carry small notes and ask permission before close-up photography.'],
    photoTips: 'Photograph the pattern of stalls and roof beams from the edge of an aisle, preferably in daylight. Avoid close-up portraits without consent.',
    faq: [
      { q: 'Is Phsar Chas the same as Pub Street?', a: 'No. Phsar Chas is a traditional market; Pub Street is the adjacent restaurant and nightlife strip on Street 08.' },
      { q: 'Is there an entrance fee?', a: 'The regular market can generally be browsed without an admission ticket; goods and services are paid for separately.' },
      { q: 'What is the best time to visit?', a: 'Daytime is more useful for seeing everyday produce trade, while the surrounding visitor quarter remains active later.' },
    ],
  },
  {
    slug: 'siem-reap-art-center-night-market', name: 'Siem Reap Art Center Night Market',
    subtitle: 'Arts, souvenirs and evening stalls across the river',
    address: 'East bank of Siem Reap River, opposite Old Market, Krong Siem Reap, Cambodia',
    mapQuery: 'Siem Reap Art Center Night Market Cambodia',
    photo: '/gallery/art-center-night-market.jpg',
    photoSource: 'https://ftripasia.com/siem-reap-night-market',
    introduction: 'On the east side of the Siem Reap River opposite the Old Market district, the Art Center Night Market offers a different evening pace from Pub Street: stalls, crafts, gifts and illuminated market lanes. Verify the current operating schedule before making a special journey.',
    management: 'This is a vendor-based market, with individual stalls and market operators responsible for their own trading activity. It is not managed by the Pub Street guide. For current stall availability, events, opening times or access arrangements, consult the market directly on arrival.',
    history: 'Siem Reap’s riverside night-market scene grew alongside the city’s visitor economy and local craft trade. Art Center’s focus on craft displays helps connect an evening shopping trip with the region’s broader culture of making and selling handmade goods.',
    architecture: 'Open-sided pavilions, small stalls and lighted walkways give the market its night-time character. The river crossing is part of the approach and makes the transition from the busy Old Market area especially memorable.',
    culture: 'Look for paintings, handicrafts and textiles, while distinguishing locally produced goods from mass-market souvenirs. Ask sellers about materials and makers; avoid assuming every item is handmade locally.',
    highlights: ['Illuminated market entrance and riverside setting', 'Art and souvenir stalls', 'Easy walking connection to Old Market'],
    route: ['Begin at Pub Street and walk east through the Old Market quarter.', 'Cross the Siem Reap River at a public bridge.', 'Explore the Art Center market lanes if open.', 'Return along the riverside, using well-lit crossings.'],
    tips: ['Browse first and compare quality and prices before buying.', 'Carry some cash for smaller stalls.', 'Market schedules vary with weather and local operations; verify on site.'],
    photoTips: 'The illuminated market sign and river reflections work well after dusk. Keep stall entrances clear and seek permission before photographing individual sellers.',
    faq: [
      { q: 'Where is the Art Center Night Market?', a: 'It is on the east bank of the Siem Reap River, opposite the Old Market area.' },
      { q: 'Can I walk there from Pub Street?', a: 'Yes. The Old Market and river crossings create a short central walking route; follow the map for the current entrance.' },
      { q: 'Does it have the same hours as Pub Street?', a: 'No. Market stalls have their own trading schedule, separate from the public street and neighbouring bars.' },
    ],
  },
  {
    slug: 'wat-preah-prom-rath', name: 'Wat Preah Prom Rath',
    subtitle: 'Buddhist temple architecture and living religious heritage',
    address: 'Mondul 1 Village, Svay Dangkum, Krong Siem Reap, Cambodia',
    mapQuery: 'Wat Preah Prom Rath Mondul 1 Siem Reap Cambodia',
    photo: '/gallery/wat-preah-prom-rath.jpg',
    photoSource: 'https://www.thepoortraveler.net/2012/12/preah-prom-rath-temple-and-pagoda-siem-reap-cambodia/',
    introduction: 'Wat Preah Prom Rath is an active Buddhist temple close to the river and Old Market district. Its decorated prayer halls and courtyards invite a slower, more respectful visit than the nearby nightlife streets. Religious activity takes priority over sightseeing.',
    management: 'Wat Preah Prom Rath is an active Buddhist pagoda overseen through its resident monastic community and religious arrangements, not by this tourism website. Cambodia’s APSARA National Authority has documented conservation work on historic wooden structures at the pagoda; that does not mean the authority operates the entire temple.',
    history: 'The pagoda is part of Siem Reap’s living Buddhist heritage. Its compound includes structures from different periods, illustrating continued religious use and repair rather than a single fixed construction date. APSARA National Authority documented restoration work on two wooden dormitories in 2022.',
    architecture: 'Notice the layered Khmer-style roofs, decorated gables, shrine buildings and courtyard monuments. Carved details and bright colour distinguish devotional spaces, while the historic wooden dormitories highlight a different, more domestic architectural tradition.',
    culture: 'This is a place of worship. Dress modestly, lower your voice, remove footwear when requested and never interrupt ceremonies or monks. Religious figures and images should be treated respectfully.',
    highlights: ['Ornate temple roofs and gables', 'Buddhist statues and devotional courtyards', 'Historic wooden buildings and living monastic setting'],
    route: ['Approach from the Old Market via the river quarter.', 'Pause at the entrance to read any posted visitor rules.', 'Walk the permitted courtyard paths and observe architectural details.', 'Return toward the river, then continue to Pub Street for dinner.'],
    tips: ['Temple access can be restricted during worship or ceremonies; check on site.', 'There is generally no standard sightseeing ticket for the grounds; donations may be welcomed.', 'Cover shoulders and knees, and ask before taking photographs of worshippers.'],
    photoTips: 'Daylight brings out the roof colours and carved surfaces. Compose wide courtyard views without entering prayer areas or disrupting ceremonies.',
    faq: [
      { q: 'Is Wat Preah Prom Rath a tourist attraction or a working temple?', a: 'It is a working Buddhist pagoda that visitors may be able to explore respectfully in permitted areas.' },
      { q: 'Who manages the temple?', a: 'Its religious community oversees temple activity. APSARA National Authority has separately reported conservation of particular historic buildings.' },
      { q: 'Can I photograph inside?', a: 'Follow posted rules and ask permission, especially around worshippers, ceremonies and indoor sacred spaces.' },
    ],
  },
];
