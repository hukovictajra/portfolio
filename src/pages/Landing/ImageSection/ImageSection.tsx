import { blogs } from "@data/Blogs";
import { useEffect, useState } from "react";
import { ProjectImage } from "@elements/ProjectImage/ProjectImage";

import "./ImageSection.scss";

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
		.filter((x) => x.data.showOnLanding)
		.map((blog) => <ProjectImage key={blog.data.id} blog={blog.data} />);

	return (
		<div id="image-section" ref={scrollRef}>
			{content}
		</div>
	);
}
