import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

function BtnComponent(props) {
	return (
		<Button
			className="green"
			variant="secondary"
			href={props.href}
			onClick={props.onClick}
			size="md"
		>
			{props.name}
		</Button>
	);
}

export default BtnComponent;
