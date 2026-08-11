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

/** Curated Unsplash photos — specific shot IDs, not keyword search. */
const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=800&q=70`;

export const content: ContentItem[] = [
  // Places
  {
    id: "place-1",
    kind: "place",
    title: "Pagdandi Bookstore Cafe",
    subtitle: "Quiet corner tables, long pours",
    tag: "0.6 KM",
    weight: 4,
    imageQuery: "bookstore,cafe,interior",
    image: photo("1521587760476-6c12a4b040da"), // bookstore shelves
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
    image: photo("1441974231531-c6227db76b6e"), // forest park path
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
    image: photo("1555939594-58d7cb561ad1"), // night street food
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
    image: photo("1441986300917-64674bd600d8"), // mall interior
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
    image: photo("1506905925346-21bda4d32df4"), // mountain sunset
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
    image: photo("1495474472287-4d71bcdd2085"), // coffee cup
    neighborhood: "Koregaon Park",
    category: "Coffee",
  },

  // Bites
  {
    id: "bite-1",
    kind: "bite",
    title: "Misal at Bedekar",
    subtitle: "Fiery, with soft pav",
    tag: "₹180",
    weight: 2,
    imageQuery: "misal,spicy,curry",
    image: photo("1585937421614-4a9987e7e018"), // Indian curry bowl
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
    image: photo("1579871494447-9811cf80d66c"), // sushi platter
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
    image: photo("1606491956689-2ea866880c84"), // Indian street snack
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
    image: photo("1513104890138-7c749659a591"), // pizza
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
    image: photo("1546833999-b9f581a1996d"), // Indian thali-style spread
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
    image: photo("1563805042-7684c019e1cb"), // ice cream
    cuisine: "Dessert",
    priceLevel: 1,
  },

  // People — real portrait photos
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
    image: photo("1507003211169-0a1dd7228f2d"),
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
    image: photo("1438761681033-6461ffad8d80"),
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
    image: photo("1500648767791-00dcc994a43e"),
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
    image: photo("1544005313-94ddf0286df2"),
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
    image: photo("1506794778202-cad84cf45f1d"),
    username: "@kabir.rides",
    mutuals: 9,
    bio: "Long rides out of Baner. Coffee stop non-negotiable.",
    followers: 740,
    following: 220,
  },

  // Happenings
  {
    id: "happening-1",
    kind: "happening",
    title: "Indie Night at Hard Rock",
    subtitle: "Local bands, open floor",
    tag: "SAT · 8PM",
    weight: 4,
    imageQuery: "concert,band,stage",
    image: photo("1470229722913-7c0e2dbbafd3"), // concert stage
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
    image: photo("1488459716781-31db52582fe9"), // produce market
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
    image: photo("1516280440612-82599195caee"), // microphone
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
    image: photo("1544367567-0f2fcb009e0b"), // yoga
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
    image: photo("1489599849927-2ee91cede3ba"), // cinema seats
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
    image: photo("1632506008690-c7b948a7aaf4"), // board games
    date: "Wed · 7:00 PM",
    venue: "The Board Room, Viman Nagar",
  },

  // Circles
  {
    id: "circle-1",
    kind: "circle",
    title: "Pune Night Walkers",
    subtitle: "After-dark city routes",
    tag: "128 MEMBERS",
    weight: 3,
    imageQuery: "friends,group,hangout",
    image: photo("1529156069898-49953e39b3ac"), // friends group
    memberAvatars: [
      photo("1494790108377-be9c29b29330"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1544005313-94ddf0286df2"),
      photo("1500648767791-00dcc994a43e"),
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
    image: photo("1521017432531-fbd92d768814"), // cafe friends
    memberAvatars: [
      photo("1438761681033-6461ffad8d80"),
      photo("1506794778202-cad84cf45f1d"),
      photo("1494790108377-be9c29b29330"),
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
    image: photo("1519677100203-a0e668c92439"), // vinyl records
    memberAvatars: [
      photo("1500648767791-00dcc994a43e"),
      photo("1544005313-94ddf0286df2"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1438761681033-6461ffad8d80"),
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
    image: photo("1476480862126-209bfaa8edc8"), // runners
    memberAvatars: [
      photo("1506794778202-cad84cf45f1d"),
      photo("1494790108377-be9c29b29330"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1544005313-94ddf0286df2"),
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
    image: photo("1581291518633-83b4ebd1d83e"), // design desk
    memberAvatars: [
      photo("1544005313-94ddf0286df2"),
      photo("1438761681033-6461ffad8d80"),
      photo("1500648767791-00dcc994a43e"),
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
    image: photo("1541625602330-2277a4c46182"), // cycling
    memberAvatars: [
      photo("1506794778202-cad84cf45f1d"),
      photo("1507003211169-0a1dd7228f2d"),
      photo("1494790108377-be9c29b29330"),
      photo("1500648767791-00dcc994a43e"),
    ],
    topic: "Cycling",
  },
];

export function weightStats(items: ContentItem[] = content) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
  items.forEach((i) => {
    counts[i.weight] += 1;
  });
  return counts;
}
