import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Scene = ({ children }) => {
  return (
    <Canvas gl={{antialias:true}} dpr={[1,1,1.5]}>
      {/* <OrbitControls /> */}
      <ambientLight intensity={4} />
      {/* Lighting setup */}
      {children}
    </Canvas>
  );
};

export default Scene;
