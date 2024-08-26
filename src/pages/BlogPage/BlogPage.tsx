import { Blog } from "@data/models";
import { Helmet } from "react-helmet";
import { ReactNode, useEffect } from "react";
import { Footer } from "@elements/Footer/Footer";
import { Navbar } from "@elements/Navbar/Navbar";
import { useSmoothScrollHeadings } from "@utils/hooks";

import "./BlogPage.scss";
import Share from "@elements/Share/Share";
import { BASE_IMAGE_URL } from "@utils/constants";

export interface BlogPageProps {
	title: string;
	blogData: Blog;
	children: ReactNode;
}

export function BlogPage({ title, children, blogData }: BlogPageProps) {
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

	useSmoothScrollHeadings();

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
					<>
						<Helmet>
							<title>Tajra Hukovic - {title}</title>
							<meta name="description" content={`Tajra Hukovic project - ${title}.`} />
							<meta
								name="keywords"
								content="Tajra Hukovic, UX/UI designer, portfolio, HTML, CSS, JavaScript, React, Figma, Canva"
							/>
							<meta property="og:title" content={`Tajra Hukovic - ${title}`} />
							<meta property="og:description" content={`Check out my project - ${title}.`} />
							<meta
								property="og:image"
								content={`${BASE_IMAGE_URL}/${blogData.id}/${blogData.image}`}
							/>
							<meta
								property="og:url"
								content={`${BASE_IMAGE_URL}/${blogData.id}/${blogData.image}`}
							/>
							<meta name="twitter:card" content="summary_large_image" />
							<meta name="twitter:title" content={`Tajra Hukovic - ${title}`} />
							<meta name="twitter:description" content={`Check out my project - ${title}.`} />
							<meta
								name="twitter:image"
								content={`${BASE_IMAGE_URL}/${blogData.id}/${blogData.image}`}
							/>
							<script type="application/ld+json">
								{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Tajra Hukovic",
            "url": "https://hukovictajra.github.io/portfolio/",
            "jobTitle": "UX/UI Designer"
          }
        `}
							</script>
						</Helmet>

						<div className="blog-content-wrapper">
							<div className="blog-content">{children}</div>
						</div>

						<div className="flex justify-center cursor-pointer text-2xl">
							<Share id={blogData.id} title={blogData.title} colors={blogData.colors} />
						</div>
					</>
				) : (
					<div>404: Blog not found</div>
				)}

				{/* <MoreProjects currentBlog={blog} /> */}
			</div>

			<Footer />
		</div>
	);
}
