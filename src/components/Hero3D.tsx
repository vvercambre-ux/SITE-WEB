"use client";

import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function PremiumSphere({ position, scale, speed = 1, color = "#C9A96E" }: {
  position: [number, number, number];
  scale: number;
  speed?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={0.2}
          speed={2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function PremiumTorus({ position, scale, speed = 1 }: {
  position: [number, number, number];
  scale: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.35, 32, 64]} />
        <meshStandardMaterial
          color="#C9A96E"
          roughness={0.05}
          metalness={0.95}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function PremiumBox({ position, scale }: {
  position: [number, number, number];
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#F5F0EB"
          roughness={0.1}
          metalness={0.6}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFF5E6" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#C9A96E" />

      <PremiumSphere position={[-3.5, 1.5, -2]} scale={0.8} speed={0.8} />
      <PremiumSphere position={[3, -1, -3]} scale={0.5} speed={1.2} color="#F5F0EB" />
      <PremiumTorus position={[2.5, 2, -1]} scale={0.6} speed={0.6} />
      <PremiumTorus position={[-2, -1.5, -2]} scale={0.4} speed={1} />
      <PremiumBox position={[0, -2.5, -4]} scale={0.7} />
      <PremiumBox position={[-4, 0, -3]} scale={0.35} />

      <Environment preset="studio" />
    </>
  );
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none opacity-60">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
