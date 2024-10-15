import { Blog, BlogTagType } from "@data/models";

export const SunflowerPostcardData: Blog = {
	id: "sunflower-postcard",
	position: 4,
	showOnLanding: true,
	title: "Sunflower🌻: Postcard",
	colors: {
		navbarBg: "#A49689",
		background: "#c2b1a1",
		primary: "#413736",
		secondary: "#e7ae00"
	},

	tags: [
		{
			type: BlogTagType.Text,
			prefix: "Skills:",
			items: ["Graphic Design", "Print Design", "Photography"]
		},
		{
			type: BlogTagType.Text,
			prefix: "Tools:",
			items: ["Photoshop", "Adobe Illustrator", "Canon 2000D"]
		},
		{
			type: BlogTagType.Color,
			prefix: "Theme:",
			items: {
				Background: "@background",
				Primary: "@primary",
				Secondary: "@secondary"
			}
		}
	],
	image: "@images/blogs/sunflower-postcard/showcase.png"
};
