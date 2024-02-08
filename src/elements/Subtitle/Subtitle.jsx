import React from "react";
import { Tooltip } from "react-tooltip";

import "./Subtitle.scss";

export function Subtitle({ blog, hideColors }) {
	function isColorDark(color) {
		const rgb = color.slice(1);
		const [r, g, b] = [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
		const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
		return luminance < 128;
	}

	const renderSubtitle = (blog, subtitle, i) => {
		let textElement;

		if (hideColors) {
			blog.subtitle = blog.subtitle.filter((x) => x.type !== "colors");
		}

		if (subtitle.type === "colors") {
			const colors = subtitle.text.match(/@(\w+)/g).map((x) => ({ key: x, value: blog.colors[x.replace("@", "")] }));

			let elements = [];
			colors.forEach((color) => {
				elements.push(
					<span
						key={color.key}
						style={{ background: color.value, color: isColorDark(color.value) ? "white" : "black" }}
						className="subtitle-color-chip"
						data-tooltip-id={`color-chip-${color.value}-tooltip`}
						data-tooltip-content={color.value}
						data-tooltip-place="top"
					>
						{color.key.replace("@", "")}
						<Tooltip id={`color-chip-${color.value}-tooltip`} />
					</span>
				);
			});
			textElement = elements;
		} else {
			textElement = (
				<span className="subtitle-content">
					{subtitle.text.map((x, i) =>
						i < subtitle.text.length - 1 ? (
							<span key={i}>
								{x}
								<span className="subtitle-content-dot">•</span>
							</span>
						) : (
							<span key={i}>{x}</span>
						)
					)}
				</span>
			);
		}

		return (
			<h4 key={i} className={`subtitle ${subtitle.type === "colors" && "subtitle-colors"}`}>
				<span className="subtitle-prefix">{subtitle.prefix}</span>
				{textElement}
			</h4>
		);
	};

	return (
		<div className="subtitle-wrapper">
			{Array.isArray(blog.subtitle)
				? blog.subtitle.map((subtitle, i) => renderSubtitle(blog, subtitle, i))
				: renderSubtitle(blog, blog.subtitle, 0)}
		</div>
	);
}
