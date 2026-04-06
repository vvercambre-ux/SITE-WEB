"use client";

import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

/* Puffer-inspired soft sphere — mimics the puffy bag texture */
function PufferSphere({ position, scale, speed = 1, color = "#C8924A" }: {
  position: [number, number, number];
  scale: number;
  speed?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2 * speed) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1 * speed;
    }
  });

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.25}
          metalness={0.6}
          distort={0.35}
          speed={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

/* Soft wobbling torus — represents movement/dynamism */
function WobbleTorus({ position, scale, speed = 1, color = "#4A5A3A" }: {
  position: [number, number, number];
  scale: number;
  speed?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <Float speed={0.8 * speed} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 64, 128]} />
        <MeshWobbleMaterial
          color={color}
          roughness={0.15}
          metalness={0.85}
          factor={0.15}
          speed={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

/* Chunky rounded box — inspired by sneaker chunky soles */
function ChunkyBox({ position, scale, color = "#F5ECD7" }: {
  position: [number, number, number];
  scale: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1.5, 0.6, 1.2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.5}
          transparent
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

/* Small glowing particle orbs */
function GlowOrb({ position, color = "#C8924A", size = 0.08 }: {
  position: [number, number, number];
  color?: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient warm lighting */}
      <ambientLight intensity={0.3} color="#F5ECD7" />
      <directionalLight position={[10, 8, 5]} intensity={0.8} color="#FFF5E6" />
      <pointLight position={[-5, 5, 3]} intensity={0.6} color="#C8924A" distance={15} />
      <pointLight position={[4, -3, 2]} intensity={0.4} color="#4A5A3A" distance={12} />
      <pointLight position={[0, 3, -2]} intensity={0.3} color="#B5623A" distance={10} />

      {/* Main puffer spheres — representing the puffy bags */}
      <PufferSphere position={[-3.2, 1.8, -2]} scale={1.1} speed={0.6} color="#1A1A1A" />
      <PufferSphere position={[3.5, -0.5, -3]} scale={0.7} speed={0.9} color="#4A5A3A" />
      <PufferSphere position={[-1, -2, -4]} scale={0.5} speed={1.1} color="#F5ECD7" />

      {/* Torus rings — futuristic orbits */}
      <WobbleTorus position={[2.8, 2.2, -1.5]} scale={0.55} speed={0.5} color="#C8924A" />
      <WobbleTorus position={[-2.5, -1.2, -2.5]} scale={0.35} speed={0.8} color="#B5623A" />

      {/* Chunky boxes — sneaker sole vibes */}
      <ChunkyBox position={[0.5, -2.8, -3]} scale={0.6} color="#E8DFD0" />
      <ChunkyBox position={[-4, 0.5, -3.5]} scale={0.35} color="#C8924A" />

      {/* Floating glow particles */}
      <GlowOrb position={[-2, 3, -1]} color="#C8924A" size={0.06} />
      <GlowOrb position={[1.5, 2.5, -2]} color="#C8924A" size={0.04} />
      <GlowOrb position={[3, -1.5, -1.5]} color="#4A5A3A" size={0.05} />
      <GlowOrb position={[-3, -2, -1]} color="#B5623A" size={0.04} />
      <GlowOrb position={[0, 1, -0.5]} color="#F5ECD7" size={0.03} />
      <GlowOrb position={[-1.5, 0.5, -1]} color="#C8924A" size={0.05} />
      <GlowOrb position={[2, 0, -2]} color="#1B6B4A" size={0.04} />

      <Environment preset="city" />
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
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.75 }}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
