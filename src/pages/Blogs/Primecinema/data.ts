import { Blog, BlogTagType } from "@data/models";

export const PrimecinemaData: Blog = {
	id: "primecinema",
	position: 4,
	showOnLanding: true,
	title: {
		main: "Primecinema",
		subtitle: "Simplified Content Exploration with Autoplay Previews"
	},
	colors: {
		navbarBg: "#1E1225",
		navbarText: "#FFFFFF",

		tagHoverText: "#FFFFFF",
		tagHoverBg: "#1E1225",

		background: "#3C3043",
		primary: "#f2f3f2",
		secondary: "#1E1225"
	},
	tags: [
		{
			type: BlogTagType.Text,
			prefix: "Skills:",
			items: ["Web Design", "Graphic Design", "Figma flow"]
		},
		{
			type: BlogTagType.Text,
			prefix: "Tools:",
			items: ["Figma", "Photoshop", "Canva"]
		},
		{
			type: BlogTagType.Color,
			prefix: "Theme:",
			items: {
				Background: "@background",
				Primary: "@primary",
				Secondary: "@secondary"
			}
		},
		{
			type: BlogTagType.Link,
			prefix: "Links:",
			items: [
				// {
				// 	text: "Figma",
				// 	url: "https://www.figma.com/proto/YB5FRJBeUcRcILVPnVGqZa/TV-app?node-id=59-230&node-type=canvas&t=9UOXlRG2dvxBMKxU-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A313&starting-point-node-id=59%3A230"
				// },
				{
					text: "Figma Community",
					url: "https://www.figma.com/community/file/1424806976126567954/tv-app-project-simplified-content-exploration-with-autoplay-previews"
				}
			]
		}
	],
	image: "@images/blogs/primecinema/showcase.png"
};
