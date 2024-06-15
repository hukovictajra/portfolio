import { BlogParagraphSection } from "@data/models";
import { GenericBlogSection } from "../GenericBlogSection";

import "./ParagraphSection.scss";

export interface ParagraphSectionProps {
	section: BlogParagraphSection;
}

export function ParagraphSection({ section }: ParagraphSectionProps) {
	const { text } = section;

	return (
		<GenericBlogSection section={section}>
			{typeof text === "string" ? (
				<p className="blog-paragraph-section-text">{text}</p>
			) : (
				typeof text === "object" && (
					<p className="blog-paragraph-section-text" style={text.style}>
						{text.content}
					</p>
				)
			)}
		</GenericBlogSection>
	);
}
