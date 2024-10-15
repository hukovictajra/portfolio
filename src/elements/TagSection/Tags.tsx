import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { isDarkColor } from "@utils/utils";
import { Badge } from "@elements/Badge/Badge";
import {
	BlogColorKey,
	BlogColors,
	BlogColorTags,
	BlogLinkTags,
	BlogTextTags,
	TagLink
} from "@data/models";

export const ColorTag = ({ tag, colors }: { tag: BlogColorTags; colors: BlogColors }) => {
	const parsedColors = Object.entries(tag.items).map(([key, value]) => ({
		key,
		value: colors[value.replace("@", "") as BlogColorKey]
	}));

	const handleCopyToClipboard = async (color: { key: string; value: string }) => {
		try {
			await navigator.clipboard.writeText(color.value);
			toast(`${color.key} (${color.value}) copied to clipboard!`, { autoClose: 2000 });
		} catch (error) {
			toast(`Failed to copy color ${color} (${color.key})`, { autoClose: 2000 });
		}
	};

	return (
		<span className="tags-badge-wrapper">
			{parsedColors.map((color) => (
				<Badge
					key={color.key}
					variant="outline"
					onClick={async () => await handleCopyToClipboard(color as any)}
					style={{
						background: color.value!,
						color: isDarkColor(color.value as any)
							? isDarkColor(document.documentElement.style.getPropertyValue("--theme-background"))
								? "#e5e7eb"
								: document.documentElement.style.getPropertyValue("--theme-primary")
							: "#1f2937"
					}}
					className="tag-badge tag-color-badge"
					data-tooltip-id={`color-chip-${color.value}-tooltip`}
					data-tooltip-content={color.value}
					data-tooltip-place="top"
				>
					{color.key.replace("@", "")}
					<Tooltip id={`color-chip-${color.value}-tooltip`} />
				</Badge>
			))}
		</span>
	);
};

export const TextTag = ({ tag }: { tag: BlogTextTags; onPrimary?: boolean; bgColor?: string }) => {
	return (
		<div className="tags-badge-wrapper">
			{tag.items.map((text, i) => (
				<Badge
					key={text}
					className="tag-badge"
					variant="outline"
					style={{
						animationDelay: `${0.3 + i * 0.3}s`
					}}
				>
					{text}
				</Badge>
			))}
		</div>
	);
};

export const LinkTag = ({ tag }: { tag: BlogLinkTags; onPrimary?: boolean; bgColor?: string }) => {
	return (
		<span className="tags-badge-wrapper">
			{tag.items.map((link: TagLink, i) => (
				<Badge
					key={link.text}
					variant="outline"
					className="tag-badge tag-link-badge"
					style={{
						animationDelay: `${0.3 + i * 0.3}s`
					}}
				>
					<a key={i} href={link.url} target="_blank" rel="noreferrer">
						{link.text}
					</a>
				</Badge>
			))}
		</span>
	);
};
