import { Landing, Blog } from "@pages";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/blog/:id" element={<Blog />} />
		</Routes>
	);
}

export default App;
