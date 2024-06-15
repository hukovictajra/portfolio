import { getImageURL, parseStyles } from "@utils/utils";
import { useState, CSSProperties } from "react";
import { FullscreenButton } from "./FullscreenButton";
import { BlogImageSource, CSSStyle } from "@data/models";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export interface SingleImageSectionProps {
	imageStyle?: CSSStyle;
	source: string | BlogImageSource;
}

export function SingleImageSection({ imageStyle, source }: SingleImageSectionProps) {
	const [isFullscreen, setFullScreen] = useState(false);

	let sources: ReactImageGalleryItem[];
	let caption: string | undefined = undefined;
	let processedImageStyle: CSSProperties | undefined = imageStyle;

	if (typeof source === "object") {
		sources = [{ original: getImageURL(source.url).href }];
		caption = source.caption;

		if (source.style) {
			processedImageStyle = parseStyles(source.style);
		}
	} else {
		sources = [{ original: getImageURL(source).href }];
	}

	return (
		<div style={processedImageStyle}>
			<ImageGallery
				showFullscreenButton
				renderFullscreenButton={(onClick, isFullscreen) =>
					FullscreenButton(onClick, isFullscreen, setFullScreen)
				}
				thumbnailPosition={isFullscreen ? "left" : "bottom"}
				additionalClass="blog-section-image"
				useBrowserFullscreen={false}
				showPlayButton={false}
				showNav={false}
				showThumbnails={false}
				onClick={() => {
					// e.target.querySelector(".image-gallery-fullscreen-button").click();
				}}
				items={sources}
			/>
			{caption && <span className="text-lg tracking-wide font-medium">{caption}</span>}
		</div>
	);
}
