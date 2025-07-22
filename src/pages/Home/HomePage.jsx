import React from "react";
import "./HomePage.css";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Education from "../../Components/Education/Education";
import Skills from "../../Components/Skills/Skills";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Certifications from "../../Components/Certifications/Certifications";

const HomePage = () => {
	return (
    <>
    <section className="profile-below-text">Prabhjeet Singh Sandhu</section>
			<section className="homepage-different-outer-container">
				<AboutMe />
				<Education />
				<Skills />
				<Experience />
				<Projects />
				<Certifications />
			</section>
		</>
	);
};

export default HomePage;
