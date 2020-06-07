import React from 'react';
import './styles.scss';

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
				<div className="card" key={index}>
					<a href={article_url}>
						<div className="card__img-holder">
							<img
								src={img_url}
								alt={img_alt}
								className="card__img"
							/>
						</div>
						<div className="card__description">
							<div className="card__eyebrow">
								<div
									className={`card__tag card__tag-${tag_color}`}
								>
									{tag}
								</div>
							</div>
							<h3 className="card__title">{article_title}</h3>
							<div className="card__learnMore">
								<div>了解更多→</div>
							</div>
						</div>
					</a>
				</div>
			)
		)}
	</React.Fragment>
);

export default Card