import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

import { Prize } from '../../components/logos/prize';

function GoBack(props) {
	let history = useHistory();
	let displayAttr = 'block';

	if (!props.isDisplayed) {
		displayAttr = 'none';
	}

	return (
		<div style={{ display: `${displayAttr}` }}>
			<button
				className="back-btn text-btn"
				onClick={() => history.goBack()}
			>
				← {props.text}
			</button>
		</div>
	);
}

const Header = (props) => (
	<div className="header">
		<GoBack isDisplayed={props.displayBackBtn} text={props.prevPage}></GoBack>
		<h1 className="header__text">{props.title}</h1>
		<p className="header__description">{props.subtitle}</p>
	</div>
);

const DetailHeader = (props) => (
	<div className="detail-header">
		<GoBack
			isDisplayed={props.displayBackBtn}
			text={props.prevPage}
		></GoBack>
		<div className="detail-header__contents">
			<div className="detail-header__left">
				<h1 className="detail-header__text">{props.title}</h1>
				<p className="detail-header__description">{props.subtitle}</p>
				<div className="detail-header__info">
					<p>{props.info}</p>
					<p>{props.production}</p>
				</div>
			</div>
			<div className="detail-header__right">
				<Prize
					className="detail-header__prize"
					award={props.award}
				></Prize>
				<Prize
					className="detail-header_prize"
					award={props.award_2}
				></Prize>
			</div>
		</div>
	</div>
);

export {Header, DetailHeader}