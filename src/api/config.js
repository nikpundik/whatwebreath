const token = 'e7416f21983d8cd887bbe33feee25d71fc3a214f';
export const hereIpRequest = () =>
  `https://api.waqi.info/feed/here/?token=${token}`;
export const cityIpRequest = (city) =>
  `https://api.waqi.info/feed/${city}/?token=${token}`;
