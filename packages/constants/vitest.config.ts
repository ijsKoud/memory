import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		cache: {
			dir: "../../node_modules/.vitest"
		}
	},
	esbuild: {
		target: "ES2020"
	}
});
