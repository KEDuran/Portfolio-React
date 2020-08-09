import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";
import ProjectCard from "../../components/ProjectCard";

function ProjectPage() {
	return (
		<Container>
			<Row className="mt-5">
				<Col sm={1} md={1} lg={1}></Col>
				<Col sm={10} md={10} lg={10}>
					<h3 className="mb-3">Projects</h3>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<ProjectCard />
				</Col>
				<Col sm={5} md={5} lg={5}>
					<ProjectCard />
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<ProjectCard />
				</Col>
				<Col sm={5} md={5} lg={5}>
					<ProjectCard />
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<ProjectCard />
				</Col>
				<Col sm={5} md={5} lg={5}>
					<ProjectCard />
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
		</Container>
	);
}

export default ProjectPage;
