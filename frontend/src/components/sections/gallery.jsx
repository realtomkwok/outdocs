import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { FilmCard } from "../../components/sections/cards";

import FilmData from "../../data/zh-cn/filmData/finalists.json"

const Gallery = (props) => {
	let { url } = useRouteMatch();
	let data;
	let heading, heading_alt;

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
		heading = "获奖影片";
		heading_alt = "Winners"
	} else if (props.category === "finalist") {
		data = finalistList;
		heading = "终评入围影片";
		heading_alt = "Finalists"
	}

	return (
		<div id={`showcase__${props.category}`} className="showcase">
			<h2 className="showcase__heading">{heading}</h2>
			<h3 className="showcase__heading-alt">{heading_alt}</h3>
			<div className="showcase__gallery">
				{data.map(
					(
						{
							title,
							director,
							hero_url,
							hero_position,
							award,
							award_2,
							path_name,
							text_color,
						},
						index
					) => (
						<Link
							to={{
								pathname: `${url}/film/${path_name}`,
							}}
							className="film-card__container"
							key={index}
						>
							<FilmCard
								heroPosition={hero_position}
								imageURL={hero_url}
								title={title}
								director={director}
								award={award}
								award_2={award_2}
								textColor={text_color}
							></FilmCard>
						</Link>
					)
				)}
			</div>
		</div>
	);
};

export default Gallery;