import { blogs } from "@data/Blogs";

import "./MoreProjects.scss";

export function MoreProjects({ currentBlog }) {
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
								src={require(`../../assets/${(typeof blog.image === "object" ? blog.image.url : blog.image).replace(
									"@",
									""
								)}`)}
							/>
							<span className="more-projects-caption">{blog.title}</span>
						</a>
					))}
			</div>
		</div>
	);
}
