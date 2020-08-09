import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

function ProjectCard(props) {
	return (
		<Card>
			<Card.Header className="green text-light bold">{props.header}</Card.Header>
			<Card.Img className ="project-card-img-top" variant="top" src={props.src} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="secondary" href={props.href1} className="green mr-2">
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
