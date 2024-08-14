import classnames from "classnames";
import { CSSProperties } from "react";
import { useStyleResizeHandler } from "@utils/hooks";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { VideoSource, CSSStyle } from "@data/models";

import "./GroupVideoPlayer.scss";

export interface GroupVideoPlayerProps {
	source: string[] | VideoSource[];
	containerStyle?: CSSStyle;
	containerClassName?: string;
	playerStyle?: CSSStyle;
	playerClassName?: string;
}

export function GroupVideoPlayer({
	source,
	containerStyle,
	containerClassName,
	playerStyle,
	playerClassName
}: GroupVideoPlayerProps) {
	let parsedContainerStyle: CSSProperties = useStyleResizeHandler(containerStyle!);

	return (
		<div
			className={classnames("blog-group-video-player-container", containerClassName)}
			style={parsedContainerStyle}
		>
			{source.map((src: VideoSource | string, i: number) => (
				<VideoPlayer
					key={i}
					playerStyle={playerStyle}
					playerClassName={playerClassName}
					source={src}
				/>
			))}
		</div>
	);
}
