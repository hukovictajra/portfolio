import { useEffect } from "preact/hooks";
import { route } from "preact-router";

import "./Homepage.css";

export function Homepage() {
	useEffect(() => {
		const accordionButtons = document.querySelectorAll(".qna-accordion-button");
		accordionButtons.forEach((button) => {
			button.addEventListener("click", () => {
				const content = button.nextElementSibling;
				const isOpen = content.classList.contains("qna-accordion-open");

				// Close all accordions
				document.querySelectorAll(".qna-accordion-content").forEach((item) => {
					item.classList.remove("qna-accordion-open");
					item.classList.add("qna-accordion-closed");
				});

				document.querySelectorAll(".qna-accordion-button .qna-accordion-header-plus").forEach((plus) => {
					plus.textContent = "+";
				});

				// Open clicked accordion if it was closed
				if (!isOpen) {
					content.classList.remove("qna-accordion-closed");
					content.classList.add("qna-accordion-open");
					button.querySelector(".qna-accordion-header-plus").textContent = "−";
				}
			});
		});

		document.querySelectorAll(".design-project-card").forEach((element) => {
			element.classList.add("cursor-breakpoint");
			element.setAttribute("data-label", "Click Me");
		});

		return () => {
			accordionButtons.forEach((button) => {
				button.replaceWith(button.cloneNode(true));
			});
		};
	}, []);

	const handleProjectClick = (projectPath) => {
		route(projectPath);
	};

	return (
		<main>
			{/* Hero Section */}
			<section id="hero">
				<video autoplay loop muted playsinline className="hero-video">
					<source src="/portfolio/videos/cherryblossom.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<div className="hero-container">
					<h1 className="hero-title">Welcome to my portfolio</h1>
					<div className="hero-subtitle-container">
						<span className="hero-subtitle-item" data-cursor-text="Explore UX/UI" data-cursor-size="medium">
							UX/UI
						</span>
						<span className="hero-subtitle-item" data-cursor-text="View Designs" data-cursor-size="medium">
							Graphic Design
						</span>
						<span className="hero-subtitle-item" data-cursor-text="See Gallery" data-cursor-size="medium">
							Photography
						</span>
					</div>
				</div>
			</section>

			<div className="hero-backdrop"></div>

			<section id="about" className="section">
				<div className="about-quote-container">
					<h1 className="about-quote-text">
						<span className="inria-regular">Designing&nbsp;</span>
						<span className="inria-italic-bold">user-centered</span>
						<span className="inria-regular">&nbsp;digital experiences, and expressing stories through&nbsp;</span>
						<span className="inria-italic-bold">graphic design</span>
						<span className="inria-regular">&nbsp;and&nbsp;</span>
						<span className="inria-italic-bold">photography.</span>
					</h1>
				</div>

				<div className="about-info-container">
					<div className="about-info-text-container">
						<h2 className="about-info-text-title">Hi, I'm Tajra</h2>
						<div className="about-info-text-paragraph-container">
							<p className="about-info-text-paragraph">
								a UX/UI designer with a background in psychology and a love for all things creative and user-focused.
								I've always been drawn to both design and science, and over time I discovered that UX/UI is the perfect
								way to bring those two worlds together.
							</p>
							<p className="about-info-text-paragraph">
								My journey with UX/UI design began out of curiosity, but it quickly turned into a true passion. Since
								then, I've worked on a published project, completed an internship at Encode, and earned the Google UX
								Design certificate.
							</p>
							<p className="about-info-text-paragraph">
								I volunteer as a UX/UI team coordinator and mentor at Ultra Plus, where I support other designers while
								continuing to grow myself. I also work as a freelancer, helping clients bring their ideas to life
								through intuitive and thoughtful design.
							</p>
						</div>
						<p className="about-info-text-footer-paragraph">
							Design is my passion, and I'm excited for every opportunity to learn, grow, and create something
							meaningful.
						</p>
					</div>
					<div className="about-info-image-container">
						<img
							src="/portfolio/images/cherry-tree-2.png"
							alt="Portrait of Tajra"
							className="about-info-image-container scale-x-[-1]"
						/>
					</div>
				</div>
			</section>

			{/* Design Projects Section */}
			<section id="design-projects" className="section">
				<h2 className="design-projects-section-title">Design Projects</h2>

				<div className="design-projects-container">
					<div
						className="design-project-card cursor-breakpoint"
						data-label="Click Me"
						onClick={() => handleProjectClick("/vitta")}
					>
						<div className="design-project-image-container">
							<img src="/portfolio/images/projects/vitta/showcase.png" alt="Vitta" className="design-project-image" />
						</div>
						<div className="design-project-pill-container">
							<span className="design-project-pill">2025</span>
							<span className="design-project-pill">UX/UI</span>
							<span className="design-project-pill">Design</span>
						</div>
						<div className="design-project-card-title-container">
							<h3 className="design-project-title">Vitta</h3>
							<p className="design-project-subtitle">Simple diet tracking and fasting app</p>
						</div>
					</div>

					<div
						className="design-project-card cursor-breakpoint"
						data-label="Click Me"
						onClick={() => handleProjectClick("/fasada-festival")}
					>
						<div className="design-project-image-container">
							<img
								src="/portfolio/images/projects/fasada-festival/showcase.png"
								alt="Fasada Festival"
								className="design-project-image"
							/>
						</div>
						<div className="design-project-pill-container">
							<span className="design-project-pill">2025</span>
							<span className="design-project-pill">UX/UI</span>
							<span className="design-project-pill">Design</span>
						</div>
						<div className="design-project-card-title-container">
							<h3 className="design-project-title">Fasada Festival</h3>
							<p className="design-project-subtitle">Website design for fasada festival</p>
						</div>
					</div>

					<div
						className="design-project-card cursor-breakpoint"
						data-label="Click Me"
						onClick={() => handleProjectClick("/montaza-tehnike")}
					>
						<div className="design-project-image-container">
							<img
								src="/portfolio/images/projects/montaza-tehnike/showcase.png"
								alt="Montaza Tehnike"
								className="design-project-image"
							/>
						</div>
						<div className="design-project-pill-container">
							<span className="design-project-pill">2025</span>
							<span className="design-project-pill">UX/UI</span>
							<span className="design-project-pill">Design</span>
						</div>
						<div className="design-project-card-title-container">
							<h3 className="design-project-title">Montaža Tehnike</h3>
							<p className="design-project-subtitle">Website design for Industrial company </p>
						</div>
					</div>

					<div
						className="design-project-card cursor-breakpoint"
						data-label="Click Me"
						onClick={() => handleProjectClick("/montaza-tehnike")}
					>
						<div className="design-project-image-container">
							<img
								src="/portfolio/images/projects/montaza-tehnike/showcase.png"
								alt="Montaza Tehnike"
								className="design-project-image"
							/>
						</div>
						<div className="design-project-pill-container">
							<span className="design-project-pill">2025</span>
							<span className="design-project-pill">UX/UI</span>
							<span className="design-project-pill">Design</span>
						</div>
						<div className="design-project-card-title-container">
							<h3 className="design-project-title">Montaža Tehnike</h3>
							<p className="design-project-subtitle">Website design for Industrial company </p>
						</div>
					</div>

					<div
						className="design-project-card cursor-breakpoint"
						data-label="Click Me"
						onClick={() => handleProjectClick("/dashboard")}
					>
						<div className="design-project-image-container">
							<img
								src="/portfolio/images/projects/dashboard/showcase.png"
								alt="Dashboard"
								className="design-project-image"
							/>
						</div>
						<div className="design-project-pill-container">
							<span className="design-project-pill">2024</span>
							<span className="design-project-pill">UX/UI</span>
							<span className="design-project-pill">Design</span>
						</div>
						<div className="design-project-card-title-container">
							<h3 className="design-project-title">Dashboard</h3>
							<p className="design-project-subtitle">Dashboard design practice</p>
						</div>
					</div>

					<div
						className="design-project-card cursor-breakpoint"
						data-label="Click Me"
						onClick={() => handleProjectClick("/melodic-mix")}
					>
						<div className="design-project-image-container">
							<img
								src="/portfolio/images/projects/melodic-mix/showcase.png"
								alt="Melodic Mix"
								className="design-project-image"
							/>
						</div>
						<div className="design-project-pill-container">
							<span className="design-project-pill">2024</span>
							<span className="design-project-pill">Graphic Design</span>
						</div>
						<div className="design-project-card-title-container">
							<h3 className="design-project-title">Melodic Mix</h3>
							<p className="design-project-subtitle">Freelance print design</p>
						</div>
					</div>
				</div>

				{/* <div className="design-project-view-more-container">
					<div
						id="view-more-projects-nav"
						className="design-projects-view-more w-max cursor-breakpoint"
						data-cursor-text="See All Projects"
						data-cursor-size="large"
					>
						<p className="design-projects-view-more-text">View more projects </p>
						<img className="design-projects-view-more-icon" src="/portfolio/images/linking-icon.svg" />
					</div>
				</div> */}
			</section>

			{/* <hr className="homepage-line" /> */}

			<section className="slider-section">
				<div id="slider" className="slider-track"></div>
			</section>

			{/* Quote Section */}
			<section id="quote" className="section">
				<div className="quote-container">
					<p className="quote-text">
						"In every brushstroke and panel, a world awakens — fragile, wondrous, and alive with the pulse of the
						heart."
					</p>
					<p className="quote-author">Hayao Miyazaki</p>
				</div>
			</section>

			{/* <hr className="homepage-line" /> */}

			{/* Q&A Section */}
			<section id="qna" className="section">
				<h2 className="design-projects-section-title">About Me</h2>

				<div className="qna-accordion-container">
					<button className="qna-accordion-header qna-accordion-button">
						<span className="qna-accordion-header-title">
							Outside of design, what hobbies or interests do you pursue? How do they influence your work?
						</span>
						<span className="qna-accordion-header-plus">+</span>
					</button>
					<div className="qna-accordion-content qna-accordion-closed">
						Outside of design, I really enjoy photography and painting. I love noticing small details in everyday life
						and finding ways to capture or express them. These hobbies influence my design work by keeping me creative
						and giving me a better sense of color, composition, and storytelling. Most of all, creating art is fun for
						me, and that playful approach makes it easier to enjoy the process of learning and experimenting in design.
					</div>
				</div>

				<div className="qna-accordion-container">
					<button className="qna-accordion-header qna-accordion-button">
						<span className="qna-accordion-header-title">What initially sparked your interest in UX/UI?</span>
						<span className="qna-accordion-header-plus">+</span>
					</button>
					<div className="qna-accordion-content qna-accordion-closed">
						<p>
							Design has always been close to my heart. From a young age, I knew I wanted a career where creativity
							could thrive, but I also loved the structure and curiosity that came with studying psychology and doing
							research. For a while, I wasn't sure how to bring those two sides together.
						</p>
						<p>
							When I discovered UX/UI design, it immediately clicked that it was the perfect blend of creativity and
							scientific thinking. I started learning through YouTube and Udemy, and the deeper I went, the more I
							enjoyed it. What began as curiosity quickly grew into a passion, and now I'm excited to turn it into a
							career where I can keep growing and create meaningful experiences for others.
						</p>
					</div>
				</div>

				<div className="qna-accordion-container">
					<button className="qna-accordion-header qna-accordion-button">
						<span className="qna-accordion-header-title">
							Is there a specific philosophy or principle that guides your approach to design/work?
						</span>
						<span className="qna-accordion-header-plus">+</span>
					</button>
					<div className="qna-accordion-content qna-accordion-closed">
						For me, creating art is a way to express emotions and evoke feelings, whether it's sharing my own
						experiences or connecting with others on a deeper level. I believe art should be enjoyable and inherently
						expressive. This mindset guides my approach to everything I create, infusing each project with a sense of
						joy, creativity, and the potential to resonate emotionally with its audience. My goal is to have fun and
						love what I do, ensuring that every design reflects this passion and energy.
					</div>
				</div>

				<div className="qna-accordion-container">
					<button className="qna-accordion-header qna-accordion-button">
						<span className="qna-accordion-header-title">
							What are your long-term career goals or aspirations? How do you see yourself growing in UX/UI design?
						</span>
						<span className="qna-accordion-header-plus">+</span>
					</button>
					<div className="qna-accordion-content qna-accordion-closed">
						My long-term career goal in UX/UI design is to conduct personal research that explores human experiences and
						perceptions related to design quality. I aspire to contribute insights that enhance understanding in the
						field. I see myself growing by embracing new challenges and continually learning, pushing design boundaries
						to create impactful user experiences. I aim to find happiness and fulfillment in this work, always seeking
						new and exciting challenges.
					</div>
				</div>

				<div className="qna-accordion-container">
					<button className="qna-accordion-header qna-accordion-button">
						<span className="qna-accordion-header-title">
							What excites you most about UX/UI and keeps you motivated?
						</span>
						<span className="qna-accordion-header-plus">+</span>
					</button>
					<div className="qna-accordion-content qna-accordion-closed">
						What excites me most about UX/UI design is the endless creativity it allows. After working in the field for
						two years, it's been fascinating to see how I've learned to approach different design challenges and compare
						my process to others. I enjoy understanding how other designers think and seeing the world from their
						perspective. Being inspired by innovative solutions and diving into the research behind them keeps me
						motivated to experiment, create, and continuously grow.
					</div>
				</div>
			</section>

			{/* <section className="lwt">
				<img src="/portfolio/images/lwt.png" className="lwt-image" />
			</section> */}
		</main>
	);
}
