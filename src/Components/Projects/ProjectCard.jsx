import React, { useRef } from "react";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import "./ProjectCard.css";

const ROTATION_RANGE = 40; // How much it tilts
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({ image, heading, live, github }) => {
	const ref = useRef(null);

	// Motion values for X and Y rotation
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// Add spring physics for smooth return to center
	const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
	const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

	// Create the transform string
	const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

	const handleMouseMove = (e) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
		const rY = mouseX / width - HALF_ROTATION_RANGE;

		x.set(rX);
		y.set(rY);
	};

	const handleMouseLeave = () => {
		// Reset rotation when mouse leaves
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transformStyle: "preserve-3d",
				transform,
			}}
			className="project-3d-card">
			{/* 1. Background Image Layer (Pushed back in Z-space) */}
			<div
				style={{
					transform: "translateZ(-20px)", // Sits behind
					backgroundImage: `url('${image}')`,
				}}
				className="project-3d-img   "
			/>

			{/* 2. Gradient Overlay */}
			<div
				className="project-3d-overlay"
				style={{ transform: "translateZ(0px)" }}
			/>

			{/* 3. Content Layer (Pushed forward in Z-space for depth) */}
			<div
				style={{ transform: "translateZ(40px)" }}
				className="project-3d-content">
				<h3 className="project-3d-title">{heading}</h3>

				<div className="project-3d-links">
					<a
						href={github}
						target="_blank"
						rel="noreferrer"
						className="project-icon-btn"
						title="View Code on GitHub">
						<Github size={22} />
					</a>

					{live && (
						<a
							href={live}
							target="_blank"
							rel="noreferrer"
							className="project-icon-btn"
							title="View Live Demo">
							<BoxArrowUpRight size={22} />
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
