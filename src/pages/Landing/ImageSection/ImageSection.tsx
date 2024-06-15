import { blogs } from "@data/Blogs";
import { ProjectImage } from "@elements/ProjectImage/ProjectImage";

import "./ImageSection.scss";

export default function ImageSection() {
	return (
		<div className="image-section">
			<div className="image-wrapper">
				{blogs
					.filter((x) => x.showOnLanding)
					.sort((x) => x.position)
					.map((blog) => (
						<ProjectImage key={blog.id} blog={blog} />
					))}
			</div>
			{/* <ScrollIndicator /> */}
		</div>
	);
}
