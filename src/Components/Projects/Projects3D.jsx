import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image, Html, Float } from "@react-three/drei";
import * as THREE from "three";

// --- 1. THE INDIVIDUAL PROJECT CARD ---
const ProjectItem = ({
	index,
	position,
	rotation,
	image,
	heading,
	github,
	live,
	radius,
	currentRotation,
}) => {
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);

	useFrame((state, delta) => {
		if (!ref.current) return;

		// 1. Calculate global rotation to determine position
		const angle = (index * (Math.PI * 2)) / 6; // 6 projects
		const globalAngle = currentRotation.current + angle;
		const normalizedAngle =
			((globalAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

		// 2. Check if card is in the "Active Zone" (facing camera)
		const worldPos = new THREE.Vector3();
		ref.current.getWorldPosition(worldPos);

		// If closer to camera (z > radius - 1), it's active
		const isActive = worldPos.z > radius - 1.5;
		setActive(isActive);

		// 3. Smooth Scale Animation
		const targetScale = isActive ? 1.1 : 0.8;

		// Smoothly interpolate scale
		ref.current.scale.x = THREE.MathUtils.lerp(
			ref.current.scale.x,
			targetScale * 3,
			0.1
		);
		ref.current.scale.y = THREE.MathUtils.lerp(
			ref.current.scale.y,
			targetScale * 2,
			0.1
		);

		// Material color handling (dimming inactive cards)
		if (ref.current.material) {
			ref.current.material.color.lerp(
				new THREE.Color(isActive ? "white" : "#444"),
				0.1
			);
		}
	});

	return (
		<group rotation={rotation} position={position}>
			<Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
				<mesh
					ref={ref}
					onPointerOver={() => setHovered(true)}
					onPointerOut={() => setHovered(false)}>
					{/* The Image Plane */}
					<Image
						url={image}
						transparent
						opacity={1}
						side={THREE.DoubleSide}
					/>

					{/* --- HTML OVERLAY (Only visible when active/front) --- */}
					<Html
						transform
						position={[0, 0, 0.1]} // Slightly in front of image
						style={{
							opacity: active ? 1 : 0,
							transition: "opacity 0.4s",
							pointerEvents: active ? "auto" : "none",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "10px",
						}}>
						<div
							style={{
								background: "rgba(0,0,0,0.8)",
								padding: "15px",
								borderRadius: "12px",
								border: "1px solid yellow",
								textAlign: "center",
								width: "250px",
								backdropFilter: "blur(4px)",
							}}>
							<h3
								style={{
									color: "white",
									margin: "0 0 10px 0",
									fontSize: "1.2rem",
								}}>
								{heading}
							</h3>

							<div
								style={{
									display: "flex",
									gap: "10px",
									justifyContent: "center",
								}}>
								<a
									href={github}
									target="_blank"
									rel="noreferrer"
									style={{
										padding: "6px 12px",
										background: "#333",
										color: "white",
										borderRadius: "6px",
										textDecoration: "none",
										fontSize: "0.8rem",
										border: "1px solid #555",
									}}>
									GitHub
								</a>
								{live && (
									<a
										href={live}
										target="_blank"
										rel="noreferrer"
										style={{
											padding: "6px 12px",
											background: "yellow",
											color: "black",
											borderRadius: "6px",
											textDecoration: "none",
											fontSize: "0.8rem",
											fontWeight: "bold",
										}}>
										Live Demo
									</a>
								)}
							</div>
						</div>
					</Html>
				</mesh>
			</Float>
		</group>
	);
};

// --- 2. THE CAROUSEL RIG ---
const Carousel = ({ projects }) => {
	const groupRef = useRef();
	const currentRotation = useRef(0);
	const isDragging = useRef(false);
	const previousMouseX = useRef(0);

	// Carousel Config
	const radius = 4.5;
	const count = projects.length;

	// Handle Drag Logic
	const handlePointerDown = (e) => {
		isDragging.current = true;
		previousMouseX.current = e.clientX;
	};

	const handlePointerUp = () => {
		isDragging.current = false;
	};

	const handlePointerMove = (e) => {
		if (isDragging.current) {
			const delta = e.clientX - previousMouseX.current;
			// Adjust rotation speed
			currentRotation.current += delta * 0.005;
			previousMouseX.current = e.clientX;
		}
	};

	// Add global listeners for drag release
	useEffect(() => {
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointermove", handlePointerMove);
		return () => {
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointermove", handlePointerMove);
		};
	}, []);

	// Animation Loop
	useFrame(() => {
		if (groupRef.current) {
			// Optional: Auto-rotate slowly if not dragging
			if (!isDragging.current) {
				currentRotation.current += 0.001;
			}

			// Smoothly interpolate actual mesh rotation to target rotation
			groupRef.current.rotation.y = THREE.MathUtils.lerp(
				groupRef.current.rotation.y,
				currentRotation.current,
				0.1
			);
		}
	});

	return (
		<group ref={groupRef} onPointerDown={handlePointerDown}>
			{projects.map((project, i) => {
				// Calculate position in a circle
				const angle = (i / count) * Math.PI * 2;
				const x = Math.sin(angle) * radius;
				const z = Math.cos(angle) * radius;

				return (
					<ProjectItem
						key={i}
						index={i}
						image={project.image}
						heading={project.heading}
						github={project.github}
						live={project.live}
						// Position card on the circle
						position={[x, 0, z]}
						// Rotate card to face center (plus 180deg to face outwards)
						rotation={[0, angle, 0]}
						radius={radius}
						currentRotation={currentRotation}
					/>
				);
			})}
		</group>
	);
};

const Projects3D = ({ projects }) => {
	return (
		<div style={{ width: "100%", height: "600px", position: "relative" }}>
			<Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
				{/* Lighting */}
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} intensity={1} />
				<spotLight position={[0, 10, 0]} intensity={0.5} />

				{/* Fog helps hide back cards into the darkness */}
				<fog attach="fog" args={["black", 5, 15]} />

				<Carousel projects={projects} />
			</Canvas>

			<div
				style={{
					position: "absolute",
					bottom: "20px",
					width: "100%",
					textAlign: "center",
					color: "rgba(255,255,255,0.3)",
					pointerEvents: "none",
				}}>
				Drag to Explore Projects
			</div>
		</div>
	);
};

export default Projects3D;
