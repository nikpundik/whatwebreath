import { hereIpRequest, cityIpRequest } from './config';

const getParticles = (n) => {
  let text = '';
  let limit = 0;
  switch (true) {
    case n < 50:
      text = 'GOOD';
      limit = 50;
      break;
    case n < 100:
      text = 'MODERATE';
      limit = 100;
      break;
    case n < 150:
      text = 'UNHEALTHY FOR SERSITIVE GROUPS';
      limit = 150;
      break;
    case n < 200:
      text = 'UNHEALTHY';
      limit = 200;
      break;
    case n < 300:
      text = 'VERY UNHEALTHY';
      limit = 300;
      break;
    case n > 301:
      text = 'HAZARDOUS';
      limit = 400;
      break;
    default:
      break;
  }
  console.log(Math.round(n * (n / limit)));
  return Math.round(n * (n / limit));
};

export const getCity = async (location) => {
  const url = location.name ? cityIpRequest(location.name) : hereIpRequest();
  const response = await fetch(url);
  const apiResponse = await response.json();

  const town =
    apiResponse.data && apiResponse.data.city && apiResponse.data.city.name;
  const pm25 =
    apiResponse.data &&
    apiResponse.data.iaqi &&
    apiResponse.data.iaqi.pm25 &&
    apiResponse.data.iaqi.pm25.v;

  return {
    name: town,
    particles: getParticles(pm25),
  };
};
