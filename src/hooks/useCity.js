import { useState, useEffect } from "react";
import { getCity } from "../api";

const useCity = location => {
  const [status, setStatus] = useState("loading");
  const [city, setCity] = useState(null);

  useEffect(() => {
    const load = async () => {
      setStatus("loading");
      try {
        const result = await getCity(location);
        setCity(result);
        setStatus("loaded");
      } catch (e) {
        setStatus("error");
      }
    };

    load();
  }, [location]);

  return {
    status: status,
    city: city
  };
};

export default useCity;
