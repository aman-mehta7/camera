



import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CameraModel() {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    import.meta.env.BASE_URL + "models/cam1.glb"
  );

    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: "body",
          start: "top top",
          end: "center -50%",
          scrub: true,
        },
      });

      // SCENE 1 -> SCENE 2
      tl.addLabel("scene1")
        .to(group.current.rotation, { x: -1.16, y: 0, duration: 0.05 }, "scene1")
        .to(group.current.position, { y: 0.5, z: 0.5, duration: 0.05 }, "scene1")
        .to(group.current.scale, { x: 1.15, y: 1.15, z: 1.15,  duration: 0.05 }, "scene1")

        // SCENE 2 -> SCENE 3
        .addLabel("scene2")
        .to(group.current.rotation, { x: -0.5, y: 0, duration: 0.1 }, "scene2+=0.05")
        .to(group.current.position, { y: 0.2, z: 0.5, duration: 0.1}, "scene2+=0.05")
        .to(group.current.scale, { x: 1.1, y: 1.1, z: 1.1,  duration: 0.1 }, "scene2+=0.05")

        // SCENE 3 -> SCENE 4
        .addLabel("scene3")
        .to(group.current.rotation, { x:0.4, y: 3, duration: 0.1 }, "scene3")
        .to(group.current.position, { y: 0, z: 0, duration: 0.1}, "scene3")
        .to(group.current.scale, { x: 1, y: 1, z: 1,  duration: 0.1 }, "scene3")

        // SCENE 4
        // .addLabel("scene4")
        // .to(group.current.position, { y: 0, z: -0.2, duration: 0.1}, "scene4")
        // .to(group.current.scale, { x: 1, y: 1, z: 1,  duration: 0.1 }, "scene4")

        // optional light color shift
        // .to(ambLight.current, { intensity: 5, color: "#fff7d6" }, "scene2");
    }, []);

  return (
    <group ref={group} position={[0, 0, 0]}  scale={1}>
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

useGLTF.preload(import.meta.env.BASE_URL + "models/cam1.glb");