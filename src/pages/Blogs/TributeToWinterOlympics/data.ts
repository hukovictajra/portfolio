import { Blog, BlogTagType } from "@data/models";

export const TributeToThe1984WinterOlympicsData: Blog = {
	id: "tribute-to-the-1984-winter-olympics",
	position: 2,
	showOnLanding: true,
	title: "My tribute to the 1984 winter olympics",
	image: "@images/blogs/my-tribute-to-the-1984-winter-olympics/showcase.png",
	colors: {
		navbarBg: "#6b8478",
		background: "#567565",
		primary: "#ebebe6",
		secondary: "#2e2d2d"
	},
	tags: [
		{
			type: BlogTagType.Text,
			prefix: "Skills:",
			items: ["Graphic Design", "Photography"]
		},
		{
			type: BlogTagType.Text,
			prefix: "Tools:",
			items: ["Photoshop", "Canva", "Canon 2000D"]
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
	]
};
