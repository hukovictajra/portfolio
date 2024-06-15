/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/index.html",
		"./src/**/*.{html,js,ts,jsx,tsx}",
		"./node_modules/react-image-gallery/**/**/*.{css,scss}"
	],
	theme: {
		colors: {
			primary: "#a41109",
			bgPrimary: "#f1e1e1",
			$primary: "#a41109",
			$secondary: "#a41109",
			$bgNavbar: "rgba(246, 232, 231, 0)",
			$linkedinPrimary: "rgb(0, 119, 181)",
			$pinterestPrimary: "rgb(230, 0, 35)",
			$instagramPrimary: "#E55D64"
		},
		extend: {
			screens: {
				"2xl": { max: "1535px" },
				"xl": { max: "1279px" },
				"lg": { max: "1023px" },
				"md": { max: "767px" },
				"sm": { max: "639px" },
				"xs": { max: "576px" },
				"xxs": { max: "320px" }
			}
		}
	}
};
