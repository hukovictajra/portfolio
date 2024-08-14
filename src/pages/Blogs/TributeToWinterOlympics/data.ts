import { Blog, BlogSubtitleType } from "@data/models";

export const MyTributeToThe1984WinterOlympicsData: Blog = {
	id: "my-tribute-to-the-1984-winter-olympics",
	position: 2,
	showOnLanding: true,
	title: "My tribute to the 1984 winter olympics",
	image: "@images/blogs/my-tribute-to-the-1984-winter-olympics/showcase.png",
	colors: {
		navbar: "#6b8478",
		background: "#567565",
		primary: "#ebebe6",
		secondary: "#2e2d2d"
	},
	subtitles: [
		{
			type: BlogSubtitleType.Text,
			prefix: "Skills:",
			items: ["Graphic Design", "Photography"]
		},
		{
			type: BlogSubtitleType.Text,
			prefix: "Tools:",
			items: ["Adobe Photoshop", "Canva", "Canon 2000D"]
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
