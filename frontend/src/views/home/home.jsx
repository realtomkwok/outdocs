import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import LangContext from "../../locale/langContext";
import newsData from "../../data/zh-cn/news.json";

import Navigation from "../../locale/navigations.json";
import Hero from "../../components/hero/hero";
import NavBar from "../../components/nav/navbar";
import SectionOfCards from "../../components/sections/SectionOfCards";
import Sponsors from "../../components/sections/sponsors";
import Footer from "../../components/footer/footer";

const Home = () => {
	const { isEng } = useContext(LangContext);
	const heroImageURL =
		"https://dev.azure.com/junhaotom/9b1798c6-e4d0-474b-bffe-2a2fc6de65cf/_apis/git/repositories/aa86caed-bb30-46c9-ae95-f7078c2c018a/items?path=%2F1592275549054_6946.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0";

	const newsCards = [];
	for (var x = 0; x < 3; x++) {
		newsCards.push(newsData[x])
	}

	return (
		<div className="container">
			<div className="hero__contents">
				<div className="hero__text">
					<h1 className="hero__title">
						{isEng ? "Submissions Now Open." : "全球征集现已开始。"}
					</h1>
					<Link
						to={Navigation.primaryBtn.path}
						className="hero__link text-btn"
					>
						{isEng ? "Learn More↗" : "请即报名↗"}
					</Link>
				</div>
			</div>
			<Hero imageURL={heroImageURL}></Hero>
			<NavBar></NavBar>
			<div className="contents home__contents">
				<SectionOfCards
					toPath="/newsroom"
					bkgdColor="white"
					name={isEng ? "Newsroom" : "新闻中心"}
					nameAlt={isEng ? "新闻中心" : "Newsroom"}
					data={newsCards}
					sectionClassName="card__newsroom"
				></SectionOfCards>
				{/* <SectionOfCards
				toPath="/events"
				bkgdColor="white"
				name="最新活动"
				nameAlt="Events"
				data={newsData}
			></SectionOfCards> */}
				<Sponsors></Sponsors>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
