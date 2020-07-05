import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import { Card } from "./cards";

const SectionOfCards = (props) => (
	<section className={`section__container-${props.bkgdColor}`}>
		<div className="section__inner">
			<div className="section__header">
				<div className="section__name">{props.name}</div>
				<Link to={props.toPath} className="section__name-alt">
					{props.nameAlt}
				</Link>
			</div>
			<div className="cards__container card__sections">
				{props.data.map((i) => (
					<a
						href={i.article_url}
						className="card__container"
						key={i.id}
					>
						<Card
							heroURL={i.hero_img}
							preLoadColor={i.hero_preload}
							heroPosition={i.hero_position}
							tag={i.tag}
							subtitle={i.article_title}
							textColor={i.text_color}
						></Card>
					</a>
				))}
			</div>
		</div>
	</section>
);

export default SectionOfCards;
