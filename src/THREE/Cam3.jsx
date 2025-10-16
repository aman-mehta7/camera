
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cam1 (props) {
  const { nodes, materials } = useGLTF( import.meta.env.BASE_URL + 'models/dae_-_bilora_bella_46_camera_-_game_ready_asset.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.424, 0.037, -1.923]} rotation={[-0.391, -0.313, -0.024]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-156.656, 17.256, -788.348]}
            rotation={[-0.031, 0.008, 0.001]}
            scale={3.643}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Low_Top_low_lambert1_0.geometry}
              material={materials.lambert1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Low_Top_low_standardSurface2_0.geometry}
              material={materials.standardSurface2}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail_8_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-31.72, 172.648, -176.981]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={3.594}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail_7_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-44.422, 166.397, -124.445]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={3.594}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Wheel_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[24.144, 129.569, -120.496]}
            rotation={[1.539, 0, 0.003]}
            scale={7.446}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail_5_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-31.767, 160.352, -54.202]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={2.008}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail_4_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[12.61, 223.497, -141.81]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={2.25}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail_2_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-231.612, 163.543, 201.424]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={3.594}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Lens_1_low_standardSurface2_0.geometry}
            material={materials.standardSurface2}
            position={[-7.604, 166.445, -98.647]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={6.853}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail_Top_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-3.301, 124.953, -129.962]}
            rotation={[0.02, -0.008, 0]}
            scale={3.824}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Midden_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-345.574, 14.635, 566.949]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={3.594}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Midden_2_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-277.787, -218.892, 391.631]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={3.594}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Lens_4_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-18.474, 140.232, -101.548]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={[20.768, 9.083, 20.768]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Lens_3_low_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail_3_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-20.725, 145.108, -118.596]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.07, 4.831, 2.07]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Detail1_low_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.287, 157.862, -111.919]}
            rotation={[2.864, -0.892, -1.813]}
            scale={[1.451, 2.387, 1.451]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Cube_low1_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-3.818, 129.211, -68.957]}
            scale={11.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pPlane1_lambert1_0.geometry}
            material={materials.lambert1}
            position={[24.31, 128.061, -117.186]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[16.236, 16.236, 11.615]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Cube_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0.119, 127.527, -122.558]}
            scale={11.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube1_standardSurface2_0.geometry}
            material={materials.standardSurface2}
            position={[-3.509, 149.231, -124.977]}
            rotation={[0, -0.016, 0]}
            scale={8.474}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-3.472, 139.254, -124.682]}
            rotation={[-0.022, -0.002, 0]}
            scale={6.985}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Lens_2_low_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube3_lambert1_0.geometry}
            material={materials.lambert1}
            position={[2.555, 150.821, -113.666]}
            rotation={[1.547, -0.015, -1.578]}
            scale={[1, 0.48, 0.052]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Lens_1_low1_standardSurface2_0.geometry}
            material={materials.standardSurface2}
            position={[-4.672, 162.335, -97.571]}
            rotation={[Math.PI, Math.PI / 10, -1.615]}
            scale={[2.914, 1.98, 1.98]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload( import.meta.env.BASE_URL + 'models/dae_-_bilora_bella_46_camera_-_game_ready_asset.glb')
