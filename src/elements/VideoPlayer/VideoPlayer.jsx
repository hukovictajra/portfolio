import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import "./VideoPlayer.scss";
import { getStyles } from "@utils/utils";

export function VideoPlayerSection({ video }) {
	const [styles, setStyles] = useState(video.containerStyle ? getStyles(video.containerStyle) : []);

	useEffect(() => {
		const handleResize = () => {
			if (video.containerStyle) {
				console.log(getStyles(video.containerStyle));
				setStyles(getStyles(video.containerStyle));
			}
		};

		// console.log(getStyles(video.containerStyle, document.documentElement.clientWidth));
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [document.documentElement.clientWidth]);

	const VideoPlayer = (src) => {
		let title = null;
		let source = src;
		let videoStyles = video.videoStyle ? getStyles(video.videoStyle) : {};

		if (typeof src === "object") {
			source = src.src;
			title = src.title || null;
			videoStyles = src.style || videoStyles;
		}

		return (
			<div className="blog-video-player-container" style={videoStyles}>
				<ReactPlayer
					style={videoStyles}
					className="blog-video-player"
					width="100%"
					height="100%"
					volume={0}
					muted={true}
					controls
					url={require(`../../assets/${source.replace("@", "")}`)}
				/>
				{title && <span className="blog-image-caption">{title}</span>}
			</div>
		);
	};

	return (
		<div style={styles}>
			{Array.isArray(video.src) ? (
				<div style={styles}>
					{video.src.map((src, i) => (
						<VideoPlayer key={i} src={src.src} />
					))}
				</div>
			) : (
				<VideoPlayer src={video.src} />
			)}
		</div>
	);
}
