import { Blog } from "@data/models";
import { useNavigate } from "react-router-dom";
import { Subtitles } from "../Subtitle/Subtitle";
import { useStyleResizeHandler } from "@utils/hooks";
import { CSSProperties, useRef, useState } from "react";

import "./ProjectImage.scss";

export interface ProjectImageProps {
	blog: Blog;
	className?: string;
}

export function ProjectImage({ blog, className }: ProjectImageProps) {
	const projectImage = useRef(null);
	const projectImageOverlay = useRef(null);
	const [isFocused, setIsFocuses] = useState(false);

	let url: string = typeof blog.image === "object" ? blog.image.url : blog.image;
	let style: CSSProperties = useStyleResizeHandler(typeof blog.image === "object" ? blog.image.style : {});

	const navigate = useNavigate();

	function isTouchDevice() {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
	}

	function goToBlog() {
		navigate(`/blog/${blog.id}`);
	}

	const onClickHandler = () => {
		if (isTouchDevice()) {
			if (isFocused) {
				goToBlog();
				setIsFocuses(false);
			} else {
				setIsFocuses(true);
			}
		} else {
			goToBlog();
		}
	};

	console.log(blog);

	return (
		<div className="project-image-container" onClick={onClickHandler} ref={projectImage}>
			<img
				src={require(`../../assets/${url.replace("@", "")}`)}
				alt={blog.title}
				style={style}
				className={`${className} project-image-animated`}
			/>
			<div className="project-image-overlay" ref={projectImageOverlay}>
				<h3 className="project-image-title">{blog.title}</h3>
				<Subtitles subtitles={blog.subtitles} colors={blog.colors} overview onPrimary />
			</div>
		</div>
	);
}
