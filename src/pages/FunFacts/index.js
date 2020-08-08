import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function FunFactsPage() {
	return (
		<Container>
			<Row>
				<h3 className="mt-5 mb-3">Fun Facts</h3>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={2}></Col>
				<Col sm={10} md={10} lg={8}>
					<FunFactsCard />
					<FunFactsCard />
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={2}></Col>
				<Col sm={10} md={10} lg={8}>
					<FunFactsCard />
					<FunFactsCard />
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={2}></Col>
				<Col sm={10} md={10} lg={8}>
					<FunFactsCard />
					<FunFactsCard />
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
		</Container>
	);
}

export default FunFactsPage;
