import React, { useState } from "react";
import { useRoute } from "wouter";

import Webcam from "../Webcam";
import UI from "../UI";
import Canvas from "../Canvas";

import useCity from "./useCity";

function City() {
  const [, params] = useRoute("/:city");
  const [showWebcam, setShowWebcam] = useState(true);
  const { status, city, nextCity, isHome } = useCity(params && params.city);

  return (
    <div>
      {showWebcam && <Webcam />}
      <Canvas status={status} city={city} />
      <UI
        status={status}
        city={city}
        isHome={isHome}
        nextCity={nextCity}
        setShowWebcam={setShowWebcam}
      />
    </div>
  );
}

export default City;
