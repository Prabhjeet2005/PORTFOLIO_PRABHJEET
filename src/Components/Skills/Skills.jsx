import React from "react";
import { CodeSlash, Mortarboard } from "react-bootstrap-icons";
import SkillsCard from "./SkillsCard";

const Skills = () => {
	const allSkills = [
		{ imageStored: "./images/cpp.svg", value: "C++" },
		{ imageStored: "./images/c.svg", value: "C" },
		{ imageStored: "./images/python-svgrepo-com.svg", value: "Python" },
		{ imageStored: "./images/js.svg", value: "JavaScript " },
		{ imageStored: "./images/java.svg", value: "Java" },
		{ imageStored: "./images/sql1.svg", value: "SQL" },
		{ imageStored: "./images/mysql-logo-svgrepo-com.svg", value: "MySQL" },
		{ imageStored: "./images/html-5-svgrepo-com.svg", value: "HTML" },
		{ imageStored: "./images/css-3-svgrepo-com.svg", value: "CSS" },
		{ imageStored: "./images/mongodb.svg", value: "MongoDB" },
		{ imageStored: "./images/express1.svg", value: "Express.js" },
		{ imageStored: "./images/react.svg", value: "React.js" },
		{ imageStored: "./images/nodejs.svg", value: "Node.js" },
		{ imageStored: "./images/api.svg", value: "RESTful APIs" },
		{ imageStored: "./images/git-svgrepo-com.svg", value: "Git" },
		{
			imageStored: "./images/github-inverted-svgrepo-com.svg",
			value: "GitHub",
		},
		{ imageStored: "./images/vscode.svg", value: "VS Code" },
		{ imageStored: "./images/postman.svg", value: "Postman" },
		{ imageStored: "./images/docker.svg", value: "Docker" },
		{ imageStored: "./images/flask.svg", value: "Flask" },
		{ imageStored: "./images/dsa.svg", value: "DSA" },
		{ imageStored: "./images/oops.svg", value: "OOPS" },
		{ imageStored: "./images/problemsolving.svg", value: "Problem-Solving" },
		{ imageStored: "./images/debug-svgrepo-com.svg", value: "Debugging" },
		{
			imageStored: "./images/machine-learning-01-svgrepo-com.svg",
			value: "ML",
		},
		{ imageStored: "./images/Pandas.svg", value: "Pandas" },
		{ imageStored: "./images/numpy-svgrepo-com.svg", value: "NumPy" },
		{ imageStored: "./images/scikit-learn.svg", value: "Scikit-learn" },
		{ imageStored: "./images/jupyter-svgrepo-com.svg", value: "Jupyter" },
		{
			imageStored: "./images/stacked-bar-chart-svgrepo-com.svg",
			value: "Data Visualization",
		},
		{
			imageStored: "./images/Matplotlib.svg",
			value: "Matplotlib",
		},
		{ imageStored: "./images/seaborn-1.svg", value: "Seaborn" },
	];
	return (
		<section id="skills" className="edu-conatiner">
			<section className="about-title img-center">
				Skills <CodeSlash />
			</section>
			<section className="skills-container">
				{allSkills.map((item) => (
					<SkillsCard
						key={item.value}
						className="skills-individual"
						imageStored={item.imageStored}
						value={item.value}
					/>
				))}
			</section>
		</section>
	);
};

export default Skills;
