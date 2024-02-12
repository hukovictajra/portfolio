import React, { useEffect } from "react";

import InfoSection from "./InfoSection/InfoSection";
import ImageSection from "./ImageSection/ImageSection";

import "./Landing.scss";

export function Landing() {
	useEffect(() => {
		document.documentElement.style.setProperty("--theme-navbar-primary", null);
		document.documentElement.style.setProperty("--theme-bg-primary", null);
		document.documentElement.style.setProperty("--theme-primary", null);
	}, []);

	return (
		<div id="landing-page">
			<InfoSection />
			<ImageSection />
		</div>
	);
}
