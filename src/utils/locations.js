import { shuffle } from "./array";

export const locations = [
  { name: "Toronto", slug: "toronto" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Roma", slug: "roma" },
  { name: "Bormio", slug: "bormio" },
  { name: "Moscow", slug: "moscow" },
  { name: "Tatebayashi", slug: "tatebayashi" },
  { name: "Shenzhen", slug: "shenzhen" },
  { name: "Toronto", slug: "toronto" },
  { name: "Foshan", slug: "foshan" },
  { name: "İzmir", slug: "izmir" },
  { name: "Edirne", slug: "edirne" },
  { name: "Lahore", slug: "lahore" },
  { name: "Nagoya", slug: "nagoya" },
  { name: "Dongguan", slug: "dongguan" },
  { name: "Jakarta", slug: "jakarta" },
  { name: "Kawasaki", slug: "kawasaki" },
  { name: "Attard, Malta", slug: "attard" },
  { name: "Miami", slug: "miami" },
  { name: "Salvador", slug: "salvador" },
  { name: "Tokyo", slug: "tokyo" },
  { name: "Qom", slug: "qom" },
  { name: "Berkeley", slug: "berkeley" },
  { name: "Cremona", slug: "cremona" },
  { name: "São Paulo", slug: "sao-paulo" },
  { name: "Santiago", slug: "santiago" },
  { name: "Xiamen", slug: "xiamen" },
  { name: "Punta Arenas", slug: "punta-arenas" },
  { name: "Kanpur", slug: "kanpur" },
  { name: "Hanoi", slug: "hanoi" },
  { name: "Columbia", slug: "columbia" },
  { name: "Abuja", slug: "abuja" },
  { name: "Bangkok", slug: "bangkok" },
  { name: "Warburton", slug: "warburton" },
  { name: "Blenheim", slug: "blenheim" },
  { name: "Calgary", slug: "calgary" },
  { name: "Peshawar", slug: "peshawar" },
  { name: "Pune", slug: "pune" },
  { name: "Hiroshima", slug: "hiroshima" },
  { name: "Buenos Aires", slug: "buenos-aires" },
  { name: "Beroun", slug: "beroun" },
  { name: "Warsaw", slug: "warsaw" },
  { name: "Lagos", slug: "lagos" },
  { name: "Beroun", slug: "beroun" },
  { name: "Cape Town", slug: "cape-town" },
  { name: "Chennai", slug: "chennai" },
  { name: "Mexico City", slug: "mexico City" },
  { name: "Medellin", slug: "medellin" },
  { name: "Tangshan", slug: "tangshan" },
  { name: "Lanzhou", slug: "lanzhou" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Karachi", slug: "karachi" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Nanjing", slug: "nanjing" },
  { name: "Dubai", slug: "dubai" },
  { name: "Göteborg", slug: "goteborg" },
  { name: "Ajaccio", slug: "ajaccio" },
  { name: "Harbin", slug: "harbin" },
  { name: "Hamburg", slug: "hamburg" },
  { name: "Toronto", slug: "toronto" },
  { name: "Guangzhou", slug: "guangzhou" },
  { name: "Conakry", slug: "conakry" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Lima", slug: "lima" },
  { name: "Artvin", slug: "artvin" },
  { name: "Cali", slug: "cali" },
  { name: "Dhaka", slug: "dhaka" },
  { name: "Ningbo", slug: "ningbo" },
  { name: "Dalian", slug: "dalian" },
  { name: "Suzhou", slug: "suzhou" },
  { name: "Belgrade", slug: "belgrade" },
  { name: "Daegu", slug: "daegu" },
  { name: "Kyoto", slug: "kyoto" },
  { name: "Quanzhou", slug: "quanzhou" },
  { name: "Manchester", slug: "manchester-piccadilly" },
  { name: "Milano", slug: "milano" },
  { name: "Ukraine", slug: "ukraine" },
  { name: "Hefei", slug: "hefei" },
  { name: "Chicago", slug: "chicago" },
  { name: "Sydney", slug: "sydney" },
  { name: "Washington", slug: "washington" },
  { name: "Paris", slug: "paris" },
  { name: "Tabriz", slug: "tabriz" },
  { name: "Moscow", slug: "moscow" },
  { name: "Baghdad", slug: "baghdad" },
  { name: "El Paso", slug: "el-paso" },
  { name: "Kampala", slug: "kampala" },
  { name: "Lushun", slug: "lushun" },
  { name: "Chengdu", slug: "chengdu" },
  { name: "Patna", slug: "patna" },
  { name: "Shiraz", slug: "shiraz" },
  { name: "Hong Kong", slug: "hong-kong" },
  { name: "Ahvaz", slug: "ahvaz" },
  { name: "Marmande", slug: "marmande" },
  { name: "Suwałki", slug: "suwalki" },
  { name: "Aalen", slug: "aalen" },
  { name: "Porto", slug: "porto" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Budapest", slug: "budapest" },
  { name: "Paris", slug: "paris" },
  { name: "Viterbo", slug: "viterbo" },
  { name: "New York", slug: "new-york" },
];

shuffle(locations);

export const getFirstLocation = () => locations[0];
export const getLocationBySlug = (slug) => {
  if (!slug) return { name: null, slug: null, qs: null };
  const location = locations.find((location) => location.slug === slug);
  if (location) return { ...location, qs: location.name };
  return { name: null, slug, qs: slug };
};
export const getNextLocation = (slug) => {
  const index = locations.findIndex((location) => location.slug === slug);
  if (index >= 0 && index < locations.length - 1) return locations[index + 1];
  return locations[0];
};
