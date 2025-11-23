import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
	const ref = useRef();
	// Generate 5000 random points inside a sphere
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 1.5 })
	);

	useFrame((state, delta) => {
		// Rotate the stars frame by frame
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled={false}
				{...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const AnimatedBackground = () => {
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: -1,
				background: "#000000",
			}}>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Stars />
			</Canvas>
		</div>
	);
};

export default AnimatedBackground;
