/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/MushroomKing.gltf -o src/components/MushroomKing.jsx -r public 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function MushroomKing({ hovered, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/MushroomKing.gltf')
  const { actions } = useAnimations(animations, group)
  console.log(actions)

  useEffect(() => {
    const anim = hovered ? "Punch" : "Idle";
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim].fadeOut(0.5);
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Mushroom">
            <skinnedMesh name="Cube056" geometry={nodes.Cube056.geometry} material={materials.MushroomKing_Secondary} skeleton={nodes.Cube056.skeleton} />
            <skinnedMesh name="Cube056_1" geometry={nodes.Cube056_1.geometry} material={materials.MushroomKing_Main} skeleton={nodes.Cube056_1.skeleton} />
          </group>
          <group name="MushroomKing">
            <skinnedMesh name="Cube047" geometry={nodes.Cube047.geometry} material={materials.MushroomKing_Main} skeleton={nodes.Cube047.skeleton} />
            <skinnedMesh name="Cube047_1" geometry={nodes.Cube047_1.geometry} material={materials.MushroomKing_Secondary} skeleton={nodes.Cube047_1.skeleton} />
            <skinnedMesh name="Cube047_2" geometry={nodes.Cube047_2.geometry} material={materials.Orc_Main} skeleton={nodes.Cube047_2.skeleton} />
            <skinnedMesh name="Cube047_3" geometry={nodes.Cube047_3.geometry} material={materials.Eye_Black} skeleton={nodes.Cube047_3.skeleton} />
            <skinnedMesh name="Cube047_4" geometry={nodes.Cube047_4.geometry} material={materials.Eye_White} skeleton={nodes.Cube047_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/MushroomKing.gltf')
