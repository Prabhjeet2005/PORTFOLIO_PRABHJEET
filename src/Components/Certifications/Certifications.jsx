import React from "react";
import CertificationCard from "./CertificationCard";
import { Award } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import "./Certifications.css"; // Create this CSS file

const Certifications = () => {
	const allCertifications = [
		{
			image: "./images/ibm-logo-svgrepo-com.svg",
			title: "Data Science",
			source:
				"https://drive.google.com/file/d/12QHgcXIoTCYjVvEYx8O8xVOJ-i5T2rMp/view?usp=sharing",
		},
		{
			image: "./images/ibm-logo-svgrepo-com.svg",
			title: "Data Analysis",
			source:
				"https://drive.google.com/file/d/1rbL6elm4jrLJiMf5E4gy7kf4sXg3_TLH/view?usp=sharing",
		},
		{
			image: "./images/ibm-logo-svgrepo-com.svg",
			title: "Python For Data Science",
			source:
				"https://drive.google.com/file/d/12JwSdc9QcXkPcJskZoX-fH5cdiPBuMdG/view?usp=sharing",
		},
		{
			image: "./images/meta.svg",
			title: "Introduction To Databases",
			source:
				"https://drive.google.com/file/d/1dplN03igljonB3u0hI_Repz47lrwHwwr/view?usp=sharing",
		},
		{
			image: "./images/meta.svg",
			title: "Version Control",
			source:
				"https://drive.google.com/file/d/1XZankwuC92z_QS7MOL1R5qcTYw6bF7lI/view?usp=sharing",
		},
		{
			image: "./images/meta.svg",
			title: "Database Structure & Management With MySQL",
			source:
				"https://drive.google.com/file/d/1-9WDFjeUPxv8RHv6r4G3YM7ZZFu47TK8/view?usp=sharing",
		},
		{
			image: "./images/ieee.svg",
			title: "DSA Bootcamp",
			source:
				"https://drive.google.com/file/d/10WTFAh_7G008s2YLDaQ33f6j9sZDEt2K/view?usp=sharing",
		},
		{
			image: "./images/iiit.jpeg",
			title: "Hackathon",
			source:
				"https://drive.google.com/file/d/10WTFAh_7G008s2YLDaQ33f6j9sZDEt2K/view?usp=sharing",
		},
		{
			image: "./images/reskill.jpeg",
			title: "Hackathon",
			source:
				"https://drive.google.com/file/d/15KsaMyy_-DUQg_3FkZOmcSFznrMnI5zY/view?usp=sharing",
		},
		{
			image: "./images/my.jpeg",
			title: "Hackathon",
			source:
				"https://drive.google.com/file/d/1klGAEvJr9nIIDhGf2Q4pEherf5ZwpsXl/view?usp=sharing",
		},
	];

	return (
		<section id="certifications" className="certifications-container">
			<motion.div
				className="about-title img-center"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}>
				Certifications{" "}
				<Award style={{ marginLeft: "10px", color: "yellow" }} />
			</motion.div>

			<div className="certifications-grid">
				{allCertifications.map((item, index) => (
					<CertificationCard
						key={index} // Using index as key if source isn't unique, but prefer unique ID
						image={item.image}
						title={item.title}
						source={item.source}
					/>
				))}
			</div>
		</section>
	);
};

export default Certifications;
