import { getTitle } from "@utils/utils";
import Title from "@elements/Title/Title";
import { Image } from "@elements/Image/Image";
import { SunflowerPostcardData } from "./data";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import Paragraph from "@elements/Paragraph/Paragraph";
import { TagSection } from "@elements/TagSection/TagSection";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import { ImageGallery } from "@elements/ImageGallery/ImageGallery";

export function SunflowerPostcard() {
	const { title, tags, colors } = SunflowerPostcardData;

	return (
		<BlogPage blogData={SunflowerPostcardData} title="Sunflower Postrcard">
			<Title>{getTitle(title)}</Title>
			<TagSection tags={tags} colors={colors} />

			<div className="hr" />

			<Image source="@images/blogs/sunflower-postcard/overview.png" />

			<BlogSection>
				<Paragraph>
					This postcard holds a special place in my heart as it's a personal project created with
					love for her, a dear friend who shares a passion for travel and adores sunflowers.
					Inspired by her adventurous spirit and love for nature's beauty, I crafted this design to
					evoke the warmth of sunny days and the joy of exploring new horizons. It's a heartfelt
					reminder of the sunshine she brings into my life and the endless possibilities that await
					her on her journey.
				</Paragraph>

				<ImageGallery
					source={[
						{ url: "@images/blogs/sunflower-postcard/postcard-front.png" },
						{ url: "@images/blogs/sunflower-postcard/postcard-back.png" }
					]}
				/>
			</BlogSection>

			<BlogSection>
				<Paragraph>
					This postcard, created with Photoshop, is a delightful mix of digital art and photography.
					Featuring a lovely photo of a girl set against a backdrop of painted sunflowers, it gives
					off a relaxed and cheerful vibe. The playful integration of the painted sunflowers with
					the photo adds a whimsical touch, perfect for sending warm wishes or brightening someone's
					day. With its laid-back charm, this postcard captures the essence of a sunny summer
					afternoon.
				</Paragraph>

				<Image source="@images/blogs/sunflower-postcard/showcase.png" />
			</BlogSection>
		</BlogPage>
	);
}
