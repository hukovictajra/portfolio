import Text from "@elements/Text/Text";
import { getTitle } from "@utils/utils";
import Title from "@elements/Title/Title";
import { Image } from "@elements/Image/Image";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { List, ListItem } from "@elements/List/List";
import Paragraph from "@elements/Paragraph/Paragraph";
import { TagSection } from "@elements/TagSection/TagSection";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import FigmaEmbededFrame from "@elements/FigmaEmbededFrame/FigmaEmbededFrame";
import { DashboardData } from "./data";
import Medium from "@elements/Medium/Medium";

export function Dashboard() {
	const { title, tags, colors } = DashboardData;

	return (
		<BlogPage blogData={DashboardData} title="Dashboard">
			<Title>{getTitle(title)}</Title>
			<TagSection tags={tags} colors={colors} />

			<div className="hr" />

			<BlogSection title="Introduction">
				<Paragraph>
					The goal of this project was to create a user-friendly dashboard that combines
					functionality and aesthetic appeal. Designed with a light and neutral color palette 🎨,
					the dashboard prioritizes readability, efficiency ⚡, and user engagement 🎯. It offers a
					structured layout while giving users significant control over customization and use.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Initial Concept and Purpose">
				<Paragraph className="mb-4">
					The initial idea behind this dashboard was to provide users with complete freedom over its
					style, type, and functionality. Users can create an unlimited number of dashboards, which
					are accessible from the left-side menu. These dashboards can serve various purposes—from
					simple money-tracking systems to stock management or even company reporting.
				</Paragraph>

				<Paragraph>
					Widgets are placed and organized based on the user's preferences, ensuring that the
					dashboard adapts to their specific needs. While the future vision includes color
					customizability, the current version focuses on neutral, readable tones. This approach
					ensures clarity and establishes a hierarchy while presenting the dashboard's functionality
					effectively.
				</Paragraph>
			</BlogSection>

			<BlogSection title="Wireframe to Final Version">
				<Paragraph>
					The project began with a wireframe to outline the layout and core features. This initial
					structure provided a foundation for refining usability and aesthetics. Key elements were
					placed as well as the widget layout.
				</Paragraph>

				<Image source="@images/blogs/dashboard/wireframe.png" />
			</BlogSection>
			<BlogSection title="Core Functionalities">
				<List>
					<ListItem>
						<Medium> Unlimited Dashboards: </Medium> Users can create and customize multiple
						dashboards tailored to their needs.
					</ListItem>
					<ListItem>
						<Medium> Widget Placement Freedom: </Medium>
						Users can position widgets as they prefer, allowing for a highly personalized
						experience.
					</ListItem>
					<ListItem>
						<Medium> Data Overview Cards: </Medium>
						Offer quick summaries of essential metrics.
					</ListItem>
					<ListItem>
						<Medium> Interactive Tables: </Medium>
						Simplify detailed record management.
					</ListItem>
					<ListItem>
						<Medium> Progress Trackers: </Medium>
						Provide visual indicators for task monitoring.
					</ListItem>
					<ListItem>
						<Medium> Performance Visualizations: </Medium>
						Use bar charts and radial progress bars for comparative analysis.
					</ListItem>
					<ListItem>
						<Medium> Real-Time Status Indicators: </Medium>
						Keep users updated on ongoing processes.
					</ListItem>
				</List>
			</BlogSection>
			<BlogSection title="Widgets">
				<Paragraph>
					The widgets in this dashboard have been thoughtfully designed to align with a consistent
					grid system, ensuring all sizes are even and maintain a structured appearance. This
					approach enhances visual balance and guarantees seamless placement, regardless of the
					user's preferences.
				</Paragraph>

				<Text>
					The initial collection includes the most commonly used widgets, tailored to suit diverse
					needs:
				</Text>

				<List>
					<ListItem>
						<Medium>Data Overview Cards: </Medium> Compact widgets providing quick summaries of key
						metrics such as revenue, profit, costs, and shipments, designed for at-a-glance updates.
					</ListItem>
					<ListItem>
						<Medium>Interactive Tables: </Medium>
						Detailed yet neatly organized widgets allowing users to manage records effectively, with
						editable rows and action buttons for real-time updates.
					</ListItem>
					<ListItem>
						<Medium>Progress Trackers: </Medium>
						Horizontal progress bars designed to monitor task completion levels, featuring subtle
						gradients or colors to indicate progress stages.
					</ListItem>
					<ListItem>
						<Medium>Performance Visualizations: </Medium>
						Bar charts and radial progress bars that present comparative analysis, offering insights
						into weekly or monthly trends.
					</ListItem>
					<ListItem>
						<Medium>Status Indicators: </Medium>
						Real-time indicators using simple icons or labels to display ongoing task statuses, such
						as "processing," "shipped," or "delivered."
					</ListItem>
				</List>

				<Text>
					These widgets provide essential functionality while adhering to the clean, readable
					aesthetic of the dashboard. Future updates may introduce additional widget options,
					allowing for further customization and adaptability to user needs.
				</Text>

				<Image source="@images/blogs/dashboard/widgets.png" />
			</BlogSection>

			<BlogSection title="Design Choices">
				<Text>
					The neutral color palette enhances readability and maintains a professional look while
					reducing visual strain. The structured layout ensures information is easy to locate 🔍,
					and minimalist typography and icons support the clean design. These choices align with the
					goal of showcasing functionality while setting a visual hierarchy.
				</Text>
			</BlogSection>

			<BlogSection title="Design rationale">
				<Paragraph>
					While the current version emphasizes functionality, future iterations aim to introduce
					color customization options for widgets and dashboards. This enhancement will give users
					even greater control over the design and ensure the dashboard continues to meet evolving
					needs.
				</Paragraph>
				<Image source="@images/blogs/dashboard/dashboard.png" />
			</BlogSection>

			<BlogSection title="Conclusion">
				<Paragraph>
					This dashboard offers users a tools to create highly personalized and functional
					workspaces. Its intuitive design and adaptable features make it a valuable asset for
					various tasks, from personal finance tracking to corporate reporting.
				</Paragraph>
			</BlogSection>

			<BlogSection>
				<Image source="@images/blogs/dashboard/laptop.png" />
			</BlogSection>

			<BlogSection title="Figma project">
				<FigmaEmbededFrame src="https://embed.figma.com/design/3j3rkyK8VJzdDVIpP5ujZm/Dasboard-(Community)?node-id=1-1066&embed-host=share" />
			</BlogSection>
		</BlogPage>
	);
}
