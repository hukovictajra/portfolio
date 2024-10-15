import Text from "@elements/Text/Text";
import { BlogTitle } from "@data/models";
import { PrimecinemaData } from "./data";
import Title from "@elements/Title/Title";
import { List, ListItem } from "@elements/List/List";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { TagSection } from "@elements/TagSection/TagSection";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import FigmaEmbededFrame from "@elements/FigmaEmbededFrame/FigmaEmbededFrame";

export function Primecinema() {
	const { title, tags, colors } = PrimecinemaData;

	return (
		<BlogPage blogData={PrimecinemaData} title="Primecinema">
			<Title>{(title as BlogTitle).main}</Title>
			<TagSection tags={tags} colors={colors} />
			<div className="hr" />
			<BlogSection title="Project overview">
				<Text>
					This TV app project focuses on delivering a seamless user experience with autoplayable
					previews for movies, TV shows, and documentaries. The interface offers users a simple,
					intuitive way to explore content, with key features like:
				</Text>
				<List>
					<ListItem>
						<span className="font-semibold">Autoplay Previews:</span> Each show or movie has an
						animated preview, accompanied by basic information and a trailer for quick
						decision-making.
					</ListItem>
					<ListItem>
						<span className="font-semibold">Dynamic Recommendations:</span> Four recommended shows
						rotate every five seconds, allowing users to explore new content effortlessly.
					</ListItem>
					<ListItem>
						<span className="font-semibold">Category Switching:</span> Users can easily navigate
						between different categories (Movies, TV Shows, Documentaries) for a diverse browsing
						experience.
					</ListItem>
					<ListItem>
						<span className="font-semibold">Minimalist Design:</span> A clean, white-themed
						interface, complemented by original show logos for added visual uniqueness.
					</ListItem>
					<ListItem>
						<span className="font-semibold">Interactive Elements:</span> Includes essential controls
						such as a mute button, notification bell, settings cogwheel, and profile access for user
						convenience.
					</ListItem>
				</List>
			</BlogSection>

			<BlogSection title="Figma project">
				<FigmaEmbededFrame src="https://embed.figma.com/proto/YB5FRJBeUcRcILVPnVGqZa/TV-app?node-id=59-246&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=4%3A313&starting-point-node-id=59%3A230&embed-host=share" />
			</BlogSection>
		</BlogPage>
	);
}
