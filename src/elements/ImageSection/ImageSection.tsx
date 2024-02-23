import { BlogImage, BlogImageType } from "@data/models";
import { GalleryImageSection, GroupImageSection, SingleImageSection } from "./components";

import "./ImageSection.scss";

export interface BlogImageSectionProps {
	image: BlogImage;
}

export function BlogImageSection({ image }: BlogImageSectionProps) {
	return (
		<div className="flex flex-col items-center justify-center text-center gap-4 w-full blog-image-wrapper">
			{image.type === BlogImageType.Single ? (
				<SingleImageSection imageStyle={image.imageStyle} source={image.source} />
			) : image.type === BlogImageType.Group ? (
				<GroupImageSection containerStyle={image.containerStyle} imageStyle={image.imageStyle} source={image.source} />
			) : image.type === BlogImageType.Gallery ? (
				<GalleryImageSection containerStyle={image.containerStyle} source={image.source} />
			) : (
				<div>Implementation for {image} does not exist!</div>
			)}
		</div>
	);
}
