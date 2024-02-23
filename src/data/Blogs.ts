import { Blog } from "./models/Blog";
import { BlogImageType, BlogSectionType, BlogSubtitleType, BlogVideoType } from "./models";

export const blogs: Blog[] = [
	{
		id: "metro-sweets-bakery",
		position: 0,
		showOnLanding: true,
		title: "Metro Sweets App 🥐",
		image: "@images/blogs/metro-sweets-bakery/showcase.png",
		colors: {
			navbar: "#9D8C82",
			background: "#9D8C82",
			primary: "#4F392C",
			secondary: "#8B7364",
		},
		subtitles: [
			{
				type: BlogSubtitleType.Text,
				prefix: "Skills:",
				items: ["UX/UI Design", "Graphic Design"],
			},
			{
				type: BlogSubtitleType.Text,
				prefix: "Tools:",
				items: ["Figma", "Canva", "Adobe Photoshop"],
			},
			{
				type: BlogSubtitleType.Color,
				prefix: "Theme:",
				chips: {
					Background: "@background",
					Primary: "@primary",
					Secondary: "@secondary",
				},
			},
		],
		sections: [
			{
				type: BlogSectionType.Paragraph,
				title: "Overview 🥐",
				text: 'Metro Sweets, led by baker Olivia Reed, is a vibrant NYC bakery known for its diverse pastries like the iconic "Cityscape Croissant." As a community hub, it hosts events and workshops, creating a warm atmosphere. To enhance their services, a website is needed for displaying their offerings and facilitating online orders. This will streamline their catering business, providing customers with a convenient option to order their delightful treats online.\n Recognizing the need to improve services, the bakery is gearing up for a website launch. This digital upgrade will not only showcase their offerings but also allow customers to conveniently order delightful treats online.',
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Problem Statement 🗒️",
				text: "Recently, challenges like overbooking orders and human errors in phone orders have underscored the need for a reliable online platform. The proposed website aims to tackle these issues by offering a systematic and error-resistant ordering process. This technological upgrade is designed to enhance customer satisfaction and optimize bakery operations, ensuring a smoother and more efficient experience.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Project Goal",
				text: "The online platform will be especially useful for handling big orders, from corporate events to birthday parties. While catering to online demands, Metro Sweets remains rooted in its physical locations. Real shops still stand, welcoming customers to walk in and enjoy the bakery's offerings just like a traditional bakery experience.",
			},
			{
				type: BlogSectionType.Paragraph,
				text: {
					style: {
						fontStyle: "italic",
						fontSize: "1.2rem",
						fontWeight: 500,
						margin: 0,
					},
					content:
						"It's important to note that this narrative is a fabricated story created for the purpose of practicing UX and UI design skills.",
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Work Process 🖌️",
				text: "Moving into visual design, I selected color schemes, typography, and imagery to capture the essence of Metro Sweets. High-fidelity mockups were crafted to showcase the final look and feel. Responsive design was a key consideration, ensuring a seamless experience across devices. In the initial step, I immersed myself in brainstorming and ideation, generating a diverse range of concepts and features for the design. Prioritizing visual appeal, I conceptualized ideas aimed at enhancing the overall aesthetic while ensuring seamless functionality.",
				image: {
					type: BlogImageType.Single,
					source: {
						caption: "Testni kepsn",
						url: "@images/blogs/metro-sweets-bakery/brainstorming.png",
					},
					imageStyle: {
						width: "85%",
						lg: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				text: "Incorporating real-life elements from the bakery, like splattered flour and egg yellow accents, infused the online experience with the bakery's vibe. These touches added visual interest and a warm, inviting feel, making the digital space reflect the bustling energy of Metro Sweets.",
				video: {
					type: BlogVideoType.Single,
					source: "@videos/blogs/metro-sweets-bakery/welcome-page.mp4",
				},
			},

			{
				type: BlogSectionType.Paragraph,
				text: "Transitioning to the next phase, I carefully categorized elements and organized sections such as the menu, items, and checkout process. This structured approach facilitated consistency across different sections of the website, laying a strong foundation for the design process.As the project progressed, I focused on refining each individual frame, emphasizing clarity and coherence in the design. Carefully polishing every element, I created additional variations to enrich the prototyping phase.",
				image: {
					type: BlogImageType.Gallery,
					source: [
						{
							original: "@images/blogs/metro-sweets-bakery/figma-layout.png",
							thumbnail: "@images/blogs/metro-sweets-bakery/figma-layout.png",
						},
						{
							original: "@images/blogs/metro-sweets-bakery/figma-layout-relationships.png",
							thumbnail: "@images/blogs/metro-sweets-bakery/figma-layout-relationships.png",
						},
					],
				},
			},
			{
				type: BlogSectionType.Paragraph,
				text: "I moved into the fourth step, fine-tuning and carefully checking every part of the design. Paying close attention to detail, I made sure not to miss anything, ensuring a thorough review of the entire project.\nThe design process peaked in the fifth step, where I turned ideas into practical designs using mockups and prototypes. By refining and iterating, I brought these concepts to life, creating effective design solutions.\nThis project marked a significant professional milestone and a personal journey of growth for me. It started as a small project, originating from a website I previously designed. Transitioning from desktop to mobile design presented a welcomed challenge, providing an opportunity to broaden my skill set and deepen my understanding of responsive design principles.",
				video: {
					type: BlogVideoType.Group,
					containerStyle: {
						display: "flex",
						gap: "4rem",
						md: {
							gap: "2rem",
							flexDirection: "column",
							alignItems: "center",
						},
						xs: {
							gap: "1rem",
						},
					},
					videoStyle: {
						height: "100%",
					},
					source: [
						{ url: "@videos/blogs/metro-sweets-bakery/checkout.mp4" },
						{ url: "@videos/blogs/metro-sweets-bakery/contact-us.mp4" },
					],
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Problem Solution",
				text: "Recognizing the challenge of overbooking, we implemented a strategic solution. Through a dynamic ordering system, item availability became contingent on the limits set for a specific date and the total quantity ordered. This not only prevented overbooking but also ensured a smoother order management process for Metro Sweets.",
				video: {
					type: BlogVideoType.Single,
					source: "@videos/blogs/metro-sweets-bakery/item-selection.mp4",
				},
			},
			{
				type: BlogSectionType.Paragraph,
				text: "A key takeaway from this experience is recognizing the importance of adaptability and continuous learning in the dynamic field of UX/UI design. Embracing challenges and pushing creative boundaries are fundamental to fostering growth and innovation. Moving forward, I am excited to take on more projects, applying the lessons learned and exploring new opportunities for creativity and innovation.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/metro-sweets-bakery/app-on-phone.png",
					imageStyle: {
						width: "90%",
					},
				},
			},
		],
	},
	{
		id: "rajvosa-concept-store",
		position: 1,
		showOnLanding: true,
		title: "Rajvosa Concept Store",
		image: "@images/blogs/rajvosa-concept-store/showcase.png",
		colors: {
			navbar: "#792d1b",
			background: "#923721",
			primary: "#e1c7c7",
			secondary: "#e1c7c7",
			artworkBackground: "#bb3f14",
			artworkPrimary: "#0a0a0a",
			artworkSecondary: "#dddddd",
		},
		subtitles: [
			{
				type: BlogSubtitleType.Text,
				prefix: "Skills:",
				items: ["UX/UI Design", "Graphic Design"],
			},
			{
				type: BlogSubtitleType.Text,
				prefix: "Tools:",
				items: ["Figma", "Canva", "Adobe Photoshop"],
			},
			{
				type: BlogSubtitleType.Color,
				prefix: "Theme:",
				chips: {
					Background: "@artworkBackground",
					Primary: "@artworkPrimary",
					Secondary: "@artworkSecondary",
				},
			},
			{
				type: BlogSubtitleType.Link,
				prefix: "Links:",
				hideOnOverview: true,
				items: [
					{
						text: "Figma",
						url: "https://www.figma.com/file/n4WbWWZG7yR8FuwGpPj3aX/Untitled?type=design&node-id=0%3A1&mode=design&t=jnhEpX3A8s9IXIN3-1",
					},
				],
			},
		],
		sections: [
			{
				type: BlogSectionType.Paragraph,
				text: "This project began with a simple idea sparked by finding an old 1984 Olympics postcard. It got me thinking about our city's history and pride as a past Olympics host. I realized we could do more to showcase our city's charm and help tourists explore it better.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Problem Statement 🗒️",
				text: "Finding information about local attractions is a bit of a hassle. Review blogs aren't always reliable, and there's no central place to discover what our city has to offer. So, I set out to create a front page for a website that makes it easy for people to find fun stuff to do here.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Research and Ideation",
				text: "I looked at popular travel websites for inspiration and kept things straightforward. The front page had to be easy to use and look good. I decided to highlight four main categories: food, landmarks, local brands, and events, to give users a taste of what's available.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Design Process",
				text: "Using Figma, I kept the design clean and simple. A short blurb welcomes visitors, and big buttons guide them to different categories. It's all about making it inviting and easy to explore.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/rajvosa-concept-store/sketch.png",
				},
			},

			{
				type: BlogSectionType.Paragraph,
				text: "When creating this design, my aim was to capture a theme that reflects our city's rich history. As I already said, inspiration struck when I stumbled upon some vintage postcards from the '84 Olympic Games. Seeing the resemblance of the logo to the letter \"O,\" it clicked for me to incorporate it into my design. Thus, I named the site Rajvosa, a nod to the local nickname of our city, paying homage to our people's history and slang.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/rajvosa-concept-store/laptop-view.png",
					imageStyle: {
						width: "75%",
						sm: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				text: "I chose a color scheme of orange, black, and white because they are clean shades that complement the logo without overshadowing it. The orange hue was borrowed from the '84 Olympics, tying the design back to its roots. These three colors blend seamlessly and enhance the overall aesthetic without detracting from the text.",
				video: {
					type: BlogVideoType.Single,
					source: "@videos/blogs/rajvosa-concept-store/walkthrough.mp4",
				},
			},

			{
				type: BlogSectionType.Paragraph,
				title: "Implementation and Features",
				text: "Right now, the front page is just the start. It gives a sneak peek of what's to come ( curated lists of attractions and businesses), like interactive maps and user reviews, to make the experience even better.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/rajvosa-concept-store/meet-sarajevo.png",
					imageStyle: {
						width: "60%",
						sm: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Future Enhancements",
				text: "I'm excited to add more features like user reviews and partnerships with local businesses. The goal is to make the website a go-to resource for both tourists and locals.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Conclusion",
				text: "While the front page is just the beginning, I'm excited to see where this project goes. It's all about making it easier for people to explore and enjoy our city.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/rajvosa-concept-store/overview.png",
					imageStyle: {
						width: "90%",
						sm: {
							width: "100%",
						},
					},
				},
			},
		],
	},
	{
		id: "my-tribute-to-the-1984-winter-olympics",
		position: 2,
		showOnLanding: true,
		title: "My tribute to the 1984 winter olympics",
		image: "@images/blogs/my-tribute-to-the-1984-winter-olympics/showcase.png",
		colors: {
			navbar: "#6b8478",
			background: "#567565",
			primary: "#ebebe6",
			secondary: "#2e2d2d",
		},
		subtitles: [
			{
				type: BlogSubtitleType.Text,
				prefix: "Skills:",
				items: ["Graphic Design", "Photography"],
			},
			{
				type: BlogSubtitleType.Text,
				prefix: "Tools:",
				items: ["Adobe Photoshop", "Canva", "Canon 2000D"],
			},
			{
				type: BlogSubtitleType.Color,
				prefix: "Theme:",
				chips: {
					Background: "@background",
					Primary: "@primary",
					Secondary: "@secondary",
				},
			},
		],
		sections: [
			{
				type: BlogSectionType.Paragraph,
				title: "Description 📝",
				text: "I took a recent photo of Sarajevo and infused it with elements from a vintage postcard of the Sarajevo Olympics. It's a humble attempt to juxtapose the city's past and present in a nostalgic manner.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Inspiration 🧠",
				text: "Sarajevo's rich history, especially its role as an Olympic host, inspired me to create this piece. I wanted to capture the essence of both eras and create a bridge between them.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Process 🖌️",
				text: "I started with a photo I took of Sarajevo today. Then, I found a vintage postcard from the 1984 Olympics and selected a few iconic elements, like the Olympic official logo. Using basic editing tools, I carefully placed these elements onto the modern photo, trying to maintain a sense of harmony between the two time periods.",
				image: {
					type: BlogImageType.Gallery,
					containerStyle: {
						width: "100%",
					},
					source: [
						{
							original: "@images/blogs/my-tribute-to-the-1984-winter-olympics/process-original.png",
						},
						{
							original: "@images/blogs/my-tribute-to-the-1984-winter-olympics/process-b-w.png",
						},
						{
							original: "@images/blogs/my-tribute-to-the-1984-winter-olympics/process-vucko.png",
						},
					],
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Outcome 🖼️",
				text: "The result is a modest blend of past and present, evoking a sense of nostalgia for the Sarajevo of yesteryears. It's a small tribute to the city's history and its enduring spirit. I hope it resonates with those who have fond memories of the Olympics and those who cherish Sarajevo's journey over the years.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/my-tribute-to-the-1984-winter-olympics/final.png",
					imageStyle: {
						height: "40%",
						sm: {
							width: "100%",
						},
						xs: {
							width: "100%",
						},
					},
				},
			},
		],
	},
	{
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
			artworkSecondary: "#d1d1d1",
		},
		style: {
			// hr: {
			// 	marginBottom: "2rem",
			// },
		},
		subtitles: [
			{
				type: BlogSubtitleType.Text,
				prefix: "Skills:",
				items: ["Graphic Design", "Print Design"],
			},
			{
				type: BlogSubtitleType.Text,
				prefix: "Tools:",
				items: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
			},
			{
				type: BlogSubtitleType.Color,
				prefix: "Theme:",
				chips: {
					Background: "@artworkBackground",
					Primary: "@artworkPrimary",
					Secondary: "@artworkSecondary",
				},
			},
		],
		image: "@images/blogs/melodic-mix-a-custom-print-collaboration/showcase.png",
		sections: [
			{
				type: BlogSectionType.List,
				title: "Summary📝",
				items: [
					"Designed a custom print for a tote bag and hoodie featuring Billie Eilish, Taylor Swift, Olivia Rodrigo, and The Weeknd.Utilized Photoshop to merge images of the artists in a pop art style with vibrant colors.Incorporated iconic lyrics from each artist into the background of the design.Produced a bold and captivating print that personalized the client's love for their favorite musicians.",
					"Utilized Photoshop to merge images of the artists in a pop art style with vibrant colors.",
					"Incorporated iconic lyrics from each artist into the background of the design.",
					"Produced a bold and captivating print that personalized the client's love for their favorite musicians.",
				],
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/melodic-mix-a-custom-print-collaboration/final.png",
					imageStyle: {
						width: "80%",
						sm: {
							width: "100%",
						},
						xs: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Project Description 🎙️",
				text: "For this project, I was commissioned to create a custom print for a client who is a huge fan of Billie Eilish, Taylor Swift, Olivia Rodrigo, and The Weeknd. The client wanted the print to be featured on a tote bag and hoodie, showcasing all four artists in a unique and visually striking manner.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Brainstorming🧠",
				text: "During our meeting, the client and I came together to brainstorm and put our ideas on paper. We discussed their vision for the custom print, including their admiration for the 4 artists. Together, we sketched out concepts and exchanged thoughts to ensure we were aligned before proceeding with the design process.",
				image: {
					type: BlogImageType.Single,
					source: {
						url: "@images/blogs/melodic-mix-a-custom-print-collaboration/brainstorming.png",
						caption: "Original sketch and ideas",
					},
					imageStyle: {
						width: "80%",
						sm: {
							width: "100%",
						},
						xs: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Utilizing Photoshop for Image Merging and Editing ⌨️",
				text: "To bring this vision to life, I utilized Photoshop to merge elements from each artist's iconic imagery. I began by selecting high-quality images of Billie Eilish, Taylor Swift, Olivia Rodrigo, and The Weeknd. Then, I carefully cut out each artist from their respective images, ensuring precision and detail in the process.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Applying Pop Art Style and Vibrant Colors",
				text: "I applied a pop art style to each cutout, using vibrant colors of green, red, purple, and blue to create a dynamic and eye-catching effect. The pop art style lent a modern and energetic vibe to the design, perfectly reflecting the personalities and aesthetics of the artists.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/melodic-mix-a-custom-print-collaboration/artists.png",
					imageStyle: {
						width: "80%",
						sm: {
							width: "100%",
						},
						xs: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Incorporating Iconic Lyrics",
				text: "To further enhance the design, I incorporated iconic lyrics associated with each artist into the background of the pictures. This added layer of detail not only paid homage to the artists' music but also made the design more engaging and visually interesting.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/melodic-mix-a-custom-print-collaboration/songs.png",
					imageStyle: {
						width: "80%",
						sm: {
							width: "100%",
						},
						xs: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Finalizing the Layout for Tote Bag and Hoodie Design",
				text: "After refining the layout and composition, I carefully arranged the four artist cutouts and background elements into a cohesive design for both the tote bag and hoodie. The result was a bold and captivating print that celebrated the client's love for their favorite musicians in a unique and personalized way.",
				image: "@images/blogs/melodic-mix-a-custom-print-collaboration/hoodie.png",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Conclusion ✅",
				text: "In conclusion, the project resulted in a personalized print that reflects the client's appreciation for their favorite musicians. Through thoughtful design decisions, the final product serves as a unique expression of the client's passion for music, featured on a tote bag and hoodie.",
			},
		],
	},
	{
		id: "sunflower-postcard",
		position: 4,
		showOnLanding: true,
		title: "Sunflower🌻: Postcard",
		colors: {
			navbar: "#A49689",
			background: "#c2b1a1",
			primary: "#413736",
			secondary: "#e7ae00",
		},
		style: {
			// hr: {
			// 	marginBottom: "2rem",
			// },
		},
		subtitles: [
			{
				type: BlogSubtitleType.Text,
				prefix: "Skills:",
				items: ["Graphic Design", "Print Design", "Photography"],
			},
			{
				type: BlogSubtitleType.Text,
				prefix: "Tools:",
				items: ["Adobe Photoshop", "Adobe Illustrator", "Canon 2000D"],
			},
			{
				type: BlogSubtitleType.Color,
				prefix: "Theme:",
				chips: {
					Background: "@background",
					Primary: "@primary",
					Secondary: "@secondary",
				},
			},
		],
		image: "@images/blogs/sunflower-postcard/showcase.png",
		sections: [
			{
				type: BlogSectionType.Paragraph,
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/sunflower-postcard/overview.png",
					imageStyle: {
						width: "60%",
						md: {
							width: "80%",
						},
						xs: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				text: {
					style: {
						marginTop: 0,
					},
					content:
						"This postcard holds a special place in my heart as it's a personal project created with love for her, a dear friend who shares a passion for travel and adores sunflowers. Inspired by her adventurous spirit and love for nature's beauty, I crafted this design to evoke the warmth of sunny days and the joy of exploring new horizons. It's a heartfelt reminder of the sunshine she brings into my life and the endless possibilities that await her on her journey.",
				},
				image: {
					type: BlogImageType.Group,
					containerStyle: {
						display: "flex",
						justifyContent: "space-between",
						gap: "5rem",
						md: {
							gap: "1rem",
						},
					},
					source: [
						"@images/blogs/sunflower-postcard/postcard-front.png",
						"@images/blogs/sunflower-postcard/postcard-back.png",
					],
				},
			},
			{
				type: BlogSectionType.Paragraph,
				text: "This postcard, created with Photoshop, is a delightful mix of digital art and photography. Featuring a lovely photo of a girl set against a backdrop of painted sunflowers, it gives off a relaxed and cheerful vibe. The playful integration of the painted sunflowers with the photo adds a whimsical touch, perfect for sending warm wishes or brightening someone's day. With its laid-back charm, this postcard captures the essence of a sunny summer afternoon.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/sunflower-postcard/showcase.png",
					imageStyle: {
						lg: {
							width: "70%",
						},
						sm: {
							width: "100%",
						},
					},
				},
			},
		],
	},
	{
		id: "custom-week-planner-project",
		position: 5,
		showOnLanding: true,
		title: "Custom Week Planner Project 🗒️",
		colors: {
			navbar: "#8d786f",
			background: "#988278",
			primary: "#efefef",
			secondary: "#8d786f",
			artworkBackground: "#cce1e8",
			artworkPrimary: "#c5805e",
			artworkSecondary: "#c9b6b4",
		},
		subtitles: [
			{
				type: BlogSubtitleType.Text,
				prefix: "Skills:",
				items: ["Graphic Design", "Print Design"],
			},
			{
				type: BlogSubtitleType.Text,
				prefix: "Tools:",
				items: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
			},
			{
				type: BlogSubtitleType.Color,
				prefix: "Theme:",
				chips: {
					Background: "@artworkBackground",
					Primary: "@artworkPrimary",
					Secondary: "@artworkSecondary",
				},
			},
		],
		image: {
			url: "@images/blogs/custom-weekly-planner/showcase.png",
			style: {
				transform: "translateY(10%)",
			},
		},
		sections: [
			{
				type: BlogSectionType.Paragraph,
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/custom-weekly-planner/banner.png",
					imageStyle: {
						width: "100%",
						height: "100%",
					},
				},
			},
			{
				type: BlogSectionType.List,
				title: "Summary 📝",
				items: [
					"Developed a custom week planner for a client seeking a professional design with playful animal characters and a light blue color scheme.Utilized Photoshop and Canva to curate charming design elements and adjust details.Maintained constant communication with the client, regularly sharing progress updates and seeking feedback.Collaborated with the client to refine the design until it met their expectations.",
					"Utilized Photoshop and Canva to curate charming design elements and adjust details.",
					"Maintained constant communication with the client, regularly sharing progress updates and seeking feedback.",
					"Collaborated with the client to refine the design until it met their expectations.",
				],
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Project Description ✍🏼",
				text: "The task assigned to me was to develop a custom week planner for a client who desired a professional yet engaging design. Their specific requirements included incorporating playful animal characters and a light blue color scheme to emphasize a relaxed ambiance.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Work Process 🖌️",
				text: "While I didn't create the animal illustrations myself, I carefully selected charming designs that aligned with the client's vision. These characters became central to the planner's aesthetic, adding a touch of whimsy to its functionality. I deliberately chose a light blue color palette, which promotes a sense of calmness and coherence throughout the design.",
				image: {
					type: BlogImageType.Single,
					source: "@images/blogs/custom-weekly-planner/overview.png",
					imageStyle: {
						width: "80%",
						height: "80%",
						sm: {
							width: "100%",
						},
					},
				},
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Communication with client 💬",
				text: "Throughout the project, I maintained constant communication with the client, regularly sharing progress updates and seeking feedback to ensure the project remained on track. Through collaborative refinement, we iteratively adjusted elements until we reached a final design that exceeded the client's expectations.",
			},
			{
				type: BlogSectionType.Paragraph,
				title: "Conclusion ✍🏼",
				text: "Ultimately, the completed week planner successfully balanced professionalism with creativity, providing a visually appealing and functional organizational tool. ",
			},
		],
	},
];
