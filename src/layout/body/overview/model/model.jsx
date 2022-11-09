import React from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model(props) {
    // const { scene } = useGLTF(
    //   'https://d1a370nemizbjq.cloudfront.net/f8e25565-9091-474b-aed9-67625f51855a.glb'
    // );
  const { scene } = useGLTF('');
  return <primitive object={scene} />;
}

export default function OverviewModel() {
  return (
    <Canvas
      pixelRatio={[1, 2]}
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
