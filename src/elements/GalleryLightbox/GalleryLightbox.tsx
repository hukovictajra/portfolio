import { CSSStyle } from "@data/models";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import { Download, Zoom } from "yet-another-react-lightbox/plugins";

import "./GalleryLightbox.scss";

export interface CarouselLightboxProps {
	isOpen: boolean;
	onModalClose: () => any;
	className?: string;
	slides: Slide[];
	style?: CSSStyle;
}

export default function GalleryLightbox({ isOpen, onModalClose, slides }: CarouselLightboxProps) {
	return (
		<Lightbox
			open={isOpen}
			className="gallery-lightbox"
			plugins={[Download, Zoom]}
			slides={slides}
			close={onModalClose}
		/>
	);
}
