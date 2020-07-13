import React from "react";
import "./styles.scss";
// import { Link } from "react-router-dom";

import { Prize } from "../../components/logos/prize";

const Card = (props) => {
	const styleConfigs = {
		backgroundImage: `url("${props.heroURL}"), linear-gradient(${props.preLoadColor})`,
		backgroundPosition: `${props.heroPosition}`,
		color: `${props.textColor}`
	};

	return (
		<div className="card__content" style={styleConfigs}>
			<div
				className="card__info"
				style={{ color: `${props.textColor}` }}
			>
				<div className="card__eyebrow">
					<div className="card__tag">{props.tag}</div>
				</div>
				<h2 className="card__title">{props.title}</h2>
				<h3 className="card__subtitle">{props.subtitle}</h3>
			</div>
		</div>
	);
};

const FilmCard = (props) => {
	let styleProperty = {
		backgroundImage: `url(${props.imageURL}), linear-gradient(${props.preLoadColor})`,
		backgroundPosition: `${props.heroPosition}`,
	};

	return (
		<div className="film-card__content" style={styleProperty}>
			<div
				className="film-card__info card__info"
				style={{ color: `${props.textColor}` }}
			>
				<div className="film-card__title card__title">
					{props.title}
				</div>
				<div className="film-card__director card__subtitle">{props.director}</div>
				<Prize
					className="film-card__award"
					fill={props.textColor}
					award={props.award}
				></Prize>
				<Prize
					className="film-card__award"
					fill={props.textColor}
					award={props.award_2}
				></Prize>
			</div>
		</div>
	);
};

export { Card, FilmCard };
