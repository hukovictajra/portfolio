import { blogs } from "@data/Blogs";
import { ProjectImage } from "@elements/ProjectImage/ProjectImage";

import "./ImageSection.scss";
import { useEffect, useState } from "react";

export default function ImageSection({ scrollRef }: any) {
	const [isMobile, setIsMobile] = useState(document.documentElement.clientWidth <= 576);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(document.documentElement.clientWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const content = blogs
		.filter((x) => x.showOnLanding)
		.sort((x) => x.position)
		.map((blog) => <ProjectImage key={blog.id} blog={blog} />);

	return isMobile ? (
		content
	) : (
		<div id="image-section" ref={scrollRef}>
			{content}
		</div>
	);
}
