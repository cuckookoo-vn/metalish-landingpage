import React from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function Model(props) {
  const { scene } = useGLTF('/model.glb');

  return <primitive object={scene} />;
}

export default function OverviewModel() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} />
      <rectAreaLight />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}

useGLTF.preload('/model.glb');
