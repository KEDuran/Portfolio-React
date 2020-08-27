import React from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import "./style.css";
import { First } from "react-bootstrap/esm/PageItem";

function InputTextArea(props) {
	return (
		<Form>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>{props.name}</Form.Label>
				<Form.Control as="textarea" rows="3" />
			</Form.Group>
		</Form>
		// <InputGroup>
		// 	<InputGroup.Prepend>
		// 		<InputGroup.Text className="green text-light">{props.name}</InputGroup.Text>
		// 	</InputGroup.Prepend>
		// 	<FormControl as="textarea" aria-label="With textarea" />
		// </InputGroup>
	);
}

export default InputTextArea;
