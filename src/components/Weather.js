import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Weather(props) {
  const { position, weather } = props;
  const glb = useLoader(GLTFLoader, "/models/weather.glb");
  console.log(glb);
  return (
    <mesh position={position}>
      {/* <primitive object={glb.scene.children[0]} /> */}
      <primitive object={glb.nodes[weather]} />
    </mesh>
  );
}
