import React from "react";
import { Mortarboard } from "react-bootstrap-icons";

const Education = () => {
	return (
		<section id="education" className="edu-conatiner">
			<section className="about-title img-center">
				Education <Mortarboard />
			</section>
			<section className="edu-content display-flex-row">
				<img
					src="./images/GGSIU_logo.svg.png"
					className="img-college"
					alt="logo"
				/>
				<section className="edu-title">
					Guru Gobind Singh Indraprastha University
				</section>
				<section className="edu-subtitle">
					Bachelor Of Technology in Computer Science Engineering
				</section>
				<section className="edu-desc">
					<section>GPA: 9.5/10</section> 2023-2027{" "}
				</section>
			</section>
		</section>
	);
};

export default Education;
