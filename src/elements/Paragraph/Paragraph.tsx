import { ReactNode } from "react";
import classnames from "classnames";
import { CSSStyle } from "@data/models";

import "./Paragraph.scss";

export interface ParagraphProps {
	children: ReactNode;
	style?: CSSStyle;
	className?: string;
}

export default function Paragraph({ children, style, className }: ParagraphProps) {
	return (
		<p className={classnames("blog-paragraph", className)} style={style}>
			{children}
		</p>
	);
}
