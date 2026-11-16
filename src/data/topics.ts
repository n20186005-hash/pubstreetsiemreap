// Long-tail topic pages for the English edition of the Pub Street Siem Reap guide.
// These pages cover broader Siem Reap after-dark intent (nightlife, dining, night
// markets, evening planning) and are kept separate from the Pub Street homepage so
// that each search query has a focused, non-competing landing page.

export interface TopicSection {
  title: string;
  text: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicVenue {
  name: string;
  area: string;
  knownFor: string;
}

export interface Topic {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  venues?: TopicVenue[];
  related: string[];
  mapQuery?: string;
}

export const TOPICS: Topic[] = [
  {
    slug: 'pub-street-siem-reap-location',
    title: 'Where Is Pub Street in Siem Reap?',
    metaTitle: 'Pub Street Siem Reap Location: Map, Street 08 & Walking Directions',
    metaDescription: 'Find Pub Street on Street 08 near Phsar Chas in central Siem Reap, with walking directions, arrival tips and a direct location map.',
    intro: 'Pub Street is a compact nightlife and restaurant area along Street 08 in central Siem Reap, a short walk from the Old Market (Phsar Chas). The street is a public thoroughfare, not a ticketed attraction. This location guide helps you arrive at the correct pedestrian block.',
    mapQuery: 'Pub Street Street 08 Krong Siem Reap Cambodia',
    sections: [
      { title: 'Address and landmark', text: 'Search for “Pub Street, Street 08, Krong Siem Reap, Cambodia”. The Old Market is a useful nearby landmark. Several streets in the Old Market quarter contain restaurants and bars, but Street 08 is the central Pub Street strip.' },
      { title: 'Walking from the Old Market', text: 'From Phsar Chas, follow the lively restaurant lanes toward Street 08. The short route is easiest on foot; narrow streets can be congested with tuk-tuks and delivery vehicles, especially in the evening. Use the map link above for your actual starting point.' },
      { title: 'Arriving from a hotel or Angkor temples', text: 'Ask your driver for Pub Street near the Old Market, or set the exact destination in a ride app. Angkor Wat is outside the city centre; do not plan to walk from the temple complex. Verify pickup locations with your driver before leaving a crowded area.' },
      { title: 'Best time to orient yourself', text: 'Early evening is convenient for a first walk, when restaurant signs are illuminated but the area is often less crowded than later. Individual shops, bars and restaurants set their own hours; the street itself does not have one shared opening time.' },
      { title: 'Visitor essentials', text: 'There is no admission fee to walk down Pub Street. Bring small cash for stalls, keep valuables secure and take care on uneven paving. For a quieter break, walk toward the river and Old Market side streets.' },
    ],
    faq: [
      { q: 'What street is Pub Street on?', a: 'The main Pub Street strip is on Street 08 in central Siem Reap, Cambodia.' },
      { q: 'Is Pub Street close to the Old Market?', a: 'Yes, Pub Street and Phsar Chas are in the same compact central district and are easy to combine on foot.' },
      { q: 'Do I need a ticket to visit Pub Street?', a: 'No. Walking along the public street is free; businesses charge separately for food, drinks and services.' },
      { q: 'Can a tuk-tuk take me directly there?', a: 'A tuk-tuk can drop you near the central block; access can be affected by evening crowds and traffic arrangements.' },
    ],
    related: ['siem-reap-nightlife', 'siem-reap-night-markets', 'pub-street-restaurants'],
  },
  {
    slug: 'pub-street-siem-reap-opening-hours',
    title: 'Pub Street Opening Hours and Best Time to Visit',
    metaTitle: 'Pub Street Siem Reap Opening Hours: Best Evening Time & Tips',
    metaDescription: 'When to visit Pub Street in Siem Reap: evening atmosphere, quieter hours, restaurant schedules, crowd considerations and practical tips.',
    intro: 'Pub Street is an open city street rather than a venue with one official ticket gate or fixed operating schedule. Restaurants, bars and stalls open independently, so the best time to go depends on whether you want dinner, photos or a lively night out.',
    mapQuery: 'Pub Street Siem Reap Cambodia',
    sections: [
      { title: 'When does Pub Street come alive?', text: 'Many visitors arrive in the early evening for dinner, when lights and signs become prominent. The atmosphere typically grows livelier later as bars fill. Timing changes with the season, weather and day of week, so treat any suggested hour as a planning estimate.' },
      { title: 'Quiet visit versus nightlife', text: 'For photos and a relaxed meal, consider arriving before the busiest late-evening period. For music and nightlife, come later, keeping in mind that sound levels vary substantially between venues and adjoining lanes.' },
      { title: 'Are restaurants and bars open every day?', text: 'Individual venues decide their opening hours and may close temporarily for holidays, renovations or private events. Check a specific business listing directly rather than relying on a single opening-hours claim for the whole street.' },
      { title: 'Weather and walking conditions', text: 'Rain can make walkways slippery and reduce outdoor seating. Carry a light rain layer in the wet season; breathable clothing and comfortable shoes are useful throughout the year.' },
      { title: 'An easy evening plan', text: 'Start near Phsar Chas, have dinner on or near Street 08, then browse the nearby night-market area or walk toward the river. Check each market’s current location and schedule before making a special trip.' },
    ],
    faq: [
      { q: 'Is Pub Street open 24 hours?', a: 'It is a public street without a unified entrance schedule, but that does not mean its restaurants, stalls and bars operate 24 hours.' },
      { q: 'What is the best time for families?', a: 'Early evening tends to be easier for families seeking dinner and a walk before the livelier bar atmosphere builds.' },
      { q: 'Is Pub Street busy every night?', a: 'Crowds vary by season, day of week, weather and local events. Weekends and peak travel periods can be busier.' },
      { q: 'Can I visit without drinking?', a: 'Yes. Pub Street also offers restaurants, snacks, people-watching and access to nearby walking areas.' },
    ],
    related: ['pub-street-siem-reap-location', 'things-to-do-in-siem-reap-at-night', 'pub-street-restaurants'],
  },
  {
    slug: 'pub-street-vs-night-market',
    title: 'Pub Street vs Siem Reap Night Markets',
    metaTitle: 'Pub Street vs Siem Reap Night Market: Where to Go Tonight?',
    metaDescription: 'Compare Pub Street bars and restaurants with Siem Reap night markets for shopping, food, family visits and an easy walking itinerary.',
    intro: 'Pub Street and the night markets are often mentioned together in search results, but they are different experiences. Pub Street is primarily a restaurant and nightlife district; night markets focus on browsing stalls and shopping. You can visit both in one evening without treating them as the same place.',
    mapQuery: 'Pub Street Siem Reap Cambodia',
    sections: [
      { title: 'Choose Pub Street for dinner and nightlife', text: 'Street 08 and surrounding lanes have illuminated restaurants, bars, music and cafés. A short stroll is free, while prices depend on where you choose to eat or drink. Early evening is usually more comfortable for travellers who prefer less noise.' },
      { title: 'Choose a night market for shopping', text: 'Night-market stalls can offer handicrafts, clothing, souvenirs and snacks. Different markets have different locations and trading schedules. Look up the specific market on a map before leaving, since market operators and venues can change.' },
      { title: 'A simple combined walking route', text: 'Begin around the Old Market quarter, walk along Pub Street for dinner and atmosphere, then continue toward the night-market area you have verified is operating. Finish with a quieter riverside walk if the weather is pleasant.' },
      { title: 'What about children and non-drinkers?', text: 'Both areas can suit a low-key evening. Markets provide browsing, while Pub Street has dining options as well as bars. Go earlier and take breaks off the loudest part of the strip.' },
      { title: 'Budget and payments', text: 'Both areas can be enjoyed without an entry ticket, but purchases cost extra. Carry small cash for stalls, compare displayed menus and agree a transport fare before boarding a tuk-tuk.' },
    ],
    faq: [
      { q: 'Is Pub Street itself a night market?', a: 'No. Pub Street is a nightlife and dining street; nearby night markets are separate groups of stalls and shops.' },
      { q: 'Can I visit both in one night?', a: 'Yes. Central Siem Reap is compact, and a Pub Street dinner can be combined with a nearby market after checking its current address and hours.' },
      { q: 'Which is better for souvenirs?', a: 'A night market is generally the stronger choice for souvenir browsing; Pub Street is more focused on food and nightlife.' },
      { q: 'Is there an entrance fee?', a: 'There is no fee to walk along Pub Street; market entry is generally free, with purchases paid separately. Check any ticketed events independently.' },
    ],
    related: ['siem-reap-night-markets', 'pub-street-restaurants', 'pub-street-siem-reap-location'],
  },
  {
    slug: 'siem-reap-nightlife',
    title: 'Siem Reap Nightlife Guide',
    metaTitle: 'Siem Reap Nightlife Guide 2026: Pub Street, Bars & Night Markets',
    metaDescription:
      'A practical 2026 guide to Siem Reap nightlife — Pub Street, riverside bars, night markets, live music and safe ways to get around after dark.',
    intro:
      'Siem Reap after dark centres on Pub Street and the Old Market (Phsar Chas) in the city centre, but the evening scene spreads to the riverside, the night markets and a handful of cultural shows. This guide explains the main areas, what to expect and how to get around so you can plan a relaxed evening.',
    sections: [
      {
        title: 'Pub Street and the Old Market core',
        text: 'The pedestrian block around Pub Street is the busiest, most energetic part of Siem Reap at night — strings of bars, restaurants and street food under lanterns and music. It is liveliest from about 18:00 to midnight, with the early evening calmer and more family-friendly. Most visitors start here because it is compact, free to walk and steps from the Old Market.',
      },
      {
        title: 'Riverside and quieter corners',
        text: 'A five-minute walk west brings you to the Siem Reap River promenade, where open-air bars and cafés are calmer than the Pub Street core. If you want music without the crowds, the streets just off the river and around Phsar Chas have smaller venues. The atmosphere is easy-going rather than party-focused.',
      },
      {
        title: 'Night markets',
        text: 'The Angkor Night Market (about a 5-minute walk from Pub Street) and the Made in Cambodia Market near the Old Market sell handicrafts, clothing and street food into the night. They are a good counterpoint to the bar scene if you prefer browsing and eating to drinking.',
      },
      {
        title: 'Live music and shows',
        text: 'Several Pub Street bars host live acoustic sets, and sports screens are common. For a non-bar evening, Phare, the Cambodian Circus performs most nights on the east side of town — a high-energy blend of theatre, dance and live music rooted in Cambodian stories.',
      },
      {
        title: 'Getting around at night',
        text: 'The centre is walkable, but for the ride back use a tuk-tuk or a ride app such as Grab or PassApp for transparent, tracked pricing. Agree tuk-tuk fares before boarding, keep normal awareness of belongings, and drink responsibly.',
      },
    ],
    faq: [
      {
        q: 'Is Pub Street the only nightlife in Siem Reap?',
        a: 'No. Pub Street is the main hub, but the riverside bars, the night markets, Phare the Cambodian Circus and smaller venues around Phsar Chas all give Siem Reap an after-dark scene beyond the one street.',
      },
      {
        q: 'What time does Siem Reap nightlife start and peak?',
        a: 'Restaurants and bars open through the evening; the streets fill from around 18:00 and peak roughly 20:00–24:00. The earliest part of the evening is the calmest and most family-friendly.',
      },
      {
        q: 'Is Siem Reap nightlife safe?',
        a: 'The central nightlife area is generally busy and well visited. Stay aware of belongings, use licensed tuk-tuks or tracked ride apps, and be cautious of unsolicited donation requests near the Old Market–Pub Street junction.',
      },
      {
        q: 'Are there things to do at night without drinking?',
        a: 'Yes — the night markets, a riverside walk, street food, and a show such as Phare the Cambodian Circus are all alcohol-free ways to spend an evening.',
      },
      {
        q: 'How do I get back to my hotel at night?',
        a: 'Walk if your hotel is central, or use a tuk-tuk / Grab / PassApp. Agree the fare first for tuk-tuks; ride apps show the price before you book.',
      },
      {
        q: 'What should I wear or bring in the evening?',
        a: 'Light, breathable clothing works year-round; bring a small amount of cash for stalls and tips, and a phone or power bank. Sidewalks can be uneven after dark, so practical shoes help.',
      },
    ],
    related: ['pub-street-restaurants', 'siem-reap-night-markets', 'things-to-do-in-siem-reap-at-night'],
  },
  {
    slug: 'pub-street-restaurants',
    title: 'Pub Street Restaurants & Food',
    metaTitle: 'Pub Street Restaurants Siem Reap: Where to Eat & Drink (2026)',
    metaDescription:
      'Where to eat and drink on Pub Street, Siem Reap — Khmer classics, BBQ, international food, happy-hour bars and tips for choosing by budget.',
    intro:
      'Pub Street is as much a dining street as a bar street. You will find Khmer curries, barbecue and noodles alongside Asian and international menus, often open-air and budget-friendly. Below is orientation on what to expect and how to choose, without steering you to any single business.',
    sections: [
      {
        title: 'What kind of food you will find',
        text: 'The lane and its side streets mix Khmer, Thai, Vietnamese, Indian and Western kitchens. Signature Cambodian dishes such as amok (curry steamed in banana leaf), Khmer BBQ and fried noodles are common, as are fruit shakes and desserts from small stalls.',
      },
      {
        title: 'Drinks and happy hour',
        text: 'Local beer, cocktails and fruit shakes are widely available, and many bars advertise happy-hour pricing. "Bucket" mixes are popular but strong — pace yourself. Free or cheap entry is normal; you only pay for what you order.',
      },
      {
        title: 'Long-running, well-known spots (orientation only)',
        text: 'A few venues have been around for years and are useful landmarks for finding your way around, not endorsements. Angkor What? Bar (opened 1998) and The Red Piano are among the original Pub Street names; Temple Club and Abacus are longer-standing bars nearby. For Khmer food, well-known casual kitchens include Khmer Kitchen and The Sugar Palm, while Chanrey Tree is a short tuk-tuk ride away for a more formal Khmer dinner. Always check current hours and reviews before visiting.',
      },
      {
        title: 'Eating on a budget vs a treat',
        text: 'Street stalls and small Khmer joints are cheap and filling; riverside and hotel restaurants cost more but are quieter. Scan public reviews and menus posted outside, then choose by budget and cuisine rather than following one name.',
      },
      {
        title: 'Practical tips',
        text: 'Cards are accepted at many bars and restaurants but small stalls prefer cash. Bottled water is safest; peel fruit yourself. If you have allergies or dietary needs, confirm ingredients in person.',
      },
    ],
    venues: [
      { name: 'Angkor What? Bar', area: 'Pub Street corner', knownFor: 'One of the original backpacker bars (since 1998)' },
      { name: 'The Red Piano', area: 'Pub Street corner', knownFor: 'Long-running bar-restaurant, a known landmark' },
      { name: 'Temple Club', area: 'Near Pub Street', knownFor: 'Multi-floor bar with live music' },
      { name: 'Abacus', area: 'Near Pub Street', knownFor: 'Long-standing cocktail bar' },
      { name: 'Khmer Kitchen', area: 'Old Market area', knownFor: 'Casual Khmer classics, popular with travellers' },
      { name: 'The Sugar Palm', area: 'Central Siem Reap', knownFor: 'Well-known Khmer restaurant' },
      { name: 'Chanrey Tree', area: 'Short tuk-tuk from centre', knownFor: 'Formal Khmer dining' },
    ],
    faq: [
      {
        q: 'Do I need a reservation on Pub Street?',
        a: 'Usually not — most places are walk-in. Reservations help for popular dinner spots or larger groups, especially on weekends.',
      },
      {
        q: 'Is food on Pub Street expensive?',
        a: 'It ranges widely. Street stalls and small Khmer kitchens are cheap; riverside and hotel restaurants cost more. Menus are usually posted outside so you can compare.',
      },
      {
        q: 'Are there vegetarian or vegan options?',
        a: 'Yes. Khmer curries, stir-fries and noodles can be made vegetarian, and many menus mark plant-based dishes. Confirm with staff, as fish sauce is common in Cambodian cooking.',
      },
      {
        q: 'What Khmer dishes should I try?',
        a: 'Amok (curry steamed in banana leaf), Khmer BBQ, nom banh chok (fermented rice noodles) and fried noodles are good starting points, along with fresh fruit shakes.',
      },
      {
        q: 'Is the tap water safe to drink?',
        a: 'Stick to bottled or filtered water and sealed drinks. Avoid ice if you are unsure of the source, and peel fruit yourself.',
      },
      {
        q: 'Are there places to eat with families?',
        a: 'Yes. Early evening is calmest, and most restaurants welcome families. The louder bar energy builds later at night.',
      },
    ],
    related: ['siem-reap-nightlife', 'siem-reap-night-markets', 'things-to-do-in-siem-reap-at-night'],
  },
  {
    slug: 'siem-reap-night-markets',
    title: 'Siem Reap Night Markets',
    metaTitle: 'Siem Reap Night Markets 2026: Angkor, Old Market & Riverside',
    metaDescription:
      'A guide to Siem Reap night markets — the Angkor Night Market, Made in Cambodia Market and Phsar Chas stalls: what to buy, prices and how to get there.',
    intro:
      'Night markets are a big part of an evening in Siem Reap. The two best known are the Angkor Night Market and the Made in Cambodia Market near the Old Market; smaller stalls cluster around Phsar Chas. They are good for handicrafts, clothing, souvenirs and street food.',
    sections: [
      {
        title: 'Angkor Night Market',
        text: 'About a 5-minute walk from Pub Street, the Angkor Night Market is the largest and most tourist-focused: rows of stalls selling silk, silver, handicrafts, lamps, clothing and souvenirs, plus food and drink. It opens in the evening and stays busy until late.',
      },
      {
        title: 'Made in Cambodia Market (Old Market)',
        text: 'Set near Phsar Chas, this market emphasises locally made goods and social-enterprise stalls — textiles, jewellery, homeware and gifts — with clear pricing. It is a calmer alternative to the bigger market and good for gifts with a local story.',
      },
      {
        title: 'Phsar Chas and street stalls',
        text: 'The Old Market itself winds down, but the surrounding lanes fill with smaller stalls selling snacks, drinks, knock-off wear and souvenirs. It is the most local-feeling of the evening shopping spots.',
      },
      {
        title: 'What to buy and typical prices',
        text: 'Common buys are silk scarves, cotton clothing, silver jewellery, lacquerware, lamps and Cambodian pepper. Prices vary by stall and quality; small items start cheap while handmade textiles cost more. There is no fixed price, so comparing a few stalls helps.',
      },
      {
        title: 'Bargaining and payment',
        text: 'Polite bargaining is normal at night markets, but keep it friendly. Cash is easiest; some larger stalls take cards. Carry small bills and agree the price before handing over money.',
      },
    ],
    faq: [
      {
        q: 'What are the night market opening hours?',
        a: 'Most Siem Reap night markets open around sunset (roughly 16:00–17:00) and run into the late evening, with the Angkor Night Market staying busy closest to midnight.',
      },
      {
        q: 'Which night market is best for souvenirs?',
        a: 'The Angkor Night Market has the widest choice; the Made in Cambodia Market is best for locally made, fairly priced gifts. Phsar Chas stalls feel the most local.',
      },
      {
        q: 'Can I pay by card at the night markets?',
        a: 'Some larger stalls take cards, but cash is simplest and expected at most. Carry small bills and bargain politely.',
      },
      {
        q: 'Is it safe to shop at the night markets?',
        a: 'The markets are busy, central and generally safe. Keep an eye on your bag, agree prices clearly, and use licensed transport for the ride back.',
      },
      {
        q: 'How far are the night markets from Pub Street?',
        a: 'The Angkor Night Market is about a 5-minute walk from Pub Street; the Made in Cambodia Market and Phsar Chas stalls are right by the Old Market, a minute or two away.',
      },
    ],
    related: ['siem-reap-nightlife', 'pub-street-restaurants', 'things-to-do-in-siem-reap-at-night'],
  },
  {
    slug: 'things-to-do-in-siem-reap-at-night',
    title: 'Things to Do in Siem Reap at Night',
    metaTitle: 'Things to Do in Siem Reap at Night: Routes, Shows & River Walks',
    metaDescription:
      'Plan a full evening in Siem Reap after dark — night routes, cultural shows like Phare, river walks, night markets and temple-light views.',
    intro:
      'An evening in Siem Reap can be more than one street. Combine a sunset at the Old Market, dinner on Pub Street, a night market and a riverside walk, or swap the bars for a cultural show. Below are routes and ideas for different moods.',
    sections: [
      {
        title: 'A classic first-night route',
        text: 'Around 17:30 browse the Old Market (Phsar Chas) and catch the sunset; at 18:30 step into Pub Street for a Khmer or BBQ dinner; by 20:00 enjoy a street shake and live music; then walk to the riverside or the Angkor Night Market to wind down. The whole loop is walkable.',
      },
      {
        title: 'Cultural shows',
        text: 'Phare, the Cambodian Circus performs most nights on the east side of town — theatre, dance and live music built on Cambodian stories, suitable for all ages. Some restaurants also stage Apsara dance performances; check schedules and book ahead.',
      },
      {
        title: 'River and temple evening',
        text: 'The Siem Reap River promenade is calm after dark and good for a post-dinner walk. Note that Angkor Wat and the temple complexes close at night, so an "evening temple" plan means viewing them by day and enjoying the town after sunset.',
      },
      {
        title: 'For non-drinkers and families',
        text: 'Markets, street food, a riverside stroll and a show give a full evening without bars. The early part of the night (before about 21:00) is the calmest and most family-friendly around Pub Street.',
      },
      {
        title: 'Late-night options',
        text: 'If you want to stay out, Pub Street bars and a few clubs run past midnight. Use tracked ride apps or agreed tuk-tuk fares for the trip back, and keep normal travel caution.',
      },
    ],
    faq: [
      {
        q: 'What is there to do in Siem Reap at night besides Pub Street?',
        a: 'The night markets, a riverside walk, street food, Phare the Cambodian Circus and smaller bars around Phsar Chas all give you an evening out beyond Pub Street itself.',
      },
      {
        q: 'Are temples like Angkor Wat open at night?',
        a: 'No — Angkor Wat and the temple complexes close at night. Plan temples during the day and save the town, markets and river for the evening.',
      },
      {
        q: 'Is Phare the Cambodian Circus worth it?',
        a: 'It is one of Siem Reap’s most recommended evening activities — a high-energy show with live music and a social mission. Book ahead as shows can sell out.',
      },
      {
        q: 'What time should I start an evening out?',
        a: 'Around 17:30–18:00 works well: browse the Old Market at sunset, eat as the street lights up, then explore markets and the river as the night builds.',
      },
      {
        q: 'Is Siem Reap safe to walk at night?',
        a: 'The central area is busy and generally safe to walk. Stay on lit streets, watch your belongings, and use licensed tuk-tuks or ride apps for longer trips back.',
      },
    ],
    related: ['siem-reap-nightlife', 'pub-street-restaurants', 'siem-reap-night-markets'],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
