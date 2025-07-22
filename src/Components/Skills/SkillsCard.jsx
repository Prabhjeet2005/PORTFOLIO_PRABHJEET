import React from "react";

const SkillsCard = ({ imageStored, value }) => {
	return (
		<>
			<section>
				
				<section className="skills-individual"><img className="skill-img" src={imageStored} alt="Image" />{value}</section>
			</section>
		</>
	);
};

export default SkillsCard;
