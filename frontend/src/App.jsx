import React from 'react';
import './App.scss';
// use Router when the new domain is ready to be used.
//https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
import { HashRouter, Router, Route } from "react-router-dom"; 
import { createBrowserHistory } from "history";

import Home from "./views/home/home"
import About from "./views/about-us/about-us";
import Showcase from "./views/showcase/showcase";
import FilmDetail from './views/showcase/film-detail';
import SemiFinalist from './views/showcase/semi-finalists'

import ScrollToTop from './components/ScrollToTop'

const history = createBrowserHistory();

class App extends React.Component {

	render() {
		return (
			<HashRouter basename="/">
				<ScrollToTop>
					<Route exact path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/showcase" exact component={Showcase}></Route>
					{/* about the magic "exact": https://blog.csdn.net/weixin_34162401/article/details/94310604 */}
					<Route path="/showcase/film/:id" component={FilmDetail}></Route>
					<Route path="/showcase/:id" component={SemiFinalist}></Route>
				</ScrollToTop>
			</HashRouter>
		);
	}
}

export default App;
