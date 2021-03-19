import Webcam from "../Webcam";
import Copy from "../Copy";
import Canvas from "../Canvas";

function City({ city, next, showWebcam, setShowWebcam }) {
  return (
    <div id="app">
      {showWebcam && <Webcam />}
      <Canvas city={city} />
      <Copy city={city} next={next} setShowWebcam={setShowWebcam} />
    </div>
  );
}

export default City;
