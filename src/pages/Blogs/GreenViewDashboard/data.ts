import { Blog, BlogColors, BlogTagType } from "@data/models";

export const GreenviewDashboardData: Blog = {
	id: "greenview-dashboard",
	position: 0,
	showOnLanding: true,
	title: "Greenview Dashboard",
	image: "@images/blogs/green-view-dashboard/showcase.png",
	colors: new BlogColors({
		navbarBg: "#96CBC1",

		// tagText: "#1f2937",
		// tagHoverText: "#v",
		// tagHoverBg: "#D6F3F3101214",

		background: "#D6F3F3",
		primary: "#101214",
		secondary: "#96CBC1"
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
				{
					text: "Figma",
					url: "https://www.figma.com/design/dANTtMCoulSaxHv2IzLEO6/Dashboard?node-id=0-1&t=Iyv3LFHOyzGQgpFI-1"
				},
				{
					text: "Figma Community",
					url: "https://www.figma.com/community/file/1408255484114053601/dashboard-design-with-dark-and-light-mode"
				}
			]
		}
	],
	rawTags: ["Case Study", "Figma Project"]
};
