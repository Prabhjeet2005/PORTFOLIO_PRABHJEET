import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
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
			github: "https://github.com/Prabhjeet2005/Simon-Game?tab=readme-ov-file",
			live: "https://prabhjeet2005.github.io/Simon-Game/",
		},
		{
			image:
				"./images/20250723_0056_To-Do List Website_simple_compose_01k0sshwq9f1svmt38kbhh5yx1.png",
			heading: "Task Manager",
			github: "https://github.com/Prabhjeet2005/to-do-list?tab=readme-ov-file",
			live: "https://todolist-flame-theta.vercel.app/",
		},
	];
  return (
		<section id="projects" className="edu-conatiner">
			<section className="about-title img-center">
				Projects{" "}
				<img className="img-college" src="./images/project.svg" alt="" />{" "}
			</section>
			<section className="product-multiple-card-container">
				{projects.map((item) => (
					<ProjectCard
						key={item.image}
						image={item.image}
						heading={item.heading}
						live={item.live}
						github={item.github}
					/>
				))}
			</section>
		</section>
	);
}

export default Projects