import { useRef, useState } from "preact/hooks";
import { forwardRef } from "preact/compat";
import HTMLFlipBook from "react-pageflip";
import "./Booklet.css";

const Page = forwardRef(({ children }, ref) => {
	return (
		<div className="booklet-page" ref={ref}>
			<div className="booklet-page-content">
				{children}
			</div>
		</div>
	);
});

export function Booklet({ images }) {
	const bookRef = useRef();

	return (
		<div className="booklet-container">
			<div className="booklet-wrapper">
				<HTMLFlipBook
					ref={bookRef}
					width={3308}
					height={1166}
					size="stretch"
					minWidth={600}
					maxWidth={3308}
					minHeight={212}
					maxHeight={1166}
					drawShadow={true}
					flippingTime={800}
					usePortrait={false}
					startPage={0}
					autoSize={true}
					maxShadowOpacity={0.5}
					showCover={true}
					mobileScrollSupport={true}
					className="booklet-flipbook"
					startZIndex={0}
					swipeDistance={30}
					showPageCorners={true}
					disableFlipByClick={false}
				>
					{images.map((image, index) => (
						<Page key={index}>
							<img
								src={image}
								alt={`Page ${index + 1}`}
								className="booklet-page-image"
								loading="lazy"
							/>
						</Page>
					))}
				</HTMLFlipBook>
			</div>
		</div>
	);
}