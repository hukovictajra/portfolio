import { getTitle } from "@utils/utils";
import Title from "@elements/Title/Title";
import { Image } from "@elements/Image/Image";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import Paragraph from "@elements/Paragraph/Paragraph";
import { TributeToThe1984WinterOlympicsData } from "./data";
import { TagSection } from "@elements/TagSection/TagSection";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import { ImageGallery } from "@elements/ImageGallery/ImageGallery";

export function TributeToThe1984WinterOlympics() {
	const { title, tags, colors } = TributeToThe1984WinterOlympicsData;

	return (
		<BlogPage
			blogData={TributeToThe1984WinterOlympicsData}
			title="My Tribute To The 1984 Winter Olympics"
		>
			<Title>{getTitle(title)}</Title>
			<TagSection tags={tags} colors={colors} />

			<div className="hr" />

			<BlogSection title="Description 📝">
				<Paragraph>
					I took a recent photo of Sarajevo and infused it with elements from a vintage postcard of
					the Sarajevo Olympics. It's a humble attempt to juxtapose the city's past and present in a
					nostalgic manner.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Inspiration 🧠">
				<Paragraph>
					Sarajevo's rich history, especially its role as an Olympic host, inspired me to create
					this piece. I wanted to capture the essence of both eras and create a bridge between them.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Process 🖌️">
				<Paragraph>
					I started with a photo I took of Sarajevo today. Then, I found a vintage postcard from the
					1984 Olympics and selected a few iconic elements, like the Olympic official logo. Using
					basic editing tools, I carefully placed these elements onto the modern photo, trying to
					maintain a sense of harmony between the two time periods.
				</Paragraph>

				<ImageGallery
					imageStyle={{
						aspectRatio: "9/16",
						height: "720px",
						maxHeight: "720px"
					}}
					dotImageStyle={{
						aspectRatio: "9/16",
						width: "75px"
					}}
					source={[
						{
							url: "@images/blogs/my-tribute-to-the-1984-winter-olympics/process-original.png"
						},
						{
							url: "@images/blogs/my-tribute-to-the-1984-winter-olympics/process-b-w.png"
						},
						{
							url: "@images/blogs/my-tribute-to-the-1984-winter-olympics/process-vucko.png"
						}
					]}
				/>
			</BlogSection>

			<BlogSection title="Outcome 🖼️">
				<Paragraph>
					The result is a modest blend of past and present, evoking a sense of nostalgia for the
					Sarajevo of yesteryears. It's a small tribute to the city's history and its enduring
					spirit. I hope it resonates with those who have fond memories of the Olympics and those
					who cherish Sarajevo's journey over the years.
				</Paragraph>

				<Image
					style={{
						maxHeight: "720px"
					}}
					source="@images/blogs/my-tribute-to-the-1984-winter-olympics/final.png"
				/>
			</BlogSection>
		</BlogPage>
	);
}
