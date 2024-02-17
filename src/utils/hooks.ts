import { CSSProperties, useEffect, useState } from "react";
import { parseStyles } from "./utils";
import { CSSStyle } from "@data/models";

export const useStyleResizeHandler = (style: CSSStyle): CSSProperties | null => {
	const [parsedStyles, setParsedStyles] = useState(style ? parseStyles(style) : {});

	useEffect(() => {
		const handleResize = () => {
			setParsedStyles(style ? parseStyles(style) : null);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [style]);

	return parsedStyles;
};
