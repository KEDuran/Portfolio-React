import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";

function Footer() {
	return (
		<Container>
			<Row>
				<ul className="d-flex flex-md-row align-items-center pt-2">
					<li className="text-light mr-3 ml-3">&copy; 2020 Krystal E. Duran</li>
					<li>
						<a
							href="https://www.linkedin.com/in/krystal-e-duran-b64552123/"
							className="text-light mr-3"
						>
							<i className="fab fa-linkedin"></i> LinkedIn
						</a>
					</li>
					<li>
						<a href="https://github.com/KEDuran" class="text-light mr-3">
							<i className="fab fa-github"></i> GitHub
						</a>
					</li>
				</ul>
			</Row>
		</Container>
	);
}

export default Footer;
