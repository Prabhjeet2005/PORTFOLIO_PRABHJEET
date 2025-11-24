import React, { useState, useEffect } from "react";
import { List, XLg } from "react-bootstrap-icons";
import { motion, AnimatePresence } from "framer-motion";
import "./NavbarComponent.css";

const NavbarComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1028);

	// Handle screen resize to auto-close/open menu logic
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1028);
			if (window.innerWidth >= 1028) {
				setIsOpen(true);
			} else {
				setIsOpen(false);
			}
		};

		// Set initial state
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const navLinks = [
		{ name: "About", href: "#aboutme" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Experience", href: "#experience" },
		{ name: "Education", href: "#education" },
		{ name: "Contact", href: "#contact" },
		{ name: "Certifications", href: "#certifications" },
	];

	// Animation Variants
	const menuVariants = {
		closed: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.3, ease: "easeInOut" },
		},
		open: {
			opacity: 1,
			height: "auto",
			transition: { duration: 0.3, ease: "easeInOut" },
		},
	};

	return (
		<motion.nav
			className="navbar-container glass-effect"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}>
			{/* Mobile Toggle Icon */}
			{isMobile && (
				<div className="navbar-header">
					<motion.div
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsOpen(!isOpen)}
						className="hamburger-icon">
						{isOpen ? <XLg /> : <List />}
					</motion.div>
				</div>
			)}

			{/* Links Container */}
			<AnimatePresence>
				{(isOpen || !isMobile) && (
					<motion.div
						className="navbar-links"
						variants={isMobile ? menuVariants : null}
						initial={isMobile ? "closed" : null}
						animate={isMobile ? "open" : null}
						exit={isMobile ? "closed" : null}>
						{navLinks.map((link) => (
							<motion.a
								key={link.name}
								href={link.href}
								className="navbar-item"
								whileHover={{ scale: 1.1, color: "yellow" }}
								whileTap={{ scale: 0.95 }}
								onClick={() => isMobile && setIsOpen(false)} // Close menu on click (mobile)
							>
								{link.name}
								{/* Underline Animation on Hover */}
								<motion.div
									className="underline"
									initial={{ width: 0 }}
									whileHover={{ width: "100%" }}
									transition={{ duration: 0.3 }}
								/>
							</motion.a>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default NavbarComponent;
