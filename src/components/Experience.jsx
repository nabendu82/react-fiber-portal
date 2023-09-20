import { MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Yeti } from "./Yeti";
import { Tribal } from "./Tribal";
import { MushroomKing } from "./MushroomKing";
import { useState } from "react";

export const Experience = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <MonsterStage texture={"textures/surreal_water_world.jpg"} hovered={hovered} setHovered={setHovered}>
        <Tribal scale={0.5} position-y={-1} hovered={hovered} />
      </MonsterStage>
      <MonsterStage texture={"textures/anime_art_style_lava_world.jpg"} position-x={-2.5} rotation-y={Math.PI / 8} hovered={hovered} setHovered={setHovered}>
        <MushroomKing scale={0.5} position-y={-1} hovered={hovered} />
      </MonsterStage>
      <MonsterStage texture={"textures/anime_art_style_cactus_forest.jpg"} position-x={2.5} rotation-y={-Math.PI / 8} hovered={hovered} setHovered={setHovered}>
        <Yeti scale={0.6} position-y={-1} hovered={hovered} />
      </MonsterStage>
    </>
  );
};

const MonsterStage = ({ children, texture, hovered, setHovered, ...props }) => {
  const map = useTexture(texture)
  return (
    <group {...props}>
      <RoundedBox args={[2, 3, 0.1]} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          {children}
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  )
}
