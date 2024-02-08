import React from "react";
import blogs from "@data/blogs";
import ProjectImage from "@elements/ProjectImage/ProjectImage";

import "./ImageSection.scss";

export default function ImageSection() {
	return (
		<div className="image-section">
			<div className="image-wrapper">
				{blogs
					.filter((x) => x.showOnLanding)
					.map((blog) => (
						<ProjectImage key={blog.id} blog={blog} />
					))}
			</div>
			{/* <ScrollIndicator /> */}
		</div>
	);
}
