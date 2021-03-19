import { useState, useEffect } from "react";

import { getCity } from "../api";
import { getNextLocation } from "../utils/locations";

const cache = {};
const getCached = (slug) => cache[slug || "home"];
const setCached = (slug, result) => (cache[slug || "home"] = result);

const useCity = (slug) => {
  const [status, setStatus] = useState("loading");
  const [city, setCity] = useState(null);
  const [nextCity, setNextCity] = useState(null);

  useEffect(() => {
    const load = async () => {
      setStatus("loading");
      try {
        let result = getCached(slug);
        if (!result) {
          result = await getCity(slug);
          setCached(slug, result);
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
