import { BlogTitle, CSSStyle } from "@data/models";
import { CSSProperties } from "react";

export function hexToRgb(hex: string): [number, number, number] {
	let r = 0,
		g = 0,
		b = 0;

	if (hex.length === 4) {
		r = parseInt(hex[1] + hex[1], 16);
		g = parseInt(hex[2] + hex[2], 16);
		b = parseInt(hex[3] + hex[3], 16);
	} else if (hex.length === 7) {
		r = parseInt(hex[1] + hex[2], 16);
		g = parseInt(hex[3] + hex[4], 16);
		b = parseInt(hex[5] + hex[6], 16);
	}

	return [r, g, b];
}

export function luminance(rgb: [number, number, number]): number {
	// Calculate the relative luminance of a color
	const a = rgb.map((value) => {
		const v = value / 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});

	return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

export function contrastRatio(
	rgb1: [number, number, number],
	rgb2: [number, number, number]
): number {
	const lum1 = luminance(rgb1);
	const lum2 = luminance(rgb2);

	return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

export function isTextColorVisible(
	bgColor: string,
	textColor: string,
	threshold: number = 4.5
): boolean {
	const bgRgb = hexToRgb(bgColor);
	const textRgb = hexToRgb(textColor);

	const ratio = contrastRatio(bgRgb, textRgb);
	return ratio >= threshold;
}

export function parseStyles(style: CSSStyle): CSSProperties {
	const windowWidth = document.documentElement.clientWidth;
	let rootStyles = getRootStyle(style);

	if (windowWidth <= 1600 && style.xl) {
		rootStyles = mergeStyles(rootStyles, style.xl);
	}

	if (windowWidth <= 1200 && style.lg) {
		rootStyles = mergeStyles(rootStyles, style.lg);
	}

	if (windowWidth <= 992 && style.md) {
		rootStyles = mergeStyles(rootStyles, style.md);
	}

	if (windowWidth <= 768 && style.sm) {
		rootStyles = mergeStyles(rootStyles, style.sm);
	}

	if (windowWidth <= 576 && style.xs) {
		rootStyles = mergeStyles(rootStyles, style.xs);
	}

	return rootStyles;
}

export function isDarkColor(hex: string): boolean {
	const [r, g, b] = hexToRgb(hex);

	const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

	return luminance < 0.5;
}

function getRootStyle(style: CSSStyle): React.CSSProperties {
	const nonObjectFields: React.CSSProperties = {};

	for (const key in style) {
		if (typeof style[key] !== "object") {
			nonObjectFields[key] = style[key];
		}
	}

	return nonObjectFields;
}

function mergeStyles(baseStyles: CSSStyle, newStyles: CSSStyle) {
	for (const key in newStyles) {
		if (typeof newStyles[key] === "object" && !Array.isArray(newStyles[key])) {
			baseStyles[key] = mergeStyles(baseStyles[key] || {}, newStyles[key]);
		} else {
			baseStyles[key] = newStyles[key];
		}
	}
	return baseStyles;
}

export function getImageURL(name: string): URL {
	return new URL(`../assets/${name.replace("@", "")}`, import.meta.url);
}

export function getVideoURL(name: string): URL {
	return new URL(`../assets/${name.replace("@", "")}`, import.meta.url);
}

export function toKebabCase(str: string): string {
	return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function getTitle(title: BlogTitle | string): string {
	return typeof title === "string" ? title : title.main;
}
