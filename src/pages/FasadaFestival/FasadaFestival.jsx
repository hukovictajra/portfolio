import { useEffect } from "preact/hooks";
import { SingleImageLightbox } from "../../components/Lightbox";
import { GoalSection } from "../../components/Goal/GoalSection";
import { BarSection } from "../../components/Bar/BarSection";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";
import { WireframingSection } from "../../components/Wireframing/WireframingSection";

import "./FasadaFestival.css";
import { UiElementsSection } from "../../components/UiElements/UiElementsSection";
import { ConclusionSection } from "../../components/Conclusion/ConclusionSection";
import { ChallengesSection } from "../../components/Challenges/ChallengesSection";

export function FasadaFestival() {
	useEffect(() => {
		document.querySelectorAll(".ui-elements-color-sample").forEach((element) => {
			element.classList.add("cursor-breakpoint");
		});
	}, []);

	return (
		<main id="fasada-festival">
			<ProjectHeader
				title="Fasada Festival"
				subtitle="As part of my internship at Ecnode, I had the opportunity to design the official website for Fasada Festival,
					celebrating its 5th anniversary."
				chips={[
					{ title: "Role", content: "UX/UI Designer" },
					{ title: "Employer", content: "Encode" },
					{ title: "Tools", content: "Figma" },
				]}
			/>

			<GoalSection src="/portfolio/images/projects/fasada-festival/showcase-transparent.png">
				Create something bold, expressive, and true to the spirit of this street art movement. It had to be easy to
				navigate, visually lasting, and engaging for a creative audience, both locally and internationally.
			</GoalSection>

			<BarSection src="/portfolio/images/projects/fasada-festival/bar.png">
				<p>
					FASADA is more than just a festival it is a{" "}
					<span className="font-bold">community-driven celebration of street art and activism</span>. That energy had to
					come through in the site's tone and structure.
				</p>

				<div className="bar-fasada-lists">
					<div className="bar-fasada-left">
						<p>Started with a collaborative session and moodboard to set the visual tone. My main goals were:</p>

						<ul>
							<li>Clear, intuitive navigation</li>
							<li>A bold, memorable look</li>
							<li>A layout that lets the art and energy shine</li>
						</ul>
					</div>

					<div className="bar-fasada-right">
						<p>
							We also defined our <span className="bold">primary user</span> groups:
						</p>

						<ul>
							<li>Locals interested in events</li>
							<li>Tourists seeking cultural experiences</li>
							<li>Artists/Volunteers wanting to participate</li>
						</ul>
					</div>
				</div>
			</BarSection>

			<WireframingSection src="/portfolio/images/projects/fasada-festival/wireframing.png">
				<p>
					A few graffiti visuals from early research really stuck with me. They felt full of motion and emotion. That
					became the guiding force of our wireframes.
				</p>

				<div>
					I focused on:
					<ul>
						<li>Visual storytelling through full-width imagery</li>
						<li>A clear hierarchy for event info, program, and artist features</li>
						<li>ensures the festival website can grow seamlessly in future editions</li>
					</ul>
				</div>

				<p>
					We held mid-phase reviews with the Fasada team to fine-tune structure and UX flow before moving to
					high-fidelity visuals.
				</p>
			</WireframingSection>

			<UiElementsSection
				typography={{
					fontName: "Montserrat",
					fontUrl: "https://fonts.google.com/specimen/Montserrat",
					fontClass: "montserrat",
				}}
				colors={["#1D1D1D", "#D9D9D9", "#6EADC6", "#572245", "#FFFFFF"]}
			>
				<p>
					The final UI focused on contrast and simplicity, making the vibrant artwork and photos the main focus without
					any distractions.
				</p>
			</UiElementsSection>

			<section className="section flex just flex-col gap-8">
				<div className="flex w-full justify-between gap-8 flex-col lg:flex-row">
					<SingleImageLightbox
						src="/portfolio/images/projects/fasada-festival/ui-elements-hero.gif"
						alt="UI Elements Animation"
						className="cursor-breakpoint w-[50%] max-h-[400px]"
					/>

					<SingleImageLightbox
						src="/portfolio/images/projects/fasada-festival/ui-elements-card.gif"
						alt="UI Elements Animation"
						className="cursor-breakpoint w-[50%] max-h-[400px]"
					/>
				</div>

				<SingleImageLightbox
					src="/portfolio/images/projects/fasada-festival/ui-elements.png"
					alt="UI Elements Design"
					className="cursor-breakpoint w-full"
				/>
			</section>

			<ChallengesSection title="Challenge: Midway Pivot">
				<div>
					<p>Midway through, the client requested a change to the sitemap. This meant:</p>

					<ul>
						<li>Cutting previously planned sections</li>
						<li>Reworking the site's overall flow</li>
						<li>Adapting nearly-finished designs</li>
					</ul>
				</div>

				<p>
					As a designer, it was frustrating. But thanks to clear teamwork and flexibility, we pivoted and came out
					stronger. The final structure was cleaner, more focused, and more aligned with the updated vision.
				</p>
			</ChallengesSection>

			<ConclusionSection>
				<div className="flex flex-col gap-4">
					<p>
						Designing the Fasada Festival website was a powerful mix of creative freedom and problem-solving. I got to
						support a local movement while exploring bold, expressive UI.
					</p>

					<div>
						<p>What I learned:</p>

						<ul>
							<li>How to translate raw artistic energy into a visual system</li>
							<li>How to adapt under pressure when client needs evolve</li>
							<li>How to balance personality with functionality in a responsive design</li>
						</ul>
					</div>
				</div>
			</ConclusionSection>
		</main>
	);
}
