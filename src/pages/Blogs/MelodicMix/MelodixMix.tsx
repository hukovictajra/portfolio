import { MelodicMixData } from "./data";
import Title from "@elements/Title/Title";
import { Image } from "@elements/Image/Image";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { List, ListItem } from "@elements/List/List";
import Paragraph from "@elements/Paragraph/Paragraph";
import { Overview } from "@elements/Overview/Overview";
import { BlogSection } from "@elements/BlogSection/BlogSection";

export default function MelodicMix() {
	const { title, subtitles, colors } = MelodicMixData;

	return (
		<BlogPage blogData={MelodicMixData}>
			<Title>{title}</Title>
			<Overview subtitles={subtitles} colors={colors} />

			<div className="hr" />

			<BlogSection title="Summary 📝">
				<List>
					<ListItem>
						Designed a custom print for a tote bag and hoodie featuring Billie Eilish, Taylor Swift,
						Olivia Rodrigo, and The Weeknd.Utilized Photoshop to merge images of the artists in a
						pop art style with vibrant colors.Incorporated iconic lyrics from each artist into the
						background of the design.Produced a bold and captivating print that personalized the
						client's love for their favorite musicians.
					</ListItem>
					<ListItem>
						Utilized Photoshop to merge images of the artists in a pop art style with vibrant
						colors.
					</ListItem>
					<ListItem>
						Incorporated iconic lyrics from each artist into the background of the design.
					</ListItem>
					<ListItem>
						Produced a bold and captivating print that personalized the client's love for their
						favorite musicians.
					</ListItem>
				</List>

				<Image source="@images/blogs/melodic-mix-a-custom-print-collaboration/final.png" />
			</BlogSection>

			<BlogSection title="Project Description 🎙️">
				<Paragraph>
					For this project, I was commissioned to create a custom print for a client who is a huge
					fan of Billie Eilish, Taylor Swift, Olivia Rodrigo, and The Weeknd. The client wanted the
					print to be featured on a tote bag and hoodie, showcasing all four artists in a unique and
					visually striking manner.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Brainstorming 🧠">
				<Paragraph>
					During our meeting, the client and I came together to brainstorm and put our ideas on
					paper. We discussed their vision for the custom print, including their admiration for the
					4 artists. Together, we sketched out concepts and exchanged thoughts to ensure we were
					aligned before proceeding with the design process.
				</Paragraph>

				<Image
					source="@images/blogs/melodic-mix-a-custom-print-collaboration/brainstorming.png"
					caption="Original sketch and ideas"
				/>
			</BlogSection>

			<BlogSection title="Utilizing Photoshop for Image Merging and Editing ⌨️">
				<Paragraph>
					To bring this vision to life, I utilized Photoshop to merge elements from each artist's
					iconic imagery. I began by selecting high-quality images of Billie Eilish, Taylor Swift,
					Olivia Rodrigo, and The Weeknd. Then, I carefully cut out each artist from their
					respective images, ensuring precision and detail in the process.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Applying Pop Art Style and Vibrant Colors 🖌️">
				<Paragraph>
					I applied a pop art style to each cutout, using vibrant colors of green, red, purple, and
					blue to create a dynamic and eye-catching effect. The pop art style lent a modern and
					energetic vibe to the design, perfectly reflecting the personalities and aesthetics of the
					artists.
				</Paragraph>

				<Image source="@images/blogs/melodic-mix-a-custom-print-collaboration/artists.png" />
			</BlogSection>

			<BlogSection title="Incorporating Iconic Lyrics">
				<Paragraph>
					To further enhance the design, I incorporated iconic lyrics associated with each artist
					into the background of the pictures. This added layer of detail not only paid homage to
					the artists' music but also made the design more engaging and visually interesting.
				</Paragraph>

				<Image source="@images/blogs/melodic-mix-a-custom-print-collaboration/songs.png" />
			</BlogSection>

			<BlogSection>
				<Paragraph>Finalizing the Layout for Tote Bag and Hoodie Design</Paragraph>

				<Image source="@images/blogs/melodic-mix-a-custom-print-collaboration/hoodie.png" />
			</BlogSection>

			<BlogSection title="Conclusion ✅">
				<Paragraph>
					In conclusion, the project resulted in a personalized print that reflects the client's
					appreciation for their favorite musicians. Through thoughtful design decisions, the final
					product serves as a unique expression of the client's passion for music, featured on a
					tote bag and hoodie.
				</Paragraph>
			</BlogSection>
		</BlogPage>
	);
}
