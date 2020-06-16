import React from 'react';
import { Link } from 'react-router-dom'

import './styles.scss';
import { Card } from './cards';

const SectionOfCards = (props) => {
	return (
		<section className={`section__container-${props.bkgdColor}`}>
			<div className="section__inner">
				<div className="section__header">
					<div className="section__name">
						{props.name}
					</div>
					<Link to={props.toPath} className="section__name-alt">{props.nameAlt}</Link>
				</div>
				<div className="cards__container">
					<Card cards={props.cards}></Card>
				</div>
				{/* <div className="cards__scroll">
					<div className="cards__container">
						<Card cards={props.cards}></Card>
					</div>
				</div> */}
			</div>
		</section>
	);
}

export default SectionOfCards;