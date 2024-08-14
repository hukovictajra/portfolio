import classnames from "classnames";
import { getImageURL } from "@utils/utils";
import { ImageSource, CSSStyle } from "@data/models";
import { useStyleResizeHandler } from "@utils/hooks";
import { CSSProperties, Fragment, useState } from "react";

import "./Image.scss";
import ImageModal from "@elements/ImageModal/ImageModal";

export interface SingleImageProps {
	source: ImageSource | string;
	style?: CSSStyle;
	caption?: string;
	className?: string;
	containerStyle?: CSSStyle;
	containerClassName?: string;
	modalStyle?: CSSStyle;
	modalClassName?: string;
}

export function Image({
	source,
	style,
	caption,
	className,
	containerStyle,
	containerClassName,
	modalStyle,
	modalClassName
}: SingleImageProps) {
	const processedContainerStyle: CSSProperties | undefined = useStyleResizeHandler(containerStyle!);

	let imageUrl: URL;
	let imageCaption: string | undefined = caption;
	let imageStyle: CSSStyle | undefined = style;
	let imageClassName: string | undefined = className;

	if (typeof source === "object") {
		imageUrl = getImageURL(source.url);
		imageCaption = source.caption;
		imageStyle = useStyleResizeHandler(source.style!);
		imageClassName = source.className;
	} else {
		imageUrl = getImageURL(source);
	}

	const [isOpen, setOpen] = useState(false);

	const onModalOpen = () => setOpen(true);
	const onModalClose = () => setOpen(false);

	return (
		<Fragment>
			<div
				className={classnames("blog-image-container", containerClassName)}
				style={processedContainerStyle}
				onClick={onModalOpen}
			>
				<img
					src={imageUrl.href}
					alt={imageUrl.pathname}
					className={classnames("blog-image", imageClassName)}
					style={imageStyle}
				/>

				{imageCaption && <span className="text-lg tracking-wide font-medium">{imageCaption}</span>}
			</div>

			<ImageModal
				isOpen={isOpen}
				onModalClose={onModalClose}
				className={modalClassName}
				style={modalStyle}
				image={source}
			/>
		</Fragment>
	);
}
