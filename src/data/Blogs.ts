import { Blog } from "./models/Blog";
import { MelodicMix, MelodicMixData } from "@pages/Blogs/MelodicMix";
import {
	NationalGeographicRemake,
	NationalGeographicRemakeData
} from "@pages/Blogs/NationalGeographic";
import { MetroSweetsBakery, MetroSweetsBakeryData } from "@pages/Blogs/MetroSweetsBakery";
import { SunflowerPostcard, SunflowerPostcardData } from "@pages/Blogs/SunflowerPostcard";
import { GreenviewDashboard, GreenviewDashboardData } from "@pages/Blogs/GreenviewDashboard";
import {
	TributeToThe1984WinterOlympics,
	TributeToThe1984WinterOlympicsData
} from "@pages/Blogs/TributeToWinterOlympics";
import { Primecinema, PrimecinemaData } from "@pages/Blogs/Primecinema";
import { ReactNode } from "react";

export interface BlogComponent {
	component: () => ReactNode;
	data: Blog;
}

export const blogs: BlogComponent[] = [
	{ component: NationalGeographicRemake, data: NationalGeographicRemakeData },
	{ component: Primecinema, data: PrimecinemaData },
	{ component: GreenviewDashboard, data: GreenviewDashboardData },
	{ component: MetroSweetsBakery, data: MetroSweetsBakeryData },
	{ component: MelodicMix, data: MelodicMixData },
	{ component: TributeToThe1984WinterOlympics, data: TributeToThe1984WinterOlympicsData },
	{ component: SunflowerPostcard, data: SunflowerPostcardData }
];
