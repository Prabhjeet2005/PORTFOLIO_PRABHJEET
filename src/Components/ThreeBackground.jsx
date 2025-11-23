import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ScrollStar = () => {
	const meshRef = useRef();
	const { camera, size } = useThree();

	// --- CONFIGURATION ---
	const starDepth = -2; // Pushed back
	const starSize = 0.08; // Very small
	const padding = 0.2; // Small buffer from the edge

	useFrame(() => {
		if (!meshRef.current) return;

		// 1. Calculate Scroll Progress (0 to 1)
		// We calculate this every frame for perfect sync
		const maxScroll =
			document.documentElement.scrollHeight - window.innerHeight;
		const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

		// 2. Calculate the 3D Viewport Size at the Star's Depth
		// This ensures the star knows exactly where the screen edges are at Z = -2
		const distance = camera.position.z - starDepth;
		const vHeight =
			2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * distance;
		const vWidth = vHeight * (size.width / size.height);

		// 3. Define Top and Bottom boundaries
		// We adjust by 'starSize' so the star doesn't get cut off
		const topY = vHeight / 2 - padding;
		const bottomY = -vHeight / 2 + padding;

		// 4. Map Scroll to Y Position
		// When scroll is 0, Y is topY. When scroll is 1, Y is bottomY.
		const currentY = topY - (topY - bottomY) * scrollProgress;

		// 5. Update Position and Rotation
		// X is set to the far right edge
		meshRef.current.position.x = vWidth / 2 - padding;
		meshRef.current.position.y = currentY;
		meshRef.current.position.z = starDepth;

		// Spin animations
		meshRef.current.rotation.y += 0.02;
		meshRef.current.rotation.z += 0.01;
	});

	return (
		<>
			{/* The Star */}
			<mesh ref={meshRef}>
				<octahedronGeometry args={[starSize, 0]} />
				<meshBasicMaterial color="yellow" wireframe={true} />
			</mesh>
		</>
	);
};

const ThreeBackground = () => {
	return (
		<div id="canvas-container">
			<Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<ScrollStar />
			</Canvas>
		</div>
	);
};

export default ThreeBackground;
