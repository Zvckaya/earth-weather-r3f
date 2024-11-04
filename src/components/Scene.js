import { Canvas } from "@react-three/fiber";
import { Light } from "./Lights";
import { Earth } from "./Earth";
import { Weather } from "./Weather";

export function Scene() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 3] }}>
        <color attach="background" args={["rgb(67,127,240) 100%"]}></color>
        <Light />
        <Earth position={[0, -2, 0]} />
        <Weather weather={"clear"} position={[-2, 0, 0]} />
        <Weather weather={"cloud"} position={[-1, 0, 0]} />
        <Weather weather={"clouds"} position={[0, 0, 0]} />
        <Weather weather={"mist"} position={[1, 0, 0]} />
        <Weather weather={"rain"} position={[2, 0, 0]} />
        <Weather weather={"rain2"} position={[0, 1, 0]} />
        <Weather weather={"snow"} position={[0, 2, 0]} />
      </Canvas>
    </>
  );
}
