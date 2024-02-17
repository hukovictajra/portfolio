import { VideoPlayerSection } from "@elements/VideoPlayer/VideoPlayerSection";
import { BlogImageSection } from "@elements/ImageSection/ImageSection";

import "./BlogSection.scss";

export function BlogSection({ title, text, list, style, image, type, video }) {
	return (
		<div className="blog-section" style={style || {}}>
			{title && <h3 className="blog-section-title">{title}</h3>}
			{typeof text === "string" ? (
				<p className="blog-section-text">{text}</p>
			) : (
				typeof text === "object" && (
					<p className="blog-section-text" style={text.style}>
						{text.content}
					</p>
				)
			)}
			{type === "list" && (
				<ul className="blog-section-list">
					{list.map((item, i) => (
						<li key={i} className="blog-section-list-item">
							{item}
						</li>
					))}
				</ul>
			)}

			{image && <BlogImageSection image={image} />}

			{video && <VideoPlayerSection video={video} />}
		</div>
	);
}
