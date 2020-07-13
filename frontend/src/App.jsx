// React Libraries
import React from "react";
// use Router when the new domain is ready to be used.
//https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Custom Libraries
import ScrollToTop from "./components/ScrollToTop";
import LangContext from "./locale/langContext";
import Navigations from "./locale/navigations.json";

// Views
import Home from "./views/home/home";
import About from "./views/about-us/aboutUs";
import Showcase from "./views/showcase/showcase";
import FilmDetail from "./views/showcase/filmDetail";
import SemiFinalists from "./views/showcase/semiFinalists";
import Figures from "./views/figures/figures";
import FigureDetail from "./views/figures/figureDetail";
import Sponsors from "./views/sponsors/sponsors";
import Events from "./views/events/events";
import Newsroom from "./views/newsroom/newsroom";
import FilmSubmission from "./views/calling-for-entry/callingForEntry";
import NotFoundPage from "./views/not-found-page/notFoundPage";

const history = createBrowserHistory();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.setLanguage = () => {
			this.setState((state) => ({
				isEng: state.isEng === false ? true : false,
			}));
		};
		this.state = {
			isEng: false,
			setLanguage: this.setLanguage,
		};
	}

	render() {
		return (
			<LangContext.Provider value={this.state}>
				<Router basename="/" history={history}>
					<Switch>
						<ScrollToTop>
							<Route exact path="/" component={Home}></Route>
							<Route
								path={Navigations.menuItem[0].path}
								render={() => (
									<About
										title={
											this.state.isEng
												? Navigations.menuItem[0]
														.engName
												: Navigations.menuItem[0]
														.chnName
										}
									/>
								)}
							></Route>
							<Route
								path={Navigations.menuItem[1].path}
								exact
								//the magic "exact": https://blog.csdn.net/weixin_34162401/article/details/94310604
								render={() => (
									<Showcase
										title={
											this.state.isEng
												? Navigations.menuItem[1]
														.engName
												: Navigations.menuItem[1]
														.chnName
										}
									/>
								)}
								//https://github.com/ReactTraining/react-router/issues/4105#issuecomment-291834881
							></Route>
							<Route
								path={`${Navigations.menuItem[1].path}/film/:id`}
								render={() => (
									<FilmDetail
										prevPage={
											this.state.isEng
												? Navigations.menuItem[1]
														.engName
												: Navigations.menuItem[1]
														.chnName
										}
									/>
								)}
							></Route>
							<Route
								path={`${Navigations.menuItem[1].path}/semi-finalists`}
								component={SemiFinalists}
							></Route>
							<Route
								path={Navigations.menuItem[2].path}
								component={NotFoundPage}
							></Route>
							<Route
								path={Navigations.menuItem[3].path}
								exact
								render={() => (
									<Figures
										title={
											this.state.isEng
												? Navigations.menuItem[3]
														.engName
												: Navigations.menuItem[3]
														.chnName
										}
									/>
								)}
							></Route>
							<Route
								path={`${Navigations.menuItem[3].path}/:id`}
								render={() => (
									<FigureDetail
										prevPage={
											this.state.isEng
												? Navigations.menuItem[3]
														.engName
												: Navigations.menuItem[3]
														.chnName
										}
									/>
								)}
							></Route>
							<Route
								path={Navigations.menuItem[4].path}
								render={() => (
									<Sponsors
										title={
											this.state.isEng
												? Navigations.menuItem[4]
														.engName
												: Navigations.menuItem[4]
														.chnName
										}
									/>
								)}
							></Route>
							<Route
								path={Navigations.menuItem[5].path}
								render={() => (
									<Events
										title={
											this.state.isEng
												? Navigations.menuItem[5]
														.engName
												: Navigations.menuItem[5]
														.chnName
										}
									/>
								)}
							></Route>
							<Route
								path={Navigations.menuItem[6].path}
								render={() => (
									<Newsroom
										title={
											this.state.isEng
												? Navigations.menuItem[6]
														.engName
												: Navigations.menuItem[6]
														.chnName
										}
									/>
								)}
							></Route>
							<Route
								path={Navigations.primaryBtn.path}
								render={() => (
									<FilmSubmission
										title={
											this.state.isEng
												? Navigations.primaryBtn.engName
												: Navigations.primaryBtn.chnName
										}
									/>
								)}
							></Route>
							{/* <Route component={NotFoundPage}></Route> */}
						</ScrollToTop>
					</Switch>
				</Router>
			</LangContext.Provider>
		);
	}
}

export default App;
export { LangContext };
