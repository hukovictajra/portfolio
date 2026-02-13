import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";

import "./Navbar.css";

const projects = [
	{
		name: "Vitta",
		path: "vitta",
	},
	{
		name: "Fasada Festival",
		path: "fasada-festival",
	},
	{
		name: "Montaža Tehnike",
		path: "montaza-tehnike",
	},
	{
		name: "Dashboard",
		path: "dashboard",
	},
	{
		name: "Melodic Mix",
		path: "melodic-mix",
	},
];

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const firstSection = document.querySelector("section");
			if (!firstSection) return;

			const scrollY = window.scrollY;
			const sectionHeight = firstSection.offsetHeight;
			const navbarHeight = 80;
			const scrollProgress = Math.min(scrollY / (sectionHeight - navbarHeight), 1);

			setScrolled(scrollProgress > 0.1);

			const minOpacity = 0;
			const maxOpacity = 0.8;
			const backgroundOpacity = minOpacity + scrollProgress * (maxOpacity - minOpacity);

			const navbar = document.getElementById("navbar");
			if (navbar) {
				navbar.style.setProperty("--navbar-bg-opacity", backgroundOpacity);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		document.body.style.overflow = !isMenuOpen ? "hidden" : "";
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		document.body.style.overflow = "";
	};

	const scrollToSection = (hash) => {
		const targetSection = document.querySelector(hash);
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
			route(path);
			setTimeout(() => scrollToSection(`#${hash}`), 50);
			return;
		}

		// Regular page navigation
		route(href);
	};

	return (
		<>
			<header id="navbar" className={`navbar-container ${scrolled ? "navbar-scrolled" : ""}`}>
				<div className="navbar-content">
					<h1 className="navbar-title">
						<a href="/portfolio" onClick={(e) => handleNavClick("/", e)}>
							Tajra Huković
						</a>
					</h1>

					<nav className="navbar-navigation-container hidden md:flex">
						<div className="navbar-dropdown-container">
							<a
								href="#design-projects"
								className="navbar-navigation-item"
								onClick={(e) => handleNavClick("/portfolio#design-projects", e)}
							>
								Projects
							</a>
							<div className="navbar-dropdown">
								{projects.map((project) => (
									<a
										key={project.path}
										href={project.path}
										className="navbar-dropdown-item"
										onClick={(e) => handleNavClick(project.path, e)}
									>
										{project.name}
									</a>
								))}
							</div>
						</div>
						<a href="#qna" className="navbar-navigation-item" onClick={(e) => handleNavClick("/portfolio#qna", e)}>
							About
						</a>
						<a href="resume" className="navbar-navigation-item" onClick={(e) => handleNavClick("resume", e)}>
							Resume
						</a>
						<a
							href="mailto:hukovic.tajra@gmail.com"
							className="navbar-navigation-item"
							onClick={(e) => handleNavClick("mailto:hukovic.tajra@gmail.com", e)}
						>
							Contact
						</a>
						<a href="https://www.figma.com/@htajra" className="navbar-navigation-item">
							Figma
						</a>
					</nav>

					<button
						id="menu-toggle"
						className={`hamburger-menu md:hidden focus:outline-none ${isMenuOpen ? "active" : ""}`}
						onClick={toggleMenu}
						aria-label="Toggle mobile menu"
					>
						<svg
							className="hamburger-icon w-7 h-7"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
						>
							<path
								className="hamburger-line-1"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</header>

			<nav
				id="mobile-menu"
				className={`mobile-menu ${isMenuOpen ? "show" : "hidden"}`}
				onClick={(e) => e.target === e.currentTarget && closeMenu()}
			>
				<div className="mobile-menu-content">
					<a
						href="/portfolio#design-projects"
						className="mobile-menu-item"
						onClick={(e) => handleNavClick("/portfolio#design-projects", e)}
					>
						Projects
					</a>
					<div className="mobile-menu-projects">
						{projects.map((project) => (
							<a
								key={project.path}
								href={project.path}
								className="mobile-menu-project-item"
								onClick={(e) => handleNavClick(project.path, e)}
							>
								{project.name}
							</a>
						))}
					</div>
					<a href="/portfolio#qna" className="mobile-menu-item" onClick={(e) => handleNavClick("/portfolio#qna", e)}>
						About
					</a>

					<a href="resume" className="mobile-menu-item" onClick={(e) => handleNavClick("resume", e)}>
						Resume
					</a>
					<a
						href="mailto:hukovic.tajra@gmail.com"
						className="mobile-menu-item"
						onClick={(e) => handleNavClick("mailto:hukovic.tajra@gmail.com", e)}
					>
						Contact
					</a>
					<a href="https://www.figma.com/@htajra" className="mobile-menu-item">
						Figma
					</a>
				</div>
			</nav>
		</>
	);
}
