import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BriefcaseFill } from "react-bootstrap-icons";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";

const Experience = () => {
	const ref = useRef(null);

	// Track scroll progress for the vertical line
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const experiences = [
		{
			logo: "./images/Tech_Mahindra-Logo.wine.svg",
			company: "Tech Mahindra",
			role: "Software Engineer Intern",
			color: "#FFD700",
			duration: "Sep 2025 - Oct 2025",
			description: `◦ Automated critical database snapshot procedures using Node-cron, reducing manual intervention by 100%.<br/>◦ Developed a responsive React.js dashboard to visualize backup logs.<br/>◦ Enforced Zero-Trust security by implementing RBAC.`,
		},
		{
			logo: "./images/valnee.png",
			company: "Valnee Solutions",
			role: "Full Stack Developer Intern",
			color: "#00CED1",
			duration: "Sep 2025 - Nov 2025",
			description: `◦ Delivered 4 full-stack web applications including competitor ad tracking platforms.<br/>◦ Engineered an AI-powered SEO readiness tool integrating Firecrawler.<br/>◦ Created a library of 25+ reusable React components.`,
		},
		{
			logo: "./images/geeksforgeeks-svgrepo-com.svg",
			company: "GeeksForGeeks",
			role: "Full Stack Developer Intern",
			color: "#32CD32",
			duration: "May 2025 - Aug 2025",
			description: `◦ Created a RESTful API with 15+ endpoints for user data management.<br/>◦ Developed a modular frontend with 10+ reusable React components.<br/>◦ Reduced development time for future features by 20%.`,
		},
		{
			logo: "./images/raisedigital.jpeg",
			company: "RaiseDigital",
			role: "Web Developer Intern",
			color: "#FF4500",
			duration: "May 2024 - June 2024",
			description: `◦ Redesigned responsive web pages using ReactJs, increasing engagement by 15%.<br/>◦ Utilized RESTful APIs with Node.js for seamless communication.<br/>◦ Collaborated with team members to resolve 10+ UI bugs.`,
		},
	];

	return (
		<section id="experience" className="experience-section" ref={ref}>
			<motion.div
				className="experience-header"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}>
				<h2 className="section-title">
					Professional <span className="highlight">Experience</span>
				</h2>
				<BriefcaseFill className="title-icon" />
			</motion.div>

			<div className="timeline-wrapper">
				{/* --- CENTRAL LINE --- */}
				<div className="line-container">
					<motion.div className="line-progress" style={{ scaleY }} />
				</div>

				<div className="timeline-list">
					{experiences.map((exp, index) => (
						<TimelineRow key={index} data={exp} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

const TimelineRow = ({ data, index }) => {
	const isLeft = index % 2 === 0;

	return (
		<div className={`timeline-row ${isLeft ? "left-row" : "right-row"}`}>
			{/* 1. Empty Spacer for Balance */}
			<div className="timeline-spacer"></div>

			{/* 2. Central Node (The Dot) */}
			<div className="timeline-node">
				<div className="node-circle" style={{ borderColor: data.color }}>
					<div
						className="node-center"
						style={{ backgroundColor: data.color }}
					/>
				</div>
			</div>

			{/* 3. The Content Card */}
			<motion.div
				className="timeline-content"
				initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5, ease: "easeOut" }}>
				<ExperienceCard data={data} />
			</motion.div>
		</div>
	);
};

export default Experience;
