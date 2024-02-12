import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Subtitle } from "../Subtitle/Subtitle";

import "./ProjectImage.scss";

export function ProjectImage({ className, blog }) {
	const projectImage = useRef(null);
	const projectImageOverlay = useRef(null);
	const [isFocused, setIsFocuses] = useState(false);

	const navigate = useNavigate();

	function isTouchDevice() {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
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

	return (
		<a className="project-image-container " onClick={onClickHandler} ref={projectImage}>
			<img
				src={require(`../../assets/${blog.image.src.replace("@", "")}`)}
				style={blog.image.style}
				className={`${className} project-image-animated`}
			/>
			<div className="project-image-overlay" ref={projectImageOverlay}>
				<h3 className="project-image-title">{blog.title}</h3>
				<Subtitle blog={blog} subtitles={blog.subtitles} blogColors={blog.colors} overview onPrimary />
			</div>
		</a>
	);
}
