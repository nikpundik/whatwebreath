import Webcam from "../Webcam";
import Copy from "../Copy";
import Canvas from "../Canvas";

function City({ status, city, next, showWebcam, setShowWebcam }) {
  return (
    <div id="app">
      {showWebcam && <Webcam />}
      <Canvas status={status} city={city} />
      <Copy
        status={status}
        city={city}
        next={next}
        setShowWebcam={setShowWebcam}
      />
    </div>
  );
}

export default City;
