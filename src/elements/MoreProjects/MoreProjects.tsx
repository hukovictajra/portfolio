import { blogs } from "@data/Blogs";
import { Blog } from "@data/models";
import { getImageURL } from "@utils/utils";

import "./MoreProjects.scss";

export interface MoreProjectsProps {
	currentBlog: Blog;
}

export function MoreProjects({ currentBlog }: MoreProjectsProps) {
	if (!currentBlog) {
		return;
	}

	return (
		<div className="more-projects-section">
			<h1>More Projects</h1>
			<div className="more-projects-wrapper">
				{blogs
					.filter((x) => x.id !== currentBlog.id)
					.sort(() => Math.random() - 0.5)
					.slice(0, 3)
					.map((blog, i) => (
						<a key={i} className="more-projects-card" href={`#/blog/${blog.id}`}>
							<div className="more-projects-card-overlay">Click to view</div>
							<img
								src={getImageURL(typeof blog.image === "object" ? blog.image.url : blog.image).href}
							/>
							<span className="more-projects-caption">{blog.title}</span>
						</a>
					))}
			</div>
		</div>
	);
}
