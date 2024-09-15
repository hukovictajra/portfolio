import { CSSProperties } from "react";
import { getImageURL } from "@utils/utils";
import Lightbox from "yet-another-react-lightbox";
import { CSSStyle, ImageSource } from "@data/models";
import { useStyleResizeHandler } from "@utils/hooks";
import { Download, Zoom } from "yet-another-react-lightbox/plugins";

import "./ImageLightbox.scss";

export interface ImageModalProps {
	isOpen: boolean;
	onModalClose: () => any;
	className?: string;
	style?: CSSStyle;
	image: ImageSource | string;
	onNext?: () => any;
	onPrevious?: () => any;
}

export default function ImageLightbox({ isOpen, onModalClose, image }: ImageModalProps) {
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
		<Lightbox
			open={isOpen}
			className="image-lightbox"
			plugins={[Download, Zoom]}
			slides={[
				{
					src: imageUrl.href
				}
			]}
			close={onModalClose}
			carousel={{ finite: true }}
			render={{
				iconPrev: undefined,
				iconNext: undefined,
				buttonPrev: undefined,
				buttonNext: undefined
			}}
		/>
	);
}
