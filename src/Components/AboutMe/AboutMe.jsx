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
						className="profile-pic w-72 h-72 rounded-full object-cover border-4 border-transparent shadow-lg"
						src="./images/profile1.jpg"
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
							I am a 6th-semester Computer Science undergrad at GGSIPU (9.5
							CGPA), specializing in{" "}
							<strong>scalable backend systems</strong> and{" "}
							<strong>full-stack architecture</strong>.
							<br />
							<br />I thrive on competitive programming and complex
							problem-solving. I hold a peak{" "}
							<strong>LeetCode rating of 1933 (Knight)</strong>—ranking
							globally at 158—and recently ranked in the{" "}
							<strong>
								Top 1,500 nationwide in Google's The Big Code 2026
							</strong>
							, passing 100% of test cases in Round 2.
							<br />
							<br />
							Professionally, I have interned at{" "}
							<strong>Tech Mahindra</strong> and {" "}
							<strong>Delhi Police</strong>, where I engineered optimized
							Node.js data pipelines that reduced server memory consumption
							by 90% and developed multi-threaded Python extraction
							architectures.
							<br />
							<br />
							Equipped with deep expertise in{" "}
							<strong>C++, the MERN stack, Docker, and SQL</strong>, I am
							actively seeking software engineering roles at product-based
							companies where I can leverage my strong DSA foundation to
							build high-impact, optimized software.
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
