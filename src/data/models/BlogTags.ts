import { CSSStyle } from "./Blog";

export type BlogTags = BlogTextTags | BlogColorTags | BlogLinkTags;

export enum BlogTagType {
	Text,
	Color,
	Link
}

export interface GenericBlogTag {
	type: BlogTagType;
	prefix: string;
	hideOnOverview?: boolean;
	style?: CSSStyle;
}

export interface BlogTextTags extends GenericBlogTag {
	type: BlogTagType.Text;
	items: string[];
}

export interface BlogColorTags extends GenericBlogTag {
	type: BlogTagType.Color;
	items: { [key: string]: string };
}

export interface BlogLinkTags extends GenericBlogTag {
	type: BlogTagType.Link;
	items: TagLink[];
}

export interface TagLink {
	text: string;
	url: string;
}
