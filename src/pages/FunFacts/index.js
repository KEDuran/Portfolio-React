import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FunFactsCard from "../../components/FunFactsCard";

function FunFactsPage() {
	return (
		<Container>
			<Row className="mt-5">
				<Col sm={1} md={1} lg={1}></Col>
				<Col sm={10} md={10} lg={10}>
					<h3 className="mb-3">Fun Facts</h3>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>

			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<FunFactsCard
						src={require("./images/SanBenito.png")}
						title="Born and Raised"
						message="I grew up in San Benito, Texas located in the Rio Grande Valley. I come from a very close-knit Hispanic family!"
					/>
				</Col>
				<Col sm={5} md={5} lg={5}>
					<FunFactsCard
						src={require("./images/UTPA.gif")}
						title="UTPA Alumni"
						message="I attended the University of Texas Pan American (now renamed to the University of Texas Rio Grande Valley)."
					/>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<FunFactsCard
						src={require("./images/Pflugerville.png")}
						title="My Home"
						message="My husband, James, and I have lived in Pflugerville, Texas (aka a city between a rock and a weird place) since 2016!"
					/>
				</Col>
				<Col sm={5} md={5} lg={5}>
					<FunFactsCard
						src={require("./images/Disney.jpg")}
						title="The Dynamic Duo"
						message="James and I are a small but mighty family! We work together to provide the best life for us and our pupper."
					/>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row className="mb-5">
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<FunFactsCard
						src={require("./images/Caleb.jpg")}
						title="Our Pupper, Caleb"
						message="Caleb has been a wonderful part of our lives for the past 11 years. He is a super cute pupper that likes rocking some snazzy shoes!"
					/>
				</Col>
				<Col sm={5} md={5} lg={5}>
					<FunFactsCard
						src={require("./images/TASB.jpg")}
						title="Halloween at TASB"
                        message="I have worked for the Texas Association of School Boards (TASB) since 2018. I work with a great team of fun and smart people!"
					/>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
		</Container>
	);
}

export default FunFactsPage;
