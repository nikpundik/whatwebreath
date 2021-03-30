import React from "react";
import { Link } from "wouter";
import Positive from "../../assets/images/positive1.jpg";
import Negative from "../../assets/images/negative1.jpg";

import styles from "./Manifest.module.css";

function Manifest() {
  return (
    <div>
      <div className={styles.topBar}>
        <h1 className={styles.brand}>
          WhatWeBreathe
          <br />
          Plotting PM2.5 around you
        </h1>
        <Link href="/" className={styles.link}>
          Back <span>→</span>
        </Link>
      </div>
      <div className={styles.manifesto}>
        <p className={styles.paragraph}>
          ‍According to WHO, around 7 million people die every year due to a
          subtle and invisible killer: pollution. Exposure to particles such as
          fine dust can lead to stroke, heart disease, lung cancer and other
          respiratory infection. It is supposed, analyzing infection rates in
          polluted areas, that these particles have facilitated the spread of
          the new Coronavirus (SARS-CoV-2).
        </p>
        <div className={styles.row}>
          <div className={styles.col6}>
            <img className={styles.image} src={Positive} alt="good WWB" />
            <div>:-)</div>
          </div>
          <div className={styles.col6} alt="no good WWB">
            <img className={styles.image} src={Negative} alt="no good WWB" />
            <div>:-(</div>
          </div>
        </div>
        <p className={styles.paragraph}>
          WhatWeBreath is a React-based project made to raise awareness on fine
          dust pollution: have you ever wondered what it would be like if these
          particles were visible? We tried to give an answer.
        </p>
        <Link href="/" className={styles.link}>
          by Polar Coffee <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default Manifest;
