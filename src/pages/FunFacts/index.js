import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FunFactsCard from "../../components/FunFactsCard";
import "./images";
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
					<FunFactsCard
						src="./images/SanBenito.png"
						title="Born and Raised"
						message="I grew up in San Benito, Texas (a small border town in the Rio Grande Valley). I come from a very loving (and large) Hispanic family!"
					/>
					<FunFactsCard
						src="./images/UTPA.png"
						title="UTPA Alumni"
						message="I attended the University of Texas Pan American (now renamed to the University of Texas Rio Grande Valley)."
					/>
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={2}></Col>
				<Col sm={10} md={10} lg={8}>
					<FunFactsCard
						src="./images/Pflugerville.png"
						title="My Home"
						message="My husband, James, and I have lived in Pflugerville, Texas (aka a city between a rock and a weird place) since 2016!"
					/>
					<FunFactsCard
						src="./images/Disney.png"
						title="The Dynamic Duo"
						message="James and I are a small but mighty family! We work together to provide the best life for us and our pupper."
					/>
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={2}></Col>
				<Col sm={10} md={10} lg={8}>
					<FunFactsCard
						src="./images/Caleb.png"
						title="Our Pupper, Caleb"
						message="Caleb has been a wonderful part of our lives for the past 11 years. He is a super cute pupper that likes rocking some snazzy shoes!"
					/>
					<FunFactsCard
						src="./images/Disney.png"
						title="Halloween at TASB"
						message="I have worked for the Texas Association of School Boards (TASB) since 2018. I work with a great team of fun and smart people!"
					/>
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
		</Container>
	);
}

export default FunFactsPage;
