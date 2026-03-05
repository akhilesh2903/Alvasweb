"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, RoundedBox, Torus, Environment } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 2000 }) {
    const mesh = useRef<THREE.Points>(null!);

    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 15;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 15;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.y = time * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#3b82f6"
                transparent
                opacity={0.3}
                sizeAttenuation
            />
        </points>
    );
}

function FloatingShapes() {
    return (
        <>
            {/* Abstract Microscope-like elements or gear shapes */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                <Sphere args={[0.3, 32, 32]} position={[-3, 2, -2]}>
                    <MeshDistortMaterial color="#3b82f6" speed={3} distort={0.4} opacity={0.6} transparent />
                </Sphere>
            </Float>

            <Float speed={3} rotationIntensity={2} floatIntensity={2} position={[4, -2, -3]}>
                <Torus args={[0.4, 0.1, 16, 32]}>
                    <meshStandardMaterial color="#60a5fa" opacity={0.4} transparent />
                </Torus>
            </Float>

            <Float speed={1.5} rotationIntensity={1} position={[-2, -3, -1]}>
                <RoundedBox args={[0.5, 0.5, 0.5]} radius={0.1}>
                    <meshStandardMaterial color="#93c5fd" opacity={0.5} transparent />
                </RoundedBox>
            </Float>

            <Float speed={4} rotationIntensity={0.5} floatIntensity={3} position={[3, 3, -4]}>
                <Sphere args={[0.2, 32, 32]}>
                    <MeshDistortMaterial color="#2563eb" speed={5} distort={0.6} opacity={0.3} transparent />
                </Sphere>
            </Float>
        </>
    );
}

export default function ParticleBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <Particles />
                <FloatingShapes />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
