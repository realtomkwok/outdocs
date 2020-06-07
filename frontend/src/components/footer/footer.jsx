import React from 'react';
import FullNameLogo from '../logos/fullNameLogo'
import SNSData from '../../data/socialNetworks.json'
import SNSIcon from './socialNetworks'
import OutdocsTextLogo from '../logos/outdocsTextLogo';


import './styles.scss'

const Footer = ({ props }) => (
	<footer>
		<div className="footer__functions">
			{/* <div className="footer_newsletter">
            </div> */}
			<div className="footer__socialNetworks">
				{SNSData.map(({ url, icon_path }, index) => (
					<div className="icon_holder">
						<a href={url} key={index}>
							<SNSIcon d={icon_path}></SNSIcon>
						</a>
					</div>
				))}
			</div>
			<a href="#" className="btn footer__backToTop">
				<div className="icon_holder">↑</div>
			</a>
		</div>
		<div className="footer__info">
			<FullNameLogo className="footer__logo"></FullNameLogo>
			<ul className="footer__contacts">
				<li className="contact__item">
					地址：中国广东省广州市天河区黄埔大道西76号3306
				</li>
				<li className="contact__item">电话：020-38780150-815</li>
				<li className="contact__item">
					邮箱：<a href="mailto:outdocs@gzdoc.cn">outdocs@gzdoc.cn</a>
				</li>
			</ul>
			<div className="footer__copyrights">
				©2020 OUTDOCS. Site by{" "}
				<a href="https://realtomkwok.github.io/portfolio/">
					Tom Kwok
				</a>
				.
			</div>
		</div>
	</footer>
);

export default Footer;