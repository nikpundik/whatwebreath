import React from "react";
import { Link } from "wouter";

import styles from "./UI.module.css";

const UIContent = ({ city, nextCity, isHome, setShowWebcam }) => {
  return (
    <React.Fragment>
      <Link href="/manifest">manifest</Link>
      <button onClick={() => setShowWebcam((prev) => !prev)}>webcam</button>
      <Link href={isHome ? `/${nextCity.slug}` : "/"}>
        {isHome ? "Rest of the world" : "Back home"}
      </Link>
      <h1>{city.shortName || city.name}</h1>
    </React.Fragment>
  );
};

function UI({ status, city, nextCity, isHome, setShowWebcam }) {
  return (
    <div className={styles.copy}>
      {status === "loading" && <div>loader</div>}
      {status === "error" && <div>Ops...something went wrong</div>}
      {status === "loaded" && (
        <UIContent
          city={city}
          nextCity={nextCity}
          isHome={isHome}
          setShowWebcam={setShowWebcam}
        />
      )}
    </div>
  );
}

export default UI;
