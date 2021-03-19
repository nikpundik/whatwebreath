import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

function Particle({ particle }) {
  const mesh = useRef();

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.position.x += Math.cos(time + particle.key) * 0.01;
    mesh.current.position.y += Math.sin(time * 1.1 + particle.key) * 0.01;
    mesh.current.position.z += Math.sin(time * 0.9 + particle.key) * 0.01;
  });

  return (
    <mesh position={[particle.x, particle.y, particle.z]} ref={mesh}>
      <sphereBufferGeometry args={[particle.size, 32, 32]} />
      <meshStandardMaterial color={"#34eb3d"} opacity={0.05} trasparent />
    </mesh>
  );
}

function Particles({ particles = [] }) {
  return (
    <group>
      {particles.map(particle => (
        <Particle key={particle.key} particle={particle} />
      ))}
    </group>
  );
}

export default Particles;
