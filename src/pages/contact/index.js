import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import BtnComponent from "../../components/Button";
import InputTextForm from "../../components/InputTextForm";
import InputTextArea from "../../components/InputTextArea";

function ContactPage(props) {
	return (
		<Container>
			<Row>
				<Col sm={1} md={1} lg={3}></Col>
				<Col sm={10} md={10} lg={6}>
					<Row>
						<InputTextForm name="Name" />
					</Row>
					<Row>
						<InputTextForm name="Email Address" />
					</Row>
					<Row>
						<InputTextArea name="Comment" />
					</Row>
					<Row>
						<BtnComponent name="Submit" />
					</Row>
				</Col>
				<Col sm={1} md={1} lg={3}></Col>
			</Row>
		</Container>
	);
}
export default ContactPage;
