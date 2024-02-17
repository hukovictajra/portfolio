import { CSSStyle } from "./Blog";
import { BlogImage } from "./BlogImage";
import { BlogVideo } from "./BlogVideo";

export type BlogSection = BlogParagraph | BlogListSection;
export enum BlogSectionType {
	Paragraph,
	List,
}

export interface BlogParagraph {
	type: BlogSectionType.Paragraph;
	title?: string;
	text?: BlogTextContent | string;
	image?: BlogImage | string;
	video?: BlogVideo | string;
	style?: CSSStyle;
}

export interface BlogListSection {
	type: BlogSectionType.List;
	title?: string;
	items?: (BlogListContent | string)[];
	image?: BlogImage | string;
	video?: BlogVideo | string;
}

export interface BlogTextContent {
	content: string | string[];
	style?: CSSStyle;
}

export interface BlogListContent {
	type: string;
	content: string[];
	style?: CSSStyle;
}
