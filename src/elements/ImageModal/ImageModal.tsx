import classnames from "classnames";
import { CSSProperties } from "react";
import { CSSStyle, ImageSource } from "@data/models";
import Modal from "react-responsive-modal";
import { useStyleResizeHandler } from "@utils/hooks";
import { getImageURL } from "@utils/utils";
import { useSwipeable } from "react-swipeable";

export interface ImageModalProps {
	isOpen: boolean;
	onModalClose: () => any;
	className?: string;
	style?: CSSStyle;
	image: ImageSource | string;
	onSwipeLeft?: () => any;
	onSwipeRight?: () => any;
}

export default function ImageModal({
	isOpen,
	onModalClose,
	className,
	style,
	image,
	onSwipeLeft,
	onSwipeRight
}: ImageModalProps) {
	const processedModalStyle: CSSProperties = useStyleResizeHandler(style!);

	let processedImageStyle: CSSProperties | undefined;
	let imageClassName: string | undefined;
	let imageUrl: URL;

	if (typeof image === "object") {
		processedImageStyle = useStyleResizeHandler(image.style!);
		imageClassName = image.className!;
		imageUrl = getImageURL(image.url);
	} else {
		processedImageStyle = undefined;
		imageClassName = undefined;
		imageUrl = getImageURL(image);
	}

	const config = {
		delta: 10,
		preventScrollOnSwipe: false,
		trackTouch: true,
		trackMouse: false,
		rotationAngle: 0,
		swipeDuration: Infinity,
		touchEventOptions: { passive: true }
	};

	const swipeHandlers = useSwipeable({
		onSwiped: (eventData) => {
			if (eventData.dir === "Left") {
				onSwipeLeft && onSwipeLeft();
			} else if (eventData.dir === "Right") {
				onSwipeRight && onSwipeRight();
			}
		},
		...config
	});

	return (
		<Modal
			open={isOpen}
			onClose={onModalClose}
			center
			closeIcon={<span></span>}
			{...swipeHandlers}
			classNames={{
				modal: classnames("!bg-transparent !shadow-none m-0 !p-2", className)
			}}
		>
			<div className="flex justify-center cursor-pointer max-h-screen" style={processedModalStyle}>
				<img
					src={imageUrl.href}
					alt={imageUrl.pathname}
					className="blog-image max-h-screen overflow-y-auto"
					style={processedImageStyle}
					onClick={onModalClose}
				/>
			</div>
		</Modal>
	);
}
