import React, { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ModelCamera from "./Camera";

// Custom hook to detect screen size breakpoints
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  
useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  
  return matches;
};

const Scene = () => {
  // Responsive breakpoints
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  // Compute camera and model settings based on screen
  const { cameraPosition, modelPosition, modelScale } = useMemo(() => {
    if (isMobile) {
      return {
        cameraPosition: [3, 2, 6],
        modelPosition: [2.2, 2.3, 0],
        modelScale: 1.2,
      };
    }
    if (isTablet) {
      return {
        cameraPosition: [3, 2, 6],
        modelPosition: [2, 2.3, 0],
        modelScale: 1.5,
      };
    }
    // Desktop default
    return {
      cameraPosition: [3, 2, 6],
      modelPosition: [2, 2.3, 0],
      modelScale: 1.7,
    };
  }, [isMobile, isTablet]);

  return (
    <section className="fixed inset-0 z-40">
      <Canvas shadows>
        {/* Main camera */}
        <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />

        {/* Lighting setup */}
        <ambientLight intensity={5} />
        <directionalLight position={[5, 3, 1]} intensity={2} castShadow />
        <directionalLight position={[0, 0, -1]} intensity={2} castShadow />

        {/* 3D Model */}
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