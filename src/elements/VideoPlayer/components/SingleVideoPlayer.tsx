import { CSSProperties } from "react";
import ReactPlayer from "react-player";
import { parseStyles } from "@utils/utils";
import { useStyleResizeHandler } from "@utils/hooks";
import { BlogVideoSource, CSSStyle } from "@data/models";

export interface SingleVideoPlayerProps {
	videoStyle: CSSStyle;
	source: BlogVideoSource | string;
}

export function SingleVideoPlayer({ videoStyle, source }: SingleVideoPlayerProps) {
	const compositeVideoStyles: CSSProperties = useStyleResizeHandler(videoStyle);

	let url: string = null;
	let title: string = null;
	let style: CSSProperties = null;

	if (typeof source === "object") {
		url = source.url;
		style = source.style ? parseStyles(source.style) : null;
		title = source.caption;
	} else {
		url = source;
		style = null;
		title = null;
	}

	return (
		<div className="blog-video-player-container" style={compositeVideoStyles}>
			<ReactPlayer
				style={style}
				className="blog-video-player"
				width="100%"
				height="100%"
				volume={0}
				muted={true}
				controls
				url={require(`../../../assets/${url.replace("@", "")}`)}
			/>
			{source && <span className="blog-image-caption">{title}</span>}
		</div>
	);
}
