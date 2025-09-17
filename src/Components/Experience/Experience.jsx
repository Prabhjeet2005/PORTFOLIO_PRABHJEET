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
					src="./images/Tech_Mahindra-Logo.wine.svg"
					className="github round-img"
					alt="logo"
				/>
				<section className="edu-title">Tech Mahindra</section>
				<section>Software Engineer Intern</section>
				<section className="edu-subtitle">
					Designed and deployed a backup management portal using a
					Node.js/Express.js backend, creating 20+ REST APIs for scheduling and
					monitoring.
					<br />
					Reduced backup verification time to under 30 seconds by automating a
					previously manual workflow, dramatically increasing operational
					efficiency.
					<br />
					Leveraged PostgreSQL to store and manage system metadata, ensuring
					data integrity and enabling robust logging and reporting features.
					<br />
				</section>
				<section className="edu-desc">
					<span> </span> September 2025 - October 2025{" "}
				</section>
			</section>
			<section className="edu-content display-flex-row">
				<img
					src="./images/valnee.png"
					className="github round-img"
					alt="logo"
				/>
				<section className="edu-title">Valnee Solutions</section>
				<section>Software Developer Intern</section>
				<section className="edu-subtitle">
					Developed and maintained a full-stack web application by architecting
					the backend with Python (Flask) and implementing the user interface
					with React.js.
					<br />
					Improved application stability and performance by identifying and
					resolving over 20 critical bugs in collaboration with a team of 3
					developers.
					<br />
					Designed and deployed an automated web scraping tool to collect and
					structure data from Facebook Marketplace ads, which powered the
					application's primary business intelligence features.
					<br />
				</section>
				<section className="edu-desc">
					<span> </span> September 2025 - October 2025{" "}
				</section>
			</section>
			<section className="edu-content display-flex-row">
				<img
					src="./images/geeksforgeeks-svgrepo-com.svg"
					className="github round-img"
					alt="logo"
				/>
				<section className="edu-title">GeeksForGeeks</section>
				<section>Full Stack Developer Intern</section>
				<section className="edu-subtitle">
					Created a RESTful API with 15+ endpoints, enabling 3 core application
					features for user data management and processing.<br/> Developed a
					modular frontend with 10+ reusable React components, reducing future
					development time for related features by an estimated 20%.<br/>
				</section>
				<section className="edu-desc">
					<span> </span> May 2025 - August 2025{" "}
				</section>
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
					<span> </span> May 2024 - June 2024{" "}
				</section>
			</section>
		</section>
	);
};

export default Experience;
