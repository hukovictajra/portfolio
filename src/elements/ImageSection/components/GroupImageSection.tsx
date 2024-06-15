import { CSSProperties } from "react";
import { useStyleResizeHandler } from "@utils/hooks";
import { BlogImageSource, CSSStyle } from "@data/models";
import { SingleImageSection } from "./SingleImageSection";

export interface GroupImageSectionProps {
	containerStyle?: CSSStyle;
	imageStyle?: CSSStyle;
	source: (BlogImageSource | string)[];
}

export function GroupImageSection({ containerStyle, imageStyle, source }: GroupImageSectionProps) {
	let processedContainerStyle: CSSProperties = {};

	if (containerStyle) {
		processedContainerStyle = useStyleResizeHandler(containerStyle);
	}

	return (
		<div style={processedContainerStyle}>
			{source.map((src: BlogImageSource | string, i: number) => (
				<SingleImageSection key={i} imageStyle={imageStyle} source={src} />
			))}
		</div>
	);
}
