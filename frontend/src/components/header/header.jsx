import React from 'react';
import './styles.scss';

const Header = (props) => (
	<div className="header">
		<h1 className="header__text">{props.title}</h1>
		<p className="header__description">{props.description}</p>
	</div>
);

export default Header