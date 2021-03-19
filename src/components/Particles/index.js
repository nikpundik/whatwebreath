import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Particle({ particle }) {
  const mesh = useRef()

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    mesh.current.position.x += Math.cos( state.clock.getElapsedTime() + particle.key ) * 0.01;
    mesh.current.position.y += Math.sin( state.clock.getElapsedTime() * 1.1 + particle.key ) * 0.01;
  })

  return (
    <mesh
      position={[particle.x, particle.y, particle.z]}
      ref={mesh}>
      <sphereBufferGeometry args={[particle.size, 32, 32]} />
      <meshStandardMaterial color={'#222'} opacity={0.6} trasparent />
    </mesh>
  )
}

function Particles({ particles = [] }) {
  return (
    <group>
      {particles.map(particle => <Particle key={particle.key} particle={particle} />)}
    </group>
  )
}

export default Particles;