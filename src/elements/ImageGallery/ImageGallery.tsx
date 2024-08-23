import Slider from "react-slick";
import classnames from "classnames";
import { getImageURL } from "@utils/utils";
import { useStyleResizeHandler } from "@utils/hooks";
import { ImageSource, CSSStyle } from "@data/models";
import ImageModal from "@elements/ImageModal/ImageModal";
import { CSSProperties, useEffect, useRef, useState } from "react";

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

	const divRef = useRef<HTMLDivElement>(null);
	const prevArrowRef = useRef<HTMLDivElement>(null);
	const nextArrowRef = useRef<HTMLDivElement>(null);

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		if (divRef.current) {
			observer.observe(divRef.current);
		}

		return () => {
			if (divRef.current) {
				observer.unobserve(divRef.current);
			}
		};
	}, []);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isVisible) return;

			if (event.key === "ArrowLeft") {
				if (prevArrowRef.current) {
					prevArrowRef.current.click();
				}
			} else if (event.key === "ArrowRight") {
				if (nextArrowRef.current) {
					nextArrowRef.current.click();
				}
			} else if (event.key === "Enter") {
				onModalOpen();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isVisible]);

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

	const PrevArrow = ({ className, style, onClick, children }: any): JSX.Element => {
		return (
			<div className={className} style={style} onClick={onClick} ref={prevArrowRef}>
				{children}
			</div>
		);
	};

	const NextArrow = ({ className, style, onClick, children }: any): JSX.Element => {
		return (
			<div className={className} style={style} onClick={onClick} ref={nextArrowRef}>
				{children}
			</div>
		);
	};

	const [activeSlide, setActiveSlide] = useState(0);
	const [activeSlide2, setActiveSlide2] = useState(0);

	return (
		<div
			className={classnames("image-gallery-container", containerClassName)}
			style={processedContainerStyle}
			ref={divRef}
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
				beforeChange={(_, next) => {
					setActiveSlide(next);
				}}
				afterChange={(current) => setActiveSlide2(current)}
				prevArrow={<PrevArrow />}
				nextArrow={<NextArrow />}
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
				image={isOpen ? source[activeSlide] : source[activeSlide2]}
				onSwipeLeft={() => {
					nextArrowRef.current && nextArrowRef.current.click();
				}}
				onSwipeRight={() => {
					prevArrowRef.current && prevArrowRef.current.click();
				}}
			/>
		</div>
	);
}
