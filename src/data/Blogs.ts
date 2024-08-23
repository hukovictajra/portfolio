import { Blog } from "./models/Blog";
import { MetroSweetsBakeryData } from "@pages/Blogs/MetroSweetsBakery/data";
import { MyTributeToThe1984WinterOlympicsData } from "@pages/Blogs/TributeToWinterOlympics/data";
import { MelodicMixData } from "@pages/Blogs/MelodicMix/data";
import { SunflowerPostcardData } from "@pages/Blogs/SunflowerPostcard/data";
import { GreenviewDashboard } from "./blogs/GreenviewDashboard";

export const blogs: Blog[] = [
	GreenviewDashboard,
	MetroSweetsBakeryData,
	MyTributeToThe1984WinterOlympicsData,
	MelodicMixData,
	SunflowerPostcardData
];
