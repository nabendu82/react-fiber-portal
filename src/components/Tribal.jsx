/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Tribal.gltf -o src/components/Tribal.jsx -r public 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Tribal({ hovered, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Tribal.gltf')
  const { actions } = useAnimations(animations, group)
  console.log(actions)

  useEffect(() => {
    const anim = hovered ? "Weapon" : "Idle";
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim].fadeOut(0.5);
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Tribal">
            <skinnedMesh name="Cube102" geometry={nodes.Cube102.geometry} material={materials.Tribal_Main} skeleton={nodes.Cube102.skeleton} />
            <skinnedMesh name="Cube102_1" geometry={nodes.Cube102_1.geometry} material={materials.Tribal_Secondary} skeleton={nodes.Cube102_1.skeleton} />
            <skinnedMesh name="Cube102_2" geometry={nodes.Cube102_2.geometry} material={materials.Tribal_Gold} skeleton={nodes.Cube102_2.skeleton} />
            <skinnedMesh name="Cube102_3" geometry={nodes.Cube102_3.geometry} material={materials.Eye_White} skeleton={nodes.Cube102_3.skeleton} />
            <skinnedMesh name="Cube102_4" geometry={nodes.Cube102_4.geometry} material={materials.Eye_Black} skeleton={nodes.Cube102_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Tribal.gltf')
