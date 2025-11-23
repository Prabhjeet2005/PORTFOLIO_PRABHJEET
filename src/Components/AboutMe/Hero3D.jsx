import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

const HeroGeometry = () => {
	const meshRef = useRef();

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		// Rotate the shape
		meshRef.current.rotation.x = Math.cos(t / 4) / 2;
		meshRef.current.rotation.y = Math.sin(t / 4) / 2;
		meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;

		// Subtle floating movement
		meshRef.current.position.y = Math.sin(t / 2) / 5;
	});

	return (
		<mesh ref={meshRef} scale={2.5}>
			{/* Icosahedron geometry gives a nice techy, geometric look */}
			<icosahedronGeometry args={[1, 1]} />
			<meshStandardMaterial
				color="#00CED1" // Cyan/Teal color
				wireframe
				emissive="#00CED1"
				emissiveIntensity={0.5}
				transparent
				opacity={0.4}
			/>
		</mesh>
	);
};

const Hero3D = () => {
	return (
		<div style={{ width: "100%", height: "400px", position: "relative" }}>
			<Canvas camera={{ position: [0, 0, 6] }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} intensity={1} />

				{/* Star field background for depth */}
				<Stars
					radius={50}
					depth={50}
					count={2000}
					factor={4}
					saturation={0}
					fade
					speed={1}
				/>

				<Float speed={2} rotationIntensity={1} floatIntensity={1}>
					<HeroGeometry />
				</Float>
			</Canvas>
		</div>
	);
};

export default Hero3D;
