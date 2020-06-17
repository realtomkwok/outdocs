import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

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

const FilmCard = (props) => (
	<div
		className="film-card__content"
		style={{ backgroundImage: `url('${props.imageURL}')` }}
	>
		<div className="film-card__info" style={{ color: `${props.textColor}` }}>
			<div className="film-card__title">{props.title}</div>
			<div className="film-card__director">{props.director}</div>
			<div className="film-card__award">{props.award}</div>
		</div>
	</div>
);

export { Card, FilmCard }