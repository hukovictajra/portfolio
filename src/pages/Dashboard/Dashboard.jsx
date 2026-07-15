import { GoalSection } from "../../components/Goal/GoalSection";
import { BarSection } from "../../components/Bar/BarSection";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";
import { WireframingSection } from "../../components/Wireframing/WireframingSection";
import { UiElementsSection } from "../../components/UiElements/UiElementsSection";
import { ConclusionSection } from "../../components/Conclusion/ConclusionSection";
import { SingleImageLightbox, LightboxGallery } from "../../components/Lightbox";
import { FigmaEmbed } from "../../components/FigmaEmbed";

import "./Dashboard.css";

export function Dashboard() {
	return (
		<main>
			<ProjectHeader
				title="Dashboard"
				subtitle="A user-friendly dashboard designed with a light, neutral palette to balance functionality and visual appeal.
						It emphasizes readability, efficiency, and user engagement, featuring a clean layout and customizable
						interface."
				chips={[
					{ title: "Role", content: "UX/UI Designer" },
					{ title: "Employer", content: "Personal Project" },
					{ title: "Tools", content: "Figma, Canva, Photoshop" },
					{
						title: "Links",
						content: {
							label: "Figma",
							href: "https://embed.figma.com/design/La0xzvEr0vkbnAAJKgFAQ6/Dasboard--Community-?node-id=0-1&embed-host=share"
						}
					}
				]}
			/>

			<GoalSection src="/portfolio/images/projects/dashboard/showcase-transparent.png">
				Create a user-friendly dashboard that balances functionality with aesthetic appeal. Designed
				with a light, neutral color palette, it prioritizes readability, efficiency, and user
				engagement while offering a structured yet customizable layout.
			</GoalSection>

			<BarSection>
				<p>
					The concept focused on giving users full freedom over dashboard style, type, and function.
					Research included exploring existing dashboard patterns and prioritizing clarity and
					hierarchy, leading to a focus on neutral, readable tones for now, with plans for future
					color customization.
				</p>

				<div class="bar-dashboard-lists">
					<div class="bar-dashboard-left">
						<p>Primary users:</p>

						<ul>
							<li>Individuals and teams managing finances, stock, or company reports</li>
						</ul>
					</div>

					<div class="bar-dashboard-right">
						<p>Secondary users:</p>

						<ul>
							<li>Managers and stakeholders needing quick performance overview</li>
						</ul>
					</div>
				</div>
			</BarSection>

			<WireframingSection>
				<p>
					Started with wireframes to define the layout and core features. This phase helped
					establish the structure for widget placement and usability, forming the foundation for
					refining both functionality and visual design.
				</p>

				<div>
					I focused on:
					<ul>
						<li>Built basic wireframes to map out layout and features</li>
						<li>Focused on easy widget placement and navigation</li>
						<li>Made sure users could customize dashboards freely</li>
						<li>Kept usability and clear info flow as priorities</li>
					</ul>
				</div>
			</WireframingSection>

			<UiElementsSection
				typography={{
					fontName: "Inter",
					fontUrl: "https://fonts.google.com/specimen/Inter",
					fontClass: "inter"
				}}
				colors={["#EAEAEA", "#747374", "#5FA0BE", "#5CA65F", "#F5F5F5"]}
			>
				<p>
					The neutral color palette enhances readability and maintains a professional look while
					reducing visual strain. The structured layout ensures information is easy to locate , and
					minimalist typography and icons support the clean design. These choices align with the
					goal of showcasing functionality while setting a visual hierarchy.
				</p>
			</UiElementsSection>

			<section id="ui-elements-image" className="section">
				<LightboxGallery
					images={[
						"/portfolio/images/projects/dashboard/ui-elements/1dash.png",
						"/portfolio/images/projects/dashboard/ui-elements/2dash.png",
						"/portfolio/images/projects/dashboard/ui-elements/3dash.png",
						"/portfolio/images/projects/dashboard/ui-elements/4dash.png",
						"/portfolio/images/projects/dashboard/ui-elements/5dash.png",
						"/portfolio/images/projects/dashboard/ui-elements/6dash.png"
					]}
					className="cursor-breakpoint w-full"
				/>

				<section id="dashboard-figma-prototype" className="section">
					<FigmaEmbed
						url="https://embed.figma.com/design/La0xzvEr0vkbnAAJKgFAQ6/Dasboard--Community-?node-id=0-1&embed-host=share"
						title="Dashboard Figma Design"
					/>
				</section>
			</section>

			<ConclusionSection src>
				<p>
					This dashboard offers users tools to create highly personalized and functional workspaces.
					Its intuitive design and adaptable features make it valuable for tasks ranging from
					personal finance tracking to corporate reporting. Building projects like this is important
					to me because it sharpens my skills in creating practical, user-centered solutions that
					truly make a difference in everyday workflows.
				</p>
			</ConclusionSection>

			<section id="conclusion-image" className="section">
				<SingleImageLightbox
					src="/portfolio/images/projects/dashboard/final.png"
					alt="Final"
					className="cursor-breakpoint w-full"
				/>
			</section>
		</main>
	);
}
