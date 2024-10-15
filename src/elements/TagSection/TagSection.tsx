import { ColorTag, LinkTag, TextTag } from "./Tags";
import { BlogColors, BlogTags, BlogTagType } from "@data/models";

import "./TagSection.scss";

const renderTags = (
	tag: BlogTags,
	colors?: BlogColors,
	overview?: boolean,
	onPrimary?: boolean
) => {
	if (tag.hideOnOverview) return null;

	if (tag.type === BlogTagType.Color && colors && tag.items && !overview) {
		return <ColorTag tag={tag} colors={colors} />;
	} else if (tag.type === BlogTagType.Text) {
		return <TextTag tag={tag} onPrimary={onPrimary || false} />;
	} else if (tag.type === BlogTagType.Link) {
		return <LinkTag tag={tag} onPrimary={onPrimary || false} />;
	}

	return null;
};

export interface TagSectionProps {
	tags: BlogTags[];
	colors?: BlogColors;
	overview?: boolean;
	onPrimary?: boolean;
}

export function TagSection({ tags, colors, overview, onPrimary }: TagSectionProps) {
	return (
		<div className="tag-section-wrapper">
			{tags.map((tag, i) => (
				<div key={i} className="tag-section">
					<span className="tag-section-prefix">{tag.prefix}</span>
					{renderTags(tag, colors, overview, onPrimary)}
				</div>
			))}
		</div>
	);
}
