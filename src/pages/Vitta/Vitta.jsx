import { useEffect } from "preact/hooks";
import { SingleImageLightbox } from "../../components/Lightbox";
import { GoalSection } from "../../components/Goal/GoalSection";
import { BarSection } from "../../components/Bar/BarSection";
import { LightboxGallery } from "../../components/Lightbox";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";
import { WireframingSection } from "../../components/Wireframing/WireframingSection";
import { UiElementsSection } from "../../components/UiElements/UiElementsSection";
import { ConclusionSection } from "../../components/Conclusion/ConclusionSection";
import { ChallengesSection } from "../../components/Challenges/ChallengesSection";
import { DescriptionSection } from "../../components/Description/DescriptionSection";
import { VideoPlayer } from "../../components/VideoPlayer";

import "./Vitta.css";

export function Vitta() {
	useEffect(() => {
		document.querySelectorAll(".ui-elements-color-sample").forEach((element) => {
			element.classList.add("cursor-breakpoint");
		});
	}, []);

	return (
		<main id="vitta">
			<ProjectHeader
				title="vitta."
				subtitle="Vitta is a simple diet tracking and fasting app designed to combine multiple functions in one place. Inspired by the challenge of using multiple apps to track fasting, diet, and recipes, Vitta focuses on simplicity and ease of use. With a clean interface, soft color palette, and intuitive navigation, users can access key features in just two clicks, making tracking their diet effortless and stress free."
				chips={[
					{ title: "Role", content: "UX/UI Designer" },
					{ title: "Employer", content: "Personal Project" },
					{ title: "Tools", content: "Figma" },
				]}
			/>

			<GoalSection src="/portfolio/images/projects/vitta/showcase-transparent.png">
				<p>The goal of this project was to create a simple diet tracking and fasting app.</p>
			</GoalSection>

			<DescriptionSection>
				<div className="flex flex-col gap-4">
					<p>
						This is a passion project inspired by my dad, whose diet combines fasting and restricted foods. I noticed
						that he was using multiple apps to track his progress: one for fasting, another to scan foods and check if
						they were keto friendly, and his calendar to log recipes. While he did not seem to mind switching between
						apps, I saw the opportunity to bring all of these functions together in one place.
					</p>

					<p>
						The idea itself is not entirely new, but I wanted to approach it in my own way by focusing on simplicity and
						accessibility.
					</p>
				</div>
			</DescriptionSection>

			<BarSection>
				<p>
					From the start, I knew I wanted the app to be designed for people who actively follow diets, but I also kept
					in mind that many users might be older and less comfortable with technology.
				</p>

				<p>
					In conversations with people who use similar apps, I learned that one common frustration was how performative
					these apps felt. They were filled with blogs, ads, and other extras that distracted from the core purpose.
					Many people also mentioned that it often took too long to access the main features.
				</p>

				<p>
					Because of this, my goal was to keep the design as minimal as possible. The idea was simple: with just two
					clicks, users should access the main feature they came for. The first click would open the app and the second
					would take them directly to the function.
				</p>
			</BarSection>

			<section id="bar-image" className="section">
				<LightboxGallery
					images={[
						"/portfolio/images/projects/vitta/bar/bar-1.png",
						"/portfolio/images/projects/vitta/bar/bar-2.png",
						"/portfolio/images/projects/vitta/bar/bar-3.png",
						"/portfolio/images/projects/vitta/bar/bar-4.png",
					]}
					className="cursor-breakpoint w-full"
				/>
			</section>

			<WireframingSection>
				<p>
					When wireframing, I started by listing all the screens I thought I would need: main screen, login, register,
					and individual feature pages.
				</p>

				<p>
					Through this process, I realized that not every screen was necessary. To keep things streamlined, I decided to
					focus only on the main screen and not build unnecessary variations at this stage.
				</p>
			</WireframingSection>

			<section id="wireframing-image" className="section">
				<LightboxGallery
					images={[
						"/portfolio/images/projects/vitta/wireframe/wireframe-1.png",
						"/portfolio/images/projects/vitta/wireframe/wireframe-2.png",
						"/portfolio/images/projects/vitta/wireframe/wireframe-3.png",
						"/portfolio/images/projects/vitta/wireframe/wireframe-4.png",
						"/portfolio/images/projects/vitta/wireframe/wireframe-5.png",
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
				colors={["#FFFFFF", "#020202", "#5DADE2", "#7DCFB6", "#F6D365", "#FF9B85"]}
			>
				<p>
					The visual identity of the app was shaped by its name, Vitta, which means life in Italian. Combined with the
					Pacifico font, it gave the design a light, approachable, and easy going feel.
				</p>

				<p>
					I selected a clean UI style with a soft and bright color palette to reinforce this sense of simplicity and
					calmness.
				</p>
			</UiElementsSection>

			<section id="wireframing-image" className="section">
				<LightboxGallery
					images={[
						"/portfolio/images/projects/vitta/ui-elements/ui-1.png",
						"/portfolio/images/projects/vitta/ui-elements/ui-2.png",
						"/portfolio/images/projects/vitta/ui-elements/ui-3.png",
						"/portfolio/images/projects/vitta/ui-elements/ui-4.png",
						"/portfolio/images/projects/vitta/ui-elements/ui-5.png",
						"/portfolio/images/projects/vitta/ui-elements/ui-6.png",
						"/portfolio/images/projects/vitta/ui-elements/ui-7.png",
					]}
					className="cursor-breakpoint w-full"
				/>
			</section>

			<ChallengesSection title="Challenges">
				<p>
					One of the biggest challenges I faced was resisting the urge to complicate the app with extra features. It was
					tempting to keep adding new ideas, but I reminded myself that the strength of this project lies in its
					simplicity. Another challenge was choosing the right colors and icons. Since I wanted to keep the UI minimal,
					I found myself reworking the design several times until I achieved a balance that felt right.
				</p>
			</ChallengesSection>

			<ConclusionSection>
				<div className="flex flex-col gap-4">
					<p>
						I see potential in this project and plan to revisit it in the future to refine the design further. From a
						personal perspective, I noticed how much this process improved the way I approach mobile UI design.
					</p>

					<p>
						As a designer, I am proud of the progress I made. This project reminded me that sometimes the hardest part
						of design is not adding more, but knowing when to stop.
					</p>
				</div>
			</ConclusionSection>

			<section id="demo-video" className="section">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<VideoPlayer
						src="/portfolio/images/projects/vitta/demo.mov"
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
