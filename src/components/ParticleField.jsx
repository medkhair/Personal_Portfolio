import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Color, AdditiveBlending } from 'three';

function Particles({ count = 800 }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const color1 = new Color('#64FFDA');
    const color2 = new Color('#0A192F');
    const color3 = new Color('#3ecfb0');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread particles in a sphere
      const radius = Math.random() * 8 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Mix between teal colors
      const mixFactor = Math.random();
      const c = mixFactor > 0.5 ? color1.clone().lerp(color3, Math.random()) : color1.clone().lerp(color2, Math.random() * 0.3);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.03;
      mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1;
      // Remove everything else
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const torusRef = useRef();
  const icosaRef = useRef();
  const octaRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = time * 0.15;
      icosaRef.current.rotation.z = time * 0.25;
      icosaRef.current.position.y = Math.cos(time * 0.4) * 0.3 + 1;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = time * 0.2;
      octaRef.current.rotation.z = time * 0.1;
      octaRef.current.position.y = Math.sin(time * 0.6) * 0.4 - 1;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[3, 0, -2]}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshStandardMaterial
          color="#64FFDA"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      <mesh ref={icosaRef} position={[-3.5, 1, -3]}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#64FFDA"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      <mesh ref={octaRef} position={[2, -2, -1]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#3ecfb0"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
}

function ParticleField() {
  return (
    <div className="particle-field-container">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#64FFDA" />
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}

export default ParticleField;
