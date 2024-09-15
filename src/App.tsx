import { Landing, Resume } from "./pages";
import { Route, Routes } from "react-router-dom";

import GetToKnowMe from "@pages/GetToKnowMe/GetToKnowMe";
import MelodicMix from "@pages/Blogs/MelodicMix/MelodixMix";
import MetroSweetsBakery from "@pages/Blogs/MetroSweetsBakery/MetroSweetsBakery";
import SunflowerPostcard from "@pages/Blogs/SunflowerPostcard/SunflowerPostcard";
import GreenviewDashboard from "@pages/Blogs/GreenviewDashboard/GreenviewDashboard";
import TributeToWinterOlympics from "@pages/Blogs/TributeToWinterOlympics/TributeToWinterOlympics";

import "./App.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "react-responsive-modal/styles.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/get-to-know-me" element={<GetToKnowMe />} />
			<Route path="/blog/greenview-dashboard" element={<GreenviewDashboard />} />
			<Route path="/blog/metro-sweets-bakery" element={<MetroSweetsBakery />} />
			<Route
				path="/blog/my-tribute-to-the-1984-winter-olympics"
				element={<TributeToWinterOlympics />}
			/>
			<Route path="/blog/melodic-mix-a-custom-print-collaboration" element={<MelodicMix />} />
			<Route path="/blog/sunflower-postcard" element={<SunflowerPostcard />} />
			//TODO 404
		</Routes>
	);
}

export default App;
