import { useEffect, useState } from "react";

import { blogs } from "@data/Blogs";
import { useParams } from "react-router-dom";
import { Footer } from "@elements/Footer/Footer";
import { Navbar } from "@elements/Navbar/Navbar";
import { Subtitles } from "@elements/Subtitle/Subtitle";
import { Blog, BlogSection, BlogSectionType } from "@data/models";
import { ListSection } from "@elements/BlogSection/ListSection/ListSection";
import { ParagraphSection } from "@elements/BlogSection/ParagraphSection/ParagraphSection";

import "./BlogPage.scss";

export function BlogPage() {
	const [blog, setBlog] = useState({} as Blog);
	const { id } = useParams();

	useEffect(() => {
		const blog = blogs.filter((x) => x.id === id)[0];

		if (blog) {
			setBlog(blog);

			if (blog.colors) {
				if (blog.colors.navbar) {
					document.documentElement.style.setProperty("--theme-bg-navbar", blog.colors.navbar);
				}

				if (blog.colors.background) {
					document.documentElement.style.setProperty("--theme-bg-primary", blog.colors.background);
				}

				if (blog.colors.primary) {
					document.documentElement.style.setProperty("--theme-primary", blog.colors.primary);
				}

				if (blog.colors.secondary) {
					document.documentElement.style.setProperty("--theme-secondary", blog.colors.secondary);
				}
			}
		}
	}, [id]);

	return (
		<div id="blog">
			<Navbar />
			<div className="blog-wrapper">
				{/* <div className="blog-back-container">
					<div className="blog-back-text-container">
						<Icon src={ItemArrowIcon} alt="->" className="blog-back-icon" />
						<span className="blog-back-text underline-effect">Back to projects</span>
					</div>
				</div> */}

				{blog && Object.keys(blog).length !== 0 ? (
					<div className="blog-content-wrapper">
						<div className="blog-content">
							<h1 className="text-6xl font-semibold  m-0 mb-4 satoshi">{blog.title}</h1>
							<Subtitles subtitles={blog.subtitles} colors={blog.colors} />

							<div className="hr" />

							{blog.sections.map((section: BlogSection, i: number) =>
								section.type === BlogSectionType.Paragraph ? (
									<ParagraphSection key={i} section={section} />
								) : (
									<ListSection key={i} section={section} />
								)
							)}
						</div>
					</div>
				) : (
					<div>404</div>
				)}

				{/* <MoreProjects currentBlog={blog} /> */}
			</div>

			<Footer />
		</div>
	);
}
