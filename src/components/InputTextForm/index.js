import React from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import "./style.css";

function InputTextForm(props) {
	return (
		<Form>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>{props.name}</Form.Label>
				<Form.Control type={props.type} placeholder={props.placeholder} />
			</Form.Group>
		</Form>
		// <InputGroup className="mb-3">
		// 	<InputGroup.Prepend>
		// 		<InputGroup.Text
		// 			id="inputGroup-sizing-default"
		// 			className=" text-light green"
		// 		>
		// 			{props.name}
		// 		</InputGroup.Text>
		// 	</InputGroup.Prepend>
		// 	<FormControl
		// 		aria-label="Default"
		// 		aria-describedby="inputGroup-sizing-default"
		// 	/>
		// </InputGroup>
	);
}

export default InputTextForm;
