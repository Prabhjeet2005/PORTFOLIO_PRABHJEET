import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { InView } from "react-intersection-observer"; // Import Intersection Observer

const AboutMe = () => {
	const [startTyping, setStartTyping] = useState(false);

	return (
		<section
			id="aboutme"
			className="display-flex-row align-item-center home-container-outer">
			<section className="profile-pic-container shrink-0">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}>
					<motion.img
						className="profile-pic w-full object-cover"
						src="./images/profile.jpg"
						alt="Prabhjeet Singh Sandhu"
						animate={{ y: [0, -15, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						whileHover={{
							scale: 1.05,
							boxShadow: "0px 0px 30px rgba(255, 255, 0, 0.3)",
						}}
					/>
				</motion.div>
			</section>

			<section className="w-full ">
				{/* Wrap Title in InView to control typing */}
				<InView
					as="section"
					className="about-title"
					onChange={(inView) => setStartTyping(inView)}
					triggerOnce={false} // Set to true if you want it to type only once
				>
					<span
						style={{
							color: "yellow",
							fontWeight: "800",
							display: "inline-block",
							minHeight: "1.2em", // Reserve height to prevent layout shift
							minWidth: "300px", // Optional: Reserve width if needed
						}}>
						{startTyping && (
							<Typewriter
								options={{
									strings: ["Prabhjeet Singh Sandhu"],
									autoStart: true,
									loop: true,
									delay: 75,
									pauseFor: 5000,
									deleteSpeed: 50,
								}}
							/>
						)}
					</span>
				</InView>

				<section>
					<motion.section
						className="about-content"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}>
						<p>
							I am pursuing B.Tech in Computer Science & Engineering at
							Guru Gobind Singh Indraprastha University, with a 9.5/10 GPA.
							<br />
							<br />
							My core expertise encompasses the MERN stack and fundamental
							CS concepts like DBMS, OOP, DSA, and Computer Networks.{" "}
							<br />
							I am also passionate about AI/ML and Data Science,
							continually expanding my skills in these areas.
							<br />
							<br />
							Till date, I have earned certifications in IBM Data Science,
							GeeksforGeeks Full Stack Development, and Meta DBMS, and
							solved over 500+ DSA problems across LeetCode, GFG, and
							Coding Ninjas. <br />I am seeking software engineering
							internships where I can contribute, learn, and grow in a
							challenging environment.
						</p>
					</motion.section>

					<motion.section
						className="coding-profiles"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}>
						<a
							href="mailto:prabhjeetsandhu010@gmail.com"
							target="_blank"
							rel="noreferrer">
							<img
								className="img-college github"
								src="./images/gmail.svg"
								alt="Gmail"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/prabhjeetsandhu/"
							target="_blank"
							rel="noreferrer">
							<img
								className="img-college github"
								src="./images/linkedin-svgrepo-com.svg"
								alt="LinkedIn"
							/>
						</a>
						<a
							href="https://github.com/Prabhjeet2005/"
							target="_blank"
							rel="noreferrer">
							<img
								className="img-college github"
								src="./images/github-inverted-svgrepo-com.svg"
								alt="GitHub"
							/>
						</a>
						<a
							href="https://leetcode.com/u/Prabhjeetsandhu010/"
							target="_blank"
							rel="noreferrer">
							<img
								className="img-college github"
								src="./images/leetcode.svg"
								alt="LeetCode"
							/>
						</a>
						<a
							href="https://www.naukri.com/code360/profile/prabhjeetsandhu"
							target="_blank"
							rel="noreferrer">
							<img
								className="img-college github"
								src="./images/codingNinja.jpeg"
								alt="Coding Ninjas"
							/>
						</a>
						<a
							href="https://www.geeksforgeeks.org/user/prabhjeetsandhu/"
							target="_blank"
							rel="noreferrer">
							<img
								className="img-college github"
								src="./images/geeksforgeeks-svgrepo-com.svg"
								alt="GeeksForGeeks"
							/>
						</a>
					</motion.section>
				</section>
			</section>
		</section>
	);
};

export default AboutMe;
