import { useState, useEffect, useRef } from "preact/hooks";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

import "./Lightbox.css";

export function LightboxWrapper({
	images,
	children,
	className = "",
	alt = "",
	maxHeight = "90vh",
	maxWidth = "90vw",
	thumbnailMaxHeight,
	thumbnailMaxWidth,
	title,
	...props
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Handle single image or array of images
	const slides = Array.isArray(images)
		? images.map((img) => (typeof img === "string" ? { src: img } : img))
		: [{ src: images, alt }];

	const handleClick = (index = 0) => {
		setCurrentIndex(index);
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	// Build thumbnail style
	const thumbnailStyle = {};
	if (thumbnailMaxHeight) thumbnailStyle.maxHeight = thumbnailMaxHeight;
	if (thumbnailMaxWidth) thumbnailStyle.maxWidth = thumbnailMaxWidth;

	return (
		<>
			<div className="flex flex-col gap-4">
				{children ? (
					<div
						onClick={() => handleClick()}
						className={`hover:opacity-80 transition-opacity cursor-pointer ${className}`}
						style={thumbnailStyle}
						{...props}
					>
						{children}
					</div>
				) : (
					<img
						src={Array.isArray(images) ? images[0] : images}
						alt={alt}
						onClick={() => handleClick()}
						className={`hover:opacity-80 transition-opacity cursor-pointer cursor-breakpoint ${className}`}
						style={{ ...thumbnailStyle, width: "auto", height: "auto", objectFit: "contain" }}
						{...props}
					/>
				)}
				{title && <p className="text-lg text-center text-white">{title}</p>}
			</div>

			<Lightbox
				open={isOpen}
				close={handleClose}
				slides={slides}
				index={currentIndex}
				plugins={[Zoom, Fullscreen]}
				zoom={{
					maxZoomPixelRatio: 3,
					zoomInMultiplier: 2,
					doubleTapDelay: 300,
					doubleClickDelay: 300,
					doubleClickMaxStops: 2,
					keyboardMoveDistance: 50,
					wheelZoomDistanceFactor: 100,
					pinchZoomDistanceFactor: 100,
					scrollToZoom: true
				}}
				fullscreen={{
					auto: false
				}}
				carousel={{
					finite: slides.length <= 1,
					preload: 2
				}}
				animation={{
					fade: 0,
					swipe: 0
				}}
				controller={{
					closeOnPullDown: false,
					closeOnBackdropClick: true
				}}
				styles={{
					container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
					image: {
						objectFit: "contain"
					}
				}}
				render={{
					buttonPrev: slides.length <= 1 ? () => null : undefined,
					buttonNext: slides.length <= 1 ? () => null : undefined
				}}
			/>
		</>
	);
}

// Gallery component for multiple images with thumbnails
export function LightboxGallery({
	images,
	className = "",
	thumbnailClassName = "",
	containerClassName = "",
	maxHeight = "90vh",
	maxWidth = "90vw",
	galleryMaxHeight = "400px"
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [focusedIndex, setFocusedIndex] = useState(0);
	const containerRef = useRef(null);
	const cardRefs = useRef([]);

	const slides = images.map((img) => (typeof img === "string" ? { src: img } : img));

	const handleThumbnailClick = (index) => {
		setCurrentIndex(index);
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	// Auto-focus animation effect
	useEffect(() => {
		if (isOpen) return;

		const interval = setInterval(() => {
			setFocusedIndex((prev) => (prev + 1) % images.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [images.length, isOpen]);

	return (
		<>
			<div
				ref={containerRef}
				className={`flex overflow-x-auto gap-8 scrollbar-hide 2xl:-mr-[100vw] 2xl:pr-[100vw] py-6 snap-x snap-mandatory ${containerClassName}`}
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					scrollSnapType: "x mandatory",
					overflowY: "hidden"
				}}
			>
				{images.map((image, index) => {
					const src = typeof image === "string" ? image : image.src;
					const alt = typeof image === "string" ? `Image ${index + 1}` : image.alt;

					return (
						<div
							key={index}
							ref={(el) => (cardRefs.current[index] = el)}
							className={`flex-shrink-0 transition-all duration-500 transform-gpu ${
								index === focusedIndex ? "2xl:scale-110 z-10 2xl:px-4" : "2xl:scale-100"
							}`}
							style={{
								scrollSnapAlign: "start",
								maxHeight: galleryMaxHeight
							}}
							onClick={() => handleThumbnailClick(index)}
						>
							<img
								src={src}
								alt={alt}
								className={`hover:opacity-80 transition-opacity cursor-breakpoint h-auto object-contain shadow-lg ${thumbnailClassName}`}
								style={{
									aspectRatio: "auto",
									objectFit: "contain",
									maxHeight: galleryMaxHeight
								}}
								onLoad={(e) => {
									const img = e.target;
									const container = img.parentElement;
									const isPortrait = img.naturalHeight > img.naturalWidth;

									if (isPortrait) {
										// Portrait: limit width, container follows image width
										img.style.maxWidth = "300px";
										img.style.height = "auto";
										img.style.width = "auto";
										container.style.width = "auto";
										container.style.minWidth = "200px";
									} else {
										// Landscape: limit height, container uses responsive width
										img.style.maxWidth = "none";
										img.style.width = "100%";
										container.style.width =
											window.innerWidth < 640
												? "100%"
												: window.innerWidth < 1536
													? "calc(50% - 1rem)"
													: "calc(33.333% - 1.33rem)";
										container.style.minWidth = "200px";
									}
								}}
							/>
						</div>
					);
				})}
			</div>

			<Lightbox
				open={isOpen}
				close={handleClose}
				slides={slides}
				index={currentIndex}
				plugins={[Zoom, Fullscreen]}
				zoom={{
					maxZoomPixelRatio: 3,
					zoomInMultiplier: 2,
					doubleTapDelay: 300,
					doubleClickDelay: 300,
					doubleClickMaxStops: 2,
					keyboardMoveDistance: 50,
					wheelZoomDistanceFactor: 100,
					pinchZoomDistanceFactor: 100,
					scrollToZoom: true
				}}
				fullscreen={{
					auto: false
				}}
				carousel={{
					finite: slides.length <= 1,
					preload: 2
				}}
				animation={{
					fade: 0,
					swipe: 0
				}}
				controller={{
					closeOnPullDown: false,
					closeOnBackdropClick: true
				}}
				styles={{
					container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
					image: {
						objectFit: "contain"
					}
				}}
				render={{
					buttonPrev: slides.length <= 1 ? () => null : undefined,
					buttonNext: slides.length <= 1 ? () => null : undefined
				}}
			/>
		</>
	);
}

// Simple single image lightbox
export function SingleImageLightbox({
	src,
	alt = "",
	className = "",
	children,
	maxHeight,
	maxWidth,
	thumbnailMaxHeight,
	thumbnailMaxWidth,
	title,
	...props
}) {
	return (
		<LightboxWrapper
			images={src}
			alt={alt}
			className={className}
			maxHeight={maxHeight}
			maxWidth={maxWidth}
			thumbnailMaxHeight={thumbnailMaxHeight}
			thumbnailMaxWidth={thumbnailMaxWidth}
			title={title}
			{...props}
		>
			{children}
		</LightboxWrapper>
	);
}
