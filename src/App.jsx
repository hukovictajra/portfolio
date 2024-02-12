import { Landing, Blog, Resume } from "@pages";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/blog/:id" element={<Blog />} />
			<Route path="/resume" element={<Resume />} />
		</Routes>
	);
}

export default App;
