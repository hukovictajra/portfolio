import React from "react";
import Icon from "../../../elements/Icon/Icon";
import MapPin from "../../../assets/svg/map_pin.svg";
import ItemArrowIcon from "../../../assets/svg/arrow.svg";
import LinkedinIcon from "../../../assets/svg/social/linkedin.svg";
import InstagramIcon from "../../../assets/svg/social/instagram.svg";
import PinterestIcon from "../../../assets/svg/social/pinterest.svg";

import "./InfoSection.scss";

export default function InfoSection() {
	return (
		<div className="info-section">
			<div className="info-section-content">
				<div className="info-title-wrapper">
					<h1 className="info-title satoshi">Tajra Huković</h1>
					<h3 className="info-subtitle satoshi">UX/UI Designer, Photographer</h3>
				</div>

				<div className="info-portfolio-wrapper">
					<div className="info-portfolio-item">
						<Icon src={ItemArrowIcon} alt="->" className="info-portfolio-item-icon" />
						<span className="info-portfolio-item-text underline-effect">Projects</span>
					</div>
					<div className="info-portfolio-item">
						<Icon src={ItemArrowIcon} alt="->" className="info-portfolio-item-icon" />
						<span className="info-portfolio-item-text underline-effect">Services</span>
					</div>

					<a className="info-work-with-me-button" aria-label="Get in touch">
						Work with me
					</a>
				</div>

				<div className="info-quick-links">
					<a
						className="info-quick-link-item"
						href="https://www.google.com/maps/place/Sarajevo/@43.8936937,18.3005915,12z/data=!3m1!4b1!4m6!3m5!1s0x4758cbb1ed719bd1:0x562ecda6de87b33e!8m2!3d43.8562586!4d18.4130763!16zL20vMDZuOGo?entry=ttu"
						target="_blank"
					>
						<Icon src={MapPin} alt="Map Pin" className="info-map-pin-icon" />
						<span className="underline-effect"> Sarajevo, Bosnia and Herzegovina</span>
					</a>
					<ul className="info-quick-link-icon-list">
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
							<a className="info-quick-link-item" href="https://www.pinterest.com/PawPix94/" target="_blank">
								<Icon
									src={InstagramIcon}
									alt="Instagram Logo"
									className="info-quick-link-item-icon info-instagram-icon"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
