import React, { useEffect, useRef, useState } from "react";

import InfoSection from "./InfoSection/InfoSection";
import ImageSection from "./ImageSection/ImageSection";

import "./Landing.scss";

export function Landing() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		document.documentElement.style.setProperty("--theme-navbar-primary", null);
		document.documentElement.style.setProperty("--theme-bg-primary", null);
		document.documentElement.style.setProperty("--theme-primary", null);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (scrollRef.current) {
				scrollRef.current.scrollTop = document.documentElement.scrollTop;
			}
		};
		handleScroll();
		setScrollTop(document.documentElement.scrollTop);
	}, [scrollTop]);

	return (
		<div id="landing-page">
			<InfoSection />
			<ImageSection scrollRef={scrollRef} />
		</div>
	);
}
