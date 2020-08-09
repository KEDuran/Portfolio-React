import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";

function ProjectPage() {
	return (
		<Container>
			<Row>
				<Col sm={1} md={1} lg={1}></Col>
				<Col sm={10} md={10} lg={10}>
					<h3 className="mb-3">Projects</h3>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
		</Container>
	);
}

export default ProjectPage;
