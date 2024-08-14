import { ReactNode } from "react";
import classnames from "classnames";
import { CSSStyle } from "@data/models";

import "./Text.scss";

export interface TextProps {
	children: ReactNode;
	style?: CSSStyle;
	className?: string;
}

export default function Text({ children, style, className }: TextProps) {
	return (
		<p className={classnames("blog-text", className)} style={style}>
			{children}
		</p>
	);
}
