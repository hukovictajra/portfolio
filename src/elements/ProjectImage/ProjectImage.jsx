import React, { useEffect } from "react";
import { Subtitle } from "../Subtitle/Subtitle";

import "./ProjectImage.scss";

export default function ProjectImage({ className, blog }) {
	useEffect(() => {
		const elements = [...document.querySelectorAll(".project-image-animated")];

		if (elements.length > 0) {
			const timeoutId = setTimeout(() => {
				elements.forEach((element) => {
					element.classList.remove("project-image-animated");
				});
			}, 1000);

			return () => clearTimeout(timeoutId);
		}
	}, []);

	return (
		<a className="project-image-container " href={`/blog/${blog.id}`}>
			<img
				src={require(`../../assets/${blog.image.replace("@", "")}`)}
				className={`${className} project-image-animated`}
			/>
			<div className="project-image-overlay">
				<h3 className="project-image-title">{blog.title}</h3>
				<Subtitle blog={blog} hideColors />
			</div>
		</a>
	);
}
