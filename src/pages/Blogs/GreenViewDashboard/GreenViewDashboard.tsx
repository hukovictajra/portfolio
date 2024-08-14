import Text from "@elements/Text/Text";
import Title from "@elements/Title/Title";
import { Image } from "@elements/Image/Image";
import { GreenViewDashboardData } from "./data";
import Subtitle from "@elements/Subtitle/Subtitle";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { List, ListItem } from "@elements/List/List";
import Paragraph from "@elements/Paragraph/Paragraph";
import { Overview } from "@elements/Overview/Overview";
import { BlogSection } from "@elements/BlogSection/BlogSection";
import { ImageGallery } from "@elements/ImageGallery/ImageGallery";

export default function GreenViewDashboard() {
	const { title, subtitles, colors } = GreenViewDashboardData;

	return (
		<BlogPage blogData={GreenViewDashboardData}>
			<Title>{title}</Title>
			<Overview subtitles={subtitles} colors={colors} />

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
					Dark Mode: The background is navy blue, with a white and green gradient as the accent
					color. Text is displayed in white to maintain readability.
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
					dotImageClassName="h-[250px]"
					source={[
						{
							url: "@images/blogs/green-view-dashboard/graphs/all.png",
							className: "h-[500px] w-[800px] md:h-[350px] md:w-[550px] xs:h-[200px] xs:w-[300px]"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/volume-in-service-level.png",
							className: "h-[400px] w-[450px] md:h-[300px] md:w-[300px] xs:h-[250px] xs:w-[250px]"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/customer-satisfaction.png",
							className: "h-[400px] w-[450px] md:h-[300px] md:w-[300px] xs:h-[250px] xs:w-[250px]"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/sales-mapping-by-country.png",
							className: "h-[400px] w-[450px] md:h-[300px] md:w-[300px] xs:h-[250px] xs:w-[250px]"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/visitor-insights.png",
							className: "h-[500px] w-[800px] md:h-[350px] md:w-[550px] xs:h-[200px] xs:w-[300px]"
						},
						{
							url: "@images/blogs/green-view-dashboard/graphs/top-products.png",
							className: "h-[500px] w-[800px] md:h-[350px] md:w-[550px] xs:h-[200px] xs:w-[300px]"
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
					className="h-[400px] w-[700px] md:h-[350px] md:w-[550px] xs:h-[200px] xs:w-[300px]"
					modalClassName="h-[600px] w-[900px] md:h-[350px] md:w-[550px] xs:h-[200px] xs:w-[300px]"
					source="@images/blogs/green-view-dashboard/wireframe.png"
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
							className: "h-[400px] md:h-[350px] md:w-[550px] xs:h-[200px] xs:w-[300px]",
							url: "@images/blogs/green-view-dashboard/light-mode-showcase.png"
						},
						{
							className: "h-[400px] md:h-[350px] md:w-[550px] xs:h-[200px] xs:w-[300px]",
							url: "@images/blogs/green-view-dashboard/dark-mode-showcase.png"
						}
					]}
				/>
			</BlogSection>
		</BlogPage>
	);
}
