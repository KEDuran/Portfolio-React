import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FunFactsCard from "../../components/FunFactsCard";
import funFactsData from "../../assets/funFactsData";

function FunFactsPage() {
	const funFactsList = funFactsData.map((data) => (
		<FunFactsCard
			key={data.id}
			header={data.header}
			image={data.image}
			title={data.title}
			message={data.message}
		/>
	));

	return (
		<Container>
			<Row className="mt-5">
				<Col sm={2} md={2} lg={2}></Col>
				<Col sm={8} md={8} lg={8}>
					<h3 className="mb-3">Fun Facts</h3>
				</Col>
				<Col sm={2} md={2} lg={2}></Col>
			</Row>
			<Row>
				<Col sm={2} md={2} lg={2}></Col>
				<Col sm={8} md={8} lg={8}>
					{funFactsList}
				</Col>
				<Col sm={2} md={2} lg={2}></Col>
			</Row>
		</Container>
	);
}

export default FunFactsPage;
