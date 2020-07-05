import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import "./styles.scss";
import FilmData from "../../data/zh-cn/filmData/finalists.json";
import LangContext from "../../locale/langContext";

import Navbar from "../../components/nav/navbar";
import Hero from "../../components/hero/hero";
import { DetailHeader } from "../../components/header/header";
import Footer from "../../components/footer/footer";

const FilmDetail = (props) => {
	let content;
	let isDisplay = 'block';
	let { id } = useParams();
	const { isEng } = useContext(LangContext);

	for (var i = 0; i < FilmData.length; i++) {
		if (FilmData[i].path_name === id) {
			content = FilmData[i];
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
				className="film-header"
				displayBackBtn={true}
				prevPage={props.prevPage}
				title={content.title_chn}
				subtitle={content.title_eng}
				award={content.award}
				award_2={content.award_2}
				info={isEng ? content.info_eng : content.info_chn}
				production={content.production}
				isVisible={true}
			/>
			<div className="description__container">
				<div className="description__left">
					<div
						id="film-synopsis"
						className="film-detail__description"
					>
						<h2 className="description__heading">
							{isEng ? "Synopsis" : "简介"}
						</h2>
						<p>
							{isEng
								? content.description_eng
								: content.description_chn}
						</p>
					</div>
					<div
						id="film-director"
						className="film-detail__description"
					>
						<h2 className="description__heading">
							{isEng
								? "Director"
								: "导演"}
						</h2>
						<h1>
							{isEng
								? content.director_eng
								: content.director_chn}
						</h1>
						<p>{isEng? content.director_info_eng : content.director_info_chn}</p>
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
							display: `${isDisplay}`,
						}}
					></div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FilmDetail;
