import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion-3d";

export function Earth(props) {
  const glb = useLoader(GLTFLoader, "/models/earth.glb");
  const ref = useRef(null);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1;
  });

  const [isHover, setHover] = useState();

  // glb.scene.position.x = 1;
  // glb.scene.rotation.y = 1;
  return (
    <motion.mesh
      rotation-x={-Math.PI / 2}
      ref={ref}
      scale={1.3}
      position={[0, -2, 0]}
      whileHover={{ scale: 1.6 }}
    >
      <primitive object={glb.scene} />
    </motion.mesh>
  );
}
