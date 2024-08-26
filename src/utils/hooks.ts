import { CSSProperties, RefObject, useEffect, useRef, useState } from "react";
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
	const [currentIndex, setCurrentIndex] = useState(0);
	const [scrollTop, setScrollTop] = useState(false);
	const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

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
			if (nextIndex < headings.length) {
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
			const heading = headings[index];

			if (heading) {
				const offset = 125;
				const headingPosition = heading.getBoundingClientRect().top + window.scrollY - offset;
				window.scrollTo({ top: headingPosition, behavior: "smooth" });
			}
		};

		const handleScroll = (e: any) => {
			setScrollTop(e.target.documentElement.scrollTop);
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentIndex]);

	useEffect(() => {
		setHeadings(Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")));
	}, []);

	useEffect(() => {
		const findNextClosestHeading = (headings: HTMLHeadingElement[]) => {
			const viewportHeight = window.innerHeight;
			const scrollTop = window.scrollY;

			for (let heading of headings) {
				const bounding = heading.getBoundingClientRect();
				const headingTop = bounding.top + scrollTop;

				if (headingTop >= scrollTop && bounding.top < viewportHeight) {
					return heading;
				}
			}

			return headings[0];
		};

		const closest = findNextClosestHeading(headings);
		setCurrentIndex(headings.findIndex((x) => x.innerHTML === closest.innerHTML));
	}, [scrollTop]);
};

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
	const [value, setValue] = useState(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const handleMouseEnter = () => setValue(true);
		const handleMouseLeave = () => setValue(false);

		element.addEventListener("mouseenter", handleMouseEnter);
		element.addEventListener("mouseleave", handleMouseLeave);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mouseleave", handleMouseLeave);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [elementRef]);

	return value;
}
