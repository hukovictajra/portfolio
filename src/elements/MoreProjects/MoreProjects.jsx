import React from "react";

import blogs from "@data/blogs.json";

import "./MoreProjects.scss";

export function MoreProjects() {
	return (
		<div className="more-projects-section">
			<h1>More Projects</h1>
			<div className="more-projects-wrapper">
				{blogs
					.sort(() => Math.random() - 0.5)
					.slice(0, 3)
					.map((blog, i) => (
						<div key={i} className="more-projects-card">
							<img src={require(`../../assets/${blog.image.replace("@", "")}`)} />
							<p>{blog.title}</p>
						</div>
					))}
			</div>
		</div>
	);
}
