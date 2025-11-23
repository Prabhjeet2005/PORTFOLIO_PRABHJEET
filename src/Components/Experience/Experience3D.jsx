import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const ParticleField = ({ color }) => {
	const ref = useRef();

	// Generate 3000 random points in a sphere
	const sphere = random.inSphere(new Float32Array(3000), { radius: 2.5 });

	useFrame((state, delta) => {
		// Rotate the particle field
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;

		// Smoothly interpolate color changes
		const targetColor = new THREE.Color(color);
		ref.current.material.color.lerp(targetColor, 0.05); // 0.05 is the easing speed
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled={false}>
				<PointMaterial
					transparent
					color={color}
					size={0.02} // Particle size
					sizeAttenuation={true}
					depthWrite={false}
					blending={THREE.AdditiveBlending}
				/>
			</Points>
		</group>
	);
};

const Experience3D = ({ activeColor }) => {
	return (
		<div className="experience-3d-wrapper">
			<Canvas camera={{ position: [0, 0, 3] }}>
				{/* Ambient light for base visibility */}
				<ambientLight intensity={0.5} />

				{/* Floating wrapper to add gentle bobbing movement */}
				<Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
					<ParticleField color={activeColor} />
				</Float>
			</Canvas>
		</div>
	);
};

export default Experience3D;
