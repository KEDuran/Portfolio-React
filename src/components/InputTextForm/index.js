import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./style.css";

function InputTextForm(props) {
	return (
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<InputGroup.Text id="inputGroup-sizing-default" className=" text-light green">
					{props.name}
				</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl
				aria-label="Default"
				aria-describedby="inputGroup-sizing-default"
			/>
		</InputGroup>
	);
}

export default InputTextForm;
