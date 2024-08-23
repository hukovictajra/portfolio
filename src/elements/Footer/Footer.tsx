import { LinkedinIcon, PinterestIcon, ContraIcon, InstagramIcon, FigmaIcon } from "@icons/social/";

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
						<a
							className="footer-external-quick-link-anchor"
							href="https://www.pinterest.com/PawPix94/"
							target="_blank"
							rel="noreferrer"
						>
							<PinterestIcon className="footer-external-quick-link-icon info-pinterest-icon" />
						</a>
					</li>

					<li className="footer-external-quick-link-item">
						<a
							className="footer-quick-link-item"
							href="https://www.figma.com/@htajra"
							target="_blank"
							rel="noreferrer"
						>
							<FigmaIcon className="footer-external-quick-link-icon info-figma-icon" />
						</a>
					</li>

					<li className="footer-external-quick-link-item">
						<a
							className="footer-quick-link-item"
							href="https://www.instagram.com/pawpix101/"
							target="_blank"
							rel="noreferrer"
						>
							<InstagramIcon className="footer-external-quick-link-icon info-instagram-icon" />
						</a>
					</li>

					<li className="footer-external-quick-link-item">
						<a
							className="footer-quick-link-item"
							href="https://www.linkedin.com/in/tajra-hukovi%C4%87-07b338234/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedinIcon className="footer-external-quick-link-icon info-linkedin-icon" />
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
							<ContraIcon />
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
