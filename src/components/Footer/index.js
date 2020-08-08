import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<Navbar
			className="purple d-flex flex-column flex-sm-row align-items-center align-horizontal"
			fixed="bottom"
		>
			<Nav.Item>
				<a href="#" className="text-light m-3">
					&copy; 2020 Krystal E. Duran
				</a>
			</Nav.Item>
			<Nav.Item>
				<a
					href="https://www.linkedin.com/in/krystal-e-duran-b64552123/"
					className="text-light m-3"
				>
					<FaLinkedin /> LinkedIn
				</a>
			</Nav.Item>
			<Nav.Item>
				<a href="https://github.com/KEDuran" className="text-light m-3">
					<FaGithub /> GitHub
				</a>
			</Nav.Item>
		</Navbar>
	);
}

export default Footer;
