import { useEffect, useRef } from "react";
import { WorkWithMe } from "../WorkWithMe/WorkWithMe";
import HamburgerControls from "@elements/HamburgerMenu/HamburgerControls";

import "./Navbar.scss";

export function Navbar() {
	const headingRef = useRef<HTMLAnchorElement>(null);
	const navbarRef = useRef<HTMLDivElement>(null);

	const scrollFunction = () => {
		const scrollTop = document.documentElement.scrollTop;

		if (
			headingRef.current &&
			navbarRef.current &&
			scrollTop >= 0 &&
			scrollTop < 120 &&
			window.innerWidth > 576
		) {
			const scrollDirection = window.scrollY > 120 ? "up" : "down";

			if (!headingRef || !headingRef.current || !navbarRef || !navbarRef.current) {
				return;
			}

			if (scrollDirection === "down") {
				headingRef.current.style.transform = `scale(${1 - 0.0007 * scrollTop})`;
			} else {
				headingRef.current.style.transform = `scale(${1 + 0.0007 * scrollTop})`;
			}

			navbarRef.current.style.backgroundColor =
				document.documentElement.style.getPropertyValue("--theme-navbar-bg");

			navbarRef.current.classList.remove("navbar-in-sticky");
		}

		if (navbarRef && navbarRef.current) {
			navbarRef.current.style.backgroundColor = navbarRef.current.style.backgroundColor.replace(
				/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d*\.?\d+)?\)/,
				`rgba($1, $2, $3, ${scrollTop / 140})`
			);
		}
	};

	useEffect(() => {
		scrollFunction();

		window.addEventListener("scroll", scrollFunction);

		return () => {
			window.removeEventListener("scroll", scrollFunction);
		};
	}, []);

	return (
		<nav id="navbar" ref={navbarRef}>
			<div className="flex justify-between items-center w-full">
				<a className="navbar-heading satoshi" ref={headingRef} href={"#/"}>
					Tajra Huković
				</a>

				<nav className="navbar-submenu">
					<a className="underline-effect" href="#/">
						Projects
					</a>
					<a className="underline-effect" href="#/get-to-know-me">
						Get to know me
					</a>
					<a className="underline-effect" href="#/resume">
						Résumé
					</a>
					<div className="nav-wwm-button">
						<WorkWithMe />
					</div>
				</nav>
			</div>
			<HamburgerControls />
		</nav>
	);
}
