import Webcam from '../Webcam';
import Copy from '../Copy';
import Canvas from '../Canvas';

function City({ city, next, webcam = true }) {
  return (
    <div id="app">
      {webcam && <Webcam />}
      <Canvas city={city} />
      <Copy city={city} next={next} />
    </div>
  );
}

export default City;
