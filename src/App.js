import React from "react";
import NavbarComp from "./components/Navbar";
import ContactPage from "./pages/Contact";
import FunFactsPage from "./pages/FunFacts";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<NavbarComp />
			<Switch>
				<Route path="/contact" component={ContactPage} />
				<Route path="/funfacts" component={FunFactsPage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
