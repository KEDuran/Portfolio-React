import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function FunFactsCard(props) {
	return (
		<Card className="mb-4">
			<Card.Header className="green text-light bold">{props.header}</Card.Header>
			<Card.Img
				variant="top"
				src={props.image}
				className="funFacts-card-img-top bodyBackground"
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.message}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default FunFactsCard;
