import { ReactNode } from "react";
import { BlogSection } from "@data/models";
import { BlogImageSection } from "@elements/ImageSection/ImageSection";
import { VideoPlayerSection } from "@elements/VideoPlayer/VideoPlayerSection";

import "./GenericBlogSection.scss";

export interface GenericBlogSectionProps {
	className?: string;
	section: BlogSection;
	children: ReactNode;
}

export function GenericBlogSection({ className, section, children }: GenericBlogSectionProps) {
	const { title, style, image, video } = section;

	return (
		<div className={`blog-section flex flex-col mb-8 ${className}`} style={style || {}}>
			{title && <h3 className="font-semibold  mb-2 sm:text-center">{title}</h3>}

			{children}

			{image && <BlogImageSection image={image} />}

			{video && <VideoPlayerSection video={video} />}
		</div>
	);
}
