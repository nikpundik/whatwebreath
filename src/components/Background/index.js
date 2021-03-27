import React from "react";

import bgSrc from "../../assets/images/person.jpeg";
import styles from "./Background.module.css";

function Background() {
  return (
    <div className={styles.background}>
      <img src={bgSrc} alt="Person Background" />
    </div>
  );
}

export default Background;
