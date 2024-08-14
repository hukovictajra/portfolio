import { CSSStyle } from "./Blog";

export type BlogImage = SingleImage | GroupImage | ImageGallery;

export enum ImageType {
	Single,
	Group,
	Gallery
}

export interface GenericImage {
	type: ImageType;
	imageStyle?: CSSStyle;
}

export interface SingleImage extends GenericImage {
	type: ImageType.Single;
	source: ImageSource | string;
}

export interface GroupImage extends GenericImage {
	type: ImageType.Group;
	source: (ImageSource | string)[];
	containerStyle?: CSSStyle;
}

export interface ImageGallery extends GenericImage {
	type: ImageType.Gallery;
	source: string[] | any;
	containerStyle?: CSSStyle;
}

export interface ImageSource {
	url: string;
	caption?: string;
	style?: CSSStyle;
	className?: string;
	modalClassName?: string;
}
