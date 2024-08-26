import classnames from "classnames";
import { CSSProperties } from "react";
import { CSSStyle, ImageSource } from "@data/models";
import Modal from "react-responsive-modal";
import { useStyleResizeHandler } from "@utils/hooks";
import { getImageURL } from "@utils/utils";
import { useSwipeable } from "react-swipeable";
import { ArrowRoundedIcon } from "@assets/icons";

export interface ImageModalProps {
	isOpen: boolean;
	onModalClose: () => any;
	className?: string;
	style?: CSSStyle;
	image: ImageSource | string;
	onNext?: () => any;
	onPrevious?: () => any;
}

export default function ImageModal({
	isOpen,
	onModalClose,
	className,
	style,
	image,
	onNext,
	onPrevious
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
				onNext && onNext();
			} else if (eventData.dir === "Right") {
				onPrevious && onPrevious();
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
			<div className="flex justify-center cursor-zoom-out max-h-screen" style={processedModalStyle}>
				<img
					src={imageUrl.href}
					alt={imageUrl.pathname}
					className="blog-image max-h-screen overflow-y-auto"
					style={processedImageStyle}
					onClick={onModalClose}
				/>
			</div>

			{onPrevious && onNext && (
				<div className="flex items-center justify-between w-full h-14 w-14 mt-4 select-none text-[var(--theme-primary)] opacity-75">
					<div onClick={onPrevious} className="h-14 w-14 cursor-pointer">
						<ArrowRoundedIcon />
					</div>

					<div onClick={onNext} className="h-14 w-14 rotate-180 cursor-pointer">
						<ArrowRoundedIcon />
					</div>
				</div>
			)}
		</Modal>
	);
}
