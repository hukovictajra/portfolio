import classnames from "classnames";
import { CSSProperties } from "react";
import { CSSStyle, ImageSource } from "@data/models";
import Modal from "react-responsive-modal";
import { useStyleResizeHandler } from "@utils/hooks";
import { getImageURL } from "@utils/utils";

export interface ImageModalProps {
	isOpen: boolean;
	onModalClose: () => any;
	className?: string;
	style?: CSSStyle;
	image: ImageSource | string;
}

export default function ImageModal({
	isOpen,
	onModalClose,
	className,
	style,
	image
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

	return (
		<Modal
			open={isOpen}
			onClose={onModalClose}
			center
			closeIcon={<span></span>}
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
