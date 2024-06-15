import { blogs } from "@data/Blogs";
import { ProjectImage } from "@elements/ProjectImage/ProjectImage";

import "./ImageSection.scss";

export default function ImageSection({ scrollRef }: any) {
	return (
		<div id="image-section" ref={scrollRef}>
			{blogs
				.filter((x) => x.showOnLanding)
				.sort((x) => x.position)
				.map((blog) => (
					<ProjectImage key={blog.id} blog={blog} />
				))}
		</div>
	);
}
