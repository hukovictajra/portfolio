import GoBack from "@elements/GoBack/GoBack";
import { Navbar } from "@elements/Navbar/Navbar";
import { ReactNode } from "react";

import "./ContentPage.scss";

export interface ContentPageProps {
	children: ReactNode;
}

export default function ContentPage({ children }: ContentPageProps) {
	return (
		<div id="content-page">
			<Navbar />

			<div className="content-page-wrapper">
				<GoBack />

				{children}
			</div>
		</div>
	);
}
