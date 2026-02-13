import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
	plugins: [preact()],
	server: {
		port: 3000,
		open: true,
		allowedHosts: ["portfolio.tuxhub.cloud"],
	},
	base: "/portfolio",
	build: {
		outDir: "dist",
	},
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom": "preact/compat",
		},
	},
});
