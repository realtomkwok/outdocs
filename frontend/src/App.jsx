import React from 'react';
import './App.scss';
import { HashRouter, Switch, Route, Link, NavLink} from "react-router-dom"; 
import { motion } from "framer-motion";

import Home from "./views/home/home"
import About from "./views/about-us/about-us";
import Showcase from "./views/showcase/showcase";

class App extends React.Component {
	render() {
		return (
			<HashRouter basename="/">
				<Route exact path="/" component={Home}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/showcase" component={Showcase}></Route>
			</HashRouter>
		);
	}
}

export default App;
