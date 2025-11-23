import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
	const projects = [
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

	// Staggered Animation for the Grid
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 120 },
		},
	};

	return (
		<section
			id="projects"
			className="edu-conatiner"
			style={{ padding: "4rem 0", overflow: "hidden" }}>
			<motion.section
				className="about-title img-center"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				style={{ marginBottom: "3rem" }}>
				Projects{" "}
				<motion.img
					className="img-college"
					src="./images/project.svg"
					alt=""
					animate={{ rotate: [0, 15, -15, 0] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "reverse",
						ease: "easeInOut",
					}}
					style={{ marginLeft: "10px" }}
				/>
			</motion.section>

			<motion.div
				className="product-multiple-card-container"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}>
				{projects.map((item) => (
					<motion.div key={item.heading} variants={itemVariants}>
						<ProjectCard
							image={item.image}
							heading={item.heading}
							live={item.live}
							github={item.github}
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Projects;
