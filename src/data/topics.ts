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
}

export const TOPICS: Topic[] = [
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
