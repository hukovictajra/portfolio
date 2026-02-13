import { LightboxGallery } from "../../components/Lightbox";
import { GoalSection } from "../../components/Goal/GoalSection";
import { BarSection } from "../../components/Bar/BarSection";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";
import { WireframingSection } from "../../components/Wireframing/WireframingSection";
import { UiElementsSection } from "../../components/UiElements/UiElementsSection";
import { ConclusionSection } from "../../components/Conclusion/ConclusionSection";
import { VideoPlayer } from "../../components/VideoPlayer";

import "./MontazaTehnike.css";

export function MontazaTehnike() {
	return (
		<main>
			<ProjectHeader
				title="Montaža Tehnike"
				subtitle="A sleek, two-tone website design that blends professionalism with modern visual appeal."
				chips={[
					{ title: "Role", content: "UX/UI Designer" },
					{ title: "Employer", content: "Encode" },
					{ title: "Tools", content: "Figma" },
				]}
			/>

			<GoalSection src="/portfolio/images/projects/montaza-tehnike/showcase-transparent.png">
				The website design for the installation technology company was created to visually reflect professionalism,
				technical precision, and modernity. The aim was to present a clean yet engaging interface that communicates
				trust and expertise while keeping the user experience clear and intuitive.
			</GoalSection>

			<BarSection>
				<p>
					The primary target group was new clients, as the company is already well known in its field. The purpose of
					the website was to modernize the brand's presence and fully digitalize its services. We explored visual
					approaches that could balance technical sophistication with a contemporary aesthetic.
				</p>

				<p>
					Research included analyzing competitor websites in the technology and installation industries, focusing on
					color usage, typography, and layout structures that conveyed authority while remaining user-friendly.
				</p>
			</BarSection>

			<WireframingSection>
				<p>
					The wireframe established a clean, modular structure with a clear visual hierarchy. It features a split hero
					section, alternating light and dark content blocks for contrast, and clearly defined service cards to showcase
					the company's expertise
				</p>

				<div>
					<span className="font-bold">Planned sections were:</span>
					<ul>
						<li>Partner logos placed prominently to reinforce credibility</li>
						<li>Key statistics displayed to quickly communicate expertise and scale</li>
						<li>Calls-to-action positioned for high visibility to encourage user interaction</li>
						<li>Team introduction section to humanize the brand and build trust</li>
						<li>Contact form for quick and direct communication with potential clients</li>
						<li>Responsive layout optimized for both desktop and mobile devices</li>
					</ul>
				</div>

				<p>
					An <span className="font-bold">important detail</span> is that the site is planned to be{" "}
					<span className="font-bold">multilingual</span>, so the design is carefully structured to adapt spacing and
					layout for varying text lengths across different languages.
				</p>
			</WireframingSection>

			<section id="wireframing-image" className="section">
				<LightboxGallery
					images={[
						"/portfolio/images/projects/montaza-tehnike/wireframe/wireframe-1.png",
						"/portfolio/images/projects/montaza-tehnike/wireframe/wireframe-2.png",
						"/portfolio/images/projects/montaza-tehnike/wireframe/wireframe-3.png",
						"/portfolio/images/projects/montaza-tehnike/wireframe/wireframe-4.png",
						"/portfolio/images/projects/montaza-tehnike/wireframe/wireframe-5.png",
						"/portfolio/images/projects/montaza-tehnike/wireframe/wireframe-6.png",
						"/portfolio/images/projects/montaza-tehnike/wireframe/wireframe-7.png",
					]}
					className="cursor-breakpoint w-full"
				/>
			</section>

			<UiElementsSection
				typography={{
					fontName: "Inter",
					fontUrl: "https://fonts.google.com/specimen/Inter",
					fontClass: "inter",
				}}
				colors={["#000A14", "#F8F9FA", "#E7E9EF", "#111111", "#FFFFFF"]}
			>
				<p>
					The final UI focused on contrast and simplicity, making the vibrant artwork and photos the main focus without
					any distractions.
				</p>
			</UiElementsSection>

			<section id="ui-elements-image" className="section">
				<LightboxGallery
					images={[
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-1.png",
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-2.png",
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-3.png",
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-4.png",
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-5.png",
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-6.png",
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-7.png",
						"/portfolio/images/projects/montaza-tehnike/ui-elements/ui-elements-8.png",
					]}
					className="cursor-breakpoint w-full"
				/>
			</section>

			<ConclusionSection>
				<p>
					The final design is clear, elegant, and visually appealing. It uses a clean color scheme, easy-to-read fonts,
					balanced layouts, and gentle animations. This helps the website show the brand's professionalism and technical
					skill while giving users a modern and engaging experience.
				</p>
			</ConclusionSection>

			<section id="demo-video" className="section">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<VideoPlayer
						src="/portfolio/images/projects/montaza-tehnike/demo.mov"
						style={{
							maxWidth: "min(1000px, 90vw)",
							maxHeight: "min(562px, 50vh)",
							width: "100%",
							height: "auto",
						}}
					/>
				</div>
			</section>
		</main>
	);
}
