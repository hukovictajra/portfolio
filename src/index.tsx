import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { HamburgerMenu } from "@elements/HamburgerMenu/HamburgerMenu";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
	<React.StrictMode>
		<HashRouter>
			<App />
			<HamburgerMenu />
		</HashRouter>
	</React.StrictMode>
);
