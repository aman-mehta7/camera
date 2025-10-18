import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cam1 from "../THREE/Cam3";
import Cam2 from "../THREE/Cam2";

const Pg5 = () => {
  return (
    <section className="h-screen w-full">
      <Canvas shadows>
        <color attach="background" args={["#f3e7d9"]} />

        <Suspense fallback={null}>
          {/* Gentle lighting setup */}
          <ambientLight intensity={4} />
          <directionalLight
            position={[1, 1, 0]}
            intensity={10}
            // castShadow
            // shadow-mapSize-width={1024}
            // shadow-mapSize-height={1024}
          />
          {/* <directionalLight
            position={[15, 2, 1]}
            intensity={10}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          /> */}

          {/* Your models */}
          <group
            position={[13, -23, -3]}
            rotation={[Math.PI / 10, 0, 0]}
            scale={10}
            castShadow
            receiveShadow
          >
            <Cam1 />
          </group>

          <group
            position={[-4, 1, 0]}
            rotation={[0, Math.PI / 15, 0]}
            scale={0.013}
            castShadow
            receiveShadow
          >
            <Cam2 />
          </group>

          {/* Invisible “paper” with soft shadow catching */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            {/* Make the plane invisible but still catch shadows */}
            <shadowMaterial transparent opacity={0.3} />
          </mesh>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Pg5;
