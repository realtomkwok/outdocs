import React from "react";
import "../../App.scss";

import { Hero } from "../../components/hero/hero";
import NavBar from "../../components/nav/navbar";
import SectionOfCards from "../../components/sections/SectionOfCards";
import Sponsors from "../../components/sections/sponsors";
import Footer from "../../components/footer/footer";

import newsData from "../../data/zh-cn/newsroom.json";

class App extends React.Component {
	render() {
		return (
			<div className="container" onScroll={this.handleScroll}>
				<Hero></Hero>
				<NavBar></NavBar>
				<SectionOfCards
					bkgdColor="black"
					name="新闻中心"
					cards={newsData}
				></SectionOfCards>
				<SectionOfCards
					bkgdColor="white"
					name="最新活动"
					cards={newsData}
				></SectionOfCards>
				<Sponsors></Sponsors>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
