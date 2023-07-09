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
			colors: {}
		}
	},
	plugins: []
};
