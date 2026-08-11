export type ContentKind = "place" | "bite" | "person" | "happening" | "circle";

type BaseItem = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  weight: 1 | 2 | 3 | 4;
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

/** Stable numeric id from seed — id URLs are faster than /seed/ (fewer hops). */
function seedId(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 1000) + 1;
}

/** Request a mid-size master; custom loader downscales per layout slot. */
const img = (seed: string) =>
  `https://picsum.photos/id/${seedId(seed)}/480/480`;

export const content: ContentItem[] = [
  // Places (6)
  {
    id: "place-1",
    kind: "place",
    title: "Pagdandi Bookstore Cafe",
    subtitle: "Quiet corner tables, long pours",
    tag: "0.6 KM",
    weight: 4,
    image: img("pagdandi-kp"),
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
    image: img("osho-teerth"),
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
    image: img("fc-road-lane"),
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
    image: img("phoenix-viman"),
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
    image: img("baner-hill"),
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
    image: img("blue-tokai-kp"),
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
    image: img("bedekar-misal"),
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
    image: img("arthurs-theme"),
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
    image: img("durga-vada"),
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
    image: img("le-plaisir"),
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
    image: img("shabree-thali"),
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
    image: img("naturals-kn"),
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
    image: img("ananya-d"),
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
    image: img("rohan-k"),
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
    image: img("meera-j"),
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
    image: img("arjun-s"),
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
    image: img("priya-n"),
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
    image: img("kabir-p"),
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
    image: img("hardrock-indie"),
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
    image: img("baner-market"),
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
    image: img("poetry-fc"),
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
    image: img("yoga-osho"),
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
    image: img("film-club-kn"),
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
    image: img("boardgame-viman"),
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
    image: img("circle-nightwalk"),
    memberAvatars: [
      img("nw-a1"),
      img("nw-a2"),
      img("nw-a3"),
      img("nw-a4"),
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
    image: img("circle-coffee"),
    memberAvatars: [img("cc-a1"), img("cc-a2"), img("cc-a3")],
    topic: "Coffee",
  },
  {
    id: "circle-3",
    kind: "circle",
    title: "Deccan Vinyl Collective",
    subtitle: "Crate digs + listen nights",
    tag: "92 MEMBERS",
    weight: 2,
    image: img("circle-vinyl"),
    memberAvatars: [
      img("vc-a1"),
      img("vc-a2"),
      img("vc-a3"),
      img("vc-a4"),
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
    image: img("circle-run"),
    memberAvatars: [
      img("br-a1"),
      img("br-a2"),
      img("br-a3"),
      img("br-a4"),
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
    image: img("circle-design"),
    memberAvatars: [img("kd-a1"), img("kd-a2"), img("kd-a3")],
    topic: "Design",
  },
  {
    id: "circle-6",
    kind: "circle",
    title: "Mulshi Weekend Riders",
    subtitle: "Road bikes out of Baner",
    tag: "76 MEMBERS",
    weight: 1,
    image: img("circle-ride"),
    memberAvatars: [img("mr-a1"), img("mr-a2"), img("mr-a3"), img("mr-a4")],
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
