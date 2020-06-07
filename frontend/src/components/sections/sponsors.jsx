import React from 'react';
import OutdocsTextLogo from '../logos/outdocsTextLogo';
import sponsorsData from '../../data/zh-cn/sponsors.json'

const Sponsors = ({ props }) => (
	<div className="sponsors">
		<div className="sponsors__header">
			<OutdocsTextLogo></OutdocsTextLogo>
			<span>感谢以下有趣机构支持</span>
		</div>
		<div className="sponsors__container">
			{sponsorsData.map(({ name, logo_path }, index) => (
				<img className="sponsors__logo" src={logo_path} key={index}></img>
			))}
		</div>
	</div>
);

export default Sponsors