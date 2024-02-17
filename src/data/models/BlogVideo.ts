import { CSSStyle } from "./Blog";

export type BlogVideo = SingleBlogVideo | GroupBlogVideo;
export enum BlogVideoType {
	Single,
	Group,
}

export interface GenericBlogVideo {
	type: BlogVideoType;
	videoStyle?: CSSStyle;
}

export interface SingleBlogVideo extends GenericBlogVideo {
	type: BlogVideoType.Single;
	source: string | BlogVideoSource;
}

export interface GroupBlogVideo extends GenericBlogVideo {
	type: BlogVideoType.Group;
	source: string[] | BlogVideoSource[];
	containerStyle?: CSSStyle;
}

export interface BlogVideoSource {
	url: string;
	style?: CSSStyle;
	caption?: string;
}
