import React from "react";
import SEO from "../../Components/SEO";
import "./HomePage.css";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Education from "../../Components/Education/Education";
import Skills from "../../Components/Skills/Skills";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Certifications from "../../Components/Certifications/Certifications";
import AnimatedBackground from "../../Components/Background/AnimatedBackground"; // Import 3D BG
import RevealOnScroll from "../../Components/Animations/RevealOnScroll"; // Import Reveal Wrapper
import Contact from "../../Components/Contact/Contact";
const HomePage = () => {
	return (
		<>
			<SEO
				title="Home"
				description="Prabhjeet Singh Sandhu is a Full Stack Developer building scalable web applications with the Mern stack, Next.js."
				keywords="React Developer, Next.js, Node.js, Freelancer, Software Engineer"
			/>
			<AnimatedBackground /> {/* 3D Background sits behind everything */}
			<section className="homepage-different-outer-container pt-[15em] px-[1em]">
				<RevealOnScroll width="100%">
					<AboutMe />
				</RevealOnScroll>

				<RevealOnScroll width="100%">
					<Skills />
				</RevealOnScroll>

				<RevealOnScroll width="100%">
					<Experience />
				</RevealOnScroll>

				<RevealOnScroll width="100%">
					<Projects />
				</RevealOnScroll>

				<RevealOnScroll width="100%">
					<Education />
				</RevealOnScroll>

				<RevealOnScroll width="100%">
					<Contact />
				</RevealOnScroll>

				<RevealOnScroll width="100%">
					<Certifications />
				</RevealOnScroll>
			</section>
		</>
	);
};

export default HomePage;
