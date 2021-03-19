import { useState, useEffect } from "react";
import { getCity } from "../api";

const cache = {};
const getCached = (location) => cache[location.name || "home"];
const setCached = (location, result) =>
  (cache[location.name || "home"] = result);

const useCity = (location) => {
  const [status, setStatus] = useState("loading");
  const [city, setCity] = useState(null);

  useEffect(() => {
    const load = async () => {
      setStatus("loading");
      try {
        let result = getCached(location);
        if (!result) {
          result = await getCity(location);
          setCached(location, result);
        }
        setCity(result);
        setStatus("loaded");
      } catch (e) {
        setStatus("error");
      }
    };

    load();
  }, [location]);

  return {
    status,
    city,
  };
};

export default useCity;
