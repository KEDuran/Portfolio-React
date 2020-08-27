import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

function InputTextArea(props) {
	return (
		<Form>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>{props.name}</Form.Label>
				<Form.Control as="textarea" rows="3" />
			</Form.Group>
		</Form>
	);
}

export default InputTextArea;
