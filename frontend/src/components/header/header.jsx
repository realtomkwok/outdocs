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

class DetailHeader extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hasPrize: "block",
			hasPrize2: "none"
		}
		if (props.award !== undefined) {
			this.state.hasPrize = "block";
		} else {
			this.state.hasPrize = "none";
		}

		if (props.award_2 !== "") {
			this.state.hasPrize2 = "block";
		} else {
			this.state.hasPrize2 = "none";
		}
	}

	render() {
		return (
			<div className={`detail-header ${this.props.className}`}>
				<GoBack
					isDisplayed={this.props.displayBackBtn}
					text={this.props.prevPage}
				></GoBack>
				<div className="detail-header__contents">
					<div className="detail-header__left">
						<h1 className="detail-header__text">
							{this.props.title}
						</h1>
						<p className="detail-header__description">
							{this.props.subtitle}
						</p>
						<div className="detail-header__info">
							<p>{this.props.info}</p>
							<p>{this.props.production}</p>
						</div>
					</div>
					<div
						className="detail-header__right"
						style={{ display: `${this.state.hasPrize}` }}
					>
						<Prize
							className="detail-header__prize"
							award={this.props.award}
						></Prize>
						<div style={{ display: `${this.state.hasPrize2}` }}>
							<Prize
								className="detail-header_prize"
								award={this.props.award_2}
							></Prize>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export {Header, DetailHeader}