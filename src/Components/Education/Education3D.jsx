import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

const FloatingGeometry = () => {
	const meshRef = useRef();

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		// Complex rotation for visual interest
		meshRef.current.rotation.x = Math.cos(t / 4) / 2;
		meshRef.current.rotation.y = Math.sin(t / 2) / 2;
		meshRef.current.rotation.z = Math.sin(t / 4) / 2;
		meshRef.current.position.y = Math.sin(t / 1.5) / 5;
	});

	return (
		<mesh ref={meshRef} position={[3, 0, 0]} scale={1.5}>
			<icosahedronGeometry args={[1, 1]} />
			<meshStandardMaterial
				color="#00CED1"
				wireframe
				emissive="#00CED1"
				emissiveIntensity={0.5}
				transparent
				opacity={0.3}
			/>
		</mesh>
	);
};

const FloatingCube = () => {
	const cubeRef = useRef();
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		cubeRef.current.rotation.x = t * 0.2;
		cubeRef.current.rotation.y = t * 0.3;
	});

	return (
		<mesh ref={cubeRef} position={[-3, -1, -2]} scale={0.8}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial
				color="#FFD700"
				wireframe
				transparent
				opacity={0.2}
			/>
		</mesh>
	);
};

const Education3D = () => {
	return (
		<div className="education-canvas-container">
			<Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Stars
					radius={100}
					depth={50}
					count={2000}
					factor={4}
					saturation={0}
					fade
					speed={1}
				/>

				<Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
					<FloatingGeometry />
				</Float>

				<Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
					<FloatingCube />
				</Float>
			</Canvas>
		</div>
	);
};

export default Education3D;
