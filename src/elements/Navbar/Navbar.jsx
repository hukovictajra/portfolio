import { useEffect, useRef } from "react";
import WorkWithMe from "../WorkWithMe/WorkWithMe";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import "./Navbar.scss";

export function Navbar() {
	const headingRef = useRef(null);
	const navbarRef = useRef(null);

	const scrollFunction = () => {
		const scrollTop = document.documentElement.scrollTop;

		if (scrollTop >= 0 && scrollTop < 120 && window.innerWidth > 576) {
			const scrollDirection = window.scrollY > 120 ? "up" : "down";

			if (scrollDirection == "down") {
				headingRef.current.style.transform = `scale(${1 - 0.0007 * scrollTop})`;
			} else {
				headingRef.current.style.transform = `scale(${1 + 0.0007 * scrollTop})`;
			}
			if (navbarRef.current.style["background-color"] === "") {
				navbarRef.current.style["background-color"] =
					document.documentElement.style.getPropertyValue("--theme-bg-navbar");
			}

			navbarRef.current.classList.remove("navbar-in-sticky");
		}

		navbarRef.current.style["background-color"] = navbarRef.current.style["background-color"].replace(
			/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d*\.?\d+)?\)/,
			`rgba($1, $2, $3, ${scrollTop / 140})`
		);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollFunction);

		return () => {
			window.removeEventListener("scroll", scrollFunction);
		};
	}, []);

	return (
		<nav id="navbar" ref={navbarRef}>
			<a className={`navbar-heading satoshi`} ref={headingRef} href={"#/"}>
				Tajra Huković
			</a>

			<nav className="navbar-submenu">
				<a className="underline-effect" href="#/">
					Projects
				</a>
				{/* <a className="underline-effect" href="#/gallery">
					Gallery
				</a> */}
				<a className="underline-effect" href="#/resume">
					Résumé
				</a>
				<div className="nav-wwm-button">
					<WorkWithMe />
				</div>
			</nav>

			<HamburgerMenu className="navbar-hamburger-menu" />
		</nav>
	);
}
