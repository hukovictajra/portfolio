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
	let processedContainerStyle: CSSProperties = useStyleResizeHandler(containerStyle);

	return (
		<div style={processedContainerStyle}>
			{source.map((src: BlogImageSource | string) => (
				<SingleImageSection imageStyle={imageStyle} source={src} />
			))}
		</div>
	);
}
