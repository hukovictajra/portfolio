import { useEffect, useRef } from "react";
import WorkWithMe from "../WorkWithMe/WorkWithMe";

import "./Navbar.scss";

export default function Navbar() {
	const headingRef = useRef(null);
	const navbarRef = useRef(null);

	useEffect(() => {
		const scrollFunction = () => {
			const scrollTop = document.documentElement.scrollTop;

			if (scrollTop >= 0 && scrollTop < 120) {
				const scrollDirection = window.scrollY > 120 ? "up" : "down";

				if (scrollDirection == "down") {
					headingRef.current.style.transform = `scale(${1 - 0.002 * scrollTop})`;
					navbarRef.current.style["background-color"] = navbarRef.current.style["background-color"].replace(
						/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d*\.?\d+)?\)/,
						`rgba($1, $2, $3, ${scrollTop / 140})`
					);
				} else {
					headingRef.current.style.transform = `scale(${1 + 0.002 * scrollTop})`;
				}

				navbarRef.current.classList.remove("navbar-in-sticky");
			}
		};

		window.addEventListener("scroll", scrollFunction);
		return () => window.removeEventListener("scroll", scrollFunction);
	}, []);

	return (
		<div id="navbar" ref={navbarRef}>
			<a className={`navbar-heading satoshi`} ref={headingRef} href={"/"}>
				Tajra Huković
			</a>
			<div className="navbar-submenu">
				<a className="underline-effect">Projects</a>
				<a className="underline-effect">Services</a>
				<div className="nav-wwm-button">
					<WorkWithMe />
				</div>
			</div>
		</div>
	);
}
