import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logos/cinemadow';
import Menu from './menu';

import './styles.scss';
import colorConfigs from '../../configs';
import navData from '../../data/zh-cn/navigation.json';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isTop: true,
			// isEng: false,
		};
	}

	handleScroll = () => {
		document.addEventListener("scroll", () => {
			const isTop = window.scrollY < 50;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
		});
	};

	componentDidMount() {
		this.handleScroll();
	}

	componentWillUnmount() {
		this.handleScroll();
	}

	// handleLangSwitch = () => {
	// 	this.setState({ isEng: !this.state.isEng });
	// };

	handleMenuClick = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		let className = "navbar";
		if (!this.state.isTop) {
			className += " navbar__bkgd-active";
		}
		return (
			<div className="nav">
				<nav className={className}>
					<div className="navbar__inner">
						<Link className="navbar__brand" to="/">
							<Logo
								className="navbar__logo"
								fill={colorConfigs.black}
							></Logo>
						</Link>
						<div className="navbar__btns">
							<a
								className="navbar__primary-btn btn"
								href={navData.primary_btn[0].path}
							>
								<span className="btn-text">
									{navData.primary_btn[0].displayText}
								</span>
							</a>
							{/* <button className="navbar__icon btn">
								<div 
									className="icon_holder"
									onClick={(this.handleLangSwitch)}
								>
									{!this.state.isEng ? (
										<span className="text_btn__chn">中</span>
									) : (
										<span className="text_btn__eng">En</span>
									)}
								</div>
							</button> */}
							<button
								className="navbar__icon btn"
								onClick={this.handleMenuClick}
							>
								<div className="icon_holder">
									{!this.state.isOpen ? "⌘" : "✗"}
								</div>
							</button>
						</div>
					</div>
				</nav>
				<Menu
					className={
						(!this.state.isOpen && "menu menu-inactive") ||
						"menu menu-active"
					}
					navs={navData.menuItems}
				></Menu>
			</div>
		);
	}
}

export default Navbar;