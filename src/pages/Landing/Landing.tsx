import { useEffect, useRef, useState } from "react";

import InfoSection from "./InfoSection/InfoSection";
import ImageSection from "./ImageSection/ImageSection";

import "./Landing.scss";
import { usePageInitialization, useTheme } from "@utils/hooks";

export function Landing() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrollTop, setScrollTop] = useState(0);

	useTheme(null);
	usePageInitialization();

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
