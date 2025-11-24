import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Float } from "@react-three/drei";

const GlowingGlobe = () => {
	const sphereRef = useRef();

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (sphereRef.current) {
			// Rotate the globe
			sphereRef.current.rotation.y = t * 0.2;
			sphereRef.current.rotation.x = Math.sin(t * 0.5) * 0.1; // Slight tilt
		}
	});

	return (
		<Float speed={1.3} rotationIntensity={1} floatIntensity={1}>
			<Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.3}>
				{/* meshBasicMaterial DOES NOT NEED LIGHT. It will always be visible. */}
				<meshBasicMaterial
					color="#FFD700" // Bright Yellow
					wireframe={true} // Holographic Grid Look
					transparent={true}
					opacity={0.2} // Slight transparency
				/>
			</Sphere>

			{/* Inner Core for extra glow effect */}
			<Sphere args={[0.8, 32, 32]}>
				<meshBasicMaterial color="#FFD700" transparent opacity={0.1} />
			</Sphere>
		</Float>
	);
};

const ContactGlobe = () => {
	return (
		// Explicit height style to force visibility
		<div style={{ width: "100%", padding:"0 0",height: "400px", position: "relative" }}>
			<Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
				{/* No lights needed for BasicMaterial, but keeping ambient just in case */}
				<ambientLight intensity={1} />

				<GlowingGlobe />

				<OrbitControls
					enableZoom={false}
					autoRotate
					autoRotateSpeed={1.5}
					enablePan={false}
				/>
			</Canvas>
		</div>
	);
};

export default ContactGlobe;
