import React from "react";
import { Button } from "react-bootstrap";

function BtnComponent(props) {
	return (
		<Button
			className="button-color text-light"
			href={props.href}
			onClick={props.onClick}
			size="md"
			disabled
		>
			{props.name}
		</Button>
	);
}

export default BtnComponent;
