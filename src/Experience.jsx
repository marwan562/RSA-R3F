import React, { Suspense } from "react";
import Scene from "./Scene";
import Model from "./Model";
import { ScrollControls, useProgress } from "@react-three/drei";

function Loader() {
  const { active, progress } = useProgress();

  return <HTML center>{progress.toFixed(1)} % Loaded...</HTML>;
}

function Experience() {
  return (
    <Scene>
      <ScrollControls pages={10} damping={0.5}>
        <Model />
      </ScrollControls>
    </Scene>
  );
}

export default Experience;
