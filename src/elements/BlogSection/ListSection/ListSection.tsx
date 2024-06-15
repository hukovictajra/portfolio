import React from "react";
import { GenericBlogSection } from "../GenericBlogSection";
import { BlogListContent, BlogListSection } from "@data/models";

import "./ListSection.scss";

export interface ListSectionProps {
	section: BlogListSection;
}

export function ListSection({ section }: ListSectionProps) {
	const { items } = section;

	return (
		<GenericBlogSection className="blog-list-section" section={section}>
			<ul className="list-disc ml-10 space-y-2">
				{items.map((item: BlogListContent | string, i: number) => (
					<React.Fragment key={i}>
						{typeof item === "string" ? (
							<li className="list-item text-lg">{item}</li>
						) : (
							<li className="list-item text-lg" style={item.style}>
								{item.content}
							</li>
						)}
					</React.Fragment>
				))}
			</ul>
		</GenericBlogSection>
	);
}
