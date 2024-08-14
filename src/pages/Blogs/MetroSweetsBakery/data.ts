import { Blog, BlogSubtitleType } from "@data/models";

export const MetroSweetsBakeryData: Blog = {
	id: "metro-sweets-bakery",
	position: 0,
	showOnLanding: true,
	title: "Metro Sweets App 🥐",
	image: "@images/blogs/metro-sweets-bakery/showcase.jpg",
	colors: {
		navbar: "#9D8C82",
		background: "#9D8C82",
		primary: "#4F392C",
		secondary: "#8B7364"
	},
	subtitles: [
		{
			type: BlogSubtitleType.Text,
			prefix: "Skills:",
			items: ["UX/UI Design", "Graphic Design"]
		},
		{
			type: BlogSubtitleType.Text,
			prefix: "Tools:",
			items: ["Figma", "Canva", "Adobe Photoshop"]
		},
		{
			type: BlogSubtitleType.Color,
			prefix: "Theme:",
			items: {
				Background: "@background",
				Primary: "@primary",
				Secondary: "@secondary"
			}
		}
	]
};
