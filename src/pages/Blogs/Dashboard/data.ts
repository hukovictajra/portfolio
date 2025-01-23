import { Blog, BlogColors, BlogTagType } from "@data/models";

export const DashboardData: Blog = {
	id: "dashboard",
	position: 0,
	showOnLanding: true,
	title: "Dashboard",
	image: "@images/blogs/dashboard/showcase.png",
	colors: new BlogColors({
		navbarBg: "#3E3E3E",
		navbarText: "#AEAEAE",

		background: "#333333",
		primary: "#AEAEAE",
		secondary: "#5FA0BE"
	}),
	tags: [
		{
			type: BlogTagType.Text,
			prefix: "Skills:",
			items: ["UX/UI Design", "Graphic Design"]
		},
		{
			type: BlogTagType.Text,
			prefix: "Tools:",
			items: ["Figma", "Canva", "Photoshop"]
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
				// 	url: "https://www.figma.com/design/dANTtMCoulSaxHv2IzLEO6/Dashboard?node-id=0-1&t=Iyv3LFHOyzGQgpFI-1"
				// },
				{
					text: "Figma Community",
					url: "https://www.figma.com/community/file/1447271184154208951/dasboard"
				}
			]
		}
	],
	rawTags: ["Case Study", "Figma Project"]
};
