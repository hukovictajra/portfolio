/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			"3xs": "320px",
			"2xs": "375px",
			xs: "425px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		container: {
			screens: {
				xxs: { max: "320px" },
				xs: { max: "375px" },
			},
		},
		extend: {
			fontFamily: {
				inter: ['"Inter"', "sans-serif"],
				inria: ['"Inria Serif"', "serif"],
				istok: ['"Istok Web"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
