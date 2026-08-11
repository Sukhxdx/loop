export type ContentKind = "place" | "bite" | "person" | "happening" | "circle";

type BaseItem = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  weight: 1 | 2 | 3 | 4;
  imageQuery: string;
  image: string;
  /** Short factual blurb shown in detail */
  blurb: string;
  /** Real-world address when known */
  address?: string;
  /** Opening hours when known */
  hours?: string;
  /** Menu highlights / what to order / practical facts */
  highlights?: string[];
};

export type PlaceItem = BaseItem & {
  kind: "place";
  neighborhood: string;
  category: string;
};

export type BiteItem = BaseItem & {
  kind: "bite";
  cuisine: string;
  priceLevel: 1 | 2 | 3 | 4;
};

export type PersonItem = BaseItem & {
  kind: "person";
  username: string;
  mutuals: number;
  bio?: string;
  followers?: number;
  following?: number;
};

export type HappeningItem = BaseItem & {
  kind: "happening";
  date: string;
  venue: string;
};

export type CircleItem = BaseItem & {
  kind: "circle";
  memberAvatars: string[];
  topic: string;
};

export type ContentItem =
  | PlaceItem
  | BiteItem
  | PersonItem
  | HappeningItem
  | CircleItem;

/** Local files under /public/images — real Pune / dish photos from Wikimedia Commons */
const local = (file: string) => `/images/${file}`;

/** Fallback Unsplash only when no Commons shot is available */
const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=800&q=70`;

export const content: ContentItem[] = [
  // ── Places ──────────────────────────────────────────────
  {
    id: "place-1",
    kind: "place",
    title: "Pagdandi Bookstore & Coffee",
    subtitle: "Independent books, adrak chai, homemade cakes",
    tag: "5.2 KM",
    weight: 4,
    imageQuery: "bookstore,cafe,interior",
    image: photo("1521587760476-6c12a4b040da"),
    neighborhood: "Baner",
    category: "Bookstore · Cafe",
    address: "Shop 6 & 9, Regent Plaza, Baner–Pashan Link Road, Baner, Pune 411045",
    hours: "Tue–Sun · 10:30 AM – 8:30 PM (closed Mon)",
    blurb:
      "Founded in 2013 by Neha and Vishal — a Baner landmark for independent publishers, organic Assam chai, specialty coffee, and community readings. Vegetarian cafe; ~₹500 for two.",
    highlights: [
      "Adrak / Elaichi chai (organic Assam CTC)",
      "Specialty filter coffee & pour-overs",
      "Wholesome sandwiches · spinach corn, chutney cheese",
      "Homemade brownies & cakes",
      "Book launches & poetry nights on the calendar",
    ],
  },
  {
    id: "place-2",
    kind: "place",
    title: "Osho Teerth Park",
    subtitle: "12-acre Zen garden behind the ashram",
    tag: "1.2 KM",
    weight: 1,
    imageQuery: "park,garden,path",
    image: local("osho-teerth.jpg"),
    neighborhood: "Koregaon Park",
    category: "Park · Zen garden",
    address: "D. H. Dhunjibhoy Road, between Lane 2 & 3, Koregaon Park, Pune 411001",
    hours: "Morning 6–9 AM · Evening 3–6 PM · Free entry",
    blurb:
      "Also called Nulla Park — a former wasteland remade in 1989 into a Japanese-style Zen landscape with bridges, rocks, and quiet paths. Maintained by the Osho Ashram foundation.",
    highlights: [
      "Free public entry",
      "Best light: early morning or late afternoon",
      "Near German Bakery & Osho International Meditation Resort",
      "No loud music / keep it quiet",
    ],
  },
  {
    id: "place-3",
    kind: "place",
    title: "FC Road",
    subtitle: "Fergusson College Road — Pune’s student food spine",
    tag: "2.4 KM",
    weight: 2,
    imageQuery: "street,food,night",
    image: local("fc-road.jpg"),
    neighborhood: "Deccan Gymkhana",
    category: "Street · Food stretch",
    address: "Fergusson College Road, Deccan Gymkhana, Pune 411004",
    hours: "Most cafes ~9 AM – midnight",
    blurb:
      "The classic college-road strip: Cafe Durga, Vaishali, Wadeshwar, Shabree (Hotel Parichay), and late milkshake runs. Peak chaos after 7 PM.",
    highlights: [
      "Cafe Durga — cold coffee & vada pav",
      "Vaishali — South Indian (expect a wait)",
      "Shabree — Maharashtrian thali inside Hotel Parichay",
      "Best on foot; limited parking",
    ],
  },
  {
    id: "place-4",
    kind: "place",
    title: "Phoenix Marketcity",
    subtitle: "Cinema, dessert runs, late retail",
    tag: "4.1 KM",
    weight: 1,
    imageQuery: "shopping,mall",
    image: local("phoenix-marketcity.jpg"),
    neighborhood: "Viman Nagar",
    category: "Mall",
    address: "Viman Nagar Rd, Clover Park, Viman Nagar, Pune 411014",
    hours: "Daily · typically 11 AM – 11 PM (screens later on weekends)",
    blurb:
      "Pune’s big Viman Nagar mall — multiplex, food court, and the default post-movie dessert stop for the east side of the city.",
    highlights: [
      "PVR / multiplex screens",
      "Food court + high-street brands",
      "Easy from airport / Nagar Road",
    ],
  },
  {
    id: "place-5",
    kind: "place",
    title: "Baner Hill",
    subtitle: "Ridge walks and city lights over Pashan",
    tag: "5.8 KM",
    weight: 3,
    imageQuery: "hill,sunset,viewpoint",
    image: local("baner-hill.jpg"),
    neighborhood: "Baner",
    category: "Viewpoint · Trail",
    address: "Baner Hill / Pashan–Baner ridge, Pune",
    hours: "Daylight best · sunset crowds on weekends",
    blurb:
      "The rocky ridge above Baner–Pashan — evening walks, kite weather, and the widest free view of west Pune. Carry water; trails can be uneven.",
    highlights: [
      "Sunset is the main draw",
      "Combine with Baner Gaothan cafes after",
      "Wear shoes with grip after rain",
    ],
  },
  {
    id: "place-6",
    kind: "place",
    title: "Blue Tokai — Koregaon Park",
    subtitle: "Indian single-origin, roasted in-house",
    tag: "0.9 KM",
    weight: 1,
    imageQuery: "coffee,cafe,cup",
    image: local("blue-tokai.jpg"),
    neighborhood: "Koregaon Park",
    category: "Specialty coffee",
    address:
      "Sr No 31/2, PN 334/335, Ashok Chakra Society, Lane 5, Kavadewadi, Koregaon Park, Pune 411001 (opp. Canara Bank)",
    hours: "Daily · opens ~7:00 AM",
    blurb:
      "India’s specialty chain with transparent farm sourcing. KP cafe does pour-overs, espresso drinks, and retail bags of Indian Arabica.",
    highlights: [
      "Pour-over / Aeropress / espresso menu",
      "Retail single-origin bags",
      "Other Pune cafes: Kalyani Nagar, Magarpatta, Kharadi",
    ],
  },

  // ── Bites ───────────────────────────────────────────────
  {
    id: "bite-1",
    kind: "bite",
    title: "Misal at Bedekar Tea Stall",
    subtitle: "Puneri misal since the 1950s — Narayan Peth",
    tag: "₹120–180",
    weight: 2,
    imageQuery: "misal,spicy,curry",
    image: local("misal-pav.jpg"),
    cuisine: "Maharashtrian",
    priceLevel: 1,
    address: "Narayan Peth (near Narayan Peth Police Station area), Pune",
    hours: "Misal typically through lunch; tea & farsan longer",
    blurb:
      "Family-run since 1948 (tea stall start). Damodar “Anna” Bedekar made Puneri misal the house legend — secret spice mix, still personal service. Pandit Hariprasad Chaurasia once wrote: “Aapke misal ka misaal nahin.”",
    highlights: [
      "Puneri Misal Pav (the order)",
      "Kat / tarri heat levels — ask mild if unsure",
      "Namkeen & pakoras on the side",
      "Cash-friendly, quick turnover, expect a short wait",
    ],
  },
  {
    id: "bite-2",
    kind: "bite",
    title: "Arthur's Theme",
    subtitle: "European classics in Koregaon Park Lane 6",
    tag: "₹1,500 for two",
    weight: 4,
    imageQuery: "european,pasta,seafood",
    image: local("pasta-plate.jpg"),
    cuisine: "European · Italian",
    priceLevel: 4,
    address: "Shop 2, Lane 6, Vrindavan Apartment, off North Main Road, Koregaon Park, Pune",
    hours: "Daily · ~11:30 AM – 12:30 AM",
    blurb:
      "KP institution for continental / European cooking — not a sushi bar. Regulars swear by lemon soufflé, cheese croquettes, sautéed mushrooms, and calamari. ~₹1,500 for two.",
    highlights: [
      "Lemon soufflé (signature dessert)",
      "Cheese croquettes",
      "Sautéed mushrooms",
      "Calamari · pastas · pizzas",
      "Full bar menu",
    ],
  },
  {
    id: "bite-3",
    kind: "bite",
    title: "Cafe Durga — FC Road",
    subtitle: "Cold coffee, vada pav, college-katta classic",
    tag: "₹40–120",
    weight: 1,
    imageQuery: "vadapav,streetfood,india",
    image: local("vada-pav.jpg"),
    cuisine: "Cafe · Maharashtrian snacks",
    priceLevel: 1,
    address:
      "Shop 4 & 7, Shanti Plaza, FC Road, behind Rupali, Deccan Gymkhana, Pune 411004",
    hours: "Daily · ~9:00 AM – 12:00 AM",
    blurb:
      "Started 2003; now 20+ Pune outlets. FC Road branch is the student default for cold coffee and quick plates. Official menu mixes traditional snacks with shakes.",
    highlights: [
      "Cold coffee / thick cold coffee / Oreo shake",
      "Vada pav · Masala pav · Misal pav",
      "Pohe · Upma · Pav bhaji",
      "Egg bhurji · sandwiches · Maggi",
    ],
  },
  {
    id: "bite-4",
    kind: "bite",
    title: "Le Plaisir Patisserie & Bistro",
    subtitle: "Brunch, crepes, open kitchen on Prabhat Road",
    tag: "₹900–1,300 for two",
    weight: 1,
    imageQuery: "pastry,brunch,cafe",
    image: local("croissant.jpg"),
    cuisine: "European · Patisserie",
    priceLevel: 3,
    address:
      "759/125, Rajkamal, Opp. Kelkar Eye Hospital / Cox & Kings, Prabhat Road, Deccan Gymkhana, Pune 411004",
    hours: "Daily · ~9:00 AM – 11:00 PM",
    blurb:
      "Chef-led European bistro-patisserie — all-day breakfast, salads, burgers, pasta, macarons, and cheesecakes. Open kitchen; long-time Pune brunch favourite.",
    highlights: [
      "All-day breakfast plates",
      "Crepes · macarons · blueberry cheesecake",
      "Espresso panna cotta (often recommended)",
      "Sandwiches, salads, pasta, burgers",
    ],
  },
  {
    id: "bite-5",
    kind: "bite",
    title: "Shabree — Hotel Parichay",
    subtitle: "Unlimited-feeling Maharashtrian thali on FC Road",
    tag: "₹400–600",
    weight: 3,
    imageQuery: "thali,indian,food",
    image: local("maharashtrian-thali.jpg"),
    cuisine: "Maharashtrian",
    priceLevel: 2,
    address: "1199/1 A, Hotel Parichay, Fergusson College Road, Deccan Gymkhana, Pune",
    hours: "Lunch & dinner seatings · expect a queue",
    blurb:
      "Pure-veg Maharashtrian thali institution inside Hotel Parichay. Daily-changing veg spreads; Konkan / Vidarbha platters appear as specials. Line forms early.",
    highlights: [
      "Thali: usal, bhakri, varan, koshimbir, sol kadhi",
      "Puran poli · shrikhand to finish",
      "Pithla–bhakri · masala bhaat · tupacha varan",
      "Breakfast: misal pav, thalipeeth · upwas thalis on fasting days",
    ],
  },
  {
    id: "bite-6",
    kind: "bite",
    title: "Natural Ice Cream",
    subtitle: "Fruit-first scoops — Alphonso when in season",
    tag: "₹80–150",
    weight: 1,
    imageQuery: "gelato,icecream,dessert",
    image: local("fruit-icecream.jpg"),
    cuisine: "Ice cream",
    priceLevel: 1,
    address: "Multiple Pune counters (JM Road, Viman Nagar, and more)",
    hours: "Typically ~9:30 AM – 11:30 PM",
    blurb:
      "Mumbai-born Natural Ice Cream — fruit pulps, not syrups. Sit-down parlours across Pune; mango (Alphonso) sells out in season.",
    highlights: [
      "Mango / Alphonso (seasonal)",
      "Tender coconut · Jackfruit · Chickoo",
      "Sitaphal · Anjeer · Kesar pista",
      "Fruit shakes on the same board",
    ],
  },

  // ── People (unchanged fictional locals) ─────────────────
  {
    id: "person-1",
    kind: "person",
    title: "Ananya Deshmukh",
    subtitle: "Photographer · KP nights",
    tag: "12 MUTUAL",
    weight: 2,
    imageQuery: "portrait,woman,photographer",
    image: photo("1494790108377-be9c29b29330"),
    username: "@ananya.frames",
    mutuals: 12,
    bio: "Shooting Pune after dark — Osho Teerth paths, FC Road neon, Baner ridge sunsets.",
    followers: 1840,
    following: 312,
    blurb: "Local photographer covering Pune nightlife and quiet corners.",
  },
  {
    id: "person-2",
    kind: "person",
    title: "Rohan Kulkarni",
    subtitle: "Runner · Baner trails",
    tag: "4 MUTUAL",
    weight: 1,
    imageQuery: "portrait,man,runner",
    image: photo("1507003211169-0a1dd7228f2d"),
    username: "@rohan.runs",
    mutuals: 4,
    bio: "Sunrise loops on Baner Hill. Pace over PR.",
    followers: 620,
    following: 190,
    blurb: "Baner-based runner; weekend long runs toward Mulshi road.",
  },
  {
    id: "person-3",
    kind: "person",
    title: "Meera Joshi",
    subtitle: "Chef · pop-up dinners",
    tag: "28 MUTUAL",
    weight: 4,
    imageQuery: "portrait,woman,chef",
    image: photo("1438761681033-6461ffad8d80"),
    username: "@meeracooks",
    mutuals: 28,
    bio: "Seasonal menus across Kalyani Nagar kitchens. DM for the next seat.",
    followers: 5200,
    following: 410,
    blurb: "Hosts seasonal pop-ups with Maharashtrian and coastal plates.",
  },
  {
    id: "person-4",
    kind: "person",
    title: "Arjun Shah",
    subtitle: "Vinyl · Deccan hangouts",
    tag: "7 MUTUAL",
    weight: 1,
    imageQuery: "portrait,man,music",
    image: photo("1500648767791-00dcc994a43e"),
    username: "@arjun.spins",
    mutuals: 7,
    bio: "Collecting obscure Marathi jazz. Open crate nights on weekends.",
    followers: 980,
    following: 540,
    blurb: "Deccan crate-digger; posts listen-night invites on weekends.",
  },
  {
    id: "person-5",
    kind: "person",
    title: "Priya Nair",
    subtitle: "Design · Viman Nagar",
    tag: "15 MUTUAL",
    weight: 1,
    imageQuery: "portrait,woman,designer",
    image: photo("1544005313-94ddf0286df2"),
    username: "@priya.marks",
    mutuals: 15,
    bio: "Product design by day, sketch walks by evening.",
    followers: 2100,
    following: 280,
    blurb: "Designs for local startups; sketch walks around Viman Nagar.",
  },
  {
    id: "person-6",
    kind: "person",
    title: "Kabir Patil",
    subtitle: "Cycling · Mulshi Sundays",
    tag: "9 MUTUAL",
    weight: 1,
    imageQuery: "portrait,man,cyclist",
    image: photo("1506794778202-cad84cf45f1d"),
    username: "@kabir.rides",
    mutuals: 9,
    bio: "Long rides out of Baner. Coffee stop non-negotiable.",
    followers: 740,
    following: 220,
    blurb: "Road-bike Sundays Baner → Mulshi; Blue Tokai or Pagdandi after.",
  },

  // ── Happenings ──────────────────────────────────────────
  {
    id: "happening-1",
    kind: "happening",
    title: "Indie Night at Hard Rock Cafe",
    subtitle: "Local bands, open floor",
    tag: "SAT · 8PM",
    weight: 4,
    imageQuery: "concert,band,stage",
    image: photo("1470229722913-7c0e2dbbafd3"),
    date: "Sat · 8:00 PM",
    venue: "Hard Rock Cafe, Bund Garden Road, Pune",
    blurb:
      "Bund Garden Hard Rock regularly hosts Pune indie and cover nights — check their events calendar for the week’s lineup and entry cover.",
    highlights: ["Entry cover varies by night", "Arrive early for floor space", "21+ for bar"],
  },
  {
    id: "happening-2",
    kind: "happening",
    title: "Baner Farmers / Sunday Market",
    subtitle: "Produce, pottery, pour-overs",
    tag: "SUN · 9AM",
    weight: 2,
    imageQuery: "farmers,market,produce",
    image: photo("1488459716781-31db52582fe9"),
    date: "Sun · 9:00 AM",
    venue: "Baner Gaothan / community grounds (check that week’s pin)",
    blurb:
      "Rotating Baner weekend markets — seasonal veg, baked goods, and craft stalls. Locations shift; follow local Baner community boards for the pin.",
    highlights: ["Cash + UPI", "Best before 11 AM for produce", "Pair with Baner Hill after"],
  },
  {
    id: "happening-3",
    kind: "happening",
    title: "Poetry Open Mic",
    subtitle: "Mic + chai — bring a page",
    tag: "FRI · 7PM",
    weight: 1,
    imageQuery: "poetry,microphone,cafe",
    image: photo("1511671782779-c97d3d27a1d4"),
    date: "Fri · 7:00 PM",
    venue: "Pagdandi Bookstore & Coffee, Baner (when scheduled)",
    blurb:
      "Pagdandi and other Baner/Deccan cafes host open mics and readings — confirm on pagdandi.org or their Instagram for the next slot.",
    highlights: ["Sign-up at the door", "5-minute slots typical", "Vegetarian cafe bites available"],
  },
  {
    id: "happening-4",
    kind: "happening",
    title: "Sunrise stretch — Osho Teerth",
    subtitle: "Mats optional, quiet only",
    tag: "SAT · 6AM",
    weight: 1,
    imageQuery: "yoga,sunrise,park",
    image: photo("1544367567-0f2fcb009e0b"),
    date: "Sat · 6:00 AM",
    venue: "Osho Teerth Park, Koregaon Park",
    blurb:
      "Informal morning groups use the park’s open lawns during the 6–9 AM public window. Keep volume down — it’s a quiet garden.",
    highlights: ["Park opens 6 AM", "No formal ticket", "Leave before 9 AM closing"],
  },
  {
    id: "happening-5",
    kind: "happening",
    title: "Film Club: Satyajit Ray",
    subtitle: "Double bill + discussion",
    tag: "THU · 6:30PM",
    weight: 3,
    imageQuery: "cinema,film,theater",
    image: photo("1489599849927-2ee91cede3ba"),
    date: "Thu · 6:30 PM",
    venue: "Alliance Française de Pune, Bund Garden / Prabhat Road area",
    blurb:
      "Alliance Française Pune programmes classic and world cinema with discussions — Ray retrospectives rotate through the year. Members and walk-ins depending on the screening.",
    highlights: ["Check afpune.org for listings", "Subtitles usually English/French", "Arrive 15 min early"],
  },
  {
    id: "happening-6",
    kind: "happening",
    title: "Board Game Night",
    subtitle: "Tables for 4–6, RSVP",
    tag: "WED · 7PM",
    weight: 1,
    imageQuery: "boardgame,friends,table",
    image: photo("1529699211952-734e80c4d42b"),
    date: "Wed · 7:00 PM",
    venue: "Cafe board-game nights across Viman Nagar / Baner (rotating)",
    blurb:
      "Pune’s board-game cafes and hobby clubs run midweek tables — RSVP on Instagram hobby boards for seat count.",
    highlights: ["RSVP required for table size", "Cover or minimum order varies", "Bring a game if you want"],
  },

  // ── Circles ─────────────────────────────────────────────
  {
    id: "circle-1",
    kind: "circle",
    title: "Pune Night Walkers",
    subtitle: "After-dark city routes",
    tag: "128 MEMBERS",
    weight: 3,
    imageQuery: "friends,group,hangout",
    image: photo("1529156069898-49953e39b3ac"),
    memberAvatars: [
      photo("1494790108377-be9c29b29330"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1544005313-94ddf0286df2"),
      photo("1500648767791-00dcc994a43e"),
    ],
    topic: "Urban walks",
    blurb: "KP → Bund Garden evening walks; meet pins drop on Fridays.",
  },
  {
    id: "circle-2",
    kind: "circle",
    title: "KP Coffee Club",
    subtitle: "Single origin swaps",
    tag: "64 MEMBERS",
    weight: 1,
    imageQuery: "coffee,friends,cafe",
    image: local("blue-tokai.jpg"),
    memberAvatars: [
      photo("1438761681033-6461ffad8d80"),
      photo("1506794778202-cad84cf45f1d"),
      photo("1494790108377-be9c29b29330"),
    ],
    topic: "Coffee",
    blurb: "Cupping nights rotating Blue Tokai KP and home roasts.",
  },
  {
    id: "circle-3",
    kind: "circle",
    title: "Deccan Vinyl Collective",
    subtitle: "Crate digs + listen nights",
    tag: "92 MEMBERS",
    weight: 2,
    imageQuery: "vinyl,records,music",
    image: photo("1519677100203-a0e668c92439"),
    memberAvatars: [
      photo("1500648767791-00dcc994a43e"),
      photo("1544005313-94ddf0286df2"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1438761681033-6461ffad8d80"),
    ],
    topic: "Music",
    blurb: "JM Road / Deccan digs; Sunday listen rooms.",
  },
  {
    id: "circle-4",
    kind: "circle",
    title: "Baner Run Crew",
    subtitle: "Tue/Thu tempo, Sun long",
    tag: "210 MEMBERS",
    weight: 4,
    imageQuery: "running,group,friends",
    image: photo("1476480862126-209bfaa8edc8"),
    memberAvatars: [
      photo("1506794778202-cad84cf45f1d"),
      photo("1494790108377-be9c29b29330"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1544005313-94ddf0286df2"),
    ],
    topic: "Running",
    blurb: "Meet Baner Gaothan; Sunday long toward Mulshi road.",
  },
  {
    id: "circle-5",
    kind: "circle",
    title: "Kalyani Design Circle",
    subtitle: "Critique + coffee weekly",
    tag: "45 MEMBERS",
    weight: 1,
    imageQuery: "design,sketch,friends",
    image: photo("1581291518633-83b4ebd1d83e"),
    memberAvatars: [
      photo("1544005313-94ddf0286df2"),
      photo("1438761681033-6461ffad8d80"),
      photo("1500648767791-00dcc994a43e"),
    ],
    topic: "Design",
    blurb: "Portfolio crits over Blue Tokai Kalyani Nagar.",
  },
  {
    id: "circle-6",
    kind: "circle",
    title: "Mulshi Weekend Riders",
    subtitle: "Road bikes out of Baner",
    tag: "76 MEMBERS",
    weight: 1,
    imageQuery: "cycling,bikes,group",
    image: photo("1541625602330-2277a4c46182"),
    memberAvatars: [
      photo("1506794778202-cad84cf45f1d"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1494790108377-be9c29b29330"),
      photo("1500648767791-00dcc994a43e"),
    ],
    topic: "Cycling",
    blurb: "Saturday roll-outs Baner → Mulshi; coffee compulsory.",
  },
];

export function weightStats(items: ContentItem[] = content) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
  items.forEach((i) => {
    counts[i.weight] += 1;
  });
  return counts;
}
