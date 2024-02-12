import React, { useState } from "react";

import Icon from "../Icon/Icon";
import HamburgerIcon from "@icons/hamburger.svg";
import HamburgerCrossIcon from "@icons/hamburger-cross.svg";

import "./HamburgerMenu.scss";

export default function HamburgerMenu({ className }) {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<nav
			className={`hamburger-menu hamburger-menu-open-${isMenuOpen} ${className}`}
			onClick={() => setMenuOpen(!isMenuOpen)}
		>
			<Icon src={HamburgerIcon} className="hamburger-menu-open-icon hamburger-menu-icon" />
			<Icon src={HamburgerCrossIcon} className="hamburger-menu-close-icon hamburger-menu-icon" />

			<div className="menu-items">
				<ul className="menu-items-list">
					<li>
						<a href="#/">Homepage</a>
					</li>
					<li>
						<a href="#/resume">Résumé</a>
					</li>
					<li>
						<a href="mailto:hukovic.tajra@gmail.com">Work with me</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
