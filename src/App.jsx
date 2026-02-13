import { Router } from "preact-router";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./pages/Homepage/Homepage";
import { Resume } from "./pages/Resume/Resume";
import { Vitta } from "./pages/Vitta/Vitta";
import { FasadaFestival } from "./pages/FasadaFestival/FasadaFestival";
import { MontazaTehnike } from "./pages/MontazaTehnike/MontazaTehnike";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { MelodicMix } from "./pages/MelodicMix/MelodicMix";
import { CustomCursor } from "./components/CustomCursor";
import { createHashHistory } from "history";

export function App() {
	const handleRouteChange = (e) => {
		// Scroll to top when route changes
		window.scrollTo(0, 0);

		// Dispatch custom event for cursor breakpoint reload
		setTimeout(() => {
			document.dispatchEvent(new CustomEvent("route-change", { detail: e }));
		}, 50);
	};

	return (
		<div className="app">
			<CustomCursor />
			<Navbar />

			<Router history={createHashHistory()} onChange={handleRouteChange}>
				<Homepage path="/" />
				<Homepage path="/portfolio" />
				<Resume path="/resume" />
				<FasadaFestival path="/fasada-festival" />
				<MontazaTehnike path="/montaza-tehnike" />
				<Vitta path="/vitta" />
				<Dashboard path="/dashboard" />
				<MelodicMix path="/melodic-mix" />
				<Homepage default />
			</Router>

			<Footer />
		</div>
	);
}
