import { Blog, BlogSubtitleType } from "@data/models";

export const SunflowerPostcardData: Blog = {
	id: "sunflower-postcard",
	position: 4,
	showOnLanding: true,
	title: "Sunflower🌻: Postcard",
	colors: {
		navbar: "#A49689",
		background: "#c2b1a1",
		primary: "#413736",
		secondary: "#e7ae00"
	},

	subtitles: [
		{
			type: BlogSubtitleType.Text,
			prefix: "Skills:",
			items: ["Graphic Design", "Print Design", "Photography"]
		},
		{
			type: BlogSubtitleType.Text,
			prefix: "Tools:",
			items: ["Adobe Photoshop", "Adobe Illustrator", "Canon 2000D"]
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
	],
	image: "@images/blogs/sunflower-postcard/showcase.png"
};
