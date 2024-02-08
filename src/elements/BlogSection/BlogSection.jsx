import React from "react";

import "./BlogSection.scss";

export default function BlogSection({ type, title, text, image, list }) {
	return (
		<div className="blog-section">
			{title && <h3 className="blog-section-title">{title}</h3>}
			{text && <p className="blog-section-text">{text}</p>}
			{image && <img className="blog-section-image" src={require(`../../assets/${image.replace("@", "")}`)} />}
			{type === "list" && (
				<ul className="blog-section-list">
					{list.map((item) => (
						<li className="blog-section-list-item">{item}</li>
					))}
				</ul>
			)}
		</div>
	);
}
