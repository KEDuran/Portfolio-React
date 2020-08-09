import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function NavbarComp() {
	return (
		<Navbar className="purple navbar-dark" expand="lg">
			<Navbar.Brand href="#home">
				<h4 className="text-light">Krystal E. Duran</h4>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav className="text-light">
					<Nav.Link className="text-light" href="#home">
						About Me
					</Nav.Link>
					<Nav.Link className="text-light" href="#link">
						Projects
					</Nav.Link>
					<Nav.Link className="text-light" href="/funfacts">
						Fun Facts
					</Nav.Link>
					<Nav.Link className="text-light" href="/contact">
						Contact
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavbarComp;
