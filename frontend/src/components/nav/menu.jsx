import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LangContext from "../../locale/langContext";
import FullNameLogo from "../logos/fullNameLogo";

const Menu = (props) => {
	const { isEng } = useContext(LangContext);
	return (
		<div className={props.className}>
			<div className="menu__contents">
				<ul className="menu__links">
					{props.navs.map(({ chnName, engName, path }, index) => (
						<li className="menu__link" key={index}>
							<Link to={path}>
								<span className="menu__text">
									{isEng ? engName : chnName}
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
		</div>
	);
};

export default Menu;
