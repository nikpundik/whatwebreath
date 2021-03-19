import React from 'react'

import styles from "./Copy.module.css";

function Copy({ city, next }) {
  return (
    <div className={styles.copy}>
      <button onClick={next}>discover</button>
      <h1>{city.name}</h1>
    </div>
  )
}

export default Copy;