import { Blog } from "@data/models";
import { useNavigate } from "react-router-dom";
import { Overview } from "../Overview/Overview";
import { useStyleResizeHandler } from "@utils/hooks";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { getImageURL } from "@utils/utils";

import "./ProjectImage.scss";

export interface ProjectImageProps {
	blog: Blog;
	className?: string;
}

export function ProjectImage({ blog, className }: ProjectImageProps) {
	const projectImage = useRef(null);
	const projectImageOverlay = useRef(null);
	const [isFocused, setIsFocuses] = useState(false);

	const url: string = typeof blog.image === "object" ? blog.image.url : blog.image;

	let processedStyle: CSSProperties = {};

	if (typeof blog.image === "object" && blog.image.style) {
		processedStyle = useStyleResizeHandler(blog.image.style);
	}

	const navigate = useNavigate();

	function isTouchDevice() {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
	}

	function goToBlog() {
		navigate(`/blog/${blog.id}`);
	}

	const onClickHandler = () => {
		if (isTouchDevice()) {
			goToBlog();
		} else {
			goToBlog();
		}
	};

	const [isSubtitleDisplayed, setSubtitleDisplayed] = useState(
		document.documentElement.clientWidth > 1024
	);

	useEffect(() => {
		const handleResize = () => {
			setSubtitleDisplayed(document.documentElement.clientWidth > 1024);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="project-image-container" onClick={onClickHandler} ref={projectImage}>
			<img
				src={getImageURL(url).href}
				alt={blog.title}
				style={processedStyle}
				className={`${className} project-image-animated`}
			/>
			<div className="project-image-overlay" ref={projectImageOverlay}>
				<h3 className="project-image-title">{blog.title}</h3>
			</div>
		</div>
	);
}
