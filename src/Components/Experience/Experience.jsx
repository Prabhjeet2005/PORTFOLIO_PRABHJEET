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
			logo: "./images/delhi-police.png",
			company: "Delhi Police",
			role: "Technical Intern",
			color: "red",
			duration: "Jan 2026 - Feb 2026",
			description: `◦ Engineered a multi-threaded Python data scraper utilizing ThreadPoolExecutor to deploy 15 concurrent worker threads and automated a data extraction pipeline routing requests through secure proxy networks, reducing intelligence gathering time by 96% (from 6 hours to under 15 minutes).<br/><br/>◦ Implemented regex-based parsing algorithms to extract unstructured HTML into 3 distinct data entities persisting structured records into an SQLite database mapped to a GUI with automated 30-minute to 48-hour polling cycles. `,
		},
		{
			logo: "./images/Tech_Mahindra-Logo.wine.svg",
			company: "Tech Mahindra",
			role: "Software Engineer Intern",
			color: "#FFD700",
			duration: "Sep 2025 - Oct 2025",
			description: `◦ Engineered an optimized backup pipeline utilizing Node.js Streams to dynamically extract, compress (GZIP), and securely encrypt PostgreSQL tables on the fly, bypassing V8 engine heap memory limits to enable multi-gigabyte file processing, reducing server memory consumption by over 90%.<br/><br/>◦ Automated critical database snapshot procedures using node-cron, eliminating 100% of manual execution overhead and cutting backup initiation time to under 30 seconds.<br/><br/>◦ Designed a role-based React.js dashboard utilizing strict JWT authentication for Admin and Auditor middlewares, securing 100% of API endpoints and enabling teams to verify backup logs faster than manual parsing.`,
		},
		{
			logo: "./images/valnee.png",
			company: "Valnee Solutions",
			role: "Full Stack Developer Intern",
			color: "#00CED1",
			duration: "Sep 2025 - Nov 2025",
			description: `◦ Collaborated with a team of 5 engineers to architect 4 scalable full-stack applications, designing a library of 25+ reusable React components that reduced front-end development time by 30%.<br/><br/>◦ Engineered an Al-powered SEO readiness tool using Google Gemini API (LLM) and Firecrawler, generating automated 0-100% performance audits for 50+ client websites.<br/><br/>◦ Spearheaded the frontend development of 'Signalmint', aggregating data across multiple REST APIs and utilizing Chart.js to render interactive portfolio visualizations, improving client reporting efficiency by 40%.`,
		},
		{
			logo: "./images/geeksforgeeks-svgrepo-com.svg",
			company: "GeeksForGeeks",
			role: "Full Stack Developer Intern",
			color: "#32CD32",
			duration: "May 2025 - Aug 2025",
			description: `◦ Created a RESTful API with 15+ endpoints for user data management.<br/><br/>◦ Developed a modular frontend with 10+ reusable React components.<br/><br/>◦ Reduced development time for future features by 20%.`,
		},
		{
			logo: "./images/raisedigital.jpeg",
			company: "RaiseDigital",
			role: "Web Developer Intern",
			color: "#FF4500",
			duration: "May 2024 - June 2024",
			description: `◦ Redesigned responsive web pages using ReactJs, increasing engagement by 15%.<br/><br/>◦ Utilized RESTful APIs with Node.js for seamless communication.<br/><br/>◦ Collaborated with team members to resolve 10+ UI bugs.`,
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
