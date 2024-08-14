/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
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
			screens: {
				"2xl": { max: "1536px" },
				"xl": { max: "1280px" },
				"lg": { max: "1024px" },
				"md": { max: "768px" },
				"sm": { max: "640px" },
				"xs": { max: "577px" },
				"xxs": { max: "320px" }
			}
		}
	}
};
