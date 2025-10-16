import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cam1 from "../THREE/Cam3";
import Cam2 from "../THREE/Cam2";

const Pg5 = () => {
  return (
    <section className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
        <ambientLight intensity={5} />
        <directionalLight position={[0, 3, 5]} />
        <group position={[13, -17, -3]} rotation={[Math.PI/10, 0, 0]} scale={10}>
          <Cam1 />
        </group>
        <group position={[-4, 1, 0]} rotation={[0, Math.PI/15, 0]} scale={0.013}>
          <Cam2 />
        </group>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Pg5;
