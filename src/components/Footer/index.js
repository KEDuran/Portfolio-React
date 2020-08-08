import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<Navbar className="purple" fixed="bottom">
			<Nav.Item>
				<p className="text-light">&copy; 2020 Krystal E. Duran</p>
			</Nav.Item>
			<Nav.Item>
				<a
					href="https://www.linkedin.com/in/krystal-e-duran-b64552123/"
					className="text-light mr-3"
				>
					<FaLinkedin /> LinkedIn
				</a>
			</Nav.Item>
			<Nav.Item>
				<a href="https://github.com/KEDuran" class="text-light mr-3">
					<FaGithub /> GitHub
				</a>
			</Nav.Item>
		</Navbar>
	);
}

export default Footer;
