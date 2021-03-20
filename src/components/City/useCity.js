import { useState, useEffect } from "react";

import { getCity } from "../../api";
import {
  getFirstLocation,
  getLocationBySlug,
  getNextLocation,
} from "../../utils/locations";

const cache = {};

const getCached = (slug) => cache[slug || "home"];
const setCached = (slug, result) => (cache[slug || "home"] = result);

const useCity = (slug) => {
  const [status, setStatus] = useState("loading");
  const [city, setCity] = useState(null);
  const [nextCity, setNextCity] = useState(getFirstLocation());
  useEffect(() => {
    const load = async () => {
      const currentLocation = getLocationBySlug(slug);
      setStatus("loading");
      try {
        let result = getCached(currentLocation.slug);
        if (!result) {
          result = await getCity(currentLocation.slug);
          result.shortName = currentLocation.name;
          setCached(currentLocation.slug, result);
        }
        setCity(result);
        setStatus("loaded");
      } catch (e) {
        setStatus("error");
      }
    };

    load();
    if (slug) {
      setNextCity(getNextLocation(slug));
    }
  }, [slug]);

  return {
    status,
    isHome: !slug,
    city,
    nextCity,
  };
};

export default useCity;
