import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "src/assets/"),
			"@images": path.resolve(__dirname, "src/assets/images/"),
			"@icons": path.resolve(__dirname, "src/assets/icons/"),
			"@data": path.resolve(__dirname, "src/data/"),
			"@elements": path.resolve(__dirname, "src/elements/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@styles": path.resolve(__dirname, "src/styles/"),
			"@files": path.resolve(__dirname, "src/assets/files/"),
			"@videos": path.resolve(__dirname, "src/assets/videos/"),
			"@utils": path.resolve(__dirname, "src/utils/"),
			"@models": path.resolve(__dirname, "data/models/")
		}
	}
});
