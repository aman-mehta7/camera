import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ModelCamera from "./Camera";

const Scene = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { cameraPosition, modelPosition, modelScale } = useMemo(() => {
    const minWidth = 360;
    const maxWidth = 1440;
    const normalized = Math.min(Math.max(width, minWidth), maxWidth);
    const scale =
      1 + ((normalized - minWidth) / (maxWidth - minWidth)) * (1.9 - 1.0);

    return {
      cameraPosition: [3, 2, 6],
      modelPosition: [2, 2.7, 0],
      modelScale: scale,
    };
  }, [width]);

  return (
    <section
      className="absolute h-[475dvh] inset-0 z-40"
      style={{ background: "transparent" }}
    >
      <div
        className="sticky top-0 h-screen w-full"
        style={{
          background: "transparent",
          pointerEvents: "none", // allows overlapping HTML to remain clickable
        }}
      >
        <Canvas shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />

            <ambientLight intensity={2} />
            <directionalLight
              position={[3, 8, 5]}
              intensity={5}
              // castShadow
              // shadow-mapSize-width={1024}
              // shadow-mapSize-height={1024}
            />
            {/* <pointLight
              position={[6, 6, 2]}
              intensity={10}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            /> */}

            <group
              position={modelPosition}
              scale={modelScale}
              rotation={[Math.PI / 2, Math.PI / 1.15, Math.PI / 2]}
              castShadow
            >
              <ModelCamera />
            </group>

            {/* invisible plane catching paper‑like shadow */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 1.5, 0]}
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.3} />
            </mesh>
            {/* <OrbitControls enableZoom={true} /> */}
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Scene;



