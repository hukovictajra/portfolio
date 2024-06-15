import { CSSProperties, useEffect, useState } from "react";
import { parseStyles } from "./utils";
import { CSSStyle } from "@data/models";

export const useStyleResizeHandler = (style: CSSStyle): CSSProperties | Object => {
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
