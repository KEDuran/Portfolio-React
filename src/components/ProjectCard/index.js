import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

function ProjectCard(props) {
	return (
		<Card className="mb-4">
			<Card.Header className="green text-light bold">{props.title}</Card.Header>
			<Card.Img
				className="project-card-img-top bodyBackground"
				variant="top"
				src={props.image}
			/>
			<Card.Body>
				<Card.Title>Description</Card.Title>
				<Card.Text>{props.description}</Card.Text>
				<Button
					variant="secondary"
					href={props.repository}
					className="green mr-2"
				>
					{props.btn1}
				</Button>
				<Button variant="secondary" href={props.url} className="green">
					{props.btn2}
				</Button>
			</Card.Body>
		</Card>
	);
}

export default ProjectCard;
