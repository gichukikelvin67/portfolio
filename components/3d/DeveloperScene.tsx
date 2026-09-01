"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  RoundedBox,
  Sparkles,
  Text,
  Torus,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MainCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.25;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.25}
      floatIntensity={0.7}
    >
      <group ref={groupRef}>

        {/* Main 3D body */}
        <RoundedBox
          args={[2.5, 2.5, 2.5]}
          radius={0.35}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#111827"
            metalness={0.8}
            roughness={0.22}
          />
        </RoundedBox>

        {/* Inner glass layer */}
        <RoundedBox
          args={[2.15, 2.15, 2.15]}
          radius={0.28}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.65}
            roughness={0.15}
            transparent
            opacity={0.8}
          />
        </RoundedBox>

        {/* Center code symbol */}
        <Text
          position={[0, 0.25, 1.15]}
          fontSize={0.48}
          color="#34d399"
          anchorX="center"
          anchorY="middle"
        >
          {"</>"}
        </Text>

        <Text
          position={[0, -0.35, 1.15]}
          fontSize={0.19}
          color="#d1d5db"
          anchorX="center"
          anchorY="middle"
        >
          FULL-STACK
        </Text>

        <Text
          position={[0, -0.62, 1.15]}
          fontSize={0.13}
          color="#9ca3af"
          anchorX="center"
          anchorY="middle"
        >
          SOFTWARE DEVELOPER
        </Text>

      </group>
    </Float>
  );
}


function OrbitRing({
  rotation,
  color,
  radius,
}: {
  rotation: [number, number, number];
  color: string;
  radius: number;
}) {
  return (
    <Torus
      args={[radius, 0.012, 16, 100]}
      rotation={rotation}
    >
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.35}
      />
    </Torus>
  );
}


function TechNode({
  position,
  label,
  color,
}: {
  position: [number, number, number];
  label: string;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x =
      state.clock.elapsedTime * 0.8;

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.7;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <group position={position}>

        <mesh ref={ref}>
          <icosahedronGeometry args={[0.22, 1]} />

          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>

        <Text
          position={[0, -0.45, 0]}
          fontSize={0.16}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>

      </group>
    </Float>
  );
}


function ConnectionLine({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end),
  ];

  return (
    <line>
      <bufferGeometry
        attach="geometry"
        setFromPoints={points}
      />

      <lineBasicMaterial
        color="#10b981"
        transparent
        opacity={0.18}
      />
    </line>
  );
}


function Scene() {
  return (
    <>
      {/* Lighting */}

      <ambientLight intensity={1.2} />

      <pointLight
        position={[4, 4, 5]}
        intensity={20}
        color="#34d399"
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={15}
        color="#22d3ee"
      />

      <pointLight
        position={[0, 4, -4]}
        intensity={12}
        color="#a78bfa"
      />


      {/* Floating particles */}

      <Sparkles
        count={70}
        scale={[7, 7, 5]}
        size={2}
        speed={0.25}
      />


      {/* Main object */}

      <MainCore />


      {/* Orbit rings */}

      <OrbitRing
        radius={2}
        rotation={[Math.PI / 2.4, 0.3, 0]}
        color="#10b981"
      />

      <OrbitRing
        radius={2.35}
        rotation={[0.7, Math.PI / 2, 0.4]}
        color="#22d3ee"
      />

      <OrbitRing
        radius={2.7}
        rotation={[1.3, 0.2, Math.PI / 3]}
        color="#a78bfa"
      />


      {/* Technology nodes */}

      <TechNode
        position={[-2.7, 1.4, 0]}
        label="React"
        color="#22d3ee"
      />

      <TechNode
        position={[2.7, 1.3, 0]}
        label="Node.js"
        color="#22c55e"
      />

      <TechNode
        position={[-2.5, -1.5, 0]}
        label="MongoDB"
        color="#10b981"
      />

      <TechNode
        position={[2.5, -1.5, 0]}
        label="Express"
        color="#d1d5db"
      />

      <TechNode
        position={[0, 2.7, 0]}
        label="TypeScript"
        color="#3b82f6"
      />


      {/* Connections */}

      <ConnectionLine
        start={[-1.25, 0.8, 0]}
        end={[-2.7, 1.4, 0]}
      />

      <ConnectionLine
        start={[1.25, 0.8, 0]}
        end={[2.7, 1.3, 0]}
      />

      <ConnectionLine
        start={[-1.25, -0.8, 0]}
        end={[-2.5, -1.5, 0]}
      />

      <ConnectionLine
        start={[1.25, -0.8, 0]}
        end={[2.5, -1.5, 0]}
      />

      <ConnectionLine
        start={[0, 1.25, 0]}
        end={[0, 2.7, 0]}
      />


      {/* Camera controls */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}


export default function DeveloperScene() {
  return (
    <div className="h-[540px] w-full">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}