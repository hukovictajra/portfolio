import { ReactNode } from "react";
import { BlogImage, BlogTitle, BlogVideo, CSSStyle } from "@data/models";
import classnames from "classnames";

import "./BlogSection.scss";

export interface GenericBlogSectionProps {
	className?: string;
	title?: BlogTitle | string;
	children: ReactNode;
	style?: CSSStyle;
}

export function BlogSection({ className, title, children, style }: GenericBlogSectionProps) {
	return (
		<div className={classnames("blog-section flex flex-col mb-8", className)} style={style}>
			{title && typeof title === "string" ? (
				<h2 className="blog-section-title">{title}</h2>
			) : typeof title === "object" ? (
				<h2 className="blog-section-title" style={title.style}>
					{title.text}
				</h2>
			) : (
				""
			)}
			<div className="blog-section-content" style={style}>
				{children}
			</div>
		</div>
	);
}
