import React, { useEffect, useState } from "react";

import blogs from "@data/blogs";
import Icon from "@elements/Icon/Icon";
import { useParams } from "react-router-dom";
import Navbar from "@elements/Navbar/Navbar";
import ItemArrowIcon from "@icons/arrow.svg";
import { Footer } from "../../elements/Footer/Footer";
import BlogSection from "@elements/BlogSection/BlogSection";
import { MoreProjects } from "@elements/MoreProjects/MoreProjects";

import "./Blog.scss";
import { Subtitle } from "../../elements/Subtitle/Subtitle";

export function Blog() {
	const [blog, setBlog] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const blog = blogs.filter((x) => x.id === id)[0];

		if (blog) {
			setBlog(blog);

			if (blog.colors) {
				if (blog.colors.navbar) {
					document.documentElement.style.setProperty("--theme-navbar-primary", blog.colors.background);
				}

				if (blog.colors.background) {
					document.documentElement.style.setProperty("--theme-bg-primary", blog.colors.background);
				}

				if (blog.colors.primary) {
					document.documentElement.style.setProperty("--theme-primary", blog.colors.primary);
				}
			}
		}
	}, []);

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
							<Subtitle blog={blog} hideTheme />

							<div className="hr" />

							{blog.sections.map((section, i) => (
								<BlogSection
									key={i}
									type={section.type}
									title={section.title}
									subtitle={section.subtitle}
									text={section.text}
									image={section.image}
									list={section.list}
								/>
							))}
						</div>
					</div>
				) : (
					<div>404</div>
				)}

				<MoreProjects />
			</div>

			<Footer />
		</div>
	);
}
