import React, { useState } from "react";
import { List,XLg } from "react-bootstrap-icons";

import "./NavbarComponent.css";
const NavbarComponent = () => {
	const [showFullNavbar, setShowFullNavbar] = useState(true);

  const handleShowFullNavBarClick = ()=>{
    setShowFullNavbar(!showFullNavbar)
  }
	return (
		<>
			<section className="display-flex-row align-items-center navbar-container">
				{showFullNavbar && (
					<>
						<section className="navbar-item">Home</section>
						<section className="navbar-item">
							<span>About Me</span>
						</section>
						<section className="navbar-item">Education</section>
						<section className="navbar-item">Skills</section>
						<section className="navbar-item">Education</section>
						<section className="navbar-item">Experience</section>
						<section className="navbar-item">Projects</section>
						<section className="navbar-item">Certifications</section>
						<section className="navbar-item">Achievements</section>
						<section className="navbar-item">Contact</section>
					</>
				)}
				{!showFullNavbar ? (
					<section onClick={handleShowFullNavBarClick}>
						<List className="hamburger" />{" "}
					</section>
				) : (
					<section onClick={handleShowFullNavBarClick}>
						<XLg className="hamburger" />{" "}
					</section>
				)}
			</section>
		</>
	);
};

export default NavbarComponent;
