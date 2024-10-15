import { Blog } from "@data/models";
import { getImageURL, getTitle } from "@utils/utils";
import { CSSProperties, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStyleResizeHandler } from "@utils/hooks";

import "./ProjectImage.scss";
import { cn } from "@elements/shadcn/lib/utils";

export interface ProjectImageProps {
	blog: Blog;
	className?: string;
}

export function ProjectImage({ blog, className }: ProjectImageProps) {
	const projectImage = useRef(null);
	const projectImageOverlay = useRef(null);

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

	let title: string = getTitle(blog.title);
	let subtitle: string | null = typeof blog.title === "object" ? blog.title.subtitle : null;

	return (
		<div className="project-image-container" onClick={onClickHandler} ref={projectImage}>
			<img
				src={getImageURL(url).href}
				alt={title}
				style={processedStyle}
				className={cn(`project-image-animated rounded-2xl`, className)}
			/>
			<div className="project-image-overlay rounded-2xl" ref={projectImageOverlay}>
				<h3 className="project-image-title">{title}</h3>
				{subtitle && <h4 className="project-image-subtitle">{subtitle}</h4>}

				{blog.rawTags && (
					<div className="flex flex-wrap gap-4 justify-between">
						{blog.rawTags.map((tag, i) => (
							<div
								className="inline-flex items-center px-4 py-2 border border-white text-white rounded-full"
								key={i}
							>
								{tag}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
