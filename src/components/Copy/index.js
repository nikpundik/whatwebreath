import React from "react";

import styles from "./Copy.module.css";

function Copy({ city, next, setShowWebcam }) {
  return (
    <div className={styles.copy}>
      <button onClick={() => setShowWebcam((prev) => !prev)}>webcam</button>
      <button onClick={next}>discover</button>
      <h1>{city.name}</h1>
    </div>
  );
}

export default Copy;
