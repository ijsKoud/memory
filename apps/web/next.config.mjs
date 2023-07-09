import { readdirSync } from "node:fs";
import { join } from "node:path";

const transpilePackages = readdirSync(join(process.cwd(), "..", "..", "packages")).map((pkg) => `@website/${pkg}`);

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	transpilePackages
};

export default config;
