import { JSX } from "react/jsx-runtime";
import { Tooltip } from "react-tooltip";
import { isTextColorVisible } from "@utils/utils";
import { BlogColors, BlogSubtitle, BlogSubtitleType } from "@data/models";
import { ReactNode } from "react";
import { SubtitleLink } from "../../data/models/BlogSubtitle";

import "./Subtitle.scss";

export interface SubtitleProps {
	subtitles: BlogSubtitle[];
	colors?: BlogColors;
	overview?: boolean;
	onPrimary?: boolean;
}

const renderSubtitle = (
	i: number,
	subtitle: BlogSubtitle,
	colors?: BlogColors,
	overview?: boolean,
	onPrimary?: boolean
) => {
	if (subtitle.hideOnOverview) {
		return;
	}

	let subtitleContent: JSX.Element = <></>;

	if (subtitle.type === BlogSubtitleType.Color && colors) {
		if (overview || !subtitle.items) {
			return null;
		}

		const parsedColors = Object.entries(subtitle.items).map(([k, v]: [string, string]) => ({
			key: k,
			value: colors[v.replace("@", "")]
		}));

		const elements: ReactNode[] = [];

		parsedColors.forEach((color: { key: string; value: string }, i: number) => {
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
						animationDelay: `${0.3 + i * 0.3}s`
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

		subtitleContent = <span className="subtitle-content">{elements}</span>;
	} else if (subtitle.type === BlogSubtitleType.Text) {
		subtitleContent = (
			<span className="subtitle-content">
				{subtitle.items.map((x: string, i: number) => (
					<span
						key={x}
						className={`subtitle-content-pill ${onPrimary && "subtitle-content-pill-on-primary"}`}
						style={{ animationDelay: `${0.3 + i * 0.3}s` }}
					>
						{x}
					</span>
				))}
			</span>
		);
	} else if (subtitle.type === BlogSubtitleType.Link) {
		subtitleContent = (
			<span className="subtitle-content">
				{subtitle.items.map((x: SubtitleLink, i: number) => (
					<a
						key={i}
						className={`subtitle-content-pill subtitle-content-pill-link ${
							onPrimary && "subtitle-content-pill-on-primary"
						}`}
						href={x.url}
						target="_blank"
						rel="noreferrer"
					>
						{x.text}
					</a>
				))}
			</span>
		);
	}

	return (
		<h4
			key={i}
			className={`subtitle ${subtitle.type === BlogSubtitleType.Color && "subtitle-colors"}`}
		>
			<span className="subtitle-prefix">{subtitle.prefix}</span>
			{subtitleContent}
		</h4>
	);
};

export function Subtitles({ subtitles, colors, overview, onPrimary }: SubtitleProps) {
	return (
		<div className="subtitle-wrapper">
			{Array.isArray(subtitles)
				? subtitles.map((subtitle, i) => renderSubtitle(i, subtitle, colors, overview, onPrimary))
				: renderSubtitle(0, subtitles, colors, overview, onPrimary)}
		</div>
	);
}
