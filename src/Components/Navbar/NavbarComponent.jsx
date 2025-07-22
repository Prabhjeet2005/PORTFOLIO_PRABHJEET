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
						<a href="#aboutme"  className="navbar-item">About</a>
						<a href="#education" className="navbar-item">Education</a>
						<a href="#skills" className="navbar-item">Skills</a>
						<a href="#experience" className="navbar-item">Experience</a>
						<a href="#projects" className="navbar-item">Projects</a>
						<a href="#certifications" className="navbar-item">Certifications</a>
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
