import React from "react";

const AboutMe = () => {
	return (
		<section
			id="aboutme"
			className="display-flex-row align-item-center home-container-outer">
			<section className="profile-pic-container">
				{" "}
				<span>
					<img className="profile-pic" src="./images/profile.png" alt="Image" />{" "}
				</span>
			</section>
			<section>
				<section className="about-title">Prabhjeet Singh Sandhu</section>
				<section>
					<section className="about-content">
						<p>
							I am pursuing B.Tech in Computer Science & Engineering at Guru
							Gobind Singh Indraprastha University, with a 9.5/10
							GPA.
							<br />
							My core expertise encompasses the MERN stack and fundamental CS concepts
							DBMS, OOP, DSA, and Computer Networks. <br />I am also passionate
							about AI/ML and Data Science, and continually expanding my skills
							in these areas.
							<br />
							Till date, I have earned certifications in IBM Data Science,
							GeeksforGeeks Full Stack Development, and Meta DBMS, and solved
							over 350 DSA problems across LeetCode, GFG, and Coding Ninjas.{" "}
							<br />I am seeking software engineering internships where I can
							contribute, learn, and grow in a challenging environment.
						</p>
					</section>
					<section className="coding-profiles">
						{" "}
						<a
							href="mailto:prabhjeetsandhu010@gmail.com"
							target="_blank"
							rel="noreferrer">
							{" "}
							<img
								className="img-college github"
								src="./images/gmail.svg"
								alt=""
							/>{" "}
						</a>{" "}
						<a
							href="https://www.linkedin.com/in/prabhjeetsandhu/"
							target="_blank"
							rel="noreferrer">
							{" "}
							<img
								className="img-college github"
								src="./images/linkedin-svgrepo-com.svg"
								alt=""
							/>{" "}
						</a>{" "}
						<a
							href="https://github.com/Prabhjeet2005/"
							target="_blank"
							rel="noreferrer">
							{" "}
							<img
								className="img-college github"
								src="./images/github-inverted-svgrepo-com.svg"
								alt=""
							/>{" "}
						</a>{" "}
						<a
							href="https://leetcode.com/u/Prabhjeetsandhu010/"
							target="_blank"
							rel="noreferrer">
							{" "}
							<img
								className="img-college github"
								src="./images/leetcode.svg"
								alt=""
							/>{" "}
						</a>{" "}
						<a
							href="https://www.naukri.com/code360/profile/prabhjeetsandhu"
							target="_blank"
							rel="noreferrer">
							{" "}
							<img
								className="img-college github"
								src="./images/codingNinja.jpeg"
								alt=""
							/>{" "}
						</a>{" "}
						<a
							href="https://www.geeksforgeeks.org/user/prabhjeetsandhu/"
							target="_blank"
							rel="noreferrer">
							{" "}
							<img
								className="img-college github"
								src="./images/geeksforgeeks-svgrepo-com.svg"
								alt=""
							/>{" "}
						</a>{" "}
					</section>
				</section>
			</section>
		</section>
	);
};

export default AboutMe;
