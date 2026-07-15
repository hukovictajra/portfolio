import { useEffect } from "preact/hooks";
import { GoalSection } from "../../components/Goal/GoalSection";
import { BarSection } from "../../components/Bar/BarSection";
import { LightboxGallery, SingleImageLightbox } from "../../components/Lightbox";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";
import { WireframingSection } from "../../components/Wireframing/WireframingSection";
import { UiElementsSection } from "../../components/UiElements/UiElementsSection";
import { DescriptionSection } from "../../components/Description/DescriptionSection";
import { CustomSection } from "../../components/CustomSection/CustomSection";
import { FigmaEmbed } from "../../components/FigmaEmbed";

import "./Vitta.css";

export function Vitta() {
	useEffect(() => {
		document.querySelectorAll(".ui-elements-color-sample").forEach((element) => {
			element.classList.add("cursor-breakpoint");
		});
	}, []);

	return (
		<main id="vitta">
			<ProjectHeader
				title="vitta."
				subtitle="Vitta is a simple diet tracking and fasting app designed to combine multiple functions in one place. Inspired by the challenge of using multiple apps to track fasting, diet, and recipes, Vitta focuses on simplicity and ease of use. With a clean interface, soft color palette, and intuitive navigation, users can access key features in just two clicks, making tracking their diet effortless and stress free."
				chips={[
					{ title: "Role", content: "UX/UI Designer" },
					{ title: "Employer", content: "Personal Project" },
					{ title: "Tools", content: "Figma" },
					{
						title: "Links",
						content: {
							label: "Figma",
							href: "https://www.figma.com/design/GLl2tRPyMICP1PNcqjrbKN/Vitta-Project?node-id=1-15154&t=B4VNn6yla1izu2US-1",
						},
					},
				]}
			/>

			<GoalSection src="/portfolio/images/projects/vitta/goal.png">
				<p>
					The goal of this project is to engage in self-reflection and enhance existing skills to
					create a more balanced app with a consistent and cohesive user experience. The app should
					prioritize simplicity, cleanliness, and intuitive navigation to ensure users can interact
					with it effortlessly.
				</p>
			</GoalSection>

			<DescriptionSection>
				<div className="flex flex-col gap-4">
					<p>
						Vitta is a diet tracking and fasting app that brings multiple health tools into one
						simple place.
					</p>

					<p>
						The idea started as a personal project inspired by my dad. He was using one app for
						fasting, another to check if food was keto-friendly, and his calendar to save recipes. I
						realized this could be simplified.
					</p>

					<p>
						After the initial design, feedback and self-reflection revealed several areas for
						improvement. The design lacked consistency across screens, some layouts felt flat, and
						important information was not always easily visible. Some features, such as the
						calendar, were underutilized because they offered little actionable insight. The
						redesign focused on improving hierarchy, visibility of progress, and overall cohesion
						across the app, while maintaining the original focus on simplicity and clarity.
					</p>
				</div>
			</DescriptionSection>

			<BarSection>
				<p>Before designing, I talked to people who use diet and fasting apps.</p>

				<div>
					<p>I noticed a few common problems:</p>

					<ul>
						<li>Apps had too many features</li>
						<li>Too many ads and blog content</li>
						<li>Too many steps to do simple tasks</li>
						<li>The main features were hard to find</li>
					</ul>
				</div>

				<div>
					<p>Many users just wanted to:</p>

					<ul>
						<li>Track their fasting</li>
						<li>Log their meals</li>
						<li>See their progress</li>
					</ul>
				</div>

				<p>So I focused on removing distractions and keeping only what matters.</p>
			</BarSection>

			<WireframingSection>
				<div>
					<p>
						When wireframing, I started by listing all the screens I thought I would need: main
						screen, login, register, and individual feature pages.
					</p>

					<p>
						Through this process, I realized that not every screen was necessary. To keep things
						streamlined, I decided to focus only on the main screen and not build unnecessary
						variations at this stage.
					</p>
				</div>
				<div>
					<section id="wireframing-image">
						<LightboxGallery
							images={[
								"/portfolio/images/projects/vitta/wireframe/wireframe-1.png",
								"/portfolio/images/projects/vitta/wireframe/wireframe-2.png",
								"/portfolio/images/projects/vitta/wireframe/wireframe-3.png",
								"/portfolio/images/projects/vitta/wireframe/wireframe-4.png",
								"/portfolio/images/projects/vitta/wireframe/wireframe-5.png"
							]}
							className="cursor-breakpoint w-full"
						/>
					</section>
				</div>
			</WireframingSection>

			<UiElementsSection
				typography={{
					fontName: "Inter",
					fontUrl: "https://fonts.google.com/specimen/Inter",
					fontClass: "inter"
				}}
				colors={["#FFFFFF", "#020202", "#5DADE2", "#7DCFB6", "#F6D365", "#FF9B85"]}
			>
				<p>
					The visual identity of the app was shaped by its name, Vitta, which means life in Italian.
					Combined with the Pacifico font, it gave the design a light, approachable, and easy going
					feel.
				</p>

				<p>
					I selected a clean UI style with a soft and bright color palette to reinforce this sense
					of simplicity and calmness.
				</p>
			</UiElementsSection>

			<CustomSection title="Previous version" id="vitta-previous-version">
				<section id="previous-version-images">
					<LightboxGallery
						images={[
							"/portfolio/images/projects/vitta/ui-elements/ui-1.png",
							"/portfolio/images/projects/vitta/ui-elements/ui-2.png",
							"/portfolio/images/projects/vitta/ui-elements/ui-3.png",
							"/portfolio/images/projects/vitta/ui-elements/ui-4.png",
							"/portfolio/images/projects/vitta/ui-elements/ui-5.png",
							"/portfolio/images/projects/vitta/ui-elements/ui-6.png",
							"/portfolio/images/projects/vitta/ui-elements/ui-7.png"
						]}
						galleryMaxHeight="400px"
						className="cursor-breakpoint"
					/>
				</section>
			</CustomSection>

			<CustomSection title="Reflection - Why I Redesigned It" id="vitta-reflection">
				<p>After finishing the first version, I stepped back and reviewed it.</p>

				<div>
					<p>I noticed:</p>

					<ul>
						<li>Some screens felt flat</li>
						<li>Important information was not very visible</li>
						<li>The home screen focused too much on actions, not progress</li>
						<li>The calendar did not offer enough value</li>
						<li>The design lacked consistency</li>
					</ul>
				</div>

				<p>I realized I could improve it without making it more complex. So I redesigned it.</p>
			</CustomSection>

			<CustomSection title="Account Setup & Onboarding">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row gap-4">
						<div className="flex gap-4 w-1/2">
							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/account-setup-onboarding/account-setup-onboarding-1.png"
								alt="Account Setup & Onboarding 1"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
							/>
							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/account-setup-onboarding/account-setup-onboarding-2.png"
								alt="Account Setup & Onboarding 2"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
							/>
						</div>

						<div className="flex flex-col gap-8 w-1/2">
							<p>
								The first version did not focus much on personalization. In the redesign, I added
								onboarding. New users without an existing account go through an onboarding process
								that collects information to personalize the experience. This information allows the
								app to provide tailored recommendations and calculations. Users can skip this
								process, but skipping reduces personalization and limits the effectiveness of
								features such as fasting suggestions and nutritional insights. The onboarding flow
								was designed to be clear and simple, with a structured sequence of questions and the
								option to skip or return later.
							</p>

							<div>
								<p className="font-medium">New users answer questions about:</p>

								<ul>
									<li>Height</li>
									<li>Weight</li>
									<li>Age</li>
									<li>Activity level</li>
									<li>Workout routine</li>
									<li>Diet preferences</li>
									<li>Allergies</li>
									<li>Fasting goals</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={`section-title font-medium`}>All screens</div>

						<section id="vitta-all-screens-images">
							<LightboxGallery
								images={[
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-1-user-information.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-2-start.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-3-language.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-4-chose-language.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-5-chosen-language.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-6-preferences-body-measurements.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-7-activity-level.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-8-activity-level-chosen.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-9-workout-regime.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-10-dietary-preferences.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-11-allergies-restrictions.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-12-goal-setting.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-13-fasting-experience.png",
									"/portfolio/images/projects/vitta/account-setup-onboarding/screens/account-setup-onboarding-14-finish.png"
								]}
								galleryMaxHeight="500px"
								className="cursor-breakpoint"
							/>
						</section>
					</div>
				</div>
			</CustomSection>

			<CustomSection title="Welcome & Login" id="vitta-welcome-login">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row gap-4">
						<div className="flex gap-4 w-1/2">
							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/welcome-login/welcome-login-1.png"
								alt="Welcome & Login"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="Previous"
							/>

							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/welcome-login/welcome-login-2.png"
								alt="Welcome & Login"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="New"
							/>
						</div>

						<div className="flex flex-col gap-8 w-1/2">
							<p>
								The welcome screen was simplified to reduce complexity. It features the app logo, a
								soft background, and two clear actions: log in or sign up. Visual refinements such
								as improved spacing and button roundness enhance touch targets and hierarchy. These
								changes make the first interaction more approachable and guide users quickly to
								account creation or login.
							</p>
							<p>
								Spacing and button sizes were improved to make everything easier to tap and read.
								The goal was to make the first interaction feel smooth and welcoming.
							</p>
							<p>The welcome screen is now cleaner and more focused.</p>
							<div>
								<p className="font-medium">It includes:</p>
								<ul>
									<li>App logo</li>
									<li>Soft background</li>
									<li>Log In button</li>
									<li>Sign Up button</li>
									<li>Continue with Apple</li>
									<li>Continue with Google</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={`section-title font-medium`}>All screens</div>

						<section id="vitta-all-screens-images">
							<LightboxGallery
								images={[
									"/portfolio/images/projects/vitta/welcome-login/screens/welcome-login-1-preload.png",
									"/portfolio/images/projects/vitta/welcome-login/screens/welcome-login-2-login.png",
									"/portfolio/images/projects/vitta/welcome-login/screens/welcome-login-3-register.png"
								]}
								galleryMaxHeight="500px"
								className="cursor-breakpoint"
							/>
						</section>
					</div>
				</div>
			</CustomSection>

			<CustomSection title="Profile & Settings" id="vitta-profile-settings">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row gap-4">
						<div className="flex gap-4 w-1/2">
							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/navigation-profile/navigation-profile-1.png"
								alt="Profile & Settings"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
							/>

							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/navigation-profile/navigation-profile-2.png"
								alt="Profile & Settings"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
							/>
						</div>

						<div className="flex flex-col gap-8 w-1/2">
							<p>
								A persistent bottom navigation bar appears on all main screens, allowing quick
								access to Home, Food Diary, Fast Time, Profile, and Calendar. This ensures that
								users can move between core features efficiently.
							</p>
							<p>
								The Profile screen provides a clear overview of personal information, including
								name, age, height, weight, dietary preferences, allergies, and workout routine. The
								settings icon leads to additional options such as notifications, privacy, help, and
								feedback. This separation allows users to quickly review their information while
								providing easy access to customization and management tools.
							</p>

							<div className="flex gap-8">
								<div>
									<p className="font-medium">The Profile screen shows:</p>
									<ul>
										<li>Personal data</li>
										<li>Diet preferences</li>
										<li>Allergies</li>
										<li>Workout routine</li>
									</ul>
								</div>

								<div>
									<div>
										<p className="font-medium">Settings include:</p>
										<ul>
											<li>Notifications</li>
											<li>Privacy</li>
											<li>Help</li>
											<li>Feedback</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={`section-title font-medium`}>All screens</div>

						<section id="vitta-nav-screens-images">
							<LightboxGallery
								images={[
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-1.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-2.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-3.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-4.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-5.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-6.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-7.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-8.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-9.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-10.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-11.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-12.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-13.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-14.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-15.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-16.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-17.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-18.png",
									"/portfolio/images/projects/vitta/navigation-profile/screens/navigation-profile-19.png"
								]}
								galleryMaxHeight="500px"
								className="cursor-breakpoint"
							/>
						</section>
					</div>
				</div>
			</CustomSection>

			<CustomSection title="Home Screen - Focus on Progress" id="vitta-home-screen">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row gap-4">
						<div className="flex gap-4 w-1/2">
							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/home-screen/home-screen-1.png"
								alt="Home Screen"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="Previous"
							/>

							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/home-screen/home-screen-2.png"
								alt="Home Screen"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="New"
							/>
						</div>

						<div className="flex flex-col gap-8 w-1/2">
							<p>
								The home screen was redesigned to focus on progress instead of action selection.
								Rather than choosing from large action cards, users now immediately see key daily
								metrics like water, steps, calories, sleep, and fasting status. Circular progress
								indicators make performance clear at a glance and create a sense of achievement.
							</p>
							<p>
								Meal logging is integrated directly into the home screen for faster tracking, and
								the fasting timer appears only when active for a cleaner experience. Improved visual
								hierarchy, typography, and color grouping guide attention from key metrics to
								actions, reducing friction and minimizing unnecessary navigation.
							</p>

							<div>
								<p className="font-medium">
									In the first version, users had to choose what they wanted to do before seeing any
									data. Now, the home screen immediately shows:
								</p>
								<ul>
									<li>Water intake</li>
									<li>Steps</li>
									<li>Calories</li>
									<li>Sleep</li>
									<li>Fasting status</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</CustomSection>

			<CustomSection title="Calendar - More Than Just a Tracker" id="vitta-calendar">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row gap-4">
						<div className="flex gap-4 w-1/2">
							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/calendar/calendar-1.png"
								alt="Calendar"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="Previous"
							/>

							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/calendar/calendar-2.png"
								alt="Calendar"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="New"
							/>
						</div>

						<div className="flex flex-col gap-8 w-1/2">
							<p>
								The calendar evolved from a simple fasting status tracker into a more comprehensive
								progress overview. Previously, it only marked fasting days, limiting engagement and
								insight. The redesigned version now presents a daily summary that includes meals,
								water intake, steps, weight, fasting tags, and macro progress, giving users a
								clearer picture of their overall habits.
							</p>
							<p>
								Dates are color-coded to highlight patterns and consistency over time. When a user
								taps on a specific date, a detailed view appears with in-depth information and the
								option to log data retroactively if something was missed. This redesign shifts the
								calendar from basic tracking to a tool that supports long-term awareness, habit
								recognition, and informed decision-making, while maintaining a clean and structured
								interface.
							</p>
							<div>
								<p className="font-medium">
									Originally, the calendar only showed fasting status. Now it shows:
								</p>
								<ul>
									<li>Meals</li>
									<li>Water</li>
									<li>Steps</li>
									<li>Weight</li>
									<li>Macro progress</li>
									<li>Fasting tags</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={`section-title font-medium`}>All screens</div>

						<section id="vitta-all-screens-images">
							<LightboxGallery
								images={[
									"/portfolio/images/projects/vitta/calendar/screens/calendar-1.png",
									"/portfolio/images/projects/vitta/calendar/screens/calendar-2.png",
									"/portfolio/images/projects/vitta/calendar/screens/calendar-3.png",
									"/portfolio/images/projects/vitta/calendar/screens/calendar-4.png",
									"/portfolio/images/projects/vitta/calendar/screens/calendar-5.png"
								]}
								galleryMaxHeight="500px"
								className="cursor-breakpoint"
							/>
						</section>
					</div>
				</div>
			</CustomSection>

			<CustomSection title="Food Diary - Clear Impact of Meals" id="vitta-food-diary">
				<div className="flex flex-col gap-16">
					<div className="flex flex-col gap-8">
						<div className="flex flex-row gap-4">
							<div className="flex gap-4 w-1/2">
								<SingleImageLightbox
									src="/portfolio/images/projects/vitta/food-diary/food-diary-1.png"
									alt="Food Diary"
									className="cursor-breakpoint"
									thumbnailMaxHeight="600px"
									title="Previous"
								/>

								<SingleImageLightbox
									src="/portfolio/images/projects/vitta/food-diary/food-diary-2.png"
									alt="Food Diary"
									className="cursor-breakpoint"
									thumbnailMaxHeight="600px"
									title="New"
								/>
							</div>

							<div className="flex flex-col gap-8 w-1/2">
								<p>
									The Food Diary now provides a complete picture of daily nutrition instead of just
									a meal log. The main screen displays meals with timestamps and categories, linking
									each meal to progress toward daily calorie and macro goals. Users can save
									favorite meals, create recipes, and explore new recipes based on dietary
									preferences.
								</p>
								<p>
									Selecting a meal opens a detailed view with ingredients, preparation steps,
									nutritional breakdown, difficulty, and ratings. This structure keeps the main
									interface simple while offering depth when needed. Users can see how each meal
									impacts their goals, encouraging informed choices and increasing engagement over
									time.
								</p>
								<p>This helps users understand how their meals affect their goals.</p>
							</div>
						</div>

						<div className="flex flex-row gap-8">
							<div>
								<p className="font-medium">The Food Diary now shows:</p>
								<ul>
									<li>Meals with time stamps</li>
									<li>Categories (breakfast, lunch, dinner)</li>
									<li>Progress toward calorie and macro goals</li>
								</ul>
							</div>
							<div>
								<p className="font-medium">Users can:</p>
								<ul>
									<li>Save favorite meals</li>
									<li>Create recipes</li>
									<li>Discover meals based on diet preference</li>
								</ul>
							</div>
							<div>
								<p className="font-medium">When opening a meal, users see:</p>
								<ul>
									<li>Ingredients</li>
									<li>Preparation steps</li>
									<li>Nutrition breakdown</li>
									<li>Difficulty level</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={`section-title font-medium`}>All screens</div>

						<section id="vitta-all-screens-images">
							<LightboxGallery
								images={[
									"/portfolio/images/projects/vitta/food-diary/screens/food-diary-screen-1.png",
									"/portfolio/images/projects/vitta/food-diary/screens/food-diary-screen-2.png",
									"/portfolio/images/projects/vitta/food-diary/screens/food-diary-screen-3.png"
								]}
								galleryMaxHeight="500px"
								className="cursor-breakpoint"
							/>
						</section>
					</div>
				</div>
			</CustomSection>

			<CustomSection title="Fast Time - Clearer Fasting Experience" id="vitta-fast-time">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row gap-4">
						<div className="flex gap-4 w-1/2">
							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/fast-time/fast-time-1.png"
								alt="Fast Time"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="Previous"
							/>

							<SingleImageLightbox
								src="/portfolio/images/projects/vitta/fast-time/fast-time-2.png"
								alt="Fast Time"
								className="cursor-breakpoint"
								thumbnailMaxHeight="600px"
								title="New"
							/>
						</div>

						<div className="flex flex-col gap-8 w-1/2">
							<p>
								The Fast Time feature now uses a circular progress ring instead of a segmented
								linear bar. This makes it easier to understand how much of the fast is complete and
								how much time remains.
							</p>
							<p>
								The interface separates two states: active fasting and setup. When a fast is active,
								the screen shows total duration, start time, planned end time, and remaining time.
								When stopped, users can set a new fast by scrolling to select hours, minutes, and
								seconds or by using preset durations. Users can also create custom presets. The
								design reduces friction and makes fasting easier to start and track.
							</p>
							<div className="flex p-4 flex-col gap-4">
								<p className="font-medium">There are two states:</p>
								<div className="flex gap-8">
									<div>
										<p className="font-medium">Active Fast:</p>
										<ul>
											<li>Total time</li>
											<li>Start time</li>
											<li>End time</li>
											<li>Remaining time</li>
										</ul>
									</div>
									<div>
										<p className="font-medium">Setup Mode:</p>
										<ul>
											<li>Scroll to set hours</li>
											<li>Use preset fasting times</li>
											<li>Create custom presets</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={`section-title font-medium`}>All screens</div>

						<section id="vitta-all-screens-images">
							<LightboxGallery
								images={[
									"/portfolio/images/projects/vitta/fast-time/screens/fast-time-screen-1.png",
									"/portfolio/images/projects/vitta/fast-time/screens/fast-time-screen-2.png"
								]}
								galleryMaxHeight="500px"
								className="cursor-breakpoint"
							/>
						</section>
					</div>
				</div>
			</CustomSection>

			<CustomSection title="Final Result" id="vitta-final-result">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row gap-4">
						<div className="flex flex-col gap-8">
							<p className="font-medium">All main screens together</p>
							<ul>
								<li>The home screen motivates users</li>
								<li>The calendar shows real insights</li>
								<li>The food diary connects meals to goals</li>
								<li>Fasting is easier to track</li>
								<li>The experience feels more personal</li>
							</ul>
							<p>
								The redesigned version keeps the original idea of simplicity, but improves clarity,
								structure, and usability. Most importantly, the redesign shows my growth as a UX/UI
								designer.
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={`section-title font-medium`}>All screens</div>

						<section id="vitta-final-screens-images">
							<LightboxGallery
								images={[
									"/portfolio/images/projects/vitta/final-result/final-result-1.png",
									"/portfolio/images/projects/vitta/final-result/final-result-2.png",
									"/portfolio/images/projects/vitta/final-result/final-result-3.png",
									"/portfolio/images/projects/vitta/final-result/final-result-4.png",
									"/portfolio/images/projects/vitta/final-result/final-result-5.png",
									"/portfolio/images/projects/vitta/final-result/final-result-6.png",
									"/portfolio/images/projects/vitta/final-result/final-result-7.png",
									"/portfolio/images/projects/vitta/final-result/final-result-8.png"
								]}
								galleryMaxHeight="500px"
								className="cursor-breakpoint"
							/>
						</section>
					</div>
				</div>

				<section id="vitta-figma-prototype" className="section">
					<FigmaEmbed
						url="https://embed.figma.com/design/GLl2tRPyMICP1PNcqjrbKN/Vitta-Project?node-id=1-15154&embed-host=share"
						title="Vitta Figma Design"
					/>
				</section>
			</CustomSection>

			<CustomSection title="Key Takeaways" id="vitta-key-takeaways">
				<div className="flex flex-col gap-8">
					<p className="font-medium">This project taught me an important lesson:</p>
					<p>
						The redesign of Vitta strengthens clarity, engagement, and usability while preserving
						the app's original simplicity. The home screen now emphasizes progress, the calendar and
						food diary provide meaningful insights, and Fast Time clearly shows fasting progress.
						Visual hierarchy, navigation, and information grouping were refined across the app.
						These changes reduce friction, improve motivation, and create a more personalized
						experience that encourages long-term adherence to health and diet goals.
					</p>
					<p className="font-medium">
						Good design is not about adding more. It's about improving what already exists.
					</p>
					<div>
						<p className="font-medium">By revisiting this project, I learned how to:</p>
						<ul>
							<li>Improve visual hierarchy</li>
							<li>Design better data presentation</li>
							<li>Create clearer navigation</li>
							<li>Think more about long-term engagement</li>
							<li>Balance simplicity with functionality</li>
						</ul>
					</div>
					<p>
						Vitta started as a minimal idea. Now it is a more complete, structured, and thoughtful
						product.
					</p>
				</div>
			</CustomSection>
		</main>
	);
}
