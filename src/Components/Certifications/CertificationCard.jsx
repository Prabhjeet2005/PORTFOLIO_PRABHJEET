import React from "react";
import { motion } from "framer-motion";
import { BoxArrowUpRight } from "react-bootstrap-icons";

const CertificationCard = ({ image, title, source }) => {
	return (
		<motion.div
			className="certification-card"
			whileHover={{
				y: -5,
				backgroundColor: "rgba(255, 255, 255, 0.08)",
				borderColor: "rgba(255, 255, 255, 0.3)",
				boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
			}}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}>
			<div className="cert-image-wrapper">
				<img
					className="certification-image"
					src={image}
					alt={title}
					loading="lazy"
				/>
			</div>

			<div className="cert-content">
				<h3 className="certification-card-title">{title}</h3>

				<motion.a
					href={source}
					target="_blank"
					rel="noreferrer"
					className="certification-card-view"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}>
					View Certificate{" "}
					<BoxArrowUpRight style={{ marginLeft: "8px" }} />
				</motion.a>
			</div>
		</motion.div>
	);
};

export default CertificationCard;
