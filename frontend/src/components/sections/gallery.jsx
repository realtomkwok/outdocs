import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Card, FilmCard } from "../../components/sections/cards";
import LangContext from "../../locale/langContext";

import FilmData from "../../data/zh-cn/filmData/finalists.json"

const Gallery = (props) => {
	let { url } = useRouteMatch();
	const { isEng } = useContext(LangContext);

	return (
		<div className={`gallery ${props.galleryClassName}`}>
			{props.data.map((i) => (
				<Link
					to={`${url}/${i.path_name}`}
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
				</Link>
			))}
		</div>
	);
};

const FilmGallery = (props) => {
	let { url } = useRouteMatch();
	let data;
	let heading, heading_alt;
	const { isEng } = useContext(LangContext);

	// filter of awarded film
	// https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes
	var winnerList = FilmData.filter(function (film) {
		return film.award !== "";
	});
	//filter of finalists
	//https://stackoverflow.com/questions/45342155/how-to-subtract-one-array-from-another-in-javascript/45342187
	var finalistList = FilmData.filter(function (film) {
		return !winnerList.includes(film);
	});

	if (props.category === "winners") {
		data = winnerList;
		heading = isEng ?  "2019 Winners" : "2019 优秀作品";
		heading_alt = isEng ? "优秀作品" : "Winners" 
	} else if (props.category === "finalist") {
		data = finalistList;
		heading = isEng ? "2019 Finalists" : "2019 终评入围影片";
	heading_alt = isEng ? "终评入围" : "Finalists";
	}

	return (
		<div id={`showcase__${props.category}`} className="showcase">
			<h2 className="showcase__heading">{heading}</h2>
			<h3 className="showcase__heading-alt">{heading_alt}</h3>
			<div className="gallery showcase-gallery">
				{data.map((i, index) => (
					<Link
						to={`${url}/film/${i.path_name}`}
						className="film-card__container"
						key={index}
					>
						<FilmCard
							heroPosition={i.hero_position}
							preLoadColor={i.hero_preload}
							imageURL={i.hero_url}
							title={isEng ? i.title_eng : i.title_chn}
							director={isEng ? i.director_eng : i.director_chn}
							award={i.award}
							award_2={i.award_2}
							textColor={i.text_color}
						></FilmCard>
					</Link>
				))}
			</div>
		</div>
	);
};

export { Gallery, FilmGallery };