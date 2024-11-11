import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Weather(props) {
  const { position, weather } = props;
  const glb = useLoader(GLTFLoader, "/models/weather.glb");

  const ref = useRef(null);

  // let weatherModel;
  // if (glb.nodes[weather]) {
  //   weatherModel = glb.nodes[weather].clone();
  // } else {
  //   weatherModel = glb.nodes.cloud.clone();
  // }

  const weatherModel = useMemo(() => {
    const cloneModel = glb.nodes[weather] || glb.nodes.cloud;
    return cloneModel.clone();
  }, [weather]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh position={position} ref={ref}>
      <primitive object={weatherModel} />
    </mesh>
  );
}
