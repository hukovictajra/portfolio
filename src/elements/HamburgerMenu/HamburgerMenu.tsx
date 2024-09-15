import { cn } from "@elements/shadcn/lib/utils";

import "./HamburgerMenu.scss";

export interface HamburgerMenuProps {
	className?: string;
}

export function HamburgerMenu({ className }: HamburgerMenuProps) {
	const resetMenu = () => {
		document.getElementById("hamburger-nav")?.classList.toggle("open");
	};

	return (
		<div id="hamburger-nav" className={cn("hamburger-navbar-overlay", className)}>
			<nav>
				<ul className="flex flex-col gap-8">
					<li className="underline-effect">
						<a href="#/" onClick={resetMenu}>
							Homepage
						</a>
					</li>
					<li className="underline-effect">
						<a href="#/resume" onClick={resetMenu}>
							Résumé
						</a>
					</li>
					<li className="underline-effect">
						<a href="#/get-to-know-me" onClick={resetMenu}>
							Get to know
						</a>
					</li>
					<li className="underline-effect">
						<a href="mailto:hukovic.tajra@gmail.com" onClick={resetMenu}>
							Work with me
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
