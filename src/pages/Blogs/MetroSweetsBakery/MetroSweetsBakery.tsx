import Title from "@elements/Title/Title";
import { Image } from "@elements/Image/Image";
import { MetroSweetsBakeryData } from "./data";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import Paragraph from "@elements/Paragraph/Paragraph";
import { Overview } from "@elements/Overview/Overview";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import { VideoPlayer } from "@elements/VideoPlayer/VideoPlayer";
import { ImageGallery } from "@elements/ImageGallery/ImageGallery";
import { GroupVideoPlayer } from "@elements/GroupVideoPlayer/GroupVideoPlayer";
import Text from "@elements/Text/Text";

export default function MetroSweetsBakery() {
	const { title, subtitles, colors } = MetroSweetsBakeryData;

	return (
		<BlogPage blogData={MetroSweetsBakeryData}>
			<Title>{title}</Title>
			<Overview subtitles={subtitles} colors={colors} />

			<div className="hr" />

			<BlogSection title="Overview 🥐">
				<Paragraph>
					Metro Sweets, led by baker Olivia Reed, is a vibrant NYC bakery known for its diverse
					pastries like the iconic "Cityscape Croissant." As a community hub, it hosts events and
					workshops, creating a warm atmosphere. To enhance their services, a website is needed for
					displaying their offerings and facilitating online orders. This will streamline their
					catering business, providing customers with a convenient option to order their delightful
					treats online.\n Recognizing the need to improve services, the bakery is gearing up for a
					website launch. This digital upgrade will not only showcase their offerings but also allow
					customers to conveniently order delightful treats online.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Problem Statement 🗒️">
				<Paragraph>
					Recently, challenges like overbooking orders and human errors in phone orders have
					underscored the need for a reliable online platform. The proposed website aims to tackle
					these issues by offering a systematic and error-resistant ordering process. This
					technological upgrade is designed to enhance customer satisfaction and optimize bakery
					operations, ensuring a smoother and more efficient experience.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Project Goal">
				<Paragraph>
					The online platform will be especially useful for handling big orders, from corporate
					events to birthday parties. While catering to online demands, Metro Sweets remains rooted
					in its physical locations. Real shops still stand, welcoming customers to walk in and
					enjoy the bakery's offerings just like a traditional bakery experience.
				</Paragraph>

				<Text className="italic text-base">
					It's important to note that this narrative is a fabricated story created for the purpose
					of practicing UX and UI design skills.
				</Text>
			</BlogSection>

			<BlogSection title="Work Process 🖌️">
				<Paragraph>
					Moving into visual design, I selected color schemes, typography, and imagery to capture
					the essence of Metro Sweets. Mockups were crafted to showcase the final look and feel.
					Responsive design was a key consideration, ensuring a seamless experience across devices.
					In the initial step, I immersed myself in brainstorming and ideation, generating a diverse
					range of concepts and features for the design. Prioritizing visual appeal, I
					conceptualized ideas aimed at enhancing the overall aesthetic while ensuring seamless
					functionality.
				</Paragraph>

				<Image source="@images/blogs/metro-sweets-bakery/brainstorming.png" />

				<Paragraph>
					Incorporating real-life elements from the bakery, like splattered flour and egg yellow
					accents, infused the online experience with the bakery's vibe. These touches added visual
					interest and a warm, inviting feel, making the digital space reflect the bustling energy
					of Metro Sweets.
				</Paragraph>

				<VideoPlayer source="@videos/blogs/metro-sweets-bakery/welcome-page.mp4" />

				<Paragraph>
					Transitioning to the next phase, I carefully categorized elements and organized sections
					such as the menu, items, and checkout process. This structured approach facilitated
					consistency across different sections of the website, laying a strong foundation for the
					design process.As the project progressed, I focused on refining each individual frame,
					emphasizing clarity and coherence in the design. Carefully polishing every element, I
					created additional variations to enrich the prototyping phase.
				</Paragraph>

				<ImageGallery
					modalClassName="h-[80%] w-[80%]"
					source={[
						{
							url: "@images/blogs/metro-sweets-bakery/figma-layout.png"
						},
						{
							url: "@images/blogs/metro-sweets-bakery/figma-layout-relationships.png"
						}
					]}
				/>

				<Paragraph>
					I moved into the fourth step, fine-tuning and carefully checking every part of the design.
					Paying close attention to detail, I made sure not to miss anything, ensuring a thorough
					review of the entire project.
				</Paragraph>

				<Paragraph>
					The design process peaked in the fifth step, where I turned ideas into practical designs
					using mockups and prototypes. By refining and iterating, I brought these concepts to life,
					creating effective design solutions. This project marked
				</Paragraph>

				<Paragraph>
					a significant professional milestone and a personal journey of growth for me. It started
					as a small project, originating from a website I previously designed. Transitioning from
					desktop to mobile design presented a welcomed challenge, providing an opportunity to
					broaden my skill set and deepen my understanding of responsive design principles.
				</Paragraph>

				<GroupVideoPlayer
					source={[
						{ url: "@videos/blogs/metro-sweets-bakery/checkout.mp4" },
						{ url: "@videos/blogs/metro-sweets-bakery/contact-us.mp4" }
					]}
				/>
			</BlogSection>

			<BlogSection title="Problem Solution">
				<Paragraph>
					Recognizing the challenge of overbooking, we implemented a strategic solution. Through a
					dynamic ordering system, item availability became contingent on the limits set for a
					specific date and the total quantity ordered. This not only prevented overbooking but also
					ensured a smoother order management process for Metro Sweets.
				</Paragraph>

				<VideoPlayer source="@videos/blogs/metro-sweets-bakery/item-selection.mp4" />

				<Paragraph>
					A key takeaway from this experience is recognizing the importance of adaptability and
					continuous learning in the dynamic field of UX/UI design. Embracing challenges and pushing
					creative boundaries are fundamental to fostering growth and innovation. Moving forward, I
					am excited to take on more projects, applying the lessons learned and exploring new
					opportunities for creativity and innovation.
				</Paragraph>

				<Image source="@images/blogs/metro-sweets-bakery/app-on-phone.png" className="w-[90%]" />
			</BlogSection>
		</BlogPage>
	);
}
