import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function FunFactsCard(props) {
	return (
		<Card>
			<Card.Img variant="top" src={props.src} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.message}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default FunFactsCard;
