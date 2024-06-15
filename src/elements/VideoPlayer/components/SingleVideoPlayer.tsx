import { CSSProperties } from "react";
import ReactPlayer from "react-player";
import { getVideoURL, parseStyles } from "@utils/utils";
import { useStyleResizeHandler } from "@utils/hooks";
import { BlogVideoSource, CSSStyle } from "@data/models";

export interface SingleVideoPlayerProps {
	videoStyle?: CSSStyle;
	source: BlogVideoSource | string;
}

export function SingleVideoPlayer({ videoStyle, source }: SingleVideoPlayerProps) {
	let parsedVideoStyle: CSSProperties = {};

	if (videoStyle) {
		parsedVideoStyle = useStyleResizeHandler(videoStyle);
	}

	let url: string | undefined;
	let title: string | undefined;
	let style: CSSProperties | undefined;

	if (typeof source === "object") {
		url = source.url;
		style = source.style ? parseStyles(source.style) : undefined;
		title = source.caption;
	} else {
		url = source;
		style = undefined;
		title = undefined;
	}

	return (
		<div className="blog-video-player-container" style={parsedVideoStyle}>
			<ReactPlayer
				style={style}
				className="blog-video-player"
				width="100%"
				height="100%"
				volume={0}
				muted={true}
				controls
				url={getVideoURL(url).href}
			/>
			{source && <span className="blog-image-caption">{title}</span>}
		</div>
	);
}
