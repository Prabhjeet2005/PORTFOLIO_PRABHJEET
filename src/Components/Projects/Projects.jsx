import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import {
	CodeSquare,
	ChevronDown,
	ExclamationCircle,
} from "react-bootstrap-icons";

const Projects = () => {
	// State to track how many projects to show
	const [visibleCount, setVisibleCount] = useState(2);

	const projects = [
		{
			heading: "Ai Dual Device Proctor",
			image: "./images/prep-master-ai-client.vercel.app_.png",
			live: "https://prep-master-ai-client.vercel.app/",
			github: "https://github.com/Prabhjeet2005/PrepMasterAi",
		},
		{
			image: "./images/fullstack_pern.png",
			heading: "Backup System",
			github:
				"https://github.com/Prabhjeet2005/Fullstack-Backup-Management-System-PERN",
			live: "https://fullstack-backup-management-system-flame.vercel.app/",
		},
		{
			image:
				"./images/20250723_0037_Animated Travel Website_simple_compose_01k0srevbve7qv2ndxk9s05dnj.png",
			heading: "Journeaze",
			github: "https://github.com/Prabhjeet2005/Travel-Booking-App",
			live: "https://travel-booking-app-client.vercel.app/",
		},
		{
			image:
				"./images/20250723_0050_Animated Trading Website_simple_compose_01k0ss76m1e2yv6bkajkgjg1nd.png",
			heading: "Investow",
			github: "https://github.com/Prabhjeet2005/trader",
			live: "https://trader-frontend-omega.vercel.app/",
		},
		{
			image:
				"./images/20250723_0052_Animated Chess Game_simple_compose_01k0ssa51veh484qpx5662qfmn.png",
			heading: "Chess Game",
			github: "https://github.com/Prabhjeet2005/chessgame",
			live: "",
		},
		{
			image:
				"./images/20250723_0054_Animated Simon Game Website_simple_compose_01k0ssdx6yfgft8y2k8qqnj15j.png",
			heading: "Simon Game",
			github:
				"https://github.com/Prabhjeet2005/Simon-Game?tab=readme-ov-file",
			live: "https://prabhjeet2005.github.io/Simon-Game/",
		},
		{
			image:
				"./images/20250723_0056_To-Do List Website_simple_compose_01k0sshwq9f1svmt38kbhh5yx1.png",
			heading: "Task Manager",
			github:
				"https://github.com/Prabhjeet2005/to-do-list?tab=readme-ov-file",
			live: "https://todolist-flame-theta.vercel.app/",
		},
	];

	const handleLoadMore = () => {
		// Show 3 more projects (or however many you prefer)
		setVisibleCount((prev) => projects.length);
	};

	// Staggered Animation for the Grid Entrance
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	// Individual Card Entrance Animation
	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100, damping: 12 },
		},
	};

	return (
		<section
			id="projects"
			className="edu-conatiner"
			style={{ padding: "4rem 0", overflow: "visible" }}>
			<motion.div
				className="about-title img-center"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				style={{
					marginBottom: "4rem",
					justifyContent: "center",
					display: "flex",
					alignItems: "center",
				}}>
				Projects{" "}
				<CodeSquare
					style={{ marginLeft: "15px", color: "#FFD700" }}
					size={30}
				/>
			</motion.div>
			{/* <div className="sm:w-[40%] lg:w-[50%] border px-[1em] p-[2em] rounded-md mt-[-5em] w-[95%] text-center text-xs">
				<ExclamationCircle className="inline" /> Note: All Github
				Repositories are Private.
				<br /> For Access mail me at prabhjeetsandhu010@gmail.com
				<br />
				Contact me at +91 9625770491
			</div> */}

			<motion.div
				className="product-multiple-card-container"
				variants={containerVariants}
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: "3rem",
					width: "90%",
					margin: "0 auto",
				}}>
				{/* Slice the array based on visibleCount */}
				{projects.slice(0, visibleCount).map((item) => (
					<motion.div
						key={item.heading}
						variants={itemVariants}
						style={{ perspective: "1000px" }}>
						<ProjectCard
							image={item.image}
							heading={item.heading}
							live={item.live}
							github={item.github}
						/>
					</motion.div>
				))}
			</motion.div>

			{/* Load More Button Section */}
			{visibleCount < projects.length && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "3rem",
					}}>
					<motion.button
						onClick={handleLoadMore}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						style={{
							padding: "0.8rem 2rem",
							fontSize: "1.1rem",
							borderRadius: "50px",
							border: "2px solid #FFD700",
							background: "transparent",
							color: "#FFD700", // Matches your CodeSquare color
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "10px",
							fontWeight: "bold",
						}}>
						Load More <ChevronDown />
					</motion.button>
				</motion.div>
			)}
		</section>
	);
};

export default Projects;
