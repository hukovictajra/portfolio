import React from "react";
import Icon from "@elements/Icon/Icon";
import MapPin from "@icons/map_pin.svg";
import ItemArrowIcon from "@icons/arrow.svg";
import GithubIcon from "@icons/social/github.svg";
import LinkedinIcon from "@icons/social/linkedin.svg";
import PinterestIcon from "@icons/social/pinterest.svg";

import "./InfoSection.scss";
import WorkWithMe from "@elements/WorkWithMe/WorkWithMe";

export default function InfoSection() {
	return (
		<div className="info-section">
			<div className="info-section-content">
				<div className="info-section-title-wrapper">
					<h1 className="info-section-title satoshi">Tajra Huković</h1>
					<h3 className="info-section-subtitle satoshi">UX/UI Designer, Photographer</h3>
				</div>

				<div className="info-portfolio-wrapper">
					<div className="info-portfolio-items">
						<a className="info-portfolio-item">
							<Icon src={ItemArrowIcon} alt="->" className="info-portfolio-item-icon" />
							<span className="info-portfolio-item-text underline-effect">Projects</span>
						</a>
						<a className="info-portfolio-item">
							<Icon src={ItemArrowIcon} alt="->" className="info-portfolio-item-icon" />
							<span className="info-portfolio-item-text underline-effect">Gallery</span>
						</a>
						<a className="info-portfolio-item">
							<Icon src={ItemArrowIcon} alt="->" className="info-portfolio-item-icon" />
							<span className="info-portfolio-item-text underline-effect">Résumé</span>
						</a>
					</div>

					<WorkWithMe id="info-section-wwm-button" />
				</div>

				<div className="info-quick-links-wrapper">
					<a
						id="info-quick-link-item-location"
						className="info-quick-link-item"
						href="https://www.google.com/maps/place/Sarajevo/@43.8936937,18.3005915,12z/data=!3m1!4b1!4m6!3m5!1s0x4758cbb1ed719bd1:0x562ecda6de87b33e!8m2!3d43.8562586!4d18.4130763!16zL20vMDZuOGo?entry=ttu"
						target="_blank"
					>
						<Icon src={MapPin} alt="Map Pin" className="info-map-pin-icon" />
						<span className="underline-effect"> Sarajevo, Bosnia and Herzegovina</span>
					</a>

					<ul className="info-quick-link-list">
						<li className="info-quick-link-list-item">
							<a className="info-quick-link-item" href="https://www.pinterest.com/PawPix94/" target="_blank">
								<Icon
									src={PinterestIcon}
									alt="Pinterest Logo"
									className="info-quick-link-item-icon info-pinterest-icon"
								/>
							</a>
						</li>

						<li className="info-quick-link-list-item">
							<a className="info-quick-link-item" href="https://www.pinterest.com/PawPix94/" target="_blank">
								<Icon src={LinkedinIcon} alt="LinkedIn Logo" className="info-quick-link-item-icon info-linkedin-icon" />
							</a>
						</li>

						<li className="info-quick-link-list-item">
							<a className="info-quick-link-item" href="https://github.com/hukovictajra" target="_blank">
								<Icon src={GithubIcon} alt="GitHub Logo" className="info-quick-link-item-icon info-github-icon" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
