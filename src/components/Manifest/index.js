import React from "react";
import { Link } from "wouter";

import styles from "./Manifest.module.css";

function Manifest() {
  return (
    <div>
      <div className={styles.topBar}>
        <h1 className={styles.brand}>
         WhatWeBreathe<br />Plotting PMx around you
        </h1>
        <Link href="/" className={styles.link}>Back <span>→</span></Link>
      </div>
      <div className={styles.manifesto}>
        <p className={styles.paragraph}>‍
          According to WHO, around 7 million people die every year due to a
          subtle and invisible killer: pollution. Exposure to particles such
          as fine dust can lead to stroke, heart disease, lung cancer and other
          respiratory infection. It is supposed, analyzing infection rates in
          polluted areas, that these particles have facilitated the spread of the new Coronavirus (SARS-CoV-2).
        </p>
        <div className={styles.row}>
          <div className={styles.col6}>
            <img className={styles.image} src="https://uploads-ssl.webflow.com/6054be9e3328955c76eebcb8/6054c52a7ac7ad5b8855f0c3_positive-p-1080.jpeg" alt="good WWB" />
            <div>:-)</div>
          </div>
          <div className={styles.col6} alt="no good WWB">
            <img className={styles.image} src="https://uploads-ssl.webflow.com/6054be9e3328955c76eebcb8/6054c5445e16ba2e49fac051_negative-p-2000.jpeg" />
            <div>:-(</div>
          </div>
        </div>
        <p className={styles.paragraph}>
          WhatWeBreath is a React-based project made to raise awareness on fine dust pollution:
          have you ever wondered what it would be like if these particles were visible? We tried to give an answer.
        </p>
        <Link href="/" className={styles.link}>by Polar Coffee <span>→</span></Link>
      </div>
    </div>
  );
}

export default Manifest;
