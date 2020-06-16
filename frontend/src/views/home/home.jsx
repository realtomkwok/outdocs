import React from "react";
import "../../App.scss";

import Hero from "../../components/hero/hero";
import NavBar from "../../components/nav/navbar";
import SectionOfCards from "../../components/sections/SectionOfCards";
import Sponsors from "../../components/sections/sponsors";
import Footer from "../../components/footer/footer";

import newsData from "../../data/zh-cn/newsroom.json";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroImageURL:
				"https://dev.azure.com/junhaotom/9b1798c6-e4d0-474b-bffe-2a2fc6de65cf/_apis/git/repositories/aa86caed-bb30-46c9-ae95-f7078c2c018a/items?path=%2F1592275549054_6946.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0",
		};
	}

	render() {
		return (
			<div className="container" onScroll={this.handleScroll}>
				<Hero imageURL={this.state.heroImageURL}></Hero>
				<NavBar></NavBar>
				<SectionOfCards
					toPath="/newsroom"
					bkgdColor="white"
					name="新闻中心"
					nameAlt="Newsroom"
					cards={newsData}
				></SectionOfCards>
				<SectionOfCards
					toPath="/events"
					bkgdColor="white"
					name="最新活动"
					nameAlt="Events"
					cards={newsData}
				></SectionOfCards>
				<Sponsors></Sponsors>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
