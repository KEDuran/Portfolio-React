import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "./style.css";
import BtnComponent from "../../components/Button";
import InputTextForm from "../../components/InputTextForm";
import InputTextArea from "../../components/InputTextArea";

function ContactPage() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
						<BtnComponent name="Submit" onClick={handleShow} />
					</div>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Work in Progress</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Email submission is not available at this time. Please contact me
							via LinkedIn or Github. Thanks!
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="secondary"
								onClick={handleClose}
								className="green"
							>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Col>
				<Col sm={1} md={1} lg={2}></Col>
			</Row>
		</Container>
	);
}
export default ContactPage;
