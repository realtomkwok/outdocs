import React from "react";
import { Link } from "react-router-dom";
import FullNameLogo from "../logos/fullNameLogo"

class Menu extends React.Component{
	render() {
		return (
			<React.Fragment>
					<div className={this.props.className}>
						<ul className="menu__links">
							{this.props.navs.map(({ displayText, path }, index) => (
								<li className="menu__link" key={index}>
									<Link to={path}>
										<span className="menu__text">
											{displayText}
											<span>↗</span>
										</span>
									</Link>
								</li>
							))}
						</ul>
						<div className="menu__bottom">
							<FullNameLogo className="text-logo"></FullNameLogo>
						</div>
					</div>
			</React.Fragment>
		)
	}

	
}

export default Menu;
