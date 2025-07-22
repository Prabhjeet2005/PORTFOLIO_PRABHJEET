import React from "react";

const CertificationCard = ({ image, title, source }) => {
	return (
		<section className="certification-card-container">
			<img className="certification-image" src={image} alt="logo" />
			<section className="certification-title-view-container">
				<section className="certification-card-title">{title}</section>
				<a
					href={source}
					target="_blank"
					rel="noreferrer"
					className="certification-card-view">
					View
				</a>
			</section>
		</section>
	);
};

export default CertificationCard;
