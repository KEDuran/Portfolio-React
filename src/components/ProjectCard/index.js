import React from "react";
import { Card } from "react-bootstrap";
import "./style";

function ProjectCard(props) {
	return (
		<Card>
			<Card.Header className="green text-light">{props.header}</Card.Header>
			<Card.Img variant="top" src={props.src} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="secondary" href={props.href1} className="green">
					{props.btn1}
				</Button>
				<Button variant="secondary" href={props.href2} className="green">
					{props.btn2}
				</Button>
			</Card.Body>
		</Card>
	);
}

export default ProjectCard;
