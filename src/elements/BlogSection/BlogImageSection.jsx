import Icon from "../Icon/Icon";
import { getStyles } from "@utils/utils";
import ImageGallery from "react-image-gallery";
import React, { useEffect, useState } from "react";
import FullscreenOpenIcon from "@icons/fullscreen-open.svg";
import FullscreenCloseIcon from "@icons/fullscreen-close.svg";

import "./BlogImageSection.scss";

export function BlogImageSection({ image }) {
	let preparedImages = [];
	const [styles, setStyles] = useState(
		image.containerStyle ? getStyles(image.containerStyle, document.documentElement.clientWidth) : []
	);
	const [isFullscreen, setFullScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (image.containerStyle) {
				setStyles(getStyles(image.containerStyle, document.documentElement.clientWidth));
			}
		};

		// console.log(getStyles(image.containerStyle, document.documentElement.clientWidth));
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [document.documentElement.clientWidth]);

	if (image && image.src) {
		if (typeof image.src === "string") {
			preparedImages.push({
				original: require(`../../assets/${image.src.replace("@", "")}`),
			});
		} else if (Array.isArray(image.src) && image.type !== "gallery") {
			image.src.forEach((src) => {
				preparedImages.push({
					original: require(`../../assets/${src.replace("@", "")}`),
				});
			});
		} else if (Array.isArray(image.src) && image.type === "gallery") {
			image.src.forEach((src) => {
				if (typeof src === "string") {
					preparedImages.push({
						original: require(`../../assets/${src.replace("@", "")}`),
						thumbnail: require(`../../assets/${src.replace("@", "")}`),
					});
				} else {
					preparedImages.push({
						original: require(`../../assets/${src.original.replace("@", "")}`),
						thumbnail: require(`../../assets/${src.original.replace("@", "")}`),
						originalWidth: src.originalWidth || "",
						originalHeight: src.originalHeight || "",
						thumbnailWidth: src.thumbnailWidth || "",
						thumbnailHeight: src.thumbnailHeight || "",
					});
				}
			});
		}
	}

	function renderImageGallery(images) {
		let items = Array.isArray(images) ? images : [images];

		return (
			<ImageGallery
				showFullscreenButton
				renderFullscreenButton={(onClick, isFullscreen) => {
					setFullScreen(isFullscreen);
					return (
						<button
							type="button"
							className={`image-gallery-icon image-gallery-fullscreen-button`}
							onClick={onClick}
							aria-label="Open Fullscreen"
						>
							<Icon src={isFullscreen ? FullscreenCloseIcon : FullscreenOpenIcon} />
						</button>
					);
				}}
				thumbnailPosition={isFullscreen ? "left" : "bottom"}
				additionalClass={`"blog-section-image`}
				useBrowserFullscreen={false}
				showPlayButton={false}
				showNav={items.length >= 2}
				showThumbnails={true}
				originalClass={image.originalClass || {}}
				thumbnailClass={image.thumbnailClass || {}}
				onClick={(e) => {
					// e.target.querySelector(".image-gallery-fullscreen-button").click();
				}}
				items={items}
			/>
		);
	}

	return (
		<div className="blog-image-wrapper">
			<div style={styles}>
				{image && image.src ? (
					preparedImages.length === 1 ? (
						renderImageGallery(preparedImages[0])
					) : image.type === "single" ? (
						preparedImages.map((src, index) => <React.Fragment key={index}>{renderImageGallery(src)}</React.Fragment>)
					) : image.type === "gallery" ? (
						<React.Fragment>{renderImageGallery(preparedImages)}</React.Fragment>
					) : null
				) : (
					<p>Invalid image configuration!</p>
				)}
			</div>
			{image.caption && <span className="blog-image-caption">{image.caption}</span>}
		</div>
	);
}
