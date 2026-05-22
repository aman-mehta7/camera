import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cam1 from "../THREE/Cam3";
import Cam2 from "../THREE/Cam2";
import { Html, useProgress } from "@react-three/drei";

const Pg5 = () => {
  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <div className="r3f-loader">{progress.toFixed(0)} % loaded</div>
      </Html>
    );
  }

  return (
    <section className="h-screen w-full">
      <Canvas shadows>
        <color attach="background" args={["#f3e7d9"]} />

        <Suspense fallback={<Loader />}>
          {/* Gentle lighting setup */}
          <ambientLight intensity={4} />
          <directionalLight
            position={[1, 1, 0]}
            intensity={10}
          />

          {/* Your models */}
          <group
            position={[19, -9 , -3]}
            rotation={[Math.PI / 10, Math.PI / 4, Math.PI / 4]}
            scale={8}
            castShadow
            receiveShadow
          >
            <Cam1 />
          </group>

          <group
            position={[-5, 0, 0]}
            rotation={[0, Math.PI / 15, Math.PI / 4]}
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

// import React from "react";


// const Pg5 = () => {
//   return (
//     <section className=" hidden  relative bg-transparent h-screen w-full lg:flex items-center justify-center">
//       <div className=" relative lg:h-[80vh] h-[50vh]  lg:w-[35vw] w-[70vw] border-5 border-black rounded-2xl flex items-end justify-center lg:gap-20 gap-5 ml-5 p-10 lg:bg-gradient-to-tr from-[#390c83] to-[#c76c16]">
//         <button className=" px-4 py-2  rounded-sm cursor-pointer font-bold bg-[brown] text-[white]">
//           EXPLORE
//         </button>
//         <button className="px-4 py-2  rounded-sm cursor-pointer font-bold bg-[brown] text-[white] text-nowrap">
//           BUY NOW
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Pg5;
