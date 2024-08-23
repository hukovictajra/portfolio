import { Blog, BlogSectionType, BlogSubtitleType, ImageType } from "@data/models";

export const GreenviewDashboard: Blog = {
	id: "greenview-dashboard",
	position: 0,
	showOnLanding: true,
	title: "Greenview Dashboard",
	image: "@images/blogs/green-view-dashboard/showcase.png",
	colors: {
		navbar: "#96CBC1",
		background: "#D6F3F3",
		primary: "#101214",
		secondary: "#96CBC1"
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
	],
	sections: [
		{
			type: BlogSectionType.Paragraph,
			title: "Dashboard",
			text: "For this project, I created a dashboard aimed at enhancing the management and operational efficiency of a green company. The design inspiration came from various modern UI patterns and best practices observed in existing dashboards, which I tailored to fit the unique branding and user requirements of the green company.",
			image: {
				type: ImageType.Single,
				source: "@images/blogs/green-view-dashboard/dashboards-white.png"
			}
		},
		{
			type: BlogSectionType.Paragraph,
			title: "Color Scheme and Themes",
			image: {
				type: ImageType.Single,
				source: {
					url: "@images/blogs/green-view-dashboard/gradient.png"
				}
			}
		},
		{
			type: BlogSectionType.List,
			preText: "The dashboard features two themes: light mode and dark mode.",
			items: [
				"Light Mode: The background is white, with a green gradient used as an accent color. Navy blue is used for text to provide a clear and pleasant contrast.",
				"Dark Mode: The background is navy blue, with a white and green gradient as the accent color. Text is displayed in white to maintain readability."
			],
			postText:
				"These color choices ensure that the dashboard is visually appealing, maintains brand consistency, and is accessible in both lighting conditions. I decided on the navy and green contrast to create a professional and calming aesthetic that aligns with the company's green and sustainable ethos. The navy blue provides a strong, stable background, while the green accents reinforce the environmental focus of the company."
		},
		{
			type: BlogSectionType.Paragraph,
			title: "Typography",
			text: "For typography, I chose the Poppins font in different font weight variants. I find this font simple and easy to read, making it an ideal choice for a dashboard where users need to quickly digest information. By using Poppins, I aimed to ensure that the text is clear and legible, reducing eye strain for users who spend extended periods working with the dashboard.",
			image: {
				type: ImageType.Single,
				source: {
					url: "@images/blogs/green-view-dashboard/fonts.png",
					style: {
						width: "80%",
						margin: "2rem"
					}
				}
			}
		},
		{
			type: BlogSectionType.Paragraph,
			title: "Layout and Navigation",
			text: "To facilitate ease of use and intuitive navigation, the dashboard includes the following elements:"
		},
		{
			type: BlogSectionType.List,
			title: {
				text: "Sidebar",
				style: {
					color: "#73808D"
				}
			},
			items: [
				"Minimizable: Users can expand or minimize the side menu for more screen space.",
				"Menu Options: Includes Leaderboard, Orders, Products, Sales Report, Messages, Settings, and Sign Out options.",
				"Additional Features: Language changer for multilingual support.",
				"Design Goal: My goal for the side menu was to keep the design simple and intuitive. As the saying goes, \"don't fix something that isn't broken.\" Since this dashboard will be used by the employees of the company, I only included information that would be useful to a working employee."
			],
			contentStyle: {
				display: "flex",
				flexDirection: "row"
			},
			image: {
				type: ImageType.Single,
				source: {
					url: "@images/blogs/green-view-dashboard/sidebars.png"
				}
			}
		},
		{
			type: BlogSectionType.List,
			title: {
				text: "Navbar",
				style: {
					color: "#73808D"
				}
			},
			items: [
				"Search Bar: Enables quick searches within the dashboard.",
				"Admin Profile: Provides easy access to user profile settings.",
				"Notification Bell: Alerts users to important updates and notifications",
				"Dark/Light Mode Toggle: Allows users to switch between light and dark modes for better user experience."
			],
			image: {
				type: ImageType.Single,
				source: {
					url: "@images/blogs/green-view-dashboard/navbar.png",
					style: {
						marginTop: "2rem"
					}
				}
			}
		},
		{
			type: BlogSectionType.List,
			title: {
				text: "Widgets and Metrics",
				style: {
					color: "#73808D"
				}
			},
			preText:
				"The dashboard includes several key widgets that display important statistics and metrics:",
			items: [
				"Total Revenues: Displays the overall revenue generated.",
				"Today's Sales: Shows sales figures for the current day.",
				"Customer Satisfaction: Measures and displays customer satisfaction levels.",
				"Sales Mapping: Visualizes sales distribution geographically.",
				"Target vs. Realized Volume: Compares projected sales targets with actual sales figures.",
				"Volume vs. Service: Tracks the balance between sales volume and service efficiency.",
				"Visitor Insights: Provides data on website or store visitors.",
				"Top Products: Lists the best-selling products."
			],
			postText:
				"These widgets are designed to provide a comprehensive overview of the company's performance, making it easier for users to access vital information at a glance.",
			image: {
				type: ImageType.Gallery,
				imageStyle: {
					height: "450px"
				},
				source: [
					{
						original: "@images/blogs/green-view-dashboard/graphs/all.png"
					},
					{
						original: "@images/blogs/green-view-dashboard/graphs/volume-in-service-level.png"
					},
					{
						original: "@images/blogs/green-view-dashboard/graphs/customer-satisfaction.png"
					},
					{
						original: "@images/blogs/green-view-dashboard/graphs/sales-mapping-by-country.png"
					},
					{
						original: "@images/blogs/green-view-dashboard/graphs/visitor-insights.png"
					},
					{
						original: "@images/blogs/green-view-dashboard/graphs/top-products.png"
					}
				]
			}
		},

		{
			type: BlogSectionType.List,
			title: "Additional Page: User Information Table",
			preText:
				"The dashboard includes a second page dedicated to displaying user information in a tabular format. This table includes the following columns:",
			items: [
				"Customer Name: The name of the customer.",
				"Company: The company the customer is associated with.",
				"Country: The country of the customer.",
				"Email: The customer's email address.",
				"Phone Number: The customer's phone number.",
				"Activity Status: Indicates whether the customer is currently active or inactive."
			],
			postText:
				"This page is designed to help the company keep track of customer information efficiently, providing a centralized view of key customer details.",
			image: {
				type: ImageType.Single,
				source: {
					url: "@images/blogs/green-view-dashboard/customers-table.png"
				}
			}
		},
		{
			type: BlogSectionType.Complex,
			title: "Design process",
			content: [
				// {
				// 	type: SectionComponentType.Text,
				// 		content: {
				// 			text: "I started with a simple wireframe that captured the overall feel of the future design. I knew I wanted to include a navbar and a minimizable side menu, so it was important for me to decide on the overall possible placement of future widgets early on."
				// 		}
				// },
				// {
				// 	type: ComplexBlogContentType.BlogImage,
				// 	content: {
				// 		type: ImageType.Single,
				// 		layoutId: "wireframePicture",
				// 		source: {
				// 			url: "@images/blogs/green-view-dashboard/wireframe.png"
				// 		}
				// 	}
				// },
				// {
				// 	type: ComplexBlogContentType.BlogTextContent,
				// 	content: {
				// 		content:
				// 			"For widgets in the wireframing phase, I focused on ensuring they would be easy on the eyes and direct in presenting information. For widget content, I drew inspiration from various online examples, selecting elements that best fit the needs of the dashboard."
				// 	}
				// }
			]
		},
		{
			type: BlogSectionType.List,
			title: "Design rationale",
			items: [
				"The primary goal of the design was to create a dashboard that is not only functional but also user-friendly and visually appealing. By incorporating a responsive layout, the dashboard ensures that users can efficiently navigate through various sections and access the information they need quickly. The inclusion of dark and light modes caters to different user preferences and environmental conditions, enhancing overall usability.",
				"The side menu and navbar are strategically designed to maximize screen real estate while providing quick access to essential features and settings. The color scheme reinforces the green company’s brand identity, promoting a sense of sustainability and environmental consciousness",
				"The additional user information table provides a detailed view of customer data, allowing the company to manage and analyze customer interactions effectively."
			]
		},
		{
			type: BlogSectionType.Paragraph,
			title: "Final Product",
			image: {
				type: ImageType.Gallery,
				source: [
					{
						original: "@images/blogs/green-view-dashboard/light-mode-showcase.png",
						thumbnail: "@images/blogs/green-view-dashboard/light-mode-showcase.png"
					},
					{
						original: "@images/blogs/green-view-dashboard/dark-mode-showcase.png",
						thumbnail: "@images/blogs/green-view-dashboard/dark-mode-showcase.png"
					}
				]
			}
		}
	]
};
