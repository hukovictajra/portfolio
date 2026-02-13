import { BarSection } from "../../components/Bar/BarSection";
import { ConclusionSection } from "../../components/Conclusion/ConclusionSection";
import { GoalSection } from "../../components/Goal/GoalSection";
import { SingleImageLightbox } from "../../components/Lightbox";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

import "./MelodicMix.css";

export function MelodicMix() {
	return (
		<main id="melodic-mix">
			<ProjectHeader
				title="Melodic Mix"
				subtitle="Created a custom pop art-style print for a tote bag and hoodie, featuring different artists. Merged vibrant
						imagery with iconic lyrics, resulting in a bold, personalized design that captured the client's passion for
						their favorite artists."
				chips={[
					{ title: "Role", content: "Graphic Designer" },
					{ title: "Employer", content: "Freelance" },
					{ title: "Tools", content: "Photoshop, Adobe Illustrator" },
				]}
			/>

			<GoalSection src="/portfolio/images/projects/melodic-mix/showcase-transparent.png">
				Designed a custom pop art-style print for a tote bag and hoodie, combining vibrant imagery with iconic lyrics to
				reflect the client's love for their favorite artists. The concept aimed to represent four artists equally while
				maximizing visual impact through a large-scale composition, intentionally sized for placement as a bold back
				print.
			</GoalSection>

			<BarSection>
				<p>Collaborating closely helped ensure the final design felt both meaningful and personal to the client.</p>

				<ul>
					<li>
						Held a collaborative session with the client to understand their vision and emotional connection to the
						artists
					</li>
					<li>Discussed layout ideas, artistic direction, and favorite lyrics</li>
					<li>Sketched out concepts to align on the overall tone and aesthetic before diving into production</li>
				</ul>
			</BarSection>

			<ConclusionSection>
				<p>
					The final design successfully personalized the client's love for their favorite musicians in a bold, energetic
					way.
				</p>
			</ConclusionSection>

			<section className="section section-topbar">
				<h1 className="section-title mb-4 md:mb-8">Final Product</h1>
				<SingleImageLightbox
					src="/portfolio/images/projects/melodic-mix/final-product.png"
					alt="Brainstorming and Research"
					className="cursor-breakpoint w-full "
				/>
			</section>
		</main>
	);
}
