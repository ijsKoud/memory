const plugin = require("tailwindcss/plugin");

const hocusPlugin = plugin((api) => {
	api.addVariant("hocus", ["&:focus", "&:hover"]);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: "class",
	theme: {
		extend: {
			fontSize: Array(24)
				.fill(null)
				.map((_, key) => ({ [key + 1]: [(key + 1) * 4] }))
				.reduce((a, b) => ({ ...a, ...b }), {}),
			borderColor: {},
			colors: {
				"component-background": "#0F0F0F",
				"component-background-alt": "#242424"
			}
		}
	},
	plugins: [hocusPlugin, require("tailwind-scrollbar")]
};
