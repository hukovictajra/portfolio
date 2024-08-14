import { Blog } from "./models/Blog";
import { GreenViewDashboard } from "./blogs/GreenViewDashboard";
import { MetroSweetsBakeryData } from "@pages/Blogs/MetroSweetsBakery/data";
import { MyTributeToThe1984WinterOlympicsData } from "@pages/Blogs/TributeToWinterOlympics/data";
import { MelodicMixData } from "@pages/Blogs/MelodicMix/data";
import { SunflowerPostcardData } from "@pages/Blogs/SunflowerPostcard/data";

export const blogs: Blog[] = [
	GreenViewDashboard,
	MetroSweetsBakeryData,
	MyTributeToThe1984WinterOlympicsData,
	MelodicMixData,
	SunflowerPostcardData
];
