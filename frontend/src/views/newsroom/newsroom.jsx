import React from "react";
// import { Link, useRouteMatch } from "react-router-dom";

import "./styles.scss";

import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Card } from "../../components/sections/cards";

import newsData from "../../data/zh-cn/news.json";
const reverseData = newsData.reverse();

const Newsroom = (props) => {
	const NewsGallery = (props) => {
		// let { url } = useRouteMatch();

		return (
			<div className="gallery">
				{props.data.map((i) => (
					<a
						href={i.article_url}
						className="card__container"
						key={i.id}
					>
						<Card
							heroURL={i.hero_img}
							heroPosition={i.hero_position}
							preLoadColor={i.hero_preload}
							textColor={i.text_color}
							title={i.name}
							subtitle={i.article_title}
							tag={i.tag}
						></Card>
					</a>
				))}
			</div>
		);
	};

	return (
		<div className="container">
			<Navbar />
			<div className="contents">
				<Header title={props.title} />
				<NewsGallery data={reverseData} />
			</div>
			<Footer />
		</div>
	);
};

export default Newsroom;
