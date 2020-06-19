import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import { Prize } from '../../components/logos/prize';

const Card = ({ cards }) => (
	<React.Fragment>
		{cards.map(
			(
				{
					img_url,
					img_alt,
					tag_color,
					tag,
					article_title,
					article_url,
				},
				index
			) => (
				<Link
					to={article_url}
					className="card"
					key={index}
					style={{ backgroundImage: `url('${img_url}')` }}
				>
					<div className="card__description">
						<div className="card__eyebrow">
							<div className={`card__tag card__tag-${tag_color}`}>
								{tag}
							</div>
						</div>
						<h3 className="card__title">{article_title}</h3>
					</div>
				</Link>
			)
		)}
	</React.Fragment>
);

const FilmCard = (props) => {
	let styleProperty = {
		backgroundImage: `url(${props.imageURL})`,
		backgroundPosition: `${props.heroPosition}`
	};

	return (
		<div
			className="film-card__content"
			style={styleProperty}
		>
			<div
				className="film-card__info"
				style={{ color: `${props.textColor}` }}
			>
				<div className="film-card__title">{props.title}</div>
				<div className="film-card__director">{props.director}</div>
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

export { Card, FilmCard }