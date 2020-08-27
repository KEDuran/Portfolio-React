import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";
import ProjectCard from "../../components/ProjectCard";
import projectData from "../../assets/projectData";

function ProjectPage() {
	const projectList = projectData.map((data) => (
		<ProjectCard
			key={data.id}
			title={data.title}
			url={data.url}
			repository={data.repository}
			image={data.image}
			description={data.description}
			btn1="GitHub Repo"
			btn2="Deployed Link"
		/>
	));

	return (
		<Container>
			{/* page name row */}
			<Row className="mt-5">
				<Col sm={1} md={1} lg={1}></Col>
				<Col sm={10} md={10} lg={10}>
					<h3 className="mb-3">Projects</h3>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			{/* creating the project cards */}
			<Row>
				<Col sm={2} md={2} lg={2}></Col>
				<Col sm={8} md={8} lg={8}>
					{projectList}
				</Col>
				<Col sm={2} md={2} lg={2}></Col>
			</Row>
		</Container>
	);
}

export default ProjectPage;
