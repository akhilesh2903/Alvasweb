"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    Sphere,
    MeshDistortMaterial,
    Torus,
    Box,
    PerspectiveCamera,
    Stars,
} from "@react-three/drei";
import * as THREE from "three";

/* ──────────────────────────────────────────────
   ANIMATED PARTICLES – instanced spheres
────────────────────────────────────────────── */
function Particles({ count = 80 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);

    const particles = useMemo(() => {
        return Array.from({ length: count }, () => ({
            time: Math.random() * 100,
            factor: 20 + Math.random() * 100,
            speed: (0.01 + Math.random() * 0.015) / 2,
            x: (Math.random() - 0.5) * 60,
            y: (Math.random() - 0.5) * 60,
            z: (Math.random() - 0.5) * 30,
        }));
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        particles.forEach((p, i) => {
            p.time += p.speed;
            const t = p.time;
            dummy.position.set(
                p.x + Math.cos((t / 10) * p.factor) + (Math.sin(t) * p.factor) / 10,
                p.y + Math.sin((t / 10) * p.factor) + (Math.cos(t * 2) * p.factor) / 10,
                p.z + Math.cos((t / 10) * p.factor)
            );
            const s = 0.05 + 0.08 * Math.abs(Math.sin(t * 0.5));
            dummy.scale.setScalar(s);
            dummy.updateMatrix();
            mesh.current?.setMatrixAt(i, dummy.matrix);
        });
        if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#1E2A78" opacity={0.25} transparent />
        </instancedMesh>
    );
}

/* ──────────────────────────────────────────────
   DNA HELIX – two intertwined sinusoidal strands
────────────────────────────────────────────── */
function DNAHelix() {
    const groupRef = useRef<THREE.Group>(null);

    const points1 = useMemo(() =>
        Array.from({ length: 40 }, (_, i) => {
            const t = (i / 40) * Math.PI * 4;
            return new THREE.Vector3(Math.cos(t) * 2, (i / 40) * 30 - 15, Math.sin(t) * 2);
        }), []);

    const points2 = useMemo(() =>
        Array.from({ length: 40 }, (_, i) => {
            const t = (i / 40) * Math.PI * 4 + Math.PI;
            return new THREE.Vector3(Math.cos(t) * 2, (i / 40) * 30 - 15, Math.sin(t) * 2);
        }), []);

    const curve1 = useMemo(() => new THREE.CatmullRomCurve3(points1), [points1]);
    const curve2 = useMemo(() => new THREE.CatmullRomCurve3(points2), [points2]);
    const geo1 = useMemo(() => new THREE.TubeGeometry(curve1, 80, 0.04, 8, false), [curve1]);
    const geo2 = useMemo(() => new THREE.TubeGeometry(curve2, 80, 0.04, 8, false), [curve2]);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <group ref={groupRef} position={[-18, 0, -10]}>
            <mesh geometry={geo1}>
                <meshStandardMaterial color="#1E2A78" opacity={0.6} transparent emissive="#1E2A78" emissiveIntensity={0.3} />
            </mesh>
            <mesh geometry={geo2}>
                <meshStandardMaterial color="#F4C430" opacity={0.6} transparent emissive="#F4C430" emissiveIntensity={0.3} />
            </mesh>
            {/* rungs */}
            {Array.from({ length: 10 }, (_, i) => {
                const t = (i / 10) * Math.PI * 4;
                const y = (i / 10) * 30 - 15;
                return (
                    <mesh key={i} position={[0, y, 0]} rotation={[0, t, 0]}>
                        <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
                        <meshStandardMaterial color="#6366f1" opacity={0.5} transparent />
                    </mesh>
                );
            })}
        </group>
    );
}

/* ──────────────────────────────────────────────
   ORBITAL RINGS – concentric rotating toruses
────────────────────────────────────────────── */
function OrbitalRings() {
    const r1 = useRef<THREE.Mesh>(null);
    const r2 = useRef<THREE.Mesh>(null);
    const r3 = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (r1.current) r1.current.rotation.z = t * 0.3;
        if (r2.current) { r2.current.rotation.x = t * 0.2; r2.current.rotation.y = t * 0.1; }
        if (r3.current) r3.current.rotation.y = -t * 0.25;
    });

    return (
        <group position={[18, 0, -5]}>
            <mesh ref={r1}>
                <Torus args={[5, 0.06, 16, 100]} />
                <meshStandardMaterial color="#F4C430" opacity={0.5} transparent wireframe />
            </mesh>
            <mesh ref={r2} rotation={[Math.PI / 3, 0, 0]}>
                <Torus args={[7, 0.04, 16, 100]} />
                <meshStandardMaterial color="#1E2A78" opacity={0.35} transparent wireframe />
            </mesh>
            <mesh ref={r3} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
                <Torus args={[9, 0.03, 16, 100]} />
                <meshStandardMaterial color="#6366f1" opacity={0.25} transparent wireframe />
            </mesh>
            {/* central sphere */}
            <Float speed={3} floatIntensity={1}>
                <Sphere args={[1.2, 32, 32]}>
                    <MeshDistortMaterial color="#F4C430" speed={4} distort={0.5} radius={1} opacity={0.8} transparent />
                </Sphere>
            </Float>
        </group>
    );
}

/* ──────────────────────────────────────────────
   FLOATING GEOMETRIC SHAPES
────────────────────────────────────────────── */
function GeometricShapes() {
    return (
        <>
            {/* Top left morphing sphere */}
            <Float speed={1.5} rotationIntensity={0.8} floatIntensity={2} position={[-8, 8, -8]}>
                <Sphere args={[1.5, 64, 64]}>
                    <MeshDistortMaterial color="#3b82f6" speed={3} distort={0.55} radius={1} opacity={0.5} transparent />
                </Sphere>
            </Float>

            {/* Rotating wireframe icosahedron (simulated with box) */}
            <Float speed={2} rotationIntensity={2.5} floatIntensity={1} position={[6, -8, -12]}>
                <mesh>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial color="#1E2A78" wireframe opacity={0.4} transparent />
                </mesh>
            </Float>

            {/* Spinning torus knot on right */}
            <Float speed={1} rotationIntensity={1.5} floatIntensity={2.5} position={[10, 6, -15]}>
                <mesh>
                    <torusKnotGeometry args={[1.2, 0.35, 100, 16]} />
                    <meshStandardMaterial color="#F4C430" opacity={0.35} transparent emissive="#F4C430" emissiveIntensity={0.15} />
                </mesh>
            </Float>

            {/* Grid-wireframe box top-right */}
            <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5} position={[-12, -6, -10]}>
                <Box args={[2, 2, 2]}>
                    <meshStandardMaterial color="#6366f1" wireframe opacity={0.4} transparent />
                </Box>
            </Float>

            {/* Bottom center – large hollow ring */}
            <Float speed={0.8} rotationIntensity={0.4} floatIntensity={1} position={[0, -10, -20]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <Torus args={[6, 0.12, 16, 80]} />
                    <meshStandardMaterial color="#1E2A78" opacity={0.2} transparent />
                </mesh>
            </Float>
        </>
    );
}

/* ──────────────────────────────────────────────
   AMBIENT DATA LINES – flowing line field
────────────────────────────────────────────── */
function DataLines() {
    const linesRef = useRef<THREE.LineSegments>(null);
    const count = 40;

    const { positions, indices } = useMemo(() => {
        const pos: number[] = [];
        const idx: number[] = [];
        for (let i = 0; i < count; i++) {
            const x1 = (Math.random() - 0.5) * 50;
            const y1 = (Math.random() - 0.5) * 40;
            const z1 = (Math.random() - 0.5) * 20 - 10;
            const x2 = x1 + (Math.random() - 0.5) * 8;
            const y2 = y1 + (Math.random() - 0.5) * 8;
            const z2 = z1;
            const base = i * 2;
            pos.push(x1, y1, z1, x2, y2, z2);
            idx.push(base, base + 1);
        }
        return { positions: new Float32Array(pos), indices: new Uint16Array(idx) };
    }, []);

    const geo = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        g.setIndex(new THREE.BufferAttribute(indices, 1));
        return g;
    }, [positions, indices]);

    useFrame(({ clock }) => {
        if (linesRef.current) {
            linesRef.current.rotation.y = clock.getElapsedTime() * 0.03;
        }
    });

    return (
        <lineSegments ref={linesRef} geometry={geo}>
            <lineBasicMaterial color="#1E2A78" opacity={0.15} transparent />
        </lineSegments>
    );
}

/* ──────────────────────────────────────────────
   MAIN EXPORT
────────────────────────────────────────────── */
export default function PlacementBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={60} />

                {/* Lighting */}
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#F4C430" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#1E2A78" />
                <pointLight position={[0, 20, 5]} intensity={0.8} color="#6366f1" />

                {/* Background stars */}
                <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade speed={1} />

                {/* All elements */}
                <Particles count={80} />
                <DNAHelix />
                <OrbitalRings />
                <GeometricShapes />
                <DataLines />
            </Canvas>

            {/* Frosted overlay - keeps text readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40" />
        </div>
    );
}
