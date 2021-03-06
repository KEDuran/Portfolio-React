import React from "react";
import NavbarComp from "./components/NavbarComp";
import ContactPage from "./pages/Contact";
import FunFactsPage from "./pages/FunFacts";
import ProjectPage from "./pages/Projects";
import BioPage from "./pages/Bio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<NavbarComp />
			<Switch>
				<Route path="/" exact component={BioPage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/funfacts" component={FunFactsPage} />
				<Route path="/projects" component={ProjectPage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
