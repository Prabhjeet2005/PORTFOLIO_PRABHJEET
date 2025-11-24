import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import { motion } from "framer-motion";
import { ExclamationTriangle } from "react-bootstrap-icons";

const NotFound = () => {
	const navigate = useNavigate();
	const [countdown, setCountdown] = useState(5);

	useEffect(() => {
		// 1. If countdown reaches 0, navigate home automatically
		if (countdown === 0) {
			navigate("/", { replace: true });
			return;
		}

		// 2. Decrease count every second
		const timer = setTimeout(() => {
			setCountdown((prev) => prev - 1);
		}, 1000);

		// 3. Cleanup timer
		return () => clearTimeout(timer);
	}, [countdown, navigate]);

	return (
		<section
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#1a1a1a",
				color: "white",
				textAlign: "center",
				position: "relative", // Ensure context for z-index
			}}>
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<ExclamationTriangle size={80} color="#FFD700" />
			</motion.div>

			<motion.h1
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}
				style={{ fontSize: "4rem", margin: "1rem 0", color: "#FFD700" }}>
				404
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
				style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
				Oops! The page you are looking for doesn't exist.
			</motion.p>

			{/* Countdown Message */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6 }}
				style={{ fontSize: "1rem", color: "#888", marginBottom: "2rem" }}>
				Redirecting to Home in {countdown} seconds...
			</motion.p>

			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.8 }}
				style={{ position: "relative", zIndex: 10 }} // Fixes unclickable button issue
			>
				{/* Using Link with 'replace' is the most reliable method */}
				<Link to="/" replace style={{ textDecoration: "none" }}>
					<motion.button
						whileHover={{
							scale: 1.05,
							backgroundColor: "#FFD700",
							color: "#000",
						}}
						whileTap={{ scale: 0.95 }}
						style={{
							padding: "1rem 2rem",
							fontSize: "1.2rem",
							borderRadius: "50px",
							border: "2px solid #FFD700",
							background: "transparent",
							color: "#FFD700",
							cursor: "pointer",
							fontWeight: "bold",
							transition: "all 0.3s ease",
						}}>
						Go Back Home Now
					</motion.button>
				</Link>
			</motion.div>
		</section>
	);
};

export default NotFound;
