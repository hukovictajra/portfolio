import { MapPinIcon, ItemArrowIcon } from "@assets/icons";
import { WorkWithMe } from "@elements/WorkWithMe/WorkWithMe";
import { InstagramIcon, LinkedinIcon, PinterestIcon } from "@assets/icons/social";

import "./InfoSection.scss";

export default function InfoSection() {
	return (
		<div id="info-section">
			<div id="info-section-content">
				<div id="info-section-title-wrapper">
					<h1 id="info-section-title">Tajra Huković</h1>
					<h3 id="info-section-subtitle">Graphic Designer, UX/UI Designer, Photographer</h3>
				</div>

				<div id="info-portfolio-wrapper">
					<div id="info-portfolio-items">
						{/* <a className="info-portfolio-item">
							<Icon src={ItemArrowIcon} alt="->" className="info-portfolio-item-icon" />
							<span className="info-portfolio-item-text underline-effect">Projects</span>
						</a> */}
						<a className="info-portfolio-item" href="#/resume">
							<ItemArrowIcon className="info-portfolio-item-icon" />
							<span className="info-portfolio-item-text underline-effect">Résumé</span>
						</a>
						<a className="info-portfolio-item">
							<ItemArrowIcon className="info-portfolio-item-icon" />
							<span className="info-portfolio-item-text underline-effect">Get to know me!</span>
						</a>
					</div>

					<WorkWithMe className="info-section-wwm-button" />
				</div>

				<div className="info-quick-links-wrapper">
					<a
						id="info-quick-link-item-location"
						className="info-quick-link-item"
						href="https://www.google.com/maps/place/Sarajevo/@43.8936937,18.3005915,12z/data=!3m1!4b1!4m6!3m5!1s0x4758cbb1ed719bd1:0x562ecda6de87b33e!8m2!3d43.8562586!4d18.4130763!16zL20vMDZuOGo?entry=ttu"
						target="_blank"
						rel="noreferrer"
					>
						<MapPinIcon className="info-map-pin-icon" />
						<span className="underline-effect"> Sarajevo, Bosnia and Herzegovina</span>
					</a>

					<ul className="info-quick-link-list">
						<li className="info-quick-link-list-item">
							<a
								className="info-quick-link-item"
								href="https://www.pinterest.com/PawPix94/"
								target="_blank"
								rel="noreferrer"
							>
								<PinterestIcon className="info-quick-link-item-icon info-pinterest-icon" />
							</a>
						</li>

						<li className="info-quick-link-list-item">
							<a
								className="info-quick-link-item"
								href="https://www.linkedin.com/in/tajra-hukovi%C4%87-07b338234/"
								target="_blank"
								rel="noreferrer"
							>
								<LinkedinIcon className="info-quick-link-item-icon info-linkedin-icon" />
							</a>
						</li>

						<li className="info-quick-link-list-item">
							<a
								className="info-quick-link-item"
								href="https://www.instagram.com/pawpix101/"
								target="_blank"
								rel="noreferrer"
							>
								<InstagramIcon className="info-quick-link-item-icon info-instagram-icon" />

								<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
									<defs>
										<linearGradient id="mygradient" x1="80.86%" x2="19.14%" y1="0%" y2="100%">
											<stop offset="0%" stop-color="#cc208e" />
											<stop offset="100%" stop-color="#6713d2" />
										</linearGradient>
									</defs>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
