import { CSSStyle } from "./Blog";

export type BlogVideo = GenericVideo | Video | GroupVideo;

export enum VideoType {
	Single,
	Group
}

export interface GenericVideo {
	type: VideoType;
	videoStyle?: CSSStyle;
}

export interface Video extends GenericVideo {
	type: VideoType.Single;
	source: string | VideoSource;
}

export interface GroupVideo extends GenericVideo {
	type: VideoType.Group;
	source: string[] | VideoSource[];
	containerStyle?: CSSStyle;
}

export interface VideoSource {
	url: string;
	style?: CSSStyle;
	className?: string;
	caption?: string;
}
