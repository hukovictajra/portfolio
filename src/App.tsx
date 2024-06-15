import { Route, Routes } from "react-router-dom";
import { BlogPage, Landing, Resume } from "./pages";

import "./App.scss";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/blog/:id" element={<BlogPage />} />
			<Route path="/resume" element={<Resume />} />
		</Routes>
	);
}

export default App;
