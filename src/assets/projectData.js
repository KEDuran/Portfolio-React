import codeQuiz from "../pages/Projects/images/codeQuiz.png";
import employeeTracker from "../pages/Projects/images/employeeTracker.png";
import movieSelection from "../pages/Projects/images/movieSelection.png";
import teamHTMLoutput from "../pages/Projects/images/teamHTMLoutput.png";
import weatherDashboard from "../pages/Projects/images/weatherDashboard.png";
import weddingPlanner from "../pages/Projects/images/WeddingPlanner.png";

export default [
	{
		id: 1,
		title: "Project 1 - Wedding Planner",
		url: "https://wedding-planner-platform.herokuapp.com/",
		repository: "https://github.com/wedding-planner-app/wedding-planner",
		image: weddingPlanner,
		description:
			"React.js full stack web application with built in user authentication developed to help user plan a wedding.",
	},
	{
		id: 2,
		title: "Project 2 - Movie Selection App",
		url: "https://group4project1.github.io/project1/",
		repository: "https://github.com/Group4project1/project1",
		image: movieSelection,
		description:
			"Web application that allows users to select movie streaming content based on user criteria selections.",
	},
	{
		id: 3,
		title: "Project 3 - Code Quiz",
		url: "https://keduran.github.io/Code_Quiz/",
		repository: "https://github.com/KEDuran/Code_Quiz",
		image: codeQuiz,
		description:
			"Online code quiz with 5 test questions that willgive users 75 seconds to test their knowledge of HTML and JavaScript.",
	},
	{
		id: 4,
		title: "Project 4 - Weather DashBoard",
		url: "https://keduran.github.io/Weather_Dashboard/",
		repository: "https://github.com/KEDuran/Weather_Dashboard",
		image: weatherDashboard,
		description:
			"Weather dashboard app developed to allow users to see the current and 5-day weather forecast for any searched city.",
	},
	{
		id: 5,
		title: "Project 5 - Webpage Generator CLI Application",
		url:
			"https://drive.google.com/file/d/1p43dYzPLJ-n4I-fFK8yLeB6pnXaDhww-/view?usp=sharing",
		repository: "https://github.com/KEDuran/Team_Profile_Generator",
		image: teamHTMLoutput,
		description:
			"A commandline interface (CLI) application that prompts users with questions to get info about their team members in order to generate a team webpage.",
	},
	{
		id: 6,
		title: "Project 6 - Employee Tracker CLI Application",
		url:
			"https://drive.google.com/file/d/1gSf12LetxqePv8bzVFGV7ntLeab2MXNR/view?usp=sharing",
		repository: "https://github.com/KEDuran/Employee_Tracker",
		image: employeeTracker,
		description:
			"A commandline interface (CLI) application that prompts users with questions to get info about their team members in order to generate a team webpage.",
	},
];
