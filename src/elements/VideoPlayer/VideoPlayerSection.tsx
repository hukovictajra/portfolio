import { BlogVideo, BlogVideoType } from "@data/models";
import { GroupVideoPlayer, SingleVideoPlayer } from "./components";

export interface VideoPlayerSectionProps {
	video: BlogVideo;
}

export function VideoPlayerSection({ video }: VideoPlayerSectionProps) {
	return video.type === BlogVideoType.Single ? (
		<SingleVideoPlayer videoStyle={video.videoStyle} source={video.source} />
	) : video.type === BlogVideoType.Group ? (
		<GroupVideoPlayer
			containerStyle={video.containerStyle}
			videoStyle={video.videoStyle}
			source={video.source}
		/>
	) : (
		<div>Implementation for {video} does not exist!</div>
	);
}
