import { ReactNode } from "react";
import classnames from "classnames";
import { CSSStyle } from "@data/models";

import "./List.scss";

export interface ListItemProps {
	style?: CSSStyle;
	text?: string;
	children?: ReactNode;
}
export function ListItem({ style, text, children }: ListItemProps) {
	return (
		<li className="blog-list-item" style={style}>
			{children || text}
		</li>
	);
}

export interface ListProps {
	className?: string;
	children: ReactNode;
}

export function List({ children, className }: ListProps) {
	return <ul className={classnames("blog-list", className)}>{children}</ul>;
}
