import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion-3d";

export function Weather(props) {
  const { position, weather, rotationY } = props;
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
    <motion.mesh
      whileHover={{ scale: 1.6, transition: 0.5 }}
      position={position}
      rotation-y={rotationY}
      ref={ref}
    >
      <primitive object={weatherModel} />
    </motion.mesh>
  );
}
