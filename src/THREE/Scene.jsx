import React, { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ModelCamera from "./Camera";

const Scene = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // Update width when window resizes
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute camera, position, and model scale dynamically
  const { cameraPosition, modelPosition, modelScale } = useMemo(() => {
    // Clamp widths to a sensible range for predictable behavior
    const minWidth = 360;
    const maxWidth = 1440;
    const normalized = Math.min(Math.max(width, minWidth), maxWidth);
    // Map width to scale range — larger screen → larger model
    const scale = 1 + (normalized - minWidth) / (maxWidth - minWidth) * (1.9 - 1.0);

    return {
      cameraPosition: [3, 2, 6],
      modelPosition: [2, 2.3, 0],
      modelScale: scale,
    };
  }, [width]);

  return (
    <section className="fixed inset-0 z-40">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />

        <ambientLight intensity={5} />
        <directionalLight position={[5, 3, 1]} intensity={2} castShadow />
        <directionalLight position={[0, 0, -1]} intensity={2} castShadow />

        <group
          position={modelPosition}
          scale={modelScale}
          rotation={[Math.PI / 2, -Math.PI / 1, Math.PI / 2]}
        >
          <ModelCamera />
        </group>
      </Canvas>
    </section>
  );
};

export default Scene;