import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";
import ProjectCard from "../../components/ProjectCard";

function ProjectPage() {
	return (
		<Container>
			<Row className="mt-5">
				<Col sm={1} md={1} lg={1}></Col>
				<Col sm={10} md={10} lg={10}>
					<h3 className="mb-3">Projects</h3>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<ProjectCard
						header="Project 1 - Wedding Planner"
						src={require("./images/WeddingPlanner.png")}
						title="Description"
						text="React.js full stack web application with built in user authentication developed to help user plan a wedding."
						btn1="GitHub Repo"
						href1="https://github.com/wedding-planner-app/wedding-planner"
						btn2="Deployed Project"
						href2="https://wedding-planner-platform.herokuapp.com/"
					/>
				</Col>
				<Col sm={5} md={5} lg={5}>
					<ProjectCard
						header="Project 2 - Movie Selection App"
						src={require("./images/movieSelection.png")}
						title="Description"
						text="Web application developed to help users select movie streaming content in Amazon, Hulu, and Netflix based on user criteria selections."
						btn1="GitHub Repo"
						href1="https://github.com/Group4project1/project1"
						btn2="Deployed Project"
						href2="https://group4project1.github.io/project1/"
					/>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<ProjectCard
						header="Project 3 - Code Quiz"
						src={require("./images/codeQuiz.png")}
						title="Description"
						text="Online code quiz with 5 test questions that willgive users 75 seconds to test their knowledge of HTML and JavaScript."
						btn1="GitHub Repo"
						href1="https://github.com/KEDuran/Code_Quiz"
						btn2="Deployed Project"
						href2="https://keduran.github.io/Code_Quiz/"
					/>
				</Col>
				<Col sm={5} md={5} lg={5}>
					<ProjectCard
						header="Project 4 - Weather Dashboard"
						src={require("./images/weatherDashboard.png")}
						title="Description"
						text="Weather dashboard app developed to allow users to see the current and 5-day weather forecast for any searched city."
						btn1="GitHub Repo"
						href1="https://github.com/KEDuran/Weather_Dashboard"
						btn2="Deployed Project"
						href2="https://keduran.github.io/Weather_Dashboard/"
					/>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
			<Row>
				<Col sm={1} md={1} lg={1} className="mb-4"></Col>
				<Col sm={5} md={5} lg={5} className="mb-4">
					<ProjectCard
						header="Project 5 - Team Profile Generator CLI Application"
						src={require("./images/teamHTMLoutput.png")}
						title="Description"
						text="A commandline interface (CLI) application that prompts users with questions to get info about their team members in order to generate a team webpage."
						btn1="GitHub Repo"
						href1="https://github.com/KEDuran/Team_Profile_Generator"
						btn2="Demo Recording"
						href2="https://drive.google.com/file/d/1p43dYzPLJ-n4I-fFK8yLeB6pnXaDhww-/view?usp=sharing"
					/>
				</Col>
				<Col sm={5} md={5} lg={5}>
					<ProjectCard
						header="Project 6 - Employee Tracker CLI Application"
						src={require("./images/employeeTracker.png")}
						title="Description"
						text="A command line interface application for managing a database of company employee's using node, inquirer, and MySQL."
						btn1="GitHub Repo"
						href1="https://github.com/KEDuran/Employee_Tracker"
						btn2="Demo Recording"
						href2="https://drive.google.com/file/d/1gSf12LetxqePv8bzVFGV7ntLeab2MXNR/view?usp=sharing"
					/>
				</Col>
				<Col sm={1} md={1} lg={1}></Col>
			</Row>
		</Container>
	);
}

export default ProjectPage;
