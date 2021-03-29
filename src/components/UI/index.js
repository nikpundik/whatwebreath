import React, { useCallback } from "react";
import { Link, useLocation } from "wouter";
import { useSwipeable } from "react-swipeable";

import Loader from "./Loader";
import styles from "./UI.module.css";

const getDisplayName = (status, city = {}) => {
  if (status === "loading") return <Loader />;
  if (status === "error") return "Oops.. not found!";
  const name = city.shortName || city.name || "";
  return name.split(",")[0];
};
const getDisplayPM = (status, city = {}) => {
  const particles = status === "loaded" ? city.particles : null;
  return `${particles || "???"} — pm25`;
};

function UI({ status, city, nextCity, isHome }) {
  const [, setLocation] = useLocation();
  const nextUrl = isHome ? `/${nextCity.slug}` : "/";
  const onSwipe = useCallback(
    () => status !== "loading" && setLocation(nextUrl),
    [status, nextUrl, setLocation]
  );
  const handlers = useSwipeable({
    onSwipedLeft: onSwipe,
    onSwipedRight: onSwipe,
  });
  return (
    <div {...handlers} className={styles.ui}>
      <header className={styles.header}>
        <div>
          <h3>WhatWeBreathe</h3>
          <h2>Plotting PM25 around you</h2>
        </div>
        <div>
          <Link href="/manifest">Manifesto →</Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.info}>
          <h1>{getDisplayName(status, city)}</h1>
          <div>{getDisplayPM(status, city)}</div>
        </div>
        <div className={styles.action}>
          <Link disabled={status === "loading"} href={nextUrl}>
            {isHome ? "Rest of the world" : "Back home"}{" "}
            <span className={isHome ? styles.homeLink : styles.worldLink}>
              →
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default UI;
