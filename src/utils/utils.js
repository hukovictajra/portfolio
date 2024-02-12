export function isTextColorVisible(bgColor, textColor) {
	const rgbText = textColor.slice(1);
	const rgbBg = bgColor.slice(1);

	const [rText, gText, bText] = [
		parseInt(rgbText.substr(0, 2), 16),
		parseInt(rgbText.substr(2, 2), 16),
		parseInt(rgbText.substr(4, 2), 16),
	];
	const [rBg, gBg, bBg] = [
		parseInt(rgbBg.substr(0, 2), 16),
		parseInt(rgbBg.substr(2, 2), 16),
		parseInt(rgbBg.substr(4, 2), 16),
	];

	const luminanceText = 0.2126 * rText + 0.7152 * gText + 0.0722 * bText;
	const luminanceBg = 0.2126 * rBg + 0.7152 * gBg + 0.0722 * bBg;

	const contrastRatio = (Math.max(luminanceText, luminanceBg) + 0.05) / (Math.min(luminanceText, luminanceBg) + 0.05);
	return contrastRatio >= 3.0;
}

export function getStyles(style) {
	const windowWidth = document.documentElement.clientWidth;
	let finalStyles = getRootStyle(style);

	if (windowWidth <= 1600 && style.xl) {
		finalStyles = mergeStyles(finalStyles, style.xl);
	}

	if (windowWidth <= 1200 && style.lg) {
		finalStyles = mergeStyles(finalStyles, style.lg);
	}

	if (windowWidth <= 992 && style.md) {
		finalStyles = mergeStyles(finalStyles, style.md);
	}

	if (windowWidth <= 768 && style.sm) {
		finalStyles = mergeStyles(finalStyles, style.sm);
	}

	if (windowWidth <= 576 && style.xs) {
		finalStyles = mergeStyles(finalStyles, style.xs);
	}

	console.log(finalStyles);
	return finalStyles;
}

function getRootStyle(obj) {
	const nonObjectFields = {};

	for (let key in obj) {
		if (typeof obj[key] !== "object") {
			nonObjectFields[key] = obj[key];
		}
	}

	return nonObjectFields;
}

function mergeStyles(baseStyles, newStyles) {
	for (let key in newStyles) {
		if (typeof newStyles[key] === "object" && !Array.isArray(newStyles[key])) {
			baseStyles[key] = mergeStyles(baseStyles[key] || {}, newStyles[key]);
		} else {
			baseStyles[key] = newStyles[key];
		}
	}
	return baseStyles;
}
