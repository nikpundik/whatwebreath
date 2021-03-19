export const locations = [
  { name: "Toronto" },
  { name: "Mumbai" },
  { name: "Roma" },
  { name: "Barcelona" },
  { name: "Moscow" },
  { name: "Tatebayashi" },
  { name: "Shenzhen" },
  { name: "Toronto" },
  { name: "Foshan" },
  { name: "İzmir" },
  { name: "Edirne" },
  { name: "Lahore" },
  { name: "Nagoya" },
  { name: "Dongguan" },
  { name: "Jakarta" },
  { name: "Kawasaki" },
  { name: "Attard, Malta" },
  { name: "Córdoba" },
  { name: "Salvador" },
  { name: "Tokyo" },
  { name: "Qom" },
  { name: "Berkeley" },
  { name: "Munich" },
  { name: "São Paulo" },
  { name: "Santiago" },
  { name: "Xiamen" },
  { name: "Punta Arenas" },
  { name: "Kanpur" },
  { name: "Hanoi" },
  { name: "Columbia" },
  { name: "Abuja" },
  { name: "Bangkok" },
  { name: "Warburton" },
  { name: "Blenheim" },
  { name: "Calgary" },
  { name: "Peshawar" },
  { name: "Pune" },
  { name: "Hiroshima" },
  { name: "Buenos Aires" },
  { name: "Beroun" },
  { name: "Warsaw" },
  { name: "Lagos" },
  { name: "Beroun" },
  { name: "Cape Town" },
  { name: "Chennai" },
  { name: "Mexico City" },
  { name: "Medellin" },
  { name: "Tangshan" },
  { name: "Lanzhou" },
  { name: "Mumbai" },
  { name: "Karachi" },
  { name: "Lucknow" },
  { name: "Nanjing" },
  { name: "Dubai" },
  { name: "Göteborg" },
  { name: "Ajaccio" },
  { name: "Harbin" },
  { name: "Hamburg" },
  { name: "Toronto" },
  { name: "Guangzhou" },
  { name: "Conakry" },
  { name: "Hyderabad" },
  { name: "Jaipur" },
  { name: "Lima" },
  { name: "Phnom Penh" },
  { name: "Cali" },
  { name: "Dhaka" },
  { name: "Ningbo" },
  { name: "Dalian" },
  { name: "Suzhou" },
  { name: "Belgrade" },
  { name: "Daegu" },
  { name: "Kyoto" },
  { name: "Basra" },
  { name: "Romania" },
  { name: "Sofia" },
  { name: "Ukraine" },
  { name: "Hefei" },
  { name: "Chicago" },
  { name: "Sydney" },
  { name: "Abu Dhabi" },
  { name: "Paris" },
  { name: "Tabriz" },
  { name: "Moscow" },
  { name: "Baghdad" },
  { name: "Dallas" },
  { name: "Kampala" },
  { name: "Jeddah" },
  { name: "Chengdu" },
  { name: "Patna" },
  { name: "Shiraz" },
  { name: "Hong Kong" },
  { name: "Ahvaz" },
  { name: "Caloocan" },
  { name: "Suwałki" },
  { name: "Aalen" },
  { name: "Porto" },
  { name: "Ahmedabad" },
  { name: "Budapest" },
  { name: "Paris" },
  { name: "Viterbo" },
  { name: "New York" },
];

export const getNextLocation = (slug) => {
  const index = locations.findIndex((location) => location.name === slug);
  if (index >= 0 && index < locations.length - 1) return locations[index + 1];
  return locations[0];
};
