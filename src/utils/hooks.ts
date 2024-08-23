import { CSSProperties, useEffect, useRef, useState } from "react";
import { parseStyles } from "./utils";
import { CSSStyle } from "@data/models";

export const useStyleResizeHandler = (style: CSSStyle): CSSProperties | Object => {
	if (!style) {
		return {};
	}

	const [parsedStyles, setParsedStyles] = useState({});

	useEffect(() => {
		const handleResize = () => {
			setParsedStyles(parseStyles(style));
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [style]);

	return parsedStyles;
};

export const useSmoothScrollHeadings = () => {
	const headingsRef = useRef<HTMLHeadingElement[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === " ") {
				event.preventDefault();
				if (event.shiftKey) {
					scrollToPreviousHeading();
				} else {
					scrollToNextHeading();
				}
			}
		};

		const scrollToNextHeading = () => {
			const nextIndex = currentIndex + 1;
			if (nextIndex < headingsRef.current.length) {
				setCurrentIndex(nextIndex);
				scrollToHeading(nextIndex);
			}
		};

		const scrollToPreviousHeading = () => {
			const prevIndex = currentIndex - 1;
			if (prevIndex >= 0) {
				setCurrentIndex(prevIndex);
				scrollToHeading(prevIndex);
			}
		};

		const scrollToHeading = (index: number) => {
			const heading = headingsRef.current[index];
			if (heading) {
				const offset = 125;
				const headingPosition = heading.getBoundingClientRect().top + window.scrollY - offset;
				window.scrollTo({ top: headingPosition, behavior: "smooth" });
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [currentIndex]);

	useEffect(() => {
		const updateCurrentIndex = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = headingsRef.current.indexOf(entry.target as HTMLHeadingElement);
					if (index !== -1) {
						setCurrentIndex(index);
					}
				}
			});
		};

		const observer = new IntersectionObserver(updateCurrentIndex, {
			threshold: 0.1
		});

		headingsRef.current = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
		headingsRef.current.forEach((heading) => observer.observe(heading));

		return () => {
			observer.disconnect();
		};
	}, []);
};
