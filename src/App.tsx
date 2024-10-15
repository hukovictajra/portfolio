import Router from "./router/Router";
import { HashRouter } from "react-router-dom";
import { HamburgerMenu } from "@elements/HamburgerMenu/HamburgerMenu";
import { ToastContainer } from "react-toastify";

import "./App.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "react-responsive-modal/styles.css";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<HashRouter>
			<Router />
			<HamburgerMenu />
			<ToastContainer />
		</HashRouter>
	);
}

export default App;
