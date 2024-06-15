import { useState } from "react";
import { HamburgerCrossIcon, HamburgerIcon } from "@assets/icons";

import "./HamburgerMenu.scss";

export interface HamburgerMenuProps {
	className?: string;
}

export function HamburgerMenu({ className }: HamburgerMenuProps) {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<nav
			className={`hamburger-menu hamburger-menu-open-${isMenuOpen} ${className}`}
			onClick={() => setMenuOpen(!isMenuOpen)}
		>
			<HamburgerIcon className="hamburger-menu-open-icon hamburger-menu-icon" />
			<HamburgerCrossIcon className="hamburger-menu-close-icon hamburger-menu-icon" />

			<div className="menu-items">
				<ul className="flex flex-col gap-8">
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
