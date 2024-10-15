import { Blog, BlogTagType } from "@data/models";

export const MetroSweetsBakeryData: Blog = {
	id: "metro-sweets-bakery",
	position: 0,
	showOnLanding: true,
	title: "Metro Sweets App 🥐",
	image: "@images/blogs/metro-sweets-bakery/showcase.jpg",
	colors: {
		navbarBg: "#9D8C82",

		tagText: "#4F392C",
		tagHoverBg: "",
		tagHoverText: "#8B7364",

		background: "#9D8C82",
		primary: "#4F392C",
		secondary: "#8B7364"
	},
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
					url: "https://www.figma.com/design/tJ5dJk7lLLXdUHlNH5Chsu/METRO-SWEETS?node-id=5-2&t=9eVZP4VbWoqgdxOA-1"
				}
			]
		}
	],
	rawTags: ["Case Study", "Figma Project"]
};
