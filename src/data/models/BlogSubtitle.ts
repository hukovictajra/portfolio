import { CSSStyle } from "./Blog";

export type BlogSubtitle = BlogTextSubtitle | BlogColorSubtitle | BlogLinkSubtitle;
export enum BlogSubtitleType {
	Text,
	Color,
	Link,
}

export interface GenericBlogSubtitle {
	type: BlogSubtitleType;
	prefix: string;
	hideOnOverview?: boolean;
	style?: CSSStyle;
}

export interface BlogTextSubtitle extends GenericBlogSubtitle {
	type: BlogSubtitleType.Text;
	items: string[];
}

export interface BlogColorSubtitle extends GenericBlogSubtitle {
	type: BlogSubtitleType.Color;
	chips?: { [key: string]: string };
}

export interface BlogLinkSubtitle extends GenericBlogSubtitle {
	type: BlogSubtitleType.Link;
	items: SubtitleLink[];
}

export interface SubtitleLink {
	url: string;
	text: string;
}
