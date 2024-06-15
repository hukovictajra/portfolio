import { useStyleResizeHandler } from "@utils/hooks";
import { SingleVideoPlayer } from "./SingleVideoPlayer";
import { BlogVideoSource, CSSStyle } from "@data/models";
import { CSSProperties } from "react";

export interface GroupVideoPlayerProps {
	containerStyle?: CSSStyle;
	videoStyle?: CSSStyle;
	source: string[] | BlogVideoSource[];
}

export function GroupVideoPlayer({ containerStyle, videoStyle, source }: GroupVideoPlayerProps) {
	let parsedContainerStyle: CSSProperties = {};

	if (containerStyle) {
		parsedContainerStyle = useStyleResizeHandler(containerStyle);
	}

	return (
		<div style={parsedContainerStyle}>
			{source.map((src: BlogVideoSource | string, i: number) => (
				<SingleVideoPlayer key={i} videoStyle={videoStyle} source={src} />
			))}
		</div>
	);
}
