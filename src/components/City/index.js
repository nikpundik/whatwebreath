import { useRoute } from "wouter";

import Webcam from "../Webcam";
import Copy from "../Copy";
import Canvas from "../Canvas";
import useCity from "../../hooks/useCity";

function City({ showWebcam, setShowWebcam }) {
  const [, params] = useRoute("/:city");
  const { status, city, nextCity, isHome } = useCity(params && params.city);

  return (
    <div>
      {showWebcam && <Webcam />}
      <Canvas status={status} city={city} />
      <Copy
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
