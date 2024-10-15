import Text from "@elements/Text/Text";
import { getTitle } from "@utils/utils";
import Title from "@elements/Title/Title";
import { Image } from "@elements/Image/Image";
import { GreenviewDashboardData } from "./data";
import Subtitle from "@elements/Subtitle/Subtitle";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { List, ListItem } from "@elements/List/List";
import Paragraph from "@elements/Paragraph/Paragraph";
import { TagSection } from "@elements/TagSection/TagSection";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import { ImageGallery } from "@elements/ImageGallery/ImageGallery";
import FigmaEmbededFrame from "@elements/FigmaEmbededFrame/FigmaEmbededFrame";

export function GreenviewDashboard() {
	const { title, tags, colors } = GreenviewDashboardData;

	return (
		<BlogPage blogData={GreenviewDashboardData} title="Greenview Dashboard">
			<Title>{getTitle(title)}</Title>
			<TagSection tags={tags} colors={colors} />

			<div className="hr" />

			<BlogSection title="Dashboard">
				<Paragraph>
					For this project, I created a dashboard aimed at enhancing the management and operational
					efficiency of a green company. The design inspiration came from various modern UI patterns
					and best practices observed in existing dashboards, which I tailored to fit the unique
					branding and user requirements of the green company.
				</Paragraph>

				<Image source="@images/blogs/green-view-dashboard/dashboards-white.png" />
			</BlogSection>

			<BlogSection title="Color Scheme and Themes">
				<Image
					source="@images/blogs/green-view-dashboard/gradient.png"
					className="rounded-lg md:rounded-md sm:rounded-sm xs:rounded-sm"
					modalClassName="!bg-white"
				/>

				<Text className="mb-4">The dashboard features two themes: light mode and dark mode.</Text>

				<List>
					<ListItem>
						Light Mode: The background is white, with a green gradient used as an accent color. Navy
						blue is used for text to provide a clear and pleasant contrast.
					</ListItem>
					<ListItem>
						Dark Mode: The background is navy blue, with a white and green gradient as the accent
						color. Text is displayed in white to maintain readability.
					</ListItem>
				</List>

				<Text className="mt-4">
					These color choices ensure that the dashboard is visually appealing, maintains brand
					consistency, and is accessible in both lighting conditions. I decided on the navy and
					green contrast to create a professional and calming aesthetic that aligns with the
					company's green and sustainable ethos. The navy blue provides a strong, stable background,
					while the green accents reinforce the environmental focus of the company.
				</Text>
			</BlogSection>

			<BlogSection title="Typography">
				<Paragraph>
					For typography, I chose the Poppins font in different font weight variants. I find this
					font simple and easy to read, making it an ideal choice for a dashboard where users need
					to quickly digest information. By using Poppins, I aimed to ensure that the text is clear
					and legible, reducing eye strain for users who spend extended periods working with the
					dashboard.
				</Paragraph>

				<Image source="@images/blogs/green-view-dashboard/fonts.png" modalClassName="!bg-white" />
			</BlogSection>

			<BlogSection title="Layout and Navigation">
				<Paragraph>
					To facilitate ease of use and intuitive navigation, the dashboard includes the following
					elements:
				</Paragraph>

				<Subtitle>Sidebar</Subtitle>
				<div className="flex flex-row gap-8 md:flex-col">
					<List>
						<ListItem>
							Minimizable: Users can expand or minimize the side menu for more screen space.
						</ListItem>
						<ListItem>
							Menu Options: Includes Leaderboard, Orders, Products, Sales Report, Messages,
							Settings, and Sign Out options.
						</ListItem>
						<ListItem>Additional Features: Language changer for multilingual support.</ListItem>
						<ListItem>
							Design Goal: My goal for the side menu was to keep the design simple and intuitive. As
							the saying goes, don't fix something that isn't broken. Since this dashboard will be
							used by the employees of the company, I only included information that would be useful
							to a working employee.
						</ListItem>
					</List>
					<Image
						source="@images/blogs/green-view-dashboard/sidebars.png"
						className="md:h-[50%]"
						modalClassName="h-screen p-64"
					/>
				</div>

				<Subtitle>Navbar</Subtitle>

				<List>
					<ListItem>Search Bar: Enables quick searches within the dashboard.</ListItem>
					<ListItem>Admin Profile: Provides easy access to user profile settings.</ListItem>
					<ListItem>
						Notification Bell: Alerts users to important updates and notifications
					</ListItem>
					<ListItem>
						Dark/Light Mode Toggle: Allows users to switch between light and dark modes for better
						user experience.
					</ListItem>
				</List>

				<Image source="@images/blogs/green-view-dashboard/navbar.png" />
			</BlogSection>
			<BlogSection title="Widgets and Metrics">
				<Text>
					The dashboard includes several key widgets that display important statistics and metrics:
				</Text>

				<List>
					<ListItem>Total Revenues: Displays the overall revenue generated.</ListItem>
					<ListItem>Today's Sales: Shows sales figures for the current day.</ListItem>
					<ListItem>
						Customer Satisfaction: Measures and displays customer satisfaction levels.
					</ListItem>
					<ListItem>Sales Mapping: Visualizes sales distribution geographically.</ListItem>
					<ListItem>
						Target vs. Realized Volume: Compares projected sales targets with actual sales figures.
					</ListItem>
					<ListItem>
						Volume vs. Service: Tracks the balance between sales volume and service efficiency.
					</ListItem>
					<ListItem>Visitor Insights: Provides data on website or store visitors.</ListItem>
					<ListItem>Top Products: Lists the best-selling products.</ListItem>
				</List>

				<Text>
					These widgets are designed to provide a comprehensive overview of the company's
					performance, making it easier for users to access vital information at a glance.
				</Text>

				<ImageGallery
					source={[
						{
							url: "@images/blogs/green-view-dashboard/graphs/all.png"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/volume-in-service-level.png"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/customer-satisfaction.png"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/sales-mapping-by-country.png"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/visitor-insights.png"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/top-products.png"
						}
					]}
				/>
			</BlogSection>
			<BlogSection title="Additional Page: User Information Table">
				<Text>
					The dashboard includes a second page dedicated to displaying user information in a tabular
					format. This table includes the following columns:
				</Text>

				<List>
					<ListItem>Customer Name: The name of the customer.</ListItem>
					<ListItem>Company: The company the customer is associated with.</ListItem>
					<ListItem>Country: The country of the customer.</ListItem>
					<ListItem>Email: The customer's email address.</ListItem>
					<ListItem>Phone Number: The customer's phone number.</ListItem>
					<ListItem>
						Activity Status: Indicates whether the customer is currently active or inactive.
					</ListItem>
				</List>

				<Text>
					This page is designed to help the company keep track of customer information efficiently,
					providing a centralized view of key customer details.
				</Text>

				<Image source="@images/blogs/green-view-dashboard/customers-table.png" />
			</BlogSection>

			<BlogSection title="Design process">
				<Text>
					I started with a simple wireframe that captured the overall feel of the future design. I
					knew I wanted to include a navbar and a minimizable side menu, so it was important for me
					to decide on the overall possible placement of future widgets early on.
				</Text>

				<Image
					source="@images/blogs/green-view-dashboard/wireframe.png"
					className="h-[75%] w-[75%]"
				/>

				<Text>
					For widgets in the wireframing phase, I focused on ensuring they would be easy on the eyes
					and direct in presenting information. For widget content, I drew inspiration from various
					online examples, selecting elements that best fit the needs of the dashboard.
				</Text>
			</BlogSection>
			<BlogSection title="Design rationale">
				<Paragraph>
					The primary goal of the design was to create a dashboard that is not only functional but
					also user-friendly and visually appealing. By incorporating a responsive layout, the
					dashboard ensures that users can efficiently navigate through various sections and access
					the information they need quickly. The inclusion of dark and light modes caters to
					different user preferences and environmental conditions, enhancing overall usability.
				</Paragraph>

				<Paragraph>
					The side menu and navbar are strategically designed to maximize screen real estate while
					providing quick access to essential features and settings. The color scheme reinforces the
					green company's brand identity, promoting a sense of sustainability and environmental
					consciousness.
				</Paragraph>

				<Paragraph>
					The additional user information table provides a detailed view of customer data, allowing
					the company to manage and analyze customer interactions effectively.
				</Paragraph>
			</BlogSection>
			<BlogSection title="Final Product">
				<ImageGallery
					source={[
						{
							url: "@images/blogs/green-view-dashboard/light-mode-showcase.png"
						},
						{
							url: "@images/blogs/green-view-dashboard/dark-mode-showcase.png"
						}
					]}
				/>
			</BlogSection>

			<BlogSection title="Figma project">
				<FigmaEmbededFrame src="https://embed.figma.com/design/dANTtMCoulSaxHv2IzLEO6/Dashboard?node-id=0-1&embed-host=share" />
			</BlogSection>
		</BlogPage>
	);
}
