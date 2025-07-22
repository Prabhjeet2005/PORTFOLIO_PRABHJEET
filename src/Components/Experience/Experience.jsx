import React from "react";
import { CodeSlash } from "react-bootstrap-icons";

const Experience = () => {
	return (
		<section id="experience" className="edu-conatiner">
			<section className="about-title img-center">
				Experience{" "}
				<img
					className="github"
					src="./images/job-search-work-svgrepo-com (1).svg"
					alt=""
				/>{" "}
			</section>
			<section className="edu-content display-flex-row">
				<img
					src="./images/raisedigital.jpeg"
					className="github round-img"
					alt="logo"
				/>
				<section className="edu-title">RaiseDigital</section>
				<section>Web Developer Intern</section>
				<section className="edu-subtitle">
					Redesigned &amp; optimised responsive web pages using ReactJs,
					<br /> leading to 15% increase in user engagement and a 20% reduction
					in page load times.
					<br />
					Utilized RESTful APIs with Node.js &amp; Express.js to enable seemless
					communication between server &amp; client.
					<br />
					Collabrated with other members and resolved 10+ bugs.
				</section>
				<section className="edu-desc">
					<span> </span> May 2023 - June 2023{" "}
				</section>
			</section>
		</section>
	);
};

export default Experience;
