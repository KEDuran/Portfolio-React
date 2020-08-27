import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

function InputTextForm(props) {
	return (
		<Form>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>{props.name}</Form.Label>
				<Form.Control type={props.type} placeholder={props.placeholder} />
			</Form.Group>
		</Form>
	);
}

export default InputTextForm;
