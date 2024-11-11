import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

// 로딩 중일 때 보여줄 Sphere 컴포넌트
// function Sphere() {
//   return (
//     <mesh>
//       <sphereGeometry args={[1]} />
//       <meshBasicMaterial color="white" />
//     </mesh>
//   );
// }

// Scene 컴포넌트를 lazy 로딩
const LazyScene = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Scene"));
    }, 1000);
  });
});

export function Home() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense>
          <LazyScene />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
