import { BlogSection } from "./BlogSection";
import { BlogSubtitle } from "./BlogSubtitle";
import { ImageSource } from "./BlogImage";
import React from "react";

export interface Blog {
	id: string;
	position: number;
	showOnLanding: boolean;
	title: string;
	subtitles: BlogSubtitle[];
	image: ImageSource | string;
	colors?: BlogColors;
	style?: CSSStyle;
	sections?: BlogSection[];
	component?: React.Component;
}

export type CSSStyle = React.CSSProperties & Partial<ResponsiveInlineStyle>;

export interface ResponsiveInlineStyle {
	xl: React.CSSProperties;
	lg: React.CSSProperties;
	md: React.CSSProperties;
	sm: React.CSSProperties;
	xs: React.CSSProperties;
}
export interface BlogColors {
	[key: string]: string;
}
