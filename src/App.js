import React, { useState } from "react";

import useCity from "./hooks/useCity";
import City from "./components/City";

const locations = [{ name: null }, { name: "Toronto" }, { name: "Mumbai" }];

function App() {
  const [index, setIndex] = useState(0);

  const { status, city } = useCity(locations[index]);

  const [showWebcam, setShowWebcam] = useState(true);
  const next = () => {
    setIndex(prev => (prev === locations.length - 1 ? 0 : prev + 1));
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
