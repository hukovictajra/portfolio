import { ReactNode, useEffect } from "react";

import { Blog } from "@data/models";
import { Footer } from "@elements/Footer/Footer";
import { Navbar } from "@elements/Navbar/Navbar";

import "./BlogPage.scss";

export interface BlogPageProps {
	blogData: Blog;
	children: ReactNode;
}

export function BlogPage({ children, blogData }: BlogPageProps) {
	useEffect(() => {
		if (blogData) {
			if (blogData.colors) {
				if (blogData.colors.navbar) {
					document.documentElement.style.setProperty("--theme-bg-navbar", blogData.colors.navbar);
				}

				if (blogData.colors.background) {
					document.documentElement.style.setProperty(
						"--theme-bg-primary",
						blogData.colors.background
					);
				}

				if (blogData.colors.primary) {
					document.documentElement.style.setProperty("--theme-primary", blogData.colors.primary);
				}

				if (blogData.colors.secondary) {
					document.documentElement.style.setProperty(
						"--theme-secondary",
						blogData.colors.secondary
					);
				}
			}
		}
	}, [blogData]);

	return (
		<div id="blog">
			<Navbar />

			{/* <div className="blog-back-container">
				<div className="blog-back-text-container">
					<ItemArrowIcon className="blog-back-icon" />
					<span className="blog-back-text underline-effect">Back</span>
				</div>
			</div> */}

			<div className="blog-wrapper">
				{blogData && Object.keys(blogData).length !== 0 ? (
					<div className="blog-content-wrapper">
						<div className="blog-content">{children}</div>
					</div>
				) : (
					<div>404: Blog not found</div>
				)}

				{/* <MoreProjects currentBlog={blog} /> */}
			</div>

			<Footer />
		</div>
	);
}
