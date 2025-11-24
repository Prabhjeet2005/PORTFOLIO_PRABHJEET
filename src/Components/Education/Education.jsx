import React from "react";
import { Mortarboard, Calendar3, Award } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Education3D from "./Education3D";
import "./Education.css";

const Education = () => {
	return (
		<section id="education" className="education-container">
			{/* 3D Background */}
			<Education3D />

			{/* Title */}
			<motion.div
				className="education-title"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}>
				Education <Mortarboard size={40} color="#FFD700" />
			</motion.div>

			{/* Education Card */}
			<motion.div
				className="education-card"
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}>
				<div className="edu-logo-container">
					<img
						src="./images/GGSIU_logo.svg.png"
						className="edu-logo"
						alt="University Logo"
					/>
				</div>

				<div className="edu-info">
					<h3 className="edu-school">
						Guru Gobind Singh Indraprastha University
					</h3>
					<p className="edu-degree">
						Bachelor of Technology in Computer Science Engineering
					</p>

					<div className="edu-meta">
						<span className="edu-grade flex items-center">
							<Award style={{ marginRight: "8px", marginBottom: "2px" }} />
							GPA: 9.5 / 10
						</span>
						<span className="edu-year">
							<Calendar3
								style={{ marginRight: "8px", marginBottom: "2px" }}
							/>
							2023 - 2027
						</span>
					</div>
				</div>
			</motion.div>
			<motion.div
				className="education-card mt-4"
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}>
				<div className="edu-logo-container">
					<img
						style={{ borderRadius: "50%" }}
						src="./images/school_logo.png"
						className="edu-logo"
						alt="University Logo"
					/>
				</div>

				<div className="edu-info">
					<h3 className="edu-school">Jaspal Kaur Public School</h3>
					<p className="edu-degree">Non Medical</p>

					<div className="edu-meta">
						<span className="edu-grade flex items-center">
							<Award style={{ marginRight: "8px", marginBottom: "2px" }} />
							12<sup>th</sup>: 93.8%
						</span>
						<span className="edu-grade flex items-center">
							<Award style={{ marginRight: "8px", marginBottom: "2px" }} />
							10<sup>th</sup>: 96%
						</span>
						<span className="edu-year">
							<Calendar3
								style={{ marginRight: "8px", marginBottom: "2px" }}
							/>
							2009 - 2023
						</span>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Education;
