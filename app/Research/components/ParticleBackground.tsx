"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  Torus,
  Environment,
  Icosahedron,
  Octahedron,
  Dodecahedron,
} from "@react-three/drei";
import * as THREE from "three";

/* ─── Floating research particles ─── */
function Particles({ count = 3000 }) {
  const mesh = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#3b82f6"),
      new THREE.Color("#6366f1"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#10b981"),
      new THREE.Color("#f59e0b"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 22;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.012;
    mesh.current.rotation.x = Math.sin(t * 0.008) * 0.08;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.25}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── DNA Double Helix ─── */
function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null!);
  const helixPoints = 50;
  const helixRadius = 0.4;
  const helixHeight = 6;
  const turns = 3;

  const [spherePositions, connectorData] = useMemo(() => {
    const positions: [number, number, number, string][] = [];
    const connectors: [number, number, number, number, number, number][] = [];
    for (let i = 0; i < helixPoints; i++) {
      const t = i / helixPoints;
      const angle = t * Math.PI * 2 * turns;
      const y = t * helixHeight - helixHeight / 2;
      const x1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;
      const x2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;
      positions.push([x1, y, z1, "#3b82f6"]);
      positions.push([x2, y, z2, "#8b5cf6"]);
      if (i % 3 === 0) connectors.push([x1, y, z1, x2, y, z2]);
    }
    return [positions, connectors];
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
  });

  return (
    <group ref={groupRef} position={[-5, 0.5, -4]} scale={0.65}>
      {spherePositions.map(([x, y, z, color], i) => (
        <mesh key={`dna-${i}`} position={[x, y, z]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.15}
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
      {connectorData.map(([x1, y1, z1, x2, y2, z2], i) => {
        const mid: [number, number, number] = [
          (x1 + x2) / 2,
          (y1 + y2) / 2,
          (z1 + z2) / 2,
        ];
        const length = Math.sqrt(
          (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2,
        );
        return (
          <mesh key={`conn-${i}`} position={mid} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.015, 0.015, length, 6]} />
            <meshStandardMaterial color="#06b6d4" transparent opacity={0.35} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ─── Second DNA Helix (right side) ─── */
function DNAHelixRight() {
  const groupRef = useRef<THREE.Group>(null!);
  const helixPoints = 40;
  const helixRadius = 0.3;
  const helixHeight = 5;
  const turns = 2.5;

  const [spherePositions, connectorData] = useMemo(() => {
    const positions: [number, number, number, string][] = [];
    const connectors: [number, number, number, number, number, number][] = [];
    for (let i = 0; i < helixPoints; i++) {
      const t = i / helixPoints;
      const angle = t * Math.PI * 2 * turns;
      const y = t * helixHeight - helixHeight / 2;
      const x1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;
      const x2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;
      positions.push([x1, y, z1, "#10b981"]);
      positions.push([x2, y, z2, "#f59e0b"]);
      if (i % 4 === 0) connectors.push([x1, y, z1, x2, y, z2]);
    }
    return [positions, connectors];
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={groupRef} position={[5.5, -1, -5]} scale={0.5}>
      {spherePositions.map(([x, y, z, color], i) => (
        <mesh key={`dna2-${i}`} position={[x, y, z]}>
          <sphereGeometry args={[0.05, 10, 10]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.1}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
      {connectorData.map(([x1, y1, z1, x2, y2, z2], i) => {
        const mid: [number, number, number] = [
          (x1 + x2) / 2,
          (y1 + y2) / 2,
          (z1 + z2) / 2,
        ];
        const length = Math.sqrt(
          (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2,
        );
        return (
          <mesh
            key={`conn2-${i}`}
            position={mid}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.012, 0.012, length, 6]} />
            <meshStandardMaterial color="#10b981" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ─── Atom Model (orbital rings + nucleus) ─── */
function AtomModel({
  position,
  scale = 0.6,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.3;
    groupRef.current.rotation.z = t * 0.2;
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Sphere args={[0.15, 16, 16]}>
        <MeshDistortMaterial
          color="#6366f1"
          speed={4}
          distort={0.3}
          opacity={0.7}
          transparent
          emissive="#6366f1"
          emissiveIntensity={0.2}
        />
      </Sphere>
      <Torus args={[0.6, 0.012, 8, 64]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.35} />
      </Torus>
      <Torus
        args={[0.6, 0.012, 8, 64]}
        rotation={[Math.PI / 3, Math.PI / 6, 0]}
      >
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.35} />
      </Torus>
      <Torus
        args={[0.6, 0.012, 8, 64]}
        rotation={[-Math.PI / 3, -Math.PI / 6, 0]}
      >
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.35} />
      </Torus>
      {[0, 1, 2].map((i) => (
        <ElectronBead key={i} orbitIndex={i} />
      ))}
    </group>
  );
}

function ElectronBead({ orbitIndex }: { orbitIndex: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const speed = 1.2 + orbitIndex * 0.4;
  const rotations = [
    [0, 0, 0],
    [Math.PI / 3, Math.PI / 6, 0],
    [-Math.PI / 3, -Math.PI / 6, 0],
  ] as const;

  useFrame((state) => {
    if (!ref.current) return;
    const t =
      state.clock.getElapsedTime() * speed + (orbitIndex * (Math.PI * 2)) / 3;
    const r = 0.6;
    const localX = Math.cos(t) * r;
    const localY = Math.sin(t) * r;
    const euler = new THREE.Euler(...rotations[orbitIndex]);
    const pos = new THREE.Vector3(localX, localY, 0).applyEuler(euler);
    ref.current.position.copy(pos);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshStandardMaterial
        color="#10b981"
        emissive="#10b981"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

/* ─── Molecule cluster ─── */
function MoleculeCluster({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
  });

  const nodes: [number, number, number][] = [
    [0, 0, 0],
    [0.5, 0.3, 0.1],
    [-0.4, 0.4, -0.2],
    [0.2, -0.5, 0.3],
    [-0.3, -0.3, -0.4],
    [0.4, -0.2, -0.3],
  ];

  const bonds: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 2],
    [3, 5],
    [4, 5],
  ];

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={position} scale={0.8}>
        {nodes.map(([x, y, z], i) => (
          <Sphere
            key={`mol-node-${i}`}
            args={[i === 0 ? 0.12 : 0.08, 16, 16]}
            position={[x, y, z]}
          >
            <meshStandardMaterial
              color={i === 0 ? "#3b82f6" : i % 2 === 0 ? "#06b6d4" : "#f59e0b"}
              emissive={i === 0 ? "#3b82f6" : "#06b6d4"}
              emissiveIntensity={0.15}
              transparent
              opacity={0.65}
            />
          </Sphere>
        ))}
        {bonds.map(([a, b], i) => {
          const start = new THREE.Vector3(...nodes[a]);
          const end = new THREE.Vector3(...nodes[b]);
          const mid = start.clone().add(end).multiplyScalar(0.5);
          const length = start.distanceTo(end);
          const direction = end.clone().sub(start).normalize();
          const quaternion = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            direction,
          );
          return (
            <mesh
              key={`bond-${i}`}
              position={[mid.x, mid.y, mid.z]}
              quaternion={quaternion}
            >
              <cylinderGeometry args={[0.012, 0.012, length, 6]} />
              <meshStandardMaterial color="#94a3b8" transparent opacity={0.3} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

/* ─── Floating Geometric Research Shapes ─── */
function FloatingResearchShapes() {
  return (
    <>
      {/* Magnifying glass ring */}
      <Float
        speed={2}
        rotationIntensity={1.5}
        floatIntensity={1.5}
        position={[4.5, 2.5, -4]}
      >
        <Torus args={[0.35, 0.04, 12, 32]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} />
        </Torus>
        <mesh position={[0.3, -0.35, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.025, 0.025, 0.4, 8]} />
          <meshStandardMaterial color="#64748b" transparent opacity={0.4} />
        </mesh>
      </Float>

      {/* Wireframe Flask */}
      <Float
        speed={1.8}
        rotationIntensity={0.8}
        floatIntensity={2}
        position={[-3.5, -3, -2]}
      >
        <group scale={0.45}>
          <mesh position={[0, -0.3, 0]}>
            <coneGeometry args={[0.5, 0.8, 6]} />
            <meshStandardMaterial
              color="#06b6d4"
              transparent
              opacity={0.2}
              wireframe
            />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.5, 8]} />
            <meshStandardMaterial
              color="#06b6d4"
              transparent
              opacity={0.2}
              wireframe
            />
          </mesh>
        </group>
      </Float>

      {/* Distorted cell sphere */}
      <Float
        speed={3}
        rotationIntensity={2}
        floatIntensity={1}
        position={[3, -2, -5]}
      >
        <Sphere args={[0.3, 32, 32]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            speed={4}
            distort={0.5}
            opacity={0.25}
            transparent
          />
        </Sphere>
      </Float>

      {/* Pulsing green sphere */}
      <Float
        speed={4}
        rotationIntensity={0.5}
        floatIntensity={3}
        position={[5.5, 3, -6]}
      >
        <Sphere args={[0.18, 32, 32]}>
          <MeshDistortMaterial
            color="#10b981"
            speed={5}
            distort={0.6}
            opacity={0.2}
            transparent
          />
        </Sphere>
      </Float>

      {/* Hexagonal ring */}
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={1.5}
        position={[-5.5, 2.5, -3]}
      >
        <Torus args={[0.3, 0.02, 6, 6]}>
          <meshStandardMaterial color="#f59e0b" transparent opacity={0.3} />
        </Torus>
      </Float>

      {/* Icosahedron - geometric crystal */}
      <Float
        speed={2.5}
        rotationIntensity={2}
        floatIntensity={1}
        position={[-2, 3.5, -4]}
      >
        <Icosahedron args={[0.2, 0]}>
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.2}
            wireframe
          />
        </Icosahedron>
      </Float>

      {/* Octahedron */}
      <Float
        speed={1.8}
        rotationIntensity={1.5}
        floatIntensity={2}
        position={[2, -3.5, -3]}
      >
        <Octahedron args={[0.25, 0]}>
          <meshStandardMaterial
            color="#6366f1"
            transparent
            opacity={0.2}
            wireframe
          />
        </Octahedron>
      </Float>

      {/* Dodecahedron */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1.5}
        position={[6, 0, -5]}
      >
        <Dodecahedron args={[0.2, 0]}>
          <meshStandardMaterial
            color="#f43f5e"
            transparent
            opacity={0.18}
            wireframe
          />
        </Dodecahedron>
      </Float>

      {/* Additional small floating spheres */}
      <Float
        speed={3.5}
        rotationIntensity={0.3}
        floatIntensity={2.5}
        position={[-4, -1, -6]}
      >
        <Sphere args={[0.1, 16, 16]}>
          <meshStandardMaterial
            color="#f59e0b"
            transparent
            opacity={0.3}
            emissive="#f59e0b"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float
        speed={2.8}
        rotationIntensity={0.5}
        floatIntensity={2}
        position={[1, 4, -7]}
      >
        <Sphere args={[0.12, 16, 16]}>
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.25}
            emissive="#06b6d4"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>
    </>
  );
}

/* ─── Main Background Export ─── */
export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={1.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#e0e7ff" />
        <pointLight position={[-8, -5, 5]} intensity={0.8} color="#dbeafe" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          color="#bfdbfe"
        />
        <Particles />
        <DNAHelix />
        <DNAHelixRight />
        <AtomModel position={[4, -0.5, -2]} />
        <AtomModel position={[-3, 3, -5]} scale={0.4} />
        <MoleculeCluster position={[1.5, 3, -4]} />
        <MoleculeCluster position={[-2, -3, -5]} />
        <MoleculeCluster position={[3.5, -3.5, -6]} />
        <FloatingResearchShapes />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
