import { SingleImageLightbox } from "../Lightbox";

import "./BarSection.css";

export function BarSection({ src, children }) {
	return (
		<section id="bar" className="section section-topbar">
			<div className="bar-content-container text-section ">
				<div className="bar-title section-title">Brainstorming & Research</div>
				<div className="bar-content section-content section-multi-content">{children}</div>
			</div>

			{src && <SingleImageLightbox src={src} alt="Brainstorming and Research" className="cursor-breakpoint" />}
		</section>
	);
}
