import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

useGLTF.preload("/models/robot_playground.glb");

const Model = () => {
  const group = useRef(null);
  const { nodes, materials, scene, animations } = useGLTF(
    "/models/robot_playground.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();
  const audio = new Audio("/audio/i-miss-the-rage-wav-194890.mp3")

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play();
      audio.play()
    }
  }, []);

  useFrame(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].time =
        (actions["Experiment"].getClip().duration * scroll.offset);
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
