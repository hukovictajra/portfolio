import { CSSStyle } from "@data/models";
import ImageGallery from "react-image-gallery";
import { CSSProperties, useState } from "react";
import { useStyleResizeHandler } from "@utils/hooks";
import { FullscreenButton } from "./FullscreenButton";
import { ReactImageGalleryItem } from "react-image-gallery";

export interface GalleryImageSectionProps {
	containerStyle?: CSSStyle;
	source: ReactImageGalleryItem[];
}

export function GalleryImageSection({ containerStyle, source }: GalleryImageSectionProps) {
	const [isFullscreen, setFullScreen] = useState(false);

	let processedContainerStyle: CSSProperties = useStyleResizeHandler(containerStyle);

	console.log(source);

	return (
		<div style={processedContainerStyle}>
			<ImageGallery
				showFullscreenButton
				renderFullscreenButton={(onClick, isFullscreen) => FullscreenButton(onClick, isFullscreen, setFullScreen)}
				thumbnailPosition={isFullscreen ? "left" : "bottom"}
				additionalClass="blog-section-image"
				useBrowserFullscreen={false}
				showPlayButton={false}
				showNav={true}
				showThumbnails={true}
				onClick={(e) => {
					// e.target.querySelector(".image-gallery-fullscreen-button").click();
				}}
				items={source.map((src) => ({
					original: require(`../../../assets/${src.original.replace("@", "")}`),
					thumbnail: require(`../../../assets/${src.thumbnail.replace("@", "")}`),
				}))}
			/>
		</div>
	);
}
