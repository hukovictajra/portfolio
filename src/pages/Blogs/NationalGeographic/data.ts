import { Blog, BlogColors, BlogTagType } from "@data/models";

export const NationalGeographicRemakeData: Blog = {
	id: "national-geographic-website-remake",
	position: 4,
	showOnLanding: true,
	title: "National Geographic Website Remake",
	colors: new BlogColors({
		navbarBg: "#C09900",
		navbarText: "#fafafa",

		tagHoverBg: "#C09900",
		tagHoverText: "#000000",

		workWithMeBg: "#FFFFFF",
		workWithMeText: "#000000",
		workWithMeHoverBg: "#000000",
		workWithMeHoverText: "#FFFFFF",

		background: "#333333",
		primary: "#fafafa",
		secondary: "#C09900"
	}),
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
				// 	url: "https://www.figma.com/design/JX5WiGcf9Gj3P7UvGmtQeQ/National-Geo-webside-remake?node-id=9-167&t=iZn9VHVzcFi3YqWF-1"
				// },
				{
					text: "Figma Community",
					url: "https://www.figma.com/community/file/1422332976274230395/national-geographic-commercial-concept"
				}
			]
		}
	],
	image: "@images/blogs/national-geographic-remake/showcase.png"
};
