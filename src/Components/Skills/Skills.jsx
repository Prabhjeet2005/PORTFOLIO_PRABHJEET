import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { CodeSlash } from "react-bootstrap-icons";
import * as THREE from "three";
import "./skills.css";

// --- 1. The Individual Skill Item (Floating in 3D) ---
const SkillIcon = ({ position, image, label }) => {
	const ref = useRef();
	const [hovered, setHovered] = useState(false);

	// Optional: Make icons always face the camera
	useFrame(({ camera }) => {
		if (ref.current) {
			ref.current.quaternion.copy(camera.quaternion);
		}
	});

	return (
		<group position={position} ref={ref}>
			<Html center distanceFactor={12} zIndexRange={[100, 0]}>
				<div
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						cursor: "pointer",
						transition: "all 0.3s ease",
						transform: hovered ? "scale(1.2)" : "scale(1)",
						opacity: hovered ? 1 : 0.8, // Fade items slightly when not hovered
						userSelect: "none",
						WebkitUserSelect: "none", // Safari/Chrome
						MozUserSelect: "none", // Firefox
						msUserSelect: "none", // IE/Edge
					}}>
					<div
						style={{
							width: "60px",
							height: "60px",
							background: "rgba(255, 255, 255, 0.1)",
							backdropFilter: "blur(4px)",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: hovered
								? "1px solid yellow"
								: "1px solid rgba(255,255,255,0.2)",
							boxShadow: hovered ? "0 0 15px yellow" : "none",
						}}>
						<img
							src={image}
							alt={label}
							style={{
								width: "35px",
								height: "35px",
								objectFit: "contain",
							}}
						/>
					</div>
					<span
						style={{
							marginTop: "8px",
							color: "white",
							fontSize: "12px",
							fontWeight: "600",
							textShadow: "0 2px 4px black",
							background: "rgba(0,0,0,0.6)",
							padding: "2px 6px",
							borderRadius: "4px",
							opacity: hovered ? 1 : 0.5, // Only show text on hover to keep it clean
							transition: "opacity 0.3s",
							pointerEvents: "none",
							whiteSpace: "nowrap",
						}}>
						{label}
					</span>
				</div>
			</Html>
		</group>
	);
};

// --- 2. The Sphere Logic ---
const SkillsCloud = ({ skills }) => {
	// Fibonacci Sphere Algorithm to distribute points evenly
	const points = useMemo(() => {
		const temp = [];
		const count = skills.length;
		const radius = 4; // Radius of the sphere

		for (let i = 0; i < count; i++) {
			const phi = Math.acos(-1 + (2 * i) / count);
			const theta = Math.sqrt(count * Math.PI) * phi;

			const x = radius * Math.cos(theta) * Math.sin(phi);
			const y = radius * Math.sin(theta) * Math.sin(phi);
			const z = radius * Math.cos(phi);

			temp.push([x, y, z]);
		}
		return temp;
	}, [skills]);

	return (
		<group rotation={[0, 0, 0]}>
			{points.map((pos, index) => (
				<SkillIcon
					key={index}
					position={pos}
					image={skills[index].imageStored}
					label={skills[index].value}
				/>
			))}
		</group>
	);
};

// --- 3. Main Component ---
const Skills = () => {
	const allSkills = [
		{ imageStored: "./images/cpp.svg", value: "C++" },
		{ imageStored: "./images/c.svg", value: "C" },
		{ imageStored: "./images/python-svgrepo-com.svg", value: "Python" },
		{ imageStored: "./images/js.svg", value: "JavaScript " },
		{ imageStored: "./images/java.svg", value: "Java" },
		{ imageStored: "./images/sql1.svg", value: "SQL" },
		{ imageStored: "./images/mysql-logo-svgrepo-com.svg", value: "MySQL" },
		{ imageStored: "./images/postgresql-icon.svg", value: "PostgreSQL" },
		{ imageStored: "./images/html-5-svgrepo-com.svg", value: "HTML" },
		{ imageStored: "./images/css-3-svgrepo-com.svg", value: "CSS" },
		{ imageStored: "./images/mongodb.svg", value: "MongoDB" },
		{ imageStored: "./images/express1.svg", value: "Express.js" },
		{ imageStored: "./images/react.svg", value: "React.js" },
		{
			imageStored: "./images/nextjs-icon-svgrepo-com.svg",
			value: "Next.js",
		},
		{ imageStored: "./images/nodejs.svg", value: "Node.js" },
		{ imageStored: "./images/api.svg", value: "RESTful APIs" },
		{ imageStored: "./images/git-svgrepo-com.svg", value: "Git" },
		{
			imageStored: "./images/github-inverted-svgrepo-com.svg",
			value: "GitHub",
		},
		{ imageStored: "./images/vscode.svg", value: "VS Code" },
		{ imageStored: "./images/dsa.svg", value: "DSA" },
		{ imageStored: "./images/postman.svg", value: "Postman" },
		{ imageStored: "./images/docker.svg", value: "Docker" },
		{ imageStored: "./images/oops.svg", value: "OOPS" },
		{
			imageStored: "./images/problemsolving.svg",
			value: "Problem-Solving",
		},
		// { imageStored: "./images/debug-svgrepo-com.svg", value: "Debugging" },
		{ imageStored: "./images/Pandas.svg", value: "Pandas" },
		{ imageStored: "./images/flask.svg", value: "Flask" },
		{ imageStored: "./images/numpy-svgrepo-com.svg", value: "NumPy" },
		{ imageStored: "./images/scikit-learn.svg", value: "Scikit-learn" },
		{
			imageStored: "./images/machine-learning-01-svgrepo-com.svg",
			value: "ML",
		},
		{ imageStored: "./images/jupyter-svgrepo-com.svg", value: "Jupyter" },
		{
			imageStored: "./images/stacked-bar-chart-svgrepo-com.svg",
			value: "Data Visualization",
		},
		{ imageStored: "./images/Matplotlib.svg", value: "Matplotlib" },
		{ imageStored: "./images/seaborn-1.svg", value: "Seaborn" },
	];

	return (
		<section
			id="skills"
			className="edu-conatiner"
			style={{
				position: "relative",
				width: "100%",
				height: "100vh", // Gives the 3D scene room to breathe
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
			}}>
			<div
				className="about-title img-center"
				style={{ zIndex: 10, marginBottom: "1rem" }}>
				Skills{" "}
				<CodeSlash style={{ marginLeft: "10px", color: "yellow" }} />
			</div>

			{/* 3D Scene Container */}
			<div style={{ width: "100%", height: "80%", cursor: "grab" }}>
				<Canvas camera={{ position: [0, 0, 11], fov: 50 }}>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />

					<SkillsCloud skills={allSkills} />

					{/* Controls: Auto-rotate adds the 'alive' feeling */}
					<OrbitControls
						enableZoom={false}
						autoRotate
						autoRotateSpeed={1.5}
						enablePan={false}
					/>
				</Canvas>
			</div>

			<div
				style={{
					position: "absolute",
					bottom: "20px",
					color: "rgba(255,255,255,0.3)",
					fontSize: "0.8rem",
				}}>
				Interactive 3D Sphere - Drag to rotate
			</div>
		</section>
	);
};

export default Skills;
