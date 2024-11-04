import { Canvas } from "@react-three/fiber";
import { Light } from "./Lights";
import { Earth } from "./Earth";
import { Weather } from "./Weather";
import { useEffect } from "react";
import getCurrentWeather from "../utils/weatherApi";

export function Scene() {
  console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    getCurrentWeather(44.34, 10.99, process.env.REACT_APP_API_KEY);
  });
  return (
    <>
      <Canvas camera={{ position: [0, 1, 3] }}>
        <color attach="background" args={["rgb(67,127,240) 100%"]}></color>
        <Light />
        <Earth position={[0, -2, 0]} />
        <Weather weather={"clear"} position={[-1, 0, 0]} />
        <Weather weather={"cloud"} position={[0, 0, 0]} />
        <Weather weather={"clouds"} position={[1, 0, 0]} />
      </Canvas>
    </>
  );
}
