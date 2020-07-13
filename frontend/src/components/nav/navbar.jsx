import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import LangContext from "../../locale/langContext";
import Logo from "../logos/cinemadow";
import Menu from "./menu";
import Navigation from "../../locale/navigations.json";

import "./styles.scss";

const Navbar = (props) => {
	const [menuIsOpen, toggleMenu] = useState(false);
	const { isEng, setLanguage } = useContext(LangContext);

	return (
		<div className="nav__container">
			<div className="nav">
				<nav className="navbar">
					<div className="navbar__inner">
						<Link className="navbar__brand" to="/">
							<Logo
								className="navbar__logo"
								fill={props.logoColor}
							></Logo>
						</Link>
						<div className="navbar__btns">
							<Link
								className="navbar__primary-btn btn"
								to={Navigation.primaryBtn.path}
							>
								<span className="text_btn__primary">
									{isEng ? (
										<span className="text_btn__eng">
											{Navigation.primaryBtn.engName}
										</span>
									) : (
										<span className="text_btn__chn">
											{Navigation.primaryBtn.chnName}
										</span>
									)}
								</span>
							</Link>
							<button
								className="navbar__icon btn"
								onClick={setLanguage}
							>
								<div className="icon_holder">
									{isEng ? (
										<span className="text_btn__chn">
											中
										</span>
									) : (
										<span className="text_btn__eng">
											En
										</span>
									)}
								</div>
							</button>
							<button
								className="navbar__icon btn"
								onClick={() => toggleMenu(!menuIsOpen)}
							>
								<div className="icon_holder">
									{!menuIsOpen ? "⌘" : "✗"}
								</div>
							</button>
						</div>
					</div>
				</nav>
				<Menu
					className={
						!menuIsOpen ? "menu menu-inactive" : "menu menu-active"
					}
					navs={Navigation.menuItem}
				></Menu>
			</div>
		</div>
	);
};

export default Navbar;
