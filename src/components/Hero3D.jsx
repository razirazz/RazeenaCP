import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AnimatedSphere() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.004;
  });

  return (
    <Sphere ref={mesh} args={[1.4, 64, 64]}>
      <meshStandardMaterial
        wireframe
        emissive="#6366f1"
        color="#6366f1"
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
}