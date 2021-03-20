import { hereIpRequest, cityIpRequest } from "./config";

const getParticles = (n) => {
  let label = "";
  switch (true) {
    case n < 50:
      label = "good";
      break;
    case n < 100:
      label = "Moderate";
      break;
    case n < 150:
      label = "Unhealthy for sersitive groups";
      break;
    case n < 200:
      label = "Unhealthy";
      break;
    case n < 300:
      label = "Very unhealthy";
      break;
    case n > 301:
      label = "Hazardous";
      break;
    default:
      label = "";
      break;
  }
  return {
    label,
    particles: Math.min(n, 400),
  };
};

export const getCity = async (slug) => {
  const url = slug ? cityIpRequest(slug) : hereIpRequest();
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
    ...getParticles(pm25),
  };
};
