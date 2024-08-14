import classnames from "classnames";
import { CSSProperties } from "react";
import ReactPlayer from "react-player";
import { getVideoURL } from "@utils/utils";
import { useStyleResizeHandler } from "@utils/hooks";
import { VideoSource, CSSStyle } from "@data/models";

import "./VideoPlayer.scss";

export interface VideoPlayerProps {
	source: VideoSource | string;
	containerStyle?: CSSStyle;
	containerClassName?: string;
	playerStyle?: CSSStyle;
	playerClassName?: string;
	caption?: string;
}

export function VideoPlayer({
	source,
	containerStyle,
	containerClassName,
	playerStyle,
	playerClassName,
	caption
}: VideoPlayerProps) {
	const parsedContainerStyle: CSSProperties = useStyleResizeHandler(containerStyle!);
	const parsedPlayerStyle: CSSProperties = useStyleResizeHandler(playerStyle!);

	let videoUrl: string | undefined;
	let videoCaption: string | undefined = caption;
	let videoClassName: string | undefined = playerClassName;
	let videoStyle: CSSProperties | undefined = useStyleResizeHandler(playerStyle!);

	if (typeof source === "object") {
		videoUrl = source.url;
		videoCaption = source.caption;
		videoStyle = useStyleResizeHandler(source.style!);
		videoClassName = source.className;
	} else {
		videoUrl = source;
	}

	return (
		<div
			className={classnames("blog-video-player-container", containerClassName)}
			style={parsedContainerStyle}
		>
			<ReactPlayer
				style={parsedPlayerStyle}
				className={classnames("blog-video-player", playerClassName, videoClassName)}
				width="100%"
				height="100%"
				volume={0}
				muted={true}
				controls
				url={getVideoURL(videoUrl).href}
			/>

			{videoCaption && <span className="blog-video-player-caption">{videoCaption}</span>}
		</div>
	);
}
