import "./FigmaEmbed.css";

export function FigmaEmbed({ url, title = "Figma Design" }) {
	return (
		<div className="figma-embed-container">
			<div className="figma-embed-wrapper">
				<iframe
					className="figma-embed-iframe"
					src={url}
					allowFullScreen
					title={title}
				/>
			</div>
		</div>
	);
}