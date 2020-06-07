import React from 'react';
import './App.scss';
import { HashRouter, Switch, Route, Link} from "react-router-dom"; 
import { motion } from "framer-motion";

import Home from "./pages/home/home"
import About from "./pages/about-us/about-us"
import NavData from "./data/zh-cn/navigation.json";

class App extends React.Component {
	render() {
		return (
			<HashRouter basename="/">
				<Route exact path="/" component={Home}></Route>
				<Route path="/about" component={About}></Route>
			</HashRouter>
		);
	}
}

export default App;
