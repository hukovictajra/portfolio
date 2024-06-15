import { CSSStyle } from "./Blog";
import { ReactImageGalleryItem } from "react-image-gallery";

export type BlogImage = SingleBlogImage | GroupBlogImage | BlogImageGallery;

export enum BlogImageType {
	Single,
	Group,
	Gallery,
}

export interface GenericBlogImage {
	type: BlogImageType;
	imageStyle?: CSSStyle;
}

export interface SingleBlogImage extends GenericBlogImage {
	type: BlogImageType.Single;
	source: BlogImageSource | string;
}

export interface GroupBlogImage extends GenericBlogImage {
	type: BlogImageType.Group;
	source: (BlogImageSource | string)[];
	containerStyle?: CSSStyle;
}

export interface BlogImageGallery extends GenericBlogImage {
	type: BlogImageType.Gallery;
	source: ReactImageGalleryItem[];
	containerStyle?: CSSStyle;
}

export interface BlogImageSource {
	url: string;
	caption?: string;
	style?: CSSStyle;
}
