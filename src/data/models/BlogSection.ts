import { CSSStyle } from "./Blog";
import { BlogImage } from "./BlogImage";
import { BlogVideo } from "./BlogVideo";

export type BlogSection = BlogParagraphSection | BlogListSection;
export enum BlogSectionType {
	Paragraph,
	List,
}

export interface BlogParagraphSection {
	type: BlogSectionType.Paragraph;
	title?: string;
	text?: BlogTextContent | string;
	image?: BlogImage;
	video?: BlogVideo;
	style?: CSSStyle;
}

export interface BlogListSection {
	type: BlogSectionType.List;
	style?: CSSStyle;
	title?: string;
	items?: (BlogListContent | string)[];
	image?: BlogImage;
	video?: BlogVideo;
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
