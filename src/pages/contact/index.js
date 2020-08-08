import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import BtnComponent from "../../components/Button";
import InputTextForm from "../../components/InputTextForm";
import InputTextArea from "../../components/InputTextArea";

function ContactPage() {
	return (
		<Container>
			<Row>
				<Col sm={1} md={1} lg={2}></Col>
				<Col sm={10} md={10} lg={8}>
					<h3 className="mt-5 mb-3">Contact Me</h3>
					<InputTextForm className="mb-2" name="Name" />
					<InputTextForm className="mb-2" name="Email" />
					<InputTextArea className="mb-3" name="Comment" />
					<div className="mt-3">
						<BtnComponent name="Submit" />
					</div>
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
		</Container>
	);
}
export default ContactPage;
