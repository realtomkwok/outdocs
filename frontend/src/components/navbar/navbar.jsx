import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from '../cinemadow/cinemadow';
import './navbar.css';
import colorConfigs from '../../configs'

class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<div className="navbar__inner">
					<a className="navbar__brand">
						<Logo className="navbar__logo" fill={colorConfigs.black}></Logo>
					</a>
				</div>
			</nav>
		);
	}
}

export default NavBar;