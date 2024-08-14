import Slider from "react-slick";
import classnames from "classnames";
import { getImageURL } from "@utils/utils";
import { useStyleResizeHandler } from "@utils/hooks";
import { ImageSource, CSSStyle } from "@data/models";
import ImageModal from "@elements/ImageModal/ImageModal";
import { CSSProperties, useEffect, useState } from "react";

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
	containerClassName,
	sliderClassName,
	dotImageStyle,
	dotImageClassName,
	imageStyle,
	imageClassName,
	modalStyle,
	modalClassName,
	sliderWrapperClassNames
}: GalleryImageSectionProps) {
	const processedContainerStyle: CSSProperties = useStyleResizeHandler(containerStyle!);
	const processedDotImageStyle: CSSProperties = useStyleResizeHandler(dotImageStyle!);
	const processedImageStyle: CSSProperties = useStyleResizeHandler(imageStyle!);

	const [isOpen, setOpen] = useState(false);

	const onModalOpen = () => setOpen(true);
	const onModalClose = () => setOpen(false);

	const [currentSlide, setCurrentSlide] = useState(0);
	const [dotsDisplayed, setDotsDisplayed] = useState(document.documentElement.clientWidth > 576);

	useEffect(() => {
		const handleResize = () => {
			setDotsDisplayed(document.documentElement.clientWidth > 576);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const renderCustomPaging = (i: number) => {
		return (
			<a className="">
				<img
					src={getImageURL(source[i].url).href}
					className={dotImageClassName}
					style={processedDotImageStyle}
				/>
			</a>
		);
	};

	return (
		<div
			className={classnames("image-gallery-container", containerClassName)}
			style={processedContainerStyle}
		>
			<Slider
				customPaging={renderCustomPaging}
				dots={dotsDisplayed}
				infinite
				slidesToShow={1}
				slidesToScroll={1}
				className={classnames("image-gallery-slider", sliderClassName)}
				dotsClass="slider-dots-section"
				swipeToSlide
				afterChange={(index) => setCurrentSlide(index)}
			>
				{source.map((src, index) => (
					<div
						className={classnames("image-gallery-slider-wrapper", sliderWrapperClassNames)}
						key={index}
					>
						<img
							className={classnames(imageClassName, src.className)}
							src={getImageURL(src.url).href}
							alt={`Thumbnail ${index}`}
							style={processedImageStyle}
							onClick={onModalOpen}
						/>
					</div>
				))}
			</Slider>

			<ImageModal
				isOpen={isOpen}
				onModalClose={onModalClose}
				className={modalClassName}
				style={modalStyle}
				image={source[currentSlide]}
			/>
		</div>
	);
}
