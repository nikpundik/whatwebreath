import React from "react";
import { Canvas } from "react-three-fiber";

import Particles from "../Particles";

import styles from "./Canvas.module.css";

const getParticles = (count) => {
  const particles = [];
  for (let i = 0; i < count; i += 1) {
    particles.push({
      key: i,
      size: Math.random() * 0.1 + 0.1,
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
      z: Math.random() * 1 - 2,
    });
  }
  return particles;
};

function ThreeCanvas({ city }) {
  const particles = getParticles(city.particles);
  return (
    <div className={styles.canvas}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Particles particles={particles} />
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;
