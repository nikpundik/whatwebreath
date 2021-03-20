import React from "react";
import { Link } from "wouter";

import styles from "./Manifest.module.css";

function Manifest() {
  return (
    <div className={styles.manifest}>
      <h1>hell yeah</h1>
      <Link href="/">back</Link>
    </div>
  );
}

export default Manifest;
