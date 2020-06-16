import React from 'react';
import './App.scss';
import { HashRouter, Route } from "react-router-dom"; 

import Home from "./views/home/home"
import About from "./views/about-us/about-us";
import Showcase from "./views/showcase/showcase";
import FilmDetail from './views/showcase/film-detail';

import ScrollToTop from './components/ScrollToTop'

class App extends React.Component {

	render() {
		return (
			<HashRouter basename="/">
				<ScrollToTop>
					<Route exact path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/showcase" exact component={Showcase}></Route>
					{/* about the magic "exact": https://blog.csdn.net/weixin_34162401/article/details/94310604 */}
					<Route path="/showcase/:id" component={FilmDetail}></Route>
				</ScrollToTop>
			</HashRouter>
		);
	}
}

export default App;
