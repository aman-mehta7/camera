import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Html, useProgress } from "@react-three/drei";
import ModelCamera from "./Camera";

const Scene = () => {
  // 🔹 Simple loading overlay
  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <div className="r3f-loader">{progress.toFixed(0)} % loaded</div>
      </Html>
    );
  }

  // 🔹 Track viewport width
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Responsive controls — all your power lives here
  const { cameraPosition, modelPosition, modelScale, fov } = useMemo(() => {
    // You decide every breakpoint – total control
    if (width < 640) {
      // Mobile
      return {
        cameraPosition: [2.5, 2, 5],
        modelPosition: [2, 2.5, 0],
        modelScale: 1.0,
        fov: 60,
      };
    } else if (width < 1024) {
      // Tablet
      return {
        cameraPosition: [3, 2.2, 5.8],
        modelPosition: [2.25, 2.6, 0],
        modelScale: 1.4,
        fov: 55,
      };
    } else if (width < 1440) {
      // Laptop
      return {
        cameraPosition: [3.2, 2.3, 6],
        modelPosition: [2.2, 2.7, 0],
        modelScale: 1.7,
        fov: 50,
      };
    } else {
      // Desktop / large
      return {
        cameraPosition: [3.5, 2.4, 6.5],
        modelPosition: [2.4, 3, 0],
        modelScale: 1.9,
        fov: 48,
      };
    }
  }, [width]);

  // 🔹 Render
  return (
    <>
    <section
      className=" lg:block hidden absolute lg:h-[275rem]  inset-0 lg:z-50 -z-10 "
      style={{ background: "transparent" }}
    >
      <div
        className="sticky top-0 h-screen w-full"
        style={{
          background: "transparent",
          // pointerEvents: "none",
        }}
      >
        <Canvas shadows>
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />

            <ambientLight intensity={2} />
            <directionalLight position={[3, 8, 5]} intensity={5} />

            <group
              position={modelPosition}
              scale={modelScale}
              rotation={[Math.PI / 2, Math.PI / 1.15, Math.PI / 2]}
              castShadow
            >
              <ModelCamera />
            </group>

            {/* Subtle shadow receiver plane */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 1.5, 0]}
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.3} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </section>


    <section
      className=" lg:hidden block fixed h-[260rem] z-0 "
      // style={{ background: "transparent" }}
    >
      <div
        className="sticky top-0  h-screen w-full  "
        style={{
          pointerEvents: "none",
        }}
      >

        <Canvas shadows>
          {/* <color attach="background" args={["#f3e7d9"]} /> */}
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />

            <ambientLight intensity={2} />
            <directionalLight position={[3, 8, 5]} intensity={5} />

            <group
              position={modelPosition}
              scale={modelScale}
              rotation={[Math.PI / 2, Math.PI / 1.15, Math.PI / 2]}
              castShadow
            >
              <ModelCamera />
            </group>

            {/* Subtle shadow receiver plane */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 1.5, 0]}
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.3} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </section>
    
    </>
  );
};

export default Scene; 