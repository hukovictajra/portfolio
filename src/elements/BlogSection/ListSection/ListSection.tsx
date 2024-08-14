import React from "react";
import { BlogSection } from "../BlogSection";
import { BlogListContent, BlogListSection } from "@data/models";

import "./ListSection.scss";

export interface ListSectionProps {
	section: BlogListSection;
}

export function ListSection({ section }: ListSectionProps) {
	const { items, preText, postText } = section;

	return (
		<BlogSection className="blog-list-section">
			{preText && <p className="text-lg mb-4">{preText}</p>}

			<ul className={`list-disc ml-10 space-y-4 ${preText && postText ? "my-2" : "my-4"}`}>
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

			{postText && <p className="text-lg mt-4">{postText}</p>}
		</BlogSection>
	);
}
