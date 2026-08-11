export type ContentKind = "place" | "bite" | "person" | "happening" | "circle";

type BaseItem = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  weight: 1 | 2 | 3 | 4;
  imageQuery: string;
  image: string;
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

/** Topical Flickr-backed placeholders; lock keeps each card stable across reloads. */
const img = (imageQuery: string, lock: number) =>
  `https://loremflickr.com/800/800/${imageQuery}?lock=${lock}`;

export const content: ContentItem[] = [
  // Places (6)
  {
    id: "place-1",
    kind: "place",
    title: "Pagdandi Bookstore Cafe",
    subtitle: "Quiet corner tables, long pours",
    tag: "0.6 KM",
    weight: 4,
    imageQuery: "bookstore,cafe,interior",
    image: img("bookstore,cafe,interior", 11),
    neighborhood: "Koregaon Park",
    category: "Cafe · Bookstore",
  },
  {
    id: "place-2",
    kind: "place",
    title: "Osho Teerth Park",
    subtitle: "Zen walks after sundown",
    tag: "1.2 KM",
    weight: 1,
    imageQuery: "park,garden,path",
    image: img("park,garden,path", 12),
    neighborhood: "Koregaon Park",
    category: "Park",
  },
  {
    id: "place-3",
    kind: "place",
    title: "FC Road Lane 7",
    subtitle: "Street food stretch, always lit",
    tag: "2.4 KM",
    weight: 2,
    imageQuery: "street,food,night",
    image: img("street,food,night", 13),
    neighborhood: "FC Road",
    category: "Street",
  },
  {
    id: "place-4",
    kind: "place",
    title: "Phoenix Marketcity",
    subtitle: "Late cinema + dessert runs",
    tag: "4.1 KM",
    weight: 1,
    imageQuery: "shopping,mall",
    image: img("shopping,mall", 14),
    neighborhood: "Viman Nagar",
    category: "Mall",
  },
  {
    id: "place-5",
    kind: "place",
    title: "Baner Hill Viewpoint",
    subtitle: "City lights from the ridge",
    tag: "5.8 KM",
    weight: 3,
    imageQuery: "hill,sunset,viewpoint",
    image: img("hill,sunset,viewpoint", 15),
    neighborhood: "Baner",
    category: "Viewpoint",
  },
  {
    id: "place-6",
    kind: "place",
    title: "Blue Tokai — KP",
    subtitle: "Single origin, soft jazz",
    tag: "0.9 KM",
    weight: 1,
    imageQuery: "coffee,cafe,cup",
    image: img("coffee,cafe,cup", 16),
    neighborhood: "Koregaon Park",
    category: "Coffee",
  },

  // Bites (6)
  {
    id: "bite-1",
    kind: "bite",
    title: "Misal at Bedekar",
    subtitle: "Fiery, with soft pav",
    tag: "₹180",
    weight: 2,
    imageQuery: "misal,spicy,curry",
    image: img("misal,spicy,curry", 21),
    cuisine: "Maharashtrian",
    priceLevel: 1,
  },
  {
    id: "bite-2",
    kind: "bite",
    title: "Sushi at Arthur's",
    subtitle: "Omakase for two",
    tag: "₹2,400",
    weight: 4,
    imageQuery: "sushi,japanese,food",
    image: img("sushi,japanese,food", 22),
    cuisine: "Japanese",
    priceLevel: 4,
  },
  {
    id: "bite-3",
    kind: "bite",
    title: "Vada Pav — Durga",
    subtitle: "Crisp, green chutney heavy",
    tag: "₹40",
    weight: 1,
    imageQuery: "vadapav,streetfood,india",
    image: img("vadapav,streetfood,india", 23),
    cuisine: "Street",
    priceLevel: 1,
  },
  {
    id: "bite-4",
    kind: "bite",
    title: "Pizza at Le Plaisir",
    subtitle: "Wood fire, late kitchen",
    tag: "₹650",
    weight: 1,
    imageQuery: "pizza,italian,food",
    image: img("pizza,italian,food", 24),
    cuisine: "Italian",
    priceLevel: 3,
  },
  {
    id: "bite-5",
    kind: "bite",
    title: "Thali at Shabree",
    subtitle: "Unlimited comfort plates",
    tag: "₹450",
    weight: 3,
    imageQuery: "thali,indian,food",
    image: img("thali,indian,food", 25),
    cuisine: "Maharashtrian",
    priceLevel: 2,
  },
  {
    id: "bite-6",
    kind: "bite",
    title: "Gelato at Naturals",
    subtitle: "Alphonso in season",
    tag: "₹120",
    weight: 1,
    imageQuery: "gelato,icecream,dessert",
    image: img("gelato,icecream,dessert", 26),
    cuisine: "Dessert",
    priceLevel: 1,
  },

  // People (6)
  {
    id: "person-1",
    kind: "person",
    title: "Ananya Deshmukh",
    subtitle: "Photographer · KP nights",
    tag: "12 MUTUAL",
    weight: 2,
    imageQuery: "portrait,woman,photographer",
    image: img("portrait,woman,photographer", 31),
    username: "@ananya.frames",
    mutuals: 12,
    bio: "Shooting Pune after dark. Always looking for a second lens on the night walk.",
    followers: 1840,
    following: 312,
  },
  {
    id: "person-2",
    kind: "person",
    title: "Rohan Kulkarni",
    subtitle: "Runner · Baner trails",
    tag: "4 MUTUAL",
    weight: 1,
    imageQuery: "portrait,man,runner",
    image: img("portrait,man,runner", 32),
    username: "@rohan.runs",
    mutuals: 4,
    bio: "Sunrise loops on Baner Hill. Pace over PR.",
    followers: 620,
    following: 190,
  },
  {
    id: "person-3",
    kind: "person",
    title: "Meera Joshi",
    subtitle: "Chef · pop-up dinners",
    tag: "28 MUTUAL",
    weight: 4,
    imageQuery: "portrait,woman,chef",
    image: img("portrait,woman,chef", 33),
    username: "@meeracooks",
    mutuals: 28,
    bio: "Seasonal menus across Kalyani Nagar kitchens. DM for the next seat.",
    followers: 5200,
    following: 410,
  },
  {
    id: "person-4",
    kind: "person",
    title: "Arjun Shah",
    subtitle: "Vinyl · Deccan hangouts",
    tag: "7 MUTUAL",
    weight: 1,
    imageQuery: "portrait,man,music",
    image: img("portrait,man,music", 34),
    username: "@arjun.spins",
    mutuals: 7,
    bio: "Collecting obscure Marathi jazz. Open crate nights on weekends.",
    followers: 980,
    following: 540,
  },
  {
    id: "person-5",
    kind: "person",
    title: "Priya Nair",
    subtitle: "Design · Viman Nagar",
    tag: "15 MUTUAL",
    weight: 1,
    imageQuery: "portrait,woman,designer",
    image: img("portrait,woman,designer", 35),
    username: "@priya.marks",
    mutuals: 15,
    bio: "Product design by day, sketch walks by evening.",
    followers: 2100,
    following: 280,
  },
  {
    id: "person-6",
    kind: "person",
    title: "Kabir Patil",
    subtitle: "Cycling · Mulshi Sundays",
    tag: "9 MUTUAL",
    weight: 1,
    imageQuery: "portrait,man,cyclist",
    image: img("portrait,man,cyclist", 36),
    username: "@kabir.rides",
    mutuals: 9,
    bio: "Long rides out of Baner. Coffee stop non-negotiable.",
    followers: 740,
    following: 220,
  },

  // Happenings (6)
  {
    id: "happening-1",
    kind: "happening",
    title: "Indie Night at Hard Rock",
    subtitle: "Local bands, open floor",
    tag: "SAT · 8PM",
    weight: 4,
    imageQuery: "concert,band,stage",
    image: img("concert,band,stage", 41),
    date: "Sat · 8:00 PM",
    venue: "Hard Rock Cafe, Bund Garden",
  },
  {
    id: "happening-2",
    kind: "happening",
    title: "Farmers Market Baner",
    subtitle: "Produce, pottery, pour-overs",
    tag: "SUN · 9AM",
    weight: 2,
    imageQuery: "farmers,market,produce",
    image: img("farmers,market,produce", 42),
    date: "Sun · 9:00 AM",
    venue: "Baner Gaothan Ground",
  },
  {
    id: "happening-3",
    kind: "happening",
    title: "Poetry Open Mic",
    subtitle: "Mic + chai, bring a page",
    tag: "FRI · 7PM",
    weight: 1,
    imageQuery: "poetry,microphone,cafe",
    image: img("poetry,microphone,cafe", 43),
    date: "Fri · 7:00 PM",
    venue: "Bookaroo Lounge, FC Road",
  },
  {
    id: "happening-4",
    kind: "happening",
    title: "Sunrise Yoga — Osho",
    subtitle: "Mats provided, quiet only",
    tag: "SAT · 6AM",
    weight: 1,
    imageQuery: "yoga,sunrise,park",
    image: img("yoga,sunrise,park", 44),
    date: "Sat · 6:00 AM",
    venue: "Osho Teerth Park",
  },
  {
    id: "happening-5",
    kind: "happening",
    title: "Film Club: Satyajit Ray",
    subtitle: "Double bill + discussion",
    tag: "THU · 6:30PM",
    weight: 3,
    imageQuery: "cinema,film,theater",
    image: img("cinema,film,theater", 45),
    date: "Thu · 6:30 PM",
    venue: "Alliance Française, Bund Garden",
  },
  {
    id: "happening-6",
    kind: "happening",
    title: "Board Game Night",
    subtitle: "Tables for 4–6, RSVP",
    tag: "WED · 7PM",
    weight: 1,
    imageQuery: "boardgame,friends,table",
    image: img("boardgame,friends,table", 46),
    date: "Wed · 7:00 PM",
    venue: "The Board Room, Viman Nagar",
  },

  // Circles (6)
  {
    id: "circle-1",
    kind: "circle",
    title: "Pune Night Walkers",
    subtitle: "After-dark city routes",
    tag: "128 MEMBERS",
    weight: 3,
    imageQuery: "friends,group,hangout",
    image: img("friends,group,hangout", 51),
    memberAvatars: [
      img("portrait,person", 511),
      img("portrait,person", 512),
      img("portrait,person", 513),
      img("portrait,person", 514),
    ],
    topic: "Urban walks",
  },
  {
    id: "circle-2",
    kind: "circle",
    title: "KP Coffee Club",
    subtitle: "Single origin swaps",
    tag: "64 MEMBERS",
    weight: 1,
    imageQuery: "coffee,friends,cafe",
    image: img("coffee,friends,cafe", 52),
    memberAvatars: [
      img("portrait,person", 521),
      img("portrait,person", 522),
      img("portrait,person", 523),
    ],
    topic: "Coffee",
  },
  {
    id: "circle-3",
    kind: "circle",
    title: "Deccan Vinyl Collective",
    subtitle: "Crate digs + listen nights",
    tag: "92 MEMBERS",
    weight: 2,
    imageQuery: "vinyl,records,music",
    image: img("vinyl,records,music", 53),
    memberAvatars: [
      img("portrait,person", 531),
      img("portrait,person", 532),
      img("portrait,person", 533),
      img("portrait,person", 534),
    ],
    topic: "Music",
  },
  {
    id: "circle-4",
    kind: "circle",
    title: "Baner Run Crew",
    subtitle: "Tue/Thu tempo, Sun long",
    tag: "210 MEMBERS",
    weight: 4,
    imageQuery: "running,group,friends",
    image: img("running,group,friends", 54),
    memberAvatars: [
      img("portrait,person", 541),
      img("portrait,person", 542),
      img("portrait,person", 543),
      img("portrait,person", 544),
    ],
    topic: "Running",
  },
  {
    id: "circle-5",
    kind: "circle",
    title: "Kalyani Design Circle",
    subtitle: "Critique + coffee weekly",
    tag: "45 MEMBERS",
    weight: 1,
    imageQuery: "design,sketch,friends",
    image: img("design,sketch,friends", 55),
    memberAvatars: [
      img("portrait,person", 551),
      img("portrait,person", 552),
      img("portrait,person", 553),
    ],
    topic: "Design",
  },
  {
    id: "circle-6",
    kind: "circle",
    title: "Mulshi Weekend Riders",
    subtitle: "Road bikes out of Baner",
    tag: "76 MEMBERS",
    weight: 1,
    imageQuery: "cycling,bikes,group",
    image: img("cycling,bikes,group", 56),
    memberAvatars: [
      img("portrait,person", 561),
      img("portrait,person", 562),
      img("portrait,person", 563),
      img("portrait,person", 564),
    ],
    topic: "Cycling",
  },
];

/** Weight distribution check helper (~15% w4, ~25% w2|w3, rest w1) */
export function weightStats(items: ContentItem[] = content) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
  items.forEach((i) => {
    counts[i.weight] += 1;
  });
  return counts;
}
