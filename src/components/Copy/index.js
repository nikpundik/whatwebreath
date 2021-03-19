import React from "react";

import styles from "./Copy.module.css";

const CityCopy = ({ city, next, setShowWebcam }) => {
  return (
    <React.Fragment>
      <button onClick={() => setShowWebcam((prev) => !prev)}>webcam</button>
      <button onClick={next}>discover</button>
      <h1>{city.name}</h1>
    </React.Fragment>
  );
};

function Copy({ status, city, next, setShowWebcam }) {
  return (
    <div className={styles.copy}>
      {status === "loading" && <div>loader</div>}
      {status === "error" && <div>Ops...something went wrong</div>}
      {status === "loaded" && (
        <CityCopy city={city} next={next} setShowWebcam={setShowWebcam} />
      )}
    </div>
  );
}

export default Copy;
