import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const ExperienceCard = ({ data }) => {
	return (
		<motion.div
			className="glass-card"
			whileHover={{ y: -5, scale: 1.01 }}
			transition={{ type: "spring", stiffness: 300 }}
			style={{ borderTop: `3px solid ${data.color}` }}>
			<div className="glass-header">
				<img src={data.logo} alt={data.company} className="glass-logo" />
				<div className="glass-header-text">
					<h3 className="glass-role">{data.role}</h3>
					<h4 className="glass-company" style={{ color: data.color }}>
						{data.company}
					</h4>
				</div>
			</div>

			<div className="glass-date">{data.duration}</div>

			<div
				className="glass-body"
				dangerouslySetInnerHTML={{ __html: data.description }}
			/>
		</motion.div>
	);
};

export default ExperienceCard;
