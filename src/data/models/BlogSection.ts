import { CSSStyle } from "./Blog";
import { BlogImage } from "./BlogImage";
import { BlogVideo } from "./BlogVideo";

export type BlogSection = BlogParagraphSection | BlogComplexSection | BlogListSection;

export enum BlogSectionType {
	Paragraph,
	List,
	Complex
}

export interface BlogComplexSection {
	type: BlogSectionType.Complex;
	title?: BlogTitle | string;
	content: BlogComponent[];
	style?: CSSStyle;
	contentStyle?: CSSStyle;
}

export interface BlogParagraphSection {
	type: BlogSectionType.Paragraph;
	title?: BlogTitle | string;
	text?: BlogTextContent | BlogTextContent[] | string[] | string;
	image?: BlogImage;
	video?: BlogVideo;
	style?: CSSStyle;
	contentStyle?: CSSStyle;
}

export interface BlogListSection {
	type: BlogSectionType.List;
	style?: CSSStyle;
	preText?: string;
	postText?: string;
	title?: BlogTitle | string;
	items: (BlogListContent | string)[];
	image?: BlogImage;
	video?: BlogVideo;
	contentStyle?: CSSStyle;
	imageHeight?: any;
}

export interface BlogTitle {
	text: string;
	style: CSSStyle;
}

export interface BlogTextContent extends BlogComponent {
	type?: SectionComponentType.Text;
	content: string | string[];
	style?: CSSStyle;
}

export interface BlogListContent extends BlogComponent {
	type: SectionComponentType.List;
	content: string[];
	style?: CSSStyle;
}

export enum SectionComponentType {
	Text,
	List,
	Image,
	Video
}

export interface BlogComponent {
	type?: SectionComponentType;
}