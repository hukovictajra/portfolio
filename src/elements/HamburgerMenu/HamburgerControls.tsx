import { HamburgerCrossIcon, HamburgerIcon } from "@assets/icons";

export default function HamburgerControls() {
	const handleHamburgerMenuClick = () => {
		document.getElementById("hamburger-nav")?.classList.toggle("open");
		document.getElementById("hamburger-nav-open-icon")?.classList.toggle("icon-open");
		document.getElementById("hamburger-nav-close-icon")?.classList.toggle("icon-open");
	};

	return (
		<div id="hamburger-controls">
			<HamburgerIcon
				id="hamburger-nav-open-icon"
				className="hamburger-menu-open-icon icon-open"
				onClick={handleHamburgerMenuClick}
			/>

			<HamburgerCrossIcon
				id="hamburger-nav-close-icon"
				className="hamburger-menu-close-icon"
				onClick={handleHamburgerMenuClick}
			/>
		</div>
	);
}
