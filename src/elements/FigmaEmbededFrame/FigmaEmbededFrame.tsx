import { useEffect, useState } from "react";
import { cn } from "@elements/shadcn/lib/utils";

export interface FigmaEmbededFrameProps {
	src: string;
	className?: string;
	bgColor?: string;
}

export default function FigmaEmbededFrame({ src, className }: FigmaEmbededFrameProps) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<iframe
			style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
			allow="autoplay"
			height={windowWidth >= 768 ? "700" : windowWidth >= 425 ? "500" : "450"}
			className={cn("w-full", className)}
			src={src}
			allowFullScreen
		></iframe>
	);
}
