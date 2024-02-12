import React from "react";

import Icon from "../Icon/Icon";
import GithubIcon from "@icons/social/github.svg";
import LinkedinIcon from "@icons/social/linkedin.svg";
import PinterestIcon from "@icons/social/pinterest.svg";
import ContraIcon from "@icons/contra.svg";

import "./Footer.scss";

export function Footer() {
	return (
		<div id="footer">
			<div className="footer-container">
				<ul className="footer-quick-links">
					<li className="underline-effect">
						<a href="#/">Homepage</a>
					</li>
					{/* <li className="underline-effect">
					<a href="#/gallery">Gallery</a>
				</li> */}
					<li className="underline-effect">
						<a href="#/resume">Résumé</a>
					</li>
					<li className="underline-effect">
						<a href="mailto:hukovic.tajra@gmail.com">Contact</a>
					</li>
				</ul>

				<ul className="footer-external-quick-links">
					<li className="footer-external-quick-link-item">
						<a className="footer-external-quick-link-anchor" href="https://www.pinterest.com/PawPix94/" target="_blank">
							<Icon
								src={PinterestIcon}
								alt="Pinterest Logo"
								className="footer-external-quick-link-icon info-pinterest-icon"
							/>
						</a>
					</li>

					<li className="footer-external-quick-link-item">
						<a className="footer-quick-link-item" href="https://www.pinterest.com/PawPix94/" target="_blank">
							<Icon
								src={LinkedinIcon}
								alt="LinkedIn Logo"
								className="footer-external-quick-link-icon info-linkedin-icon"
							/>
						</a>
					</li>

					<li className="footer-external-quick-link-item">
						<a className="footer-quick-link-item" href="https://www.pinterest.com/PawPix94/" target="_blank">
							<Icon src={GithubIcon} alt="Github Logo" className="footer-external-quick-link-icon info-github-icon" />
						</a>
					</li>
				</ul>

				<div className="footer-copyright-section">
					<span className="footer-developed-by">
						Developed by <span className="footer-developed-by">Tajra Huković</span>
					</span>
					<span className="footer-inspired-by">
						inspired by
						<a
							aria-label="Learn more about Contra"
							href="https://contra.com/?utm_campaign=ip_powered_by&amp;utm_medium=independent_portfolios&amp;utm_source=ip_p_slug"
							rel="noreferrer"
							target="_blank"
							className="footer-copyright-contra-icon underline-effect"
						>
							<Icon src={ContraIcon} />
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
