import React from "react";
import { Link } from "wouter";

import styles from "./Copy.module.css";

const CityCopy = ({ city, nextCity, isHome, setShowWebcam }) => {
  return (
    <React.Fragment>
      <button onClick={() => setShowWebcam((prev) => !prev)}>webcam</button>
      <Link href={isHome ? `/${nextCity.name}` : "/"}>
        <a className="link">{isHome ? "Rest of the world" : "Back home"}</a>
      </Link>
      <h1>{city.name}</h1>
    </React.Fragment>
  );
};

function Copy({ status, city, nextCity, isHome, setShowWebcam }) {
  return (
    <div className={styles.copy}>
      {status === "loading" && <div>loader</div>}
      {status === "error" && <div>Ops...something went wrong</div>}
      {status === "loaded" && (
        <CityCopy
          city={city}
          nextCity={nextCity}
          isHome={isHome}
          setShowWebcam={setShowWebcam}
        />
      )}
    </div>
  );
}

export default Copy;
