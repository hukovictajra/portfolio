import { SingleImageLightbox } from "../Lightbox";

import "./WireframingSection.css";

export function WireframingSection({ src, children }) {
	return (
		<section id="wireframing" className="section section-topbar">
			<div className="wireframing-content-container text-section">
				<div className="wireframing-title section-title">Wireframing</div>
				<div className="wireframing-content section-content section-multi-content">{children}</div>
			</div>

			{src && <SingleImageLightbox src={src} alt="Wireframing Process" className="cursor-breakpoint w-full" />}
		</section>
	);
}
