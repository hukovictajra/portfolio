export function VideoPlayer({
	src,
	poster,
	className = "",
	width = "100%",
	height = "auto",
	autoplay = false,
	muted = false,
	loop = false,
	controls = true,
	preload = "metadata",
	...props
}) {
	return (
		<video
			src={src}
			poster={poster}
			width={width}
			height={height}
			autoplay={autoplay}
			muted={muted}
			loop={loop}
			controls={controls}
			preload={preload}
			className={className}
			style={{
				width: "100%",
				height: "auto",
				maxWidth: "100%",
				display: "block",
			}}
			{...props}
		>
			Your browser does not support the video tag.
		</video>
	);
}

// Gallery video player for multiple videos
export function VideoGallery({ videos, className = "", containerClassName = "" }) {
	return (
		<div className={containerClassName} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			{videos.map((video, index) => {
				const src = typeof video === "string" ? video : video.src;
				const poster = typeof video === "string" ? undefined : video.poster;
				const title = typeof video === "string" ? `Video ${index + 1}` : video.title;

				return (
					<div key={index}>
						{title && <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.25rem", fontWeight: "600" }}>{title}</h3>}
						<VideoPlayer src={src} poster={poster} className={className} controls={true} />
					</div>
				);
			})}
		</div>
	);
}

// Simple video player wrapper
export function SimpleVideoPlayer({ src, poster, className = "", ...props }) {
	return <VideoPlayer src={src} poster={poster} className={className} controls={true} {...props} />;
}
