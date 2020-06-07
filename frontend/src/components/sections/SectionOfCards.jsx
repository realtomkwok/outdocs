import React from 'react';
import './styles.scss';
import Card from './card';

const SectionOfCards = (props) => {
	return (
		<section className={`section__container-${props.bkgdColor}`}>
			<div className="section__inner">
				<div className="section__header">
					<h2 className="section__name">{props.name}</h2>
					<a className="section__link"></a>
				</div>
				<div className="cards__scroll">
					<div className="cards__container">
						<Card cards={props.cards}></Card>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionOfCards;