import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

export default function Camera(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    import.meta.env.BASE_URL + "models/antique_movie_camera (1).glb"
  );

  useEffect(() => {
    if (!group.current) return;

    // Convert degrees to radians (Three.js uses radians)
    const degToRad = (deg) => (deg * Math.PI) / 180;

    // 20° ≈ 0.35 radians
    const rotateAmount = degToRad(20);

    // Current rotation (so we can return to it)
    gsap.to(group.current.rotation, {
      x: -(rotateAmount),
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_Camera_0.geometry}
          material={materials.Camera}
          position={[-4.1, 0.052, -17.143]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

// Preload for faster initial render
useGLTF.preload(
  import.meta.env.BASE_URL + "models/antique_movie_camera (1).glb"
);