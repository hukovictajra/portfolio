const path = require(`path`);

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
	webpack: {
		alias: {
			"@assets": resolve("src/assets/"),
			"@images": resolve("src/assets/images/"),
			"@icons": resolve("src/assets/icons/"),
			"@data": resolve("src/data/"),
			"@elements": resolve("src/elements/"),
			"@pages": resolve("src/pages/"),
			"@styles": resolve("src/styles/"),
		},
	},
};
