import { SingleImageLightbox } from "../../components/Lightbox";

import "./GoalSection.css";

export function GoalSection({ src, children, imageClasses, className }) {
	return (
		<section id="goal" className={`section section-topbar ${className || ''}`}>
			<div className="goal-image">
				<SingleImageLightbox
					src={src}
					alt="Brainstorming and Research"
					className={`cursor-breakpoint w-full ${imageClasses || ''}`}
				/>
			</div>

			<div className="goal-content-container">
				<div className="goal-title section-title">The goal?</div>
				<div className="goal-content section-content">{children}</div>
			</div>
		</section>
	);
}
