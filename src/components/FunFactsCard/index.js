import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function FunFactsCard(props) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					{props.message}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default FunFactsCard;
