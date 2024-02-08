import React from "react";

import InfoSection from "./InfoSection/InfoSection";
import ImageSection from "./ImageSection/ImageSection";

import "./Landing.scss";

export function Landing() {
	return (
		<div id="landing-page">
			<InfoSection />
			<ImageSection />
		</div>
	);
}
