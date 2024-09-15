import classnames from "classnames";
import { getImageURL } from "@utils/utils";
import { useStyleResizeHandler } from "@utils/hooks";
import { ImageSource, CSSStyle } from "@data/models";
import { CSSProperties, useRef, useState } from "react";
import Lightbox, { FullscreenRef } from "yet-another-react-lightbox";
import { Download, Inline, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import "./ImageGallery.scss";

export interface GalleryImageSectionProps {
	source: ImageSource[];
	containerStyle?: CSSStyle;
	containerClassName?: string;
	sliderClassName?: string;
	dotImageStyle?: CSSStyle;
	dotImageClassName?: string;
	imageStyle?: any;
	imageClassName?: any;
	modalStyle?: CSSStyle;
	modalClassName?: string;
	sliderWrapperClassNames?: string;
}

export function ImageGallery({
	source,
	containerStyle,
	containerClassName
}: GalleryImageSectionProps) {
	const fullscreenRef = useRef<FullscreenRef>(null);

	const processedContainerStyle: CSSProperties = useStyleResizeHandler(containerStyle!);

	const [isOpen, setOpen] = useState<boolean>(false);
	const [currentSlide, setCurrentSlide] = useState<number>(0);

	return (
		<div
			className={classnames(
				"image-gallery-container",
				isOpen && "image-gallery-open",
				containerClassName
			)}
			style={processedContainerStyle}
		>
			{/* Inline */}
			<div className="image-gallery-lightbox">
				<Lightbox
					styles={{
						slide: {
							cursor: "zoom-in"
						},
						thumbnail: {
							border: "0"
						}
					}}
					plugins={[Inline, Thumbnails, Download]}
					inline={{
						className: "image-gallery-lightbox-inline"
					}}
					thumbnails={{
						vignette: false,
						showToggle: true
					}}
					slides={source.map((x) => ({
						src: getImageURL(x.url).href
					}))}
					on={{
						click: (props) => {
							setOpen(true);
							setCurrentSlide(props.index);
							fullscreenRef.current?.enter();
						},
						enterFullscreen: () => setOpen(true),
						exitFullscreen: () => setOpen(false)
					}}
					close={() => setOpen(false)}
				/>
			</div>

			{/* Fullscreen */}
			<div className="image-gallery-lightbox-fullscreen">
				<Lightbox
					open={isOpen}
					index={currentSlide}
					styles={{
						container: {
							backgroundColor: isOpen ? "rgba(0, 0, 0, 0.7)" : "transparent"
						},
						thumbnail: {
							border: "0"
						},
						thumbnailsContainer: {
							backgroundColor: isOpen ? "rgba(0, 0, 0, 0.7)" : "transparent"
						}
					}}
					plugins={[Thumbnails, Zoom, Download]}
					inline={{
						style: { width: "100%", aspectRatio: "16 / 9", height: "720px" }
					}}
					thumbnails={{
						vignette: false,
						showToggle: true
					}}
					slides={source.map((x) => ({
						src: getImageURL(x.url).href
					}))}
					on={{
						click: () => {
							setOpen(true);
							fullscreenRef.current?.enter();
						},
						enterFullscreen: () => setOpen(true),
						exitFullscreen: () => setOpen(false)
					}}
					fullscreen={{
						ref: fullscreenRef
					}}
					close={() => setOpen(false)}
				/>
			</div>
		</div>
	);
}
