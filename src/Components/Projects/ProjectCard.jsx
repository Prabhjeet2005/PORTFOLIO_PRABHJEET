import React from 'react'

const ProjectCard = ({image,heading,live,github}) => {
  return (
		<section className="project-card-container">
			<img className="project-card-img" src={image} alt="Project Image" />
			<section className="project-card-title">{heading}</section>
			<section className="project-card-footer">
				<a target='_blank' href={github} className="project-card-link">GitHub</a>
				{live && <a target='_blank' href={live} className="project-card-link">Live</a>}
			</section>
		</section>
	);
}

export default ProjectCard