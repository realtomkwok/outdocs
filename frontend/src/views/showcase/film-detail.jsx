import React from "react";
import { useParams } from "react-router-dom";

import "./styles.scss";
import filmData from "../../data/zh-cn/filmData.json";

import Navbar from "../../components/nav/navbar";
import Hero from "../../components/hero/hero";
import { DetailHeader } from "../../components/header/header";
import Footer from "../../components/footer/footer";

const FilmDetail = ({ props }) => {
	let content;
	let { id } = useParams();

	for (var i = 0; i < filmData.length; i++) {
		if (filmData[i].path_name === id) {
			content = filmData[i];
			// console.log(data)
		}
	}

	return (
		<div className="container">
			<Navbar />
			<Hero height="80vh" imageURL={content.hero_url}></Hero>
			<DetailHeader
				displayBackBtn={true}
				prevPage="作品展示"
				title={content.title}
				subtitle={content.title_eng}
				award={content.award}
				info={content.info}
				production={content.production}
			/>
			<div className="description__container">
				<div className="description__left">
					<div
						id="film-synopsis"
						className="film-detail__description"
					>
						<div className="description__heading">影片简介</div>
						<p>{content.description}</p>
					</div>
					<div
						id="film-director"
						className="film-detail__description"
					>
						<div className="description__heading">导演简介</div>
						<p>{content.director_info}</p>
					</div>
				</div>
				<div className="description__right">
					<div className="description__img">
						<img src={content.img_alt1}></img>
						<img src={content.img_alt2}></img>
					</div>
					<div className="description__director-img">
						<img></img>
						<caption></caption>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FilmDetail;
