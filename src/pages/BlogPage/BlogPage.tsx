import { Blog } from "@data/models";
import { Helmet } from "react-helmet";
import Share from "@elements/Share/Share";
import Loading from "@elements/Loading/Loading";
import { Footer } from "@elements/Footer/Footer";
import { Navbar } from "@elements/Navbar/Navbar";
import { BASE_IMAGE_URL, LAST_LOADED_PAGE_LS_KEY } from "@utils/constants";
import { ReactNode, useEffect, useState } from "react";
import { useScrollReset, useSmoothScrollHeadings, useTheme } from "@utils/hooks";

import "./BlogPage.scss";

export interface BlogPageProps {
	title: string;
	blogData: Blog;
	children: ReactNode;
}

const getRandomTimeout = () => Math.floor(Math.random() * (1250 - 950 + 1)) + 950;

export function BlogPage({ title, children, blogData }: BlogPageProps) {
	const lastLoadedPage: string | null = localStorage.getItem(LAST_LOADED_PAGE_LS_KEY);
	const isLastLoadedCurrent: boolean = lastLoadedPage
		? window.location.href === lastLoadedPage
		: false;

	const [loading, setLoading] = useState(!isLastLoadedCurrent);

	useEffect(() => {
		const timeout = isLastLoadedCurrent ? 0 : getRandomTimeout();

		localStorage.setItem(LAST_LOADED_PAGE_LS_KEY, window.location.href);

		const timer = setTimeout(() => setLoading(false), timeout);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	useTheme(blogData.colors);
	useSmoothScrollHeadings();
	useScrollReset();

	return (
		<div id="blog">
			{loading && <Loading visible={loading} />}

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
