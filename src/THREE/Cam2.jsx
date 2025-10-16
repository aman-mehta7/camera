
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cam2 (props) {
  const { nodes, materials } = useGLTF( import.meta.env.BASE_URL + 'models/vintage_camera__asahi_pentax_h2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -158.303, -36.691]} rotation={[1.572, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group position={[132.225, -54.021, 99.872]} rotation={[0.385, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rings_LP_Bag_0.geometry}
              material={materials.material}
              position={[8.999, -3.647, -0.322]}
            />
          </group>
          <group position={[-159.395, -45.706, 54.735]} rotation={[2.289, 0.475, -0.172]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pins_LP_Bag_0.geometry}
              material={materials.material}
              position={[0, 0, -4.911]}
            />
          </group>
          <group
            position={[-1.745, -53.686, 77.802]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.045, 1, 1.19]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bag_LP_Bag_0.geometry}
              material={materials.material}
              position={[-0.414, 0, -53.902]}
            />
          </group>
          <group position={[6.363, -64.796, 98.017]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_LP_Device_0.geometry}
              material={materials.Device}
              position={[-8.521, -20.215, -65.012]}
            />
          </group>
          <group position={[6.388, -140.465, 76.458]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LensInside_LP_Bag_0.geometry}
              material={materials.material}
              position={[0, 0, -4.618]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ViewPort_LP_Device_0.geometry}
            material={materials.Device}
            position={[6.445, -28.905, 136.766]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop3_Onder_LP_Device_0.geometry}
            material={materials.Device}
            position={[-52.905, -50.099, 134.759]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop4_LP_Device_0.geometry}
            material={materials.Device}
            position={[88.291, -52.688, 139.504]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop1_LP_Device_0.geometry}
            material={materials.Device}
            position={[-94.508, -52.74, 140.448]}
            rotation={[0, 0, -1.174]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop2_LP_Device_0.geometry}
            material={materials.Device}
            position={[-67.328, -69.559, 135.039]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop1_Onder_LP_Device_0.geometry}
            material={materials.Device}
            position={[-73.817, -38.806, 135.334]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop4_Onder_LP_Device_0.geometry}
            material={materials.Device}
            position={[88.411, -52.43, 136.009]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop3_LP_Device_0.geometry}
            material={materials.Device}
            position={[-52.905, -50.099, 144.589]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Knop5_LP_Device_0.geometry}
            material={materials.Device}
            position={[-66.757, -79.764, 105.614]}
            rotation={[Math.PI / 2, 0, -0.397]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Haakjes_LP_Bag_0.geometry}
            material={materials.material}
            position={[126.499, -59.595, 101.854]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ribbon_LP_Bag_0.geometry}
            material={materials.material}
            position={[-9.331, 62.876, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.IronPieces_LP_Bag_0.geometry}
            material={materials.material}
            position={[66.948, -83.725, 20.02]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lence_LP_Bag_0.geometry}
            material={materials.material}
            position={[6.388, -103.521, 76.458]}
            rotation={[Math.PI / 2, 0, -1.57]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Iris_LP_Lens_0.geometry}
            material={materials.Lens}
            position={[6.388, -144.803, 76.459]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload( import.meta.env.BASE_URL + 'models/vintage_camera__asahi_pentax_h2.glb')