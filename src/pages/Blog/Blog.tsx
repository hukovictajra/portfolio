import { useEffect, useState } from "react";

import { blogs } from "@data/Blogs";
import { useParams } from "react-router-dom";
import { Navbar } from "@elements/Navbar/Navbar";
import { Footer } from "../../elements/Footer/Footer";
import { Subtitles } from "../../elements/Subtitle/Subtitle";
import { BlogSection } from "@elements/BlogSection/BlogSection";

import "./Blog.scss";

export function Blog() {
	const [blog, setBlog] = useState(null);
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

				{blog ? (
					<div className="blog-content-wrapper">
						<div className="blog-content">
							<h1 className="blog-title satoshi">{blog.title}</h1>
							<Subtitles subtitles={blog.subtitles} colors={blog.colors} />

							<div className="hr" style={blog.style?.hr || {}} />

							{blog.sections.map((section, i) => (
								<BlogSection
									key={i}
									type={section.type}
									title={section.title}
									text={section.text}
									image={section.image}
									list={section.list}
									style={section.style}
									video={section.video}
								/>
							))}
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
