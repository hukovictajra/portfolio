import { FullscreenOpenIcon, FullscreenCloseIcon } from "@assets/icons";

export const FullscreenButton = (
	onClick: React.MouseEventHandler<HTMLElement>,
	isFullscreen: boolean,
	setFullScreen: (isFullscreen: boolean) => void
): React.ReactNode => {
	return (
		<button
			type="button"
			className={"image-gallery-icon image-gallery-fullscreen-button"}
			onClick={(e) => {
				onClick(e);
				setFullScreen(!isFullscreen);
			}}
			aria-label="Open Fullscreen"
		>
			{isFullscreen ? <FullscreenCloseIcon /> : <FullscreenOpenIcon />}
		</button>
	);
};
