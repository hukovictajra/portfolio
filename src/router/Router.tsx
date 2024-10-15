import { blogs } from "@data/Blogs";
import { Landing, Resume } from "@pages/index";
import { Route, Routes } from "react-router-dom";
import GetToKnowMe from "@pages/GetToKnowMe/GetToKnowMe";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/get-to-know-me" element={<GetToKnowMe />} />
			{blogs.map((blog, i) => (
				<Route key={i} path={`/blog/${blog.data.id}`} element={blog.component()} />
			))}
			//TODO 404
		</Routes>
	);
}
