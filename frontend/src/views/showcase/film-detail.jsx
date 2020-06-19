import React from "react";
import { useParams } from "react-router-dom";

import "./styles.scss";
import FilmData from "../../data/zh-cn/filmData/finalists.json";

import Navbar from "../../components/nav/navbar";
import Hero from "../../components/hero/hero";
import { DetailHeader } from "../../components/header/header";
import Footer from "../../components/footer/footer";

const FilmDetail = ({ props }) => {
	let content;
	let isDisplay = 'block';
	let { id } = useParams();

	for (var i = 0; i < FilmData.length; i++) {
		if (FilmData[i].path_name === id) {
			content = FilmData[i];
			// console.log(data)
		}
	}

	if (content.img_alt2 === ""){
		isDisplay = 'none'
	}

	return (
		<div className="container">
			<Navbar />
			<Hero
				height="80vh"
				imageURL={content.hero_url}
				imagePosition={content.hero_position}
			></Hero>
			<DetailHeader
				displayBackBtn={true}
				prevPage="参展作品"
				title={content.title}
				subtitle={content.title_eng}
				award={content.award}
				award_2={content.award_2}
				info={content.info}
				production={content.production}
			/>
			<div className="description__container">
				<div className="description__left">
					<div
						id="film-synopsis"
						className="film-detail__description"
					>
						<h2 className="description__heading">简介</h2>
						<p>{content.description}</p>
					</div>
					<div
						id="film-director"
						className="film-detail__description"
					>
						<h2 className="description__heading">导演</h2>
						<h1>{content.director}</h1>
						<p>{content.director_info}</p>
					</div>
				</div>
				<div className="description__right">
					<div
						className="description__vid"
						style={{
							backgroundImage: `url(${content.img_alt1})`,
							backgroundPosition: `${content.img_position}`,
						}}
					>
						<div className="vid__playBtn">↗观赏预告片</div>
					</div>
					<div
						className="description__img"
						style={{
							backgroundImage: `url(${content.img_alt2})`,
							backgroundPosition: `${content.img_position}`,
							display: `${isDisplay}`
						}}
					></div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FilmDetail;
