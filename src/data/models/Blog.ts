import { BlogSection } from "./BlogSection";
import { BlogTags } from "./BlogTags";
import { ImageSource } from "./BlogImage";
import React from "react";

export interface Blog {
	id: string;
	position: number;
	showOnLanding: boolean;
	title: string | BlogTitle;
	tags: BlogTags[];
	image: ImageSource | string;
	colors: BlogColors;
	style?: CSSStyle;
	sections?: BlogSection[];
	component?: React.Component;
	rawTags?: string[];
}

export interface BlogTitle {
	main: string;
	subtitle: string;
}

export type CSSStyle = React.CSSProperties & Partial<ResponsiveInlineStyle>;

export interface ResponsiveInlineStyle {
	xl: React.CSSProperties;
	lg: React.CSSProperties;
	md: React.CSSProperties;
	sm: React.CSSProperties;
	xs: React.CSSProperties;
}

export class BlogColors {
	navbarBg?: string | null;
	navbarText?: string | null;
	tagText?: string | null;
	tagHoverBg?: string | null;
	tagHoverText?: string | null;
	workWithMeBg?: string | null;
	workWithMeText?: string | null;
	workWithMeHoverBg?: string | null;
	workWithMeHoverText?: string | null;
	background?: string | null;
	primary?: string | null;
	secondary?: string | null;

	constructor(colors: {
		navbarBg?: string;
		navbarText?: string;
		tagText?: string;
		tagHoverBg?: string;
		tagHoverText?: string;
		workWithMeBg?: string;
		workWithMeText?: string;
		workWithMeHoverBg?: string;
		workWithMeHoverText?: string;
		background?: string;
		primary?: string;
		secondary?: string;
	}) {
		this.navbarBg = colors.navbarBg || null;
		this.navbarText = colors.navbarText || null;
		this.tagText = colors.tagText || null;
		this.tagHoverBg = colors.tagHoverBg || null;
		this.tagHoverText = colors.tagHoverText || null;
		this.workWithMeBg = colors.workWithMeBg || null;
		this.workWithMeText = colors.workWithMeText || null;
		this.workWithMeHoverBg = colors.workWithMeHoverBg || null;
		this.workWithMeHoverText = colors.workWithMeHoverText || null;
		this.background = colors.background || null;
		this.primary = colors.primary || null;
		this.secondary = colors.secondary || null;
	}
}

export type BlogColorKey = keyof BlogColors;
