import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"

import "./styles.scss";
import FigureData from "../../data/zh-cn/figureData/figures.json";
import FigureArticles from "../../data/zh-cn/figureData/figureArticles.json";

import Navbar from "../../components/nav/navbar";
import Hero from "../../components/hero/hero";
import { DetailHeader } from "../../components/header/header";
import Footer from "../../components/footer/footer";

const FigureDetail = (props) => {
    let content;
    let article;
    var articleImages = [];
	let { id } = useParams();

	for (var x = 0; x < FigureData.length; x++) {
		if (FigureData[x].path_name === id) {
			content = FigureData[x];
		}
    }
    
    for (var y = 0; y < FigureArticles.length; y++){
        if (FigureArticles[y].figure_name === id) {
            article = FigureArticles[y].content
        }
    }

    for (var i = 0; i < 3; i++) {
        let order = 8 + i
		let img = Object.values(content)[order];
		let imgPreload = Object.values(content)[order + 3];
        let imgPosition = Object.values(content)[order + 6];
		let isDisplay = (img !== "") ? "block" : "none"
		console.log(imgPreload)

        articleImages.push(
			<div
				className="description__img"
				style={{
					backgroundImage: `url("${img}"), linear-gradient(${imgPreload})`,
					backgroundPosition: `${imgPosition}`,
					display: `${isDisplay}`,
				}}
				key={i}
			></div>
		);
	}

	return (
		<div className="container">
			<Navbar />
			<Hero
				height="80vh"
				imageURL={content.hero_img}
				imagePreLoad={content.hero_preload}
				heroClassName="figure-hero__mobile"
			></Hero>
			<div className="contents contents__figure">
				<div className="contents__left">
					<DetailHeader
						className="figure-header"
						displayBackBtn={true}
						prevPage={props.prevPage}
						title={content.article_title}
						subtitle={content.name}
						isVisible={false}
					></DetailHeader>
					<ReactMarkdown
						source={article}
						className="figure-article"
					/>
				</div>
				<div className="contents__right">
					<Hero
						height="80vh"
						imageURL={content.hero_img}
						imagePreLoad={content.hero_preload}
						heroClassName="figure-hero__desktop"
					></Hero>
					<div className="contents__right__article-images">
						{articleImages}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FigureDetail;
