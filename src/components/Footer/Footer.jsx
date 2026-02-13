import { route } from "preact-router";
import { LinkedinIcon, PinterestIcon, InstagramIcon, FigmaIcon } from "../../assets/icons";

import "./Footer.css";

export function Footer() {
	const closeMenu = () => {
		// This function is for consistency with navbar, but footer doesn't have a menu to close
	};

	const scrollToSection = (href) => {
		const targetSection = document.querySelector(href);
		if (targetSection) {
			const navbarHeight = 80;
			const targetPosition = targetSection.offsetTop - navbarHeight;
			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});
		}
	};

	const handleNavClick = (href, e) => {
		closeMenu();

		// Allow browser to handle mailto:, tel:, and absolute external links
		if (href.startsWith("mailto:") || href.startsWith("tel:") || /^https?:\/\//.test(href)) {
			return;
		}

		e.preventDefault();

		// Same-page section scroll (#section)
		if (href.startsWith("#")) {
			scrollToSection(href);
			return;
		}

		// Links like /page#section
		if (href.includes("#")) {
			const [path, hash] = href.split("#");
			// Scroll to top before navigating to new page
			window.scrollTo(0, 0);
			route(path);
			setTimeout(() => scrollToSection(`#${hash}`), 50);
			return;
		}

		// Regular page navigation
		// Scroll to top before navigating to new page
		window.scrollTo(0, 0);
		route(href);
	};

	return (
		<footer>
			<div className="footer-content">
				<div className="footer-main">
					<div className="footer-navigation-container">
						<ul className="footer-navigation">
							<li className="footer-navigation-link">
								<a onClick={(e) => handleNavClick("/portfolio", e)}>Home</a>
							</li>
							<li className="footer-navigation-link">
								<a onClick={(e) => handleNavClick("/portfolio#design-projects", e)}>Projects</a>
							</li>
							<li className="footer-navigation-link">
								<a onClick={(e) => handleNavClick("/portfolio#qna", e)}>About</a>
							</li>
							<li className="footer-navigation-link">
								<a onClick={(e) => handleNavClick("/portfolioresume", e)}>Resume</a>
							</li>
							<li className="footer-navigation-link">
								<a href="mailto:hukovic.tajra@gmail.com">Contact</a>
							</li>
						</ul>
					</div>

					<div className="footer-external-links-container">
						<ul className="footer-external-links">
							<li className="footer-external-link-item">
								<a
									className="footer-external-link-anchor"
									href="https://www.pinterest.com/PawPix94/"
									target="_blank"
									rel="noreferrer"
									aria-label="Pinterest"
								>
									<PinterestIcon className="footer-external-link-icon" />
								</a>
							</li>

							<li className="footer-external-link-item">
								<a
									className="footer-link-item"
									href="https://www.figma.com/@htajra"
									target="_blank"
									rel="noreferrer"
									aria-label="Figma Community"
								>
									<FigmaIcon className="footer-external-link-icon" />
								</a>
							</li>

							<li className="footer-external-link-item">
								<a
									className="footer-link-item"
									href="https://www.linkedin.com/in/tajra-hukovi%C4%87-07b338234/"
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn"
								>
									<LinkedinIcon className="footer-external-link-icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer-bottom">
					<hr className="footer-line" />
					<p className="footer-signature">© 2025 Tajra Huković</p>
				</div>
			</div>
		</footer>
	);
}
