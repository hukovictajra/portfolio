import { useStyleResizeHandler } from "@utils/hooks";
import { SingleVideoPlayer } from "./SingleVideoPlayer";
import { BlogVideoSource, CSSStyle } from "@data/models";

export interface GroupVideoPlayerProps {
	containerStyle: CSSStyle;
	videoStyle: CSSStyle;
	source: string[] | BlogVideoSource[];
}

export function GroupVideoPlayer({ containerStyle, videoStyle, source }: GroupVideoPlayerProps) {
	const compositeContainerStyle: CSSStyle = useStyleResizeHandler(containerStyle);

	return (
		<div style={compositeContainerStyle}>
			{source.map((src: BlogVideoSource | string, i: number) => (
				<SingleVideoPlayer key={i} videoStyle={videoStyle} source={src} />
			))}
		</div>
	);
}
