import React from "react";
import { InputGroup, InputText, FormControl } from "react-bootstrap";

function InputText(props) {
	return (
		<InputGroup className="mb-3">
			<InputGroup.Prepend>
				<InputGroup.Text id="inputGroup-sizing-default">
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

export default InputText;
