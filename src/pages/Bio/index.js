import React from "react";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import {
	FaBriefcase,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from "react-icons/fa";

import { FiSmartphone } from "react-icons/fi";

function BioPage() {
	return (
		<Container>
			<Row>
				<Col sm={1} md={2} lg={2}></Col>
				<Col sm={10} md={8} lg={8}>
					<h3 className="mb-3 mt-4">About Me</h3>
				</Col>
				<Col sm={1} md={2} lg={2}></Col>
			</Row>
			<Row>
				<Col sm={1} md={2} lg={2}></Col>
				<Col sm={10} md={8} lg={8}>
					<Card>
						<Card.Img variant="top" src={require("./images/Krystal.png")} />
						<Card.Body>
							<Card.Title>Bio</Card.Title>
							<Card.Text>
								My name is Krystal E. Duran, and I exploring the dynamic
								web development industry. This is my personal portfolio site
								that includes my bio, project history, fun facts abouts me, and
								my contact information. Here is my brief bio!
							</Card.Text>
							<Card.Text>
								I grew up in a small border city named San Benito, Texas as a
								member of a medium sized family of six. I attended the
								University of Texas Pan American (now know as the University of
								Texas Rio Grande Valley) and earned a Bachelor in Political
								Science, Bachelor in Psychology, and a Master of Public
								Administration.
							</Card.Text>
							<Card.Text>
								I live in Pflugerville, Texas with my wonderful husband, James,
								and our spunky terrier, Caleb. I am currently employed as a
								Technical Business Analyst for WEX, Inc.
							</Card.Text>
							<Card.Text>
								I have a combined 12 years of project management and data
								analytics experience in the public, nonprofit, and private sector. I
								attribute my professional success to my constant desire to continue 
								learning and leveraging both my business and technical savy skillsets.
							</Card.Text>
							<Card.Text>
								As technical skills become a non-negotiable for today’s
								workforce, I decided it’s time for me to learn how to code! I am
								currently enrolled in a UT Full Stack Development Bootcamp and
								can’t wait to leverage my project management experience and web
								development skill set.
							</Card.Text>
							<Card.Title>Find Me On</Card.Title>
							<Card.Text>
								For more information on my professional endeavors, please
								reference my resume, LinkedIn, or GitHub profile via the
								provided links below.
							</Card.Text>
							<ListGroup>
								<ListGroup.Item>
									<a href="https://drive.google.com/file/d/19KIgS42PcWX6oEKzVI1cSNP5Px2pAE8P/view?usp=sharing">
										<FaBriefcase className="mr-1" /> Resume for Krystal E. Duran
									</a>
								</ListGroup.Item>
								<ListGroup.Item>
									<a href="https://www.linkedin.com/in/krystal-e-duran-b64552123/">
										<FaLinkedin className="mr-1" /> LinkedIn
									</a>
								</ListGroup.Item>
								<ListGroup.Item>
									<a href="https://github.com/KEDuran">
										<FaGithub className="mr-1" /> GitHub
									</a>
								</ListGroup.Item>
							</ListGroup>
							<Card.Text className="mt-3">
								I call also be reached via the phone number or email listed
								below.
							</Card.Text>
							<ListGroup>
								<ListGroup.Item>
									<a href="#">
										<FiSmartphone className="mr-1" />
										(956) 241-1709
									</a>
								</ListGroup.Item>
								<ListGroup.Item>
									<a href="mailto:krystal.e.garcia@gmail.com">
										<FaRegEnvelope className="mr-1" />
										krystal.e.garcia@gmail.com
									</a>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={1} md={2} lg={2}></Col>
			</Row>
		</Container>
	);
}

export default BioPage;
