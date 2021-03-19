import React, { useState } from "react";
import { locations } from "./utils/locations";
import useCity from "./hooks/useCity";
import City from "./components/City";

const homeLocation = { name: null };

function App() {
  const [index, setIndex] = useState(0);
  const [isHome, setHome] = useState(true);

  const { status, city } = useCity(isHome ? homeLocation : locations[index]);

  const [showWebcam, setShowWebcam] = useState(true);
  const next = () => {
    if (isHome) {
      setIndex(prev => (prev === locations.length - 1 ? 0 : prev + 1));
      setHome(false);
    } else {
      setHome(true);
    }
  };
  // const city = cities[index];
  return (
    <div id="app">
      {status === "loading" && <div>loader</div>}
      {status === "error" && <div>error</div>}
      {status === "loaded" && (
        <City
          city={city}
          next={next}
          showWebcam={showWebcam}
          setShowWebcam={setShowWebcam}
        />
      )}
    </div>
  );
}

export default App;
