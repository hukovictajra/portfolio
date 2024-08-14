import { Blog, BlogSubtitleType } from "@data/models";

export const MelodicMixData: Blog = {
	id: "melodic-mix-a-custom-print-collaboration",
	position: 3,
	showOnLanding: true,
	title: "Melodic Mix: A Custom Print Collaboration",
	colors: {
		navbar: "#9f9f9f",
		background: "#d1d1d1",
		primary: "#293137",
		secondary: "#f5f3f0",
		artworkBackground: "#293137",
		artworkPrimary: "#f5f3f0",
		artworkSecondary: "#d1d1d1"
	},
	subtitles: [
		{
			type: BlogSubtitleType.Text,
			prefix: "Skills:",
			items: ["Graphic Design", "Print Design"]
		},
		{
			type: BlogSubtitleType.Text,
			prefix: "Tools:",
			items: ["Adobe Photoshop", "Adobe Illustrator", "Canva"]
		},
		{
			type: BlogSubtitleType.Color,
			prefix: "Theme:",
			items: {
				Background: "@artworkBackground",
				Primary: "@artworkPrimary",
				Secondary: "@artworkSecondary"
			}
		}
	],
	image: "@images/blogs/melodic-mix-a-custom-print-collaboration/showcase.png"
};
