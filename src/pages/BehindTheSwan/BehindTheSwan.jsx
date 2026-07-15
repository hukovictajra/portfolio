import { GoalSection } from "../../components/Goal/GoalSection";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";
import { Booklet } from "../../components/Booklet";

import "./BehindTheSwan.css";

export function BehindTheSwan() {
	return (
		<main>
			<ProjectHeader
				title="Behind the Swan"
				subtitle="A photographic story that explores the unseen side of ballet, focusing on the moments of preparation, exhaustion, discipline, and quiet strength that exist beyond the stage. Through intimate behind-the-scenes imagery, the essay reveals the contrast between elegance and effort, capturing ballet as both an art form and a demanding daily practice shaped by passion and perseverance."
				chips={[
					{ title: "Role", content: "Photographer, Visual Storyteller" },
					{ title: "Model", content: "Stela Despotović" },
					{ title: "Tools", content: "Canon 2000D 50mm, Adobe Lightroom, Adobe InDesign" }
				]}
			/>

			<GoalSection
				src="/portfolio/images/projects/behind-the-swan/showcase-2.png"
				imageClasses="max-w-[650px] max-h-[450px]"
			>
				The goal was to document the reality behind ballet performances by highlighting the
				emotional and physical journey of a dancer. Rather than focusing only on polished movements,
				the story aimed to show vulnerability, focus, and resilience, offering viewers a deeper and
				more human perspective of the art of ballet.
			</GoalSection>

			{/* <section id="booklet-gallery" className="section">
				<Booklet
					images={[
						"/portfolio/images/projects/behind-the-swan/booklet/1.png",
						"/portfolio/images/projects/behind-the-swan/booklet/2.png",
						"/portfolio/images/projects/behind-the-swan/booklet/3.png",
						"/portfolio/images/projects/behind-the-swan/booklet/4.png",
						"/portfolio/images/projects/behind-the-swan/booklet/5.png",
						"/portfolio/images/projects/behind-the-swan/booklet/6.png",
						"/portfolio/images/projects/behind-the-swan/booklet/7.png",
						"/portfolio/images/projects/behind-the-swan/booklet/8.png",
						"/portfolio/images/projects/behind-the-swan/booklet/9.png",
						"/portfolio/images/projects/behind-the-swan/booklet/10.png",
						"/portfolio/images/projects/behind-the-swan/booklet/11.png",
						"/portfolio/images/projects/behind-the-swan/booklet/12.png"
					]}
				/>
			</section> */}
		</main>
	);
}
