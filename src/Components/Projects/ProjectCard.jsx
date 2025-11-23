import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, heading, live, github }) => {
	return (
		<motion.section
			className="project-card-container"
			whileHover={{
				scale: 1.05,
				boxShadow: "0px 0px 20px rgba(255, 255, 0, 0.5)",
				borderColor: "yellow",
			}}
			transition={{ type: "spring", stiffness: 300 }}>
			<img
				className="project-card-img"
				src={image}
				alt={`${heading} preview`}
				loading="lazy"
			/>
			<section className="project-card-title">{heading}</section>
			<section className="project-card-footer">
				<a
					target="_blank"
					rel="noreferrer"
					href={github}
					className="project-card-link">
					GitHub
				</a>
				{live && (
					<a
						target="_blank"
						rel="noreferrer"
						href={live}
						className="project-card-link">
						Live
					</a>
				)}
			</section>
		</motion.section>
	);
};

export default ProjectCard;
