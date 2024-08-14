import { BlogComplexSection, ComplexBlogContentType } from "@data/models";

import { BlogImageSection } from "@elements/ImageSection/ImageSection";

export interface ComplexSectionProps {
	section: BlogComplexSection;
}

export function ComplexSection({ section }: ComplexSectionProps) {
	const { title, content, contentStyle } = section;

	if (content[0].type)
		return (
			<div className={`blog-section flex flex-col mb-8`}>
				{title && typeof title === "string" ? (
					<h3 className="font-semibold mb-2 sm:text-center">{title}</h3>
				) : typeof title === "object" ? (
					<h3 className="font-semibold mb-2 sm:text-center" style={title.style}>
						{title.text}
					</h3>
				) : (
					""
				)}
				<div className="blog-section-content" style={contentStyle}>
					{/* {content?.map((x) =>
						ComplexBlogContentType.ComplexBlogContentType.BlogTextContent ? (
							<p>{x.content.content}</p>
						) : x.type === ComplexBlogContentType.BlogImage ? (
							<BlogImageSection image={x.content} />
						) : (
							<div></div>
						)
					)} */}
				</div>
			</div>
		);
}
