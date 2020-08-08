import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./style.css";

function InputTextArea(props) {
	return (
		<InputGroup>
			<InputGroup.Prepend>
				<InputGroup.Text className="light-green">{props.name}</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl as="textarea" aria-label="With textarea" />
		</InputGroup>
	);
}

export default InputTextArea;
