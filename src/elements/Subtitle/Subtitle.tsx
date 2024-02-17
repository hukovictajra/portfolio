import { JSX } from "react/jsx-runtime";
import { Tooltip } from "react-tooltip";
import { isTextColorVisible } from "@utils/utils";
import { BlogColors, BlogSubtitle, BlogSubtitleType } from "@data/models";

import "./Subtitle.scss";

export interface SubtitleProps {
	subtitles: BlogSubtitle[];
	colors: BlogColors;
	overview?: boolean;
	onPrimary?: boolean;
}

export function Subtitles({ subtitles, colors, overview, onPrimary }: SubtitleProps) {
	const renderSubtitle = (subtitle: BlogSubtitle, i: number) => {
		if (subtitle.hideOnOverview) {
			return;
		}

		let textElement: JSX.Element;

		if (subtitle.type === BlogSubtitleType.Color) {
			if (overview) {
				return null;
			}

			const parsedColors = Object.entries(subtitle.chips).map(([k, v]: [string, string]) => ({
				key: k,
				value: colors[v.replace("@", "")],
			}));

			let elements = [];

			parsedColors.forEach((color) => {
				elements.push(
					<span
						key={color.key}
						style={{
							background: color.value,
							color: isTextColorVisible(color.value, colors.primary)
								? colors.primary
								: isTextColorVisible(color.value, "#fbfafa")
								? "#fbfafa"
								: "#444444",
						}}
						className="subtitle-content-pill"
						data-tooltip-id={`color-chip-${color.value}-tooltip`}
						data-tooltip-content={color.value}
						data-tooltip-place="top"
					>
						{color.key.replace("@", "")}
						<Tooltip id={`color-chip-${color.value}-tooltip`} />
					</span>
				);
			});

			textElement = <span className="subtitle-content">{elements}</span>;
		} else {
			textElement = (
				<span className="subtitle-content">
					{subtitle.items.map((x) =>
						typeof x === "object" ? (
							x.type === "hyperlink" ? (
								<a
									key={x}
									className={`subtitle-content-pill subtitle-content-pill-link ${
										onPrimary && "subtitle-content-pill-on-primary"
									}`}
									href={x.url}
									target="_blank"
									rel="noreferrer"
								>
									{x.text}
								</a>
							) : (
								<span key={x} className={`subtitle-content-pill ${onPrimary && "subtitle-content-pill-on-primary"}`}>
									{x.text}
								</span>
							)
						) : (
							<span key={x} className={`subtitle-content-pill ${onPrimary && "subtitle-content-pill-on-primary"}`}>
								{x}
							</span>
						)
					)}
				</span>
			);
		}

		return (
			<h4 key={i} className={`subtitle ${subtitle.type === BlogSubtitleType.Color && "subtitle-colors"}`}>
				<span className="subtitle-prefix">{subtitle.prefix}</span>
				{textElement}
			</h4>
		);
	};

	return (
		<div className="subtitle-wrapper">
			{Array.isArray(subtitles)
				? subtitles.map((subtitle, i) => renderSubtitle(subtitle, i))
				: renderSubtitle(subtitles, 0)}
		</div>
	);
}
